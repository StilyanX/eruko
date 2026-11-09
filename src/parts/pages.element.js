// Hides: how a run of items is turned inside its section. One item at a time, turned with Previous
// and Next, so a run of items is never scrolled through. The item in view is saved in the unit's
// record for each section (`store`), so a return lands on it. Every item stays drawn, hidden, so
// its state survives a turn. A turn moves focus to the new item's heading. A link to one item
// (?item=<its id>, from the Review page) opens the run on that item. Wide maths is marked after
// each draw, on a turn, and once the page is ready.
import { EVENTS } from './events.dom.js'
import { noSend, practiceOf } from './maths-steps.dom.js'
import { StepScreen, markWide, pathNow, studyStore, turn } from './study.dom.js'
import { h } from './view.dom.js'

/**
 * Whether an item of a run is the one named by its id.
 * @param {unknown} item
 * @param {string} id
 */
const named = (item, id) =>
  typeof item === 'object' && item !== null && 'id' in item && item.id === id

export class AePages extends StepScreen {
  noun = ''
  /** The pager's name, where it is not the noun's ("Idea pages"). */
  label = ''
  /** The name the item in view is kept under, with the page's path. */
  store = ''
  /** @type {readonly unknown[]} */
  items = []
  /** Each item is finished once in view (a run read in order), so Next is the primary, which Enter presses. */
  primary = false
  /** Draws one item, under the heading it is given. @type {(item: unknown, n: number, page: { heading: string }) => import('./view.dom.js').Child} */
  render = () => null
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  #study = studyStore()

  setup() {
    this.watch(this.#study)
    const mark = () => markWide(this)
    addEventListener(EVENTS.pageReady, mark)
    this.onLeave(() => removeEventListener(EVENTS.pageReady, mark))
    this.reread()
  }

  /** The record's key for this run's item in view. */
  #key() {
    return `${pathNow()}#${this.store}`
  }

  /** Read the address again: a link to one item opens the run on it. */
  reread() {
    const asked = new URL(location.href).searchParams.get('item')
    const want = asked ? this.items.findIndex(i => named(i, asked)) : -1
    if (want >= 0) this.send({ t: 'turn', key: this.#key(), at: want })
  }

  /** @param {number} n */
  #turn(n) {
    this.send({ t: 'turn', key: this.#key(), at: n })
    requestAnimationFrame(() => {
      const item = this.firstElementChild?.children[n]
      const head = item?.querySelector('h3')
      if (head instanceof HTMLElement) head.focus()
      markWide(item)
    })
  }

  view() {
    const items = this.items
    const total = items.length
    const at = Math.min(practiceOf(this.#study).pages?.[this.#key()] ?? 0, total - 1)
    return h(
      'div',
      null,
      items.map((item, n) =>
        h(
          'div',
          { key: n, hidden: n !== at },
          this.render(item, n, { heading: total > 1 ? `${this.noun} ${n + 1} of ${total}` : this.noun })
        )
      ),
      total > 1 &&
        turn({
          label: this.label || `${this.noun} pages`,
          at,
          count: total,
          primary: this.primary,
          onTurn: n => this.#turn(n)
        })
    )
  }
}
customElements.define('ae-pages', AePages)
