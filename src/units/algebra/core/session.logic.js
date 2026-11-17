// Hides: what each move of an Algebra study session does: one pure
// step from the unit's part of the record and a move to the part it leaves and the effects, as
// data. The shared maths steps' moves and the moves on a topic's proofs and statements go to the
// kernel's steps; a sitting begun and a paper's marks are the end level's. core/session.dom.js runs
// it. Pure functions, tested in session.test.js.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { mathsStep } from '../../../kernel/maths-session.logic.js'
import { proofsStep } from '../../../kernel/proofs.logic.js'
import { courseDone } from './decode.logic.js'
import { endStep } from './end-level.logic.js'

/** What an Algebra session changes: the unit's own part. @typedef {Readonly<{ algebra: import('./decode.logic.js').AlgebraRecord }>} State */
/** @typedef {import('../../../kernel/maths-session.logic.js').MathsEvent | import('../../../kernel/proofs.logic.js').ProofsEvent | import('./end-level.logic.js').EndEvent} Event */

/**
 * One move of an Algebra session: the state it leaves and its effects.
 * @param {State} state
 * @param {Event} move
 * @returns {Readonly<{ state: State, effects: readonly import('../../../kernel/maths-session.logic.js').Effect[] }>}
 */
export function step(state, move) {
  switch (move.t) {
    case 'end-begin':
    case 'end-marks':
      return { state: { algebra: endStep(state.algebra, move, courseDone(state.algebra)) }, effects: [] }
    case 'proof-line':
    case 'proof-read':
    case 'proof-check':
    case 'prove-phase':
    case 'prove-done':
    case 'prove-giveup': {
      const { record, effects } = proofsStep(state.algebra, move)
      return { state: record === state.algebra ? state : { algebra: record }, effects }
    }
    case 'example-line':
    case 'example-done':
    case 'stage-answer':
    case 'stage-wrong':
    case 'stage-open':
    case 'idea-wrong':
    case 'idea-right':
    case 'tried':
    case 'turn':
    case 'mix-answer':
    case 'mix-change':
    case 'mix-show':
    case 'mix-next':
    case 'draft':
    case 'short': {
      const { record, effects } = mathsStep(state.algebra, move)
      return { state: { algebra: record }, effects }
    }
    default:
      return unreachable(move)
  }
}
