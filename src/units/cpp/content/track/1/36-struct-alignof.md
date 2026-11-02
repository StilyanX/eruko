# 1.36 The `alignof` of a struct
Part: the `alignof` of a struct
Clause: [expr.alignof], [basic.align], [dcl.align]
After: 1.35
Levels: c++23

## Example
```cpp
#include <print>

//: Take the struct's alignment from its strictest member.
struct Reading {
    char unit;
    double value;
};

//: Raise a struct's alignment with alignas.
struct alignas(32) Block {
    int n;
};

int main()
{
    //: Print each alignment and size: a size is a multiple of it.
    std::println("{} {}", alignof(Reading), sizeof(Reading));
    std::println("{} {}", alignof(Block), sizeof(Block));
    //: Give an array the alignment of its element.
    std::println("{}", alignof(Reading[4]));
}
```

## Verdict 1
```cpp
#include <print>

struct Sample {
    short count;
    char tag;
};

int main()
{
    std::println("{}", alignof(Sample));
}
```
Answer: c++23 implementation
Derivation 1: [basic.align]/1 leaves the alignment requirement of short to the implementation, and Sample's requirement follows from its members', so the printed alignof is the implementation's.
Derivation 2: [expr.alignof]/1 yields the alignment requirement of the type, and [basic.align]/2 makes the fundamental alignments implementation-defined, so alignof(Sample) is implementation-defined.

## Verdict 2
```cpp
struct alignas(double) Block {
    char tag;
};

static_assert(alignof(Block) == alignof(double));
static_assert(sizeof(Block) % alignof(Block) == 0);
static_assert(alignof(Block[3]) == alignof(Block));

int main()
{
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads a byte offset n and prints the smallest offset at least n at which an object of a struct holding a char and a double may start.
Input: one line, n.
Output: one line, the offset.
Limits: 0 ≤ n ≤ 1000000; x86-64 with g++ 16, where a double takes 8 bytes.
### Examples
```in
16
```
```out
16
```
```in
0
```
```out
0
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Sample {
    char tag;
    double value;
};

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::size_t step {alignof(Sample)};
    std::println("{}", (n + step - 1) / step * step);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Sample {
    char tag;
    double value;
};

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::size_t step {sizeof(Sample)};
    std::println("{}", (n + step - 1) / step * step);
}
```
### Tests
```in
8
```
```in
1
```
```in
100
```
```in
999999
```
### Witness
```in
24
```

## Alone 2
Form: probes
Write a struct `Line` holding an array of 4 ints, whose objects always start at an address that is a multiple of 64.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(alignof(Line) % 64 == 0);
static_assert(sizeof(Line) % 64 == 0);
static_assert(sizeof(Line::values) == 4 * sizeof(int));
static_assert(alignof(Line) < 64);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
struct alignas(64) Line {
    int values[4];
};

int main()
{
}
```
### Wrong
```cpp
struct Line {
    int values[16];
};

int main()
{
}
```
### Witness
```cpp
static_assert(alignof(Line) == 64);
```
