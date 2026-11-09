# 9.26 The bits lost in a subtraction of two close floats
Part: the bits lost in `x - y` when the two are close
Clause: [expr.add], [cmath.syn], [basic.fundamental]
After: 9.24, 9.25
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §1.7 and Theorem 2.5

## Example
```cpp
#include <cmath>
#include <print>

int main()
{
    //: Hold 1.1 and 1 as floats; 1.1 is rounded.
    float x {1.1f};
    float y {1.0f};
    //: Subtract them; y is at least half of x, so d is exact.
    float d {x - y};
    //: Count the bits lost: how far the exponent falls.
    int lost {std::ilogb(x) - std::ilogb(d)};
    //: Print d beside 0.1f; d ends in the lost bits, all zero.
    std::println("{:a} {:a} {}", d, 0.1f, lost);
}
```

## Verdict 1
```cpp
int main()
{
    constexpr float x {1.1f};
    constexpr float y {1.0f};
    static_assert(x - y == 0.1f);
}
```
Answer: c++23 ill-formed 5

## Verdict 2
```cpp
int main()
{
    constexpr float x {1.1f};
    constexpr float y {1.0f};
    static_assert((x - y) + y == x);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads two floats x and y and computes d = x − y in float. It prints d and the bits lost, which are std::ilogb(x) − std::ilogb(d).
Input: one line, x and y, each read as a float.
Output: one line, d as std::format prints it with {:a}, such as 1p-2, then a space and the bits lost.
Limits: 0 < y < x ≤ 2y; 1e-30 ≤ y ≤ 1e30.
### Examples
```in
1.5 1.25
```
```out
1p-2 2
```
```in
3 2
```
```out
1p+0 1
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    float x {0.0f};
    float y {0.0f};
    std::cin >> x >> y;
    float d {x - y};
    std::println("{:a} {}", d, std::ilogb(x) - std::ilogb(d));
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
    double d {x - y};
    std::println("{:a} {}", d, std::ilogb(x) - std::ilogb(d));
}
```
### Tests
```in
1.1 1
```
```in
2 1
```
```in
3.3e-30 3.2e-30
```
```in
1e30 9.999999e29
```
### Witness
```in
1.0000001 1
```

## Alone 2
Form: run
Write a program that reads a float x and a whole number k. It prints the smallest float y below x for which x − y, computed in float, loses at least k bits. The bits lost are std::ilogb(x) − std::ilogb(x − y).
Input: one line, x read as a float, then k.
Output: one line, y as std::format prints it with {:a}, such as 1.000002p+0.
Limits: 1 ≤ x < 2; 2 ≤ k ≤ 23.
### Examples
```in
1.5 2
```
```out
1.000002p+0
```
```in
1.75 3
```
```out
1.800002p+0
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    float x {0.0f};
    int k {0};
    std::cin >> x >> k;
    float low {x - std::ldexp(1.0f, 1 - k)};
    float y {std::nextafter(low, x)};
    std::println("{:a}", y);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    float x {0.0f};
    int k {0};
    std::cin >> x >> k;
    float low {x - std::ldexp(1.0f, 1 - k)};
    float y {low + std::ldexp(1.0f, -23)};
    std::println("{:a}", y);
}
```
### Tests
```in
1 23
```
```in
1.9999999 23
```
```in
1 2
```
```in
1.9999999 2
```
### Witness
```in
1.25 2
```
