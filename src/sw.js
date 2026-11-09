// Hides: what the app keeps for use with no connection, and when a new version takes over. A
// module worker: its list of files, each with the start of its SHA-256, is the generated
// sw-manifest.gen.js, so a changed file is a new list and a new worker. It waits until every
// Eruko tab is closed before taking over: a new version never changes or reloads a page that is
// open.
//
// - Installing, the worker fetches the page and every file of the list once, so any page opens
//   offline, not only the pages already opened. A file kept by an earlier worker with the same
//   hash is not fetched again; a file whose bytes do not match the list's hash, or that fails to
//   arrive, is fetched when first asked for.
// - A file of the list comes from the worker's copy once kept.
// - A page is fetched from the network first, so a new version shows on the next open; offline,
//   the last page fetched is used, and every file kept still loads.
// - A script's font face is on no list: a page asks only for the faces of the scripts it shows, so
//   each face is kept once a page first fetches it, and served from that copy after.
// - A new worker, taking over, drops the copies its list no longer names.
import { FILES } from './sw-manifest.gen.js'

/** The worker's own scope: sw.js runs only as a service worker. */
const worker = (
  /** @returns {ServiceWorkerGlobalScope} */ () => {
    if (self instanceof ServiceWorkerGlobalScope) return self
    throw new Error('sw.js runs as a service worker.')
  }
)()

const BASE = new URL('./', worker.location.href).pathname
const CACHE = 'eruko'
const SHELL = `${BASE}index.html`
const LISTED = new Map(Object.entries(FILES))
// The faces of the scripts the text is set in, each kept once first fetched.
const FACE = /^style\/fonts\/[^?#]+\.woff2$/

/**
 * The key a file of the list is kept under: its address with its hash, so each version of a
 * file is its own copy.
 * @param {string} path the file's path inside the app
 */
const keyOf = path => `${BASE}${path}?sha=${LISTED.get(path)}`

/**
 * The start of a body's SHA-256, as the list writes it.
 * @param {ArrayBuffer} bytes
 */
async function hashOf(bytes) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))
  return [...digest.slice(0, 8)].map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Keep a response under a file's key when its bytes are the listed ones.
 * @param {Cache} cache
 * @param {string} path
 * @param {Response} response
 */
async function keep(cache, path, response) {
  if (!response.ok || response.redirected) return
  if ((await hashOf(await response.clone().arrayBuffer())) !== LISTED.get(path)) return
  await cache.put(keyOf(path), response)
}

worker.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all([
        // The page itself, fresh: the first visit never passed through this worker. Not reached
        // now, it is kept on the next visit online.
        // Past the browser's own copy too: a host may let it keep the page for minutes.
        cache.add(new Request(SHELL, { cache: 'no-cache' })).then(
          () => true,
          () => false
        ),
        ...[...LISTED.keys()].map(path =>
          cache.match(keyOf(path)).then(
            async hit =>
              Boolean(hit) ||
              fetch(`${BASE}${path}`, { cache: 'no-cache' }).then(
                response => keep(cache, path, response),
                // Not reached now: fetched when first asked for.
                () => false
              )
          )
        )
      ])
    )
  )
})

worker.addEventListener('activate', event => {
  const wanted = new Set([SHELL, ...[...LISTED.keys()].map(keyOf)])
  /** @param {URL} url */
  const keptFace = url => FACE.test(url.pathname.slice(BASE.length))
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache =>
        cache.keys().then(requests =>
          Promise.all(
            requests
              .filter(r => {
                const url = new URL(r.url)
                return !wanted.has(`${url.pathname}${url.search}`) && !keptFace(url)
              })
              .map(r => cache.delete(r))
          )
        )
      )
      // The page's request starts while the worker wakes, not after.
      .then(() => worker.registration.navigationPreload?.enable())
      .then(() => worker.clients.claim())
  )
})

worker.addEventListener('fetch', event => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== worker.location.origin || !url.pathname.startsWith(BASE)) return
  const path = url.pathname.slice(BASE.length)
  if (request.mode === 'navigate') event.respondWith(page(event))
  else if (LISTED.has(path)) event.respondWith(file(request, path))
  else if (FACE.test(path)) event.respondWith(face(request))
})

/** @param {FetchEvent} event */
async function page(event) {
  const cache = await caches.open(CACHE)
  try {
    const response = (await event.preloadResponse) || (await fetch(event.request))
    // Only Eruko's own page is kept for offline: not a redirect, and not another network's
    // sign-in page answering in its place.
    const html = (response.headers.get('content-type') ?? '').includes('text/html')
    if (response.ok && html && !response.redirected) await cache.put(SHELL, response.clone())
    return response
  } catch (err) {
    const shell = await cache.match(SHELL)
    if (shell) return shell
    throw err
  }
}

/**
 * @param {Request} request
 * @param {string} path
 */
async function file(request, path) {
  const cache = await caches.open(CACHE)
  const hit = await cache.match(keyOf(path))
  if (hit) return hit
  const response = await fetch(request)
  await keep(cache, path, response.clone())
  return response
}

/**
 * A script's font face: the copy kept when a page first fetched it, else fetched and kept. A
 * face's folder names its version, so a kept copy never goes stale.
 * @param {Request} request
 */
async function face(request) {
  const cache = await caches.open(CACHE)
  const hit = await cache.match(request)
  if (hit) return hit
  const response = await fetch(request)
  if (response.ok && !response.redirected) await cache.put(request, response.clone())
  return response
}
