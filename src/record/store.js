// Hides: how a part of the record is held in memory while the page is open: every reader sees a
// change at once, the write follows a moment later, and a change made in another tab is taken in.
import { KEYS } from '../kernel/storage.logic.js'
import { isRecord, parseRecord } from '../kernel/decode.logic.js'
import { InvariantError, assert } from '../kernel/invariant.logic.js'
import { onRecord, recordState, saveText, storedText, storedVersion } from './index.js'


// Minimal external store: one value, many subscribers.

/**
 * @template T
 * @typedef {{
 *   get: () => T,
 *   set: (next: T | ((prev: T) => T)) => void,
 *   subscribe: (listener: () => void) => () => void
 * }} Store
 */

/**
 * A stored record's store: the write that follows a change is held back, and `flush` writes it now.
 * @typedef {Store<import('../kernel/decode.logic.js').JsonRecord> & { flush: () => void }} PersistedStore
 */

/**
 * @template T
 * @param {T} initial
 * @returns {Store<T>}
 */
export function createStore(initial) {
  /**
   * A store holds data, never a function, so a function given to `set` is an updater.
   * @param {T | ((prev: T) => T)} next
   * @returns {next is (prev: T) => T}
   */
  const isUpdater = next => typeof next === 'function'
  let value = initial
  /** @type {Set<() => void>} */
  const listeners = new Set()
  return {
    get: () => value,
    set(next) {
      value = isUpdater(next) ? next(value) : next
      listeners.forEach(l => l())
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    }
  }
}

/** @type {Map<string, PersistedStore>} */
const persisted = new Map()

/**
 * The kept text of every damaged part, { [key]: text }.
 * @returns {{ [key: string]: unknown }}
 */
export function damagedRecords() {
  return parseRecord(storedText(KEYS.damaged)).value
}

/**
 * What the learner has to know about the saved record: `damaged`, the parts whose stored text
 * could not be read (kept under KEYS.damaged until saved as a file); `stopped`, true once a
 * write failed: saving then stops, and the changes since stay in memory for a backup file; and
 * `waiting`, true while the tab holding the record does not answer, so changes here wait. The
 * layout says all three.
 */
export const health = createStore({
  damaged: Object.keys(damagedRecords()),
  stopped: recordState().state !== 'ok',
  waiting: false
})

/** Stop all saving after a failed write; the record in memory stays, so a backup still holds it. */
function stopSaving() {
  if (!health.get().stopped) health.set(h => ({ ...h, stopped: true }))
}

/**
 * Write a part's text over whatever it holds, or stop all saving when the write is refused. Used
 * for the kept text of damaged parts, which no other change builds on.
 * @param {string} key
 * @param {unknown} value
 */
async function save(key, value) {
  if (health.get().stopped) return
  const text = JSON.stringify(value)
  for (;;) {
    const reply = await saveText(key, text, storedVersion(key))
    if (reply.ok) return
    if ('refused' in reply) return stopSaving()
    if ('later' in reply) return afterRetry(() => void save(key, value))
  }
}

/** Work waiting for the tab holding the record to answer again. @type {Set<() => void>} */
const retries = new Set()
/** @param {() => void} work */
const afterRetry = work => void retries.add(work)

/**
 * Keep a part's unreadable text, the first copy of it, before anything is written over it.
 * @param {string} key
 * @param {string} raw
 */
function keepDamaged(key, raw) {
  const kept = damagedRecords()
  if (!(key in kept)) void save(KEYS.damaged, { ...kept, [key]: raw })
  const damaged = Object.keys({ ...kept, [key]: raw })
  // A part is first read while a page renders: the note above the page changes after it.
  queueMicrotask(() => health.set(h => ({ ...h, damaged })))
}

/** Forget the kept text once the learner has saved it as a file. */
export function forgetDamaged() {
  void save(KEYS.damaged, {})
  health.set(h => ({ ...h, damaged: [] }))
}

/**
 * Read `key` as a part of the record, keeping its text aside when it cannot be read.
 * @param {string} key
 */
function load(key) {
  const { value, damaged } = parseRecord(storedText(key))
  if (damaged != null) keepDamaged(key, damaged)
  return value
}

// A write waits this long after the first unsaved change, so typing costs one write every few
// keys instead of a whole record written on every key. A tab being hidden or closed writes at
// once, so nothing typed is lost.
const WRITE_MS = 400
/** @type {Set<PersistedStore>} */
const unsaved = new Set()
const flushAll = () => unsaved.forEach(store => store.flush())
if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', flushAll)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushAll()
  })
}

/**
 * A createStore whose value is a part of the record under `key`, memoized per key. Two
 * components reading the same key therefore share one store and one subscription: an answer saved
 * on a study page reaches the unit page without a reload. Every reader sees a change at once; the
 * write to the record follows within WRITE_MS, as one transaction.
 *
 * Another tab may change the same part. A write names the version it was based on, and the
 * changes not yet saved are kept as updaters: when the part changed elsewhere, the store takes the
 * part as it now stands and replays them on it, so neither tab's change is lost.
 *
 * The value is a record (an object) that must be JSON-serializable: hold an array, not a Set, and
 * build the Set where one is needed.
 *
 * @param {string} key a part's key, from lib/storage.js
 * @returns {PersistedStore}
 */
export function persistedStore(key) {
  const held = persisted.get(key)
  if (held) return held
  const store = new PartStore(key)
  persisted.set(key, store)
  return store
}

/** One part of the record in memory: its value, the version it is built on, and its changes not yet saved. */
class PartStore {
  #key
  #base
  /** The version of the part this store's value is built on. */
  #version
  /** The changes made here and not yet saved, oldest first. @type {((prev: import('../kernel/decode.logic.js').JsonRecord) => import('../kernel/decode.logic.js').JsonRecord)[]} */
  #pending = []
  /** True while a write is out. */
  #out = false
  /**
   * The last write no tab answered: it may have been committed all the same.
   * @type {{ text: string, count: number } | null}
   */
  #unanswered = null
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  #timer

  /** @param {string} key */
  constructor(key) {
    this.#key = key
    this.#base = createStore(load(key))
    this.#version = storedVersion(key)
    onRecord(e => {
      // A change from another tab: a write still out comes back refused and rebases then.
      if (e.type === 'changed' && e.key === key && !this.#out && storedVersion(key) > this.#version)
        this.#rebase(storedText(key), storedVersion(key))
    })
  }

  get = () => this.#base.get()

  /** @param {() => void} listener */
  subscribe = listener => this.#base.subscribe(listener)

  /** @param {import('../kernel/decode.logic.js').JsonRecord | ((prev: import('../kernel/decode.logic.js').JsonRecord) => import('../kernel/decode.logic.js').JsonRecord)} next */
  set = next => {
    const change = typeof next === 'function' ? next : () => next
    // The record is never written from a broken rule: the change that breaks one stops all saving.
    /** @param {import('../kernel/decode.logic.js').JsonRecord} prev */
    const checked = prev => {
      try {
        const value = change(prev)
        assert(isRecord(value), `a change to ${this.#key} leaves it a record`)
        return value
      } catch (error) {
        if (error instanceof InvariantError) stopSaving()
        throw error
      }
    }
    this.#base.set(checked)
    this.#pending.push(checked)
    if (this.#timer) return
    unsaved.add(this)
    this.#timer = setTimeout(this.#write, WRITE_MS)
  }

  /** Write now what is not yet written. */
  flush = () => {
    if (this.#timer) this.#write()
  }

  /**
   * Take the part as saved at `at`, and replay on it the changes not yet saved.
   * @param {string | null} text
   * @param {number} at
   */
  #rebase(text, at) {
    this.#version = at
    this.#base.set(this.#pending.reduce((value, change) => change(value), parseRecord(text).value))
  }

  #write = () => {
    clearTimeout(this.#timer)
    this.#timer = undefined
    if (this.#out || this.#pending.length === 0 || health.get().stopped) return
    this.#out = true
    unsaved.delete(this)
    const sending = this.#pending.length
    const text = JSON.stringify(this.#base.get())
    void saveText(this.#key, text, this.#version).then(reply =>
      this.#answered(reply, text, sending)
    )
  }

  /**
   * What the tab holding the record answered to a write of `text` that carried `sending` changes.
   * @param {import('./decode.logic.js').SaveReply} reply
   * @param {string} text
   * @param {number} sending
   */
  #answered(reply, text, sending) {
    this.#out = false
    if (reply.ok) {
      this.#version = reply.version
      this.#pending.splice(0, sending)
      this.#unanswered = null
      if (this.#pending.length > 0) this.#write()
    } else if ('now' in reply) {
      // The part holds just what the unanswered write sent: it was committed, so its changes
      // are saved and must not be replayed a second time.
      if (this.#unanswered !== null && reply.now.text === this.#unanswered.text) {
        this.#version = reply.now.version
        this.#pending.splice(0, this.#unanswered.count)
      } else this.#rebase(reply.now.text, reply.now.version)
      this.#unanswered = null
      this.#write()
    } else if ('refused' in reply) stopSaving()
    else {
      this.#unanswered = { text, count: sending }
      afterRetry(this.#write)
    }
  }
}

onRecord(e => {
  if (e.type === 'answering' && health.get().waiting === e.ok)
    health.set(h => ({ ...h, waiting: !e.ok }))
  if (e.type === 'retry') {
    const work = [...retries]
    retries.clear()
    work.forEach(w => w())
  }
})
