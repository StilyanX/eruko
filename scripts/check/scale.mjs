#!/usr/bin/env node
// Fails when a geometry value sits off the design scales, so every number in the UI comes from
// one grid. It reads .css.
//
//   grid      0, 1, 2 or a multiple of 4 (px): the 4px base grid, with 1 and 2 for the hairline
//             and the button edge. Sizes are rem tokens (--space-*); a px literal is the exception
//   type      a --type-* token: a bare px or rem font size fails outside typography.css, which
//             sets the tokens
//   radius    the --radius token; a px literal is 0 or the 2px of a thin mark or bar
//   duration  0 or the one motion's 200ms (--dur-open)
//   tracking  inherit, normal or 0
//
// `node scripts/check/scale.mjs --fix` snaps every off-grid px size and px corner to the nearest
// legal one. A font size, a tracking or a duration off the scale is fixed by hand.
import fs from 'node:fs'
import { walk } from '../lib/fs.mjs'

const FIX = process.argv.includes('--fix')

const RADIUS = [0, 2]
const DUR = [0, 200]

const GRID = /^(padding|margin|gap|row-gap|column-gap|inset|top|right|bottom|left|width|height|translate|text-indent|scroll-margin|scroll-padding)(-(top|right|bottom|left|inline|block|start|end|x|y))?$/
const SIZE = /^(min|max)-(width|height)$/
/** @param {number} n */
const onGrid = n => n === 1 || n === 2 || n % 4 === 0
/**
 * @param {number} n
 * @param {number[]} set
 */
const nearest = (n, set) => set.reduce((a, b) => (Math.abs(b - n) <= Math.abs(a - n) ? b : a))
/** @param {number} n */
const snapGrid = n => (onGrid(n) ? n : n < 3 ? 2 : Math.round(n / 4) * 4)

/**
 * prop name (css or camelCase) -> [test, snap]
 * @param {string} prop
 * @returns {[(n: number) => boolean, (n: number) => number] | null}
 */
const rule = prop => {
  const kebab = prop.replace(/[A-Z]/g, c => '-' + c.toLowerCase())
  if (/^border(-[a-z]+)?-radius$/.test(kebab)) return [n => RADIUS.includes(n), n => nearest(n, RADIUS)]
  if (GRID.test(kebab) || SIZE.test(kebab)) return [onGrid, snapGrid]
  return null
}

/** @type {string[]} */
const violations = []
let fixed = 0

/**
 * Checks every `<n>px` in `value`; with FIX it snaps it instead of recording it.
 * @param {string} prop
 * @param {string} value
 * @param {string} file
 * @param {number} line
 */
const scanValue = (prop, value, file, line) => {
  const r = rule(prop)
  if (!r) return value
  const [ok, snap] = r
  return value.replace(/(-?\d*\.?\d+)px/g, (m, num) => {
    const n = Math.abs(+num)
    if (ok(n)) return m
    const to = snap(n) * Math.sign(+num || 1)
    if (FIX) { fixed++; return `${to}px` }
    violations.push(`${file}:${line}: ${prop}: ${value.trim()}  ->  ${to}px`)
    return m
  })
}

// Temml's own maths stylesheet (src/style/maths/) is vendored whole and keeps its own values.
const cssFiles = walk('src', /\.css$/).filter(f => !f.includes('/style/maths/'))

for (const file of cssFiles) {
  let dirty = false
  const out = fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .map((line, i) => {
      const m = line.match(/^(\s*)([a-z-]+)\s*:\s*([^;{]+?)(;\s*)$/)
      if (!m || m[2]?.startsWith('--')) return line
      // All four groups take part in every match.
      const [, pad = '', prop = '', value = '', tail = ''] = m
      if (prop === 'font-size' && !file.endsWith('typography.css') && /\d(px|rem)\b/.test(value)) {
        violations.push(`${file}:${i + 1}: font-size: ${value}  ->  a --type-* token`)
        return line
      }
      if (prop === 'letter-spacing' && !/inherit|normal|^0$/.test(value)) {
        violations.push(`${file}:${i + 1}: letter-spacing: ${value}  ->  nothing is tracked`)
        return line
      }
      if (/^(transition|animation)(-duration)?$/.test(prop) && !/var\(/.test(value)) {
        for (const d of value.matchAll(/([\d.]+)(ms|s)\b/g)) {
          const ms = d[2] === 's' ? +(d[1] ?? 0) * 1000 : +(d[1] ?? 0)
          if (!DUR.includes(ms))
            violations.push(`${file}:${i + 1}: ${prop}: ${value}  ->  ${nearest(ms, DUR)}ms (--dur-*)`)
        }
        return line
      }
      const next = scanValue(prop, value, file, i + 1)
      if (next === value) return line
      dirty = true
      return `${pad}${prop}: ${next}${tail}`
    })
    .join('\n')
  if (FIX && dirty) fs.writeFileSync(file, out)
}

if (FIX) {
  console.log(`Scale: snapped ${fixed} off-scale value(s).`)
  process.exit(0)
}
if (violations.length) {
  console.error(`${violations.length} value(s) off the design scales:\n`)
  violations.forEach(v => console.error('  ' + v))
  console.error('\n4px grid (1/2px hairline), --type-* sizes, the --radius corner, no tracking, and the one 200ms motion.')
  console.error('Run `node scripts/check/scale.mjs --fix` to snap them.')
  process.exit(1)
}
console.log('Scale: every value on grid.')
