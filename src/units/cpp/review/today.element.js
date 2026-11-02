// Hides: what the C++ Review page counts as waiting today, in the order of the work list: the
// problems and the trace items due, then the steps with no date (the contest, the practice
// submission, mixed practice and the open kind's first run), each on its own row, and the day the
// rest comes back.
import { dayName } from '../../../kernel/days.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { linkTo } from '../../../parts/links.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { isTrace } from '../core/decode.logic.js'
import {
  contestStep,
  dueToday,
  firstKindsRetired,
  firstRunPart,
  laterDate,
  mixedDraw
} from '../core/next.logic.js'
import { cppStore, cppView } from '../core/screens.dom.js'

/**
 * Each kind of item that waits today, with how many.
 * @param {import('../core/decode.logic.js').Course} course
 * @param {import('../core/decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {[string, number][]}
 */
function waiting(course, record, day) {
  const due = dueToday(course, record, day)
  const traces = due.filter(isTrace).length
  const set = Boolean(record.runtime && record.server)
  return [
    ['Problems due', due.length - traces],
    ['Trace items due', traces],
    ['Contest', set && contestStep(course, record, day) ? 1 : 0],
    ['Practice submission', firstKindsRetired(course, record) && !record.practice ? 1 : 0],
    ['Mixed practice', set && mixedDraw(course, record) ? 1 : 0],
    ['First run', set && firstRunPart(course, record) ? 1 : 0]
  ]
}

/**
 * The table of what waits, each row with something waiting leading to `to`.
 * @param {[string, number][]} rows
 * @param {string} to
 */
const table = (rows, to) =>
  h(
    'table',
    { class: 'lrn-rv' },
    h(
      'thead',
      null,
      h('tr', null, h('th', { scope: 'col' }, 'Item'), h('th', { scope: 'col' }, 'Today'))
    ),
    h(
      'tbody',
      null,
      rows.map(([name, n]) =>
        h(
          'tr',
          { key: name, class: n ? undefined : 'lrn-rv-none' },
          h('th', { scope: 'row' }, n ? h('a', { href: linkTo(to) }, name) : name),
          h('td', null, n)
        )
      )
    )
  )

export class CppToday extends Screen {
  /** Where each row with something waiting leads. */
  to = ''

  setup() {
    this.watch(cppStore())
    this.watch(clock)
  }

  view() {
    const { course, record } = cppView()
    const day = today()
    const later = laterDate(record, day)
    return [
      table(waiting(course, record, day), this.to),
      later &&
        h(
          'p',
          { class: 'lrn-ss-note', key: 'later' },
          `The rest comes back from ${dayName(later)}.`
        )
    ]
  }
}
customElements.define('cpp-today', CppToday)
