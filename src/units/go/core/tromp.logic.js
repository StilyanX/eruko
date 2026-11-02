// Hides: John Tromp's definition of the score, written apart from rules.js so that one checks the
// other: "a point P reaches a colour C if there is a path of adjacent points of P's colour from
// P to a point of colour C", and a side's score is "the number of points of her colour, plus the
// number of empty points that reach only her colour". The build and tests/go-rules-items.test.mjs
// refuse every stored position on which this count and rules.js's area count differ.

/**
 * The score of a position: `{ black, white }`. `at(x, y)` gives 0 for an empty point, 1 for a
 * black stone and 2 for a white one, on a board `w` wide and `h` high.
 * @param {number} w
 * @param {number} h
 * @param {(x: number, y: number) => number} at
 * @returns {{ black: number, white: number }}
 */
export function trompScore(w, h, at) {
  /**
   * @param {number} x0
   * @param {number} y0
   * @param {number} colour
   */
  const reaches = (x0, y0, colour) => {
    const seen = new Set([`${x0},${y0}`])
    /** @type {[number, number][]} */
    const stack = [[x0, y0]]
    for (let point = stack.pop(); point; point = stack.pop()) {
      const [x, y] = point
      /** @type {[number, number][]} */
      const around = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]
      for (const [nx, ny] of around) {
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
        const c = at(nx, ny)
        if (c === colour) return true
        if (c === 0 && !seen.has(`${nx},${ny}`)) {
          seen.add(`${nx},${ny}`)
          stack.push([nx, ny])
        }
      }
    }
    return false
  }
  const score = { black: 0, white: 0 }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const c = at(x, y)
      if (c === 1) score.black++
      else if (c === 2) score.white++
      else {
        const b = reaches(x, y, 1)
        const wh = reaches(x, y, 2)
        if (b && !wh) score.black++
        else if (wh && !b) score.white++
      }
    }
  }
  return score
}
