// The maths units' content as an import gives it (kernel/maths-decode.logic.js): a module that is
// not of its shape is a broken build, never something the learner did.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { InvariantError } from './invariant.logic.js'
import {
  bankKindsOf,
  bankOf,
  contentOf,
  mathmlOf,
  topicOf
} from './maths-decode.logic.js'

test('a content module gives its default export, and a module without one is a broken build', () => {
  assert.deepEqual(contentOf({ default: [1] }, 'm'), [1])
  assert.throws(() => contentOf({}, 'm'), InvariantError)
  assert.throws(() => contentOf(null, 'm'), InvariantError)
})

test('a bank is a list, MathML a map of text, a topic a record with its kinds', () => {
  assert.deepEqual(bankOf({ default: [] }, 'b'), [])
  assert.throws(() => bankOf({ default: {} }, 'b'), InvariantError)
  assert.deepEqual(mathmlOf({ default: { x: '<math/>' } }, 'm'), { x: '<math/>' })
  assert.throws(() => mathmlOf({ default: { x: 1 } }, 'm'), InvariantError)
  assert.throws(() => mathmlOf({ default: [] }, 'm'), InvariantError)
  assert.deepEqual(topicOf({ default: { kinds: [] } }, 't'), { kinds: [] })
  assert.throws(() => topicOf({ default: { kinds: 'x' } }, 't'), InvariantError)
})

test('the generated bank list makes each id; an entry with no kind is a broken build', () => {
  assert.deepEqual(bankKindsOf([['p1', 'k1']]), [{ id: 'p1', kind: 'k1' }])
  assert.throws(() => bankKindsOf([['p1']]), InvariantError)
})
