// Hides: the input syntax every maths unit with typed answers shares: + - * / ^ ( ), sqrt( ), pi,
// numbers with a digit on each side of the point, and single letters, every multiplication
// written with *. `parse` turns one expression into a tree, or says why it does not read; `read`
// takes a whole answer (an equation, or a list) and gives the answer set as mathematics, exactly
// as typed. Pure functions, tested in answer-syntax.test.js.
import { unreachable } from './invariant.logic.js'
import { fail, ok } from './result.logic.js'

/**
 * A reason a typed answer is not read that names nothing more.
 * @typedef {'star' | 'point' | 'shape' | 'open' | 'close' | 'after' | 'edge' | 'empty' | 'too-long'
 *   | 'small-letters' | 'times' | 'divide' | 'root' | 'pi' | 'power' | 'round' | 'plus'
 *   | 'double-star' | 'division-by-zero' | 'index' | 'sum-index' | 'zero-power' | 'negative-power'
 *   | 'equation' | 'no-equation' | 'comma'} Why
 */

/**
 * What each reason a typed answer is not read asks the learner to change.
 * @type {Readonly<Record<Why, string>>}
 */
const WORDS = {
  star: 'Use * between factors.',
  point: 'Write a digit on each side of the decimal point.',
  shape: 'Check the brackets and the signs.',
  open: 'A bracket ( has no ) after it.',
  close: 'A bracket ) has no ( before it.',
  after: 'A sign has nothing after it.',
  edge: 'Write something on both sides of each =, comma and semicolon.',
  empty: 'There is nothing inside the brackets.',
  'too-long': 'This answer is too long to read.',
  'small-letters': 'Write sqrt and pi in small letters.',
  times: 'Use * for times.',
  divide: 'Use / for divide.',
  root: 'Use sqrt( ) for a square root.',
  pi: 'Write pi in small letters.',
  power: 'Use ^ for a power, as in x^2.',
  round: 'Use round brackets ( ) only.',
  plus: 'Leave out a + sign that has nothing before it.',
  'double-star': 'Use ^ for a power, not **.',
  'division-by-zero': 'A division by zero has no value.',
  index: 'Write an index as a number, or as numbers and letters added, such as 2*k + 1.',
  'sum-index': 'Give a sum in brackets a number as its index, not a letter.',
  'zero-power': 'Zero has a power only for an index above zero.',
  'negative-power': 'A negative number has a power only for a whole index.',
  equation: 'Type the whole equation, with its = sign.',
  'no-equation': 'Type the answer with no = sign.',
  comma: 'Use a point in a decimal. This answer has no comma.'
}
/**
 * Why a typed answer is not read: a fixed reason, a character the syntax does not use, or a sign
 * with nothing before it.
 * @typedef {Readonly<{ why: Why } | { why: 'character', c: string } | { why: 'before', sign: string }>} ReadError
 */

/**
 * What a typed answer that is not read should change, in words.
 * @param {ReadError} e
 * @returns {string}
 */
export const readMessage = e =>
  e.why === 'character'
    ? `An answer does not use the character ${e.c}.`
    : e.why === 'before'
      ? `Write something before the ${e.sign} sign.`
      : WORDS[e.why]

/**
 * A failure for a reason that names nothing more.
 * @param {Why} why
 * @returns {{ readonly ok: false, readonly error: ReadError }}
 */
export const notRead = why => fail({ why })

/** The longest answer read: no answer of the unit comes near it, and nothing longer can hang the page. */
const LONGEST_CHARS = 200

/** The typed text with its spaces gone and the typographic minus as a hyphen. @param {string} s @returns {string} */
export const tidy = s => s.replace(/[−–]/g, '-').replace(/[\s​-‍﻿]+/g, '')

/**
 * @typedef {'+' | '-' | '*' | '/' | '^' | '(' | ')'} Sign
 * @typedef {{ t: 'num', text: string } | { t: 'var', name: string } | { t: 'sqrt' } | { [S in Sign]: { t: S } }[Sign]} Token
 * A tree node: a number n/d (written as `text`), a letter, a one-sided node, or a two-sided one.
 * @typedef {Readonly<{ t: 'num', text: string, n: bigint, d: bigint }>} Num
 * @typedef {Readonly<{ t: 'neg' | 'sqrt' | 'grp', a: Node }>} Unary
 * @typedef {Num | Readonly<{ t: 'var', name: string }> | Unary
 *   | Readonly<{ t: 'add' | 'sub' | 'mul' | 'div' | 'pow', a: Node, b: Node }>} Node
 */

/** @param {string} c @returns {c is Sign} */
const isSign = c => '+-*/^()'.includes(c)

/**
 * Why a character that starts no token is not read.
 * @param {string} c
 * @returns {ReadError}
 */
const strange = c =>
  '×·'.includes(c)
    ? { why: 'times' }
    : c === '÷'
      ? { why: 'divide' }
      : c === '√'
        ? { why: 'root' }
        : c === 'π'
          ? { why: 'pi' }
          : '²³'.includes(c)
            ? { why: 'power' }
            : '[]{}'.includes(c)
              ? { why: 'round' }
              : { why: 'character', c }

/**
 * A word of letters as a token: sqrt, pi or one letter; any other word is letters with no *.
 * @param {string} w
 * @returns {import('./result.logic.js').Result<Token, ReadError>}
 */
function word(w) {
  if (w === 'sqrt') return ok({ t: 'sqrt' })
  if (w === 'pi' || w.length === 1) return ok({ t: 'var', name: w })
  return notRead(/^(sqrt|pi)$/i.test(w) ? 'small-letters' : 'star')
}

/**
 * @param {string} text
 * @returns {import('./result.logic.js').Result<Token[], ReadError>}
 */
function tokens(text) {
  /** @type {Token[]} */
  const out = []
  for (let i = 0; i < text.length;) {
    const rest = text.slice(i)
    const c = text.charAt(i)
    const digits = /^\d+(\.\d+)?/.exec(rest)?.[0]
    const letters = /^[A-Za-z]+/.exec(rest)?.[0]
    if (digits !== undefined) {
      i += digits.length
      if (text[i] === '.') return notRead('point')
      out.push({ t: 'num', text: digits })
    } else if (c === '.') return notRead('point')
    else if (letters !== undefined) {
      const tok = word(letters)
      if (!tok.ok) return tok
      out.push(tok.value)
      i += letters.length
    } else if (isSign(c)) {
      out.push({ t: c })
      i++
    } else return fail(strange(c))
  }
  return ok(out)
}

/**
 * Brackets that do not pair up, named before anything else is checked.
 * @param {readonly Token[]} toks
 * @returns {ReadError | null}
 */
function unpaired(toks) {
  let depth = 0
  for (const k of toks) {
    if (k.t === '(') depth++
    if (k.t === ')' && --depth < 0) return { why: 'close' }
  }
  return depth > 0 ? { why: 'open' } : null
}

/**
 * One expression read by recursive descent over its tokens. The first reason a part does not
 * read is kept (`error`), and every part after it gives up, returning null.
 */
class Reader {
  /** @type {ReadError | null} */
  error = null
  at = 0

  /** @param {readonly Token[]} toks */
  constructor(toks) {
    this.toks = toks
  }

  /** @param {ReadError} e @returns {null} */
  stop(e) {
    this.error ??= e
    return null
  }

  peek() {
    return this.toks[this.at]?.t
  }

  /** @param {Token['t']} t */
  take(t) {
    if (this.peek() !== t) return this.stop({ why: 'shape' }) !== null
    this.at++
    return true
  }

  /**
   * A token that cannot start a value, as the reason it does not read; null for one that can.
   * @param {Token | undefined} tok
   * @returns {ReadError | null}
   */
  misplaced(tok) {
    if (!tok) return { why: 'after' }
    if (tok.t === '+') return { why: 'plus' }
    if (tok.t === ')') return { why: this.toks[this.at - 1]?.t === '(' ? 'empty' : 'after' }
    if (tok.t === '*' && this.toks[this.at - 1]?.t === '*') return { why: 'double-star' }
    if (tok.t === '*' || tok.t === '/' || tok.t === '^') return { why: 'before', sign: tok.t }
    return null
  }

  /** @returns {Node | null} */
  atom() {
    const tok = this.toks[this.at]
    const bad = this.misplaced(tok)
    if (bad || !tok) return this.stop(bad ?? { why: 'after' })
    this.at++
    switch (tok.t) {
      case 'num': {
        const [whole = '', frac = ''] = tok.text.split('.')
        return { t: 'num', text: tok.text, n: BigInt(whole + frac), d: 10n ** BigInt(frac.length) }
      }
      case 'var':
        return { t: 'var', name: tok.name }
      case 'sqrt': {
        if (!this.take('(')) return null
        const a = this.sum()
        return a && this.take(')') ? { t: 'sqrt', a } : null
      }
      case '(': {
        const a = this.sum()
        return a && this.take(')') ? { t: 'grp', a } : null
      }
      case '-':
      case '+':
      case ')':
      case '*':
      case '/':
      case '^':
        return this.stop({ why: 'shape' })
      default:
        return unreachable(tok)
    }
  }

  /** @returns {Node | null} */
  power() {
    const a = this.atom()
    if (!a || this.peek() !== '^') return a
    this.at++
    const b = this.signed()
    return b && { t: 'pow', a, b }
  }

  /** @returns {Node | null} */
  signed() {
    if (this.peek() !== '-') return this.power()
    this.at++
    const a = this.signed()
    return a && { t: 'neg', a }
  }

  /** @returns {Node | null} */
  product() {
    let a = this.signed()
    for (let op = this.peek(); a && (op === '*' || op === '/'); op = this.peek()) {
      this.at++
      const b = this.signed()
      a = b && { t: op === '*' ? 'mul' : 'div', a, b }
    }
    return a
  }

  /** @returns {Node | null} */
  sum() {
    let a = this.product()
    for (let op = this.peek(); a && (op === '+' || op === '-'); op = this.peek()) {
      this.at++
      const b = this.product()
      a = b && { t: op === '+' ? 'add' : 'sub', a, b }
    }
    return a
  }

  /** @returns {import('./result.logic.js').Result<Node, ReadError>} */
  whole() {
    const tree = this.sum()
    if (tree && this.at < this.toks.length) {
      // Two things side by side with no sign between them: a missing *.
      const t = this.peek()
      this.stop({ why: t === 'num' || t === 'var' || t === 'sqrt' || t === '(' ? 'star' : 'shape' })
    }
    return tree && !this.error ? ok(tree) : fail(this.error ?? { why: 'shape' })
  }
}

/**
 * One expression as a tree. A node is { t: 'num', text, n, d } (the number n/d), { t: 'var', name },
 * { t: 'neg' | 'sqrt' | 'grp', a }, or { t: 'add' | 'sub' | 'mul' | 'div' | 'pow', a, b }.
 * A power binds before a sign in front of it, and before * and /, so x^-1/3 is (x^-1)/3.
 * @param {string} typed
 * @returns {import('./result.logic.js').Result<Node, ReadError>}
 */
export function parse(typed) {
  const text = tidy(typed)
  if (text.length > LONGEST_CHARS) return notRead('too-long')
  const toks = tokens(text)
  if (!toks.ok) return toks
  if (!toks.value.length) return notRead('shape')
  const pairs = unpaired(toks.value)
  return pairs ? fail(pairs) : new Reader(toks.value).whole()
}

/** @type {(n: Node) => Node} */
const bare = n => (n.t === 'grp' ? n.a : n)
/**
 * A tree with the brackets round it taken off.
 * @type {(n: Node) => Node}
 */
export const strip = n => (n.t === 'grp' ? strip(n.a) : n)
/** The leftmost leaf of a tree: a product whose right side starts with a digit needs its sign. */
/** @type {(n: Node) => Node} */
const first = n => ('a' in n && n.t !== 'grp' && n.t !== 'sqrt' && n.t !== 'neg' ? first(n.a) : n)

/**
 * A tree as TeX, as typed: nothing is simplified, reordered or cancelled.
 * @param {Node} n
 * @returns {string}
 */
export function toTex(n) {
  switch (n.t) {
    case 'num':
      return n.text
    case 'var':
      return n.name === 'pi' ? '\\pi ' : n.name
    case 'neg':
      return `-${toTex(n.a)}`
    case 'add':
      return `${toTex(n.a)}+${toTex(n.b)}`
    case 'sub':
      return `${toTex(n.a)}-${toTex(n.b)}`
    case 'mul': {
      const f = first(n.b)
      return `${toTex(n.a)}${f.t === 'num' || n.b.t === 'neg' ? ' \\times ' : ' '}${toTex(n.b)}`
    }
    case 'div':
      return `\\frac{${toTex(bare(n.a))}}{${toTex(bare(n.b))}}`
    case 'pow':
      return `{${toTex(n.a)}}^{${toTex(bare(n.b))}}`
    case 'sqrt':
      return `\\sqrt{${toTex(n.a)}}`
    case 'grp': {
      // Brackets grow only around something tall (a fraction); otherwise they stay plain, with no
      // space inside them.
      const inner = toTex(n.a)
      return inner.includes('\\frac') ? `\\left(${inner}\\right)` : `(${inner})`
    }
    default:
      return unreachable(n)
  }
}

/**
 * Each piece of a whole typed answer, split at ; then , then =, by `join` put back together as
 * the pieces are; the first piece that does not read is the failure. A piece left empty beside a
 * sign is not read.
 * @template T
 * @param {string} typed
 * @param {(tree: Node) => import('./result.logic.js').Result<T, ReadError>} each
 * @returns {import('./result.logic.js').Result<T[][][], ReadError>}
 */
function pieces(typed, each) {
  const text = tidy(typed)
  /** @type {T[][][]} */
  const out = []
  for (const group of text.split(';')) {
    /** @type {T[][]} */
    const items = []
    for (const item of group.split(',')) {
      /** @type {T[]} */
      const sides = []
      for (const side of item.split('=')) {
        if (!side && text) return notRead('edge')
        const t = parse(side)
        if (!t.ok) return t
        const v = each(t.value)
        if (!v.ok) return v
        sides.push(v.value)
      }
      items.push(sides)
    }
    out.push(items)
  }
  return ok(out)
}

/**
 * A whole typed answer as TeX, as typed: pieces split at ; then , then =, each an expression.
 * @param {string} typed
 * @returns {import('./result.logic.js').Result<string, ReadError>}
 */
export function read(typed) {
  const got = pieces(typed, t => ok(toTex(t)))
  if (!got.ok) return got
  const tex = got.value.map(g => g.map(i => i.join(' = ')).join(',\\ ')).join(';\\ ')
  // A minus that opens a later item is the item's sign, not a subtraction: 1, {-}16.
  return ok(tex.replace(/([,;])\\ -/g, '$1\\ {-}'))
}
