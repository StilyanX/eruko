# 4.16 Naming the members in the braces
Part: designated initialisers
Clause: [dcl.init.aggr], [dcl.init.list], [dcl.init.general]
After: none
Levels: c++20

## Example
```cpp
#include <print>

//: Give each member of an aggregate a default.
struct Solver
{
    int iterations {100};
    double tolerance {1e-6};
    bool verbose {false};
};

int main()
{
    //: Name only the members to change, in their declared order.
    Solver quick {.iterations = 10, .verbose = true};
    std::println("{} {} {}", quick.iterations, quick.tolerance,
                 quick.verbose);
    //: Leave out a member to keep its default.
    Solver fine {.tolerance = 1e-12};
    std::println("{} {}", fine.iterations, fine.tolerance);
}
```

## Verdict 1
```cpp
struct Point
{
    int x {0};
    int y {0};
};

int main()
{
    Point p {.y = 2, .x = 1};
    return p.x + p.y - 3;
}
```
Answer: c++20..c++23 ill-formed 9

## Verdict 2
```cpp
struct Range
{
    int low {1};
    int high {low + 9};
};

int main()
{
    Range r {.low = 3};
    return r.high - 12;
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: flag
Write a program that defines a struct `Box` with the int members width, height and depth, in that order, each 1 unless the braces give it, makes a Box whose braces name width as 2 and depth as 5, and prints its volume.
Input: none.
Output: one line, 10.
Limits: none.
Expect:
- c++17: reject
- c++20..c++23: accept
### Reference
```cpp
#include <cstdio>

struct Box
{
    int width {1};
    int height {1};
    int depth {1};
};

int main()
{
    Box b {.width = 2, .depth = 5};
    std::printf("%d\n", b.width * b.height * b.depth);
}
```
### Wrong
```cpp
#include <cstdio>

struct Box
{
    int width {1};
    int height {1};
    int depth {1};
};

int main()
{
    Box b {.depth = 5, .width = 2};
    std::printf("%d\n", b.width * b.height * b.depth);
}
```
### Witness
```cpp
static_assert(sizeof(Box) == 3 * sizeof(int));
```

## Alone 2
Form: probes
Write a struct `Options` with the members `int iterations`, `double tolerance` and `bool verbose`, in that order, whose defaults are 100, 0.001 and false, so that braces can name any of them.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
Options a {.iterations = 5};
static_assert(Options {}.iterations == 100);
static_assert(Options {.verbose = true}.tolerance == 0.001);
Options b {.iterations = 2, .verbose = true};
Options c {.tolerance = 0.5, .iterations = 2};
Options d {.iterations = 1, 2.0};
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
struct Options
{
    int iterations {100};
    double tolerance {0.001};
    bool verbose {false};
};

int main()
{
}
```
### Wrong
```cpp
struct Options
{
    double tolerance {0.001};
    int iterations {100};
    bool verbose {false};
};

int main()
{
}
```
### Witness
```cpp
Options e {.iterations = 3, .tolerance = 1.0};
```
