// Hides: what a part read again, or a kind's own page, shows, from its row on the unit page: a part
// shows its items already answered, each with the cases asked, their answers, and its rule. A kind shows its worked
// example, its first problem solved, then its problems already tried, each with its solution; one
// not begun offers to begin it once it may open, and else links what it waits on. The engine's
// pass and the problems from the learner's games run behind it, as behind every Go page.
import { kindReady, noKindBegun, waitsOn } from '../core/next.logic.js'
import { kindLine } from '../core/record.logic.js'
import { today } from '../../../parts/clock.dom.js'
import { linkTo } from '../../../parts/links.dom.js'
import { PRIMARY, StepScreen, actions, whereIn, step, turn } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { Background, afterRedraw } from '../core/background.dom.js'
import { board } from '../core/board.dom.js'
import { HOME, RESULTS, asked, bankOf, goStore, goView, solution } from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'

/**
 * The ids the page shows: a part's items answered, or a kind's first problem and those tried.
 * @param {import('../core/own.logic.js').Course} course
 * @param {import('../core/decode.logic.js').GoRecord} record
 * @param {number} part
 * @param {import('../core/decode.logic.js').Kind | undefined} kind
 * @param {(id: string) => boolean} held whether the page holds the item or problem
 * @returns {string[]}
 */
function shownOf(course, record, part, kind, held) {
  if (part)
    return (course.parts.find(p => p.n === part)?.items ?? []).filter(id => record.recall[id] && held(id))
  if (!kind) return []
  const tried = new Set(record.tries.map(t => t.id))
  return [kind.problems[0] ?? '', ...kind.problems.slice(1).filter(id => tried.has(id))].filter(held)
}

/**
 * A rules item read again: each case asked, in the order the item holds them, with its question,
 * position and answer; then the rule.
 * @param {import('../core/decode.logic.js').RulesItem} entry
 * @param {readonly import('../core/decode.logic.js').GoLine[]} lines
 */
const itemAgain = (entry, lines) => {
  const asked = new Set(lines.map(l => l.case ?? 0))
  return [
    entry.cases.flatMap((c, i) =>
      asked.has(i)
        ? [[h('p', null, c.question), board({ diagram: c.position }), h('p', null, 'Answer: ', c.answer, '.')]]
        : []
    ),
    h('p', null, entry.rule)
  ]
}

/**
 * "Begin this kind", once the kind may open: the work list, with the kind's first run begun.
 * @param {import('../core/decode.logic.js').KindId} kind
 */
const begin = kind =>
  actions(
    h(
      'a',
      {
        class: PRIMARY,
        href: linkTo(`${HOME}/work`),
        onclick: () => send({ t: 'example-read', kind, day: today() })
      },
      'Begin this kind'
    )
  )

export class GoAgain extends StepScreen {
  /** @type {Readonly<Record<string, import('../core/decode.logic.js').Problem>>} */
  problems = {}
  /** @type {Readonly<Record<string, import('../core/decode.logic.js').RulesItem>>} */
  items = {}
  /** The rules part read again, or 0 (`part` is every element's own part list). */
  rulesPart = 0
  /** The kind read again, or 0. */
  kind = 0
  /** The item in view. */
  at = 0
  #bg = new Background(
    () => this.update(),
    () => this.problems
  )
  #sync = afterRedraw(this, () => this.#bg.sync())

  setup() {
    this.watch(goStore())
    this.onLeave(() => this.#bg.stop())
  }

  connectedCallback() {
    super.connectedCallback()
    this.#sync()
  }

  update() {
    super.update()
    this.#sync()
  }

  view() {
    const { record, course } = goView()
    const { rulesPart: part, items } = this
    const bank = bankOf(this.problems, record)
    const k = course.kinds.find(x => x.id === this.kind)
    const shown = shownOf(course, record, part, k, id => Boolean(part ? items[id] : bank[id]))
    if (!shown.length)
      return h('p', null, 'This ', part ? 'part' : 'kind', ' opens once you reach it on ', h('a', { href: linkTo(`${HOME}/work`) }, 'the work list'), '.')
    const n = Math.min(this.at, shown.length - 1)
    const id = shown[n] ?? ''
    const entry = items[id]
    const problem = bank[id]
    const begun = k && kindLine(record, k.id)?.opened
    const waits = k && !begun ? waitsOn(course, record, k) : []
    return [
      shown.length > 1 && whereIn(part ? 'Item' : 'Problem', n + 1, shown.length),
      step(
        part && entry
          ? itemAgain(entry, record.recall[id] ?? [])
          : problem && [
              asked(problem),
              solution(problem, course),
              n === 0 && k?.term && h('p', { key: 'term' }, k.term),
              n === 0 && !begun && noKindBegun(course, record) && RESULTS.map(line => h('p', { key: line }, line))
            ],
        { key: id }
      ),
      shown.length > 1 &&
        turn({
          label: part ? 'Items' : 'Problems',
          at: n,
          count: shown.length,
          onTurn: to => {
            this.at = to
            this.update()
            // the new item is read from its count, as turning an item does on every page
            this.focusSoon('.lrn-ss-note[tabindex]')
          }
        }),
      k && !begun && kindReady(course, record, k) && begin(k.id),
      waits.length > 0 &&
        h(
          'p',
          { class: 'lrn-ss-note', key: 'waits' },
          'Its problems open once these are done: ',
          // a kind links its own page, the rules parts the work list that asks them
          waits.flatMap((w, i) => [
            i > 0 && ', ',
            h('a', { href: linkTo(`${HOME}/work${w.kind ? `?kind=${w.kind}` : ''}`) }, w.name)
          ]),
          '.'
        )
    ]
  }
}
customElements.define('go-again', GoAgain)
