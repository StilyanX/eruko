// Hides: finding by what the learner types: every word typed must start a word of the text searched (a
// title, a section's name), its first four letters enough, so "division" finds Dividing and
// Divisibility. Case and accents are ignored. Tested in tests/find.test.mjs.

const STEM_LETTERS = 4

/**
 * A text as its words, lower case, without accents.
 * @param {string} text
 */
const words = text =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)

/**
 * Whether `query` finds `text`: each word typed starts a word of the text, cut to its stem.
 * @param {string} query
 * @param {string} text
 */
export function finds(query, text) {
  const asked = words(query).map(w => w.slice(0, STEM_LETTERS))
  if (!asked.length) return false
  const have = words(text)
  return asked.every(q => have.some(w => w.startsWith(q)))
}
