// The Algebra unit's material: the shape of a topic file and a
// bank problem, the counts, the two kinds algebra adds, and the wording rules a machine can check.
// ALGEBRA_SLUGS=a,b checks only those topics, so one author can test their own. With no topic
// written, every test passes on nothing.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync } from 'node:fs'
import { ERROR_FORM, FORMS, LINE_FORM, PROOF_FORM, SELF_MARKED, SKETCH_FORM, TRANSLATE_FORM, TRANSLATE_INEQUALITY_FORM, matchAnswer, wrongLine } from '../src/units/algebra/core/check.logic.js'
import { listOf } from '../scripts/lib/algebra-course.mjs'

/**
 * The shapes the data files promise. A test below fails the data where one of these is not true
 * at run time, so the types state the promise and the checks hold the files to it.
 * @typedef {{ alt?: string, file?: string }} Figure
 * @typedef {{ step: string, reason: string, figure?: Figure }} Step
 * @typedef {{ prompt: string, form: string, answer?: string | null, given?: string[], features?: Record<string, unknown>, figure?: Figure, lines?: Step[], solution?: (string | { step: string, figure?: Figure })[] }} Problem
 * @typedef {{ example: { problem: string, given?: string[], figure?: Figure, lines: Step[] }, fade: Problem[] }} Form
 * @typedef {{ id: string, special?: string, forms: Form[] }} Kind
 * @typedef {{ id: string, method: string, statement?: string, idea?: string, lines?: { line?: string, reason?: string }[] }} Proof
 * @typedef {{ id?: string, statement?: string, method: string, check?: { proof?: { line?: string, reason?: string }[] } }} Statement
 * @typedef {{ number: number, title: string, section: number, book?: { title?: string, pages?: string }, manyParts: boolean, bare?: Problem, ideas?: { name: string, concrete: string, general: string }[], kinds: Kind[], proofs: Proof[], prove: Statement[] }} Topic
 * @typedef {Problem & { id: string, kind: string, topic: string, calc: string, formNo?: number }} BankProblem
 */

const DIR = new URL('../src/units/algebra/content/', import.meta.url)
const ONLY = process.env.ALGEBRA_SLUGS?.split(',')
/** @param {string} sub */
const load = async sub =>
  Promise.all(
    readdirSync(new URL(sub, DIR))
      .filter(f => f.endsWith('.js') && (!ONLY || ONLY.includes(f.replace('.js', ''))))
      .map(async f => {
        const data = (await import(new URL(`${sub}/${f}`, DIR).href)).default
        return /** @type {[string, typeof data]} */ ([f.replace('.js', ''), data])
      })
  )
/** @type {[string, Topic][]} */
const topics = await load('topics')
/** @type {Record<string, BankProblem[]>} */
const banks = Object.fromEntries(await load('bank'))
const SECTIONS = listOf('sections')
/** An olympiad topic, one written from Problem-Solving Strategies: its problems are proofs, and it has no Find the error or Translate. @param {Topic} t */
const olympiad = t => t.book?.title === 'Problem-Solving Strategies'

// The paper's list of ten proof methods ("Proofs"), plus infinite descent.
const METHODS = ['direct proof', 'proof of the contrapositive', 'proof by contradiction', 'proof by cases', 'induction', 'strong induction', 'proof of existence by construction', 'disproof by counterexample', 'the pigeonhole principle', 'proof by a one-to-one correspondence', 'infinite descent']
// "Worked examples and problems": a problem opens with an imperative, one verb per job.
const VERBS = /^(Find|Solve|Simplify|Expand|Factor|Evaluate|Compute|Write|Express|Rearrange|Complete|Sketch|Prove that|Decide whether|State)\b/
const BANNED =
  /\b(I|we|us|our|let's|let us|clearly|obviously|trivially|it is easy to see|easy|easily|simple(?! interest)|simply|tricky|hard|difficult|any|anything|anyone|hint|well done|great|amazing|note that|it is important|sorry|apologi[sz]e|mistakes help|don't worry|students)\b|[∀∃⇒∴]|\\(forall|exists|Rightarrow|implies|therefore)\b|\b\w+(n't|'re|'ll|'ve|'m)\b|\b(section|chapter|activity|exercise|theorem|problem|example) \d/i
const BIG = /(?<![\d.,\\])\d{5,}/ // an ungrouped run of five or more digits, inside math or prose

/** @param {string} s */
const prose = s => s.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, ' ')
const HIDDEN = ['id', 'kind', 'topic', 'form', 'calc', 'answer', 'number', 'manyParts', 'section', 'book', 'file', 'method', 'special', 'formNo']

/**
 * Every displayed string with its path; ids, tags and answers are not displayed text.
 * @param {unknown} x
 * @param {string} path
 * @param {[string, string][]} out
 * @returns {[string, string][]}
 */
function strings(x, path, out) {
  if (typeof x === 'string') out.push([path, x])
  else if (Array.isArray(x)) x.forEach((v, i) => strings(v, `${path}[${i}]`, out))
  else if (x && typeof x === 'object')
    for (const [k, v] of Object.entries(x)) if (!HIDDEN.includes(k)) strings(v, `${path}.${k}`, out)
  return out
}
const every = () => [...topics, ...Object.entries(banks)].flatMap(([slug, data]) => strings(data, slug, []))

const allBank = Object.values(banks).flat()
/** @type {Record<string, BankProblem[]>} */
const byKind = {}
for (const p of allBank) (byKind[p.kind] ||= []).push(p)

/** @param {string} where @param {Figure | undefined} f @returns {string[]} */
const figureFault = (where, f) =>
  !f ? [] : [...(f.alt ? [] : [`${where}: figure with no text`]), ...(f.file && existsSync(new URL(`figures/${f.file}`, DIR)) ? [] : [`${where}: no file ${f.file}`])]

/**
 * What is wrong with one problem: its form, its answer in that form, its figures, and what Find
 * the error and a sketch add. `special` is its kind's mark.
 * @param {string} where
 * @param {Problem} p
 * @param {string | undefined} special
 * @returns {string[]}
 */
function problemFaults(where, p, special) {
  const work = p.lines ?? p.solution ?? []
  const bad = [...figureFault(where, p.figure), ...work.flatMap(l => (typeof l === 'string' ? [] : figureFault(where, l.figure)))]
  if (!(p.form in FORMS)) return [...bad, `${where}: form "${p.form}"`]
  if (!VERBS.test(p.prompt ?? '')) bad.push(`${where}: prompt opens without an imperative`)
  const drawn = p.form === SKETCH_FORM || p.form === LINE_FORM
  if (p.form === PROOF_FORM || drawn) {
    if (p.answer != null) bad.push(`${where}: a proof or a sketch stores no answer`)
  } else if (typeof p.answer !== 'string' || !p.answer.trim()) bad.push(`${where}: no answer`)
  else if (!SELF_MARKED.includes(p.form) && !matchAnswer(p.answer, p.answer, p.form)) bad.push(`${where}: answer "${p.answer}" is not in its form`)
  if ((special === 'error') !== (p.form === ERROR_FORM)) bad.push(`${where}: a Find the error kind, and no other, answers in the Find the error form`)
  if (special === 'translate' && p.form !== TRANSLATE_FORM && p.form !== TRANSLATE_INEQUALITY_FORM && !drawn) bad.push(`${where}: a Translate problem answers as an equation, an inequality or a sketch`)
  if (p.form === ERROR_FORM) {
    const n = wrongLine(p.answer ?? '')
    if (!Array.isArray(p.given) || p.given.length < 3 || p.given.some(l => typeof l !== 'string' || !l)) bad.push(`${where}: given, the solution to check, three lines or more`)
    else if (n === null || n < 1 || n > p.given.length) bad.push(`${where}: answer "${p.answer}" names no line of given`)
    if (!/^Line \d+: \S/.test(p.answer ?? '')) bad.push(`${where}: answer is "Line n: " and the line written right`)
  } else if ('given' in p) bad.push(`${where}: given belongs to Find the error alone`)
  if (drawn) {
    const f = p.features ?? {}
    const texts = (/** @type {string[]} */ keys) => keys.every(k => Array.isArray(f[k]) && f[k].every(x => typeof x === 'string')) && Object.keys(f).length === keys.length
    const shaded = texts(['shaded']) && /** @type {string[]} */ (f.shaded).length > 0
    if (p.form === LINE_FORM ? !shaded : !texts(['intercepts', 'turning', 'asymptotes']) && !shaded)
      bad.push(`${where}: features is { intercepts, turning, asymptotes }, or { shaded } for a region or a number line, each a list of text`)
    const last = work.at(-1)
    if (!last || typeof last === 'string' || !last.figure) bad.push(`${where}: the last line of a sketch carries the stored graph as its figure`)
  } else if ('features' in p) bad.push(`${where}: features belongs to a sketch alone`)
  return bad
}

test('every topic has its fields, and a try-first problem only where the paper allows one', () => {
  /** @type {string[]} */
  const bad = []
  /** @type {Set<number>} */
  const numbers = new Set()
  for (const [slug, t] of topics) {
    if (!Number.isInteger(t.number) || t.number < 101) bad.push(`${slug}: number, a whole number from 101 up`)
    if (numbers.has(t.number)) bad.push(`${slug}: number ${t.number} reused`)
    numbers.add(t.number)
    if (!t.title) bad.push(`${slug}: title`)
    if (!(t.section >= 1 && t.section <= SECTIONS.length)) bad.push(`${slug}: section`)
    if (!t.book?.title || !t.book.pages) bad.push(`${slug}: book, its title and pages`)
    if (typeof t.manyParts !== 'boolean') bad.push(`${slug}: manyParts`)
    if (!Array.isArray(t.proofs) || !Array.isArray(t.prove)) bad.push(`${slug}: proofs and prove are lists, empty where the topic has none`)
    const method = t.kinds.some(k => k.forms.length > 0)
    if (!method && t.manyParts) bad.push(`${slug}: an idea with no method has manyParts false`)
    if (Boolean(t.bare) !== (method && !t.manyParts)) bad.push(`${slug}: bare exactly when a new method and not manyParts`)
    for (const idea of t.ideas ?? []) if (!idea.name || !idea.concrete || !idea.general) bad.push(`${slug}: an idea is a name, one concrete case, and the general statement`)
    if (!t.kinds.length) bad.push(`${slug}: no kinds`)
    if (!method && t.kinds.length !== 1) bad.push(`${slug}: an idea with no method has one kind`)
    if (t.bare) {
      if (!(t.bare.solution && t.bare.solution.length >= 1)) bad.push(`${slug}: bare solution, shown after the attempt`)
      if (SELF_MARKED.includes(t.bare.form)) bad.push(`${slug}: a try-first problem has an answer the form checks`)
      bad.push(...problemFaults(`${slug} bare`, t.bare, undefined))
    }
    for (const [n, k] of t.kinds.entries()) {
      if (k.id !== `t${t.number}-k${n + 1}`) bad.push(`${slug}: kind id ${k.id}`)
      if (k.special !== undefined && k.special !== 'error' && k.special !== 'translate') bad.push(`${k.id}: special "${k.special}"`)
      for (const [i, f] of k.forms.entries()) {
        const where = `${k.id} form ${i + 1}`
        if (!f.example?.problem || !(f.example.lines?.length >= 3)) bad.push(`${where}: example needs a problem and three lines`)
        else if (!VERBS.test(f.example.problem)) bad.push(`${where}: example problem opens without an imperative`)
        if (f.example?.lines?.some(l => !l.step || !l.reason)) bad.push(`${where}: example line without step or reason`)
        const given = f.example?.given
        if (k.special === 'error' ? !Array.isArray(given) || given.length < 3 || given.some(l => typeof l !== 'string' || !l) : given !== undefined)
          bad.push(`${where}: the example of a Find the error kind, and no other, has given, the solution to check, three lines or more`)
        bad.push(...figureFault(where, f.example?.figure), ...(f.example?.lines ?? []).flatMap(l => figureFault(where, l.figure)))
        if (f.fade?.length !== 3) bad.push(`${where}: three fading problems`)
        for (const [j, p] of (f.fade || []).entries()) {
          const w = `${where} fade ${j + 1}`
          if (!(p.lines && p.lines.length >= 3) || p.lines.some(l => !l.step || !l.reason)) bad.push(`${w}: three lines with reasons`)
          if (p.form === PROOF_FORM) bad.push(`${w}: a fading problem is no proof`)
          bad.push(...problemFaults(w, p, k.special))
        }
      }
    }
  }
  assert.deepEqual(bad, [])
})

test('every topic before the olympiad topics has a Find the error kind and a Translate kind, and no olympiad topic has either', () => {
  /** @type {string[]} */
  const bad = []
  for (const [slug, t] of topics)
    for (const special of ['error', 'translate']) {
      const has = t.kinds.some(k => k.special === special && k.forms.length > 0)
      if (has === olympiad(t)) bad.push(`${slug}: ${olympiad(t) ? 'an olympiad topic with' : 'no'} kind marked special: '${special}'`)
    }
  assert.deepEqual(bad, [])
})

test('every kind has at least twelve bank problems, three or more of each form, and every problem a taught kind', () => {
  const kinds = topics.flatMap(([, t]) => t.kinds)
  const bad = kinds.filter(k => (byKind[k.id]?.length ?? 0) < 12).map(k => `${k.id}: ${byKind[k.id]?.length ?? 0} problems`)
  for (const k of kinds) {
    const own = byKind[k.id] ?? []
    if (!k.forms.length) {
      for (const p of own) if ('formNo' in p) bad.push(`${p.id}: an idea with no method has no forms to name`)
      continue
    }
    for (const p of own) if (!Number.isInteger(p.formNo) || Number(p.formNo) < 1 || Number(p.formNo) > k.forms.length) bad.push(`${p.id}: formNo ${p.formNo} of ${k.forms.length} forms`)
    k.forms.forEach((_, i) => {
      const n = own.filter(p => p.formNo === i + 1).length
      if (n < 3) bad.push(`${k.id} form ${i + 1}: ${n} bank problems`)
    })
  }
  const taught = new Set(kinds.map(k => k.id))
  for (const p of allBank) if (!taught.has(p.kind)) bad.push(`${p.id}: untaught kind ${p.kind}`)
  assert.deepEqual(bad, [])
})

test('every bank problem: id, tags, no calculator, form, answer, and a solution; an olympiad problem is a proof', () => {
  /** @type {string[]} */
  const bad = []
  /** @type {Set<string>} */
  const ids = new Set()
  for (const [slug, t] of topics) {
    const special = Object.fromEntries(t.kinds.map(k => [k.id, k.special]))
    if (!banks[slug]) bad.push(`${slug}: no bank file`)
    for (const p of banks[slug] ?? []) {
      if (!/^t\d+-k\d+-p\d{2,}$/.test(p.id) || !p.id.startsWith(`${p.kind}-p`)) bad.push(`${p.id}: id`)
      if (ids.has(p.id)) bad.push(`${p.id}: id reused`)
      ids.add(p.id)
      if (p.topic !== slug) bad.push(`${p.id}: topic tag`)
      if (p.calc !== 'no') bad.push(`${p.id}: calc is 'no' in this stage`)
      if (!(p.solution && p.solution.length >= 2)) bad.push(`${p.id}: a solution of two lines or more`)
      if (olympiad(t) && p.form !== PROOF_FORM) bad.push(`${p.id}: a problem of an olympiad topic is a proof`)
      bad.push(...problemFaults(p.id, p, special[p.kind]))
    }
  }
  assert.deepEqual(bad, [])
})

test('proofs to read and statements to prove: a method from the list, lines with reasons, a statement for each method read, a published proof', () => {
  /** @type {string[]} */
  const bad = []
  for (const [slug, t] of topics) {
    for (const p of t.proofs ?? []) {
      if (!METHODS.includes(p.method)) bad.push(`${p.id}: method "${p.method}"`)
      if (!p.id || !p.statement || !p.idea) bad.push(`${slug}: a proof has an id, a statement and an idea`)
      if (!p.lines?.length || p.lines.some(l => !l.line || !l.reason)) bad.push(`${p.id}: lines with reasons`)
    }
    if (t.proofs?.length && !t.prove?.length) bad.push(`${slug}: proofs to read with no statements to prove`)
    const methods = new Set((t.prove ?? []).map(s => s.method))
    for (const m of new Set((t.proofs ?? []).map(p => p.method))) if (!methods.has(m)) bad.push(`${slug}: no statement practises ${m}`)
    for (const s of t.prove ?? []) {
      if (!s.id || !s.statement) bad.push(`${slug}: a statement has an id and its statement`)
      if (!METHODS.includes(s.method)) bad.push(`${s.id}: method "${s.method}"`)
      const proof = s.check?.proof
      if (!Array.isArray(proof) || !proof.length || !proof.every(l => l.line && l.reason)) bad.push(`${s.id}: check is a published proof, lines with reasons`)
    }
  }
  assert.deepEqual(bad, [])
})

test('no two problems of a topic share a prompt', () => {
  /** @type {string[]} */
  const bad = []
  for (const [slug, t] of topics) {
    /** @type {Map<string, string>} */
    const seen = new Map()
    /** @type {[string, string][]} */
    const all = [
      ...(t.bare ? [/** @type {[string, string]} */ (['bare', t.bare.prompt])] : []),
      ...t.kinds.flatMap(k => k.forms.flatMap((f, i) => [/** @type {[string, string]} */ ([`${k.id} example ${i + 1}`, f.example.problem]), ...f.fade.map((p, j) => /** @type {[string, string]} */ ([`${k.id} fade ${i + 1}.${j + 1}`, p.prompt + (p.given ?? []).join()]))])),
      ...(banks[slug] ?? []).map(p => /** @type {[string, string]} */ ([p.id, p.prompt + (p.given ?? []).join()]))
    ]
    for (const [where, prompt] of all) {
      if (seen.has(prompt)) bad.push(`${slug}: ${where} repeats ${seen.get(prompt)}`)
      seen.set(prompt, where)
    }
  }
  assert.deepEqual(bad, [])
})

test('wording: no banned word, symbol, contraction or source reference; digits grouped; no sentence opens with a symbol', () => {
  /** @type {string[]} */
  const bad = []
  for (const [p, s] of every()) {
    const word = BANNED.exec(prose(s)) ?? /[∀∃⇒∴]|\\(forall|exists|Rightarrow|implies|therefore)\b/.exec(s)
    if (word) bad.push(`${p}: ${word[0]} · ${s.slice(0, 80)}`)
    if (BIG.test(s.replace(/\\[a-zA-Z]+/g, ' '))) bad.push(`${p}: ungrouped digits · ${s.slice(0, 80)}`)
    if (/^\$[^$]+\$[,;:]?\s+[a-z]/.test(s) && !/\.given\[/.test(p)) bad.push(`${p}: opens with a symbol · ${s.slice(0, 80)}`)
    if (/[\t\f\b\n\v\r]/.test(s) || /\S {2,}\S/.test(s) || /\$\s*\$/.test(s.replace(/\$\$[\s\S]*?\$\$/g, ''))) bad.push(`${p}: a control character, a gap or an empty $ $ span · ${JSON.stringify(s.slice(0, 70))}`)
    if (/\.reason$/.test(p) && /^\s*\$/.test(s)) bad.push(`${p}: a reason names its fact in words, and never opens with a formula`)
  }
  assert.deepEqual(bad, [])
})
