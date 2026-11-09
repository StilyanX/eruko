// Go's session step (src/units/go/core/session.logic.js): what a judged answer says, and one
// stored log of events (the set-up, three days of the work list, the game posted and skipped)
// replayed to its stored record, byte for byte (tests/go-replay-log.json,
// tests/go-replay-state.json).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { NO_OWN, gameId } from './decode.logic.js'
import { courseOf } from './own.logic.js'
import { recordOf } from './record.logic.js'
import { step } from './session.logic.js'
import { askedFrom, typed } from '../../../../tests/lib/go-typed.mjs'

const fresh = () => recordOf({}, courseOf(NO_OWN))

test('a judged answer says its verdict, and the right answer after Wrong; a late loss is said; every other event says nothing', () => {
  const item = askedFrom({ n: 5, step: 'rules', id: 'R1.1', kind: null })
  const answer = /** @type {const} */ ({ t: 'answer', item, given: 'yes', day: '2026-10-01' })
  assert.deepEqual(step(fresh(), { ...answer, right: true }).effects, [
    { t: 'say', text: 'Right.' }
  ])
  assert.deepEqual(step(fresh(), { ...answer, right: false }).effects, [
    { t: 'say', text: 'Wrong.' }
  ])
  assert.deepEqual(step(fresh(), { ...answer, right: false, answer: 'The answer is 2.' }).effects, [
    { t: 'say', text: 'Wrong. The answer is 2.' }
  ])
  assert.deepEqual(step(fresh(), { t: 'next' }).effects, [])
  assert.deepEqual(
    step(fresh(), { t: 'review-loss', game: gameId(1), index: 0, typed: 'K10', lossPts: 4.31 }).effects,
    [{ t: 'say', text: 'Your move K10: 4.3 points lost.' }]
  )
})

test('a stored log of events replays to its stored record, byte for byte', () => {
  /** @type {import('./session.logic.js').Event[]} */
  const log = typed(JSON.parse(readFileSync('tests/go-replay-log.json', 'utf8')))
  const state = log.reduce((r, event) => step(r, event).state, fresh())
  assert.equal(
    `${JSON.stringify(state, null, 1)}\n`,
    readFileSync('tests/go-replay-state.json', 'utf8')
  )
})

test('what is typed for the item open is kept until a move answers it', () => {
  const draft = { key: 'rulesR1.1', move: '', result: '', typed: '2', number: '' }
  const typedIn = step(fresh(), { t: 'draft', draft }).state
  assert.deepEqual(typedIn.position.draft, draft)
  assert.deepEqual(step(typedIn, { t: 'server-read', day: '2026-10-01', player: { rating: 900, deviation: 100 } }).state.position.draft, draft)
  const item = askedFrom({ n: 5, step: 'rules', id: 'R1.1', kind: null })
  const answered = step(typedIn, { t: 'answer', item, right: true, given: '2', day: '2026-10-01' }).state
  assert.equal(answered.position.draft, undefined)
  assert.equal(step(typedIn, { t: 'skip-game', day: '2026-10-01' }).state.position.draft, undefined)
})
