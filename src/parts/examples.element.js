// Hides: a topic's worked examples, one page each, after the try-first problem: the method comes
// after the attempt, so the part opens once that problem is tried. A topic with no method pages its
// idea checks, numbered among its worked examples where it has a method. `worked` holds the unit's
// own fields for the step screens.
import './pages.element.js'
import './worked-kind.element.js'
import './idea-kind.element.js'
import { topicSlug } from '../kernel/maths-decode.logic.js'
import { noSend, practiceOf } from './maths-steps.dom.js'
import { hashTo, studyStore } from './study.dom.js'
import { Screen, h } from './view.dom.js'

/**
 * A record's fields as the props that set them on an element.
 * @param {Readonly<Record<string, unknown>>} fields
 */
const props = fields => Object.fromEntries(Object.entries(fields).map(([k, v]) => [`.${k}`, v]))

export class AeExamples extends Screen {
  /** @type {import('../kernel/maths-decode.logic.js').MathsTopic} */
  topic = { slug: topicSlug(''), kinds: [] }
  /** @type {readonly import('../kernel/maths-decode.logic.js').BankProblem[]} */
  bank = []
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  /** The id of the try-first problem's section. */
  tryId = ''
  /** The unit's own fields for each worked example (ae-worked-kind), `setAnswer`, `setForm`… @type {Readonly<Record<string, unknown>>} */
  worked = {}
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  #study = studyStore()

  setup() {
    this.watch(this.#study)
  }

  /**
   * One kind's page: its worked example, or its idea check.
   * @param {import('../kernel/maths-decode.logic.js').Kind} k
   * @param {string} heading
   */
  #kind(k, heading) {
    return k.forms.length
      ? h('ae-worked-kind', {
          key: k.id,
          ...props(this.worked),
          '.kind': k,
          '.bank': this.bank,
          '.figures': this.figures,
          '.heading': heading,
          '.send': this.send
        })
      : // A topic with a method numbers its idea checks among its worked examples.
        h('ae-idea-kind', {
          key: k.id,
          '.kind': k,
          '.heading': heading.replace('Worked example', 'Idea check'),
          '.send': this.send
        })
  }

  view() {
    const topic = this.topic
    if (topic.bare && !practiceOf(this.#study).gate?.[topic.slug]?.tried)
      return h(
        'p',
        { class: 'lrn-ss-note' },
        'This section opens once you try ',
        h('a', { href: hashTo(this.tryId) }, 'the problem at the top of the page'),
        '.'
      )
    const method = topic.kinds.some(k => k.forms.length)
    return h('ae-pages', {
      '.noun': method ? 'Worked example' : 'Idea check',
      '.store': 'examples',
      '.items': topic.kinds,
      '.send': this.send,
      '.render': (
        /** @type {import('../kernel/maths-decode.logic.js').Kind} */ k,
        /** @type {number} */ _n,
        /** @type {{ heading: string }} */ page
      ) => this.#kind(k, page.heading)
    })
  }
}
customElements.define('ae-examples', AeExamples)
