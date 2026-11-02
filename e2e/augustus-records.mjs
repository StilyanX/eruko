// Hides: the Augustus records a learner some way into the course holds, dated from today, for the
// screens' tests (augustus.spec.mjs) and for screenshots of the states a first visit never
// reaches: each step of a lesson, each phase of a telling, the pair of lives, the stuck path, the
// level check and the next life. Run as a script, it writes each as JSON into the folder given:
//   node e2e/augustus-records.mjs /tmp/records   (then --store aether-biography=/tmp/records/mid.json)
import { mkdirSync, writeFileSync } from 'node:fs'
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { AUGUSTUS } from '../src/units/augustus/content/augustus.js'
import { score } from '../src/units/augustus/core/next.logic.js'

const today = studyDay(Date.now())
/** @param {number} n */
const ago = n => addDays(today, -n)

/** @typedef {Record<string, unknown>} Rec */

/** The lessons done in the record most of these build on: the first eight. */
const LAST = 7

/**
 * The forecasts of the lessons done: the third read with "I already know", the rest scored.
 * @param {number} last
 */
function forecasts(last) {
  return AUGUSTUS.lessons.slice(0, last + 1).flatMap(
    /** @returns {Rec[]} */ (l, n) => {
      const q = l.question
      if (!q) return []
      const base = {
        id: `f${n}`,
        life: 'augustus',
        kind: 'forecast',
        date: ago(12 - Math.min(n, 11)),
        lesson: l.id,
        lifeDate: l.date,
        situation: l.situation,
        question: q.text,
        answer: q.answer
      }
      if (n === 2) return [{ ...base, known: true }]
      const p = [70, 35, 0, 60, 45, 80, 25, 55, 50, 65][n % 10] ?? 50
      return [
        {
          ...base,
          move: `I would ${q.option}.`,
          p,
          reason: 'He needs the army more than the Senate.',
          score: score(p, q.answer)
        }
      ]
    }
  )
}

/**
 * A sentence of the built life: lesson `n`, screen `a`, place `b`.
 * @param {number} n
 * @param {number} a
 * @param {number} b
 */
const s = (n, a, b) => {
  const l = AUGUSTUS.lessons[n]
  const screen = [...(l?.situation ?? []), ...(l?.outcome ?? [])][a]
  return screen?.sentences[b] ?? { text: '', page: '' }
}

/** Claims, setbacks and shape notes written at the lessons done. */
function written() {
  return [
    {
      id: 'c1',
      life: 'augustus',
      kind: 'claim',
      date: ago(12),
      lesson: 'aug-001',
      text: 'His great-uncle was Caesar.',
      sentence: s(0, 0, 3).text,
      page: s(0, 0, 3).page,
      witness: null,
      verdict: 'unchecked'
    },
    {
      id: 'b1',
      life: 'augustus',
      kind: 'setback',
      lesson: 'aug-002',
      setback: 'He fell ill and could not travel.',
      cost: 'He missed the campaign.',
      next: 'He followed Caesar to Spain once well.',
      page: s(1, 3, 0).page,
      date: ago(11)
    },
    // A claim kept contested beside a witness, as the record held it when the account had one.
    {
      id: 'c2',
      life: 'augustus',
      kind: 'claim',
      date: ago(9),
      lesson: 'aug-004',
      text: 'He set out for Italy in April 44 BC.',
      sentence: s(3, 0, 0).text,
      page: s(3, 0, 0).page,
      witness: 'Suetonius',
      verdict: 'contested'
    },
    {
      id: 'b2',
      life: 'augustus',
      kind: 'setback',
      lesson: 'aug-006',
      setback: 'Antony refused him the inheritance.',
      cost: 'He paid the legacies from his own fortune.',
      next: 'He raised troops of his own.',
      page: s(5, 0, 0).page,
      date: ago(7)
    },
    ...notes()
  ]
}

/** The shape notes written at the first seven lessons. */
function notes() {
  return [
    'A young heir whose rival holds the money he is owed.',
    'An offer of help that would bind him to a faction.',
    'A choice between waiting for a mandate and acting without one.',
    'A patron who dies before the protege holds any office.',
    'An army that will follow whoever pays it.',
    'Two older men who each want to use him against the other.',
    'A legal claim that can only be enforced by force.'
  ].map((text, i) => ({
    id: `n${i + 1}`,
    life: 'augustus',
    kind: 'shape',
    date: ago(12 - i),
    text,
    lives: ['augustus'],
    decisions: [AUGUSTUS.lessons[i]?.id ?? ''],
    paired: null,
    compared: []
  }))
}

/**
 * The record after `last` lessons: their forecasts, claims, setbacks and notes; recall entered
 * and learned, next due in three days; the next lesson's first screen in hand.
 * @param {number} [last]
 * @returns {Rec}
 */
function bio(last = LAST) {
  return {
    lives: {
      augustus: {
        id: 'augustus',
        name: 'Augustus',
        opened: ago(12),
        setbacks: true,
        accounts: AUGUSTUS.accounts,
        lastLesson: last
      }
    },
    items: [...forecasts(last), ...written()],
    recall: {
      augustus: {
        lines: [{ date: ago(12), right: 4, wrong: 0 }],
        learning: 3,
        later: 1,
        next: addDays(today, 3),
        entered: ago(12)
      }
    },
    position: { life: 'augustus', lesson: last + 1, step: 'situation', screen: 0 },
    sessions: [ago(12), ago(11), ago(9), ago(7)]
  }
}

/**
 * The record with the next lesson at `step`, and `extra` in its position.
 * @param {string} step
 * @param {Rec} [extra]
 */
function at(step, extra = {}) {
  const r = bio()
  return { ...r, position: { life: 'augustus', lesson: LAST + 1, step, screen: 0, ...extra } }
}

/** The lesson in hand (the ninth): its forecast locked, so the outcome opens on the answer. */
function outcome() {
  const r = bio()
  const l = AUGUSTUS.lessons[LAST + 1]
  const q = l?.question
  if (!l || !q) throw new Error('the lesson in hand has no question')
  const items = /** @type {Rec[]} */ (r.items)
  return {
    ...r,
    items: [
      ...items,
      {
        id: 'f-now',
        life: 'augustus',
        kind: 'forecast',
        date: today,
        lesson: l.id,
        lifeDate: l.date,
        situation: l.situation,
        question: q.text,
        answer: q.answer,
        move: 'I would wait for the Senate.',
        p: 30,
        reason: 'Waiting costs him nothing yet.',
        score: score(30, q.answer)
      }
    ],
    position: { life: 'augustus', lesson: LAST + 1, step: 'outcome', screen: 0 }
  }
}

/** The first lesson's outcome, with its forecast the first scored: the line on what scores mean. */
function firstOutcome() {
  const l = AUGUSTUS.lessons[0]
  const q = l?.question
  if (!l || !q) throw new Error('the first lesson has no question')
  return {
    lives: { augustus: { id: 'augustus', name: 'Augustus', opened: today, setbacks: true } },
    items: [
      {
        id: 'f0',
        life: 'augustus',
        kind: 'forecast',
        date: today,
        lesson: l.id,
        lifeDate: l.date,
        situation: l.situation,
        question: q.text,
        answer: q.answer,
        move: 'I would stay in Rome.',
        p: 20,
        reason: 'He is sickly and young.',
        score: score(20, q.answer)
      }
    ],
    position: { life: 'augustus', lesson: 0, step: 'outcome', screen: 0 },
    sessions: [today]
  }
}

/**
 * A telling under way.
 * @param {Rec} telling
 * @param {Rec} [recall] in place of the record's
 */
function telling(telling, recall) {
  const r = bio()
  const told = {
    life: 'augustus',
    text: 'He was born in 63 BC, the great-nephew of Caesar.\nHe stayed in Rome while Caesar went to Africa.',
    marks: {},
    page: 0,
    ...telling
  }
  return recall ? { ...r, telling: told, recall: { augustus: recall } } : { ...r, telling: told }
}

/** Recall still being learned: entered today, told right once. */
const learningRecall = () => ({ lines: [], learning: 1, later: 0, next: null, entered: today })

/** Every record by the file it is written to. */
export const RECORDS = {
  // The ninth lesson's first screen.
  'mid.json': () => bio(),
  // A telling while recall is learned, empty and told.
  'learning.json': () => ({ ...bio(), recall: { augustus: learningRecall() } }),
  'tell.json': () => telling({ phase: 'tell' }, learningRecall()),
  // Recall due today, after the day it was learned.
  'due.json': () => {
    const r = bio()
    return {
      ...r,
      recall: {
        augustus: {
          lines: [{ date: ago(12), right: 4, wrong: 0 }],
          learning: 3,
          later: 1,
          next: ago(1),
          entered: ago(12)
        }
      }
    }
  },
  'judge.json': () => telling({ phase: 'judge', marks: { f0: true, f1: false } }),
  'judge-page.json': () => telling({ phase: 'judge', marks: { f0: true, f1: false }, page: 2 }),
  'retry.json': () =>
    telling({ phase: 'retry', retry: ['f1', 'c2', 'b2'], missed: true, marks: { f1: true } }),
  'done-learning.json': () => telling({ phase: 'done' }, { ...learningRecall(), learning: 2 }),
  'done-missed.json': () =>
    telling({ phase: 'done', missed: true }, { ...learningRecall(), learning: 2 }),
  'done-next.json': () => telling({ phase: 'done' }),
  // Learned, with no next date: the round ends on no date.
  'done-no-next.json': () =>
    telling({ phase: 'done' }, { lines: [], learning: 3, later: 0, next: null, entered: ago(12) }),
  'outcome.json': outcome,
  'first-outcome.json': firstOutcome,
  'question.json': () => at('question', { draft: { pText: '0.7', reason: '' } }),
  'question-bad.json': () => at('question', { draft: { pText: '7.5.', reason: 'No army yet.' } }),
  'struggle.json': () => at('struggle'),
  'check.json': () =>
    at('check', {
      setbacks: [
        {
          id: 'b-now',
          life: 'augustus',
          kind: 'setback',
          lesson: AUGUSTUS.lessons[LAST + 1]?.id,
          setback: 'The Senate gave him no command.',
          cost: 'He had to wait.',
          next: 'He raised an army.',
          page: 'II.1 ¶7'
        }
      ]
    }),
  'check-first.json': () => at('check', { page: 0 }),
  'check-last.json': () => at('check', { page: 15 }),
  'record.json': () => {
    const id = AUGUSTUS.lessons[LAST + 1]?.id
    return at('record', {
      check: {
        claims: [
          { id: `${id}.9.0`, verdict: 'unchecked' },
          { id: `${id}.10.1`, verdict: 'unchecked' }
        ],
        shape: 'new'
      }
    })
  },
  'record-note.json': () => at('record', { check: { claims: [], shape: 'new' } }),
  'pair.json': () => {
    const r = bio()
    const items = /** @type {Rec[]} */ (r.items)
    const lives = /** @type {Rec} */ (r.lives)
    return {
      ...r,
      lives: { ...lives, caesar: { id: 'caesar', name: 'Julius Caesar', lastLesson: 3 } },
      items: [
        ...items.map(i =>
          i.id === 'n1'
            ? {
                ...i,
                lives: ['augustus', 'caesar'],
                decisions: ['aug-001', 'aug-004'],
                paired: ago(2)
              }
            : i
        )
      ]
    }
  },
  // A note shared with a life the record names no name for and the course does not build.
  'pair-unnamed.json': () => {
    const r = bio()
    const items = /** @type {Rec[]} */ (r.items)
    return {
      ...r,
      items: items.map(i =>
        i.id === 'n1' ? { ...i, lives: ['augustus', 'nobody'], paired: ago(2) } : i
      )
    }
  },
  'pair3.json': () => {
    const r = bio()
    const items = /** @type {Rec[]} */ (r.items)
    const lives = /** @type {Rec} */ (r.lives)
    return {
      ...r,
      level: { state: 'raised', checks: [] },
      lives: {
        ...lives,
        caesar: { id: 'caesar', name: 'Julius Caesar', lastLesson: 3 },
        alexander: { id: 'alexander', name: 'Alexander', lastLesson: 2 }
      },
      items: items.map(i =>
        i.id === 'n2'
          ? {
              ...i,
              lives: ['augustus', 'caesar', 'alexander'],
              decisions: ['aug-002'],
              paired: ago(1)
            }
          : i
      )
    }
  },
  // At the lowered level, a note of three lives: two side by side, the third added on a "no".
  'pair-more.json': () => {
    const r = /** @type {Rec} */ (RECORDS['pair3.json']())
    return { ...r, level: { state: 'lowered', checks: [] } }
  },
  'stuck.json': () => {
    const r = bio()
    const lives = /** @type {Record<string, Rec>} */ (r.lives)
    return { ...r, lives: { augustus: { ...lives.augustus, setbacks: false } } }
  },
  // Every lesson done and checked, the life closed yesterday: the end level's first round is due.
  'end.json': () => {
    const r = bio(55)
    const lives = /** @type {Record<string, Rec>} */ (r.lives)
    return {
      ...r,
      lives: { augustus: { ...lives.augustus, closed: ago(1) } },
      level: {
        state: 'lowered',
        checks: [
          {
            life: 'augustus',
            date: ago(4),
            n: 8,
            mean: 0.4,
            variance: 0.1,
            meanP: 0.5,
            shareYes: 0.5
          }
        ]
      }
    }
  },
  'level.json': () => ({
    ...bio(55),
    position: { life: 'augustus', lesson: 56, step: 'situation', screen: 0 }
  }),
  'level-again.json': () => ({
    ...bio(55),
    level: {
      state: 'lowered',
      checks: [
        {
          life: 'caesar',
          date: ago(40),
          n: 6,
          mean: 0.41,
          variance: 0.08,
          meanP: 0.55,
          shareYes: 0.5
        }
      ]
    }
  }),
  'next-life.json': () => ({
    ...bio(55),
    level: {
      state: 'lowered',
      checks: [
        {
          life: 'augustus',
          date: ago(1),
          n: 7,
          mean: 0.38,
          variance: 0.07,
          meanP: 0.5,
          shareYes: 0.29
        }
      ]
    },
    you: { field: 'Law', rank: 'Associate' }
  }),
  'next-life-done.json': () => ({
    ...bio(55),
    level: {
      state: 'lowered',
      checks: [
        {
          life: 'augustus',
          date: ago(1),
          n: 7,
          mean: 0.38,
          variance: 0.07,
          meanP: 0.5,
          shareYes: 0.29
        }
      ]
    },
    you: { field: 'Law', rank: 'Associate' },
    checklist: { note: 'n1', people: ['Agrippa', 'Maecenas'] }
  }),
  // No life opened, and the position names a life the course does not hold.
  'none.json': () => {
    const r = bio()
    const { opened: _opened, ...augustus } = /** @type {Record<string, Rec>} */ (r.lives).augustus ?? {}
    return { ...r, lives: { augustus }, position: { life: 'nobody', lesson: 0, step: 'situation', screen: 0 } }
  },
  'sample.json': () => ({
    ...bio(),
    sample: true,
    items: [
      ...forecasts(LAST),
      {
        id: 'sample-setback',
        life: 'augustus',
        kind: 'setback',
        setback: 'x',
        cost: 'y',
        next: 'z'
      }
    ]
  })
}

const out = process.argv[2]
if (import.meta.filename === process.argv[1] && out) {
  mkdirSync(out, { recursive: true })
  for (const [name, make] of Object.entries(RECORDS))
    writeFileSync(`${out}/${name}`, JSON.stringify(make()))
}
