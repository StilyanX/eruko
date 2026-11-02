// Hides: how a failed load of the app's own code is told from any other error.
/**
 * A lazy module failed to load (a new version was deployed, or the connection dropped). Chrome,
 * Firefox and Safari each word the failed import their own way.
 * @param {unknown} err
 */
export const isChunkError = err => {
  const message = typeof err === 'object' && err !== null && 'message' in err ? err.message : ''
  return /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(
    typeof message === 'string' ? message : ''
  )
}
