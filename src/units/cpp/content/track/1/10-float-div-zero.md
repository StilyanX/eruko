# 1.10 Floating-point division by zero
Part: floating-point division by zero
Clause: [expr.mul], [expr.const], [numeric.limits.members]
After: none
Levels: c++23

## Example
```cpp
#include <limits>
#include <print>

int main()
{
    //: Keep a rise and a run; the run may be zero.
    double rise {3.0};
    double run {0.0};
    //: Start from infinity, named and not divided for.
    double slope {std::numeric_limits<double>::infinity()};
    //: Divide only when the run is not zero.
    if (run != 0.0) {
        slope = rise / run;
    }
    //: Print the slope.
    std::println("{}", slope);
}
```

## Verdict 1
```cpp
#include <print>

constexpr double share(double total, double parts)
{
    return total / parts;
}

constexpr double each {share(12.0, 0.0)};

int main()
{
    std::println("{}", each);
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <limits>
#include <print>

constexpr double share(double total, double parts)
{
    if (parts == 0.0) {
        return std::numeric_limits<double>::infinity();
    }
    return total / parts;
}

constexpr double each {share(12.0, -0.0)};

int main()
{
    std::println("{}", each);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n numbers and prints 1 / x for each number x, or `none` when x is zero.
Input: first line n; second line, n numbers separated by spaces.
Output: n lines, one for each number in order.
Limits: 1 ≤ n ≤ 100; |x| ≤ 1000000.
### Examples
```in
3
2 4 -0.5
```
```out
0.5
0.25
-2
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        if (x == 0.0) {
            std::println("none");
        } else {
            std::println("{}", 1.0 / x);
        }
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        if (1.0 / x == 0.0) {
            std::println("none");
        } else {
            std::println("{}", 1.0 / x);
        }
    }
}
```
### Tests
```in
1
0
```
```in
3
1 -0 8
```
```in
2
0.0 0.5
```
### Witness
```in
2
0 5
```

## Alone 2
Form: probes
Write a function `constexpr double slope(double x1, double y1, double x2, double y2)` that returns the slope of the line through the points (x1, y1) and (x2, y2), and `std::numeric_limits<double>::infinity()` when x1 equals x2, in a program whose `main` does nothing.
Input: none.
Output: none.
Limits: |x1|, |y1|, |x2|, |y2| ≤ 1000000.
### Probes
```cpp
static_assert(slope(0.0, 0.0, 2.0, 4.0) == 2.0);
static_assert(slope(1.0, 0.0, 1.0, 5.0) > 1e308);
static_assert(slope(0.0, 0.0, 2.0, 4.0) == 3.0);
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <limits>

constexpr double slope(double x1, double y1,
                       double x2, double y2)
{
    if (x1 == x2) {
        return std::numeric_limits<double>::infinity();
    }
    return (y2 - y1) / (x2 - x1);
}

int main()
{
}
```
### Wrong
```cpp
#include <limits>

constexpr double slope(double x1, double y1,
                       double x2, double y2)
{
    return (y2 - y1) / (x2 - x1);
}

int main()
{
}
```
### Witness
```cpp
static_assert(slope(3.0, 1.0, 3.0, 2.0) > 1e308);
```
