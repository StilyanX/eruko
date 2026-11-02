// Hides: SQLite. The learner's record lives in one SQLite database in the browser's private file
// storage (OPFS), opened through SQLite's own pool of file handles, which only a worker may use.
// The page talks to it in messages (lib/record-db.js): `lead` waits for the record lock and opens
// the record, `put` saves one part, `release` closes the record and frees the lock for another tab.
// Every write is one transaction. One tab holds the record at a time, through a browser lock.

/** @typedef {{ id: number, op: 'lead', base: string, snapshot: Record<string, string> }} LeadMessage */
/** @typedef {{ id: number, op: 'put', key: string, text: string, version: number }} PutMessage */
/** @typedef {{ id: number, op: 'release' }} ReleaseMessage */
/** @typedef {{ id: number, op: 'set', key: string, text: string, version: number }} SetMessage */
/**
 * A save's outcome: committed at a new version; refused because the part changed since the
 * version it was based on (the part as it stands now comes back); or refused outright.
 * @typedef {{ ok: true, version: number } | { ok: false, now: import('./decode.logic.js').Part } | { ok: false, error: string }} PutReply
 */

// The format of the database, raised by one for each change of format; MIGRATIONS[n] takes a
// database at version n to version n + 1.
const VERSION = 2
/** @type {((exec: (sql: string) => void) => void)[]} */
const MIGRATIONS = [
  exec => exec('CREATE TABLE records (key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT'),
  // Each part counts its saves, so a save made from an older copy is refused, not written over.
  exec => exec('ALTER TABLE records ADD COLUMN version INTEGER NOT NULL DEFAULT 1')
]

const FILE = '/aether.sqlite3'

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
 *   exportFile: (name: string) => Uint8Array,
 *   importDb: (name: string, bytes: Uint8Array) => void,
 *   pauseVfs: () => void,
 *   unpauseVfs: () => Promise<void>
 * }} Pool
 */

/** The open database and its pool while this tab holds the record. @type {{ db: Db, pool: Pool } | null} */
let held = null
/** The pool, kept across a release so the next `lead` reopens it. @type {Pool | null} */
let pool = null
let readOnly = false
/** Frees the record lock. @type {(() => void) | null} */
let unlock = null

/**
 * Wait for the record lock, then keep it until `release`.
 * @returns {Promise<void>}
 */
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

/**
 * @param {Db} db
 * @param {string} sql
 * @param {unknown[]} [bind]
 */
const rows = (db, sql, bind = []) =>
  db.exec({ sql, bind, returnValue: 'resultRows', rowMode: 'array' })

/**
 * Bring the database to VERSION, one step at a time, copying the file first when it holds a
 * record of an older format.
 * @param {Db} db
 * @param {Pool} pool
 */
function migrate(db, pool) {
  const from = Number(db.selectValue('PRAGMA user_version'))
  if (from > VERSION)
    throw new Error(`The record is in format ${from}, newer than the ${VERSION} this app knows.`)
  if (from === VERSION) return
  if (from > 0) pool.importDb(`/aether-before-${VERSION}.sqlite3`, pool.exportFile(FILE))
  for (let n = from; n < VERSION; n++) {
    const step = MIGRATIONS[n]
    if (!step) throw new Error(`No step takes the record from format ${n}.`)
    db.transaction(() => {
      step(sql => db.exec(sql))
      db.exec(`PRAGMA user_version = ${n + 1}`)
    })
  }
}

/**
 * Take the record: wait for the lock, then open the database, check it, bring its format up to
 * date, and take over the records the browser's key store held before.
 * @param {LeadMessage} m
 * @returns {Promise<{ state: import('./decode.logic.js').RecordState, records: Record<string, import('./decode.logic.js').Part>, error?: string }>}
 */
async function lead(m) {
  await takeLock()
  let open = pool
  if (open === null) {
    const { default: init } = await import(`${m.base}sqlite-3.54.0/sqlite3.mjs`)
    const sqlite3 = await init()
    // A pool that fails to start is never wiped, so a record is never lost to a failed start.
    /** @type {Pool} */
    const started = await sqlite3.installOpfsSAHPoolVfs({
      name: 'aether',
      preserveOnInitFailure: true
    })
    open = started
  } else await open.unpauseVfs()
  pool = open
  const db = new open.OpfsSAHPoolDb(FILE)
  held = { db, pool: open }
  const check = String(db.selectValue('PRAGMA quick_check'))
  if (check !== 'ok') {
    readOnly = true
    return { state: 'read-only', records: readAll(db), error: check }
  }
  migrate(db, open)
  const count = Number(db.selectValue('SELECT count(*) FROM records'))
  const taken = Object.entries(m.snapshot)
  if (count === 0 && taken.length > 0)
    db.transaction(() => {
      for (const [key, text] of taken)
        db.exec({ sql: 'INSERT INTO records (key, value) VALUES (?, ?)', bind: [key, text] })
    })
  return { state: 'ok', records: readAll(db) }
}

/**
 * @param {Db} db
 * @returns {Record<string, import('./decode.logic.js').Part>}
 */
function readAll(db) {
  const format = Number(db.selectValue('PRAGMA user_version'))
  if (format === 0) return {}
  const sql =
    format === 1 ? 'SELECT key, value, 1 FROM records' : 'SELECT key, value, version FROM records'
  return Object.fromEntries(
    rows(db, sql).map(([k, v, n]) => [String(k), { text: String(v), version: Number(n) }])
  )
}

/**
 * Save a part, only if it is still at the version the save was based on (0: never saved).
 * @param {PutMessage} m
 * @returns {PutReply}
 */
function put(m) {
  if (readOnly || held === null) return { ok: false, error: 'The record is open read-only.' }
  const { db } = held
  /** @type {PutReply} */
  let reply = { ok: true, version: m.version + 1 }
  db.transaction(() => {
    const now = rows(db, 'SELECT value, version FROM records WHERE key = ?', [m.key])[0]
    const version = now ? Number(now[1]) : 0
    if (version !== m.version) {
      reply = {
        ok: false,
        now: { text: now ? String(now[0]) : '', version }
      }
      return
    }
    db.exec({
      sql: 'INSERT INTO records (key, value, version) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, version = excluded.version',
      bind: [m.key, m.text, version + 1]
    })
  })
  return reply
}

/**
 * Write a part as another device saved it, at its version, whatever it held here.
 * @param {SetMessage} m
 */
function set(m) {
  if (readOnly || held === null) return { ok: false, error: 'The record is open read-only.' }
  held.db.exec({
    sql: 'INSERT INTO records (key, value, version) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, version = excluded.version',
    bind: [m.key, m.text, m.version]
  })
  return { ok: true, version: m.version }
}

/** Close the record and free the lock, so another tab can take it. */
function release() {
  if (held !== null) {
    held.db.close()
    held.pool.pauseVfs()
    held = null
  }
  readOnly = false
  unlock?.()
  unlock = null
}

self.onmessage = (
  /** @type {MessageEvent<LeadMessage | PutMessage | SetMessage | ReleaseMessage>} */ e
) => {
  const m = e.data
  const reply = (/** @type {Record<string, unknown>} */ body) =>
    self.postMessage({ id: m.id, ...body })
  const error = (/** @type {unknown} */ err) => (err instanceof Error ? err.message : String(err))
  if (m.op === 'lead')
    lead(m).then(
      r => reply(r),
      err => {
        // A record that did not open is not held: the lock goes to the next tab.
        try {
          release()
        } catch {
          unlock?.()
        }
        reply({ state: 'failed', records: {}, error: error(err) })
      }
    )
  else if (m.op === 'put' || m.op === 'set')
    try {
      reply(m.op === 'put' ? put(m) : set(m))
    } catch (err) {
      reply({ ok: false, error: error(err) })
    }
  else {
    try {
      release()
    } catch (err) {
      // The lock is freed even when closing fails, and the leader is told why.
      unlock?.()
      return reply({ ok: true, closed: error(err) })
    }
    unlock?.()
    reply({ ok: true })
  }
}

export {}
