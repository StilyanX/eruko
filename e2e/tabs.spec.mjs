// Several tabs on one record: every tab works, the tab in view holds
// the record, no tab's save is lost to another's, and a tab that holds the record and stops
// answering is said plainly, then caught up with once it answers.
import { test, expect } from '@playwright/test'

const KEY = 'aether-test-tabs'

/**
 * A tab whose being hidden the test sets: the browser under test shows every tab as in view.
 * @param {import('@playwright/test').BrowserContext} context
 */
async function openTab(context) {
  const page = await context.newPage()
  await page.addInitScript(() => {
    let hidden = false
    Object.defineProperty(document, 'visibilityState', {
      get: () => (hidden ? 'hidden' : 'visible')
    })
    Object.defineProperty(window, 'hideTab', {
      value: (/** @type {boolean} */ h) => {
        hidden = h
        document.dispatchEvent(new Event('visibilitychange'))
      }
    })
  })
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  return page
}

/** @param {import('@playwright/test').Page} page */
const holds = page =>
  page.evaluate(async () => (await import(`${location.origin}/eruko/record/index.js`)).holdsRecord())

/**
 * Set `name` to true in the test part, in this tab, and write it at once.
 * @param {import('@playwright/test').Page} page
 * @param {string} name
 */
const change = (page, name) =>
  page.evaluate(async (/** @type {[string, string]} */ [key, name]) => {
    const { persistedStore } = await import(`${location.origin}/eruko/record/store.js`)
    const store = persistedStore(key)
    store.set((/** @type {Record<string, unknown>} */ prev) => ({ ...prev, [name]: true }))
    store.flush()
  }, /** @type {[string, string]} */ ([KEY, name]))

/** @param {import('@playwright/test').Page} page */
const value = page =>
  page.evaluate(
    async key => (await import(`${location.origin}/eruko/record/store.js`)).persistedStore(key).get(),
    KEY
  )

/** @param {import('@playwright/test').Page} page */
const saved = page =>
  page.evaluate(
    async key => (await import(`${location.origin}/eruko/record/index.js`)).storedText(key),
    KEY
  )

test('a second tab opens the app, and the first keeps working', async ({ context }) => {
  const a = await openTab(context)
  const b = await openTab(context)
  await expect(b.getByText('not answering')).toHaveCount(0)
  await expect(a.getByText('not answering')).toHaveCount(0)
  await expect.poll(() => holds(a)).toBe(true)
  expect(await holds(b)).toBe(false)
})

test('two tabs saving the same part at once keep both changes, in both tabs', async ({
  context
}) => {
  const a = await openTab(context)
  const b = await openTab(context)
  await Promise.all([change(a, 'fromA'), change(b, 'fromB')])
  const both = { fromA: true, fromB: true }
  await expect.poll(() => value(a)).toEqual(both)
  await expect.poll(() => value(b)).toEqual(both)
  await expect.poll(() => saved(b).then(t => JSON.parse(t ?? '{}'))).toEqual(both)
  // and the record holds both after a reload
  await b.reload()
  await expect(b.locator('h1')).toHaveText('Units')
  expect(await value(b)).toEqual(both)
})

test('the tab in view takes the record from a hidden one', async ({ context }) => {
  const a = await openTab(context)
  const b = await openTab(context)
  await expect.poll(() => holds(a)).toBe(true)
  await a.evaluate(() => /** @type {any} */ (window).hideTab(true))
  await expect.poll(() => holds(b)).toBe(true)
  expect(await holds(a)).toBe(false)
  // Both still save, through the new holder.
  await change(a, 'afterA')
  await change(b, 'afterB')
  await expect.poll(() => value(a)).toEqual({ afterA: true, afterB: true })
})

test('a tab closed while it holds the record loses no save sent to it', async ({ context }) => {
  const a = await openTab(context)
  const b = await openTab(context)
  await change(b, 'sentAsItClosed')
  await a.close()
  await expect.poll(() => holds(b), { timeout: 10000 }).toBe(true)
  await expect.poll(() => saved(b), { timeout: 10000 }).toBe('{"sentAsItClosed":true}')
  await expect(b.getByText('not answering')).toHaveCount(0)
})

test('a tab holding the record that stops answering is said plainly, and is caught up with once it answers', async ({
  context
}) => {
  const a = await openTab(context)
  const b = await openTab(context)
  const cdp = await context.newCDPSession(a)
  await cdp.send('Debugger.enable')
  await cdp.send('Debugger.pause')
  await change(b, 'whileStuck')
  await expect(b.getByText('Another Eruko tab is not answering')).toBeVisible({ timeout: 5000 })
  expect(await value(b)).toEqual({ whileStuck: true })
  await cdp.send('Debugger.resume')
  await expect(b.getByText('Another Eruko tab is not answering')).toHaveCount(0, {
    timeout: 10000
  })
  await expect.poll(() => saved(a), { timeout: 10000 }).toBe('{"whileStuck":true}')
})

test('a tab about to be frozen hands the record over first', async ({ context }) => {
  const a = await openTab(context)
  const b = await openTab(context)
  // The browser sends this before it freezes a tab (Page Lifecycle); the test browser cannot freeze
  // on request, so the test sends it. A tab frozen without it is the case above.
  await expect.poll(() => holds(a)).toBe(true)
  await a.evaluate(() => document.dispatchEvent(new Event('freeze')))
  await expect.poll(() => holds(b), { timeout: 10000 }).toBe(true)
  await change(b, 'whileFrozen')
  await expect.poll(() => saved(b)).toBe('{"whileFrozen":true}')
  await expect(b.getByText('not answering')).toHaveCount(0)
})
