// The era build's code (scripts/lib/augustus-era.mjs): marks, dates, Order, the date drop, the
// Checker's string match; and the built era screens (content/era.gen.js) against their sources.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { after, badMarks, datesIn, fits, marksOf, missing, ordered, pageText, plain, reached } from '../scripts/lib/augustus-era.mjs'
import { ERA } from '../src/units/augustus/content/era.gen.js'

test('the marks of Rewrite read in the wording forms once removed, or are dropped', () => {
  const t = 'Octavian (aged 19) became consul (office: one of the two annual heads of state) at Apollonia [modern: Albania].'
  assert.deepEqual(marksOf(t).map(m => [m.kind, m.before]), [['aged', 'Octavian'], ['office', 'consul'], ['modern', 'Apollonia']])
  assert.equal(plain(t, () => true), 'Octavian, 19, became consul, one of the two annual heads of state, at Apollonia (in modern Albania).')
  assert.equal(plain(t, () => false), 'Octavian became consul at Apollonia.')
})

test('the dates a sentence states, both ends of a range, and after at the precision both give', () => {
  assert.deepEqual(datesIn('On 27 November 43 BC the law passed; in 44-43 BC money flowed; by AD 4 it ended.'), [
    { y: -43, m: 11, d: 27 },
    { y: -44 },
    { y: -43 },
    { y: 4 }
  ])
  assert.equal(after({ y: -42 }, { y: -43, m: 6 }), true)
  assert.equal(after({ y: -43 }, { y: -43, m: 6 }), false, 'a year alone is not after a date in it')
  assert.equal(after({ y: -43, m: 11 }, { y: -43, m: 6 }), true)
  assert.equal(after({ y: 1 }, { y: -1 }), true)
})

test('Order: an undated sentence takes the date of the one before it in its section; the drop keeps what the date reaches', () => {
  const s = ordered([
    { section: 'a', text: 'Nothing dated yet.' },
    { section: 'a', text: 'In 36 BC Lepidus fell.' },
    { section: 'a', text: 'He kept his priesthood.' },
    { section: 'b', text: 'In 40 BC the pact was made.' },
    { section: 'b', text: 'From 37 BC to 33 BC the term ran.' }
  ])
  assert.deepEqual(s.map(x => x.text.slice(0, 7)), ['Nothing', 'In 40 B', 'From 37', 'In 36 B', 'He kept'])
  const at = reached(s, { y: -36 })
  assert.deepEqual(at.map(x => x.text.slice(0, 7)), ['In 40 B', 'In 36 B', 'He kept'], 'no undated head, nothing that states 33 BC')
})

test('the Checker: names, numbers and quoted words outside the marks stand on the page; a mark is matched on its own', () => {
  const page = pageText('On 27 Novem-\nber 43 B.C. the Lex Titia gave Antony, Lepidus and Octavian "absolute" power.')
  assert.deepEqual(missing('The Lex Titia of 27 November 43 BC gave Antony "absolute" power.', page), [])
  assert.deepEqual(missing('Lepidus held Spain from 42 BC.', page), ['42', 'Spain'])
  assert.deepEqual(missing('Octavian (aged 20) was named.', page), [])
  const year = -43
  assert.deepEqual(badMarks('Octavian (aged 20) was named.', page, { year, born: -63, describe: () => [] }), [])
  assert.equal(badMarks('Octavian (aged 21) was named.', page, { year, born: -63, describe: () => [] }).length, 1)
  assert.equal(badMarks('He reached Tarentum [modern: Taranto].', page, { year, born: -63, describe: () => ['A Greek colony.'] }).length, 1)
})

test('every era screen fits a screen, cites sentences the build holds, and each map lists its places', () => {
  const sources = JSON.parse(readFileSync('scripts/lib/augustus-era-lessons.json', 'utf8')).lessons
  for (const [id, e] of Object.entries(ERA.lessons)) {
    const src = sources.find((/** @type {{ id: string }} */ l) => l.id === id)
    assert.ok(src, id)
    for (const sc of e.screens) {
      assert.ok(sc.sentences.every(x => src.pick.includes(x)), `${id}: a screen outside the pick`)
      const said = /** @type {Record<string, { text: string }>} */ (ERA.sentences)
      assert.ok(fits(sc.sentences.map(x => said[x]?.text ?? '').join(' ')), `${id}: a screen too long`)
    }
    if (e.map) {
      assert.equal(e.map.alt.length, e.map.places.length)
      assert.match(e.map.file, /as of \d+ BC|as of AD \d+/)
      assert.match(e.map.file, /Today’s coastline\.|Today's coastline\./)
    }
  }
})
