// Hides: how the language track's material and record enter the C++ unit's code: the shapes the generator wrote for the track's kinds and items, the ids of its items
// and their one constructor, the track's fields of the record decoded with what a hand edit left
// odd read as absent, and a level or a judged item's first failure read from stored text.
import { assert } from '../../../kernel/invariant.logic.js'

// The track's material, as the generator wrote it (core/track.gen.js, content/t<stage>.gen.js)

/** @typedef {string & { readonly brand: 'TrackId' }} TrackId A track item's id: t, the kind, the unit's letter and its place, "t1.04v1", "t1.04c", "t1.04a2", "t1.04w2" */
/** @typedef {'verdict' | 'count' | 'alone' | 'witness'} Unit A track item's unit; the worked example is never dated */
/**
 * A track kind as the shape file holds it.
 * @typedef {Readonly<{ id: string, stage: number, name: string, part: string, after: readonly string[], clause: readonly string[], levels: readonly import('./check.logic.js').Level[], device: boolean, verdicts: readonly string[], count: string | null, alones: readonly string[] }>} TrackKind
 */
/** @typedef {Readonly<{ n: number, title: string, book: string }>} Stage */
/** @typedef {Readonly<{ verdict: string, lines?: readonly number[], by?: string }>} Answer One level's stored verdict */
/** @typedef {Readonly<{ compiled: boolean, errors: readonly number[], said: string, stdout: string, exit?: number | null, report: import('./check.logic.js').Report | null }>} Seen What g++ and the sanitizer gave at one level when the item entered */
/** @typedef {Readonly<{ id: string, lines: readonly string[], device: boolean, levels: readonly string[], answers: Readonly<Record<string, Answer>>, results?: readonly string[], seen: Readonly<Record<string, Seen>>, derivations?: readonly string[] }>} VerdictItem */
/** @typedef {Readonly<{ id: string, lines: readonly string[], device: boolean, columns: readonly string[], rows: readonly Readonly<{ line: number, values: readonly number[] }>[], settings: import('./check.logic.js').Settings }>} CountItem */
/**
 * An item alone, with its wrong version and the sample witness that entered it (never shown).
 * @typedef {Readonly<{ id: string, form: 'run' | 'sanitizer' | 'flag' | 'probes' | 'orders', statement: readonly string[], device: boolean, settings: import('./check.logic.js').Settings, result: string, reference: readonly string[], wrong: readonly string[], examples: readonly Readonly<{ input: string, output: string }>[], tests: readonly Readonly<{ input: string, output: string }>[], expect?: Readonly<Record<string, 'accept' | 'reject'>>, probes?: Readonly<{ lines: readonly string[], accept: readonly number[], reject: readonly number[] }>, witness: Readonly<{ kind: 'input' | 'probe', text: string, level?: string }>, template?: readonly string[], slots?: readonly Slot[] }>} AloneItem
 */
/**
 * An atomic operation of an orders item whose order and scope the learner types: its number in the program (ORDER_n, SCOPE_n), the operation, and the order and scope stored.
 * @typedef {Readonly<{ n: number, op: string, order: string, scope: string }>} Slot
 */
/** @typedef {Readonly<{ id: string, source: string, example: Readonly<{ lines: readonly string[], labels: readonly Readonly<{ at: number, level: 0 | 1 | 2, text: string }>[] }>, verdicts: readonly VerdictItem[], count: CountItem | null, alones: readonly AloneItem[] }>} TrackContent One kind's content */

/** @param {string} text */
const trackId = text => /** @type {TrackId} */ (text)

/**
 * Whether an id names a track item.
 * @param {string} id
 */
export const isTrackItem = id => /^t\d\.\d\d[vcaw]\d*$/.test(id)

/**
 * A track item's kind and unit, by its id.
 * @param {string} id
 * @returns {{ kind: string, unit: Unit, n: number }}
 */
export function partsOf(id) {
  const m = id.match(/^t(\d\.\d\d)([vcaw])(\d*)$/)
  assert(m, `A track item's id: ${id}`)
  const unit = /** @type {Unit} */ (
    { v: 'verdict', c: 'count', a: 'alone', w: 'witness' }[m[2] ?? 'v']
  )
  return { kind: m[1] ?? '', unit, n: Number(m[3] || 1) }
}

/** The units in the paper's order, the worked example left out since it is never dated. */
export const UNIT_ORDER = ['verdict', 'count', 'alone', 'witness']

/**
 * A kind's items: its verdict items, its count item, its items alone and a witness for each.
 * @param {TrackKind} k
 */
export const itemsOf = k => [
  ...k.verdicts,
  ...(k.count ? [k.count] : []),
  ...k.alones,
  ...k.alones.map(a => a.replace(/a(\d+)$/, 'w$1'))
]

// The record's track fields

/** @typedef {'example' | 'verdict' | 'count' | 'alone' | 'witness'} Step The next part of a track kind's run */
/** @typedef {Readonly<{ kind: string, opened: string, retired: string, part: Step, round: number }>} TrackLine A track kind's state; `round` the set of items its run is at, 0 for the first run, one more after each No at gate C */
/** @typedef {Readonly<{ id: string, date: string, right: boolean }>} TrackTry A track item's first try */
/** @typedef {Readonly<{ day: string, side: 'course' | 'track' }>} Side The side of the last session studied */
/** @typedef {Readonly<{ gcc: string, nvcc: string, gdb: string, level: string, driver: string, device: string, cc: string, memory: number }>} Pin What Setup stored: the versions, the driver, the device and its memory, nvcc's highest level */
/**
 * The track's part of the C++ record.
 * @typedef {Readonly<{ track: readonly TrackLine[], trackTries: readonly TrackTry[], trackTurn: 'B' | 'C' | null, side: Side | null, pin: Pin | null }>} TrackRecord
 */

/** @type {readonly Step[]} */
const STEPS = ['example', 'verdict', 'count', 'alone', 'witness']

/**
 * The track's state in step with its kinds: one line per kind in track order, as stored or begun
 * afresh at its worked example.
 * @param {unknown} raw
 * @param {readonly TrackKind[]} kinds
 * @returns {TrackLine[]}
 */
function trackLines(raw, kinds) {
  const had = new Map(
    (Array.isArray(raw) ? raw : []).flatMap(c => (c && typeof c === 'object' ? [[c.kind, c]] : []))
  )
  return kinds.map(k => {
    const was = had.get(k.id)
    const text = (/** @type {unknown} */ x) => (typeof x === 'string' ? x : '')
    const part = STEPS.find(p => p === was?.part) ?? 'example'
    const round = Number.isInteger(was?.round) && was.round >= 0 ? was.round : 0
    return { kind: k.id, opened: text(was?.opened), retired: text(was?.retired), part, round }
  })
}

/**
 * The track's fields decoded: what a hand edit left odd reads as absent.
 * @param {Record<string, unknown>} r
 * @param {readonly TrackKind[]} kinds
 * @returns {TrackRecord}
 */
export function decodeTrack(r, kinds) {
  const held = new Set(kinds.flatMap(itemsOf))
  const side =
    r.side && typeof r.side === 'object' ? /** @type {Record<string, unknown>} */ (r.side) : null
  return {
    track: trackLines(r.track, kinds),
    trackTries: /** @type {TrackTry[]} */ (
      (Array.isArray(r.trackTries) ? r.trackTries : []).filter(
        t => t && typeof t === 'object' && held.has(t.id) && typeof t.date === 'string'
      )
    ),
    trackTurn: r.trackTurn === 'B' || r.trackTurn === 'C' ? r.trackTurn : null,
    side:
      side && typeof side.day === 'string' && (side.side === 'course' || side.side === 'track')
        ? { day: side.day, side: side.side }
        : null,
    pin:
      r.pin &&
      typeof r.pin === 'object' &&
      typeof (/** @type {Record<string, unknown>} */ (r.pin).gcc) === 'string'
        ? /** @type {Pin} */ (r.pin)
        : null
  }
}

/**
 * A track item asked: in step A (due), B (mixed practice) or C (the open kind's run).
 * @typedef {Readonly<{ n: 'A' | 'B' | 'C', step: 'track', id: TrackId, kind: string, unit: Unit }>} TrackAsked
 * @typedef {Readonly<{ n: 'C', step: 'track-example', kind: string }>} TrackExample The open kind's worked example
 * @typedef {Readonly<{ n: 'C', step: 'track-waits', kind: string }>} TrackWaits The open kind needs a fresh item it does not hold
 * @typedef {Readonly<{ n: 'C', step: 'track-setup' }>} TrackSetup The track's Setup, before its first session
 */

/**
 * A track item asked in a step, by its id.
 * @param {string} id
 * @param {'A' | 'B' | 'C'} n
 * @returns {TrackAsked}
 */
export const trackAsked = (id, n) => {
  const { kind, unit } = partsOf(id)
  return { n, step: 'track', id: trackId(id), kind, unit }
}

/**
 * A level named in stored text, or c++23 for one that is not.
 * @param {string} text
 * @returns {import('./check.logic.js').Level}
 */
export const asLevel = text =>
  /** @type {import('./check.logic.js').Level} */ (
    ['c++11', 'c++14', 'c++17', 'c++20', 'c++23'].includes(text) ? text : 'c++23'
  )

/**
 * A stage's content module (content/t<stage>.gen.js), whose every field the generator checked.
 * @param {{ KINDS: unknown }} module
 * @returns {Readonly<Record<string, TrackContent>>}
 */
export const stageOf = module =>
  /** @type {Readonly<Record<string, TrackContent>>} */ (module.KINDS)

/**
 * The text fields of a judged item's first failure, as the record keeps it, or null.
 * @param {Readonly<Record<string, unknown>> | null} verdict
 * @returns {Readonly<Record<string, string>> | null}
 */
export function firstOf(verdict) {
  const first = verdict?.first
  if (!first || typeof first !== 'object') return null
  /** @type {Record<string, string>} */
  const out = {}
  for (const [k, v] of Object.entries(first))
    if (typeof v === 'string' || typeof v === 'number') out[k] = String(v)
  return out
}
