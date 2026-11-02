#!/usr/bin/env node
// Hides: how a hand edit of a generated file is caught: every
// .gen.js file opens with its generator's name and the SHA-256 of what follows, and this check
// fails when the two no longer match.
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { SRC, walk } from '../lib/fs.mjs'
import { generatedFault } from '../lib/generated.mjs'

const files = walk(SRC, /\.gen\.js$/).map(f =>
  path.relative(process.cwd(), f).split(path.sep).join('/')
)
const faults = files.flatMap(f => {
  const fault = generatedFault(readFileSync(f, 'utf8'))
  return fault ? [`Generated content: ${f} ${fault}`] : []
})
if (faults.length === 0) {
  console.log(
    `✓ Generated content: ${files.length} generated files, each as its generator wrote it.`
  )
  process.exit(0)
}
console.error(`✗ ${faults.length} generated file(s) not as written:\n`)
for (const f of faults) console.error(`  ${f}`)
process.exit(1)
