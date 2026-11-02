// Every move a learner makes on Go's pages, and axe on each page state. A record some way into the
// course is put in the browser's key store before the page opens (go-records.mjs). OGS and the
// KataGo relay are faked (go-net.mjs): no test reaches the network, and each also runs with them
// absent.
import { GO_PART } from '../src/units/go/core/entry.logic.js'
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { ENGINE } from '../src/units/go/core/record.logic.js'
import { NETWORK, stubNet } from './go-net.mjs'
import { RECORDS, ownGames } from './go-records.mjs'

const G = 'explore/go/go'

/** @typedef {import('@playwright/test').Page} Page */
/** @typedef {import('./go-net.mjs').Net} Net */

/**
 * Open the app on a Go record (none for a first visit), with OGS and the relay faked.
 * @param {Page} page
 * @param {unknown} [record]
 * @param {Net} [net]
 */
async function setUp(page, record, net = {}) {
  if (record !== undefined)
    await page.addInitScript(([key, text]) => localStorage.setItem(key, text), /** @type {[string, string]} */ ([
      GO_PART.key,
      JSON.stringify(record) ?? ''
    ]))
  await stubNet(page, net)
}

/**
 * The Go record as the page holds it: read from the app's own store, the module the page loaded.
 * Only once the page shows: a store first read before the record opens would hold nothing.
 * @param {Page} page
 * @returns {Promise<Record<string, any>>}
 */
function stored(page) {
  return page.evaluate(
    async ([key, store]) => (await import(store)).persistedStore(key).get(),
    /** @type {[string, string]} */ ([GO_PART.key, '/eruko/record/store.js'])
  )
}

/**
 * Reload once the record has been written.
 * @param {Page} page
 */
async function reloadKept(page) {
  await page.waitForTimeout(1200)
  await page.reload()
}

/**
 * The visible button of `name`.
 * @param {Page | import('@playwright/test').Locator} scope
 * @param {string | RegExp} name
 */
const button = (scope, name) => scope.getByRole('button', { name }).locator('visible=true').first()

/**
 * Click a point of the board drawn in `scope`, as a pointer does: the drawing keeps one point
 * and a half on the left and half a point above the top row (board.dom.js).
 * @param {Page | import('@playwright/test').Locator} scope
 * @param {number[]} view the diagram's cut: x and y of its bottom left point, its width and height
 * @param {string} at
 */
async function clickPoint(scope, view, at) {
  const [ox = 0, oy = 0, w = 0, h = 0] = view
  const x = 'ABCDEFGHJKLMNOPQRST'.indexOf(at[0] ?? '')
  const y = Number(at.slice(1)) - 1
  const svg = scope.locator('figure.go-board svg').first()
  const box = await svg.boundingBox()
  if (!box) throw new Error('The board is drawn')
  await svg.click({
    position: {
      x: ((x - ox + 1.5) / (w + 2)) * box.width,
      y: ((h - (y - oy) - 0.5) / (h + 1.5)) * box.height
    }
  })
}

/** @param {Page} page */
async function noViolation(page) {
  const { violations } = await new AxeBuilder({ page }).analyze()
  expect(violations.map(v => `${v.id}: ${v.nodes.length}`)).toEqual([])
}

test('Start lists what the learner needs, and leads to the unit', async ({ page }) => {
  await setUp(page)
  await page.goto(`${G}/start`)
  await expect(page.locator('h1')).toHaveText('Start')
  await expect(page.getByRole('heading', { name: 'What you need' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Set-up' })).toBeVisible()
  await expect(page.locator('#go-needs')).toContainText(ENGINE.network)
  await expect(page.locator('#go-needs ol > li')).toHaveCount(5)
  await expect(page.locator('#go-needs')).not.toContainText('visits')
  await noViolation(page)
  await page.getByRole('link', { name: 'Go to Go course' }).click()
  await expect(page.locator('h1')).toHaveText('Go course')
})

test('set-up: the user name is refused, checked with the server, then stored and kept', async ({ page }) => {
  await setUp(page)
  await page.goto(`${G}/start`)
  await button(page, 'Store').click()
  await expect(page.locator('#go-server-why')).toHaveText('Type your user name on OGS.')
  await expect(page.locator('#go-user')).toHaveAttribute('aria-describedby', 'go-server-why')
  await noViolation(page)
  await page.locator('#go-user').fill('nobody')
  await page.locator('#go-user').press('Enter')
  await expect(page.locator('#go-server-why')).toContainText('The server knows no player of that name.')
  // the name is found in any capitals, and kept as the server writes it
  await page.locator('#go-user').fill('LEARNER')
  await page.locator('#go-user').press('Enter')
  await expect(page.locator('#go-setup')).toContainText('Server: OGS, user name learner.')
  await reloadKept(page)
  await expect(page.locator('#go-setup')).toContainText('Server: OGS, user name learner.')
  const r = await stored(page)
  expect(r.server.id).toBe(1234)
  expect(r.position.read.rating).toBe(900)
})

test('set-up with the server absent says so, and stores nothing', async ({ page }) => {
  await setUp(page, undefined, { server: 'down' })
  await page.goto(`${G}/start`)
  await page.locator('#go-user').fill('learner')
  await page.locator('#go-user').press('Enter')
  await expect(page.locator('#go-server-why')).toHaveText(
    'The server did not answer. Check your connection, then press again.'
  )
  expect((await stored(page)).server ?? null).toBe(null)
})

test('set-up: the network file is chosen, refused when wrong, then checked through the relay', async ({ page }) => {
  await setUp(page, undefined, { relay: 'ok' })
  await page.goto(`${G}/start`)
  // With no file chosen, the one press is choosing it: the check comes once there is a file.
  await expect(page.getByRole('button', { name: 'Check the engine' })).toHaveCount(0)
  const choose = async (/** @type {string} */ name) => {
    const chooser = page.waitForEvent('filechooser')
    await button(page, /Choose (the network|another) file/).click()
    await (await chooser).setFiles({ name, mimeType: 'application/gzip', buffer: NETWORK.bytes })
  }
  await choose('another.bin.gz')
  await expect(page.locator('#go-setup')).toContainText('The network file: another.bin.gz')
  await expect(button(page, 'Choose another file')).toBeVisible()
  await button(page, 'Check the engine').click()
  await expect(page.locator('#go-engine-why')).toContainText(`Go runs on the network ${ENGINE.network}`)
  await choose(NETWORK.name)
  await button(page, 'Check the engine').click()
  await expect(page.locator('#go-setup')).toContainText('The engine answers.')
  await expect(page.locator('#go-setup')).not.toContainText('Visits')
  await expect(page.locator('#go-setup')).toContainText('Engine: KataGo, AGA rules, komi 7.5')
  expect((await stored(page)).engine.network).toBe(ENGINE.network)
})

test('set-up with the relay absent says how to start it', async ({ page }) => {
  await setUp(page, undefined, { relay: 'down' })
  await page.goto(`${G}/start`)
  const chooser = page.waitForEvent('filechooser')
  await button(page, 'Choose the network file').click()
  await (await chooser).setFiles({ name: NETWORK.name, mimeType: 'application/gzip', buffer: NETWORK.bytes })
  await button(page, 'Check the engine').click()
  await expect(page.locator('#go-engine-why')).toContainText('The engine did not answer. Start it as step 4')
  await noViolation(page)
})

test('set up again, for a changed computer or account: kept, then cleared', async ({ page }) => {
  const first = { date: '2026-09-01', rating: 900, deviation: 60, games: 45 }
  await setUp(page, { ...RECORDS.reviewing(), first })
  await page.goto(`${G}/start`)
  await expect(page.locator('#go-setup')).toContainText('Server: OGS, user name learner.')
  await expect(page.locator('#go-setup')).toContainText('Changed computer or OGS account? Set up again.')
  await expect(page.locator('#go-setup')).not.toContainText('forced change')
  await button(page, 'Set up again').click()
  await expect(page.locator('#go-setup')).toContainText('This clears the engine and your OGS user name.')
  await expect(page.locator('#go-setup')).not.toContainText('first line')
  await noViolation(page)
  await button(page, 'Keep the set-up').click()
  await expect(button(page, 'Set up again')).toBeVisible()
  await button(page, 'Set up again').click()
  await button(page, 'Clear and set up again').click()
  await expect(page.locator('#go-user')).toBeVisible()
  await expect(button(page, 'Choose the network file')).toBeVisible()
  const r = await stored(page)
  expect(r.engine).toBe(null)
  expect(r.server).toBe(null)
  expect(r.games.length).toBe(2)
  expect(r.position.was).toBe(1234)
  expect(r.first).toEqual(first)
})

test('Review counts what waits today, and each row with something leads to the work list', async ({ page }) => {
  await setUp(page, RECORDS.midCourse())
  await page.goto(`${G}/review`)
  await expect(page.locator('h1')).toHaveText('Review')
  const table = page.locator('table.lrn-rv')
  await expect(table.getByRole('row', { name: /Problems due/ })).toBeVisible()
  await expect(table.getByRole('rowheader', { name: 'Rated game' })).toBeVisible()
  await table.getByRole('link', { name: 'Problems due' }).click()
  await expect(page.locator('h1')).toHaveText('Work list')
})

test('Review says where the engine pass stands, and when the relay is absent', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'down' })
  await page.goto(`${G}/review`)
  await expect(page.locator('#rv-due')).toContainText(
    'Game review is waiting for the engine. Start it from the Start page.'
  )
  await expect(page.locator('#rv-due')).not.toContainText('relay')
  await expect(page.locator('#rv-due')).toContainText('Rated games counted: 2. The next reading comes at 15.')
  await noViolation(page)
  await page.getByRole('link', { name: 'Start page' }).click()
  await expect(page.locator('h1')).toHaveText('Start')
})

test('the engine pass reads each position through the relay, and the game is done', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'ok' })
  await page.goto(`${G}/review`)
  await expect(page.locator('#rv-due')).not.toContainText('The engine is reading your game', { timeout: 15000 })
  const game = (await stored(page)).games.find((/** @type {{ id: number }} */ g) => g.id === 502)
  expect(game.pass.length).toBe(11)
  expect(game.reviewed).toBe(true)
})

test('a rules item first met: typed with the keyboard, refused in the wrong form, then right, then Next', async ({
  page
}) => {
  await setUp(page)
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('How many points lie next to A1?')
  await expect(work).not.toContainText('R1.1')
  await expect(work).toContainText('Keep trying until you see no further move.')
  await noViolation(page)
  await page.locator('#go-rule').fill('many')
  await page.keyboard.press('Enter')
  await expect(page.locator('#go-why')).toHaveText('Type a number, in digits.')
  await page.locator('#go-rule').fill('2')
  await page.keyboard.press('Enter')
  await expect(work).toContainText('Right. You typed 2.')
  await expect(work).toContainText('Answer: 2.')
  await expect(page.locator('p[role=status].sr-only')).toHaveText('Right.')
  await noViolation(page)
  // Enter presses the step's Next
  await page.keyboard.press('Enter')
  await expect(work).toContainText('How many points lie next to C1?')
  await expect(work).not.toContainText('Keep trying')
})

test('a rules item answered by points: each click adds a point or takes it out, and typing still works', async ({
  page
}) => {
  await setUp(page, RECORDS.pointsItem())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Black plays C3. Which stones does the move remove?')
  await clickPoint(work, [0, 0, 5, 5], 'B3')
  await clickPoint(work, [0, 0, 5, 5], 'D3')
  await expect(page.locator('#go-rule')).toHaveValue('B3 D3')
  await expect(work.locator('.go-chosen')).toHaveCount(2)
  await clickPoint(work, [0, 0, 5, 5], 'B3')
  await expect(page.locator('#go-rule')).toHaveValue('D3')
  await page.locator('#go-rule').fill('d3 b3')
  await page.locator('#go-rule').press('Enter')
  await expect(work).toContainText('Right.')
})

test('a rules item due: No further move counts as wrong, and a reload keeps the verdict open', async ({ page }) => {
  await setUp(page, RECORDS.firstRules())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('How many points lie next to A1?')
  await button(work, 'No further move').click()
  await expect(work).toContainText('Wrong. No further move counts as wrong.')
  await reloadKept(page)
  await expect(work).toContainText('Wrong. No further move counts as wrong.')
  await button(work, /^Next$/).click()
  await expect(work).toContainText('How many points lie next to C1?')
})

test('a worked example is read, then its kind asks a problem', async ({ page }) => {
  await setUp(page, RECORDS.firstExample())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Read the first problem of each kind with its solution.')
  await expect(work).toContainText('Kind: capture a stone in atari.')
  await expect(work).toContainText("Seki: neither side can capture the other side's group")
  await noViolation(page)
  await button(work, /^Next$/).click()
  await expect(page.locator('#go-move')).toBeVisible()
  await expect(work).toContainText('Black plays first.')
})

test('a later kind\'s worked example names its term', async ({ page }) => {
  await setUp(page, RECORDS.laterExample())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Cut: a move on the point where two groups')
  await expect(work).not.toContainText('Read the first problem of each kind')
})

test('a problem: each refusal, then a right answer and its solution', async ({ page }) => {
  await setUp(page, RECORDS.firstProblem())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Black plays first. What happens to the white group in the bottom right?')
  await expect(work).not.toContainText('1.2 ·')
  // a click on an empty point fills the move; a click on a stone does nothing
  await clickPoint(work, [14, 0, 5, 3], 'Q1')
  await expect(page.locator('#go-move')).toHaveValue('Q1')
  await expect(work.locator('.go-chosen')).toHaveCount(1)
  await clickPoint(work, [14, 0, 5, 3], 'R1')
  await expect(page.locator('#go-move')).toHaveValue('Q1')
  await page.locator('#go-move').fill('I4')
  await page.locator('#go-move').press('Enter')
  await expect(page.locator('#go-why')).toContainText('There is no column I.')
  await expect(page.locator('#go-move')).toHaveAttribute('aria-describedby', 'go-why')
  await page.locator('#go-move').fill('A1')
  await page.locator('#go-move').press('Enter')
  await expect(page.locator('#go-why')).toHaveText('That point is not on this diagram.')
  await page.locator('#go-move').fill('R1')
  await page.locator('#go-move').press('Enter')
  await expect(page.locator('#go-why')).toHaveText('A stone stands on that point.')
  await page.locator('#go-move').fill('q1')
  await page.locator('#go-result').fill('alive')
  await page.locator('#go-result').press('Enter')
  await expect(page.locator('#go-why')).toHaveText('Type the result as one word: lives, dies, ko, or seki.')
  await noViolation(page)
  await page.locator('#go-result').fill('Dies')
  await page.locator('#go-result').press('Enter')
  await expect(work).toContainText('Right. You typed Q1, dies.')
  await expect(work).toContainText('1. Black Q1. Captures.')
  await expect(work).toContainText('First move: Q1. Result: dies.')
  await noViolation(page)
  // a right answer retires the kind: the next kind's worked example follows
  await button(work, /^Next$/).click()
  await expect(work).toContainText('White plays first.')
  await expect(work).toContainText('Kind: save a stone in atari.')
})

test('a problem answered wrong shows the solution', async ({ page }) => {
  await setUp(page, RECORDS.firstProblem())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-move').fill('Q2')
  await page.locator('#go-result').fill('lives')
  await button(work, 'Check').click()
  await expect(work).toContainText('Wrong. You typed Q2, lives.')
  await expect(work).toContainText('First move: Q1.')
})

test('a review position: refused moves, the engine\'s best, and the line with the points lost', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('move 5 · Black plays. Click or type your move.')
  // the board for a screen reader: what is in view and the counts first, always shown; behind it,
  // closed, the last move and then the stones row by row
  const caption = work.locator('figcaption').first()
  await expect(caption.locator('summary')).toHaveText('Whole board. Black 2 stones, White 2 stones. Black plays.')
  await expect(caption.locator('details')).not.toHaveAttribute('open', '')
  await expect(caption.locator('li')).toHaveText([
    'Last move: White D16.',
    'Row 16: Black Q16. White D16.',
    'Row 4: Black Q4. White D4.'
  ])
  await expect(work.locator('.go-last')).toHaveCount(1)
  await expect(work.locator('.go-star')).toHaveCount(9)
  await noViolation(page)
  await clickPoint(work, [0, 0, 19, 19], 'Q16')
  await expect(page.locator('#go-review')).toHaveValue('')
  await clickPoint(work, [0, 0, 19, 19], 'R14')
  await expect(page.locator('#go-review')).toHaveValue('R14')
  await page.locator('#go-review').fill('Q16')
  await page.locator('#go-review').press('Enter')
  await expect(page.locator('#go-why')).toHaveText('A stone stands on that point.')
  await page.locator('#go-review').fill('r14')
  await page.locator('#go-review').press('Enter')
  await expect(work).toContainText('Your move R14: 0.0 points lost.')
  await expect(work).toContainText('Game move R10: 4.3 points lost.')
  await expect(work).toContainText('2. White passes.')
  await noViolation(page)
  await button(work, /^Next$/).click()
  await expect(work).toContainText('move 9 · Black plays.')
  // a review position is skipped, never counted wrong: the problems' "No further move" is not here
  await expect(work.getByRole('button', { name: 'No further move' })).toHaveCount(0)
  await button(work, 'Skip this position').click()
  await expect(work).toContainText('You skipped this position.')
})

test("a review position's engine line is paged by the buttons and by the arrow keys", async ({
  page
}) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('r14')
  await page.locator('#go-review').press('Enter')
  // the engine's line is five pages: the position, then a board after each move
  const line = work.locator('go-line-pages')
  const now = line.locator('[aria-live=polite]')
  await expect(now).toHaveText('Before the line. Black plays first.')
  await expect(line.locator('.go-num')).toHaveCount(0)
  await expect(button(line, 'Previous')).toHaveCount(0)
  await button(line, 'Next move').click()
  await expect(now).toHaveText('1 of 4: Black R14.')
  await expect(line.locator('.go-num')).toHaveText(['1'])
  await expect(line.locator('.go-last')).toHaveCount(1)
  await expect(line.locator('li[aria-current=step]')).toHaveText('1. Black R14.')
  // the arrow keys turn the page while the board box has focus
  await line.getByRole('region', { name: /Left and right arrow keys/ }).focus()
  await page.keyboard.press('ArrowRight')
  await expect(now).toHaveText('2 of 4: White passes.')
  await expect(line.locator('.go-num')).toHaveText(['1'])
  await page.keyboard.press('ArrowRight')
  await expect(now).toHaveText('3 of 4: Black C14.')
  await page.keyboard.press('ArrowLeft')
  await expect(now).toHaveText('2 of 4: White passes.')
  await button(line, 'Last move').click()
  await expect(now).toHaveText('4 of 4: White C15.')
  await expect(line.locator('.go-num')).toHaveText(['1', '3', '4'])
  await expect(button(line, 'Next move')).toHaveCount(0)
  await button(line, 'Previous').click()
  await expect(now).toHaveText('3 of 4: Black C14.')
})

test('a review move the engine reads: the line at once, then its loss from the relay\'s answer', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'ok' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('K10')
  await page.locator('#go-review').press('Enter')
  await expect(work).toContainText('Game move R10: 4.3 points lost.')
  await expect(work).toContainText('Your move K10: 0.0 points lost.')
})

test('a review move with the engine slow: the line shows at once, and the loss is said to follow', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('K10')
  await page.locator('#go-review').press('Enter')
  await expect(work).toContainText('Game move R10: 4.3 points lost.')
  await expect(work).toContainText('2. White passes.')
  await expect(work).toContainText('Your move K10: the engine is reading it.')
  await noViolation(page)
  await button(work, /^Next$/).click()
  await expect(work).toContainText('move 9 · Black plays.')
})

test('a review move with the relay absent: the line shows, and the loss is said to be unknown', async ({ page }) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'down' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('K10')
  await page.locator('#go-review').press('Enter')
  await expect(work).toContainText('Game move R10: 4.3 points lost.')
  await expect(work).toContainText("Your move K10: the engine did not answer, so the move's loss is not known.")
  await noViolation(page)
})

test('the rated game: its settings with the rank range, a challenge posted, and the list going on', async ({
  page
}) => {
  await setUp(page, RECORDS.ratedGame())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Play one rated game on OGS when you have an hour free.')
  // after the first rated game the settings fold behind the rank range
  await expect(work).toContainText('Same settings as last time, with the rank range: 27 kyu to 10 kyu.')
  await expect(work.getByText('automatic komi')).toBeHidden()
  await work.getByText('All the settings').click()
  await expect(work.getByText('automatic komi')).toBeVisible()
  await noViolation(page)
  await button(work, 'Challenge posted').click()
  await expect(work).toContainText('You posted a challenge on OGS.')
  await expect(work).not.toContainText('Play one rated game')
  await noViolation(page)
  await button(work, 'Game ended').click()
  await expect(work).not.toContainText('You posted a challenge')
  const r = await stored(page)
  expect(r.games.map((/** @type {{ id: number }} */ g) => g.id)).toContain(777)
})

test('the rated game: Game ended with no new game says so; Skip the game today skips it', async ({ page }) => {
  await setUp(page, RECORDS.ratedGame(), { games: 'none' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await button(work, 'Game ended').click()
  await expect(page.locator('#go-why')).toContainText('Eruko has read every game of yours that has ended since set-up')
  await expect(work).not.toContainText('end time')
  await button(work, 'Skip the game today').click()
  await expect(work).not.toContainText('Play one rated game')
})

test('the first rated game with the server absent: the terms explained, and the server read again', async ({
  page
}) => {
  await setUp(page, RECORDS.firstRated(), { server: 'down' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('with these settings:')
  await expect(work).toContainText('(the game counts for the rating)')
  await expect(work).toContainText('rank range: Eruko could not read your rating, because the server did not answer')
  await noViolation(page)
  await page.unrouteAll()
  await stubNet(page, {})
  await button(work, 'Read the server again').click()
  await expect(work).toContainText('rank range: 27 kyu to 10 kyu')
})

test('the practice game: its number refused, read, then its count', async ({ page }) => {
  await setUp(page, RECORDS.practice())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Challenge the bot 15k-kgs-humanlike-kata by name')
  await button(work, 'Game ended').click()
  await expect(page.locator('#go-why')).toContainText('Type the game number')
  await noViolation(page)
  await page.locator('#go-number').fill('https://online-go.com/game/778')
  await button(work, 'Game ended').click()
  await expect(work).toContainText('Game 778 · you played Black.')
  await page.locator('#go-count').fill('ten')
  await page.locator('#go-count').press('Enter')
  await expect(page.locator('#go-why')).toHaveText('Type your count as a whole number.')
  await noViolation(page)
  // the final board is drawn on the count screen
  await expect(work.locator('figure.go-board')).toBeVisible()
  await page.locator('#go-count').fill('9')
  await page.locator('#go-count').press('Enter')
  await expect(work).toContainText('Wrong.')
  await expect(work).toContainText('Your count: 9.')
  await expect(work).not.toContainText("Eruko's count of the server's final board")
  await noViolation(page)
  // a wrong count is counted again on the same game, with no new game played
  await button(work, 'Count again').click()
  await expect(page.locator('#go-count')).toBeVisible()
  await page.locator('#go-count').fill('3')
  await page.locator('#go-count').press('Enter')
  await expect(work).toContainText('Right.')
  await expect(work).toContainText("Eruko's count of the server's final board: 3.")
  expect((await stored(page)).start.counted).not.toBe('')
  await button(work, /^Next$/).click()
  await expect(work).not.toContainText('Your count')
})

test("a wrong count may show Eruko's count instead of counting again", async ({ page }) => {
  await setUp(page, RECORDS.count())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-count').fill('1')
  await page.locator('#go-count').press('Enter')
  await button(work, "Show Eruko's count").click()
  await expect(work).toContainText("Eruko's count of the server's final board: 5.")
  await expect(work).toContainText(/That is \d+ of your stones on the board and \d+ empty points/)
  expect((await stored(page)).start.counted).toBe('')
})

test('a reading says one plain line, its numbers behind Details, and closes with Next', async ({ page }) => {
  await setUp(page, RECORDS.reading())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Eruko keeps this reading and compares the next one with it.')
  await expect(work.getByText('Rating 912.')).toBeHidden()
  await noViolation(page)
  await work.getByText('Details').click()
  await expect(work.getByText('Rating 912.')).toBeVisible()
  await button(work, /^Next$/).click()
  await expect(work).not.toContainText('Rating 912.')
})

test('once the first line is set, the end level lines follow the reading line, outside Details', async ({ page }) => {
  await setUp(page, RECORDS.endLevel())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work.getByText(/^End level: passed on \d+ [A-Z][a-z]+\.$/)).toBeVisible()
  await expect(work.getByText('Mean of the last 24 readings 2510.')).toBeVisible()
  await expect(work.getByText('Mean of the 24 before 2496.')).toBeVisible()
  await expect(work.getByText('Server rank of the lower mean 36 (7 dan).')).toBeVisible()
  await expect(work).not.toContainText('readings are not settled')
  await noViolation(page)
})

test('a note on a game that is no rated game closes with Next', async ({ page }) => {
  await setUp(page, RECORDS.note())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('That game is not ranked.')
  await button(work, /^Next$/).click()
  await expect(work).not.toContainText('That game is not ranked.')
})

test('a posted challenge stays under the next item, and is withdrawn', async ({ page }) => {
  await setUp(page, RECORDS.posted())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('You posted a challenge on OGS.')
  await expect(work.locator('.lrn-ss')).toHaveCount(2)
  await noViolation(page)
  await button(work, 'Challenge withdrawn').click()
  await expect(work).not.toContainText('You posted a challenge')
})

test('a reading that marks a drop holds no new kind: the next kind opens', async ({ page }) => {
  await setUp(page, RECORDS.dropped())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).not.toContainText('Nothing left.')
  await expect(work).toContainText('Read the first problem of each kind with its solution.')
})

test('nothing left says why, and leads to Start and to the unit', async ({ page }) => {
  await setUp(page, RECORDS.nothing())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await expect(work).toContainText('Nothing left.')
  await expect(work).toContainText('The next item comes back on')
  await noViolation(page)
  await expect(work.getByRole('link', { name: 'Go to Go course' })).toBeVisible()
  await work.getByRole('link', { name: 'Start' }).click()
  await expect(page.locator('h1')).toHaveText('Start')
})

test('the breadcrumb and the links back never read "Go › Go" or "Go to Go"', async ({ page }) => {
  await setUp(page, RECORDS.midCourse())
  await page.goto(`${G}/start`)
  await expect(page.getByRole('link', { name: 'Go to Go', exact: true })).toHaveCount(0)
  await expect(page.locator('body')).not.toContainText(/Go\s*›\s*Go(?! course)/)
})

test('a part read again turns through its answered items', async ({ page }) => {
  await setUp(page, RECORDS.midCourse())
  await page.goto(`${G}/work?part=1`)
  await expect(page.locator('h1')).toHaveText('Read again: The board and turns')
  const again = page.locator('#go-again')
  await expect(again).toContainText('Item 1 of 7')
  await expect(again).toContainText('How many points lie next to A1?')
  await noViolation(page)
  await button(again, /^Next$/).click()
  await expect(again).toContainText('Item 2 of 7')
  await button(again, 'Previous').click()
  await expect(again).toContainText('Item 1 of 7')
  await page.getByRole('link', { name: 'Go to Go course' }).click()
  await expect(page.locator('h1')).toHaveText('Go course')
})

test('a kind read again shows its solved problem, then those tried; one not begun shows its worked example and what it waits on', async ({
  page
}) => {
  await setUp(page, RECORDS.midCourse())
  await page.goto(`${G}/work?kind=1`)
  const again = page.locator('#go-again')
  await expect(again).toContainText('Problem 1 of')
  await expect(again).toContainText('First move: K9.')
  await noViolation(page)
  await page.goto(`${G}/work?kind=10`)
  await expect(page.locator('h1')).toHaveText('Capturing races')
  await expect(page.locator('#go-again')).toContainText('First move')
  await expect(page.locator('#go-again')).toContainText("This kind's problems open once these are done:")
  await expect(page.locator('#go-again').getByRole('link', { name: 'Begin this kind' })).toHaveCount(0)
  await noViolation(page)
})

test('a kind whose kinds are done is begun from its row, ahead of the course order', async ({ page }) => {
  await setUp(page, RECORDS.firstExample())
  await page.goto(G)
  await page.getByRole('link', { name: 'Save a stone in atari' }).click()
  await expect(page.locator('h1')).toHaveText('Save a stone in atari')
  const again = page.locator('#go-again')
  await expect(again).toContainText('First move')
  // no kind begun yet: the four results are explained under this first worked example
  await expect(again).toContainText("Seki: neither side can capture the other side's group")
  await noViolation(page)
  // a plain link to the work list, which begins the kind as it is followed
  await again.getByRole('link', { name: 'Begin this kind' }).click()
  await expect(page.locator('h1')).toHaveText('Work list')
  await expect(page.locator('#go-move')).toBeVisible()
  const r = await stored(page)
  expect(r.course.find((/** @type {{ kind?: number }} */ c) => c.kind === 2).opened).not.toBe('')
  expect(r.course.find((/** @type {{ kind?: number }} */ c) => c.kind === 1).opened).toBe('')
})

test('a position from the learner\'s own game is posed on its own thread, and becomes a problem', async ({
  page
}) => {
  await setUp(page, ownGames())
  await page.goto(`${G}/review`)
  // the store is read once the page has opened the record, so the read takes no empty copy first
  await expect(page.locator('table.lrn-rv')).toBeVisible()
  await expect
    .poll(async () => (await stored(page)).own?.problems?.length ?? 0, { timeout: 20000 })
    .toBe(1)
  const r = await stored(page)
  expect(r.own.seen).toEqual(['900-1'])
  expect(r.own.problems[0].answers).toEqual(['K9'])
})

/** Each page on a first visit and some way into the course, with axe on each. */
const PAGES = /** @type {[string, keyof typeof RECORDS | null][]} */ ([
  ['start', null],
  ['review', null],
  ['work', null],
  ['work?part=1', null],
  ['start', 'reviewing'],
  ['review', 'midCourse'],
  ['review', 'reviewing'],
  ['work', 'midCourse'],
  ['work', 'reviewShown'],
  ['work', 'count'],
  ['work', 'nothing']
])

for (const [slug, name] of PAGES)
  test(`${slug}${name ? ` (${name})` : ''} has no accessibility violation axe finds`, async ({ page }) => {
    await setUp(page, name ? RECORDS[name]() : undefined)
    await page.goto(`${G}/${slug}`)
    await expect(page.locator('main.study')).toBeVisible()
    await noViolation(page)
  })

test('the Continue card and the home card open the work list first', async ({ page }) => {
  await page.goto(G)
  const card = page.locator('a.hm-start', { hasText: 'Continue' })
  await expect(card.locator('.hm-start-note')).toHaveText(/^Work list: \d+ new today$/)
  await expect(card).toHaveAttribute('href', /\/work$/)
  await page.goto('./')
  await expect(
    page
      .locator('.ep-card', { has: page.getByRole('heading', { name: 'Go course', exact: true }) })
      .locator('.ep-card-today')
  ).toHaveText(/^Continue to Work list: \d+ new today$/)
})

test("the place line says where the learner stands in the unit's own words", async ({ page }) => {
  await page.goto(G)
  await expect(page.locator('.hm-place')).toHaveText('Rules part 1 of 5: The board and turns.')
})

test('a solution line is paged, and under forced colours a black stone and a white stone stay apart', async ({
  page
}) => {
  await setUp(page, RECORDS.firstProblem())
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-move').fill('q1')
  await page.locator('#go-result').fill('Dies')
  await page.locator('#go-result').press('Enter')
  const line = work.locator('go-line-pages')
  const now = line.locator('[aria-live=polite]')
  await expect(now).toHaveText('Before the line. Black plays first.')
  await expect(line.locator('.go-white')).toHaveCount(2)
  await expect(line.locator('ol li')).toHaveText(['1. Black Q1. Captures.'])
  await button(line, 'Next move').click()
  await expect(now).toHaveText('1 of 1: Black Q1. White R1, S1 are captured.')
  await expect(line.locator('.go-white')).toHaveCount(0)
  await expect(line.locator('.go-num')).toHaveText(['1'])
  await expect(line.locator('figcaption li').first()).toHaveText('Last move: Black Q1.')
  await noViolation(page)
  await page.emulateMedia({ forcedColors: 'active' })
  await button(line, 'Previous').click()
  await expect(now).toHaveText('Before the line. Black plays first.')
  const fill = (/** @type {string} */ shape) =>
    line
      .locator(shape)
      .first()
      .evaluate(el => getComputedStyle(el).fill)
  // the board keeps its own colours under forced colours: a solid dark disc and an open light one
  expect(await fill('.go-black')).toBe('rgb(20, 19, 15)')
  expect(await fill('.go-white')).toBe('rgb(244, 241, 232)')
  expect(await fill('.go-ground')).toBe('rgb(244, 241, 232)')
  expect(
    await line
      .locator('.go-coord')
      .first()
      .evaluate(el => getComputedStyle(el).fill)
  ).not.toBe('rgb(20, 19, 15)')
  await test
    .info()
    .attach('forced-colours', {
      body: await line.locator('figure').screenshot(),
      contentType: 'image/png'
    })
})

test('on a phone a whole board keeps its size and scrolls in its own box, with its labels at text size', async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  const box = work.getByRole('region', { name: 'Go board, whole board, scrolls sideways' })
  await expect(box).toHaveAttribute('tabindex', '0')
  expect(await box.evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true)
  const svg = box.locator('svg')
  // drawn one to one: no scale, so the coordinates stand at the body text size of 17 pixels
  expect(await svg.evaluate(el => el instanceof SVGSVGElement && el.getScreenCTM()?.a)).toBe(1)
  expect(
    await svg
      .locator('.go-coord')
      .first()
      .evaluate(el => getComputedStyle(el).fontSize)
  ).toBe('17px')
  // clickable points are at least 24 pixels apart
  const rows = svg.locator('.go-line').first().locator('xpath=following-sibling::*[1]')
  const a = await svg.locator('.go-line').first().boundingBox()
  const b = await rows.boundingBox()
  expect(Math.abs((b?.y ?? 0) - (a?.y ?? 0))).toBeGreaterThanOrEqual(24)
})

test('on a phone a paged board scrolls the new stone into view, and Shift and the arrows scroll its box', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('r14')
  await page.locator('#go-review').press('Enter')
  const line = work.locator('go-line-pages')
  const box = line.getByRole('region', { name: /scrolls sideways with Shift and the arrow keys/ })
  const inside = () =>
    box.evaluate(el => {
      const ring = el.querySelector('.go-last')?.getBoundingClientRect()
      const b = el.getBoundingClientRect()
      return !!ring && ring.left >= b.left && ring.right <= b.right
    })
  const left = () => box.evaluate(el => el.scrollLeft)
  expect(await left()).toBe(0)
  // move 1 is R14, off the right of the visible part: the box scrolls to it, at once
  await button(line, 'Next move').click()
  await expect.poll(inside).toBe(true)
  const shown = await left()
  expect(shown).toBeGreaterThan(0)
  // move 3 is C14, off the left of it: the box scrolls back, only as far as it needs
  await button(line, 'Next move').click()
  await button(line, 'Next move').click()
  await expect.poll(inside).toBe(true)
  expect(await left()).toBeLessThan(shown)
  // Shift and an arrow scroll the box by about its width and leave the page where it is
  await box.focus()
  await page.keyboard.press('Shift+ArrowRight')
  expect(await left()).toBeGreaterThan(200)
  await expect(line.locator('[aria-live=polite]')).toHaveText('3 of 4: Black C14.')
  await page.keyboard.press('Shift+ArrowLeft')
  expect(await left()).toBe(0)
  await expect(line.locator('[aria-live=polite]')).toHaveText('3 of 4: Black C14.')
})

test("a board's coordinates, move numbers and captions stand at body size in the text typeface", async ({
  page
}) => {
  await setUp(page, RECORDS.reviewing(), { relay: 'hang' })
  await page.goto(`${G}/work`)
  const work = page.locator('#go-work')
  await page.locator('#go-review').fill('r14')
  await page.locator('#go-review').press('Enter')
  const line = work.locator('go-line-pages')
  await button(line, 'Next move').click()
  await expect(line.locator('.go-num')).toHaveText(['1'])
  const body = await page.evaluate(() => {
    const s = getComputedStyle(document.body)
    return { size: s.fontSize, family: s.fontFamily }
  })
  for (const at of ['.go-num', '.go-coord', 'figcaption']) {
    const got = await line.locator(at).first().evaluate(el => {
      const s = getComputedStyle(el)
      return { size: s.fontSize, family: s.fontFamily }
    })
    expect(got.size, at).toBe(body.size)
    if (at !== 'figcaption') expect(got.family, at).toBe(body.family)
  }
  // the points are spaced from "88" in that face, so a two-digit number still sits inside its stone
  const fits = await line.locator('svg').evaluate(svg => {
    const stone = svg.querySelector('.go-black, .go-white')
    const two = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    two.setAttribute('class', 'go-num')
    two.textContent = '88'
    svg.append(two)
    const width = two.getBBox().width
    two.remove()
    return { width, diameter: 2 * Number(stone?.getAttribute('r')) }
  })
  expect(fits.width).toBeLessThanOrEqual(fits.diameter)
})

test('a 9 by 9 board wider than a phone\'s step card takes the region role, its name and a Tab stop', async ({
  page
}) => {
  await page.setViewportSize({ width: 360, height: 800 })
  await setUp(page)
  await page.goto(`${G}/start`)
  await page.evaluate(async () => {
    const { board } = await import(new URL('units/go/core/board.dom.js', document.baseURI).href)
    const { morph } = await import(new URL('parts/view.dom.js', document.baseURI).href)
    const card = document.createElement('div')
    card.id = 'test-card'
    card.style.width = '294px'
    document.body.append(card)
    const diagram = { size: 19, view: [0, 0, 9, 9], black: ['D4'], white: ['E5'] }
    morph(card, [board({ diagram })])
  })
  const scroll = page.locator('#test-card .lrn-figure-scroll')
  await expect(scroll).toHaveAttribute('role', 'region')
  await expect(scroll).toHaveAttribute('tabindex', '0')
  await expect(scroll).toHaveAttribute('aria-label', /^Go board, .*, scrolls sideways$/)
  await page.evaluate(() => {
    const card = document.getElementById('test-card')
    if (card) card.style.width = '600px'
  })
  await expect(scroll).not.toHaveAttribute('role', /./)
  await expect(scroll).not.toHaveAttribute('tabindex', /./)
})
