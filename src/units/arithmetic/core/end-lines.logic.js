// Hides: the lines of arithmetic's end level (Mathematics, "The end level") and their problems:
// which lines there are and in what order, the fixed sheets of the pace lines, the entries each
// problem asks and in what order, how each entry is checked, each problem's allowance and answer,
// and the key that makes a swapped pair one problem. A problem is a list of whole numbers: the
// place of an item on a pace line's fixed sheet, the two factors of a product or an estimate, or
// the number of a π estimate or a factoring. Pure functions.
import { factSet } from '../../../kernel/facts.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import {
  HELD_PI,
  PI_PLACES,
  columnTotals,
  estimateAllowance,
  factorAllowance,
  factorWork,
  piAllowance,
  productAllowance
} from './end-count.logic.js'

/**
 * @typedef {'facts' | 'primes' | 'squares' | 'pi-multiples' | 'prime-multiples' | 'sums' |
 *   'product-3' | 'product-4' | 'estimates' | 'pi-estimates' | 'factoring'} LineId
 */
/** @typedef {'pace' | 'product' | 'estimate' | 'pi' | 'factor'} LineKind */
/** A problem of a line. @typedef {readonly number[]} Problem */
/** An item of a pace line's fixed sheet: its question and its answer as written. @typedef {Readonly<{ q: string, a: string }>} PaceItem */

/**
 * A line: its title, its kind, for a pace line its step in hundredths of a second, and what it
 * opens on (Mathematics, "The end level", Opens): its own number-facts set, or every set passed
 * and the section of the course its items use finished.
 * @typedef {Readonly<{
 *   id: LineId,
 *   title: string,
 *   kind: LineKind,
 *   step?: number,
 *   opens: Readonly<{ set: import('../../../kernel/facts.logic.js').Operation } | { section: string }>
 * }>} Line
 */

/** In the order of Opens, the order a line is taken in. @type {readonly Line[]} */
export const LINES = [
  { id: 'facts', title: 'Facts', kind: 'pace', step: 126, opens: { set: 'multiplication' } },
  { id: 'sums', title: 'Sums', kind: 'pace', step: 110, opens: { set: 'addition' } },
  { id: 'primes', title: 'Primes', kind: 'pace', step: 126, opens: { section: 'Number theory' } },
  { id: 'squares', title: 'Squares', kind: 'pace', step: 126, opens: { section: 'Whole numbers' } },
  { id: 'pi-multiples', title: 'Multiples of π', kind: 'pace', step: 126, opens: { section: 'Fractions, percent and ratio' } },
  { id: 'prime-multiples', title: 'Prime multiples', kind: 'pace', step: 126, opens: { section: 'Whole numbers' } },
  { id: 'product-3', title: '3 × 3 products', kind: 'product', opens: { section: 'Whole numbers' } },
  { id: 'product-4', title: '4 × 4 products', kind: 'product', opens: { section: 'Whole numbers' } },
  { id: 'estimates', title: 'Estimates', kind: 'estimate', opens: { section: 'Fractions, percent and ratio' } },
  { id: 'pi-estimates', title: 'π estimates', kind: 'pi', opens: { section: 'Fractions, percent and ratio' } },
  { id: 'factoring', title: 'Factoring', kind: 'factor', opens: { section: 'Number theory' } }
]

/** @type {readonly LineId[]} */
export const LINE_IDS = LINES.map(l => l.id)

/**
 * @param {LineId} id
 * @returns {Line}
 */
export const lineOf = id => LINES.find(l => l.id === id) ?? { id, title: id, kind: 'pace', opens: { section: '' } }

/** @param {unknown} v @returns {v is LineId} */
export const isLineId = v => LINE_IDS.some(id => id === v)

/** π as held, times k, written with its five places. @param {number} k */
const piTimes = k => {
  const v = String(HELD_PI * k).padStart(PI_PLACES + 1, '0')
  return `${v.slice(0, -PI_PLACES)}.${v.slice(-PI_PLACES)}`
}

const PRIMES_TO_31 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

/** @type {Readonly<Record<string, readonly PaceItem[]>>} */
const PACE = {
  facts: factSet('multiplication').map(([q, a]) => ({ q, a: String(a) })),
  primes: [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map((n, i) => ({
    q: `The prime after ${n}`,
    a: String(PRIMES_TO_31[i])
  })),
  squares: PRIMES_TO_31.map(p => ({ q: `${p}²`, a: String(p * p) })),
  'pi-multiples': [1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => ({ q: `π × ${k}`, a: piTimes(k) })),
  'prime-multiples': [
    ...[11, 13, 17, 19, 23].flatMap(p => [2, 3, 4, 5, 6, 7, 8, 9].map(k => [p, k])),
    ...[2, 3, 4, 9].map(k => [29, k]),
    ...[2, 3].map(k => [31, k])
  ].map(([p = 0, k = 0]) => ({ q: `${p} × ${k}`, a: String(p * k) })),
  sums: [1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap(a =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(b => b >= a).map(b => ({ q: `${a} + ${b}`, a: String(a + b) }))
  )
}

/**
 * A pace line's fixed sheet, in its stored order.
 * @param {LineId} id
 * @returns {readonly PaceItem[]}
 */
export const paceItems = id => PACE[id] ?? []

/**
 * A line's problem in words, as the sheet shows it.
 * @param {LineId} id
 * @param {Problem} p
 */
export function questionOf(id, p) {
  const [x = 0, y = 0] = p
  const kind = lineOf(id).kind
  switch (kind) {
    case 'pace':
      return paceItems(id)[x]?.q ?? ''
    case 'product':
    case 'estimate':
      return `${x.toLocaleString('en-GB')} × ${y.toLocaleString('en-GB')}`
    case 'pi':
      return `π × ${x}`
    case 'factor':
      return `${x}`
    default:
      return unreachable(kind)
  }
}

/**
 * The entries a problem asks, in the order they are typed: a product's column totals from the
 * units column, then the product; an estimate, then the calculator's display; else one answer.
 * @param {LineId} id
 * @param {Problem} p
 * @returns {readonly string[]}
 */
export function entriesOf(id, p) {
  const [x = 0, y = 0] = p
  const kind = lineOf(id).kind
  if (kind === 'product') return [...columnTotals(x, y).map((_, k) => `Column ${k + 1}`), 'Product']
  if (kind === 'estimate') return ['Your estimate', 'Your calculator shows']
  return ['Answer']
}

/**
 * A typed decimal as a fraction n / 10^d, exactly, or null.
 * @param {string | undefined} typed
 * @returns {{ n: bigint, d: number } | null}
 */
function decimalOf(typed) {
  const t = (typed ?? '').trim().replace(/[\s,'\u2019\u202f]/g, '')
  const m = /^(\d+)(?:\.(\d*))?$/.exec(t)
  if (!m) return null
  const frac = m[2] ?? ''
  return { n: BigInt(`${m[1]}${frac}`), d: frac.length }
}

/**
 * Whether a typed answer is the number `answer` (written as a pace item writes it).
 * @param {string | undefined} typed
 * @param {string} answer
 */
function sameNumber(typed, answer) {
  const t = decimalOf(typed)
  const a = decimalOf(answer)
  if (!t || !a) return false
  const d = Math.max(t.d, a.d)
  return t.n * 10n ** BigInt(d - t.d) === a.n * 10n ** BigInt(d - a.d)
}

/** @param {string | undefined} typed */
const wholeOf = typed => {
  const t = decimalOf(typed)
  return t && t.d === 0 ? t.n : null
}

/**
 * A factoring as typed: "prime", or the primes in ascending order, each as often as it divides.
 * @param {string | undefined} typed
 * @param {number} n
 */
function factoringRight(typed, n) {
  const { factors } = factorWork(n)
  const t = (typed ?? '').trim().toLowerCase()
  if (factors.length === 1) return t === 'prime'
  const given = t.split(/[\s,×x*·.]+/).filter(Boolean)
  return given.length === factors.length && given.every((g, i) => /^\d+$/.test(g) && Number(g) === factors[i])
}

/**
 * Which entries of a problem are right, in entry order. An estimate is right under 1% from the
 * exact product, a display only when it equals it, a π estimate under 0.0001% from π as held
 * times the number; a blank is wrong.
 * @param {LineId} id
 * @param {Problem} p
 * @param {readonly string[]} typed
 * @returns {boolean[]}
 */
export function entriesRight(id, p, typed) {
  const [x = 0, y = 0] = p
  const kind = lineOf(id).kind
  switch (kind) {
    case 'pace':
      return [sameNumber(typed[0], paceItems(id)[x]?.a ?? '')]
    case 'product': {
      const totals = columnTotals(x, y)
      const product = BigInt(x) * BigInt(y)
      return [...totals.map((c, k) => wholeOf(typed[k]) === BigInt(c)), wholeOf(typed[totals.length]) === product]
    }
    case 'estimate': {
      const product = BigInt(x) * BigInt(y)
      const e = wholeOf(typed[0])
      const off = e === null ? null : e > product ? e - product : product - e
      return [off !== null && off * 100n < product, wholeOf(typed[1]) === product]
    }
    case 'pi': {
      const e = decimalOf(typed[0])
      if (!e) return [false]
      // exact = HELD_PI × x / 10^5; under 0.0001%: |e - exact| × 10^6 < exact
      const d = Math.max(e.d, PI_PLACES)
      const est = e.n * 10n ** BigInt(d - e.d)
      const exact = BigInt(HELD_PI * x) * 10n ** BigInt(d - PI_PLACES)
      const off = est > exact ? est - exact : exact - est
      return [off * 1000000n < exact]
    }
    case 'factor':
      return [factoringRight(typed[0], x)]
    default:
      return unreachable(kind)
  }
}

/**
 * The answer of each entry, as the check after a sheet shows it.
 * @param {LineId} id
 * @param {Problem} p
 * @returns {readonly string[]}
 */
export function answersOf(id, p) {
  const [x = 0, y = 0] = p
  const kind = lineOf(id).kind
  switch (kind) {
    case 'pace':
      return [paceItems(id)[x]?.a ?? '']
    case 'product':
      return [...columnTotals(x, y).map(String), String(BigInt(x) * BigInt(y))]
    case 'estimate': {
      const product = String(BigInt(x) * BigInt(y))
      return [`within 1% of ${product}`, product]
    }
    case 'pi':
      return [`within 0.0001% of ${piTimes(x)}`]
    case 'factor': {
      const { factors } = factorWork(x)
      return [factors.length === 1 ? 'prime' : factors.join(' ')]
    }
    default:
      return unreachable(kind)
  }
}

/**
 * The exact product of an estimate, shown once the estimate and the display are in.
 * @param {Problem} p
 */
export const productOf = p => String(BigInt(p[0] ?? 0) * BigInt(p[1] ?? 0))

/**
 * A problem's allowance in hundredths of a second; a pace line's is its step.
 * @param {LineId} id
 * @param {Problem} p
 */
export function allowanceOf(id, p) {
  const [x = 0, y = 0] = p
  const line = lineOf(id)
  switch (line.kind) {
    case 'pace':
      return line.step ?? 0
    case 'product':
      return productAllowance(x, y)
    case 'estimate':
      return estimateAllowance(x, y)
    case 'pi':
      return piAllowance(x)
    case 'factor':
      return factorAllowance(x)
    default:
      return unreachable(line.kind)
  }
}

/**
 * The value of a pace item's answer, for the median answer the pace bars split at.
 * @param {LineId} id
 * @param {Problem} p
 */
export const answerValue = (id, p) => Number(paceItems(id)[p[0] ?? 0]?.a ?? 0)

/**
 * A problem's key in its line's pool: a swapped pair is one problem.
 * @param {Problem} p
 */
export const poolKey = p => (p.length === 2 ? [...p].sort((a, b) => a - b).join('×') : p.join(''))
