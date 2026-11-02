import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { answerText, formWords, numberTex } from './shown.logic.js'
import { piecesIn } from '../../../kernel/maths-text.logic.js'

// Arithmetic shows a stored answer and a form line's example as mathematics, the way its topic
// files write numbers, never as typed syntax (units/arithmetic/shown.js).

const ANY = 'Answer as a number, or equivalent.'

test('numbers are set as the topic files write them', () => {
  assert.equal(numberTex('4 775'), '4\\,775')
  assert.equal(numberTex('2117'), '2\\,117')
  assert.equal(numberTex('25.000001'), '25.000\\,001')
  assert.equal(numberTex('2 300.00'), '2\\,300.00')
  assert.equal(numberTex('-1722.(3)'), '-1\\,722.(3)')
  assert.equal(numberTex('0.(18)'), '0.(18)')
  assert.equal(numberTex('-1/5'), '-\\frac{1}{5}')
  assert.equal(numberTex('-1 17/35'), '-1\\frac{17}{35}')
  assert.equal(numberTex('75/7%'), '\\frac{75}{7}\\%')
  assert.equal(numberTex('37.5%'), '37.5\\%')
  assert.equal(numberTex('6.14 × 10^-3'), '6.14\\times10^{-3}')
  assert.equal(numberTex('2^2 × 3^2 × 7'), '2^{2}\\times3^{2}\\times7')
  assert.equal(numberTex('x + 1'), null)
})

test('an answer: digits ungrouped in a base, a list item by item, Yes or No as a word', () => {
  assert.equal(answerText('(550)_7', 'Answer as the digits, as in 1011.'), '$(550)_{7}$')
  assert.equal(answerText('1011', 'Answer as the digits, as in 1011.'), '$1011$')
  assert.equal(
    answerText('(44 1 19 0 5)_60', 'Answer as the digits separated by spaces, as in 2 11 7.'),
    '$(44\\ 1\\ 19\\ 0\\ 5)_{60}$'
  )
  assert.equal(answerText('82, 1.1%', ANY), '$82$, $1.1\\%$')
  assert.equal(answerText('Yes', 'Answer as Yes or No.'), 'Yes')
  assert.equal(answerText('5, x', ANY), null)
})

test('the one form line whose words are typed syntax is set as maths', () => {
  assert.equal(
    formWords('Answer as a × 10^k with 1 ≤ a < 10'),
    'Answer as $a\\times10^{k}$ with $1\\le a<10$'
  )
  assert.equal(formWords('Answer as a percent'), 'Answer as a percent')
})

/**
 * Every problem in a value, at any depth.
 * @param {unknown} v
 * @returns {{ form: string, answer: string }[]}
 */
const problems = v =>
  Array.isArray(v)
    ? v.flatMap(problems)
    : v !== null && typeof v === 'object'
      ? [
          ...('form' in v &&
          'answer' in v &&
          typeof v.form === 'string' &&
          typeof v.answer === 'string'
            ? [{ form: v.form, answer: v.answer }]
            : []),
          ...Object.values(v).flatMap(problems)
        ]
      : []

for (const kind of ['topics', 'bank'])
  test(`every ${kind} answer and form-line example is set, and its MathML is made ahead`, async () => {
    const dir = new URL(`../content/${kind}/`, import.meta.url)
    for (const name of readdirSync(dir).filter(n => n.endsWith('.js') && n !== 'index.js')) {
      /** @type {Record<string, string>} */
      const map = (
        await import(
          new URL(
            `../content/mathml/${kind}/${name.replace(/\.js$/, '.gen.js')}`,
            import.meta.url
          ).href
        )
      ).default
      for (const p of problems(Object.values(await import(new URL(name, dir).href)))) {
        if (p.form === 'Write a proof.') continue
        const line = /^(.*), as in (.*)\.$/.exec(p.form)
        const shown = [answerText(p.answer, p.form)]
        if (line) shown.push(answerText(line[2] ?? '', p.form), formWords(line[1] ?? ''))
        for (const text of shown) {
          assert.notEqual(text, null, `${kind}/${name}: ${JSON.stringify(p)} is not set`)
          for (const piece of piecesIn(text ?? ''))
            assert.ok(piece in map, `${kind}/${name}: no MathML for ${JSON.stringify(piece)}`)
        }
      }
    }
  })
