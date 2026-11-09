// Arithmetic's end level run by the number-facts gate (src/units/arithmetic/core/end-level.logic.js)
// against Mathematics, "The end level": the untimed sheet, the misses, the timed sheet that passes
// with no errors, no slower and inside the line's bar, returns decided on errors alone, the clock
// on each problem, the retyping, and Opens, In hand and Block: the lines opened by the number-facts
// sets and the sections, one line drilled at a time in what the gate's block leaves. Driven through endStep with set times.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { allowanceSum } from './end-draw.logic.js'
import { LINE_IDS, allowanceOf, answersOf, entriesOf } from './end-lines.logic.js'
import {
  decodeEnd,
  drillLines,
  endStep,
  gateOf,
  lineBars,
  lineInHand,
  lineNext,
  linePassed,
  lineStep,
  problemTimes,
  startSheet
} from './end-level.logic.js'

/** Every line open and the whole hour left. @type {import('./end-level.logic.js').Gate} */
const all = { open: LINE_IDS, left: 3600 }

const day = '2026-10-01'
const day2 = '2026-10-02'
const day3 = '2026-10-03'
const day4 = '2026-10-04'

/** A line passed long ago, due far ahead. @type {import('./end-level.logic.js').LineRecord} */
const passed = {
  clean: 1,
  cleanMs: 0,
  timed: [{ time: 2, ms: 0, errors: 0, pass: true }],
  returns: [{ date: '2026-01-01', right: true, next: '2099-01-01' }]
}

/**
 * Every line before `id` passed.
 * @param {import('./end-lines.logic.js').LineId} id
 * @returns {Partial<Record<import('./end-lines.logic.js').LineId, import('./end-level.logic.js').LineRecord>>}
 */
const before = id => Object.fromEntries(LINE_IDS.slice(0, LINE_IDS.indexOf(id)).map(l => [l, passed]))

/** @param {import('./end-lines.logic.js').LineId} line @param {readonly number[]} p */
const answers = (line, p) => answersOf(line, p).map(a => a.replace(/^within \S+ of /, ''))

/**
 * Works the sheet in hand to its check: each entry typed and entered `per` ms after the last key,
 * the problems at the places in `wrong` typed wrong, then each entry retyped `retypeMs` apart.
 * @param {import('./end-level.logic.js').EndRecord} end
 * @param {{ at: number, today: string, per?: number, wrong?: number[], retypeMs?: number }} o
 */
function work(end, { at, today, per = 1000, wrong = [], retypeMs = 0 }) {
  let moves = { enter: 0, retype: 0 }
  while (end.sheet && !end.sheet.result) {
    const s = end.sheet
    if (s.phase === 'work' && s.reveal) {
      end = endStep(end, { t: 'end-next', nowMs: at, day: today })
    } else if (s.phase === 'work') {
      const p = s.problems[s.i] ?? []
      const value = wrong.includes(s.i) && s.j === 0 ? 'x' : (answers(s.line, p)[s.j] ?? '')
      at += per
      end = endStep(end, { t: 'end-type', value, nowMs: at })
      end = endStep(end, { t: 'end-enter', nowMs: at, day: today })
      moves.enter++
    } else {
      at += retypeMs
      end = endStep(end, { t: 'end-retype', value: s.typed[s.ri]?.[s.rj] ?? '', nowMs: at, day: today })
      moves.retype++
    }
  }
  return { end, at, moves }
}

/**
 * Begins the line in hand and works it.
 * @param {import('./end-level.logic.js').EndRecord} end
 * @param {{ at: number, today: string, seed?: number, per?: number, wrong?: number[], retypeMs?: number }} o
 */
function sheet(end, o) {
  const begun = endStep(end, { t: 'end-begin', seed: o.seed ?? 1, nowMs: o.at, day: o.today, gate: all })
  return work(begun, o).end
}

test('damaged input reads as not there', () => {
  assert.deepEqual(decodeEnd(null), {})
  assert.deepEqual(decodeEnd('x'), {})
  assert.deepEqual(
    decodeEnd({
      lines: { facts: { clean: 'x', timed: [{ time: 1 }, 3], misses: [[1.5]], missFrom: 'later' }, nope: { clean: 1 } },
      spent: { day: 1, seconds: 3 },
      sheet: { line: 'nope' }
    }),
    { lines: { facts: { timed: [] } } }
  )
})

test('a record worked through a pass reads back as written', () => {
  let end = sheet({ lines: before('primes') }, { at: 0, today: day, wrong: [0] })
  end = sheet(end, { at: 100000, today: day })
  assert.deepEqual(decodeEnd(JSON.parse(JSON.stringify(end))), end)
})

test('the line in hand is the first in order with a sheet', () => {
  assert.deepEqual(lineInHand({}, day, all), { line: 'facts', kind: 'untimed' })
  assert.deepEqual(lineInHand({ lines: before('estimates') }, day, all), { line: 'estimates', kind: 'untimed' })
  assert.equal(lineInHand({ lines: Object.fromEntries(LINE_IDS.map(l => [l, passed])) }, day, all), null)
})

test('the day\'s drill block is 3,600 s; a return due is still offered', () => {
  assert.deepEqual(lineInHand({ spent: { day, seconds: 3599 } }, day, all), { line: 'facts', kind: 'untimed' })
  assert.equal(lineInHand({ spent: { day, seconds: 3600 } }, day, all), null)
  assert.deepEqual(lineInHand({ spent: { day: day2, seconds: 3600 } }, day, all), { line: 'facts', kind: 'untimed' })
  const due = { lines: { facts: { ...passed, returns: [{ date: day, right: true, next: day2 }] } }, spent: { day: day2, seconds: 3600 } }
  assert.deepEqual(lineInHand(due, day2, all), { line: 'facts', kind: 'return' })
})

test('untimed with a miss, the misses until right, then a timed sheet as fast passes: the first dated line', () => {
  let end = sheet({ lines: before('primes') }, { at: 0, today: day, wrong: [0] })
  let rec = end.lines?.primes
  assert.equal(end.sheet?.result?.errors, 1)
  assert.equal(rec?.untimedMs, 11000)
  assert.equal(rec?.clean, undefined)
  assert.equal(rec?.missFrom, 'untimed')
  assert.equal(rec?.misses?.length, 1)
  assert.deepEqual(lineInHand(end, day, all), { line: 'primes', kind: 'misses' })

  end = sheet(end, { at: 100000, today: day, wrong: [0] })
  assert.deepEqual(lineInHand(end, day, all), { line: 'primes', kind: 'misses' }, 'a missed miss comes again')
  end = sheet(end, { at: 200000, today: day, per: 500 })
  rec = end.lines?.primes
  assert.equal(rec?.clean, 200500)
  assert.equal(rec?.cleanMs, 11000, 'the untimed sheet\'s time stays the bar')
  assert.equal(rec?.misses, undefined)
  assert.deepEqual(lineInHand(end, day, all), { line: 'primes', kind: 'timed' })

  end = sheet(end, { at: 300000, today: day })
  rec = end.lines?.primes
  assert.equal(end.sheet?.result?.passed, true)
  assert.equal(end.sheet?.result?.bar, 11000)
  assert.deepEqual(rec?.returns, [{ date: day, right: true, next: day2 }])
  assert.ok(linePassed(rec))
  assert.deepEqual(lineInHand(end, day, all), { line: 'squares', kind: 'untimed' })
})

test('a timed sheet with an error, or slower than the untimed one, does not pass', () => {
  const clean = sheet({ lines: before('primes') }, { at: 0, today: day })
  assert.ok(clean.lines?.primes?.clean, 'an untimed sheet all right is clean at once')
  const wrong = sheet(clean, { at: 100000, today: day, wrong: [3] })
  assert.equal(wrong.sheet?.result?.passed, false)
  assert.equal(wrong.lines?.primes?.returns, undefined)
  const slow = sheet(clean, { at: 100000, today: day, per: 1001 })
  assert.equal(slow.sheet?.result?.passed, false)
  assert.ok(slow.sheet?.result?.bars.every(b => b.ok), 'only the untimed time failed it')
  assert.deepEqual(lineInHand(slow, day, all), { line: 'primes', kind: 'timed' })
})

test('a timed sheet as fast as the untimed one but over the line\'s pace does not pass', () => {
  const clean = sheet({ lines: before('primes') }, { at: 0, today: day, per: 1400 })
  const over = sheet(clean, { at: 100000, today: day, per: 1300 })
  assert.equal(over.sheet?.result?.passed, false)
  assert.deepEqual(over.sheet?.result?.bars.map(b => b.ok), [false, false])
  assert.deepEqual(lineInHand(over, day, all), { line: 'primes', kind: 'timed' })
  const atStep = sheet(over, { at: 200000, today: day, per: 1260 })
  assert.equal(atStep.sheet?.result?.passed, true)
})

test('a generated line\'s first timed sheet is the one drawn with the untimed; after a failed bar the next has the pass\'s sum', () => {
  let end = endStep({ lines: before('factoring') }, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
  const drawn = end.lines?.factoring
  const sum = drawn?.sum ?? 0
  assert.equal(allowanceSum('factoring', end.sheet?.problems ?? []), sum)
  assert.equal(allowanceSum('factoring', drawn?.next ?? []), sum)
  assert.ok(sum * 10 < 600000, 'a minute a problem is over this sheet\'s bar')
  end = work(end, { at: 0, today: day, per: 60000 }).end
  assert.equal(end.lines?.factoring?.cleanMs, 600000)

  end = endStep(end, { t: 'end-begin', seed: 2, nowMs: 1e6, day, gate: all })
  assert.deepEqual(end.sheet?.problems, drawn?.next)
  assert.equal(end.lines?.factoring?.next, undefined)
  end = work(end, { at: 1e6, today: day, per: 60000 }).end
  const result = end.sheet?.result
  assert.equal(result?.errors, 0)
  assert.equal(result?.passed, false)
  assert.deepEqual(result?.bars, [{ name: 'Total time', ok: false, value: 600000, limit: sum * 10 }])

  end = endStep(end, { t: 'end-begin', seed: 3, nowMs: 2e6, day, gate: all })
  assert.equal(end.sheet?.kind, 'timed')
  assert.equal(allowanceSum('factoring', end.sheet?.problems ?? []), sum)
})

/** The primes line passed today, due tomorrow. */
const due = () => sheet(sheet({ lines: before('primes') }, { at: 0, today: day }), { at: 100000, today: day })

test('a clean return writes a right line', () => {
  const end = sheet(due(), { at: 0, today: day2, per: 5000 })
  assert.equal(end.sheet?.result?.passed, true)
  assert.deepEqual(end.lines?.primes?.returns?.map(l => [l.date, l.right]), [[day, true], [day2, true]])
})

test('a return with errors writes no line; the misses the next day decide it right', () => {
  let end = due()
  assert.deepEqual(lineInHand(end, day2, all), { line: 'primes', kind: 'return' })
  end = sheet(end, { at: 0, today: day2, wrong: [0] })
  const rec = end.lines?.primes
  assert.equal(rec?.returns?.length, 1)
  assert.equal(rec?.missFrom, 'return')
  assert.equal(rec?.missDay, day2)
  assert.ok(linePassed(rec))
  assert.equal(lineStep(end, 'primes', day2, all), null)
  assert.equal(lineNext(rec), day3)
  assert.equal(lineStep(end, 'primes', day3, all), 'misses')
  end = sheet(end, { at: 0, today: day3 })
  assert.deepEqual(end.lines?.primes?.returns?.map(l => [l.date, l.right]), [[day, true], [day3, true]])
  assert.equal(end.lines?.primes?.misses, undefined)
})

test('a return\'s misses missed again write a wrong line and send the line back to drill the next day', () => {
  let end = sheet(due(), { at: 0, today: day2, wrong: [0] })
  end = sheet(end, { at: 0, today: day3, wrong: [0] })
  const rec = end.lines?.primes
  assert.deepEqual(rec?.returns?.map(l => [l.date, l.right]), [[day, true], [day3, false]])
  assert.equal(rec?.clean, null)
  assert.equal(rec?.failed, day3)
  assert.ok(!linePassed(rec))
  assert.equal(lineStep(end, 'primes', day3, all), null)
  assert.equal(lineStep(end, 'primes', day4, all), 'untimed')
})

test('a problem is clocked from its appearance to its last key, a long pause counted whole', () => {
  let end = endStep({}, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
  end = endStep(end, { t: 'end-type', value: '1', nowMs: 100000 })
  assert.equal(end.sheet?.ms[0], 100000)
  end = endStep(end, { t: 'end-type', value: '12', nowMs: 100400 })
  end = endStep(end, { t: 'end-enter', nowMs: 100500, day })
  assert.equal(end.sheet?.ms[0], 100500)
  assert.equal(end.sheet?.i, 1)
  end = endStep(end, { t: 'end-type', value: '3', nowMs: 101000 })
  end = endStep(end, { t: 'end-enter', nowMs: 101200, day })
  assert.deepEqual(end.sheet?.ms.slice(0, 3), [100500, 700, 0])
})

test('the retyping time comes off its problem; a blank entry is not retyped', () => {
  const { end, moves } = work(endStep({ lines: before('primes') }, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all }), {
    at: 0,
    today: day,
    retypeMs: 300
  })
  assert.equal(moves.retype, 11)
  assert.equal(end.sheet?.result?.ms, 11 * 700)
  assert.equal(end.lines?.primes?.untimedMs, 11 * 700)
  if (end.sheet) assert.deepEqual(problemTimes(end.sheet), Array(11).fill(700))

  let blank = endStep({ lines: before('primes') }, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
  blank = endStep(blank, { t: 'end-enter', nowMs: 1000, day })
  const rest = work(blank, { at: 1000, today: day })
  assert.equal(rest.moves.retype, 10)
  assert.equal(rest.end.sheet?.result?.errors, 1)
})

test('pace bars split at the median answer: the larger half strictly above it, each mean at most the step', () => {
  // primes 2, 3, 5: the median is 3, so only 5 is the larger half
  const s = startSheet('primes', 'timed', [[0], [1], [2]], 0, day)
  assert.deepEqual(
    lineBars({ ...s, ms: [1260, 1260, 1261] }).map(b => [b.name, b.ok, b.value]),
    [['Larger answers', false, 1261], ['Smaller answers', true, 1260]]
  )
  assert.deepEqual(
    lineBars({ ...s, ms: [1261, 1259, 1260] }).map(b => [b.ok, b.value]),
    [[true, 1260], [true, 1260]]
  )
  const sums = startSheet('sums', 'timed', [[0], [1], [2]], 0, day)
  assert.equal(lineBars({ ...sums, ms: [1100, 1100, 1101] })[0]?.ok, false, 'Sums\' step is 1.10 s')
})

test('product, π and estimate bars: the median of time over allowance at most 1', () => {
  const products = [[123, 456], [111, 111], [999, 999]]
  const s = startSheet('product-3', 'timed', products, 0, day)
  const a = products.map(p => allowanceOf('product-3', p) * 10)
  assert.equal(lineBars({ ...s, ms: [a[0] ?? 0, (a[1] ?? 0) / 2, (a[2] ?? 0) * 3] })[0]?.ok, true)
  assert.equal(lineBars({ ...s, ms: [(a[0] ?? 0) + 1, (a[1] ?? 0) / 2, (a[2] ?? 0) * 3] })[0]?.ok, false)

  const pi = startSheet('pi-estimates', 'timed', [[111], [999]], 0, day)
  const b = [111, 999].map(n => allowanceOf('pi-estimates', [n]) * 10)
  assert.equal(lineBars({ ...pi, ms: b })[0]?.value, 1)
  assert.equal(lineBars({ ...pi, ms: [(b[0] ?? 0) + 1, (b[1] ?? 0) + 1] })[0]?.ok, false)

  const est = startSheet('estimates', 'timed', [[12345, 67890]], 0, day)
  const c = allowanceOf('estimates', [12345, 67890]) * 10
  assert.equal(lineBars({ ...est, ms: [c * 9], toEstimate: [c] })[0]?.ok, true, 'timed to the estimate')
  assert.equal(lineBars({ ...est, ms: [c], toEstimate: [c + 1] })[0]?.ok, false)
})

test('the factoring bar: the sheet\'s time at most the sum of its allowances', () => {
  const s = startSheet('factoring', 'timed', [[2], [971]], 0, day)
  const limit = (126 + 10208) * 10
  assert.deepEqual(lineBars({ ...s, ms: [limit - 1000, 1000] })[0], { name: 'Total time', ok: true, value: limit, limit })
  assert.equal(lineBars({ ...s, ms: [limit - 1000, 1001] })[0]?.ok, false)
})

test('endStep: begin, each entry typed and entered, each entry retyped, then the result; the same seed the same', () => {
  const run = () => {
    let end = endStep({ lines: before('product-3') }, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
    const problems = end.sheet?.problems ?? []
    assert.equal(end.sheet?.kind, 'untimed')
    const entries = problems.reduce((n, p) => n + entriesOf('product-3', p).length, 0)
    const done = work(end, { at: 0, today: day, retypeMs: 10 })
    assert.deepEqual(done.moves, { enter: entries, retype: entries })
    end = done.end
    assert.equal(end.sheet?.result?.errors, 0)
    assert.equal(end.sheet?.phase, 'retype')
    return end
  }
  assert.deepEqual(run(), run())
})

test('an estimate shows its product after both entries, and the next problem waits for end-next', () => {
  let end = endStep({ lines: before('estimates') }, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
  const p = end.sheet?.problems[0] ?? []
  const [e = '', d = ''] = answers('estimates', p)
  end = endStep(end, { t: 'end-type', value: e, nowMs: 2000 })
  end = endStep(end, { t: 'end-enter', nowMs: 2000, day })
  assert.equal(end.sheet?.toEstimate[0], 2000)
  end = endStep(end, { t: 'end-type', value: d, nowMs: 5000 })
  end = endStep(end, { t: 'end-enter', nowMs: 5000, day })
  assert.equal(end.sheet?.reveal, true)
  assert.equal(endStep(end, { t: 'end-type', value: '1', nowMs: 6000 }), end, 'no typing while the product shows')
  end = endStep(end, { t: 'end-next', nowMs: 6000, day })
  assert.equal(end.sheet?.i, 1)
  assert.equal(end.sheet?.ms[0], 5000)
})

test('a sheet of missed problems is checked with no retyping', () => {
  /** @type {import('./end-level.logic.js').EndRecord} */
  const missed = { lines: { facts: { misses: [[0]], missFrom: 'untimed' } } }
  let end = endStep(missed, { t: 'end-begin', seed: 1, nowMs: 0, day, gate: all })
  assert.equal(end.sheet?.kind, 'misses')
  end = endStep(end, { t: 'end-type', value: '0', nowMs: 500 })
  end = endStep(end, { t: 'end-enter', nowMs: 600, day })
  assert.equal(end.sheet?.phase, 'retype')
  assert.deepEqual(end.sheet?.result, { errors: 0, ms: 600, bars: [] })
})

/** A number-facts set passed long ago, due far ahead. */
const setPassed = {
  clean: 1,
  cleanSeconds: 300,
  timed: [{ time: 2, seconds: 280, perMin: 26, errors: 0 }],
  returns: [{ date: '2026-01-01', right: true, next: '2099-01-01' }]
}

test('Opens: Facts and Sums on their own set, every other line on every set and its section; a begun line stays open', () => {
  const none = new Set()
  assert.deepEqual(gateOf({}, {}, none, day).open, [])
  assert.deepEqual(gateOf({}, { addition: setPassed }, none, day).open, ['sums'])
  assert.deepEqual(gateOf({}, { addition: setPassed, multiplication: setPassed }, none, day).open, ['facts', 'sums'])
  const sets = { addition: setPassed, subtraction: setPassed, multiplication: setPassed, division: setPassed }
  assert.deepEqual(gateOf({}, sets, new Set(['Number theory']), day).open, ['facts', 'sums', 'primes', 'factoring'])
  assert.deepEqual(gateOf({}, { ...sets, division: {} }, new Set(['Number theory']), day).open, ['facts', 'sums'], 'not every set')
  assert.deepEqual(
    gateOf({}, sets, new Set(['Whole numbers', 'Fractions, percent and ratio', 'Number theory']), day).open,
    LINE_IDS
  )
  assert.deepEqual(gateOf({ lines: { squares: {} } }, { addition: setPassed }, none, day).open, ['sums', 'squares'])
})

test('Block: the gate\'s one hour, the gate\'s own drill first', () => {
  const sets = { addition: setPassed, subtraction: setPassed, multiplication: setPassed, division: setPassed }
  assert.equal(gateOf({}, sets, new Set(), day).left, 3600)
  assert.equal(gateOf({}, { ...sets, spent: { day, seconds: 1000 } }, new Set(), day).left, 2600)
  assert.equal(gateOf({}, { ...sets, spent: { day: day2, seconds: 1000 } }, new Set(), day).left, 3600)
  assert.equal(gateOf({}, { addition: setPassed, multiplication: setPassed }, new Set(), day).left, 0, 'subtraction still drills')
  const gate = { open: LINE_IDS, left: 2600 }
  assert.deepEqual(lineInHand({ spent: { day, seconds: 2599 } }, day, gate), { line: 'facts', kind: 'untimed' })
  assert.equal(lineInHand({ spent: { day, seconds: 2600 } }, day, gate), null)
  assert.equal(lineInHand({}, day, { open: LINE_IDS, left: 0 }), null)
})

test('In hand: the first open line not passed, and no other; a sheet due back first, outside the block', () => {
  /** @type {import('./end-level.logic.js').Gate} */
  const gate = { open: ['facts', 'sums', 'primes'], left: 3600 }
  assert.deepEqual(lineInHand({}, day, gate), { line: 'facts', kind: 'untimed' })
  // Facts failed its timed sheet today and waits for tomorrow: Sums does not step in.
  const failed = { lines: { facts: { failed: day } } }
  assert.equal(lineInHand(failed, day, gate), null)
  assert.equal(lineStep(failed, 'sums', day, gate), null)
  assert.equal(drillLines(failed, day, gate), 0)
  const due = { lines: { facts: { ...passed, returns: [{ date: day, right: true, next: day2 }] } } }
  assert.deepEqual(lineInHand(due, day2, gate), { line: 'facts', kind: 'return' })
  assert.equal(drillLines(due, day2, gate), 1, 'Sums is in hand for drill')
  assert.deepEqual(lineInHand(due, day2, { ...gate, left: 0 }), { line: 'facts', kind: 'return' }, 'a return falls outside the block')
  assert.deepEqual(lineInHand({ lines: { facts: passed } }, day, gate), { line: 'sums', kind: 'untimed' })
  // Sums begun before Facts opened stays in hand until it passes.
  assert.deepEqual(lineInHand({ lines: { sums: { untimedMs: 9000 } } }, day, gate), { line: 'sums', kind: 'untimed' })
  assert.equal(lineStep({ lines: { facts: passed } }, 'primes', day, gate), null)
})
