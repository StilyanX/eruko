// What only Algebra's content writes on a problem, as its screens read it.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { featuresOf, givenOf } from './decode.logic.js'

test('a problem gives its sketch features and its solution to check only where it stores them well formed', () => {
  assert.equal(featuresOf({ prompt: 'x' }), null)
  assert.deepEqual(featuresOf({ features: { intercepts: ['$(0, 1)$', 3], turning: [] } }), { intercepts: ['$(0, 1)$'], turning: [], asymptotes: [], shaded: [] })
  assert.deepEqual(featuresOf({ features: { shaded: ['open circle at $2$', 'shaded to the right of $2$'] } })?.shaded, ['open circle at $2$', 'shaded to the right of $2$'])
  assert.deepEqual(givenOf({ given: ['$x = 1$', '$x = 2$'] }), ['$x = 1$', '$x = 2$'])
  assert.deepEqual(givenOf({}), [])
})
