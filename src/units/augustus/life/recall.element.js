// Hides: recall of a whole life: the telling, then the record on one list beside it, each marked,
// and after a miss only the items marked wrong. A round all right opens what comes next at once
// (session.logic.js). The telling and its marks are kept in the record (`telling`), so a reload
// or the end of a session loses none of them.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { claimVerdict, claimWhy, learningNow, recallItems, yearName } from '../core/next.logic.js'
import { tellingOf } from '../core/session.logic.js'
import { nameSoFar } from '../core/unit.logic.js'
import { lifeId } from '../core/decode.logic.js'
import { record, send } from '../core/session.dom.js'
import { actions, choice, mark, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, lifeOf, typed } from '../core/screens.dom.js'

/** @typedef {ReturnType<typeof recallItems>[number]} Told An item recall asks back. */

/**
 * What counts as right for one record item, in the words gate 1 checks it by: its label, its
 * fields as [name, text] lines, and the test for Right. The label names the year of the item's
 * lesson, the one cue left when the item is told again before it is shown.
 * @param {Told} i
 * @param {import('../core/decode.logic.js').LifeId} life
 * @returns {{ what: string, say: [string, string | undefined][], by: string }}
 */
function counts(i, life) {
  const y =
    i.kind === 'rule' ? undefined : lifeOf(life).lessons.find(l => l.id === i.lesson)?.date.y
  const year = y === undefined ? '' : ` · ${yearName(y)}`
  switch (i.kind) {
    case 'forecast':
      return {
        what: `Decision · ${yearName(i.lifeDate?.y ?? 0)}${i.known ? ' · I already know' : ''}`,
        say: [
          ['Question', i.question],
          ['What happened', i.answer ? 'Yes.' : 'No.']
        ],
        by: 'Right when you told the decision and what he did.'
      }
    case 'claim':
      return claimVerdict(i) === 'contested'
        ? {
            what: `Claim${year} · contested${claimWhy(i) ? `: ${claimWhy(i)}` : ''}`,
            say: [['Claim', i.text]],
            by: 'Right when you told the fact, its year if it has one, and the word contested.'
          }
        : {
            what: `Claim${year}`,
            say: [['Claim', i.text]],
            by: 'Right when you told the fact, with its year if it has one.'
          }
    case 'setback':
      return {
        what: `Setback${year}`,
        say: [
          ['Setback', i.setback],
          ['Cost', i.cost],
          ['Next move', i.next]
        ],
        by: 'Right when you told all three: the setback, its cost, and the next move.'
      }
    case 'rule':
      return { what: 'Rule', say: [['Rule', i.text]], by: 'Right when you told the rule.' }
    default:
      return unreachable(i)
  }
}

export class AugustusRecall extends LifeScreen {
  /** The life told. */
  life = lifeId('')

  view() {
    const t = tellingOf(record(), this.life)
    switch (t.phase) {
      case 'tell':
        return this.#tell(t)
      case 'judge':
      case 'retry':
        return this.#judge(t)
      default:
        return unreachable(t.phase)
    }
  }

  /**
   * The telling, typed here or told aloud or on paper.
   * @param {import('../core/decode.logic.js').Telling} t
   */
  #tell(t) {
    const s = record()
    const life = this.life
    const r = s.recall[life]
    const items = recallItems(s, life)
    // The first day a life is in recall it is told until it is right three times.
    const learning = learningNow(r)
    return step([
      h('h3', { tabindex: '-1' }, 'Tell the whole life'),
      h(
        'p',
        null,
        'Tell everything in your record from memory and in your own words, before you look at it again. Tell it aloud, on paper, or type it here.',
        learning
          ? ` It covers ${(s.lives[life]?.lastLesson ?? -1) + 1} of ${lifeOf(life).lessons.length} lessons.`
          : ''
      ),
      h(
        'p',
        null,
        'For each decision, say what it was and what ',
        nameSoFar(life, s),
        ' did. Add the claims you kept, the setbacks and your rules.',
        items.some(i => i.kind === 'claim' && claimVerdict(i) === 'contested')
          ? ' Say "contested" for a contested claim.'
          : '',
        ' ',
        'Leave out what your record does not hold.'
      ),
      learning &&
        h(
          'p',
          null,
          'You tell it right three times today. A telling with misses counts once you have told the missed items right again. Then the next lesson opens. You have told it right ',
          r.learning,
          ' of 3 times.'
        ),
      // The app never reads the telling: it is shown beside the record only when typed.
      h('label', { class: 'label', for: 'au-told' }, 'Your telling, if you type it'),
      h('textarea', {
        id: 'au-told',
        class: 'field',
        rows: '12',
        '.value': t.text,
        oninput: (/** @type {Event} */ e) => send({ t: 'tell-text', life, text: typed(e) })
      }),
      actions(
        choice({
          primary: true,
          label: 'Show the record',
          onPress: () => {
            send({ t: 'tell-show', life })
            // Every item is marked Wrong or Right: focus goes to the heading, never to a mark, so
            // no Enter marks by habit.
            this.focusHead()
          }
        })
      )
    ])
  }

  /**
   * Each item judged against what was told; after a miss, only the wrong ones come back.
   * @param {import('../core/decode.logic.js').Telling} t
   */
  #judge(t) {
    const life = this.life
    const items = recallItems(record(), life)
    const retry = t.phase === 'retry'
    const shownItems = retry ? items.filter(i => t.retry?.includes(i.id)) : items
    const firstUnmarked = shownItems.findIndex(i => t.marks[i.id] === undefined)
    const told = !retry && t.text.trim()
    return step([
      h(
        'h3',
        { tabindex: '-1' },
        retry ? 'Tell again only the items marked wrong' : 'Check it against the record'
      ),
      retry
        ? h(
            'p',
            null,
            'For each item, tell it from memory, aloud or on paper, then show it and mark it.'
          )
        : h(
            'p',
            null,
            'Compare your telling with each item of your record. Mark Right where you said the same thing in your own words. Mark Wrong where you left it out or said something else.'
          ),
      // Every item on one list; the telling stays in view beside it, or above it on a narrow screen.
      h(
        'div',
        { class: told ? 'lrn-bio-cols' : undefined },
        told &&
          h(
            'div',
            {
              class: 'lrn-bio-told-col',
              role: 'region',
              'aria-labelledby': 'au-told-name',
              tabindex: '0'
            },
            h('p', { class: 'lrn-ss-note', id: 'au-told-name' }, 'What you told'),
            h('p', { class: 'lrn-bio-told' }, t.text)
          ),
        h(
          'ol',
          { class: 'lrn-bio-items' },
          shownItems.map(i => this.#item(t, i, retry))
        )
      ),
      actions(
        choice({
          key: 'next',
          primary: true,
          disabled: firstUnmarked >= 0,
          why: `Mark every item, from item ${firstUnmarked + 1}.`,
          label: 'Done',
          onPress: () => send({ t: retry ? 'retry-done' : 'judge', life })
        })
      )
    ])
  }

  /**
   * One item of the record to mark; told again, it stays covered until the learner has told it
   * and asks to see it.
   * @param {import('../core/decode.logic.js').Telling} t
   * @param {Told} i
   * @param {boolean} retry
   */
  #item(t, i, retry) {
    const life = this.life
    const c = counts(i, life)
    if (retry && !t.shown?.includes(i.id))
      return h(
        'li',
        { key: i.id },
        h('p', { class: 'lrn-ss-note' }, c.what),
        actions(
          choice({
            label: ['Show the item', h('span', { class: 'sr-only' }, ': ', c.what)],
            onPress: () => {
              send({ t: 'retry-show', life, item: i.id })
              this.focusSoon(`#au-said-${CSS.escape(i.id)}`)
            }
          })
        )
      )
    const marks = mark({
      when: c.by,
      name: `mark-${i.id}`,
      labelledBy: `au-said-${i.id} au-say-${i.id}`,
      value: t.marks[i.id] ?? null,
      onChange: right => send({ t: 'mark', life, item: i.id, right })
    })
    return h(
      'li',
      { key: i.id },
      h('p', { class: 'lrn-ss-note', id: `au-said-${i.id}`, tabindex: '-1' }, c.what),
      c.say.map(([field, text], k) =>
        h(
          'p',
          { key: field, class: 'lrn-bio-say', id: k ? undefined : `au-say-${i.id}` },
          field,
          ': ',
          text
        )
      ),
      marks
    )
  }
}
customElements.define('augustus-recall', AugustusRecall)
