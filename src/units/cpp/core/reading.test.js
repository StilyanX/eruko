import assert from 'node:assert/strict'
import { test } from 'node:test'
import { courseFrom, decodeRecord } from './decode.logic.js'
import { readingAnswered, readingFirst } from './reading.logic.js'
import { unitsOf } from './track-decode.logic.js'
import { trackFirst } from './track.logic.js'

/** @param {string} id @param {Partial<import('./track-decode.logic.js').ReadingTask>} [more] @returns {import('./track-decode.logic.js').ReadingTask} */
const task = (id, more = {}) => ({
  id,
  stage: 0,
  name: `Task ${id}`,
  part: 'a task',
  after: [],
  clause: ['QUDA include/x.cuh'],
  levels: ['c++23'],
  device: true,
  verdicts: [`t${id}v1`],
  count: null,
  alones: [`t${id}a1`],
  task: 'a task',
  shape: 'QUDA include/x.cuh',
  intro: ['Write it.'],
  bound: { count: 'the bytes per site', answer: 1440, source: 'x.cuh', derivations: ['a', 'b'] },
  tags: { [`t${id}b`]: '8.01', [`t${id}v1`]: '8.01', [`t${id}a1`]: '9.11', [`t${id}w1`]: '9.11' },
  ...more
})
/** @param {string} id @returns {import('./track-decode.logic.js').TrackKind} */
const kind = id => ({
  id,
  stage: Number(id[0]),
  name: id,
  part: id,
  after: [],
  clause: [],
  levels: ['c++23'],
  device: false,
  verdicts: [],
  count: null,
  alones: []
})

const TASKS = [task('0.01'), task('0.02')]
const course = courseFrom([], [], [kind('8.01'), kind('9.11')], [], TASKS)
const retired = { kind: '', opened: '2026-11-01', retired: '2026-11-02', part: 'witness', round: 0 }
const fresh = () =>
  decodeRecord(
    {
      track: [
        { ...retired, kind: '8.01' },
        { ...retired, kind: '9.11' }
      ]
    },
    course
  )

test("a task's units: the bound, its verdict items, its count item, the item alone, its witness", () => {
  assert.deepEqual(unitsOf(task('0.01', { count: 't0.01c' })), [
    't0.01b',
    't0.01v1',
    't0.01c',
    't0.01a1',
    't0.01w1'
  ])
})

test('the reading is asked once every track kind is retired, unit by unit, task by task', () => {
  let r = fresh()
  assert.equal(trackFirst(course.track, r, course.reading)?.step, 'track')
  const seen = []
  for (let i = 0; i < 6; i++) {
    const a = readingFirst(TASKS, r)
    assert.ok(a && a.step === 'track')
    seen.push(a.id)
    r = readingAnswered(TASKS, course.track, r, {
      id: a.id,
      kind: a.kind,
      right: true,
      day: '2026-11-03'
    })
  }
  assert.deepEqual(seen, ['t0.01b', 't0.01v1', 't0.01a1', 't0.01w1', 't0.02b', 't0.02v1'])
  r = readingAnswered(TASKS, course.track, r, {
    id: 't0.02a1',
    kind: '0.02',
    right: true,
    day: '2026-11-03'
  })
  r = readingAnswered(TASKS, course.track, r, {
    id: 't0.02w1',
    kind: '0.02',
    right: true,
    day: '2026-11-04'
  })
  assert.equal(r.trackReading.done, '2026-11-04', 'right when every unit was right')
  assert.equal(readingFirst(TASKS, r), null)
  assert.equal(r.recall['t0.02w1'], undefined, 'a reading writes no dated line')
})

test('a wrong check opens its tagged kind again with fresh items, and the next reading waits for fresh tasks', () => {
  let r = fresh()
  for (const t of TASKS)
    for (const id of unitsOf(t))
      r = readingAnswered(TASKS, course.track, r, {
        id,
        kind: t.id,
        right: id !== 't0.02a1',
        day: '2026-11-03'
      })
  const line = r.track.find(t => t.kind === '9.11')
  assert.deepEqual([line?.retired, line?.part, line?.round], ['', 'example', 1])
  assert.equal(
    r.track.find(t => t.kind === '8.01')?.retired,
    '2026-11-02',
    'an untagged kind stays retired'
  )
  assert.equal(
    trackFirst(course.track, r, course.reading)?.step,
    'track-example',
    'the reopened kind runs first'
  )
  const back = { ...r, track: r.track.map(t => ({ ...t, retired: '2026-11-05' })) }
  assert.deepEqual(readingFirst(TASKS, back), { n: 'C', step: 'track-waits', kind: 'reading' })
  // once the next reading's tasks are written, it asks them from its first unit
  const next = [...TASKS, task('0.11', { round: 1 }), task('0.12', { round: 1 })]
  assert.deepEqual(readingFirst(next, back), {
    n: 'C',
    step: 'track',
    id: 't0.11b',
    kind: '0.11',
    unit: 'bound'
  })
  let s = back
  for (const t of next.slice(2))
    for (const id of unitsOf(t))
      s = readingAnswered(next, course.track, s, { id, kind: t.id, right: true, day: '2026-11-06' })
  assert.equal(s.trackReading.done, '2026-11-06', 'the second reading right ends the reading')
})

test('a wrong bound is a wrong check: it opens the kind it is tagged with', () => {
  let r = fresh()
  for (const t of TASKS)
    for (const id of unitsOf(t))
      r = readingAnswered(TASKS, course.track, r, {
        id,
        kind: t.id,
        right: id !== 't0.01b',
        day: '2026-11-03'
      })
  assert.equal(r.trackReading.done, '')
  assert.equal(r.track.find(t => t.kind === '8.01')?.retired, '')
  assert.deepEqual(r.trackReading.reopened, ['8.01'])
})
