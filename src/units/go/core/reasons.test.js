// The reasons a solution's moves carry ("A Self-Study System", Go, The solution, Reasons): one
// clause a move from the course's fixed list, each given by a test on the position.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { REASONS, reasonFor } from './reasons.logic.js'
import { BLACK, WHITE, boardFrom, parseCoord } from './rules.logic.js'

const point = (/** @type {import('./rules.logic.js').Board} */ b, /** @type {string} */ at) => {
  const parsed = parseCoord(at)
  assert.ok(parsed)
  const [x, y] = parsed
  return y * b.w + x
}
const why = (/** @type {string[]} */ rows, /** @type {number} */ colour, /** @type {string} */ at) => {
  const b = boardFrom(rows)
  return reasonFor(b, colour, point(b, at))
}

test('the list is the paper\'s ten, each a clause that opens a sentence', () => {
  assert.deepEqual(
    REASONS.map(([, clause]) => clause),
    [
      'Captures',
      'Puts a group in atari',
      'Connects',
      'Cuts',
      'Makes an eye',
      'Adds a liberty',
      'Takes the last space',
      'Keeps the group from getting out',
      'Takes a liberty',
      'Every move would do worse'
    ]
  )
})

test('captures, atari, connects, cuts, eye, last space and liberty each follow from their test on a small board', () => {
  assert.equal(why(['.....', '..X..', '.XO..', '..X..', '.....'], BLACK, 'D3'), 'captures')
  assert.equal(why(['.....', '..X..', '.XO..', '.....', '.....'], BLACK, 'D3'), 'atari')
  assert.equal(why(['.....', '.....', '.X.X.', '.....', '.....'], BLACK, 'C3'), 'connects')
  assert.equal(why(['.....', '.....', '.O.O.', '.....', '.....'], BLACK, 'C3'), 'cuts')
  assert.equal(why(['OOOOO', 'O...O', 'OOOOO'], WHITE, 'C2'), 'eye')
  assert.equal(why(['OOOOO', 'O...O', 'OOOOO'], BLACK, 'C2'), 'last space')
  assert.equal(why(['.....', '..X..', '.XO..', '.....', '.....'], WHITE, 'D3'), 'liberty')
})

test('a move that takes one liberty of a group and leaves it two or more takes a liberty', () => {
  // the white group has three liberties, and two after Black plays on one
  assert.equal(why(['.....', '.....', '..O..', '..X..', '.....'], BLACK, 'B3'), 'takes liberty')
  // down to one liberty is an atari, and a move beside no stone of the other side takes none
  assert.equal(why(['.....', '..X..', '.XO..', '.....', '.....'], BLACK, 'D3'), 'atari')
  assert.equal(why(['.....', '.....', '..O..', '.....', '.....'], BLACK, 'A1'), null)
})

test('a net: the move stands off the group, the search says it dies, and every atari lets it off', () => {
  const b = boardFrom(['.....', '.....', '.XO..', '..X..', '.....'])
  const target = point(b, 'C3')
  /** @type {import('./reasons.logic.js').Read} */
  const read = { target, result: 'dies', results: { [point(b, 'D4')]: 'dies', [point(b, 'C4')]: 'lives', [point(b, 'D3')]: 'lives' } }
  assert.equal(reasonFor(b, BLACK, point(b, 'D4'), true, read), 'net')
  // not when an atari kills as well, nor when the search has the group live
  /** @type {import('./reasons.logic.js').Read} */
  const ladder = { ...read, results: { ...read.results, [point(b, 'C4')]: 'dies' } }
  assert.notEqual(reasonFor(b, BLACK, point(b, 'D4'), true, ladder), 'net')
  assert.notEqual(reasonFor(b, BLACK, point(b, 'D4'), true, { ...read, result: 'lives' }), 'net')
  // nor a move that touches the group, and never without what the search found
  assert.notEqual(reasonFor(b, BLACK, point(b, 'C4'), true, read), 'net')
  assert.notEqual(reasonFor(b, BLACK, point(b, 'D4')), 'net')
})

test('a move no reason fits has none, and an illegal move has none', () => {
  assert.equal(why(['.....', '.....', '.....', '.....', '.....'], BLACK, 'C3'), null)
  assert.equal(why(['.X.', 'X.X', '.X.'], WHITE, 'B2'), null)
})
