#!/usr/bin/env node
// The Go unit's derived files:
//   src/units/go/content/rules-items.gen.js  the rules items of the five parts, each answer worked out
//                                     by the rules program and checked against Tromp's score
//   src/units/go/content/problems.gen.js     every checked problem with its solution
//   src/units/go/core/course.gen.js            the parts and the kinds in course order with their items'
//                                     ids (small, so the unit page loads no problem)
// A problem enters only when the exact search (src/units/go/core/solve.logic.js) solves it to the end and
// every move of its line carries a reason. The first ten kinds take their positions from
// scripts/lib/go-built.mjs (drawn by hand) and scripts/lib/go-found*.json (kept by
// scripts/go-find.mjs); the later kinds from scripts/lib/go-weekly.json (scripts/go-import.mjs)
// and scripts/lib/go-classical.json (scripts/go-classical.mjs). The problems Eruko writes are
// built in the learner's browser, from the found problems the learner got wrong (own.logic.js).
// Run after changing a position: node scripts/gen/go.mjs
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import {
  BLACK,
  WHITE,
  areaScore,
  boardFrom,
  byPoint,
  coord,
  groupAt,
  neighbours,
  parseCoord,
  place
} from '../../src/units/go/core/rules.logic.js'
import { REASONS } from '../../src/units/go/core/reasons.logic.js'
import { trompScore } from '../../src/units/go/core/tromp.logic.js'
import { diagramFrom } from '../../src/units/go/core/diagram.logic.js'
import { HAND, KIND_NAMES, KIND_TERMS } from '../lib/go-built.mjs'
import { problemFrom } from '../../src/units/go/core/problem.logic.js'
import { kindId, problemId } from '../../src/units/go/core/decode.logic.js'
import { COLLECTIONS } from '../lib/go-classical.mjs'
import { PARTS, POSITIONS } from '../lib/go-rules-source.mjs'
import { generated } from '../lib/generated.mjs'

/**
 * @typedef {import('../../src/units/go/core/rules.logic.js').Board} Board
 * @typedef {import('../../src/units/go/core/problem.logic.js').Drawing} PlacedDrawing
 * @typedef {import('../../src/units/go/core/decode.logic.js').Problem} Problem
 * @typedef {import('../lib/go-built.mjs').Drawing} Drawing
 * @typedef {Drawing & { at: 'corner' | 'side', pocket: string, reasons: string, stones: number }} Candidate A position scripts/go-find.mjs kept, with the shape of its pocket and the reasons of its line
 * @typedef {PlacedDrawing & { file: string }} Weekly A position scripts/go-import.mjs kept
 * @typedef {PlacedDrawing & { source: string, n: number }} Classical A position scripts/go-classical.mjs kept
 * @typedef {object} CourseKind One kind of the course.
 * @property {number} id
 * @property {string} name
 * @property {string} source
 * @property {string} [term]
 * @property {string[]} problems
 * @property {string[]} [seqs]
 * @property {number[]} [after]
 */

/**
 * The first element of a list the caller knows is not empty.
 * @template T
 * @param {readonly T[]} list
 * @param {string} what
 * @returns {T}
 */
function head(list, what) {
  const first = list[0]
  if (first === undefined) throw new Error(`${what} is empty`)
  return first
}

const LIB = new URL('../lib/', import.meta.url)
const SIDE = { B: 'Black', W: 'White' }
/** @param {string} s */
const colourOf = s => (s === 'B' ? BLACK : WHITE)

// ---------------------------------------------------------------------------- rules items

/**
 * @param {Board} a
 * @param {Board} b
 */
const same = (a, b) => a.cells.every((c, i) => c === b.cells[i])

/**
 * @param {Board} board
 * @param {string} id
 */
function checkScore(board, id) {
  const mine = areaScore(board)
  const tromp = trompScore(board.w, board.h, (x, y) => {
    const cell = board.cells[y * board.w + x]
    if (cell === undefined) throw new Error(`rules item ${id}: Tromp's count asks for a point off the board`)
    return cell
  })
  if (mine.black !== tromp.black || mine.white !== tromp.white)
    throw new Error(
      `rules item ${id}: the rules program counts ${mine.black}/${mine.white}, Tromp's definition ${tromp.black}/${tromp.white}`
    )
  return mine
}

/**
 * A rules item's question and its one exact answer, worked out by the rules program.
 * @param {import('../lib/go-rules-source.mjs').RulesPosition} p
 * @param {Board} board
 * @param {(text: string) => number} at
 * @param {(i: number) => string} name
 * @param {string} id
 * @returns {{ question: string, answer: string }}
 */
function asked(p, board, at, name, id) {
  const { w } = board
  const lead = p.lead ? `${p.lead} ` : ''
  const { ask } = p
  /** @type {string} */
  let question
  /** @type {string} */
  let answer
  if (ask.type === 'next') {
    question = `How many points lie next to ${ask.at}? Type a number.`
    answer = String(neighbours(w, board.h, at(ask.at)).length)
  } else if (ask.type === 'liberties') {
    const g = groupAt(board, at(ask.at))
    question = `How many liberties does the ${g.colour === BLACK ? 'black' : 'white'} group at ${ask.at} have? Type a number.`
    answer = String(g.liberties.length)
  } else if (ask.type === 'legal') {
    const r = place(board, colourOf(ask.side), at(ask.at))
    // Playing a stone with no liberty is legal under Tromp's rules and illegal under the AGA's:
    // no item asks it.
    if (!r && board.cells[at(ask.at)] === 0)
      throw new Error(`rules item ${id} asks a move the two rule sets judge differently`)
    const repeat = r && (p.earlier ?? []).some(rows => same(boardFrom(rows), r.board))
    question = `${lead}${SIDE[ask.side]} plays ${ask.at}. Is it legal? Type yes or no.`
    answer = ask.side === p.toMove && r && !repeat ? 'yes' : 'no'
  } else if (ask.type === 'removed') {
    const r = place(board, colourOf(ask.side), at(ask.at))
    if (!r) throw new Error(`rules item ${id}: the move is not legal`)
    question = `${lead}${SIDE[ask.side]} plays ${ask.at}. Which stones does the move remove? Type their points, or none.`
    answer = r.captured.map(name).sort(byPoint).join(' ') || 'none'
  } else if (ask.type === 'pass') {
    question = `${lead}${SIDE[ask.side]} passes. Is it legal? Type yes or no.`
    answer = 'yes'
  } else if (ask.type === 'passes') {
    let n = 0
    for (const m of ask.moves) n = m === 'pass' ? n + 1 : 0
    question = `${lead}How many passes in a row are there now? Type a number.`
    answer = String(n)
  } else {
    const score = areaScore(board)
    question = `${lead}What is ${SIDE[ask.side]}'s area count? Type a number.`
    answer = String(score[ask.side === 'B' ? 'black' : 'white'])
  }
  return { question, answer }
}

/**
 * @param {import('../lib/go-rules-source.mjs').RulesPosition} p
 * @param {string} id
 */
function rulesItem(p, id) {
  const board = boardFrom(p.rows)
  const { w } = board
  /** @param {string} text */
  const at = text => {
    const point = parseCoord(text)
    if (!point) throw new Error(`rules item ${id}: ${text} is no point`)
    const [x, y] = point
    return y * w + x
  }
  /** @param {number} i */
  const name = i => coord(i % w, Math.floor(i / w))
  checkScore(board, id)
  const { question, answer } = asked(p, board, at, name, id)
  return { position: diagramFrom(p.rows, 0, 0, p.rows.length), question, answer }
}

// A rules item is a rule with its cases: the stored positions of its part whose question that
// rule decides, in the order they stand. It keeps the id its first position had, so a line kept
// under that id stays with the same rule.
/** @type {{ id: string, part: number, cases: ReturnType<typeof rulesItem>[], rule: string }[]} */
const items = []
const parts = PARTS.map((name, k) => {
  /** @type {string[]} */
  const ids = []
  POSITIONS.filter(p => p.part === k + 1).forEach((p, i) => {
    const id = `R${k + 1}.${i + 1}`
    const item = items.find(x => x.part === p.part && x.rule === p.rule)
    if (item) item.cases.push(rulesItem(p, id))
    else {
      ids.push(id)
      items.push({ id, part: p.part, cases: [rulesItem(p, id)], rule: p.rule })
    }
  })
  return { n: k + 1, name, items: ids, cases: ids.map(id => items.find(x => x.id === id)?.cases.length ?? 1) }
})

// ---------------------------------------------------------------------------- problems

// How many problems a first kind takes first: the hand-drawn ones, then the found ones. FILL: how
// many it holds once filled from its found positions, after every other problem has entered.
const MOST = 8
const FILL = 12

/** @type {Record<string, Candidate[]>} */
const found = {}
for (const file of ['go-found.json', 'go-found-ladders.json']) {
  const url = new URL(file, LIB)
  if (!existsSync(url)) continue
  // The file scripts/go-find.mjs wrote: its positions by kind.
  /** @type {Record<string, import('../go-find.mjs').Found[]>} */
  const kept = JSON.parse(readFileSync(url, 'utf8'))
  for (const [kind, list] of Object.entries(kept))
    (found[kind] ??= []).push(
      ...list.map(p => {
        const width = head(p.rows, 'a drawing').length
        return {
          rows: p.rows,
          at: p.pocket.endsWith('s') ? /** @type {const} */ ('side') : /** @type {const} */ ('corner'),
          side: p.side,
          // the search tool names the group by its point on the drawing
          target: coord(p.target % width, Math.floor(p.target / width)),
          pocket: p.pocket,
          reasons: p.reasons,
          stones: p.stones
        }
      })
    )
}

/**
 * A position with the colours changed is the same position: one key for both.
 * @param {string[]} rows
 */
const swap = rows => rows.map(r => r.replace(/[XO]/g, c => (c === 'X' ? 'O' : 'X')))
/** @param {{ side: string, rows: string[] }} p */
const keyOf = p =>
  head(
    [
      `${p.side}${p.rows.join('/')}`,
      `${p.side === 'B' ? 'W' : 'B'}${swap(p.rows).join('/')}`
    ].sort(),
    'the keys of a position'
  )

/**
 * The found positions of a kind, the simplest of each shape of line first, turn about.
 * @param {Candidate[]} list
 * @param {Set<string>} taken
 * @param {number} room
 * @param {Set<string>} [drawn] the pictures the kind already holds
 * @returns {Candidate[]}
 */
function choose(list, taken, room, drawn = new Set()) {
  /** @type {Map<string, Candidate[]>} */
  const groups = new Map()
  for (const p of list) {
    const k = `${p.pocket} ${p.reasons}`
    let group = groups.get(k)
    if (!group) groups.set(k, (group = []))
    group.push(p)
  }
  const queues = [...groups.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([, g]) =>
      g.sort((a, b) => a.stones - b.stones || (a.rows.join() < b.rows.join() ? -1 : 1))
    )
  /** @type {Candidate[]} */
  const out = []
  // Two drawings with the same stones inside and another group asked about are one position.
  for (let turn = 0; out.length < room && queues.some(q => q.length); turn++) {
    const q = queues[turn % queues.length]
    if (!q) throw new Error('a kind has found positions and so a queue of them')
    const p = q.shift()
    if (!p) continue
    const k = keyOf(p)
    const picture = head(
      [p.rows.join('/'), swap(p.rows).join('/')].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
      'the pictures of a position'
    )
    if (taken.has(k) || drawn.has(picture)) continue
    taken.add(k)
    drawn.add(picture)
    out.push(p)
  }
  return out
}

/**
 * A drawing turned to one of its eight places on the board: rows, where it stands, the target.
 * @param {Drawing} p
 * @param {number} n
 */
function turned(p, n) {
  let grid = p.rows.map(r => r.split('')).reverse() // grid[y][x], y from the bottom
  const target = parseCoord(p.target)
  if (!target) throw new Error(`${p.target} is no point`)
  const [tx0, ty0] = target
  let tx = tx0
  let ty = ty0
  let edges = { left: p.at === 'corner', bottom: p.at !== 'centre', right: false, top: false }
  if (n & 4) {
    grid = head(grid, 'a drawing').map((_, x) => grid.map(row => row[x] ?? ''))
    ;[tx, ty] = [ty, tx]
    edges = { left: edges.bottom, bottom: edges.left, right: edges.top, top: edges.right }
  }
  const w = head(grid, 'a drawing').length
  const h = grid.length
  if (n & 1) {
    grid = grid.map(row => row.slice().reverse())
    tx = w - 1 - tx
    edges = { ...edges, left: edges.right, right: edges.left }
  }
  if (n & 2) {
    grid = grid.slice().reverse()
    ty = h - 1 - ty
    edges = { ...edges, bottom: edges.top, top: edges.bottom }
  }
  const ox = edges.left ? 0 : edges.right ? 19 - w : 6
  const oy = edges.bottom ? 0 : edges.top ? 19 - h : 6
  return { rows: grid.map(row => row.join('')).reverse(), ox, oy, tx, ty }
}

/**
 * A problem from a drawing turned to its place, or null when the search does not finish it.
 * @param {Drawing} p
 * @param {number} n
 * @param {string} id
 * @param {number} kind
 */
function problemOf(p, n, id, kind) {
  const t = turned(p, n)
  const clean = t.rows.map(r => r.replace(/,/g, '.'))
  const diagram = diagramFrom(clean, t.ox, t.oy)
  const h = t.rows.length
  /** @type {string[]} */
  const region = []
  t.rows.forEach((row, r) =>
    row.split('').forEach((ch, x) => ch === '.' && region.push(coord(t.ox + x, t.oy + h - 1 - r)))
  )
  const made = problemFrom(
    {
      diagram,
      region,
      side: p.side,
      target: coord(t.ox + t.tx, t.oy + t.ty),
      ...(p.threats ? { threats: p.threats } : {})
    },
    problemId(id),
    kindId(kind)
  )
  return made.ok ? made.value : null
}

/** @type {Problem[]} */
const problems = []
/** @type {CourseKind[]} */
const kinds = []
/** @type {Set<string>} */
const taken = new Set()
let turn = 0
/** @type {Map<number, Set<string>>} */
const pictures = new Map()
KIND_NAMES.forEach((name, k) => {
  const n = k + 1
  const hand = HAND[n] ?? []
  hand.forEach(p => taken.add(keyOf(p)))
  const drawn = new Set()
  pictures.set(n, drawn)
  /** @type {Drawing[]} */
  const drawings = [...hand, ...choose(found[n] ?? [], taken, MOST - hand.length, drawn)]
  /** @type {string[]} */
  const ids = []
  for (const p of drawings) {
    const made = problemOf(p, turn % 8, `${n}.${ids.length + 1}`, n)
    if (!made) continue
    turn++
    ids.push(made.id)
    problems.push(made)
  }
  // A kind enters the course only with at least one checked problem.
  const term = KIND_TERMS[n]
  if (ids.length)
    kinds.push({
      id: n,
      name,
      source: 'aether',
      ...(term ? { term } : {}),
      problems: ids
    })
  else console.log(`kind ${n} (${name}) holds no checked problem and is skipped`)
})

// A kind comes after every kind whose answers it uses: that kind's sequence of reasons, repeats
// counted once, occurs in order within its own.
/** @param {string[]} seq */
const once = seq => seq.filter((r, i) => r !== seq[i - 1])
/** @param {Problem} p */
const seqOf = p => once(head(p.solution.lines, 'the solution').moves.map(m => m.reason))
/** @param {CourseKind} kind */
const seqs = kind =>
  problems
    .filter(p => p.kind === kind.id)
    .flatMap(p => p.solution.lines.map(l => once(l.moves.map(m => m.reason))))
/**
 * @param {string[]} small
 * @param {string[]} big
 */
const within = (small, big) => {
  let i = 0
  for (const r of big) if (r === small[i]) i++
  return i === small.length
}

// The found problems (scripts/go-import.mjs), in file order, then the classical collections
// (scripts/go-classical.mjs), in their own order. A problem joins a kind already in the course
// when its sequence of reasons equals the sequence of one of that kind's problems; every other
// kind is named by its reasons in order, joined by "then", and placed after the kinds of its
// source that its answers use, kinds with no order between them keeping the order of their
// first problem. Once placed, each such kind is named by its place among them, "fight 1" on:
// a name of its reasons gave a kind of one problem its answer away and read as a chain.
/**
 * What a tool wrote to scripts/lib: its list of positions, or none when it has not run.
 * @param {string} file
 * @returns {unknown}
 */
const read = file =>
  existsSync(new URL(file, LIB)) ? JSON.parse(readFileSync(new URL(file, LIB), 'utf8')) : []
// A kind is named by what its moves do; a pass by the move itself, since its clause says why.
/** @type {Record<string, string>} */
const WORDS = {
  ...Object.fromEntries(REASONS.map(([key, clause]) => [key, clause.toLowerCase()])),
  pass: 'passes'
}
/** @type {Record<string, string>} */
const COLLECTION = Object.fromEntries(COLLECTIONS.map(c => [c.key, c.name]))
// The most positions one search may visit for a found or classical problem: go-import.mjs's own.
const FOUND = 6e6
/** @type {Map<string, CourseKind>} */
const bySeq = new Map()
// A sequence that two of the built kinds give names neither: a found problem with it makes a
// kind of its own, named by its reasons.
/** @type {Map<string, CourseKind[]>} */
const givers = new Map()
for (const k of kinds)
  for (const q of new Set(seqs(k).map(x => x.join('|'))))
    givers.set(q, [...(givers.get(q) ?? []), k])
for (const [q, list] of givers) if (list.length === 1) bySeq.set(q, head(list, 'the givers of a sequence'))
/**
 * @template {PlacedDrawing} D
 * @param {D[]} drawings
 * @param {string} source
 * @param {(d: D) => string} nameOf
 */
function enter(drawings, source, nameOf) {
  /** @type {(CourseKind & { seq: string[] })[]} */
  const fresh = []
  for (const d of drawings) {
    const built = problemFrom(d, problemId('x'), kindId(0), source, FOUND)
    if (!built.ok) continue
    const seq = seqOf(built.value)
    const key = seq.join('|')
    let kind = bySeq.get(key)
    if (!kind) {
      /** @type {CourseKind & { seq: string[] }} */
      const created = {
        id: Math.max(0, ...kinds.map(k => k.id), ...fresh.map(k => k.id)) + 1,
        name: seq.map(r => WORDS[r]).join(', then '),
        source,
        seq,
        problems: []
      }
      bySeq.set(key, created)
      fresh.push(created)
      kind = created
    }
    const made = {
      ...built.value,
      id: problemId(`${kind.id}.${kind.problems.length + 1}`),
      kind: kindId(kind.id),
      source: nameOf(d)
    }
    kind.problems.push(made.id)
    problems.push(made)
  }
  /** @type {(CourseKind & { seq: string[] })[]} */
  const ordered = []
  for (const kind of fresh) {
    // before the first kind already placed whose answers use this one
    const at = ordered.findIndex(k => k.seq.length > kind.seq.length && within(kind.seq, k.seq))
    ordered.splice(at < 0 ? ordered.length : at, 0, kind)
  }
  for (const kind of ordered)
    kinds.push({ id: kind.id, name: kind.name, source: kind.source, problems: kind.problems })
  // a kind is found by its line in the course from here on
  for (const kind of ordered) {
    const placed = kinds.find(k => k.id === kind.id)
    if (!placed) throw new Error(`kind ${kind.id} was just added to the course`)
    bySeq.set(kind.seq.join('|'), placed)
  }
}
// the files in their own order: the tiers easy, intermediate, hard, and each by its number
const TIERS = ['easy', 'intermediate', 'hard']
/** @param {Weekly} d */
const fileOrder = d => {
  const number = d.file.match(/(\d+)$/)?.[1]
  if (number === undefined) throw new Error(`${d.file} ends in no number`)
  const tier = TIERS.indexOf(d.file.split('/')[0] ?? '')
  if (tier < 0) throw new Error(`${d.file} is in none of the tiers ${TIERS.join(', ')}`)
  return tier * 1000 + Number(number)
}
// The files scripts/go-import.mjs and scripts/go-classical.mjs wrote.
const weekly = /** @type {Weekly[]} */ (read('go-weekly.json'))
const classical = /** @type {Classical[]} */ (read('go-classical.json'))
enter(
  weekly.sort((a, b) => fileOrder(a) - fileOrder(b)),
  'weekly',
  d => d.file
)
enter(classical, 'classical', d => {
  const name = COLLECTION[d.source]
  if (name === undefined) throw new Error(`${d.source} ${d.n} is from no collection Eruko reads`)
  return `${name} ${d.n}`
})
/**
 * One key for a placed problem and its copies turned or mirrored on the board, with the colours
 * changed or not: a drawing and its mirror image may come from two found positions.
 * @param {Problem} p
 */
const placedKey = p => {
  /** @param {string} at @param {number} n */
  const turn = (at, n) => {
    const point = parseCoord(at)
    if (!point) throw new Error(`${at} is no point`)
    let [x, y] = point
    if (n & 4) [x, y] = [y, x]
    if (n & 1) x = p.size - 1 - x
    if (n & 2) y = p.size - 1 - y
    return coord(x, y)
  }
  /** @param {readonly string[]} list @param {number} n */
  const all = (list, n) =>
    list
      .map(at => turn(at, n))
      .sort(byPoint)
      .join(' ')
  /** @type {string[]} */
  const keys = []
  for (let n = 0; n < 8; n++) {
    keys.push(`${p.toMove}|${all(p.black, n)}|${all(p.white, n)}`)
    keys.push(`${p.toMove === 'black' ? 'white' : 'black'}|${all(p.white, n)}|${all(p.black, n)}`)
  }
  return head(keys.sort(), 'the keys of a problem')
}
// The first kinds filled up to FILL, after the found and classical problems have joined them,
// so every problem already in the bank keeps its id.
const placed = new Set(problems.map(placedKey))
for (const kind of kinds.filter(k => k.source === 'aether')) {
  // the kind's found positions not yet taken, in the order choose gives them
  const rest = choose(found[kind.id] ?? [], new Set(taken), Infinity, pictures.get(kind.id))
  for (const p of rest) {
    if (kind.problems.length >= FILL) break
    if (taken.has(keyOf(p))) continue
    taken.add(keyOf(p))
    const made = problemOf(p, turn % 8, `${kind.id}.${kind.problems.length + 1}`, kind.id)
    if (!made || placed.has(placedKey(made))) continue
    placed.add(placedKey(made))
    turn++
    kind.problems.push(made.id)
    problems.push(made)
  }
}
// Ids never reused, never shown (<go-material-problem>): scripts/lib/go-ids.json keeps the id
// each problem and each kind was ever given, a problem by its position's key (placedKey), a kind
// by its first problem's. One met again takes its id back; a new one takes the id the order above
// gives it when no one had it, else the next unused number. The file only grows, so a learner's
// record never names another problem when an importer's output changes.
const IDS = new URL('go-ids.json', LIB)
/** @type {{ kinds: Record<string, number>, problems: Record<string, string> }} */
const ledger = existsSync(IDS) ? JSON.parse(readFileSync(IDS, 'utf8')) : { kinds: {}, problems: {} }
/** @type {Map<string, Problem>} */
const byId = new Map(problems.map(p => [p.id, p]))
/** @param {string} id */
const problemAt = id => {
  const p = byId.get(id)
  if (!p) throw new Error(`problem ${id} is in no kind`)
  return p
}
const kindsUsed = new Set(Object.values(ledger.kinds))
/** @type {Map<number, number>} */
const kindIds = new Map()
for (const kind of kinds) {
  const key = placedKey(problemAt(head(kind.problems, `kind ${kind.id}`)))
  let id = ledger.kinds[key]
  if (id === undefined) {
    id = kindsUsed.has(kind.id) ? Math.max(0, ...kindsUsed, ...kinds.map(k => k.id)) + 1 : kind.id
    ledger.kinds[key] = id
    kindsUsed.add(id)
  }
  kindIds.set(kind.id, id)
}
const problemsUsed = new Set(Object.values(ledger.problems))
/** @type {Map<string, string>} */
const problemIds = new Map()
for (const kind of kinds) {
  const k = kindIds.get(kind.id)
  kind.problems.forEach((old, place) => {
    const key = placedKey(problemAt(old))
    let id = ledger.problems[key]
    if (id === undefined) {
      id = `${k}.${place + 1}`
      for (let n = place + 2; problemsUsed.has(id); n++) id = `${k}.${n}`
      ledger.problems[key] = id
      problemsUsed.add(id)
    }
    problemIds.set(old, id)
  })
}
for (const p of problems) Object.assign(p, { id: problemIds.get(p.id), kind: kindIds.get(p.kind) })
for (const kind of kinds) {
  kind.id = kindIds.get(kind.id) ?? kind.id
  kind.problems = kind.problems.map(id => problemIds.get(id) ?? id)
}
writeFileSync(IDS, `${JSON.stringify(ledger, null, 1)}\n`)
let fights = 0
for (const kind of kinds) if (kind.source !== 'aether') kind.name = `fight ${++fights}`
// The bank stands in course order: kind by kind.
problems.sort(
  (a, b) => kinds.findIndex(k => k.id === a.kind) - kinds.findIndex(k => k.id === b.kind)
)
for (const [k, kind] of kinds.entries()) {
  const mine = seqs(kind)
  // each sequence of reasons the kind's problems give, which a problem from the learner's own games is matched against
  kind.seqs = [...new Set(mine.map(q => q.join('|')))].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
  kind.after = kinds
    .slice(0, k)
    .filter(earlier => seqs(earlier).some(a => mine.some(b => b.length > a.length && within(a, b))))
    .map(earlier => earlier.id)
}

const DATA = new URL('../../src/units/go/', import.meta.url)
const GEN = 'scripts/gen/go.mjs'
writeFileSync(
  new URL('content/rules-items.gen.js', DATA),
  generated(
    GEN,
    `// The rules items of the five parts: the rule in one plain sentence, and its cases, each a
// stored position with one question with one exact answer that the rule decides.
// prettier-ignore
export const RULES_ITEMS = ${JSON.stringify(items)}
`
  )
)
writeFileSync(
  new URL('content/problems.gen.js', DATA),
  generated(
    GEN,
    `// Every checked problem: its diagram (the board's size, the cut in view, the stones), the
// points of its closed region, the side to move, the group asked about, the ko field, every best
// first move, the result, and its solution.
// prettier-ignore
export const PROBLEMS = ${JSON.stringify(problems)}
`
  )
)
// The unit page's sections: runs of the course order, the rules parts and then the kinds by
// where their problems come from. A section with no kind is left out.
/** @type {[string, string][]} */
const SOURCES = [
  ['aether', 'First kinds'],
  ['weekly', 'Fights from Weekly Go Problems'],
  ['classical', 'Fights from the classical collections']
]
/** @type {{ title: string, first: number, last: number }[]} */
const sections = [{ title: 'Rules', first: 1, last: parts.length }]
for (const [source, title] of SOURCES) {
  const n = kinds.filter(k => k.source === source).length
  const previous = sections.at(-1)
  if (!previous) throw new Error('the Rules section comes first')
  const first = previous.last + 1
  if (n) sections.push({ title, first, last: first + n - 1 })
}

writeFileSync(
  new URL('core/course.gen.js', DATA),
  generated(
    GEN,
    `// PARTS: the five rules parts with their items'
// ids and how many cases each item holds. KINDS: the kinds in course order, each with its number, its name, the kinds its answers
// use, where its problems come from, and their ids. SECTIONS: the unit page's sections over the
// parts and then the kinds.
// prettier-ignore
export const PARTS = ${JSON.stringify(parts)}
// prettier-ignore
export const KINDS = ${JSON.stringify(kinds)}
// prettier-ignore
export const SECTIONS = ${JSON.stringify(sections)}
`
  )
)
console.log(parts.map(p => `part ${p.n} ${p.name}: ${p.items.length}`).join('\n'))
console.log(
  kinds
    .map(
      k => `kind ${k.id} ${k.name}: ${k.problems.length} (after ${(k.after ?? []).join(', ') || 'none'})`
    )
    .join('\n')
)
