// The wording of the Augustus lessons, for a reader who has never met Rome ("A Self-Study System",
// Biography, "The wording"): each office, term and place is explained once, in the sentence where
// the reader first meets it; everything else is in everyday words; and dates, brackets,
// quotations, questions and dispute notes keep the paper's forms.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LIVES } from '../src/units/augustus/core/lives.logic.js'

const life = LIVES[0]
assert.ok(life, 'the first life is built')

/** @typedef {{ lesson: number, text: string, dispute?: string | undefined }} Line */

// Every sentence in reading order: each lesson's situation, then its outcome.
const sentences = life.lessons.flatMap((l, i) =>
  [...l.situation, ...(l.outcome || [])].flatMap(s =>
    s.sentences.map(x => ({ lesson: i + 1, text: x.text, dispute: x.dispute }))
  )
)
// The lesson's own words, with what it quotes left out: a quoted letter keeps its writer's words.
/** @param {string} t */
const own = t => t.replace(/"[^"]*"|“[^”]*”/g, '')
/** @param {Line} s */
const where = s => `lesson ${s.lesson}: ${s.text}`

// An office, a title or a term with no English word: the pattern that finds it, and the words of
// its one explanation. The sentence where a reader first meets the term carries them, and no other
// sentence does (an office in one clause the first time, a foreign term glossed in its sentence).
/** @type {[string, RegExp, string][]} */
const TERMS = [
  ['Senate', /\bSenate\b|\bsenators?\b/, 'Rome’s governing council'],
  ['consul', /\bconsuls?\b|\bconsulship/, 'the two annual heads of the state'],
  ['province', /\bprovinc/, 'a territory outside Italy'],
  ['the Republic', /\b[Rr]epublic/, 'the rule of the Senate and of officials elected each year'],
  ['dictator', /\bdictator/, 'a single ruler with full power over the state'],
  ['triumph', /\btriumphs?\b/, 'a victory procession through Rome'],
  ['praetor', /\bpraetors?\b/, 'one of Rome’s chief judges'],
  ['tribune of the people', /\btribunes? of the people/, 'to protect the common people'],
  ['legion', /\blegion/, 'army units of about 5,500 men'],
  ['cohort', /\bcohorts?\b/, 'units of about 500 men'],
  ['sesterces', /\bsesterces\b/, 'the coins in which Romans counted money'],
  ['denarii', /\bdenarii\b/, 'silver coins worth 4 sesterces'],
  ['equestrian order', /\bequestrian\b/, 'the rank of rich citizens just below the senators'],
  ['freedman', /\bfreedm[ae]n\b|\bfreedwom[ae]n\b/, 'a freed slave'],
  ['popular assembly', /\bpopular assembly\b/, 'the meeting in which the citizens voted on laws'],
  ['edict', /\bedicts?\b/, 'a public announcement'],
  ['patrician', /\bpatricians?\b/, 'the oldest noble families of Rome'],
  ['quaestor', /\bquaestors?\b/, 'the office that brought a seat in the Senate'],
  ['triumvir', /\btriumvir/, 'its 3 holders were called triumvirs'],
  ['proscription', /\bproscri/, 'a public list of citizens who were declared outlaws'],
  ['legate', /\blegates?\b/, 'a deputy who commanded under him'],
  ['standards', /\bstandards\b/, 'the emblems that the legions carried'],
  ['pontifex maximus', /\bpontifex\b/, 'the head of the Roman state religion'],
  ['Vestal Virgins', /\bVestal/, 'the priestesses of the goddess Vesta'],
  ['auxiliary troops', /\bauxiliar/, 'units raised from peoples who were not Roman citizens'],
  ['client king', /\bclient kings?\b/, 'a ruler who held his throne by Rome’s favour'],
  ['colony', /\bcolon(y|ies)\b/, 'new towns of Roman citizens'],
  ['proconsul', /\bproconsuls?\b/, 'a former consul or praetor sent to rule a province'],
  ['Praetorians', /\bPraetorians?\b/, 'this bodyguard, the Praetorians'],
  ['prefect', /(?<!city )\bprefects?\b/, 'the officer Augustus had appointed to govern it'],
  ['census', /\bcensus\b/, 'a count of the people and their property'],
  ['aedile', /\baediles?\b/, 'buildings, games and markets'],
  [
    'tribunician power',
    /\btribunician\b/,
    'the powers of a tribune of the people without the office'
  ],
  ['censor', /\bcensors?\b/, 'the officials who counted the citizens'],
  ['procurator', /\bprocurators?\b/, 'private agents who answered to him alone'],
  ['veteran', /\bveterans?\b/, 'his discharged soldiers'],
  ['the Forum', /\bForum\b/, 'the square where Rome’s courts and politics were held'],
  ['the Capitol', /\bCapitol\b/, 'the hill of the temple of Jupiter']
]
/** @param {string} t */
const plain = t => t.replace(/[’']/g, '’')

test('each office and term is explained in the sentence where the reader first meets it', () => {
  for (const [name, pattern, gloss] of TERMS) {
    const first = sentences.find(s => pattern.test(own(s.text)))
    assert.ok(first, `${name} is never used: drop its row`)
    assert.ok(
      plain(first.text).includes(gloss),
      `${name} is first met unexplained in ${where(first)}`
    )
  }
})

test('each explanation is given once and never again', () => {
  for (const [name, , gloss] of TERMS) {
    const hits = sentences.filter(s => plain(s.text).includes(gloss))
    assert.equal(
      hits.length,
      1,
      `${name} is explained ${hits.length} times: ${hits.map(where).join(' | ')}`
    )
  }
})

// A word English has a plain word for, or a Latin one: the lesson uses the plain word every time.
const REPLACED =
  /\b(imperium|magistrates?|magistrac(y|ies)|promagistrates?|plebs|plebeians?|nobilitas|donatives?|fasces|ovatio|imperator|propraetors?|consulate|tribunate|clientele|insignia|retinue|gens|tumultus|cursus|auctoritas|princeps|mos maiorum|lex|so-called)\b/i

test('everyday words stand in for Latin and for terms English has a word for', () => {
  for (const s of sentences) assert.doesNotMatch(own(s.text), REPLACED, where(s))
  for (const l of life.lessons)
    if (l.question) assert.doesNotMatch(l.question.text, REPLACED, l.question.text)
})

test('no sentence points back with "the former" or "the latter"', () => {
  for (const s of sentences) assert.doesNotMatch(own(s.text), /\bthe (former|latter)\b/, where(s))
})

const COUNT_WORD =
  /\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand)\b/i

// The consul's office clause follows the paper's own example (Biography, "Offices"), which spells the number.
const OFFICE_EXAMPLE = 'the two annual heads of the state'

test('counts and amounts are digits', () => {
  for (const s of sentences)
    assert.doesNotMatch(own(s.text).replace(OFFICE_EXAMPLE, ''), COUNT_WORD, where(s))
  for (const l of life.lessons)
    if (l.question) assert.doesNotMatch(l.question.text, COUNT_WORD, l.question.text)
})

test('dates are a day number, a month word and a year: no Roman calendar word, no slashed years', () => {
  for (const s of sentences) {
    assert.doesNotMatch(own(s.text), /\b(Ides|Kalends|Nones)\b/, where(s))
    assert.doesNotMatch(own(s.text), /\b\d{1,3}\/\d{1,3}\b/, where(s))
    assert.doesNotMatch(
      own(s.text),
      /\b(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}(st|nd|rd|th)?\b(?! (BC|AD))/,
      where(s)
    )
  }
})

// Round brackets hold a modern place, or say what a quotation is. Nothing else sits in brackets.
const BRACKET =
  /^((in |the )?modern [A-Z][^()]*|exact words, in translation|as reported later, in translation)$/

test('brackets hold only a modern place or the mark of a quotation', () => {
  for (const s of sentences)
    for (const [, inside] of own(s.text).matchAll(/\(([^)]*)\)/g)) {
      assert.ok(inside !== undefined)
      assert.match(inside, BRACKET, where(s))
    }
})

test('a modern place is given once, where the place is first named', () => {
  const seen = new Map()
  for (const s of sentences)
    for (const [whole, place] of own(s.text).matchAll(
      /([A-Z][A-Za-z]+(?: [A-Z][A-Za-z]+)?) \((?:in |the )?modern [^)]*\)/g
    )) {
      assert.ok(place)
      assert.ok(!seen.has(place), `${place} is placed twice: ${seen.get(place)} | ${where(s)}`)
      seen.set(place, where(s))
      const first = sentences.find(x => new RegExp(`\\b${place}\\b`).test(own(x.text)))
      assert.ok(first)
      assert.equal(first, s, `${whole} stands after ${place} was first named in ${where(first)}`)
    }
})

test('a quotation says whether it is the exact words or reported later, and that it is a translation', () => {
  for (const s of sentences)
    if (/"[^"]{25,}"|“[^”]{25,}”/.test(s.text))
      assert.match(s.text, /\((exact words|as reported later), in translation\)/, where(s))
})

test('his father keeps his own name', () => {
  for (const s of sentences)
    assert.doesNotMatch(s.text, /Octavian’s father, Octavian|father, Octavian,/, where(s))
})

test('no screen is dated before the year he was born', () => {
  for (const [i, l] of life.lessons.entries())
    for (const s of [...l.situation, ...(l.outcome || [])])
      assert.ok(s.date.y >= life.born.y, `lesson ${i + 1} holds a screen dated ${s.date.y}`)
})

test('every lesson that asks a question has a situation before it', () => {
  for (const [i, l] of life.lessons.entries())
    if (l.question) assert.ok(l.situation.length > 0, `lesson ${i + 1} asks with no situation`)
})

const QUESTION =
  /^By (the end of )?((\d{1,2} )?(January|February|March|April|May|June|July|August|September|October|November|December) )?(\d{1,3} BC|AD \d{1,3}), (has (Octavian|Augustus)|have Augustus and Agrippa) [^?]+\?$/

test('every question has one form and uses only names the reader has met', () => {
  const met = new Set()
  /** @param {string} t */
  const names = t => t.match(/\b[A-Z][a-z]{3,}\b/g) || []
  const known = new Set([
    'March',
    'April',
    'June',
    'July',
    'August',
    'January',
    'February',
    'September',
    'October',
    'November',
    'December',
    'Octavian',
    'Augustus',
    'Rome',
    'Italy',
    'Senate'
  ])
  for (const [i, l] of life.lessons.entries()) {
    for (const s of l.situation)
      for (const x of s.sentences) for (const n of names(x.text)) met.add(n)
    if (l.question) {
      assert.match(l.question.text, QUESTION, `lesson ${i + 1}`)
      for (const n of names(l.question.text))
        assert.ok(
          met.has(n) || known.has(n),
          `lesson ${i + 1}: the question names ${n} before the lesson does`
        )
    }
    for (const s of l.outcome || [])
      for (const x of s.sentences) for (const n of names(x.text)) met.add(n)
  }
})

test('a dispute note is short and names no modern book, journal or page', () => {
  for (const s of sentences) {
    if (!s.dispute) continue
    assert.ok(s.dispute.split(/\s+/).length <= 32, `${s.dispute}`)
    assert.doesNotMatch(
      s.dispute,
      /\b(1[5-9]|20)\d\d\b|\bpp?\. ?\d|Historia|Hermes|Chiron|JRS|\bS\. \d/,
      s.dispute
    )
  }
})
