// Hides: the page of algebra's end level: its papers, one at a time.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './end-paper.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  sections: [{ id: 'al-end', title: 'End level', content: h('algebra-end-paper', null) }]
}

export class AlgebraEndLevel extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('algebra-end-level', AlgebraEndLevel)

export const TAG = 'algebra-end-level'
