// Hides: Algebra's answer forms, each one fixed sentence with the equivalence rule stated on the
// problem, and how an answer in each is set as mathematics. An
// answer is typed in the shared syntax (kernel/answer-syntax.logic.js), with these additions for
// the forms that need them: an ordered pair in round brackets, a set in curly brackets, an
// inequality with <, <=, >, >= (several joined by "or"), an interval with [ ] ( ) and inf, joined
// by U, a complex number with the letter i, and "Line n: …" for Find the error. Every match but
// the new ones is the kernel's (kernel/answer-forms.logic.js). Four forms are marked by the
// learner and match nothing exactly: a proof, a sketch, the rest of a Find the error line once its
// number is checked, and a Translate equation, which any rearrangement answers. The screens call
// `answerTex` and `shown`; the data test holds every stored answer to its form with `matchAnswer`.
// Pure functions, tested in check.test.js.
import { MATCHES, reading } from '../../../kernel/answer-forms.logic.js'
import { gcd, matched } from '../../../kernel/answer.logic.js'
import { letters, terms, value } from '../../../kernel/algebra-answer.logic.js'
import { parse, read, strip, tidy } from '../../../kernel/answer-syntax.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'


/** A problem's proof, written on paper and checked line by line against the published one. */
export const PROOF_FORM = 'Write the proof.'
/** Find the error: the wrong line's number, checked by the app, and that line written right. */
export const ERROR_FORM = 'Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.'
/** Translate, equation to sketch: drawn on the problem's axes, checked on its features alone. */
export const SKETCH_FORM = 'Sketch the graph on your own axes.'
/** Translate, inequality to number line: drawn on a number line, checked on its shaded set alone. */
export const LINE_FORM = 'Sketch the set on a number line.'
/** Translate, sentence or sketch to equation: any rearrangement of the stored one is right. */
export const TRANSLATE_FORM = 'Answer as an equation, or equivalent, as in y = 2*x-3.'
/** A Translate sentence whose answer is an inequality, or two joined by and: the learner marks it. */
export const TRANSLATE_INEQUALITY_FORM = 'Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.'

/**
 * The two sides of a typed equation, or null.
 * @param {string} s
 * @returns {[string, string] | null}
 */
const sidesOf = s => {
  const parts = tidy(s).split('=')
  const [left, right] = parts
  return parts.length === 2 && left !== undefined && right !== undefined ? [left, right] : null
}

/**
 * y = m*x+c: y alone on the left, and the right a sum written out with its like terms collected.
 * @type {import('../../../kernel/answer-forms.logic.js').Match}
 */
const slopeLine = (t, s) => {
  const a = sidesOf(t)
  const b = sidesOf(s)
  return a !== null && b !== null && a[0] === 'y' && b[0] === 'y' && MATCHES.collected(a[1], b[1])
}

/**
 * The whole coefficients of a*x+b*y, or null where the side is not a sum of whole multiples of x
 * and y alone.
 * @param {string} side
 * @returns {[bigint, bigint] | null}
 */
function lineCoefficients(side) {
  const tree = parse(side)
  const v = tree.ok ? value(tree.value) : null
  const list = v?.ok ? terms(v.value) : null
  if (!list) return null
  /** @type {Record<string, bigint>} */
  const out = { x: 0n, y: 0n }
  for (const t of list) {
    const names = Object.entries(letters(t))
    const [name, power] = names[0] ?? []
    if (Object.keys(t.mono).length !== 1 || !name || !(name in out) || power?.n !== 1n || power.d !== 1n || t.coef.d !== 1n)
      return null
    out[name] = t.coef.n
  }
  return [out.x ?? 0n, out.y ?? 0n]
}

/**
 * a*x+b*y = c: whole numbers with no common factor, a above 0 (or a zero and b above 0), the left
 * written out with its like terms collected.
 * @type {import('../../../kernel/answer-forms.logic.js').Match}
 */
const standardLine = (t, s) => {
  const a = sidesOf(t)
  const b = sidesOf(s)
  if (!a || !b || !/^-?\d+$/.test(a[1])) return false
  const ab = lineCoefficients(a[0])
  if (!ab) return false
  const [x, y] = ab
  const c = BigInt(a[1])
  const lead = x !== 0n ? x : y
  return gcd(gcd(x, y), c) === 1n && lead > 0n && MATCHES.collected(a[0], b[0]) && MATCHES.integer(a[1], b[1])
}

/**
 * What is inside one pair of outer brackets `open` and `close`, or null.
 * @param {string} s
 * @param {string} open
 * @param {string} close
 */
const inside = (s, open, close) => {
  const t = tidy(s)
  return t.startsWith(open) && t.endsWith(close) ? t.slice(1, -1) : null
}

/** (2, -1): two numbers in order, in round brackets. @type {import('../../../kernel/answer-forms.logic.js').Match} */
const pair = (t, s) => {
  const a = inside(t, '(', ')')
  const b = inside(s, '(', ')')
  return a !== null && b !== null && a.split(',').length === 2 && MATCHES.numberList(a, b)
}

/**
 * Two lists whose items pair off one to one, in any order, by `same`.
 * @template T
 * @param {readonly T[]} a
 * @param {readonly T[]} b
 * @param {(x: T, y: T) => boolean} same
 */
function sameItems(a, b, same) {
  const left = [...b]
  return (
    a.length === b.length &&
    a.every(x => {
      const j = left.findIndex(y => same(x, y))
      return j >= 0 && left.splice(j, 1).length === 1
    })
  )
}

/** {-1, 3}: numbers in curly brackets, in any order; {} is the empty set. @type {import('../../../kernel/answer-forms.logic.js').Match} */
const set = (t, s) => {
  const a = inside(t, '{', '}')
  const b = inside(s, '{', '}')
  if (a === null || b === null) return false
  /** @param {string} x */
  const items = x => (x === '' ? [] : x.split(','))
  return sameItems(items(a), items(b), withI(t, s) ? complex : MATCHES.number)
}

/**
 * One run of numbers: its ends, each a number as typed or null for none, whether each end is in
 * it, and the letter it is said of (an interval names none).
 * @typedef {{ letter: string, lo: string | null, loIn: boolean, hi: string | null, hiIn: boolean }} Run
 */

/** @param {string} s */
const isLetter = s => /^[a-z]$/.test(s)

/**
 * One inequality as a run: x < 3, 3 >= x, -2 <= x < 5; else null.
 * @param {string} text
 * @returns {Run | null}
 */
function inequalityRun(text) {
  const bits = text.split(/(<=|>=|<|>)/)
  /** @type {(r: string) => boolean} */
  const less = r => r.startsWith('<')
  if (bits.length === 3) {
    const [l = '', r = '', x = ''] = bits
    const [letter, num, rel] = isLetter(l) ? [l, x, r] : isLetter(x) ? [x, l, r.replace('<', '#').replace('>', '<').replace('#', '>')] : []
    if (!letter || !num || !rel || isLetter(num)) return null
    const strict = !rel.endsWith('=')
    return less(rel)
      ? { letter, lo: null, loIn: false, hi: num, hiIn: !strict }
      : { letter, lo: num, loIn: !strict, hi: null, hiIn: false }
  }
  if (bits.length === 5) {
    const [a = '', r1 = '', letter = '', r2 = '', c = ''] = bits
    if (!isLetter(letter) || less(r1) !== less(r2) || isLetter(a) || isLetter(c)) return null
    const [lo, loR, hi, hiR] = less(r1) ? [a, r1, c, r2] : [c, r2, a, r1]
    return { letter, lo, loIn: loR.endsWith('='), hi, hiIn: hiR.endsWith('=') }
  }
  return null
}

/**
 * One interval as a run: [-2, 5), (-inf, 3]; else null. An end at inf is never in the run.
 * @param {string} text
 * @returns {Run | null}
 */
function intervalRun(text) {
  const m = /^([[(])([^,]+),([^,]+)([\])])$/.exec(text)
  if (!m) return null
  const [, open = '', lo = '', hi = '', close = ''] = m
  const loEnd = lo === '-inf' ? null : lo
  const hiEnd = hi === 'inf' ? null : hi
  if ((loEnd === null && open === '[') || (hiEnd === null && close === ']')) return null
  return { letter: '', lo: loEnd, loIn: open === '[', hi: hiEnd, hiIn: close === ']' }
}

/** The inequality form that also takes All, None and x = number. */
const SET_INEQUALITY = 'Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.'

/**
 * One part of a set inequality: an inequality run, or x = number as a one-point run.
 * @param {string} text
 * @returns {Run | null}
 */
const pointOrRun = text => {
  const [l = '', r, ...rest] = text.split('=')
  return isLetter(l) && r && !rest.length && !/[<>]/.test(r) ? { letter: l, lo: r, loIn: true, hi: r, hiIn: true } : inequalityRun(text)
}

/**
 * A set inequality: All and None as the words, else the runs pair off.
 * ponytail: runs pair one to one, so x < 3 or x >= 3 is not taken as All; merge runs if a bank needs it.
 * @type {import('../../../kernel/answer-forms.logic.js').Match}
 */
const setInequality = (t, s) => {
  /** @param {string} x */
  const word = x => (/^(all|none)$/i.test(tidy(x)) ? tidy(x).toLowerCase() : null)
  return word(t) !== null || word(s) !== null ? word(t) === word(s) : sameRuns('or', pointOrRun)(t, s)
}

/** @type {(a: string | null, b: string | null) => boolean} */
const sameEnd = (a, b) => (a === null || b === null ? a === b : MATCHES.number(a, b))
/** @type {(a: Run, b: Run) => boolean} */
const sameRun = (a, b) =>
  a.letter === b.letter && a.loIn === b.loIn && a.hiIn === b.hiIn && sameEnd(a.lo, b.lo) && sameEnd(a.hi, b.hi)

/**
 * A whole answer cut into runs at `join`, each read by `run`; null when one does not read.
 * @param {string} s
 * @param {string} join
 * @param {(text: string) => Run | null} run
 */
const runs = (s, join, run) => {
  const list = tidy(s).replace(/≤/g, '<=').replace(/≥/g, '>=').split(join).map(run)
  return list.every(r => r !== null) ? list : null
}

/**
 * Runs that pair off one to one, in any order.
 * @param {string} join
 * @param {(text: string) => Run | null} run
 * @returns {import('../../../kernel/answer-forms.logic.js').Match}
 */
const sameRuns = (join, run) => (t, s) => {
  const a = runs(t, join, run)
  const b = runs(s, join, run)
  return a !== null && b !== null && sameItems(a, b, sameRun)
}

/** 3-2*i: a sum written out with its like terms collected, i its one letter. @type {import('../../../kernel/answer-forms.logic.js').Match} */
const complex = (t, s) =>
  !/[a-hj-z]/.test(tidy(t).replace(/sqrt|pi/g, '')) &&
  (/sqrt/.test(tidy(`${t},${s}`)) || [t, s].some(x => OVER.test(tidy(x))) ? surdParts(t, s) : MATCHES.collected(t, s))

/** (p+q*i)/d: one complex value over a whole number. */
const OVER = /^\((.*)\)\/(\d+)$/

/**
 * A value with a root: its real part and its coefficient of i, each in simplest surd form.
 * @param {string} x
 * @returns {[string, string]}
 */
const parts = x => {
  const terms = tidy(x).match(/[+-]?(?:\([^()]*\)|[^+-])+/g) ?? []
  const isI = /(^|[^a-z])i([^a-z]|$)/
  /** @param {string[]} list */
  const join = list => list.join('').replace(/^\+/, '') || '0'
  const im = terms.filter(u => isI.test(u)).map(u => u.replace(/i\*|\*i(?![a-z])/g, '').replace(/(^|[^a-z])i(?![a-z])/g, '$11'))
  return [join(terms.filter(u => !isI.test(u))), join(im)]
}
/** @type {import('../../../kernel/answer-forms.logic.js').Match} */
const surdParts = (t, s) => {
  /** @param {string} x @returns {string[]} each part over d when x is (p+q*i)/d */
  const split = x => {
    const [, top, d] = OVER.exec(tidy(x)) ?? []
    return top && d ? parts(top).map(u => (u === '0' ? u : `(${u})/${d}`)) : parts(x)
  }
  const [a = '', b = ''] = split(t)
  const [c = '', d = ''] = split(s)
  return lowest(t) ? MATCHES.number(a, c) && MATCHES.number(b, d) : MATCHES.surdForm(a, c) && MATCHES.surdForm(b, d)
}
/**
 * True when x is (p+q*i)/d with both parts of p in simplest surd form and no factor common to d and every whole coefficient of p.
 * @param {string} x
 */
const lowest = x => {
  const [, top, d] = OVER.exec(tidy(x)) ?? []
  if (!top || !d) return false
  const ps = parts(top).filter(u => u !== '0')
  const coefficient = (/** @type {string} */ u) => BigInt(/\d+/.exec(u.replace(/sqrt\([^)]*\)/g, ''))?.[0] ?? 1)
  return ps.every(u => MATCHES.surdForm(u, u)) && ps.reduce((g, u) => gcd(g, coefficient(u)), BigInt(d)) === 1n
}

/** True when either answer holds the letter i: its values are then held to `complex`. @type {(t: string, s: string) => boolean} */
const withI = (t, s) => /(^|[^a-z])i([^a-z]|$)/.test(tidy(`${t},${s}`).replace(/sqrt|pi/g, ''))

/** x = 1+3*i, x = 1-3*i: solutions, real ones held as before, complex ones each to `complex`, any order. @type {import('../../../kernel/answer-forms.logic.js').Match} */
const solutions = (t, s) => {
  if (!withI(t, s)) return MATCHES.unknownValues(t, s)
  /** @param {string} x */
  const items = x => tidy(x).split(',').map(p => p.split('='))
  const a = items(t)
  const b = items(s)
  return [...a, ...b].every(p => p.length === 2) && sameItems(a, b, ([n, v = ''], [m, w = '']) => n === m && complex(v, w))
}

/**
 * How many brackets holding a letter a product has, a power counted as its index: 2 for (x-1)^2,
 * none for a number or a power of a letter in front.
 * @param {import('../../../kernel/answer-syntax.logic.js').Node} n
 * @returns {number}
 */
const letterBrackets = n => {
  if (n.t === 'mul' || n.t === 'div') return letterBrackets(n.a) + letterBrackets(n.b)
  if (n.t === 'neg') return letterBrackets(n.a)
  if (n.t === 'pow') {
    const index = strip(n.b)
    return index.t === 'num' ? Number(index.n) * letterBrackets(n.a) : 0
  }
  if (n.t !== 'grp') return 0
  const sum = strip(n)
  if (sum.t !== 'add' && sum.t !== 'sub') return letterBrackets(sum)
  const v = value(sum)
  return v.ok && (terms(v.value) ?? []).some(t => Object.keys(letters(t)).length > 0) ? 1 : 0
}

/**
 * (x^2+6)*(x-4): the kernel's product of brackets, with no fewer brackets holding a letter than
 * the stored answer. The stored answer is factored to the end, so a typed product equal to it with
 * fewer has a bracket that still factors, whatever its degree.
 * @type {import('../../../kernel/answer-forms.logic.js').Match}
 */
const completeBrackets = (t, s) => {
  const [a, b] = [parse(t), parse(s)]
  return MATCHES.primeSumBrackets(t, s) && a.ok && b.ok && letterBrackets(a.value) >= letterBrackets(b.value)
}

/** Line 3: …: the line's number and something written after it. */
const ERROR_LINE = /^line(\d+):(.+)$/i
/**
 * The number of the wrong line a Find the error answer names, or null.
 * @param {string} answer
 */
export const wrongLine = answer => {
  const n = ERROR_LINE.exec(tidy(answer))?.[1]
  return n === undefined ? null : Number(n)
}
/** The line written right, as a Find the error answer stores it after its number. @param {string} answer */
const rightLine = answer => answer.slice(answer.indexOf(':') + 1).trim()

/** An expression with an absolute value: typed abs( ) or | |. */
const ABS_FORM = 'Answer as an expression with an absolute value, or equivalent, as in 2*abs(x-1)+3.'

/**
 * A typed expression with each |…| written abs(…): a bar opens where a value cannot end.
 * @param {string} s
 */
const absText = s => {
  let out = ''
  /** @type {number} */
  let open = 0
  for (const c of tidy(s).split('')) {
    if (c !== '|') out += c
    else if (open > 0 && /[\w.)]$/.test(out)) {
      out += ')'
      open--
    } else {
      out += 'abs('
      open++
    }
  }
  return open ? null : out
}

/**
 * The number a tree is worth with each letter given, NaN where it has none.
 * @param {import('../../../kernel/answer-syntax.logic.js').Node} n
 * @param {Record<string, number>} at
 * @returns {number}
 */
const numberAt = (n, at) => {
  switch (n.t) {
    case 'num': return Number(n.n) / Number(n.d)
    case 'var': return n.name === 'pi' ? Math.PI : (at[n.name] ?? NaN)
    case 'neg': return -numberAt(n.a, at)
    case 'grp': return numberAt(n.a, at)
    case 'sqrt': return Math.sqrt(numberAt(n.a, at))
    case 'add': return numberAt(n.a, at) + numberAt(n.b, at)
    case 'sub': return numberAt(n.a, at) - numberAt(n.b, at)
    case 'mul': return numberAt(n.a, at) * numberAt(n.b, at)
    case 'div': return numberAt(n.a, at) / numberAt(n.b, at)
    case 'pow': return numberAt(n.a, at) ** numberAt(n.b, at)
    default: return unreachable(n)
  }
}

/**
 * An expression with abs( ) as trees: each abs( ) innermost first is a letter not otherwise used,
 * standing for the absolute value of its own tree. Null where it does not read.
 * @param {string} text
 * @param {string[]} free letters free for the abs( )
 * @returns {{ main: import('../../../kernel/answer-syntax.logic.js').Node, inner: [string, import('../../../kernel/answer-syntax.logic.js').Node][] } | null}
 */
function absTrees(text, free) {
  /** @type {[string, import('../../../kernel/answer-syntax.logic.js').Node][]} */
  const inner = []
  let s = text
  for (let i; (i = s.lastIndexOf('abs(')) >= 0; ) {
    let end = i + 4
    for (let depth = 1; depth > 0 && end < s.length; end++) depth += s[end] === '(' ? 1 : s[end] === ')' ? -1 : 0
    const name = free.shift()
    const tree = parse(s.slice(i + 4, end - 1))
    if (!name || !tree.ok) return null
    inner.push([name, tree.value])
    s = `${s.slice(0, i)}(${name})${s.slice(end)}`
  }
  const main = parse(s)
  return main.ok ? { main: main.value, inner } : null
}

/**
 * Two expressions with absolute values in one letter, equal at points on both sides of every
 * breakpoint and inside every piece between them; a piece's rule up to degree 3 is then the same.
 * ponytail: breakpoints searched on [-60, 60]; one beyond that is missed.
 * @type {import('../../../kernel/answer-forms.logic.js').Match}
 */
const absolute = (t, s) => {
  const a = absText(t)
  const b = absText(s)
  if (a === null || b === null) return false
  const names = new Set(`${a}${b}`.replace(/abs|sqrt|pi/g, '').match(/[a-z]/g) ?? [])
  if (names.size > 1) return false
  const x = [...names][0] ?? 'x'
  const free = 'abcdefghjklmnopqrstuvwyz'.split('').filter(c => !names.has(c))
  const both = [absTrees(a, free), absTrees(b, free)]
  /** @param {number} v */
  const at = v => {
    /** @type {Record<string, number>} */
    const env = { [x]: v }
    for (const tr of both) for (const [k, n] of tr?.inner ?? []) env[k] = Math.abs(numberAt(n, env))
    return env
  }
  const [ta, tb] = both
  if (!ta || !tb) return false
  /** @type {number[]} */
  const cuts = []
  for (const [, n] of [...ta.inner, ...tb.inner])
    for (let v = -60; v < 60; v += 0.25) {
      let [lo, hi] = [v, v + 0.25]
      const f = (/** @type {number} */ u) => numberAt(n, at(u))
      if (f(lo) === 0) cuts.push(lo)
      else if (f(lo) * f(hi) < 0) {
        for (let i = 0; i < 60; i++) {
          const mid = (lo + hi) / 2
          if (f(lo) * f(mid) <= 0) hi = mid
          else lo = mid
        }
        cuts.push((lo + hi) / 2)
      }
    }
  const ends = [-1e3, ...cuts.sort((p, q) => p - q), 1e3]
  /** @type {number[]} */
  const points = []
  for (let i = 1; i < ends.length; i++) {
    const [lo = 0, hi = 0] = [ends[i - 1], ends[i]]
    for (const r of [1e-4, 0.23, 0.51, 0.77, 1 - 1e-4]) points.push(lo + (hi - lo) * r)
  }
  return points.every(v => {
    const p = numberAt(ta.main, at(v))
    const q = numberAt(tb.main, at(v))
    return Number.isFinite(p) && Number.isFinite(q) && Math.abs(p - q) <= 1e-9 * Math.max(1, Math.abs(p), Math.abs(q))
  })
}

/**
 * Every form a problem may state, worded once, with its match; a form the learner marks has a
 * match only where part of it is exact. "or equivalent" accepts every written form of the value.
 * @type {Record<string, import('../../../kernel/answer-forms.logic.js').Match | null>}
 */
export const FORMS = {
  'Answer as an integer.': MATCHES.integer,
  'Answer as a fraction in lowest terms.': MATCHES.lowestFraction,
  'Answer as a number, or equivalent.': MATCHES.number,
  'Answer as an expression, or equivalent.': MATCHES.expression,
  [ABS_FORM]: absolute,
  'Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.': MATCHES.collected,
  'Answer as a product of brackets, as in (x+2)*(x-3).': MATCHES.frontBrackets,
  'Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).': MATCHES.frontWholeBrackets,
  'Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).':
    completeBrackets,
  'Answer with the highest common factor taken out, as in 3*x*(x-2).': MATCHES.factorTakenOut,
  'Answer with a factor with a minus sign taken out, as in -3*x*(x+2).': MATCHES.negativeFactorTakenOut,
  'Answer as a single fraction in lowest terms, as in (x+1)/(x-2).': MATCHES.lowestAlgebraicFraction,
  'Answer with no negative indices and each base once, as in 2*x^3/y^2.': MATCHES.positiveIndices,
  'Answer in simplest surd form, as in 3+2*sqrt(5).': MATCHES.surdForm,
  'Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.': MATCHES.rationalSurdForm,
  'Answer in simplest radical form, as in 6*2^(1/3).': MATCHES.simplestRoots,
  'Answer in simplest radical form, as in 3*x^2*sqrt(2*x).': MATCHES.simplestRoots,
  'Answer in completed-square form, as in 2*(x-3)^2+5.': MATCHES.completedSquare,
  'Answer as the unknown = a number, as in x = 6/7.': MATCHES.unknownIsNumber,
  'Answer as the subject = an expression, as in y = (3-2*x)/4.': MATCHES.subjectIsExpression,
  'Answer as the solutions, as in x = -1, x = 3.': solutions,
  'Answer as the solutions, as in z = -1, z = 3.': solutions,
  'Answer as each unknown = a number, as in x = 2, y = -1.': MATCHES.unknownValues,
  'Answer as the asymptotes, as in x = -2, x = 5, y = 0.': MATCHES.unknownValues,
  'Answer as an ordered pair, as in (2, -1).': pair,
  'Answer as the set of values, as in {-1, 3}.': set,
  'Answer as One, None or Infinitely many.': MATCHES.solutionCount,
  'Answer as Yes or No.': MATCHES.words,
  'Answer as Even, Odd or Neither.': MATCHES.words,
  'Answer as the line $y = mx + c$, as in y = 2*x-3.': slopeLine,
  'Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.':
    standardLine,
  'Answer as an inequality, as in -2 <= x < 5.': sameRuns('or', inequalityRun),
  [SET_INEQUALITY]: setInequality,
  'Answer as an interval, as in [-2, 5).': sameRuns('U', intervalRun),
  'Answer as a complex number $a + bi$, as in 3-2*i.': complex,
  [TRANSLATE_FORM]: MATCHES.equation,
  [TRANSLATE_INEQUALITY_FORM]: (t, s) => t.replace(/\s+/g, '') === s.replace(/\s+/g, ''),
  [ERROR_FORM]: (t, s) => wrongLine(t) !== null && wrongLine(t) === wrongLine(s),
  [SKETCH_FORM]: null,
  [LINE_FORM]: null,
  [PROOF_FORM]: null
}

/** The forms the learner marks against the stored answer: no typed answer is held to them exactly. */
export const SELF_MARKED = [PROOF_FORM, SKETCH_FORM, LINE_FORM, ERROR_FORM, TRANSLATE_FORM, TRANSLATE_INEQUALITY_FORM]
/** The forms whose answers are words or drawings, with nothing to set as mathematics. */
const WORDS = ['Answer as Yes or No.', 'Answer as Even, Odd or Neither.', 'Answer as One, None or Infinitely many.', PROOF_FORM, SKETCH_FORM, LINE_FORM]
/**
 * True for a form whose answer is shown back as mathematics.
 * @type {(form: string) => boolean}
 */
export const shown = form => !WORDS.includes(form)

/**
 * A piece of a typed answer as TeX, or null where it does not read.
 * @param {string} s
 */
const tex = s => {
  const got = read(s)
  return got.ok ? got.value : null
}
/** @type {(end: string | null, inf: string) => string | null} */
const endTex = (end, inf) => (end === null ? inf : tex(end))
/** @type {Readonly<Record<string, string>>} */
const RELATION = { '<': '<', '<=': '\\le ', '>': '>', '>=': '\\ge ' }

/**
 * Pieces set as TeX and joined, or null where one does not read.
 * @param {readonly (string | null)[]} pieces
 * @param {string} join
 */
const joined = (pieces, join) => (pieces.every(p => p !== null) ? pieces.join(join) : null)

/**
 * A typed answer, or a form line's example, in its form set as TeX; null where the form has no
 * mathematics or the answer does not read, so the screen shows it as typed.
 * @param {string} typed
 * @param {string} form
 * @returns {string | null}
 */
export function answerTex(typed, form) {
  if (!shown(form)) return null
  const t = tidy(typed)
  if (form === ERROR_FORM) {
    const n = wrongLine(t)
    const line = tex(rightLine(t))
    return n === null || line === null ? null : `\\text{Line ${n}: }${line}`
  }
  if (/^Answer as an ordered pair/.test(form)) {
    const both = joined((inside(t, '(', ')') ?? '').split(',').map(tex), ',\\ ')
    return both === null ? null : `\\left(${both}\\right)`
  }
  if (/^Answer as the set of values/.test(form)) {
    const items = inside(t, '{', '}')
    const each = items === null ? null : joined(items === '' ? [] : items.split(',').map(tex), ',\\ ')
    return each === null ? null : `\\{${each}\\}`
  }
  if (/^Answer as an inequality/.test(form)) {
    if (/^(all|none)$/i.test(t)) return `\\text{${t[0]?.toUpperCase()}${t.slice(1).toLowerCase()}}`
    const bits = t.replace(/≤/g, '<=').replace(/≥/g, '>=').split(/(or|<=|>=|<|>)/)
    return joined(bits.map((b, i) => (i % 2 ? (b === 'or' ? '\\text{ or }' : (RELATION[b] ?? null)) : tex(b))), '')
  }
  if (/^Answer as an interval/.test(form)) {
    const list = t.split('U').map(intervalRun)
    const each = list.map(r =>
      r === null ? null : joined([r.loIn ? '[' : '(', endTex(r.lo, '-\\infty'), ',\\ ', endTex(r.hi, '\\infty'), r.hiIn ? ']' : ')'], '')
    )
    return joined(each, '\\cup ')
  }
  const got = reading(typed, typed)
  return got.ok ? got.value : null
}

/** @type {(typed: string, stored: string, form: string) => boolean} */
export const matchAnswer = (typed, stored, form) => matched(FORMS[form], typed, stored)
