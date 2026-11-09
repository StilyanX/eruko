# 9.31 Float terms summed in double against in float
Part: float terms summed in `double` against in `float`
Clause: [accumulate], [conv.fpprom], [expr.arith.conv], [expr.add]
After: 9.27
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §4.2 (the bound γₙ₋₁ Σ|xᵢ| with the unit roundoff of the type that adds) and §2.1

## Example
```cpp
#include <numeric>
#include <print>
#include <vector>

int main()
{
    //: Make the terms 1/i in float, for i from 1 to 1000.
    std::vector<float> x {};
    for (int i {1}; i <= 1000; ++i) {
        x.push_back(1.0f / static_cast<float>(i));
    }
    //: Start from 0.0f: every partial sum is a float.
    float low {std::accumulate(x.begin(), x.end(), 0.0f)};
    //: Start from 0.0: each float term is added to a double.
    double high {std::accumulate(x.begin(), x.end(), 0.0)};
    //: Sum the same floats exactly in __float128.
    __float128 exact {0};
    for (float t : x) {
        exact = exact + t;
    }
    //: Print each sum's error; the double one is far smaller.
    double e1 {static_cast<double>(low - exact)};
    double e2 {static_cast<double>(high - exact)};
    std::println("{:a} {:a}", e1, e2);
}
```

## Verdict 1
```cpp
#include <array>
#include <numeric>

int main()
{
    constexpr float u {0x1p-24f};
    constexpr std::array<float, 3> v {1.0f, u, u};
    constexpr double z {0.0};
    constexpr auto s {std::accumulate(v.begin(), v.end(), z)};
    static_assert(s == 1.0 + 0x1p-23);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>
#include <numeric>

int main()
{
    constexpr float u {0x1p-24f};
    constexpr std::array<float, 3> v {1.0f, u, u};
    constexpr float z {0.0f};
    constexpr auto s {std::accumulate(v.begin(), v.end(), z)};
    static_assert(s == 1.0 + 0x1p-23);
}
```
Answer: c++23 ill-formed 10

## Alone 1
Form: run
Write a program that reads n and sums the n floats xᵢ = 1.0f / i, for i = 1, 2, …, n, twice. Each xᵢ is 1.0f divided by i converted to float. Both sums start from 0 and add the terms in that order: the first keeps its sum in a float, the second in a double. Measure each sum's error against S, the exact sum of the n float terms, which __float128 holds exactly.
Input: one line, n.
Output: two lines: the float sum and its error, then the double sum and its error. Print each number as std::format prints it with {:a}, the error rounded to a double, separated by a space.
Limits: 1 ≤ n ≤ 100000.
### Examples
```in
1
```
```out
1p+0 0p+0
1p+0 0p+0
```
```in
2
```
```out
1.8p+0 0p+0
1.8p+0 0p+0
```
### Reference
```cpp
#include <iostream>
#include <numeric>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> x {};
    __float128 exact {0};
    for (int i {1}; i <= n; ++i) {
        x.push_back(1.0f / static_cast<float>(i));
        exact = exact + x.back();
    }
    float low {std::accumulate(x.begin(), x.end(), 0.0f)};
    double high {std::accumulate(x.begin(), x.end(), 0.0)};
    double e1 {static_cast<double>(low - exact)};
    double e2 {static_cast<double>(high - exact)};
    std::println("{:a} {:a}", low, e1);
    std::println("{:a} {:a}", high, e2);
}
```
### Wrong
```cpp
#include <iostream>
#include <numeric>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> x {};
    __float128 exact {0};
    for (int i {1}; i <= n; ++i) {
        x.push_back(1.0f / static_cast<float>(i));
        exact = exact + x.back();
    }
    float low {std::accumulate(x.begin(), x.end(), 0.0f)};
    double high {std::accumulate(x.begin(), x.end(), 0.0f)};
    double e1 {static_cast<double>(low - exact)};
    double e2 {static_cast<double>(high - exact)};
    std::println("{:a} {:a}", low, e1);
    std::println("{:a} {:a}", high, e2);
}
```
### Tests
```in
10
```
```in
1000
```
```in
100000
```
### Witness
```in
3
```

## Alone 2
Form: run
Write a program that reads n numbers, rounds each to float, and sums those floats twice. Both sums start from 0 and add the terms in the order given: the first keeps its sum in a double, the second in a float.
Input: two lines: n, then the n numbers.
Output: one line: the double sum, then the float sum, each as std::format prints it with {:a}, separated by a space.
Limits: 1 ≤ n ≤ 1000; each number is 0 or between 1e-30 and 1e30 in size.
### Examples
```in
3
0.5 0.25 1
```
```out
1.cp+0 1.cp+0
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    double high {0.0};
    float low {0.0f};
    for (int i {0}; i < n; ++i) {
        float x {0.0f};
        std::cin >> x;
        high = high + x;
        low = low + x;
    }
    std::println("{:a} {:a}", high, low);
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
    double high {0.0};
    float low {0.0f};
    for (int i {0}; i < n; ++i) {
        double x {0.0};
        std::cin >> x;
        high = high + x;
        low = low + static_cast<float>(x);
    }
    std::println("{:a} {:a}", high, low);
}
```
### Tests
```in
1
0.1
```
```in
4
1e8 1 -1e8 1
```
```in
3
16777216 1 1
```
```in
3
1e30 -1e-30 -1e30
```
### Witness
```in
2
0.1 0.2
```
