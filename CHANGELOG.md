# Changelog

Each release, newest first, with its download size. [`RELEASES.md`](RELEASES.md) says how releases are numbered.

## 0.3.0

Download: about 8.0 MB with Brotli (94 MB uncompressed), fetched once in the background after the first page. Most of the growth is the new Algebra unit. A browser that already holds 0.2.0 fetches only the files that changed.

### Algebra, a new unit

- School algebra from the first equation to olympiad problems, with no calculator: 145 topics in 23 sections named for what they hold, each topic after the topics it uses.
- Every topic has its ideas, worked examples, problems that fade from the worked example to your own, and a bank of problems with full solutions, from linear equations through functions, logarithms, polynomials, inequalities, sequences and proof by induction to functional equations.
- Mixed practice, number facts shared with Arithmetic, and the Review page, as in Arithmetic.
- The end level is a paper of three algebra problems from the IMO Shortlists (2006 to 2025), one from each part of the list, in a sitting of 4 hours 30 minutes, the time of one IMO day. Eruko links the official file and stores none of its problems.
- Its sources are Richard Rusczyk's Introduction to Algebra, Rusczyk and Mathew Crawford's Intermediate Algebra, and Arthur Engel's Problem-Solving Strategies.

### The unit page

- The row Continue opens says Next, in heavier type, and so does its section. A screen reader hears it as the current step.
- When you arrive, the section that holds Next is the one open.
- A locked row says why at its end ("Opens after 3"), where other rows say Done or Next.
- Start's note, What you need before the first session, stands under its title until you begin. On a phone no title breaks into single letters.
- The Review row reads "6 new today", with no full stop, like every other row.
- Contents is set in the same size as Continue, and the gap under the search field is smaller.
- Search finds Review, a section by the name of its part, and a section's level test. A section found by search is no longer hidden under the top bar.
- A section with nothing in it no longer reads Done.

### Lessons

- The contents beside a lesson marks the section you are reading, in the text colour and heavier type, and the last section once you reach the foot of the page. A screen reader hears it as the current location.
- On a phone the contents close to one line, Contents, that opens the list. On a wide screen a long list scrolls in its own box.
- Text is larger: 17 pixels in the interface and 18 in the lessons.
- Maths in lessons is set in Literata's own digits and letters with TeX Gyre Bonum Math signs. A full stop or comma stays next to its formula, a formula never breaks inside itself, and a formula that states a relation after a colon stands on its own line.
- A screen reader reads a slash in a formula as division.
- A wrong answer in a fading problem or a try-first problem says "Wrong. Read the solution." after the right answer. In mixed practice, an ordinary problem says "Work it on paper." before its answer shows.
- On the day you mark an idea, Change the last mark turns it to Right after a Wrong, or to Wrong after a Right.
- A mark set just after a new problem shows is kept.

### Your record

- What you type is no longer lost when two saves come close together.
- Each tab opens your record on its own and saves on its own, so a save never waits on another tab. A tab left open when the tab that held the record closes takes it over, and one tab that cannot open the record no longer stops the others. The record runs on wa-sqlite 1.2.0.
- In a private window that lets the site store nothing, Eruko opens with your record in memory and says plainly that nothing is saved, with the backup button beside the note.
- On a host with no shared record, such as GitHub Pages, Eruko asks for it once, not every 30 seconds.
- On an iPhone, Eruko saved to the Home Screen no longer opens from another web app's Now Playing card.

### Go course

- A rules question about a move reads as a choice still to make: "Can Black now play at D4?"
- A position you have seen in a game's review is remembered by its place in the review list. A record from before 0.3.0 still marks it seen.

### C++ course

- Five more Exercism exercises: Gigasecond, Meetup, Robot Name, D&D Character and Complex Numbers.
- A contest's day is read the same way everywhere, moved from its own time zone into your study day.
- The memory checks also catch misuse of the standard library and of a vector's unused space.
- A device program takes a lock on the machine, so two checks of the language track never meet on one GPU.

### Augustus

- The 40-character line now applies to the lesson text, as intended.

### Focus

- A focus move that comes late never takes focus from a control you already reached.

## 0.2.0

Download: about 2.8 MB with Brotli (16.5 MB uncompressed), fetched once in the background after the first page. A browser that already holds 0.1.0 fetches only the files that changed.

### The app

- Eruko runs at https://stilyanx.github.io/eruko/, so you can try it without installing anything. GitHub Pages serves it, and every push to `main` puts the new version there. [`DEPLOY.md`](DEPLOY.md) says how it works.
- A link straight to a page, such as https://stilyanx.github.io/eruko/explore/go, opens that page on GitHub Pages, on your first visit too.
- The page Eruko keeps for use with no connection is always the newest one, even on a host that lets the browser keep its own copy for 10 minutes.
- The Go course's browser test now waits until your stored game has been reviewed. It failed on GitHub's slower test computers.
- New page, [`PRACTICE.md`](PRACTICE.md): what comes back for practice in each unit, and when.
- The Review page of the Go and C++ courses is now the same dated list as in the other units, and its count matches the Review card.
- The browser tests now check every page at 320 pixels wide, the width of 400% zoom: axe in the light, dark and both high-contrast themes, no sideways scroll, no text cut off when spacing is raised (WCAG 1.4.12), and nothing moving with reduced motion. [`ACCESSIBILITY.md`](ACCESSIBILITY.md) lists these checks and what else is built in.
- Each unit's Start page says how to turn on your device's own read-aloud on Android, iPhone and iPad, Windows, Mac and Chromebook.
- A screen reader hears what each reveal shows, with the maths read as words, and hears the right answer after a wrong one. An inline formula is read as one formula. A formula wider than its column scrolls inside a box you can reach by keyboard.
- A link puts you at the top of the new page. Back, Forward and reload return you to where you were.
- The Loading screen shows while a page loads. After 10 seconds it offers Reload the page.
- In Settings, the question before a backup replaces your record starts with focus on the safe answer. A file that is not a backup says so.
- More of what you type survives a reload: an idea's answer, an answer shown in mixed practice, and a shown answer or reason in a worked example.
- Buttons that go to the next problem say Next.

### Arithmetic

- The end level opens one line at a time. Sums opens when you pass the addition facts and Facts when you pass the multiplication facts. Each other line opens when every set of number facts has passed and you have finished the section it uses. The end level page says when each line opens.
- End-level practice now shares the number facts' hour a day and gets the time the facts leave. Sheets that come back for a check do not count against the hour.
- A problem marked "Calculator: yes" allows a calculator even before your number facts pass.
- Your mark and what you typed in "Place it on the line" survive a reload until you check them.
- In number facts, Start puts the cursor in the first field, and Check moves focus to Done.
- A topic's statements link to the proofs you still need to read.

### Augustus

- A new life starts with "Your field and your post": the field you work in and the office or rank you hold.
- The unit page shows one row, The life of Augustus, and Continue opens the lesson you are on. It no longer lists the lessons.
- A claim that only one account holds is marked contested, with the reason, where before it was hidden as unchecked.
- The end level's Reading shows ten chapters of the Res Gestae, five in Latin and five in Greek. Own words and Hedges match words whatever their capitals.
- The next-life checklist asks about each person on your list in turn. A life closed as stuck can be reopened with Keep this life.
- Each lesson screen's date line is a heading. Turning a screen tells a screen reader which screen of how many you are on, and focus moves to the new screen.

### Go course

- Once your own-game problems run out, Eruko writes new problems in your browser. Each starts from a problem you got wrong and changes one stone, and Eruko checks it before you see it. These replace the 15 problems that shipped written in advance, so the fixed set holds 134 problems in 22 kinds.
- A problem names its group by one of its stones, for example "the white group that includes R1", not by an area of the board.
- A finished kind comes back as one dated item with one problem: one you got wrong, else one you have not tried. A wrong answer brings its kind back the next day.
- You set up Go when your first game comes. Until then the game screen links to the Start page and offers Skip the game today. Your first counted practice game opens rated games whether your count was right or wrong.
- What you type on the work list is kept until you answer. Check stays locked until every field is filled.
- The question sits under the board and stays in view while you type.

### C++ course

- The course grows from 12 kinds of program to 74. The twelve are now the section Whole programs. A new section, Functions and classes, adds 62 kinds from Exercism's C++ track: you write a header and a source file, and Catch2 tests check them.
- The C++ runner runs Catch2 tests, and Stop also ends the processes compute-sanitizer started. Restart the runner after you update.
- The language track grows from 57 kinds in 2 stages to 304 in 9: Templates, C++20, C++23, Threads and the memory model, Design (the C++ Core Guidelines), CUDA, and Algorithms and numbers on a GPU. The CUDA stages need an NVIDIA GPU and the CUDA toolkit on the runner's computer.
- When every track kind is retired, a reading of 9 GPU tasks opens. A wrong answer reopens the task's kinds, and the next reading has fresh tasks.
- A retired kind comes back as a whole, with the problem you last got wrong, else one you have never tried, else the one you saw longest ago. A trace comes back on a different program.
- Submit and Answer are both called Check. Check and Run on the examples stay locked until you have typed something.
- Until you finish Start, the unit page's Continue opens Start.

## 0.1.0

Download: about 2.0 MB with Brotli (11.3 MB uncompressed).

Four units: Arithmetic, Augustus, the Go course and the C++ course.

- The app is named Eruko, formerly Aether, and is served at `/eruko/`. `npm start` sends a browser that kept the app at `/aether/` to the new address, and the records stay.
- The mark is a curvilinear triangle (`src/shell/mark.svg`): in the top bar, the tab icon and the home-screen icon.
