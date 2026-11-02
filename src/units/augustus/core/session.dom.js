// Hides: the one interpreter of Augustus's session: it reads the lives
// part of the record, decoded once for each value the store holds; it takes a move, stamps it
// with the study day and a fresh id, runs the step (session.logic.js), stores the record, and
// says the lines it returns. A change from another tab replays the move on the record as it then
// stands.
import { today } from '../../../parts/clock.dom.js'
import { say } from '../../../parts/say.dom.js'
import { persistedStore } from '../../../record/store.js'
import { decodeLives, encodeLives } from './decode.logic.js'
import { LIVES_PART } from './entry.logic.js'
import { step } from './session.logic.js'

/** The store the lives part sits in. */
export const livesStore = () => persistedStore(LIVES_PART.key)

/** @type {WeakMap<object, import('./decode.logic.js').LivesRecord>} */
const decoded = new WeakMap()

/**
 * A stored value of the part, decoded once.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 */
function read(json) {
  const held = decoded.get(json)
  if (held) return held
  const record = decodeLives(json)
  decoded.set(json, record)
  return record
}

/** The lives part of the record, as the screens read it. */
export const record = () => read(livesStore().get())

/** A new item's id. */
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6)

/**
 * Make a move: the record changes by the session's step, and its effects run.
 * @param {import('./session.logic.js').Move} move
 */
export function send(move) {
  const store = livesStore()
  const json = store.get()
  const now = read(json)
  /** @type {import('./session.logic.js').Event} */
  const event = { ...move, day: today(), id: newId() }
  const { state, effects } = step(now, event)
  if (state !== now)
    store.set(prev => encodeLives(prev === json ? state : step(read(prev), event).state))
  effects.forEach(effect => say(effect.text))
}
