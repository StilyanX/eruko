// Hides: the theme. It is kept in the browser's small key store, so index.html's first script can
// set it before the first paint. "System" follows the device live; high contrast is picked here or
// asked for by the device, and changes the ground the browser's own bar takes. A pick made in
// another tab shows here at once.
import { createStore } from '../record/store.js'
import { KEYS } from '../kernel/storage.logic.js'

/** @typedef {'system' | 'dark' | 'light' | 'dark-more' | 'light-more'} Theme */

/**
 * Every theme with the words Settings shows for it.
 * @type {[id: Theme, label: string][]}
 */
export const THEMES = [
  ['system', 'Your device decides'],
  ['dark', 'Dark'],
  ['light', 'Light'],
  ['dark-more', 'Dark, high contrast'],
  ['light-more', 'Light, high contrast']
]

/** @returns {Theme} */
function savedTheme() {
  try {
    const saved = localStorage.getItem(KEYS.theme)
    const theme = THEMES.find(([id]) => id === saved)?.[0]
    return theme ?? 'system'
  } catch {
    // Key store off: the device decides.
    return 'system'
  }
}

const prefersLight = matchMedia('(prefers-color-scheme: light)')
const prefersContrast = matchMedia('(prefers-contrast: more)')

/** @param {Theme} theme */
function apply(theme) {
  const root = document.documentElement
  const scheme =
    theme === 'system' ? (prefersLight.matches ? 'light' : 'dark') : theme.split('-')[0]
  root.setAttribute('data-theme', scheme ?? 'dark')
  if (theme.endsWith('-more') || prefersContrast.matches) root.setAttribute('data-contrast', 'more')
  else root.removeAttribute('data-contrast')
  const bg = getComputedStyle(root).getPropertyValue('--bg').trim()
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
}

/** The theme chosen, as a store. */
export const theme = createStore(savedTheme())

/** Whether the device asks for more contrast, which every theme then follows, as a store. */
export const deviceContrast = createStore(prefersContrast.matches)

apply(theme.get())
prefersLight.addEventListener('change', () => apply(theme.get()))
prefersContrast.addEventListener('change', () => {
  deviceContrast.set(prefersContrast.matches)
  apply(theme.get())
})
addEventListener('storage', e => {
  if (e.key !== KEYS.theme) return
  theme.set(savedTheme())
  apply(theme.get())
})

/** @param {Theme} next */
export function setTheme(next) {
  apply(next)
  theme.set(next)
  try {
    localStorage.setItem(KEYS.theme, next)
    return true
  } catch {
    // Key store off: the choice holds for this visit.
    return false
  }
}
