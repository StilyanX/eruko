// Hides: the C++ Review page: what waits today, each row with something waiting leading to the
// work list.
import { UNIT } from '../core/entry.logic.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './today.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [
    { id: 'rv-due', title: 'Today', content: h('cpp-today', { '.to': `/${UNIT.slug}/work` }) }
  ]
}

export class CppReview extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('cpp-review', CppReview)

export const TAG = 'cpp-review'
