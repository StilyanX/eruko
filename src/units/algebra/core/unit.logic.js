// Hides: what the app around Algebra reads of the unit, as plain functions of the learner's
// records: the place line, the pages done, the unit page's rows and the dated list. `r` holds every
// part of the record by its name; this unit reads its own (`algebra`) and the number facts. The
// end level opens once every topic is finished: its paper to sit is a row of the dated list, its
// lost problems return with mixed practice's, and algebra is done when a paper has passed.
import { UNIT } from './entry.logic.js'
import { bankKindsOf } from '../../../kernel/maths-decode.logic.js'
import { mathsUnit } from '../../../kernel/maths-unit.logic.js'
import { proofRows, proofTopicState, proofsToday } from '../../../kernel/proofs.logic.js'
import { BANK_KINDS } from './course.gen.js'
import { COURSE, courseDone, decodeAlgebra } from './decode.logic.js'
import { endPassed, endState, lostProblems } from './end-level.logic.js'

const shared = mathsUnit({
  unit: UNIT,
  recordOf: r => decodeAlgebra(r.algebra ?? {}),
  topics: COURSE,
  bank: bankKindsOf(BANK_KINDS),
  topicState: proofTopicState,
  lost: lostProblems,
  proofsToday
})

/**
 * The pages done: the shared ones, and the end level once a paper has passed.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 */
function finished(r) {
  const done = shared.finished(r)
  if (endPassed(decodeAlgebra(r.algebra ?? {}))) done.add('end-level')
  return done
}

/** What the unit page and the explore page read of the unit. */
export const unit = {
  ...shared,
  /** @param {import('../../../kernel/pages.logic.js').UnitRecords} r */
  place: r => {
    if (COURSE.length === 0) return 'No topic written yet.'
    const algebra = decodeAlgebra(r.algebra ?? {})
    if (!courseDone(algebra)) return shared.place(r)
    return endPassed(algebra)
      ? 'Algebra done: every topic and the end level.'
      : `All ${COURSE.length} topics done. The end level is open.`
  },
  finished,
  /** @param {import('../../../kernel/pages.logic.js').UnitRecords} r */
  rows: r => {
    const rows = shared.rows(r)
    const done = finished(r)
    return { ...rows, top: rows.top.map(row => ({ ...row, done: done.has(String(row.key)) })) }
  },
  /**
   * The dated list: the number facts and mixed practice, then the proofs read, topic by topic.
   * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
   * @param {string} today
   */
  dated: (r, today) => {
    const algebra = decodeAlgebra(r.algebra ?? {})
    const end = endState(algebra, courseDone(algebra)).t
    return [
      ...shared.dated(r, today),
      // A paper to sit, or one sat and not yet marked.
      ...(end === 'ready' || end === 'sitting'
        ? [{ one: 'end-level paper', many: 'end-level papers', to: `${shared.base}/end-level`, dates: [], fresh: 1 }]
        : []),
      ...proofRows(COURSE, algebra, { ...shared, anchor: 'al-proofs' })
    ]
  }
}
