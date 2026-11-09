// The moves of the shared maths steps as one pure step over the record (kernel/maths-session.logic.js):
// what each move writes, and what it says.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { kindId, problemId, topicSlug } from './maths-decode.logic.js'
import { mathsStep, readAgain, sourceOf } from './maths-session.logic.js'
import { START, draw, practiceOrder } from './practice.logic.js'
import { bank as bankOf, practice } from '../../tests/lib/maths-content.mjs'

const day = '2026-09-22'
const K = kindId('k1')
/** @type {import('./steps.logic.js').KindFacts} */
const kind = {
  id: K,
  fades: [1, 1],
  problems: [problemId('k1-p1'), problemId('k1-p2')],
  twice: false
}
const says = (/** @type {readonly import('./maths-session.logic.js').Effect[]} */ e) =>
  e.flatMap(x => (x.t === 'say' ? [x.text] : []))
const shows = (/** @type {readonly import('./maths-session.logic.js').Effect[]} */ e) =>
  e.flatMap(x => (x.t === 'show' ? [x.text] : []))

test('a worked example: a line read moves the place on; the example done opens its first fading problem', () => {
  const read = mathsStep(practice({}), { t: 'example-line', kind, day })
  assert.deepEqual(read.record.stage?.[K], { ...START, line: 1, day })
  assert.deepEqual(read.effects, [])
  const done = mathsStep(read.record, { t: 'example-done', kind, inRecord: true, day })
  assert.deepEqual(done.record.stage?.[K], {
    ...START,
    stage: 2,
    line: 0,
    problem: 'fade-0-0',
    next: 1,
    shown: false,
    day
  })
  assert.deepEqual(shows(done.effects), [''])
})

test('a stage answered: right goes on a stage and says what follows; wrong says nothing', () => {
  const at2 = practice({ stage: { k1: { ...START, stage: 2, next: 1, problem: 'fade-0-0', day } } })
  const right = mathsStep(at2, { t: 'stage-answer', kind, inRecord: false, right: true, day })
  assert.equal(
    right.record.stage?.[K] && 'stage' in right.record.stage[K] ? right.record.stage[K].stage : 0,
    3
  )
  assert.deepEqual(says(right.effects), ['Right. The next problem hides the last two lines.'])
  assert.deepEqual(shows(right.effects), ['The next problem hides the last two lines.'])
  // The fading problems used, the next comes from the bank and is kept as used.
  assert.deepEqual(right.record.used, ['k1-p1'])
  const wrong = mathsStep(at2, { t: 'stage-answer', kind, inRecord: false, right: false, day })
  assert.deepEqual(says(wrong.effects), [])
  assert.deepEqual(shows(wrong.effects), [''])
  const at3 = practice({ stage: { k1: { ...START, stage: 3, next: 1, day } } })
  const alone = mathsStep(at3, { t: 'stage-answer', kind, inRecord: false, right: true, day })
  assert.deepEqual(shows(alone.effects), ['The next problem hides every line. Solve it alone.'])
})

test('right alone opens the next form, and on the last form retires the kind', () => {
  const at4 = practice({ stage: { k1: { ...START, stage: 4, next: 1, day } } })
  const next = mathsStep(at4, { t: 'stage-answer', kind, inRecord: true, right: true, day })
  assert.deepEqual(next.record.stage?.[K], { ...START, form: 1, problem: null, shown: false, day })
  assert.deepEqual(shows(next.effects), [
    'The next form of this kind opens with its worked example.'
  ])
  const last = practice({ stage: { k1: { ...START, form: 1, stage: 4, next: 1, day } } })
  const retired = mathsStep(last, { t: 'stage-answer', kind, inRecord: true, right: true, day })
  assert.deepEqual(retired.record.stage?.[K], { day })
  assert.equal(retired.record.retired?.[K], day)
  assert.deepEqual(says(retired.effects), [
    'Right. This kind has no more worked examples. Its problems now come in mixed practice.'
  ])
  const yesNo = mathsStep(last, {
    t: 'stage-answer',
    kind: { ...kind, twice: true },
    inRecord: false,
    right: true,
    day
  })
  assert.deepEqual(shows(yesNo.effects), [
    "Solve one more fresh problem alone, so that this kind's problems come in mixed practice."
  ])
})

test('a wrong answer kept in the record shows its solution there', () => {
  const at2 = practice({ stage: { k1: { ...START, stage: 2, day } } })
  const r = mathsStep(at2, { t: 'stage-wrong', kind: K, day })
  assert.equal(
    r.record.stage?.[K] && 'shown' in r.record.stage[K] ? r.record.stage[K].shown : false,
    true
  )
  assert.deepEqual(says(r.effects), ['Wrong. The solution is below.'])
})

test('an idea stated: wrong keeps its day, right retires the kind', () => {
  const wrong = mathsStep(practice({}), { t: 'idea-wrong', kind: K, day })
  assert.deepEqual(wrong.record.stage, { k1: { day } })
  const right = mathsStep(practice({}), { t: 'idea-right', kind: K, day })
  assert.deepEqual(right.record.retired, { k1: day })
  assert.deepEqual(says(right.effects), [
    'Right. Problems on this idea now come in mixed practice.'
  ])
})

test('the try-first problem keeps its day, right or wrong', () => {
  const T = topicSlug('t')
  for (const right of [true, false]) {
    const r = mathsStep(practice({}), { t: 'tried', topic: T, right, day })
    assert.deepEqual(r.record.gate, { t: { tried: day } })
    assert.match(says(r.effects)[0] ?? '', right ? /^Right\./ : /^Wrong\./)
  }
})

test('a turn keeps the item in view; the kinds short of problems are kept for the author', () => {
  assert.deepEqual(mathsStep(practice({}), { t: 'turn', key: '/p#ideas', at: 2 }).record.pages, {
    '/p#ideas': 2
  })
  assert.deepEqual(mathsStep(practice({}), { t: 'short', kinds: [K] }).record.short, ['k1'])
})

const P1 = { id: problemId('k1-p1'), kind: K }
const P2 = { id: problemId('k1-p2'), kind: K }
const retired = { k1: '2026-09-01' }
const answer = (
  /** @type {import('./practice.logic.js').PracticeRecord} */ record,
  /** @type {boolean} */ right,
  /** @type {string} */ on = day,
  /** @type {{ id: import('./maths-decode.logic.js').ProblemId, kind: import('./maths-decode.logic.js').KindId }} */ problem = P1
) => mathsStep(record, { t: 'mix-answer', problem, lost: null, right, day: on })

test('mixed practice: a right answer on a never-tried problem writes the kind line only; the problem is used', () => {
  const r = answer(practice({ retired }), true)
  assert.equal(r.record.list?.[P1.id], undefined)
  // The kind's first line is read from `retired`, so the line stored is its second: FSRS from [first, today].
  assert.equal(r.record.list?.[K]?.length, 1)
  assert.equal(r.record.list?.[K]?.[0]?.date, day)
  assert.equal(r.record.list?.[K]?.[0]?.right, true)
  assert.ok((r.record.list?.[K]?.[0]?.next ?? '') > '2026-09-23')
  assert.deepEqual(r.record.used, [P1.id])
  assert.deepEqual(r.record.lastKind, { day, kind: K })
  assert.deepEqual(r.record.mix, { day, id: P1.id, phase: 'right' })
  assert.deepEqual(says(r.effects), ['Right.'])
  // It is never drawn again, and a second answer the same day writes nothing.
  assert.deepEqual(answer(r.record, true).record.list, r.record.list)
  assert.deepEqual(answer(r.record, false).record.list, r.record.list)
})

test('mixed practice: a wrong answer dates the problem and its kind for tomorrow, and the kind then draws that problem', () => {
  const wrong = answer(practice({ retired }), false)
  const next = [{ date: day, right: false, next: '2026-09-23' }]
  assert.deepEqual(wrong.record.list?.[P1.id], next)
  assert.deepEqual(wrong.record.list?.[K], next)
  assert.deepEqual(wrong.record.mix, { day, id: P1.id, phase: 'wrong' })
  assert.deepEqual(says(wrong.effects), ['Wrong. Read the solution.'])
  const bank = bankOf([
    { id: 'k1-p1', kind: 'k1' },
    { id: 'k1-p2', kind: 'k1' }
  ])
  assert.deepEqual(practiceOrder(bank, wrong.record, day), [])
  assert.deepEqual(
    practiceOrder(bank, wrong.record, '2026-09-23').map(p => p.id),
    ['k1-p1']
  )
  // Right the next day: its next line is written (right), so it is no longer the one last answered wrong.
  const mended = answer(wrong.record, true, '2026-09-23')
  assert.equal(mended.record.list?.[P1.id]?.length, 2)
  assert.equal(mended.record.list?.[P1.id]?.at(-1)?.right, true)
  assert.equal(mended.record.list?.[K]?.at(-1)?.right, true)
  assert.equal(mended.record.list?.[K]?.length, 2)
  assert.equal(draw(bank, mended.record, K)?.id, 'k1-p2')
  const shown = mathsStep(wrong.record, { t: 'mix-show', id: P1.id, phase: 'proof', day })
  assert.deepEqual(shown.record.mix, { day, id: P1.id, phase: 'proof' })
  assert.equal(mathsStep(wrong.record, { t: 'mix-next' }).record.mix, null)
})

test('mixed practice: a lost question keeps lines of its own and writes none for a kind', () => {
  const q = { id: problemId('tma01-q3'), kind: kindId('exam') }
  const lost = mathsStep(practice({}), {
    t: 'mix-answer',
    problem: q,
    lost: 'feedback',
    right: false,
    day
  })
  assert.deepEqual(lost.record.list, { [q.id]: [{ date: day, right: false, next: '2026-09-23' }] })
  assert.deepEqual(says(lost.effects), ["Wrong. Read the module's feedback on it again."])
  const changed = mathsStep(lost.record, { t: 'mix-change', problem: q, lost: 'script', day })
  assert.deepEqual(Object.keys(changed.record.list ?? {}), [q.id])
  assert.equal(changed.record.list?.[q.id]?.at(-1)?.right, true)
  assert.deepEqual(says(changed.effects), ['The mark is now right.'])
})

test("changing a mark writes today's lines again", () => {
  const right = answer(practice({ retired }), true).record
  const changed = mathsStep(right, { t: 'mix-change', problem: P1, lost: null, day })
  const next = [{ date: day, right: false, next: '2026-09-23' }]
  assert.deepEqual(changed.record.list?.[P1.id], next)
  assert.deepEqual(changed.record.list?.[K], next)
  assert.deepEqual(changed.record.used, [])
  assert.deepEqual(changed.record.mix, { day, id: P1.id, phase: 'wrong' })
  assert.deepEqual(says(changed.effects), ['The mark is now wrong. Read the solution.'])
  // Back to right: as if answered right the first time.
  const back = mathsStep(changed.record, { t: 'mix-change', problem: P1, lost: null, day })
  assert.deepEqual(back.record.list, right.list)
  assert.deepEqual(back.record.used, [P1.id])
  assert.deepEqual(says(back.effects), ['The mark is now right.'])
  // A mark held with no line saved: the change writes the lines it lacked.
  const held = practice({ retired, mix: { day, id: 'k1-p1', phase: 'right' } })
  const fixed = mathsStep(held, { t: 'mix-change', problem: P1, lost: null, day })
  assert.deepEqual(fixed.record.list?.[P1.id], next)
  // A problem tried before: right writes its line as well.
  const again = answer(practice({ retired, used: ['k1-p2'] }), true, day, P2)
  assert.equal(again.record.list?.[P2.id]?.at(-1)?.right, true)
})

test('what a lost question is checked against, in words', () => {
  assert.equal(sourceOf('feedback'), "the module's feedback on it")
  assert.equal(readAgain(null), 'Read the solution.')
})

test("a line's reason or a problem's answer shown is kept in the place until the next move", () => {
  const open = mathsStep(practice({}), { t: 'stage-open', kind: K, day })
  assert.deepEqual(open.record.stage?.[K], { ...START, open: true, day })
  const read = mathsStep(open.record, { t: 'example-line', kind, day })
  assert.deepEqual(read.record.stage?.[K], { ...START, line: 1, day })
})

test('mixed practice: an answer shown holds the problem in hand until it is marked', () => {
  const id = problemId('k1-p1')
  const shown = mathsStep(practice({}), { t: 'mix-show', id, phase: 'shown', day })
  assert.deepEqual(shown.record.mix, { day, id, phase: 'shown' })
  const marked = mathsStep(shown.record, {
    t: 'mix-answer',
    problem: { id, kind: K },
    lost: null,
    right: true,
    day
  })
  assert.equal(marked.record.mix?.phase, 'right')
})
