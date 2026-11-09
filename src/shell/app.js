// Hides: the frame around every page and which page an address names. Around every page: a link
// past the bar to the page itself (WCAG 2.4.1), the bar, the note about the record, then the page.
// The bar stays while a page loads and when it fails, so the way back is always there. Every
// page's own content is one <main id="main">.
import { DISCIPLINES, pageBySlug, unitBySlug } from './registry.js'
import { isChunkError } from './load-failure.js'
import { ShellTopBar } from './top-bar.element.js'
import './store-note.element.js'
import './loading.element.js'
import './settings.element.js'
import './explore.element.js'
import './unit-page.element.js'
import { failure } from './failure.element.js'
import { openUnitSheets, pageElement, warmPage } from './page.js'
import { go, slugOf, startRouter } from './router.js'

const root = document.getElementById('root')
if (!root) throw new Error('The page has no #root.')

const skip = document.createElement('a')
skip.href = '#main'
skip.className = 'skip-link'
skip.textContent = 'Skip to the content'
skip.addEventListener('click', e => {
  e.preventDefault()
  document.getElementById('main')?.focus()
})
const bar = new ShellTopBar()
const note = document.createElement('shell-store-note')
const view = document.createElement('div')
view.style.display = 'contents'
root.replaceChildren(document.createElement('shell-settings'), skip, bar, note, view)

// A page that fails to draw is replaced by the failure screen; the bar and Settings stand.
view.addEventListener('screen-error', e => {
  const error = e instanceof CustomEvent ? e.detail : null
  console.error(error)
  view.replaceChildren(failure(isChunkError(error) ? 'chunk' : 'content'))
})

/**
 * The page an address names, as an element.
 * @param {string} slug
 * @returns {Promise<HTMLElement>}
 */
async function pageAt(slug) {
  // Off a unit's study page no unit's own styles apply.
  if (slug.split('/').length !== 4) void openUnitSheets([])
  if (slug === '') return explore('')
  const parts = slug.split('/')
  if (parts[0] !== 'explore') return failure('not-found')
  if (parts.length === 2 && DISCIPLINES.some(d => d.id === parts[1])) return explore(parts[1] ?? '')
  if (parts.length === 3 && unitBySlug[slug])
    return Object.assign(document.createElement('shell-unit-page'), { slug })
  if (parts.length === 4 && pageBySlug[slug]) return pageElement(slug)
  return failure('not-found')
}

/** @param {string} filter */
const explore = filter => Object.assign(document.createElement('shell-explore'), { filter })

/**
 * Show the page `url` names, or let the page shown read its address again when only its query
 * or its state changed.
 * @param {URL} url
 * @param {boolean} same
 */
async function show(url, same) {
  const slug = slugOf(url)
  if (slug === 'explore') return go('/', { replace: true })
  bar.update()
  const shown = view.firstElementChild
  if (same && shown && 'reread' in shown && typeof shown.reread === 'function')
    return shown.reread()
  try {
    const page = pageAt(slug)
    // The old page leaves at once; the Loading screen holds the place while the new one's code comes.
    view.replaceChildren(document.createElement('shell-loading'))
    view.replaceChildren(await page)
  } catch (error) {
    console.error(error)
    view.replaceChildren(failure(isChunkError(error) ? 'chunk' : 'content'))
  }
}

// A link pointed at, focused or touched starts loading its page's code and data, so the page is
// usually there by the time the click lands.
/** @param {Event} e */
const onLink = e => {
  const a = e.target instanceof Element ? e.target.closest('a[href]') : null
  if (a instanceof HTMLAnchorElement && a.origin === location.origin)
    warmPage(slugOf(new URL(a.href)))
}
for (const type of ['pointerover', 'focusin', 'touchstart'])
  document.addEventListener(type, onLink, { passive: true })
warmPage(slugOf(location))

startRouter(show)
