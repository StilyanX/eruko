import assert from 'node:assert/strict'
import { test } from 'node:test'
import { courseFrom, decodeRecord } from './decode.logic.js'
import { trackAsked } from './track-decode.logic.js'
import { nextAction, place, trackOpen, trackRows } from './next.logic.js'
import { step } from './session.logic.js'
import {
  aloneAsks,
  aloneJudged,
  countOf,
  countRight,
  itemsOf,
  partsOf,
  scanned,
  scansOver,
  sideToday,
  trackAction,
  trackAnswered,
  trackDates,
  trackDue,
  trackMixed,
  verdictRight,
  witnessAsks,
  witnessJudged,
  withScans
} from './track.logic.js'

/** @param {string} id @param {Partial<import('./track-decode.logic.js').TrackKind>} [more] */
const kind = (id, more = {}) => ({
  id,
  stage: Number(id[0]),
  name: `Kind ${id}`,
  part: `part ${id}`,
  after: [],
  clause: ['[expr.mul]'],
  levels: /** @type {const} */ (['c++11', 'c++14', 'c++17', 'c++20', 'c++23']),
  device: false,
  verdicts: [`t${id}v1`, `t${id}v2`],
  count: `t${id}c`,
  alones: [`t${id}a1`, `t${id}a2`],
  ...more
})

const TRACK = [kind('1.01'), kind('1.02', { count: null }), kind('2.01')]
const course = courseFrom(
  [{ title: 'Whole programs', first: 1, last: 1 }],
  [{ id: 1, name: 'a', after: [], plan: [], problems: ['1.01'], trace: 'T1' }],
  TRACK,
  [{ n: 1, title: 'The core language', book: 'Horton' }]
)
const base = {
  runtime: { language: 'C++23', name: 'g++', version: 'v', refused: [] },
  server: {
    name: 'AtCoder',
    user: 'me',
    series: 'abc',
    language: 'x',
    zone: 'UTC',
    next: '',
    from: '2026-10-01'
  },
  practice: ''
}
/** @param {Record<string, unknown>} [more] */
const recordWith = (more = {}) => decodeRecord({ ...base, ...more }, course)
const retired = {
  course: [{ kind: 1, opened: '2026-10-01', retired: '2026-10-02', part: 'alone' }]
}

test('ids: a track item names its kind, its unit and its place; a kind holds a witness for each item alone', () => {
  assert.deepEqual(partsOf('t1.04v2'), { kind: '1.04', unit: 'verdict', n: 2 })
  assert.deepEqual(partsOf('t9.12c'), { kind: '9.12', unit: 'count', n: 1 })
  assert.deepEqual(partsOf('t3.01w1'), { kind: '3.01', unit: 'witness', n: 1 })
  assert.deepEqual(itemsOf(kind('1.01')), [
    't1.01v1',
    't1.01v2',
    't1.01c',
    't1.01a1',
    't1.01a2',
    't1.01w1',
    't1.01w2'
  ])
})

test('the track opens when every first kind is retired, the practice contest not asked; its rows say so before', () => {
  assert.equal(trackOpen(course, recordWith()), false)
  assert.equal(trackOpen(course, recordWith(retired)), true)
  const rows = trackRows(course, recordWith(), '/w')
  assert.equal(rows[0]?.opens, 'Opens once the twelve whole-program kinds are retired.')
  assert.equal(rows[0]?.to, undefined)
  assert.equal(trackRows(course, recordWith(retired), '/w')[0]?.to, '/w')
  assert.match(place(course, recordWith(retired)), /Track kind 1 of 3: Kind 1\.01\./)
})

test('sessions pass between the course and the track: the course first, each day the other side, a drop or a contest gives the day to the course', () => {
  const now = { open: true, contest: false }
  assert.equal(sideToday(recordWith(), { open: false, contest: false }, '2026-10-05'), 'course')
  assert.equal(
    sideToday(recordWith(), now, '2026-10-05'),
    'course',
    'none studied: the course first'
  )
  const lastCourse = recordWith({ side: { day: '2026-10-04', side: 'course' } })
  assert.equal(sideToday(lastCourse, now, '2026-10-05'), 'track')
  assert.equal(
    sideToday(lastCourse, now, '2026-10-04'),
    'course',
    'the side studied today keeps the day'
  )
  assert.equal(
    sideToday(recordWith({ side: { day: '2026-10-04', side: 'track' } }), now, '2026-10-05'),
    'course'
  )
  assert.equal(sideToday(lastCourse, { open: true, contest: true }, '2026-10-05'), 'course')
  const held = recordWith({
    side: { day: '2026-10-04', side: 'course' },
    readings: [{ date: 'x', mean: null, sd: null, p: 0, n: 0, state: 'held' }]
  })
  assert.equal(sideToday(held, now, '2026-10-05'), 'course')
})

test("the track's Setup comes before its first session; then a track day starts at step C's worked example", () => {
  const r = recordWith({ ...retired, side: { day: '2026-10-04', side: 'course' } })
  assert.deepEqual(nextAction(course, r, '2026-10-05'), { n: 'C', step: 'track-setup' })
  const pin = {
    gcc: 'g++ (GCC) 16.2.0',
    nvcc: '',
    gdb: '',
    level: 'c++23',
    driver: '',
    device: '',
    cc: '',
    memory: 1
  }
  const pinned = recordWith({ ...retired, side: { day: '2026-10-04', side: 'course' }, pin })
  assert.deepEqual(nextAction(course, pinned, '2026-10-05'), {
    n: 'C',
    step: 'track-example',
    kind: '1.01'
  })
})

test('step C runs the open kind in order: example, verdict, count, alone, witness; gate C retires it and opens the next', () => {
  const day = '2026-10-05'
  let r = recordWith(retired)
  r = step(course, r, { t: 'track-example-read', kind: '1.01', day }).state
  assert.equal(r.track[0]?.opened, day)
  const want = ['t1.01v1', 't1.01c', 't1.01a1', 't1.01w1']
  for (const id of want) {
    const a = trackAction(TRACK, r, day)
    assert.equal(a && 'id' in a ? a.id : a?.step, id)
    if (!a || a.step !== 'track') return
    r = trackAnswered(TRACK, r, { item: a, right: true, day })
  }
  assert.equal(r.track[0]?.retired, day)
  assert.deepEqual(r.track[1], {
    kind: '1.02',
    opened: day,
    retired: '',
    part: 'example',
    round: 0
  })
  // an item right writes no line of its own; each unit of the retired kind has its first line
  const first = [{ date: day, right: true, next: '2026-10-06' }]
  const trackLines = Object.fromEntries(
    Object.entries(r.recall).filter(([id]) => id.startsWith('t'))
  )
  assert.deepEqual(trackLines, {
    't1.01:verdict': first,
    't1.01:count': first,
    't1.01:alone': first,
    't1.01:witness': first
  })
})

test('a due unit of a retired kind gives its item last answered wrong, else a never-tried item, else the one seen longest ago; gate A dates the unit from its answer', () => {
  const day = '2026-10-10'
  const track = [
    { kind: '1.02', opened: '2026-10-01', retired: '2026-10-03', part: 'witness', round: 0 }
  ]
  const line = (/** @type {string} */ date, right = true, next = day) => [{ date, right, next }]
  const recall = {
    't1.02:verdict': line('2026-10-03'),
    't1.02:alone': line('2026-10-03'),
    't1.02:witness': line('2026-10-03', true, '2026-10-20'),
    't1.02a1': line('2026-10-02', false, '2026-10-03')
  }
  const tries = [
    { id: 't1.02v1', date: '2026-10-01', right: true },
    { id: 't1.02a1', date: '2026-10-02', right: false },
    { id: 't1.02w1', date: '2026-10-02', right: true }
  ]
  const r = recordWith({ ...retired, track, recall, trackTries: tries })
  assert.equal(r.recall['t1.02:verdict']?.length, 1, 'a unit key survives the decoder')
  assert.deepEqual(
    trackDue(TRACK, r, day),
    ['t1.02v2', 't1.02a1'],
    'no count unit where the kind holds no count item'
  )
  const seen = { ...r, trackTries: [...tries, { id: 't1.02v2', date: '2026-10-04', right: true }] }
  assert.deepEqual(trackDue(TRACK, seen, day), ['t1.02v1', 't1.02a1'])
  // right: the unit takes a later date, the never-tried item writes none
  const v2 = trackAsked('t1.02v2', 'A')
  const right = trackAnswered(TRACK, r, { item: v2, right: true, day })
  assert.equal(right.recall['t1.02v2'], undefined)
  assert.ok((right.recall['t1.02:verdict']?.at(-1)?.next ?? '') > '2026-10-11')
  // right on the item last answered wrong: it writes its line, so it is not drawn as wrong again
  const a1 = trackAnswered(TRACK, r, { item: trackAsked('t1.02a1', 'A'), right: true, day })
  assert.equal(a1.recall['t1.02a1']?.at(-1)?.right, true)
  assert.deepEqual(trackDue(TRACK, a1, day), ['t1.02v2'])
  // wrong: the item and its unit come back the next day
  const wrong = trackAnswered(TRACK, r, { item: v2, right: false, day })
  assert.equal(wrong.recall['t1.02v2']?.at(-1)?.next, '2026-10-11')
  assert.equal(wrong.recall['t1.02:verdict']?.at(-1)?.next, '2026-10-11')
  // the alone unit, due since the 10th, comes first: the oldest date first
  assert.deepEqual(trackDue(TRACK, wrong, '2026-10-11'), ['t1.02a1', 't1.02v2'])
})

test('step B dates nothing when right; wrong, the item and its unit come back the next day; a unit not due writes no line from a right answer', () => {
  const day = '2026-10-10'
  const track = [
    { kind: '1.02', opened: '2026-10-01', retired: '2026-10-03', part: 'witness', round: 0 }
  ]
  const recall = { 't1.02:verdict': [{ date: '2026-10-03', right: true, next: '2026-10-20' }] }
  const r = recordWith({ ...retired, track, recall })
  const v1 = trackAsked('t1.02v1', 'B')
  assert.deepEqual(trackAnswered(TRACK, r, { item: v1, right: true, day }).recall, r.recall)
  const wrong = trackAnswered(TRACK, r, { item: v1, right: false, day }).recall
  assert.equal(wrong['t1.02v1']?.at(-1)?.next, '2026-10-11')
  assert.equal(wrong['t1.02:verdict']?.at(-1)?.next, '2026-10-11')
})

test("while a kind is not retired an item answered wrong comes back alone; a record from before unit lines reads each unit's first line from the day its kind retired", () => {
  const day = '2026-10-10'
  const recall = {
    't1.01v1': [{ date: '2026-10-05', right: false, next: '2026-10-06' }],
    't1.01v2': [{ date: '2026-10-05', right: true, next: '2026-10-06' }]
  }
  const open = [{ kind: '1.01', opened: '2026-10-05', retired: '', part: 'alone', round: 0 }]
  assert.deepEqual(trackDue(TRACK, recordWith({ ...retired, track: open, recall }), day), [
    't1.01v1'
  ])
  const old = [
    { kind: '1.01', opened: '2026-10-05', retired: '2026-10-06', part: 'witness', round: 0 }
  ]
  const r = recordWith({ ...retired, track: old, recall })
  assert.deepEqual(trackDue(TRACK, r, day), ['t1.01v1', 't1.01c', 't1.01a1', 't1.01w1'])
  assert.deepEqual(trackDates(TRACK, r), Array(4).fill('2026-10-07'), 'the dates the list shows')
  const next = trackAnswered(TRACK, r, { item: trackAsked('t1.01c', 'A'), right: true, day })
  assert.deepEqual(
    next.recall['t1.01:count']?.map(l => l.date),
    ['2026-10-06', day]
  )
})

test('gate C says No when the item alone or the witness was wrong: a fresh verdict item, then a fresh item alone and witness, no count again', () => {
  const day = '2026-10-05'
  let r = recordWith({
    ...retired,
    track: [{ kind: '1.01', opened: day, retired: '', part: 'alone', round: 0 }]
  })
  const alone = /** @type {import('./track-decode.logic.js').TrackAsked} */ (
    trackAction(TRACK, r, day)
  )
  r = trackAnswered(TRACK, r, { item: alone, right: false, day })
  const witness = /** @type {import('./track-decode.logic.js').TrackAsked} */ (
    trackAction(TRACK, r, day)
  )
  assert.equal(witness.id, 't1.01w1')
  r = trackAnswered(TRACK, r, { item: witness, right: true, day })
  assert.deepEqual(r.track[0], {
    kind: '1.01',
    opened: day,
    retired: '',
    part: 'verdict',
    round: 1
  })
  const fresh = /** @type {import('./track-decode.logic.js').TrackAsked} */ (
    trackAction(TRACK, r, day)
  )
  assert.equal(fresh.id, 't1.01v2')
  r = trackAnswered(TRACK, r, { item: fresh, right: true, day })
  assert.equal(r.track[0]?.part, 'alone', 'the count item is not asked again')
  const r2 = {
    ...r,
    track: r.track.map(t =>
      t.kind === '1.01' ? { ...t, part: /** @type {const} */ ('verdict'), round: 2 } : t
    )
  }
  assert.deepEqual(trackAction(TRACK, r2, day), { n: 'C', step: 'track-waits', kind: '1.01' })
})

test('step A takes what is due oldest first, then track order, then unit order; step B the retired kind tried longest ago', () => {
  const recall = {
    't1.02a1': [{ date: '2026-10-01', right: false, next: '2026-10-02' }],
    't1.01c': [{ date: '2026-10-01', right: false, next: '2026-10-02' }],
    't1.01v1': [{ date: '2026-10-01', right: false, next: '2026-10-02' }],
    't2.01v1': [{ date: '2026-09-30', right: false, next: '2026-10-01' }],
    1.01: [{ date: '2026-09-29', right: false, next: '2026-09-30' }]
  }
  const r = recordWith({ ...retired, recall })
  assert.deepEqual(trackDue(TRACK, r, '2026-10-05'), ['t2.01v1', 't1.01v1', 't1.01c', 't1.02a1'])
  const tries = [
    { id: 't1.01v1', date: '2026-10-03', right: true },
    { id: 't1.02v1', date: '2026-10-01', right: true }
  ]
  const track = [
    { kind: '1.01', opened: 'x', retired: 'y', part: 'witness', round: 0 },
    { kind: '1.02', opened: 'x', retired: 'y', part: 'witness', round: 0 }
  ]
  assert.equal(
    trackMixed(TRACK, recordWith({ ...retired, trackTries: tries, track }))?.id,
    't1.02v2'
  )
})

test('steps B and C take turns, B first; a kind that waits gives every turn to B', () => {
  const day = '2026-10-05'
  const track = [
    { kind: '1.01', opened: 'x', retired: 'y', part: 'witness', round: 0 },
    { kind: '1.02', opened: day, retired: '', part: 'verdict', round: 0 }
  ]
  const r = recordWith({ ...retired, track })
  assert.equal(trackAction(TRACK, r, day)?.n, 'B')
  assert.equal(trackAction(TRACK, { ...r, trackTurn: 'B' }, day)?.n, 'C')
  assert.equal(trackAction(TRACK, { ...r, trackTurn: 'C' }, day)?.n, 'B')
})

/** @type {import('./track-decode.logic.js').VerdictItem} */
const verdict = {
  id: 't1.01v1',
  lines: ['int main() {}'],
  device: false,
  levels: ['c++17', 'c++20'],
  answers: {
    'c++17': { verdict: 'ill-formed', lines: [3, 5] },
    'c++20': { verdict: 'unspecified' }
  },
  results: ['1 2', '2 1'],
  seen: {}
}

test('a verdict item is right when every level holds the stored verdict, its lines or its set; the first wrong level is named', () => {
  const right = {
    'c++17': { verdict: 'ill-formed', lines: [5, 3], results: [] },
    'c++20': { verdict: 'unspecified', lines: [], results: ['2 1', '1 2'] }
  }
  assert.deepEqual(verdictRight(verdict, right), { right: true, passed: 2, total: 2, first: null })
  const wrong = verdictRight(verdict, {
    ...right,
    'c++20': { verdict: 'unspecified', lines: [], results: ['1 2'] }
  })
  assert.equal(wrong.right, false)
  assert.equal(wrong.passed, 1)
  assert.equal(wrong.first?.level, 'c++20')
  assert.equal(wrong.first?.stored, 'unspecified behaviour: 1 2 | 2 1')
  assert.equal(verdictRight(verdict, {}).first?.given, 'no verdict')
})

test('a count item is right when every cell is the count recorded', () => {
  /** @type {import('./track-decode.logic.js').CountItem} */
  const c = {
    id: 't1.01c',
    lines: [],
    device: false,
    columns: ['copies', 'moves'],
    rows: [
      { line: 7, values: [1, 0] },
      { line: 9, values: [0, 2] }
    ],
    settings: {}
  }
  assert.deepEqual(
    countRight(c, [
      ['1', '0'],
      [' 0', '2 ']
    ]),
    { right: true, passed: 4, total: 4, first: null }
  )
  assert.deepEqual(
    countRight(c, [
      ['1', '0'],
      ['0', '1']
    ]).first,
    { line: 9, column: 'moves', given: '1', stored: '2' }
  )
})

/** @type {import('./track-decode.logic.js').AloneItem} */
const alone = {
  id: 't1.01a1',
  form: 'sanitizer',
  statement: [],
  device: false,
  settings: { sanitize: 'address' },
  result: 'output',
  reference: ['ref'],
  wrong: ['wrong'],
  examples: [{ input: '3 4\n', output: '12' }],
  tests: [{ input: '9 9\n', output: '81' }],
  witness: { kind: 'input', text: '65536 65536\n' }
}
/** @param {string} stdout @param {string} [stderr] @param {number} [exit] */
const out = (stdout, stderr = '', exit = 0) => ({
  stdout,
  stderr,
  exit,
  signal: null,
  finished: true
})
/** @param {ReturnType<typeof out>[]} runs */
const done = runs => ({ compiled: /** @type {const} */ (true), runs })

test("an item alone asks the runner for the learner's program and the reference, and is right when every test gives the reference's result cleanly", () => {
  const asks = aloneAsks(alone, 'mine')
  assert.equal(asks.length, 2)
  assert.deepEqual(asks[0], {
    files: { 'main.cpp': 'mine' },
    tests: [{ input: '3 4\n' }, { input: '9 9\n' }],
    std: 'c++23',
    sanitize: 'address'
  })
  const ref = done([out('12\n'), out('81\n')])
  assert.equal(aloneJudged(alone, 'mine', [ref, ref]).right, true)
  const loud = done([
    out('12\n'),
    out('81\n', 'main.cpp:7:20: runtime error: signed integer overflow: 1 * 2', 1)
  ])
  const j = aloneJudged(alone, 'mine', [loud, ref])
  assert.equal(j.right, false)
  assert.equal(j.passed, 1)
  assert.equal(j.first?.report, 'signed integer overflow, line 7')
  assert.equal(
    aloneJudged(alone, 'x', [{ compiled: false, error: 'main.cpp:1:1: error: x' }, ref]).error,
    'main.cpp:1:1: error: x'
  )
})

test('a flag item is judged by acceptance at each stated level; a probes item by each probe at its own line', () => {
  /** @type {import('./track-decode.logic.js').AloneItem} */
  const flag = {
    ...alone,
    form: 'flag',
    settings: {},
    expect: { 'c++17': 'reject', 'c++20': 'accept' }
  }
  const asks = aloneAsks(flag, 'p')
  assert.deepEqual(
    asks.map(a => [a.std, a.flags]),
    [
      ['c++17', ['-c']],
      ['c++20', ['-c']]
    ]
  )
  const at7 = { compiled: /** @type {const} */ (false), error: 'main.cpp:7:3: error: x' }
  assert.equal(aloneJudged(flag, 'p', [at7, done([])], [7]).right, true)
  // a rejection is right only at exactly the lines typed before the run
  assert.equal(aloneJudged(flag, 'p', [at7, done([])], [7, 9]).first?.given, 'rejected at line 7')
  assert.equal(aloneJudged(flag, 'p', [at7, done([])]).right, false)
  assert.equal(aloneJudged(flag, 'p', [done([]), done([])], [7]).first?.level, 'c++17')
})

test("a reading task's c++23 lines are asked at c++20 and right only at exactly the lines typed", () => {
  // a reading task's c++23 lines: c++20 must reject at exactly the lines typed
  const newer = { ...alone, newer: [3] }
  const n = aloneAsks(newer, 'p').length
  assert.equal(aloneAsks(newer, 'p').at(-1)?.std, 'c++20')
  const ok = [...Array(n - 1)].map(() => done([out('12\n'), out('81\n')]))
  assert.equal(
    aloneJudged(
      newer,
      'p',
      [...ok, { compiled: /** @type {const} */ (false), error: 'main.cpp:4:1: error: y' }],
      [4]
    ).right,
    true
  )
  assert.equal(
    aloneJudged(
      newer,
      'p',
      [...ok, { compiled: /** @type {const} */ (false), error: 'main.cpp:4:1: error: y' }],
      [3]
    ).right,
    false
  )
  // on the device too: nvcc compiles the host code at c++20 and names lines its own way
  const onDevice = { ...newer, device: true, settings: { device: true } }
  const dn = aloneAsks(onDevice, 'p')
  assert.deepEqual(
    [dn.at(-1)?.std, dn.at(-1)?.device, Object.keys(dn.at(-1)?.files ?? {})[0]],
    ['c++20', true, 'main.cu']
  )
  const dok = [...Array(dn.length - 1)].map(() => done([out('12\n'), out('81\n')]))
  assert.equal(
    aloneJudged(
      onDevice,
      'p',
      [...dok, { compiled: /** @type {const} */ (false), error: 'main.cu(4): error: y' }],
      [4]
    ).right,
    true
  )
})

test('a probes item is judged by each probe at its own line', () => {
  /** @type {import('./track-decode.logic.js').AloneItem} */
  const probes = {
    ...alone,
    form: 'probes',
    settings: {},
    probes: { lines: ['f(1);', 'f("x");'], accept: [1], reject: [2] }
  }
  const p = aloneAsks(probes, 'template <class T> void f(T);')
  assert.equal(p.length, 2)
  assert.equal(p[1]?.files['main.cpp'], 'template <class T> void f(T);\nf(1);\nf("x");\n')
  const yes = aloneJudged(probes, 'line one', [
    done([]),
    { compiled: false, error: 'main.cpp:3:1: error: no' }
  ])
  assert.equal(yes.right, true)
  const elsewhere = aloneJudged(probes, 'line one', [
    done([]),
    { compiled: false, error: 'main.cpp:1:1: error: no' }
  ])
  assert.equal(elsewhere.right, false)
})

test('a witness is right when the right version gives its result cleanly and the wrong version gives another', () => {
  assert.deepEqual(
    witnessAsks(alone, '1 2').map(a => a.files['main.cpp']),
    ['ref\n', 'wrong\n']
  )
  const clean = done([out('4294967296\n')])
  const loud = done([out('0\n', 'main.cpp:9:5: runtime error: signed integer overflow', 1)])
  assert.equal(witnessJudged(alone, [clean, loud]).right, true)
  assert.equal(witnessJudged(alone, [clean, clean]).right, false)
  assert.equal(witnessJudged(alone, [loud, loud]).right, false)
})

test("an orders item settled by its stored verdict: its witness is right when the wrong version's stored results hold one the reference does not give", () => {
  /** @type {import('./track-decode.logic.js').AloneItem} */
  const fence = { ...alone, form: 'orders', settings: { flags: ['-pthread'] }, forbids: ['0'] }
  const same = done([out('7\n')])
  const j = witnessJudged(fence, [same, same])
  assert.equal(j.right, true)
  assert.equal(j.wrong_gave, '7 or 0')
  const zero = done([out('0\n')])
  assert.equal(witnessJudged(fence, [zero, zero]).right, false)
  assert.equal(witnessJudged(fence, [{ compiled: false, error: 'e' }, same]).right, false)
})

test('a count read from a report: symbols by nm, instructions by opcode, registers and spills by kernel', () => {
  const nm =
    '0000000000001139 W void f<int>(int)\n0000000000001149 W void f<double>(double)\n                 U puts\n0000000000001159 T main\n'
  assert.equal(countOf('nm f<', { nm }), 2)
  const sass =
    '        /*0070*/                   LDG.E R2, desc[UR4][R2.64] ;\n        /*0080*/                   LDG.E.128 R4, desc[UR4][R6.64] ;\n        /*0090*/                   STG.E [R2.64], R5 ;\n'
  assert.equal(countOf('sass ^LDG', { sass }), 2)
  const ru =
    "ptxas info    : Compiling entry function '_Z4fillPii' for 'sm_89'\nptxas info    : Function properties for _Z4fillPii\n    0 bytes stack frame, 8 bytes spill stores, 8 bytes spill loads\nptxas info    : Used 10 registers, used 0 barriers\n"
  assert.equal(countOf('registers fill', { 'resource-usage': ru }), 10)
  assert.equal(countOf('spill fill', { 'resource-usage': ru }), 8)
  assert.equal(countOf('registers other', { 'resource-usage': ru }), -1)
})

test('gate C reads the first submit: an item alone wrong first and right on recall does not retire its kind', () => {
  const day = '2026-10-06'
  const tries = [{ id: 't1.01a1', date: '2026-10-05', right: false }]
  const recall = { 't1.01a1': [{ date: day, right: true, next: '2026-10-07' }] }
  const track = [{ kind: '1.01', opened: '2026-10-05', retired: '', part: 'witness', round: 0 }]
  const r = recordWith({ ...retired, track, trackTries: tries, recall })
  const witness = {
    n: /** @type {const} */ ('C'),
    step: /** @type {const} */ ('track'),
    id: /** @type {import('./track-decode.logic.js').TrackId} */ ('t1.01w1'),
    kind: '1.01',
    unit: /** @type {const} */ ('witness')
  }
  const next = trackAnswered(TRACK, r, { item: witness, right: true, day })
  assert.equal(next.track[0]?.retired, '')
  assert.equal(next.track[0]?.round, 1)
})

test("a stage 7 scan reads every answer once its kind is retired, and its own kind's items before; a hit makes the answer wrong and names the rule and line", () => {
  const f48 = { rule: 'F.48', warning: ['-Wpessimizing-move'] }
  const es87 = { rule: 'ES.87', pattern: '!=\\s*nullptr' }
  const kinds = [kind('7.01', { scan: f48 }), kind('7.02', { scan: es87 }), kind('8.01')]
  const record = {
    track: [
      {
        kind: '7.01',
        opened: 'd',
        retired: '2026-11-01',
        part: /** @type {const} */ ('witness'),
        round: 0
      }
    ],
    trackReading: { round: 0, task: 0, at: 0, wrong: [], done: '', reopened: [] }
  }
  const asked = (/** @type {string} */ id) => ({
    ...partsOf(id),
    n: /** @type {const} */ ('A'),
    step: /** @type {const} */ ('track'),
    id: /** @type {never} */ (id)
  })
  assert.deepEqual(
    scansOver(kinds, record, asked('t8.01a1'), alone),
    [f48],
    "a retired kind's scan"
  )
  assert.deepEqual(
    scansOver(kinds, record, asked('t7.02a1'), alone),
    [f48, es87],
    "and the open kind's own"
  )
  assert.deepEqual(
    scansOver(kinds, record, asked('t8.01a1'), { ...alone, exempt: ['F.48'] }),
    [],
    'a rule the statement asks to break'
  )
  const sw = { ...alone, witness: { kind: /** @type {const} */ ('scan'), text: '' } }
  assert.deepEqual(
    scansOver(kinds, record, asked('t7.02w1'), sw),
    [f48, es87],
    'a stage 7 witness: every scan that reads answers'
  )
  const reopened = {
    ...record,
    track: [],
    trackReading: { ...record.trackReading, reopened: ['7.01'] }
  }
  assert.deepEqual(
    scansOver(kinds, reopened, asked('t8.01a1'), alone),
    [f48],
    'a kind a reading opened again keeps its scan'
  )
})

test('a scan adds one compile, the one it was entered on; a hit makes the answer wrong and counts as one more check', () => {
  const f48 = { rule: 'F.48', warning: ['-Wpessimizing-move'] }
  const es87 = { rule: 'ES.87', pattern: '!=\\s*nullptr' }
  const sw = { ...alone, witness: { kind: /** @type {const} */ ('scan'), text: '' } }
  const asks = withScans(aloneAsks(alone, 'mine'), [f48], false)
  assert.equal(asks.length, 3, 'one more compile, the one the scan was entered on')
  assert.deepEqual(asks[2]?.flags, ['-c', '-Wpessimizing-move'])
  assert.deepEqual([asks[2]?.std, asks[2]?.report], ['c++23', ['resource-usage']])
  assert.equal(asks[0]?.flags, undefined, "the item's own runs stay as they are")
  const said = {
    compiled: /** @type {const} */ (true),
    runs: [],
    reports: {
      'resource-usage': 'main.cpp:4:21: warning: moving a local object [-Wpessimizing-move]'
    }
  }
  assert.deepEqual(scanned({ right: true }, [f48], 'x', [said], false), {
    right: false,
    scan: 'F.48 flags line 4'
  })
  assert.deepEqual(
    scanned({ right: true, passed: 3, total: 3 }, [f48], 'x', [said], false),
    { right: false, passed: 3, total: 4, scan: 'F.48 flags line 4' },
    'the scans count as one more check'
  )
  assert.deepEqual(scanned({ right: true }, [es87], 'if (p != nullptr) {\n}\n', [], false), {
    right: false,
    scan: 'ES.87 flags line 1'
  })
  assert.deepEqual(scanned({ right: true }, [es87], 'if (p) {\n}\n', [], false), { right: true })
  const w = witnessAsks(sw, 'int f();\n')
  assert.equal(w.length, 1)
  assert.deepEqual(w[0]?.flags, ['-c'])
  assert.equal(witnessJudged(sw, [{ compiled: true, runs: [] }]).right, true)
  assert.equal(witnessJudged(sw, [{ compiled: false, error: 'e' }]).right, false)
})
