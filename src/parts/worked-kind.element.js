// Hides: step 1, a kind's worked example and its fading, form by form, until the last form is
// solved alone. The example is read line by line, each reason shown only after the learner has said
// why the step is allowed; then fresh problems with the last line, the last two, or every line
// hidden. Where the kind stands is kept in the record (`stage`), so a reload returns to it.
import { dayName } from '../kernel/days.logic.js'
import { InvariantError } from '../kernel/invariant.logic.js'
import { kindId } from '../kernel/maths-decode.logic.js'
import { placeOf } from '../kernel/practice.logic.js'
import { afterAnswer, hidden, kindFacts, stageProblem } from '../kernel/steps.logic.js'
import { clock, today } from './clock.dom.js'
import { SAY_WHY, answerBox, figure, lines, rich } from './maths-screens.dom.js'
import { heading, noSend, practiceOf, shownBy } from './maths-steps.dom.js'
import {
  StepScreen,
  actionsAs,
  choice,
  mark,
  whereIn,
  step,
  studyStore,
  verdict
} from './study.dom.js'
import { h } from './view.dom.js'
import { focusIn } from './study-page.element.js'

export class AeWorkedKind extends StepScreen {
  /** @type {import('../kernel/maths-decode.logic.js').Kind} */
  kind = { id: kindId(''), forms: [] }
  /** @type {readonly import('../kernel/maths-decode.logic.js').BankProblem[]} */
  bank = []
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  heading = ''
  /** @type {((p: import('../kernel/maths-decode.logic.js').PaperProblem) => import('./view.dom.js').Child) | undefined} */
  setAnswer = undefined
  /** @type {((words: string) => string) | undefined} */
  setForm = undefined
  /** @type {import('./maths-steps.dom.js').Written | undefined} */
  written = undefined
  /** A wrong answer's solution is kept shown in the record, so a reload returns to it. */
  inRecord = true
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  /** The reason of the line in hand is shown. */
  shownReason = false
  /** The line in hand was marked wrong: its reason is read again. */
  reread = false
  /** A wrong stage answer kept on the page. */
  wrongShown = false
  /** After a right one: the message about the next problem. */
  passed = ''
  /** The problem whose answer is shown. */
  openFor = ''
  #study = studyStore()

  setup() {
    this.watch(this.#study)
    this.watch(clock)
  }

  /** Draw, then put focus where the shared rule puts it: the control that held it is gone. */
  #focusButton() {
    this.afterDraw(() => focusIn(this))
  }

  /** A line of the example done: the next line, its reason hidden. */
  #nextLine() {
    this.send({ t: 'example-line', kind: kindFacts(this.kind, this.bank), day: today() })
    this.shownReason = false
    this.reread = false
    // Focus goes to the next line's Show the reason, or after the last to Next problem.
    this.#focusButton()
  }

  /**
   * A move that opens a new problem or form: the verdict it shows stays on the page.
   * @param {import('../kernel/maths-session.logic.js').MathsEvent} move
   */
  #moved(move) {
    this.passed = shownBy(this.send(move)) ?? ''
    this.wrongShown = false
    this.focusSoon('h3')
    this.update()
  }

  /** @param {boolean} right */
  #after(right) {
    const kind = kindFacts(this.kind, this.bank)
    this.#moved({ t: 'stage-answer', kind, inRecord: this.inRecord, right, day: today() })
  }

  // Kept in the record, a wrong answer cannot be taken back by a reload; kept on the page, it can.
  #wrong() {
    this.passed = ''
    if (this.inRecord) {
      this.send({ t: 'stage-wrong', kind: this.kind.id, day: today() })
      this.focusSoon('h3')
    } else {
      this.wrongShown = true
      this.update()
    }
  }

  /**
   * One line of the example in view: its step, its reason once said, and the moves on it.
   * @param {import('../kernel/maths-decode.logic.js').Form['example']['lines'][number]} l
   * @param {number} i
   * @param {import('../kernel/practice.logic.js').StagePlace} st
   * @param {Readonly<{ last: boolean, drawn: boolean }>} at
   */
  #exampleLine(l, i, st, { last, drawn }) {
    const inHand = i === st.line
    return h(
      'li',
      { key: i, class: 'lrn-ss-line' },
      h('span', { class: 'lrn-ss-text' }, rich(l.step)),
      (i < st.line || this.shownReason) &&
        h('span', { class: 'lrn-ss-reason' }, 'Reason: ', rich(l.reason)),
      inHand &&
        !this.shownReason && [
          h('span', { class: 'lrn-ss-reason', key: 'say' }, SAY_WHY),
          actionsAs(
            'show',
            choice({
              primary: true,
              label: 'Show the reason',
              onPress: () => {
                this.shownReason = true
                // The button is gone once the reason shows: focus goes to the mark's question.
                this.#focusButton()
              }
            })
          )
        ],
      inHand &&
        this.shownReason &&
        !this.reread &&
        mark({
          when: 'Right when what you said names the same definition, theorem or rule as the reason shown, in your own words.',
          onWrong: () => {
            this.reread = true
            this.#focusButton()
          },
          onRight: () => this.#nextLine()
        }),
      inHand &&
        this.reread && [
          verdict(false, 'Read the reason again.', 'reread'),
          actionsAs(
            'reread-next',
            choice({
              primary: true,
              label: last ? 'Done' : 'Next line',
              onPress: () => this.#nextLine()
            })
          )
        ],
      drawn && figure(l.figure, this.figures)
    )
  }

  /**
   * Stage 1: the example, line by line. The learner says why each step is allowed and why it
   * helps, in any mode (the app reads nothing), then shows the reason and marks what they said
   * against it. A wrong mark asks for the reason to be read again before the next line.
   * @param {import('../kernel/practice.logic.js').StagePlace} st
   * @param {import('../kernel/maths-decode.logic.js').Form} form
   * @param {import('./view.dom.js').Child} passed
   */
  #example(st, form, passed) {
    const kind = this.kind
    const all = form.example.lines
    const done = st.line >= all.length
    const inView = all.slice(0, Math.min(st.line + 1, all.length))
    // The figure as it stands after the last line in view that draws one; a line's figure waits
    // for its reason.
    let drawn = -1
    inView.forEach((l, i) => {
      if (l.figure && (i < st.line || this.shownReason)) drawn = i
    })
    return step(
      [
        heading(this.heading),
        passed,
        kind.forms.length > 1 && whereIn('Form', st.form + 1, kind.forms.length),
        h('p', null, rich(form.example.problem)),
        figure(form.example.figure, this.figures),
        h(
          'ol',
          { class: 'lrn-ss-lines' },
          inView.map((l, i) =>
            this.#exampleLine(l, i, st, { last: i === all.length - 1, drawn: i === drawn })
          )
        ),
        done &&
          actionsAs(
            'next-problem',
            choice({
              primary: true,
              label: 'Next problem, last line hidden',
              onPress: () =>
                this.#moved({
                  t: 'example-done',
                  kind: kindFacts(kind, this.bank),
                  inRecord: this.inRecord,
                  day: today()
                })
            })
          )
      ],
      { key: `example-${st.form}` }
    )
  }

  /**
   * The answer to a stage's problem: a unit's own way of answering, else its lines with the
   * hidden ones covered (one line when every line is hidden) and the answer box.
   * @param {import('../kernel/maths-decode.logic.js').PaperProblem} problem
   * @param {import('./maths-steps.dom.js').Hand} hand
   */
  #answer(problem, hand) {
    const { lines: all, hide = 0 } = hand
    return (
      this.written?.(problem, hand) ?? [
        hide < all.length
          ? lines({ lines: all, hide, figures: this.figures, key: 'covered' })
          : // Solved alone: one line, not a row of hidden lines whose count would give them away.
            h('p', { key: 'alone', class: 'lrn-ss-note' }, 'Write the full working on paper.'),
        answerBox({
          problem,
          open: hand.open,
          onOpen: hand.onOpen,
          onDone: right => (right ? this.#after(true) : this.#wrong()),
          setAnswer: this.setAnswer,
          setForm: this.setForm
        })
      ]
    )
  }

  /**
   * Stages 2 to 4: a fresh problem with the last line, the last two, or every line hidden.
   * @param {import('../kernel/practice.logic.js').StagePlace} st
   * @param {import('./view.dom.js').Child} passed
   */
  #stage(st, passed) {
    const kind = this.kind
    const problem = stageProblem(kind, st, this.bank)
    if (!problem) throw new InvariantError(`kind ${kind.id} has a problem for its stage`)
    const all = problem.lines ?? problem.solution ?? []
    const back = afterAnswer(st, false, kind.forms.length)
    const key = `${st.form}-${st.stage}-${st.problem}`
    const shown = this.inRecord ? Boolean(st.shown) : this.wrongShown
    /** @type {import('./maths-steps.dom.js').Hand} */
    const hand = {
      lines: all,
      hide: hidden(st.stage, all.length),
      figures: this.figures,
      open: this.openFor === key,
      onOpen: () => {
        this.openFor = key
        this.update()
      },
      onDone: right => this.#after(right),
      onStuck: () => this.#wrong()
    }
    // Keyed by its problem: a new problem is new nodes, never the last one's mathematics.
    return step(
      [
        heading(this.heading),
        passed,
        h('p', null, rich(problem.prompt)),
        figure(problem.figure, this.figures),
        shown
          ? [
              verdict(false, 'Read the solution.'),
              lines({ lines: all, figures: this.figures, key: 'solution' }),
              actionsAs(
                'next',
                choice({
                  primary: true,
                  label: [
                    'Next problem, ',
                    back.t === 'stage' && back.stage === 3 ? 'last two lines' : 'every line',
                    ' hidden'
                  ],
                  onPress: () => this.#after(false)
                })
              )
            ]
          : this.#answer(problem, hand)
      ],
      { key }
    )
  }

  view() {
    const kind = this.kind
    const retired = practiceOf(this.#study).retired?.[kind.id]
    if (retired)
      return step([
        heading(this.heading),
        h(
          'p',
          null,
          'You solved this kind alone on ',
          dayName(retired),
          '. Its problems now come in mixed practice.'
        )
      ])
    const st = placeOf(practiceOf(this.#study), kind.id)
    // Every unit keeps the verdict of the last move on the page, so a sighted learner sees it.
    const passed = this.passed ? verdict(true, this.passed, 'passed') : null
    if (st.stage === 1) {
      const form = kind.forms[st.form]
      if (!form) throw new InvariantError(`kind ${kind.id} has a form ${st.form}`)
      return this.#example(st, form, passed)
    }
    return this.#stage(st, passed)
  }
}
customElements.define('ae-worked-kind', AeWorkedKind)
