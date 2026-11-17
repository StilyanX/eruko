// Each graph of the Algebra unit is drawn from its spec (scripts/gen/algebra.mjs), so a hand edit
// of the SVG, or a spec changed without drawing it again, no longer matches.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { draw, figureDir, specs } from '../scripts/lib/graph-figures.mjs'

const DIR = figureDir('algebra')
const svgs = () => readdirSync(DIR).filter(name => name.endsWith('.svg'))

test('every graph is the SVG its spec draws, and every SVG has a spec', () => {
  const all = specs(DIR)
  const stale = Object.entries(all)
    .filter(([name, spec]) => !svgs().includes(name) || readFileSync(new URL(name, DIR), 'utf8') !== draw(spec).svg)
    .map(([name]) => name)
  assert.deepEqual(stale, [], 'run node scripts/gen/algebra.mjs')
  assert.deepEqual(svgs().filter(name => !(name in all)), [], 'an SVG with no spec')
})

test('no graph has a label that touches a line or another label, or numbers too close to read', () => {
  const faults = Object.entries(specs(DIR)).flatMap(([name, spec]) => draw(spec).faults.map(f => `${name}: ${f}`))
  assert.deepEqual(faults, [])
})

// The paper's figure size: labels at body text (17 px) and a figure at most 21 times as wide as its
// smallest label is tall, so it fits a phone column with every label at body size.
test('every figure keeps its labels at body size within a phone column, in the text colour alone', () => {
  const bad = svgs().flatMap(name => {
    const svg = readFileSync(new URL(name, DIR), 'utf8')
    const sizes = [...svg.matchAll(/font-size="([\d.]+)"/g)].map(m => Number(m[1]))
    const wide = Number(/viewBox="[-\d. ]+ ([\d.]+) [\d.]+"/.exec(svg)?.[1])
    const smallest = Math.min(...sizes)
    const coloured = [...svg.matchAll(/(?:stroke|fill)="([^"]*)"/g)].some(m => m[1] !== 'none' && m[1] !== 'currentColor')
    return [
      ...(smallest < 17 || wide > 21 * smallest ? [`${name}: labels ${smallest} px, ${wide} wide`] : []),
      ...(coloured ? [`${name}: a fixed colour`] : [])
    ]
  })
  assert.deepEqual(bad, [])
})

test('a number line is one axis with its numbers, a thick shaded part, an open circle at a strict end and a dot at a closed one', () => {
  const { svg, faults } = draw({ kind: 'numberline', x: [-3, 3], shade: [{ from: -2, to: 1, toOpen: true }, { from: 2, to: 'inf' }] })
  assert.deepEqual(faults, [])
  assert.equal([...svg.matchAll(/<circle[^>]*fill="currentColor"/g)].length, 2)
  assert.equal([...svg.matchAll(/<circle(?![^>]*fill=)/g)].length, 1)
  assert.match(svg, /stroke-width="4"/)
  assert.equal([...svg.matchAll(/<text/g)].length, 7, 'the numbers -3 to 3, nothing else')
  assert.deepEqual(draw({ kind: 'numberline', x: [-100, 100], xstep: 1 }).faults, ['the x marks are too close together'])
})

test('a number line has no mark inside an open circle', () => {
  const { svg } = draw({ kind: 'numberline', x: [-3, 3], shade: [{ from: '-inf', to: 1, toOpen: true }] })
  const cx = /<circle cx="([-\d.]+)"/.exec(svg)?.[1]
  assert.ok(cx)
  assert.ok(!svg.includes(`M${cx} -4 ${cx} 4`), 'no tick under the open circle')
  assert.ok(svg.includes(' -4 '), 'the other ticks stay')
})

test('a plane region is a light fill within the axes, its strict boundary dashed and its other solid', () => {
  const { svg, faults } = draw({
    x: [-3, 3],
    y: [-3, 3],
    shade: [
      { boundary: { y: 'x' }, side: 'above', strict: true },
      { boundary: { x: 1 }, side: 'left' }
    ]
  })
  assert.deepEqual(faults, [])
  const poly = /<polygon fill="currentColor" fill-opacity="0.15" points="([^"]+)"/.exec(svg)
  assert.ok(poly, 'one light fill')
  assert.equal((poly?.[1] ?? '').split(' ').length / 2, 4, 'the box cut by y = x and x = 1 is a four-sided region')
  assert.match(svg, /stroke-width="2" stroke-dasharray="6 4"/)
  assert.match(svg, /<path stroke-width="2" d=/)
})

test('a plane region can be bounded by a curve: the fill follows the parabola, dashed where strict', () => {
  const { svg, faults } = draw({ x: [-3, 3], y: [-1, 5], shade: [{ boundary: { y: 'x^2' }, side: 'below', strict: true }] })
  assert.deepEqual(faults, [])
  const pts = (/<polygon[^>]* points="([^"]+)"/.exec(svg)?.[1] ?? '').split(' ').map(Number)
  assert.ok(pts.length / 2 > 8, 'the fill bends along the curve, not a chord')
  assert.match(svg, /<polyline stroke-dasharray="6 4" points=/)
  const sideways = draw({ x: [-1, 5], y: [-3, 3], shade: [{ boundary: { x: 'y^2' }, side: 'right' }] })
  assert.deepEqual(sideways.faults, [])
  assert.match(sideways.svg, /<polygon[^>]*fill-opacity="0.15"/)
  assert.match(sideways.svg, /<polyline points=/)
})

test('a step graph has a filled dot at each closed end and an open circle at each open one, drawn over its lines', () => {
  const steps = { x: /** @type {[number, number]} */ ([-1, 3]), y: /** @type {[number, number]} */ ([-1, 3]), curves: [{ from: /** @type {[number, number]} */ ([0, 1]), to: /** @type {[number, number]} */ ([1, 1]) }, { from: /** @type {[number, number]} */ ([1, 2]), to: /** @type {[number, number]} */ ([2, 2]) }] }
  const { svg, faults } = draw({ ...steps, dots: [{ at: [0, 1] }, { at: [1, 1], open: true }, { at: [1, 2] }, { at: [2, 2], open: true }] })
  assert.deepEqual(faults, [])
  assert.equal([...svg.matchAll(/<circle[^>]*fill="currentColor"/g)].length, 2)
  assert.equal([...svg.matchAll(/<circle(?![^>]*fill=)/g)].length, 2)
  assert.ok(svg.indexOf('<circle') > svg.lastIndexOf('<polyline') && svg.indexOf('<circle') > svg.lastIndexOf('<path'), 'dots after the lines')
  assert.deepEqual(draw({ ...steps, dots: [{ at: [4, 1] }] }).faults, ['dot (4, 1) is outside the axes'])
})

test('a number nudged off its mark never stands against the number beside it: it moves, or the figure is refused', () => {
  // The curve crosses the mark −15, so its number is nudged towards −10: with numbers every 5 the two would read as one.
  const spec = {
    x: /** @type {[number, number]} */ ([-20, 5]),
    y: /** @type {[number, number]} */ ([-10, 25]),
    xstep: 5,
    ystep: 5,
    equal: false,
    curves: [{ y: '(x^2+22*x+112)/(x+6)' }],
    dashed: [
      { from: /** @type {[number, number]} */ ([-6, -10]), to: /** @type {[number, number]} */ ([-6, 25]) },
      { from: /** @type {[number, number]} */ ([-20, -4]), to: /** @type {[number, number]} */ ([5, 21]) }
    ],
    points: [
      { at: /** @type {[number, number]} */ ([-14, 0]), label: 'A' },
      { at: /** @type {[number, number]} */ ([0, 56 / 3]), label: 'B' },
      { at: /** @type {[number, number]} */ ([-8, 0]), label: 'C' },
      { at: /** @type {[number, number]} */ ([-10, 2]), label: 'D' },
      { at: /** @type {[number, number]} */ ([-2, 18]), label: 'E' }
    ]
  }
  assert.deepEqual(draw(spec).faults, ['x mark -10 runs into the number beside it'])
  assert.deepEqual(draw({ ...spec, xstep: 10 }).faults, [])
})
