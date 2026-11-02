// A line of play as pages (src/units/go/core/pages.logic.js): each page is the position a replay
// of its first k moves with the rules engine gives, a capture back stands on its point, and a
// line stops at the first move that cannot be played.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PROBLEMS } from '../content/problems.gen.js'
import { bankOf } from './decode.logic.js'
import { boardOf, diagramFrom } from './diagram.logic.js'
import { pagesOf } from './pages.logic.js'
import { BLACK, WHITE, byPoint, coord, place } from './rules.logic.js'

/** A seeded run of numbers in [0, 1): the same line every time. @param {number} seed */
const random = seed => {
  let s = seed
  return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 2 ** 32
}

/** A random 5 by 5 position, and a line of up to 14 legal moves alternating from `first`. */
function lineFrom(/** @type {number} */ seed) {
  const next = random(seed)
  const rows = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => ['.', '.', 'X', 'O'][Math.floor(next() * 4)]).join('')
  )
  const position = diagramFrom(rows, 0, 0, 19)
  const { board, name } = boardOf(position)
  /** @type {{ side: 'B' | 'W', at: string | null }[]} */
  const moves = []
  /** @type {import('./rules.logic.js').Board} */
  let b = board
  for (let i = 0; i < 14; i++) {
    const colour = i % 2 === 0 ? BLACK : WHITE
    const order = [...b.cells.keys()].filter(j => !b.cells[j]).sort(() => next() - 0.5)
    const found = order.map(j => ({ j, placed: place(b, colour, j) })).find(c => c.placed)
    moves.push({ side: colour === BLACK ? 'B' : 'W', at: found ? name(found.j) : null })
    if (found?.placed) b = found.placed.board
  }
  return { position, moves }
}

test('each page equals replaying its first k moves with place, and its numbers are the line stones still standing', () => {
  for (let seed = 1; seed <= 200; seed++) {
    const { position, moves } = lineFrom(seed)
    const pages = pagesOf(position, moves)
    assert.equal(pages.length, moves.length + 1, `seed ${seed}: the whole line is played`)
    const { board, index, name } = boardOf(position)
    /** @type {import('./rules.logic.js').Board} */
    let b = board
    /** The move number of the stone standing on each point, from the line. @type {Record<string, number>} */
    const owner = {}
    pages.forEach((page, k) => {
      if (k > 0) {
        const move = moves[k - 1]
        assert.ok(move)
        if (move.at !== null) {
          const placed = place(b, move.side === 'B' ? BLACK : WHITE, index(move.at))
          assert.ok(placed)
          b = placed.board
          for (const j of placed.captured) delete owner[name(j)]
          owner[move.at] = k
          assert.deepEqual([...page.captured], placed.captured.map(name).sort(byPoint))
          assert.equal(page.played, move.at)
        } else {
          assert.equal(page.played, null)
          assert.deepEqual([...page.captured], [])
        }
      }
      const cells = [...b.cells.keys()].filter(j => b.cells[j])
      assert.deepEqual(
        [...page.black],
        cells
          .filter(j => b.cells[j] === BLACK)
          .map(name)
          .sort(byPoint),
        `seed ${seed}, page ${k}: black`
      )
      assert.deepEqual(
        [...page.white],
        cells
          .filter(j => b.cells[j] === WHITE)
          .map(name)
          .sort(byPoint),
        `seed ${seed}, page ${k}: white`
      )
      assert.deepEqual(
        Object.fromEntries(Object.entries(page.numbers).map(([at, v]) => [at, v.n])),
        owner,
        `seed ${seed}, page ${k}: numbers`
      )
    })
  }
})

test('a ko capture back puts stone 2 on the point and takes stone 1 off the board', () => {
  // white B2 is in atari in the ko: Black takes it at C2, White takes back at B2
  const position = diagramFrom(['.XO.', 'XO.O', '.XO.'], 0, 0, 19)
  const pages = pagesOf(position, [
    { side: 'B', at: 'C2' },
    { side: 'W', at: 'B2' }
  ])
  assert.equal(pages.length, 3)
  assert.deepEqual([...(pages[1]?.captured ?? [])], ['B2'])
  assert.deepEqual(pages[1]?.numbers, { C2: { n: 1, black: true } })
  assert.equal(pages[1]?.again, null)
  const back = pages[2]
  assert.deepEqual([...(back?.captured ?? [])], ['C2'])
  assert.deepEqual(back?.numbers, { B2: { n: 2, black: false } })
  assert.ok(back?.white.includes('B2'))
  assert.ok(!back?.black.includes('C2'))
  assert.equal(back?.again, '2 at B2.')
})

test('a stone played where a numbered one was taken names it: 5 at 1', () => {
  const position = diagramFrom(['.XO.', 'XO.O', '.XO.'], 0, 0, 19)
  const pages = pagesOf(position, [
    { side: 'B', at: 'C2' },
    { side: 'W', at: 'B2' },
    { side: 'B', at: 'A1' },
    { side: 'W', at: null },
    { side: 'B', at: 'C2' }
  ])
  assert.equal(pages.at(-1)?.again, '5 at 1.')
})

test('a pass changes no stone and carries no new stone', () => {
  const position = diagramFrom(['X.', '.O'], 0, 0, 19)
  const pages = pagesOf(position, [{ side: 'B', at: null }])
  assert.equal(pages.length, 2)
  assert.deepEqual(pages[1], { ...pages[0], side: 'B' })
})

test('a line stops at its first move that cannot be played', () => {
  const position = diagramFrom(['X.', '.O'], 0, 0, 19)
  // A2 holds a stone, so the line is only its position; a point off the cut ends it too
  assert.equal(
    pagesOf(position, [
      { side: 'B', at: coord(0, 1) },
      { side: 'W', at: 'A1' }
    ]).length,
    1
  )
  assert.equal(
    pagesOf(position, [
      { side: 'B', at: 'A1' },
      { side: 'W', at: 'T19' }
    ]).length,
    2
  )
})

test('every solution line of the course is played to its last move, and a snapback names its capture back', () => {
  const bank = bankOf(PROBLEMS)
  for (const p of Object.values(bank))
    for (const line of p.solution.lines)
      assert.equal(pagesOf(p, line.moves).length, line.moves.length + 1, `${p.id} ${line.first}`)
  const snapback = bank['7.1']
  const line = snapback?.solution.lines[0]
  assert.ok(snapback && line)
  // White A18, Black B18 takes it, White A18 takes the black stone back
  assert.deepEqual(
    pagesOf(snapback, line.moves).map(page => page.again),
    [null, null, null, '3 at 1.']
  )
})
