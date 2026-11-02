// Hides: how the window's title is made. Most specific first: "<page> | <unit> |
// Eruko". Given no part, it leaves the title as it is (a page that sets its own).

/** @param {...(string | null | undefined | false)} parts */
export function setTitle(...parts) {
  const named = parts.filter(Boolean)
  if (named.length) document.title = [...named, 'Eruko'].join(' | ')
}
