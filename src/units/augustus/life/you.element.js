// Hides: the first screen when no life is in hand (Biography, the one next action, case 6): the
// field you work in and the office or rank you hold, which the next-life checklist's further-along
// and within-reach tests read. What is typed is kept in the record as it is typed (`listing`);
// Done, or Enter in a field, writes it as `you`, and the first life's first lesson follows.
import { listingOf } from '../core/session.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, typed } from '../core/screens.dom.js'

/**
 * @param {'field' | 'rank'} k
 * @param {string} id
 * @param {string} label
 * @param {string} value
 */
const field = (k, id, label, value) => [
  h('label', { class: 'label', for: id }, label),
  h('input', {
    id,
    class: 'field',
    '.value': value,
    oninput: (/** @type {Event} */ e) => send({ t: 'list-text', field: k, text: typed(e) })
  })
]

export class AugustusYou extends LifeScreen {
  view() {
    const now = listingOf(record())
    return step([
      h('h3', { tabindex: '-1' }, 'Your field and your post'),
      h(
        'p',
        null,
        'Eruko uses these to choose each later life. Leave a field empty if you hold no post. You can change them at each next-life checklist.'
      ),
      h(
        'form',
        {
          onsubmit: (/** @type {SubmitEvent} */ e) => {
            e.preventDefault()
            send({ t: 'you-done' })
          }
        },
        field('field', 'au-you-field', 'The field you work in', now.field),
        field('rank', 'au-you-rank', 'The office or rank you hold', now.rank),
        actions(choice({ type: 'submit', primary: true, label: 'Done' }))
      )
    ])
  }
}
customElements.define('augustus-you', AugustusYou)
