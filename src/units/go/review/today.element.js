// Hides: what the Go Review page counts as waiting today: the Review page's table, what waits
// today in the order of the work list, each kind of item on its own row, and the day the rest
// comes back; then the engine's pass, the games it would not read, and the rated games counted
// toward the next reading. The engine's pass and the problems from the learner's games run behind
// it, as behind every Go page.
import { count as counted, dayName } from '../../../kernel/days.logic.js'
import { isRulesItem } from '../core/decode.logic.js'
import { ratedCount } from '../core/game.logic.js'
import { dueToday, freshToday, gameToday, restOf, toReview } from '../core/next.logic.js'
import { EVERY_GAMES } from '../core/readings.logic.js'
import { passAt, passDone } from '../core/review.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { linkTo } from '../../../parts/links.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { Background, afterRedraw } from '../core/background.dom.js'
import { goStore, goView, passLine } from '../core/screens.dom.js'

/**
 * Each kind of item that waits today, with how many.
 * @param {import('../core/own.logic.js').Course} course
 * @param {import('../core/decode.logic.js').GoRecord} record
 * @param {string} day
 * @returns {[string, number][]}
 */
function waiting(course, record, day) {
  const due = dueToday(record, day)
  const problems = due.filter(id => !isRulesItem(id)).length
  const review = record.games
    .filter(g => g.list && !g.reviewed)
    .reduce((n, g) => n + (g.list ?? []).filter(x => !x.typed).length, 0)
  const game = gameToday(course, record, day)
  return [
    ['Problems due', problems],
    ['Rules items due', due.length - problems],
    ['Review positions', toReview(record) ? review : 0],
    [game?.practice ? 'Practice game' : 'Rated game', game ? 1 : 0],
    ['New problems and rules items', freshToday(course, record, day)]
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
    h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Item'), h('th', { scope: 'col' }, 'Today'))),
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

/**
 * The games the engine has still to read, and those it would not read.
 * @param {import('../core/decode.logic.js').GoRecord} record
 */
function games(record) {
  const pending = record.games.filter(g => !g.unread && !passDone(g)).length
  const unread = record.games.filter(g => g.unread).length
  return [
    pending > (record.engine && passAt(record) ? 1 : 0) &&
      h('p', { class: 'lrn-ss-note', key: 'pending' }, counted(pending, 'game waits', 'games wait'), ' for the engine.'),
    unread > 0 &&
      h(
        'p',
        { class: 'lrn-ss-note', key: 'unread' },
        'The engine would not read ',
        counted(unread, 'game', 'games'),
        ', and review leaves',
        ' ',
        unread === 1 ? 'it' : 'them',
        ' out.'
      )
  ]
}

export class GoToday extends Screen {
  /** Where each row with something waiting leads. */
  to = ''
  #bg = new Background(() => this.update())
  #sync = afterRedraw(this, () => this.#bg.sync())

  setup() {
    this.watch(goStore())
    this.watch(clock)
    this.onLeave(() => this.#bg.stop())
  }

  connectedCallback() {
    super.connectedCallback()
    this.#sync()
  }

  update() {
    super.update()
    this.#sync()
  }

  view() {
    const { record, course } = goView()
    const day = today()
    const { later } = restOf(record, day)
    const rated = ratedCount(record)
    const [pending, unread] = games(record)
    return [
      table(waiting(course, record, day), this.to),
      later && h('p', { class: 'lrn-ss-note', key: 'later' }, 'The rest comes back from ', dayName(later), '.'),
      pending,
      passLine(record, this.#bg.stalled),
      unread,
      // rated games are counted from the first one: until then the game of a session is practice
      record.server &&
        record.start.counted &&
        h(
          'p',
          { class: 'lrn-ss-note', key: 'counted' },
          'Rated games counted: ',
          rated,
          '. The next reading comes at',
          ' ',
          (Math.floor(rated / EVERY_GAMES) + 1) * EVERY_GAMES,
          '.'
        )
    ]
  }
}
customElements.define('go-today', GoToday)
