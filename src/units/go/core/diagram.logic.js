// Hides: a diagram, as "A Self-Study System" Go stores one: the board's size, the cut in view in real
// coordinates, and the stones of each colour by coordinate. Drawn as lines and text, never kept
// as a picture. Pure functions, tested in tests/go-data.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'
import { BLACK, COLUMNS, WHITE, byPoint, coord, parseCoord } from './rules.logic.js'

/**
 * @typedef {[number, number, number, number]} View The cut in view: x and y of its bottom left point, then its width and height.
 * @typedef {{ size: number, view: View, black: string[], white: string[] }} Diagram
 * @typedef {{ size: number, view: readonly number[], black: readonly string[], white: readonly string[] }} StoredDiagram A diagram as the stored bank holds one, its view not yet known to have four numbers
 */

/**
 * The four numbers of a stored view; throws when it has fewer.
 * @param {readonly number[]} view
 * @returns {View}
 */
export function viewOf(view) {
  const [ox, oy, w, h] = view
  assert(
    ox !== undefined && oy !== undefined && w !== undefined && h !== undefined,
    'A diagram view holds four numbers'
  )
  return [ox, oy, w, h]
}

/**
 * A diagram from rows of text, top row first, whose bottom left point stands at (ox, oy).
 * @param {string[]} rows
 * @param {number} [ox]
 * @param {number} [oy]
 * @param {number} [size]
 * @returns {Diagram}
 */
export function diagramFrom(rows, ox = 0, oy = 0, size = 19) {
  /** @type {string[]} */
  const black = []
  /** @type {string[]} */
  const white = []
  const h = rows.length
  const top = rows[0]
  assert(top !== undefined, 'A diagram drawn as rows has at least one row')
  rows.forEach((row, r) =>
    row.split('').forEach((ch, x) => {
      const at = coord(ox + x, oy + h - 1 - r)
      if (ch === 'X') black.push(at)
      else if (ch === 'O') white.push(at)
    })
  )
  return {
    size,
    view: [ox, oy, top.length, h],
    black: black.sort(byPoint),
    white: white.sort(byPoint)
  }
}

/**
 * The cut of a diagram as a board the rules and the search run on, with `index` from a
 * coordinate to its point on that board and `name` back.
 * @param {Pick<StoredDiagram, 'view' | 'black' | 'white'>} diagram
 */
export function boardOf({ view, black, white }) {
  const [ox, oy, w, h] = viewOf(view)
  const cells = new Uint8Array(w * h)
  /** @param {string} at */
  const index = at => {
    const p = parseCoord(at)
    assert(p, `A diagram's stone is on a point: ${at}`)
    return (p[1] - oy) * w + (p[0] - ox)
  }
  for (const at of black) cells[index(at)] = BLACK
  for (const at of white) cells[index(at)] = WHITE
  /** @param {number} i */
  const name = i => coord(ox + (i % w), oy + Math.floor(i / w))
  return { board: { w, h, cells }, index, name }
}

/**
 * The point under a click on a drawn diagram, or null off its points. `fx` and `fy` are the
 * click's place in the drawing in points from its top left: the drawing keeps one point and a
 * half on the left for the row numbers, and half a point above the top row.
 * @param {readonly number[]} view
 * @param {number} fx
 * @param {number} fy
 * @returns {string | null}
 */
export function pointAt(view, fx, fy) {
  const [ox, oy, w, h] = viewOf(view)
  const x = ox + Math.round(fx - 1.5)
  const y = oy + Math.round(h - 0.5 - fy)
  return x < ox || x >= ox + w || y < oy || y >= oy + h ? null : coord(x, y)
}

/**
 * A diagram's stones by colour and coordinate, one line a colour. Nothing is left out.
 * @param {Pick<StoredDiagram, 'black' | 'white'>} diagram
 * @returns {string[]}
 */
export const stonesList = ({ black, white }) => [
  `Black: ${black.join(', ') || 'none'}.`,
  `White: ${white.join(', ') || 'none'}.`
]

/**
 * A whole board's stones, row by row from the top: each row that holds a stone, with its black
 * stones and then its white ones. "Row 16: Black D16, Q16. White O16."
 * @param {Pick<StoredDiagram, 'black' | 'white'>} diagram
 * @returns {string[]}
 */
export function rowsList({ black, white }) {
  /** @param {string} at */
  const rowOf = at => parseCoord(at)?.[1] ?? -1
  const rows = [...new Set([...black, ...white].map(rowOf))].sort((a, b) => b - a)
  if (!rows.length) return ['No stone is on the board.']
  return rows.map(y => {
    const b = black.filter(at => rowOf(at) === y)
    const w = white.filter(at => rowOf(at) === y)
    return [
      `Row ${y + 1}:`,
      ...(b.length ? [`Black ${b.join(', ')}.`] : []),
      ...(w.length ? [`White ${w.join(', ')}.`] : [])
    ].join(' ')
  })
}

/** The star points of the boards a course draws, by size: the marks a player finds a point by. */
/** @type {Readonly<Record<number, readonly string[]>>} */
const STARS = {
  19: ['D4', 'K4', 'Q4', 'D10', 'K10', 'Q10', 'D16', 'K16', 'Q16'],
  13: ['D4', 'K4', 'G7', 'D10', 'K10'],
  9: ['C3', 'G3', 'E5', 'C7', 'G7']
}

/**
 * The star points of a diagram's board that lie in its cut.
 * @param {Pick<StoredDiagram, 'size' | 'view'>} diagram
 * @returns {string[]}
 */
export function starsOf({ size, view }) {
  const [ox, oy, w, h] = viewOf(view)
  return (STARS[size] ?? []).filter(at => {
    const p = parseCoord(at)
    return p && p[0] >= ox && p[0] < ox + w && p[1] >= oy && p[1] < oy + h
  })
}

/**
 * Where a cut stands on the board, in words: "bottom left", "top side", "centre".
 * @param {Pick<StoredDiagram, 'size' | 'view'>} diagram
 */
export function whereOf({ size, view }) {
  const [ox, oy, w, h] = viewOf(view)
  if (w === size && h === size) return 'whole board'
  const left = ox === 0
  const right = ox + w === size
  const bottom = oy === 0
  const top = oy + h === size
  const v = bottom && !top ? 'bottom' : top && !bottom ? 'top' : ''
  const s = left && !right ? 'left' : right && !left ? 'right' : ''
  if (v && s) return `${v} ${s}`
  if (v) return `${v} side`
  if (s) return `${s} side`
  return 'centre'
}

/**
 * What a diagram has in view, in words: "Top left corner, A to H by 1 to 8", "Centre, J to N by
 * 7 to 11", "Whole board".
 * @param {Pick<StoredDiagram, 'size' | 'view'>} diagram
 */
export function viewText(diagram) {
  const where = whereOf(diagram)
  if (where === 'whole board') return 'Whole board'
  const [ox, oy, w, h] = viewOf(diagram.view)
  /** @param {string} a @param {string} b */
  const span = (a, b) => (a === b ? a : `${a} to ${b}`)
  const named = `${where.charAt(0).toUpperCase()}${where.slice(1)}${/ (left|right)$/.test(where) ? ' corner' : ''}`
  return `${named}, ${span(COLUMNS.charAt(ox), COLUMNS.charAt(ox + w - 1))} by ${span(String(oy + 1), String(oy + h))}`
}

/**
 * A diagram's overview, the line that opens its text: what is in view, the count of each
 * colour's stones, and, where it is known, the side to move as the screen words it ("Black plays
 * first.").
 * @param {Pick<StoredDiagram, 'size' | 'view' | 'black' | 'white'>} diagram
 * @param {string} [plays]
 */
export function overviewOf(diagram, plays) {
  /** @param {number} n */
  const stones = n => `${n} ${n === 1 ? 'stone' : 'stones'}`
  return `${viewText(diagram)}. Black ${stones(diagram.black.length)}, White ${stones(diagram.white.length)}.${plays ? ` ${plays}` : ''}`
}

/**
 * The spacing of a board's points in pixels at the reader's text size: as wide as "88" in the
 * text there and 6 pixels more, and never under 28, so a stone holds a two-digit number and two
 * points a click apart are at least 24 pixels apart.
 * @param {number} twoDigitsPx the width of "88" at text size
 */
export const spacingPx = twoDigitsPx => Math.max(28, Math.ceil(twoDigitsPx) + 6)

/**
 * Each side's ko threats elsewhere, from the ko field's fixed sentence.
 * @param {string} ko
 * @returns {{ black: number, white: number }}
 */
export function threatsOf(ko) {
  /** @param {string} side */
  const n = side => {
    const word = new RegExp(`${side} (none|\\d)`).exec(ko)?.[1]
    return !word || word === 'none' ? 0 : Number(word)
  }
  return { black: n('Black'), white: n('White') }
}

/** @typedef {Readonly<Record<string, Readonly<{ n: number, black: boolean }>>>} Numbers A point "D4" and the number its stone carries in a line */
