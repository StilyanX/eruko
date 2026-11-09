// Hides: what the app around Go reads of it, as plain functions of the learner's records: the place
// line, the pages done, the unit page's rows and the dated list. `r` is every unit's record at
// once, each part by its name (kernel/pages.logic.js UnitRecords).
import { START, UNIT } from './entry.logic.js'
import { ownOf } from './decode.logic.js'
import { datesOf, freshToday, gameToday, openKind, openPart, place as placeLine, positionsLeft, titled } from './next.logic.js'
import { courseOf, sectionsOf } from './own.logic.js'
import { kindLine, recordOf } from './record.logic.js'

const BASE = `/${UNIT.slug}`

const slug = UNIT.slug

/**
 * The Go part of every unit's record, decoded, with the course it runs on.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
function goOf(r) {
  const course = courseOf(ownOf(r.go))
  const record = recordOf(r.go, course)
  return { course, record }
}

/** @param {import('../../../kernel/pages.logic.js').UnitRecords} r */
const place = r => {
  const { course, record } = goOf(r)
  return placeLine(course, record)
}

/**
 * The pages done, by slug: Start, once the engine and the server are stored.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @returns {Set<string>}
 */
const finished = r => {
  const { record } = goOf(r)
  return new Set(record.engine && record.server ? ['start'] : [])
}

/**
 * The course's rows: the five rules parts, then the kinds in course order. A part done opens to
 * be read again, the part in hand opens the work list, and a part not reached yet opens nothing.
 * A kind on the work list opens it; every other kind opens its own page: its worked example, the
 * problems tried, and, once it may open, a way to begin it.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {import('../../../kernel/pages.logic.js').Item[]}
 */
function courseRows(course, record) {
  // the part in hand, and the kind the work list serves next
  const open = openPart(course, record)
  const listed = openKind(course, record)
  return [
    ...course.parts.map(p => {
      const met = p.items.some(id => record.recall[id])
      const done = p.items.every(id => record.recall[id])
      return {
        key: `part-${p.n}`,
        title: titled(p.name),
        to: done ? `${BASE}/work?part=${p.n}` : met || p === open ? `${BASE}/work` : undefined,
        done
      }
    }),
    ...course.kinds.map(k => {
      const line = kindLine(record, k.id)
      return {
        key: `kind-${k.id}`,
        title: titled(k.name),
        to: !line?.retired && k === listed ? `${BASE}/work` : `${BASE}/work?kind=${k.id}`,
        done: Boolean(line?.retired)
      }
    })
  ]
}

/**
 * The unit page's rows: Start, then the five rules parts and the kinds in course order, and its
 * sections, which grow by one when the learner's own games have made kinds.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @returns {import('../../../kernel/pages.logic.js').Rows}
 */
function rows(r) {
  const { course, record } = goOf(r)
  const done = finished(r)
  /** @param {import('../../../kernel/pages.logic.js').Page} p */
  const page = p => ({ key: p.slug, title: p.title, to: `${BASE}/${p.slug}`, done: done.has(p.slug) })
  return {
    start: page(START),
    top: UNIT.pages.filter(p => p.repeats).map(page),
    items: courseRows(course, record),
    sections: sectionsOf(record.own)
  }
}

/**
 * The unit's dated list (study/days.js datedView): the retired kinds, the rules items met, and
 * the problems of a first run answered wrong, and what waits today with no date: new items, each
 * review position, and the game, counted as the Review page counts them.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @param {string} today
 * @returns {import('../../../kernel/days.logic.js').DatedGroup[]}
 */
function dated(r, today) {
  const { course, record } = goOf(r)
  const waits = positionsLeft(record) + (gameToday(course, record, today) ? 1 : 0)
  return [
    {
      one: 'item',
      many: 'items',
      to: `${BASE}/work`,
      dates: datesOf(course, record),
      fresh: freshToday(course, record, today) + waits
    }
  ]
}

/** What the unit page and the explore page read of the unit. */
export const unit = { slug, place, finished, rows, dated }
