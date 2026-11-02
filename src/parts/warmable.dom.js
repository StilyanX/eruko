// Hides: loading a page's code or data once, early. `warm()` starts the load (pointing at a link
// does it, before the click lands) and resolves when it is done; `loaded()` gives the value at once
// after that, so the page draws whole at its first frame, with no loading line.
import { InvariantError } from '../kernel/invariant.logic.js'

/**
 * @template T
 * @param {() => Promise<T>} load
 */
export function warmable(load) {
  /** @type {Promise<T> | null} */
  let loading = null
  /** @type {{ value: T } | null} */
  let done = null
  const warm = () =>
    (loading ??= load().then(value => {
      done = { value }
      return value
    }))
  /** The value, once `warm()` has resolved. */
  const loaded = () => {
    if (!done) throw new InvariantError('Read before it was loaded: await warm() first.')
    return done.value
  }
  return { warm, loaded }
}
