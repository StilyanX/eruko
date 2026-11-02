// Hides: what the shared maths steps are handed by the unit they draw for, and what they share:
// the heading every step opens with, and the unit's record as they read it, decoded once for each
// value the store holds. Where the units differ the screens take a field: `setAnswer` and
// `setForm` (an answer and a form line's words set as mathematics), `written` (a problem answered
// in full on paper), `proof` (a problem the unit marks against a published proof), `lost` (marked
// questions that return in mixed practice), `inRecord` (a wrong answer is kept in the record, not on
// the page; the default), and `send`, the unit's one
// way to make a move (its core/session.dom.js). The rules are in the kernel's maths logic.
import { InvariantError } from '../kernel/invariant.logic.js'
import { decodePractice } from '../kernel/practice.logic.js'
import { decodeProofs } from '../kernel/proofs-decode.logic.js'
import { h } from './view.dom.js'

/**
 * What a unit's own way of answering a problem is handed: the lines, the lines hidden, the
 * figures, whether the answer is shown (`open`, kept by the step for the problem in hand, as the
 * answer box's is), and what to call to show it, once it is marked, or when the learner is stuck.
 * @typedef {{
 *   lines: readonly import('../kernel/maths-decode.logic.js').WorkLine[],
 *   hide?: number,
 *   figures: import('../kernel/maths-decode.logic.js').Figures | undefined,
 *   open: boolean,
 *   onOpen: () => void,
 *   onDone: (right: boolean) => void,
 *   onStuck: () => void
 * }} Hand
 */
/**
 * A unit's own way of answering a problem on paper (a written solution, marked against the
 * printed one), or null where the problem is not of its kind.
 * @typedef {(problem: import('../kernel/maths-decode.logic.js').PaperProblem, hand: Hand) => import('./view.dom.js').Child} Written
 */
/**
 * A unit's one way to make a move on a shared step: its interpreter runs the move and gives back
 * its effects, so the screen keeps the verdict a move shows.
 * @typedef {(move: import('../kernel/maths-session.logic.js').MathsEvent) => readonly import('../kernel/maths-session.logic.js').Effect[]} Send
 */

/**
 * A step drawn with no unit to send its moves to: a broken page, never the learner's doing.
 * @type {Send}
 */
export const noSend = () => {
  throw new InvariantError('a maths step was drawn with no unit to send its moves to')
}

/**
 * A unit with proofs' one way to make a move on its proofs and statements.
 * @typedef {(move: import('../kernel/proofs.logic.js').ProofsEvent) => readonly import('../kernel/maths-session.logic.js').Effect[]} ProofsSend
 */

/**
 * A proof or a statement drawn with no unit to send its moves to: a broken page.
 * @type {ProofsSend}
 */
export const noProofsSend = () => {
  throw new InvariantError('a proof was drawn with no unit to send its moves to')
}

/**
 * The verdict a move's effects leave on its screen, or null when it leaves none.
 * @param {readonly import('../kernel/maths-session.logic.js').Effect[]} effects
 */
export const shownBy = effects => {
  for (const e of effects) if (e.t === 'show') return e.text
  return null
}

/**
 * A step's heading, which the step moves focus to (`focusSoon('h3')`), as its run of pages does on
 * a turn.
 * @param {import('./view.dom.js').Child} children
 */
export const heading = children => h('h3', { tabindex: '-1' }, children)

/** Each stored value, decoded once. @type {WeakMap<object, import('../kernel/practice.logic.js').PracticeRecord>} */
const decoded = new WeakMap()

/**
 * The page's unit's record as the shared steps read it.
 * @param {{ get: () => import('../kernel/decode.logic.js').JsonRecord }} store
 */
export function practiceOf(store) {
  const json = store.get()
  const held = decoded.get(json)
  if (held) return held
  const record = decodePractice(json)
  decoded.set(json, record)
  return record
}

/** Each stored value's proofs, decoded once. @type {WeakMap<object, import('../kernel/proofs-decode.logic.js').ProofsRecord>} */
const proofs = new WeakMap()

/**
 * The page's unit's proofs read and statements proved, as the proof steps read them.
 * @param {{ get: () => import('../kernel/decode.logic.js').JsonRecord }} store
 */
export function proofsOf(store) {
  const json = store.get()
  const held = proofs.get(json)
  if (held) return held
  const record = decodeProofs(json)
  proofs.set(json, record)
  return record
}
