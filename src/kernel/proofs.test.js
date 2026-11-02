// Hides: what a test asks of the proof rules every maths unit with proofs keeps (proofs.logic.js),
// against "A Self-Study System" (Mathematics, "Topic finished" and "The proof check").
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { kindId, topicSlug } from './maths-decode.logic.js'
import { decodePractice } from './practice.logic.js'
import { decodeProofs, proofId, statementId } from './proofs-decode.logic.js'
import {
  checkProof,
  methodsLeft,
  openStatements,
  optionalStatement,
  proofTopicState as topicState,
  proofsToday
} from './proofs.logic.js'

const day = '2026-09-24'
const topic = {
  slug: topicSlug('a'),
  bare: true,
  kinds: [
    { id: kindId('k1'), forms: 1 },
    { id: kindId('k2'), forms: 0 }
  ],
  proofs: [proofId('p1')],
  prove: [
    { id: statementId('s1'), method: 'induction' },
    { id: statementId('s2'), method: 'induction' },
    { id: statementId('s3'), method: 'contradiction' }
  ]
}
const base = { retired: { k1: day, k2: day }, proofs: { p1: { read: day, known: true } } }
/** @param {import('./decode.logic.js').JsonRecord} json */
const record = json => ({ ...decodePractice(json), ...decodeProofs(json) })
/** @param {import('./decode.logic.js').JsonRecord} json */
const proved = json => record({ proved: json }).proved
/** @param {import('./decode.logic.js').JsonRecord} json */
const finished = json => topicState(topic, record({ ...base, proved: json })).finished

test('a topic is finished when every kind is retired and every proof is known', () => {
  assert.equal(topicState(topic, record({})).finished, false)
  assert.equal(topicState(topic, record({ ...base, retired: { k1: day } })).finished, false)
  assert.equal(
    topicState(topic, record({ ...base, proofs: { p1: { read: day } } })).finished,
    false
  )
  assert.equal(finished({ s1: { done: day }, s3: { done: day } }), true)
})

test('every method its statements practise needs a proved statement: one of a method is enough', () => {
  assert.equal(finished({ s1: { done: day } }), false, 'contradiction has no proved statement')
  assert.equal(
    finished({ s2: { done: day }, s3: { done: day } }),
    true,
    's1 of the same method need not be proved'
  )
})

test('a statement given up leaves the next of its method in its place; none left closes the method', () => {
  assert.deepEqual(
    openStatements(topic.prove, proved({ s1: { seen: day }, s3: { done: day } })).map(s => s.id),
    ['s2']
  )
  assert.equal(finished({ s1: { seen: day }, s3: { done: day } }), false)
  assert.equal(finished({ s1: { seen: day }, s2: { seen: day }, s3: { done: day } }), true)
  assert.equal(finished({ s1: { done: day }, s3: { seen: day } }), true)
})

test('one proved statement per method finishes it: the others of that method are optional', () => {
  assert.equal(methodsLeft(topic.prove, proved({})), 2)
  assert.equal(methodsLeft(topic.prove, proved({ s1: { done: day } })), 1)
  assert.equal(methodsLeft(topic.prove, proved({ s1: { done: day }, s3: { done: day } })), 0)
  // A statement given up leaves its method open, with the next statement of it in its place.
  assert.equal(methodsLeft(topic.prove, proved({ s1: { seen: day } })), 2)
  const [s1, s2, s3] = topic.prove
  if (!s1 || !s2 || !s3) throw new Error('the topic has three statements')
  assert.equal(optionalStatement(s2, topic.prove, proved({})), false)
  assert.equal(optionalStatement(s2, topic.prove, proved({ s1: { done: day } })), true)
  assert.equal(optionalStatement(s1, topic.prove, proved({ s1: { done: day } })), false)
  assert.equal(optionalStatement(s3, topic.prove, proved({ s1: { done: day } })), false)
})

test('a read proof: checked the next day, then as FSRS dates each check', () => {
  /** @type {import('./proofs-decode.logic.js').ReadProof} */
  let rec = { read: '2026-09-01', checks: [], known: false, wrong: [] }
  const checks = []
  let d = '2026-09-02'
  for (let i = 0; i < 3; i++) {
    rec = checkProof(rec, true, d)
    const last = rec.checks.at(-1)
    assert.ok(last)
    d = last.next
    checks.push(d)
  }
  assert.deepEqual(checks, ['2026-09-09', '2026-10-11', '2027-02-06'])
  assert.equal(rec.known, true)
})

test('a proof is known once a check passes, after a failed one too', () => {
  let rec = checkProof(
    { read: '2026-09-01', checks: [], known: false, wrong: [] },
    false,
    '2026-09-02'
  )
  assert.equal(rec.known, false)
  assert.equal(rec.checks.at(-1)?.next, '2026-09-03')
  rec = checkProof(rec, true, '2026-09-03')
  assert.equal(rec.known, true)
})

test("a proof read today is a part of the open topic taken; a proof's check today is not", () => {
  const read = { read: day, checks: [], known: false, wrong: [] }
  const checked = { read: '2026-09-20', checks: [{ date: day, right: true, next: '2026-10-01' }], known: true, wrong: [] }
  assert.equal(proofsToday(topic, record({ proofs: { p1: read } }), day), true)
  assert.equal(proofsToday(topic, record({ proofs: { p1: checked } }), day), false)
})
