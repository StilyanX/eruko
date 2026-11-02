#!/usr/bin/env node
// Hides: how an untested error path is found: the Node tests run
// (each logic file's own <stem>.test.js beside it, and tests/) with coverage, and every line of
// the app's logic (src/**/*.logic.js, each loaded by tests/logic-node.test.mjs) that throws or returns a failure must be run by some test. The
// screens' error paths are the browser tests'.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'

const dir = mkdtempSync(path.join(tmpdir(), 'aether-cover-'))
const lcov = path.join(dir, 'lcov.info')
const tests = ['tests/*.test.mjs', 'src/**/*.test.js']
try {
  execFileSync(
    process.execPath,
    [
      '--test',
      '--experimental-test-coverage',
      '--test-reporter=lcov',
      `--test-reporter-destination=${lcov}`,
      ...tests
    ],
    { stdio: 'ignore' }
  )
} catch {
  // A failing test is npm test's to report; the coverage it wrote is still read here.
  if (!existsSync(lcov)) throw new Error('The tests wrote no coverage.')
}
/** @type {Map<string, Map<number, number>>} */
const hits = new Map()
/** Lines where a branch starts that no test took, by file. @type {Map<string, Set<number>>} */
const untaken = new Map()
let file = ''
for (const line of readFileSync(lcov, 'utf8').split('\n')) {
  if (line.startsWith('SF:')) {
    file = path.relative(process.cwd(), line.slice(3)).split(path.sep).join('/')
    hits.set(file, hits.get(file) ?? new Map())
  } else if (line.startsWith('BRDA:')) {
    const [n = '0', , , taken = '0'] = line.slice(5).split(',')
    if (taken === '0' || taken === '-') {
      const lines = untaken.get(file) ?? new Set()
      lines.add(Number(n))
      untaken.set(file, lines)
    }
  } else if (line.startsWith('DA:')) {
    const [n = '0', count = '0'] = line.slice(3).split(',')
    const seen = hits.get(file)
    seen?.set(Number(n), Math.max(seen.get(Number(n)) ?? 0, Number(count)))
  }
}
rmSync(dir, { recursive: true, force: true })

const ERROR = /\bthrow\b|\bfail\(|ok: false/
/** @type {string[]} */
const failures = []
for (const [f, lines] of hits) {
  if (!/^src\/.*\.logic\.js$/.test(f)) continue
  const text = readFileSync(f, 'utf8').split('\n')
  text.forEach((src, i) => {
    if (
      ERROR.test(src.replace(/\/\/.*$/, '')) &&
      (lines.get(i + 1) === 0 || untaken.get(f)?.has(i + 1))
    )
      failures.push(`Error tests: ${f}:${i + 1} is an error path no test runs: ${src.trim()}`)
  })
}
if (failures.length === 0) {
  console.log('✓ Error tests: every error path of the logic is run by a test.')
  process.exit(0)
}
console.error(`✗ ${failures.length} error path(s) no test runs:\n`)
for (const f of failures) console.error(`  ${f}`)
process.exit(1)
