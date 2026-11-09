// Hides: the try-first problem, before step 1. The learner tries it on paper, then shows the answer
// and marks it, or presses I am stuck; the topic's method opens after the attempt, and the day it
// was tried is kept.
import { today } from './clock.dom.js'
import { dayName } from '../kernel/days.logic.js'
import { topicSlug } from '../kernel/maths-decode.logic.js'
import { answerBox, figure, lines, rich } from './maths-screens.dom.js'
import { noSend, practiceOf, sayCorrected } from './maths-steps.dom.js'
import { StepScreen, step, studyStore, verdict } from './study.dom.js'
import { h } from './view.dom.js'

export class AeBareProblem extends StepScreen {
  /** The topic's slug. */
  slug = topicSlug('')
  /** @type {import('../kernel/maths-decode.logic.js').Bare | null} */
  bare = null
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  /** @type {((p: import('../kernel/maths-decode.logic.js').PaperProblem) => import('./view.dom.js').Child) | undefined} */
  setAnswer = undefined
  /** @type {((words: string) => string) | undefined} */
  setForm = undefined
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  /** The answer shown. */
  open = false
  /** The mark just given, until the page is left. @type {{ right: boolean } | null} */
  result = null
  #study = studyStore()

  setup() {
    this.watch(this.#study)
  }

  /** @param {boolean} right */
  #done(right) {
    this.result = { right }
    sayCorrected(this.send({ t: 'tried', topic: this.slug, right, day: today() }), this.bare?.answer)
    this.focusSoon('p')
    this.update()
  }

  view() {
    const bare = this.bare
    if (!bare) return null
    const tried = practiceOf(this.#study).gate?.[this.slug]?.tried
    return step([
      h('p', { tabindex: '-1' }, rich(bare.prompt)),
      figure(bare.figure, this.figures),
      !tried
        ? [
            h('p', { key: 'try', class: 'lrn-ss-note' }, 'Try it on paper before you see the method.'),
            answerBox({
              problem: bare,
              open: this.open,
              onOpen: () => {
                this.open = true
                this.update()
              },
              onDone: right => this.#done(right),
              setAnswer: this.setAnswer,
              setForm: this.setForm
            })
          ]
        : [
            this.result !== null && verdict(this.result.right),
            lines({ lines: bare.solution, figures: this.figures, key: 'solution' }),
            h(
              'p',
              { key: 'tried', class: 'lrn-ss-note' },
              'You tried this on ',
              dayName(tried),
              '.'
            )
          ]
    ])
  }
}
customElements.define('ae-bare-problem', AeBareProblem)
