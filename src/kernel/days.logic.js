// Hides: study days and the dated list every unit shares: a line is { date, right, next } with ISO
// days 'YYYY-MM-DD'. Pure functions over plain data, tested in tests/study-days.test.mjs.
import { intervalDays } from './fsrs.logic.js'
import { assert } from './invariant.logic.js'

/**
 * One answer on a dated list: the study day it was given, whether it was right, and the day the
 * item next falls due.
 * @typedef {{ date: string, right: boolean, next: string }} Line
 */

/**
 * A kind of item in a unit's dated list, for `datedView`: its names for one and for many, the page
 * it is answered on, where it belongs when a kind has several pages, each item's next date, how
 * many items wait with no date yet, whether they are asked elsewhere, and each date's own place.
 * `name` is its Review row's name where the plain "Many: where" would not read plainly. `hold`
 * says the way on goes to the unit's open topic before this kind's page (`nextWork`).
 * @typedef {{
 *   one: string,
 *   many: string,
 *   name?: string,
 *   to?: string,
 *   tos?: string[],
 *   where?: string,
 *   away?: string,
 *   dates: string[],
 *   fresh?: number,
 *   hold?: boolean
 * }} DatedGroup
 */

/**
 * One row of `datedView`: a kind with its count due, its count new, and their sum.
 * @typedef {{
 *   one: string,
 *   many: string,
 *   name?: string,
 *   to?: string | undefined,
 *   where?: string,
 *   away?: string,
 *   due: number,
 *   fresh: number,
 *   n: number,
 *   oldest?: string | undefined
 * }} DatedRow
 */

/**
 * One row of the Review page. `to` is a place, or 0 when a kind has nothing waiting. `kind`
 * names a kind kept in several places (proofs, topic by topic), for a list that sums it.
 * @typedef {{
 *   key: string,
 *   name: string,
 *   to?: string | 0 | undefined,
 *   due: number,
 *   fresh: number,
 *   n: number,
 *   away?: string | undefined,
 *   kind?: string
 * }} ReviewRow
 */

/**
 * Local calendar day as 'YYYY-MM-DD'.
 * @param {Date} d
 */
function isoDay(d) {
  /** @param {number} n */
  const p = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

/**
 * The study day at `nowMs`: a day runs from 04:00 to 04:00, so a session after midnight belongs
 * to the day before.
 * @param {number} nowMs
 */
export const studyDay = nowMs => isoDay(new Date(nowMs - DAY_STARTS_MS))

// A study day starts at 04:00.
const DAY_STARTS_MS = 4 * 3600000

/**
 * Whole days from ISO day a to ISO day b.
 * @param {string} a
 * @param {string} b
 */
export function daysBetween(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86400000)
}

/**
 * ISO day n days after ISO day a.
 * @param {string} a
 * @param {number} n
 */
export function addDays(a, n) {
  const d = new Date(`${a}T12:00:00`)
  d.setDate(d.getDate() + n)
  return isoDay(d)
}

/** Desired retention: the share still recalled when an item falls due. */
export const RETENTION = {
  /** Problems, proofs and cards. */
  rebuildable: 0.9,
  /** Number facts and a life's tellings. */
  exact: 0.92
}

/**
 * The next date the gate sets. An item's first line gets the next day, right or wrong, and so
 * does a wrong answer. A right one comes back when FSRS-6 puts the chance of recall at
 * `retention`, from the item's own lines.
 * @param {readonly Line[] | undefined} lines
 * @param {boolean} right
 * @param {string} today
 * @param {number} [retention]
 */
export function nextDate(lines, right, today, retention = RETENTION.rebuildable) {
  const last = lines?.at(-1)
  if (!lines || !last || !right) return addDays(today, 1)
  const history = [...lines.map(l => ({ date: l.date, ok: l.right })), { date: today, ok: true }]
  const next = addDays(today, intervalDays(history, retention))
  assert(next > today, `an item answered on ${today} comes back after it, not on ${next}`)
  return next
}

/**
 * The line a gate writes, appended; one line a day, so a second answer the same day writes none.
 * The lines are given back as they came when nothing is written.
 * @template {readonly Line[]} L
 * @param {L | undefined} lines
 * @param {boolean} right
 * @param {string} today
 * @param {number} [retention]
 * @returns {L | Line[]}
 */
export function writeLine(lines, right, today, retention) {
  if (lines && lines.at(-1)?.date === today) return lines
  const before = lines ?? []
  const written = [
    ...before,
    { date: today, right, next: nextDate(before, right, today, retention) }
  ]
  assert(written.length === before.length + 1, 'a line written adds one line and keeps the rest')
  return written
}

/**
 * Today's line written again as `right`, from the lines before it: a mark pressed by mistake is
 * put right the same day. Lines with no line of today are left as they are.
 * @template {readonly Line[]} L
 * @param {L | undefined} lines
 * @param {boolean} right
 * @param {string} today
 * @param {number} [retention]
 * @returns {L | Line[] | undefined}
 */
export function changeLine(lines, right, today, retention) {
  if (!lines || lines.at(-1)?.date !== today) return lines
  return writeLine(lines.slice(0, -1), right, today, retention)
}

/**
 * @param {readonly Line[] | undefined} lines
 * @param {string} today
 */
export const isDue = (lines, today) => {
  const last = lines?.at(-1)
  return last !== undefined && last.next <= today
}

/**
 * An ISO day as the learner reads it: "3 Oct".
 * @param {string} iso
 */
export const dayName = iso =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })

/**
 * "1 card", "3 cards".
 * @param {number} n
 * @param {string} one
 * @param {string} many
 */
export const count = (n, one, many) => `${n} ${n === 1 ? one : many}`

/** @param {readonly Line[] | undefined} lines */
export const nextOf = lines => lines?.at(-1)?.next

/**
 * What of a unit's dated list waits today, for its Review card and page. `groups` is [{ one,
 * many, to, where?, dates, fresh? }]: a kind of item by its name for one and for many, the page
 * it is answered on, where it belongs when a kind has several pages, each item's next date, and
 * `fresh`, how many items of the kind wait today with no date yet (a new problem of a kind
 * solved alone). Returns one row per kind with its count due, `due`, its count new, `fresh`,
 * and their sum, `n`, a kind with nothing waiting included; a kind with several pages gives a
 * row for each page with something waiting, or one row at 0. `dueCount` and `freshCount` are
 * every item due and every item new. `first` is the place the Review card opens: the page of
 * the item due longest, or with nothing due the first page with something new. No later date
 * is shown: an answer moves it. A group's `away` ("In Anki") says its items are asked elsewhere;
 * it stays on its row. A group's `tos`, one for each of its dates, are the items' own places on
 * its page; its row then opens on the item due longest.
 * @param {DatedGroup[]} groups
 * @param {string} today
 */
export function datedView(groups, today) {
  const counted = groups.map(g => {
    const due = g.dates.map((d, i) => /** @type {const} */ ([d, i])).filter(([d]) => d <= today)
    // A kind whose items each have a place of their own (`tos`) opens on the one due longest.
    const first = due.length ? due.reduce((a, b) => (b[0] < a[0] ? b : a)) : undefined
    const fresh = g.fresh ?? 0
    return {
      ...g,
      due: due.length,
      fresh,
      n: due.length + fresh,
      oldest: first?.[0],
      to: g.tos && first ? g.tos[first[1]] : g.to
    }
  })
  /** @type {DatedRow[]} */
  const rows = []
  for (const g of counted) {
    if (!g.where || g.n) rows.push(g)
    // The kind's one row at 0, at the place of its first page, once none of its pages has any due.
    else if (!counted.some(x => x.one === g.one && x.n) && !rows.some(x => x.one === g.one))
      rows.push({
        one: g.one,
        many: g.many,
        ...(g.name ? { name: g.name } : {}),
        n: 0,
        due: 0,
        fresh: 0
      })
  }
  const open = rows.filter(g => !g.away)
  /** @type {DatedRow | null} */
  let longest = null
  for (const g of open) {
    // A kind with items due has the oldest of their dates; one with none due has none.
    if (g.oldest === undefined) continue
    if (!longest || g.oldest < (longest.oldest ?? '')) longest = g
  }
  return {
    rows,
    dueCount: rows.reduce((n, g) => n + g.due, 0),
    freshCount: rows.reduce((n, g) => n + g.fresh, 0),
    first: (longest ?? open.find(g => g.fresh))?.to
  }
}

/**
 * What waits, as the learner reads it: "6 due, 21 new", "6 due", "21 new", or "" for nothing.
 * @param {number} due
 * @param {number} fresh
 */
export const waiting = (due, fresh) =>
  [due ? `${due} due` : '', fresh ? `${fresh} new` : ''].filter(Boolean).join(', ')

/**
 * The Review page's rows. `pages` is [{ title, to }]: the unit's pages done every session. Each
 * is one row under its own title, always open, with what waits on it today, every kind answered
 * there summed. Then the kinds answered on other pages, as `datedView` gives them: a row with
 * nothing waiting has no `to`. Each row is { key, name, to?, due, fresh, n, away? }.
 * @param {DatedGroup[]} groups
 * @param {string} today
 * @param {{ title: string, to: string }[]} [pages]
 * @returns {ReviewRow[]}
 */
export function reviewRows(groups, today, pages = []) {
  const { rows } = datedView(groups, today)
  /** @param {string | undefined} to */
  const path = to => to?.split(/[?#]/)[0]
  /**
   * @param {DatedRow[]} list
   * @param {'due' | 'fresh' | 'n'} k
   */
  const sum = (list, k) => list.reduce((n, g) => n + g[k], 0)
  const own = pages.map(p => {
    const on = rows.filter(g => !g.away && path(g.to) === p.to)
    return {
      key: p.to,
      name: p.title,
      to: p.to,
      due: sum(on, 'due'),
      fresh: sum(on, 'fresh'),
      n: sum(on, 'n')
    }
  })
  const rest = rows
    .filter(g => g.away || !pages.some(p => p.to === path(g.to)))
    .map(g => ({
      key: `${g.one}-${g.where ?? ''}`,
      name:
        g.name ??
        `${g.many.charAt(0).toUpperCase()}${g.many.slice(1)}${g.where ? `: ${g.where}` : ''}`,
      to: g.n && !g.away ? g.to : undefined,
      due: g.due,
      fresh: g.fresh,
      n: g.n,
      away: g.away,
      ...(g.where ? { kind: `${g.many.charAt(0).toUpperCase()}${g.many.slice(1)}` } : {})
    }))
  return [...own, ...rest]
}
