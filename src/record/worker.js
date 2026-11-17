// Hides: SQLite. The learner's record lives in one SQLite file in the browser's private file
// storage (OPFS), opened in each tab's own worker through wa-sqlite's OPFSCoopSyncVFS, which hands
// the file between tabs: every tab saves on its own. The page talks to it in messages
// (record/index.js): `lead` opens the record, `put` saves one part, `read` reads every part, and
// `release` closes it.
// Every write is one transaction.
// Before this, the record lived in SQLite's own pool of file handles (opfs-sahpool), which only one
// tab at a time may open. The first tab to start copies that file byte for byte into the new one,
// checks the copy, and only then uses it; the old file is never changed or removed. A copy that
// fails leaves this tab on the old pool, holding the record lock as before (engine 'pool').
import { sameRecord } from './move.logic.js'

/** @typedef {{ id: number, op: 'lead', base: string, snapshot: Record<string, string> }} LeadMessage */
/** @typedef {{ id: number, op: 'put', key: string, text: string, version: number }} PutMessage */
/** @typedef {{ id: number, op: 'release' }} ReleaseMessage */
/** @typedef {{ id: number, op: 'read' }} ReadMessage */
/** @typedef {{ id: number, op: 'set', key: string, text: string, version: number, was: number }} SetMessage */
/**
 * A save's outcome: committed at a new version; refused because the part changed since the
 * version it was based on (the part as it stands now comes back); or refused outright.
 * @typedef {{ ok: true, version: number } | { ok: false, now: import('./decode.logic.js').Part } | { ok: false, error: string }} PutReply
 */

// The format of the database, raised by one for each change of format; MIGRATIONS[n] takes a
// database at version n to version n + 1.
const VERSION = 2
const MIGRATIONS = [
  'CREATE TABLE records (key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT',
  // Each part counts its saves, so a save made from an older copy is refused, not written over.
  'ALTER TABLE records ADD COLUMN version INTEGER NOT NULL DEFAULT 1'
]

/** The record in the old pool. */
const FILE = '/aether.sqlite3'
/** The old pool's folder in OPFS (SQLite names it after the pool). */
const POOL_DIR = '.aether'
/** The record as wa-sqlite opens it, a plain file in OPFS. */
const NEW_FILE = 'eruko.sqlite3'
/** Made once the old record is copied and checked, or there was none: the new file is the record. */
const MOVED = 'eruko-moved'
const WA = 'wa-sqlite-1.2.0'
const UPSERT =
  'INSERT INTO records (key, value, version) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, version = excluded.version'

// --- the record lock: held while copying the old record, and by a tab left on the old pool ---

/** Frees the record lock. @type {(() => void) | null} */
let unlock = null

/** @returns {Promise<void>} */
const takeLock = () =>
  new Promise(done => {
    void navigator.locks.request(
      'aether-record',
      () =>
        new Promise(free => {
          unlock = () => free(undefined)
          done()
        })
    )
  })

const freeLock = () => {
  unlock?.()
  unlock = null
}

// --- wa-sqlite: the record, one connection per tab ---

/**
 * The parts of wa-sqlite's API this file uses.
 * @typedef {{
 *   open_v2: (name: string) => Promise<number>,
 *   close: (db: number) => Promise<number>,
 *   statements: (db: number, sql: string) => AsyncIterable<number>,
 *   bind_collection: (stmt: number, bind: unknown[]) => number,
 *   step: (stmt: number) => Promise<number>,
 *   row: (stmt: number) => unknown[]
 * }} Api
 */
/** @type {Api | null} */
let api = null
/** The open connection. @type {number | null} */
let db = null

const SQLITE_ROW = 100
/** SQLITE_BUSY and SQLITE_LOCKED: another tab holds the file for now. */
const BUSY = new Set([5, 6])
/** A statement or transaction another tab keeps busy is tried again for this long. */
const BUSY_MS = 15000
/** True while this connection is in a transaction, which is retried whole, never one statement. */
let inTx = false

/**
 * Run `work`, again while another tab keeps the file busy.
 * @template T
 * @param {() => Promise<T>} work
 * @returns {Promise<T>}
 */
async function whileBusy(work) {
  const until = Date.now() + BUSY_MS
  for (;;)
    try {
      return await work()
    } catch (err) {
      const code = typeof err === 'object' && err !== null && 'code' in err ? err.code : 0
      if (!BUSY.has(Number(code)) || Date.now() > until) throw err
      await new Promise(done => setTimeout(done, 10 + Math.random() * 90))
    }
}

/**
 * Run `sql` on `on` and return every row.
 * @param {number} on
 * @param {string} sql
 * @param {unknown[]} [bind]
 */
const rows = (on, sql, bind) => (inTx ? run(on, sql, bind) : whileBusy(() => run(on, sql, bind)))

/**
 * @param {number} on
 * @param {string} sql
 * @param {unknown[]} [bind]
 */
async function run(on, sql, bind) {
  if (!api) throw new Error('wa-sqlite is not loaded.')
  /** @type {unknown[][]} */
  const out = []
  for await (const stmt of api.statements(on, sql)) {
    if (bind) api.bind_collection(stmt, bind)
    while ((await api.step(stmt)) === SQLITE_ROW) out.push(api.row(stmt))
  }
  return out
}

/**
 * @param {number} on
 * @param {string} sql
 */
const value = async (on, sql) => (await rows(on, sql))[0]?.[0]

/**
 * Run `work` in one write transaction, taken at once so no other tab writes in between.
 * @template T
 * @param {number} on
 * @param {() => Promise<T>} work
 * @returns {Promise<T>}
 */
const inTransaction = (on, work) =>
  whileBusy(async () => {
    inTx = true
    try {
      await run(on, 'BEGIN IMMEDIATE')
      const result = await work()
      await run(on, 'COMMIT')
      return result
    } catch (err) {
      await run(on, 'ROLLBACK').catch(() => {})
      throw err
    } finally {
      inTx = false
    }
  })

/**
 * @param {string} base
 * @returns {Promise<Api>}
 */
async function loadWa(base) {
  if (api) return api
  const [{ default: Factory }, SQLite, { OPFSCoopSyncVFS }] = await Promise.all([
    import(`${base}${WA}/dist/wa-sqlite.mjs`),
    import(`${base}${WA}/src/sqlite-api.js`),
    import(`${base}${WA}/src/examples/OPFSCoopSyncVFS.js`)
  ])
  const module = await Factory()
  const sqlite = SQLite.Factory(module)
  sqlite.vfs_register(await OPFSCoopSyncVFS.create('eruko', module), true)
  api = sqlite
  return sqlite
}

/**
 * Every table's row count, the format, and SQLite's two checks.
 * @param {(sql: string) => Promise<unknown>} one
 * @param {boolean} deep run integrity_check too
 * @returns {Promise<import('./move.logic.js').Census>}
 */
async function census(one, deep) {
  const listed = await one(
    "SELECT group_concat(name, char(31)) FROM (SELECT name FROM sqlite_schema WHERE type = 'table' ORDER BY name)"
  )
  const names = typeof listed === 'string' ? listed : ''
  /** @type {Record<string, number>} */
  const tables = {}
  for (const name of names ? names.split('\u001f') : [])
    tables[name] = Number(await one(`SELECT count(*) FROM "${name.replaceAll('"', '""')}"`))
  return {
    format: Number(await one('PRAGMA user_version')),
    tables,
    check: said(await one('PRAGMA quick_check')),
    ...(deep && { integrity: said(await one('PRAGMA integrity_check')) })
  }
}

/** What a check said, as text. @param {unknown} v */
const said = v => (typeof v === 'string' ? v : JSON.stringify(v))

/** @param {FileSystemDirectoryHandle} dir @param {string} name */
const has = async (dir, name) => {
  for await (const n of dir.keys()) if (n === name) return true
  return false
}

/**
 * Copy the old pool's record into NEW_FILE, byte for byte, and check the copy opens with the same
 * tables, rows and format, passing both checks. Then mark it moved. Throws on any failure, with
 * the old record untouched.
 * @param {string} base
 * @param {FileSystemDirectoryHandle} root
 */
async function move(base, root) {
  if (await has(root, POOL_DIR)) {
    const old = await openPool(base)
    if (old.getFileNames().includes(FILE)) {
      const before = await census(async sql => old.db().selectValue(sql), false)
      if (before.check !== 'ok') throw new Error(`The old record failed its check: ${before.check}`)
      const bytes = old.exportFile(FILE)
      const file = await root.getFileHandle(NEW_FILE, { create: true })
      // A worker's file handle has this; the page's DOM types leave it out.
      /** @type {{ truncate: (n: number) => void, write: (b: Uint8Array, o: { at: number }) => number, read: (b: Uint8Array, o: { at: number }) => number, flush: () => void, getSize: () => number, close: () => void }} */
      /** @type {any} */
      const opened = file
      const sync = await opened.createSyncAccessHandle()
      try {
        sync.truncate(0)
        sync.write(bytes, { at: 0 })
        sync.flush()
        const back = new Uint8Array(sync.getSize())
        sync.read(back, { at: 0 })
        if (back.length !== bytes.length || back.some((b, i) => b !== bytes[i]))
          throw new Error('The copy of the record does not read back as written.')
      } finally {
        sync.close()
      }
      const wa = await loadWa(base)
      const copy = await wa.open_v2(NEW_FILE)
      try {
        const differs = sameRecord(before, await census(sql => value(copy, sql), true))
        if (differs) throw new Error(differs)
      } finally {
        await wa.close(copy)
      }
    }
  }
  const mark = await (await root.getFileHandle(MOVED, { create: true })).createWritable()
  await mark.write(`${NEW_FILE} copied from ${POOL_DIR}${FILE}; the old file is kept.\n`)
  await mark.close()
}

/**
 * Bring the database to VERSION, one step at a time.
 * @param {number} on
 */
async function migrate(on) {
  const from = Number(await value(on, 'PRAGMA user_version'))
  if (from > VERSION)
    throw new Error(`The record is in format ${from}, newer than the ${VERSION} this app knows.`)
  for (let n = from; n < VERSION; n++) {
    const step = MIGRATIONS[n]
    if (!step) throw new Error(`No step takes the record from format ${n}.`)
    await inTransaction(on, async () => {
      await rows(on, step)
      await rows(on, `PRAGMA user_version = ${n + 1}`)
    })
  }
}

/**
 * @param {(sql: string) => Promise<unknown[][]>} all
 * @returns {Promise<Record<string, import('./decode.logic.js').Part>>}
 */
async function readAll(all) {
  const format = Number((await all('PRAGMA user_version'))[0]?.[0])
  if (format === 0) return {}
  const sql =
    format === 1 ? 'SELECT key, value, 1 FROM records' : 'SELECT key, value, version FROM records'
  return Object.fromEntries(
    (await all(sql)).map(([k, v, n]) => [String(k), { text: String(v), version: Number(n) }])
  )
}

/** @typedef {{ state: import('./decode.logic.js').RecordState, records: Record<string, import('./decode.logic.js').Part>, error?: string, engine: 'wa' | 'pool', kept?: string }} LeadReply */

/**
 * Open the record in this tab. The first tab copies the old record over, under the record lock;
 * every tab after opens the copy and frees the lock at once.
 * @param {LeadMessage} m
 * @returns {Promise<LeadReply>}
 */
async function lead(m) {
  await takeLock()
  const root = await navigator.storage.getDirectory()
  if (!(await has(root, MOVED)))
    try {
      await move(m.base, root)
    } catch (err) {
      // Stay on the old record: it is untouched, and this tab keeps the lock as before.
      return { ...(await leadPool(m)), engine: 'pool', kept: error(err) }
    }
  if (held) {
    held.db.close()
    held = null
  }
  if (pool && !pool.isPaused()) pool.pauseVfs()
  const wa = await loadWa(m.base)
  const on = await whileBusy(() => wa.open_v2(NEW_FILE))
  db = on
  // The lock is held until the record is set up, so no other tab opens it half made.
  try {
    return await setUp(on, m)
  } finally {
    freeLock()
  }
}

/**
 * Check the record, bring its format up to date, and take over the key store's records.
 * @param {number} on
 * @param {LeadMessage} m
 * @returns {Promise<LeadReply>}
 */
async function setUp(on, m) {
  // Each commit reaches the disk before it returns.
  await rows(on, 'PRAGMA synchronous = FULL')
  const check = String(await value(on, 'PRAGMA quick_check'))
  const all = (/** @type {string} */ sql) => rows(on, sql)
  if (check !== 'ok') {
    readOnly = true
    return { state: 'read-only', records: await readAll(all), error: check, engine: 'wa' }
  }
  await migrate(on)
  const taken = Object.entries(m.snapshot)
  if (taken.length > 0)
    await inTransaction(on, async () => {
      if (Number(await value(on, 'SELECT count(*) FROM records')) > 0) return
      for (const [key, text] of taken)
        await rows(on, 'INSERT INTO records (key, value) VALUES (?, ?)', [key, text])
    })
  return { state: 'ok', records: await readAll(all), engine: 'wa' }
}

// --- the old pool: read for the copy, and the record while a copy has failed ---

// The parts of SQLite's own JavaScript API this file uses.
/**
 * @typedef {{
 *   exec: (q: string | { sql: string, bind?: unknown[], returnValue?: 'resultRows', rowMode?: 'array' }) => unknown[][],
 *   selectValue: (sql: string | { sql: string, bind?: unknown[] }) => unknown,
 *   transaction: (work: () => void) => void,
 *   close: () => void
 * }} Db
 * @typedef {{
 *   OpfsSAHPoolDb: new (file: string) => Db,
 *   getFileNames: () => string[],
 *   exportFile: (name: string) => Uint8Array,
 *   importDb: (name: string, bytes: Uint8Array) => void,
 *   pauseVfs: () => void,
 *   isPaused: () => boolean,
 *   unpauseVfs: () => Promise<void>
 * }} Pool
 */

/** The old record open in its pool. @type {{ db: Db, pool: Pool } | null} */
let held = null
/** The pool, kept across a release so the next `lead` reopens it. @type {Pool | null} */
let pool = null
let readOnly = false

/** A tab closed while it held the record frees the lock at once and the record's files a moment later. */
const FREED_MS = 5000

/**
 * Open the record's files, trying again while the browser still counts them as held by a tab that
 * has just closed ("No modification allowed").
 * @template T
 * @param {() => Promise<T>} start
 * @returns {Promise<T>}
 */
async function whenFreed(start) {
  const until = Date.now() + FREED_MS
  for (;;)
    try {
      return await start()
    } catch (err) {
      const busy = err instanceof Error && err.name === 'NoModificationAllowedError'
      if (!busy || Date.now() > until) throw err
      await new Promise(done => setTimeout(done, 100))
    }
}

/**
 * Start the old pool (or wake it) and open its record.
 * @param {string} base
 */
async function openPool(base) {
  let open = pool
  if (open === null) {
    const { default: init } = await import(`${base}sqlite-3.54.0/sqlite3.mjs`)
    const sqlite3 = await init()
    // A pool that fails to start is never wiped, so a record is never lost to a failed start.
    /** @type {Pool} */
    const started = await whenFreed(() =>
      sqlite3.installOpfsSAHPoolVfs({
        name: 'aether',
        preserveOnInitFailure: true,
        forceReinitIfPreviouslyFailed: true
      })
    )
    open = pool = started
  } else if (open.isPaused()) {
    const paused = open
    await whenFreed(() => paused.unpauseVfs())
  }
  const ready = open
  return {
    getFileNames: () => ready.getFileNames(),
    exportFile: (/** @type {string} */ name) => ready.exportFile(name),
    db: () => (held ??= { db: new ready.OpfsSAHPoolDb(FILE), pool: ready }).db
  }
}

/**
 * @param {Db} on
 * @param {string} sql
 * @param {unknown[]} [bind]
 */
const poolRows = (on, sql, bind = []) =>
  on.exec({ sql, bind, returnValue: 'resultRows', rowMode: 'array' })

/**
 * Open the old record as before the move: the tab holds the lock until `release`.
 * @param {LeadMessage} m
 * @returns {Promise<{ state: import('./decode.logic.js').RecordState, records: Record<string, import('./decode.logic.js').Part>, error?: string }>}
 */
async function leadPool(m) {
  const on = (await openPool(m.base)).db()
  const all = async (/** @type {string} */ sql) => poolRows(on, sql)
  const check = String(on.selectValue('PRAGMA quick_check'))
  if (check !== 'ok') {
    readOnly = true
    return { state: 'read-only', records: await readAll(all), error: check }
  }
  const from = Number(on.selectValue('PRAGMA user_version'))
  if (from > VERSION)
    throw new Error(`The record is in format ${from}, newer than the ${VERSION} this app knows.`)
  if (from > 0 && from < VERSION && pool)
    pool.importDb(`/aether-before-${VERSION}.sqlite3`, pool.exportFile(FILE))
  for (let n = from; n < VERSION; n++) {
    const step = MIGRATIONS[n]
    if (!step) throw new Error(`No step takes the record from format ${n}.`)
    on.transaction(() => {
      on.exec(step)
      on.exec(`PRAGMA user_version = ${n + 1}`)
    })
  }
  const taken = Object.entries(m.snapshot)
  if (Number(on.selectValue('SELECT count(*) FROM records')) === 0 && taken.length > 0)
    on.transaction(() => {
      for (const [key, text] of taken)
        on.exec({ sql: 'INSERT INTO records (key, value) VALUES (?, ?)', bind: [key, text] })
    })
  return { state: 'ok', records: await readAll(all) }
}

// --- saving ---

/**
 * Save a part, only if it is still at the version the save was based on (0: never saved).
 * @param {PutMessage} m
 * @returns {Promise<PutReply>}
 */
async function put(m) {
  if (readOnly) return { ok: false, error: 'The record is open read-only.' }
  /**
   * @param {unknown[] | undefined} now
   * @returns {PutReply | null}
   */
  const decide = now => {
    const version = now ? Number(now[1]) : 0
    return version === m.version
      ? null
      : { ok: false, now: { text: now ? String(now[0]) : '', version } }
  }
  const select = 'SELECT value, version FROM records WHERE key = ?'
  if (db !== null) {
    const on = db
    return inTransaction(on, async () => {
      const refused = decide((await rows(on, select, [m.key]))[0])
      if (refused) return refused
      await rows(on, UPSERT, [m.key, m.text, m.version + 1])
      return { ok: true, version: m.version + 1 }
    })
  }
  if (held === null) return { ok: false, error: 'The record is not open.' }
  const on = held.db
  /** @type {PutReply} */
  let reply = { ok: true, version: m.version + 1 }
  on.transaction(() => {
    const refused = decide(poolRows(on, select, [m.key])[0])
    if (refused) reply = refused
    else on.exec({ sql: UPSERT, bind: [m.key, m.text, m.version + 1] })
  })
  return reply
}

/**
 * Write a part as another device saved it, at its version, if it still holds the version `was`
 * (0: none).
 * @param {SetMessage} m
 * @returns {Promise<PutReply>}
 */
async function set(m) {
  if (readOnly) return { ok: false, error: 'The record is open read-only.' }
  const bind = [m.key, m.text, m.version]
  const select = 'SELECT version FROM records WHERE key = ?'
  /** @param {unknown[] | undefined} now */
  const current = now => (now ? Number(now[0]) : 0) === m.was
  /** @type {PutReply} */
  const done = { ok: true, version: m.version }
  /** @type {PutReply} */
  const moved = { ok: false, error: 'The part changed here meanwhile.' }
  if (db !== null) {
    const on = db
    return inTransaction(on, async () => {
      if (!current((await rows(on, select, [m.key]))[0])) return moved
      await rows(on, UPSERT, bind)
      return done
    })
  }
  if (held === null) return { ok: false, error: 'The record is not open.' }
  const on = held.db
  if (!current(poolRows(on, select, [m.key])[0])) return moved
  on.exec({ sql: UPSERT, bind })
  return done
}

/** Close the record and free the lock. */
async function release() {
  try {
    if (db !== null && api) await api.close(db)
    if (held !== null) {
      held.db.close()
      held.pool.pauseVfs()
    }
  } finally {
    db = null
    held = null
    readOnly = false
    freeLock()
  }
}

/** @param {unknown} err */
const error = err => (err instanceof Error ? err.message : String(err))

// One message at a time: a connection runs one transaction at a time.
let turn = Promise.resolve()

self.onmessage = (
  /** @type {MessageEvent<LeadMessage | PutMessage | SetMessage | ReleaseMessage | ReadMessage>} */ e
) => {
  const m = e.data
  const reply = (/** @type {Record<string, unknown>} */ body) =>
    self.postMessage({ id: m.id, ...body })
  turn = turn.then(async () => {
    if (m.op === 'lead')
      try {
        reply(await lead(m))
      } catch (err) {
        // A record that did not open is not held: the lock goes to the next tab.
        await release().catch(() => {})
        reply({ state: 'failed', records: {}, error: error(err) })
      }
    else if (m.op === 'read') {
      const on = db
      reply({ records: on === null ? {} : await readAll(sql => rows(on, sql)) })
    } else if (m.op === 'put' || m.op === 'set')
      try {
        reply(m.op === 'put' ? await put(m) : await set(m))
      } catch (err) {
        reply({ ok: false, error: error(err) })
      }
    else
      try {
        await release()
        reply({ ok: true })
      } catch (err) {
        // The lock is freed even when closing fails, and the leader is told why.
        reply({ ok: true, closed: error(err) })
      }
  })
}
