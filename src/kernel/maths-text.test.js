// Hides: what a test asks of how a maths text is cut (maths-text.logic.js): an inline formula
// wraps before its signs, but one that holds an environment stays one block.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formulaPieces } from './maths-text.logic.js'

test('an inline formula wraps before its relations and its plus and minus signs', () => {
  assert.deepEqual(formulaPieces('a+b=c'), [['a', '{}+b'], ['{}=c']])
})

test('a formula that holds an environment is one piece: cut at a sign, \\begin would lose its \\end', () => {
  const table = '\\begin{array}{c|c} x & x+1 \\\\ \\hline 1 & 2 \\end{array}'
  assert.deepEqual(formulaPieces(table), [[table]])
  assert.deepEqual(formulaPieces(`y = ${table}`), [[`y = ${table}`]])
})

test('a sign that is a script, as in 0^+, stays with its base', () => {
  assert.deepEqual(formulaPieces('x\\to 0^+'), [['x\\to 0^+']])
})
