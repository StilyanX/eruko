// Go's session step (src/units/go/core/session.logic.js): what a judged answer says, and one
// stored log of events (the set-up, three days of the work list, the game posted and skipped)
// replayed to its stored record, byte for byte (tests/go-replay-log.json,
// tests/go-replay-state.json).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { NO_OWN } from './decode.logic.js'
import { courseOf } from './own.logic.js'
import { recordOf } from './record.logic.js'
import { step } from './session.logic.js'
import { askedFrom, typed } from '../../../../tests/lib/go-typed.mjs'

const fresh = () => recordOf({}, courseOf(NO_OWN))

test('a judged answer says its verdict; every other event says nothing', () => {
  const item = askedFrom({ n: 5, step: 'rules', id: 'R1.1', kind: null })
  const answer = /** @type {const} */ ({ t: 'answer', item, given: 'yes', day: '2026-10-01' })
  assert.deepEqual(step(fresh(), { ...answer, right: true }).effects, [
    { t: 'say', text: 'Right.' }
  ])
  assert.deepEqual(step(fresh(), { ...answer, right: false }).effects, [
    { t: 'say', text: 'Wrong.' }
  ])
  assert.deepEqual(step(fresh(), { t: 'next' }).effects, [])
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
