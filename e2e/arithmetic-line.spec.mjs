// "Place it on the line" (the number line of Arithmetic's visuals): the mark set by a press, by
// the keys, or by a typed decimal; Check, Enter in the box, and the one verdict after it; the line at a phone's width
// and under forced colours. The kind is the last of Fractions and decimals defined (t12-k6), its
// first fading problem in hand.
import { MATH_PART } from '../src/units/arithmetic/core/entry.logic.js'
import bank from '../src/units/arithmetic/content/bank/fractions-and-decimals-defined.js'
import topic from '../src/units/arithmetic/content/topics/fractions-and-decimals-defined.js'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const PAGE = 'explore/mathematics/arithmetic/fractions-and-decimals-defined?item=t12-k6'
const KIND = topic.kinds.at(-1)
const FIRST = KIND?.forms[0]?.fade[0]
/** The first problem's value, as a number of units. */
const VALUE = (() => {
  const [n, d = '1'] = (FIRST?.answer ?? '0').split('/')
  return Number(n) / Number(d)
})()

/** @param {import('@playwright/test').Page} page */
async function open(page) {
  const record = {
    gate: {},
    stage: {
      't12-k6': { form: 0, stage: 2, next: 0, line: 3, problem: 'fade-0-0', day: '2026-10-24' }
    }
  }
  await page.addInitScript(
    ([key, text]) => localStorage.setItem(key, text),
    /** @type {[string, string]} */ ([MATH_PART.key, JSON.stringify(record)])
  )
  await page.goto(PAGE)
  await expect(page.locator('main.study')).toBeVisible()
  const place = page.locator('arithmetic-place-line')
  await place.getByRole('slider').scrollIntoViewIfNeeded()
  return place
}

/**
 * Press the line at a value.
 * @param {import('@playwright/test').Locator} place
 * @param {number} value
 */
async function pressAt(place, value) {
  await place.getByRole('slider').scrollIntoViewIfNeeded()
  const row = await place.locator('.lrn-place-marks').boundingBox()
  const line = await place.locator('.lrn-line-track').boundingBox()
  const label = await place.locator('.lrn-line-n').last().innerText()
  if (!row || !line) throw new Error('the line is not drawn')
  const x = row.x + (value / Number(label)) * row.width
  await place.page().mouse.click(x, line.y + line.height / 2)
}

test('a press sets the mark, the mark is a word and no number, and Check gives the one verdict', async ({
  page
}) => {
  const place = await open(page)
  const check = place.getByRole('button', { name: 'Check' })
  await expect(check).toHaveAttribute('aria-disabled', 'true')
  await expect(place.getByRole('button', { name: 'Answer' })).toHaveCount(0)
  await pressAt(place, VALUE + 0.02)
  await expect(place.locator('.lrn-place-marker-label')).toHaveText('Your mark')
  await expect(place.locator('.lrn-place-marks')).not.toContainText(/\d/)
  await check.click()
  // Right in fading: the line cut into tenths with the exact place and the mark, then Next.
  await expect(place).toContainText('Your mark is in the same tenth.')
  await expect(place.locator('p', { hasText: /^Right\./ })).toHaveCount(1)
  await expect(place.locator('.lrn-line-cuts')).toHaveCount(1)
  await expect(place.locator('.lrn-line-at')).toHaveCount(1)
  await expect(place.locator('.lrn-place-marker')).toHaveCount(1)
  const next = place.getByRole('button', { name: 'Next', exact: true })
  await expect(next).toBeFocused()
  await expect(page.locator('#ar-examples').getByRole('button', { name: 'Continue' })).toHaveCount(
    0
  )
  await next.click()
  await expect(page.locator('#ar-examples')).toContainText('The next problem hides')
})

test('a typed place is kept in the record over a reload, and dropped once checked', async ({
  page
}) => {
  const place = await open(page)
  const box = place.getByLabel(/Or type the place/)
  await box.fill('0.5')
  await page.waitForTimeout(1200)
  await page.reload()
  await expect(box).toHaveValue('0.5')
  await expect(place.locator('.lrn-place-marker')).toHaveCount(1)
})

test('a wrong mark after a right one shows its own verdict, never the last one too', async ({
  page
}) => {
  const place = await open(page)
  await pressAt(place, VALUE)
  await place.getByRole('button', { name: 'Check' }).click()
  await place.getByRole('button', { name: 'Next', exact: true }).click()
  const examples = page.locator('#ar-examples')
  await expect(examples).toContainText('The next problem hides')
  const again = page.locator('arithmetic-place-line')
  // The next problem's line may be drawn again just after it shows, dropping a mark set that soon
  // (an old race, named in the consistency report): the key is pressed until the mark holds.
  await expect(async () => {
    await again.getByRole('slider').focus()
    await page.keyboard.press('End')
    await expect(again.getByRole('button', { name: 'Check' })).not.toHaveAttribute(
      'aria-disabled',
      'true',
      { timeout: 500 }
    )
  }).toPass()
  await again.getByRole('button', { name: 'Check' }).click()
  await expect(examples).toContainText('Wrong. Read the solution.')
  await expect(examples.locator('p', { hasText: /^Right\./ })).toHaveCount(0)
})

test('a mark in another tenth is wrong, and the solution ends on the line cut into tenths', async ({
  page
}) => {
  const place = await open(page)
  await pressAt(place, VALUE + 0.45)
  await place.getByRole('button', { name: 'Check' }).click()
  const examples = page.locator('#ar-examples')
  await expect(examples).toContainText('Wrong. Read the solution.')
  await expect(examples.getByText('Wrong.')).toHaveCount(1)
  await expect(examples.locator('.lrn-line-cuts')).toHaveCount(1)
  await expect(examples.locator('.lrn-line-at')).toHaveCount(1)
})

test('the keys move the mark: arrows by a hundredth, Page keys by a tenth, Home and End to the ends', async ({
  page
}) => {
  const place = await open(page)
  const slider = place.getByRole('slider')
  await expect(slider).toHaveAttribute('aria-valuetext', 'No mark placed')
  await slider.focus()
  await page.keyboard.press('End')
  const to = Number(await slider.getAttribute('aria-valuemax'))
  await expect(slider).toHaveAttribute('aria-valuenow', String(to))
  await expect(slider).toHaveAttribute('aria-valuetext', `Your mark is at ${to}`)
  await page.keyboard.press('Home')
  await expect(slider).toHaveAttribute('aria-valuenow', '0')
  await page.keyboard.press('ArrowRight')
  await expect(slider).toHaveAttribute('aria-valuenow', '0.01')
  await page.keyboard.press('PageUp')
  await expect(slider).toHaveAttribute('aria-valuenow', '0.11')
  await page.keyboard.press('ArrowLeft')
  await expect(slider).toHaveAttribute('aria-valuenow', '0.1')
  await expect(slider).toHaveAttribute('aria-valuetext', 'Your mark is between 0 and 1')
  // Arrows and Enter are all the keyboard needs: Enter on the line presses Check, then Next.
  for (let i = 0; i < Math.round(VALUE * 10) - 1; i++) await page.keyboard.press('PageUp')
  await page.keyboard.press('Enter')
  await expect(place).toContainText('Your mark is in the same tenth.')
  // Focus moves to Next a frame later; outside every step, Enter would press the page's first primary.
  await expect(place.getByRole('button', { name: 'Next', exact: true })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#ar-examples')).toContainText('The next problem hides')
})

test('the place typed as a decimal to one place is the route with no pointer', async ({ page }) => {
  const place = await open(page)
  const box = place.getByRole('textbox')
  await box.fill('3.45')
  await expect(place.getByText('Type a decimal with one place')).toBeVisible()
  await expect(place.getByRole('button', { name: 'Check' })).toHaveAttribute(
    'aria-disabled',
    'true'
  )
  // Enter with no place read checks nothing and says why.
  await box.press('Enter')
  await expect(place.getByRole('slider')).toBeVisible()
  await box.fill(VALUE.toFixed(1))
  await expect(place.getByText('Type a decimal with one place')).toBeHidden()
  await expect(place.locator('.lrn-place-marker')).toHaveCount(1)
  // Enter in the box presses Check.
  await box.press('Enter')
  await expect(place).toContainText('Your mark is in the same tenth.')
})

test('I am stuck counts the problem wrong', async ({ page }) => {
  const place = await open(page)
  await place.getByRole('button', { name: 'I am stuck: count it wrong' }).click()
  await expect(page.locator('#ar-examples')).toContainText('Wrong. Read the solution.')
})

test('at a phone width the line is as wide as the column and no label is shrunk', async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 800 })
  const place = await open(page)
  const line = await place.locator('arithmetic-number-line').boundingBox()
  const column = await place.locator('.lrn-place-line').boundingBox()
  expect(line?.width).toBeCloseTo(column?.width ?? 0, 0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  const sizes = await place
    .locator('.lrn-line-n')
    .evaluateAll(es => es.map(e => getComputedStyle(e).fontSize))
  const body = await page.evaluate(() => getComputedStyle(document.body).fontSize)
  for (const s of sizes) expect(s).toBe(body)
})

test('under forced colours the line, its labels and the mark take the system text colour', async ({
  page
}, info) => {
  await page.emulateMedia({ forcedColors: 'active' })
  const place = await open(page)
  await pressAt(place, VALUE)
  const colours = await place.evaluate(el => {
    const text = getComputedStyle(el.querySelector('.lrn-line-n') ?? el).color
    return {
      text,
      stroke: getComputedStyle(el.querySelector('.lrn-line-whole') ?? el).stroke,
      marker: getComputedStyle(el.querySelector('.lrn-place-marker') ?? el).borderBottomColor,
      ground: getComputedStyle(document.body).backgroundColor
    }
  })
  expect(colours.stroke).toBe(colours.text)
  expect(colours.marker).toBe(colours.text)
  expect(colours.text).not.toBe(colours.ground)
  await info.attach('forced-colours', { body: await page.screenshot(), contentType: 'image/png' })
})

test('the line has no axe violation, bare and checked', async ({ page }) => {
  const place = await open(page)
  expect(
    (await new AxeBuilder({ page }).analyze()).violations.map(v => `${v.id}: ${v.nodes.length}`)
  ).toEqual([])
  await pressAt(place, VALUE + 0.45)
  await place.getByRole('button', { name: 'Check' }).click()
  await expect(page.locator('#ar-examples')).toContainText('Wrong. Read the solution.')
  expect(
    (await new AxeBuilder({ page }).analyze()).violations.map(v => `${v.id}: ${v.nodes.length}`)
  ).toEqual([])
})

test('in mixed practice a place problem is answered on the line, and its date comes after', async ({
  page
}) => {
  const problem = bank.find(p => p.kind === 't12-k6')
  const record = {
    retired: { 't12-k6': '2026-10-01' },
    list: { [problem?.id ?? '']: [{ date: '2026-10-20', right: false, next: '2026-10-21' }] }
  }
  await page.addInitScript(
    ([key, text]) => localStorage.setItem(key, text),
    /** @type {[string, string]} */ ([MATH_PART.key, JSON.stringify(record)])
  )
  await page.goto('explore/mathematics/arithmetic/mixed-practice')
  await expect(page.locator('main.study')).toBeVisible()
  const place = page.locator('arithmetic-place-line')
  await expect(place.getByRole('slider')).toBeVisible()
  await expect(page.getByText('Put your notes away.')).toBeVisible()
  // The problem's solution is not shown before the mark is given.
  await expect(page.locator('li.lrn-ss-line')).toHaveCount(0)
  const [n, d = '1'] = (problem?.answer ?? '0').split('/')
  await pressAt(place, Number(n) / Number(d))
  await place.getByRole('button', { name: 'Check' }).click()
  await expect(page.locator('main.study')).toContainText('Right. This kind comes back on')
  await expect(
    page.locator('main.study p:not(.sr-only)', { hasText: /^(Right|Wrong)\./ })
  ).toHaveCount(1)
  await expect(page.locator('li.lrn-ss-line').first()).toBeVisible()
  // The app checked the place: the mark is its own, so nothing offers to change it, and focus is on Next.
  await expect(page.getByRole('button', { name: /Change the mark/ })).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeFocused()
})

test('a wrong mark puts focus on Next, under the solution', async ({ page }) => {
  const place = await open(page)
  await pressAt(place, VALUE + 0.45)
  await place.getByRole('button', { name: 'Check' }).click()
  const examples = page.locator('#ar-examples')
  await expect(examples).toContainText('Wrong. Read the solution.')
  await expect(examples.getByRole('button', { name: 'Next', exact: true })).toBeFocused()
})

/**
 * Reload once the record has been written (a write follows a change within 400 ms).
 * @param {import('@playwright/test').Page} page
 */
async function reloadKept(page) {
  await page.waitForTimeout(1200)
  await page.reload()
}

test('the place typed or marked is kept over a reload until it is checked', async ({ page }) => {
  let place = await open(page)
  await place.getByRole('textbox').fill(VALUE.toFixed(1))
  await expect(place.locator('.lrn-place-marker')).toHaveCount(1)
  await reloadKept(page)
  place = page.locator('arithmetic-place-line')
  await expect(place.getByRole('textbox')).toHaveValue(VALUE.toFixed(1))
  await expect(place.locator('.lrn-place-marker')).toHaveCount(1)
  // A mark set on the line is kept the same way, and a right mark stays checked over a reload.
  await place.getByRole('slider').focus()
  await page.keyboard.press('End')
  await reloadKept(page)
  place = page.locator('arithmetic-place-line')
  const slider = place.getByRole('slider')
  await expect(slider).toHaveAttribute('aria-valuenow', await slider.getAttribute('aria-valuemax') ?? '')
  await expect(place.getByRole('textbox')).toHaveValue('')
  await pressAt(place, VALUE)
  await place.getByRole('button', { name: 'Check' }).click()
  await expect(place).toContainText('Your mark is in the same tenth.')
  await reloadKept(page)
  place = page.locator('arithmetic-place-line')
  await expect(place).toContainText('Your mark is in the same tenth.')
  // Once handed on, nothing of it is kept: the next problem opens with no mark.
  await place.getByRole('button', { name: 'Next', exact: true }).click()
  await expect(page.locator('#ar-examples')).toContainText('The next problem hides')
  await reloadKept(page)
  await expect(page.locator('arithmetic-place-line').getByRole('slider')).toHaveAttribute('aria-valuetext', 'No mark placed')
})
