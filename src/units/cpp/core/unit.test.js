// What the app reads of the C++ unit (src/units/cpp/core/unit.logic.js), on the course the
// generator wrote: the place line, Start done, the rows of the unit page and the dated list.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINDS } from './course.gen.js'
import { TRACK } from './track.gen.js'
import { unit } from './unit.logic.js'

const day = '2026-10-08'
const [FIRST] = KINDS
assert.ok(FIRST)
const set = {
  runtime: { language: 'C++23', name: 'g++', version: '16' },
  server: {
    name: 'AtCoder',
    user: 'learner',
    series: 'abc',
    language: '',
    zone: 'UTC',
    next: '',
    from: day
  }
}

test('the place line names the open kind by its place among the kinds; then that every kind is retired', () => {
  assert.equal(unit.place({}), `Kind 1 of ${KINDS.length}: ${FIRST.name}.`)
  const course = KINDS.map(k => ({ kind: k.id, opened: day, retired: day, part: 'alone' }))
  const track = TRACK[0] ? ` Track kind 1 of ${TRACK.length}: ${TRACK[0].name}.` : ''
  assert.equal(
    unit.place({ cpp: { course } }),
    `All ${KINDS.length} kinds done.${track}`,
    'the track opens then'
  )
})

test('Start is done once Setup is stored and the filled trace read', () => {
  assert.deepEqual(unit.finished({}), new Set())
  assert.deepEqual(unit.finished({ cpp: set }), new Set())
  const read = { ...set, course: [{ kind: FIRST.id, opened: day, retired: '', part: 'example' }] }
  assert.deepEqual(unit.finished({ cpp: read }), new Set(['start']))
  const retired = { ...set, course: [{ kind: FIRST.id, opened: day, retired: day, part: 'start' }] }
  assert.deepEqual(
    unit.finished({ cpp: retired }),
    new Set(['start']),
    'a retired first kind is past it'
  )
})

test('the rows: Start, the work list, then the kinds, the open one opening the work list', () => {
  const rows = unit.rows({})
  assert.deepEqual(rows.start, {
    key: 'start',
    title: 'Start',
    to: '/explore/programming/cpp/start',
    done: false
  })
  assert.deepEqual(
    rows.top.map(r => r.title),
    ['Work list']
  )
  assert.equal(
    rows.items.length,
    KINDS.length + TRACK.length,
    "the course's kinds, then the track's"
  )
  // before Start is done, the open kind opens Start
  assert.deepEqual(rows.items[0], {
    key: FIRST.id,
    title: FIRST.name,
    to: '/explore/programming/cpp/start',
    done: false
  })
  const read = { ...set, course: [{ kind: FIRST.id, opened: day, retired: '', part: 'example' }] }
  assert.equal(unit.rows({ cpp: read }).items[0]?.to, '/explore/programming/cpp/work')
  assert.ok(rows.items.slice(1).every(r => r.to === undefined && !r.done))
  if (TRACK[0])
    assert.equal(rows.items[KINDS.length]?.opens, 'Opens once the twelve whole-program kinds are retired.')
})

test('the dated list: the dated items, and the steps with no date that wait today', () => {
  const recall = { [FIRST.trace]: [{ date: day, right: true, next: '2026-10-09' }] }
  const course = [{ kind: FIRST.id, opened: day, retired: '', part: 'example' }]
  const [group] = unit.dated({ cpp: { ...set, course, recall } }, day)
  assert.deepEqual(group?.dates, ['2026-10-09'])
  assert.equal(group?.to, '/explore/programming/cpp/work')
  assert.equal(group?.fresh, 1, 'the first run')
  assert.equal(unit.dated({}, day)[0]?.fresh, 0, 'nothing waits on the work list before Start')
  assert.equal(unit.dated({ cpp: set }, day)[0]?.fresh, 0, 'nor before the filled trace is read')
})
