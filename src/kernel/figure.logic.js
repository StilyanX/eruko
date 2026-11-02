// Hides: what a figure's text alternative and its size follow from: the alt text cut into the
// sentences it says (one is a caption, several are a list) and the width at which its smallest
// label is as large as body text (the paper's "Letter size" and "Figure size").

/**
 * The sentences of a text alternative. A full stop, ! or ? followed by a capital letter ends one;
 * a decimal point or a dot inside a formula does not.
 * @param {string} alt
 * @returns {string[]}
 */
export const sentencesOf = alt =>
  alt
    .trim()
    .split(/(?<=[.!?])\s+(?=\p{Lu})/u)
    .filter(s => s !== '')

/**
 * The width a figure's SVG is drawn at, as a multiple of body text size: its viewBox width over
 * its smallest label's font size, so that label is body text size and no smaller. Null where the
 * SVG has no viewBox or no label (it keeps its own size).
 * @param {string} svg
 * @returns {number | null}
 */
export function widthInBodyText(svg) {
  const box = /<svg\b[^>]*\sviewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)/.exec(svg)
  const sizes = [...svg.matchAll(/font-size="([\d.]+)"/g)].map(m => Number(m[1]))
  if (!box || sizes.length === 0) return null
  const wide = Number(box[1])
  const small = Math.min(...sizes)
  return wide > 0 && small > 0 ? Math.round((wide / small) * 1000) / 1000 : null
}
