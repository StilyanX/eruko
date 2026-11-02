// Hides: the names of the window-level events the shell uses to talk across component trees. Named here so a typo is a
// lint error, not a silently dead listener.
export const EVENTS = {
  // A study page has rendered and typeset, so a link to one of its sections can scroll there.
  pageReady: 'eruko:page-ready',
  // A study step's line for screen readers, spoken by the study page's one live region.
  say: 'eruko:say'
}

/**
 * @param {string} name
 * @param {unknown} [detail]
 */
export const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }))
