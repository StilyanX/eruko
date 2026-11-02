// Hides: the explore page: the title, the disciplines to pick one, a search over the units, and
// the units under their disciplines, each a card with where the learner stands in it and what
// waits today. From 80em the disciplines stand in the rail. What was typed is kept in the history
// entry, so Back from a unit returns to what was found.
import { DISCIPLINES, UNITS, cardLine } from './registry.js'
import { finds } from './find.logic.js'
import { continueOf } from './unit-view.js'
import { clock, today } from '../parts/clock.dom.js'
import { Screen, h } from '../parts/view.dom.js'
import { recordsNow, watchRecords } from './records.js'
import { entryState, keepInEntry, linkTo } from './router.js'
import { searchField } from './search-field.element.js'
import { setTitle } from './title.js'
import { viewOf } from './views.js'

/**
 * A unit's way on, on its card: the link its unit page's Continue card opens ("Continue to Number
 * facts: 4 new today"), so the learner starts every unit's day without opening each unit page.
 * @param {ReturnType<typeof continueOf>} due
 */
const todayLine = due =>
  h(
    'p',
    { class: 'ep-card-today' },
    due
      ? h(
          'a',
          { href: linkTo(due.to) },
          // One child, so the link's flex box keeps the space after "to".
          h(
            'span',
            {},
            'Continue to ',
            h('span', { lang: due.lang }, due.title),
            due.waits && `: ${due.waits} today`
          )
        )
      : 'Nothing due today.'
  )

/**
 * The disciplines to pick one, in the rail from 80em.
 * @param {import('../kernel/pages.logic.js').Discipline | null} active
 */
const disciplineNav = active =>
  h(
    'nav',
    { class: 'ep-sidebar', 'aria-label': 'Disciplines' },
    h(
      'ul',
      null,
      [{ id: 'all', name: 'All units' }, ...DISCIPLINES].map(d => {
        const on = d.id === 'all' ? !active : active?.id === d.id
        return h(
          'li',
          { key: d.id },
          h(
            'a',
            {
              href: linkTo(d.id === 'all' ? '/' : `/explore/${d.id}`),
              class: 'ep-nav-item',
              'aria-current': on ? 'page' : undefined
            },
            d.name
          )
        )
      })
    )
  )

/**
 * One discipline's units, each a card.
 * @param {import('../kernel/pages.logic.js').Discipline & { units: import('../kernel/pages.logic.js').Unit[] }} section
 * @param {import('../kernel/pages.logic.js').Discipline | null} active
 * @param {import('../kernel/pages.logic.js').UnitRecords} records
 * @param {string} day
 */
const unitSection = (section, active, records, day) =>
  h(
    'section',
    { class: 'ep-section', key: section.id, 'aria-labelledby': `ep-${section.id}` },
    // One discipline shown: its name is already the page title.
    h(
      'h2',
      { id: `ep-${section.id}`, class: active ? 'sr-only' : 'ep-section-name' },
      section.name
    ),
    h(
      'ul',
      { class: 'ep-cards' },
      section.units.map(unit =>
        h(
          'li',
          { key: unit.slug, class: 'ep-card' },
          h(
            'h3',
            { class: 'ep-card-title' },
            h('a', { href: linkTo(`/${unit.slug}`) }, unit.title)
          ),
          h('p', { class: 'ep-card-desc' }, cardLine(unit)),
          h('p', { class: 'ep-card-state' }, viewOf(unit.slug).place(records)),
          todayLine(continueOf(viewOf(unit.slug), unit, records, day))
        )
      )
    )
  )

export class ShellExplore extends Screen {
  /** The discipline shown, or '' for all. */
  filter = ''
  query = ''

  setup() {
    const kept = entryState().query
    this.query = typeof kept === 'string' ? kept : ''
    watchRecords(this)
    this.watch(clock)
  }

  /** @param {string} text */
  type(text) {
    this.query = text
    keepInEntry({ query: text })
    this.update()
  }

  view() {
    const active = DISCIPLINES.find(d => d.id === this.filter) ?? null
    setTitle(active ? active.name : 'Units')
    const records = recordsNow()
    const day = today()
    const query = this.query
    const typed = query.trim() !== ''
    const sections = (active ? [active] : DISCIPLINES)
      .map(d => ({
        ...d,
        units: UNITS.filter(
          u => u.discipline.id === d.id && (!typed || finds(query, `${u.title} ${u.description}`))
        )
      }))
      .filter(s => s.units.length)
    const shown = sections.reduce((n, s) => n + s.units.length, 0)
    return h(
      'main',
      { id: 'main', tabindex: '-1', class: 'page' },
      h('h1', { class: 'page-title ep-title' }, active ? active.name : 'Units'),
      disciplineNav(active),
      h(
        'div',
        { class: 'page-col' },
        searchField({
          id: 'ep-search',
          label: 'Search the units',
          value: query,
          found: shown,
          where: active ? `in ${active.name}` : '',
          onChange: text => this.type(text)
        }),
        sections.map(section => unitSection(section, active, records, day))
      )
    )
  }
}
customElements.define('shell-explore', ShellExplore)
