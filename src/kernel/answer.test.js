// What the answer checkers of the maths units share.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { abs, gcd, listOf, markSentence, matched } from './answer.logic.js'

test('abs drops the sign; gcd is never negative, and gcd(0, b) is b', () => {
  assert.equal(abs(-5n), 5n)
  assert.equal(gcd(12n, -18n), 6n)
  assert.equal(gcd(0n, 7n), 7n)
  assert.equal(gcd(0n, 0n), 0n)
})

test('a match: a missing form, a blank answer and a throwing match are false', () => {
  const same = (/** @type {string} */ t, /** @type {string} */ s) => t === s
  assert.equal(matched(same, '4', 4), true)
  assert.equal(matched(null, '4', '4'), false)
  assert.equal(matched(same, '  ', ' '), false)
  assert.equal(matched(undefined, undefined, '4'), false)
  assert.equal(matched(() => { throw new Error('x') }, '4', '4'), false)
})

test('a comma list needs the same length and each pair to match', () => {
  const list = listOf((/** @type {unknown} */ s) => String(s).replace(/\s+/g, ''))(Object.is)
  assert.equal(list('1, 2', '1,2'), true)
  assert.equal(list('1,2', '1,2,3'), false)
  assert.equal(list('1,3', '1,2'), false)
})

test('the mark sentence agrees with a form that takes "or equivalent"', () => {
  assert.equal(markSentence('Answer as a fraction in lowest terms, or equivalent.'), 'Right when your answer has this value, whatever its form.')
  assert.equal(markSentence('Answer as a fraction in lowest terms.'), 'Right when your answer has this value, in the form asked.')
  assert.equal(markSentence(undefined), 'Right when your answer has this value, in the form asked.')
})

test('a broken invariant inside a match is a bug, thrown on, never read as a wrong answer', async () => {
  const { InvariantError } = await import('./invariant.logic.js')
  assert.throws(() => matched(() => { throw new InvariantError('x') }, '4', '4'), InvariantError)
  assert.equal(listOf(String)((t, s) => t === s)('1,2', '1'), false, 'lists of two lengths')
})
