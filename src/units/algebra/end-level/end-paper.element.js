// Hides: the screen of algebra's end level: when it opens, the paper to sit and the official file
// that holds its problems and their solutions, the sitting's end time, the three marks entered
// (and entered again, to put a mistyped mark right), the lost problems on their way back, the
// papers sat so far, the pass, and the end of the Shortlists. The papers are kept in the unit's
// record (`end`), so a reload or a break returns to the paper in hand.
import { dayName } from '../../../kernel/days.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { StepScreen, actions, choice, say, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { courseDone } from '../core/decode.logic.js'
import { FULL, endState, shortlistUrl } from '../core/end-level.logic.js'
import { algebraNow, record, send } from '../core/session.dom.js'

/**
 * A paper's problems as they are read: "A1, A4 and A6".
 * @param {readonly number[]} problems
 */
const named = problems => {
  const names = problems.map(n => `A${n}`)
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`
}

/**
 * A Shortlist's official file, as a link that opens beside the app.
 * @param {number} year
 */
const official = year =>
  h('a', { href: shortlistUrl(year), target: '_blank', rel: 'noreferrer' }, `IMO Shortlist ${year}`)

/** @param {number} ms a moment, as its clock time */
const clockTime = ms => new Date(ms).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

/**
 * A paper: its Shortlist and its problems.
 * @param {Readonly<{ year: number, problems: readonly number[] }>} paper
 */
const paperLine = paper => h('p', null, official(paper.year), ', problems ', named(paper.problems), '.')

const RULES = [
  h(
    'p',
    null,
    'A paper is three algebra problems from one IMO Shortlist. Sit it in 4 hours 30 minutes, closed-book, with no calculator. It fills the session of its day. Answer every problem as a full proof on paper.'
  ),
  h(
    'p',
    null,
    "Then mark each problem out of 7 against the Shortlist's official solution. A proof whose every line the official solution supports scores 7. A proof with a gap scores what the official solution's marking scheme gives for the parts done, and 0 where it prints none. A problem left blank scores 0. The paper passes with 7 on each problem."
  ),
  h(
    'p',
    null,
    'Each link opens the Shortlist, with its problems and their solutions in one file. Read the three problems when the sitting starts. Read no solution until the sitting ends.'
  )
]

export class AlgebraEndPaper extends StepScreen {
  /** The three marks as typed. @type {string[]} */
  #typed = ['', '', '']
  /** Whether the marks of a marked paper are being entered again. */
  #changing = false

  setup() {
    this.watch(record)
    this.watch(clock)
  }

  /**
   * The form the three marks are entered in.
   * @param {import('../core/end-level.logic.js').Paper} paper
   */
  #form(paper) {
    const whole = this.#typed.every(t => /^[0-7]$/.test(t.trim()))
    return h(
      'form',
      {
        class: 'form',
        onsubmit: (/** @type {SubmitEvent} */ e) => {
          e.preventDefault()
          if (!whole) return say(`Enter each mark as a whole number from 0 to ${FULL}.`)
          send({ t: 'end-marks', marks: this.#typed.map(Number) })
          this.#typed = ['', '', '']
          this.#changing = false
          say('You entered the marks.')
          this.update()
        }
      },
      h(
        'div',
        { class: 'form-row' },
        paper.problems.map((n, i) =>
          h(
            'div',
            { key: String(n) },
            h('label', { class: 'label', for: `al-end-mark-${n}` }, `A${n}, out of ${FULL}`),
            h('input', {
              id: `al-end-mark-${n}`,
              class: 'field field-num',
              inputmode: 'numeric',
              autocomplete: 'off',
              '.value': this.#typed[i] ?? '',
              oninput: (/** @type {Event} */ e) => {
                if (e.target instanceof HTMLInputElement) {
                  this.#typed[i] = e.target.value
                  this.update()
                }
              }
            })
          )
        )
      ),
      actions(
        choice({
          type: 'submit',
          primary: true,
          disabled: !whole,
          ...(whole ? {} : { why: `Enter each mark as a whole number from 0 to ${FULL}.` }),
          label: 'Enter the marks'
        })
      )
    )
  }

  /**
   * A marked paper's three marks, each lost problem with its date back.
   * @param {import('../core/end-level.logic.js').Paper} paper
   * @param {readonly import('../core/end-level.logic.js').Marked[]} lost the problems not yet right
   */
  #marks(paper, lost) {
    const list = algebraNow().list
    return h(
      'ul',
      { class: 'lrn-ss-plan' },
      paper.problems.map((n, i) => {
        const back = lost.find(p => p.n === n)
        const next = back && list?.[back.id]?.at(-1)?.next
        return h(
          'li',
          { key: String(n) },
          `A${n}: ${paper.marks?.[i]} of ${FULL}.`,
          next ? ` It comes back in mixed practice on ${dayName(next)}.` : ''
        )
      })
    )
  }

  /**
   * The move that puts a mistyped mark right: the last paper's marks, entered again.
   * @param {import('../core/end-level.logic.js').Paper} paper
   */
  #change(paper) {
    if (this.#changing) return this.#form(paper)
    return actions(
      choice({
        label: 'Change the marks',
        onPress: () => {
          this.#typed = (paper.marks ?? []).map(String)
          this.#changing = true
          say('The marks are in the form. Change them, then press Enter the marks.')
          this.update()
        }
      })
    )
  }

  /** The papers sat before the last one. */
  #earlier() {
    const papers = (algebraNow().end?.papers ?? []).slice(0, -1)
    if (!papers.length) return null
    return [
      h('h3', null, 'Earlier papers'),
      h(
        'ul',
        { class: 'lrn-ss-plan' },
        papers.map(p =>
          h(
            'li',
            { key: `${p.year}-${p.problems.join('-')}` },
            h(
              'span',
              null,
              official(p.year),
              `, ${named(p.problems)}, sat on ${dayName(p.day)}: ${(p.marks ?? []).join(', ')}.`
            )
          )
        )
      )
    ]
  }

  /**
   * The next paper, before its sitting.
   * @param {Readonly<{ year: number, problems: readonly number[] }>} next
   */
  #ready(next) {
    return step([
      RULES,
      h('h3', { tabindex: '-1' }, 'The next paper'),
      paperLine(next),
      actions(
        choice({
          primary: true,
          label: 'Start the sitting',
          onPress: () => {
            send({ t: 'end-begin', day: today(), nowMs: clock.get() })
            say('The sitting has started.')
          }
        })
      ),
      this.#earlier()
    ])
  }

  /**
   * The paper in hand: its sitting's end, then its marks.
   * @param {import('../core/end-level.logic.js').Paper} paper
   * @param {number} ends
   */
  #sitting(paper, ends) {
    return step([
      RULES,
      h('h3', { tabindex: '-1' }, 'The paper in hand'),
      paperLine(paper),
      h(
        'p',
        null,
        `The sitting began at ${clockTime(paper.start)} on ${dayName(paper.day)} and ends at ${clockTime(ends)}.`,
        ' ',
        'Mark the paper after it ends, then enter the three marks.'
      ),
      this.#form(paper),
      this.#earlier()
    ])
  }

  view() {
    const now = algebraNow()
    const state = endState(now, courseDone(now))
    switch (state.t) {
      case 'closed':
        return step(h('p', null, 'Opens when every topic is finished.'))
      case 'ready':
        return this.#ready(state.next)
      case 'sitting':
        return this.#sitting(state.paper, state.ends)
      case 'waiting':
        return step([
          h('h3', { tabindex: '-1' }, 'The last paper'),
          paperLine(state.paper),
          this.#marks(state.paper, state.lost),
          h(
            'p',
            null,
            'The paper did not pass. Each problem under 7 comes back in mixed practice. The next paper opens once you mark each of them right there.'
          ),
          this.#change(state.paper),
          this.#earlier()
        ])
      case 'passed':
        return step([
          h('h3', { tabindex: '-1' }, 'Passed'),
          paperLine(state.paper),
          h('p', null, `You passed the end level on ${dayName(state.paper.day)}, with 7 on each problem. Algebra is done.`),
          state.paper === now.end?.papers?.at(-1) && this.#change(state.paper),
          this.#earlier()
        ])
      case 'spent':
        return step([
          h(
            'p',
            null,
            'Every published Shortlist is used. ',
            state.oldest
              ? `Your oldest lost problem, A${state.oldest.n} of IMO Shortlist ${state.oldest.year}, is the first problem of the next paper. Its other two problems are not written yet.`
              : 'The next paper is not written yet.'
          ),
          this.#earlier()
        ])
      default:
        return unreachable(state)
    }
  }
}
customElements.define('algebra-end-paper', AlgebraEndPaper)
