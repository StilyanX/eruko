#!/usr/bin/env node
// Hides: the style rules a script can hold, each failure naming it:
//   index.html links only style/main.css (the shell links the open unit's unit.css);
//   only style/tokens.css holds a raw colour or a font's name; every other sheet reads tokens;
//   a unit's selectors each start with one of its own tags.
// And Feature folder: a unit's sheet other than unit.css is <stem>.css beside <stem>.element.js,
// its selectors start with that element's tag, and unit.css imports it, so the open unit's one
// linked sheet brings in every sheet of the unit.
// Vendored sheets (a folder with a VENDOR.json, Temml's maths sheet) are left out.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { SRC, walk } from '../lib/fs.mjs'

/** @type {string[]} */
const failures = []
/**
 * @param {string} r
 * @param {string} what
 */
const breach = (r, what) => {
  failures.push(`Style files: ${r} ${what}`)
}

const html = readFileSync(path.join(SRC, 'index.html'), 'utf8')
const linked = [...html.matchAll(/<link\s+rel="stylesheet"\s+href="([^"]+)"/g)].map(m => m[1])
if (linked.join() !== 'style/main.css')
  breach('src/index.html', `links ${linked.join(', ')}; only style/main.css`)

const RAW_COLOUR =
  /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\(|:\s*(?:white|black)\b/
const RAW_FONT = /font-family\s*:(?!\s*var\()/
const vendored = (/** @type {string} */ f) => {
  for (let dir = path.dirname(f); dir.startsWith(SRC + path.sep); dir = path.dirname(dir))
    if (existsSync(path.join(dir, 'VENDOR.json'))) return true
  return f.includes(`${path.sep}style${path.sep}maths${path.sep}`)
}
/**
 * A rule's selectors, split at the commas outside brackets.
 * @param {string} list
 */
const selectorsOf = list => {
  /** @type {string[]} */
  const out = ['']
  let depth = 0
  for (const c of list) {
    if (c === '(' || c === '[') depth++
    if (c === ')' || c === ']') depth--
    if (c === ',' && depth === 0) out.push('')
    else out[out.length - 1] += c
  }
  return out.map(x => x.trim())
}
/**
 * Every tag a unit defines, by the stem of each of its elements (<stem>.element.js).
 * @param {string} unit
 */
const tagsOf = unit =>
  walk(path.join(SRC, 'units', unit), /\.element\.js$/).map(
    f => `${unit}-${path.basename(f, '.element.js')}`
  )
/**
 * Whether a selector starts with one of `tags`.
 * @param {string} sel
 * @param {string[]} tags
 */
const startsWithTag = (sel, tags) => tags.some(t => new RegExp(`^${t}(?![\\w-])`).test(sel))

for (const unit of readdirSync(path.join(SRC, 'units'))) {
  const dir = path.join(SRC, 'units', unit)
  const main = path.join(dir, 'unit.css')
  if (!existsSync(main)) continue
  const imported = [...readFileSync(main, 'utf8').matchAll(/@import\s+['"]([^'"]+)['"]/g)].map(m =>
    path.resolve(dir, m[1] ?? '')
  )
  for (const sheet of walk(dir, /\.css$/))
    if (sheet !== main && !imported.includes(sheet))
      breach(path.relative(process.cwd(), sheet), 'is not imported by its unit.css')
}

for (const file of walk(SRC, /\.css$/)) {
  if (vendored(file)) continue
  const r = path.relative(process.cwd(), file).split(path.sep).join('/')
  const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
  if (r !== 'src/style/tokens.css')
    css.split('\n').forEach((line, i) => {
      if (RAW_COLOUR.test(line)) breach(r, `line ${i + 1} writes a raw colour; read a token`)
      if (RAW_FONT.test(line)) breach(r, `line ${i + 1} names a font; read a token`)
    })
  const unit = /^src\/units\/([^/]+)\//.exec(r)?.[1]
  if (unit) {
    const stem = path.basename(r, '.css')
    const own = stem === 'unit' && path.dirname(r) === `src/units/${unit}`
    const element = file.replace(/\.css$/, '.element.js')
    if (!own && !existsSync(element))
      breach(r, `stands beside no ${stem}.element.js; a sheet sits beside the element it styles`)
    const tags = own ? tagsOf(unit) : [`${unit}-${stem}`]
    const body = css.replace(/@layer\s+\w+\s*\{/, '')
    for (const m of body.matchAll(/(?:^|[{}])\s*([^{}@;]+?)\s*\{/g))
      for (const sel of selectorsOf(m[1] ?? ''))
        if (!startsWithTag(sel, tags) && !/^(from|to|\d+%)$/.test(sel))
          breach(
            r,
            `has the selector "${sel}"; its selectors start with ${own ? "one of the unit's tags" : `<${tags[0]}>`}`
          )
  }
}

if (failures.length === 0) {
  console.log(
    '✓ Style files: one linked sheet, raw colours and fonts only in tokens, units scoped to their tags.'
  )
  process.exit(0)
}
console.error(`✗ ${failures.length} breach(es) of the style rules:\n`)
for (const f of [...new Set(failures)]) console.error(`  ${f}`)
process.exit(1)
