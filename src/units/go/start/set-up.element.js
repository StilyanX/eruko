// Hides: the start screen's checks, once, when the first game comes: the network's file to choose,
// a check that the engine answers through the relay, the speed test in visits a second, and the
// server's user name. The engine and the user name are each kept as soon as it is right, so one
// does not wait on the other. Nothing to set after.
import { fail, ok } from '../../../kernel/result.logic.js'
import { today } from '../../../parts/clock.dom.js'
import { RELAY_DOWN, SERVES, aboutEngine, visitsASecond } from '../core/engine.dom.js'
import { ENGINE } from '../core/record.logic.js'
import { readPlayer, serverSays } from '../core/server.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { READING_SERVER, busy, field, goStore, goView, why } from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'

/** A browser reads a checksum only on an address it trusts: this computer's own, or https. */
const UNTRUSTED =
  'Eruko cannot check the file at this address. Open Eruko on the computer that runs KataGo, at the address npm run dev prints.'

/**
 * The SHA-256 checksum of a file, as the relay writes one; refused where the address cannot read one.
 * @param {File} file
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<string, 'untrusted'>>}
 */
async function checksumOf(file) {
  if (!globalThis.crypto?.subtle) return fail('untrusted')
  const hash = await crypto.subtle.digest('SHA-256', await file.arrayBuffer())
  return ok([...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join(''))
}

/**
 * Why the engine check stopped, in one sentence, or '' when it went through; `checksum` is kept
 * on the record and `speed` read when it did.
 * @param {File} file
 * @returns {Promise<{ why: string } | { why: '', checksum: string, speed: number }>}
 */
async function checkEngine(file) {
  const about = await aboutEngine(ENGINE.address)
  if (!about.ok) return { why: about.error === 'down' ? RELAY_DOWN : 'The engine did not answer.' }
  const checksum = await checksumOf(file)
  if (!checksum.ok) return { why: UNTRUSTED }
  if (about.value.network !== file.name || about.value.checksum !== checksum.value)
    return {
      why: `The engine runs another network file: ${about.value.network || 'none'}. Stop it and start it again with the file you chose, as step 4 under What you need says.`
    }
  const speed = await visitsASecond(ENGINE)
  if (!speed.ok) return { why: 'The engine did not answer.' }
  return { why: '', checksum: checksum.value, speed: speed.value }
}

export class GoSetUp extends Screen {
  /** The network file chosen. @type {File | null} */
  file = null
  /** The speed test's visits a second, once read. @type {number | null} */
  speed = null
  user = ''
  engineWhy = ''
  serverWhy = ''
  /** The check under way: 'engine', 'server' or ''. @type {'engine' | 'server' | ''} */
  busy = ''
  /** "Set up again" pressed, waiting to be confirmed. */
  sure = false

  setup() {
    this.watch(goStore())
  }

  /**
   * Change the screen's state, and redraw.
   * @param {Partial<Pick<GoSetUp, 'file' | 'speed' | 'user' | 'engineWhy' | 'serverWhy' | 'busy' | 'sure'>>} change
   */
  #set(change) {
    Object.assign(this, change)
    this.update()
  }

  async #check() {
    this.#set({ engineWhy: '' })
    const file = this.file
    if (!file) return
    if (!file.name.startsWith(ENGINE.network))
      return this.#set({ engineWhy: `Go runs on the network ${ENGINE.network}. Choose its file.` })
    this.#set({ busy: 'engine' })
    const checked = await checkEngine(file)
    if ('checksum' in checked) {
      this.#set({ speed: checked.speed })
      send({ t: 'engine-stored', checksum: checked.checksum })
    } else this.#set({ engineWhy: checked.why })
    this.#set({ busy: '' })
  }

  /** @param {SubmitEvent} e */
  async #store(e) {
    e.preventDefault()
    this.#set({ serverWhy: '' })
    if (!this.user.trim()) return this.#set({ serverWhy: 'Type your user name on OGS.' })
    this.#set({ busy: 'server' })
    const player = await readPlayer(this.user.trim())
    if (player.ok) send({ t: 'server-stored', player: player.value, day: today() })
    else this.#set({ serverWhy: serverSays(player.error) })
    this.#set({ busy: '' })
  }

  /** The engine's step: choose the network file, then check the engine. */
  #engineStep() {
    const { file } = this
    return step(
      [
        // The file is chosen with the app's own button; the browser's own stays out of sight.
        h('input', {
          type: 'file',
          hidden: true,
          onchange: (/** @type {Event} */ e) => {
            const files = e.target instanceof HTMLInputElement ? e.target.files : null
            this.#set({ engineWhy: '', file: files?.[0] ?? null })
          }
        }),
        h(
          'p',
          null,
          file ? `The network file: ${file.name}` : 'You have not chosen a network file.'
        ),
        why(this.engineWhy, 'go-engine-why'),
        busy(
          this.busy === 'engine' &&
            'Eruko checks the file and asks the engine about one board. This can take a few minutes.'
        ),
        // one forward press at a time, the primary last: the file first, then the check
        actions(
          choice({
            primary: !file,
            onPress: () => {
              const chooser = this.querySelector('input[type=file]')
              if (chooser instanceof HTMLInputElement) chooser.click()
            },
            label: file ? 'Choose another file' : 'Choose the network file'
          }),
          file &&
            choice({
              primary: true,
              onPress: () => void this.#check(),
              disabled: Boolean(this.busy),
              why: 'Wait for the check to finish.',
              label: 'Check the engine'
            })
        )
      ],
      { key: 'engine' }
    )
  }

  /** The server's step: the OGS user name, stored once the server knows it. */
  #serverStep() {
    return step(
      h(
        'form',
        { onsubmit: (/** @type {SubmitEvent} */ e) => void this.#store(e), novalidate: true },
        h(
          'div',
          { class: 'go-fields' },
          field({
            id: 'go-user',
            label: 'Your user name on OGS',
            value: this.user,
            onChange: v => this.#set({ user: v }),
            why: this.serverWhy,
            whyId: 'go-server-why',
            autocomplete: 'username'
          })
        ),
        why(this.serverWhy, 'go-server-why'),
        busy(this.busy === 'server' && READING_SERVER),
        actions(
          choice({
            primary: true,
            type: 'submit',
            disabled: Boolean(this.busy),
            why: 'Wait for the check to finish.',
            label: 'Store'
          })
        )
      ),
      { key: 'server' }
    )
  }

  /** "Set up again", for a changed computer or OGS account, asked to be sure first. */
  #again() {
    return [
      h(
        'p',
        { class: 'lrn-ss-note', key: 'forced' },
        'Changed computer or OGS account? Set up again.'
      ),
      this.sure
        ? [
            h(
              'p',
              { key: 'sure' },
              'This clears the engine and your OGS user name. Your problems, their dates and your games stay.'
            ),
            h(
              'div',
              { class: 'actions', key: 'sure' },
              choice({ label: 'Keep the set-up', onPress: () => this.#set({ sure: false }) }),
              choice({
                label: 'Clear and set up again',
                onPress: () => {
                  this.#set({ sure: false, speed: null })
                  send({ t: 'set-up-again' })
                }
              })
            )
          ]
        : h(
            'div',
            { class: 'actions', key: 'ask' },
            choice({ label: 'Set up again', onPress: () => this.#set({ sure: true }) })
          )
    ]
  }

  view() {
    const { record } = goView()
    const { speed } = this
    return [
      record.engine
        ? h(
            'p',
            { key: 'engine' },
            'Engine: KataGo, AGA rules, komi ',
            record.engine.komi,
            ' (the points White is given for moving second).'
          )
        : this.#engineStep(),
      speed !== null && [
        h('p', { key: 'speed' }, 'The engine answers.'),
        speed < SERVES &&
          h(
            'p',
            { key: 'slow' },
            'This computer is too slow to review games, because the engine would take over a day for one game. The rules items and the problems still run here.'
          )
      ],
      record.server
        ? h('p', { key: 'server' }, 'Server: OGS, user name ', record.server.user, '.')
        : this.#serverStep(),
      record.engine && record.server && this.#again()
    ]
  }
}
customElements.define('go-set-up', GoSetUp)
