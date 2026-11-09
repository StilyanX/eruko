# 9.22 A two-level cycle against one level
Part: a two-level cycle: the iterations against one level
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul]
After: 9.21
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §13.4.1 (smoothers: damped Jacobi), §13.4.2 (the two-grid cycle: smooth, correct on the coarse space, smooth) and §13.6 (algebraic multigrid: the coarse space from aggregates)

## Example
```cpp
#include <array>
#include <print>

using Fine = std::array<double, 8>;

constexpr double residual(const Fine& x, Fine& r)
{
    double rr {0.0};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        r[i] = 1.0 - (2.0 * x[i] - left - right);
        rr = rr + r[i] * r[i];
    }
    return rr;
}

constexpr void sweep(Fine& x, Fine& r)
{
    residual(x, r);
    for (int i {0}; i < 8; ++i) {
        x[i] = x[i] + r[i] / 4.0;
    }
}

constexpr int jacobi()
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12) {
        sweep(x, r);
        k = k + 1;
    }
    return k;
}

//: Count the cycles until r·r is below 8e-12, at most 1000.
constexpr int two_level(int nu)
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12 && k < 1000) {
        //: Smooth first: nu Jacobi sweeps.
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        //: Restrict r, then solve Ac e = Pᵀr: Ac is 2 by 2.
        residual(x, r);
        double g0 {0.5 * (r[0] + r[1] + r[2] + r[3])};
        double g1 {0.5 * (r[4] + r[5] + r[6] + r[7])};
        double e0 {(0.5 * g0 + 0.25 * g1) / 0.1875};
        double e1 {(0.25 * g0 + 0.5 * g1) / 0.1875};
        //: Prolong e and add it to x.
        for (int i {0}; i < 8; ++i) {
            x[i] = x[i] + 0.5 * (i < 4 ? e0 : e1);
        }
        //: Smooth again, and count the cycle.
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        k = k + 1;
    }
    return k;
}

int main()
{
    //: Run Jacobi sweeps alone until r·r is below 8e-12.
    int one {jacobi()};
    //: Run the cycle: a sweep, the coarse solve, a sweep.
    int two {two_level(1)};
    //: See 49 cycles against 450 sweeps.
    std::println("{} cycles against {} sweeps", two, one);
    //: See the cycle with no sweeps stop at 1000, not done.
    std::println("{} cycles with no sweeps", two_level(0));
}
```

## Verdict 1
```cpp
#include <array>

using Fine = std::array<double, 8>;

constexpr double residual(const Fine& x, Fine& r)
{
    double rr {0.0};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        r[i] = 1.0 - (2.0 * x[i] - left - right);
        rr = rr + r[i] * r[i];
    }
    return rr;
}

constexpr void sweep(Fine& x, Fine& r)
{
    residual(x, r);
    for (int i {0}; i < 8; ++i) {
        x[i] = x[i] + r[i] / 4.0;
    }
}

constexpr int jacobi()
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12) {
        sweep(x, r);
        k = k + 1;
    }
    return k;
}

constexpr int two_level(int nu)
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12 && k < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        residual(x, r);
        double g0 {0.5 * (r[0] + r[1] + r[2] + r[3])};
        double g1 {0.5 * (r[4] + r[5] + r[6] + r[7])};
        double e0 {(0.5 * g0 + 0.25 * g1) / 0.1875};
        double e1 {(0.25 * g0 + 0.5 * g1) / 0.1875};
        for (int i {0}; i < 8; ++i) {
            x[i] = x[i] + 0.5 * (i < 4 ? e0 : e1);
        }
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        k = k + 1;
    }
    return k;
}

int main()
{
    static_assert(two_level(1) < jacobi());
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

using Fine = std::array<double, 8>;

constexpr double residual(const Fine& x, Fine& r)
{
    double rr {0.0};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        r[i] = 1.0 - (2.0 * x[i] - left - right);
        rr = rr + r[i] * r[i];
    }
    return rr;
}

constexpr void sweep(Fine& x, Fine& r)
{
    residual(x, r);
    for (int i {0}; i < 8; ++i) {
        x[i] = x[i] + r[i] / 4.0;
    }
}

constexpr int jacobi()
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12) {
        sweep(x, r);
        k = k + 1;
    }
    return k;
}

constexpr int two_level(int nu)
{
    Fine x {};
    Fine r {};
    int k {0};
    while (residual(x, r) > 8e-12 && k < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        residual(x, r);
        double g0 {0.5 * (r[0] + r[1] + r[2] + r[3])};
        double g1 {0.5 * (r[4] + r[5] + r[6] + r[7])};
        double e0 {(0.5 * g0 + 0.25 * g1) / 0.1875};
        double e1 {(0.25 * g0 + 0.5 * g1) / 0.1875};
        for (int i {0}; i < 8; ++i) {
            x[i] = x[i] + 0.5 * (i < 4 ? e0 : e1);
        }
        for (int s {0}; s < nu; ++s) {
            sweep(x, r);
        }
        k = k + 1;
    }
    return k;
}

int main()
{
    static_assert(two_level(0) < jacobi());
}
```
Answer: c++23 ill-formed 64

## Alone 1
Form: run
Write a program that reads n, a and ν, and solves A x = b twice from x = 0: by a two-level cycle and by Jacobi sweeps alone. A acts on a line of n sites as (Ax)ᵢ = 2xᵢ − xᵢ₋₁ − xᵢ₊₁, with a missing neighbour taken as 0, and b is all ones. A sweep computes r = b − Ax at every site, then adds rᵢ/4 to each xᵢ. The aggregates are the blocks of a neighbouring sites: sites 0 to a − 1, then a to 2a − 1, and so on. P has one column per aggregate, with 1/√a on its sites and 0 elsewhere. A cycle does ν sweeps, computes r = b − Ax, solves Ac e = Pᵀr exactly with Ac = PᵀAP, adds P e to x, then does ν sweeps. Before each cycle, and before each lone sweep, stop if r·r ≤ 1e-12 × (b·b), where r = b − Ax. Stop the cycles after 1000 and the lone sweeps after 100000. Work in double, solve with Gaussian elimination without pivoting, and take every dot product as a sum from 0.0 in index order.
Input: one line, n, a and ν.
Output: one line: the cycles done, then the lone sweeps done.
Limits: 1 ≤ n ≤ 64; a divides n; 0 ≤ ν ≤ 3.
### Examples
```in
4 1 0
```
```out
1 138
```
```in
8 4 0
```
```out
1000 450
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> u, std::span<const double> v)
{
    double s {0.0};
    for (std::size_t i {0}; i < u.size(); ++i) {
        s = s + u[i] * v[i];
    }
    return s;
}

void residual(std::span<const double> b,
              std::span<const double> x, std::span<double> r)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        r[i] = b[i] - (2.0 * x[i] - left - right);
    }
}

void sweep(std::span<const double> b, std::span<double> x,
           std::span<double> r)
{
    residual(b, x, r);
    for (std::size_t i {0}; i < x.size(); ++i) {
        x[i] = x[i] + r[i] / 4.0;
    }
}

int main()
{
    std::size_t n {0};
    std::size_t a {0};
    int nu {0};
    std::cin >> n >> a >> nu;
    std::size_t m {n / a};
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::vector<double> ac(m * m, 0.0);
    std::vector<double> unit(n, 0.0);
    std::vector<double> col(n, 0.0);
    std::vector<double> zero(n, 0.0);
    for (std::size_t c {0}; c < m; ++c) {
        for (std::size_t i {0}; i < n; ++i) {
            unit[i] = i / a == c ? -w : 0.0;
        }
        residual(zero, unit, col);
        for (std::size_t i {0}; i < n; ++i) {
            std::size_t at {i / a * m + c};
            ac[at] = ac[at] + w * col[i];
        }
    }
    for (std::size_t k {0}; k < m; ++k) {
        for (std::size_t i {k + 1}; i < m; ++i) {
            double f {ac[i * m + k] / ac[k * m + k]};
            for (std::size_t j {k}; j < m; ++j) {
                double t {f * ac[k * m + j]};
                ac[i * m + j] = ac[i * m + j] - t;
            }
            ac[i * m + k] = f;
        }
    }
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r(n, 0.0);
    std::vector<double> e(m, 0.0);
    double stop {1e-12 * dot(b, b)};
    int cycles {0};
    residual(b, x, r);
    while (dot(r, r) > stop && cycles < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, r);
        }
        residual(b, x, r);
        for (std::size_t c {0}; c < m; ++c) {
            e[c] = 0.0;
        }
        for (std::size_t i {0}; i < n; ++i) {
            e[i / a] = e[i / a] + w * r[i];
        }
        for (std::size_t i {1}; i < m; ++i) {
            for (std::size_t k {0}; k < i; ++k) {
                e[i] = e[i] - ac[i * m + k] * e[k];
            }
        }
        for (std::size_t i {m}; i-- > 0;) {
            for (std::size_t j {i + 1}; j < m; ++j) {
                e[i] = e[i] - ac[i * m + j] * e[j];
            }
            e[i] = e[i] / ac[i * m + i];
        }
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + w * e[i / a];
        }
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, r);
        }
        residual(b, x, r);
        cycles = cycles + 1;
    }
    std::vector<double> y(n, 0.0);
    int sweeps {0};
    residual(b, y, r);
    while (dot(r, r) > stop && sweeps < 100000) {
        sweep(b, y, r);
        residual(b, y, r);
        sweeps = sweeps + 1;
    }
    std::println("{} {}", cycles, sweeps);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> u, std::span<const double> v)
{
    double s {0.0};
    for (std::size_t i {0}; i < u.size(); ++i) {
        s = s + u[i] * v[i];
    }
    return s;
}

void residual(std::span<const double> b,
              std::span<const double> x, std::span<double> r)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        r[i] = b[i] - (2.0 * x[i] - left - right);
    }
}

void sweep(std::span<const double> b, std::span<double> x,
           std::span<double> r)
{
    residual(b, x, r);
    for (std::size_t i {0}; i < x.size(); ++i) {
        x[i] = x[i] + r[i] / 4.0;
    }
}

int main()
{
    std::size_t n {0};
    std::size_t a {0};
    int nu {0};
    std::cin >> n >> a >> nu;
    std::size_t m {n / a};
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::vector<double> ac(m * m, 0.0);
    std::vector<double> unit(n, 0.0);
    std::vector<double> col(n, 0.0);
    std::vector<double> zero(n, 0.0);
    for (std::size_t c {0}; c < m; ++c) {
        for (std::size_t i {0}; i < n; ++i) {
            unit[i] = i / a == c ? -w : 0.0;
        }
        residual(zero, unit, col);
        for (std::size_t i {0}; i < n; ++i) {
            std::size_t at {i / a * m + c};
            ac[at] = ac[at] + w * col[i];
        }
    }
    for (std::size_t k {0}; k < m; ++k) {
        for (std::size_t i {k + 1}; i < m; ++i) {
            double f {ac[i * m + k] / ac[k * m + k]};
            for (std::size_t j {k}; j < m; ++j) {
                double t {f * ac[k * m + j]};
                ac[i * m + j] = ac[i * m + j] - t;
            }
            ac[i * m + k] = f;
        }
    }
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r(n, 0.0);
    std::vector<double> e(m, 0.0);
    double stop {1e-12 * dot(b, b)};
    int cycles {0};
    residual(b, x, r);
    while (dot(r, r) > stop && cycles < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, r);
        }
        residual(b, x, r);
        for (std::size_t c {0}; c < m; ++c) {
            e[c] = 0.0;
        }
        for (std::size_t i {0}; i < n; ++i) {
            e[i / a] = e[i / a] + w * b[i];
        }
        for (std::size_t i {1}; i < m; ++i) {
            for (std::size_t k {0}; k < i; ++k) {
                e[i] = e[i] - ac[i * m + k] * e[k];
            }
        }
        for (std::size_t i {m}; i-- > 0;) {
            for (std::size_t j {i + 1}; j < m; ++j) {
                e[i] = e[i] - ac[i * m + j] * e[j];
            }
            e[i] = e[i] / ac[i * m + i];
        }
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + w * e[i / a];
        }
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, r);
        }
        residual(b, x, r);
        cycles = cycles + 1;
    }
    std::vector<double> y(n, 0.0);
    int sweeps {0};
    residual(b, y, r);
    while (dot(r, r) > stop && sweeps < 100000) {
        sweep(b, y, r);
        residual(b, y, r);
        sweeps = sweeps + 1;
    }
    std::println("{} {}", cycles, sweeps);
}
```
### Tests
```in
1 1 2
```
```in
16 4 1
```
```in
64 4 2
```
```in
64 16 2
```
```in
64 2 3
```
```in
32 8 0
```
### Witness
```in
8 4 1
```

## Alone 2
Form: run
Write a program that reads a ring of L sites, a number d, the aggregate of each site and ν, and solves M x = b twice from x = 0: by a two-level cycle and by Jacobi sweeps alone. M acts as (Mx)ᵢ = d·xᵢ − xᵢ₋₁ − xᵢ₊₁, with site indices modulo L, and bᵢ = i + 1. A sweep computes r = b − Mx at every site, then adds rᵢ/(2d) to each xᵢ. P has one column per aggregate, with 1/√s on the s sites of that aggregate and 0 elsewhere. A cycle does ν sweeps, computes r = b − Mx, solves Mc e = Pᵀr exactly with Mc = PᵀMP, adds P e to x, then does ν sweeps. Before each cycle, and before each lone sweep, stop if r·r ≤ 1e-20 × (b·b), where r = b − Mx. Stop the cycles after 1000 and the lone sweeps after 100000. Work in double, solve with Gaussian elimination without pivoting, and take every dot product as a sum from 0.0 in index order.
Input: L, d, the number of aggregates m and ν on the first line, then the aggregate of each of the L sites, each from 0 to m − 1.
Output: one line: the cycles done, then the lone sweeps done.
Limits: 2 ≤ L ≤ 64; d is a whole number from 3 to 10; 1 ≤ m ≤ L, and every aggregate has a site; 0 ≤ ν ≤ 3.
### Examples
```in
4 3 4 1
0 1 2 3
```
```out
1 126
```
```in
2 4 2 0
0 1
```
```out
1 80
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> u, std::span<const double> v)
{
    double s {0.0};
    for (std::size_t i {0}; i < u.size(); ++i) {
        s = s + u[i] * v[i];
    }
    return s;
}

void residual(std::span<const double> b,
              std::span<const double> x, double d,
              std::span<double> r)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {x[(i + n - 1) % n]};
        double right {x[(i + 1) % n]};
        r[i] = b[i] - (d * x[i] - left - right);
    }
}

void sweep(std::span<const double> b, std::span<double> x,
           double d, std::span<double> r)
{
    residual(b, x, d, r);
    for (std::size_t i {0}; i < x.size(); ++i) {
        x[i] = x[i] + r[i] / (2.0 * d);
    }
}

int main()
{
    std::size_t n {0};
    double d {0.0};
    std::size_t m {0};
    int nu {0};
    std::cin >> n >> d >> m >> nu;
    std::vector<std::size_t> agg(n, 0);
    std::vector<double> size(m, 0.0);
    for (std::size_t& g : agg) {
        std::cin >> g;
        size[g] = size[g] + 1.0;
    }
    std::vector<double> p(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        p[i] = 1.0 / std::sqrt(size[agg[i]]);
    }
    std::vector<double> ac(m * m, 0.0);
    std::vector<double> col(n, 0.0);
    std::vector<double> zero(n, 0.0);
    for (std::size_t c {0}; c < m; ++c) {
        std::vector<double> unit(n, 0.0);
        for (std::size_t i {0}; i < n; ++i) {
            unit[i] = agg[i] == c ? -p[i] : 0.0;
        }
        residual(zero, unit, d, col);
        for (std::size_t i {0}; i < n; ++i) {
            std::size_t at {agg[i] * m + c};
            ac[at] = ac[at] + p[i] * col[i];
        }
    }
    for (std::size_t k {0}; k < m; ++k) {
        for (std::size_t i {k + 1}; i < m; ++i) {
            double f {ac[i * m + k] / ac[k * m + k]};
            for (std::size_t j {k}; j < m; ++j) {
                double t {f * ac[k * m + j]};
                ac[i * m + j] = ac[i * m + j] - t;
            }
            ac[i * m + k] = f;
        }
    }
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r(n, 0.0);
    std::vector<double> e(m, 0.0);
    double stop {1e-20 * dot(b, b)};
    int cycles {0};
    residual(b, x, d, r);
    while (dot(r, r) > stop && cycles < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, d, r);
        }
        residual(b, x, d, r);
        for (std::size_t c {0}; c < m; ++c) {
            e[c] = 0.0;
        }
        for (std::size_t i {0}; i < n; ++i) {
            e[agg[i]] = e[agg[i]] + p[i] * r[i];
        }
        for (std::size_t i {1}; i < m; ++i) {
            for (std::size_t k {0}; k < i; ++k) {
                e[i] = e[i] - ac[i * m + k] * e[k];
            }
        }
        for (std::size_t i {m}; i-- > 0;) {
            for (std::size_t j {i + 1}; j < m; ++j) {
                e[i] = e[i] - ac[i * m + j] * e[j];
            }
            e[i] = e[i] / ac[i * m + i];
        }
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + p[i] * e[agg[i]];
        }
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, d, r);
        }
        residual(b, x, d, r);
        cycles = cycles + 1;
    }
    std::vector<double> y(n, 0.0);
    int sweeps {0};
    residual(b, y, d, r);
    while (dot(r, r) > stop && sweeps < 100000) {
        sweep(b, y, d, r);
        residual(b, y, d, r);
        sweeps = sweeps + 1;
    }
    std::println("{} {}", cycles, sweeps);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> u, std::span<const double> v)
{
    double s {0.0};
    for (std::size_t i {0}; i < u.size(); ++i) {
        s = s + u[i] * v[i];
    }
    return s;
}

void residual(std::span<const double> b,
              std::span<const double> x, double d,
              std::span<double> r)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {x[(i + n - 1) % n]};
        double right {x[(i + 1) % n]};
        r[i] = b[i] - (d * x[i] - left - right);
    }
}

void sweep(std::span<const double> b, std::span<double> x,
           double d, std::span<double> r)
{
    residual(b, x, d, r);
    for (std::size_t i {0}; i < x.size(); ++i) {
        x[i] = x[i] + r[i] / (2.0 * d);
    }
}

int main()
{
    std::size_t n {0};
    double d {0.0};
    std::size_t m {0};
    int nu {0};
    std::cin >> n >> d >> m >> nu;
    std::vector<std::size_t> agg(n, 0);
    std::vector<double> size(m, 0.0);
    for (std::size_t& g : agg) {
        std::cin >> g;
        size[g] = size[g] + 1.0;
    }
    std::vector<double> p(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        p[i] = 1.0 / std::sqrt(size[agg[i]]);
    }
    std::vector<double> ac(m * m, 0.0);
    std::vector<double> col(n, 0.0);
    std::vector<double> zero(n, 0.0);
    for (std::size_t c {0}; c < m; ++c) {
        std::vector<double> unit(n, 0.0);
        for (std::size_t i {0}; i < n; ++i) {
            unit[i] = agg[i] == c ? -p[i] : 0.0;
        }
        residual(zero, unit, d, col);
        for (std::size_t i {0}; i < n; ++i) {
            std::size_t at {agg[i] * m + c};
            ac[at] = ac[at] + p[i] * col[i];
        }
    }
    for (std::size_t k {0}; k < m; ++k) {
        for (std::size_t i {k + 1}; i < m; ++i) {
            double f {ac[i * m + k] / ac[k * m + k]};
            for (std::size_t j {k}; j < m; ++j) {
                double t {f * ac[k * m + j]};
                ac[i * m + j] = ac[i * m + j] - t;
            }
            ac[i * m + k] = f;
        }
    }
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r(n, 0.0);
    std::vector<double> e(m, 0.0);
    double stop {1e-20 * dot(b, b)};
    int cycles {0};
    residual(b, x, d, r);
    while (dot(r, r) > stop && cycles < 1000) {
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, d, r);
        }
        residual(b, x, d, r);
        for (std::size_t c {0}; c < m; ++c) {
            e[c] = 0.0;
        }
        for (std::size_t i {0}; i < n; ++i) {
            e[agg[i]] = e[agg[i]] + p[i] * r[i];
        }
        for (std::size_t i {1}; i < m; ++i) {
            for (std::size_t k {0}; k < i; ++k) {
                e[i] = e[i] - ac[i * m + k] * e[k];
            }
        }
        for (std::size_t i {m}; i-- > 0;) {
            for (std::size_t j {i + 1}; j < m; ++j) {
                e[i] = e[i] - ac[i * m + j] * e[j];
            }
            e[i] = e[i] / ac[i * m + i];
        }
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + e[agg[i]] / size[agg[i]];
        }
        for (int s {0}; s < nu; ++s) {
            sweep(b, x, d, r);
        }
        residual(b, x, d, r);
        cycles = cycles + 1;
    }
    std::vector<double> y(n, 0.0);
    int sweeps {0};
    residual(b, y, d, r);
    while (dot(r, r) > stop && sweeps < 100000) {
        sweep(b, y, d, r);
        residual(b, y, d, r);
        sweeps = sweeps + 1;
    }
    std::println("{} {}", cycles, sweeps);
}
```
### Tests
```in
3 10 1 2
0 0 0
```
```in
16 3 4 2
0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3
```
```in
64 3 8 2
0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7
```
```in
64 4 16 1
0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5 6 6 6 6 7 7 7 7 8 8 8 8 9 9 9 9 10 10 10 10 11 11 11 11 12 12 12 12 13 13 13 13 14 14 14 14 15 15 15 15
```
```in
10 3 3 3
0 0 0 1 1 1 1 2 2 2
```
### Witness
```in
8 3 4 1
0 0 1 1 2 2 3 3
```
