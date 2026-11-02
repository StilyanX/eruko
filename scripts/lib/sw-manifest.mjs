// Hides: which files of src/ the service worker keeps, and how their manifest is written, for
// scripts/gen/sw-manifest.mjs and tests/sw-manifest.test.mjs alike. Every file the app may ask
// for is kept: the page, its code, styles, faces, content and the vendored SQLite and hls.js.
// Left out: the worker and this manifest, what the browser never asks for (the vendored
// files' records, licences, notices and types, the units' YAML sources, the specs their figures
// are drawn from and the maps of their sources' problems, notes in Markdown, the tests beside the
// logic),
// and the font faces of the scripts, which the worker keeps once a page first fetches one.
import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { generated } from './generated.mjs'

export const SRC = path.resolve(import.meta.dirname, '..', '..', 'src')
export const OUT = path.join(SRC, 'sw-manifest.gen.js')

const LEFT_OUT =
  /^(sw\.js|sw-manifest\.gen\.js)$|(^|\/)(VENDOR\.json|LICENSE|NOTICE)$|\.d\.ts$|\.yaml$|\.md$|\.test\.js$|^units\/[^/]+\/content\/(figures|coverage)\/[^/]+\.json$|^style\/fonts\/.*\.woff2$/

/** @param {string | Buffer} data */
const sha = data => createHash('sha256').update(data).digest('hex')

/**
 * Every kept file, by its path inside src/, with the first 16 hex digits of its SHA-256.
 * @returns {Record<string, string>}
 */
export function filesOf() {
  const paths = readdirSync(SRC, { recursive: true, withFileTypes: true })
    .filter(e => e.isFile())
    .map(e => path.relative(SRC, path.join(e.parentPath, e.name)).split(path.sep).join('/'))
    .filter(p => !LEFT_OUT.test(p))
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
  return Object.fromEntries(paths.map(p => [p, sha(readFileSync(path.join(SRC, p))).slice(0, 16)]))
}

/**
 * The manifest module's text: its header names the generator and the hash of what follows.
 * @param {Record<string, string>} files
 */
export function manifestOf(files) {
  return generated(
    'scripts/gen/sw-manifest.mjs',
    `// FILES: every file the service worker keeps, by its path inside the app, with the start of its
// SHA-256; a new hash is a new file, and a new list a new worker.
// prettier-ignore
export const FILES = ${JSON.stringify(files)}
`
  )
}
