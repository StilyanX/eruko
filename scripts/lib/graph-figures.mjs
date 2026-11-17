// Hides: how a maths unit's graphs are drawn from their specs: every
// src/units/<unit>/content/figures/<topic>.json holds { "<name>.svg": spec, … }, and each spec
// becomes that SVG beside it, in the line-and-text style of the unit's other figures (the paper's
// "Graphs and number lines": both axes labelled, numbered marks, equal steps for equal amounts,
// only what the line names). Each unit's generator (scripts/gen/<unit>.mjs) writes them, and its
// figures test holds each SVG to its spec. Every label is body size (17 px) and the figure is at most 21 times
// that wide, so it fits a phone column with its labels unshrunk; a label is put where no line and
// no other label is, and a figure that cannot be drawn so says why instead of being drawn badly.
//
// A spec: { x: [min, max], y: [min, max], xstep, ystep (default 1), xlabel, ylabel (default x, y),
//   equal (one scale for both axes, default true),
//   curves: [{ y: '2*x-1' } | { x: 4 } | { from: [x1, y1], to: [x2, y2] }, with label?, labelAt?, place?],
//   points: [{ at: [x, y], label?, place? }],  a cross, named or not
//   dots: [{ at: [x, y], open? }],             a filled dot, or an open circle where open (a step graph's ends)
//   dashed: [{ from, to, label?, place? }],    a guide line
//   legs: [{ from, to, label?, place? }],      a drawn side, as of a run and a rise
//   notes: [{ at: [x, y], text, place? }],    a word on the plane
//   shade: [{ boundary: a curve as above or { x: 'y^2' } (x = g(y)), side: 'above' | 'below' | 'left' | 'right', strict? }] }
//     the region on every item's side, filled lightly; each boundary dashed where strict, solid where not
// A number line: { kind: 'numberline', x: [min, max], xstep, shade: [{ from, to, fromOpen?, toOpen? }] },
//   one axis with its numbers and nothing else; each shaded part a thick line from `from` to `to`
//   (a number, or '-inf' / 'inf' for a ray to the arrow), each finite end an open circle where its
//   *Open is true (a strict end) and a filled dot where it is not.
// A curve's y is in the shared typed syntax (src/kernel/answer-syntax.logic.js) (^ for powers, * for products). A place is the side
// of its point a label sits on: ne se nw sw n s e w; without one the first free side is taken.
import { readFileSync, readdirSync } from 'node:fs'
import { unreachable } from '../../src/kernel/invariant.logic.js'
import { parse, readMessage } from '../../src/kernel/answer-syntax.logic.js'

/** @typedef {[number, number]} Pair */
/** @typedef {'ne' | 'se' | 'nw' | 'sw' | 'n' | 's' | 'e' | 'w'} Place */
/** @typedef {[number, number, number, number]} Box x0, y0, x1, y1 */
/**
 * @typedef {{ from: Pair, to: Pair, label?: string, place?: Place }} Side
 * @typedef {{ label?: string, labelAt?: Pair, place?: Place } & ({ y: string } | { x: number } | { from: Pair, to: Pair })} Curve
 * @typedef {{
 *   kind?: 'plane', x: Pair, y: Pair, xstep?: number, ystep?: number, xlabel?: string, ylabel?: string, equal?: boolean,
 *   curves?: Curve[], points?: { at: Pair, label?: string, place?: Place }[], dots?: { at: Pair, open?: boolean }[], dashed?: Side[],
 *   legs?: Side[], notes?: { at: Pair, text: string, place?: Place }[], shade?: Region[]
 * }} Plane
 * @typedef {{ boundary: Curve | { x: string }, side: 'above' | 'below' | 'left' | 'right', strict?: boolean }} Region
 * @typedef {{ from: number | '-inf', to: number | 'inf', fromOpen?: boolean, toOpen?: boolean }} Shade
 * @typedef {{ kind: 'numberline', x: Pair, xstep?: number, shade?: Shade[] }} Line
 * @typedef {Plane | Line} Spec
 */

/**
 * A unit's figures folder, where its specs and the SVGs drawn from them sit.
 * @param {string} unit the unit's folder name
 */
export const figureDir = unit => new URL(`../../src/units/${unit}/content/figures/`, import.meta.url)
/**
 * A tree's value as a floating-point number, the letters taken from `at`.
 * @param {import('../../src/kernel/answer-syntax.logic.js').Node} n
 * @param {Record<string, number>} at
 * @returns {number}
 */
function num(n, at) {
  switch (n.t) {
    case 'num':
      return Number(n.n) / Number(n.d)
    case 'var': {
      if (n.name === 'pi') return Math.PI
      const v = at[n.name]
      if (v === undefined) throw new Error(`no value for ${n.name}`)
      return v
    }
    case 'neg':
      return -num(n.a, at)
    case 'add':
      return num(n.a, at) + num(n.b, at)
    case 'sub':
      return num(n.a, at) - num(n.b, at)
    case 'mul':
      return num(n.a, at) * num(n.b, at)
    case 'div':
      return num(n.a, at) / num(n.b, at)
    case 'pow': {
      const a = num(n.a, at)
      const b = num(n.b, at)
      // An odd root of a negative number is real.
      if (a < 0 && !Number.isInteger(b)) {
        const q = Math.round(1 / (b - Math.trunc(b)))
        if (q % 2) return -Math.pow(-a, b) * (Math.round(b * q) % 2 ? 1 : -1)
      }
      return Math.pow(a, b)
    }
    case 'sqrt':
      return Math.sqrt(num(n.a, at))
    case 'grp':
      return num(n.a, at)
    default:
      return unreachable(n)
  }
}

const FONT = 17 // body text, in px: every label is this size
const MOST_WIDE = 21 * FONT // the widest a figure is, so its labels stay body size on a phone
const PLOT_H = 280 // the most height the y-range takes, in px; 340 where both axes share a scale
/** @type {Place[]} */
const AROUND = ['ne', 'se', 'nw', 'sw', 'n', 's', 'e', 'w']

/** @param {number} n */
const f = n => String(Math.round(n * 10) / 10)
/** @param {number | string} n */
const minus = n => String(n).replace(/-/g, '−')
/**
 * A mark's number as the text writes it: a minus sign, and a thin space inside five digits or more.
 * @param {number} v
 */
const numeral = v =>
  minus(
    Math.abs(v) >= 10000 && Number.isInteger(v) ? String(v).replace(/\B(?=(\d{3})+$)/g, ' ') : v
  )

/**
 * About how far a text runs, in px: its letters by the width of their kind.
 * @param {string} s
 */
function widthOf(s) {
  let em = 0
  for (const c of s) {
    if (/[ .,:;!'|ijl ]/.test(c)) em += 0.28
    else if (/[()[\]ftr-]/.test(c)) em += 0.36
    else if (/[mwMW%½]/.test(c)) em += 0.85
    else if (/[A-Z]/.test(c)) em += 0.68
    else if (/[0-9−+=×]/.test(c)) em += 0.58
    else em += 0.54
  }
  return Math.ceil(em * FONT * 1.04)
}

/**
 * Whether a segment passes through a box (Liang–Barsky).
 * @param {Box} s
 * @param {Box} r
 */
function crosses([x1, y1, x2, y2], [a, b, c, d]) {
  let [t0, t1] = [0, 1]
  const [dx, dy] = [x2 - x1, y2 - y1]
  /** @type {Pair[]} */
  const edges = [
    [-dx, x1 - a],
    [dx, c - x1],
    [-dy, y1 - b],
    [dy, d - y1]
  ]
  for (const [p, q] of edges) {
    if (p === 0) {
      if (q < 0) return false
    } else if (p < 0) {
      t0 = Math.max(t0, q / p)
    } else t1 = Math.min(t1, q / p)
  }
  return t0 <= t1
}

/**
 * @param {Box} r
 * @param {number} by
 * @returns {Box}
 */
const grown = ([a, b, c, d], by) => [a - by, b - by, c + by, d + by]
/**
 * @param {Box} r
 * @param {Box} s
 */
const overlap = (r, s) => r[0] < s[2] && s[0] < r[2] && r[1] < s[3] && s[1] < r[3]

/** A figure being drawn: what is on it, so a label is put where nothing is. */
class Sheet {
  /** The path data of every straight line, by its weight and dash. @type {Map<string, string>} */
  paths = new Map()
  /** @type {string[]} */
  curveOut = []
  /** Shaded regions, drawn under everything. @type {string[]} */
  fills = []
  /** Circles, each with its own fill. @type {string[]} */
  dots = []
  /** @type {string[]} */
  words = []
  /** @type {Box[]} */
  strokes = []
  /** @type {Box[]} */
  labels = []
  box = [Infinity, Infinity, -Infinity, -Infinity]
  /** @type {string[]} */
  faults = []

  /**
   * @param {number} x
   * @param {number} y
   */
  reach(x, y) {
    const [a = 0, b = 0, c = 0, d = 0] = this.box
    this.box = [Math.min(a, x), Math.min(b, y), Math.max(c, x), Math.max(d, y)]
  }

  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   */
  line(x1, y1, x2, y2, w = 1.2, dash = '') {
    this.reach(x1, y1)
    this.reach(x2, y2)
    this.strokes.push([x1, y1, x2, y2])
    const key = `${w}|${dash}`
    this.paths.set(key, `${this.paths.get(key) ?? ''}M${f(x1)} ${f(y1)} ${f(x2)} ${f(y2)}`)
  }

  /**
   * @param {Pair[]} points
   * @param {string} dash
   */
  polyline(points, dash = '') {
    const run = simplified(points)
    run.forEach(([x, y], i) => {
      this.reach(x, y)
      const [px, py] = run[i - 1] ?? [x, y]
      this.strokes.push([px, py, x, y])
    })
    this.curveOut.push(`<polyline${dash} points="${run.map(([x, y]) => `${f(x)} ${f(y)}`).join(' ')}"/>`)
  }

  /**
   * A circle of radius 5, open (an outline) or filled.
   * @param {number} x
   * @param {number} y
   * @param {boolean} open
   */
  dot(x, y, open) {
    this.reach(x - 6, y - 6)
    this.reach(x + 6, y + 6)
    this.strokes.push([x - 6, y, x + 6, y], [x, y - 6, x, y + 6])
    this.dots.push(`<circle cx="${f(x)}" cy="${f(y)}" r="5" stroke-width="1.6"${open ? '' : ' fill="currentColor"'}/>`)
  }

  /**
   * The box a text fills.
   * @param {number} x
   * @param {number} y
   * @param {string} s
   * @param {string} anchor
   * @returns {Box}
   */
  boxOf(x, y, s, anchor) {
    const w = widthOf(s)
    const from = anchor === 'start' ? x : anchor === 'end' ? x - w : x - w / 2
    // A number has no letter that drops below its line.
    return /^[−0-9.\u2009]+$/.test(s)
      ? [from, y - 12, from + w, y + 1]
      : [from, y - 13, from + w, y + 4]
  }

  /** Whether a box touches no line and no other label. @param {Box} r */
  free(r) {
    return (
      !this.strokes.some(s => crosses(s, grown(r, 1.5))) &&
      !this.labels.some(l => overlap(l, grown(r, 3)))
    )
  }

  /** How wide the figure is, in px. */
  wide() {
    const [b0 = 0, , b2 = 0] = this.box
    return b2 - b0 + 12
  }

  /** The figure as an SVG: lines of one weight in one path, the curves, then the words. */
  svg() {
    const [b0 = 0, b1 = 0, b2 = 0, b3 = 0] = this.box
    const [w, h] = [b2 - b0 + 12, b3 - b1 + 12]
    const lines = [...this.paths].map(([key, d]) => {
      const [weight = '', dash = ''] = key.split('|')
      return `<path stroke-width="${weight}"${dash} d="${d}"/>`
    })
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(b0 - 6)} ${f(b1 - 6)} ${f(w)} ${f(h)}" width="${Math.round(w)}" height="${Math.round(h)}">${this.fills.join('')}<g fill="none" stroke="currentColor">${lines.join('')}${this.curveOut.length ? `<g stroke-width="2">${this.curveOut.join('')}</g>` : ''}${this.dots.join('')}</g><g font-size="${FONT}" fill="currentColor" text-anchor="middle">${this.words.join('')}</g></svg>\n`
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {string} s
   * @param {string} anchor
   */
  text(x, y, s, anchor = 'middle', italic = false) {
    const r = this.boxOf(x, y, s, anchor)
    this.labels.push(r)
    this.reach(r[0], r[1])
    this.reach(r[2], r[3])
    const side = anchor === 'middle' ? '' : ` text-anchor="${anchor}"`
    this.words.push(
      `<text x="${f(x)}" y="${f(y)}"${side}${italic ? ' font-style="italic"' : ''}>${s}</text>`
    )
  }

  /**
   * A text beside a point, on the first of its sides where it touches nothing; failing those, at
   * the nearest free place round the first point.
   * @param {Pair[]} points the points to try, in turn
   * @param {string} s
   * @param {number} gap
   * @param {Place[]} sides
   */
  beside(points, s, gap, sides) {
    for (const [px, py] of points)
      for (const side of sides) {
        const [x, y, anchor] = spot(side, px, py, gap)
        if (!this.free(this.boxOf(x, y, s, anchor))) continue
        this.text(x, y, s, anchor)
        return
      }
    const near = sides.length > 1 ? this.nearest(points[0] ?? [0, 0], s, gap) : undefined
    if (near) this.text(near[0], near[1], s, 'middle')
    else this.faults.push(`no free place for "${s}"`)
  }

  /**
   * The free place for a text nearest a point, as the x and baseline of its middle.
   * @param {Pair} at
   * @param {string} s
   * @param {number} gap
   * @returns {Pair | undefined}
   */
  nearest([px, py], s, gap) {
    const half = widthOf(s) / 2
    /** @type {{ cost: number, at: Pair }[]} */
    const spots = []
    for (let dx = -110; dx <= 110; dx += 4)
      for (let dy = -56; dy <= 56; dy += 4) {
        const away = Math.hypot(Math.max(Math.abs(dx) - half, 0), Math.max(Math.abs(dy) - 8.5, 0))
        if (away >= gap && away <= 50)
          spots.push({
            cost: away + (dy > 0 ? 3 : 0) + (dx < 0 ? 1.5 : 0),
            at: [px + dx, py + dy + 4.5]
          })
      }
    spots.sort((a, b) => a.cost - b.cost)
    return spots.find(c => this.free(this.boxOf(c.at[0], c.at[1], s, 'middle')))?.at
  }
}

/**
 * Where a text sits at a side of a point, and which way it runs from there.
 * @param {Place} side
 * @param {number} x
 * @param {number} y
 * @param {number} g
 * @returns {[number, number, string]}
 */
function spot(side, x, y, g) {
  switch (side) {
    case 'ne':
      return [x + g, y - g, 'start']
    case 'se':
      return [x + g, y + g + 13, 'start']
    case 'nw':
      return [x - g, y - g, 'end']
    case 'sw':
      return [x - g, y + g + 13, 'end']
    case 'n':
      return [x, y - g - 6, 'middle']
    case 's':
      return [x, y + g + 17, 'middle']
    case 'e':
      return [x + g + 2, y + 5, 'start']
    case 'w':
      return [x - g - 2, y + 5, 'end']
    default:
      return unreachable(side)
  }
}

/**
 * The numbered marks from min to max, every step.
 * @param {number} min
 * @param {number} max
 * @param {number} step
 */
const ticks = (min, max, step) => {
  const out = []
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step)
    out.push(Math.round(v * 1e6) / 1e6)
  return out
}

/**
 * The scale of a spec: where a value sits in px, and where the axes cross.
 * @param {Plane} spec
 * @param {number} plotW the width of the x-range, in px
 */
function scaleOf(spec, plotW) {
  const [x0, x1] = spec.x
  const [y0, y1] = spec.y
  // Tall enough that the numbers up the y axis stand clear of one another.
  const high = Math.max(PLOT_H, Math.ceil((y1 - y0) / (spec.ystep ?? 1)) * (FONT + 5))
  let sx = plotW / (x1 - x0)
  let sy = high / (y1 - y0)
  if (spec.equal ?? true) sx = sy = Math.min(sx, Math.max(high, PLOT_H + 60) / (y1 - y0))
  // The axes cross at the origin, or at the edge of the range nearer to it.
  return {
    X: (/** @type {number} */ x) => x * sx,
    Y: (/** @type {number} */ y) => -y * sy,
    ox: Math.min(Math.max(0, x0), x1),
    oy: Math.min(Math.max(0, y0), y1)
  }
}
/** @typedef {ReturnType<typeof scaleOf>} Scale */

/**
 * Both axes, arrowed at their positive ends, and a mark at each number.
 * @param {Sheet} d
 * @param {Plane} spec
 * @param {Scale} s
 */
function axes(d, spec, { X, Y, ox, oy }) {
  const [x0, x1] = spec.x
  const [y0, y1] = spec.y
  d.line(X(x0), Y(oy), X(x1) + 12, Y(oy))
  d.line(X(x1) + 5, Y(oy) - 4, X(x1) + 12, Y(oy))
  d.line(X(x1) + 5, Y(oy) + 4, X(x1) + 12, Y(oy))
  d.line(X(ox), Y(y0), X(ox), Y(y1) - 12)
  d.line(X(ox) - 4, Y(y1) - 5, X(ox), Y(y1) - 12)
  d.line(X(ox) + 4, Y(y1) - 5, X(ox), Y(y1) - 12)
  for (const v of ticks(x0, x1, spec.xstep ?? 1))
    if (v !== ox) d.line(X(v), Y(oy) - 4, X(v), Y(oy) + 4, 1)
  for (const v of ticks(y0, y1, spec.ystep ?? 1))
    if (v !== oy) d.line(X(ox) - 4, Y(v), X(ox) + 4, Y(v), 1)
}

/**
 * A run of points with only those that keep it within a third of a px of itself (Ramer–Douglas–Peucker).
 * @param {Pair[]} run
 * @returns {Pair[]}
 */
function simplified(run) {
  const [a, b] = [run[0], run.at(-1)]
  if (!a || !b || run.length < 3) return run
  const [dx, dy] = [b[0] - a[0], b[1] - a[1]]
  const long = Math.hypot(dx, dy) || 1
  let [far, at] = [0, 0]
  run.forEach(([x, y], i) => {
    const away = Math.abs(dy * (x - a[0]) - dx * (y - a[1])) / long
    if (away > far) [far, at] = [away, i]
  })
  if (far <= 0.3) return [a, b]
  return [...simplified(run.slice(0, at + 1)).slice(0, -1), ...simplified(run.slice(at))]
}

/**
 * The curve y = f(x), as runs where it stays inside the y-range.
 * @param {Plane} spec
 * @param {string} y
 * @param {string} letter the letter the curve is in
 * @returns {Pair[][]}
 */
function runsOf(spec, y, letter = 'x') {
  const [x0, x1] = spec.x
  const [y0, y1] = spec.y
  const tree = parse(y)
  if (!tree.ok) throw new Error(`${y}: ${readMessage(tree.error)}`)
  /** @type {Pair[][]} */
  const runs = [[]]
  for (let i = 0; i <= 400; i++) {
    const x = x0 + ((x1 - x0) * i) / 400
    const v = num(tree.value, { [letter]: x })
    const run = runs.at(-1) ?? []
    if (v >= y0 - 1e-9 && v <= y1 + 1e-9) run.push([x, v])
    else if (run.length) runs.push([])
  }
  return runs.filter(r => r.length > 1)
}

/**
 * Each curve, drawn; the places in px a label of it can sit, the end first.
 * @param {Sheet} d
 * @param {Plane} spec
 * @param {Scale} s
 * @returns {Pair[][]}
 */
function curves(d, spec, { X, Y }) {
  return (spec.curves ?? []).map(c => {
    /** @type {Pair[]} */
    let path
    if ('x' in c)
      path = [
        [c.x, spec.y[0]],
        [c.x, spec.y[1]]
      ]
    else if ('from' in c) path = [c.from, c.to]
    else path = runsOf(spec, c.y).flat()
    const px = path.map(([x, v]) => /** @type {Pair} */ ([X(x), Y(v)]))
    if ('y' in c) for (const run of runsOf(spec, c.y)) d.polyline(run.map(([x, v]) => [X(x), Y(v)]))
    else d.line(...(px[0] ?? [0, 0]), ...(px.at(-1) ?? [0, 0]), 2)
    if (c.labelAt) return [/** @type {Pair} */ ([X(c.labelAt[0]), Y(c.labelAt[1])])]
    return alongside(px)
  })
}

/**
 * Points along a path, from its end back, a few px apart.
 * @param {Pair[]} px
 * @returns {Pair[]}
 */
function alongside(px) {
  const out = [px.at(-1) ?? [0, 0]]
  let last = out[0] ?? [0, 0]
  for (const p of px.slice(0, -1).reverse())
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) >= 14) out.push((last = p))
  return out
}

/** The room between two numbers along an axis, in px. */
const ROOM = 8

/** @typedef {[number, number, string]} Spot x, baseline and anchor of a text */
/**
 * The labels of the marks on an axis: all on one side of it, the other side where a line is in the
 * way, and nudged along the axis where a line crosses a mark itself, never up against the number
 * beside it.
 * @param {Sheet} d
 * @param {{ v: number, at: (side: 0 | 1) => Spot[] }[]} marks the spots of each, the centred ones
 *   first, given which side is preferred
 * @param {string} what
 */
function numbered(d, marks, what) {
  /** @param {number} v @param {Spot} spot */
  const clear = (v, [x, y, a]) => d.free(d.boxOf(x, y, numeral(v), a))
  const crossed = (/** @type {0 | 1} */ side) =>
    marks.filter(m => !clear(m.v, m.at(side)[0] ?? [0, 0, ''])).length
  const side = crossed(1) < crossed(0) ? 1 : 0
  // A number keeps, from a number on its own line, the room two centred numbers have: one nudged
  // off its mark and up against its neighbour reads with it as one number ("−2−1").
  /** The numbers placed so far, each box widened by half that room. @type {Box[]} */
  const placed = []
  /** @param {number} v @param {Spot} spot @returns {Box} */
  const widened = (v, [x, y, anchor]) => {
    const [a, b, c, e] = d.boxOf(x, y, numeral(v), anchor)
    return [a - ROOM / 2 + 0.1, b, c + ROOM / 2 - 0.1, e]
  }
  /** @param {number} v @param {Spot} spot */
  const roomy = (v, spot) => !placed.some(other => overlap(other, widened(v, spot)))
  for (const m of marks) {
    const spots = m.at(side)
    const at = spots.find(sp => clear(m.v, sp) && roomy(m.v, sp)) ?? spots.find(sp => clear(m.v, sp)) ?? spots[0]
    if (!at) continue
    if (!clear(m.v, at)) d.faults.push(`${what} ${m.v} is crossed`)
    else if (!roomy(m.v, at)) d.faults.push(`${what} ${m.v} runs into the number beside it`)
    placed.push(widened(m.v, at))
    d.text(at[0], at[1], numeral(m.v), at[2])
  }
}

/**
 * The numbers along both axes, and the 0 where they cross.
 * @param {Sheet} d
 * @param {Plane} spec
 * @param {Scale} s
 */
function numbers(d, spec, { X, Y, ox, oy }) {
  const xs = ticks(spec.x[0], spec.x[1], spec.xstep ?? 1).filter(v => v !== ox)
  const ys = ticks(spec.y[0], spec.y[1], spec.ystep ?? 1).filter(v => v !== oy)
  crowded(
    xs.map(v => [X(v), widthOf(numeral(v)) + ROOM]),
    'the x marks'
  )
  crowded(
    ys.map(v => [-Y(v), FONT + 4]),
    'the y marks'
  )
  numbered(
    d,
    xs.map(v => ({
      v,
      at: side => {
        const y = [Y(oy) + 19, Y(oy) - 8]
        const first = /** @type {number} */ (y[side])
        const other = /** @type {number} */ (y[1 - side])
        /** @type {Spot[]} */
        const out = [
          [X(v), first, 'middle'],
          [X(v), other, 'middle']
        ]
        for (const k of [3, 9, 15])
          for (const yy of [first, other]) out.push([X(v) - k, yy, 'end'], [X(v) + k, yy, 'start'])
        return out
      }
    })),
    'x mark'
  )
  numbered(
    d,
    ys.map(v => ({
      v,
      at: side => {
        /** @type {Spot[]} */
        const lr = [
          [X(ox) - 9, Y(v) + 6, 'end'],
          [X(ox) + 9, Y(v) + 6, 'start']
        ]
        const [a, b] = side ? [lr[1], lr[0]] : [lr[0], lr[1]]
        /** @type {Spot[]} */
        const out = [a ?? [0, 0, ''], b ?? [0, 0, '']]
        for (const dy of [12, -12]) for (const q of [a, b]) if (q) out.push([q[0], q[1] + dy, q[2]])
        return out
      }
    })),
    'y mark'
  )
  zeroAt(d, X(ox), Y(oy))
}

/**
 * The 0 where the axes cross, in the first corner that is free.
 * @param {Sheet} d
 * @param {number} cx
 * @param {number} cy
 */
function zeroAt(d, cx, cy) {
  /** @type {Spot[]} */
  const zero = [
    [cx - 6, cy + 17, 'end'],
    [cx + 6, cy + 17, 'start'],
    [cx - 6, cy - 7, 'end'],
    [cx + 6, cy - 7, 'start']
  ]
  const at = zero.find(([x, y, a]) => d.free(d.boxOf(x, y, '0', a))) ?? zero[0]
  if (at) d.text(at[0], at[1], '0', at[2])
}

/**
 * That marks along an axis, each [position, room it needs] in px, do not run into one another.
 * @param {[number, number][]} marks
 * @param {string} what
 */
function crowded(marks, what) {
  const sorted = [...marks].sort((a, b) => a[0] - b[0])
  sorted.forEach(([at, room], i) => {
    const [next, nextRoom] = sorted[i + 1] ?? []
    if (next !== undefined && nextRoom !== undefined && next - at < (room + nextRoom) / 2)
      throw new Crowded(what)
  })
}

/** An axis whose numbers are too close to be told apart; the spec asks for fewer. */
class Crowded extends Error {
  /** @param {string} what */
  constructor(what) {
    super(`${what} are too close together`)
    this.what = what
  }
}

/**
 * The names of the two axes.
 * @param {Sheet} d
 * @param {Plane} spec
 * @param {Scale} s
 */
function names(d, spec, { X, Y, ox, oy }) {
  const xname = spec.xlabel ?? 'x'
  const yname = spec.ylabel ?? 'y'
  const [ex, ey] = [X(spec.x[1]), Y(oy)]
  const [tx, ty] = [X(ox), Y(spec.y[1])]
  if (xname.length === 1) d.text(ex + 18, ey + 5, xname, 'start', true)
  else
    for (const dy of [43, -15])
      if (d.free(d.boxOf(ex + 12, ey + dy, xname, 'end'))) {
        d.text(ex + 12, ey + dy, xname, 'end')
        break
      }
  if (yname.length === 1) d.text(tx, ty - 18, yname, 'middle', true)
  else d.text(tx - 4, ty - 18, yname, 'start')
}

/**
 * Guides and sides, drawn, with the word of each beside it.
 * @param {Sheet} d
 * @param {Side[]} list
 * @param {Scale} s
 * @param {{ w: number, dash: string }} how
 */
function sides(d, list, { X, Y }, how) {
  for (const l of list) {
    const [a, b] = [l.from, l.to]
    d.line(X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), how.w, how.dash)
  }
}

/**
 * The word beside each side, at its middle.
 * @param {Sheet} d
 * @param {Side[]} list
 * @param {Scale} s
 */
function sideWords(d, list, { X, Y }) {
  for (const l of list) {
    if (!l.label) continue
    const mid = /** @type {Pair} */ ([
      (X(l.from[0]) + X(l.to[0])) / 2,
      (Y(l.from[1]) + Y(l.to[1])) / 2
    ])
    const flat = Math.abs(Y(l.from[1]) - Y(l.to[1])) < Math.abs(X(l.from[0]) - X(l.to[0]))
    d.beside([mid], minus(l.label), 4, l.place ? [l.place] : flat ? ['s', 'n'] : ['e', 'w'])
  }
}

/**
 * A region's side as a sign test: above 0 on the shaded side.
 * @param {Region} r
 * @returns {(p: Pair) => number}
 */
function sideOf(r) {
  const c = r.boundary
  const up = r.side === 'above' || r.side === 'right' ? 1 : -1
  if ('x' in c) {
    const at = c.x
    if (typeof at === 'number') return ([x]) => up * (x - at)
    const tree = parse(at)
    if (!tree.ok) throw new Error(`${at}: ${readMessage(tree.error)}`)
    return ([x, y]) => up * (x - num(tree.value, { y }))
  }
  if ('from' in c) {
    const [[x1, y1], [x2, y2]] = [c.from, c.to]
    if (x1 === x2) return ([x]) => up * (x - x1)
    return ([x, y]) => up * Math.sign(x2 - x1) * ((y - y1) * (x2 - x1) - (x - x1) * (y2 - y1))
  }
  const tree = parse(c.y)
  if (!tree.ok) throw new Error(`${c.y}: ${readMessage(tree.error)}`)
  return ([x, y]) => up * (y - num(tree.value, { x }))
}

/**
 * A polygon cut to where a linear test is at least 0 (Sutherland–Hodgman, one edge).
 * @param {Pair[]} poly
 * @param {(p: Pair) => number} g
 * @returns {Pair[]}
 */
function cut(poly, g) {
  return poly.flatMap((p, i) => {
    const q = /** @type {Pair} */ (poly[(i + 1) % poly.length])
    const [a, b] = [g(p), g(q)]
    /** @type {Pair[]} */
    const out = a >= 0 ? [p] : []
    if (a * b < 0) out.push([p[0] + ((q[0] - p[0]) * a) / (a - b), p[1] + ((q[1] - p[1]) * a) / (a - b)])
    return out
  })
}

/**
 * The shaded region, filled lightly within the axes, and each boundary drawn across them.
 * @param {Sheet} d
 * @param {Plane} spec
 * @param {Scale} s
 */
function region(d, spec, { X, Y }) {
  if (!spec.shade?.length) return
  const [[x0, x1], [y0, y1]] = [spec.x, spec.y]
  /** @type {Pair[]} */
  const box = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]
  const bent = spec.shade.filter(r => curved(spec, r))
  const px = (/** @type {Pair[]} */ ps) => ps.map(([x, y]) => /** @type {Pair} */ ([X(x), Y(y)]))
  let area = px(spec.shade.reduce((poly, r) => cut(poly, sideOf(r)), box))
  if (bent.length) {
    const [lo, hi] = sampled(spec)
    area = [...simplified(px(lo)), ...simplified(px(hi)).reverse()]
  }
  if (area.length > 2)
    d.fills.push(`<polygon fill="currentColor" fill-opacity="0.15" points="${area.map(([x, y]) => `${f(x)} ${f(y)}`).join(' ')}"/>`)
  for (const r of spec.shade) {
    const dash = r.strict ? ' stroke-dasharray="6 4"' : ''
    if (bent.includes(r)) {
      const c = /** @type {{ x: string } | { y: string }} */ (r.boundary)
      const runs = 'y' in c ? runsOf(spec, c.y) : runsOf({ ...spec, x: spec.y, y: spec.x }, c.x, 'y').map(run => run.map(([y, x]) => /** @type {Pair} */ ([x, y])))
      for (const run of runs) d.polyline(run.map(([x, y]) => [X(x), Y(y)]), dash)
      continue
    }
    const g = sideOf(r)
    const on = cut(box, g).filter(p => Math.abs(g(p)) < 1e-9)
    const [a, b] = [on[0], on.at(-1)]
    if (a && b) d.line(X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), 2, dash)
  }
}

/**
 * Whether a region's boundary is a curve, not a line: x = g(y), or y = f(x) bending somewhere.
 * @param {Plane} spec
 * @param {Region} r
 */
function curved(spec, r) {
  const c = r.boundary
  if ('x' in c) return typeof c.x === 'string'
  if (!('y' in c)) return false
  const tree = parse(c.y)
  if (!tree.ok) return false
  const [x0, x1] = spec.x
  const v = (/** @type {number} */ t) => num(tree.value, { x: x0 + (x1 - x0) * t })
  return [0.25, 0.5, 0.75].some(t => Math.abs(v(t - 0.25) + v(t + 0.25) - 2 * v(t)) > 1e-9)
}

/**
 * The shaded region as a polygon, found column by column (row by row where a boundary is
 * x = g(y)): in each, the lowest and highest point on every item's side, refined by halving.
 * ponytail: one run per column; a region a boundary splits into two runs within a column is drawn
 * as their hull in that column.
 * @param {Plane} spec
 * @returns {[Pair[], Pair[]]} its lower edge and its upper edge, each from the start of the axis
 */
function sampled(spec) {
  const rows = (spec.shade ?? []).some(r => 'x' in r.boundary && typeof r.boundary.x === 'string')
  const tests = (spec.shade ?? []).map(sideOf)
  const [[u0, u1], [v0, v1]] = rows ? [spec.y, spec.x] : [spec.x, spec.y]
  const at = (/** @type {number} */ u, /** @type {number} */ v) => /** @type {Pair} */ (rows ? [v, u] : [u, v])
  const N = 400
  /** @param {number} u @param {number} v */
  const inside = (u, v) => tests.every(g => g(at(u, v)) >= 0)
  /** The edge between a point inside and one not. @param {number} u @param {number} a inside @param {number} b */
  const edge = (u, a, b) => {
    for (let i = 0; i < 40; i++) {
      const m = (a + b) / 2
      if (inside(u, m)) a = m
      else b = m
    }
    return a
  }
  /** @type {Pair[]} */
  const lo = []
  /** @type {Pair[]} */
  const hi = []
  for (let i = 0; i <= N; i++) {
    const u = u0 + ((u1 - u0) * i) / N
    const vs = Array.from({ length: N + 1 }, (_, k) => v0 + ((v1 - v0) * k) / N)
    const first = vs.findIndex(v => inside(u, v))
    if (first < 0) continue
    const last = N - [...vs].reverse().findIndex(v => inside(u, v))
    const [a, b] = [vs[first] ?? v0, vs[last] ?? v1]
    lo.push(at(u, first ? edge(u, a, vs[first - 1] ?? v0) : a))
    hi.push(at(u, last < N ? edge(u, b, vs[last + 1] ?? v1) : b))
  }
  return [lo, hi]
}

/**
 * One spec laid out at a width.
 * @param {Plane} spec
 * @param {number} plotW
 */
function lay(spec, plotW) {
  const d = new Sheet()
  const s = scaleOf(spec, plotW)
  const { X, Y } = s
  region(d, spec, s)
  axes(d, spec, s)
  const where = curves(d, spec, s)
  sides(d, spec.dashed ?? [], s, { w: 1, dash: ' stroke-dasharray="4 3"' })
  sides(d, spec.legs ?? [], s, { w: 1.6, dash: '' })
  for (const p of spec.points ?? []) {
    const [px, py] = [X(p.at[0]), Y(p.at[1])]
    d.line(px - 4, py - 4, px + 4, py + 4, 1.6)
    d.line(px - 4, py + 4, px + 4, py - 4, 1.6)
  }
  for (const { at, open } of spec.dots ?? []) {
    if (at[0] < spec.x[0] || at[0] > spec.x[1] || at[1] < spec.y[0] || at[1] > spec.y[1]) d.faults.push(`dot (${at[0]}, ${at[1]}) is outside the axes`)
    else d.dot(X(at[0]), Y(at[1]), open ?? false)
  }
  names(d, spec, s)
  numbers(d, spec, s)
  for (const p of spec.points ?? [])
    if (p.label)
      d.beside([[X(p.at[0]), Y(p.at[1])]], minus(p.label), 10, p.place ? [p.place] : AROUND)
  ;(spec.curves ?? []).forEach((c, i) => {
    if (c.label) d.beside(where[i] ?? [], minus(c.label), 6, c.place ? [c.place] : AROUND)
  })
  sideWords(d, spec.dashed ?? [], s)
  sideWords(d, spec.legs ?? [], s)
  for (const n of spec.notes ?? [])
    d.beside([[X(n.at[0]), Y(n.at[1])]], minus(n.text), 6, n.place ? [n.place] : AROUND)
  return d
}

/**
 * A number line laid out at a width: the axis arrowed at both ends, its marks numbered below, and
 * the shaded parts on it.
 * @param {Line} spec
 * @param {number} plotW
 */
function layLine(spec, plotW) {
  const d = new Sheet()
  const [x0, x1] = spec.x
  const X = (/** @type {number} */ x) => (x * plotW) / (x1 - x0)
  const [left, right] = [X(x0) - 14, X(x1) + 14]
  /** @param {number} at @param {number} dir @param {number} w */
  const arrow = (at, dir, w) => {
    d.line(at - dir * 7, -4, at, 0, w)
    d.line(at - dir * 7, 4, at, 0, w)
  }
  // The axis breaks at each open circle, so the circle stays open.
  const open = (spec.shade ?? [])
    .flatMap(s => [s.from !== '-inf' && s.fromOpen ? X(s.from) : [], s.to !== 'inf' && s.toOpen ? X(s.to) : []])
    .flat()
    .sort((a, b) => a - b)
  ;[left, ...open.flatMap(x => [x - 5, x + 5]), right].forEach((x, i, all) => {
    if (i % 2 === 0) d.line(x, 0, all[i + 1] ?? x, 0)
  })
  arrow(left, -1, 1.2)
  arrow(right, 1, 1.2)
  const xs = ticks(x0, x1, spec.xstep ?? 1)
  crowded(
    xs.map(v => [X(v), widthOf(numeral(v)) + ROOM]),
    'the x marks'
  )
  // No mark inside an open circle.
  for (const v of xs) if (!open.includes(X(v))) d.line(X(v), -4, X(v), 4, 1)
  for (const s of spec.shade ?? []) {
    const a = s.from === '-inf' ? left : X(s.from)
    const b = s.to === 'inf' ? right : X(s.to)
    // A thick line stops at an open circle's edge, so the circle stays open.
    d.line(a + (s.from !== '-inf' && s.fromOpen ? 5 : 0), 0, b - (s.to !== 'inf' && s.toOpen ? 5 : 0), 0, 4)
    if (s.from === '-inf') arrow(left, -1, 2.4)
    else d.dot(a, 0, s.fromOpen ?? false)
    if (s.to === 'inf') arrow(right, 1, 2.4)
    else d.dot(b, 0, s.toOpen ?? false)
  }
  numbered(
    d,
    xs.map(v => ({ v, at: () => [[X(v), 23, 'middle'], [X(v) - 4, 23, 'end'], [X(v) + 4, 23, 'start']] })),
    'x mark'
  )
  return d
}

/**
 * One spec as the text of an SVG, and what is wrong with it: drawn as large as the phone column
 * lets its labels stay body size.
 * @param {Spec} spec
 * @returns {{ svg: string, faults: string[] }}
 */
export function draw(spec) {
  for (let plotW = 330; plotW >= 90; plotW -= 6) {
    let d
    try {
      d = spec.kind === 'numberline' ? layLine(spec, plotW) : lay(spec, plotW)
    } catch (e) {
      if (e instanceof Crowded) return { svg: '', faults: [e.message] }
      throw e
    }
    if (d.wide() > MOST_WIDE) continue
    return { svg: d.svg(), faults: d.faults }
  }
  return { svg: '', faults: [`wider than ${MOST_WIDE} px at its smallest`] }
}

/**
 * Every spec of a unit's figures folder by the name of the SVG it draws, in name order.
 * @param {URL} dir the folder (`figureDir`)
 * @returns {Record<string, Spec>}
 */
export function specs(dir) {
  const all = readdirSync(dir)
    .filter(name => name.endsWith('.json'))
    .flatMap(file => Object.entries(JSON.parse(readFileSync(new URL(file, dir), 'utf8'))))
  return Object.fromEntries(all.sort(([a], [b]) => (a < b ? -1 : 1)))
}
