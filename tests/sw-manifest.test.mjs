import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { OUT, filesOf, manifestOf } from '../scripts/lib/sw-manifest.mjs'

// The service worker keeps the files its manifest lists, by hash:
// a file changed, added or removed after the manifest was written would be served stale offline.
test('the service worker manifest lists every file of the app as it is', () => {
  assert.equal(
    readFileSync(OUT, 'utf8'),
    manifestOf(filesOf()),
    'run node scripts/gen/sw-manifest.mjs'
  )
})
