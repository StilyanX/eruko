// Which failures count as a page's code not arriving (the failure page says offline or new version).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isChunkError } from '../src/shell/load-failure.js'

test("a page's code failing to arrive is a chunk error; anything else is not", () => {
  for (const message of [
    'Failed to fetch dynamically imported module: http://x/eruko/assets/a.js',
    'error loading dynamically imported module: http://x/eruko/assets/a.js',
    'Importing a module script failed.'
  ])
    assert.ok(isChunkError(new Error(message)), message)
  assert.ok(!isChunkError(new TypeError("Cannot read properties of undefined (reading 'id')")))
  assert.ok(!isChunkError(null))
})
