// The exact search with nothing kept between positions: every line is played to its end, and a
// situation on the line (the stones, the side to play, each side's ko threats left) may not be
// made again unless the mover spends a ko threat; the situation the mover faced, one threat
// fewer, then counts as met, so each taking back of a ko costs its side a threat. Far too slow
// for a real problem; it is the ground the search is checked against on the smallest ones
// (tests/go-solve-check.test.mjs).
import { assert } from '../../src/kernel/invariant.logic.js'
import { groupAt, other, place } from '../../src/units/go/core/rules.logic.js'
import { unconditionallyAlive } from '../../src/units/go/core/solve.logic.js'

const DIES = 0
const SEKI = 1
const LIVES = 2

/** One plain search: the points open to a move, the line in hand, and what is left of the budget. */
class Plain {
  /** @type {Set<string>} */
  path = new Set()
  visited = 0
  // The budget ran out: every call returns at once from here on.
  over = false

  /**
   * @param {import('../../src/units/go/core/rules.logic.js').Board} drawn
   * @param {number} target
   * @param {number} defender
   * @param {number[] | undefined} region
   * @param {number} budget
   */
  constructor(drawn, target, defender, region, budget) {
    this.w = drawn.w
    this.h = drawn.h
    this.target = target
    this.defender = defender
    this.attacker = other(defender)
    this.budget = budget
    const inside = new Set(region)
    this.playable = [...drawn.cells.keys()].filter(i => drawn.cells[i] !== 0 || inside.has(i))
    this.open = new Set(this.playable)
  }

  /**
   * @param {Uint8Array} cells
   * @param {number} i
   */
  safe(cells, i) {
    return groupAt({ w: this.w, h: this.h, cells }, i).liberties.some(j => !this.open.has(j))
  }

  /**
   * After two passes: lives when no move can ever capture it, or no stone of the other side
   * that could itself be captured is left; seki otherwise.
   * @param {Uint8Array} cells
   */
  lives(cells) {
    return (
      unconditionallyAlive({ w: this.w, h: this.h, cells }, this.target) ||
      cells.every((c, i) => c !== this.attacker || this.safe(cells, i))
    )
  }

  /**
   * @param {Uint8Array} cells
   * @param {number} s
   * @param {number} x
   * @param {number} y
   */
  key(cells, s, x, y) {
    return `${s}.${x}.${y}.${String.fromCharCode(...cells)}`
  }

  /**
   * The value of `s` playing at `i`; null when the move is not legal or repeats a situation no
   * threat is left to pay for.
   * @param {Uint8Array} cells
   * @param {number} s
   * @param {number} i
   * @param {number} x
   * @param {number} y
   * @returns {number | null}
   */
  move(cells, s, i, x, y) {
    const r = place({ w: this.w, h: this.h, cells }, s, i)
    if (!r) return null
    let nx = x
    let ny = y
    /** @type {string | undefined} */
    let threat
    if (this.path.has(this.key(r.board.cells, other(s), x, y))) {
      if ((s === this.attacker ? x : y) < 1) return null
      if (s === this.attacker) nx--
      else ny--
      // the threat and its answer stand on the real board: the situation the mover faced, one threat fewer, is met
      threat = this.key(cells, s, nx, ny)
      if (this.path.has(threat)) threat = undefined
      else this.path.add(threat)
    }
    const v = this.search(r.board.cells, other(s), 0, nx, ny)
    if (threat !== undefined) this.path.delete(threat)
    return v
  }

  /**
   * @param {Uint8Array} cells
   * @param {number} s
   * @param {number} passes
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  search(cells, s, passes, x, y) {
    if (++this.visited > this.budget) this.over = true
    if (this.over) return DIES
    if (cells[this.target] !== this.defender) return DIES
    if (this.safe(cells, this.target)) return LIVES
    if (passes >= 2) return this.lives(cells) ? LIVES : SEKI
    const k = this.key(cells, s, x, y)
    const had = this.path.has(k)
    this.path.add(k)
    const max = s === this.defender
    const settles = max ? LIVES : DIES
    let best = max ? -1 : 9
    for (const i of this.playable) {
      if (cells[i] !== 0) continue
      if (best === settles) break
      const v = this.move(cells, s, i, x, y)
      if (this.over) return DIES
      if (v !== null && (max ? v > best : v < best)) best = v
    }
    if (best !== settles) {
      const v = this.search(cells, other(s), passes + 1, x, y)
      if (max ? v > best : v < best) best = v
    }
    if (!had) this.path.delete(k)
    return best
  }
}

/**
 * The value for the defender, 0 dies, 1 seki, 2 lives, of `side` to move; null past the budget.
 * `defender` names the colour asked about when its group is already off the board, and `drawn`
 * the position as first drawn when `board` is some moves on: a point that held a stone there is
 * open to a move. `before` is the board the last move was played from, which may not be made
 * again.
 * @param {import('../../src/units/go/core/rules.logic.js').Board} board
 * @param {number} side
 * @param {number} target
 * @param {{ a?: number, d?: number, region?: number[] | undefined, budget?: number, defender?: number | undefined, drawn?: import('../../src/units/go/core/rules.logic.js').Board, before?: import('../../src/units/go/core/rules.logic.js').Board | undefined }} options
 * @returns {number | null}
 */
export function plain(
  board,
  side,
  target,
  { a = 0, d = 0, region, budget = 5e6, defender = board.cells[target], drawn = board, before }
) {
  assert(defender !== undefined, 'the target is a point of the board')
  const search = new Plain(drawn, target, defender, region, budget)
  // the position the last move was played from has been met, by the side that played it
  if (before) search.path.add(search.key(before.cells, other(side), a, d))
  const v = search.search(board.cells, side, 0, a, d)
  return search.over ? null : v
}
