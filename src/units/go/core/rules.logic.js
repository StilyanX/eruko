// Hides: the rules of Go under the American Go Association's area rules, as "A Self-Study System" Go
// sets them out: stones, liberties, capture, no suicide, and the area count. Pure functions
// over plain data, tested in tests/go-rules.test.mjs.
//
// A board is `{ w, h, cells }`: `cells` is a Uint8Array of w × h points, 0 empty, 1 Black, 2 White,
// indexed `y * w + x` with x = 0 the A column and y = 0 the bottom row (row 1). A problem's
// diagram is cut from the board, and the search runs on the position as drawn, so a board need
// not be square.

import { assert } from '../../../kernel/invariant.logic.js'

/**
 * @typedef {{ w: number, h: number, cells: Uint8Array }} Board
 * @typedef {{ colour: number, stones: number[], liberties: number[] }} Group
 */

export const BLACK = 1
export const WHITE = 2

/** @param {number} c */
export const other = c => (c === BLACK ? WHITE : BLACK)

/** The column letters of a 19×19 board: A to T with no I. */
export const COLUMNS = 'ABCDEFGHJKLMNOPQRST'

/** A point as the paper writes it: a capital letter and a number, "D4". */
/**
 * @param {number} x
 * @param {number} y
 * @returns {string}
 */
export const coord = (x, y) => `${COLUMNS[x]}${y + 1}`

/**
 * A point from "D4" as `[x, y]`; null when it is not a point.
 * @param {unknown} text
 * @returns {[number, number] | null}
 */
export function parseCoord(text) {
  const m = /^([A-HJ-T])(\d{1,2})$/.exec(String(text).trim().toUpperCase())
  const column = m?.[1]
  const row = m ? Number(m[2]) : 0
  return column !== undefined && row >= 1 && row <= 19 ? [COLUMNS.indexOf(column), row - 1] : null
}

/**
 * A point that must be one: the callers hold only coordinates the build or `coord` made.
 * @param {string} at
 * @returns {[number, number]}
 */
function pointOf(at) {
  const p = parseCoord(at)
  assert(p, `A coordinate the build or coord() made is a point: ${at}`)
  return p
}

/**
 * Sort order of points: by column, then row.
 * @param {string} a
 * @param {string} b
 */
export const byPoint = (a, b) => {
  const [ax, ay] = pointOf(a)
  const [bx, by] = pointOf(b)
  return ax - bx || ay - by
}

/**
 * @param {number} w
 * @param {number} [h]
 * @returns {Board}
 */
export const emptyBoard = (w, h = w) => ({ w, h, cells: new Uint8Array(w * h) })

/**
 * A board from rows of text, top row first: `.` empty, `X` Black, `O` White.
 * @param {string[]} rows
 * @returns {Board}
 */
export function boardFrom(rows) {
  const h = rows.length
  const top = rows[0]
  assert(top !== undefined, 'A board drawn as rows has at least one row')
  const w = top.replace(/\s/g, '').length
  const b = emptyBoard(w, h)
  rows.forEach((row, r) => {
    const t = row.replace(/\s/g, '')
    for (let x = 0; x < w; x++) {
      const ch = t[x]
      b.cells[(h - 1 - r) * w + x] = ch === 'X' ? BLACK : ch === 'O' ? WHITE : 0
    }
  })
  return b
}

/** @param {Board} b @returns {Board} */
const copy = b => ({ w: b.w, h: b.h, cells: b.cells.slice() })

/**
 * @param {number} w
 * @param {number} h
 * @param {number} i
 * @returns {number[]}
 */
export function neighbours(w, h, i) {
  const x = i % w
  const out = []
  if (i >= w) out.push(i - w)
  if (i < w * (h - 1)) out.push(i + w)
  if (x > 0) out.push(i - 1)
  if (x < w - 1) out.push(i + 1)
  return out
}

/**
 * The group holding the stone at `i`, and its liberties.
 * @param {Board} b
 * @param {number} i
 * @returns {Group}
 */
export function groupAt(b, i) {
  const colour = b.cells[i] ?? 0
  const stones = [i]
  const seen = new Set([i])
  /** @type {Set<number>} */
  const liberties = new Set()
  // an array iterator reads the length at each step, so stones pushed meanwhile are visited
  for (const s of stones) {
    for (const j of neighbours(b.w, b.h, s)) {
      const c = b.cells[j]
      if (c === 0) liberties.add(j)
      else if (c === colour && !seen.has(j)) {
        seen.add(j)
        stones.push(j)
      }
    }
  }
  return { colour, stones, liberties: [...liberties] }
}

/**
 * Play `colour` at point `i`: the new board and the points captured, or null when the move is
 * illegal because the point is taken or the stone would have no liberty once its captures are
 * made (suicide is illegal under the AGA rules). Repeating a position is not checked here; the
 * search (solve.js) bars it.
 * @param {Board} b
 * @param {number} colour
 * @param {number} i
 * @returns {{ board: Board, captured: number[] } | null}
 */
export function place(b, colour, i) {
  if (i < 0 || i >= b.cells.length || b.cells[i] !== 0) return null
  const next = copy(b)
  next.cells[i] = colour
  /** @type {number[]} */
  const captured = []
  for (const j of neighbours(b.w, b.h, i)) {
    if (next.cells[j] === other(colour)) {
      const g = groupAt(next, j)
      if (g.liberties.length === 0) {
        for (const s of g.stones) {
          next.cells[s] = 0
          captured.push(s)
        }
      }
    }
  }
  if (groupAt(next, i).liberties.length === 0) return null
  return { board: next, captured }
}

/**
 * The area count: each side's stones plus every empty region that reaches only its colour, and the margin.
 * @param {Board} b
 * @returns {{ black: number, white: number, margin: number }}
 */
export function areaScore(b) {
  const { w, h, cells } = b
  let black = 0
  let white = 0
  const seen = new Uint8Array(cells.length)
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === BLACK) black++
    else if (cells[i] === WHITE) white++
    else if (!seen[i]) {
      const region = [i]
      seen[i] = 1
      let touchesB = false
      let touchesW = false
      for (const s of region) {
        for (const j of neighbours(w, h, s)) {
          if (cells[j] === BLACK) touchesB = true
          else if (cells[j] === WHITE) touchesW = true
          else if (!seen[j]) {
            seen[j] = 1
            region.push(j)
          }
        }
      }
      if (touchesB && !touchesW) black += region.length
      else if (touchesW && !touchesB) white += region.length
    }
  }
  return { black, white, margin: black - white }
}
