// What the maths tests build their content and records from, as the app reads them: through the
// decoders, so each id is made by its constructor and each record read as stored.
import { bankOf, kindId } from '../../src/kernel/maths-decode.logic.js'
import { decodePractice } from '../../src/kernel/practice.logic.js'

/**
 * A bank as a content module gives it.
 * @param {readonly Record<string, unknown>[]} problems
 */
export const bank = problems => bankOf({ default: problems }, 'a test bank')

/**
 * A kind with the fading problems of each form, its worked examples empty.
 * @param {string} id
 * @param {readonly (readonly Record<string, unknown>[])[]} fades
 * @returns {import('../../src/kernel/maths-decode.logic.js').Kind}
 */
export const kind = (id, fades) => ({
  id: kindId(id),
  forms: fades.map(fade => ({
    example: { problem: '', lines: [] },
    fade: bank(fade.map((p, i) => ({ id: `${id}-f${i}`, kind: id, ...p })))
  }))
})

/**
 * A maths unit's shared record, as stored.
 * @param {import('../../src/kernel/decode.logic.js').JsonRecord} json
 */
export const practice = json => decodePractice(json)
