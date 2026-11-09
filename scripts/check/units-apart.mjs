#!/usr/bin/env node
// Hides: how the code is kept free of any one unit, so a unit is added or removed with its own
// files alone.
//   Shared code   a file that is no unit's own (src/ outside units/, and every script, test and
//                 browser test whose name does not start with a unit's folder name) names no
//                 unit: no unit folder as a path or a quoted name, and no unit's title. The
//                 export (scripts/export-public.mjs) is no shared code: it names the units it strips.
//   Left out    every path in scripts/public-exclude.txt is left out of the copy; no
//                 other file names a unit those paths remove, nor its discipline, in any case.
//                 Generated files are written again by `npm run gen` once the paths are gone.
// A unit's own files: those under src/units/<unit>/ (its logic's tests among them),
// scripts/**/<unit>.mjs and <unit>-*, tests/<unit>-*, tests/lib/<unit>-*, e2e/<unit>.spec.mjs and
// e2e/<unit>-*.
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { UNITS } from '../../src/shell/registry.js'
import { FOLDERS } from '../../src/shell/units.gen.js'

const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], {
  encoding: 'utf8'
})
  .split('\n')
  .filter(Boolean)

/** @param {string} f */
const ownerOf = f => {
  const unit = /^src\/units\/([^/]+)\//.exec(f)?.[1]
  if (unit) return unit
  const name = f.split('/').at(-1) ?? ''
  if (!/^(scripts|tests|e2e)\//.test(f)) return null
  return (
    FOLDERS.find(
      u => name === `${u}.mjs` || name.startsWith(`${u}-`) || name.startsWith(`${u}.`)
    ) ?? null
  )
}

// Files no rule reads: generated, vendored, binary, or the lock file.
const SKIP =
  /(\.gen\.js|\.woff2|\.png|\.wasm|\.svg|package-lock\.json)$|^src\/record\/sqlite-|^scripts\/vendor\/|^src\/style\/fonts\/|\/hls-[^/]+\//
/** The page's generated lists (stylesheets and preloads) are written by scripts/gen/preload.mjs. */
const withoutGenerated = (/** @type {string} */ f, /** @type {string} */ text) =>
  f === 'src/index.html'
    ? text.replace(/<!-- preload: generated[\s\S]*?<!-- \/preload -->/, '')
    : text

/** The export, which strips the units it leaves out and so names them. */
const EXPORT = 'scripts/export-public.mjs'
const CODE = /\.(js|mjs|css|html|json)$/

/** @type {string[]} */
const failures = []

// Shared code names no unit.
for (const f of files) {
  if (
    ownerOf(f) ||
    SKIP.test(f) ||
    f === EXPORT ||
    !CODE.test(f) ||
    !/^(src|scripts|tests|e2e)\//.test(f)
  )
    continue
  const text = withoutGenerated(f, readFileSync(f, 'utf8'))
  for (const [i, unit] of UNITS.entries()) {
    const folder = FOLDERS[i] ?? ''
    const named = new RegExp(
      `units/${folder}\\b|['"\`/]${folder}['"\`/]|\\b${unit.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`
    )
    const line = text.split('\n').findIndex(l => named.test(l))
    if (line >= 0) failures.push(`Shared code: ${f}:${line + 1} names the unit ${unit.title}`)
  }
}

// No file left in names a unit the list leaves out.
// A copy with no list leaves no unit out.
const excluded = (
  existsSync('scripts/public-exclude.txt') ? readFileSync('scripts/public-exclude.txt', 'utf8') : ''
)
  .split('\n')
  .map(l => l.trim())
  .filter(l => l && !l.startsWith('#'))
/** @param {string} pattern */
const globRe = pattern =>
  new RegExp(
    `^${pattern
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')
      .split('**')
      .map(part => part.replace(/\*/g, '[^/]*'))
      .join('.*')}(/.*)?$`
  )
const removed = excluded.map(globRe)
const gone = (/** @type {string} */ f) => removed.some(r => r.test(f))
const leftOut = UNITS.filter((_, i) => gone(`src/units/${FOLDERS[i]}/manifest.js`))
const words = leftOut.flatMap(u => [
  FOLDERS[UNITS.indexOf(u)] ?? '',
  u.title,
  ...(UNITS.some(o => !leftOut.includes(o) && o.discipline.id === u.discipline.id)
    ? []
    : [u.discipline.name])
])
if (words.length) {
  const word = new RegExp(words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'i')
  for (const f of files) {
    if (gone(f) || SKIP.test(f)) continue
    const text = withoutGenerated(f, readFileSync(f, 'utf8'))
    const line = text.split('\n').findIndex(l => word.test(l))
    if (line >= 0)
      failures.push(
        `Left out: ${f}:${line + 1} names ${word.exec(text.split('\n')[line] ?? '')?.[0]}, which this copy leaves out`
      )
  }
}

if (failures.length === 0) {
  console.log(
    `✓ Units apart: shared code names no unit; nothing left in names ${leftOut.map(u => u.title).join(', ') || 'a unit left out'}.`
  )
  process.exit(0)
}
console.error(`✗ ${failures.length} breach(es) of units apart:\n`)
for (const f of failures) console.error(`  ${f}`)
process.exit(1)
