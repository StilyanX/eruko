// Hides: step 4, a statement to prove. The learner writes the proof on paper, checks its structure,
// then compares it line by line with the published proof; a proof that fails is fixed and checked
// again, or given up (I cannot fix it), which shows the published proof and lets the next statement
// of the same method take its place. Its moves go to the unit's `send`.
import { dayName } from '../kernel/days.logic.js'
import { unreachable } from '../kernel/invariant.logic.js'
import { statementId } from '../kernel/proofs-decode.logic.js'
import { isDone, isSeen, optionalStatement } from '../kernel/proofs.logic.js'
import { clock, today } from './clock.dom.js'
import { lines, rich } from './maths-screens.dom.js'
import { heading, noProofsSend, proofsOf } from './maths-steps.dom.js'
import { StepScreen, actions, choice, mark, step, studyStore } from './study.dom.js'
import { h } from './view.dom.js'

/** What a statement whose method is already proved says. */
const OPTIONAL =
  'Optional. You have proved a statement of this method, and the topic asks for one per method.'

const COMPARE =
  'Compare your proof line by line with the published proof. A line fails when you cannot state its reason. A line also fails when no fact from this lesson or an earlier one justifies it. A proof by another route passes.'

export class AeProveStatement extends StepScreen {
  /** @type {import('../kernel/proofs-decode.logic.js').Statement} */
  statement = { id: statementId(''), statement: '', method: '', check: { proof: [] } }
  /** Every statement of the lesson. @type {readonly import('../kernel/proofs-decode.logic.js').Statement[]} */
  prove = []
  heading = ''
  /** @type {import('./maths-steps.dom.js').ProofsSend} */
  send = noProofsSend
  #study = studyStore()

  setup() {
    this.watch(this.#study)
    this.watch(clock)
  }

  /**
   * The phase of the proof in hand, kept in the record so a reload or a break returns to it.
   * @param {import('../kernel/proofs-decode.logic.js').ProvePhase} phase
   */
  #to(phase) {
    this.send({ t: 'prove-phase', statement: this.statement.id, phase })
  }

  #noFix() {
    this.send({ t: 'prove-giveup', statement: this.statement, prove: this.prove, day: today() })
    this.focusSoon('h3')
  }

  /**
   * The proof in hand at its phase: written, its structure checked, fixed, or compared.
   * @param {import('../kernel/proofs-decode.logic.js').ProvePhase} phase
   * @param {import('./view.dom.js').Child} published
   */
  #inHand(phase, published) {
    const noFix = choice({ label: 'I cannot fix it: show the proof', onPress: () => this.#noFix() })
    switch (phase) {
      case 'write':
        return [
          h('p', null, 'Write the proof on paper, with the reason for each line beside it.'),
          actions(choice({ primary: true, label: 'Done', onPress: () => this.#to('structure') }))
        ]
      case 'structure':
        return mark({
          when: 'Right when your proof proves this statement, not its converse, and covers every case.',
          onWrong: () => this.#to('fix'),
          onRight: () => this.#to('compare')
        })
      case 'fix':
        return [
          h('p', null, 'Fix it on paper, then check it again.'),
          actions(
            noFix,
            choice({ primary: true, label: 'Done', onPress: () => this.#to('structure') })
          )
        ]
      case 'compare':
        // New nodes, never the structure check's: a kept Right would hold focus far below.
        return h(
          'div',
          { key: 'compare' },
          h('p', null, COMPARE),
          this.statement.check.uses &&
            h(
              'p',
              { key: 'uses' },
              'The facts the proof may use: ',
              rich(this.statement.check.uses)
            ),
          published,
          mark({
            when: 'Right when every line passed.',
            onWrong: () => this.#to('fix'),
            onRight: () =>
              this.send({ t: 'prove-done', statement: this.statement.id, day: today() })
          })
        )
      default:
        return unreachable(phase)
    }
  }

  view() {
    const s = this.statement
    const proved = proofsOf(this.#study).proved
    const rec = proved?.[s.id]
    const published = lines({
      lines: s.check.proof.map(l => ({ step: l.line, reason: l.reason })),
      label: 'Published proof'
    })
    return step([
      heading(this.heading),
      h('p', null, rich(s.statement)),
      !isDone(rec) &&
        !isSeen(rec) &&
        optionalStatement(s, this.prove, proved) &&
        h('p', { key: 'optional', class: 'lrn-ss-note' }, OPTIONAL),
      isDone(rec)
        ? h('p', { key: 'done' }, 'You proved this on ', dayName(rec.done), '.')
        : isSeen(rec)
          ? [
              h(
                'p',
                null,
                'You found no fix on ',
                dayName(rec.seen),
                ', so you move on from this statement. Read the published proof.'
              ),
              published
            ]
          : this.#inHand(rec?.phase ?? 'write', published)
    ])
  }
}
customElements.define('ae-prove-statement', AeProveStatement)
