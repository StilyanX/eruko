// Hides: how what comes from outside the C++ unit's code enters it, and
// the types it is held in once in: the C++ part of the record as stored, decoded once into its
// typed shape with what a hand edit or an older page left odd read as absent or empty, never as a
// crash; the course and a kind's content as the generator wrote them; the runner's replies; the
// pasted AtCoder contest record; the fields typed at Setup and after a contest; and the id types,
// each made by its one constructor here ("A Self-Study System", The build, Programming).
import { isRecord } from '../../../kernel/decode.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { nextDate, nextOf, studyDay } from '../../../kernel/days.logic.js'
import { datedOf, decodeTrack, unitsOf } from './track-decode.logic.js'

// The ids

/** @typedef {string & { readonly brand: 'ProblemId' }} ProblemId A problem's id: its kind's number, a dot, its place in the kind, "7.03". */
/** @typedef {string & { readonly brand: 'TraceId' }} TraceId A trace item's id: T and its kind's number, "T7". */
/** @typedef {ProblemId | TraceId} ItemId A problem's or a trace item's id, as an item is asked. */
/** @typedef {number & { readonly brand: 'KindId' }} KindId A kind's number. */

/** @param {string} text */
export const problemId = text => /** @type {ProblemId} */ (text)
/** @param {string} text */
const traceId = text => /** @type {TraceId} */ (text)
/**
 * A retired kind's key on the dated list: K and its number, "K7". The list holds kinds, traces
 * and problems answered wrong.
 * @param {KindId} kind
 */
export const kindKey = kind => `K${kind}`
/** @param {number} n */
export const kindId = n => /** @type {KindId} */ (n)
/**
 * @param {ItemId} id
 * @returns {id is TraceId}
 */
export const isTrace = id => id.startsWith('T')
/**
 * A trace item's id or a problem's, by its form: a trace item's starts with T.
 * @param {string} text
 * @returns {ItemId}
 */
export const itemId = text => (text.startsWith('T') ? traceId(text) : problemId(text))

// The course and a kind's content

/**
 * A kind as the course file holds it: its number and name, the kinds its plan uses, its plan
 * (its first-level labels in order), its problems in course order, and its trace item.
 * @typedef {Readonly<{ id: KindId, name: string, after: readonly KindId[], plan: readonly string[], problems: readonly ProblemId[], trace: TraceId }>} Kind
 */
/** @typedef {Readonly<{ sections: readonly import('../../../kernel/pages.logic.js').Section[], kinds: readonly Kind[], track: readonly import('./track-decode.logic.js').TrackKind[], stages: readonly import('./track-decode.logic.js').Stage[], reading: readonly import('./track-decode.logic.js').ReadingTask[], readingGaps: readonly Readonly<{ n: number, task: string, round?: number }>[] }>} Course The course: its sections and its kinds in course order, and the language track's kinds in track order with its stages and the tasks of its reading */
/** @typedef {Readonly<{ input: string, output: string }>} Test An input and the output it must give */
/** @typedef {Readonly<{ at: number, level: 0 | 1 | 2, text: string }>} Label A label, standing above line `at`: 0 for a label of the frame, shown in the first kind's worked example only */
/** @typedef {Readonly<{ line: number, from: number, to: number }>} Blank The part of a line a Parsons problem leaves blank, by its columns, `to` not included */
/**
 * A program as the material stores it: its lines as they run, the indices of the frame (the
 * includes, `int main() {` and its `}`), its labels and its blanks.
 * @typedef {Readonly<{ lines: readonly string[], frame: readonly number[], labels: readonly Label[], blanks: readonly Blank[] }>} Code
 */
/**
 * @typedef {Readonly<{ slug: string, commit: string, header: string, name: string, test: string, setup: readonly string[], calls: readonly Readonly<{ call: string, expected: string }>[] }>} Fn
 *   A function problem (Exercism's track): you write the header `header` that the test file
 *   `name` includes; each test is one of its cases, by name (`Test.input`), the first the example;
 *   the example shown as its lines before its first assertion and each assertion as a call with
 *   the value it must give
 */
/**
 * A problem: its statement's lines, the examples shown, the hidden tests and the reference
 * solution. A worked example is a problem with no tests.
 * @typedef {Readonly<{ id: ProblemId, kind: KindId, source: string, statement: readonly string[], examples: readonly Test[], tests: readonly Test[], solution: Code, fn?: Fn, found?: Readonly<{ contest: string, year: number, problem: string, licence: string }> }>} Problem
 */
/** @typedef {Readonly<{ line: number, values: readonly string[] }>} TraceRow One row of a recorded state table: the line run, then each column's value after it */
/**
 * A trace item: the program, its columns, its two inputs, the table recorded for the first and
 * what the program prints for the second.
 * @typedef {Readonly<{ id: TraceId, lines: readonly string[], columns: readonly string[], inputs: readonly string[], rows: readonly TraceRow[], output: string }>} Trace
 */
/**
 * The first kind's filled trace, read once on the Start screen: its program, its columns, its
 * one input, and the table recorded for it. It is never a trace item.
 * @typedef {Readonly<{ id: string, lines: readonly string[], columns: readonly string[], input: string, rows: readonly TraceRow[] }>} StartTrace
 */
/** @typedef {Readonly<{ id: KindId, example: Problem, trace: Trace, traces: readonly Trace[], start: StartTrace | null, problems: Readonly<Record<string, Problem>> }>} KindContent A kind's content file (content/k<NN>.gen.js); `traces` the kind's returning traces, made from its problems' reference solutions; `start` only in the first kind's */

/**
 * The course from the course file the generator wrote (course.gen.js), and the track from its
 * shape file (track.gen.js).
 * @param {readonly unknown[]} sections
 * @param {readonly unknown[]} kinds
 * @param {readonly unknown[]} [track]
 * @param {readonly unknown[]} [stages]
 * @param {readonly unknown[]} [reading]
 * @param {readonly unknown[]} [readingGaps] the reading's tasks nothing passed for, shown by name
 * @returns {Course}
 */
export const courseFrom = (
  sections,
  kinds,
  track = [],
  stages = [],
  reading = [],
  readingGaps = []
) =>
  /** @type {Course} */ (
    /** @type {unknown} */ ({ sections, kinds, track, stages, reading, readingGaps })
  )

/**
 * A kind's content from its module (content/k<NN>.gen.js), whose every field the generator checked.
 * @param {{ KIND: unknown }} module
 * @returns {KindContent}
 */
export const kindContentOf = module =>
  /** @type {KindContent} */ (
    /** @type {unknown} */ ({ start: null, traces: [], .../** @type {object} */ (module.KIND) })
  )

// The record

/**
 * The language and the local program that runs it, as it reports itself, and the problems whose
 * reference solution failed its tests under it, which are not used.
 * @typedef {Readonly<{ language: string, name: string, version: string, refused: readonly ProblemId[] }>} Runtime
 */
/** @typedef {Readonly<{ name: string, user: string, series: string, language: string, zone: string, next: string, from: string }>} Server The server as stored; `next` the next contest's start, "2026-11-07T13:00", in `zone` */
/** @typedef {'start' | 'example' | 'trace' | 'parsons' | 'alone'} Part The next part of a kind's first run */
/** @typedef {Readonly<{ kind: KindId, opened: string, retired: string, part: Part }>} KindLine A kind's state */
/** @typedef {Readonly<{ id: ProblemId, date: string, right: boolean, mixed: boolean }>} Try A problem's first try */
/** @typedef {Readonly<{ id: ProblemId, date: string, passed: number, total: number, code?: string }>} RunLine A submit: the tests passed of how many, and the program, dropped once a later dated line stands */
/** @typedef {Readonly<{ contest: string, date: string, performance: number }>} Contest A rated contest sat: its name, the day it ended, and the performance */
/** @typedef {Readonly<{ date: string, mean: number | null, sd: number | null, p: number, n: number, state: 'held' | 'open' }>} Reading One reading of gate 2 */
/** @typedef {Readonly<{ input: string, expected: string, given: string, error: string }>} Failed The first failed test: its input, the output expected and given, and what the program wrote to its error stream */
/** @typedef {Readonly<{ passed: number, total: number, failed: Failed | null, error: string }>} Verdict A submit judged: the tests passed of how many, the first failed, and the compiler's error text ('' when it compiled) */

/**
 * The items gate 1 judges, `n` the case's number in the paper's list.
 * @typedef {Readonly<{ n: 2, step: 'recall', id: ItemId, kind: KindId }>} Recall A trace item due, a problem of a kind in its first run due, or the problem a due kind gives
 * @typedef {Readonly<{ n: 4, step: 'mixed', id: ProblemId, kind: KindId }>} Mixed
 * @typedef {Readonly<{ n: 5, step: 'trace', id: TraceId, kind: KindId }>} TraceStep
 * @typedef {Readonly<{ n: 5, step: 'parsons', id: ProblemId, kind: KindId }>} ParsonsStep
 * @typedef {Readonly<{ n: 5, step: 'alone', id: ProblemId, kind: KindId }>} Alone
 * @typedef {Recall | Mixed | TraceStep | ParsonsStep | Alone} Asked
 */
/**
 * The item open, as stored: an item being worked, with the program typed so far, what runs now
 * and the last run on the examples; an item judged, until "Next"; or the reading screen.
 * @typedef {Asked & Readonly<{ code: string, running: 'examples' | 'submit' | null, ran: RunnerResult | null }>} Working
 * @typedef {Asked & Readonly<{ code: string, right: boolean, verdict: Verdict | null }>} Judged `verdict` is null after "No further step"
 * @typedef {Readonly<{ n: 1, step: 'reading' }>} ReadingStep
 * @typedef {import('./track-decode.logic.js').TrackAsked & Readonly<{ code: string, running: 'submit' | null }>} TrackWorking A track item being answered, with what is typed so far
 * @typedef {import('./track-decode.logic.js').TrackAsked & Readonly<{ code: string, right: boolean, verdict: Readonly<Record<string, unknown>> | null }>} TrackJudged A track item judged, until "Next": what the screen shows of the check
 * @typedef {Working | Judged | ReadingStep | TrackWorking | TrackJudged} Open
 */
/** @typedef {Readonly<{ open: Open | null, pasted: string, shown: number }>} Position The item open, the day the contest record was last pasted, and how many rows of the Start screen's filled trace show, so a reload keeps them */
/**
 * The C++ record, with the fields "A Self-Study System" sets (The build, Programming, The record).
 * @typedef {Readonly<{ runtime: Runtime | null, server: Server | null, course: readonly KindLine[], recall: Readonly<Record<string, readonly import('../../../kernel/days.logic.js').Line[]>>, tries: readonly Try[], runs: readonly RunLine[], contests: readonly Contest[], practice: string, readings: readonly Reading[], position: Position, sessions: readonly string[], turn: 4 | 5 | null } & import('./track-decode.logic.js').TrackRecord>} CppRecord
 */

/** @param {unknown} x */
const text = x => (typeof x === 'string' ? x : '')
/** @param {unknown} x */
const list = x => (Array.isArray(x) ? x : [])
/** @param {unknown} x */
const isNumber = x => typeof x === 'number' && Number.isFinite(x)

/** @type {readonly Part[]} */
const PARTS = ['start', 'example', 'trace', 'parsons', 'alone']
const ASKED = new Set(['recall', 'mixed', 'trace', 'parsons', 'alone', 'track'])

/**
 * The course's state, in step with the course: one line per kind in course order, each as stored
 * or begun afresh, the first kind's first run at the filled trace of the Start screen.
 * @param {unknown} raw
 * @param {Course} course
 * @returns {KindLine[]}
 */
function courseLines(raw, course) {
  const had = new Map(list(raw).flatMap(c => (isRecord(c) ? [[c.kind, c]] : [])))
  return course.kinds.map((k, i) => {
    const was = had.get(k.id)
    const part = PARTS.find(p => p === was?.part) ?? (i === 0 ? 'start' : 'example')
    return { kind: k.id, opened: text(was?.opened), retired: text(was?.retired), part }
  })
}

/**
 * What runs of the item open, as stored: a run the page that started it may no longer wait on,
 * which the screen then lets go (session.logic.js `run-lost`).
 * @param {unknown} raw
 * @returns {'examples' | 'submit' | null}
 */
const runningOf = raw => (raw === 'examples' || raw === 'submit' ? raw : null)

/**
 * The last run on the examples of the item open, as stored, or null.
 * @param {unknown} raw
 * @returns {RunnerResult | null}
 */
function ranOf(raw) {
  const r = runnerResult(raw)
  return r.ok ? r.value : null
}

/**
 * The item left open, or null when it is not one or names an item the course no longer holds.
 * @param {unknown} raw
 * @param {ReadonlySet<string>} held
 * @returns {Open | null}
 */
function openOf(raw, held) {
  if (!isRecord(raw)) return null
  if (raw.step === 'reading') return { n: 1, step: 'reading' }
  if (!ASKED.has(text(raw.step)) || !held.has(text(raw.id)) || typeof raw.code !== 'string')
    return null
  if (raw.step === 'track')
    return 'right' in raw
      ? /** @type {TrackJudged} */ (/** @type {unknown} */ ({ verdict: null, ...raw }))
      : /** @type {TrackWorking} */ (
          /** @type {unknown} */ ({ ...raw, running: raw.running === 'submit' ? 'submit' : null })
        )
  return 'right' in raw
    ? /** @type {Judged} */ (/** @type {unknown} */ ({ verdict: null, ...raw }))
    : /** @type {Working} */ (
        /** @type {unknown} */ ({ ...raw, running: runningOf(raw.running), ran: ranOf(raw.ran) })
      )
}

/**
 * @param {unknown} raw
 * @returns {Server | null}
 */
const serverOf = raw =>
  isRecord(raw) && typeof raw.user === 'string' && typeof raw.series === 'string'
    ? {
        name: text(raw.name),
        user: raw.user,
        series: raw.series,
        language: text(raw.language),
        zone: text(raw.zone),
        next: text(raw.next),
        from: text(raw.from)
      }
    : null

/**
 * @param {unknown} raw
 * @returns {Runtime | null}
 */
const runtimeOf = raw =>
  isRecord(raw) && typeof raw.name === 'string' && typeof raw.version === 'string'
    ? {
        language: text(raw.language),
        name: raw.name,
        version: raw.version,
        refused: list(raw.refused).flatMap(id => (typeof id === 'string' ? [problemId(id)] : []))
      }
    : null

/**
 * The rows of a list of the record that name an item the course holds.
 * @template T
 * @param {unknown} raw
 * @param {ReadonlySet<string>} held
 * @returns {T[]}
 */
const heldRows = (raw, held) =>
  /** @type {T[]} */ (list(raw).filter(t => isRecord(t) && held.has(text(t.id))))

/**
 * The C++ part of the record as stored, as every function of the unit reads it: each field in
 * place, and the course's state in step with the course. A line that names a problem or a trace
 * item the course no longer holds is left out.
 * @param {unknown} raw
 * @param {Course} course
 * @returns {CppRecord}
 */
export function decodeRecord(raw, course) {
  const r = isRecord(raw) ? raw : {}
  /** @type {ReadonlySet<string>} */
  const held = new Set([
    ...course.kinds.flatMap(k => [...k.problems, k.trace, kindKey(k.id)]),
    ...course.track.flatMap(datedOf),
    ...course.reading.flatMap(unitsOf)
  ])
  const raws = isRecord(r.recall) ? r.recall : {}
  const position = isRecord(r.position) ? r.position : {}
  const lines = courseLines(r.course, course)
  /** @type {Record<string, import('../../../kernel/days.logic.js').Line[]>} */
  const recall = Object.fromEntries(
    Object.entries(raws).flatMap(([id, l]) =>
      held.has(id) && Array.isArray(l) ? [[id, heldLines(l)]] : []
    )
  )
  return {
    runtime: runtimeOf(r.runtime),
    server: serverOf(r.server),
    course: lines,
    recall: { ...kindsBefore(course, lines, recall), ...recall },
    tries: heldRows(r.tries, held),
    runs: heldRows(r.runs, held),
    contests: /** @type {Contest[]} */ (
      list(r.contests).filter(c => isRecord(c) && isNumber(c.performance))
    ),
    practice: text(r.practice),
    readings: /** @type {Reading[]} */ (list(r.readings).filter(isRecord)),
    position: {
      open: openOf(position.open, held),
      pasted: text(position.pasted),
      shown:
        typeof position.shown === 'number' && position.shown >= 1 ? Math.floor(position.shown) : 1
    },
    sessions: list(r.sessions).filter(d => typeof d === 'string'),
    turn: r.turn === 4 || r.turn === 5 ? r.turn : null,
    ...decodeTrack(r, course.track)
  }
}

/**
 * The lines of retired kinds a record from before kinds were dated lacks: one line, right, the day
 * the kind retired, coming back when the first of its problems dated right then would have, or
 * the next day. The record's own lines of its problems stay; a wrong one is a wrong problem's line.
 * @param {Course} course
 * @param {readonly KindLine[]} kinds
 * @param {Readonly<Record<string, readonly import('../../../kernel/days.logic.js').Line[]>>} recall
 */
function kindsBefore(course, kinds, recall) {
  return Object.fromEntries(
    course.kinds.flatMap(k => {
      const retired = kinds.find(c => c.kind === k.id)?.retired ?? ''
      if (!retired || recall[kindKey(k.id)]) return []
      const [first] = k.problems
        .flatMap(id => (recall[id]?.at(-1)?.right ? (nextOf(recall[id]) ?? []) : []))
        .sort()
      const next = first ?? nextDate(undefined, true, retired)
      return [[kindKey(k.id), [{ date: retired, right: true, next }]]]
    })
  )
}

/**
 * @param {unknown[]} lines
 * @returns {import('../../../kernel/days.logic.js').Line[]}
 */
const heldLines = lines =>
  /** @type {import('../../../kernel/days.logic.js').Line[]} */ (lines.filter(isRecord))

// What is typed on an item, kept in the item open's `code` until it is answered

/** @typedef {Readonly<{ cells: readonly (readonly string[])[], output: string }>} TraceForm A trace item as typed: each row's cells, its line's number first, then the second input's output */
/** @typedef {Readonly<{ order: readonly number[], fills: readonly string[] }>} ParsonsForm A Parsons problem as typed: the lines placed, by their index in the solution, and each blank's text */

/**
 * A form as the item open keeps it.
 * @param {TraceForm | ParsonsForm} form
 */
export const formText = form => JSON.stringify(form)

/**
 * The value a form's text holds, or null when it holds none.
 * @param {string} code
 * @returns {unknown}
 */
function parsed(code) {
  try {
    return JSON.parse(code)
  } catch {
    return null
  }
}

/** @param {unknown} x */
const texts = x => list(x).map(text)

/**
 * A trace item as typed, from its kept text; nothing typed when the text holds none.
 * @param {string} code
 * @returns {TraceForm}
 */
export function traceForm(code) {
  const raw = parsed(code)
  if (!isRecord(raw)) return { cells: [], output: '' }
  return { cells: list(raw.cells).map(texts), output: text(raw.output) }
}

/**
 * A Parsons problem as typed, from its kept text; nothing placed when the text holds none.
 * @param {string} code
 * @returns {ParsonsForm}
 */
export function parsonsForm(code) {
  const raw = parsed(code)
  if (!isRecord(raw)) return { order: [], fills: [] }
  const order = list(raw.order).filter(n => Number.isInteger(n))
  return { order: /** @type {number[]} */ (order), fills: texts(raw.fills) }
}

// The runner's replies

/** @typedef {Readonly<{ stdout: string, stderr: string, exit: number | null, signal: string | null, finished: boolean }>} Output What one run printed, its exit, and whether it ended by itself */
/** @typedef {Readonly<{ compiled: true, runs: readonly Output[], reports?: Readonly<Record<string, string>>, catch2?: true }> | Readonly<{ compiled: false, error: string }>} RunnerResult The runner's reply to a program: one output per test and the reports asked, or the compiler's error text; `catch2` for a function problem's build, whose one run printed Catch2's XML report */
/** @typedef {Readonly<{ compiler: string, version: string, standard: string, cuda?: string, gdb?: string, device?: string }>} About What the runner says of itself: its compiler, and nvcc, gdb and nvcc's highest level where it has them */

/**
 * The runner's word of itself (GET /).
 * @param {unknown} reply
 * @returns {import('../../../kernel/result.logic.js').Result<About, 'unanswered'>}
 */
export function runnerAbout(reply) {
  if (!isRecord(reply) || reply.ok !== true || typeof reply.version !== 'string')
    return fail('unanswered')
  return ok({
    compiler: text(reply.compiler),
    version: reply.version,
    standard: text(reply.standard),
    cuda: text(reply.cuda),
    gdb: text(reply.gdb),
    device: text(reply.device)
  })
}

/**
 * @param {unknown} run
 * @returns {Output | null}
 */
const outputOf = run =>
  isRecord(run) && typeof run.stdout === 'string'
    ? {
        stdout: run.stdout,
        stderr: text(run.stderr),
        exit: isNumber(run.exit) ? Number(run.exit) : null,
        signal: typeof run.signal === 'string' ? run.signal : null,
        finished: run.finished === true
      }
    : null

/**
 * The runner's reply to a program (POST /run).
 * @param {unknown} reply
 * @returns {import('../../../kernel/result.logic.js').Result<RunnerResult, 'unanswered'>}
 */
export function runnerResult(reply) {
  if (!isRecord(reply)) return fail('unanswered')
  if (reply.compiled === false) return ok({ compiled: false, error: text(reply.error) })
  if (reply.compiled !== true || !Array.isArray(reply.runs)) return fail('unanswered')
  const runs = reply.runs.map(outputOf)
  const read = runs.flatMap(r => (r ? [r] : []))
  /** @type {Record<string, string>} */
  const reports = {}
  if (isRecord(reply.reports))
    for (const [k, v] of Object.entries(reply.reports)) if (typeof v === 'string') reports[k] = v
  if (read.length !== runs.length) return fail('unanswered')
  return ok(
    isRecord(reply.reports)
      ? { compiled: true, runs: read, reports }
      : { compiled: true, runs: read }
  )
}

// The contest record

/** The one answer to a paste that is not the server's record of a user's contests. */
export const NOT_RECORD = 'That is not an AtCoder contest record.'

/**
 * One row of the pasted record as the unit reads it, or null when it is not one.
 * @param {unknown} row
 */
function rowOf(row) {
  if (!isRecord(row) || typeof row.IsRated !== 'boolean') return null
  const { ContestScreenName: screen, ContestName: name, EndTime: end } = row
  if (typeof screen !== 'string' || typeof name !== 'string' || typeof end !== 'string') return null
  const ms = Date.parse(end)
  if (Number.isNaN(ms) || (row.IsRated && !isNumber(row.InnerPerformance))) return null
  return { rated: row.IsRated, screen, name, ms, performance: Number(row.InnerPerformance) }
}

/**
 * The rated contests of the stored series in the pasted record (atcoder.jp/users/<name>/history/json):
 * each row whose `IsRated` is true and whose `ContestScreenName` begins with the series prefix,
 * as its name, the day it ended and its `InnerPerformance`. Anything else is refused.
 * @param {string} pasted
 * @param {string} series
 * @param {string} zone the stored time zone, in which each contest's day is read
 * @returns {import('../../../kernel/result.logic.js').Result<Contest[], typeof NOT_RECORD>}
 */
export function contestRows(pasted, series, zone) {
  /** @type {unknown} */
  let raw
  try {
    raw = JSON.parse(pasted)
  } catch {
    return fail(NOT_RECORD)
  }
  if (!Array.isArray(raw)) return fail(NOT_RECORD)
  const rows = raw.map(rowOf)
  const read = rows.flatMap(r => (r ? [r] : []))
  if (read.length !== rows.length) return fail(NOT_RECORD)
  return ok(
    read
      .filter(r => r.rated && r.screen.startsWith(series))
      .map(r => ({ contest: r.name, date: zoneDay(r.ms, zone), performance: r.performance }))
  )
}

// The fields typed

/**
 * The AtCoder user name typed at Setup: 3 to 16 letters, digits or the sign _.
 * @param {string} typed
 * @returns {import('../../../kernel/result.logic.js').Result<string, 'Type the user name of your AtCoder account.'>}
 */
export function readAccountName(typed) {
  const t = typed.trim()
  return /^\w{3,16}$/.test(t) ? ok(t) : fail('Type the user name of your AtCoder account.')
}

/**
 * The series prefix typed: the letters that begin the series' contest addresses, "abc".
 * @param {string} typed
 * @returns {import('../../../kernel/result.logic.js').Result<string, 'Type the letters that begin the contest addresses, such as abc.'>}
 */
export function readSeries(typed) {
  const t = typed.trim().toLowerCase()
  return /^[a-z]+$/.test(t)
    ? ok(t)
    : fail('Type the letters that begin the contest addresses, such as abc.')
}

/**
 * The time zone typed: a name the calendar knows, "Europe/Copenhagen".
 * @param {string} typed
 * @returns {import('../../../kernel/result.logic.js').Result<string, 'Type a time zone such as Europe/Copenhagen.'>}
 */
export function readZone(typed) {
  const t = typed.trim()
  /** @type {string} */
  let zone
  try {
    // The calendar refuses a name it does not know; an empty one would name the device's own zone.
    zone = new Intl.DateTimeFormat('en', { timeZone: t || 'none' }).resolvedOptions().timeZone
  } catch {
    return fail('Type a time zone such as Europe/Copenhagen.')
  }
  return ok(zone)
}

/** A study day starts at 04:00, in whichever zone it is read. */
const DAY_STARTS_MS = 4 * 3600000

/**
 * The study day of a time in a time zone: the stored one, in which the learner typed the next
 * contest's start. A zone the calendar does not know reads as the device's own.
 * @param {number} ms
 * @param {string} zone
 */
export function zoneDay(ms, zone) {
  const known = readZone(zone)
  if (!known.ok) return studyDay(ms)
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: known.value,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(ms - DAY_STARTS_MS)
}

/**
 * The UTC day of a time, or '' for no time.
 * @param {number} ms
 */
const isoOf = ms => (Number.isNaN(ms) ? '' : new Date(ms).toISOString().slice(0, 10))

/**
 * The next contest's date and start time, as the date and time fields give them, in the stored zone.
 * @param {string} date "2026-11-07"
 * @param {string} time "13:00"
 * @returns {import('../../../kernel/result.logic.js').Result<string, 'Type the date of the contest.' | 'Type the start time of the contest.'>}
 */
export function readNext(date, time) {
  const d = date.trim()
  const t = time.trim()
  // a day the calendar holds: "2026-02-30" reads back as another day
  const held = /^\d{4}-\d{2}-\d{2}$/.test(d) && isoOf(Date.parse(`${d}T12:00:00Z`)) === d
  if (!held) return fail('Type the date of the contest.')
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(t)) return fail('Type the start time of the contest.')
  return ok(`${d}T${t}`)
}
