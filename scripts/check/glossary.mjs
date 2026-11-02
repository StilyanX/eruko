#!/usr/bin/env node
// Hides: the app's one word for each thing, across every unit, and the
// check that no exported name or type uses a banned synonym. A name is cut into its words
// (camelCase, PascalCase, snake_case); a word on a banned list fails, naming the word to use.
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { SRC, walk } from '../lib/fs.mjs'

/**
 * Each thing's one word, what it means, and the words that may not name it.
 * @type {{ word: string, means: string, banned: string[] }[]}
 */
export const GLOSSARY = [
  { word: 'learner', means: 'the person who studies', banned: ['user', 'student', 'pupil'] },
  { word: 'unit', means: 'one course of the app, a folder of src/units/', banned: ['subject'] },
  { word: 'discipline', means: 'the group Explore lists units under', banned: ['domain'] },
  { word: 'page', means: 'what an address opens', banned: [] },
  { word: 'section', means: 'a named run of a course on its unit page', banned: ['chapter'] },
  { word: 'topic', means: "a maths unit's page of one method, its kinds and problems", banned: [] },
  { word: 'kind', means: 'a family of problems answered the same way', banned: ['genre'] },
  { word: 'problem', means: 'one thing to work and answer', banned: ['exercise', 'quiz'] },
  { word: 'card', means: 'a word to recall, front and back', banned: ['flashcard'] },
  { word: 'life', means: 'one biography read in a biography unit', banned: ['bio'] },
  {
    word: 'record',
    means: "what the app keeps of the learner's work",
    banned: ['progress', 'profile']
  },
  { word: 'part', means: 'one stored piece of the record, under its key', banned: ['bucket'] },
  {
    word: 'line',
    means: 'one dated answer on an item: its date, right or wrong, next date',
    banned: []
  },
  { word: 'mark', means: "the learner's own Right or Wrong", banned: ['grade'] },
  { word: 'right', means: 'an answer marked or checked as so', banned: ['correct', 'incorrect'] },
  { word: 'day', means: 'a study day, 04:00 to 04:00, as an ISO date', banned: [] },
  { word: 'sound', means: 'audio the learner hears', banned: ['audio'] },
  { word: 'step', means: 'one move of a study session on a page', banned: [] }
]

const BANNED = new Map(GLOSSARY.flatMap(g => g.banned.map(b => [b, g.word])))

/** @param {string} name */
const wordsOf = name =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .split(/[\s_$]+/)
    .filter(Boolean)
    .map(w => w.toLowerCase())

/** @type {string[]} */
const failures = []
if (import.meta.filename === process.argv[1]) {
  for (const file of walk(SRC, /\.js$/)) {
    const r = path.relative(process.cwd(), file).split(path.sep).join('/')
    if (/\.gen\.js$|\/content\/|sqlite-|\/hls-/.test(r)) continue
    const text = readFileSync(file, 'utf8')
    const names = [
      ...text.matchAll(/^export (?:async )?(?:const|let|function\*?|class) ([\w$]+)/gm),
      ...text.matchAll(/@typedef\s+\{[\s\S]*?\}\s+([\w$]+)/g)
    ].map(m => m[1] ?? '')
    for (const name of names)
      for (const w of wordsOf(name)) {
        const use = BANNED.get(w)
        if (use) failures.push(`Glossary: ${r} names ${name}; "${w}" is "${use}" here`)
      }
  }
  if (failures.length === 0) {
    console.log(`✓ Glossary: ${GLOSSARY.length} words, no exported name uses a banned synonym.`)
    process.exit(0)
  }
  console.error(`✗ ${failures.length} name(s) use a banned synonym:\n`)
  for (const f of failures) console.error(`  ${f}`)
  process.exit(1)
}
