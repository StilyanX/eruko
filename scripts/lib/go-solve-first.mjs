// The first exact search the Go unit had, kept as the checker of the one that replaced it
// (src/units/go/core/solve.logic.js): tests/go-solve-check.test.mjs asks both the same questions. It copies
// the board at every move and keys a position by a string, so it is slow and sure. Its input has
// the shape of `solve` in solve.js, and it gives back the results and the ko flag, not the lines.
import { assert } from '../../src/kernel/invariant.logic.js'
import { BLACK, groupAt, neighbours, other, place } from '../../src/units/go/core/rules.logic.js'
import { unconditionallyAlive } from '../../src/units/go/core/solve.logic.js'

/**
 * @typedef {object} State A position of the search: the stones, the side to move, the passes in a row, and each side's ko threats left.
 * @property {Uint8Array} cells
 * @property {number} side
 * @property {number} passes
 * @property {number} a
 * @property {number} d
 */
/**
 * @typedef {object} Child A legal move (point null for a pass) with the position it leads to.
 * @property {number | null} point
 * @property {number[]} captured
 * @property {State} state
 */

/**
 * The four results, from the defender's side: dies < ko < seki < lives.
 * @type {[string, string, string, string]}
 */
const RESULTS = ['dies', 'ko', 'seki', 'lives']

const DIES = 0
const SEKI = 1
const LIVES = 2

/** One search: the board as drawn, the points a move may be played on, and what is kept. */
class First {
  // Positions answered, by key; the positions on the path being searched, at their depth.
  /** @type {Map<string, number>} */
  memo = new Map()
  /** @type {Map<string, number>} */
  onPath = new Map()
  visited = 0
  // The budget ran out: every call returns at once from here on.
  over = false
  // Whether a recapture was ever refused: only then can a ko decide the result.
  koSeen = false

  /**
   * @param {{ w: number, h: number, cells: Uint8Array }} board
   * @param {number} toMove
   * @param {number} target
   * @param {number} defender
   * @param {{ budget?: number, region?: number[] }} options
   */
  constructor(board, toMove, target, defender, options) {
    this.board = board
    this.toMove = toMove
    this.target = target
    this.defender = defender
    this.attacker = other(defender)
    this.budget = options.budget ?? 400000
    this.closed = options.region !== undefined
    // The points a move may be played on: the problem's region, or every point of the diagram.
    // A point that holds a stone at the start is open to a move once that stone is captured.
    const { region } = options
    this.playable = region
      ? [...board.cells.keys()].filter(i => board.cells[i] !== 0 || region.includes(i))
      : [...board.cells.keys()]
    this.inRegion = new Uint8Array(board.cells.length)
    for (const i of this.playable) this.inRegion[i] = 1
  }

  /** @param {State} state */
  keyOf({ cells, side, passes, a, d }) {
    return `${side}${passes}.${a}.${d}.${String.fromCharCode(...cells)}`
  }

  /**
   * A group with a liberty outside the region can never be captured: no move is played there.
   * @param {Uint8Array} cells
   * @param {number} i
   */
  safe(cells, i) {
    const { w, h } = this.board
    return groupAt({ w, h, cells }, i).liberties.some(j => !this.inRegion[j])
  }

  /**
   * After two passes the group stands. It lives when no move can ever capture it, or when no
   * stone of the other side that could itself be captured is left on the board; with such stones
   * left and neither side able to capture, it is seki.
   * @param {Uint8Array} cells
   */
  settled(cells) {
    const { w, h } = this.board
    if (unconditionallyAlive({ w, h, cells }, this.target)) return true
    if (!this.closed) return false
    for (let i = 0; i < cells.length; i++)
      if (cells[i] === this.attacker && !this.safe(cells, i)) return false
    return true
  }

  /**
   * The children of a position: each legal move (and a pass last) with the position it leads to.
   * Moves that capture, then moves beside the group asked about, are tried first: they settle a
   * position soonest, and a sooner cut-off saves the rest of the tree.
   * @param {State} st
   * @returns {Child[]}
   */
  expand(st) {
    const { w, h } = this.board
    const b = { w, h, cells: st.cells }
    /** @type {(Child & { point: number })[]} */
    const out = []
    for (const i of this.playable.filter(p => b.cells[p] === 0)) {
      const r = place(b, st.side, i)
      if (!r) continue
      out.push({
        point: i,
        captured: r.captured,
        state: { cells: r.board.cells, side: other(st.side), passes: 0, a: st.a, d: st.d }
      })
    }
    /** @param {Child & { point: number }} c */
    const rank = c =>
      c.captured.length * 4 +
      (neighbours(w, h, c.point).some(j => st.cells[j] === this.defender) ? 2 : 0)
    out.sort((x, y) => rank(y) - rank(x))
    return [
      ...out,
      { point: null, captured: [], state: { ...st, side: other(st.side), passes: st.passes + 1 } }
    ]
  }

  /**
   * The value of a position for the defender, DIES..LIVES, and the shallowest depth of a path
   * position it repeated. A position that already stands on the path may not be made again (the
   * whole-board repeat rule); a side with a ko threat elsewhere spends it, which changes the
   * counts and so the position, to make the move anyway. A value that rested on a refused repeat
   * is kept only at the position the repeat pointed back to, since another path would not have
   * refused it.
   * @param {State} st
   * @param {number} depth
   * @returns {[number, number]}
   */
  search(st, depth) {
    if (++this.visited > this.budget) this.over = true
    if (this.over) return [DIES, Infinity]
    const { cells, side, passes } = st
    if (cells[this.target] !== this.defender) return [DIES, Infinity]
    if (this.closed && this.safe(cells, this.target)) return [LIVES, Infinity]
    if (passes >= 2) return [this.settled(cells) ? LIVES : SEKI, Infinity]
    const k = this.keyOf(st)
    const hit = this.memo.get(k)
    if (hit !== undefined) return [hit, Infinity]
    this.onPath.set(k, depth)
    const maximise = side === this.defender
    let best = maximise ? -1 : 9
    let low = Infinity
    for (const c of this.expand(st)) {
      if (best === (maximise ? LIVES : DIES)) break
      let child = c.state
      const again = this.onPath.get(this.keyOf(child))
      if (again !== undefined && c.point !== null) {
        this.koSeen = true
        low = Math.min(low, again)
        if ((side === this.attacker ? child.a : child.d) < 1) continue
        child = side === this.attacker ? { ...child, a: child.a - 1 } : { ...child, d: child.d - 1 }
      }
      const [v, l] = this.search(child, depth + 1)
      if (this.over) return [DIES, Infinity]
      low = Math.min(low, l)
      if (maximise ? v > best : v < best) best = v
    }
    this.onPath.delete(k)
    if (low >= depth) this.memo.set(k, best)
    return [best, low]
  }

  /**
   * The value of the problem for counts a, d after the first move i; null when it is not legal.
   * @param {number} i
   * @param {number} a
   * @param {number} d
   */
  value(i, a, d) {
    const c = this.expand({ cells: this.board.cells, side: this.toMove, passes: 0, a, d }).find(
      x => x.point === i
    )
    return c ? this.search(c.state, 1)[0] : null
  }

  /**
   * Each legal first move's result, at counts a, d; null when the budget runs out. A result that
   * one more threat on either side would change rests on a ko.
   * @param {number} a
   * @param {number} d
   * @returns {Record<number, string> | null}
   */
  results(a, d) {
    /** @type {Record<number, string>} */
    const results = {}
    for (const i of this.playable) {
      if (this.board.cells[i] !== 0) continue
      const v = this.value(i, a, d)
      if (this.over) return null
      if (v === null) continue
      let label = RESULTS[v === DIES ? 0 : v === SEKI ? 2 : 3]
      if (this.koSeen) {
        const more = [this.value(i, a + 1, d), this.value(i, a, d + 1), this.value(i, a + 1, d + 1)]
        if (this.over) return null
        if (more.some(o => o !== v)) label = 'ko'
      }
      results[i] = label
    }
    return results
  }
}

/**
 * Solve a problem.
 * @param {{ w: number, h: number, cells: Uint8Array }} board the position as drawn
 * @param {number} toMove BLACK or WHITE, the side that plays first
 * @param {number} target a point of the group asked about
 * @param {{ black?: number, white?: number }} threats ko threats elsewhere for each side
 * @param {{ budget?: number, region?: number[] }} [options] the most positions the search may
 *   visit, and the points a move may be played on (every point of the diagram by default)
 * @returns {null | { defender: number, results: Record<number, string>, best: number[], result: string, ko: boolean }}
 */
export function solve(board, toMove, target, threats = {}, options = {}) {
  const defender = board.cells[target]
  if (!defender) return null
  const search = new First(board, toMove, target, defender, options)
  const a = threats[search.attacker === BLACK ? 'black' : 'white'] ?? 0
  const d = threats[defender === BLACK ? 'black' : 'white'] ?? 0
  const results = search.results(a, d)
  if (!results) return null
  /** @param {string} label */
  const score = label => (toMove === defender ? RESULTS.indexOf(label) : 3 - RESULTS.indexOf(label))
  const top = Math.max(-1, ...Object.values(results).map(score))
  if (top < 0) return null
  const best = Object.entries(results)
    .filter(([, label]) => score(label) === top)
    .map(([i]) => Number(i))
  const first = best[0]
  const result = first === undefined ? undefined : results[first]
  assert(result !== undefined, 'a point scores top since a result did')
  return { defender, results, best, result, ko: search.koSeen }
}
