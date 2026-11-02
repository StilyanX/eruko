// How a generated line's sheet is drawn (src/units/arithmetic/core/end-draw.logic.js) against
// Mathematics, "The end level": each line's covering rules, a pass's two sheets with one sum, the
// never-shown pool, the same seed's same sheet, and the spent draw.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { allowanceSum, drawPair, drawSheet } from './end-draw.logic.js'
import { poolKey } from './end-lines.logic.js'

/** @param {number} n */
const lead = n => Number(String(n)[0])
/** @param {number[]} xs */
const sorted = xs => [...xs].sort((a, b) => a - b)
const ONE_TO_NINE = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/** @param {readonly (readonly number[])[]} sheet */
const keys = sheet => sheet.map(poolKey)

/**
 * A pass's two sheets: each meets `covers`, none shared, the sums equal.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {number} seed
 * @param {(sheet: readonly (readonly number[])[]) => void} covers
 */
function checkPair(id, seed, covers) {
  const pair = drawPair(id, {}, seed)
  assert.equal(pair.spent, false)
  covers(pair.untimed)
  covers(pair.timed)
  const untimed = new Set(keys(pair.untimed))
  assert.ok(keys(pair.timed).every(k => !untimed.has(k)), 'the two sheets share no problem')
  assert.equal(allowanceSum(id, pair.untimed), pair.sum)
  assert.equal(allowanceSum(id, pair.timed), pair.sum)
  return pair
}

test('3 × 3: 16 problems of three-digit factors, the first factors leading with every digit', () => {
  checkPair('product-3', 1, sheet => {
    assert.equal(sheet.length, 16)
    assert.ok(sheet.flat().every(f => f >= 100 && f <= 999))
    assert.deepEqual(sorted([...new Set(sheet.map(p => lead(p[0] ?? 0)))]), ONE_TO_NINE)
  })
})

test('4 × 4: 9 problems of four-digit factors, the first factors leading 1 to 9 once each', () => {
  checkPair('product-4', 1, sheet => {
    assert.equal(sheet.length, 9)
    assert.ok(sheet.flat().every(f => f >= 1000 && f <= 9999))
    assert.deepEqual(sorted(sheet.map(p => lead(p[0] ?? 0))), ONE_TO_NINE)
  })
})

test('estimates: 9 five-digit pairs whose products lead 1 to 9 once each', () => {
  checkPair('estimates', 1, sheet => {
    assert.equal(sheet.length, 9)
    assert.ok(sheet.flat().every(f => f >= 10000 && f <= 99999))
    assert.deepEqual(sorted(sheet.map(([a = 0, b = 0]) => lead(a * b))), ONE_TO_NINE)
  })
})

test('π estimates: 9 numbers whose hundreds, tens and units digits each run 1 to 9 once', () => {
  checkPair('pi-estimates', 1, sheet => {
    assert.equal(sheet.length, 9)
    const ns = sheet.map(p => p[0] ?? 0)
    assert.deepEqual(sorted(ns.map(n => Math.floor(n / 100))), ONE_TO_NINE)
    assert.deepEqual(sorted(ns.map(n => Math.floor(n / 10) % 10)), ONE_TO_NINE)
    assert.deepEqual(sorted(ns.map(n => n % 10)), ONE_TO_NINE)
  })
})

test('factoring: 10 numbers, one from 2 to 99 and one from each hundred to 999', () => {
  checkPair('factoring', 1, sheet => {
    assert.equal(sheet.length, 10)
    const ns = sheet.map(p => p[0] ?? 0)
    assert.ok(ns.every(n => n >= 2 && n <= 999))
    assert.deepEqual(sorted(ns.map(n => Math.floor(n / 100))), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})

test('the same seed draws the same sheet', () => {
  assert.deepEqual(drawSheet('product-4', {}, 7), drawSheet('product-4', {}, 7))
  assert.deepEqual(drawPair('factoring', {}, 3), drawPair('factoring', {}, 3))
})

test('a sheet drawn after a pass avoids every problem already shown', () => {
  for (const id of /** @type {const} */ (['product-4', 'pi-estimates', 'factoring'])) {
    const first = drawPair(id, {}, 3)
    /** @type {Record<string, number>} */
    const shown = {}
    for (const p of [...first.untimed, ...first.timed]) shown[poolKey(p)] = 1
    const drawn = drawSheet(id, shown, 4, first.sum)
    assert.equal(drawn.spent, false)
    assert.ok(keys(drawn.problems).every(k => shown[k] === undefined), id)
    assert.equal(allowanceSum(id, drawn.problems), first.sum, id)
  }
})

test('with every number of one hundred shown the pool is spent: the oldest of it, never-shown elsewhere', () => {
  /** @type {Record<string, number>} */
  const shown = {}
  for (let n = 100; n < 200; n++) shown[String(n)] = n
  for (let n = 200; n < 250; n++) shown[String(n)] = 1
  const drawn = drawSheet('factoring', shown, 5)
  assert.equal(drawn.spent, true)
  const ns = drawn.problems.map(p => p[0] ?? 0)
  assert.equal(ns.length, 10)
  assert.ok(ns.includes(100), 'the hundred spent gives the problem shown longest ago')
  assert.ok(ns.filter(n => n !== 100).every(n => shown[String(n)] === undefined), 'the rest are never shown')
  const pair = drawPair('factoring', shown, 5)
  assert.equal(pair.spent, true)
  assert.equal(allowanceSum('factoring', pair.timed), pair.sum)
})
