// Hides: the page of arithmetic's end level: its sheets, one line at a time.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './end-sheet.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  sections: [{ id: 'ar-end', title: 'End level', content: h('arithmetic-end-sheet', null) }]
}

export class ArithmeticEndLevel extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('arithmetic-end-level', ArithmeticEndLevel)

export const TAG = 'arithmetic-end-level'
