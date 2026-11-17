// Hides: an exact normal form for typed school expressions, so that two typed forms of one
// expression compare equal and two different expressions never do. A value is a quotient of two
// sums of terms; a term is a rational coefficient times bases raised to powers. A base is a letter,
// a prime (the part of a root that stays a root), or a sum under a fractional power, kept whole.
// Every rewrite is an identity for positive letters, so a wrong answer is never accepted. The one
// equal form it does not recognise is a sum that is a perfect power under a root, written out as
// a sum. An expression with no value, or too large to work out, is a failure, never a hang. It
// uses no test points and no outside library. Pure functions, tested in
// algebra-answer.test.js.
import { abs, gcd } from './answer.logic.js'
import { assert, unreachable } from './invariant.logic.js'
import { ok } from './result.logic.js'
import { notRead, strip } from './answer-syntax.logic.js'

/**
 * A value worked out, or why it has none.
 * @template T
 * @typedef {import('./result.logic.js').Result<T, import('./answer-syntax.logic.js').ReadError>} Worked
 */

/** An expression too large to work out: read as not read, never as a hang. */
const big = () => notRead('too-long')
const TERMS = 400
const POWER = 24

// --- rationals -------------------------------------------------------------------------------
/** @typedef {Readonly<{ n: bigint, d: bigint }>} Rat */
/**
 * The rational n/d in lowest terms; every caller's d is not zero.
 * @type {(n: bigint, d?: bigint) => Rat}
 */
const rat = (n, d = 1n) => {
  assert(d !== 0n, 'a rational is made with a denominator that is not zero')
  if (d < 0n) [n, d] = [-n, -d]
  const g = gcd(n, d) || 1n
  return { n: n / g, d: d / g }
}
const ZERO = rat(0n)
const ONE = rat(1n)
/** @type {(a: Rat, b: Rat) => Rat} */
const radd = (a, b) => rat(a.n * b.d + b.n * a.d, a.d * b.d)
/** @type {(a: Rat, b: Rat) => Rat} */
const rmul = (a, b) => rat(a.n * b.n, a.d * b.d)
/** @type {(a: Rat) => Rat} */
const rneg = a => ({ n: -a.n, d: a.d })
/** One over a rational that is not zero. @type {(a: Rat) => Rat} */
const rinv = a => rat(a.d, a.n)
/** @type {(a: Rat, b: Rat) => boolean} */
export const req = (a, b) => a.n === b.n && a.d === b.d
/** @type {(a: Rat) => string} */
const rkey = a => (a.d === 1n ? `${a.n}` : `${a.n}/${a.d}`)
/**
 * The whole part of a rational, rounding down.
 * @type {(a: Rat) => bigint}
 */
const floor = a => (a.n >= 0n ? a.n / a.d : -((-a.n + a.d - 1n) / a.d))
/**
 * A rational that is not zero to a whole power.
 * @type {(a: Rat, k: bigint) => Worked<Rat>}
 */
const rpow = (a, k) => {
  if (abs(k) > 4000n) return big()
  return ok(k >= 0n ? rat(a.n ** k, a.d ** k) : rat(a.d ** -k, a.n ** -k))
}

/**
 * A positive whole number as its primes: [[prime, power], …].
 * @param {bigint} n
 * @returns {Worked<[bigint, bigint][]>}
 */
export function primes(n) {
  if (n > 10n ** 15n) return big()
  /** @type {[bigint, bigint][]} */
  const out = []
  for (let p = 2n; p * p <= n; p += p === 2n ? 1n : 2n) {
    let k = 0n
    while (n % p === 0n) {
      n /= p
      k++
    }
    if (k) out.push([p, k])
  }
  if (n > 1n) out.push([n, 1n])
  return ok(out)
}

// --- powers: a rational, plus rational multiples of letters and their products (3^(2p), g^(nk)) -
/**
 * A power is { c, v }: the number c plus v[letters] times each product of letters, as 'k*n'.
 * @typedef {Readonly<{ c: Rat, v: Readonly<Record<string, Rat>> }>} Pw
 */
/** @type {(c: Rat, v?: Readonly<Record<string, Rat>>) => Pw} */
const pw = (c, v = {}) => ({ c, v })
/** @type {(e: Pw) => boolean} */
const pwConst = e => Object.keys(e.v).length === 0
/** @type {(a: Pw, b: Pw) => Pw} */
const pwAdd = (a, b) => {
  /** @type {Record<string, Rat>} */
  const v = { ...a.v }
  for (const [k, x] of Object.entries(b.v)) {
    const s = radd(v[k] ?? ZERO, x)
    if (s.n === 0n) delete v[k]
    else v[k] = s
  }
  return pw(radd(a.c, b.c), v)
}
/** @type {(a: Pw, r: Rat) => Pw} */
const pwScale = (a, r) => {
  /** @type {Record<string, Rat>} */
  const v = {}
  for (const [k, x] of Object.entries(a.v)) if (r.n !== 0n) v[k] = rmul(x, r)
  return pw(rmul(a.c, r), v)
}
/** @type {(a: Pw, b: Pw) => Pw} */
const pwMul = (a, b) => {
  let out = pwAdd(pwScale(a, b.c), pwScale(pw(ZERO, b.v), a.c))
  for (const [j, x] of Object.entries(a.v))
    for (const [k, y] of Object.entries(b.v)) {
      const key = [...j.split('*'), ...k.split('*')].sort().join('*')
      out = pwAdd(out, pw(ZERO, { [key]: rmul(x, y) }))
    }
  return out
}
/** @type {(e: Pw) => boolean} */
const pwZero = e => e.c.n === 0n && pwConst(e)
/** @type {(e: Pw) => string} */
const pwKey = e =>
  [
    rkey(e.c),
    ...Object.entries(e.v)
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      .map(([k, x]) => `${rkey(x)}${k}`)
  ].join('+')

// --- terms and sums ---------------------------------------------------------------------------
// A term is { coef, mono }, mono a map from a base key to its power: 'v:x' a letter, 'p:3' a
// prime, 'a:<key>' a sum under a fractional power. A sum (`poly`) is a Map from the key of a
// mono to its term. A prime's or a kept sum's power has its number part from 0 up to 1.
/** @typedef {Readonly<Record<string, Pw>>} Mono */
/** @typedef {Readonly<{ coef: Rat, mono: Mono }>} Term */
/** @typedef {ReadonlyMap<string, Term>} Poly */
/** @type {Map<string, Poly>} */
const atoms = new Map() // the key of a kept sum → the sum

/** The sum a kept sum's base key stands for. @type {(b: string) => Poly} */
const kept = b => {
  const p = atoms.get(b)
  assert(p, `a base key 'a:' names a kept sum that was stored: ${b}`)
  return p
}
/** The one term of a sum that has exactly one. @type {(p: Poly) => Term} */
const only = p => {
  const [t, more] = p.values()
  assert(t && !more, 'a one-term sum has exactly one term')
  return t
}

/** @type {(mono: Mono) => string} */
const monoKey = mono =>
  Object.entries(mono)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([b, e]) => `${b}^${pwKey(e)}`)
    .join('*')

/**
 * Terms collected into a sum: like terms added, terms of no value left out.
 * @type {(terms: Iterable<Term>) => Poly}
 */
const collect = terms => {
  /** @type {Map<string, Term>} */
  const out = new Map()
  for (const t of terms) {
    if (t.coef.n === 0n) continue
    const k = monoKey(t.mono)
    const before = out.get(k)
    const coef = before ? radd(before.coef, t.coef) : t.coef
    if (coef.n === 0n) out.delete(k)
    else out.set(k, { coef, mono: t.mono })
  }
  return out
}
/**
 * Terms collected into a sum, failing when the sum has more terms than can be worked with.
 * @type {(terms: Iterable<Term>) => Worked<Poly>}
 */
const poly = terms => {
  const out = collect(terms)
  return out.size > TERMS ? big() : ok(out)
}
/** @type {(r: Rat) => Poly} */
const num = r => collect([{ coef: r, mono: {} }])
const P_ONE = num(ONE)
/** @type {(p: Poly) => string} */
const polyKey = p =>
  [...p.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, t]) => `${k}=${rkey(t.coef)}`)
    .join(' ; ')
/** @type {(a: Poly, b: Poly) => boolean} */
const polyEq = (a, b) => polyKey(a) === polyKey(b)
/** @type {(a: Poly, b: Poly) => Worked<Poly>} */
const padd = (a, b) => poly([...a.values(), ...b.values()])
/** @type {(a: Poly, r: Rat) => Poly} */
const pscale = (a, r) =>
  collect([...a.values()].map(t => ({ coef: rmul(t.coef, r), mono: t.mono })))

/**
 * A mono's bases that are not letters, each with its power's whole part taken out: a prime's
 * into the coefficient, a kept sum's as that many copies of the sum to multiply in.
 * @param {Record<string, Pw>} mono the mono, changed in place
 * @param {Rat} coef
 * @returns {Worked<{ coef: Rat, sums: Poly[] }>}
 */
function wholeParts(mono, coef) {
  /** @type {Poly[]} */
  const sums = []
  for (const [b, grown] of Object.entries(mono)) {
    let e = grown
    const k = b[0] === 'v' ? 0n : floor(e.c)
    if (k !== 0n) {
      e = pw(radd(e.c, rat(-k)), e.v)
      if (b[0] === 'p') {
        const r = rpow(rat(BigInt(b.slice(2))), k)
        if (!r.ok) return r
        coef = rmul(coef, r.value)
      } else {
        // Each kept sum's power has its number part from 0 up to 1, so two multiplied never
        // have a negative whole part.
        assert(k > 0n, 'a product of kept sums has a whole part of 0 or more')
        for (let i = 0n; i < k; i++) sums.push(kept(b))
      }
    }
    if (pwZero(e)) delete mono[b]
    else mono[b] = e
  }
  return ok({ coef, sums })
}

/**
 * The product of two terms, as a sum: a kept sum whose powers add up to 1 is multiplied back in.
 * @param {Term} s
 * @param {Term} t
 * @returns {Worked<Poly>}
 */
function tmul(s, t) {
  /** @type {Record<string, Pw>} */
  const mono = { ...s.mono }
  for (const [b, e] of Object.entries(t.mono)) {
    const have = mono[b]
    mono[b] = have ? pwAdd(have, e) : e
  }
  const parts = wholeParts(mono, rmul(s.coef, t.coef))
  if (!parts.ok) return parts
  const [first, ...more] = parts.value.sums
  const one = collect([{ coef: parts.value.coef, mono }])
  if (!first) return ok(one)
  let extra = first
  for (const sum of more) {
    const next = pmul(extra, sum)
    if (!next.ok) return next
    extra = next.value
  }
  return pmul(one, extra)
}
/** @type {(a: Poly, b: Poly) => Worked<Poly>} */
function pmul(a, b) {
  if (a.size * b.size > TERMS * 4) return big()
  /** @type {Term[]} */
  const out = []
  for (const s of a.values())
    for (const t of b.values()) {
      const st = tmul(s, t)
      if (!st.ok) return st
      out.push(...st.value.values())
    }
  return poly(out)
}

// --- quotients --------------------------------------------------------------------------------
/**
 * A value: { num, den }, two sums. A one-term denominator is always folded into the top.
 * @typedef {Readonly<{ num: Poly, den: Poly }>} Value
 */
/** @type {(n: Poly, d?: Poly) => Worked<Value>} */
const val = (n, d = P_ONE) => fold({ num: n, den: d })
/** @type {(p: Poly) => boolean} */
const isOne = p => p.size === 1 && polyKey(p) === '=1'
/** A value of one sum, with no denominator. @type {(p: Poly) => Value} */
const whole = p => ({ num: p, den: P_ONE })

/**
 * One over a term, as a value: a root below comes up, and a kept sum below leaves the sum.
 * @param {Term} t
 * @returns {Worked<Value>}
 */
function tinv(t) {
  let coef = rinv(t.coef)
  /** @type {Record<string, Pw>} */
  const mono = {}
  let den = P_ONE
  for (const [b, e] of Object.entries(t.mono)) {
    if (b[0] === 'v') mono[b] = pwScale(e, rat(-1n))
    else {
      // base^(-e) = base^(1 - c) / base, times base^(-letters)
      mono[b] = pw(radd(ONE, rneg(e.c)), pwScale(pw(ZERO, e.v), rat(-1n)).v)
      if (b[0] === 'p') coef = rmul(coef, rat(1n, BigInt(b.slice(2))))
      else {
        const next = pmul(den, kept(b))
        if (!next.ok) return next
        den = next.value
      }
    }
  }
  const top = tmul({ coef: ONE, mono: {} }, { coef, mono })
  return top.ok ? ok({ num: top.value, den }) : top
}
/** @type {(v: Value) => Worked<Value>} */
function fold(v) {
  if (v.den.size === 0) return notRead('division-by-zero')
  if (v.den.size !== 1 || isOne(v.den)) return ok(v)
  const inv = tinv(only(v.den))
  if (!inv.ok) return inv
  const top = pmul(v.num, inv.value.num)
  return top.ok ? fold({ num: top.value, den: inv.value.den }) : top
}
/** @type {(a: Value, b: Value) => Worked<Value>} */
function vadd(a, b) {
  if (polyEq(a.den, b.den)) {
    const top = padd(a.num, b.num)
    return top.ok ? val(top.value, a.den) : top
  }
  const x = pmul(a.num, b.den)
  if (!x.ok) return x
  const y = pmul(b.num, a.den)
  if (!y.ok) return y
  const top = padd(x.value, y.value)
  if (!top.ok) return top
  const d = pmul(a.den, b.den)
  return d.ok ? val(top.value, d.value) : d
}
/** @type {(a: Value, b: Value) => Worked<Value>} */
function vmul(a, b) {
  const n = pmul(a.num, b.num)
  if (!n.ok) return n
  const d = pmul(a.den, b.den)
  return d.ok ? val(n.value, d.value) : d
}
/** @type {(a: Value) => Worked<Value>} */
const vneg = a => val(pscale(a.num, rat(-1n)), a.den)
/** @type {(a: Value) => Worked<Value>} */
const vinv = a => (a.num.size === 0 ? notRead('division-by-zero') : val(a.den, a.num))
const V_ONE = whole(P_ONE)

/**
 * A worked value times the next, worked only when the first has a value: the first failure stands.
 * @param {Worked<Value>} out
 * @param {() => Worked<Value>} next
 * @returns {Worked<Value>}
 */
function times(out, next) {
  if (!out.ok) return out
  const v = next()
  return v.ok ? vmul(out.value, v.value) : v
}

/**
 * The number a value is, or null when it holds a letter or a root.
 * @param {Value} v
 * @returns {Rat | null}
 */
export function constant(v) {
  if (!isOne(v.den)) return null
  if (v.num.size === 0) return ZERO
  if (v.num.size > 1) return null
  const t = only(v.num)
  return Object.keys(t.mono).length ? null : t.coef
}

/**
 * A value as a power: a number, or a number plus multiples of letters and their products; else not read.
 * @param {Value} v
 * @returns {Worked<Pw>}
 */
function asPower(v) {
  if (!isOne(v.den)) return notRead('index')
  let e = pw(ZERO)
  for (const t of v.num.values()) {
    /** @type {string[]} */
    const names = []
    for (const [b, f] of Object.entries(t.mono)) {
      // Each letter of the index to a whole power from 1 up, written out: k^2 as k*k.
      if (b[0] !== 'v' || !pwConst(f) || f.c.d !== 1n || f.c.n < 1n || f.c.n > 6n)
        return notRead('index')
      for (let i = 0n; i < f.c.n; i++) names.push(b.slice(2))
    }
    const key = names.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join('*')
    e = pwAdd(e, names.length ? pw(ZERO, { [key]: t.coef }) : pw(t.coef))
  }
  return ok(e)
}

/**
 * base^e for one base key, as a value.
 * @param {string} b
 * @param {Pw} e
 * @returns {Worked<Value>}
 */
function basePow(b, e) {
  if (pwZero(e)) return ok(V_ONE)
  if (b[0] === 'v') return ok(whole(collect([{ coef: ONE, mono: { [b]: e } }])))
  const k = floor(e.c)
  const rest = pw(radd(e.c, rat(-k)), e.v)
  const root = pwZero(rest) ? V_ONE : whole(collect([{ coef: ONE, mono: { [b]: rest } }]))
  if (b[0] === 'p') {
    const r = rpow(rat(BigInt(b.slice(2))), k)
    return r.ok ? vmul(whole(num(r.value)), root) : r
  }
  if (!pwConst(e)) return notRead('sum-index')
  const sum = vpowInt(whole(kept(b)), k)
  return sum.ok ? vmul(sum.value, root) : sum
}

/**
 * A one-term sum to the power e.
 * @param {Term} t
 * @param {Pw} e
 * @returns {Worked<Value>}
 */
function termPow(t, e) {
  let sign = V_ONE
  let c = t.coef
  if (c.n < 0n) {
    // A negative number has a power only for a whole index, and a negative term with letters
    // also for an odd root, taken real: (-x)^(1/3) is -x^(1/3). The rest is left undefined.
    const odd = e.c.d % 2n === 1n && Object.keys(t.mono).length > 0
    if (!pwConst(e) || (e.c.d !== 1n && !odd)) return notRead('negative-power')
    if (e.c.n % 2n !== 0n) sign = whole(pscale(P_ONE, rat(-1n)))
    c = rneg(c)
  }
  /** @type {Worked<Value>} */
  let out = ok(sign)
  const top = primes(c.n)
  if (!top.ok) return top
  for (const [p, k] of top.value) out = times(out, () => basePow(`p:${p}`, pwScale(e, rat(k))))
  if (!out.ok) return out
  const bottom = primes(c.d)
  if (!bottom.ok) return bottom
  for (const [p, k] of bottom.value) out = times(out, () => basePow(`p:${p}`, pwScale(e, rat(-k))))
  for (const [b, f] of Object.entries(t.mono)) out = times(out, () => basePow(b, pwMul(f, e)))
  return out
}

/**
 * The letter content of a sum: each letter to the lowest plain power it has in every term.
 * @param {readonly Term[]} terms
 * @returns {Mono}
 */
function letterContent(terms) {
  /** @type {Record<string, Pw>} */
  const mono = {}
  const lead = terms[0]
  for (const b of Object.keys(lead?.mono ?? {})) {
    if (b[0] !== 'v') continue
    /** @type {Rat | null} */
    let low = null
    for (const t of terms) {
      const e = t.mono[b]
      if (!e || !pwConst(e)) {
        low = null
        break
      }
      if (!low || e.c.n * low.d < low.n * e.c.d) low = e.c
    }
    if (low && low.n !== 0n) mono[b] = pw(low)
  }
  return mono
}

/**
 * A sum of two or more terms to a fractional power f between 0 and 1: its content comes out, the rest is kept whole.
 * @param {Poly} p
 * @param {Rat} f
 * @returns {Worked<Value>}
 */
function sumRoot(p, f) {
  const terms = [...p.values()]
  // The number content: the gcd of the tops over the lcm of the bottoms.
  let g = 0n
  let l = 1n
  for (const t of terms) {
    g = gcd(g, t.coef.n)
    l = (l * t.coef.d) / gcd(l, t.coef.d)
  }
  // An odd root is taken real: the sum's sign, read off its first term, comes out with the
  // content, so (-x-28)^(1/3) is -(x+28)^(1/3).
  const lead = [...p.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))[0]?.[1]
  const flip = f.d % 2n === 1n && (lead?.coef.n ?? 0n) < 0n
  const content = { coef: rat(flip ? -g : g, l), mono: letterContent(terms) }
  const out = tinv(content)
  if (!out.ok) return out
  // The denominator is one: the content holds letters and numbers only.
  const prim = pmul(p, out.value.num)
  if (!prim.ok) return prim
  const key = `a:${polyKey(prim.value)}`
  atoms.set(key, prim.value)
  const power = times(
    termPow({ coef: flip ? rneg(content.coef) : content.coef, mono: content.mono }, pw(f)),
    () => ok(flip && f.n % 2n !== 0n ? whole(pscale(P_ONE, rat(-1n))) : V_ONE)
  )
  return power.ok
    ? vmul(power.value, whole(collect([{ coef: ONE, mono: { [key]: pw(f) } }])))
    : power
}

/** @type {(v: Value, k: bigint) => Worked<Value>} */
function vpowInt(v, k) {
  if (k === 0n) return ok(V_ONE)
  if (k < 0n) {
    const inv = vinv(v)
    return inv.ok ? vpowInt(inv.value, -k) : inv
  }
  if (k > BigInt(POWER) && (v.num.size > 1 || v.den.size > 1)) return big()
  if (k > 4000n) return big()
  if (v.num.size <= 1 && isOne(v.den))
    return v.num.size ? termPow(only(v.num), pw(rat(k))) : ok(whole(new Map()))
  /** @type {Worked<Value>} */
  let out = ok(V_ONE)
  for (let i = 0n; i < k; i++) out = times(out, () => ok(v))
  return out
}

/**
 * One sum to the power e, a sum of several terms taken apart into its whole power and its root.
 * @param {Poly} p
 * @param {Pw} e
 * @returns {Worked<Value>}
 */
function partPow(p, e) {
  if (p.size === 1) return termPow(only(p), e)
  if (!pwConst(e)) return notRead('sum-index')
  const k = floor(e.c)
  const power = vpowInt(whole(p), k)
  return times(power, () => sumRoot(p, radd(e.c, rat(-k))))
}

/** @type {(v: Value, e: Pw) => Worked<Value>} */
function vpow(v, e) {
  if (pwConst(e) && e.c.d === 1n) {
    if (v.num.size === 0 && e.c.n <= 0n) return notRead('zero-power')
    return vpowInt(v, e.c.n)
  }
  if (v.num.size === 0) return !pwConst(e) || e.c.n <= 0n ? notRead('zero-power') : ok(v)
  if (isOne(v.den)) return partPow(v.num, e)
  return times(partPow(v.num, e), () => {
    const below = partPow(v.den, e)
    return below.ok ? vinv(below.value) : below
  })
}

/**
 * A tree to a fractional power e, the quick way: the power is taken of each factor of a product
 * or quotient, and a power of a power multiplies the indices, so sqrt((n+5)^3) is (n+5)^(3/2).
 * These hold for positive values, as every other rewrite here does; a negative number is left
 * whole. Null where the tree is not of such a shape.
 * @param {import('./answer-syntax.logic.js').Node} t
 * @param {Pw} e
 * @returns {Worked<Value> | null}
 */
function rootByParts(t, e) {
  switch (t.t) {
    case 'mul':
      return times(root(t.a, e), () => root(t.b, e))
    case 'div':
      return times(root(t.a, e), () => {
        const below = root(t.b, e)
        return below.ok ? vinv(below.value) : below
      })
    case 'sqrt':
      return root(t.a, pwScale(e, rat(1n, 2n)))
    case 'pow': {
      const index = value(t.b)
      const k = index.ok ? asPower(index.value) : index
      if (!k.ok) return k
      const base = value(t.a)
      if (!base.ok) return base
      const c = constant(base.value)
      if (!pwConst(k.value) || (c && c.n < 0n)) return null
      const both = pwMul(k.value, e)
      return both.c.d === 1n ? vpow(base.value, both) : root(t.a, both)
    }
    case 'num':
    case 'var':
    case 'neg':
    case 'grp':
    case 'add':
    case 'sub':
      return null
    default:
      return unreachable(t)
  }
}

/**
 * A tree to a fractional power e: by its parts where they all work out, else whole.
 * @param {import('./answer-syntax.logic.js').Node} tree
 * @param {Pw} e
 * @returns {Worked<Value>}
 */
function root(tree, e) {
  const t = strip(tree)
  const parts = rootByParts(t, e)
  if (parts?.ok) return parts
  const v = value(t)
  return v.ok ? vpow(v.value, e) : v
}

/**
 * The value of a tree from syntax.logic.js `parse`.
 * @param {import('./answer-syntax.logic.js').Node} n
 * @returns {Worked<Value>}
 */
export function value(n) {
  switch (n.t) {
    case 'num':
      return val(num(rat(n.n, n.d)))
    case 'var':
      return ok(whole(collect([{ coef: ONE, mono: { [`v:${n.name}`]: pw(ONE) } }])))
    case 'neg': {
      const a = value(n.a)
      return a.ok ? vneg(a.value) : a
    }
    case 'add':
    case 'sub':
    case 'mul':
    case 'div':
      return twoSided(n.t, n.a, n.b)
    case 'pow': {
      const index = value(n.b)
      const e = index.ok ? asPower(index.value) : index
      if (!e.ok) return e
      if (pwConst(e.value) && e.value.c.d !== 1n) return root(n.a, e.value)
      const base = value(n.a)
      return base.ok ? vpow(base.value, e.value) : base
    }
    case 'sqrt':
      return root(n.a, pw(rat(1n, 2n)))
    case 'grp':
      return value(n.a)
    default:
      return unreachable(n)
  }
}

/**
 * The value of a two-sided node: a sum, a difference, a product or a quotient.
 * @param {'add' | 'sub' | 'mul' | 'div'} t
 * @param {import('./answer-syntax.logic.js').Node} a
 * @param {import('./answer-syntax.logic.js').Node} b
 * @returns {Worked<Value>}
 */
function twoSided(t, a, b) {
  const left = value(a)
  if (!left.ok) return left
  const right = value(b)
  if (!right.ok) return right
  const x = left.value
  const y = right.value
  switch (t) {
    case 'add':
      return vadd(x, y)
    case 'sub': {
      const minus = vneg(y)
      return minus.ok ? vadd(x, minus.value) : minus
    }
    case 'mul':
      return vmul(x, y)
    case 'div': {
      const over = vinv(y)
      return over.ok ? vmul(x, over.value) : over
    }
    default:
      return unreachable(t)
  }
}

/**
 * Two values are equal: cross-multiplied, their sums agree term by term.
 * @type {(a: Value, b: Value) => Worked<boolean>}
 */
export const same = (a, b) => {
  const x = pmul(a.num, b.den)
  const y = pmul(b.num, a.den)
  if (!x.ok) return x
  return y.ok ? ok(polyEq(x.value, y.value)) : y
}
export const negative = vneg

/**
 * The terms of a value with no denominator left: [{ coef, mono }], or null when one is left.
 * @type {(v: Value) => Term[] | null}
 */
export const terms = v => (isOne(v.den) ? [...v.num.values()] : null)
/**
 * The letters of a term, each with its plain power, or null where the power holds a letter.
 * @type {(t: Term) => Record<string, Rat | null>}
 */
export const letters = t =>
  Object.fromEntries(
    Object.entries(t.mono)
      .filter(([b]) => b[0] === 'v')
      .map(([b, e]) => [b.slice(2), pwConst(e) ? e.c : null])
  )
