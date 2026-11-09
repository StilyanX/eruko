import { test } from 'node:test'
import assert from 'node:assert/strict'
import { drawMap, yearName } from '../scripts/lib/augustus-map.mjs'

// The paper's own example: "Mutina: 37 km north-west of Bononia. Antony's legions: at Mutina."
// Coordinates of the modern towns (Modena 44.6458 N 10.9255 E, Bologna 44.4949 N 11.3426 E);
// the haversine gives 37.06 km at a bearing of 297°, north-west.
const sentences = {
  s1: 'The Senate sends the consuls north from Bononia.',
  s2: "Antony's legions hold Decimus inside Mutina.",
  s3: 'Forum Gallorum lies on the road between.'
}
const places = [
  { name: 'Bononia', sentence: 's1', lat: 44.4949, lon: 11.3426 },
  { name: 'Mutina', sentence: 's2', lat: 44.6458, lon: 10.9255 },
  { name: "Antony's legions", sentence: 's2', at: 'Mutina' },
  { name: 'Forum Gallorum', sentence: 's3', lat: 44.59, lon: 11.08, approximate: true }
]
const map = drawMap({
  asOf: -43,
  places,
  sentences,
  coast: [
    [
      [10.5, 44.9],
      [11.5, 44.9]
    ]
  ]
})

test('the text gives each place its distance and direction from the first one named', () => {
  assert.equal(map.alt[0], 'Bononia: the first place named.')
  assert.equal(map.alt[1], 'Mutina: 37 km north-west of Bononia.')
  assert.equal(map.alt[2], "Antony's legions: at Mutina.")
  assert.match(map.alt[3] ?? '', /^Forum Gallorum: \d+ km north-west of Bononia\.$/)
  assert.equal(map.places[2]?.lat, 44.6458)
})

test('the file carries its date, a scale bar, north, and only currentColor', () => {
  assert.equal(map.asOf, -43)
  assert.ok(map.file.includes('>as of 43 BC<'))
  assert.match(map.file, />\d+ km</)
  assert.ok(map.file.includes('>N<'))
  assert.ok(map.file.includes(">Antony's legions<"))
  const colours = [...map.file.matchAll(/(?:fill|stroke|color)="([^"]*)"/g)].map(m => m[1])
  assert.deepEqual(
    [...new Set(colours)].sort((a = '', b = '') => a.localeCompare(b)),
    ['currentColor', 'none']
  )
  assert.doesNotMatch(map.file, /style=|#[0-9a-f]{3}|rgb|marker/i)
  assert.equal(yearName(14), 'AD 14')
})

test('an approximate site is an open mark and its label says so', () => {
  assert.ok(map.file.includes('>Forum Gallorum, site approximate<'))
  assert.equal((map.file.match(/r="4" fill="none"/g) ?? []).length, 1)
  assert.equal((map.file.match(/r="3" fill="currentColor"/g) ?? []).length, 2)
})

test('the same table draws the same file', () => {
  assert.equal(
    drawMap({
      asOf: -43,
      places,
      sentences,
      coast: [
        [
          [10.5, 44.9],
          [11.5, 44.9]
        ]
      ]
    }).file,
    map.file
  )
})

test('a table with a fault is a build error', () => {
  const draw = (/** @type {import('../scripts/lib/augustus-map.mjs').Place[]} */ p) => () =>
    drawMap({ asOf: -43, places: p, sentences })
  assert.throws(draw([{ name: 'Bononia', sentence: 's1' }]), /no coordinates/)
  assert.throws(
    draw([{ name: 'Bononia', sentence: 's1', lat: Number.NaN, lon: 11 }]),
    /no coordinates/
  )
  assert.throws(draw([{ name: "Antony's legions", sentence: 's2', at: 'Mutina' }]), /no place/)
  assert.throws(draw([{ name: 'Rome', sentence: 's1', lat: 41.9, lon: 12.5 }]), /not in sentence/)
  assert.throws(draw([{ name: 'Bononia', sentence: 's9', lat: 44.5, lon: 11.3 }]), /does not hold/)
  assert.throws(() => yearName(0), /not a year/)
})
