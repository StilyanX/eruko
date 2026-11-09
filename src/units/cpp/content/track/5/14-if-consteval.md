# 5.14 Calling a consteval function inside `if consteval`
Part: `if consteval`
Clause: [stmt.if], [expr.const]
After: 4.13, 4.15
Levels: c++23

## Example
```cpp
#include <iostream>
#include <print>

//: Write a function that runs only while compiling.
consteval int twice(int k)
{
    return 2 * k;
}

//: Call it inside if consteval, and add by hand at run time.
constexpr int doubled(int k)
{
    if consteval {
        return twice(k);
    } else {
        return k + k;
    }
}

int main()
{
    //: Have the compiler take the first branch.
    constexpr int early {doubled(21)};
    //: Take the second branch at run time, on a value read in.
    int k {4};
    std::cin >> k;
    std::println("{} {}", early, doubled(k));
}
```

## Verdict 1
```cpp
#include <print>

consteval int twice(int k)
{
    return 2 * k;
}

constexpr int mark(int k)
{
    if !consteval {
        return twice(k);
    } else {
        return -k;
    }
}

int main()
{
    std::println("{}", mark(3));
}
```
Answer: c++23 ill-formed 11

## Verdict 2
```cpp
#include <print>

consteval int twice(int k)
{
    return 2 * k;
}

constexpr int mark(int k)
{
    if consteval {
        return twice(k);
    }
    return -k;
}

int main()
{
    constexpr int early {mark(3)};
    int now {mark(3)};
    std::println("{} {}", early, now);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a consteval function `square_now(int x)` that returns x · x, and a constexpr function `square(int x)` that returns `square_now(x)` while the compiler runs it and −1 at run time.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(square(5) == 25);
int run_time(int x) { return square(x); }
static_assert(square(5) == -1);
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <type_traits>

consteval int square_now(int x)
{
    return x * x;
}

constexpr int square(int x)
{
    if consteval {
        return square_now(x);
    }
    return -1;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

consteval int square_now(int x)
{
    return x * x;
}

constexpr int square(int x)
{
    if (std::is_constant_evaluated()) {
        return square_now(x);
    }
    return -1;
}

int main()
{
}
```
### Witness
```cpp
static_assert(square(3) == 9);
```

## Alone 2
Form: run
Write a program that reads k and prints, on one line, the value of a constexpr function `mark(k)` called at run time, then the value of `mark(2)` found while compiling. `mark(k)` returns k · k when the compiler runs it and k + k at run time.
Input: one line, k.
Output: one line, two integers separated by a space.
Limits: −1000 ≤ k ≤ 1000.
### Examples
```in
2
```
```out
4 4
```
### Reference
```cpp
#include <iostream>
#include <print>

constexpr int mark(int k)
{
    if consteval {
        return k * k;
    } else {
        return k + k;
    }
}

int main()
{
    int k {0};
    std::cin >> k;
    int now {mark(k)};
    constexpr int early {mark(2)};
    std::println("{} {}", now, early);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

constexpr int mark(int k)
{
    if !consteval {
        return k * k;
    } else {
        return k + k;
    }
}

int main()
{
    int k {0};
    std::cin >> k;
    int now {mark(k)};
    constexpr int early {mark(2)};
    std::println("{} {}", now, early);
}
```
### Tests
```in
0
```
```in
-1000
```
```in
1000
```
```in
-3
```
### Witness
```in
3
```
