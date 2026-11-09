# 4.14 A variable set while compiling and changed at run time
Part: `constinit`
Clause: [dcl.constinit], [basic.start.static], [expr.const], [diff.cpp17.lex]
After: none
Levels: c++17

## Example
```cpp
#include <print>

//: Write a function the compiler can run to find a start value.
constexpr int kib(int n)
{
    return 1024 * n;
}

//: Have the compiler set the global, so no code runs to set it.
constinit int budget {kib(64)};

//: Keep a count in a static the compiler sets to zero.
int next_id()
{
    constinit static int last {0};
    return ++last;
}

int main()
{
    //: Change the global at run time, since it is not const.
    budget -= 1000;
    std::println("{}", budget);
    //: Take three ids in turn.
    int a {next_id()};
    int b {next_id()};
    int c {next_id()};
    std::println("{} {} {}", a, b, c);
}
```

## Verdict 1
```cpp
int read()
{
    return 4;
}

constinit int limit {read()};

int main()
{
    return limit - 4;
}
```
Answer:
- c++17: ill-formed 6, 10
- c++20..c++23: ill-formed 6

## Verdict 2
```cpp
constinit int budget {10};

int main()
{
    budget = budget + 5;
    return budget - 15;
}
```
Answer:
- c++17: ill-formed 1, 5
- c++20..c++23: defined

## Alone 1
Form: flag
Write a program that declares a global int `budget` whose start value 1048576 the compiler must set while it compiles, lowers it by 1 in `main` and prints it.
Input: none.
Output: one line, 1048575.
Limits: none.
Expect:
- c++17: reject
- c++20..c++23: accept
### Reference
```cpp
#include <cstdio>

constinit int budget {1 << 20};

int main()
{
    budget -= 1;
    std::printf("%d\n", budget);
}
```
### Wrong
```cpp
#include <cstdio>

constexpr int budget {1 << 20};

int main()
{
    budget -= 1;
    std::printf("%d\n", budget);
}
```
### Witness
```cpp
int* where {&budget};
```

## Alone 2
Form: probes
Write a function `block(n)` that returns 512 · n for an int n, and a global int `cache` that is declared `constinit`, starts at block(8) and can be changed at run time.
Input: none.
Output: none.
Limits: 0 ≤ n ≤ 1000.
### Probes
```cpp
static_assert(block(2) == 1024);
int grown {cache += block(1)};
constinit int twice {block(16)};
constinit int copy {cache};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
constexpr int block(int n)
{
    return 512 * n;
}

constinit int cache {block(8)};

int main()
{
}
```
### Wrong
```cpp
constexpr int block(int n)
{
    return 512 * n;
}

constexpr int cache {block(8)};

int main()
{
}
```
### Witness
```cpp
int less {cache -= 1};
```
