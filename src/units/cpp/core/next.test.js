// The C++ unit's one next action ("A Self-Study System", Programming, The steps; The build,
// Programming, The one next action and The checks): Setup, the five cases in order, the first
// run's parts, gate 1's dating, gate 3, the turns of cases 4 and 5, the start gate, the place
// line and the course's rows.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  answered,
  contestStep,
  contestToday,
  courseRows,
  dueToday,
  exampleRead,
  firstKindsRetired,
  firstRunPart,
  kindGives,
  kindOf,
  laterDate,
  traceOn,
  waitsForProblems,
  mixedDraw,
  nextAction,
  openKind,
  place,
  startGate,
  startRead,
  untried,
  waitingToday
} from './next.logic.js'
import { courseFrom, itemId, kindId, problemId } from './decode.logic.js'
import {
  kindLine,
  nextTyped,
  practiceAccepted,
  recordOf,
  runtimeChecked,
  setupStored,
  withKind
} from './record.logic.js'

/**
 * @template T
 * @param {unknown} value
 * @returns {T}
 */
const typed = value => /** @type {T} */ (value)

const day = '2026-10-08'
const course = courseFrom(
  [
    { title: 'Whole programs', first: 1, last: 2 },
    { title: 'Kinds after', first: 3, last: 3 }
  ],
  [
    {
      id: 1,
      name: 'Compute and print a value',
      after: [],
      plan: ['Print the value.'],
      problems: ['1.01', '1.02', '1.03', '1.04', '1.05'],
      trace: 'T1'
    },
    {
      id: 2,
      name: 'Add up a sequence',
      after: [1],
      plan: ['Add each number.'],
      problems: ['2.01', '2.02', '2.03'],
      trace: 'T2'
    },
    {
      id: 3,
      name: 'Count the items that pass a test',
      after: [2],
      plan: ['Count.'],
      problems: ['3.01', '3.02', '3.03'],
      trace: 'T3'
    }
  ]
)
const about = { compiler: 'g++', version: 'g++ (GCC) 16.1.0', standard: 'c++23' }
const setUp = () =>
  setupStored(recordOf({}, course), {
    user: 'learner',
    series: 'abc',
    zone: 'Europe/Copenhagen',
    day: '2026-10-01'
  })
const pass = { passed: 3, total: 3, failed: null, error: '' }
const fail = {
  passed: 1,
  total: 3,
  failed: { input: '1\n', expected: '1\n', given: '2\n', error: '' },
  error: ''
}

/**
 * Answer the next action as `right` says and close it; the reads need no answer.
 * @param {import('./decode.logic.js').CppRecord} r
 * @param {string} on
 * @param {boolean} right
 */
function work(r, on, right) {
  const item = nextAction(course, r, on)
  if (item.step === 'start') return startRead(course, r, on)
  if (item.step === 'example') return exampleRead(course, r, item.kind, on)
  assert.ok('id' in item && !('code' in item), `an item to answer, not ${item.step}`)
  /** @type {import('./decode.logic.js').Asked} */
  const asked = typed(item)
  const verdict =
    asked.step === 'trace' || String(asked.id).startsWith('T') ? null : right ? pass : fail
  const done = answered(course, r, { item: asked, right, code: 'int main() {}', verdict, day: on })
  return { ...done, position: { ...done.position, open: null } }
}

/**
 * The record with every kind up to `n` retired, from a first run each problem alone right.
 * @param {number} n
 */
function retiredTo(n) {
  let r = setUp()
  for (let i = 0; i < 40 && kindLine(r, kindId(n))?.retired === ''; i++) r = work(r, day, true)
  return r
}

test('before the first session the next action is Setup; then the first kind starts at its filled trace', () => {
  assert.deepEqual(nextAction(course, recordOf({}, course), day), { n: 0, step: 'setup' })
  const r = setUp()
  assert.deepEqual(r.server, {
    name: 'AtCoder',
    language: 'C++23 (GCC 15.2.0)',
    user: 'learner',
    series: 'abc',
    zone: 'Europe/Copenhagen',
    next: '',
    from: '2026-10-01'
  })
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'start', kind: 1 })
  assert.equal(place(course, r), 'Kind 1 of 3: Compute and print a value.')
})

test("the first run's parts in order: start, example, trace, parsons, alone; each part moves the kind on", () => {
  let r = setUp()
  const steps = []
  for (let i = 0; i < 5; i++) {
    steps.push(nextAction(course, r, day).step)
    r = work(r, day, true)
  }
  assert.deepEqual(steps, ['start', 'example', 'trace', 'parsons', 'alone'])
  assert.deepEqual(kindLine(r, kindId(1)), { kind: 1, opened: day, retired: day, part: 'alone' })
  // gate 3 yes: the next kind opens today at its worked example
  assert.deepEqual(kindLine(r, kindId(2)), { kind: 2, opened: day, retired: '', part: 'example' })
  assert.equal(place(course, r), 'Kind 2 of 3: Add up a sequence.')
  assert.deepEqual(r.sessions, [day])
  assert.equal(r.turn, 5)
  // the Parsons problem's source counts as tried, mixed false; the problem alone as well
  assert.deepEqual(r.tries, [
    { id: '1.01', date: day, right: true, mixed: false },
    { id: '1.02', date: day, right: true, mixed: false }
  ])
})

test('gate 1: the trace item writes a line, the problem alone one only when wrong, the Parsons problem none', () => {
  let r = setUp()
  for (let i = 0; i < 5; i++) r = work(r, day, false)
  assert.deepEqual(Object.keys(r.recall).sort(), ['1.02', 'T1'])
  assert.equal(r.recall.T1?.[0]?.right, false)
  assert.equal(r.recall['1.02']?.[0]?.next, '2026-10-09')
  // gate 3 no: back to a fresh Parsons problem, then a fresh problem alone
  assert.equal(kindLine(r, kindId(1))?.part, 'parsons')
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'parsons', id: '1.03', kind: 1 })
  r = work(r, day, false)
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'alone', id: '1.04', kind: 1 })
  // the problem alone right writes none of its own; the kind retires, its first line that day, right
  r = work(r, day, true)
  assert.equal(r.recall['1.04'], undefined)
  assert.equal(kindLine(r, kindId(1))?.retired, day)
  assert.deepEqual(r.recall.K1, [{ date: day, right: true, next: '2026-10-09' }])
})

test('an answer is held open with its verdict until Next; the submit is kept with its program', () => {
  let r = work(work(work(setUp(), day, true), day, true), day, true)
  const item = nextAction(course, r, day)
  assert.equal(item.step, 'parsons')
  r = answered(course, r, { item: typed(item), right: false, code: 'x', verdict: fail, day })
  assert.deepEqual(nextAction(course, r, day), { ...item, code: 'x', right: false, verdict: fail })
  assert.deepEqual(r.runs, [{ id: '1.01', date: day, passed: 1, total: 3, code: 'x' }])
  // "No further step" submits nothing
  const none = answered(course, r, {
    item: typed(item),
    right: false,
    code: 'y',
    verdict: null,
    day
  })
  assert.equal(none.runs.length, 1)
})

test("a submit older than the item's latest dated line drops its program", () => {
  let r = retiredTo(1)
  const [on, after] = ['2026-10-09', '2026-10-10']
  /** @type {import('./decode.logic.js').Asked} */
  const recall = { n: 2, step: 'recall', id: itemId('1.03'), kind: kindId(1) }
  assert.deepEqual(nextAction(course, r, on), recall)
  r = answered(course, r, { item: recall, right: false, code: 'first', verdict: fail, day: on })
  r = answered(course, r, { item: recall, right: false, code: 'later', verdict: fail, day: after })
  assert.deepEqual(
    r.runs.filter(x => x.id === '1.03'),
    [
      { id: '1.03', date: on, passed: 1, total: 3 },
      { id: '1.03', date: after, passed: 1, total: 3, code: 'later' }
    ]
  )
})

test("Kind's return: a retired kind is due, not its problem; it gives a never-tried problem, a first try of mixed practice, and right writes the kind's line alone", () => {
  let r = retiredTo(1)
  const on = '2026-10-09'
  // the kind and its trace are due the next day, the kind first; the problem alone is not
  assert.deepEqual(dueToday(course, r, on), ['K1', 'T1'])
  assert.equal(kindGives(course.kinds[0] ?? assert.fail(), r), '1.03')
  r = work(r, on, true)
  assert.deepEqual(r.recall.K1?.at(-1), { date: on, right: true, next: r.recall.K1?.at(-1)?.next })
  assert.ok((r.recall.K1?.at(-1)?.next ?? '') > on, 'the kind comes back by the return rule')
  assert.equal(r.recall['1.03'], undefined, 'a never-tried problem right writes no line of its own')
  assert.deepEqual(r.tries.at(-1), { id: '1.03', date: on, right: true, mixed: true })
  // the problem itself does not come back: the kind's next return gives a fresh one
  assert.deepEqual(dueToday(course, r, on), ['T1'])
  assert.equal(kindGives(course.kinds[0] ?? assert.fail(), r), '1.04')
})

test("Kind's return wrong: the problem and its kind come back the next day, the kind giving that problem; right, the kind moves on", () => {
  let r = work(retiredTo(1), '2026-10-09', false)
  assert.equal(r.recall['1.03']?.at(-1)?.next, '2026-10-10')
  assert.equal(r.recall.K1?.at(-1)?.next, '2026-10-10')
  // the trace, due since the day before, comes first
  assert.deepEqual(dueToday(course, r, '2026-10-10'), ['T1', 'K1'])
  r = work(r, '2026-10-10', true)
  assert.deepEqual(nextAction(course, r, '2026-10-10'), {
    n: 2,
    step: 'recall',
    id: '1.03',
    kind: 1
  })
  r = work(r, '2026-10-10', true)
  assert.equal(r.recall['1.03']?.length, 1, 'right writes no line of its own')
  assert.equal(kindGives(course.kinds[0] ?? assert.fail(), r), '1.04')
  assert.ok(!dueToday(course, r, '2026-10-11').includes('1.03'))
})

test('a problem answered wrong in mixed practice makes its retired kind due the next day, before its own date', () => {
  const r = retiredTo(2)
  const kind1 = {
    ...r,
    recall: { ...r.recall, K1: [{ date: day, right: true, next: '2026-11-01' }] }
  }
  /** @type {import('./decode.logic.js').Mixed} */
  const item = { n: 4, step: 'mixed', id: problemId('1.03'), kind: kindId(1) }
  const wrong = answered(course, kind1, { item, right: false, code: '', verdict: fail, day })
  assert.equal(wrong.recall.K1?.length, 1, "mixed practice writes no kind's line")
  assert.ok(dueToday(course, wrong, '2026-10-09').includes('K1'))
  assert.equal(kindGives(course.kinds[0] ?? assert.fail(), wrong), '1.03')
})

test('while its first run is open, a problem answered wrong comes back alone; right, it writes nothing and is not due again', () => {
  let r = setUp()
  for (let i = 0; i < 5; i++) r = work(r, day, i < 4)
  assert.equal(kindLine(r, kindId(1))?.retired, '')
  const on = '2026-10-09'
  assert.deepEqual(dueToday(course, r, on), ['1.02', 'T1'])
  r = work(r, on, true)
  assert.equal(r.recall['1.02']?.length, 1)
  assert.equal(r.recall.K1, undefined)
  assert.deepEqual(dueToday(course, r, on), ['T1'])
})

test("Kind's return with every problem tried: the one seen longest ago, a tie to the earlier", () => {
  const kind = course.kinds[1] ?? assert.fail()
  const tries = [
    { id: '2.01', date: '2026-10-03', right: true, mixed: true },
    { id: '2.02', date: '2026-10-01', right: true, mixed: true },
    { id: '2.03', date: '2026-10-01', right: true, mixed: true }
  ]
  const r = recordOf({ tries }, course)
  assert.equal(kindGives(kind, r), '2.02')
  const runs = [{ id: '2.02', date: '2026-10-05', passed: 3, total: 3 }]
  assert.equal(kindGives(kind, recordOf({ tries, runs }, course)), '2.03')
})

test("Trace per kind: the first run on the kind's trace; right on an earlier day, the next program, round again; wrong, the same", () => {
  const trace = (/** @type {string} */ id) => typed({ id, lines: [id] })
  /** @type {import('./decode.logic.js').KindContent} */
  const content = typed({ trace: trace('own'), traces: [trace('a'), trace('b')] })
  const at = (/** @type {boolean[]} */ ...rights) =>
    traceOn(
      content,
      rights.map((right, i) => ({ date: `2026-10-0${i + 1}`, right, next: '' })),
      day
    ).lines[0]
  assert.equal(at(), 'own')
  assert.equal(at(true), 'a')
  assert.equal(at(true, false), 'a')
  assert.equal(at(true, false, true), 'b')
  assert.equal(at(true, true, true), 'own')
  // the day's own answer does not move it, so the judged trace is the one answered
  assert.equal(traceOn(content, [{ date: day, right: true, next: '' }], day).lines[0], 'own')
  assert.equal(
    traceOn(
      { trace: trace('own'), traces: [] },
      [{ date: '2026-10-01', right: true, next: '' }],
      day
    ).lines[0],
    'own'
  )
})

test('case 2: due items oldest date first; on one date problems before trace items, then course order', () => {
  const lines = (/** @type {string} */ next) => [{ date: '2026-10-01', right: false, next }]
  const r = recordOf(
    {
      recall: {
        T1: lines('2026-10-05'),
        2.01: lines('2026-10-05'),
        1.02: lines('2026-10-05'),
        T2: lines('2026-10-03'),
        1.01: lines('2026-10-09')
      }
    },
    course
  )
  assert.deepEqual(dueToday(course, r, day), ['T2', '1.02', '2.01', 'T1'])
  const s = setupStored(r, { user: 'learner', series: 'abc', zone: 'UTC', day })
  assert.deepEqual(nextAction(course, s, day), { n: 2, step: 'recall', id: 'T2', kind: 2 })
  assert.equal(kindOf(course, problemId('3.02')), 3)
  assert.throws(() => kindOf(course, problemId('9.01')), /a kind the course holds/)
})

test('case 4: mixed practice draws the retired kind whose newest first try is oldest, a tie to the earlier kind', () => {
  const r = withKind(withKind(setUp(), kindId(1), { retired: day }), kindId(2), { retired: day })
  // no tries at all: a tie, so the earlier kind
  assert.deepEqual(mixedDraw(course, r), { n: 4, step: 'mixed', id: '1.01', kind: 1 })
  /** @type {import('./decode.logic.js').CppRecord} */
  const tried = {
    ...r,
    tries: typed([
      { id: '2.01', date: day, right: true, mixed: true },
      { id: '1.01', date: day, right: true, mixed: true }
    ])
  }
  // kind 1 was tried last, the same day: kind 2's newest try is older
  assert.deepEqual(mixedDraw(course, tried), { n: 4, step: 'mixed', id: '2.02', kind: 2 })
  // a kind with no never-tried problem left is not drawn; none left anywhere: nothing
  const used = {
    ...tried,
    tries: [
      ...tried.tries,
      ...['2.02', '2.03'].map(id => ({ id: problemId(id), date: day, right: true, mixed: true }))
    ]
  }
  assert.deepEqual(mixedDraw(course, used), { n: 4, step: 'mixed', id: '1.02', kind: 1 })
  const none = {
    ...used,
    tries: [
      ...used.tries,
      ...['1.02', '1.03', '1.04', '1.05'].map(id => ({
        id: problemId(id),
        date: day,
        right: true,
        mixed: true
      }))
    ]
  }
  assert.equal(mixedDraw(course, none), null)
  assert.deepEqual(untried(course.kinds[2] ?? assert.fail(), none), ['3.01', '3.02', '3.03'])
})

test('gate 1 in mixed practice: right at the first try writes no line, wrong writes one; the try is mixed', () => {
  const r = withKind(setUp(), kindId(1), { retired: day })
  const item = mixedDraw(course, r)
  assert.ok(item)
  const right = answered(course, r, { item, right: true, code: '', verdict: pass, day })
  assert.deepEqual(right.recall, {})
  assert.deepEqual(right.tries, [{ id: '1.01', date: day, right: true, mixed: true }])
  assert.equal(right.turn, 4)
  const wrong = answered(course, r, { item, right: false, code: '', verdict: fail, day })
  assert.equal(wrong.recall['1.01']?.[0]?.right, false)
})

test('cases 4 and 5 take turns by `turn`: case 4 first when empty, and one with nothing gives the other every turn', () => {
  const r = withKind(withKind(setUp(), kindId(1), { opened: day, retired: day }), kindId(2), {
    opened: day
  })
  /** @param {string[]} ids */
  const triedAll = ids =>
    ids.map(id => ({ id: problemId(id), date: day, right: false, mixed: false }))
  assert.equal(r.turn, null)
  assert.equal(nextAction(course, r, day).step, 'mixed')
  assert.equal(nextAction(course, { ...r, turn: 5 }, day).step, 'mixed')
  assert.deepEqual(nextAction(course, { ...r, turn: 4 }, day), { n: 5, step: 'example', kind: 2 })
  // the open kind needs a never-tried problem it does not hold: case 4 takes the turn
  const stuck = withKind({ ...r, turn: /** @type {const} */ (4) }, kindId(2), { part: 'alone' })
  const empty = { ...stuck, tries: triedAll(['2.01', '2.02', '2.03']) }
  assert.equal(firstRunPart(course, empty), null)
  assert.equal(nextAction(course, empty, day).step, 'mixed')
  assert.equal(firstRunPart(course, withKind(empty, kindId(2), { part: 'parsons' })), null)
  // with neither, nothing is left
  const used = {
    ...empty,
    tries: [...empty.tries, ...triedAll(['1.01', '1.02', '1.03', '1.04', '1.05'])]
  }
  assert.deepEqual(nextAction(course, used, day), { n: 6, step: 'nothing' })
})

test('case 3 and the start gate: the practice submission once every first kind is retired; then the next contest', () => {
  // nothing due, so that the cases after case 2 show
  let r = { ...retiredTo(2), recall: {} }
  assert.equal(firstKindsRetired(course, r), true, 'the first section holds kinds 1 and 2 only')
  assert.equal(startGate(course, r), false)
  assert.equal(openKind(course, r)?.id, 3)
  const later = '2026-12-01'
  assert.deepEqual(nextAction(course, r, later), { n: 3, step: 'practice' })
  assert.equal(
    waitingToday(course, r, later),
    3,
    'the practice submission, mixed practice and the open kind'
  )
  r = practiceAccepted(r, later)
  assert.equal(startGate(course, r), true)
  // the start gate open: the next contest's start comes first
  assert.deepEqual(nextAction(course, r, later), { n: 1, step: 'next-contest' })
  r = nextTyped(r, '2026-12-05T13:00')
  assert.equal(contestStep(course, r, '2026-12-05'), null, 'the contest day itself')
  assert.notEqual(nextAction(course, r, '2026-12-05').n, 1)
  assert.deepEqual(nextAction(course, r, '2026-12-06'), { n: 1, step: 'record' })
  // once pasted, the next contest's start
  const pasted = { ...r, position: { ...r.position, pasted: '2026-12-06' } }
  assert.deepEqual(nextAction(course, pasted, '2026-12-06'), { n: 1, step: 'next-contest' })
  assert.equal(waitingToday(course, pasted, '2026-12-06'), 3)
})

test('the start read and a worked example read only where they stand', () => {
  const r = setUp()
  assert.throws(() => exampleRead(course, r, kindId(2), day), /the open kind/)
  const once = startRead(course, r, day)
  assert.throws(() => startRead(course, once, day), /read once/)
})

test('the place line, and the rows: the open kind opens the work list, a kind retired is done, one not reached opens nothing', () => {
  const r = retiredTo(1)
  assert.deepEqual(courseRows(course, r, '/w'), [
    { key: 1, title: 'Compute and print a value', to: undefined, done: true },
    { key: 2, title: 'Add up a sequence', to: '/w', done: false },
    { key: 3, title: 'Count the items that pass a test', to: undefined, done: false }
  ])
  const all = r.course.reduce((x, c) => withKind(x, c.kind, { retired: day }), r)
  assert.equal(place(course, all), `All ${course.kinds.length} kinds done.`)
  assert.equal(courseRows(course, all, '/w').filter(x => x.to).length, 0)
  assert.equal(firstRunPart(course, all), null)
})

test('a problem refused under the runtime is not used: not drawn, not due, its dated lines kept', () => {
  const lines = [{ date: '2026-10-01', right: false, next: '2026-10-05' }]
  const s = withKind(recordOf({ recall: { 1.01: lines, 1.02: lines } }, course), kindId(1), {
    retired: day
  })
  const r = runtimeChecked(
    setupStored(s, { user: 'learner', series: 'abc', zone: 'UTC', day }),
    about,
    [problemId('1.01')]
  )
  assert.deepEqual(dueToday(course, r, day), ['K1'])
  assert.equal(kindGives(course.kinds[0] ?? assert.fail(), r), '1.02')
  assert.deepEqual(untried(course.kinds[0] ?? assert.fail(), r), ['1.02', '1.03', '1.04', '1.05'])
  assert.deepEqual(mixedDraw(course, r), { n: 4, step: 'mixed', id: '1.02', kind: 1 })
  assert.deepEqual(r.recall['1.01'], lines)
})

test('the contest day, once the start gate is open; the first date an item comes back after today', () => {
  const retired = withKind(withKind(setUp(), kindId(1), { retired: day }), kindId(2), {
    retired: day
  })
  const typedNext = nextTyped(practiceAccepted(retired, day), '2026-10-10T13:00')
  assert.equal(contestToday(course, typedNext, '2026-10-10'), true)
  assert.equal(contestToday(course, typedNext, '2026-10-09'), false)
  assert.equal(contestToday(course, nextTyped(retired, '2026-10-10T13:00'), '2026-10-10'), false)
  assert.equal(contestToday(course, setUp(), '2026-10-10'), false)
  // on it the contest is all that waits today
  assert.equal(waitingToday(course, typedNext, '2026-10-10'), 1)
  // the contest's day is read in the stored zone: past there, though not yet on the device
  assert.deepEqual(nextAction(course, typedNext, '2026-10-10', '2026-10-11'), {
    n: 1,
    step: 'record'
  })
  assert.notDeepEqual(nextAction(course, typedNext, '2026-10-10'), { n: 1, step: 'record' })
  const lines = (/** @type {string} */ next) => [{ date: '2026-10-01', right: true, next }]
  const r = recordOf(
    { recall: { 1.01: lines('2026-10-12'), T1: lines('2026-10-09'), 1.02: lines(day) } },
    course
  )
  assert.equal(laterDate(course, r, day), '2026-10-09')
  assert.equal(laterDate(course, r, '2026-10-12'), '')
})

test('an open kind with no never-tried problem left waits for new problems: case 5 has nothing, case 4 takes the turn, its row says so', () => {
  const at = withKind(withKind(setUp(), kindId(1), { retired: day }), kindId(2), {
    opened: day,
    part: 'parsons'
  })
  const tried = (/** @type {string[]} */ ids) =>
    ids.map(id => ({ id: problemId(id), date: day, right: false, mixed: false }))
  const empty = { ...at, tries: tried(['2.01', '2.02', '2.03']), turn: /** @type {const} */ (4) }
  assert.equal(waitsForProblems(course, empty)?.id, 2)
  assert.equal(waitsForProblems(course, at), null)
  assert.equal(waitsForProblems(course, withKind(empty, kindId(2), { part: 'example' })), null)
  assert.deepEqual(nextAction(course, empty, day), { n: 4, step: 'mixed', id: '1.01', kind: 1 })
  const row = courseRows(course, empty, '/work').find(r => r.key === 2)
  assert.equal(row?.to, undefined)
  assert.equal(row?.opens, 'Opens again once Eruko adds new problems to it.')
})
