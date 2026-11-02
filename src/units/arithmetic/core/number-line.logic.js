// Hides: how a number line is laid out and written: where each whole number, cut, mark and arrow
// lies, as a percent of the line's width, the em height each part sits at, and the HTML that
// draws it (labels are text over the line, so they follow the text size; the
// axis and the ticks are SVG lines in currentColor). Also what the line asks of "Place it on the
// line": the line for a value, the hundredths a mark is read in, and the sentences of the check.
// scripts/gen/figures.mjs draws the figures of content/figures with it; the app draws a place
// problem's line with it when it shows. Pure functions, tested in number-line.test.js.
import { assert } from '../../../kernel/invariant.logic.js'
import { parseNumber, tenthsOf } from './check.logic.js'
import { numberTex } from './shown.logic.js'

/**
 * A mark on the line: where it lies (a number as the topic files write it), its TeX, and whether
 * its label sits above the line (the default, in a row counted from the line, the first by
 * default) or below it.
 * @typedef {Readonly<{ at: string, tex: string, side?: 'above' | 'below', row?: number }>} LineMark
 */
/**
 * An arrow drawn above the line between two places, its TeX label above it, in a row counted from
 * the line.
 * @typedef {Readonly<{ from: string, to: string, tex: string, row: number }>} LineArrow
 */
/**
 * A number line: whole numbers `from` to `to`, all labelled; `cuts` extra ticks in each unit when
 * the unit is cut; the marks and the arrows.
 * @typedef {Readonly<{ from: number, to: number, cuts?: number, marks: readonly LineMark[], arrows?: readonly LineArrow[] }>} LineSpec
 */

/** The height of one row above the line, in em. */
const ROW = 2.2
/** The height of a label, in em. */
const LABEL = 1.5

/**
 * A place as a percent of the line's width, to four decimal places.
 * @param {string} at a number as the topic files write it
 * @param {LineSpec} spec
 */
function percent(at, spec) {
  const v = parseNumber(at)
  assert(v !== null, `${at} is not a number`)
  const q = ((v.n - BigInt(spec.from) * v.d) * 1000000n) / (v.d * BigInt(spec.to - spec.from))
  return Number(q) / 10000
}

/** @param {number} x a percent, rounded to four places */
const pc = x => Math.round(x * 10000) / 10000

/**
 * The whole number a value lies past or on, and the line that holds it: from 0 to the whole
 * number past the value, and never shorter than 0 to 2.
 * @param {string} value a number as the topic files write it
 * @returns {number} the line's end
 */
export function reachOf(value) {
  const v = parseNumber(value)
  assert(v !== null && v.n >= 0n, `${value} is not a place on the line`)
  return Math.max(2, Number(v.n / v.d) + 1)
}

/**
 * The line a place problem draws: no mark and no cuts, or with `mark` its value marked and each
 * unit cut into tenths.
 * @param {string} value
 * @param {'line' | 'mark' | 'check'} view
 * @returns {LineSpec}
 */
export const placeLine = (value, view) => ({
  from: 0,
  to: reachOf(value),
  ...(view === 'check' ? { cuts: 10 } : {}),
  marks: view === 'line' ? [] : [{ at: value, tex: numberTex(value) ?? value }]
})

/** @param {number} n */
const minus = n => String(n).replace('-', '−')

/**
 * Every part of a line placed: the em height of the line and of its axis, then each part's percent
 * from the left and, where it has one, its em from the top.
 * @param {LineSpec} spec
 */
export function layoutOf(spec) {
  assert(spec.to > spec.from, 'a number line runs from a lesser to a greater whole number')
  const above = [
    ...spec.marks.filter(m => m.side !== 'below').map(m => m.row ?? 1),
    ...(spec.arrows ?? []).map(a => a.row)
  ]
  const rows = Math.max(0, ...above)
  const axis = rows * ROW + 0.6
  const below = spec.marks.some(m => m.side === 'below')
  const wholes = Array.from({ length: spec.to - spec.from + 1 }, (_, i) => {
    const value = spec.from + i
    return { percent: percent(String(value), spec), text: minus(value) }
  })
  return {
    height: axis + 2.2 + (below ? LABEL + 0.2 : 0),
    axis,
    wholes,
    cuts: spec.cuts ?? 0,
    marks: spec.marks.map(m => {
      const up = m.side !== 'below'
      return {
        percent: percent(m.at, spec),
        tex: m.tex,
        up,
        top: up ? (rows - (m.row ?? 1)) * ROW + 0.1 : axis + 2.2
      }
    }),
    arrows: (spec.arrows ?? []).map(a => {
      const start = percent(a.from, spec)
      const end = percent(a.to, spec)
      const top = (rows - a.row) * ROW + 0.1
      return {
        left: Math.min(start, end),
        width: Math.abs(end - start),
        toRight: end > start,
        tex: a.tex,
        top,
        line: top + LABEL + 0.2
      }
    })
  }
}

/** @param {number} n */
const em = n => `${Math.round(n * 100) / 100}em`

/**
 * The HTML of a line: a track of the line's width holding its axis and ticks as SVG lines, and its
 * labels, cuts and arrows as text and boxes placed by percent. `mathml` sets a label's TeX.
 * @param {LineSpec} spec
 * @param {(tex: string) => string} mathml
 */
export function lineHtml(spec, mathml) {
  const l = layoutOf(spec)
  /** @type {(x: number, from: number, to: number, kind: string) => string} */
  const stem = (x, from, to, kind) =>
    `<line class="${kind}" x1="${x}%" x2="${x}%" y1="${em(from)}" y2="${em(to)}"/>`
  const lines = [
    `<line class="lrn-line-base" x1="0%" x2="100%" y1="${em(l.axis)}" y2="${em(l.axis)}"/>`,
    ...l.wholes.map(w => stem(w.percent, l.axis - 0.5, l.axis + 0.5, 'lrn-line-whole')),
    ...l.marks.map(m =>
      m.up
        ? stem(m.percent, m.top + LABEL + 0.1, l.axis + 0.5, 'lrn-line-stem')
        : stem(m.percent, l.axis - 0.5, m.top - 0.1, 'lrn-line-stem')
    )
  ]
  const at = (/** @type {number} */ x, /** @type {number} */ top) =>
    `style="left:${x}%;top:${em(top)}"`
  const parts = [
    `<svg class="lrn-line-axis" aria-hidden="true" focusable="false">${lines.join('')}</svg>`,
    l.cuts > 0
      ? `<span class="lrn-line-cuts" style="top:${em(l.axis - 0.25)};--cuts:${l.cuts * (spec.to - spec.from)}"></span>`
      : '',
    ...l.wholes.map(
      w => `<span class="lrn-line-n" ${at(w.percent, l.axis + 0.65)}>${w.text}</span>`
    ),
    ...l.marks.map(
      m => `<span class="lrn-line-at" ${at(m.percent, m.top)}>${mathml(m.tex)}</span>`
    ),
    ...l.arrows.map(
      a =>
        `<span class="lrn-line-arrow ${a.toRight ? 'lrn-line-right' : 'lrn-line-left'}" style="left:${a.left}%;width:${a.width}%;top:${em(a.line)}"></span>` +
        `<span class="lrn-line-at" style="left:${pc(a.left + a.width / 2)}%;top:${em(a.top)}">${mathml(a.tex)}</span>`
    )
  ]
  return `<arithmetic-number-line><div class="lrn-line-track" style="height:${em(l.height)}">${parts.join('')}</div></arithmetic-number-line>`
}

/**
 * The text of a bare line, for its screen reader and its print: what the problem shows and
 * nothing of where the value lies.
 * @param {number} to
 */
export const lineText = to =>
  `Number line from 0 to ${to}, the whole numbers 0 to ${to} marked, nothing between.`

/**
 * The hundredths a press at `x` (a share of the line's width, 0 to 1) puts a mark at.
 * @param {number} x
 * @param {number} to the line's end
 */
export const hundredthsAt = (x, to) => Math.round(Math.min(1, Math.max(0, x)) * to * 100)

/**
 * A mark in hundredths, written as a decimal.
 * @param {number} hundredths
 */
export const decimalOf = hundredths => (hundredths / 100).toFixed(2)

/**
 * Whether a typed place is a decimal to one place within the line, and the hundredths it is.
 * @param {string} text
 * @param {number} to the line's end
 * @returns {number | null}
 */
export function typedHundredths(text, to) {
  const m = /^(\d{1,2})(?:\.(\d))?$/.exec(text.trim())
  if (m === null) return null
  const hundredths = Number(m[1]) * 100 + Number(m[2] ?? 0) * 10
  return hundredths <= to * 100 ? hundredths : null
}

/**
 * A value's decimal when it ends within three places, else null.
 * @param {string} value
 */
function exactDecimal(value) {
  const v = parseNumber(value)
  assert(v !== null, `${value} is not a number`)
  const thousandths = (1000n * v.n) / v.d
  if ((1000n * v.n) % v.d !== 0n) return null
  const whole = thousandths / 1000n
  const digits = String(thousandths % 1000n)
    .padStart(3, '0')
    .replace(/0+$/, '')
  return digits === '' ? String(whole) : `${whole}.${digits}`
}

/**
 * Where a value lies, in words: its decimal when it ends within three places, the tenth it lies
 * in, and the whole numbers it lies between.
 * @param {string} value the value as the problem writes it
 */
export function whereLies(value) {
  const v = parseNumber(value)
  assert(v !== null, `${value} is not a number`)
  const whole = v.n / v.d
  const tenth = tenthsOf(v)[0] ?? 0n
  const [a, b] = [Number(tenth) / 10, (Number(tenth) + 1) / 10]
  const exact = exactDecimal(value)
  const on = (10n * v.n) % v.d === 0n
  const where = on
    ? `lies at ${exact}`
    : `lies ${exact === null ? '' : `at ${exact}, `}in the tenth from ${a} to ${b}`
  return `${value} ${where}, between ${whole} and ${whole + 1n}.`
}

/**
 * The text of a place line a worked example or a solution shows (a figure's `alt`): the bare line,
 * the line with the value marked (only what the mark shows), or the line cut into tenths with the
 * value marked and where it lies.
 * @param {'line' | 'mark' | 'check'} view
 * @param {string} value
 */
export function figureText(view, value) {
  const to = reachOf(value)
  if (view === 'line') return lineText(to)
  const head = `Number line from 0 to ${to}, the whole numbers 0 to ${to} marked`
  if (view === 'check') return `${head} and each unit cut into tenths. ${whereLies(value)}`
  // The mark shows the whole numbers it lies between; its decimal comes in the step after.
  const v = parseNumber(value)
  assert(v !== null, `${value} is not a number`)
  const whole = v.n / v.d
  return `${head}, with ${value} marked, between ${whole} and ${whole + 1n}.`
}
