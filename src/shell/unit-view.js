// Hides: what a unit page and the explore page work out from a unit's rows and its dated list,
// the same for every unit: what waits today (the explore card), the way on (the Continue card),
// and why a row not reached opens nothing. Pure functions of plain data, tested in
// tests/unit-view.test.mjs. Each unit's own logic stays in its unit
// contract: this reads only what it gives (`rows`, `dated`).
import { pageBySlug } from './registry.js'
import { datedView, waiting } from '../kernel/days.logic.js'

/**
 * What of a unit's dated list waits today, for its explore card: the page it opens on, by its
 * title, and how much waits on that page ("3 due, 4 new"). Null when nothing waits.
 * @param {import('../kernel/days.logic.js').DatedGroup[]} groups
 * @param {string} today
 * @returns {{ to: string, title: string, lang: string | undefined, waits: string } | null}
 */
export function dueToday(groups, today) {
  const { rows, first } = datedView(groups, today)
  if (!first) return null
  const page = (/** @type {string | undefined} */ to) => to?.split(/[?#]/)[0]
  // Only what waits on the page it opens: the rest of the unit waits on pages of its own.
  const here = rows.filter(r => page(r.to) === page(first))
  const slug = page(first)?.replace(/^\//, '') ?? ''
  const title = pageBySlug[slug]?.title ?? ''
  const count = (/** @type {'due' | 'fresh'} */ k) => here.reduce((n, r) => n + r[k], 0)
  return { to: first, title, lang: undefined, waits: waiting(count('due'), count('fresh')) }
}

/**
 * The way on, for the Continue card: the work that waits today, where the unit's dated list puts
 * it, else the first row in reading order that opens and is not done. Pages done every session
 * (`repeats`) are left out of the second: what they hold today is on the dated list. A row that
 * ends a section (a level test) counts once the section's own rows are done. A kind held
 * (`hold`: mixed practice until a part of the open topic is taken today) waits for the first row,
 * which is the open topic. Null once nothing is left.
 * @param {{
 *   rows: import('../kernel/pages.logic.js').Rows,
 *   sections: readonly { first: number, last: number }[],
 *   groups: import('../kernel/days.logic.js').DatedGroup[],
 *   today: string,
 *   repeats?: (key: string | number) => boolean
 * }} unit
 * @returns {{ to: string, title: string, lang: string | undefined, waits: string } | null}
 */
export function nextWork({ rows, sections, groups, today, repeats = () => false }) {
  const due = dueToday(
    groups.filter(g => !g.hold),
    today
  )
  if (due) return due
  const { top, items, after = [], ends = {} } = rows
  const ordered = [
    ...top.filter(it => !repeats(it.key)),
    ...sections.flatMap((s, i) => {
      const held = items.slice(s.first - 1, s.last)
      return held.every(it => it.done) ? [...held, ...(ends[i] ?? [])] : held
    }),
    ...after
  ]
  const row = ordered.find(it => it.to && !it.done)
  if (row?.to) return { to: row.to, title: row.title, lang: row.lang, waits: '' }
  return dueToday(groups, today)
}

/**
 * A unit's way on, as its unit page's Continue card names it, for a card that shows it elsewhere
 * (the explore page): read from the unit's own rows and dated list.
 * @template R
 * @param {{
 *   rows: (r: R) => import('../kernel/pages.logic.js').Rows,
 *   dated: (r: R, today: string) => import('../kernel/days.logic.js').DatedGroup[]
 * }} view
 * @param {{ sections?: readonly { first: number, last: number }[], pages: readonly { slug: string, repeats?: boolean }[] }} unit
 * @param {R} records
 * @param {string} today
 */
export function continueOf(view, unit, records, today) {
  const rows = view.rows(records)
  return nextWork({
    rows,
    sections: rows.sections ?? unit.sections ?? [],
    groups: view.dated(records, today),
    today,
    repeats: key => unit.pages.some(p => p.slug === key && p.repeats)
  })
}

/**
 * Why a row opens nothing, shown on it and read with it: the unit's own reason where it gives
 * one, else the row it opens after, by number. `before` is the number of the row before it in
 * the unit's order (0 for the first). A row done, or one that opens, needs none.
 * @param {import('../kernel/pages.logic.js').Item} item
 * @param {number} before
 */
export function lockNote(item, before) {
  if (item.to || item.done) return ''
  if (item.opens) return item.opens
  return before > 0 ? `Opens after ${before}` : 'Opens later'
}
