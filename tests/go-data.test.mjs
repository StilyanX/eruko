// The Go unit's material ("A Self-Study System", Go, The material; The build, Go, How problems
// are built and checked): every problem is solved again here by the exact search, its stored
// answers are the search's whole set of best first moves, and each of its fields holds what the
// paper sets.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINDS, PARTS, SECTIONS } from '../src/units/go/core/course.gen.js'
import { PROBLEMS } from '../src/units/go/content/problems.gen.js'
import { boardOf, threatsOf, viewOf } from '../src/units/go/core/diagram.logic.js'
import { REASONS } from '../src/units/go/core/reasons.logic.js'
import { BLACK, WHITE, byPoint, parseCoord } from '../src/units/go/core/rules.logic.js'
import { solve } from '../src/units/go/core/solve.logic.js'

const reasons = new Set(REASONS.map(([key]) => key))

test('every problem enters only as the search solves it: its answers are every best first move', () => {
  for (const p of PROBLEMS) {
    const { board, index, name } = boardOf(p)
    const s = solve(board, p.toMove === 'black' ? BLACK : WHITE, index(p.group.at), threatsOf(p.ko), { budget: 3e6, region: p.region.map(index) })
    assert.ok(s, `${p.id}: the search finishes`)
    assert.deepEqual(s.best.map(name).sort(byPoint), p.answers, p.id)
    assert.equal(s.result, p.result, p.id)
    assert.equal(board.cells[index(p.group.at)], p.group.colour === 'black' ? BLACK : WHITE, p.id)
  }
})

test('a problem holds the paper\'s fields, and its solution a line for each best first move and a reason for each move', () => {
  const ids = new Set()
  for (const p of PROBLEMS) {
    assert.ok(!ids.has(p.id), `${p.id} is used once`)
    ids.add(p.id)
    assert.match(p.id, /^\d+\.\d+$/)
    assert.equal(p.id.split('.')[0], String(p.kind))
    assert.equal(p.size, 19)
    assert.ok(['lives', 'dies', 'ko', 'seki'].includes(p.result), p.id)
    assert.match(p.ko, /^Ko threats elsewhere: (none for either side|Black (none|\d), White (none|\d))\.$/)
    assert.deepEqual(p.solution.lines.map(l => l.first).sort(byPoint), p.answers, p.id)
    const [ox, oy, w, h] = viewOf(p.view)
    for (const at of [...p.black, ...p.white, ...p.region]) {
      const xy = parseCoord(at)
      assert.ok(xy, `${p.id}: ${at} is a point`)
      const [x, y] = xy
      assert.ok(x >= ox && x < ox + w && y >= oy && y < oy + h, `${p.id}: ${at} is in view`)
    }
    for (const line of p.solution.lines) {
      assert.equal(line.moves[0]?.at, line.first)
      // the sides take turns, and no help beyond the fixed list of reasons
      line.moves.forEach((m, i) => {
        assert.equal(m.side, i % 2 === 0 ? p.toMove.charAt(0).toUpperCase() : p.toMove === 'black' ? 'W' : 'B', p.id)
        assert.ok(reasons.has(m.reason), `${p.id}: ${m.reason}`)
      })
      for (const v of line.variations) {
        assert.ok(v.at >= 2 && v.at % 2 === 0, `${p.id}: a variation is another reply of the second side`)
        assert.ok(v.moves.every(m => reasons.has(m.reason)))
        const replied = line.moves[v.at - 1]
        assert.ok(replied, `${p.id}: a variation answers a move of the line`)
        assert.notEqual(v.moves[0]?.at, replied.at)
      }
    }
  }
})

test('the course: five rules parts, the ten first kinds in the paper\'s order, each kind after the kinds its answers use', () => {
  assert.deepEqual(PARTS.map(p => p.name), ['the board and turns', 'liberties and capture', 'ko', 'passing and the end', 'counting by area'])
  const first = ['capture a stone in atari', 'save a stone in atari', 'connect and cut', 'ladders', 'nets', 'living and dead groups in small closed regions', 'snapback', 'connect and die', 'seki', 'capturing races']
  const built = KINDS.filter(k => k.source === 'aether')
  assert.deepEqual(built.map(k => k.name), first.filter(n => built.some(k => k.name === n)))
  assert.deepEqual(built.map(k => k.name), first)
  for (const [i, k] of KINDS.entries()) {
    assert.ok(k.problems.length >= 1, k.name)
    // the found and built problems, then the written ones, which wait apart (own.logic.js)
    assert.deepEqual([...k.problems, ...(k.written ?? [])], PROBLEMS.filter(p => p.kind === k.id).map(p => p.id))
    if (k.written) assert.notEqual(k.source, 'aether', `${k.name}: only a kind from the found sources is written for`)
    for (const a of k.after) assert.ok(KINDS.slice(0, i).some(e => e.id === a), `${k.name} comes after ${a}`)
  }
  assert.equal(PROBLEMS.length, KINDS.reduce((n, k) => n + k.problems.length + (k.written?.length ?? 0), 0))
  assert.equal(SECTIONS[0]?.title, 'Rules')
  assert.equal(SECTIONS.at(-1)?.last, PARTS.length + KINDS.length)
})

test('no two problems of a kind are one position turned or recoloured', () => {
  const shape = (/** @type {(typeof PROBLEMS)[number]} */ p) => {
    const [ox, oy, w, h] = viewOf(p.view)
    const cell = (/** @type {number} */ x, /** @type {number} */ y) => (p.black.some(a => a === at(x, y)) ? 'X' : p.white.some(a => a === at(x, y)) ? 'O' : '.')
    const at = (/** @type {number} */ x, /** @type {number} */ y) => `${'ABCDEFGHJKLMNOPQRST'[ox + x]}${oy + y + 1}`
    const grid = Array.from({ length: h }, (_, y) => Array.from({ length: w }, (_, x) => cell(x, y)))
    const turns = []
    for (const t of [(/** @type {string[][]} */ g) => g, (/** @type {string[][]} */ g) => (g[0] ?? []).map((_, x) => g.map(r => r[x] ?? ''))])
      for (const fx of [false, true])
        for (const fy of [false, true]) {
          let g = t(grid)
          if (fx) g = g.map(r => r.slice().reverse())
          if (fy) g = g.slice().reverse()
          const text = g.map(r => r.join('')).join('/')
          turns.push(text, text.replace(/[XO]/g, (/** @type {string} */ c) => (c === 'X' ? 'O' : 'X')))
        }
    return turns.sort((/** @type {string} */ a, /** @type {string} */ b) => (a < b ? -1 : a > b ? 1 : 0))[0]
  }
  for (const k of KINDS) {
    const seen = new Map()
    for (const p of PROBLEMS.filter(x => x.kind === k.id)) {
      const key = `${shape(p)} ${p.group.colour === p.toMove ? 'own' : 'other'}`
      assert.ok(!seen.has(key), `${p.id} repeats ${seen.get(key)}`)
      seen.set(key, p.id)
    }
  }
})

test('a found or classical problem makes a kind of its own only where no one first kind gives its reasons, and names its source', () => {
  const first = KINDS.filter(k => k.source === 'aether')
  for (const kind of KINDS.filter(k => k.source !== 'aether')) {
    assert.match(kind.name, /^fight \d+$/)
    for (const q of kind.seqs) assert.notEqual(first.filter(k => k.seqs.includes(q)).length, 1, `${kind.name}: ${q}`)
    for (const id of kind.problems) {
      const p = PROBLEMS.find(x => x.id === id)
      assert.ok(p)
      // a classical problem may join a fight a weekly one made: its source still names its own collection
      assert.match(p.source, /^(easy|intermediate|hard)\/\S+\d$|^(Gokyo Shumyo|Xuanxuan Qijing|Guanzi Pu|Igo Hatsuyoron) \d+$/)
    }
  }
})
