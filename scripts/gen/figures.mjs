// Hides: how every figure of a unit (its content/figures/) becomes one module the app imports with no build:
// a plain module cannot read an SVG file as text, so the figures are written into one; a unit that draws
// its own (core/figures.logic.js) has its .json specs drawn into the same module.
//   src/units/<unit>/core/figures.gen.js   export const FIGURES = { [file name]: its SVG or HTML text }
// The header carries the SHA-256 of the figures it was made from, and
// tests/figures-generated.test.mjs fails when a figure changed after it. Run after adding or
// changing a figure: node scripts/gen/figures.mjs
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { figuresOf, moduleOf } from '../lib/figures.mjs'
import { figureUnits } from '../lib/maths-units.mjs'

const ROOT = path.resolve(import.meta.dirname, '..', '..')
for (const unit of figureUnits()) {
  writeFileSync(
    path.join(ROOT, 'src', 'units', unit, 'core', 'figures.gen.js'),
    await moduleOf(unit)
  )
  console.log(`gen-figures: ${unit}: ${Object.keys(await figuresOf(unit)).length} figures`)
}
