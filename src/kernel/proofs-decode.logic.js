// Hides: how the proofs of a maths unit with proofs enter its code: the ids of its proofs to read and its statements to prove, each made here by its
// one constructor; the proofs read and the statements proved, as its part of the record stores
// them, read once into their types; and the shapes of a topic's proofs and statements, as its
// content gives them and its course names them. A unit with proofs decodes its part with
// `decodeProofs` beside the fields every maths unit keeps.
import { isRecord } from './decode.logic.js'
import { kindId, topicSlug } from './maths-decode.logic.js'
import { linesOf, mapOf, sampled } from './practice.logic.js'

/** A proof to read's id. @typedef {string & { readonly brand: 'ProofId' }} ProofId */
/** A statement to prove's id. @typedef {string & { readonly brand: 'StatementId' }} StatementId */

/**
 * @param {string} id
 * @returns {ProofId}
 */
export const proofId = id => /** @type {ProofId} */ (id)
/**
 * @param {string} id
 * @returns {StatementId}
 */
export const statementId = id => /** @type {StatementId} */ (id)

/**
 * A proof in the record: its reading in hand (the line reached and the lines given the wrong
 * reason), or read on a day, with its checks, whether it is known, and the lines given the wrong
 * reason in the reading, which make its first check wrong.
 * @typedef {Readonly<{ reading: Readonly<{ line: number, wrong: readonly number[] }> }>} ProofReading
 * @typedef {Readonly<{
 *   read: string,
 *   checks: readonly import('./days.logic.js').Line[],
 *   known: boolean,
 *   wrong: readonly number[]
 * }>} ReadProof
 * @typedef {ProofReading | ReadProof} ProofState
 */

/** The steps of proving a statement: written, its structure checked, compared with the published proof, fixed. @typedef {'write' | 'structure' | 'compare' | 'fix'} ProvePhase */
/**
 * A statement in the record: proved on a day, given up on a day (I cannot fix it), or in hand at a phase.
 * @typedef {Readonly<{ done: string }> | Readonly<{ seen: string }> | Readonly<{ phase: ProvePhase }>} ProvedState
 */

/**
 * The proofs read and the statements proved, as a unit with proofs keeps them in its part.
 * @typedef {Readonly<{
 *   proofs?: Readonly<Partial<Record<ProofId, ProofState>>> | undefined,
 *   proved?: Readonly<Partial<Record<StatementId, ProvedState>>> | undefined
 * }>} ProofsRecord
 */

/** @param {unknown} v */
const numbers = v => (Array.isArray(v) ? v.filter(n => typeof n === 'number') : [])

/**
 * @param {unknown} v
 * @returns {ProofState | undefined}
 */
function proofOf(v) {
  if (!isRecord(v)) return undefined
  if (typeof v.read === 'string')
    return {
      read: v.read,
      checks: linesOf(v.checks) ?? [],
      known: v.known === true,
      wrong: numbers(v.wrong)
    }
  const { reading } = v
  return isRecord(reading) && typeof reading.line === 'number'
    ? { reading: { line: reading.line, wrong: numbers(reading.wrong) } }
    : undefined
}

/**
 * @param {unknown} v
 * @returns {ProvedState | undefined}
 */
function provedOf(v) {
  if (!isRecord(v)) return undefined
  if (typeof v.done === 'string') return { done: v.done }
  if (typeof v.seen === 'string') return { seen: v.seen }
  const { phase } = v
  return phase === 'write' || phase === 'structure' || phase === 'compare' || phase === 'fix'
    ? { phase }
    : undefined
}

/**
 * The proofs read and the statements proved of a part as stored, read into their types: a field
 * missing or not of its shape reads as not there, so a damaged field reads as not done.
 * @param {import('./decode.logic.js').JsonRecord} json
 * @returns {ProofsRecord}
 */
export const decodeProofs = json => ({
  proofs: mapOf(json.proofs, proofId, proofOf, sampled(json, 'proofs')),
  proved: mapOf(json.proved, statementId, provedOf)
})

/** A statement to prove as the course names it: its id and the proof method it practises. @typedef {Readonly<{ id: StatementId, method: string }>} StatementRef */
/**
 * A topic as a course with proofs names it: its slug, whether it has a try-first problem, its
 * kinds with their number of forms, its proofs to read and its statements to prove.
 * @typedef {Readonly<{
 *   slug: import('./maths-decode.logic.js').TopicSlug,
 *   bare: boolean,
 *   kinds: readonly Readonly<{ id: import('./maths-decode.logic.js').KindId, forms: number }>[],
 *   proofs: readonly ProofId[],
 *   prove: readonly StatementRef[]
 * }>} ProofCourseTopic
 */

/**
 * A topic of a course with proofs as its generated course file gives it, its ids made.
 * @param {Readonly<{ slug: string, bare: boolean, kinds: readonly Readonly<{ id: string, forms: number }>[], proofs: readonly string[], prove: readonly Readonly<{ id: string, method: string }>[] }>} t
 * @returns {ProofCourseTopic}
 */
export const proofCourseTopic = t => ({
  slug: topicSlug(t.slug),
  bare: t.bare,
  kinds: t.kinds.map(k => ({ id: kindId(k.id), forms: k.forms })),
  proofs: t.proofs.map(proofId),
  prove: t.prove.map(s => ({ id: statementId(s.id), method: s.method }))
})

/**
 * A proof to read: its statement, its main idea, its lines with their reasons (a line may carry
 * the figure it draws, set under it), and a figure of the whole proof.
 * @typedef {Readonly<{
 *   id: ProofId,
 *   statement: string,
 *   idea: string,
 *   lines: readonly Readonly<{ line: string, reason: string, figure?: import('./maths-decode.logic.js').FigureRef }>[],
 *   figure?: import('./maths-decode.logic.js').FigureRef
 * }>} Proof
 */
/**
 * A statement to prove: its statement, the proof method it practises, the published proof, and
 * the facts a proof of it may use, where the course names them.
 * @typedef {StatementRef & Readonly<{
 *   statement: string,
 *   check: Readonly<{ proof: readonly Readonly<{ line: string, reason: string }>[], uses?: string }>
 * }>} Statement
 */
/**
 * A topic of a unit with proofs as its page reads it: the shared steps' topic, its proofs to
 * read and its statements to prove.
 * @typedef {import('./maths-decode.logic.js').MathsTopic & Readonly<{
 *   proofs: readonly Proof[],
 *   prove: readonly Statement[]
 * }>} ProofTopic
 */
