// Hides: the order a lesson's proofs are read in: one page each, and only the first proof not yet
// read opens its reading. Its moves go to the unit's `send`.
import './pages.element.js'
import { isRead } from '../kernel/proofs.logic.js'
import { noProofsSend, proofsOf } from './maths-steps.dom.js'
import { studyStore } from './study.dom.js'
import { Screen, h } from './view.dom.js'
import './proof-reader.element.js'

export class AeProofs extends Screen {
  /** @type {Readonly<{ proofs: readonly import('../kernel/proofs-decode.logic.js').Proof[] }>} */
  topic = { proofs: [] }
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  /** @type {import('./maths-steps.dom.js').ProofsSend} */
  send = noProofsSend
  #study = studyStore()

  setup() {
    this.watch(this.#study)
  }

  view() {
    const topic = this.topic
    const read = proofsOf(this.#study).proofs ?? {}
    const firstUnread = topic.proofs.findIndex(p => !isRead(read[p.id]))
    return h('ae-pages', {
      '.noun': 'Proof',
      '.store': 'proofs',
      '.items': topic.proofs,
      '.send': this.send,
      '.render': (
        /** @type {import('../kernel/proofs-decode.logic.js').Proof} */ p,
        /** @type {number} */ n,
        /** @type {{ heading: string }} */ page
      ) =>
        h('ae-proof-reader', {
          key: p.id,
          '.proof': p,
          '.open': n === firstUnread,
          '.figures': this.figures,
          '.heading': page.heading,
          '.send': this.send
        })
    })
  }
}
customElements.define('ae-proofs', AeProofs)
