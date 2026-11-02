// Hides: what runs behind every Go page while it is open: the engine's pass over each ended game,
// the problems built from the learner's own games on a thread of their own, and (on the work
// list) the server's rating read once a study day. Each task keeps a key of what it reads, and
// `sync` starts, stops or leaves it as the key says, after every redraw. What a task learns goes
// to the record as an event (session.dom.js).
import { askEngine } from './engine.dom.js'
import { OWN_TRIES, attemptsOf, courseOf, courseUsed, nextPosition } from './own.logic.js'
import { posedOf } from './decode.logic.js'
import { passAnswerOf, passAt, queryFor } from './review.logic.js'
import { readPlayer } from './server.dom.js'
import { goView } from './screens.dom.js'
import { send } from './session.dom.js'

/**
 * What runs behind a page follows each redraw: `sync`
 * runs once after the redraws of a turn, while `el` is on the page.
 * @param {Element} el
 * @param {() => void} sync
 * @returns {() => void}
 */
export function afterRedraw(el, sync) {
  let later = false
  return () => {
    if (later || !el.isConnected) return
    later = true
    setTimeout(() => {
      later = false
      if (el.isConnected) sync()
    })
  }
}

/** How many times the engine may refuse a game's position before the game is left out of the pass. */
const REFUSALS = 3
/** How long the pass waits before asking again: after a refusal, and while nothing answers. */
const AGAIN_REFUSED_MS = 1000
const AGAIN_DOWN_MS = 30000

// The positions whose search this page has started, so a start is counted once.
/** @type {Set<string>} */
const started = new Set()

/** The thread a problem from the learner's own game is posed and solved on (src/units/go/own-worker.js). */
const OWN_WORKER = new URL('./own-worker.dom.js', import.meta.url)

/** A key no state of the record gives, so the first `sync` always runs. */
const NONE = '\u0000'

/**
 * The engine's pass and the problems from the learner's games, for one screen. `changed` redraws
 * the screen when `stalled` changes. The engine's pass sends every position of an ended game
 * once, at the stored setting, one after another, and keeps the answers; the engine is asked
 * again half a minute after it fails to answer, and a game it will not read is left out, so the
 * games after it are read. When the course has no never-tried problem left, the next position of
 * a reviewed game's list is posed and solved off the page's own thread, and the search's answer
 * is kept; a position whose search was started on several visits and never finished is passed over.
 */
export class Background {
  /** Whether the last query went unanswered. */
  stalled = false
  #changed
  #again = 0
  #refused = 0
  #passKey = NONE
  /** @type {(() => void) | null} */
  #passStop = null
  /** @type {string | undefined} */
  #ownKey = NONE
  /** @type {(() => void) | null} */
  #ownStop = null

  /** @param {() => void} changed */
  constructor(changed) {
    this.#changed = changed
  }

  /** Start, restart or leave each task, as the record now stands. */
  sync() {
    this.#syncPass()
    this.#syncOwn()
  }

  /** Stop every task: the screen left the page. */
  stop() {
    this.#passStop?.()
    this.#ownStop?.()
    this.#passStop = this.#ownStop = null
    this.#passKey = this.#ownKey = NONE
  }

  #syncPass() {
    const { record } = goView()
    const engine = record.engine
    const now = engine ? passAt(record) : undefined
    const id = now?.game.id
    const k = now?.at
    const key = `${id}|${k}|${this.#again}`
    if (key === this.#passKey) return
    this.#passKey = key
    this.#passStop?.()
    this.#passStop = null
    if (id === undefined || k === undefined || !now || !engine) return
    let live = true
    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let timer
    void askEngine(engine.address, queryFor(engine, now.game, k)).then(answer => {
      if (!live) return
      if (answer.ok) {
        this.#set(false)
        this.#refused = 0
        return send({ t: 'pass-answer', game: id, k, answer: passAnswerOf(answer.value) })
      }
      const refused = answer.error === 'refused'
      if (refused && this.#refused + 1 >= REFUSALS) {
        this.#refused = 0
        return send({ t: 'pass-unread', game: id })
      }
      if (refused) this.#refused += 1
      this.#set(!refused)
      timer = setTimeout(
        () => {
          this.#again += 1
          this.sync()
        },
        refused ? AGAIN_REFUSED_MS : AGAIN_DOWN_MS
      )
    })
    this.#passStop = () => {
      live = false
      clearTimeout(timer)
    }
  }

  /** @param {boolean} stalled */
  #set(stalled) {
    if (this.stalled === stalled) return
    this.stalled = stalled
    this.#changed()
  }

  #syncOwn() {
    const { record } = goView()
    // the learner's own games give problems once no never-tried problem of the found sources or
    // the games is left; the problems Eruko wrote come in at that point too, beside them
    const next = courseUsed(courseOf(record.own), record) ? nextPosition(record) : undefined
    const key = next?.key
    if (key === this.#ownKey) return
    this.#ownKey = key
    this.#ownStop?.()
    this.#ownStop = null
    if (!key || !next) return
    if (!started.has(key)) {
      if (attemptsOf(record, key) >= OWN_TRIES) {
        send({ t: 'own-tried', key, problem: null })
        return
      }
      started.add(key)
      send({ t: 'own-started', key })
    }
    const worker = new Worker(OWN_WORKER, { type: 'module' })
    worker.onmessage = e => send({ t: 'own-tried', key, problem: posedOf(e.data) })
    worker.onerror = () => send({ t: 'own-tried', key, problem: null })
    worker.postMessage(next.position)
    this.#ownStop = () => worker.terminate()
  }
}

/**
 * Reads the server's rating and deviation by the user name, once a study day, on the first Go
 * page opened. `busy` is whether a read is under way; `again` reads again after the server did
 * not answer. `changed` redraws the screen when `busy` changes.
 */
export class ServerRead {
  busy = false
  #changed
  #n = 0
  #key = NONE
  /** @type {(() => void) | null} */
  #stop = null

  /** @param {() => void} changed */
  constructor(changed) {
    this.#changed = changed
  }

  /** @param {boolean} busy */
  #set(busy) {
    this.busy = busy
    this.#changed()
  }

  /** A press that reads again after the server did not answer. */
  again = () => {
    this.#n += 1
    this.#changed()
  }

  /** @param {string} day */
  sync(day) {
    const { record } = goView()
    const user = record.server?.user
    const read = record.position.read?.day === day
    const key = JSON.stringify([user, read, day, this.#n])
    if (key === this.#key) return
    this.#key = key
    this.#stop?.()
    this.#stop = null
    if (!user || read) return
    let live = true
    this.#set(true)
    // A read that fails leaves the rank range unread, and the work list says the server did not answer.
    void readPlayer(user).then(player => {
      if (!live) return
      if (player.ok) send({ t: 'server-read', day, player: player.value })
      this.#set(false)
    })
    this.#stop = () => {
      live = false
    }
  }

  stop() {
    this.#stop?.()
    this.#stop = null
    this.#key = NONE
  }
}
