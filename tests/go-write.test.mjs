// The problems Eruko writes once every found source is used (scripts/go-write.mjs): each is a
// problem the kind holds, changed by one stone, and kept by its sequence of reasons and its line.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { changed, drawingOf, shapeOf } from '../scripts/go-write.mjs'
import { PROBLEMS } from '../src/units/go/content/problems.gen.js'

/** @type {import('../src/units/go/core/problem.logic.js').Drawing} */
const corner = {
  diagram: {
    size: 19,
    view: [0, 0, 4, 3],
    black: ['A2', 'B2', 'C1'],
    white: ['A3', 'B3', 'C2', 'D1']
  },
  region: ['A1', 'B1'],
  side: 'W',
  target: 'A2',
  beyond: 'both'
}

test('a changed drawing adds a stone of either colour on a region point, or takes away a stone not asked about', () => {
  const all = changed(corner)
  const stones = (/** @type {typeof corner} */ d) => [...d.diagram.black, ...d.diagram.white].length
  const added = all.filter(d => stones(d) === 8)
  const taken = all.filter(d => stones(d) === 6)
  // a stone on A1 or B1 leaves a region of one point: no problem
  assert.equal(added.length, 0)
  // the group asked about (A2, B2) stays; C1 and the four white stones may go
  assert.equal(taken.length, 5)
  assert.ok(taken.every(d => d.diagram.black.includes('A2') && d.diagram.black.includes('B2')))
  // a stone beside the region, taken away, opens its point to a move
  const noC1 = taken.find(d => !d.diagram.black.includes('C1'))
  assert.deepEqual(noC1?.region, ['A1', 'B1', 'C1'])
  const noA3 = taken.find(d => !d.diagram.white.includes('A3'))
  assert.deepEqual(noA3?.region, ['A1', 'B1'])
})

test("a bank problem's drawing gives back its own sequence of reasons and line", () => {
  const p = PROBLEMS[0]
  assert.ok(p)
  const d = drawingOf(
    /** @type {import('../src/units/go/core/decode.logic.js').Problem} */ (
      /** @type {unknown} */ (p)
    )
  )
  assert.equal(d.target, p.group.at)
  assert.deepEqual(d.region, p.region)
  const { seq, line } = shapeOf(
    /** @type {import('../src/units/go/core/decode.logic.js').Problem} */ (
      /** @type {unknown} */ (p)
    )
  )
  assert.equal(seq, 'captures')
  // what the side to move plays: its best first moves, then its moves along the line
  assert.match(line, /^[A-T]\d+: [A-T]\d+$/)
})
