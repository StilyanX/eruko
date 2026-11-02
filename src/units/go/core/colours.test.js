// The board's colours (src/units/go/core/colours.logic.js) are the ones the style tokens give.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { BOARD_COLOURS } from './colours.logic.js'

test('BOARD_COLOURS holds the values of --board-* in style/tokens.css', () => {
  const tokens = readFileSync(new URL('../../../style/tokens.css', import.meta.url), 'utf8')
  for (const [role, hex] of Object.entries(BOARD_COLOURS))
    assert.match(tokens, new RegExp(`--board-${role}:\\s*${hex};`), role)
})
