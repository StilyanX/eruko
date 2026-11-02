// Hides: the next-life checklist once a life is read: the learner's field and rank, the oldest
// unpaired note, and the people of the accounts who rose higher in that field. What is typed is
// kept in the record as it is typed (`listing`, session.logic.js); Done, or Enter in a one-line
// field, writes it. The builder then builds the next life outside the app; once the course holds
// it, it opens here.
import { dayName } from '../../../kernel/days.logic.js'
import { lifeId } from '../core/decode.logic.js'
import { COURSE } from '../core/course.gen.js'
import { nextBuilt } from '../core/next.logic.js'
import { listingOf } from '../core/session.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, lifeOf, typed } from '../core/screens.dom.js'

/**
 * A field of the checklist.
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

export class AugustusNextLife extends LifeScreen {
  /** The life's id. */
  life = lifeId('')

  view() {
    const s = record()
    const name = lifeOf(this.life).name
    if (s.checklist?.people) {
      const comes = s.recall[this.life]?.next
      const next = nextBuilt(s, COURSE, this.life)
      return step([
        h('h3', { tabindex: '-1' }, 'The next life'),
        h(
          'p',
          null,
          'You have read the life of ',
          name,
          '.',
          comes ? ` It comes back on ${dayName(comes)}.` : ' It comes back on its recall dates.'
        ),
        next
          ? [
              h('p', null, 'Eruko has built the life of ', next.name, '.'),
              actions(
                choice({
                  primary: true,
                  label: `Start the life of ${next.name}`,
                  onPress: () => send({ t: 'open-life', life: lifeId(next.id) })
                })
              )
            ]
          : h('p', null, 'The next life opens here once it is built.')
      ])
    }
    return this.#form(s, name)
  }

  /**
   * The checklist to fill, every field optional.
   * @param {import('../core/decode.logic.js').LivesRecord} s
   * @param {string} name
   */
  #form(s, name) {
    const typedNow = listingOf(s)
    const note = s.items.find(i => i.kind === 'shape' && !i.paired)
    return step([
      h('h3', { tabindex: '-1' }, 'The next life'),
      h('p', null, 'Every field is optional. Skip leaves them empty.'),
      h(
        'form',
        {
          onsubmit: (/** @type {SubmitEvent} */ e) => {
            e.preventDefault()
            send({ t: 'list-done' })
          }
        },
        field('field', 'au-field', 'The field you work in', typedNow.field),
        field('rank', 'au-rank', 'The office or rank you hold', typedNow.rank),
        h(
          'p',
          { class: 'lrn-ss-note' },
          'Your oldest note on a kind of problem no other life shares yet'
        ),
        h('p', null, note?.kind === 'shape' ? note.text : 'No note yet.'),
        h(
          'label',
          { class: 'label', for: 'au-people' },
          'List the people from the accounts of ',
          name,
          ' who worked in your field and rose higher than you have. Each of them started where you stand now and faced a problem of this kind. Write one name per line, in the order you met them.'
        ),
        h('textarea', {
          id: 'au-people',
          class: 'field',
          rows: '6',
          '.value': typedNow.people,
          oninput: (/** @type {Event} */ e) =>
            send({ t: 'list-text', field: 'people', text: typed(e) })
        }),
        actions(
          choice({
            type: 'submit',
            primary: true,
            label:
              typedNow.field.trim() || typedNow.rank.trim() || typedNow.people.trim()
                ? 'Done'
                : 'Skip'
          })
        )
      )
    ])
  }
}
customElements.define('augustus-next-life', AugustusNextLife)
