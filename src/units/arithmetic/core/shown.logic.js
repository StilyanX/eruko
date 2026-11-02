// Hides: how Arithmetic shows a stored answer, and the example after "as in" in a form line: as
// mathematics, the way the topic files write numbers ($4\,775$, $\frac{3}{4}$, $3.2\times10^{4}$),
// never as typed syntax (4 775, 3/4, 3.2 × 10^4). Answers are worked on paper and never typed, so
// the syntax has no use on the screen. The text returned is a topic-file string, with $...$ for
// maths; a piece of it that the generator could not set is shown as typed instead
// (core/screens.dom.js). scripts/gen/mathml.mjs sets every piece ahead. Pure functions,
// tested in tests/arithmetic-shown.test.mjs.

/** @param {string} s */
const minus = s => s.trim().replace(/[−–]/g, '-')

/**
 * Digits grouped in threes with a thin space, from the point outward, as the topic files write
 * every number of four or more digits.
 * @param {string} digits
 * @param {boolean} [fraction] digits after the point, grouped from the left
 */
function group(digits, fraction = false) {
  if (digits.length < 4) return digits
  const out = []
  if (fraction) for (let i = 0; i < digits.length; i += 3) out.push(digits.slice(i, i + 3))
  else for (let i = digits.length; i > 0; i -= 3) out.unshift(digits.slice(Math.max(0, i - 3), i))
  return out.join('\\,')
}

/**
 * One number as TeX, or null when it is not one of the written forms below: a whole number or an
 * integer (spaces group digits), a finite decimal, a repeating decimal with its block in brackets,
 * a fraction, a mixed number, a percent of any of these, a × 10^k, and a product of prime powers.
 * @param {string} typed
 * @returns {string | null}
 */
export function numberTex(typed) {
  const s = minus(typed)
  /** @type {(m: RegExpMatchArray, i: number) => string} */
  const g = (m, i) => m[i] ?? ''
  let m
  if ((m = s.match(/^([-+]?)(\d{1,3}(?: \d{3})*|\d+)$/)))
    return `${g(m, 1)}${group(g(m, 2).replace(/ /g, ''))}`
  // A decimal's spaces group its digits, on either side of the point.
  if (
    (m = s.replace(/(\d) (?=\d)/g, '$1').match(/^([-+]?)(\d*)\.(\d*)(?:\((\d+)\))?$/)) &&
    (g(m, 3) || g(m, 4))
  )
    return `${g(m, 1)}${group(g(m, 2) || '0')}.${group(g(m, 3), true)}${g(m, 4) ? `(${g(m, 4)})` : ''}`
  if ((m = s.match(/^([-+]?)(\d+)\s*\/\s*(\d+)$/)))
    return `${g(m, 1)}\\frac{${g(m, 2)}}{${g(m, 3)}}`
  if ((m = s.match(/^([-+]?)(\d+) (\d+)\/(\d+)$/)))
    return `${g(m, 1)}${g(m, 2)}\\frac{${g(m, 3)}}{${g(m, 4)}}`
  if ((m = s.match(/^(.+?)\s*%$/))) {
    const n = numberTex(g(m, 1))
    return n === null ? null : `${n}\\%`
  }
  if ((m = s.match(/^([-+]?[\d.]+)\s*[×x*·]\s*10\^\(?([-+]?\d+)\)?$/i))) {
    const a = numberTex(g(m, 1))
    return a === null ? null : `${a}\\times10^{${g(m, 2)}}`
  }
  const factors = s.split(/\s*[×x*·]\s*/i)
  if (factors.every(f => /^\d+(\^\d+)?$/.test(f)))
    return factors.map(f => f.replace(/\^(\d+)$/, '^{$1}')).join('\\times')
  return null
}

/**
 * A base-b expansion, "(2221)_3" or "(44 1 19 0 5)_60", as TeX; its digits are never grouped. A
 * base above 10 writes each digit as a number, the digits apart.
 * @param {string} typed
 */
function digitsTex(typed) {
  const m = typed.trim().match(/^(?:\(([\d ]+)\)_\{?(\d+)\}?|([\d ]+))$/)
  if (!m) return null
  const digits = (m[1] ?? m[3] ?? '').trim().split(/\s+/).join('\\ ')
  return m[2] ? `(${digits})_{${m[2]}}` : digits
}

/**
 * A stored answer, or the example after "as in", as the screen shows it: a topic-file string
 * whose maths is between $...$, or null when some part of it is not a written form of a number
 * (the screen then shows it as typed). Yes or No stays a word. A list keeps its commas as text,
 * so a long list wraps between its numbers.
 * @param {string} typed
 * @param {string} form the problem's form
 * @returns {string | null}
 */
export function answerText(typed, form) {
  if (/^Answer as Yes or No\./.test(form)) return typed
  const one = /^Answer as the digits/.test(form) ? digitsTex : numberTex
  const items = typed.split(/\s*,\s*/)
  const set = items.map(one)
  return set.every(t => t !== null) ? set.map(t => `$${t}$`).join(', ') : null
}

/**
 * The words of a form line that are typed syntax, as maths.
 * @type {Record<string, string>}
 */
const WORDS = {
  'Answer as a × 10^k with 1 ≤ a < 10': 'Answer as $a\\times10^{k}$ with $1\\le a<10$'
}

/**
 * The words of a form line, before its "as in", as the screen shows them.
 * @param {string} words
 */
export const formWords = words => WORDS[words] ?? words
