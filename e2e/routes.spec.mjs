// Every address of the app opens: home, each discipline, each unit and each of its pages,
// from the registry. A page fails on any page error, a failed request for the app's own files, a
// breach of its Content-Security-Policy, or a failure screen in place of the page.
import { test, expect } from '@playwright/test'
import { DISCIPLINES, UNITS } from '../src/shell/registry.js'

const ROUTES = [
  '',
  ...DISCIPLINES.map(d => `explore/${d.id}`),
  ...UNITS.flatMap(u => [u.slug, ...u.pages.map(p => `${u.slug}/${p.slug}`)])
]

const FAILURES = [
  'Eruko stopped working',
  'This page did not load',
  'This page needs a connection',
  'A new version of Eruko is ready',
  'Page not found'
]

for (const route of ROUTES)
  test(`/${route} opens with no page error`, async ({ page, baseURL }) => {
    /** @type {string[]} */
    const errors = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('response', r => {
      if (r.url().startsWith(baseURL ?? '') && r.status() >= 400)
        errors.push(`${r.status()} ${r.url()}`)
    })
    await page.addInitScript(() => {
      const seen = /** @type {string[]} */ ([])
      Object.assign(window, { cspBreaches: seen })
      document.addEventListener('securitypolicyviolation', e =>
        seen.push(`${e.effectiveDirective} ${e.blockedURI}`)
      )
    })
    await page.goto(route)
    await expect(page.locator('h1').first()).toBeVisible()
    await page.waitForTimeout(300)
    for (const title of FAILURES) await expect(page.locator('h1').first()).not.toHaveText(title)
    expect(errors).toEqual([])
    expect(await page.evaluate(() => /** @type {any} */ (window).cspBreaches)).toEqual([])
  })
