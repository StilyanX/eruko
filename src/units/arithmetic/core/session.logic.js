// Hides: what each move of an Arithmetic study session does: one
// pure step from the unit's two parts of the record (its own and the number facts) and a move to
// the parts it leaves and the effects, as data. The shared maths steps' moves and the moves on a
// topic's proofs and statements go to the kernel's steps; a number-facts sheet and the end level
// (end-level.logic.js) are the unit's own.
// core/session.dom.js runs it. Pure functions, tested in tests/arithmetic-session.test.mjs.
import { count } from '../../../kernel/days.logic.js'
import {
  factSet,
  factStep,
  missedFacts,
  recordSheet,
  sheetHeld,
  sheetMisses,
  sheetSeconds,
  startSheet,
  touchSheet
} from '../../../kernel/facts.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { mathsStep } from '../../../kernel/maths-session.logic.js'
import { shuffle } from '../../../kernel/practice.logic.js'
import { proofsStep } from '../../../kernel/proofs.logic.js'
import { endStep } from './end-level.logic.js'

/**
 * What an Arithmetic session changes: the unit's own part and the number facts.
 * @typedef {Readonly<{
 *   math: import('./decode.logic.js').ArithmeticRecord,
 *   facts: import('../../../kernel/facts.logic.js').FactsRecord
 * }>} State
 */

/**
 * A move on the number facts: a sheet begun (its facts drawn in an order by `draws`, numbers from
 * 0 up to 1), its clock restarted on a return, an answer typed, a page turned, the sheet
 * checked, its result read, or a sheet that can no longer be worked dropped.
 * @typedef {Readonly<
 *   | { t: 'sheet-begin', op: import('../../../kernel/facts.logic.js').Operation, draws: readonly number[], nowMs: number, day: string }
 *   | { t: 'sheet-return', nowMs: number }
 *   | { t: 'sheet-answer', index: number, value: string, nowMs: number }
 *   | { t: 'sheet-page', page: number, nowMs: number }
 *   | { t: 'sheet-check', nowMs: number, day: string }
 *   | { t: 'sheet-done' }
 *   | { t: 'sheet-drop' }
 * >} FactsEvent
 */
/**
 * A place on a number line marked or typed, kept until it is checked (`draft`), or checked (null).
 * @typedef {Readonly<{ t: 'place-draft', draft: import('./decode.logic.js').PlaceDraft | null }>} PlaceEvent
 */
/** @typedef {import('../../../kernel/maths-session.logic.js').MathsEvent | import('../../../kernel/proofs.logic.js').ProofsEvent | FactsEvent | import('./end-level.logic.js').EndEvent | PlaceEvent} Event */

/**
 * A state and the effects a move leaves.
 * @typedef {Readonly<{ state: State, effects: readonly import('../../../kernel/maths-session.logic.js').Effect[] }>} Stepped
 */

/** @param {string} text @returns {import('../../../kernel/maths-session.logic.js').Effect} */
const say = text => ({ t: 'say', text })

/**
 * The facts with the sheet in hand changed at `nowMs`, its work since its last change counted.
 * @param {State} s
 * @param {(sheet: import('../../../kernel/facts.logic.js').Sheet) => import('../../../kernel/facts.logic.js').Sheet} change
 * @param {number} nowMs
 * @returns {Stepped}
 */
function changeSheet(s, change, nowMs) {
  const sheet = s.facts.sheet
  if (!sheet) return { state: s, effects: [] }
  return {
    state: { ...s, facts: { ...s.facts, sheet: touchSheet(change(sheet), nowMs) } },
    effects: []
  }
}

/**
 * A sheet begun: every fact of the operation, or only those missed, in an order drawn from `draws`.
 * @param {State} s
 * @param {Extract<FactsEvent, { t: 'sheet-begin' }>} move
 * @returns {Stepped}
 */
function beginSheet(s, { op, draws, nowMs, day }) {
  const step = factStep(s.facts, op, day)
  const misses = step === 'misses'
  let at = 0
  const random = () => draws[at++ % Math.max(1, draws.length)] ?? 0
  const rows = shuffle(misses ? missedFacts(s.facts, op) : factSet(op), random)
  const sheet = startSheet(op, step === 'timed' || step === 'return', rows, nowMs, misses)
  return { state: { ...s, facts: { ...s.facts, sheet } }, effects: [] }
}

/**
 * The sheet checked: its errors and seconds recorded, and its result kept on it for the day.
 * @param {State} s
 * @param {Extract<FactsEvent, { t: 'sheet-check' }>} move
 * @returns {Stepped}
 */
function checkSheet(s, { nowMs, day }) {
  const sheet = s.facts.sheet
  if (!sheetHeld(sheet, s.facts, day) || sheet.result) return { state: s, effects: [] }
  const seconds = sheetSeconds(sheet, nowMs)
  const missed = sheetMisses(sheet.rows, sheet.answers).map(([, q]) => q)
  const errors = missed.length
  const last = s.facts[sheet.op]?.timed?.at(-1) ?? null
  const recorded = recordSheet(s.facts, sheet.op, {
    timed: sheet.timed,
    missed,
    drill: Boolean(sheet.misses),
    errors,
    seconds,
    count: sheet.rows.length - errors,
    nowMs,
    today: day
  })
  const result = { errors, seconds, last }
  return {
    state: { ...s, facts: { ...recorded, sheet: { ...touchSheet(sheet, nowMs), result } } },
    effects: [say(`${count(errors, 'error', 'errors')}.`)]
  }
}

/**
 * The facts record without the sheet in hand.
 * @param {State} s
 * @returns {State}
 */
const withoutSheet = s => ({ ...s, facts: { ...s.facts, sheet: undefined } })

/**
 * @param {State} s
 * @param {FactsEvent} move
 * @returns {Stepped}
 */
function factsStep(s, move) {
  switch (move.t) {
    case 'sheet-begin':
      return beginSheet(s, move)
    case 'sheet-return': {
      // A sheet in hand restarts its clock on a return: the time away is not work.
      const sheet = s.facts.sheet
      if (!sheet || sheet.result) return { state: s, effects: [] }
      return {
        state: { ...s, facts: { ...s.facts, sheet: { ...sheet, at: move.nowMs } } },
        effects: []
      }
    }
    case 'sheet-answer':
      return changeSheet(
        s,
        sheet => {
          const answers = Array.from(sheet.answers)
          for (let i = answers.length; i < move.index; i++) answers[i] = ''
          answers[move.index] = move.value
          return { ...sheet, answers }
        },
        move.nowMs
      )
    case 'sheet-page':
      return changeSheet(s, sheet => ({ ...sheet, page: move.page }), move.nowMs)
    case 'sheet-check':
      return checkSheet(s, move)
    case 'sheet-done':
    case 'sheet-drop':
      return { state: withoutSheet(s), effects: [] }
    default:
      return unreachable(move)
  }
}

/**
 * One move of an Arithmetic session: the state it leaves and its effects.
 * @param {State} state
 * @param {Event} move
 * @returns {Stepped}
 */
export function step(state, move) {
  switch (move.t) {
    case 'proof-line':
    case 'proof-read':
    case 'proof-check':
    case 'prove-phase':
    case 'prove-done':
    case 'prove-giveup': {
      const { record, effects } = proofsStep(state.math, move)
      return { state: record === state.math ? state : { ...state, math: record }, effects }
    }
    case 'end-begin':
    case 'end-type':
    case 'end-enter':
    case 'end-next':
    case 'end-retype':
    case 'end-return':
    case 'end-done':
    case 'end-drop': {
      const end = state.math.end ?? {}
      const after = endStep(end, move)
      return after === end ? { state, effects: [] } : { state: { ...state, math: { ...state.math, end: after } }, effects: [] }
    }
    case 'place-draft':
      // A draft stands until it is checked; a check leaves null, which the merge writes over it.
      return move.draft === null && !state.math.place
        ? { state, effects: [] }
        : { state: { ...state, math: { ...state.math, place: move.draft } }, effects: [] }
    case 'sheet-begin':
    case 'sheet-return':
    case 'sheet-answer':
    case 'sheet-page':
    case 'sheet-check':
    case 'sheet-done':
    case 'sheet-drop':
      return factsStep(state, move)
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
      const { record, effects } = mathsStep(state.math, move)
      return { state: { ...state, math: record }, effects }
    }
    default:
      return unreachable(move)
  }
}
