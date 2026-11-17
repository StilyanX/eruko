// Algebra's entry: a page the course names, and the line that says how much is written.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { InvariantError } from '../../../kernel/invariant.logic.js'
import { algebraPage, builtLine } from './entry.logic.js'

test('a page the course file names that is neither a titled topic nor a page of its own is a broken course', () => {
  assert.equal(algebraPage('mixed-practice').repeats, true)
  assert.equal(algebraPage('end-level').file, 'algebra/end-level')
  assert.throws(() => algebraPage('no-such-page'), InvariantError)
})

test('the line on what is written reads from the topic count', () => {
  assert.match(builtLine(0), /No topic is written yet/)
  assert.match(builtLine(1), /^1 topic is written/)
  assert.match(builtLine(12), /^12 topics are written/)
})
