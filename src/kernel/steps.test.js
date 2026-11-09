// Step 1 as rules over the record: the fading stages, the problem each runs on, what an answer
// does next, and the calculator line.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { InvariantError } from './invariant.logic.js'
import { kindId } from './maths-decode.logic.js'
import { START } from './practice.logic.js'
import { afterAnswer, calculator, freshProblem, hidden, kindFacts, stageProblem } from './steps.logic.js'
import { bank as bankOf, kind as kindOf, practice } from '../../tests/lib/maths-content.mjs'

const fade = (/** @type {string} */ n) => ({ prompt: `fade ${n}`, form: '', answer: '', lines: [] })
const kind = kindOf('t1-k1', [
  [fade('a1'), fade('a2'), fade('a3')],
  [fade('b1'), fade('b2'), fade('b3')]
])
const bank = bankOf([
  { id: 't1-k1-p01', kind: 't1-k1' }, { id: 't1-k1-p02', kind: 't1-k1' }, { id: 't1-k2-p01', kind: 't1-k2' }
])
const facts = kindFacts(kind, bank)

test('a stage hides lines from the end: one, then two, then every line', () => {
  assert.deepEqual(/** @type {const} */ ([1, 2, 3, 4]).map(s => hidden(s, 5)), [0, 1, 2, 5])
})

test('a kind\'s facts: its fading problems per form, its bank problems, and whether it is Yes or No', () => {
  assert.deepEqual(facts, { id: 't1-k1', fades: [3, 3], problems: ['t1-k1-p01', 't1-k1-p02'], twice: false })
})

test('fresh problems: the form\'s three fading problems in order, then the kind\'s never-tried bank problems, stored as used', () => {
  assert.deepEqual(freshProblem(facts, START, practice({})), { id: 'fade-0-0', next: 1 })
  assert.equal(freshProblem(facts, { form: 1, next: 2 }, practice({})).id, 'fade-1-2')
  assert.deepEqual(freshProblem(facts, { form: 0, next: 3 }, practice({})), { id: 't1-k1-p01', next: 3, used: 't1-k1-p01' })
  assert.equal(freshProblem(facts, { form: 0, next: 3 }, practice({ used: ['t1-k1-p01'] })).id, 't1-k1-p02')
  assert.equal(freshProblem(facts, { form: 0, next: 3 }, practice({ list: { 't1-k1-p01': [{ date: 'x', right: true, next: 'x' }] } })).id, 't1-k1-p02')
  // Every bank problem of the kind used: one is taken again, never a problem of another kind.
  assert.equal(freshProblem(facts, { form: 0, next: 3 }, practice({ used: ['t1-k1-p01', 't1-k1-p02'] })).id, 't1-k1-p01')
})

test('a fresh problem for a form the kind lacks, or a kind with no bank problem, is a broken course', () => {
  assert.throws(() => freshProblem(facts, { form: 2, next: 0 }, practice({})), InvariantError)
  assert.throws(() => freshProblem({ ...facts, problems: [] }, { form: 0, next: 3 }, practice({})), InvariantError)
})

test('the problem a stage runs on is the one it stored', () => {
  assert.equal(stageProblem(kind, { form: 1, problem: 'fade-1-2' }, bank), kind.forms[1]?.fade[2])
  assert.equal(stageProblem(kind, { form: 0, problem: 't1-k1-p02' }, bank), bank[1])
  assert.equal(stageProblem(kind, { form: 0, problem: null }, bank), kind.forms[0]?.fade[0])
  assert.equal(stageProblem(kind, { form: 5, problem: null }, bank), undefined)
})

test('after an answer: right or wrong at a hidden line goes on a stage; wrong alone goes back to two hidden lines', () => {
  assert.deepEqual(afterAnswer({ form: 0, stage: 2 }, true, 2), { t: 'stage', stage: 3, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 2 }, false, 2), { t: 'stage', stage: 3, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 3 }, true, 2), { t: 'stage', stage: 4, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 3 }, false, 2), { t: 'stage', stage: 4, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 4 }, false, 2), { t: 'stage', stage: 3, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 1 }, false, 2), { t: 'stage', stage: 2, streak: 0 })
})

test('one alone-solve opens the next form\'s example, and on the last form retires the kind', () => {
  assert.deepEqual(afterAnswer({ form: 0, stage: 4 }, true, 2), { t: 'form', form: 1 })
  assert.deepEqual(afterAnswer({ form: 1, stage: 4 }, true, 2), { t: 'retire' })
  assert.deepEqual(afterAnswer({ form: 0, stage: 4 }, true, 1), { t: 'retire' })
})

test('the calculator line: the problem\'s own mark alone, whatever the number facts', () => {
  assert.equal(calculator({ calc: 'no' }), 'Calculator: no.')
  assert.equal(calculator({ calc: 'yes' }), 'Calculator: yes.')
})

test('a Yes/No kind retires only after two fresh alone-solves right in a row; a wrong one starts the count again', () => {
  assert.deepEqual(afterAnswer({ form: 1, stage: 4 }, true, 2, true), { t: 'stage', stage: 4, streak: 1 })
  assert.deepEqual(afterAnswer({ form: 1, stage: 4, streak: 1 }, true, 2, true), { t: 'retire' })
  assert.deepEqual(afterAnswer({ form: 1, stage: 4, streak: 1 }, false, 2, true), { t: 'stage', stage: 3, streak: 0 })
  assert.deepEqual(afterAnswer({ form: 0, stage: 4 }, true, 2, true), { t: 'form', form: 1 }, 'an earlier form still opens the next')
  assert.equal(kindFacts({ id: kindId('y'), forms: [] }, bankOf([{ id: 'y1', kind: 'y', answer: 'Yes' }])).twice, true)
})
