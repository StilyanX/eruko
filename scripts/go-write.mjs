#!/usr/bin/env node
// Writes problems for the Go unit's kinds that hold fewer than 12, once every found source is
// used, as "A Self-Study System" sets out (Plateaus and the end): the course goes on with items
// Eruko writes and checks the same way as the found ones. Each written problem is a position
// changed by one stone from a problem the kind already holds: a stone of either colour added on
// a point of its region, or a stone taken away. It is posed and searched the same way as the
// problem it came from (problem.logic.js: an open position searched twice, both runs agreeing),
// and kept when its sequence of reasons is one the kind gives and what the side to move plays
// (its best first moves and its moves along the line) is new to the kind. What is kept goes to scripts/lib/go-written.json, each position
// with its sequence of reasons and the found source it was changed from, whose terms it keeps
// (NOTICE), and scripts/gen/go.mjs fills the kinds from it.
//
//   node scripts/go-write.mjs [rounds]
//
// A round tries every drawing one stone away from the kind's problems; the next round starts
// from the problems it kept, and from a few drawings that made a problem of another sequence,
// so that a kind whose problems allow no one-stone change of its own reaches further.
//
// Run after scripts/gen/go.mjs has built the bank from the found sources; run the generator
// again after it.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { isMainThread } from 'node:worker_threads'
import { byPoint, groupAt, neighbours } from '../src/units/go/core/rules.logic.js'
import { boardOf } from '../src/units/go/core/diagram.logic.js'
import { problemFrom } from '../src/units/go/core/problem.logic.js'
import { kindId, problemId } from '../src/units/go/core/decode.logic.js'
import { runPool } from './lib/go-pool.mjs'

// The most positions one search may visit: the importers' own.
const BUDGET = 6e6
// How many problems a kind is filled to.
export const FILL = 12

/**
 * @typedef {import('../src/units/go/core/problem.logic.js').Drawing} Drawing
 * @typedef {import('../src/units/go/core/decode.logic.js').Problem} Problem
 * @typedef {{ kind: number, from: string, drawing: Drawing }} Item A drawing to search, for a kind, changed from a problem of the found source `from`
 * @typedef {Item & ({ seq: string, line: string } | {})} Outcome
 */

/** @param {string[]} seq */
const once = seq => seq.filter((r, i) => r !== seq[i - 1])
/**
 * The sequence of reasons of a problem's first line, repeats counted once, and what the side to
 * move does: its best first moves and its moves along that line. A written problem is kept by
 * the first, and only when the second is new to its kind: a reply of the other side elsewhere
 * makes no new problem.
 * @param {Problem} p
 */
export function shapeOf(p) {
  const line = p.solution.lines[0]
  if (!line) throw new Error(`problem ${p.id} has a line`)
  const side = line.moves[0]?.side
  const mine = line.moves.filter(m => m.side === side).map(m => m.at ?? 'pass')
  return {
    seq: once(line.moves.map(m => m.reason)).join('|'),
    line: `${p.answers.join(' ')}: ${mine.join(' ')}`
  }
}

/**
 * The drawing a problem was built from.
 * @param {Problem} p
 * @returns {Drawing}
 */
export const drawingOf = p => ({
  diagram: { size: p.size, view: p.view, black: p.black, white: p.white },
  region: p.region,
  side: p.toMove === 'black' ? 'B' : 'W',
  target: p.group.at,
  ...(p.beyond ? { beyond: p.beyond } : {})
})

/**
 * Every drawing one stone away from `d`: a stone of either colour added on a point of the
 * region, or a stone not of the group asked about taken away, its point joining the region when
 * it touches it. A drawing that leaves a group with no liberty, or a region of one point, is
 * left out.
 * @param {Drawing} d
 * @returns {Drawing[]}
 */
export function changed(d) {
  const { diagram } = d
  const { board, index } = boardOf(diagram)
  const asked = new Set(groupAt(board, index(d.target)).stones)
  /** @type {Drawing[]} */
  const out = []
  /**
   * @param {string[]} black
   * @param {string[]} white
   * @param {string[]} region
   */
  const add = (black, white, region) => {
    const next = { ...diagram, black: black.sort(byPoint), white: white.sort(byPoint) }
    const b = boardOf(next).board
    if (region.length < 2 || b.cells.some((c, i) => c && !groupAt(b, i).liberties.length)) return
    out.push({ ...d, diagram: next, region: region.sort(byPoint) })
  }
  for (const at of d.region) {
    const rest = d.region.filter(r => r !== at)
    add([...diagram.black, at], [...diagram.white], rest)
    add([...diagram.black], [...diagram.white, at], rest)
  }
  const inside = new Set(d.region.map(index))
  for (const at of [...diagram.black, ...diagram.white]) {
    const i = index(at)
    if (asked.has(i)) continue
    const touches = neighbours(board.w, board.h, i).some(j => inside.has(j))
    add(
      diagram.black.filter(s => s !== at),
      diagram.white.filter(s => s !== at),
      touches ? [...d.region, at] : [...d.region]
    )
  }
  return out
}

/**
 * One drawing searched: its sequence of reasons and line when it makes a problem.
 * @param {Item} item
 * @returns {Outcome}
 */
export default function writeOne(item) {
  const made = problemFrom(item.drawing, problemId('x'), kindId(item.kind), 'aether', BUDGET)
  return made.ok ? { ...item, ...shapeOf(made.value) } : item
}

// How many drawings that make a problem of another sequence each kind walks on from in a round.
const WALK = 40

if (isMainThread && process.argv[1] === fileURLToPath(import.meta.url)) {
  const rounds = Number(process.argv[2] ?? 6)
  const { PROBLEMS } = await import('../src/units/go/content/problems.gen.js')
  const { KINDS } = await import('../src/units/go/core/course.gen.js')
  const problems = /** @type {Problem[]} */ (/** @type {unknown} */ (PROBLEMS))
  /** @type {{ seq: string, from: string, drawing: Drawing }[]} */
  const kept = []
  const open = KINDS.filter(k => k.problems.length < FILL).map(kind => {
    const mine = problems.filter(p => p.kind === kind.id)
    return {
      kind,
      // the sequences the kind is found by: those of its problems' first lines
      seqs: new Set(mine.map(p => shapeOf(p).seq)),
      lines: new Set(mine.map(p => shapeOf(p).line)),
      tried: new Set(mine.map(p => JSON.stringify(drawingOf(p)))),
      seeds: mine.map(p => ({ from: p.source, drawing: drawingOf(p) })),
      have: mine.length
    }
  })
  for (let r = 0; r < rounds; r++) {
    const live = open.filter(k => k.have < FILL && k.seeds.length)
    if (!live.length) break
    /** @type {Item[]} */
    const items = []
    for (const k of live) {
      for (const { from, drawing: seed } of k.seeds)
        for (const drawing of changed(seed)) {
          const key = JSON.stringify(drawing)
          if (k.tried.has(key)) continue
          k.tried.add(key)
          items.push({ kind: k.kind.id, from, drawing })
        }
      k.seeds = []
    }
    const results = await runPool(import.meta.url, items)
    for (const k of live) {
      /** @type {Item[]} */
      const walk = []
      for (const res of results) {
        if (res.kind !== k.kind.id || !('seq' in res) || k.lines.has(res.line)) continue
        k.lines.add(res.line)
        if (!k.seqs.has(res.seq)) {
          walk.push(res)
          continue
        }
        if (k.have >= FILL) continue
        k.seeds.push(res)
        kept.push({ seq: res.seq, from: res.from, drawing: res.drawing })
        k.have++
      }
      k.seeds.push(...walk.slice(0, WALK))
      console.error(`${k.kind.name}: round ${r + 1}, ${k.have} held`)
    }
  }
  writeFileSync(
    new URL('lib/go-written.json', import.meta.url),
    `[\n${kept.map(({ seq, from, drawing }) => JSON.stringify({ seq, from, ...drawing })).join(',\n')}\n]\n`
  )
  console.log(`${kept.length} written problems kept`)
}
