// The Go unit's decoders (src/units/go/core/decode.logic.js): what the learner types for a game.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readGameNumber } from './decode.logic.js'

test("a game number is read from the number or from the game's address", () => {
  assert.equal(readGameNumber(' 9001 '), 9001)
  assert.equal(readGameNumber('https://online-go.com/game/9001'), 9001)
  assert.equal(readGameNumber('online-go.com/game/view/9001/'), 9001)
  assert.equal(readGameNumber('nine'), null)
  assert.equal(readGameNumber(''), null)
})
