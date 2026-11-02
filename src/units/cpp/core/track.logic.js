// Hides: the C++ language track ("A Self-Study System", Programming, The language track, The
// track's material, The track's steps): when it opens, its kinds in stage order, its items and
// their ids, the side a Programming session belongs to, steps A, B and C with gates A and C, and
// how each track answer is judged against what the machine gave. Pure: the runner's replies come
// in, the next record goes out.
import { assert, unreachable } from '../../../kernel/invariant.logic.js'
import { isDue, nextOf, writeLine } from '../../../kernel/days.logic.js'
import { errorLines, hostReport, deviceReport } from './check.logic.js'
import {
  UNIT_ORDER,
  asLevel,
  isTrackItem,
  itemsOf,
  partsOf,
  trackAsked
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

/**
 * Step A: the track items due today, oldest date first; on one date, the kind earlier in the
 * track order, and within a kind the unit earlier in the list of units.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./decode.logic.js').CppRecord, 'recall'>} record
 * @param {string} day
 */
export function trackDue(kinds, record, day) {
  const order = new Map(kinds.map((k, i) => [k.id, i]))
  const rank = (/** @type {string} */ id) => {
    const p = partsOf(id)
    return [(order.get(p.kind) ?? 0) * 10 + UNIT_ORDER.indexOf(p.unit), p.n]
  }
  return Object.entries(record.recall)
    .flatMap(([id, lines]) => {
      const next = nextOf(lines)
      return isTrackItem(id) &&
        order.has(partsOf(id).kind) &&
        next !== undefined &&
        isDue(lines, day)
        ? [{ id, next, at: rank(id) }]
        : []
    })
    .sort((a, b) =>
      a.next < b.next
        ? -1
        : a.next > b.next
          ? 1
          : (a.at[0] ?? 0) - (b.at[0] ?? 0) || (a.at[1] ?? 0) - (b.at[1] ?? 0)
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
    .sort((a, b) => UNIT_ORDER.indexOf(partsOf(a).unit) - UNIT_ORDER.indexOf(partsOf(b).unit))
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
 * Step C: the open kind's run at its next part, at its round's items; null when every kind is
 * retired. A round past the items the kind holds waits for Eruko to write them.
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {Pick<import('./track-decode.logic.js').TrackRecord, 'track'>} record
 * @returns {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackExample | import('./track-decode.logic.js').TrackWaits | null}
 */
export function trackFirst(kinds, record) {
  const k = openTrackKind(kinds, record)
  const line = k && trackLine(record, k.id)
  if (!k || !line) return null
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
 * @returns {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackExample | import('./track-decode.logic.js').TrackWaits | null}
 */
export function trackAction(kinds, record, day) {
  const [due] = trackDue(kinds, record, day)
  if (due !== undefined) return trackAsked(due, 'A')
  const b = trackMixed(kinds, record)
  const c = trackFirst(kinds, record)
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
 * Gate A and what follows, for a track item answered in step A, B or C: every item answered
 * writes a line, right or wrong, from the day's first answer; a never-tried item keeps its first
 * try. In step C the run moves on, and after the witness gate C asks whether the item alone and
 * the witness were each right at the first submit: yes, the kind is retired and the next opens;
 * no, the next round starts at a fresh verdict item. The turn passes.
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
    recall: { ...record.recall, [item.id]: writeLine(record.recall[item.id], right, day) },
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
  // gate C reads the first submit of each: the item alone's first try, and the witness's
  const firstRight = (/** @type {string} */ id) => next.trackTries.find(t => t.id === id)?.right
  if (firstRight(item.id) && firstRight(alone)) {
    const at = kinds.indexOf(k)
    const after = kinds[at + 1]
    const retired = withLine(next, k.id, { retired: day })
    return after ? withLine(retired, after.id, { opened: day, part: 'example' }) : retired
  }
  return withLine(next, k.id, { part: 'verdict', round: line.round + 1 })
}

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
    return { compiled: false, out: '', report: null, clean: false, error: reply.error }
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
  return { compiled: true, out, report, clean, error: run?.stderr ?? '' }
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
 * first failure in the paper's words.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {string} code
 * @param {readonly Reply[]} replies
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
export function aloneJudged(item, code, replies) {
  if (item.form === 'orders') return ordersJudged(item, code, replies)
  if (item.form === 'run' || item.form === 'sanitizer') return runJudged(item, replies)
  if (item.form === 'flag') return flagJudged(item, replies)
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
      const want = ref?.compiled ? gave(item, ref, i).out : t.output
      const ok = g.clean && g.out === want && !(item.form === 'sanitizer' && g.report)
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
 * A flag item: accepted or rejected at each stated level.
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {readonly Reply[]} replies
 * @returns {{ right: boolean, passed: number, total: number, first: Readonly<Record<string, string>> | null, error: string }}
 */
function flagJudged(item, replies) {
  {
    const levels = Object.entries(item.expect ?? {})
    let passed = 0
    /** @type {Readonly<Record<string, string>> | null} */
    let first = null
    levels.forEach(([level, want], i) => {
      const r = replies[i]
      const got = r?.compiled ? 'accept' : 'reject'
      if (got === want) passed++
      else
        first ??= {
          level,
          expected: want === 'accept' ? 'accepted' : 'rejected',
          given: got === 'accept' ? 'accepted' : 'rejected',
          error: r && !r.compiled ? r.error : ''
        }
    })
    return { right: passed === levels.length, passed, total: levels.length, first, error: '' }
  }
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
 * @param {import('./track-decode.logic.js').AloneItem} item
 * @param {readonly Reply[]} replies
 */
export function witnessJudged(item, replies) {
  const [r, w] = replies
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
  const differs = !b.compiled || !b.clean || Boolean(b.report) || b.out !== a.out
  return { right: rightOk && differs, right_gave: show(a), wrong_gave: show(b) }
}
