#!/usr/bin/env node
// Lists classes named in JSX/JS `className=` attributes that no .css file under src/ has a rule
// for; they render unstyled. An argument filters by prefix: `node scripts/check/orphan-classes.mjs lrn-`.
//
// It reads static classNames only: `${...}` interpolations are stripped, so a fully dynamic
// class name is not checked. A class styled only by a third-party stylesheet shows up here.
import { readFileSync } from 'node:fs'
import { classesIn, walk } from '../lib/fs.mjs'

const ROOT = 'src'
const filter = process.argv[2] ?? ''

const files = walk(ROOT, /\.(js|css)$/)
const codeFiles = files.filter(f => !f.endsWith('.css'))
const cssFiles = files.filter(f => f.endsWith('.css'))

// Defined class selectors: from .css files and from CSS embedded in <style> blocks in JSX/JS.
/** @type {Set<string>} */
const defined = new Set()
/** @param {string} css */
const addDefs = css => classesIn(css).forEach(c => defined.add(c))
for (const f of cssFiles) addDefs(readFileSync(f, 'utf8'))
for (const f of codeFiles) {
  const code = readFileSync(f, 'utf8')
  for (const m of code.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) addDefs(m[1] ?? '')
  // CSS held in a template literal (e.g. `const CSS = \`.x { … }\`` then <style>{CSS}</style>).
  for (const m of code.matchAll(/`([^`]*)`/g)) {
    if (/[.#][A-Za-z_][\w-]*[^{}]*\{[^{}]*:/.test(m[1] ?? '')) addDefs(m[1] ?? '')
  }
}

// Used class tokens from className attributes.
/** @type {Map<string, Set<string>>} */
const used = new Map() // class -> Set(file)
// `className=` with no space around it is a JSX attribute; this skips an assignment such as
// `const className = 'SADDLE'`.
const CN =
  /className=(?:"([^"]*)"|'([^']*)'|\{\s*`([^`]*)`\s*\}|\{\s*"([^"]*)"\s*\}|\{\s*'([^']*)'\s*\})/g
for (const f of codeFiles) {
  const code = readFileSync(f, 'utf8')
  for (const m of code.matchAll(CN)) {
    const raw = (m[1] ?? m[2] ?? m[3] ?? m[4] ?? m[5]) || ''
    for (const cls of raw.replace(/\$\{[^}]*\}/g, ' ').split(/\s+/).filter(Boolean)) {
      if (!/^-?[A-Za-z_][A-Za-z0-9_-]*$/.test(cls)) continue
      // `foo-${x}` strips to a token with a trailing dash: skip it.
      if (cls.endsWith('-')) continue
      let seen = used.get(cls)
      if (!seen) used.set(cls, (seen = new Set()))
      seen.add(f)
    }
  }
}

const orphans = [...used.keys()]
  .filter(c => !defined.has(c))
  .filter(c => c.startsWith(filter))
  .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

if (!orphans.length) {
  console.log(`No orphan classes${filter ? ` with prefix "${filter}"` : ''}. ✓`)
  process.exit(0)
}

console.log(`Orphan classes (used in markup, no CSS rule)${filter ? `: prefix "${filter}"` : ''}:\n`)
for (const c of orphans) {
  const fs2 = used.get(c) ?? new Set()
  const sample = [...fs2].slice(0, 3).join(', ')
  console.log(`  ${c.padEnd(28)} ${String(fs2.size).padStart(2)} file(s)  e.g. ${sample}`)
}
console.log(`\n${orphans.length} orphan class(es).`)
process.exit(1)
