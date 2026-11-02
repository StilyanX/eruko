// Every move a learner makes on Augustus's pages, and axe on each page and each state of the life's
// page. A record some way into the course is put in the browser's key store before the page opens
// (augustus-records.mjs); the app takes it over.
import { LIVES_PART } from '../src/units/augustus/core/entry.logic.js'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { RECORDS } from './augustus-records.mjs'

const R = 'explore/biography/augustus'
const LIFE = `${R}/life`

/**
 * Open the app on a record of Augustus, before the page's own code runs.
 * @param {import('@playwright/test').Page} page
 * @param {keyof typeof RECORDS} name
 */
async function withRecord(page, name) {
  await page.addInitScript(
    ([key, text]) => localStorage.setItem(key ?? '', text ?? ''),
    [LIVES_PART.key, JSON.stringify(RECORDS[name]())]
  )
}

/**
 * The record as the page holds it (the store every screen reads and writes).
 * @param {import('@playwright/test').Page} page
 * @returns {Promise<Record<string, any>>}
 */
async function stored(page) {
  return page.evaluate(async key => {
    const store = await import(new URL('record/store.js', document.baseURI).href)
    return store.persistedStore(key).get()
  }, LIVES_PART.key)
}

/**
 * The visible button of `name`.
 * @param {import('@playwright/test').Page | import('@playwright/test').Locator} scope
 * @param {string | RegExp} name
 */
const button = (scope, name) =>
  scope
    .getByRole('button', { name, exact: typeof name === 'string' })
    .locator('visible=true')
    .first()

/**
 * Press a locked button: it stays focusable and says why it is locked.
 * @param {import('@playwright/test').Page | import('@playwright/test').Locator} scope
 * @param {string} name
 */
const pressLocked = async (scope, name) => {
  // A forced click goes where the button was; wait until it stops moving (a heading taking focus
  // scrolls the page).
  await button(scope, name).scrollIntoViewIfNeeded()
  await button(scope, name).click({ force: true })
}

/** @param {import('@playwright/test').Page} page */
const status = page => page.locator('p[role=status].sr-only')

/**
 * Turn through the lesson's screens to its last, with Next.
 * @param {import('@playwright/test').Page} page
 * @param {number} times
 */
async function next(page, times) {
  for (let i = 0; i < times; i++) await button(page, 'Next').click()
}

test('Start lists what the learner needs, and leads to the unit', async ({ page }) => {
  await page.goto(`${R}/start`)
  await expect(page.locator('h1')).toHaveText('Start')
  await expect(page.getByRole('heading', { name: 'What you need' })).toBeVisible()
  await expect(page.locator('main')).toContainText('A keyboard, to type your forecasts')
  await expect(page.locator('main')).toContainText(
    'For telling the whole life: your voice, paper and pen, or the keyboard.'
  )
  await page.getByRole('link', { name: 'Go to Augustus' }).click()
  await expect(page.locator('h1')).toHaveText('Augustus')
})

test('Review lists the life when its recall is due, and opens the telling', async ({ page }) => {
  await withRecord(page, 'due.json')
  await page.goto(`${R}/review`)
  await expect(page.locator('h1')).toHaveText('Review')
  const table = page.locator('table.lrn-rv')
  await expect(table.locator('tbody tr')).toHaveCount(1)
  await expect(table.locator('td')).toHaveText('1 due')
  await table.getByRole('link', { name: 'Tell the whole life of Augustus' }).click()
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
  await expect(page.getByRole('heading', { name: 'Tell the whole life' })).toBeVisible()
})

test('Review removes the sample items an older page put in the record', async ({ page }) => {
  await withRecord(page, 'sample.json')
  await page.goto(`${R}/review`)
  await expect(page.locator('h1')).toHaveText('Review')
  const r = await stored(page)
  expect(r.sample).toBeUndefined()
  expect(r.recall?.augustus).toBeUndefined()
  expect(r.items.some((/** @type {{ id: string }} */ i) => i.id === 'sample-setback')).toBe(false)
})

/**
 * The first screens of the first lesson, paged with Enter, Next and Previous, to its question.
 * @param {import('@playwright/test').Page} page
 */
async function readToQuestion(page) {
  await page.goto(LIFE)
  // One page title, the life's; the section names the lesson in hand.
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 1' })).toBeVisible()
  await expect(page.locator('.lrn-bio-date')).toHaveText('63 BC · age 0')
  // Enter, with focus on the screen, presses its Next.
  await page.locator('.lrn-bio-date').focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.lrn-bio-date')).toHaveText('59 BC · age 3–4')
  // Next moves focus to the new screen's date line.
  await button(page, 'Next').click()
  await expect(page.locator('.lrn-bio-date')).toBeFocused()
  await button(page, 'Previous').click()
  await expect(page.locator('.lrn-bio-date')).toHaveText('59 BC · age 3–4')
  await next(page, 7)
  // The question's Lock waits for its fields: focus goes to the first.
  await expect(page.locator('#au-p')).toBeFocused()
}

/**
 * The question: Lock waits for every field, and a chance the app cannot read is named on Lock.
 * @param {import('@playwright/test').Page} page
 */
async function forecastFirst(page) {
  // The question: Lock waits for every field; a probability out of form says so.
  const q = page.locator('form[aria-labelledby=au-question]')
  await expect(page.locator('#au-question')).toContainText('North Africa')
  await pressLocked(q, 'Lock')
  await expect(q.locator('.why')).toHaveText('Fill in every field.')
  await expect(status(page)).toHaveText('Fill in every field.')
  // One question: did he, with the chance of yes, and why. No move to type.
  await expect(page.locator('#au-move')).toHaveCount(0)
  await expect(page.getByLabel('Did he? Your chance of yes, such as 85%')).toBeVisible()
  await expect(page.getByLabel('Why', { exact: true })).toBeVisible()
  // A chance is typed as people write it; one the app cannot read is named only on Lock.
  await page.locator('#au-p').fill('2O')
  await expect(page.locator('#au-p')).not.toHaveAttribute('aria-invalid')
  await expect(page.locator('#au-p-note')).toHaveCount(0)
  await page.locator('#au-reason').fill('He is sickly.')
  await button(q, 'Lock').click()
  await expect(page.locator('#au-p')).toHaveAttribute('aria-invalid', 'true')
  await expect(page.locator('#au-p-note')).toHaveText(
    'Write the chance as a number from 0 to 100, such as 85%.'
  )
  await expect(status(page)).toHaveText('Write the chance as a number from 0 to 100, such as 85%.')
  await page.locator('#au-p').fill('20%')
  await expect(page.locator('#au-p-note')).toHaveCount(0)
  await page.locator('#au-p').fill('1.5.')
  // Pasting is allowed: a paste into a field goes through, with no note.
  const pasteBlocked = await page.locator('#au-reason').evaluate(el => {
    const data = new DataTransfer()
    data.setData('text/plain', 'pasted')
    return !el.dispatchEvent(
      new ClipboardEvent('paste', { clipboardData: data, bubbles: true, cancelable: true })
    )
  })
  expect(pasteBlocked).toBe(false)
  await expect(page.locator('main')).not.toContainText('Pasting is off')
  // What was typed stays when the learner pages back and returns.
  await button(q, 'Previous').click()
  await expect(page.locator('.lrn-bio-date')).toBeVisible()
  await button(page, 'Next').click()
  await expect(page.locator('#au-reason')).toHaveValue('He is sickly.')
  await expect(page.locator('#au-p')).toHaveValue('1.5.')
  await page.locator('#au-p').fill('20%')
  await expect(page.locator('#au-p')).not.toHaveAttribute('aria-invalid')
  await button(q, 'Lock').click()
}

/**
 * The outcome: the answer, the entry and its score; back to the situation, and a reload.
 * @param {import('@playwright/test').Page} page
 */
async function outcomeFirst(page) {
  // The outcome opens on the answer, the entry and its score, and the first score's note.
  await expect(status(page)).toHaveText('You locked the forecast.')
  // Focus goes to the step's primary, Next, so Enter turns on.
  await expect(button(page, 'Next')).toBeFocused()
  await expect(page.locator('.lrn-bio-claim')).toContainText('Your chance of yes: 20%.')
  await expect(page.locator('.lrn-bio-claim')).toContainText('Your reason: He is sickly.')
  await expect(page.locator('.lrn-bio-claim')).toContainText('0.08')
  await expect(page.locator('main')).toContainText('0 is best, 2 is worst')
  // Back from the outcome reads the situation again; the forecast stays locked.
  await button(page, 'Previous').click()
  await expect(page.locator('.lrn-bio-q')).toHaveCount(0)
  await button(page, 'Next').click()
  await expect(page.locator('.lrn-bio-q')).toBeVisible()
  await expect(page.locator('#au-move')).toHaveCount(0)
  await page.waitForTimeout(800)
  await page.reload()
  await expect(page.locator('.lrn-bio-q')).toBeVisible()
  await button(page, 'Next').click()
}

/**
 * The setbacks: the fields, another, and removing it.
 * @param {import('@playwright/test').Page} page
 */
async function setbacksFirst(page) {
  // Setbacks: the fields, another, and removing it; no choice of the screen that tells it.
  await expect(page.getByRole('heading', { name: 'Setback in this stretch?' })).toBeVisible()
  // Done waits for the fields, so focus goes to the first; both locked buttons say why from the start.
  await expect(page.getByLabel('The setback')).toBeFocused()
  await expect(page.locator('.lrn-ss .why')).toHaveText([
    'Fill in every field.',
    'Fill in every field.'
  ])
  await page.getByLabel('The setback').fill('He fell ill.')
  await page.getByLabel('What it cost').fill('He stayed behind.')
  await page.getByLabel('The next move').fill('He followed later.')
  await expect(page.locator('main')).not.toContainText('The screen that tells it')
  await expect(page.locator('.lrn-ss details')).toHaveCount(0)
  await button(page, 'Add another').click()
  await expect(page.locator('fieldset.lrn-bio-entry')).toHaveCount(2)
  await expect(page.locator('fieldset.lrn-bio-entry legend').first()).toHaveText('Setback 1')
  await button(page, 'Remove setback 2').click()
  await expect(status(page)).toHaveText('You removed setback 2.')
  await expect(page.locator('fieldset.lrn-bio-entry')).toHaveCount(1)
  // Enter in a field presses Done.
  await page.getByLabel('The next move').press('Enter')
}

/**
 * The check: every sentence on one list, one chosen.
 * @param {import('@playwright/test').Page} page
 */
async function checkFirst(page) {
  // The check: every sentence of the lesson on one list, under each screen's date line, the
  // button to move on at its foot; a sentence chosen, then the shape.
  await expect(page.getByRole('heading', { name: 'Choose the claims' })).toBeVisible()
  // A sentence scholars dispute shows the account's note beside its choice.
  const disputed = page.locator('.lrn-bio-pick p.lrn-ss-note', { hasText: 'In dispute: ' }).first()
  await expect(disputed).toContainText('In dispute: ')
  const disputeId = (await disputed.getAttribute('id')) ?? ''
  await expect(page.locator(`.lrn-bio-pick input[aria-describedby~="${disputeId}"]`)).toHaveCount(1)
  // A sentence with evidence shows what the main account names, which the end level asks back.
  await expect(page.locator('.lrn-bio-pick p.lrn-ss-note').first()).toHaveText(
    /^The main account names: /
  )
  await expect(page.locator('fieldset.lrn-bio-pick')).toHaveCount(9)
  await expect(page.locator('fieldset.lrn-bio-pick legend').first()).toHaveText('63 BC · age 0')
  await expect(page.getByRole('navigation', { name: 'Screens' })).toHaveCount(0)
  await page.locator('.lrn-bio-pick label').first().click()
  await expect(page.locator('.lrn-bio-pick input').first()).toBeChecked()
  // With no note written yet, a new one is the only choice: no screen asks for it.
  await button(page, 'Done').click()
}

/**
 * The record: the claim in the learner's words and the note, then recall.
 * @param {import('@playwright/test').Page} page
 */
async function recordFirst(page) {
  // The record: the claim in the learner's words and the note.
  await expect(page.getByRole('heading', { name: 'Write it in the record' })).toBeVisible()
  await expect(page.getByLabel('Claim 1 in your own words')).toBeFocused()
  await page.getByLabel('Claim 1 in your own words').fill('He set out after Caesar.')
  await page.getByLabel('The kind of problem').fill('A sick heir left behind by his patron.')
  await button(page, 'Done').click()
  await expect(status(page)).toHaveText('Lesson 1 of 56 is in the record.')

  // The life is in recall now, learned today; focus goes to the telling's primary.
  await expect(page.getByRole('heading', { name: 'Tell the whole life' })).toBeVisible()
  await expect(button(page, 'Show the record')).toBeFocused()
  await expect(page.locator('main')).toContainText('It covers 1 of 56 lessons.')
  const r = await stored(page)
  expect(r.lives.augustus.lastLesson).toBe(0)
  expect(r.items.map((/** @type {{ kind: string }} */ i) => i.kind)).toEqual([
    'forecast',
    'setback',
    'claim',
    'shape'
  ])
  expect(r.items[0].p).toBe(20)
  expect(r.items[1].page).toBeUndefined()
  expect(r.items[1].next).toBe('He followed later.')
  expect(r.recall.augustus.entered).toBeTruthy()
}

test('a first lesson: read, forecast, outcome, setbacks, check and record, then a reload keeps the place', async ({
  page
}) => {
  await readToQuestion(page)
  await forecastFirst(page)
  await outcomeFirst(page)
  await setbacksFirst(page)
  await checkFirst(page)
  await recordFirst(page)
})

test('"I already know" and no setback or claim put the lesson in the record at once', async ({
  page
}) => {
  await page.goto(LIFE)
  await next(page, 8)
  await button(page, 'I already know').click()
  await expect(status(page)).toHaveText('You read the decision with no score.')
  await expect(page.locator('.lrn-bio-claim')).toHaveCount(0)
  await expect(page.locator('main')).toContainText('No.')
  await button(page, 'Next').click()
  await button(page, 'None').click()
  await button(page, 'Done').click()
  await expect(status(page)).toHaveText('Lesson 1 of 56 is in the record.')
  const r = await stored(page)
  expect(r.items).toHaveLength(1)
  expect(r.items[0].known).toBe(true)
})

/** The items of the record on the telling's list. @param {import('@playwright/test').Page} page */
const recordItems = page => page.locator('.lrn-bio-items > li')

/**
 * A telling typed, kept over a reload, and checked against the record, one item wrong.
 * @param {import('@playwright/test').Page} page
 */
async function tellAndCheck(page) {
  const items = recordItems(page)
  await withRecord(page, 'learning.json')
  await page.goto(LIFE)
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
  await expect(page.locator('main')).toContainText('Say "contested" for a contested claim.')
  await expect(page.locator('main')).toContainText(
    'A telling with misses counts once you have told the missed items right again. Then the next lesson opens. You have told it right 1 of 3 times.'
  )
  await expect(page.locator('main')).toContainText('Tell it aloud, on paper, or type it here.')
  // The telling asks only for what the marking checks: the decision and what he did.
  await expect(page.locator('main')).toContainText(
    'For each decision, say what it was and what Octavian did.'
  )
  await expect(page.locator('main')).not.toContainText('reason')
  await page.getByLabel('Your telling, if you type it').fill('He was born in 63 BC.')
  await page.waitForTimeout(800)
  await page.reload()
  await expect(page.getByLabel('Your telling, if you type it')).toHaveValue('He was born in 63 BC.')
  await button(page, 'Show the record').click()
  await expect(page.getByRole('heading', { name: 'Check it against the record' })).toBeFocused()
  await expect(page.locator('.lrn-bio-told')).toHaveText('He was born in 63 BC.')
  // Every item on one list, the telling beside it, one Done.
  await expect(items).toHaveCount(12)
  await expect(page.getByRole('navigation', { name: 'Record items' })).toHaveCount(0)
  await expect(page.locator('main')).not.toContainText('Page 1 of')
  await expect(page.getByRole('region', { name: 'What you told' })).toBeVisible()
  await expect(page.locator('.lrn-bio-told-col')).toHaveCSS('position', 'sticky')
  await pressLocked(page, 'Done')
  await expect(page.locator('.lrn-ss .why')).toHaveText(
    'Mark every item. Item 1 of 12 has no mark.'
  )
  // Mark the first item Wrong and every other Right.
  await items.nth(0).getByLabel('Wrong').check()
  for (const li of (await items.all()).slice(1)) await li.getByLabel('Right').check()
  await expect(items.nth(0).getByLabel('Wrong')).toBeChecked()
  await expect(items.nth(1).getByLabel('Right')).toBeChecked()
  await expect(page.locator('main')).toContainText('Claim · 44 BC · contested')
  await button(page, 'Done').click()
}

/**
 * The wrong item told again, covered until Show, then the round counted.
 * @param {import('@playwright/test').Page} page
 */
async function tellAgain(page) {
  const items = recordItems(page)
  await expect(status(page)).toHaveText('1 wrong. Tell those again.')
  await expect(
    page.getByRole('heading', { name: 'Tell again only the items marked wrong' })
  ).toBeVisible()
  // Each item told again is covered until Show: no box, no answer, no mark yet.
  await expect(items).toHaveCount(1)
  await expect(items.getByRole('textbox')).toHaveCount(0)
  await expect(items.locator('.lrn-bio-say')).toHaveCount(0)
  await expect(items.getByLabel('Right')).toHaveCount(0)
  await expect(items).toContainText('Decision · 47 BC')
  await pressLocked(page, 'Done')
  await expect(page.locator('.lrn-ss .why')).toHaveText('Mark every item. Item 1 of 1 has no mark.')
  await items.getByRole('button', { name: /^Show the item ?: Decision · 47 BC$/ }).click()
  await expect(items.locator('.lrn-ss-note').first()).toBeFocused()
  await expect(items.locator('.lrn-bio-say').first()).toBeVisible()
  await items.getByLabel('Right').check()
  await button(page, 'Done').click()
  // A short round opens the next telling at once, under the mark it set.
  await expect(status(page)).toHaveText('Every item right.')
  await expect(page.getByRole('heading', { name: 'Tell the whole life' })).toBeVisible()
  await expect(page.locator('#au-today')).toContainText('Every item right.')
  await expect(page.locator('main')).toContainText('You have told it right 2 of 3 times.')
  await expect(page.getByLabel('Your telling, if you type it')).toHaveValue('')
  await expect(button(page, 'Show the record')).toBeFocused()
  expect((await stored(page)).recall.augustus.learning).toBe(2)
}

/**
 * The last mark changed: the round opens again with its marks, and its count is taken back.
 * @param {import('@playwright/test').Page} page
 */
async function changeMark(page) {
  const items = recordItems(page)
  await button(page, 'Change the last mark to Wrong').click()
  await expect(status(page)).toHaveText('Change the marks, then press Done.')
  await expect(
    page.getByRole('heading', { name: 'Tell again only the items marked wrong' })
  ).toBeVisible()
  await expect(items.getByLabel('Right')).toBeChecked()
  await expect(button(page, 'Change the last mark to Wrong')).toHaveCount(0)
  expect((await stored(page)).recall.augustus.learning).toBe(1)
  await items.getByLabel('Wrong').check()
  await button(page, 'Done').click()
  await expect(status(page)).toHaveText('1 still wrong. Tell those again.')
}

test('telling the life: told, checked on one list, the wrong ones again, then the round counts', async ({
  page
}) => {
  await tellAndCheck(page)
  await tellAgain(page)
  await changeMark(page)
})

test('the notes written before show on one list, and a note picked takes the decision', async ({
  page
}) => {
  await withRecord(page, 'check.json')
  await page.goto(LIFE)
  await button(page, 'Done').click()
  const shapes = page.locator('input[name=au-shape]')
  await expect(shapes).toHaveCount(8)
  await expect(page.getByRole('navigation', { name: 'Note pages' })).toHaveCount(0)
  await pressLocked(page, 'Done')
  await expect(page.locator('.lrn-ss .why')).toHaveText('Choose a note, or write a new one.')
  await page.getByLabel('A legal claim that can only be enforced by force.').check()
  await button(page, 'Done').click()
  await expect(status(page)).toHaveText('Lesson 9 of 56 is in the record.')
  const r = await stored(page)
  const note = r.items.find((/** @type {{ id: string }} */ i) => i.id === 'n7')
  expect(note.decisions).toHaveLength(2)
})

test('a telling told aloud or on paper: the record shows with nothing typed', async ({ page }) => {
  await withRecord(page, 'learning.json')
  await page.goto(LIFE)
  await button(page, 'Show the record').click()
  await expect(page.getByRole('heading', { name: 'Check it against the record' })).toBeFocused()
  await expect(page.locator('main')).not.toContainText('What you told')
  await expect(page.locator('.lrn-bio-told')).toHaveCount(0)
  await expect(page.locator('.lrn-bio-items > li').first().getByLabel('Right')).toBeVisible()
})

test('a telling right on a day after it was learned opens the lesson at once, under the date it set', async ({
  page
}) => {
  await withRecord(page, 'due.json')
  await page.goto(LIFE)
  await button(page, 'Show the record').click()
  for (const li of await recordItems(page).all()) await li.getByLabel('Right').check()
  await button(page, 'Done').click()
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 9' })).toBeVisible()
  await expect(page.locator('#au-today')).toContainText(/Every item right\. It comes back on /)
  await expect(button(page, 'Next')).toBeFocused()
  // The mark stands until the lesson is answered; changed, the telling opens again.
  await button(page, 'Next').click()
  await button(page, 'Change the last mark to Wrong').click()
  await expect(page.getByRole('heading', { name: 'Check it against the record' })).toBeVisible()
  await expect(recordItems(page).first().getByLabel('Right')).toBeChecked()
})

test('a round an older page ended, waiting on Go on or Tell it again, opens what that press opened', async ({
  page
}) => {
  await withRecord(page, 'done-next.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 9' })).toBeVisible()
  await expect(page.locator('#au-today')).not.toContainText('Every item right')
})

test('a short round an older page ended opens the next telling', async ({ page }) => {
  await withRecord(page, 'done-learning.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { name: 'Tell the whole life' })).toBeVisible()
  await expect(page.locator('main')).toContainText('You have told it right 2 of 3 times.')
})

test('a lesson done reads again from its row, with the answer at the outcome', async ({ page }) => {
  await withRecord(page, 'mid.json')
  await page.goto(`${LIFE}?lesson=4`)
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 4, read again' })).toBeVisible()
  await next(page, 4)
  await expect(page.locator('.lrn-bio-q')).toBeFocused()
  await expect(page.locator('.lrn-bio-claim')).toContainText('Your entry')
  await expect(page.locator('main')).not.toContainText('0 is best')
  // The screen in view is kept: a reload lands on it.
  await reloadSaved(page)
  await expect(page.locator('.lrn-bio-claim')).toContainText('Your entry')
})

test('a lesson reached early says what opens it and links the page that does', async ({ page }) => {
  await withRecord(page, 'mid.json')
  await page.goto(`${LIFE}?lesson=20`)
  await expect(page.locator('#au-lesson')).toContainText(
    'This lesson opens once you finish the lessons before it.'
  )
  await page.getByRole('link', { name: 'the lessons before it' }).click()
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 9' })).toBeVisible()
})

test('the pair of lives: a life added, the cells and the rule, and a rule saved', async ({
  page
}) => {
  await withRecord(page, 'pair.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { name: 'Compare two lives' })).toBeVisible()
  const cols = page.locator('.lrn-bio-pair > div')
  await expect(cols).toHaveCount(2)
  await expect(cols.nth(1).locator('.lrn-ss-note').first()).toHaveText('Julius Caesar')
  await expect(cols.nth(0)).toContainText('In the record, 47 BC:')
  for (const col of await cols.all())
    for (const label of ['The problem', 'What he knew', 'The decision', 'The outcome'])
      await col.getByLabel(label).fill('x')
  await pressLocked(page, 'Done')
  await expect(page.locator('.lrn-ss .why')).toHaveText('Fill in every cell and the rule.')
  await page.getByLabel('His great-uncle was Caesar.').check()
  // Enter in a field presses Done.
  await page.locator('#au-rule').fill('Wait for the mandate.')
  await page.locator('#au-rule').press('Enter')
  const r = await stored(page)
  const rule = r.items.find((/** @type {{ kind: string }} */ i) => i.kind === 'rule')
  expect(rule.text).toBe('Wait for the mandate.')
  expect(rule.restsOn).toEqual(['c1'])
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 9' })).toBeVisible()
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
})

test('a pair at the raised level pages its third life, and "no rule" closes it', async ({
  page
}) => {
  await withRecord(page, 'pair3.json')
  await page.goto(LIFE)
  const cols = page.locator('.lrn-bio-pair > div')
  await expect(cols).toHaveCount(2)
  await button(page, 'The third life').click()
  await expect(cols.nth(1).locator('.lrn-ss-note').first()).toHaveText('Julius Caesar')
  await button(page, 'The second life').click()
  await expect(cols.nth(1).locator('.lrn-ss-note').first()).toHaveText('Alexander')
  await button(page, 'No rule').click()
  const r = await stored(page)
  expect(r.items.at(-1).text).toBe('no rule')
})

test('at the lowered level, "no rule yet" adds a life before "no rule"', async ({ page }) => {
  await withRecord(page, 'pair-more.json')
  await page.goto(LIFE)
  const cols = page.locator('.lrn-bio-pair > div')
  await expect(cols).toHaveCount(2)
  await expect(button(page, 'The third life')).toHaveCount(0)
  await button(page, 'No rule yet: add a life').click()
  await expect(cols).toHaveCount(3)
  await expect(cols.nth(2).locator('.lrn-ss-note').first()).toHaveText('Julius Caesar')
  await button(page, 'No rule').click()
  const r = await stored(page)
  expect(r.items.at(-1).lives).toEqual(['augustus', 'alexander', 'caesar'])
})

test('the stuck path closes the life as stuck', async ({ page }) => {
  await withRecord(page, 'stuck.json')
  await page.goto(LIFE)
  await expect(
    page.getByRole('heading', { name: 'This book does not show the setbacks' })
  ).toBeVisible()
  await expect(page.locator('main')).toContainText('Once another account is built')
  await button(page, 'End this life').click()
  // Ended as stuck, the life goes on to the next-life checklist, with no level check.
  await expect(page.getByRole('heading', { name: 'The next life' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'How your forecasts went' })).toHaveCount(0)
  await expect(page.locator('h1')).toHaveText('The life of Augustus')
  expect((await stored(page)).lives.augustus.stuck).toBeTruthy()
})

test('the level check, then the next-life checklist, written and kept', async ({ page }) => {
  await withRecord(page, 'level.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { name: 'How your forecasts went' })).toBeVisible()
  await expect(page.locator('main')).toContainText(
    'Your average score is the mean of your forecast scores'
  )
  await expect(page.locator('main')).toContainText('This is the first life')
  // Plain words: no noise or p; the lean is named and defined where Judgment shows it.
  await expect(page.locator('main')).toContainText('Your average chance of yes')
  await expect(page.locator('main')).not.toContainText(/noise|p = /i)
  await expect(page.getByRole('heading', { name: 'Judgment' })).toBeVisible()
  await expect(page.locator('main')).toContainText('Judgment does not hold yet.')
  // The check is recorded on arrival, with no press: the next-life checklist stands under it.
  await expect(page.getByRole('heading', { name: 'The next life' })).toBeVisible()
  await expect.poll(async () => (await stored(page)).level?.checks?.length).toBe(1)
  await expect(page.locator('main')).toContainText(
    'A young heir whose rival holds the money he is owed.'
  )
  // Every field is optional: with nothing typed the button is Skip, and it is never locked.
  await expect(page.locator('main')).toContainText('Every field is optional.')
  await expect(button(page, 'Skip')).toBeVisible()
  await expect(button(page, 'Skip')).not.toHaveAttribute('aria-disabled')
  await page.locator('#au-field').fill('Law')
  await page.locator('#au-rank').fill('Associate')
  await page.locator('#au-people').fill('Agrippa\n\nMaecenas')
  // Enter in a one-line field presses Done.
  await page.locator('#au-rank').press('Enter')
  await expect(page.locator('main')).toContainText('The next life opens here once it is built.')
  const r = await stored(page)
  expect(r.checklist.people).toEqual(['Agrippa', 'Maecenas'])
  expect(r.you).toEqual({ field: 'Law', rank: 'Associate' })
  await page.getByRole('link', { name: 'Go to Augustus' }).click()
  await expect(page.locator('h1')).toHaveText('Augustus')
})

test('the next-life checklist skipped with nothing typed still closes it', async ({ page }) => {
  await withRecord(page, 'next-life.json')
  await page.goto(LIFE)
  await expect(button(page, 'Done')).toBeVisible()
  await page.locator('#au-field').fill('')
  await page.locator('#au-rank').fill('')
  await button(page, 'Skip').click()
  await expect(page.locator('main')).toContainText('The next life opens here once it is built.')
  const r = await stored(page)
  expect(r.checklist.people).toEqual([])
  expect(r.you).toEqual({ field: 'Law', rank: 'Associate' })
})

test('a record naming a life the course does not hold says so', async ({ page }) => {
  await withRecord(page, 'none.json')
  await page.goto(LIFE)
  await expect(page.locator('main')).toContainText('No life is in hand')
})

for (const [route, record] of /** @type {[string, keyof typeof RECORDS | null][]} */ ([
  [`${R}/start`, null],
  [`${R}/review`, null],
  [`${R}/review`, 'due.json'],
  [LIFE, null],
  [`${LIFE}?lesson=4`, 'mid.json'],
  [`${LIFE}?lesson=20`, 'mid.json'],
  ...Object.keys(RECORDS)
    .filter(k => k !== 'sample.json')
    .map(k => /** @type {[string, keyof typeof RECORDS]} */ ([LIFE, k]))
]))
  test(`${route}${record ? ` with ${record}` : ''} has no accessibility violation axe finds`, async ({
    page
  }) => {
    if (record) await withRecord(page, record)
    await page.goto(route)
    await expect(page.locator('main.study')).toBeVisible()
    await expect(page.locator('h1')).toBeVisible()
    const { violations } = await new AxeBuilder({ page }).analyze()
    expect(violations.map(v => `${v.id}: ${v.nodes.length}`)).toEqual([])
  })

test('the states behind a click have no accessibility violation axe finds', async ({ page }) => {
  /** @param {string} what */
  const axe = async what => {
    const { violations } = await new AxeBuilder({ page }).analyze()
    expect(violations.map(v => `${what} ${v.id}: ${v.nodes.length}`)).toEqual([])
  }
  await withRecord(page, 'check-last.json')
  await page.goto(LIFE)
  await page.locator('.lrn-bio-pick label').first().click()
  await axe('check chosen')
  await button(page, 'Done').click()
  await axe('shape')
})

test('the question and the setbacks behind a click have no accessibility violation axe finds', async ({
  page
}) => {
  /** @param {string} what */
  const axe = async what => {
    const { violations } = await new AxeBuilder({ page }).analyze()
    expect(violations.map(v => `${what} ${v.id}: ${v.nodes.length}`)).toEqual([])
  }
  await page.goto(LIFE)
  await next(page, 8)
  await pressLocked(page, 'Lock')
  await axe('question with a locked button')
  await page.locator('#au-p').fill('x')
  await page.locator('#au-reason').fill('No army yet.')
  await button(page, 'Lock').click()
  await expect(page.locator('#au-p-note')).toBeVisible()
  await axe('question with a chance it cannot read')
  await button(page, 'I already know').click()
  await button(page, 'Next').click()
  await page.getByLabel('The setback').fill('He fell ill.')
  await axe('struggle with a setback typed')
})

// One address per test: a second load in the same page can meet the record still held by the first.
test('a row not reached says what it opens after, in the words read with it', async ({ page }) => {
  await page.goto(R)
  const second = page.locator('.hm-numbered li').nth(1)
  await expect(second.locator('.hm-still')).toContainText('Opens after 1')
  await expect(second.getByRole('link')).toHaveCount(0)
})

test('the rows are named by their years, and no row or line names a decision', async ({ page }) => {
  await page.goto(R)
  const first = page.locator('.hm-numbered li').first()
  await expect(first.locator('.hm-row-title')).toHaveText('63 to 47 BC')
  await expect(page.locator('main')).not.toContainText('Has Octavian')
})

test('once the learner has begun, the cards keep their order: Continue, Review, Start', async ({
  page
}) => {
  await withRecord(page, 'mid.json')
  await page.goto(R)
  await expect(page.locator('h1')).toHaveText('Augustus')
  await expect(page.locator('a.hm-start')).toHaveText([/^Continue/, /^Review/, /^Start/])
})

test('the Continue card opens the first lesson span', async ({ page }) => {
  await page.goto(R)
  const card = page.locator('a.hm-start', { hasText: 'Continue' })
  await expect(card.locator('.hm-start-note')).toHaveText(/^63 to 47 BC$/)
  await expect(card).toHaveAttribute('href', /\/life$/)
})

test('the place line names the next lesson by its place only', async ({ page }) => {
  await page.goto(R)
  await expect(page.locator('.hm-place')).toHaveText('Lesson 1 of 56.')
})

/**
 * Reload once the write that follows a change has gone out.
 * @param {import('@playwright/test').Page} page
 */
async function reloadSaved(page) {
  await page.waitForTimeout(800)
  await page.reload()
}

test('a forecast being typed is kept over a reload', async ({ page }) => {
  await withRecord(page, 'question.json')
  await page.goto(LIFE)
  await page.locator('#au-p').fill('45%')
  await page.locator('#au-reason').fill('No army yet.')
  await reloadSaved(page)
  await expect(page.locator('#au-p')).toHaveValue('45%')
  await expect(page.locator('#au-reason')).toHaveValue('No army yet.')
})

test('setbacks being typed are kept over a reload', async ({ page }) => {
  await withRecord(page, 'struggle.json')
  await page.goto(LIFE)
  await page.getByLabel('The setback').fill('He fell ill.')
  await page.getByLabel('What it cost').fill('He stayed.')
  await page.getByLabel('The next move').fill('He followed.')
  await button(page, 'Add another').click()
  await reloadSaved(page)
  await expect(page.locator('fieldset.lrn-bio-entry')).toHaveCount(2)
  await expect(page.getByLabel('The setback').first()).toHaveValue('He fell ill.')
  await expect(page.getByLabel('The next move').first()).toHaveValue('He followed.')
})

test("the check's chosen sentences are kept over a reload", async ({ page }) => {
  await withRecord(page, 'check.json')
  await page.goto(LIFE)
  await page.locator('.lrn-bio-pick label').nth(1).click()
  await reloadSaved(page)
  await expect(page.locator('.lrn-bio-pick input').nth(1)).toBeChecked()
  await expect(page.locator('.lrn-bio-pick input:checked')).toHaveCount(1)
})

test("the record step's text is kept over a reload", async ({ page }) => {
  await withRecord(page, 'record.json')
  await page.goto(LIFE)
  await page.getByLabel('Claim 1 in your own words').fill('He waited.')
  await page.getByLabel('The kind of problem').fill('A heir with no army.')
  await reloadSaved(page)
  await expect(page.getByLabel('Claim 1 in your own words')).toHaveValue('He waited.')
  await expect(page.getByLabel('The kind of problem')).toHaveValue('A heir with no army.')
})

test("the pair's cells and rule are kept over a reload", async ({ page }) => {
  await withRecord(page, 'pair.json')
  await page.goto(LIFE)
  await page.getByLabel('The problem').first().fill('No money.')
  await page.getByLabel('The one rule both show, in your own words').fill('Pay first.')
  await reloadSaved(page)
  await expect(page.getByLabel('The problem').first()).toHaveValue('No money.')
  await expect(page.getByLabel('The one rule both show, in your own words')).toHaveValue(
    'Pay first.'
  )
})

test('an item told again, shown and marked, is kept over a reload', async ({ page }) => {
  await withRecord(page, 'retry.json')
  await page.goto(LIFE)
  const items = recordItems(page)
  await items
    .nth(1)
    .getByRole('button', { name: /^Show the item/ })
    .click()
  await items.nth(1).getByLabel('Right').check()
  await reloadSaved(page)
  await expect(items.nth(1).getByLabel('Right')).toBeChecked()
})

test('the next-life checklist being typed is kept over a reload', async ({ page }) => {
  await withRecord(page, 'next-life.json')
  await page.goto(LIFE)
  await page.getByLabel('The office or rank you hold').fill('Partner')
  await page.locator('#au-people').fill('Agrippa')
  await reloadSaved(page)
  await expect(page.getByLabel('The office or rank you hold')).toHaveValue('Partner')
  await expect(page.locator('#au-people')).toHaveValue('Agrippa')
})

test('a round an older page ended with no next date opens the lesson', async ({ page }) => {
  await withRecord(page, 'done-no-next.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { level: 2, name: 'Lesson 9' })).toBeVisible()
})

test('in a pair, a life with no name is named so, never by its id', async ({ page }) => {
  await withRecord(page, 'pair-unnamed.json')
  await page.goto(LIFE)
  const names = page.locator('.lrn-bio-pair > div > p.lrn-ss-note:first-child')
  await expect(names).toHaveText(['Augustus', 'A life with no name'])
  await expect(page.locator('.lrn-bio-pair')).not.toContainText('nobody')
})

test('the end level: drawn the day after the life closed, one screen a part, the Reading paged, Done, then the keys and the line', async ({
  page
}) => {
  await withRecord(page, 'end.json')
  await page.goto(LIFE)
  await expect(page.getByRole('heading', { name: 'The end level' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Gaps' })).toBeVisible()
  await expect(page.locator('main li')).toHaveCount(7)
  await page.locator('#au-gap-0').fill('3')
  await reloadSaved(page)
  await expect(page.locator('#au-gap-0')).toHaveValue('3')
  await button(page, 'Next').click()
  await expect(page.getByRole('heading', { name: 'Witnesses' })).toBeVisible()
  await page.locator('#au-wit-0').selectOption('Appian')
  await button(page, 'Next').click()
  await expect(page.getByRole('heading', { name: 'Footing' })).toBeVisible()
  await button(page, 'Next').click()
  await expect(page.getByRole('heading', { name: 'Reading' })).toBeVisible()
  await expect(page.locator('main')).toContainText('Passage 1 of 10')
  // Through every passage and its list of ten to Done.
  while (!(await button(page, 'Done').isVisible())) await button(page, 'Next').click()
  await page.locator('main input[type=radio]').first().check()
  await button(page, 'Done').click()
  await expect(page.getByRole('heading', { name: 'The end level: the keys' })).toBeVisible()
  await expect(page.locator('main')).toContainText('Wrong. The round comes back on')
  const r = await stored(page)
  expect(r.lives.augustus.end.lines).toHaveLength(1)
  expect(r.lives.augustus.end.lines[0].right).toBe(false)
})
