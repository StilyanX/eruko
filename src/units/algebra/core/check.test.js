// Typed answers against stored ones, each in the form its problem states (Mathematics, "Every
// answer"). The forms whose match is the kernel's are tested there (kernel/answer-forms.test.js);
// here, one stored answer of each form in its own form, and the forms this unit adds: answers
// each takes, and answers it refuses.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ERROR_FORM, FORMS, LINE_FORM, PROOF_FORM, SELF_MARKED, SKETCH_FORM, TRANSLATE_FORM, TRANSLATE_INEQUALITY_FORM, answerTex, matchAnswer, shown, wrongLine } from './check.logic.js'

const LINE = 'Answer as the line $y = mx + c$, as in y = 2*x-3.'
const STANDARD = 'Answer as the line $ax + by = c$, whole numbers with no common factor, $a$ above 0, or $a = 0$ and $b$ above 0, as in 3*x-2*y = 6.'
const PAIR = 'Answer as an ordered pair, as in (2, -1).'
const SET = 'Answer as the set of values, as in {-1, 3}.'
const INEQUALITY = 'Answer as an inequality, as in -2 <= x < 5.'
const SET_INEQUALITY = 'Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.'
const INTERVAL = 'Answer as an interval, as in [-2, 5).'
const SOLUTIONS = 'Answer as the solutions, as in x = -1, x = 3.'
const COMPLEX = 'Answer as a complex number $a + bi$, as in 3-2*i.'
const PRIME = 'Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).'

// [form, stored, [accepted…], [refused…]]
/** @type {[string, string, string[], string[]][]} */
const CASES = [
  [LINE, 'y = 2*x-3', ['y = 2*x-3', 'y=-3+2*x', 'y = 2*x - 3'], ['2*x-3 = y', 'y = 2*(x-1)-1', 'y = 2*x+3', '2*x-y = 3', 'y = x+x-3']],
  [LINE, 'y = -x/2+1', ['y = -x/2+1', 'y = 1-(1/2)*x', 'y = -0.5*x+1'], ['y = (2-x)/2', 'x+2*y = 2']],
  [STANDARD, '3*x-2*y = 6', ['3*x-2*y = 6', '-2*y+3*x = 6'], ['6*x-4*y = 12', '-3*x+2*y = -6', 'y = 3*x/2-3', '3*x = 6+2*y', '3*x-2*y = 6.0', '3*x-2*y = 5']],
  [STANDARD, 'y = 4', ['y = 4'], ['2*y = 8', '-y = -4', 'y = 4*x']],
  [PAIR, '(2, -1)', ['(2, -1)', '(2,-1)', '( 4/2 , -1 )'], ['2, -1', '(-1, 2)', '(2, -1, 0)', '[2, -1]', 'x = 2, y = -1']],
  [SET, '{-1, 3}', ['{-1, 3}', '{3,-1}', '{ 3 , -2/2 }'], ['-1, 3', '{-1}', '{-1, 3, 3}', '(-1, 3)', '{-1, 4}']],
  [SET, '{3*i, -3*i}', ['{3*i, -3*i}', '{-3*i, 3*i}'], ['{3*i, 3*i}', '{3*i}', '{3, -3}', '{3*i, 3*i, -3*i}']],
  [SOLUTIONS, 'x = 2*i, x = -2*i', ['x = 2*i, x = -2*i', 'x = -2*i, x = 2*i'], ['x = 2*i, x = 2*i', 'x = 2*i', 'x = 2, x = -2', 'y = 2*i, y = -2*i']],
  [SOLUTIONS, 'x = 1+3*i, x = 1-3*i', ['x = 1-3*i, x = 1+3*i', 'x = 3*i+1, x = 1-3*i'], ['x = -1+3*i, x = -1-3*i', 'x = 1+3*i', 'x = 1, x = 3', 'x = 1+3, x = 1-3']],
  [COMPLEX, '2*i*sqrt(3)', ['2*i*sqrt(3)', 'sqrt(3)*2*i', '2*sqrt(3)*i'], ['i*sqrt(12)', 'sqrt(-12)', '-2*i*sqrt(3)', '2*sqrt(3)']],
  [COMPLEX, '3+i*sqrt(5)', ['3+i*sqrt(5)', 'i*sqrt(5)+3'], ['3-i*sqrt(5)', '-3+i*sqrt(5)', '3+i*sqrt(20)', '3+sqrt(-5)']],
  [SOLUTIONS, 'x = 2*i*sqrt(3), x = -2*i*sqrt(3)', ['x = 2*i*sqrt(3), x = -2*i*sqrt(3)', 'x = -2*i*sqrt(3), x = 2*i*sqrt(3)'], ['x = i*sqrt(12), x = -i*sqrt(12)', 'x = sqrt(-12), x = -sqrt(-12)', 'x = 2*i*sqrt(3), x = 2*i*sqrt(3)']],
  [SET, '{i*sqrt(7), -i*sqrt(7)}', ['{i*sqrt(7), -i*sqrt(7)}', '{-i*sqrt(7), i*sqrt(7)}'], ['{i*sqrt(7), i*sqrt(7)}', '{sqrt(-7), -sqrt(-7)}', '{sqrt(7), -sqrt(7)}']],
  [SOLUTIONS, 'x = 2+sqrt(3), x = 2-sqrt(3)', ['x = 2-sqrt(3), x = 2+sqrt(3)'], ['x = 2+sqrt(3)', 'x = 2+sqrt(3)*i, x = 2-sqrt(3)*i']],
  [SET, '{}', ['{}', '{ }'], ['{0}', '']],
  [INEQUALITY, 'x < 3', ['x < 3', '3 > x', 'x<6/2'], ['x <= 3', 'x > 3', 'y < 3', '3 < x', 'x < 3 or x > 5']],
  [INEQUALITY, '-2 <= x < 5', ['-2 <= x < 5', '5 > x >= -2', '-2 ≤ x < 5'], ['-2 < x < 5', '-2 <= x <= 5', 'x >= -2', '-2 <= x > 5']],
  [INEQUALITY, 'x < -1 or x >= 4', ['x < -1 or x >= 4', 'x >= 4 or x < -1', '-1 > x or 4 <= x'], ['x < -1', 'x < -1 or x > 4', '-1 < x <= 4']],
  [INTERVAL, '[-2, 5)', ['[-2, 5)', '[-2,5)', '[-4/2, 5)'], ['(-2, 5)', '[-2, 5]', '-2 <= x < 5', '[5, -2)']],
  [SET_INEQUALITY, 'All', ['All', 'all', 'ALL'], ['None', 'x > 3', 'x = 5']],
  [SET_INEQUALITY, 'x > 3', ['x > 3', '3 < x'], ['All', 'None', 'x = 3']],
  [SET_INEQUALITY, 'x < 2 or x > 2', ['x < 2 or x > 2', 'x > 2 or 2 > x'], ['x < 2', 'All', 'x <= 2 or x > 2']],
  [SET_INEQUALITY, 'x = 5', ['x = 5', 'x=10/2'], ['None', 'x = 6', 'x <= 5', 'All']],
  [SET_INEQUALITY, 'None', ['None', 'none'], ['All', 'x = 5']],
  [INTERVAL, '(-inf, -1) U [4, inf)', ['(-inf, -1) U [4, inf)', '[4, inf) U (-inf, -1)'], ['(-inf, -1]U[4, inf)', '(-inf, -1)', '[-inf, -1) U [4, inf)', '(-inf, -1) U [4, inf]']],
  [COMPLEX, '3-2*i', ['3-2*i', '-2*i+3', '3 - 2*i'], ['3+2*i', '3-2*x', '3-i-i', '(6-4*i)/2']],
  [COMPLEX, '-5/2+5*i*sqrt(3)/2', ['(-5+5*i*sqrt(3))/2', '-5/2+5*i*sqrt(3)/2'], ['(-10+10*i*sqrt(3))/4', '(5+5*i*sqrt(3))/2', '(-5-5*i*sqrt(3))/2']],
  [SOLUTIONS, 'x = -1/2+i*sqrt(3)/2, x = -1/2-i*sqrt(3)/2', ['x = (-1+i*sqrt(3))/2, x = (-1-i*sqrt(3))/2', 'x = (-1-i*sqrt(3))/2, x = (-1+i*sqrt(3))/2'], ['x = (1+i*sqrt(3))/2, x = (1-i*sqrt(3))/2', 'x = (-2+2*i*sqrt(3))/4, x = (-1-i*sqrt(3))/2']],
  [SET, '{3/2+i/2, 3/2-i/2}', ['{(3+i)/2, (3-i)/2}', '{(3-i)/2, (3+i)/2}'], ['{(3+i)/2, (3+i)/2}', '{(-3+i)/2, (-3-i)/2}', '{(6+2*i)/4, (3-i)/2}']],
  [COMPLEX, '1+3*i/2', ['(2+3*i)/2', '1+3*i/2'], ['(4+6*i)/4', '(2-3*i)/2', '(2+3*x)/2']],
  [COMPLEX, '-i/2', ['-i/2', '-(1/2)*i', '-0.5*i'], ['i/2', '-1/(2*i)']],
  [TRANSLATE_FORM, 'y = 2*x-3', ['y = 2*x-3', '2*x-3 = y'], ['y = 2*x+3', '2*x-3']],
  ['Answer in simplest radical form, as in 6*2^(1/3).', '6*2^(1/3)', ['6*2^(1/3)'], ['432^(1/3)', '3*16^(1/3)']],
  ['Answer in simplest radical form, as in 3*x^2*sqrt(2*x).', '3*x^2*sqrt(2*x)', ['3*x^2*sqrt(2*x)'], ['sqrt(18*x^5)', '3*x*sqrt(2*x^3)']],
  ['Answer with a factor with a minus sign taken out, as in -3*x*(x+2).', '-5*(2*x-7)', ['-5*(2*x-7)', '-5*(-7+2*x)'], ['-10*x+35', '5*(-2*x+7)', '-(10*x-35)', '-5*(2*x+7)']],
  ['Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).', '2*(2*x+3)*(x+5)', ['2*(2*x+3)*(x+5)', '(x+5)*(2*x+3)*2', '-2*(-2*x-3)*(x+5)'], ['(4*x+6)*(x+5)', '(2*x+3)*(2*x+10)', '4*x^2+26*x+30', '2*(2*x^2+13*x+15)']],
  [PRIME, '(x^2+6)*(x-4)', ['(x^2+6)*(x-4)', '(x-4)*(6+x^2)'], ['(x^3-4*x^2+6*x-24)', 'x^3-4*x^2+6*x-24', '(2*x^2+12)*(x-4)/2', '(x^2+6)*x-4*(x^2+6)']],
  // No fewer brackets holding a letter than the stored answer: a bracket of degree 8 with no rational root still factors.
  [PRIME, '(2*x-1)*(2*x+1)*(16*x^4+8*x^3+4*x^2+2*x+1)*(16*x^4-8*x^3+4*x^2-2*x+1)', ['(2*x-1)*(2*x+1)*(16*x^4+8*x^3+4*x^2+2*x+1)*(16*x^4-8*x^3+4*x^2-2*x+1)', '(16*x^4-8*x^3+4*x^2-2*x+1)*(2*x+1)*(16*x^4+8*x^3+4*x^2+2*x+1)*(2*x-1)'], ['(2*x-1)*(2*x+1)*(256*x^8+64*x^6+16*x^4+4*x^2+1)', '(2-1)*(2*x-1)*(2*x+1)*(256*x^8+64*x^6+16*x^4+4*x^2+1)']],
  [PRIME, '(x-1)^2*(x^2+1)', ['(x-1)^2*(x^2+1)', '(x-1)*(x-1)*(x^2+1)', '(x^2+1)*(x-1)^2'], ['(x^2-2*x+1)*(x^2+1)']],
  [PRIME, '(x-1)*(x-1)*(x^2+1)', ['(x-1)^2*(x^2+1)', '(x-1)*(x^2+1)*(x-1)'], ['(x-1)*(x^3-x^2+x-1)']],
  [PRIME, '3*x^2*(x-y)*(x+y)*(x^2+y^2)', ['3*x^2*(x-y)*(x+y)*(x^2+y^2)', '3*x*x*(x^2+y^2)*(x+y)*(x-y)'], ['3*x^2*(x^2-y^2)*(x^2+y^2)']],
  [ERROR_FORM, 'Line 3: 2*x = 10', ['Line 3: 2*x = 10', 'line 3: x = 5', 'Line 3:anything'], ['Line 2: 2*x = 10', '3', 'Line 3', 'Line: 2*x = 10', '2*x = 10']]
]

for (const [form, stored, accepted, refused] of CASES)
  test(`${form} ${stored}`, () => {
    assert.ok(form in FORMS, form)
    for (const typed of accepted) assert.equal(matchAnswer(typed, stored, form), true, `takes ${typed}`)
    for (const typed of refused) assert.equal(matchAnswer(typed, stored, form), false, `refuses ${typed}`)
  })

test('every form with an example takes its own example, and a form the learner marks is named so', () => {
  for (const form of Object.keys(FORMS)) {
    const example = /, as in (.*)\.$/.exec(form)?.[1]
    if (example) assert.equal(matchAnswer(example, example, form), true, form)
  }
  assert.deepEqual(SELF_MARKED, [PROOF_FORM, SKETCH_FORM, LINE_FORM, ERROR_FORM, TRANSLATE_FORM, TRANSLATE_INEQUALITY_FORM])
  assert.equal(matchAnswer('anything', 'anything', PROOF_FORM), false)
  assert.equal(matchAnswer('anything', 'anything', SKETCH_FORM), false)
  assert.equal(matchAnswer('anything', 'anything', LINE_FORM), false)
})

test('Find the error names its line by number', () => {
  assert.equal(wrongLine('Line 12: x = 2'), 12)
  assert.equal(wrongLine('x = 2'), null)
})

test('an answer is set as mathematics in its form, or left as typed where it does not read', () => {
  assert.equal(shown(PROOF_FORM), false)
  assert.equal(answerTex('Yes', 'Answer as Yes or No.'), null)
  assert.equal(answerTex('Odd', 'Answer as Even, Odd or Neither.'), null)
  assert.equal(matchAnswer('neither', 'Neither', 'Answer as Even, Odd or Neither.'), true)
  assert.equal(matchAnswer('Even', 'Odd', 'Answer as Even, Odd or Neither.'), false)
  assert.equal(answerTex('(2, -1)', PAIR), '\\left(2,\\ -1\\right)')
  assert.equal(answerTex('(2, )', PAIR), null)
  assert.equal(answerTex('{-1, 3}', SET), '\\{-1,\\ 3\\}')
  assert.equal(answerTex('{}', SET), '\\{\\}')
  assert.equal(answerTex('-1, 3', SET), null)
  assert.equal(answerTex('-2 <= x < 5', INEQUALITY), '-2\\le x<5')
  assert.equal(answerTex('x < -1 or x >= 4', INEQUALITY), 'x<-1\\text{ or }x\\ge 4')
  assert.equal(answerTex('x << 1', INEQUALITY), null)
  assert.equal(answerTex('all', SET_INEQUALITY), '\\text{All}')
  assert.equal(answerTex('(-inf, -1) U [4, inf)', INTERVAL), '(-\\infty,\\ -1)\\cup [4,\\ \\infty)')
  assert.equal(answerTex('-inf, 1', INTERVAL), null)
  assert.equal(answerTex('Line 3: 2*x = 10', ERROR_FORM), '\\text{Line 3: }2 x = 10')
  assert.equal(answerTex('2*x = 10', ERROR_FORM), null)
  assert.equal(answerTex('y = 2*x-3', LINE), 'y = 2 x-3')
  assert.equal(answerTex('2**x', 'Answer as an expression, or equivalent.'), null)
})

test('an absolute value is compared by value on both sides of every breakpoint', () => {
  const f = 'Answer as an expression with an absolute value, or equivalent, as in 2*abs(x-1)+3.'
  assert.equal(matchAnswer('abs(x+3)+2', '|x+3|+2', f), true)
  assert.equal(matchAnswer('|3-x|', 'abs(x-3)', f), true)
  assert.equal(matchAnswer('2*abs(x-1)+3', 'abs(2*x-2)+3', f), true)
  assert.equal(matchAnswer('abs(x+3)+2', 'x+5', f), false)
  assert.equal(matchAnswer('|x-1|', '|x+1|', f), false)
  assert.equal(matchAnswer('||x|-1|', 'abs(abs(x)-1)', f), true)
  assert.equal(matchAnswer('abs(x+3)+2', 'abs(x+3)+2', 'Answer as an expression, or equivalent.'), false)
})
