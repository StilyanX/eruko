# 1.44 Linkage
Part: linkage
Clause: [basic.link], [dcl.stc], [namespace.unnamed]
After: 1.43
Levels: c++23

## Example
```cpp
#include <print>

static int helper(int x)
{
    return x + 1;
}

namespace {
int hidden {5};
}

const int limit {10};
extern const int shared {20};
int count {3};

int main()
{
    //: Use names with internal linkage: this file alone sees them.
    int a {helper(hidden) + limit};
    //: Use a name with external linkage: any file can declare it.
    int b {shared};
    //: Hide count, then reach the global one with extern.
    int count {0};
    {
        extern int count;
        b += count;
    }
    std::println("{} {} {}", a, b, count);
}
```

## Verdict 1
```cpp
#include <print>

static int count {5};

int main()
{
    int count {1};
    {
        extern int count;
        std::println("{}", count);
    }
    std::println("{}", count);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

extern int total;

int add(int x)
{
    return total + x;
}

static int total {3};

int main()
{
    std::println("{}", add(4));
}
```
Answer: c++23 ill-formed 10

## Alone 1
Form: probes
Write a program with a function `int twice(int x)`, defined before `main`, that returns 2 times x and that code in other files can never call. `main` reads x and prints `twice(x)`.
Input: one line, x.
Output: one line, 2 times x.
Limits: -1000 ≤ x ≤ 1000.
### Probes
```cpp
static int twice(int x);
static long twice(int x);
```
Accept: 1
Reject: 2
### Reference
```cpp
#include <iostream>
#include <print>

static int twice(int x)
{
    return 2 * x;
}

int main()
{
    int x {0};
    std::cin >> x;
    std::println("{}", twice(x));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int twice(int x)
{
    return 2 * x;
}

int main()
{
    int x {0};
    std::cin >> x;
    std::println("{}", twice(x));
}
```
### Witness
```cpp
static int twice(int x);
```

## Alone 2
Form: flag
Write a program that declares a function `int area(int side)` twice before `main`, once with the keyword `static` and once without it, calls it in `main` on a number it reads, prints the result, and defines it after `main` to return side times side.
Input: one line, side.
Output: one line, side times side.
Limits: 1 ≤ side ≤ 1000.
Expect:
- c++23: accept
### Reference
```cpp
#include <iostream>
#include <print>

static int area(int side);
int area(int side);

int main()
{
    int side {0};
    std::cin >> side;
    std::println("{}", area(side));
}

int area(int side)
{
    return side * side;
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int area(int side);
static int area(int side);

int main()
{
    int side {0};
    std::cin >> side;
    std::println("{}", area(side));
}

int area(int side)
{
    return side * side;
}
```
### Witness
```cpp
int area(int side);
```
