// Hides: what a test asks of the way on Arithmetic's unit page reads from its record (unit.logic.js),
// against "A Self-Study System" (Mathematics, "The one next action", case 7 · Nothing left).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { addDays } from '../../../kernel/days.logic.js'
import { continueOf } from '../../../shell/unit-view.js'
import { UNIT } from './entry.logic.js'
import { LINES } from './end-lines.logic.js'
import { endGate, unit } from './unit.logic.js'

const today = '2026-11-07'
const tomorrow = addDays(today, 1)
const later = addDays(today, 5)
const right = [{ date: addDays(today, -1), right: true, next: later }]
const sheet = {
  clean: Date.parse(`${addDays(today, -12)}T11:00:00`),
  cleanSeconds: 300,
  timed: [{ time: Date.parse(`${addDays(today, -11)}T12:00:00`), seconds: 280, perMin: 26, errors: 0 }],
  returns: right
}

test("Continue says Nothing left while the open topic waits only for a proof check, and names the check's day", () => {
  // Place value finished; Laws of addition: every kind retired, its proof read with its check due
  // tomorrow, its statement proved. Every facts sheet passed, nothing due today.
  const kinds = ['t1-k1', 't1-k2', 't1-k3', 't2-k1', 't2-k2']
  const math = {
    retired: Object.fromEntries(kinds.map(k => [k, addDays(today, -3)])),
    list: Object.fromEntries(kinds.map(k => [k, right])),
    proofs: {
      't2-p1': { read: addDays(today, -1), checks: [{ date: addDays(today, -1), right: false, next: tomorrow }], known: false, wrong: [1] }
    },
    proved: { 't2-s1': { done: addDays(today, -2) } }
  }
  const facts = { addition: sheet, subtraction: sheet, multiplication: sheet, division: sheet }
  // The end level's Facts and Sums, open on their sets, stand passed.
  const line = { clean: 1, cleanMs: 0, timed: [{ time: 2, ms: 0, errors: 0, pass: true }], returns: right }
  const r = { math: { ...math, end: { lines: { facts: line, sums: line } } }, facts }
  assert.equal(unit.finished(r).has('laws-of-addition-and-multiplication'), false, 'the topic stays open')
  assert.equal(continueOf(unit, UNIT, r, today), null, 'Nothing left.')
  const back = unit
    .dated(r, today)
    .flatMap(g => g.dates)
    .filter(d => d > today)
    .sort()[0]
  assert.equal(back, tomorrow, 'the next item comes back tomorrow')
  // The day the check falls due, Continue names it, and the next topic still does not open.
  assert.match(continueOf(unit, UNIT, r, tomorrow)?.to ?? '', /\/laws-of-addition-and-multiplication\?item=t2-p1#/)
})

test('the end level: every section a line opens on is a section of the course', () => {
  const titles = new Set((UNIT.sections ?? []).map(s => s.title))
  for (const l of LINES) if ('section' in l.opens) assert.ok(titles.has(l.opens.section), l.id)
})

test('the end level on the dated list: its returns beside the number facts, its line in hand after mixed practice and held as it is', () => {
  const facts = { addition: sheet, subtraction: sheet, multiplication: sheet, division: sheet }
  const due = { clean: 1, cleanMs: 0, timed: [{ time: 2, ms: 0, errors: 0, pass: true }], returns: [{ date: addDays(today, -1), right: true, next: today }] }
  const r = { math: { end: { lines: { facts: due } } }, facts }
  const groups = unit.dated(r, today)
  assert.deepEqual(
    groups.slice(0, 4).map(g => [g.one, g.dates.length, g.fresh ?? 0, g.hold ?? false]),
    [
      ['number-facts sheet', 4, 0, false],
      ['end-level sheet', 1, 0, false],
      ['problem', 0, 0, true],
      ['end-level line', 0, 1, true]
    ]
  )
  assert.equal(endGate(r, today).left, 3600)
  // The Facts check due today comes first, before the open topic.
  assert.match(continueOf(unit, UNIT, r, today)?.to ?? '', /\/end-level$/)
})
