// Hides: how the end level's original is cut from the stored pages of the LacusCurtius
// transcription of the Loeb text of Shipley (1924), Monumentum Ancyranum (augustus-shipley-<part>.html):
// each page prints the Latin, the Greek and the English side by side, a row of three cells, and a
// chapter opens at its number's anchor in the Latin and in the Greek cell ("5L", "5G"). The cut
// keeps the Latin and Greek cells alone, so the English is dropped; it drops the links to the
// page's notes, the line numbers, the page numbers and Thayer's marks on the Loeb's line numbering
// (º), and keeps the words as the transcription prints them, a word it breaks with a space
// included. The inscription's heading, the row before line 1 of chapter 1, is in no chapter; nor
// is the Appendix after chapter 35, which sums the money and the works. A chapter missing in
// either language, or holding a question mark or a run of dots in either, is left out.

export const TITLE =
  'Res Gestae Divi Augusti (Monumentum Ancyranum), Latin and Greek, Loeb text of F. W. Shipley (1924), LacusCurtius transcription'

const CELL = /<TD CLASS="(Latin|Greek)">([\s\S]*?)<\/TD>/g
const CHAPTER = /<A CLASS="(?:Greek_)?chapter" NAME="(\d+)[LG]">\d+<\/A>/
// A line number, a link to a note, a mark on the line numbering: anchors whose text is no word.
const NOT_WORDS =
  /<A CLASS="(?:sec|ref|correction|comment)"[\s\S]*?<\/A>|<SPAN CLASS="pagenum">[^<]*<\/SPAN>/g
const GAP = /\?|\.\s?\./
// The heading of the Appendix after chapter 35 ("Summary" on the last page), where the chapters end.
const APPENDIX = /<H2 CLASS="smallcaps">\s*Summary/

/**
 * The words of some of a page's markup as printed: tags and the anchors that are no word gone,
 * entities read, the word joiner and the soft hyphen dropped, and §, a mark of the edition and no
 * word, dropped; whitespace collapsed to single spaces.
 * @param {string} html
 */
const plain = html =>
  html
    .replace(NOT_WORDS, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&shy;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/[⁠­§]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

/**
 * Each chapter's markup in one language: the cells of the pages in order, cut at the chapter
 * anchors. The Appendix after chapter 35 is cut off at its heading.
 * @param {string[]} pages
 * @param {'Latin' | 'Greek'} language
 */
function chaptersIn(pages, language) {
  const stream = pages
    .flatMap(p =>
      [...(p.split(APPENDIX)[0] ?? '').matchAll(CELL)]
        .filter(c => c[1] === language)
        .map(c => c[2] ?? '')
    )
    .join(' ')
  const parts = stream.split(CHAPTER)
  /** @type {Map<number, string>} */
  const out = new Map()
  for (let i = 1; i < parts.length; i += 2) {
    const n = Number(parts[i])
    out.set(n, (out.get(n) ?? '') + ' ' + (parts[i + 1] ?? ''))
  }
  const one = out.get(1)
  const line1 = new RegExp(`<A CLASS="sec" NAME="1${language[0]}\\.1"`)
  const at = one?.search(line1) ?? -1
  if (one === undefined || at < 0) throw new Error(`No line 1 of chapter 1 in the ${language}.`)
  out.set(1, one.slice(at))
  return out
}

/**
 * The original of the listed chapters, in number order, each that prints whole in both languages.
 * @param {string[]} pages the six pages of the transcription, Part I to Part VI, as fetched
 * @param {number[]} wanted
 * @returns {{ title: string, chapters: { n: number, latin: string, greek: string }[] }}
 */
export function cutOriginal(pages, wanted) {
  const latin = chaptersIn(pages, 'Latin')
  const greek = chaptersIn(pages, 'Greek')
  const chapters = [...new Set(wanted)]
    .sort((a, b) => a - b)
    .map(n => ({ n, latin: plain(latin.get(n) ?? ''), greek: plain(greek.get(n) ?? '') }))
    .filter(c => c.latin && c.greek && !GAP.test(c.latin) && !GAP.test(c.greek))
  return { title: TITLE, chapters }
}

/**
 * The words of a cut chapter that its transcription does not print: each word, counted at
 * spaces, is looked for in the pages' words (string match).
 * @param {{ latin: string, greek: string }} chapter
 * @param {string[]} pages
 */
export function wordsNotPrinted(chapter, pages) {
  const text = pages.map(plain).join(' ')
  return `${chapter.latin} ${chapter.greek}`.split(' ').filter(w => !text.includes(w))
}
