// The positions drawn by hand for the Go unit's ten first kinds, beside the ones
// scripts/go-find.mjs keeps. Rows top first: `X` Black, `O` White, `.` an empty point of the
// closed region, `,` an empty point outside it, which no move is played on. `at` says where the
// drawing stands: in a corner (its left and bottom are board edges), on a side (its bottom is)
// or in the centre. `target` is a stone of the group asked about, as the drawing's own
// coordinate. scripts/gen/go.mjs solves each by the exact search and turns it to its place.

/**
 * @typedef {object} Drawing A drawn position for a first kind.
 * @property {string[]} rows
 * @property {'corner' | 'side' | 'centre'} at
 * @property {'B' | 'W'} side
 * @property {string} target
 * @property {import('../../src/units/go/core/solve.logic.js').Threats} [threats]
 */

export const KIND_NAMES = [
  'capture a stone in atari',
  'save a stone in atari',
  'connect and cut',
  'ladders',
  'nets',
  'living and dead groups in small closed regions',
  'snapback',
  'connect and die',
  'seki',
  'capturing races'
]

// A Go term a kind's solutions use is explained once, in one sentence, under the kind's worked
// example, after the solution's last line.
/** @type {Record<number, string>} */
export const KIND_TERMS = {
  3: 'Cut: a move on the point where two groups of the other side would connect.',
  4: 'Ladder: a chase in which each chasing move leaves the running stones one liberty, until the chasing side captures them.',
  5: 'Net: a move that is next to none of the running stones and leaves them no way out.',
  6: 'Eye: an empty point that one group surrounds; the other side cannot capture a group with two eyes, because the other side may not fill both.',
  7: 'Snapback: a stone given up so that the next move captures the stones that capture it.',
  8: 'Connect and die: an atari that the other side answers by connecting, after which one move captures the whole connected group.',
  10: "Capturing race: a fight between two groups with no two eyes, in which the first to take the other's last liberty captures it."
}

const STRAIGHT = [',,,,,,,', 'XXXXX,,', 'OOOOX,,', '...OX,,']
const BENT = [',,,,,,', 'XXXX,,', 'OOXX,,', '.OOX,,', '..OX,,']
const SIDE = [',,,,,,,,,', ',XXXXXXX,', ',XOOOOOX,', ',XO...OX,']
const LADDER = [',,,,,,', '.XX,,,', '..OX,,', '...,,,', '...,,,']

/** @type {Record<number, Drawing[]>} */
export const HAND = {
  1: [
    { rows: [',,,,,', ',,X,,', ',XO.,', ',,X,,', ',,,,,'], at: 'centre', side: 'B', target: 'C3' },
    { rows: [',,,,,', ',XX,,', 'XOO.,'], at: 'corner', side: 'B', target: 'B1' },
    { rows: [',,,,', 'X,,,', 'O.,,'], at: 'corner', side: 'B', target: 'A1' },
    { rows: [',,,,,,,', ',,OOO,,', ',OXXX.,', ',,OOO,,', ',,,,,,,'], at: 'centre', side: 'W', target: 'C3' }
  ],
  2: [
    { rows: [',,,,,,', ',,X,,,', ',XO.,,', ',,X,,,', ',,,,,,'], at: 'centre', side: 'W', target: 'C3' },
    { rows: [',,,,,,', ',,X,O,', ',XO.O,', ',,XXO,', ',,,,,,'], at: 'centre', side: 'W', target: 'C3' },
    { rows: [',,,,,', ',.,,,', 'OXO,,', '.OX,,'], at: 'corner', side: 'W', target: 'B1' }
  ],
  3: [
    { rows: [',,,,,,,', ',OO.X,,', 'OXX.X,,'], at: 'corner', side: 'B', target: 'B1' }
  ],
  4: [{ rows: LADDER, at: 'corner', side: 'B', target: 'C3' }],
  6: [
    { rows: STRAIGHT, at: 'corner', side: 'W', target: 'A2' },
    { rows: STRAIGHT, at: 'corner', side: 'B', target: 'A2' },
    { rows: BENT, at: 'corner', side: 'B', target: 'A3' },
    { rows: BENT, at: 'corner', side: 'W', target: 'A3' },
    { rows: SIDE, at: 'side', side: 'B', target: 'C2' },
    { rows: SIDE, at: 'side', side: 'W', target: 'C2' }
  ]
}
