#!/usr/bin/env node
// Hides: how a browser global in logic is caught: every .logic.js
// file is type-checked with no DOM library and no Node types (jsconfig.logic.json), so naming
// document, window, fetch or a timer there fails.
import { execFileSync } from 'node:child_process'

/** @type {string} */
let out = ''
try {
  execFileSync('npx', ['tsc', '-p', 'jsconfig.logic.json'], { encoding: 'utf8', stdio: 'pipe' })
} catch (error) {
  out = error instanceof Error && 'stdout' in error ? String(error.stdout) : String(error)
}
const faults = out
  .split('\n')
  .filter(l => /^\S+\(\d+,\d+\): error/.test(l))
if (faults.length === 0) {
  console.log('✓ Logic types: every .logic.js file checks with no DOM library.')
  process.exit(0)
}
console.error(`✗ Logic types: ${faults.length} error(s) with no DOM library:\n`)
for (const f of faults) console.error(`  ${f}`)
process.exit(1)
