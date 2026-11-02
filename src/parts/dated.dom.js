// Hides: where a study page finds its unit's dated list and the records it reads. The shell's page
// loader provides them (`provideDated`), so the study
// layer never reaches up into the shell. A Review page's table, and at the foot of a page done
// every session, the rest of Review.
import { pageAt } from './page-index.dom.js'
import { reviewRows, waiting } from '../kernel/days.logic.js'
import { linkTo } from './links.dom.js'
import { h } from './view.dom.js'

/** @typedef {(records: import('../kernel/pages.logic.js').UnitRecords, today: string) => import('../kernel/days.logic.js').DatedGroup[]} Dated */

/**
 * What the shell provides: each unit's dated list by the unit's slug, every unit's record as it
 * stands, and a way to redraw a screen on any change to them.
 * @typedef {{
 *   datedOf: (unitSlug: string) => Dated,
 *   records: () => import('../kernel/pages.logic.js').UnitRecords,
 *   watch: (screen: import('./view.dom.js').Screen) => void
 * }} DatedSource
 */

/** @type {DatedSource | null} */
let source = null

/**
 * Provide the dated lists and the records (the shell's page loader, once).
 * @param {DatedSource} given
 */
export function provideDated(given) {
  source = given
}

function provided() {
  if (!source) throw new Error('No dated list is provided: the shell provides it (provideDated).')
  return source
}

/** Every unit's record as it stands. */
export const datedRecords = () => provided().records()

/**
 * Redraw `screen` on any change to a unit's record.
 * @param {import('./view.dom.js').Screen} screen
 */
export const watchDated = screen => provided().watch(screen)

/**
 * The pages a unit does every session, as the Review page lists them, for the page at `slug`.
 * @param {string} slug
 */
function pagesOf(slug) {
  const page = pageAt(slug)
  const u = page?.unit
  return {
    here: page && `/${page.slug}`,
    review: u && `/${u.slug}/review`,
    pages: u
      ? u.pages.filter(p => p.repeats).map(p => ({ title: p.title, to: `/${u.slug}/${p.slug}` }))
      : []
  }
}

/**
 * A Review page's one section, from a unit's dated list (its unit.js `dated`): a row for each
 * page done every session, then one for each kind of item answered elsewhere, with what waits
 * today at its end, due and new, as a deck list shows its decks, or where the kind is kept when
 * it is kept elsewhere. A page's row always opens it; a kind's row opens the page it is answered
 * on once something waits. The table is read on the study day `today`, so a page left open turns
 * with the day at 04:00.
 * @param {import('../kernel/days.logic.js').DatedGroup[]} groups
 * @param {string} slug the Review page's slug
 * @param {string} today
 */
export function datedSections(groups, slug, today) {
  const rows = reviewRows(groups, today, pagesOf(slug).pages)
  return [
    {
      id: 'rv-due',
      title: 'Today',
      content: h(
        'table',
        { class: 'lrn-rv' },
        h(
          'thead',
          null,
          h('tr', null, h('th', { scope: 'col' }, 'Item'), h('th', { scope: 'col' }, 'Today'))
        ),
        h(
          'tbody',
          null,
          rows.map(g =>
            h(
              'tr',
              { key: g.key, class: g.to ? undefined : 'lrn-rv-none' },
              h('th', { scope: 'row' }, g.to ? h('a', { href: linkTo(g.to) }, g.name) : g.name),
              h('td', null, g.away ?? (waiting(g.due, g.fresh) || 0))
            )
          )
        )
      )
    }
  ]
}

/**
 * At the foot of a page done every session: the rest of Review, each of the unit's other such
 * pages a link, and each kind answered elsewhere that waits today, with what waits beside it.
 * It is the way from one such page to the next without going back to the unit page.
 * @param {string} slug the page's slug
 * @param {string} today
 */
export function alsoToday(slug, today) {
  const page = pageAt(slug)
  if (!page || !source) return null
  const dated = source.datedOf(page.unit.slug)
  const { here, review, pages } = pagesOf(slug)
  /** @type {{ key: string, name: string, to: string, due: number, fresh: number, n: number }[]} */
  const rest = []
  // A kind kept in many places (proofs, topic by topic) is one link to Review with its sum, so
  // the foot stays one short line however long the course.
  for (const g of reviewRows(dated(source.records(), today), today, pages)) {
    if (!g.to || g.to === here) continue
    const same = g.kind && rest.find(x => x.key === g.kind)
    if (same) Object.assign(same, { due: same.due + g.due, fresh: same.fresh + g.fresh, n: same.n + g.n })
    else if (g.kind) rest.push({ key: g.kind, name: g.kind, to: review ?? '/', due: g.due, fresh: g.fresh, n: g.n })
    else rest.push({ key: String(g.key), name: g.name, to: String(g.to), due: g.due, fresh: g.fresh, n: g.n })
  }
  return h(
    'p',
    { class: 'lrn-section lrn-ss-note' },
    h('a', { href: linkTo(review ?? '/') }, 'Review'),
    rest.map((g, i) =>
      h(
        'span',
        { key: g.key },
        i > 0 ? '; ' : ': ',
        h(
          'a',
          { href: linkTo(String(g.to)) },
          g.name,
          g.n ? `, ${waiting(g.due, g.fresh)}` : ''
        )
      )
    ),
    '.'
  )
}
