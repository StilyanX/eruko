// Hides: how what comes from outside Augustus's code enters it: the
// lives part of the record as stored, decoded once into its typed shape, with what a hand edit or
// an older page left odd read as absent or empty, never as a crash; a chance of yes as typed; the
// built life's data; and the id types, each made by its one constructor here. The record's fields
// are described by the types below (src/record/FORMAT.md).
import { isRecord } from '../../../kernel/decode.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'

/** @typedef {string & { readonly brand: 'LifeId' }} LifeId A life's id: "augustus". */
/** @typedef {string & { readonly brand: 'ItemId' }} ItemId A record item's id. */
/** @typedef {string & { readonly brand: 'LessonId' }} LessonId A lesson's id in the built life: "aug-001". */
/** @typedef {string & { readonly brand: 'SentenceId' }} SentenceId A sentence's place in its lesson: "aug-001.0.3". */

/** @param {string} text */
export const lifeId = text => /** @type {LifeId} */ (text)
/** @param {string} text */
export const itemId = text => /** @type {ItemId} */ (text)
/** @param {string} text */
const lessonId = text => /** @type {LessonId} */ (text)
/**
 * The id the check names a sentence by: its lesson, its screen and its place on that screen.
 * @param {LessonId} lesson
 * @param {number} screen
 * @param {number} place
 */
export const sentenceId = (lesson, screen, place) =>
  /** @type {SentenceId} */ (`${lesson}.${screen}.${place}`)

// The built life

/** @typedef {Readonly<{ y: number, m?: number, d?: number }>} HistDate A historical date; the month and day may be unknown. Years: 44 BC is -44. */
/**
 * The second account's passage beside a sentence: its witness and what it says.
 * @typedef {Readonly<{ witness: string, written: string, stake: string, words: string, note?: string, served?: boolean }>} Passage
 */
/**
 * A sentence of the account: its page in the main account, its source, the account's note on a
 * dispute, and the second account's passage beside it.
 * @typedef {Readonly<{ text: string, page: string, evidence?: string, dispute?: string, passage?: Passage | null }>} Sentence
 */
/** @typedef {Readonly<{ date: HistDate, sentences: readonly Sentence[] }>} ScreenData One screen of the account. */
/**
 * The decision's question: its text, its answer (1 yes, 0 no), the date it is answered by, the
 * coin toss that set its wording, and the option it names.
 * @typedef {Readonly<{ text: string, answer: number, by: HistDate, toss: string, option: string }>} Question
 */
/**
 * A lesson: its situation, the decision's question (none on the last lesson), its outcome, and
 * its letters and era screens (none at the lowered level).
 * @typedef {Readonly<{ id: LessonId, date: HistDate, situation: readonly ScreenData[],
 *   outcome: readonly ScreenData[], question: Question | null, letters: readonly unknown[],
 *   era: readonly unknown[] }>} Lesson
 */
/**
 * A life as built: the accounts it is read from, its lessons, and whether the reviews say its
 * main account shows the setbacks.
 * @typedef {Readonly<{ id: LifeId, name: string, born: HistDate, model: string,
 *   accounts: Readonly<{ main: Readonly<{ title: string }>, second: unknown }>,
 *   setbacks: Readonly<{ answer: boolean, from: string }>, lessons: readonly Lesson[] }>} Life
 */

/**
 * A life as the build wrote it (content/). The build writes this shape; no sentence yet carries a
 * passage, so its data alone would type every passage as null.
 * @param {unknown} built
 */
export const builtLife = built => /** @type {Life} */ (built)

// The record

/** @typedef {Readonly<{ date: string, right: number, wrong: number }>} RecallLine One day's whole telling of a life, counted by items. */
/**
 * A life's recall: the days it was told, `learning` (right tellings on its first day, to 3), `later`
 * (right days after that since the last wrong one), its next date, and the day it entered.
 * @typedef {Readonly<{ lines: readonly RecallLine[], learning: number, later: number, next: string | null, entered?: string }>} Recall
 */
/** @typedef {'agrees' | 'contested' | 'unchecked'} Verdict A claim set beside a witness; "unchecked" only in an older record, read as contested. */
/**
 * A forecast: the decision's question and answer, and the learner's chance of yes, reason and
 * score, or `known` ("I already know", read with no score).
 * @typedef {Readonly<{ id: ItemId, kind: 'forecast', life: LifeId, date: string, lesson: LessonId,
 *   lifeDate?: HistDate, situation: readonly ScreenData[], question: string, answer: number,
 *   known?: boolean, move?: string, p?: number, reason?: string, score?: number }>} Forecast
 */
/**
 * A claim kept: a sentence of the account in the learner's words, with its verdict and, when
 * contested, why.
 * @typedef {Readonly<{ id: ItemId, kind: 'claim', life: LifeId, date: string, lesson: LessonId,
 *   text: string, sentence: string, page: string, witness: string | null, verdict?: Verdict,
 *   why?: string }>} Claim
 */
/**
 * A setback of a stretch of the life: the setback, its cost and the next move.
 * @typedef {Readonly<{ id: ItemId, kind: 'setback', life: LifeId, lesson: LessonId, setback: string,
 *   cost: string, next: string, date?: string, page?: string }>} Setback
 */
/**
 * A rule from the pair of lives, or "no rule", with the claims it rests on.
 * @typedef {Readonly<{ id: ItemId, kind: 'rule', life: LifeId, date: string, text: string,
 *   lives?: readonly LifeId[], restsOn: readonly ItemId[], shape?: ItemId }>} Rule
 */
/**
 * A note on a decision's kind of problem, the lives and decisions it carries, the day it was first
 * paired, and the lives it has been compared for.
 * @typedef {Readonly<{ id: ItemId, kind: 'shape', life: LifeId, date: string, text: string,
 *   lives: readonly LifeId[], decisions: readonly LessonId[], paired: string | null,
 *   compared: readonly LifeId[] }>} Shape
 */
/** @typedef {Forecast | Claim | Setback | Rule | Shape} Item One thing the learner wrote into the record. */
/**
 * What an end-level round draws, in the order each part shows it: Gaps the lessons by index,
 * Witnesses and Footing sentence ids, the Reading's chapters with the ones that stand in Latin,
 * and its list of ten sentences.
 * @typedef {Readonly<{ gaps: readonly number[], witnesses: readonly string[], footing: readonly string[],
 *   chapters: readonly number[], latin: readonly number[], list: readonly string[] }>} Draw
 */
/**
 * What is answered in a round so far: the six years typed, the witness chosen for each sentence,
 * the class for each, and the sentence chosen for each Reading chapter.
 * @typedef {Readonly<{ gaps: readonly string[], witnesses: Readonly<Record<string, string>>,
 *   footing: Readonly<Record<string, string>>, reading: Readonly<Record<string, string>> }>} Answers
 */
/**
 * The round open or just done: the day it was drawn, what it drew, what is answered, the screen
 * reached (the part, and the screen inside it), and the day it was done.
 * @typedef {Readonly<{ date: string, draw: Draw, answers: Answers, part: number, screen: number,
 *   done?: string }>} Round
 */
/** @typedef {Readonly<{ date: string, right: boolean, next: string }>} EndLine One day's round: right when every entry was. */
/**
 * Augustus's end level: the day Judgment held, the round's dated lines, the ids its last draw
 * showed, and how many rounds showed each id in Gaps, Witnesses and Footing, each part counted on
 * its own; and the round open or just done.
 * @typedef {Readonly<{ judged: string | null, lines: readonly EndLine[], shown: readonly string[],
 *   tally: Readonly<{ gaps?: Readonly<Record<string, number>>, witnesses?: Readonly<Record<string, number>>,
 *   footing?: Readonly<Record<string, number>> }>, round?: Round }>} End
 */
/**
 * Where the learner stands in a life: when it opened, the reviews' answer on its setbacks, the
 * last lesson done, the day it closed as stuck, the day it closed, and Augustus's end level.
 * @typedef {Readonly<{ id?: LifeId, name?: string, opened?: string, accounts?: unknown,
 *   lastLesson?: number, setbacks?: boolean, stuck?: string, closed?: string, end?: End }>} LifeState
 */
/** @typedef {'situation' | 'outcome' | 'question' | 'struggle' | 'check' | 'record'} LessonStep */
/** @typedef {Readonly<{ pText: string, reason: string }>} Draft A forecast typed and not yet locked. */
/** @typedef {Readonly<{ setback: string, cost: string, next: string }>} SetbackRow A setback being typed. */
/** @typedef {Readonly<{ id: SentenceId, verdict: Verdict | undefined, why?: string }>} ChosenClaim */
/** @typedef {Readonly<{ claims: readonly ChosenClaim[], shape: ItemId | 'new' | null }>} CheckDone What the check settled. */
/**
 * Where the learner is in a lesson, and what its steps carry and hold typed, so a reload lands on
 * the same screen with nothing lost: the forecast typed (`draft`), the setbacks typed (`rows`) and
 * carried (`setbacks`), the sentences chosen at the check, their verdicts, the note picked and
 * whether the claims stand beside their witnesses (`beside`), what the check settled (`check`), and
 * the record step's claims (`texts`, by sentence) and note.
 * @typedef {Readonly<{ life: LifeId, lesson: number, step: LessonStep, screen: number,
 *   draft?: Draft, rows?: readonly SetbackRow[], setbacks?: readonly Setback[],
 *   chosen?: readonly SentenceId[], verdicts?: Readonly<Record<string, Verdict>>,
 *   shape?: ItemId | 'new', beside?: boolean, check?: CheckDone,
 *   texts?: Readonly<Record<string, string>>, note?: string }>} Position
 */
/** @typedef {'tell' | 'judge' | 'retry'} TellingPhase */
/**
 * A telling of the whole life: told, being checked, or its wrong items told again.
 * @typedef {Readonly<{ life: LifeId, phase: TellingPhase, text: string,
 *   marks: Readonly<Record<string, boolean>>, shown?: readonly ItemId[], retry?: readonly ItemId[],
 *   missed?: boolean }>} Telling
 */
/**
 * The round last marked all right, as the record stood before its Done: the telling with its
 * marks, the life's recall, and the day the life closed, if it had. "Change the last mark" puts
 * them back on the same day, until the next item is answered.
 * @typedef {Readonly<{ day: string, life: LifeId, telling: Telling, recall: Recall | null,
 *   closed: string | null }>} LastMark
 */
/** @typedef {'raised' | 'lowered'} Level The level of the pair of lives: three columns or two. */
/** @typedef {Readonly<{ life: LifeId, date: string, n: number, mean: number, variance: number, meanP: number, shareYes: number }>} LevelLine */
/**
 * The pair of lives being typed: its note, every cell (by "<life>.<row>"), the rule, the claims it
 * rests on, and the life a "no rule yet" added.
 * @typedef {Readonly<{ shape: ItemId, cells: Readonly<Record<string, string>>, rule: string,
 *   rests: readonly ItemId[], extra: readonly LifeId[] }>} PairDraft
 */
/** @typedef {Readonly<{ field: string, rank: string, people: string }>} ChecklistDraft The next-life checklist being typed. */
/**
 * The next-life checklist in progress: its note and the people listed at item 2 in the order met.
 * `nextNote`, where item 2 asks it: the next oldest note not yet paired, and the learner's yes or
 * no for each person, in the order met, whether that life shares it; fewer answers than people
 * while the question is under way.
 * @typedef {Readonly<{ note: ItemId | null, people: readonly string[],
 *   nextNote?: Readonly<{ note: ItemId, answers: readonly boolean[] }> }>} Checklist
 */
/**
 * The learner's record of the lives, under LIVES_PART.key. `sample` marks the sample items an
 * older Review page put in it.
 * @typedef {Readonly<{ items: readonly Item[], lives: Readonly<Record<string, LifeState>>,
 *   recall: Readonly<Record<string, Recall>>, sessions: readonly string[], position?: Position,
 *   level?: Readonly<{ state: Level, checks: readonly LevelLine[] }>, telling?: Telling | null,
 *   lastMark?: LastMark, pair?: PairDraft, listing?: ChecklistDraft, model?: string,
 *   you?: Readonly<{ field: string, rank: string }>,
 *   checklist?: Checklist,
 *   sample?: unknown }>} LivesRecord
 */

/** @param {unknown} v */
const text = v => (typeof v === 'string' ? v : '')
/** @param {unknown} v */
const number = v => (typeof v === 'number' && Number.isFinite(v) ? v : 0)
/** @param {unknown} v @returns {readonly unknown[]} */
const list = v => (Array.isArray(v) ? v : [])
/** @param {unknown} v */
const texts = v => list(v).filter(x => typeof x === 'string')
/** @param {unknown} v */
const fields = v => (isRecord(v) ? v : {})
/**
 * Each string field of an object, by its key.
 * @template T
 * @param {unknown} v
 * @param {(x: unknown) => x is T} keep
 * @returns {Readonly<Record<string, T>>}
 */
const byKey = (v, keep) =>
  /** @type {Readonly<Record<string, T>>} */ (
    Object.fromEntries(Object.entries(fields(v)).filter(([, x]) => keep(x)))
  )
/** @param {unknown} x @returns {x is string} */
const isText = x => typeof x === 'string'
/** @param {unknown} x @returns {x is boolean} */
const isFlag = x => typeof x === 'boolean'
/** @param {unknown} x @returns {x is Verdict} */
const isVerdict = x => x === 'agrees' || x === 'contested' || x === 'unchecked'
/**
 * `{ [key]: value }` when the value is there, else nothing, for an optional field.
 * @template {string} K
 * @template V
 * @param {K} key
 * @param {V | undefined} value
 * @returns {{ [k in K]?: Exclude<V, undefined> }}
 */
const opt = (key, value) =>
  /** @type {{ [k in K]?: Exclude<V, undefined> }} */ (value === undefined ? {} : { [key]: value })
/** @param {unknown} v */
const optText = v => (typeof v === 'string' ? v : undefined)
/** @param {unknown} v */
const optNumber = v => (typeof v === 'number' && Number.isFinite(v) ? v : undefined)

/**
 * @param {unknown} v
 * @returns {HistDate}
 */
const histDate = v => {
  const d = fields(v)
  return { y: number(d.y), ...opt('m', optNumber(d.m)), ...opt('d', optNumber(d.d)) }
}

/**
 * The screens a forecast keeps of its situation, as stored.
 * @param {unknown} v
 * @returns {readonly ScreenData[]}
 */
const screens = v =>
  list(v).map(s => {
    const sc = fields(s)
    return {
      date: histDate(sc.date),
      sentences: list(sc.sentences).map(x => {
        const t = fields(x)
        return { ...t, text: text(t.text), page: text(t.page) }
      })
    }
  })

/** @param {unknown} v */
const lifeIds = v => texts(v).map(lifeId)
/** @param {unknown} v */
const itemIds = v => texts(v).map(itemId)

/** @typedef {Readonly<Record<string, unknown>>} Fields A stored object's fields. */
/** @typedef {Readonly<{ id: ItemId, life: LifeId }>} Base What every item holds. */

/** Each kind of item's decoder, by its kind. */
const KINDS = {
  /** @param {Fields} i @param {Base} base @returns {Forecast} */
  forecast: (i, base) => ({
    ...base,
    kind: 'forecast',
    date: text(i.date),
    lesson: lessonId(text(i.lesson)),
    ...opt('lifeDate', isRecord(i.lifeDate) ? histDate(i.lifeDate) : undefined),
    situation: screens(i.situation),
    question: text(i.question),
    answer: number(i.answer),
    ...opt('known', i.known === true ? true : undefined),
    ...opt('move', optText(i.move)),
    ...opt('p', optNumber(i.p)),
    ...opt('reason', optText(i.reason)),
    ...opt('score', optNumber(i.score))
  }),
  /** @param {Fields} i @param {Base} base @returns {Claim} */
  claim: (i, base) => ({
    ...base,
    kind: 'claim',
    date: text(i.date),
    lesson: lessonId(text(i.lesson)),
    text: text(i.text),
    sentence: text(i.sentence),
    page: text(i.page),
    witness: optText(i.witness) ?? null,
    ...opt('verdict', isVerdict(i.verdict) ? i.verdict : undefined),
    ...opt('why', optText(i.why))
  }),
  /** @param {Fields} i @param {Base} base @returns {Setback} */
  setback: (i, base) => ({
    ...base,
    kind: 'setback',
    lesson: lessonId(text(i.lesson)),
    setback: text(i.setback),
    cost: text(i.cost),
    next: text(i.next),
    ...opt('date', optText(i.date)),
    ...opt('page', optText(i.page))
  }),
  /** @param {Fields} i @param {Base} base @returns {Rule} */
  rule: (i, base) => ({
    ...base,
    kind: 'rule',
    date: text(i.date),
    text: text(i.text),
    ...opt('lives', Array.isArray(i.lives) ? lifeIds(i.lives) : undefined),
    restsOn: itemIds(i.restsOn),
    ...opt('shape', typeof i.shape === 'string' ? itemId(i.shape) : undefined)
  }),
  /** @param {Fields} i @param {Base} base @returns {Shape} */
  shape: (i, base) => ({
    ...base,
    kind: 'shape',
    date: text(i.date),
    text: text(i.text),
    lives: lifeIds(i.lives),
    decisions: texts(i.decisions).map(lessonId),
    paired: optText(i.paired) ?? null,
    compared: lifeIds(i.compared)
  })
}

/**
 * One item of the record by its kind; null for anything else, which no page reads or writes.
 * @param {unknown} v
 * @returns {Item | null}
 */
function item(v) {
  const i = fields(v)
  const kind = i.kind
  return kind === 'forecast' ||
    kind === 'claim' ||
    kind === 'setback' ||
    kind === 'rule' ||
    kind === 'shape'
    ? KINDS[kind](i, { id: itemId(text(i.id)), life: lifeId(text(i.life)) })
    : null
}

/** @param {unknown} x @returns {x is number} */
const isCount = x => typeof x === 'number' && Number.isInteger(x)
/** @param {unknown} v */
const tallyOf = v => byKey(v, isCount)

/** @param {unknown} v @returns {Draw} */
const drawOf = v => {
  const d = fields(v)
  /** @param {unknown} x */
  const numbers = x => list(x).filter(isCount)
  return {
    gaps: numbers(d.gaps),
    witnesses: texts(d.witnesses),
    footing: texts(d.footing),
    chapters: numbers(d.chapters),
    latin: numbers(d.latin),
    list: texts(d.list)
  }
}

/** @param {unknown} v @returns {Round | undefined} */
const roundOf = v => {
  const r = fields(v)
  if (typeof r.date !== 'string' || !isRecord(r.draw)) return undefined
  const a = fields(r.answers)
  return {
    date: r.date,
    draw: drawOf(r.draw),
    answers: {
      gaps: list(a.gaps).map(text),
      witnesses: byKey(a.witnesses, isText),
      footing: byKey(a.footing, isText),
      reading: byKey(a.reading, isText)
    },
    part: number(r.part),
    screen: number(r.screen),
    ...opt('done', optText(r.done))
  }
}

/**
 * Augustus's end level as stored.
 * @param {unknown} v
 * @returns {End}
 */
export function endOf(v) {
  const e = fields(v)
  const t = fields(e.tally)
  const round = roundOf(e.round)
  return {
    judged: optText(e.judged) ?? null,
    lines: list(e.lines).flatMap(x => {
      const l = fields(x)
      return typeof l.date === 'string' && typeof l.next === 'string'
        ? [{ date: l.date, right: l.right === true, next: l.next }]
        : []
    }),
    shown: texts(e.shown),
    tally: { gaps: tallyOf(t.gaps), witnesses: tallyOf(t.witnesses), footing: tallyOf(t.footing) },
    ...opt('round', round)
  }
}

/**
 * @param {unknown} v
 * @param {Recall | undefined} told the life's recall, whose last line is the day an older page closed it
 * @returns {LifeState}
 */
function lifeState(v, told) {
  const l = fields(v)
  return {
    ...opt('id', typeof l.id === 'string' ? lifeId(l.id) : undefined),
    ...opt('name', optText(l.name)),
    ...opt('opened', optText(l.opened)),
    ...opt('accounts', l.accounts),
    ...opt('lastLesson', optNumber(l.lastLesson)),
    ...opt('setbacks', isFlag(l.setbacks) ? l.setbacks : undefined),
    ...opt('stuck', optText(l.stuck)),
    // An older page saved only that a life closed: it closed on the day of its last telling.
    ...opt(
      'closed',
      typeof l.closed === 'string'
        ? l.closed
        : l.closed === true
          ? (told?.lines.at(-1)?.date ?? '')
          : undefined
    ),
    ...opt('end', isRecord(l.end) ? endOf(l.end) : undefined)
  }
}

/**
 * @param {unknown} v
 * @returns {Recall}
 */
function recall(v) {
  const r = fields(v)
  return {
    lines: list(r.lines).map(x => {
      const l = fields(x)
      return { date: text(l.date), right: number(l.right), wrong: number(l.wrong) }
    }),
    learning: number(r.learning),
    later: number(r.later),
    next: optText(r.next) ?? null,
    ...opt('entered', optText(r.entered))
  }
}

/** @type {readonly LessonStep[]} */
const STEPS = ['situation', 'outcome', 'question', 'struggle', 'check', 'record']

/**
 * @param {unknown} v
 * @returns {Position | undefined}
 */
function position(v) {
  const p = fields(v)
  if (typeof p.life !== 'string') return undefined
  const step = STEPS.find(s => s === p.step) ?? 'situation'
  const draft = fields(p.draft)
  const check = fields(p.check)
  return {
    life: lifeId(p.life),
    lesson: typeof p.lesson === 'number' ? p.lesson : -1,
    step,
    screen: number(p.screen),
    ...opt(
      'draft',
      isRecord(p.draft) ? { pText: text(draft.pText), reason: text(draft.reason) } : undefined
    ),
    ...opt('rows', Array.isArray(p.rows) ? p.rows.map(setbackRow) : undefined),
    ...opt('setbacks', Array.isArray(p.setbacks) ? setbacks(p.setbacks) : undefined),
    ...opt('chosen', Array.isArray(p.chosen) ? texts(p.chosen).map(sentenceOf) : undefined),
    ...opt('verdicts', isRecord(p.verdicts) ? byKey(p.verdicts, isVerdict) : undefined),
    ...opt('shape', typeof p.shape === 'string' ? noteOf(p.shape) : undefined),
    ...opt('beside', p.beside === true ? true : undefined),
    ...opt('check', isRecord(p.check) ? checkDone(check) : undefined),
    ...opt('texts', isRecord(p.texts) ? byKey(p.texts, isText) : undefined),
    ...opt('note', optText(p.note))
  }
}

/** @param {unknown} v @returns {SetbackRow} */
const setbackRow = v => {
  const r = fields(v)
  return { setback: text(r.setback), cost: text(r.cost), next: text(r.next) }
}

/**
 * @param {readonly unknown[]} v
 * @returns {readonly Setback[]}
 */
const setbacks = v => v.map(item).filter(i => i?.kind === 'setback')

/**
 * A sentence id as stored.
 * @param {string} id
 */
const sentenceOf = id => /** @type {SentenceId} */ (id)

/**
 * @param {Readonly<Record<string, unknown>>} c
 * @returns {CheckDone}
 */
const checkDone = c => ({
  claims: list(c.claims).map(x => {
    const claim = fields(x)
    return {
      id: sentenceOf(text(claim.id)),
      verdict: isVerdict(claim.verdict) ? claim.verdict : undefined,
      ...opt('why', optText(claim.why))
    }
  }),
  shape: typeof c.shape === 'string' ? noteOf(c.shape) : null
})

/**
 * A note picked at the check, or a new one.
 * @param {string} v
 * @returns {ItemId | 'new'}
 */
const noteOf = v => (v === 'new' ? 'new' : itemId(v))

/** @type {readonly TellingPhase[]} */
const PHASES = ['tell', 'judge', 'retry']

/**
 * @param {unknown} v
 * @param {Readonly<Record<string, Recall>>} recalls
 * @returns {Telling | null}
 */
function telling(v, recalls) {
  const t = fields(v)
  if (typeof t.life !== 'string') return null
  // A round an older page ended waited on one more press, which told it again while the first
  // day's three right tellings were short, else closed it: the record reads as after that press.
  if (t.phase === 'done')
    return (recalls[t.life]?.learning ?? 3) < 3
      ? { life: lifeId(t.life), phase: 'tell', text: '', marks: {} }
      : null
  return {
    life: lifeId(t.life),
    phase: PHASES.find(p => p === t.phase) ?? 'judge',
    text: text(t.text),
    marks: byKey(t.marks, isFlag),
    ...opt('shown', Array.isArray(t.shown) ? itemIds(t.shown) : undefined),
    ...opt('retry', Array.isArray(t.retry) ? itemIds(t.retry) : undefined),
    ...opt('missed', t.missed === true ? true : undefined)
  }
}

/**
 * @param {unknown} v
 * @returns {LastMark | undefined}
 */
function lastMark(v) {
  const m = fields(v)
  const t = telling(m.telling, {})
  if (typeof m.day !== 'string' || typeof m.life !== 'string' || !t) return undefined
  return {
    day: m.day,
    life: lifeId(m.life),
    telling: t,
    recall: isRecord(m.recall) ? recall(m.recall) : null,
    closed: typeof m.closed === 'string' ? m.closed : null
  }
}

/** @param {unknown} v @returns {LevelLine} */
const levelLine = v => {
  const c = fields(v)
  return {
    life: lifeId(text(c.life)),
    date: text(c.date),
    n: number(c.n),
    mean: number(c.mean),
    variance: number(c.variance),
    meanP: number(c.meanP),
    shareYes: number(c.shareYes)
  }
}

/**
 * @param {Readonly<Record<string, unknown>>} lv
 * @returns {LivesRecord['level']}
 */
const levelOf = lv => ({
  state: lv.state === 'raised' ? 'raised' : 'lowered',
  checks: list(lv.checks).map(levelLine)
})

/**
 * @param {unknown} v
 * @returns {PairDraft | undefined}
 */
function pair(v) {
  const p = fields(v)
  if (typeof p.shape !== 'string') return undefined
  return {
    shape: itemId(p.shape),
    cells: byKey(p.cells, isText),
    rule: text(p.rule),
    rests: itemIds(p.rests),
    extra: lifeIds(p.extra)
  }
}

/**
 * The lives part of the record, as stored, in its typed shape. A field the screens did not write
 * (a hand edit, a restored backup) reads as absent or empty, and an item of no kind the pages know
 * is left out; a field the record does not name is kept as it is.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord | undefined} json
 * @returns {LivesRecord}
 */
export function decodeLives(json = {}) {
  const {
    items,
    lives,
    recall: recalls,
    sessions,
    position: pos,
    level,
    telling: told,
    lastMark: marked,
    // a lesson read again by its address is gone; its screen kept in an older record is dropped
    reread: _reread,
    pair: paired,
    listing,
    model,
    you,
    checklist,
    ...rest
  } = json
  const lv = fields(level)
  const ls = fields(listing)
  const yu = fields(you)
  const cl = fields(checklist)
  const recallOf = Object.fromEntries(
    Object.entries(fields(recalls)).map(([k, r]) => [k, recall(r)])
  )
  return {
    ...rest,
    items: list(items).flatMap(i => item(i) ?? []),
    lives: Object.fromEntries(
      Object.entries(fields(lives)).map(([k, l]) => [k, lifeState(l, recallOf[k])])
    ),
    recall: recallOf,
    sessions: texts(sessions),
    ...opt('position', position(pos)),
    ...opt('level', isRecord(level) ? levelOf(lv) : undefined),
    ...opt('telling', isRecord(told) ? telling(told, recallOf) : told === null ? null : undefined),
    ...opt('lastMark', lastMark(marked)),
    ...opt('pair', pair(paired)),
    ...opt(
      'listing',
      isRecord(listing)
        ? { field: text(ls.field), rank: text(ls.rank), people: text(ls.people) }
        : undefined
    ),
    ...opt('model', optText(model)),
    ...opt('you', isRecord(you) ? { field: text(yu.field), rank: text(yu.rank) } : undefined),
    ...opt(
      'checklist',
      isRecord(checklist)
        ? {
            note: typeof cl.note === 'string' ? itemId(cl.note) : null,
            people: texts(cl.people),
            ...opt('nextNote', nextNote(cl.nextNote))
          }
        : undefined
    )
  }
}

/**
 * The next-note question of a checklist, or absent where it names no note.
 * @param {unknown} v
 * @returns {{ note: ItemId, answers: readonly boolean[] } | undefined}
 */
function nextNote(v) {
  const n = fields(v)
  if (typeof n.note !== 'string') return undefined
  // Answers stand by place, so an odd one ends them: the question resumes there.
  const answers = list(n.answers)
  const odd = answers.findIndex(x => !isFlag(x))
  return {
    note: itemId(n.note),
    answers: (odd < 0 ? answers : answers.slice(0, odd)).filter(isFlag)
  }
}

/**
 * The record as it is stored.
 * @param {LivesRecord} record
 * @returns {import('../../../kernel/decode.logic.js').JsonRecord}
 */
export const encodeLives = record => record

/**
 * Why a typed chance of yes cannot be read: it is no number, or it is above 100.
 * @typedef {'not-a-number' | 'above-100'} ChanceError
 */

/**
 * A typed chance of yes as a whole number 0–100, written as people write chances: "85", "85%",
 * "0.85" or ".85" (a comma works too). A number with "%", or above 1, is a percentage; one from
 * 0 to 1 is a fraction. It is rounded to the whole percent.
 * @param {string} typed
 * @returns {import('../../../kernel/result.logic.js').Result<number, ChanceError>}
 */
export function readChance(typed) {
  const m = /^(\d+(?:\.\d*)?|\.\d+)\s*(%?)$/.exec(typed.trim().replace(',', '.'))
  if (!m) return fail('not-a-number')
  const n = Number(m[1])
  const p = m[2] || n > 1 ? n : n * 100
  return p <= 100 ? ok(Math.round(p)) : fail('above-100')
}
