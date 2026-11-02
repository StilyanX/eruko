// Hides: how a sheet of a generated line of arithmetic's end level is drawn (Mathematics, "The
// end level": Generated lines, Draw, Pool, Repeats, Spent pool, Spent draw, Match, Same problem):
// each line's covering rules, the problems never shown, the untimed and first timed sheets of a
// pass drawn together with one sum of allowances, and the spent draw, never-shown problems first,
// then those shown longest ago. A draw is a search with a budget: a pool whose never-shown problems
// yield no sheet within it is taken as spent. Randomness comes from a seed, so a move run twice
// draws the same sheet. Pure functions.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { digitsUp } from './end-count.logic.js'
import { allowanceOf, poolKey } from './end-lines.logic.js'

/**
 * When each problem of a line was last shown, by its pool key, in ms.
 * @typedef {Readonly<Record<string, number>>} Shown
 */

/** A seeded source of numbers from 0 up to 1 (mulberry32). @param {number} seed */
function seeded(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** @param {() => number} random @param {number} lo @param {number} hi a whole number from lo to hi */
const between = (random, lo, hi) => lo + Math.floor(random() * (hi - lo + 1))

/**
 * @template T
 * @param {readonly T[]} items
 * @param {() => number} random
 * @returns {T[]}
 */
function shuffled(items, random) {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    const a = out[i]
    const b = out[j]
    if (a === undefined || b === undefined) continue
    out[i] = b
    out[j] = a
  }
  return out
}

/** @param {number} n */
const leadOf = n => Number(String(n)[0])

/**
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {readonly (readonly number[])[]} sheet
 */
const sumOf = (id, sheet) =>
  sheet.reduce((s, p) => s + allowanceOf(id, p), 0)

/**
 * A slot of a sheet: a source of random problems that meet its covering rule, and for a line a
 * learner can spend, every problem it can hold.
 * @typedef {Readonly<{ pick: (random: () => number) => readonly number[], all?: readonly (readonly number[])[] }>} Slot
 */

/** @param {number} d a three-digit first factor led by `d`, a second factor of three digits */
const product3 = d => ({
  /** @param {() => number} r */
  pick: r => [d * 100 + between(r, 0, 99), between(r, 100, 999)]
})

/** @param {number} d a four-digit first factor led by `d`, a second factor of four digits */
const product4 = d => ({
  /** @param {() => number} r */
  pick: r => [d * 1000 + between(r, 0, 999), between(r, 1000, 9999)]
})

/** @param {number} d two five-digit factors whose product is led by `d` */
const estimate = d => ({
  /** @param {() => number} r */
  pick: r => {
    for (;;) {
      const p = [between(r, 10000, 99999), between(r, 10000, 99999)]
      if (leadOf((p[0] ?? 0) * (p[1] ?? 0)) === d) return p
    }
  }
})

/** @param {number} h the numbers of hundred h: 2 to 99, then 100 to 199, and so on */
const hundred = h => {
  const lo = h === 0 ? 2 : h * 100
  const all = Array.from({ length: h * 100 + 100 - lo }, (_, i) => [lo + i])
  return {
    all,
    /** @param {() => number} r */
    pick: r => all[Math.floor(r() * all.length)] ?? [lo]
  }
}

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * The slots of a sheet of a slot-drawn line, in covering order.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {() => number} random
 * @returns {Slot[]}
 */
function slotsOf(id, random) {
  switch (id) {
    case 'product-3':
      return [...DIGITS, ...Array.from({ length: 7 }, () => between(random, 1, 9))].map(product3)
    case 'product-4':
      return DIGITS.map(product4)
    case 'estimates':
      return DIGITS.map(estimate)
    case 'factoring':
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(hundred)
    case 'pi-estimates':
    case 'facts':
    case 'primes':
    case 'squares':
    case 'pi-multiples':
    case 'prime-multiples':
    case 'sums':
      return []
    default:
      return unreachable(id)
  }
}

/** Tries of one slot for a problem that is new, or that closes a sum. */
const SLOT_TRIES = 4000
/** Tries of a whole sheet. */
const SHEET_TRIES = 300

/**
 * The problems of an explicit slot, never-shown ones first in a random order, then those shown
 * longest ago (the spent draw's order).
 * @param {readonly (readonly number[])[]} all
 * @param {Shown} shown
 * @param {() => number} random
 */
function spentOrder(all, shown, random) {
  const fresh = shuffled(all.filter(p => shown[poolKey(p)] === undefined), random)
  const old = shuffled(all.filter(p => shown[poolKey(p)] !== undefined), random).sort(
    (a, b) => (shown[poolKey(a)] ?? 0) - (shown[poolKey(b)] ?? 0)
  )
  return [...fresh, ...old]
}

/**
 * One sheet of a slot-drawn line, its problems none of `taken` and, unless `spent`, never shown;
 * with `sum`, its allowances add to it. Null when the budget finds none.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {{ shown: Shown, taken: Set<string>, random: () => number, sum?: number, spent?: boolean }} o
 * @returns {(readonly number[])[] | null}
 */
function slotSheet(id, { shown, taken, random, sum, spent = false }) {
  for (let attempt = 0; attempt < SHEET_TRIES; attempt++) {
    const slots = slotsOf(id, random)
    const closer = sum === undefined ? -1 : Math.floor(random() * slots.length)
    /** @type {(readonly number[])[]} */
    const sheet = []
    const used = new Set(taken)
    /** @param {readonly number[]} p */
    const free = p => !used.has(poolKey(p)) && (spent || shown[poolKey(p)] === undefined)
    let ok = true
    slots.forEach((slot, i) => {
      if (!ok || i === closer) return
      const p = pickIn(slot, free, shown, random, spent, attempt)
      if (!p) ok = false
      else {
        sheet[i] = p
        used.add(poolKey(p))
      }
    })
    if (!ok) continue
    const slot = slots[closer]
    if (slot && sum !== undefined) {
      const need = sum - sumOf(id, sheet.filter(Boolean))
      const fits = /** @param {readonly number[]} p */ p => free(p) && allowanceOf(id, p) === need
      const p = slot.all
        ? (spent ? spentOrder(slot.all, shown, random) : slot.all).find(fits)
        : tries(() => slot.pick(random), fits)
      if (!p) continue
      sheet[closer] = p
    }
    return shuffled(sheet, random)
  }
  return null
}

/**
 * A problem of a slot that `free` allows: in a spent draw, the never-shown first, then one of the
 * few shown longest ago.
 * @param {Slot} slot
 * @param {(p: readonly number[]) => boolean} free
 * @param {Shown} shown
 * @param {() => number} random
 * @param {boolean} spent
 * @param {number} attempt
 */
function pickIn(slot, free, shown, random, spent, attempt) {
  if (!slot.all) return tries(() => slot.pick(random), free)
  const order = (spent ? spentOrder(slot.all, shown, random) : slot.all).filter(free)
  if (!spent) return order[Math.floor(random() * order.length)] ?? null
  const fresh = order.filter(p => shown[poolKey(p)] === undefined)
  if (fresh.length) return fresh[Math.floor(random() * fresh.length)] ?? null
  // later attempts widen the choice among the oldest, so a sum can close
  return order[Math.floor(random() * Math.min(order.length, 1 + Math.floor(attempt / 10)))] ?? null
}

/**
 * The first of up to `SLOT_TRIES` draws that `ok` accepts, or null.
 * @param {() => readonly number[]} draw
 * @param {(p: readonly number[]) => boolean} ok
 */
function tries(draw, ok) {
  for (let i = 0; i < SLOT_TRIES; i++) {
    const p = draw()
    if (ok(p)) return p
  }
  return null
}

/** Nodes a π search may visit. */
const PI_NODES = 200000

/**
 * A sheet of π estimates: nine numbers whose hundreds, tens and units digits each run 1 to 9 once,
 * none of `taken`, never shown unless `spent`, and with `sum` their allowances adding to it. A
 * search over the hundreds digits in turn, preferring in a spent draw the never-shown, then those
 * shown longest ago. Null when the search finds none within its budget.
 * @param {{ shown: Shown, taken: Set<string>, random: () => number, sum?: number, spent?: boolean }} o
 * @returns {(readonly number[])[] | null}
 */
function piSheet({ shown, taken, random, sum, spent = false }) {
  let nodes = 0
  /** @type {Set<string>} */
  const dead = new Set()
  /** @param {number} n */
  const allowed = n => !taken.has(String(n)) && (spent || shown[String(n)] === undefined)
  /** @param {number} n */
  const age = n => shown[String(n)] ?? -Infinity
  /**
   * @param {number} h the hundreds digit in hand
   * @param {number} tens the tens digits used, as bits
   * @param {number} units the units digits used, as bits
   * @param {number} total the allowances so far
   * @returns {number[] | null}
   */
  const walk = (h, tens, units, total) => {
    if (h > 9) return sum === undefined || total === sum ? [] : null
    if (++nodes > PI_NODES) return null
    const state = `${h},${tens},${units}${sum === undefined ? '' : `,${total}`}`
    if (dead.has(state)) return null
    /** @type {number[]} */
    let options = []
    for (const t of DIGITS)
      for (const u of DIGITS)
        if (!(tens & (1 << t)) && !(units & (1 << u)) && allowed(h * 100 + t * 10 + u))
          options.push(h * 100 + t * 10 + u)
    options = shuffled(options, random)
    if (spent) options.sort((a, b) => age(a) - age(b))
    for (const n of options) {
      const rest = walk(h + 1, tens | (1 << (digitsUp(n)[1] ?? 0)), units | (1 << (digitsUp(n)[0] ?? 0)), total + allowanceOf('pi-estimates', [n]))
      if (rest) return [n, ...rest]
    }
    if (nodes <= PI_NODES) dead.add(state)
    return null
  }
  const found = walk(1, 0, 0, 0)
  return found ? shuffled(found.map(n => [n]), random) : null
}

/**
 * One sheet of a line, or null.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {{ shown: Shown, taken: Set<string>, random: () => number, sum?: number, spent?: boolean }} o
 */
const sheetOf = (id, o) => (id === 'pi-estimates' ? piSheet(o) : slotSheet(id, o))

/**
 * A drawn sheet and whether the pool was spent for it.
 * @typedef {Readonly<{ problems: readonly (readonly number[])[], spent: boolean }>} Drawn
 */

/**
 * A sheet drawn new: from the never-shown problems, else, the pool spent, by the spent draw. With
 * `sum`, its allowances add to it (a later timed sheet of a pass).
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {Shown} shown
 * @param {number} seed
 * @param {number} [sum]
 * @returns {Drawn}
 */
export function drawSheet(id, shown, seed, sum) {
  const random = seeded(seed)
  const base = { shown, taken: new Set(), random, ...(sum === undefined ? {} : { sum }) }
  const fresh = sheetOf(id, base)
  if (fresh) return { problems: fresh, spent: false }
  const spent = sheetOf(id, { ...base, spent: true })
  // a sum no sheet can close is dropped rather than leave the learner with no sheet
  return { problems: spent ?? sheetOf(id, { shown, taken: new Set(), random, spent: true }) ?? [], spent: true }
}

/**
 * The untimed sheet and the first timed sheet of a pass, drawn together with one sum of
 * allowances, from the never-shown problems; else, the pool spent, by the spent draw.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {Shown} shown
 * @param {number} seed
 * @returns {Readonly<{ untimed: readonly (readonly number[])[], timed: readonly (readonly number[])[], sum: number, spent: boolean }>}
 */
export function drawPair(id, shown, seed) {
  const random = seeded(seed)
  for (const spent of [false, true])
    for (let attempt = 0; attempt < 20; attempt++) {
      const untimed = sheetOf(id, { shown, taken: new Set(), random, spent })
      if (!untimed) break
      const sum = sumOf(id, untimed)
      const timed = sheetOf(id, { shown, taken: new Set(untimed.map(poolKey)), random, sum, spent })
      if (timed) return { untimed, timed, sum, spent }
    }
  const untimed = drawSheet(id, shown, seed).problems
  return { untimed, timed: drawSheet(id, shown, seed + 1).problems, sum: sumOf(id, untimed), spent: true }
}

/**
 * The sum of a sheet's allowances, in hundredths of a second.
 * @param {import('./end-lines.logic.js').LineId} id
 * @param {readonly (readonly number[])[]} sheet
 */
export const allowanceSum = (id, sheet) => sumOf(id, sheet)
