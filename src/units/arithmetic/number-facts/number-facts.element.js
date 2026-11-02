// Hides: the page of the number facts, which both maths units share.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './fact-drill.element.js'

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  sections: [{ id: 'ar-facts', title: 'Number facts', content: h('arithmetic-fact-drill', null) }]
}

export class ArithmeticNumberFacts extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('arithmetic-number-facts', ArithmeticNumberFacts)

export const TAG = 'arithmetic-number-facts'
