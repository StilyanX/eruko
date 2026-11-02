// Problems from the learner's own games ("A Self-Study System", Go, Problems past the found
// material): built when no never-tried problem is left, from the positions of a reviewed game's
// list, kept in the record with the kinds they make.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINDS, PARTS, SECTIONS } from './course.gen.js'
import { courseOf, courseUsed, nextPosition, sectionsOf, withOwn, withWritten } from './own.logic.js'
import { recordOf } from './record.logic.js'
import { NO_OWN, problemId } from './decode.logic.js'
import { keyFrom, recordFrom } from '../../../../tests/lib/go-typed.mjs'

/**
 * Only the fields withOwn reads; the cast through unknown is deliberate, the rest of a Problem
 * (diagram, region, answers) plays no part in these tests.
 * @param {string[]} reasons
 * @returns {import('./decode.logic.js').Problem}
 */
const problem = reasons =>
  /** @type {import('./decode.logic.js').Problem} */ (
    /** @type {unknown} */ ({
      id: 'x',
      kind: 0,
      solution: {
        lines: [
          {
            first: 'D4',
            moves: reasons.map((reason, k) => ({ side: k % 2 ? 'W' : 'B', at: 'D4', reason })),
            variations: []
          }
        ]
      }
    })
  )
const fresh = () => recordOf({}, courseOf(NO_OWN))

test("a record with no problem of its own runs on the bank's course and sections", () => {
  assert.deepEqual(courseOf(NO_OWN).kinds, KINDS)
  assert.deepEqual(sectionsOf(NO_OWN), SECTIONS)
})

test("a problem whose reasons no kind gives makes a kind of the learner's own, in a section of its own", () => {
  const r = withOwn(keyFrom('7-41'), problem(['cuts', 'takes liberty', 'cuts', 'pass']))(fresh())
  const kind = r.own.kinds[0]
  assert.ok(kind)
  // its ids are its own, so a bank that grows never gives another problem or kind the same one
  assert.ok(kind.id > Math.max(...KINDS.map(k => k.id)))
  assert.equal(kind.name, 'own fight 1')
  assert.deepEqual(kind.problems, ['o7-41'])
  assert.equal(r.own.problems[0]?.source, 'aether')
  assert.deepEqual(r.own.seen, ['7-41'])
  assert.equal(courseOf(r.own).kinds.at(-1)?.id, kind.id)
  const first = PARTS.length + KINDS.length + 1
  assert.deepEqual(sectionsOf(r.own).at(-1), {
    title: 'Kinds from your own games',
    first,
    last: first
  })
  // the record's course keeps step with it
  assert.ok(recordOf(r, courseOf(r.own)).course.some(c => 'kind' in c && c.kind === kind.id))
  // a second problem of the same reasons joins that kind
  const again = withOwn(keyFrom('7-55'), problem(['cuts', 'takes liberty', 'cuts', 'pass']))(r)
  assert.deepEqual(again.own.kinds[0]?.problems, ['o7-41', 'o7-55'])
})

test('a problem joins a kind of the bank when its reasons name that kind alone, and else makes its own', () => {
  const givers = (/** @type {string} */ q) => KINDS.filter(k => k.seqs.includes(q))
  const home = KINDS.find(k => k.seqs.some(q => givers(q).length === 1))
  assert.ok(home)
  const only = home.seqs.find(q => givers(q).length === 1)
  assert.ok(only)
  const r = withOwn(keyFrom('7-9'), problem(only.split('|')))(fresh())
  assert.deepEqual(r.own.kinds, [])
  assert.equal(r.own.problems[0]?.kind, home.id)
  assert.equal(
    courseOf(r.own)
      .kinds.find(k => k.id === home.id)
      ?.problems.at(-1),
    'o7-9'
  )
  assert.ok(!KINDS.some(k => k.problems.includes(r.own.problems[0]?.id ?? '')))
  // a sequence two kinds of the bank give names neither
  const shared = KINDS.flatMap(k => k.seqs).find(q => givers(q).length > 1)
  assert.ok(shared)
  const two = withOwn(keyFrom('7-10'), problem(shared.split('|')))(fresh())
  assert.equal(two.own.kinds.length, 1)
  assert.equal(two.own.problems[0]?.kind, two.own.kinds[0]?.id)
})

test('a position the search cannot pose is marked as tried and adds nothing', () => {
  const r = withOwn(keyFrom('7-3'), null)(fresh())
  assert.deepEqual(r.own, { problems: [], kinds: [], seen: ['7-3'] })
})

test('positions are taken from reviewed games, the oldest first, each once', () => {
  // partial games, a cast through unknown on purpose: nextPosition reads only these fields
  const game = (
    /** @type {number} */ id,
    /** @type {string} */ date,
    /** @type {boolean} */ reviewed
  ) =>
    /** @type {import('./decode.logic.js').Game} */ (
      /** @type {unknown} */ ({
        id,
        date,
        reviewed,
        size: 19,
        first: 'black',
        placed: 0,
        colour: 'black',
        initial: { black: [], white: [] },
        moves: ['D4', 'Q16', 'C3'],
        list: [{ move: 3 }]
      })
    )
  let r = recordFrom({
    ...fresh(),
    games: [game(2, '2026-10-02', true), game(1, '2026-10-01', true), game(3, '2026-09-01', false)]
  })
  const next = nextPosition(r)
  assert.ok(next)
  assert.equal(next.key, '1-3')
  assert.deepEqual(next.position, { black: ['D4'], white: ['Q16'], side: 'B' })
  r = withOwn(next.key, null)(r)
  const second = nextPosition(r)
  assert.ok(second)
  assert.equal(second.key, '2-3')
  assert.equal(nextPosition(withOwn(keyFrom('2-3'), null)(r)), undefined)
})

test('the course is used up only when every part is done, every kind retired and every problem tried or shown', () => {
  const course = courseOf(NO_OWN)
  const r = fresh()
  assert.equal(courseUsed(course, r), false)
  const done = recordFrom({
    ...r,
    recall: Object.fromEntries(
      course.parts.flatMap(p =>
        p.items.map(id => [id, [{ date: '2026-10-01', right: true, next: '2026-10-02' }]])
      )
    ),
    course: r.course.map(c =>
      'kind' in c ? { ...c, opened: '2026-10-01', retired: '2026-10-01' } : c
    ),
    tries: course.kinds.flatMap(k =>
      k.problems.map((/** @type {string} */ id) => ({
        id,
        date: '2026-10-01',
        right: true,
        mixed: true
      }))
    )
  })
  assert.equal(courseUsed(course, done), true)
  // the first problem of a kind with several is shown, not tried
  assert.equal(
    courseUsed(course, { ...done, tries: done.tries.slice(1) }),
    (course.kinds[0]?.problems.length ?? 0) > 1 ? true : false
  )
})

test('a problem added from a position keeps the count of starts of every other position', () => {
  const r = recordFrom({
    ...fresh(),
    own: { problems: [], kinds: [], seen: [], attempts: { '7-41': 2, '7-55': 1 } }
  })
  const added = withOwn(keyFrom('7-41'), problem(['cuts', 'takes liberty', 'cuts', 'pass']))(r)
  assert.deepEqual(added.own.attempts, { '7-41': 2, '7-55': 1 })
  assert.deepEqual(withOwn(keyFrom('7-55'), null)(r).own.attempts, { '7-41': 2, '7-55': 1 })
})

test("the problems Eruko wrote join their kind only once every found problem of the bank is used", () => {
  const course = courseOf(NO_OWN)
  const [first, ...rest] = course.kinds
  assert.ok(first)
  const written = { ...course, kinds: [{ ...first, written: [problemId('w1')] }, ...rest] }
  const r = fresh()
  assert.deepEqual(withWritten(written, r).kinds[0]?.problems, first.problems)
  const done = recordFrom({
    ...r,
    recall: Object.fromEntries(
      course.parts.flatMap(p => p.items.map(id => [id, [{ date: '2026-10-01', right: true, next: '2026-10-02' }]]))
    ),
    course: r.course.map(c => ('kind' in c ? { ...c, opened: '2026-10-01', retired: '2026-10-01' } : c)),
    tries: course.kinds.flatMap(k => k.problems.map(id => ({ id, date: '2026-10-01', right: true, mixed: true })))
  })
  assert.deepEqual(withWritten(written, done).kinds[0]?.problems, [...first.problems, 'w1'])
})

test('an answer to a problem Eruko wrote is kept when the record is read again', () => {
  const kind = KINDS.find(k => k.written?.length)
  const id = kind?.written?.[0]
  assert.ok(id, 'the bank holds a written problem')
  const r = recordOf({ tries: [{ id, date: '2026-10-01', right: true, mixed: true }] }, courseOf(NO_OWN))
  assert.deepEqual(r.tries.map(t => t.id), [id])
})
