// Hides: how a line of play is shown as pages: the board after each move, one page at a time,
// moved by Previous, Next move and Last move or by the Left and Right arrow keys while the board
// has focus; the page's move said in one polite line; the whole line written beside the board as a
// numbered list. Nothing is placed by a timer or moves: a page is a still board. The page is view
// state and dies with the screen; the screen that draws the element gives it a key of its own, so
// another line starts on its first page.
import { pageLine, pagesOf, playsAfter } from '../core/pages.logic.js'
import { choice } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { board } from '../core/board.dom.js'

export class GoLinePages extends Screen {
  /** The position before the line. @type {import('../core/diagram.logic.js').StoredDiagram | null} */
  position = null
  /** @type {readonly import('../core/pages.logic.js').LineMove[]} */
  moves = []
  /** The line's moves as the list beside the board writes them, one text a move. @type {readonly string[]} */
  lines = []
  /** The page in hand. */
  at = 0

  /**
   * @param {number} to the page asked for, held between the first and the last
   * @param {number} last
   */
  #turn(to, last) {
    const next = Math.max(0, Math.min(last, to))
    if (next === this.at) return
    this.at = next
    this.update()
    // after the redraw this update queued, the new stone is brought into view
    queueMicrotask(() => this.#reveal())
  }

  /** Scrolls the board's box, at once, only as far as the new stone needs to be inside its visible part. */
  #reveal() {
    const box = this.querySelector('.lrn-figure-scroll')
    const ring = box?.querySelector('.go-last')
    if (!box || !ring) return
    const b = box.getBoundingClientRect()
    const r = ring.getBoundingClientRect()
    // half a stone of room beside it, so the ring is not cut by the box's edge
    const room = r.width / 2
    if (r.left - room < b.left) box.scrollBy({ left: r.left - room - b.left, behavior: 'instant' })
    else if (r.right + room > b.right)
      box.scrollBy({ left: r.right + room - b.right, behavior: 'instant' })
  }

  /**
   * A key pressed on the board's box: Shift and an arrow scroll the box by a column's width, an arrow
   * alone turns the page.
   * @param {KeyboardEvent} e
   * @param {number} at the page in hand
   * @param {(to: number) => void} turn
   */
  #key(e, at, turn) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const way = e.key === 'ArrowLeft' ? -1 : 1
    if (e.shiftKey && e.currentTarget instanceof Element)
      e.currentTarget.scrollBy({ left: way * e.currentTarget.clientWidth, behavior: 'instant' })
    else turn(at + way)
  }

  view() {
    const { position, moves, lines } = this
    if (!position) return null
    const pages = pagesOf(position, moves)
    const last = pages.length - 1
    const at = Math.min(this.at, last)
    const page = pages[at]
    if (!page) return null
    /** @param {number} to */
    const turn = to => this.#turn(to, last)
    const notes = pages.flatMap(p => (p.again ? [p.again] : []))
    return [
      board({
        diagram: { size: position.size, view: position.view, black: page.black, white: page.white },
        numbers: page.numbers,
        last: page.played ?? undefined,
        plays: playsAfter(pages, at),
        keys: e => this.#key(e, at, turn)
      }),
      h('p', { key: 'now', class: 'lrn-ss-note', 'aria-live': 'polite' }, pageLine(pages, at)),
      h(
        'nav',
        { key: 'pager', class: 'lrn-ss-pager', 'aria-label': 'Pages of the line' },
        // Shown only where they go somewhere, as the shared turn() does: a locked end button would
        // stand there with its reason on every page.
        at > 0 && choice({ key: 'previous', label: 'Previous', onPress: () => turn(at - 1) }),
        at < last && [
          choice({ key: 'next', label: 'Next move', onPress: () => turn(at + 1) }),
          choice({ key: 'last', label: 'Last move', onPress: () => turn(last) })
        ]
      ),
      notes.length > 0 && h('p', { key: 'notes', class: 'lrn-ss-note' }, notes.join(' ')),
      h(
        'ol',
        { key: 'moves', class: 'go-line-list' },
        lines.map((text, i) =>
          h('li', { key: i, 'aria-current': i + 1 === at ? 'step' : undefined }, text)
        )
      )
    ]
  }
}
customElements.define('go-line-pages', GoLinePages)
