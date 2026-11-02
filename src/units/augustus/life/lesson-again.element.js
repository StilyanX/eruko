// Hides: a lesson done, read again from its row on the unit page (?lesson=<n>): its screens in
// order, with the answer and the entry at the outcome. The screen in view is kept in the record
// (`reread`), so a reload lands on it. A lesson not yet done says what opens it and links the page
// where it is reached, since nothing ahead of the decision is read.
import { lifeId } from '../core/decode.logic.js'
import { forecastOf } from '../core/lesson.logic.js'
import { record, send } from '../core/session.dom.js'
import { unit } from '../core/unit.logic.js'
import { linkTo } from '../../../parts/links.dom.js'
import { h } from '../../../parts/view.dom.js'
import { step, turn } from '../../../parts/study.dom.js'
import { LifeScreen, answerView, lifeOf, screenView } from '../core/screens.dom.js'

export class AugustusLessonAgain extends LifeScreen {
  /** The life's id. */
  life = lifeId('')
  /** The lesson's index in the life. */
  n = 0
  head = 'p.lrn-bio-q[tabindex], p.lrn-bio-date'

  view() {
    const s = record()
    const life = lifeOf(this.life)
    const n = this.n
    const lesson = life.lessons[n]
    if (!lesson || (s.lives[this.life]?.lastLesson ?? -1) < n)
      return h(
        'p',
        null,
        'This lesson opens once you finish ',
        h('a', { href: linkTo(`/${unit.slug}/life`) }, 'the lessons before it'),
        '.'
      )
    const screens = [...lesson.situation, ...lesson.outcome]
    const kept = s.reread
    const at =
      kept?.life === this.life && kept.lesson === n ? Math.min(kept.screen, screens.length - 1) : 0
    const screen = screens[at]
    if (!screen) return null
    return step([
      lesson.question &&
        at === lesson.situation.length &&
        answerView(lesson, forecastOf(s, lesson.id), s),
      screenView(screen, life.born),
      turn({
        label: 'Screens',
        primary: true,
        at,
        count: screens.length,
        onTurn: k => {
          send({ t: 'reread', life: this.life, lesson: n, screen: k })
          this.focusHead()
        }
      })
    ])
  }
}
customElements.define('augustus-lesson-again', AugustusLessonAgain)
