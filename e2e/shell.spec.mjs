// The frame and the pages every unit shares (Explore, the unit page, Settings, the failure
// screens), on whichever units the registry lists. What one unit's pages say is in its own spec.
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { DISCIPLINES, UNITS } from '../src/shell/registry.js'

const [FIRST] = UNITS
if (!FIRST) throw new Error('No unit is listed.')
const WITH_SECTIONS = UNITS.find(u => (u.sections?.length ?? 0) > 1)

test('the explore page finds units as you type, keeps focus, and Back keeps what was typed', async ({
  page
}) => {
  const typed = FIRST.title.slice(0, 3).toLowerCase()
  // The search finds a word that starts with what is typed, never one that holds it inside.
  const found = UNITS.filter(u =>
    new RegExp(`\\b${typed}`).test(`${u.title} ${u.description}`.toLowerCase())
  ).length
  await page.goto('./')
  await expect(page.locator('h1')).toHaveText('Units')
  const field = page.getByLabel('Search the units')
  await field.pressSequentially(typed)
  await expect(field).toBeFocused()
  await expect(field).toHaveValue(typed)
  await expect(page.locator('.search-count')).toHaveText(`${found} found.`)
  await page.getByRole('link', { name: FIRST.title, exact: true }).first().click()
  await expect(page.locator('h1')).toHaveText(FIRST.title)
  await expect(page.locator('h1')).toBeFocused()
  await page.goBack()
  await expect(page.getByLabel('Search the units')).toHaveValue(typed)
  await expect(page.locator('.search-count')).toHaveText(`${found} found.`)
})

test('a unit page opens a section in place, and Back returns to it as it was left', async ({
  page
}) => {
  test.skip(!WITH_SECTIONS, 'no unit has two sections')
  await page.goto(WITH_SECTIONS?.slug ?? '')
  const sections = page.locator('button.hm-section')
  const second = sections.nth(1)
  const was = await second.getAttribute('aria-expanded')
  await second.click()
  await expect(second).toHaveAttribute('aria-expanded', was === 'true' ? 'false' : 'true')
  await page.getByRole('link', { name: 'Start' }).first().click()
  await expect(page.locator('h1')).toHaveText('Start')
  await page.goBack()
  await expect(page.locator('button.hm-section').nth(1)).toHaveAttribute(
    'aria-expanded',
    was === 'true' ? 'false' : 'true'
  )
})

test('Settings sets the theme as it is chosen, and Esc closes it', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: 'Settings' }).click()
  await expect(page.getByRole('dialog', { name: 'Settings' })).toBeVisible()
  await page.getByLabel('Light, high contrast').check()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await expect(page.locator('html')).toHaveAttribute('data-contrast', 'more')
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await page.getByLabel('Dark', { exact: true }).check()
  await expect(page.locator('html')).not.toHaveAttribute('data-contrast', 'more')
  // No translation exists yet, so the language is not offered.
  await expect(page.getByRole('group', { name: 'Language' })).toHaveCount(0)
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: 'Settings' })).toBeHidden()
})

test('a theme picked in one tab shows in the other at once, and the next visit opens in it', async ({
  page,
  context
}) => {
  await page.goto('./')
  const other = await context.newPage()
  await other.goto('./')
  await page.getByRole('button', { name: 'Settings' }).click()
  await page.getByLabel('Dark, high contrast').check()
  await expect(other.locator('html')).toHaveAttribute('data-contrast', 'more')
  await expect(other.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)')
  // The first frame: no stylesheet has loaded yet, and the ground is already the theme's.
  await other.route('**/style/**', r => r.abort())
  await other.reload()
  await expect(other.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(other.locator('body')).toHaveCSS('background-color', 'rgb(0, 0, 0)')
})

test('a device that asks for more contrast gets it with no pick in Settings', async ({
  browser
}) => {
  const ctx = await browser.newContext({ contrast: 'more' })
  const page = await ctx.newPage()
  await page.goto('./')
  await expect(page.locator('html')).toHaveAttribute('data-contrast', 'more')
  await ctx.close()
})

test('an address that names no page says so and leads home', async ({ page }) => {
  await page.goto(`${FIRST.slug}/no-such-page`)
  await expect(page.locator('h1')).toHaveText('Page not found')
  await expect(page.getByRole('link', { name: FIRST.title })).toBeVisible()
})

for (const path of ['./', ...DISCIPLINES.map(d => `explore/${d.id}`), ...UNITS.map(u => u.slug)])
  test(`${path} has no accessibility violation axe finds`, async ({ page }) => {
    await page.goto(path)
    await expect(page.locator('h1')).toBeVisible()
    const { violations } = await new AxeBuilder({ page }).analyze()
    expect(violations.map(v => `${v.id}: ${v.nodes.length}`)).toEqual([])
  })

for (const unit of UNITS)
  test(`on a phone every step of the path to ${unit.slug}/start is at least 44px wide`, async ({
    page
  }) => {
    await page.setViewportSize({ width: 390, height: 800 })
    await page.goto(`${unit.slug}/start`)
    await expect(page.locator('h1')).toHaveText('Start')
    const steps = page.locator('.lv-crumb a').locator('visible=true')
    await expect(steps.last()).toHaveText(unit.title)
    for (const step of await steps.all()) {
      const box = await step.boundingBox()
      expect(box?.width ?? 0).toBeGreaterThanOrEqual(44)
    }
  })

test('a record no longer saved carries a button that saves the backup file at once', async ({
  page
}) => {
  await page.goto(FIRST.slug)
  await expect(page.locator('h1')).toHaveText(FIRST.title)
  await page.evaluate(async () => {
    const store = await import(new URL('record/store.js', document.baseURI).href)
    store.health.set((/** @type {object} */ h) => ({ ...h, stopped: true }))
  })
  const note = page.locator('.sys-note')
  await expect(note).toContainText('Eruko has stopped saving')
  const download = page.waitForEvent('download')
  await note.getByRole('button', { name: 'Save a backup file' }).click()
  expect((await download).suggestedFilename()).toMatch(/\.json$/)
  await expect(note).toContainText('Download started.')
})

for (const unit of UNITS)
  test(`${unit.slug}: the cards stand Continue, Review, Start, the way on first`, async ({
    page
  }) => {
    await page.goto(unit.slug)
    await expect(page.locator('.hm-start .hm-start-title')).toHaveText([
      'Continue',
      'Review',
      'Start'
    ])
  })

for (const unit of UNITS)
  test(`${unit.slug} opens its next work from one Continue card, and Review is the table of what is due`, async ({
    page
  }) => {
    await page.goto(unit.slug)
    await expect(page.locator('a.hm-start', { hasText: 'Continue' })).toHaveCount(1)
    await expect(page.locator('a.hm-start', { hasText: 'Review' })).toHaveAttribute(
      'href',
      new RegExp(`/${unit.slug}/review$`)
    )
  })

test("each home card opens what its unit page's Continue card opens", async ({ page }) => {
  for (const unit of UNITS) {
    await page.goto(unit.slug)
    await expect(page.locator('h1')).toHaveText(unit.title)
    const to = await page.locator('a.hm-start', { hasText: 'Continue' }).getAttribute('href')
    await page.goto('./')
    const card = page.locator('.ep-card', {
      has: page.getByRole('heading', { name: unit.title, exact: true })
    })
    await expect(card.locator('.ep-card-today a')).toHaveAttribute('href', to ?? '')
  }
})

test('Enter on arriving at a topic presses its first primary, below the fold too, and focus never lands on Wrong', async ({
  page
}) => {
  const topic = FIRST.pages.find(p => !p.start && !p.review && !p.repeats)
  await page.goto(`${FIRST.slug}/${topic?.slug}`)
  await expect(page.locator('h1')).toBeVisible()
  const label = (await page.locator('.lrn-ss-primary').first().textContent()) ?? ''
  const same = page.locator('.lrn-ss-primary', { hasText: label })
  const before = await same.count()
  await page.locator('h1').focus()
  await page.keyboard.press('Enter')
  await expect(same).toHaveCount(before - 1)
  await expect(page.locator(':focus')).not.toHaveText(/^(Wrong|Right)$/)
})
