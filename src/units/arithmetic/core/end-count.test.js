// How the end level values a problem's work (src/units/arithmetic/core/end-count.logic.js) against
// Mathematics, "The end level": the Add and Subtract counts, the facts of a product, an estimate,
// π times a number and a factoring, the allowance and the pools' figures the spec prints.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  ADD_CS,
  FACT_CS,
  addCount,
  allowance,
  columnTotals,
  divideWork,
  estimateAllowance,
  factorAllowance,
  factorWork,
  piAllowance,
  piWork,
  productAllowance,
  productWork,
  roundThree,
  subtractCount
} from './end-count.logic.js'

/** @param {number[]} xs */
const median = xs => {
  const a = [...xs].sort((x, y) => x - y)
  const n = a.length
  return n % 2 ? (a[(n - 1) / 2] ?? 0) : ((a[n / 2 - 1] ?? 0) + (a[n / 2] ?? 0)) / 2
}

test('a fact is 1.26 s and an Add step 1.10 s, in hundredths', () => {
  assert.equal(FACT_CS, 126)
  assert.equal(ADD_CS, 110)
})

test('the spec\'s examples: 18 + 12 is three Add steps, 71 − 69 is three', () => {
  assert.equal(addCount(18, 12), 3)
  assert.equal(subtractCount(71, 69), 3)
})

test('adding a 0 or a single digit costs nothing beyond its place', () => {
  assert.equal(addCount(5, 0), 0)
  assert.equal(addCount(3, 4), 1)
  assert.equal(addCount(100, 200), 1)
})

test('the allowance is facts at 126 and Add steps at 110, never under 126', () => {
  assert.equal(allowance(0, 0), 126)
  assert.equal(allowance(0, 1), 126)
  assert.equal(allowance(2, 3), 2 * 126 + 3 * 110)
})

test('column totals run from the units column, each the sum of its digit products', () => {
  assert.deepEqual(columnTotals(123, 456), [18, 27, 28, 13, 4])
  assert.deepEqual(columnTotals(1000, 1000), [0, 0, 0, 0, 0, 0, 1])
})

test('a product counts a fact only for a pair of digits both 2 or more', () => {
  assert.equal(productWork(111, 111).facts, 0)
  assert.equal(productWork(123, 456).facts, 6)
  assert.equal(productWork(999, 999).facts, 9)
  assert.deepEqual(productWork(123, 456), { facts: 6, adds: 10 })
  assert.equal(productAllowance(123, 456), 6 * 126 + 10 * 110)
})

test('an estimate rounds each factor to its nearest three digits, a tie up, 99,950 and over to 100', () => {
  assert.equal(roundThree(12349), 123)
  assert.equal(roundThree(12350), 124)
  assert.equal(roundThree(99949), 999)
  assert.equal(roundThree(99950), 100)
  assert.equal(estimateAllowance(12349, 45649), productAllowance(123, 456))
})

test('π times a number: a fact for each digit above 1, the multiples added', () => {
  assert.deepEqual(piWork(111), { facts: 0, adds: 11 })
  assert.deepEqual(piWork(999), { facts: 3, adds: 15 })
  assert.equal(piAllowance(999), 3 * 126 + 15 * 110)
})

test('long division takes a fact for each quotient digit above 1 and gives the remainder', () => {
  assert.deepEqual(divideWork(84, 7), { quotient: 12, remainder: 0, facts: 1, adds: 3 })
  assert.deepEqual(divideWork(85, 7), { quotient: 12, remainder: 1, facts: 1, adds: 3 })
})

test('factoring gives the primes in order, each as often as it divides', () => {
  assert.deepEqual(factorWork(360).factors, [2, 2, 2, 3, 3, 5])
  assert.deepEqual(factorWork(2).factors, [2])
  assert.deepEqual(factorWork(961).factors, [31, 31])
})

test('971 is prime with allowance 10,208; 2 has allowance 126', () => {
  assert.deepEqual(factorWork(971).factors, [971])
  assert.equal(factorAllowance(971), 10208)
  assert.equal(factorAllowance(2), 126)
})

test('over every 3 × 3 problem: 405,450 problems, 1,561 under 126, max 3,444, median 1,856', () => {
  let under = 0
  /** @type {number[]} */
  const all = []
  for (let a = 100; a < 1000; a++)
    for (let b = a; b < 1000; b++) {
      const { facts, adds } = productWork(a, b)
      if (facts * FACT_CS + adds * ADD_CS < FACT_CS) under++
      all.push(allowance(facts, adds))
    }
  assert.equal(all.length, 405450)
  assert.equal(under, 1561)
  assert.equal(all.reduce((m, x) => Math.max(m, x), 0), 3444)
  assert.equal(median(all), 1856)
})

test('over the 729 numbers of digits 1 to 9, π allowances run 1,210 to 2,578, median 2,028', () => {
  /** @type {number[]} */
  const all = []
  for (let h = 1; h <= 9; h++) for (let t = 1; t <= 9; t++) for (let u = 1; u <= 9; u++) all.push(piAllowance(h * 100 + t * 10 + u))
  assert.equal(all.length, 729)
  assert.equal(Math.min(...all), 1210)
  assert.equal(Math.max(...all), 2578)
  assert.equal(median(all), 2028)
})

test('over 2 to 999, factoring allowances run 126 to 10,208, the most at 971', () => {
  const all = Array.from({ length: 998 }, (_, i) => factorAllowance(i + 2))
  assert.equal(Math.min(...all), 126)
  assert.equal(Math.max(...all), 10208)
  assert.equal(all.indexOf(10208) + 2, 971)
})
