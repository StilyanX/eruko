// The rules items ("A Self-Study System", Go, Start and The material, Rules item; The build, Go,
// Rules program): the rules program is checked against Tromp's definition of the score on every
// stored position before an item is shown; an item is a rule with its cases, each case one
// question with one exact answer that the rule decides.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PARTS } from '../src/units/go/core/course.gen.js'
import { RULES_ITEMS } from '../src/units/go/content/rules-items.gen.js'
import { boardOf } from '../src/units/go/core/diagram.logic.js'
import { areaScore } from '../src/units/go/core/rules.logic.js'
import { trompScore } from '../src/units/go/core/tromp.logic.js'

// every case, with its item's id and rule
const CASES = RULES_ITEMS.flatMap(i => i.cases.map(c => ({ ...c, id: i.id, rule: i.rule })))

const tromp = (/** @type {import('../src/units/go/core/rules.logic.js').Board} */ b) => trompScore(b.w, b.h, (/** @type {number} */ x, /** @type {number} */ y) => b.cells[y * b.w + x] ?? 0)

test('the rules program and Tromp\'s definition give the same score on every stored position', () => {
  assert.ok(CASES.length >= 25)
  for (const { id, position } of CASES) {
    const { board } = boardOf(position)
    const mine = areaScore(board)
    assert.deepEqual({ black: mine.black, white: mine.white }, tromp(board), id)
  }
})

test('five parts, each item in one part, answered in order', () => {
  assert.equal(PARTS.length, 5)
  assert.deepEqual(PARTS.flatMap(p => p.items), RULES_ITEMS.map(i => i.id))
  for (const p of PARTS) {
    assert.ok(p.items.length >= 1, p.name)
    for (const id of p.items) assert.equal(RULES_ITEMS.find(i => i.id === id)?.part, p.n)
    assert.deepEqual(p.cases, p.items.map(id => RULES_ITEMS.find(i => i.id === id)?.cases.length))
  }
})

test('the positions decided by one rule are one item, its cases; no two items of a part share a rule', () => {
  for (const p of PARTS) {
    const rules = RULES_ITEMS.filter(i => i.part === p.n).map(i => i.rule)
    assert.equal(new Set(rules).size, rules.length, p.name)
  }
  const adjacent = RULES_ITEMS.find(i => i.rule.startsWith('Two points are next to each other'))
  assert.equal(adjacent?.cases.length, 3)
})

test('an item asks for one of three things: legal or not, the stones removed, or a number', () => {
  for (const item of CASES) {
    const { question, answer } = item
    if (question.endsWith('Is it legal? Type yes or no.')) assert.match(answer, /^(yes|no)$/, item.id)
    else if (question.endsWith('Which stones does the move remove? Type their points, or none.')) assert.match(answer, /^(none|[A-HJ-T]\d+( [A-HJ-T]\d+)*)$/, item.id)
    else {
      assert.ok(question.endsWith('Type a number.'), item.id)
      assert.match(answer, /^\d+$/, item.id)
    }
    // the rule is one plain sentence, never printed under the question
    assert.match(item.rule, /^[A-Z][^.!?]*\.$/, item.id)
    assert.ok(!question.includes(item.rule), item.id)
  }
})

test('the area items count what the paper\'s own words give', () => {
  const area = CASES.filter(i => i.question.includes('area count'))
  assert.ok(area.length >= 5)
  // R5.1: a fence down the board, Black's five stones and the five points behind them
  assert.equal(area[0]?.answer, '10')
  // an empty point that reaches both colours counts for neither side
  const shared = RULES_ITEMS.find(i => i.rule.includes('counts for neither side'))
  assert.ok(shared)
  const [first] = shared.cases
  assert.ok(first)
  const { board } = boardOf(first.position)
  const s = areaScore(board)
  assert.ok(s.black + s.white < board.w * board.h)
})
