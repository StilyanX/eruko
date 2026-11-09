// Hides: what each move of the learner, and each reply the unit waits on, does to the C++ record: one pure step from the record and an event to the next
// record and the effects to run, which the unit's one interpreter runs: a program run on the
// runner, every run stopped, a line said to a screen reader. The study day, the content an
// answer is judged against, and every reply come in with the event. A reply that comes after
// its item was stopped or left changes nothing.
import { assert, unreachable } from '../../../kernel/invariant.logic.js'
import { allPassed, traceRight, verdictOf } from './judge.logic.js'
import { answered, contestToday, exampleRead, firstKindsRetired, startRead } from './next.logic.js'
import { withReading } from './readings.logic.js'
import { readingAnswered } from './reading.logic.js'
import { formText } from './decode.logic.js'
import {
  aloneJudged,
  countRight,
  trackAnswered,
  trackExampleRead,
  verdictRight,
  witnessJudged,
  scansOver,
  scanned,
  withScans
} from './track.logic.js'
import {
  nextTyped,
  practiceAccepted,
  runtimeChecked,
  seriesTyped,
  setupChanged,
  setupStored
} from './record.logic.js'

/**
 * A move of the learner, or a reply the unit waited on: what the step is given.
 * @typedef {readonly import('./decode.logic.js').Test[]} Tests The examples, then the hidden tests, of the problem answered
 * @typedef {Readonly<{ t: 'setup-stored', user: string, series: string, zone: string, day: string }>} SetupStored Setup: the fields typed, once the runner's check passed
 * @typedef {Readonly<{ t: 'start-read', day: string }>} StartRead The first kind's filled trace read
 * @typedef {Readonly<{ t: 'start-row' }>} StartRow "Next" on the filled trace before its last row: one more row shows
 * @typedef {Readonly<{ t: 'example-read', kind: import('./decode.logic.js').KindId, day: string }>} ExampleRead
 * @typedef {Readonly<{ t: 'trace-answered', item: import('./decode.logic.js').Asked, trace: import('./decode.logic.js').Trace, cells: readonly (readonly string[])[], output: string, day: string }>} TraceAnswered "Answer" on a trace item: each row typed, its line's number first, and the second input's output
 * @typedef {Readonly<{ t: 'code-kept', item: import('./decode.logic.js').Asked, code: string }>} CodeKept The screen left with a program typed
 * @typedef {Readonly<{ t: 'run-examples', item: import('./decode.logic.js').Asked, code: string, tests: Tests }>} RunExamples "Run on the examples"
 * @typedef {Readonly<{ t: 'examples-ran', item: import('./decode.logic.js').Asked, reply: import('./decode.logic.js').RunnerResult }>} ExamplesRan The runner's reply to a run on the examples
 * @typedef {Readonly<{ t: 'submit', item: import('./decode.logic.js').Asked, code: string, tests: Tests }>} Submit "Submit", on a problem or a Parsons problem (its program from judge.logic.js `parsonsProgram`)
 * @typedef {Readonly<{ t: 'submitted', item: import('./decode.logic.js').Asked, code: string, tests: Tests, reply: import('./decode.logic.js').RunnerResult, day: string }>} Submitted The runner's reply to a submit
 * @typedef {Readonly<{ t: 'stop', item: import('./decode.logic.js').Asked, total: number, day: string }>} Stop "Stop", which counts a submit running as wrong; `total` its tests
 * @typedef {Readonly<{ t: 'runner-down', item: import('./decode.logic.js').Asked }>} RunnerDown The runner did not answer
 * @typedef {Readonly<{ t: 'run-lost', item: import('./decode.logic.js').Asked }>} RunLost A run the record holds that no page waits on any more, as after a reload: let go, its program kept
 * @typedef {Readonly<{ t: 'no-further-step', item: import('./decode.logic.js').Asked, code: string, day: string }>} NoFurtherStep "No further step", which counts as wrong
 * @typedef {Readonly<{ t: 'next' }>} Next "Next" after a verdict or a reading
 * @typedef {Readonly<{ t: 'practice-accepted', day: string }>} PracticeAccepted "Accepted"
 * @typedef {Readonly<{ t: 'record-pasted', rows: readonly import('./decode.logic.js').Contest[], day: string }>} RecordPasted The contest record pasted, as decode.logic.js `contestRows` read it
 * @typedef {Readonly<{ t: 'next-typed', next: string }>} NextTyped The next contest's start typed (decode.logic.js `readNext`)
 * @typedef {Readonly<{ t: 'series-typed', series: string, day: string }>} SeriesTyped The series prefix typed after a change of series or method
 * @typedef {Readonly<{ t: 'track-example-read', kind: string, day: string }>} TrackExampleRead The open track kind's worked example studied
 * @typedef {Readonly<{ t: 'track-verdict', item: import('./track-decode.logic.js').TrackAsked, content: import('./track-decode.logic.js').VerdictItem, typed: Readonly<Record<string, import('./track.logic.js').LevelAnswer>>, day: string }>} TrackVerdict A verdict for each level, typed before any run
 * @typedef {Readonly<{ t: 'track-count', item: import('./track-decode.logic.js').TrackAsked, content: import('./track-decode.logic.js').CountItem, typed: readonly (readonly string[])[], day: string }>} TrackCount The count item's table, filled before the run
 * @typedef {Readonly<{ t: 'track-submit', item: import('./track-decode.logic.js').TrackAsked, code: string, lines?: readonly number[], content: import('./track-decode.logic.js').AloneItem, asks: readonly import('./track.logic.js').RunAsk[] }>} TrackSubmit An item alone or a witness submitted: the runs it asks, the scans' warnings added here
 * @typedef {Readonly<{ t: 'track-ran', item: import('./track-decode.logic.js').TrackAsked, code: string, lines?: readonly number[], content: import('./track-decode.logic.js').AloneItem, replies: readonly import('./track.logic.js').Reply[], day: string }>} TrackRan The runner's replies to a track submit
 * @typedef {Readonly<{ t: 'track-kept', item: import('./track-decode.logic.js').TrackAsked, code: string }>} TrackKept The screen left with an answer typed
 * @typedef {Readonly<{ t: 'track-stop', item: import('./track-decode.logic.js').TrackAsked, day: string }>} TrackStop "Stop" on a track submit: wrong
 * @typedef {Readonly<{ t: 'track-down' | 'track-lost', item: import('./track-decode.logic.js').TrackAsked }>} TrackDown The runner did not answer a track submit, or no page waits on it any more
 * @typedef {Readonly<{ t: 'track-bound', item: import('./track-decode.logic.js').TrackAsked, typed: string, day: string }>} TrackBound A reading task's bound, typed before any run
 * @typedef {TrackExampleRead | TrackVerdict | TrackCount | TrackSubmit | TrackRan | TrackKept | TrackStop | TrackDown | TrackBound} TrackEvent
 * @typedef {StartRead | StartRow | ExampleRead | TraceAnswered | CodeKept | RunExamples | ExamplesRan | Submit | Submitted | Stop | RunnerDown | RunLost | NoFurtherStep | Next | TrackEvent} StudyEvent
 * @typedef {Readonly<{ t: 'runtime-checked', about: import('./decode.logic.js').About, refused: readonly import('./decode.logic.js').ProblemId[] }>} RuntimeChecked The runner reported another compiler or version, and every reference solution ran against its tests under it; `refused` those that failed
 * @typedef {Readonly<{ t: 'setup-changed', user: string, zone: string }>} SetupChanged "Change set-up": the user name and the time zone typed again
 * @typedef {Readonly<{ t: 'track-setup-stored', pin: import('./track-decode.logic.js').Pin }>} TrackSetupStored The track's Setup passed every form: its pin
 * @typedef {SetupStored | SetupChanged | PracticeAccepted | RecordPasted | NextTyped | SeriesTyped | RuntimeChecked | TrackSetupStored} OtherEvent
 * @typedef {StudyEvent | OtherEvent} Event
 */
/**
 * What the interpreter runs after the record is set.
 * @typedef {Readonly<{ t: 'run', item: import('./decode.logic.js').Asked, code: string, tests: Tests, why: 'examples' | 'submit' }>} RunEffect Run the program as main.cpp on each test's input, and send its reply back as `examples-ran` or `submitted`, or `runner-down`
 * @typedef {Readonly<{ t: 'stop' }>} StopEffect Stop every run on the runner
 * @typedef {Readonly<{ t: 'say', text: string }>} SayEffect A line said to a screen reader
 * @typedef {Readonly<{ t: 'track-run', item: import('./track-decode.logic.js').TrackAsked, code: string, lines?: readonly number[], asks: readonly import('./track.logic.js').RunAsk[] }>} TrackRunEffect Run each ask on the runner, and send the replies back as `track-ran`, or `track-down`
 * @typedef {RunEffect | StopEffect | SayEffect | TrackRunEffect} Effect
 */
/** @typedef {Readonly<{ state: import('./decode.logic.js').CppRecord, effects: readonly Effect[] }>} Stepped */

/** What a screen reader says when the runner does not answer. */
export const RUNNER_DOWN =
  'The runner does not answer. Start it with npm run cpp-runner, then run the program again.'

/**
 * The item open as it is being worked, when it is this item and, where given, runs this run.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').Asked} item
 * @param {'examples' | 'submit'} [running]
 */
function workingOn(record, item, running) {
  const open = record.position.open
  if (!open || !('running' in open) || open.step !== item.step || open.id !== item.id) return null
  return running === undefined || open.running === running ? open : null
}

/**
 * The record with the item open as it is being worked.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').Asked} item
 * @param {Partial<Readonly<{ code: string, running: 'examples' | 'submit' | null, ran: import('./decode.logic.js').RunnerResult | null }>>} change
 * @returns {import('./decode.logic.js').CppRecord}
 */
function working(record, item, change) {
  const was = workingOn(record, item)
  const open = {
    ...item,
    code: was?.code ?? '',
    running: was?.running ?? null,
    ran: was?.ran ?? null,
    ...change
  }
  return { ...record, position: { ...record.position, open } }
}

/**
 * An item answered, and its verdict said.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Parameters<typeof answered>[2]} answer
 * @param {readonly Effect[]} [before]
 * @returns {Stepped}
 */
const judged = (course, record, answer, before = []) => ({
  state: onCourse(course, answered(course, record, answer), answer.day),
  effects: [...before, { t: 'say', text: answer.right ? 'Right.' : 'Wrong.' }]
})

/**
 * The day's session kept as the course's, for the turn of sessions between the course and the
 * track (track.logic.js `sideToday`); a contest day takes no turn, so it keeps the side before it.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
const onCourse = (course, record, day) =>
  contestToday(course, record, day) ? record : { ...record, side: { day, side: 'course' } }

/**
 * The track item open as it is being answered, when it is this item.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./track-decode.logic.js').TrackAsked} item
 */
function trackWorking(record, item) {
  const open = record.position.open
  return open && open.step === 'track' && 'running' in open && open.id === item.id ? open : null
}

/**
 * The record with a track item open as it is being answered.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./track-decode.logic.js').TrackAsked} item
 * @param {Partial<Readonly<{ code: string, running: 'submit' | null }>>} change
 * @returns {import('./decode.logic.js').CppRecord}
 */
function trackOpenWith(record, item, change) {
  const was = trackWorking(record, item)
  const open = { ...item, code: was?.code ?? '', running: was?.running ?? null, ...change }
  return { ...record, position: { ...record.position, open } }
}

/**
 * A track item answered: gate A dates it, step C moves on and gate C asks after the witness; the
 * item stays open with what the check gave until "Next".
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./track-decode.logic.js').TrackAsked} item
 * @param {Readonly<{ right: boolean, code: string, verdict: Readonly<Record<string, unknown>> | null, day: string }>} answer
 * @param {readonly Effect[]} [before]
 * @returns {Stepped}
 */
function trackJudged(course, record, item, { right, code, verdict, day }, before = []) {
  // a unit of the reading (a task "0.NN") is dated by no gate: the reading moves on
  const next = item.kind.startsWith('0.')
    ? readingAnswered(course.reading, course.track, record, {
        id: item.id,
        kind: item.kind,
        right,
        day
      })
    : trackAnswered(course.track, record, { item, right, day })
  return {
    state: { ...next, position: { ...next.position, open: { ...item, code, right, verdict } } },
    effects: [...before, { t: 'say', text: right ? 'Right.' : 'Wrong.' }]
  }
}

/**
 * The runner's replies to a track submit judged, or "Stop" on it, which counts as wrong.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {TrackRan | TrackStop} event
 * @returns {Stepped}
 */
function trackRun(course, record, event) {
  if (event.t === 'track-ran') {
    if (trackWorking(record, event.item)?.running !== 'submit')
      return { state: record, effects: [] }
    const { item, code, content, replies, day, lines = [] } = event
    const scans = scansOver(course.track, record, item, content)
    if (item.unit === 'witness') {
      const w = scanned(witnessJudged(content, replies), scans, code, replies, content.device)
      return trackJudged(course, record, item, { right: w.right, code, verdict: w, day })
    }
    const a = scanned(
      aloneJudged(content, code, replies, lines),
      scans,
      code,
      replies,
      content.device
    )
    return trackJudged(course, record, item, { right: a.right, code, verdict: a, day })
  }
  {
    const open = trackWorking(record, event.item)
    if (open?.running !== 'submit') return { state: record, effects: [{ t: 'stop' }] }
    const verdict = { stopped: true }
    return trackJudged(
      course,
      record,
      event.item,
      { right: false, code: open.code, verdict, day: event.day },
      [{ t: 'stop' }]
    )
  }
}

/**
 * The step for a track move.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {TrackEvent} event
 * @returns {Stepped}
 */
function tracked(course, record, event) {
  const same = { state: record, effects: [] }
  switch (event.t) {
    case 'track-example-read':
      return { state: trackExampleRead(course.track, record, event.kind, event.day), effects: [] }
    case 'track-verdict': {
      const v = verdictRight(event.content, event.typed)
      const code = JSON.stringify(event.typed)
      return trackJudged(course, record, event.item, {
        right: v.right,
        code,
        verdict: v,
        day: event.day
      })
    }
    case 'track-count': {
      const v = countRight(event.content, event.typed)
      const code = JSON.stringify(event.typed)
      return trackJudged(course, record, event.item, {
        right: v.right,
        code,
        verdict: v,
        day: event.day
      })
    }
    case 'track-bound': {
      const answer = course.reading.find(t => t.id === event.item.kind)?.bound.answer
      const typed = event.typed.trim()
      const right = typed !== '' && Number(typed) === answer
      return trackJudged(course, record, event.item, {
        right,
        code: typed,
        verdict: { stored: String(answer) },
        day: event.day
      })
    }
    case 'track-kept':
      return { state: trackOpenWith(record, event.item, { code: event.code }), effects: [] }
    case 'track-submit':
      return trackSubmitted(course, record, event)
    case 'track-ran':
    case 'track-stop':
      return trackRun(course, record, event)
    case 'track-down':
      return {
        state: trackOpenWith(record, event.item, { running: null }),
        effects: [{ t: 'say', text: RUNNER_DOWN }]
      }
    case 'track-lost':
      return trackWorking(record, event.item)
        ? { state: trackOpenWith(record, event.item, { running: null }), effects: [] }
        : same
    default:
      return unreachable(event)
  }
}

/**
 * A track item alone or witness submitted: it runs, with the scans' warnings asked, and the lines
 * typed with it go along to its judging.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {TrackSubmit} event
 * @returns {Stepped}
 */
const trackSubmitted = (course, record, event) => ({
  state: trackOpenWith(record, event.item, { code: event.code, running: 'submit' }),
  effects: [
    {
      t: 'track-run',
      item: event.item,
      code: event.code,
      ...(event.lines ? { lines: event.lines } : {}),
      asks: withScans(
        event.asks,
        scansOver(course.track, record, event.item, event.content),
        event.content.device
      )
    }
  ]
})

/**
 * The step for a run of a program: begun, answered by the runner, stopped, or not answered.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {RunExamples | ExamplesRan | Submit | Submitted | Stop | RunnerDown | RunLost} event
 * @returns {Stepped}
 */
function ran(course, record, event) {
  const { item } = event
  const same = { state: record, effects: [] }
  switch (event.t) {
    case 'run-examples':
    case 'submit': {
      const why = event.t === 'submit' ? 'submit' : 'examples'
      const state = working(record, item, { code: event.code, running: why })
      return { state, effects: [{ t: 'run', item, code: event.code, tests: event.tests, why }] }
    }
    case 'examples-ran':
      if (!workingOn(record, item, 'examples')) return same
      return { state: working(record, item, { running: null, ran: event.reply }), effects: [] }
    case 'submitted': {
      if (!workingOn(record, item, 'submit')) return same
      const verdict = verdictOf(event.reply, event.tests)
      const right = allPassed(verdict)
      return judged(course, record, { item, right, code: event.code, verdict, day: event.day })
    }
    case 'stop': {
      const open = workingOn(record, item)
      if (open?.running !== 'submit')
        return {
          state: open ? working(record, item, { running: null }) : record,
          effects: [{ t: 'stop' }]
        }
      const verdict = { passed: 0, total: event.total, failed: null, error: '' }
      const answer = { item, right: false, code: open.code, verdict, day: event.day }
      return judged(course, record, answer, [{ t: 'stop' }])
    }
    case 'runner-down':
      return {
        state: working(record, item, { running: null }),
        effects: [{ t: 'say', text: RUNNER_DOWN }]
      }
    case 'run-lost':
      return workingOn(record, item)
        ? { state: working(record, item, { running: null }), effects: [] }
        : same
    default:
      return unreachable(event)
  }
}

/**
 * The step for a learner's study move.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {StudyEvent} event
 * @returns {Stepped}
 */
function studied(course, record, event) {
  switch (event.t) {
    case 'start-read':
      return {
        state: onCourse(course, startRead(course, record, event.day), event.day),
        effects: []
      }
    case 'start-row': {
      const position = { ...record.position, shown: record.position.shown + 1 }
      return { state: { ...record, position }, effects: [] }
    }
    case 'example-read':
      return {
        state: onCourse(course, exampleRead(course, record, event.kind, event.day), event.day),
        effects: []
      }
    case 'track-example-read':
    case 'track-verdict':
    case 'track-count':
    case 'track-bound':
    case 'track-kept':
    case 'track-submit':
    case 'track-ran':
    case 'track-stop':
    case 'track-down':
    case 'track-lost':
      return tracked(course, record, event)
    case 'trace-answered': {
      const { item, trace, cells, output, day } = event
      const right = traceRight(trace, cells, output)
      // what was typed stays with the verdict, so the screen shows it beside the run's own table
      const code = formText({ cells, output })
      return judged(course, record, { item, right, code, verdict: null, day })
    }
    case 'code-kept':
      return { state: working(record, event.item, { code: event.code }), effects: [] }
    case 'no-further-step': {
      const { item, code, day } = event
      return judged(course, record, { item, right: false, code, verdict: null, day }, [])
    }
    case 'next':
      return { state: { ...record, position: { ...record.position, open: null } }, effects: [] }
    case 'run-examples':
    case 'examples-ran':
    case 'submit':
    case 'submitted':
    case 'stop':
    case 'runner-down':
    case 'run-lost':
      return ran(course, record, event)
    default:
      return unreachable(event)
  }
}

/**
 * The contest record pasted: each rated contest of the series ending on or after the day the
 * practice submission was accepted, kept once; then gate 2's reading where one is due. The
 * reading screen opens on a new reading, and after each paste before the first reading, which
 * shows each performance as read.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {readonly import('./decode.logic.js').Contest[]} rows
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
function pasted(record, rows, day) {
  assert(record.practice, 'The contest record is pasted once the start gate is open')
  const had = new Set(record.contests.map(c => c.contest))
  const added = rows.filter(c => c.date >= record.practice && !had.has(c.contest))
  const contests = [...record.contests, ...added].sort((a, b) =>
    a.date < b.date ? -1 : a.date > b.date ? 1 : 0
  )
  const read = withReading({ ...record, contests }, day)
  const show = read.readings.length !== record.readings.length || read.readings.length === 0
  /** @type {import('./decode.logic.js').Position} */
  const position = {
    ...read.position,
    open: show ? { n: 1, step: 'reading' } : read.position.open,
    pasted: day
  }
  return { ...read, position }
}

/**
 * The step for a move that is no study: Setup, the practice submission, the contest record and
 * the contest's start and series.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {OtherEvent} event
 * @returns {import('./decode.logic.js').CppRecord}
 */
function kept(course, record, event) {
  switch (event.t) {
    case 'setup-stored':
      return setupStored(record, event)
    case 'setup-changed':
      return setupChanged(record, event)
    case 'practice-accepted':
      assert(
        firstKindsRetired(course, record),
        'The practice submission comes once every first kind is retired'
      )
      return practiceAccepted(record, event.day)
    case 'record-pasted':
      return pasted(record, event.rows, event.day)
    case 'next-typed':
      return nextTyped(record, event.next)
    case 'series-typed':
      return seriesTyped(record, event.series, event.day)
    case 'runtime-checked':
      return runtimeChecked(record, event.about, event.refused)
    case 'track-setup-stored':
      return { ...record, pin: event.pin }
    default:
      return unreachable(event)
  }
}

/** @type {ReadonlySet<Event['t']>} */
const OTHER = new Set([
  'setup-stored',
  'setup-changed',
  'practice-accepted',
  'record-pasted',
  'next-typed',
  'series-typed',
  'runtime-checked',
  'track-setup-stored'
])

/**
 * @param {Event} event
 * @returns {event is OtherEvent}
 */
const isOther = event => OTHER.has(event.t)

/**
 * The session's one step: the next record, and the effects to run.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Event} event
 * @returns {Stepped}
 */
export const step = (course, record, event) =>
  isOther(event)
    ? { state: kept(course, record, event), effects: [] }
    : studied(course, record, event)
