// Hides: the maths this unit's screens set from its problems' typed text, beyond the TeX its
// content writes: each answer, and the example after "as in" in each form line, read in its form
// (check.logic.js). scripts/gen/mathml.mjs sets them ahead, so no maths engine runs in the app.
import { problemsIn } from '../../../kernel/maths-text.logic.js'
import { answerTex } from './check.logic.js'

/**
 * The TeX of the maths set from one content module's typed text.
 * @param {unknown} mod
 * @returns {string[]}
 */
export const typesetOf = mod =>
  problemsIn(mod).flatMap(p =>
    [p.answer, /^.*, as in (.*)\.$/.exec(p.form)?.[1]].flatMap(typed => {
      const tex = typed === undefined ? null : answerTex(typed, p.form)
      return tex === null ? [] : [`$${tex}$`]
    })
  )
