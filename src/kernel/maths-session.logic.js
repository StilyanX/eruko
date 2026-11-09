// Hides: what each move on the steps every maths unit shares does to the record, as one pure step: the try-first problem, a kind's worked example and its
// fading, an idea stated, mixed practice, and the item in view of a run of pages. Each unit's
// core/session.logic.js hands these moves here and its core/session.dom.js runs what comes back:
// the record to write, and the effects as data. Pure functions, tested in
// tests/study-session.test.mjs.
import { writeLine } from './days.logic.js'
import { unreachable } from './invariant.logic.js'
import { START, kindLines, placeOf } from './practice.logic.js'
import { afterAnswer, freshProblem } from './steps.logic.js'

/**
 * What a move asks of the world beyond the record: a line for the screen reader (`say`), and the
 * verdict the screen that made the move keeps on its page (`show`, empty to clear it).
 * @typedef {Readonly<{ t: 'say', text: string } | { t: 'show', text: string }>} Effect
 */

/**
 * Where a marked question that lost marks is checked: the returned script with the tutor's notes,
 * or the module's own feedback; null for a problem of the course.
 * @typedef {'script' | 'feedback' | null} Lost
 */

/** A problem of mixed practice, as a move names it. @typedef {Readonly<{ id: import('./maths-decode.logic.js').ProblemId, kind: import('./maths-decode.logic.js').KindId }>} Picked */

/**
 * A learner's move on a shared maths step. A worked example's moves carry the kind's facts
 * (`kind`) and whether the unit keeps a wrong answer's solution shown in the record (`inRecord`).
 * @typedef {Readonly<
 *   | { t: 'example-line', kind: import('./steps.logic.js').KindFacts, day: string }
 *   | { t: 'example-done', kind: import('./steps.logic.js').KindFacts, inRecord: boolean, day: string }
 *   | { t: 'stage-answer', kind: import('./steps.logic.js').KindFacts, inRecord: boolean, right: boolean, day: string }
 *   | { t: 'stage-wrong', kind: import('./maths-decode.logic.js').KindId, day: string }
 *   | { t: 'stage-open', kind: import('./maths-decode.logic.js').KindId, day: string }
 *   | { t: 'idea-wrong', kind: import('./maths-decode.logic.js').KindId, day: string }
 *   | { t: 'idea-right', kind: import('./maths-decode.logic.js').KindId, day: string }
 *   | { t: 'tried', topic: import('./maths-decode.logic.js').TopicSlug, right: boolean, day: string }
 *   | { t: 'turn', key: string, at: number }
 *   | { t: 'mix-answer', problem: Picked, lost: Lost, right: boolean, day: string }
 *   | { t: 'mix-change', problem: Picked, lost: Lost, day: string }
 *   | { t: 'mix-show', id: import('./maths-decode.logic.js').ProblemId, phase: import('./practice.logic.js').MixPhase, day: string }
 *   | { t: 'mix-next' }
 *   | { t: 'short', kinds: readonly import('./maths-decode.logic.js').KindId[] }
 *   | { t: 'draft', id: string, text: string }
 * >} MathsEvent
 */

/**
 * The record and the effects a move leaves.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @typedef {Readonly<{ record: R, effects: readonly Effect[] }>} Moved
 */

/** @param {string} text @returns {Effect} */
const say = text => ({ t: 'say', text })
/** @param {string} text @returns {Effect} */
const show = text => ({ t: 'show', text })

/**
 * The record with a kind's place changed by `patch`, met on `day`; `used` adds a problem to those used.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {import('./maths-decode.logic.js').KindId} kind
 * @param {Partial<import('./practice.logic.js').StagePlace>} patch
 * @param {string} day
 * @param {import('./maths-decode.logic.js').ProblemId} [used]
 * @returns {R}
 */
function placed(record, kind, patch, day, used) {
  // What was shown on the line or problem in hand closes with any move but the one that opens it.
  const { open: _, ...at } = placeOf(record, kind)
  return {
    ...record,
    used: used && !record.used?.includes(used) ? [...(record.used ?? []), used] : record.used,
    stage: { ...record.stage, [kind]: { ...at, ...patch, day } }
  }
}

/**
 * The record with a fresh problem at a stage, with `extra` kept in the kind's place.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Readonly<{ kind: import('./steps.logic.js').KindFacts, inRecord: boolean, day: string }>} move
 * @param {Partial<import('./practice.logic.js').StagePlace>} extra
 * @returns {R}
 */
function fresh(record, { kind, inRecord, day }, extra) {
  const f = freshProblem(kind, placeOf(record, kind.id), record)
  return placed(
    record,
    kind.id,
    { problem: f.id, next: f.next, ...(inRecord ? { shown: false } : {}), ...extra },
    day,
    f.used
  )
}

/**
 * The words that follow a right answer at stages 2 to 4, by what comes next.
 * @param {ReturnType<typeof afterAnswer>} then
 */
const nextWords = then =>
  then.t === 'form'
    ? 'The next form of this kind opens with its worked example.'
    : then.t === 'stage' && then.stage === 3
      ? 'The next problem hides the last two lines.'
      : then.t === 'stage' && then.streak
        ? "Solve one more fresh problem alone, so that this kind's problems come in mixed practice."
        : 'The next problem hides every line. Solve it alone.'

/**
 * What follows an answer at stages 2 to 4: the kind retired, its next form, or a fresh problem.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Extract<MathsEvent, { t: 'stage-answer' }>} move
 * @returns {Moved<R>}
 */
function answered(record, move) {
  const { kind, right, day, inRecord } = move
  const st = placeOf(record, kind.id)
  const then = afterAnswer(st, right, kind.fades.length, kind.twice)
  if (then.t === 'retire')
    return {
      // The place keeps only its day: a kind retired today counts as a part of its topic taken today.
      record: {
        ...record,
        stage: { ...record.stage, [kind.id]: { day } },
        retired: { ...record.retired, [kind.id]: day }
      },
      effects: [
        say(
          'Right. This kind has no more worked examples. Its problems now come in mixed practice.'
        ),
        show('')
      ]
    }
  const said = right ? nextWords(then) : ''
  const effects = right ? [say(`Right. ${said}`), show(said)] : [show('')]
  if (then.t === 'form')
    return {
      record: placed(
        record,
        kind.id,
        { ...START, form: then.form, problem: null, ...(inRecord ? { shown: false } : {}) },
        day
      ),
      effects
    }
  return { record: fresh(record, move, { stage: then.stage, streak: then.streak }), effects }
}

/**
 * What a marked question that lost marks is checked against, in words.
 * @param {'script' | 'feedback'} lost
 */
export const sourceOf = lost =>
  lost === 'feedback'
    ? "the module's feedback on it"
    : "the returned script and your tutor's notes on it"

/**
 * What to read after a wrong answer: the solution, or for a lost question what it is checked against.
 * @param {Lost} lost
 */
export const readAgain = lost => (lost ? `Read ${sourceOf(lost)} again.` : 'Read the solution.')

/**
 * The lines without today's, when the last is today's: a mark about to be written again.
 * @param {readonly import('./days.logic.js').Line[] | undefined} lines
 * @param {string} day
 */
const untilToday = (lines, day) => (lines?.at(-1)?.date === day ? lines.slice(0, -1) : lines)

/**
 * The record after a problem of mixed practice is marked on `day`. A lost question keeps lines of
 * its own. Any other problem returns through its kind: the kind gets the day's line, and the
 * problem gets one when it was answered wrong or was tried before, so it is no longer the one
 * last answered wrong; a never-tried problem answered right goes into `used` and gets none. A
 * second answer the same day writes nothing; `again` is a mark changed, written over today's.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Picked} problem
 * @param {boolean} lost
 * @param {boolean} right
 * @param {string} day
 * @param {boolean} again
 * @returns {R}
 */
function marked(record, problem, lost, right, day, again) {
  const kept = [record.list?.[problem.id], lost ? undefined : record.list?.[problem.kind]]
  if (!again && kept.some(lines => lines?.at(-1)?.date === day)) return record
  const list = { ...record.list }
  const own = again ? untilToday(record.list?.[problem.id], day) : record.list?.[problem.id]
  let { used } = record
  if (!lost && right && !own?.length && !used?.includes(problem.id)) {
    used = [...(used ?? []), problem.id]
    if (own?.length) list[problem.id] = own
    else delete list[problem.id]
  } else {
    list[problem.id] = writeLine(own, right, day)
    // A mark changed to wrong takes the problem out of `used` where the right mark put it.
    if (again && !right && !own?.length) used = used?.filter(id => id !== problem.id)
  }
  if (!lost) {
    const lines = kindLines(record, problem.kind)
    const written = writeLine(again ? untilToday(lines, day) : lines, right, day)
    list[problem.kind] = record.retired?.[problem.kind] ? written.slice(1) : written
  }
  return { ...record, list, used }
}

/**
 * An answer in mixed practice: its dated lines, the kind answered last, and the problem held in hand.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Extract<MathsEvent, { t: 'mix-answer' }>} move
 * @returns {Moved<R>}
 */
function mixAnswered(record, { problem, lost, right, day }) {
  return {
    record: {
      ...marked(record, problem, lost !== null, right, day, false),
      lastKind: { day, kind: problem.kind },
      mix: { day, id: problem.id, phase: right ? 'right' : 'wrong' }
    },
    effects: [say(right ? 'Right.' : `Wrong. ${readAgain(lost)}`)]
  }
}

/**
 * The mark just given, pressed by mistake, changed before the next problem: today's lines are
 * written again, or written when none was kept, and the screen shows the other verdict.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Extract<MathsEvent, { t: 'mix-change' }>} move
 * @returns {Moved<R>}
 */
function mixChanged(record, { problem, lost, day }) {
  const held = record.mix?.day === day && record.mix.id === problem.id ? record.mix.phase : null
  const right = held !== 'right'
  return {
    record: {
      ...marked(record, problem, lost !== null, right, day, true),
      mix: { day, id: problem.id, phase: right ? 'right' : 'wrong' }
    },
    effects: [say(right ? 'The mark is now right.' : `The mark is now wrong. ${readAgain(lost)}`)]
  }
}

/**
 * The moves of a worked example: a line read, the example done, and a stage's answer.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {Extract<MathsEvent, { t: 'example-line' | 'example-done' | 'stage-answer' | 'stage-wrong' | 'stage-open' }>} move
 * @returns {Moved<R>}
 */
function workedStep(record, move) {
  switch (move.t) {
    case 'example-line': {
      const line = placeOf(record, move.kind.id).line + 1
      return { record: placed(record, move.kind.id, { line }, move.day), effects: [] }
    }
    case 'example-done':
      return { record: fresh(record, move, { stage: 2, line: 0 }), effects: [show('')] }
    case 'stage-answer':
      return answered(record, move)
    case 'stage-wrong':
      // Kept in the record, a wrong answer cannot be taken back by a reload.
      return {
        record: placed(record, move.kind, { shown: true }, move.day),
        effects: [say('Wrong. The solution is below.')]
      }
    case 'stage-open':
      return { record: placed(record, move.kind, { open: true }, move.day), effects: [] }
    default:
      return unreachable(move)
  }
}

/**
 * The typed answers with one set to `text`, or dropped when it is empty; none left, no field.
 * @param {import('./practice.logic.js').PracticeRecord['draft']} draft
 * @param {string} id
 * @param {string} text
 */
function drafted(draft, id, text) {
  const { [id]: _, ...rest } = draft ?? {}
  const left = text ? { ...rest, [id]: text } : rest
  return Object.keys(left).length ? left : undefined
}

/** What an idea marked wrong asks next. */
export const TRY_AGAIN = 'Read the idea again, then state it with another example of your own.'

/**
 * One move on a shared maths step: the record it leaves and its effects.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @param {R} record
 * @param {MathsEvent} move
 * @returns {Moved<R>}
 */
export function mathsStep(record, move) {
  switch (move.t) {
    case 'example-line':
    case 'example-done':
    case 'stage-answer':
    case 'stage-wrong':
    case 'stage-open':
      return workedStep(record, move)
    case 'idea-wrong':
      return {
        record: { ...record, stage: { ...record.stage, [move.kind]: { day: move.day } } },
        effects: [say(TRY_AGAIN)]
      }
    case 'idea-right':
      return {
        record: {
          ...record,
          retired: { ...record.retired, [move.kind]: move.day },
          stage: { ...record.stage, [move.kind]: { day: move.day } },
          draft: drafted(record.draft, move.kind, '')
        },
        effects: [say('Right. Problems on this idea now come in mixed practice.')]
      }
    case 'tried':
      return {
        record: { ...record, gate: { ...record.gate, [move.topic]: { tried: move.day } } },
        effects: [
          say(
            move.right
              ? 'Right. The worked example is open.'
              : 'Wrong. The solution is below. The worked example is open.'
          )
        ]
      }
    case 'turn':
      return { record: { ...record, pages: { ...record.pages, [move.key]: move.at } }, effects: [] }
    case 'mix-answer':
      return mixAnswered(record, move)
    case 'mix-change':
      return mixChanged(record, move)
    case 'mix-show':
      return {
        record: { ...record, mix: { day: move.day, id: move.id, phase: move.phase } },
        effects: []
      }
    case 'mix-next':
      return { record: { ...record, mix: null }, effects: [] }
    case 'short':
      return { record: { ...record, short: move.kinds }, effects: [] }
    case 'draft':
      return (record.draft?.[move.id] ?? '') === move.text
        ? { record, effects: [] }
        : { record: { ...record, draft: drafted(record.draft, move.id, move.text) }, effects: [] }
    default:
      return unreachable(move)
  }
}
