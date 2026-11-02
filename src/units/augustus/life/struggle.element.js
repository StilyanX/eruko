// Hides: the setbacks of a stretch of the life: each written as the setback, its cost and the
// next move, or None. What is typed is kept in the record as it is typed (the position's `rows`);
// Done, or Enter in a field, carries the setbacks to the check, and they are written into the
// record with the lesson.
import { positionIn, rowsOf } from '../core/lesson.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, typed } from '../core/screens.dom.js'

/** @type {readonly ['setback' | 'cost' | 'next', string][]} */
const FIELDS = [
  ['setback', 'The setback'],
  ['cost', 'What it cost'],
  ['next', 'The next move']
]

export class AugustusStruggle extends LifeScreen {
  /** @type {import('../core/decode.logic.js').Life | null} */
  life = null
  /** The lesson's index in the life. */
  n = 0

  /** The lesson this screen shows, or null before it is given one. */
  get at() {
    return this.life ? { life: this.life.id, lesson: this.n } : null
  }

  /** @param {boolean} none */
  #done(none) {
    const at = this.at
    if (at) send({ t: 'setbacks-done', ...at, none })
  }

  /**
   * One setback's fields, and its Remove from the second on.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {readonly import('../core/decode.logic.js').SetbackRow[]} rows
   * @param {import('../core/decode.logic.js').SetbackRow} r
   * @param {number} i
   */
  #row(at, rows, r, i) {
    return h(
      'fieldset',
      { key: i, class: 'lrn-bio-entry' },
      h(
        'legend',
        { class: rows.length > 1 ? 'label' : 'sr-only' },
        'Setback',
        rows.length > 1 ? ` ${i + 1}` : ''
      ),
      FIELDS.map(([k, label]) =>
        h(
          'label',
          { key: k, class: 'label' },
          label,
          h('input', {
            class: 'field',
            '.value': r[k],
            oninput: (/** @type {Event} */ e) =>
              send({ t: 'setback-type', ...at, row: i, field: k, text: typed(e) })
          })
        )
      ),
      i > 0 &&
        actions(
          choice({
            label: `Remove setback ${i + 1}`,
            onPress: () => send({ t: 'setback-remove', ...at, row: i })
          })
        )
    )
  }

  view() {
    const at = this.at
    if (!at) return null
    const rows = rowsOf(positionIn(record(), at))
    const ok = rows.every(r => r.setback.trim() && r.cost.trim() && r.next.trim())
    return step([
      h('h3', { tabindex: '-1' }, 'Setback in this stretch?'),
      h(
        'p',
        null,
        'Write the setback, its cost and the next move, one sentence each, or choose None.'
      ),
      h(
        'form',
        {
          onsubmit: (/** @type {SubmitEvent} */ e) => {
            e.preventDefault()
            this.#done(false)
          }
        },
        rows.map((r, i) => this.#row(at, rows, r, i)),
        actions(
          choice({ label: 'None', onPress: () => this.#done(true) }),
          choice({
            label: 'Add another',
            disabled: !ok,
            why: 'Fill in every field.',
            onPress: () => send({ t: 'setback-add', ...at })
          }),
          choice({
            type: 'submit',
            primary: true,
            disabled: !ok,
            why: 'Fill in every field.',
            label: 'Done'
          })
        )
      )
    ])
  }
}
customElements.define('augustus-struggle', AugustusStruggle)
