// Hides: Arithmetic's entry in the app's list of units: its title, address, description, sources,
// pages and sections. The page order comes from the course (content/unit.yaml, through
// scripts/gen/arithmetic.mjs), so the titles cannot drift from the work list.
// The shell lists every unit's entry (shell/registry.js), through the unit's manifest.
import { reviewPage, startPage } from '../../../kernel/pages.logic.js'
import { FACTS_PART } from '../../../kernel/facts.logic.js'
import { InvariantError } from '../../../kernel/invariant.logic.js'
import { PAGES, TOPICS } from './course.gen.js'

// The topic titles.
/** @type {Record<string, string>} */
// prettier-ignore
const ARITHMETIC_TITLES = {
  'place-value': 'Place value',
  'laws-of-addition-and-multiplication': 'The laws of addition and multiplication',
  'order-and-addition': 'Order and addition',
  'order-and-multiplication': 'Order and multiplication',
  'powers': 'Powers',
  'addition-algorithm': 'The addition algorithm',
  'subtraction-algorithm': 'The subtraction algorithm',
  'multiplication-algorithm': 'The multiplication algorithm',
  'division-with-remainder-and-long-division': 'Division with remainder and long division',
  'estimation': 'Estimation',
  'numbers-in-base-b': 'Numbers in base b',
  'fractions-and-decimals-defined': 'Fractions and decimals defined',
  'equivalent-fractions': 'Equivalent fractions',
  'adding-fractions-and-decimals': 'Adding fractions and decimals',
  'comparing-fractions': 'Comparing fractions',
  'subtracting-fractions-and-decimals': 'Subtracting fractions and decimals',
  'multiplying-fractions-and-decimals': 'Multiplying fractions and decimals',
  'dividing-fractions': 'Dividing fractions',
  'complex-fractions': 'Complex fractions',
  'percent': 'Percent',
  'ratio-and-rate': 'Ratio and rate',
  'average-speed-and-percent-problems': 'Average speed and percent problems',
  'adding-and-subtracting-rational-numbers': 'Adding and subtracting rational numbers',
  'addition-of-rational-numbers-from-its-laws': 'Addition of rational numbers from its laws',
  'multiplying-rational-numbers': 'Multiplying rational numbers',
  'dividing-rational-numbers': 'Dividing rational numbers',
  'ordering-rational-numbers': 'Ordering rational numbers',
  'divisibility-rules': 'Divisibility rules',
  'primes-and-divisors': 'Primes and divisors',
  'fundamental-theorem-of-arithmetic': 'The fundamental theorem of arithmetic',
  'euclidean-algorithm': 'The Euclidean algorithm',
  'greatest-common-divisor-and-least-common-multiple': 'Greatest common divisor and least common multiple',
  'pythagorean-triples': 'Pythagorean triples',
  'finite-decimals': 'Finite decimals',
  'scientific-notation': 'Scientific notation',
  'decimals': 'Decimals',
  'decimal-expansions-of-fractions': 'Decimal expansions of fractions',
  'natural-numbers-from-the-axioms': 'The natural numbers from the axioms',
  'addition-from-the-axioms': 'Addition from the axioms',
  'order-of-the-natural-numbers': 'Order of the natural numbers',
  'multiplication-from-the-axioms': 'Multiplication from the axioms',
  'powers-in-the-natural-number-game': 'Powers in the Natural Number Game',
  'fraction-pair-equivalence': 'Fraction pair equivalence',
  'ordering-fraction-pairs': 'Ordering fraction pairs',
  'adding-fraction-pairs': 'Adding fraction pairs',
  'multiplying-fraction-pairs': 'Multiplying fraction pairs',
  'positive-rational-number-equality': 'Positive rational number equality',
  'ordering-positive-rational-numbers': 'Ordering positive rational numbers',
  'adding-positive-rational-numbers': 'Adding positive rational numbers',
  'multiplying-positive-rational-numbers': 'Multiplying positive rational numbers',
  'whole-number-classes': 'Whole-number classes'
}

/** @type {Readonly<Partial<Record<string, Readonly<{ title: string, file: string }>>>>} */
const ARITHMETIC_DRILLS = {
  'number-facts': {
    title: 'Number facts',
    file: 'arithmetic/number-facts'
  },
  'mixed-practice': {
    title: 'Mixed practice',
    file: 'arithmetic/mixed-practice'
  },
  'end-level': {
    title: 'End level',
    file: 'arithmetic/end-level'
  }
}

/**
 * A page of the course by its slug: a topic with its title, or a page done every session. A slug
 * that is neither is a broken course file.
 * @param {string} slug
 * @returns {import('../../../kernel/pages.logic.js').Page}
 */
export function arithmeticPage(slug) {
  const title = ARITHMETIC_TITLES[slug]
  if (title !== undefined && TOPICS.some(t => t.slug === slug))
    return { title, slug, file: 'arithmetic/topic' }
  const drill = ARITHMETIC_DRILLS[slug]
  if (!drill)
    throw new InvariantError(`Arithmetic page ${slug} is neither a titled topic nor a drill`)
  return { ...drill, slug, repeats: true }
}

/**
 * The unit's own part of the record.
 * @type {import('../../../kernel/pages.logic.js').RecordPart}
 */
export const MATH_PART = { name: 'math', key: 'aether-math-arithmetic', title: 'Arithmetic' }

/** @type {import('../../../kernel/pages.logic.js').Unit} */
export const UNIT = {
  title: 'Arithmetic',
  slug: 'explore/mathematics/arithmetic',
  discipline: { id: 'mathematics', name: 'Mathematics' },
  order: 1,
  // Its own record (the topics, the problems, the proofs) and the number facts.
  parts: [MATH_PART, FACTS_PART],
  className: 'lrn-math',
  description:
    'Drill the number facts, then take the topics in order. In a topic with a new method, try one problem first, then study the worked examples. Prove statements on paper. The last topics build the natural numbers and the fractions from five rules, called axioms.',
  sources: [
    { title: 'Understanding Numbers in Elementary School Mathematics', author: 'Hung-Hsi Wu' },
    { title: 'Foundations of Analysis', author: 'Edmund Landau' },
    { title: 'Natural Number Game', author: 'Kevin Buzzard and Jon Eugster' }
  ],
  // The end level is no page of the course file: its sheets come from the paper's rules alone
  // (end-lines.logic.js), so it follows the course's pages.
  pages: [
    startPage('arithmetic'),
    reviewPage('arithmetic'),
    ...PAGES.map(arithmeticPage),
    arithmeticPage('end-level')
  ],
  // Runs of the course order: Wu's five parts under his own titles, then Landau's two chapters
  // as the axiomatic course.
  // prettier-ignore
  sections: [
    { title: 'Whole numbers', first: 1, last: 10 },
    { title: 'Fractions, percent and ratio', first: 11, last: 22 },
    { title: 'Rational numbers', first: 23, last: 27 },
    { title: 'Number theory', first: 28, last: 33 },
    { title: 'More on decimals', first: 34, last: 37 },
    { title: 'The natural numbers from axioms', first: 38, last: 42 },
    { title: 'Fractions from axioms', first: 43, last: 51 }
  ]
}
