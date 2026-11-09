# 9.44 The forward error of a solve against the condition number times the backward error
Part: the forward error of a solve against the condition number times the backward error
Clause: [expr.add], [expr.mul], [conv.double]
After: 9.24
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §7.1: Theorem 7.1 ((7.2), the normwise backward error η = ‖r‖ / (‖E‖‖y‖ + ‖f‖), r = b − Ay) and Theorem 7.2 ((7.4), and with E = A, f = b its weakened form ‖x − y‖ / ‖x‖ ≤ 2εκ(A) / (1 − εκ(A)), for εκ(A) < 1)

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <print>

int main()
{
    //: Take A = (100, 99; 99, 98), x = (1, 1) and b = Ax.
    double a[2][2] {{100, 99}, {99, 98}};
    double x[2] {1, 1};
    double b[2] {199, 197};
    //: Solve Ay = b in float by elimination.
    float l {99.0f / 100.0f};
    float d {98.0f - l * 99.0f};
    float g {197.0f - l * 199.0f};
    float y1 {g / d};
    float y0 {(199.0f - 99.0f * y1) / 100.0f};
    //: Measure the residual r = b − Ay and η in double.
    double r0 {b[0] - a[0][0] * y0 - a[0][1] * y1};
    double r1 {b[1] - a[1][0] * y0 - a[1][1] * y1};
    double nr {std::max(std::fabs(r0), std::fabs(r1))};
    double ny {std::max(std::fabs(y0), std::fabs(y1))};
    double eta {nr / (199 * ny + 199)};
    //: Take κ = ‖A‖‖A⁻¹‖; here det A = −1, so ‖A⁻¹‖ = 199.
    double kappa {199.0 * 199.0};
    //: Print the forward error, κη and the bound 2κη/(1 − κη).
    double e0 {std::fabs(x[0] - y0)};
    double e1 {std::fabs(x[1] - y1)};
    double forward {std::max(e0, e1)};
    double ke {kappa * eta};
    std::println("{:.2e} {:.2e} {:.2e}", forward, ke,
                 2 * ke / (1 - ke));
}
```

## Verdict 1
```cpp
#include <algorithm>
#include <cmath>

struct Errors {
    double forward;
    double ke;
};

constexpr Errors measure()
{
    float l {15.0f / 26.0f};
    float d {20.0f - l * 94.0f};
    float g {550.0f - l * -12278.0f};
    float y1 {g / d};
    float y0 {(-12278.0f - 94.0f * y1) / 26.0f};
    double r0 {-12278.0 - 26.0 * y0 - 94.0 * y1};
    double r1 {550.0 - 15.0 * y0 - 20.0 * y1};
    double nr {std::max(std::fabs(r0), std::fabs(r1))};
    double ny {std::max(std::fabs(y0), std::fabs(y1))};
    double eta {nr / (120.0 * ny + 12278.0)};
    double kappa {120.0 * 114.0 / 890.0};
    double e0 {std::fabs(334.0 - y0)};
    double e1 {std::fabs(-223.0 - y1)};
    return {std::max(e0, e1) / 334.0, kappa * eta};
}

int main()
{
    constexpr Errors e {measure()};
    static_assert(e.forward <= 2 * e.ke / (1 - e.ke));
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <algorithm>
#include <cmath>

struct Errors {
    double forward;
    double ke;
};

constexpr Errors measure()
{
    float l {15.0f / 26.0f};
    float d {20.0f - l * 94.0f};
    float g {550.0f - l * -12278.0f};
    float y1 {g / d};
    float y0 {(-12278.0f - 94.0f * y1) / 26.0f};
    double r0 {-12278.0 - 26.0 * y0 - 94.0 * y1};
    double r1 {550.0 - 15.0 * y0 - 20.0 * y1};
    double nr {std::max(std::fabs(r0), std::fabs(r1))};
    double ny {std::max(std::fabs(y0), std::fabs(y1))};
    double eta {nr / (120.0 * ny + 12278.0)};
    double kappa {120.0 * 114.0 / 890.0};
    double e0 {std::fabs(334.0 - y0)};
    double e1 {std::fabs(-223.0 - y1)};
    return {std::max(e0, e1) / 334.0, kappa * eta};
}

int main()
{
    constexpr Errors e {measure()};
    static_assert(e.forward <= e.ke);
}
```
Answer: c++23 ill-formed 30

## Alone 1
Form: run
Write a program that reads a 2 by 2 matrix A and a vector x, both of whole numbers, solves Ay = b for b = Ax in float, and compares the forward error of y with the condition number of A times the backward error of y. Compute b exactly in whole numbers, then convert A and b to float. Solve by elimination with a row swap: if |a₁₀| > |a₀₀|, swap the two rows of A and of b; then compute l = a₁₀ / a₀₀, d = a₁₁ − l·a₀₁, g = b₁ − l·b₀, y₁ = g / d and y₀ = (b₀ − a₀₁·y₁) / a₀₀, each in float. Then work in __float128, with A and b as read and computed, before the swap. Use the ∞-norm: ‖v‖ is the largest |vᵢ|, and ‖A‖ is the largest row sum of |aᵢⱼ|. Compute each rᵢ = bᵢ − aᵢ₀y₀ − aᵢ₁y₁, left to right. The backward error is η = ‖r‖ / (‖A‖‖y‖ + ‖b‖) (Higham, Theorem 7.1). The condition number is κ = ‖A‖‖A⁻¹‖, where A⁻¹ has rows (a₁₁, −a₀₁) and (−a₁₀, a₀₀), divided by det A = a₀₀a₁₁ − a₀₁a₁₀. The forward error is F = ‖x − y‖ / ‖x‖. When κη < 1, Higham's Theorem 7.2 bounds F by 2κη / (1 − κη).
Input: one line: a₀₀, a₀₁, a₁₀, a₁₁, then x₀ and x₁.
Output: one line: y₀ and y₁, each as std::format prints it with {:a}; then F and κη, each rounded to a double and printed with {:.2e}; then yes if F ≤ 2κη / (1 − κη), or no if not.
Limits: |aᵢⱼ| ≤ 100 and det A ≠ 0; |xᵢ| ≤ 1000 and x ≠ 0; these keep κη far below 1.
### Examples
```in
2 1 1 3 1 1
```
```out
1p+0 1p+0 0.00e+00 0.00e+00 yes
```
```in
100 99 99 98 1 1
```
```out
1.00317ep+0 1.ff9c06p-1 7.63e-04 1.33e-03 yes
```
### Reference
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>
#include <utility>

__float128 size(__float128 v)
{
    return v < 0 ? -v : v;
}

int main()
{
    long long a[2][2] {};
    long long x[2] {};
    std::cin >> a[0][0] >> a[0][1] >> a[1][0] >> a[1][1];
    std::cin >> x[0] >> x[1];
    long long b[2] {a[0][0] * x[0] + a[0][1] * x[1],
                    a[1][0] * x[0] + a[1][1] * x[1]};
    float m[2][2] {};
    float f[2] {};
    for (int i {0}; i < 2; ++i) {
        f[i] = static_cast<float>(b[i]);
        for (int j {0}; j < 2; ++j) {
            m[i][j] = static_cast<float>(a[i][j]);
        }
    }
    if (std::fabs(m[1][0]) > std::fabs(m[0][0])) {
        std::swap(m[0], m[1]);
        std::swap(f[0], f[1]);
    }
    float l {m[1][0] / m[0][0]};
    float d {m[1][1] - l * m[0][1]};
    float g {f[1] - l * f[0]};
    float y1 {g / d};
    float y0 {(f[0] - m[0][1] * y1) / m[0][0]};
    __float128 y[2] {y0, y1};
    __float128 nr {0};
    __float128 na {0};
    __float128 nb {0};
    for (int i {0}; i < 2; ++i) {
        __float128 r {static_cast<__float128>(b[i])};
        r = r - a[i][0] * y[0] - a[i][1] * y[1];
        nr = std::max(nr, size(r));
        na = std::max(na, size(a[i][0]) + size(a[i][1]));
        nb = std::max(nb, size(b[i]));
    }
    long long det {a[0][0] * a[1][1] - a[0][1] * a[1][0]};
    __float128 ni {std::max(size(a[1][1]) + size(a[0][1]),
                            size(a[1][0]) + size(a[0][0]))};
    __float128 kappa {na * ni / size(det)};
    __float128 ny {std::max(size(y[0]), size(y[1]))};
    __float128 eta {nr / (na * ny + nb)};
    __float128 nx {std::max(size(x[0]), size(x[1]))};
    __float128 e0 {size(x[0] - y[0])};
    __float128 e1 {size(x[1] - y[1])};
    __float128 forward {std::max(e0, e1) / nx};
    __float128 ke {kappa * eta};
    bool inside {forward <= 2 * ke / (1 - ke)};
    std::println("{:a} {:a} {:.2e} {:.2e} {}", y0, y1,
                 static_cast<double>(forward),
                 static_cast<double>(ke),
                 inside ? "yes" : "no");
}
```
### Wrong
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>
#include <utility>

__float128 size(__float128 v)
{
    return v < 0 ? -v : v;
}

int main()
{
    long long a[2][2] {};
    long long x[2] {};
    std::cin >> a[0][0] >> a[0][1] >> a[1][0] >> a[1][1];
    std::cin >> x[0] >> x[1];
    long long b[2] {a[0][0] * x[0] + a[0][1] * x[1],
                    a[1][0] * x[0] + a[1][1] * x[1]};
    float m[2][2] {};
    float f[2] {};
    for (int i {0}; i < 2; ++i) {
        f[i] = static_cast<float>(b[i]);
        for (int j {0}; j < 2; ++j) {
            m[i][j] = static_cast<float>(a[i][j]);
        }
    }
    if (std::fabs(m[1][0]) > std::fabs(m[0][0])) {
        std::swap(m[0], m[1]);
        std::swap(f[0], f[1]);
    }
    float l {m[1][0] / m[0][0]};
    float d {m[1][1] - l * m[0][1]};
    float g {f[1] - l * f[0]};
    float y1 {g / d};
    float y0 {(f[0] - m[0][1] * y1) / m[0][0]};
    __float128 y[2] {y0, y1};
    __float128 nr {0};
    __float128 na {0};
    __float128 nb {0};
    for (int i {0}; i < 2; ++i) {
        __float128 r {static_cast<__float128>(b[i])};
        r = r - a[i][0] * y[0] - a[i][1] * y[1];
        nr = std::max(nr, size(r));
        na = std::max(na, size(a[i][0]) + size(a[i][1]));
        nb = std::max(nb, size(b[i]));
    }
    long long det {a[0][0] * a[1][1] - a[0][1] * a[1][0]};
    __float128 ni {std::max(size(a[1][1]) + size(a[0][1]),
                            size(a[1][0]) + size(a[0][0]))};
    __float128 kappa {na * ni / size(det)};
    __float128 ny {std::max(size(y[0]), size(y[1]))};
    __float128 eta {nr / (na * ny + nb)};
    __float128 nx {std::max(size(x[0]), size(x[1]))};
    __float128 e0 {size(x[0] - y[0])};
    __float128 e1 {size(x[1] - y[1])};
    __float128 forward {std::max(e0, e1) / nx};
    __float128 ke {kappa * eta};
    bool inside {forward <= ke};
    std::println("{:a} {:a} {:.2e} {:.2e} {}", y0, y1,
                 static_cast<double>(forward),
                 static_cast<double>(ke),
                 inside ? "yes" : "no");
}
```
### Tests
```in
3 7 2 5 1000 -999
```
```in
-1 10 55 95 571 -996
```
```in
100 99 99 98 1000 1000
```
```in
100 99 99 98 1 -1
```
```in
0 1 1 0 -5 7
```
### Witness
```in
26 94 15 20 334 -223
```

## Alone 2
Form: run
Write a program that reads a 2 by 2 matrix A and a vector x, both of whole numbers, and any vector y, and says whether Higham's bound on the forward error of y holds and whether it applies. Work in __float128, with b = Ax. Use the ∞-norm: ‖v‖ is the largest |vᵢ|, and ‖A‖ is the largest row sum of |aᵢⱼ|. Compute each rᵢ = bᵢ − aᵢ₀y₀ − aᵢ₁y₁, left to right. The backward error is η = ‖r‖ / (‖A‖‖y‖ + ‖b‖) (Higham, Theorem 7.1). The condition number is κ = ‖A‖‖A⁻¹‖, where A⁻¹ has rows (a₁₁, −a₀₁) and (−a₁₀, a₀₀), divided by det A = a₀₀a₁₁ − a₀₁a₁₀. The forward error is F = ‖x − y‖ / ‖x‖. Higham's Theorem 7.2 bounds F by 2κη / (1 − κη) only when κη < 1.
Input: one line: a₀₀, a₀₁, a₁₀, a₁₁, then x₀ and x₁, then y₀ and y₁, each read as a double.
Output: one line: F and κη, each rounded to a double and printed with {:.2e}; then none if κη ≥ 1, else yes if F ≤ 2κη / (1 − κη), or no if not.
Limits: |aᵢⱼ| ≤ 100 and det A ≠ 0; |xᵢ| ≤ 1000 and x ≠ 0; |yᵢ| ≤ 10000, with at most six digits after the point.
### Examples
```in
2 1 1 3 1 1 1 1
```
```out
0.00e+00 0.00e+00 yes
```
```in
2 1 1 3 1 1 5 -5
```
```out
6.00e+00 1.87e+00 none
```
```in
100 99 99 98 1 1 1.01 0.99
```
```out
1.00e-02 9.90e-01 yes
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>

__float128 size(__float128 v)
{
    return v < 0 ? -v : v;
}

int main()
{
    long long a[2][2] {};
    long long x[2] {};
    double v[2] {};
    std::cin >> a[0][0] >> a[0][1] >> a[1][0] >> a[1][1];
    std::cin >> x[0] >> x[1] >> v[0] >> v[1];
    long long b[2] {a[0][0] * x[0] + a[0][1] * x[1],
                    a[1][0] * x[0] + a[1][1] * x[1]};
    __float128 y[2] {v[0], v[1]};
    __float128 nr {0};
    __float128 na {0};
    __float128 nb {0};
    for (int i {0}; i < 2; ++i) {
        __float128 r {static_cast<__float128>(b[i])};
        r = r - a[i][0] * y[0] - a[i][1] * y[1];
        nr = std::max(nr, size(r));
        na = std::max(na, size(a[i][0]) + size(a[i][1]));
        nb = std::max(nb, size(b[i]));
    }
    long long det {a[0][0] * a[1][1] - a[0][1] * a[1][0]};
    __float128 ni {std::max(size(a[1][1]) + size(a[0][1]),
                            size(a[1][0]) + size(a[0][0]))};
    __float128 kappa {na * ni / size(det)};
    __float128 ny {std::max(size(y[0]), size(y[1]))};
    __float128 eta {nr / (na * ny + nb)};
    __float128 nx {std::max(size(x[0]), size(x[1]))};
    __float128 e0 {size(x[0] - y[0])};
    __float128 e1 {size(x[1] - y[1])};
    __float128 forward {std::max(e0, e1) / nx};
    __float128 ke {kappa * eta};
    const char* say {"none"};
    if (ke < 1) {
        say = forward <= 2 * ke / (1 - ke) ? "yes" : "no";
    }
    std::println("{:.2e} {:.2e} {}",
                 static_cast<double>(forward),
                 static_cast<double>(ke), say);
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>

__float128 size(__float128 v)
{
    return v < 0 ? -v : v;
}

int main()
{
    long long a[2][2] {};
    long long x[2] {};
    double v[2] {};
    std::cin >> a[0][0] >> a[0][1] >> a[1][0] >> a[1][1];
    std::cin >> x[0] >> x[1] >> v[0] >> v[1];
    long long b[2] {a[0][0] * x[0] + a[0][1] * x[1],
                    a[1][0] * x[0] + a[1][1] * x[1]};
    __float128 y[2] {v[0], v[1]};
    __float128 nr {0};
    __float128 na {0};
    __float128 nb {0};
    for (int i {0}; i < 2; ++i) {
        __float128 r {static_cast<__float128>(b[i])};
        r = r - a[i][0] * y[0] - a[i][1] * y[1];
        nr = std::max(nr, size(r));
        na = std::max(na, size(a[i][0]) + size(a[i][1]));
        nb = std::max(nb, size(b[i]));
    }
    long long det {a[0][0] * a[1][1] - a[0][1] * a[1][0]};
    __float128 ni {std::max(size(a[1][1]) + size(a[0][1]),
                            size(a[1][0]) + size(a[0][0]))};
    __float128 kappa {na * ni / size(det)};
    __float128 ny {std::max(size(y[0]), size(y[1]))};
    __float128 eta {nr / (na * ny + nb)};
    __float128 nx {std::max(size(x[0]), size(x[1]))};
    __float128 e0 {size(x[0] - y[0])};
    __float128 e1 {size(x[1] - y[1])};
    __float128 forward {std::max(e0, e1) / nx};
    __float128 ke {kappa * eta};
    const char* say {"none"};
    if (ke < 1) {
        say = forward <= ke ? "yes" : "no";
    }
    std::println("{:.2e} {:.2e} {}",
                 static_cast<double>(forward),
                 static_cast<double>(ke), say);
}
```
### Tests
```in
100 99 99 98 1000 1000 1000.000214 999.999786
```
```in
3 7 2 5 1000 -999 999.5 -998.5
```
```in
1 0 0 1 1 0 1.5 0
```
```in
-100 37 38 59 610 254 610 254
```
### Witness
```in
2 0 0 1 0 1 0 1.001
```
