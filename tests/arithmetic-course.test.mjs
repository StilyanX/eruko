// The generated course (scripts/gen/arithmetic.mjs) stays in step with the unit's data, and the
// registry lists every page of it, in course order, each with a title.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { PAGES, TOPICS, BANK_KINDS } from '../src/units/arithmetic/core/course.gen.js'
import { unitBySlug } from '../src/shell/registry.js'
import { courseShape } from '../scripts/lib/arithmetic-course.mjs'

test('course.js matches unit.yaml and the topic and bank files', async () => {
  const { pages, topics, bank } = await courseShape()
  assert.deepEqual(PAGES, pages, 'run node scripts/gen/arithmetic.mjs')
  assert.deepEqual(TOPICS, topics, 'run node scripts/gen/arithmetic.mjs')
  assert.deepEqual(BANK_KINDS, bank, 'run node scripts/gen/arithmetic.mjs')
})

test('the registry lists every page in course order, then the end level, each titled', () => {
  const arithmetic = unitBySlug['explore/mathematics/arithmetic']
  assert.ok(arithmetic)
  const pages = arithmetic.pages
  assert.deepEqual(pages.filter(p => !p.start && !p.review).map(p => p.slug), [...PAGES, 'end-level'])
  for (const p of pages) assert.ok(p.title && p.file, p.slug)
})

test("the unit page's last section ends on the last topic", () => {
  const arithmetic = unitBySlug['explore/mathematics/arithmetic']
  assert.equal(arithmetic?.sections?.at(-1)?.last, TOPICS.length)
})
