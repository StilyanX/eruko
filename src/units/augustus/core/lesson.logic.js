// Hides: what each move of a lesson does to the record, from its first screen to the record
// written: the screens turned, the forecast typed and locked (or read with "I already know"), the
// setbacks typed and carried, the claims chosen and set beside their witnesses, the note picked,
// the record step's text, and the lesson written into the record. Everything typed is kept in
// the record's `position`, so a reload lands on the same screen with nothing lost. The session
// step (session.logic.js) calls these.
import { itemId, readChance } from './decode.logic.js'
import { findLife, sentencesOf } from './lives.logic.js'
import {
  addsItems,
  enterRecall,
  forcedWhy,
  notesFor,
  WHY,
  score
} from './next.logic.js'

/** @typedef {Readonly<{ t: 'say', text: string }>} Effect A line said through the page's status line. */
/** @typedef {Readonly<{ state: import('./decode.logic.js').LivesRecord, effects: readonly Effect[] }>} Out */
/** @typedef {Readonly<{ day: string, id: string }>} Stamp When a move was made, and the id its new items are made from. */
/** @typedef {Readonly<{ life: import('./decode.logic.js').LifeId, lesson: number }>} At A lesson, by its life and its place. */

/** The note shown and said when a chance of yes cannot be read. */
export const P_NOTE = 'Write the chance as a number from 0 to 100, such as 85%.'

/** @param {import('./decode.logic.js').LivesRecord} state @param {readonly Effect[]} effects @returns {Out} */
export const out = (state, ...effects) => ({ state, effects })

/**
 * The life and the lesson a move names, if the course holds them.
 * @param {At} at
 */
function lessonAt(at) {
  const life = findLife(at.life)
  const lesson = life?.lessons[at.lesson]
  return life && lesson ? { life, lesson } : null
}

/**
 * Where the learner is in this lesson: the record's position, or the lesson's first screen.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At} at
 * @returns {import('./decode.logic.js').Position}
 */
export const positionIn = (s, at) =>
  s.position?.life === at.life && s.position.lesson === at.lesson
    ? s.position
    : { life: at.life, lesson: at.lesson, step: 'situation', screen: 0 }

/**
 * The record with the lesson's position set, the life opened on its first move.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp} ev
 * @param {import('./decode.logic.js').Position} position
 * @returns {import('./decode.logic.js').LivesRecord}
 */
function placed(s, ev, position) {
  const life = findLife(ev.life)
  if (!life) return s
  return {
    ...s,
    model: s.model ?? life.model,
    lives: s.lives[life.id]
      ? s.lives
      : {
          ...s.lives,
          [life.id]: {
            id: life.id,
            name: life.name,
            opened: ev.day,
            setbacks: life.setbacks.answer,
            accounts: life.accounts
          }
        },
    position
  }
}

/**
 * The record with the lesson's position changed by `patch`, keeping what its earlier steps carry.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp} ev
 * @param {Partial<import('./decode.logic.js').Position>} patch
 */
export const moved = (s, ev, patch) => placed(s, ev, { ...positionIn(s, ev), ...patch })

/**
 * The position at a new step, with what the steps before it held typed left behind.
 * @param {import('./decode.logic.js').Position} p
 * @param {Partial<import('./decode.logic.js').Position>} patch
 * @returns {import('./decode.logic.js').Position}
 */
const stepped = (p, patch) => ({
  life: p.life,
  lesson: p.lesson,
  step: p.step,
  screen: p.screen,
  ...(p.setbacks ? { setbacks: p.setbacks } : {}),
  ...patch
})

/**
 * The forecast of a lesson, if one is in the record.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {import('./decode.logic.js').LessonId} lesson
 */
export const forecastOf = (s, lesson) =>
  s.items.flatMap(i => (i.kind === 'forecast' && i.lesson === lesson ? [i] : []))[0]

/**
 * The forecast locked, or read with "I already know", and the outcome opened.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp & ({ t: 'lock', pText: string, reason: string } | { t: 'know' })} ev
 * @returns {Out}
 */
export function lock(s, ev) {
  const found = lessonAt(ev)
  const question = found?.lesson.question
  if (!found || !question) return out(s)
  const { lesson } = found
  /**
   * @param {{ known: true } | { p: number, reason: string, score: number }} entry
   * @returns {import('./decode.logic.js').Forecast}
   */
  const made = entry => ({
    id: itemId(ev.id),
    life: ev.life,
    kind: 'forecast',
    date: ev.day,
    lesson: lesson.id,
    lifeDate: lesson.date,
    situation: lesson.situation,
    question: question.text,
    answer: question.answer,
    ...entry
  })
  let forecast = made({ known: true })
  if (ev.t === 'lock') {
    if (!ev.pText.trim() || !ev.reason.trim()) return out(s)
    const p = readChance(ev.pText)
    if (!p.ok) return out(s, { t: 'say', text: P_NOTE })
    forecast = made({
      p: p.value,
      reason: ev.reason.trim(),
      score: score(p.value, question.answer)
    })
  }
  const next = moved({ ...s, items: [...s.items, forecast] }, ev, {})
  const position = stepped(positionIn(next, ev), { step: 'outcome', screen: 0 })
  return out(
    { ...next, position },
    {
      t: 'say',
      text: ev.t === 'lock' ? 'You locked the forecast.' : 'You read the decision with no score.'
    }
  )
}

/** @returns {import('./decode.logic.js').SetbackRow} */
const blank = () => ({ setback: '', cost: '', next: '' })

/**
 * The setbacks being typed.
 * @param {import('./decode.logic.js').Position} p
 */
export const rowsOf = p => p.rows ?? [blank()]

/**
 * A move of the setbacks: a field typed, a row added or removed, or Done (`none` for None), which
 * carries them to the check.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp & ({ t: 'setback-type', row: number, field: keyof import('./decode.logic.js').SetbackRow, text: string }
 *   | { t: 'setback-add' } | { t: 'setback-remove', row: number } | { t: 'setbacks-done', none: boolean })} ev
 * @returns {Out}
 */
export function setbacksMove(s, ev) {
  const p = positionIn(s, ev)
  const rows = rowsOf(p)
  if (ev.t === 'setback-type')
    return out(
      moved(s, ev, { rows: rows.map((r, j) => (j === ev.row ? { ...r, [ev.field]: ev.text } : r)) })
    )
  if (ev.t === 'setback-add') return out(moved(s, ev, { rows: [...rows, blank()] }))
  if (ev.t === 'setback-remove')
    return out(moved(s, ev, { rows: rows.filter((_, j) => j !== ev.row) }), {
      t: 'say',
      text: `You removed setback ${ev.row + 1}.`
    })
  const found = lessonAt(ev)
  if (!found) return out(s)
  const setbacks = (ev.none ? [] : rows).map(
    /** @returns {import('./decode.logic.js').Setback} */ (r, k) => ({
      id: itemId(`${ev.id}-${k}`),
      life: ev.life,
      kind: 'setback',
      lesson: found.lesson.id,
      setback: r.setback.trim(),
      cost: r.cost.trim(),
      next: r.next.trim()
    })
  )
  return out(placed(s, ev, { ...stepped(p, {}), step: 'check', setbacks }))
}

/**
 * The check of a lesson as it stands: every sentence, the chosen ones in reading order, those
 * with a witness to set beside, the notes to pick from, and whether the forecast was skipped or
 * the lesson has no decision (`known`).
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At} at
 */
export function checkOf(s, at) {
  const found = lessonAt(at)
  if (!found) return null
  const p = positionIn(s, at)
  const all = sentencesOf(found.lesson)
  const picked = all.filter(x => p.chosen?.includes(x.id))
  const known = Boolean(forecastOf(s, found.lesson.id)?.known) || !found.lesson.question
  /** @param {import('./lives.logic.js').Numbered} x */
  const whyOf = x => forcedWhy(x) ?? (p.verdicts?.[x.id] === 'contested' ? WHY.otherwise : undefined)
  /** @param {import('./lives.logic.js').Numbered} x */
  const verdictOf = x => (forcedWhy(x) ? 'contested' : p.verdicts?.[x.id])
  return {
    ...found,
    all,
    picked,
    witnessed: picked,
    notes: notesFor(s.items, at.life),
    known,
    verdictOf,
    claims: picked.map(x => {
      const why = whyOf(x)
      return { id: x.id, verdict: verdictOf(x), ...(why === undefined ? {} : { why }) }
    })
  }
}

/**
 * A move of the check: a sentence chosen or not, the claims set beside their witnesses or taken
 * back, a verdict, a note picked, or Done.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp & ({ t: 'pick', sentence: import('./decode.logic.js').SentenceId, on: boolean }
 *   | { t: 'claims-chosen' } | { t: 'beside-back' } | { t: 'check-done' }
 *   | { t: 'verdict', sentence: import('./decode.logic.js').SentenceId, verdict: 'agrees' | 'contested' }
 *   | { t: 'shape-pick', shape: import('./decode.logic.js').ItemId | 'new' })} ev
 * @returns {Out}
 */
export function checkMove(s, ev) {
  const p = positionIn(s, ev)
  const chosen = p.chosen ?? []
  if (ev.t === 'pick')
    return out(
      moved(s, ev, {
        chosen: ev.on ? [...chosen, ev.sentence] : chosen.filter(x => x !== ev.sentence)
      })
    )
  if (ev.t === 'verdict')
    return out(moved(s, ev, { verdicts: { ...p.verdicts, [ev.sentence]: ev.verdict } }))
  if (ev.t === 'shape-pick') return out(moved(s, ev, { shape: ev.shape }))
  if (ev.t === 'beside-back') {
    const { beside: _beside, ...rest } = p
    return out(placed(s, ev, rest))
  }
  const c = checkOf(s, ev)
  if (!c) return out(s)
  if (ev.t === 'claims-chosen') {
    // After "I already know" there is no shape to choose, and with no note written yet the only
    // choice is a new one: with no claim to set beside a witness, nothing is left to choose.
    if (c.witnessed.length || (!c.known && c.notes.length))
      return out(moved(s, ev, { beside: true }))
    return settled(s, ev, { claims: c.claims, shape: c.known ? null : 'new' })
  }
  return settled(s, ev, {
    claims: c.claims,
    shape: c.known ? null : c.notes.length ? (p.shape ?? null) : 'new'
  })
}

/**
 * What the check settled: claims to write, or a new note, go to the record step; nothing to type
 * puts the lesson into the record at once.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp} ev
 * @param {import('./decode.logic.js').CheckDone} check
 */
function settled(s, ev, check) {
  const p = positionIn(s, ev)
  if (check.claims.length || check.shape === 'new')
    return out(placed(s, ev, { ...stepped(p, {}), step: 'record', check }))
  return finish(s, ev, datedSetbacks(p, ev.day), check.shape)
}

/**
 * The setbacks carried from the struggle, dated the day the lesson is written.
 * @param {import('./decode.logic.js').Position} p
 * @param {string} day
 */
const datedSetbacks = (p, day) => (p.setbacks ?? []).map(sb => ({ ...sb, date: day }))

/**
 * A move of the record step: a claim or the note typed, or Done, which writes the lesson.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp & ({ t: 'claim-text', sentence: import('./decode.logic.js').SentenceId, text: string }
 *   | { t: 'note-text', text: string } | { t: 'record-done' })} ev
 * @returns {Out}
 */
export function recordMove(s, ev) {
  const p = positionIn(s, ev)
  if (ev.t === 'claim-text')
    return out(moved(s, ev, { texts: { ...p.texts, [ev.sentence]: ev.text } }))
  if (ev.t === 'note-text') return out(moved(s, ev, { note: ev.text }))
  const found = lessonAt(ev)
  if (!found) return out(s)
  const all = sentencesOf(found.lesson)
  const isNew = p.check?.shape === 'new'
  /** @type {import('./decode.logic.js').Item[]} */
  const entries = [
    ...datedSetbacks(p, ev.day),
    ...(p.check?.claims ?? []).map(
      /** @returns {import('./decode.logic.js').Claim} */ (c, k) => {
        const x = all.find(y => y.id === c.id)
        return {
          id: itemId(`${ev.id}-${k}`),
          life: ev.life,
          kind: 'claim',
          date: ev.day,
          lesson: found.lesson.id,
          text: (p.texts?.[c.id] ?? '').trim(),
          sentence: x?.text ?? '',
          page: x?.page ?? '',
          witness: x?.passage?.witness ?? null,
          ...(c.verdict === undefined ? {} : { verdict: c.verdict }),
          ...(c.why === undefined ? {} : { why: c.why })
        }
      }
    )
  ]
  if (isNew)
    entries.push({
      id: itemId(`${ev.id}-note`),
      life: ev.life,
      kind: 'shape',
      date: ev.day,
      text: (p.note ?? '').trim(),
      lives: [ev.life],
      decisions: [found.lesson.id],
      paired: null,
      compared: []
    })
  const shape = p.check?.shape
  return finish(s, ev, entries, shape === 'new' || shape === undefined ? null : shape)
}

/**
 * The lesson written into the record: its entries, the note picked at the check taking this
 * decision (a note of another life is paired with this one), recall entered or brought back the
 * next day, and the next lesson's first screen.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {At & Stamp} ev
 * @param {readonly import('./decode.logic.js').Item[]} entries
 * @param {import('./decode.logic.js').ItemId | null} matched
 * @returns {Out}
 */
function finish(s, ev, entries, matched) {
  const found = lessonAt(ev)
  if (!found) return out(s)
  const { life, lesson } = found
  const n = ev.lesson
  const items = s.items.map(i =>
    i.id !== matched || i.kind !== 'shape'
      ? i
      : {
          ...i,
          decisions: [...i.decisions, lesson.id],
          lives: i.lives.includes(life.id) ? i.lives : [...i.lives, life.id],
          paired: i.paired ?? (i.lives.includes(life.id) ? null : ev.day)
        }
  )
  const r = s.recall[life.id]
  const recall = r?.entered
    ? addsItems(r, ev.day, n === life.lessons.length - 1)
    : enterRecall(r, ev.day)
  return out(
    {
      ...s,
      items: [...items, ...entries],
      recall: { ...s.recall, [life.id]: recall },
      lives: { ...s.lives, [life.id]: { ...s.lives[life.id], lastLesson: n } },
      position: { life: life.id, lesson: n + 1, step: 'situation', screen: 0 }
    },
    { t: 'say', text: `Lesson ${n + 1} of ${life.lessons.length} is in the record.` }
  )
}
