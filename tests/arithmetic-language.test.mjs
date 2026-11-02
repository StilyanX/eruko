// The Arithmetic unit's material against "A Self-Study System" (Mathematics, "The material" and
// "The wording"): the shape of a topic file and a bank problem, the counts, and the wording rules
// that a machine can check.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { FORMS, PROOF_FORM, matchAnswer } from '../src/units/arithmetic/core/check.logic.js'
import { badDecimalGroups } from './lib/decimal-groups.mjs'

const DIR = new URL('../src/units/arithmetic/content/', import.meta.url)
// ARITH_SLUGS=a,b checks only those topics, so one author can test their own files.
const ONLY = process.env.ARITH_SLUGS?.split(',')
/** A line of a worked example, fade or proof. @typedef {{ step?: string, reason?: string, line?: string }} Line */
/** A problem as the data files store it; fields the tests check for their type are `unknown`; a stored list the tests check is present is typed present. A solution's line is its text, or its text and a figure. @typedef {{ id: string, topic: unknown, kind: string, calc: string, prompt: string, answer: string, form: string, solution: (string | { step: string })[], lines: Line[] }} Problem */
/** A topic file as the data files store it; `number` and `manyParts` are checked for their type. @typedef {{ number: unknown, manyParts: unknown, bare?: Problem, kinds: { id: string, forms: { example?: { problem?: string, lines: Line[] }, fade?: Problem[] }[] }[], proofs: { id: string, method: string, statement?: string, idea?: string, lines?: Line[] }[], prove: { id?: string, statement?: string, method: string, check?: { proof?: unknown } }[] }} Topic */

/**
 * @template T
 * @param {string} sub
 * @returns {Promise<[string, T][]>}
 */
const load = async sub =>
  Promise.all(
    readdirSync(new URL(sub, DIR))
      .filter(f => f !== 'index.js' && (!ONLY || ONLY.includes(f.replace('.js', ''))))
      .map(async (/** @type {string} */ f) => /** @type {[string, T]} */ ([f.replace('.js', ''), (await import(new URL(`${sub}/${f}`, DIR).href)).default]))
  )
/** @type {[string, Topic][]} */
const topics = await load('topics')
/** @type {[string, Problem[]][]} */
const bankFiles = await load('bank')
const banks = Object.fromEntries(bankFiles)

// The paper's list of ten proof methods ("Proofs"), plus infinite descent, which it adds as its own method.
const METHODS = [
  'direct proof',
  'proof of the contrapositive',
  'proof by contradiction',
  'proof by cases',
  'induction',
  'strong induction',
  'proof of existence by construction',
  'disproof by counterexample',
  'the pigeonhole principle',
  'proof by a one-to-one correspondence',
  'infinite descent'
]
// "Worked examples and problems": one imperative verb per job.
const VERBS = /^(Find|Compute|Prove that|Decide whether|Write|Round|Estimate|Place)\b/
const BANNED =
  /\b(I|we|us|our|let's|let us|clearly|obviously|trivially|it is easy to see|easy|easily|simple|simply|tricky|hard|difficult|any|anything|anyone|hint|well done|great|amazing|note that|it is important|sorry|apologi[sz]e|mistakes help|don't worry|students)\b|[∀∃⇒∴]|\\(forall|exists|Rightarrow|implies|therefore)\b|\b\w+(n't|'re|'ll|'ve|'m)\b|\b(section|chapter|activity|exercise|theorem|problem) \d/i
/** @param {string | { step: string } | undefined} line a solution's line, as its text */
const stepOf = line => (typeof line === 'string' ? line : (line?.step ?? ''))
const REMAINDER = /\d\s*(R|\\text\{\s*R\s*\}|\\mathrm\{R\})\s*\d/
const BIG = /(?<![\d.,\\])\d{4,}/ // an ungrouped run of four or more digits, inside math or prose

/** @param {string} s */
const prose = s => s.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, ' ')

/**
 * Every displayed string with its path; ids, tags and links are not displayed text.
 * @param {unknown} x
 * @param {string} path
 * @param {[string, string][]} out
 */
function strings(x, path, out) {
  if (typeof x === 'string') out.push([path, x])
  else if (Array.isArray(x)) x.forEach((v, i) => strings(v, `${path}[${i}]`, out))
  else if (x && typeof x === 'object')
    for (const [k, v] of Object.entries(x))
      if (!['id', 'kind', 'topic', 'nng', 'form', 'method', 'calc', 'answer', 'number', 'manyParts'].includes(k))
        strings(v, `${path}.${k}`, out)
  return out
}

/**
 * A solution's last line, written in TeX, as the learner would type it.
 * @param {string} tex
 */
function typed(tex) {
  return tex
    .replace(/\$/g, '')
    .replace(/(\d)\\,(?=\d)/g, '$1') // a thin space between digits groups them; it is not a mixed number's space
    .replace(/\\(d|t)?frac\{([^{}]+)\}\{([^{}]+)\}/g, '$2/$3')
    .replace(/\\overline\{([^{}]+)\}/g, '($1)')
    .replace(/\\(,|;|:|!| |thinspace)/g, ' ')
    .replace(/\\%/g, '%')
    .replace(/\\times|\\cdot/g, '×')
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\left|\\right/g, '')
    .replace(/[{}]/g, '')
    .replace(/\.$/, '')
    .trim()
}

/**
 * @param {string} slug
 * @returns {Problem[]}
 */
const bankOf = slug => banks[slug] ?? []
const allBank = Object.values(banks).flat()
/** @type {Record<string, Problem[]>} */
const byKind = {}
for (const p of allBank) (byKind[p.kind] ||= []).push(p)

test('every topic has its required fields, and bare only where the paper allows it', () => {
  const bad = []
  const numbers = new Set()
  for (const [slug, t] of topics) {
    if (!Number.isInteger(t.number)) bad.push(`${slug}: number`)
    if (numbers.has(t.number)) bad.push(`${slug}: number ${String(t.number)} reused`)
    numbers.add(t.number)
    if (typeof t.manyParts !== 'boolean') bad.push(`${slug}: manyParts`)
    const method = t.kinds.some((k) => k.forms.length > 0)
    if (!method && t.manyParts) bad.push(`${slug}: an idea with no method has manyParts false`)
    if (Boolean(t.bare) !== (method && !t.manyParts)) bad.push(`${slug}: bare exactly when a new method and not manyParts`)
    if (!t.kinds.length) bad.push(`${slug}: no kinds`)
    if (!method && t.kinds.length !== 1) bad.push(`${slug}: an idea with no method has one kind`)
    if (t.bare) {
      if (!VERBS.test(t.bare.prompt)) bad.push(`${slug}: bare prompt verb`)
      if (!(t.bare.form in FORMS)) bad.push(`${slug}: bare form`)
      if (!(t.bare.solution?.length >= 1)) bad.push(`${slug}: bare solution, shown after the attempt`)
      else if (!matchAnswer(typed(stepOf(t.bare.solution.at(-1))), t.bare.answer, t.bare.form)) bad.push(`${slug}: bare solution does not end on its answer`)
    }
    for (const k of t.kinds) {
      if (!k.id.startsWith(`t${String(t.number)}-k`)) bad.push(`${slug}: kind id ${k.id}`)
      for (const [i, f] of k.forms.entries()) {
        const where = `${k.id} form ${i + 1}`
        if (!f.example?.problem || !(f.example.lines?.length >= 3)) bad.push(`${where}: example needs a problem and three lines`)
        else if (!VERBS.test(f.example.problem)) bad.push(`${where}: example problem opens without an imperative`)
        if (f.example?.lines?.some((l) => !l.step || !l.reason)) bad.push(`${where}: example line without step or reason`)
        if (f.fade?.length !== 3) bad.push(`${where}: three fading problems`)
        for (const [j, p] of (f.fade || []).entries()) {
          if (!VERBS.test(p.prompt)) bad.push(`${where} fade ${j + 1}: verb`)
          if (!(p.form in FORMS) || p.form === PROOF_FORM) bad.push(`${where} fade ${j + 1}: form`)
          if (!(p.lines?.length >= 3) || p.lines.some((l) => !l.step || !l.reason)) bad.push(`${where} fade ${j + 1}: three lines with reasons`)
          else if (!matchAnswer(typed(p.lines.at(-1)?.step ?? ''), p.answer, p.form))
            bad.push(`${where} fade ${j + 1}: last line "${p.lines.at(-1)?.step}" is not the answer "${p.answer}"`)
        }
      }
    }
  }
  assert.deepEqual(bad, [])
})

test('every kind has at least twelve bank problems, and every problem a taught kind', () => {
  const kinds = new Set(topics.flatMap(([, t]) => t.kinds.map((k) => k.id)))
  const bad = [...kinds].filter(k => (byKind[k]?.length ?? 0) < 12).map(k => `${k}: ${byKind[k]?.length ?? 0} problems`)
  for (const p of allBank) if (!kinds.has(p.kind)) bad.push(`${p.id}: untaught kind ${p.kind}`)
  assert.deepEqual(bad, [])
})

test('every bank problem: id, tags, calculator mark, form, and a solution that ends on the answer', () => {
  const bad = []
  const ids = new Set()
  /** @type {Record<string, Set<string>>} */
  const calc = {}
  for (const [slug] of topics)
    for (const p of bankOf(slug)) {
      if (!/^t\d+-k\d+-p\d{2,}$/.test(p.id) || !p.id.startsWith(`${p.kind}-p`)) bad.push(`${p.id}: id`)
      if (ids.has(p.id)) bad.push(`${p.id}: id reused`)
      ids.add(p.id)
      if (p.topic !== slug) bad.push(`${p.id}: topic tag`)
      if (p.calc !== 'yes' && p.calc !== 'no') bad.push(`${p.id}: calc`)
      ;(calc[slug] ||= new Set()).add(p.calc)
      if (!(p.form in FORMS)) bad.push(`${p.id}: form "${p.form}"`)
      if (!VERBS.test(p.prompt)) bad.push(`${p.id}: prompt opens without an imperative`)
      if (!(p.solution?.length >= 1)) bad.push(`${p.id}: solution`)
      else if (p.form === PROOF_FORM) {
        if (p.answer != null) bad.push(`${p.id}: a proof problem stores no answer`)
      } else if (!matchAnswer(p.answer, p.answer, p.form)) bad.push(`${p.id}: answer "${p.answer}" is not in its form`)
      else if (!matchAnswer(typed(stepOf(p.solution.at(-1))), p.answer, p.form))
        bad.push(`${p.id}: last solution line "${stepOf(p.solution.at(-1))}" is not the answer "${p.answer}"`)
    }
  for (const [slug, s] of Object.entries(calc)) if (s.size > 1) bad.push(`${slug}: calc differs inside the topic`)
  assert.deepEqual(bad, [])
})

test('proofs to read and statements to prove: a method from the list, lines with reasons, a statement for each method read, a published check', () => {
  const bad = []
  for (const [slug, t] of topics) {
    for (const p of t.proofs) {
      if (!METHODS.includes(p.method)) bad.push(`${p.id}: method "${p.method}"`)
      if (!p.statement || !p.idea) bad.push(`${p.id}: statement and idea`)
      if (!p.lines?.length || p.lines.some((l) => !l.line || !l.reason)) bad.push(`${p.id}: lines with reasons`)
    }
    if (t.proofs.length && !t.prove.length) bad.push(`${slug}: proofs to read with no statements to prove`)
    const methods = new Set(t.prove.map((s) => s.method))
    for (const m of new Set(t.proofs.map((p) => p.method)))
      if (!methods.has(m)) bad.push(`${slug}: no statement practises ${m}`)
    for (const s of t.prove) {
      if (!s.id || !s.statement) bad.push(`${slug}: statement`)
      if (!METHODS.includes(s.method)) bad.push(`${s.id}: method "${s.method}"`)
      const c = s.check || {}
      const proof = Array.isArray(c.proof) && c.proof.length > 0 && c.proof.every((l) => l.line && l.reason)
      if (!proof || Object.keys(c).length !== 1) bad.push(`${s.id}: check is a published proof, lines with reasons`)
    }
  }
  assert.deepEqual(bad, [])
})

test('no banned word, symbol, contraction, remainder sign, or source reference', () => {
  const all = [...topics, ...Object.entries(banks)].flatMap(([slug, data]) => strings(data, slug, []))
  const bad = all
    .filter(([, s]) => BANNED.test(prose(s)) || REMAINDER.test(s))
    .map(([p, s]) => `${p}: ${(prose(s).match(BANNED) || s.match(REMAINDER))?.[0]} · ${s.slice(0, 80)}`)
  assert.deepEqual(bad, [])
})

test('digits in groups of three, and no sentence starts with a symbol', () => {
  const all = [...topics, ...Object.entries(banks)]
    .filter(([slug]) => slug !== 'numbers-in-base-b')
    .flatMap(([slug, data]) => strings(data, slug, []))
  const bad = []
  for (const [p, s] of all) {
    if (BIG.test(s.replace(/\\[a-zA-Z]+/g, ' '))) bad.push(`${p}: ungrouped digits · ${s.slice(0, 80)}`)
    for (const run of badDecimalGroups(s, 4)) bad.push(`${p}: digits after the point not grouped from the point · ${run}`)
    // A line that opens with math and goes on in words starts a sentence with a symbol.
    if (/^\$[^$]+\$\s+[a-z]/.test(s)) bad.push(`${p}: opens with a symbol · ${s.slice(0, 80)}`)
  }
  assert.deepEqual(bad, [])
})

test('digits after the point group in threes from the point at four or more, never at three', () => {
  assert.deepEqual(
    badDecimalGroups('$0.140\\,625$ and 4.549\u2009937\u20096 and 0.065\u20098 and 0.658 and $2.828\\,4\\ldots$ and $0.5412\\overline9$', 4),
    []
  )
  assert.deepEqual(badDecimalGroups('$0.140625$ $0.14\\,0625$ $0.0658$ $0.65\\,8$', 4), ['.140625', '.14\\,0625', '.0658', '.65\\,8'])
})

test('no string holds a control character, the mark of a TeX command written with one backslash', () => {
  const bad = [...topics, ...Object.entries(banks)]
    .flatMap(([slug, data]) => strings(data, slug, []))
    .filter(([, s]) => /[\t\f\b\n\v\r]/.test(s))
    .map(([p, s]) => `${p}: ${JSON.stringify(s.slice(0, 60))}`)
  assert.deepEqual(bad, [])
})

test('no string has a gap where math was dropped: two spaces in a row, or an empty $ $ span', () => {
  const bad = [...topics, ...Object.entries(banks)]
    .flatMap(([slug, data]) => strings(data, slug, []))
    .filter(([, s]) => /\S {2,}\S/.test(s) || /\$\s*\$/.test(s.replace(/\$\$[\s\S]*?\$\$/g, '')))
    .map(([p, s]) => `${p}: ${s.slice(0, 70)}`)
  assert.deepEqual(bad, [])
})

test('a reason names its fact in words: it never opens with a formula', () => {
  const bad = [...topics, ...Object.entries(banks)]
    .flatMap(([slug, data]) => strings(data, slug, []))
    .filter(([p, s]) => /\.reason$/.test(p) && /^\s*\$/.test(s))
    .map(([p, s]) => `${p}: ${s.slice(0, 70)}`)
  assert.deepEqual(bad, [])
})
