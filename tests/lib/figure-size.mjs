// Hides: how a unit's generated figures module is held to a size (the
// build list's 1.5), for each unit's own figure-size test: under 20 000 bytes before compression
// where the figures are few; a unit with hundreds stands at its measured size until a keep-or-cut
// pass over its figures brings it under.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { statSync } from 'node:fs'
import { figuresOf } from '../../scripts/lib/figures.mjs'
import { widthInBodyText } from '../../src/kernel/figure.logic.js'

/** The size a figures module may reach, in bytes. */
export const LIMIT = 20_000

/**
 * The size tests of one unit's figures.
 * @param {string} unit
 * @param {number} ceiling the most its figures.gen.js may be, in bytes
 */
export function figureSizeTests(unit, ceiling) {
  test(`${unit}: the figures module stays under ${ceiling} bytes`, () => {
    const size = statSync(
      new URL(`../../src/units/${unit}/core/figures.gen.js`, import.meta.url)
    ).size
    assert.ok(size <= ceiling, `${unit}'s figures.gen.js is ${size} bytes, over ${ceiling}`)
  })
  test(`${unit}: every figure has a viewBox and a font size, so its labels can be set at body size`, () => {
    for (const [file, svg] of Object.entries(figuresOf(unit)))
      assert.ok(widthInBodyText(svg) !== null, `${file} has no viewBox or no font-size`)
  })
}
