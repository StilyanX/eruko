#!/usr/bin/env node
// Hides: the code rules a script can hold, each failure naming its rule:
//   Module header  every hand-written module opens with "// Hides: <the one decision it hides>"
//   Casts          a JSDoc cast appears only in a decoder file (decode.logic.js), where the id
//                  constructors live too; a const assertion ({const}) narrows nothing and is free
//   Catch          a catch block rethrows, returns a failure or shows the learner: none is empty
//                  or only logs
//   Exhaustive     every switch ends in a default that calls unreachable()
//   One typedef    a type is declared once, where its values are made: no typedef that only
//                  renames an imported type
//   Pure logic     a .logic.js file imports only .logic.js files and plain data (.gen.js, content)
//   Router         only shell/router.js reads the Navigation API
//   Tag            an element in <stem>.element.js is <prefix>-<stem> (the unit's folder in a unit,
//                  ae in parts/, shell in shell/), its class the tag in PascalCase
//   Folder tree    src/ holds only its page, worker, worker list and six folders; a unit's folder
//                  holds only manifest.js, unit.css, content/, core/ and its feature folders
//   Test beside    a <stem>.test.js tests the logic file of its stem: <stem>.logic.js stands
//                  beside it
// A test file is no module of the app: the rules above on a module's code leave it out, as they
// did when the tests stood in tests/.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { SRC, importsOf, resolve, walk } from '../lib/fs.mjs'

/** @param {string} f */
const rel = f => path.relative(SRC, f).split(path.sep).join('/')
/** @param {string} f */
const vendored = f => {
  for (let dir = path.dirname(f); dir.startsWith(SRC + path.sep); dir = path.dirname(dir))
    if (existsSync(path.join(dir, 'VENDOR.json'))) return true
  return false
}

/** @type {string[]} */
const failures = []
/**
 * @param {string} rule
 * @param {string} r the file, from src/
 * @param {string} what
 */
const breach = (rule, r, what) => {
  failures.push(`${rule}: src/${r} ${what}`)
}
/**
 * @param {string} text
 * @param {number} index
 */
const lineAt = (text, index) => text.slice(0, index).split('\n').length

/** A file's text with its comments and strings blanked, so code is matched only where it runs. */
const codeOf = (/** @type {string} */ text) =>
  text.replace(
    /\/\*[\s\S]*?\*\/|\/\/[^\n]*|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g,
    m => m.replace(/[^\n]/g, ' ')
  )

/**
 * The text of the block that opens at the first `{` from `from`, braces counted in code.
 * @param {string} code
 * @param {number} from
 */
function blockAt(code, from) {
  const open = code.indexOf('{', from)
  let depth = 0
  for (let i = open; i < code.length; i++) {
    if (code[i] === '{') depth++
    else if (code[i] === '}' && --depth === 0) return { start: open + 1, end: i }
  }
  return { start: open + 1, end: code.length }
}

const files = walk(SRC, /\.js$/).filter(f => !vendored(f))
for (const file of files) {
  const r = rel(file)
  const text = readFileSync(file, 'utf8')
  const generated = r.endsWith('.gen.js')
  const content = /^units\/[^/]+\/content\//.test(r)
  if (r.endsWith('.test.js')) {
    if (!existsSync(file.replace(/\.test\.js$/, '.logic.js')))
      breach('Test beside', r, `has no ${path.basename(r, '.test.js')}.logic.js beside it`)
    continue
  }
  if (generated || content) continue
  const code = codeOf(text)

  if (!/^\/\/ Hides: \S/.test(text))
    breach('Module header', r, 'does not open with "// Hides: ..."')

  if (!r.endsWith('decode.logic.js'))
    for (const m of text.matchAll(
      /\/\*\*\s*@type\s*\{(?!const\})[^}]*(?:\{[^}]*\}[^}]*)*\}\s*\*\/[ \t]*\(/g
    ))
      breach('Casts', r, `casts at line ${lineAt(text, m.index)}; cast only in a decoder`)

  for (const m of code.matchAll(/\bcatch\b\s*(\([^)]*\))?\s*\{/g)) {
    const { start, end } = blockAt(code, m.index)
    const body = code.slice(start, end).trim()
    if (body === '') breach('Catch', r, `has an empty catch at line ${lineAt(text, m.index)}`)
    else if (body.split(/[;\n]/).every(s => s.trim() === '' || /^console\.\w+\(/.test(s.trim())))
      breach('Catch', r, `has a catch that only logs at line ${lineAt(text, m.index)}`)
  }

  for (const m of code.matchAll(/\bswitch\s*\(/g)) {
    const { start, end } = blockAt(code, m.index)
    const body = text.slice(start, end)
    const last = body.lastIndexOf('default:')
    if (last < 0 || !/unreachable\(/.test(body.slice(last)))
      breach(
        'Exhaustive',
        r,
        `has a switch at line ${lineAt(text, m.index)} that does not end in default: unreachable(...)`
      )
  }

  for (const m of text.matchAll(
    /@typedef\s*\{\s*import\(\s*['"][^'"]+['"]\s*\)\.[\w$.]+\s*\}\s*[\w$]+/g
  ))
    breach(
      'One typedef',
      r,
      `renames an imported type at line ${lineAt(text, m.index)}; use import('...').Type where it is needed`
    )

  if (r.endsWith('.logic.js'))
    for (const spec of importsOf(
      code.replace(/ {2,}/g, ' ') +
        '\n' +
        [...text.matchAll(/^\s*(?:import|export)\b[^\n]*from\s*['"][^'"]+['"]/gm)]
          .map(x => x[0])
          .join('\n')
    )) {
      const target = resolve(file, spec)
      if (!target) continue
      const t = rel(target)
      if (!/\.(logic|gen)\.js$/.test(t) && !/^units\/[^/]+\/content\//.test(t))
        breach('Pure logic', r, `imports ${t}, which is not logic or plain data`)
    }

  if (r !== 'shell/router.js' && /\bnavigation\s*\.\s*\w/.test(code))
    breach('Router', r, 'reads the Navigation API; only shell/router.js does')

  if (r.endsWith('.element.js')) {
    const stem = path.basename(r, '.element.js')
    const unit = /^units\/([^/]+)\//.exec(r)?.[1]
    const prefix = unit ?? (r.startsWith('parts/') ? 'ae' : r.startsWith('shell/') ? 'shell' : '?')
    const defs = [...text.matchAll(/customElements\.define\(\s*['"]([^'"]+)['"]\s*,\s*([\w$]+)/g)]
    const tag = `${prefix}-${stem}`
    const cls = tag
      .split('-')
      .map(w => (w[0] ?? '').toUpperCase() + w.slice(1))
      .join('')
    if (defs.length !== 1) breach('Tag', r, `defines ${defs.length} elements, not one`)
    for (const [, t, c] of defs) {
      if (t !== tag) breach('Tag', r, `defines <${t}>, not <${tag}>`)
      if (c !== cls) breach('Tag', r, `names its class ${c}, not ${cls}`)
    }
  }
}

// Folder tree.
const ROOT = new Set([
  'index.html',
  'sw.js',
  'sw-manifest.gen.js',
  'shell',
  'style',
  'kernel',
  'record',
  'parts',
  'units'
])
for (const e of readdirSync(SRC))
  if (!ROOT.has(e)) breach('Folder tree', e, "is not one of the served root's entries")
for (const unit of readdirSync(path.join(SRC, 'units'))) {
  const dir = path.join(SRC, 'units', unit)
  if (!statSync(dir).isDirectory()) {
    breach('Folder tree', `units/${unit}`, 'is a file beside the units')
    continue
  }
  for (const e of readdirSync(dir))
    if (!['manifest.js', 'unit.css'].includes(e) && !statSync(path.join(dir, e)).isDirectory())
      breach(
        'Folder tree',
        `units/${unit}/${e}`,
        'is a file in a unit folder (manifest.js and unit.css only)'
      )
}

if (failures.length === 0) {
  console.log(
    '✓ Code rules: header, casts, catch, exhaustive, one typedef, pure logic, router, tag, folder tree, test beside.'
  )
  process.exit(0)
}
console.error(`✗ ${failures.length} breach(es) of the code rules:\n`)
for (const f of failures) console.error(`  ${f}`)
process.exit(1)
