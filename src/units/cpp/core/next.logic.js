// Hides: the C++ unit's one next action ("A Self-Study System", Programming, The steps and Running
// it; The build, Programming, The one next action and The checks): a pure function of the course,
// the record and the day, which returns the first case that applies: 1 the contest record, once
// the start gate is open and the contest day has passed, then the next contest's start; 2 what is
// due, oldest date first, kinds and problems before trace items, then course order, a due kind
// giving one problem by Kind's return and a due trace one program by Trace per kind; 3 the practice
// submission; 4 mixed practice and 5 the open kind's first run, taking turns. Before them, Setup;
// after them, nothing left. Gate 1 dates an answer, gate 3 retires a kind and opens the next, and
// the start gate opens the rated contests.
import { assert, unreachable } from '../../../kernel/invariant.logic.js'
import { nextOf, writeLine } from '../../../kernel/days.logic.js'
import { isTrace, itemId, kindKey } from './decode.logic.js'
import { kindLine, withKind } from './record.logic.js'
import {
  openTrackKind,
  sideToday,
  trackAction,
  trackDates,
  trackFirst,
  trackMixed
} from './track.logic.js'

/**
 * The steps the next action names that the record does not hold open.
 * @typedef {Readonly<{ n: 0, step: 'setup' }>} Setup Before the first session: the runner and the server
 * @typedef {Readonly<{ n: 1, step: 'record' }>} RecordStep Paste the contest record
 * @typedef {Readonly<{ n: 1, step: 'next-contest' }>} NextContest Type the next contest's date and start time
 * @typedef {Readonly<{ n: 3, step: 'practice' }>} Practice The practice submission, "Accepted"
 * @typedef {Readonly<{ n: 5, step: 'start', kind: import('./decode.logic.js').KindId }>} Start The first kind's filled trace, read once
 * @typedef {Readonly<{ n: 5, step: 'example', kind: import('./decode.logic.js').KindId }>} Example The open kind's worked example
 * @typedef {Readonly<{ n: 6, step: 'nothing' }>} Nothing
 * @typedef {Start | Example | import('./decode.logic.js').TraceStep | import('./decode.logic.js').ParsonsStep | import('./decode.logic.js').Alone} FirstRunPart
 * @typedef {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackExample | import('./track-decode.logic.js').TrackWaits | import('./track-decode.logic.js').TrackSetup} TrackStep
 * @typedef {import('./decode.logic.js').Open | import('./decode.logic.js').Asked | Setup | RecordStep | NextContest | Practice | Start | Example | Nothing | TrackStep} Action
 */

/**
 * Whole programs: the course's first section, the twelve kinds Eruko built.
 * @param {import('./decode.logic.js').Course} course
 */
const firstKinds = course => {
  const [first] = course.sections
  return first ? course.kinds.slice(first.first - 1, first.last) : course.kinds
}

/**
 * Every first kind retired: the practice submission comes next.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course'>} record
 */
export const firstKindsRetired = (course, record) =>
  firstKinds(course).every(k => Boolean(kindLine(record, k.id)?.retired))

/**
 * The start gate: every first kind retired, and the practice submission accepted.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'practice'>} record
 */
export const startGate = (course, record) =>
  firstKindsRetired(course, record) && Boolean(record.practice)

/**
 * The open kind: the first in course order not retired, since gate 3 opens the kinds in order.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course'>} record
 */
export const openKind = (course, record) => course.kinds.find(k => !kindLine(record, k.id)?.retired)

/**
 * The kind that holds a problem or a trace item, or whose key on the dated list this is.
 * @param {import('./decode.logic.js').Course} course
 * @param {string} id
 */
export function kindOf(course, id) {
  const kind = course.kinds.find(
    k => k.trace === id || kindKey(k.id) === id || k.problems.some(p => p === id)
  )
  assert(kind, `An item of the record is of a kind the course holds: ${id}`)
  return kind.id
}

/**
 * A problem last answered wrong: its newest line is wrong, and no check after that day passed
 * every test. A problem right at a later check writes no line of its own; its submit says so.
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'runs'>} record
 * @param {string} id
 */
const wrongNow = (record, id) => {
  const last = record.recall[id]?.at(-1)
  return (
    last?.right === false &&
    !record.runs.some(r => r.id === id && r.date > last.date && r.total > 0 && r.passed === r.total)
  )
}

/**
 * The course's items on the dated list, each with its next date and its place in the course
 * order (kinds and problems kind by kind, then the traces): a retired kind, due by its own line
 * and the day after one of its problems is answered wrong; a problem of a kind in its first run,
 * last answered wrong, which comes back alone; a kind's trace. A problem refused under the
 * runtime is left out: it is not used, and its dated lines stay.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'recall' | 'runs' | 'runtime'>} record
 */
function dated(course, record) {
  const refused = refusedOf(record)
  const n = course.kinds.length
  return course.kinds.flatMap((kind, k) => {
    const wrong = kind.problems.flatMap((id, i) =>
      !refused.has(id) && wrongNow(record, id)
        ? [{ key: String(id), next: nextOf(record.recall[id]) ?? '', at: k * 1000 + i + 1 }]
        : []
    )
    const own = nextOf(record.recall[kindKey(kind.id)])
    const [next] = [...(own ? [own] : []), ...wrong.map(w => w.next)].sort()
    const items = kindLine(record, kind.id)?.retired
      ? [{ key: kindKey(kind.id), next: next ?? '', at: k * 1000 }]
      : wrong
    const trace = nextOf(record.recall[kind.trace]) ?? ''
    return [...items, { key: String(kind.trace), next: trace, at: n * 1000 + k }].filter(
      x => x.next
    )
  })
}

/**
 * What is due today, by its key on the dated list: the oldest date first; on one date, kinds and
 * problems before trace items, and within each the one earlier in the course order.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'recall' | 'runs' | 'runtime'>} record
 * @param {string} day
 * @returns {string[]}
 */
export const dueToday = (course, record, day) =>
  dated(course, record)
    .filter(x => x.next <= day)
    .sort((a, b) => (a.next < b.next ? -1 : a.next > b.next ? 1 : a.at - b.at))
    .map(x => x.key)

/**
 * Every next date on the dated list: the course's items, then what the track brings back.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @returns {string[]}
 */
export const datesOf = (course, record) => [
  ...dated(course, record).map(x => x.next),
  ...trackDates(course.track, record)
]

/**
 * The newest day a problem was seen: its first try, a dated line, or a submit.
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'runs' | 'tries'>} record
 * @param {string} id
 */
const seenOf = (record, id) =>
  [
    ...record.tries.filter(t => t.id === id).map(t => t.date),
    ...(record.recall[id] ?? []).map(l => l.date),
    ...record.runs.filter(r => r.id === id).map(r => r.date)
  ]
    .sort()
    .at(-1) ?? ''

/**
 * Kind's return: the one problem a due kind gives: its own problem last answered wrong (the one
 * answered wrong last); else a never-tried problem; else, until Eruko adds one, the problem seen
 * longest ago; on a tie, the one earlier in the course. None when the kind has no problem in use.
 * @param {import('./decode.logic.js').Kind} kind
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'runs' | 'tries' | 'runtime'>} record
 * @returns {import('./decode.logic.js').ProblemId | undefined}
 */
export function kindGives(kind, record) {
  const refused = refusedOf(record)
  const used = kind.problems.filter(id => !refused.has(id))
  const lastLine = (/** @type {string} */ id) => record.recall[id]?.at(-1)?.date ?? ''
  const wrong = used.filter(id => wrongNow(record, id))
  if (wrong.length) return wrong.reduce((a, b) => (lastLine(b) > lastLine(a) ? b : a))
  const [fresh] = untried(kind, record)
  if (fresh !== undefined) return fresh
  const [first, ...rest] = used
  if (first === undefined) return undefined
  return rest.reduce((a, b) => (seenOf(record, b) < seenOf(record, a) ? b : a), first)
}

/**
 * Trace per kind: the program a kind's trace is asked on. The first run asks the kind's own
 * trace; each right answer on an earlier day moves it on to the next returning trace not yet
 * traced, and once each has been traced, round again, so the next is the one traced longest ago.
 * A wrong answer keeps the program, so a trace answered wrong comes back as itself.
 * ponytail: a returning trace added later is met in its turn of the round, not at once.
 * @param {Pick<import('./decode.logic.js').KindContent, 'trace' | 'traces'>} content
 * @param {readonly import('../../../kernel/days.logic.js').Line[] | undefined} lines the trace's lines
 * @param {string} day
 * @returns {import('./decode.logic.js').Trace}
 */
export function traceOn(content, lines, day) {
  const programs = [content.trace, ...content.traces]
  const right = (lines ?? []).filter(l => l.right && l.date < day).length
  return programs[right % programs.length] ?? content.trace
}

/**
 * The problems whose reference solution failed its tests under the runtime stored: not used.
 * @param {Pick<import('./decode.logic.js').CppRecord, 'runtime'>} record
 * @returns {ReadonlySet<string>}
 */
const refusedOf = record => new Set(record.runtime?.refused ?? [])

/**
 * A kind's never-tried problems, in course order, none refused under the runtime.
 * @param {import('./decode.logic.js').Kind} kind
 * @param {Pick<import('./decode.logic.js').CppRecord, 'tries' | 'runtime'>} record
 */
export const untried = (kind, record) => {
  const left = new Set([...record.tries.map(t => t.id), ...refusedOf(record)])
  return kind.problems.filter(id => !left.has(id))
}

/**
 * Mixed practice's draw: a never-tried problem of the retired kind whose newest first try is the
 * oldest; on a tie, the kind earlier in the course. A kind with no never-tried problem left is
 * not drawn (Eruko adds problems to it before the next session), and with none in any retired
 * kind the case has nothing.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'tries' | 'runtime'>} record
 * @returns {import('./decode.logic.js').Mixed | null}
 */
export function mixedDraw(course, record) {
  const newest = new Map()
  record.tries.forEach((t, i) => newest.set(kindOf(course, t.id), i))
  let best = null
  for (const kind of course.kinds) {
    const [first] = untried(kind, record)
    if (!kindLine(record, kind.id)?.retired || first === undefined) continue
    const at = newest.get(kind.id) ?? -1
    if (!best || at < best.at) best = { at, id: first, kind: kind.id }
  }
  return best ? { n: 4, step: 'mixed', id: best.id, kind: best.kind } : null
}

/**
 * The open kind's first run at its next part: the filled trace (the first kind only), the worked
 * example, the trace item, the Parsons problem cut from a never-tried problem, then a never-tried
 * problem alone; null when every kind is retired, or the part needs a never-tried problem and the
 * kind holds none.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'tries' | 'runtime'>} record
 * @returns {FirstRunPart | null}
 */
export function firstRunPart(course, record) {
  const kind = openKind(course, record)
  const line = kind && kindLine(record, kind.id)
  if (!kind || !line) return null
  const [left] = untried(kind, record)
  switch (line.part) {
    case 'start':
      return { n: 5, step: 'start', kind: kind.id }
    case 'example':
      return { n: 5, step: 'example', kind: kind.id }
    case 'trace':
      return { n: 5, step: 'trace', id: kind.trace, kind: kind.id }
    case 'parsons':
      return left === undefined ? null : { n: 5, step: 'parsons', id: left, kind: kind.id }
    case 'alone':
      return left === undefined ? null : { n: 5, step: 'alone', id: left, kind: kind.id }
    default:
      return unreachable(line.part)
  }
}

/**
 * Case 1: once the start gate is open, the next contest's start while none is typed; then, once
 * that contest's day has passed, the record to paste, and once pasted, the next contest's start.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {RecordStep | NextContest | null}
 */
export function contestStep(course, record, day) {
  if (!record.server || !startGate(course, record)) return null
  const contestDay = record.server.next.slice(0, 10)
  if (!contestDay) return { n: 1, step: 'next-contest' }
  if (day <= contestDay) return null
  return record.position.pasted > contestDay
    ? { n: 1, step: 'next-contest' }
    : { n: 1, step: 'record' }
}

/**
 * The contest day: the start gate is open and the next contest starts today. The contest is
 * Programming's whole plan that day: steps 1, 3 and 4 do not run, and what is due stays due.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'practice' | 'server'>} record
 * @param {string} day
 */
export const contestToday = (course, record, day) =>
  Boolean(record.server?.next.startsWith(day)) && startGate(course, record)

/**
 * The first date after today on which an item comes back, or '' for none.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 */
export const laterDate = (course, record, day) =>
  datesOf(course, record)
    .filter(next => next > day)
    .sort()[0] ?? ''

/**
 * The one next action: what is open first, so a session reopens where it stopped; Setup before
 * the first session; then the first case of the paper's list that applies. Cases 4 and 5 take
 * turns by `turn`: the case it does not name goes next, case 4 first when it is empty, and when
 * one has nothing the other takes every turn.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @param {string} [zoned] the study day in the stored time zone, in which the contest's day is typed
 * @returns {Action}
 */
export function nextAction(course, record, day, zoned = day) {
  if (record.position.open) return record.position.open
  if (!record.runtime || !record.server) return { n: 0, step: 'setup' }
  const contest = contestStep(course, record, zoned)
  if (contest) return contest
  const open = trackOpen(course, record)
  /** @type {TrackStep | null} */
  const track = !open
    ? null
    : record.pin
      ? trackAction(course.track, record, day, course.reading)
      : { n: 'C', step: 'track-setup' }
  const side = sideToday(record, { open, contest: contestToday(course, record, zoned) }, day)
  if (side === 'track' && track && track.step !== 'track-waits') return track
  const mine = courseAction(course, record, day)
  // a drop at gate 2 gives every session to the course, even one with nothing to take
  const held = record.readings.at(-1)?.state === 'held'
  return mine.step === 'nothing' && track && !held ? track : mine
}

/**
 * The language track is open: every one of the twelve whole-program kinds is retired. The practice
 * contest and the start gate are not asked of it.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course'>} record
 */
export const trackOpen = (course, record) =>
  course.track.length > 0 && firstKindsRetired(course, record)

/**
 * The course's own next action in a course session: what is due, the practice submission, then
 * mixed practice and the first run taking turns.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {Action}
 */
function courseAction(course, record, day) {
  for (const key of dueToday(course, record, day)) {
    const kind = course.kinds.find(k => k.id === kindOf(course, key))
    const id = kind && key === kindKey(kind.id) ? kindGives(kind, record) : itemId(key)
    if (kind && id !== undefined) return { n: 2, step: 'recall', id, kind: kind.id }
  }
  if (firstKindsRetired(course, record) && !record.practice) return { n: 3, step: 'practice' }
  const mixed = mixedDraw(course, record)
  const part = firstRunPart(course, record)
  const [first, second] = record.turn === 4 ? [part, mixed] : [mixed, part]
  return first ?? second ?? { n: 6, step: 'nothing' }
}

/**
 * Where the learner stands, as one plain line: the open kind by its place among the kinds the
 * course holds, and its name.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'track'>} record
 */
export function place(course, record) {
  const kind = openKind(course, record)
  const line = kind
    ? `Kind ${course.kinds.indexOf(kind) + 1} of ${course.kinds.length}: ${kind.name}.`
    : `All ${course.kinds.length} kinds done.`
  if (!trackOpen(course, record)) return line
  const t = openTrackKind(course.track, record)
  const track = t
    ? `Track kind ${course.track.indexOf(t) + 1} of ${course.track.length}: ${t.name}.`
    : `All ${course.track.length} track kinds done.`
  return `${line} ${track}`
}

/**
 * The course's rows on the unit page: the kinds in course order. The open kind opens the work
 * list; a kind retired is done; a kind not reached opens nothing, and its row says the kind it
 * opens after (shell/unit-view.js). The open kind that waits for new problems opens nothing,
 * and says so.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'tries' | 'runtime'>} record
 * @param {string} work the work list's address
 * @returns {import('../../../kernel/pages.logic.js').Item[]}
 */
export function courseRows(course, record, work) {
  const open = openKind(course, record)
  const waits = waitsForProblems(course, record)
  return course.kinds.map(k => ({
    key: k.id,
    title: k.name,
    to: k === open && !waits ? work : undefined,
    done: Boolean(kindLine(record, k.id)?.retired),
    ...(k === waits ? { opens: WAITS_ROW } : {})
  }))
}

/**
 * The language track's rows on the unit page, after the course's: the open track kind opens the
 * work list once the track is open; a kind retired is done; the first says when the track opens.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} work
 * @returns {import('../../../kernel/pages.logic.js').Item[]}
 */
export function trackRows(course, record, work) {
  const open = trackOpen(course, record)
  const now = openTrackKind(course.track, record)
  return course.track.map((k, i) => ({
    key: `t${k.id}`,
    title: k.name,
    to: open && k === now ? work : undefined,
    done: Boolean(record.track.find(t => t.kind === k.id)?.retired),
    ...(i === 0 && !open ? { opens: TRACK_OPENS } : {})
  }))
}

/** The first track kind's row before the track opens. */
const TRACK_OPENS = 'Opens once the twelve whole-program kinds are retired.'

/** The open kind's row while it waits for new problems. */
const WAITS_ROW = 'Opens again once Eruko adds new problems to it.'

/**
 * The open kind, when its first run needs a never-tried problem and it holds none: case 5 has
 * nothing, and case 4 takes every turn, until Eruko adds problems to it.
 * @param {import('./decode.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course' | 'tries' | 'runtime'>} record
 */
export function waitsForProblems(course, record) {
  const kind = openKind(course, record)
  const part = kind && kindLine(record, kind.id)?.part
  if (!kind || (part !== 'parsons' && part !== 'alone')) return null
  return untried(kind, record).length === 0 ? kind : null
}

/**
 * How many steps with no date wait today, for the unit's dated list: the contest step, the
 * practice submission, mixed practice and the first run, each one or none. On the contest day
 * the contest is the whole plan: one.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 */
export const waitingToday = (course, record, day) =>
  contestToday(course, record, day)
    ? 1
    : [
        record.runtime && record.server && contestStep(course, record, day),
        firstKindsRetired(course, record) && !record.practice,
        mixedDraw(course, record),
        firstRunPart(course, record),
        trackOpen(course, record) && trackMixed(course.track, record),
        trackOpen(course, record) &&
          trackFirst(course.track, record, course.reading)?.step !== 'track-waits' &&
          trackFirst(course.track, record, course.reading)
      ].filter(Boolean).length

/**
 * The day studied, kept once.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
const studied = (record, day) =>
  record.sessions.includes(day) ? record : { ...record, sessions: [...record.sessions, day] }

/**
 * A part of the open kind's first run done: its next part, the turn passed to case 4, the day studied.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').KindId} kind
 * @param {Partial<Omit<import('./decode.logic.js').KindLine, 'kind'>>} change
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
const partDone = (record, kind, change, day) => ({
  ...studied(withKind(record, kind, change), day),
  turn: 5
})

/**
 * The filled trace of the Start screen read, once: the first kind's first run began today, and
 * goes on to its worked example.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 */
export function startRead(course, record, day) {
  const [first] = course.kinds
  assert(
    first && kindLine(record, first.id)?.part === 'start',
    'The filled trace is read once, at the start'
  )
  return partDone(record, first.id, { opened: day, part: 'example' }, day)
}

/**
 * The open kind's worked example read: the kind goes on to its trace item.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').KindId} kind
 * @param {string} day
 */
export function exampleRead(course, record, kind, day) {
  assert(
    openKind(course, record)?.id === kind,
    `A worked example read is of the open kind: ${kind}`
  )
  return partDone(record, kind, { part: 'trace' }, day)
}

/**
 * Gate 3, asked after the problem written alone: right, the kind is retired today, its first line
 * written that day, right, and the next kind of the course opens at its worked example; wrong,
 * its reference solution is read and the kind goes back to a fresh Parsons problem.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').KindId} kind
 * @param {boolean} right
 * @param {string} day
 */
function gate3(course, record, kind, right, day) {
  if (!right) return partDone(record, kind, { part: 'parsons' }, day)
  const at = course.kinds.findIndex(k => k.id === kind)
  const after = course.kinds[at + 1]
  const retired = withLine(partDone(record, kind, { retired: day }, day), kindKey(kind), true, day)
  return after ? withKind(retired, after.id, { opened: day, part: 'example' }) : retired
}

/**
 * A problem's first try, kept: a Parsons problem's source problem counts as tried.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').ProblemId} id
 * @param {boolean} right
 * @param {boolean} mixed
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
const tried = (record, id, right, mixed, day) => ({
  ...record,
  tries: [...record.tries, { id, date: day, right, mixed }]
})

/**
 * The item's line on the dated list, written from the day's first answer (kernel writeLine).
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} id
 * @param {boolean} right
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
const withLine = (record, id, right, day) => ({
  ...record,
  recall: { ...record.recall, [id]: writeLine(record.recall[id], right, day) }
})

/**
 * Gate 1 and what follows it for each item answered: a trace item writes its line; a problem
 * writes one of its own only when wrong, wherever it is answered, and its kind is then due the
 * next day; a Parsons problem writes none. A first try is kept for every never-tried problem.
 * The open kind's part moves on, and the turn passes.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').Asked} item
 * @param {boolean} right
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
function gate1(course, record, item, right, day) {
  switch (item.step) {
    case 'recall':
      return studied(recalled(record, item, right, day), day)
    case 'trace':
      return partDone(withLine(record, item.id, right, day), item.kind, { part: 'parsons' }, day)
    case 'parsons':
      return partDone(tried(record, item.id, right, false, day), item.kind, { part: 'alone' }, day)
    case 'alone': {
      const first = tried(record, item.id, right, false, day)
      return gate3(
        course,
        right ? first : withLine(first, item.id, false, day),
        item.kind,
        right,
        day
      )
    }
    case 'mixed': {
      const first = tried(record, item.id, right, true, day)
      return { ...studied(right ? first : withLine(first, item.id, false, day), day), turn: 4 }
    }
    default:
      return unreachable(item)
  }
}

/**
 * A due item answered: a trace writes its line. A problem writes its own line only when wrong;
 * given by a retired kind, it writes the kind's line from this answer, and a never-tried one is a
 * first try of mixed practice, counted in the solving share. A problem of a kind in its first run
 * comes back alone and writes no kind's line.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').Recall} item
 * @param {boolean} right
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
function recalled(record, item, right, day) {
  if (isTrace(item.id)) return withLine(record, item.id, right, day)
  const fresh = !record.tries.some(t => t.id === item.id)
  const own = right ? record : withLine(record, item.id, false, day)
  const first = fresh ? tried(own, item.id, right, true, day) : own
  return kindLine(record, item.kind)?.retired
    ? withLine(first, kindKey(item.kind), right, day)
    : first
}

/**
 * A submit kept on the record, and the program of every older submit of the item dropped once a
 * later dated line stands.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').ProblemId} id
 * @param {string} code
 * @param {import('./decode.logic.js').Verdict} verdict
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
function withRun(record, id, code, verdict, day) {
  const latest = record.recall[id]?.at(-1)?.date ?? ''
  const runs = [
    ...record.runs,
    { id, date: day, passed: verdict.passed, total: verdict.total, code }
  ]
  return {
    ...record,
    runs: runs.map(r => {
      if (r.id !== id || r.date >= latest) return r
      const { code: _, ...kept } = r
      return kept
    })
  }
}

/**
 * An item answered: judged by gate 1 (and gate 3 for the problem alone), its submit kept, and
 * the item left open with its verdict until "Next". `verdict` is null after "No further step",
 * which counts as wrong and submits nothing.
 * @param {import('./decode.logic.js').Course} course
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Readonly<{ item: import('./decode.logic.js').Asked, right: boolean, code: string, verdict: import('./decode.logic.js').Verdict | null, day: string }>} answer
 * @returns {import('./decode.logic.js').CppRecord}
 */
export function answered(course, record, { item, right, code, verdict, day }) {
  const judged = gate1(course, record, item, right, day)
  const { id } = item
  const kept = verdict && !isTrace(id) ? withRun(judged, id, code, verdict, day) : judged
  return { ...kept, position: { ...kept.position, open: { ...item, code, right, verdict } } }
}
