# Contributing

You can help with code and with lessons.

## Code

Read the README's "Change it" section. You need Node.js 22.12 or later; run `npm install` once. These five pass before a pull request:

```bash
npm run gen            # every generated file, written again from its sources; commit what changes
npm run lint           # code rules, types and the checks in scripts/check/
npm test               # the tests beside each logic file, and in tests/
npm run knip           # unused files, exports and dependencies
npm run test:screens   # every screen in the browser, with axe; needs chromium on PATH or npx playwright install chromium
```

Delete before you add: no feature, setting or dependency goes in without a unit that uses it.

## Lessons

A lesson is a unit's content, in `src/units/<unit>/content/`. Each unit follows its paper: the written plan of the unit's method, its sources, and what the learner does in what order. The maintainers keep the papers.

A unit's content changes only through its paper. A change to a lesson, a problem, a meaning or a unit's order is a change to the unit: it is made against the paper and cites its source, never as a side effect of code work. A pull request that changes code leaves `src/units/<unit>/content/` alone.

Report a wrong fact as an issue that names the lesson and the source that shows it is wrong.

## Writing

Text a learner reads follows these rules:

- Speak to the reader, in the second person: "write", "read", "prove". No "we", no jokes, no brand voice.
- Short sentences, at most 20 words, in the active voice and the present tense.
- Everyday words. Name a technical term in bold and define it where it first appears.
- No hedges ("just", "simply", "easily"), no "obviously" or "clearly", no exclamation marks, no emoji.
- Derive a result; never only assert it. A fact a lesson rests on comes from a source the unit lists.

`npm run lint` catches the words it can find; a reviewer reads for the rest.

## Sign-off

Sign off every commit (`git commit -s`). The line it adds, `Signed-off-by: Your Name <you@example.org>`, says you agree to the Developer Certificate of Origin (developercertificate.org): you wrote the change, or have the right to give it.

You keep the rights to what you give. It comes in under the same licence it goes out under ([`LICENSE`](LICENSE)): code under MIT, lessons under the lesson licence. No one, the founder included, can change the licence of your work without your consent.

## Conduct

[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) applies everywhere the project meets.
