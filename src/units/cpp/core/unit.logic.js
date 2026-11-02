// Hides: what the app around the C++ unit reads of it, as plain
// functions of the learner's records: the place line, the pages done, the unit page's rows and
// the dated list. `r` is every unit's record at once, each part by its name
// (kernel/pages.logic.js UnitRecords).
import { START, UNIT } from './entry.logic.js'
import { nextOf } from '../../../kernel/days.logic.js'
import { KINDS, SECTIONS } from './course.gen.js'
import { STAGES, TRACK } from './track.gen.js'
import { courseFrom } from './decode.logic.js'
import { courseRows, place as placeLine, trackRows, waitingToday } from './next.logic.js'
import { kindLine, recordOf } from './record.logic.js'

const BASE = `/${UNIT.slug}`

const slug = UNIT.slug

const COURSE = courseFrom(SECTIONS, KINDS, TRACK, STAGES)

/**
 * The C++ part of every unit's record, decoded.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
const cppOf = r => recordOf(r.cpp, COURSE)

/** @param {import('../../../kernel/pages.logic.js').UnitRecords} r */
const place = r => placeLine(COURSE, cppOf(r))

/**
 * The pages done, by slug: Start, once Setup is stored and the filled trace read.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @returns {Set<string>}
 */
const finished = r => {
  const record = cppOf(r)
  const [first] = COURSE.kinds
  const read = first && kindLine(record, first.id)?.part !== 'start'
  return new Set(record.runtime && record.server && read ? ['start'] : [])
}

/**
 * The unit page's rows: Start, the work list, then the kinds in their sections, then the track's.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @returns {import('../../../kernel/pages.logic.js').Rows}
 */
function rows(r) {
  const done = finished(r)
  /** @param {import('../../../kernel/pages.logic.js').Page} p */
  const page = p => ({
    key: p.slug,
    title: p.title,
    to: `${BASE}/${p.slug}`,
    done: done.has(p.slug)
  })
  return {
    start: page(START),
    top: UNIT.pages.filter(p => p.repeats).map(page),
    items: [
      ...courseRows(COURSE, cppOf(r), `${BASE}/work`),
      ...trackRows(COURSE, cppOf(r), `${BASE}/work`)
    ]
  }
}

/**
 * The unit's dated list: the problems and trace items with a line, and the steps with no date
 * that wait today on the work list.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @param {string} today
 * @returns {import('../../../kernel/days.logic.js').DatedGroup[]}
 */
function dated(r, today) {
  const record = cppOf(r)
  return [
    {
      one: 'item',
      many: 'items',
      to: `${BASE}/work`,
      dates: Object.values(record.recall).flatMap(lines => nextOf(lines) ?? []),
      fresh: waitingToday(COURSE, record, today)
    }
  ]
}

/** What the unit page and the explore page read of the unit. */
export const unit = { slug, place, finished, rows, dated }
