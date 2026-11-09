// Hides: the C++ records a learner some way into the course holds, dated from today, for the
// screens' tests (cpp.spec.mjs) and for screenshots of the states a first visit never reaches.
// Each is built by the unit's own session step (session.logic.js) from a fresh record. Run as a
// script, it writes each as JSON into the folder given:
//   node e2e/cpp-records.mjs <folder>   (then --store aether-cpp=<folder>/<name>.json)
import { mkdirSync, writeFileSync } from 'node:fs'
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { KINDS, SECTIONS } from '../src/units/cpp/core/course.gen.js'
import { courseFrom, kindId, kindKey } from '../src/units/cpp/core/decode.logic.js'
import { BUILT_WITH, recordOf, withKind } from '../src/units/cpp/core/record.logic.js'
import { step } from '../src/units/cpp/core/session.logic.js'
import { KIND } from '../src/units/cpp/content/k01.gen.js'

/** @typedef {import('../src/units/cpp/core/decode.logic.js').CppRecord} CppRecord */
/** @typedef {import('../src/units/cpp/core/session.logic.js').Event} Event */

export const today = studyDay(Date.now())
/** @param {number} n */
const ago = n => addDays(today, -n)
const course = courseFrom(SECTIONS, KINDS)

/** What the fake runner says of itself (cpp.spec.mjs). */
export const ABOUT = { compiler: BUILT_WITH.name, version: BUILT_WITH.version, standard: 'c++23' }

/** The first kind's content, whose problems and trace the records work. */
export const FIRST = KIND
/**
 * Kind 1's problem at a place in the course order.
 * @param {number} at
 */
function problemAt(at) {
  const id = KINDS[0]?.problems[at]
  const p = id && KIND.problems[/** @type {keyof typeof KIND.problems} */ (id)]
  if (!p) throw new Error(`kind 1 holds a problem at ${at}`)
  return p
}
/** The problem the first Parsons problem is cut from, and the problem written alone after it. */
export const PARSONS = problemAt(0)
export const ALONE = problemAt(1)

/**
 * @template T
 * @param {unknown} v
 * @returns {T}
 */
const typed = v => /** @type {T} */ (v)

/**
 * The record after the events, from `r`; each event as the screens send it.
 * @param {readonly unknown[]} events
 * @param {CppRecord} [r]
 */
function after(events, r = recordOf({}, course)) {
  let x = r
  for (const e of events) x = step(course, x, typed(e)).state
  return x
}

/** A program run as the runner answers it: each test's output as given. */
/** @param {readonly string[]} outs */
const reply = outs => ({
  compiled: true,
  runs: outs.map(stdout => ({ stdout, stderr: '', exit: 0, signal: null, finished: true }))
})

const setUp = () =>
  after([
    { t: 'setup-stored', user: 'learner', series: 'abc', zone: 'Europe/Copenhagen', day: ago(3) }
  ])
const example = () => after([{ t: 'start-read', day: ago(2) }], setUp())
const trace = () => after([{ t: 'example-read', kind: 1, day: ago(2) }], example())
const traceItem = { n: 5, step: 'trace', id: 'T1', kind: 1 }
const parsonsItem = { n: 5, step: 'parsons', id: PARSONS.id, kind: 1 }
const aloneItem = { n: 5, step: 'alone', id: ALONE.id, kind: 1 }
const rows = KIND.trace.rows.map(r => [String(r.line), ...r.values])
const parsons = () =>
  after(
    [
      {
        t: 'trace-answered',
        item: traceItem,
        trace: KIND.trace,
        cells: rows,
        output: KIND.trace.output,
        day: today
      },
      { t: 'next' }
    ],
    trace()
  )
const all = (/** @type {typeof ALONE} */ p) => [...p.examples, ...p.tests]
const alone = () =>
  after(
    [
      { t: 'submit', item: parsonsItem, code: 'x', tests: all(PARSONS) },
      {
        t: 'submitted',
        item: parsonsItem,
        code: 'x',
        tests: all(PARSONS),
        reply: reply(all(PARSONS).map(t => t.output)),
        day: today
      },
      { t: 'next' }
    ],
    parsons()
  )

/** Whole programs: the course's first section, the twelve the start gate asks retired. */
const FIRST_KINDS = course.kinds.slice(0, course.sections[0]?.last ?? course.kinds.length)
/**
 * The kinds retired yesterday, each with its kind line and its own dated line (key K<n>), which
 * came back right since, so none is due today; the kind after the last opens at its worked
 * example, as gate 3 opens it.
 * @param {CppRecord} r
 * @param {readonly typeof course.kinds[number][]} [kinds]
 */
const retired = (r, kinds = FIRST_KINDS) => {
  const after = course.kinds[kinds.length]
  const x = kinds.reduce(
    (y, k) => ({
      ...withKind(y, kindId(k.id), { retired: ago(1), opened: ago(2) }),
      recall: { ...y.recall, [kindKey(k.id)]: [{ date: ago(1), right: true, next: addDays(today, 4) }] }
    }),
    r
  )
  return after ? withKind(x, kindId(after.id), { opened: ago(1), part: 'example' }) : x
}
const practiced = () => after([{ t: 'practice-accepted', day: ago(1) }], retired(setUp()))
/** @param {string} next */
const contestOn = next => after([{ t: 'next-typed', next }], practiced())
const WRONG = `#include <print>\n\nint main() {\n    std::println("0");\n}\n`
/**
 * The problem alone submitted on `day`, wrong: the Result screen.
 * @param {string} day
 */
const wrongOn = day =>
  after(
    [
      { t: 'submit', item: aloneItem, code: WRONG, tests: all(ALONE) },
      {
        t: 'submitted',
        item: aloneItem,
        code: WRONG,
        tests: all(ALONE),
        reply: reply(all(ALONE).map(() => '0\n')),
        day
      }
    ],
    alone()
  )

/** Each record by its name, built afresh at each call. */
export const RECORDS = {
  setUp,
  example,
  trace,
  parsons,
  alone,
  /** The problem alone run on its examples: what it printed beside what each expects. */
  ran: () =>
    after(
      [
        { t: 'run-examples', item: aloneItem, code: WRONG, tests: ALONE.examples },
        { t: 'examples-ran', item: aloneItem, reply: reply(ALONE.examples.map(() => '0\n')) }
      ],
      alone()
    ),
  /** The problem alone run on its examples, and the compiler refused it. */
  compileError: () =>
    after(
      [
        { t: 'run-examples', item: aloneItem, code: 'int main() {', tests: ALONE.examples },
        {
          t: 'examples-ran',
          item: aloneItem,
          reply: { compiled: false, error: "main.cpp:1:13: error: expected '}' at end of input" }
        }
      ],
      alone()
    ),
  /** The problem alone submitted, wrong: the Result screen. */
  wrong: () => wrongOn(today),
  /** The trace item answered, wrong in one cell. */
  traced: () =>
    after(
      [
        {
          t: 'trace-answered',
          item: traceItem,
          trace: KIND.trace,
          cells: rows.map((r, i) => (i === 0 ? [r[0] ?? '', '9'] : r)),
          output: '31',
          day: today
        }
      ],
      trace()
    ),
  /** The problem alone submitted wrong yesterday: its own line brings it back alone today. */
  due: () => after([{ t: 'next' }], wrongOn(ago(1))),
  practice: () => retired(setUp()),
  nextContest: practiced,
  upcoming: () => contestOn(`${addDays(today, 3)}T13:00`),
  contestDay: () => contestOn(`${today}T13:00`),
  paste: () => contestOn(`${ago(1)}T13:00`),
  reading: () =>
    after(
      [
        {
          t: 'record-pasted',
          rows: [{ contest: 'AtCoder Beginner Contest 430', date: ago(1), performance: 712 }],
          day: today
        }
      ],
      contestOn(`${ago(1)}T13:00`)
    ),
  /** The first kind at its Parsons problem with every problem of it tried: it waits for new ones. */
  waits: () => {
    const r = withKind(parsons(), kindId(1), { part: 'parsons' })
    const tries = (KINDS[0]?.problems ?? []).map(id => ({
      id,
      date: ago(1),
      right: false,
      mixed: false
    }))
    return { ...r, tries }
  },
  /** Every kind retired and every problem tried, the next contest typed, gate 2 held (so the language track takes no session): nothing left today. */
  nothing: () => {
    const r = retired(contestOn(`${addDays(today, 3)}T13:00`), course.kinds)
    const tries = course.kinds.flatMap(k =>
      k.problems.map(id => ({ id, date: ago(1), right: true, mixed: true }))
    )
    const readings = [{ date: ago(1), mean: null, sd: null, p: 0.5, n: 10, state: 'held' }]
    return {
      ...r,
      tries,
      readings,
      recall: { ...r.recall, T1: [{ date: ago(1), right: true, next: addDays(today, 4) }] }
    }
  }
}

if (import.meta.filename === process.argv[1]) {
  const out = process.argv[2] ?? 'records'
  mkdirSync(out, { recursive: true })
  for (const [name, make] of Object.entries(RECORDS))
    writeFileSync(`${out}/${name}.json`, JSON.stringify(make()))
  console.log(`cpp-records: ${Object.keys(RECORDS).length} records in ${out}`)
}
