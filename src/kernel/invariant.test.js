// The broken-invariant path every unit's switch ends in, and assert's own failure.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { InvariantError, assert as holds, unreachable } from './invariant.logic.js'

test('a value no case handles throws an InvariantError that names it', () => {
  assert.throws(
    () => unreachable(/** @type {never} */ (/** @type {unknown} */ ('stray'))),
    e => e instanceof InvariantError && /"stray"/.test(e.message)
  )
})

test('a check that does not hold throws an InvariantError naming the rule', () => {
  assert.throws(
    () => holds(false, 'two is more than one'),
    e => e instanceof InvariantError && e.message === 'two is more than one'
  )
  assert.doesNotThrow(() => holds(true, 'never thrown'))
})
