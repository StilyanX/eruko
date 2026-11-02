// Serves the app with no build: src/ is the served root, at /eruko/. A path under /eruko/ that
// is no file is the app's page (its router reads the address), and / leads to /eruko/.
// node scripts/serve.mjs [port], then open http://127.0.0.1:<port>/eruko/ (port 9999 by default).
// It also keeps the record every device shares (/eruko/record/sync, see SYNC below).
import { createServer } from 'node:http'
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'src')
const BASE = '/eruko/'
const PORT = Number(process.argv[2] ?? 9999)
/** @type {Record<string, string>} */
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm'
}

// The shared record: every part by key, { text, version }, as src/record/index.js syncs it. A save
// names the version it was based on and is refused when the part has moved on, so no device writes
// over another's work; the text a refused or forced save would lose is kept in conflicts/.
// ERUKO_DATA=off keeps no shared record: each browser keeps its own, as the tests need; sync answers 204
// (no body), which the page reads as the computer out of reach without logging a failed request.
const DATA = process.env.ERUKO_DATA ?? path.join(homedir(), '.local/share/eruko')
const SHARED = path.join(DATA, 'record.json')
const SYNC = `${BASE}record/sync`
if (DATA !== 'off') mkdirSync(path.join(DATA, 'conflicts'), { recursive: true })
/**
 * Read from the file at every request: more than one server (the phone's, the computer's) may share it.
 * @returns {Record<string, { text: string, version: number }>}
 */
const readShared = () => {
  try {
    return JSON.parse(readFileSync(SHARED, 'utf8'))
  } catch {
    return {}
  }
}

/** @param {string} key @param {string} text */
const keep = (key, text) =>
  writeFileSync(
    path.join(DATA, 'conflicts', `${Date.now()}-${key.replace(/[^\w-]/g, '_')}.json`),
    text
  )

/**
 * One save: { key, text, base, version, force?, keep? }.
 * @param {any} m
 */
function syncPut(m) {
  if (typeof m?.key !== 'string' || !m.key.startsWith('aether-') || typeof m.text !== 'string')
    return { ok: false, error: 'bad save' }
  if (!Number.isInteger(m.base) || !Number.isInteger(m.version) || m.version < 1)
    return { ok: false, error: 'bad save' }
  const shared = readShared()
  const now = shared[m.key] ?? { text: '', version: 0 }
  if (now.version !== m.base && !m.force) {
    if (m.keep && m.text !== now.text) keep(m.key, m.text)
    return { ok: false, now }
  }
  if (m.force && now.version > 0 && now.text !== m.text) keep(m.key, now.text)
  shared[m.key] = { text: m.text, version: m.version }
  writeFileSync(`${SHARED}.${process.pid}`, JSON.stringify(shared))
  renameSync(`${SHARED}.${process.pid}`, SHARED)
  return { ok: true }
}

/** @param {import('node:http').IncomingMessage} req @param {import('node:http').ServerResponse} res */
function sync(req, res) {
  const reply = (/** @type {unknown} */ body) =>
    res
      .writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
      .end(JSON.stringify(body))
  if (req.method === 'GET') return reply(readShared())
  if (req.method !== 'POST') return void res.writeHead(405).end()
  let body = ''
  req.on('data', chunk => {
    body += chunk
    if (body.length > 20e6) req.destroy()
  })
  req.on('end', () => {
    try {
      reply(syncPut(JSON.parse(body)))
    } catch {
      reply({ ok: false, error: 'bad save' })
    }
  })
}

/** @param {string} file */
const isFile = file =>
  stat(file).then(
    s => s.isFile(),
    () => false
  )

/**
 * The file a path names, or null when it names none.
 * @param {string} pathname
 */
function fileOf(pathname) {
  return pathname.startsWith(BASE) ? path.join(SRC, pathname.slice(BASE.length)) : null
}

// The app's address before it was named Eruko. A browser that kept the old app finds a worker here
// that clears the old copy, removes itself and opens each tab at the new address; every other old
// path moves to the new one (308 keeps a sync's POST).
const OLD = '/aether/'
const RETIRE = `self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil((async () => {
  await caches.delete('aether')
  await self.registration.unregister()
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url.replace('${OLD}', '${BASE}'))
})()))
`

createServer((req, res) => {
  void (async () => {
    const url = new URL(req.url ?? '/', 'http://localhost')
    if (url.pathname === `${OLD}sw.js`)
      return void res
        .writeHead(200, { 'content-type': TYPES['.js'], 'cache-control': 'no-store' })
        .end(RETIRE)
    if (url.pathname.startsWith(OLD) || url.pathname === OLD.slice(0, -1))
      return void res
        .writeHead(308, { location: `${BASE}${url.pathname.slice(OLD.length)}${url.search}` })
        .end()
    if (url.pathname === SYNC)
      return DATA === 'off' ? void res.writeHead(204).end() : sync(req, res)
    if (url.pathname === '/' || url.pathname === BASE.slice(0, -1))
      return void res.writeHead(302, { location: BASE }).end()
    let file = fileOf(decodeURIComponent(url.pathname))
    // A logic file's test (<stem>.test.js) sits beside it in src/ and is never one of the app's files.
    if (!file || !file.startsWith(SRC) || file.endsWith('.test.js'))
      return void res.writeHead(404).end('Not found')
    if (!(await isFile(file)) && url.pathname.startsWith(BASE)) file = path.join(SRC, 'index.html')
    if (!(await isFile(file))) return void res.writeHead(404).end('Not found')
    res.writeHead(200, {
      'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream',
      'cache-control': 'no-store'
    })
    res.end(await readFile(file))
  })()
}).listen(PORT, '127.0.0.1', () => console.log(`Eruko at http://127.0.0.1:${PORT}${BASE}`))
