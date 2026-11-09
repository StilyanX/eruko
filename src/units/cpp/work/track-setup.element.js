// Hides: the track's Setup screen: each fixed check of track-setup.logic.js run through the runner
// in turn, its name and what it gave shown as it comes, Setup stopped at the first form whose
// outcome is not the known one, and the pin stored once every form gave its own. It also counts,
// stage by stage, the items that met their entry checks.
import { actions, choice } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { aboutRunner, runAsk } from '../core/runner.dom.js'
import { RUNNER_DOWN } from '../core/session.logic.js'
import { busy, cppView, heading, why } from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'
import { CHECKS, DEVICE_CHECK, pinOf } from '../core/track-setup.logic.js'
import { itemsOf } from '../core/track-decode.logic.js'

export class CppTrackSetup extends Screen {
  /** Each check run so far: its name, whether it gave its known outcome, and what it gave. @type {{ name: string, ok: boolean, said: string }[]} */
  done = []
  running = false
  why = ''
  deviceOut = ''

  async #run() {
    this.done = []
    this.why = ''
    this.running = true
    this.update()
    for (const [i, check] of CHECKS.entries()) {
      /** @type {import('../core/track.logic.js').Reply[]} */
      const replies = []
      for (const ask of check.asks) {
        const r = await runAsk(ask)
        if (!r.ok) return this.#stop(RUNNER_DOWN)
        replies.push(r.value)
      }
      const ok = check.ok(replies)
      this.done = [...this.done, { name: check.name, ok, said: check.said(replies) }]
      if (i === DEVICE_CHECK) {
        const r = replies[0]
        this.deviceOut = r?.compiled ? (r.runs[0]?.stdout ?? '') : ''
      }
      this.update()
      if (!ok)
        return this.#stop(
          `Setup stops at "${check.name}". The track opens once this check gives its known outcome.`
        )
    }
    const about = await aboutRunner()
    const pin = about.ok ? pinOf(about.value, this.deviceOut) : null
    if (!pin) return this.#stop('The runner reports no g++ 16. The track needs g++ 16.')
    this.running = false
    this.update()
    send({ t: 'track-setup-stored', pin })
  }

  /** @param {string} text */
  #stop(text) {
    this.running = false
    this.why = text
    this.update()
  }

  view() {
    const { course } = cppView()
    const counts = course.stages.flatMap(st => {
      const kinds = course.track.filter(k => k.stage === st.n)
      return kinds.length
        ? [
            `Stage ${st.n}: ${kinds.length} kinds, ${kinds.reduce((n, k) => n + itemsOf(k).length, 0)} items.`
          ]
        : []
    })
    return [
      heading('Setup for the track'),
      h(
        'p',
        null,
        'The track checks every answer by the machine. Setup runs a fixed program for each kind of check and shows what it gave.'
      ),
      this.done.length > 0 &&
        h(
          'ul',
          { key: 'done' },
          this.done.map(d =>
            h('li', { key: d.name }, `${d.name}: ${d.ok ? 'right' : 'wrong'}. ${d.said}`)
          )
        ),
      this.running && busy(`${this.done.length + 1} of ${CHECKS.length} checks run.`),
      why(this.why, 'cpp-track-setup-why'),
      h('p', { key: 'items' }, 'Items that met their entry checks:'),
      h(
        'ul',
        { key: 'counts' },
        counts.map(c => h('li', { key: c }, c))
      ),
      !this.running &&
        actions(
          choice({
            primary: true,
            label: this.done.length ? 'Run Setup again' : 'Run Setup',
            onPress: () => void this.#run()
          })
        )
    ]
  }
}
customElements.define('cpp-track-setup', CppTrackSetup)
