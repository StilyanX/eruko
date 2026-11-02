// Hides: Arithmetic's Review page: what comes back today, from the unit's dated list.
import { unit } from '../core/unit.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { datedRecords, datedSections, watchDated } from '../../../parts/dated.dom.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'

export class ArithmeticReview extends Screen {
  slug = ''

  setup() {
    watchDated(this)
    this.watch(clock)
  }

  view() {
    return h('ae-study-page', {
      '.slug': this.slug,
      '.config': {
        named: true,
        sections: datedSections(unit.dated(datedRecords(), today()), this.slug, today())
      }
    })
  }
}
customElements.define('arithmetic-review', ArithmeticReview)

export const TAG = 'arithmetic-review'
