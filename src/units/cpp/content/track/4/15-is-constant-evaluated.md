# 4.15 Asking whether the compiler is running the code
Part: `std::is_constant_evaluated`
Clause: [meta.const.eval], [expr.const], [stmt.if]
After: 4.13
Levels: c++20

## Example
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <type_traits>

//: Loop while compiling, and call the library at run time.
constexpr double root(double x)
{
    if (std::is_constant_evaluated()) {
        double r {x};
        for (int i {0}; i < 30; ++i) {
            r = (r + x / r) / 2;
        }
        return r;
    }
    return std::sqrt(x);
}

int main()
{
    //: Have the compiler find one root while it compiles.
    constexpr double two {root(2.0)};
    //: Find another at run time, from a value read in.
    double x {9.0};
    std::cin >> x;
    double three {root(x)};
    std::println("{:.6f} {:.6f}", two, three);
}
```

## Verdict 1
```cpp
#include <type_traits>

constexpr int pick()
{
    if (std::is_constant_evaluated()) {
        return 0;
    }
    return 4;
}

int main()
{
    const int n {pick()};
    int cells[n] {};
    return cells[0];
}
```
Answer: c++20..c++23 ill-formed 14

## Verdict 2
```cpp
#include <type_traits>

constexpr int pick()
{
    if constexpr (std::is_constant_evaluated()) {
        return 0;
    }
    return 4;
}

int main()
{
    volatile int m {4};
    int a {pick()};
    return m / a;
}
```
Answer: c++20..c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads k and prints, on one line, the value of a constexpr function `mark(k)` called at run time, then the value of `mark(5)` found while compiling; `mark` returns 2 · k when the compiler runs it and −k at run time.
Input: one line, k.
Output: one line, two integers separated by a space.
Limits: −1000 ≤ k ≤ 1000.
### Examples
```in
0
```
```out
0 10
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <type_traits>

constexpr int mark(int k)
{
    if (std::is_constant_evaluated()) {
        return 2 * k;
    }
    return -k;
}

int main()
{
    int k {0};
    std::cin >> k;
    int now {mark(k)};
    constexpr int early {mark(5)};
    std::println("{} {}", now, early);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <type_traits>

constexpr int mark(int k)
{
    if constexpr (std::is_constant_evaluated()) {
        return 2 * k;
    }
    return -k;
}

int main()
{
    int k {0};
    std::cin >> k;
    int now {mark(k)};
    constexpr int early {mark(5)};
    std::println("{} {}", now, early);
}
```
### Tests
```in
1
```
```in
-4
```
```in
1000
```
### Witness
```in
3
```

## Alone 2
Form: probes
Write a function `checked_div(a, b)` that returns a / b for ints; while compiling, a zero b is rejected, and at run time a zero b gives 0.
Input: none.
Output: none.
Limits: the quotient fits in an int.
### Probes
```cpp
static_assert(checked_div(7, 2) == 3);
int z {0};
int r {checked_div(5, z)};
static_assert(checked_div(1, 0) == 0);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <type_traits>

constexpr int checked_div(int a, int b)
{
    if (b == 0 && !std::is_constant_evaluated()) {
        return 0;
    }
    return a / b;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

constexpr int checked_div(int a, int b)
{
    if (b == 0) {
        return 0;
    }
    return a / b;
}

int main()
{
}
```
### Witness
```cpp
static_assert(checked_div(9, 0) == 0);
```
