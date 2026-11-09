// The Go unit's decoders (src/units/go/core/decode.logic.js): what the learner types for a game,
// and what the record keeps typed for the item open.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { NO_OWN, decodeRecord, readGameNumber } from './decode.logic.js'
import { courseOf } from './own.logic.js'

test("a game number is read from the number or from the game's address", () => {
  assert.equal(readGameNumber(' 9001 '), 9001)
  assert.equal(readGameNumber('https://online-go.com/game/9001'), 9001)
  assert.equal(readGameNumber('online-go.com/game/view/9001/'), 9001)
  assert.equal(readGameNumber('nine'), null)
  assert.equal(readGameNumber(''), null)
})

test('the draft typed for the item open is read back, each field defaulted; one with no key is dropped', () => {
  const course = courseOf(NO_OWN)
  const read = (/** @type {unknown} */ draft) => decodeRecord({ position: { draft } }, course).position.draft
  assert.deepEqual(read({ key: 'rulesR1.1', typed: '2', number: 7 }), {
    key: 'rulesR1.1',
    move: '',
    result: '',
    typed: '2',
    number: ''
  })
  assert.equal(read({ typed: '2' }), undefined)
  assert.equal(read('2'), undefined)
})
