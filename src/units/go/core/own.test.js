// Problems from the learner's own games and the problems Eruko writes ("A Self-Study System", Go,
// Own games and written problems): built when no never-tried problem is left, from the positions
// of a reviewed game's list and then from changes to found problems got wrong, kept in the record
// with the kinds they make.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINDS, PARTS, SECTIONS } from './course.gen.js'
import { changesOf, courseOf, courseUsed, entering, nextBuild, nextPosition, nextWritten, sectionsOf, withOwn } from './own.logic.js'
import { PROBLEMS } from '../content/problems.gen.js'
import { byPoint } from './rules.logic.js'
import { recordOf } from './record.logic.js'
import { NO_OWN, bankOf, changeKey } from './decode.logic.js'
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

// The problems Eruko writes: one change to a found problem the learner got wrong, posed from its
// stones alone once no reviewed game's position is left.
const BANK = bankOf(PROBLEMS)
const seed = Object.values(BANK).find(p => p.source !== 'aether')
const firstKind = Object.values(BANK).find(p => p.source === 'aether')
assert.ok(seed && firstKind)
/** @param {readonly { id: string, right: boolean }[]} lines */
const tried = lines => recordFrom({ ...fresh(), tries: lines.map(l => ({ ...l, date: '2026-10-01', mixed: false })) })

test("a seed's changes: a black stone on each empty point of its region, then a white one, then each stone not of its group taken away, column by column from A, each from row 1 up", () => {
  const changes = changesOf(seed)
  const region = [...seed.region].sort(byPoint)
  assert.deepEqual(changes.slice(0, region.length), region.map(at => ({ at, act: 'black' })))
  assert.deepEqual(changes.slice(region.length, 2 * region.length), region.map(at => ({ at, act: 'white' })))
  const off = changes.slice(2 * region.length)
  assert.deepEqual(off.map(c => c.at), [...off.map(c => c.at)].sort(byPoint))
  assert.ok(off.every(c => c.act === 'off'))
  // the group asked about keeps every stone; every other stone may go
  assert.ok(!off.some(c => c.at === seed.group.at))
  assert.ok(off.length > 0 && off.length < seed.black.length + seed.white.length)
})

test('a written problem changes a found problem got wrong, in the order of the tries, each change once', () => {
  assert.equal(nextWritten(fresh(), BANK), undefined)
  // a right try, or a first kind's problem got wrong, seeds nothing
  assert.equal(nextWritten(tried([{ id: seed.id, right: true }, { id: firstKind.id, right: false }]), BANK), undefined)
  const r = tried([{ id: firstKind.id, right: false }, { id: seed.id, right: false }])
  const next = nextWritten(r, BANK)
  assert.ok(next)
  const [first] = changesOf(seed)
  assert.ok(first)
  assert.equal(next.key, `w${seed.id}-${first.at}-black`)
  assert.equal(next.seed, seed)
  assert.deepEqual(next.position, {
    black: [...seed.black, first.at],
    white: seed.white,
    side: seed.toMove === 'black' ? 'B' : 'W'
  })
  // posed, entered or not, it is not posed again
  const after = nextWritten(withOwn(next.key, null)(r), BANK)
  assert.equal(after?.key, `w${seed.id}-${changesOf(seed)[1]?.at}-black`)
  // a stone taken away leaves the rest
  const taken = changesOf(seed).find(c => c.act === 'off')
  assert.ok(taken)
  const seen = recordFrom({
    ...r,
    own: { ...r.own, seen: changesOf(seed).filter(c => c.at !== taken.at || c.act !== 'off').map(c => changeKey(seed.id, c.at, c.act)) }
  })
  const last = nextWritten(seen, BANK)
  assert.equal(last?.key, `w${seed.id}-${taken.at}-off`)
  assert.equal(last.position.black.length + last.position.white.length, seed.black.length + seed.white.length - 1)
  // every change of every seed posed: nothing is left to build
  const all = recordFrom({ ...r, own: { ...r.own, seen: changesOf(seed).map(c => changeKey(seed.id, c.at, c.act)) } })
  assert.equal(nextWritten(all, BANK), undefined)
})

test("a reviewed game's position comes before any written problem", () => {
  const game = recordFrom({
    ...tried([{ id: seed.id, right: false }]),
    games: [{ id: 5, date: '2026-10-01', reviewed: true, size: 19, first: 'black', placed: 0, colour: 'black', initial: { black: [], white: [] }, moves: ['D4', 'Q16', 'C3'], list: [{ move: 3 }] }]
  })
  assert.equal(nextBuild(game, BANK)?.key, '5-3')
  assert.equal(nextBuild(withOwn(keyFrom('5-3'), null)(game), BANK)?.seed, seed)
})

test("a written problem enters only with its seed's kind's reasons and best first moves none of its seed's", () => {
  const kind = KINDS.find(k => k.id === seed.kind)
  assert.ok(kind)
  const q = kind.seqs[0]
  assert.ok(q)
  /** @param {string[]} reasons @param {string[]} answers */
  const made = (reasons, answers) => ({ ...problem(reasons), answers })
  const free = 'T19'
  assert.equal(entering(made(q.split('|'), [free]), seed)?.kind, seed.kind)
  assert.equal(entering(made([...q.split('|'), 'pass', 'eye', 'cuts'], [free]), seed), null)
  assert.equal(entering(made(q.split('|'), [free, ...seed.answers]), seed), null)
  assert.equal(entering(null, seed), null)
  // a game's position enters as posed
  const own = made(['cuts'], [free])
  assert.equal(entering(own, undefined), own)
  // it joins its seed's kind, even when another kind gives the same reasons
  const r = withOwn(changeKey(seed.id, free, 'black'), entering(made(q.split('|'), [free]), seed))(fresh())
  assert.equal(r.own.problems[0]?.kind, seed.kind)
  assert.equal(r.own.problems[0]?.id, `ow${seed.id}-${free}-black`)
  assert.deepEqual(r.own.kinds, [])
})
