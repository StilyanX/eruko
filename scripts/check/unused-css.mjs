#!/usr/bin/env node
// Lists class rules defined in src/**/*.css whose class is never named as a whole token in
// non-CSS source (js and index.html). A class counts as used when its exact token appears in a
// className, a JS string literal or the HTML, with comments and the units' content
// (src/units/*/content/) left out, so a word such as "card" in a lesson or a comment never keeps a
// dead rule alive. It also fails on an @keyframes no rule animates, a custom property nothing
// reads, and an element selector (h4, em, th, …) for a tag no component renders. Check dynamic
// construction (`'lrn-' + variant`) before deleting. An argument filters by prefix.
import { readFileSync } from 'node:fs'
import { classesIn, walk } from '../lib/fs.mjs'

const ROOT = 'src'
const filter = process.argv[2] ?? ''

const files = walk(ROOT, /\.(jsx?|css)$/)
// The maths stylesheet is Temml's own (src/style/maths/), vendored whole: its classes are the
// ones Temml may emit, so it is not held to the classes Eruko uses.
const cssFiles = files.filter(f => f.endsWith('.css') && !f.includes('/style/maths/'))
const codeFiles = files.filter(f => !f.endsWith('.css') && !/\/units\/[^/]+\/content\//.test(f))
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g
/** @param {string} src */
const stripComments = src => src.replace(BLOCK_COMMENT, '').replace(/^\s*\/\/.*$/gm, '')
const cssText = cssFiles
  .map(f => readFileSync(f, 'utf8').replace(BLOCK_COMMENT, ''))
  .join('\n')

// Every class selector defined in CSS, with the file(s) it lives in.
/** @type {Map<string, Set<string>>} */
const defined = new Map() // class -> Set(file)
for (const f of cssFiles) {
  for (const c of classesIn(readFileSync(f, 'utf8'))) {
    let inFiles = defined.get(c)
    if (!inFiles) defined.set(c, (inFiles = new Set()))
    inFiles.add(f)
  }
}

// All non-CSS source in one string, to test token membership against.
const blob =
  codeFiles.map(f => stripComments(readFileSync(f, 'utf8'))).join('\n') +
  readFileSync('src/index.html', 'utf8')
/** @param {string} s */
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
// Inside a string literal only: a class name is always quoted, and JSX prose is not.
/** @param {string} cls */
const usedAsToken = cls => new RegExp(`['"\`][^'"\`\\n]*(?<![\\w-])${esc(cls)}(?![\\w-])[^'"\`\\n]*['"\`]`).test(blob)

// Dynamic class prefixes: `cc-v-${variant}` or `'stg-' + kind`. A defined class that starts with
// one may be built at run time and never appear as a literal, so it is never flagged.
/** @type {Set<string>} */
const dynPrefixes = new Set()
for (const m of blob.matchAll(/([A-Za-z][\w-]*-)\$\{/g)) dynPrefixes.add(m[1] ?? '')
for (const m of blob.matchAll(/['"`]([A-Za-z][\w-]*-)['"`]?\s*\+/g)) dynPrefixes.add(m[1] ?? '')
/** @param {string} c */
const hasDynPrefix = c => [...dynPrefixes].some(p => c.startsWith(p))

const unused = [...defined.keys()]
  .filter(c => c.startsWith(filter))
  .filter(c => !usedAsToken(c))
  .filter(c => !hasDynPrefix(c))
  .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

// @keyframes nothing animates.
const keyframes = [...cssText.matchAll(/@keyframes\s+([\w-]+)/g)].map(m => m[1] ?? '')
const deadKeyframes = keyframes.filter(
  k => !new RegExp(`animation(-name)?\\s*:[^;]*(?<![\\w-])${esc(k)}(?![\\w-])`).test(cssText)
)

// Custom properties defined in CSS and read by no var() in CSS or code.
const readVars = cssText + blob
const deadVars = [
  ...new Set([...cssText.matchAll(/(?<![\w-])(--[\w-]+)\s*:/g)].map(m => m[1] ?? ''))
].filter(v => !new RegExp(`var\\(\\s*${esc(v)}(?![\\w-])|['"\`]${esc(v)}['"\`]`).test(readVars))

// Element selectors for tags no screen renders (as markup or as h('tag', …)).
const TAGS = [
  'h4',
  'h5',
  'h6',
  'em',
  'i',
  'b',
  'th',
  'thead',
  'tbody',
  'tr',
  'td',
  'table',
  'dl',
  'dt',
  'dd',
  'blockquote',
  'pre',
  'code',
  'kbd',
  'hr',
  'img',
  'video',
  'select',
  'header',
  'footer',
  'aside',
  'figcaption',
  'caption'
]
const selectors = cssText.replace(/\{[^{}]*\}/g, '{}').replace(/@[^{]*\{/g, '')
const deadTags = TAGS.filter(
  t =>
    new RegExp(`(^|[\\s,>+~(}])${t}(?=[\\s,.:\\[>+~){])`).test(selectors) &&
    !new RegExp(`<${t}[\\s>/]|\\bh\\(\\s*['"]${t}['"]`).test(blob)
)

const extra = [
  ...deadKeyframes.map(k => `  @keyframes ${k}`),
  ...deadVars.map(v => `  ${v}`),
  ...deadTags.map(t => `  <${t}> selector`)
]
if (extra.length) {
  console.log(`Unused keyframes, custom properties or element selectors:\n${extra.join('\n')}\n`)
}

if (!unused.length && !extra.length) {
  console.log(`No unused CSS${filter ? ` with prefix "${filter}"` : ''}. ✓`)
  process.exit(0)
}
if (!unused.length) process.exit(1)

console.log(
  `Unused CSS classes (defined, never referenced as a token)${filter ? `: prefix "${filter}"` : ''}:\n`
)
for (const c of unused) {
  const where = [...(defined.get(c) ?? [])].map(f => f.replace(/^src\//, '')).join(', ')
  console.log(`  ${c.padEnd(30)} ${where}`)
}
console.log(
  `\n${unused.length} unused class(es). Check for dynamic construction before deleting.`
)
process.exit(1)
