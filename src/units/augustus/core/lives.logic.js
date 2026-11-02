// Hides: which lives the unit holds, in reading order, as built data: the lessons, their screens
// and sentences, and each sentence's page and second-account passage (the paper's "The
// material"); and how a lesson's sentences are numbered as the check names them. Only the life's
// page loads them; the work list and the unit page read course.gen.js.
import { BUILT } from '../content/lives.gen.js'
import { builtLife, sentenceId } from './decode.logic.js'

export const LIVES = BUILT.map(builtLife)

/**
 * A life of the course by its id, if the course holds it.
 * @param {string} id
 */
export const findLife = id => LIVES.find(l => l.id === id)

/**
 * A sentence numbered as the check names it.
 * @typedef {import('./decode.logic.js').Sentence & { readonly id: import('./decode.logic.js').SentenceId }} Numbered
 */

/**
 * Every screen of a lesson in reading order, each sentence numbered as the check names it.
 * @param {import('./decode.logic.js').Lesson} lesson
 * @returns {readonly Readonly<{ date: import('./decode.logic.js').HistDate, sentences: readonly Numbered[] }>[]}
 */
export const screensOf = lesson =>
  [...lesson.situation, ...lesson.outcome].map((sc, a) => ({
    ...sc,
    sentences: sc.sentences.map((s, b) => ({ ...s, id: sentenceId(lesson.id, a, b) }))
  }))

/** @param {import('./decode.logic.js').Lesson} lesson */
export const sentencesOf = lesson => screensOf(lesson).flatMap(sc => sc.sentences)
