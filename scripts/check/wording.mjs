#!/usr/bin/env node
// The words ERUKO.md §6 and the Self-Study System paper's wording rules forbid, and the marks of
// machine-written prose, found wherever a regex can find them. The reading pass catches the rest.
//
// Everywhere (code, comments, docs, the units' own text): an em dash, and the stock words of
// machine-written prose. In what the learner reads (string literals and JSX text outside the
// generated data): the paper's banned words, "we" and its forms, contractions, exclamation marks
// and curly quotes.
// Text in a language the app teaches, and quoted sources, are left out by language, never by a
// list of exceptions; a unit names its own quoted and target-language files in
// scripts/check/<unit>-wording.json ({ "skip": [path prefix], "own": { path: line regex } }).
//
// Run: node scripts/check/wording.mjs   (wired into `npm run lint`)
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'

// Each unit's own list: files of quoted sources or of the language it teaches (`skip`), and files
// where only some lines are the app's own words (`own`).
const UNIT_LISTS = readdirSync('scripts/check')
  .filter(f => f.endsWith('-wording.json'))
  .map(f => JSON.parse(readFileSync(`scripts/check/${f}`, 'utf8')))
/** @type {string[]} */
const SKIP = UNIT_LISTS.flatMap(l => l.skip ?? [])

// Generated or third-party files: a fix goes into their source, or nowhere (ERUKO.md §5).
const GENERATED =
  /^(src\/units\/[^/]+\/core\/course\.gen\.js|src\/units\/[^/]+\/content\/bank\/index\.js|src\/units\/[^/]+\/content\/mathml\/|LICENSE|NOTICE|package-lock\.json|public\/)|\.gen\.js$/

const AI = new RegExp(
  '\\b(' +
    [
      'delve[sd]?',
      'crucial(ly)?',
      'robust(ly)?',
      'seamless(ly)?',
      'leverag(e|es|ed|ing)',
      'utili[sz](e|es|ed|ing)',
      'facilitat(e|es|ed|ing)',
      'furthermore',
      'moreover',
      'additionally',
      'notably',
      'essentially',
      'pivotal',
      'tapestry',
      'testament',
      'underscor(es|ed|ing)',
      'showcas(e|es|ed|ing)',
      'foster(s|ed|ing)?',
      'vibrant',
      'holistic',
      'streamlin(e|es|ed|ing)',
      'empower(s|ed|ing)?',
      'in order to',
      'worth noting',
      'serves as',
      'stands as',
      // Words language models use far above the human rate, in measured corpora (the Eruko
      // paper's Words section names the studies). A dated list: models change their words.
      'intricate',
      'camaraderie',
      'palpable',
      'amidst',
      'interplay',
      'multifaceted'
    ].join('|') +
    ')\\b',
  'i'
)

// The learner's text: the paper's Never list, its Speaker rule and its Register rule.
/** @type {[RegExp, string][]} */
const LEARNER = [
  [/\b(just|simply|easily|obviously|clearly|trivially)\b/i, 'a word ERUKO.md §6 forbids'],
  [/\bit is easy to see\b/i, 'a phrase ERUKO.md §6 forbids'],
  [/\b(we|our|ours|us|let's)\b/i, 'first person plural'],
  [/\b\w+(n't|'re|'ll|'ve|'d)\b/i, 'a contraction'],
  [/[a-z]!(\s|$)/i, 'an exclamation mark'],
  [/[‘’“”]/, 'a curly quote (use \' and ")'],
  // A sentence that ends on a participle clause stating what something means, which language
  // models write several times as often as people (the Eruko paper's Words section).
  [
    /, (highlighting|underscoring|reflecting|emphasi[sz]ing|showcasing|signall?ing)\b[^.]*\.?$/i,
    'a closing "-ing" clause that states significance'
  ]
]

// Text in the language taught, judged by its own words, is not under these rules.
const TAUGHT = /\b(der|die|das|und|ist|nicht|ich|du|sie|wir|ein|eine|mit|auf|für|Sie)\b|[äöüß]/
// Nor is text in Cyrillic letters, a language the app may teach; its dashes are the language's own.
const CYRILLIC = /[а-яА-Я]/

/** @type {Record<string, RegExp>} */
const OWN_WORDS = Object.fromEntries(
  UNIT_LISTS.flatMap(l => Object.entries(l.own ?? {})).map(([f, re]) => [f, new RegExp(re)])
)

/** @type {string[]} */
const failures = []
const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], {
  encoding: 'utf8'
})
  .split('\n')
  // The spec, the working guide and the wiki are kept out of git on this machine, so they are named.
  .concat(
    ['ERUKO.md'],
    existsSync('knowledge')
      ? readdirSync('knowledge', { recursive: true }).map(f => `knowledge/${String(f)}`)
      : []
  )
  .filter(
    f =>
      /\.(m?js|jsx|css|md|html|json|yaml)$/.test(f) &&
      !GENERATED.test(f) &&
      !SKIP.some(prefix => f.startsWith(prefix)) &&
      f !== 'scripts/check/wording.mjs' &&
      existsSync(f)
  )

// String literals and JSX text of a line, with comments taken out.
/**
 * @param {string} line
 * @returns {string[]}
 */
function learnerText(line) {
  const code = line.replace(/\/\/.*$/, '').replace(/\/\*.*?\*\//g, '')
  /** @type {string[]} */
  const out = []
  for (const m of code.matchAll(
    /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`|>([^<>{}]+)</g
  ))
    out.push(m[1] ?? m[2] ?? m[3] ?? m[4] ?? '')
  if (/^\s*[A-Za-z][^=;(){}]*$/.test(code) && !/^\s*(import|export|return|const|let)\b/.test(code))
    out.push(code)
  return out
}

for (const file of files) {
  // A test (src/**/*.test.js) is no text the learner reads.
  const learnerFile = /^src\/.*\.(jsx?|yaml)$/.test(file) && !file.endsWith('.test.js')
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      const at = `${file}:${i + 1}`
      if (line.includes('—') && !CYRILLIC.test(line)) failures.push(`${at}  an em dash`)
      const ai = line.match(AI)
      if (ai && !TAUGHT.test(line) && !CYRILLIC.test(line)) failures.push(`${at}  "${ai[0]}"`)
      if (!learnerFile || (OWN_WORDS[file] && !OWN_WORDS[file].test(line))) return
      for (const text of learnerText(line)) {
        if (TAUGHT.test(text) || CYRILLIC.test(text)) continue
        for (const [re, what] of LEARNER) {
          const m = text.match(re)
          if (m) failures.push(`${at}  ${what}: "${m[0]}"`)
        }
      }
    })
}

if (failures.length) {
  console.error(`check-wording: ${failures.length} found\n` + failures.join('\n'))
  process.exit(1)
}
console.log('check-wording: clean')
