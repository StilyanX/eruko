// Algebra's end level (Mathematics, "The end level"): the runs of a Shortlist's algebra list, the
// paper, the marks, the lost problems on the dated list, the pass, the next paper and the end of
// the Shortlists.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { SHORTLISTS, SITTING_MS, decodeEnd, endPassed, endState, endStep, lostId, lostProblems, nextPaper, pickPaper, runsOf, shortlistUrl } from './end-level.logic.js'

const day = '2027-03-01'
const none = () => false
/** A record with nothing in it. @type {import('./end-level.logic.js').Held} */
const empty = {}

/**
 * The record after a paper is begun on `on` and marked.
 * @param {import('./end-level.logic.js').Held} record
 * @param {readonly number[]} marks
 * @param {string} [on]
 */
const sit = (record, marks, on = day) =>
  endStep(endStep(record, { t: 'end-begin', day: on, nowMs: 1000 }, true), { t: 'end-marks', marks }, true)

/**
 * The record with every lost problem's last line right.
 * @param {import('./end-level.logic.js').Held} record
 * @returns {import('./end-level.logic.js').Held}
 */
const allRight = record => ({
  ...record,
  list: Object.fromEntries(lostProblems(record).map(p => [p.id, [{ date: day, right: true, next: '2027-03-03' }]]))
})

test('the Shortlists run newest first, 2025 to 2006, each with its official file', () => {
  assert.equal(SHORTLISTS.length, 20)
  assert.deepEqual([SHORTLISTS[0]?.year, SHORTLISTS.at(-1)?.year], [2025, 2006])
  assert.ok(SHORTLISTS.every((s, i) => i === 0 || s.year === (SHORTLISTS[i - 1]?.year ?? 0) - 1))
  assert.ok(SHORTLISTS.every(s => s.algebra >= 6 && s.algebra <= 8))
  assert.equal(shortlistUrl(2019), 'https://www.imo-official.org/assets/documents/problems/2019/IMO2019SL.pdf')
})

test('the algebra list is cut into three runs in order; a length that does not divide gives one more to the first run, then to the last', () => {
  assert.deepEqual(runsOf(6), [[1, 2], [3, 4], [5, 6]])
  assert.deepEqual(runsOf(7), [[1, 2, 3], [4, 5], [6, 7]])
  assert.deepEqual(runsOf(8), [[1, 2, 3], [4, 5], [6, 7, 8]])
})

test('a paper takes the first problem not yet taken from each run', () => {
  assert.deepEqual(pickPaper(8, none), [1, 4, 6])
  assert.deepEqual(pickPaper(8, n => [1, 4, 6].includes(n)), [2, 5, 7])
  // A seen problem is skipped, and the next of its run is taken.
  assert.deepEqual(pickPaper(8, n => n === 1 || n === 6), [2, 4, 7])
})

test('a run with none left takes the problem of the run next to it, the harder run first', () => {
  // The middle run is used up: it takes from the last run before the first.
  assert.deepEqual(pickPaper(8, n => n === 4 || n === 5), [1, 6, 7])
  // Two runs used up: both take from the first.
  assert.deepEqual(pickPaper(8, n => n >= 4), [1, 2, 3])
  // The last run is used up: its neighbour is the middle run.
  assert.deepEqual(pickPaper(8, n => n >= 6), [1, 4, 5])
  // The first run is used up: the middle run, then the last.
  assert.deepEqual(pickPaper(8, n => n <= 3), [4, 5, 6])
  assert.deepEqual(pickPaper(8, n => n <= 3 || n === 5), [4, 6, 7])
  // Fewer than three problems left: no paper.
  assert.equal(pickPaper(6, n => n > 2), null)
})

test('the end level is closed until every topic is finished, then the newest Shortlist gives the first paper', () => {
  assert.deepEqual(endState(empty, false), { t: 'closed' })
  assert.deepEqual(endState(empty, true), { t: 'ready', next: { year: 2025, problems: [1, 4, 6] } })
  assert.equal(endStep(empty, { t: 'end-begin', day, nowMs: 1000 }, false).end, undefined)
})

test('a sitting begun is the paper in hand for 4 hours 30 minutes, and stays in hand until it is marked', () => {
  const r = endStep(empty, { t: 'end-begin', day, nowMs: 1000 }, true)
  const paper = { year: 2025, problems: [1, 4, 6], day, start: 1000 }
  assert.deepEqual(r.end, { papers: [paper] })
  assert.deepEqual(endState(r, true), { t: 'sitting', paper, ends: 1000 + SITTING_MS })
  assert.equal(SITTING_MS, 16200000)
  // A second start changes nothing.
  assert.equal(endStep(r, { t: 'end-begin', day, nowMs: 5000 }, true), r)
})

test('a problem under 7 goes on the dated list as kind exam: first line the day of the sitting, wrong, back the next day', () => {
  const r = sit(empty, [7, 3, 0])
  assert.deepEqual(r.list, {
    'x-imo-sl-2025-a4': [{ date: day, right: false, next: '2027-03-02' }],
    'x-imo-sl-2025-a6': [{ date: day, right: false, next: '2027-03-02' }]
  })
  assert.equal(lostId(2019, 5), 'x-imo-sl-2019-a5')
  assert.deepEqual(lostProblems(r), [
    { id: 'x-imo-sl-2025-a4', kind: 'exam', piece: 'IMO Shortlist 2025', typed: false, official: shortlistUrl(2025), label: 'A4', got: 3, of: 7 },
    { id: 'x-imo-sl-2025-a6', kind: 'exam', piece: 'IMO Shortlist 2025', typed: false, official: shortlistUrl(2025), label: 'A6', got: 0, of: 7 }
  ])
  const state = endState(r, true)
  assert.equal(state.t, 'waiting')
  assert.deepEqual(state.t === 'waiting' && state.lost.map(p => p.n), [4, 6])
  assert.equal(endPassed(r), false)
})

test('marks that cannot be change nothing', () => {
  const begun = endStep(empty, { t: 'end-begin', day, nowMs: 1000 }, true)
  for (const marks of [[7, 7], [7, 7, 8], [7, 7, -1], [7, 7, 3.5]])
    assert.equal(endStep(begun, { t: 'end-marks', marks }, true), begun)
  assert.equal(endStep(empty, { t: 'end-marks', marks: [7, 7, 7] }, true), empty)
})

test('a paper passes with 7 on each problem, and the end level then stays passed', () => {
  const r = sit(empty, [7, 7, 7])
  assert.deepEqual(r.list, {})
  assert.equal(endPassed(r), true)
  assert.equal(endState(r, true).t, 'passed')
  assert.equal(endStep(r, { t: 'end-begin', day, nowMs: 1 }, true), r)
})

test('marks entered again put a mistyped mark right: a 7 takes the lines off, a new loss writes its line, a kept loss keeps its lines', () => {
  const first = sit(empty, [7, 3, 0])
  /** @type {import('./end-level.logic.js').Held} */
  const practised = { ...first, list: { ...first.list, [lostId(2025, 4)]: [{ date: day, right: false, next: '2027-03-02' }, { date: '2027-03-02', right: true, next: '2027-03-04' }] } }
  const again = endStep(practised, { t: 'end-marks', marks: [6, 2, 7] }, true)
  assert.deepEqual(again.end?.papers?.[0]?.marks, [6, 2, 7])
  assert.deepEqual(Object.keys(again.list ?? {}).sort(), ['x-imo-sl-2025-a1', 'x-imo-sl-2025-a4'])
  assert.equal(again.list?.[lostId(2025, 4)]?.length, 2)
  assert.equal(endPassed(endStep(first, { t: 'end-marks', marks: [7, 7, 7] }, true)), true)
})

test('the next paper waits until every lost problem of the failed one is right, then comes from the same Shortlist while each run holds a problem', () => {
  const failed = sit(empty, [7, 3, 0])
  assert.equal(endState(failed, true).t, 'waiting')
  assert.equal(endStep(failed, { t: 'end-begin', day, nowMs: 1 }, true), failed)
  const right = allRight(failed)
  assert.deepEqual(endState(right, true), { t: 'ready', next: { year: 2025, problems: [2, 5, 7] } })
  // After the second paper the middle run of 2025 is used up: the next older Shortlist.
  const second = allRight(sit(right, [0, 0, 0], '2027-03-10'))
  assert.deepEqual(endState(second, true), { t: 'ready', next: { year: 2024, problems: [1, 4, 6] } })
  assert.deepEqual(second.list?.[lostId(2025, 5)], [{ date: day, right: true, next: '2027-03-03' }])
})

test('a problem met in a book of the stage is skipped', () => {
  assert.deepEqual(nextPaper({}, ['2025-a1', '2025-a4', '2025-a5']), { year: 2025, problems: [2, 6, 7] })
})

test('every Shortlist gives two papers; with all of them used and no pass the end level is spent, the oldest lost problem named', () => {
  /** @type {import('./end-level.logic.js').Held} */
  let r = {}
  let papers = 0
  while (endState(r, true).t === 'ready') {
    r = allRight(sit(r, [0, 7, 7]))
    papers++
  }
  assert.equal(papers, 40)
  const state = endState(r, true)
  assert.equal(state.t, 'spent')
  assert.deepEqual(state.t === 'spent' && [state.oldest?.year, state.oldest?.n], [2025, 1])
  const used = new Set((r.end?.papers ?? []).flatMap(p => p.problems.map(n => `${p.year}-${n}`)))
  assert.equal(used.size, 120)
})

test('the end level as stored reads back, and a paper not of its shape is left out', () => {
  const r = sit(empty, [7, 3, 0])
  assert.deepEqual(decodeEnd(JSON.parse(JSON.stringify(r.end))), r.end)
  assert.equal(decodeEnd(undefined), undefined)
  assert.equal(decodeEnd({ papers: 'x' }), undefined)
  assert.deepEqual(decodeEnd({ papers: [{ year: 1999, problems: [1, 2, 3], day }, { year: 2025, problems: [1, 9, 3], day }, { year: 2025, problems: [1, 4, 6], day, start: 5, marks: [7, 8, 7] }] }), {
    papers: [{ year: 2025, problems: [1, 4, 6], day, start: 5 }]
  })
})
