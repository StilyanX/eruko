// Hides: which of its two pages the work list's address opens: the work list, or a part read again
// or a kind's own page, opened from its row on the unit page (?part=<n>, ?kind=<id>).
import { KINDS, PARTS, bankOf, rulesOf, workAddress } from '../core/decode.logic.js'
import { PROBLEMS } from '../content/problems.gen.js'
import { RULES_ITEMS } from '../content/rules-items.gen.js'
import { titled } from '../core/next.logic.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './again.element.js'
import './line-pages.element.js'
import './work-list.element.js'

const BANK = bankOf(PROBLEMS)
const ITEMS = rulesOf(RULES_ITEMS)

export class GoWork extends Screen {
  slug = ''

  view() {
    const address = workAddress(new URLSearchParams(location.search))
    const part = address.t === 'part' ? address.n : 0
    const kind = address.t === 'kind' ? address.id : 0
    // the part or kind by name, where the course names it; a kind from the learner's games has no fixed name
    const name = part ? PARTS.find(p => p.n === part)?.name : KINDS.find(k => k.id === kind)?.name
    /** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
    const config =
      part || kind
        ? {
            title: kind
              ? name
                ? titled(name)
                : 'Kind'
              : name
                ? `Read again: ${titled(name)}`
                : 'Read again',
            sections: [
              {
                id: 'go-again',
                title: kind ? 'Problems' : 'Read again',
                content: h('go-again', {
                  key: `${part} ${kind}`,
                  '.problems': BANK,
                  '.items': ITEMS,
                  '.rulesPart': part,
                  '.kind': kind
                })
              }
            ]
          }
        : {
            sections: [
              {
                id: 'go-work',
                title: 'Work list',
                content: h('go-work-list', { '.problems': BANK, '.items': ITEMS })
              }
            ]
          }
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('go-work', GoWork)

export const TAG = 'go-work'
