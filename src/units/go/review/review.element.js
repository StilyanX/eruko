// Hides: Go's Review page: what waits today, each row leading to the work list.
import { unit } from '../core/unit.logic.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './today.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [{ id: 'rv-due', title: 'Today', content: h('go-today', { '.to': `/${unit.slug}/work` }) }]
}

export class GoReview extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('go-review', GoReview)

export const TAG = 'go-review'
