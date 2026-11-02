import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LANGUAGES, TRANSLATED, languageShown } from './languages.logic.js'

test('the list runs in tag order, each tag once', () => {
  const tags = LANGUAGES.map(([t]) => t)
  assert.deepEqual(tags, [...tags].sort((a = '', b = '') => (a < b ? -1 : a > b ? 1 : 0)))
  assert.equal(new Set(tags).size, tags.length)
})

test('the language is shown only once the pages are written in a second language', () => {
  assert.deepEqual(TRANSLATED, ['en'])
  assert.equal(languageShown(), false)
  for (const tag of TRANSLATED) assert.ok(LANGUAGES.some(([t]) => t === tag))
})
