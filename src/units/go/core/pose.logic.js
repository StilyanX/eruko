// Hides: how a problem is posed from a whole-board position of which only the stones and the side to move
// are known, as "A Self-Study System" Go sets out for the classical collections and for the
// learner's own games: no line of play says where the problem lies, and the position is open to
// the rest of the board. A group is taken as the group asked about. Every empty point within
// one line of its stones is open to a move, then within two lines, and so on; the diagram is
// that region with the stones round it, and what lies past it is drawn and never played. On
// each region the search is run twice (problem.js): once with a group that reaches past the cut
// standing for good, and once with nothing past the cut helping the group asked about. The
// problem stands at the first region where both runs give the same answer: the group's fate is
// then settled inside the cut, whatever lies beyond. Pure functions, tested in
// tests/go-pose.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { byPoint, coord, groupAt, parseCoord } from './rules.logic.js'
import { kindId, problemId } from './decode.logic.js'
import { boardOf } from './diagram.logic.js'
import { problemFrom } from './problem.logic.js'

const SIZE = 19
// A group with more liberties than this is not tried: nothing hems it in.
const FREE = 6
// How many of the largest groups are tried.
export const TRIED = 3
// The most points a drawing's region may hold.
export const MOST = 18
/** @param {number} i */
const nameOf = i => coord(i % SIZE, Math.floor(i / SIZE))

/**
 * @typedef {Readonly<{ black: readonly string[], white: readonly string[], side: 'B' | 'W' }>} Position The stones by coordinate and the side to move
 */

/**
 * The whole board of a position, from its stones by coordinate.
 * @param {Pick<Position, 'black' | 'white'>} position
 */
const boardFrom = ({ black, white }) => boardOf({ view: [0, 0, SIZE, SIZE], black, white }).board

/**
 * The groups of a position that may be asked about, in the order they are tried: the largest
 * first, then the one with the fewest liberties, then by its first stone.
 * @param {Pick<Position, 'black' | 'white'>} position
 */
export function candidatesOf(position) {
  const board = boardFrom(position)
  /** @type {import('./rules.logic.js').Group[]} */
  const out = []
  const done = new Uint8Array(board.cells.length)
  board.cells.forEach((c, i) => {
    if (!c || done[i]) return
    const g = groupAt(board, i)
    g.stones.forEach(s => (done[s] = 1))
    if (g.liberties.length <= FREE) out.push(g)
  })
  return out.sort(
    (a, b) =>
      b.stones.length - a.stones.length ||
      a.liberties.length - b.liberties.length ||
      Math.min(...a.stones) - Math.min(...b.stones)
  )
}

/**
 * The drawings a group may be posed in, the smallest region first: `{ diagram, region, side,
 * target, beyond: 'both' }` with the region every empty point within `k` lines of a stone of the
 * group, `k` from 1 to `reach`. A region of more than `most` points ends the list, and so does
 * one that holds no more points than the last.
 * @param {Position} position
 * @param {import('./rules.logic.js').Group} group
 * @param {{ reach?: number, most?: number }} [options]
 * @returns {import('./problem.logic.js').Drawing[]}
 */
export function drawingsOf(position, group, { reach = 4, most = MOST } = {}) {
  const { black, white, side } = position
  const board = boardFrom(position)
  /** @type {import('./problem.logic.js').Drawing[]} */
  const out = []
  let last = 0
  for (let k = 1; k <= reach; k++) {
    /** @type {number[]} */
    const points = []
    for (let i = 0; i < SIZE * SIZE; i++) {
      if (board.cells[i]) continue
      const x = i % SIZE
      const y = Math.floor(i / SIZE)
      if (
        group.stones.some(s => Math.abs((s % SIZE) - x) + Math.abs(Math.floor(s / SIZE) - y) <= k)
      )
        points.push(i)
    }
    if (points.length === last) break
    last = points.length
    if (points.length > most) break
    // The cut: the region and the group, and two more lines of points around them, so that
    // every stone beside the region is drawn with the stones that hold it up.
    const all = [...points, ...group.stones]
    const xs = all.map(i => i % SIZE)
    const ys = all.map(i => Math.floor(i / SIZE))
    const vx = Math.max(0, Math.min(...xs) - 2)
    const vy = Math.max(0, Math.min(...ys) - 2)
    /** @type {import('./diagram.logic.js').View} */
    const view = [
      vx,
      vy,
      Math.min(SIZE - 1, Math.max(...xs) + 2) - vx + 1,
      Math.min(SIZE - 1, Math.max(...ys) + 2) - vy + 1
    ]
    /** @param {string} at */
    const inView = at => {
      const p = parseCoord(at)
      assert(p, `A position's stone is on a point: ${at}`)
      const [x, y] = p
      return x >= vx && x < vx + view[2] && y >= vy && y < vy + view[3]
    }
    // groupAt holds the stone it starts from, so a group has a first stone
    const target = group.stones.map(nameOf).sort(byPoint)[0] ?? ''
    out.push({
      diagram: {
        size: SIZE,
        view,
        black: black.filter(inView).sort(byPoint),
        white: white.filter(inView).sort(byPoint)
      },
      region: points.map(nameOf).sort(byPoint),
      side,
      target,
      beyond: 'both'
    })
  }
  return out
}

/**
 * A problem posed from the stones and the side to move alone: `{ drawing, problem }` for the
 * first group, of the largest few, and the first region at which the search finishes and both
 * readings of what lies past the cut agree; else the cause that stopped the last group tried.
 * @param {Position} position
 * @param {{ budget?: number, source?: string }} [options]
 * @returns {import('../../../kernel/result.logic.js').Result<{ drawing: import('./problem.logic.js').Drawing, problem: import('./decode.logic.js').Problem }, import('./problem.logic.js').Refusal | 'no group is hemmed in'>}
 */
export function pose(position, { budget = 3e6, source = 'aether' } = {}) {
  /** @type {import('./problem.logic.js').Refusal | 'no group is hemmed in'} */
  let refused = 'no group is hemmed in'
  for (const group of candidatesOf(position).slice(0, TRIED)) {
    for (const drawing of drawingsOf(position, group)) {
      const made = problemFrom(drawing, problemId('x'), kindId(0), source, budget)
      if (made.ok) return ok({ drawing, problem: made.value })
      refused = made.error
      // Only a region too small to settle the group is worth widening: a search that does not
      // finish will not finish a wider one, and a group about which nothing is asked is asked
      // nothing at any size.
      if (refused !== 'its result depends on what lies beyond the cut') break
    }
  }
  return fail(refused)
}
