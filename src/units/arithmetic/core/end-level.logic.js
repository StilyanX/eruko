// Hides: arithmetic's end level run by the number-facts gate (Mathematics, "The end level", "The
// number-facts gate"): each line's untimed sheet and its time as the bar, the sheets of missed
// problems, the timed sheet that passes with no errors, in no more time and inside the line's own
// bar, the passing sheet as the line's first dated line, and returns decided on errors alone. A
// sheet shows one problem at a time and clocks it from its appearance to its last key; after an
// untimed or timed sheet each entry is retyped and the retyping time taken off its problem. The record is the `end` field of the unit's part, read by `decodeEnd`.
// Pure functions over plain data.
import { RETENTION, addDays, isDue, nextOf, writeLine } from '../../../kernel/days.logic.js'
import { isRecord } from '../../../kernel/decode.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { HOUR_MS } from '../../../kernel/facts.logic.js'
import { linesOf } from '../../../kernel/practice.logic.js'
import { drawPair, drawSheet } from './end-draw.logic.js'
import {
  LINE_IDS,
  allowanceOf,
  answerValue,
  entriesOf,
  entriesRight,
  isLineId,
  lineOf,
  paceItems,
  poolKey
} from './end-lines.logic.js'

/** The kind of sheet: the gate's three, or a sheet of missed problems. @typedef {'untimed' | 'timed' | 'return' | 'misses'} SheetKind */

/**
 * A timed sheet as stored: when it was checked (ms), the time it took after retyping (ms), its
 * errors, whether it met the first pass (no errors, no slower than the untimed sheet, inside the
 * line's bar) and whether it is a return with errors whose missed problems decide it.
 * @typedef {Readonly<{ time: number, ms: number, errors: number, pass?: boolean, slip?: boolean }>} TimedSheet
 */

/**
 * One line's record: when its untimed sheet was clean (ms; null after a failed return) and the
 * untimed sheet's time, its timed sheets, its dated returns, the day an error sent it back to
 * drill, the problems missed on the last sheet and on what kind of sheet, the day of a return's
 * misses; for a generated line when each problem was last shown, the sum of allowances of the
 * pass in hand, and the first timed sheet drawn with the untimed one.
 * @typedef {Readonly<{
 *   clean?: number | null,
 *   cleanMs?: number,
 *   untimedMs?: number,
 *   timed?: readonly TimedSheet[],
 *   returns?: readonly import('../../../kernel/days.logic.js').Line[],
 *   failed?: string,
 *   misses?: readonly import('./end-lines.logic.js').Problem[],
 *   missFrom?: 'untimed' | 'timed' | 'return',
 *   missDay?: string,
 *   shown?: Readonly<Record<string, number>>,
 *   sum?: number,
 *   next?: readonly import('./end-lines.logic.js').Problem[]
 * }>} LineRecord
 */

/**
 * A bar of a timed sheet: its name, whether it held, the measure and its limit, both in ms for a
 * time or as a ratio for a median of time over allowance.
 * @typedef {Readonly<{ name: string, ok: boolean, value: number, limit: number, ratio?: boolean, mean?: boolean }>} Bar
 */

/**
 * A checked sheet's result: its errors, its time after retyping (ms), the bars of a pass's timed
 * sheet, the untimed time it was held to, and whether it passed.
 * @typedef {Readonly<{ errors: number, ms: number, bars: readonly Bar[], bar?: number, passed?: boolean }>} SheetResult
 */

/**
 * The sheet in hand: its line and kind, its problems, the problem and entry in hand, what was
 * typed, each problem's clocked ms and its ms to the estimate, the time of the last key, whether
 * an estimate's product is shown; then the retyping, the entry in hand and the ms per entry; and
 * once checked, its result.
 * @typedef {Readonly<{
 *   line: import('./end-lines.logic.js').LineId,
 *   kind: SheetKind,
 *   problems: readonly import('./end-lines.logic.js').Problem[],
 *   i: number,
 *   j: number,
 *   typed: readonly (readonly string[])[],
 *   ms: readonly number[],
 *   toEstimate: readonly number[],
 *   at: number,
 *   day: string,
 *   reveal?: boolean,
 *   phase: 'work' | 'retype',
 *   ri: number,
 *   rj: number,
 *   retype: readonly (readonly number[])[],
 *   result?: SheetResult
 * }>} EndSheet
 */

/**
 * The end level's record: each line's, the seconds drilled on a day, and the sheet in hand.
 * @typedef {Readonly<{
 *   lines?: Readonly<Partial<Record<import('./end-lines.logic.js').LineId, LineRecord>>>,
 *   spent?: Readonly<{ day: string, seconds: number }>,
 *   sheet?: EndSheet
 * }>} EndRecord
 */

// ---------------------------------------------------------------- decoding

/** @param {unknown} v */
const finite = v => (typeof v === 'number' && Number.isFinite(v) ? v : undefined)

/**
 * @param {unknown} v
 * @returns {import('./end-lines.logic.js').Problem | undefined}
 */
const problemOf = v =>
  Array.isArray(v) && v.length > 0 && v.every(x => Number.isInteger(x)) ? v.map(Number) : undefined

/**
 * @param {unknown} v
 * @returns {import('./end-lines.logic.js').Problem[] | undefined}
 */
const problemsOf = v => {
  if (!Array.isArray(v)) return undefined
  const out = v.map(problemOf)
  return out.every(p => p !== undefined) ? out.flatMap(p => (p ? [p] : [])) : undefined
}

/**
 * @param {unknown} v
 * @returns {TimedSheet | undefined}
 */
function timedOf(v) {
  if (!isRecord(v)) return undefined
  const time = finite(v.time)
  const ms = finite(v.ms)
  const errors = finite(v.errors)
  if (time === undefined || ms === undefined || errors === undefined) return undefined
  return { time, ms, errors, ...(v.pass === true ? { pass: true } : {}), ...(v.slip === true ? { slip: true } : {}) }
}

/**
 * @param {unknown} v
 * @returns {LineRecord | undefined}
 */
function lineRecordOf(v) {
  if (!isRecord(v)) return undefined
  /** @type {{ -readonly [K in keyof LineRecord]: LineRecord[K] }} */
  const rec = {}
  if (v.clean === null) rec.clean = null
  const clean = finite(v.clean)
  if (clean !== undefined) rec.clean = clean
  const cleanMs = finite(v.cleanMs)
  if (cleanMs !== undefined) rec.cleanMs = cleanMs
  const untimedMs = finite(v.untimedMs)
  if (untimedMs !== undefined) rec.untimedMs = untimedMs
  if (Array.isArray(v.timed)) rec.timed = v.timed.flatMap(t => timedOf(t) ?? [])
  const returns = linesOf(v.returns)
  if (returns) rec.returns = returns
  if (typeof v.failed === 'string') rec.failed = v.failed
  const misses = problemsOf(v.misses)
  if (misses) rec.misses = misses
  const { missFrom } = v
  if (missFrom === 'untimed' || missFrom === 'timed' || missFrom === 'return') rec.missFrom = missFrom
  if (typeof v.missDay === 'string') rec.missDay = v.missDay
  if (isRecord(v.shown)) {
    /** @type {Record<string, number>} */
    const shown = {}
    for (const [k, t] of Object.entries(v.shown)) {
      const at = finite(t)
      if (at !== undefined) shown[k] = at
    }
    rec.shown = shown
  }
  const sum = finite(v.sum)
  if (sum !== undefined) rec.sum = sum
  const next = problemsOf(v.next)
  if (next) rec.next = next
  return rec
}

/**
 * @param {unknown} v
 * @returns {readonly number[] | undefined}
 */
const numbersOf = v => (Array.isArray(v) && v.every(x => finite(x) !== undefined) ? v.map(Number) : undefined)

/**
 * @param {unknown} v
 * @returns {Bar | undefined}
 */
function barOf(v) {
  if (!isRecord(v) || typeof v.name !== 'string' || typeof v.ok !== 'boolean') return undefined
  const value = finite(v.value)
  const limit = finite(v.limit)
  if (value === undefined || limit === undefined) return undefined
  return { name: v.name, ok: v.ok, value, limit, ...(v.ratio === true ? { ratio: true } : {}), ...(v.mean === true ? { mean: true } : {}) }
}

/**
 * @param {unknown} v
 * @returns {SheetResult | undefined}
 */
function resultOf(v) {
  if (!isRecord(v)) return undefined
  const errors = finite(v.errors)
  const ms = finite(v.ms)
  if (errors === undefined || ms === undefined || !Array.isArray(v.bars)) return undefined
  const bar = finite(v.bar)
  return {
    errors,
    ms,
    bars: v.bars.flatMap(b => barOf(b) ?? []),
    ...(bar === undefined ? {} : { bar }),
    ...(typeof v.passed === 'boolean' ? { passed: v.passed } : {})
  }
}

/**
 * A stored sheet of the shape a sheet has, or undefined; whether it can still be worked is
 * `sheetHeld`'s to say.
 * @param {unknown} v
 * @returns {EndSheet | undefined}
 */
function sheetOf(v) {
  if (!isRecord(v) || !isLineId(v.line)) return undefined
  const { kind, phase } = v
  if (kind !== 'untimed' && kind !== 'timed' && kind !== 'return' && kind !== 'misses') return undefined
  if (phase !== 'work' && phase !== 'retype') return undefined
  const problems = problemsOf(v.problems)
  const ms = numbersOf(v.ms)
  const toEstimate = numbersOf(v.toEstimate)
  const at = finite(v.at)
  const i = finite(v.i)
  const j = finite(v.j)
  const ri = finite(v.ri)
  const rj = finite(v.rj)
  if (!problems?.length || !ms || !toEstimate || at === undefined || typeof v.day !== 'string') return undefined
  if (i === undefined || j === undefined || ri === undefined || rj === undefined) return undefined
  if (!Array.isArray(v.typed) || !Array.isArray(v.retype)) return undefined
  const typed = v.typed.map(t => (Array.isArray(t) ? t.map(x => (typeof x === 'string' ? x : '')) : []))
  const retype = v.retype.map(t => numbersOf(t) ?? [])
  const result = resultOf(v.result)
  return {
    line: v.line,
    kind,
    problems,
    i,
    j,
    typed,
    ms,
    toEstimate,
    at,
    day: v.day,
    ...(v.reveal === true ? { reveal: true } : {}),
    phase,
    ri,
    rj,
    retype,
    ...(result ? { result } : {})
  }
}

/**
 * The end level as stored, read into its types: a field missing or not of its shape reads as not
 * there, so a damaged field reads as not done.
 * @param {unknown} json
 * @returns {EndRecord}
 */
export function decodeEnd(json) {
  if (!isRecord(json)) return {}
  /** @type {Partial<Record<import('./end-lines.logic.js').LineId, LineRecord>>} */
  const lines = {}
  if (isRecord(json.lines))
    for (const id of LINE_IDS) {
      const rec = lineRecordOf(json.lines[id])
      if (rec) lines[id] = rec
    }
  const { spent } = json
  const sheet = sheetOf(json.sheet)
  return {
    lines,
    ...(isRecord(spent) && typeof spent.day === 'string' && finite(spent.seconds) !== undefined
      ? { spent: { day: spent.day, seconds: Number(spent.seconds) } }
      : {}),
    ...(sheet ? { sheet } : {})
  }
}

// ---------------------------------------------------------------- the gate

/**
 * A line passed (Facts passed, read for a line): `clean` is set, and a timed sheet after it met
 * the first pass; the last timed sheet after it has no errors. A return with errors does not
 * count until its missed problems decide it.
 * @param {LineRecord | undefined} rec
 */
export function linePassed(rec) {
  if (!rec?.clean) return false
  const { clean } = rec
  const after = (rec.timed ?? []).filter(t => t.time > clean && !t.slip)
  const last = after.at(-1)
  return last !== undefined && last.errors === 0 && after.some(t => t.pass === true)
}

/**
 * Seconds of end-level drill today: a day holds one block.
 * @param {EndRecord} end
 * @param {string} today
 */
const drillSeconds = (end, today) => (end.spent?.day === today ? end.spent.seconds : 0)

/**
 * What a line offers today: an untimed sheet, a timed sheet, a return, a sheet of missed
 * problems, or nothing. A return's missed problems decide it the day after; a drill sheet's count
 * toward the day's block.
 * @param {EndRecord} end
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {string} today
 * @returns {SheetKind | null}
 */
export function lineStep(end, id, today) {
  /** @type {LineRecord} */
  const rec = end.lines?.[id] ?? {}
  if (rec.misses?.length) {
    if (rec.missFrom === 'return') return (rec.missDay ?? '') < today ? 'misses' : null
    return drillSeconds(end, today) < HOUR_MS / 1000 ? 'misses' : null
  }
  if (linePassed(rec)) return isDue(rec.returns, today) ? 'return' : null
  if (rec.failed === today) return null
  if (drillSeconds(end, today) >= HOUR_MS / 1000) return null
  return rec.clean ? 'timed' : 'untimed'
}

/**
 * The line in hand today: the first in order with a sheet to work, and its kind.
 * @param {EndRecord} end
 * @param {string} today
 * @returns {{ line: import('./end-lines.logic.js').LineId, kind: SheetKind } | null}
 */
export function lineInHand(end, today) {
  for (const line of LINE_IDS) {
    const kind = lineStep(end, line, today)
    if (kind) return { line, kind }
  }
  return null
}

/**
 * The day a line is next due: the day after a return's misses while they wait, else its next date.
 * @param {LineRecord | undefined} rec
 */
export const lineNext = rec =>
  rec?.missFrom === 'return' && rec.misses?.length && rec.missDay ? addDays(rec.missDay, 1) : nextOf(rec?.returns)

/**
 * How many lines have a drill sheet today (not yet passed).
 * @param {EndRecord} end
 * @param {string} today
 */
export const drillLines = (end, today) =>
  LINE_IDS.filter(id => {
    const k = lineStep(end, id, today)
    return k === 'untimed' || k === 'timed' || (k === 'misses' && !linePassed(end.lines?.[id]))
  }).length

/** @param {EndRecord} end */
export const linesPassed = end => LINE_IDS.filter(id => linePassed(end.lines?.[id])).length

/**
 * The end level passed: every line has its first dated line and stands passed.
 * @param {EndRecord} end
 */
export const endPassed = end => linesPassed(end) === LINE_IDS.length

/**
 * A stored sheet that can still be worked today: a checked sheet stays readable on its day.
 * @param {EndSheet | undefined} sheet
 * @param {EndRecord} end
 * @param {string} today
 * @returns {sheet is EndSheet}
 */
export function sheetHeld(sheet, end, today) {
  if (!sheet || sheet.typed.length !== sheet.problems.length || sheet.i > sheet.problems.length) return false
  if (sheet.result) return sheet.day === today
  const step = lineStep(end, sheet.line, today)
  if (sheet.kind === 'misses') return step === 'misses'
  if (sheet.kind === 'untimed') return step === 'untimed'
  return step === 'timed' || step === 'return'
}

// ---------------------------------------------------------------- beginning a sheet

/**
 * @template T
 * @param {readonly T[]} items
 * @param {() => number} random
 */
function shuffle(items, random) {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const k = Math.floor(random() * (i + 1))
    const a = out[i]
    const b = out[k]
    if (a !== undefined && b !== undefined) {
      out[i] = b
      out[k] = a
    }
  }
  return out
}

/**
 * The problems of a line's new sheet and the line's record after the draw: a pace line's fixed
 * sheet shuffled; a sheet of missed problems those missed, once each; for a generated line an
 * untimed sheet drawn with its first timed sheet, that timed sheet, a later timed sheet with the
 * pass's sum, or a return drawn new; each drawn problem marked shown.
 * @param {LineRecord} rec
 * @param {import('./end-lines.logic.js').LineId} line
 * @param {SheetKind} kind
 * @param {number} seed
 * @param {number} nowMs
 * @returns {{ problems: readonly import('./end-lines.logic.js').Problem[], rec: LineRecord }}
 */
function drawFor(rec, line, kind, seed, nowMs) {
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648
    return seed / 2147483648
  }
  if (kind === 'misses') return { problems: rec.misses ?? [], rec }
  if (lineOf(line).kind === 'pace')
    return { problems: shuffle(paceItems(line).map((_, i) => [i]), random), rec }
  const shown = rec.shown ?? {}
  /** @param {readonly (readonly import('./end-lines.logic.js').Problem[])[]} sheets */
  const mark = sheets => {
    /** @type {Record<string, number>} */
    const out = { ...shown }
    for (const s of sheets) for (const p of s) out[poolKey(p)] = nowMs
    return out
  }
  if (kind === 'untimed') {
    const pair = drawPair(line, shown, seed)
    return {
      problems: pair.untimed,
      rec: { ...rec, shown: mark([pair.untimed, pair.timed]), sum: pair.sum, next: pair.timed }
    }
  }
  if (kind === 'timed' && rec.next?.length) {
    const { next, ...rest } = rec
    return { problems: next, rec: rest }
  }
  const drawn = drawSheet(line, shown, seed, kind === 'timed' ? rec.sum : undefined).problems
  return { problems: drawn, rec: { ...rec, shown: mark([drawn]) } }
}

/**
 * A new sheet in hand.
 * @param {import('./end-lines.logic.js').LineId} line
 * @param {SheetKind} kind
 * @param {readonly import('./end-lines.logic.js').Problem[]} problems
 * @param {number} nowMs
 * @param {string} day
 * @returns {EndSheet}
 */
export const startSheet = (line, kind, problems, nowMs, day) => ({
  line,
  kind,
  problems,
  i: 0,
  j: 0,
  typed: problems.map(p => entriesOf(line, p).map(() => '')),
  ms: problems.map(() => 0),
  toEstimate: problems.map(() => 0),
  at: nowMs,
  day,
  phase: 'work',
  ri: 0,
  rj: 0,
  retype: problems.map(p => entriesOf(line, p).map(() => 0))
})

// ---------------------------------------------------------------- working a sheet

/**
 * The time between two keys, all of it: a problem is clocked from its appearance to its last key.
 * Time with the page closed is not on it, since a return restarts the clock (`end-return`).
 * @param {number} from
 * @param {number} nowMs
 */
const gap = (from, nowMs) => Math.max(0, nowMs - from)

/**
 * @param {readonly number[]} xs
 * @param {number} i
 * @param {number} add
 */
const plus = (xs, i, add) => xs.map((x, k) => (k === i ? x + add : x))

/**
 * A key in the entry in hand: the entry as now typed, its problem's clock run to this key.
 * @param {EndSheet} s
 * @param {string} value
 * @param {number} nowMs
 * @returns {EndSheet}
 */
function typeEntry(s, value, nowMs) {
  if (s.phase !== 'work' || s.reveal || s.result || s.i >= s.problems.length) return s
  const typed = s.typed.map((row, k) => (k === s.i ? row.map((x, m) => (m === s.j ? value : x)) : row))
  return { ...s, typed, ms: plus(s.ms, s.i, gap(s.at, nowMs)), at: nowMs }
}

/**
 * The first entry to retype at or after (i, j): every entry given, blanks left out.
 * @param {EndSheet} s
 * @param {number} i
 * @param {number} j
 * @returns {{ ri: number, rj: number } | null}
 */
function retypeFrom(s, i, j) {
  for (let a = i; a < s.typed.length; a++) {
    const row = s.typed[a] ?? []
    for (let b = a === i ? j : 0; b < row.length; b++) if ((row[b] ?? '').trim()) return { ri: a, rj: b }
  }
  return null
}

/**
 * The entry in hand locked by Enter, its key the last of the entry: the next entry, the next
 * problem, an estimate's product shown, or, after the last problem, the retyping.
 * @param {EndSheet} s
 * @param {number} nowMs
 * @returns {EndSheet}
 */
function lockEntry(s, nowMs) {
  if (s.phase !== 'work' || s.reveal || s.result || s.i >= s.problems.length) return s
  const ms = plus(s.ms, s.i, gap(s.at, nowMs))
  const estimate = lineOf(s.line).kind === 'estimate'
  const toEstimate = estimate && s.j === 0 ? s.toEstimate.map((x, k) => (k === s.i ? (ms[s.i] ?? 0) : x)) : s.toEstimate
  const width = s.typed[s.i]?.length ?? 1
  if (s.j + 1 < width) return { ...s, ms, toEstimate, j: s.j + 1, at: nowMs }
  if (estimate) return { ...s, ms, toEstimate, reveal: true, at: nowMs }
  return nextProblem({ ...s, ms, toEstimate }, nowMs)
}

/**
 * The next problem appears, its clock starting now; after the last, the retyping.
 * @param {EndSheet} s
 * @param {number} nowMs
 * @returns {EndSheet}
 */
function nextProblem(s, nowMs) {
  const { reveal: _reveal, ...rest } = s
  const i = s.i + 1
  if (i < s.problems.length) return { ...rest, i, j: 0, at: nowMs }
  // a sheet of missed problems is not retyped: retyping follows the untimed and timed sheets
  const first = s.kind === 'misses' ? null : retypeFrom(s, 0, 0)
  return { ...rest, i, j: 0, at: nowMs, phase: 'retype', ri: first?.ri ?? s.problems.length, rj: first?.rj ?? 0 }
}

/** @param {EndSheet} s */
const retypeDone = s => s.phase === 'retype' && s.ri >= s.problems.length

/**
 * A key in the retyping: once the entry shown is typed as given, its time from its showing goes
 * to its problem's retyping and the next entry shows.
 * @param {EndSheet} s
 * @param {string} value
 * @param {number} nowMs
 * @returns {EndSheet}
 */
function retypeEntry(s, value, nowMs) {
  if (s.phase !== 'retype' || retypeDone(s)) return s
  const add = gap(s.at, nowMs)
  const retype = s.retype.map((row, a) => (a === s.ri ? row.map((x, b) => (b === s.rj ? x + add : x)) : row))
  const given = (s.typed[s.ri]?.[s.rj] ?? '').trim()
  if (value.trim() !== given) return { ...s, retype, at: nowMs }
  const next = retypeFrom(s, s.ri, s.rj + 1)
  return { ...s, retype, at: nowMs, ri: next?.ri ?? s.problems.length, rj: next?.rj ?? 0 }
}

/**
 * Each problem's time with its retyping taken off, in ms.
 * @param {EndSheet} s
 */
export const problemTimes = s =>
  s.ms.map((m, i) => Math.max(0, m - (s.retype[i] ?? []).reduce((a, b) => a + b, 0)))

/**
 * Each estimate's time to the estimate, its retyping taken off, in ms.
 * @param {EndSheet} s
 */
const estimateTimes = s => s.toEstimate.map((m, i) => Math.max(0, m - (s.retype[i]?.[0] ?? 0)))

/** @param {readonly number[]} xs */
function median(xs) {
  const a = [...xs].sort((x, y) => x - y)
  const n = a.length
  if (!n) return 0
  return n % 2 ? (a[(n - 1) / 2] ?? 0) : ((a[n / 2 - 1] ?? 0) + (a[n / 2] ?? 0)) / 2
}

/** @param {readonly number[]} xs */
const mean = xs => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0)

/**
 * The line's bar on a timed sheet: for a pace line, the mean time on the answers above the
 * sheet's median answer, and on the rest, each at most one step; for a product sheet, the π
 * sheet and the estimates (to the estimate), the median of time over allowance at most 1; for
 * factoring, the sheet's time at most the sum of its allowances.
 * @param {EndSheet} s
 * @returns {Bar[]}
 */
export function lineBars(s) {
  const line = lineOf(s.line)
  const times = problemTimes(s)
  const allow = s.problems.map(p => allowanceOf(s.line, p) * 10)
  /**
   * @param {string} name
   * @param {readonly number[]} t
   * @returns {Bar}
   */
  const ratioBar = (name, t) => {
    const value = median(t.map((x, i) => x / (allow[i] || 1)))
    return { name, ok: value <= 1, value, limit: 1, ratio: true }
  }
  switch (line.kind) {
    case 'pace': {
      const step = (line.step ?? 0) * 10
      const values = s.problems.map(p => answerValue(s.line, p))
      const mid = median(values)
      const above = times.filter((_, i) => (values[i] ?? 0) > mid)
      const rest = times.filter((_, i) => !((values[i] ?? 0) > mid))
      return [
        { name: 'Larger answers', ok: mean(above) <= step, value: mean(above), limit: step, mean: true },
        { name: 'Smaller answers', ok: mean(rest) <= step, value: mean(rest), limit: step, mean: true }
      ]
    }
    case 'product':
      return [ratioBar('Time', times)]
    case 'estimate':
      return [ratioBar('Time', estimateTimes(s))]
    case 'pi':
      return [ratioBar('Time', times)]
    case 'factor': {
      const value = times.reduce((a, b) => a + b, 0)
      const limit = allow.reduce((a, b) => a + b, 0)
      return [{ name: 'Total time', ok: value <= limit, value, limit }]
    }
    default:
      return unreachable(line.kind)
  }
}

/**
 * The problems of a sheet with a wrong or blank entry, and the count of wrong entries.
 * @param {EndSheet} s
 */
export function sheetErrors(s) {
  /** @type {import('./end-lines.logic.js').Problem[]} */
  const missed = []
  let errors = 0
  s.problems.forEach((p, i) => {
    const wrong = entriesRight(s.line, p, s.typed[i] ?? []).filter(r => !r).length
    errors += wrong
    if (wrong) missed.push(p)
  })
  return { missed, errors }
}

// ---------------------------------------------------------------- recording a sheet

/** A line's record being written. @typedef {{ -readonly [K in keyof LineRecord]: LineRecord[K] }} LineDraft */

/**
 * @param {LineDraft} rec
 * @param {readonly import('./end-lines.logic.js').Problem[]} missed
 * @param {string} today
 * @param {'untimed' | 'timed' | 'return'} [kind]
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
 * The line's record after a checked sheet, and the sheet's result. A sheet of missed problems,
 * all right, counts for the sheet they were missed on; a return's problem missed again writes a
 * wrong line and sends the line back to drill. An untimed sheet's time is the bar; it is clean
 * once its problems are all right. A timed sheet passes with no errors, no slower than the bar
 * and inside the line's own bar, and the passing sheet is the first dated line; on a return only
 * errors count.
 * @param {LineRecord} before
 * @param {EndSheet} s
 * @param {number} nowMs
 * @param {string} today
 * @returns {{ rec: LineRecord, result: SheetResult }}
 */
function recordSheet(before, s, nowMs, today) {
  /** @type {LineDraft} */
  const rec = { ...before }
  const wasPassed = linePassed(before)
  const { missed, errors } = sheetErrors(s)
  const ms = problemTimes(s).reduce((a, b) => a + b, 0)
  if (s.kind === 'misses') {
    const from = rec.missFrom
    if (!missed.length) {
      keepMisses(rec, missed, today)
      if (from === 'untimed') {
        rec.clean = nowMs
        rec.cleanMs = rec.untimedMs ?? ms
      }
      if (from === 'return') rec.returns = writeLine(rec.returns, true, today, RETENTION.exact)
    } else if (from === 'return') {
      keepMisses(rec, missed, today)
      rec.returns = writeLine(rec.returns, false, today, RETENTION.exact)
      rec.clean = null
      rec.failed = today
    } else keepMisses(rec, missed, today, from)
    return { rec, result: { errors, ms, bars: [] } }
  }
  if (s.kind === 'untimed') {
    rec.untimedMs = ms
    if (!errors) {
      rec.clean = nowMs
      rec.cleanMs = ms
    }
    keepMisses(rec, missed, today, 'untimed')
    return { rec, result: { errors, ms, bars: [] } }
  }
  if (wasPassed) {
    const slip = errors > 0
    rec.timed = [...(rec.timed ?? []), { time: nowMs, ms, errors, ...(slip ? { slip } : {}) }]
    if (!errors) rec.returns = writeLine(rec.returns, true, today, RETENTION.exact)
    keepMisses(rec, missed, today, 'return')
    return { rec, result: { errors, ms, bars: [], passed: !errors } }
  }
  const bars = lineBars(s)
  const bar = rec.cleanMs
  const pass = !errors && (bar === undefined || ms <= bar) && bars.every(b => b.ok)
  rec.timed = [...(rec.timed ?? []), { time: nowMs, ms, errors, ...(pass ? { pass } : {}) }]
  if (pass) {
    rec.returns = [{ date: today, right: true, next: addDays(today, 1) }]
    delete rec.sum
    delete rec.next
  }
  keepMisses(rec, missed, today, 'timed')
  return { rec, result: { errors, ms, bars, ...(bar === undefined ? {} : { bar }), passed: pass } }
}

/**
 * The seconds a sheet counts toward the day's block: its clocked work and its retyping.
 * @param {EndSheet} s
 */
const workSeconds = s =>
  Math.round(
    (s.ms.reduce((a, b) => a + b, 0) + s.retype.reduce((a, row) => a + row.reduce((x, y) => x + y, 0), 0)) / 1000
  )

/**
 * The end level after the sheet in hand is checked, once its retyping is done.
 * @param {EndRecord} end
 * @param {number} nowMs
 * @param {string} today
 * @returns {EndRecord}
 */
function checkSheet(end, nowMs, today) {
  const s = end.sheet
  if (!s || s.result || !retypeDone(s)) return end
  const before = end.lines?.[s.line] ?? {}
  const { rec, result } = recordSheet(before, s, nowMs, today)
  const seconds = drillSeconds(end, today) + (linePassed(before) ? 0 : workSeconds(s))
  return {
    ...end,
    lines: { ...end.lines, [s.line]: rec },
    spent: { day: today, seconds },
    sheet: { ...s, result, day: today }
  }
}

// ---------------------------------------------------------------- moves

/**
 * A move on the end level.
 * @typedef {Readonly<
 *   | { t: 'end-begin', seed: number, nowMs: number, day: string }
 *   | { t: 'end-type', value: string, nowMs: number }
 *   | { t: 'end-enter', nowMs: number, day: string }
 *   | { t: 'end-next', nowMs: number, day: string }
 *   | { t: 'end-retype', value: string, nowMs: number, day: string }
 *   | { t: 'end-return', nowMs: number }
 *   | { t: 'end-done' }
 *   | { t: 'end-drop' }
 * >} EndEvent
 */

/**
 * The end level with its sheet changed, checked once its retyping is done.
 * @param {EndRecord} end
 * @param {(s: EndSheet) => EndSheet} change
 * @param {number} nowMs
 * @param {string} day
 * @returns {EndRecord}
 */
function changeSheet(end, change, nowMs, day) {
  if (!end.sheet || end.sheet.result) return end
  const sheet = change(end.sheet)
  if (sheet === end.sheet) return end
  const next = { ...end, sheet }
  return retypeDone(sheet) ? checkSheet(next, nowMs, day) : next
}

/**
 * One move on the end level: the record it leaves.
 * @param {EndRecord} end
 * @param {EndEvent} move
 * @returns {EndRecord}
 */
export function endStep(end, move) {
  switch (move.t) {
    case 'end-begin': {
      const hand = lineInHand(end, move.day)
      if (!hand || (end.sheet && !end.sheet.result)) return end
      const { problems, rec } = drawFor(end.lines?.[hand.line] ?? {}, hand.line, hand.kind, move.seed, move.nowMs)
      return {
        ...end,
        lines: { ...end.lines, [hand.line]: rec },
        sheet: startSheet(hand.line, hand.kind, problems, move.nowMs, move.day)
      }
    }
    case 'end-type':
      return changeSheet(end, s => typeEntry(s, move.value, move.nowMs), move.nowMs, '')
    case 'end-enter':
      return changeSheet(end, s => lockEntry(s, move.nowMs), move.nowMs, move.day)
    case 'end-next':
      return changeSheet(end, s => (s.reveal ? nextProblem(s, move.nowMs) : s), move.nowMs, move.day)
    case 'end-retype':
      return changeSheet(end, s => retypeEntry(s, move.value, move.nowMs), move.nowMs, move.day)
    case 'end-return':
      return end.sheet && !end.sheet.result ? { ...end, sheet: { ...end.sheet, at: move.nowMs } } : end
    case 'end-done':
    case 'end-drop': {
      const { sheet: _sheet, ...rest } = end
      return rest
    }
    default:
      return unreachable(move)
  }
}
