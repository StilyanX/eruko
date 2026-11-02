// Hides: what the app reads of Augustus, as plain functions of the
// learner's records: the place line, the pages done, the unit page's rows and the dated list.
// `r` holds every unit's part of the record by its name; this unit reads its own, `lives`,
// decoded once (decode.logic.js).
import { UNIT } from './entry.logic.js'
import { endRow, firstLife, lessonRows, place as placeLine, recallDate } from './next.logic.js'
import { COURSE } from './course.gen.js'
import { decodeLives, lifeId } from './decode.logic.js'
import { NO_END, endDone, roundDate } from './end.logic.js'

const BASE = `/${UNIT.slug}`

const slug = UNIT.slug

/**
 * This unit's part of every unit's record, decoded.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
const livesOf = r => decodeLives(r.lives)

/**
 * The person's name as the lessons read so far use it: Octavian until the Senate named him
 * Augustus in January 27 BC, by the date of the last lesson read.
 * @param {import('./decode.logic.js').LifeId} life
 * @param {import('./decode.logic.js').LivesRecord} record
 */
export function nameSoFar(life, record) {
  const name = COURSE.lives.find(l => l.id === life)?.name
  if (life !== 'augustus') return name
  const date = COURSE.lessons[record.lives[life]?.lastLesson ?? -1]?.date
  return date !== undefined && date.y >= -27 ? name : 'Octavian'
}

/**
 * Where the learner stands, as one plain line.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
const place = r => placeLine(firstLife(COURSE), livesOf(r))

/**
 * The pages done, by slug.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
const finished = r => {
  const life = livesOf(r).lives[lifeId(firstLife(COURSE).id)]
  return new Set(endDone(life?.end ?? NO_END, life?.closed) ? ['life'] : [])
}

/**
 * The unit page's rows: Start, the lessons in sections by age, then what follows the last lesson.
 * A lesson's row opens it once it is done or open (next.logic.js lessonRows); no row stands for
 * the life's page itself, since the open lesson's row opens it.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
function rows(r) {
  const to = `${BASE}/life`
  const record = livesOf(r)
  return {
    start: { key: 'start', title: 'Start', to: `${BASE}/start`, done: false },
    top: [],
    items: lessonRows(COURSE, record, to),
    after: [endRow(COURSE, record, to, finished(r).has('life'))]
  }
}

/**
 * The unit's dated list (kernel/days.logic.js datedView): each life in recall, told on the life's
 * page.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @returns {import('../../../kernel/days.logic.js').DatedGroup[]}
 */
function dated(r) {
  const record = livesOf(r)
  const first = record.lives[firstLife(COURSE).id]
  const round = roundDate(first?.end ?? NO_END, first?.closed)
  return [
    ...COURSE.lives.map(l => ({
      one: 'life',
      many: 'lives',
      // the Review row is named as the life's page names the telling
      name: `Tell the whole life of ${l.name}`,
      to: `${BASE}/life`,
      where: l.name,
      dates: [recallDate(record.recall[l.id])].flatMap(d => (d ? [d] : []))
    })),
    // The end level's round, an item of the return rule, from the day after the life closed.
    ...(round
      ? [
          {
            one: 'round',
            many: 'rounds',
            name: 'The end level',
            to: `${BASE}/life`,
            where: firstLife(COURSE).name,
            dates: [round]
          }
        ]
      : [])
  ]
}

/** What the unit page and the explore page read of the unit. */
export const unit = { slug, place, finished, rows, dated }
