// Arithmetic's course shape, read from its data: the page order of unit.yaml, and each topic's
// kinds, proofs and statements. What scripts/gen/arithmetic.mjs writes to
// src/units/arithmetic/core/course.gen.js, and what tests/arithmetic-course.test.mjs checks that file
// against.
import { existsSync, readFileSync } from 'node:fs'

export const DATA = new URL('../../src/units/arithmetic/content/', import.meta.url)

/**
 * @typedef {object} ArithmeticTopic What a topic module under data/topics/ default-exports, as far as the course shape reads it.
 * @property {boolean} [bare]
 * @property {unknown} [before]
 * @property {{ id: string, forms: unknown[] }[]} kinds
 * @property {{ id: string }[]} proofs
 * @property {{ id: string, method: string }[]} prove
 */

/** Every page of the unit in course order: the two drill pages and the topics, by slug. */
const courseOrder = () => {
  const list = readFileSync(new URL('unit.yaml', DATA), 'utf8').split('\ntopics:\n')[1]
  if (list === undefined) throw new Error('unit.yaml has no topics: list')
  return list
    .split('\n')
    .map(l => l.replace(/^\s*-\s*/, '').trim())
    .filter(Boolean)
}

/** { pages, topics, bank }: the page order, each topic's shape, and every bank problem's [id, kind]. */
export async function courseShape() {
  const pages = courseOrder()
  /** @type {{ slug: string, bare: boolean, before?: unknown, kinds: { id: string, forms: number }[], proofs: string[], prove: { id: string, method: string }[] }[]} */
  const topics = []
  /** @type {[string, string][]} */
  const bank = []
  for (const slug of pages.filter(s => existsSync(new URL(`topics/${s}.js`, DATA)))) {
    // The topic modules are this unit's own data files; their shape is the contract the course test checks.
    /** @type {ArithmeticTopic} */
    const t = (await import(new URL(`topics/${slug}.js`, DATA).href)).default
    topics.push({
      slug,
      bare: Boolean(t.bare),
      ...(t.before ? { before: t.before } : {}),
      kinds: t.kinds.map(k => ({ id: k.id, forms: k.forms.length })),
      proofs: t.proofs.map(p => p.id),
      prove: t.prove.map(s => ({ id: s.id, method: s.method }))
    })
    /** @type {{ id: string, kind: string }[]} */
    const problems = (await import(new URL(`bank/${slug}.js`, DATA).href)).default
    for (const p of problems) bank.push([p.id, p.kind])
  }
  return { pages, topics, bank }
}
