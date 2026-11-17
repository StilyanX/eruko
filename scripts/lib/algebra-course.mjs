// Algebra's course shape, read from its data: the page order and section names of unit.yaml, and
// each topic's title, section, kinds, proofs and statements. What scripts/gen/algebra.mjs writes to
// src/units/algebra/core/course.gen.js, and what tests/algebra-course.test.mjs checks that file
// against. A course with no topic yet is an empty course, never an error. A section is told by its
// number, its place in unit.yaml's list: two sections may share a title. `inserted` lists the topics
// written as missing prerequisites, whose numbers stand out of course order.
import { existsSync, readFileSync } from 'node:fs'

export const DATA = new URL('../../src/units/algebra/content/', import.meta.url)

/**
 * The items of one list of unit.yaml, by its key: a block of "- item" lines, or `[]`.
 * @param {string} key
 * @returns {string[]}
 */
export const listOf = key => {
  const after = readFileSync(new URL('unit.yaml', DATA), 'utf8').split(`\n${key}:`)[1]
  if (after === undefined) throw new Error(`unit.yaml has no ${key}: list`)
  if (/^\s*\[\]/.test(after)) return []
  const block = after.split(/\n(?=[^\s-])/)[0] ?? ''
  return block
    .split('\n')
    .filter(l => /^\s*-\s/.test(l))
    .map(l => l.replace(/^\s*-\s*/, '').trim())
}

/**
 * @typedef {object} AlgebraTopic What a topic module under content/topics/ default-exports, as far as the course shape reads it.
 * @property {string} title
 * @property {number} number
 * @property {number} section
 * @property {boolean} [bare]
 * @property {{ id: string, forms: unknown[] }[]} kinds
 * @property {{ id: string }[]} proofs
 * @property {{ id: string, method: string }[]} prove
 */

/**
 * { pages, titles, sections, topics, bank, inserted }: the page order; each topic's title; the
 * sections as runs of the course order, each with its number; each topic's shape; every bank
 * problem's [id, kind]; and the slugs of the topics written as missing prerequisites.
 */
export async function courseShape() {
  // A topic is in the course once both its files are written: one of the two alone is left out.
  const order = listOf('topics').filter(s => ['topics', 'bank'].every(d => existsSync(new URL(`${d}/${s}.js`, DATA))))
  const pages = [...listOf('pages'), ...order]
  const names = listOf('sections')
  /** @type {Record<string, string>} */
  const titles = {}
  /** @type {{ title: string, no: number, first: number, last: number }[]} */
  const sections = []
  /** @type {{ slug: string, number: number, bare: boolean, kinds: { id: string, forms: number }[], proofs: string[], prove: { id: string, method: string }[] }[]} */
  const topics = []
  /** @type {[string, string][]} */
  const bank = []
  for (const slug of order) {
    // The topic modules are this unit's own data files; their shape is the contract the language test checks.
    /** @type {AlgebraTopic} */
    const t = (await import(new URL(`topics/${slug}.js`, DATA).href)).default
    titles[slug] = t.title
    topics.push({
      slug,
      number: t.number,
      bare: Boolean(t.bare),
      kinds: t.kinds.map(k => ({ id: k.id, forms: k.forms.length })),
      proofs: (t.proofs ?? []).map(p => p.id),
      prove: (t.prove ?? []).map(s => ({ id: s.id, method: s.method }))
    })
    const n = topics.length
    const title = names[t.section - 1]
    if (title === undefined) throw new Error(`${slug}: unit.yaml has no section ${t.section}`)
    const last = sections.at(-1)
    if (last !== undefined && last.no > t.section) throw new Error(`${slug}: section ${t.section} comes after section ${last.no}`)
    if (last !== undefined && last.no === t.section) last.last = n
    else sections.push({ title, no: t.section, first: n, last: n })
    /** @type {{ id: string, kind: string }[]} */
    const problems = (await import(new URL(`bank/${slug}.js`, DATA).href)).default
    for (const p of problems) bank.push([p.id, p.kind])
  }
  const inserted = listOf('inserted').filter(slug => order.includes(slug))
  return { pages, titles, sections, topics, bank, inserted }
}
