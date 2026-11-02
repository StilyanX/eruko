// The exact search: capturing a stone in atari, groups that live or die in a small region, the
// line of best play, and a point opened again by a capture.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { BLACK, WHITE, boardFrom, coord, parseCoord, groupAt, place } from './rules.logic.js'
import { solve } from './solve.logic.js'
import { boardOf, threatsOf } from './diagram.logic.js'
import { solve as first } from '../../../../scripts/lib/go-solve-first.mjs'
import { plain } from '../../../../scripts/lib/go-solve-plain.mjs'
import { PROBLEMS } from '../content/problems.gen.js'

/**
 * @param {import('./rules.logic.js').Board} b
 * @param {string} text
 */
const at = (b, text) => {
  const xy = parseCoord(text)
  assert.ok(xy, `${text} is a point`)
  const [x, y] = xy
  return y * b.w + x
}
/**
 * @param {import('./rules.logic.js').Board} b
 * @param {NonNullable<ReturnType<typeof solve>>} s
 */
const names = (b, s) => s.best.map(i => coord(i % b.w, Math.floor(i / b.w))).sort()

test('a stone in atari is captured', () => {
  const b = boardFrom(['.....', '..X..', '.XOX.', '.....', '.....'])
  const s = solve(b, BLACK, at(b, 'C3'), {}, { region: ['C2', 'C4', 'B3', 'D3'].map(c => at(b, c)) })
  assert.ok(s)
  assert.equal(s.result, 'dies')
  assert.deepEqual(names(b, s), ['C2'])
})

test('a group with two eyes lives even when the other side plays first', () => {
  const b = boardFrom(['OOOOO', 'O.O.O', 'OOOOO', 'XXXXX', '.....'])
  const s = solve(b, BLACK, at(b, 'A3'), {}, { region: ['A1', 'B4', 'D4'].map(c => at(b, c)) })
  assert.ok(s)
  assert.equal(s.result, 'lives')
})

test('a straight three is killed from the middle and lives when the owner plays there', () => {
  const rows = ['XXXXXXX', 'XOOOOOX', 'XO...OX', 'XOOOOOX', 'XXXXXXX']
  const b = boardFrom(rows)
  const region = ['C3', 'D3', 'E3'].map(c => at(b, c))
  const killer = solve(b, BLACK, at(b, 'B2'), {}, { region })
  assert.ok(killer)
  assert.equal(killer.result, 'dies')
  assert.deepEqual(names(b, killer), ['D3'])
  const owner = solve(b, WHITE, at(b, 'B2'), {}, { region })
  assert.ok(owner)
  assert.equal(owner.result, 'lives')
  assert.deepEqual(names(b, owner), ['D3'])
})

test('the line of best play opens with the best move and runs at least two moves', () => {
  const rows = ['XXXXXXX', 'XOOOOOX', 'XO...OX', 'XOOOOOX', 'XXXXXXX']
  const b = boardFrom(rows)
  const region = ['C3', 'D3', 'E3'].map(c => at(b, c))
  const s = solve(b, BLACK, at(b, 'B2'), {}, { region })
  assert.ok(s)
  const line = s.line(at(b, 'D3'))
  assert.ok(line)
  const { plies } = line
  const first = plies[0]
  assert.ok(first)
  assert.ok(first.point !== null)
  assert.equal(coord(first.point % 7, Math.floor(first.point / 7)), 'D3')
  assert.ok(plies.length >= 2)
})

test('a point whose stone is captured is open to a move again: one eye is no life', () => {
  // The white stone at A1 has one liberty, B1. Black captures it there and A1 is empty again.
  // White then plays B2 and the Black stones have one eye of one point.
  const rows = ['OOO.', 'XXO.', 'X.O.', 'O.O.']
  const b = boardFrom(rows)
  const region = ['B1', 'B2'].map(c => at(b, c))
  const s = solve(b, BLACK, at(b, 'A2'), {}, { region })
  assert.ok(s)
  assert.equal(s.result, 'dies')
})

test('the search and the first search agree on the problems of the bank where no ko arises and the first search finishes', () => {
  let asked = 0
  for (const p of PROBLEMS) {
    if (p.beyond) continue
    const { board, index } = boardOf(p)
    const region = p.region.map(index)
    const side = p.toMove === 'black' ? BLACK : WHITE
    const now = solve(board, side, index(p.group.at), threatsOf(p.ko), { budget: 3e6, region })
    assert.ok(now, `${p.id}: the search did not finish`)
    if (now.ko) continue
    // The first search does not finish the largest within a test's time: those are left to the new one.
    const then = first(board, side, index(p.group.at), threatsOf(p.ko), { budget: 1e5, region })
    if (!then || then.ko) continue
    assert.deepEqual(now.results, then.results, `${p.id}: a first move's result differs`)
    asked++
  }
  assert.ok(
    asked > PROBLEMS.length / 3,
    `only ${asked} of ${PROBLEMS.length} problems were asked of both`
  )
})

/**
 * A random source, the same for the same seed (mulberry32), and a pick from a list by it.
 * @param {number} seed
 */
function randomFrom(seed) {
  const rnd = () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  /**
   * @template T
   * @param {ArrayLike<T>} list
   * @returns {T}
   */
  const pick = list => {
    const item = list[Math.floor(rnd() * list.length)]
    assert.ok(item !== undefined)
    return item
  }
  return { rnd, pick }
}

/**
 * A small pocket drawn at random, walled on its top and right, with its region; null when its
 * region is too small or too large, or a group stands with no liberty.
 * @param {ReturnType<typeof randomFrom>} random
 */
function pocket({ rnd, pick }) {
  const w = 3 + Math.floor(rnd() * 2)
  const top = pick('XO')
  const right = pick('XO')
  const rows = [','.repeat(w + 2), `${top.repeat(w)},,`]
  for (let y = 0; y < 2; y++) {
    let row = ''
    for (let x = 0; x < w; x++) row += rnd() < 0.45 ? pick('XO') : '.'
    rows.push(`${row}${right},`)
  }
  const b = boardFrom(rows.map(r => r.replace(/,/g, '.')))
  const H = rows.length
  const W = (rows[0] ?? '').length
  /** @type {number[]} */
  const region = []
  rows.forEach((row, r) =>
    row.split('').forEach((ch, x) => ch === '.' && region.push((H - 1 - r) * W + x))
  )
  if (region.length < 2 || region.length > 5) return null
  /** @type {ReturnType<typeof groupAt>[]} */
  const groups = []
  const done = new Set()
  for (const [i, c] of b.cells.entries()) {
    if (!c || done.has(i)) continue
    const g = groupAt(b, i)
    g.stones.forEach(s => done.add(s))
    if (!g.liberties.length) return null
    groups.push(g)
  }
  return { rows, b, region, groups: groups.filter(g => g.liberties.every(j => region.includes(j))) }
}

const LABEL = ['dies', 'seki', 'lives']

/**
 * The search's result for each first move against the plain search's, at the counts given and
 * one more threat on either side; how many first moves were asked of both.
 * @param {NonNullable<ReturnType<typeof pocket>>} p
 * @param {number} target
 * @param {number} side
 * @param {number} bt
 * @param {number} wt
 */
function agree({ rows, b, region }, target, side, bt, wt) {
  const s = solve(b, side, target, { black: bt, white: wt }, { region })
  const defender = b.cells[target]
  assert.ok(defender !== undefined)
  if (!s) return 0
  const [a, d] = defender === BLACK ? [wt, bt] : [bt, wt]
  let asked = 0
  for (const [i, label] of Object.entries(s.results)) {
    const placed = place(b, side, Number(i))
    assert.ok(placed)
    /** @type {[number, number][]} */
    const counts = [
      [a, d],
      [a + 1, d],
      [a, d + 1],
      [a + 1, d + 1]
    ]
    /** @type {(number | null)[]} */
    const vals = counts.map(([x, y]) =>
      plain(placed.board, side === BLACK ? WHITE : BLACK, target, {
        a: x,
        d: y,
        region,
        budget: 2e4,
        defender,
        drawn: b,
        before: b
      })
    )
    const v0 = vals[0]
    if (vals.includes(null) || v0 === undefined || v0 === null) continue
    /** @type {string | undefined} */
    const want = vals.slice(1).some(v => v !== vals[0]) ? 'ko' : LABEL[v0]
    assert.equal(
      label,
      want,
      `${rows.join('/')} side ${side} group ${target} threats ${bt} ${wt} move ${i}`
    )
    asked++
  }
  return asked
}

test('the search and the plain search agree on small pockets drawn at random, with and without ko threats', () => {
  const random = randomFrom(11)
  let asked = 0
  for (let n = 0; n < 40; n++) {
    const p = pocket(random)
    if (!p) continue
    for (const g of p.groups) {
      const target = g.stones[0]
      assert.ok(target !== undefined)
      for (const side of [BLACK, WHITE])
        for (const [bt, wt] of [
          [0, 0],
          [1, 0],
          [0, 1]
        ])
          asked += agree(p, target, side, bt ?? 0, wt ?? 0)
    }
  }
  assert.ok(asked > 100, `only ${asked} first moves were asked of both`)
})
