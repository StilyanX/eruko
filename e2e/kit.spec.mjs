// The view kit (parts/view.dom.js) in the browser: what a redraw keeps.
import { test, expect } from '@playwright/test'

test('a shape added when an <svg> is drawn again is an SVG element', async ({ page }) => {
  await page.goto('./')
  await expect(page.locator('h1')).toBeVisible()
  const spaces = await page.evaluate(async () => {
    const { h, morph } = await import(new URL('parts/view.dom.js', document.baseURI).href)
    const host = document.createElement('div')
    document.body.append(host)
    morph(host, [h('svg', { viewBox: '0 0 10 10' }, h('circle', { r: 1 }))])
    morph(host, [
      h('svg', { viewBox: '0 0 10 10' }, h('circle', { r: 1 }), h('rect', { width: 2 }))
    ])
    const svg = host.querySelector('svg')
    host.remove()
    return [...(svg?.children ?? [])].map(c => c.namespaceURI)
  })
  expect(spaces).toEqual(['http://www.w3.org/2000/svg', 'http://www.w3.org/2000/svg'])
})
