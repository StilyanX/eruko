// The generated course (scripts/gen/arithmetic.mjs) stays in step with the unit's data, and the
// registry lists every page of it, in course order, each with a title.
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('a page the course file names that is neither a titled topic nor a drill is a broken course', async () => {
  const { arithmeticPage } = await import('./entry.logic.js')
  const { InvariantError } = await import('../../../kernel/invariant.logic.js')
  assert.equal(arithmeticPage('place-value').file, 'arithmetic/topic')
  assert.equal(arithmeticPage('number-facts').repeats, true)
  assert.throws(() => arithmeticPage('no-such-page'), InvariantError)
})
