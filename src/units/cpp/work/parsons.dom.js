// Hides: the Parsons board ("A Self-Study System", Programming, The material: Parsons problem):
// the program as it stands, its frame in place and each line put in its place so far, the
// blanks of a placed line as fields; under it the lines left to place, each one press that puts
// it in the next empty place. A placed line is taken out with one press, and the lines after it
// move up. C++ does not set its blocks by indentation, so every line keeps its own.
import { h } from '../../../parts/view.dom.js'
import { label } from '../core/screens.dom.js'

/**
 * @typedef {{
 *   parsons: import('../core/parsons.logic.js').Parsons,
 *   order: readonly number[],
 *   fills: readonly string[],
 *   onPlace: (at: number) => void,
 *   onTake: (slot: number) => void,
 *   onFill: (blank: number, text: string) => void
 * }} Board
 */

/**
 * A blank as a field, named by its number in the problem.
 * @param {number} blank
 * @param {Board} b
 */
const blankField = (blank, b) =>
  h('input', {
    key: `b${blank}`,
    class: 'field cpp-blank',
    'aria-label': `Blank ${blank + 1}`,
    '.value': b.fills[blank] ?? '',
    autocomplete: 'off',
    autocapitalize: 'none',
    spellcheck: 'false',
    oninput: (/** @type {Event} */ e) => {
      if (e.target instanceof HTMLInputElement) b.onFill(blank, e.target.value)
    }
  })

/**
 * A line in its place: the press that takes it out, then its text with its blanks as fields.
 * @param {import('../core/parsons.logic.js').ParsonsLine} line
 * @param {number} slot
 * @param {number} at its place in the program
 * @param {Board} b
 */
const placed = (line, slot, at, b) =>
  h(
    'div',
    { class: 'cpp-placed', key: `p${line.at}` },
    h(
      'button',
      {
        type: 'button',
        class: 'btn',
        'aria-label': `Take out line ${at + 1}`,
        onclick: () => b.onTake(slot)
      },
      'Take out'
    ),
    h(
      'code',
      { class: 'cpp-line' },
      line.pieces.map(p => (typeof p === 'string' ? p : blankField(p.blank, b)))
    )
  )

/**
 * A line left to place, its blanks as gaps, put in the next empty place by one press.
 * @param {import('../core/parsons.logic.js').ParsonsLine} line
 * @param {Board} b
 */
const toPlace = (line, b) =>
  h(
    'button',
    {
      type: 'button',
      class: 'btn cpp-pool-line',
      key: `q${line.at}`,
      onclick: () => b.onPlace(line.at)
    },
    h('code', null, line.pieces.map(p => (typeof p === 'string' ? p : '___')).join(''))
  )

/**
 * The board: the program with every place in it, then the lines left to place.
 * @param {Board} b
 */
export function parsonsBoard(b) {
  const { parsons, order } = b
  const lines = new Map(parsons.lines.map(l => [l.at, l]))
  const frame = new Map(parsons.frame.map(f => [f.at, f.text]))
  let slot = 0
  const rows = Array.from({ length: parsons.length }, (_, at) => {
    const text = frame.get(at)
    if (text !== undefined) return h('code', { class: 'cpp-line', key: `f${at}` }, text)
    const k = slot++
    const line = lines.get(order[k] ?? -1)
    return line
      ? placed(line, k, at, b)
      : h(
          'code',
          { class: 'cpp-line cpp-slot', key: `e${k}` },
          h('span', { class: 'sr-only' }, 'An empty place')
        )
  })
  const left = parsons.lines.filter(l => !order.includes(l.at))
  return [
    label('The program'),
    h(
      'div',
      { class: 'cpp-code cpp-board cpp-scroll', 'data-name': 'The program', key: 'board' },
      rows
    ),
    left.length > 0 && [
      label('The lines to place'),
      h(
        'div',
        { class: 'cpp-pool', key: 'pool' },
        left.map(l => toPlace(l, b))
      )
    ]
  ]
}
