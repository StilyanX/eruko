// The biography work list and its checks against "A Self-Study System" (Biography, "Running it" and
// "The material").
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  addsItems,
  ageAt,
  lifeAction,
  inHand,
  nextBuilt,
  orderList,
  closeStuck,
  dateLine,
  gateFour,
  pageName,
  pairLives,
  sideBySide,
  restable,
  ruleSaved,
  studied,
  enterRecall,
  claimVerdict,
  forcedContested,
  forcedWhy,
  claimWhy,
  WHY,
  levelGate,
  levelLine,
  levelLines,
  lifeClosed,
  noRecall,
  notesFor,
  pairDue,
  recallItems,
  score,
  shown,
  retold,
  tell,
  place as lifePlace,
  levelResult,
  recallDate,
  recordLevel
} from './next.logic.js'
import { studyDay } from '../../../kernel/days.logic.js'
import { decodeLives, lifeId, readChance } from './decode.logic.js'

/** The record as the logic reads it, decoded from what is stored. @param {Record<string, unknown>} [json] */
/** A record with your field and post typed, so the work list goes past case 6. */
const rec = (json = {}) => decodeLives({ you: { field: '', rank: '' }, ...json })
/** The record's items, decoded. @param {unknown[]} list */
const items = list => rec({ items: list }).items
/** A note, decoded. @param {Record<string, unknown>} json */
const shapeOf = json => {
  const [s] = items([{ id: 's', life: 'aug', kind: 'shape', ...json }])
  assert.ok(s?.kind === 'shape')
  return s
}
/** A claim, decoded. @param {Record<string, unknown>} json */
const claimOf = json => {
  const [c] = items([{ id: 'c', life: 'aug', kind: 'claim', ...json }])
  assert.ok(c?.kind === 'claim')
  return c
}
/** A second account's passage. @param {Record<string, unknown>} [extra] */
const passage = (extra = {}) => ({ witness: 'w', written: '', stake: '', words: '', ...extra })
/** A sentence of the account. @param {Record<string, unknown>} json */
const sentence = json => ({ text: 'x', page: '', ...json })
const aug = lifeId('aug')
/** A chance of yes as typed, or null when it cannot be read. @param {string} text */
const readP = text => {
  const r = readChance(text)
  return r.ok ? r.value : null
}

const COURSE = { lives: [{ id: 'aug', name: 'Augustus', lessons: 3 }] }
const ALL = { right: 5, wrong: 0 }
const MISS = { right: 4, wrong: 1 }

test('the score is 2 × (p − o)²', () => {
  assert.equal(score(80, 1), 0.08)
  assert.equal(score(80, 0), 1.28)
  assert.equal(score(100, 1), 0)
  assert.equal(score(0, 1), 2)
  assert.equal(score(50, 0), 0.5)
})

test('the chance of yes is typed as people write it and stored 0–100', () => {
  assert.equal(readP('0.85'), 85)
  assert.equal(readP('.85'), 85)
  assert.equal(readP('0,8'), 80)
  assert.equal(readP('1'), 100)
  assert.equal(readP('0'), 0)
  assert.equal(readP('85'), 85)
  assert.equal(readP('85%'), 85)
  assert.equal(readP(' 85 % '), 85)
  assert.equal(readP('7'), 7)
  assert.equal(readP('100'), 100)
  assert.equal(readP('0.855'), 86)
  assert.equal(readP('85.5%'), 86)
  assert.equal(readP('0%'), 0)
  for (const bad of ['101', '150%', '-0.1', '-5', '', 'x', '.', '%', '85%%', '0.8.5'])
    assert.equal(readP(bad), null, bad)
  assert.deepEqual(readChance('x'), { ok: false, error: 'not-a-number' })
  assert.deepEqual(readChance('150%'), { ok: false, error: 'above-100' })
})

test('scores and leans show two decimals, a lean signed', () => {
  assert.equal(shown(0.08), '0.08')
  assert.equal(shown(0.15, true), '+0.15')
  assert.equal(shown(-0.05, true), '\u22120.05')
})

test('the date line gives the year and the age, from the birthday, 23 September 63 BC', () => {
  const born = { y: -63, m: 9, d: 23 }
  assert.equal(dateLine({ y: -44, m: 3, d: 15 }, born), '44 BC · age 18')
  assert.equal(dateLine({ y: -44, m: 9, d: 23 }, born), '44 BC · age 19')
  assert.equal(ageAt({ y: 14, m: 8, d: 19 }, born), '75') // no year 0
  assert.equal(ageAt({ y: -44 }, born), '18–19')
  assert.equal(dateLine({ y: -44 }, null), '44 BC')
  assert.equal(dateLine({ y: -63 }, born), '63 BC', 'his birth year with no month: no age')
  assert.equal(dateLine({ y: -70 }, born), '70 BC', 'before he was born: no age')
  assert.equal(dateLine({ y: -63, m: 12 }, born), '63 BC · age 0')
  assert.equal(dateLine({ y: 9, m: 9 }, born), 'AD 9 · age 70–71')
  assert.equal(dateLine({ y: 9, m: 8 }, born), 'AD 9 · age 70')
})

test('a life enters recall the day its first lesson is done and is told until right three times', () => {
  let r = enterRecall(noRecall(), '2026-10-01')
  assert.equal(lifeAction(rec({ recall: { aug: r } }), COURSE, '2026-10-01').kind, 'recall')
  r = tell(r, ALL, '2026-10-01')
  r = tell(r, MISS, '2026-10-01')
  assert.equal(r.learning, 1, 'a telling with misses neither counts nor starts the three again')
  r = retold(r, 5, '2026-10-01')
  assert.equal(r.learning, 2, 'its missed items told right again, the round counts')
  assert.equal(r.lines.length, 0)
  r = tell(r, ALL, '2026-10-01')
  assert.equal(r.learning, 3)
  assert.equal(retold(r, 5, '2026-10-01'), r, 'a learned life is not counted again')
  assert.deepEqual(
    r.lines,
    [{ date: '2026-10-01', right: 5, wrong: 0 }],
    'that day is its first line'
  )
  assert.equal(r.next, '2026-10-02')
})

test('a session cut off before the third telling picks the learning up first next time', () => {
  const r = tell(enterRecall(noRecall(), '2026-10-01'), ALL, '2026-10-01')
  assert.equal(lifeAction(rec({ recall: { aug: r } }), COURSE, '2026-10-05').kind, 'recall')
})

const learned = () => {
  let r = enterRecall(noRecall(), '2026-10-01')
  for (let i = 0; i < 3; i++) r = tell(r, ALL, '2026-10-01')
  return r
}

test('gate 1: while right and gaining no items, each gap grows with FSRS at 92 percent: 1, 5, 19, 61 days', () => {
  let r = learned()
  const gaps = []
  let day = '2026-10-01'
  for (let i = 0; i < 4; i++) {
    const next = r.next
    assert.ok(next)
    gaps.push(Math.round((Date.parse(next) - Date.parse(day)) / 86400000))
    day = next
    r = tell(r, ALL, day)
  }
  assert.deepEqual(gaps, [1, 5, 19, 61])
})

test('gate 1: a miss brings it back the next day; a telling days late is dated from the days that passed', () => {
  let r = tell(learned(), MISS, '2026-10-02')
  assert.equal(r.next, '2026-10-03')
  r = tell(r, ALL, '2026-10-06') // three days late
  assert.equal(r.next, '2026-10-09', 'FSRS from the 4 days since the last line')
})

test('one line a day: a second telling the same day writes nothing', () => {
  const r = tell(learned(), ALL, '2026-10-02')
  assert.equal(tell(r, MISS, '2026-10-02'), r)
})

test('a lesson or rule that adds items sets the next date to the next day, unless sooner', () => {
  const r = tell(learned(), ALL, '2026-10-02') // next 2026-10-07
  const soon = addsItems(r, '2026-10-02')
  assert.ok(soon)
  assert.equal(soon.next, '2026-10-03')
  const sooner = addsItems({ ...r, next: '2026-10-01' }, '2026-10-02')
  assert.ok(sooner)
  assert.equal(sooner.next, '2026-10-01')
  assert.equal(
    addsItems({ ...r, later: 3 }, '2026-10-02')?.later,
    3,
    'a lesson before the last keeps the count'
  )
  assert.equal(
    addsItems({ ...r, later: 3 }, '2026-10-02', true)?.later,
    0,
    'the last lesson starts it again'
  )
  const none = addsItems(noRecall(), '2026-10-02')
  assert.ok(none)
  assert.equal(none.next, null, 'not yet in recall: nothing')
})

test('closed: every lesson, every claim marked, three right on day one and three right later days since the last wrong', () => {
  let r = learned()
  /** @param {import('./decode.logic.js').Recall} recall */
  const record = recall =>
    rec({
      lives: { aug: { lastLesson: 1 } },
      recall: { aug: recall },
      items: [{ id: 'c1', life: 'aug', kind: 'claim', verdict: 'contested' }]
    })
  r = tell(r, ALL, '2026-10-02')
  r = tell(r, ALL, '2026-10-04')
  assert.equal(lifeClosed(record(r), aug, 2), false)
  r = tell(r, MISS, '2026-10-08')
  r = tell(r, ALL, '2026-10-09')
  r = tell(r, ALL, '2026-10-11')
  assert.equal(r.later, 2, 'a wrong telling set the count back to 0')
  assert.equal(lifeClosed(record(r), aug, 2), false)
  r = tell(r, ALL, '2026-10-15')
  assert.equal(lifeClosed(record(r), aug, 2), true)
  assert.equal(lifeClosed(record(r), aug, 3), false, 'a lesson left')
  const unmarked = { ...record(r), items: items([{ id: 'c1', life: 'aug', kind: 'claim' }]) }
  assert.equal(lifeClosed(unmarked, aug, 2), false, 'a claim not marked')
})

test('recall asks back forecasts (known ones too), claims, setbacks and rules, never "no rule" or a note', () => {
  const list = [
    { id: '1', life: 'aug', kind: 'forecast' },
    { id: '2', life: 'aug', kind: 'forecast', known: true },
    { id: '3', life: 'aug', kind: 'claim' },
    { id: '4', life: 'aug', kind: 'setback' },
    { id: '5', life: 'aug', kind: 'shape' },
    { id: '6', life: 'x', kind: 'rule', text: 'A rule.', lives: ['x', 'aug'] },
    { id: '7', life: 'aug', kind: 'rule', text: 'no rule', lives: ['aug'] },
    { id: '8', life: 'x', kind: 'claim' }
  ]
  assert.deepEqual(
    recallItems(rec({ items: list }), aug).map(i => i.id),
    ['1', '2', '3', '4', '6']
  )
})

test('a claim is contested with no choice on a dispute, no second account, or a witness who served him', () => {
  assert.equal(
    forcedContested(sentence({ dispute: 'The sources differ.', passage: passage() })),
    true
  )
  assert.equal(forcedContested(sentence({ dispute: '', passage: null })), true)
  assert.equal(
    forcedContested(sentence({ dispute: '', passage: passage({ witness: 'Livy' }) })),
    false
  )
  assert.equal(
    forcedContested(
      sentence({ dispute: '', passage: passage({ witness: 'Velleius', served: true }) })
    ),
    true,
    'only witness served him'
  )
})

/**
 * @param {string} life
 * @param {number[]} scores
 * @param {number[]} ps
 * @param {number[]} answers
 */
const line = (life, scores, ps, answers) =>
  levelLine(
    lifeId(life),
    scores.map((s, i) => {
      const p = ps[i]
      const answer = answers[i]
      assert.ok(p !== undefined && answer !== undefined)
      return { score: s, p, answer }
    }),
    '2026-10-01'
  )

test('the level line: mean, variance with n − 1, mean p, and share of yes', () => {
  const c = line('aug', [0.08, 0.5, 1.28], [80, 50, 80], [1, 0, 0])
  assert.equal(c.n, 3)
  assert.ok(Math.abs(c.mean - 0.62) < 1e-9)
  assert.ok(Math.abs(c.variance - (0.54 ** 2 + 0.12 ** 2 + 0.66 ** 2) / 2) < 1e-9)
})

test('level gate: the first life only sets the score', () => {
  const now = line('aug', [0.1, 0.2], [50, 50], [1, 0])
  assert.deepEqual(levelGate('lowered', [], now), { state: 'lowered', why: 'first', last: null })
})

test('level gate: raised below by more than 2e, lowered above by more than 2e, otherwise unchanged', () => {
  const last = line('aug', [0.4, 0.6, 0.5, 0.5], [50, 50, 50, 50], [1, 0, 1, 0])
  const better = line('b', [0.05, 0.1, 0.05, 0.1], [90, 90, 90, 90], [1, 1, 1, 1])
  const worse = line('b', [1.2, 1.3, 1.25, 1.25], [10, 10, 10, 10], [1, 1, 1, 1])
  const close = line('b', [0.3, 0.7, 0.45, 0.45], [50, 50, 50, 50], [1, 0, 1, 0])
  assert.equal(levelGate('lowered', [last], better).state, 'raised')
  assert.equal(levelGate('raised', [last], worse).state, 'lowered')
  const r = levelGate('lowered', [last], close)
  assert.deepEqual([r.state, r.why], ['lowered', 'noise'])
})

test('level gate: fewer than two forecasts leaves the level; the comparison skips lives with fewer than two', () => {
  const last = line('aug', [0.4, 0.6], [50, 50], [1, 0])
  const thin = line('c', [0.9], [50], [1])
  assert.equal(levelGate('lowered', [last], line('b', [0.01], [99], [1])).why, 'few')
  const gate = levelGate('lowered', [last, thin], line('b', [0.01, 0.02], [99, 99], [1, 1]))
  assert.ok(gate.last)
  assert.equal(gate.last.life, 'aug')
})

test('pair due: a note of two or more lives, one not yet compared', () => {
  assert.equal(pairDue(shapeOf({ lives: ['a'] })), false)
  assert.equal(pairDue(shapeOf({ lives: ['a', 'b'], compared: [] })), true)
  assert.equal(pairDue(shapeOf({ lives: ['a', 'b'], compared: ['a', 'b'] })), false)
})

test('the day turns at 04:00, so a session after midnight belongs to the day before', () => {
  assert.equal(studyDay(new Date(2026, 9, 2, 3, 59).getTime()), '2026-10-01')
  assert.equal(studyDay(new Date(2026, 9, 2, 4, 0).getTime()), '2026-10-02')
})

// The one next action

test('next action: no plan is needed; the first lesson opens with none', () => {
  assert.deepEqual(lifeAction(rec(), COURSE, '2026-10-01'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 0
  })
})

test('next action: nothing is due at the first session; the first lesson opens', () => {
  assert.deepEqual(lifeAction(rec(), COURSE, '2026-10-01'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 0
  })
})

test('next action: what is due comes before the next lesson, oldest date first', () => {
  const two = { lives: [...COURSE.lives, { id: 'b', name: 'B', lessons: 1 }] }
  const record = rec({
    recall: { aug: { ...learned(), next: '2026-10-05' }, b: { ...learned(), next: '2026-10-03' } },
    lives: { aug: { lastLesson: 0 } }
  })
  assert.deepEqual(lifeAction(record, two, '2026-10-06'), { kind: 'recall', life: 'b' })
  assert.deepEqual(lifeAction(record, two, '2026-10-02'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 1
  })
})

test('next action: a telling under way finishes, retries included, even once the life is no longer due', () => {
  // The saved telling also holds its phase; the work list reads only its life.
  const telling = { life: 'aug', phase: 'retry' }
  const record = rec({
    telling,
    recall: { aug: { ...learned(), next: '2026-10-09' } }
  })
  assert.deepEqual(lifeAction(record, COURSE, '2026-10-08'), { kind: 'recall', life: 'aug' })
})

test('next action: a pair due comes before the next lesson', () => {
  const record = rec({ items: [{ id: 's1', kind: 'shape', lives: ['b', 'aug'], compared: [] }] })
  assert.deepEqual(lifeAction(record, COURSE, '2026-10-01'), { kind: 'pair', shape: 's1' })
})

test('next action: a main account that fails the setbacks gate is stuck', () => {
  assert.equal(
    lifeAction(rec({ lives: { aug: { setbacks: false } } }), COURSE, '2026-10-01').kind,
    'stuck'
  )
})

test('next action: the lesson after the last one done comes next', () => {
  // The saved position also holds its lesson and screen; the work list reads only its life.
  const position = { life: 'aug', lesson: 1, screen: 3 }
  const record = rec({
    lives: { aug: { lastLesson: 0 } },
    position
  })
  assert.deepEqual(lifeAction(record, COURSE, '2026-10-01'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 1
  })
})

test('next action: after the last lesson, the level check, then the next-life checklist', () => {
  const done = rec({ lives: { aug: { lastLesson: 2 } } })
  assert.equal(lifeAction(done, COURSE, '2026-10-01').kind, 'level')
  const checked = rec({
    lives: { aug: { lastLesson: 2 } },
    level: { checks: [{ life: 'aug', n: 30 }] }
  })
  assert.equal(lifeAction(checked, COURSE, '2026-10-01').kind, 'next-life')
})

test('the next-life list: those who share the next note first, each group in the order met', () => {
  const met = ['A', 'B', 'C', 'D']
  assert.deepEqual(orderList(met, [false, true, false, true]), ['B', 'D', 'A', 'C'])
  assert.deepEqual(orderList(['A'], [true]), ['A'])
  assert.equal(orderList(met), met, 'nothing asked: the order met stands')
  assert.equal(orderList(met, [true, false]), met, 'under way: the order met stands')
})

// The record's other rules and the screens' helpers

test('a day joins sessions once, on its first write', () => {
  assert.deepEqual(studied([], '2026-10-01'), ['2026-10-01'])
  const s = studied(['2026-10-01'], '2026-10-01')
  assert.deepEqual(s, ['2026-10-01'])
  assert.deepEqual(studied(s, '2026-10-02'), ['2026-10-01', '2026-10-02'])
})

test('a page is the chapter, section and paragraph of the copy, said in words', () => {
  assert.equal(pageName('II.1 ¶7'), 'Bringmann II.1, paragraph 7')
  assert.equal(pageName('V ¶12'), 'Bringmann V, paragraph 12')
  assert.equal(pageName('III ¶2'), 'Bringmann III, paragraph 2')
  assert.equal(pageName('something else'), 'something else')
})

test('the pair screen: two columns lowered, three raised, the third paged below 1,600 px', () => {
  const shape = shapeOf({ lives: ['a', 'b', 'c'] })
  const a = lifeId('a')
  assert.deepEqual(pairLives(shape, a, 'lowered'), ['a', 'c'])
  assert.deepEqual(pairLives(shape, a, 'raised'), ['a', 'c', 'b'])
  assert.equal(sideBySide(3, 1920), 3)
  assert.equal(sideBySide(3, 1440), 2)
  assert.deepEqual(pairLives(shapeOf({ lives: ['a', 'b'] }), a, 'raised'), ['a', 'b'])
  assert.equal(sideBySide(2, 1920), 2)
})

test('gate 4 on a no: one more life at the lowered level, else "no rule" at once', () => {
  const shape = shapeOf({ lives: ['a', 'b', 'c'] })
  assert.equal(gateFour(shape, ['a', 'c'], 'lowered'), 'b')
  assert.equal(gateFour(shape, ['a', 'b', 'c'], 'lowered'), 'no rule')
  assert.equal(gateFour(shape, ['a', 'c'], 'raised'), 'no rule')
})

test('a rule saved brings every life it compares back the next day, unless sooner', () => {
  const recall = {
    a: { ...noRecall(), entered: '2026-09-01', next: '2026-10-20' },
    b: { ...noRecall(), entered: '2026-09-01', next: '2026-10-01' },
    c: { ...noRecall(), entered: '2026-09-01', next: '2026-10-20' }
  }
  const out = ruleSaved(recall, ['a', 'b'], '2026-10-05')
  assert.ok(out.a && out.b && out.c)
  assert.equal(out.a.next, '2026-10-06')
  assert.equal(out.b.next, '2026-10-01', 'already sooner')
  assert.equal(out.c.next, '2026-10-20', 'not compared')
})

test('a rule rests only on checked claims of the lives it compares', () => {
  const list = items([
    { id: '1', kind: 'claim', life: 'a', verdict: 'contested' },
    { id: '2', kind: 'claim', life: 'b', verdict: 'agrees' },
    { id: '3', kind: 'claim', life: 'c', verdict: 'agrees' },
    { id: '4', kind: 'setback', life: 'a' },
    { id: '5', kind: 'claim', life: 'a' }
  ])
  assert.deepEqual(
    restable(list, ['a', 'b']).map(i => i.id),
    ['1', '2']
  )
})

test('closing a life as stuck marks the day and keeps the rest of its record', () => {
  const { lives } = rec({ lives: { a: { id: 'a', opened: '2026-09-01' } } })
  assert.deepEqual(closeStuck(lives, lifeId('a'), '2026-10-01'), {
    a: { id: 'a', opened: '2026-09-01', stuck: '2026-10-01' }
  })
})

test('next action: a life closed as stuck no longer gives the stuck screen', () => {
  const course = { lives: [{ id: 'aug', name: 'A', lessons: 2 }] }
  const r = rec({ lives: { aug: { setbacks: false } } })
  assert.equal(lifeAction(r, course, '2026-10-01').kind, 'stuck')
  const closed = rec({ lives: closeStuck(r.lives, aug, '2026-10-01') })
  assert.notEqual(lifeAction(closed, course, '2026-10-01').kind, 'stuck')
})

test('a claim is contested with no choice, the first reason that applies: a dispute, no second account, a stake (21.01 <bu-bi-checks> Contested)', () => {
  assert.equal(forcedWhy(sentence({ passage: null, dispute: '' })), WHY.none)
  assert.equal(forcedWhy(sentence({ passage: null, dispute: 'd' })), WHY.dispute)
  assert.equal(forcedWhy(sentence({ passage: passage(), dispute: '' })), null)
  assert.equal(forcedWhy(sentence({ passage: passage(), dispute: 'd' })), WHY.dispute)
  assert.equal(forcedWhy(sentence({ passage: passage({ served: true }), dispute: '' })), WHY.stake)
  assert.equal(forcedContested(sentence({ passage: null, dispute: '' })), true)
})

test("an older record's unchecked claim reads as contested, no second account holding it", () => {
  assert.equal(claimVerdict(claimOf({ verdict: 'unchecked', witness: null })), 'contested')
  assert.equal(claimWhy(claimOf({ verdict: 'unchecked', witness: null })), WHY.none)
  assert.equal(claimWhy(claimOf({ verdict: 'contested', witness: null, why: WHY.dispute })), WHY.dispute)
  assert.equal(claimVerdict(claimOf({ verdict: 'agrees', witness: 'Livy' })), 'agrees')
  assert.equal(claimWhy(claimOf({ verdict: 'agrees', witness: 'Livy' })), '')
})

test('the level check shows five lines in plain words: score, chance of yes, how often yes came true, always 50%, and the counts', () => {
  const now = line('b', [0.08, 0.5, 1.28], [80, 50, 80], [1, 0, 0])
  const last = line('aug', [0.4, 0.6], [50, 50], [1, 0])
  const list = items([
    { id: 'f1', life: 'b', kind: 'forecast' },
    { id: 'f2', life: 'b', kind: 'forecast', known: true },
    { id: 'f3', life: 'b', kind: 'forecast', known: true },
    { id: 'f4', life: 'aug', kind: 'forecast', known: true }
  ])
  const b = lifeId('b')
  assert.deepEqual(levelLines(list, b, now, last), [
    'Your average score 0.62. Last life 0.50.',
    'Your average chance of yes 70%. Last life 50%.',
    'Yes came true 33% of the time. Last life 50%.',
    'Always saying 50% scores 0.50.',
    'You scored 3 forecasts and marked 2 as "I already know".'
  ])
  assert.equal(levelLines([], b, line('b', [0.5], [50], [1]), null)[0], 'Your average score 0.50.')
  for (const t of levelLines(list, b, now, last)) assert.doesNotMatch(t, /\b(lean|p =|noise)\b/i)
  assert.deepEqual(levelLines([], b, line('b', [], [], []), null), [
    'You scored no forecast in this life and marked 0 as "I already know".'
  ])
  const fifth = levelLines([], b, line('b', [0.5], [50], [1]), null)[4]
  assert.ok(fifth)
  assert.match(fifth, /^You scored 1 forecast and/)
})

test('the note list: this life first, then earlier lives, each newest first', () => {
  /**
   * @param {string} id
   * @param {string} life
   */
  const n = (id, life) => ({ id, life, kind: 'shape' })
  const list = items([
    n('a1', 'aug'),
    n('b1', 'b'),
    { id: 'f', kind: 'forecast' },
    n('a2', 'aug'),
    n('b2', 'b')
  ])
  assert.deepEqual(
    notesFor(list, lifeId('b')).map(x => x.id),
    ['b2', 'b1', 'a2', 'a1']
  )
  assert.deepEqual(notesFor([], lifeId('b')), [])
})

test('the place line: the next lesson by its place, then all done; no decision is named ahead', () => {
  const life = { id: 'augustus', lessons: 46 }
  assert.equal(lifePlace(life, rec()), 'Lesson 1 of 46.')
  assert.equal(
    lifePlace(life, rec({ lives: { augustus: { lastLesson: 10 } } })),
    'Lesson 12 of 46.'
  )
  assert.equal(
    lifePlace(life, rec({ lives: { augustus: { lastLesson: 45 } } })),
    'All 46 lessons done.'
  )
})

test('a position past the lesson after the last one done never skips a lesson', () => {
  const record = {
    lives: { aug: { lastLesson: 0 } },
    position: { life: 'aug', lesson: 999, step: 'situation', screen: 0 }
  }
  assert.deepEqual(lifeAction(rec(record), COURSE, '2026-10-01'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 1
  })
})

test('a record whose parts hold other values still gives a next action', () => {
  const odd = decodeLives({ you: {}, items: 'x', lives: 5, recall: [], position: 'p', level: 3 })
  assert.deepEqual(lifeAction(odd, COURSE, '2026-10-01'), {
    kind: 'lesson',
    life: 'aug',
    lesson: 0
  })
  assert.deepEqual(odd.items, [])
  assert.deepEqual(odd.lives, {})
  assert.equal(odd.position, undefined)
  assert.equal(odd.level, undefined)
  assert.equal(lifeAction(rec(), COURSE, '2026-10-01').kind, 'lesson')
})

test('a life still being learned waits on the day it entered, so Review counts it', () => {
  assert.equal(
    recallDate({ entered: '2026-10-01', learning: 1, next: null, lines: [], later: 0 }),
    '2026-10-01'
  )
  assert.equal(
    recallDate({ entered: '2026-10-01', learning: 3, next: '2026-10-02', lines: [], later: 0 }),
    '2026-10-02'
  )
  assert.equal(recallDate(undefined), undefined)
})

test('three columns stand side by side from 1,600 CSS pixels', () => {
  const [shape] = decodeLives({ items: [{ id: 's', kind: 'shape', lives: ['a', 'b', 'c'] }] }).items
  assert.ok(shape?.kind === 'shape')
  const lives = pairLives(shape, lifeId('a'), 'raised')
  assert.equal(sideBySide(lives.length, 1599), 2)
  assert.equal(sideBySide(lives.length, 1600), 3)
})

test('the level check is recorded with no press, once, and its result read back', () => {
  const items = [
    { id: 'f1', life: 'aug', kind: 'forecast', p: 80, answer: 1, score: 0.08 },
    { id: 'f2', life: 'aug', kind: 'forecast', p: 50, answer: 0, score: 0.5 },
    { id: 'f3', life: 'aug', kind: 'forecast', known: true }
  ]
  const record = rec({ items, lives: { aug: { lastLesson: 2 } } })
  const aug = lifeId('aug')
  assert.equal(lifeAction(record, COURSE, '2026-10-01').kind, 'level')
  const checked = recordLevel(record, aug, '2026-10-01')
  assert.equal(checked.level?.checks.length, 1)
  assert.equal(checked.level?.state, 'lowered')
  assert.equal(recordLevel(checked, aug, '2026-10-02'), checked)
  assert.equal(lifeAction(checked, COURSE, '2026-10-01').kind, 'next-life')
  const result = levelResult(checked, aug)
  assert.ok(result)
  assert.equal(result.why, 'first')
  assert.equal(result.first, true)
  assert.equal(result.lines[0], 'Your average score 0.29.')
  assert.equal(levelResult(record, aug), null)
})

test('next action: the end level comes after the lives due and before a pair, from the day after the life closed', () => {
  const closed = { lastLesson: 2, closed: '2026-10-01' }
  const shape = { id: 's1', kind: 'shape', lives: ['b', 'aug'], compared: [] }
  const record = rec({ lives: { aug: closed }, items: [shape] })
  assert.deepEqual(lifeAction(record, COURSE, '2026-10-01'), { kind: 'pair', shape: 's1' })
  assert.deepEqual(lifeAction(record, COURSE, '2026-10-02'), { kind: 'end', life: 'aug' })
  const due = rec({ lives: { aug: closed }, recall: { aug: { ...learned(), next: '2026-10-02' } } })
  assert.equal(lifeAction(due, COURSE, '2026-10-02').kind, 'recall', 'a life due is told first')
  const taken = rec({
    lives: {
      aug: { ...closed, end: { lines: [{ date: '2026-10-02', right: true, next: '2026-10-05' }] } }
    }
  })
  assert.notEqual(lifeAction(taken, COURSE, '2026-10-04').kind, 'end')
  assert.equal(lifeAction(taken, COURSE, '2026-10-05').kind, 'end')
})

test('next action: a later life opened is the life in hand; one closed as stuck goes on to the checklist; a built life whose account fails the setbacks gate is stuck', () => {
  const two = {
    lives: [
      { id: 'aug', name: 'Augustus', lessons: 3 },
      { id: 'b', name: 'B', lessons: 2 }
    ]
  }
  const both = rec({
    lives: { aug: { lastLesson: 2 }, b: { opened: '2026-11-01' } },
    level: { checks: [{ life: 'aug', n: 30 }] }
  })
  assert.equal(inHand(both, two), 'b')
  assert.deepEqual(lifeAction(both, two, '2026-11-01'), { kind: 'lesson', life: 'b', lesson: 0 })
  const done = rec({
    lives: { aug: { lastLesson: 2 } },
    level: { checks: [{ life: 'aug', n: 30 }] }
  })
  assert.equal(nextBuilt(done, two, 'aug')?.id, 'b')
  assert.equal(nextBuilt(both, two, 'aug'), null)
  const stuck = rec({ lives: { b: { opened: '2026-11-01', setbacks: false } } })
  assert.equal(lifeAction(stuck, two, '2026-11-01').kind, 'stuck')
  const ended = rec({
    lives: { b: { opened: '2026-11-01', setbacks: false, stuck: '2026-11-02' } }
  })
  assert.equal(inHand(ended, two), 'aug', 'a life closed as stuck is no longer in hand')
  const fails = { lives: [{ id: 'aug', name: 'Augustus', lessons: 3, setbacks: false }] }
  assert.equal(lifeAction(rec(), fails, '2026-11-01').kind, 'stuck')
  assert.equal(
    lifeAction(rec({ lives: { aug: { stuck: '2026-11-01' } } }), fails, '2026-11-01').kind,
    'next-life'
  )
})

test('no life in hand: your field and post first (case 6), then the first lesson', () => {
  const course = { lives: [{ id: 'aug', name: 'A', lessons: 2 }] }
  assert.deepEqual(lifeAction(decodeLives({}), course, '2026-10-01'), { kind: 'you' })
  const typed = rec({})
  assert.deepEqual(lifeAction(typed, course, '2026-10-01'), { kind: 'lesson', life: aug, lesson: 0 })
  const opened = decodeLives({ lives: { aug: { opened: '2026-10-01' } } })
  assert.equal(lifeAction(opened, course, '2026-10-01').kind, 'lesson', 'a life opened before needs no form')
})
