// Why a position makes no problem (src/units/go/core/problem.logic.js): each refusal of the
// builder, from a bank position asked another way or searched with too small a budget; and the
// tagging run again on a sample of each source (21.01 <bu-go-checks> Tag).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PROBLEMS } from '../content/problems.gen.js'
import { KINDS } from './course.gen.js'
import { boardOf } from './diagram.logic.js'
import { BLACK, WHITE } from './rules.logic.js'
import { kindId, problemId } from './decode.logic.js'
import { movesOf, problemFrom } from './problem.logic.js'
import { typed } from '../../../../tests/lib/go-typed.mjs'

/**
 * The drawing of a bank problem, with the side to move given.
 * @param {string} id
 * @param {'B' | 'W'} side
 * @returns {import('./problem.logic.js').Drawing}
 */
function drawingOf(id, side) {
  const p = PROBLEMS.find(q => q.id === id)
  assert.ok(p, id)
  const { size, view, black, white } = p
  return { diagram: { size, view, black, white }, region: p.region, side, target: p.group.at }
}

/**
 * @param {import('./problem.logic.js').Drawing} drawing
 * @param {number} [budget]
 */
const refusal = (drawing, budget) => {
  const made = problemFrom(drawing, problemId('x'), kindId(0), 'aether', budget)
  return made.ok ? null : made.error
}

test('a search that runs out of its budget makes no problem', () => {
  assert.equal(refusal(drawingOf('1.1', 'B'), 1), 'the search did not finish')
})

test('a search that finishes, but not the line of best play after a first move, makes no problem', () => {
  assert.equal(refusal(drawingOf('2.1', 'W'), 10), 'the search did not finish a line')
})

test('a position cut from an open board whose second reading runs out of its budget makes no problem', () => {
  /** @type {import('./problem.logic.js').Drawing} */
  const drawing = {
    diagram: {
      size: 19,
      view: [0, 0, 7, 6],
      black: ['A4', 'B5', 'C5', 'D1', 'D2', 'D3', 'D4', 'E3', 'F2', 'F4'],
      white: ['A3', 'B3', 'B4', 'C1', 'C2']
    },
    region: ['A1', 'A2', 'B1', 'B2', 'C3', 'C4', 'E1', 'E2'],
    side: 'B',
    target: 'C1',
    beyond: 'both'
  }
  // the first reading (nothing past the cut helping) finishes within 15093 positions; the
  // second (a group reaching past the cut standing for good) does not
  assert.equal(refusal(drawing, 15093), 'the search did not finish')
})

test('a position where every first move gives the same result asks nothing', () => {
  assert.equal(refusal(drawingOf('2.7', 'W')), 'every first move gives the same result')
})

test('a line whose move no reason names makes no problem', () => {
  assert.equal(refusal(drawingOf('2.6', 'B')), 'a move has no reason')
})

test('a line that passes where a move is as good makes no problem', () => {
  const { board, index, name } = boardOf(drawingOf('1.1', 'B').diagram)
  /** @type {import('./problem.logic.js').Search} */
  const found = typed({
    board,
    index,
    name,
    target: index('J9'),
    s: { results: {}, result: 'dies' }
  })
  const pass = { point: null, side: BLACK, captured: [], value: 0 }
  const capture = { point: index('K9'), side: WHITE, captured: [], value: 0 }
  assert.deepEqual(movesOf(found, [pass, capture]), {
    ok: false,
    error: 'a pass stands inside a line where a move is as good'
  })
  // the same pass, where the search found every move worse, is a move of the line
  assert.equal(movesOf(found, [{ ...pass, only: true }, capture]).ok, true)
})

test('the tagging, run on a sample of each source, gives each problem the reasons and the kind it holds', () => {
  /** @type {Map<string, (typeof PROBLEMS)[number][]>} */
  const bySource = new Map()
  for (const p of PROBLEMS) {
    const source = p.source.replace(/[\d-]+$/, '')
    bySource.set(source, [...(bySource.get(source) ?? []), p])
  }
  assert.ok(bySource.size >= 4, [...bySource.keys()].join(', '))
  for (const [source, all] of bySource)
    for (const p of all.slice(0, 2)) {
      /** @type {import('./problem.logic.js').Drawing} */
      const drawing = { ...drawingOf(p.id, p.toMove === 'black' ? 'B' : 'W'), ...(p.beyond === 'both' ? { beyond: 'both' } : {}) }
      // the generator's own budget for a found file
      const made = problemFrom(drawing, problemId('x'), kindId(0), 'aether', 6e6)
      assert.ok(made.ok, `${source}: ${p.id}`)
      /** @param {{ solution: { lines: readonly { moves: readonly { reason: string }[] }[] } }} q */
      const reasons = q => q.solution.lines.map(l => l.moves.map(m => m.reason).join('|'))
      assert.deepEqual(reasons(made.value), reasons(p), `${source}: ${p.id}`)
      const seq = made.value.solution.lines[0]?.moves.map(m => m.reason).filter((r, i, a) => r !== a[i - 1]).join('|') ?? ''
      assert.ok(KINDS.find(k => k.id === p.kind)?.seqs.includes(seq), `${source}: ${p.id} is tagged ${seq}`)
    }
})
