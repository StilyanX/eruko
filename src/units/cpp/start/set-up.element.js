// Hides: Setup, once, before the first session: the AtCoder user name, the series prefix, the time
// zone (the device's own, which the learner may change), and the check that the runner starts
// and runs a fixed program (record.logic.js CHECK) with a C++23 compiler. Everything is stored
// at once when the check passes; until then nothing is. Once stored, "Change set-up" shows the
// same form with the stored values, and stores the user name and the time zone again (the series
// changes only through the contest form); the runner, the course and the rest of the record stay.
import { today } from '../../../parts/clock.dom.js'
import { StepScreen, actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { readAccountName, readSeries, readZone } from '../core/decode.logic.js'
import { samePrint } from '../core/judge.logic.js'
import { CHECK } from '../core/record.logic.js'
import { RUNNER_SETUP, runProgram } from '../core/runner.dom.js'
import { busy, cppStore, cppView, errorText, field, markScroll, why } from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'

const WHY = 'cpp-setup-why'

/**
 * Why the fixed program did not pass through the runner, with the compiler's own text where it
 * wrote one, or null when it passed.
 * @returns {Promise<{ why: string, error: string } | null>}
 */
async function checkRunner() {
  const ran = await runProgram(CHECK.code, CHECK.tests)
  if (!ran.ok) return { why: RUNNER_SETUP, error: '' }
  if (!ran.value.compiled)
    return {
      why: 'The runner did not compile the fixed program, so its compiler lacks C++23. Install GCC 14 or later. The compiler wrote:',
      error: ran.value.error
    }
  const out = ran.value.runs[0]?.stdout ?? ''
  const [test] = CHECK.tests
  if (!test || !samePrint(out, test.output))
    return {
      why: 'The fixed program ran but printed the wrong sum. Start the runner again.',
      error: ''
    }
  return null
}

export class CppSetUp extends StepScreen {
  user = ''
  series = ''
  zone = Intl.DateTimeFormat().resolvedOptions().timeZone
  why = ''
  /** The compiler's own text, when it did not compile the fixed program. */
  error = ''
  checking = false
  /** "Change set-up" pressed: the form shows again with the stored values. */
  changing = false

  setup() {
    this.watch(cppStore())
  }

  drawn() {
    super.drawn()
    markScroll(this)
  }

  /**
   * @param {Partial<Pick<CppSetUp, 'user' | 'series' | 'zone' | 'why' | 'error' | 'checking' | 'changing'>>} change
   */
  #set(change) {
    Object.assign(this, change)
    this.update()
  }

  /** @param {SubmitEvent} e */
  async #store(e) {
    e.preventDefault()
    if (this.checking) return
    const user = readAccountName(this.user)
    const series = readSeries(this.series)
    const zone = readZone(this.zone)
    const refused = [user, series, zone].find(r => !r.ok)
    if (refused && !refused.ok) return this.#set({ why: refused.error, error: '' })
    if (!user.ok || !series.ok || !zone.ok) return
    if (this.changing) {
      send({ t: 'setup-changed', user: user.value, zone: zone.value })
      return this.#set({ why: '', changing: false })
    }
    this.#set({ why: '', error: '', checking: true })
    const checked = await checkRunner()
    this.#set({ checking: false })
    if (checked) return this.#set(checked)
    const typed = { user: user.value, series: series.value, zone: zone.value }
    send({ t: 'setup-stored', ...typed, day: today() })
  }

  #form() {
    const described = { why: this.why, whyId: WHY }
    return step(
      h(
        'form',
        {
          class: 'form',
          onsubmit: (/** @type {SubmitEvent} */ e) => void this.#store(e),
          novalidate: true
        },
        field({
          id: 'cpp-user',
          label: 'Your user name on AtCoder',
          value: this.user,
          onChange: v => this.#set({ user: v }),
          ...described
        }),
        !this.changing &&
          field({
            id: 'cpp-series',
            label: 'The series prefix: the letters that begin the contest addresses, such as abc',
            value: this.series,
            onChange: v => this.#set({ series: v }),
            short: true,
            ...described
          }),
        field({
          id: 'cpp-zone',
          label: 'Your time zone',
          value: this.zone,
          onChange: v => this.#set({ zone: v }),
          ...described
        }),
        why(this.why, WHY),
        this.error && errorText(this.error),
        busy(this.checking && 'Eruko runs a fixed program through the runner.'),
        actions(
          this.changing &&
            choice({
              label: 'Keep the set-up',
              onPress: () => this.#set({ changing: false, why: '' })
            }),
          choice({
            primary: true,
            type: 'submit',
            label: 'Store',
            disabled: this.checking,
            why: 'The check is under way.'
          })
        )
      ),
      { key: 'form' }
    )
  }

  view() {
    const { runtime, server } = cppView().record
    if (!runtime || !server || this.changing) return this.#form()
    const change = () =>
      this.#set({ changing: true, user: server.user, series: server.series, zone: server.zone })
    return [
      h('p', { key: 'runner' }, `Runner: ${runtime.version}, ${runtime.language}.`),
      h(
        'p',
        { key: 'server' },
        `AtCoder: user name ${server.user}, series ${server.series}, time zone ${server.zone}.`
      ),
      actions(choice({ key: 'change', label: 'Change set-up', onPress: change }))
    ]
  }
}
customElements.define('cpp-set-up', CppSetUp)
