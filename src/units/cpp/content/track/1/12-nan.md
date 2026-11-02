# 1.12 Floating-point operations that give NaN
Part: a floating-point operation that has no value and gives NaN
Clause: [expr.pre], [expr.const], [expr.eq], [numeric.limits.members], [c.math.fpclass]
After: 1.11
Levels: c++23

## Example
```cpp
#include <cmath>
#include <limits>
#include <print>

int main()
{
    //: Keep an empty list's sum and count.
    double sum {0.0};
    int count {0};
    //: Test the count, since 0.0 / 0 has no value.
    if (count == 0) {
        std::println("no mean");
    } else {
        std::println("{}", sum / count);
    }
    //: Take a NaN by its name.
    double q {std::numeric_limits<double>::quiet_NaN()};
    //: Ask std::isnan, since a NaN equals nothing, not even itself.
    std::println("{} {}", std::isnan(q), q == q);
}
```

## Verdict 1
```cpp
#include <limits>
#include <print>

constexpr double inf {std::numeric_limits<double>::infinity()};
constexpr double rise {inf};
constexpr double fall {inf};
constexpr double net {rise - fall};

int main()
{
    std::println("{}", net);
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <limits>
#include <print>

static_assert(std::numeric_limits<double>::is_iec559);

int main()
{
    double q {std::numeric_limits<double>::quiet_NaN()};
    std::println("{} {}", q == q, q != q);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n numbers and prints the square root of each, or `none` for a number that has no real square root.
Input: first line n; second line, n numbers separated by spaces.
Output: n lines, one for each number in order.
Limits: 1 ≤ n ≤ 100; |x| ≤ 1000000.
### Examples
```in
3
4 2.25 0
```
```out
2
1.5
0
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        double r {std::sqrt(x)};
        if (std::isnan(r)) {
            std::println("none");
        } else {
            std::println("{}", r);
        }
    }
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <limits>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        double r {std::sqrt(x)};
        if (r == std::numeric_limits<double>::quiet_NaN()) {
            std::println("none");
        } else {
            std::println("{}", r);
        }
    }
}
```
### Tests
```in
1
-1
```
```in
3
9 -0.25 16
```
```in
2
-1000000 1000000
```
### Witness
```in
2
-4 4
```

## Alone 2
Form: run
Write a program that reads n and then n numbers and prints their mean, or `empty` when n is 0.
Input: first line n; second line, n numbers separated by spaces (the line is empty when n is 0).
Output: one line, the mean or `empty`.
Limits: 0 ≤ n ≤ 100; |x| ≤ 1000000.
### Examples
```in
3
1 2 6
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    double sum {0.0};
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        sum += x;
    }
    if (n == 0) {
        std::println("empty");
    } else {
        std::println("{}", sum / n);
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
    double sum {0.0};
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        sum += x;
    }
    if (sum / n == 0.0) {
        std::println("empty");
    } else {
        std::println("{}", sum / n);
    }
}
```
### Tests
```in
0
```
```in
2
-3 3
```
```in
1
0
```
### Witness
```in
0
```
