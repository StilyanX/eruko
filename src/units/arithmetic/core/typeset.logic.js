// Hides: the maths this unit's screens set from its problems' stored text, beyond the TeX its
// content writes: each answer, and the words and the example of each form line, as shown.logic.js
// shows them. scripts/gen/mathml.mjs sets them ahead, so no maths engine runs in the app.
import { problemsIn } from '../../../kernel/maths-text.logic.js'
import { answerText, formWords } from './shown.logic.js'

/**
 * The text, with its TeX, of the maths set from one content module's stored text.
 * @param {unknown} mod
 * @returns {string[]}
 */
export const typesetOf = mod =>
  problemsIn(mod).flatMap(p => {
    const line = /^(.*), as in (.*)\.$/.exec(p.form)
    return [
      answerText(p.answer, p.form),
      line?.[2] === undefined ? null : answerText(line[2], p.form),
      line?.[1] === undefined ? null : formWords(line[1])
    ].filter(t => t !== null)
  })
