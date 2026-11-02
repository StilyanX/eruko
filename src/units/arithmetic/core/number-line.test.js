// The number line: where each part lies, the HTML that draws it, and what "Place it on the line"
// asks of it (the line for a value, the mark in hundredths, the check's text).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { matchAnswer, PLACE_FORM } from './check.logic.js'
import {
  decimalOf,
  figureText,
  hundredthsAt,
  layoutOf,
  lineHtml,
  lineText,
  placeLine,
  reachOf,
  typedHundredths
} from './number-line.logic.js'

const mathml = (/** @type {string} */ tex) => `<math>${tex}</math>`

test('a place line runs from 0 to the whole number past the value, and never ends before 2', () => {
  assert.equal(reachOf('17/5'), 4)
  assert.equal(reachOf('2.5'), 3)
  assert.equal(reachOf('250%'), 3)
  assert.equal(reachOf('0.8'), 2)
  assert.equal(reachOf('0.80'), 2)
  assert.equal(reachOf('35%'), 2)
  assert.equal(reachOf('3/2'), 2)
  assert.throws(() => reachOf('-3/2'))
  assert.throws(() => reachOf('word'))
})

test('the bare line holds no mark and no cut; the check cuts each unit into tenths and marks the value', () => {
  assert.deepEqual(placeLine('17/5', 'line'), { from: 0, to: 4, marks: [] })
  assert.deepEqual(placeLine('17/5', 'mark').marks, [{ at: '17/5', tex: '\\frac{17}{5}' }])
  assert.equal(placeLine('17/5', 'check').cuts, 10)
  assert.equal(placeLine('35%', 'check').marks[0]?.tex, '35\\%')
})

test('every whole number lies at its share of the width, equal steps for equal amounts', () => {
  const l = layoutOf({ from: 0, to: 4, marks: [{ at: '17/5', tex: 'x' }] })
  assert.deepEqual(
    l.wholes.map(w => w.percent),
    [0, 25, 50, 75, 100]
  )
  assert.equal(l.marks[0]?.percent, 85)
  const negative = layoutOf({ from: -4, to: 4, marks: [{ at: '-3', tex: 'x' }] })
  assert.equal(negative.marks[0]?.percent, 12.5)
  assert.equal(negative.wholes[0]?.text, '−4')
  assert.throws(() => layoutOf({ from: 2, to: 2, marks: [] }))
})

test('a thirds mark keeps four decimals of its percent', () => {
  assert.equal(
    layoutOf({ from: 0, to: 2, marks: [{ at: '1/3', tex: 'x' }] }).marks[0]?.percent,
    16.6666
  )
})

test('the bare line labels 0 and the whole numbers and nothing between', () => {
  const html = lineHtml(placeLine('17/5', 'line'), mathml)
  const labels = [...html.matchAll(/class="lrn-line-n"[^>]*>([^<]*)</g)].map(m => m[1])
  assert.deepEqual(labels, ['0', '1', '2', '3', '4'])
  assert.equal(html.match(/<line /g)?.length, 6)
  assert.ok(!html.includes('lrn-line-cuts'))
  assert.ok(!html.includes('lrn-line-at'))
  assert.ok(html.startsWith('<arithmetic-number-line>'))
})

test('the check draws a cut every tenth and the value labelled above the line', () => {
  const html = lineHtml(placeLine('17/5', 'check'), mathml)
  assert.ok(html.includes('--cuts:40'))
  assert.ok(html.includes('<math>\\frac{17}{5}</math>'))
})

test('a mark can hang below the line, and an arrow runs between two places with its label above', () => {
  const html = lineHtml(
    {
      from: 0,
      to: 1,
      marks: [{ at: '1/2', tex: 'b', side: 'below' }],
      arrows: [
        { from: '0', to: '1/2', tex: 'r', row: 1 },
        { from: '1/2', to: '0', tex: 'l', row: 2 }
      ]
    },
    mathml
  )
  assert.ok(html.includes('lrn-line-right'))
  assert.ok(html.includes('lrn-line-left'))
  assert.ok(html.includes('<math>b</math>'))
})

test('a press or a typed place becomes a mark in hundredths, within the line', () => {
  assert.equal(hundredthsAt(0.5, 4), 200)
  assert.equal(hundredthsAt(0.8503, 4), 340)
  assert.equal(hundredthsAt(-3, 4), 0)
  assert.equal(hundredthsAt(2, 4), 400)
  assert.equal(decimalOf(340), '3.40')
  assert.equal(typedHundredths('3.4', 4), 340)
  assert.equal(typedHundredths(' 3 ', 4), 300)
  assert.equal(typedHundredths('4', 4), 400)
  for (const bad of ['', 'x', '3.45', '4.1', '5', '.5', '3,4', '-1'])
    assert.equal(typedHundredths(bad, 4), null, bad)
})

test('the check says where the value lies: on a tenth, or inside one', () => {
  assert.equal(
    figureText('check', '17/5'),
    'Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 17/5 lies at 3.4, between 3 and 4.'
  )
  assert.equal(figureText('check', '0.80'), 'Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.80 lies at 0.8, between 0 and 1.')
  assert.equal(
    figureText('check', '3/8'),
    'Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/8 lies at 0.375, in the tenth from 0.3 to 0.4, between 0 and 1.'
  )
  assert.equal(
    figureText('check', '1/3'),
    'Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1/3 lies in the tenth from 0.3 to 0.4, between 0 and 1.'
  )
})

test('the text of a figure never gives the place in the bare line, and gives it once marked', () => {
  assert.equal(
    lineText(4),
    'Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between.'
  )
  assert.equal(figureText('line', '17/5'), lineText(4))
  assert.ok(!/17|3\.4/.test(figureText('line', '17/5')))
  assert.equal(
    figureText('mark', '17/5'),
    'Number line from 0 to 4, the whole numbers 0 to 4 marked, with 17/5 marked, between 3 and 4.'
  )
  assert.ok(!/3\.4|tenth/.test(figureText('mark', '17/5')), 'the decimal comes in a later step')
  assert.ok(figureText('check', '17/5').includes('each unit cut into tenths'))
})

/** A seeded run of numbers, so the property runs the same every time. */
function* sequence(/** @type {number} */ seed) {
  let x = seed
  for (;;) {
    x = (x * 1103515245 + 12345) % 2147483648
    yield x / 2147483648
  }
}

test('a mark in the value’s own tenth is right, and a mark two tenths away never is', () => {
  const next = sequence(7)
  for (let i = 0; i < 400; i++) {
    const den = 2 + Math.floor((next.next().value ?? 0) * 30)
    const num = 1 + Math.floor((next.next().value ?? 0) * den * 4)
    if (num % den === 0) continue
    const value = `${num}/${den}`
    const right = (/** @type {number} */ h) => matchAnswer(decimalOf(h), value, PLACE_FORM)
    const hundredths = Math.floor((num * 100) / den)
    const tenth = Math.floor(hundredths / 10)
    assert.ok(right(hundredths), `${value}: its own hundredth`)
    assert.ok(right(tenth * 10 + 5), `${value}: the middle of its own tenth`)
    if (tenth >= 2) assert.ok(!right((tenth - 2) * 10 + 5), `${value}: two tenths below`)
    assert.ok(!right((tenth + 2) * 10 + 5), `${value}: two tenths above`)
  }
})
