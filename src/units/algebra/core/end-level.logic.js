// Hides: algebra's end level (Mathematics, "The end level"): the IMO Shortlists published with
// official solutions, a Shortlist's algebra list cut into three runs, the paper of three problems
// (the first not yet used of each run, a run with none left taking its neighbour's, harder first),
// the sitting of 4 hours 30 minutes, each problem's mark out of 7, a problem under 7 going on the
// dated list as kind "exam", the pass (7 on each), the next paper once every lost problem of the
// failed one is right, and the end of the Shortlists. The unit stores no problem text: a paper
// names its problems, and the page links the official file. The record is the `end` field of the
// unit's part, read by `decodeEnd`. Pure functions over plain data, tested in end-level.test.js.
import { addDays } from '../../../kernel/days.logic.js'
import { isRecord } from '../../../kernel/decode.logic.js'
import { kindId, problemId } from '../../../kernel/maths-decode.logic.js'

/** A Shortlist: its year and how many algebra problems it holds (A1, A2, …). @typedef {Readonly<{ year: number, algebra: number }>} Shortlist */

/**
 * The Shortlists the IMO has published with their official solutions, newest first.
 * @type {readonly Shortlist[]}
 */
export const SHORTLISTS = [
  { year: 2025, algebra: 8 },
  { year: 2024, algebra: 8 },
  { year: 2023, algebra: 7 },
  { year: 2022, algebra: 8 },
  { year: 2021, algebra: 8 },
  { year: 2020, algebra: 8 },
  { year: 2019, algebra: 7 },
  { year: 2018, algebra: 7 },
  { year: 2017, algebra: 8 },
  { year: 2016, algebra: 8 },
  { year: 2015, algebra: 6 },
  { year: 2014, algebra: 6 },
  { year: 2013, algebra: 6 },
  { year: 2012, algebra: 7 },
  { year: 2011, algebra: 7 },
  { year: 2010, algebra: 8 },
  { year: 2009, algebra: 7 },
  { year: 2008, algebra: 7 },
  { year: 2007, algebra: 7 },
  { year: 2006, algebra: 6 }
]

/**
 * The Shortlist problems met in a book of the stage, each as its year and number ("2019-a5"): a
 * paper skips them. No book of the stage prints one.
 * @type {readonly string[]}
 */
const SEEN = []

/** A sitting's length: 4 hours 30 minutes, the time of one IMO day. */
export const SITTING_MS = 4.5 * 60 * 60 * 1000

/** The mark a problem is out of. */
export const FULL = 7

/** The kind every lost problem is of. */
const EXAM = kindId('exam')

/**
 * The official file of a Shortlist: its problems with their solutions.
 * @param {number} year
 */
export const shortlistUrl = year =>
  `https://www.imo-official.org/assets/documents/problems/${year}/IMO${year}SL.pdf`

/**
 * A problem as the seen and used lists name it.
 * @param {number} year
 * @param {number} n
 */
const keyOf = (year, n) => `${year}-a${n}`

/**
 * The id a lost problem's dated lines are kept under: x-imo-sl-2019-a5.
 * @param {number} year
 * @param {number} n
 */
export const lostId = (year, n) => problemId(`x-imo-sl-${keyOf(year, n)}`)

/**
 * A paper: its Shortlist's year, its three problems by their numbers in the algebra list, the day
 * of its sitting, when the sitting began (ms), and each problem's mark out of 7 once it is marked.
 * @typedef {Readonly<{ year: number, problems: readonly number[], day: string, start: number, marks?: readonly number[] }>} Paper
 */

/** The end level's record: every paper begun, in order. @typedef {Readonly<{ papers?: readonly Paper[] }>} EndRecord */

/**
 * What the end level reads of the unit's record: its own field and the dated lines.
 * @typedef {Readonly<{ end?: EndRecord | undefined, list?: import('../../../kernel/practice.logic.js').PracticeRecord['list'] }>} Held
 */

/**
 * @param {unknown} v
 * @returns {v is number}
 */
const isMark = v => typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= FULL

/**
 * @param {unknown} v
 * @returns {Paper | undefined}
 */
function paperOf(v) {
  if (!isRecord(v) || typeof v.year !== 'number' || typeof v.day !== 'string') return undefined
  const list = SHORTLISTS.find(s => s.year === v.year)
  const problems = Array.isArray(v.problems) ? v.problems : []
  if (!list || problems.length !== 3) return undefined
  if (!problems.every(n => Number.isInteger(n) && n >= 1 && n <= list.algebra)) return undefined
  const marks = Array.isArray(v.marks) && v.marks.length === 3 && v.marks.every(isMark) ? v.marks : undefined
  return {
    year: v.year,
    problems,
    day: v.day,
    start: typeof v.start === 'number' ? v.start : 0,
    ...(marks ? { marks } : {})
  }
}

/**
 * The end level as stored, read into its types: a paper not of its shape is left out.
 * @param {unknown} v
 * @returns {EndRecord | undefined}
 */
export function decodeEnd(v) {
  if (!isRecord(v) || !Array.isArray(v.papers)) return undefined
  return { papers: v.papers.flatMap(p => paperOf(p) ?? []) }
}

/**
 * A list of `count` problems cut into three runs in the list's own order, of equal length; where
 * the length does not divide by three, the first run takes one more, then the last.
 * @param {number} count
 * @returns {readonly (readonly number[])[]}
 */
export function runsOf(count) {
  const base = Math.floor(count / 3)
  const rest = count % 3
  const sizes = [base + (rest > 0 ? 1 : 0), base, base + (rest > 1 ? 1 : 0)]
  let next = 1
  return sizes.map(size => Array.from({ length: size }, () => next++))
}

/** For each run, the runs it borrows from: the run next to it, the harder first. */
const NEIGHBOURS = [
  [1, 2],
  [2, 0],
  [1, 0]
]

/**
 * The problems of each run not yet taken.
 * @param {number} count
 * @param {(n: number) => boolean} taken
 */
const leftOf = (count, taken) => runsOf(count).map(run => run.filter(n => !taken(n)))

/**
 * A paper from a list of `count` problems: the first problem not yet taken from each run. A run
 * with none left takes the first spare problem of the run next to it, the harder run first. Null
 * where fewer than three problems are left.
 * @param {number} count
 * @param {(n: number) => boolean} taken a problem seen before or used on an earlier paper
 * @returns {readonly number[] | null}
 */
export function pickPaper(count, taken) {
  const left = leftOf(count, taken)
  /** @type {number[]} */
  const paper = []
  for (const run of left) {
    const own = run[0]
    if (own !== undefined) paper.push(own)
  }
  left.forEach((run, i) => {
    if (run.length) return
    for (const j of NEIGHBOURS[i] ?? []) {
      const spare = left[j]?.find(n => !paper.includes(n))
      if (spare !== undefined) return void paper.push(spare)
    }
  })
  return paper.length === 3 ? paper.sort((a, b) => a - b) : null
}

/**
 * Whether a problem is taken: seen in a book of the stage, or used on a paper.
 * @param {readonly Paper[]} papers
 * @param {number} year
 * @param {readonly string[]} seen
 */
const takenIn = (papers, year, seen) => (/** @type {number} */ n) =>
  seen.includes(keyOf(year, n)) || papers.some(p => p.year === year && p.problems.includes(n))

/**
 * The paper to sit next: from the last paper's Shortlist while each of its runs holds a problem
 * not yet used, then from the next older one. Null when every Shortlist is used up.
 * @param {EndRecord} end
 * @param {readonly string[]} [seen]
 * @returns {Readonly<{ year: number, problems: readonly number[] }> | null}
 */
export function nextPaper(end, seen = SEEN) {
  const papers = end.papers ?? []
  const last = papers.at(-1)
  const at = last ? SHORTLISTS.findIndex(s => s.year === last.year) : -1
  const same = SHORTLISTS[at]
  const from =
    same && leftOf(same.algebra, takenIn(papers, same.year, seen)).every(run => run.length) ? at : at + 1
  for (const list of SHORTLISTS.slice(from)) {
    const problems = pickPaper(list.algebra, takenIn(papers, list.year, seen))
    if (problems) return { year: list.year, problems }
  }
  return null
}

/**
 * A problem of a paper as the page names it.
 * @typedef {Readonly<{ year: number, n: number, mark: number, id: import('../../../kernel/maths-decode.logic.js').ProblemId }>} Marked
 */

/**
 * A marked paper's problems under 7.
 * @param {Paper} paper
 * @returns {Marked[]}
 */
const lostOn = paper =>
  paper.problems.flatMap((n, i) => {
    const mark = paper.marks?.[i]
    return mark !== undefined && mark < FULL ? [{ year: paper.year, n, mark, id: lostId(paper.year, n) }] : []
  })

/**
 * Whether a paper passed: 7 on each problem.
 * @param {Paper} paper
 */
const passed = paper => paper.marks?.every(m => m === FULL) ?? false

/**
 * Where the end level stands:
 *   closed    a topic is not finished yet
 *   passed    a paper has 7 on each problem
 *   sitting   a paper is begun and not yet marked
 *   waiting   the last paper failed, and a lost problem of it is not yet right
 *   ready     the next paper can be sat
 *   spent     every published Shortlist is used up without a pass
 * @typedef {Readonly<
 *   | { t: 'closed' }
 *   | { t: 'passed', paper: Paper }
 *   | { t: 'sitting', paper: Paper, ends: number }
 *   | { t: 'waiting', paper: Paper, lost: readonly Marked[] }
 *   | { t: 'ready', next: Readonly<{ year: number, problems: readonly number[] }> }
 *   | { t: 'spent', oldest: Marked | undefined }
 * >} EndState
 */

/**
 * Where the end level stands.
 * @param {Held} record
 * @param {boolean} open every topic is finished
 * @returns {EndState}
 */
export function endState(record, open) {
  if (!open) return { t: 'closed' }
  const papers = record.end?.papers ?? []
  const won = papers.find(passed)
  if (won) return { t: 'passed', paper: won }
  const last = papers.at(-1)
  if (last && !last.marks) return { t: 'sitting', paper: last, ends: last.start + SITTING_MS }
  const lost = last ? lostOn(last).filter(p => record.list?.[p.id]?.at(-1)?.right !== true) : []
  if (last && lost.length) return { t: 'waiting', paper: last, lost }
  const next = nextPaper(record.end ?? {})
  return next ? { t: 'ready', next } : { t: 'spent', oldest: papers.flatMap(lostOn)[0] }
}

/**
 * Whether the end level has passed.
 * @param {Held} record
 */
export const endPassed = record => (record.end?.papers ?? []).some(passed)

/**
 * Every problem under 7, as a problem of kind "exam" for mixed practice, checked against the
 * Shortlist's official solution.
 * @param {Held} record
 * @returns {import('../../../kernel/practice.logic.js').LostQuestion[]}
 */
export const lostProblems = record =>
  (record.end?.papers ?? []).flatMap(lostOn).map(({ year, n, mark, id }) => ({
    id,
    kind: EXAM,
    piece: `IMO Shortlist ${year}`,
    typed: false,
    official: shortlistUrl(year),
    label: `A${n}`,
    got: mark,
    of: FULL
  }))

/**
 * A move on the end level: a sitting begun, or the last paper's three marks entered (again, to
 * put a mistyped mark right).
 * @typedef {Readonly<
 *   | { t: 'end-begin', day: string, nowMs: number }
 *   | { t: 'end-marks', marks: readonly number[] }
 * >} EndEvent
 */

/**
 * The record after the last paper's marks are entered. A problem under 7 gets its first dated
 * line on the day of the sitting, wrong, back the next day; lines it already has are kept. A mark
 * put right to 7 takes the problem's lines off. Marks that cannot be change nothing.
 * @template {Held} R
 * @param {R} record
 * @param {readonly number[]} marks
 * @returns {R}
 */
function enterMarks(record, marks) {
  const papers = record.end?.papers ?? []
  const paper = papers.at(-1)
  if (!paper || marks.length !== 3 || !marks.every(isMark)) return record
  /** @type {Partial<Record<import('../../../kernel/maths-decode.logic.js').ProblemId, readonly import('../../../kernel/days.logic.js').Line[]>>} */
  const list = { ...record.list }
  paper.problems.forEach((n, i) => {
    const id = lostId(paper.year, n)
    if (marks[i] === FULL) delete list[id]
    else if (!list[id]?.length) list[id] = [{ date: paper.day, right: false, next: addDays(paper.day, 1) }]
  })
  return { ...record, end: { papers: [...papers.slice(0, -1), { ...paper, marks: [...marks] }] }, list }
}

/**
 * One move on the end level: the record it leaves. A sitting begins only when a paper is ready.
 * @template {Held} R
 * @param {R} record
 * @param {EndEvent} move
 * @param {boolean} open every topic is finished
 * @returns {R}
 */
export function endStep(record, move, open) {
  if (move.t === 'end-marks') return enterMarks(record, move.marks)
  const state = endState(record, open)
  if (state.t !== 'ready') return record
  const paper = { ...state.next, day: move.day, start: move.nowMs }
  return { ...record, end: { papers: [...(record.end?.papers ?? []), paper] } }
}
