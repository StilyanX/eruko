# 9.27 The error of naive summation against its bound
Part: the error of naive summation of n terms against its bound
Clause: [expr.add], [expr.ass], [basic.fundamental]
After: 9.24
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §4.2 (recursive summation, the bound γₙ₋₁ Σ|xᵢ|, γₖ = ku/(1 − ku), §3.1)

## Example
```cpp
#include <print>
#include <vector>

int main()
{
    //: Make the terms 1/i in float, for i from 1 to 1000.
    int n {1000};
    std::vector<float> x {};
    for (int i {1}; i <= n; ++i) {
        x.push_back(1.0f / static_cast<float>(i));
    }
    //: Add them in order in float: the naive sum.
    float s {0.0f};
    for (float t : x) {
        s = s + t;
    }
    //: Add them in __float128, which holds this sum exactly.
    __float128 exact {0};
    for (float t : x) {
        exact = exact + t;
    }
    //: Bound the error by gamma of n - 1 times the sum of |x|.
    __float128 u {0x1p-24};
    __float128 k {static_cast<__float128>(n - 1)};
    __float128 bound {k * u / (1 - k * u) * exact};
    //: Print the sum, its error and the bound.
    double error {static_cast<double>(s - exact)};
    double most {static_cast<double>(bound)};
    std::println("{:a} {:a} {:a}", s, error, most);
}
```

## Verdict 1
```cpp
constexpr float naive(float a, float b, float c)
{
    float s {0.0f};
    s = s + a;
    s = s + b;
    s = s + c;
    return s;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(naive(1.0f, u, u) == 1.0f);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
constexpr float naive(float a, float b, float c)
{
    float s {0.0f};
    s = s + a;
    s = s + b;
    s = s + c;
    return s;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(naive(u, u, 1.0f) == 1.0f);
}
```
Answer: c++23 ill-formed 13

## Alone 1
Form: run
Write a program that reads n and sums the n floats xᵢ = 1.0f / i, for i = 1, 2, …, n, by naive summation in float. Each xᵢ is 1.0f divided by i converted to float. Start from s = 0 and add the terms in that order, s = s + xᵢ. Then take the error E = s − S, where S is the exact sum of the n float terms, which __float128 holds exactly.
Input: one line, n.
Output: one line: s, then E rounded to a double, each as std::format prints it with {:a}; then yes if |E| ≤ γₙ₋₁ · Σ|xᵢ|, or no if not. Here γₖ = ku/(1 − ku) with u = 2^−24, the bound Higham proves (§4.2).
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
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    float s {0.0f};
    __float128 exact {0};
    for (int i {1}; i <= n; ++i) {
        float x {1.0f / static_cast<float>(i)};
        s = s + x;
        exact = exact + x;
    }
    __float128 error {s - exact};
    __float128 size {error < 0 ? -error : error};
    __float128 u {0x1p-24};
    __float128 k {static_cast<__float128>(n - 1)};
    bool inside {size <= k * u / (1 - k * u) * exact};
    double e {static_cast<double>(error)};
    std::println("{:a} {:a} {}", s, e, inside ? "yes" : "no");
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
    float s {0.0f};
    __float128 exact {0};
    for (int i {n}; i >= 1; --i) {
        float x {1.0f / static_cast<float>(i)};
        s = s + x;
        exact = exact + x;
    }
    __float128 error {s - exact};
    __float128 size {error < 0 ? -error : error};
    __float128 u {0x1p-24};
    __float128 k {static_cast<__float128>(n - 1)};
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
100
```

## Alone 2
Form: run
Write a program that reads n whole numbers xᵢ, rounds each to float, and sums them by naive summation in float. Start from s = 0 and add the terms in the order given, s = s + xᵢ. Then compare the error s − S with Higham's bound γₙ₋₁ · Σ|xᵢ| (§4.2), where S is the exact sum, γₖ = ku/(1 − ku) and u = 2^−24.
Input: two lines: n, then the n numbers.
Output: one line: S, then s as a whole number, then yes if |s − S| ≤ γₙ₋₁ · Σ|xᵢ|, or no if not.
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
2
16777216 1
```
```out
16777217 16777216 yes
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    long long n {0};
    std::cin >> n;
    float s {0.0f};
    long long exact {0};
    long long size {0};
    for (long long i {0}; i < n; ++i) {
        long long x {0};
        std::cin >> x;
        s = s + static_cast<float>(x);
        exact = exact + x;
        size = size + (x < 0 ? -x : x);
    }
    long long sum {static_cast<long long>(s)};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long k {n - 1};
    bool inside {error * (16777216 - k) <= k * size};
    std::println("{} {} {}", exact, sum, inside ? "yes" : "no");
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    long long n {0};
    std::cin >> n;
    float s {0.0f};
    long long exact {0};
    long long size {0};
    for (long long i {0}; i < n; ++i) {
        long long x {0};
        std::cin >> x;
        s = s + static_cast<float>(x);
        exact = exact + x;
        size = size + x;
    }
    long long sum {static_cast<long long>(s)};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long k {n - 1};
    size = size < 0 ? -size : size;
    bool inside {error * (16777216 - k) <= k * size};
    std::println("{} {} {}", exact, sum, inside ? "yes" : "no");
}
```
### Tests
```in
1
-5
```
```in
4
16777216 1 1 -16777216
```
```in
5
-16777216 -16777216 -16777216 -16777216 -3
```
```in
6
16777216 3 16777216 3 -16777216 -16777216
```
### Witness
```in
3
16777216 1 -16777216
```
