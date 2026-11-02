// Hides: how a game-record file (SGF) is read for the Go unit's importers: the stones set up, the
// side to move, the first moves a file marks correct, and every point its lines play. A file the
// reader cannot read is refused with the reason (a value with no closing bracket, an empty
// sequence "()"), never read for ever or half read. A classical collection is read for its stones
// and side alone: no comment and no line.
import { coord } from '../../src/units/go/core/rules.logic.js'
import { fail, ok } from '../../src/kernel/result.logic.js'

/**
 * @typedef {object} SgfNode One node of a game-record file: its properties, and its children.
 * @property {Record<string, string[]>} props
 * @property {SgfNode[]} children
 * @typedef {'a value has no closing bracket' | 'the file holds an empty sequence "()"' | 'the file holds no node' | 'a branch opens before the first node of its sequence'} SgfError Why a file cannot be read
 * @typedef {import('../../src/kernel/result.logic.js').Result<SgfNode, SgfError>} Parsed
 */

/**
 * A point of a game-record file, two letters from the top left, as the paper writes it.
 * @param {string} two
 */
export const pointOf = two => coord(two.charCodeAt(0) - 97, 19 - (two.charCodeAt(1) - 97) - 1)

/** The reader's place in the text, moved on as it reads. */
class Reader {
  i = 0
  /** @param {string} text */
  constructor(text) {
    this.text = text
  }

  /** The character at the reader's place, or '' past the end. */
  get at() {
    return this.text.charAt(this.i)
  }

  /**
   * The values that follow a property's name: `[...]` after `[...]`. Null when one has no `]`.
   * @returns {string[] | null}
   */
  values() {
    /** @type {string[]} */
    const out = []
    while (this.at === '[') {
      const close = this.closing(this.i + 1)
      if (close < 0) return null
      out.push(this.text.slice(this.i + 1, close).replace(/\\(.)/gs, '$1'))
      this.i = close + 1
      while (/\s/.test(this.at)) this.i++
    }
    return out
  }

  /**
   * Where the value that opens before `from` closes: the next `]` not escaped; -1 when none is.
   * @param {number} from
   */
  closing(from) {
    for (let k = from; k < this.text.length; k++) {
      if (this.text[k] === '\\') k++
      else if (this.text[k] === ']') return k
    }
    return -1
  }

  /**
   * One node's properties, up to the next `;`, `(` or `)`.
   * @returns {Record<string, string[]> | null}
   */
  node() {
    /** @type {Record<string, string[]>} */
    const props = {}
    while (this.i < this.text.length && !';()'.includes(this.at)) {
      let key = ''
      while (/[A-Za-z]/.test(this.at)) key += this.text.charAt(this.i++)
      const values = this.values()
      if (!values) return null
      if (!key) this.i++
      else props[key] = [...(props[key] ?? []), ...values]
    }
    return props
  }

  /**
   * A sequence `(;a;b(…)(…))` as a chain: each node the one child of the node before it, and
   * each branch a child of the last.
   * @returns {Parsed}
   */
  tree() {
    this.i++ // (
    /** @type {SgfNode | null} */
    let first = null
    /** @type {SgfNode | null} */
    let last = null
    while (this.i < this.text.length && this.at !== ')') {
      if (this.at === ';') {
        this.i++
        const props = this.node()
        if (!props) return fail('a value has no closing bracket')
        /** @type {SgfNode} */
        const n = { props, children: [] }
        if (last) last.children.push(n)
        else first = n
        last = n
      } else if (this.at === '(') {
        if (!last) return fail('a branch opens before the first node of its sequence')
        const branch = this.tree()
        if (!branch.ok) return branch
        last.children.push(branch.value)
      } else this.i++
    }
    this.i++ // )
    return first ? ok(first) : fail('the file holds an empty sequence "()"')
  }
}

/**
 * A game-record file as a tree: each node its properties and its children.
 * @param {string} text
 * @returns {Parsed}
 */
export function parse(text) {
  const reader = new Reader(text)
  reader.i = text.indexOf('(')
  return reader.i < 0 ? fail('the file holds no node') : reader.tree()
}

/**
 * What a file gives: the stones, the side to move, the first moves it marks correct, every point
 * its lines play.
 * @param {string} text
 * @returns {import('../../src/kernel/result.logic.js').Result<{ black: string[], white: string[], played: string[], correct: string[], side: 'B' | 'W' | null }, SgfError>}
 */
export function read(text) {
  const root = parse(text)
  if (!root.ok) return root
  /** @type {Set<string>} */
  const played = new Set()
  /** @type {Set<string>} */
  const correct = new Set()
  /** @type {'B' | 'W' | null} */
  let side = null
  /**
   * @param {SgfNode} n
   * @param {string | null} first
   * @returns {void}
   */
  const walk = (n, first) => {
    /** @type {['B' | 'W', string | undefined] | null} */
    const move = n.props.B ? ['B', n.props.B[0]] : n.props.W ? ['W', n.props.W[0]] : null
    let mine = first
    if (move && move[1]) {
      played.add(pointOf(move[1]))
      if (!first) {
        mine = pointOf(move[1])
        side ??= move[0]
      }
    }
    // The right line is marked by the word "Correct" in its comment.
    const comment = (n.props.C ?? []).join(' ')
    if (mine && /correct/i.test(comment) && !/incorrect|not correct/i.test(comment))
      correct.add(mine)
    for (const c of n.children) walk(c, mine)
  }
  for (const c of root.value.children) walk(c, null)
  return ok({
    black: (root.value.props.AB ?? []).map(pointOf),
    white: (root.value.props.AW ?? []).map(pointOf),
    played: [...played],
    correct: [...correct],
    side
  })
}
