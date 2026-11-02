// Hides: what every screen of Augustus shares: a screen that redraws on each change to the
// record and at the turn of the study day, and takes focus on its heading when an item is turned;
// a field's typed text; and the pieces drawn on more than one screen (a screen of the account, the
// answer at the outcome).
import { assert } from '../../../kernel/invariant.logic.js'
import { clock } from '../../../parts/clock.dom.js'
import { StepScreen } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { findLife } from './lives.logic.js'
import { dateLine, shown } from './next.logic.js'
import { livesStore } from './session.dom.js'

/**
 * A life of the course by its id: every life a screen is given is one the work list found there.
 * @param {string} id
 */
export function lifeOf(id) {
  const life = findLife(id)
  assert(life, `the course holds the life ${id}`)
  return life
}

/** A screen of Augustus: it redraws on each change to the record and at the turn of the day. */
export class LifeScreen extends StepScreen {
  /** The selector of the screen's heading, which takes focus when an item is turned. */
  head = 'h3'

  setup() {
    this.watch(livesStore())
    this.watch(clock)
  }

  /** Put focus on the heading once the control that held it is gone. */
  focusHead() {
    this.focusSoon(this.head)
  }
}

/**
 * A field's text, from its input event.
 * @param {Event} e
 */
export const typed = e =>
  e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement
    ? e.target.value
    : ''

/**
 * Whether a box is ticked, from its change event.
 * @param {Event} e
 */
export const ticked = e => e.target instanceof HTMLInputElement && e.target.checked

/**
 * One screen of the account: its date line and its text.
 * @param {import('./decode.logic.js').ScreenData} screen
 * @param {import('./decode.logic.js').HistDate} born
 */
export const screenView = (screen, born) => [
  h('p', { class: 'lrn-bio-date', tabindex: '-1' }, dateLine(screen.date, born)),
  h('p', { class: 'lrn-bio-text' }, screen.sentences.map(s => s.text).join(' '))
]

/**
 * The outcome opens with the answer, then the entry and its score side by side. The first score
 * you see adds the line on what 0, 2 and 0.50 mean.
 * @param {import('./decode.logic.js').Lesson} lesson
 * @param {import('./decode.logic.js').Forecast | undefined} forecast
 * @param {import('./decode.logic.js').LivesRecord} record
 */
export function answerView(lesson, forecast, record) {
  const question = lesson.question
  assert(question, `lesson ${lesson.id} has a question to answer`)
  const yes = question.answer === 1
  const first = record.items.find(i => i.kind === 'forecast' && !i.known)?.id === forecast?.id
  return [
    h('p', { class: 'lrn-bio-q', tabindex: '-1' }, question.text),
    h('p', null, yes ? 'Yes.' : 'No.'),
    forecast &&
      !forecast.known && [
        h(
          'div',
          { class: 'lrn-bio-cols lrn-bio-claim' },
          h(
            'div',
            null,
            h('p', { class: 'lrn-ss-note' }, 'Your entry'),
            forecast.move && h('p', null, forecast.move),
            h('p', null, 'Your chance of yes: ', forecast.p ?? 0, '%.'),
            h('p', null, 'Your reason: ', forecast.reason)
          ),
          h(
            'div',
            null,
            h('p', { class: 'lrn-ss-note' }, 'Your score'),
            h('p', null, shown(forecast.score ?? 0))
          )
        ),
        first &&
          h(
            'p',
            { class: 'lrn-ss-note' },
            '0 is best, 2 is worst, and 0.50 is the score of always saying 50%.'
          )
      ]
  ]
}
