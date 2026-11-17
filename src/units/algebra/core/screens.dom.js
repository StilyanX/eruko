// Hides: what Algebra does beyond the shared maths steps: it sets a typed answer as mathematics in
// its form, answers Find the error with the wrong line's number, which the app checks, and the
// line written right, which the learner marks; answers a sketch on paper, marked against the
// stored graph on its features alone; and asks for proofs in mixed practice. The steps are the
// shared ones (parts/maths-steps.dom.js) with these as props. Every rule is a check in the kernel's
// maths logic and check.logic.js. Topic files give plain strings, with $…$ for maths and **term**
// for a term at its definition.
import { practiceOrder } from '../../../kernel/practice.logic.js'
import { piecesIn } from '../../../kernel/maths-text.logic.js'
import { knows } from '../../../parts/mathml.dom.js'
import '../../../parts/mixed-practice.element.js'
import { STUCK, lines, rich } from '../../../parts/maths-screens.dom.js'
import { proofProblem } from '../../../parts/proof-problem.dom.js'
import { actionsAs, choice, mark, say } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { ERROR_FORM, LINE_FORM, PROOF_FORM, SKETCH_FORM, answerTex, wrongLine } from './check.logic.js'
import { featuresOf, givenOf } from './decode.logic.js'
import { lostProblems } from './end-level.logic.js'
import { FIGURES } from './figures.gen.js'
import { algebraNow, send } from './session.dom.js'

/** Every figure of the unit's pages, drawn ahead. */
export const figures = FIGURES

/**
 * A stored answer, set as mathematics in its form where every piece of it was set ahead
 * (scripts/gen/mathml.mjs); otherwise as stored.
 * @param {import('../../../kernel/maths-decode.logic.js').PaperProblem} problem
 */
export const typedAnswer = problem => {
  const tex = answerTex(problem.answer, problem.form)
  return tex !== null && piecesIn(`$${tex}$`).every(knows) ? rich(`$${tex}$`) : problem.answer
}

/**
 * The lines of a problem whose working is partly hidden (a fading stage); nothing for a problem
 * solved alone, whose own line says what to write on paper.
 * @param {import('../../../parts/maths-steps.dom.js').Hand} hand
 * @param {string} key
 */
const working = ({ lines: all, hide, figures: figs }, key) =>
  hide !== undefined && hide < all.length ? lines({ lines: all, hide, figures: figs, key: `${key}-covered` }) : null

/**
 * The worked solution a Find the error problem or worked example gives to check, its lines
 * numbered from 1; nothing where it gives none.
 * @param {object} problem
 */
export const givenLines = problem => {
  const given = givenOf(problem)
  return given.length ? lines({ lines: given, label: 'The solution to check', key: 'error-given' }) : null
}

/**
 * Find the error: the learner types the wrong line's number, which the app checks exactly; a wrong
 * number counts as stuck. Then the stored line written right shows, and the learner marks their own.
 * @param {import('../../../kernel/maths-decode.logic.js').PaperProblem} problem
 * @param {import('../../../parts/maths-steps.dom.js').Hand} hand
 */
function errorLine(problem, hand) {
  const n = wrongLine(problem.answer)
  const given = givenLines(problem)
  if (!hand.open)
    return [
      given,
      working(hand, 'error'),
      h(
        'form',
        {
          key: 'error-ask',
          novalidate: true,
          onsubmit: (/** @type {SubmitEvent} */ e) => {
            e.preventDefault()
            const typed = e.target instanceof HTMLFormElement ? new FormData(e.target).get('line') : null
            const got = typeof typed === 'string' && /^\s*\d+\s*$/.test(typed) ? Number(typed) : null
            if (got === null) return say('Type the number of the wrong line, as in 3.')
            if (got !== n) return hand.onStuck()
            hand.onOpen()
            say('That is the wrong line. Its line written right is below.')
          }
        },
        h('p', { class: 'lrn-ss-note' }, 'Write the wrong line written right on paper. Then type its number.'),
        h(
          'label',
          { class: 'lrn-ss-note' },
          'The number of the wrong line ',
          h('input', { class: 'field', name: 'line', type: 'text', inputmode: 'numeric', autocomplete: 'off', size: 4 })
        ),
        actionsAs(
          'error-choose',
          choice({ label: STUCK, onPress: hand.onStuck }),
          choice({ primary: true, type: 'submit', label: 'Check the line number' })
        )
      )
    ]
  return h(
    'div',
    { key: 'error-open' },
    given,
    h('p', null, 'The wrong line and that line written right: ', typedAnswer(problem)),
    mark({
      when: 'Right when your line written right says the same as this one.',
      onWrong: () => hand.onDone(false),
      onRight: () => hand.onDone(true)
    })
  )
}

/** What to draw on paper: a graph, a region of the plane, or a set on a number line. */
const SAY = {
  graph: 'Sketch the graph on paper, on axes you draw. Mark where it meets the axes, its turning points, corners and end points, and its asymptotes.',
  region: 'Sketch the region on paper, on axes you draw. Draw each boundary, dashed where it is strict and solid where it is not, and shade the side that satisfies it.',
  line: 'Sketch the set on paper, on a number line. Mark each end with an open circle or a filled dot, and shade the numbers that satisfy it.'
}

/**
 * A graph sketched on the problem's own axes, then marked against the stored graph (the figure of
 * the solution's last line) on its intercepts, turning points and asymptotes only.
 * @param {import('../../../kernel/maths-decode.logic.js').PaperProblem} problem
 * @param {import('../../../parts/maths-steps.dom.js').Hand} hand
 */
function sketch(problem, hand) {
  if (!hand.open)
    return [
      working(hand, 'sketch'),
      h('p', { key: 'sketch-say' }, SAY[problem.form === LINE_FORM ? 'line' : featuresOf(problem)?.shaded.length ? 'region' : 'graph']),
      actionsAs(
        'sketch-choose',
        choice({ label: STUCK, onPress: hand.onStuck }),
        choice({
          primary: true,
          label: 'Show the stored graph',
          onPress: () => {
            hand.onOpen()
            say('The stored graph and what it is checked on are below.')
          }
        })
      )
    ]
  const f = featuresOf(problem)
  /** @type {[string, readonly string[]][]} */
  const rows = !f ? [] : f.shaded.length ? [['Shaded set', f.shaded]] : [['Intercepts', f.intercepts], ['Turning points, corners and end points', f.turning], ['Asymptotes', f.asymptotes]]
  return h(
    'div',
    { key: 'sketch-open', role: 'group', 'aria-label': 'Stored graph' },
    lines({ lines: hand.lines, figures: hand.figures, label: 'Stored graph' }),
    h(
      'ul',
      { 'aria-label': 'What the sketch is checked on' },
      rows.map(([name, items]) => h('li', { key: name }, `${name}: `, items.length ? items.map((x, i) => [i ? ', ' : '', rich(x)]) : 'none'))
    ),
    mark({
      when: f?.shaded.length ? 'Right when your number line shades this set with these ends. Nothing else is checked.' : 'Right when your sketch has these intercepts, turning points, corners, end points and asymptotes. Nothing else is checked.',
      onWrong: () => hand.onDone(false),
      onRight: () => hand.onDone(true)
    })
  )
}

/**
 * A problem answered in a way of this unit's own: Find the error or a sketch; null for any other.
 * @type {import('../../../parts/maths-steps.dom.js').Written}
 */
export const written = (problem, hand) =>
  problem.form === ERROR_FORM ? errorLine(problem, hand) : problem.form === SKETCH_FORM || problem.form === LINE_FORM ? sketch(problem, hand) : null

/** The end level's problems under 7, which return in mixed practice. */
const lost = () => lostProblems(algebraNow())

/**
 * The day's problems of mixed practice: one for each kind due, and a lost problem of the end level
 * on its date. The shared step hands over the fields every maths unit keeps; the papers are read
 * from the unit's own part.
 * @param {readonly import('../../../kernel/maths-decode.logic.js').BankProblem[]} bank
 * @param {import('../../../kernel/practice.logic.js').PracticeRecord} _record
 * @param {string} day
 */
const order = (bank, _record, day) => practiceOrder(bank, algebraNow(), day, lost())

/**
 * Step 2, mixed practice. `bank` is every problem of the course; a lost problem of the end level
 * joins it.
 * @param {readonly import('../../../kernel/maths-decode.logic.js').BankProblem[]} bank
 */
export const mixedPractice = bank =>
  h('ae-mixed-practice', {
    '.bank': bank,
    '.figures': figures,
    '.order': order,
    '.lost': lost,
    '.proof': proofProblem(PROOF_FORM),
    '.setAnswer': typedAnswer,
    '.written': written,
    '.send': send
  })
