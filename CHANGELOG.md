# Changelog

Each release, newest first, with its download size. [`RELEASES.md`](RELEASES.md) says how releases are numbered.

## 0.2.0

Download: about 2.8 MB with Brotli (16.5 MB uncompressed), fetched once in the background after the first page. A browser that already holds 0.1.0 fetches only the files that changed.

### The app

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
