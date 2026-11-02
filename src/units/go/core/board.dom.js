// Hides: how a Go position is drawn: the grid, the stones, the board's edges where they are in
// view, and the coordinates. A still board diagram: a black stone is a solid disc and a white
// stone an open circle, on a light ground whatever the theme. It is drawn at its real size: a
// point is as wide as two digits at the reader's text size, so no label is smaller than the text,
// and a board wider than its column scrolls in its own box. The picture is hidden from a screen
// reader: its short name and the text beside it (what is in view, then every stone by colour and
// coordinate) say all it shows.
import {
  overviewOf,
  pointAt,
  rowsList,
  spacingPx,
  starsOf,
  stonesList,
  viewOf,
  whereOf
} from './diagram.logic.js'
import { COLUMNS, parseCoord } from './rules.logic.js'
import { h } from '../../../parts/view.dom.js'

/** The canvas that measures text; made once. @type {CanvasRenderingContext2D | null | undefined} */
let ruler

/**
 * The spacing of the board's points in pixels at the reader's text size: the body text, which the
 * numbers and coordinates in the picture are set in.
 */
function pointPx() {
  ruler ??= document.createElement('canvas').getContext('2d')
  if (!ruler) return spacingPx(0)
  const text = getComputedStyle(document.body)
  ruler.font = `${text.fontSize} ${text.fontFamily}`
  return spacingPx(ruler.measureText('88').width)
}

/**
 * A board's scroll box, once it is drawn: the box takes a name, the region role and a place in the
 * keyboard's order while the board is wider than its column (measured, as the maths figures are),
 * and a board that takes the keys always has them. It reads `data-name` and `data-keys`.
 * @param {Element} box
 */
function scrollsWhenWide(box) {
  const check = () => {
    const wide = box.scrollWidth > box.clientWidth
    const keys = box.hasAttribute('data-keys')
    const attrs = new Map([
      ['role', 'region'],
      ['tabindex', '0'],
      ['aria-label', labelOf(box.getAttribute('data-name') ?? '', wide, keys)]
    ])
    for (const [name, value] of attrs)
      if (wide || keys) box.setAttribute(name, value)
      else box.removeAttribute(name)
  }
  const watch = new ResizeObserver(check) // the box, and the drawing inside it (a text size change)
  watch.observe(box)
  const svg = box.querySelector('svg')
  if (svg) watch.observe(svg)
  new MutationObserver(check).observe(box, { attributeFilter: ['data-name', 'data-keys'] })
}

/**
 * The name of a board's scroll box.
 * @param {string} name
 * @param {boolean} wide the board is wider than its column
 * @param {boolean} keys the box takes the arrow keys to change the move
 */
const labelOf = (name, wide, keys) =>
  `${name}${wide ? (keys ? ', scrolls sideways with Shift and the arrow keys' : ', scrolls sideways') : ''}${keys ? '. Left and right arrow keys change the move' : ''}`

/**
 * A point the diagram holds.
 * @param {string} at
 */
function pointOf(at) {
  const p = parseCoord(at)
  if (!p) throw new Error(`Not a point: ${at}`)
  return p
}

/**
 * Where a diagram's points fall in the picture: `px`, `py` from a point's column and row, and
 * the ends of the lines, which run to the edge of the picture on a cut side and stop at the last
 * point on a board edge.
 * @param {import('./diagram.logic.js').StoredDiagram} diagram
 * @param {number} pt the spacing of the points in pixels
 */
function frameOf(diagram, pt) {
  const { size } = diagram
  const [ox, oy, w, ht] = viewOf(diagram.view)
  /** @param {number} x */
  const px = x => pt * (x - ox + 1.5)
  /** @param {number} y */
  const py = y => pt * (ht - (y - oy) - 0.5)
  const left = ox === 0
  const right = ox + w === size
  const bottom = oy === 0
  const top = oy + ht === size
  return {
    pt,
    ox,
    oy,
    w,
    ht,
    px,
    py,
    edges: { left, right, bottom, top },
    x0: left ? px(ox) : px(ox) - pt / 2,
    x1: right ? px(ox + w - 1) : px(ox + w - 1) + pt / 2,
    y0: bottom ? py(oy) : py(oy) + pt / 2,
    y1: top ? py(oy + ht - 1) : py(oy + ht - 1) - pt / 2,
    cols: Array.from({ length: w }, (_, i) => ox + i),
    rows: Array.from({ length: ht }, (_, i) => oy + i)
  }
}

/** @typedef {ReturnType<typeof frameOf>} Frame */

/**
 * The ground, the lines, the board's edges in view, and the star points.
 * @param {Frame} f
 * @param {import('./diagram.logic.js').StoredDiagram} diagram
 */
const grid = (f, diagram) => {
  const { ox, oy, w, ht, px, py, x0, x1, y0, y1, edges } = f
  return [
    h('rect', { class: 'go-ground', x: f.pt, y: '0', width: f.pt * w + f.pt / 2, height: f.pt * ht }),
    f.rows.map(y => h('line', { key: `r${y}`, class: 'go-line', x1: x0, x2: x1, y1: py(y), y2: py(y) })),
    f.cols.map(x => h('line', { key: `c${x}`, class: 'go-line', x1: px(x), x2: px(x), y1: y0, y2: y1 })),
    edges.left && h('line', { class: 'go-edge', x1: px(ox), x2: px(ox), y1: y0, y2: y1 }),
    edges.right &&
      h('line', { class: 'go-edge', x1: px(ox + w - 1), x2: px(ox + w - 1), y1: y0, y2: y1 }),
    edges.bottom && h('line', { class: 'go-edge', x1: x0, x2: x1, y1: py(oy), y2: py(oy) }),
    edges.top &&
      h('line', { class: 'go-edge', x1: x0, x2: x1, y1: py(oy + ht - 1), y2: py(oy + ht - 1) }),
    starsOf(diagram).map(at => {
      const [x, y] = pointOf(at)
      return h('circle', { key: `star${at}`, class: 'go-star', cx: px(x), cy: py(y), r: 3 })
    })
  ]
}

/**
 * One stone: faint and crossed when it was taken off as dead, with its number in a line.
 * @param {Frame} f
 * @param {Set<string>} off
 * @param {string} at
 * @param {boolean} isBlack
 * @param {number} [n]
 */
const stone = (f, off, at, isBlack, n) => {
  const [x, y] = pointOf(at)
  const cx = f.px(x)
  const cy = f.py(y)
  const d = f.pt / 4
  return h(
    'g',
    { key: `${at}${n ?? ''}`, class: off.has(at) ? 'go-dead' : undefined },
    h('circle', { class: isBlack ? 'go-black' : 'go-white', cx, cy, r: f.pt / 2 - 2 }),
    off.has(at) &&
      h('path', {
        class: isBlack ? 'go-dead-mark go-dead-mark-on-black' : 'go-dead-mark',
        d: `M${cx - d} ${cy - d}L${cx + d} ${cy + d}M${cx + d} ${cy - d}L${cx - d} ${cy + d}`
      }),
    n !== undefined &&
      h('text', { class: isBlack ? 'go-num go-num-on-black' : 'go-num', x: cx, y: cy }, n)
  )
}

/**
 * The ring on the move just played: a small ring inside its stone, light on a black stone and
 * dark on a white one; round a numbered stone, so the ring and the number do not meet.
 * @param {Frame} f
 * @param {BoardProps} p
 * @param {string} last
 */
function lastRing(f, { diagram, numbers = {} }, last) {
  const [x, y] = pointOf(last)
  const around = last in numbers
  return h('circle', {
    class: diagram.black.includes(last) && !around ? 'go-last go-last-on-black' : 'go-last',
    cx: f.px(x),
    cy: f.py(y),
    r: around ? f.pt / 2 - 0.5 : f.pt / 5
  })
}

/**
 * The stones, the last move's mark, the rings round the points an answer names, and the
 * coordinates.
 * @param {Frame} f
 * @param {BoardProps} p
 */
const pieces = (f, p) => {
  const { diagram, numbers = {}, dead = [], chosen = [], last } = p
  const { black, white } = diagram
  const off = new Set(dead)
  const { px, py } = f
  return [
    black.filter(at => !numbers[at]).map(at => stone(f, off, at, true)),
    white.filter(at => !numbers[at]).map(at => stone(f, off, at, false)),
    Object.entries(numbers).map(([at, n]) => stone(f, off, at, n.black, n.n)),
    last && lastRing(f, p, last),
    chosen.map(at => {
      const [x, y] = pointOf(at)
      return h('circle', { key: `chosen${at}`, class: 'go-chosen', cx: px(x), cy: py(y), r: f.pt / 2 - 1 })
    }),
    f.cols.map(x =>
      h('text', { key: `cx${x}`, class: 'go-coord', x: px(x), y: f.pt * f.ht + f.pt * 0.9 }, COLUMNS[x])
    ),
    f.rows.map(y => h('text', { key: `cy${y}`, class: 'go-coord', x: f.pt / 2, y: py(y) }, y + 1))
  ]
}

/**
 * A click or tap on the board, as the point under it.
 * @param {Frame} f
 * @param {readonly number[]} view
 * @param {(at: string) => void} onPoint
 */
const clickOf = (f, view, onPoint) => (/** @type {MouseEvent} */ e) => {
  const target = e.currentTarget
  if (!(target instanceof Element)) return
  const r = target.getBoundingClientRect()
  const at = pointAt(
    view,
    ((e.clientX - r.left) / r.width) * (f.w + 2),
    ((e.clientY - r.top) / r.height) * (f.ht + 1.5)
  )
  if (at) onPoint(at)
}

/**
 * The text beside a board, all of what it shows: what is in view with the stone counts first, then
 * the move just played, every stone by colour and coordinate (row by row from the top on a whole
 * board), the stones marked dead, and the point the answer names. A whole board's list sits behind
 * its overview line, closed.
 * @param {BoardProps} p
 * @param {boolean} whole
 */
function caption(p, whole) {
  const { diagram, dead = [], last, chosen = [], plays } = p
  const overview = overviewOf(diagram, plays)
  const list = h(
    'ul',
    { class: 'go-text' },
    last && h('li', null, `Last move: ${diagram.black.includes(last) ? 'Black' : 'White'} ${last}.`),
    (whole ? rowsList(diagram) : stonesList(diagram)).map(line => h('li', null, line)),
    dead.length > 0 && h('li', null, `Marked dead: ${dead.join(', ')}.`)
  )
  return h(
    'figcaption',
    { class: 'lrn-ss-note' },
    whole ? h('details', null, h('summary', null, overview), list) : [h('p', null, overview), list],
    chosen.length > 0 && h('p', null, `Your answer: ${chosen.join(', ')}.`)
  )
}

/**
 * @typedef {{ diagram: import('./diagram.logic.js').StoredDiagram, numbers?: import('./diagram.logic.js').Numbers, plays?: string | undefined, dead?: readonly string[], onPoint?: (at: string) => void, chosen?: readonly string[], last?: string | undefined, keys?: ((e: KeyboardEvent) => void) | undefined }} BoardProps
 */

/**
 * A still board diagram at its real size. `numbers` maps a point to the number its stone carries
 * in a line; `dead` lists the stones taken off as dead, each drawn faint and crossed; `plays` is
 * the sentence that names the side to move. With `onPoint`, a click or tap on the board gives the
 * point under it, the pointer's way to answer beside the typed field; `chosen` rings the points
 * the answer names; `last` marks the last move played. With `keys`, the board's box takes the
 * keyboard's focus and hands it each key pressed there. The star points are drawn. A whole
 * board's text runs row by row.
 * @param {BoardProps} p
 */
export function board(p) {
  const { diagram, onPoint, keys } = p
  const { size } = diagram
  const f = frameOf(diagram, pointPx())
  const { w, ht } = f
  const whole = w === size && ht === size
  const width = f.pt * (w + 2)
  const name = `Go board, ${whereOf(diagram)}`
  return h(
    'figure',
    { class: 'go-board' },
    h(
      'div',
      {
        key: 'box',
        class: 'lrn-figure-scroll',
        // a board that takes the keys is a region from the first draw; the rest are, once measured
        role: keys ? 'region' : undefined,
        tabindex: keys ? 0 : undefined,
        'aria-label': keys ? labelOf(name, false, true) : undefined,
        'data-name': name,
        'data-keys': keys ? 'yes' : undefined,
        ref: scrollsWhenWide,
        onkeydown: keys
      },
      h(
        'div',
        { role: 'img', 'aria-label': name },
        h(
          'svg',
          {
            viewBox: `0 0 ${width} ${f.pt * (ht + 1.5)}`,
            width,
            height: f.pt * (ht + 1.5),
            'aria-hidden': 'true',
            focusable: 'false',
            // the picture stays hidden from a screen reader: the typed field is the way to answer there
            class: onPoint ? 'go-pick' : undefined,
            onclick: onPoint ? clickOf(f, diagram.view, onPoint) : undefined
          },
          grid(f, diagram),
          pieces(f, p)
        )
      )
    ),
    caption(p, whole)
  )
}
