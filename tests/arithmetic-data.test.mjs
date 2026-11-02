// Every problem's form is one the checker knows, and its own stored answer passes in that form.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { FORMS, PROOF_FORM, matchAnswer } from '../src/units/arithmetic/core/check.logic.js'

const dir = new URL('../src/units/arithmetic/content/', import.meta.url)
/** A problem as the data files store it. @typedef {{ id?: string, prompt?: string, answer?: string, form: string }} Problem */
/** A topic file, as far as this test reads it. @typedef {{ bare?: Problem, kinds: { forms: { fade: Problem[] }[] }[] }} Topic */

/**
 * @template T
 * @param {string} path
 * @returns {Promise<T>}
 */
const load = async path => (await import(new URL(path, dir).href)).default
/** @param {string} sub */
const files = sub => readdirSync(new URL(`${sub}/`, dir)).filter(f => f !== 'index.js')

async function problems() {
  /** @type {[string, Problem][]} */
  const out = []
  for (const f of files('bank'))
    for (const p of /** @type {Problem[]} */ (await load(`bank/${f}`))) out.push([`bank/${f} ${p.id}`, p])
  for (const f of files('topics')) {
    /** @type {Topic} */
    const t = await load(`topics/${f}`)
    if (t.bare) out.push([`topics/${f} bare`, t.bare])
    for (const k of t.kinds)
      for (const fm of k.forms) fm.fade.forEach((p, i) => out.push([`topics/${f} fade ${i}`, p]))
  }
  return out
}

test('every problem states a form the checker knows, and its answer passes', async () => {
  for (const [where, p] of await problems()) {
    assert.ok(p.form in FORMS, `${where}: unknown form "${p.form}"`)
    if (p.form !== PROOF_FORM) {
      assert.ok(typeof p.answer === 'string', `${where}: no stored answer`)
      assert.ok(matchAnswer(p.answer, p.answer, p.form), `${where}: ${p.answer}`)
    }
  }
})
