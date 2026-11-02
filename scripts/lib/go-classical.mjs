// Reads the four classical collections as positions only, as "A Self-Study System" Go sets out:
// the stones and the side to move of each problem, in the collection's own order. No comment and
// no solution is read: where a file names no side to move, the side is the colour of the first
// stone its line plays, and nothing else of the line is taken. The files are the transcriptions
// fetched once (Ulrich Goertz's for the first three, the text diagrams of the Flygo site for
// the fourth); nothing of them is kept in the repository but the stones of the problems that
// enter. Used by scripts/go-classical.mjs.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { coord } from '../../src/units/go/core/rules.logic.js'
import { parse, pointOf } from './go-sgf.mjs'

/** The collections in course order: the name a problem's `source` carries, and its files. */
export const COLLECTIONS = [
  { key: 'gokyo-shumyo', name: 'Gokyo Shumyo' },
  { key: 'xuanxuan-qijing', name: 'Xuanxuan Qijing' },
  { key: 'guanzi-pu', name: 'Guanzi Pu' },
  { key: 'igo-hatsuyoron', name: 'Igo Hatsuyoron' }
]

/**
 * The game trees of a file that holds several, one after another.
 * @param {string} text
 * @returns {string[]}
 */
function trees(text) {
  /** @type {string[]} */
  const out = []
  let depth = 0
  let from = -1
  let inValue = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inValue) {
      if (ch === '\\') i++
      else if (ch === ']') inValue = false
    } else if (ch === '[' && depth > 0) inValue = true
    else if (ch === '(') {
      // a tree opens with "(;": a bracket in the words before the first tree opens none
      if (depth === 0 && text[i + 1] !== ';') continue
      if (depth++ === 0) from = i
    } else if (ch === ')' && depth > 0 && --depth === 0) out.push(text.slice(from, i + 1))
  }
  return out
}

/**
 * @typedef {object} Position The stones of a problem and the side to move.
 * @property {string[]} black
 * @property {string[]} white
 * @property {'B' | 'W'} side
 */

/** @typedef {Position & { collection: string, n: number }} CollectionPosition A problem of a collection, with its collection and its number there. */

/**
 * A tree's stones and side to move: `{ black, white, side }`, or null when it sets up no stones
 * or cannot be read (scripts/lib/go-sgf.mjs says why): such a problem is not posed.
 * @param {string} tree
 * @returns {Position | null}
 */
function positionOf(tree) {
  const parsed = parse(tree)
  if (!parsed.ok) return null
  const root = parsed.value
  const black = (root.props.AB ?? []).filter(Boolean).map(pointOf)
  const white = (root.props.AW ?? []).filter(Boolean).map(pointOf)
  if (!black.length && !white.length) return null
  let side = root.props.PL?.[0]?.trim().toUpperCase()[0]
  // the colour of the first stone the file's line plays, and nothing else of the line
  for (let n = root.children[0]; !side && n; n = n.children[0])
    side = n.props.B ? 'B' : n.props.W ? 'W' : undefined
  return side === 'B' || side === 'W' ? { black, white, side } : null
}

/** @param {string} name */
const numbers = name => (name.match(/\d+/g) ?? []).map(Number)
/**
 * @param {string} a
 * @param {string} b
 */
const byNumbers = (a, b) => {
  const [x, y] = [numbers(a), numbers(b)]
  for (let k = 0; k < Math.max(x.length, y.length); k++)
    if ((x[k] ?? 0) !== (y[k] ?? 0)) return (x[k] ?? 0) - (y[k] ?? 0)
  return 0
}

/** @param {string} path */
const gz = path => gunzipSync(readFileSync(path)).toString('latin1')

/**
 * The fourth collection's text diagrams: each problem's first diagram, its stones and its side.
 * @param {string} text
 * @returns {(Position | null)[]}
 */
function hatsuyoron(text) {
  /** @type {(Position | null)[]} */
  const out = []
  const lines = text.split(/\r?\n/)
  for (let k = 0; k < lines.length; k++) {
    const title = /第.+题\s*『(.)先』/.exec(lines[k] ?? '')
    if (!title) continue
    const side = title[1] === '黑' ? 'B' : title[1] === '白' ? 'W' : null
    /** @type {string[][]} */
    const rows = []
    let r = k + 1
    while (r < lines.length && !/^[┏┠┗]/.test((lines[r] ?? '').trim())) r++
    for (; r < lines.length && /^[┏┠┗]/.test((lines[r] ?? '').trim()); r++) rows.push((lines[r] ?? '').trim().split(''))
    // a diagram opens at the board's top edge and is 19 points wide; a board cut otherwise is not read
    if (!side || !rows.length || rows[0]?.[0] !== '┏' || rows.some(row => row.length !== 19)) {
      out.push(null)
      continue
    }
    /** @type {string[]} */
    const black = []
    /** @type {string[]} */
    const white = []
    rows.forEach((row, y) =>
      row.forEach((ch, x) => (ch === '●' ? black : ch === '○' ? white : []).push(coord(x, 18 - y)))
    )
    out.push(black.length + white.length ? { black, white, side } : null)
  }
  return out
}

/**
 * Every problem of the four collections in `folder` (where the files were fetched), in course
 * order: `{ collection, n, black, white, side }`, with `n` its number in its collection from 1.
 * A problem whose file sets up no stones or names no side is left out and keeps its number.
 * @param {string} folder
 * @returns {CollectionPosition[]}
 */
export function positionsOf(folder) {
  /** @type {CollectionPosition[]} */
  const out = []
  /**
   * @param {string} collection
   * @param {(Position | null)[]} list
   */
  const add = (collection, list) =>
    list.forEach((p, k) => p && out.push({ collection, n: k + 1, ...p }))
  const files = readdirSync(folder)
  // Gokyo Shumyo: one file a problem, numbered by section and place
  const shumyo = files.filter(f => /^qjzm\d.*\.sgf$/.test(f)).sort(byNumbers)
  add(
    'gokyo-shumyo',
    shumyo.map(f => positionOf(readFileSync(join(folder, f), 'latin1')))
  )
  if (existsSync(join(folder, 'xxqj.sgf.gz')))
    add('xuanxuan-qijing', trees(gz(join(folder, 'xxqj.sgf.gz'))).map(positionOf))
  add(
    'guanzi-pu',
    ['gzp1', 'gzp2', 'gzp3']
      .filter(f => existsSync(join(folder, `${f}.sgf.gz`)))
      .flatMap(f => trees(gz(join(folder, `${f}.sgf.gz`))).map(positionOf))
  )
  const texts = files.filter(f => /^WeiQiFaYangLun_\d+_\d+\.txt$/.test(f)).sort(byNumbers)
  add(
    'igo-hatsuyoron',
    texts.flatMap(f => hatsuyoron(new TextDecoder('gb18030').decode(readFileSync(join(folder, f)))))
  )
  return out
}
