import assert from 'node:assert/strict'
import { test } from 'node:test'
import { courseFrom, decodeRecord } from './decode.logic.js'
import { nextAction, place, trackOpen, trackRows } from './next.logic.js'
import { step } from './session.logic.js'
import {
  aloneAsks,
  aloneJudged,
  countOf,
  countRight,
  itemsOf,
  partsOf,
  sideToday,
  trackAction,
  trackAnswered,
  trackDue,
  trackMixed,
  verdictRight,
  witnessAsks,
  witnessJudged
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
  [{ title: 'First kinds', first: 1, last: 1 }],
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
  assert.equal(rows[0]?.opens, 'Opens once the twelve first kinds are retired.')
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
  assert.equal(Object.keys(r.recall).length, 4, 'every track item answered writes a line')
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
  assert.equal(aloneJudged(flag, 'p', [{ compiled: false, error: '' }, done([])]).right, true)
  assert.equal(aloneJudged(flag, 'p', [done([]), done([])]).first?.level, 'c++17')
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
