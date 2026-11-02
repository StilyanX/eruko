// FSRS-6 over a dated list, against ts-fsrs 5.4.2 (default parameters, no fuzz, short-term on).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { intervalDays, memory, recallChance } from './fsrs.logic.js'
import { addDays, writeLine, RETENTION } from './days.logic.js'

/** @param {number} n */
const day = n => new Date(Date.parse('2026-01-01T12:00:00Z') + n * 86400000).toISOString().slice(0, 10)
/** @param {[number, number][]} seq */
const hist = seq => seq.map(([n, ok]) => ({ date: day(n), ok: Boolean(ok) }))

// [day, ok, stability, difficulty, days to the next, at 0.9 and at 0.92] from the reference run.
/** @typedef {[number, number, number, number, number?, number?]} Row */

/** @type {Row[]} */
const ALWAYS_RIGHT = [
  [0, 1, 2.3065, 2.118104],
  [1, 1, 7.315301, 2.111214, 7, 5],
  [4, 1, 19.833474, 2.104331, 20, 15],
  [12, 1, 48.199593, 2.097455, 48, 35],
  [30, 1, 103.929984, 2.090586, 104, 76],
  [80, 1, 234.80515, 2.083724, 235, 172]
]
/** @type {Row[]} */
const ONE_MISS = [
  [0, 1, 2.3065, 2.118104],
  [1, 1, 7.315301, 2.111214, 7],
  [4, 0, 1.148045, 7.392238],
  [5, 1, 3.120807, 7.380074, 3],
  [9, 1, 9.102408, 7.367923, 9],
  [20, 1, 23.175454, 7.355783, 23]
]

/**
 * A seeded generator of numbers in [0, 1) (mulberry32), so a failing case can be run again.
 * @param {number} seed
 */
function random(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const CASES = 2000

/**
 * A history of answers, oldest first: each a day after the last by 1 to 120 days, right or wrong.
 * @param {() => number} rnd
 */
function history(rnd) {
  /** @type {{ date: string, right: boolean, next: string }[]} */
  let lines = []
  let day = '2026-01-01'
  const n = 1 + Math.floor(rnd() * 12)
  for (let i = 0; i < n; i++) {
    lines = writeLine(
      lines,
      rnd() < 0.7,
      day,
      rnd() < 0.5 ? RETENTION.rebuildable : RETENTION.exact
    )
    day = addDays(day, 1 + Math.floor(rnd() * 120))
  }
  return { lines, day }
}

test('memory state matches the reference for an item always right and for one missed once', () => {
  for (const run of [ALWAYS_RIGHT, ONE_MISS])
    run.forEach((row, i) => {
      const m = memory(hist(run.slice(0, i + 1).map(r => [r[0], r[1]])))
      assert.ok(m)
      assert.ok(Math.abs(m.s - row[2]) < 1e-4, `stability on day ${row[0]}: ${m.s}`)
      assert.ok(Math.abs(m.d - row[3]) < 1e-4, `difficulty on day ${row[0]}: ${m.d}`)
    })
})

test('days to the next answer match the reference at 90 and 92 percent', () => {
  ALWAYS_RIGHT.slice(1).forEach((row, i) => {
    const h = hist(ALWAYS_RIGHT.slice(0, i + 2).map(r => [r[0], r[1]]))
    assert.equal(intervalDays(h, 0.9), row[4])
    assert.equal(intervalDays(h, 0.92), row[5])
  })
  ONE_MISS.slice(1).forEach((row, i) => {
    if (!row[4]) return
    const h = hist(ONE_MISS.slice(0, i + 2).map(r => [r[0], r[1]]))
    assert.equal(intervalDays(h, 0.9), row[4])
  })
})

test('a higher retention brings an item back sooner', () => {
  const h = hist([[0, 1], [1, 1], [4, 1]])
  assert.ok(intervalDays(h, 0.92) < intervalDays(h, 0.9))
})

test('the chance of recall is 90 percent after a day at stability one day, and falls with time', () => {
  assert.ok(Math.abs(recallChance(1, 1) - 0.9) < 1e-9)
  assert.ok(recallChance(10, 1) < recallChance(2, 1))
})

test('no history gives no memory state and a one-day interval', () => {
  assert.equal(memory([]), null)
  assert.equal(intervalDays([], 0.9), 1)
})

test('an interval is never negative or zero, whatever the history', () => {
  const rnd = random(1)
  for (let c = 0; c < CASES; c++) {
    const { lines, day } = history(rnd)
    const answers = [
      ...lines.map(l => ({ date: l.date, ok: l.right })),
      { date: day, ok: rnd() < 0.5 }
    ]
    const days = intervalDays(answers, RETENTION.rebuildable)
    assert.ok(Number.isInteger(days) && days >= 1, `case ${c}: ${days} days`)
    for (const l of lines) assert.ok(l.next > l.date, `case ${c}: ${l.next} is not after ${l.date}`)
  }
})
