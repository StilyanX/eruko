import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

// The only outside code the app runs is vendored into src/: the
// record's SQLite and the two faces, and what a unit vendors for itself in its core/ (a sound
// player). Each folder records its version and each file's SHA-256 in a VENDOR.json beside them;
// a changed, swapped, added or missing file fails here.
const SRC = path.join(import.meta.dirname, '..', 'src')
const folders = readdirSync(SRC, { recursive: true, withFileTypes: true })
  .filter(e => e.isFile() && e.name === 'VENDOR.json')
  .map(e => e.parentPath)
const byName = (/** @type {string} */ a, /** @type {string} */ b) => (a < b ? -1 : a > b ? 1 : 0)

test("the vendored code is SQLite, Literata and Inter, and a unit's own in its core/, each in a folder named by its version", () => {
  const paths = folders.map(f => path.relative(SRC, f).split(path.sep).join('/')).sort(byName)
  assert.deepEqual(
    paths.filter(p => !p.startsWith('units/')),
    ['record/sqlite-3.54.0', 'style/fonts/inter-5.3.0', 'style/fonts/literata-5.3.0']
  )
  for (const p of paths.filter(p => p.startsWith('units/')))
    assert.match(p, /^units\/[^/]+\/core\/[^/]+$/)
})

for (const folder of folders)
  test(`${path.relative(SRC, folder)}: every file matches its recorded hash, and no other file is there`, () => {
    /** @type {{ version: string, files: Record<string, string> }} */
    const vendor = JSON.parse(readFileSync(path.join(folder, 'VENDOR.json'), 'utf8'))
    assert.ok(
      path.basename(folder).endsWith(`-${vendor.version}`),
      'the folder is named by the version'
    )
    const present = readdirSync(folder, { recursive: true, withFileTypes: true })
      .filter(e => e.isFile() && e.name !== 'VENDOR.json')
      .map(e => path.relative(folder, path.join(e.parentPath, e.name)).split(path.sep).join('/'))
      .sort(byName)
    assert.deepEqual(present, Object.keys(vendor.files).sort(byName))
    for (const [name, sha] of Object.entries(vendor.files))
      assert.equal(
        createHash('sha256')
          .update(readFileSync(path.join(folder, name)))
          .digest('hex'),
        sha,
        name
      )
  })
