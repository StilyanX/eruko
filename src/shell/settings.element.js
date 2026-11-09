// Hides: Settings: the theme, the language once a translation exists, and the learner's records.
// A popover opened by Settings in the top bar, not a modal: the page stays live behind it, so a
// theme shows as it is chosen; a click outside or Esc closes it, and focus goes back to Settings.
// Text size is the browser's own. Each opening starts clean: a question or a word left from the
// last one is gone.
import { LANGUAGES, languageShown } from './languages.logic.js'
import { allRecords, restore } from '../record/backup.js'
import { backupDue, backupName, decodeBackup, namesIn } from '../kernel/backup.logic.js'
import { download, downloadBackup } from './download.js'
import { damagedRecords, forgetDamaged, health, persistedStore } from '../record/store.js'
import { KEYS } from '../kernel/storage.logic.js'
import { PARTS } from './registry.js'
import { Screen, h } from '../parts/view.dom.js'
import { THEMES, deviceContrast, setTheme, theme } from './theme.js'
import { language, setLanguage } from './language.js'

/**
 * One radio row per option; an option's third item is the language its text is written in.
 * @param {string} name
 * @param {[string, string, string?][]} options
 * @param {string} value
 * @param {(id: string) => void} onPick
 */
const radios = (name, options, value, onPick) =>
  options.map(([id, text, lang]) =>
    h(
      'label',
      { key: id, class: 'radio' },
      h('input', { type: 'radio', name, '.checked': value === id, onchange: () => onPick(id) }),
      lang ? h('span', { lang, dir: 'auto' }, text) : text
    )
  )

/**
 * What the learner reads when a file cannot be loaded as a backup.
 * @type {Record<import('../kernel/backup.logic.js').BackupError, string>}
 */
const BACKUP_ERRORS = {
  'not-backup': 'This file is not an Eruko backup. Choose a file saved with Save a backup file.',
  newer: 'This backup comes from a newer Eruko. Reload the page to update, then load it.',
  empty: 'This backup holds no record, so Eruko loads nothing.'
}

/** @param {string} iso */
const dateOf = iso =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
/** @param {string[]} names */
const list = names => names.join(', ')
// A download is handed to the browser, which may still refuse it: the words claim no more.
const STARTED = 'Download started. Look in your downloads folder.'
// A theme the browser's key store could not keep holds only for this visit.
const NOT_KEPT = 'This browser is not keeping your choice. It holds until you close the page.'

/** @typedef {{ text: string, yes: string, no?: string, run: () => void }} Ask */

export class ShellSettings extends Screen {
  // Settings is the panel itself.
  static box = true

  /** @type {Ask | null} */
  ask = null
  msg = ''

  setup() {
    this.id = 'settings'
    this.setAttribute('popover', 'auto')
    this.setAttribute('role', 'dialog')
    this.setAttribute('aria-labelledby', 'set-title')
    this.className = 'panel'
    this.watch(theme)
    this.watch(deviceContrast)
    this.watch(language)
    this.watch(health)
    this.watch(persistedStore(KEYS.backup))
    this.addEventListener('toggle', e => {
      if (e instanceof ToggleEvent && e.newState === 'closed' && e.target === this) {
        this.ask = null
        this.msg = ''
        this.update()
        // Closed by a press outside on no control: focus goes back to Settings, as Esc sends it.
        requestAnimationFrame(() => {
          const at = document.activeElement
          const button = document.querySelector('.lv-topbar-button')
          if (!at || at === document.body || at.id === 'main' || this.contains(at))
            if (button instanceof HTMLElement) button.focus()
        })
      }
    })
  }

  /** @param {string} text */
  done(text) {
    this.ask = null
    this.msg = text
    this.update()
  }

  // The question's buttons are gone once pressed: focus stays in the list, on the Load row.
  /** @param {() => void} run */
  answer(run) {
    run()
    requestAnimationFrame(() => {
      const load = this.querySelector('.set-load')
      if (load instanceof HTMLElement) load.focus()
    })
  }

  // The text of a record Eruko could not read, as it was stored, to keep or to have repaired.
  // It is forgotten only once the learner says the file arrived: it is the one copy.
  saveDamaged() {
    const text = JSON.stringify({ app: 'eruko', unreadable: damagedRecords() }, null, 1)
    download(new Blob([text], { type: 'application/json' }), backupName(new Date(), 'unreadable'))
    this.msg = ''
    this.ask = {
      text: `${STARTED} Is the file there? Eruko then forgets the text it could not read.`,
      yes: 'The file is there',
      no: 'Keep the text',
      run: () => {
        forgetDamaged()
        this.done('')
      }
    }
    this.update()
  }

  /** @param {Event} e */
  async load(e) {
    const input = e.target
    if (!(input instanceof HTMLInputElement)) return
    const picked = input.files?.[0]
    input.value = ''
    if (!picked) return
    const read = decodeBackup(await picked.text(), PARTS)
    if (!read.ok) return this.done(BACKUP_ERRORS[read.error])
    const { saved, records } = read.value
    const held = namesIn(records, PARTS)
    const emptied = namesIn(allRecords(PARTS), PARTS).filter(n => !held.includes(n))
    this.msg = ''
    this.ask = {
      text: [
        `Load the backup${saved ? ` of ${dateOf(saved)}` : ''}? It holds ${list(held)}.`,
        emptied.length
          ? `It replaces every record here and empties ${list(emptied)}.`
          : 'It replaces every record here.',
        'To keep what is here, save a backup file first.'
      ].join(' '),
      yes: 'Load it',
      run: () => {
        restore(records, PARTS)
        this.done('Your records now come from the backup.')
      }
    }
    this.update()
    // The question comes in place of the row pressed: focus goes into it, on the safe answer.
    requestAnimationFrame(() => {
      const keep = this.querySelector('.set-ask button')
      if (keep instanceof HTMLElement) keep.focus()
    })
  }

  /** The head: the title and Close. */
  #head() {
    return h(
      'div',
      { class: 'set-head' },
      h('h2', { id: 'set-title' }, 'Settings'),
      h(
        'button',
        { type: 'button', class: 'btn', popovertarget: 'settings', popovertargetaction: 'hide' },
        'Close'
      )
    )
  }

  /**
   * The language: one row naming the chosen language in itself, which opens the whole list in
   * place, each name marked with its own language. Picking one closes the list. It is hidden
   * until a translation exists: the choice is kept, but it would change nothing.
   */
  #languages() {
    const tag = language.get()
    const current = LANGUAGES.find(([t]) => t === tag)?.[1] ?? tag
    return h(
      'fieldset',
      { class: 'set-group' },
      h('legend', { class: 'label set-legend' }, 'Language'),
      h(
        'details',
        { class: 'set-lang' },
        h('summary', { class: 'radio' }, h('span', { lang: tag, dir: 'auto' }, current)),
        h(
          'div',
          { class: 'set-lang-list' },
          radios(
            'language',
            LANGUAGES.map(/** @returns {[string, string, string]} */ ([t, name]) => [t, name, t]),
            tag,
            t => {
              setLanguage(t)
              const details = this.querySelector('.set-lang')
              if (details instanceof HTMLDetailsElement) details.open = false
            }
          )
        )
      )
    )
  }

  /** The question a load asks first, in place, with what the file holds. */
  #asked() {
    const ask = this.ask
    return (
      ask &&
      h(
        'div',
        { class: 'set-ask', role: 'group', 'aria-labelledby': 'set-ask-text' },
        h('p', { id: 'set-ask-text' }, ask.text),
        h(
          'div',
          { class: 'actions' },
          h(
            'button',
            {
              type: 'button',
              class: 'btn',
              onclick: () =>
                this.answer(() => {
                  this.ask = null
                  this.update()
                })
            },
            ask.no ?? 'Keep what is here'
          ),
          h(
            'button',
            { type: 'button', class: 'btn btn-primary', onclick: () => this.answer(ask.run) },
            ask.yes
          )
        )
      )
    )
  }

  /**
   * The learner's records, which live in this browser only: saved to one file, or loaded back
   * from one. Loading replaces what is here, so it asks first.
   */
  #records() {
    const { damaged } = health.get()
    const saved = persistedStore(KEYS.backup).get().saved
    /**
     * @param {string} text
     * @param {() => void} onclick
     * @param {string} [cls]
     */
    const row = (text, onclick, cls = '') =>
      h('button', { type: 'button', class: `radio set-row${cls}`, onclick }, text)
    const pick = () => {
      const input = this.querySelector('input[type=file]')
      if (input instanceof HTMLInputElement) input.click()
    }
    return h(
      'fieldset',
      { class: 'set-group' },
      h('legend', { class: 'label set-legend' }, 'Your records'),
      h(
        'p',
        { class: 'set-note set-lead' },
        'Only this browser keeps your records. Clearing its data erases them.'
      ),
      h(
        'p',
        { class: 'set-note' },
        typeof saved !== 'string'
          ? 'You have not saved a backup file yet. Save one now.'
          : backupDue(saved, Date.now())
            ? `Your last backup file is from ${dateOf(saved)}. Save a new one.`
            : `Your last backup file is from ${dateOf(saved)}.`
      ),
      row('Save a backup file', () => {
        downloadBackup()
        this.done(STARTED)
      }),
      row('Load a backup file', pick, ' set-load'),
      damaged.length > 0 && row('Save the record Eruko could not read', () => this.saveDamaged()),
      this.#asked(),
      h('p', { class: 'set-note', role: 'status' }, this.msg),
      h('input', {
        type: 'file',
        accept: '.json,application/json',
        hidden: true,
        onchange: (/** @type {Event} */ e) => void this.load(e)
      })
    )
  }

  view() {
    return [
      this.#head(),
      h(
        'fieldset',
        { class: 'set-group set-theme' },
        h('legend', { class: 'label set-legend' }, 'Theme'),
        // Under the device's ask every theme is high contrast, so Dark and Dark, high contrast
        // show one page: the line says why.
        deviceContrast.get() &&
          h(
            'p',
            { class: 'set-note set-lead' },
            'Your device asks for high contrast. Dark and Light are high contrast too.'
          ),
        radios('theme', THEMES, theme.get(), id => {
          const picked = THEMES.find(([t]) => t === id)?.[0]
          if (!picked) return
          if (!setTheme(picked)) this.done(NOT_KEPT)
          else if (this.msg === NOT_KEPT) this.done('')
        })
      ),
      languageShown() && this.#languages(),
      this.#records()
    ]
  }
}
customElements.define('shell-settings', ShellSettings)
