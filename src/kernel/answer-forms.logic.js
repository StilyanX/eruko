// Hides: how a typed answer is held to a fixed answer form, for every maths unit whose answers
// are typed in the shared syntax (answer-syntax.logic.js): one match per form, which a unit names
// with its own form sentence. Equality is exact (algebra-answer.logic.js); each match adds what the
// answer must look like. An answer that does not read or has no value matches nothing. `reading`
// sets a typed answer as TeX before it is marked. Pure functions, tested in answer-forms.test.js
// and in each unit's check test.
import { notRead, parse, read, strip, tidy } from './answer-syntax.logic.js'
import { abs, gcd, listOf } from './answer.logic.js'
import { unreachable } from './invariant.logic.js'
import { fail } from './result.logic.js'
import { constant, letters, negative, primes, req, same, terms, value } from './algebra-answer.logic.js'

/** A term's factors above and below the line. @typedef {{ top: import('./answer-syntax.logic.js').Node[], bottom: import('./answer-syntax.logic.js').Node[] }} Factors */
/** What a plain term may hold beyond letters and numbers. @typedef {{ brackets?: boolean, roots?: boolean }} Plain */
/** Decides a typed answer against the stored one. @typedef {(typed: string, stored: string) => boolean} Match */

/**
 * The tree of a typed expression, or null when it does not read.
 * @param {string} s
 */
const treeOf = s => {
  const t = parse(s)
  return t.ok ? t.value : null
}
/**
 * The value of a tree, or null when it has none.
 * @param {import('./answer-syntax.logic.js').Node} n
 */
const valueOf = n => {
  const v = value(n)
  return v.ok ? v.value : null
}
/**
 * The value of a typed expression, or null when it does not read or has none.
 * @param {string} s
 */
const valueOfText = s => {
  const t = treeOf(s)
  return t && valueOf(t)
}
/**
 * Two values that are equal; false when either is missing or too large to compare.
 * @param {import('./algebra-answer.logic.js').Value | null} a
 * @param {import('./algebra-answer.logic.js').Value | null} b
 */
const equalValues = (a, b) => {
  if (!a || !b) return false
  const r = same(a, b)
  return r.ok && r.value
}

// --- reading the tree -------------------------------------------------------------------------
/** @type {(n: import('./answer-syntax.logic.js').Node) => boolean} */
const isSum = n => ['add', 'sub'].includes(strip(n).t)
/**
 * Every node of a tree, the tree first.
 * @type {(n: import('./answer-syntax.logic.js').Node) => import('./answer-syntax.logic.js').Node[]}
 */
const nodes = n => [n, ...('a' in n ? nodes(n.a) : []), ...('b' in n ? nodes(n.b) : [])]
/** Every square root in a tree. @type {(tree: import('./answer-syntax.logic.js').Node) => import('./answer-syntax.logic.js').Unary[]} */
const rootsOf = tree =>
  nodes(tree).filter(
    /** @param {import('./answer-syntax.logic.js').Node} n @returns {n is import('./answer-syntax.logic.js').Unary} */ n =>
      n.t === 'sqrt'
  )
/** @type {(n: import('./answer-syntax.logic.js').Node, test: (n: import('./answer-syntax.logic.js').Node) => boolean) => boolean} */
const has = (n, test) => nodes(n).some(test)

/** @type {(t: import('./answer-syntax.logic.js').Node) => import('./answer-syntax.logic.js').Node} */
const negated = t => ({ t: 'neg', a: t })

/**
 * The terms of a sum, top level only: [tree, …], a subtracted term under a sign.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {import('./answer-syntax.logic.js').Node[]}
 */
function sumTerms(n) {
  if (n.t === 'add') return [...sumTerms(n.a), ...sumTerms(n.b)]
  if (n.t === 'sub')
    return [...sumTerms(n.a), ...sumTerms(n.b).map((t, i) => (i === 0 ? negated(t) : t))]
  return [n]
}

/**
 * A term as its factors above and below the line: { top: [tree], bottom: [tree] }. A bracketed sum is one factor.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @param {Factors} [out]
 * @param {boolean} [below]
 * @returns {Factors}
 */
function factors(n, out = { top: [], bottom: [] }, below = false) {
  if (n.t === 'neg') return factors(n.a, out, below)
  if (n.t === 'grp' && !isSum(n.a)) return factors(n.a, out, below)
  if (n.t === 'mul') {
    factors(n.a, out, below)
    return factors(n.b, out, below)
  }
  if (n.t === 'div') {
    factors(n.a, out, below)
    return factors(n.b, out, !below)
  }
  ;(below ? out.bottom : out.top).push(n)
  return out
}

/** @type {import('./answer-syntax.logic.js').Num} */
const UNIT = { t: 'num', text: '1', n: 1n, d: 1n }
/** @type {(list: import('./answer-syntax.logic.js').Node[]) => import('./answer-syntax.logic.js').Node} */
const product = list => (list.length ? list.reduce((a, b) => ({ t: 'mul', a, b })) : UNIT)
/** @param {import('./answer-syntax.logic.js').Node} n @returns {n is import('./answer-syntax.logic.js').Num} */
const wholeNumber = n => n.t === 'num' && n.d === 1n
/** @type {(n: bigint) => boolean} */
const squareFree = n => {
  const found = primes(n)
  return found.ok && found.value.every(([, k]) => k === 1n)
}

/**
 * An index as it is written in a finished answer: collected, each of its terms a plain term,
 * and never 1. A number is written once, a fraction in lowest terms: x^2, x^(1/3), x^0.5,
 * r^(7*p), never x^(4/2), x^(1+1), x^2.0 or x^1.
 * @param {import('./answer-syntax.logic.js').Node} b
 * @returns {boolean}
 */
function plainIndex(b) {
  const tree = strip(b)
  const v = valueOf(tree)
  const list = v && terms(v)
  const parts = sumTerms(tree)
  if (!v || !list || parts.length !== list.length || !parts.every(t => plainTerm(t))) return false
  const c = constant(v)
  return !(c && c.n === 1n && c.d === 1n)
}

/**
 * A single term as it is written: each letter and each bracketed base once, one number at most
 * above the line and one below, the two with no common factor, no factor 1 and no division by
 * 1, and each index plain. `brackets` allows a bracketed sum as a base; `roots` allows square
 * roots of whole numbers and a number under an index.
 * @param {import('./answer-syntax.logic.js').Node[]} top
 * @param {import('./answer-syntax.logic.js').Node[]} bottom
 * @param {Plain} [opts]
 * @returns {boolean}
 */
function plainFactors(top, bottom, { brackets = false, roots = false } = {}) {
  /** @type {Set<string>} */
  const seen = new Set()
  const count = { top: 0, bottom: 0 }
  const lit = { top: 1n, bottom: 1n }
  /** @type {readonly ('top' | 'bottom')[]} */
  const both = ['top', 'bottom']
  for (const side of both)
    for (const f of side === 'top' ? top : bottom) {
      const base = f.t === 'pow' ? f.a : f
      // A letter, or the root of one, by its name.
      const name =
        base.t === 'var' ? base.name : base.t === 'sqrt' && base.a.t === 'var' ? base.a.name : null
      if (f.t === 'pow' && !plainIndex(f.b)) return false
      if (base.t === 'num' && f.t === 'pow') {
        // A number under an index counts as a root does: once each.
        if (!roots || seen.has(`^${base.text}`)) return false
        seen.add(`^${base.text}`)
      } else if (base.t === 'num') {
        count[side]++
        // A decimal that is a whole number, 2.0, is not how a whole number is written.
        if (base.d !== 1n && BigInt(base.n) % BigInt(base.d) === 0n) return false
        if (base.d === 1n) lit[side] = base.n
        // No factor 1 and no division by 1: x, never 1*x or x/1. A 1 over something stays, as in (1/2)*x.
        const idle = side === 'top' ? top.length > 1 && bottom.length === 0 : true
        if (base.d === 1n && (base.n === 1n || base.n === 0n) && idle) return false
      } else if (name !== null) {
        if (seen.has(name)) return false
        seen.add(name)
      } else if (base.t === 'sqrt') {
        if (!roots || !wholeNumber(strip(base.a))) return false
        if (seen.has('√')) return false
        seen.add('√')
      } else if (base.t === 'grp' && isSum(base.a)) {
        if (!brackets) return false
        const key = tidy(textOf(base))
        if (seen.has(key)) return false
        seen.add(key)
      } else return false
    }
  return count.top <= 1 && count.bottom <= 1 && gcd(lit.top, lit.bottom) === 1n
}
/** @type {(n: import('./answer-syntax.logic.js').Node, opts?: Plain) => boolean} */
const plainTerm = (n, opts) => {
  const { top, bottom } = factors(n)
  return plainFactors(top, bottom, opts)
}

/**
 * A tree back as text, for telling two bracketed bases apart.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {string}
 */
function textOf(n) {
  switch (n.t) {
    case 'num':
      return n.text
    case 'var':
      return n.name
    case 'neg':
      return `-${textOf(n.a)}`
    case 'sqrt':
      return `sqrt(${textOf(n.a)})`
    case 'grp':
      return `(${textOf(n.a)})`
    case 'add':
    case 'sub':
    case 'mul':
    case 'div':
    case 'pow':
      return `${textOf(n.a)}${{ add: '+', sub: '-', mul: '*', div: '/', pow: '^' }[n.t]}${textOf(n.b)}`
    default:
      return unreachable(n)
  }
}

/**
 * The number a tree is, when it is a number written out: 12, -3.5, 6/7; else null.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {import('./algebra-answer.logic.js').Rat | null}
 */
function written(n) {
  const s = strip(n)
  /** @type {(x: import('./answer-syntax.logic.js').Node) => boolean} */
  const plain = x => {
    const y = strip(x)
    return y.t === 'num' || (y.t === 'neg' && strip(y.a).t === 'num')
  }
  const v = plain(s) || (s.t === 'div' && plain(s.a) && plain(s.b)) ? valueOf(s) : null
  return v && constant(v)
}

// --- the rules the forms share ------------------------------------------------------------------
/** @type {Match} */
const equal = (typed, stored) => equalValues(valueOfText(typed), valueOfText(stored))

/**
 * A sum written out: every term a plain term, and as many terms as the sum has once collected.
 * @type {Match}
 */
const collected = (typed, stored) => {
  const tree = treeOf(typed)
  const v = tree && valueOf(tree)
  if (!tree || !v || !equalValues(v, valueOfText(stored))) return false
  const list = terms(v)
  if (!list) return false
  const typedTerms = sumTerms(strip(tree))
  const whole = strip(tree)
  if (list.length === 0) return whole.t === 'num' && whole.n === 0n
  return typedTerms.length === list.length && typedTerms.every(t => plainTerm(t))
}

/**
 * A power whose number index is not a whole number.
 * @type {(tree: import('./answer-syntax.logic.js').Node) => boolean}
 */
const badIndex = tree =>
  has(tree, n => {
    if (n.t !== 'pow') return false
    const v = valueOf(n.b)
    const c = v && constant(v)
    return c !== null && c.d !== 1n
  })

/**
 * A power whose index is negative: a negative number, or letters with every coefficient negative, as in g^(-7*k).
 * @type {(tree: import('./answer-syntax.logic.js').Node) => boolean}
 */
const negativeIndex = tree =>
  has(tree, n => {
    if (n.t !== 'pow') return false
    const v = valueOf(n.b)
    const list = v && terms(v)
    return list !== null && list.length > 0 && list.every(t => t.coef.n < 0n)
  })

/** @type {(tree: import('./answer-syntax.logic.js').Node) => boolean} */
const noRoots = tree => !has(tree, n => n.t === 'sqrt')
/** @type {(tree: import('./answer-syntax.logic.js').Node, opts?: Plain) => boolean} */
const everyTerm = (tree, opts) => sumTerms(strip(tree)).every(t => plainTerm(t, opts))

/**
 * A common factor taken out: one bracketed sum, whole coefficients with no common factor, no letter in every term.
 * @type {(sign: number) => Match}
 */
const factorOut = sign => (typed, stored) => {
  const tree = treeOf(typed)
  if (!tree || !equalValues(valueOf(tree), valueOfText(stored))) return false
  const { top, bottom } = factors(strip(tree))
  const sums = top.filter(f => f.t === 'grp' && isSum(f.a))
  const [sum] = sums
  if (sums.length !== 1 || !sum || bottom.some(f => f.t !== 'num')) return false
  const outer = top.filter(f => f !== sum)
  if (!plainFactors(outer, bottom)) return false
  const innerValue = valueOf(sum)
  const inner = innerValue && terms(innerValue)
  const lead = inner?.[0]
  if (!inner || inner.length < 2 || !lead) return false
  if (inner.some(t => t.coef.d !== 1n)) return false
  if (inner.reduce((g, t) => gcd(g, t.coef.n), 0n) !== 1n) return false
  const first = letters(lead)
  for (const name of Object.keys(first))
    if (inner.every(t => (letters(t)[name]?.n ?? 0n) > 0n)) return false
  const frontValue = valueOf({ t: 'div', a: product(outer), b: product(bottom) })
  const front = frontValue && terms(frontValue)
  const lone = front?.length === 1 ? front[0] : undefined
  return lone !== undefined && lone.coef.n * BigInt(signOf(strip(tree))) > 0n === sign > 0
}

/**
 * The top and bottom of one fraction as written, each multiplied out, or null when the answer
 * is not one fraction: a minus sign may stand in front, and no fraction sits inside it.
 * @param {import('./answer-syntax.logic.js').Node} tree
 * @returns {[import('./algebra-answer.logic.js').Value, import('./algebra-answer.logic.js').Value] | null}
 */
function fraction(tree) {
  const s = strip(tree)
  const body = s.t === 'neg' ? strip(s.a) : s
  if (body.t !== 'div' || has(body.a, n => n.t === 'div') || has(body.b, n => n.t === 'div'))
    return null
  const top = valueOf(body.a)
  const bottom = valueOf(body.b)
  if (!top || !bottom) return null
  const signed = s.t === 'neg' ? negative(top) : null
  if (signed && !signed.ok) return null
  return [signed ? signed.value : top, bottom]
}
/**
 * The sign the leading minus signs of a term give it.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {number}
 */
function signOf(n) {
  if (n.t === 'neg') return -signOf(n.a)
  if (n.t === 'grp' && !isSum(n.a)) return signOf(n.a)
  if (n.t === 'mul' || n.t === 'div') return signOf(n.a) * signOf(n.b)
  return 1
}

/**
 * The whole number under a root, which a root of a checked answer holds.
 * @type {(root: import('./answer-syntax.logic.js').Unary) => bigint}
 */
const radicandOf = root => {
  const a = strip(root.a)
  return wholeNumber(a) ? a.n : 1n
}

/**
 * Surds in simplest form: square-free whole numbers under each root, one root a term, terms collected.
 * @type {(opts: { below: boolean }) => Match}
 */
const surd =
  ({ below }) =>
  (typed, stored) => {
    const tree = treeOf(typed)
    const v = tree && valueOf(tree)
    if (!tree || !v || !equalValues(v, valueOfText(stored))) return false
    const roots = rootsOf(tree)
    if (
      roots.some(r => {
        const a = strip(r.a)
        return !wholeNumber(a) || a.n < 2n || !squareFree(a.n)
      })
    )
      return false
    // A root is written with its sign: an index that is not a whole number is a root in disguise.
    if (badIndex(tree)) return false
    if (!below && has(tree, n => n.t === 'div' && has(n.b, m => m.t === 'sqrt'))) return false
    const list = terms(v)
    if (!list) return false
    // One fraction over a whole number, its top a sum, is read term by term.
    const s = strip(tree)
    let parts = sumTerms(s)
    let shared = 1n
    const divisor = s.t === 'div' ? strip(s.b) : null
    if (s.t === 'div' && isSum(s.a) && divisor && wholeNumber(divisor)) {
      parts = sumTerms(strip(s.a))
      shared = divisor.n
    }
    if (parts.length !== Math.max(1, list.length)) return false
    let g = shared
    for (const p of parts) {
      if (!plainTerm(p, { roots: true })) return false
      const { top, bottom } = factors(p)
      const lit = top.find(
        /** @returns {f is import('./answer-syntax.logic.js').Num} */ f => f.t === 'num'
      )
      const under = bottom.find(
        /** @param {import('./answer-syntax.logic.js').Node} f @returns {f is import('./answer-syntax.logic.js').Unary} */ f =>
          f.t === 'sqrt'
      )
      if (under && top.some(f => f.t === 'sqrt')) return false
      if (under && lit && lit.d === 1n && gcd(lit.n, radicandOf(under)) !== 1n) return false
      g = gcd(g, lit && lit.d === 1n ? lit.n : 1n)
    }
    return shared === 1n || g === 1n
  }

/**
 * The two sides of an equation, or null.
 * @type {(s: string) => [import('./answer-syntax.logic.js').Node, import('./answer-syntax.logic.js').Node] | null}
 */
const sides = s => {
  const parts = tidy(s).split('=')
  const [left, right] = parts
  if (parts.length !== 2 || left === undefined || right === undefined) return null
  const a = treeOf(left)
  const b = treeOf(right)
  return a && b ? [a, b] : null
}
/** The sides of an equation as values, or null. @type {(s: string) => [import('./algebra-answer.logic.js').Value, import('./algebra-answer.logic.js').Value] | null} */
const valuesOf = s => {
  const both = sides(s)
  if (!both) return null
  const left = valueOf(both[0])
  const right = valueOf(both[1])
  return left && right ? [left, right] : null
}
/** @type {(n: import('./answer-syntax.logic.js').Node) => string | null} */
const letter = n => {
  const x = strip(n)
  return x.t === 'var' ? x.name : null
}

/**
 * letter = …: the letter alone on one side, the other side passed to `rest`.
 * @type {(rest: (other: import('./answer-syntax.logic.js').Node, stored: import('./answer-syntax.logic.js').Node) => boolean) => Match}
 */
const solved = rest => (typed, stored) => {
  const t = sides(typed)
  const s = sides(stored)
  if (!t || !s) return false
  const name = letter(s[0])
  const i = t.findIndex(side => letter(side) === name)
  if (!name || i < 0) return false
  const other = i === 0 ? t[1] : t[0]
  if (has(other, n => n.t === 'var' && n.name === name)) return false
  return rest(other, s[1])
}

const list = listOf(tidy)

/**
 * One item of unknowns found: a letter alone on one side and a number on the other.
 * @param {string} item
 * @returns {Readonly<{ name: string, number: import('./algebra-answer.logic.js').Value }> | null}
 */
function unknownOf(item) {
  const two = sides(item)
  if (!two) return null
  const i = two.findIndex(side => letter(side) !== null)
  const side = two[i]
  const name = side && letter(side)
  const number = numberOf(tidy(item).split('=')[1 - i] ?? '')
  return name && number ? { name, number } : null
}

/**
 * Unknowns, each = a number: x = 2, y = -1, or the solutions x = -1, x = 3. The items match the
 * stored ones in some order.
 * @type {Match}
 */
const values = (typed, stored) => {
  const a = tidy(typed).split(',').map(unknownOf)
  const b = tidy(stored).split(',').map(unknownOf)
  if (a.length !== b.length) return false
  /** @type {(Readonly<{ name: string, number: import('./algebra-answer.logic.js').Value }> | null)[]} */
  const left = [...b]
  return a.every(x => {
    const j = left.findIndex(
      y => x !== null && y !== null && y.name === x.name && equalValues(y.number, x.number)
    )
    return j >= 0 && left.splice(j, 1).length === 1
  })
}

/**
 * True for a term of a linear expression: each letter to the power 1 or less in all.
 * @param {import('./algebra-answer.logic.js').Term} t
 */
const linearTerm = t =>
  Object.values(letters(t)).reduce(
    (sum, k) => sum + (k === null ? Infinity : Number(k.n) / Number(k.d)),
    0
  ) <= 1
/**
 * A sum in brackets whose terms are each a number or a number times one letter.
 * @param {import('./answer-syntax.logic.js').Node} n
 */
const linearBracket = n => {
  if (n.t !== 'grp' || !isSum(n.a)) return false
  const v = valueOf(n.a)
  return (v === null ? [] : (terms(v) ?? [])).every(linearTerm)
}
/**
 * A whole number of a power: (x-1)^2's 2.
 * @param {import('./answer-syntax.logic.js').Node} n
 */
const wholePower = n => wholeNumber(strip(n))

/**
 * A product of brackets: a number, if any, times brackets of linear sums, as (x+2)*(x-3) or
 * 2*(x-1)^2. `whole` refuses a bracket with a common number factor left in it, (4*x+6)*(x+5);
 * `sums` lets a bracket hold any sum, (x^2+6)*(x-4), and then needs two factors at least.
 * `front` lets the number in front carry powers of letters, 2*x^2*(3*x-2)*(3*x+2), and then
 * refuses a bracket with a letter in every term, x*(x^2+x)*(x-1). `prime` refuses a bracket in one
 * letter that factors over the rationals, (x^3-27)*(x^3+27).
 * @type {(opts?: { whole?: boolean, sums?: boolean, front?: boolean, prime?: boolean }) => Match}
 */
const bracketsOf =
  ({ whole = false, sums = false, front = false, prime = false } = {}) =>
  (typed, stored) => {
    const tree = treeOf(typed)
    if (!tree || !equal(typed, stored)) return false
    const { top, bottom } = factors(strip(tree))
    /** @param {import('./answer-syntax.logic.js').Node} n */
    const ok = n => (sums ? n.t === 'grp' && isSum(n.a) : linearBracket(n))
    const brackets = top.filter(n => ok(n) || (n.t === 'pow' && ok(n.a) && wholePower(n.b)))
    const rest = top.filter(n => !brackets.includes(n))
    /** @param {import('./answer-syntax.logic.js').Node} n */
    const lowest = n => {
      const v = valueOf(n.t === 'pow' ? n.a : n)
      const list = v && terms(v)
      return !!list && list.every(t => t.coef.d === 1n) && list.reduce((g, t) => gcd(g, t.coef.n), 0n) === 1n
    }
    return (
      brackets.length > 0 &&
      (!sums || top.length > 1) &&
      (!whole || brackets.every(lowest)) &&
      rest.every(
        n => n.t === 'num' || n.t === 'var' || (front && n.t === 'pow' && n.a.t === 'var' && wholePower(n.b))
      ) &&
      (!front || brackets.every(n => !letterInEvery(n.t === 'pow' ? n.a : n))) &&
      (!prime || brackets.every(n => !splits(coefficients(n.t === 'pow' ? n.a : n)))) &&
      bottom.every(n => n.t === 'num')
    )
  }
const bracketed = bracketsOf()
/**
 * The whole coefficients of a sum in one letter, lowest power first, or null.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {bigint[] | null}
 */
const coefficients = n => {
  const v = valueOf(n)
  const list = v && terms(v)
  if (!list) return null
  /** @type {bigint[]} */
  const a = []
  const names = new Set()
  for (const t of list) {
    const keys = Object.keys(t.mono)
    const ls = Object.entries(letters(t))
    if (t.coef.d !== 1n || keys.length !== ls.length || ls.length > 1) return null
    const e = ls[0]?.[1] ?? { n: 0n, d: 1n }
    if (!e || e.d !== 1n || e.n < 0n) return null
    if (ls[0]) names.add(ls[0][0])
    a[Number(e.n)] = t.coef.n
  }
  return names.size === 1 ? Array.from(a, c => c ?? 0n) : null
}
/** @type {(n: bigint) => bigint[]} */
const divisors = n => {
  n = abs(n)
  const out = []
  for (let i = 1n; i * i <= n; i++) if (n % i === 0n) out.push(i, n / i)
  return out
}
/** @type {(n: bigint) => bigint | null} */
const isqrt = n => {
  if (n < 0n) return null
  let r = BigInt(Math.floor(Math.sqrt(Number(n))))
  while (r * r > n) r--
  while ((r + 1n) * (r + 1n) <= n) r++
  return r * r === n ? r : null
}
/**
 * Whether whole coefficients a (lowest power first) factor over the rationals: a rational root at
 * degree 2 up, or at degree 4 two whole quadratics (a*x^2+b*x+c)*(d*x^2+e*x+f).
 * @param {bigint[] | null} a
 */
const splits = a => {
  if (!a || a.length < 3) return false
  const n = a.length - 1
  const [lead = 0n, low = 0n] = [a[n], a[0]]
  if (low === 0n) return true
  /** @type {(p: bigint, q: bigint) => boolean} */
  const root = (p, q) => a.reduce((s, c, i) => s + c * p ** BigInt(i) * q ** BigInt(n - i), 0n) === 0n
  for (const p of divisors(low))
    for (const q of divisors(lead)) if (root(p, q) || root(-p, q)) return true
  if (n !== 4) return false
  const [, a1 = 0n, a2 = 0n, a3 = 0n] = a
  /** @type {(x: bigint, y: bigint) => bigint | null} */
  const div = (x, y) => (y !== 0n && x % y === 0n ? x / y : null)
  for (const p of divisors(lead))
    for (const c of divisors(low))
      for (const cc of [c, -c]) {
        const f = low / cc
        const d = lead / p
        const det = p * f - cc * d
        /** @type {(bigint | null)[]} */
        let bs
        if (det !== 0n) bs = [div(a1 * p - a3 * cc, det)]
        else {
          // d*b^2 - a3*b + p*(a2 - p*f - cc*d) = 0
          const k = a2 - p * f - cc * d
          const r = isqrt(a3 * a3 - 4n * d * p * k)
          bs = r === null ? [] : [div(a3 + r, 2n * d), div(a3 - r, 2n * d)]
        }
        for (const b of bs) {
          const e = b === null ? null : div(a3 - b * d, p)
          if (b !== null && e !== null && p * f + b * e + cc * d === a2 && b * f + cc * e === a1) return true
        }
      }
  return false
}
/** @param {import('./answer-syntax.logic.js').Node} n */
const letterInEvery = n => {
  const v = valueOf(n)
  const list = (v && terms(v)) ?? []
  const lead = list[0]
  return !!lead && Object.keys(letters(lead)).some(k => list.every(t => (letters(t)[k]?.n ?? 0n) > 0n))
}

/**
 * A number times a linear bracket squared, and nothing else: 2*(x-3)^2.
 * @param {import('./answer-syntax.logic.js').Node} t
 */
const squareTerm = t => {
  const { top, bottom } = factors(t)
  const power = top.filter(n => n.t === 'pow')
  const p = power[0]
  if (power.length !== 1 || p === undefined || p.t !== 'pow') return false
  const b = strip(p.b)
  return (
    linearBracket(p.a) &&
    wholeNumber(b) &&
    b.n === 2n &&
    top.every(n => n === p || n.t === 'num') &&
    bottom.every(n => n.t === 'num')
  )
}

/**
 * a*(x+p)^2+q: one term a number times a linear bracket squared, and at most one number added.
 * @type {Match}
 */
const completedSquare = (typed, stored) => {
  const tree = treeOf(typed)
  if (!tree || !equal(typed, stored)) return false
  const parts = sumTerms(strip(tree))
  const squares = parts.filter(squareTerm)
  const numbers = parts.filter(t => !squares.includes(t))
  return (
    squares.length === 1 &&
    numbers.length <= 1 &&
    numbers.every(t => {
      const v = valueOf(t)
      return v !== null && constant(v) !== null
    })
  )
}

/**
 * The index of a root, or null where a factor is no root: 2 for sqrt( ), n for a power 1/n. A
 * fractional power that is not 1/n in lowest terms is a root not yet written as one: index 0.
 * @param {import('./answer-syntax.logic.js').Node} f
 * @returns {{ n: bigint, under: import('./answer-syntax.logic.js').Node } | null}
 */
function rootOf(f) {
  if (f.t === 'sqrt') return { n: 2n, under: f.a }
  if (f.t !== 'pow') return null
  const v = valueOf(f.b)
  const c = v && constant(v)
  if (!c || c.d === 1n) return null
  return { n: c.n === 1n && plainIndex(f.b) ? c.d : 0n, under: f.a }
}

/**
 * What stands under a root of index n is as small as it gets: a whole number times letters, no
 * factor of it an nth power, and the index no multiple of a number every power under it shares
 * (the fourth root of 4 is the square root of 2). A sum under a root is kept whole.
 * @param {import('./answer-syntax.logic.js').Node} under
 * @param {bigint} n
 */
function smallestUnder(under, n) {
  const v = valueOf(under)
  const list = v && terms(v)
  if (!list) return false
  const [t] = list
  if (list.length !== 1 || !t) return list.length > 1 && isSum(under)
  if (t.coef.d !== 1n || t.coef.n < 1n || Object.keys(t.mono).some(b => !b.startsWith('v:'))) return false
  const found = primes(t.coef.n)
  const powers = Object.values(letters(t))
  if (!found.ok || powers.some(k => k === null || k.d !== 1n)) return false
  const all = [...found.value.map(([, k]) => k), ...powers.map(k => k?.n ?? 0n)]
  return all.every(k => k > 0n && k < n) && all.reduce((g, k) => gcd(g, k), n) === 1n
}

/**
 * Roots in simplest form, of any index and with letters: sqrt( ) or a power 1/n, nothing under a
 * root that comes out of it, one root of each index a term, no root in a denominator, and the
 * terms collected. One fraction over a whole number, its top a sum, is read term by term.
 * @type {Match}
 */
const simplestRoots = (typed, stored) => {
  const tree = treeOf(typed)
  const v = tree && valueOf(tree)
  if (!tree || !v || !equalValues(v, valueOfText(stored))) return false
  const list = terms(v)
  if (!list) return false
  const s = strip(tree)
  const divisor = s.t === 'div' && isSum(s.a) ? strip(s.b) : null
  const shared = divisor && wholeNumber(divisor) ? divisor.n : 1n
  const parts = sumTerms(s.t === 'div' && shared !== 1n ? strip(s.a) : s)
  if (parts.length !== Math.max(1, list.length)) return false
  let g = shared
  for (const part of parts) {
    const { top, bottom } = factors(part)
    if (bottom.some(f => rootOf(f))) return false
    const roots = top.flatMap(f => rootOf(f) ?? [])
    if (new Set(roots.map(r => r.n)).size !== roots.length) return false
    if (!roots.every(r => r.n > 0n && smallestUnder(r.under, r.n))) return false
    const rest = top.filter(f => !rootOf(f))
    if (!plainFactors(rest, bottom)) return false
    const lit = rest.find(/** @returns {f is import('./answer-syntax.logic.js').Num} */ f => f.t === 'num')
    g = gcd(g, lit && lit.d === 1n ? lit.n : 1n)
  }
  return shared === 1n || g === 1n
}

// --- numbers ------------------------------------------------------------------------------------
/**
 * The value of a number written out: digits, signs, roots and pi, and no other letter; else null.
 * @type {(s: string) => import('./algebra-answer.logic.js').Value | null}
 */
const numberOf = s => {
  const tree = treeOf(s)
  return !tree || has(tree, n => n.t === 'var' && n.name !== 'pi') ? null : valueOf(tree)
}
/** @type {Match} */
const sameNumber = (typed, stored) => {
  return equalValues(numberOf(typed), numberOf(stored))
}
/** A typed number with one pair of brackets round the whole of it taken off: (-4) is -4. */
/** @type {(s: string) => string} */
const bare = s => tidy(s).replace(/^\(([^()]*)\)$/, '$1')
/** @type {Match} */
const text = (typed, stored) => tidy(typed).toLowerCase() === tidy(stored).toLowerCase()

/**
 * "2^3*3*5" as { 2: 3, 3: 1, 5: 1 }, each base a prime.
 * @param {string} s
 * @returns {Record<string, number> | null}
 */
function primePowers(s) {
  /** @type {Record<string, number>} */
  const out = {}
  for (const part of tidy(s).split('*')) {
    const m = /^(\d+)(?:\^\(?(\d+)\)?)?$/.exec(part)
    if (!m) return null
    const digits = m[1] ?? ''
    const p = BigInt(digits)
    if (p < 2n) return null
    const found = primes(p)
    if (!found.ok || found.value.length !== 1 || found.value[0]?.[1] !== 1n) return null
    out[digits] = (out[digits] || 0) + Number(m[2] || 1)
  }
  return out
}

/** @type {Match} */
const single = (typed, stored) => {
  const tree = treeOf(typed)
  return (
    tree !== null &&
    equalValues(valueOf(tree), valueOfText(stored)) &&
    sumTerms(strip(tree)).length === 1 &&
    plainTerm(strip(tree))
  )
}

/**
 * Every answer form's match by its name: `match(typed, stored)` decides a typed answer in that
 * form. A unit names each with its own form sentence; "or equivalent" in the sentence goes with
 * `number` and `expression`, which accept every written form of the same value. `collected` also
 * holds separate terms, and `unknownValues` a list of solutions.
 * @typedef {'integer' | 'number' | 'lowestFraction' | 'finiteDecimal' | 'words' | 'primeProduct' | 'numberList' | 'scientific' | 'rounded' | 'factorPairs' | 'expression' | 'collected' | 'singleTerm' | 'factorTakenOut' | 'negativeFactorTakenOut' | 'lowestAlgebraicFraction' | 'positiveIndices' | 'eachBaseOnce' | 'fractionalIndices' | 'rootSigns' | 'surdForm' | 'rationalSurdForm' | 'surdFraction' | 'unknownIsNumber' | 'subjectIsExpression' | 'equation' | 'singleTermList' | 'unknownValues' | 'bracketed' | 'wholeBrackets' | 'sumBrackets' | 'frontBrackets' | 'frontWholeBrackets' | 'frontSumBrackets' | 'primeSumBrackets' | 'completedSquare' | 'simplestRoots' | 'solutionCount'} MatchName
 */
/** @type {Readonly<Record<MatchName, Match>>} */
export const MATCHES = {
  integer: (t, s) => /^-?\d+$/.test(bare(t)) && sameNumber(t, s),
  number: sameNumber,
  lowestFraction: (t, s) => {
    const m = /^-?(\d+)(?:\/(\d+))?$/.exec(bare(t))
    const top = m?.[1]
    return top !== undefined && gcd(BigInt(top), BigInt(m?.[2] ?? 1)) === 1n && sameNumber(t, s)
  },
  finiteDecimal: (t, s) => /^-?\d+(\.\d+)?$/.test(bare(t)) && sameNumber(t, s),
  words: text,
  primeProduct: (t, s) => {
    const a = primePowers(t)
    const b = primePowers(s)
    return (
      a !== null &&
      b !== null &&
      Object.keys(a).length === Object.keys(b).length &&
      Object.keys(a).every(k => a[k] === b[k])
    )
  },
  numberList: list(sameNumber),
  scientific: (t, s) => {
    const m = /^(-?\d+(?:\.\d+)?)\*10\^\(?-?\d+\)?$/.exec(tidy(t))
    const mantissa = m?.[1]
    if (mantissa === undefined) return false
    const typedValue = numberOf(mantissa)
    const a = typedValue && constant(typedValue)
    if (!a) return false
    const size = { n: abs(a.n), d: a.d }
    return size.n >= size.d && size.n < 10n * size.d && sameNumber(t, s)
  },
  rounded: (t, s) =>
    /^-?\d+(\.\d+)?$/.test(bare(t)) && bare(t) === tidy(s),
  factorPairs: (t, s) => {
    /** @type {(x: string) => string[][]} */
    const pairs = x =>
      tidy(x)
        .split(';')
        .map(p => p.split(','))
    const a = pairs(t)
    const b = pairs(s)
    if (a.some(p => p.length !== 2 || p.some(x => !/^-?\d+$/.test(x)))) return false
    /** @type {(p: string[]) => string} */
    const key = p =>
      p
        .map(BigInt)
        .sort((x, y) => (x < y ? -1 : 1))
        .join(',')
    const keys = new Set(a.map(key))
    return keys.size === a.length && a.length === b.length && b.every(p => keys.has(key(p)))
  },
  expression: equal,
  collected: collected,
  singleTerm: single,
  factorTakenOut: factorOut(1),
  negativeFactorTakenOut:
    factorOut(-1),
  lowestAlgebraicFraction: (t, s) => {
    const tt = treeOf(t)
    const st = treeOf(s)
    const typed = tt && fraction(tt)
    const stored = st && fraction(st)
    if (!typed || !stored) return false
    const [tn, td] = typed
    const [sn, sd] = stored
    if (![tn, td, sn, sd].every(terms)) return false
    const nsn = negative(sn)
    const nsd = negative(sd)
    return (
      (equalValues(tn, sn) && equalValues(td, sd)) ||
      (nsn.ok && nsd.ok && equalValues(tn, nsn.value) && equalValues(td, nsd.value))
    )
  },
  positiveIndices: (t, s) => {
    const tree = treeOf(t)
    return (
      tree !== null && equal(t, s) && !negativeIndex(tree) && everyTerm(tree, { brackets: true })
    )
  },
  eachBaseOnce: (t, s) => {
    const typed = treeOf(t)
    if (!typed) return false
    const tree = strip(typed)
    if (!equal(t, s) || sumTerms(tree).length !== 1 || !plainTerm(tree, { roots: true }))
      return false
    // The numbers under the indices share no factor: 8^p*4^p is not yet 2^(5*p).
    const bases = nodes(tree).flatMap(n => (n.t === 'pow' && wholeNumber(n.a) ? [n.a.n] : []))
    return bases.every((a, i) => bases.every((b, j) => i === j || gcd(a, b) === 1n))
  },
  fractionalIndices: (t, s) => {
    const tree = treeOf(t)
    return (
      tree !== null &&
      equal(t, s) &&
      noRoots(tree) &&
      everyTerm(tree, { brackets: true, roots: true })
    )
  },
  rootSigns: (t, s) => {
    const tree = treeOf(t)
    return tree !== null && equal(t, s) && !badIndex(tree)
  },
  surdForm: surd({ below: true }),
  rationalSurdForm:
    surd({ below: false }),
  surdFraction: (t, s) => {
    const typed = treeOf(t)
    if (!typed) return false
    const tree = strip(typed)
    if (tree.t !== 'div' || has(tree.a, n => n.t === 'div') || has(tree.b, n => n.t === 'div'))
      return false
    const roots = rootsOf(tree)
    return (
      roots.every(r => {
        const a = strip(r.a)
        return wholeNumber(a) && squareFree(a.n)
      }) && equal(t, s)
    )
  },
  unknownIsNumber: solved((other, stored) => {
    const a = written(other)
    const v = valueOf(stored)
    const b = v && constant(v)
    return a !== null && b !== null && req(a, b)
  }),
  subjectIsExpression: solved((other, stored) =>
    equalValues(valueOf(other), valueOf(stored))
  ),
  equation: (t, s) => {
    const a = valuesOf(t)
    const b = valuesOf(s)
    if (!a || !b) return false
    return (
      (equalValues(a[0], b[0]) && equalValues(a[1], b[1])) ||
      (equalValues(a[0], b[1]) && equalValues(a[1], b[0]))
    )
  },
  singleTermList: list(single),
  unknownValues: values,
  bracketed: bracketed,
  wholeBrackets: bracketsOf({ whole: true }),
  sumBrackets: bracketsOf({ whole: true, sums: true }),
  frontBrackets: bracketsOf({ front: true }),
  frontWholeBrackets: bracketsOf({ whole: true, front: true }),
  frontSumBrackets: bracketsOf({ whole: true, sums: true, front: true }),
  primeSumBrackets: bracketsOf({ whole: true, sums: true, front: true, prime: true }),
  completedSquare: completedSquare,
  simplestRoots,
  solutionCount: (t, s) =>
    /^(one|none|infinitelymany)$/i.test(tidy(t)) && text(t, s),
}

/**
 * A typed answer as the unit reads it, before it is marked: the answer as typed, set as TeX, or
 * why it is not read. An answer is not read when the syntax does not read it, when it has no value
 * (a division by zero, an even root of a negative number), when it is too large to work out, or
 * when it is plainly the wrong kind of thing for the stored answer: an equation where an
 * expression is asked, or a comma where the answer has none. Nothing here says whether the answer
 * is right.
 * @param {string} typed
 * @param {string | undefined} stored
 * @returns {import('./result.logic.js').Result<string, import('./answer-syntax.logic.js').ReadError>}
 */
export function reading(typed, stored) {
  const got = read(typed)
  if (!got.ok) return got
  const worked = workedOut(typed)
  if (worked) return fail(worked)
  /** @type {(s: string, c: string) => number} */
  const count = (s, c) => tidy(s).split(c).length - 1
  const equals = count(stored ?? '', '=')
  if (count(typed, '=') !== equals) return notRead(equals ? 'equation' : 'no-equation')
  if (!/[;,]/.test(stored ?? '') && /[;,]/.test(typed)) return notRead('comma')
  return got
}

/**
 * Why a typed answer that reads has no value, or null when every piece of it has one.
 * @param {string} typed
 * @returns {import('./answer-syntax.logic.js').ReadError | null}
 */
function workedOut(typed) {
  for (const piece of tidy(typed).split(/[;,=]/)) {
    const tree = parse(piece)
    const v = tree.ok ? value(tree.value) : tree
    if (!v.ok) return v.error
  }
  return null
}

