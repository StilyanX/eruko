// Hides: the proof rules of "A Self-Study System" (Mathematics) every maths unit with proofs
// keeps: a proof read counts its reading as its first line, each check adds one and a right check
// makes it known ("The proof check"); the statements still open, and how many methods still need
// a proved one; when a topic with proofs is finished; the dated list's rows of proofs read; and
// each move on a proof or a statement, one pure step from the unit's part to the part it leaves
// and the effects, which the unit's own step hands its moves to.
import { addDays, dayName, nextDate, nextOf } from './days.logic.js'
import { unreachable } from './invariant.logic.js'

/**
 * The dated lines of a read proof, starting with the reading and followed by each check.
 * @param {import('./proofs-decode.logic.js').ReadProof} rec
 * @returns {readonly import('./days.logic.js').Line[]}
 */
export const proofLines = rec => [
  { date: rec.read, right: true, next: addDays(rec.read, 1) },
  ...rec.checks
]

/**
 * The proof after a check. A right check marks the proof known, even after an earlier fail.
 * @param {import('./proofs-decode.logic.js').ReadProof} rec
 * @param {boolean} right
 * @param {string} today
 * @returns {import('./proofs-decode.logic.js').ReadProof}
 */
export function checkProof(rec, right, today) {
  const line = { date: today, right, next: nextDate(proofLines(rec), right, today) }
  return { ...rec, checks: [...rec.checks, line], known: rec.known || right }
}

/**
 * @param {import('./proofs-decode.logic.js').ProofState | undefined} p
 * @returns {p is import('./proofs-decode.logic.js').ReadProof}
 */
export const isRead = p => p !== undefined && 'read' in p

/**
 * @param {import('./proofs-decode.logic.js').ProvedState | undefined} p
 * @returns {p is Readonly<{ done: string }>}
 */
export const isDone = p => p !== undefined && 'done' in p
/**
 * @param {import('./proofs-decode.logic.js').ProvedState | undefined} p
 * @returns {p is Readonly<{ seen: string }>}
 */
export const isSeen = p => p !== undefined && 'seen' in p

/**
 * The statements still to prove: those neither proved nor given up, whose proof method has no
 * proved statement yet. A statement given up (`seen`) leaves the next one of its method in its place.
 * @template {import('./proofs-decode.logic.js').StatementRef} S
 * @param {readonly S[]} prove
 * @param {import('./proofs-decode.logic.js').ProofsRecord['proved']} proved
 * @returns {S[]}
 */
export function openStatements(prove, proved = {}) {
  const methods = new Set(prove.filter(s => isDone(proved[s.id])).map(s => s.method))
  return prove.filter(s => !isDone(proved[s.id]) && !isSeen(proved[s.id]) && !methods.has(s.method))
}

/**
 * How many proof methods still need a proved statement. One proved statement of each method
 * finishes the topic; the rest may be proved by choice.
 * @param {readonly import('./proofs-decode.logic.js').StatementRef[]} prove
 * @param {import('./proofs-decode.logic.js').ProofsRecord['proved']} proved
 */
export const methodsLeft = (prove, proved) =>
  new Set(openStatements(prove, proved).map(s => s.method)).size

/**
 * True when another statement of this statement's method is proved, so this one is optional.
 * @param {import('./proofs-decode.logic.js').StatementRef} statement
 * @param {readonly import('./proofs-decode.logic.js').StatementRef[]} prove
 * @param {import('./proofs-decode.logic.js').ProofsRecord['proved']} proved
 */
export const optionalStatement = (statement, prove, proved = {}) =>
  !isDone(proved[statement.id]) &&
  prove.some(s => s.method === statement.method && isDone(proved[s.id]))

/**
 * A topic with proofs is finished when every kind is retired, every proof is known, and every
 * method its statements practise has a proved statement or none left. It `waits` when only proof
 * checks stand between it and finished: it has no part left to take, and stays the open topic.
 * @param {import('./proofs-decode.logic.js').ProofCourseTopic} topic
 * @param {import('./practice.logic.js').PracticeRecord & import('./proofs-decode.logic.js').ProofsRecord} record
 */
export function proofTopicState(topic, record) {
  const retired = record.retired ?? {}
  const proofs = record.proofs ?? {}
  const known = (/** @type {import('./proofs-decode.logic.js').ProofId} */ id) => {
    const p = proofs[id]
    return p !== undefined && 'read' in p && p.known
  }
  const parts =
    topic.kinds.every(k => retired[k.id]) &&
    topic.proofs.every(id => isRead(proofs[id])) &&
    openStatements(topic.prove, record.proved).length === 0
  const finished = parts && topic.proofs.every(known)
  return { finished, waits: parts && !finished }
}

/**
 * Whether a proof of the topic was read on `today`, or a statement of it proved or given up on
 * `today`: a part of the open topic. A proof's check is the work list's earlier case and counts
 * for none. A proof or a statement in hand has no day stored, so it counts once done.
 * @param {import('./proofs-decode.logic.js').ProofCourseTopic} topic
 * @param {import('./proofs-decode.logic.js').ProofsRecord} record
 * @param {string} today
 */
export const proofsToday = (topic, record, today) =>
  topic.proofs.some(id => {
    const p = record.proofs?.[id]
    return isRead(p) && p.read === today
  }) ||
  topic.prove.some(s => {
    const p = record.proved?.[s.id]
    return (isDone(p) && p.done === today) || (isSeen(p) && p.seen === today)
  })

/**
 * The dated list's rows of proofs read, one for each topic with proofs, after the shared rows.
 * Proofs are listed topic by topic because each is checked on its topic's page: each proof read
 * links to itself in its section of the page, `anchor`.
 * @param {readonly import('./proofs-decode.logic.js').ProofCourseTopic[]} topics
 * @param {import('./proofs-decode.logic.js').ProofsRecord} record
 * @param {Readonly<{ base: string, titleOf: (slug: string) => string, anchor: string }>} at
 * @returns {import('./days.logic.js').DatedGroup[]}
 */
export const proofRows = (topics, record, { base, titleOf, anchor }) =>
  topics
    .filter(t => t.proofs.length)
    .map(t => {
      const read = t.proofs.flatMap(id => {
        const p = record.proofs?.[id]
        const next = isRead(p) ? nextOf(proofLines(p)) : undefined
        return next ? [{ next, to: `${base}/${t.slug}?item=${id}#${anchor}` }] : []
      })
      return {
        one: 'proof',
        many: 'proofs',
        to: `${base}/${t.slug}#${anchor}`,
        where: titleOf(t.slug),
        dates: read.map(x => x.next),
        tos: read.map(x => x.to)
      }
    })

/**
 * A move on a proof to read: a line's reason marked, the reading done, or a check marked.
 * @typedef {Readonly<
 *   | { t: 'proof-line', proof: import('./proofs-decode.logic.js').ProofId, right: boolean }
 *   | { t: 'proof-read', proof: import('./proofs-decode.logic.js').ProofId, day: string }
 *   | { t: 'proof-check', proof: import('./proofs-decode.logic.js').ProofId, right: boolean, day: string }
 * >} ProofEvent
 */
/**
 * A move on a statement to prove: its next phase, proved, or given up among the lesson's statements.
 * @typedef {Readonly<
 *   | { t: 'prove-phase', statement: import('./proofs-decode.logic.js').StatementId, phase: import('./proofs-decode.logic.js').ProvePhase }
 *   | { t: 'prove-done', statement: import('./proofs-decode.logic.js').StatementId, day: string }
 *   | { t: 'prove-giveup', statement: import('./proofs-decode.logic.js').StatementRef, prove: readonly import('./proofs-decode.logic.js').StatementRef[], day: string }
 * >} StatementEvent
 */
/** A move on a topic's proofs or its statements. @typedef {ProofEvent | StatementEvent} ProofsEvent */

/** @param {string} text @returns {import('./maths-session.logic.js').Effect} */
const say = text => ({ t: 'say', text })

/**
 * @template {import('./practice.logic.js').PracticeRecord & import('./proofs-decode.logic.js').ProofsRecord} R
 * @param {R} r
 * @param {ProofEvent} move
 * @returns {import('./maths-session.logic.js').Moved<R>}
 */
function proofStep(r, move) {
  const rec = r.proofs?.[move.proof]
  /** @param {import('./proofs-decode.logic.js').ProofState} proof */
  const withProof = proof => ({ ...r, proofs: { ...r.proofs, [move.proof]: proof } })
  switch (move.t) {
    case 'proof-line': {
      if (isRead(rec)) return { record: r, effects: [] }
      const reading = rec ? rec.reading : { line: 0, wrong: [] }
      const line = reading.line + 1
      const wrong = move.right ? reading.wrong : [...reading.wrong, line]
      return { record: withProof({ reading: { line, wrong } }), effects: [] }
    }
    case 'proof-read': {
      if (isRead(rec)) return { record: r, effects: [] }
      const wrong = rec ? rec.reading.wrong : []
      return {
        record: withProof({ read: move.day, checks: [], known: false, wrong }),
        effects: [say(`You read the proof. Its check is on ${dayName(addDays(move.day, 1))}.`)]
      }
    }
    case 'proof-check':
      // A proof not read has no check: the move is a stale screen's, and changes nothing.
      if (!isRead(rec)) return { record: r, effects: [] }
      return {
        record: withProof(checkProof(rec, move.right, move.day)),
        effects: [
          say(
            move.right
              ? 'You know this proof.'
              : 'Read it again, line by line. It comes back tomorrow.'
          )
        ]
      }
    default:
      return unreachable(move)
  }
}

/**
 * @template {import('./practice.logic.js').PracticeRecord & import('./proofs-decode.logic.js').ProofsRecord} R
 * @param {R} r
 * @param {StatementEvent} move
 * @returns {import('./maths-session.logic.js').Moved<R>}
 */
function statementStep(r, move) {
  /**
   * @param {import('./proofs-decode.logic.js').StatementId} id
   * @param {import('./proofs-decode.logic.js').ProvedState} proved
   */
  const withProved = (id, proved) => ({ ...r, proved: { ...r.proved, [id]: proved } })
  switch (move.t) {
    case 'prove-phase':
      return { record: withProved(move.statement, { phase: move.phase }), effects: [] }
    case 'prove-done':
      return { record: withProved(move.statement, { done: move.day }), effects: [] }
    case 'prove-giveup': {
      const record = withProved(move.statement.id, { seen: move.day })
      const left = openStatements(move.prove, record.proved).some(
        o => o.method === move.statement.method
      )
      return {
        record,
        effects: [
          say(
            left
              ? 'Read the published proof. The next statement of the same method takes its place.'
              : 'Read the published proof.'
          )
        ]
      }
    }
    default:
      return unreachable(move)
  }
}

/**
 * One move on a topic's proofs or statements: the part it leaves and its effects.
 * @template {import('./practice.logic.js').PracticeRecord & import('./proofs-decode.logic.js').ProofsRecord} R
 * @param {R} record
 * @param {ProofsEvent} move
 * @returns {import('./maths-session.logic.js').Moved<R>}
 */
export function proofsStep(record, move) {
  switch (move.t) {
    case 'proof-line':
    case 'proof-read':
    case 'proof-check':
      return proofStep(record, move)
    case 'prove-phase':
    case 'prove-done':
    case 'prove-giveup':
      return statementStep(record, move)
    default:
      return unreachable(move)
  }
}
