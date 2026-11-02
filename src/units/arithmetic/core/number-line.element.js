// Hides: the tag the number lines are set in. A line is HTML that number-line.logic.js writes, set
// into a figure or drawn by the place-line screen; its tag holds the rules that lay it out
// (number-line.css), so no rule of the unit's sheet reaches a line from outside.
export class ArithmeticNumberLine extends HTMLElement {}
customElements.define('arithmetic-number-line', ArithmeticNumberLine)
