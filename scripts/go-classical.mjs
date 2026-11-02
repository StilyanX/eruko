#!/usr/bin/env node
// Reads the four classical collections as positions (scripts/lib/go-classical.mjs) and keeps
// each one the exact search can pose and finish from its stones and its side to move alone, as
// "A Self-Study System" Go sets out (src/units/go/pose.js). The search supplies every answer;
// nothing of a file but its stones enters. What is kept goes to scripts/lib/go-classical.json
// for scripts/gen/go.mjs.
//
//   node scripts/go-classical.mjs <the folder the collections were fetched to>
import { writeFileSync } from 'node:fs'
import { isMainThread } from 'node:worker_threads'
import { pose } from '../src/units/go/core/pose.logic.js'
import { COLLECTIONS, positionsOf } from './lib/go-classical.mjs'
import { runPool } from './lib/go-pool.mjs'

// The most positions one search may visit.
const BUDGET = 2e6

/**
 * @typedef {import('./lib/go-classical.mjs').CollectionPosition} Item
 * @typedef {object} Outcome
 * @property {string} collection
 * @property {number} n
 * @property {object} [kept]
 * @property {string | undefined} [refused]
 */

/**
 * One position: `{ kept }` with the drawing that entered, or `{ refused }` with the cause.
 * @param {Item} item
 * @returns {Outcome}
 */
export default function classicalOne({ collection, n, black, white, side }) {
  const posed = pose({ black, white, side }, { budget: BUDGET, source: collection })
  return posed.ok
    ? { collection, n, kept: { source: collection, n, ...posed.value.drawing } }
    : { collection, n, refused: posed.error }
}

if (isMainThread) {
  const folder = process.argv[2]
  if (!folder) {
    console.error(
      'Usage: node scripts/go-classical.mjs <the folder the collections were fetched to>'
    )
    process.exit(2)
  }
  const items = positionsOf(folder)
  const results = await runPool(import.meta.url, items, {
    seen: (/** @type {Outcome} */ r, n, all) =>
      n % 100 === 0 && console.error(`${n} of ${all} read`)
  })
  const kept = results.filter(r => r.kept).map(r => r.kept)
  for (const { key } of COLLECTIONS) {
    const mine = results.filter(r => r.collection === key)
    console.log(`${key}: ${mine.length} read, ${mine.filter(r => r.kept).length} kept`)
  }
  writeFileSync(new URL('lib/go-classical.json', import.meta.url), JSON.stringify(kept))
  // why each position that does not enter was refused, kept beside the bank
  writeFileSync(
    new URL('lib/go-classical-refused.json', import.meta.url),
    `[\n${results
      .filter(r => !r.kept)
      .map(r => JSON.stringify({ source: r.collection, n: r.n, cause: r.refused }))
      .join(',\n')}\n]\n`
  )
}
