// Hides: what Arithmetic's mixed practice loads: every topic's bank, in course order, and every
// bank's formulas as MathML, since mixed practice holds every bank.
import { bankOf, mathmlOf } from '../../../kernel/maths-decode.logic.js'
import { addMathml } from '../../../parts/mathml.dom.js'
import { TOPICS } from '../core/course.gen.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { warmable } from '../../../parts/warmable.dom.js'
import { mixedPractice } from '../core/screens.dom.js'

const DATA = '../content'

const bank = warmable(() =>
  Promise.all(
    TOPICS.map(t =>
      Promise.all([
        import(`${DATA}/bank/${t.slug}.js`),
        import(`${DATA}/mathml/bank/${t.slug}.gen.js`)
      ])
    )
  ).then(files =>
    files.flatMap(([problems, maths], i) => {
      addMathml(mathmlOf(maths, `the MathML of bank ${i}`))
      return bankOf(problems, `bank ${i}`)
    })
  )
)

/** Start loading every bank and its MathML. */
export const warm = () => bank.warm()

export class ArithmeticMixedPractice extends Screen {
  slug = ''
  /** @type {import('../../../parts/study-page.element.js').StudyPageConfig | null} */
  #config = null

  view() {
    this.#config ??= {
      sections: [{ id: 'ar-practice', title: 'Mixed practice', content: mixedPractice(bank.loaded()) }]
    }
    return h('ae-study-page', { '.slug': this.slug, '.config': this.#config })
  }
}
customElements.define('arithmetic-mixed-practice', ArithmeticMixedPractice)

export const TAG = 'arithmetic-mixed-practice'
