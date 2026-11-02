// Hides: the check of a lesson's claims. It shows every sentence of the lesson on one list, under
// each screen's date line, each open to choice. It then shows each chosen claim that has a witness
// beside it, and then the decision's shape. Beside each sentence stand the dispute the account's
// notes record over it and the evidence its page names. A claim with no second account stays unchecked and is
// not shown. A claim the notes dispute is contested, with no choice. What is chosen is kept in the
// record as it is chosen (the position's `chosen`, `verdicts`, `shape` and `beside`).
import { checkOf, positionIn } from '../core/lesson.logic.js'
import { dateLine, forcedContested, pageName } from '../core/next.logic.js'
import { screensOf } from '../core/lives.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, mark, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, ticked } from '../core/screens.dom.js'

/** @typedef {NonNullable<ReturnType<typeof checkOf>>} Check */

/**
 * Beside a sentence's choice: the dispute the account's notes record over it, and the evidence
 * the main account names for it, which the end level's Witnesses asks back.
 * @param {import('../core/lives.logic.js').Numbered} x
 */
const notesOf = x => [
  x.dispute &&
    h('p', { class: 'lrn-ss-note', id: `au-dispute-${x.id}` }, 'In dispute: ', x.dispute),
  x.evidence &&
    h(
      'p',
      { class: 'lrn-ss-note', id: `au-evidence-${x.id}` },
      'The main account names: ',
      x.evidence
    )
]

export class AugustusCheck extends LifeScreen {
  /** @type {import('../core/decode.logic.js').Life | null} */
  life = null
  /** The lesson's index in the life. */
  n = 0

  /** The lesson this screen shows, or null before it is given one. */
  get at() {
    return this.life ? { life: this.life.id, lesson: this.n } : null
  }

  view() {
    const at = this.at
    const life = this.life
    const s = record()
    const c = at && checkOf(s, at)
    if (!at || !life || !c) return null
    return positionIn(s, at).beside ? this.#beside(at, c) : this.#choose(at, life, c)
  }

  /**
   * Every sentence of the lesson, open to choice.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {import('../core/decode.logic.js').Life} life
   * @param {Check} c
   */
  #choose(at, life, c) {
    const chosen = c.picked.map(x => x.id)
    return step([
      h('h3', { tabindex: '-1' }, 'Choose the claims'),
      h(
        'p',
        null,
        'Choose each sentence that your reason or a setback rests on. Those are the claims you keep.'
      ),
      screensOf(c.lesson).map((screen, k) =>
        h(
          'fieldset',
          { key: k, class: 'lrn-bio-pick' },
          h('legend', { class: 'lrn-bio-date' }, dateLine(screen.date, life.born)),
          screen.sentences.map(x =>
            h(
              'div',
              { key: x.id },
              h(
                'label',
                { class: 'radio' },
                h('input', {
                  type: 'checkbox',
                  '.checked': chosen.includes(x.id),
                  'aria-describedby':
                    [x.dispute && `au-dispute-${x.id}`, x.evidence && `au-evidence-${x.id}`]
                      .filter(Boolean)
                      .join(' ') || undefined,
                  onchange: (/** @type {Event} */ e) =>
                    send({ t: 'pick', ...at, sentence: x.id, on: ticked(e) })
                }),
                x.text
              ),
              notesOf(x)
            )
          )
        )
      ),
      actions(
        choice({
          primary: true,
          label: 'Done',
          onPress: () => {
            send({ t: 'claims-chosen', ...at })
            // The claims beside their witnesses are marked Contested or Agrees: focus goes to the
            // screen's heading, never to a mark, so no Enter marks by habit.
            if (c.witnessed.length) this.focusHead()
          }
        })
      )
    ])
  }

  /**
   * Each chosen claim beside its witness, then the decision's shape.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {Check} c
   */
  #beside(at, c) {
    const shape = positionIn(record(), at).shape
    const judged = c.picked.every(x => c.verdictOf(x))
    const notes = c.known ? [] : c.notes
    return step([
      h(
        'h3',
        { tabindex: '-1' },
        c.witnessed.length ? 'Each claim beside another account' : 'The kind of problem'
      ),
      c.witnessed.map(x => this.#witness(at, x)),
      notes.length > 0 && this.#notes(at, notes, shape),
      actions(
        choice({ label: 'Previous', onPress: () => send({ t: 'beside-back', ...at }) }),
        choice({
          primary: true,
          disabled: !judged || (notes.length > 0 && !shape),
          why: judged ? 'Choose a note, or write a new one.' : 'Mark every claim.',
          label: 'Done',
          onPress: () => send({ t: 'check-done', ...at })
        })
      )
    ])
  }

  /**
   * A chosen claim beside its witness, marked or contested with no choice.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {import('../core/lives.logic.js').Numbered} x
   */
  #witness(at, x) {
    const passage = x.passage
    if (!passage) return null
    const verdict = positionIn(record(), at).verdicts?.[x.id]
    return h(
      'div',
      { key: x.id, class: 'lrn-bio-cols lrn-bio-claim' },
      h(
        'div',
        null,
        h('p', { class: 'lrn-ss-note' }, 'Your claim · ', pageName(x.page)),
        h('p', null, x.text),
        x.dispute &&
          h('p', { class: 'lrn-ss-note' }, "The account's notes record a dispute: ", x.dispute),
        x.evidence && h('p', { class: 'lrn-ss-note' }, 'The main account names: ', x.evidence)
      ),
      h(
        'div',
        null,
        h(
          'p',
          { class: 'lrn-ss-note' },
          passage.witness,
          ', ',
          passage.written,
          '. At stake for the writer: ',
          passage.stake,
          '.'
        ),
        h('p', null, '"', passage.words, '" (in translation)'),
        passage.note && h('p', { class: 'lrn-ss-note' }, passage.note),
        forcedContested(x)
          ? h('p', null, 'Contested.')
          : mark({
              labels: ['Contested', 'Agrees'],
              when: 'Does the other account state the same event, date, and person?',
              name: `mark-${x.id}`,
              value: verdict === undefined ? null : verdict === 'agrees',
              onChange: right =>
                send({
                  t: 'verdict',
                  ...at,
                  sentence: x.id,
                  verdict: right ? 'agrees' : 'contested'
                })
            })
      )
    )
  }

  /**
   * The notes written before, to pick the one this decision's problem shares, or a new one.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {readonly import('../core/decode.logic.js').Shape[]} notes
   * @param {import('../core/decode.logic.js').ItemId | 'new' | undefined} shape
   */
  #notes(at, notes, shape) {
    /**
     * @param {import('../core/decode.logic.js').ItemId | 'new'} id
     * @param {string} text
     */
    const option = (id, text) =>
      h(
        'label',
        id === 'new' ? { class: 'radio' } : { key: id, class: 'radio' },
        h('input', {
          type: 'radio',
          name: 'au-shape',
          '.checked': shape === id,
          onchange: () => send({ t: 'shape-pick', ...at, shape: id })
        }),
        text
      )
    return h(
      'fieldset',
      { class: 'lrn-bio-entry' },
      h(
        'legend',
        { class: 'label' },
        "Is this decision's problem the same kind as one in your notes?"
      ),
      notes.map(n => option(n.id, n.text)),
      option('new', 'No: note a new kind of problem')
    )
  }
}
customElements.define('augustus-check', AugustusCheck)
