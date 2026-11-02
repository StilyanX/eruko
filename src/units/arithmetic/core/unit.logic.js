// Hides: what the app around Arithmetic reads of the unit, as plain functions of the learner's
// records: the place line, the pages done, the unit page's rows and the dated list. `r` holds every
// part of the record by its name; this unit reads its own (`math`) and the number facts (`facts`).
// The end level opens once every topic is finished, and arithmetic is done when every line of it
// stands passed (Mathematics, "When the stage is done").
import { UNIT } from './entry.logic.js'
import { bankKindsOf } from '../../../kernel/maths-decode.logic.js'
import { mathsUnit } from '../../../kernel/maths-unit.logic.js'
import { BANK_KINDS } from './course.gen.js'
import { COURSE, decodeArithmetic } from './decode.logic.js'
import { proofRows, proofTopicState, proofsToday } from '../../../kernel/proofs.logic.js'
import { LINE_IDS } from './end-lines.logic.js'
import { drillLines, endPassed, lineNext, linesPassed } from './end-level.logic.js'

const shared = mathsUnit({
  unit: UNIT,
  recordOf: r => decodeArithmetic(r.math ?? {}),
  topics: COURSE,
  bank: bankKindsOf(BANK_KINDS),
  topicState: proofTopicState,
  proofsToday
})

/**
 * Whether every topic is finished, so the end level is open.
 * @param {import('./decode.logic.js').ArithmeticRecord} math
 */
export const endOpen = math => COURSE.every(t => proofTopicState(t, math).finished)

/** @param {string | undefined} d @returns {d is string} */
const isDate = d => Boolean(d)

/**
 * The unit's dated list: the shared rows, the end level's sheets once it is open, then the proofs
 * read, topic by topic.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @param {string} today
 * @returns {import('../../../kernel/days.logic.js').DatedGroup[]}
 */
function dated(r, today) {
  const math = decodeArithmetic(r.math ?? {})
  const end = math.end ?? {}
  const [facts, ...rest] = shared.dated(r, today)
  return [
    ...(facts ? [facts] : []),
    ...(endOpen(math)
      ? [
          {
            one: 'end-level sheet',
            many: 'end-level sheets',
            to: `${shared.base}/end-level`,
            dates: LINE_IDS.map(id => lineNext(end.lines?.[id])).filter(isDate),
            fresh: drillLines(end, today)
          }
        ]
      : []),
    ...rest,
    ...proofRows(COURSE, math, { ...shared, anchor: 'ar-proofs' })
  ]
}

/**
 * The place line: the lesson in hand, then the end level's lines passed, then arithmetic done.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
function place(r) {
  const math = decodeArithmetic(r.math ?? {})
  if (!endOpen(math)) return shared.place(r)
  const end = math.end ?? {}
  if (endPassed(end)) return 'Arithmetic done: every lesson and every end-level line.'
  return `All ${COURSE.length} lessons done. End level: ${linesPassed(end)} of ${LINE_IDS.length} passed.`
}

/**
 * The pages done: the shared ones, and the end level once every line stands passed.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
function finished(r) {
  const done = shared.finished(r)
  if (endPassed(decodeArithmetic(r.math ?? {}).end ?? {})) done.add('end-level')
  return done
}

/** What the unit page and the explore page read from the unit. */
export const unit = {
  ...shared,
  dated,
  place,
  finished,
  /** @param {import('../../../kernel/pages.logic.js').UnitRecords} r */
  rows: r => {
    const rows = shared.rows(r)
    const done = finished(r)
    const math = decodeArithmetic(r.math ?? {})
    // The end level, once open and until passed, says how many lines stand passed.
    const endState =
      endOpen(math) && !done.has('end-level')
        ? { state: `${linesPassed(math.end ?? {})} of ${LINE_IDS.length} passed` }
        : {}
    return {
      ...rows,
      top: rows.top.map(row => ({
        ...row,
        done: done.has(String(row.key)),
        ...(row.key === 'end-level' ? endState : {})
      }))
    }
  }
}
