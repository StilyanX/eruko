// Hides: one lesson from its first screen to the record: the situation read screen by screen, the
// question and the forecast, the outcome, the setbacks, the check of the claims, and the record
// written. Where the learner stands, and all that is typed, is kept in the record (`position`,
// lesson.logic.js), so a reload lands on the same screen with nothing lost.
import { forecastOf, positionIn } from '../core/lesson.logic.js'
import { lifeId } from '../core/decode.logic.js'
import { record, send } from '../core/session.dom.js'
import { dateLine } from '../core/next.logic.js'
import { say } from '../../../parts/say.dom.js'
import { choice, step, turn } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import './check.element.js'
import './question.element.js'
import './record-entry.element.js'
import './struggle.element.js'
import { LifeScreen, answerView, lifeOf, screenView } from '../core/screens.dom.js'

/** The steps a sub-screen draws, by its tag. */
const SCREENS = {
  question: 'augustus-question',
  struggle: 'augustus-struggle',
  check: 'augustus-check',
  record: 'augustus-record-entry'
}

export class AugustusLesson extends LifeScreen {
  /** The life's id. */
  life = lifeId('')
  /** The lesson's index in the life. */
  n = 0
  // The heading of each step: the outcome's answer, a screen's date line, or the step's title,
  // whichever comes first.
  head = 'h3, p.lrn-bio-q[tabindex]'

  /** The lesson this screen shows. */
  get at() {
    return { life: this.life, lesson: this.n }
  }

  /**
   * Turn to a screen of the situation or the outcome, whose heading takes focus while the status
   * says where it is, or on to the next step, where focus goes as after any press.
   * @param {'situation' | 'outcome' | 'question' | 'struggle'} to
   * @param {number} screen
   */
  #go(to, screen) {
    send({ t: 'go', ...this.at, step: to, screen })
    if (to === 'situation' || to === 'outcome') this.#turned(to, screen)
  }

  /**
   * A screen turned to: its heading takes focus, and the status says where it is.
   * @param {'situation' | 'outcome'} to
   * @param {number} screen
   */
  #turned(to, screen) {
    this.focusHead()
    const life = lifeOf(this.life)
    const screens = life.lessons[this.n]?.[to] ?? []
    const shown = screens[screen]
    if (shown) say(`Screen ${screen + 1} of ${screens.length}. ${dateLine(shown.date, life.born)}`)
  }

  /**
   * A screen of the situation or the outcome, with the answer at the outcome's first.
   * @param {import('../core/decode.logic.js').Position} pos
   */
  #reading(pos) {
    const life = lifeOf(this.life)
    const lesson = life.lessons[this.n]
    if (!lesson) return null
    const s = record()
    const forecast = forecastOf(s, lesson.id)
    const outcome = pos.step === 'outcome'
    const screens = outcome ? lesson.outcome : lesson.situation
    const at = Math.min(pos.screen, screens.length - 1)
    const shown = screens[at]
    if (!shown) return null
    // Forward from the last situation screen: the question, or, once the forecast is locked, the outcome.
    const next = () =>
      outcome || !lesson.question
        ? this.#go('struggle', 0)
        : this.#go(forecast ? 'outcome' : 'question', 0)
    // Back from the first outcome screen: the situation, read again; the forecast stays locked.
    const back = outcome && at === 0
    return step([
      back && answerView(lesson, forecast, s),
      screenView(shown, life.born, `${pos.step}-${at}`),
      turn({
        label: 'Screens',
        primary: true,
        at: back ? 1 : at,
        count: back ? screens.length + 1 : screens.length,
        onTurn: k =>
          back && k === 0
            ? this.#go('situation', lesson.situation.length - 1)
            : this.#go(outcome ? 'outcome' : 'situation', back ? k - 1 : k),
        last: choice({ key: 'next', primary: true, label: 'Next', onPress: next })
      })
    ])
  }

  view() {
    const pos = positionIn(record(), this.at)
    if (pos.step === 'situation' || pos.step === 'outcome') return this.#reading(pos)
    const life = lifeOf(this.life)
    return h(SCREENS[pos.step], {
      key: `${this.life}-${this.n}`,
      '.life': life,
      '.n': this.n,
      // Back from the question to the situation's last screen is a turn.
      'on:turned': () => this.#turned('situation', (life.lessons[this.n]?.situation.length ?? 1) - 1)
    })
  }
}
customElements.define('augustus-lesson', AugustusLesson)
