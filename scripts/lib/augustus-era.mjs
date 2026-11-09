// Hides: how Augustus's era screens are built from the era reference by code once the session
// has done the paper's jobs (21.01 <bu-bi-pipeline> Rewrite, Era sentences, Era pick, Era,
// Checker, Rebuild): the marked additions of Rewrite and how they read once removed, the dates a
// sentence states, Order's date order with an undated sentence taking the date of the one it
// follows, the drop of what a decision's date has not reached, the Checker's string match, and
// the screen limits. The session's answers are data (scripts/lib/augustus-era-*.json); this file
// only checks and assembles them.

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/** @typedef {{ y: number, m?: number, d?: number }} HistDate A year (negative BC), month and day where given. */

const MARK = /\s?\((aged) (\d+)\)|\s?\((office): ([^)]*)\)|\s?\[(modern): ([^\]]*)\]/g

/**
 * The marked additions of a Rewrite sentence: "(aged N)", "(office: ...)", "[modern: ...]", each
 * with the word or name just before it.
 * @param {string} text
 * @returns {{ kind: 'aged' | 'office' | 'modern', body: string, before: string, full: string }[]}
 */
export function marksOf(text) {
  return [...text.matchAll(MARK)].map(m => {
    const kind = /** @type {'aged' | 'office' | 'modern'} */ (m[1] ?? m[3] ?? m[5])
    const before = /([\p{L}'-]+)\s*$/u.exec(text.slice(0, m.index))?.[1] ?? ''
    return { kind, body: m[2] ?? m[4] ?? m[6] ?? '', before, full: m[0] }
  })
}

/** A sentence with its marked additions taken out, as the Checker matches it. @param {string} text */
export const unmarked = text => text.replace(MARK, '')

/**
 * A sentence as it reads once the marks are removed (21.01 <bu-bi-pipeline> Checker): an addition
 * kept reads in the wording rules' forms ("Octavian, 19,", "consul, one of ...,", "Apollonia (in
 * modern Albania)"); one not kept is dropped.
 * @param {string} text
 * @param {(mark: ReturnType<typeof marksOf>[number]) => boolean} keep
 */
export function plain(text, keep) {
  let out = text
  for (const m of marksOf(text)) {
    const as =
      !keep(m) ? '' : m.kind === 'aged' ? `, ${m.body},` : m.kind === 'office' ? `, ${m.body},` : ` (in modern ${m.body})`
    out = out.replace(m.full, as)
  }
  return out.replace(/,\s*([,.;:])/g, '$1').replace(/\s{2,}/g, ' ').trim()
}

/** There is no year 0: 1 BC is followed by AD 1. @param {number} y */
const astro = y => (y < 0 ? y + 1 : y)

/**
 * Every date a sentence states, in the order it states them: "27 November 43 BC", "November 43
 * BC", "43 BC", "AD 4", and both ends of "44-43 BC" or "from 27 BC to AD 14".
 * @param {string} text
 * @returns {HistDate[]}
 */
export function datesIn(text) {
  const t = unmarked(text)
  const month = `(?:(\\d{1,2}) )?(${MONTHS.join('|')}) `
  const re = new RegExp(
    `(?:${month})?(?:(\\d{1,4})(?:\\s?[-–]\\s?(\\d{1,4}))?\\s?(BC|AD)\\b|(AD)\\s?(\\d{1,4})\\b)`,
    'g'
  )
  /** @type {HistDate[]} */
  const out = []
  for (const m of t.matchAll(re)) {
    const d = m[1] ? Number(m[1]) : undefined
    const mo = m[2] ? MONTHS.indexOf(m[2]) + 1 : undefined
    const at = (/** @type {number} */ y) => ({
      y,
      ...(mo ? { m: mo } : {}),
      ...(d ? { d } : {})
    })
    if (m[7]) out.push(at(Number(m[7])))
    else if (m[3]) {
      const bc = m[5] === 'BC'
      const a = Number(m[3])
      out.push(at(bc ? -a : a))
      if (m[4]) {
        const b = Number(m[4])
        out.push({ y: bc ? -b : b })
      }
    }
  }
  return out
}

/**
 * Whether a date is after another, at the precision both give: a year alone is not after a
 * date of the same year.
 * @param {HistDate} a
 * @param {HistDate} b
 */
export function after(a, b) {
  if (a.y !== b.y) return astro(a.y) > astro(b.y)
  if (!a.m || !b.m || a.m === b.m) return !!(a.m && b.m && a.d && b.d && a.d > b.d)
  return a.m > b.m
}

/** @param {HistDate} a @param {HistDate} b */
const cmp = (a, b) => (after(a, b) ? 1 : after(b, a) ? -1 : 0)

/**
 * @template {{ section: string, text: string }} S
 * @typedef {S & { dates: HistDate[], date: HistDate | null }} Dated
 */

/**
 * Era sentences' order: each sentence takes the first date it states, or the date of the one it
 * follows in its section; a sentence with neither stays undated. Then all in date order, the
 * account's order kept among equal dates (Order).
 * @template {{ section: string, text: string }} S
 * @param {readonly S[]} sentences in the account's order
 * @returns {Dated<S>[]}
 */
export function ordered(sentences) {
  /** @type {Record<string, HistDate | null>} */
  const last = {}
  const dated = sentences.map(s => {
    const dates = datesIn(s.text)
    const date = dates[0] ?? last[s.section] ?? null
    last[s.section] = date
    return { ...s, dates, date }
  })
  return dated
    .map((s, k) => ({ s, k }))
    .sort((a, b) => (a.s.date && b.s.date ? cmp(a.s.date, b.s.date) : 0) || a.k - b.k)
    .map(x => x.s)
}

/**
 * Whether a date may fall after a decision: after it, or within the decision's own month or year
 * at a coarser precision than the decision gives ("30 BC" against August 30 BC), so it cannot be
 * placed before it.
 * @param {HistDate} d
 * @param {HistDate} decision
 */
const mayFollow = (d, decision) =>
  after(d, decision) ||
  (d.y === decision.y && ((!!decision.m && !d.m) || (d.m === decision.m && !!decision.d && !d.d)))

/**
 * What a decision's era may draw on: every sentence that states or takes no date that may fall
 * after the decision, less an undated sentence with no dated one before it in its section.
 * @template {{ dates: HistDate[], date: HistDate | null }} S
 * @param {readonly S[]} sentences
 * @param {HistDate} decision
 */
export const reached = (sentences, decision) =>
  sentences.filter(
    s => s.date && !s.dates.some(d => mayFollow(d, decision)) && !mayFollow(s.date, decision)
  )

/**
 * A page's text as the Checker reads it: words broken at a line end joined, the space run
 * collapsed.
 * @param {string} page
 */
export const pageText = page =>
  page
    .replace(/(\p{L})-\n\s*(\p{L})/gu, '$1$2')
    .replace(/\s+/g, ' ')
    .replace(/B\.\s?C\./g, 'BC')
    .replace(/A\.\s?D\./g, 'AD')

/** Words that open a sentence or are plain English, never a name the page must hold. */
const PLAIN = new Set([...MONTHS, 'BC', 'AD'])

/** Plain English words a rewritten sentence may open with, which name nothing. */
const OPENERS = new Set(
  'A An The This That These Those He She It They His Her Its Their There Then After Before Until When While During Meanwhile In On At By From Of To With For As Some Someone Each Both Neither One Two Three Many Most Several Also Later Such No Not'.split(' ')
)

/**
 * The Checker's string match: every name, number and quoted word of a sentence, outside its
 * marks, appears in its page. A capitalised word opening the sentence passes when the page holds
 * it in any case. Returns what does not appear.
 * @param {string} sentence
 * @param {string} page as pageText gives it
 */
export function missing(sentence, page) {
  const t = unmarked(sentence)
  const numbers = new Set(page.match(/\d+/g) ?? [])
  const lower = page.toLowerCase()
  const quoted = [...t.matchAll(/["“]([^"”]{3,})["”]|(?<=^|\s)['‘]([^'’]{3,})['’](?!\p{L})/gu)].map(
    m => m[1] ?? m[2] ?? ''
  )
  const words = [...t.matchAll(/(^|[.;:!?]\s+|\S)?(\b\p{Lu}[\p{L}'’-]*)/gu)]
  const names = words.flatMap(m => {
    const w = (m[2] ?? '').replace(/['’]s$/, '').replace(/['’-]$/, '')
    if (!w || PLAIN.has(w)) return []
    const opening = m.index === 0 || /^[.;:!?]|^["“‘'(]$/.test(m[1] ?? '')
    if (opening) return OPENERS.has(w) || lower.includes(w.toLowerCase()) ? [] : [w]
    return page.includes(w) ? [] : [w]
  })
  return [
    ...(t.match(/\d+/g) ?? []).filter(n => !numbers.has(n)),
    ...quoted.filter(q => !page.includes(q)),
    ...names
  ]
}

/**
 * Each marked addition matched on its own (Checker): "(aged N)" equals the year of the sentence
 * less the birth year; "(office: ...)" names no name or number the page lacks; "[modern: ...]"
 * stands in the description Pleiades gives a place of the name before it. Returns the marks that
 * fail.
 * @param {string} sentence
 * @param {string} page as pageText gives it
 * @param {{ year: number | null, born: number, describe: (name: string) => readonly string[] }} p
 */
export function badMarks(sentence, page, p) {
  return marksOf(sentence).filter(m => {
    if (m.kind === 'aged') return p.year === null || Number(m.body) !== astro(p.year) - astro(p.born)
    if (m.kind === 'office') return missing(m.body.replace(/^\p{Lu}/u, c => c.toLowerCase()), page).length > 0
    return !p.describe(m.before).some(d => d.includes(m.body))
  })
}

const SCREEN = { words: 150, lines: 17, width: 55 }

/**
 * Whether a screen's text is within 150 words and 17 lines at 55 characters.
 * @param {string} text
 */
export function fits(text) {
  const words = text.split(/\s+/).filter(Boolean)
  let lines = 0
  let width = 0
  for (const w of words)
    if (width && width + 1 + w.length <= SCREEN.width) width += 1 + w.length
    else {
      lines += 1
      width = w.length
    }
  return words.length <= SCREEN.words && lines <= SCREEN.lines
}
