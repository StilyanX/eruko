// Every move a learner makes on the C++ course's pages, and axe on each screen. A record some way
// into the course is put in the browser's key store before the page opens (cpp-records.mjs). The
// runner on the learner's computer is faked by route interception: it answers each program with
// the outputs the course's own reference solution gives, so a right program passes and any other
// prints nothing; or it is absent, never answers, refuses to compile, or reports a new compiler.
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { CPP_PART, RUNNER } from '../src/units/cpp/core/entry.logic.js'
import { KINDS } from '../src/units/cpp/core/course.gen.js'
import { CHECK } from '../src/units/cpp/core/record.logic.js'
import { RUNNER_DOWN } from '../src/units/cpp/core/session.logic.js'
import { NOT_RECORD } from '../src/units/cpp/core/decode.logic.js'
import { ABOUT, ALONE, FIRST, PARSONS, RECORDS, today } from './cpp-records.mjs'

const C = 'explore/programming/cpp'

/** @typedef {import('@playwright/test').Page} Page */
/**
 * @typedef {{ reach?: 'ok' | 'down' | 'hang', version?: string, compile?: string, wrong?: string, stderr?: string }} Fake
 * `compile`: the compiler's text for every program; `wrong`: a problem whose solution prints nothing.
 */

/** Each program the course holds, by its text, with the output it gives for each input. */
const OUTPUTS = new Map([[CHECK.code, new Map(CHECK.tests.map(t => [t.input, t.output]))]])
for (const k of KINDS) {
  const { KIND } = await import(`../src/units/cpp/content/k${String(k.id).padStart(2, '0')}.gen.js`)
  for (const p of Object.values(KIND.problems))
    OUTPUTS.set(
      `${p.solution.lines.join('\n')}\n`,
      new Map([...p.examples, ...p.tests].map(t => [t.input, t.output]))
    )
}

/** @param {{ solution: { lines: readonly string[] } }} p */
const textOf = p => `${p.solution.lines.join('\n')}\n`

/**
 * Fake the runner for every page of `page`.
 * @param {Page} page
 * @param {Fake} [fake]
 */
async function stubRunner(page, fake = {}) {
  const { reach = 'ok', version = ABOUT.version, compile, wrong, stderr = '' } = fake
  const cors = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST',
    'access-control-allow-headers': 'Content-Type'
  }
  /** @param {import('@playwright/test').Route} route @param {unknown} body */
  const json = (route, body) =>
    route.fulfill({ status: 200, contentType: 'application/json', headers: cors, body: JSON.stringify(body) })
  await page.route(`${RUNNER}/**`, route => {
    const req = route.request()
    if (reach === 'down') return route.abort('connectionrefused')
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors })
    const path = new URL(req.url()).pathname
    if (path === '/') return json(route, { ok: true, compiler: 'g++', version, standard: 'c++23' })
    if (path === '/stop') return json(route, { ok: true })
    if (reach === 'hang') return undefined
    if (compile) return json(route, { compiled: false, error: compile })
    /** @type {{ files: Record<string, string>, tests: { input: string }[] }} */
    const ask = JSON.parse(req.postData() ?? '{}')
    const code = ask.files['main.cpp'] ?? ''
    const outputs = wrong && code === wrong ? new Map() : OUTPUTS.get(code)
    return json(route, {
      compiled: true,
      runs: ask.tests.map(t => ({ stdout: outputs?.get(t.input) ?? '', stderr, exit: 0, signal: null, finished: true }))
    })
  })
}

/**
 * Open the app on a C++ record (none for a first visit), with the runner faked.
 * @param {Page} page
 * @param {keyof typeof RECORDS | null} name
 * @param {Fake} [fake]
 */
async function setUp(page, name, fake = {}) {
  if (name)
    await page.addInitScript(
      ([key, text]) => localStorage.setItem(key, text),
      /** @type {[string, string]} */ ([CPP_PART.key, JSON.stringify(RECORDS[name]())])
    )
  await stubRunner(page, fake)
}

/**
 * The C++ record as the page holds it, read from the app's own store once the page shows.
 * @param {Page} page
 * @returns {Promise<Record<string, any>>}
 */
const stored = page =>
  page.evaluate(
    async ([key, store]) => (await import(store)).persistedStore(key).get(),
    /** @type {[string, string]} */ ([CPP_PART.key, '/eruko/record/store.js'])
  )

/**
 * The visible button of `name`.
 * @param {Page | import('@playwright/test').Locator} scope
 * @param {string | RegExp} name
 */
const button = (scope, name) => scope.getByRole('button', { name, exact: true }).locator('visible=true').first()

/** @param {Page} page */
async function noViolation(page) {
  const { violations } = await new AxeBuilder({ page }).analyze()
  expect(violations.map(v => `${v.id}: ${v.nodes.length}`)).toEqual([])
}

test('Start lists what the learner needs; Setup refuses a missing field, then checks the runner and stores', async ({ page }) => {
  await setUp(page, null)
  await page.goto(`${C}/start`)
  await expect(page.locator('#cpp-needs')).toContainText('npm run cpp-runner')
  await expect(page.locator('#cpp-zone')).not.toHaveValue('')
  await expect(page.getByText('such as abc')).toBeVisible()
  await button(page, 'Store').click()
  await expect(page.locator('#cpp-setup-why')).toHaveText('Type the user name of your AtCoder account.')
  await expect(page.locator('#cpp-user')).toHaveAttribute('aria-describedby', 'cpp-setup-why')
  await noViolation(page)
  await page.locator('#cpp-user').fill('learner')
  await page.locator('#cpp-series').fill('abc')
  await page.locator('#cpp-series').press('Enter')
  await expect(page.locator('#cpp-setup')).toContainText(`Runner: ${ABOUT.version}, C++23.`)
  await expect(page.locator('#cpp-setup')).toContainText('AtCoder: user name learner, series abc')
  // the first kind's own filled trace follows, its rows one a press, each said; read once
  const begin = page.locator('#cpp-begin')
  const start = FIRST.start
  await expect(begin).toContainText('A program traced line by line')
  await expect(begin).toContainText(start.lines[5] ?? '')
  await expect(begin.locator('tbody tr')).toHaveCount(1)
  await expect(begin.locator('p', { hasText: 'Each cell holds what' }).locator('code')).toHaveText('std::println("{}", name)')
  await noViolation(page)
  for (let n = 2; n <= start.rows.length; n++) {
    await button(begin, 'Next row').click()
    await expect(begin.locator('tbody tr')).toHaveCount(n)
    const row = start.rows[n - 1]
    await expect(page.locator('p[role=status].sr-only')).toContainText(`Line ${row?.line}: ${start.columns[0]}`)
  }
  await expect(button(begin, 'Next row')).toHaveCount(0)
  await expect(begin.getByRole('button', { name: 'Next', exact: true })).toBeFocused()
  await noViolation(page)
  await button(begin, 'Next').click()
  await expect(page.locator('#cpp-begin')).toHaveCount(0)
  const r = await stored(page)
  expect(r.runtime).toEqual({ language: 'C++23', name: 'g++', version: ABOUT.version, refused: [] })
  expect(r.course[0].part).toBe('example')
})

test('Change set-up reopens the user name and the time zone with their stored values and stores them, keeping the course', async ({ page }) => {
  await setUp(page, 'parsons')
  await page.goto(`${C}/start`)
  const set = page.locator('#cpp-setup')
  await button(set, 'Change set-up').click()
  await expect(page.locator('#cpp-user')).toHaveValue('learner')
  // the series changes only through the contest form
  await expect(page.locator('#cpp-series')).toHaveCount(0)
  await expect(page.locator('#cpp-zone')).toHaveValue('Europe/Copenhagen')
  await noViolation(page)
  await button(set, 'Keep the set-up').click()
  await expect(button(set, 'Change set-up')).toBeVisible()
  await button(set, 'Change set-up').click()
  await page.locator('#cpp-user').fill('other_name')
  await page.locator('#cpp-zone').fill('Asia/Tokyo')
  await button(set, 'Store').click()
  await expect(set).toContainText('AtCoder: user name other_name, series abc, time zone Asia/Tokyo.')
  const r = await stored(page)
  const was = RECORDS.parsons()
  expect(r.server).toEqual({ ...was.server, user: 'other_name', zone: 'Asia/Tokyo' })
  expect(r.course).toEqual(was.course)
  expect(r.recall).toEqual(was.recall)
  expect(r.runtime).toEqual(was.runtime)
})

test('Setup with the runner absent names npm run cpp-runner, and stores nothing', async ({ page }) => {
  await setUp(page, null, { reach: 'down' })
  await page.goto(`${C}/start`)
  await page.locator('#cpp-user').fill('learner')
  await page.locator('#cpp-series').fill('abc')
  await button(page, 'Store').click()
  await expect(page.locator('#cpp-setup-why')).toContainText('start it with npm run cpp-runner')
  await noViolation(page)
  expect((await stored(page)).runtime ?? null).toBe(null)
})

test('Setup with a compiler that lacks C++23 shows its own text', async ({ page }) => {
  const error = "main.cpp:2:10: fatal error: print: No such file or directory"
  await setUp(page, null, { compile: error })
  await page.goto(`${C}/start`)
  await page.locator('#cpp-user').fill('learner')
  await page.locator('#cpp-series').fill('abc')
  await button(page, 'Store').click()
  await expect(page.locator('#cpp-setup pre')).toHaveText(error)
  await noViolation(page)
})

test('the work list before Setup leads to the Start page', async ({ page }) => {
  await setUp(page, null)
  await page.goto(`${C}/work`)
  await page.getByRole('link', { name: 'Start page' }).click()
  await expect(page.locator('h1')).toHaveText('Start')
})

test('a worked example: the statement and the solution under its labels, then the trace item', async ({ page }) => {
  await setUp(page, 'example')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('heading', { name: 'Worked example' })).toBeVisible()
  await expect(work).toContainText(FIRST.example.statement[0] ?? '')
  for (const l of FIRST.example.solution.labels) await expect(work).toContainText(l.text.replaceAll('`', ''))
  // a span between backticks in a label is set in the code face
  const marked = FIRST.example.solution.labels.find(l => l.text.includes('`'))
  if (marked) await expect(work.locator('.cpp-label code', { hasText: marked.text.split('`')[1] ?? '' }).first()).toBeVisible()
  await noViolation(page)
  await button(work, 'Next').click()
  await expect(work.getByRole('heading', { name: 'Trace item' })).toBeVisible()
})

test('a trace item: every row typed, Answer, then the run\'s table beside it, kept after a reload', async ({ page }) => {
  await setUp(page, 'trace')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.locator('thead th').first()).toHaveText('Line')
  await expect(work.locator('thead th code').first()).toHaveText(FIRST.trace.columns[0] ?? '')
  await noViolation(page)
  for (const [r, row] of FIRST.trace.rows.entries()) {
    await page.getByLabel(`Row ${r + 1}, line`, { exact: true }).fill(String(row.line))
    for (const [c, value] of row.values.entries())
      await page.getByLabel(`Row ${r + 1}, ${FIRST.trace.columns[c]}`, { exact: true }).fill(` ${value} `)
  }
  await page.locator('#cpp-output').fill(FIRST.trace.output)
  await button(work, 'Answer').click()
  await expect(work).toContainText('Right.')
  await expect(work).toContainText("The run's table")
  await expect(page.locator('p[role=status].sr-only')).toHaveText('Right.')
  await noViolation(page)
  await page.waitForTimeout(1200)
  await page.reload()
  await expect(work).toContainText('Your table')
  await button(work, 'Next').click()
  await expect(work.getByRole('heading', { name: 'Parsons problem' })).toBeVisible()
})

test('a trace item: No further step counts as wrong', async ({ page }) => {
  await setUp(page, 'trace')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await button(work, 'No further step').click()
  await expect(work).toContainText('Wrong.')
  await expect(work).not.toContainText('counts as wrong')
  expect((await stored(page)).recall.T1[0].right).toBe(false)
})

test('a Parsons problem: refused until every line is placed; each line in order and each blank filled passes', async ({ page }) => {
  await setUp(page, 'parsons')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('heading', { name: 'Parsons problem' })).toBeVisible()
  await noViolation(page)
  await button(work, 'Submit').click()
  await expect(page.locator('#cpp-parsons-why')).toHaveText('Put every line in its place first.')
  const code = PARSONS.solution
  const moved = code.lines.flatMap((line, at) => (code.frame.includes(at) || !line.trim() ? [] : [at]))
  /** @param {number} at */
  const shown = at => {
    let text = code.lines[at] ?? ''
    for (const b of [...code.blanks].filter(b => b.line === at).sort((a, b) => b.from - a.from))
      text = text.slice(0, b.from) + '___' + text.slice(b.to)
    return text
  }
  // one placed wrongly, then taken out again
  const [first, second] = moved
  await work.locator('.cpp-pool-line', { hasText: shown(second ?? 0).trim() }).first().click()
  await work.getByRole('button', { name: `Take out line ${(first ?? 0) + 1}` }).click()
  for (const at of moved) await work.locator('.cpp-pool-line').filter({ hasText: shown(at).trim() }).first().click()
  await expect(work.locator('.cpp-pool-line')).toHaveCount(0)
  for (const [i, b] of code.blanks.entries())
    await page.getByLabel(`Blank ${i + 1}`, { exact: true }).fill((code.lines[b.line] ?? '').slice(b.from, b.to))
  await noViolation(page)
  await button(work, 'Submit').click()
  await expect(work).toContainText('Right.')
  await expect(work).toContainText(`${PARSONS.examples.length + PARSONS.tests.length} of ${PARSONS.examples.length + PARSONS.tests.length} tests passed.`)
  await button(work, 'Next').click()
  await expect(work.getByRole('heading', { name: 'Problem' })).toBeVisible()
})

test('the editor: Tab indents 4 spaces, Escape then Tab leaves; a program typed is kept when the screen is left', async ({ page }) => {
  await setUp(page, 'alone')
  await page.goto(`${C}/work`)
  const editor = page.locator('#cpp-editor')
  await editor.click()
  await page.keyboard.press('Tab')
  await page.keyboard.type('x')
  await expect(editor).toHaveValue('    x')
  await page.keyboard.press('Escape')
  await page.keyboard.press('Tab')
  await expect(editor).not.toBeFocused()
  await page.getByRole('link', { name: 'Review', exact: true }).click()
  await expect(page.locator('h1')).toHaveText('Review')
  await page.waitForTimeout(1200)
  await page.goto(`${C}/work`)
  await expect(page.locator('#cpp-editor')).toHaveValue('    x')
})

test('a problem: Run on the examples shows each output beside the expected one; the compiler\'s text verbatim', async ({ page }) => {
  await setUp(page, 'alone')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work).toContainText(ALONE.statement[0] ?? '')
  await page.locator('#cpp-editor').fill('int main() {}\n')
  await button(work, 'Run on the examples').click()
  await expect(work).toContainText('Example 1: given')
  await expect(work).toContainText('Nothing printed.')
  await noViolation(page)
  await page.unrouteAll()
  const error = "main.cpp:1:13: error: expected '}' at end of input"
  await stubRunner(page, { compile: error })
  await button(work, 'Run on the examples').click()
  await expect(work.locator('pre', { hasText: error })).toHaveText(error)
})

test('Tab indents each line of a selection by 4 spaces and keeps the selection', async ({ page }) => {
  await setUp(page, 'alone')
  await page.goto(`${C}/work`)
  const editor = page.locator('#cpp-editor')
  await editor.fill('a\nb\nc')
  await editor.evaluate(el => {
    if (el instanceof HTMLTextAreaElement) el.setSelectionRange(0, 3)
  })
  await page.keyboard.press('Tab')
  await expect(editor).toHaveValue('    a\n    b\nc')
  const selected = await editor.evaluate(el =>
    el instanceof HTMLTextAreaElement ? el.value.slice(el.selectionStart, el.selectionEnd) : ''
  )
  expect(selected).toBe('a\n    b')
})

test("a program's error text stands under the program, and a compile error still shows the first failed test", async ({ page }) => {
  const stderr = "terminate called after throwing an instance of 'std::out_of_range'"
  await setUp(page, 'alone', { stderr })
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await page.locator('#cpp-editor').fill('int main() {}\n')
  await button(work, 'Run on the examples').click()
  const error = work.locator('pre', { hasText: stderr }).first()
  await expect(error).toBeVisible()
  const under = (await error.boundingBox())?.y ?? 0
  const expected = (await work.getByText('Example 1: expected').boundingBox())?.y ?? 0
  expect(under).toBeLessThan(expected)
  await page.unrouteAll()
  const compile = "main.cpp:1:13: error: expected '}' at end of input"
  await stubRunner(page, { compile })
  await button(work, 'Submit').click()
  await expect(work.locator('pre', { hasText: compile })).toBeVisible()
  await expect(work).toContainText('Expected')
  await expect(work).toContainText('Given')
})

test('a kind with no never-tried problem left says it waits for new problems, on the work list and its row', async ({ page }) => {
  await setUp(page, 'waits')
  await page.goto(`${C}/work`)
  await expect(page.locator('#cpp-work')).toContainText(`${KINDS[0]?.name} waits for new problems.`)
  await noViolation(page)
  await page.goto(C)
  await expect(page.getByText('Opens again once Eruko adds new problems to it.')).toBeVisible()
})

test('Setup with a runner whose compiler differs from the one the course was built with runs every reference solution first', async ({ page }) => {
  test.setTimeout(60000)
  const version = 'g++ (GCC) 14.2.0'
  await setUp(page, null, { version })
  await page.goto(`${C}/start`)
  await page.locator('#cpp-user').fill('learner')
  await page.locator('#cpp-series').fill('abc')
  await button(page, 'Store').click()
  await expect(page.locator('#cpp-setup')).toContainText('AtCoder: user name learner')
  await page.goto(`${C}/work`)
  await expect.poll(async () => (await stored(page)).runtime?.version, { timeout: 30000 }).toBe(version)
  await expect(page.locator('#cpp-work').getByRole('heading', { name: 'A program traced line by line' })).toBeVisible()
})

test('a problem written alone and right retires the kind, opens the next, and passes the turn to mixed practice', async ({ page }) => {
  await setUp(page, 'alone')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await page.locator('#cpp-editor').fill(textOf(ALONE))
  await button(work, 'Submit').click()
  await expect(work.getByRole('heading', { name: 'Result' })).toBeVisible()
  await expect(work).toContainText('Right.')
  await expect(work).toContainText('The reference solution')
  await noViolation(page)
  // the turn passes to mixed practice, which now draws from the retired kind
  await button(work, 'Next').click()
  await expect(work.getByRole('heading', { name: 'Problem' })).toBeVisible()
  const r = await stored(page)
  expect(r.course[0].retired).toBe(today)
  expect(r.course[1].part).toBe('example')
})

test('a wrong submit shows the first failed test, then the reference solution', async ({ page }) => {
  await setUp(page, 'alone')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await page.locator('#cpp-editor').fill('int main() {}\n')
  await button(work, 'Submit').click()
  await expect(work).toContainText('Wrong.')
  await expect(work).toContainText(`0 of ${ALONE.examples.length + ALONE.tests.length} tests passed.`)
  await expect(work).toContainText('Expected')
  await expect(work).toContainText('Given')
  await noViolation(page)
})

test('Stop while the hidden tests run counts the submit as wrong', async ({ page }) => {
  await setUp(page, 'alone', { reach: 'hang' })
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await page.locator('#cpp-editor').fill('int main() { for (;;) {} }\n')
  await button(work, 'Submit').click()
  await expect(work).toContainText('The hidden tests run.')
  await noViolation(page)
  await button(work, 'Stop').click()
  await expect(work).toContainText('Wrong.')
  await expect(work).toContainText('Stopped.')
  await expect(work).not.toContainText('tests passed')
})

test('a submit with the runner absent says how to start it, and the program waits', async ({ page }) => {
  await setUp(page, 'alone', { reach: 'down' })
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await page.locator('#cpp-editor').fill('int main() {}\n')
  await button(work, 'Submit').click()
  await expect(page.locator('#cpp-runner-why')).toHaveText(RUNNER_DOWN)
  await expect(page.locator('#cpp-editor')).toHaveValue('int main() {}\n')
  await noViolation(page)
})

test('the practice submission, then the next contest typed, then the Contest screen above the list', async ({ page }) => {
  await setUp(page, 'practice')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('heading', { name: 'Practice contest' })).toBeVisible()
  await noViolation(page)
  await button(work, 'Accepted').click()
  await expect(work.getByRole('heading', { name: 'Next contest' })).toBeVisible()
  await button(work, 'Store').click()
  await expect(page.locator('#cpp-next-why')).toHaveText('Type the date of the contest.')
  await noViolation(page)
  await page.locator('#cpp-date').fill('2099-11-07')
  await page.locator('#cpp-time').fill('13:00')
  await button(work, 'Store').click()
  await expect(work).toContainText('AtCoder Beginner Contest: Saturday 7 November, 13:00')
  const r = await stored(page)
  expect(r.server.next).toBe('2099-11-07T13:00')
  expect(r.practice).toBe(today)
})

test('on the contest day the contest is the whole plan', async ({ page }) => {
  await setUp(page, 'contestDay')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('heading', { name: 'Contest' })).toBeVisible()
  await expect(work.getByRole('heading', { name: 'Problem' })).toHaveCount(0)
  await noViolation(page)
})

test('the record pasted: refused when it is none, else the Reading screen, then the next contest', async ({ page }) => {
  await setUp(page, 'paste')
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('link', { name: 'your contest record' })).toHaveAttribute('href', 'https://atcoder.jp/users/learner/history/json')
  await page.locator('#cpp-paste').fill('not json')
  await button(work, 'Store').click()
  await expect(page.locator('#cpp-paste-why')).toHaveText(NOT_RECORD)
  await noViolation(page)
  const end = new Date(Date.now() - 86400000).toISOString()
  const row = { IsRated: true, ContestScreenName: 'abc430.contest.atcoder.jp', ContestName: 'AtCoder Beginner Contest 430', EndTime: end, InnerPerformance: 712, Performance: 712 }
  await page.locator('#cpp-paste').fill(JSON.stringify([row]))
  await button(work, 'Store').click()
  await expect(work.getByRole('heading', { name: 'Reading' })).toBeVisible()
  await expect(work).toContainText('Not settled.')
  await noViolation(page)
  await button(work, 'Next').click()
  await expect(work.getByRole('heading', { name: 'Next contest' })).toBeVisible()
  await page.locator('#cpp-date').fill('2099-11-14')
  await page.locator('#cpp-time').fill('13:00')
  await page.getByLabel('The series or its rating method changed').check()
  await page.locator('#cpp-series').fill('arc')
  await button(work, 'Store').click()
  await expect(work).toContainText('AtCoder Regular Contest: Saturday 14 November, 13:00')
  expect((await stored(page)).server.series).toBe('arc')
})

test('a new compiler the runner reports runs every reference solution first; one that fails is not used', async ({ page }) => {
  test.setTimeout(60000)
  const version = 'g++ (GCC) 17.1.0'
  await setUp(page, 'example', { version, wrong: textOf(PARSONS) })
  await page.goto(`${C}/work`)
  const work = page.locator('#cpp-work')
  await expect(work.getByRole('heading', { name: 'New compiler' })).toBeVisible()
  await expect(work.getByRole('heading', { name: 'Worked example' })).toBeVisible({ timeout: 30000 })
  const r = await stored(page)
  expect(r.runtime.version).toBe(version)
  expect(r.runtime.refused).toEqual([PARSONS.id])
})

test('Review counts what waits today, and a row with something waiting leads to the work list', async ({ page }) => {
  await setUp(page, 'due')
  await page.goto(`${C}/review`)
  const table = page.locator('table.lrn-rv')
  await expect(table.getByRole('row', { name: /Problems due/ })).toContainText('1')
  await noViolation(page)
  await table.getByRole('link', { name: 'Problems due' }).click()
  await expect(page.locator('h1')).toHaveText('Work list')
  await expect(page.locator('#cpp-work')).toContainText(PARSONS.statement[0] ?? '')
})

test("the place line names the open kind in the unit's own words", async ({ page }) => {
  await setUp(page, 'setUp')
  await page.goto(C)
  await expect(page.locator('.hm-place')).toHaveText(`Kind 1 of ${KINDS.length}: ${KINDS[0]?.name}.`)
})

const THEMES = ['light', 'dark', 'light-more', 'dark-more']
const WIDTHS = [390, 1440]
const PAGES = /** @type {[string, keyof typeof RECORDS | null][]} */ ([
  ['start', null],
  ['work', null],
  ['review', null],
  ['start', 'setUp'],
  ['start', 'practice'],
  ...Object.keys(RECORDS).map(n => /** @type {[string, keyof typeof RECORDS]} */ (['work', n])),
  ['review', 'due']
])

for (const theme of THEMES)
  for (const width of WIDTHS)
    test(`every C++ screen in the ${theme} theme at ${width}px: no axe violation, no sideways scroll, no page error`, async ({ browser }) => {
      test.setTimeout(PAGES.length * 10000)
      /** @type {string[]} */
      const faults = []
      for (const [slug, name] of PAGES) {
        // each record in a browser of its own, since a record once opened is kept in its store
        const baseURL = test.info().project.use.baseURL ?? ''
        const context = await browser.newContext({ baseURL, serviceWorkers: 'block', viewport: { width, height: 900 } })
        const page = await context.newPage()
        page.on('pageerror', e => faults.push(`${slug} (${name}): ${e.message}`))
        await page.addInitScript(t => localStorage.setItem('aether-theme', t), theme)
        await setUp(page, name)
        await page.goto(`${C}/${slug}`)
        await expect(page.locator('main.study h1')).toBeVisible()
        await expect(page.locator('#cpp-work .lrn-ss, #rv-due table, #cpp-setup .lrn-ss, #cpp-setup p').first()).toBeVisible()
        const wide = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
        if (wide) faults.push(`${slug} (${name}): scrolls sideways`)
        const { violations } = await new AxeBuilder({ page }).analyze()
        for (const v of violations) faults.push(`${slug} (${name}): ${v.id} (${v.nodes.length})`)
        await context.close()
      }
      expect(faults).toEqual([])
    })
