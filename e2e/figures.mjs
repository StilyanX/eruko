// Hides: what the shared figure rules ask of a page that draws one,
// for each unit's own figures spec: labels never below body text, a wide figure in a scroll box
// the keyboard reaches, the text equal printed under the figure, and forced colours. 390 px is a
// phone; 360 px is a 1440 px screen at 400% zoom.
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Open a page whose first visible figure is drawn: `open` puts the record the page needs in the
 * browser and brings the figure into view.
 * @typedef {(page: import('@playwright/test').Page) => Promise<void>} Open
 */

/**
 * What the size test reads of each figure, run in the page.
 * @param {Element[]} list
 */
function measure(list) {
  return list.map(f => {
    const svg = f.querySelector('svg')
    const box = f.querySelector('.lrn-figure-scroll')
    const view = svg?.viewBox.baseVal
    const drawn = svg?.getBoundingClientRect().width ?? 0
    // An SVG label's size is its own or its group's font-size, scaled as drawn; an HTML label
    // over the drawing (a number line) has its computed size.
    const inSvg = [...(svg?.querySelectorAll('text') ?? [])].map(t =>
      view ? (Number(t.closest('[font-size]')?.getAttribute('font-size')) * drawn) / view.width : 0
    )
    const inHtml = [...f.querySelectorAll('[aria-hidden="true"] *')]
      .filter(
        e =>
          !e.closest('svg') &&
          [...e.childNodes].some(n => n.nodeType === 3 && n.textContent?.trim())
      )
      .map(e => parseFloat(getComputedStyle(e).fontSize))
    const labels = [...inSvg, ...inHtml]
    return {
      smallest: labels.length ? Math.min(...labels) : 0,
      body: parseFloat(getComputedStyle(document.body).fontSize),
      hidden: svg?.closest('[aria-hidden="true"]') ? 'true' : null,
      role: f.getAttribute('role'),
      caption: f.querySelector('figcaption')?.textContent?.trim() ?? '',
      wide: !!box && box.scrollWidth > box.clientWidth,
      tabindex: box?.getAttribute('tabindex'),
      region: box?.getAttribute('role'),
      label: box?.getAttribute('aria-label') ?? ''
    }
  })
}

/**
 * The size, scroll and text tests of one page, at a phone's width and at 400% zoom.
 * @param {string} name
 * @param {Open} open
 */
function sizeTests(name, open) {
  for (const width of [390, 360])
    test(`${name} at ${width} px: labels stand at body size, wide figures scroll, text is printed`, async ({
      page
    }) => {
      await page.setViewportSize({ width, height: 800 })
      await open(page)
      const figures = page.locator('figure.lrn-ss-figure:visible')
      await expect(figures.first()).toBeAttached()
      const found = await figures.evaluateAll(measure)
      for (const f of found) {
        expect(f.smallest).toBeGreaterThanOrEqual(f.body - 0.5)
        expect(f.hidden).toBe('true')
        expect(f.role).toBeNull()
        expect(f.caption.length).toBeGreaterThan(10)
        expect(f.tabindex).toBe(f.wide ? '0' : null)
        expect(f.region).toBe(f.wide ? 'region' : null)
        if (f.wide) expect(f.label).toMatch(/, scrolls sideways$/)
      }
      const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
      expect(over).toBeLessThanOrEqual(0)
      const wide = found.findIndex(f => f.wide)
      if (wide >= 0) {
        const scrolls = figures.nth(wide).locator('.lrn-figure-scroll')
        await scrolls.focus()
        await expect(scrolls).toBeFocused()
        await page.keyboard.press('ArrowRight')
        await expect.poll(() => scrolls.evaluate(b => b.scrollLeft)).toBeGreaterThan(0)
      }
      const axe = await new AxeBuilder({ page }).include('figure.lrn-ss-figure').analyze()
      expect(axe.violations).toEqual([])
    })
}

/**
 * The forced-colours test of one page.
 * @param {string} name
 * @param {Open} open
 */
function forcedColoursTest(name, open) {
  test(`${name} in forced colours: lines and labels take the system text colour on its ground`, async ({
    page
  }, info) => {
    await page.emulateMedia({ forcedColors: 'active' })
    await open(page)
    const svg = page.locator('figure.lrn-ss-figure svg:visible').first()
    await expect(svg).toBeAttached()
    const got = await svg.evaluate(el => {
      const probe = document.createElement('i')
      probe.style.cssText = 'color: CanvasText; background: Canvas'
      document.body.append(probe)
      const want = getComputedStyle(probe)
      const have = getComputedStyle(el)
      const mark = el.querySelector('[stroke], line, path, polyline')
      const out = {
        adjust: have.forcedColorAdjust,
        colour: have.color === want.color,
        ground: have.backgroundColor === want.backgroundColor,
        stroke: mark && getComputedStyle(mark).stroke === want.color
      }
      probe.remove()
      return out
    })
    expect(got).toEqual({ adjust: 'none', colour: true, ground: true, stroke: true })
    await info.attach('forced-colours', {
      body: await page.locator('figure.lrn-ss-figure:visible').first().screenshot(),
      contentType: 'image/png'
    })
  })
}

/**
 * The figure tests of one page.
 * @param {string} name
 * @param {Open} open
 */
export function figureTests(name, open) {
  sizeTests(name, open)
  forcedColoursTest(name, open)
}
