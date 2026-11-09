# 9.29 The error of compensated summation against its bound
Part: the error of compensated summation of n terms against its bound
Clause: [expr.add], [expr.ass], [intro.abstract]
After: 9.27
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §4.3 (compensated summation with the corrections added up apart and added once at the end: the bound (4.10), (2u + n²u²) Σ|xᵢ| for nu < 0.1; each correction by (4.7), the larger operand first)

## Example
```cpp
#include <algorithm>
#include <cmath>
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
    //: Add each term; keep what the addition lost apart, in c.
    float s {0.0f};
    float c {0.0f};
    for (float t : x) {
        float a {s};
        float b {t};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float next {a + b};
        c = c + ((a - next) + b);
        s = next;
    }
    //: Add the lost parts once, at the end.
    float sum {s + c};
    //: Sum the same floats exactly in __float128.
    __float128 exact {0};
    for (float t : x) {
        exact = exact + t;
    }
    //: Print the sum, its error and (2u + n²u²) times Σ|x|.
    __float128 u {0x1p-24};
    __float128 most {(2 * u + n * u * n * u) * exact};
    double error {static_cast<double>(sum - exact)};
    std::println("{:a} {:a} {:a}", sum, error,
                 static_cast<double>(most));
}
```

## Verdict 1
```cpp
#include <algorithm>
#include <cmath>
#include <initializer_list>

constexpr float total(float p, float q, float r)
{
    float s {0.0f};
    float c {0.0f};
    for (float x : {p, q, r}) {
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
    }
    return s + c;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(total(1.0f, u, u) == 1.0f + 2 * u);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <algorithm>
#include <cmath>
#include <initializer_list>

constexpr float total(float p, float q, float r)
{
    float s {0.0f};
    float c {0.0f};
    for (float x : {p, q, r}) {
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + (t - (a + b));
        s = t;
    }
    return s + c;
}

int main()
{
    constexpr float u {0x1p-24f};
    static_assert(total(1.0f, u, u) == 1.0f + 2 * u);
}
```
Answer: c++23 ill-formed 25

## Alone 1
Form: run
Write a program that reads n and sums the n floats xᵢ = 1.0f / i, for i = 1, 2, …, n, by compensated summation in float, with the corrections added up apart. Each xᵢ is 1.0f divided by i converted to float. Start from s = 0 and c = 0. For each term in order, let a be whichever of s and xᵢ is larger in size, s when they are the same size, and b the other; compute t = a + b, then e = (a − t) + b, then set c = c + e and s = t. At the end, the sum is s + c. Then take the error E = sum − S, where S is the exact sum of the n float terms, which __float128 holds exactly.
Input: one line, n.
Output: one line: the sum, then E rounded to a double, each as std::format prints it with {:a}; then yes if |E| ≤ (2u + n²u²) · Σ|xᵢ| with u = 2^−24, or no if not. That is the bound Higham proves for this method when nu < 0.1 (§4.3, (4.10)); compute it in __float128.
Limits: 1 ≤ n ≤ 100000, so nu < 0.1.
### Examples
```in
1
```
```out
1p+0 0p+0 yes
```
```in
3
```
```out
1.d55556p+0 1p-25 yes
```
### Reference
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    float s {0.0f};
    float c {0.0f};
    __float128 exact {0};
    for (int i {1}; i <= n; ++i) {
        float x {1.0f / static_cast<float>(i)};
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
        exact = exact + x;
    }
    float sum {s + c};
    __float128 error {sum - exact};
    __float128 size {error < 0 ? -error : error};
    __float128 u {0x1p-24};
    __float128 most {(2 * u + n * u * n * u) * exact};
    double e {static_cast<double>(error)};
    std::println("{:a} {:a} {}", sum, e,
                 size <= most ? "yes" : "no");
}
```
### Wrong
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    float s {0.0f};
    float c {0.0f};
    __float128 exact {0};
    for (int i {1}; i <= n; ++i) {
        float x {1.0f / static_cast<float>(i)};
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
        exact = exact + x;
    }
    float sum {s};
    __float128 error {sum - exact};
    __float128 size {error < 0 ? -error : error};
    __float128 u {0x1p-24};
    __float128 most {(2 * u + n * u * n * u) * exact};
    double e {static_cast<double>(error)};
    std::println("{:a} {:a} {}", sum, e,
                 size <= most ? "yes" : "no");
}
```
### Tests
```in
4
```
```in
100
```
```in
1000
```
```in
100000
```
### Witness
```in
10
```

## Alone 2
Form: run
Write a program that reads n whole numbers xᵢ, rounds each to float, and sums them by compensated summation in float, with the corrections added up apart. Start from s = 0 and c = 0. For each term in the order given, let a be whichever of s and xᵢ is larger in size, s when they are the same size, and b the other; compute t = a + b, then e = (a − t) + b, then set c = c + e and s = t. At the end, the sum is s + c. Then compare its error with (2u + n²u²) · Σ|xᵢ|, the bound Higham proves for this method when nu < 0.1 (§4.3, (4.10)), where u = 2^−24. Settle the comparison in whole numbers: |sum − S| · 2^48 ≤ (2^25 + n²) · Σ|xᵢ|, where S is the exact sum.
Input: two lines: n, then the n numbers.
Output: one line: S, then the sum as a whole number, then yes if the bound holds, or no if not.
Limits: 1 ≤ n ≤ 1000, so nu < 0.1; |xᵢ| ≤ 16777216, so each is a float exactly.
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
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    long long n {0};
    std::cin >> n;
    float s {0.0f};
    float c {0.0f};
    long long exact {0};
    long long size {0};
    for (long long i {0}; i < n; ++i) {
        long long v {0};
        std::cin >> v;
        float a {s};
        float b {static_cast<float>(v)};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
        exact = exact + v;
        size = size + (v < 0 ? -v : v);
    }
    long long sum {static_cast<long long>(s + c)};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long most {(33554432 + n * n) * size >> 48};
    std::println("{} {} {}", exact, sum,
                 error <= most ? "yes" : "no");
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
    float c {0.0f};
    long long exact {0};
    long long size {0};
    for (long long i {0}; i < n; ++i) {
        long long v {0};
        std::cin >> v;
        float a {s};
        float b {static_cast<float>(v)};
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
        exact = exact + v;
        size = size + (v < 0 ? -v : v);
    }
    long long sum {static_cast<long long>(s + c)};
    long long error {sum > exact ? sum - exact : exact - sum};
    long long most {(33554432 + n * n) * size >> 48};
    std::println("{} {} {}", exact, sum,
                 error <= most ? "yes" : "no");
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
1 16777216 1 1 1
```
```in
4
-16777216 -16777216 -16777216 -3
```
```in
4
3 16777216 3 -16777216
```
### Witness
```in
3
3 16777216 -16777216
```
