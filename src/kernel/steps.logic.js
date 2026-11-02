// Hides: step 1 of the Mathematics division of "A Self-Study System" as rules over the record:
// which problem a fading stage runs on, what an answer does next, how many lines a stage hides,
// and the calculator line of a problem. Pure functions, tested in tests/study-steps.test.mjs.
import { assert } from './invariant.logic.js'
import { problemId } from './maths-decode.logic.js'
import { neverTried, yesNoKind } from './practice.logic.js'

/**
 * What a move on a kind's worked example reads of the kind's content: its id, the count of
 * fading problems of each form, its bank problems' ids in course order, and whether it retires
 * only after two alone-solves right in a row (a Yes/No kind).
 * @typedef {Readonly<{
 *   id: import('./maths-decode.logic.js').KindId,
 *   fades: readonly number[],
 *   problems: readonly import('./maths-decode.logic.js').ProblemId[],
 *   twice: boolean
 * }>} KindFacts
 */

/**
 * A kind's facts, from its content and the bank.
 * @param {import('./maths-decode.logic.js').Kind} kind
 * @param {readonly import('./maths-decode.logic.js').BankProblem[]} bank
 * @returns {KindFacts}
 */
export const kindFacts = (kind, bank) => ({
  id: kind.id,
  fades: kind.forms.map(f => f.fade.length),
  problems: bank.filter(p => p.kind === kind.id).map(p => p.id),
  twice: yesNoKind(kind.id, bank)
})

/**
 * How many lines of a problem a stage hides, from the end: one, two, then all of them.
 * @param {1 | 2 | 3 | 4} stage
 * @param {number} lines
 */
export const hidden = (stage, lines) =>
  stage === 2 ? 1 : stage === 3 ? 2 : stage === 4 ? lines : 0

/**
 * The id a fading problem is stored under: its form and its place among the form's fading problems.
 * @param {number} form
 * @param {number} n
 */
const fadeId = (form, n) => problemId(`fade-${form}-${n}`)

/**
 * The next fresh problem for a stage: the form's fading problems in order, then the kind's
 * never-tried bank problems, each stored in `used`. `id` is what the stage stores, and `next`
 * counts the fading problems taken.
 * @param {KindFacts} kind
 * @param {Readonly<{ form: number, next: number }>} st
 * @param {import('./practice.logic.js').PracticeRecord} record
 * @returns {Readonly<{ id: import('./maths-decode.logic.js').ProblemId, next: number, used?: import('./maths-decode.logic.js').ProblemId }>}
 */
export function freshProblem(kind, st, record) {
  const fades = kind.fades[st.form]
  assert(fades !== undefined, `kind ${kind.id} has a form ${st.form}`)
  if (st.next < fades) return { id: fadeId(st.form, st.next), next: st.next + 1 }
  // With every bank problem of the kind used, a failed alone-solve reuses one until the owner
  // builds more (`short` lists the kinds).
  const id =
    kind.problems.find(q => neverTried({ id: q }, record)) ??
    kind.problems.find(q => !record.list?.[q]) ??
    kind.problems[0]
  assert(id !== undefined, `kind ${kind.id} has a bank problem`)
  return { id, next: st.next, used: id }
}

/**
 * The problem a stage runs on: a fading problem of the form, or a bank problem of the kind.
 * @param {import('./maths-decode.logic.js').Kind} kind
 * @param {Readonly<{ form: number, problem?: string | null | undefined }>} st
 * @param {readonly import('./maths-decode.logic.js').BankProblem[]} bank
 * @returns {import('./maths-decode.logic.js').PaperProblem | undefined}
 */
export function stageProblem(kind, st, bank) {
  const m = /^fade-(\d+)-(\d+)$/.exec(st.problem ?? '')
  if (m) return kind.forms[Number(m[1])]?.fade[Number(m[2])]
  return bank.find(p => p.id === st.problem) ?? kind.forms[st.form]?.fade[0]
}

/**
 * What follows an answer at stages 2 to 4, for a kind of `forms` forms: the kind retires (right
 * alone on the last form), the next form's worked example opens (right alone on an earlier form),
 * or a fresh problem at a stage: the second alone-solve a Yes/No kind (`twice`) needs to retire,
 * one stage on after an answer at stage 2 or 3, and the last two lines hidden after a wrong one alone.
 * @param {Readonly<{ form: number, stage: 1 | 2 | 3 | 4, streak?: number }>} st
 * @param {boolean} right
 * @param {number} forms
 * @param {boolean} [twice]
 * @returns {Readonly<{ t: 'retire' } | { t: 'form', form: number } | { t: 'stage', stage: 2 | 3 | 4, streak: number }>}
 */
export function afterAnswer(st, right, forms, twice = false) {
  if (right && st.stage === 4) {
    if (st.form + 1 < forms) return { t: 'form', form: st.form + 1 }
    return twice && !st.streak ? { t: 'stage', stage: 4, streak: 1 } : { t: 'retire' }
  }
  return { t: 'stage', stage: st.stage === 4 ? 3 : st.stage === 3 ? 4 : st.stage === 2 ? 3 : 2, streak: 0 }
}

/**
 * The calculator line of a problem: the problem's own mark, held back until the number facts pass.
 * @param {Readonly<{ calc?: string }>} problem
 * @param {boolean} factsPassed
 */
export const calculator = (problem, factsPassed) =>
  problem.calc === 'no'
    ? 'Calculator: no.'
    : factsPassed
      ? 'Calculator: yes.'
      : 'Calculator: no, until the number facts pass.'
