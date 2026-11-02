// The record's format: a record saved in an older format opens in the
// new one with every part kept, and a copy of the old file is kept beside it.
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

test('a record in format 1 opens in format 2, every part kept, the old file kept', async ({
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
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  const part = await page.evaluate(async () => {
    const db = await import(`${location.origin}/eruko/record/index.js`)
    return [db.storedText('aether-test-old'), db.storedVersion('aether-test-old')]
  })
  expect(part).toEqual(['{"kept":true}', 1])
  // A save on it goes through at the next version.
  await page.evaluate(async () => {
    const { persistedStore } = await import(`${location.origin}/eruko/record/store.js`)
    const store = persistedStore('aether-test-old')
    store.set((/** @type {Record<string, unknown>} */ p) => ({ ...p, more: 1 }))
    store.flush()
  })
  await expect
    .poll(() =>
      page.evaluate(async () =>
        (await import(`${location.origin}/eruko/record/index.js`)).storedVersion('aether-test-old')
      )
    )
    .toBe(2)
  // The old file sits beside the record (the pool lists every file it holds).
  await page.close()
  const page2 = await page.context().newPage()
  await page2.goto('record/sqlite-3.54.0/VENDOR.json')
  const files = await inWorker(page2, `postMessage(pool.getFileNames())`)
  expect(files).toContain('/aether-before-2.sqlite3')
})

test('a first visit is drawn before SQLite arrives, and a change made then is saved once it does', async ({
  page
}) => {
  /** @type {() => void} */
  let letThrough = () => {}
  const held = new Promise(r => (letThrough = () => r(undefined)))
  await page.route('**/sqlite-3.54.0/sqlite3.wasm', async route => {
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
        (await import(`${location.origin}/eruko/record/index.js`)).storedVersion('aether-test-early')
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
