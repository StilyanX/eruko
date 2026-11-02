// Hides: what a study step's button does beyond a plain button. `intent` is heard when the pointer
// comes onto it or it takes focus, before any press. A locked button (`disabled`) stays focusable;
// its `why` stands under it from the moment it is drawn, is read as its description, and is said
// again at each press. A press is heard as `press`, with the click. The one primary control of a
// step is `primary`; Enter presses the one of the step that holds focus (study-page.element.js).
import { Screen, h } from './view.dom.js'
import { say } from './say.dom.js'

/** The class of the one primary control of a step. */
export const PRIMARY = 'btn btn-primary lrn-ss-primary'

/** How many reasons have been given an id, so each is its own. */
let whys = 0

export class AeChoice extends Screen {
  /** @type {import('./view.dom.js').Child} */
  label = null
  disabled = false
  why = ''
  /** @type {'button' | 'submit'} */
  type = 'button'
  primary = false
  /** The id that ties `why` to the button as its description. */
  #whyId = `why-${++whys}`

  /** @param {MouseEvent} e */
  #press(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('press', { detail: e }))
      return
    }
    e.preventDefault()
    if (this.why) say(this.why)
  }

  #intent() {
    this.dispatchEvent(new CustomEvent('intent'))
  }

  view() {
    return [
      h(
        'button',
        {
          type: this.type,
          class: this.primary ? PRIMARY : 'btn',
          'aria-disabled': this.disabled ? 'true' : undefined,
          'aria-describedby': this.disabled && this.why ? this.#whyId : undefined,
          onpointerenter: () => this.#intent(),
          onfocus: () => this.#intent(),
          onclick: (/** @type {MouseEvent} */ e) => this.#press(e)
        },
        this.label
      ),
      this.disabled && this.why && h('span', { class: 'why', id: this.#whyId }, this.why)
    ]
  }
}
customElements.define('ae-choice', AeChoice)
