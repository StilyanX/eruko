import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  changedElsewhere,
  memoryRecords,
  recordsLater,
  saveText,
  storedText,
  storedVersion
} from '../src/record/index.js'

// Under Node there is no worker, so the record lives in memory (lib/record-db.js); the store reads
// it when a part is first used.
const { createStore, damagedRecords, forgetDamaged, health, persistedStore } =
  await import('../src/record/store.js')

/** Let the saves the store has started settle. */
const settle = () => new Promise(r => setTimeout(r, 0))

test('store notifies subscribers and supports updater functions', () => {
  const store = createStore({ n: 1 })
  let calls = 0
  const unsubscribe = store.subscribe(() => calls++)
  store.set({ n: 2 })
  store.set((/** @type {{ n: number }} */ prev) => ({ n: prev.n + 1 }))
  assert.equal(store.get().n, 3)
  assert.equal(calls, 2)
  unsubscribe()
  store.set({ n: 4 })
  assert.equal(calls, 2)
})

test('persistedStore round-trips through the record and is shared per key', async () => {
  memoryRecords()
  const a = persistedStore('aether-progress-demo')
  // A second caller of the same key gets the same store, not a copy, so a mark made on a lesson
  // page reaches the unit page.
  const b = persistedStore('aether-progress-demo')
  assert.equal(a, b)

  let seen = 0
  b.subscribe(() => seen++)
  a.set(prev => ({ ...prev, 'unit-1': true }))
  assert.deepEqual(b.get(), { 'unit-1': true })
  assert.equal(seen, 1)
  // The write follows: not on the change itself, at once on a flush.
  assert.equal(storedText('aether-progress-demo'), null)
  a.flush()
  await settle()
  assert.equal(storedText('aether-progress-demo'), '{"unit-1":true}')
})

test('persistedStore reads an existing value on first use', () => {
  memoryRecords({ 'aether-progress-seeded': '{"already":"done"}' })
  assert.deepEqual(persistedStore('aether-progress-seeded').get(), { already: 'done' })
})

test('persistedStore writes once for a run of quick changes', async () => {
  memoryRecords()
  const store = persistedStore('aether-progress-typed')
  for (const c of 'hallo')
    store.set((/** @type {{ text?: string }} */ prev) => ({ text: (prev.text ?? '') + c }))
  assert.equal(storedText('aether-progress-typed'), null)
  await new Promise(r => setTimeout(r, 500))
  assert.equal(storedText('aether-progress-typed'), '{"text":"hallo"}')
})

test('a part that cannot be read is kept aside, never written over unseen, and the learner is told', async () => {
  memoryRecords({ 'aether-progress-broken': '{"cards": [1, 2' })
  const store = persistedStore('aether-progress-broken')
  assert.deepEqual(store.get(), {})
  await settle()
  assert.deepEqual(damagedRecords(), { 'aether-progress-broken': '{"cards": [1, 2' })
  assert.deepEqual(health.get().damaged, ['aether-progress-broken'])
  // The part starts again; the kept text stays until it is saved as a file.
  store.set({ cards: [] })
  store.flush()
  await settle()
  assert.equal(storedText('aether-progress-broken'), '{"cards":[]}')
  assert.deepEqual(damagedRecords(), { 'aether-progress-broken': '{"cards": [1, 2' })
  forgetDamaged()
  await settle()
  assert.deepEqual(health.get().damaged, [])
  assert.deepEqual(damagedRecords(), {})
})

test('a part of the wrong kind (a list where a record is kept) counts as unreadable', async () => {
  memoryRecords({ 'aether-progress-wrong-kind': '[1, 2]' })
  assert.deepEqual(persistedStore('aether-progress-wrong-kind').get(), {})
  await settle()
  assert.ok('aether-progress-wrong-kind' in damagedRecords())
})

test('a save based on an older copy is refused, and the change is replayed on the part as it now stands', async () => {
  memoryRecords({ 'aether-progress-two-tabs': '{"a":1}' })
  const store = persistedStore('aether-progress-two-tabs')
  store.set((/** @type {Record<string, unknown>} */ prev) => ({ ...prev, b: 2 }))
  // Another tab saves first, unseen by this one.
  assert.deepEqual(await saveText('aether-progress-two-tabs', '{"a":1,"c":3}', 1), {
    ok: true,
    version: 2
  })
  store.flush()
  await settle()
  await settle()
  assert.deepEqual(store.get(), { a: 1, c: 3, b: 2 })
  assert.equal(storedText('aether-progress-two-tabs'), '{"a":1,"c":3,"b":2}')
  assert.equal(storedVersion('aether-progress-two-tabs'), 3)
})

test('a change saved in another tab reaches this tab, under any change not yet saved here', async () => {
  memoryRecords({ 'aether-progress-seen': '{"a":1}' })
  const store = persistedStore('aether-progress-seen')
  let seen = 0
  store.subscribe(() => seen++)
  changedElsewhere('aether-progress-seen', '{"a":5}', 2)
  assert.deepEqual(store.get(), { a: 5 })
  assert.equal(seen, 1)
  store.set((/** @type {Record<string, unknown>} */ prev) => ({ ...prev, b: 1 }))
  changedElsewhere('aether-progress-seen', '{"a":6}', 3)
  assert.deepEqual(store.get(), { a: 6, b: 1 })
  store.flush()
  await settle()
  assert.equal(storedText('aether-progress-seen'), '{"a":6,"b":1}')
})

test('a write committed but never answered is not replayed twice', async () => {
  memoryRecords({ 'aether-progress-lost-reply': '{"n":1}' })
  const store = persistedStore('aether-progress-lost-reply')
  const add = (/** @type {Record<string, unknown>} */ prev) => ({ n: Number(prev.n) + 1 })
  store.set(add)
  // The tab holding the record commits the write, then closes before it answers.
  recordsLater(true)
  store.flush()
  await settle()
  recordsLater(false)
  assert.equal(await saveText('aether-progress-lost-reply', '{"n":2}', 1).then(r => r.ok), true)
  store.set(add)
  store.flush()
  await settle()
  await settle()
  assert.deepEqual(store.get(), { n: 3 })
  assert.equal(storedText('aether-progress-lost-reply'), '{"n":3}')
})

test('a refused write stops all saving; the change stays in memory, and no later write is tried', async () => {
  memoryRecords({}, { refuse: true })
  const store = persistedStore('aether-progress-full')
  store.set({ a: 1 })
  store.flush()
  await settle()
  assert.equal(health.get().stopped, true)
  assert.deepEqual(store.get(), { a: 1 })
  memoryRecords()
  store.set({ a: 2 })
  store.flush()
  await settle()
  assert.equal(health.get().stopped, true)
  assert.equal(storedText('aether-progress-full'), null)
})

test('a change that breaks a rule the record keeps stops all saving, and nothing of it is written', async () => {
  memoryRecords()
  health.set(h => ({ ...h, stopped: false }))
  const { InvariantError } = await import('../src/kernel/invariant.logic.js')
  const store = persistedStore('aether-progress-broken')
  store.set({ a: 1 })
  store.flush()
  await settle()
  assert.throws(() =>
    store.set(() => {
      throw new InvariantError('a broken rule')
    })
  )
  assert.equal(health.get().stopped, true)
  health.set(h => ({ ...h, stopped: false }))
  // A change that leaves the part something other than a record breaks the record's own rule.
  assert.throws(() => store.set(() => /** @type {any} */ ([1, 2])), /leaves it a record/)
  assert.equal(health.get().stopped, true)
  assert.equal(storedText('aether-progress-broken'), '{"a":1}')
  health.set(h => ({ ...h, stopped: false }))
})
