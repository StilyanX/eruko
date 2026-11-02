// What the unit page works out from a unit's rows, the same in every unit (src/shell/unit-view.js).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { continueOf, dueToday, lockNote, nextWork } from '../src/shell/unit-view.js'
import { pageBySlug } from '../src/shell/registry.js'

// A page of some unit, done every session: what waits there is named by its title.
const page = Object.values(pageBySlug).find(p => p.repeats)
assert.ok(page)

test('a row that opens nothing says the row it opens after, or the reason its unit gives', () => {
  assert.equal(lockNote({ key: 2, title: 'Two' }, 1), 'Opens after 1')
  assert.equal(lockNote({ key: 1, title: 'One' }, 0), 'Opens later')
  assert.equal(
    lockNote({ key: 3, title: 'Three', opens: 'Opens when picked' }, 2),
    'Opens when picked'
  )
  // A row that opens, or one done, needs no reason.
  assert.equal(lockNote({ key: 1, title: 'One', to: '/one' }, 0), '')
  assert.equal(lockNote({ key: 1, title: 'One', done: true }, 0), '')
})

test('the way on is the work due today, else the first row that opens and is not done', () => {
  const today = '2026-10-15'
  const start = { key: 'start', title: 'Start', to: '/start' }
  const rows = {
    start,
    top: [{ key: 'number-facts', title: 'Number facts', to: '/facts' }],
    items: [
      { key: 1, title: 'One', to: '/one', done: true },
      { key: 2, title: 'Two', to: '/two' },
      { key: 3, title: 'Three' }
    ],
    ends: { 0: [{ key: 'test-1', title: 'Level test', to: '/test' }] }
  }
  const sections = [{ first: 1, last: 3 }]
  const repeats = (/** @type {string | number} */ k) => k === 'number-facts'
  const due = [
    {
      one: 'problem',
      many: 'problems',
      to: `/${page.slug}`,
      dates: [today],
      fresh: 2
    }
  ]
  assert.deepEqual(nextWork({ rows, sections, groups: due, today, repeats }), {
    to: `/${page.slug}`,
    title: page.title,
    lang: undefined,
    waits: '1 due, 2 new'
  })
  const nothing = [{ one: 'problem', many: 'problems', to: '/p', dates: [] }]
  // A page done every session is not the way on when nothing waits on it.
  assert.equal(nextWork({ rows, sections, groups: nothing, today, repeats })?.to, '/two')
  // A section's end counts once its own rows are done.
  const allDone = { ...rows, items: rows.items.map(it => ({ ...it, done: true })) }
  assert.equal(nextWork({ rows: allDone, sections, groups: nothing, today, repeats })?.to, '/test')
  const finished = { ...allDone, ends: { 0: [{ key: 'test-1', title: 'Level test', done: true }] } }
  assert.equal(nextWork({ rows: finished, sections, groups: nothing, today, repeats }), null)
})

test('a kind held waits for the open topic: the work due elsewhere still comes first', () => {
  const today = '2026-10-15'
  const rows = {
    start: { key: 'start', title: 'Start', to: '/start', done: true },
    top: [],
    items: [
      { key: 1, title: 'One', to: '/one', done: true },
      { key: 2, title: 'Two', to: '/two' }
    ]
  }
  const sections = [{ first: 1, last: 2 }]
  const mixed = { one: 'problem', many: 'problems', to: `/${page.slug}`, dates: [today, today] }
  const facts = { one: 'sheet', many: 'sheets', to: '/facts', dates: [today] }
  // Held: the open topic. Not held: the kinds due.
  assert.equal(nextWork({ rows, sections, groups: [{ ...mixed, hold: true }], today })?.to, '/two')
  assert.equal(nextWork({ rows, sections, groups: [mixed], today })?.to, `/${page.slug}`)
  // Number facts due come before the open topic.
  assert.equal(nextWork({ rows, sections, groups: [facts, { ...mixed, hold: true }], today })?.to, '/facts')
  // With no topic left to open, a held kind is the way on.
  const done = { ...rows, items: rows.items.map(it => ({ ...it, done: true })) }
  assert.equal(nextWork({ rows: done, sections, groups: [{ ...mixed, hold: true }], today })?.to, `/${page.slug}`)
})

test("a card elsewhere opens what the unit page's Continue card opens", () => {
  const today = '2026-10-15'
  const rows = {
    start: { key: 'start', title: 'Start', to: '/start', done: true },
    top: [{ key: 'number-facts', title: 'Number facts', to: '/facts' }],
    items: [{ key: 1, title: 'One', to: '/one' }]
  }
  const view = {
    rows: () => rows,
    dated: () => [{ one: 'problem', many: 'problems', to: '/p', dates: [] }]
  }
  const unit = { sections: [{ first: 1, last: 1 }], pages: [{ slug: 'number-facts', repeats: true }] }
  assert.deepEqual(continueOf(view, unit, {}, today), {
    to: '/one',
    title: 'One',
    lang: undefined,
    waits: ''
  })
})

test('what waits today names the page it opens on and the count, or nothing', () => {
  const today = '2026-10-15'
  const to = `/${page.slug}`
  const groups = [{ one: 'item', many: 'items', to, dates: ['2026-10-14', '2026-10-20'], fresh: 3 }]
  assert.deepEqual(dueToday(groups, today), {
    to,
    title: page.title,
    lang: undefined,
    waits: '1 due, 3 new'
  })
  assert.equal(dueToday([{ one: 'item', many: 'items', to, dates: [] }], today), null)
})

test('what waits today counts only the page it opens on, not the rest of the unit', () => {
  const today = '2026-10-15'
  const to = `/${page.slug}`
  const groups = [
    { one: 'item', many: 'items', to, dates: ['2026-10-14'], fresh: 2 },
    { one: 'proof', many: 'proofs', to: '/elsewhere', dates: ['2026-10-15'], fresh: 5 }
  ]
  assert.equal(dueToday(groups, today)?.waits, '1 due, 2 new')
})
