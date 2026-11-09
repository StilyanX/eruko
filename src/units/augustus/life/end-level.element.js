// Hides: the end level's round on the life's page: drawn when it opens (session.logic.js), then
// one screen per part, Gaps, Witnesses, Footing and the Reading, the Reading one passage to a
// screen, paged, each passage followed by the list of sentences to choose from; Done after the last;
// then, on the day it was done, the key of every Gaps, Witnesses and Footing entry and the
// round's line. What is typed and chosen is kept in the record as it is (the round's `answers`),
// so a reload lands on the same screen with nothing lost.
import { dayName } from '../../../kernel/days.logic.js'
import { today } from '../../../parts/clock.dom.js'
import { choice, step, turn, verdict, whereIn } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { lifeId } from '../core/decode.logic.js'
import {
  FOOTINGS,
  WITNESSES,
  footingOf,
  gapsKey,
  listPages,
  markRound,
  passagePages,
  soleWitness,
  stem
} from '../core/end.logic.js'
import { ORIGINAL, endPools } from '../core/end-pools.logic.js'
import { record, send } from '../core/session.dom.js'
import { LifeScreen, lifeOf, typed } from '../core/screens.dom.js'

/** Footing's classes as the screen names them, with what each means. */
const CLASSES = {
  disputed: ['Disputed', "The main account's notes record a dispute over the sentence."],
  staked: [
    'Staked',
    'No dispute, and every part of the evidence names the Res Gestae, Velleius or Nicolaus.'
  ],
  unstaked: [
    'Unstaked',
    'No dispute, and a part of the evidence names Cassius Dio, Appian, Suetonius or Plutarch.'
  ]
}

/**
 * The round in hand: the end level it belongs to, the round, the life and the pools.
 * @typedef {{ end: import('../core/decode.logic.js').End, round: import('../core/decode.logic.js').Round,
 *   life: import('../core/decode.logic.js').Life, pools: import('../core/end.logic.js').Pools }} Now
 */

/**
 * A class as the screen names it, or "none".
 * @param {string | undefined} given
 */
const className = given => {
  const f = FOOTINGS.find(c => c === given)
  return f ? CLASSES[f][0] : 'none'
}

/** @param {boolean} ok */
const word = ok => (ok ? 'Right.' : 'Wrong.')

/**
 * A Footing entry after Done: the sentence, its class, the class chosen, and the mark.
 * @param {import('../core/end.logic.js').Pools} pools
 * @param {string} id
 * @param {string | undefined} given
 * @param {boolean} ok
 */
function footingKey(pools, id, given, ok) {
  const s = pools.byId.get(id)
  const f = s ? footingOf(s) : null
  return h(
    'div',
    { key: id, class: 'lrn-bio-entry' },
    h('p', null, s?.text),
    h(
      'p',
      { class: 'lrn-ss-note' },
      `Its footing: ${f ? CLASSES[f][0] : ''}. You chose ${className(given)}. ${word(ok)}`
    )
  )
}

/** "1st", "2nd", "3rd", "4th"… @param {number} n */
const nth = n => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`

/**
 * One screen of the Reading: a page of a passage, or a page of the list of sentences for it.
 * @typedef {{ passage: number, chapter: number, page: number, pages: number, text?: string,
 *   ids?: readonly string[] }} ReadingScreen
 */

export class AugustusEndLevel extends LifeScreen {
  /** The life's id. */
  life = lifeId('')

  setup() {
    super.setup()
    // Drawn on arrival when no round is open; a round open is kept as it stands.
    queueMicrotask(() => send({ t: 'end-open', life: this.life }))
  }

  /**
   * The round in the record, with the life it belongs to.
   * @returns {Now | null}
   */
  #now() {
    const end = record().lives[this.life]?.end
    const round = end?.round
    return round ? { end, round, life: lifeOf(this.life), pools: endPools() } : null
  }

  view() {
    const now = this.#now()
    if (!now) return null
    if (now.round.done) return now.round.done === today() ? this.#result(now) : null
    const reading = this.#readingScreens(now.round.draw)
    const count = 3 + reading.length
    const at = Math.min(now.round.part < 3 ? now.round.part : 3 + now.round.screen, count - 1)
    /** @param {number} n */
    const go = n => {
      send({ t: 'end-go', life: this.life, part: Math.min(n, 3), screen: Math.max(n - 3, 0) })
      this.focusHead()
    }
    const views = [() => this.#gaps(now), () => this.#witnesses(now), () => this.#footing(now)]
    return step([
      // a new heading for each part, so focus put on it after a turn is never the node that held it
      h('h3', { key: `head-${at}`, tabindex: '-1' }, 'The end level'),
      at < 3 ? views[at]?.() : this.#reading(now, reading, at - 3),
      turn({
        label: 'The parts of the round',
        at,
        count,
        onTurn: go,
        primary: true,
        last: choice({
          primary: true,
          label: 'Done',
          onPress: () => {
            send({ t: 'end-done', life: this.life })
            this.focusHead()
          }
        })
      })
    ])
  }

  /**
   * Gaps: the seven decisions as their stems, in no order, and the six years to type.
   * @param {Now} now
   */
  #gaps({ round, life }) {
    const typedNow = round.answers.gaps
    return [
      h('h4', null, 'Gaps'),
      h(
        'p',
        null,
        'Work out the order these seven decisions happened in. Type the years from each to the next, from the earliest to the latest. Count from the year of one to the year of the next. There is no year 0, so 12 BC to AD 4 is 15 years.'
      ),
      h(
        'ul',
        null,
        round.draw.gaps.map(i => h('li', { key: i }, stem(life.lessons[i]?.question?.text ?? '')))
      ),
      Array.from({ length: 6 }, (_, k) => [
        h(
          'label',
          { key: `l${k}`, class: 'label', for: `au-gap-${k}` },
          k === 0
            ? 'Years from the earliest to the 2nd'
            : `Years from the ${nth(k + 1)} to the ${k === 5 ? 'latest' : nth(k + 2)}`
        ),
        h('input', {
          key: `i${k}`,
          id: `au-gap-${k}`,
          class: 'field field-short',
          inputmode: 'numeric',
          '.value': typedNow[k] ?? '',
          oninput: (/** @type {Event} */ e) =>
            send({ t: 'end-gap', life: this.life, gap: k, text: typed(e) })
        })
      ])
    ]
  }

  /**
   * Witnesses: each sentence alone, in no order, and the witness to choose.
   * @param {Now} now
   */
  #witnesses({ round, pools }) {
    return [
      h('h4', null, 'Witnesses'),
      h('p', null, 'For each sentence, choose the witness the main account names as its evidence.'),
      round.draw.witnesses.map((id, k) =>
        h(
          'div',
          { key: id, class: 'lrn-bio-entry' },
          h('p', { id: `au-w-${k}` }, pools.byId.get(id)?.text),
          h('label', { class: 'label', for: `au-wit-${k}` }, 'The witness'),
          h(
            'select',
            {
              id: `au-wit-${k}`,
              class: 'field',
              'aria-describedby': `au-w-${k}`,
              '.value': round.answers.witnesses[id] ?? '',
              onchange: (/** @type {Event} */ e) =>
                e.target instanceof HTMLSelectElement &&
                send({ t: 'end-witness', life: this.life, sentence: id, witness: e.target.value })
            },
            h('option', { value: '' }, 'Choose a witness'),
            WITNESSES.map(w => h('option', { value: w, key: w }, w))
          )
        )
      )
    ]
  }

  /**
   * Footing: each sentence alone, in no order, and its class to choose.
   * @param {Now} now
   */
  #footing({ round, pools }) {
    return [
      h('h4', null, 'Footing'),
      h('p', null, 'For each sentence, choose its footing. Take the first that applies.'),
      h(
        'dl',
        null,
        FOOTINGS.map(f => [
          h('dt', { key: `t${f}` }, h('strong', null, CLASSES[f][0])),
          h('dd', { key: `d${f}` }, CLASSES[f][1])
        ])
      ),
      round.draw.footing.map(id =>
        h(
          'fieldset',
          { key: id, class: 'lrn-bio-entry' },
          h('legend', null, pools.byId.get(id)?.text),
          FOOTINGS.map(f =>
            h(
              'label',
              { key: f, class: 'radio' },
              h('input', {
                type: 'radio',
                name: `au-foot-${id}`,
                '.checked': round.answers.footing[id] === f,
                onchange: () =>
                  send({ t: 'end-footing', life: this.life, sentence: id, footing: f })
              }),
              CLASSES[f][0]
            )
          )
        )
      )
    ]
  }

  /**
   * The Reading's screens in order: for each passage, its pages, then the pages of the list of sentences.
   * @param {import('../core/decode.logic.js').Draw} draw
   * @returns {ReadingScreen[]}
   */
  #readingScreens(draw) {
    const pools = endPools()
    const list = draw.list.map(id => ({ id, text: pools.byId.get(id)?.text ?? '' }))
    const listed = listPages(list)
    return draw.chapters.flatMap((chapter, passage) => {
      const c = ORIGINAL.chapters.find(x => x.n === chapter)
      const latin = draw.latin.includes(chapter)
      const pages = passagePages((latin ? c?.latin : c?.greek) ?? '', !latin)
      return [
        ...pages.map((t, page) => ({ passage, chapter, page, pages: pages.length, text: t })),
        ...listed.map((ids, page) => ({ passage, chapter, page, pages: listed.length, ids }))
      ]
    })
  }

  /**
   * A screen of the Reading: a page of the passage, or a page of the list to choose from.
   * @param {Now} now
   * @param {readonly ReadingScreen[]} screens
   * @param {number} k
   */
  #reading({ round, pools }, screens, k) {
    const sc = screens[k]
    if (!sc) return null
    const passages = round.draw.chapters.length
    const head = [h('h4', null, 'Reading'), whereIn('Passage', sc.passage + 1, passages)]
    if (sc.text !== undefined)
      return [
        ...head,
        sc.page === 0 &&
          h('p', null, 'Read the passage with no dictionary, grammar or translation beside it.'),
        sc.pages > 1 && h('p', { class: 'lrn-ss-note' }, 'Page ', sc.page + 1, ' of ', sc.pages),
        h(
          'p',
          { class: 'lrn-bio-text', lang: round.draw.latin.includes(sc.chapter) ? 'la' : 'grc' },
          sc.text
        )
      ]
    const chosen = round.answers.reading
    return [
      ...head,
      h(
        'fieldset',
        { class: 'lrn-bio-entry' },
        h(
          'legend',
          { class: 'label' },
          'Choose the sentence whose evidence cites this passage.',
          sc.pages > 1 ? ` Page ${sc.page + 1} of ${sc.pages}.` : ''
        ),
        (sc.ids ?? []).map(id => {
          const other = round.draw.chapters.findIndex(
            (c, i) => i !== sc.passage && chosen[c] === id
          )
          return h(
            'label',
            { key: id, class: 'radio' },
            h('input', {
              type: 'radio',
              name: `au-read-${sc.passage}`,
              '.checked': chosen[sc.chapter] === id,
              onchange: () =>
                send({ t: 'end-reading', life: this.life, chapter: sc.chapter, sentence: id })
            }),
            pools.byId.get(id)?.text,
            other >= 0 && h('span', { class: 'lrn-ss-note' }, ` Chosen for passage ${other + 1}.`)
          )
        })
      )
    ]
  }

  /**
   * After Done: the key of every Gaps, Witnesses and Footing entry beside what was given, then
   * the round's line. A Reading entry shows no key and no mark.
   * @param {Now} now
   */
  #result({ end, round, life, pools }) {
    const marks = markRound(life, pools, round.draw, round.answers)
    const order = [...round.draw.gaps].sort((a, b) => a - b)
    const key = gapsKey(life, round.draw.gaps)
    const right = end.lines.at(-1)?.right === true
    const next = end.lines.at(-1)?.next
    return step([
      h('h3', { tabindex: '-1' }, 'The end level: the keys'),
      h('h4', null, 'Gaps'),
      h(
        'ol',
        null,
        order.map((i, k) =>
          h(
            'li',
            { key: i },
            stem(life.lessons[i]?.question?.text ?? ''),
            k < 6 &&
              h(
                'p',
                { class: 'lrn-ss-note' },
                `Then ${key[k]} years. You typed ${round.answers.gaps[k]?.trim() || 'nothing'}. ${word(marks.gaps[k] === true)}`
              )
          )
        )
      ),
      h('h4', null, 'Witnesses'),
      round.draw.witnesses.map((id, k) =>
        h(
          'div',
          { key: id, class: 'lrn-bio-entry' },
          h('p', null, pools.byId.get(id)?.text),
          h(
            'p',
            { class: 'lrn-ss-note' },
            `The main account names: ${soleWitness(pools.byId.get(id)?.evidence ?? '')}. You chose ${round.answers.witnesses[id] || 'none'}. ${word(marks.witnesses[k] === true)}`
          )
        )
      ),
      h('h4', null, 'Footing'),
      round.draw.footing.map((id, k) =>
        footingKey(pools, id, round.answers.footing[id], marks.footing[k] === true)
      ),
      h('h4', null, 'The round'),
      verdict(right, next ? `The round comes back on ${dayName(next)}.` : undefined)
    ])
  }
}
customElements.define('augustus-end-level', AugustusEndLevel)
