# The C++ language track: the source format

What `scripts/lib/cpp-track.mjs` reads and checks ("A Self-Study System", Programming, The language
track, The track's material). Run `node scripts/gen/cpp.mjs` after every change; a failing check stops
it with `<file> line <n>: <rule>: <what to fix>` and nothing is written. It needs g++ 16
(`g++` on PATH, or the compiler `ERUKO_CPP_COMPILER` names) and, for device items, the CUDA
toolkit at `~/.cache/eruko-cuda/tk` (or `ERUKO_CUDA`). Builds are cached under
`~/.cache/eruko-cpp-gen/track/`.

Sources live in `src/units/cpp/content/track/`: `stages.md`, then one folder per stage (`1/`, `2/`, …)
holding one file per kind, `NN-slug.md`, numbered 01, 02, … in track order (the order of the stage's
book). The kind's id is `<stage>.<NN>`; its items are `t<id>v1…` (verdict), `t<id>c` (count),
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
Sanitizer: address              ← sanitizer form: address | thread | memcheck | initcheck | racecheck | synccheck
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
- **sanitizer**: the reference is silent (and its output is the expected output); the wrong version
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
  the sanitizer (a host item needs `Sanitizer: thread`), and weakens each slot one step (seq_cst to
  acquire/release/acq_rel, each of those to relaxed; system to device to block to thread): each weaker
  program must be loud, or its slot listed in `Forbidden: 2` with `Derivation 1:` and `Derivation 2:`
  (a race in global memory, a fence: what no sanitizer models). The answer is right when every slot is
  as stored and the run is silent. See `tests/fixtures/cpp-track/6/09-acqrel.md`.
- Every input is stdin text; a device item takes its sizes and launch shape from stdin too. Device
  memory: no item needs more than a few MB (the device has 6 GB).
- No check reads a clock: never print a time, never ask for speed.

## Rules the generator does not check (the blind solve does)

- One part, one check: the kind's items test its part and nothing the learner has not met.
- The worked example teaches the part by showing it; the verdict item asks for a verdict on a
  program that turns on the part; the item alone asks the learner to write a program whose result
  the form settles; the wrong version breaks exactly the part.
- Page text follows ERUKO.md §6: second person, short active sentences, everyday words.
