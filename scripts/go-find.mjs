#!/usr/bin/env node
// The authoring tool for the Go unit's ten first kinds. It draws small positions in a pocket of
// the board closed by walls of stones and board edges, solves each by the exact search
// (src/units/go/core/solve.logic.js), and keeps a position for a kind only when its line of best play reads
// as that kind and every stone inside the pocket is needed: taking one away changes the answer.
// What it keeps goes to scripts/lib/go-found.json, which scripts/gen/go.mjs reads beside the
// positions drawn by hand. Run: node scripts/go-find.mjs [positions per pocket] [seed]
import { writeFileSync } from 'node:fs'
import {
  BLACK,
  WHITE,
  boardFrom,
  groupAt,
  neighbours,
  other,
  place
} from '../src/units/go/core/rules.logic.js'
import { solve } from '../src/units/go/core/solve.logic.js'
import { reasonFor } from '../src/units/go/core/reasons.logic.js'

const PER = Number(process.argv[2] ?? 20000)
let seed = Number(process.argv[3] ?? 7)
// mulberry32: the same seed draws the same positions.
function rnd() {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}
/** @param {string} list */
const pick = list => list.charAt(Math.floor(rnd() * list.length))

/**
 * @typedef {{ w: number, h: number, side: boolean }} Pocket
 * @typedef {import('../src/units/go/core/rules.logic.js').Board} Board
 * @typedef {import('../src/units/go/core/solve.logic.js').Solution} Solution
 * @typedef {import('../src/units/go/core/solve.logic.js').Ply & { reason: string | null }} Move One move or pass of a line, with the reason it is played
 * @typedef {{ b: Board, s: Solution, lines: Move[][], region: number[] }} Reading A position, its solution, the reasoned lines of best play and the points of its pocket
 * @typedef {{ rows: string[], side: 'B' | 'W', target: number, pocket: string, plies: number, reasons: string, stones: number }} Found One position kept for a kind
 */

// A pocket: `w` by `h` points inside, in the corner (the left and bottom are board edges) or on
// the bottom side (a wall on the left as well).
/** @type {Pocket[]} */
const POCKETS = [
  { w: 3, h: 2, side: false },
  { w: 3, h: 3, side: false },
  { w: 4, h: 2, side: false },
  { w: 4, h: 3, side: false },
  { w: 5, h: 2, side: false },
  { w: 6, h: 2, side: false },
  { w: 4, h: 2, side: true },
  { w: 5, h: 2, side: true },
  { w: 4, h: 3, side: true }
]
// `node scripts/go-find.mjs 0 0 ladders` builds the ladders, into their own file.
const LADDERS = process.argv[4] === 'ladders'
// The most positions one search may visit: a ladder runs long.
const BUDGET = LADDERS ? 2e6 : 40000

/**
 * Rows, top first: `.` a point of the pocket, `,` an empty point no move is played on.
 * @param {Pocket} pocket
 * @returns {string[]}
 */
function draw({ w, h, side }) {
  const top = pick('XO')
  const right = pick('XO')
  const left = pick('XO')
  /** @type {string[]} */
  const rows = []
  rows.push(','.repeat(w + 2 + (side ? 2 : 0)))
  rows.push((side ? ',,' : '') + top.repeat(w) + ',,')
  for (let y = 0; y < h; y++) {
    let row = side ? `,${left}` : ''
    for (let x = 0; x < w; x++) row += rnd() < 0.5 ? pick('XO') : '.'
    rows.push(`${row}${right},`)
  }
  return rows
}

/** @param {string[]} rows */
const clean = rows => rows.map(r => r.replace(/,/g, '.'))
/** @param {string[]} rows */
const widthOf = rows => {
  const first = rows[0]
  if (first === undefined) throw new Error('a drawing has no rows')
  return first.length
}
/**
 * @param {string[]} rows
 * @returns {number[]}
 */
const regionOf = rows => {
  const h = rows.length
  const w = widthOf(rows)
  /** @type {number[]} */
  const out = []
  rows.forEach((row, r) => row.split('').forEach((ch, x) => ch === '.' && out.push((h - 1 - r) * w + x)))
  return out
}

/**
 * The answer to a drawn position for one group and one side to move, with its line's reasons.
 * @param {string[]} rows
 * @param {number} side
 * @param {number} target
 * @returns {Reading | null}
 */
function read(rows, side, target) {
  const b = boardFrom(clean(rows))
  const region = regionOf(rows)
  const s = solve(b, side, target, {}, { budget: BUDGET, region })
  if (!s) return null
  const drawn = s.best.map(first => s.line(first))
  const found = drawn.filter(l => l !== null)
  if (found.length < drawn.length) return null
  const lines = found.map(({ plies }) => {
    let bd = b
    // The passes that end a line are no moves of it.
    while (plies.length && plies.at(-1)?.point === null) plies.pop()
    return plies.map((p, k) => {
      if (p.point === null) return { ...p, reason: 'pass' }
      // the first move is read with what the search found, which a net's test needs
      const reason = reasonFor(
        bd,
        p.side,
        p.point,
        true,
        k === 0 ? { target, results: s.results, result: s.result } : null
      )
      const placed = place(bd, p.side, p.point)
      if (!placed) throw new Error('a line of best play makes a move that is not legal')
      bd = placed.board
      return { ...p, reason }
    })
  })
  return { b, s, lines, region }
}

/**
 * A race: after the attacker's first move the defender's reply puts in atari a group of two or
 * more attacking stones that no wall keeps safe.
 * @param {Reading} reading
 * @param {Move[]} line
 */
function race({ b, region }, line) {
  const inside = new Set(region)
  const first = line[0]
  const second = line[1]
  if (!first || !second || first.point === null || second.point === null)
    throw new Error('a race is read from a line whose first two plies are moves')
  const afterFirst = place(b, first.side, first.point)
  const afterSecond = afterFirst && place(afterFirst.board, second.side, second.point)
  if (!afterSecond) throw new Error('a race is read from a line whose first two moves are legal')
  const bd = afterSecond.board
  return neighbours(b.w, b.h, second.point).some(j => {
    if (bd.cells[j] !== first.side) return false
    const g = groupAt(bd, j)
    return g.stones.length >= 2 && g.liberties.length === 1 && g.liberties.every(l => inside.has(l))
  })
}

/**
 * What a position's reading gives the kind tests: its one line of best play and its reasons, the
 * group asked about, and the result with the other side to move; null when the position reads as
 * no kind: no single sequence of reasons, every first move alike, or a pass inside the line.
 * @param {string[]} rows
 * @param {number} side
 * @param {number} target
 */
function shapeOf(rows, side, target) {
  const a = read(rows, side, target)
  if (!a || a.s.best.length > 2) return null
  const { b, s, lines } = a
  const labels = Object.values(s.results)
  if (labels.length < 2 || labels.every(l => l === s.result) || s.best.length === labels.length)
    return null
  const line = lines[0]
  if (!line) throw new Error('a solution has a best first move and so a line')
  if (line.some(p => p.reason === null || p.reason === 'pass')) return null
  /** @param {Move[]} l */
  const seq = l => l.map(p => p.reason).join(' ')
  if (lines.some(l => seq(l) !== seq(line))) return null
  const opposite = read(rows, other(side), target)
  if (!opposite) return null
  const last = line.at(-1)
  const [m0, m1, m2] = line
  if (!last || !m0) throw new Error('a line of best play holds a move')
  const group = groupAt(b, target)
  return {
    a,
    s,
    line,
    group,
    last,
    m0,
    m1,
    m2,
    r: line.map(p => p.reason),
    n: line.length,
    libs: group.liberties.length,
    first: side === s.defender ? 'D' : 'A',
    theirs: opposite.s.result,
    takesGroup: last.captured.includes(target)
  }
}

/** @typedef {NonNullable<ReturnType<typeof shapeOf>>} Shape */

/**
 * The kinds the attacker's first move makes, the group dying: 1, 3, 4, 5, 6, 7, 8 or 10; or 0.
 * @param {Shape} x
 */
function attackKind({ a, line, group, last, m0, m1, m2, r, n, libs, takesGroup }) {
  if (n === 1 && libs === 1 && takesGroup) return 1
  if (!takesGroup) return 0
  if (n >= 3 && m1 && m2 && m1.captured.length === 1 && m1.captured[0] === m0.point && m2.point === m0.point && m2.captured.length >= 2)
    return 7
  const attack = line.filter((_, i) => i % 2 === 0)
  const defence = line.filter((_, i) => i % 2 === 1)
  // a ladder: every chasing move an atari, every running move a liberty more; the runner's
  // last move, with the chase already lost, may be what it likes
  if (n >= 5 && libs === 2 && attack.slice(0, -1).every(p => p.reason === 'atari') && defence.slice(0, -1).every(p => p.reason === 'liberty'))
    return 4
  // a race run by taking liberties: each side takes one of the other's in turn, and the first
  // to run out is captured
  if (r.includes('takes liberty')) {
    /** @param {Move} p */
    const pressing = p => p.reason === 'takes liberty' || p.reason === 'atari'
    const raced = n >= 3 && n % 2 === 1 && attack.slice(0, -1).every(pressing) && defence.every(pressing)
    return raced && group.stones.length >= 2 && race(a, line) ? 10 : 0
  }
  if (n === 3 && r[0] === 'atari' && r[1] === 'connects' && last.captured.length >= 3) return 8
  if (n === 3 && r[0] === 'atari' && r[1] === 'atari' && libs === 2 && group.stones.length >= 2 && race(a, line))
    return 10
  // a net: the first move stands off the group, and every move that puts it in atari fails
  if (n >= 3 && libs === 2 && r[0] === 'net') return 5
  if (r.includes('net')) return 0
  if (r[0] === 'cuts' && libs >= 2 && n <= 3) return 3
  if (r[0] === 'last space' && group.stones.length >= 4) return 6
  return 0
}

/**
 * The kinds the defender's first move makes, the group living: 2, 3, 6 or 10; or 0.
 * @param {Shape} x
 */
function defenceKind({ group, last, r, n, libs }) {
  if (r.includes('takes liberty')) return 0
  if (n === 1 && libs === 1) return 2
  if (n === 1 && libs >= 2 && r[0] === 'connects') return 3
  if (r[0] === 'eye' && group.stones.length >= 4 && n <= 3) return 6
  if (n === 3 && r[0] === 'atari' && r[1] === 'atari' && r[2] === 'captures' && libs === 2 && group.stones.length >= 2 && last.captured.length >= 2)
    return 10
  return 0
}

/**
 * Which of the ten kinds a position reads as, or 0.
 * @param {string[]} rows
 * @param {number} side
 * @param {number} target
 * @returns {number}
 */
function kindOf(rows, side, target) {
  const x = shapeOf(rows, side, target)
  if (!x) return 0
  const { s, n, first, theirs } = x
  if (s.result === 'seki') return theirs !== 'seki' && n >= 1 && n <= 3 ? 9 : 0
  if (first === 'A' && s.result === 'dies' && theirs !== 'dies') return attackKind(x)
  if (first === 'D' && s.result === 'lives' && theirs === 'dies') return defenceKind(x)
  return 0
}

/**
 * Every stone inside the pocket is needed: with one taken away the position reads otherwise.
 * @param {string[]} rows
 * @param {number} side
 * @param {number} target
 * @param {number} kind
 */
function needed(rows, side, target, kind) {
  const b = boardFrom(clean(rows))
  const mine = new Set(groupAt(b, target).stones)
  const h = rows.length
  const w = widthOf(rows)
  /** @type {Set<number>} */
  const walls = new Set()
  // A wall stone has a liberty no move is played on.
  rows.forEach((row, r) =>
    row.split('').forEach((ch, x) => {
      if (ch !== 'X' && ch !== 'O') return
      const i = (h - 1 - r) * w + x
      /** @type {[number, number][]} */
      const near = [
        [x + 1, r],
        [x - 1, r],
        [x, r + 1],
        [x, r - 1]
      ]
      if (near.some(([nx, nr]) => rows[nr]?.[nx] === ',')) walls.add(i)
    })
  )
  for (let r = 0; r < h; r++) {
    for (let x = 0; x < w; x++) {
      const ch = rows[r]?.[x]
      const i = (h - 1 - r) * w + x
      if ((ch !== 'X' && ch !== 'O') || walls.has(i) || (mine.has(i) && mine.size === 1)) continue
      const less = rows.map((row, k) => (k === r ? `${row.slice(0, x)}.${row.slice(x + 1)}` : row))
      const t = mine.has(i) ? [...mine].find(j => j !== i) : target
      if (t === undefined) continue
      const before = read(rows, side, target)
      const after = read(less, side, t)
      if (!after) continue
      if (!before) throw new Error('a position asked about has no answer')
      const same = after.s.result === before.s.result && kindOf(less, side, t) === kind
      if (same) return false
    }
  }
  return true
}

/**
 * The ladders, built and not drawn at random: the running stone stands `k` lines from the
 * corner with its two chasers beside it, and the chase runs down to the edge. Each is tried as
 * it stands and with one more stone of either colour on each point of the way, which bends the
 * chase, shortens it, or breaks it; a drawing is kept when it still reads as a ladder and every
 * stone of it is needed.
 * @returns {Found[]}
 */
function ladders() {
  /** @type {Found[]} */
  const out = []
  /** @type {Set<string>} */
  const taken = new Set()
  for (const k of [3, 4, 5]) {
    const base = [','.repeat(k + 3), `${'.'.repeat(k - 2)}XX,,,`, `${'.'.repeat(k - 1)}OX,,`]
    for (let y = 0; y < k - 1; y++) base.push(`${'.'.repeat(k)},,,`)
    const target = (k - 1) * (k + 3) + (k - 1)
    const drawings = [base]
    base.forEach((row, r) =>
      row.split('').forEach((ch, x) => {
        if (ch !== '.') return
        for (const stone of 'XO')
          drawings.push(
            base.map((line, q) =>
              q === r ? `${line.slice(0, x)}${stone}${line.slice(x + 1)}` : line
            )
          )
      })
    )
    for (const rows of drawings) {
      const b = boardFrom(clean(rows))
      if (
        b.cells[target] !== WHITE ||
        [...b.cells.keys()].some(i => b.cells[i] && !groupAt(b, i).liberties.length)
      )
        continue
      if (kindOf(rows, BLACK, target) !== 4 || !needed(rows, BLACK, target, 4)) continue
      const a = read(rows, BLACK, target)
      const line0 = a?.lines[0]
      if (!a || !line0) throw new Error('a drawing that reads as a ladder has an answer and a line')
      const key = line0.map(p => p.point).join(' ')
      // two drawings with the same chase are one ladder
      if (taken.has(`${k} ${key}`)) continue
      taken.add(`${k} ${key}`)
      out.push({
        rows,
        side: 'B',
        target,
        pocket: `${k}x${k}`,
        plies: line0.length,
        reasons: line0.map(p => p.reason).join(' '),
        stones: rows.join('').replace(/[.,]/g, '').length
      })
    }
    console.error(`ladders from ${k} lines: ${out.length}`)
  }
  return out
}

if (LADDERS) {
  writeFileSync(
    new URL('lib/go-found-ladders.json', import.meta.url),
    JSON.stringify({ 4: ladders() })
  )
  process.exit(0)
}

/** @type {Record<number, Found[]>} */
const found = {}
/** @type {Set<string>} */
const seen = new Set()
for (const pocket of POCKETS) {
  for (let n = 0; n < PER; n++) {
    const rows = draw(pocket)
    const key = rows.join('/')
    if (seen.has(key)) continue
    seen.add(key)
    const b = boardFrom(clean(rows))
    // every group has a liberty
    let sound = true
    /** @type {ReturnType<typeof groupAt>[]} */
    const groups = []
    const done = new Set()
    for (let i = 0; i < b.cells.length && sound; i++) {
      if (!b.cells[i] || done.has(i)) continue
      const g = groupAt(b, i)
      g.stones.forEach(s => done.add(s))
      if (!g.liberties.length) sound = false
      groups.push(g)
    }
    if (!sound) continue
    const region = new Set(regionOf(rows))
    if (region.size < 2 || region.size > 8) continue
    for (const g of groups) {
      // a wall is no group to ask about
      if (g.liberties.some(j => !region.has(j))) continue
      const stone = g.stones[0]
      if (stone === undefined) throw new Error('a group has a stone')
      for (const side of [BLACK, WHITE]) {
        const kind = kindOf(rows, side, stone)
        // The kinds a short line makes are found in plenty; the search goes on for the rest.
        if (!kind || (found[kind]?.length ?? 0) >= 150) continue
        if (!needed(rows, side, stone, kind)) continue
        const a = read(rows, side, stone)
        const line0 = a?.lines[0]
        if (!a || !line0) throw new Error('a position kept for a kind has an answer and a line')
        const stones = rows.join('').replace(/[.,]/g, '').length
        ;(found[kind] ??= []).push({
          rows,
          side: side === BLACK ? 'B' : 'W',
          target: stone,
          pocket: `${pocket.w}x${pocket.h}${pocket.side ? 's' : ''}`,
          plies: line0.length,
          reasons: line0.map(p => p.reason).join(' '),
          stones
        })
      }
    }
  }
  console.error(
    `${pocket.w}x${pocket.h}${pocket.side ? ' side' : ''}:`,
    Object.entries(found)
      .map(([k, v]) => `${k}:${v.length}`)
      .join(' ')
  )
}
writeFileSync(new URL('lib/go-found.json', import.meta.url), JSON.stringify(found))
