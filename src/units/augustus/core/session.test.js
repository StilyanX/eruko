// Augustus's session step (src/units/augustus/core/session.logic.js): each move of the learner on
// the record, what it says, and one stored log of moves replayed to its stored record, byte for
// byte (tests/augustus-replay-log.json, tests/augustus-replay-state.json).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { decodeLives, encodeLives, itemId, lifeId, sentenceId } from './decode.logic.js'
import { LIVES } from './lives.logic.js'
import { firstLife } from './next.logic.js'
import { step } from './session.logic.js'

/** @typedef {import('./session.logic.js').Move} Move */
/** @typedef {import('./session.logic.js').Event} Event */
/** @typedef {import('./decode.logic.js').LivesRecord} State */

const aug = lifeId('augustus')
const [life] = LIVES
assert.ok(life)
const [lesson] = life.lessons
assert.ok(lesson)
const at = { life: aug, lesson: 0 }

/**
 * Moves played on a record, each stamped with the day and the id `m<k>`.
 * @param {State} state
 * @param {readonly Move[]} moves
 * @param {string} [day]
 */
function play(state, moves, day = '2026-10-01') {
  /** @type {readonly import('./lesson.logic.js').Effect[]} */
  let said = []
  let s = state
  moves.forEach((move, k) => {
    const out = step(s, { ...move, day, id: `m${k}` })
    s = out.state
    said = out.effects
  })
  return { state: s, effects: said }
}

/** The moves of the first lesson, from its first screen to the record written. */
/** @type {readonly Move[]} */
const LESSON = [
  { t: 'go', ...at, step: 'situation', screen: 7 },
  { t: 'go', ...at, step: 'question', screen: 0 },
  { t: 'draft', ...at, pText: '30', reason: 'He is young.' },
  { t: 'lock', ...at, pText: '30', reason: 'He is young.' },
  { t: 'go', ...at, step: 'struggle', screen: 0 },
  { t: 'setback-type', ...at, row: 0, field: 'setback', text: 'He fell ill.' },
  { t: 'setback-type', ...at, row: 0, field: 'cost', text: 'He stayed.' },
  { t: 'setback-type', ...at, row: 0, field: 'next', text: 'He followed later.' },
  { t: 'setbacks-done', ...at, none: false },
  { t: 'pick', ...at, sentence: sentenceId(lesson.id, 0, 3), on: true },
  { t: 'claims-chosen', ...at },
  { t: 'check-done', ...at },
  {
    t: 'claim-text',
    ...at,
    sentence: sentenceId(lesson.id, 0, 3),
    text: 'Caesar was his great-uncle.'
  },
  { t: 'note-text', ...at, text: 'A patron who leaves for war.' },
  { t: 'record-done', ...at }
]

test('a lesson: each step is kept in the position, and Done writes it into the record', () => {
  const { state, effects } = play(decodeLives(), LESSON)
  assert.deepEqual(
    state.items.map(i => i.kind),
    ['forecast', 'setback', 'claim', 'shape']
  )
  const [forecast, setback, claim] = state.items
  assert.ok(forecast?.kind === 'forecast' && setback?.kind === 'setback' && claim?.kind === 'claim')
  assert.deepEqual([forecast.p, forecast.score, forecast.reason], [30, 0.18, 'He is young.'])
  assert.equal(setback.date, '2026-10-01', 'the setbacks are dated the day the lesson is written')
  assert.deepEqual(
    [claim.text, claim.verdict, claim.why],
    ['Caesar was his great-uncle.', 'contested', 'no second account holds it']
  )
  assert.deepEqual(state.position, { life: aug, lesson: 1, step: 'situation', screen: 0 })
  assert.equal(state.lives.augustus?.lastLesson, 0)
  assert.equal(state.lives.augustus?.opened, '2026-10-01')
  assert.equal(state.recall.augustus?.entered, '2026-10-01')
  assert.deepEqual(state.sessions, ['2026-10-01'])
  assert.deepEqual(effects, [{ t: 'say', text: 'Lesson 1 of 56 is in the record.' }])
})

test('what is typed in a lesson is in the record before it is locked or done', () => {
  const typed = play(decodeLives(), LESSON.slice(0, 3)).state
  assert.deepEqual(typed.position?.draft, { pText: '30', reason: 'He is young.' })
  const back = play(typed, [{ t: 'go', ...at, step: 'situation', screen: 7 }]).state
  assert.deepEqual(
    back.position?.draft,
    { pText: '30', reason: 'He is young.' },
    'paging back keeps it'
  )
  const setbacks = play(decodeLives(), LESSON.slice(0, 8)).state.position
  assert.deepEqual(setbacks?.rows, [
    { setback: 'He fell ill.', cost: 'He stayed.', next: 'He followed later.' }
  ])
  assert.equal(setbacks?.draft, undefined, 'the forecast locked leaves no draft')
  const chosen = play(decodeLives(), LESSON.slice(0, 10)).state.position
  assert.deepEqual(chosen?.chosen, [sentenceId(lesson.id, 0, 3)])
  assert.equal(chosen?.setbacks?.length, 1)
  const written = play(decodeLives(), LESSON.slice(0, 14)).state.position
  assert.equal(written?.step, 'record')
  assert.deepEqual(written?.texts, { [sentenceId(lesson.id, 0, 3)]: 'Caesar was his great-uncle.' })
  assert.equal(written?.note, 'A patron who leaves for war.')
})

test('a chance that cannot be read is named and nothing is locked; "I already know" locks none', () => {
  const s = play(decodeLives(), LESSON.slice(0, 2)).state
  const bad = play(s, [{ t: 'lock', ...at, pText: '7.5.', reason: 'x' }])
  assert.equal(bad.state, s)
  assert.deepEqual(bad.effects, [
    { t: 'say', text: 'Write the chance as a number from 0 to 100, such as 85%.' }
  ])
  assert.equal(
    play(s, [{ t: 'lock', ...at, pText: '30', reason: ' ' }]).state,
    s,
    'no reason, no lock'
  )
  const known = play(s, [{ t: 'know', ...at }])
  assert.deepEqual(known.effects, [{ t: 'say', text: 'You read the decision with no score.' }])
  const [f] = known.state.items
  assert.ok(f?.kind === 'forecast')
  assert.equal(f.known, true)
  // After "I already know", no note is asked: no claim chosen puts the lesson in the record.
  const done = play(known.state, [
    { t: 'go', ...at, step: 'struggle', screen: 0 },
    { t: 'setbacks-done', ...at, none: true },
    { t: 'claims-chosen', ...at }
  ])
  assert.equal(done.state.lives.augustus?.lastLesson, 0)
  assert.deepEqual(done.state.items.length, 1)
})

test('setbacks: a row added and removed, and None carries none', () => {
  const s = play(decodeLives(), [
    ...LESSON.slice(0, 5),
    { t: 'setback-add', ...at },
    { t: 'setback-type', ...at, row: 1, field: 'cost', text: 'x' }
  ]).state
  assert.equal(s.position?.rows?.length, 2)
  const removed = play(s, [{ t: 'setback-remove', ...at, row: 1 }])
  assert.equal(removed.state.position?.rows?.length, 1)
  assert.deepEqual(removed.effects, [{ t: 'say', text: 'You removed setback 2.' }])
  const none = play(s, [{ t: 'setbacks-done', ...at, none: true }]).state.position
  assert.deepEqual([none?.step, none?.setbacks, none?.rows], ['check', [], undefined])
})

test('the check: a note of the notes picked takes the decision; Previous takes the claims back', () => {
  const noted = play(decodeLives(), LESSON).state
  const at2 = { life: aug, lesson: 1 }
  const s = play(noted, [
    { t: 'go', ...at2, step: 'struggle', screen: 0 },
    { t: 'setbacks-done', ...at2, none: true },
    { t: 'claims-chosen', ...at2 }
  ]).state
  assert.equal(s.position?.beside, true, 'with notes written, the shape is asked')
  const back = play(s, [{ t: 'beside-back', ...at2 }]).state
  assert.equal(back.position?.beside, undefined)
  const note = noted.items.find(i => i.kind === 'shape')
  assert.ok(note)
  const done = play(s, [
    { t: 'shape-pick', ...at2, shape: note.id },
    { t: 'verdict', ...at2, sentence: sentenceId(lesson.id, 0, 0), verdict: 'agrees' },
    { t: 'check-done', ...at2 }
  ]).state
  const taken = done.items.find(i => i.id === note.id)
  assert.ok(taken?.kind === 'shape')
  assert.equal(taken.decisions.length, 2)
  assert.equal(taken.paired, null, 'a note of the same life is not paired')
  assert.equal(done.lives.augustus?.lastLesson, 1)
})

/** A record whose life is in recall, every lesson done, told right on two later days. */
const told = () =>
  decodeLives({
    lives: { augustus: { lastLesson: 55 } },
    items: [{ id: 'c1', life: 'augustus', kind: 'claim', text: 'A claim.', verdict: 'unchecked' }],
    recall: {
      augustus: {
        lines: [
          { date: '2026-09-01', right: 1, wrong: 0 },
          { date: '2026-09-02', right: 1, wrong: 0 },
          { date: '2026-09-07', right: 1, wrong: 0 }
        ],
        learning: 3,
        later: 2,
        next: '2026-09-26',
        entered: '2026-09-01'
      }
    }
  })

test('a closed life is saved with the day it closed, from which the end level counts', () => {
  const { state } = play(told(), [
    { t: 'mark', life: aug, item: itemId('c1'), right: true },
    { t: 'judge', life: aug }
  ])
  assert.equal(state.lives.augustus?.closed, '2026-10-01')
  assert.equal(
    encodeLives(state).lives && JSON.stringify(encodeLives(state).lives),
    '{"augustus":{"lastLesson":55,"closed":"2026-10-01"}}'
  )
})

test('a telling: typed, shown, marked, its wrong items told again until right, then closed at once', () => {
  const s = play(told(), [
    { t: 'tell-text', life: aug, text: 'He ruled.' },
    { t: 'tell-show', life: aug },
    { t: 'mark', life: aug, item: itemId('c1'), right: false }
  ]).state
  assert.deepEqual(s.telling, {
    life: aug,
    phase: 'judge',
    text: 'He ruled.',
    marks: { c1: false }
  })
  const judged = play(s, [{ t: 'judge', life: aug }])
  assert.deepEqual(judged.effects, [{ t: 'say', text: '1 wrong. Tell those again.' }])
  assert.equal(judged.state.telling?.phase, 'retry')
  assert.equal(judged.state.recall.augustus?.later, 0)
  const still = play(judged.state, [{ t: 'retry-done', life: aug }])
  assert.deepEqual(still.effects, [{ t: 'say', text: '1 still wrong. Tell those again.' }])
  const right = play(judged.state, [
    { t: 'retry-show', life: aug, item: itemId('c1') },
    { t: 'mark', life: aug, item: itemId('c1'), right: true },
    { t: 'retry-done', life: aug }
  ])
  assert.equal(right.state.telling, null, 'a round all right opens the next item at once')
  assert.deepEqual(right.state.lastMark?.telling.shown, ['c1'])
  assert.deepEqual(right.effects, [{ t: 'say', text: 'Every item right.' }])
})

test('a telling on the first day opens the next telling at once until right three times', () => {
  const first = decodeLives({
    recall: { augustus: { lines: [], learning: 0, later: 0, next: null, entered: '2026-10-01' } }
  })
  const once = play(first, [{ t: 'judge', life: aug }]).state
  assert.equal(once.recall.augustus?.learning, 1)
  assert.deepEqual(once.telling, { life: aug, phase: 'tell', text: '', marks: {} })
  const third = play(once, [
    { t: 'judge', life: aug },
    { t: 'judge', life: aug }
  ]).state
  assert.equal(third.recall.augustus?.learning, 3)
  assert.equal(third.telling, null, 'the third right telling opens the next lesson')
  assert.deepEqual(
    play(decodeLives(), [{ t: 'judge', life: lifeId('nobody') }]).effects,
    [],
    'a life the course does not hold is not told'
  )
})

test('"Change the last mark" opens the round again as it stood before Done, on its day, until the next item is answered', () => {
  const marked = play(told(), [
    { t: 'tell-text', life: aug, text: 'He ruled.' },
    { t: 'tell-show', life: aug },
    { t: 'mark', life: aug, item: itemId('c1'), right: true },
    { t: 'judge', life: aug }
  ]).state
  assert.equal(marked.lives.augustus?.closed, '2026-10-01')
  assert.equal(marked.recall.augustus?.lines.length, 4)
  const changed = play(marked, [{ t: 'change-mark', life: aug }])
  assert.deepEqual(changed.effects, [{ t: 'say', text: 'Change the marks, then press Done.' }])
  assert.deepEqual(changed.state.telling, {
    life: aug,
    phase: 'judge',
    text: 'He ruled.',
    marks: { c1: true }
  })
  assert.deepEqual(changed.state.recall, told().recall, 'the line and its next date are taken back')
  assert.deepEqual(changed.state.lives, told().lives, 'the life is open again')
  assert.equal(changed.state.lastMark, undefined)
  const wrong = play(changed.state, [
    { t: 'mark', life: aug, item: itemId('c1'), right: false },
    { t: 'judge', life: aug }
  ]).state
  assert.equal(wrong.telling?.phase, 'retry')
  assert.equal(wrong.recall.augustus?.lines.at(-1)?.wrong, 1, "the day's line is written again")
  // Typing or turning keeps it; an answer, or another day, ends it.
  const turned = play(marked, [{ t: 'go', ...at, step: 'situation', screen: 1 }]).state
  assert.ok(turned.lastMark)
  const answered = play(marked, [{ t: 'know', ...at }]).state
  assert.equal(answered.lastMark, undefined)
  const late = play(marked, [{ t: 'change-mark', life: aug }], '2026-10-02')
  assert.equal(late.state, marked)
})

/** A record with a note of two lives, not yet compared. */
const paired = (/** @type {'raised' | 'lowered'} */ state = 'lowered') =>
  decodeLives({
    level: { state, checks: [] },
    lives: { caesar: { name: 'Julius Caesar' } },
    items: [
      {
        id: 'n1',
        life: 'augustus',
        kind: 'shape',
        text: 'A note.',
        lives: ['augustus', 'caesar', 'alexander']
      },
      { id: 'c1', life: 'augustus', kind: 'claim', text: 'A claim.', verdict: 'agrees' }
    ],
    recall: {
      augustus: { lines: [], learning: 3, later: 1, next: '2026-10-20', entered: '2026-09-01' }
    }
  })

test('the pair: cells, the rule and its claims are kept as typed, and Done saves the rule', () => {
  const n1 = itemId('n1')
  const s = play(paired(), [
    { t: 'cell', shape: n1, life: aug, row: 'problem', text: 'x' },
    { t: 'rule-text', shape: n1, text: ' Wait for the army. ' },
    { t: 'rest', shape: n1, claim: itemId('c1'), on: true },
    { t: 'rest', shape: n1, claim: itemId('c9'), on: true },
    { t: 'rest', shape: n1, claim: itemId('c9'), on: false }
  ]).state
  assert.deepEqual(s.pair, {
    shape: 'n1',
    cells: { 'augustus.problem': 'x' },
    rule: ' Wait for the army. ',
    rests: ['c1'],
    extra: []
  })
  const saved = play(s, [{ t: 'rule-done', shape: n1 }])
  assert.equal(saved.state.pair, undefined)
  const rule = saved.state.items.at(-1)
  assert.ok(rule?.kind === 'rule')
  assert.deepEqual(
    [rule.text, rule.lives, rule.restsOn],
    ['Wait for the army.', ['augustus', 'alexander'], ['c1']]
  )
  assert.equal(saved.state.recall.augustus?.next, '2026-10-02')
  assert.deepEqual(saved.effects, [])
})

test('the pair: "no rule yet" adds a life at the lowered level, then "no rule" writes none', () => {
  const n1 = itemId('n1')
  const more = play(paired(), [{ t: 'no-rule', shape: n1 }]).state
  assert.deepEqual(more.pair?.extra, ['caesar'])
  const none = play(more, [{ t: 'no-rule', shape: n1 }]).state
  const rule = none.items.at(-1)
  assert.ok(rule?.kind === 'rule')
  assert.deepEqual([rule.text, rule.restsOn], ['no rule', []])
  assert.equal(none.recall.augustus?.next, '2026-10-20', '"no rule" leaves recall')
  const raised = play(paired('raised'), [{ t: 'no-rule', shape: n1 }]).state.items.at(-1)
  assert.ok(raised?.kind === 'rule')
  assert.equal(raised.text, 'no rule', 'at the raised level, "no rule" at once')
  assert.equal(play(paired(), [{ t: 'no-rule', shape: itemId('x') }]).state.items.length, 2)
})

test('the stuck path, the level check, the checklist and the sample', () => {
  const stuck = play(decodeLives(), [{ t: 'end-life', life: aug }])
  assert.deepEqual([stuck.state.lives.augustus?.stuck, stuck.effects], ['2026-10-01', []])
  const level = play(decodeLives(), [{ t: 'reach-level', life: aug }]).state
  assert.equal(level.level?.checks.length, 1)
  const listed = play(
    decodeLives({
      you: { field: 'Law', rank: 'Associate' },
      items: [{ id: 'n1', kind: 'shape', paired: null }]
    }),
    [{ t: 'list-text', field: 'people', text: 'Agrippa\n\n Maecenas ' }, { t: 'list-done' }]
  ).state
  assert.deepEqual(listed.checklist, { note: 'n1', people: ['Agrippa', 'Maecenas'] })
  assert.deepEqual(listed.you, { field: 'Law', rank: 'Associate' })
  assert.equal(listed.listing, undefined)
  const sample = decodeLives({
    sample: true,
    recall: { augustus: {}, other: {} },
    items: [
      { id: 'sample-setback', kind: 'setback' },
      { id: 'b1', kind: 'setback' }
    ]
  })
  const clean = play(sample, [{ t: 'drop-sample' }]).state
  assert.deepEqual(
    [clean.sample, Object.keys(clean.recall), clean.items.map(i => i.id)],
    [undefined, ['other'], ['b1']]
  )
  assert.deepEqual(clean.sessions, [], 'removing the sample is no day studied')
  const plain = decodeLives()
  assert.equal(play(plain, [{ t: 'drop-sample' }]).state, plain)
})

test('item 2: with two or more listed and another note unpaired, a yes or no for each on the next oldest', () => {
  const two = decodeLives({
    items: [
      { id: 'n1', kind: 'shape', paired: null },
      { id: 'n2', kind: 'shape', paired: '2026-09-01' },
      { id: 'n3', kind: 'shape', paired: null }
    ]
  })
  const asked = play(two, [
    { t: 'list-text', field: 'people', text: 'Agrippa\nMaecenas' },
    { t: 'list-done' },
    { t: 'list-next', yes: false },
    { t: 'list-next', yes: true },
    { t: 'list-next', yes: true }
  ]).state
  assert.deepEqual(
    asked.checklist,
    {
      note: 'n1',
      people: ['Agrippa', 'Maecenas'],
      nextNote: { note: 'n3', answers: [false, true] }
    },
    'asked on the next oldest unpaired note, once a person'
  )
  const one = play(two, [{ t: 'list-text', field: 'people', text: 'Agrippa' }, { t: 'list-done' }])
  assert.equal(one.state.checklist?.nextNote, undefined, 'one person: nothing asked')
  const lone = decodeLives({ items: [{ id: 'n1', kind: 'shape', paired: null }] })
  const noOther = play(lone, [
    { t: 'list-text', field: 'people', text: 'Agrippa\nMaecenas' },
    { t: 'list-done' }
  ])
  assert.equal(
    noOther.state.checklist?.nextNote,
    undefined,
    'no other unpaired note: nothing asked'
  )
  const started = play(two, [
    { t: 'list-text', field: 'people', text: 'Agrippa\nMaecenas' },
    { t: 'list-done' },
    { t: 'list-next', yes: true }
  ]).state
  assert.deepEqual(
    started.checklist?.nextNote,
    { note: 'n3', answers: [true] },
    'resumes at Maecenas'
  )
  const plain = decodeLives({ checklist: { note: 'n1', people: ['A', 'B'] } })
  assert.equal(
    play(plain, [{ t: 'list-next', yes: true }]).state.checklist,
    plain.checklist,
    'nothing asked: a yes changes nothing'
  )
})

test('a lesson the course does not hold changes nothing', () => {
  const s = decodeLives()
  const nowhere = { life: lifeId('nobody'), lesson: 0 }
  /** @type {Move[]} */
  const moves = [
    { t: 'know', ...nowhere },
    { t: 'setbacks-done', ...nowhere, none: true },
    { t: 'claims-chosen', ...nowhere },
    { t: 'record-done', ...nowhere },
    { t: 'go', ...nowhere, step: 'question', screen: 0 }
  ]
  for (const move of moves) assert.equal(play(s, [move]).state, s, move.t)
})

test('the course holds a life, or nothing is taught', () => {
  assert.throws(() => firstLife({ lives: [] }), /the course holds a life/)
})

test('a stored log of moves replays to its stored record, byte for byte', () => {
  /** @type {Event[]} */
  const log = JSON.parse(readFileSync('tests/augustus-replay-log.json', 'utf8'))
  const state = log.reduce((s, e) => step(s, e).state, decodeLives())
  assert.equal(
    `${JSON.stringify(encodeLives(state), null, 1)}\n`,
    readFileSync('tests/augustus-replay-state.json', 'utf8')
  )
})

/** A record whose life closed on 1 October, with no round yet. */
const closedLife = () =>
  decodeLives({
    ...encodeLives(told()),
    lives: { augustus: { lastLesson: 55, closed: '2026-10-01' } }
  })

test('the end level: no round on the day the life closed; the next day one is drawn, answered, kept as typed, and Done writes its line once', () => {
  const same = play(closedLife(), [{ t: 'end-open', life: aug }], '2026-10-01').state
  assert.equal(same.lives.augustus?.end, undefined, 'not due on the day it closed')
  const opened = play(closedLife(), [{ t: 'end-open', life: aug }], '2026-10-02').state
  const round = opened.lives.augustus?.end?.round
  assert.ok(round && !round.done)
  assert.equal(round.draw.gaps.length, 7)
  const again = play(opened, [{ t: 'end-open', life: aug }], '2026-10-02').state
  assert.deepEqual(again.lives.augustus?.end?.round?.draw, round.draw, 'an open round is kept')
  const [w] = round.draw.witnesses
  const [f] = round.draw.footing
  const [c] = round.draw.chapters
  const [s] = round.draw.list
  assert.ok(w && f && c !== undefined && s)
  const typed = play(
    opened,
    [
      { t: 'end-gap', life: aug, gap: 2, text: '7' },
      { t: 'end-witness', life: aug, sentence: w, witness: 'Appian' },
      { t: 'end-footing', life: aug, sentence: f, footing: 'staked' },
      { t: 'end-reading', life: aug, chapter: c, sentence: s },
      { t: 'end-go', life: aug, part: 3, screen: 4 }
    ],
    '2026-10-02'
  ).state
  const answered = typed.lives.augustus?.end?.round
  assert.deepEqual(answered?.answers.gaps, ['', '', '7'])
  assert.equal(answered?.answers.witnesses[w], 'Appian')
  assert.equal(answered?.answers.footing[f], 'staked')
  assert.equal(answered?.answers.reading[c], s)
  assert.deepEqual([answered?.part, answered?.screen], [3, 4])
  const done = play(typed, [{ t: 'end-done', life: aug }], '2026-10-02').state
  const end = done.lives.augustus?.end
  assert.deepEqual(end?.lines, [{ date: '2026-10-02', right: false, next: '2026-10-03' }])
  assert.equal(end?.round?.done, '2026-10-02')
  assert.equal(end?.shown.length, 35)
  const twice = play(
    done,
    [
      { t: 'end-done', life: aug },
      { t: 'end-open', life: aug }
    ],
    '2026-10-02'
  ).state
  assert.deepEqual(twice.lives.augustus?.end, end, 'taken once on its day')
  const next = play(done, [{ t: 'end-open', life: aug }], '2026-10-03').state
  assert.notDeepEqual(next.lives.augustus?.end?.round?.draw, round.draw, 'drawn new the next day')
  assert.equal(next.lives.augustus?.end?.round?.done, undefined)
})

test('the level check reads Judgment over the scored forecasts and sets judged the day it holds', () => {
  const forecasts = Array.from({ length: 40 }, (_, k) => ({
    id: `f${k}`,
    life: 'augustus',
    kind: 'forecast',
    lesson: 'aug-001',
    p: 70,
    answer: k < 28 ? 1 : 0,
    score: 2 * (0.7 - (k < 28 ? 1 : 0)) ** 2
  }))
  const s = decodeLives({ lives: { augustus: { lastLesson: 55 } }, items: forecasts })
  const checked = play(s, [{ t: 'reach-level', life: aug }], '2026-11-01').state
  assert.equal(checked.lives.augustus?.end?.judged, '2026-11-01')
  const few = decodeLives({
    lives: { augustus: { lastLesson: 55 } },
    items: forecasts.slice(0, 10)
  })
  assert.equal(
    play(few, [{ t: 'reach-level', life: aug }], '2026-11-01').state.lives.augustus?.end,
    undefined
  )
})

test('case 6: your field and post typed and kept, Done writes them as you', () => {
  const s = play(decodeLives(), [
    { t: 'list-text', field: 'field', text: ' Law ' },
    { t: 'list-text', field: 'rank', text: 'Clerk' }
  ]).state
  assert.equal(s.you, undefined)
  const done = play(s, [{ t: 'you-done' }]).state
  assert.deepEqual([done.you, done.listing], [{ field: 'Law', rank: 'Clerk' }, undefined])
})
