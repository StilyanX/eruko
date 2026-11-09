// The wording of the Go unit's material ("A Self-Study System", Go, The wording, and The wording
// of the material): the four result words; coordinates in one form; each term defined once; no
// difficulty labels, praise, hedging, "any", Japanese words or synonym for a result word; a loss in
// points at one decimal.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINDS, PARTS } from '../src/units/go/core/course.gen.js'
import { PROBLEMS } from '../src/units/go/content/problems.gen.js'
import { RULES_ITEMS } from '../src/units/go/content/rules-items.gen.js'
import { RESULT_WORDS } from '../src/units/go/core/next.logic.js'
import { REASONS } from '../src/units/go/core/reasons.logic.js'
import { points } from '../src/units/go/core/review.logic.js'

const BANNED = /\b(any|easy|simple|hard|difficult|tricky|clearly|obviously|trivially|well done|nice|great|let's|we|usually|might|maybe|alive|killed|unsettled|living dead)\b/i
const text = [
  ...PROBLEMS.flatMap(p => [p.ko ?? '']),
  ...RULES_ITEMS.flatMap(i => [...i.cases.map(c => c.question), i.rule]),
  ...KINDS.map(k => k.name),
  ...PARTS.map(p => p.name),
  ...REASONS.map(([, clause]) => clause ?? '')
]

test('the four results are lives, dies, ko and seki, in lower case', () => {
  assert.deepEqual(RESULT_WORDS, ['lives', 'dies', 'ko', 'seki'])
  for (const p of PROBLEMS) assert.ok(RESULT_WORDS.includes(p.result))
})

test('no difficulty label, praise, hedge, "any" or synonym for a result word stands in the material', () => {
  for (const p of PROBLEMS) assert.ok(p.ko, p.id)
  for (const t of text) assert.ok(!BANNED.test(t.replace(/living and dead groups/, '')), t)
})

test('a kind is named in English, the first kinds by what their solutions do and the rest as fights by number; no Japanese word', () => {
  for (const k of KINDS)
    assert.match(k.name, k.source === 'aether' ? /^[a-z][a-z, ]+$/ : /^fight \d+$/, k.name)
  for (const t of text) assert.ok(!/\b(tsumego|oiotoshi|geta|shicho|semeai|tesuji|joseki|hane|dame)\b/i.test(t), t)
})

test('coordinates take one form: a capital letter A to T without I and a number, no space', () => {
  for (const p of PROBLEMS)
    for (const at of [...p.black, ...p.white, ...p.answers, p.group.at, ...p.solution.lines.flatMap(l => l.moves.map(m => m.at)).filter(/** @param {string | null} a @returns {a is string} */ a => Boolean(a))])
      assert.match(at, /^[A-HJ-T]([1-9]|1[0-9])$/, `${p.id} ${at}`)
  for (const c of RULES_ITEMS.flatMap(i => i.cases)) assert.ok(!/\b[a-hj-t]\d\b/.test(c.question), c.question)
})

test('ko and atari are each defined in exactly one rules item', () => {
  const rules = RULES_ITEMS.map(i => i.rule)
  assert.equal(rules.filter(r => r.startsWith('Ko: ')).length, 1)
  assert.equal(rules.filter(r => r.startsWith('Atari: ')).length, 1)
})

test('points show one decimal place, and zero shows 0.0', () => {
  assert.equal(points(2.14), '2.1')
  assert.equal(points(0), '0.0')
  assert.equal(points(5.36), '5.4')
})
