#!/usr/bin/env node
// Hides: how Augustus's course file is derived from the built lives (content/), so the work list
// and the unit page read a small file and never load a life:
//   src/units/augustus/core/course.gen.js  each life's id, name and number of lessons, in reading
//     order, and each lesson's decision date and question.
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

const lessons = life.lessons.map(l => ({ date: l.date, question: l.question?.text ?? null }))

const course = {
  lives: LIVES.map(l => ({
    id: l.id,
    name: l.name,
    lessons: l.lessons.length,
    ...(l.setbacks.answer === false ? { setbacks: false } : {})
  })),
  lessons
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

console.log(`Augustus: ${lessons.length} lessons.`)

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

// The era screens of the raised level (21.01 <bu-bi-pipeline> Era sentences, Era pick, Era, Places,
// Map drawing): the session's answers stored as sources, checked and assembled here.
//   scripts/lib/augustus-era-sentences.json  the era reference's sentences as Rewrite gave them and
//     the Checker kept them (and, before 43 BC, none: those screens restate the main account).
//   scripts/lib/augustus-era-lessons.json  per decision: where its era comes from, Era pick's list,
//     and Era's screens as the ids they restate.
//   scripts/lib/augustus-places.json  per decision the Places job's table with the Pleiades id the
//     session wrote, and the lists of persons and other words the session sorted.
//   scripts/lib/augustus-pleiades.json  the Pleiades places those ids name, as the dump gives them.
//   scripts/lib/augustus-coast.json  today's coastline.
const { fits, datesIn } = await import('../lib/augustus-era.mjs')
const { drawMap } = await import('../lib/augustus-map.mjs')
const { sentencesOf } = await import('../../src/units/augustus/core/lives.logic.js')
/** @param {string} f */
const lib = f => JSON.parse(readFileSync(new URL(`../lib/${f}`, import.meta.url), 'utf8'))
/** @typedef {{ id: string, text: string, page: string | number, evidence: string, dispute: string, date?: { y: number } | null }} EraSentence */
/** @type {Record<string, EraSentence>} */
const eraSentences = Object.fromEntries(lib('augustus-era-sentences.json').map((/** @type {EraSentence} */ s) => [s.id, s]))
/** @type {Record<string, EraSentence>} */
const mainSentences = Object.fromEntries(
  life.lessons.flatMap(l => sentencesOf(l)).map(s => [s.id, { id: String(s.id), text: s.text, page: s.page, evidence: s.evidence ?? '', dispute: s.dispute ?? '' }])
)
/** @type {Record<string, { lat: number, lon: number, precision: string, first: number | null }>} */
const pleiades = Object.fromEntries(lib('augustus-pleiades.json').places.map((/** @type {{ id: string }} */ p) => [p.id, p]))
const placesOf = lib('augustus-places.json')
const coast = lib('augustus-coast.json').lines
const later = /\b(later|soon|future|would go on to|fateful|first of many|little did he know|eventually)\b/i
/** Every word the places table, the list of persons or the list of other words holds. */
const sorted = new Set([...placesOf.persons, ...placesOf.other])
/**
 * What stops a decision's map (21.01 <bu-bi-pipeline> Map drawing): a name with no Pleiades id,
 * a place Pleiades first dates after the decision's year, and a capitalised word of the situation
 * in neither the table, the persons nor the other words.
 * @param {readonly { name: string, id?: string | null, at?: string }[]} places
 * @param {Readonly<Record<string, string>>} situation
 * @param {number} year
 */
function mapStops(places, situation, year) {
  const named = new Set(places.flatMap(p => p.name.split(/\s+/)))
  const loose = Object.values(situation).flatMap(t =>
    [...t.matchAll(/\b\p{Lu}[\p{L}'’-]*/gu)].map(m => m[0].replace(/['’]s$/, ''))
  )
  return [
    ...places.flatMap(p => (p.at || p.id ? [] : [`"${p.name}" has no Pleiades id`])),
    ...places.flatMap(p => {
      const first = p.id ? pleiades[p.id]?.first : undefined
      return typeof first === 'number' && first > year ? [`"${p.name}" is first dated ${first}`] : []
    }),
    ...[...new Set(loose.filter(w => !named.has(w) && !sorted.has(w)))].map(w => `"${w}" is not sorted`)
  ]
}
/** @type {string[]} */
const stopped = []
/** @type {Record<string, unknown>} */
const era = {}
/** @type {Record<string, { text: string, page: string | number, evidence: string, dispute: string }>} */
const said = {}
/** @type {string[]} */
const faults = []
for (const e of lib('augustus-era-lessons.json').lessons) {
  const lesson = life.lessons.find(l => l.id === e.id)
  if (!lesson) throw new Error(`Era names lesson ${e.id}, which the life does not hold`)
  const bank = e.from === 'main' ? mainSentences : eraSentences
  const pick = new Set(e.pick)
  const screens = e.screens.map((/** @type {string[]} */ ids) => {
    const out = ids.map(id => {
      if (!pick.has(id)) faults.push(`${e.id}: a screen lists ${id}, outside Era pick's list`)
      const s = bank[id]
      if (!s) throw new Error(`${e.id}: no sentence ${id}`)
      if (later.test(s.text)) faults.push(`${e.id}: ${id} points ahead`)
      said[id] = { text: s.text, page: s.page, evidence: s.evidence, dispute: s.dispute }
      return s
    })
    if (!fits(out.map(s => s.text).join(' '))) faults.push(`${e.id}: a screen over 150 words or 17 lines`)
    const years = ids.flatMap(id => { const s = bank[id]; const y = s?.date?.y ?? (s ? datesIn(s.text)[0]?.y : undefined); return y === undefined ? [] : [y] })
    const y = years.length ? years.reduce((a, b) => ((a < 0 ? a + 1 : a) > (b < 0 ? b + 1 : b) ? a : b)) : lesson.date.y
    return { date: { y }, sentences: ids }
  })
  const table = placesOf.lessons[e.id]
  const situation = Object.fromEntries(
    lesson.situation.flatMap(sc => sc.sentences).map((s, k) => [String(k + 1), s.text])
  )
  const stops = table ? mapStops([...table.places, ...(table.same ?? []).map((/** @type {string} */ name) => ({ name, at: name }))], situation, lesson.date.y) : []
  if (stops.length) stopped.push(`${e.id}: ${stops.join('; ')}`)
  let map = null
  if (table && !stops.length && table.places.length) {
    map = drawMap({
      asOf: lesson.date.y,
      sentences: situation,
      places: table.places.map((/** @type {{ name: string, sentence: number, id?: string, at?: string }} */ p) => {
        const g = p.id ? pleiades[p.id] : undefined
        return p.at
          ? { name: p.name, sentence: String(p.sentence), at: p.at }
          : { name: p.name, sentence: String(p.sentence), lat: g?.lat, lon: g?.lon, approximate: g?.precision === 'rough' }
      }),
      coast,
      coastNote: "Today's coastline."
    })
    map = { ...map, places: map.places.map(p => ({ ...p, pleiades: table.places.find((/** @type {{ name: string }} */ q) => q.name === p.name)?.id ?? null })) }
  }
  era[e.id] = { from: e.from, screens, map }
}
if (faults.length) throw new Error(`The era screens fail the checks:\n${faults.join('\n')}`)
writeFileSync(
  new URL('../../src/units/augustus/content/era.gen.js', import.meta.url),
  generated(
    'scripts/gen/augustus.mjs',
    `// From scripts/lib/augustus-era-*.json, augustus-places.json and augustus-pleiades.json: the era
// screens of the raised level, by lesson, each with its map where one is drawn; every sentence a
// screen restates, once, by its id.
// prettier-ignore
export const ERA = ${JSON.stringify({ sentences: said, lessons: era }, null, 1)}
`
  )
)
// A stopped map waits on the session (an id to write, a word to sort); the era screens stand.
writeFileSync(new URL('../lib/augustus-map-stops.txt', import.meta.url), `${stopped.join('\n')}\n`)
console.log(`Augustus: era screens for ${Object.keys(era).length} decisions, ${Object.keys(said).length} sentences, ${Object.values(era).filter(x => /** @type {{ map: unknown }} */ (x).map).length} with a map.`)
