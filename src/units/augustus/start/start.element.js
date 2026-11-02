// Hides: what Augustus needs before the first session.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'

const needs = [
  h('p', null, 'Eruko holds the lessons and your record. You need no book and no other software.'),
  h(
    'ul',
    null,
    h('li', null, 'A keyboard, to type your forecasts, setbacks and claims.'),
    h('li', null, 'For telling the whole life: your voice, paper and pen, or the keyboard.')
  )
]

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [{ id: 'bio-needs', title: 'What you need', content: needs }]
}

export class AugustusStart extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('augustus-start', AugustusStart)

export const TAG = 'augustus-start'
