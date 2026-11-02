# 1.11 Floating-point overflow to infinity
Part: a floating-point operation that overflows to infinity
Clause: [expr.pre], [expr.const], [numeric.limits.members]
After: 1.10
Levels: c++23

## Example
```cpp
#include <cmath>
#include <limits>
#include <print>

int main()
{
    //: Take two sides near the top of the double range.
    double x {3e200};
    double y {4e200};
    //: Print the largest double; x * x lies far above it.
    std::println("{}", std::numeric_limits<double>::max());
    //: Let std::hypot scale the sides, so no step goes past it.
    std::println("{}", std::hypot(x, y));
}
```

## Verdict 1
```cpp
#include <print>

constexpr double factorial(int n)
{
    double f {1.0};
    for (int k {2}; k <= n; ++k) {
        f *= k;
    }
    return f;
}

constexpr double big {factorial(171)};

int main()
{
    std::println("{}", big);
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <limits>
#include <print>

int main()
{
    double f {1.0};
    int n {1};
    while (f <= std::numeric_limits<double>::max() / (n + 1)) {
        ++n;
        f *= n;
    }
    std::println("{}! = {}", n, f);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads two numbers x and y and prints the length of the vector (x, y), the square root of x² + y².
Input: one line, two numbers x and y.
Output: one line, the length.
Limits: |x|, |y| ≤ 1e300.
### Examples
```in
3 4
```
```out
5
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    double y {0.0};
    std::cin >> x >> y;
    std::println("{}", std::hypot(x, y));
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    double y {0.0};
    std::cin >> x >> y;
    std::println("{}", std::sqrt(x * x + y * y));
}
```
### Tests
```in
3e200 4e200
```
```in
-1e300 0
```
```in
1e160 1e160
```
### Witness
```in
6e170 8e170
```

## Alone 2
Form: run
Write a program that reads two numbers a and b and prints the number halfway between them.
Input: one line, two numbers a and b.
Output: one line, the number halfway between a and b.
Limits: 1e-300 ≤ |a|, |b| ≤ 1.7e308.
### Examples
```in
1 3
```
```out
2
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    std::cin >> a >> b;
    std::println("{}", a / 2 + b / 2);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    std::cin >> a >> b;
    std::println("{}", (a + b) / 2);
}
```
### Tests
```in
1.5e308 1.5e308
```
```in
-1e308 -1.2e308
```
```in
1.7e308 1e308
```
### Witness
```in
1e308 1e308
```
