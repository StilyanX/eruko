// The list of units, read from their folders through the generated unit list, and the paths
// above every page.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, existsSync } from 'node:fs'
import * as registry from '../src/shell/registry.js'
import { FOLDERS } from '../src/shell/units.gen.js'
import { checkRegistry } from '../scripts/lib/registry-check.mjs'

test('registry invariants hold', () => {
  assert.deepEqual(checkRegistry(registry), [])
})

test('every folder of units/ with a manifest is a unit, in the order the entries give', () => {
  const units = new URL('../src/units/', import.meta.url)
  const found = readdirSync(units).filter(u => existsSync(new URL(`${u}/manifest.js`, units)))
  assert.deepEqual([...FOLDERS].sort(), found.sort(), 'run node scripts/gen/units.mjs')
  const orders = registry.UNITS.map(u => u.order)
  assert.deepEqual(orders, [...orders].sort((a, b) => a - b))
})

test('each manifest gives its entry, the unit contract and a loader for each page file', () => {
  for (const [folder, m] of Object.entries(registry.MANIFESTS)) {
    assert.equal(typeof m.UNIT.title, 'string', folder)
    assert.equal(m.view.slug, m.UNIT.slug, folder)
    for (const fn of ['place', 'finished', 'rows', 'dated'])
      assert.equal(typeof Reflect.get(m.view, fn), 'function', `${folder}: ${fn}`)
    for (const load of Object.values(m.PAGES)) assert.equal(typeof load, 'function', folder)
  }
})

test("a part of the record two units share is the same part in both, and the units' own parts differ", () => {
  const byKey = new Map()
  for (const p of registry.UNITS.flatMap(u => u.parts)) {
    const held = byKey.get(p.key)
    if (held) assert.deepEqual(held, p)
    byKey.set(p.key, p)
  }
  const own = registry.UNITS.map(u => u.parts[0]?.key)
  assert.equal(new Set(own).size, own.length)
  assert.equal(new Set(registry.PARTS.map(p => p.name)).size, registry.PARTS.length)
})

test('checkRegistry catches a page whose file no manifest loads', () => {
  const [first, ...rest] = registry.UNITS
  assert.ok(first)
  const ghost = { title: 'Ghost', slug: 'ghost', file: 'nowhere/ghost' }
  const problems = checkRegistry({ ...registry, UNITS: [{ ...first, pages: [...first.pages, ghost] }, ...rest] })
  assert.ok(problems.some(p => p.includes('no manifest has a loader for nowhere/ghost')))
})

test('a page is found by its address, with its unit', () => {
  for (const unit of registry.UNITS)
    for (const p of unit.pages) {
      const page = registry.pageBySlug[`${unit.slug}/${p.slug}`]
      assert.equal(page?.title, p.title)
      assert.equal(page?.unit, unit)
    }
})

test('the path above a page runs from Eruko to its parent, never to a dead end', () => {
  const tos = (/** @type {string} */ slug) => registry.pathTo(slug).map(([, to]) => to)
  assert.deepEqual(tos(''), [])
  assert.deepEqual(tos('nope'), ['/'])
  for (const d of registry.DISCIPLINES) assert.deepEqual(tos(`explore/${d.id}`), ['/'])
  for (const u of registry.UNITS) {
    assert.deepEqual(tos(u.slug), ['/', `/explore/${u.discipline.id}`])
    for (const p of u.pages) {
      const [home, discipline, unit] = tos(`${u.slug}/${p.slug}`)
      assert.deepEqual([home, discipline], ['/', `/explore/${u.discipline.id}`])
      assert.ok(unit?.startsWith(`/${u.slug}`), String(unit))
    }
  }
})

test('a course page goes up to its unit with its section open; a page done every session to the unit', () => {
  const tos = (/** @type {string} */ slug) => registry.pathTo(slug).map(([, to]) => to)
  for (const u of registry.UNITS) {
    for (const p of u.pages.filter(p => p.repeats || p.start || p.review))
      assert.equal(tos(`${u.slug}/${p.slug}`)[2], `/${u.slug}`)
    const slot = (/** @type {string} */ slug) => registry.courseSlot(u, `${u.slug}/${slug}`)
    for (const p of u.pages.filter(registry.inCourse)) {
      const at = slot(p.slug)
      if (!at || !u.sections) continue
      const part = u.sections.findIndex(s => at.at + 1 >= s.first && at.at + 1 <= s.last) + 1
      assert.equal(tos(`${u.slug}/${p.slug}`)[2], `/${u.slug}?part=${part}`)
    }
  }
})

test("each explore card shows its unit's first sentence, a line of what the unit is", () => {
  for (const unit of registry.UNITS) {
    const line = registry.cardLine(unit)
    assert.ok(unit.description.startsWith(line), unit.title)
    assert.match(line, /^[^.]+\.$/, unit.title)
    assert.ok(line.split(' ').length <= 20, unit.title)
  }
})

test('a folder whose manifest gives no entry, contract and loaders is a broken unit', async () => {
  const { manifestOf } = await import('../src/kernel/decode.logic.js')
  assert.throws(() => manifestOf({ UNIT: {} }, 'nowhere'), /units\/nowhere\/manifest\.js gives no UNIT, view and PAGES/)
  assert.throws(() => manifestOf(null, 'nowhere'))
})
