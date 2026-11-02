// Hides: Augustus's Review page: what comes back today, from the unit's dated list. This page once
// put sample items into the record to show how it works; it removes them from any record that
// still holds them (session.logic.js, `drop-sample`) and leaves other records alone.
import { unit } from '../core/unit.logic.js'
import { record, send } from '../core/session.dom.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { datedRecords, datedSections, watchDated } from '../../../parts/dated.dom.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'

/** Remove the sample, if the record holds one. */
const clean = () => {
  if (record().sample) send({ t: 'drop-sample' })
}

export class AugustusReview extends Screen {
  slug = ''

  setup() {
    watchDated(this)
    this.watch(clock)
    clean()
  }

  update() {
    super.update()
    // A sample written into the record later (a restored backup) is removed as it arrives.
    queueMicrotask(() => {
      if (this.isConnected) clean()
    })
  }

  view() {
    return h('ae-study-page', {
      '.slug': this.slug,
      '.config': {
        named: true,
        sections: datedSections(unit.dated(datedRecords()), this.slug, today())
      }
    })
  }
}
customElements.define('augustus-review', AugustusReview)

export const TAG = 'augustus-review'
