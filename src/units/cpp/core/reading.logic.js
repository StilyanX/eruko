// Hides: the language track's reading ("A Self-Study System", Programming, The track's reading):
// when it is asked, the order of each task's units (the bound, the verdict items, the count item,
// the item alone and its witness), and what a reading's end does: right when every unit of every
// task was right at the first try, else each kind a wrong check is tagged with opens again and
// the next reading is a whole new one with fresh tasks. A reading writes no dated line and is
// never counted in gate 2. Pure: the record comes in, the next record goes out.
import { READING_START, freshRound, tasksOf, trackAsked, unitsOf } from './track-decode.logic.js'

/**
 * The reading's next unit, asked in step C once every track kind is retired; null when there is
 * no reading or the last was right. A round whose tasks Eruko has not yet written waits for them.
 * @param {readonly import('./track-decode.logic.js').ReadingTask[]} tasks
 * @param {Readonly<{ trackReading: import('./track-decode.logic.js').ReadingState }>} record
 * @returns {import('./track-decode.logic.js').TrackAsked | import('./track-decode.logic.js').TrackWaits | null}
 */
export function readingFirst(tasks, record) {
  const st = record.trackReading
  if (st.done) return null
  if (!tasks.length) return null
  const task = tasksOf(tasks, st.round)[st.task]
  if (!task) return { n: 'C', step: 'track-waits', kind: 'reading' }
  const id = unitsOf(task)[st.at]
  return id ? trackAsked(id, 'C') : null
}

/**
 * A unit of the reading answered: a wrong one keeps the kind its check is tagged with; after the
 * last unit of the last task the reading is right when nothing was wrong, else every tagged kind
 * opens again at its worked example with fresh items and the next reading starts afresh.
 * @template {import('./decode.logic.js').CppRecord} R
 * @param {readonly import('./track-decode.logic.js').ReadingTask[]} tasks
 * @param {readonly import('./track-decode.logic.js').TrackKind[]} kinds
 * @param {R} record
 * @param {Readonly<{ id: string, kind: string, right: boolean, day: string }>} answer
 * @returns {R}
 */
export function readingAnswered(tasks, kinds, record, { id, kind, right, day }) {
  const st = record.trackReading
  const round = tasksOf(tasks, st.round)
  const task = round.find(t => t.id === kind)
  const tag = task?.tags[id] ?? ''
  const wrong = right || !tag || st.wrong.includes(tag) ? st.wrong : [...st.wrong, tag]
  const units = task ? unitsOf(task) : []
  const lastUnit = st.at + 1 >= units.length
  const base = {
    ...record,
    trackTurn: /** @type {const} */ ('C'),
    side: { day, side: /** @type {const} */ ('track') },
    sessions: record.sessions.includes(day) ? record.sessions : [...record.sessions, day]
  }
  if (!lastUnit) return { ...base, trackReading: { ...st, at: st.at + 1, wrong } }
  if (st.task + 1 < round.length)
    return { ...base, trackReading: { ...st, task: st.task + 1, at: 0, wrong } }
  if (!wrong.length) return { ...base, trackReading: { ...st, wrong, done: day } }
  return {
    ...base,
    track: record.track.map(t => {
      const k = kinds.find(x => x.id === t.kind)
      return wrong.includes(t.kind) && k
        ? {
            ...t,
            retired: '',
            part: /** @type {const} */ ('example'),
            round: freshRound(k, record, t.round + 1)
          }
        : t
    }),
    trackReading: {
      ...READING_START,
      round: st.round + 1,
      reopened: [...new Set([...st.reopened, ...wrong])]
    }
  }
}
