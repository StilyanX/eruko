// The C++ course's entry (src/units/cpp/core/entry.logic.js): its address, its record part, its
// pages, the one host it reaches, and its sections from the course file.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { CPP_PART, RUNNER, START, UNIT } from './entry.logic.js'
import { SECTIONS } from './course.gen.js'

test('the entry: the course under Programming, its own record part, Start, Review and the work list', () => {
  assert.equal(UNIT.title, 'C++ course')
  assert.equal(UNIT.slug, 'explore/programming/cpp')
  assert.deepEqual(UNIT.discipline, { id: 'programming', name: 'Programming' })
  assert.equal(UNIT.order, 6)
  assert.deepEqual(UNIT.parts, [{ name: 'cpp', key: 'aether-cpp', title: 'C++' }])
  assert.equal(UNIT.parts[0], CPP_PART)
  assert.deepEqual(UNIT.hosts, { connect: ['http://127.0.0.1:8767'] })
  assert.equal(RUNNER, 'http://127.0.0.1:8767')
  assert.deepEqual(
    UNIT.pages.map(p => p.file),
    ['cpp/start', 'cpp/review', 'cpp/work']
  )
  assert.equal(UNIT.pages[0], START)
  assert.deepEqual(
    UNIT.sections?.slice(0, SECTIONS.length),
    SECTIONS,
    "the course's sections, then the track's stages"
  )
  assert.deepEqual(
    UNIT.sources.slice(0, 5).map(s => s.title),
    [
      'Beginning C++23, for the order of the parts of the language',
      'C++ Core Guidelines, the style',
      'N4950, the C++23 working draft, to check each fact',
      'AtCoder Beginner Contest, the rated contests',
      'GCC, the compiler'
    ],
    "the course's sources first, then the track's"
  )
})
