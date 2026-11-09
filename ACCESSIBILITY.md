# Accessibility

Eruko is built to meet WCAG 2.2 at level AA, in every theme, by keyboard, with a screen reader, at 400% zoom and with reduced motion.

What the browser tests check on every page, at 320 pixels wide (the width of 400% zoom):

- axe finds no WCAG 2.2 A or AA failure, in the light, dark and both high-contrast themes.
- Nothing scrolls sideways, and no text is cut off when line, letter and word spacing are raised to the figures of WCAG 1.4.12.
- Nothing moves when the device asks for reduced motion.

What else is built in:

- A skip link first on every page. A new page puts focus on its title, and each page has its own title.
- A ring in the accent colour on every control that has keyboard focus, and on anything focus is moved to that is not a title.
- When a press removes its own button, focus moves to the next thing to press in the same step and is scrolled into view.
- One status line on each study page tells a screen reader what changed: a new step's first line, what a reveal shows, and the right answer after a wrong one.
- A question is the label or the description of its answer field, and stays in view when the field takes focus on a phone.
- A locked button shows its reason under it, read as its description, from the moment it is drawn.
- A formula, board or figure wider than its column scrolls inside a box the keyboard can reach, named by what it holds and "scrolls sideways".
- No control is smaller than 44 pixels either way, save a link inside a sentence. Nothing plays sound by itself.
- Each unit's Start page says how to turn on the device's own read-aloud.

Automated checks find only part of what blocks a learner. No screen reader has been tested by a person yet, so no unit is labelled Ready ([`STATUS.md`](STATUS.md)) until disabled learners, paid for their time, have studied it in a testing round and found no barrier left open.

Report a barrier as an issue: the page, what you used (browser, screen reader, zoom) and what stopped you.
