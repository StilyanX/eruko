// Hides: the forms a problem may state ("Required marks" in "Worked examples and problems"), each
// one fixed sentence, and the test of a typed answer against the stored one in its form. The
// screens show the form and the stored answer, and the learner marks their own; the data tests
// hold every stored answer to its form with `matchAnswer`. Pure functions, tested in
// tests/arithmetic-check.test.mjs.
import { gcd, listOf, matched } from '../../../kernel/answer.logic.js'

/** @typedef {{ n: bigint, d: bigint }} Rat A rational number in lowest terms, d > 0. */
/** @typedef {(typed: string, stored: string) => boolean} Match Decides a typed answer against the stored one. */

/**
 * The rational n/d in lowest terms, for a d that is not zero.
 * @param {bigint} n
 * @param {bigint} d
 * @returns {Rat}
 */
const exact = (n, d) => {
  if (d < 0n) [n, d] = [-n, -d]
  const g = gcd(n, d) || 1n
  return { n: n / g, d: d / g }
}
/**
 * The rational n/d in lowest terms, or null for a zero denominator.
 * @param {bigint} n
 * @param {bigint} [d]
 * @returns {Rat | null}
 */
const rat = (n, d = 1n) => (d === 0n ? null : exact(n, d))
/**
 * @param {Rat | null} a
 * @param {Rat | null} b
 */
const eq = (a, b) => Boolean(a && b && a.n === b.n && a.d === b.d)

/**
 * Group `i` of a match whose pattern always fills it.
 * @param {RegExpMatchArray} m
 * @param {number} i
 */
const group = (m, i) => m[i] ?? ''
/** @param {number} k */
const pow10 = k => 10n ** BigInt(k)

// Spaces inside a number (\s covers the thin space) group digits and carry no meaning.
/** @param {unknown} s */
const squash = s => String(s).replace(/\s+/g, ' ').trim()
/** @param {unknown} s */
const nospace = s => String(s).replace(/\s+/g, '')
/** @param {string} s */
const minus = s => s.replace(/[\u2212\u2013]/g, '-')

/**
 * A whole number or an integer, as typed: "12 345", "-7".
 * @param {string} s
 */
function parseInt_(s) {
  const t = minus(nospace(s))
  return /^[-+]?\d+$/.test(t) ? rat(BigInt(t)) : null
}

// A fraction's spaces sit around its bar. A space between a whole part and a fraction makes a mixed number.
/** @param {string} s */
const bar = s => minus(squash(s)).replace(/\s*\/\s*/g, '/')

/**
 * "3/4", "-12/5".
 * @param {string} s
 */
function parseFraction(s) {
  const m = bar(s).match(/^([-+]?)(\d+)\/(\d+)$/)
  return m ? rat(BigInt(group(m, 1) + group(m, 2)), BigInt(group(m, 3))) : null
}

/**
 * "3 1/4", "-2 3/5": a whole part, a space, a proper fraction.
 * @param {string} s
 */
function parseMixed(s) {
  const m = minus(squash(s)).match(/^([-+]?)(\d+) (\d+)\/(\d+)$/)
  if (!m) return null
  const w = BigInt(group(m, 2))
  const n = BigInt(group(m, 3))
  const d = BigInt(group(m, 4))
  if (d === 0n || n >= d) return null
  const r = exact(w * d + n, d)
  return group(m, 1) === '-' ? rat(-r.n, r.d) : r
}

/**
 * A finite decimal: "0.375", "-12.5", ".5".
 * @param {string} s
 */
function parseDecimal(s) {
  const m = minus(nospace(s)).match(/^([-+]?)(\d*)\.(\d+)$|^([-+]?)(\d+)$/)
  if (!m) return null
  // The second branch of the pattern fills groups 4 and 5, the first fills 1 to 3.
  if (m[5] !== undefined) return rat(BigInt(group(m, 4) + m[5]))
  const whole = m[2] || '0'
  const frac = group(m, 3)
  return rat(BigInt(group(m, 1) + whole + frac), pow10(frac.length))
}

/**
 * A repeating decimal with the repeating block in brackets: "0.1(6)", "2.(142857)".
 * @param {string} s
 */
function parseRepeating(s) {
  const m = minus(nospace(s)).match(/^([-+]?)(\d*)\.(\d*)\((\d+)\)$/)
  if (!m) return null
  const whole = BigInt(m[2] || '0')
  const a = group(m, 3)
  const r = group(m, 4)
  // x = whole + (a r r r ...) / 10^|a|
  const num = BigInt(a + r || '0') - BigInt(a || '0')
  const den = (pow10(r.length) - 1n) * pow10(a.length)
  const v = exact(whole * den + num, den)
  return group(m, 1) === '-' ? rat(-v.n, v.d) : v
}

/**
 * "37.5%"
 * @param {string} s
 */
function parsePercent(s) {
  const t = nospace(s)
  if (!t.endsWith('%')) return null
  const v = parseDecimal(t.slice(0, -1)) ?? parseFraction(t.slice(0, -1))
  return v && rat(v.n, v.d * 100n)
}

/**
 * "3.2 × 10^4", "3.2x10^-3", "3.2*10^4". Returns { value, a }, so that the rule 1 ≤ a < 10 can be checked.
 * @param {string} s
 * @returns {{ value: Rat | null, a: Rat } | null}
 */
function parseSci(s) {
  const m = minus(nospace(s)).match(/^([-+]?[\d.]+)[×x*·]10\^\(?([-+]?\d+)\)?$/i)
  if (!m) return null
  const a = parseDecimal(group(m, 1))
  if (!a) return null
  const k = Number(group(m, 2))
  const v = k >= 0 ? rat(a.n * pow10(k), a.d) : rat(a.n, a.d * pow10(-k))
  return { value: v, a }
}

/**
 * Each written form of a number that the forms name.
 * @param {string} s
 */
export function parseNumber(s) {
  return (
    parseInt_(s) ??
    parseFraction(s) ??
    parseMixed(s) ??
    parseRepeating(s) ??
    parseDecimal(s) ??
    parsePercent(s) ??
    parseSci(s)?.value ??
    null
  )
}

/**
 * The tenths of the line a non-negative number lies in, by the index of each tenth: one, or two
 * for a number on a line between tenths (either neighbouring tenth).
 * @param {Rat} v
 * @returns {readonly bigint[]}
 */
export function tenthsOf(v) {
  const tenth = (10n * v.n) / v.d
  return (10n * v.n) % v.d === 0n ? [tenth - 1n, tenth] : [tenth]
}

/**
 * A place on the number line, typed as a decimal or marked in hundredths: right when it falls in
 * the same tenth as the exact value, so a typed one-place decimal is right at either end of that
 * tenth.
 * @type {Match}
 */
const placed = (typed, stored) => {
  const t = parseNumber(typed)
  const s = parseNumber(stored)
  return t !== null && s !== null && t.n >= 0n && tenthsOf(t).some(k => tenthsOf(s).includes(k))
}

/**
 * "2^3 × 3 × 5" as { 2: 3, 3: 1, 5: 1 }.
 * @param {string} s
 * @returns {Record<string, number> | null}
 */
function parseFactors(s) {
  const t = nospace(s)
  if (!t) return null
  /** @type {Record<string, number>} */
  const out = {}
  for (const part of t.split(/[×x*·]/i)) {
    const m = part.match(/^(\d+)(?:\^\(?(\d+)\)?)?$/)
    if (!m) return null
    const prime = group(m, 1)
    out[prime] = (out[prime] || 0) + Number(m[2] || 1)
  }
  return out
}
/**
 * @param {Record<string, number> | null} a
 * @param {Record<string, number> | null} b
 */
const sameFactors = (a, b) =>
  a !== null &&
  b !== null &&
  Object.keys(a).length === Object.keys(b).length &&
  Object.keys(a).every(k => a[k] === b[k])

/**
 * A fraction typed already in lowest terms.
 * @param {string} s
 */
const lowest = s => {
  const f = parseFraction(s)
  const m = bar(s).match(/^[-+]?\d+\/(\d+)$/)
  return f && m && BigInt(group(m, 1)) === f.d ? f : null
}
/**
 * A mixed number typed with its fraction in lowest terms.
 * @param {string} s
 */
const lowestMixed = s => {
  const v = parseMixed(s)
  const m = minus(squash(s)).match(/(\d+)\/(\d+)$/)
  return v && m && gcd(BigInt(group(m, 1)), BigInt(group(m, 2))) === 1n ? v : null
}

const list = listOf(String)
/** @type {Match} */
const ints = list((/** @type {string} */ t, /** @type {string} */ s) =>
  eq(parseInt_(t), parseInt_(s))
)
/**
 * @param {(s: string) => Rat | null} parse
 * @returns {Match}
 */
const byValue = parse => (typed, stored) => eq(parse(typed), parseNumber(stored))
const anyValue = byValue(parseNumber)
/** @type {Match} */
const sci = (t, s) => {
  const v = parseSci(t)
  if (!v) return false
  const abs = v.a.n < 0n ? -v.a.n : v.a.n
  return abs >= v.a.d && abs < 10n * v.a.d && eq(v.value, parseSci(s)?.value ?? parseNumber(s))
}
// A fraction left over a power of 10, as typed: "15/100", not the equal "3/20".
/** @type {Match} */
const overPow10 = (t, s) => /\/10*$/.test(bar(t)) && eq(parseFraction(t), parseNumber(s))
/** @type {Match} */
const text = (typed, stored) => nospace(typed).toLowerCase() === nospace(stored).toLowerCase()

/** A base-b expansion, typed with or without its "( )_b": the digits must match. A base above 10
 * writes each digit as a number and separates them with spaces, so there the spaces count. */
/** @param {string} s */
const unwrap = s => s.trim().replace(/^\((.*)\)_\{?\d+\}?$/, '$1').trim()
/** @type {Match} */
const digits = (typed, stored) => {
  const s = unwrap(stored)
  const t = unwrap(typed)
  return / /.test(s) ? t.split(/\s+/).join(' ') === s.split(/\s+/).join(' ') : nospace(t) === nospace(s)
}

/**
 * Every form a problem may state, worded once. `match(typed, stored)` decides a typed answer.
 * "or equivalent" accepts every written form of the same number.
 * @type {Record<string, Match | null>}
 */
export const FORMS = {
  'Answer as a whole number.': (t, s) => {
    const v = parseInt_(t)
    return v !== null && eq(v, parseInt_(s)) && v.n >= 0n
  },
  'Answer as an integer.': byValue(parseInt_),
  'Answer as a fraction in lowest terms.': (t, s) => eq(lowest(t) ?? parseInt_(t), parseNumber(s)),
  'Answer as a fraction in lowest terms, or equivalent.': anyValue,
  'Answer as a mixed number in lowest terms.': (t, s) =>
    eq(lowestMixed(t) ?? parseInt_(t), parseNumber(s)),
  'Answer as a mixed number in lowest terms, or equivalent.': anyValue,
  'Answer as a finite decimal.': byValue(parseDecimal),
  'Answer as a finite decimal, or equivalent.': anyValue,
  'Answer as a repeating decimal, the repeating block in brackets, as in 0.2(3).':
    byValue(parseRepeating),
  'Answer as a percent, as in 42.5%.': byValue(parsePercent),
  'Answer as a percent, as in 25/6%.': byValue(parsePercent),
  'Answer as a number, or equivalent.': anyValue,
  'Answer as a fraction whose denominator is a power of 10, as in 43/100.': overPow10,
  'Answer as a × 10^k with 1 ≤ a < 10, as in 3.2 × 10^4.': sci,
  'Answer as a power of 10, as in 1 × 10^9.': sci,
  'Answer as Yes or No.': text,
  'Answer as the digits, as in 1011.': digits,
  'Answer as the digits separated by spaces, as in 2 11 7.': digits,
  'Answer as the product of primes, as in 2^3 × 3 × 5.': (t, s) =>
    sameFactors(parseFactors(t), parseFactors(s)),
  'Answer as whole numbers separated by commas, in the order asked.': ints,
  'Answer as whole numbers separated by commas, in increasing order.': ints,
  'Answer as integers separated by commas, in the order asked.': ints,
  'Answer as the quotient and the remainder, separated by a comma.': ints,
  'Answer as numbers separated by commas, in the order asked, or equivalent.': list(anyValue),
  'Answer as a mark on the line, or as a decimal to one place.': placed,
  'Write a proof.': null
}

/** The form of a problem that asks for a place on the number line. */
export const PLACE_FORM = 'Answer as a mark on the line, or as a decimal to one place.'

/** The form a proof problem states. The answer is checked line by line against the printed proof. */
export const PROOF_FORM = 'Write a proof.'

/**
 * True when the typed answer matches the stored one in the problem's form.
 * @param {string} typed
 * @param {string} stored
 * @param {string} form
 */
export const matchAnswer = (typed, stored, form) => matched(FORMS[form], typed, stored)
