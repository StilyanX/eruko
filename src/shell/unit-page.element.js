// Hides: a unit's page, the same for every unit: the title, where the learner stands, Continue
// (the way on), Review and Start as cards, always in that order, then Contents and the sources.
// Contents holds a field that finds a row by a word, and one list of the course in named sections,
// each opening in place on its rows. What the learner opened and typed is kept in the history
// entry, so Back from a row, or a reload, returns to the list as it was left.
import { unitBySlug } from './registry.js'
import { finds } from './find.logic.js'
import { datedView, dayName, waiting } from '../kernel/days.logic.js'
import { lockNote, nextWork } from './unit-view.js'
import { clock, today } from '../parts/clock.dom.js'
import { Screen, h } from '../parts/view.dom.js'
import { recordsNow, watchRecords } from './records.js'
import { entryState, keepInEntry, linkTo } from './router.js'
import { searchField } from './search-field.element.js'
import { setTitle } from './title.js'
import { viewOf } from './views.js'
import { failure } from './failure.element.js'

/**
 * One row: its number where it has one, the title, and at its end where it stands: what waits on
 * its page today ("149 due"), else the unit's own word for it ("3 of 11 passed"), else Done once
 * done; a link where it has a page. A row that opens nothing says why under its
 * title ("Opens after 3"), in words read with it.
 * @param {import('../kernel/pages.logic.js').Item} item
 * @param {number | null | undefined} n
 * @param {number} [before] the number of the row before it in the unit's order
 */
function row(item, n, before = n ? n - 1 : 0) {
  const state = item.state ?? (item.done ? 'Done' : '')
  const locked = lockNote(item, before)
  const inner = [
    n !== undefined && n !== null && h('span', { class: 'hm-num' }, n),
    n === null && h('span', { class: 'hm-num' }),
    h(
      'span',
      { class: 'hm-row-title', lang: item.lang },
      item.title,
      // The space keeps the two lines apart when they are read as one name.
      locked && h('span', { class: 'hm-row-note', lang: 'en' }, ` ${locked}`)
    ),
    state && h('span', { class: 'hm-state' }, state)
  ]
  return h(
    'li',
    { key: item.key },
    item.to
      ? h('a', { class: 'hm-row', href: linkTo(item.to) }, inner)
      : h('div', { class: 'hm-row hm-still' }, inner)
  )
}

/**
 * Rows numbered from `first`, in one list, then any `tail` rows, unnumbered. Unnumbered rows open
 * after row `before`; a tail opens after the last numbered row.
 * @param {readonly import('../kernel/pages.logic.js').Item[]} items
 * @param {number} [first]
 * @param {readonly import('../kernel/pages.logic.js').Item[]} [tail]
 * @param {number} [before]
 */
const rows = (items, first, tail = [], before = 0) =>
  h(
    'ul',
    { class: first ? 'hm-rows hm-numbered' : 'hm-rows' },
    items.map((it, i) => row(it, first ? first + i : undefined, first ? undefined : before)),
    tail.map(it => row(it, first ? null : undefined, first ? first + items.length - 1 : before))
  )

/**
 * How much of a section is done, in words: Done, a count, or nothing yet.
 * @param {readonly import('../kernel/pages.logic.js').Item[]} held
 */
function sectionState(held) {
  const done = held.filter(i => i.done).length
  if (done === held.length) return 'Done'
  return done ? `${done} of ${held.length} done` : null
}

/**
 * What the history entry kept of this page: the sections opened and the search typed, each only
 * when it is of its kind.
 * @param {unknown} kept
 * @returns {{ opened?: number[], query?: string } | null}
 */
function keptState(kept) {
  if (typeof kept !== 'object' || kept === null) return null
  const opened = 'opened' in kept && Array.isArray(kept.opened) ? kept.opened : undefined
  const query = 'query' in kept && typeof kept.query === 'string' ? kept.query : undefined
  return {
    ...(opened ? { opened: opened.filter(n => typeof n === 'number') } : {}),
    ...(query === undefined ? {} : { query })
  }
}

/**
 * What a search of the unit finds: the pages by title (those ahead of the course, then those
 * after it), the sections by name, and each section's rows by title, with how many in all.
 * @param {string} query
 * @param {import('../kernel/pages.logic.js').Rows & { sections: readonly import('../kernel/pages.logic.js').Section[] }} all
 */
function searchHits(query, all) {
  const { start, top, items, after = [], sections } = all
  const hitPages = [start, ...top].filter(p => finds(query, p.title))
  const hitAfter = after.filter(p => finds(query, p.title))
  const named = sections.map((s, i) => ({ s, i })).filter(({ s }) => finds(query, s.title))
  const groups = sections
    .map(s => ({
      s,
      hits: items
        .map((it, i) => ({ it, n: i + 1 }))
        .slice(s.first - 1, s.last)
        .filter(({ it }) => finds(query, it.title))
    }))
    .filter(g => g.hits.length)
  const total =
    hitPages.length + hitAfter.length + named.length + groups.reduce((n, g) => n + g.hits.length, 0)
  return { hitPages, hitAfter, named, groups, total }
}

/**
 * The unit's sources, at the foot of its page.
 * @param {import('../kernel/pages.logic.js').Unit} unit
 */
const sourceList = unit => [
  h('h2', { class: 'hm-sources-label' }, 'Sources'),
  h(
    'ul',
    { class: 'hm-sources' },
    unit.sources.map(s =>
      h('li', { key: s.title }, s.title, s.author && h('span', { class: 'hm-source-by' }, s.author))
    )
  )
]

export class ShellUnitPage extends Screen {
  slug = ''
  query = ''
  /** @type {Set<number>} */
  opened = new Set()

  setup() {
    watchRecords(this)
    this.watch(clock)
    this.reread()
  }

  /** Read the address and the history entry again: a new ?part, or a Back to this page. */
  reread() {
    const unit = unitBySlug[this.slug]
    if (!unit) return
    const left = keptState(entryState().unitPage)
    const part = Number(new URL(location.href).searchParams.get('part'))
    const { sections, items } = this.#rows()
    // With no ?part, the page opens on the section that holds the first row not yet done, so the
    // way on is in view without a search through closed sections.
    const ahead = sections.findIndex(s => items.slice(s.first - 1, s.last).some(i => !i.done))
    this.opened = new Set(left?.opened ?? (part >= 1 ? [part - 1] : ahead >= 0 ? [ahead] : []))
    this.query = left?.query ?? ''
    this.update()
  }

  #rows() {
    const unit = unitBySlug[this.slug]
    const r = viewOf(this.slug).rows(recordsNow())
    // A unit whose course grows with the learner's record (Go) gives its sections with its rows.
    return { ...r, sections: r.sections ?? unit?.sections ?? [] }
  }

  #keep() {
    keepInEntry({ unitPage: { opened: [...this.opened], query: this.query } })
  }

  /** @param {number} i */
  toggle(i) {
    if (this.opened.has(i)) this.opened.delete(i)
    else this.opened.add(i)
    this.#keep()
    this.update()
  }

  /**
   * A section found by its name: back to the full list with that section open, in view.
   * @param {number} i
   */
  openFound(i) {
    this.opened.add(i)
    this.query = ''
    this.#keep()
    this.update()
    requestAnimationFrame(() =>
      document.getElementById(`hm-part-${i + 1}-row`)?.scrollIntoView({ block: 'start' })
    )
  }

  /**
   * A unit's sections, each a row that opens in place on its items and closes again.
   * @param {readonly import('../kernel/pages.logic.js').Section[]} sections
   * @param {readonly import('../kernel/pages.logic.js').Item[]} items
   * @param {Record<number, readonly import('../kernel/pages.logic.js').Item[]>} ends
   * @param {Set<number>} opened
   * @param {(i: number) => void} toggle
   * @param {number[]} [at] each section's place among all the unit's sections
   */
  sections(sections, items, ends, opened, toggle, at) {
    const place = at ?? sections.map((_, i) => i)
    return h(
      'ol',
      { class: 'hm-rows' },
      sections.map((s, i) => {
        const p = place[i] ?? i
        const held = items.slice(s.first - 1, s.last)
        const tail = ends[p] ?? []
        const state = sectionState([...held, ...tail])
        const open = opened.has(p)
        const id = `hm-part-${p + 1}`
        // A section that opens a part of the course comes under the part's title.
        const heads = s.part !== undefined && s.part !== sections[i - 1]?.part
        return h(
          'li',
          { key: s.title, id: `${id}-row` },
          heads && h('h3', { class: 'hm-part-title' }, s.part),
          h(
            'button',
            {
              type: 'button',
              class: 'hm-row hm-section',
              'aria-expanded': String(open),
              'aria-controls': id,
              onclick: () => toggle(p)
            },
            h('span', { class: 'hm-row-title' }, s.title),
            state && h('span', { class: 'hm-state' }, state)
          ),
          h(
            'div',
            { class: 'hm-section-open', id, inert: !open },
            h('div', { class: 'hm-section-inner' }, rows(held, s.first, tail))
          )
        )
      })
    )
  }

  /**
   * The cards at the head of the page, the same in every unit and at every point of it: Continue
   * (the way on: the work due today, else the next row that opens, else Nothing left and the day
   * something comes back), Review (what comes back today) and Start. The way on is the first.
   * @param {import('../kernel/pages.logic.js').Unit} unit
   * @param {import('../kernel/pages.logic.js').Rows & { sections: readonly import('../kernel/pages.logic.js').Section[] }} all
   * @param {import('../kernel/days.logic.js').DatedGroup[]} dated
   * @param {string} day
   */
  #cards(unit, all, dated, day) {
    const { start, sections } = all
    const { dueCount, freshCount, rows: kinds } = datedView(dated, day)
    /** @param {string | number} key */
    const repeats = key => unit.pages.some(p => p.slug === key && p.repeats)
    const next = nextWork({ rows: all, sections, groups: dated, today: day, repeats })
    const back = dated
      .flatMap(g => g.dates)
      .filter(d => d > day)
      .sort()[0]
    return [
      // With nothing to go on to, the card stays in its place and says so, so the cards never move.
      next
        ? h(
            'a',
            { class: 'hm-start', href: linkTo(next.to) },
            h('span', { class: 'hm-start-title' }, 'Continue'),
            h(
              'span',
              { class: 'hm-start-note' },
              h('span', { lang: next.lang }, next.title),
              next.waits && `: ${next.waits} today`
            )
          )
        : h(
            'div',
            { class: 'hm-start' },
            h('span', { class: 'hm-start-title' }, 'Continue'),
            h(
              'span',
              { class: 'hm-start-note' },
              'Nothing left.',
              back && ` The next item comes back on ${dayName(back)}.`
            )
          ),
      h(
        'a',
        { class: 'hm-start', href: linkTo(`/${unit.slug}/review`) },
        h('span', { class: 'hm-start-title' }, 'Review'),
        h(
          'span',
          { class: 'hm-start-note' },
          dueCount + freshCount
            ? `${waiting(dueCount, freshCount)} today.`
            : kinds.some(k => k.away === 'In Anki')
              ? 'You recall your word cards in Anki.'
              : 'Nothing due today.'
        )
      ),
      h(
        'a',
        { class: 'hm-start', href: linkTo(start.to ?? `/${unit.slug}/start`) },
        h('span', { class: 'hm-start-title' }, start.title),
        h('span', { class: 'hm-start-note' }, 'What you need before the first session.')
      )
    ]
  }

  /**
   * What a search found, in place of the list.
   * @param {ReturnType<typeof searchHits>} found
   * @param {import('../kernel/pages.logic.js').Rows & { sections: readonly import('../kernel/pages.logic.js').Section[] }} all
   */
  #found({ hitPages, hitAfter, named, groups }, all) {
    return [
      hitPages.length > 0 && rows(hitPages),
      // A page after the course, found, says the row it opens after, as in the list.
      hitAfter.length > 0 && rows(hitAfter, undefined, [], all.items.length),
      named.length > 0 &&
        this.sections(
          named.map(n => n.s),
          all.items,
          all.ends ?? {},
          new Set(),
          i => this.openFound(i),
          named.map(n => n.i)
        ),
      groups.map(({ s, hits }) =>
        h(
          'div',
          { key: s.title },
          h('h3', { class: 'hm-found-title' }, s.title),
          h(
            'ul',
            { class: 'hm-rows hm-numbered' },
            hits.map(({ it, n }) => row(it, n))
          )
        )
      )
    ]
  }

  /**
   * Contents: a field that finds a row by a word, then the pages ahead of the course (those done
   * every session and a language's "now" page), the course in its sections and the rows after it.
   * @param {import('../kernel/pages.logic.js').Rows & { sections: readonly import('../kernel/pages.logic.js').Section[] }} all
   */
  #contents(all) {
    const { top, items, after = [], ends = {}, sections } = all
    const query = this.query
    const found = query.trim() === '' ? null : searchHits(query, all)
    return h(
      'section',
      { class: 'hm-block', 'aria-labelledby': 'hm-course' },
      h('h2', { class: 'hm-block-label', id: 'hm-course' }, 'Contents'),
      searchField({
        id: 'hm-find',
        label: 'Search this unit',
        value: query,
        found: found?.total ?? 0,
        onChange: text => {
          this.query = text
          this.#keep()
          this.update()
        }
      }),
      found
        ? this.#found(found, all)
        : [
            top.length > 0 && rows(top),
            this.sections(sections, items, ends, this.opened, i => this.toggle(i)),
            after.length > 0 && rows(after, undefined, [], items.length)
          ]
    )
  }

  view() {
    const unit = unitBySlug[this.slug]
    if (!unit)
      return h('div', { ref: (/** @type {Element} */ el) => el.replaceWith(failure('not-found')) })
    setTitle(unit.title)
    const view = viewOf(this.slug)
    const records = recordsNow()
    const rowsNow = this.#rows()
    const day = today()
    const dated = view.dated(records, day)
    // The rows done every session and the rows after the course carry what waits on their page
    // today, unless the unit gives its own word for where the row stands.
    const { rows: kinds } = datedView(dated, day)
    const path = (/** @type {string | undefined} */ to) => to?.split(/[?#]/)[0]
    /** @param {import('../kernel/pages.logic.js').Item} it */
    const withWaits = it => {
      if (it.state) return it
      const on = kinds.filter(k => !k.away && path(k.to) === path(it.to))
      const waits = waiting(
        on.reduce((n, k) => n + k.due, 0),
        on.reduce((n, k) => n + k.fresh, 0)
      )
      return waits ? { ...it, state: waits } : it
    }
    const all = {
      ...rowsNow,
      top: rowsNow.top.map(withWaits),
      ...(rowsNow.after ? { after: rowsNow.after.map(withWaits) } : {})
    }
    const place = view.place(records)
    return h(
      'main',
      { id: 'main', tabindex: '-1', class: 'page' },
      h(
        'div',
        { class: 'page-col' },
        h('h1', { class: 'page-title hm-title' }, unit.title),
        place && h('p', { class: 'hm-place' }, place),
        h(
          'nav',
          { class: 'hm-list', 'aria-label': `${unit.title}: pages` },
          this.#cards(unit, all, dated, day),
          all.sections.length > 0 && this.#contents(all)
        ),
        sourceList(unit)
      )
    )
  }
}
customElements.define('shell-unit-page', ShellUnitPage)
