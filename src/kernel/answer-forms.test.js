// Typed answers against stored ones, each by the match of its form: answers each match takes, and
// answers it refuses; and what is read of an answer before it is marked.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { MATCHES, reading } from './answer-forms.logic.js'
import { matched } from './answer.logic.js'
import { readMessage } from './answer-syntax.logic.js'

// [match, stored, [accepted…], [refused…]]
/** @type {[import('./answer-forms.logic.js').MatchName, string, string[], string[]][]} */
const CASES = [
  ['simplestRoots', '6*2^(1/3)', ['6*2^(1/3)', '2^(1/3)*6', '6 * 2^(1/3)'], ['432^(1/3)', '3*16^(1/3)', '2*54^(1/3)', '6*4^(1/6)', '6*2^(2/6)', '12/4^(1/3)', '6*2^(1/2)', '7.56', '3*2^(1/3)+3*2^(1/3)']],
  ['simplestRoots', '4^(1/3)', ['4^(1/3)'], ['2^(2/3)', '16^(1/6)', '32^(1/3)/2']],
  ['simplestRoots', 'sqrt(2)', ['sqrt(2)', '2^(1/2)'], ['4^(1/4)', 'sqrt(8)/2', '2/sqrt(2)', '1.414']],
  ['simplestRoots', '3*x^2*sqrt(2*x)', ['3*x^2*sqrt(2*x)', 'sqrt(2*x)*3*x^2', '3*x^2*(2*x)^(1/2)'], ['sqrt(18*x^5)', '3*x*sqrt(2*x^3)', '3*sqrt(2*x^5)', 'x^2*sqrt(18*x)', '3*x^2*sqrt(2)*sqrt(x)', '3*x^(5/2)*sqrt(2)', '3*x^2*sqrt(2*y)']],
  ['simplestRoots', '2*a*b*(3*a^2*b)^(1/3)', ['2*a*b*(3*a^2*b)^(1/3)', '2*b*a*(3*b*a^2)^(1/3)'], ['(24*a^5*b^4)^(1/3)', '2*a*(3*a^2*b^4)^(1/3)', '2*a*b*(3*a^2*b)^(1/2)']],
  ['simplestRoots', '2*sqrt(3)+5^(1/3)', ['2*sqrt(3)+5^(1/3)', '5^(1/3)+2*sqrt(3)'], ['sqrt(12)+5^(1/3)', 'sqrt(3)+sqrt(3)+5^(1/3)']],
  ['simplestRoots', '(1+2^(1/3))/3', ['(1+2^(1/3))/3', '1/3+2^(1/3)/3'], ['(2+2*2^(1/3))/6', '(1+16^(1/3)/2)/3']],
  ['simplestRoots', 'sqrt(x)/x', ['sqrt(x)/x'], ['1/sqrt(x)', 'x^(-1/2)']],
  ['simplestRoots', 'sqrt(x+1)', ['sqrt(x+1)', '(x+1)^(1/2)'], ['sqrt(x)+1', '(x+1)/sqrt(x+1)']],
  ['simplestRoots', '5', ['5'], ['sqrt(25)', '125^(1/3)', '10/2']],
  ['integer', '-7', ['-7', '−7', ' -7 ', '- 7', '(-7)'], ['7', '-7.0', '-14/2']],
  ['integer', '12345', ['12345', '12 345'], ['12 346', '1.2345*10^4', '']],
  ['number', '3/10', ['3/10', '0.3', '6/20', '3*10^-1'], ['0.33', '10/3', '3', 'x']],
  ['number', '2*pi', ['2*pi', 'pi*2', '4*pi/2'], ['2', '6.28', '2*p']],
  ['lowestFraction', '3/14', ['3/14', ' 3 / 14 '], ['6/28', '0.214', '14/3']],
  ['lowestFraction', '-4', ['-4'], ['-8/2', '4', '-4.0']],
  ['finiteDecimal', '0.5975', ['0.5975', '0.59750', ' 0.5975'], ['5.975*10^-1', '239/400', '0.597', '.5975']],
  ['words', 'Yes', ['yes', 'YES', ' Yes '], ['No', 'y', 'true']],
  ['primeProduct', '2^3*3^2*7', ['2^3*3^2*7', '7*3^2*2^3', '2*2*2*3^2*7'], ['2^3*3*7', '504', '8*9*7', '2^3*9*7']],
  ['numberList', '72, 6', ['72, 6', '72,6', '72 , 6', '144/2, 6'], ['6, 72', '72', '72, 6, 1']],
  ['scientific', '3.88*10^7', ['3.88*10^7', '3.880*10^7', '3.88*10^(7)'], ['38.8*10^6', '38800000', '3.88*10^6', '0.388*10^8']],
  ['scientific', '4.1*10^-3', ['4.1*10^-3', '4.1*10^(-3)'], ['0.0041', '41*10^-4', '4.1*10^3']],
  ['rounded', '0.0030', ['0.0030', '0.003 0', ' 0.0030 '], ['0.003', '.0030', '3.0*10^-3']],
  ['rounded', '3500', ['3500', '3 500'], ['3500.0', '3.5*10^3', '3499']],
  ['factorPairs', '1, 28; 2, 14; 4, 7', ['1,28;2,14;4,7', '4, 7; 2, 14; 28, 1', '2,14 ; 7,4 ; 1,28'], ['1, 28; 2, 14', '1, 28; 2, 14; 4, 7; 7, 4', '1, 28, 2, 14, 4, 7', '1, 28; 2, 14; 4, 8']],
  ['factorPairs', '1, -4; -1, 4; 2, -2', ['-4, 1; 4, -1; -2, 2'], ['1, 4; 2, 2', '1, -4; -1, 4']],
  ['expression', '-(4/3)*pi', ['-(4/3)*pi', '-4*pi/3', 'pi*(-4/3)'], ['4*pi/3', '-4/3', '-4/(3*pi)', '-4pi/3']],
  ['collected', '3*x^2+x-10', ['3*x^2+x-10', 'x-10+3*x^2', '-10+x+3*x^2'], ['(x+2)*(3*x-5)', '3*x^2-5*x+6*x-10', '3*x^2+x+10', '3*x*x+x-10', 'x*(3*x+1)-10', '3*x^2+1*x-10', '3*x^(4/2)+x-10', '3*x^2+x^1-10', '3*x^2+x/1-10', '3*x^2.0+x-10']],
  ['collected', 'a^2-b^2', ['a^2-b^2', '-b^2+a^2'], ['(a-b)*(a+b)', 'a^2+a*b-a*b-b^2', 'a^2+b^2']],
  ['collected', '0', ['0'], ['x-x', '1', '0*x']],
  ['collected', 'x^2/2-3*x/4', ['x^2/2-3*x/4', '(1/2)*x^2-(3/4)*x', '0.5*x^2-0.75*x'], ['x*(2*x-3)/4', '2*x^2/4-3*x/4']],
  ['singleTerm', '6*a^5*b^2', ['6*a^5*b^2', 'b^2*a^5*6', '6*b^2*a^5'], ['6*a^3*a^2*b^2', '2*3*a^5*b^2', '6*a^5*b', '(6*a^5)*(b^2)+0']],
  ['singleTerm', '-a^2*b', ['-a^2*b', '-b*a^2', '-(a^2*b)'], ['a^2*b', '-a*a*b']],
  ['factorTakenOut', '2*g^2*(-4*g^3+2*h^2-1)', ['2*g^2*(-4*g^3+2*h^2-1)', '2*g^2*(2*h^2-4*g^3-1)', '(-4*g^3+2*h^2-1)*2*g^2'], ['-2*g^2*(4*g^3-2*h^2+1)', 'g^2*(-8*g^3+4*h^2-2)', '-8*g^5+4*g^2*h^2-2*g^2', '2*g*(-4*g^4+2*g*h^2-g)']],
  ['factorTakenOut', 'x*(x+3)/2', ['x*(x+3)/2', '(1/2)*x*(x+3)', '(x/2)*(x+3)'], ['x*(x/2+3/2)', '(x^2+3*x)/2']],
  ['wholeBrackets', '2*(2*x+3)*(x+5)', ['2*(2*x+3)*(x+5)', '(x+5)*(2*x+3)*2'], ['(4*x+6)*(x+5)', '4*x^2+26*x+30']],
  ['frontBrackets', '2*x^2*(3*x-2)*(3*x+2)', ['2*x^2*(3*x-2)*(3*x+2)', '(3*x+2)*x^2*2*(3*x-2)'], ['18*x^4-8*x^2', '2*x^2*(9*x^2-4)', '2*(x^2)^2*(9-4/x^2)']],
  ['frontBrackets', '-3*x*y^2*(x-y)*(x+y)', ['-3*x*y^2*(x-y)*(x+y)', '3*x*y^2*(y-x)*(x+y)'], ['-3*x^3*y^2+3*x*y^4', '-3*x*y*(x*y-y^2)*(x+y)']],
  ['frontWholeBrackets', '2*x^2*(3*x-2)*(3*x+2)', ['2*x^2*(3*x-2)*(3*x+2)'], ['x^2*(6*x-4)*(3*x+2)', '18*x^4-8*x^2']],
  ['frontSumBrackets', '2*x^2*(x^2+6)*(x-4)', ['2*x^2*(x^2+6)*(x-4)'], ['2*x*(x^3+6*x)*(x-4)', 'x^2*(2*x^2+12)*(x-4)', '2*x^5-8*x^4+12*x^3-48*x^2']],
  ['primeSumBrackets', '(x^2+6)*(x-4)', ['(x^2+6)*(x-4)'], ['(x^3-4*x^2+6*x-24)']],
  ['primeSumBrackets', '(x-3)*(x^2+3*x+9)*(x+3)*(x^2-3*x+9)', ['(x+3)*(x-3)*(x^2-3*x+9)*(x^2+3*x+9)'], ['(x^3-27)*(x^3+27)', '(x^2-9)*(x^4+9*x^2+81)', '(x-3)*(x+3)*(x^4+9*x^2+81)', 'x^6-729']],
  ['primeSumBrackets', '(x^2+2*x+2)*(x^2-2*x+2)*(x-1)', ['(x-1)*(x^2-2*x+2)*(x^2+2*x+2)'], ['(x^4+4)*(x-1)']],
  ['frontSumBrackets', '(x^3-27)*(x^3+27)', ['(x^3-27)*(x^3+27)'], []],
  ['sumBrackets', '(x^2+6)*(x-4)', ['(x^2+6)*(x-4)', '(x-4)*(6+x^2)'], ['(x^3-4*x^2+6*x-24)', '(2*x^2+12)*(x-4)/2']],
  ['negativeFactorTakenOut', '-(a*b+a+b)', ['-(a*b+a+b)', '-(b+a+a*b)', '-1*(a*b+a+b)'], ['-a*b-a-b', '(-a*b-a-b)', '-(a*b+a-b)']],
  ['lowestAlgebraicFraction', '(x^2+x-1)/(x*(1-x))', ['(x^2+x-1)/(x*(1-x))', '(x^2+x-1)/(x-x^2)', '(1-x-x^2)/(x^2-x)', '-(x^2+x-1)/(x^2-x)'], ['x/(1-x)-1/x', '(2*x^2+2*x-2)/(2*x-2*x^2)', '(x^3+x^2-x)/(x^2*(1-x))']],
  ['lowestAlgebraicFraction', '2*a/(3*b)', ['2*a/(3*b)', '(2*a)/(3*b)', '-(-2*a)/(3*b)'], ['4*a/(6*b)', '2*a*b/(3*b^2)', '3*b/(2*a)', '(2/3)*(a/b)', '2*a/3/b', '(2/3)*a/b', '2*a*(1/(3*b))']],
  ['collected', '2*x-y/x+3/x', ['2*x-y/x+3/x', '3/x-y/x+2*x', '2*x+3/x-y/x'], ['(2*x^2-y+3)/x', '2*x+(3-y)/x', '2*x^2/x-y/x+3/x']],
  ['positiveIndices', 'c^4/b^5', ['c^4/b^5', '(1/b^5)*c^4', 'c^4*(1/b^5)'], ['c^4*b^(-5)', 'c^4/(b^2*b^3)', 'c^4/b^6', 'c^4*b^-5']],
  ['positiveIndices', '1/g^(7*k)', ['1/g^(7*k)', '1/g^(k*7)'], ['g^(-7*k)', 'g^(-k*7)', '1/g^(-7*k)', 'g^(7*k)']],
  ['positiveIndices', 'a^(n-1)', ['a^(n-1)', 'a^(-1+n)'], ['a^n/a', 'a^(1-n)']],
  ['positiveIndices', '(x+1)^3', ['(x+1)^3'], ['(x+1)^2*(x+1)', '(x+1)^4/(x+1)', '1/(x+1)^-3']],
  ['eachBaseOnce', '2^(5*p)*k^(4*p)', ['2^(5*p)*k^(4*p)', 'k^(4*p)*2^(5*p)', '32^p*k^(4*p)'], ['(2*k)^(3*p)*(4*k)^p', '8^p*4^p*k^(4*p)', '2^(3*p)*2^(2*p)*k^(4*p)', '2^(5*p)*k^(3*p)']],
  ['eachBaseOnce', 'g^(n*k)', ['g^(n*k)', 'g^(k*n)'], ['(g^n)^k', 'g^(n+k)', 'g^n*g^k']],
  ['fractionalIndices', 'x^(-1/3)', ['x^(-1/3)', '1/x^(1/3)'], ['x^-1/3', 'x^(1/3)', '1/sqrt(x)', 'x^(-2/6)']],
  ['fractionalIndices', '3*5^(1/2)', ['3*5^(1/2)', '5^(1/2)*3', '3*5^0.5'], ['3*sqrt(5)', '5^(1/2)', '3*5^1/2']],
  ['rootSigns', '1/sqrt(x)', ['1/sqrt(x)', 'sqrt(x)/x', 'sqrt(1/x)'], ['x^(-1/2)', '1/x^(1/2)', 'sqrt(x)', '1/x^0.5']],
  ['surdForm', '4*sqrt(3)', ['4*sqrt(3)', 'sqrt(3)*4', '4 * sqrt( 3 )'], ['sqrt(48)', '2*sqrt(12)', '3*sqrt(3)+sqrt(3)', '12/sqrt(3)', '4*3^(1/2)', '48^(1/2)', '4*3^0.5']],
  ['surdForm', '13+16*sqrt(2)', ['13+16*sqrt(2)', '16*sqrt(2)+13'], ['13+8*sqrt(8)', '13+sqrt(512)', '(1+2*sqrt(2))*(3+4*sqrt(2))']],
  ['surdForm', 'sqrt(2)/2', ['sqrt(2)/2', '1/sqrt(2)', '(1/2)*sqrt(2)'], ['2/sqrt(8)', 'sqrt(2)/sqrt(4)', '2/(2*sqrt(2))', 'sqrt(8)/4']],
  ['rationalSurdForm', '(5*sqrt(2)+2*sqrt(6))/13', ['(5*sqrt(2)+2*sqrt(6))/13', '5*sqrt(2)/13+2*sqrt(6)/13', '(2*sqrt(6)+5*sqrt(2))/13'], ['sqrt(2)/(5-2*sqrt(3))', '(5*sqrt(2)+sqrt(24))/13', '(5*sqrt(2)+2*sqrt(2)*sqrt(3))/13', '(10*sqrt(2)+4*sqrt(6))/26']],
  ['rationalSurdForm', 'sqrt(2)/2', ['sqrt(2)/2', '(1/2)*sqrt(2)'], ['1/sqrt(2)', '2*sqrt(2)/4', '1/2^(1/2)', '2^(-1/2)']],
  ['surdFraction', '(sqrt(2)+sqrt(3))/sqrt(6)', ['(sqrt(2)+sqrt(3))/sqrt(6)', '(sqrt(3)+sqrt(2))/sqrt(6)', '(2*sqrt(3)+3*sqrt(2))/6'], ['1/sqrt(2)+1/sqrt(3)', '(sqrt(2)+sqrt(3))/6', '(sqrt(2)+sqrt(3))/sqrt(24)']],
  ['unknownIsNumber', 'a = 6/7', ['a = 6/7', '6/7 = a', 'a = 12/14', 'a=6/7'], ['6/7', 'a = 0.857', '7*a = 6', 'b = 6/7', 'a = a']],
  ['unknownIsNumber', 'x = -3', ['x = -3', 'x = -6/2', '-3 = x'], ['x = 3', '-x = 3', 'x = 1-4']],
  ['subjectIsExpression', 'h = (2+t^2)/(t^2-t*r)', ['h = (2+t^2)/(t^2-t*r)', 'h = (t^2+2)/(t*(t-r))', 'h = -(2+t^2)/(t*r-t^2)', '(2+t^2)/(t^2-t*r) = h'], ['h*(t^2-t*r) = 2+t^2', '(2+t^2)/(t^2-t*r)', 'h = (2+t^2)/(t^2+t*r)', 'h = h']],
  ['subjectIsExpression', 'p = ((c+D)/3)^(1/4)', ['p = ((c+D)/3)^(1/4)', 'p = (c+D)^(1/4)/3^(1/4)', 'p = ((D+c)/3)^0.25', 'p = sqrt(sqrt((c+D)/3))'], ['p = (c+D)^(1/4)/3', 'p^4 = (c+D)/3', 'p = ((c+D)/3)^4', 'p = ((c+d)/3)^(1/4)']],
  ['equation', 'x+4 = 4*x', ['x+4 = 4*x', '4*x = x+4', '4+x = 4*x'], ['x/4+1 = x', '2*x+8 = 8*x', '4 = 3*x', 'x+4']],
  ['singleTermList', '5*a^6, 30*a^8*b^3', ['5*a^6, 30*a^8*b^3', '5*a^6,30*b^3*a^8', 'a^6*5, 30*a^8*b^3'], ['30*a^8*b^3, 5*a^6', '5*a^6', '5*a^6, 30*a^8*b^2']],
  ['unknownValues', 'x = 2, y = -1', ['x = 2, y = -1', 'y = -1, x = 2', '2 = x, y = -2/2'], ['x = 2', 'x = -1, y = 2', 'x = 2, y = x-3', 'x = 2, x = -1', '2, -1']],
  ['unknownValues', 'x = 2+sqrt(3), x = 2-sqrt(3)', ['x = 2-sqrt(3), x = 2+sqrt(3)', 'x = (4+sqrt(12))/2, x = 2-sqrt(3)'], ['x = 2+sqrt(3)', 'x = 2+sqrt(3), x = 2+sqrt(3)', 'x = 3.732, x = 0.268']],
  ['unknownValues', 'x = 4', ['x = 4', '4 = x'], ['x = 4, x = 4', 'x = -4']],
  ['bracketed', '(x+2)*(x-3)', ['(x+2)*(x-3)', '(x-3)*(x+2)', '(2+x)*(-3+x)'], ['x^2-x-6', '(x+2)*x-3*(x+2)', '(x-2)*(x+3)']],
  ['bracketed', '2*(x-1)*(3*x+4)', ['2*(x-1)*(3*x+4)', '(2*x-2)*(3*x+4)', '-2*(1-x)*(3*x+4)'], ['6*x^2-2*x-8', '2*(3*x^2+x-4)']],
  ['bracketed', '(x-5)^2', ['(x-5)^2', '(5-x)^2', '(x-5)*(x-5)'], ['x^2-10*x+25', '(x^2-10*x+25)']],
  ['completedSquare', '2*(x-3)^2+5', ['2*(x-3)^2+5', '5+2*(x-3)^2', '2*(3-x)^2+5'], ['2*x^2-12*x+23', '2*(x^2-6*x+9)+5', '(x-3)^2+(x-3)^2+5', '2*(x-3)^2+3+2']],
  ['completedSquare', '(x+3/2)^2-13/4', ['(x+3/2)^2-13/4', '(x+1.5)^2-3.25'], ['x^2+3*x-1', '(x+3/2)^2-13/4+0*x']],
  ['completedSquare', '-(x-1)^2+4', ['-(x-1)^2+4', '4-(x-1)^2', '-1*(x-1)^2+4'], ['-x^2+2*x+3', '(x-1)^2+4']],
  ['solutionCount', 'Infinitely many', ['Infinitely many', 'infinitely many', 'Infinitely  many'], ['One', 'None', 'Many', 'infinite']],
  ['solutionCount', 'None', ['None', 'none'], ['One', 'No', '0']]
]

for (const [name, stored, yes, no] of CASES)
  test(`${name} · ${stored}`, () => {
    const match = MATCHES[name]
    assert.ok(matched(match, stored, stored), 'the stored answer is in its own form')
    for (const t of yes) assert.ok(matched(match, t, stored), `takes ${t}`)
    for (const t of no) assert.ok(!matched(match, t, stored), `refuses ${t}`)
  })

test('every match has cases here', () => {
  const tested = new Set(CASES.map(c => String(c[0])))
  assert.deepEqual(Object.keys(MATCHES).filter(f => !tested.has(f)), [])
})

test('an answer is read before it is marked: what has no value, or is the wrong kind of thing, is not read', () => {
  /**
   * @param {string} typed
   * @param {string} stored
   * @param {string} message
   */
  const no = (typed, stored, message) => {
    const r = reading(typed, stored)
    assert.equal(r.ok ? null : readMessage(r.error), message, typed)
  }
  no('2x', '2*x', 'Use * between factors.')
  no('1/0', '3', 'A division by zero has no value.')
  no('sqrt(-4)', '2', 'A negative number has a power only for a whole index.')
  no('(x+1)^1000', 'x', 'This answer is too long to read.')
  no('('.repeat(5000), 'x', 'This answer is too long to read.')
  no('6/7', 'a = 6/7', 'Type the whole equation, with its = sign.')
  no('x = 3', '3', 'Type the answer with no = sign.')
  no('0,5', '0.5', 'Use a point in a decimal. This answer has no comma.')
  no('+3', '3', 'Leave out a + sign that has nothing before it.')
  no('Sqrt(2)', 'sqrt(2)', 'Write sqrt and pi in small letters.')
  assert.equal(reading('7', '8').ok, true, 'a wrong answer is read')
  assert.equal(reading('72, 6, 1', '72, 6').ok, true, 'the number of items in a list is not given away')
  assert.deepEqual(reading('a = 6/7', 'a = 6/7'), { ok: true, value: 'a = \\frac{6}{7}' })
  assert.deepEqual(reading('1, -16', '1, -16'), { ok: true, value: '1,\\ {-}16' }, 'a later item keeps its minus as its sign')
})

test('every reason an answer has no value is given back, never thrown', () => {
  /**
   * @param {string} typed
   * @param {string} message
   */
  const why = (typed, message) => {
    const r = reading(typed, 'x')
    assert.equal(r.ok ? null : readMessage(r.error), message, typed)
  }
  why('x^(1/x)', 'Write an index as a number, or as numbers and letters added, such as 2*k + 1.')
  why('x^(sqrt(2))', 'Write an index as a number, or as numbers and letters added, such as 2*k + 1.')
  why('x^(k^9)', 'Write an index as a number, or as numbers and letters added, such as 2*k + 1.')
  why('(x+1)^k', 'Give a sum in brackets a number as its index, not a letter.')
  why('sqrt(x+1)^k', 'Give a sum in brackets a number as its index, not a letter.')
  why('0^(-1)', 'Zero has a power only for an index above zero.')
  why('0^k', 'Zero has a power only for an index above zero.')
  why('(-2)^(1/2)', 'A negative number has a power only for a whole index.')
  why('x/(y-y)', 'A division by zero has no value.')
  why('2^5000', 'This answer is too long to read.')
  why('1000000000000000001^(1/2)', 'This answer is too long to read.')
  why('(a+b+c+d+e+f+g+h+i+j)^6', 'This answer is too long to read.')
  why('(x+1)^30', 'This answer is too long to read.')
  assert.equal(reading('sqrt(x+1)^3', 'x').ok, true)
  assert.equal(reading('0^(1/2)', 'x').ok, true)
})
