# The C++ language track: the source format

What `scripts/lib/cpp-track.mjs` reads and checks ("A Self-Study System", Programming, The language
track, The track's material). Run `node scripts/gen/cpp.mjs` after every change; a failing check stops
it with `<file> line <n>: <rule>: <what to fix>` and nothing is written. It needs g++ 16
(`g++` on PATH, or the compiler `ERUKO_CPP_COMPILER` names) and, for device items, the CUDA
toolkit at `~/.cache/eruko-cuda/tk` (or `ERUKO_CUDA`). Builds are cached under
`~/.cache/eruko-cpp-gen/track/`.

Sources live in `src/units/cpp/content/track/`: `stages.md`, then one folder per stage (`1/`, `2/`, …)
holding one file per kind, `NN-slug.md`, NN the part's number in its stage's list (the order of the
stage's book, `cpp-order.md`); a part with no kind leaves its number unused. The kind's id is `<stage>.<NN>`; its items are `t<id>v1…` (verdict), `t<id>c` (count),
`t<id>a1…` (alone) and `t<id>w1…` (the witness that goes with alone 1, …).

## A kind file

````
# 1.04 Signed overflow in an index product
Part: signed overflow in an index product          ← the paper's wording of the part, exactly
Clause: [expr.pre], [expr.mul], [basic.fundamental] ← N4950 stable names (or a guide's section)
After: 1.02                                        ← earlier track kinds it needs, or none
Levels: c++11                                      ← the lowest level its book treats; items ask it..c++23
Device: yes                                        ← only for a kind whose programs are CUDA (```cuda)
Source: CUDA C++ Programming Guide §5.4             ← optional: the added source it is taken from

## Example
```cpp
#include <print>

int main()
{
    //: Say in one imperative sentence what the group of lines does.
    ...lines of the group...
    //: Next group.
    ...
}
```
````

- `## Example`: the worked example. Every group of lines stands under a `//: ` label, one sentence,
  a capital, a full stop, imperative ("Keep the sizes as int."). Lines before the first label (the
  includes) need none. It must compile at c++23 (nvcc for a device kind) and exit 0.
- Every program shown (example, verdict, count, reference, wrong) has no line wider than 64
  characters and no tabs. Write in the course's style: `int n {0};`, `std::println`, 4 spaces, a
  function's `{` on its own line, K&R for control statements, no comments.

### `## Verdict 1`, `## Verdict 2`, … (one or more; the second serves gate C's fresh verdict item)

````
## Verdict 1
```cpp
...a whole program...
```
Answer: c++11..c++23 undefined sanitizer
````
or per level band:
````
Answer:
- c++11..c++17: ill-formed 7
- c++20..c++23: defined
````
- The six verdicts, by their stored names: `defined` (well-formed with one defined result),
  `ill-formed <lines>` (a diagnostic required; the lines g++ reports errors at, `7, 9`), `ndr`
  (ill-formed, no diagnostic required), `undefined <how>` where how is `constant` (constant
  evaluation rejects it), `sanitizer` (ASan+UBSan, or the item's `Sanitizer:`, reports it on the run)
  or `stored` (nothing shows it: library UB, a race in global memory, …), `unspecified`,
  `implementation`.
- `ndr`, `implementation` and `undefined stored` need `Derivation 1:` and `Derivation 2:` lines: two
  derivations written apart, each from the clause alone, each one line.
- `unspecified` stores the set of results: one ```` ```out ```` block per permitted result. Every
  result g++ gives at every level, at -O2 and -O0, must be in the set.
- `Levels: c++17` on the item overrides the kind's lowest level. A verdict at a lower level differs
  from c++23's only where the book or Annex C says so.
- The checks: `defined` → compiles at that level with `-pedantic-errors`, exits 0, ASan+UBSan silent.
  `ill-formed 7` → g++ rejects it with errors exactly at line 7. `undefined constant` → g++ rejects it
  with "not a constant expression"/"overflow in constant expression". `undefined sanitizer` → the
  sanitizer reports, the same kind and line on a second run.
- A device verdict item (```` ```cuda ````, or `Device: yes` on the item) has one level, nvcc's.
- `Sanitizer: thread` (or a compute-sanitizer tool) and `Flags: -O0 -ffp-contract=off` may stand on an
  item; flags must be in `EXTRA` of `src/units/cpp/core/check.logic.js`.

### `## Count` (only where the part moves a count)

````
## Count
Columns: copies, moves
```cpp
...program...
```
````
The program prints one line `@<line> <column>` each time a line moves a count by one (use
`std::source_location::current().line()` passed from the line, or `__LINE__`), and may print other
lines. The generator counts the events by line: one table row per line that moves a count, each
column the number of events. The learner fills every row before the run. The counts must be the
same in a second run and a second build, and every column must move in some row. Write it so the
row lines are the lines the learner should look at (the line of the expression, not a helper's).

### `## Alone 1`, `## Alone 2`, … (each with its wrong version and a sample witness)

````
## Alone 1
Form: run                       ← run | sanitizer | flag | probes
Sanitizer: address              ← sanitizer form: address | thread | memcheck | initcheck | racecheck
Result: nm foo<                 ← optional: judge a count instead of the output (see below)
Write a program that reads n and prints …
Input: one line, n.
Output: one line, ….
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
3
```
```out
6
```
### Reference
```cpp
...
```
### Wrong
```cpp
...the reference with ONE change that breaks the part and still passes the examples...
```
### Tests
```in
...one hidden test per block...
```
### Witness
```in
...an input on which the reference and the wrong version differ...
```
````

- The statement: first line `Write a program that …` (or `Write a function …`), then exactly one
  `Input:`, one `Output:`, one `Limits:` line, in that order (`Input: none.` where it reads nothing).
  No story, no names of people, no hint of the plan.
- **run**: the learner's output equals the reference's on every example and test (end-of-line spaces
  and final blank lines dropped). The wrong version passes every example and gives another result on
  the witness. `Result: nm <regex>` counts the defined symbols `nm -C` lists whose name matches (an
  instantiation count); `Result: sass <regex>` counts the machine instructions whose opcode matches;
  `Result: registers <kernel regex>` / `spill <kernel regex>` read nvcc's resource usage.
  The input moves no such count, so a `Result:` item holds its wrong version to the examples by
  what it prints and to the witness by its count; in the app, what a counted program prints must
  be the reference's too.
- **sanitizer** (it names its `Sanitizer:`): the reference is silent (and its output is the expected output); the wrong version
  passes the examples and is loud on the witness (or on a hidden test), the same report twice.
- **flag**: `Expect:` then `- c++17: reject` / `- c++20..c++23: accept` lines. The reference gets
  every stated verdict, the wrong version misses one. Its witness is ```` ```cpp ```` probe lines appended
  at the end of the program: the reference and the wrong version must differ (one accepts, one
  rejects) at the last stated level.
- **probes**: a `### Probes` subsection with one ```` ```cpp ```` block of probe lines and `Accept: 1, 2` and
  `Reject: 3, 4` lines naming lines of that block. The learner's template with every accepted line
  must compile; with each rejected line added alone it must fail at that line. The wrong version
  fails a probe. Its witness is probe lines on which the reference and the wrong version differ.
- **orders** (atomics): the reference holds `ORDER_1`, `ORDER_2`, … (and `SCOPE_1`, … on the device)
  where each atomic operation's memory order (and thread scope) stands; the section lists them:
  `Orders:` then `- 1: store release`, `- 2: load acquire` (`- 1: store release device` on the device;
  the operation is load, store, rmw or fence). The learner types each slot. `### Wrong` holds its own
  `Orders:` list (one slot weakened). The generator fills the slots, checks the reference silent under
  the sanitizer (a host item needs `Sanitizer: thread`, or `Settled: stored`), and weakens each slot one step (seq_cst to
  acquire/release/acq_rel, each of those to relaxed; system to device to block to thread): each weaker
  program must be loud, or its slot listed in `Forbidden: 2` with `Derivation 1:` and `Derivation 2:`
  (a race in global memory, a fence: what no sanitizer models). The answer is right when every slot is
  as stored and the run is silent. See `tests/fixtures/cpp-track/6/09-acqrel.md`.
- `Settled: stored` on an orders item: what its weaker slots break is one no sanitizer models (a
  host fence, which ThreadSanitizer does not model; on the device, an order between blocks, a race
  in global memory, whose weaker programs may also never end), so the stored verdict alone settles
  it. The item names no `Sanitizer:` and none runs; every slot is in `Forbidden:` with the two derivations; and `### Wrong`
  holds, after its `Orders:`, one ```` ```out ```` block per result its weaker slot permits beside the
  reference's on every input (the value from before the write, such as `0`). The witness is right when
  the reference runs clean and one of those results differs from its output; no run of the wrong
  version decides it, and no weaker program runs. See `content/track/6/09-fence.md`, and
  `content/track/8/42-release-acquire-blocks.md` on the device.
- Every input is stdin text; a device item takes its sizes and launch shape from stdin too. Device
  memory: no item needs more than a few MB (the device has 6 GB).
- No check reads a clock: never print a time, never ask for speed.

### `## Scan` (stage 7 only, and every stage 7 kind holds one)

A stage 7 kind's part is one rule of the C++ Core Guidelines (sections P, I, F, R, ES, Con, T, Per,
CP) that a scan can settle. `Part:` is the rule's number and title (`F.48 Don't return
std::move(local)`); `Clause:` names the rule (`C++ Core Guidelines F.48`) and any N4950 clause.

````
## Scan
Rule: F.48
Warning: -Wpessimizing-move, -Wredundant-move        ← g++ 16 warnings that make it loud, or
Pattern: /\breturn\s+std::move\s*\(\s*\w+\s*\)/      ← a JavaScript regular expression, flags i, m, s
### Bad
```cpp
...the rule's own bad example from the Guidelines, made whole...
```
### Good
```cpp
...the rule's own good example...
```
````

- A pattern runs over the answer's text with every comment and the inside of every string and
  character literal blanked (`src/units/cpp/core/scan.logic.js`); a warning scan compiles the answer
  alone at c++23 with the warnings named and reads g++'s text (nvcc passes them to its host compiler).
- The rule's own text is the bound: the scan flags what the text calls a violation and nothing it
  allows. Entry check: loud on `### Bad`, silent on `### Good` (a warning scan needs both to compile).
- A stage 7 item alone is a run item: the reference passes its tests and the scan is silent on it;
  the wrong version gives the same output on every test and the scan is loud on it (it breaks the
  rule, not the result). Its `### Witness` is a program (```` ```cpp ````) that compiles and on which
  the scan is silent: the learner rewrites the rule's bad example so the scan says nothing.
- From the day a stage 7 kind is retired its scan reads every track answer (items alone and stage 7
  witnesses), so the generator runs every scan over every item alone's reference in every stage. A
  reference the scan flags is rewritten, or, when its statement asks for the break, its section
  names the rule, `Exempt: R.3`, and the statement then says so by itself ("This program breaks
  rule R.3 on purpose, so the scan of R.3 skips it.").
- Sample: `tests/fixtures/cpp-track/7/05-sample.md`.

## The reading: `content/track/reading/NN-slug.md`

Nine tasks, `01-` to `09-`, in the paper's order (The track's reading). A task is shaped as a kind
with the id `0.NN`; its items are `t0.NNb` (the bound), `t0.NNv1…`, `t0.NNc`, `t0.NNa1`, `t0.NNw1`.

````
# 0.02 A nearest-neighbour operator split by parity
Task: a nearest-neighbour operator on a periodic four-dimensional lattice split by parity: …   ← the paper's wording
Shape: QUDA include/kernels/dslash_wilson.cuh, lib/dslash_wilson.cu   ← the files read to choose the shape
Device: yes
Write a kernel that … (the task in plain words, no physics; one or more lines)

## Bound
Tag: 9.14                                 ← the kind whose part the bound tests
Count: the bytes the routine loads per site in single precision
Answer: 1440
Source: QUDA include/kernels/dslash_wilson.cuh: 8 neighbours, each a 3×3 complex matrix and a 3-vector
Derivation 1: …
Derivation 2: …

## Verdict 1
Tag: 8.33
…a verdict item as in a kind…

## Count
Tag: 9.08
…

## Alone 1
Tag: 9.14
Newer: 12, 30          ← the reference's lines that need c++23 (g++, or nvcc on the device, rejects it at c++20 exactly there)
Form: run
…an item alone as in a kind, with ### Reference, ### Wrong, ### Tests, ### Witness…
````

- Every item, the bound too, names with `Tag:` the track kind whose part its check tests; a wrong answer opens that
  kind again. The tag must name a kind file that exists.
- The bound is the count of the library's own routine for the task's work, read from its file and
  stored with the file's name; it is derived twice, apart. The source's text chooses the shape and
  is never copied.
- The item alone and its witness pass the same entry checks as a kind's; the scans run over the
  reference as over every reference.
- Check one task with `--track-file src/units/cpp/content/track/reading/<file>.md`.

## Rules the generator does not check (the blind solve does)

- One part, one check: the kind's items test its part and nothing the learner has not met.
- The worked example teaches the part by showing it; the verdict item asks for a verdict on a
  program that turns on the part; the item alone asks the learner to write a program whose result
  the form settles; the wrong version breaks exactly the part.
- Page text follows ERUKO.md §6: second person, short active sentences, everyday words.
