// Hides: the pair of lives. The lives a shape note carries stand side by side, two at the lowered
// level and three at the raised level, with the same rows; a third column pages in place of the
// second below the width that holds three. The learner types every cell beside the record, then
// one rule under them that rests only on checked claims; Done, or Enter in a field, saves it. What
// is typed is kept in the record as it is typed (`pair`, session.logic.js).
import { claimVerdict, gateFour, restable, sideBySide, yearName } from '../core/next.logic.js'
import { pairOf } from '../core/session.logic.js'
import { findLife } from '../core/lives.logic.js'
import { itemId } from '../core/decode.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, ticked, typed } from '../core/screens.dom.js'

/** @typedef {NonNullable<ReturnType<typeof pairOf>>} Pair */

/** @type {readonly [string, string][]} */
const ROWS = [
  ['problem', 'The problem'],
  ['knew', 'What he knew'],
  ['decision', 'The decision'],
  ['outcome', 'The outcome']
]

/**
 * A life's name: as the record holds it, else as the course builds it, else plain words.
 * @param {import('../core/decode.logic.js').LivesRecord} record
 * @param {import('../core/decode.logic.js').LifeId} id
 */
const nameOf = (record, id) => record.lives[id]?.name || findLife(id)?.name || 'A life with no name'

export class AugustusPair extends LifeScreen {
  /** The shape note's id. */
  shape = itemId('')
  /** The window's width in CSS pixels, kept current as the window is resized or zoomed. */
  widthPx = innerWidth
  /** The third life is in view in place of the second. */
  third = false

  setup() {
    super.setup()
    const read = () => {
      this.widthPx = innerWidth
      this.update()
    }
    addEventListener('resize', read)
    this.onLeave(() => removeEventListener('resize', read))
  }

  view() {
    const pair = pairOf(record(), this.shape)
    if (!pair) return null
    const { shape, draft, lives } = pair
    const paged =
      sideBySide(lives.length - draft.extra.length, this.widthPx) < lives.length &&
      !draft.extra.length
    const shownLives = paged ? (this.third ? [lives[0], lives[2]] : lives.slice(0, 2)) : lives
    const full = lives.every(l => ROWS.every(([k]) => draft.cells[`${l}.${k}`]?.trim()))
    return step([
      h('h3', { tabindex: '-1' }, 'Compare two lives'),
      h('p', null, shape.text),
      h(
        'form',
        {
          onsubmit: (/** @type {SubmitEvent} */ e) => {
            e.preventDefault()
            send({ t: 'rule-done', shape: shape.id })
          }
        },
        h(
          'div',
          { class: 'lrn-bio-pair', style: `--cols: ${shownLives.length};` },
          shownLives.map(l => (l === undefined ? null : this.#column(pair, l)))
        ),
        paged &&
          actions(
            choice({
              label: this.third ? 'The second life' : 'The third life',
              onPress: () => {
                this.third = !this.third
                this.update()
              }
            })
          ),
        h('label', { class: 'label', for: 'au-rule' }, 'The one rule both show, in your own words'),
        h('input', {
          id: 'au-rule',
          class: 'field',
          '.value': draft.rule,
          oninput: (/** @type {Event} */ e) =>
            send({ t: 'rule-text', shape: shape.id, text: typed(e) })
        }),
        this.#rests(pair),
        this.#actions(pair, full)
      )
    ])
  }

  /**
   * "No rule" (yet), and Done, which saves the rule.
   * @param {Pair} pair
   * @param {boolean} full every cell is filled
   */
  #actions(pair, full) {
    const { shape, draft } = pair
    return actions(
      choice({
        label:
          gateFour(shape, pair.lives, pair.level) === 'no rule' || draft.extra.length
            ? 'No rule'
            : 'No rule yet: add a life',
        onPress: () => send({ t: 'no-rule', shape: shape.id })
      }),
      choice({
        type: 'submit',
        primary: true,
        disabled: !full || !draft.rule.trim(),
        why: 'Fill in every cell and the rule.',
        label: 'Done'
      })
    )
  }

  /**
   * One life's column: its name, its cells, and its forecasts on the note's decisions.
   * @param {Pair} pair
   * @param {import('../core/decode.logic.js').LifeId} l
   */
  #column(pair, l) {
    const s = record()
    const { shape, draft } = pair
    const forecasts = s.items.flatMap(i =>
      i.kind === 'forecast' && i.life === l && i.lesson && shape.decisions.includes(i.lesson)
        ? [i]
        : []
    )
    return h(
      'div',
      { key: l },
      h('p', { class: 'lrn-ss-note' }, nameOf(s, l)),
      ROWS.map(([k, label]) =>
        h(
          'label',
          { key: k, class: 'label' },
          label,
          h('input', {
            class: 'field',
            '.value': draft.cells[`${l}.${k}`] ?? '',
            oninput: (/** @type {Event} */ e) =>
              send({ t: 'cell', shape: shape.id, life: l, row: k, text: typed(e) })
          })
        )
      ),
      forecasts.map(f =>
        h(
          'p',
          { key: f.id, class: 'lrn-ss-note' },
          'In the record, ',
          yearName(f.lifeDate?.y ?? 0),
          ': ',
          f.question,
          ' ',
          f.answer ? 'Yes.' : 'No.'
        )
      )
    )
  }

  /**
   * The checked claims the rule may rest on.
   * @param {Pair} pair
   */
  #rests(pair) {
    const claims = restable(record().items, pair.lives)
    const shape = pair.shape.id
    return (
      claims.length > 0 &&
      h(
        'fieldset',
        { class: 'lrn-bio-entry' },
        h('legend', { class: 'label' }, 'The checked claims it rests on'),
        claims.map(c =>
          h(
            'label',
            { key: c.id, class: 'radio' },
            h('input', {
              type: 'checkbox',
              '.checked': pair.draft.rests.includes(c.id),
              onchange: (/** @type {Event} */ e) =>
                send({ t: 'rest', shape, claim: c.id, on: ticked(e) })
            }),
            c.text,
            claimVerdict(c) === 'contested' ? ' (contested)' : ''
          )
        )
      )
    )
  }
}
customElements.define('augustus-pair', AugustusPair)
