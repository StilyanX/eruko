// The generated course (scripts/gen/algebra.mjs) stays in step with the unit's data, and the
// registry lists every page of it, in course order, each with a title.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { BANK_KINDS, INSERTED, PAGES, SECTIONS, TITLES, TOPICS } from '../src/units/algebra/core/course.gen.js'
import { unitBySlug } from '../src/shell/registry.js'
import { courseShape, listOf } from '../scripts/lib/algebra-course.mjs'

const unit = unitBySlug['explore/mathematics/algebra']

test('course.js matches unit.yaml and the topic and bank files', async () => {
  const { pages, titles, sections, topics, bank, inserted } = await courseShape()
  const stale = 'run node scripts/gen/algebra.mjs'
  assert.deepEqual(PAGES, pages, stale)
  assert.deepEqual(TITLES, titles, stale)
  assert.deepEqual(SECTIONS, sections, stale)
  assert.deepEqual(TOPICS, topics, stale)
  assert.deepEqual(BANK_KINDS, bank, stale)
  assert.deepEqual(INSERTED, inserted, stale)
})

test('the registry lists every page in course order, then the end level, each titled; the facts page is the shared one', () => {
  assert.ok(unit)
  const pages = unit.pages
  assert.deepEqual(pages.filter(p => !p.start && !p.review).map(p => p.slug), [...PAGES, 'end-level'])
  for (const p of pages) assert.ok(p.title && p.file, p.slug)
  assert.notEqual(pages.find(p => p.slug === 'number-facts')?.file, 'algebra/number-facts')
})

test('each section is one of unit.yaml\'s by its number, in rising order, each once, though two may share a title', () => {
  const names = listOf('sections')
  let last = 0
  for (const s of SECTIONS) {
    assert.ok(s.no > last, `section ${s.no} is out of order or stands twice`)
    assert.equal(s.title, names[s.no - 1], `section ${s.no}`)
    last = s.no
  }
})

// A topic's number is its name in every problem id and never changes; the course order is unit.yaml's list.
test('topic numbers start at 101, the kinds of each topic carry its number, and none is used twice', () => {
  for (const t of TOPICS) {
    assert.equal(t.kinds[0]?.id.startsWith(`t${t.number}-`), true, `${t.slug}: its kinds carry its number`)
    assert.ok(t.number > 100, `${t.slug}: number ${t.number}`)
  }
  assert.equal(new Set(TOPICS.map(t => t.number)).size, TOPICS.length)
  for (const slug of INSERTED) assert.notEqual(TOPICS.at(-1)?.slug, slug, `${slug} comes before a topic`)
})

test("the unit page's last section ends on the last topic, and the description says what is written", () => {
  assert.equal(unit?.sections?.at(-1)?.last ?? 0, TOPICS.length)
  assert.match(unit?.description ?? '', TOPICS.length ? new RegExp(`\\b${TOPICS.length} topics? (is|are) written`) : /No topic is written yet/)
})
