// The rules items ("A Self-Study System", Go, Start and The material, Rules item; The build, Go,
// Rules program): the rules program is checked against Tromp's definition of the score on every
// stored position before an item is shown, and each item asks one question with one exact answer.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { boardFrom } from './rules.logic.js'
import { trompScore } from './tromp.logic.js'

const tromp = (/** @type {import('./rules.logic.js').Board} */ b) =>
  trompScore(
    b.w,
    b.h,
    (/** @type {number} */ x, /** @type {number} */ y) => b.cells[y * b.w + x] ?? 0
  )

test("Tromp's score, as his definition reads", () => {
  // a point counts for a side when it is of her colour, or empty and reaches only her colour
  assert.deepEqual(tromp(boardFrom(['.X.O.', '.X.O.'])), { black: 4, white: 4 })
  assert.deepEqual(tromp(boardFrom(['...', '...'])), { black: 0, white: 0 })
  assert.deepEqual(tromp(boardFrom(['X..', '...'])), { black: 6, white: 0 })
  assert.deepEqual(tromp(boardFrom(['XO.', '.O.'])), { black: 1, white: 4 })
})
