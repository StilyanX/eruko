// The moves a learner makes on Algebra's end level, and axe on each state of its page. A record
// with every topic finished is put in the browser's key store before the page opens; the app
// takes it over.
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { TOPICS } from '../src/units/algebra/core/course.gen.js'
import { ALGEBRA_PART } from '../src/units/algebra/core/entry.logic.js'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const R = 'explore/mathematics/algebra'
const before = addDays(studyDay(Date.now()), -30)

/** A record with every topic finished: each kind retired, each proof known, each statement proved. */
const finished = () => ({
  retired: Object.fromEntries(TOPICS.flatMap(t => t.kinds.map(k => [k.id, before]))),
  proofs: Object.fromEntries(TOPICS.flatMap(t => t.proofs.map(id => [id, { read: before, checks: [], known: true, wrong: [] }]))),
  proved: Object.fromEntries(TOPICS.flatMap(t => t.prove.map(s => [s.id, { done: before }])))
})

/**
 * Open the app on a record: each part's JSON under its key, before the page's own code runs.
 * @param {import('@playwright/test').Page} page
 * @param {Record<string, unknown>} parts
 */
async function withRecord(page, parts) {
  await page.addInitScript(
    pairs => {
      for (const [key, text] of pairs) if (localStorage.getItem(key) === null) localStorage.setItem(key, text)
    },
    Object.entries(parts).map(
      ([key, value]) => /** @type {[string, string]} */ ([key, JSON.stringify(value)])
    )
  )
}

/**
 * The visible button of `name` inside `scope`.
 * @param {import('@playwright/test').Locator | import('@playwright/test').Page} scope
 * @param {string | RegExp} name
 */
const button = (scope, name) => scope.getByRole('button', { name }).locator('visible=true')

/** @param {import('@playwright/test').Page} page */
const axe = async page => (await new AxeBuilder({ page }).analyze()).violations.map(v => v.id)

test('the end level is closed until every topic is finished', async ({ page }) => {
  await page.goto(`${R}/end-level`)
  const main = page.locator('main')
  await expect(main).toContainText('Opens when every topic is finished.')
  await expect(button(main, 'Start the sitting')).toHaveCount(0)
  expect(await axe(page)).toEqual([])
})

test('a paper is sat, marked and failed; the marks put right pass it', async ({ page }) => {
  await withRecord(page, { [ALGEBRA_PART.key]: finished() })
  await page.goto(`${R}/end-level`)
  const main = page.locator('main')
  // The newest Shortlist gives the first paper: the first problem of each run of its algebra list.
  await expect(main).toContainText('problems A1, A4 and A6.')
  await expect(main.getByRole('link', { name: 'IMO Shortlist 2025' })).toHaveAttribute(
    'href',
    'https://www.imo-official.org/assets/documents/problems/2025/IMO2025SL.pdf'
  )
  expect(await axe(page)).toEqual([])

  await button(main, 'Start the sitting').click()
  await expect(main).toContainText('The paper in hand')
  await expect(main).toContainText(/The sitting began at \d\d:\d\d on .+ and ends at \d\d:\d\d\./)
  // The paper stays in hand through a reload.
  await page.waitForTimeout(1200)
  await page.reload()
  await expect(main).toContainText('The paper in hand')
  expect(await axe(page)).toEqual([])

  // A mark out of range is not entered.
  await main.getByLabel('A1, out of 7').fill('7')
  await main.getByLabel('A4, out of 7').fill('3')
  await main.getByLabel('A6, out of 7').fill('8')
  await expect(button(main, 'Enter the marks')).toHaveAttribute('aria-disabled', 'true')
  await main.getByLabel('A6, out of 7').fill('0')
  await button(main, 'Enter the marks').click()
  await expect(main).toContainText('The paper did not pass.')
  await expect(main).toContainText('A1: 7 of 7.')
  await expect(main).toContainText(/A4: 3 of 7\. It comes back in mixed practice on /)
  await expect(main).toContainText(/A6: 0 of 7\. It comes back in mixed practice on /)
  await expect(button(main, 'Start the sitting')).toHaveCount(0)
  expect(await axe(page)).toEqual([])

  // A mistyped mark is put right: the same paper, marked again.
  await button(main, 'Change the marks').click()
  await expect(main.getByLabel('A4, out of 7')).toHaveValue('3')
  await main.getByLabel('A4, out of 7').fill('7')
  await main.getByLabel('A6, out of 7').fill('7')
  await button(main, 'Enter the marks').click()
  await expect(main).toContainText('Algebra is done.')
  expect(await axe(page)).toEqual([])
  await page.waitForTimeout(1200)
  await page.goto(R)
  await expect(page.locator('main')).toContainText('Algebra done: every topic and the end level.')
})
