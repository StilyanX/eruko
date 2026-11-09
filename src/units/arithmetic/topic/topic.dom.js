// Hides: the order of a topic's page: its parts under headings, in the order of the paper's "One
// topic's material".
import '../../../parts/bare-problem.element.js'
import '../../../parts/examples.element.js'
import '../../../parts/pages.element.js'
import '../../../parts/proofs.element.js'
import '../../../parts/statements.element.js'
import { idea } from '../../../parts/maths-screens.dom.js'
import { h } from '../../../parts/view.dom.js'
import { figures, placeWritten, setAnswer, setForm } from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'

/**
 * A topic's page, with its parts under headings in the order of the paper's "One topic's
 * material": the try-first problem, the ideas, the worked examples, the proofs to read and the
 * statements to prove. Each item has its own page. The topic's problems are in the bank, which
 * mixed practice and fading read.
 * @param {import('../../../kernel/proofs-decode.logic.js').ProofTopic} topic
 * @param {readonly import('../../../kernel/maths-decode.logic.js').BankProblem[]} bank
 * @returns {import('../../../parts/study-page.element.js').StudyPageConfig}
 */
export function topicLearning(topic, bank) {
  const ideas = topic.ideas ?? []
  const sections = [
    topic.bare && {
      id: 'ar-try',
      title: 'Try this problem',
      content: h('ae-bare-problem', {
        '.slug': topic.slug,
        '.bare': topic.bare,
        '.figures': figures,
        '.setAnswer': setAnswer,
        '.setForm': setForm,
        '.send': send
      })
    },
    ideas.length > 0 && {
      id: 'ar-ideas',
      title: ideas.length === 1 ? 'The idea' : 'The ideas',
      content: h('ae-pages', {
        '.noun': 'Idea',
        '.store': 'ideas',
        '.primary': true,
        '.items': ideas,
        '.send': send,
        '.render': (
          /** @type {import('../../../kernel/maths-decode.logic.js').Idea} */ it,
          /** @type {number} */ _n,
          /** @type {{ heading: string }} */ page
        ) => idea(it, page.heading)
      })
    },
    {
      id: 'ar-examples',
      title: topic.kinds.some(k => k.forms.length) ? 'Worked examples' : 'State the idea',
      content: h('ae-examples', {
        '.topic': topic,
        '.bank': bank,
        '.figures': figures,
        '.tryId': 'ar-try',
        '.worked': { setAnswer, setForm, written: placeWritten },
        '.send': send
      })
    },
    topic.proofs.length > 0 && {
      id: 'ar-proofs',
      title: 'Proofs to read',
      content: h('ae-proofs', { '.topic': topic, '.figures': figures, '.send': send })
    },
    topic.prove.length > 0 && {
      id: 'ar-prove',
      title: 'Statements to prove',
      content: h('ae-statements', { '.topic': topic, '.send': send, '.proofsId': 'ar-proofs' })
    }
  ]
  return { sections: sections.filter(s => s !== false && s !== null && s !== undefined) }
}
