// Hides: the four colours of a Go board, which style/tokens.css gives as --board-ground,
// --board-grid, --board-ink and --board-mark and the board keeps in every theme and under forced
// colours. Held here so a contrast test reads the values the page draws with; colours.test.js
// holds the two lists equal.

/** The board's colours by their role: the ground, the lighter grid, the ink of lines, stones and labels, and the ring of a point picked. */
export const BOARD_COLOURS = Object.freeze({
  ground: '#f4f1e8',
  grid: '#8a8479',
  ink: '#14130f',
  mark: '#b3261e'
})
