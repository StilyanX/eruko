// The stored set of positions the Go unit's rules items are built from, in the five parts of
// "A Self-Study System" Go. Each is a whole small board, rows top first (`X` Black, `O` White,
// `.` empty), with what its one question asks; scripts/gen/go.mjs works every answer out with
// the rules program (src/units/go/core/rules.logic.js) and refuses a position on which that program and
// Tromp's definition of the score (src/units/go/core/tromp.logic.js) differ, or which asks a move the two
// rule sets judge differently. No item names a stone as dead: Tromp's rules take no stone off by
// agreement, so the two rule sets do not agree there, and the end of a game teaches it.
// `rule` is the rules text's own rule in one plain sentence.

/**
 * @typedef {'B' | 'W'} Side
 * @typedef {{ type: 'next', at: string }
 *   | { type: 'liberties', at: string }
 *   | { type: 'legal', side: Side, at: string }
 *   | { type: 'removed', side: Side, at: string }
 *   | { type: 'pass', side: Side }
 *   | { type: 'passes', moves: string[] }
 *   | { type: 'area', side: Side }} Ask the one question a position asks
 * @typedef {object} RulesPosition One stored position of the rules items.
 * @property {number} part
 * @property {string[]} rows
 * @property {Side} [toMove]
 * @property {string} [lead]
 * @property {string[][]} [earlier] boards the position may not repeat
 * @property {Ask} ask
 * @property {string} rule
 */

const NEXT = 'Two points are next to each other when a line of the board joins them with no point between.'
/** @type {[string[], string[]]} */
const KO = [
  // Black's stone at D3 stands in atari; White takes it at C3; the ko stands.
  ['.....', '..XO.', '.X.XO', '..XO.', '.....'],
  ['.....', '..XO.', '.XO.O', '..XO.', '.....']
]
const FENCE = ['.XO..', '.XO..', '.XO..', '.XO..', '.XO..']

export const PARTS = [
  'the board and turns',
  'liberties and capture',
  'ko',
  'passing and the end',
  'counting by area'
]

/** @type {RulesPosition[]} */
export const POSITIONS = [
  // 1 · the board and turns
  { part: 1, rows: ['.....', '.....', '.....', '.....', '.....'], ask: { type: 'next', at: 'A1' }, rule: NEXT },
  { part: 1, rows: ['.....', '.....', '.....', '.....', '.....'], ask: { type: 'next', at: 'C1' }, rule: NEXT },
  { part: 1, rows: ['.....', '.....', '.....', '.....', '.....'], ask: { type: 'next', at: 'C3' }, rule: NEXT },
  {
    part: 1,
    rows: ['.....', '.....', '.....', '.....', '.....'],
    toMove: 'B',
    lead: 'No stone is on the board.',
    ask: { type: 'legal', side: 'B', at: 'C3' },
    rule: 'Black plays first.'
  },
  {
    part: 1,
    rows: ['.....', '.....', '..X..', '.....', '.....'],
    toMove: 'W',
    lead: "Black's last move was C3.",
    ask: { type: 'legal', side: 'B', at: 'D4' },
    rule: 'The players take turns: after Black plays, White plays.'
  },
  {
    part: 1,
    rows: ['.....', '.....', '..X..', '.....', '.....'],
    toMove: 'W',
    lead: "Black's last move was C3.",
    ask: { type: 'legal', side: 'W', at: 'C3' },
    rule: 'A stone goes only on an empty point.'
  },
  {
    part: 1,
    rows: ['.....', '.....', '..X..', '.....', '.....'],
    toMove: 'W',
    lead: "Black's last move was C3.",
    ask: { type: 'legal', side: 'W', at: 'A1' },
    rule: 'A player whose turn it is may play a stone on an empty point that no other rule bars.'
  },
  // 2 · liberties and capture
  {
    part: 2,
    rows: ['.....', '.....', '..X..', '.....', '.....'],
    ask: { type: 'liberties', at: 'C3' },
    rule: 'A liberty of a stone is an empty point next to it.'
  },
  {
    part: 2,
    rows: ['.....', '.....', '.....', '.....', '.OX..'],
    ask: { type: 'liberties', at: 'C1' },
    rule: 'A point that holds a stone of the other side is no liberty.'
  },
  {
    part: 2,
    rows: ['.....', '.....', '.XX..', '.XO..', '.....'],
    ask: { type: 'liberties', at: 'B2' },
    rule: 'Stones of one colour that stand next to each other form one group and share their liberties.'
  },
  {
    part: 2,
    rows: ['.....', '..X..', '.XO..', '..X..', '.....'],
    toMove: 'B',
    ask: { type: 'removed', side: 'B', at: 'D3' },
    rule: 'A move of the other side that takes the last liberty of a group removes the group from the board.'
  },
  {
    part: 2,
    rows: ['.....', '..X..', '.XO..', '.....', '.....'],
    toMove: 'B',
    ask: { type: 'removed', side: 'B', at: 'D3' },
    rule: 'A group that keeps one liberty stays on the board.'
  },
  {
    part: 2,
    rows: ['.....', '.X.X.', 'XO.OX', '.X.X.', '.....'],
    toMove: 'B',
    ask: { type: 'removed', side: 'B', at: 'C3' },
    rule: 'One move removes every group of the other side that it leaves with no liberty.'
  },
  {
    part: 2,
    rows: ['.....', '.....', '.....', 'XX...', '.OX..'],
    ask: { type: 'liberties', at: 'B1' },
    rule: 'Atari: the state of a group with one liberty left, where a move of the other side on that liberty removes the group.'
  },
  {
    part: 2,
    rows: ['.....', '.....', 'XX...', 'OOX..', '.OX..'],
    toMove: 'B',
    ask: { type: 'legal', side: 'B', at: 'A1' },
    rule: "A move removes the other side's stones it leaves with no liberty before its own stone needs one."
  },
  // 3 · ko
  {
    part: 3,
    rows: KO[0],
    toMove: 'W',
    ask: { type: 'removed', side: 'W', at: 'C3' },
    rule: 'Ko: a shape in which each side can capture a stone of the other in turn, so the capture back may not be made at once.'
  },
  {
    part: 3,
    rows: KO[1],
    earlier: [KO[0]],
    toMove: 'B',
    lead: "White's last move was C3, and it removed a black stone from D3.",
    ask: { type: 'legal', side: 'B', at: 'D3' },
    rule: 'A move may not repeat the whole board as it stood after an earlier move.'
  },
  {
    part: 3,
    rows: ['.....', '..XO.', '.XO.O', 'O.XO.', 'X....'],
    earlier: [KO[0], KO[1], ['.....', '..XO.', '.XO.O', '..XO.', 'X....']],
    toMove: 'B',
    lead: 'White plays C3 and removes a black stone from D3. Then Black plays A1, and White plays A2.',
    ask: { type: 'legal', side: 'B', at: 'D3' },
    rule: 'The capture back is legal when it does not repeat the whole board as it stood after an earlier move.'
  },
  {
    part: 3,
    rows: KO[1],
    earlier: [KO[0]],
    toMove: 'B',
    lead: "White's last move was C3, and it removed a black stone from D3.",
    ask: { type: 'legal', side: 'B', at: 'A1' },
    rule: 'The ko rule bars a move only when it repeats the whole board as it stood after an earlier move.'
  },
  // 4 · passing and the end
  {
    part: 4,
    rows: FENCE,
    toMove: 'B',
    ask: { type: 'pass', side: 'B' },
    rule: 'A player may pass at every turn.'
  },
  {
    part: 4,
    rows: FENCE,
    lead: 'Black passes. White plays E3. Black passes.',
    ask: { type: 'passes', moves: ['pass', 'E3', 'pass'] },
    rule: 'A stone played between two passes starts the count of passes again.'
  },
  {
    part: 4,
    rows: FENCE,
    lead: 'Black passes. White passes.',
    ask: { type: 'passes', moves: ['pass', 'pass'] },
    rule: 'Two passes in a row end play.'
  },
  // 5 · counting by area
  {
    part: 5,
    rows: FENCE,
    ask: { type: 'area', side: 'B' },
    rule: 'The area of a side is its stones on the board plus the empty points that reach only its stones.'
  },
  {
    part: 5,
    rows: ['..XO...', '..XO...', '.XXO...', '.XOO...', 'XXO....', '.XO....', '.XO....'],
    ask: { type: 'area', side: 'W' },
    rule: 'An empty point reaches a colour when a path of empty points next to each other leads from it to a stone of that colour.'
  },
  {
    part: 5,
    rows: ['.X.O.', '.X.O.', '.X.O.', '.X.O.', '.X.O.'],
    ask: { type: 'area', side: 'B' },
    rule: 'An empty point that reaches stones of both colours counts for neither side.'
  },
  {
    part: 5,
    rows: ['.X.XO.O', 'XXXXOOO', 'OOOOXXX', '.O.OX.X', 'OOOOXXX', 'XXXXOOO', '.X.XO.O'],
    ask: { type: 'area', side: 'B' },
    rule: 'Stones on the board count for their side whether or not they hold empty points.'
  },
  {
    part: 5,
    rows: ['.XO.O', 'XXOOO', 'XXXXX', 'OOOXX', '.O.X.'],
    ask: { type: 'area', side: 'W' },
    rule: 'The two areas and the points that count for neither side together make every point of the board.'
  }
]
