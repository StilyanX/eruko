// Hides: an idea with no method. Its one kind retires when the learner states it in their own words
// with an example of their own and marks the example right. The app reads nothing of what they
// state, so any mode serves (aloud, on paper, or typed): the box is optional, and its text stays
// after a Wrong. What is typed is kept in the record (`draft`) until the idea is marked right.
import { today } from './clock.dom.js'
import { dayName } from '../kernel/days.logic.js'
import { kindId } from '../kernel/maths-decode.logic.js'
import { TRY_AGAIN } from '../kernel/maths-session.logic.js'
import { heading, noSend, practiceOf } from './maths-steps.dom.js'
import { StepScreen, actions, choice, mark, step, studyStore, verdict } from './study.dom.js'
import { h } from './view.dom.js'

/**
 * The box, once drawn: focused, it brings its question into view with it, the question being as
 * far above the box as its scroll margin.
 * @param {Element} box
 */
function keepInView(box) {
  if (!(box instanceof HTMLElement)) return
  new ResizeObserver(() => {
    const question = document.getElementById(box.getAttribute('aria-describedby') ?? '')
    if (question)
      box.style.scrollMarginTop = `${box.getBoundingClientRect().top - question.getBoundingClientRect().top}px`
  }).observe(box)
}

export class AeIdeaKind extends StepScreen {
  /** @type {import('../kernel/maths-decode.logic.js').Kind} */
  kind = { id: kindId(''), forms: [] }
  heading = ''
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  /** Show the check pressed: the mark is asked. */
  written = false
  #study = studyStore()

  setup() {
    this.watch(this.#study)
  }

  /** @param {boolean} right */
  #marked(right) {
    if (!right) this.written = false
    this.send({ t: right ? 'idea-right' : 'idea-wrong', kind: this.kind.id, day: today() })
    this.focusSoon('h3')
    if (!right) this.update()
  }

  /** Show the check is gone once pressed: focus goes to the mark's question, past the optional box. */
  #showCheck() {
    this.written = true
    this.afterDraw(() => {
      const el = this.querySelector('fieldset.mark')
      if (el instanceof HTMLElement) {
        el.tabIndex = -1
        el.focus()
      }
    })
  }

  /** @param {string} field the box's id */
  #box(field) {
    return h(
      'div',
      { class: 'form' },
      h(
        'div',
        null,
        h('label', { class: 'label', for: field }, 'The idea and your example (optional)'),
        h('textarea', {
          id: field,
          class: 'field',
          rows: '4',
          'aria-describedby': `${field}-q`,
          ref: keepInView,
          '.value': practiceOf(this.#study).draft?.[this.kind.id] ?? '',
          oninput: (/** @type {Event} */ e) => {
            if (e.target instanceof HTMLTextAreaElement)
              this.send({ t: 'draft', id: this.kind.id, text: e.target.value })
          }
        })
      ),
      !this.written
        ? actions(
            choice({ primary: true, label: 'Show the check', onPress: () => this.#showCheck() })
          )
        : mark({
            when: 'Right when your example holds, checked line by line against the definition.',
            onWrong: () => this.#marked(false),
            onRight: () => this.#marked(true)
          })
    )
  }

  view() {
    const id = this.kind.id
    const record = practiceOf(this.#study)
    const retired = record.retired?.[id]
    // The day of an example marked wrong.
    const failed = record.stage?.[id]?.day
    return step([
      heading(this.heading),
      retired
        ? h(
            'p',
            { key: 'retired' },
            'You stated this idea on ',
            dayName(retired),
            '. Its problems now come in mixed practice.'
          )
        : [
            failed && !this.written && verdict(false, TRY_AGAIN),
            h(
              'p',
              { id: `inst-${id}-q` },
              'State the idea in your own words: aloud, on paper, or in the box. Give one example of your own that the text above does not show.'
            ),
            this.#box(`inst-${id}`)
          ]
    ])
  }
}
customElements.define('ae-idea-kind', AeIdeaKind)
