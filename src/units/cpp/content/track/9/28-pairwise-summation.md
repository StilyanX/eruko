# 9.28 The error of pairwise summation against its bound
Part: the error of pairwise summation of n terms against its bound
Clause: [expr.add], [expr.call], [basic.fundamental]
After: 9.27
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §4.2 (pairwise summation, the bound (4.6), γ₍log₂ n₎ Σ|xᵢ|, shown there for n = 2^r; for other n each term takes part in at most ⌈log₂ n⌉ additions, and the same argument gives γ₍⌈log₂ n⌉₎ Σ|xᵢ|; γₖ = ku/(1 − ku), §3.1)

## Example
```cpp
#include <print>
#include <vector>

//: Sum terms lo to hi - 1: split at the middle, add the halves.
float pairwise(const std::vector<float>& x, int lo, int hi)
{
    if (hi - lo == 1) {
        return x[lo];
    }
    int m {lo + (hi - lo) / 2};
    return pairwise(x, lo, m) + pairwise(x, m, hi);
}

int main()
{
    //: Make the terms 1/i in float, for i from 1 to 1000.
    int n {1000};
    std::vector<float> x {};
    for (int i {1}; i <= n; ++i) {
        x.push_back(1.0f / static_cast<float>(i));
    }
    //: Sum them by the tree, and exactly in __float128.
    float s {pairwise(x, 0, n)};
    __float128 exact {0};
    for (float t : x) {
        exact = exact + t;
    }
    //: Bound the error by gamma of the depth, 10 for 1000 terms.
    __float128 u {0x1p-24};
    __float128 k {10};
    __float128 bound {k * u / (1 - k * u) * exact};
    //: Print the sum, its error and the bound.
    double error {static_cast<double>(s - exact)};
    double most {static_cast<double>(bound)};
    std::println("{:a} {:a} {:a}", s, error, most);
}
```

## Verdict 1
```cpp
constexpr float pairwise(float a, float b, float c, float d)
{
    float left {a + b};
    float right {c + d};
    return left + right;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(pairwise(1.0f, 0.0f, u, u) == 1.0f);
}
```
Answer: c++23 ill-formed 11

## Verdict 2
```cpp
constexpr float pairwise(float a, float b, float c, float d)
{
    float left {a + b};
    float right {c + d};
    return left + right;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(pairwise(1.0f, u, u, 0.0f) == 1.0f);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n and sums the n floats xᵢ = 1.0f / i, for i = 1, 2, …, n, by pairwise summation in float. Each xᵢ is 1.0f divided by i converted to float. The sum of the terms from index lo to hi − 1 is the one term when hi − lo = 1. Otherwise let m = lo + (hi − lo) / 2, rounded down, and add the sum from lo to m − 1 to the sum from m to hi − 1, in that order. Then take the error E = s − S of that sum s, where S is the exact sum of the n float terms, which __float128 holds exactly.
Input: one line, n.
Output: one line: s, then E rounded to a double, each as std::format prints it with {:a}; then yes if |E| ≤ γₖ · Σ|xᵢ| with k = ⌈log₂ n⌉, or no if not. Here γₖ = ku/(1 − ku) with u = 2^−24, the bound Higham proves (§4.2).
Limits: 1 ≤ n ≤ 100000.
### Examples
```in
1
```
```out
1p+0 0p+0 yes
```
```in
4
```
```out
1.0aaaacp+1 1.4p-23 yes
```
### Reference
```cpp
#include <bit>
#include <iostream>
#include <print>
#include <vector>

float pairwise(const std::vector<float>& x, int lo, int hi)
{
    if (hi - lo == 1) {
        return x[lo];
    }
    int m {lo + (hi - lo) / 2};
    return pairwise(x, lo, m) + pairwise(x, m, hi);
}

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
    float s {pairwise(x, 0, n)};
    __float128 error {s - exact};
    __float128 size {error < 0 ? -error : error};
    int depth {std::bit_width(static_cast<unsigned>(n - 1))};
    __float128 u {0x1p-24};
    __float128 k {static_cast<__float128>(depth)};
    bool inside {size <= k * u / (1 - k * u) * exact};
    double e {static_cast<double>(error)};
    std::println("{:a} {:a} {}", s, e, inside ? "yes" : "no");
}
```
### Wrong
```cpp
#include <bit>
#include <iostream>
#include <print>
#include <vector>

float pairwise(const std::vector<float>& x, int lo, int hi)
{
    if (hi - lo == 1) {
        return x[lo];
    }
    int m {lo + (hi - lo + 1) / 2};
    return pairwise(x, lo, m) + pairwise(x, m, hi);
}

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
    float s {pairwise(x, 0, n)};
    __float128 error {s - exact};
    __float128 size {error < 0 ? -error : error};
    int depth {std::bit_width(static_cast<unsigned>(n - 1))};
    __float128 u {0x1p-24};
    __float128 k {static_cast<__float128>(depth)};
    bool inside {size <= k * u / (1 - k * u) * exact};
    double e {static_cast<double>(error)};
    std::println("{:a} {:a} {}", s, e, inside ? "yes" : "no");
}
```
### Tests
```in
2
```
```in
5
```
```in
1000
```
```in
100000
```
### Witness
```in
7
```

## Alone 2
Form: run
Write a program that reads n whole numbers xᵢ, rounds each to float, and sums them by pairwise summation in float. The sum of the terms from index lo to hi − 1 is the one term when hi − lo = 1. Otherwise let m = lo + (hi − lo) / 2, rounded down, and add the sum from lo to m − 1 to the sum from m to hi − 1, in that order. Then compare the error s − S of that sum s with Higham's bound γₖ · Σ|xᵢ| (§4.2), where S is the exact sum, k = ⌈log₂ n⌉, γₖ = ku/(1 − ku) and u = 2^−24.
Input: two lines: n, then the n numbers.
Output: one line: S, then s as a whole number, then yes if |s − S| ≤ γₖ · Σ|xᵢ|, or no if not.
Limits: 1 ≤ n ≤ 1000; |xᵢ| ≤ 16777216, so each is a float exactly.
### Examples
```in
3
1 2 3
```
```out
6 6 yes
```
```in
4
16777216 1 1 0
```
```out
16777218 16777216 yes
```
### Reference
```cpp
#include <bit>
#include <iostream>
#include <print>
#include <vector>

float pairwise(const std::vector<float>& x, int lo, int hi)
{
    if (hi - lo == 1) {
        return x[lo];
    }
    int m {lo + (hi - lo) / 2};
    return pairwise(x, lo, m) + pairwise(x, m, hi);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> x {};
    long long exact {0};
    long long size {0};
    for (int i {0}; i < n; ++i) {
        long long v {0};
        std::cin >> v;
        x.push_back(static_cast<float>(v));
        exact = exact + v;
        size = size + (v < 0 ? -v : v);
    }
    long long sum {static_cast<long long>(pairwise(x, 0, n))};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long k {std::bit_width(static_cast<unsigned>(n - 1))};
    bool inside {error * (16777216 - k) <= k * size};
    std::println("{} {} {}", exact, sum, inside ? "yes" : "no");
}
```
### Wrong
```cpp
#include <bit>
#include <iostream>
#include <print>
#include <vector>

float pairwise(const std::vector<float>& x, int lo, int hi)
{
    if (hi - lo == 1) {
        return x[lo];
    }
    int m {lo + (hi - lo) / 2};
    return pairwise(x, lo, m) + pairwise(x, m, hi);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> x {};
    long long exact {0};
    long long size {0};
    for (int i {0}; i < n; ++i) {
        long long v {0};
        std::cin >> v;
        x.push_back(static_cast<float>(v));
        exact = exact + v;
        size = size + (v < 0 ? -v : v);
    }
    long long sum {static_cast<long long>(pairwise(x, 0, n))};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long k {std::bit_width(static_cast<unsigned>(n)) - 1};
    bool inside {error * (16777216 - k) <= k * size};
    std::println("{} {} {}", exact, sum, inside ? "yes" : "no");
}
```
### Tests
```in
1
7
```
```in
2
16777216 1
```
```in
5
16777216 1 1 1 1
```
```in
6
16777216 1 -16777216 1 1 1
```
### Witness
```in
3
1 16777216 1
```
