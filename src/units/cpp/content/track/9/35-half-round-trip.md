# 9.35 The round trip from float to half and back
Part: the round trip `float` to half and back, against the bound
Clause: [basic.extended.fp], [conv.double], [expr.static.cast], [basic.fundamental]
After: 9.24
Levels: c++23
Source: IEEE 754-2019 §3.6 (binary16: 11 significant bits) and §4.3; Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §2.1 (fl(x) = x(1 + δ), |δ| ≤ u, for x in the normal range)

## Example
```cpp
#include <array>
#include <cmath>
#include <print>
#include <stdfloat>

int main()
{
    std::array<float, 3> xs {0.1f, 3.14159f, 1e-6f};
    for (float x : xs) {
        //: Round x to std::float16_t, then back to float.
        auto h {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(h)};
        //: Take the error in double, where x - y is exact.
        double e {std::fabs(static_cast<double>(x) - y)};
        //: Compare it with u |x|, u = 2^-11, the unit roundoff.
        bool inside {e <= 0x1p-11 * std::fabs(x)};
        //: Print y, the error and the test: 1e-6 is too small.
        std::println("{:a} {:a} {}", y, e, inside);
    }
}
```

## Verdict 1
```cpp
#include <stdfloat>

constexpr float back(float x)
{
    return static_cast<float>(static_cast<std::float16_t>(x));
}

int main()
{
    constexpr float x {0x1.002p0f};
    constexpr float e {x - back(x)};
    static_assert(e <= 0x1p-11f * x);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <stdfloat>

constexpr float back(float x)
{
    return static_cast<float>(static_cast<std::float16_t>(x));
}

int main()
{
    constexpr float x {0x1.8p-24f};
    constexpr float e {back(x) - x};
    static_assert(e <= 0x1p-11f * x);
}
```
Answer: c++23 ill-formed 12

## Alone 1
Form: run
Write a program that reads n floats. For each float x, round x to std::float16_t and back to float; call the result y. Then test y against the bound |x − y| ≤ u·|x|, where u = 2^−11 is the unit roundoff of binary16 (IEEE 754-2019; Higham §2.1). The bound holds for every x in the normal range of half, 2^−14 ≤ |x| ≤ 65504. Compute |x − y| and u·|x| in double, where both are exact.
Input: two lines: n, then the n floats.
Output: n lines, one for each x in order: y as std::format prints it with {:a}, then yes if the bound holds or no if not, separated by a space.
Limits: 1 ≤ n ≤ 1000; each x is 0 or between 1e-30 and 1e30 in size.
### Examples
```in
3
1 0.1 65504
```
```out
1p+0 yes
1.998p-4 yes
1.ffcp+15 yes
```
```in
2
1e-6 70000
```
```out
1.1p-20 no
inf no
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <stdfloat>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto h {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(h)};
        double e {std::fabs(static_cast<double>(x) - y)};
        double u {0x1p-11};
        bool inside {e <= u * std::fabs(x)};
        std::println("{:a} {}", y, inside ? "yes" : "no");
    }
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <stdfloat>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto h {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(h)};
        double e {std::fabs(static_cast<double>(x) - y)};
        double u {0x1p-10};
        bool inside {e <= u * std::fabs(x)};
        std::println("{:a} {}", y, inside ? "yes" : "no");
    }
}
```
### Tests
```in
1
0
```
```in
4
1.0004883 3.14159 -2.5 65519
```
```in
3
1e-30 6.1035156e-05 5.9604645e-08
```
```in
1
1e30
```
```in
2
3.053993e-05 -3.053993e-05
```
### Witness
```in
1
3.053993e-05
```

## Alone 2
Form: run
Write a program that reads n floats and prints how many of them break the bound of the round trip through half. Round each float x to std::float16_t and back to float; call the result y. The float x breaks the bound when |x − y| > u·|x|, where u = 2^−11 is the unit roundoff of binary16 (IEEE 754-2019; Higham §2.1). Compute |x − y| and u·|x| in double, where both are exact.
Input: two lines: n, then the n floats.
Output: one line, the count of floats that break the bound.
Limits: 1 ≤ n ≤ 1000; each x is between 1e-30 and 1e30 in size, and none is 0.
### Examples
```in
3
1 0.1 3.14159
```
```out
0
```
```in
3
1e-6 70000 2.5
```
```out
2
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <stdfloat>

int main()
{
    int n {0};
    std::cin >> n;
    int count {0};
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto h {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(h)};
        double e {std::fabs(static_cast<double>(x) - y)};
        if (e > 0x1p-11 * std::fabs(x)) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <stdfloat>

int main()
{
    int n {0};
    std::cin >> n;
    int count {0};
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto h {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(h)};
        double e {std::fabs(static_cast<double>(x) - y)};
        float a {std::fabs(x)};
        if (a < 0x1p-14f || a > 65504.0f) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Tests
```in
1
65510
```
```in
2
9.5367432e-07 -0.25
```
```in
4
1e-30 1e30 3.053993e-05 6.1035156e-05
```
```in
1
-1e-7
```
```in
1
65520
```
### Witness
```in
1
65510
```
