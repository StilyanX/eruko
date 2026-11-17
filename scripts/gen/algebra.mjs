#!/usr/bin/env node
// Algebra's derived files, from its topic and bank files in unit.yaml's course order:
//   src/units/algebra/core/course.gen.js     the page order, titles, sections and each topic's shape,
//                                         for the registry, the unit page and mixed practice (small,
//                                         so no page loads every topic)
//   src/units/algebra/content/figures/*.svg  each graph, drawn from its spec in figures/<topic>.json
// Run after changing a topic or bank file or a spec: node scripts/gen/algebra.mjs
import { writeFileSync } from 'node:fs'
import { generated } from '../lib/generated.mjs'
import { DATA, courseShape } from '../lib/algebra-course.mjs'
import { draw, figureDir, specs } from '../lib/graph-figures.mjs'

const DIR = figureDir('algebra')
const drawn = Object.entries(specs(DIR))
for (const [name, spec] of drawn) {
  const { svg, faults } = draw(spec)
  if (faults.length) throw new Error(`${name}: ${faults.join('; ')}`)
  writeFileSync(new URL(name, DIR), svg)
}

const { pages, titles, sections, topics, bank, inserted } = await courseShape()

writeFileSync(
  new URL('../core/course.gen.js', DATA),
  generated(
    'scripts/gen/algebra.mjs',
    `// From content/unit.yaml and content/{topics,bank}.
// PAGES: every page in course order. TITLES: each topic's title. SECTIONS: the runs of the course
// order, each with its number in unit.yaml's list (two may share a title). TOPICS: each topic's kinds with their number of forms,
// proof and statement ids, and its number. BANK_KINDS: every bank problem's id and kind. INSERTED:
// the topics written as missing prerequisites, whose numbers stand out of course order.
// Each list states its type, so a course with no topic yet still has one.
// prettier-ignore
export const PAGES = ${JSON.stringify(pages)}
/** @type {Record<string, string>} */
// prettier-ignore
export const TITLES = ${JSON.stringify(titles)}
/** @type {{ title: string, no: number, first: number, last: number }[]} */
// prettier-ignore
export const SECTIONS = ${JSON.stringify(sections)}
/** @type {{ slug: string, number: number, bare: boolean, kinds: { id: string, forms: number }[], proofs: string[], prove: { id: string, method: string }[] }[]} */
// prettier-ignore
export const TOPICS = ${JSON.stringify(topics)}
/** @type {[string, string][]} */
// prettier-ignore
export const BANK_KINDS = ${JSON.stringify(bank)}
/** @type {string[]} */
// prettier-ignore
export const INSERTED = ${JSON.stringify(inserted)}
`
  )
)

console.log(`${topics.length} topics, ${bank.length} bank problems, ${drawn.length} graphs drawn.`)
