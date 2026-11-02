// Hides: how a Go problem is built from a position by the exact search: every best first move, the
// result, each line of best play with a reason a move, its variations, and the ko threats at
// which a ko result changes; and why a position makes no problem. The bank's builders
// (scripts/gen/go.mjs and the importers) and the builder of problems from the learner's own games
// (own.logic.js) share it.
import { assert } from '../../../kernel/invariant.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { BLACK, WHITE, byPoint, groupAt, place } from './rules.logic.js'
import { solve } from './solve.logic.js'
import { reasonFor } from './reasons.logic.js'
import { boardOf, viewOf, whereOf } from './diagram.logic.js'

/**
 * @typedef {Readonly<{ diagram: import('./diagram.logic.js').StoredDiagram, region: readonly string[], side: 'B' | 'W', target: string, threats?: import('./solve.logic.js').Threats, beyond?: 'both' }>} Drawing The position a problem is built from
 * @typedef {'the search did not finish' | 'its result depends on what lies beyond the cut' | 'every first move gives the same result' | 'a pass stands inside a line where a move is as good' | 'the search did not finish a line' | 'a move has no reason'} Refusal Why a position makes no problem
 */

/** @param {'B' | 'W'} s */
const colourOf = s => (s === 'B' ? BLACK : WHITE)
/** @param {number} c */
const letter = c => (c === BLACK ? 'B' : 'W')

/** @param {import('./solve.logic.js').Threats} t */
const koSentence = t =>
  !t.black && !t.white
    ? 'Ko threats elsewhere: none for either side.'
    : `Ko threats elsewhere: Black ${t.black || 'none'}, White ${t.white || 'none'}.`

/**
 * The sides of a diagram that are cut from the board and are not its edge.
 * @param {Pick<import('./diagram.logic.js').StoredDiagram, 'size' | 'view'>} diagram
 */
const cutOf = ({ size, view }) => {
  const [ox, oy, w, h] = viewOf(view)
  return {
    left: ox > 0,
    bottom: oy > 0,
    right: ox + w < size,
    top: oy + h < size
  }
}

/**
 * The search on a drawing: its board, the solution, and the options it ran with; or why it makes
 * no problem. Where the drawing is cut from an open board (`beyond: 'both'`) the search runs
 * twice, and the two runs must agree.
 * @param {Drawing} drawing
 * @param {number} budget
 * @returns {import('../../../kernel/result.logic.js').Result<Search, Refusal>}
 */
function searched(drawing, budget) {
  const { board, index, name } = boardOf(drawing.diagram)
  const side = colourOf(drawing.side)
  const target = index(drawing.target)
  const threats = drawing.threats ?? {}
  const region = drawing.region.map(index)
  const both = drawing.beyond === 'both'
  const table = budget > 1e6 ? 22 : 20
  // The lines shown are read with nothing past the cut helping the group.
  /** @type {import('./solve.logic.js').SolveOptions} */
  const options = both
    ? { budget, region, table, outside: 'attacker', cut: cutOf(drawing.diagram) }
    : { budget, region, table }
  const s = solve(board, side, target, threats, options)
  if (!s) return fail('the search did not finish')
  if (both) {
    const open = solve(board, side, target, threats, { ...options, outside: 'open' })
    if (!open) return fail('the search did not finish')
    if (open.result !== s.result || open.ko !== s.ko || String(open.best) !== String(s.best))
      return fail('its result depends on what lies beyond the cut')
  }
  // Where every first move is as good as every other, nothing is asked.
  const firsts = Object.keys(s.results).length
  if (firsts > 1 && s.best.length === firsts) return fail('every first move gives the same result')
  return ok({ board, index, name, side, target, threats, region, options, s })
}

/**
 * The search on a drawing: the board it runs on with the way from a coordinate to a point and
 * back, the side to move, the group asked about, the threats, the region and options it ran
 * with, and what it found.
 * @typedef {Readonly<{ board: import('./rules.logic.js').Board, index: (at: string) => number, name: (i: number) => string, side: number, target: number, threats: import('./solve.logic.js').Threats, region: number[], options: import('./solve.logic.js').SolveOptions, s: import('./solve.logic.js').Solution }>} Search
 */

/**
 * A line's plies as moves with their reasons, from ply `from` on. A pass inside a line is a move
 * of it only when the search found every move worse. The first move is read with what the
 * search found, which a net's test needs. Exported for its test: no position found yet makes a
 * line pass where a move is as good (tests/go-problem.test.mjs).
 * @param {Search} found
 * @param {import('./solve.logic.js').Ply[]} plies
 * @param {number} [from]
 * @returns {import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').SolutionMove[], Refusal>}
 */
export function movesOf(found, plies, from = 0) {
  const { board, name, s, target } = found
  const read = { target, results: s.results, result: s.result }
  while (plies.at(-1)?.point === null) plies.pop()
  let b = board
  /** @type {import('./decode.logic.js').SolutionMove[]} */
  const out = []
  for (const [k, ply] of plies.entries()) {
    if (ply.point === null) {
      if (!ply.only) return fail('a pass stands inside a line where a move is as good')
      if (k >= from) out.push({ side: letter(ply.side), at: null, reason: 'pass' })
      continue
    }
    const reason = reasonFor(b, ply.side, ply.point, true, k === 0 ? read : null)
    if (!reason) return fail('a move has no reason')
    if (k >= from) out.push({ side: letter(ply.side), at: name(ply.point), reason })
    const placed = place(b, ply.side, ply.point)
    assert(placed, `A line of the search plays only legal moves: ${name(ply.point)}`)
    b = placed.board
  }
  return ok(out)
}

/**
 * Every best first move with its line of best play and its variations: another reply of the
 * side that did not play first, which keeps the result.
 * @param {Search} found
 * @returns {import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').SolutionLine[], Refusal>}
 */
function linesOf(found) {
  const { s, side, name } = found
  /** @type {import('./decode.logic.js').SolutionLine[]} */
  const lines = []
  for (const first of s.best) {
    const main = s.line(first, { branch: 99 })
    if (!main) return fail('the search did not finish a line')
    const moves = movesOf(found, main.plies)
    if (!moves.ok) return moves
    /** @type {import('./decode.logic.js').SolutionVariation[]} */
    const variations = []
    for (const v of main.variations) {
      if (v.side === side || v.at >= moves.value.length) continue
      const other = s.line(first, { forced: { [v.at]: v.point } })
      const rest = other && movesOf(found, other.plies, v.at)
      if (rest?.ok && rest.value.length) variations.push({ at: v.at + 1, moves: rest.value })
    }
    lines.push({ first: name(first), moves: moves.value, variations })
  }
  return ok(lines)
}

/**
 * The ko threats at which a ko result changes: the smallest counts for which it differs.
 * @param {Search} found
 * @returns {import('./decode.logic.js').KoChange[]}
 */
function koChanges({ board, side, target, threats, options, s }) {
  if (s.result !== 'ko') return []
  return [{ black: 1 }, { white: 1 }].flatMap(more => {
    const counts = {
      black: (threats.black ?? 0) + ('black' in more ? more.black : 0),
      white: (threats.white ?? 0) + ('white' in more ? more.white : 0)
    }
    const again = solve(board, side, target, counts, options)
    return again && again.result !== 'ko' ? [{ ...counts, result: again.result }] : []
  })
}

/**
 * The group asked about, by where it stands; by a point of it when the diagram holds another
 * group of its colour.
 * @param {Search} found
 * @param {import('./diagram.logic.js').StoredDiagram} diagram
 */
function groupOf({ board, target, name, s }, diagram) {
  const group = groupAt(board, target)
  /** @type {import('./decode.logic.js').Colour} */
  const colour = s.defender === BLACK ? 'black' : 'white'
  const alone = (colour === 'black' ? diagram.black : diagram.white).length === group.stones.length
  // groupAt holds the stone it starts from, so a group has a first stone
  const at = group.stones.map(name).sort(byPoint)[0] ?? name(target)
  const where = whereOf(diagram)
  return { colour, at, where: alone ? `${/ side$/.test(where) ? 'on' : 'in'} the ${where}` : null }
}

/**
 * A problem from a position, or why it makes none. `drawing` is `{ diagram, region, side,
 * target, threats?, beyond? }`: the diagram (diagram.logic.js), the points of the region and a
 * stone of the group asked about by coordinate, and the side to move as 'B' or 'W'. `beyond`
 * says how the points past the region are read. Left out, the region is closed by walls and
 * edges. 'both': the position is cut from an open board (pose.logic.js), and the search is run
 * twice: once with a group that reaches past the cut standing for good, and once with nothing
 * past the cut helping the group asked about; the problem stands only when both runs give the
 * same best first moves, result and ko.
 * @param {Drawing} drawing
 * @param {import('./decode.logic.js').ProblemId} id
 * @param {import('./decode.logic.js').KindId} kind
 * @param {string} [source]
 * @param {number} [budget]
 * @returns {import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').Problem, Refusal>}
 */
export function problemFrom(drawing, id, kind, source = 'aether', budget = 3e6) {
  const found = searched(drawing, budget)
  if (!found.ok) return found
  const lines = linesOf(found.value)
  if (!lines.ok) return lines
  const { diagram } = drawing
  const { s, region, name } = found.value
  return ok({
    id,
    kind,
    source,
    ...diagram,
    region: region.map(name).sort(byPoint),
    ...(drawing.beyond === 'both' ? { beyond: drawing.beyond } : {}),
    toMove: drawing.side === 'B' ? 'black' : 'white',
    group: groupOf(found.value, diagram),
    ko: koSentence(found.value.threats),
    answers: s.best.map(name).sort(byPoint),
    result: s.result,
    solution: { lines: lines.value, changes: koChanges(found.value) }
  })
}
