// The Go unit's one next action ("A Self-Study System", The build, Go, The one next action and
// The checks): the six cases in order, gate 1, gate 3, and the start gate.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  answerItem,
  closeItem,
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
  skipGame,
  startGate,
  waitsOn
} from './next.logic.js'
import { SERVER, kindLine, recordOf, withKind } from './record.logic.js'
import { kindId, readMove } from './decode.logic.js'
import { askedFrom, courseFrom, fieldsOf, gameFrom, recordFrom } from '../../../../tests/lib/go-typed.mjs'

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
const fresh = () => recordOf({}, course)
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
    else if ('id' in item && !('right' in item)) r = closeItem(answerItem(course, askedFrom(item), right, on)(r))
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
    kindLine(closeItem(answerItem(course, askedFrom(nextAction(course, wrong, day)), false, day)(wrong)), kindId(1))
      ?.retired,
    day
  )
  const right = closeItem(answerItem(course, askedFrom(item), true, day)(r))
  assert.equal(kindLine(right, kindId(1))?.retired, day)
  assert.deepEqual(right.tries, [{ id: '1.2', date: day, right: true, mixed: false }])
  // the kind has had a problem this session: the next kind's first run opens
  assert.deepEqual(nextAction(course, right, day), { n: 5, step: 'example', id: '2.1', kind: 2 })
  // the next session, the retired kind joins mixed practice, ahead of new material
  const later = {
    ...right,
    recall: Object.fromEntries(
      Object.entries(right.recall).map(([id, lines]) => [
        id,
        lines.map((/** @type {import('../../../kernel/days.logic.js').Line} */ l) => ({ ...l, next: '2027-01-01' }))
      ])
    )
  }
  assert.deepEqual(nextAction(course, later, next), { n: 4, step: 'mixed', id: '1.3', kind: 1 })
  const mixed = closeItem(answerItem(course, askedFrom(nextAction(course, later, next)), true, next)(later))
  assert.equal(mixed.tries.at(-1)?.mixed, true)
  assert.deepEqual(nextAction(course, mixed, next), { n: 5, step: 'example', id: '2.1', kind: 2 })
})

test('a kind with one problem retires when its first run ends, and its problem is asked once in mixed practice on a later day', () => {
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
  // a later day, with nothing due: mixed practice draws it, the answer writes its first line and its first try
  const later = {
    ...r,
    recall: Object.fromEntries(
      Object.entries(r.recall).map(([id, lines]) => [
        id,
        lines.map((/** @type {import('../../../kernel/days.logic.js').Line} */ l) => ({ ...l, next: '2027-01-01' }))
      ])
    )
  }
  assert.deepEqual(nextAction(course, later, next), { n: 4, step: 'mixed', id: '3.1', kind: 3 })
  const asked = closeItem(answerItem(course, askedFrom(nextAction(course, later, next)), true, next)(later))
  assert.deepEqual(asked.tries.at(-1), { id: '3.1', date: next, right: true, mixed: true })
  assert.equal(asked.recall['3.1']?.length, 1)
  assert.deepEqual(nextAction(course, asked, next), { n: 6, step: 'nothing' })
})

test('what is due comes first, and a wrong answer comes back the next day', () => {
  let r = run(fresh(), day, true, item => item.step === 'example')
  assert.equal(nextAction(course, r, next).step, 'recall')
  assert.equal(fieldsOf(nextAction(course, r, next)).id, 'R1.1')
  r = closeItem(answerItem(course, askedFrom(nextAction(course, r, next)), false, next)(r))
  assert.equal(r.recall['R1.1']?.at(-1)?.next, '2026-10-10')
  // a second answer the same day is a retry and writes no line
  assert.equal(
    answerItem(course, askedFrom({ n: 1, step: 'recall', id: 'R1.1', kind: null }), true, next)(r).recall['R1.1']
      ?.length,
    2
  )
})

test('a reading that marks a drop never holds new kinds, and nothing left never stands while a kind waits', () => {
  let r = run(fresh(), day, true, item => item.step === 'example')
  r = recordFrom({ ...r, readings: [{ games: 15, state: 'held' }] }) // a reading with only the fields read here
  r = run(r, '2026-10-10', true, i => i.step !== 'recall')
  assert.equal(openKind(course, r)?.id, 1)
  assert.deepEqual(nextAction(course, r, '2026-10-10'), { n: 5, step: 'example', id: '1.1', kind: 1 })
})

test('the game: a practice game until one is counted right, then none until the start gate opens, then rated', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...fresh(), server: { ...SERVER, user: 'x', id: 1, since: '' } }
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
  r = { ...r, start: { counted: day } }
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
  assert.equal(gameToday(course, { ...r, server: null }, after), null)
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
  let r = recordFrom({ ...fresh(), engine: { address: 'x' }, server: { user: 'x', id: 1 }, games: [game] })
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
  assert.deepEqual(restOf(r, day), { later: '' })
  const met = recordFrom({ ...r, recall: { 'R1.1': [{ date: day, right: true, next }] } })
  assert.equal(restOf(met, day).later, next)
  assert.equal(restOf(met, next).later, '')
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
  let r = recordOf({}, three)
  assert.equal(kindReady(three, r, kind(1)), false)
  assert.deepEqual(waitsOn(three, r, kind(2)), ['the first three rules parts', 'Capture a stone in atari'])
  // the first two parts answered: ko is still to come
  for (const id of ['R1.1', 'R1.2', 'R2.1'])
    r = closeItem(answerItem(three, askedFrom({ n: 5, step: 'rules', id, kind: null }), true, day)(r))
  assert.equal(kindReady(three, r, kind(1)), false)
  assert.deepEqual(waitsOn(three, r, kind(1)), ['the first three rules parts'])
  // the first three parts answered; the fourth still open
  r = closeItem(answerItem(three, askedFrom({ n: 5, step: 'rules', id: 'R3.1', kind: null }), true, day)(r))
  assert.equal(kindReady(three, r, kind(1)), true)
  assert.equal(kindReady(three, r, kind(2)), false)
  assert.deepEqual(waitsOn(three, r, kind(2)), ['Capture a stone in atari'])
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
