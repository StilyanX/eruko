#!/usr/bin/env node
// Hides: the Checker's first part run on the era sentences as shipped (21.01 <bu-bi-pipeline>
// Checker): every name, number and quoted word of each sentence in scripts/lib/
// augustus-era-sentences.json stands on its page of the era reference, and no sentence on a screen
// states a date that may fall after its decision. The era reference is not in the repository, so
// the pages are given as a folder of page files, p001.txt to p999.txt, one per printed page.
//   node scripts/augustus-era-check.mjs <folder of page files>
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { datesIn, missing, pageText, reached } from './lib/augustus-era.mjs'

const folder = process.argv[2]
if (!folder) throw new Error('Name the folder of page files: node scripts/augustus-era-check.mjs <folder>')
/** @param {number} n */
const page = n => {
  try {
    return pageText(readFileSync(join(folder, `p${String(n).padStart(3, '0')}.txt`), 'utf8'))
  } catch {
    return ''
  }
}
/** @type {{ id: string, page: number, text: string, date: { y: number, m?: number, d?: number } | null }[]} */
const sentences = JSON.parse(readFileSync('scripts/lib/augustus-era-sentences.json', 'utf8'))
const lessons = JSON.parse(readFileSync('scripts/lib/augustus-era-lessons.json', 'utf8')).lessons
const { AUGUSTUS } = await import('../src/units/augustus/content/augustus.js')
const faults = sentences.flatMap(s => {
  // A modern place the Rewrite mark gave, checked against Pleiades when it was kept, is no word of the page.
  const m = missing(s.text.replace(/ \(in modern [^)]*\)/g, ''), `${page(s.page)} ${page(s.page + 1).slice(0, 600)}`)
  return m.length ? [`${s.id}: not on page ${s.page}: ${m.join(', ')}`] : []
})
const byId = Object.fromEntries(sentences.map(s => [s.id, { ...s, dates: datesIn(s.text) }]))
for (const l of lessons.filter((/** @type {{ from: string }} */ x) => x.from === 'era')) {
  const date = AUGUSTUS.lessons.find((/** @type {{ id: string }} */ x) => x.id === l.id)?.date
  if (!date) throw new Error(`No lesson ${l.id}`)
  /** @type {(typeof byId)[string][]} */
  const shown = l.screens.flat().flatMap((/** @type {string} */ id) => (byId[id] ? [byId[id]] : []))
  const kept = new Set(reached(shown, { ...date }).map(s => s.id))
  for (const s of shown) if (!kept.has(s.id)) faults.push(`${l.id}: ${s.id} may fall after the decision`)
}
console.log(faults.length ? faults.join('\n') : `The Checker: ${sentences.length} era sentences on their pages; none after its decision.`)
process.exitCode = faults.length ? 1 : 0
