// Hides: the decision's question and the forecast: the chance that he did it, and why, locked
// with its score; or "I already know", read with none. What is typed is kept in the record as it
// is typed (the position's `draft`), so paging back to the situation or a reload loses none of it.
import { readChance } from '../core/decode.logic.js'
import { P_NOTE, positionIn } from '../core/lesson.logic.js'
import { dateLine } from '../core/next.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, typed } from '../core/screens.dom.js'

export class AugustusQuestion extends LifeScreen {
  /** @type {import('../core/decode.logic.js').Life | null} */
  life = null
  /** The lesson's index in the life. */
  n = 0
  /** Lock was pressed on a chance the app cannot read: named only then, never while typing. */
  checked = false

  /** The lesson asked, and what is typed. */
  #now() {
    const life = this.life
    const lesson = life?.lessons[this.n]
    if (!life || !lesson?.question) return null
    const at = { life: life.id, lesson: this.n }
    const draft = positionIn(record(), at).draft ?? { pText: '', reason: '' }
    return { life, lesson, question: lesson.question, at, draft }
  }

  /**
   * The chance or the reason typed.
   * @param {{ pText: string, reason: string }} draft
   */
  #type(draft) {
    const now = this.#now()
    if (now) send({ t: 'draft', ...now.at, ...draft })
  }

  /** @param {SubmitEvent} e */
  #submit(e) {
    e.preventDefault()
    const now = this.#now()
    if (!now) return
    const { pText, reason } = now.draft
    if (!pText.trim() || !reason.trim()) return
    if (!readChance(pText).ok) {
      this.checked = true
      this.update()
    }
    send({ t: 'lock', ...now.at, pText, reason })
  }

  view() {
    const now = this.#now()
    if (!now) return null
    const { pText, reason } = now.draft
    const filled = Boolean(pText.trim() && reason.trim())
    const wrongP = this.checked && !readChance(pText).ok
    return step([
      h('p', { class: 'lrn-bio-date', tabindex: '-1' }, dateLine(now.lesson.date, now.life.born)),
      h('p', { class: 'lrn-bio-q', id: 'au-question' }, now.question.text),
      h(
        'form',
        {
          class: 'form',
          'aria-labelledby': 'au-question',
          onsubmit: (/** @type {SubmitEvent} */ e) => this.#submit(e)
        },
        h('label', { class: 'label', for: 'au-p' }, 'Did he? Your chance of yes, such as 85%'),
        h('input', {
          id: 'au-p',
          class: 'field field-short',
          inputmode: 'decimal',
          '.value': pText,
          'aria-invalid': wrongP ? 'true' : undefined,
          'aria-describedby': wrongP ? 'au-p-note' : undefined,
          oninput: (/** @type {Event} */ e) => {
            this.checked = false
            this.#type({ pText: typed(e), reason })
          }
        }),
        wrongP && h('p', { class: 'lrn-ss-note', id: 'au-p-note' }, P_NOTE),
        h('label', { class: 'label', for: 'au-reason' }, 'Why'),
        h('input', {
          id: 'au-reason',
          class: 'field',
          '.value': reason,
          oninput: (/** @type {Event} */ e) => this.#type({ pText, reason: typed(e) })
        }),
        this.#actions(now, filled)
      )
    ])
  }

  /**
   * Previous, "I already know", and Lock.
   * @param {{ at: import('../core/lesson.logic.js').At, lesson: import('../core/decode.logic.js').Lesson }} now
   * @param {boolean} filled
   */
  #actions(now, filled) {
    return actions(
      choice({
        label: 'Previous',
        onPress: () => {
          send({ t: 'go', ...now.at, step: 'situation', screen: now.lesson.situation.length - 1 })
          this.dispatchEvent(new CustomEvent('turned'))
        }
      }),
      choice({
        label: 'I already know',
        onPress: () => send({ t: 'know', ...now.at })
      }),
      choice({
        type: 'submit',
        primary: true,
        disabled: !filled,
        why: 'Fill in every field.',
        label: 'Lock'
      })
    )
  }
}
customElements.define('augustus-question', AugustusQuestion)
