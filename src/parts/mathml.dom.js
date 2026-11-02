// Hides: where a formula's MathML comes from. The generator turns every formula piece of a topic
// or bank file into MathML (scripts/gen/mathml.mjs); a page adds the files it shows before it
// draws, and the screens look each piece up here. No maths engine runs in the app.
import { InvariantError } from '../kernel/invariant.logic.js'

/** @type {Map<string, string>} */
const known = new Map()

/**
 * Make the MathML of one generated file known.
 * @param {Record<string, string>} map a piece's TeX to its MathML
 */
export function addMathml(map) {
  for (const [tex, mathml] of Object.entries(map)) known.set(tex, mathml)
}

/**
 * The MathML of one formula piece. A piece the generator has not set is a broken invariant: the
 * page shows its error screen, and the tests catch it before it ships.
 * @param {string} tex
 */
export function mathmlOf(tex) {
  const mathml = known.get(tex)
  if (mathml === undefined)
    throw new InvariantError(
      `No MathML for the formula ${JSON.stringify(tex)}: run node scripts/gen/mathml.mjs`
    )
  return mathml
}

/**
 * True when the generator has set this formula piece.
 * @param {string} tex
 */
export const knows = tex => known.has(tex)
