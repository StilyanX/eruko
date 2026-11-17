// Hides: what a test asks of how a maths text is cut (maths-text.logic.js): an inline formula
// wraps before its signs, but one that holds an environment stays one block; and of what is read
// from a formula's MathML: its top-level relation signs, one token, a script at its end.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  endsInScript,
  formulaPieces,
  isOneToken,
  isTall,
  relationsIn,
  spoken
} from './maths-text.logic.js'

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

test('the relation signs of a formula are read from its MathML, each of the eight', () => {
  for (const sign of ['=', '≠', '&lt;', '&gt;', '≤', '≥', '≈', '≡'])
    assert.equal(relationsIn(`<math><mi>a</mi><mo>${sign}</mo><mi>b</mi></math>`), 1, sign)
  assert.equal(relationsIn('<math><mi>a</mi><mo>+</mo><mi>b</mi></math>'), 0)
  assert.equal(relationsIn('<math><mrow><mrow></mrow><mo>=</mo><mn>8</mn></mrow></math>'), 1)
  assert.equal(
    relationsIn(
      '<math><mrow><mn>0</mn><mo>&lt;</mo></mrow><mrow><mi>x</mi><mo>≤</mo></mrow><mn>5</mn></math>'
    ),
    2
  )
})

test('a relation sign inside a script, a fraction, a root, a table or a bracket is not at the top level', () => {
  const sum =
    '<math><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mi>i</mi></math>'
  assert.equal(relationsIn(sum), 0)
  assert.equal(
    relationsIn(
      '<math><mfrac><mrow><mi>a</mi><mo>=</mo><mi>b</mi></mrow><mn>2</mn></mfrac></math>'
    ),
    0
  )
  assert.equal(relationsIn('<math><msqrt><mi>a</mi><mo>=</mo><mi>b</mi></msqrt></math>'), 0)
  assert.equal(
    relationsIn(
      '<math><mtable><mtr><mtd><mi>x</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr></mtable></math>'
    ),
    0
  )
  const set =
    '<math><mo fence="true" form="prefix">{</mo><mi>x</mi><mo>:</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo fence="true" form="postfix">}</mo></math>'
  assert.equal(relationsIn(set), 0)
  assert.equal(
    relationsIn(`${set.slice(0, -'</math>'.length)}<mo>=</mo><mi>S</mi></math>`),
    1,
    'a sign after the bracket closes counts'
  )
})

test('one number or one name is one token; anything longer is not', () => {
  assert.ok(isOneToken('<math><mn>64</mn></math>'))
  assert.ok(isOneToken('<math><mi>n</mi></math>'))
  assert.ok(!isOneToken('<math><mi>n</mi><mo>+</mo><mn>1</mn></math>'))
  assert.ok(!isOneToken('<math><mtext>metres</mtext></math>'))
  assert.ok(!isOneToken('<math><msup><mi>x</mi><mn>2</mn></msup></math>'))
})

test('a formula that ends in a script is told from one that only holds one', () => {
  assert.ok(endsInScript('<math><msup><mi>x</mi><mn>2</mn></msup></math>'))
  assert.ok(
    endsInScript(
      '<math><mrow><mrow></mrow><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>'
    )
  )
  assert.ok(!endsInScript('<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></math>'))
  assert.ok(!endsInScript('<math><msqrt><msup><mi>x</mi><mn>2</mn></msup></msqrt></math>'))
})

test('a fraction, a table, a sign with limits and a large operator are taller than the line; scripts and a plain root are not', () => {
  assert.ok(isTall('<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'))
  assert.ok(isTall('<math><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt></math>'))
  assert.ok(isTall('<math><mtable><mtr><mtd><mi>x</mi></mtd></mtr></mtable></math>'))
  assert.ok(isTall('<math><munder><mi>lim</mi><mrow><mi>x</mi></mrow></munder></math>'))
  assert.ok(
    isTall('<math><msubsup><mo movablelimits="false">∑</mo><mn>1</mn><mi>n</mi></msubsup></math>')
  )
  assert.ok(!isTall('<math><msup><mi>x</mi><mn>2</mn></msup></math>'))
  assert.ok(!isTall('<math><msqrt><mn>64</mn></msqrt></math>'))
  assert.ok(!isTall('<math><mroot><mi>x</mi><mi>n</mi></mroot></math>'))
  assert.ok(!isTall('<math><mi>n</mi><mo>≥</mo><mn>2</mn></math>'))
})
