// Gate 2 (src/units/cpp/core/readings.logic.js): the noise lines, the first reading, the readings
// after it by 10 contests or 10 weeks, a change of series or method, and the reading screen.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { meanLine, meanSd, readingLines, shareLine, tPoint, withReading } from './readings.logic.js'
import { courseFrom, problemId } from './decode.logic.js'
import { addDays } from '../../../kernel/days.logic.js'
import { recordOf } from './record.logic.js'

const course = courseFrom(
  [{ title: 'First kinds', first: 1, last: 1 }],
  [{ id: 1, name: 'a', after: [], plan: [], problems: [], trace: 'T1' }]
)
const practice = '2027-01-01'
/**
 * Contests a week apart from the first Saturday after the start gate opened.
 * @param {number[]} performances
 * @param {number} [from] weeks after the first
 */
const contests = (performances, from = 0) =>
  performances.map((performance, i) => ({
    contest: `ABC ${400 + from + i}`,
    date: addDays('2027-01-02', 7 * (from + i)),
    performance
  }))
/**
 * Mixed first tries on a day: `right` right, `wrong` wrong.
 * @param {string} date
 * @param {number} right
 * @param {number} wrong
 */
const tries = (date, right, wrong) =>
  Array.from({ length: right + wrong }, (_, i) => ({
    id: problemId(`1.${date}.${i}`),
    date,
    right: i < right,
    mixed: true
  }))
/** @param {Partial<import('./decode.logic.js').CppRecord>} change */
const base = change => ({
  ...recordOf({ server: { user: 'learner', series: 'abc', from: '2026-10-01' } }, course),
  practice,
  ...change
})
const ten = [700, 650, 720, 680, 710, 690, 705, 660, 730, 675]

test("the noise lines: the paper's share example reads no; Student's t at whole and broken degrees of freedom", () => {
  const line = shareLine({ p: 26 / 40, n: 40 }, { p: 31 / 40, n: 40 })
  assert.ok(line !== null && Math.abs(line - 0.2) < 0.002, String(line))
  assert.equal(shareLine({ p: 1, n: 1 }, { p: 0.5, n: 10 }), null)
  assert.equal(shareLine({ p: 1, n: 10 }, { p: 1, n: 10 }), null)
  for (const [df, t] of /** @type {const} */ ([
    [1, 12.7062047],
    [9, 2.2621572],
    [10, 2.2281389],
    [18, 2.100922],
    [29, 2.0452296]
  ]))
    assert.ok(Math.abs(tPoint(df) - t) < 1e-6, `${df}: ${tPoint(df)}`)
  assert.ok(tPoint(13.5) < tPoint(13) && tPoint(13.5) > tPoint(14))
  // equal deviations of 10 values each: Welch's degrees of freedom are 18
  const ml = meanLine({ sd: 30, n: 10 }, { sd: 30, n: 10 })
  assert.ok(ml !== null && Math.abs(ml - Math.sqrt(180) * 2.100922) < 1e-4, String(ml))
  assert.equal(meanLine({ sd: 30, n: 1 }, { sd: 30, n: 10 }), null)
  assert.equal(meanLine({ sd: 0, n: 10 }, { sd: 0, n: 10 }), null)
  const { mean, sd } = meanSd([2, 4, 4, 4, 5, 5, 7, 9])
  assert.equal(mean, 5)
  assert.ok(Math.abs(sd - Math.sqrt(32 / 7)) < 1e-12)
})

test('before the start gate no reading; before the first, each performance as read and "Not settled."', () => {
  const none = base({ practice: '', contests: contests(ten) })
  assert.equal(withReading(none, '2027-06-01'), none)
  const early = base({ contests: contests([700, 650]) })
  assert.equal(withReading(early, '2027-01-10'), early)
  assert.deepEqual(readingLines(early), [
    'ABC 400: performance 700.',
    'ABC 401: performance 650.',
    'Not settled.'
  ])
})

test('the first reading: contests 2 to 11, with every mixed first try up to it; it only sets the start', () => {
  const r = base({ contests: contests([1500, ...ten]), tries: tries('2027-02-01', 20, 7) })
  const day = addDays('2027-01-02', 71)
  const read = withReading(r, day)
  const first = read.readings[0]
  assert.ok(first)
  assert.equal(first.mean, meanSd(ten).mean, 'contest 1 is left out')
  assert.equal(first.sd, meanSd(ten).sd)
  assert.deepEqual([first.p, first.n, first.state, first.date], [20 / 27, 27, 'open', day])
  assert.deepEqual(readingLines(read), [
    'Performance 692, last 10 contests.',
    'Right at the first submit: 20 of 27.',
    'No drop since the last reading. New kinds stay open.'
  ])
  // nothing more is due until 10 more contests or 10 weeks
  assert.equal(withReading(read, addDays(day, 7)), read)
})

test('with fewer than 11 contests at 11 weeks, the first reading sets the solving share alone', () => {
  const r = base({ contests: contests([700, 650, 720]), tries: tries('2027-02-01', 3, 1) })
  assert.equal(withReading(r, addDays(practice, 76)), r)
  const read = withReading(r, addDays(practice, 77))
  assert.deepEqual(read.readings, [
    { date: addDays(practice, 77), mean: null, sd: null, p: 0.75, n: 4, state: 'open' }
  ])
  assert.equal(readingLines(read)[0], 'Performance not read: fewer than 10 contests.')
})

test('after 10 more contests: each against the last, a drop past the noise line held', () => {
  const r = base({ contests: contests([1500, ...ten]), tries: tries('2027-02-01', 30, 10) })
  const firstDay = addDays('2027-01-02', 71)
  const first = withReading(r, firstDay)
  const lower = ten.map(p => p - 150)
  const later = {
    ...first,
    contests: [...first.contests, ...contests(lower, 11)],
    tries: [...first.tries, ...tries(addDays(firstDay, 10), 18, 18)]
  }
  const day = addDays('2027-01-02', 7 * 20 + 1)
  const read = withReading(later, day)
  assert.equal(read.readings.length, 2)
  assert.equal(read.readings[1]?.state, 'held')
  assert.deepEqual(readingLines(read), [
    'Performance 542, last 10 contests. Last 692.',
    'Right at the first submit: 18 of 36. Last: 30 of 40.',
    'Your performance or your first submits in mixed practice dropped since the last reading. New kinds stay open.'
  ])
  // the same window a little lower: inside the noise, no drop
  const near = {
    ...first,
    contests: [
      ...first.contests,
      ...contests(
        ten.map(p => p - 5),
        11
      )
    ],
    tries: [...first.tries, ...tries(addDays(firstDay, 10), 29, 11)]
  }
  const calm = withReading(near, day)
  assert.equal(calm.readings[1]?.state, 'open')
  assert.equal(readingLines(calm)[2], 'No drop since the last reading. New kinds stay open.')
  // the solving share alone can hold a reading
  const solving = { ...near, tries: [...first.tries, ...tries(addDays(firstDay, 10), 5, 35)] }
  assert.equal(withReading(solving, day).readings[1]?.state, 'held')
})

test('fewer than 10 contests in 10 weeks: the solving share alone, and performance not read against a window without it', () => {
  const r = base({ contests: contests([700, 650, 720]), tries: tries('2027-02-01', 3, 1) })
  const first = withReading(r, addDays(practice, 77))
  const more = {
    ...first,
    contests: [...first.contests, ...contests(ten, 12)],
    tries: [...first.tries, ...tries(addDays(practice, 100), 2, 2)]
  }
  const day = addDays(practice, 77 + 69)
  assert.equal(
    withReading({ ...first, tries: more.tries }, day).readings.length,
    1,
    'neither 10 contests nor 10 weeks'
  )
  const read = withReading(more, addDays(practice, 77 + 70))
  assert.equal(read.readings[1]?.mean, meanSd(ten).mean)
  assert.equal(read.readings[1]?.state, 'open')
  assert.deepEqual(readingLines(read).slice(0, 2), [
    'Performance 692, last 10 contests.',
    'Right at the first submit: 2 of 4. Last: 3 of 4.'
  ])
  const sparse = withReading(
    { ...first, contests: [...first.contests, ...contests([600], 12)] },
    addDays(practice, 77 + 70)
  )
  assert.deepEqual(sparse.readings[1], {
    date: addDays(practice, 147),
    mean: null,
    sd: null,
    p: 0,
    n: 0,
    state: 'open'
  })
})

test('a change of series or method: the next 10 contests ending after it, no contest left out, set the start again', () => {
  const r = base({ contests: contests([1500, ...ten]), tries: tries('2027-02-01', 30, 10) })
  const firstDay = addDays('2027-01-02', 71)
  const first = withReading(r, firstDay)
  const changed = {
    ...first,
    server: first.server && { ...first.server, series: 'arc', from: firstDay }
  }
  const after = ten.map(p => p - 400)
  const later = {
    ...changed,
    contests: [...changed.contests, ...contests([...after, 100], 11)],
    tries: [...changed.tries, ...tries(addDays(firstDay, 3), 1, 9)]
  }
  const read = withReading(later, addDays('2027-01-02', 7 * 22))
  const restart = read.readings[1]
  assert.ok(restart)
  assert.equal(restart.state, 'open', 'a drop of 400 is no drop at a restart')
  assert.equal(restart.mean, meanSd(after).mean, 'the first 10 after the change')
  assert.equal(readingLines(read)[2], 'No drop since the last reading. New kinds stay open.')
  // a change before the first reading starts its window at the change too
  const early = base({
    server: {
      name: '',
      user: 'x',
      series: 'arc',
      language: '',
      zone: '',
      next: '',
      from: '2027-01-20'
    },
    contests: contests([1500, 1400, 1300, ...ten])
  })
  assert.equal(
    withReading(early, addDays('2027-01-02', 7 * 13 + 1)).readings[0]?.mean,
    meanSd(ten).mean
  )
  const fewer = { ...early, contests: early.contests.slice(0, 8) }
  assert.equal(withReading(fewer, addDays('2027-01-20', 69)), fewer)
  assert.equal(withReading(fewer, addDays('2027-01-20', 70)).readings[0]?.mean, null)
  // a change typed on the day of the last reading came after it: the screen compares as before
  const typedAfter = { ...read, server: read.server && { ...read.server, from: restart.date } }
  assert.deepEqual(readingLines(typedAfter).slice(0, 1), [
    `Performance ${Math.round(restart.mean ?? 0)}, last 10 contests. Last 692.`
  ])
})

test('a mixed first try made on a reading day after the paste counts in the next reading, not in none', () => {
  const r = base({ contests: contests([1500, ...ten]), tries: tries('2027-02-01', 30, 10) })
  const firstDay = addDays('2027-01-02', 71)
  const first = withReading(r, firstDay)
  // two tries the same day, after the reading
  const after = { ...first, tries: [...first.tries, ...tries(firstDay, 1, 1)] }
  const later = {
    ...after,
    contests: [...after.contests, ...contests(ten, 11)],
    tries: [...after.tries, ...tries(addDays(firstDay, 10), 3, 0)]
  }
  const read = withReading(later, addDays('2027-01-02', 7 * 20 + 1))
  assert.equal(read.readings[1]?.n, 5)
  assert.equal(read.readings[1]?.p, 4 / 5)
})
