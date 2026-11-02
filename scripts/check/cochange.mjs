#!/usr/bin/env node
// Hides: which files in different folders change together. Run once
// a quarter: it reads the git log and lists the ten pairs of hand-written files, in different
// folders, that most often change in the same commit; each pair is then joined into one folder or
// pulled apart. Generated files and the record of the service worker's files are left out, since
// they change with whatever changes. node scripts/check/cochange.mjs [--since 3.months]
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const at = process.argv.indexOf('--since')
const since = at >= 0 ? (process.argv[at + 1] ?? '3.months') : '3.months'
const log = execFileSync('git', ['log', `--since=${since}`, '--name-only', '--format=format:@@'], {
  encoding: 'utf8'
})
const LEFT_OUT = /\.gen\.js$|^src\/index\.html$|package-lock\.json$|\/content\//
/** @type {Map<string, number>} */
const pairs = new Map()
for (const commit of log.split('@@')) {
  const files = [...new Set(commit.split('\n').map(f => f.trim()))].filter(
    f => f && !LEFT_OUT.test(f)
  )
  // A commit that moves the whole tree says nothing about which files belong together.
  if (files.length > 40) continue
  for (let i = 0; i < files.length; i++)
    for (let j = i + 1; j < files.length; j++) {
      const [a = '', b = ''] = [files[i] ?? '', files[j] ?? ''].sort((x, y) =>
        x < y ? -1 : x > y ? 1 : 0
      )
      if (path.dirname(a) === path.dirname(b)) continue
      pairs.set(`${a}  ${b}`, (pairs.get(`${a}  ${b}`) ?? 0) + 1)
    }
}
const top = [...pairs].sort((x, y) => y[1] - x[1]).slice(0, 10)
console.log(`The ten pairs in different folders that changed together most since ${since}:`)
for (const [pair, n] of top) console.log(`  ${n}  ${pair}`)
