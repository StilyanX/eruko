import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { figureUnits } from '../scripts/lib/maths-units.mjs'
import { figuresOf } from '../scripts/lib/figures.mjs'

// Hides: the contrast every colour must clear (Layout: Colour): 4.5:1
// for text, 3:1 for lines, marks and the grid, in every theme, and 7:1 for text in high contrast. A maths figure draws only in currentColor, so
// its colours are the theme tokens (src/style/tokens.css); a board has its own --board-* tokens,
// read here by name, so a board is held to the same numbers. A hard-coded colour in a figure
// would not be held by the tokens, so a figure SVG with one fails.
const dir = new URL('../src/', import.meta.url)
const tokens = readFileSync(new URL('style/tokens.css', dir), 'utf8')

/**
 * Each block of a stylesheet as [the @media it sits in, its selector, its custom properties].
 * @param {string} css
 * @returns {[string, string, Record<string, string>][]}
 */
function blocks(css) {
  /** @type {[string, string, Record<string, string>][]} */
  const out = []
  const walk = (/** @type {string} */ text, /** @type {string} */ at) => {
    const rule = /([^{}]+)\{((?:[^{}]|\{[^{}]*\})*)\}/g
    for (const [, head, body] of text.matchAll(rule)) {
      const name = (head ?? '').replace(/\/\*[\s\S]*?\*\//g, '').trim()
      if (name.startsWith('@media')) walk(body ?? '', name)
      else if (name.startsWith('@layer')) walk(body ?? '', at)
      else
        out.push([
          at,
          name.replace(/\s+/g, ' '),
          Object.fromEntries(
            [...(body ?? '').matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(m => [
              m[1] ?? '',
              (m[2] ?? '').trim()
            ])
          )
        ])
    }
  }
  walk(css, '')
  return out
}

/** The tokens of each theme, as the page resolves them: dark, light, then each in high contrast. */
function themes() {
  const all = blocks(tokens)
  const take = (/** @type {string} */ sel) =>
    Object.assign({}, ...all.filter(([a, s]) => a === '' && s === sel).map(b => b[2]))
  const base = take(":root, [data-theme='dark']")
  const layered = (/** @type {string} */ name) => ({ ...base, ...take(`[data-theme='${name}']`) })
  const more = (/** @type {string} */ name) => take(`[data-theme='${name}'][data-contrast='more']`)
  return {
    dark: layered('dark'),
    light: layered('light'),
    'dark, high contrast': { ...layered('dark'), ...more('dark') },
    'light, high contrast': { ...layered('light'), ...more('light') }
  }
}

/** @param {string} hex */
function luminance(hex) {
  const n = hex.replace('#', '')
  assert.match(n, /^[0-9a-f]{6}$/i, `${hex} is not a six-digit hex colour`)
  const [r, g, b] = [0, 2, 4].map(i => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0)
}

/**
 * @param {string} a
 * @param {string} b
 */
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05)
}

/** [ink, ground, least contrast, what it is] */
const PAIRS = [
  ['--text', '--bg', 4.5, 'text'],
  ['--text-2', '--bg', 4.5, 'text'],
  ['--text', '--raised', 4.5, 'text'],
  ['--text-2', '--raised', 4.5, 'text'],
  ['--text', '--hover', 4.5, 'text'],
  ['--text-2', '--hover', 4.5, 'text'],
  ['--accent', '--bg', 4.5, 'text'],
  ['--accent', '--raised', 4.5, 'text'],
  ['--accent', '--hover', 4.5, 'text'],
  ['--on-accent', '--accent', 4.5, 'text'],
  ['--border', '--bg', 3, 'line'],
  ['--border', '--raised', 3, 'line'],
  ['--border', '--hover', 3, 'line'],
  ['--board-ink', '--board-ground', 4.5, 'board text and stones'],
  ['--board-grid', '--board-ground', 3, 'board grid'],
  ['--board-mark', '--board-ground', 3, 'board ring']
]

for (const [theme, t] of Object.entries(themes()))
  test(`${theme}: every colour clears its contrast`, () => {
    for (const [ink, ground, at, what] of PAIRS) {
      const [a, b] = [t[String(ink)], t[String(ground)]]
      assert.ok(a && b, `${ink} or ${ground} is missing`)
      // High contrast holds the theme's own text to 7:1 (the board keeps its own colours).
      const least = theme.endsWith('high contrast') && what === 'text' ? 7 : at
      const got = contrast(a, b)
      assert.ok(
        got >= Number(least),
        `${what}: ${ink} ${a} on ${ground} ${b} is ${got.toFixed(2)}:1, needs ${least}:1`
      )
    }
  })

test('every board token is in a pair above (a new one is held to a contrast too)', () => {
  const paired = new Set(PAIRS.flatMap(p => [p[0], p[1]]))
  const board = Object.keys(themes().dark).filter(k => k.startsWith('--board-'))
  assert.ok(board.length > 0)
  for (const k of board) assert.ok(paired.has(k), `${k} has no contrast pair: add one to PAIRS`)
})

test('no maths figure draws a colour of its own: its lines and labels are the theme text', () => {
  for (const unit of figureUnits())
    for (const [file, svg] of Object.entries(figuresOf(unit))) {
      const colours = [...svg.matchAll(/(?:stroke|fill|color)="([^"]*)"/g)]
        .map(m => m[1])
        .filter(c => c !== 'currentColor' && c !== 'none')
      assert.deepEqual(colours, [], `${unit}/${file} has a colour the tokens do not hold`)
    }
})

test('the contrast sum is the WCAG one, and the themes are read apart', () => {
  assert.equal(contrast('#000000', '#ffffff').toFixed(1), '21.0')
  assert.equal(themes().light['--bg'], '#f7f5f0')
  assert.equal(themes()['light, high contrast']['--bg'], '#ffffff')
  assert.equal(themes()['dark, high contrast']['--text'], '#ffffff')
  assert.equal(themes().dark['--board-ground'], '#f4f1e8')
})
