// "A Self-Study System", Mathematics, "Formats": digits in groups of three separated by a thin space.
// Digits after the decimal point group in threes from the point once there are `min` or more (4 or
// 5, as each unit's course sets it).
// A repeating decimal's overline is not grouped across.
const FRACTION = /(?<=\d)\.(\d+(?:(?:\\,| )\d+)*)(?!\\overline|\\dot|\\bar|\()/g

/**
 * The fractional digit runs of `s` that are not grouped as the paper says: "0.140625" and "0.14\,0625" both fail.
 * @param {string} s
 * @param {number} min
 * @returns {string[]}
 */
export function badDecimalGroups(s, min) {
  /** @type {string[]} */
  const bad = []
  for (const [, run = ''] of s.matchAll(FRACTION)) {
    const digits = run.replace(/\\,| /g, '')
    const want = digits.length >= min ? (digits.match(/\d{1,3}/g) ?? []).join(' ') : digits
    if (run.replace(/\\,| /g, ' ') !== want) bad.push(`.${run}`)
  }
  return bad
}
