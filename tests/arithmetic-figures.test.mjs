// The figures Arithmetic's content names exist, and the kind that asks for a place on the number
// line is drawn as the paper sets it out ("Visuals", "Place it on the line").
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { PLACE_FORM } from '../src/units/arithmetic/core/check.logic.js'
import { FIGURES } from '../src/units/arithmetic/core/figures.gen.js'
import { figureSet } from '../src/units/arithmetic/core/figures.logic.js'
import { figureText } from '../src/units/arithmetic/core/number-line.logic.js'

const DIR = new URL('../src/units/arithmetic/content/', import.meta.url)
const figures = figureSet(FIGURES, tex => tex)

/**
 * Every object of a value that holds `form` and `answer` (a problem), and every figure it names.
 * @param {unknown} x
 * @param {{ figs: { file: string, alt: string, where: string }[], place: { where: string, answer: string, last: unknown }[] }} out
 * @param {string} where
 */
function walk(x, out, where) {
  if (Array.isArray(x)) x.forEach((v, i) => walk(v, out, `${where}[${i}]`))
  else if (x && typeof x === 'object') {
    const r = /** @type {Record<string, unknown>} */ (x) // a JSON-like tree: any key may be read
    if (typeof r.file === 'string' && typeof r.alt === 'string')
      out.figs.push({ file: r.file, alt: r.alt, where })
    if (r.form === PLACE_FORM && typeof r.answer === 'string') {
      const lines = Array.isArray(r.lines) ? r.lines : Array.isArray(r.solution) ? r.solution : []
      out.place.push({ where, answer: r.answer, last: lines.at(-1) })
    }
    for (const k in r) walk(r[k], out, `${where}.${k}`)
  }
}

/** @type {Parameters<typeof walk>[1]} */
const found = { figs: [], place: [] }
for (const d of ['topics', 'bank'])
  for (const f of readdirSync(new URL(`${d}/`, DIR)))
    walk((await import(new URL(`${d}/${f}`, DIR).href)).default, found, `${d}/${f}`)

test('every figure the content names is drawn, and a place line says what it shows', () => {
  assert.ok(found.figs.length > 100)
  for (const f of found.figs) {
    assert.ok(figures[f.file], `${f.where}: no figure ${f.file}`)
    const m = /^place:(line|mark|check):(.+)$/.exec(f.file)
    if (m) {
      const view = m[1] === 'line' || m[1] === 'mark' ? m[1] : 'check'
      assert.equal(f.alt, figureText(view, m[2] ?? ''), f.where)
    }
  }
})

test('every drawn figure of the content folder is named by a topic', () => {
  const named = new Set(found.figs.map(f => f.file))
  for (const file of Object.keys(FIGURES))
    assert.ok(named.has(file), `${file} is named by no topic`)
})

test('a problem that asks for a place ends on a line that gives the place', () => {
  assert.ok(found.place.length > 300)
  for (const p of found.place) {
    const last = p.last
    assert.ok(
      last && typeof last === 'object' && 'figure' in last,
      `${p.where}: its last line draws the check`
    )
    const figure = /** @type {{ file: string }} */ (last.figure) // a JSON-like tree
    assert.equal(figure.file, `place:check:${p.answer}`, p.where)
  }
})

// A proof's figure sits on the line that first uses it, so it appears with that line and not
// whole from the start.
test('no proof draws a figure whole: each sits on a line of its own', async () => {
  /** @type {string[]} */
  const whole = []
  let onLines = 0
  for (const f of readdirSync(new URL('topics/', DIR))) {
    const topic = (await import(new URL(`topics/${f}`, DIR).href)).default
    for (const p of topic.proofs ?? []) {
      if (p.figure) whole.push(p.id)
      onLines += p.lines.filter(/** @param {{ figure?: unknown }} l */ l => l.figure).length
    }
  }
  assert.deepEqual(whole, [])
  assert.equal(onLines, 3)
})
