# 9.40 The recursive residual against the true residual
Part: the recursive residual against the true residual after many iterations
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul], [c.math.sqrt]
After: 9.17, 9.24
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Algorithm 6.18 (conjugate gradient: the residual by the recurrence rⱼ₊₁ = rⱼ − αⱼApⱼ); Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §17.5 (a residual recurred by the method, as in the conjugate gradient method, may differ from the true residual b − Ay by several orders of magnitude)

## Example
```cpp
#include <cmath>
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
        y[i] = 2.0 * x[i] - left - right;
    }
}

int main()
{
    //: Take the 16 by 16 matrix 2, -1, -1 and bᵢ = 1/(i+1).
    std::size_t n {16};
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    std::vector<double> t(n, 0.0);
    double rr {dot(r, r)};
    for (int k {1}; k <= 48 && rr > 0.0; ++k) {
        //: Step: r is updated by the recurrence, never from x.
        apply(p, q);
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
        //: Every 8 steps, recompute b − Ax; print both sizes.
        if (k % 8 == 0) {
            apply(x, t);
            for (std::size_t i {0}; i < n; ++i) {
                t[i] = b[i] - t[i];
            }
            double real {std::sqrt(dot(t, t))};
            double rec {std::sqrt(rr)};
            std::println("{}: {:.2e} {:.2e}", k, rec, real);
        }
    }
    //: See the recursive one fall on; the true one stops.
    std::println("only b − Ax says how good x is");
}
```

## Verdict 1
```cpp
#include <array>

using Field = std::array<double, 8>;

constexpr double dot(const Field& a, const Field& b)
{
    double s {0.0};
    for (int i {0}; i < 8; ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

constexpr Field apply(const Field& x)
{
    Field y {};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
    return y;
}

struct Residuals {
    double recursive;
    double recomputed;
};

constexpr Residuals cg(const Field& b, int steps)
{
    Field x {};
    Field r {b};
    Field p {r};
    double rr {dot(r, r)};
    for (int k {0}; k < steps && rr > 0.0; ++k) {
        Field q {apply(p)};
        double alpha {rr / dot(p, q)};
        for (int i {0}; i < 8; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        for (int i {0}; i < 8; ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
    }
    Field ax {apply(x)};
    Field t {};
    for (int i {0}; i < 8; ++i) {
        t[i] = b[i] - ax[i];
    }
    return {rr, dot(t, t)};
}

constexpr Field b {1.0, 1.0 / 2, 1.0 / 3, 1.0 / 4,
                   1.0 / 5, 1.0 / 6, 1.0 / 7, 1.0 / 8};

int main()
{
    constexpr Residuals s {cg(b, 40)};
    static_assert(s.recursive < s.recomputed);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

using Field = std::array<double, 8>;

constexpr double dot(const Field& a, const Field& b)
{
    double s {0.0};
    for (int i {0}; i < 8; ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

constexpr Field apply(const Field& x)
{
    Field y {};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
    return y;
}

struct Residuals {
    double recursive;
    double recomputed;
};

constexpr Residuals cg(const Field& b, int steps)
{
    Field x {};
    Field r {b};
    Field p {r};
    double rr {dot(r, r)};
    for (int k {0}; k < steps && rr > 0.0; ++k) {
        Field q {apply(p)};
        double alpha {rr / dot(p, q)};
        for (int i {0}; i < 8; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        for (int i {0}; i < 8; ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
    }
    Field ax {apply(x)};
    Field t {};
    for (int i {0}; i < 8; ++i) {
        t[i] = b[i] - ax[i];
    }
    return {rr, dot(t, t)};
}

constexpr Field b {1.0, 1.0 / 2, 1.0 / 3, 1.0 / 4,
                   1.0 / 5, 1.0 / 6, 1.0 / 7, 1.0 / 8};

int main()
{
    constexpr Residuals s {cg(b, 40)};
    static_assert(s.recomputed < 1e-40 * dot(b, b));
}
```
Answer: c++23 ill-formed 63

## Alone 1
Form: run
Write a program that reads n and k, does k steps of the conjugate gradient method (Saad, Algorithm 6.18) on A x = b from x = 0, and prints the size of the recursive residual and of the true residual. A is the n by n matrix with 2 on the diagonal, −1 just above and just below it, and 0 elsewhere; bᵢ = 1/(i + 1) for i = 0, 1, …, n − 1. The recursive residual is the r of the method, updated as r − αAp. The true residual is b − Ax, computed from the final x. Work in double. Compute (Ay)ᵢ as 2yᵢ − yᵢ₋₁ − yᵢ₊₁, left to right, with a missing neighbour taken as 0. Take every dot product as a sum from 0.0 in index order. Stop early, before a step, if r·r is 0.
Input: one line, n and k.
Output: one line: √(r·r), then the square root of the true residual's dot product with itself, each as std::format prints it with {:.2e}.
Limits: 1 ≤ n ≤ 200; 1 ≤ k ≤ 5000.
### Examples
```in
2 1
```
```out
5.59e-01 5.59e-01
```
```in
3 2
```
```out
3.96e-01 3.96e-01
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

void apply(std::span<const double> x, std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
}

int main()
{
    std::size_t n {0};
    int steps {0};
    std::cin >> n >> steps;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    for (int k {0}; k < steps && rr > 0.0; ++k) {
        apply(p, q);
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
    }
    std::vector<double> t(n, 0.0);
    apply(x, t);
    for (std::size_t i {0}; i < n; ++i) {
        t[i] = b[i] - t[i];
    }
    double recomputed {std::sqrt(dot(t, t))};
    std::println("{:.2e} {:.2e}", std::sqrt(rr), recomputed);
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

void apply(std::span<const double> x, std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
}

int main()
{
    std::size_t n {0};
    int steps {0};
    std::cin >> n >> steps;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    for (int k {0}; k < steps && rr > 0.0; ++k) {
        apply(p, q);
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
    }
    std::vector<double> t(n, 0.0);
    apply(x, t);
    for (std::size_t i {0}; i < n; ++i) {
        t[i] = b[i] - t[i];
    }
    double recomputed {std::sqrt(dot(r, r))};
    std::println("{:.2e} {:.2e}", std::sqrt(rr), recomputed);
}
```
### Tests
```in
1 1
```
```in
3 3
```
```in
50 200
```
```in
100 1000
```
```in
200 5000
```
### Witness
```in
16 40
```

## Alone 2
Form: run
Write a program that reads n and a tolerance τ, and solves A x = b by the conjugate gradient method (Saad, Algorithm 6.18) from x = 0, stopping on the true residual. A is the n by n matrix with 2 on the diagonal, −1 just above and just below it, and 0 elsewhere; bᵢ = 1/(i + 1) for i = 0, 1, …, n − 1. Work in double. Compute (Ay)ᵢ as 2yᵢ − yᵢ₋₁ − yᵢ₊₁, left to right, with a missing neighbour taken as 0. Take every dot product as a sum from 0.0 in index order. Before each step, compute s = b − Ax from the current x, and stop if s·s ≤ τ × τ × (b·b), taken left to right, or if the method's r·r is 0, or if 1000 steps are done.
Input: one line, n and τ.
Output: one line, the number of steps done.
Limits: 1 ≤ n ≤ 200; τ is 1e-t for a whole number t from 1 to 17.
### Examples
```in
2 1e-8
```
```out
2
```
```in
16 1e-6
```
```out
16
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

void apply(std::span<const double> x, std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
}

double true_rr(std::span<const double> b,
               std::span<const double> x)
{
    std::vector<double> t(x.size(), 0.0);
    apply(x, t);
    for (std::size_t i {0}; i < t.size(); ++i) {
        t[i] = b[i] - t[i];
    }
    return dot(t, t);
}

int main()
{
    std::size_t n {0};
    double tol {0.0};
    std::cin >> n >> tol;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {tol * tol * dot(b, b)};
    int k {0};
    while (true_rr(b, x) > stop && rr > 0.0 && k < 1000) {
        apply(p, q);
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

void apply(std::span<const double> x, std::span<double> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
}

double true_rr(std::span<const double> b,
               std::span<const double> x)
{
    std::vector<double> t(x.size(), 0.0);
    apply(x, t);
    for (std::size_t i {0}; i < t.size(); ++i) {
        t[i] = b[i] - t[i];
    }
    return dot(t, t);
}

int main()
{
    std::size_t n {0};
    double tol {0.0};
    std::cin >> n >> tol;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {tol * tol * dot(b, b)};
    int k {0};
    while (rr > stop && rr > 0.0 && k < 1000) {
        apply(p, q);
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
    std::println("{}", k);
}
```
### Tests
```in
1 1e-8
```
```in
50 1e-10
```
```in
50 1e-17
```
```in
100 1e-15
```
```in
200 1e-16
```
### Witness
```in
20 1e-15
```
