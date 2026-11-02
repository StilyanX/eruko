#!/usr/bin/env node
/* global process, console, window, document, localStorage */
// Takes headless screenshots of app routes. It uses the Nix store Chromium (or the one named in
// $CHROMIUM), because Playwright's own download lacks system libraries on NixOS.
//
//   node scripts/screenshot.mjs [--base URL] [--theme dark|light|dark-more|light-more]
//        [--widths 390,1440] [--out DIR] [--click 'SEL|SEL...'] [--tag NAME]
//        [--contrast more] [--forced-colors] [--full] [--store KEY=FILE ...] [route ...]
//
// Defaults: base http://127.0.0.1:9999/eruko (run `npm run dev` first), theme dark, widths 390
// and 1440, out /tmp/eruko-shots, route / (the home page).
// --contrast more emulates the device's high-contrast preference and --forced-colors the system's
// forced colours, which a reader sets outside Settings. --full captures the whole page, not
// only the first screen. --click walks through the selectors in order before each shot, and --tag
// puts a name for that state in the file name. --store puts the JSON in FILE under the storage
// key KEY before the page opens, so a unit's record some way into its course shows states a
// first visit never reaches; it may be given once for each key. A study page is shot once it is
// ready (the eruko:page-ready event).
// For each page it prints scrollWidth against innerWidth and names the elements that reach
// furthest past the right edge, so sideways overflow is located without opening the image. It
// also runs axe's WCAG 2.2 A and AA rules on the page as shot and prints each rule the page breaks.
import { AxeBuilder } from '@axe-core/playwright'
import { chromium } from 'playwright'
import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync } from 'node:fs'

const args = process.argv.slice(2)
/**
 * The value after flag `k`, removed from `args` with it; `d` when the flag is absent.
 * @param {string} k
 * @param {string} d
 * @returns {string}
 */
const opt = (k, d) => {
  const i = args.indexOf(k)
  return i < 0 ? d : (args.splice(i, 2)[1] ?? d)
}
const base = opt('--base', 'http://127.0.0.1:9999/eruko')
const theme = opt('--theme', 'dark')
const widths = opt('--widths', '390,1440').split(',').map(Number)
const out = opt('--out', '/tmp/eruko-shots')
const click = opt('--click', '')
const tag = opt('--tag', click ? 'click' : '')
const contrast = opt('--contrast', 'no-preference')
const forced = args.includes('--forced-colors') && !!args.splice(args.indexOf('--forced-colors'), 1)
const full = args.includes('--full') && !!args.splice(args.indexOf('--full'), 1)
/** @type {[string, string][]} */
const stored = []
for (let store = opt('--store', ''); store; store = opt('--store', ''))
  stored.push([store.slice(0, store.indexOf('=')), readFileSync(store.slice(store.indexOf('=') + 1), 'utf8')])
const routes = args.length ? args : ['/']
mkdirSync(out, { recursive: true })

const executablePath =
  process.env.CHROMIUM ||
  execSync('ls -d /nix/store/*-chromium-*/bin/chromium 2>/dev/null | grep -v unwrapped | tail -1')
    .toString()
    .trim()

const browser = await chromium.launch({ executablePath, args: ['--no-sandbox'] })
for (const width of widths) {
  const ctx = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: 'reduce',
    contrast: contrast === 'more' ? 'more' : 'no-preference',
    forcedColors: forced ? 'active' : 'none'
  })
  for (const pair of stored)
    await ctx.addInitScript(([key, value]) => localStorage.setItem(key, value), pair)
  await ctx.addInitScript(t => {
    localStorage.setItem('aether-theme', t)
    // The page gets the flag from the listener below, so the property exists once the event fires.
    const w = /** @type {Window & { __typeset?: boolean }} */ (window)
    w.addEventListener('eruko:page-ready', () => (w.__typeset = true))
  }, theme)
  const page = await ctx.newPage()
  // A screenshot's record never reaches the learner's shared one on the computer.
  await page.route('**/record/sync', r => r.abort())
  /** @type {string[]} */
  const errors = []
  page.on('pageerror', e => errors.push(e.message.slice(0, 120)))
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: 'load', timeout: 60000 })
    // A study page is ready once it has typeset; other pages are ready on load.
    if (/^\/explore\/[^/]+\/[^/]+\/[^/]+/.test(route))
      await page
        .waitForFunction(() => /** @type {Window & { __typeset?: boolean }} */ (window).__typeset, null, { timeout: 45000 })
        .catch(() => console.log('typeset wait timed out:', route))
    await page.waitForTimeout(700)
    if (click) {
      for (const sel of click.split('|'))
        await page
          .click(sel.trim(), { timeout: 5000 })
          .catch(e => console.log(`click failed on ${sel.trim()}:`, e.message.slice(0, 80)))
      await page.waitForTimeout(500)
    }
    const [scrollWidth, innerWidth, culprits] = await page.evaluate(() => {
      // Name the elements that reach furthest past the right edge, so an OVERFLOW
      // report points at a selector instead of just a number.
      const over = [...document.querySelectorAll('body *')]
        .map(el => {
          const r = el.getBoundingClientRect()
          const cls = (el.getAttribute('class') || '')
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .join('.')
          return {
            right: r.right,
            width: r.width,
            name: `${el.tagName.toLowerCase()}${cls ? '.' + cls : ''}`
          }
        })
        .filter(e => e.right > window.innerWidth + 1 && e.width > 40)
        .sort((a, b) => b.right - a.right)
        .slice(0, 3)
        .map(e => `${e.name}@${Math.round(e.width)}`)
      return [document.documentElement.scrollWidth, window.innerWidth, over]
    })
    const mode = `${contrast === 'more' ? '-hc' : ''}${forced ? '-forced' : ''}`
    const file = `${out}/${theme}${mode}-${width}${route.replace(/\//g, '_') || '_root'}${tag ? '-' + tag : ''}.png`
    // Chromium cannot capture a very tall page in one piece: cap a full shot at 10000px, and
    // fall back to the first screen if the capture still fails.
    const tall = full && (await page.evaluate(() => document.documentElement.scrollHeight)) > 10000
    const clip = tall ? { x: 0, y: 0, width, height: 10000 } : undefined
    await page
      .screenshot({ path: file, fullPage: full, timeout: 30000, ...(clip ? { clip } : {}) })
      .catch(() => page.screenshot({ path: file, timeout: 30000 }))
    console.log(
      `${file}  ${scrollWidth > innerWidth ? `OVERFLOW ${scrollWidth}>${innerWidth}  ${culprits.join(' ')}` : 'ok'}`
    )
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()
    for (const v of violations)
      console.log(`  axe ${v.id}: ${v.help} (${v.nodes.map(n => n.target.join(' ')).slice(0, 3).join(', ')})`)
  }
  if (errors.length) console.log('page errors:', errors.join(' | '))
  await ctx.close()
}
await browser.close()
