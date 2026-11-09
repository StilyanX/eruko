// Hides: step 3, a proof to read one line at a time, and its checks. After each line the learner
// says aloud why it follows, then shows the reason and marks it; the reading in hand is kept in the
// record as { line, wrong }, so a reload returns to its line. A read proof is checked on its dates:
// the main idea and every reason said before looking. Its moves go to the unit's `send`.
import { dayName } from '../kernel/days.logic.js'
import { isRead, proofLines } from '../kernel/proofs.logic.js'
import { proofId } from '../kernel/proofs-decode.logic.js'
import { spoken } from '../kernel/maths-text.logic.js'
import { clock, today } from './clock.dom.js'
import { figure, rich } from './maths-screens.dom.js'
import { heading, noProofsSend, proofsOf } from './maths-steps.dom.js'
import { StepScreen, actions, actionsAs, choice, mark, say, step, studyStore } from './study.dom.js'
import { h } from './view.dom.js'

export class AeProofReader extends StepScreen {
  /** @type {import('../kernel/proofs-decode.logic.js').Proof} */
  proof = { id: proofId(''), statement: '', idea: '', lines: [] }
  /** The proof is the first unread of its lesson. */
  open = false
  /** @type {import('../kernel/maths-decode.logic.js').Figures | undefined} */
  figures = undefined
  heading = ''
  /** @type {import('./maths-steps.dom.js').ProofsSend} */
  send = noProofsSend
  /** The idea and the reasons shown, in a check. */
  reveal = false
  /** The reason of the line in hand is shown. */
  shown = false

  #study = studyStore()

  setup() {
    this.watch(this.#study)
    this.watch(clock)
  }

  /** @param {boolean} right */
  #next(right) {
    this.send({ t: 'proof-line', proof: this.proof.id, right })
    this.shown = false
    this.update()
  }

  /** @param {boolean} right */
  #checked(right) {
    this.send({ t: 'proof-check', proof: this.proof.id, right, day: today() })
    this.reveal = false
    this.focusSoon('h3')
    this.update()
  }

  #read() {
    this.send({ t: 'proof-read', proof: this.proof.id, day: today() })
    this.focusSoon('h3')
  }

  /**
   * The reading in hand: each line in view, its reason once said, then the main idea.
   * @param {Readonly<{ line: number, wrong: readonly number[] }>} reading
   */
  #reading(reading) {
    const proof = this.proof
    const ended = reading.line >= proof.lines.length
    return [
      h('p', { key: 'say' }, 'After each line, say aloud why it follows.'),
      h(
        'ol',
        { key: 'reading', class: 'lrn-ss-lines' },
        proof.lines.slice(0, Math.min(reading.line + 1, proof.lines.length)).map((l, i) =>
          h(
            'li',
            { key: i, class: 'lrn-ss-line' },
            h('span', { class: 'lrn-ss-text' }, rich(l.line)),
            figure(l.figure, this.figures),
            (i < reading.line || this.shown) &&
              h('span', { class: 'lrn-ss-reason' }, rich(l.reason)),
            i === reading.line &&
              !this.shown &&
              actions(
                choice({
                  primary: true,
                  label: 'Show the reason',
                  onPress: () => {
                    this.shown = true
                    this.update()
                    say(`The reason: ${spoken(l.reason)}`)
                  }
                })
              ),
            i === reading.line &&
              this.shown &&
              mark({
                when: 'Right when the reason you said names the same fact as the reason shown, in your own words.',
                onWrong: () => this.#next(false),
                onRight: () => this.#next(true)
              })
          )
        )
      ),
      figure(proof.figure, this.figures),
      ended && [
        h('p', { key: 'idea-ask' }, 'Say the main idea in one sentence.'),
        actionsAs('read', choice({ primary: true, label: 'Done', onPress: () => this.#read() }))
      ]
    ]
  }

  /**
   * A check of a read proof: the idea and the reasons said before they are shown, then marked.
   * One wrong line in the reading makes the first check wrong.
   * @param {import('../kernel/proofs-decode.logic.js').ReadProof} rec
   */
  #check(rec) {
    const wrong = rec.wrong
    const forced = !rec.checks.length && wrong.length > 0
    return [
      h(
        'p',
        { key: 'check-say' },
        'Say the main idea, then the reason for every line, before you look.'
      ),
      forced &&
        h(
          'p',
          { key: 'forced', class: 'lrn-ss-note' },
          'When you read the proof, you gave the wrong reason for',
          ' ',
          wrong.length === 1 ? 'line' : 'lines',
          ' ',
          wrong.join(', '),
          '.',
          ' ',
          wrong.length === 1 ? 'That line makes' : 'Those lines make',
          ' this check wrong. Read the proof again, line by line.'
        ),
      !this.reveal
        ? actionsAs(
            'reveal',
            choice({
              primary: true,
              label: 'Show the idea and the reasons',
              onPress: () => {
                this.reveal = true
                this.update()
                say(`The main idea: ${spoken(this.proof.idea)}`)
              }
            })
          )
        : this.#revealed(forced)
    ]
  }

  /**
   * The idea and every reason shown, then the check marked; a check the reading made wrong is done.
   * @param {boolean} forced
   */
  #revealed(forced) {
    const proof = this.proof
    return [
      h('p', { key: 'idea' }, 'The main idea: ', rich(proof.idea)),
      h(
        'ol',
        { key: 'all', class: 'lrn-ss-lines' },
        proof.lines.map((l, i) =>
          h(
            'li',
            { key: i, class: 'lrn-ss-line' },
            h('span', { class: 'lrn-ss-text' }, rich(l.line)),
            figure(l.figure, this.figures),
            h('span', { class: 'lrn-ss-reason' }, rich(l.reason))
          )
        )
      ),
      forced
        ? actionsAs(
            'checked',
            choice({ primary: true, label: 'Done', onPress: () => this.#checked(false) })
          )
        : mark({
            when: 'Right when you knew the main idea and every reason.',
            onWrong: () => this.#checked(false),
            onRight: () => this.#checked(true)
          })
    ]
  }

  view() {
    const proof = this.proof
    const rec = proofsOf(this.#study).proofs?.[proof.id]
    const head = [heading(this.heading), h('p', null, rich(proof.statement))]
    if (!isRead(rec)) {
      const reading = rec?.reading ?? { line: 0, wrong: [] }
      return step([
        head,
        this.open
          ? this.#reading(reading)
          : h(
              'p',
              { key: 'closed', class: 'lrn-ss-note' },
              'This proof opens once you read the proof before it.'
            )
      ])
    }
    const next = proofLines(rec).at(-1)?.next ?? ''
    if (next <= today()) return step([head, this.#check(rec)])
    return step([
      head,
      h(
        'p',
        { key: 'read-note', class: 'lrn-ss-note' },
        'You read this on ',
        dayName(rec.read),
        '. ',
        rec.known ? 'You know it. ' : '',
        'Its next check is on ',
        dayName(next),
        '.'
      )
    ])
  }
}
customElements.define('ae-proof-reader', AeProofReader)
