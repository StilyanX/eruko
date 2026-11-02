// The C++ session step (src/units/cpp/core/session.logic.js): what each move and each reply does
// to the record and which effects it asks for; a reply after its item was stopped changes
// nothing; and one stored log of events (Setup, the first kind's first run with a submit stopped,
// a Parsons problem, a stale reply, "No further step") replayed to its stored record, byte for byte.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { RUNNER_DOWN, step } from './session.logic.js'
import { courseFrom, kindId } from './decode.logic.js'
import { recordOf, withKind } from './record.logic.js'
import { nextAction } from './next.logic.js'

/**
 * @template T
 * @param {unknown} value
 * @returns {T}
 */
const typed = value => /** @type {T} */ (value)

const course = courseFrom(
  [{ title: 'First kinds', first: 1, last: 1 }],
  [
    {
      id: 1,
      name: 'Compute and print a value',
      after: [],
      plan: ['Print the value.'],
      problems: ['1.01', '1.02', '1.03', '1.04'],
      trace: 'T1'
    },
    {
      id: 2,
      name: 'Read a line of input and print a result',
      after: [1],
      plan: ['Print the length.'],
      problems: ['2.01'],
      trace: 'T2'
    }
  ]
)
const day = '2026-10-08'
const fresh = () => recordOf({}, course)
const tests = [
  { input: '2 3\n', output: '6\n' },
  { input: '4 5\n', output: '20\n' }
]
/** @param {string[]} outputs */
const reply = outputs => ({
  compiled: /** @type {const} */ (true),
  runs: outputs.map(stdout => ({ stdout, stderr: '', exit: 0, signal: null, finished: true }))
})
/** @type {import('./decode.logic.js').Asked} */
const alone = typed({ n: 5, step: 'alone', id: '1.02', kind: 1 })

/**
 * The record after a list of events, from `r`.
 * @param {readonly import('./session.logic.js').Event[]} events
 * @param {import('./decode.logic.js').CppRecord} [r]
 */
const after = (events, r = fresh()) => events.reduce((x, e) => step(course, x, e).state, r)

/** @type {readonly import('./session.logic.js').Event[]} */
const LOG = typed([
  {
    t: 'setup-stored',
    user: 'learner',
    series: 'abc',
    zone: 'Europe/Copenhagen',
    day: '2026-10-07'
  },
  { t: 'start-read', day },
  { t: 'example-read', kind: 1, day },
  {
    t: 'trace-answered',
    item: { n: 5, step: 'trace', id: 'T1', kind: 1 },
    trace: {
      id: 'T1',
      lines: [],
      columns: ['a'],
      inputs: ['2\n', '3\n'],
      rows: [{ line: 5, values: ['2'] }],
      output: '9\n'
    },
    cells: [['5', ' 2 ']],
    output: '9',
    day
  },
  { t: 'next' },
  { t: 'submit', item: { n: 5, step: 'parsons', id: '1.01', kind: 1 }, code: 'parsons', tests },
  {
    t: 'submitted',
    item: { n: 5, step: 'parsons', id: '1.01', kind: 1 },
    code: 'parsons',
    tests,
    reply: reply(['6\n', '21\n']),
    day
  },
  { t: 'next' },
  { t: 'code-kept', item: alone, code: 'int main() {' },
  { t: 'run-examples', item: alone, code: 'int main() {}', tests: tests.slice(0, 1) },
  {
    t: 'examples-ran',
    item: alone,
    reply: { compiled: false, error: "main.cpp:1:13: error: expected '}'" }
  },
  { t: 'submit', item: alone, code: 'int main() { loop(); }', tests },
  { t: 'stop', item: alone, total: 2, day },
  {
    t: 'submitted',
    item: alone,
    code: 'int main() { loop(); }',
    tests,
    reply: reply(['6\n', '20\n']),
    day
  },
  { t: 'next' },
  {
    t: 'no-further-step',
    item: { n: 5, step: 'parsons', id: '1.03', kind: 1 },
    code: '',
    day: '2026-10-09'
  }
])

const STATE = `{
 "runtime": {
  "language": "C++23",
  "name": "g++",
  "version": "g++ (GCC) 16.2.0",
  "refused": []
 },
 "server": {
  "name": "AtCoder",
  "language": "C++23 (GCC 15.2.0)",
  "user": "learner",
  "series": "abc",
  "zone": "Europe/Copenhagen",
  "next": "",
  "from": "2026-10-07"
 },
 "course": [
  {
   "kind": 1,
   "opened": "2026-10-08",
   "retired": "",
   "part": "alone"
  },
  {
   "kind": 2,
   "opened": "",
   "retired": "",
   "part": "example"
  }
 ],
 "recall": {
  "T1": [
   {
    "date": "2026-10-08",
    "right": true,
    "next": "2026-10-09"
   }
  ],
  "1.02": [
   {
    "date": "2026-10-08",
    "right": false,
    "next": "2026-10-09"
   }
  ]
 },
 "tries": [
  {
   "id": "1.01",
   "date": "2026-10-08",
   "right": false,
   "mixed": false
  },
  {
   "id": "1.02",
   "date": "2026-10-08",
   "right": false,
   "mixed": false
  },
  {
   "id": "1.03",
   "date": "2026-10-09",
   "right": false,
   "mixed": false
  }
 ],
 "runs": [
  {
   "id": "1.01",
   "date": "2026-10-08",
   "passed": 1,
   "total": 2,
   "code": "parsons"
  },
  {
   "id": "1.02",
   "date": "2026-10-08",
   "passed": 0,
   "total": 2,
   "code": "int main() { loop(); }"
  }
 ],
 "contests": [],
 "practice": "",
 "readings": [],
 "position": {
  "open": {
   "n": 5,
   "step": "parsons",
   "id": "1.03",
   "kind": 1,
   "code": "",
   "right": false,
   "verdict": null
  },
  "pasted": ""
 },
 "sessions": [
  "2026-10-08",
  "2026-10-09"
 ],
 "turn": 5,
 "track": [],
 "trackTries": [],
 "trackTurn": null,
 "side": {
  "day": "2026-10-09",
  "side": "course"
 },
 "pin": null
}
`

test('a stored log of events replays to its stored record, byte for byte', () => {
  const state = after(LOG)
  assert.equal(`${JSON.stringify(state, null, 1)}\n`, STATE)
})

test('a run begun asks the runner, and its reply comes back to the item still running it', () => {
  const run = step(course, fresh(), { t: 'submit', item: alone, code: 'x', tests })
  assert.deepEqual(run.effects, [{ t: 'run', item: alone, code: 'x', tests, why: 'submit' }])
  assert.deepEqual(run.state.position.open, { ...alone, code: 'x', running: 'submit', ran: null })
  const right = step(course, run.state, {
    t: 'submitted',
    item: alone,
    code: 'x',
    tests,
    reply: reply(['6\n', '20 \n']),
    day
  })
  assert.deepEqual(right.effects, [{ t: 'say', text: 'Right.' }])
  assert.deepEqual(right.state.position.open, {
    ...alone,
    code: 'x',
    right: true,
    verdict: { passed: 2, total: 2, failed: null, error: '' }
  })
  // a reply to an item no longer running changes nothing
  assert.deepEqual(
    step(course, right.state, {
      t: 'submitted',
      item: alone,
      code: 'x',
      tests,
      reply: reply([]),
      day
    }),
    { state: right.state, effects: [] }
  )
  assert.deepEqual(step(course, fresh(), { t: 'examples-ran', item: alone, reply: reply([]) }), {
    state: fresh(),
    effects: []
  })
  const examples = step(course, fresh(), { t: 'run-examples', item: alone, code: 'y', tests })
  assert.equal(examples.effects[0]?.t === 'run' && examples.effects[0].why, 'examples')
  const ran = step(course, examples.state, {
    t: 'examples-ran',
    item: alone,
    reply: reply(['6\n'])
  }).state
  assert.deepEqual(ran.position.open, { ...alone, code: 'y', running: null, ran: reply(['6\n']) })
})

test('"Stop" counts a submit running as wrong, and only stops a run on the examples', () => {
  const running = step(course, fresh(), { t: 'submit', item: alone, code: 'x', tests }).state
  const stopped = step(course, running, { t: 'stop', item: alone, total: 2, day })
  assert.deepEqual(stopped.effects, [{ t: 'stop' }, { t: 'say', text: 'Wrong.' }])
  assert.deepEqual(stopped.state.runs, [{ id: '1.02', date: day, passed: 0, total: 2, code: 'x' }])
  const examples = step(course, fresh(), { t: 'run-examples', item: alone, code: 'y', tests }).state
  const off = step(course, examples, { t: 'stop', item: alone, total: 2, day })
  assert.deepEqual(off.effects, [{ t: 'stop' }])
  assert.equal(
    off.state.position.open &&
      'running' in off.state.position.open &&
      off.state.position.open.running,
    null
  )
  assert.deepEqual(step(course, fresh(), { t: 'stop', item: alone, total: 2, day }), {
    state: fresh(),
    effects: [{ t: 'stop' }]
  })
})

test('the runner not answering says so, and the item waits with its program', () => {
  const running = step(course, fresh(), { t: 'submit', item: alone, code: 'x', tests }).state
  const down = step(course, running, { t: 'runner-down', item: alone })
  assert.deepEqual(down.effects, [{ t: 'say', text: RUNNER_DOWN }])
  assert.deepEqual(down.state.position.open, { ...alone, code: 'x', running: null, ran: null })
  assert.equal(nextAction(course, down.state, day), down.state.position.open)
})

test('the contest record pasted opens the reading screen before the first reading; practice comes after the first kinds', () => {
  assert.throws(
    () => step(course, fresh(), { t: 'practice-accepted', day }),
    /every first kind is retired/
  )
  assert.throws(
    () => step(course, fresh(), { t: 'record-pasted', rows: [], day }),
    /start gate is open/
  )
  const set = after([
    {
      t: 'setup-stored',
      user: 'learner',
      series: 'abc',
      zone: 'UTC',
      day
    }
  ])
  const retired = withKind(set, kindId(1), { retired: day })
  const open = after(
    [
      { t: 'practice-accepted', day: '2026-12-01' },
      { t: 'next-typed', next: '2026-12-05T13:00' }
    ],
    retired
  )
  assert.equal(open.practice, '2026-12-01')
  assert.equal(open.server?.next, '2026-12-05T13:00')
  const rows = [
    { contest: 'ABC 430', date: '2026-11-28', performance: 900 },
    { contest: 'ABC 431', date: '2026-12-05', performance: 712 }
  ]
  const pasted = after(
    [
      { t: 'record-pasted', rows, day: '2026-12-06' },
      { t: 'record-pasted', rows, day: '2026-12-06' }
    ],
    open
  )
  assert.deepEqual(
    pasted.contests,
    [rows[1]],
    'a contest before the start gate opened is not kept, and none twice'
  )
  assert.deepEqual(pasted.position, { open: { n: 1, step: 'reading' }, pasted: '2026-12-06' })
  const typedNext = after(
    [{ t: 'next' }, { t: 'series-typed', series: 'arc', day: '2026-12-06' }],
    pasted
  )
  assert.equal(typedNext.server?.from, '2026-12-06')
  assert.deepEqual(nextAction(course, typedNext, '2026-12-06'), { n: 1, step: 'next-contest' })
})

test('the runtime change step stores the new runtime and the problems it refuses', () => {
  const set = after(LOG.slice(0, 1))
  const about = { compiler: 'g++', version: 'g++ (GCC) 17.1.0', standard: 'c++23' }
  const checked = step(course, set, { t: 'runtime-checked', about, refused: typed(['1.01']) })
  assert.deepEqual(checked.effects, [])
  assert.deepEqual(checked.state.runtime?.refused, ['1.01'])
  assert.equal(checked.state.runtime?.version, 'g++ (GCC) 17.1.0')
})

test('a trace item answered keeps what was typed with its verdict', () => {
  const trace = typed({
    id: 'T1',
    lines: [],
    columns: ['a'],
    inputs: ['2\n', '3\n'],
    rows: [{ line: 5, values: ['2'] }],
    output: '9\n'
  })
  const item = typed({ n: 2, step: 'recall', id: 'T1', kind: 1 })
  const r = step(course, fresh(), {
    t: 'trace-answered',
    item,
    trace,
    cells: [['5', '2']],
    output: '9',
    day
  })
  const open = r.state.position.open
  assert.equal(open && 'code' in open ? open.code : '', '{"cells":[["5","2"]],"output":"9"}')
})

test('a run no page waits on any more is let go, its program kept; with nothing running it changes nothing', () => {
  const running = step(course, fresh(), { t: 'submit', item: alone, code: 'x', tests }).state
  const lost = step(course, running, { t: 'run-lost', item: alone })
  assert.deepEqual(lost, {
    state: {
      ...running,
      position: { ...running.position, open: { ...alone, code: 'x', running: null, ran: null } }
    },
    effects: []
  })
  assert.deepEqual(step(course, fresh(), { t: 'run-lost', item: alone }), {
    state: fresh(),
    effects: []
  })
})

test('Change set-up stores the user name and time zone again, and keeps the rest of the record', () => {
  const r = after(LOG)
  const changed = step(course, r, {
    t: 'setup-changed',
    user: 'other',
    zone: 'Asia/Tokyo'
  })
  assert.deepEqual(changed.effects, [])
  assert.deepEqual(changed.state, {
    ...r,
    server: r.server && { ...r.server, user: 'other', zone: 'Asia/Tokyo' }
  })
  assert.throws(
    () => step(course, fresh(), { t: 'setup-changed', user: 'x', zone: 'UTC' }),
    /server is stored/
  )
})
