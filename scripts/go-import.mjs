#!/usr/bin/env node
// Reads An Younggil and David Ormerod's Weekly Go Problems (game-record files, CC BY-NC-SA 4.0)
// and keeps each one the exact search can pose and finish, as "A Self-Study System" Go sets out:
// a question about one named group with one of the four results, whose best first moves include
// every move the file marks correct. The files are read where they were fetched once
// (https://github.com/gogameguru/go-problems); nothing of them but the stones enters, and what
// is kept goes to scripts/lib/go-weekly.json for scripts/gen/go.mjs.
//
//   node scripts/go-import.mjs <the folder weekly-go-problems>
//
// The file names no group and closes no region. The region is every point a line of the file
// plays, and each group with all its liberties there is tried as the group asked about, the
// largest first. The position is cut from an open board, so the search is run twice on it
// (src/units/go/problem.js) and the file enters only when both runs agree. A file its lines do
// not pose is posed from its stones alone (src/units/go/pose.js).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { isMainThread } from 'node:worker_threads'
import { COLUMNS, byPoint, groupAt } from '../src/units/go/core/rules.logic.js'
import { boardOf } from '../src/units/go/core/diagram.logic.js'
import { MOST, TRIED, candidatesOf, drawingsOf } from '../src/units/go/core/pose.logic.js'
import { problemFrom } from '../src/units/go/core/problem.logic.js'
import { kindId, problemId } from '../src/units/go/core/decode.logic.js'
import { read } from './lib/go-sgf.mjs'
import { runPool } from './lib/go-pool.mjs'

// The most positions one search may visit.
const BUDGET = 6e6

/**
 * @typedef {{ path: string, label: string }} Item
 * @typedef {object} Outcome
 * @property {string} label
 * @property {boolean} [death] whether it is a life-and-death file
 * @property {object} [kept]
 * @property {string} [refused]
 */

/**
 * The problem a file's lines give: the region is every point its lines play, the cut that region
 * with its stones and one more line, and the group asked about one whose liberties all lie in
 * the region. The drawing kept, or why none was.
 * @param {{ black: string[], white: string[], played: string[], side: 'B' | 'W' }} f
 * @param {(made: import('../src/units/go/core/decode.logic.js').Problem) => boolean} holds
 * @returns {{ drawing: import('../src/units/go/core/problem.logic.js').Drawing } | { cause: string }}
 */
function fromLines(f, holds) {
  const stones = new Set([...f.black, ...f.white])
  const region = f.played.filter(p => !stones.has(p)).sort(byPoint)
  if (region.length < 2 || region.length > MOST)
    return { cause: `its lines play ${region.length} points` }
  // The cut: every stone and every point of the region, and one more line of points around them.
  const xs = [...stones, ...region].map(p => COLUMNS.indexOf(p.charAt(0)))
  const ys = [...stones, ...region].map(p => Number(p.slice(1)) - 1)
  const x0 = Math.max(0, Math.min(...xs) - 1)
  const y0 = Math.max(0, Math.min(...ys) - 1)
  const x1 = Math.min(18, Math.max(...xs) + 1)
  const y1 = Math.min(18, Math.max(...ys) + 1)
  const diagram = {
    size: 19,
    view: [x0, y0, x1 - x0 + 1, y1 - y0 + 1],
    black: f.black.sort(byPoint),
    white: f.white.sort(byPoint)
  }
  const { board, index, name } = boardOf(diagram)
  const inside = new Set(region.map(index))
  /** @type {ReturnType<typeof groupAt>[]} */
  const groups = []
  const done = new Set()
  board.cells.forEach((c, i) => {
    if (!c || done.has(i)) return
    const g = groupAt(board, i)
    g.stones.forEach(s => done.add(s))
    if (g.liberties.length && g.liberties.every(l => inside.has(l))) groups.push(g)
  })
  groups.sort((a, b) => b.stones.length - a.stones.length)
  let cause = 'no group has all its liberties inside the points played'
  for (const g of groups) {
    const target = g.stones.map(name).sort(byPoint)[0]
    if (target === undefined) throw new Error('a group has a stone')
    /** @type {import('../src/units/go/core/problem.logic.js').Drawing} */
    const drawing = { diagram, region, side: f.side, target, beyond: 'both' }
    const built = problemFrom(drawing, problemId('x'), kindId(0), 'weekly', BUDGET)
    if (!built.ok) cause = built.error
    else if (holds(built.value)) return { drawing }
    else cause = 'a move the file marks correct is not a best first move'
  }
  return { cause }
}

/**
 * The problem a file gives when its lines do not give the region: posed from its stones alone,
 * as a position of a classical collection is, the file's marked moves still checking the answer.
 * @param {{ black: string[], white: string[], side: 'B' | 'W' }} f
 * @param {(made: import('../src/units/go/core/decode.logic.js').Problem) => boolean} holds
 * @returns {{ drawing: import('../src/units/go/core/problem.logic.js').Drawing } | { cause: string }}
 */
function fromStones(f, holds) {
  const position = { black: f.black, white: f.white, side: f.side }
  let cause = 'no group is hemmed in'
  for (const group of candidatesOf(position).slice(0, TRIED)) {
    for (const drawing of drawingsOf(position, group)) {
      const built = problemFrom(drawing, problemId('x'), kindId(0), 'weekly', BUDGET)
      if (built.ok && holds(built.value)) return { drawing }
      cause = built.ok ? 'a move the file marks correct is not a best first move' : built.error
      if (built.ok || built.error !== 'its result depends on what lies beyond the cut') break
    }
  }
  return { cause }
}

/**
 * Whether a file is a life-and-death file: it asks the fate of a group, one whose liberties all
 * lie on points its lines play.
 * @param {{ black: string[], white: string[], played: string[] }} f
 */
function lifeAndDeath({ black, white, played }) {
  const { board, index } = boardOf({ view: [0, 0, 19, 19], black, white })
  const inside = new Set(played.map(index))
  return board.cells.some(
    (c, i) => c !== 0 && groupAt(board, i).liberties.every(l => inside.has(l))
  )
}

/**
 * One file: `{ label, kept }` with the drawing that entered, or `{ label, refused }` with the cause.
 * @param {Item} item
 * @returns {Outcome}
 */
export default function importOne({ path, label }) {
  const file = read(readFileSync(path, 'utf8'))
  if (!file.ok) return { label, refused: file.error }
  const f = file.value
  const { side } = f
  const death = lifeAndDeath(f)
  if (!side || !f.correct.length)
    return { label, death, refused: 'no side to move or no line marked correct' }
  /** @param {import('../src/units/go/core/decode.logic.js').Problem} made */
  const holds = made => f.correct.every(m => made.answers.includes(m))
  const lines = fromLines({ ...f, side }, holds)
  if ('drawing' in lines) return { label, death, kept: { file: label, ...lines.drawing } }
  const stones = fromStones({ ...f, side }, holds)
  return 'drawing' in stones
    ? { label, death, kept: { file: label, ...stones.drawing } }
    : { label, death, refused: `${lines.cause}; posed from its stones alone, ${stones.cause}` }
}

if (isMainThread) {
  const root = process.argv[2]
  if (!root) {
    console.error('Usage: node scripts/go-import.mjs <the folder weekly-go-problems>')
    process.exit(2)
  }
  /** @type {Item[]} */
  const items = []
  for (const tier of ['easy', 'intermediate', 'hard'])
    for (const file of readdirSync(join(root, tier))
      .filter(f => f.endsWith('.sgf'))
      .sort())
      items.push({ path: join(root, tier, file), label: `${tier}/${file.replace(/\.sgf$/, '')}` })
  const results = await runPool(import.meta.url, items, {
    seen: (/** @type {Outcome} */ r, n, all) => n % 20 === 0 && console.error(`${n} of ${all} read`)
  })
  const kept = results.filter(r => r.kept).map(r => r.kept)
  writeFileSync(new URL('lib/go-weekly.json', import.meta.url), JSON.stringify(kept))
  // why each file that does not enter was refused, kept beside the bank
  writeFileSync(
    new URL('lib/go-weekly-refused.json', import.meta.url),
    `[\n${results
      .filter(r => r.refused)
      .map(r => JSON.stringify({ file: r.label, cause: r.refused }))
      .join(',\n')}\n]\n`
  )
  const deaths = results.filter(r => r.death).length
  console.log(`${items.length} files read, ${deaths} life and death, ${kept.length} kept`)
}
