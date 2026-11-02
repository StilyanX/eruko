// Typed answers against stored ones, in the problem's form ("A Self-Study System", Mathematics, "Every answer").
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { matchAnswer } from './check.logic.js'
import { formFaults, storedAnswers } from '../../../../tests/lib/answer-forms.mjs'

/** @param {string} t @param {string} s @param {string} f */
const ok = (t, s, f) => assert.ok(matchAnswer(t, s, f), `${t} ~ ${s} (${f})`)
/** @param {string} t @param {string} s @param {string} f */
const no = (t, s, f) => assert.ok(!matchAnswer(t, s, f), `${t} !~ ${s} (${f})`)

test('whole numbers and integers, digit groups ignored', () => {
  ok('12 345', '12345', 'Answer as a whole number.')
  ok(' 7 ', '7', 'Answer as a whole number.')
  no('-7', '-7', 'Answer as a whole number.')
  ok('−7', '-7', 'Answer as an integer.')
  no('', '0', 'Answer as a whole number.')
})

test('a decimal typed with its digits grouped, a space or a thin space, is the same decimal', () => {
  ok('7.542 93', '7.54293', 'Answer as a finite decimal.')
  ok('12 345.678\u2009901', '12345.678901', 'Answer as a finite decimal.')
})

test('fractions in lowest terms: exact; "or equivalent": every written form of the same number', () => {
  ok('3/14', '3/14', 'Answer as a fraction in lowest terms.')
  no('6/28', '3/14', 'Answer as a fraction in lowest terms.')
  ok('6/28', '3/14', 'Answer as a fraction in lowest terms, or equivalent.')
  ok('1.5', '3/2', 'Answer as a fraction in lowest terms, or equivalent.')
  ok('1 1/2', '3/2', 'Answer as a fraction in lowest terms, or equivalent.')
  ok('0.(3)', '1/3', 'Answer as a fraction in lowest terms, or equivalent.')
})

test('a fraction over a power of 10 accepts no equal fraction over another denominator', () => {
  const f = 'Answer as a fraction whose denominator is a power of 10, as in 43/100.'
  ok('15/100', '15/100', f)
  ok('150 / 1000', '15/100', f)
  ok('34/10', '34/10', f)
  no('3/20', '15/100', f)
  no('0.15', '15/100', f)
  no('15/101', '15/100', f)
  no('16/100', '15/100', f)
})

test('mixed numbers', () => {
  ok('3 1/4', '3 1/4', 'Answer as a mixed number in lowest terms.')
  no('3 2/8', '3 1/4', 'Answer as a mixed number in lowest terms.')
  no('13/4', '3 1/4', 'Answer as a mixed number in lowest terms.')
  ok('13/4', '3 1/4', 'Answer as a mixed number in lowest terms, or equivalent.')
})

test('decimals, repeating decimals, percents, scientific notation, powers of ten', () => {
  ok('0.375', '0.375', 'Answer as a finite decimal.')
  ok('0.3750', '0.375', 'Answer as a finite decimal.')
  no('3/8', '0.375', 'Answer as a finite decimal.')
  ok('0.1(6)', '0.1(6)', 'Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).')
  ok('0.16(6)', '0.1(6)', 'Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).')
  no('0.16', '0.1(6)', 'Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).')
  ok('37.5%', '37.5%', 'Answer as a percent, as in 42.5%.')
  no('37.5', '37.5%', 'Answer as a percent, as in 42.5%.')
  ok('100/3%', '100/3%', 'Answer as a percent, as in 25/6%.')
  ok('100 / 3 %', '100/3%', 'Answer as a percent, as in 25/6%.')
  no('33.33%', '100/3%', 'Answer as a percent, as in 25/6%.')
  no('100/3', '100/3%', 'Answer as a percent, as in 25/6%.')
  ok('3.2x10^4', '3.2 × 10^4', 'Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.')
  no('32 × 10^3', '3.2 × 10^4', 'Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.')
  ok('1.5 × 10^-3', '1.5 × 10^-3', 'Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.')
  ok('1x10^4', '1 × 10^4', 'Answer as a power of 10, as in 1 × 10^9.')
  no('3 × 10^4', '1 × 10^4', 'Answer as a power of 10, as in 1 × 10^9.')
})

test('yes or no, digits, prime products, lists', () => {
  ok('yes', 'Yes', 'Answer as Yes or No.')
  ok('10 11', '1011', 'Answer as the digits, as in 1011.')
  ok('24', '(24)_7', 'Answer as the digits, as in 1011.')
  ok('(24)_7', '(24)_7', 'Answer as the digits, as in 1011.')
  no('25', '(24)_7', 'Answer as the digits, as in 1011.')
  ok('1 3 10', '(1 3 10)_12', 'Answer as the digits separated by spaces, as in 2 11 7.')
  no('1310', '(1 3 10)_12', 'Answer as the digits separated by spaces, as in 2 11 7.')
  ok('3 × 2^3 × 5', '2^3 × 3 × 5', 'Answer as the product of primes, as in 2^3 × 3 × 5.')
  no('2^2 × 3 × 5', '2^3 × 3 × 5', 'Answer as the product of primes, as in 2^3 × 3 × 5.')
  ok('4,1', '4, 1', 'Answer as the quotient and the remainder, separated by a comma.')
  no('1, 4', '4, 1', 'Answer as the quotient and the remainder, separated by a comma.')
  ok('1/2, 0.75', '1/2, 3/4', 'Answer as numbers separated by commas, in the order asked, or equivalent.')
})

test('an unknown form or a proof matches nothing', () => {
  no('x', 'x', 'Write a proof.')
  no('1', '1', 'Answer as something else.')
})

test('every stored answer passes its own form, and no form\'s "as in" example is an answer to a problem of that form', async () => {
  const { own, example } = formFaults(await storedAnswers('arithmetic'), matchAnswer)
  assert.deepEqual(own, [])
  assert.deepEqual(example, [])
})

test('a place on the line is right in the same tenth as the value, a value on a tenth line taking either neighbour', () => {
  const f = 'Answer as a mark on the line, or as a decimal to one place.'
  ok('3.4', '17/5', f)
  ok('3.30', '17/5', f)
  ok('3.5', '17/5', f)
  ok('3.37', '17/5', f)
  no('3.6', '17/5', f)
  no('3.2', '17/5', f)
  ok('0.3', '3/8', f)
  ok('0.4', '3/8', f)
  ok('0.35', '3/8', f)
  no('0.5', '3/8', f)
  no('0.2', '3/8', f)
  ok('0.80', '0.8', f)
  ok('0.8', '0.80', f)
  ok('1.25', '125%', f)
  ok('0.3', '1/3', f)
  no('-0.3', '1/3', f)
  no('0.3', 'word', f)
})
