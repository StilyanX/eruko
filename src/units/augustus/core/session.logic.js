// Hides: Augustus's study session as one pure step: from
// the record and one move of the learner to the next record and what is to be said or focused.
// A move names what the learner did; the interpreter (session.dom.js) stamps it with the study
// day and a fresh id, runs the step, stores the record and runs the effects. Every day a move
// changes the record joins `sessions`. The lesson's moves are in lesson.logic.js.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { itemId, lifeId } from './decode.logic.js'
import {
  NO_END,
  drawRound,
  judge as judgeEnd,
  markRound,
  roundDone,
  roundDue
} from './end.logic.js'
import { checkMove, lock, moved, out, recordMove, setbacksMove } from './lesson.logic.js'
import { endPools } from './end-pools.logic.js'
import { LIVES, findLife } from './lives.logic.js'
import {
  closeStuck,
  enterRecall,
  gateFour,
  lifeClosed,
  pairLives,
  recallItems,
  recordLevel,
  retold,
  ruleSaved,
  studied,
  tell
} from './next.logic.js'

/**
 * A move of the learner. Lesson moves name the lesson (`life`, `lesson`); a telling's, its life;
 * the pair's, its note (`shape`).
 * @typedef {Readonly<
 *   | import('./lesson.logic.js').At & { t: 'go', step: 'situation' | 'outcome' | 'question' | 'struggle', screen: number }
 *   | import('./lesson.logic.js').At & { t: 'draft', pText: string, reason: string }
 *   | import('./lesson.logic.js').At & { t: 'lock', pText: string, reason: string }
 *   | import('./lesson.logic.js').At & { t: 'know' }
 *   | import('./lesson.logic.js').At & { t: 'setback-type', row: number, field: keyof import('./decode.logic.js').SetbackRow, text: string }
 *   | import('./lesson.logic.js').At & { t: 'setback-add' }
 *   | import('./lesson.logic.js').At & { t: 'setback-remove', row: number }
 *   | import('./lesson.logic.js').At & { t: 'setbacks-done', none: boolean }
 *   | import('./lesson.logic.js').At & { t: 'pick', sentence: import('./decode.logic.js').SentenceId, on: boolean }
 *   | import('./lesson.logic.js').At & { t: 'claims-chosen' }
 *   | import('./lesson.logic.js').At & { t: 'beside-back' }
 *   | import('./lesson.logic.js').At & { t: 'verdict', sentence: import('./decode.logic.js').SentenceId, verdict: 'agrees' | 'contested' }
 *   | import('./lesson.logic.js').At & { t: 'shape-pick', shape: import('./decode.logic.js').ItemId | 'new' }
 *   | import('./lesson.logic.js').At & { t: 'check-done' }
 *   | import('./lesson.logic.js').At & { t: 'claim-text', sentence: import('./decode.logic.js').SentenceId, text: string }
 *   | import('./lesson.logic.js').At & { t: 'note-text', text: string }
 *   | import('./lesson.logic.js').At & { t: 'record-done' }
 *   | { t: 'tell-text', life: import('./decode.logic.js').LifeId, text: string }
 *   | { t: 'tell-show', life: import('./decode.logic.js').LifeId }
 *   | { t: 'judge', life: import('./decode.logic.js').LifeId }
 *   | { t: 'retry-done', life: import('./decode.logic.js').LifeId }
 *   | { t: 'change-mark', life: import('./decode.logic.js').LifeId }
 *   | { t: 'reread', life: import('./decode.logic.js').LifeId, lesson: number, screen: number }
 *   | { t: 'mark', life: import('./decode.logic.js').LifeId, item: import('./decode.logic.js').ItemId, right: boolean }
 *   | { t: 'retry-show', life: import('./decode.logic.js').LifeId, item: import('./decode.logic.js').ItemId }
 *   | { t: 'cell', shape: import('./decode.logic.js').ItemId, life: import('./decode.logic.js').LifeId, row: string, text: string }
 *   | { t: 'rule-text', shape: import('./decode.logic.js').ItemId, text: string }
 *   | { t: 'rest', shape: import('./decode.logic.js').ItemId, claim: import('./decode.logic.js').ItemId, on: boolean }
 *   | { t: 'no-rule', shape: import('./decode.logic.js').ItemId }
 *   | { t: 'rule-done', shape: import('./decode.logic.js').ItemId }
 *   | { t: 'end-life', life: import('./decode.logic.js').LifeId }
 *   | { t: 'open-life', life: import('./decode.logic.js').LifeId }
 *   | { t: 'reach-level', life: import('./decode.logic.js').LifeId }
 *   | { t: 'end-open', life: import('./decode.logic.js').LifeId }
 *   | { t: 'end-go', life: import('./decode.logic.js').LifeId, part: number, screen: number }
 *   | { t: 'end-gap', life: import('./decode.logic.js').LifeId, gap: number, text: string }
 *   | { t: 'end-witness', life: import('./decode.logic.js').LifeId, sentence: string, witness: string }
 *   | { t: 'end-footing', life: import('./decode.logic.js').LifeId, sentence: string, footing: string }
 *   | { t: 'end-reading', life: import('./decode.logic.js').LifeId, chapter: number, sentence: string }
 *   | { t: 'end-done', life: import('./decode.logic.js').LifeId }
 *   | { t: 'list-text', field: 'field' | 'rank' | 'people', text: string }
 *   | { t: 'list-done' }
 *   | { t: 'drop-sample' }
 * >} Move
 */
/** @typedef {Move & import('./lesson.logic.js').Stamp} Event A move, stamped by the interpreter. */
/**
 * @template {Event['t']} T
 * @typedef {Extract<Event, { t: T }>} EventOf
 */

/** The moves that only type or turn, which answer nothing: "Change the last mark" stands through them. */
const ANSWER_NOTHING = ['tell-text', 'go', 'draft', 'reread']

/**
 * The next record, and the effects, after one move.
 * @param {import('./decode.logic.js').LivesRecord} state
 * @param {Event} event
 * @returns {import('./lesson.logic.js').Out}
 */
export function step(state, event) {
  const next = apply(state, event)
  // The record repaired on the Review page is no study.
  if (next.state === state || event.t === 'drop-sample') return next
  const { lastMark, ...rest } = next.state
  // A move that answers the next item ends the last round's chance to change its mark.
  const kept =
    lastMark && (lastMark !== state.lastMark || ANSWER_NOTHING.includes(event.t))
      ? { lastMark }
      : {}
  return { ...next, state: { ...rest, ...kept, sessions: studied(rest.sessions, event.day) } }
}

/**
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {Event} ev
 * @returns {import('./lesson.logic.js').Out}
 */
function apply(s, ev) {
  if (pastLessons(ev)) return out(lifeMove(s, ev))
  switch (ev.t) {
    case 'go':
      return out(moved(s, ev, { step: ev.step, screen: ev.screen }))
    case 'draft':
      return out(moved(s, ev, { draft: { pText: ev.pText, reason: ev.reason } }))
    case 'lock':
    case 'know':
      return lock(s, ev)
    case 'setback-type':
    case 'setback-add':
    case 'setback-remove':
    case 'setbacks-done':
      return setbacksMove(s, ev)
    case 'pick':
    case 'claims-chosen':
    case 'beside-back':
    case 'verdict':
    case 'shape-pick':
    case 'check-done':
      return checkMove(s, ev)
    case 'claim-text':
    case 'note-text':
    case 'record-done':
      return recordMove(s, ev)
    case 'tell-text':
    case 'tell-show':
    case 'mark':
    case 'retry-show':
      return out(tellingMove(s, ev))
    case 'judge':
      return judge(s, ev)
    case 'retry-done':
      return retryDone(s, ev)
    case 'change-mark':
      return changeMark(s, ev)
    case 'reread':
      return out({ ...s, reread: { life: ev.life, lesson: ev.lesson, screen: ev.screen } })
    case 'cell':
    case 'rule-text':
    case 'rest':
    case 'no-rule':
    case 'rule-done':
      return pairMove(s, ev)
    default:
      return unreachable(ev)
  }
}

/** The moves past the lessons, which `lifeMove` makes. */
const LIFE_MOVES = new Set([
  'open-life',
  'end-life',
  'reach-level',
  'end-open',
  'end-go',
  'end-gap',
  'end-witness',
  'end-footing',
  'end-reading',
  'end-done',
  'list-text',
  'list-done',
  'drop-sample'
])

/**
 * @param {Event} ev
 * @returns {ev is EventOf<'open-life' | 'end-life' | 'reach-level' | 'end-open' | 'end-go' | 'end-gap' | 'end-witness' | 'end-footing' | 'end-reading' | 'end-done' | 'list-text' | 'list-done' | 'drop-sample'>}
 */
const pastLessons = ev => LIFE_MOVES.has(ev.t)

/**
 * A move past the lessons: the life opened, ended as stuck, its level check, its end level, the
 * next-life checklist, or the sample removed.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'open-life' | 'end-life' | 'reach-level' | 'end-open' | 'end-go' | 'end-gap' | 'end-witness' | 'end-footing' | 'end-reading' | 'end-done' | 'list-text' | 'list-done' | 'drop-sample'>} ev
 * @returns {import('./decode.logic.js').LivesRecord}
 */
function lifeMove(s, ev) {
  switch (ev.t) {
    case 'open-life':
      return openLife(s, ev)
    case 'end-life':
      return { ...s, lives: closeStuck(s.lives, ev.life, ev.day) }
    case 'reach-level':
      return reachLevel(s, ev)
    case 'end-open':
      return openRound(s, ev)
    case 'end-go':
    case 'end-gap':
    case 'end-witness':
    case 'end-footing':
    case 'end-reading':
    case 'end-done':
      return endMove(s, ev)
    case 'list-text':
    case 'list-done':
      return checklistMove(s, ev)
    case 'drop-sample':
      return withoutSample(s)
    default:
      return unreachable(ev)
  }
}

// The telling

/**
 * The telling under way for a life, or a new one.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {import('./decode.logic.js').LifeId} life
 * @returns {import('./decode.logic.js').Telling}
 */
export const tellingOf = (s, life) =>
  s.telling?.life === life ? s.telling : { life, phase: 'tell', text: '', marks: {} }

/**
 * The telling typed, the record shown beside it, an item marked, or an item told again shown.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'tell-text' | 'tell-show' | 'mark' | 'retry-show'>} ev
 * @returns {import('./decode.logic.js').LivesRecord}
 */
function tellingMove(s, ev) {
  const t = tellingOf(s, ev.life)
  if (ev.t === 'tell-text') return { ...s, telling: { ...t, text: ev.text } }
  if (ev.t === 'tell-show') return { ...s, telling: { ...t, phase: 'judge' } }
  if (ev.t === 'mark')
    return { ...s, telling: { ...t, marks: { ...t.marks, [ev.item]: ev.right } } }
  return { ...s, telling: { ...t, shown: [...(t.shown ?? []), ev.item] } }
}

/**
 * The telling judged against the record: the day's recall told, the life closed once it holds,
 * and the wrong items, if any, to be told again.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'judge'>} ev
 */
function judge(s, ev) {
  const built = findLife(ev.life)
  if (!built) return out(s)
  const items = recallItems(s, ev.life)
  const t = tellingOf(s, ev.life)
  // The items to tell again are fixed for the round, so one marked right stays in view.
  const again = items.filter(i => t.marks[i.id] !== true).map(i => i.id)
  const wrong = again.length
  const recall = tell(
    s.recall[ev.life] ?? enterRecall(undefined, ev.day),
    { right: items.length - wrong, wrong },
    ev.day
  )
  const told = { ...s, recall: { ...s.recall, [ev.life]: recall } }
  const closed = lifeClosed(told, ev.life, built.lessons.length)
  const judged = closed
    ? {
        ...told,
        lives: {
          ...told.lives,
          [ev.life]: { ...told.lives[ev.life], closed: told.lives[ev.life]?.closed ?? ev.day }
        }
      }
    : told
  if (!wrong) return ended(s, judged, ev)
  return out(
    {
      ...judged,
      telling: { ...t, phase: 'retry', retry: again, marks: {}, shown: [], missed: true }
    },
    { t: 'say', text: `${wrong} wrong. Tell those again.` }
  )
}

/**
 * The items told again judged: once every one is right the round ends, and on the first day it
 * counts as a right telling; else the ones still wrong are told again. Retries write no line.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'retry-done'>} ev
 */
function retryDone(s, ev) {
  const items = recallItems(s, ev.life)
  const t = tellingOf(s, ev.life)
  const again = items.filter(i => t.retry?.includes(i.id) && t.marks[i.id] !== true)
  if (again.length)
    return out(
      { ...s, telling: { ...t, retry: again.map(i => i.id), marks: {}, shown: [] } },
      { t: 'say', text: `${again.length} still wrong. Tell those again.` }
    )
  const cur = s.recall[ev.life]
  return ended(
    s,
    cur ? { ...s, recall: { ...s.recall, [ev.life]: retold(cur, items.length, ev.day) } } : s,
    ev
  )
}

/**
 * A round every item of which is right opens what comes next at once: the life told again while
 * the first day's three right tellings are short, else the next item of the work list. The record
 * as it stood before the round's Done is kept, so the mark can be changed (`changeMark`).
 * @param {import('./decode.logic.js').LivesRecord} before
 * @param {import('./decode.logic.js').LivesRecord} s the round's lines written
 * @param {EventOf<'judge' | 'retry-done'>} ev
 */
function ended(before, s, ev) {
  const short = (s.recall[ev.life]?.learning ?? 3) < 3
  return out(
    {
      ...s,
      telling: short ? { life: ev.life, phase: 'tell', text: '', marks: {} } : null,
      lastMark: {
        day: ev.day,
        life: ev.life,
        telling: tellingOf(before, ev.life),
        recall: before.recall[ev.life] ?? null,
        closed: before.lives[ev.life]?.closed ?? null
      }
    },
    { t: 'say', text: 'Every item right.' }
  )
}

/**
 * "Change the last mark": the round last marked all right opens again as it stood before its
 * Done, its marks kept, and its line and what that line set are taken back. Only on its own day.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'change-mark'>} ev
 */
function changeMark(s, ev) {
  const m = s.lastMark
  if (!m || m.day !== ev.day || m.life !== ev.life) return out(s)
  const { lastMark: _mark, ...rest } = s
  const { [m.life]: _recall, ...recall } = s.recall
  const { closed: _closed, ...life } = s.lives[m.life] ?? {}
  return out(
    {
      ...rest,
      telling: m.telling,
      recall: m.recall ? { ...recall, [m.life]: m.recall } : recall,
      lives: { ...s.lives, [m.life]: m.closed ? { ...life, closed: m.closed } : life }
    },
    { t: 'say', text: 'Change the marks, then press Done.' }
  )
}

// The next life

/**
 * The next life opened: it becomes the life in hand from this day, a position in another life is
 * left behind, and the checklist that chose it is done.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'open-life'>} ev
 */
function openLife(s, ev) {
  if (s.lives[ev.life]?.opened || !findLife(ev.life)) return s
  // The checklist that chose it is done; the next life's last lesson runs a new one.
  const { position, checklist: _done, listing: _typed, ...rest } = s
  return {
    ...rest,
    ...(position && position.life === ev.life ? { position } : {}),
    lives: { ...s.lives, [ev.life]: { ...s.lives[ev.life], opened: ev.day } }
  }
}

// The end level

/**
 * The level check recorded at a life's last lesson, and Judgment read with it: Augustus's
 * `judged` is set the day a reading over every life with a check holds.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'reach-level'>} ev
 */
function reachLevel(s, ev) {
  const checked = recordLevel(s, ev.life, ev.day)
  if (checked === s) return s
  const first = lifeId(LIVES[0]?.id ?? '')
  const held = checked.lives[first]
  const end = judgeEnd(held?.end ?? NO_END, checked, ev.day)
  return end === (held?.end ?? NO_END)
    ? checked
    : { ...checked, lives: { ...checked.lives, [first]: { ...held, end } } }
}

/**
 * The end level's round opened: drawn new when it is due and none is open; one open is kept.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'end-open'>} ev
 */
function openRound(s, ev) {
  const held = s.lives[ev.life] ?? {}
  const end = held.end ?? NO_END
  if (!findLife(ev.life) || (end.round && !end.round.done) || !roundDue(end, held.closed, ev.day))
    return s
  const round = {
    date: ev.day,
    draw: drawRound(endPools(), end, ev.id),
    answers: { gaps: [], witnesses: {}, footing: {}, reading: {} },
    part: 0,
    screen: 0
  }
  return { ...s, lives: { ...s.lives, [ev.life]: { ...held, end: { ...end, round } } } }
}

/**
 * A move of the round open: a screen turned, an entry typed or chosen, or Done, which marks
 * every entry and writes the round's line.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'end-go' | 'end-gap' | 'end-witness' | 'end-footing' | 'end-reading' | 'end-done'>} ev
 */
function endMove(s, ev) {
  const life = findLife(ev.life)
  if (!life) return s
  const held = s.lives[ev.life] ?? {}
  const end = held.end ?? NO_END
  const round = end.round
  /** @param {import('./decode.logic.js').End} next */
  const put = next => ({ ...s, lives: { ...s.lives, [ev.life]: { ...held, end: next } } })
  if (!round || round.done) return s
  const a = round.answers
  switch (ev.t) {
    case 'end-go':
      return put({ ...end, round: { ...round, part: ev.part, screen: ev.screen } })
    case 'end-gap': {
      const gaps = [...a.gaps]
      while (gaps.length < ev.gap) gaps.push('')
      gaps[ev.gap] = ev.text
      return put({ ...end, round: { ...round, answers: { ...a, gaps } } })
    }
    case 'end-witness':
      return put({
        ...end,
        round: {
          ...round,
          answers: { ...a, witnesses: { ...a.witnesses, [ev.sentence]: ev.witness } }
        }
      })
    case 'end-footing':
      return put({
        ...end,
        round: { ...round, answers: { ...a, footing: { ...a.footing, [ev.sentence]: ev.footing } } }
      })
    case 'end-reading':
      return put({
        ...end,
        round: { ...round, answers: { ...a, reading: { ...a.reading, [ev.chapter]: ev.sentence } } }
      })
    case 'end-done': {
      const { right } = markRound(life, endPools(), round.draw, a)
      const lessons = life.lessons.map(l => String(l.id))
      return put({
        ...roundDone(end, round.draw, right, ev.day, lessons),
        round: { ...round, done: ev.day }
      })
    }
    default:
      return unreachable(ev)
  }
}

// The pair of lives

/**
 * The pair of lives as it stands for a note: the note, the level, the life first compared, the
 * lives on the screen, and what is typed. Null when the record holds no such note.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {import('./decode.logic.js').ItemId} id
 */
export function pairOf(s, id) {
  const shape = s.items.flatMap(i => (i.kind === 'shape' && i.id === id ? [i] : []))[0]
  if (!shape) return null
  const level = s.level?.state ?? 'lowered'
  const first = shape.lives.find(l => !shape.compared.includes(l)) ?? shape.lives[0]
  if (first === undefined) return null
  const draft =
    s.pair?.shape === id ? s.pair : { shape: id, cells: {}, rule: '', rests: [], extra: [] }
  return { shape, level, first, draft, lives: [...pairLives(shape, first, level), ...draft.extra] }
}

/**
 * A move of the pair: a cell, the rule or a claim it rests on typed or chosen; "no rule" (yet);
 * or Done, which saves the rule.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'cell' | 'rule-text' | 'rest' | 'no-rule' | 'rule-done'>} ev
 */
function pairMove(s, ev) {
  const pair = pairOf(s, ev.shape)
  if (!pair) return out(s)
  const d = pair.draft
  if (ev.t === 'cell')
    return out({ ...s, pair: { ...d, cells: { ...d.cells, [`${ev.life}.${ev.row}`]: ev.text } } })
  if (ev.t === 'rule-text') return out({ ...s, pair: { ...d, rule: ev.text } })
  if (ev.t === 'rest')
    return out({
      ...s,
      pair: { ...d, rests: ev.on ? [...d.rests, ev.claim] : d.rests.filter(x => x !== ev.claim) }
    })
  if (ev.t === 'rule-done') return saveRule(s, ev, pair, d.rule.trim())
  const more = gateFour(pair.shape, pair.lives, pair.level)
  if (more === 'no rule' || d.extra.length) return saveRule(s, ev, pair, 'no rule')
  return out({ ...s, pair: { ...d, extra: [more] } })
}

/**
 * A rule, or "no rule", saved: the note compared for every life on the screen, and every life a
 * rule compares brought back the next day; "no rule" leaves recall as it was.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {import('./lesson.logic.js').Stamp} ev
 * @param {NonNullable<ReturnType<typeof pairOf>>} pair
 * @param {string} text
 */
function saveRule(s, ev, pair, text) {
  const { pair: _draft, ...rest } = s
  /** @type {import('./decode.logic.js').Rule} */
  const rule = {
    id: itemId(ev.id),
    life: pair.first,
    kind: 'rule',
    date: ev.day,
    text,
    lives: pair.lives,
    restsOn: text === 'no rule' ? [] : pair.draft.rests,
    shape: pair.shape.id
  }
  return out({
    ...rest,
    items: [
      ...s.items.map(i =>
        i.id === pair.shape.id && i.kind === 'shape'
          ? { ...i, compared: [...new Set([...i.compared, ...pair.lives])] }
          : i
      ),
      rule
    ],
    ...(text === 'no rule' ? {} : { recall: ruleSaved(s.recall, pair.lives, ev.day) })
  })
}

// The next-life checklist and the sample

/**
 * The next-life checklist as typed: what an earlier checklist held, until the learner types.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @returns {import('./decode.logic.js').ChecklistDraft}
 */
export const listingOf = s =>
  s.listing ?? { field: s.you?.field ?? '', rank: s.you?.rank ?? '', people: '' }

/**
 * A field of the checklist typed, or Done (or Skip), which writes it. Fields left empty keep what
 * an earlier checklist held.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @param {EventOf<'list-text' | 'list-done'>} ev
 * @returns {import('./decode.logic.js').LivesRecord}
 */
function checklistMove(s, ev) {
  const typed = listingOf(s)
  if (ev.t === 'list-text') return { ...s, listing: { ...typed, [ev.field]: ev.text } }
  const { listing: _listing, ...rest } = s
  const note = s.items.find(i => i.kind === 'shape' && !i.paired)
  const field = typed.field.trim()
  const rank = typed.rank.trim()
  return {
    ...rest,
    ...(field || rank ? { you: { field, rank } } : {}),
    checklist: {
      note: note?.id ?? null,
      people: typed.people
        .split('\n')
        .map(x => x.trim())
        .filter(Boolean)
    }
  }
}

/**
 * The record without the sample life an older Review page put in it: its mark, its recall, and
 * its sample setback. A record with no sample is returned as it is.
 * @param {import('./decode.logic.js').LivesRecord} s
 * @returns {import('./decode.logic.js').LivesRecord}
 */
function withoutSample(s) {
  if (!s.sample) return s
  const { sample: _sample, ...rest } = s
  const { augustus: _recall, ...recall } = s.recall
  return { ...rest, recall, items: s.items.filter(i => i.id !== 'sample-setback') }
}
