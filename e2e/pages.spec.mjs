// Every page at 390 and 1440 pixels, in every
// theme, with no accessibility violation axe finds, no sideways scroll, no space lost between words
// and no page error.
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { DISCIPLINES, UNITS } from '../src/shell/registry.js'

const ROUTES = [
  '',
  ...DISCIPLINES.map(d => `explore/${d.id}`),
  ...UNITS.flatMap(u => [u.slug, ...u.pages.map(p => `${u.slug}/${p.slug}`)])
]
const THEMES = ['light', 'dark', 'light-more', 'dark-more']
const WIDTHS = [390, 1440]

/**
 * The words a flex or grid box runs together: each of its children is laid out on its own, so a
 * space at the edge of a text piece beside an element is dropped ("Continue toNumber facts").
 * @returns {string[]}
 */
function lostSpaces() {
  /** @type {string[]} */
  const found = []
  for (const el of document.body.querySelectorAll('*')) {
    if (!/flex|grid/.test(getComputedStyle(el).display)) continue
    const kids = [...el.childNodes]
    kids.forEach((n, i) => {
      if (n.nodeType !== Node.TEXT_NODE || !n.textContent?.trim()) return
      const text = n.textContent
      const before = kids[i - 1]?.nodeType === Node.ELEMENT_NODE && /^\s/.test(text)
      const after = kids[i + 1]?.nodeType === Node.ELEMENT_NODE && /\s$/.test(text)
      if (before || after)
        found.push(`space lost around "${text.trim()}" in <${el.tagName.toLowerCase()}>`)
    })
  }
  return found
}

for (const theme of THEMES)
  for (const width of WIDTHS)
    test(`every page in the ${theme} theme at ${width}px: no axe violation, no sideways scroll, no lost space`, async ({
      page
    }) => {
      test.setTimeout(ROUTES.length * 6000)
      /** @type {string[]} */
      const errors = []
      page.on('pageerror', e => errors.push(e.message))
      await page.setViewportSize({ width, height: 900 })
      await page.addInitScript(t => localStorage.setItem('aether-theme', t), theme)
      /** @type {string[]} */
      const faults = []
      for (const route of ROUTES) {
        await page.goto(route)
        await expect(page.locator('h1').first()).toBeVisible()
        const wide = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
        if (wide) faults.push(`/${route}: scrolls sideways`)
        for (const f of await page.evaluate(lostSpaces)) faults.push(`/${route}: ${f}`)
        const { violations } = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze()
        for (const v of violations) faults.push(`/${route}: ${v.id} (${v.nodes.length})`)
      }
      expect(faults).toEqual([])
      expect(errors).toEqual([])
    })
