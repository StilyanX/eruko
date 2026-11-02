// Hides: how a proof problem of mixed practice is answered, for every maths unit with proofs: it is
// written on paper, the published proof is shown, and the learner marks their own against it. A
// unit hands its proof form; any other problem gets the shared answer box.
import { STUCK, lines } from './maths-screens.dom.js'
import { actionsAs, choice, mark } from './study.dom.js'
import { h } from './view.dom.js'

/**
 * Mixed practice's step for a problem in `proofForm`: write it, show the published proof, mark.
 * @param {string} proofForm
 * @returns {import('./mixed-practice.element.js').Proof}
 */
export const proofProblem =
  proofForm =>
  (problem, phase, { figures, answer, show }) =>
    problem.form !== proofForm
      ? null
      : phase === 'solve'
        ? [
            h(
              'p',
              { key: 'proof-say' },
              'Write the proof on paper, with the reason for each line beside it.'
            ),
            actionsAs(
              'proof-choose',
              choice({ label: STUCK, onPress: () => answer(false) }),
              choice({
                primary: true,
                label: 'Show the published proof',
                onPress: () => show('proof')
              })
            )
          ]
        : phase === 'proof'
          ? [
              lines({
                lines: problem.solution,
                figures,
                label: 'Published proof',
                key: 'proof-lines'
              }),
              mark({
                when: 'Right when every line of your proof holds, with its reason, checked line by line against the published one.',
                onWrong: () => answer(false),
                onRight: () => answer(true)
              })
            ]
          : null
