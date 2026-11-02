// Hides: the exact search the Go unit's problems rest on. A problem is a position as drawn, a side
// to move, a group asked about, and each side's ko threats elsewhere. The search plays every legal
// move and pass to the end, under the area rules of rules.logic.js, and returns the whole set of
// best first moves with the result of each: lives, dies, ko or seki. A problem it cannot finish
// within its node budget is not used (`solve` returns null). Tested in tests/go-solve.test.mjs,
// and against the first search the unit had (scripts/lib/go-solve-first.mjs) in
// tests/go-solve-check.test.mjs.
//
// How it is built. One board is played on and taken back, never copied. Each of the two
// questions "does the group at least stand in seki?" and "does it live?" is searched on its own
// as a yes or no, which lets a side stop at its first move that settles the question. A position
// already answered is looked up by three 32-bit keys kept up to date move by move, and the move
// that settled a position is tried first when the position is met again. When the budget runs
// out, `over` is set and every call returns at once, leaving the board as it stands and nothing
// stored; the board is set back before a line is read again.
import { assert } from '../../../kernel/invariant.logic.js'
import { BLACK, groupAt, neighbours, other } from './rules.logic.js'

// An element of a typed array. The search keeps every index in range, so a miss is a broken
// invariant, and the check is one comparison on a value already loaded. One reader for each kind
// of array, so that each stays on the one element type the engine has seen at it.
/**
 * @param {string} kind
 * @param {number} i
 * @returns {never}
 */
function outside(kind, i) {
  assert(false, `The search read ${kind} index ${i}, which its arrays do not hold`)
}
/** @param {Uint8Array} a @param {number} i */
const u8 = (a, i) => a[i] ?? outside('Uint8Array', i)
/** @param {Int16Array} a @param {number} i */
const i16 = (a, i) => a[i] ?? outside('Int16Array', i)
/** @param {Int32Array} a @param {number} i */
const i32 = (a, i) => a[i] ?? outside('Int32Array', i)
/** @param {Uint32Array} a @param {number} i */
const u32 = (a, i) => a[i] ?? outside('Uint32Array', i)
/** @param {Float64Array} a @param {number} i */
const f64 = (a, i) => a[i] ?? outside('Float64Array', i)
/** @param {number[]} a @param {number} i */
const num = (a, i) => a[i] ?? outside('Array', i)

/**
 * @typedef {{ point: number | null, side: number, captured: number[], value: number, only?: true }} Ply One move or pass of a line
 * @typedef {{ at: number, side: number, point: number, captured: number[], v: number }} Variation Another reply at ply `at`
 * @typedef {{ plies: Ply[], variations: Variation[] }} PrincipalLine
 * @typedef {{ branch?: number, forced?: Record<number, number> }} LineOptions
 * @typedef {{ left?: boolean, right?: boolean, top?: boolean, bottom?: boolean }} Cut
 * @typedef {{ budget?: number, region?: number[], outside?: 'open' | 'attacker', cut?: Cut, table?: number }} SolveOptions
 * @typedef {{ black?: number, white?: number }} Threats
 * @typedef {'dies' | 'ko' | 'seki' | 'lives'} Fate What becomes of the group asked about with best play
 * @typedef {{ defender: number, results: Record<number, Fate>, best: number[], result: Fate, ko: boolean, line: (first: number, options?: LineOptions) => PrincipalLine | null }} Solution
 * @typedef {{ point: number | null, captured: number[], v: number, near: boolean, side: number, passes: number, a: number, d: number, threat?: number | undefined, only?: boolean }} Child
 */

/**
 * The four results, from the defender's side: dies < ko < seki < lives.
 * @type {readonly [Fate, Fate, Fate, Fate]}
 */
const RESULTS = ['dies', 'ko', 'seki', 'lives']

const DIES = 0
const SEKI = 1
const LIVES = 2
const FAR = 1 << 30

/**
 * The chains of `colour` on a board: each point's chain, and each chain's stones.
 * @param {import('./rules.logic.js').Board} b
 * @param {number} colour
 */
function chainsOf(b, colour) {
  const chainOf = new Int32Array(b.cells.length).fill(-1)
  /** @type {number[][]} */
  const chains = []
  for (let i = 0; i < b.cells.length; i++) {
    if (u8(b.cells, i) === colour && i32(chainOf, i) < 0) {
      const g = groupAt(b, i)
      for (const s of g.stones) chainOf[s] = chains.length
      chains.push(g.stones)
    }
  }
  return { chainOf, chains }
}

/**
 * The regions of a board that hold no stone of `colour`: each with the chains beside it, and the
 * chains for which it is vital, every empty point of it touching that chain. A region with no
 * empty point is no eye: it cannot be vital.
 * @param {import('./rules.logic.js').Board} b
 * @param {number} colour
 * @param {Int32Array} chainOf
 */
function regionsOf(b, colour, chainOf) {
  const { w, h, cells } = b
  const regionOf = new Int32Array(cells.length).fill(-1)
  /** @type {{ adj: Set<number>, vitalFor: Set<number> }[]} */
  const regions = []
  for (let i = 0; i < cells.length; i++) {
    if (u8(cells, i) === colour || i32(regionOf, i) >= 0) continue
    const pts = [i]
    regionOf[i] = regions.length
    /** @type {Set<number>} */
    const adj = new Set()
    // an array iterator reads the length at each step, so points pushed meanwhile are visited
    for (const p of pts) {
      for (const j of neighbours(w, h, p)) {
        if (u8(cells, j) === colour) adj.add(i32(chainOf, j))
        else if (i32(regionOf, j) < 0) {
          regionOf[j] = regions.length
          pts.push(j)
        }
      }
    }
    /** @param {number} c */
    const vital = c =>
      pts.some(p => u8(cells, p) === 0) &&
      pts.every(
        p =>
          u8(cells, p) !== 0 ||
          neighbours(w, h, p).some(j => u8(cells, j) === colour && i32(chainOf, j) === c)
      )
    regions.push({ adj, vitalFor: new Set([...adj].filter(vital)) })
  }
  return regions
}

/**
 * Benson's test: whether the group at `t` cannot be captured however the other side plays, with
 * every other move passed. A chain is alive when it has two or more vital regions, an empty
 * region of the board all of whose empty points touch the chain.
 * @param {import('./rules.logic.js').Board} b
 * @param {number} t
 * @returns {boolean}
 */
export function unconditionallyAlive(b, t) {
  const colour = b.cells[t]
  if (!colour) return false
  const { chainOf, chains } = chainsOf(b, colour)
  let alive = new Set(chains.keys())
  let regs = regionsOf(b, colour, chainOf)
  for (;;) {
    /** @type {Map<number, number>} */
    const vitalCount = new Map([...alive].map(c => [c, 0]))
    for (const r of regs)
      for (const c of r.vitalFor) if (alive.has(c)) vitalCount.set(c, (vitalCount.get(c) ?? 0) + 1)
    const drop = [...alive].filter(c => (vitalCount.get(c) ?? 0) < 2)
    if (!drop.length) break
    for (const c of drop) alive.delete(c)
    regs = regs.filter(r => [...r.adj].every(c => alive.has(c)))
  }
  return alive.has(i32(chainOf, t))
}

/**
 * mulberry32: the same seed gives the same keys, so a search is the same search every run.
 * @param {number} seed
 * @param {number} count
 */
function keysFrom(seed, count) {
  const out = new Uint32Array(count)
  let s = seed
  for (let k = 0; k < count; k++) {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    out[k] = (t ^ (t >>> 14)) >>> 0
  }
  return out
}

// The key words: for the stones, then for the side to play, the passes in a row, each side's
// threats left, and the question in hand.
const xSide = 0
const xPass = 2
const xA = 5
const xD = 21
const xThr = 37
const xWidth = xThr + 3

/** One search: its board, its keys, its table of answered positions, and the line in hand. */
class Search {
  // The keys of the stones (three words) and of the rest of a position, and the current words;
  // each array here is sized once the board is known (`tables`).
  Z = new Uint32Array(0)
  X = new Uint32Array(0)
  h0 = 0
  h1 = 0
  h2 = 0
  // The two check words of the position `slotOf` last keyed.
  k1 = 0
  k2 = 0
  // What a move played took, so it can be taken back.
  /** @type {number[]} */ undoPoint = []
  /** @type {number[]} */ undoCount = []
  /** @type {number[]} */ taken = []
  nearMark = new Int32Array(0)
  nearGen = 0
  // The table of answered positions: two check words, the answer (0 nothing, 1 no, 2 yes), and
  // the move that settled it plus 2 (1 a pass); and how often each move settled a position.
  maskOf = 0
  t1 = new Uint32Array(0)
  t2 = new Uint32Array(0)
  tv = new Uint8Array(0)
  hint = new Int16Array(0)
  history = new Int32Array(0)
  visited = 0
  // The budget ran out: every call returns at once from here on.
  over = false
  // Whether a recapture was ever refused: only then can a ko decide the result.
  koSeen = false
  // The question in hand: does the defender reach at least this value?
  thr = SEKI
  // The shallowest depth of a path position a searched line was barred from repeating; FAR when none was.
  low = FAR
  // What the last move tried was barred from, for its caller's `low`.
  met = FAR
  /** The situations on the line being searched (the whole-board repeat rule), by key, at their depth. @type {Map<number, number>} */
  onPath = new Map()
  /** Each depth's moves and their scores. @type {Int16Array[]} */
  buffers = []
  /** @type {Float64Array[]} */
  scoreBuffers = []
  /** The board the lines go back to. */
  start = new Uint8Array(0)

  /**
   * @param {import('./rules.logic.js').Board} board the position as drawn
   * @param {number} toMove BLACK or WHITE
   * @param {number} target a point of the group asked about
   * @param {Threats} threats
   * @param {SolveOptions} options
   */
  constructor(board, toMove, target, threats, options) {
    this.toMove = toMove
    this.target = target
    this.defender = board.cells[target] ?? 0
    this.attacker = other(this.defender)
    this.budget = options.budget ?? 400000
    this.w = board.w
    this.h = board.h
    const n = (this.n = board.w * board.h)
    this.cells = board.cells.slice()
    this.closed = options.region !== undefined
    this.open = this.openPoints(options.region)
    /** @type {number[]} */
    this.points = []
    for (let i = 0; i < n; i++) if (u8(this.open, i)) this.points.push(i)
    this.nb = new Int16Array(n * 4).fill(-1)
    for (let i = 0; i < n; i++) neighbours(this.w, this.h, i).forEach((j, k) => (this.nb[i * 4 + k] = j))
    // Stones that stand for good: the points beyond the region, when they are given to one side.
    this.eternal = new Uint8Array(n)
    this.mark = new Int32Array(n)
    this.stack = new Int16Array(n)
    this.gen = 0
    this.chain = new Int16Array(n)
    this.area = new Int16Array(n)
    /** @type {number[]} */
    this.areaChains = []
    /** @type {number[]} */
    this.areaVital = []
    this.aCount = threats[this.attacker === BLACK ? 'black' : 'white'] ?? 0
    this.dCount = threats[this.defender === BLACK ? 'black' : 'white'] ?? 0
    this.tables(options.table ?? 20)
  }

  /**
   * The points a move may be played on: the problem's region, or every point of the diagram. A
   * point that holds a stone at the start is open to a move once that stone is captured.
   * @param {number[] | undefined} region
   */
  openPoints(region) {
    const open = new Uint8Array(this.n)
    if (!region) return open.fill(1)
    for (let i = 0; i < this.n; i++) if (u8(this.cells, i) !== 0) open[i] = 1
    for (const i of region) open[i] = 1
    return open
  }

  /**
   * The keys, the near marks, and the table of answered positions, `bits` the table's size as a
   * power of two.
   * @param {number} bits
   */
  tables(bits) {
    const { n } = this
    this.Z = keysFrom(0x243f6a88, 9 * n)
    this.X = keysFrom(0x85a308d3, 3 * (2 + 3 + 16 + 16 + 3))
    this.nearMark = new Int32Array(n)
    const size = 1 << bits
    this.maskOf = size - 1
    this.t1 = new Uint32Array(size)
    this.t2 = new Uint32Array(size)
    this.tv = new Uint8Array(size)
    this.hint = new Int16Array(size)
    this.history = new Int32Array(3 * n)
    this.start = this.cells.slice()
  }

  /**
   * Whether the group at `i` has a liberty, or holds a stone that stands for good; with `free`,
   * whether no move can ever capture it: a liberty no move is played on, or such a stone.
   * @param {number} i
   * @param {boolean} [free]
   * @returns {boolean}
   */
  reaches(i, free = false) {
    const { cells, eternal, nb, mark, stack, open } = this
    const c = u8(cells, i)
    const gen = ++this.gen
    let top = 0
    stack[top++] = i
    mark[i] = gen
    while (top) {
      const p = i16(stack, --top)
      if (u8(eternal, p)) return true
      for (let k = p * 4, e = k + 4; k < e; k++) {
        const j = i16(nb, k)
        if (j < 0) break
        const cj = u8(cells, j)
        if (cj === 0) {
          if (!free || !u8(open, j)) return true
        } else if (cj === c && i32(mark, j) !== gen) {
          mark[j] = gen
          stack[top++] = j
        }
      }
    }
    return false
  }

  /** @param {number} i */
  hasLiberty(i) {
    return this.reaches(i)
  }

  /** @param {number} i */
  safe(i) {
    return this.reaches(i, true)
  }

  /** Each chain of the defender's numbered on `chain`; how many there are. */
  markChains() {
    const { cells, chain, stack, nb, defender, n } = this
    chain.fill(-1)
    let chains = 0
    for (let i = 0; i < n; i++) {
      if (u8(cells, i) !== defender || i16(chain, i) >= 0) continue
      let top = 0
      stack[top++] = i
      chain[i] = chains
      while (top) {
        const p = i16(stack, --top)
        for (let k = p * 4, e = k + 4; k < e; k++) {
          const j = i16(nb, k)
          if (j < 0) break
          if (u8(cells, j) === defender && i16(chain, j) < 0) {
            chain[j] = chains
            stack[top++] = j
          }
        }
      }
      chains++
    }
    return chains
  }

  /**
   * One region of points that are not the defender's, from `i`, numbered `areas` on `area`: the
   * chains beside it, and those beside every empty point of it (0 when it is no eye).
   * @param {number} i
   * @param {number} areas
   */
  scanArea(i, areas) {
    const { cells, area, stack, nb, defender, eternal, open, chain } = this
    let beside = 0
    let vital = -1
    let empty = false
    let forGood = false
    let top = 0
    stack[top++] = i
    area[i] = areas
    while (top) {
      const p = i16(stack, --top)
      if (u8(eternal, p)) forGood = true
      let here = 0
      for (let k = p * 4, e = k + 4; k < e; k++) {
        const j = i16(nb, k)
        if (j < 0) break
        if (u8(cells, j) === defender) here |= 1 << i16(chain, j)
        else if (i16(area, j) < 0) {
          area[j] = areas
          stack[top++] = j
        }
      }
      beside |= here
      if (u8(cells, p) === 0) {
        empty = true
        vital &= here
        // a point no move is played on stays empty: the other side cannot fill the region, and it is no eye either
        if (!u8(open, p)) forGood = true
      }
    }
    this.areaChains.push(beside)
    this.areaVital.push(empty && !forGood ? vital : 0)
  }

  /**
   * Benson's test again, for the group asked about alone and on the board being played on: the
   * same answer as `unconditionallyAlive`, with nothing built on the way, so it can be asked at
   * every position. A region that holds a stone standing for good is no eye: the other side may
   * fill it.
   * @returns {boolean}
   */
  aliveForGood() {
    const chains = this.markChains()
    if (chains > 30) return false
    const { cells, area, defender, n, areaChains, areaVital } = this
    area.fill(-1)
    areaChains.length = 0
    areaVital.length = 0
    let areas = 0
    for (let i = 0; i < n; i++)
      if (u8(cells, i) !== defender && i16(area, i) < 0) this.scanArea(i, areas++)
    let alive = chains >= 31 ? -1 : (1 << chains) - 1
    for (;;) {
      let twice = 0
      let once = 0
      for (let r = 0; r < areas; r++) {
        // a region counts only while every chain beside it is still alive
        if ((num(areaChains, r) & ~alive) !== 0) continue
        const v = num(areaVital, r) & alive
        twice |= once & v
        once |= v
      }
      const next = alive & twice
      if (next === alive) break
      alive = next
      if (!alive) return false
    }
    return (alive & (1 << i16(this.chain, this.target))) !== 0
  }

  /**
   * What lies past a cut. A stone on a side of the diagram that is cut from a larger board has
   * the rest of the board behind it: in the plain reading every such stone stands for good, and
   * so does a group with a liberty on a point no move is played on. In the other reading
   * ('attacker') nothing past the cut helps the group asked about: every point no move is played
   * on belongs to the other side for good, and only that side's stones on a cut line stand.
   * False when what lies beyond captures the group asked about.
   * @param {SolveOptions} options
   */
  cutAway(options) {
    const { cells, eternal, open, w, h, n, attacker } = this
    const cut = options.cut ?? {}
    const against = this.closed && options.outside === 'attacker'
    for (let i = 0; i < n; i++) {
      const x = i % w
      const y = (i - x) / w
      const onCut =
        (cut.left && x === 0) ||
        (cut.right && x === w - 1) ||
        (cut.bottom && y === 0) ||
        (cut.top && y === h - 1)
      if (against && !u8(open, i)) {
        cells[i] = attacker
        eternal[i] = 1
      } else if (onCut && u8(cells, i) !== 0 && (!against || u8(cells, i) === attacker))
        eternal[i] = 1
    }
    if (against) this.takeOffDead()
    return !against || u8(cells, this.target) === this.defender
  }

  /** A group of the defender's left with no liberty is taken off: what lies beyond captured it. */
  takeOffDead() {
    const { cells, nb, defender, n } = this
    for (let i = 0; i < n; i++) {
      if (u8(cells, i) !== defender || this.hasLiberty(i)) continue
      const g = [i]
      cells[i] = 0
      for (const stone of g) {
        for (let q = stone * 4, e = q + 4; q < e; q++) {
          const j = i16(nb, q)
          if (j >= 0 && u8(cells, j) === defender) {
            cells[j] = 0
            g.push(j)
          }
        }
      }
    }
  }

  /** The keys of the stones as they now stand, and the board kept to go back to. */
  keyStones() {
    for (let i = 0; i < this.n; i++) if (u8(this.cells, i)) this.flip(u8(this.cells, i), i)
    this.start = this.cells.slice()
  }

  /**
   * @param {number} c
   * @param {number} i
   */
  flip(c, i) {
    const { Z, n } = this
    this.h0 ^= u32(Z, c * n + i)
    this.h1 ^= u32(Z, (3 + c) * n + i)
    this.h2 ^= u32(Z, (6 + c) * n + i)
  }

  /**
   * Play `c` at `i`: how many stones it captures, or -1 when the move is not legal.
   * @param {number} i
   * @param {number} c
   * @returns {number}
   */
  play(i, c) {
    const { cells, nb, taken } = this
    const opp = c === 1 ? 2 : 1
    cells[i] = c
    this.flip(c, i)
    const before = taken.length
    for (let k = i * 4, e = k + 4; k < e; k++) {
      const j = i16(nb, k)
      if (j < 0) break
      if (u8(cells, j) === opp && !this.hasLiberty(j)) this.capture(j, opp)
    }
    const got = taken.length - before
    if (!got && !this.hasLiberty(i)) {
      cells[i] = 0
      this.flip(c, i)
      return -1
    }
    this.undoPoint.push(i)
    this.undoCount.push(got)
    return got
  }

  /**
   * The group of `opp` at `j` taken off, its stones kept on `taken`.
   * @param {number} j
   * @param {number} opp
   */
  capture(j, opp) {
    const { cells, nb, taken } = this
    const from = taken.length
    taken.push(j)
    cells[j] = 0
    this.flip(opp, j)
    for (let q = from; q < taken.length; q++) {
      for (let m = num(taken, q) * 4, me = m + 4; m < me; m++) {
        const x = i16(nb, m)
        if (x >= 0 && u8(cells, x) === opp) {
          cells[x] = 0
          this.flip(opp, x)
          taken.push(x)
        }
      }
    }
  }

  /** @param {number} c */
  takeBack(c) {
    const i = this.undoPoint.pop()
    const got = this.undoCount.pop()
    assert(i !== undefined && got !== undefined, 'A move taken back was played')
    const opp = c === 1 ? 2 : 1
    for (let k = 0; k < got; k++) {
      const j = this.taken.pop()
      assert(j !== undefined, 'A capture taken back was made')
      this.cells[j] = opp
      this.flip(opp, j)
    }
    this.cells[i] = 0
    this.flip(c, i)
  }

  /** Marks the liberties of the group asked about (2) and the empty points beside them (1): the moves tried first. */
  markNear() {
    const { cells, nb, mark, stack, nearMark, defender } = this
    const nearGen = (this.nearGen += 4)
    const gen = ++this.gen
    let top = 0
    stack[top++] = this.target
    mark[this.target] = gen
    while (top) {
      const p = i16(stack, --top)
      for (let k = p * 4, e = k + 4; k < e; k++) {
        const j = i16(nb, k)
        if (j < 0) break
        const cj = u8(cells, j)
        if (cj === 0) {
          nearMark[j] = nearGen + 2
          for (let q = j * 4, qe = q + 4; q < qe; q++) {
            const x = i16(nb, q)
            if (x >= 0 && u8(cells, x) === 0 && i32(nearMark, x) < nearGen) nearMark[x] = nearGen + 1
          }
        } else if (cj === defender && i32(mark, j) !== gen) {
          mark[j] = gen
          stack[top++] = j
        }
      }
    }
  }

  /** The group asked about has joined stones no move can capture. */
  escaped() {
    return this.closed && this.safe(this.target)
  }

  /**
   * After two passes the group stands. It lives when no move can ever capture it, or when no
   * stone of the other side that could itself be captured is left on the board; with such stones
   * left and neither side able to capture, it is seki.
   */
  settled() {
    if (this.safe(this.target)) return true
    if (this.aliveForGood()) return true
    if (!this.closed) return false
    for (let i = 0; i < this.n; i++)
      if (u8(this.cells, i) === this.attacker && !u8(this.eternal, i) && !this.safe(i)) return false
    return true
  }

  /**
   * A situation as the repeat rule knows one: the stones (two key words), the side to play, and
   * each side's threats left. A situation on the line being searched may not be made again: the
   * whole-board repeat rule. A side with a threat elsewhere spends it to make the move anyway.
   * The threat and its answer are stones on the real board, so the situation the mover faced,
   * with one threat fewer, counts as met: the other side cannot take a ko straight back without
   * a threat of its own. An answer that rested on a repeat being barred anywhere below it is not
   * kept: another path to the same position would not have barred it.
   * @param {number} k0
   * @param {number} k1
   * @param {number} side
   * @param {number} a
   * @param {number} d
   * @returns {number}
   */
  situation(k0, k1, side, a, d) {
    const { X } = this
    return (
      ((k1 ^ u32(X, xWidth + xSide + side - 1) ^ u32(X, xWidth + xA + a) ^ u32(X, xWidth + xD + d)) &
        0x1fffff) *
        4294967296 +
      ((k0 ^ u32(X, xSide + side - 1) ^ u32(X, xA + a) ^ u32(X, xD + d)) >>> 0)
    )
  }

  /**
   * @param {number} side
   * @param {number} a
   * @param {number} d
   */
  pathKey(side, a, d) {
    return this.situation(this.h0, this.h1, side, a, d)
  }

  /**
   * The answer a position gives at once, before any move is tried; undefined when it gives none.
   * @param {number} side
   * @param {number} passes
   * @returns {boolean | undefined}
   */
  atOnce(side, passes) {
    if (u8(this.cells, this.target) !== this.defender) return false
    if (this.escaped()) return true
    // A group that stands whatever the other side plays lives here and now.
    if (side === this.attacker && this.aliveForGood()) return true
    if (passes >= 2) return (this.settled() ? LIVES : SEKI) >= this.thr
    return undefined
  }

  /**
   * The position's slot in the table, with its two check words set on `k1` and `k2`.
   * @param {number} side
   * @param {number} passes
   * @param {number} a
   * @param {number} d
   */
  slotOf(side, passes, a, d) {
    const { X } = this
    const s0 = xSide + side - 1
    const p0 = xPass + passes
    const a0 = xA + a
    const d0 = xD + d
    const th = xThr + this.thr
    /** @param {number} h @param {number} o */
    const word = (h, o) =>
      (h ^ u32(X, o + s0) ^ u32(X, o + p0) ^ u32(X, o + a0) ^ u32(X, o + d0) ^ u32(X, o + th)) >>> 0
    this.k1 = word(this.h1, xWidth)
    this.k2 = word(this.h2, 2 * xWidth)
    return word(this.h0, 0) & this.maskOf
  }

  /**
   * The moves, the likeliest to settle the question first: the move that settled this position
   * before (`first`), then the liberties of the group asked about, then the points beside those,
   * and within each the moves that settled other positions most often. Their count; the moves
   * sit in the depth's buffer.
   * @param {number} side
   * @param {number} depth
   * @param {number} first
   */
  ordered(side, depth, first) {
    const { cells, points, nearMark, history } = this
    const moves = (this.buffers[depth] ??= new Int16Array(points.length))
    const scores = (this.scoreBuffers[depth] ??= new Float64Array(points.length))
    let count = 0
    const base = (side - 1) * this.n
    for (const i of points) if (u8(cells, i) === 0) moves[count++] = i
    this.markNear()
    for (let x = 0; x < count; x++) {
      const m = i16(moves, x)
      const near = i32(nearMark, m) - this.nearGen
      scores[x] = m === first ? 1e18 : (near > 0 ? near : 0) * 1e12 + i32(history, base + m)
    }
    for (let x = 1; x < count; x++) {
      const m = i16(moves, x)
      const sm = f64(scores, x)
      let y = x - 1
      while (y >= 0 && f64(scores, y) < sm) {
        moves[y + 1] = i16(moves, y)
        scores[y + 1] = f64(scores, y)
        y--
      }
      moves[y + 1] = m
      scores[y + 1] = sm
    }
    return { moves, count }
  }

  /**
   * One move tried: null when it is not legal or repeats a situation no threat is left to pay
   * for; else whether the defender reaches the value. `met` is set to the shallowest path depth
   * the move was barred from below.
   * @param {number} i
   * @param {number} side
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @returns {boolean | null}
   */
  tryMove(i, side, a, d, depth) {
    const b0 = this.h0
    const b1 = this.h1
    this.met = FAR
    if (this.play(i, side) < 0) return null
    let na = a
    let nd = d
    let met = FAR
    const again = this.onPath.get(this.pathKey(3 - side, a, d))
    /** @type {number | undefined} */
    let threat
    if (again !== undefined) {
      this.koSeen = true
      met = again
      if ((side === this.attacker ? a : d) < 1) {
        this.takeBack(side)
        this.met = met
        return null
      }
      if (side === this.attacker) na--
      else nd--
      // The threat and its answer stand on the board from here on: the position the mover
      // faced, with one threat fewer, has been met.
      threat = this.situation(b0, b1, side, na, nd)
      if (this.onPath.has(threat)) threat = undefined
      else this.onPath.set(threat, depth)
    }
    const v = this.wins(3 - side, 0, na, nd, depth + 1)
    if (this.over) return false
    if (threat !== undefined) this.onPath.delete(threat)
    this.takeBack(side)
    this.met = this.low < met ? this.low : met
    return v
  }

  /**
   * Whether the defender reaches at least `thr` from here; `low` is set on the way out.
   * @param {number} side
   * @param {number} passes
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @returns {boolean}
   */
  wins(side, passes, a, d, depth) {
    if (++this.visited > this.budget) return !(this.over = true)
    const now = this.atOnce(side, passes)
    if (now !== undefined) {
      this.low = FAR
      return now
    }
    const slot = this.slotOf(side, passes, a, d)
    const k1 = this.k1
    const k2 = this.k2
    const known = u32(this.t1, slot) === k1 && u32(this.t2, slot) === k2
    if (known && u8(this.tv, slot)) {
      this.low = FAR
      return u8(this.tv, slot) === 2
    }
    const pk = this.pathKey(side, a, d)
    const outer = this.onPath.get(pk)
    this.onPath.set(pk, depth)
    const best = this.bestOf(side, passes, a, d, depth, known ? i16(this.hint, slot) - 2 : -2)
    if (this.over) return false
    if (outer === undefined) this.onPath.delete(pk)
    else this.onPath.set(pk, outer)
    const maximise = side === this.defender
    const answer = best.move ? maximise : !maximise
    this.t1[slot] = k1
    this.t2[slot] = k2
    this.tv[slot] = best.mine === FAR ? (answer ? 2 : 1) : 0
    this.hint[slot] = best.move
    this.low = best.mine
    return answer
  }

  /**
   * The first move of `side` that settles the question its way, plus 2 (1 a pass, 0 none), and
   * the shallowest path depth the moves tried were barred from.
   * @param {number} side
   * @param {number} passes
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @param {number} first the move that settled this position before
   */
  bestOf(side, passes, a, d, depth, first) {
    const maximise = side === this.defender
    const { moves, count } = this.ordered(side, depth, first)
    const base = (side - 1) * this.n
    let mine = FAR
    for (let x = 0; x < count; x++) {
      const i = i16(moves, x)
      const v = this.tryMove(i, side, a, d, depth)
      if (this.over) return { move: 0, mine }
      if (this.met < mine) mine = this.met
      if (v === maximise) {
        this.history[base + i] = i32(this.history, base + i) + 1 + (count >> 1)
        return { move: i + 2, mine }
      }
    }
    const v = this.wins(3 - side, passes + 1, a, d, depth + 1)
    if (this.low < mine) mine = this.low
    return { move: v === maximise ? 1 : 0, mine }
  }

  /**
   * The value of the position on the board for the defender, DIES to LIVES.
   * @param {number} side
   * @param {number} passes
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @returns {number}
   */
  exact(side, passes, a, d, depth) {
    this.thr = SEKI
    if (!this.wins(side, passes, a, d, depth)) return DIES
    if (this.over) return DIES
    this.thr = LIVES
    return this.wins(side, passes, a, d, depth) ? LIVES : SEKI
  }

  /**
   * The move of `side` at `i` with the stones it captures and its value; null when it is not
   * legal or repeats a situation no threat is left to pay for.
   * @param {number} i
   * @param {number} side
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @returns {(Child & { point: number }) | null}
   */
  childAt(i, side, a, d, depth) {
    const near = neighbours(this.w, this.h, i).some(j => u8(this.cells, j) === this.defender)
    const b0 = this.h0
    const b1 = this.h1
    const got = this.play(i, side)
    if (got < 0) return null
    const captured = this.taken.slice(this.taken.length - got)
    let na = a
    let nd = d
    /** @type {number | undefined} */
    let threat
    let child = null
    const barred = this.onPath.get(this.pathKey(3 - side, a, d)) !== undefined
    if (barred) this.koSeen = true
    if (!barred || (side === this.attacker ? a : d) >= 1) {
      if (barred) {
        if (side === this.attacker) na--
        else nd--
        threat = this.situation(b0, b1, side, na, nd)
        if (this.onPath.has(threat)) threat = undefined
        else this.onPath.set(threat, depth)
      }
      const v = this.exact(3 - side, 0, na, nd, depth + 1)
      if (this.over) return null
      child = { point: i, captured, v, near, side: 3 - side, passes: 0, a: na, d: nd, threat }
    }
    if (threat !== undefined) this.onPath.delete(threat)
    this.takeBack(side)
    return child
  }

  /**
   * The moves of `side` from the position on the board, each with the stones it captures and
   * its value: captures first, then moves beside the group asked about, a pass last. `only`
   * names the one move wanted.
   * @param {number} side
   * @param {number} passes
   * @param {number} a
   * @param {number} d
   * @param {number} depth
   * @param {number} [only]
   * @returns {Child[]}
   */
  children(side, passes, a, d, depth, only) {
    /** @type {(Child & { point: number })[]} */
    const played = []
    const pk = this.pathKey(side, a, d)
    const outer = this.onPath.get(pk)
    this.onPath.set(pk, depth)
    for (const i of this.points) {
      if (u8(this.cells, i) !== 0 || (only !== undefined && i !== only)) continue
      const child = this.childAt(i, side, a, d, depth)
      if (this.over) return []
      if (child) played.push(child)
    }
    played.sort(
      (x, y) =>
        y.captured.length - x.captured.length || Number(y.near) - Number(x.near) || x.point - y.point
    )
    /** @type {Child[]} */
    const out = played
    if (only === undefined) {
      const v = this.exact(3 - side, passes + 1, a, d, depth + 1)
      if (this.over) return []
      out.push({ point: null, captured: [], v, near: false, side: 3 - side, passes: passes + 1, a, d })
    }
    if (outer === undefined) this.onPath.delete(pk)
    else this.onPath.set(pk, outer)
    return out
  }

  /**
   * The value of the problem for counts a, d after the first move i; null when it is not legal.
   * @param {number} i
   * @param {number} a
   * @param {number} d
   */
  value(i, a, d) {
    return this.children(this.toMove, 0, a, d, 0, i)[0]?.v ?? null
  }

  /**
   * @param {number} side
   * @param {number} v
   */
  worth(side, v) {
    return side === this.defender ? v : -v
  }

  /**
   * The move a line takes from the moves at ply `k` past the first: one of the best, a pass only
   * when the other side passing too leaves the result as it is; the other best moves kept as
   * variations, up to `branch` of them.
   * @param {Child[]} kids
   * @param {number} side
   * @param {number} k
   * @param {number} branch
   * @param {Variation[]} variations
   */
  pick(kids, side, k, branch, variations) {
    const top = Math.max(...kids.map(c => this.worth(side, c.v)))
    // The moves as good as the best, in the order above: which of equal moves is shown first.
    const tied = kids.filter(c => this.worth(side, c.v) === top)
    const quiet = tied.find(c => c.point === null)
    const still = quiet && (quiet.passes >= 2 ? quiet.v : this.settled() ? LIVES : SEKI)
    let pick = quiet && still === quiet.v ? quiet : (tied.find(c => c.point !== null) ?? quiet)
    assert(pick, 'A position always has the pass among its moves')
    // Whether passing here beats every move: then the pass is a move of the line.
    if (pick.point === null)
      pick = { ...pick, only: kids.every(c => c.point === null || this.worth(side, c.v) < top) }
    for (const alt of tied.filter(c => c !== tied[0]).slice(0, branch)) {
      if (alt.point === null || pick.point === null) continue
      variations.push({ at: k, side, point: alt.point, captured: alt.captured, v: alt.v })
    }
    return pick
  }

  /** The board as it stood before the line, the line's situations cleared. */
  goBack() {
    this.onPath.clear()
    this.undoPoint.length = 0
    this.undoCount.length = 0
    this.taken.length = 0
    const { cells, start } = this
    for (let i = 0; i < this.n; i++) {
      if (u8(cells, i) !== u8(start, i)) {
        if (u8(cells, i)) this.flip(u8(cells, i), i)
        cells[i] = u8(start, i)
        if (u8(cells, i)) this.flip(u8(cells, i), i)
      }
    }
  }

  /**
   * The line of best play after the first move `first`; null when the budget runs out on it.
   * `forced` names the move taken at a ply in place of the line's own: `{ 1: point }` follows
   * another reply at the second move.
   * @param {number} first
   * @param {LineOptions} [options]
   * @returns {PrincipalLine | null}
   */
  line(first, { branch = 0, forced = {} } = {}) {
    /** @type {Ply[]} */
    const plies = []
    /** @type {Variation[]} */
    const variations = []
    let st = { side: this.toMove, passes: 0, a: this.aCount, d: this.dCount }
    for (let k = 0; k < 40 && !this.over; k++) {
      if (u8(this.cells, this.target) !== this.defender || st.passes >= 2) break
      if (k > 0 && (this.escaped() || this.aliveForGood())) break
      const kids = this.children(st.side, st.passes, st.a, st.d, k)
      if (this.over) break
      const at = k === 0 ? first : forced[k]
      const pick =
        at !== undefined ? kids.find(c => c.point === at) : this.pick(kids, st.side, k, branch, variations)
      if (!pick) break
      plies.push({ side: st.side, point: pick.point, captured: pick.captured, value: pick.v, ...(pick.only ? { only: true } : {}) })
      this.onPath.set(this.pathKey(st.side, st.a, st.d), k)
      if (pick.threat !== undefined) this.onPath.set(pick.threat, k)
      if (pick.point !== null) this.play(pick.point, st.side)
      st = { side: pick.side, passes: pick.passes, a: pick.a, d: pick.d }
    }
    // The board goes back as it stood, also when the budget ran out with moves still on it.
    this.goBack()
    return this.over ? null : { plies, variations }
  }

  /**
   * Each legal first move's result; null when the budget runs out. A result that one more threat
   * on either side would change rests on a ko. The three other counts are always asked: the
   * first search may settle the group without meeting the ko.
   * @returns {Record<number, Fate> | null}
   */
  firstResults() {
    const { aCount, dCount } = this
    /** @type {Record<number, Fate>} */
    const results = {}
    for (const i of this.points) {
      if (u8(this.cells, i) !== 0) continue
      const v = this.value(i, aCount, dCount)
      if (this.over) return null
      if (v === null) continue
      const more = [this.value(i, aCount + 1, dCount), this.value(i, aCount, dCount + 1), this.value(i, aCount + 1, dCount + 1)]
      if (this.over) return null
      results[i] = more.some(o => o !== v) ? 'ko' : RESULTS[v === DIES ? 0 : v === SEKI ? 2 : 3]
    }
    return results
  }
}

/**
 * Solve a problem.
 * @param {import('./rules.logic.js').Board} board the position as drawn
 * @param {number} toMove BLACK or WHITE, the side that plays first
 * @param {number} target a point of the group asked about
 * @param {Threats} threats ko threats elsewhere for each side
 * @param {SolveOptions} [options]
 *   `budget`: the most positions the search may visit. `region`: the points a move may be played
 *   on (every point of the diagram by default). `cut`: the sides of the diagram that are cut
 *   from a larger board and are not its edge. `outside`: how what lies past the region and the
 *   cut is read. 'open' (the default): the points no move is played on stay empty, so a group
 *   with a liberty there is never captured, and a stone on a cut line stands for good.
 *   'attacker': nothing there helps the group asked about; those points belong to the other
 *   side for good, and only its stones on a cut line stand. `table`: the size of the table of
 *   answered positions, as a power of two.
 * @returns {Solution | null}
 */
export function solve(board, toMove, target, threats = {}, options = {}) {
  if (!board.cells[target]) return null
  const search = new Search(board, toMove, target, threats, options)
  if (!search.cutAway(options)) return null
  search.keyStones()
  const results = search.firstResults()
  if (!results) return null
  /** @param {Fate} label */
  const score = label =>
    toMove === search.defender ? RESULTS.indexOf(label) : 3 - RESULTS.indexOf(label)
  const top = Math.max(-1, ...Object.values(results).map(score))
  if (top < 0) return null
  const best = Object.entries(results)
    .filter(([, label]) => score(label) === top)
    .map(([i]) => Number(i))
  const head = best[0]
  const result = head === undefined ? undefined : results[head]
  assert(result !== undefined, 'A best score stands, so a best first move does')
  return {
    defender: search.defender,
    results,
    best,
    result,
    ko: search.koSeen,
    // A line the search cannot finish within what is left of its budget is null.
    line: (first, opts) => search.line(first, opts)
  }
}
