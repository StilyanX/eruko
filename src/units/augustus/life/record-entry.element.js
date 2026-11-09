// Hides: the record written at a lesson's end: each chosen claim typed in the learner's own
// words, and a new shape as a pairing note. What is typed is kept in the record as it is typed
// (the position's `texts` and `note`); Done writes the lesson, the setbacks carried from the
// struggle with it.
import { positionIn } from '../core/lesson.logic.js'
import { sentencesOf } from '../core/lives.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, typed } from '../core/screens.dom.js'

export class AugustusRecordEntry extends LifeScreen {
  /** @type {import('../core/decode.logic.js').Life | null} */
  life = null
  /** The lesson's index in the life. */
  n = 0

  view() {
    const lesson = this.life?.lessons[this.n]
    if (!this.life || !lesson) return null
    const at = { life: this.life.id, lesson: this.n }
    const pos = positionIn(record(), at)
    const all = sentencesOf(lesson)
    const claims = pos.check?.claims ?? []
    const isNew = pos.check?.shape === 'new'
    const texts = pos.texts ?? {}
    const note = pos.note ?? ''
    const ok = claims.every(c => texts[c.id]?.trim()) && (!isNew || note.trim())
    return step([
      h('h3', { tabindex: '-1' }, 'Write it in the record'),
      claims.length > 0 && h('p', null, 'Rewrite each claim in your own words, one sentence each.'),
      claims.map((c, i) =>
        h(
          'div',
          { key: c.id, class: 'lrn-bio-write' },
          h(
            'p',
            { class: 'lrn-ss-note' },
            'Claim ',
            i + 1,
            c.verdict === 'contested'
              ? ` · Contested: ${c.why ?? ''}`
              : c.verdict === 'agrees'
                ? ' · Agrees'
                : ''
          ),
          h('p', null, all.find(x => x.id === c.id)?.text),
          h('textarea', {
            'aria-label': `Claim ${i + 1} in your own words`,
            class: 'field',
            rows: '2',
            '.value': texts[c.id] ?? '',
            oninput: (/** @type {Event} */ e) =>
              send({ t: 'claim-text', ...at, sentence: c.id, text: typed(e) })
          })
        )
      ),
      isNew && this.#note(at, note),
      actions(
        choice({
          primary: true,
          disabled: !ok,
          why: 'Fill in every field.',
          label: 'Done',
          onPress: () => send({ t: 'record-done', ...at })
        })
      )
    ])
  }

  /**
   * The new note on the decision's kind of problem.
   * @param {import('../core/lesson.logic.js').At} at
   * @param {string} note
   */
  #note(at, note) {
    return h(
      'div',
      { class: 'lrn-bio-write' },
      h('p', { class: 'lrn-ss-note' }, 'The kind of problem'),
      h('p', null, 'Write one line with no name, date, place or trade.'),
      h('textarea', {
        'aria-label': 'The kind of problem',
        class: 'field',
        rows: '2',
        '.value': note,
        oninput: (/** @type {Event} */ e) => send({ t: 'note-text', ...at, text: typed(e) })
      })
    )
  }
}
customElements.define('augustus-record-entry', AugustusRecordEntry)
