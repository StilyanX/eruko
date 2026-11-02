// A Go diagram (src/units/go/core/diagram.logic.js): its stones, where its cut stands, a click on it,
// and a whole board read row by row.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { RULES_ITEMS } from '../content/rules-items.gen.js'
import {
  diagramFrom,
  overviewOf,
  pointAt,
  rowsList,
  spacingPx,
  starsOf,
  stonesList,
  threatsOf,
  viewText,
  whereOf
} from './diagram.logic.js'

test('a diagram: stones by coordinate in real coordinates, and where a cut stands', () => {
  const d = diagramFrom(['.X', 'O.'], 17, 0)
  assert.deepEqual(d, { size: 19, view: [17, 0, 2, 2], black: ['T2'], white: ['S1'] })
  assert.deepEqual(stonesList(d), ['Black: T2.', 'White: S1.'])
  assert.equal(whereOf(d), 'bottom right')
  assert.equal(whereOf({ size: 19, view: [6, 0, 5, 3] }), 'bottom side')
  assert.equal(whereOf({ size: 19, view: [6, 6, 5, 3] }), 'centre')
  assert.equal(whereOf({ size: 5, view: [0, 0, 5, 5] }), 'whole board')
  assert.deepEqual(threatsOf('Ko threats elsewhere: Black 1, White none.'), { black: 1, white: 0 })
  assert.deepEqual(threatsOf('Ko threats elsewhere: none for either side.'), { black: 0, white: 0 })
  assert.equal(
    RULES_ITEMS.every(i => whereOf(i.position) === 'whole board'),
    true
  )
})

test('a click on a drawn diagram names the point under it, and nothing off its points', () => {
  // a cut of the bottom right corner, Q to T and rows 1 to 3: the drawing keeps 1.5 points on the left
  assert.equal(pointAt([15, 0, 4, 3], 1.5, 2.5), 'Q1')
  assert.equal(pointAt([15, 0, 4, 3], 1.9, 2.2), 'Q1')
  assert.equal(pointAt([15, 0, 4, 3], 4.5, 0.5), 'T3')
  assert.equal(pointAt([15, 0, 4, 3], 0.4, 1), null)
  assert.equal(pointAt([15, 0, 4, 3], 3, 3.4), null)
  assert.equal(pointAt([0, 0, 19, 19], 1.5 + 3, 19 - 0.5 - 3), 'D4')
})

test('a whole board reads row by row from the top, and its star points are the ones in the cut', () => {
  assert.deepEqual(rowsList({ black: ['D4', 'Q16', 'D16'], white: ['O16', 'C3'] }), [
    'Row 16: Black Q16, D16. White O16.',
    'Row 4: Black D4.',
    'Row 3: White C3.'
  ])
  assert.deepEqual(rowsList({ black: [], white: [] }), ['No stone is on the board.'])
  assert.deepEqual(starsOf({ size: 19, view: [0, 0, 19, 19] }).length, 9)
  assert.deepEqual(starsOf({ size: 19, view: [14, 0, 5, 5] }), ['Q4'])
  assert.deepEqual(starsOf({ size: 5, view: [0, 0, 5, 5] }), [])
})

test("the overview opens a diagram's text: what is in view, the stone counts, the side to move", () => {
  const corner = diagramFrom(['..X..', '.XO..', '..O..', '.....'], 0, 15, 19)
  assert.equal(viewText({ size: 19, view: [0, 0, 8, 8] }), 'Bottom left corner, A to H by 1 to 8')
  assert.equal(viewText({ size: 19, view: [6, 6, 5, 5] }), 'Centre, G to L by 7 to 11')
  assert.equal(viewText({ size: 19, view: [6, 0, 5, 3] }), 'Bottom side, G to L by 1 to 3')
  assert.equal(viewText({ size: 9, view: [0, 0, 9, 9] }), 'Whole board')
  assert.equal(
    overviewOf(corner, 'Black plays first.'),
    'Top left corner, A to E by 16 to 19. Black 2 stones, White 2 stones. Black plays first.'
  )
  assert.equal(
    overviewOf({ size: 19, view: [0, 0, 1, 1], black: ['A1'], white: [] }),
    'Bottom left corner, A by 1. Black 1 stone, White 0 stones.'
  )
})

test('a point is as wide as two digits at text size and 6 pixels more, and never under 28', () => {
  assert.equal(spacingPx(0), 28)
  assert.equal(spacingPx(16.2), 28)
  assert.equal(spacingPx(22.1), 29)
  assert.equal(spacingPx(30), 36)
})
