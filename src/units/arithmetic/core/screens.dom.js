// Hides: what Arithmetic does beyond the shared maths steps: it asks for proofs in mixed practice
// and sets its stored answers as mathematics. The screens show what is next and send what the
// learner did to the unit's session (session.dom.js). Topic files give plain strings, with $...$
// for maths and **term** for a term at its definition.
import { practiceOrder } from '../../../kernel/practice.logic.js'
import { PLACE_FORM, PROOF_FORM } from './check.logic.js'
import { FIGURES } from './figures.gen.js'
import { figureSet } from './figures.logic.js'
import './place-line.element.js'
import { answerText, formWords } from './shown.logic.js'
import { piecesIn } from '../../../kernel/maths-text.logic.js'
import { knows, mathmlOf } from '../../../parts/mathml.dom.js'
import '../../../parts/mixed-practice.element.js'
import { rich } from '../../../parts/maths-screens.dom.js'
import { proofProblem } from '../../../parts/proof-problem.dom.js'
import { h } from '../../../parts/view.dom.js'
import { send } from './session.dom.js'

/**
 * Text set as mathematics where the generator set every piece of it; otherwise null.
 * @param {string | null} text
 */
const asMaths = text => (text !== null && piecesIn(text).every(knows) ? text : null)

/**
 * A stored answer, or a form line's example, set as mathematics (shown.logic.js), every piece set
 * ahead by scripts/gen/mathml.mjs; otherwise as stored.
 * @param {import('../../../kernel/maths-decode.logic.js').PaperProblem} problem
 */
export const setAnswer = problem => {
  const text = asMaths(answerText(problem.answer, problem.form))
  return text === null ? problem.answer : rich(text)
}

/**
 * A form line's words, set as mathematics where they hold typed syntax.
 * @param {string} words
 */
export const setForm = words => asMaths(formWords(words)) ?? words

/**
 * The figures of Arithmetic's pages: the ones drawn ahead, and the lines of "Place it on the
 * line" drawn when they show, each label set from its formula's MathML, else as its typed text.
 */
export const figures = figureSet(FIGURES, tex => (knows(tex) ? mathmlOf(tex) : tex))

/**
 * A problem that asks for a place on the number line is answered on the line: the screen for it,
 * else null and the shared answer box.
 * @type {import('../../../parts/maths-steps.dom.js').Written}
 */
export const placeWritten = (problem, hand) =>
  problem.form === PLACE_FORM
    ? h('arithmetic-place-line', {
        key: problem.id ?? problem.prompt,
        '.problem': problem,
        '.hand': hand,
        '.figures': hand.figures
      })
    : null

/**
 * Step 2, mixed practice. `bank` is every problem of the course.
 * @param {readonly import('../../../kernel/maths-decode.logic.js').BankProblem[]} bank
 */
export const mixedPractice = bank =>
  h('ae-mixed-practice', {
    '.bank': bank,
    '.figures': figures,
    '.written': placeWritten,
    '.order': practiceOrder,
    '.proof': proofProblem(PROOF_FORM),
    // A place on the line is checked by the app: no Change the mark follows it.
    '.checked': (/** @type {import('../../../kernel/maths-decode.logic.js').BankProblem} */ p) => p.form === PLACE_FORM,
    '.setAnswer': setAnswer,
    '.setForm': setForm,
    '.send': send
  })
