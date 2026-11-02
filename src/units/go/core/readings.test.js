// Gate 2 ("A Self-Study System", Kinds, first runs, and readings against noise; The build, Go,
// The checks): the noise line, the solve arm, the rating arm, the first line, and the rank range.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  endLevel,
  endLevelLines,
  rankName,
  rankRange,
  ratingLine,
  readingLines,
  readingSummary,
  shareLine,
  solveWindows,
  withReading
} from './readings.logic.js'
import { recordOf } from './record.logic.js'
import { kindId } from './decode.logic.js'
import { courseFrom, typed } from '../../../../tests/lib/go-typed.mjs'

const course = courseFrom({
  parts: [],
  kinds: [
    { id: 1, name: 'a', after: [], problems: [] },
    { id: 2, name: 'b', after: [], problems: [] }
  ]
})
/** @param {string} id */
const kindOf = id => kindId(Number(id.split('.')[0]))
/**
 * @param {number} kind
 * @param {string} date
 * @param {number} right
 * @param {number} wrong
 * @returns {import('./decode.logic.js').Try[]}
 */
const tries = (kind, date, right, wrong) => typed([
  ...Array.from({ length: right }, (_, i) => ({
    id: `${kind}.r${date}${i}`,
    date,
    right: true,
    mixed: true
  })),
  ...Array.from({ length: wrong }, (_, i) => ({
    id: `${kind}.w${date}${i}`,
    date,
    right: false,
    mixed: true
  }))
])
/** @returns {import('./decode.logic.js').GoRecord} */
const base = () => {
  const r = recordOf({}, course)
  return {
    ...r,
    course: r.course.map(c => ('kind' in c ? { ...c, opened: '2026-01-01', retired: '2026-01-02' } : c))
  }
}

test("the noise line: the paper's own example reads no", () => {
  // Last window 31 of 40 right, this window 26 of 40: the error is 0.100, the drop 0.125 < 0.200.
  const line = shareLine({ p: 26 / 40, n: 40 }, { p: 31 / 40, n: 40 })
  assert.ok(line !== null)
  assert.ok(Math.abs(line - 0.2) < 0.002, String(line))
  assert.ok(31 / 40 - 26 / 40 < line)
  // fewer than two on either side, or an error of 0, reads no
  assert.equal(shareLine({ p: 1, n: 1 }, { p: 0.5, n: 10 }), null)
  assert.equal(shareLine({ p: 1, n: 10 }, { p: 1, n: 10 }), null)
  assert.ok(Math.abs(ratingLine(62, 60) - 2 * Math.sqrt(62 ** 2 + 60 ** 2)) < 1e-9)
})

test('the first solve reading only stores its numbers; a later one holds on a drop past the line', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...base(), tries: tries(1, '2026-02-01', 30, 10) }
  r = withReading(r, kindOf, { date: '2026-02-10', games: 15, rating: 700, deviation: 90 })
  assert.equal(r.readings[0]?.state, 'open')
  assert.match(readingSummary(r), /^Eruko keeps this reading/)
  assert.equal(r.readings[0]?.n, 40)
  assert.equal(r.first, null)
  assert.deepEqual(readingLines(r), [
    'Rating 700.',
    'Deviation 90.',
    'Not settled.',
    'Right at the first try: 30 of 40, 75 points.'
  ])
  // the windows are recounted from tries on the kinds retired at the last reading
  r = { ...r, tries: [...r.tries, ...tries(1, '2026-02-12', 10, 30)] }
  const windows = solveWindows(r, kindOf)
  assert.ok(windows && windows.now && windows.then)
  assert.deepEqual(windows.now.n, 40)
  assert.deepEqual(windows.then.n, 40)
  r = withReading(r, kindOf, { date: '2026-02-20', games: 30, rating: 720, deviation: 66 })
  assert.equal(r.readings[1]?.state, 'held')
  assert.match(readingSummary(r), /dropped since the last reading\. New kinds stay open\.$/)
  assert.deepEqual(r.first, { date: '2026-02-20', rating: 720, deviation: 66, games: 30 })
  // the first line is set at this reading: the solve arm shows both shares, their difference and its line
  assert.deepEqual(readingLines(r), [
    'Rating 720.',
    'Deviation 66.',
    'Right at the first try: 10 of 40, 25 points. Last: 30 of 40, 75 points.',
    'Difference: −50. Noise line: 19.'
  ])
})

test('a drop inside the noise line reads no, and tries on a kind retired later are not counted', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...base(), tries: tries(1, '2026-02-01', 31, 9) }
  r = withReading(r, kindOf, { date: '2026-02-10', games: 15, rating: 700, deviation: 60 })
  r = {
    ...r,
    tries: [...r.tries, ...tries(1, '2026-02-12', 26, 14), ...tries(2, '2026-02-12', 0, 30)]
  }
  r = { ...r, course: r.course.map(c => ('kind' in c && c.kind === 2 ? { ...c, retired: '2026-02-11' } : c)) }
  r = withReading(r, kindOf, { date: '2026-02-20', games: 30, rating: 700, deviation: 60 })
  assert.equal(r.readings[1]?.state, 'open')
})

test('the first line is set at the first reading with a deviation of 70 or less, and never again', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = base()
  r = withReading(r, kindOf, { date: '2026-02-10', games: 15, rating: 700, deviation: 71 })
  assert.equal(r.first, null)
  r = withReading(r, kindOf, { date: '2026-02-20', games: 30, rating: 720, deviation: 70 })
  assert.equal(r.first?.games, 30)
  r = withReading(r, kindOf, { date: '2026-03-01', games: 45, rating: 800, deviation: 60 })
  assert.equal(r.first?.games, 30)
})

test('the rating arm compares with the reading 45 games before, from 45 games after the first line', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = base()
  const at = (/** @type {number} */ games, /** @type {number} */ rating, /** @type {string} */ date) =>
    (r = withReading(r, kindOf, { date, games, rating, deviation: 60 }))
  at(15, 1000, '2026-02-01')
  at(30, 800, '2026-02-02')
  at(45, 800, '2026-02-03')
  // 45 games after the first line (game 15): compared with game 15, 1000; the line is 2√(60² + 60²) ≈ 170
  at(60, 829, '2026-02-04')
  assert.equal(r.readings.at(-1)?.state, 'held')
  at(75, 800, '2026-02-05')
  assert.equal(r.readings.at(-1)?.state, 'open')
  assert.equal(readingSummary(r), 'No drop since the last reading. New kinds stay open.')
  // the rating arm's own numbers, then the gain against the first line, which gate 2 does not read
  assert.deepEqual(readingLines(r), [
    'Rating 800. 45 games ago: 800.',
    'Deviation 60. 45 games ago: 60.',
    'Difference: 0. Noise line: 170.',
    'Right at the first try: 0 of 0. Last: 0 of 0.',
    'Difference: 0. Noise line: none.',
    'Gain since the first line: −200. Gain line: 170.'
  ])
})

test('a reading marked as before a forced change is never compared against', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...base(), tries: tries(1, '2026-02-01', 30, 10) }
  r = withReading(r, kindOf, { date: '2026-02-10', games: 15, rating: 700, deviation: 60 })
  r = {
    ...r,
    first: null,
    readings: r.readings.map(x => ({ ...x, before: true })),
    tries: [...r.tries, ...tries(1, '2026-02-12', 0, 40)]
  }
  r = withReading(r, kindOf, { date: '2026-02-20', games: 30, rating: 100, deviation: 60 })
  assert.equal(r.readings.at(-1)?.state, 'open')
  assert.equal(r.first?.games, 30)
})

test('the rank range: 23.15 ln(rating / 525), the lower rounded down and the upper up, never below 30 kyu', () => {
  assert.equal(rankName(0), '30 kyu')
  assert.equal(rankName(5), '25 kyu')
  assert.equal(rankName(29), '1 kyu')
  assert.equal(rankName(30), '1 dan')
  // 652 is the server's 25 kyu: 352 lies below the scale, 952 at rank 13.8
  assert.deepEqual(rankRange(652), { lower: '30 kyu', upper: '16 kyu' })
  assert.deepEqual(rankRange(1500), { lower: '11 kyu', upper: '1 kyu' })
  assert.deepEqual(rankRange(100), { lower: '30 kyu', upper: '30 kyu' })
})

// The end level ("A Self-Study System", The end level; The build, Go, The checks, End level)

/**
 * A record whose first line is set at game 15 (that reading itself not walked), followed by the
 * readings given as [rating, deviation] pairs, one per 15 games, each on its own day.
 * @param {number[][]} pairs
 * @param {{ before?: number[][] }} [opts]
 */
const walked = (pairs, { before = [] } = {}) => {
  const at = (/** @type {number} */ i) => new Date(Date.UTC(2027, 0, 1 + i)).toISOString().slice(0, 10)
  /** @param {number[]} x @param {number} i @param {boolean} old */
  const reading = ([rating = 0, deviation = 0], i, old) =>
    typed({ date: at(i), games: 15 * (i + 1), rating, deviation, p: 0, n: 0, state: 'open', ...(old ? { before: true } : {}) })
  const offset = before.length
  return {
    readings: [
      ...before.map((x, i) => reading(x, i, true)),
      reading([2400, 65], offset, false), // the first line
      ...pairs.map((x, i) => reading(x, offset + 1 + i, false))
    ],
    first: typed({ date: at(offset), rating: 2400, deviation: 65, games: 15 * (offset + 1) })
  }
}
/** @param {number} n @param {number[]} x @returns {number[][]} */
const times = (n, x) => Array.from({ length: n }, () => x)

test('end level: unpassed before the first line, and no lines', () => {
  const r = { readings: [], first: null }
  assert.deepEqual(endLevel(r), { passed: null, window: [] })
  assert.deepEqual(endLevelLines(r), [])
})

test('end level: the reading of the first line is not walked; the count shows until 48', () => {
  assert.deepEqual(endLevelLines(walked([])), ['End level: unpassed, 0 of 48 readings.'])
  assert.deepEqual(endLevelLines(walked(times(17, [2500, 60]))), ['End level: unpassed, 17 of 48 readings.'])
  assert.equal(endLevel(walked(times(47, [2600, 60]))).passed, null)
})

test('end level: passes at the 48th reading when both blocks add to exactly 59,688, deviation exactly 70', () => {
  const r = walked(times(48, [2487, 70]))
  const e = endLevel(r)
  assert.equal(e.passed, r.readings.at(-1)?.date)
  assert.deepEqual(endLevelLines(r), [
    'End level: passed on 18 February.',
    'Mean of the last 24 readings 2487.',
    'Mean of the 24 before 2487.',
    'Server rank of the lower mean 36 (7 dan).'
  ])
})

test('end level: one point short in either block, or a deviation of 71, does not pass', () => {
  const short = times(48, [2487, 70])
  short[30] = [2486, 70] // newer block sums to 59,687
  assert.equal(endLevel(walked(short)).passed, null)
  const olderShort = times(48, [2487, 70])
  olderShort[0] = [2486, 70]
  assert.equal(endLevel(walked(olderShort)).passed, null)
  // a high newer block does not carry a low older one
  assert.equal(endLevel(walked([...times(24, [2480, 60]), ...times(24, [2600, 60])])).passed, null)
  const loose = times(48, [2550, 60])
  loose[5] = [2550, 71]
  const r = walked(loose)
  assert.equal(endLevel(r).passed, null)
  assert.deepEqual(endLevelLines(r), [
    'End level: unpassed.',
    'Mean of the last 24 readings 2550.',
    'Mean of the 24 before 2550.',
    'Server rank of the lower mean 36 (7 dan).',
    '1 of the 48 readings is not settled.'
  ])
  // once the unsettled reading leaves the 48, it passes
  assert.ok(endLevel(walked([...loose, ...times(6, [2550, 60])])).passed)
})

test('end level: ratings are read as printed, whole numbers, and the means round down', () => {
  // 2486.6 prints as 2487; a deviation is settled by the first line's own test, so 70.3 is not
  assert.ok(endLevel(walked(times(48, [2486.6, 69.6]))).passed)
  const raw = times(48, [2550, 60])
  raw[3] = [2550, 70.3]
  assert.equal(endLevel(walked(raw)).passed, null)
  const many = times(48, [2550, 60])
  many[3] = [2550, 80]
  many[9] = [2550, 75]
  assert.equal(endLevelLines(walked(many))[4], '2 of the 48 readings are not settled.')
  // 2,486 is rank 35.999, shown as 35 (6 dan)
  assert.equal(endLevelLines(walked(times(48, [2486, 60])))[3], 'Server rank of the lower mean 35 (6 dan).')
  const r = walked([...times(23, [2600, 60]), [2601, 60], ...times(24, [2500, 60])])
  const lines = endLevelLines(r)
  assert.equal(lines[1], 'Mean of the last 24 readings 2500.')
  assert.equal(lines[2], 'Mean of the 24 before 2600.')
  assert.equal(lines[3], 'Server rank of the lower mean 36 (7 dan).')
  const low = endLevelLines(walked(times(48, [2470, 60])))
  assert.equal(low[3], 'Server rank of the lower mean 35 (6 dan).')
})

test('end level: withdrawn at the third low reading in a row after the pass, not after two and a recovery', () => {
  const pass = times(48, [2500, 60])
  const low = ([2350, 60]) // 2350 + 120 = 2470 < 2487
  // two low readings, then one at 2367 + 120 = 2487, not below the line: still passed
  const recovered = walked([...pass, low, low, [2367, 60], low, low])
  assert.equal(endLevel(recovered).passed, recovered.readings[48]?.date)
  const withdrawn = walked([...pass, low, low, low])
  const e = endLevel(withdrawn)
  assert.equal(e.passed, null)
  assert.equal(e.window.length, 0)
  assert.deepEqual(endLevelLines(withdrawn), ['End level: unpassed, 0 of 48 readings.'])
})

test('end level: a low reading before the pass never counts toward a withdrawal', () => {
  // the 47th and 48th readings are low but the blocks still add up; one more low reading after the pass is not three
  const pass = [...times(46, [2510, 60]), [2440, 20], [2440, 20]]
  const r = walked([...pass, [2440, 20]])
  assert.ok(endLevel(walked(pass)).passed)
  assert.ok(endLevel(r).passed)
  assert.equal(endLevel(walked([...pass, [2440, 20], [2440, 20], [2440, 20]])).passed, null)
})

test('end level: only the test of the state before the reading applies', () => {
  // passed: a later window that would fail the pass test does not withdraw it
  const r = walked([...times(48, [2500, 60]), ...times(30, [2450, 60])]) // 2450 + 120 is not below the line
  assert.equal(endLevel(r).passed, r.readings[48]?.date)
  // and its lines read the last 48, whose newer block is below the line
  const lines = endLevelLines(r)
  assert.equal(lines[0], 'End level: passed on 18 February.')
  assert.equal(lines[1], 'Mean of the last 24 readings 2450.')
})

test('end level: after a withdrawal, 48 new readings are needed, and the date is of the last pass', () => {
  const pass = times(48, [2500, 60])
  const low = ([2300, 60])
  const again = walked([...pass, low, low, low, ...times(47, [2500, 60])])
  assert.equal(endLevel(again).passed, null)
  assert.deepEqual(endLevelLines(again)[0], 'End level: unpassed, 47 of 48 readings.')
  const passedAgain = walked([...pass, low, low, low, ...times(48, [2500, 60])])
  assert.equal(endLevel(passedAgain).passed, passedAgain.readings.at(-1)?.date)
})

test('end level: a forced change clears it; readings before the change are never used', () => {
  const old = times(60, [2600, 60])
  // after a change the first line is cleared: unpassed, no lines
  const cleared = { readings: walked([], { before: old }).readings.filter(x => x.before), first: null }
  assert.deepEqual(endLevel(cleared), { passed: null, window: [] })
  assert.deepEqual(endLevelLines(cleared), [])
  // with a new first line, only the readings after it count, even when the new account's rated
  // games count again from the start, below the old readings' counts
  const r = walked(times(10, [2600, 60]), { before: old })
  const restarted = {
    ...r,
    readings: r.readings.map(x => (x.before ? x : { ...x, games: x.games - 15 * old.length })),
    first: r.first && { ...r.first, games: 15 }
  }
  assert.equal(endLevel(restarted).passed, null)
  assert.deepEqual(endLevelLines(restarted), ['End level: unpassed, 10 of 48 readings.'])
})

test('end level: a withdrawal at the earliest is the third reading after the pass', () => {
  const pass = times(48, [2500, 60])
  const low = ([2300, 60])
  // two low readings after the pass are not enough; the third withdraws
  assert.equal(endLevel(walked([...pass, low, low])).passed !== null, true)
  assert.equal(endLevel(walked([...pass, low, low, low])).passed, null)
})
