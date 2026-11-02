// The figures of Arithmetic's pages: the number lines drawn ahead from their specs, and the place
// lines drawn when they show, each by its key.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lineSpecOf } from './decode.logic.js'
import { drawnFigures, figureSet, placeKey } from './figures.logic.js'

const mathml = (/** @type {string} */ tex) => `<math>${tex}</math>`

test('a spec file becomes the HTML of its line, its labels set by the formula setter', () => {
  const drawn = drawnFigures(
    { 'a.json': '{ "from": 0, "to": 1, "marks": [{ "at": "1/2", "tex": "m" }] }' },
    mathml
  )
  assert.deepEqual(Object.keys(drawn), ['a.json'])
  assert.ok(drawn['a.json']?.includes('<math>m</math>'))
})

test('the figure set gives a drawn figure by its name and a place line by its key, and nothing else', () => {
  const figures = figureSet({ 'a.json': '<x/>' }, mathml)
  assert.equal(figures['a.json'], '<x/>')
  assert.ok(figures[placeKey('line', '17/5')]?.includes('arithmetic-number-line'))
  assert.ok(!figures[placeKey('line', '17/5')]?.includes('lrn-line-at'))
  assert.ok(figures[placeKey('mark', '17/5')]?.includes('<math>\\frac{17}{5}</math>'))
  assert.ok(figures[placeKey('check', '17/5')]?.includes('lrn-line-cuts'))
  assert.equal(figures['place:other:17/5'], undefined)
  assert.equal(figures['nothing'], undefined)
  assert.equal(Reflect.get(figures, Symbol.iterator), undefined)
})

test('a spec is read field by field, and a field of the wrong kind is refused', () => {
  assert.deepEqual(lineSpecOf({ from: -1, to: 1, marks: [] }, 'x'), {
    from: -1,
    to: 1,
    marks: [],
    arrows: []
  })
  assert.deepEqual(
    lineSpecOf(
      {
        from: 0,
        to: 1,
        cuts: 6,
        marks: [{ at: '1/2', tex: 'm', side: 'below', row: 2 }],
        arrows: [{ from: '0', to: '1', tex: 'v', row: 1 }]
      },
      'x'
    ),
    {
      from: 0,
      to: 1,
      cuts: 6,
      marks: [{ at: '1/2', tex: 'm', side: 'below', row: 2 }],
      arrows: [{ from: '0', to: '1', tex: 'v', row: 1 }]
    }
  )
  assert.throws(() => lineSpecOf([], 'x'), /not a number line/)
  assert.throws(() => lineSpecOf({ from: 0.5, to: 1 }, 'x'), /from is not a whole number/)
  assert.throws(() => lineSpecOf({ from: 0, to: 1, marks: 3 }, 'x'), /marks is not a list/)
  assert.throws(() => lineSpecOf({ from: 0, to: 1, marks: [3] }, 'x'), /a mark is not a record/)
  assert.throws(
    () => lineSpecOf({ from: 0, to: 1, marks: [{ at: 3, tex: 'm' }] }, 'x'),
    /place is not text/
  )
  assert.throws(() => lineSpecOf({ from: 0, to: 1, arrows: [3] }, 'x'), /an arrow is not a record/)
})
