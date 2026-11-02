// Hides: the form for the next rated contest's date and start time, typed from the server's list
// of upcoming contests in the stored time zone, and, after a change of series or method, the
// series prefix typed again. It stands on the Start page when the start gate opens and on the
// Contest screen after each record is pasted, so it is one element both pages draw.
import { today } from '../../../parts/clock.dom.js'
import { actions, choice } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { readNext, readSeries } from './decode.logic.js'
import { away, cppStore, cppView, field, heading, seriesName, why } from './screens.dom.js'
import { send } from './session.dom.js'

const WHY = 'cpp-next-why'

export class CppNextContest extends Screen {
  date = ''
  time = ''
  /** The series or its rating method changed: the prefix is typed again. */
  changed = false
  series = ''
  why = ''

  setup() {
    this.watch(cppStore())
  }

  /**
   * @param {Partial<Pick<CppNextContest, 'date' | 'time' | 'changed' | 'series' | 'why'>>} change
   */
  #set(change) {
    Object.assign(this, change)
    this.update()
  }

  /** @param {SubmitEvent} e */
  #store(e) {
    e.preventDefault()
    const next = readNext(this.date, this.time)
    if (!next.ok) return this.#set({ why: next.error })
    const series = this.changed ? readSeries(this.series) : null
    if (series && !series.ok) return this.#set({ why: series.error })
    if (series) send({ t: 'series-typed', series: series.value, day: today() })
    send({ t: 'next-typed', next: next.value })
    this.#set({ why: '', date: '', time: '', changed: false, series: '' })
  }

  /**
   * After a change of series or method: the series prefix typed again, the new one or the same.
   * @param {string} stored
   */
  #series(stored) {
    return [
      h(
        'label',
        { class: 'radio', key: 'changed' },
        h('input', {
          type: 'checkbox',
          '.checked': this.changed,
          onchange: (/** @type {Event} */ e) => {
            if (e.target instanceof HTMLInputElement)
              this.#set({ changed: e.target.checked, series: this.series || stored })
          }
        }),
        'The series or its rating method changed'
      ),
      this.changed &&
        field({
          id: 'cpp-series',
          label: 'The series prefix, the new one or the same one',
          value: this.series,
          onChange: v => this.#set({ series: v }),
          why: this.why,
          whyId: WHY
        })
    ]
  }

  view() {
    const { server } = cppView().record
    if (!server) return null
    return [
      heading('Next contest'),
      h(
        'p',
        { key: 'what' },
        'Type the date and start time of the next rated contest of ',
        seriesName(server.series),
        ', from ',
        away('https://atcoder.jp/contests/', "AtCoder's list of upcoming contests"),
        `, in your own time zone, ${server.zone}.`
      ),
      h(
        'form',
        {
          class: 'form',
          key: 'form',
          onsubmit: (/** @type {SubmitEvent} */ e) => this.#store(e),
          novalidate: true
        },
        field({
          id: 'cpp-date',
          label: 'Date',
          type: 'date',
          value: this.date,
          onChange: v => this.#set({ date: v }),
          why: this.why,
          whyId: WHY
        }),
        field({
          id: 'cpp-time',
          label: 'Start time',
          type: 'time',
          value: this.time,
          onChange: v => this.#set({ time: v }),
          why: this.why,
          whyId: WHY,
          short: true
        }),
        this.#series(server.series),
        why(this.why, WHY),
        actions(choice({ primary: true, type: 'submit', label: 'Store' }))
      )
    ]
  }
}
customElements.define('cpp-next-contest', CppNextContest)
