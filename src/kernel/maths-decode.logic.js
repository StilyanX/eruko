// Hides: how the values every maths unit reads from outside the code enter it: the ids of a course's kinds, problems and topics, each made here by its
// one constructor; a content module as an import of it gives it (a topic's bank, the MathML of its
// formulas), its shape declared here; and the shared fields of a maths unit's part of the record,
// as stored, read once into their types. A unit decodes its own fields in its core/decode.logic.js.
import { isRecord } from './decode.logic.js'
import { InvariantError } from './invariant.logic.js'

/** A kind of problem's id, as a course names it: "t1-k1", "exam". @typedef {string & { readonly brand: 'KindId' }} KindId */
/**
 * A problem's id: a bank problem's ("t1-k1-p01"), a fading problem's ("fade-0-2"), or a marked
 * question's ("tma01-q3").
 * @typedef {string & { readonly brand: 'ProblemId' }} ProblemId
 */
/** A topic's slug, the last part of its page's address. @typedef {string & { readonly brand: 'TopicSlug' }} TopicSlug */

/**
 * @param {string} id
 * @returns {KindId}
 */
export const kindId = id => /** @type {KindId} */ (id)
/**
 * @param {string} id
 * @returns {ProblemId}
 */
export const problemId = id => /** @type {ProblemId} */ (id)
/**
 * @param {string} slug
 * @returns {TopicSlug}
 */
export const topicSlug = slug => /** @type {TopicSlug} */ (slug)

/** A figure a line or a problem draws: its file and its text description. @typedef {Readonly<{ file: string, alt: string }>} FigureRef */
/** Every figure of a unit, its SVG by file name. @typedef {Readonly<Record<string, string>>} Figures */
/**
 * A line of a solution or of a fading problem: a string, or a step with its reason and figure.
 * @typedef {string | Readonly<{ step: string, reason?: string, figure?: FigureRef }>} WorkLine
 */
/**
 * A problem answered on paper: its prompt, the form its answer takes, the answer, its lines, its
 * figure and whether a calculator may be used ('no' or not).
 * @typedef {Readonly<{
 *   id?: ProblemId,
 *   prompt: string,
 *   form: string,
 *   answer: string,
 *   solution?: readonly WorkLine[],
 *   lines?: readonly WorkLine[],
 *   figure?: FigureRef,
 *   calc?: string
 * }>} PaperProblem
 */
/**
 * An idea: its name, a concrete case and its figure, the general statement and its definitions.
 * @typedef {Readonly<{ name: string, concrete?: string, figure?: FigureRef, general?: string, definitions?: readonly string[] }>} Idea
 */
/**
 * One form of a kind: its worked example, line by line, each with its reason, and the fading
 * problems that follow it.
 * @typedef {Readonly<{
 *   example: Readonly<{
 *     problem: string,
 *     figure?: FigureRef,
 *     lines: readonly Readonly<{ step: string, reason: string, figure?: FigureRef }>[]
 *   }>,
 *   fade: readonly PaperProblem[]
 * }>} Form
 */
/** A kind of problem: its id and its forms, none for an idea with no method. @typedef {Readonly<{ id: KindId, forms: readonly Form[] }>} Kind */
/** A problem of a topic's bank. @typedef {PaperProblem & Readonly<{ id: ProblemId, kind: KindId, topic?: string, solution: readonly WorkLine[] }>} BankProblem */
/** The try-first problem of a topic. @typedef {PaperProblem & Readonly<{ solution: readonly WorkLine[] }>} Bare */
/**
 * A topic as the shared steps read it: its slug, its try-first problem, its ideas and its kinds.
 * @typedef {Readonly<{ slug: TopicSlug, bare?: Bare | false | null, ideas?: readonly Idea[], kinds: readonly Kind[] }>} MathsTopic
 */

/**
 * The default export of a content module as an import gives it. A module without one is a
 * broken build, never the learner's doing.
 * @param {unknown} mod
 * @param {string} what the module, for the error
 */
export function contentOf(mod, what) {
  if (typeof mod !== 'object' || mod === null || !('default' in mod))
    throw new InvariantError(`${what} has no default export`)
  return mod.default
}

/**
 * A topic's bank, as its content module gives it: the unit's own data, held to its shape by the
 * unit's data tests.
 * @param {unknown} mod
 * @param {string} what
 * @returns {readonly BankProblem[]}
 */
export function bankOf(mod, what) {
  const value = contentOf(mod, what)
  if (!Array.isArray(value)) throw new InvariantError(`${what} is not a list of problems`)
  return /** @type {readonly BankProblem[]} */ (value)
}

/**
 * The MathML of a content file's formulas, each piece's TeX to its MathML, as the generator
 * wrote it (scripts/gen/mathml.mjs).
 * @param {unknown} mod
 * @param {string} what
 * @returns {Readonly<Record<string, string>>}
 */
export function mathmlOf(mod, what) {
  const value = contentOf(mod, what)
  if (!isRecord(value) || !Object.values(value).every(v => typeof v === 'string'))
    throw new InvariantError(`${what} is not a map of MathML`)
  return /** @type {Readonly<Record<string, string>>} */ (value)
}

/**
 * A topic's content module's value, checked to be a topic: a unit's decoder gives it the unit's
 * own topic type, its shape held by the unit's data tests.
 * @param {unknown} mod
 * @param {string} what
 */
export function topicOf(mod, what) {
  const value = contentOf(mod, what)
  if (!isRecord(value) || !Array.isArray(value.kinds))
    throw new InvariantError(`${what} is not a topic`)
  return value
}

/**
 * The ids of a generated course list, each made by its constructor: `[problem, kind]` pairs.
 * @param {readonly (readonly string[])[]} pairs
 * @returns {readonly Readonly<{ id: ProblemId, kind: KindId }>[]}
 */
export function bankKindsOf(pairs) {
  return pairs.map(([id, kind]) => {
    if (id === undefined || kind === undefined)
      throw new InvariantError('a generated bank entry lacks its id or kind')
    return { id: problemId(id), kind: kindId(kind) }
  })
}
