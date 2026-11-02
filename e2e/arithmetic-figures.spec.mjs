// A number line on an Arithmetic topic, under the shared figure rules (e2e/figures.mjs). The line
// is drawn with the proof line that first uses it, so the proof is read to that line.
import { test, expect } from '@playwright/test'
import { figureTests } from './figures.mjs'

/** @param {import('@playwright/test').Page} page */
async function openProofFigure(page) {
  await page.goto('explore/mathematics/arithmetic/adding-and-subtracting-rational-numbers')
  const proof = page.locator('ae-proof-reader:visible').first()
  await expect(proof.locator('figure')).toHaveCount(0)
  await proof.getByRole('button', { name: 'Show the reason' }).click()
  await proof.getByRole('button', { name: 'Right' }).click()
}

figureTests('Arithmetic number line', openProofFigure)

test('a figure of several sentences prints them as a list', async ({ page }) => {
  await openProofFigure(page)
  const items = page.locator('figure.lrn-ss-figure figcaption ul li')
  await expect(items.first()).toBeAttached()
  expect(await items.count()).toBeGreaterThan(1)
})
