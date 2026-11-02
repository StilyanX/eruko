#!/usr/bin/env node
// Storage keys live in kernel/storage.logic.js and window event names in parts/events.dom.js. If a second file spells
// one of those strings itself, the copies drift apart and nothing errors. This check fails when:
//   1. A localStorage key argument is not `KEYS.*` or a `*Key(slug)` builder.
//   2. A literal declared in either appears in any other file.
//   3. index.html's pre-paint theme colours differ from src/style/.
import fs from 'node:fs'
import path from 'node:path'
import { walk, SRC } from '../lib/fs.mjs'

const SOURCES = [
  path.join(SRC, 'kernel', 'storage.logic.js'),
  path.join(SRC, 'parts', 'events.dom.js')
]

const CALL = /localStorage\s*\.\s*(getItem|setItem|removeItem)\s*\(\s*([^,)]+)/g
// Accepted key expressions: KEYS.foo, a …Key(slug) call, and a local bound from one (…Key / …key).
const NAMED_KEY = /^(KEYS\.\w+$|[A-Za-z_$][\w$]*Key\s*\(|[\w.$]*[Kk]ey$)/

// Every string literal the two source modules declare, so new keys and events are covered at once.
/** @type {Map<string, string>} */
const owned = new Map()
for (const src of SOURCES) {
  const text = fs.readFileSync(src, 'utf8')
  for (const m of text.matchAll(/['"`]([^'"`\n]{4,})['"`]/g)) {
    owned.set(m[1] ?? '', path.basename(src))
  }
}

/** @type {string[]} */
const failures = []
/**
 * @param {string} text
 * @param {number} index
 */
const at = (text, index) => text.slice(0, index).split('\n').length

for (const file of walk(SRC)) {
  if (SOURCES.includes(file)) continue
  const text = fs.readFileSync(file, 'utf8')
  const rel = path.relative(process.cwd(), file)

  for (const m of text.matchAll(CALL)) {
    const arg = (m[2] ?? '').trim()
    if (NAMED_KEY.test(arg)) continue
    failures.push(
      `${rel}:${at(text, m.index)}  localStorage.${m[1]}(${arg}): key not from kernel/storage.logic.js`
    )
  }

  for (const m of text.matchAll(/['"`]([^'"`\n]{4,})['"`]/g)) {
    const ownedBy = owned.get(m[1] ?? '')
    if (!ownedBy) continue
    failures.push(`${rel}:${at(text, m.index)}  literal '${m[1]}': import it from ${ownedBy}`)
  }
}

// 3. index.html paints each theme's ground and text before any stylesheet loads, so it cannot
// read a custom property and restates the palette. Compare that copy with tokens.css.
/** @param {string} f */
const cssOf = f => fs.readFileSync(path.join(SRC, 'style', f), 'utf8')
const tokens = cssOf('tokens.css')
const themes = tokens
const html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8')

/**
 * @param {string} css
 * @param {string} sel
 */
const blockOf = (css, sel) => css.slice(css.indexOf(sel)).split('}')[0] ?? ''
/**
 * @param {string} block
 * @param {string} prop
 */
const declOf = (block, prop) => block.match(new RegExp(`${prop}:\\s*([^;]+);`))?.[1]?.trim()

const MORE = "[data-contrast='more']"
for (const theme of [
  "[data-theme='dark']",
  "[data-theme='light']",
  `[data-theme='dark']${MORE}`,
  `[data-theme='light']${MORE}`
]) {
  const block = theme === "[data-theme='dark']" ? tokens : blockOf(themes, theme)
  const bg = declOf(block, '--bg')
  const ink = declOf(block, '--text')
  const sel = `html${theme}`.replace(/[[\]]/g, '\\$&')
  const rule = html.match(new RegExp(`${sel}[^{]*\\{([^}]*)\\}`))?.[1]
  if (!bg || !ink || !rule) {
    failures.push(`index.html / styles: could not read the ${theme} palette on both sides`)
    continue
  }
  const want = { background: bg.toLowerCase(), color: ink.toLowerCase() }
  for (const [prop, expected] of Object.entries(want)) {
    const got = rule
      .match(new RegExp(`${prop}:\\s*([^;]+)`))?.[1]
      ?.trim()
      .toLowerCase()
    if (got !== expected) {
      failures.push(`index.html: ${theme} ${prop} is ${got}, styles/ says ${expected}`)
    }
  }
}

if (failures.length) {
  console.error(`✗ Contracts: ${failures.length} value(s) declared in more than one place\n`)
  failures.forEach(f => console.error('  ' + f))
  process.exit(1)
}
console.log('✓ Contracts: storage keys, event names and the theme palette each have one home.')
