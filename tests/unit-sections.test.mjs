// A unit's sections on its unit page run from its first item on, each once, in order, with no gap.
// Each unit's own tests hold the count of its items against the last section's end.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { UNITS } from '../src/shell/registry.js'

for (const unit of UNITS.filter(u => u.sections)) {
  test(`${unit.slug}: the sections run from the first item on, each once, with no gap`, () => {
    const { sections } = unit
    assert.ok(sections)
    let next = 1
    for (const s of sections) {
      assert.equal(s.first, next, s.title)
      assert.ok(s.last >= s.first, s.title)
      next = s.last + 1
    }
  })
}
