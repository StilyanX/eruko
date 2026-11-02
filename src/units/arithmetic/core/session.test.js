// An Arithmetic session as one pure step (src/units/arithmetic/core/session.logic.js): the
// unit's own moves (proofs, statements, the number facts), the shared steps' moves handed on,
// and one stored log of moves replayed to its stored state, byte for byte.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { decodeFacts, factSet } from '../../../kernel/facts.logic.js'
import { proofId, statementId } from '../../../kernel/proofs-decode.logic.js'
import { decodeArithmetic } from './decode.logic.js'
import { step } from './session.logic.js'

const day = '2026-09-22'
const P = proofId('p1')
/** @param {import('../../../kernel/decode.logic.js').JsonRecord} [math] @param {import('../../../kernel/decode.logic.js').JsonRecord} [facts] */
const state = (math = {}, facts = {}) => ({
  math: decodeArithmetic(math),
  facts: decodeFacts(facts)
})
const says = (
  /** @type {readonly import('../../../kernel/maths-session.logic.js').Effect[]} */ e
) => e.flatMap(x => (x.t === 'say' ? [x.text] : []))

test('a proof read line by line keeps the lines given the wrong reason, and once read is checked the next day', () => {
  let s = state()
  s = step(s, { t: 'proof-line', proof: P, right: true }).state
  s = step(s, { t: 'proof-line', proof: P, right: false }).state
  assert.deepEqual(s.math.proofs?.[P], { reading: { line: 2, wrong: [2] } })
  const read = step(s, { t: 'proof-read', proof: P, day })
  assert.deepEqual(read.state.math.proofs?.[P], { read: day, checks: [], known: false, wrong: [2] })
  assert.match(says(read.effects)[0] ?? '', /^You read the proof\. Its check is on /)
  const known = step(read.state, { t: 'proof-check', proof: P, right: true, day: '2026-09-23' })
  const p = known.state.math.proofs?.[P]
  assert.ok(p && 'read' in p && p.known && p.checks.length === 1)
  assert.deepEqual(says(known.effects), ['You know this proof.'])
  // A read proof takes no more reading moves.
  assert.equal(step(read.state, { t: 'proof-line', proof: P, right: true }).state, read.state)
  assert.equal(step(read.state, { t: 'proof-read', proof: P, day }).state, read.state)
})

test('a check of a proof never read changes nothing (it used to read the missing proof and throw)', () => {
  const s = state()
  const r = step(s, { t: 'proof-check', proof: P, right: true, day })
  assert.equal(r.state, s)
  assert.deepEqual(r.effects, [])
  const reading = state({ proofs: { p1: { reading: { line: 1, wrong: [] } } } })
  assert.equal(step(reading, { t: 'proof-check', proof: P, right: false, day }).state, reading)
})

test('a statement to prove goes through its phases, is proved, or is given up for the next of its method', () => {
  const S1 = statementId('s1')
  const prove = [
    { id: S1, method: 'induction' },
    { id: statementId('s2'), method: 'induction' }
  ]
  let s = step(state(), { t: 'prove-phase', statement: S1, phase: 'structure' }).state
  assert.deepEqual(s.math.proved?.[S1], { phase: 'structure' })
  s = step(s, { t: 'prove-done', statement: S1, day }).state
  assert.deepEqual(s.math.proved?.[S1], { done: day })
  const left = step(state(), {
    t: 'prove-giveup',
    statement: { id: S1, method: 'induction' },
    prove,
    day
  })
  assert.deepEqual(left.state.math.proved?.[S1], { seen: day })
  assert.deepEqual(says(left.effects), [
    'Read the published proof. The next statement of the same method takes its place.'
  ])
  const none = step(state(), {
    t: 'prove-giveup',
    statement: { id: S1, method: 'induction' },
    prove: prove.slice(0, 1),
    day
  })
  assert.deepEqual(says(none.effects), ['Read the published proof.'])
})

test('a number-facts sheet: begun in the order its draws give, typed, turned, checked and put away', () => {
  const draws = Array.from({ length: 121 }, () => 0)
  let s = step(state(), { t: 'sheet-begin', op: 'addition', draws, nowMs: 1000, day }).state
  const sheet = s.facts.sheet
  assert.ok(sheet && !sheet.timed && sheet.rows.length === 121)
  assert.notDeepEqual(sheet.rows, factSet('addition'), 'the draws set the order')
  const right = String(sheet.rows[2]?.[1])
  s = step(s, { t: 'sheet-answer', index: 2, value: right, nowMs: 2000 }).state
  assert.deepEqual(s.facts.sheet?.answers, ['', '', right])
  assert.equal(s.facts.sheet?.elapsed, 1000)
  s = step(s, { t: 'sheet-page', page: 1, nowMs: 3000 }).state
  assert.equal(s.facts.sheet?.page, 1)
  const away = step(s, { t: 'sheet-return', nowMs: 900000 }).state
  assert.equal(away.facts.sheet?.at, 900000, 'a return restarts the clock')
  assert.equal(away.facts.sheet?.elapsed, s.facts.sheet?.elapsed)
  const checked = step(s, { t: 'sheet-check', nowMs: 4000, day })
  assert.equal(checked.state.facts.sheet?.result?.errors, 120)
  assert.deepEqual(says(checked.effects), ['120 errors.'])
  assert.equal(checked.state.facts.addition?.misses?.length, 120)
  // A checked sheet is checked once; a returned one keeps its clock.
  assert.equal(step(checked.state, { t: 'sheet-check', nowMs: 5000, day }).state, checked.state)
  assert.equal(step(checked.state, { t: 'sheet-return', nowMs: 5000 }).state, checked.state)
  assert.equal(step(checked.state, { t: 'sheet-done' }).state.facts.sheet, undefined)
  assert.equal(step(checked.state, { t: 'sheet-drop' }).state.facts.sheet, undefined)
})

test('a move on a sheet with none in hand changes nothing', () => {
  const s = state()
  for (const move of /** @type {const} */ ([
    { t: 'sheet-answer', index: 0, value: '1', nowMs: 1 },
    { t: 'sheet-page', page: 1, nowMs: 1 },
    { t: 'sheet-return', nowMs: 1 },
    { t: 'sheet-check', nowMs: 1, day }
  ]))
    assert.equal(step(s, move).state, s)
})

test('a sheet of missed facts drills only those facts', () => {
  const s = state({}, { addition: { misses: ['2 + 3'], missFrom: 'untimed' } })
  const begun = step(s, { t: 'sheet-begin', op: 'addition', draws: [], nowMs: 1, day }).state
  assert.deepEqual(begun.facts.sheet?.rows, [['2 + 3', 5]])
  assert.equal(begun.facts.sheet?.misses, true)
})

test("a shared step's move is handed to the shared step", () => {
  const r = step(state(), { t: 'turn', key: '/p#proofs', at: 1 })
  assert.deepEqual(r.state.math.pages, { '/p#proofs': 1 })
})

test('one stored log of moves replays to its stored state, byte for byte', () => {
  /** @type {import('./session.logic.js').Event[]} */
  const log = JSON.parse(
    readFileSync(
      new URL('../../../../tests/fixtures/arithmetic-replay-log.json', import.meta.url),
      'utf8'
    )
  )
  const expected = readFileSync(
    new URL('../../../../tests/fixtures/arithmetic-replay-state.json', import.meta.url),
    'utf8'
  )
  const end = log.reduce((s, move) => step(s, move).state, state())
  assert.equal(`${JSON.stringify(end, null, 2)}\n`, expected)
})
