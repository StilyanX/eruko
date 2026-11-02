// Hides: step 2, mixed practice, and its gate. `bank` is every problem of the course, and
// `order(bank, record, day)` the day's problems. `lost(record)` lists marked questions that lost
// marks; one joins the bank. `proof(problem, phase, { answer, show })` gives a problem of the
// unit's own kind its step, and `show(phase)` holds the screen on a phase through a reload. An
// answered problem, or a proof shown, is stored as { day, id, phase }, so a reload or a break
// returns to it.
import { FACTS_PART, allFactsPassed, decodeFacts } from '../kernel/facts.logic.js'
import { persistedStore } from '../record/store.js'
import { pageAt } from './page-index.dom.js'
import { count, dayName } from '../kernel/days.logic.js'
import { inHand, kindLines, lastKind, nextProblem, shortKinds } from '../kernel/practice.logic.js'
import { readAgain, sourceOf } from '../kernel/maths-session.logic.js'
import { calculator } from '../kernel/steps.logic.js'
import { clock, today } from './clock.dom.js'
import { linkTo } from './links.dom.js'
import { answerBox, figure, lines, problemLines, rich } from './maths-screens.dom.js'
import { noSend, practiceOf } from './maths-steps.dom.js'
import {
  StepScreen,
  actionsAs,
  choice,
  mark,
  slugNow,
  step,
  studyStore,
  verdict
} from './study.dom.js'
import { h } from './view.dom.js'

/**
 * A problem of mixed practice: one of the course's bank, or a marked question that lost marks.
 * @typedef {import('../kernel/maths-decode.logic.js').BankProblem | import('../kernel/practice.logic.js').LostQuestion} Practice
 */
/**
 * A unit's own step for a problem of its own kind (a proof), or null for any other problem.
 * @typedef {(problem: import('../kernel/maths-decode.logic.js').BankProblem, phase: 'solve' | import('../kernel/practice.logic.js').MixPhase, hand: { figures: import('../kernel/maths-decode.logic.js').Figures | undefined, answer: (right: boolean) => void, show: (phase: import('../kernel/practice.logic.js').MixPhase) => void }) => import('./view.dom.js').Child} Proof
 */

/**
 * @param {Practice} p
 * @returns {p is import('../kernel/practice.logic.js').LostQuestion}
 */
const isLost = p => 'piece' in p

/**
 * Where a lost question is checked again: the module's feedback on computer-marked work, the
 * returned script on tutor-marked work; null for a problem of the course.
 * @param {Practice} p
 * @returns {import('../kernel/maths-session.logic.js').Lost}
 */
const lostOf = p => (isLost(p) ? (p.typed ? 'feedback' : 'script') : null)

/** @type {(record: import('../kernel/practice.logic.js').PracticeRecord) => readonly import('../kernel/practice.logic.js').LostQuestion[]} */
const noLost = () => []

export class AeMixedPractice extends StepScreen {
  /** @type {readonly import('../kernel/maths-decode.logic.js').BankProblem[]} */
  bank = []
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  /** The day's problems. @type {(bank: readonly import('../kernel/maths-decode.logic.js').BankProblem[], record: import('../kernel/practice.logic.js').PracticeRecord, day: string) => readonly Practice[]} */
  order = () => []
  /** @type {(record: import('../kernel/practice.logic.js').PracticeRecord) => readonly import('../kernel/practice.logic.js').LostQuestion[]} */
  lost = noLost
  /** @type {((p: import('../kernel/maths-decode.logic.js').PaperProblem) => import('./view.dom.js').Child) | undefined} */
  setAnswer = undefined
  /** @type {((words: string) => string) | undefined} */
  setForm = undefined
  /** @type {import('./maths-steps.dom.js').Written | undefined} */
  written = undefined
  /** @type {Proof | undefined} */
  proof = undefined
  /** @type {import('./maths-steps.dom.js').Send} */
  send = noSend
  /** The problem whose answer is shown. */
  openFor = ''
  /** The problem whose solution the learner hid, to solve it again on a blank page. */
  hiddenFor = ''
  /** A problem was in hand: the empty line that replaces the last one takes focus. */
  #had = false
  #study = studyStore()
  #facts = persistedStore(FACTS_PART.key)

  setup() {
    this.watch(this.#study)
    this.watch(this.#facts)
    this.watch(clock)
  }

  /** The day's state: the order, the problem in hand and its phase. */
  #now() {
    const record = practiceOf(this.#study)
    const day = today()
    /** @type {Map<string, Practice>} */
    const byId = new Map([...this.bank, ...this.lost(record)].map(p => [p.id, p]))
    const order = this.order(this.bank, record, day)
    // A held id that the bank no longer has is dropped, and the day's order shows instead.
    const held = inHand(record, day, id => byId.get(id))
    const current = held ? byId.get(held.id) : (nextProblem(order, lastKind(record, day)) ?? undefined)
    /** @type {'solve' | import('../kernel/practice.logic.js').MixPhase} */
    const phase = held?.phase ?? 'solve'
    return { record, day, order, current, phase }
  }

  drawn() {
    super.drawn()
    const { record, current } = this.#now()
    // The last problem's Next takes the heading away: focus goes to the line that replaces it.
    if (current) this.#had = true
    else if (this.#had) {
      this.#had = false
      const p = this.querySelector('p')
      if (p instanceof HTMLElement) p.focus()
    }
    // Retired kinds with nothing new left: `short` lists them for the owner, who builds more problems.
    const short = shortKinds(this.bank, record)
    if (short.join() !== (record.short ?? []).join()) this.send({ t: 'short', kinds: short })
  }

  /**
   * @param {Practice} p
   * @param {boolean} right
   */
  #answer(p, right) {
    this.send({ t: 'mix-answer', problem: p, lost: lostOf(p), right, day: today() })
    this.focusSoon('h3')
  }

  /** @param {Practice} p */
  #change(p) {
    this.send({ t: 'mix-change', problem: p, lost: lostOf(p), day: today() })
    this.focusSoon('h3')
  }

  /**
   * The line that stands for an empty day: started, or with nothing yet to practise.
   * @param {import('../kernel/practice.logic.js').PracticeRecord} record
   */
  #empty(record) {
    // A learner who has answered a problem or finished a kind has begun: the empty page says so.
    const started =
      Object.keys(record.list ?? {}).length > 0 || Object.keys(record.retired ?? {}).length > 0
    const unit = pageAt(slugNow())?.unit
    return h(
      'p',
      { class: 'lrn-ss-note', tabindex: '-1' },
      started
        ? 'Nothing left today. Each kind comes back on its date.'
        : 'Nothing to practise now. Problems of a kind come here after you solve that kind alone. Each kind comes back on its date.',
      !started && unit && [' ', 'Open ', h('a', { href: linkTo(`/${unit.slug}`) }, unit.title), '.']
    )
  }

  /**
   * The problem's own lines before it is marked: a lost question's question, a problem's prompt.
   * @param {Practice} p
   * @param {number} left the problems left today
   */
  #head(p, left) {
    const factsPassed = allFactsPassed(decodeFacts(this.#facts.get()))
    return [
      h('h3', { tabindex: '-1' }, 'The next problem'),
      h(
        'p',
        { class: 'lrn-ss-note' },
        isLost(p) ? '' : `${calculator(p, factsPassed)} `,
        'Put your notes away.',
        ' ',
        count(left, 'problem', 'problems'),
        ' left today.'
      ),
      isLost(p)
        ? h('p', null, p.piece, ', question ', p.label, '. You got ', p.got, ' of ', p.of, ' marks.')
        : h('p', null, rich(p.prompt))
    ]
  }

  /**
   * A problem to solve: a lost question redone on paper, the unit's own way of answering, its
   * own step, or the answer box.
   * @param {Practice} p
   * @param {string} day
   */
  #solve(p, day) {
    const answer = (/** @type {boolean} */ right) => this.#answer(p, right)
    if (isLost(p))
      return [
        h(
          'p',
          { key: 'redo' },
          'Redo it on paper, from the question alone. Then check your new solution against',
          ' ',
          sourceOf(p.typed ? 'feedback' : 'script'),
          '.'
        ),
        mark({
          when: 'Right when the new solution wins back every mark the first one lost.',
          onWrong: () => answer(false),
          onRight: () => answer(true)
        })
      ]
    const open = {
      open: this.openFor === p.id,
      onOpen: () => {
        this.openFor = p.id
        this.update()
      },
      onDone: answer
    }
    const figures = this.figures
    const own = this.written?.(p, { lines: p.solution, figures, ...open, onStuck: () => answer(false) })
    const hand = this.#own(p, 'solve', day)
    return (
      own ??
      hand ??
      answerBox({ problem: p, ...open, setAnswer: this.setAnswer, setForm: this.setForm })
    )
  }

  /**
   * The unit's own step for a problem of its own kind, at a phase.
   * @param {import('../kernel/maths-decode.logic.js').BankProblem} p
   * @param {'solve' | import('../kernel/practice.logic.js').MixPhase} phase
   * @param {string} day
   */
  #own(p, phase, day) {
    return (
      this.proof?.(p, phase, {
        figures: this.figures,
        answer: right => this.#answer(p, right),
        show: shown => this.send({ t: 'mix-show', id: p.id, phase: shown, day })
      }) ?? null
    )
  }

  /**
   * A marked problem: its verdict, its solution (which the learner may hide to solve it again),
   * and the moves that change the mark or go on.
   * @param {Practice} p
   * @param {'right' | 'wrong'} phase
   * @param {readonly import('../kernel/days.logic.js').Line[] | undefined} dated the lines the date is read from
   */
  #marked(p, phase, dated) {
    const date = dated?.at(-1)?.next ?? ''
    const lost = isLost(p)
    const solution = isLost(p) ? [] : p.solution
    const hide = this.hiddenFor === p.id
    const read = readAgain(lostOf(p))
    return [
      phase === 'right' && [
        verdict(true, [lost ? 'It' : 'This kind', ' comes back on ', dayName(date), '.'], 'right'),
        !lost && lines({ lines: solution, figures: this.figures, key: 'right-solution' })
      ],
      phase === 'wrong' && [
        verdict(false, read, 'wrong'),
        !lost && !hide && lines({ lines: solution, figures: this.figures, key: 'wrong-solution' }),
        h(
          'p',
          { key: 'again' },
          lost ? 'Then redo the question' : 'Then hide the solution and solve the problem again',
          ' ',
          'on a blank page. ',
          lost ? 'It comes' : 'The problem and its kind come',
          ' back tomorrow, on ',
          dayName(date),
          ', right or wrong.'
        )
      ],
      actionsAs(
        'marked',
        phase === 'wrong' &&
          !lost &&
          choice({
            key: 'hide',
            label: hide ? 'Show the solution' : 'Hide the solution',
            onPress: () => {
              this.hiddenFor = hide ? '' : p.id
              this.update()
            }
          }),
        choice({
          label: ['Change the mark to ', phase === 'right' ? 'Wrong' : 'Right'],
          onPress: () => this.#change(p)
        }),
        choice({
          primary: true,
          label: 'Next problem',
          onPress: () => {
            this.send({ t: 'mix-next' })
            this.focusSoon('h3')
          }
        })
      )
    ]
  }

  view() {
    const { record, day, order, current, phase } = this.#now()
    if (!current) return this.#empty(record)
    const own = record.list?.[current.id]
    // A course problem returns through its kind: the right mark shows the kind's next date, the
    // wrong one the next day, the date of the problem and its kind.
    const kind = isLost(current) ? undefined : kindLines(record, current.kind)
    const dated = phase === 'right' && kind ? kind : own
    return h(
      'div',
      null,
      step(
        [
          this.#head(current, order.length),
          figure(isLost(current) ? undefined : current.figure, this.figures),
          phase === 'solve' && this.#solve(current, day),
          phase === 'proof' && !isLost(current) && this.#own(current, phase, day),
          (phase === 'right' || phase === 'wrong') && this.#marked(current, phase, dated),
          phase !== 'solve' && [
            phase !== 'proof' && problemLines(kind, 'kind'),
            problemLines(own, 'problem')
          ]
        ],
        { key: current.id }
      )
    )
  }
}
customElements.define('ae-mixed-practice', AeMixedPractice)
