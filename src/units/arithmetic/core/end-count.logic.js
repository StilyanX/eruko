// Hides: how the end level of arithmetic (Mathematics, "The end level") values a problem's work:
// the steps an addition or a subtraction costs place by place, the facts and Add steps of a
// product worked by Vertically and Crosswise, of an estimate, of π as held times a number and of
// factoring by trial division, and the allowance they give. Times are whole hundredths of a
// second, so two sheets' sums of allowances can be set equal exactly. Pure functions.

/** One fact recalled: 1.26 s. */
export const FACT_CS = 126
/** One addition or subtraction of two single digits: 1.10 s. */
export const ADD_CS = 110

/** π as the record holds it for mental estimation, in hundred-thousandths: 3.14159. */
export const HELD_PI = 314159
/** The places of `HELD_PI` after the point. */
export const PI_PLACES = 5

/** The primes a trial division tries, in order: every prime whose square is under 1,000. */
const TRIAL_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

/**
 * A number's digits from the units up.
 * @param {number} n a whole number, 0 or more
 * @returns {number[]}
 */
export function digitsUp(n) {
  const out = []
  let rest = n
  do {
    out.push(rest % 10)
    rest = Math.floor(rest / 10)
  } while (rest > 0)
  return out
}

/**
 * The Add steps of adding two whole numbers place by place from the units: at each place the
 * digits other than 0 and the carry in are added one at a time, k of them costing k - 1 steps.
 * @param {number} a
 * @param {number} b
 */
export function addCount(a, b) {
  const da = digitsUp(a)
  const db = digitsUp(b)
  let steps = 0
  let carry = 0
  for (let i = 0; i < Math.max(da.length, db.length); i++) {
    const x = da[i] ?? 0
    const y = db[i] ?? 0
    const k = (x ? 1 : 0) + (y ? 1 : 0) + (carry ? 1 : 0)
    steps += Math.max(0, k - 1)
    carry = Math.floor((x + y + carry) / 10)
  }
  return steps
}

/**
 * The Add steps of taking `b` from `a` (b at most a) place by place from the units: one step for
 * each digit of `b` other than 0, and one for each borrow in.
 * @param {number} a
 * @param {number} b
 */
export function subtractCount(a, b) {
  const da = digitsUp(a)
  const db = digitsUp(b)
  let steps = 0
  let borrow = 0
  for (let i = 0; i < da.length; i++) {
    const x = da[i] ?? 0
    const y = db[i] ?? 0
    if (y) steps++
    if (borrow) steps++
    const next = x - y - borrow < 0 ? 1 : 0
    borrow = next
  }
  return steps
}

/**
 * The Add steps of adding numbers one at a time, in the order with the fewest.
 * @param {readonly number[]} terms
 */
function cheapestSum(terms) {
  if (terms.length < 2) return 0
  let best = Infinity
  /** @param {readonly number[]} left @param {number} sum @param {number} steps */
  const walk = (left, sum, steps) => {
    if (steps >= best) return
    if (!left.length) {
      best = steps
      return
    }
    left.forEach((t, i) => walk([...left.slice(0, i), ...left.slice(i + 1)], sum + t, steps + addCount(sum, t)))
  }
  terms.forEach((t, i) => walk([...terms.slice(0, i), ...terms.slice(i + 1)], t, 0))
  return best
}

/**
 * A problem's allowance from its facts and Add steps, never under one fact step.
 * @param {number} facts
 * @param {number} adds
 */
export const allowance = (facts, adds) => Math.max(FACT_CS, facts * FACT_CS + adds * ADD_CS)

/**
 * The column totals of a product, units column first: column k is every pair of digits, one from
 * each factor, whose places add to k, and its total the sum of their products before any carry.
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
export function columnTotals(a, b) {
  const da = digitsUp(a)
  const db = digitsUp(b)
  return Array.from({ length: da.length + db.length - 1 }, (_, k) =>
    da.reduce((sum, x, i) => sum + x * (db[k - i] ?? 0), 0)
  )
}

/**
 * The facts and Add steps of a product worked by Vertically and Crosswise: a fact for each pair
 * of digits both 2 or more; each column's products added in the cheapest order; then each
 * column's total plus the carry from the column below, units column first.
 * @param {number} a
 * @param {number} b
 * @returns {{ facts: number, adds: number }}
 */
export function productWork(a, b) {
  const da = digitsUp(a)
  const db = digitsUp(b)
  let facts = 0
  let adds = 0
  let carry = 0
  for (let k = 0; k < da.length + db.length - 1; k++) {
    /** @type {number[]} */
    const products = []
    da.forEach((x, i) => {
      const y = db[k - i]
      if (y === undefined) return
      if (x >= 2 && y >= 2) facts++
      products.push(x * y)
    })
    adds += cheapestSum(products)
    const total = products.reduce((s, p) => s + p, 0)
    adds += addCount(total, carry)
    carry = Math.floor((total + carry) / 10)
  }
  return { facts, adds }
}

/**
 * A product's allowance, in hundredths of a second.
 * @param {number} a
 * @param {number} b
 */
export function productAllowance(a, b) {
  const { facts, adds } = productWork(a, b)
  return allowance(facts, adds)
}

/**
 * A five-digit factor rounded to its nearest three digits, a tie going up: 99,950 and over is 100
 * at the next place. Gives the three digits.
 * @param {number} n 10,000 to 99,999
 */
export const roundThree = n => Math.floor((n + 50) / 100) >= 1000 ? 100 : Math.floor((n + 50) / 100)

/**
 * An estimate's allowance: the 3 × 3 allowance of the two rounded factors.
 * @param {number} a
 * @param {number} b
 */
export const estimateAllowance = (a, b) => productAllowance(roundThree(a), roundThree(b))

/**
 * The work of π as held times a number of three digits 1 to 9: a fact for each digit above 1; the
 * three multiples of π, each at its place, cut below the highest place whose unit is at most a
 * third of the π bar's reach (0.0001% of the product), added two at a time in the cheapest order.
 * Every value is counted in hundred-thousandths, so places line up.
 * @param {number} n 111 to 999
 * @returns {{ facts: number, adds: number }}
 */
export function piWork(n) {
  const digits = digitsUp(n)
  const facts = digits.filter(d => d > 1).length
  // the reach in hundred-thousandths is HELD_PI × n × 10^-6; a place 10^e (in the same units)
  // is kept when 10^e is at most a third of it: 3 × 10^e × 10^6 ≤ HELD_PI × n
  const product = HELD_PI * n
  let unit = 1
  while (3 * unit * 10 * 1e6 <= product) unit *= 10
  const multiples = digits.map((d, place) => {
    const m = d * HELD_PI * 10 ** place
    return m - (m % unit)
  })
  return { facts, adds: cheapestSum(multiples) }
}

/**
 * π times a number's allowance, in hundredths of a second.
 * @param {number} n
 */
export function piAllowance(n) {
  const { facts, adds } = piWork(n)
  return allowance(facts, adds)
}

/**
 * Long division of `n` by `p`, a quotient digit at a time from the left: for each quotient digit
 * other than 0 its multiple of `p` is taken from the digits above, a digit above 1 being a fact
 * and every taking-away counted by the Subtract count. A failed trial runs to the last digit.
 * @param {number} n
 * @param {number} p
 * @returns {{ quotient: number, remainder: number, facts: number, adds: number }}
 */
export function divideWork(n, p) {
  let rest = 0
  let quotient = 0
  let facts = 0
  let adds = 0
  for (const ch of String(n)) {
    const current = rest * 10 + Number(ch)
    const q = Math.floor(current / p)
    if (q > 0) {
      if (q > 1) facts++
      adds += subtractCount(current, q * p)
    }
    rest = current - q * p
    quotient = quotient * 10 + q
  }
  return { quotient, remainder: rest, facts, adds }
}

/**
 * Factoring by trial division: the primes tried in order from 2, what is left divided by one
 * prime at a time, the same prime again a new trial; before each trial the prime's square is set
 * against what is left, recalled the first time that prime is reached; it stops when that square
 * is larger, or once 31 has been tried, and what is left is prime.
 * @param {number} n 2 to 999
 * @returns {{ factors: number[], facts: number, adds: number }}
 */
export function factorWork(n) {
  /** @type {number[]} */
  const factors = []
  let left = n
  let facts = 0
  let adds = 0
  for (const p of TRIAL_PRIMES) {
    facts++ // the square recalled, once for each prime checked
    let stop = false
    while (p * p <= left) {
      const d = divideWork(left, p)
      facts += d.facts
      adds += d.adds
      if (d.remainder !== 0) break
      factors.push(p)
      left = d.quotient
    }
    if (p * p > left) stop = true
    if (stop || p === 31) break
  }
  if (left > 1) factors.push(left)
  return { factors, facts, adds }
}

/**
 * A number's factoring allowance, in hundredths of a second.
 * @param {number} n
 */
export function factorAllowance(n) {
  const { facts, adds } = factorWork(n)
  return allowance(facts, adds)
}
