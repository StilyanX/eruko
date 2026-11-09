// Hides: when a lesson's statements to prove open: once every proof of the lesson is read. Then
// they are paged, one statement at a time, under how many proof methods still need a proved
// statement: one of each finishes the topic, and the rest are optional. Its moves go to the unit's
// `send`.
import { count } from '../kernel/days.logic.js'
import { isRead, methodsLeft } from '../kernel/proofs.logic.js'
import { noProofsSend, proofsOf } from './maths-steps.dom.js'
import './pages.element.js'
import { hashTo, studyStore } from './study.dom.js'
import { Screen, h } from './view.dom.js'
import './prove-statement.element.js'

export class AeStatements extends Screen {
  /** @type {Readonly<{ proofs: readonly Readonly<{ id: import('../kernel/proofs-decode.logic.js').ProofId }>[], prove: readonly import('../kernel/proofs-decode.logic.js').Statement[] }>} */
  topic = { proofs: [], prove: [] }
  /** @type {import('./maths-steps.dom.js').ProofsSend} */
  send = noProofsSend
  /** The id of the proofs' section, which the shut statements link. */
  proofsId = ''
  #study = studyStore()

  setup() {
    this.watch(this.#study)
  }

  view() {
    const topic = this.topic
    const record = proofsOf(this.#study)
    const unread = topic.proofs.filter(p => !isRead(record.proofs?.[p.id])).length
    if (unread)
      return h(
        'p',
        { class: 'lrn-ss-note' },
        'The statements open once you read ',
        h('a', { href: hashTo(this.proofsId) }, count(unread, 'more proof', 'more proofs')),
        '.'
      )
    const left = methodsLeft(topic.prove, record.proved)
    return [
      h(
        'p',
        { key: 'methods', class: 'lrn-ss-note' },
        left
          ? `Prove one statement of each method to finish the topic: ${count(left, 'method is', 'methods are')} left.`
          : 'Every method has a proved statement.'
      ),
      h('ae-pages', {
        '.noun': 'Statement',
        '.store': 'prove',
        '.items': topic.prove,
        '.send': this.send,
        '.render': (
          /** @type {import('../kernel/proofs-decode.logic.js').Statement} */ s,
          /** @type {number} */ _n,
          /** @type {{ heading: string }} */ page
        ) =>
          h('ae-prove-statement', {
            key: s.id,
            '.statement': s,
            '.prove': topic.prove,
            '.heading': page.heading,
            '.send': this.send
          })
      })
    ]
  }
}
customElements.define('ae-statements', AeStatements)
