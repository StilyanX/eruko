# 9.19 Even-odd preconditioning
Part: even-odd preconditioning: the iterations against the unpreconditioned system
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul]
After: 9.17
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §2.2.5 and §3.2 (red-black ordering), §5.2.1 and §13.5 (the Schur complement), Algorithm 6.18 (conjugate gradient)

## Example
```cpp
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> a, std::span<const double> b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
int cg(Op op, std::span<const double> b, std::span<double> x)
{
    std::size_t n {b.size()};
    std::vector<double> r(b.begin(), b.end());
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    //: Take a ring of 8 sites: (My)ᵢ = 5yᵢ − yᵢ₋₁ − yᵢ₊₁.
    std::size_t sites {8};
    double d {5.0};
    std::size_t half {sites / 2};
    std::vector<double> b(sites, 0.0);
    b[0] = 1.0;
    b[1] = 2.0;
    auto whole = [sites, d](std::span<const double> y,
                            std::span<double> out) {
        for (std::size_t i {0}; i < sites; ++i) {
            double left {y[(i + sites - 1) % sites]};
            out[i] = d * y[i] - left - y[(i + 1) % sites];
        }
    };
    //: Fold the odd sites in: S = d − (even-odd-even hops) / d.
    auto schur = [half, d](std::span<const double> y,
                           std::span<double> out) {
        std::vector<double> h(half, 0.0);
        for (std::size_t m {0}; m < half; ++m) {
            h[m] = y[m] + y[(m + 1) % half];
        }
        for (std::size_t j {0}; j < half; ++j) {
            double near {h[(j + half - 1) % half] + h[j]};
            out[j] = d * y[j] - near / d;
        }
    };
    //: Solve the whole system on all 8 sites.
    std::vector<double> x(sites, 0.0);
    int full {cg(whole, b, x)};
    //: Move b's odd part onto the even sites, then solve S.
    std::vector<double> c(half, 0.0);
    for (std::size_t j {0}; j < half; ++j) {
        std::size_t back {(2 * j + sites - 1) % sites};
        double odd {b[back] + b[2 * j + 1]};
        c[j] = b[2 * j] + odd / d;
    }
    std::vector<double> even(half, 0.0);
    int split {cg(schur, c, even)};
    //: Rebuild each odd site from b and its even neighbours.
    std::vector<double> y(sites, 0.0);
    for (std::size_t m {0}; m < half; ++m) {
        double near {even[m] + even[(m + 1) % half]};
        y[2 * m] = even[m];
        y[2 * m + 1] = (b[2 * m + 1] + near) / d;
    }
    //: See 5 steps against 3, and the same x both ways.
    std::println("{} steps against {}", full, split);
    std::println("{:.6f} {:.6f}", x[1], y[1]);
}
```

## Verdict 1
```cpp
#include <vector>

using Field = std::vector<double>;

constexpr double dot(const Field& a, const Field& b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
constexpr int cg(Op op, Field r)
{
    Field p {r};
    Field q(r.size(), 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * rr};
    int k {0};
    while (rr > stop) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < r.size(); ++i) {
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        for (std::size_t i {0}; i < r.size(); ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

constexpr void ring(const Field& y, Field& out)
{
    for (std::size_t i {0}; i < 8; ++i) {
        out[i] = 5.0 * y[i] - y[(i + 7) % 8] - y[(i + 1) % 8];
    }
}

constexpr void schur(const Field& y, Field& out)
{
    Field h(4, 0.0);
    for (std::size_t m {0}; m < 4; ++m) {
        h[m] = y[m] + y[(m + 1) % 4];
    }
    for (std::size_t j {0}; j < 4; ++j) {
        out[j] = 5.0 * y[j] - (h[(j + 3) % 4] + h[j]) / 5.0;
    }
}

int main()
{
    static_assert(cg(ring, {1, 0, 0, 0, 0, 0, 0, 0}) == 5);
    static_assert(cg(schur, {1, 0, 0, 0}) == 3);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <vector>

using Field = std::vector<double>;

constexpr double dot(const Field& a, const Field& b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
constexpr int cg(Op op, Field r)
{
    Field p {r};
    Field q(r.size(), 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * rr};
    int k {0};
    while (rr > stop) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < r.size(); ++i) {
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        for (std::size_t i {0}; i < r.size(); ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

constexpr void ring(const Field& y, Field& out)
{
    for (std::size_t i {0}; i < 8; ++i) {
        out[i] = 4.0 * y[i] - y[(i + 7) % 8] - y[(i + 1) % 8];
    }
}

constexpr void schur(const Field& y, Field& out)
{
    Field h(4, 0.0);
    for (std::size_t m {0}; m < 4; ++m) {
        h[m] = y[m] + y[(m + 1) % 4];
    }
    for (std::size_t j {0}; j < 4; ++j) {
        out[j] = 4.0 * y[j] - (h[(j + 3) % 4] + h[j]) / 4.0;
    }
}

int main()
{
    static_assert(cg(schur, {1, 0, 0, 0}) ==
                  cg(ring, {1, 0, 0, 0, 0, 0, 0, 0}));
}
```
Answer: c++23 ill-formed 58

## Alone 1
Form: run
Write a program that reads a ring of L sites, a number d and a vector b, and solves M x = b twice by the conjugate gradient method (Saad, Algorithm 6.18): once on all L sites, and once by even-odd preconditioning. Here (My)ᵢ = d·yᵢ − yᵢ₋₁ − yᵢ₊₁, taken left to right, with site indices modulo L. Site i is even when i is even. For the even-odd solve, fold the odd sites into the even ones, solve the system on the L/2 even sites, then rebuild each odd site. Compute that system's product as d·yₑ − (hₑ₋₁ + hₑ₊₁) / d, where hₒ = yₒ₋₁ + yₒ₊₁ for each odd site o; compute its right side cₑ = bₑ + (bₑ₋₁ + bₑ₊₁) / d, and rebuild xₒ = (bₒ + (xₒ₋₁ + xₒ₊₁)) / d. Work in double. Start each solve from 0. Take every dot product as a sum from 0.0 in index order. Before each step, stop if r·r ≤ 1e-20 × (f·f), where f is that solve's right side, or if 1000 steps are done.
Input: L and d on the first line, then b₀ … b_{L−1} on one line.
Output: two lines: the steps on all sites and the steps of the even-odd solve; then the even-odd solution x₀ … x_{L−1}, each rounded to the nearest whole number.
Limits: L is even, 2 ≤ L ≤ 64; d is a whole number, 3 ≤ d ≤ 10; b = M x for some x of whole numbers from −100 to 100.
### Examples
```in
4 3
1 0 4 0
```
```out
3 2
1 1 2 1
```
```in
2 4
6 0
```
```out
2 1
2 1
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> a, std::span<const double> b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
int cg(Op op, std::span<const double> b, std::span<double> x)
{
    std::size_t n {b.size()};
    std::vector<double> r(b.begin(), b.end());
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    std::size_t sites {0};
    double d {0.0};
    std::cin >> sites >> d;
    std::vector<double> b(sites, 0.0);
    for (double& v : b) {
        std::cin >> v;
    }
    std::size_t half {sites / 2};
    auto whole = [sites, d](std::span<const double> y,
                            std::span<double> out) {
        for (std::size_t i {0}; i < sites; ++i) {
            double left {y[(i + sites - 1) % sites]};
            out[i] = d * y[i] - left - y[(i + 1) % sites];
        }
    };
    auto schur = [half, d](std::span<const double> y,
                           std::span<double> out) {
        std::vector<double> h(half, 0.0);
        for (std::size_t m {0}; m < half; ++m) {
            h[m] = y[m] + y[(m + 1) % half];
        }
        for (std::size_t j {0}; j < half; ++j) {
            double near {h[(j + half - 1) % half] + h[j]};
            out[j] = d * y[j] - near / d;
        }
    };
    std::vector<double> x(sites, 0.0);
    int full {cg(whole, b, x)};
    std::vector<double> c(half, 0.0);
    for (std::size_t j {0}; j < half; ++j) {
        std::size_t back {(2 * j + sites - 1) % sites};
        double odd {b[back] + b[2 * j + 1]};
        c[j] = b[2 * j] + odd / d;
    }
    std::vector<double> even(half, 0.0);
    int split {cg(schur, c, even)};
    std::println("{} {}", full, split);
    for (std::size_t m {0}; m < half; ++m) {
        double near {even[m] + even[(m + 1) % half]};
        x[2 * m] = even[m];
        x[2 * m + 1] = (b[2 * m + 1] + near) / d;
    }
    for (double v : x) {
        std::print("{} ", std::lround(v));
    }
    std::println();
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> a, std::span<const double> b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
int cg(Op op, std::span<const double> b, std::span<double> x)
{
    std::size_t n {b.size()};
    std::vector<double> r(b.begin(), b.end());
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    std::size_t sites {0};
    double d {0.0};
    std::cin >> sites >> d;
    std::vector<double> b(sites, 0.0);
    for (double& v : b) {
        std::cin >> v;
    }
    std::size_t half {sites / 2};
    auto whole = [sites, d](std::span<const double> y,
                            std::span<double> out) {
        for (std::size_t i {0}; i < sites; ++i) {
            double left {y[(i + sites - 1) % sites]};
            out[i] = d * y[i] - left - y[(i + 1) % sites];
        }
    };
    auto schur = [half, d](std::span<const double> y,
                           std::span<double> out) {
        std::vector<double> h(half, 0.0);
        for (std::size_t m {0}; m < half; ++m) {
            h[m] = y[m] + y[(m + 1) % half];
        }
        for (std::size_t j {0}; j < half; ++j) {
            double near {h[(j + half - 1) % half] + h[j]};
            out[j] = d * y[j] - near / d;
        }
    };
    std::vector<double> x(sites, 0.0);
    int full {cg(whole, b, x)};
    std::vector<double> c(half, 0.0);
    for (std::size_t j {0}; j < half; ++j) {
        std::size_t back {(2 * j + sites - 1) % sites};
        double odd {b[back] + b[2 * j + 1]};
        c[j] = b[2 * j];
    }
    std::vector<double> even(half, 0.0);
    int split {cg(schur, c, even)};
    std::println("{} {}", full, split);
    for (std::size_t m {0}; m < half; ++m) {
        double near {even[m] + even[(m + 1) % half]};
        x[2 * m] = even[m];
        x[2 * m + 1] = (b[2 * m + 1] + near) / d;
    }
    for (double v : x) {
        std::print("{} ", std::lround(v));
    }
    std::println();
}
```
### Tests
```in
2 3
29 -31
```
```in
6 3
-2 -1 5 11 58 -64
```
```in
16 3
-21 -1 5 11 58 -59 -12 -6 0 6 12 59 -58 -11 -5 15
```
```in
64 3
-22 -1 5 11 58 -59 -12 -6 0 6 12 59 -58 -11 -5 1 7 13 60 -57 -10 -4 2 8 14 61 -56 -9 -3 3 9 56 -61 -14 -8 -2 4 10 57 -60 -13 -7 -1 5 11 58 -59 -12 -6 0 6 12 59 -58 -11 -5 1 7 13 60 -57 -10 -4 17
```
```in
64 10
-71 -8 40 88 177 -185 -96 -48 0 48 96 185 -177 -88 -40 8 56 104 193 -169 -80 -32 16 64 112 201 -161 -72 -24 24 72 161 -201 -112 -64 -16 32 80 169 -193 -104 -56 -8 40 88 177 -185 -96 -48 0 48 96 185 -177 -88 -40 8 56 104 193 -169 -80 -32 31
```
### Witness
```in
8 5
-5 6 9 12 15 18 21 32
```

## Alone 2
Form: run
Write a program that reads n and d and solves M x = b twice by the conjugate gradient method (Saad, Algorithm 6.18): once on all n sites, and once by even-odd preconditioning, on a line of n sites with no wrap. Here (My)ᵢ = d·yᵢ − yᵢ₋₁ − yᵢ₊₁, taken left to right, with a missing neighbour taken as 0, and bᵢ = i + 1 for i = 0, 1, …, n − 1. Site i is even when i is even. For the even-odd solve, fold the odd sites into the even ones and solve the system on the even sites alone. Compute that system's product as d·yₑ − (hₑ₋₁ + hₑ₊₁) / d, where hₒ = yₒ₋₁ + yₒ₊₁ for each odd site o, and its right side as cₑ = bₑ + (bₑ₋₁ + bₑ₊₁) / d, a missing site taken as 0 in each. Work in double. Start each solve from 0. Take every dot product as a sum from 0.0 in index order. Before each step, stop if r·r ≤ 1e-20 × (f·f), where f is that solve's right side, or if 1000 steps are done.
Input: one line, n and d.
Output: one line: the steps on all sites, then the steps of the even-odd solve.
Limits: 1 ≤ n ≤ 100; d is a whole number, 2 ≤ d ≤ 10.
### Examples
```in
2 2
```
```out
2 1
```
```in
6 2
```
```out
6 3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> a, std::span<const double> b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
int cg(Op op, std::span<const double> b)
{
    std::size_t n {b.size()};
    std::vector<double> r(b.begin(), b.end());
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    std::size_t n {0};
    double d {0.0};
    std::cin >> n >> d;
    std::size_t evens {(n + 1) / 2};
    std::size_t odds {n / 2};
    auto whole = [n, d](std::span<const double> y,
                        std::span<double> out) {
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? y[i - 1] : 0.0};
            double right {i + 1 < n ? y[i + 1] : 0.0};
            out[i] = d * y[i] - left - right;
        }
    };
    auto schur = [evens, odds, d](std::span<const double> y,
                                  std::span<double> out) {
        std::vector<double> h(odds, 0.0);
        for (std::size_t m {0}; m < odds; ++m) {
            double right {m + 1 < evens ? y[m + 1] : 0.0};
            h[m] = y[m] + right;
        }
        for (std::size_t j {0}; j < evens; ++j) {
            double left {j > 0 ? h[j - 1] : 0.0};
            double right {j < odds ? h[j] : 0.0};
            out[j] = d * y[j] - (left + right) / d;
        }
    };
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = static_cast<double>(i + 1);
    }
    std::vector<double> c(evens, 0.0);
    for (std::size_t j {0}; j < evens; ++j) {
        double left {j > 0 ? b[2 * j - 1] : 0.0};
        double right {j < odds ? b[2 * j + 1] : 0.0};
        c[j] = b[2 * j] + (left + right) / d;
    }
    std::println("{} {}", cg(whole, b), cg(schur, c));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

double dot(std::span<const double> a, std::span<const double> b)
{
    double s {0.0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename Op>
int cg(Op op, std::span<const double> b)
{
    std::size_t n {b.size()};
    std::vector<double> r(b.begin(), b.end());
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        op(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    std::size_t n {0};
    double d {0.0};
    std::cin >> n >> d;
    std::size_t evens {n / 2};
    std::size_t odds {n / 2};
    auto whole = [n, d](std::span<const double> y,
                        std::span<double> out) {
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? y[i - 1] : 0.0};
            double right {i + 1 < n ? y[i + 1] : 0.0};
            out[i] = d * y[i] - left - right;
        }
    };
    auto schur = [evens, odds, d](std::span<const double> y,
                                  std::span<double> out) {
        std::vector<double> h(odds, 0.0);
        for (std::size_t m {0}; m < odds; ++m) {
            double right {m + 1 < evens ? y[m + 1] : 0.0};
            h[m] = y[m] + right;
        }
        for (std::size_t j {0}; j < evens; ++j) {
            double left {j > 0 ? h[j - 1] : 0.0};
            double right {j < odds ? h[j] : 0.0};
            out[j] = d * y[j] - (left + right) / d;
        }
    };
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = static_cast<double>(i + 1);
    }
    std::vector<double> c(evens, 0.0);
    for (std::size_t j {0}; j < evens; ++j) {
        double left {j > 0 ? b[2 * j - 1] : 0.0};
        double right {j < odds ? b[2 * j + 1] : 0.0};
        c[j] = b[2 * j] + (left + right) / d;
    }
    std::println("{} {}", cg(whole, b), cg(schur, c));
}
```
### Tests
```in
1 5
```
```in
3 2
```
```in
16 2
```
```in
77 3
```
```in
100 10
```
```in
99 2
```
### Witness
```in
7 3
```
