// Hides: how "Place it on the line" is answered: a press on the line sets the mark, the arrow keys
// move it in hundredths (Home and End go to the ends), or the place is typed as a decimal to one
// place for a reader with no pointer. The line and the box are one form, so Enter in the box
// presses Check. Dragging is never the only way (WCAG 2.5.7). The mark's own label is never a
// number. A wrong mark counts as stuck: the shared step's verdict is the only one, and its solution
// ends on the line cut into tenths with the exact place. A right mark in mixed practice is handed
// on the same way, its solution shown under the step's verdict. A right mark in fading (the step
// hands `hide`), whose step shows no solution after it, shows here the line cut into tenths with
// the exact place and the mark, the verdict, and Next, which hands it on.
import { STUCK, lines, rich } from '../../../parts/maths-screens.dom.js'
import { StepScreen, actionsAs, choice, verdict } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { matchAnswer } from './check.logic.js'
import { placeKey } from './figures.logic.js'
import './number-line.element.js'
import {
  decimalOf,
  hundredthsAt,
  lineText,
  reachOf,
  typedHundredths,
  whereLies
} from './number-line.logic.js'

/** How far each key moves the mark, in hundredths. */
const KEY_STEP = new Map([
  ['ArrowRight', 1],
  ['ArrowUp', 1],
  ['ArrowLeft', -1],
  ['ArrowDown', -1],
  ['PageUp', 10],
  ['PageDown', -10]
])

/**
 * Where a mark is, said without its number: between two whole numbers, or on one.
 * @param {number | null} mark hundredths
 */
function whereText(mark) {
  if (mark === null) return 'No mark placed'
  const whole = Math.floor(mark / 100)
  return mark % 100 === 0
    ? `Your mark is at ${whole}`
    : `Your mark is between ${whole} and ${whole + 1}`
}

export class ArithmeticPlaceLine extends StepScreen {
  /** @type {import('../../../kernel/maths-decode.logic.js').PaperProblem | null} */
  problem = null
  /** @type {import('../../../parts/maths-steps.dom.js').Hand | null} */
  hand = null
  /** @type {import('../../../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  /** The mark in hundredths of a unit, or null before one is placed. @type {number | null} */
  mark = null
  /** What is typed in the box. */
  typed = ''
  /** A right mark in fading, checked: the line cut into tenths shows before the next problem. */
  shown = false

  /** @param {number | null} hundredths */
  #place(hundredths) {
    this.mark = hundredths
    this.update()
  }

  /**
   * @param {MouseEvent} e
   * @param {number} to
   */
  #press(e, to) {
    const row = this.querySelector('.lrn-place-marks')
    if (row === null) return
    const box = row.getBoundingClientRect()
    this.typed = ''
    this.#place(hundredthsAt((e.clientX - box.left) / box.width, to))
  }

  /**
   * @param {KeyboardEvent} e
   * @param {number} to
   */
  #key(e, to) {
    const end = to * 100
    const move = KEY_STEP.get(e.key)
    const next =
      e.key === 'Home'
        ? 0
        : e.key === 'End'
          ? end
          : move === undefined
            ? null
            : (this.mark ?? 0) + move
    if (next === null) return
    e.preventDefault()
    this.typed = ''
    this.#place(Math.min(end, Math.max(0, next)))
  }

  /**
   * @param {string} text
   * @param {number} to
   */
  #type(text, to) {
    this.typed = text
    this.#place(typedHundredths(text, to))
  }

  /**
   * The mark and its words, in the row under the line.
   * @param {number | null} mark
   * @param {number} to
   */
  #markRow(mark, to) {
    const at = mark === null ? null : `left:${mark / to}%`
    return h(
      'div',
      { class: 'lrn-place-marks', 'aria-hidden': 'true' },
      at !== null && [
        h('span', { key: 'm', class: 'lrn-place-marker', style: at }),
        h('span', { key: 'l', class: 'lrn-place-marker-label', style: at }, 'Your mark')
      ]
    )
  }

  /**
   * The box to type the place in, and what it says of a place it cannot read.
   * @param {number} to
   * @param {boolean} faulty
   */
  #typeBox(to, faulty) {
    return [
      h(
        'label',
        { key: 'type', class: 'lrn-place-type' },
        'Or type the place as a decimal to one place, if you cannot press the line.',
        h('input', {
          class: 'field',
          type: 'text',
          inputmode: 'decimal',
          autocomplete: 'off',
          'aria-invalid': faulty ? 'true' : undefined,
          '.value': this.typed,
          oninput: (/** @type {Event} */ e) =>
            e.target instanceof HTMLInputElement && this.#type(e.target.value, to)
        })
      ),
      faulty &&
        h(
          'p',
          { key: 'fault', class: 'lrn-ss-note' },
          `Type a decimal with one place, from 0 to ${to}.`
        )
    ]
  }

  /**
   * The line to press and the box to type the place in, one form whose submit is Check: a mark in
   * the same tenth as the exact place is right.
   * @param {string} value
   * @param {number} to
   * @param {import('../../../kernel/maths-decode.logic.js').PaperProblem} problem
   */
  #ask(value, to, problem) {
    const mark = this.mark
    const line = this.figures?.[placeKey('line', value)] ?? ''
    const faulty = this.typed.trim() !== '' && mark === null
    return h(
      'form',
      {
        key: 'ask',
        novalidate: true,
        onsubmit: (/** @type {SubmitEvent} */ e) => {
          e.preventDefault()
          if (mark === null) return
          if (!matchAnswer(decimalOf(mark), value, problem.form)) this.hand?.onStuck()
          else if (this.hand?.hide === undefined) this.hand?.onDone(true)
          else {
            this.shown = true
            this.update()
            this.focusSoon('.lrn-ss-primary')
          }
        }
      },
      h('p', { key: 'form', class: 'lrn-ss-note' }, rich(problem.form)),
      h(
        'div',
        {
          key: 'line',
          class: 'lrn-place-line',
          role: 'slider',
          tabindex: '0',
          'aria-label': lineText(to),
          'aria-valuemin': 0,
          'aria-valuemax': to,
          'aria-valuenow': (mark ?? 0) / 100,
          'aria-valuetext': whereText(mark),
          onclick: (/** @type {MouseEvent} */ e) => this.#press(e, to),
          onkeydown: (/** @type {KeyboardEvent} */ e) => this.#key(e, to)
        },
        h('div', { '.innerHTML': line, 'aria-hidden': 'true' }),
        this.#markRow(mark, to)
      ),
      ...this.#typeBox(to, faulty),
      actionsAs(
        'place',
        choice({ label: STUCK, onPress: () => this.hand?.onStuck() }),
        choice({
          primary: true,
          type: 'submit',
          label: 'Check',
          disabled: mark === null,
          why: 'Place your mark first.'
        })
      )
    )
  }

  /**
   * A right mark in fading: the line cut into tenths with the exact place, the mark beside it, the
   * verdict, and Next.
   * @param {string} value
   * @param {number} to
   */
  #right(value, to) {
    return h(
      'div',
      { key: 'right' },
      h('div', { class: 'lrn-place-check' }, [
        h('div', { '.innerHTML': this.figures?.[placeKey('check', value)] ?? '', 'aria-hidden': 'true' }),
        this.#markRow(this.mark, to)
      ]),
      verdict(true, [whereLies(value), ' Your mark is in the same tenth.']),
      actionsAs(
        'next',
        choice({ primary: true, label: 'Next', onPress: () => this.hand?.onDone(true) })
      )
    )
  }

  view() {
    const problem = this.problem
    if (problem === null) return null
    const value = problem.answer
    const to = reachOf(value)
    const hand = this.hand
    return [
      hand?.hide !== undefined &&
        (hand.hide < hand.lines.length
          ? lines({ lines: hand.lines, hide: hand.hide, figures: this.figures, key: 'covered' })
          : h('p', { key: 'alone', class: 'lrn-ss-note' }, 'Write the full working on paper.')),
      this.shown ? this.#right(value, to) : this.#ask(value, to, problem)
    ]
  }
}
customElements.define('arithmetic-place-line', ArithmeticPlaceLine)
