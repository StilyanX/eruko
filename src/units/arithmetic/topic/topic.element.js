// Hides: how a topic's page finds its content. One page serves every topic: the slug in the address
// picks the topic's file, its bank and the MathML of both, each loaded by its path when the page is
// opened, or earlier when a link to it is pointed at (`warm`).
import { bankOf, mathmlOf } from '../../../kernel/maths-decode.logic.js'
import { addMathml } from '../../../parts/mathml.dom.js'
import '../../../parts/study-page.element.js'
import { topicPage } from '../../../parts/topic-page.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { topicModule } from '../core/decode.logic.js'
import { topicLearning } from './topic.dom.js'

const DATA = '../content'

const topics = topicPage(
  slug =>
    Promise.all([
      import(`${DATA}/topics/${slug}.js`),
      import(`${DATA}/bank/${slug}.js`),
      import(`${DATA}/mathml/topics/${slug}.gen.js`),
      import(`${DATA}/mathml/bank/${slug}.gen.js`)
    ]).then(([topic, bank, ...maths]) => {
      // Each topic's and bank's formulas as MathML (scripts/gen/mathml.mjs), loaded with them.
      for (const m of maths) addMathml(mathmlOf(m, `the MathML of ${slug}`))
      return { topic: topicModule(topic, slug), bank: bankOf(bank, `the bank of ${slug}`) }
    }),
  topicLearning
)

/**
 * Start loading a topic's content and its MathML.
 * @param {string} slug the topic's own slug, the last part of its page's
 */
export const warm = slug => topics.warm(slug)

export class ArithmeticTopic extends Screen {
  /** The page's slug. */
  slug = ''

  /** Read the address again: a link to one item of this page opens its run on it. */
  reread() {
    for (const pages of this.querySelectorAll('ae-pages'))
      if ('reread' in pages && typeof pages.reread === 'function') pages.reread()
  }

  view() {
    return h('ae-study-page', {
      '.slug': this.slug,
      '.config': topics.config(this.slug.split('/').pop() ?? '')
    })
  }
}
customElements.define('arithmetic-topic', ArithmeticTopic)

export const TAG = 'arithmetic-topic'
