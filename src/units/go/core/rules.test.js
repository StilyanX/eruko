// The rules of play: capture, no suicide, and the area count.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { BLACK, WHITE, areaScore, boardFrom, coord, parseCoord, place } from './rules.logic.js'

const at = (/** @type {import('./rules.logic.js').Board} */ b, /** @type {string} */ t) => {
  const parsed = parseCoord(t)
  assert.ok(parsed)
  const [x, y] = parsed
  return y * b.w + x
}

test('coordinates run A to T with no I, and parse back', () => {
  assert.equal(coord(8, 3), 'J4')
  assert.deepEqual(parseCoord('Q16'), [15, 15])
  assert.equal(parseCoord('I5'), null)
})

test('a stone with no liberty left is captured, and suicide is illegal', () => {
  const b = boardFrom(['.....', '..X..', '.XOX.', '.....', '.....'])
  const r = place(b, BLACK, at(b, 'C2'))
  assert.ok(r)
  assert.deepEqual(r.captured, [at(b, 'C3')])
  const sui = boardFrom(['.X...', 'X....', '.....', '.....', '.....'])
  assert.equal(place(sui, WHITE, at(sui, 'A5')), null)
})

test('the area count: stones plus the empty points that reach one colour only', () => {
  const b = boardFrom(['..X..', '..X..', '..X..', '..X..', '..X..'])
  assert.deepEqual(areaScore(b), { black: 25, white: 0, margin: 25 })
  const c = boardFrom(['..XO.', '..XO.', '..XO.', '..XO.', '..XO.'])
  assert.deepEqual(areaScore(c), { black: 15, white: 10, margin: 5 })
})
