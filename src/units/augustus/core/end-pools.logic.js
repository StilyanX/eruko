// Hides: what the end level draws from: the Res Gestae's Latin and Greek as the Original job cut
// them, and the pools of the round's parts, from the first life and those chapters, worked out
// once. Only the life's page loads it, beside the built life.
import { assert } from '../../../kernel/invariant.logic.js'
import { ORIGINAL } from '../content/original.gen.js'
import { pools } from './end.logic.js'
import { LIVES } from './lives.logic.js'

export { ORIGINAL }

/** @type {import('./end.logic.js').Pools | undefined} */
let held

/** The pools of the end level's parts, worked out once. */
export function endPools() {
  const [life] = LIVES
  assert(life, 'the course holds a life')
  held ??= pools(
    life,
    ORIGINAL.chapters.map(c => c.n)
  )
  return held
}
