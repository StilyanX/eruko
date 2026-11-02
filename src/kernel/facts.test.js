// The number facts against Mathematics, "The number-facts gate and the calculator".
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  AWAY_MS,
  FACT_KEYS,
  HOUR_MS,
  allFactsPassed,
  decodeFacts,
  missedFacts,
  drillToday,
  factSet,
  factNext,
  factStep,
  factsPassed,
  recordSheet,
  sheetHeld,
  sheetMisses,
  sheetSeconds,
  slowSheet,
  startSheet,
  touchSheet
} from './facts.logic.js'

const day = '2026-09-22'

/**
 * Whether a sheet as stored, beside the facts as stored, is held today.
 * @param {unknown} sheet
 * @param {import('./decode.logic.js').JsonRecord} facts
 * @param {string} today
 */
const held = (sheet, facts, today) => sheetHeld(decodeFacts({ sheet }).sheet, decodeFacts(facts), today)
// Stored sheets from before these fields carry no perMin, and some no seconds: only what the check reads is given.
const partialSheet = (/** @type {{ time: number, errors: number, seconds?: number }} */ t) =>
  /** @type {import('./facts.logic.js').TimedSheet} */ (/** @type {unknown} */ (t))

test('every fact of one operation once, 0 to 10, never dividing by 0', () => {
  assert.equal(factSet('addition').length, 121)
  assert.equal(factSet('multiplication').length, 121)
  assert.equal(factSet('subtraction').length, 121)
  assert.equal(factSet('division').length, 110)
  assert.ok(factSet('division').every(([q]) => !String(q).endsWith('÷ 0')))
  assert.ok(factSet('subtraction').some(([q, a]) => q === '20 − 10' && a === 10))
})

test('facts pass: clean, then the last timed sheet after clean has no errors', () => {
  assert.ok(!factsPassed({ clean: 10, timed: [partialSheet({ time: 5, errors: 0 })] }))
  assert.ok(factsPassed({ clean: 10, timed: [partialSheet({ time: 20, errors: 0 })] }))
  assert.ok(!factsPassed({ clean: 10, timed: [partialSheet({ time: 20, errors: 0 }), partialSheet({ time: 30, errors: 1 })] }))
})

test('facts pass: a timed sheet needs no errors and no more seconds than the clean untimed sheet', () => {
  const rec = { clean: 10, cleanSeconds: 300 }
  assert.ok(factsPassed({ ...rec, timed: [partialSheet({ time: 20, errors: 0, seconds: 300 })] }), 'equal time passes')
  assert.ok(!factsPassed({ ...rec, timed: [partialSheet({ time: 20, errors: 0, seconds: 301 })] }), 'slower fails')
  assert.ok(!factsPassed({ ...rec, timed: [partialSheet({ time: 20, errors: 1, seconds: 100 })] }), 'an error fails')
  assert.ok(factsPassed({ ...rec, timed: [partialSheet({ time: 20, errors: 0, seconds: 301 }), partialSheet({ time: 30, errors: 0, seconds: 250 })] }), 'a second try passes')
  assert.ok(factsPassed({ ...rec, timed: [partialSheet({ time: 20, errors: 0, seconds: 250 }), partialSheet({ time: 30, errors: 0, seconds: 400 })] }), 'a slow clean return keeps the pass')
  assert.ok(factsPassed({ clean: 10, timed: [partialSheet({ time: 20, errors: 0, seconds: 9999 })] }), 'an old record with no untimed seconds has no limit')
  assert.equal(slowSheet({ ...rec, timed: [partialSheet({ time: 20, errors: 0, seconds: 301 })] }), 301, 'a clean slower sheet is named')
  assert.equal(slowSheet({ ...rec, timed: [partialSheet({ time: 20, errors: 1, seconds: 400 })] }), null, 'an error is not a slow sheet')
  assert.equal(slowSheet({ clean: 10, timed: [partialSheet({ time: 20, errors: 0, seconds: 9999 })] }), null, 'no limit, no slow sheet')
})

test('a slow timed sheet does not pass; the untimed seconds are stored with clean', () => {
  /** @type {ReturnType<typeof recordSheet>} */
  let f = {}
  f = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 300, count: 121, nowMs: 1, today: day })
  assert.equal(f.addition?.cleanSeconds, 300)
  f = recordSheet(f, 'addition', { timed: true, errors: 0, seconds: 400, count: 121, nowMs: 2, today: day })
  assert.ok(!factsPassed(f.addition))
  assert.equal(factStep(f, 'addition', day), 'timed')
  f = recordSheet(f, 'addition', { timed: true, errors: 0, seconds: 290, count: 121, nowMs: 3, today: day })
  assert.ok(factsPassed(f.addition))
  assert.equal(f.addition?.returns?.length, 1)
})

test('untimed until clean, then timed; the passing sheet is the first line; a failed return goes back to drill', () => {
  /** @type {ReturnType<typeof recordSheet>} */
  let f = {}
  assert.equal(factStep(f, 'addition', day), 'untimed')
  f = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 300, count: 121, nowMs: 1, today: day })
  assert.equal(factStep(f, 'addition', day), 'timed')
  f = recordSheet(f, 'addition', { timed: true, errors: 0, seconds: 200, count: 121, nowMs: 2, today: day })
  assert.ok(factsPassed(f.addition))
  assert.deepEqual(f.addition?.returns, [{ date: day, right: true, next: '2026-09-23' }])
  assert.equal(factStep(f, 'addition', day), null)
  assert.equal(factStep(f, 'addition', '2026-09-23'), 'return')
  f = recordSheet(f, 'addition', { timed: true, errors: 2, seconds: 200, count: 121, nowMs: 3, today: '2026-09-23' })
  assert.equal(f.addition?.clean, null)
  assert.equal(factStep(f, 'addition', '2026-09-23'), null, 'drill starts again the next day')
  assert.equal(factStep(f, 'addition', '2026-09-24'), 'untimed')
})

test('a slip repeats only its facts: an untimed sheet with errors drills the missed facts, then the timed sheet', () => {
  /** @type {ReturnType<typeof recordSheet>} */
  let f = {}
  f = recordSheet(f, 'addition', { timed: false, errors: 2, seconds: 300, count: 119, nowMs: 1, today: day, missed: ['2 + 3', '9 + 9'] })
  assert.equal(f.addition?.clean, undefined)
  assert.equal(factStep(f, 'addition', day), 'misses')
  assert.deepEqual(missedFacts(f, 'addition'), [['2 + 3', 5], ['9 + 9', 18]])
  // One still wrong: only it comes back.
  f = recordSheet(f, 'addition', { timed: false, errors: 1, seconds: 10, count: 1, nowMs: 2, today: day, missed: ['9 + 9'], drill: true })
  assert.deepEqual(missedFacts(f, 'addition'), [['9 + 9', 18]])
  f = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 5, count: 1, nowMs: 3, today: day, missed: [], drill: true })
  assert.equal(f.addition?.clean, 3)
  assert.equal(f.addition?.cleanSeconds, 300, 'the bar is the full untimed sheet\'s time')
  assert.equal(factStep(f, 'addition', day), 'timed')
  // A timed sheet with errors: its missed facts, then the timed sheet again.
  f = recordSheet(f, 'addition', { timed: true, errors: 1, seconds: 200, count: 120, nowMs: 4, today: day, missed: ['7 + 6'] })
  assert.equal(factStep(f, 'addition', day), 'misses')
  f = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 3, count: 1, nowMs: 5, today: day, missed: [], drill: true })
  assert.equal(factStep(f, 'addition', day), 'timed')
  assert.equal(f.addition?.clean, 3, 'clean is kept')
})

test('a typo on a return retests only that fact the next day; missed again, the operation goes back to drill', () => {
  /** @type {ReturnType<typeof recordSheet>} */
  let f = {}
  f = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 300, count: 121, nowMs: 1, today: day })
  f = recordSheet(f, 'addition', { timed: true, errors: 0, seconds: 200, count: 121, nowMs: 2, today: day })
  const next = '2026-09-23'
  const after = '2026-09-24'
  f = recordSheet(f, 'addition', { timed: true, errors: 1, seconds: 200, count: 120, nowMs: 3, today: next, missed: ['4 + 4'] })
  assert.ok(factsPassed(f.addition), 'a slip keeps the pass while it is retested')
  assert.equal(f.addition?.returns?.length, 1, 'no line until the retest')
  assert.equal(factStep(f, 'addition', next), null, 'not retested the day it was missed')
  assert.equal(factNext(f.addition), after, 'due the next day')
  assert.equal(factStep(f, 'addition', after), 'misses')
  const kept = recordSheet(f, 'addition', { timed: false, errors: 0, seconds: 2, count: 1, nowMs: 4, today: after, missed: [], drill: true })
  assert.ok(factsPassed(kept.addition))
  assert.equal(kept.addition?.returns?.at(-1)?.right, true)
  assert.equal(kept.addition?.returns?.at(-1)?.date, after, 'the line is written on the retest day')
  assert.equal(kept.addition?.missDay, undefined)
  assert.equal(factStep(kept, 'addition', after), null)
  const lost = recordSheet(f, 'addition', { timed: false, errors: 1, seconds: 2, count: 0, nowMs: 4, today: after, missed: ['4 + 4'], drill: true })
  assert.equal(lost.addition?.clean, null)
  assert.equal(lost.addition?.returns?.at(-1)?.right, false)
  assert.equal(factStep(lost, 'addition', after), null, 'drill starts again the next day')
  assert.equal(factStep(lost, 'addition', '2026-09-25'), 'untimed')
})

test('a sheet of missed facts is held only while those facts are still to drill', () => {
  const at = new Date(2026, 8, 22, 12).getTime()
  const facts = { addition: { misses: ['2 + 3'], missFrom: 'untimed' } }
  const sheet = startSheet('addition', false, missedFacts(decodeFacts(facts), 'addition'), at, true)
  assert.ok(held(sheet, facts, day))
  assert.ok(!held(sheet, {}, day), 'nothing left to drill')
  assert.ok(!held({ ...sheet, rows: factSet('addition') }, facts, day), 'the full set is not the missed facts')
  const checked = { ...sheet, result: { errors: 0, seconds: 2, last: null } }
  assert.ok(held(checked, {}, day), 'once checked, it shows its result on its day')
  assert.ok(!held({ ...checked, rows: [['2 + 3', 9]] }, {}, day), 'a checked sheet still holds facts of its operation')
})

test('drill: an hour of work closes the other operations for the day', () => {
  let f = recordSheet({}, 'addition', { timed: false, errors: 3, seconds: HOUR_MS / 1000, count: 121, nowMs: 1, today: day })
  assert.equal(factStep(f, 'subtraction', day), null)
  assert.equal(factStep(f, 'subtraction', '2026-09-23'), 'untimed')
})

test('a sheet in hand: time worked counts a pause over a minute as a minute', () => {
  let s = startSheet('addition', true, factSet('addition'), 0)
  s = touchSheet(s, 10000)
  s = touchSheet(s, 20000)
  assert.equal(sheetSeconds(s, 20000), 20)
  s = touchSheet(s, 20000 + 3 * 3600000) // three hours away
  assert.equal(s.elapsed, 20000 + AWAY_MS)
  assert.equal(sheetSeconds(s, s.at), 80)
  assert.equal(touchSheet(s, s.at - 5).elapsed, s.elapsed, 'a clock set back adds nothing')
})

test('a stored sheet is held only when whole and still open to its operation', () => {
  const at = new Date(2026, 8, 22, 12).getTime()
  const rows = factSet('addition')
  const sheet = startSheet('addition', false, rows, at)
  assert.ok(held(sheet, {}, day))
  assert.ok(!held(null, {}, day))
  assert.ok(!held({ ...sheet, rows: rows.slice(1) }, {}, day), 'a fact missing')
  assert.ok(!held({ ...sheet, rows: [...rows.slice(1), rows[1]] }, {}, day), 'a fact twice')
  assert.ok(!held({ ...sheet, rows: rows.map(([q]) => [q, 99]) }, {}, day), 'a wrong answer stored')
  assert.ok(!held({ ...sheet, rows: [...rows.slice(1), 'x'] }, {}, day), 'a row not a fact')
  assert.ok(!held({ ...sheet, op: 'cheating' }, {}, day))
  assert.ok(!held({ ...sheet, page: 11 }, {}, day), 'a page past the end')
  assert.ok(!held({ ...sheet, page: -1 }, {}, day), 'a page before the start')
  assert.ok(!held({ ...sheet, at: 'x' }, {}, day))
  assert.ok(!held({ ...sheet, timed: true }, {}, day), 'untimed work is not open as timed')
  assert.ok(held({ ...sheet, timed: true }, { addition: { clean: 1 } }, day))
  const passed = { clean: 1, timed: [{ time: 2, errors: 0 }], returns: [{ date: '2026-09-20', right: true, next: '2026-09-21' }] }
  assert.ok(held({ ...sheet, timed: true }, { addition: passed }, day), 'a return sheet is timed')
  assert.ok(!held(sheet, { addition: passed }, day), 'a passed operation has no untimed sheet')
  const checked = { ...sheet, result: { errors: 1, seconds: 3, last: null } }
  assert.ok(held(checked, { addition: passed }, day), 'a result shows on its day')
  assert.ok(!held(checked, { addition: passed }, '2026-09-23'), 'and not the next')
  // oxlint-disable-next-line no-sparse-arrays -- the hole is what this test is about
  assert.ok(held({ ...sheet, answers: [null, , '3'] }, {}, day), 'holes from a saved record')
})

test('the facts as stored: a field not of its shape reads as not there', () => {
  const f = decodeFacts({
    addition: {
      clean: 5,
      cleanSeconds: 'x',
      untimedSeconds: 30,
      timed: [{ time: 6, errors: 0, seconds: 20, perMin: 3, slip: true }, { time: 'x' }],
      returns: [{ date: day, right: true, next: day }, 4],
      failed: day,
      misses: ['2 + 3', 5],
      missFrom: 'return',
      missDay: day
    },
    subtraction: { clean: null, missFrom: 'nowhere' },
    multiplication: 'x',
    spent: { day, seconds: 'x' },
    sheet: { op: 'addition', rows: [], answers: [], page: 0, elapsed: 0, at: 1, result: { errors: 'x' } }
  })
  assert.deepEqual(f.addition, {
    clean: 5,
    untimedSeconds: 30,
    timed: [{ time: 6, errors: 0, seconds: 20, perMin: 3, slip: true }],
    returns: [{ date: day, right: true, next: day }],
    failed: day,
    misses: ['2 + 3'],
    missFrom: 'return',
    missDay: day
  })
  assert.deepEqual(f.subtraction, { clean: null })
  assert.equal(f.multiplication, undefined)
  assert.equal(f.spent, undefined)
  assert.equal(f.sheet?.result, undefined)
  assert.deepEqual(decodeFacts({ spent: { day, seconds: 60 } }).spent, { day, seconds: 60 })
  assert.equal(decodeFacts({ sheet: { op: 'addition', rows: [], answers: [], page: 0, elapsed: 'x', at: 1 } }).sheet, undefined)
})

test('the sample sheets an older Review page put in the record read as not there', () => {
  const f = decodeFacts({ sample: ['addition'], addition: { clean: 1 }, subtraction: { clean: 2 } })
  assert.equal(f.addition, undefined)
  assert.deepEqual(f.subtraction, { clean: 2 })
  assert.ok('sample' in f && f.sample === undefined, 'the next write drops the sample')
})

test('misses: only the digits of the stored answer are right; a blank, a hole and a null are wrong', () => {
  /** @type {import('./facts.logic.js').Fact[]} */
  const rows = [['2 + 3', 5], ['0 + 0', 0], ['9 − 9', 0], ['10 × 10', 100], ['1 + 0', 1]]
  // a null answer, as a saved record can hold one: passed deliberately although the type says string
  const answers = /** @type {string[]} */ (/** @type {unknown} */ (['5', '0', '', '1e2', null]))
  assert.deepEqual(sheetMisses(rows, answers), [[2, '9 − 9', 0], [3, '10 × 10', 100], [4, '1 + 0', 1]])
  assert.deepEqual(sheetMisses(rows, ['5', '0', '0', '100', '1']), [])
  assert.deepEqual(sheetMisses(rows, ['5', '0', '0', '100']).length, 1, 'a short list leaves the last blank')
  assert.deepEqual(sheetMisses(rows, [' 5 ', '00', '0', '100', '+1']).map(m => m[0]), [4], '+1 is not digits')
})

test('the sheets still to pass today: not passed, not failed today, under the day\'s hour', () => {
  const one = { clean: 1, timed: [partialSheet({ time: 2, errors: 0 })] }
  /** @type {(import('./facts.logic.js').FactsRecord | undefined)[]} */
  const cases = [
    undefined,
    {},
    { addition: one },
    { addition: one, subtraction: { clean: 5 } },
    { addition: { failed: day }, division: { clean: 5, failed: '2026-09-21' } },
    { spent: { day, seconds: 3600 } },
    { spent: { day: '2026-09-21', seconds: 3600 }, multiplication: one }
  ]
  assert.deepEqual(cases.map(f => drillToday(f, day)), [4, 4, 3, 3, 3, 0, 3])
  const passed = Object.fromEntries(FACT_KEYS.map(k => [k, one]))
  assert.ok(allFactsPassed(passed))
  assert.ok(!allFactsPassed({ ...passed, division: { clean: 1 } }))
  assert.ok(!allFactsPassed(undefined))
})

test('a slow sheet is one after a clean untimed sheet: after a clean of null, no timed sheet is slow', () => {
  const timed = [partialSheet({ time: 20, errors: 0, seconds: 400 })]
  assert.equal(slowSheet({ clean: null, cleanSeconds: 300, timed }), null, 'a return missed again cleared clean')
  assert.equal(slowSheet({ cleanSeconds: 300, timed }), null)
  assert.equal(slowSheet({ clean: 10, cleanSeconds: 300, timed }), 400)
  assert.equal(slowSheet({ clean: 10, cleanSeconds: 300, timed: [partialSheet({ time: 20, errors: 0 })] }), null, 'a sheet with no seconds kept')
})
