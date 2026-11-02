// Hides: what the generated figures module of a unit holds and how its freshness is stamped, for
// scripts/gen/figures.mjs and tests/figures-generated.test.mjs alike.
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import temml from 'temml'
import { generated } from './generated.mjs'

const ROOT = path.resolve(import.meta.dirname, '..', '..')

/**
 * Every figure of a unit, its text by file name, in name order: each SVG as it is, and, for a unit
 * that draws its own (a core/figures.logic.js giving `drawnFigures(specs, mathml)`), each .json
 * spec as the HTML that unit draws from it, its formulas set by Temml.
 * @param {string} unit
 * @returns {Promise<Record<string, string>>}
 */
export async function figuresOf(unit) {
  const dir = path.join(ROOT, 'src', 'units', unit, 'content', 'figures')
  const names = readdirSync(dir).sort()
  const read = (/** @type {string} */ ext) =>
    Object.fromEntries(
      names.filter(n => n.endsWith(ext)).map(n => [n, readFileSync(path.join(dir, n), 'utf8')])
    )
  const hook = path.join(ROOT, 'src', 'units', unit, 'core', 'figures.logic.js')
  const drawn = existsSync(hook)
    ? (await import(pathToFileURL(hook).href)).drawnFigures(
        read('.json'),
        (/** @type {string} */ tex) => temml.renderToString(tex, { throwOnError: true })
      )
    : {}
  return Object.fromEntries(
    Object.entries({ ...read('.svg'), ...drawn }).sort(([a], [b]) => (a < b ? -1 : 1))
  )
}

/**
 * The figures module of a unit, as the generator writes it: the header, the line naming its source
 * and the figures' SHA-256, then every figure.
 * @param {string} unit
 */
export async function moduleOf(unit) {
  const figures = await figuresOf(unit)
  const sha = createHash('sha256').update(JSON.stringify(figures)).digest('hex')
  return generated(
    'scripts/gen/figures.mjs',
    `// From src/units/${unit}/content/figures, sha256 ${sha}.\n// prettier-ignore\nexport const FIGURES = ${JSON.stringify(figures)}\n`
  )
}
