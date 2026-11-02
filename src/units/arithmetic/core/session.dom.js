// Hides: the one place an Arithmetic move is run: it reads the unit's two
// parts of the record, runs the session's pure step, writes each part the move changed, and runs
// the effects the step returned. A part is written as a change of what it holds when the write
// lands, so a change another tab made first is kept. Every screen of the unit, and every shared
// step drawn for it, makes its moves here.
import { FACTS_PART, decodeFacts } from '../../../kernel/facts.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { say } from '../../../parts/say.dom.js'
import { persistedStore } from '../../../record/store.js'
import { decodeArithmetic } from './decode.logic.js'
import { MATH_PART } from './entry.logic.js'
import { step } from './session.logic.js'

/** The unit's own part, which the end level watches. */
export const math = persistedStore(MATH_PART.key)
/** The number facts, which the drill watches. */
export const facts = persistedStore(FACTS_PART.key)

/** Each stored value of the unit's part, decoded once. @type {WeakMap<object, import('./decode.logic.js').ArithmeticRecord>} */
const maths = new WeakMap()
/** Each stored value of the number facts, decoded once. @type {WeakMap<object, import('../../../kernel/facts.logic.js').FactsRecord>} */
const sheets = new WeakMap()

/**
 * A part as stored, decoded once for each value it holds.
 * @template T
 * @param {WeakMap<object, T>} held
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 * @param {(json: import('../../../kernel/decode.logic.js').JsonRecord) => T} decode
 * @returns {T}
 */
function once(held, json, decode) {
  const known = held.get(json)
  if (known !== undefined) return known
  const value = decode(json)
  held.set(json, value)
  return value
}

/** The unit's own part now, as the end level reads it. */
export const mathNow = () => once(maths, math.get(), decodeArithmetic)

/** The number facts now, as the drill reads them. */
export const factsNow = () => once(sheets, facts.get(), decodeFacts)

/**
 * The session's state from the two parts as stored.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} m
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} f
 * @returns {import('./session.logic.js').State}
 */
const stateOf = (m, f) => ({
  math: once(maths, m, decodeArithmetic),
  facts: once(sheets, f, decodeFacts)
})

/**
 * Run one move: write what it changed, run its effects, and give them back, so the screen that
 * made it keeps the verdict it shows.
 * @param {import('./session.logic.js').Event} move
 * @returns {readonly import('../../../kernel/maths-session.logic.js').Effect[]}
 */
export function send(move) {
  const before = stateOf(math.get(), facts.get())
  const { state, effects } = step(before, move)
  if (state.math !== before.math)
    math.set(json => ({ ...json, ...step(stateOf(json, facts.get()), move).state.math }))
  if (state.facts !== before.facts)
    facts.set(json => ({ ...json, ...step(stateOf(math.get(), json), move).state.facts }))
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
