import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { moduleOf } from '../scripts/lib/figures.mjs'
import { figureUnits } from '../scripts/lib/maths-units.mjs'

// Each unit with figures reads them from one generated module
// (scripts/gen/figures.mjs), made from the figures as they are now.
for (const unit of figureUnits())
  test(`${unit}: the figures module is made from the figures as they are`, async () => {
    const gen = readFileSync(new URL(`../src/units/${unit}/core/figures.gen.js`, import.meta.url), 'utf8')
    assert.equal(
      gen,
      await moduleOf(unit),
      `${unit}'s figures changed: run node scripts/gen/figures.mjs`
    )
  })
