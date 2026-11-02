// Hides: how FSRS-6 schedules a dated list. A line is { date, ok }: the answer is Good when right, Again when
// wrong. The memory state is replayed from the lines on every answer, so the record keeps its
// shape, { date, right, next }, and no card carries a stored state. Pure functions over plain
// data, tested against the ts-fsrs 5.4.2 reference in tests/fsrs.test.mjs.

/** The 21 FSRS-6 weights. @type {readonly [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} */
const W = [
  0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835,
  0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542
]
const DECAY = -W[20]
const FACTOR = Math.exp(Math.log(0.9) / DECAY) - 1
const S_MIN = 0.001
const S_MAX = 36500

/**
 * A memory state: the stability in days and the difficulty from 1 to 10.
 * @typedef {{ s: number, d: number }} Memory
 */

/**
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 */
const clamp = (x, lo, hi) => Math.min(Math.max(x, lo), hi)
/**
 * @param {string} a
 * @param {string} b
 */
const days = (a, b) => Math.max(1, Math.round((Date.parse(b) - Date.parse(a)) / 86400000))

/**
 * The chance of recalling after `t` days at stability `s`.
 * @param {number} t
 * @param {number} s
 */
export const recallChance = (t, s) => (1 + (FACTOR * t) / s) ** DECAY

/** @param {number} g */
const startDifficulty = g => W[4] - Math.exp((g - 1) * W[5]) + 1

/**
 * The memory state after the next answer: Good is grade 3, Again grade 1.
 * @param {Memory} state
 * @param {number} t
 * @param {boolean} ok
 * @returns {Memory}
 */
function step({ s, d }, t, ok) {
  const g = ok ? 3 : 1
  const r = recallChance(t, s)
  const damped = d + (-W[6] * (g - 3) * (10 - d)) / 9
  const nextD = clamp(W[7] * startDifficulty(4) + (1 - W[7]) * damped, 1, 10)
  const gained = s * (1 + Math.exp(W[8]) * (11 - d) * s ** -W[9] * (Math.exp((1 - r) * W[10]) - 1))
  const kept = W[11] * d ** -W[12] * ((s + 1) ** W[13] - 1) * Math.exp((1 - r) * W[14])
  const nextS = ok
    ? clamp(gained, S_MIN, S_MAX)
    : clamp(s / Math.exp(W[17] * W[18]), S_MIN, clamp(kept, S_MIN, S_MAX))
  return { s: nextS, d: nextD }
}

/**
 * The memory state after a history of `{ date, ok }` lines, oldest first; null for none.
 * @param {{ date: string, ok: boolean }[]} history
 * @returns {Memory | null}
 */
export function memory(history) {
  /** @type {Memory | null} */
  let m = null
  /** @type {string | null} */
  let prev = null
  for (const { date, ok } of history) {
    const g = ok ? 3 : 1
    m =
      m === null || prev === null
        ? { s: Math.max(W[ok ? 2 : 0], 0.1), d: clamp(startDifficulty(g), 1, 10) }
        : step(m, days(prev, date), ok)
    prev = date
  }
  return m
}

/**
 * Whole days until the item falls to `retention`, at least one. `history` ends with the answer
 * just given.
 * @param {{ date: string, ok: boolean }[]} history
 * @param {number} retention
 */
export function intervalDays(history, retention) {
  const m = memory(history)
  if (!m) return 1
  const modifier = (retention ** (1 / DECAY) - 1) / FACTOR
  return clamp(Math.round(m.s * modifier), 1, S_MAX)
}
