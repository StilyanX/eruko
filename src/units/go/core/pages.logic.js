// Hides: how a line of play becomes pages: the board after each move, with the line's stones that
// are still on it numbered from 1, the new stone, and the stones that move captured. The rules
// engine plays the line once; a page is a position, so nothing is drawn over a captured stone and a
// capture back stands on its point. Pure functions, tested in pages.test.js.
import { BLACK, WHITE, byPoint, parseCoord, place } from './rules.logic.js'
import { boardOf, viewOf } from './diagram.logic.js'

/**
 * @typedef {Readonly<{ side: 'B' | 'W', at: string | null }>} LineMove A move of a line; `at` is null for a pass
 * @typedef {Readonly<{
 *   black: readonly string[],
 *   white: readonly string[],
 *   numbers: import('./diagram.logic.js').Numbers,
 *   side: 'B' | 'W' | null,
 *   played: string | null,
 *   captured: readonly string[],
 *   again: string | null
 * }>} Page The board after a move: every stone by colour, the numbers of the line's stones still
 * on it, the side that moved (null before the line), the point of the new stone (null for a pass
 * and before the line), the points that move captured, and, on a point where a stone stood and was
 * taken, which stood there first ("13 at 4.", "13 at C4.")
 */

/**
 * The pages of a line from a position: page 0 is the position before the line, page k the board
 * after move k. A pass leaves the stones as they are. The line ends at its first move that cannot
 * be played there (a point off the cut, a point with a stone, a stone with no liberty once its
 * captures are made), so `pages.length - 1` moves are played; the engine's line is the one input
 * that is not built by this program's own search.
 * @param {Pick<import('./diagram.logic.js').StoredDiagram, 'view' | 'black' | 'white'>} position
 * @param {readonly LineMove[]} moves
 * @returns {Page[]}
 */
export function pagesOf(position, moves) {
  const { board, index, name } = boardOf(position)
  const [ox, oy, w, h] = viewOf(position.view)
  /** What stood first on each point a move played, for "13 at 4": a number, or the point's name if a stone of the position stood there. @type {Record<string, number | string>} */
  const first = Object.fromEntries([...position.black, ...position.white].map(at => [at, at]))
  /** @type {Record<string, { n: number, black: boolean }>} */
  let numbers = {}
  /** @type {import('./rules.logic.js').Board} */
  let now = board
  /** @param {Page['side']} side @param {Page['played']} played @param {Page['captured']} captured @param {Page['again']} again @returns {Page} */
  const page = (side, played, captured, again) => {
    const cells = [...now.cells.keys()].filter(i => now.cells[i])
    return {
      black: cells
        .filter(i => now.cells[i] === BLACK)
        .map(name)
        .sort(byPoint),
      white: cells
        .filter(i => now.cells[i] === WHITE)
        .map(name)
        .sort(byPoint),
      numbers,
      side,
      played,
      captured,
      again
    }
  }
  const pages = [page(null, null, [], null)]
  for (const [i, move] of moves.entries()) {
    if (move.at === null) {
      pages.push(page(move.side, null, [], null))
      continue
    }
    const p = parseCoord(move.at)
    if (!p || p[0] < ox || p[0] >= ox + w || p[1] < oy || p[1] >= oy + h) break
    const placed = place(now, move.side === 'B' ? BLACK : WHITE, index(move.at))
    if (!placed) break
    const n = i + 1
    const taken = placed.captured.map(name).sort(byPoint)
    const was = first[move.at]
    first[move.at] ??= n
    numbers = {
      ...Object.fromEntries(Object.entries(numbers).filter(([at]) => !taken.includes(at))),
      [move.at]: { n, black: move.side === 'B' }
    }
    now = placed.board
    pages.push(page(move.side, move.at, taken, was === undefined ? null : `${n} at ${was}.`))
  }
  return pages
}

const SIDE = { B: 'Black', W: 'White' }

/**
 * The one line that says a page, as a screen reader hears it: "3 of 9: Black C4. White D3 is
 * captured."; the page before the line: "Before the line. Black plays first."
 * @param {readonly Page[]} pages
 * @param {number} k
 * @returns {string}
 */
export function pageLine(pages, k) {
  const page = pages[k]
  if (!page?.side) {
    const first = pages[1]?.side
    return first ? `Before the line. ${SIDE[first]} plays first.` : 'Before the line.'
  }
  const taken = page.captured.length
  return [
    `${k} of ${pages.length - 1}:`,
    `${SIDE[page.side]} ${page.played ?? 'passes'}.`,
    taken &&
      `${SIDE[page.side === 'B' ? 'W' : 'B']} ${page.captured.join(', ')} ${taken === 1 ? 'is' : 'are'} captured.`,
    page.again
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * Who plays after a page, as a diagram's text names the side to move; nothing on the last page.
 * @param {readonly Page[]} pages
 * @param {number} k
 */
export function playsAfter(pages, k) {
  const next = pages[k + 1]?.side
  return next ? `${SIDE[next]} plays ${k === 0 ? 'first' : 'next'}.` : undefined
}
