// An Algebra session as one pure step: the shared steps' moves and the proofs' moves handed on, and
// the end level's moves held until every topic is finished.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { proofId } from '../../../kernel/proofs-decode.logic.js'
import { decodeAlgebra } from './decode.logic.js'
import { step } from './session.logic.js'

const state = () => ({ algebra: decodeAlgebra({}) })

test("a shared step's move is handed to the shared step", () => {
  assert.deepEqual(step(state(), { t: 'turn', key: '/a#al-ideas', at: 1 }).state.algebra.pages, { '/a#al-ideas': 1 })
})

test("a proof's move is handed to the proofs' step, and the record reads back as stored", () => {
  const id = proofId('t1-proof-1')
  const read = step(state(), { t: 'proof-line', proof: id, right: true }).state.algebra
  assert.deepEqual(read.proofs?.[id], { reading: { line: 1, wrong: [] } })
  assert.deepEqual(decodeAlgebra(JSON.parse(JSON.stringify(read))).proofs, read.proofs)
})

test("a sitting of the end level does not begin while a topic is unfinished", () => {
  const s = state()
  assert.deepEqual(step(s, { t: 'end-begin', day: '2027-03-01', nowMs: 1 }).state.algebra, s.algebra)
})
