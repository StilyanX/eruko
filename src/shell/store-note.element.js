// Hides: what the learner must know about the saved record, on every page until it is resolved:
// a part that could not be read (its text kept for Settings to save), and a record that is no
// longer saved: opened read-only after its check found damage, or stopped after a write failed;
// and another tab holding the record that does not answer. A record no longer saved carries its
// own button to save a backup file.
// Empty, it shows nothing; it stays on the page so a screen reader hears it change.
import { health } from '../record/store.js'
import { recordState } from '../record/index.js'
import { PARTS } from './registry.js'
import { downloadBackup } from './download.js'
import { Screen, h } from '../parts/view.dom.js'

/** @param {string} key */
const nameOf = key => PARTS.find(p => p.key === key)?.title ?? key

export class ShellStoreNote extends Screen {
  /** What the backup button said once pressed: the download is the browser's, which may refuse it. */
  said = ''

  setup() {
    this.watch(health)
  }

  // The backup file, saved from the note itself: the learner needs it now, not after a search
  // through Settings.
  #backupButton() {
    return h(
      'p',
      null,
      h(
        'button',
        {
          type: 'button',
          class: 'btn',
          onclick: () => {
            downloadBackup()
            this.said = 'Download started. Look in your downloads folder.'
            this.update()
          }
        },
        'Save a backup file'
      ),
      this.said && ` ${this.said}`
    )
  }

  view() {
    const { damaged, stopped, waiting } = health.get()
    const names = damaged.map(nameOf)
    const readOnly = recordState().state === 'read-only'
    return h(
      'div',
      { class: 'page sys-note', role: 'status' },
      (names.length > 0 || stopped || waiting) &&
        h(
          'div',
          { class: 'page-col' },
          names.length > 0 &&
            h(
              'p',
              null,
              `Eruko could not read your saved ${names.join(' and ')} ${names.length > 1 ? 'records, so they start' : 'record, so it starts'} empty here. Eruko keeps the old text. Open Settings to save that text as a file.`
            ),
          waiting &&
            h(
              'p',
              null,
              'Another Eruko tab is not answering. That tab holds your record. Eruko keeps your changes here and saves them once that tab answers. Switch to it, or close it.'
            ),
          stopped &&
            readOnly &&
            h(
              'p',
              null,
              'Eruko opened your record read-only, because it found damage when it checked the record. Eruko saves nothing here. Save a backup file now.'
            ),
          stopped &&
            !readOnly &&
            h(
              'p',
              null,
              'Eruko has stopped saving, because a save failed. Your work since then is still on this page. Save a backup file before you close the page.'
            ),
          stopped && this.#backupButton()
        )
    )
  }
}
customElements.define('shell-store-note', ShellStoreNote)
