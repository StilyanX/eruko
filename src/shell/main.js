// Hides: how the app starts. The record opens first, so every part is in memory at the first
// paint; then the shell takes the page. A record that could not be opened leaves one plain note
// instead, and so, until it answers, does another tab holding the record that does not answer. Last,
// the service worker is registered, so the app opens offline after the first visit.
import { onRecord, openRecords, recordState } from '../record/index.js'

const found = document.getElementById('root')
if (!found) throw new Error('The page has no #root.')
const root = found

/** @type {Record<string, [string, string]>} */
const NOTES = {
  waiting: [
    'Another Eruko tab is not answering',
    'That tab holds your record. Switch to it, or close it, and this page opens.'
  ],
  failed: [
    'Eruko could not open your record',
    'Eruko deleted nothing. Reload the page. If this note comes back, check that your browser lets this site store data.'
  ]
}

/**
 * Show a plain note in place of the app.
 * @param {string} state
 */
function showNote(state) {
  const note = NOTES[state]
  if (!note) return
  const main = document.createElement('main')
  main.id = 'main'
  main.className = 'page'
  const col = document.createElement('div')
  col.className = 'page-col'
  const h1 = document.createElement('h1')
  h1.textContent = note[0]
  const p = document.createElement('p')
  p.textContent = note[1]
  col.append(h1, p)
  if (state === 'failed' && recordState().why) {
    const why = document.createElement('p')
    why.className = 'lrn-ss-note'
    why.textContent = recordState().why
    col.append(why)
  }
  main.append(col)
  root.replaceChildren(main)
}

const stopWaiting = onRecord(e => {
  if (e.type === 'answering' && !e.ok) showNote('waiting')
})
const state = await openRecords(new URL('record/', document.baseURI).pathname)
stopWaiting()
if (state === 'failed') showNote(state)
else await import('./app.js')

// The app keeps what it has downloaded (sw.js), so every page opens with no connection after the
// first visit. A browser with no module service worker runs the app all the same. Coming back to
// the tab looks for a new version, which waits until every Eruko tab is closed (sw.js).
if ('serviceWorker' in navigator) {
  const sw = navigator.serviceWorker
  sw.register(new URL('sw.js', document.baseURI), { type: 'module', updateViaCache: 'none' })
    .then(registration =>
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') registration.update().catch(() => {})
      })
    )
    .catch(() => {})
}
