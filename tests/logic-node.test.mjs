// Every .logic.js file loads with no browser at all, so the logic
// a screen runs is the logic the tests run.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

for (const name of ['window', 'document', 'navigator']) Reflect.deleteProperty(globalThis, name)

const SRC = path.join(import.meta.dirname, '..', 'src')
const files = readdirSync(SRC, { recursive: true, withFileTypes: true })
  .filter(e => e.isFile() && e.name.endsWith('.logic.js'))
  .map(e => path.join(e.parentPath, e.name))

test('every .logic.js file loads with window, document and navigator removed', async () => {
  assert.ok(files.length > 0)
  for (const file of files) {
    assert.equal(Reflect.has(globalThis, 'navigator'), false)
    await assert.doesNotReject(import(pathToFileURL(file).href), path.relative(SRC, file))
  }
})
