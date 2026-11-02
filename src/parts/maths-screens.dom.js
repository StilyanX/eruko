// Hides: how a maths unit's text and its pieces are drawn: text with a term in bold and its
// formulas set from their MathML, a figure, an answer worked on paper, a solution's lines, an idea,
// and a problem's dated list. The pieces of the Mathematics division of "A Self-Study System" that
// the maths units' screens share. Their styles are in study-page.css.
import { CLOSE_PUNCT, displayKey, formulaPieces, textRuns } from '../kernel/maths-text.logic.js'
import { sentencesOf, widthInBodyText } from '../kernel/figure.logic.js'
import { mathmlOf } from './mathml.dom.js'
import { markSentence } from '../kernel/answer.logic.js'
import { dayName } from '../kernel/days.logic.js'
import { actionsAs, choice, mark } from './study.dom.js'
import { h } from './view.dom.js'

/** The button of a learner who has no further step: it counts as wrong and shows the answer. */
export const STUCK = 'I am stuck: count it wrong'

/**
 * What a worked example asks of the line in hand: the paper's sentence to complete, since a sentence
 * to complete builds more understanding than an open prompt. The app reads nothing of it, so any mode
 * serves that is said or written: aloud, or on paper (self-explanation was spoken in Chi's studies;
 * typed explanations came less often, Hausmann & Chi 2002; answers kept silent gave less).
 */
export const SAY_WHY =
  'End the sentence "This step is allowed because …, and it helps because …." aloud or on paper.'

/**
 * One formula piece, set from its MathML.
 * @param {string} tex
 */
const piece = tex => h('span', { class: 'lrn-piece', '.innerHTML': mathmlOf(tex) })

/**
 * Inline maths that can wrap: a browser never breaks an inline formula itself, so a long one is
 * set as several pieces (study/maths-text.js). Each side of a relation is a block that moves to a
 * new line whole, and wraps before its own + and − only when it is still wider than the line. The
 * punctuation after a formula stays on its line, inside its last block.
 * @param {string} tex
 * @param {string} after
 */
function maths(tex, after) {
  const sides = formulaPieces(tex)
  return sides.map((pieces, i) => [
    i > 0 && '​',
    h(
      'span',
      { class: 'lrn-side' },
      pieces.map((p, j) => [j > 0 && '​', piece(p)]),
      i === sides.length - 1 && after
    )
  ])
}

/**
 * A formula set on a line of its own, which scrolls inside that line when it is wider.
 * @param {string} tex
 */
const display = tex => h('span', { class: 'lrn-display', '.innerHTML': mathmlOf(displayKey(tex)) })

/**
 * The runs of one part of a text: words, inline maths made to wrap, each formula taking the
 * punctuation after it into its last piece, and display maths.
 * @param {import('../kernel/maths-text.logic.js').Run[]} runs
 */
function runsOf(runs) {
  return runs.map((run, j) => {
    if (run.kind === 'display') return display(run.tex)
    if (run.kind === 'maths') {
      const next = runs[j + 1]
      const punct = next?.kind === 'text' ? (next.text.match(CLOSE_PUNCT)?.[0] ?? '') : ''
      return maths(run.tex, punct)
    }
    const prev = runs[j - 1]
    const taken = prev?.kind === 'maths' ? (run.text.match(CLOSE_PUNCT)?.[0] ?? '') : ''
    return run.text.slice(taken.length)
  })
}

/**
 * A string with **term** set in bold, the one emphasis the material uses, and its maths.
 * @param {string | number | null | undefined} text
 */
export function rich(text) {
  if (!text) return null
  return h(
    'span',
    null,
    textRuns(String(text)).map(part =>
      part.bold ? h('strong', null, runsOf(part.runs)) : runsOf(part.runs)
    )
  )
}

/**
 * A figure's scroll box, once it is drawn: it takes a name, the region role and a place in the
 * keyboard's order only while the figure is wider than the column (labels stay at text size, so a
 * wide figure scrolls and is never shrunk).
 * @param {Element} box
 */
function scrollsWhenWide(box) {
  const check = () => {
    const wide = box.scrollWidth > box.clientWidth
    const attrs = new Map([
      ['role', 'region'],
      ['tabindex', '0'],
      ['aria-label', `${box.getAttribute('data-name')}, scrolls sideways`]
    ])
    for (const [name, value] of attrs)
      if (wide) box.setAttribute(name, value)
      else box.removeAttribute(name)
  }
  const watch = new ResizeObserver(check) // the box, and the drawing inside it (a text size change)
  watch.observe(box)
  const svg = box.querySelector('svg')
  if (svg) watch.observe(svg)
}

/**
 * A figure: one SVG of lines and text, drawn so its smallest label is body text size, with its text
 * printed under it: one sentence as a caption, several as a list. The SVG is hidden from a screen
 * reader; the printed text is what it reads.
 * @param {import('../kernel/maths-decode.logic.js').FigureRef | undefined} figure
 * @param {import('../kernel/maths-decode.logic.js').Figures | undefined} figures
 */
export function figure(figure, figures) {
  const svg = figure && figures?.[figure.file]
  if (!figure || !svg) return null
  const said = sentencesOf(figure.alt)
  const wide = widthInBodyText(svg)
  return h(
    'figure',
    { class: 'lrn-ss-figure', style: wide === null ? undefined : `--figure-width: ${wide};` },
    h(
      'div',
      { class: 'lrn-figure-scroll', 'data-name': said[0] ?? figure.alt, ref: scrollsWhenWide },
      h('span', { '.innerHTML': svg, 'aria-hidden': 'true' })
    ),
    h(
      'figcaption',
      null,
      said.length > 1
        ? h(
            'ul',
            null,
            said.map((s, i) => h('li', { key: i }, s))
          )
        : figure.alt
    )
  )
}

/**
 * The form an answer takes. The answer is written on paper, so the example after "as in" is set
 * the way the answer is shown (`setAnswer`): as mathematics, never as typed text such as 4*x. A
 * unit whose form words hold typed syntax sets them too (`setForm`).
 * @param {import('../kernel/maths-decode.logic.js').PaperProblem} problem
 * @param {(p: import('../kernel/maths-decode.logic.js').PaperProblem) => import('./view.dom.js').Child} setAnswer
 * @param {(words: string) => string} setForm
 * @param {string} [key]
 */
function formLine(problem, setAnswer, setForm, key) {
  const parts = /^(.*), as in (.*)\.$/.exec(problem.form)
  return h(
    'p',
    { key, class: 'lrn-ss-note' },
    parts
      ? [
          rich(setForm(parts[1] ?? '')),
          ', as in ',
          setAnswer({ ...problem, answer: parts[2] ?? '' }),
          '.'
        ]
      : rich(problem.form)
  )
}

/**
 * An answer worked on paper. The learner shows the stored answer and marks their own against it,
 * or presses I am stuck (STUCK), which counts as wrong. `onDone(right)` runs once. `setAnswer`
 * gives the answer as it is shown, for a unit that sets it as mathematics, and `setForm` the
 * words of its form line. Whether the answer is shown (`open`) is kept by the step that holds
 * it, for the problem in hand.
 * @param {{
 *   problem: import('../kernel/maths-decode.logic.js').PaperProblem,
 *   open: boolean,
 *   onOpen: () => void,
 *   onDone: (right: boolean) => void,
 *   setAnswer?: ((p: import('../kernel/maths-decode.logic.js').PaperProblem) => import('./view.dom.js').Child) | undefined,
 *   setForm?: ((words: string) => string) | undefined
 * }} p
 */
export function answerBox({
  problem,
  open,
  onOpen,
  onDone,
  setAnswer = q => rich(q.answer),
  setForm = w => w
}) {
  // Shut and open are new nodes each.
  if (!open)
    return [
      formLine(problem, setAnswer, setForm, 'form'),
      actionsAs(
        'choose',
        choice({ label: STUCK, onPress: () => onDone(false) }),
        choice({ primary: true, label: 'Show the answer', onPress: onOpen })
      )
    ]
  return h(
    'div',
    { key: 'open' },
    formLine(problem, setAnswer, setForm),
    h('p', null, 'The answer: ', setAnswer(problem)),
    mark({
      when: markSentence(problem.form),
      onWrong: () => onDone(false),
      onRight: () => onDone(true)
    })
  )
}

/**
 * A problem's lines: its solution (strings) or a fading problem's lines ({ step, reason }). The
 * last `hide` lines are covered.
 * @param {{ lines: readonly import('../kernel/maths-decode.logic.js').WorkLine[], hide?: number, figures?: import('../kernel/maths-decode.logic.js').Figures | undefined, label?: string, key?: string }} p
 *   `key`: a new list, never another branch's
 */
export function lines({ lines, hide = 0, figures, label = 'Solution', key }) {
  return h(
    'ol',
    { key, class: 'lrn-ss-lines', 'aria-label': label },
    lines.map((l, i) => {
      const step = typeof l === 'string' ? l : l.step
      const reason = typeof l === 'string' ? null : l.reason
      return i < lines.length - hide
        ? h(
            'li',
            { key: i, class: 'lrn-ss-line' },
            h('span', { class: 'lrn-ss-text' }, rich(step)),
            reason && h('span', { class: 'lrn-ss-reason' }, rich(reason)),
            figure(typeof l === 'string' ? undefined : l.figure, figures)
          )
        : h(
            'li',
            { key: i, class: 'lrn-ss-line lrn-ss-covered' },
            'Write this hidden line on paper.'
          )
    })
  )
}

/**
 * An idea: its heading, its case, its figure, its statement and its definitions.
 * @param {import('../kernel/maths-decode.logic.js').Idea} idea
 * @param {string} heading
 * @param {import('../kernel/maths-decode.logic.js').Figures} [figures]
 */
export const idea = (idea, heading, figures) =>
  h(
    'div',
    null,
    h('h3', { tabindex: '-1' }, heading, ': ', idea.name),
    idea.concrete && h('p', null, rich(idea.concrete)),
    figure(idea.figure, figures),
    idea.general && h('p', null, rich(idea.general)),
    idea.definitions?.map((d, j) => h('p', { key: j }, rich(d)))
  )

/**
 * The dated lines of one kind or one problem, shown once its mark is given.
 * @param {readonly import('../kernel/days.logic.js').Line[] | undefined} list
 * @param {'kind' | 'problem'} what
 */
export function problemLines(list, what) {
  if (!list?.length) return null
  return h(
    'details',
    { class: 'lrn-ss-list' },
    h('summary', null, `When this ${what} comes back`),
    h(
      'ul',
      null,
      list.map((l, i) =>
        h(
          'li',
          { key: i },
          dayName(l.date),
          ': ',
          l.right ? 'right' : 'wrong',
          ' at the first try that day. It comes back on ',
          dayName(l.next),
          '.'
        )
      )
    )
  )
}
