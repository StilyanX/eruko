// Hides: gate 2 of the C++ unit ("A Self-Study System", Programming, The steps: Gate 2; Running
// it: The contest, A change of series or method; The first stage: First reading; Kinds, first runs,
// and readings against noise: Noise line; The build, Programming, The checks: First reading,
// Gate 2): when a reading falls due, what it reads (the mean and standard deviation of 10 rated
// performances, and the share of never-tried problems right at the first submit in mixed
// practice), whether either dropped past its noise line, and the reading screen's lines. A
// reading is shown and holds nothing: new kinds open as gate 3 allows.
import { daysBetween } from '../../../kernel/days.logic.js'

/** The rated contests a window holds, and the days after which a window closes with fewer. */
const WINDOW = 10
const WINDOW_DAYS = 70
/** The first reading: contests 2 to 11, or 11 weeks after the start gate opened. */
const FIRST_DAYS = 77

/**
 * The standard error of a share p right out of n tries.
 * @param {number} p
 * @param {number} n
 */
const shareError = (p, n) => Math.sqrt((p * (1 - p)) / n)

/**
 * The noise line for two shares: twice the error of their difference, or null when either side
 * has fewer than two tries or the error is 0, and the reading then says none.
 * @param {Readonly<{ p: number, n: number }>} now
 * @param {Readonly<{ p: number, n: number }>} last
 */
export function shareLine(now, last) {
  if (now.n < 2 || last.n < 2) return null
  const error = Math.sqrt(shareError(now.p, now.n) ** 2 + shareError(last.p, last.n) ** 2)
  return error === 0 ? null : 2 * error
}

/**
 * ln Γ(x) for x ≥ 0.5, by Lanczos' series (g = 7, nine terms).
 * @param {number} x
 */
function lnGamma(x) {
  const c = [
    676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
    12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
  ]
  const z = x - 1
  const sum = c.reduce((a, ci, i) => a + ci / (z + i + 1), 0.99999999999980993)
  const t = z + 7.5
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(sum)
}

/**
 * The regularized incomplete beta function I_x(a, b), by its continued fraction (Lentz).
 * @param {number} x
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function betaI(x, a, b) {
  if (x <= 0) return 0
  if (x >= 1) return 1
  if (x > (a + 1) / (a + b + 2)) return 1 - betaI(1 - x, b, a)
  const front =
    Math.exp(lnGamma(a + b) - lnGamma(a) - lnGamma(b) + a * Math.log(x) + b * Math.log(1 - x)) / a
  const tiny = 1e-300
  let f = 1
  let c = 1
  let d = 0
  for (let i = 0; i <= 400; i++) {
    const m = Math.floor(i / 2)
    const step =
      i === 0
        ? 1
        : i % 2 === 0
          ? (m * (b - m) * x) / ((a + 2 * m - 1) * (a + 2 * m))
          : -((a + m) * (a + b + m) * x) / ((a + 2 * m) * (a + 2 * m + 1))
    d = 1 + step * d
    d = 1 / (Math.abs(d) < tiny ? tiny : d)
    c = 1 + step / c
    c = Math.abs(c) < tiny ? tiny : c
    f *= c * d
    if (Math.abs(1 - c * d) < 1e-15) break
  }
  return front * (f - 1)
}

/**
 * The two-sided 5% point of Student's t with `df` degrees of freedom, a whole number or not:
 * the t at which P(T ≤ t) is 0.975, found by halving.
 * @param {number} df
 */
export function tPoint(df) {
  /** @param {number} t */
  const upper = t => 0.5 * betaI(df / (df + t * t), df / 2, 0.5)
  let lo = 0
  let hi = 1000
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2
    if (upper(mid) > 0.025) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

/**
 * The noise line for two means of fewer than 30 values each: the error of their difference times
 * Student's t at Welch's degrees of freedom; null when either side has fewer than two values or
 * the error is 0, and the reading then says none.
 * @param {Readonly<{ sd: number, n: number }>} now
 * @param {Readonly<{ sd: number, n: number }>} last
 */
export function meanLine(now, last) {
  if (now.n < 2 || last.n < 2) return null
  const a = now.sd ** 2 / now.n
  const b = last.sd ** 2 / last.n
  if (a + b === 0) return null
  const df = (a + b) ** 2 / (a ** 2 / (now.n - 1) + b ** 2 / (last.n - 1))
  return Math.sqrt(a + b) * tPoint(df)
}

/**
 * The mean and the standard deviation, with one less than the count in its divisor.
 * @param {readonly number[]} values
 */
export function meanSd(values) {
  const mean = values.reduce((s, v) => s + v, 0) / values.length
  const sd = Math.sqrt(values.reduce((s, v) => s + (v - mean) ** 2, 0) / (values.length - 1))
  return { mean, sd }
}

/**
 * Whether a reading starts gate 2 afresh: the first, or the first after a change of series or
 * method (`server.from` on or after the last reading's day).
 * @param {Pick<import('./decode.logic.js').CppRecord, 'server'>} record
 * @param {import('./decode.logic.js').Reading | undefined} last
 */
const restarts = (record, last) => !last || (record.server?.from ?? '') >= last.date

/**
 * The window of the reading due on `day`, or null when none is due: `contests` its performances
 * (the last 10 since the last reading, or fewer once 10 weeks have passed) and `since` the day
 * after which its mixed first tries count ('' for every one).
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 */
function windowOf(record, day) {
  const last = record.readings.at(-1)
  const from = record.server?.from ?? ''
  const changed = last ? restarts(record, last) : from > record.practice
  if (!last && !changed) {
    // the first reading: contests 2 to 11, or what stands 11 weeks after the start gate opened
    const after = record.contests.slice(1, WINDOW + 1)
    if (after.length === WINDOW) return { contests: after, since: '' }
    return daysBetween(record.practice, day) >= FIRST_DAYS ? { contests: [], since: '' } : null
  }
  const start = changed ? from : (last?.date ?? '')
  const since = record.contests.filter(c => c.date > start)
  const since10 = changed ? since.slice(0, WINDOW) : since.slice(-WINDOW)
  if (since10.length === WINDOW) return { contests: since10, since: last?.date ?? '' }
  return daysBetween(start, day) >= WINDOW_DAYS
    ? { contests: since, since: last?.date ?? '' }
    : null
}

/**
 * The reading due on `day`, added, or the record as it was when none is due. Performance is
 * read only from 10 performances, against a last reading that read 10; solving from the mixed
 * first tries since the last reading. Either lower than the last past its noise line holds the
 * reading; the first, and the first after a change, only set where each starts.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
export function withReading(record, day) {
  if (!record.practice) return record
  const window = windowOf(record, day)
  if (!window) return record
  const last = record.readings.at(-1)
  // the mixed first tries no reading has counted yet, by their place in `tries`, so a try made
  // on a reading's day after the record was pasted counts in the next reading, never in none
  const counted = record.readings.reduce((sum, r) => sum + r.n, 0)
  const tries = record.tries.filter(t => t.mixed).slice(counted)
  const n = tries.length
  const p = n ? tries.filter(t => t.right).length / n : 0
  const read =
    window.contests.length === WINDOW ? meanSd(window.contests.map(c => c.performance)) : null
  let held = false
  if (last && !restarts(record, last)) {
    const sl = shareLine({ p, n }, last)
    if (sl !== null && last.p - p > sl) held = true
    const ml =
      read && last.mean !== null && last.sd !== null
        ? meanLine({ sd: read.sd, n: WINDOW }, { sd: last.sd, n: WINDOW })
        : null
    if (read && ml !== null && last.mean !== null && last.mean - read.mean > ml) held = true
  }
  /** @type {import('./decode.logic.js').Reading} */
  const reading = {
    date: day,
    mean: read?.mean ?? null,
    sd: read?.sd ?? null,
    p,
    n,
    state: held ? 'held' : 'open'
  }
  return { ...record, readings: [...record.readings, reading] }
}

/**
 * The reading screen's lines for the last reading, in the paper's words: the performance, the
 * first submits right, each beside the last where the last was read, then what the reading
 * says. Before the first reading: each performance as read, and "Not settled."
 * @param {import('./decode.logic.js').CppRecord} record
 * @returns {string[]}
 */
export function readingLines(record) {
  const now = record.readings.at(-1)
  if (!now)
    return [
      ...record.contests.map(c => `${c.contest}: performance ${c.performance}.`),
      'Not settled.'
    ]
  const before = record.readings.at(-2)
  // a change typed on the day of the last reading came after it, as the record is pasted first
  const from = record.server?.from ?? ''
  const last = before && !(from >= before.date && from < now.date) ? before : undefined
  const r = Math.round
  /** @param {import('./decode.logic.js').Reading} x */
  const right = x => `${r(x.p * x.n)} of ${x.n}`
  const lastMean = last && last.mean !== null ? ` Last ${r(last.mean)}.` : ''
  const performance =
    now.mean === null
      ? 'Performance not read: fewer than 10 contests.'
      : `Performance ${r(now.mean)}, last 10 contests.${lastMean}`
  const solving = `Right at the first submit: ${right(now)}.${last ? ` Last: ${right(last)}.` : ''}`
  const says =
    now.state === 'held'
      ? 'Your performance or your first submits in mixed practice dropped since the last reading. New kinds stay open.'
      : 'No drop since the last reading. New kinds stay open.'
  return [performance, solving, says]
}
