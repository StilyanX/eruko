#!/usr/bin/env node
// Hides: which files the C++ unit's sources become, and what each holds. From
// src/units/cpp/content/ (unit.md, labels.md, kinds/NN-slug/), after every check of
// scripts/lib/cpp-course.mjs has passed:
//   src/units/cpp/core/course.gen.js     the sections and each kind's name, plan, problem ids and
//                                        trace id (small: the unit page and the work list read it)
//   src/units/cpp/content/kNN.gen.js     one per kind folder: its worked example, its trace item
//                                        with the recorded table, its problems with their tests
// Run after changing a source: node scripts/gen/cpp.mjs (needs g++, and gdb or nix-shell). While
// kinds are being written, --draft (or CPP_DRAFT=1) skips the one check that a kind holds 10
// problems; npm run gen runs without it.
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { generated } from '../lib/generated.mjs'
import { CONTENT, buildCourse, courseShape } from '../lib/cpp-course.mjs'
import { buildTrack, checkKindFile } from '../lib/cpp-track.mjs'

const GEN = 'scripts/gen/cpp.mjs'
// --track-file <file>: check one track kind file alone, while its stage is written; write nothing
const one = process.argv.indexOf('--track-file')
if (one > 0) {
  try {
    const k = await checkKindFile(path.resolve(process.argv[one + 1] ?? ''))
    const c = k.content
    console.log(`${k.shape.id} ${k.shape.name}: passes its entry checks (${c.verdicts.length} verdict, ${c.count ? 1 : 0} count, ${c.alones.length} alone).`)
    process.exit(0)
  } catch (e) {
    console.error(e instanceof Error ? e.message : String(e))
    process.exit(1)
  }
}
const started = Date.now()
const draft = process.argv.includes('--draft') || process.env.CPP_DRAFT === '1'
/** @type {Awaited<ReturnType<typeof buildCourse>>} */
let built
try {
  built = await buildCourse(undefined, { draft })
} catch (e) {
  // A failed check names its file, line and rule; the stack would only hide it.
  console.error(e instanceof Error ? e.message : String(e))
  process.exit(1)
}
const { course, kinds } = built
const { sections, kinds: shape } = courseShape(course)

writeFileSync(
  path.join(CONTENT, '..', 'core', 'course.gen.js'),
  generated(
    GEN,
    `// From content/unit.md and content/kinds/. SECTIONS: the runs of kinds the unit page shows.
// KINDS: one per kind folder, in course order: its name, the kinds its plan uses, its plan (its
// first-level labels in order), its problem ids in course order and its trace item's id.
// prettier-ignore
export const SECTIONS = ${JSON.stringify(sections)}
// prettier-ignore
export const KINDS = ${JSON.stringify(shape)}
`
  )
)

for (const kind of kinds)
  writeFileSync(
    path.join(CONTENT, `k${String(kind.id).padStart(2, '0')}.gen.js`),
    generated(
      GEN,
      `// From content/kinds/${String(kind.id).padStart(2, '0')}-*/. KIND: the worked example, the trace item (its
// program, inputs, columns, the table recorded for the first input and what the program prints
// for the second) and the problems, each with its hidden tests' outputs made by the reference.
// prettier-ignore
export const KIND = ${JSON.stringify(kind)}
`
    )
  )

/** @type {Awaited<ReturnType<typeof buildTrack>>} */
let track
try {
  track = await buildTrack()
} catch (e) {
  console.error(e instanceof Error ? e.message : String(e))
  process.exit(1)
}
writeFileSync(
  path.join(CONTENT, '..', 'core', 'track.gen.js'),
  generated(
    GEN,
    `// From content/track/. STAGES: the nine stages, each with its book. TRACK: the language track's
// kinds in track order, each with its stage, part, the kinds it needs, its clauses, its levels and
// its items' ids.
/** @type {readonly import('./track-decode.logic.js').Stage[]} */
// prettier-ignore
export const STAGES = ${JSON.stringify(track.stages)}
/** @type {readonly import('./track-decode.logic.js').TrackKind[]} */
// prettier-ignore
export const TRACK = ${JSON.stringify(track.kinds)}
`
  )
)
for (const [stage, kindsOf] of Object.entries(track.content))
  writeFileSync(
    path.join(CONTENT, `t${stage}.gen.js`),
    generated(
      GEN,
      `// From content/track/${stage}/. KINDS: each kind of the stage by its id: its worked example, its
// verdict items with what g++ and the sanitizer gave at each level, its count item with the
// counts recorded, and its items alone with their wrong versions, each through its entry check.
// prettier-ignore
export const KINDS = ${JSON.stringify(kindsOf)}
`
    )
  )

const problems = kinds.reduce((n, k) => n + Object.keys(k.problems).length, 0)
console.log(`C++: ${kinds.length} kinds, ${problems} problems; the track: ${track.kinds.length} kinds; in ${((Date.now() - started) / 1000).toFixed(1)} s.`)
