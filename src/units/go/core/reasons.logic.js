// Hides: the reason each move of a solution line carries: one clause from the course's fixed list, each
// with a test on the position, as "A Self-Study System" Go sets out. Pure functions, tested in
// tests/go-reasons.test.mjs. A new reason enters the list only with its test.
import { assert } from '../../../kernel/invariant.logic.js'
import { groupAt, neighbours, other, place } from './rules.logic.js'

/**
 * @typedef {{ target: number, results: Readonly<Record<number, import('./solve.logic.js').Fate>>, result: import('./solve.logic.js').Fate }} Read What the search found for a position: a stone of the group asked about, the result of each first move by its point, and the best result
 */

/**
 * The reasons, in the order the tests are tried, and the clause each writes.
 * @type {[string, string][]}
 */
export const REASONS = [
  ['captures', 'Captures'],
  ['atari', 'Puts a group in atari'],
  ['connects', 'Connects'],
  ['cuts', 'Cuts'],
  ['eye', 'Makes an eye'],
  ['liberty', 'Adds a liberty'],
  ['last space', 'Takes the last space'],
  ['net', 'Keeps the group from getting out'],
  ['takes liberty', 'Takes a liberty'],
  ['pass', 'Every move would do worse']
]

/**
 * @param {import('./rules.logic.js').Board} b
 * @param {number} i
 * @param {number} colour
 */
const groupsBeside = (b, i, colour) => {
  /** @type {Set<number>} */
  const seen = new Set()
  /** @type {import('./rules.logic.js').Group[]} */
  const out = []
  for (const j of neighbours(b.w, b.h, i)) {
    if (b.cells[j] === colour && !seen.has(j)) {
      const g = groupAt(b, j)
      g.stones.forEach(s => seen.add(s))
      out.push(g)
    }
  }
  return out
}

/**
 * The empty points walled in by `colour` stones alone (an eye point), next to `stones`.
 * @param {import('./rules.logic.js').Board} b
 * @param {number[]} stones
 * @param {number} colour
 */
function eyesOf(b, stones, colour) {
  const near = new Set(stones)
  /** @type {Set<number>} */
  const eyes = new Set()
  for (const s of stones) {
    for (const j of neighbours(b.w, b.h, s)) {
      if (
        b.cells[j] === 0 &&
        !near.has(j) &&
        neighbours(b.w, b.h, j).every(k => b.cells[k] === colour)
      )
        eyes.add(j)
    }
  }
  return eyes.size
}

/**
 * A net: the move does not touch the group asked about, and the search says it is a best first
 * move after which the group dies, while every move that would put the group in atari lets it
 * off. `read` is what the search found for the position: `{ target, results, result }`, a stone
 * of the group, the result of each first move by its point, and the best result.
 * @param {import('./rules.logic.js').Board} b
 * @param {number} colour
 * @param {number} i
 * @param {Read} read
 */
function isNet(b, colour, i, { target, results, result }) {
  if (result !== 'dies' || results[i] !== 'dies' || b.cells[target] !== other(colour)) return false
  const group = groupAt(b, target)
  if (neighbours(b.w, b.h, i).some(j => group.stones.includes(j))) return false
  // a move on a liberty of the group that leaves it one liberty
  const ataris = group.liberties.filter(l => {
    const r = place(b, colour, l)
    return r && r.board.cells[target] && groupAt(r.board, target).liberties.length === 1
  })
  return ataris.length > 0 && ataris.every(l => results[l] !== undefined && results[l] !== 'dies')
}

/**
 * A group as it stood on `b` before the move: the group that holds one of its stones there.
 * @param {import('./rules.logic.js').Board} b
 * @param {import('./rules.logic.js').Group} g
 */
function stoodBefore(b, g) {
  const [stone] = g.stones
  assert(stone !== undefined, 'groupAt holds the stone it starts from, so a group holds a stone')
  return groupAt(b, stone)
}

/**
 * The reason for `colour` playing at `i` on board `b`: the first test that holds, or null when
 * none does (a move the course does not teach; the problem is then not used). `read` is given
 * for a problem's first move alone, with what the search found (see `isNet`). A pass has no
 * point and is not asked here: a line's pass carries 'pass' when the search finds every move
 * worse (problem.js).
 * @param {import('./rules.logic.js').Board} b
 * @param {number} colour
 * @param {number} i
 * @param {boolean} [deep]
 * @param {Read | null} [read]
 * @returns {string | null}
 */
export function reasonFor(b, colour, i, deep = true, read = null) {
  const r = place(b, colour, i)
  if (!r) return null
  if (r.captured.length) return 'captures'
  const enemy = other(colour)
  // atari: an enemy group beside the move has exactly one liberty now and had more before
  for (const g of groupsBeside(r.board, i, enemy)) {
    if (g.liberties.length === 1) {
      const before = stoodBefore(b, g)
      if (before.liberties.length > 1) return 'atari'
    }
  }
  if (read && isNet(b, colour, i, read)) return 'net'
  const ownBefore = groupsBeside(b, i, colour)
  if (ownBefore.length >= 2) return 'connects'
  if (groupsBeside(b, i, enemy).length >= 2) return 'cuts'
  const after = groupAt(r.board, i)
  const eyesBefore = ownBefore.reduce((n, g) => n + eyesOf(b, g.stones, colour), 0)
  if (eyesOf(r.board, after.stones, colour) > eyesBefore) return 'eye'
  const sole = ownBefore[0]
  if (ownBefore.length === 1 && sole && after.liberties.length > sole.liberties.length)
    return 'liberty'
  // the last space: the move fills one of the last two points of a region only the enemy walls
  const region = new Set([i])
  const walled = [...region]
  // an array iterator reads the length at each step, so points pushed meanwhile are visited
  for (const p of walled) {
    for (const j of neighbours(b.w, b.h, p)) {
      if (b.cells[j] === 0 && !region.has(j)) {
        region.add(j)
        walled.push(j)
      }
    }
  }
  if (
    region.size <= 2 &&
    [...region].every(p =>
      neighbours(b.w, b.h, p).every(k => region.has(k) || b.cells[k] === enemy)
    )
  ) {
    return 'last space'
  }
  // the last space, again: the point where the other side would make an eye
  if (deep && reasonFor(b, enemy, i, false) === 'eye') return 'last space'
  // it takes a liberty: a group of the other side beside the move has one liberty fewer, and
  // two or more left
  for (const g of groupsBeside(r.board, i, enemy)) {
    const before = stoodBefore(b, g)
    if (g.liberties.length >= 2 && g.liberties.length === before.liberties.length - 1)
      return 'takes liberty'
  }
  return null
}
