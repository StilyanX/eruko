// Hides: the number facts of the Mathematics division of "A Self-Study System" (Mathematics, "The
// number-facts gate and the calculator"): the sheets, their gate and the dated returns, drilled
// and stored once for every maths course, in one part of the record that every maths unit reads,
// whose fields `decodeFacts` reads as stored. Pure functions over plain data, tested in
// tests/study-facts.test.mjs.
import { RETENTION, addDays, isDue, nextOf, studyDay, writeLine } from './days.logic.js'
import { isRecord } from './decode.logic.js'
import { linesOf } from './practice.logic.js'

/**
 * The part of the record that holds the number facts, one for every maths unit.
 * @type {import('./pages.logic.js').RecordPart}
 */
export const FACTS_PART = { name: 'facts', key: 'aether-math-facts', title: 'Number facts' }

/** @typedef {'addition' | 'subtraction' | 'multiplication' | 'division'} Operation */

/** @typedef {readonly [question: string, answer: number]} Fact */

/**
 * One timed sheet as stored: when it was done (`time`, in ms), the seconds it took, the facts a
 * minute, and its errors. `slip` marks a return with errors whose missed facts are retested
 * before it counts. Sheets stored before a field existed lack it.
 * @typedef {Readonly<{ time: number, seconds?: number, perMin?: number, errors: number, slip?: boolean }>} TimedSheet
 */

/**
 * A sheet's result, once it is checked: its errors, its seconds, and the timed sheet before it.
 * @typedef {Readonly<{ errors: number, seconds: number, last: TimedSheet | null }>} SheetResult
 */

/**
 * A sheet in hand (see `startSheet`), as stored: `elapsed` is the ms worked so far and `at` the
 * time of its last change, in ms. `result` is set once it is checked. `misses` marks a sheet of
 * only the facts missed on the last one.
 * @typedef {Readonly<{
 *   op: Operation,
 *   timed: boolean,
 *   misses?: boolean,
 *   rows: readonly Fact[],
 *   answers: readonly string[],
 *   page: number,
 *   elapsed: number,
 *   at: number,
 *   result?: SheetResult
 * }>} Sheet
 */

/** The kind of sheet a fact was missed on. @typedef {'untimed' | 'timed' | 'return'} MissFrom */

/**
 * What the record keeps of one operation: when its untimed sheet was clean (in ms; null after a
 * return whose missed facts were missed again) and the seconds it took, the seconds of the last
 * full untimed sheet, its timed sheets, its dated returns, the day an error sent it back to drill,
 * and the facts missed on the last sheet (`misses`), drilled alone until each is right, with the
 * kind of sheet they were missed on (`missFrom`) and, for a return, the day they were missed
 * (`missDay`): a return's missed facts are retested the next day.
 * @typedef {Readonly<{
 *   clean?: number | null,
 *   cleanSeconds?: number,
 *   untimedSeconds?: number,
 *   timed?: readonly TimedSheet[],
 *   returns?: readonly import('./days.logic.js').Line[],
 *   failed?: string,
 *   misses?: readonly string[],
 *   missFrom?: MissFrom,
 *   missDay?: string
 * }>} FactRecord
 */

/**
 * The number-facts record: each operation's, the seconds drilled on a day, and the sheet in hand.
 * An older Review page put sample sheets in it and named their operations in `sample`: they are
 * read as not there, and the next write drops them and the name.
 * @typedef {Readonly<{
 *   addition?: FactRecord | undefined,
 *   subtraction?: FactRecord | undefined,
 *   multiplication?: FactRecord | undefined,
 *   division?: FactRecord | undefined,
 *   spent?: Readonly<{ day: string, seconds: number }>,
 *   sheet?: Sheet | undefined,
 *   sample?: undefined
 * }>} FactsRecord
 */

export const HOUR_MS = 3600000

/** @type {readonly Operation[]} */
export const FACT_KEYS = ['addition', 'subtraction', 'multiplication', 'division']

/**
 * @param {unknown} v
 * @returns {v is Operation}
 */
const isOperation = v => FACT_KEYS.some(k => k === v)

/** @param {unknown} v */
const finite = v => (typeof v === 'number' && Number.isFinite(v) ? v : undefined)

/**
 * @param {unknown} v
 * @returns {TimedSheet | undefined}
 */
function timedOf(v) {
  if (!isRecord(v)) return undefined
  const time = finite(v.time)
  const errors = finite(v.errors)
  if (time === undefined || errors === undefined) return undefined
  const seconds = finite(v.seconds)
  const perMin = finite(v.perMin)
  return {
    time,
    errors,
    ...(seconds === undefined ? {} : { seconds }),
    ...(perMin === undefined ? {} : { perMin }),
    ...(v.slip === true ? { slip: true } : {})
  }
}

/**
 * @param {unknown} v
 * @returns {readonly string[] | undefined}
 */
const stringsOf = v => (Array.isArray(v) ? v.filter(x => typeof x === 'string') : undefined)

/**
 * @param {unknown} v
 * @returns {FactRecord | undefined}
 */
function factRecordOf(v) {
  if (!isRecord(v)) return undefined
  const { missFrom } = v
  /** @type {{ -readonly [K in keyof FactRecord]: FactRecord[K] }} */
  const rec = {}
  if (v.clean === null) rec.clean = null
  const clean = finite(v.clean)
  if (clean !== undefined) rec.clean = clean
  const cleanSeconds = finite(v.cleanSeconds)
  if (cleanSeconds !== undefined) rec.cleanSeconds = cleanSeconds
  const untimedSeconds = finite(v.untimedSeconds)
  if (untimedSeconds !== undefined) rec.untimedSeconds = untimedSeconds
  if (Array.isArray(v.timed)) rec.timed = v.timed.flatMap(t => timedOf(t) ?? [])
  const returns = linesOf(v.returns)
  if (returns) rec.returns = returns
  if (typeof v.failed === 'string') rec.failed = v.failed
  const misses = stringsOf(v.misses)
  if (misses) rec.misses = misses
  if (missFrom === 'untimed' || missFrom === 'timed' || missFrom === 'return') rec.missFrom = missFrom
  if (typeof v.missDay === 'string') rec.missDay = v.missDay
  return rec
}

/**
 * @param {unknown} v
 * @returns {Fact | undefined}
 */
const factOf = v =>
  Array.isArray(v) && typeof v[0] === 'string' && typeof v[1] === 'number' ? [v[0], v[1]] : undefined

/**
 * @param {unknown} v
 * @returns {SheetResult | undefined}
 */
function resultOf(v) {
  if (!isRecord(v)) return undefined
  const errors = finite(v.errors)
  const seconds = finite(v.seconds)
  if (errors === undefined || seconds === undefined) return undefined
  return { errors, seconds, last: timedOf(v.last) ?? null }
}

/**
 * A stored sheet of the shape a sheet has, its answers as typed (a hole or a null as blank);
 * whether it can still be worked is `sheetHeld`'s to say.
 * @param {unknown} v
 * @returns {Sheet | undefined}
 */
function sheetOf(v) {
  if (!isRecord(v) || !isOperation(v.op) || !Array.isArray(v.rows) || !Array.isArray(v.answers))
    return undefined
  const rows = v.rows.map(factOf)
  const elapsed = finite(v.elapsed)
  const at = finite(v.at)
  const { page } = v
  if (
    !rows.every(r => r !== undefined) ||
    elapsed === undefined ||
    at === undefined ||
    typeof page !== 'number' ||
    !Number.isInteger(page) ||
    page < 0
  )
    return undefined
  const result = resultOf(v.result)
  return {
    op: v.op,
    timed: v.timed === true,
    ...(v.misses === true ? { misses: true } : {}),
    rows,
    answers: Array.from(v.answers, a => (typeof a === 'string' ? a : '')),
    page,
    elapsed,
    at,
    ...(result ? { result } : {})
  }
}

/**
 * The number-facts part as stored, read into its types: a field that is missing or not of its
 * shape reads as not there, so a damaged field reads as not done.
 * @param {import('./decode.logic.js').JsonRecord} json
 * @returns {FactsRecord}
 */
export function decodeFacts(json) {
  /** @type {{ -readonly [K in keyof FactsRecord]: FactsRecord[K] }} */
  const facts = {}
  const sample = Array.isArray(json.sample) ? json.sample : []
  if (json.sample !== undefined) facts.sample = undefined
  for (const op of FACT_KEYS) {
    if (sample.includes(op)) {
      facts[op] = undefined
      continue
    }
    const rec = factRecordOf(json[op])
    if (rec) facts[op] = rec
  }
  const { spent } = json
  if (isRecord(spent) && typeof spent.day === 'string' && finite(spent.seconds) !== undefined)
    facts.spent = { day: spent.day, seconds: Number(spent.seconds) }
  const sheet = sheetOf(json.sheet)
  if (sheet) facts.sheet = sheet
  return facts
}

/**
 * Each fact of one operation from 0 to 10, as [question, answer]. Division never uses 0 as the divisor.
 * @param {Operation} op
 * @returns {Fact[]}
 */
export function factSet(op) {
  /** @type {Fact[]} */
  const out = []
  for (let a = 0; a <= 10; a++)
    for (let b = 0; b <= 10; b++) {
      if (op === 'addition') out.push([`${a} + ${b}`, a + b])
      if (op === 'subtraction') out.push([`${a + b} − ${b}`, a])
      if (op === 'multiplication') out.push([`${a} × ${b}`, a * b])
      if (op === 'division' && b > 0) out.push([`${a * b} ÷ ${b}`, a])
    }
  return out
}

export const SHEET_PAGE = 11

/** A gap in a sheet's work longer than this is time away and counts as this much. */
export const AWAY_MS = 60000

/**
 * A fact's answer is right when its digits are the stored answer's. A blank is wrong.
 * @param {string | undefined} answer
 * @param {Fact} fact
 */
const isRight = (answer, [, stored]) => /^\d+$/.test((answer ?? '').trim()) && Number(answer) === stored

/**
 * The facts of a sheet with a wrong or blank answer, in sheet order, as [index, question, answer].
 * @param {readonly Fact[]} rows
 * @param {readonly string[]} answers
 * @returns {(readonly [number, string, number])[]}
 */
export const sheetMisses = (rows, answers) =>
  rows.flatMap((r, i) => (isRight(answers[i], r) ? [] : [[i, r[0], r[1]]]))

/**
 * A sheet in hand, stored in the facts record so a reload or a break returns to it. A gap over
 * `AWAY_MS` between two changes counts as `AWAY_MS`, so time with the page closed or left alone is
 * not counted as work.
 * @param {Operation} op
 * @param {boolean} timed
 * @param {readonly Fact[]} rows
 * @param {number} nowMs
 * @param {boolean} [misses] a sheet of only the facts missed on the last one
 * @returns {Sheet}
 */
export function startSheet(op, timed, rows, nowMs, misses = false) {
  return { op, timed, ...(misses ? { misses } : {}), rows, answers: [], page: 0, elapsed: 0, at: nowMs }
}

/**
 * The facts of one operation that a sheet of missed facts drills: those missed on the last sheet.
 * @param {FactsRecord | undefined} facts
 * @param {Operation} op
 * @returns {Fact[]}
 */
export function missedFacts(facts, op) {
  const missed = facts?.[op]?.misses ?? []
  return factSet(op).filter(([q]) => missed.includes(q))
}

/**
 * The sheet after a change at `nowMs`, with the work since its last change added.
 * @param {Sheet} sheet
 * @param {number} nowMs
 * @returns {Sheet}
 */
export function touchSheet(sheet, nowMs) {
  return {
    ...sheet,
    elapsed: sheet.elapsed + Math.min(Math.max(0, nowMs - sheet.at), AWAY_MS),
    at: nowMs
  }
}

/**
 * @param {Sheet} sheet
 * @param {number} nowMs
 */
export const sheetSeconds = (sheet, nowMs) => Math.round(touchSheet(sheet, nowMs).elapsed / 1000)

/**
 * The facts a stored sheet may hold and how many it must: a sheet of missed facts those still to
 * drill, or once checked as many as it held, each a fact of its operation; any other sheet every
 * fact of its operation.
 * @param {Sheet} sheet
 * @param {FactsRecord | undefined} facts
 */
function factsOfSheet(sheet, facts) {
  const all = factSet(sheet.op)
  if (!sheet.misses) return { set: all, size: all.length }
  if (sheet.result) return { set: all, size: sheet.rows.length }
  const missed = missedFacts(facts, sheet.op)
  return { set: missed, size: missed.length }
}

/**
 * A stored sheet that can still be worked: its facts are the operation's own, each once, its page
 * inside it, and its operation still open today; a checked sheet stays readable on its day.
 * @param {Sheet | undefined} sheet
 * @param {FactsRecord | undefined} facts
 * @param {string} today
 * @returns {sheet is Sheet}
 */
export function sheetHeld(sheet, facts, today) {
  if (!sheet) return false
  const { set, size } = factsOfSheet(sheet, facts)
  const whole =
    size > 0 &&
    sheet.rows.length === size &&
    sheet.rows.every(r => set.some(q => q[0] === r[0] && q[1] === r[1])) &&
    new Set(sheet.rows.map(r => r[0])).size === size &&
    sheet.page * SHEET_PAGE < size
  if (!whole) return false
  if (sheet.result) return studyDay(sheet.at) === today
  const step = factStep(facts, sheet.op, today)
  if (sheet.misses) return step === 'misses'
  return sheet.timed ? step === 'timed' || step === 'return' : step === 'untimed'
}

/**
 * The number-facts gate for one operation (Mathematics, "The number-facts gate", "The pass"):
 * `clean` is set, and a timed sheet after it has no errors and takes no more seconds than the
 * clean untimed sheet (`cleanSeconds`). The last timed sheet must have no errors, but on a
 * return only errors count, so a slower clean return keeps the pass the earlier sheet earned.
 * A record without `cleanSeconds` was kept before the time was stored: it has no time limit, so
 * no passed sheet is lost. A return with a slip does not count until its missed facts are retested.
 * @param {FactRecord | undefined} rec
 */
export function factsPassed(rec) {
  if (!rec?.clean) return false
  const { clean } = rec
  const bar = rec.cleanSeconds ?? Infinity
  const after = (rec.timed ?? []).filter(t => t.time > clean && !t.slip)
  const last = after.at(-1)
  return (
    last !== undefined &&
    last.errors === 0 &&
    after.some(t => t.errors === 0 && !((t.seconds ?? 0) > bar))
  )
}

/**
 * The seconds of the last timed sheet after a clean untimed sheet when it was clean but slower
 * than the untimed sheet, else null. With no clean untimed sheet, or no time kept for it, no
 * sheet is slow.
 * @param {FactRecord | undefined} rec
 */
export function slowSheet(rec) {
  const clean = rec?.clean
  const bar = rec?.cleanSeconds
  if (!clean || bar === undefined) return null
  const last = (rec.timed ?? []).filter(t => t.time > clean).at(-1)
  return last && last.errors === 0 && last.seconds !== undefined && last.seconds > bar
    ? last.seconds
    : null
}

/** @param {FactsRecord | undefined} facts */
export const allFactsPassed = facts => FACT_KEYS.every(k => factsPassed(facts?.[k]))

/**
 * Seconds of drill today. Until every set passes, a day holds one hour at most.
 * @param {FactsRecord | undefined} facts
 * @param {string} today
 */
const drillSeconds = (facts, today) => (facts?.spent?.day === today ? facts.spent.seconds : 0)

/**
 * What the facts page offers today for one operation: 'untimed', 'timed', 'return', 'misses' (a
 * sheet of only the facts missed on the last one), or null. The missed facts of a return are
 * retested the day after they were missed, whatever the drill time; those of a drill sheet count
 * toward it.
 * @param {FactsRecord | undefined} facts
 * @param {Operation} op
 * @param {string} today
 * @returns {'untimed' | 'timed' | 'return' | 'misses' | null}
 */
export function factStep(facts, op, today) {
  /** @type {FactRecord} */
  const rec = facts?.[op] ?? {}
  if (rec.misses?.length) {
    // a record kept before `missDay` existed reads as due
    if (rec.missFrom === 'return') return (rec.missDay ?? '') < today ? 'misses' : null
    return drillSeconds(facts, today) < HOUR_MS / 1000 ? 'misses' : null
  }
  if (factsPassed(rec)) return isDue(rec.returns, today) ? 'return' : null
  if (rec.failed === today) return null // an error on a return sends it back to drill the next day
  if (drillSeconds(facts, today) >= HOUR_MS / 1000) return null
  return rec.clean ? 'timed' : 'untimed'
}

/**
 * The day an operation's sheet is next due: the day after a return's missed facts, while they
 * wait, else its dated list's next date.
 * @param {FactRecord | undefined} rec
 */
export const factNext = rec =>
  rec?.missFrom === 'return' && rec.misses?.length && rec.missDay
    ? addDays(rec.missDay, 1)
    : nextOf(rec?.returns)

/**
 * How many operations still have a sheet to pass today: those drilled but not passed, so without a date.
 * @param {FactsRecord | undefined} facts
 * @param {string} today
 */
export const drillToday = (facts, today) =>
  FACT_KEYS.filter(op => {
    const step = factStep(facts, op, today)
    return (
      step === 'untimed' || step === 'timed' || (step === 'misses' && !factsPassed(facts?.[op]))
    )
  }).length

/**
 * One sheet as `recordSheet` takes it: whether it was timed, its errors, its seconds, its facts
 * right, when it was checked (`nowMs`) and on what day, the questions with a wrong or blank
 * answer (`missed`), and whether it was a sheet of missed facts (`drill`).
 * @typedef {Readonly<{
 *   timed: boolean,
 *   errors: number,
 *   seconds: number,
 *   count: number,
 *   nowMs: number,
 *   today: string,
 *   missed?: readonly string[],
 *   drill?: boolean
 * }>} CheckedSheet
 */

/** An operation's record being written. @typedef {{ -readonly [K in keyof FactRecord]: FactRecord[K] }} FactDraft */

/**
 * The missed facts kept for drill, of the kind of sheet they were missed on; none for no kind.
 * @param {FactDraft} rec
 * @param {readonly string[]} missed
 * @param {string} today
 * @param {MissFrom} [kind]
 */
function keepMisses(rec, missed, today, kind) {
  delete rec.misses
  delete rec.missFrom
  delete rec.missDay
  if (!kind || !missed.length) return
  rec.misses = missed
  rec.missFrom = kind
  if (kind === 'return') rec.missDay = today
}

/**
 * A sheet of missed facts: all right, it counts for the sheet they were missed on; a return's
 * fact missed again writes a wrong line and sends the operation back to drill.
 * @param {FactDraft} rec
 * @param {CheckedSheet} sheet
 */
function recordDrill(rec, { missed = [], today, nowMs, seconds }) {
  const from = rec.missFrom
  if (missed.length === 0) {
    keepMisses(rec, missed, today)
    if (from === 'untimed') {
      rec.clean = nowMs
      rec.cleanSeconds = rec.untimedSeconds ?? seconds
    }
    if (from === 'return') rec.returns = writeLine(rec.returns, true, today, RETENTION.exact)
  } else if (from === 'return') {
    keepMisses(rec, missed, today)
    rec.returns = writeLine(rec.returns, false, today, RETENTION.exact)
    rec.clean = null
    rec.failed = today
  } else keepMisses(rec, missed, today, from)
}

/**
 * A timed sheet: stored with its time; the one that passes becomes the operation's first dated
 * line, and a return writes the next. A return with errors is a slip until its missed facts are
 * retested; with none named, its errors count at once.
 * @param {FactDraft} rec
 * @param {CheckedSheet} sheet
 * @param {boolean} wasPassed
 */
function recordTimed(rec, { missed = [], today, nowMs, seconds, count, errors }, wasPassed) {
  const slip = wasPassed && errors > 0 && missed.length > 0
  const perMin = Math.round((count * 60) / Math.max(1, seconds))
  rec.timed = [
    ...(rec.timed ?? []),
    { time: nowMs, seconds, perMin, errors, ...(slip ? { slip } : {}) }
  ]
  if (wasPassed) {
    if (errors === 0) rec.returns = writeLine(rec.returns, true, today, RETENTION.exact)
    else if (!slip) {
      rec.returns = writeLine(rec.returns, false, today, RETENTION.exact)
      rec.clean = null
      rec.failed = today
    }
    keepMisses(rec, missed, today, 'return')
  } else {
    if (factsPassed(rec)) rec.returns = [{ date: today, right: true, next: addDays(today, 1) }]
    keepMisses(rec, missed, today, 'timed')
  }
}

/**
 * The facts record after one sheet. A slip repeats only the facts it missed: after a sheet with
 * errors, those facts (`missed`) are drilled alone, on sheets of their own (`drill`), until each
 * is right. An untimed sheet sets `clean` once its facts are all right, with the full sheet's
 * seconds as `cleanSeconds`, the bar a timed sheet must meet.
 * @param {FactsRecord | undefined} facts
 * @param {Operation} op
 * @param {CheckedSheet} sheet
 * @returns {FactsRecord}
 */
export function recordSheet(facts = {}, op, sheet) {
  /** @type {FactDraft} */
  const rec = { ...facts[op] }
  const wasPassed = factsPassed(rec)
  if (sheet.drill) recordDrill(rec, sheet)
  else if (sheet.timed) recordTimed(rec, sheet, wasPassed)
  else {
    rec.untimedSeconds = sheet.seconds
    if (sheet.errors === 0) {
      rec.clean = sheet.nowMs
      rec.cleanSeconds = sheet.seconds
    }
    keepMisses(rec, sheet.missed ?? [], sheet.today, 'untimed')
  }
  const seconds = drillSeconds(facts, sheet.today) + (wasPassed ? 0 : sheet.seconds)
  return { ...facts, [op]: rec, spent: { day: sheet.today, seconds } }
}
