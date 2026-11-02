// Hides: where the record is stored, and which tab stores it. One tab at a time, the leader,
// holds the record lock and the SQLite worker (lib/record-worker.js); every other open tab asks
// the leader over a BroadcastChannel. Every tab keeps the whole record in memory, so a read never
// waits; the leader tells every tab each saved change. The leader is the tab the learner is
// looking at: a tab that comes into view while the leader is hidden asks for the record, and the
// leader hands it over. A save names the version of the part it was based on and is refused when
// the part has changed since, so no tab writes over another's work (lib/store.js replays it).
// Under Node, where there is no worker, the record is kept in memory, so the tests load the same
// code.
// The computer that serves the app keeps the record every device shares (scripts/serve.mjs). The
// leader saves each part there first, at the same version, and takes in what other devices saved;
// a save made while the computer cannot be reached is kept here and sent when it can be again.
import { KEYS } from '../kernel/storage.logic.js'
import { unreachable } from '../kernel/invariant.logic.js'
import { signalOf } from './decode.logic.js'

/** A tab that holds the record and does not answer within this long is said not to answer. */
const ANSWER_MS = 2000
/** While the record moves between tabs, a save waits this long for the new holder. */
const HANDOVER_MS = 15000
/** The leader asks the computer for other devices' saves this often while in view. */
const SYNC_MS = 30000
/** A computer that does not answer within this long is taken to be out of reach. */
const REACH_MS = 8000

/** Every part of the record, by key. */
/** @type {Map<string, import('./decode.logic.js').Part>} */
const parts = new Map()

/** Under Node, true while the tests have the in-memory record refuse every write. */
let refusing = false
/** Under Node, true while the tests have the in-memory record leave every write unanswered. */
let silent = false

/** How the record opened. Until `openRecords` has run it is 'ok' and holds nothing. */
/** @type {import('./decode.logic.js').RecordState} */
let state = 'ok'
let why = ''

/**
 * Told when a part changed in another tab (`changed`), when the tab holding the record stops or
 * starts answering (`answering`), and when a save sent before may be sent again (`retry`).
 * @typedef {{ type: 'changed', key: string } | { type: 'answering', ok: boolean } | { type: 'retry' }} RecordEvent
 */
/** @type {Set<(e: RecordEvent) => void>} */
const listeners = new Set()
/** @param {RecordEvent} e */
const tell = e => listeners.forEach(l => l(e))

/**
 * Listen for changes made in other tabs and for the record holder's answers.
 * @param {(e: RecordEvent) => void} listener
 * @returns {() => void}
 */
export function onRecord(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// --- the worker, in the leader tab ---

/** @type {Worker | null} */
let worker = null
let nextId = 0
/** @type {Map<number, (reply: any) => void>} */
const waiting = new Map()

/**
 * Send a message to the worker and wait for its reply.
 * @param {Record<string, unknown>} message
 * @returns {Promise<any>}
 */
function ask(message) {
  const id = nextId++
  return new Promise(done => {
    waiting.set(id, done)
    worker?.postMessage({ id, ...message })
  })
}

/**
 * The records the browser's key store held before the record moved to SQLite, by key, as text:
 * every key of Eruko's (each starts "aether-"), whichever unit wrote it. The theme stays in the
 * key store, so the first paint has it.
 * @returns {Record<string, string>}
 */
function heldBefore() {
  /** @type {Record<string, string>} */
  const held = {}
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key === null || !key.startsWith('aether-') || key === KEYS.theme || key === KEYS.sync)
        continue
      const text = localStorage.getItem(key)
      if (text !== null) held[key] = text
    }
    return held
  } catch {
    // Key store off: nothing to take over.
    return {}
  }
}

// --- this tab's part ---

const me =
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : String(Math.random())
/** @type {BroadcastChannel | null} */
let channel = null
/** 'leader' once this tab holds the record; 'waiting' while it asks for it; 'handing' while it gives it up. */
/** @type {'follower' | 'waiting' | 'leader' | 'handing'} */
let role = 'follower'
/** True while the record is moving between tabs. */
let moving = false
/** The app's own address, kept for the next time this tab takes the record. */
let base = ''
/** The tab holding the record, as last heard. */
let leaderId = ''
/** While this tab opens a new, empty record after the page is drawn: done once it is open. @type {Promise<import('./decode.logic.js').RecordState> | null} */
let opening = null

/** @param {import('./decode.logic.js').Signal} s */
const send = s => channel?.postMessage(s)
const hidden = () => document.visibilityState === 'hidden'

/**
 * Take every part the holder sent, telling the stores of each one that changed.
 * @param {Record<string, import('./decode.logic.js').Part>} records
 */
function takeAll(records) {
  for (const [key, part] of Object.entries(records)) {
    const had = parts.get(key)
    if (had && had.version >= part.version) continue
    parts.set(key, part)
    tell({ type: 'changed', key })
  }
}

/**
 * Ask the worker for the record lock, and once it is held, open the record and lead.
 * @returns {Promise<import('./decode.logic.js').RecordState>}
 */
async function lead() {
  role = 'waiting'
  const reply = await ask({ op: 'lead', base, snapshot: heldBefore() })
  role = 'leader'
  newLeader(me)
  state = reply.state ?? 'failed'
  why = reply.error ?? ''
  takeAll(reply.records ?? {})
  // The key store's copy is kept: the record takes it over only while the record is empty, so it is
  // never taken twice, and an app that still reads the key store (an older Eruko opened at the same
  // address) finds the learner's work there, never an empty page.
  send({ t: 'leader', from: me, hidden: hidden() })
  send({ t: 'snapshot', to: '*', state, why, records: Object.fromEntries(parts) })
  tell({ type: 'answering', ok: true })
  void sync()
  return state
}

/** Give the record up: tell the other tabs, close it, free the lock, and wait for it again. */
async function handOver() {
  if (role !== 'leader') return
  role = 'handing'
  send({ t: 'handover', from: me })
  await ask({ op: 'release' })
  role = 'follower'
  void lead()
}

/**
 * Save a part as the leader: in the worker, then tell every tab, then send it to the computer. The
 * save never waits for the computer, so a tab closed right after it keeps it.
 * @param {string} key
 * @param {string} text
 * @param {number} version
 * @returns {Promise<import('./decode.logic.js').SaveReply>}
 */
async function commit(key, text, version) {
  if (state !== 'ok') return { ok: false, refused: true }
  /** @type {import('./worker.js').PutReply} */
  const reply = await ask({ op: 'put', key, text, version })
  if (reply.ok) {
    const part = { text, version: reply.version }
    parts.set(key, part)
    send({ t: 'changed', key, part })
    // This tab's own screens too; a store whose write this was ignores it.
    tell({ type: 'changed', key })
    void inTurn(() => share(key, text, version))
    return reply
  }
  if ('now' in reply) return reply
  why = reply.error
  return { ok: false, refused: true }
}

/** Sends to the computer and meetings with it, one at a time, in the order asked. */
let turn = Promise.resolve()
/** @param {() => Promise<void>} job */
const inTurn = job => (turn = turn.then(job, job))

/**
 * Send a part saved here to the computer. It counts as unsent until the computer takes it, so a
 * tab closed on the way or a computer out of reach never lets the computer's older copy win; a
 * part another device saved meanwhile is settled by meeting the shared record, which keeps both.
 * @param {string} key
 * @param {string} text
 * @param {number} version the version the save was based on
 */
async function share(key, text, version) {
  const unsent = unsentSaves()
  if (key in unsent) return meet()
  unsentSaves({ ...unsent, [key]: version })
  const there = await shared({ key, text, base: version, version: version + 1 })
  if (there?.ok) {
    const left = { ...unsentSaves() }
    delete left[key]
    unsentSaves(left)
  } else if (there) await meet()
}

// --- the record every device shares, on the computer ---

/**
 * Ask the computer: no body reads every part; a body saves one. Null when it cannot be reached.
 * @param {{ key: string, text: string, base: number, version: number, force?: boolean, keep?: boolean }} [save]
 * @returns {Promise<any>}
 */
async function shared(save) {
  try {
    const res = await fetch(`${base}sync`, {
      method: save ? 'POST' : 'GET',
      body: save ? JSON.stringify(save) : null,
      signal: AbortSignal.timeout(REACH_MS)
    })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

/**
 * The saves made here while the computer could not be reached, each key with the version its first
 * one was based on; given `next`, they are kept as `next` instead. `joined` once this browser's
 * record has met the shared one.
 * @param {Record<string, number>} [next]
 * @returns {Record<string, number>}
 */
function unsentSaves(next) {
  try {
    const held = JSON.parse(localStorage.getItem(KEYS.sync) ?? '{}')
    if (next) localStorage.setItem(KEYS.sync, JSON.stringify({ ...held, unsent: next }))
    return next ?? held.unsent ?? {}
  } catch {
    return next ?? {}
  }
}

/** @param {boolean} [now] */
function joined(now) {
  try {
    const held = JSON.parse(localStorage.getItem(KEYS.sync) ?? '{}')
    if (now) localStorage.setItem(KEYS.sync, JSON.stringify({ ...held, joined: true }))
    return held.joined === true
  } catch {
    return false
  }
}

/**
 * Take in a part as another device saved it, and tell every tab.
 * @param {string} key
 * @param {import('./decode.logic.js').Part} part
 */
async function adopt(key, part) {
  const reply = await ask({ op: 'set', key, text: part.text, version: part.version })
  if (!reply.ok) return
  parts.set(key, part)
  send({ t: 'changed', key, part })
  tell({ type: 'changed', key })
}

let syncing = false
/**
 * Meet the shared record: send the saves the computer missed, take in the ones made elsewhere. The
 * first time a browser meets it, the copy saved more often wins each part; the other is kept on the
 * computer, in conflicts/, never lost.
 */
async function meet() {
  if (role !== 'leader' || state !== 'ok' || syncing) return
  syncing = true
  try {
    const there = await shared()
    if (!there) return
    const first = !joined()
    const before = new Map([...parts].map(([key, part]) => [key, part.version]))
    const unsent = unsentSaves()
    for (const key of new Set([...parts.keys(), ...Object.keys(there)])) {
      const mine = parts.get(key)
      /** @type {import('./decode.logic.js').Part | undefined} */
      const theirs = there[key]
      const since = unsent[key]
      if (mine && since !== undefined) {
        // Saved here since `since`: sent, unless another device saved the part meanwhile, which then
        // wins (this copy is kept on the computer).
        const r = await shared({
          key,
          text: mine.text,
          base: since,
          version: mine.version,
          keep: true
        })
        if (!r) return
        if (!r.ok && 'now' in r) await adopt(key, r.now)
        const left = { ...unsentSaves() }
        delete left[key]
        unsentSaves(left)
      } else if (mine && !theirs) {
        if (!(await shared({ key, text: mine.text, base: 0, version: mine.version }))) return
      } else if (theirs && !mine) await adopt(key, theirs)
      else if (mine && theirs && first && mine.text !== theirs.text) {
        if (mine.version > theirs.version) {
          if (
            !(await shared({ key, text: mine.text, base: 0, version: mine.version, force: true }))
          )
            return
        } else {
          await shared({ key, text: mine.text, base: -1, version: theirs.version, keep: true })
          await adopt(key, theirs)
        }
      } else if (
        mine &&
        theirs &&
        theirs.version !== mine.version &&
        before.get(key) === mine.version
      )
        // The computer's copy is the shared one; a part saved here while this ran is left alone.
        await adopt(key, theirs)
    }
    joined(true)
  } finally {
    syncing = false
  }
}

/** Meet the shared record in turn with the sends. */
const sync = () => inTurn(meet)

/** Puts this tab sent to the leader, waiting for its answer. @type {Map<number, (r: import('./decode.logic.js').SaveReply) => void>} */
const sent = new Map()

/**
 * Another tab, or this one, now holds the record. A put the last holder never answered is sent
 * again to the new one; saves waiting for an answer are tried again.
 * @param {string} id
 */
function newLeader(id) {
  moving = false
  if (id !== leaderId) {
    leaderId = id
    for (const done of [...sent.values()]) done({ ok: false, later: true })
  }
  // After the stores have heard the answers above.
  setTimeout(() => tell({ type: 'retry' }))
}

/** @param {MessageEvent<unknown>} e */
function heard(e) {
  const s = signalOf(e.data)
  // A message no tab of this version sends (another app on the channel, or a tab of another
  // version) is left unheard.
  if (!s) return
  switch (s.t) {
    case 'hello':
      // A tab still opening a new record answers too: the record is empty until it opens.
      if (role === 'leader' || opening)
        send({ t: 'snapshot', to: s.from, state, why, records: Object.fromEntries(parts) })
      break
    case 'snapshot':
      if (s.to !== me && s.to !== '*') break
      if (role === 'leader' || role === 'handing') break
      state = s.state
      why = s.why
      takeAll(s.records)
      firstSnapshot?.()
      tell({ type: 'answering', ok: true })
      break
    case 'leader':
      newLeader(s.from)
      tell({ type: 'answering', ok: true })
      // A tab in view takes the record from a hidden one.
      if (s.hidden && !hidden() && role === 'waiting') send({ t: 'claim', from: me })
      break
    case 'claim':
      if (role === 'leader' && hidden()) void handOver()
      break
    case 'handover':
      moving = true
      break
    case 'put':
      if (role !== 'leader' && !opening) break
      void (opening ?? Promise.resolve())
        .then(() => commit(s.key, s.text, s.version))
        .then(reply => send({ t: 'put-reply', to: s.from, id: s.id, reply }))
      break
    case 'put-reply':
      if (s.to === me) sent.get(s.id)?.(s.reply)
      break
    case 'changed': {
      const had = parts.get(s.key)
      if (had && had.version >= s.part.version) break
      parts.set(s.key, s.part)
      tell({ type: 'changed', key: s.key })
      break
    }
    default:
      unreachable(s)
  }
}

/**
 * True when this browser holds nothing of Eruko's: no file in its private storage and no part in
 * the key store.
 */
async function firstVisit() {
  if (Object.keys(heldBefore()).length > 0) return false
  try {
    const dir = await navigator.storage.getDirectory()
    for await (const _ of dir.keys()) return false
    return true
  } catch {
    return false
  }
}

/** Resolves the first wait for the record, in a tab that does not hold it. @type {(() => void) | null} */
let firstSnapshot = null

/**
 * Open the record. Resolves once every part is in memory: opened in this tab, or sent by the tab
 * that holds it. Until then a tab that holds it and does not answer is reported through `onRecord`.
 * @param {string} appBase the app's own address, ending in /
 * @returns {Promise<import('./decode.logic.js').RecordState>}
 */
export async function openRecords(appBase) {
  if (typeof Worker === 'undefined') return state
  base = appBase
  worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' })
  worker.onmessage = (/** @type {MessageEvent<{ id: number }>} */ e) => {
    const done = waiting.get(e.data.id)
    waiting.delete(e.data.id)
    done?.(e.data)
  }
  channel = new BroadcastChannel('aether-record')
  channel.onmessage = heard

  setInterval(() => hidden() || void sync(), SYNC_MS)
  window.addEventListener('online', () => void sync())
  document.addEventListener('visibilitychange', () => {
    if (!hidden()) void sync()
    if (role === 'leader') send({ t: 'leader', from: me, hidden: hidden() })
    else if (!hidden()) send({ t: 'claim', from: me })
  })
  // A tab about to be frozen gives the record up first, so no tab waits on a frozen one. A closed
  // tab needs nothing: the browser frees its lock, and the next tab in line takes the record.
  document.addEventListener('freeze', () => void (opening ?? Promise.resolve()).then(handOver))
  // Back from frozen, a tab asks for any change it missed.
  document.addEventListener('resume', () => send({ t: 'hello', from: me }))
  window.addEventListener('pageshow', e => {
    if (e.persisted) send({ t: 'hello', from: me })
  })

  // Wait in line for the record, and ask whichever tab holds it for the record now: the first of
  // the two to arrive opens the page.
  const locks = await navigator.locks.query()
  const elsewhere = [...(locks.held ?? []), ...(locks.pending ?? [])].some(
    l => l.name === 'aether-record'
  )
  // A first visit has no record to wait for: the page is drawn at once, empty, while SQLite (most
  // of a first visit's download) arrives, and the first saves wait for it.
  if (!elsewhere && (await firstVisit())) {
    opening = lead().finally(() => (opening = null))
    return state
  }
  return new Promise(done => {
    const timer = elsewhere
      ? setTimeout(() => tell({ type: 'answering', ok: false }), ANSWER_MS)
      : undefined
    const open = () => {
      clearTimeout(timer)
      firstSnapshot = null
      done(state)
    }
    firstSnapshot = () => {
      open()
      if (!hidden()) send({ t: 'claim', from: me })
    }
    void lead().then(open)
    send({ t: 'hello', from: me })
  })
}

/**
 * True while this tab holds the record. Read by the browser tests.
 * @public
 */
export const holdsRecord = () => role === 'leader'

/** How the record opened, and the reason when it did not open for writing. */
export const recordState = () => ({ state, why })

/**
 * A part of the record as text, or null when it holds none.
 * @param {string} key
 */
export const storedText = key => parts.get(key)?.text ?? null

/**
 * How many times a part has been saved: 0 when never.
 * @param {string} key
 */
export const storedVersion = key => parts.get(key)?.version ?? 0

/**
 * Save a part of the record, based on its version `version`: one transaction.
 * @param {string} key
 * @param {string} text
 * @param {number} version
 * @returns {Promise<import('./decode.logic.js').SaveReply>}
 */
export async function saveText(key, text, version) {
  if (worker === null) {
    if (refusing || state !== 'ok') return { ok: false, refused: true }
    if (silent) return { ok: false, later: true }
    const now = parts.get(key) ?? { text: '', version: 0 }
    if (now.version !== version) return { ok: false, now }
    parts.set(key, { text, version: version + 1 })
    return { ok: true, version: version + 1 }
  }
  if (opening) await opening
  if (role === 'leader') return commit(key, text, version)
  if (role === 'handing') return { ok: false, later: true }
  const id = nextId++
  return new Promise(done => {
    const timer = setTimeout(
      () => {
        sent.delete(id)
        if (!moving) tell({ type: 'answering', ok: false })
        done({ ok: false, later: true })
        // Ask again a little later: a tab that was busy or frozen may answer then.
        setTimeout(() => tell({ type: 'retry' }), ANSWER_MS)
      },
      moving ? HANDOVER_MS : ANSWER_MS
    )
    sent.set(id, reply => {
      clearTimeout(timer)
      sent.delete(id)
      tell({ type: 'answering', ok: true })
      done(reply)
    })
    send({ t: 'put', from: me, id, key, text, version })
  })
}

/**
 * The record kept in memory only, for the tests: every part starts as given, and `refuse` makes
 * every write fail, as a full or broken store would.
 * @param {Record<string, string>} [start]
 * @param {{ refuse?: boolean }} [how]
 */
export function memoryRecords(start = {}, how = {}) {
  parts.clear()
  for (const [key, text] of Object.entries(start)) parts.set(key, { text, version: 1 })
  state = 'ok'
  why = ''
  refusing = how.refuse === true
}

/**
 * For the tests: a part changed by another tab, at the version given.
 * @param {string} key
 * @param {string} text
 * @param {number} version
 */
export function changedElsewhere(key, text, version) {
  parts.set(key, { text, version })
  tell({ type: 'changed', key })
}

/**
 * For the tests: leave every write unanswered, as a tab holding the record that closed would.
 * @param {boolean} on
 */
export function recordsLater(on) {
  silent = on
}
