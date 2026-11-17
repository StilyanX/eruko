// The record's format: a record saved in an older format opens in the
// new one with every part kept. The record's move from SQLite's pool to wa-sqlite's plain file:
// copied byte for byte and checked, the old file kept as it was, and on a failed copy the old
// store stays in use with nothing lost.
import { test, expect } from '@playwright/test'

/**
 * Run `body` in a worker with SQLite's pool installed, before the app has opened the record.
 * @param {import('@playwright/test').Page} page
 * @param {string} body the worker's code, given `pool`; posts its result
 */
const inWorker = (page, body) =>
  page.evaluate(async code => {
    const src = `import init from '${location.origin}/eruko/record/sqlite-3.54.0/sqlite3.mjs'
      const sqlite3 = await init()
      const pool = await sqlite3.installOpfsSAHPoolVfs({ name: 'aether' })
      ${code}`
    const worker = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })), {
      type: 'module'
    })
    const result = await new Promise(done => (worker.onmessage = e => done(e.data)))
    worker.terminate()
    return result
  }, body)

/** The files at the top of this browser's private storage for the app. @param {import('@playwright/test').Page} page */
const opfsNames = page =>
  page.evaluate(async () => {
    const names = []
    for await (const n of (await navigator.storage.getDirectory()).keys()) names.push(n)
    return names.sort()
  })

/** @param {import('@playwright/test').Page} page @param {string} key */
const stored = (page, key) =>
  page.evaluate(async k => {
    const db = await import(`${location.origin}/eruko/record/index.js`)
    return [db.storedText(k), db.storedVersion(k)]
  }, key)

/** The old pool's record, as rows and its format. @param {import('@playwright/test').Page} page */
const oldRecord = page =>
  inWorker(
    page,
    `const db = new pool.OpfsSAHPoolDb('/aether.sqlite3')
     const rows = db.exec({ sql: 'SELECT * FROM records ORDER BY key', returnValue: 'resultRows', rowMode: 'array' })
     const format = db.selectValue('PRAGMA user_version')
     db.close()
     postMessage({ rows, format })`
  )

test('a record in format 1 moves, then opens in format 2, every part kept, the old file kept as it was', async ({
  page
}) => {
  // A blank page at the app's address, so the record is the app's own and the app has not opened it.
  await page.goto('record/sqlite-3.54.0/VENDOR.json')
  await inWorker(
    page,
    `const db = new pool.OpfsSAHPoolDb('/aether.sqlite3')
     db.exec('CREATE TABLE records (key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT')
     db.exec("INSERT INTO records VALUES ('aether-test-old', '{\\"kept\\":true}')")
     db.exec('PRAGMA user_version = 1')
     db.close()
     postMessage('ok')`
  )
  const before = await oldRecord(page)
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  expect(await stored(page, 'aether-test-old')).toEqual(['{"kept":true}', 1])
  // A save on it goes through at the next version.
  await page.evaluate(async () => {
    const { persistedStore } = await import(`${location.origin}/eruko/record/store.js`)
    const store = persistedStore('aether-test-old')
    store.set((/** @type {Record<string, unknown>} */ p) => ({ ...p, more: 1 }))
    store.flush()
  })
  await expect.poll(async () => (await stored(page, 'aether-test-old'))[1]).toBe(2)
  await page.close()
  const page2 = await page.context().newPage()
  await page2.goto('record/sqlite-3.54.0/VENDOR.json')
  expect(await opfsNames(page2)).toEqual(
    expect.arrayContaining(['.aether', 'eruko-moved', 'eruko.sqlite3'])
  )
  // The old pool still holds the record exactly as it was before the move.
  expect(await oldRecord(page2)).toEqual(before)
})

test('a record written by the old store survives the move, in every row', async ({ page }) => {
  await page.goto('record/sqlite-3.54.0/VENDOR.json')
  await inWorker(
    page,
    `const db = new pool.OpfsSAHPoolDb('/aether.sqlite3')
     db.exec('CREATE TABLE records (key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT')
     db.exec('ALTER TABLE records ADD COLUMN version INTEGER NOT NULL DEFAULT 1')
     db.exec('PRAGMA user_version = 2')
     db.transaction(() => { for (let i = 0; i < 300; i++) db.exec({ sql: 'INSERT INTO records VALUES (?, ?, ?)', bind: ['aether-test-' + i, JSON.stringify({ i, pad: 'x'.repeat(i) }), i % 7 + 1] }) })
     db.close()
     postMessage('ok')`
  )
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  for (const i of [0, 1, 150, 299])
    expect(await stored(page, `aether-test-${i}`)).toEqual([
      JSON.stringify({ i, pad: 'x'.repeat(i) }),
      (i % 7) + 1
    ])
  // After a reload the record opens from the new file only.
  await page.reload()
  await expect(page.locator('h1')).toHaveText('Units')
  expect(await stored(page, 'aether-test-299')).toEqual([
    JSON.stringify({ i: 299, pad: 'x'.repeat(299) }),
    (299 % 7) + 1
  ])
})

test('a move that fails keeps the old store in use, says nothing is lost, and tries again next time', async ({
  page
}) => {
  await page.goto('record/sqlite-3.54.0/VENDOR.json')
  await inWorker(
    page,
    `const db = new pool.OpfsSAHPoolDb('/aether.sqlite3')
     db.exec('CREATE TABLE records (key TEXT PRIMARY KEY, value TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 1) STRICT')
     db.exec("INSERT INTO records VALUES ('aether-test-stay', '{\\"old\\":true}', 3)")
     db.exec('PRAGMA user_version = 2')
     db.close()
     postMessage('ok')`
  )
  await page.route('**/wa-sqlite-1.2.0/dist/wa-sqlite.wasm', route => route.abort())
  await page.goto('./')
  await expect(page.getByText('Nothing is lost.')).toBeVisible()
  expect(await stored(page, 'aether-test-stay')).toEqual(['{"old":true}', 3])
  await page.evaluate(async () => {
    const { persistedStore } = await import(`${location.origin}/eruko/record/store.js`)
    const store = persistedStore('aether-test-stay')
    store.set((/** @type {Record<string, unknown>} */ p) => ({ ...p, still: 1 }))
    store.flush()
  })
  await expect.poll(async () => (await stored(page, 'aether-test-stay'))[1]).toBe(4)
  expect(await opfsNames(page)).not.toContain('eruko-moved')
  // Next time the copy works: the save made on the old store moves with it.
  await page.unroute('**/wa-sqlite-1.2.0/dist/wa-sqlite.wasm')
  await page.reload()
  await expect(page.locator('h1')).toHaveText('Units')
  await expect(page.getByText('Nothing is lost.')).toHaveCount(0)
  expect(await stored(page, 'aether-test-stay')).toEqual(['{"old":true,"still":1}', 4])
  expect(await opfsNames(page)).toContain('eruko-moved')
})

test('a first visit is drawn before SQLite arrives, and a change made then is saved once it does', async ({
  page
}) => {
  /** @type {() => void} */
  let letThrough = () => {}
  const held = new Promise(r => (letThrough = () => r(undefined)))
  await page.route('**/wa-sqlite-1.2.0/dist/wa-sqlite.wasm', async route => {
    await held
    await route.continue()
  })
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  await page.evaluate(async () => {
    const { persistedStore } = await import(`${location.origin}/eruko/record/store.js`)
    const store = persistedStore('aether-test-early')
    store.set({ early: true })
    store.flush()
  })
  letThrough()
  await expect
    .poll(() =>
      page.evaluate(async () =>
        (await import(`${location.origin}/eruko/record/index.js`)).storedVersion(
          'aether-test-early'
        )
      )
    )
    .toBe(1)
  await page.reload()
  await expect(page.locator('h1')).toHaveText('Units')
  expect(
    await page.evaluate(async () =>
      (await import(`${location.origin}/eruko/record/index.js`)).storedText('aether-test-early')
    )
  ).toBe('{"early":true}')
})
