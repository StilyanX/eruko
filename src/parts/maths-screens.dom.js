// Hides: how a maths unit's text and its pieces are drawn: text with a term in bold and its
// formulas set from their MathML, a figure, an answer worked on paper, a solution's lines, an idea,
// and a problem's dated list. The pieces of Mathematics that
// the maths units' screens share. Their styles are in study-page.css.
import {
  CLOSE_PUNCT,
  displayKey,
  endsInScript,
  formulaPieces,
  isOneToken,
  isTall,
  relationsIn,
  spoken,
  textRuns
} from '../kernel/maths-text.logic.js'
import { sentencesOf, widthInBodyText } from '../kernel/figure.logic.js'
import { knows, mathmlOf } from './mathml.dom.js'
import { markSentence } from '../kernel/answer.logic.js'
import { dayName } from '../kernel/days.logic.js'
import { actionsAs, choice, mark, say } from './study.dom.js'
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
 * A scroll box while what it holds is wider than its line, else nothing: it takes the region role,
 * a name and a place in the keyboard's order (WCAG 1.4.10, 2.1.1, 4.1.2).
 * @param {Element} box
 * @param {boolean} wide
 */
function scrollBox(box, wide) {
  const attrs = new Map([
    ['role', 'region'],
    ['tabindex', '0'],
    ['aria-label', `${box.getAttribute('data-name')}, scrolls sideways`]
  ])
  for (const [name, value] of attrs)
    if (wide) box.setAttribute(name, value)
    else box.removeAttribute(name)
}

/**
 * An inline formula's box, once drawn: it scrolls while a part of the formula that cannot wrap
 * (`data-whole`: the formula, or one piece of a long one) is wider than its line, at least 24
 * pixels high (WCAG 2.5.8), and it is marked `data-wrapped` while its pieces stand on more than
 * one line. The shared check for wide maths (markWide, study.dom.js) leaves the
 * formula to this box: a formula of one piece stands in a block of its own size, which it is never
 * wider than, and a formula of pieces carries a tabindex of its own, -1, which takes no Tab stop.
 * @param {Element} box
 */
function inlineWhenWide(box) {
  if (!(box instanceof HTMLElement)) return
  /** @type {Element | null} */
  let line = null
  const watch = new ResizeObserver(() => {
    if (!line) {
      line = box.parentElement?.closest('p, li, div, td, figcaption') ?? null
      if (line) watch.observe(line)
    }
    const parts = [...box.querySelectorAll('[data-whole]')].map(el => el.getBoundingClientRect())
    const widest = Math.max(...parts.map(r => r.width))
    const wide = line !== null && widest > line.clientWidth
    // A formula wrapped over lines of its own keeps its full height (study-page.css).
    box.toggleAttribute(
      'data-wrapped',
      parts.some(r => r.top >= (parts[0]?.bottom ?? 0))
    )
    box.style.cssText = wide
      ? 'display: inline-block; max-width: 100%; min-height: 24px; overflow-x: auto; vertical-align: middle;'
      : ''
    scrollBox(box, wide)
  })
  watch.observe(box)
  for (const el of box.querySelectorAll('[data-whole]')) watch.observe(el)
}

/**
 * One formula's MathML in a block of its own size (`inlineWhenWide`), a pixel wider than the
 * formula on the inside and none on the outside: markWide reads the block's width in whole pixels.
 * @param {string} mathml
 * @param {string} style the block's
 */
const sized = (mathml, style) =>
  h('div', {
    style: `${style} padding-inline-end: 1px; margin-inline-end: -1px;`,
    'data-whole': '',
    '.innerHTML': mathml
  })

/**
 * The MathML inside a piece's <math>.
 * @param {string} mathml
 */
const inner = mathml => mathml.replace(/^<math>|<\/math>$/g, '')

/**
 * The class of the punctuation after a formula that ends in a script: the maths font leaves a
 * space after a script, and the mark is drawn back over it (study-page.css).
 * @param {string} mathml the formula's, or its last piece's
 */
const afterScript = mathml => (endsInScript(mathml) ? 'lrn-after-script' : undefined)

/**
 * The punctuation after a formula as HTML, set against it in the formula's own box behind a word
 * joiner, so no line parts the two or starts with the mark.
 * @param {string} mathml the formula's, or its last piece's
 * @param {string} after
 */
const closing = (mathml, after) =>
  after &&
  `<span${afterScript(mathml) ? ` class="${afterScript(mathml)}"` : ''}>\u2060${after}</span>`

/**
 * Inline maths: one <math>, so a screen reader reads one formula whole. A formula with no relation,
 * + or − outside its brackets is one piece that never wraps. A longer one is one block with its
 * punctuation, which moves to the next line whole; only when it is wider than the line does it
 * wrap inside, set from pieces (maths-text.logic.js): each side of a relation an mrow that moves
 * to a new line whole, and wraps before its own + and − only when it is still wider than the line.
 * A formula that holds what is taller than a line (`isTall`: a fraction, a table, limits) is
 * marked lrn-tall: it takes its full height in the line, with a clear space above and below.
 * @param {string} tex
 * @param {string} after the punctuation that follows it
 */
function maths(tex, after) {
  const sides = formulaPieces(tex)
  if (sides.length === 1 && sides[0]?.length === 1) {
    const mathml = mathmlOf(tex)
    return h(
      'span',
      {
        class: isTall(mathml) ? 'lrn-piece lrn-tall' : 'lrn-piece',
        'data-name': 'Formula',
        ref: inlineWhenWide
      },
      sized(mathml, 'display: inline-block;'),
      after && h('span', { class: afterScript(mathml) }, `\u2060${after}`)
    )
  }
  const pieces = sides.flat().map(mathmlOf)
  const mathml = sides
    .map(
      side =>
        `<mrow style="display: inline-block; max-width: 100%;">${side
          .map(p => `<mrow data-whole style="display: inline math;">${inner(mathmlOf(p))}</mrow>`)
          .join('')}</mrow>`
    )
    .join('')
  return h('span', {
    class: pieces.some(isTall) ? 'lrn-whole lrn-tall' : 'lrn-whole',
    'data-name': 'Formula',
    ref: inlineWhenWide,
    '.innerHTML': `<math tabindex="-1" style="display: inline; vertical-align: baseline;">${mathml}</math>${closing(mathmlOf(sides.at(-1)?.at(-1) ?? tex), after)}`
  })
}

/**
 * A formula on a line of its own, centred, which scrolls inside that line when it is wider. The
 * punctuation that follows it in the sentence stands at its end.
 * @param {string} mathml one <math>, set as display maths
 * @param {string} after
 */
const ownLine = (mathml, after) =>
  h(
    'span',
    { class: 'lrn-display', 'data-name': 'Formula', ref: scrollsWhenWide },
    h('div', { 'data-whole': '', '.innerHTML': `${mathml}${closing(mathml, after)}` })
  )

/**
 * A formula the content marks as display maths ($$).
 * @param {string} tex
 * @param {string} after
 */
const display = (tex, after) => ownLine(mathmlOf(displayKey(tex)), after)

/**
 * An inline formula of running prose that stands on a line of its own (`standsAlone`): one <math>
 * of its pieces, set as display maths.
 * @param {string} tex
 * @param {string} after
 */
const promoted = (tex, after) =>
  ownLine(
    `<math display="block" class="tml-display" style="display:block math;">${formulaPieces(tex)
      .flat()
      .map(p => inner(mathmlOf(p)))
      .join('')}</math>`,
    after
  )

/**
 * The top-level relation signs of an inline formula, read from its pieces' MathML.
 * @param {string} tex
 */
const relations = tex =>
  formulaPieces(tex)
    .flat()
    .reduce((n, p) => n + relationsIn(mathmlOf(p)), 0)

// A sentence that opens "For all …," and has come to the comma that ends that clause.
const FOR_ALL = /(?:^|[.:;!?]\s+)For (?:all|every|any|each)\b[^.:;!?]*,\s*$/

/**
 * True when a formula of running prose stands on a line of its own: it is a chain of two or more
 * relation signs, or it holds a relation sign and directly follows a colon or the clause
 * "For all …," that opens its sentence.
 * @param {string} tex
 * @param {string} before the paragraph's text before it, each formula in it written §
 */
function standsAlone(tex, before) {
  const n = relations(tex)
  return n >= 2 || (n === 1 && (/:\s*$/.test(before) || FOR_ALL.test(before)))
}

/**
 * True when a formula is one number or one name, which is tied to the word before it.
 * @param {string} tex
 */
const oneToken = tex => knows(tex) && isOneToken(mathmlOf(tex))

/**
 * The runs of one part of a text: words, inline maths made to wrap, each formula taking the
 * punctuation after it into its own box, and display maths. The space before a formula of one
 * token is a no-break space. In running prose (`prose`) a formula may stand on a line of its own
 * (`standsAlone`); anywhere else (a table cell, a list, a line of a solution or proof, an answer)
 * only what the content marks as display maths does.
 * @param {import('../kernel/maths-text.logic.js').Run[]} runs
 * @param {boolean} prose
 */
function runsOf(runs, prose) {
  /** @param {number} j the place of a formula @returns {string} the punctuation after it */
  const punct = j => {
    const next = runs[j + 1]
    return next?.kind === 'text' ? (next.text.match(CLOSE_PUNCT)?.[0] ?? '') : ''
  }
  return runs.map((run, j) => {
    if (run.kind === 'display') return display(run.tex, punct(j))
    if (run.kind === 'maths') {
      const before = runs
        .slice(0, j)
        .map(r => (r.kind === 'text' ? r.text : '§'))
        .join('')
      return prose && standsAlone(run.tex, before)
        ? promoted(run.tex, punct(j))
        : maths(run.tex, punct(j))
    }
    const prev = runs[j - 1]
    const text = run.text.slice(prev && prev.kind !== 'text' ? punct(j - 1).length : 0)
    const next = runs[j + 1]
    return next?.kind === 'maths' && oneToken(next.tex) ? text.replace(/(\S) $/, '$1 ') : text
  })
}

/**
 * A string with **term** set in bold, the one emphasis the material uses, and its maths. `prose`
 * says the text is a paragraph of running prose (an idea, a worked example's problem, a
 * statement), where a formula may stand on a line of its own (`runsOf`); a bold term never does.
 * @param {string | number | null | undefined} text
 * @param {boolean} [prose]
 */
export function rich(text, prose = false) {
  if (!text) return null
  return h(
    'span',
    null,
    textRuns(String(text)).map(part =>
      part.bold ? h('strong', null, runsOf(part.runs, false)) : runsOf(part.runs, prose)
    )
  )
}

/**
 * A figure's scroll box, or a display formula's, once it is drawn: it takes a name, the region
 * role and a place in the keyboard's order only while what it holds is wider than the column
 * (labels stay at text size, so a wide figure scrolls and is never shrunk).
 * @param {Element} box
 */
function scrollsWhenWide(box) {
  const check = () => scrollBox(box, box.scrollWidth > box.clientWidth)
  // The box, and what it holds: a drawing (a text size change), a formula (its face arriving).
  const watch = new ResizeObserver(check)
  watch.observe(box)
  const held = box.querySelector('svg, [data-whole]')
  if (held) watch.observe(held)
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
        choice({
          primary: true,
          label: 'Show the answer',
          onPress: () => {
            onOpen()
            say(`The answer: ${spoken(problem.answer)}`)
          }
        })
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
 * last `hide` lines are covered. A solution that opens by saying its problem again, under that
 * problem (`under`, its prompt), starts at its next line: the problem is on the page once.
 * @param {{ under?: string | undefined, lines: readonly import('../kernel/maths-decode.logic.js').WorkLine[], hide?: number, figures?: import('../kernel/maths-decode.logic.js').Figures | undefined, label?: string, key?: string }} p
 *   `key`: a new list, never another branch's
 */
export function lines({ lines: all, hide = 0, figures, label = 'Solution', key, under }) {
  const first = all[0]
  const lines =
    under !== undefined && all.length > 1 && (typeof first === 'string' ? first : first?.step) === under
      ? all.slice(1)
      : all
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
    idea.concrete && h('p', null, rich(idea.concrete, true)),
    figure(idea.figure, figures),
    idea.general && h('p', null, rich(idea.general, true)),
    idea.definitions?.map((d, j) => h('p', { key: j }, rich(d, true)))
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
