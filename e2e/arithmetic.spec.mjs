// Every move a learner makes on Arithmetic's pages, and axe on each page. A record some way into
// the course is put in the browser's key store before the page opens (arithmetic-records.mjs); the
// app takes it over.
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { FACTS_PART, factSet } from '../src/kernel/facts.logic.js'
import { MATH_PART } from '../src/units/arithmetic/core/entry.logic.js'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { factsRecord, factsSheet, mathPlainFirst, mathRecord } from './arithmetic-records.mjs'

const R = 'explore/mathematics/arithmetic'

/**
 * Open the app on a record: each part's JSON under its key, before the page's own code runs.
 * @param {import('@playwright/test').Page} page
 * @param {Record<string, unknown>} parts
 */
async function withRecord(page, parts) {
  await page.addInitScript(
    pairs => {
      for (const [key, text] of pairs) localStorage.setItem(key, text)
    },
    Object.entries(parts).map(
      ([key, value]) => /** @type {[string, string]} */ ([key, JSON.stringify(value)])
    )
  )
}

/**
 * Reload once the record has been written (a write follows a change within 400 ms).
 * @param {import('@playwright/test').Page} page
 */
async function reloadKept(page) {
  await page.waitForTimeout(1200)
  await page.reload()
}

/**
 * The visible button of `name` inside `scope`.
 * @param {import('@playwright/test').Locator | import('@playwright/test').Page} scope
 * @param {string | RegExp} name
 */
const button = (scope, name) => scope.getByRole('button', { name }).locator('visible=true').first()

test('Start lists what the learner needs, and leads to the unit', async ({ page }) => {
  await page.goto(`${R}/start`)
  await expect(page.locator('h1')).toHaveText('Start')
  await expect(page.getByRole('heading', { name: 'What you need' })).toBeVisible()
  await page.getByRole('link', { name: 'Go to Arithmetic' }).click()
  await expect(page.locator('h1')).toHaveText('Arithmetic')
})

test('Review lists what comes back today, and each page in it opens', async ({ page }) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord(), [FACTS_PART.key]: factsRecord() })
  await page.goto(`${R}/review`)
  await expect(page.locator('h1')).toHaveText('Review')
  const table = page.locator('table.lrn-rv')
  await expect(table.getByRole('rowheader', { name: 'Number facts' })).toBeVisible()
  await table.getByRole('link', { name: 'Mixed practice' }).click()
  await expect(page.locator('h1')).toHaveText('Mixed practice')
  // The foot of a page done every session leads to the rest of Review.
  await expect(page.locator('p.lrn-section').getByRole('link', { name: 'Review' })).toBeVisible()
})

test('the try-first problem: show the answer, mark it, the method opens, and a reload keeps it', async ({
  page
}) => {
  await page.goto(`${R}/order-and-addition`)
  const tryIt = page.locator('#ar-try')
  const examples = page.locator('#ar-examples')
  await expect(examples).toContainText('This section opens once you try')
  await button(tryIt, 'Show the answer').click()
  await expect(tryIt).toContainText('The answer:')
  await button(tryIt, 'Right').click()
  await expect(tryIt).toContainText('Right.')
  await expect(tryIt).toContainText('You tried this on')
  await expect(page.locator('p[role=status].sr-only')).toHaveText(
    'Right. The worked example is open.'
  )
  await expect(examples.getByRole('heading', { name: 'Worked example 1 of 3' })).toBeVisible()
  await reloadKept(page)
  await expect(tryIt).toContainText('You tried this on')
  await expect(tryIt).not.toContainText('Right.')
})

test("an answer and its form line's example are set as maths, never as typed syntax", async ({
  page
}) => {
  await page.goto(`${R}/fundamental-theorem-of-arithmetic`)
  const tryIt = page.locator('#ar-try')
  const form = tryIt.locator('p.lrn-ss-note').filter({ hasText: 'as in' })
  await expect(form.locator('math')).toHaveCount(1)
  await expect(form).not.toContainText('^')
  await button(tryIt, 'Show the answer').click()
  const answer = tryIt.locator('p').filter({ hasText: 'The answer:' })
  await expect(answer.locator('math')).not.toHaveCount(0)
  await expect(answer).not.toContainText('7 × 19')
})

test('the mark sentence takes any form where the form line says or equivalent', async ({
  page
}) => {
  await page.goto(`${R}/adding-and-subtracting-rational-numbers`)
  const tryIt = page.locator('#ar-try')
  await expect(tryIt).toContainText('or equivalent')
  await button(tryIt, 'Show the answer').click()
  await expect(tryIt).toContainText('Right when your answer has this value, whatever its form.')
  await page.goto(`${R}/fundamental-theorem-of-arithmetic`)
  await button(tryIt, 'Show the answer').click()
  await expect(tryIt).toContainText('Right when your answer has this value, in the form asked.')
})

test('I am stuck on the try-first problem counts as wrong and shows the solution', async ({
  page
}) => {
  await page.goto(`${R}/order-and-addition`)
  const tryIt = page.locator('#ar-try')
  await button(tryIt, 'I am stuck: count it wrong').click()
  await expect(tryIt).toContainText('Wrong.')
  await expect(tryIt.getByRole('list', { name: 'Solution' })).toBeVisible()
})

test('a worked example: say why, show the reason, mark it, and the next line takes focus', async ({
  page
}) => {
  await page.goto(`${R}/place-value`)
  const examples = page.locator('#ar-examples')
  // Nothing is typed: the reason is said aloud or written on paper.
  await expect(examples.locator('#end-t1-k1')).toHaveCount(0)
  await expect(examples).toContainText('End the sentence "This step is allowed because')
  await button(examples, 'Show the reason').click()
  await expect(examples.locator('.lrn-ss-reason').first()).toContainText('Reason:')
  // Focus is on the mark's question, never on Wrong, so no Enter marks by habit.
  await expect(examples.locator('fieldset.mark')).toBeFocused()
  await button(examples, 'Right').click()
  await expect(examples.locator('li.lrn-ss-line:visible')).toHaveCount(2)
  await expect(button(examples, 'Show the reason')).toBeFocused()
  // Wrong asks for the reason to be read again, then goes on; no count of wrong lines is kept.
  await button(examples, 'Show the reason').click()
  await button(examples, 'Wrong').click()
  await expect(examples).toContainText('Wrong. Read the reason again.')
  await expect(button(examples, 'Next')).toBeFocused()
  await button(examples, 'Next').click()
  await expect(examples.locator('li.lrn-ss-line:visible')).toHaveCount(3)
  await expect(examples).not.toContainText('lines wrong')
  await reloadKept(page)
  await expect(examples.locator('li.lrn-ss-line:visible')).toHaveCount(3)
})

test('Enter presses the primary control of the step in hand', async ({ page }) => {
  await page.goto(`${R}/place-value`)
  const examples = page.locator('#ar-examples')
  await examples.getByRole('heading', { name: 'Worked example 1 of 3' }).focus()
  await page.keyboard.press('Enter')
  await expect(examples.locator('.lrn-ss-reason').first()).toContainText('Reason:')
})

test('a run of ideas turns with Previous and Next, focus on the new heading, and a reload lands on it', async ({
  page
}) => {
  await page.goto(`${R}/place-value`)
  const ideas = page.locator('#ar-ideas')
  const pager = ideas.getByRole('navigation', { name: 'Idea pages' })
  await button(pager, 'Next').click()
  const second = ideas.getByRole('heading', { name: /^Idea 2 of 7/ })
  await expect(second).toBeVisible()
  await expect(second).toBeFocused()
  await expect(ideas.getByRole('heading', { name: /^Idea 1 of 7/ })).toBeHidden()
  await reloadKept(page)
  await expect(ideas.getByRole('heading', { name: /^Idea 2 of 7/ })).toBeVisible()
  await button(pager, 'Previous').click()
  await expect(ideas.getByRole('heading', { name: /^Idea 1 of 7/ })).toBeVisible()
  // Next is the primary: Enter on an idea turns to the next, never a worked example's reason.
  await button(pager, 'Next').click()
  await ideas.getByRole('heading', { name: /^Idea 2 of 7/ }).focus()
  await page.keyboard.press('Enter')
  await expect(ideas.getByRole('heading', { name: /^Idea 3 of 7/ })).toBeVisible()
  await expect(page.locator('#ar-examples .lrn-ss-reason')).not.toContainText(['Reason:'])
})

test('fading: a wrong answer shows the solution, and a right one says what follows', async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord() })
  await page.goto(`${R}/order-and-multiplication`)
  const examples = page.locator('#ar-examples')
  await expect(examples.locator('.lrn-ss-covered:visible')).toHaveCount(1)
  await expect(examples).toContainText('The last line is hidden.')
  await button(examples, 'Show the answer').click()
  await button(examples, 'Wrong').click()
  await expect(examples).toContainText('Wrong. Read the solution.')
  await button(examples, /^Next$/).click()
  await expect(examples.locator('.lrn-ss-covered:visible')).toHaveCount(2)
  await expect(examples).toContainText('The last two lines are hidden.')
  await button(examples, 'Show the answer').click()
  await button(examples, 'Right').click()
  await expect(examples).toContainText('Right. The next problem hides every line. Solve it alone.')
  // Solved alone: one line, not a row of hidden lines whose count gives the steps away.
  await expect(examples).toContainText('Write the full working on paper.')
  await expect(examples).toContainText('Every line is hidden.')
  await expect(examples.locator('.lrn-ss-covered:visible')).toHaveCount(0)
})

test('a proof is read line by line, and a reload returns to its line', async ({ page }) => {
  await page.goto(`${R}/laws-of-addition-and-multiplication`)
  const proofs = page.locator('#ar-proofs')
  await button(proofs, 'Show the reason').click()
  await button(proofs, 'Right').click()
  await expect(proofs.locator('li.lrn-ss-line:visible')).toHaveCount(2)
  await reloadKept(page)
  await expect(proofs.locator('li.lrn-ss-line:visible')).toHaveCount(2)
})

test('shut parts say what opens them and link it', async ({ page }) => {
  await page.goto(`${R}/laws-of-addition-and-multiplication`)
  const prove = page.locator('#ar-prove')
  await expect(prove).toContainText('The statements open once you read')
  await expect(prove.getByRole('link', { name: /more proof/ })).toHaveAttribute('href', /#ar-proofs$/)
})

test('a link to one item (from Review) opens its run on that item', async ({ page }) => {
  await page.goto(`${R}/multiplication-algorithm?item=t8-proof-two-digit-multiplier#ar-proofs`)
  const proofs = page.locator('#ar-proofs')
  await expect(proofs.getByRole('heading', { name: 'Proof 2 of 2' })).toBeVisible()
  await expect(proofs.getByRole('heading', { name: 'Proof 1 of 2' })).toBeHidden()
})

test('a proof check: the idea and the reasons, then the mark', async ({ page }) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord() })
  await page.goto(`${R}/order-and-addition`)
  const proofs = page.locator('#ar-proofs')
  await button(proofs, 'Show the idea and the reasons').click()
  await expect(proofs).toContainText('The main idea:')
  await button(proofs, 'Right').click()
  await expect(proofs).toContainText('You know it. Its next check is on')
  await expect(page.locator('p[role=status].sr-only')).toHaveText('You know this proof.')
})

test('a reading with a wrong reason makes the first check wrong', async ({ page }) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord() })
  await page.goto(`${R}/laws-of-addition-and-multiplication`)
  const proofs = page.locator('#ar-proofs')
  await expect(proofs).toContainText('you gave the wrong reason for line 2.')
  await button(proofs, 'Show the idea and the reasons').click()
  await button(proofs, 'Done').click()
  await expect(proofs).toContainText('Its next check is on')
})

test('a statement to prove: done, the structure, a fix, and giving up shows the published proof', async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord() })
  await page.goto(`${R}/order-and-addition`)
  const prove = page.locator('#ar-prove')
  await expect(prove).toContainText('You found no fix on')
  await button(prove.getByRole('navigation', { name: 'Statement pages' }), 'Next').click()
  await expect(prove.getByRole('heading', { name: 'Statement 2 of 5' })).toBeVisible()
  await button(prove, 'Done').click()
  await button(prove, 'Wrong').click()
  await expect(prove).toContainText('Fix it on paper, then check it again.')
  // The phase is kept in the record: a reload returns to the fix.
  await reloadKept(page)
  await expect(prove).toContainText('Fix it on paper, then check it again.')
  await button(prove, 'Done').click()
  await button(prove, 'Right').click()
  await expect(prove).toContainText('Compare your proof line by line')
  await button(prove, 'Wrong').click()
  await button(prove, 'I cannot fix it: show the proof').click()
  await expect(prove.locator('div:not([hidden]) > *').first()).toContainText(
    'so you move on from this statement'
  )
})

test('statements to prove: one proved statement per method finishes it, and the rest say they are optional', async ({
  page
}) => {
  const record = mathRecord()
  await withRecord(page, {
    [MATH_PART.key]: {
      ...record,
      proved: { ...record.proved, 't3-s2': { done: record.proved['t3-s1'].seen } }
    }
  })
  await page.goto(`${R}/order-and-addition`)
  const prove = page.locator('#ar-prove')
  await expect(prove).toContainText(
    'Prove one statement of each method to finish the topic: 2 methods are left.'
  )
  const pager = prove.getByRole('navigation', { name: 'Statement pages' })
  // Statement 5 is a direct proof, as is statement 2, which is proved.
  for (let n = 2; n <= 5; n++) await button(pager, 'Next').click()
  await expect(prove.getByRole('heading', { name: 'Statement 5 of 5' })).toBeVisible()
  await expect(
    prove.getByText('Optional. You have proved a statement of this method').locator('visible=true')
  ).toHaveCount(1)
})

test('an idea check: the box is optional, its text stays after a Wrong, and the example is marked', async ({
  page
}) => {
  await page.goto(`${R}/natural-numbers-from-the-axioms`)
  const examples = page.locator('#ar-examples')
  const box = examples.getByLabel('The idea and your example (optional)')
  // Nothing typed: the check still shows, since the idea may be said aloud or written on paper.
  await button(examples, 'Show the check').click()
  // Focus goes to the mark's question, not back into the box and never onto Wrong.
  await expect(examples.locator('fieldset.mark')).toBeFocused()
  await button(examples, 'Wrong').click()
  await expect(examples).toContainText(
    'Wrong. Read the idea again, then state it with another example of your own.'
  )
  await box.fill('Every natural number has a successor; 3 follows 2.')
  await button(examples, 'Show the check').click()
  await button(examples, 'Wrong').click()
  await expect(box).toHaveValue('Every natural number has a successor; 3 follows 2.')
  await button(examples, 'Show the check').click()
  await button(examples, 'Right').click()
  await expect(examples).toContainText('You stated this idea on')
})

test('mixed practice: a proof, its mark changed, the next problem, and a reload keeps the phase', async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord(), [FACTS_PART.key]: factsRecord() })
  await page.goto(`${R}/mixed-practice`)
  const practice = page.locator('#ar-practice')
  await expect(practice.getByRole('heading', { name: 'The next problem' })).toBeVisible()
  await button(practice, 'Show the published proof').click()
  await expect(practice.getByRole('list', { name: 'Published proof' })).toBeVisible()
  await button(practice, 'Right').click()
  await expect(practice).toContainText('Right. This kind comes back on')
  // Answered, it is no longer the next problem.
  await expect(practice.getByRole('heading', { name: 'This problem' })).toBeVisible()
  await reloadKept(page)
  await expect(practice).toContainText('Right. This kind comes back on')
  await button(practice, 'Change the last mark to Wrong').click()
  await expect(practice).toContainText('Wrong. Read the solution.')
  await expect(practice).toContainText('The problem and its kind come back tomorrow')
  await practice.getByText('When this problem comes back').click()
  await expect(practice.locator('details li').last()).toContainText(
    'wrong at the first try that day'
  )
  await button(practice, /^Next$/).click()
  await expect(practice).not.toContainText('Wrong.')
  await expect(practice).toContainText('Put your notes away.')
})

test('mixed practice: a problem answered on paper, shown and marked', async ({ page }) => {
  await withRecord(page, { [MATH_PART.key]: mathPlainFirst() })
  await page.goto(`${R}/mixed-practice`)
  const practice = page.locator('#ar-practice')
  await button(practice, 'Show the answer').click()
  await expect(practice).toContainText('The answer:')
  await button(practice, 'Wrong').click()
  await expect(practice).toContainText('Then hide the solution and solve the problem again')
  // The app hides the solution for the redo, and shows it again on request.
  const solution = practice.getByRole('list', { name: 'Solution' })
  await expect(solution).toBeVisible()
  await button(practice, 'Hide the solution').click()
  await expect(solution).toHaveCount(0)
  await expect(button(practice, 'Show the solution')).toBeFocused()
  await button(practice, 'Show the solution').click()
  await expect(solution).toBeVisible()
  await button(practice, 'Change the last mark to Right').click()
  await expect(practice).toContainText('Right. This kind comes back on')
})

test('mixed practice before any facts sheet passes allows a calculator where the problem says yes', async ({
  page
}) => {
  // Whole-number classes: every problem of its one kind is marked yes; no facts record at all.
  await withRecord(page, { [MATH_PART.key]: { retired: { 't58-k1': addDays(studyDay(Date.now()), -5) } } })
  await page.goto(`${R}/mixed-practice`)
  await expect(page.locator('#ar-practice')).toContainText('Calculator: yes. Put your notes away.')
})

test('mixed practice before any kind is retired says where problems come from', async ({
  page
}) => {
  await page.goto(`${R}/mixed-practice`)
  await expect(page.locator('#ar-practice')).toContainText('Nothing to practise now.')
  await page.locator('#ar-practice').getByRole('link', { name: 'Arithmetic' }).click()
  await expect(page.locator('h1')).toHaveText('Arithmetic')
})

test('number facts: the sheet in hand, Enter moves on, the pages turn, and Check gives the result', async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord(), [FACTS_PART.key]: factsSheet() })
  await page.goto(`${R}/number-facts`)
  const facts = page.locator('#ar-facts')
  await expect(
    facts.getByRole('heading', { name: 'Multiplication: timed sheet, 121 facts' })
  ).toBeVisible()
  await expect(facts).toContainText('Page 2 of 11')
  const fields = facts.locator('.lrn-ss-sheet input')
  await expect(fields.nth(2)).toHaveValue('2')
  await fields.nth(3).fill('3')
  await fields.nth(3).press('Enter')
  await expect(fields.nth(4)).toBeFocused()
  const pager = facts.getByRole('navigation', { name: 'Sheet pages' })
  for (let n = 3; n <= 11; n++) {
    await button(pager, 'Next').click()
    await expect(facts).toContainText(`Page ${n} of 11`)
  }
  await expect(facts).toContainText('facts are blank. A blank counts as an error.')
  await reloadKept(page)
  await expect(facts).toContainText('Page 11 of 11')
  await button(pager, 'Check').click()
  await expect(facts).toContainText(/Wrong\. \d+ errors\./)
  await expect(facts).toContainText('Time:')
  await expect(facts).toContainText('Rate:')
  await expect(facts.locator('ul.lrn-ss-plan li').first()).toContainText('you wrote')
  await button(facts, 'Done').click()
  await expect(facts.locator('ul.lrn-ss-plan li')).toHaveCount(4)
})

test('number facts: a sheet starts from the plan', async ({ page }) => {
  await page.goto(`${R}/number-facts`)
  const facts = page.locator('#ar-facts')
  await button(facts, 'Start the untimed addition sheet').click()
  await expect(facts.getByRole('heading', { name: /^Addition: untimed sheet/ })).toBeVisible()
  await expect(facts).toContainText('Page 1 of')
  await expect(facts.locator('.lrn-ss-sheet input').first()).toBeFocused()
})

test('number facts: a slip repeats only the facts missed, and the bar is named after the untimed sheet', async ({
  page
}) => {
  await withRecord(page, {
    [FACTS_PART.key]: {
      addition: { misses: ['2 + 3', '4 + 4'], missFrom: 'untimed', untimedSeconds: 300 }
    }
  })
  await page.goto(`${R}/number-facts`)
  const facts = page.locator('#ar-facts')
  await expect(facts.locator('ul.lrn-ss-plan li').first()).toContainText('2 facts you missed next.')
  await button(facts, 'Drill the addition facts you missed').click()
  await expect(
    facts.getByRole('heading', { name: 'Addition: the 2 facts you missed' })
  ).toBeVisible()
  await expect(facts).not.toContainText('must take no longer')
  const rows = facts.locator('.lrn-ss-sheet li')
  await expect(rows).toHaveCount(2)
  for (let i = 0; i < 2; i++) {
    const q = (await rows.nth(i).textContent()) ?? ''
    await rows
      .nth(i)
      .locator('input')
      .fill(q.includes('2 + 3') ? '5' : '8')
  }
  // Enter on the sheet's last field checks it.
  await rows.nth(1).locator('input').press('Enter')
  await expect(facts).toContainText('Right. No errors.')
  await expect(facts).toContainText(
    'Next: the timed sheet. It must take no longer than your untimed sheet: 5 min 0 s.'
  )
  await button(facts, 'Done').click()
  await expect(facts.locator('ul.lrn-ss-plan li').first()).toContainText(
    'Untimed sheet done. Timed sheet next.'
  )
})

test('number facts: the untimed sheet does not say it sets the bar while it is worked', async ({
  page
}) => {
  await page.goto(`${R}/number-facts`)
  const facts = page.locator('#ar-facts')
  await button(facts, 'Start the untimed addition sheet').click()
  await expect(facts).toContainText('Get every fact right.')
  await expect(facts).not.toContainText('must take no longer')
})

test('the contents lead to a section, and the end of a topic turns to the next lesson', async ({
  page
}) => {
  await page.goto(`${R}/place-value`)
  await page
    .getByRole('navigation', { name: 'Contents' })
    .getByRole('link', { name: 'Worked examples' })
    .click()
  await expect(page).toHaveURL(/place-value#ar-examples$/)
  await expect(page.locator('h1')).toHaveText('Place value')
  await page
    .getByRole('navigation', { name: 'Pages' })
    .getByRole('link', { name: 'Next lesson' })
    .click()
  await expect(page).toHaveURL(/laws-of-addition-and-multiplication$/)
  await expect(
    page.getByRole('navigation', { name: 'Pages' }).getByRole('link', { name: 'Previous lesson' })
  ).toBeVisible()
})

/** Each page, on a first visit and some way into the course. */
const PAGES = [
  ['start', false],
  ['review', false],
  ['number-facts', false],
  ['mixed-practice', false],
  ['place-value', false],
  ['order-and-addition', false],
  ['natural-numbers-from-the-axioms', false],
  ['review', true],
  ['number-facts', true],
  ['mixed-practice', true],
  ['order-and-multiplication', true],
  ['laws-of-addition-and-multiplication', true]
]

for (const [slug, held] of PAGES)
  test(`${slug}${held ? ' with a record' : ''} has no accessibility violation axe finds`, async ({
    page
  }) => {
    if (held)
      await withRecord(page, { [MATH_PART.key]: mathRecord(), [FACTS_PART.key]: factsSheet() })
    await page.goto(`${R}/${slug}`)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main.study')).toBeVisible()
    const { violations } = await new AxeBuilder({ page }).analyze()
    expect(violations.map(v => `${v.id}: ${v.nodes.length}`)).toEqual([])
  })

test('the unit page lists the pages done every session as rows above the course', async ({
  page
}) => {
  await page.goto(R)
  const contents = page.locator('section.hm-block')
  for (const name of ['Number facts', 'Mixed practice']) {
    // The row's name carries what waits on its page today ("12 new"), when anything does.
    const row = contents.getByRole('link', { name: new RegExp(`^${name}( \\d+ (due|new).*)?$`) })
    await expect(row).toBeVisible()
    await expect(row).toHaveAttribute('href', new RegExp(`/${R}/[a-z-]+$`))
  }
  await expect(contents.getByRole('link', { name: /^Number facts \d+ new$/ })).toBeVisible()
  await contents.getByRole('link', { name: /^Mixed practice/ }).click()
  await expect(page.locator('h1')).toHaveText('Mixed practice')
})

test('the Continue card and the home card open the number facts first', async ({ page }) => {
  await page.goto(R)
  const card = page.locator('a.hm-start', { hasText: 'Continue' })
  await expect(card.locator('.hm-start-note')).toHaveText(/^Number facts: \d+ new today$/)
  await expect(card).toHaveAttribute('href', /\/number-facts$/)
  await page.goto('./')
  const today = page
    .locator('.ep-card', { has: page.getByRole('heading', { name: 'Arithmetic', exact: true }) })
    .locator('.ep-card-today')
  await expect(today).toHaveText(/^Continue to Number facts: \d+ new today$/, {
    useInnerText: true
  })
  await today.getByRole('link').click()
  await expect(page.locator('h1')).toHaveText('Number facts')
})

test('number facts: a passed sheet with no dated line names no date, and a sheet with no time kept shows none', async ({
  page
}) => {
  const now = Date.now()
  const passed = { clean: 1, timed: [{ time: 2, errors: 0 }] }
  await withRecord(page, {
    [FACTS_PART.key]: {
      addition: passed,
      subtraction: { clean: 1 },
      sheet: {
        op: 'subtraction',
        timed: true,
        rows: factSet('subtraction'),
        answers: factSet('subtraction').map(([, a]) => String(a)),
        page: 0,
        elapsed: 50000,
        at: now,
        result: { errors: 0, seconds: 50, last: { time: 1, errors: 0 } }
      }
    }
  })
  await page.goto(`${R}/number-facts`)
  const facts = page.locator('#ar-facts')
  await expect(facts).toContainText('Time: 0 min 50 s.')
  await expect(facts).toContainText('Next: the timed sheet.')
  await expect(facts).not.toContainText('NaN')
  await expect(facts).not.toContainText('undefined')
  await expect(facts).not.toContainText('0 min 0 s')
  await button(facts, 'Done').click()
  await expect(facts.locator('li', { hasText: 'Addition' })).toContainText('Passed.')
  await expect(facts).not.toContainText('Invalid Date')
})

test('mixed practice: a mark held with no dated line is not kept, so the problem is asked again with no Invalid Date', async ({
  page
}) => {
  const today = studyDay(Date.now())
  await withRecord(page, {
    [MATH_PART.key]: {
      retired: { 't1-k1': addDays(today, -5) },
      mix: { day: today, id: 't1-k1-p01', phase: 'right' }
    }
  })
  await page.goto(`${R}/mixed-practice`)
  const practice = page.locator('#ar-practice')
  await expect(practice.getByRole('heading', { name: 'The next problem' })).toBeVisible()
  await expect(practice).not.toContainText('Invalid Date')
  await expect(button(practice, 'Show the answer')).toBeVisible()
  await expect(button(practice, /Change the last mark/)).toHaveCount(0)
})

test('a worked example sets a reason that holds mathematics as mathematics, never as raw TeX', async ({
  page
}) => {
  await withRecord(page, {
    [MATH_PART.key]: { gate: { 'order-and-multiplication': { tried: studyDay(Date.now()) } } }
  })
  await page.goto(`${R}/order-and-multiplication`)
  const examples = page.locator('#ar-examples')
  await button(examples.getByRole('navigation', { name: 'Worked example pages' }), 'Next').click()
  await expect(examples.getByRole('heading', { name: /^Worked example 2 of/ })).toBeVisible()
  await button(examples, 'Show the reason').click()
  await button(examples, 'Right').click()
  await button(examples, 'Show the reason').click()
  const reason = examples
    .locator('.lrn-ss-reason', { hasText: 'the order law that' })
    .locator('visible=true')
  await expect(reason).toHaveCount(1)
  await expect(reason).not.toContainText('$')
  await expect(reason.locator('math').first()).toBeAttached()
})

test('the end level opens line by line: Sums on the addition set, the rest waiting, the facts drilled first', async ({
  page
}) => {
  // Addition passed; multiplication still in drill, so its sheet takes the day's hour first.
  await withRecord(page, { [FACTS_PART.key]: factsRecord() })
  await page.goto(`${R}/end-level`)
  const main = page.locator('main')
  const row = (/** @type {string} */ name) => main.locator('li', { has: page.getByText(name, { exact: true }) })
  await expect(row('Sums')).toContainText('Untimed sheet next.')
  await expect(row('Facts')).toContainText('Opens once you pass the multiplication facts.')
  await expect(row('Primes')).toContainText('Opens once you pass every set of number facts and finish Number theory.')
  await expect(main).toContainText('The number facts come first today.')
  await expect(button(main, /^Start/)).toHaveCount(0)
  expect((await new AxeBuilder({ page }).analyze()).violations.map(v => v.id)).toEqual([])
})

/**
 * Whether the focused element stands inside the window.
 * @param {import('@playwright/test').Page} page
 */
const focusInView = page =>
  page.evaluate(() => {
    const el = document.activeElement
    if (!el || el === document.body) return false
    const r = el.getBoundingClientRect()
    return r.bottom > 0 && r.top < innerHeight
  })

test("mixed practice's last Next puts focus on the empty day's line, and the status line says it", async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathPlainFirst(), [FACTS_PART.key]: factsRecord() })
  await page.goto(`${R}/mixed-practice`)
  const practice = page.locator('#ar-practice')
  const status = page.locator('p[role=status].sr-only')
  await button(practice, 'Show the answer').press('Enter')
  await button(practice, 'Right').press('Enter')
  await button(practice, /^Next$/).press('Enter')
  // A new problem says itself, never the last verdict.
  await expect(status).toHaveText('The next problem. 1 problem left today.')
  await button(practice, /^Show the/).press('Enter')
  await button(practice, 'Right').press('Enter')
  await button(practice, /^Next$/).press('Enter')
  const empty = practice.getByText('Nothing left today.')
  await expect(empty).toBeFocused()
  await expect(status).toHaveText('Nothing left today. Each kind comes back on its date.')
})

test("a statement's proof compared: after Right, focus is on the mark, in view, never on a kept Right", async ({
  page
}) => {
  await withRecord(page, { [MATH_PART.key]: mathRecord() })
  await page.goto(`${R}/order-and-addition`)
  const prove = page.locator('#ar-prove')
  await button(prove.getByRole('navigation', { name: 'Statement pages' }), 'Next').click()
  for (const name of ['Done', 'Wrong', 'Done', 'Right']) await button(prove, name).press('Enter')
  await expect(prove).toContainText('Compare your proof line by line')
  await expect(prove.locator('fieldset.mark')).toBeFocused()
  expect(await focusInView(page)).toBe(true)
})

test("an idea check's box is described by its question, which stays in view with it on a phone with its keyboard open", async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 420 })
  await page.goto(`${R}/natural-numbers-from-the-axioms`)
  const box = page.getByLabel('The idea and your example (optional)')
  await expect(box).toHaveAccessibleDescription(/^State the idea in your own words/)
  const question = page.locator('#ar-examples').getByText('State the idea in your own words')
  // Coming to the box from below, as Shift+Tab does, scrolls its question in with it.
  await box.evaluate(el => scrollTo(0, scrollY + el.getBoundingClientRect().bottom + 40))
  await box.focus()
  await expect(question).toBeInViewport({ ratio: 1 })
})

test('one formula is one maths object, and what Show the answer reveals and a wrong mark corrects are said', async ({
  page
}) => {
  await page.goto(`${R}/order-and-addition`)
  await expect(page.locator('math', { hasText: /a\s*<\s*b/ }).first()).toBeAttached()
  const tryIt = page.locator('#ar-try')
  const status = page.locator('p[role=status].sr-only')
  await button(tryIt, 'Show the answer').click()
  await expect(status).toHaveText(/^The answer: \S/)
  await button(tryIt, 'Wrong').click()
  await expect(status).toHaveText(
    /^Wrong\. The answer is \S.*\. The solution is below\. The worked example is open\.$/
  )
})

test('a proof line read: Show the reason says the reason, in words with no TeX', async ({ page }) => {
  await page.goto(`${R}/order-and-addition`)
  const proofs = page.locator('#ar-proofs')
  await button(proofs, 'Show the reason').click()
  const status = page.locator('p[role=status].sr-only')
  await expect(status).toHaveText(/^The reason: \S/)
  await expect(status).not.toHaveText(/[$\\]/)
})
