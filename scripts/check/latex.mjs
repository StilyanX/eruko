#!/usr/bin/env node
// Parses every `$$…$$` and `$…$` span in the strings under src/units/*/content with Temml, the engine
// that sets the app's maths (scripts/gen/mathml.mjs), and reports
// each one that throws. A string with a `$` left over after its spans is unbalanced; a literal
// dollar is written \$. Exits 1 on any issue.
import temml from 'temml'
import { walk } from '../lib/fs.mjs'
import { pathToFileURL } from 'node:url'

// index.js and figures.js only gather other modules through imports.
const files = walk('src/units', /\.js$/).filter(p => /\/content\//.test(p) && !/\/mathml\//.test(p) && !/(index|figures)\.js$/.test(p))

// Commands the content uses that Temml spells differently (as scripts/gen/mathml.mjs sets them).
const MACROS = { '\\cdotp': '\\cdot' }
/** @type {string[]} */
const issues = []

// Math spans, found the way TeX's own scanner finds them: a `$` or `$$` opens one, and the same
// delimiter at brace depth 0 closes it, so a `$k$` nested inside \text{…} stays inside its span.
/**
 * @param {string} s
 * @returns {{ out: { expr: string, display: boolean }[], rest: string }}
 */
function spans(s) {
  /** @type {{ expr: string, display: boolean }[]} */
  const out = []
  let rest = ''
  for (let i = 0; i < s.length; ) {
    if (s[i] === '\\' && s[i + 1] === '$') {
      rest += '  '
      i += 2
      continue
    }
    if (s[i] !== '$') {
      rest += s[i++]
      continue
    }
    const delim = s[i + 1] === '$' ? '$$' : '$'
    let depth = 0
    let j = i + delim.length
    for (; j < s.length; j++) {
      if (s[j] === '\\') j++
      else if (s[j] === '{') depth++
      else if (s[j] === '}') depth--
      else if (depth === 0 && s.startsWith(delim, j)) break
    }
    if (j >= s.length) {
      rest += s.slice(i)
      break
    }
    out.push({ expr: s.slice(i + delim.length, j), display: delim === '$$' })
    i = j + delim.length
  }
  return { out, rest }
}

/**
 * @param {string} s
 * @param {string} where
 */
function check(s, where) {
  if (!s.includes('$')) return
  const { out, rest } = spans(s)
  for (const { expr, display } of out) {
    try {
      temml.renderToString(expr.replace(/·/g, ' '), { throwOnError: true, displayMode: display, macros: { ...MACROS } })
    } catch (e) {
      issues.push(`${where}  ${expr.slice(0, 70)}  ${(e instanceof Error ? e.message : String(e)).split('\n')[0]}`)
    }
  }
  if (rest.includes('$')) issues.push(`${where}  unbalanced $: ${s.slice(0, 70)}`)
}

// Fields that hold program text or a pattern, never maths: a `$` there is the program's own.
const CODE = new Set(['test', 'lines', 'result', 'reference', 'wrong', 'template'])

/**
 * @param {unknown} v
 * @param {string} where
 */
function walkValue(v, where) {
  if (typeof v === 'string') check(v, where)
  else if (Array.isArray(v)) v.forEach(x => walkValue(x, where))
  else if (v && typeof v === 'object')
    Object.entries(v).forEach(([k, x]) => CODE.has(k) || walkValue(x, where))
}

for (const f of files) {
  const mod = await import(pathToFileURL(f).href)
  walkValue(Object.values(mod), f)
}

if (issues.length) {
  console.log(`${issues.length} LaTeX issue(s):\n` + issues.map(i => '  ' + i).join('\n'))
  process.exit(1)
}
console.log(`✓ No LaTeX issues across ${files.length} data files.`)
