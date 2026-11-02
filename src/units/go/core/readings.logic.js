// Hides: gate 2 of the Go unit, from "A Self-Study System" (Go, The steps; Kinds, first runs, and
// readings against noise; The build, Go, The checks): after every 15 rated games the rating arm
// reads the server's rating against the reading 45 games before, and the solve arm the share of
// first tries right in mixed practice against the last share. A reading lower than its last by
// more than the noise line is marked as a drop. A reading is information for the learner: it
// never holds new kinds. The end level (The end level) is read from the same readings and stores
// nothing. Pure functions, tested in tests/go-readings.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'

/** The games between two readings, and how far back the rating arm looks. */
export const EVERY_GAMES = 15
const BACK_GAMES = 45
/** The first line is set at a reading whose deviation is this or less. */
const SETTLED = 70

/**
 * The standard error of a share p right out of n tries.
 * @param {number} p
 * @param {number} n
 */
const shareError = (p, n) => Math.sqrt((p * (1 - p)) / n)

/**
 * The noise line for two shares: twice the error of their difference, or null when either side
 * has fewer than two tries or the error is 0, and the reading then says none.
 * @param {import('./decode.logic.js').Share} now
 * @param {import('./decode.logic.js').Share} last
 */
export function shareLine(now, last) {
  if (now.n < 2 || last.n < 2) return null
  const error = Math.sqrt(shareError(now.p, now.n) ** 2 + shareError(last.p, last.n) ** 2)
  return error === 0 ? null : 2 * error
}

/**
 * The noise line for two ratings: twice the square root of the sum of their squared deviations.
 * @param {number} d1
 * @param {number} d0
 */
export const ratingLine = (d1, d0) => 2 * Math.sqrt(d1 ** 2 + d0 ** 2)

/**
 * A count of first tries as a share: `{ p, n, right }`.
 * @param {{ right: boolean }[]} tries
 */
const share = tries => {
  const right = tries.filter(t => t.right).length
  return { p: tries.length ? right / tries.length : 0, n: tries.length, right }
}

/**
 * The readings a new one may be compared against: none marked as before a forced change.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings'>} record
 */
const live = record => record.readings.filter(x => !x.before)

/**
 * The solve arm's two windows, recounted from `tries`: the mixed first tries on the kinds
 * already retired at the last reading, since that reading and in the window before it.
 * `kindOf(id)` gives a problem's kind.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings' | 'course' | 'tries'>} record
 * @param {(id: string) => import('./decode.logic.js').KindId | undefined} kindOf
 */
export function solveWindows(record, kindOf) {
  const all = live(record)
  const last = all.at(-1)
  if (!last) return null
  const before = all.at(-2)
  const retired = new Set(
    record.course.flatMap(c => ('kind' in c && c.retired && c.retired <= last.date ? [c.kind] : []))
  )
  const mixed = record.tries.filter(t => {
    const kind = kindOf(t.id)
    return t.mixed && kind !== undefined && retired.has(kind)
  })
  return {
    // a reading's own day belongs to the window it closes, so no try is counted in two windows
    now: share(mixed.filter(t => t.date > last.date)),
    then: share(mixed.filter(t => t.date <= last.date && (!before || t.date > before.date)))
  }
}

/**
 * The reading made at `games` rated games, from the rating and deviation read from the server:
 * the record with the reading added, and the first line set when it is not yet and the
 * deviation is 70 or less. `p` and `n` are the share right and the count of mixed first tries
 * since the last reading, on the kinds retired at that reading, and `then` the same two for the
 * window before it: the numbers the solve arm compares and the reading screen shows. `state` is
 * `held` when either arm reads lower than its last by more than its noise line, and `open`
 * otherwise; the first reading, and the first after a forced change, only store their numbers.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {(id: string) => import('./decode.logic.js').KindId | undefined} kindOf
 * @param {{ date: string, games: number, rating: number, deviation: number }} read
 * @returns {import('./decode.logic.js').GoRecord}
 */
export function withReading(record, kindOf, { date, games, rating, deviation }) {
  const all = live(record)
  const last = all.at(-1)
  let { p, n } = share(record.tries.filter(t => t.mixed))
  /** @type {import('./decode.logic.js').Share | null} */
  let then = null
  let held = false
  if (last) {
    const w = solveWindows(record, kindOf)
    assert(w, 'A last reading stands, so the solve windows exist')
    ;({ p, n } = w.now)
    then = { p: w.then.p, n: w.then.n }
    const line = shareLine(w.now, w.then)
    if (line !== null && w.then.p - w.now.p > line) held = true
    const back = backOf(record, all, games)
    if (back && back.rating - rating > ratingLine(deviation, back.deviation)) held = true
  }
  /** @type {import('./decode.logic.js').Reading} */
  const reading = {
    date,
    games,
    rating,
    deviation,
    p,
    n,
    ...(then ? { then } : {}),
    state: held ? 'held' : 'open'
  }
  const first = record.first ?? (deviation <= SETTLED ? { date, rating, deviation, games } : null)
  return { ...record, readings: [...record.readings, reading], first }
}

/**
 * The reading the rating arm compares with: the one 45 games before, once that is at or after the first line.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'first'>} record
 * @param {readonly import('./decode.logic.js').Reading[]} all
 * @param {number} games
 */
const backOf = (record, all, games) =>
  record.first && games - record.first.games >= BACK_GAMES
    ? all.find(x => x.games === games - BACK_GAMES)
    : undefined

/**
 * A difference with its sign: "+6", "−70", "0".
 * @param {number} x
 */
const signed = x => (x === 0 ? '0' : `${x < 0 ? '−' : '+'}${Math.abs(x)}`)

/**
 * The reading screen's one plain line for the last reading: kept as the first to compare with,
 * no drop, or a drop. Its numbers sit behind it (readingLines). New kinds stay open either way.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings'>} record
 */
export function readingSummary(record) {
  const now = record.readings.at(-1)
  if (!now) return ''
  if (!now.then)
    return 'Eruko keeps this reading and compares the next one with it. New kinds stay open.'
  return now.state === 'held'
    ? 'Your rating or your first answers in mixed practice dropped since the last reading. New kinds stay open.'
    : 'No drop since the last reading. New kinds stay open.'
}

/**
 * The reading screen's numbers for the last reading, behind its plain line: each arm of gate 2 with the two numbers it
 * compares, their difference and its noise line, the share in points of 100; then the gain
 * since the first line beside its own line, which gate 2 does not read. Before the first line:
 * the rating and deviation as read, and "Not settled."
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings' | 'first'>} record
 * @returns {string[]}
 */
export function readingLines(record) {
  const now = record.readings.at(-1)
  if (!now) return []
  const r = Math.round
  /** @param {import('./decode.logic.js').Share} x */
  const points = x => r(x.p * 100)
  /** @param {import('./decode.logic.js').Share} x */
  const right = x => (x.n ? `${r(x.p * x.n)} of ${x.n}, ${points(x)} points` : '0 of 0')
  const tries = [`Right at the first try: ${right(now)}.`]
  if (!now.before && now.then) {
    const line = shareLine(now, now.then)
    tries[0] = `Right at the first try: ${right(now)}. Last: ${right(now.then)}.`
    tries.push(
      `Difference: ${signed(points(now) - points(now.then))}. Noise line: ${line === null ? 'none' : r(line * 100)}.`
    )
  }
  if (!record.first)
    return [`Rating ${r(now.rating)}.`, `Deviation ${r(now.deviation)}.`, 'Not settled.', ...tries]
  const back = now.before ? undefined : backOf(record, live(record), now.games)
  const lines = back
    ? [
        `Rating ${r(now.rating)}. 45 games ago: ${r(back.rating)}.`,
        `Deviation ${r(now.deviation)}. 45 games ago: ${r(back.deviation)}.`,
        `Difference: ${signed(r(now.rating) - r(back.rating))}. Noise line: ${r(ratingLine(now.deviation, back.deviation))}.`
      ]
    : [`Rating ${r(now.rating)}.`, `Deviation ${r(now.deviation)}.`]
  lines.push(...tries)
  if (now.games > record.first.games)
    lines.push(
      `Gain since the first line: ${signed(r(now.rating) - r(record.first.rating))}. Gain line: ${r(ratingLine(now.deviation, record.first.deviation))}.`
    )
  return lines
}

/**
 * A rating's rank on the server's scale: 23.15 ln(rating / 525).
 * @param {number} rating
 */
const rankOf = rating => 23.15 * Math.log(rating / 525)

/**
 * A rank as the server names it: 30 kyu at rank 0, 1 kyu at 29, 1 dan at 30.
 * @param {number} rank
 */
export const rankName = rank => (rank >= 30 ? `${rank - 29} dan` : `${30 - rank} kyu`)

/**
 * The rank range a rated game is posted for: the ranks at the shown rating minus 300 and plus
 * 300, the lower rounded down and the upper up, never below 30 kyu.
 * @param {number} rating
 */
export function rankRange(rating) {
  /**
   * @param {number} x
   * @param {(x: number) => number} round
   */
  const at = (x, round) => (x <= 525 ? 0 : Math.max(0, round(rankOf(x))))
  return {
    lower: rankName(at(rating - 300, Math.floor)),
    upper: rankName(at(rating + 300, Math.ceil))
  }
}

/** The end level's line: 7 dan, the server's rank 36, first whole rating 2,487. */
const LINE = 2487
/** The readings of a pass, in two blocks of 24, each adding to 24 ratings at the line or more. */
const WINDOW = 48
const BLOCK = 24
const BLOCK_SUM = BLOCK * LINE

/**
 * A reading as the server prints it: its rating and deviation as whole numbers, and settled by
 * the first line's own test of the deviation read.
 * @param {import('./decode.logic.js').Reading} x
 */
const printed = x => ({
  date: x.date,
  rating: Math.round(x.rating),
  deviation: Math.round(x.deviation),
  settled: x.deviation <= SETTLED
})

/**
 * The end level, read from gate 2's readings and storing nothing ("A Self-Study System", The end
 * level; The build, Go, The checks, End level). The walk takes the readings made after the first
 * line, none marked as before a forced change, oldest first, from `unpassed`, and at each applies
 * only the test of the state before it: a pass when this reading and the 47 before it, all after
 * the first line and the last withdrawal, are settled (deviation 70 or less) and the newer and
 * the older 24 each add to 59,688 or more; a withdrawal at the third reading in a row after the
 * pass whose rating plus twice its deviation is below 2,487. Before the first line, or after a
 * forced change has cleared it, the end level is unpassed with no readings.
 * `window` is the last 48 readings since the first line or the last withdrawal, or fewer while
 * fewer stand; `passed` the date of the reading at which it last became passed, or null.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings' | 'first'>} record
 */
export function endLevel(record) {
  const first = record.first
  const walk = first ? live(record).filter(x => x.games > first.games).map(printed) : []
  /** @type {string | null} */
  let passed = null
  let at = -1 // the reading at which it last became passed
  let since = 0 // the first reading after the first line or the last withdrawal
  walk.forEach((x, i) => {
    if (passed === null) {
      if (i - since + 1 < WINDOW) return
      const w = walk.slice(i - WINDOW + 1, i + 1)
      const sum = (/** @type {typeof w} */ b) => b.reduce((s, y) => s + y.rating, 0)
      if (w.every(y => y.settled) && sum(w.slice(BLOCK)) >= BLOCK_SUM && sum(w.slice(0, BLOCK)) >= BLOCK_SUM) {
        passed = x.date
        at = i
      }
    } else if (i - at >= 3 && walk.slice(i - 2, i + 1).every(y => y.rating + 2 * y.deviation < LINE)) {
      passed = null
      since = i + 1
    }
  })
  return { passed, window: walk.slice(Math.max(since, walk.length - WINDOW)) }
}

/**
 * The reading screen's end level lines, after its plain line and outside Details, once the first
 * line is set: the state, then from the 48th reading on the two means of 24 rounded down, the
 * server rank of the lower one, and while any of the 48 is not settled, how many.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'readings' | 'first'>} record
 * @returns {string[]}
 */
export function endLevelLines(record) {
  if (!record.first) return []
  const { passed, window } = endLevel(record)
  if (passed === null && window.length < WINDOW)
    return [`End level: unpassed, ${window.length} of ${WINDOW} readings.`]
  const day = (/** @type {string} */ iso) =>
    new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
  const lines = [passed === null ? 'End level: unpassed.' : `End level: passed on ${day(passed)}.`]
  const mean = (/** @type {typeof window} */ b) => Math.floor(b.reduce((s, y) => s + y.rating, 0) / BLOCK)
  const newer = mean(window.slice(BLOCK))
  const older = mean(window.slice(0, BLOCK))
  const rank = Math.max(0, Math.floor(rankOf(Math.min(newer, older))))
  lines.push(
    `Mean of the last 24 readings ${newer}.`,
    `Mean of the 24 before ${older}.`,
    `Server rank of the lower mean ${rank} (${rankName(rank)}).`
  )
  const unsettled = window.filter(y => !y.settled).length
  if (unsettled) lines.push(`${unsettled} of the 48 readings ${unsettled === 1 ? 'is' : 'are'} not settled.`)
  return lines
}
