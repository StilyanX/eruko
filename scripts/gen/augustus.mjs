#!/usr/bin/env node
// Hides: how Augustus's course file is derived from the built lives (content/), so the work list
// and the unit page read a small file and never load a life:
//   src/units/augustus/core/course.gen.js  each life's id, name and number of lessons, in reading
//     order; his birth date; each lesson's decision date and question, with the year its first
//     screen opens on; and the unit page's sections, runs of lessons by the age the date line
//     shows (its lower age), ten years to a band, the first from his birth to 19, the last ending
//     at the highest age of its last lesson's date line.
//   src/units/augustus/content/original.gen.js  the end level's original: each chapter of the Res
//     Gestae that a sentence's evidence cites alone, in Latin and in Greek, as the LacusCurtius
//     transcription of Shipley's Loeb text (1924) prints it, cut from its six pages as fetched from
//     https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Augustus/Res_Gestae/1*.html to 6*.html
//     and stored as scripts/lib/augustus-shipley-<part>.html (scripts/lib/augustus-original.mjs).
//   src/units/augustus/content/lives.gen.js  every life built, in reading order.
// Run after the built life changes: node scripts/gen/augustus.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { cutOriginal, wordsNotPrinted } from '../lib/augustus-original.mjs'
import { generated } from '../lib/generated.mjs'
import { readingChapters } from '../../src/units/augustus/core/end.logic.js'
import { ageAt } from '../../src/units/augustus/core/next.logic.js'

// Every life built (content/<life>.js): Augustus first, the unit's first life, then the others in
// the order they were built, each file's one export. A life the builder writes enters here.
const CONTENT = new URL('../../src/units/augustus/content/', import.meta.url)
const files = readdirSync(CONTENT)
  .filter(f => f.endsWith('.js') && !f.endsWith('.gen.js'))
  .map(f => ({ f, text: readFileSync(new URL(f, CONTENT), 'utf8') }))
  .map(({ f, text }) => ({
    f,
    name: /export const (\w+) =/.exec(text)?.[1],
    built: /built (\d{4}-\d{2}-\d{2})/.exec(text)?.[1] ?? ''
  }))
  .sort((a, b) =>
    a.f === 'augustus.js'
      ? -1
      : b.f === 'augustus.js'
        ? 1
        : a.built.localeCompare(b.built) || a.f.localeCompare(b.f)
  )
writeFileSync(
  new URL('lives.gen.js', CONTENT),
  generated(
    'scripts/gen/augustus.mjs',
    `// Every life built, in reading order.
${files.map(x => `import { ${x.name} } from './${x.f}'`).join('\n')}

export const BUILT = [${files.map(x => x.name).join(', ')}]
`
  )
)
const { LIVES } = await import('../../src/units/augustus/core/lives.logic.js')

const [life] = LIVES
if (!life) throw new Error('No life is built.')

const lessons = life.lessons.map(l => {
  const head = l.situation[0] ?? l.outcome[0]
  if (!head) throw new Error(`Lesson ${l.id} has no screen.`)
  return { date: l.date, from: head.date.y, question: l.question?.text ?? null }
})

/** @type {{ lo: number, hi: number, first: number, last: number }[]} */
const bands = []
life.lessons.forEach((l, i) => {
  // "18" or "18–19": the lower age places the lesson, the higher ends the last band.
  const [age = NaN, top = age] = ageAt(l.date, life.born).split('–').map(Number)
  if (Number.isNaN(age)) throw new Error(`Lesson ${l.id} has no age.`)
  const lo = age < 20 ? 0 : Math.floor(age / 10) * 10
  const band = bands.at(-1)
  if (band?.lo === lo) Object.assign(band, { last: i + 1, hi: Math.max(band.hi, top) })
  else bands.push({ lo, hi: top, first: i + 1, last: i + 1 })
})
const sections = bands.map(({ lo, hi, first, last }, k) => ({
  first,
  last,
  title: lo === 0 ? 'Birth to age 19' : `Age ${lo} to ${k === bands.length - 1 ? hi : lo + 9}`
}))

const course = {
  lives: LIVES.map(l => ({
    id: l.id,
    name: l.name,
    lessons: l.lessons.length,
    ...(l.setbacks.answer === false ? { setbacks: false } : {})
  })),
  born: life.born,
  lessons,
  sections
}

writeFileSync(
  new URL('../../src/units/augustus/core/course.gen.js', import.meta.url),
  generated(
    'scripts/gen/augustus.mjs',
    `// From content/augustus.js: the course as the work list and the unit page read it.
// prettier-ignore
export const COURSE = ${JSON.stringify(course, null, 1)}
`
  )
)

console.log(`Augustus: ${lessons.length} lessons in ${sections.length} sections.`)

const pages = [1, 2, 3, 4, 5, 6].map(p =>
  readFileSync(new URL(`../lib/augustus-shipley-${p}.html`, import.meta.url), 'utf8')
)
const cited = readingChapters(life)
const original = cutOriginal(pages, cited)
const unprinted = original.chapters.flatMap(c => wordsNotPrinted(c, pages).map(w => `${c.n} ${w}`))
if (unprinted.length)
  throw new Error(`Words the transcription does not print: ${unprinted.join(', ')}`)

writeFileSync(
  new URL('../../src/units/augustus/content/original.gen.js', import.meta.url),
  generated(
    'scripts/gen/augustus.mjs',
    `// From scripts/lib/augustus-shipley-<part>.html: the chapters of the Res Gestae the end level reads.
// prettier-ignore
export const ORIGINAL = ${JSON.stringify(original, null, 1)}
`
  )
)

console.log(
  `Augustus: the original holds chapters ${original.chapters.map(c => c.n).join(', ')} of the ${cited.length} cited alone.`
)
