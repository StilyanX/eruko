// Access on every page: each address, at 320 px wide, reflows with no sideways
// scroll, keeps every line whole under the text spacing WCAG 1.4.12 asks for, moves nothing under
// reduced motion, and passes axe; and the shared moves a keyboard or a screen reader depends on.
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { DISCIPLINES, PARTS, UNITS } from '../src/shell/registry.js'
import { backupText } from '../src/kernel/backup.logic.js'

const ROUTES = [
  '',
  ...DISCIPLINES.map(d => `explore/${d.id}`),
  ...UNITS.flatMap(u => [u.slug, ...u.pages.map(p => `${u.slug}/${p.slug}`)])
]

// WCAG 1.4.12's figures, laid over every element.
const SPACING =
  '* { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important } p { margin-bottom: 2em !important }'

for (const route of ROUTES)
  test(`/${route} at 320 px reflows, takes 1.4.12 spacing, keeps still and passes axe`, async ({
    page
  }) => {
    await page.setViewportSize({ width: 320, height: 640 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(route)
    await expect(page.locator('h1').first()).toBeVisible()
    await page.waitForTimeout(300)
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()
    expect(violations.map(v => `${v.id}: ${v.nodes.map(n => n.target).join(' ')}`)).toEqual([])
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    ).toBeLessThanOrEqual(0)
    const moving = await page.evaluate(() =>
      [...document.querySelectorAll('*')]
        .filter(e => {
          const s = getComputedStyle(e)
          return (
            s.transitionDuration.split(',').some(d => parseFloat(d) > 0.01) ||
            (s.animationName !== 'none' && parseFloat(s.animationDuration) > 0.01)
          )
        })
        .map(e => e.tagName)
    )
    expect(moving).toEqual([])
    await page.addStyleTag({ content: SPACING })
    await page.waitForTimeout(200)
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
    ).toBeLessThanOrEqual(0)
    const clipped = await page.evaluate(() =>
      [...document.querySelectorAll('body *')]
        .filter(e => {
          const s = getComputedStyle(e)
          // Cut in an axis that hides what overflows it (a scroll box shows it by scrolling).
          const cut = /** @param {string} o */ o => o === 'hidden' || o === 'clip'
          return (
            !e.closest('.sr-only, [inert]') &&
            e.clientWidth > 1 &&
            e.textContent?.trim() &&
            ((cut(s.overflowX) && e.scrollWidth > e.clientWidth + 1) ||
              (cut(s.overflowY) && e.scrollHeight > e.clientHeight + 1))
          )
        })
        .map(e => `${e.tagName}.${e.className}`)
    )
    expect(clipped).toEqual([])
  })

test('a page whose code is slow shows the Loading screen, then a way out', async ({ page }) => {
  await page.goto(`${UNITS[0]?.slug}`)
  await expect(page.locator('h1')).toBeVisible()
  await page.route('**/start/start.element.js', async r => {
    await new Promise(done => setTimeout(done, 12_000))
    await r.continue()
  })
  await page.getByRole('link', { name: /Start/ }).first().click()
  await expect(page.locator('shell-loading').getByRole('status')).toHaveText('Loading the page.', {
    timeout: 2500
  })
  await expect(page.getByRole('button', { name: 'Reload the page' })).toBeVisible({
    timeout: 11_000
  })
})

test('a link to a page seen before lands at its top with its title in view', async ({ page }) => {
  const unit = UNITS[0]
  await page.setViewportSize({ width: 1280, height: 500 })
  await page.goto(`${unit?.slug}/start`)
  await expect(page.locator('h1')).toHaveText('Start')
  await page.evaluate(() => scrollTo(0, 400))
  await page.waitForTimeout(400)
  await page.locator('.lv-crumb a').last().click()
  await expect(page.locator('h1')).toHaveText(unit?.title ?? '')
  await page.getByRole('link', { name: /Start/ }).first().click()
  await expect(page.locator('h1')).toHaveText('Start')
  await expect(page.locator('h1')).toBeFocused()
  expect(await page.evaluate(() => scrollY)).toBe(0)
})

test('the first page opened keeps focus off its title, so the first Tab reaches the skip link', async ({
  page
}) => {
  await page.goto('explore')
  await expect(page.locator('h1')).toBeVisible()
  await page.waitForTimeout(300)
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to the content' })).toBeFocused()
})

test('a link to the page already shown moves focus to its title', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 800 })
  await page.goto('./')
  await expect(page.locator('h1')).toBeVisible()
  const all = page.getByRole('link', { name: 'All units' })
  await all.focus()
  await all.press('Enter')
  await expect(page.locator('main h1')).toBeFocused()
})

test('Settings: a file that is no backup says what to choose; a backup asks with focus on Keep', async ({
  page
}) => {
  await page.goto('./')
  await page.getByRole('button', { name: 'Settings' }).click()
  const panel = page.locator('shell-settings')
  await panel.locator('input[type=file]').setInputFiles({
    name: 'notes.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('not a backup')
  })
  await expect(panel).toContainText('Choose a file saved with Save a backup file.')
  // A backup holding one unit's record (any record that is not empty).
  const records = { [PARTS[0]?.key ?? '']: { kept: 1 } }
  await panel.locator('input[type=file]').setInputFiles({
    name: 'backup.json',
    mimeType: 'application/json',
    buffer: Buffer.from(backupText(records, new Date().toISOString()))
  })
  const ask = panel.getByRole('group', { name: /Load the backup/ })
  await expect(ask).toBeVisible()
  await expect(ask.getByRole('button', { name: 'Keep what is here' })).toBeFocused()
})

test('Settings closed by a press outside gives focus back to Settings', async ({ page }) => {
  await page.goto('./')
  const button = page.getByRole('button', { name: 'Settings' })
  await button.focus()
  await button.press('Enter')
  await expect(page.getByRole('dialog', { name: 'Settings' })).toBeVisible()
  await page.keyboard.press('Tab')
  // A press on the title, which is no control.
  const title = await page.locator('main h1').boundingBox()
  await page.mouse.click((title?.x ?? 0) + 5, (title?.y ?? 0) + 5)
  await expect(page.getByRole('dialog', { name: 'Settings' })).toBeHidden()
  await expect(button).toBeFocused()
})

for (const unit of UNITS)
  test(`${unit.slug}/start names the device's own read-aloud`, async ({ page }) => {
    await page.goto(`${unit.slug}/start`)
    await expect(page.getByText(/turn on your device's reader/)).toBeVisible()
  })

test('focus a script moves to a step that is not a heading shows the ring', async ({ page }) => {
  await page.goto('./')
  await expect(page.locator('h1')).toBeVisible()
  await page.keyboard.press('Tab')
  const ring = await page.evaluate(() => {
    const p = document.createElement('p')
    p.tabIndex = -1
    p.textContent = 'A note'
    document.querySelector('main')?.append(p)
    p.focus()
    return getComputedStyle(p).outlineStyle
  })
  // Keyboard modality: the last input was a key, so the ring shows.
  expect(ring === 'none' ? 'none' : 'ring').toBe('ring')
})
