#!/usr/bin/env node
// Arithmetic's derived files, from its topic and bank files in unit.yaml's course order:
//   src/units/arithmetic/core/course.gen.js       the page order and each topic's shape, for the work list,
//                                        the unit page and the pager (small, so no page loads every topic)
// Run after changing a topic or bank file: node scripts/gen/arithmetic.mjs
import { writeFileSync } from 'node:fs'
import { generated } from '../lib/generated.mjs'
import { DATA, courseShape } from '../lib/arithmetic-course.mjs'

const { pages, topics, bank } = await courseShape()

writeFileSync(
  new URL('../core/course.gen.js', DATA),
  generated(
    'scripts/gen/arithmetic.mjs',
    `// From content/unit.yaml and content/{topics,bank}.
// PAGES: every page in course order. TOPICS: each topic's kinds with their number of
// forms, proof and statement ids. BANK_KINDS: every bank problem's id and kind, in course order.
// prettier-ignore
export const PAGES = ${JSON.stringify(pages)}
// prettier-ignore
export const TOPICS = ${JSON.stringify(topics)}
// prettier-ignore
export const BANK_KINDS = ${JSON.stringify(bank)}
`
  )
)

console.log(`${topics.length} topics, ${bank.length} bank problems.`)
