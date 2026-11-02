// Hides: what a test asks of a figure's sentences and size (figure.logic.js): the caption and the
// list split where a reader would, and a figure's width follows from its smallest label.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sentencesOf, widthInBodyText } from './figure.logic.js'

test('a text of one sentence stays one, a decimal point or a formula does not split it', () => {
  assert.deepEqual(sentencesOf('The line y = 0.5x passes through (0; 0).'), [
    'The line y = 0.5x passes through (0; 0).'
  ])
  assert.deepEqual(
    sentencesOf('The graph of the function: maximum at (0, 0), minimum at (2, −4).'),
    ['The graph of the function: maximum at (0, 0), minimum at (2, −4).']
  )
})

test('a text of two sentences is two', () => {
  assert.deepEqual(
    sentencesOf(
      'A number line from -4 to 2 shows the vector from 0 to -3. A vector of length 1 runs from -3 to -2.'
    ),
    [
      'A number line from -4 to 2 shows the vector from 0 to -3.',
      'A vector of length 1 runs from -3 to -2.'
    ]
  )
})

test('a figure is drawn so its smallest label is body text: viewBox width over font size', () => {
  const svg =
    '<svg viewBox="-10 0 480 120"><text font-size="16">a</text><text font-size="13">b</text></svg>'
  assert.equal(widthInBodyText(svg), 36.923)
  assert.equal(widthInBodyText('<svg viewBox="0 0 10 10"><line/></svg>'), null)
})
