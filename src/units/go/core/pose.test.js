// Posing a problem from the stones and the side to move alone ("A Self-Study System", The build,
// Go, How problems are built and checked): the region grows from the group, the search is
// run with both readings of what lies past the cut, and the problem stands only when they agree.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { coord } from './rules.logic.js'
import { candidatesOf, drawingsOf, pose } from './pose.logic.js'

/**
 * A whole-board position from rows drawn with their bottom left point at (ox, oy).
 * @param {string[]} rows
 * @param {number} ox
 * @param {number} oy
 * @param {'B' | 'W'} side
 */
function position(rows, ox, oy, side) {
  /** @type {string[]} */
  const black = []
  /** @type {string[]} */
  const white = []
  rows.forEach((row, r) => row.split('').forEach((ch, x) => (ch === 'X' ? black : ch === 'O' ? white : []).push(coord(ox + x, oy + rows.length - 1 - r))))
  return { black, white, side }
}

const THREE = ['XXXXXXX', 'XOOOOOX', 'XO...OX', 'XOOOOOX', 'XXXXXXX']

test('a walled group in the middle of the board is posed on its own liberties, and both readings agree', () => {
  const p = position(THREE, 6, 6, 'B')
  // the wall has too many liberties to be asked about: the white group is the one candidate
  assert.deepEqual(candidatesOf(p).map(g => g.stones.length), [12])
  const posed = pose(p)
  assert.ok(posed.ok)
  const { drawing, problem } = posed.value
  assert.equal(problem.result, 'dies')
  assert.deepEqual(problem.answers, ['K9'])
  assert.deepEqual(drawing.region, ['J9', 'K9', 'L9'])
  assert.equal(problem.beyond, 'both')
  assert.equal(problem.group.colour, 'white')
  // the cut holds the wall, and is drawn in the board's own coordinates
  assert.ok(problem.black.includes('G7') && problem.black.includes('N11'))
})

test('the same group with the owner to move lives, by the same point', () => {
  const posed = pose(position(THREE, 6, 6, 'W'))
  assert.ok(posed.ok)
  const { problem } = posed.value
  assert.equal(problem.result, 'lives')
  assert.deepEqual(problem.answers, ['K9'])
})

test('a group that stands in the open is refused: its result depends on what lies beyond the cut', () => {
  const p = position(['...', '.O.', '.X.'], 8, 8, 'B')
  assert.deepEqual(pose(p), { ok: false, error: 'its result depends on what lies beyond the cut' })
  // with no group hemmed in, nothing is tried
  assert.deepEqual(pose(position(['...', '...', '...'], 8, 8, 'B')), { ok: false, error: 'no group is hemmed in' })
})

test('the regions grow from the group a line at a time, and stop at the most points allowed', () => {
  const p = position(['...', '.O.', '.X.'], 8, 8, 'B')
  const [white] = candidatesOf(p).filter(g => g.colour === 2)
  assert.ok(white)
  const sizes = drawingsOf(p, white, { reach: 3, most: 12 }).map(d => d.region.length)
  assert.deepEqual(sizes, [3, 11])
})
