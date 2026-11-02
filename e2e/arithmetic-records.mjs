// Hides: the Arithmetic records a learner some way into the course holds, dated from today, for
// the screens' tests (arithmetic.spec.mjs) and for screenshots of the states a first visit never
// reaches. Run as a script, it writes each as JSON into the folder given:
//   node e2e/arithmetic-records.mjs /tmp/records   (then --store aether-math-arithmetic=/tmp/records/math.json)
import { mkdirSync, writeFileSync } from 'node:fs'
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { factSet } from '../src/kernel/facts.logic.js'

const today = studyDay(Date.now())
/** @param {number} n */
const ago = n => addDays(today, -n)

/**
 * Arithmetic's record: the first three topics' kinds retired, kinds returned (the kind of a proof
 * from the axioms the oldest due, its problem the one last answered wrong), kinds of the next
 * topics part way through their fading, proofs read and due, a reading in hand, and statements
 * proved and given up. Kinds with no line of their own fall due the day after they retired.
 */
export function mathRecord() {
  return {
    retired: {
      't1-k1': ago(30),
      't1-k2': ago(29),
      't1-k3': ago(28),
      't2-k1': ago(25),
      't2-k2': ago(24),
      't3-k1': ago(20),
      't3-k2': ago(19),
      't3-k3': ago(18),
      't40-k1': ago(12)
    },
    gate: {
      'order-and-addition': { tried: ago(21) },
      'order-and-multiplication': { tried: ago(3) },
      powers: { tried: ago(2) }
    },
    list: {
      't40-k1': [{ date: ago(6), right: false, next: ago(5) }],
      't40-k1-p01': [{ date: ago(6), right: false, next: ago(5) }],
      't2-k1': [{ date: ago(2), right: false, next: ago(1) }],
      't2-k1-p03': [{ date: ago(2), right: false, next: ago(1) }],
      't1-k1': [{ date: ago(4), right: true, next: today }],
      't1-k1-p02': [{ date: ago(4), right: true, next: today }],
      't1-k2': [{ date: ago(3), right: true, next: addDays(today, 6) }],
      't1-k3': [{ date: ago(3), right: true, next: addDays(today, 6) }],
      't2-k2': [{ date: ago(3), right: true, next: addDays(today, 6) }],
      't3-k1': [{ date: ago(3), right: true, next: addDays(today, 6) }],
      't3-k2': [{ date: ago(1), right: true, next: addDays(today, 5) }],
      't3-k3': [{ date: ago(3), right: true, next: addDays(today, 6) }]
    },
    used: ['t1-k1-p02', 't2-k1-p03', 't3-k2-p01', 't5-k1-p02'],
    stage: {
      't4-k1': { form: 0, stage: 2, next: 1, line: 0, problem: 'fade-0-0', day: ago(1) },
      't4-k2': { form: 0, stage: 1, next: 0, line: 2, wrong: 1, day: ago(1) },
      't5-k1': { form: 1, stage: 4, next: 3, line: 0, problem: 't5-k1-p02', streak: 0, day: ago(1) }
    },
    proofs: {
      't2-p1': { read: ago(5), checks: [], known: false, wrong: [2] },
      't3-p1': {
        read: ago(10),
        checks: [{ date: ago(9), right: true, next: ago(1) }],
        known: true,
        wrong: []
      },
      't4-p1': { reading: { line: 1, wrong: [] } }
    },
    proved: { 't2-s1': { done: ago(5) }, 't3-s1': { seen: ago(3) } }
  }
}

/** The same record with the proof from the axioms answered, so a plain problem comes first. */
export function mathPlainFirst() {
  const r = mathRecord()
  const answered = [{ date: ago(1), right: true, next: addDays(today, 9) }]
  return { ...r, list: { ...r.list, 't40-k1': answered, 't40-k1-p01': answered } }
}

/** A learner who has begun, with nothing due today. */
function mathResting() {
  return { list: { 't1-k1-p02': [{ date: ago(1), right: true, next: addDays(today, 4) }] } }
}

/** One clean timed sheet of `seconds`, `days` ago. @param {number} days @param {number} seconds */
const timed = (days, seconds) => ({
  time: Date.parse(`${ago(days)}T12:00:00`),
  seconds,
  perMin: Math.round((121 * 60) / seconds),
  errors: 0
})

/**
 * The number facts: addition passed with its next sheet ahead, subtraction passed and due today,
 * multiplication clean untimed with a timed sheet slower than it, division not begun.
 */
export function factsRecord() {
  return {
    addition: {
      clean: Date.parse(`${ago(12)}T11:00:00`),
      cleanSeconds: 300,
      timed: [timed(11, 280)],
      returns: [{ date: ago(11), right: true, next: addDays(today, 3) }]
    },
    subtraction: {
      clean: Date.parse(`${ago(9)}T11:00:00`),
      cleanSeconds: 320,
      timed: [timed(8, 300)],
      returns: [{ date: ago(8), right: true, next: today }]
    },
    multiplication: {
      clean: Date.parse(`${ago(3)}T11:00:00`),
      cleanSeconds: 400,
      timed: [timed(2, 460)]
    }
  }
}

/** Every operation passed, none due today. */
function factsAllPassed() {
  const base = factsRecord()
  const passed = {
    ...base.addition,
    returns: [{ date: ago(11), right: true, next: addDays(today, 3) }]
  }
  return { addition: passed, subtraction: passed, multiplication: passed, division: passed }
}

/** The facts with a timed multiplication sheet in hand, on its second page, part answered. */
export function factsSheet() {
  const rows = factSet('multiplication')
  return {
    ...factsRecord(),
    sheet: {
      op: 'multiplication',
      timed: true,
      rows,
      answers: rows.slice(0, 14).map(([, a], i) => (i === 3 ? '7' : String(a))),
      page: 1,
      elapsed: 95000,
      at: Date.now()
    }
  }
}

/** The facts with that sheet checked today: two errors, against the last timed sheet. */
function factsChecked() {
  const rows = factSet('multiplication')
  const base = factsRecord()
  const now = Date.now()
  const last = base.multiplication.timed[0]
  return {
    ...base,
    multiplication: {
      ...base.multiplication,
      timed: [...base.multiplication.timed, { time: now, seconds: 410, perMin: 17, errors: 2 }]
    },
    sheet: {
      op: 'multiplication',
      timed: true,
      rows,
      answers: rows.map(([, a], i) => (i === 3 ? '7' : i === 40 ? '' : String(a))),
      page: 10,
      elapsed: 410000,
      at: now,
      result: { errors: 2, seconds: 410, last }
    }
  }
}

/** Each record by the file it is written to. */
const RECORDS = {
  'math.json': mathRecord,
  'math-plain.json': mathPlainFirst,
  'math-resting.json': mathResting,
  'facts.json': factsRecord,
  'facts-passed.json': factsAllPassed,
  'facts-sheet.json': factsSheet,
  'facts-checked.json': factsChecked
}

const out = process.argv[2]
if (import.meta.filename === process.argv[1] && out) {
  mkdirSync(out, { recursive: true })
  for (const [name, make] of Object.entries(RECORDS))
    writeFileSync(`${out}/${name}`, JSON.stringify(make()))
}
