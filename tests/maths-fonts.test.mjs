import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

// A formula is set in one family, Eruko Maths, of three faces split by unicode-range
// (src/style/fonts/eruko-maths-signs-1.005/faces.css, cut and written by scripts/maths-fonts.py):
// the signs' face with no range, so the browser reads the MATH table from it; Literata's own
// upright face for the digits and upright letters; Literata Italic's letters at the Mathematical
// Italic code points. Every code point a generated formula draws is held by one of them: one that
// is not falls to the system's maths font, another face in the middle of a formula.
const SRC = path.join(import.meta.dirname, '..', 'src')
const FONTS = path.join(SRC, 'style', 'fonts')
const SIGNS = path.join(FONTS, 'eruko-maths-signs-1.005')
const LETTERS = path.join(FONTS, 'eruko-maths-letters-5.3.0')

/**
 * The code points of a unicode-range list: U+0025,U+0030-0039.
 * @param {string} list
 */
const pointsOf = list =>
  new Set(
    list.split(',').flatMap(r => {
      const [a = '', b = a] = r.trim().replace(/^U\+/, '').split('-')
      const [from, to] = [parseInt(a, 16), parseInt(b, 16)]
      return Array.from({ length: to - from + 1 }, (_, i) => from + i)
    })
  )

/** @param {string} folder @returns {{ codePoints: string }} */
const vendorOf = folder => JSON.parse(readFileSync(path.join(folder, 'VENDOR.json'), 'utf8'))

const faces = [
  ...readFileSync(path.join(SIGNS, 'faces.css'), 'utf8').matchAll(/@font-face\s*\{([^}]*)\}/g)
].map(([, body = '']) =>
  Object.fromEntries(
    body
      .split(';')
      .map(d => d.trim())
      .filter(Boolean)
      .map(d => [d.slice(0, d.indexOf(':')).trim(), d.slice(d.indexOf(':') + 1).trim()])
  )
)

test('the maths family is three faces of one name: the signs with no range, then Literata, then the letters', () => {
  assert.equal(faces.length, 3)
  for (const face of faces) {
    assert.equal(face['font-family'], "'Eruko Maths'")
    // A weight or a style on one face would part it from the other two.
    assert.deepEqual(
      Object.keys(face).filter(k => !['font-family', 'src', 'unicode-range'].includes(k)),
      []
    )
    const file = /url\(([^)]+)\)/.exec(face.src ?? '')?.[1] ?? ''
    assert.ok(existsSync(path.join(SIGNS, file)), `${file} is there`)
  }
  const [signs, literata, letters] = faces
  assert.match(signs?.src ?? '', /eruko-maths-signs\.woff2/)
  assert.equal(
    signs?.['unicode-range'],
    undefined,
    'the face the MATH table is read from has no range'
  )
  assert.match(literata?.src ?? '', /literata-5\.3\.0\/files\/literata-latin-opsz-normal\.woff2/)
  assert.equal(
    literata?.['unicode-range'],
    'U+0025,U+002C,U+002E,U+0030-0039,U+0041-005A,U+0061-007A',
    '% , . the digits and the upright letters'
  )
  assert.match(letters?.src ?? '', /eruko-maths-letters\.woff2/)
  assert.equal(letters?.['unicode-range'], vendorOf(LETTERS).codePoints)
})

test('the letters face holds every italic letter a one-letter variable is drawn from', () => {
  const held = pointsOf(vendorOf(LETTERS).codePoints)
  for (const c of 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    assert.ok(held.has(italicOf(c.codePointAt(0) ?? 0)), c)
})

test('the app sets every formula in the family, and Latin Modern is gone', () => {
  assert.match(
    readFileSync(path.join(SRC, 'style', 'typography.css'), 'utf8'),
    /--font-maths: 'Eruko Maths', math;/
  )
  const sheet = readFileSync(path.join(SRC, 'style', 'maths.css'), 'utf8')
  assert.match(sheet, /math \{\s*font-family: var\(--font-maths\);/)
  assert.match(sheet, /@import '\.\/fonts\/eruko-maths-signs-1\.005\/faces\.css';/)
  const maths = readdirSync(path.join(SRC, 'style', 'maths'))
  assert.deepEqual(maths.sort(), ['Temml.woff2', 'temml.css'])
  assert.doesNotMatch(
    readFileSync(path.join(SRC, 'style', 'maths', 'temml.css'), 'utf8'),
    /font-family:[^;]*Latin Modern/
  )
})

/**
 * The code point a browser draws a one-letter <mi> from (MathML Core, text-transform: math-auto):
 * the Mathematical Italic letter; any other code point as it is.
 * @param {number} c
 */
function italicOf(c) {
  if (c === 0x68) return 0x210e
  if (c >= 0x41 && c <= 0x5a) return c - 0x41 + 0x1d434
  if (c >= 0x61 && c <= 0x7a) return c - 0x61 + 0x1d44e
  if (c >= 0x391 && c <= 0x3a9) return c - 0x391 + 0x1d6e2
  if (c >= 0x3b1 && c <= 0x3c9) return c - 0x3b1 + 0x1d6fc
  /** @type {Record<number, number>} */
  const other = {
    0x131: 0x1d6a4,
    0x237: 0x1d6a5,
    0x3f4: 0x1d6f3,
    0x2207: 0x1d6fb,
    0x2202: 0x1d715,
    0x3f5: 0x1d716,
    0x3d1: 0x1d717,
    0x3f0: 0x1d718,
    0x3d5: 0x1d719,
    0x3f1: 0x1d71a,
    0x3d6: 0x1d71b
  }
  return other[c] ?? c
}

/** @type {Record<string, string>} */
const ENTITIES = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'", nbsp: ' ' }
/** @param {string} text */
const decoded = text =>
  text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (all, name) =>
    name.startsWith('#x')
      ? String.fromCodePoint(parseInt(name.slice(2), 16))
      : name.startsWith('#')
        ? String.fromCodePoint(Number(name.slice(1)))
        : (ENTITIES[name] ?? all)
  )

/**
 * Every code point the tokens of some MathML are drawn from in the family. A token Temml's own
 * script face sets (class mathscr) is left out.
 * @param {string} mathml
 * @returns {number[]}
 */
function drawn(mathml) {
  /** @type {number[]} */
  const points = []
  for (const [, tag, attrs = '', text = ''] of mathml.matchAll(
    /<(mi|mn|mo|mtext|ms)((?:\s[^>]*)?)>([^<]*)</g
  )) {
    if (/\bmathscr\b/.test(attrs)) continue
    const chars = Array.from(decoded(text), ch => ch.codePointAt(0) ?? 0)
    const variable = tag === 'mi' && chars.length === 1 && !/mathvariant=/.test(attrs)
    points.push(...(variable ? chars.map(italicOf) : chars))
  }
  return points
}

/**
 * Every string inside a value, at any depth.
 * @param {unknown} v
 * @returns {string[]}
 */
const strings = v =>
  typeof v === 'string'
    ? [v]
    : Array.isArray(v)
      ? v.flatMap(strings)
      : v !== null && typeof v === 'object'
        ? Object.values(v).flatMap(strings)
        : []

test('every code point a generated formula draws is in the signs face or the letters face', async () => {
  const held = new Set([
    ...pointsOf(vendorOf(SIGNS).codePoints),
    ...pointsOf(vendorOf(LETTERS).codePoints)
  ])
  const files = readdirSync(path.join(SRC, 'units'), { recursive: true, withFileTypes: true })
    .filter(e => e.isFile() && e.name.endsWith('.gen.js'))
    .map(e => path.join(e.parentPath, e.name))
    .filter(f => readFileSync(f, 'utf8').includes('<math'))
  assert.ok(files.length > 0)
  /** @type {Map<number, string>} */
  const missing = new Map()
  let formulas = 0
  for (const file of files)
    for (const text of strings(Object.values(await import(pathToFileURL(file).href)))) {
      if (!text.includes('<math')) continue
      formulas++
      for (const c of drawn(text))
        if (!held.has(c) && !missing.has(c)) missing.set(c, path.relative(SRC, file))
    }
  assert.ok(formulas > 0)
  assert.deepEqual(
    [...missing].map(
      ([c, file]) =>
        `U+${c.toString(16).toUpperCase().padStart(4, '0')} ${String.fromCodePoint(c)} (${file})`
    ),
    [],
    'add each code point to SIGNS in scripts/maths-fonts.py and run it'
  )
})
