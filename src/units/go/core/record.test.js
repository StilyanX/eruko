// The Go record ("A Self-Study System", The build, Go, The record): its eleven fields, the course's
// state in step with the course, and a forced change.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { SERVER, forcedChange, kindLine, recordOf, serverStored, setUpAgain, withKind } from './record.logic.js'
import { kindId } from './decode.logic.js'
import { courseFrom } from '../../../../tests/lib/go-typed.mjs'

const course = courseFrom({
  parts: [{ n: 1, name: 'a', items: ['R1.1'] }],
  kinds: [
    { id: 1, name: 'x', after: [], problems: ['1.1', '1.2'] },
    { id: 2, name: 'y', after: [1], problems: ['2.1'] }
  ]
})

test('an empty record holds every field of the paper, and the course in order', () => {
  const r = recordOf({}, course)
  assert.deepEqual(Object.keys(r).sort(), ['course', 'engine', 'first', 'games', 'own', 'position', 'readings', 'recall', 'server', 'start', 'tries'])
  assert.deepEqual(r.own, { problems: [], kinds: [], seen: [] })
  assert.deepEqual(r.course, [
    { part: 1, done: '' },
    { opened: '', retired: '', kind: 1, after: [] },
    { opened: '', retired: '', kind: 2, after: [1] }
  ])
  assert.deepEqual(r.start, { counted: '', equal: '' })
  assert.equal(r.position.open, null)
  // a record from before `equal` reads it as empty
  assert.deepEqual(recordOf({ ...r, start: { counted: '2026-10-03' } }, course).start, { counted: '2026-10-03', equal: '' })
})

test('a record keeps its state when the course grows, and reads the same twice', () => {
  const one = withKind(recordOf({}, { ...course, kinds: course.kinds.slice(0, 1) }), kindId(1), { opened: '2026-10-08', retired: '2026-10-09' })
  const two = recordOf(one, course)
  assert.equal(kindLine(two, kindId(1))?.retired, '2026-10-09')
  assert.equal(kindLine(two, kindId(2))?.retired, '')
  assert.deepEqual(recordOf(two, course), two)
})

test('a record from before these fields starts again, and an odd one never throws', () => {
  assert.deepEqual(recordOf({ list: { 1.1: [] }, retired: { 1: '2026-10-08' } }, course), recordOf({}, course))
  for (const odd of [null, undefined, 3, 'x', []]) assert.equal(recordOf(odd, course).tries.length, 0)
})

test('a forced change clears the first line and marks the readings as before it', () => {
  // an older record: first and readings carry only `games`, which is all a forced change reads
  const r = /** @type {import('./decode.logic.js').GoRecord} */ (/** @type {unknown} */ ({ ...recordOf({}, course), first: { games: 45 }, readings: [{ games: 15 }, { games: 30 }] }))
  const after = forcedChange(r)
  assert.equal(after.first, null)
  assert.ok(after.readings.every((/** @type {{ before?: unknown }} */ x) => x.before))
})

test('set up again keeps the first line for the same OGS account, and clears it for another', () => {
  const r = /** @type {import('./decode.logic.js').GoRecord} */ (/** @type {unknown} */ ({
    ...recordOf({}, course),
    server: { ...SERVER, user: 'learner', id: 1234, since: '2026-10-01' },
    first: { games: 45 },
    readings: [{ games: 15 }]
  }))
  const again = setUpAgain(r)
  assert.equal(again.engine, null)
  assert.equal(again.server, null)
  assert.equal(again.position.was, 1234)
  assert.deepEqual(again.first, { games: 45 }, 'kept until another account is stored')
  const same = serverStored(again, { ...SERVER, user: 'Learner', id: 1234, since: '2026-10-17' })
  assert.deepEqual(same.first, { games: 45 })
  assert.equal(same.position.was, undefined)
  assert.ok(same.readings.every((/** @type {{ before?: unknown }} */ x) => !x.before))
  const other = serverStored(again, { ...SERVER, user: 'someone', id: 99, since: '2026-10-17' })
  assert.equal(other.first, null)
  assert.ok(other.readings.every((/** @type {{ before?: unknown }} */ x) => x.before))
})

test('a line that names a problem, a rules item or a game the record no longer holds is left out', () => {
  const games = [{ id: 7, moves: ['D4'], list: [{ move: 1 }] }]
  const r = recordOf(
    {
      recall: { 'R1.1': [{ date: '2026-10-08' }], '9.99': [{ date: '2026-10-08' }] },
      tries: [{ id: '1.2' }, { id: '9.99' }],
      games: [...games, null, { id: 8 }],
      position: { open: { step: 'recall', id: '9.99' } }
    },
    course
  )
  assert.deepEqual(Object.keys(r.recall), ['R1.1'])
  assert.deepEqual(r.tries, [{ id: '1.2' }])
  // a game read is held with every field the unit reads: an answer list not yet begun is empty
  assert.deepEqual(r.games, [{ ...games[0], pass: [] }])
  assert.equal(r.position.open, null)
  const open = (/** @type {Record<string, unknown>} */ o) => recordOf({ games, position: { open: o } }, course).position.open
  assert.deepEqual(open({ step: 'new', id: '1.2' }), { step: 'new', id: '1.2' })
  assert.deepEqual(open({ step: 'review', game: 7, index: 0 }), { step: 'review', game: 7, index: 0 })
  assert.equal(open({ step: 'review', game: 7, index: 3 }), null)
  assert.equal(open({ step: 'count', game: 99 }), null)
  assert.deepEqual(open({ step: 'reading' }), { step: 'reading' })
})

test('an open item that needs a game and names none is not reopened', () => {
  for (const step of ['count', 'review'])
    assert.equal(recordOf({ position: { open: { n: 3, step } } }, course).position.open, null)
})
