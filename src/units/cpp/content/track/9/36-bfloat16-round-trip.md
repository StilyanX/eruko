# 9.36 The round trip from float to bfloat16 and back
Part: the round trip `float` to bfloat16 and back, against the bound
Clause: [basic.extended.fp], [conv.double], [expr.static.cast], [basic.fundamental]
After: 9.35
Levels: c++23
Source: N4950 [basic.extended.fp] (std::bfloat16_t: 8 significant bits, the exponent range of float); Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §2.1 (fl(x) = x(1 + δ), |δ| ≤ u, for x in the normal range)

## Example
```cpp
#include <array>
#include <cmath>
#include <print>
#include <stdfloat>

int main()
{
    std::array<float, 3> xs {0.1f, 70000.0f, 1e30f};
    for (float x : xs) {
        //: Round x to std::bfloat16_t, then back to float.
        auto b {static_cast<std::bfloat16_t>(x)};
        float y {static_cast<float>(b)};
        //: Take the error in double, where x - y is exact.
        double e {std::fabs(static_cast<double>(x) - y)};
        //: Compare it with u |x|, u = 2^-8, in the normal range.
        bool inside {e <= 0x1p-8 * std::fabs(x)};
        //: Print y, the error and the test.
        std::println("{:a} {:a} {}", y, e, inside);
    }
}
```

## Verdict 1
```cpp
#include <stdfloat>

constexpr float back(float x)
{
    return static_cast<float>(static_cast<std::bfloat16_t>(x));
}

int main()
{
    constexpr float x {0x1.018p0f};
    static_assert(back(x) == 0x1.02p0f);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <stdfloat>

constexpr float back(float x)
{
    return static_cast<float>(static_cast<std::bfloat16_t>(x));
}

int main()
{
    constexpr float x {0x1.01p0f};
    static_assert(back(x) == 0x1.02p0f);
}
```
Answer: c++23 ill-formed 11

## Alone 1
Form: run
Write a program that reads n floats. For each float x, round x to std::bfloat16_t, to nearest with ties to even, and back to float; call the result y. Then test y against the bound |x − y| ≤ u·|x|, where u = 2^−8 is the unit roundoff of bfloat16, which keeps 8 significant bits (Higham §2.1). Compute |x − y| and u·|x| in double, where both are exact.
Input: two lines: n, then the n floats.
Output: n lines, one for each x in order: y as std::format prints it with {:a}, then yes if the bound holds or no if not, separated by a space.
Limits: 1 ≤ n ≤ 1000; each x is 0 or between 1e-30 and 1e30 in size.
### Examples
```in
3
1 2.5 3.14159
```
```out
1p+0 yes
1.4p+1 yes
1.92p+1 yes
```
```in
2
-0.375 -6
```
```out
-1.8p-2 yes
-1.8p+2 yes
```
### Reference
```cpp
#include <bit>
#include <cmath>
#include <cstdint>
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
        auto b {static_cast<std::bfloat16_t>(x)};
        float y {static_cast<float>(b)};
        double e {std::fabs(static_cast<double>(x) - y)};
        bool inside {e <= 0x1p-8 * std::fabs(x)};
        std::println("{:a} {}", y, inside ? "yes" : "no");
    }
}
```
### Wrong
```cpp
#include <bit>
#include <cmath>
#include <cstdint>
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
        std::uint32_t bits {std::bit_cast<std::uint32_t>(x)};
        float y {std::bit_cast<float>(bits & 0xffff0000u)};
        double e {std::fabs(static_cast<double>(x) - y)};
        bool inside {e <= 0x1p-8 * std::fabs(x)};
        std::println("{:a} {}", y, inside ? "yes" : "no");
    }
}
```
### Tests
```in
1
0.1
```
```in
1
70000
```
```in
3
1e30 -1e-30 0
```
```in
4
1.0117188 1.0039062 -2.9921875 255.5
```
### Witness
```in
1
0.1
```

## Alone 2
Form: run
Write a program that reads n floats and prints the largest relative error of their round trips through bfloat16. Round each float x to std::bfloat16_t and back to float; call the result y. The relative error of x is |x − y| / |x|: take |x − y| in double, then divide it by |x| in double. Then test the largest against u = 2^−8, the unit roundoff of bfloat16 (Higham §2.1).
Input: two lines: n, then the n floats.
Output: one line: the largest relative error as std::format prints a double with {:a}, then yes if it is at most u or no if not, separated by a space.
Limits: 1 ≤ n ≤ 1000; each x is between 1e-30 and 1e30 in size, and none is 0.
### Examples
```in
3
1 2.5 0.5
```
```out
0p+0 yes
```
```in
2
3 -0.75
```
```out
0p+0 yes
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
    double most {0.0};
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto b {static_cast<std::bfloat16_t>(x)};
        float y {static_cast<float>(b)};
        double e {std::fabs(static_cast<double>(x) - y)};
        most = std::fmax(most, e / std::fabs(x));
    }
    bool inside {most <= 0x1p-8};
    std::println("{:a} {}", most, inside ? "yes" : "no");
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
    double most {0.0};
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        auto b {static_cast<std::float16_t>(x)};
        float y {static_cast<float>(b)};
        double e {std::fabs(static_cast<double>(x) - y)};
        most = std::fmax(most, e / std::fabs(x));
    }
    bool inside {most <= 0x1p-8};
    std::println("{:a} {}", most, inside ? "yes" : "no");
}
```
### Tests
```in
1
0.1
```
```in
1
100000
```
```in
3
1e30 -1e-30 7
```
```in
2
1.0039062 1.0117188
```
```in
1
65504
```
### Witness
```in
1
100000
```
