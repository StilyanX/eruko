// Hides: the Navigation API. Every move inside the app (a link, Back and Forward, a reload) is
// one navigation: the router takes it, shows the page the address names, puts the page back where
// the reader left it, and moves focus to its title. Nothing else in the app reads `navigation`;
// units use plain links.

import { BASE, linkTo } from '../parts/links.dom.js'

export { BASE, linkTo }

/**
 * A page's slug from its address: the path after the app's own, with no slash at either end.
 * @param {URL | Location} url
 */
export const slugOf = url =>
  decodeURIComponent(url.pathname.startsWith(BASE) ? url.pathname.slice(BASE.length) : '').replace(
    /^\/+|\/+$/g,
    ''
  )

/**
 * What a page keeps in its own history entry (a search typed, the sections opened), so Back, a
 * reload or Forward returns to it as it was left.
 * @returns {Record<string, unknown>}
 */
export function entryState() {
  const state = navigation.currentEntry?.getState()
  return typeof state === 'object' && state !== null
    ? Object.fromEntries(Object.entries(state))
    : {}
}

/**
 * Keep `patch` in this history entry, beside what is there.
 * @param {Record<string, unknown>} patch
 */
export function keepInEntry(patch) {
  navigation.updateCurrentEntry({ state: { ...entryState(), ...patch } })
}

/**
 * Go to an address inside the app, replacing this history entry when `replace`.
 * @param {string} to as the registry writes it
 * @param {{ replace?: boolean }} [how]
 */
export function go(to, how = {}) {
  void navigation.navigate(linkTo(to), { history: how.replace ? 'replace' : 'push' })
}

// Where each page was left in this visit, by its path, for a link back to it.
/** @type {Map<string, number>} */
const left = new Map()

/** Note where the page now shown stands, in memory and in its history entry. */
function noteScroll() {
  left.set(location.pathname, scrollY)
  try {
    keepInEntry({ scroll: scrollY })
    return true
  } catch {
    // An entry that cannot be written now (mid-navigation): the next scroll writes it.
    return false
  }
}

// How long the page keeps putting the reader back at the kept place while it draws.
const LAND_FOR_MS = 5000
// How long the reader's scrolling rests before the place is kept.
const SCROLL_REST_MS = 200

/**
 * Scroll to `y` once the page is long enough to hold it: tried each frame for at most five
 * seconds, or until the reader moves the page.
 * @param {number} y
 */
function landAt(y) {
  scrollTo(0, y)
  if (!y || Math.abs(scrollY - y) <= 1) return
  let put = scrollY
  /** @type {number} */
  let frame = 0
  const moves = ['wheel', 'touchstart', 'keydown', 'pointerdown']
  const stop = () => {
    cancelAnimationFrame(frame)
    clearTimeout(end)
    moves.forEach(m => removeEventListener(m, stop))
  }
  const again = () => {
    // A page found elsewhere than the last try left it was moved by the reader, and stays.
    if (Math.abs(scrollY - put) > 1) return stop()
    scrollTo(0, y)
    put = scrollY
    if (Math.abs(put - y) <= 1) return stop()
    frame = requestAnimationFrame(again)
  }
  frame = requestAnimationFrame(again)
  const end = setTimeout(stop, LAND_FOR_MS)
  moves.forEach(m => addEventListener(m, stop, { passive: true }))
}

/**
 * Focus the new page's title, so a screen reader starts there and Tab starts from the top.
 */
function focusTitle() {
  const h1 = document.querySelector('main h1')
  if (!(h1 instanceof HTMLElement) || h1.contains(document.activeElement)) return
  h1.tabIndex = -1
  h1.focus({ preventScroll: true })
}

/**
 * Start the router. `show(url, same)` draws the page `url` names; `same` is true when only its
 * query or its history state changed, for the page shown to read again in place.
 * @param {(url: URL, same: boolean) => void | Promise<void>} show
 */
export function startRouter(show) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let wait
  addEventListener(
    'scroll',
    () => {
      clearTimeout(wait)
      wait = setTimeout(noteScroll, SCROLL_REST_MS)
    },
    { passive: true }
  )
  navigation.addEventListener('navigate', e => {
    if (!e.canIntercept || e.hashChange || e.downloadRequest !== null || e.formData) return
    const url = new URL(e.destination.url)
    if (!url.pathname.startsWith(BASE)) return
    const same = url.pathname === location.pathname
    if (!same) left.set(location.pathname, scrollY)
    e.intercept({
      focusReset: 'manual',
      scroll: 'manual',
      async handler() {
        await show(url, same)
        if (same) return
        const kept =
          e.navigationType === 'traverse' || e.navigationType === 'reload'
            ? entryState().scroll
            : undefined
        landAt(typeof kept === 'number' ? kept : (left.get(url.pathname) ?? 0))
        if (!url.hash) requestAnimationFrame(focusTitle)
      }
    })
  })
  // The first page: where its entry was left, after a reload.
  const url = new URL(location.href)
  void Promise.resolve(show(url, false)).then(() => {
    const kept = entryState().scroll
    if (typeof kept === 'number') landAt(kept)
  })
}
