// Hides: which figures Arithmetic's pages draw and from what. The number lines of content/figures
// are drawn ahead, by scripts/gen/figures.mjs, into figures.gen.js. The lines of "Place it on the
// line" are drawn when they show, from the key a figure names: "place:line:17/5" is the bare line
// for 17/5, "place:mark:17/5" the line with the value marked, "place:check:17/5" the line cut into
// tenths with the value marked. One line is made for each key, so a stored copy of each of the
// course's hundreds of values would only weigh the page. Pure functions, tested in figures.test.js.
import { lineSpecOf } from './decode.logic.js'
import { lineHtml, placeLine } from './number-line.logic.js'

/**
 * The figures drawn ahead: each number line of content/figures as the HTML that draws it.
 * @param {Readonly<Record<string, string>>} specs each file's text, by file name
 * @param {(tex: string) => string} mathml
 * @returns {Record<string, string>}
 */
export function drawnFigures(specs, mathml) {
  return Object.fromEntries(
    Object.entries(specs).map(([name, text]) => [
      name,
      lineHtml(lineSpecOf(JSON.parse(text), name), mathml)
    ])
  )
}

/** The name a place line is asked for by. @param {'line' | 'mark' | 'check'} view @param {string} value */
export const placeKey = (view, value) => `place:${view}:${value}`

/**
 * The figures of a unit's page: the ones drawn ahead, and every place line by its key. A figure
 * the pages ask for by a key of neither kind is not there.
 * @param {Readonly<Record<string, string>>} drawn
 * @param {(tex: string) => string} mathml sets a label's TeX
 * @returns {Readonly<Record<string, string>>}
 */
export const figureSet = (drawn, mathml) =>
  new Proxy(drawn, {
    get(target, key) {
      if (typeof key !== 'string') return undefined
      if (key in target) return target[key]
      const m = /^place:(line|mark|check):(.+)$/.exec(key)
      const view = m?.[1]
      const value = m?.[2]
      if (value === undefined) return undefined
      if (view === 'line' || view === 'mark' || view === 'check')
        return lineHtml(placeLine(value, view), mathml)
      return undefined
    }
  })
