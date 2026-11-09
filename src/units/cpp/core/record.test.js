// The C++ record ("A Self-Study System", The build, Programming, The record): its twelve fields,
// what Setup stores once, the next contest's start, a change of series or method, and the
// practice submission.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  BUILT_WITH,
  CHECK,
  LANGUAGE,
  SERVER,
  kindLine,
  nextTyped,
  practiceAccepted,
  recordOf,
  runtimeChanged,
  runtimeChecked,
  seriesTyped,
  setupStored,
  withKind
} from './record.logic.js'
import { courseFrom, kindId, problemId } from './decode.logic.js'

const course = courseFrom(
  [{ title: 'Whole programs', first: 1, last: 1 }],
  [{ id: 1, name: 'a', after: [], plan: [], problems: ['1.01'], trace: 'T1' }]
)
const about = { compiler: 'g++', version: BUILT_WITH.version, standard: 'c++23' }

test("an empty record holds every field of the paper's table, and the track's own five", () => {
  assert.deepEqual(Object.keys(recordOf({}, course)).sort(), [
    'contests',
    'course',
    'pin',
    'position',
    'practice',
    'readings',
    'recall',
    'runs',
    'runtime',
    'server',
    'sessions',
    'side',
    'track',
    'trackReading',
    'trackTries',
    'trackTurn',
    'tries',
    'turn'
  ])
})

test('Setup stores the runtime the course was built with and the server as typed, from the day typed', () => {
  const r = setupStored(recordOf({}, course), {
    user: 'learner',
    series: 'abc',
    zone: 'Asia/Tokyo',
    day: '2026-10-01'
  })
  assert.deepEqual(r.runtime, {
    language: LANGUAGE,
    ...BUILT_WITH,
    refused: []
  })
  assert.deepEqual(r.server, {
    ...SERVER,
    user: 'learner',
    series: 'abc',
    zone: 'Asia/Tokyo',
    next: '',
    from: '2026-10-01'
  })
  // set up again: the next contest typed is kept
  const again = setupStored(nextTyped(r, '2026-11-07T21:00'), {
    user: 'other',
    series: 'abc',
    zone: 'Asia/Tokyo',
    day: '2026-10-02'
  })
  assert.equal(again.server?.next, '2026-11-07T21:00')
  // the check program reads two numbers and prints their sum
  assert.match(CHECK.code, /std::println\("\{\}", a \+ b\);/)
  assert.deepEqual(CHECK.tests, [{ input: '2 3\n', output: '5\n' }])
})

test('the next contest and a change of series or method are typed once the server is stored', () => {
  const r = setupStored(recordOf({}, course), {
    user: 'learner',
    series: 'abc',
    zone: 'UTC',
    day: '2026-10-01'
  })
  assert.equal(nextTyped(r, '2026-11-07T12:00').server?.next, '2026-11-07T12:00')
  const changed = seriesTyped(r, 'arc', '2027-03-01')
  assert.equal(changed.server?.series, 'arc')
  assert.equal(changed.server?.from, '2027-03-01')
  assert.throws(() => nextTyped(recordOf({}, course), '2026-11-07T12:00'), /server is stored/)
})

test('"Accepted" keeps the first day pressed; a kind line changes in place', () => {
  const r = practiceAccepted(practiceAccepted(recordOf({}, course), '2026-12-01'), '2026-12-02')
  assert.equal(r.practice, '2026-12-01')
  assert.equal(
    kindLine(withKind(r, kindId(1), { retired: '2026-11-30' }), kindId(1))?.retired,
    '2026-11-30'
  )
})

test('the runtime change step: another compiler or version reported sets the new runtime with the problems it refuses', () => {
  assert.equal(runtimeChanged(null, about), false, 'no runtime stored: Setup stores one')
  const r = setupStored(recordOf({ recall: { 1.01: [] } }, course), {
    user: 'learner',
    series: 'abc',
    zone: 'UTC',
    day: '2026-10-01'
  })
  assert.equal(runtimeChanged(r.runtime, about), false)
  const newer = { ...about, version: 'g++ (GCC) 17.1.0' }
  assert.equal(runtimeChanged(r.runtime, newer), true)
  assert.equal(runtimeChanged(r.runtime, { ...about, compiler: 'clang++' }), true)
  const checked = runtimeChecked(r, newer, [problemId('1.01')])
  assert.deepEqual(checked.runtime, {
    language: LANGUAGE,
    name: 'g++',
    version: 'g++ (GCC) 17.1.0',
    refused: ['1.01']
  })
  assert.deepEqual(checked.recall, r.recall, 'dated lines stay')
  assert.equal(runtimeChanged(checked.runtime, newer), false)
  assert.throws(() => runtimeChecked(recordOf({}, course), newer, []), /once one is stored/)
})
