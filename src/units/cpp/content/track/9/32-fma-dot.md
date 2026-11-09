# 9.32 A dot product with and without fused multiply-add
Part: a dot product with fused multiply-add against without: the error of each
Clause: [expr.pre], [expr.static.cast], [cmath.syn]
After: 1.09, 9.27
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §2.6 (fused multiply-add) and §3.1 (inner products); IEEE 754-2019 §5.4.1

## Example
```cpp
#include <cmath>
#include <print>

int main()
{
    //: Take two vectors of two floats each.
    float a[] {-1.7f, -9.97f};
    float b[] {-1.9f, 3.34f};
    //: Round each product, then round each sum.
    float plain {0.0f};
    for (int i {0}; i < 2; ++i) {
        plain = plain + static_cast<float>(a[i] * b[i]);
    }
    //: Add each exact product to the sum, rounding once.
    float fused {0.0f};
    for (int i {0}; i < 2; ++i) {
        fused = std::fma(a[i], b[i], fused);
    }
    //: Take the exact dot product in __float128.
    __float128 exact {0};
    for (int i {0}; i < 2; ++i) {
        exact = exact + static_cast<__float128>(a[i]) * b[i];
    }
    //: Print each result and its error.
    double e1 {static_cast<double>(plain - exact)};
    double e2 {static_cast<double>(fused - exact)};
    std::println("{:a} {:a} {:a} {:a}", plain, e1, fused, e2);
}
```

## Verdict 1
Flags: -ffp-contract=fast
```cpp
#include <print>

int main()
{
    float a[] {-1.7f, -9.97f};
    float b[] {-1.9f, 3.34f};
    float s {0.0f};
    for (int i {0}; i < 2; ++i) {
        s = s + a[i] * b[i];
    }
    std::println("{:a}", s);
}
```
Answer: c++23 unspecified
```out
-1.e11de8p+4
```
```out
-1.e11de6p+4
```

## Verdict 2
Flags: -ffp-contract=fast
```cpp
#include <print>

int main()
{
    float a[] {-1.7f, -9.97f};
    float b[] {-1.9f, 3.34f};
    float s {0.0f};
    for (int i {0}; i < 2; ++i) {
        s = s + static_cast<float>(a[i] * b[i]);
    }
    std::println("{:a}", s);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads two vectors a and b of n floats and computes their dot product twice in float. Both start from s = 0 and take i = 1, 2, …, n in order. The first rounds each product, then each sum: s = s + aᵢ × bᵢ. The second rounds once per step with std::fma: s = fma(aᵢ, bᵢ, s). Measure each result's error against the exact dot product of the floats, which __float128 holds exactly.
Input: three lines: n, then the n numbers of a, then the n numbers of b, each read as a float.
Output: one line: the first result, its error, the second result, its error. Print each as std::format prints it with {:a}, the errors rounded to a double, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each number is 0 or between 0.001 and 1000 in size.
### Examples
```in
2
1 2
3 4
```
```out
1.6p+3 0p+0 1.6p+3 0p+0
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> a(n);
    std::vector<float> b(n);
    for (float& x : a) {
        std::cin >> x;
    }
    for (float& x : b) {
        std::cin >> x;
    }
    float plain {0.0f};
    float fused {0.0f};
    __float128 exact {0};
    for (int i {0}; i < n; ++i) {
        plain = plain + static_cast<float>(a[i] * b[i]);
        fused = std::fma(a[i], b[i], fused);
        exact = exact + static_cast<__float128>(a[i]) * b[i];
    }
    double e1 {static_cast<double>(plain - exact)};
    double e2 {static_cast<double>(fused - exact)};
    std::println("{:a} {:a} {:a} {:a}", plain, e1, fused, e2);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> a(n);
    std::vector<float> b(n);
    for (float& x : a) {
        std::cin >> x;
    }
    for (float& x : b) {
        std::cin >> x;
    }
    float plain {0.0f};
    float fused {0.0f};
    __float128 exact {0};
    for (int i {0}; i < n; ++i) {
        plain = plain + static_cast<float>(a[i] * b[i]);
        fused = fused + std::fma(a[i], b[i], 0.0f);
        exact = exact + static_cast<__float128>(a[i]) * b[i];
    }
    double e1 {static_cast<double>(plain - exact)};
    double e2 {static_cast<double>(fused - exact)};
    std::println("{:a} {:a} {:a} {:a}", plain, e1, fused, e2);
}
```
### Tests
```in
1
0.1
0.1
```
```in
4
-4.23 8.19 -5.73 -0.96
3.44 3.88 -3.08 8.59
```
```in
3
4.83 -0.28 -7.26
5.97 -1.95 3.65
```
```in
2
1000 0.001
1000 -0.001
```
### Witness
```in
2
-1.7 -9.97
-1.9 3.34
```

## Alone 2
Form: run
Write a program that reads two vectors a and b of n floats and says which of two dot products in float has the smaller error. Both start from s = 0 and take i = 1, 2, …, n in order. The plain one computes s = s + aᵢ × bᵢ, rounding each product and each sum. The fused one computes s = fma(aᵢ, bᵢ, s) with std::fma, rounding once per step. The error of each is its distance from the exact dot product of the floats.
Input: three lines: n, then the n numbers of a, then the n numbers of b, each read as a float.
Output: one line: fma if the fused error is smaller, plain if the plain error is smaller, or tie if they are the same size.
Limits: 1 ≤ n ≤ 1000; each number is 0 or between 0.001 and 1000 in size.
### Examples
```in
2
1 2
3 4
```
```out
tie
```
```in
4
0.97 8.18 -7.33 0.47
5.81 8.75 -1.02 -2.31
```
```out
fma
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> a(n);
    std::vector<float> b(n);
    for (float& x : a) {
        std::cin >> x;
    }
    for (float& x : b) {
        std::cin >> x;
    }
    float plain {0.0f};
    float fused {0.0f};
    __float128 exact {0};
    for (int i {0}; i < n; ++i) {
        plain = plain + static_cast<float>(a[i] * b[i]);
        fused = std::fma(a[i], b[i], fused);
        exact = exact + static_cast<__float128>(a[i]) * b[i];
    }
    __float128 e1 {plain - exact};
    __float128 e2 {fused - exact};
    e1 = e1 < 0 ? -e1 : e1;
    e2 = e2 < 0 ? -e2 : e2;
    const char* word {e1 < e2 ? "plain" : "tie"};
    if (e2 < e1) {
        word = "fma";
    }
    std::println("{}", word);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> a(n);
    std::vector<float> b(n);
    for (float& x : a) {
        std::cin >> x;
    }
    for (float& x : b) {
        std::cin >> x;
    }
    float plain {0.0f};
    float fused {0.0f};
    __float128 exact {0};
    for (int i {0}; i < n; ++i) {
        plain = plain + static_cast<float>(a[i] * b[i]);
        fused = std::fma(a[i], b[i], fused);
        exact = exact + static_cast<__float128>(a[i]) * b[i];
    }
    __float128 e1 {plain - exact};
    __float128 e2 {fused - exact};
    const char* word {e1 < e2 ? "plain" : "tie"};
    if (e2 < e1) {
        word = "fma";
    }
    std::println("{}", word);
}
```
### Tests
```in
1
0.1
0.1
```
```in
2
-3.82 1.85
2.98 1.15
```
```in
3
4.83 -0.28 -7.26
5.97 -1.95 3.65
```
```in
4
-4.23 8.19 -5.73 -0.96
3.44 3.88 -3.08 8.59
```
### Witness
```in
2
-1.7 -9.97
-1.9 3.34
```
