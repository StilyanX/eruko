// Hides: the one search field, on the explore page and on every unit page: its label above it,
// Clear beside it once something is typed (Esc clears it too), and under it how many were found;
// `where` names the part searched when it is not the whole ("in Mathematics"). The page that holds
// it sets `value` and `found`, and hears each change as a `change-text` event.
import { Screen, h } from '../parts/view.dom.js'

export class ShellSearchField extends Screen {
  fieldId = ''
  label = ''
  value = ''
  found = 0
  where = ''

  /** @param {string} text */
  #say(text) {
    this.dispatchEvent(new CustomEvent('change-text', { detail: text }))
  }

  view() {
    const typed = this.value.trim() !== ''
    const where = this.where
    return h(
      'div',
      { class: 'search', role: 'search' },
      h('label', { class: 'label', for: this.fieldId }, this.label),
      h(
        'div',
        { class: 'search-row' },
        h('input', {
          id: this.fieldId,
          class: 'field',
          type: 'search',
          '.value': this.value,
          autocomplete: 'off',
          spellcheck: 'false',
          oninput: (/** @type {Event} */ e) =>
            this.#say(e.target instanceof HTMLInputElement ? e.target.value : ''),
          onkeydown: (/** @type {KeyboardEvent} */ e) => e.key === 'Escape' && this.#say('')
        }),
        typed &&
          h(
            'button',
            {
              type: 'button',
              class: 'btn',
              onclick: () => {
                this.#say('')
                this.querySelector('input')?.focus()
              }
            },
            'Clear'
          )
      ),
      h(
        'p',
        { class: 'search-count', role: 'status' },
        typed &&
          (this.found
            ? `${this.found} found.`
            : `Nothing found${where && ` ${where}`}. Check the spelling${where && ', or search All units'}.`)
      )
    )
  }
}
customElements.define('shell-search-field', ShellSearchField)

/**
 * The field's description inside a page's view.
 * @param {{ id: string, label: string, value: string, found: number, where?: string, onChange: (text: string) => void }} p
 */
export const searchField = p =>
  h('shell-search-field', {
    key: p.id,
    '.fieldId': p.id,
    '.label': p.label,
    '.value': p.value,
    '.found': p.found,
    '.where': p.where ?? '',
    'on:change-text': (/** @type {CustomEvent<string>} */ e) => p.onChange(e.detail)
  })
