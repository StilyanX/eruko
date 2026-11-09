// The Go unit's one next action ("A Self-Study System", The build, Go, The one next action and
// The checks): the six cases in order, gate 1, gate 3, and the start gate.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  answerItem,
  caseOf,
  closeItem,
  dueToday,
  exampleRead,
  formLack,
  freshToday,
  gameToday,
  isRight,
  kindReady,
  nextAction,
  openKind,
  place,
  pointLack,
  postGame,
  restOf,
  sameAnswer,
  setUpLack,
  skipGame,
  startGate,
  waitsOn
} from './next.logic.js'
import { ENGINE, SERVER, kindLine, recordOf, withKind } from './record.logic.js'
import { kindId, readMove } from './decode.logic.js'
import {
  askedFrom,
  courseFrom,
  fieldsOf,
  gameFrom,
  recordFrom
} from '../../../../tests/lib/go-typed.mjs'

const day = '2026-10-08'
const next = '2026-10-09'
const course = courseFrom({
  parts: [
    { n: 1, name: 'the board and turns', items: ['R1.1', 'R1.2'] },
    { n: 2, name: 'ko', items: ['R2.1'] }
  ],
  kinds: [
    { id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3'] },
    { id: 2, name: 'ladders', after: [1], problems: ['2.1', '2.2'] },
    { id: 3, name: 'nets', after: [1], problems: ['3.1'] }
  ]
})
const zero = () => recordOf({}, course)
// A learner whose practice game is counted: no game is owed while the start gate is closed, so
// the list's other cases come first. Before Start's set-up the first game is owed (see the game test).
const fresh = () => ({ ...zero(), start: { counted: '2026-01-01', equal: '' } })
/**
 * The next action with today's game skipped: the review tests read the draw, not the game, which
 * is owed before set-up once the start gate opens.
 * @param {import('./own.logic.js').Course} c
 * @param {import('./decode.logic.js').GoRecord} r
 * @param {string} d
 */
const noGame = (c, r, d) => nextAction(c, skipGame(d)(r), d)

/**
 * Work the list: answer each item the same way until `until` says stop, from `r`.
 * @param {import('./decode.logic.js').GoRecord} r
 * @param {string} on
 * @param {boolean} [right]
 * @param {(item: NonNullable<import('./decode.logic.js').Position['open']>, r: import('./decode.logic.js').GoRecord) => boolean} [until]
 */
function run(r, on, right = true, until = () => false) {
  for (let i = 0; i < 40; i++) {
    const item = nextAction(course, r, on)
    if (item.step === 'nothing' || until(item, r)) return r
    if (item.step === 'example') r = exampleRead(course, item.kind, on)(r)
    else if ('id' in item && !('right' in item))
      r = closeItem(answerItem(course, askedFrom(item), right, on)(r))
    else return r
  }
  return r
}

test('gate 1: a best first move and the right result; a rules answer exactly', () => {
  const p = { answers: ['D2', 'E2'], result: /** @type {const} */ ('dies') }
  assert.equal(isRight(p, 'E2', 'dies'), true)
  assert.equal(isRight(p, 'E2', 'lives'), false)
  assert.equal(isRight(p, 'C2', 'dies'), false)
  assert.equal(readMove(' d4 '), 'D4')
  assert.equal(readMove('T19'), 'T19')
  for (const no of ['I4', 'U1', 'D0', 'D20', 'D', '4D', '']) assert.equal(readMove(no), null, no)
  assert.equal(sameAnswer(' Yes ', 'yes'), true)
  assert.equal(sameAnswer('d3, b3', 'B3 D3'), true)
  assert.equal(sameAnswer('10', '10'), true)
  assert.equal(sameAnswer('B3', 'B3 D3'), false)
  assert.equal(sameAnswer('no', 'yes'), false)
})

test('from zero the course opens with the rules items, each answered once in order; then the first kind', () => {
  let r = fresh()
  assert.equal(place(course, r), 'Rules part 1 of 2: The board and turns.')
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'rules', id: 'R1.1', kind: null })
  assert.equal(openKind(course, r), undefined)
  r = answerItem(course, askedFrom(nextAction(course, r, day)), false, day, 'no')(r)
  // the item stays open with its verdict until Next
  assert.equal(fieldsOf(nextAction(course, r, day)).right, false)
  r = closeItem(r)
  assert.equal(fieldsOf(nextAction(course, r, day)).id, 'R1.2')
  r = run(r, day, true, item => item.step !== 'rules')
  const part = r.course[0]
  assert.ok(part && 'done' in part)
  assert.equal(part.done, day)
  assert.equal(place(course, r), 'Kind 1 of 3: Capture a stone in atari.')
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'example', id: '1.1', kind: 1 })
  // a first line gets the next day, right or wrong
  assert.equal(r.recall['R1.1']?.[0]?.next, next)
  assert.equal(r.recall['R1.2']?.[0]?.next, next)
})

test('gate 3: the first problem is shown solved and writes no line; a right answer, or the last untried problem, retires the kind', () => {
  let r = run(fresh(), day, true, item => item.step === 'example')
  r = exampleRead(course, kindId(1), day)(r)
  assert.equal(kindLine(r, kindId(1))?.opened, day)
  assert.equal(r.recall['1.1'], undefined)
  const item = nextAction(course, r, day)
  assert.deepEqual(item, { n: 5, step: 'new', id: '1.2', kind: 1 })
  const wrong = closeItem(answerItem(course, askedFrom(item), false, day)(r))
  assert.equal(kindLine(wrong, kindId(1))?.retired, '')
  assert.equal(fieldsOf(nextAction(course, wrong, day)).id, '1.3')
  // no untried problem left: the kind retires there, whatever the answers
  assert.equal(
    kindLine(
      closeItem(answerItem(course, askedFrom(nextAction(course, wrong, day)), false, day)(wrong)),
      kindId(1)
    )?.retired,
    day
  )
  const right = closeItem(answerItem(course, askedFrom(item), true, day)(r))
  assert.equal(kindLine(right, kindId(1))?.retired, day)
  assert.deepEqual(right.tries, [{ id: '1.2', date: day, right: true, mixed: false }])
  // the kind has had a problem this session: the next kind's first run opens
  assert.deepEqual(nextAction(course, right, day), { n: 5, step: 'example', id: '2.1', kind: 2 })
  // the next session, the retired kind is due, its first line the day it retired: it gives a
  // never-tried problem, a first try of mixed practice and the kind's one problem of step 4
  const later = {
    ...right,
    recall: Object.fromEntries(
      Object.entries(right.recall).map(([id, lines]) => [
        id,
        lines.map((/** @type {import('../../../kernel/days.logic.js').Line} */ l) => ({
          ...l,
          next: '2027-01-01'
        }))
      ])
    )
  }
  assert.deepEqual(nextAction(course, later, next), { n: 1, step: 'recall', id: '1.3', kind: 1 })
  const mixed = closeItem(
    answerItem(course, askedFrom(nextAction(course, later, next)), true, next)(later)
  )
  assert.deepEqual(mixed.tries.at(-1), { id: '1.3', date: next, right: true, mixed: true })
  // right at its first try: the kind's line, none of the problem's own
  assert.equal(mixed.recall['1.3'], undefined)
  assert.equal(mixed.recall.k1?.length, 1)
  assert.ok((mixed.recall.k1?.[0]?.next ?? '') > '2026-10-10')
  assert.deepEqual(nextAction(course, mixed, next), { n: 5, step: 'example', id: '2.1', kind: 2 })
})

test('a kind with one problem retires when its first run ends, and its return asks its problem on a later day', () => {
  let r = withKind(
    withKind(
      run(fresh(), day, true, i => i.step === 'example'),
      kindId(1),
      { opened: day, retired: day }
    ),
    kindId(2),
    { opened: day, retired: day }
  )
  r = recordFrom({
    ...r,
    tries: ['1.2', '1.3', '2.2'].map(id => ({ id, date: day, right: true, mixed: false }))
  })
  assert.deepEqual(nextAction(course, r, day), { n: 5, step: 'example', id: '3.1', kind: 3 })
  r = exampleRead(course, kindId(3), day)(r)
  assert.equal(kindLine(r, kindId(3))?.retired, day)
  assert.equal(place(course, r), 'All 2 rules parts and 3 kinds done.')
  // read solved today: nothing more of it today
  assert.deepEqual(nextAction(course, r, day), { n: 6, step: 'nothing' })
  // a later day, with only kind 3 due: its return gives its problem, a first try of mixed practice
  /** @type {import('./decode.logic.js').GoRecord['recall']} */
  const ahead = {
    k1: [{ date: day, right: true, next: '2027-01-01' }],
    k2: [{ date: day, right: true, next: '2027-01-01' }]
  }
  const later = {
    ...r,
    recall: {
      ...Object.fromEntries(
        Object.entries(r.recall).map(([id, lines]) => [
          id,
          lines.map((/** @type {import('../../../kernel/days.logic.js').Line} */ l) => ({
            ...l,
            next: '2027-01-01'
          }))
        ])
      ),
      ...ahead
    }
  }
  assert.deepEqual(nextAction(course, later, next), { n: 1, step: 'recall', id: '3.1', kind: 3 })
  const asked = closeItem(
    answerItem(course, askedFrom(nextAction(course, later, next)), true, next)(later)
  )
  assert.deepEqual(asked.tries.at(-1), { id: '3.1', date: next, right: true, mixed: true })
  assert.equal(asked.recall['3.1'], undefined)
  assert.equal(asked.recall.k3?.length, 1)
  assert.deepEqual(nextAction(course, asked, next), { n: 6, step: 'nothing' })
  // each later return of the kind gives the same problem, the one seen longest ago
  const back = asked.recall.k3?.[0]?.next ?? ''
  assert.deepEqual(nextAction(course, asked, back), { n: 1, step: 'recall', id: '3.1', kind: 3 })
})

test('what is due comes first, and a wrong answer comes back the next day', () => {
  let r = run(fresh(), day, true, item => item.step === 'example')
  assert.equal(nextAction(course, r, next).step, 'recall')
  assert.equal(fieldsOf(nextAction(course, r, next)).id, 'R1.1')
  r = closeItem(answerItem(course, askedFrom(nextAction(course, r, next)), false, next)(r))
  assert.equal(r.recall['R1.1']?.at(-1)?.next, '2026-10-10')
  // a second answer the same day is a retry and writes no line
  assert.equal(
    answerItem(course, askedFrom({ n: 1, step: 'recall', id: 'R1.1', kind: null }), true, next)(r)
      .recall['R1.1']?.length,
    2
  )
})

test('a reading that marks a drop never holds new kinds, and nothing left never stands while a kind waits', () => {
  let r = run(fresh(), day, true, item => item.step === 'example')
  r = recordFrom({ ...r, readings: [{ games: 15, state: 'held' }] }) // a reading with only the fields read here
  r = run(r, '2026-10-10', true, i => i.step !== 'recall')
  assert.equal(openKind(course, r)?.id, 1)
  assert.deepEqual(nextAction(course, r, '2026-10-10'), {
    n: 5,
    step: 'example',
    id: '1.1',
    kind: 1
  })
})

test('the game: a practice game until one is counted, right or wrong, then none until the start gate opens, then rated', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...zero(), server: { ...SERVER, user: 'x', id: 1, since: '' } }
  assert.deepEqual(gameToday(course, r, day), { practice: true, waiting: false })
  // case 3 stands before new material
  assert.equal(nextAction(course, r, day).step, 'game')
  assert.equal(nextAction(course, skipGame(day)(r), day).step, 'rules')
  assert.equal(nextAction(course, skipGame(day)(r), next).step, 'game')
  // a posted challenge does not stop the list
  assert.equal(nextAction(course, postGame(day)(r), day).step, 'rules')
  const posted = gameToday(course, postGame(day)(r), day)
  assert.ok(posted)
  assert.equal(posted.waiting, true)
  // a game with only the fields the check reads
  const held = gameFrom({ id: 7, date: day })
  assert.equal(gameToday(course, { ...r, games: [held] }, day), null)
  // a wrong count counts: `start.counted` set and `start.equal` empty
  r = { ...r, start: { counted: day, equal: '' } }
  assert.equal(startGate(course, r), false)
  assert.equal(gameToday(course, r, next), null)
  // every rules item right on a day after its first
  r = run(skipGame(day)(r), day, true, i => i.step !== 'rules')
  assert.equal(startGate(course, r), false)
  r = run(r, next, true, i => i.step !== 'recall')
  assert.equal(startGate(course, r), true)
  // rated games from the next session: not on the day the gate opened
  assert.equal(gameToday(course, r, next), null)
  const after = '2026-10-10'
  assert.deepEqual(gameToday(course, r, after), { practice: false, waiting: false })
  // set-up comes when the first game comes: with no user name or engine the game is still owed,
  // and its screen asks for the set-up
  assert.deepEqual(gameToday(course, { ...r, server: null }, after), {
    practice: false,
    waiting: false
  })
  assert.equal(setUpLack({ ...r, server: null }), true)
  assert.equal(setUpLack({ ...r, engine: { ...ENGINE, checksum: 'c' } }), false)
})

test('before set-up the first game is the first item, a fresh learner skips it, and the rules items run', () => {
  const r = zero()
  assert.equal(setUpLack(r), true)
  assert.deepEqual(nextAction(course, r, day), { n: 3, step: 'game', practice: true })
  assert.deepEqual(nextAction(course, skipGame(day)(r), day), {
    n: 5,
    step: 'rules',
    id: 'R1.1',
    kind: null
  })
  assert.equal(nextAction(course, skipGame(day)(r), next).step, 'game')
})

test('a game to review stands after what is due and before the game, and waits when the engine did not answer', () => {
  const game = {
    id: 5,
    date: day,
    reviewed: false,
    list: [
      { move: 3, typed: 'D4' },
      { move: 9, typed: '' }
    ]
  }
  // a record whose engine, server and game hold only the fields the next action reads
  let r = recordFrom({
    ...fresh(),
    engine: { address: 'x' },
    server: { user: 'x', id: 1 },
    games: [game]
  })
  assert.deepEqual(nextAction(course, r, next), { n: 2, step: 'review', game: 5, index: 1 })
  // the two rules items of the first part are waiting, with no date
  assert.equal(freshToday(course, fresh(), day), 2)
})

test('an answer of another form is refused, never judged', () => {
  assert.equal(formLack('2', '2'), '')
  assert.equal(formLack('7', '2'), '')
  assert.match(formLack('two', '2'), /number/)
  assert.equal(formLack('Yes', 'no'), '')
  assert.match(formLack('y', 'yes'), /yes or no/)
  assert.equal(formLack('d3, b3', 'B3 D3'), '')
  assert.equal(formLack('none', 'B3 D3'), '')
  assert.equal(formLack('C3', 'none'), '')
  assert.match(formLack('B3 and D3', 'B3 D3'), /points/)
  assert.match(formLack('I3', 'C3'), /points/)
  const diagram = { view: [0, 0, 5, 5], black: ['B2'], white: ['C3'] }
  assert.equal(pointLack(diagram, 'A1'), '')
  assert.match(pointLack(diagram, 'B2'), /stone/)
  assert.match(pointLack(diagram, 'C3'), /stone/)
  assert.match(pointLack(diagram, 'F1'), /not on this diagram/)
  assert.match(pointLack(diagram, 'A6'), /not on this diagram/)
})

test('nothing left says when the next item comes back', () => {
  const r = recordOf({}, course)
  assert.deepEqual(restOf(course, r, day), { later: '' })
  const met = recordFrom({ ...r, recall: { 'R1.1': [{ date: day, right: true, next }] } })
  assert.equal(restOf(course, met, day).later, next)
  assert.equal(restOf(course, met, next).later, '')
  // a retired kind comes back the day after it retired
  const retired = withKind(met, kindId(1), { opened: day, retired: next })
  assert.equal(restOf(course, retired, next).later, '2026-10-10')
})

test('a kind may open once the first three rules parts and the kinds it uses are done; one begun from its row runs first', () => {
  const three = courseFrom({
    parts: [
      { n: 1, name: 'the board and turns', items: ['R1.1', 'R1.2'] },
      { n: 2, name: 'ko', items: ['R2.1'] },
      { n: 3, name: 'ko', items: ['R3.1'] },
      { n: 4, name: 'counting by area', items: ['R4.1'] }
    ],
    kinds: [
      { id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3'] },
      { id: 2, name: 'ladders', after: [1], problems: ['2.1', '2.2'] },
      { id: 3, name: 'nets', after: [1], problems: ['3.1'] }
    ]
  })
  const kind = (/** @type {number} */ id) => {
    const k = three.kinds.find(x => x.id === id)
    assert.ok(k)
    return k
  }
  let r = { ...recordOf({}, three), start: { counted: '2026-01-01', equal: '' } }
  assert.equal(kindReady(three, r, kind(1)), false)
  assert.deepEqual(waitsOn(three, r, kind(2)), [
    { name: 'the first three rules parts', kind: null },
    { name: 'Capture a stone in atari', kind: 1 }
  ])
  // the first two parts answered: ko is still to come
  for (const id of ['R1.1', 'R1.2', 'R2.1'])
    r = closeItem(
      answerItem(three, askedFrom({ n: 5, step: 'rules', id, kind: null }), true, day)(r)
    )
  assert.equal(kindReady(three, r, kind(1)), false)
  assert.deepEqual(waitsOn(three, r, kind(1)), [
    { name: 'the first three rules parts', kind: null }
  ])
  // the first three parts answered; the fourth still open
  r = closeItem(
    answerItem(three, askedFrom({ n: 5, step: 'rules', id: 'R3.1', kind: null }), true, day)(r)
  )
  assert.equal(kindReady(three, r, kind(1)), true)
  assert.equal(kindReady(three, r, kind(2)), false)
  assert.deepEqual(waitsOn(three, r, kind(2)), [{ name: 'Capture a stone in atari', kind: 1 }])
  // the work list keeps the course's order: the open part first
  assert.deepEqual(nextAction(three, r, day), { n: 5, step: 'rules', id: 'R4.1', kind: null })
  // a kind begun from its row: its problems come before the rules part left
  r = exampleRead(three, kindId(1), day)(r)
  assert.equal(openKind(three, r)?.id, 1)
  assert.deepEqual(nextAction(three, r, day), { n: 5, step: 'new', id: '1.2', kind: 1 })
  r = closeItem(answerItem(three, askedFrom(nextAction(three, r, day)), true, day)(r))
  assert.equal(kindLine(r, kindId(1))?.retired, day)
  assert.equal(fieldsOf(nextAction(three, r, day)).id, 'R4.1')
  // kinds 2 and 3 use only kind 1: either may open, in any order
  assert.equal(kindReady(three, r, kind(2)), true)
  assert.equal(kindReady(three, r, kind(3)), true)
  r = closeItem(answerItem(three, askedFrom(nextAction(three, r, day)), true, day)(r))
  assert.deepEqual(nextAction(three, r, day), { n: 5, step: 'example', id: '2.1', kind: 2 })
})

test('a due kind gives its problem answered wrong, else a never-tried one, else the one seen longest ago; a wrong answer brings the problem and its kind back the next day', () => {
  const four = courseFrom({
    parts: [],
    kinds: [
      { id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3', '1.4'] }
    ]
  })
  const d1 = '2026-10-10'
  const d2 = '2026-10-11'
  // retired on day at 1.2, right; 1.3 and 1.4 never tried
  let r = recordFrom({
    ...withKind({ ...recordOf({}, four), start: { counted: '2026-01-01', equal: '' } }, kindId(1), {
      opened: day,
      retired: day
    }),
    tries: [{ id: '1.2', date: day, right: true, mixed: false }]
  })
  assert.deepEqual(noGame(four, r, day), { n: 6, step: 'nothing' })
  // due the day after it retired: the first never-tried problem, in the order the problems entered
  assert.deepEqual(noGame(four, r, next), { n: 1, step: 'recall', id: '1.3', kind: 1 })
  r = closeItem(answerItem(four, askedFrom(noGame(four, r, next)), false, next)(r))
  // wrong: the problem's own line and the kind's, both back the next day
  assert.deepEqual(r.recall['1.3'], [{ date: next, right: false, next: d1 }])
  assert.deepEqual(r.recall.k1, [{ date: next, right: false, next: d1 }])
  assert.deepEqual(r.tries.at(-1), { id: '1.3', date: next, right: false, mixed: true })
  // the same problem comes back, ahead of the never-tried one
  assert.deepEqual(noGame(four, r, d1), { n: 1, step: 'recall', id: '1.3', kind: 1 })
  r = closeItem(answerItem(four, askedFrom(noGame(four, r, d1)), true, d1)(r))
  assert.equal(r.recall['1.3']?.at(-1)?.right, true)
  assert.equal(r.recall.k1?.length, 2)
  const back = r.recall.k1?.at(-1)?.next ?? ''
  assert.ok(back > d2)
  // nothing due on a day between: step 4 still draws the kind's never-tried problem
  assert.deepEqual(noGame(four, r, d2), { n: 4, step: 'mixed', id: '1.4', kind: 1 })
  // right: the kind comes back with a fresh problem; the problem itself does not
  assert.deepEqual(noGame(four, r, back), { n: 1, step: 'recall', id: '1.4', kind: 1 })
  r = closeItem(answerItem(four, askedFrom(noGame(four, r, back)), true, back)(r))
  assert.equal(r.recall['1.4'], undefined)
  // no never-tried problem left: the one seen longest ago, by its newest line or its first try
  const last = r.recall.k1?.at(-1)?.next ?? ''
  assert.deepEqual(noGame(four, r, last), { n: 1, step: 'recall', id: '1.2', kind: 1 })
})

test('a problem answered wrong in mixed practice makes its kind due the next day; in a first run it comes back alone', () => {
  const two = courseFrom({
    parts: [],
    kinds: [
      { id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3'] },
      { id: 2, name: 'ladders', after: [], problems: ['2.1', '2.2', '2.3', '2.4'] }
    ]
  })
  /** @type {import('./decode.logic.js').GoRecord['recall']} */
  const ahead = { k1: [{ date: day, right: true, next: '2027-01-01' }] }
  let r = recordFrom({
    ...withKind({ ...recordOf({}, two), start: { counted: '2026-01-01', equal: '' } }, kindId(1), {
      opened: day,
      retired: day
    }),
    recall: ahead,
    tries: [{ id: '1.2', date: day, right: true, mixed: false }]
  })
  assert.deepEqual(noGame(two, r, next), { n: 4, step: 'mixed', id: '1.3', kind: 1 })
  r = closeItem(answerItem(two, askedFrom(noGame(two, r, next)), false, next)(r))
  assert.deepEqual(r.recall['1.3'], [{ date: next, right: false, next: '2026-10-10' }])
  // the kind's own line is untouched, and the kind is due the next day all the same
  assert.deepEqual(r.recall.k1, ahead.k1)
  assert.deepEqual(noGame(two, r, '2026-10-10'), { n: 1, step: 'recall', id: '1.3', kind: 1 })
  // kind 2 in its first run: a wrong answer comes back alone, its own line only
  r = exampleRead(two, kindId(2), next)(r)
  r = closeItem(
    answerItem(two, askedFrom({ n: 5, step: 'new', id: '2.2', kind: 2 }), false, next)(r)
  )
  assert.equal(kindLine(r, kindId(2))?.retired, '')
  const due = noGame(
    two,
    closeItem(
      answerItem(
        two,
        askedFrom({ n: 1, step: 'recall', id: '1.3', kind: 1 }),
        true,
        '2026-10-10'
      )(r)
    ),
    '2026-10-10'
  )
  assert.deepEqual(due, { n: 1, step: 'recall', id: '2.2', kind: 2 })
  r = closeItem(answerItem(two, askedFrom(due), true, '2026-10-10')(r))
  assert.equal(r.recall.k2, undefined)
  assert.equal(r.recall['2.2']?.at(-1)?.right, true)
})

test('a rules item comes back on another case its rule decides: one not yet asked, else the one asked longest ago; a case answered wrong comes back the next day', () => {
  const cased = courseFrom({
    parts: [{ n: 1, name: 'the board and turns', items: ['R1.1'], cases: [3] }],
    kinds: []
  })
  const d = /** @type {const} */ (['2026-10-08', '2026-10-09', '2026-10-10'])
  let r = { ...recordOf({}, cased), start: { counted: '2026-01-01', equal: '' } }
  // met in step 4: its first case
  r = closeItem(answerItem(cased, askedFrom(noGame(cased, r, d[0])), true, d[0])(r))
  assert.deepEqual(r.recall['R1.1'], [{ date: d[0], right: true, next: d[1], case: 0 }])
  assert.deepEqual(noGame(cased, r, d[1]), {
    n: 1,
    step: 'recall',
    id: 'R1.1',
    kind: null,
    case: 1
  })
  r = closeItem(answerItem(cased, askedFrom(noGame(cased, r, d[1])), false, d[1])(r))
  // wrong: the same case the next day
  assert.deepEqual(noGame(cased, r, d[2]), {
    n: 1,
    step: 'recall',
    id: 'R1.1',
    kind: null,
    case: 1
  })
  r = closeItem(answerItem(cased, askedFrom(noGame(cased, r, d[2])), true, d[2])(r))
  const at = r.recall['R1.1']?.at(-1)?.next ?? ''
  assert.deepEqual(noGame(cased, r, at), {
    n: 1,
    step: 'recall',
    id: 'R1.1',
    kind: null,
    case: 2
  })
  r = closeItem(answerItem(cased, askedFrom(noGame(cased, r, at)), true, at)(r))
  // every case asked: the one asked longest ago
  const then = r.recall['R1.1']?.at(-1)?.next ?? ''
  assert.deepEqual(noGame(cased, r, then), {
    n: 1,
    step: 'recall',
    id: 'R1.1',
    kind: null,
    case: 0
  })
  assert.equal(caseOf([], 1), 0)
})

test('a record kept before kinds were dated: a problem right last is out of the due list, its kind dated from retired; a problem wrong last brings its kind back on its date; a rules line with no case asked its first', () => {
  const old = {
    course: [
      { part: 1, done: '2026-09-01' },
      { kind: 1, opened: '2026-09-01', retired: '2026-09-01' }
    ],
    recall: {
      'R1.1': [
        { date: '2026-09-01', right: true, next: '2026-09-02' },
        { date: '2026-09-02', right: true, next: '2026-10-20' }
      ],
      // kept history, never due by itself: the kind brings its problems back
      1.2: [{ date: '2026-09-01', right: true, next: '2026-09-02' }],
      1.3: [
        { date: '2026-09-03', right: true, next: '2026-09-04' },
        { date: '2026-09-04', right: false, next: '2026-09-05' }
      ]
    },
    tries: [
      { id: '1.2', date: '2026-09-01', right: true, mixed: false },
      { id: '1.3', date: '2026-09-03', right: true, mixed: true }
    ]
  }
  const one = courseFrom({
    parts: [{ n: 1, name: 'the board and turns', items: ['R1.1'] }],
    kinds: [{ id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3'] }]
  })
  const r = { ...recordOf(old, one), start: { counted: '2026-01-01', equal: '' } }
  assert.deepEqual(r.recall['1.2'], old.recall['1.2'])
  // kind 1's own date, from retired, is 2 September; 1.3 wrong last, back since 5 September
  assert.deepEqual(noGame(one, r, '2026-09-01'), { n: 6, step: 'nothing' })
  assert.deepEqual(noGame(one, r, '2026-09-02'), { n: 1, step: 'recall', id: '1.3', kind: 1 })
  const once = closeItem(
    answerItem(one, askedFrom(noGame(one, r, '2026-10-08')), true, '2026-10-08')(r)
  )
  assert.deepEqual(once.recall.k1?.length, 1)
  assert.equal(once.recall['1.3']?.at(-1)?.right, true)
  // its next return gives the problem seen longest ago: 1.2, by its line of 1 September
  const back = once.recall.k1?.[0]?.next ?? ''
  assert.deepEqual(
    dueToday(one, once, back).find(x => x.kind === 1),
    { n: 1, step: 'recall', id: '1.2', kind: 1 }
  )
  // the rules item's lines name no case: they asked its first, so its next case is the second
  const cased = courseFrom({
    parts: [{ n: 1, name: 'the board and turns', items: ['R1.1', 'R1.2'], cases: [2, 1] }],
    kinds: []
  })
  assert.deepEqual(
    noGame(
      cased,
      { ...recordOf(old, cased), start: { counted: '2026-01-01', equal: '' } },
      '2026-10-20'
    ),
    { n: 1, step: 'recall', id: 'R1.1', kind: null, case: 1 }
  )
})

test('a kind gives one problem a day: a second problem left wrong brings it back the next day', () => {
  const four = courseFrom({
    parts: [],
    kinds: [
      { id: 1, name: 'capture a stone in atari', after: [], problems: ['1.1', '1.2', '1.3', '1.4'] }
    ]
  })
  const wrong = [{ date: day, right: false, next }]
  let r = recordFrom({
    ...withKind({ ...recordOf({}, four), start: { counted: '2026-01-01', equal: '' } }, kindId(1), {
      opened: day,
      retired: day
    }),
    recall: { 1.2: wrong, 1.3: wrong },
    tries: [
      { id: '1.2', date: day, right: false, mixed: false },
      { id: '1.3', date: day, right: false, mixed: false }
    ]
  })
  assert.deepEqual(noGame(four, r, next), { n: 1, step: 'recall', id: '1.2', kind: 1 })
  r = closeItem(answerItem(four, askedFrom(noGame(four, r, next)), true, next)(r))
  // not due again today; step 4 still asks a never-tried problem of it
  assert.deepEqual(noGame(four, r, next), { n: 4, step: 'mixed', id: '1.4', kind: 1 })
  assert.deepEqual(noGame(four, r, '2026-10-10'), { n: 1, step: 'recall', id: '1.3', kind: 1 })
})
