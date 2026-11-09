// Hides: the part of the record every maths unit keeps the same way, and mixed practice over it
// (Mathematics, "The checks"): its fields as stored, read once into their types (`decodePractice`),
// and the day's order of problems, the one copy every maths unit runs. Pure functions over plain
// data, tested in tests/study-practice.test.mjs.
import { addDays, nextOf } from './days.logic.js'
import { isRecord } from './decode.logic.js'
import { assert } from './invariant.logic.js'
import { kindId, problemId, topicSlug } from './maths-decode.logic.js'

/**
 * Where a kind stands in its worked example and its fading: the form, the stage (1 the worked
 * example, 2 and 3 fading, 4 alone), the count of fading problems taken, the line shown, the
 * problem a stage runs on, the streak of alone-solves right in a row, whether a wrong answer's
 * solution is shown (kept in the record by a unit that keeps it there), whether the line's reason or
 * the problem's answer is shown (`open`, until the next move), and the day it was last met.
 * @typedef {Readonly<{
 *   form: number,
 *   stage: 1 | 2 | 3 | 4,
 *   next: number,
 *   line: number,
 *   problem?: import('./maths-decode.logic.js').ProblemId | null,
 *   streak?: number,
 *   shown?: boolean,
 *   open?: boolean,
 *   day: string
 * }>} StagePlace
 */
/** A kind met with no place kept, as a retired kind or an idea marked wrong: its day. @typedef {Readonly<{ day: string }>} StageMet */
/** @typedef {StagePlace | StageMet} StageEntry */

/** Where a mixed-practice problem in hand stands: marked right or wrong, its proof shown, or its answer shown and the mark asked. @typedef {'right' | 'wrong' | 'proof' | 'shown'} MixPhase */

/**
 * The record every mathematics unit keeps: the dated lines of each retired kind (after its first,
 * which is read from `retired`) and of each problem answered wrong or of a lost question, the
 * problems used in fading, tried first or answered right the first time, where each kind stands,
 * each topic's try-first day, the retired kinds with their day, the kind answered last today, the
 * problem in hand in mixed practice, the item in view of each run of pages, and the retired kinds
 * with no never-tried problem left (`short`, for the material's author), and what is typed in an
 * answer field not yet checked or marked (`draft`), by the kind or problem it answers. A unit's own fields sit beside these in its part. An older Review page
 * put sample items in the record and named them in `sample`: they are read as not there, and the
 * next write drops them and the name.
 * @typedef {Readonly<{
 *   list?: Readonly<Partial<Record<import('./maths-decode.logic.js').ProblemId | import('./maths-decode.logic.js').KindId, readonly import('./days.logic.js').Line[]>>> | undefined,
 *   used?: readonly import('./maths-decode.logic.js').ProblemId[] | undefined,
 *   stage?: Readonly<Partial<Record<import('./maths-decode.logic.js').KindId, StageEntry>>> | undefined,
 *   gate?: Readonly<Partial<Record<import('./maths-decode.logic.js').TopicSlug, Readonly<{ tried: string }>>>> | undefined,
 *   retired?: Readonly<Partial<Record<import('./maths-decode.logic.js').KindId, string>>> | undefined,
 *   lastKind?: Readonly<{ day: string, kind: import('./maths-decode.logic.js').KindId }> | undefined,
 *   mix?: Readonly<{ day: string, id: import('./maths-decode.logic.js').ProblemId, phase: MixPhase }> | null | undefined,
 *   pages?: Readonly<Partial<Record<string, number>>> | undefined,
 *   short?: readonly import('./maths-decode.logic.js').KindId[] | undefined,
 *   draft?: Readonly<Partial<Record<string, string>>> | undefined,
 *   sample?: undefined
 * }>} PracticeRecord
 */

/** A problem as mixed practice orders it. @typedef {Readonly<{ id: import('./maths-decode.logic.js').ProblemId, kind: import('./maths-decode.logic.js').KindId, answer?: unknown }>} Practised */

/**
 * A marked question that lost marks, as it returns in mixed practice: the title of its piece of
 * marked work, its label, the marks it got of how many, and whether the module's computer marked it.
 * @typedef {Readonly<{
 *   id: import('./maths-decode.logic.js').ProblemId,
 *   kind: import('./maths-decode.logic.js').KindId,
 *   piece: string,
 *   typed: boolean,
 *   label: string,
 *   got: number,
 *   of: number
 * }>} LostQuestion
 */

/** A topic as mixed practice reads it: its slug and its kinds. @typedef {Readonly<{ slug: import('./maths-decode.logic.js').TopicSlug, kinds: readonly Readonly<{ id: import('./maths-decode.logic.js').KindId }>[] }>} PracticeTopic */

/**
 * @param {unknown} v
 * @returns {v is import('./days.logic.js').Line}
 */
const isLine = v =>
  isRecord(v) &&
  typeof v.date === 'string' &&
  typeof v.right === 'boolean' &&
  typeof v.next === 'string'

/**
 * The entries of a stored map whose values read, under keys made by `key`, but for the keys in
 * `drop`; nothing when it is not a map.
 * @template {string} K, V
 * @param {unknown} v
 * @param {(k: string) => K} key
 * @param {(x: unknown) => V | undefined} read
 * @param {ReadonlySet<string>} [drop]
 * @returns {Readonly<Partial<Record<K, V>>> | undefined}
 */
export function mapOf(v, key, read, drop) {
  if (!isRecord(v)) return undefined
  /** @type {Partial<Record<K, V>>} */
  const out = {}
  for (const [k, x] of Object.entries(v)) {
    if (drop?.has(k)) continue
    const value = read(x)
    if (value !== undefined) out[key(k)] = value
  }
  return out
}

/**
 * @param {unknown} v
 * @returns {readonly import('./days.logic.js').Line[] | undefined}
 */
export const linesOf = v => (Array.isArray(v) ? v.filter(isLine) : undefined)

/**
 * The strings of a stored list, each made by `id`.
 * @template {string} T
 * @param {unknown} v
 * @param {(s: string) => T} id
 * @returns {readonly T[] | undefined}
 */
const idsOf = (v, id) =>
  Array.isArray(v) ? v.filter(x => typeof x === 'string').map(id) : undefined

/**
 * @param {unknown} v
 * @returns {StageEntry | undefined}
 */
function stageOf(v) {
  if (!isRecord(v)) return undefined
  const day = typeof v.day === 'string' ? v.day : ''
  const { form, stage, next, line } = v
  if (
    typeof form === 'number' &&
    (stage === 1 || stage === 2 || stage === 3 || stage === 4) &&
    typeof next === 'number' &&
    typeof line === 'number'
  ) {
    /** @type {StagePlace} */
    const place = {
      form,
      stage,
      next,
      line,
      day,
      ...(typeof v.problem === 'string' ? { problem: problemId(v.problem) } : {}),
      ...(v.problem === null ? { problem: null } : {}),
      ...(typeof v.streak === 'number' ? { streak: v.streak } : {}),
      ...(typeof v.shown === 'boolean' ? { shown: v.shown } : {}),
      ...(v.open === true ? { open: true } : {})
    }
    return place
  }
  return day ? { day } : undefined
}

/**
 * @param {unknown} v
 * @returns {PracticeRecord['mix']}
 */
function mixOf(v) {
  if (v === null) return null
  if (!isRecord(v) || typeof v.day !== 'string' || typeof v.id !== 'string') return undefined
  const { phase } = v
  return phase === 'right' || phase === 'wrong' || phase === 'proof' || phase === 'shown'
    ? { day: v.day, id: problemId(v.id), phase }
    : undefined
}

/**
 * The ids an older Review page's sample put in one field of the part (`sample.list`, `sample.proofs`).
 * @param {import('./decode.logic.js').JsonRecord} json
 * @param {string} field
 * @returns {ReadonlySet<string>}
 */
export const sampled = (json, field) =>
  new Set(isRecord(json.sample) ? (idsOf(json.sample[field], String) ?? []) : [])

/**
 * The fields every maths unit keeps, as stored, read into their types: a field that is missing or
 * not of its shape reads as not there, and an entry not of its shape is left out, so a damaged
 * field reads as not done. The part's other fields are kept as they are, for the unit's own decoder.
 * @param {import('./decode.logic.js').JsonRecord} json
 * @returns {PracticeRecord}
 */
export function decodePractice(json) {
  const { lastKind } = json
  return {
    list: mapOf(json.list, problemId, linesOf, sampled(json, 'list')),
    used: idsOf(json.used, problemId),
    stage: mapOf(json.stage, kindId, stageOf),
    gate: mapOf(json.gate, topicSlug, g =>
      isRecord(g) && typeof g.tried === 'string' ? { tried: g.tried } : undefined
    ),
    retired: mapOf(json.retired, kindId, d => (typeof d === 'string' ? d : undefined)),
    lastKind:
      isRecord(lastKind) && typeof lastKind.day === 'string' && typeof lastKind.kind === 'string'
        ? { day: lastKind.day, kind: kindId(lastKind.kind) }
        : undefined,
    mix: mixOf(json.mix),
    pages: mapOf(json.pages, k => k, n => (typeof n === 'number' ? n : undefined)),
    short: idsOf(json.short, kindId),
    draft: mapOf(json.draft, k => k, t => (typeof t === 'string' ? t : undefined)),
    sample: undefined
  }
}

/**
 * A kind not yet begun: the first form's worked example, its first line.
 * @type {StagePlace}
 */
export const START = { form: 0, stage: 1, next: 0, line: 0, day: '' }

/**
 * Where a kind stands: its place, or the start when none is kept.
 * @param {PracticeRecord} record
 * @param {import('./maths-decode.logic.js').KindId} kind
 * @returns {StagePlace}
 */
export function placeOf(record, kind) {
  const entry = record.stage?.[kind]
  return entry && 'form' in entry ? entry : START
}

/**
 * A problem never tried: it has no line on the dated list and was never used in fading or tried first.
 * @param {Readonly<{ id: import('./maths-decode.logic.js').ProblemId }>} p
 * @param {PracticeRecord} record
 */
export const neverTried = (p, record) => !record.list?.[p.id]?.length && !record.used?.includes(p.id)

/**
 * A kind whose bank answers are all Yes or No (Mathematics, "Gate 2"): a guess is right half the
 * time, so it retires only after two fresh alone-solves right in a row.
 * @param {import('./maths-decode.logic.js').KindId} kind
 * @param {readonly Practised[]} bank
 */
export const yesNoKind = (kind, bank) => {
  const own = bank.filter(p => p.kind === kind)
  return own.length > 0 && own.every(p => p.answer === 'Yes' || p.answer === 'No')
}

/**
 * The items in an order drawn with `random`, a number from 0 up to 1 each time (Fisher-Yates).
 * @template {{}} T
 * @param {readonly T[]} items
 * @param {() => number} random
 * @returns {T[]}
 */
export function shuffle(items, random) {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    const a = out[i]
    const b = out[j]
    assert(a !== undefined && b !== undefined, 'a shuffle swaps two places inside the list')
    out[i] = b
    out[j] = a
  }
  return out
}

/**
 * The dated lines of a retired kind: its first, read from the day it retired (right, back the next
 * day), then the lines stored under its id. A kind not retired has only its stored lines.
 * @param {PracticeRecord} record
 * @param {import('./maths-decode.logic.js').KindId} kind
 * @returns {readonly import('./days.logic.js').Line[]}
 */
export function kindLines(record, kind) {
  const retired = record.retired?.[kind]
  const stored = record.list?.[kind] ?? []
  return retired ? [{ date: retired, right: true, next: addDays(retired, 1) }, ...stored] : stored
}

/**
 * What mixed practice brings back, with the day each is next due: every retired kind that has a
 * problem in the bank (`kind`), and every lost question that keeps lines of its own (`problem`).
 * A kind retired and never drawn has only its first line, so it falls due the day after it
 * retired. A bank problem keeps its lines but brings back nothing of itself: it returns through
 * its kind.
 * @template {Practised} P
 * @template {Practised} Q
 * @param {readonly P[]} bank
 * @param {PracticeRecord} record
 * @param {readonly Q[]} [lost]
 * @returns {{ id: string, on: string, kind?: import('./maths-decode.logic.js').KindId, problem?: Q }[]}
 */
export function returns(bank, record, lost = []) {
  const retired = [...new Set(bank.map(p => p.kind))].filter(k => record.retired?.[k])
  return [
    ...retired.map(kind => ({ id: kind, on: nextOf(kindLines(record, kind)) ?? '', kind })),
    ...lost
      .filter(p => record.list?.[p.id]?.length)
      .map(problem => ({ id: problem.id, on: nextOf(record.list?.[problem.id]) ?? '', problem }))
  ]
}

/**
 * The item of `items` whose `date` is earliest, the first of them on a tie.
 * @template T
 * @param {readonly T[]} items
 * @param {(item: T) => string} date
 * @returns {T | undefined}
 */
function earliest(items, date) {
  /** @type {T | undefined} */
  let best
  for (const item of items) if (best === undefined || date(item) < date(best)) best = item
  return best
}

/**
 * The problem a due kind draws: its own problem last answered wrong, the one wrong longest ago
 * where it has several; else a never-tried problem; else the problem seen longest ago, one with
 * no line of its own counting as seen before any other.
 * @template {Practised} P
 * @param {readonly P[]} bank
 * @param {PracticeRecord} record
 * @param {import('./maths-decode.logic.js').KindId} kind
 * @returns {P | undefined}
 */
export function draw(bank, record, kind) {
  const own = bank.filter(p => p.kind === kind)
  /** @param {P} p */
  const last = p => record.list?.[p.id]?.at(-1)
  return (
    earliest(
      own.filter(p => last(p)?.right === false),
      p => last(p)?.date ?? ''
    ) ??
    own.find(p => neverTried(p, record)) ??
    earliest(own, p => last(p)?.date ?? '')
  )
}

/**
 * Ids compared part by part, numbers as numbers: t2-k1 before t10-k1.
 * @param {string} a
 * @param {string} b
 */
const byId = (a, b) => a.localeCompare(b, 'en', { numeric: true })

/**
 * The day's problems: one for each kind due today, and each lost question due, the date furthest
 * past first and ties by id. Nothing is drawn for a kind not due.
 * @template {Practised} P
 * @template {Practised} Q
 * @param {readonly P[]} bank
 * @param {PracticeRecord} record
 * @param {string} today
 * @param {readonly Q[]} [lost]
 * @returns {(P | Q)[]}
 */
export function practiceOrder(bank, record, today, lost = []) {
  return returns(bank, record, lost)
    .filter(x => x.on <= today)
    .sort((a, b) => (a.on === b.on ? byId(a.id, b.id) : a.on < b.on ? -1 : 1))
    .flatMap(x => {
      const p = x.problem ?? (x.kind && draw(bank, record, x.kind))
      return p ? [p] : []
    })
}

/**
 * The problem in hand in mixed practice today, of those `known`: answered and its mark shown, or
 * its proof or its answer shown. A mark with no line of today on its problem or its kind was never kept, so its
 * problem is not in hand.
 * @param {PracticeRecord} record
 * @param {string} day
 * @param {(id: import('./maths-decode.logic.js').ProblemId) => Practised | undefined} known
 */
export function inHand(record, day, known) {
  const mix = record.mix
  const problem = mix && mix.day === day ? known(mix.id) : undefined
  if (!mix || !problem) return null
  const kept = [record.list?.[problem.id], record.list?.[problem.kind]].some(
    lines => lines?.at(-1)?.date === day
  )
  return mix.phase === 'proof' || mix.phase === 'shown' || kept ? mix : null
}

/**
 * The kind answered last, when it was answered today.
 * @param {PracticeRecord} record
 * @param {string} day
 */
export const lastKind = (record, day) => (record.lastKind?.day === day ? record.lastKind.kind : undefined)

/**
 * Whether a part of the topic was taken on `today`, as the record stores it: a kind of the topic
 * with a stage dated today (its worked example, its fading, or the day it retired), or the
 * topic's try-first problem today. A unit with proofs adds the proofs and statements
 * (`proofsToday`).
 * @param {PracticeTopic} topic
 * @param {PracticeRecord} record
 * @param {string} today
 */
export const partToday = (topic, record, today) =>
  record.gate?.[topic.slug]?.tried === today || topic.kinds.some(k => record.stage?.[k.id]?.day === today)

/**
 * Where the learner stands, in one line: the open topic's place in the course, followed by its
 * title when `titleOf(slug)` gives one. `finished(topic)` says whether a topic is done.
 * @template {Readonly<{ slug: string }>} T
 * @param {readonly T[]} topics
 * @param {(topic: T) => boolean} finished
 * @param {(slug: string) => string | undefined} [titleOf]
 */
export function lessonPlace(topics, finished, titleOf = () => '') {
  const i = topics.findIndex(t => !finished(t))
  const open = topics[i]
  if (!open) return `All ${topics.length} lessons done.`
  const title = titleOf(open.slug)
  return `Lesson ${i + 1} of ${topics.length}${title ? `: ${title}` : ''}.`
}

/**
 * The next problem: the first in the day's order whose kind differs from the kind answered last
 * today. A kind follows itself only when every problem left is of that kind.
 * @template {Practised} P
 * @param {readonly P[]} order
 * @param {import('./maths-decode.logic.js').KindId | undefined} last
 * @returns {P | null}
 */
export function nextProblem(order, last) {
  return order.find(p => p.kind !== last) ?? order[0] ?? null
}

/**
 * Retired kinds with no never-tried problem left. They give no new problems until the owner builds more.
 * @param {readonly Practised[]} bank
 * @param {PracticeRecord} record
 */
export const shortKinds = (bank, record) =>
  Object.keys(record.retired ?? {})
    .map(kindId)
    .filter(k => !bank.some(p => p.kind === k && neverTried(p, record)))
