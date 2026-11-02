// Hides: what Arithmetic needs before the first session, at the learner's desk.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'

const needs = [
  h('p', null, 'Have these at your desk before your first session.'),
  h(
    'ul',
    null,
    h('li', null, 'Plain white A4 paper, 80 g/m², in loose sheets. Write on one side.'),
    h(
      'li',
      null,
      'One pen with permanent black ink. Do not use a gel pen or an erasable pen. Cross a mistake through. Never erase it.'
    ),
    h(
      'li',
      null,
      'One scientific calculator with no graphing and no computer algebra. Each problem says whether you may use it. No problem allows it before the number facts pass.'
    )
  )
]

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [{ id: 'ma-needs', title: 'What you need', content: needs }]
}

export class ArithmeticStart extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('arithmetic-start', ArithmeticStart)

export const TAG = 'arithmetic-start'
