// Hides: what Algebra needs before the first session, at the learner's desk, and how much of the
// course is written.
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { TOPICS } from '../core/course.gen.js'
import { builtLine } from '../core/entry.logic.js'

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
    h('li', null, 'No calculator. Every answer in this unit is exact.')
  ),
  h(
    'p',
    null,
    "Number facts is Arithmetic's page and record, so a sheet you pass once counts here too."
  )
]

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [
    { id: 'al-needs', title: 'What you need', content: needs },
    { id: 'al-built', title: 'What is written', content: [h('p', null, builtLine(TOPICS.length))] }
  ]
}

export class AlgebraStart extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('algebra-start', AlgebraStart)

export const TAG = 'algebra-start'
