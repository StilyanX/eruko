// The app opens with no connection after the first visit: the service
// worker keeps every file of its list, so once it has taken over, the page reloads offline and
// every unit's page draws, a topic with its maths and the record's SQLite included.
import { test, expect } from '@playwright/test'
import { UNITS } from '../src/shell/registry.js'

test.use({ serviceWorkers: 'allow' })

test('after the first visit, home and every unit open offline', async ({ page, context }) => {
  test.setTimeout(120_000)
  /** @type {string[]} */
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  await page.goto('')
  await expect(page.locator('h1')).toBeVisible()
  // The worker has kept every file and controls the page.
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready
    if (!navigator.serviceWorker.controller)
      await new Promise(done => navigator.serviceWorker.addEventListener('controllerchange', done))
  })
  // A page drawn under the worker fetches its faces through it, and the worker keeps each.
  await page.reload()
  await expect(page.locator('h1')).toBeVisible()
  await page.evaluate(() => document.fonts.ready)
  const faces = await page.evaluate(
    async () =>
      (await (await caches.open('eruko')).keys()).filter(r => r.url.endsWith('.woff2')).length
  )
  expect(faces).toBeGreaterThan(0)
  await context.setOffline(true)
  await page.reload()
  await expect(page.locator('h1')).toBeVisible()
  for (const unit of UNITS) {
    await page.goto(unit.slug)
    await expect(page.locator('h1')).toHaveText(unit.title)
  }
  // A maths topic, its formulas set from the MathML generated for it.
  const topic = UNITS.flatMap(u =>
    u.pages.filter(p => p.file.endsWith('/topic')).map(p => ({ u, p }))
  )[0]
  if (topic) {
    await page.goto(`${topic.u.slug}/${topic.p.slug}`)
    await expect(page.locator('h1')).toHaveText(topic.p.title)
    await expect(page.locator('main math').first()).toBeVisible()
  }
  expect(errors).toEqual([])
})
