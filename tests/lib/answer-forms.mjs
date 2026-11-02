// Every stored answer of a maths unit's topics and bank, with its form, so a test can hold the two
// against each other: the checks every maths unit's check tests run.
import { readdirSync } from 'node:fs'

/** @typedef {[where: string, answer: string, form: string]} StoredAnswer */

/**
 * [where, answer, form] for every object with a string `answer` and `form` in the unit's data.
 * @param {string} unit
 * @returns {Promise<StoredAnswer[]>}
 */
export async function storedAnswers(unit) {
  /** @type {StoredAnswer[]} */
  const items = []
  /**
   * @param {unknown} o
   * @param {string} where
   * @returns {void}
   */
  const walk = (o, where) => {
    if (Array.isArray(o)) o.forEach((x, i) => walk(x, `${where}[${i}]`))
    else if (o && typeof o === 'object') {
      const r = /** @type {Record<string, unknown>} */ (o) // a JSON-like tree: any key may be read
      if (typeof r.answer === 'string' && typeof r.form === 'string')
        items.push([`${where} ${r.id == null ? '' : typeof r.id === 'string' ? r.id : JSON.stringify(r.id)}`.trim(), r.answer, r.form])
      for (const k in r) walk(r[k], `${where}.${k}`)
    }
  }
  const dir = new URL(`../../src/units/${unit}/content/`, import.meta.url)
  for (const d of ['topics', 'bank'])
    for (const f of readdirSync(new URL(`${d}/`, dir)))
      if (f !== 'index.js') walk((await import(new URL(`${d}/${f}`, dir).href)).default, `${d}/${f}`)
  return items
}

/**
 * The answers a form refuses from itself, and the answers a form's own "as in X" example is accepted for.
 * @param {StoredAnswer[]} items
 * @param {(typed: string, stored: string, form: string) => unknown} matchAnswer
 * @returns {{ own: string[], example: string[] }}
 */
export function formFaults(items, matchAnswer) {
  const own = items.filter(([, a, f]) => !matchAnswer(a, a, f)).map(([w]) => w)
  const example = items
    .filter(([, a, f]) => {
      const ex = f.match(/as in (.*?)\.?$/)?.[1]
      return ex && matchAnswer(ex, a, f)
    })
    .map(([w]) => w)
  return { own, example }
}
