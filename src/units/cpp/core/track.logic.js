// Hides: the C++ language track ("A Self-Study System", Programming, The language track, The
// track's material, The track's steps): when it opens, its kinds in stage order, its items and
// their ids, the side a Programming session belongs to, steps A, B and C with gates A and C, and
// how each track answer is judged against what the machine gave. Pure: the runner's replies come
// in, the next record goes out.
import { assert, unreachable } from '../../../kernel/invariant.logic.js'
import { isDue, nextOf, writeLine } from '../../../kernel/days.logic.js'
import { errorLines, hostReport, deviceReport } from './check.logic.js'
import { readingFirst } from './reading.logic.js'
import { scanFlags, scanHits } from './scan.logic.js'
import {
  UNIT_ORDER,
  asLevel,
  freshRound,
  itemsOf,
  partsOf,
  trackAsked,
  unitItems,
  unitKey,
  unitsHeld
} from './track-decode.logic.js'

export { itemsOf, partsOf }

/** The six verdicts, in the paper's words, by their stored names. */
export const VERDICTS = {
  defined: 'well-formed with one defined result',
  'ill-formed': 'ill-formed, a diagnostic required',
  ndr: 'ill-formed, no diagnostic required',
  undefined: 'undefined behaviour',
  unspecified: 'unspecified behaviour',
  implementation: 'implementation-defined behaviour'
}

/**
 * The count a report holds, by an item's `Result:`: `nm <pattern>` the defined symbols whose
 * name holds the pattern; `sass <pattern>` the machine instructions whose opcode does;
 * `registers <kernel>` and `spill <kernel>` what nvcc's resource usage gives for the kernel whose
 * mangled name holds the pattern (the spill stores' bytes).
 * @param {string} result
 * @param {Readonly<Record<string, string>>} reports
 */
export function countOf(result, reports) {
  const [what, ...rest] = result.split(' ')
  const re = new RegExp(rest.join(' '))
  const lines = (
    reports[what === 'registers' || what === 'spill' ? 'resource-usage' : (what ?? '')] ?? ''
  ).split('\n')
  if (what === 'nm')
    return lines.filter(
      l => /^[0-9a-f]* *[TWVtwuv] /.test(l) && re.test(l.replace(/^[0-9a-f]* *\w /, ''))
    ).length
  if (what === 'sass')
    return lines.filter(l => re.test(l.match(/\*\/\s+(?:@!?U?P\w+\s+)?([A-Z][\w.]*)/)?.[1] ?? ''))
      .length
  let inKernel = false
  for (const l of lines) {
    const name = l.match(/Function properties for (\S+)|Compiling entry function '([^']+)'/)
    if (name) inKernel = re.test(name[1] ?? name[2] ?? '')
    if (!inKernel) continue
    const reg = l.match(/Used (\d+) registers/)
    if (what === 'registers' && reg) return Number(reg[1])
    const spill = l.match(/(\d+) bytes spill stores/)
    if (what === 'spill' && spill) return Number(spill[1])
  }
  return -1
}

/**
 * The track's kind line.
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track'>} record
 * @param {string} kind
 */
const trackLine = (record, kind) => record.track.find(t => t.kind === kind)

/**
 * The open track kind: the first in track order not retired, since gate C opens them in order and
 * a stage opens when every kind of the one before is retired.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track'>} record
 */
export const openTrackKind = (kinds, record) => kinds.find(k => !trackLine(record, k.id)?.retired)

// The track's actions

/** A unit's place in the list of units. @param {import('./track-decode.logic.js').Unit} unit */
const unitAt = unit => UNIT_ORDER.findIndex(u => u === unit)

/**
 * A unit's dated lines; a retired kind's unit with none stored (a record from before units held
 * lines) reads its first line from the day the kind retired, right.
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'track'>} record
 * @param {string} kind
 * @param {import('./track-decode.logic.js').DatedUnit} unit
 */
const unitLines = (record, kind, unit) => {
  const lines = record.recall[unitKey(kind, unit)]
  const retired = trackLine(record, kind)?.retired
  return lines?.length || !retired ? lines : writeLine(undefined, true, retired)
}

/**
 * The item a due unit gives: its own item last answered wrong, the one wrong longest ago; else a
 * never-tried item of the unit; else the item of the unit seen longest ago.
 * @param {import('./track-decode.logic.js').TrackKind} k
 * @param {import('./track-decode.logic.js').DatedUnit} unit
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'trackTries'>} record
 */
function unitGives(k, unit, record) {
  const ids = unitItems(k, unit)
  const last = (/** @type {string} */ id) => record.recall[id]?.at(-1)
  const tried = (/** @type {string} */ id) => record.trackTries.find(t => t.id === id)?.date
  const seen = (/** @type {string} */ id) => [last(id)?.date ?? '', tried(id) ?? ''].sort()[1] ?? ''
  const oldest = (/** @type {string[]} */ list, /** @type {(id: string) => string} */ at) =>
    list.reduce(
      (/** @type {string | undefined} */ best, id) =>
        best === undefined || at(id) < at(best) ? id : best,
      undefined
    )
  return (
    oldest(
      ids.filter(id => last(id)?.right === false),
      id => last(id)?.date ?? ''
    ) ??
    ids.find(id => tried(id) === undefined) ??
    oldest(ids, seen)
  )
}

/**
 * What the track brings back, each with its next date: each unit of a retired kind by the item
 * it gives, and while a kind is not retired each of its items answered wrong, alone.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'track' | 'trackTries'>} record
 */
function trackDated(kinds, record) {
  return kinds.flatMap((k, at) => {
    const dated = (
      /** @type {string} */ id,
      /** @type {readonly import('../../../kernel/days.logic.js').Line[] | undefined} */ lines
    ) => {
      const next = nextOf(lines)
      const p = partsOf(id)
      return next === undefined ? [] : [{ id, next, at: [at, unitAt(p.unit), p.n] }]
    }
    if (trackLine(record, k.id)?.retired)
      return unitsHeld(k).flatMap(unit => {
        const id = unitGives(k, unit, record)
        return id ? dated(id, unitLines(record, k.id, unit)) : []
      })
    return itemsOf(k).flatMap(id =>
      record.recall[id]?.at(-1)?.right === false ? dated(id, record.recall[id]) : []
    )
  })
}

/**
 * The next date of everything the track brings back, for the unit's dated list.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'track' | 'trackTries'>} record
 */
export const trackDates = (kinds, record) => trackDated(kinds, record).map(x => x.next)

/**
 * Step A: what is due today, as the items to answer, oldest date first; on one date, the kind
 * earlier in the track order, and within a kind the unit earlier in the list of units.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall' | 'track' | 'trackTries'>} record
 * @param {string} day
 */
export function trackDue(kinds, record, day) {
  return trackDated(kinds, record)
    .filter(x => x.next <= day)
    .sort((a, b) =>
      a.next < b.next
        ? -1
        : a.next > b.next
          ? 1
          : (a.at[0] ?? 0) - (b.at[0] ?? 0) ||
            (a.at[1] ?? 0) - (b.at[1] ?? 0) ||
            (a.at[2] ?? 0) - (b.at[2] ?? 0)
    )
    .map(x => x.id)
}

/**
 * A kind's never-tried items in unit order.
 * @param {import('./track-decode.logic.js').TrackKind} k
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'trackTries'>} record
 */
const untriedOf = (k, record) => {
  const tried = new Set(record.trackTries.map(t => t.id))
  return itemsOf(k)
    .filter(id => !tried.has(id))
    .sort((a, b) => unitAt(partsOf(a).unit) - unitAt(partsOf(b).unit))
}

/**
 * Step B: one never-tried item from the retired track kind whose latest first try of an item is
 * the oldest; on a tie, the kind earlier in the track order.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track' | 'trackTries'>} record
 * @returns {import('./track-decode.logic.js').TrackAsked | null}
 */
export function trackMixed(kinds, record) {
  /** @type {Map<string, string>} */
  const latest = new Map()
  for (const t of record.trackTries) {
    const k = partsOf(t.id).kind
    if ((latest.get(k) ?? '') < t.date) latest.set(k, t.date)
  }
  let best = null
  for (const k of kinds) {
    const [first] = untriedOf(k, record)
    if (!trackLine(record, k.id)?.retired || first === undefined) continue
    const at = latest.get(k.id) ?? ''
    if (!best || at < best.at) best = { at, id: first }
  }
  return best ? trackAsked(best.id, 'B') : null
}

/**
 * Step C: the open kind's run at its next part, at its round's items; once every kind is retired,
 * the reading's next unit, and null after a right reading. A round past the items the kind holds
 * waits for Eruko to write them.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track' | 'trackReading'>} record
 * @param {readonly import('./track-decode.logic.js').ReadingTask[]} [reading]
 * @returns {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackExample | import('./track-decode.logic.js').TrackWaits | null}
 */
export function trackFirst(kinds, record, reading = []) {
  const k = openTrackKind(kinds, record)
  const line = k && trackLine(record, k.id)
  if (!k) return readingFirst(reading, record)
  if (!line) return null
  /** @type {import('./track-decode.logic.js').TrackWaits} */
  const waits = { n: 'C', step: 'track-waits', kind: k.id }
  const at = (/** @type {readonly string[]} */ list) => list[line.round]
  switch (line.part) {
    case 'example':
      return { n: 'C', step: 'track-example', kind: k.id }
    case 'verdict': {
      const id = at(k.verdicts)
      return id ? trackAsked(id, 'C') : waits
    }
    case 'count':
      return k.count ? trackAsked(k.count, 'C') : waits
    case 'alone': {
      const id = at(k.alones)
      return id ? trackAsked(id, 'C') : waits
    }
    case 'witness': {
      const id = at(k.alones)
      return id ? trackAsked(id.replace(/a(\d+)$/, 'w$1'), 'C') : waits
    }
    default:
      return unreachable(line.part)
  }
}

/**
 * The track session's next action after what is due: steps B and C take turns, B first, one
 * item and then one part of C; when one has nothing, the other takes every turn. A kind that
 * waits for items gives its turn to B; with nothing in B either, it shows that it waits.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @param {readonly import('./track-decode.logic.js').ReadingTask[]} [reading]
 * @returns {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackExample | import('./track-decode.logic.js').TrackWaits | null}
 */
export function trackAction(kinds, record, day, reading = []) {
  const [due] = trackDue(kinds, record, day)
  if (due !== undefined) return trackAsked(due, 'A')
  const b = trackMixed(kinds, record)
  const c = trackFirst(kinds, record, reading)
  const ready = c && c.step !== 'track-waits' ? c : null
  const [first, second] = record.trackTurn === 'B' ? [ready, b] : [b, ready]
  return first ?? second ?? c
}

/**
 * The side a Programming session belongs to today: the course until the track opens; on a
 * contest day or while gate 2's last reading holds a drop, the course; else the side that did not
 * supply the last session, the course first; the side studied today keeps the day. When the side
 * has nothing to take, the other takes it (nextAction).
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Readonly<{ open: boolean, contest: boolean }>} now
 * @param {string} day
 * @returns {'course' | 'track'}
 */
export function sideToday(record, now, day) {
  if (!now.open || now.contest) return 'course'
  if (record.readings.at(-1)?.state === 'held') return 'course'
  if (!record.side) return 'course'
  if (record.side.day === day) return record.side.side
  return record.side.side === 'course' ? 'track' : 'course'
}

// Answers

/**
 * The record with a track kind's line changed.
 * @template {import('./track-decode.logic.js').TrackRecord} R
 * @param {R} record
 * @param {string} kind
 * @param {Partial<Omit<import('./track-decode.logic.js').TrackLine, 'kind'>>} change
 * @returns {R}
 */
const withLine = (record, kind, change) => ({
  ...record,
  track: record.track.map(t => (t.kind === kind ? { ...t, ...change } : t))
})

/**
 * The open kind's worked example studied: its run began today and goes on to its verdict item;
 * the turn passes to B.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} kind
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
export function trackExampleRead(kinds, record, kind, day) {
  assert(
    openTrackKind(kinds, record)?.id === kind,
    `A worked example read is of the open track kind: ${kind}`
  )
  const line = trackLine(record, kind)
  return {
    ...withLine(record, kind, { opened: line?.opened || day, part: 'verdict' }),
    trackTurn: 'C',
    side: { day, side: 'track' }
  }
}

/**
 * The part after a part of the run: the count item where the kind holds one and the round is
 * the first, then the item alone, then the witness.
 * @param {import('./track-decode.logic.js').TrackKind} k
 * @param {import('./track-decode.logic.js').TrackLine} line
 * @param {import('./track-decode.logic.js').Unit} unit
 * @returns {import('./track-decode.logic.js').Step}
 */
const partAfter = (k, line, unit) =>
  unit === 'verdict'
    ? k.count && line.round === 0
      ? 'count'
      : 'alone'
    : unit === 'count'
      ? 'alone'
      : 'witness'

/**
 * Gate A and what follows, for a track item answered in step A, B or C: its lines as `gateA`
 * writes them; a never-tried item keeps its first try. In step C the run moves on, and after the
 * witness gate C asks whether the item alone and the witness were each right at the first check:
 * yes, the kind is retired, each of its units has its first line and the next kind opens; no,
 * the next round starts at a fresh verdict item. The turn passes.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Readonly<{ item: import('./track-decode.logic.js').TrackAsked, right: boolean, day: string }>} answer
 * @returns {import('./decode.logic.js').CppRecord}
 */
export function trackAnswered(kinds, record, { item, right, day }) {
  const tried = record.trackTries.some(t => t.id === item.id)
  /** @type {import('./decode.logic.js').CppRecord} */
  let next = {
    ...record,
    recall: gateA(record, item, right, day),
    trackTries: tried
      ? record.trackTries
      : [...record.trackTries, { id: item.id, date: day, right }],
    side: { day, side: 'track' },
    sessions: record.sessions.includes(day) ? record.sessions : [...record.sessions, day]
  }
  if (item.n === 'B') return { ...next, trackTurn: 'B' }
  if (item.n === 'A') return next
  const k = kinds.find(x => x.id === item.kind)
  const line = trackLine(record, item.kind)
  assert(k && line, `A track item answered in step C is of a kind the track holds: ${item.kind}`)
  next = { ...next, trackTurn: 'C' }
  if (item.unit !== 'witness') return withLine(next, k.id, { part: partAfter(k, line, item.unit) })
  const alone = item.id.replace(/w(\d+)$/, 'a$1')
  // gate C reads the first check of each: the item alone's first try, and the witness's
  const firstRight = (/** @type {string} */ id) => next.trackTries.find(t => t.id === id)?.right
  if (firstRight(item.id) && firstRight(alone)) {
    const at = kinds.indexOf(k)
    const after = kinds[at + 1]
    const retired = withLine(
      { ...next, recall: { ...next.recall, ...firstLines(k, next, day) } },
      k.id,
      { retired: day }
    )
    // a kind the reading opened again is followed by kinds already retired, which stay as they are
    return after && !trackLine(next, after.id)?.retired
      ? withLine(retired, after.id, { opened: day, part: 'example' })
      : retired
  }
  return withLine(next, k.id, { part: 'verdict', round: freshRound(k, next, line.round + 1) })
}

/**
 * Gate A's lines: an item writes a line of its own when wrong, or when it holds lines already, so
 * it is no longer the one last answered wrong; a retired kind's unit writes one from the first
 * answer to the item it gives when due, and when the item is wrong, so it comes back the next day.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./track-decode.logic.js').TrackAsked} item
 * @param {boolean} right
 * @param {string} day
 */
function gateA(record, item, right, day) {
  const recall = { ...record.recall }
  const own = record.recall[item.id]
  if (!right || own?.length) recall[item.id] = writeLine(own, right, day)
  const { unit } = item
  if (unit === 'bound' || !trackLine(record, item.kind)?.retired) return recall
  const lines = unitLines(record, item.kind, unit)
  if (!right || isDue(lines, day)) recall[unitKey(item.kind, unit)] = writeLine(lines, right, day)
  return recall
}

/**
 * The first line of each unit a kind holds, the day it retires, right; a unit with lines from an
 * earlier retirement (a kind a reading opened again) keeps them.
 * @param {import('./track-decode.logic.js').TrackKind} k
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall'>} record
 * @param {string} day
 */
const firstLines = (k, record, day) =>
  Object.fromEntries(
    unitsHeld(k).map(u => [
      unitKey(k.id, u),
      record.recall[unitKey(k.id, u)] ?? writeLine(undefined, true, day)
    ])
  )

// Judging a track answer against what the machine gave

/** @typedef {Readonly<{ verdict: string, lines: readonly number[], results: readonly string[] }>} LevelAnswer One level of a verdict item as typed */

/**
 * A verdict item: right when every level's verdict is the stored one, an ill-formed answer names
 * the lines the compiler reports, and an unspecified answer is the stored set. The first level
 * wrong is returned with what was stored.
 * @param {import('./track-decode.logic.js').VerdictItem} item
 * @param {Readonly<Record<string, LevelAnswer>>} typed
 * @returns {{ right: boolean, passed: number, total: number, first: { level: string, given: string, stored: string } | null }}
 */
export function verdictRight(item, typed) {
  let passed = 0
  /** @type {{ level: string, given: string, stored: string } | null} */
  let first = null
  for (const level of item.levels) {
    const a = item.answers[level] ?? { verdict: '' }
    const t = typed[level] ?? { verdict: '', lines: [], results: [] }
    const stored = said(a, item.results ?? [])
    const given = said({ verdict: t.verdict, lines: t.lines }, t.results)
    if (given === stored) passed++
    else first ??= { level, given, stored }
  }
  return { right: passed === item.levels.length, passed, total: item.levels.length, first }
}

/**
 * A verdict as one line: its words, its lines where ill-formed, its set where unspecified.
 * @param {Pick<import('./track-decode.logic.js').Answer, 'verdict' | 'lines'>} a
 * @param {readonly string[]} results
 */
function said(a, results) {
  const words = Object.entries(VERDICTS).find(([k]) => k === a.verdict)?.[1] ?? 'no verdict'
  if (a.verdict === 'ill-formed')
    return `${words}, lines ${[...(a.lines ?? [])].sort((x, y) => x - y).join(', ')}`
  if (a.verdict === 'unspecified')
    return `${words}: ${[...results]
      .map(r => r.trim())
      .sort()
      .join(' | ')}`
  return words
}

/**
 * A count item: right when every row is the recorded count; the first row wrong is returned.
 * @param {import('./track-decode.logic.js').CountItem} item
 * @param {readonly (readonly string[])[]} typed one row per row of the table, a cell per column
 */
export function countRight(item, typed) {
  let passed = 0
  let total = 0
  /** @type {{ line: number, column: string, given: string, stored: string } | null} */
  let first = null
  for (const [i, row] of item.rows.entries())
    for (const [j, v] of row.values.entries()) {
      total++
      const given = (typed[i]?.[j] ?? '').trim()
      if (given === String(v)) passed++
      else first ??= { line: row.line, column: item.columns[j] ?? '', given, stored: String(v) }
    }
  return { right: passed === total, passed, total, first }
}

/** @typedef {import('./decode.logic.js').RunnerResult & { reports?: Readonly<Record<string, string>> }} Reply The runner's reply, with the reports asked */

/** The text compared by "a test passes": end-of-line spaces and final blank lines dropped. @param {string} t */
const compared = t =>
  t
    .split('\n')
    .map(l => l.replace(/[ \t\r]+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')

/**
 * What one run gave by an item's form: the output or the count, the sanitizer's report, and
 * whether it ended cleanly.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {Reply} reply
 * @param {number} i the test
 */
function gave(item, reply, i) {
  if (!reply.compiled)
    return { compiled: false, out: '', printed: '', report: null, clean: false, error: reply.error }
  const run = reply.runs[i]
  const s = item.settings
  const text = `${run?.stdout ?? ''}${run?.stderr ?? ''}`
  const report = s.tool
    ? deviceReport(text, s.tool)
    : s.sanitize
      ? hostReport(run?.stderr ?? '')
      : null
  const stdout = s.tool
    ? (run?.stdout ?? '')
        .split('\n')
        .filter(l => !l.startsWith('========='))
        .join('\n')
    : (run?.stdout ?? '')
  const out =
    item.result === 'output' ? compared(stdout) : String(countOf(item.result, reply.reports ?? {}))
  const clean = Boolean(run?.finished) && (item.form === 'sanitizer' || run?.exit === 0)
  return { compiled: true, out, printed: compared(stdout), report, clean, error: run?.stderr ?? '' }
}

/**
 * The runs an item alone asks of the runner for a submit: the program on every example and
 * hidden test (run and sanitizer forms), at each stated level (flag form), or with the probe
 * lines (probes form); and the reference the same way, so a count that depends on the pin is
 * derived on this machine.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @returns {RunAsk[]}
 */
export function aloneAsks(item, code) {
  const asks = formAsks(item, code)
  const first = asks[0]
  // a reading task whose host code uses c++23 is asked at c++20 too, where it must be rejected
  // (a device program's host code by nvcc, which passes the level to g++)
  if (!item.newer?.length || item.form === 'orders' || !first) return asks
  return [
    ...asks,
    {
      ...first,
      tests: [],
      std: /** @type {const} */ ('c++20'),
      flags: [...(first.flags ?? []).filter(f => f !== '-c'), '-c']
    }
  ]
}

/**
 * The runs an item alone's own form asks.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @returns {RunAsk[]}
 */
function formAsks(item, code) {
  const file = item.device ? 'main.cu' : 'main.cpp'
  const tests = [...item.examples, ...item.tests].map(t => ({ input: t.input }))
  const base = {
    ...(item.device ? {} : { std: /** @type {const} */ ('c++23') }),
    ...item.settings,
    ...(item.result === 'output'
      ? {}
      : {
          report: [
            item.result.split(' ')[0] === 'nm'
              ? 'nm'
              : item.result.startsWith('sass')
                ? 'sass'
                : 'resource-usage'
          ]
        })
  }
  const ref = `${item.reference.join('\n')}\n`
  if (item.form === 'orders') {
    const mine = `${fillSlots(item.template ?? [], slotsTyped(item, code), item.device).join('\n')}\n`
    return [
      { files: { [file]: mine }, tests, ...base },
      { files: { [file]: ref }, tests, ...base }
    ]
  }
  if (item.form === 'run' || item.form === 'sanitizer')
    return [
      { files: { [file]: code }, tests, ...base },
      { files: { [file]: ref }, tests, ...base }
    ]
  if (item.form === 'flag')
    return Object.keys(item.expect ?? {}).map(std => ({
      files: { [file]: code },
      tests: [],
      ...base,
      ...(item.device ? {} : { std: asLevel(std) }),
      flags: [...(base.flags ?? []), '-c']
    }))
  const p = item.probes
  assert(p, 'A probes item holds its probes')
  const pick = (/** @type {readonly number[]} */ keep) =>
    p.lines.map((l, i) => (keep.includes(i + 1) ? l : '')).join('\n')
  const body = code.endsWith('\n') ? code : `${code}\n`
  return [p.accept, ...p.reject.map(n => [...p.accept, n])].map(keep => ({
    files: { [file]: `${body}${pick(keep)}\n` },
    tests: [],
    ...base,
    flags: [...(base.flags ?? []), '-c']
  }))
}

/**
 * @typedef {Readonly<{ files: Readonly<Record<string, string>>, tests: readonly { input: string }[] } & import('./check.logic.js').Settings & { report?: readonly string[], gdb?: Readonly<{ line: number, name: string }> }>} RunAsk One ask of the runner
 */

/**
 * An item alone judged from the runner's replies to `aloneAsks`: the passed and total, and the
 * first failure in the paper's words. `lines` are the lines typed with the program before the
 * run: where a flag item's compiler rejects it, or where a reading task's program uses c++23.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @param {readonly number[]} [lines]
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
export function aloneJudged(item, code, replies, lines = []) {
  const n = formAsks(item, code).length
  const j = formJudged(item, code, replies.slice(0, n), lines)
  if (aloneAsks(item, code).length === n) return j
  const old = replies[n]
  const at = old && !old.compiled ? errorLines(old.error, item.device ? 'main.cu' : 'main.cpp') : []
  return old && !old.compiled && sameLines(at, lines)
    ? { ...j, passed: j.passed + 1, total: j.total + 1 }
    : {
        ...j,
        right: false,
        total: j.total + 1,
        first: j.first ?? {
          level: 'c++20',
          expected: `rejected at ${linesSaid(lines)}`,
          given: old?.compiled ? 'accepted' : `rejected at ${linesSaid(at)}`
        }
      }
}

/**
 * Two sets of line numbers alike, in any order.
 * @param {readonly number[]} a
 * @param {readonly number[]} b
 */
const sameLines = (a, b) => {
  const x = [...new Set(a)].sort((p, q) => p - q)
  const y = [...new Set(b)].sort((p, q) => p - q)
  return x.length === y.length && x.every((v, i) => v === y[i])
}

/** @param {readonly number[]} lines */
const linesSaid = lines =>
  lines.length
    ? `line${lines.length > 1 ? 's' : ''} ${[...new Set(lines)].sort((p, q) => p - q).join(', ')}`
    : 'no line'

/**
 * An item alone judged by its own form.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @param {readonly number[]} lines
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function formJudged(item, code, replies, lines) {
  if (item.form === 'orders') return ordersJudged(item, code, replies)
  if (item.form === 'run' || item.form === 'sanitizer') return runJudged(item, replies)
  if (item.form === 'flag') return flagJudged(item, replies, lines)
  return probesJudged(item, code, replies)
}

/**
 * An orders item: judged as a sanitizer item, and each slot as stored.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function ordersJudged(item, code, replies) {
  {
    const run = runJudged({ ...item, form: 'sanitizer' }, replies)
    const typed = slotsTyped(item, code)
    const same = (/** @type {import('./track-decode.logic.js').Slot} */ s) => {
      const t = typed.find(x => x.n === s.n)
      return t?.order === s.order && (!item.device || t.scope === s.scope)
    }
    const slots = item.slots ?? []
    const wrong = slots.find(s => !same(s))
    const said = (/** @type {import('./track-decode.logic.js').Slot | undefined} */ s) =>
      s ? `${s.order}${item.device ? ` ${s.scope}` : ''}` : ''
    // the sanitizer silent and the stored permitted results forbid nothing: each slot as stored,
    // since each one step weaker is loud or forbidden, and any stronger is more than needed
    const first =
      run.first ??
      (wrong
        ? {
            slot: String(wrong.n),
            expected: said(wrong),
            given: said(typed.find(x => x.n === wrong.n))
          }
        : null)
    const passed = run.passed + slots.filter(same).length
    const total = run.total + slots.length
    return { right: run.right && !wrong, passed, total, first, error: run.error }
  }
}

/**
 * A run or sanitizer item: every test gives the reference's result cleanly, the sanitizer silent.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {readonly Reply[]} replies
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function runJudged(item, replies) {
  const [mine, ref] = replies
  {
    const tests = [...item.examples, ...item.tests]
    if (!mine?.compiled)
      return {
        right: false,
        passed: 0,
        total: tests.length,
        first: null,
        error: mine && !mine.compiled ? mine.error : ''
      }
    let passed = 0
    /** @type {Readonly<Record<string, string>> | null} */
    let first = null
    tests.forEach((t, i) => {
      const g = gave(item, mine, i)
      const r = ref?.compiled ? gave(item, ref, i) : null
      const want = r ? r.out : t.output
      // a counted item also prints: what it prints must be the reference's too
      const printedOk = item.result === 'output' || !r || g.printed === r.printed
      const ok = g.clean && g.out === want && printedOk && !(item.form === 'sanitizer' && g.report)
      if (ok) passed++
      else
        first ??= {
          input: t.input,
          expected: want,
          given: g.out,
          ...(g.report ? { report: `${g.report.kind}, line ${g.report.line}` } : {}),
          error: g.error
        }
    })
    return { right: passed === tests.length, passed, total: tests.length, first, error: '' }
  }
}

/**
 * A flag item: accepted or rejected at each stated level, a rejection right only when the
 * compiler's errors fall at exactly the lines typed.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {readonly Reply[]} replies
 * @param {readonly number[]} lines
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function flagJudged(item, replies, lines) {
  const levels = Object.entries(item.expect ?? {})
  const file = item.device ? 'main.cu' : 'main.cpp'
  let passed = 0
  /** @type {Readonly<Record<string, string>> | null} */
  let first = null
  levels.forEach(([level, want], i) => {
    const r = replies[i]
    const at = r && !r.compiled ? errorLines(r.error, file) : []
    const got = r?.compiled ? 'accept' : 'reject'
    if (got === want && (want === 'accept' || sameLines(at, lines))) passed++
    else
      first ??= {
        level,
        expected: want === 'accept' ? 'accepted' : `rejected at ${linesSaid(lines)}`,
        given: got === 'accept' ? 'accepted' : `rejected at ${linesSaid(at)}`,
        error: r && !r.compiled ? r.error : ''
      }
  })
  return { right: passed === levels.length, passed, total: levels.length, first, error: '' }
}

/**
 * A probes item: every accepted line compiles, each rejected line fails at its own line.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function probesJudged(item, code, replies) {
  const p = item.probes
  assert(p, 'A probes item holds its probes')
  const offset = (code.endsWith('\n') ? code : `${code}\n`).split('\n').length - 1
  let passed = 0
  /** @type {Readonly<Record<string, string>> | null} */
  let first = null
  const all = replies[0]
  if (all?.compiled) passed++
  else
    first = {
      probe: p.accept.map(n => `line ${n}`).join(', '),
      expected: 'accepted',
      given: 'rejected',
      error: all && !all.compiled ? all.error : ''
    }
  p.reject.forEach((n, i) => {
    const r = replies[i + 1]
    const at =
      r && !r.compiled
        ? errorLines(r.error, item.device ? 'main.cu' : 'main.cpp').map(e => e - offset)
        : []
    if (r && !r.compiled && at.includes(n)) passed++
    else
      first ??= {
        probe: `line ${n}`,
        expected: 'rejected at its own line',
        given: r?.compiled ? 'accepted' : `rejected at ${at.map(a => `line ${a}`).join(', ')}`,
        error: r && !r.compiled ? r.error : ''
      }
  })
  return {
    right: passed === 1 + p.reject.length,
    passed,
    total: 1 + p.reject.length,
    first,
    error: ''
  }
}

/**
 * The orders and scopes typed on an orders item, from its kept text: `{ "1": { order, scope } }`.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @returns {import('./track-decode.logic.js').Slot[]}
 */
export function slotsTyped(item, code) {
  /** @type {Record<string, { order?: unknown, scope?: unknown }>} */
  let raw = {}
  try {
    const parsed = JSON.parse(code || '{}')
    if (parsed && typeof parsed === 'object') raw = parsed
  } catch {
    raw = {}
  }
  return (item.slots ?? []).map(s => {
    const t = raw[String(s.n)] ?? {}
    return {
      ...s,
      order: typeof t.order === 'string' ? t.order : '',
      scope: typeof t.scope === 'string' ? t.scope : ''
    }
  })
}

/**
 * An orders item's program with each slot's order and scope written in.
 * @param {readonly string[]} lines
 * @param {readonly import('./track-decode.logic.js').Slot[]} slots
 * @param {boolean} device
 */
export const fillSlots = (lines, slots, device) =>
  lines.map(l =>
    l
      .replace(
        /ORDER_(\d+)/g,
        (_, n) =>
          `${device ? 'cuda' : 'std'}::memory_order_${slots.find(x => x.n === Number(n))?.order || 'seq_cst'}`
      )
      .replace(
        /SCOPE_(\d+)/g,
        (_, n) => `cuda::thread_scope_${slots.find(x => x.n === Number(n))?.scope || 'system'}`
      )
  )

// The scans of stage 7 ("Scans": from the day its kind is retired, a scan runs over every track
// answer you write; a hit makes the answer wrong and shows the rule's number and the line)

/**
 * The scans that read an answer to a track item: every retired stage 7 kind's, and a stage 7
 * kind's own on its own items, less any rule the item's statement asks to break. A witness of a
 * stage 7 kind is read by every scan that reads answers; probe lines by the patterns alone; an input
 * and an orders item type no program.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track' | 'trackReading'>} record
 * @param {import('./track-decode.logic.js').TrackAsked} item
 * @param {import('./track-decode.logic.js').AloneItem} content
 * @returns {import('./scan.logic.js').Scan[]}
 */
export function scansOver(kinds, record, item, content) {
  // a kind once retired keeps its scan, also while a reading has opened it again
  const once = (/** @type {string} */ id) =>
    Boolean(trackLine(record, id)?.retired) || record.trackReading.reopened.includes(id)
  const reads = kinds.flatMap(k => (k.scan && (k.id === item.kind || once(k.id)) ? [k.scan] : []))
  const free = reads.filter(s => !(content.exempt ?? []).includes(s.rule))
  if (item.unit !== 'witness') return content.form === 'orders' ? [] : free
  // a witness is an input (no program), probe lines (read by the patterns alone) or a stage 7
  // witness program (every scan, its own kind's first)
  if (content.witness.kind === 'input') return []
  if (content.witness.kind === 'probe')
    return free.flatMap(s =>
      s.pattern
        ? [{ rule: s.rule, pattern: s.pattern, ...(s.flags ? { flags: s.flags } : {}) }]
        : []
    )
  return reads
}

/**
 * The asks of a submit with the warnings the scans read added to its first compile, whose
 * compiler text comes back with it.
 * @param {readonly RunAsk[]} asks
 * @param {readonly import('./scan.logic.js').Scan[]} scans
 * @param {boolean} device
 * @returns {RunAsk[]}
 */
export function withScans(asks, scans, device) {
  const flags = scanFlags(scans, device)
  const first = asks[0]
  if (!first || !flags.length) return [...asks]
  const file = Object.keys(first.files)[0] ?? 'main.cpp'
  // the compile the scan was entered on: the answer alone at c++23 (nvcc's level on the device)
  // with the warnings, after every ask the item's own judging reads
  return [
    ...asks,
    {
      files: { [file]: first.files[file] ?? '' },
      tests: [],
      ...(device ? { device: true } : { std: /** @type {const} */ ('c++23') }),
      flags: ['-c', ...flags],
      report: ['resource-usage']
    }
  ]
}

/**
 * A judged answer with the scans' hits read from the typed program and its first compile: a hit
 * makes it wrong and names the rule and the line.
 * @template {{ right: boolean }} J
 * @param {J} judged
 * @param {readonly import('./scan.logic.js').Scan[]} scans
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @param {boolean} device
 * @returns {J & { scan?: string }}
 */
export function scanned(judged, scans, code, replies, device) {
  if (!scans.length) return judged
  const said = scanFlags(scans, device).length
    ? (replies.at(-1)?.reports?.['resource-usage'] ?? '')
    : ''
  const hit = scanHits(scans, code, said, device ? 'main.cu' : 'main.cpp')[0]
  // the scans count as one more check, so the two lines never say every check passed
  const counted = (/** @type {Record<string, unknown>} */ j) =>
    typeof j.total === 'number' && typeof j.passed === 'number'
      ? { total: j.total + 1, passed: j.passed + (hit ? 0 : 1) }
      : {}
  return hit
    ? { ...judged, ...counted(judged), right: false, scan: `${hit.rule} flags line ${hit.line}` }
    : { ...judged, ...counted(judged) }
}

/**
 * The runs a witness asks: the reference and the wrong version on the input typed, or each with
 * the probe lines typed at the end.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} typed
 * @returns {RunAsk[]}
 */
export function witnessAsks(item, typed) {
  const file = item.device ? 'main.cu' : 'main.cpp'
  const ref = `${item.reference.join('\n')}\n`
  const wrong = `${item.wrong.join('\n')}\n`
  const base = {
    ...(item.device ? {} : { std: /** @type {const} */ ('c++23') }),
    ...item.settings,
    ...(item.result === 'output'
      ? {}
      : {
          report: [
            item.result.split(' ')[0] === 'nm'
              ? 'nm'
              : item.result.startsWith('sass')
                ? 'sass'
                : 'resource-usage'
          ]
        })
  }
  if (item.witness.kind === 'scan')
    return [
      {
        files: { [file]: typed },
        tests: [],
        ...(item.device ? { device: true } : {}),
        flags: ['-c']
      }
    ]
  if (item.witness.kind === 'input')
    return [ref, wrong].map(code => ({
      files: { [file]: code },
      tests: [{ input: typed }],
      ...base
    }))
  const probe = typed.endsWith('\n') ? typed : `${typed}\n`
  const std = item.witness.level && !item.device ? { std: asLevel(item.witness.level) } : {}
  return [ref, wrong].map(code => ({
    files: { [file]: `${code}${probe}` },
    tests: [],
    ...base,
    ...std,
    flags: [...(base.flags ?? []), '-c']
  }))
}

/**
 * A witness judged: right when the right version gives its result cleanly and the wrong version
 * gives another by the item's form; a probe, when one accepts and the other rejects.
 * An orders item settled by its stored verdict (`forbids`) is judged by its stored results.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {readonly Reply[]} replies
 */
export function witnessJudged(item, replies) {
  const [r, w] = replies
  // a stage 7 witness: your program builds, and its scan is read on it by `scanned`
  if (item.witness.kind === 'scan')
    return {
      right: Boolean(r?.compiled),
      right_gave: r?.compiled ? 'builds' : 'no build',
      wrong_gave: '',
      error: r && !r.compiled ? r.error : ''
    }
  if (!r || !w) return { right: false, right_gave: '', wrong_gave: '' }
  if (item.witness.kind === 'probe') {
    const word = (/** @type {Reply} */ x) => (x.compiled ? 'accepted' : 'rejected')
    return { right: word(r) !== word(w), right_gave: word(r), wrong_gave: word(w) }
  }
  const a = gave(item, r, 0)
  const b = gave(item, w, 0)
  const loud = (/** @type {ReturnType<typeof gave>} */ g) =>
    g.report ? `${g.report.kind}, line ${g.report.line}` : ''
  const show = (/** @type {ReturnType<typeof gave>} */ g) =>
    !g.compiled ? 'no build' : loud(g) || (g.clean ? g.out : `${g.out} (it fails)`)
  const rightOk = a.compiled && a.clean && !a.report
  // an orders item settled by its stored verdict: the wrong version gives the reference's result
  // and the ones its weaker slot adds, which no run shows
  if (item.forbids) {
    const gives = [...new Set([a.out, ...item.forbids])]
    return {
      right: rightOk && gives.length > 1,
      right_gave: show(a),
      wrong_gave: gives.join(' or ')
    }
  }
  const differs = !b.compiled || !b.clean || Boolean(b.report) || b.out !== a.out
  return { right: rightOk && differs, right_gave: show(a), wrong_gave: show(b) }
}
