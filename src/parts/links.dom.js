// Hides: the app's own path. Every address inside the app is written from it, so the app runs
// under any path a host gives it.

/** The app's own path, ending in /. */
export const BASE = new URL(document.baseURI).pathname

/**
 * An address inside the app, from a path as the registry writes it ("/explore/…").
 * @param {string} to
 */
export const linkTo = to => BASE + to.replace(/^\//, '')
