// Finding a page by a word typed on the unit page.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { finds } from './find.logic.js'

test('a word finds the titles whose words start with its first four letters', () => {
  assert.ok(finds('division', 'Division With Remainder and Long Division'))
  assert.ok(finds('division', 'Dividing Fractions'))
  assert.ok(finds('division', 'Divisibility Rules'))
  assert.ok(!finds('division', 'Multiplying Fractions'))
})

test('every word typed must be found, in any order, whatever the case or accents', () => {
  assert.ok(finds('fractions adding', 'Adding Fractions and Decimals'))
  assert.ok(!finds('fractions adding', 'Adding Rational Numbers'))
  assert.ok(finds('uber', 'Über uns'))
  assert.ok(finds('FOOD', 'Food and chores: Lebensmittel'))
})

test('nothing typed finds nothing', () => {
  assert.ok(!finds('', 'Place Value'))
  assert.ok(!finds('  ', 'Place Value'))
})

test('words in any script are found, Cyrillic as Latin', () => {
  assert.ok(finds('сбор', 'Сбор на първите n естествени числа'))
  assert.ok(finds('СБОР числа', 'Сбор на първите n естествени числа'))
  assert.ok(!finds('граница', 'Сбор на първите n естествени числа'))
})
