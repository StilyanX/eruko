// Mixed practice, shared by the maths units, against The build, Mathematics, "The checks".
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { InvariantError } from './invariant.logic.js'
import { kindId, problemId, topicSlug } from './maths-decode.logic.js'
import { START, decodePractice, draw, inHand, kindLines, lastKind, lessonPlace, nextProblem, neverTried, partToday, placeOf, practiceOrder, returns, shortKinds, shuffle, yesNoKind } from './practice.logic.js'
import { bank as bankOf, practice } from '../../tests/lib/maths-content.mjs'

const day = '2026-09-22'

const bank = bankOf([
  { id: 't1-k1-p01', kind: 't1-k1' }, { id: 't1-k1-p02', kind: 't1-k1' },
  { id: 't1-k2-p01', kind: 't1-k2' }, { id: 't1-k2-p02', kind: 't1-k2' },
  { id: 't2-k1-p01', kind: 't2-k1' }
])
const k = kindId

const [P11, P12, P21] = bank
assert.ok(P11 && P12 && P21)

test('never-tried: no line and not used in fading or tried first', () => {
  assert.ok(neverTried(P11, practice({})))
  assert.ok(!neverTried(P11, practice({ used: ['t1-k1-p01'] })))
  assert.ok(!neverTried(P11, practice({ list: { 't1-k1-p01': [{ date: day, right: true, next: day }] } })))
})

const line = (/** @type {string} */ date, /** @type {boolean} */ right, /** @type {string} */ next) => ({
  date,
  right,
  next
})

test("a retired kind's first line is read from the day it retired, and the lines stored follow it", () => {
  const record = practice({ retired: { 't1-k1': '2026-09-01' }, list: { 't1-k1': [line('2026-09-02', true, '2026-09-05')] } })
  assert.deepEqual(kindLines(record, k('t1-k1')), [line('2026-09-01', true, '2026-09-02'), line('2026-09-02', true, '2026-09-05')])
  assert.deepEqual(kindLines(practice({}), k('t1-k1')), [])
})

test('a kind already retired with no line of its own is due the day after it retired', () => {
  const record = practice({ retired: { 't1-k1': '2026-09-01' } })
  assert.deepEqual(returns(bank, record).map(x => [x.id, x.on]), [['t1-k1', '2026-09-02']])
  assert.deepEqual(practiceOrder(bank, record, day).map(p => p.id), ['t1-k1-p01'])
  // Retired today, it is not due until tomorrow.
  assert.deepEqual(practiceOrder(bank, practice({ retired: { 't1-k1': day } }), day), [])
})

test('a kind that is not due draws nothing, and a kind not retired is never drawn', () => {
  const record = practice({ retired: { 't1-k1': '2026-09-01' }, list: { 't1-k1': [line('2026-09-21', true, '2026-09-30')] } })
  assert.deepEqual(practiceOrder(bank, record, day), [])
  assert.deepEqual(practiceOrder(bank, practice({}), day), [])
  // A right line on a problem makes nothing due.
  const right = practice({ retired: { 't1-k1': day }, list: { 't1-k1-p01': [line('2026-09-01', true, '2026-09-02')] } })
  assert.deepEqual(practiceOrder(bank, right, day), [])
})

test('the day order is one problem for each kind due, the date furthest past first, ties by id with numbers as numbers', () => {
  const b = bankOf([
    { id: 't10-k1-p01', kind: 't10-k1' }, { id: 't10-k1-p02', kind: 't10-k1' },
    { id: 't2-k1-p01', kind: 't2-k1' }, { id: 't1-k1-p01', kind: 't1-k1' }, { id: 't3-k1-p01', kind: 't3-k1' }
  ])
  const record = practice({
    retired: { 't1-k1': '2026-09-01', 't2-k1': '2026-09-01', 't3-k1': '2026-09-01', 't10-k1': '2026-09-01' },
    list: {
      't3-k1': [line('2026-09-10', true, '2026-09-18')],
      't1-k1': [line('2026-09-10', true, '2026-09-20')],
      't2-k1': [line('2026-09-10', true, '2026-09-20')]
    }
  })
  // t10-k1 retired and never drawn: due 09-02, the furthest past; t3 09-18; t1 and t2 09-20, by id.
  assert.deepEqual(practiceOrder(b, record, day).map(p => p.id), ['t10-k1-p01', 't3-k1-p01', 't1-k1-p01', 't2-k1-p01'])
  assert.deepEqual(practiceOrder(b, record, '2026-09-18').map(p => p.id), ['t10-k1-p01', 't3-k1-p01'])
})

test('a due kind draws its problem last answered wrong, else a never-tried one, else the one seen longest ago', () => {
  const k1 = k('t1-k1')
  const never = practice({ retired: { 't1-k1': '2026-09-01' } })
  assert.equal(draw(bank, never, k1)?.id, 't1-k1-p01')
  const wrong = practice({
    retired: { 't1-k1': '2026-09-01' },
    list: { 't1-k1-p01': [line('2026-09-10', true, '2026-09-11')], 't1-k1-p02': [line('2026-09-15', false, '2026-09-16')] }
  })
  assert.equal(draw(bank, wrong, k1)?.id, 't1-k1-p02', 'the one last answered wrong')
  const used = practice({ retired: { 't1-k1': '2026-09-01' }, used: ['t1-k1-p01'], list: { 't1-k1-p02': [line('2026-09-15', true, '2026-09-20')] } })
  assert.equal(draw(bank, used, k1)?.id, 't1-k1-p01', 'seen longest ago: a used problem with no line before one with a line')
  const seen = practice({
    retired: { 't1-k1': '2026-09-01' },
    list: { 't1-k1-p01': [line('2026-09-18', true, '2026-09-25')], 't1-k1-p02': [line('2026-09-12', true, '2026-09-25')] }
  })
  assert.equal(draw(bank, seen, k1)?.id, 't1-k1-p02')
  // A wrong problem is drawn ahead of a never-tried one of the same kind.
  const both = practice({ retired: { 't1-k1': '2026-09-01' }, list: { 't1-k1-p02': [line('2026-09-15', false, '2026-09-16')] } })
  assert.equal(draw(bank, both, k1)?.id, 't1-k1-p02')
  // Answered wrong, then right: no longer the one last answered wrong.
  const mended = practice({
    retired: { 't1-k1': '2026-09-01' },
    list: { 't1-k1-p02': [line('2026-09-15', false, '2026-09-16'), line('2026-09-16', true, '2026-09-20')] }
  })
  assert.equal(draw(bank, mended, k1)?.id, 't1-k1-p01')
})

test('a lost question that keeps lines returns on them; a bank problem of a kind not retired does not', () => {
  const lost = bankOf([{ id: 'tma01-q3', kind: 'exam' }])
  const record = practice({ list: { 'tma01-q3': [line('2026-09-20', false, '2026-09-21')] } })
  assert.deepEqual(practiceOrder(bank, record, day, lost).map(p => p.id), ['tma01-q3'])
  assert.deepEqual(practiceOrder(bank, record, '2026-09-20', lost), [])
  const stray = practice({ list: { 't1-k1-p01': [line('2026-09-20', false, '2026-09-21')] } })
  assert.deepEqual(practiceOrder(bank, stray, day), [])
})

test("a topic's part taken today: a kind's stage, or its try-first problem", () => {
  const topic = { slug: topicSlug('a'), kinds: [{ id: k('t1-k1') }, { id: k('t1-k2') }] }
  assert.equal(partToday(topic, practice({}), day), false)
  assert.equal(partToday(topic, practice({ stage: { 't1-k2': { ...START, day } } }), day), true)
  assert.equal(partToday(topic, practice({ stage: { 't1-k2': { ...START, day: '2026-09-21' } } }), day), false)
  assert.equal(partToday(topic, practice({ gate: { a: { tried: day } } }), day), true)
  assert.equal(partToday(topic, practice({ gate: { b: { tried: day } } }), day), false)
})

test('the day order is stable through reloads', () => {
  const record = practice({ retired: { 't1-k1': 'x', 't1-k2': 'x', 't2-k1': 'x' } })
  assert.deepEqual(practiceOrder(bank, record, day), practiceOrder(bank, record, day))
})

test('never two of a kind while another is left; the same kind may follow only when alone', () => {
  const order = [P11, P12, P21]
  assert.equal(nextProblem(order, k('t1-k1'))?.id, 't1-k2-p01')
  assert.equal(nextProblem([P11], k('t1-k1'))?.id, 't1-k1-p01')
  assert.equal(nextProblem([], k('t1-k1')), null)
})

test('a retired kind with no never-tried problem is short', () => {
  const record = practice({ retired: { 't1-k1': 'x' }, used: ['t1-k1-p01'], list: { 't1-k1-p02': [{ date: day, right: true, next: day }] } })
  assert.deepEqual(shortKinds(bank, record), ['t1-k1'])
})

test('the kind answered last counts only today', () => {
  assert.equal(lastKind(practice({ lastKind: { day, kind: 't1-k1' } }), day), 't1-k1')
  assert.equal(lastKind(practice({ lastKind: { day: '2026-09-21', kind: 't1-k1' } }), day), undefined)
})

test('the place line: the first unfinished topic by its place and title, then all done', () => {
  const topics = [{ slug: 'a', kinds: [] }, { slug: 'b', kinds: [] }]
  assert.equal(lessonPlace(topics, () => false), 'Lesson 1 of 2.')
  assert.equal(lessonPlace(topics, t => t.slug === 'a', s => s.toUpperCase()), 'Lesson 2 of 2: B.')
  assert.equal(lessonPlace(topics, () => true), 'All 2 lessons done.')
})

test('a Yes/No kind has only Yes or No bank answers; a kind with no problems, a null answer or any other answer is not', () => {
  const b = bankOf([
    { id: '1', kind: 'a', answer: 'Yes' }, { id: '2', kind: 'a', answer: 'No' },
    { id: '3', kind: 'b', answer: 'Yes' }, { id: '4', kind: 'b', answer: null },
    { id: '5', kind: 'c', answer: '5' }
  ])
  assert.deepEqual(['a', 'b', 'c', 'none'].map(x => yesNoKind(k(x), b)), [true, false, false, false])
})

test('shuffle keeps the same items and follows the generator it is given', () => {
  assert.deepEqual(shuffle([1, 2, 3, 4], () => 0).sort((a, b) => a - b), [1, 2, 3, 4])
  assert.deepEqual(shuffle([1, 2, 3], () => 0), [2, 3, 1])
})

test('shuffle leaves the list it is given as it was', () => {
  const list = [1, 2, 3]
  shuffle(list, () => 0)
  assert.deepEqual(list, [1, 2, 3])
})

test('the shared record as stored: a field not of its shape reads as not there, an entry not of its shape is left out', () => {
  const r = decodePractice({
    list: { a: [{ date: day, right: true, next: day }, { date: 1 }], b: 'x' },
    used: ['a', 3],
    stage: {
      k1: { form: 0, stage: 2, next: 1, line: 0, problem: 'fade-0-0', streak: 1, shown: true, day },
      k2: { day },
      k3: { form: 0, stage: 9, next: 1, line: 0 },
      k4: { form: 1, stage: 3, next: 2, line: 0, problem: null }
    },
    gate: { t: { tried: day }, u: { tried: 4 } },
    retired: { k1: day, k2: 5 },
    lastKind: { day, kind: 'k1' },
    mix: { day, id: 'a', phase: 'right' },
    pages: { '/p#ideas': 2, '/p#x': 'two' },
    short: ['k1', null]
  })
  assert.deepEqual(r.list, { a: [{ date: day, right: true, next: day }] })
  assert.deepEqual(r.used, ['a'])
  assert.deepEqual(r.stage, {
    k1: { form: 0, stage: 2, next: 1, line: 0, day, problem: 'fade-0-0', streak: 1, shown: true },
    k2: { day },
    k4: { form: 1, stage: 3, next: 2, line: 0, day: '', problem: null }
  })
  assert.deepEqual(r.gate, { t: { tried: day } })
  assert.deepEqual(r.retired, { k1: day })
  assert.deepEqual(r.lastKind, { day, kind: 'k1' })
  assert.deepEqual(r.mix, { day, id: 'a', phase: 'right' })
  assert.deepEqual(r.pages, { '/p#ideas': 2 })
  assert.deepEqual(r.short, ['k1'])
  assert.equal(decodePractice({ mix: null }).mix, null)
  assert.equal(decodePractice({ mix: { day, id: 'a', phase: 'solve' } }).mix, undefined)
  assert.equal(decodePractice({ lastKind: 'k1', list: [] }).lastKind, undefined)
})

test('the sample an older Review page put in the record reads as not there', () => {
  const r = decodePractice({
    sample: { list: ['a'] },
    list: { a: [{ date: day, right: true, next: day }], b: [{ date: day, right: true, next: day }] }
  })
  assert.deepEqual(Object.keys(r.list ?? {}), ['b'])
  assert.ok('sample' in r && r.sample === undefined, 'the next write drops the sample')
})

test("a kind's place: the start until one is kept, and a kind met with no place starts too", () => {
  assert.equal(placeOf(practice({}), k('k1')), START)
  assert.equal(placeOf(practice({ stage: { k1: { day } } }), k('k1')), START)
  assert.equal(placeOf(practice({ stage: { k1: { ...START, line: 2, day } } }), k('k1')).line, 2)
})

test('the problem in hand: marked today with its line of today or its kind\'s, or its proof shown; a mark with no line is not in hand', () => {
  const known = () => ({ id: problemId('a'), kind: k('k') })
  const today = line(day, true, '2026-09-23')
  const old = line('2026-09-20', true, '2026-09-23')
  assert.deepEqual(inHand(practice({ mix: { day, id: 'a', phase: 'right' }, list: { a: [today] } }), day, known), { day, id: 'a', phase: 'right' })
  assert.deepEqual(inHand(practice({ mix: { day, id: 'a', phase: 'right' }, list: { k: [today] } }), day, known), { day, id: 'a', phase: 'right' }, 'a right answer on a never-tried problem writes the kind line only')
  assert.equal(inHand(practice({ mix: { day, id: 'a', phase: 'right' } }), day, known), null, 'no dated line')
  assert.equal(inHand(practice({ mix: { day, id: 'a', phase: 'wrong' }, list: { a: [old], k: [old] } }), day, known), null, 'no line of today')
  assert.deepEqual(inHand(practice({ mix: { day, id: 'a', phase: 'proof' } }), day, known)?.phase, 'proof')
  assert.equal(inHand(practice({ mix: { day: '2026-09-21', id: 'a', phase: 'proof' } }), day, known), null, 'another day')
  assert.equal(inHand(practice({ mix: { day, id: 'a', phase: 'proof' } }), day, () => undefined), null, 'a problem the bank no longer has')
})

test('a shuffle never reads outside its list', () => {
  assert.throws(() => shuffle([1, 2], () => 5), InvariantError)
})
