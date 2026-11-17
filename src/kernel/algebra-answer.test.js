// The exact normal form: equal expressions compare equal, different ones never do.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parse, readMessage } from './answer-syntax.logic.js'
import { constant, same, value } from './algebra-answer.logic.js'

/**
 * The value of a typed expression; a test fails at once on one that has none.
 * @param {string} typed
 */
function valueOrThrow(typed) {
  const tree = parse(typed)
  const v = tree.ok ? value(tree.value) : tree
  if (!v.ok) throw new Error(`${typed}: ${readMessage(v.error)}`)
  return v.value
}

/**
 * @param {string} a
 * @param {string} b
 */
const eq = (a, b) => {
  const r = same(valueOrThrow(a), valueOrThrow(b))
  assert.ok(r.ok, `${a}, ${b}`)
  return r.value
}
/**
 * @param {string} a
 * @param {string} b
 */
const yes = (a, b) => assert.ok(eq(a, b), `${a} = ${b}`)
/**
 * @param {string} a
 * @param {string} b
 */
const no = (a, b) => assert.ok(!eq(a, b), `${a} ≠ ${b}`)

test('brackets multiply out, and fractions cross-multiply', () => {
  yes('(x+2)*(3*x-5)', '3*x^2+x-10')
  yes('x/(1-x)-1/x', '(x^2+x-1)/(x*(1-x))')
  yes('(a-b)/(b-a)', '-1')
  yes('1/(1/x+1/y)', 'x*y/(x+y)')
  yes('(a^2-b^2)/(a-b)', 'a+b')
  yes('2*pi*r/(pi*r^2)', '2/r')
})

test('square roots of numbers: the square part comes out, a root below comes up', () => {
  yes('sqrt(48)', '4*sqrt(3)')
  yes('sqrt(2)*sqrt(8)', '4')
  yes('1/sqrt(2)', 'sqrt(2)/2')
  yes('sqrt(12)+sqrt(27)', '5*sqrt(3)')
  yes('sqrt(2)/(5-2*sqrt(3))', '(5*sqrt(2)+2*sqrt(6))/13')
  yes('(sqrt(2)+sqrt(3))/sqrt(6)', '(2*sqrt(3)+3*sqrt(2))/6')
  no('sqrt(2)+sqrt(3)', 'sqrt(5)')
})

test('indices: negative, fractional, on two bases, and holding letters', () => {
  yes('x^-1/3', '1/(3*x)')
  yes('x^(-1/3)', '1/x^(1/3)')
  yes('x^0', '1')
  yes('2^(1/2)*2^(1/3)', '2^(5/6)')
  yes('4*g^2/h^6', '(2*g/h^3)^2')
  yes('(2*x)^(5/4)*x^(3/4)', '2^(5/4)*x^2')
  yes('(3*h)^(2*p)*(9*h)^p', '3^(4*p)*h^(3*p)')
  yes('e^x*e^(2*x)', 'e^(3*x)')
  yes('sqrt(1/x)', 'sqrt(x)/x')
  no('x^2', 'x^3')
  no('x^(1/3)', 'x^-1/3')
})

test('odd roots are real roots; even roots of a negative are not', () => {
  yes('-((x+28)/6)^(1/3)', '((-x-28)/6)^(1/3)')
  yes('((-x-28)/6)^(1/3)', '-((x+28)/6)^(1/3)')
  yes('-(x/2)^(1/3)', '(-x/2)^(1/3)')
  yes('(-x/2)^(1/3)', '-(x/2)^(1/3)')
  yes('((x+28)/(-6))^(1/3)', '-(x+28)^(1/3)/6^(1/3)')
  no('((x+28)/6)^(1/3)', '-((x+28)/6)^(1/3)')
})

test('a sum under a root is kept whole, its content taken out', () => {
  yes('(1+x)^2/sqrt(1+x)', '(1+x)*sqrt(1+x)')
  yes('sqrt(x-1)*sqrt(x-1)', 'x-1')
  yes('sqrt(4*x+4)', '2*sqrt(x+1)')
  yes('sqrt(x^2*(x+1))', 'x*sqrt(x+1)')
  yes('((c+D)/3)^(1/4)', '(c+D)^(1/4)/3^(1/4)')
  yes('((c+D)/3)^0.25', '((D+c)/3)^(1/4)')
  no('sqrt(x+1)', 'sqrt(x)+1')
  no('sqrt(x-1)', 'sqrt(1-x)')
})

test('a root of a product, a quotient or a power is the product, quotient or power of the roots', () => {
  yes('sqrt((n+5)^3)', '(n+5)^(3/2)')
  yes('((n+5)^3)^(1/2)', '(n+5)*sqrt(n+5)')
  yes('sqrt(((5-w)/2)^3)', '((5-w)/2)^(3/2)')
  yes('sqrt((x+1)*(x+2))', 'sqrt(x+1)*sqrt(x+2)')
  yes('sqrt(y^5)', 'y^2*sqrt(y)')
  yes('sqrt(sqrt(x))', 'x^(1/4)')
  yes('sqrt((-3)^2)', '3')
  yes('sqrt((-2)*(-8))', '4')
})

test('an index may hold a product of letters', () => {
  yes('(g^n)^k', 'g^(n*k)')
  yes('g^(k*n)', 'g^(n*k)')
  yes('x^(k^2)', 'x^(k*k)')
  no('(g^n)^k', 'g^(n+k)')
})

test('a number is read back from its value; a letter or a root is not a number', () => {
  assert.deepEqual(constant(valueOrThrow('6/8')), { n: 3n, d: 4n })
  assert.deepEqual(constant(valueOrThrow('2-2')), { n: 0n, d: 1n })
  assert.equal(constant(valueOrThrow('sqrt(2)')), null)
  assert.equal(constant(valueOrThrow('x')), null)
})

test('an expression too large, a division by zero, a root of a negative number and a zero to an unknown power are not read', () => {
  for (const s of [
    '(x+1)^1000',
    '1/(x-x)',
    '2^(10^9)',
    'sqrt(-4)',
    '0^-1',
    '(-8)^(1/3)',
    '(-x)^(1/2)',
    '(x-x)^(-1/2)',
    '0^x'
  ]) {
    const from = Date.now()
    const tree = parse(s)
    assert.ok(tree.ok, s)
    assert.equal(value(tree.value).ok, false, s)
    assert.ok(Date.now() - from < 500, `${s} is refused at once`)
  }
})
