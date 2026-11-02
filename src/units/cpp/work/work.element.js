// Hides: the Work list page: one section, the work list, which shows the Contest and Reading
// screens among its items, as Go's game shows inside its own.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './work-list.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  sections: [{ id: 'cpp-work', title: 'Work list', content: h('cpp-work-list', null) }]
}

export class CppWork extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('cpp-work', CppWork)

export const TAG = 'cpp-work'
