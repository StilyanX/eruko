# 5.15 Marking a path that is never taken with `std::unreachable`
Part: `std::unreachable`
Clause: [utility.unreachable], [expr.const], [dcl.constexpr]
After: 1.20, 1.30
Levels: c++23

## Example
```cpp
#include <iostream>
#include <print>
#include <utility>

enum class Turn { left, right };

//: Return a value for each turn, and mark the end as never reached.
constexpr int step(Turn t)
{
    switch (t) {
    case Turn::left:
        return -1;
    case Turn::right:
        return 1;
    }
    std::unreachable();
}

int main()
{
    //: Let the compiler run it; it stops at a case, not at the end.
    constexpr int back {step(Turn::left)};
    //: Read a code and turn it into one of the two turns only.
    int code {0};
    std::cin >> code;
    Turn t {code == 0 ? Turn::left : Turn::right};
    std::println("{} {}", back, step(t));
}
```

## Verdict 1
```cpp
#include <utility>

constexpr int pick(int x)
{
    if (x == 0) {
        return 1;
    }
    std::unreachable();
}

int main()
{
    constexpr int h {pick(3)};
    return h;
}
```
Answer: c++23 ill-formed 8

## Verdict 2
```cpp
#include <array>
#include <print>
#include <utility>

int first_even(const std::array<int, 4>& a)
{
    for (int x : a) {
        if (x % 2 == 0) {
            return x;
        }
    }
    std::unreachable();
}

int main()
{
    std::array<int, 4> a {3, 5, 8, 9};
    std::println("{}", first_even(a));
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a constexpr function `digit_value(char c)` that returns the value of a digit from '0' to '9'. Any other char is the caller's mistake: mark the end of the function as never reached.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(digit_value('0') == 0);
static_assert(digit_value('9') == 9);
int at_run(char c) { return digit_value(c); }
static_assert(digit_value('x') == 0);
static_assert(digit_value('a') == 10);
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <utility>

constexpr int digit_value(char c)
{
    if (c >= '0' && c <= '9') {
        return c - '0';
    }
    std::unreachable();
}

int main()
{
}
```
### Wrong
```cpp
#include <utility>

constexpr int digit_value(char c)
{
    if (c >= '0' && c < '9') {
        return c - '0';
    }
    std::unreachable();
}

int main()
{
}
```
### Witness
```cpp
constexpr int nine {digit_value('9')};
```

## Alone 2
Form: probes
Write a constexpr function `sides(Shape s)` for `enum class Shape { triangle, square, hexagon };` that returns 3, 4 or 6. A Shape outside these three is the caller's mistake: mark that path as never reached.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(sides(Shape::hexagon) == 6);
int at_run(Shape s) { return sides(s); }
static_assert(sides(static_cast<Shape>(7)) == 0);
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <utility>

enum class Shape { triangle, square, hexagon };

constexpr int sides(Shape s)
{
    switch (s) {
    case Shape::triangle:
        return 3;
    case Shape::square:
        return 4;
    case Shape::hexagon:
        return 6;
    }
    std::unreachable();
}

int main()
{
}
```
### Wrong
```cpp
#include <utility>

enum class Shape { triangle, square, hexagon };

constexpr int sides(Shape s)
{
    switch (s) {
    case Shape::triangle:
        return 3;
    case Shape::square:
        return 4;
    case Shape::hexagon:
        return 6;
    }
    return 0;
}

int main()
{
}
```
### Witness
```cpp
constexpr int none {sides(static_cast<Shape>(3))};
```
