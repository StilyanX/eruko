// Hides: Augustus's end level (A Self-Study System, Biography, "The end level", and the End level
// check of the build): which sentences and decisions each part of the round can draw from the
// built life, the draw of a round from those pools by the round's lines, `shown` and `tally`, the
// key of every entry and the round's line, when the round is due, how a Reading passage and the
// list of ten are paged, and the reading of Judgment over the scored forecasts. Pure functions of
// the built life, the record and a seed; a draw is the same for the same seed.
import { RETENTION, addDays, writeLine } from '../../../kernel/days.logic.js'
import { shuffle } from '../../../kernel/practice.logic.js'
import { sentenceId } from './decode.logic.js'

/**
 * A sentence of the course with where it stands: its id, its place among all the course's
 * sentences counted from 0 in lesson order (each lesson's situation before its outcome), and its
 * lesson's index.
 * @typedef {Readonly<{ id: import('./decode.logic.js').SentenceId, place: number, lesson: number,
 *   text: string, evidence: string, dispute: string }>} Placed
 */
/** @typedef {'disputed' | 'staked' | 'unstaked'} Footing The footing a claim can have. */

// The paper's lists

/** The eight witnesses of Witnesses, in the paper's order. */
export const WITNESSES = [
  'Cassius Dio',
  'Appian',
  'Cicero',
  'Suetonius',
  'Plutarch',
  'Nicolaus',
  'Velleius',
  'the Res Gestae'
]

/** How the evidence names each witness: Dio as Cassius Dio, Nikolaos of Damascus and Nic. Dam. as Nicolaus. */
const NAMES = new Map([
  ['Cassius Dio', /\bDio\b/],
  ['Appian', /\bAppian\b/],
  ['Cicero', /\bCicero\b/],
  ['Suetonius', /\bSuetonius\b/],
  ['Plutarch', /\bPlutarch\b/],
  ['Nicolaus', /\bNicolaus\b|\bNikolaos of Damascus\b|\bNic\. Dam\./],
  ['Velleius', /\bVelleius\b/],
  ['the Res Gestae', /\bRes Gestae\b/]
])

/** The staked three of Footing, and the unstaked four. */
const STAKED = ['the Res Gestae', 'Velleius', 'Nicolaus']
const UNSTAKED = ['Cassius Dio', 'Appian', 'Suetonius', 'Plutarch']

/** The three classes of Footing, in the order the first that applies is taken. */
/** @type {readonly Footing[]} */
export const FOOTINGS = ['disputed', 'staked', 'unstaked']

/** Own words: a sentence holding one of these gives its witness away. */
const OWN_WORDS = [
  'Cassius Dio',
  'Appian',
  'Cicero',
  'Suetonius',
  'Plutarch',
  'Nicolaus',
  'Velleius',
  'Res Gestae',
  'Dio',
  'Nikolaos',
  'Augustus wrote',
  'Augustus himself',
  'historian',
  'ancient writer',
  'ancient source',
  'according to'
]

/** Hedges: Footing leaves out a sentence holding one of these. */
const HEDGES = [
  'scholars',
  'apparently',
  'probably',
  'perhaps',
  'possibly',
  'uncertain',
  'estimate',
  'estimates',
  'may have',
  'disagree',
  'reportedly',
  'allegedly',
  'supposedly',
  'claimed',
  'said to'
]

/**
 * The seven sections of Gaps and the lessons listed under each, numbered from 1 as the paper
 * numbers them.
 */
export const GAPS_SECTIONS = [
  [5, 10, 11, 12],
  [13, 15],
  [18, 20, 21, 22, 25, 26, 27, 29, 31, 32, 33],
  [35, 37, 38, 39, 41, 43, 45],
  [46],
  [47, 50, 51, 52, 53],
  [54, 55]
]

/** The turn of Gaps: lesson 31 on remainder 0 for section 3, lesson 35 on 1 for section 4, 54 or 55 for section 7. */
const TURN = { third: 31, fourth: 35, even: 54, odd: 55 }

// Reading the evidence

/**
 * The evidence read part by part at the semicolons, a part that begins with a number carrying on
 * the one before it.
 * @param {string} evidence
 * @returns {string[]}
 */
export function evidenceParts(evidence) {
  /** @type {string[]} */
  const parts = []
  for (const raw of evidence.split(';')) {
    const part = raw.trim()
    if (!part) continue
    const before = parts.at(-1)
    if (/^\d/.test(part) && before !== undefined) parts[parts.length - 1] = `${before}; ${part}`
    else parts.push(part)
  }
  return parts
}

/**
 * The witnesses of the eight a part of the evidence names.
 * @param {string} part
 */
const named = part => WITNESSES.filter(w => NAMES.get(w)?.test(part))

/**
 * The one witness a sentence's evidence names when every part names one of the eight and no
 * part names another; else null.
 * @param {string} evidence
 */
export function soleWitness(evidence) {
  const parts = evidenceParts(evidence).map(named)
  const all = new Set(parts.flat())
  const [only] = all
  return parts.length && parts.every(p => p.length) && all.size === 1 && only ? only : null
}

/**
 * A sentence's class of Footing, the first that applies, or null when it is in none.
 * @param {{ evidence: string, dispute: string }} s
 * @returns {Footing | null}
 */
export function footingOf(s) {
  if (s.dispute.trim()) return 'disputed'
  const parts = evidenceParts(s.evidence).map(named)
  if (!parts.length) return null
  if (parts.every(p => p.some(w => STAKED.includes(w)))) return 'staked'
  if (parts.some(p => p.some(w => UNSTAKED.includes(w)))) return 'unstaked'
  return null
}

/**
 * The chapters of the Res Gestae a sentence's evidence cites: "Res Gestae 15-16" cites 15 and 16.
 * @param {string} evidence
 * @returns {number[]}
 */
export function chaptersCited(evidence) {
  /** @type {Set<number>} */
  const out = new Set()
  for (const part of evidenceParts(evidence)) {
    const after = part.split(/\bRes Gestae\b/)[1]
    if (after === undefined) continue
    for (const m of after.matchAll(/(\d+)(?:\.\d+)*(?:\s*[-–]\s*(\d+))?/g)) {
      const from = Number(m[1])
      const to = m[2] ? Number(m[2]) : from
      for (let c = from; c <= to; c++) out.add(c)
    }
  }
  return [...out].sort((a, b) => a - b)
}

/**
 * The chapter a sentence cites alone, or null.
 * @param {string} evidence
 */
export const citedAlone = evidence => {
  const cited = chaptersCited(evidence)
  return cited.length === 1 ? (cited[0] ?? null) : null
}

/**
 * Whether a text holds any of the words, each as a whole word or phrase, with no regard to capitals.
 * @param {string} text
 * @param {readonly string[]} words
 */
const holds = (text, words) =>
  words.some(w => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text))

// The course's sentences

/**
 * Every sentence of the life with its id, place and lesson.
 * @param {import('./decode.logic.js').Life} life
 * @returns {Placed[]}
 */
export function placed(life) {
  /** @type {Placed[]} */
  const out = []
  life.lessons.forEach((lesson, i) =>
    [...lesson.situation, ...lesson.outcome].forEach((sc, a) =>
      sc.sentences.forEach((s, b) =>
        out.push({
          id: sentenceId(lesson.id, a, b),
          place: out.length,
          lesson: i,
          text: s.text,
          evidence: s.evidence ?? '',
          dispute: s.dispute ?? ''
        })
      )
    )
  )
  return out
}

/**
 * The chapters of the Res Gestae that a sentence of the life cites alone, in number order: the
 * chapters the Original job cuts where the transcription prints them whole.
 * @param {import('./decode.logic.js').Life} life
 */
export const readingChapters = life =>
  [...new Set(placed(life).flatMap(s => citedAlone(s.evidence) ?? []))].sort((a, b) => a - b)

/**
 * The pools of every part, from the built life and the chapters the Original job holds.
 * The Reading lists every sentence that cites alone a chapter it holds (a key) or a chapter it
 * does not (the eleventh), save one in a Gaps lesson where its chapter is also cited alone in a
 * lesson that is not; the Gaps lessons are those the paper lists, save a lesson that holds a
 * sentence the Reading lists, since such a lesson is not a Gaps decision. Witnesses takes the
 * other sentences at an odd place, Footing those at an even one, neither from a Gaps lesson, and
 * neither a sentence whose own words give its answer away; Footing also leaves out a hedge.
 * @param {import('./decode.logic.js').Life} life
 * @param {readonly number[]} held the chapters whose Latin and Greek the Original job holds
 */
export function pools(life, held) {
  const all = placed(life)
  const listed = GAPS_SECTIONS.flat().map(n => n - 1)
  const alone = all.flatMap(s => {
    const c = citedAlone(s.evidence)
    return c === null ? [] : [{ s, c }]
  })
  // A chapter cited alone in a lesson outside the paper's Gaps lists gives up its sentences in a Gaps lesson.
  const outside = new Set(alone.filter(x => !listed.includes(x.s.lesson)).map(x => x.c))
  const reading = alone.filter(x => !listed.includes(x.s.lesson) || !outside.has(x.c))
  const readingLessons = new Set(reading.map(x => x.s.lesson))
  const sections = GAPS_SECTIONS.map(list =>
    list.map(n => n - 1).filter(i => !readingLessons.has(i))
  )
  const gapsLessons = new Set(sections.flat())
  const readingIds = new Set(reading.map(x => x.s.id))
  const rest = all.filter(s => !readingIds.has(s.id) && !gapsLessons.has(s.lesson))
  const free = rest.filter(s => !holds(s.text, OWN_WORDS))
  /** @type {Record<string, Placed[]>} */
  const witnesses = Object.fromEntries(WITNESSES.map(w => [w, []]))
  /** @type {Record<Footing, Placed[]>} */
  const footing = { disputed: [], staked: [], unstaked: [] }
  for (const s of free)
    if (s.place % 2 === 1) {
      const w = soleWitness(s.evidence)
      if (w) witnesses[w]?.push(s)
    } else if (!holds(s.text, HEDGES)) {
      const f = footingOf(s)
      if (f) footing[f].push(s)
    }
  return {
    sections,
    lessons: life.lessons.map(l => String(l.id)),
    keys: Object.fromEntries(
      held.map(c => [c, reading.filter(x => x.c === c).map(x => String(x.s.id))])
    ),
    eleventh: reading.filter(x => !held.includes(x.c)).map(x => String(x.s.id)),
    witnesses,
    footing,
    byId: new Map(all.map(s => [String(s.id), s]))
  }
}

/** @typedef {ReturnType<typeof pools>} Pools */

// The draw

/** The end level with nothing yet: no round, no line. @type {import('./decode.logic.js').End} */
export const NO_END = { judged: null, lines: [], shown: [], tally: {} }

/**
 * Whether the end level's round is the item in hand: one is open and not yet done, or one is due.
 * @param {import('./decode.logic.js').LifeState | undefined} life
 * @param {string} today
 */
export function roundInHand(life, today) {
  const end = life?.end ?? NO_END
  return Boolean(end.round && !end.round.done) || roundDue(end, life?.closed, today)
}

/**
 * A number from 0 up to 1 each time, the same run for the same seed (a 32-bit hash of the seed,
 * then mulberry32).
 * @param {string} seed
 * @returns {() => number}
 */
function seeded(seed) {
  let a = 2166136261
  for (let i = 0; i < seed.length; i++) a = Math.imul(a ^ seed.charCodeAt(i), 16777619)
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * `n` items of a pool: none the round before showed, unless that leaves fewer than `n`; then
 * those shown in the fewest rounds, a tie broken by chance.
 * @template {string | number} T
 * @param {readonly T[]} pool
 * @param {number} n
 * @param {ReadonlySet<string>} before what the round before showed
 * @param {Readonly<Record<string, number>>} tally
 * @param {() => number} random
 * @returns {T[]}
 */
function least(pool, n, before, tally, random) {
  const fresh = pool.filter(x => !before.has(String(x)))
  const from = fresh.length >= n ? fresh : [...pool]
  return shuffle(from, random)
    .map((x, k) => ({ x, k, t: tally[String(x)] ?? 0 }))
    .sort((a, b) => a.t - b.t || a.k - b.k)
    .slice(0, n)
    .map(({ x }) => x)
}

/**
 * The Reading's chapters in Latin, five of ten: on an even number of lines any five but the round
 * before's; on an odd number each chapter in the language it did not have in the round before.
 * @param {readonly number[]} chapters
 * @param {readonly number[]} was the round before's Latin, or none
 * @param {number} m the lines the round has
 * @param {() => number} random
 */
function latinOf(chapters, was, m, random) {
  if (was.length && m % 2 === 1) return chapters.filter(c => !was.includes(c))
  const same = (/** @type {readonly number[]} */ a) =>
    a.length === was.length && a.every(c => was.includes(c))
  let latin = shuffle(chapters, random).slice(0, chapters.length / 2)
  while (was.length && same(latin)) latin = shuffle(chapters, random).slice(0, chapters.length / 2)
  return latin
}

/**
 * A round drawn new: Gaps, then the Reading, then Witnesses, then Footing, each from its own pool
 * by the rule of Draw, the turn of Gaps taken from the number of lines the round has. The
 * Reading's languages are five chapters in Latin and five in Greek (row Reading), and after a
 * round each chapter that two or more sentences cite alone takes a key the round before did not
 * list, and the eleventh is one the round before did not list. Every part is shown in an
 * order drawn new.
 * @param {Pools} p
 * @param {import('./decode.logic.js').End} end
 * @param {string} seed
 * @returns {import('./decode.logic.js').Draw}
 */
export function drawRound(p, end, seed) {
  const random = seeded(seed)
  const before = new Set(end.shown)
  const m = end.lines.length
  /** @param {'gaps' | 'witnesses' | 'footing'} part */
  const tallyOf = part => end.tally[part] ?? {}
  const gaps = p.sections.map((pool, k) => {
    const turned = pool.filter(
      i => !((i === TURN.third - 1 && m % 4 !== 0) || (i === TURN.fourth - 1 && m % 4 !== 1))
    )
    if (k === 2 && m % 4 === 0 && pool.includes(TURN.third - 1)) return TURN.third - 1
    if (k === 3 && m % 4 === 1 && pool.includes(TURN.fourth - 1)) return TURN.fourth - 1
    if (k === 6) return m % 2 === 0 ? TURN.even - 1 : TURN.odd - 1
    const ids = turned.map(i => p.lessons[i] ?? '')
    const [pick] = least(ids, 1, before, tallyOf('gaps'), random)
    return p.lessons.indexOf(pick ?? '')
  })
  const chapters = Object.keys(p.keys).map(Number)
  const keys = chapters.map(c => {
    const pool = p.keys[c] ?? []
    const fresh = pool.filter(id => !before.has(id))
    return shuffle(fresh.length ? fresh : pool, random)[0] ?? ''
  })
  const eleventhFresh = p.eleventh.filter(id => !before.has(id))
  const eleventh = shuffle(eleventhFresh.length ? eleventhFresh : p.eleventh, random)[0]
  const order = shuffle(chapters, random)
  const latin = latinOf(chapters, end.round?.draw.latin ?? [], m, random)
  const witnesses = WITNESSES.flatMap(w =>
    least(
      (p.witnesses[w] ?? []).map(s => String(s.id)),
      1,
      before,
      tallyOf('witnesses'),
      random
    )
  )
  const footing = FOOTINGS.flatMap(f =>
    least(
      p.footing[f].map(s => String(s.id)),
      3,
      before,
      tallyOf('footing'),
      random
    )
  )
  return {
    gaps: shuffle(gaps, random),
    witnesses: shuffle(witnesses, random),
    footing: shuffle(footing, random),
    chapters: order,
    latin: latin.sort((a, b) => a - b),
    list: shuffle([...keys, ...(eleventh ? [eleventh] : [])], random)
  }
}

// The key and the line

/** There is no year 0: 1 BC is followed by AD 1. @param {number} y */
const astro = y => (y < 0 ? y + 1 : y)

/**
 * The six gaps of Gaps: the years from each decision's date line to the next, earliest first.
 * @param {import('./decode.logic.js').Life} life
 * @param {readonly number[]} lessons the lessons drawn, by index
 */
export function gapsKey(life, lessons) {
  const years = [...lessons].sort((a, b) => a - b).map(i => astro(life.lessons[i]?.date.y ?? 0))
  return years.slice(1).map((y, k) => y - (years[k] ?? y))
}

/**
 * A Gaps stem: the question without the clause that gives the date, and the name Octavian or
 * Augustus shown as "the man".
 * @param {string} question
 */
export function stem(question) {
  const text = question.replace(/^By [^,]+,\s*/, '').replace(/\b(Octavian|Augustus)\b/g, 'the man')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * The key of a Reading chapter: the sentence of the list that cites it alone.
 * @param {Pools} p
 * @param {import('./decode.logic.js').Draw} draw
 * @param {number} chapter
 */
export const readingKey = (p, draw, chapter) =>
  draw.list.find(id => (p.keys[chapter] ?? []).includes(id)) ?? null

/**
 * Every entry of a round marked by its key: right or wrong, part by part, and the round right
 * when every entry is. A blank year, or one that is not a whole number, is wrong.
 * @param {import('./decode.logic.js').Life} life
 * @param {Pools} p
 * @param {import('./decode.logic.js').Draw} draw
 * @param {import('./decode.logic.js').Answers} answers
 */
export function markRound(life, p, draw, answers) {
  const key = gapsKey(life, draw.gaps)
  const gaps = key.map((k, i) => {
    const typed = (answers.gaps[i] ?? '').trim()
    return /^\d+$/.test(typed) && Number(typed) === k
  })
  const witnesses = draw.witnesses.map(
    id => answers.witnesses[id] === soleWitness(p.byId.get(id)?.evidence ?? '')
  )
  const footing = draw.footing.map(id => {
    const s = p.byId.get(id)
    return s !== undefined && answers.footing[id] === footingOf(s)
  })
  const reading = draw.chapters.map(c => answers.reading[c] === readingKey(p, draw, c))
  const right = [...gaps, ...witnesses, ...footing, ...reading].every(Boolean)
  return { key, gaps, witnesses, footing, reading, right }
}

/**
 * The round done: its line written at 92 percent (a wrong line brings it back the next day), the
 * shown ids kept, and every Gaps, Witnesses and Footing item it showed counted once more in its
 * part.
 * @param {import('./decode.logic.js').End} end
 * @param {import('./decode.logic.js').Draw} draw
 * @param {boolean} right
 * @param {string} day
 * @param {readonly string[]} lessons the life's lesson ids, by index
 * @returns {import('./decode.logic.js').End}
 */
export function roundDone(end, draw, right, day, lessons) {
  /**
   * @param {Readonly<Record<string, number>> | undefined} t
   * @param {readonly (string | number)[]} ids
   */
  const count = (t, ids) => {
    const out = { ...t }
    for (const id of ids) out[String(id)] = (out[String(id)] ?? 0) + 1
    return out
  }
  return {
    ...end,
    lines: writeLine(end.lines, right, day, RETENTION.exact),
    shown: [
      ...draw.gaps.map(i => lessons[i] ?? ''),
      ...draw.list,
      ...draw.witnesses,
      ...draw.footing
    ],
    tally: {
      gaps: count(
        end.tally.gaps,
        draw.gaps.map(i => lessons[i] ?? '')
      ),
      witnesses: count(end.tally.witnesses, draw.witnesses),
      footing: count(end.tally.footing, draw.footing)
    }
  }
}

/**
 * The round's first day: the day after the life closed. Null while it is open.
 * @param {string | undefined} closed
 */
const firstDay = closed => (closed ? addDays(closed, 1) : null)

/**
 * The date the round waits on: its last line's next date, or with no line the day after the
 * life closed; null before the life closes.
 * @param {import('./decode.logic.js').End} end
 * @param {string | undefined} closed
 */
export const roundDate = (end, closed) => end.lines.at(-1)?.next ?? firstDay(closed)

/**
 * Due: the round's next date is the day or earlier, or it has no line and the day after the
 * life closed has come. A round taken today is not due again today.
 * @param {import('./decode.logic.js').End} end
 * @param {string | undefined} closed
 * @param {string} today
 */
export function roundDue(end, closed, today) {
  const date = roundDate(end, closed)
  return date !== null && date <= today && end.lines.at(-1)?.date !== today
}

// Paging

/** The screen's limits: 150 words and 17 lines at 55 characters. */
const SCREEN = { words: 150, lines: 17, width: 55 }

/**
 * The lines a text takes at 55 characters, wrapped at the spaces.
 * @param {string} text
 */
export function linesOf(text) {
  let lines = 0
  let width = 0
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (width && width + 1 + word.length <= SCREEN.width) width += 1 + word.length
    else {
      lines += 1
      width = word.length
    }
  }
  return lines
}

/** @param {string} text */
const wordsOf = text => text.split(/\s+/).filter(Boolean).length

/**
 * A passage cut into its sentences, each ending at a full stop or a question mark: "?" in Latin,
 * ";" in Greek, where it is the question mark.
 * @param {string} text
 * @param {boolean} greek
 */
const sentencesIn = (text, greek) =>
  (greek
    ? text.match(/\S[\s\S]*?(?:[.;](?=\s|$)|$)/g)
    : text.match(/\S[\s\S]*?(?:[.?](?=\s|$)|$)/g)
  )
    ?.map(s => s.trim())
    .filter(Boolean) ?? []

/**
 * Pages of whole pieces, each page as full as 150 words and, where `lines` holds, 17 lines allow.
 * @param {readonly string[]} pieces
 * @param {boolean} lines whether the line limit holds too
 * @returns {string[][]}
 */
function pack(pieces, lines) {
  /** @type {string[][]} */
  const pages = []
  for (const piece of pieces) {
    const page = pages.at(-1)
    const joined = page ? [...page, piece].join(' ') : ''
    if (page && wordsOf(joined) <= SCREEN.words && (!lines || linesOf(joined) <= SCREEN.lines))
      page.push(piece)
    else pages.push([piece])
  }
  return pages
}

/**
 * A Reading passage paged at the end of a sentence past 150 words or 17 lines.
 * @param {string} text
 * @param {boolean} [greek] the passage is the Greek
 */
export const passagePages = (text, greek = false) =>
  pack(sentencesIn(text, greek), true).map(p => p.join(' '))

/**
 * The list of ten paged at the end of a sentence past 150 words: the ids on each page.
 * @param {readonly { id: string, text: string }[]} list
 * @returns {string[][]}
 */
export function listPages(list) {
  const pages = pack(
    list.map(s => s.text),
    false
  )
  let k = 0
  return pages.map(page => page.map(() => list[k++]?.id ?? ''))
}

// Judgment

/** The bar of Judgment: 30 scored, a mean under 0.478, the lean inside its line. */
const JUDGMENT = { n: 30, mean: 0.478 }

/**
 * Judgment read over the scored forecasts of every life with a check: how many are scored, their
 * mean score, the lean (the mean of the chance of yes less the answer), the lean line (twice the
 * error of that mean) and whether all three tests hold.
 * @param {import('./decode.logic.js').LivesRecord} record
 */
export function judgment(record) {
  const checked = new Set((record.level?.checks ?? []).map(c => String(c.life)))
  const scored = record.items.flatMap(i =>
    i.kind === 'forecast' && !i.known && i.p !== undefined && checked.has(String(i.life))
      ? [{ d: i.p / 100 - i.answer, s: i.score ?? 2 * (i.p / 100 - i.answer) ** 2 }]
      : []
  )
  const n = scored.length
  const mean = n ? scored.reduce((a, x) => a + x.s, 0) / n : 0
  const lean = n ? scored.reduce((a, x) => a + x.d, 0) / n : 0
  const sd = n > 1 ? Math.sqrt(scored.reduce((a, x) => a + (x.d - lean) ** 2, 0) / (n - 1)) : 0
  const line = n ? (2 * sd) / Math.sqrt(n) : 0
  const holds = n >= JUDGMENT.n && mean < JUDGMENT.mean && Math.abs(lean) < line
  return { n, mean, lean, line, holds }
}

/**
 * Judgment read at a life's last lesson: `judged` is set the day a reading holds, once.
 * @param {import('./decode.logic.js').End} end
 * @param {import('./decode.logic.js').LivesRecord} record the record with the life's check in it
 * @param {string} day
 * @returns {import('./decode.logic.js').End}
 */
export const judge = (end, record, day) =>
  end.judged || !judgment(record).holds ? end : { ...end, judged: day }

/**
 * Augustus done: closed, Judgment held, and the round's latest line right.
 * @param {import('./decode.logic.js').End} end
 * @param {string | undefined} closed
 */
export const endDone = (end, closed) =>
  Boolean(closed && end.judged && end.lines.at(-1)?.right === true)
