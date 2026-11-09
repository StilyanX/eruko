# What comes back, and when

Eruko uses one rule to decide when something you learned comes back, and every unit shares it. This page describes that rule as the code runs it today. It lives in [`src/kernel/days.logic.js`](src/kernel/days.logic.js) and [`src/kernel/fsrs.logic.js`](src/kernel/fsrs.logic.js). How a kind of problem picks its problem is in [`src/kernel/practice.logic.js`](src/kernel/practice.logic.js).

## The dated item

Each unit keeps a dated list. An item on it has one line for each day you answered it: the date, right or wrong, and the day it falls due next. Only your first answer of the day writes a line. A second try the same day doesn't. A study day runs from 04:00 to 04:00.

What an item is depends on the unit:

| Unit | The dated item |
| --- | --- |
| Arithmetic | A kind of problem, from the day it retires: you solved a problem of the kind alone, with no lines shown (two in a row, for a kind whose answers are all Yes or No). Each proof you have read. Each operation's number-fact sheet, from the day a timed sheet passes. Each line of the end level, from the day its sheet passes |
| Go course | A kind of problem, from the day it retires: a problem of it right in its first run. Each rules item, from its first answer; a rules item is a rule with one or more cases. A problem, once answered wrong |
| C++ course | A kind of problem, from the day it retires: a problem of it you write alone passes. Each kind's trace (you follow a program and say what it prints). A problem, once answered wrong. Each unit of a retired kind of the language track |
| Augustus | A whole life, from the day its first lesson is done. The end level's round, first due the day after the life closes |

## The next day

An item's first line gets the next day, right or wrong. After that, a wrong answer brings it back the next day. A right answer brings it back on the day FSRS-6, a memory model, puts your chance of recalling it at the item's desired retention:

- 90 percent for what you can rebuild: kinds of problem, problems, proofs, rules items, traces and track items.
- 92 percent for exact material: number-fact sheets, end-level lines, a life and the Augustus round.

FSRS-6 reads only the item's own lines. Right counts as Good and wrong as Again, and the gap between two answers is the number of days that really passed. It runs with its 21 published default weights, so nothing is fitted to you. Eruko stores no memory state; it works it out again from the lines on each answer. You never pick a date.

An item first answered on day 0 and right each time it falls due comes back on days 1, 8, 40, 158 and 531 at 90 percent, and on days 1, 6, 25, 86 and 258 at 92 percent. One right on day 0, wrong on day 1 and then right comes back on days 2, 4 and 10. Nothing leaves the list: an item keeps coming back, each time less often.

## What comes back

### Arithmetic and Go course

A kind of problem comes back, not a problem. When the kind is due, it brings a fresh problem: one you have never tried, or when you have tried them all, the one you saw longest ago. A problem answered wrong is the exception: its kind comes back the next day with that same problem, until you answer it right. A kind brings one problem a day. In Go, a problem answered wrong in a kind not yet retired comes back alone the next day.

### Arithmetic

A number-fact sheet comes back whole and timed, and on a return only errors count. A return with errors brings back only its missed facts the next day. If you get them right then, the return counts as right. If not, the operation goes back to drill until a sheet passes again, which starts its lines afresh.

### Go course

A due rules item asks one of its cases: the one answered wrong, else one not yet asked, else the one asked longest ago. Due items come first in a session.

### C++ course

A kind comes back the way it does in Arithmetic and Go: with the problem you last answered wrong if there is one, else a problem you have never tried, else the one you saw longest ago. A trace comes back on another program that fits the kind. A problem writes a line only when you answer it wrong, and then it comes back the next day. Due items come first in a session.

### Augustus

A life comes back whole, and you tell all of it again. On its first day you tell it until three tellings are right. A later lesson that adds to a life in recall brings the life back the next day.

## Mixed practice

### Arithmetic

Each day, every kind due gives one problem, chosen as above. The kinds due longest come first, and no kind follows itself while a problem of another kind is left.

### Go course

After what is due, each retired kind that still has a problem you have never tried, and gave none today, gives its first one. Eruko shuffles the order of the kinds once a day and puts the kind you answered last at the end. A right answer writes no line. A wrong one brings its kind back the next day with that problem.

### C++ course

After what is due, mixed practice and the open kind take turns. Mixed practice gives a problem you have never tried, from the retired kind whose last first try is oldest. A right answer writes no line. A wrong one puts the problem on the dated list.

## What is never dated

- A worked example, and the problems that fade it: Arithmetic's problems with lines hidden, the C++ course's problems of shuffled lines.
- Arithmetic's try-first problem, Augustus's lessons, and the readings in Go and C++.
- Number-fact and end-level sheets before they pass: these are drilled.
- Go game review: a position you reviewed never comes back.
- Your games on the Online Go Server.
- The C++ course's contests.
