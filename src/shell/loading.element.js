// Hides: what shows while a page loads: nothing for the first second (a wait under a second reads
// as none), then one plain line, and after ten seconds a way out. Never a skeleton or a spinner.
// The status line is there from the start, so a screen reader hears it change.
import { Screen, h } from '../parts/view.dom.js'

export class ShellLoading extends Screen {
  waited = 0

  setup() {
    const a = setTimeout(() => {
      this.waited = 1
      this.update()
    }, 1000)
    const b = setTimeout(() => {
      this.waited = 10
      this.update()
    }, 10000)
    this.onLeave(() => {
      clearTimeout(a)
      clearTimeout(b)
    })
  }

  view() {
    return h(
      'main',
      { id: 'main', tabindex: '-1', class: 'page' },
      h(
        'p',
        { class: 'loading', role: 'status' },
        this.waited === 1 && 'Loading the page.',
        this.waited === 10 && [
          'This is taking too long. Check your connection, then reload. ',
          h(
            'button',
            { type: 'button', class: 'btn', onclick: () => location.reload() },
            'Reload the page'
          )
        ]
      )
    )
  }
}
customElements.define('shell-loading', ShellLoading)
