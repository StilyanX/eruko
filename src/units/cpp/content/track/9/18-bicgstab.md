# 9.18 The stabilised bi-conjugate gradient recurrence
Part: the stabilised bi-conjugate gradient recurrence on a matrix that is not symmetric: the iterations to a tolerance
Clause: [dcl.pre], [expr.const], [expr.mul], [expr.add]
After: 9.17
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Algorithm 7.7 (BiCGSTAB) and §7.3

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

void apply(std::span<const double> x, std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = -1.5 * left + 2.0 * x[i] - 0.5 * right;
    }
}

int main()
{
    //: Take 2 on the diagonal, -1.5 below, -0.5 above.
    std::size_t n {8};
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    //: Keep the first r as a fixed shadow residual.
    std::vector<double> shadow {r};
    std::vector<double> p {r};
    std::vector<double> v(n, 0.0);
    std::vector<double> s(n, 0.0);
    std::vector<double> t(n, 0.0);
    double stop {1e-20 * dot(b, b)};
    double rho {dot(r, shadow)};
    double rr {dot(r, r)};
    int k {0};
    while (rr > stop) {
        //: Take the half step along p; stop if s is small.
        apply(p, v);
        double alpha {rho / dot(v, shadow)};
        for (std::size_t i {0}; i < n; ++i) {
            s[i] = r[i] - alpha * v[i];
        }
        k = k + 1;
        if (dot(s, s) <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + alpha * p[i];
            }
            break;
        }
        //: Take the omega that makes the new r shortest.
        apply(s, t);
        double omega {dot(t, s) / dot(t, t)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i] + omega * s[i];
            r[i] = s[i] - omega * t[i];
        }
        //: Turn p with beta, which holds alpha over omega.
        double next {dot(r, shadow)};
        double beta {next / rho * (alpha / omega)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
        rr = dot(r, r);
        std::println("step {}: r·r = {:.3e}", k, rr);
    }
    //: See at most 8 steps for 8 unknowns.
    std::println("{} steps", k);
}
```

## Verdict 1
```cpp
#include <array>

constexpr int steps(std::array<double, 3> d)
{
    std::array<double, 3> r {1.0, 1.0, 1.0};
    std::array<double, 3> shadow {r};
    std::array<double, 3> p {r};
    std::array<double, 3> v {};
    std::array<double, 3> s {};
    std::array<double, 3> t {};
    double rho {3.0};
    double rr {3.0};
    int k {0};
    while (rr > 1e-20 * 3.0) {
        double vr {0.0};
        for (int i {0}; i < 3; ++i) {
            v[i] = d[i] * p[i];
            vr = vr + v[i] * shadow[i];
        }
        double alpha {rho / vr};
        double ss {0.0};
        for (int i {0}; i < 3; ++i) {
            s[i] = r[i] - alpha * v[i];
            ss = ss + s[i] * s[i];
        }
        k = k + 1;
        if (ss <= 1e-20 * 3.0) {
            break;
        }
        double ts {0.0};
        double tt {0.0};
        for (int i {0}; i < 3; ++i) {
            t[i] = d[i] * s[i];
            ts = ts + t[i] * s[i];
            tt = tt + t[i] * t[i];
        }
        double omega {ts / tt};
        double next {0.0};
        rr = 0.0;
        for (int i {0}; i < 3; ++i) {
            r[i] = s[i] - omega * t[i];
            next = next + r[i] * shadow[i];
            rr = rr + r[i] * r[i];
        }
        double beta {next / rho * (alpha / omega)};
        for (int i {0}; i < 3; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
    }
    return k;
}

int main()
{
    static_assert(steps({1.0, 2.0, 2.0}) == 2);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

constexpr int steps(std::array<double, 3> d)
{
    std::array<double, 3> r {1.0, 1.0, 1.0};
    std::array<double, 3> shadow {r};
    std::array<double, 3> p {r};
    std::array<double, 3> v {};
    std::array<double, 3> s {};
    std::array<double, 3> t {};
    double rho {3.0};
    double rr {3.0};
    int k {0};
    while (rr > 1e-20 * 3.0) {
        double vr {0.0};
        for (int i {0}; i < 3; ++i) {
            v[i] = d[i] * p[i];
            vr = vr + v[i] * shadow[i];
        }
        double alpha {rho / vr};
        double ss {0.0};
        for (int i {0}; i < 3; ++i) {
            s[i] = r[i] - alpha * v[i];
            ss = ss + s[i] * s[i];
        }
        k = k + 1;
        double ts {0.0};
        double tt {0.0};
        for (int i {0}; i < 3; ++i) {
            t[i] = d[i] * s[i];
            ts = ts + t[i] * s[i];
            tt = tt + t[i] * t[i];
        }
        double omega {ts / tt};
        double next {0.0};
        rr = 0.0;
        for (int i {0}; i < 3; ++i) {
            r[i] = s[i] - omega * t[i];
            next = next + r[i] * shadow[i];
            rr = rr + r[i] * r[i];
        }
        double beta {next / rho * (alpha / omega)};
        for (int i {0}; i < 3; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
    }
    return k;
}

int main()
{
    static_assert(steps({4.0, 4.0, 4.0}) == 1);
}
```
Answer: c++23 undefined constant

## Alone 1
Form: run
Write a program that reads n and g and solves A x = b by BiCGSTAB (Saad, Algorithm 7.7). A is the n by n matrix with 2 on the diagonal, −1 − g just below it, −1 + g just above it, and 0 elsewhere. b is all ones. Work in double. Start from x = 0 and take the shadow residual r₀* = r₀. Compute (Ay)ᵢ as (−1 − g)yᵢ₋₁ + 2yᵢ + (−1 + g)yᵢ₊₁, left to right, with a missing neighbour taken as 0. Take every dot product as a sum from 0.0 in index order. Compute β as (ρⱼ₊₁ / ρⱼ) × (αⱼ / ωⱼ), where ρⱼ = (rⱼ, r₀*). Before each step, stop if r·r ≤ 1e-20 × (b·b), or if 10000 steps are done. Within a step, once s is made, stop if s·s ≤ 1e-20 × (b·b), after adding αp to x; that step counts.
Input: one line, n and g.
Output: one line, the number of steps done.
Limits: 1 ≤ n ≤ 16; g is one of 0, 0.25, 0.5 and 0.75.
### Examples
```in
1 0.5
```
```out
1
```
```in
2 0
```
```out
1
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

struct Band {
    double lo {0.0};
    double up {0.0};
};

void apply(Band m, std::span<const double> x,
           std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = m.lo * left + 2.0 * x[i] + m.up * right;
    }
}

int main()
{
    std::size_t n {0};
    double g {0.0};
    std::cin >> n >> g;
    Band m {-1.0 - g, -1.0 + g};
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> shadow {r};
    std::vector<double> p {r};
    std::vector<double> v(n, 0.0);
    std::vector<double> s(n, 0.0);
    std::vector<double> t(n, 0.0);
    double stop {1e-20 * dot(b, b)};
    double rho {dot(r, shadow)};
    double rr {dot(r, r)};
    int k {0};
    while (rr > stop && k < 10000) {
        apply(m, p, v);
        double alpha {rho / dot(v, shadow)};
        for (std::size_t i {0}; i < n; ++i) {
            s[i] = r[i] - alpha * v[i];
        }
        k = k + 1;
        if (dot(s, s) <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + alpha * p[i];
            }
            break;
        }
        apply(m, s, t);
        double omega {dot(t, s) / dot(t, t)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i] + omega * s[i];
            r[i] = s[i] - omega * t[i];
        }
        double next {dot(r, shadow)};
        double beta {next / rho * (alpha / omega)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
        rr = dot(r, r);
    }
    std::println("{}", k);
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

struct Band {
    double lo {0.0};
    double up {0.0};
};

void apply(Band m, std::span<const double> x,
           std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = m.lo * left + 2.0 * x[i] + m.up * right;
    }
}

int main()
{
    std::size_t n {0};
    double g {0.0};
    std::cin >> n >> g;
    Band m {-1.0 - g, -1.0 + g};
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> shadow {r};
    std::vector<double> p {r};
    std::vector<double> v(n, 0.0);
    std::vector<double> s(n, 0.0);
    std::vector<double> t(n, 0.0);
    double stop {1e-20 * dot(b, b)};
    double rho {dot(r, shadow)};
    double rr {dot(r, r)};
    int k {0};
    while (rr > stop && k < 10000) {
        apply(m, p, v);
        double alpha {rho / dot(v, shadow)};
        for (std::size_t i {0}; i < n; ++i) {
            s[i] = r[i] - alpha * v[i];
        }
        k = k + 1;
        if (dot(s, s) <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + alpha * p[i];
            }
            break;
        }
        apply(m, s, t);
        double omega {dot(t, s) / dot(t, t)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i] + omega * s[i];
            r[i] = s[i] - omega * t[i];
        }
        double next {dot(r, shadow)};
        double beta {next / rho};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
        rr = dot(r, r);
    }
    std::println("{}", k);
}
```
### Tests
```in
3 0.25
```
```in
7 0
```
```in
12 0.75
```
```in
16 0
```
```in
16 0.5
```
### Witness
```in
10 0.5
```

## Alone 2
Form: run
Write a program that reads a matrix A and a vector b and solves A x = b by BiCGSTAB (Saad, Algorithm 7.7), then says which test stopped it. Work in double. Start from x = 0 and take the shadow residual r₀* = r₀. Compute (Ay)ᵢ as the dot product of row i of A with y. Take every dot product as a sum from 0.0 in index order. Compute β as (ρⱼ₊₁ / ρⱼ) × (αⱼ / ωⱼ), where ρⱼ = (rⱼ, r₀*). Before each step, stop if r·r ≤ 1e-20 × (b·b), or if 1000 steps are done. Within a step, once s is made, stop if s·s ≤ 1e-20 × (b·b), after adding αp to x; that step counts.
Input: n on the first line, then the n rows of A, one to a line, then b on one line.
Output: one line: the number of steps done, then s if the test on s stopped it, or r if not.
Limits: 1 ≤ n ≤ 6; every entry is a whole number from −10 to 10; A is invertible and b is not all zeros.
### Examples
```in
1
3
2
```
```out
1 s
```
```in
2
2 1
0 3
1 1
```
```out
1 s
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

void apply(std::span<const double> a, std::span<const double> x,
           std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        y[i] = dot(a.subspan(i * n, n), x);
    }
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::vector<double> a(n * n, 0.0);
    std::vector<double> b(n, 0.0);
    for (double& e : a) {
        std::cin >> e;
    }
    for (double& e : b) {
        std::cin >> e;
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> shadow {r};
    std::vector<double> p {r};
    std::vector<double> v(n, 0.0);
    std::vector<double> s(n, 0.0);
    std::vector<double> t(n, 0.0);
    double stop {1e-20 * dot(b, b)};
    double rho {dot(r, shadow)};
    double rr {dot(r, r)};
    int k {0};
    char test {'r'};
    while (rr > stop && k < 1000) {
        apply(a, p, v);
        double alpha {rho / dot(v, shadow)};
        for (std::size_t i {0}; i < n; ++i) {
            s[i] = r[i] - alpha * v[i];
        }
        k = k + 1;
        if (dot(s, s) <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + alpha * p[i];
            }
            test = 's';
            break;
        }
        apply(a, s, t);
        double omega {dot(t, s) / dot(t, t)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i] + omega * s[i];
            r[i] = s[i] - omega * t[i];
        }
        double next {dot(r, shadow)};
        double beta {next / rho * (alpha / omega)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
        rr = dot(r, r);
    }
    std::println("{} {}", k, test);
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

void apply(std::span<const double> a, std::span<const double> x,
           std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        y[i] = dot(a.subspan(i * n, n), x);
    }
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::vector<double> a(n * n, 0.0);
    std::vector<double> b(n, 0.0);
    for (double& e : a) {
        std::cin >> e;
    }
    for (double& e : b) {
        std::cin >> e;
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> shadow {r};
    std::vector<double> p {r};
    std::vector<double> v(n, 0.0);
    std::vector<double> s(n, 0.0);
    std::vector<double> t(n, 0.0);
    double stop {1e-20 * dot(b, b)};
    double rho {dot(r, shadow)};
    double rr {dot(r, r)};
    int k {0};
    char test {'r'};
    while (rr > stop && k < 1000) {
        apply(a, p, v);
        double alpha {rho / dot(v, shadow)};
        for (std::size_t i {0}; i < n; ++i) {
            s[i] = r[i] - alpha * v[i];
        }
        k = k + 1;
        if (dot(s, s) <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + alpha * p[i];
            }
            test = 's';
            break;
        }
        apply(a, s, t);
        double omega {dot(t, s) / dot(t, t)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i] + omega * s[i];
            r[i] = s[i] - omega * t[i];
        }
        shadow = r;
        double next {dot(r, shadow)};
        double beta {next / rho * (alpha / omega)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * (p[i] - omega * v[i]);
        }
        rho = next;
        rr = dot(r, r);
    }
    std::println("{} {}", k, test);
}
```
### Tests
```in
2
0 1
1 0
1 2
```
```in
3
2 1 0
0 2 1
0 0 2
0 0 1
```
```in
3
4 1 0
-1 4 1
0 -1 4
1 2 3
```
```in
4
4 -1 0 1
-2 5 -1 0
0 -3 6 -1
1 0 -2 4
1 -1 2 3
```
```in
6
3 1 0 0 0 1
0 3 1 0 0 0
0 0 3 1 0 0
0 0 0 3 1 0
0 0 0 0 3 1
1 0 0 0 0 3
1 2 3 4 5 6
```
### Witness
```in
2
1 2
3 4
1 0
```
