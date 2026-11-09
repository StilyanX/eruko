// The end level's lines (src/units/arithmetic/core/end-lines.logic.js) against Mathematics, "The
// end level": the lines in order, the pace lines' fixed sheets, how each entry is checked and the
// key that makes a swapped pair one problem.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LINE_IDS, answersOf, entriesOf, entriesRight, paceItems, poolKey } from './end-lines.logic.js'

test('eleven lines, in the order of Opens', () => {
  assert.deepEqual(LINE_IDS, [
    'facts',
    'sums',
    'primes',
    'squares',
    'pi-multiples',
    'prime-multiples',
    'product-3',
    'product-4',
    'estimates',
    'pi-estimates',
    'factoring'
  ])
})

test('the pace lines\' fixed sheets have their sizes', () => {
  assert.equal(paceItems('facts').length, 121)
  assert.equal(paceItems('primes').length, 11)
  assert.equal(paceItems('squares').length, 11)
  assert.equal(paceItems('pi-multiples').length, 9)
  assert.equal(paceItems('prime-multiples').length, 46)
  assert.equal(paceItems('sums').length, 45)
  assert.equal(paceItems('product-3').length, 0)
})

test('multiples of π run from 3.14159 to 28.27431', () => {
  assert.equal(paceItems('pi-multiples')[0]?.a, '3.14159')
  assert.equal(paceItems('pi-multiples')[8]?.a, '28.27431')
})

test('a pace answer is right as the same number; a blank is wrong', () => {
  assert.deepEqual(entriesRight('pi-multiples', [0], ['3.141590']), [true])
  assert.deepEqual(entriesRight('pi-multiples', [0], ['3.1416']), [false])
  assert.deepEqual(entriesRight('primes', [10], ['31']), [true])
  assert.deepEqual(entriesRight('primes', [10], ['']), [false])
  assert.deepEqual(entriesRight('primes', [10], []), [false])
})

test('a product asks each column total from the units, then the product', () => {
  assert.deepEqual(entriesOf('product-3', [123, 456]), ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Product'])
  assert.deepEqual(answersOf('product-3', [123, 456]), ['18', '27', '28', '13', '4', '56088'])
  assert.deepEqual(entriesRight('product-3', [123, 456], ['18', '27', '28', '13', '4', '56,088']), Array(6).fill(true))
  assert.deepEqual(entriesRight('product-3', [123, 456], ['18', '', '28', '13', '5', '56089']), [true, false, true, true, false, false])
})

test('an estimate is right under 1% of the exact product, the display only when exact', () => {
  const p = [10000, 10000]
  assert.deepEqual(entriesOf('estimates', p), ['Your estimate', 'Your calculator shows'])
  assert.deepEqual(entriesRight('estimates', p, ['100999999', '100000000']), [true, true])
  assert.deepEqual(entriesRight('estimates', p, ['99000001', '100000001']), [true, false])
  assert.deepEqual(entriesRight('estimates', p, ['101000000', '']), [false, false])
  assert.deepEqual(entriesRight('estimates', p, ['99000000', '100000000']), [false, true])
})

test('a π estimate is right under 0.0001% of 3.14159 times the number', () => {
  assert.deepEqual(entriesRight('pi-estimates', [100], ['314.159']), [true])
  assert.deepEqual(entriesRight('pi-estimates', [100], ['314.159314158']), [true])
  assert.deepEqual(entriesRight('pi-estimates', [100], ['314.159314159']), [false])
  assert.deepEqual(entriesRight('pi-estimates', [100], ['314.158685841']), [false])
  assert.deepEqual(entriesRight('pi-estimates', [100], ['']), [false])
})

test('a factoring is "prime", or the primes ascending with repeats', () => {
  assert.deepEqual(entriesRight('factoring', [971], ['Prime ']), [true])
  assert.deepEqual(entriesRight('factoring', [971], ['971']), [false])
  assert.deepEqual(entriesRight('factoring', [360], ['2 2 2 3 3 5']), [true])
  assert.deepEqual(entriesRight('factoring', [360], ['2 × 2 × 2 × 3 × 3 × 5']), [true])
  assert.deepEqual(entriesRight('factoring', [360], ['2, 2, 2, 3, 3, 5']), [true])
  assert.deepEqual(entriesRight('factoring', [360], ['5 3 3 2 2 2']), [false])
  assert.deepEqual(entriesRight('factoring', [360], ['2 3 5']), [false])
  assert.deepEqual(entriesRight('factoring', [360], ['prime']), [false])
  assert.deepEqual(entriesRight('factoring', [360], ['']), [false])
  assert.deepEqual(answersOf('factoring', [360]), ['2 2 2 3 3 5'])
  assert.deepEqual(answersOf('factoring', [971]), ['prime'])
})

test('a swapped pair is one problem in the pool', () => {
  assert.equal(poolKey([456, 123]), poolKey([123, 456]))
  assert.equal(poolKey([123, 456]), '123×456')
  assert.equal(poolKey([971]), '971')
})
