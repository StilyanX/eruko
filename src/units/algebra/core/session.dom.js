// Hides: the one place an Algebra move is run: it reads the unit's part
// of the record, runs the session's pure step, writes the part when the move changed it, and runs
// the effects the step returned. The part is written as a change of what it holds when the write
// lands, so a change another tab made first is kept. Every screen of the unit, and every shared
// step drawn for it, makes its moves here.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { say } from '../../../parts/say.dom.js'
import { persistedStore } from '../../../record/store.js'
import { decodeAlgebra } from './decode.logic.js'
import { ALGEBRA_PART } from './entry.logic.js'
import { step } from './session.logic.js'

/** The unit's own part, which its screens watch. */
export const record = persistedStore(ALGEBRA_PART.key)

/** Each stored value of the part, decoded once. @type {WeakMap<object, import('./decode.logic.js').AlgebraRecord>} */
const decoded = new WeakMap()

/**
 * The part as stored, decoded once for each value it holds.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 */
function decode(json) {
  const known = decoded.get(json)
  if (known) return known
  const value = decodeAlgebra(json)
  decoded.set(json, value)
  return value
}

/** The unit's own part now, decoded. */
export const algebraNow = () => decode(record.get())

/**
 * Run one move: write what it changed, run its effects, and give them back, so the screen that
 * made it keeps the verdict it shows.
 * @param {import('./session.logic.js').Event} move
 * @returns {readonly import('../../../kernel/maths-session.logic.js').Effect[]}
 */
export function send(move) {
  const before = { algebra: decode(record.get()) }
  const { state, effects } = step(before, move)
  if (state.algebra !== before.algebra)
    record.set(json => ({ ...json, ...step({ algebra: decode(json) }, move).state.algebra }))
  for (const effect of effects)
    switch (effect.t) {
      case 'say':
        say(effect.text)
        break
      case 'show':
        break
      default:
        unreachable(effect)
    }
  return effects
}
