// The typed answer syntax, as the maths units read it.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parse, read, readMessage, toTex } from './answer-syntax.logic.js'

/** @param {string} s */
const tex = s => {
  const t = parse(s)
  assert.ok(t.ok, s)
  return toTex(t.value)
}

test('a power binds before a sign in front, and before * and /', () => {
  assert.equal(tex('x^-1/3'), '\\frac{{x}^{-1}}{3}')
  assert.equal(tex('-x^2'), '-{x}^{2}')
  assert.equal(tex('2*x^3'), '2 {x}^{3}')
  assert.equal(tex('a^b^c'), '{a}^{{b}^{c}}')
})

test('the answer is set as typed: brackets stay, nothing is simplified or reordered', () => {
  assert.equal(tex('(x+2)*(3*x-5)'), '(x+2) (3 x-5)')
  // Brackets grow only around a fraction.
  assert.match(tex('(x/2+1)*y'), /^\\left\(.*\\frac.*\\right\)/)
  assert.equal(tex('6/8'), '\\frac{6}{8}')
  assert.equal(tex('x+x'), 'x+x')
  assert.equal(tex('(3*x^(1/3))/(4+sqrt(2))+3'), '\\frac{3 {x}^{\\frac{1}{3}}}{4+\\sqrt{2}}+3')
  assert.equal(tex('2*pi*r'), '2 \\pi  r')
  assert.equal(tex('x*3'), 'x \\times 3')
  assert.equal(tex('2*-3'), '2 \\times -3')
})

test('letters keep their case; spaces and the typographic minus are read through', () => {
  assert.equal(tex(' D + d '), 'D+d')
  assert.equal(tex('−7'), '-7')
  assert.equal(tex('12 345'), '12345')
})

test('not read: a missing *, a bare decimal point, unbalanced brackets, an unknown character', () => {
  /**
   * @param {string} s
   * @param {string} message
   */
  const no = (s, message) => {
    const r = read(s)
    assert.equal(r.ok ? null : readMessage(r.error), message, s)
  }
  no('2x', 'Use * between factors.')
  no('ab', 'Use * between factors.')
  no('2(x+1)', 'Use * between factors.')
  no('(x+1)(x-1)', 'Use * between factors.')
  no('.5', 'Write a digit on each side of the decimal point.')
  no('5.', 'Write a digit on each side of the decimal point.')
  no('(x+1', 'A bracket ( has no ) after it.')
  no('x+1)', 'A bracket ) has no ( before it.')
  no('x+', 'A sign has nothing after it.')
  no('(3*)', 'A sign has nothing after it.')
  no('()', 'There is nothing inside the brackets.')
  no('*3', 'Write something before the * sign.')
  no('x^', 'A sign has nothing after it.')
  no('2**3', 'Use ^ for a power, not **.')
  no('x)(', 'A bracket ) has no ( before it.')
  no('', 'Check the brackets and the signs.')
  no('2^^3', 'Write something before the ^ sign.')
  no('x÷2', 'Use / for divide.')
  no('3×x', 'Use * for times.')
  no('√2', 'Use sqrt( ) for a square root.')
  no('2π', 'Write pi in small letters.')
  no('x²', 'Use ^ for a power, as in x^2.')
  no('[x+1]', 'Use round brackets ( ) only.')
  no('é', 'An answer does not use the character é.')
  no('x=', 'Write something on both sides of each =, comma and semicolon.')
  no('1,,2', 'Write something on both sides of each =, comma and semicolon.')
})

test('a whole answer: an equation, a list, pairs', () => {
  assert.deepEqual(read('a = 6/7'), { ok: true, value: 'a = \\frac{6}{7}' })
  assert.deepEqual(read('72, 6'), { ok: true, value: '72,\\ 6' })
  assert.deepEqual(read('1, 28; 2, 14'), { ok: true, value: '1,\\ 28;\\ 2,\\ 14' })
})
