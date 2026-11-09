// Hides: what the app around Arithmetic reads of the unit, as plain functions of the learner's
// records: the place line, the pages done, the unit page's rows and the dated list. `r` holds every
// part of the record by its name; this unit reads its own (`math`) and the number facts (`facts`).
// The end level opens line by line (Mathematics, "The end level", Opens): its returns sit with the
// number facts' and its drill after mixed practice ("The work list"), and arithmetic is done when
// every line of it stands passed ("When the stage is done").
import { UNIT } from './entry.logic.js'
import { bankKindsOf } from '../../../kernel/maths-decode.logic.js'
import { mathsUnit } from '../../../kernel/maths-unit.logic.js'
import { BANK_KINDS } from './course.gen.js'
import { COURSE, decodeArithmetic } from './decode.logic.js'
import { proofRows, proofTopicState, proofsToday } from '../../../kernel/proofs.logic.js'
import { LINE_IDS } from './end-lines.logic.js'
import { drillLines, endPassed, gateOf, lineNext, linesPassed } from './end-level.logic.js'
import { decodeFacts } from '../../../kernel/facts.logic.js'

const shared = mathsUnit({
  unit: UNIT,
  recordOf: r => decodeArithmetic(r.math ?? {}),
  topics: COURSE,
  bank: bankKindsOf(BANK_KINDS),
  topicState: proofTopicState,
  proofsToday
})

/**
 * Whether every topic is finished.
 * @param {import('./decode.logic.js').ArithmeticRecord} math
 */
const allFinished = math => COURSE.every(t => proofTopicState(t, math).finished)

/**
 * The gate the end level runs in today: its lines open and the block left to it.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @param {string} today
 */
export function endGate(r, today) {
  const math = decodeArithmetic(r.math ?? {})
  const finished = new Set(
    (UNIT.sections ?? [])
      .filter(s => COURSE.slice(s.first - 1, s.last).every(t => proofTopicState(t, math).finished))
      .map(s => s.title)
  )
  return gateOf(math.end ?? {}, decodeFacts(r.facts ?? {}), finished, today)
}

/** @param {string | undefined} d @returns {d is string} */
const isDate = d => Boolean(d)

/**
 * The unit's dated list: the number facts with the end level's sheets due back, mixed practice
 * with the end level's line in hand after it, held as mixed practice is, then the proofs read,
 * topic by topic.
 * @param {import('../../../kernel/pages.logic.js').UnitRecords} r
 * @param {string} today
 * @returns {import('../../../kernel/days.logic.js').DatedGroup[]}
 */
function dated(r, today) {
  const math = decodeArithmetic(r.math ?? {})
  const end = math.end ?? {}
  const gate = endGate(r, today)
  const open = gate.open.length > 0
  const to = `${shared.base}/end-level`
  const [facts, mixed, ...rest] = shared.dated(r, today)
  return [
    ...(facts ? [facts] : []),
    ...(open
      ? [{ one: 'end-level sheet', many: 'end-level sheets', to, dates: LINE_IDS.map(id => lineNext(end.lines?.[id])).filter(isDate) }]
      : []),
    ...(mixed ? [mixed] : []),
    ...(open
      ? [{ one: 'end-level line', many: 'end-level lines', to, dates: [], fresh: drillLines(end, today, gate), ...(mixed?.hold ? { hold: true } : {}) }]
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
  if (!allFinished(math)) return shared.place(r)
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
      endGate(r, '').open.length && !done.has('end-level')
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
