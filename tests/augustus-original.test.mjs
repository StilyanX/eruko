// The end level's original against "A Self-Study System" (Biography, the end level's original):
// the chapters a sentence's evidence cites alone, cut from the stored LacusCurtius pages of
// Shipley's Loeb text (1924), Latin and Greek, the English dropped.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { cutOriginal, wordsNotPrinted } from '../scripts/lib/augustus-original.mjs'

const pages = [1, 2, 3, 4, 5, 6].map(p =>
  readFileSync(new URL(`../scripts/lib/augustus-shipley-${p}.html`, import.meta.url), 'utf8')
)
const { chapters } = cutOriginal(pages, [1, 5, 6, 10, 15, 16, 17, 25, 27, 34, 35])
/** @param {string} t */
const words = t => t.split(' ').length
/** Lines of a greedy word wrap at 55 characters. @param {string} t */
const lines = t =>
  t
    .split(' ')
    .reduce(
      ({ n, at }, w) =>
        at === 0
          ? { n, at: w.length }
          : at + 1 + w.length <= 55
            ? { n, at: at + 1 + w.length }
            : { n: n + 1, at: w.length },
      { n: 1, at: 0 }
    ).n
/** @param {number} n */
const chapter = n => {
  const c = chapters.find(x => x.n === n)
  assert.ok(c, `chapter ${n} is cut`)
  return c
}

// The paper names chapters 6 and 17 as printed with gaps; in the transcription as fetched only
// chapter 6 holds a run of dots (". . . . . . ." in the Latin), and chapter 17 prints whole in both
// languages, so the cut keeps it. The paper's own count rests on a copy that read otherwise.
test('the cut leaves out chapter 6, which holds a run of dots, and keeps the ten that print whole', () => {
  assert.deepEqual(
    chapters.map(c => c.n),
    [1, 5, 10, 15, 16, 17, 25, 27, 34, 35]
  )
})

test('no chapter holds English, a line number, a note link or a gap', () => {
  for (const c of chapters)
    for (const t of [c.latin, c.greek]) {
      assert.doesNotMatch(t, /º|\d|\?|\.\s?\.|[<>]|\s\s|^\s|\s$/, `chapter ${c.n}`)
      assert.doesNotMatch(t, /\b(the|and|of)\b/, `chapter ${c.n} holds English`)
    }
  assert.match(chapter(1).latin, /^Annós undéviginti/)
  assert.match(chapter(1).greek, /^Ἐτῶν δεκαεννέα/)
})

test('chapter 35 does not run into the Appendix', () => {
  const c = chapter(35)
  assert.match(c.latin, /^Tertium .* sextum\.$/)
  assert.match(c.greek, /^Τρισκαιδεκάτην .* ἕκτον\.$/)
  assert.doesNotMatch(c.latin, /Summá/)
  assert.doesNotMatch(c.greek, /Συνκεφαλαίωσις/)
})

test('every word of every chapter appears in the transcription', () => {
  for (const c of chapters) assert.deepEqual(wordsNotPrinted(c, pages), [], `chapter ${c.n}`)
})

// The paper's figures (939 and 1,025 words; chapter 15 143 and 165 words, 19 and 18 lines) were
// counted on a copy that split words at the line numbers ("do minatione", "vindicá vi"); the
// transcription's own markup runs those words on, so its counts are lower. Chapter 15 is still over
// the 17 lines of a screen in Latin and at it in Greek, and no other passage is over either limit.
test('the passages as the transcription prints them, counted at spaces', () => {
  const nine = chapters.filter(c => c.n !== 17)
  assert.equal(
    nine.reduce((n, c) => n + words(c.latin), 0),
    801
  )
  assert.equal(
    nine.reduce((n, c) => n + words(c.greek), 0),
    832
  )
  assert.deepEqual([words(chapter(15).latin), words(chapter(15).greek)], [126, 128])
  assert.deepEqual([lines(chapter(15).latin), lines(chapter(15).greek)], [19, 18])
  const rest = chapters.filter(c => c.n !== 15)
  assert.equal(Math.max(...rest.flatMap(c => [words(c.latin), words(c.greek)])), 119)
  assert.equal(Math.max(...rest.flatMap(c => [lines(c.latin), lines(c.greek)])), 16)
})
