// Hides: what a test asks of how a maths text is cut (maths-text.logic.js): an inline formula
// wraps before its signs, but one that holds an environment stays one block.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { formulaPieces, spoken } from './maths-text.logic.js'

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

test('a text is said with its maths in words, with no TeX left', () => {
  assert.equal(spoken('**Rule** $\\frac{1}{2}+x^2 \\le 3$.'), 'Rule 1 over 2+x squared ≤ 3.')
  assert.equal(spoken('$\\left(\\frac23,\\frac23\\right)$'), '(2 over 3,2 over 3)')
  assert.equal(
    spoken('$1\\,024$ and $10\\sqrt{3}$ at $105^{\\circ}$'),
    '1024 and 10 the square root of 3 at 105°'
  )
  assert.equal(spoken('regrouping $k$, $\\ell$, and $n+m$'), 'regrouping k, ell, and n+m')
  assert.equal(spoken('$\\text{if } a<b$'), 'if a<b')
})
