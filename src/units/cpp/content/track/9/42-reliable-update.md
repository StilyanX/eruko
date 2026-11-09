# 9.42 A reliable update
Part: a reliable update: the residual recomputed in the high type and the iteration restarted
Clause: [dcl.pre], [expr.const], [conv.fpprom], [conv.double], [expr.add], [expr.mul]
After: 9.17, 9.40
Levels: c++23
Source: Clark, Babich, Barros, Brower, Rebbi, Solving Lattice QCD systems of equations using mixed precision solvers on GPUs, Comput. Phys. Commun. 181 (2010) 1517 (reliable updates: the low-precision solver's residual replaced by the true residual in high precision when it has fallen by a factor δ); Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Algorithm 6.18

## Example
```cpp
#include <array>
#include <cmath>
#include <print>

template <typename T>
using Field = std::array<T, 8>;

template <typename T>
constexpr T dot(const Field<T>& a, const Field<T>& b)
{
    T s {0};
    for (int i {0}; i < 8; ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
constexpr Field<T> apply(const Field<T>& x)
{
    Field<T> y {};
    for (int i {0}; i < 8; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i < 7 ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
    return y;
}

//: Solve in float; keep x in High; update every few steps.
template <typename High>
constexpr double solve(int steps, int every)
{
    Field<double> b {1.0, 1.0 / 2, 1.0 / 3, 1.0 / 4,
                     1.0 / 5, 1.0 / 6, 1.0 / 7, 1.0 / 8};
    Field<High> x {};
    Field<float> y {};
    Field<float> r {};
    Field<float> p {};
    Field<double> ax {};
    for (int s {0}; s <= steps; ++s) {
        //: Update: add y to x, recompute r = b − Ax in double.
        if (s % every == 0 || s == steps) {
            Field<double> xd {};
            for (int i {0}; i < 8; ++i) {
                x[i] = static_cast<High>(x[i] + y[i]);
                y[i] = 0.0f;
                xd[i] = x[i];
            }
            ax = apply(xd);
            //: Restart: float r and p begin again from that r.
            for (int i {0}; i < 8; ++i) {
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
        }
        //: Take one conjugate gradient step in float on y.
        float rr {dot(r, r)};
        if (s == steps || rr == 0.0f) {
            continue;
        }
        Field<float> q {apply(p)};
        float alpha {rr / dot(p, q)};
        for (int i {0}; i < 8; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float beta {dot(r, r) / rr};
        for (int i {0}; i < 8; ++i) {
            p[i] = r[i] + beta * p[i];
        }
    }
    //: Return the true (b − Ax)·(b − Ax) at the end.
    Field<double> e {};
    for (int i {0}; i < 8; ++i) {
        e[i] = b[i] - ax[i];
    }
    return dot(e, e);
}

int main()
{
    //: Run 40 float steps: no update, then one every 10.
    double none {solve<double>(40, 1000)};
    double some {solve<double>(40, 10)};
    //: See float alone stop near 1e-7; the updates go on down.
    std::println("{:.1e} {:.1e}", std::sqrt(none),
                 std::sqrt(some));
}
```

## Verdict 1
```cpp
#include <array>

template <typename T>
using Field = std::array<T, 8>;

template <typename T>
constexpr T dot(const Field<T>& a, const Field<T>& b)
{
    T s {0};
    for (int i {0}; i < 8; ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
constexpr Field<T> apply(const Field<T>& x)
{
    Field<T> y {};
    for (int i {0}; i < 8; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i < 7 ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
    return y;
}

template <typename High>
constexpr double solve(int steps, int every)
{
    Field<double> b {1.0, 1.0 / 2, 1.0 / 3, 1.0 / 4,
                     1.0 / 5, 1.0 / 6, 1.0 / 7, 1.0 / 8};
    Field<High> x {};
    Field<float> y {};
    Field<float> r {};
    Field<float> p {};
    Field<double> ax {};
    for (int s {0}; s <= steps; ++s) {
        if (s % every == 0 || s == steps) {
            Field<double> xd {};
            for (int i {0}; i < 8; ++i) {
                x[i] = static_cast<High>(x[i] + y[i]);
                y[i] = 0.0f;
                xd[i] = x[i];
            }
            ax = apply(xd);
            for (int i {0}; i < 8; ++i) {
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
        }
        float rr {dot(r, r)};
        if (s == steps || rr == 0.0f) {
            continue;
        }
        Field<float> q {apply(p)};
        float alpha {rr / dot(p, q)};
        for (int i {0}; i < 8; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float beta {dot(r, r) / rr};
        for (int i {0}; i < 8; ++i) {
            p[i] = r[i] + beta * p[i];
        }
    }
    Field<double> e {};
    for (int i {0}; i < 8; ++i) {
        e[i] = b[i] - ax[i];
    }
    return dot(e, e);
}

int main()
{
    static_assert(solve<double>(40, 10) < 1e-24);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

template <typename T>
using Field = std::array<T, 8>;

template <typename T>
constexpr T dot(const Field<T>& a, const Field<T>& b)
{
    T s {0};
    for (int i {0}; i < 8; ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
constexpr Field<T> apply(const Field<T>& x)
{
    Field<T> y {};
    for (int i {0}; i < 8; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i < 7 ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
    return y;
}

template <typename High>
constexpr double solve(int steps, int every)
{
    Field<double> b {1.0, 1.0 / 2, 1.0 / 3, 1.0 / 4,
                     1.0 / 5, 1.0 / 6, 1.0 / 7, 1.0 / 8};
    Field<High> x {};
    Field<float> y {};
    Field<float> r {};
    Field<float> p {};
    Field<double> ax {};
    for (int s {0}; s <= steps; ++s) {
        if (s % every == 0 || s == steps) {
            Field<double> xd {};
            for (int i {0}; i < 8; ++i) {
                x[i] = static_cast<High>(x[i] + y[i]);
                y[i] = 0.0f;
                xd[i] = x[i];
            }
            ax = apply(xd);
            for (int i {0}; i < 8; ++i) {
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
        }
        float rr {dot(r, r)};
        if (s == steps || rr == 0.0f) {
            continue;
        }
        Field<float> q {apply(p)};
        float alpha {rr / dot(p, q)};
        for (int i {0}; i < 8; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float beta {dot(r, r) / rr};
        for (int i {0}; i < 8; ++i) {
            p[i] = r[i] + beta * p[i];
        }
    }
    Field<double> e {};
    for (int i {0}; i < 8; ++i) {
        e[i] = b[i] - ax[i];
    }
    return dot(e, e);
}

int main()
{
    static_assert(solve<float>(40, 10) < 1e-24);
}
```
Answer: c++23 ill-formed 76

## Alone 1
Form: run
Write a program that reads n and τ, and solves A x = b by conjugate gradient steps in float with reliable updates in double. A is the n by n matrix with 2 on the diagonal, −1 just above and just below it, and 0 elsewhere; bᵢ = 1/(i + 1) in double. Keep x in double, and y, r, p and q in float. Compute (Av)ᵢ as 2vᵢ − vᵢ₋₁ − vᵢ₊₁, left to right, with a missing neighbour taken as 0, in the type of v. Take every dot product as a sum from 0 in index order, in the type of its vectors. An update adds each yᵢ, widened to double, to xᵢ and sets y to 0; computes e = b − Ax in double and h = e·e; sets each rᵢ to eᵢ rounded to float and p to r; and sets ρ = r·r and ρ₀ = ρ. A step sets q = Ap, α = ρ/(p·q), y to y + αp, r to r − αq, ρ′ = r·r, β = ρ′/ρ, p to r + βp, then ρ = ρ′. Start from x = 0 and y = 0. While fewer than 10000 steps are done: do an update if this is the first pass or ρ < 0.01 × ρ₀; then stop if h ≤ τ × τ × (b·b), taken left to right, or if ρ = 0; else take one step.
Input: one line, n and τ.
Output: one line: the steps done, then the updates done after the first.
Limits: 1 ≤ n ≤ 200; τ is 1e-t for a whole number t from 1 to 12.
### Examples
```in
1 1e-10
```
```out
1 1
```
```in
8 1e-3
```
```out
8 1
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

template <typename T>
T dot(std::span<const T> a, std::span<const T> b)
{
    T s {0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
void apply(std::span<const T> x, std::span<T> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i + 1 < n ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
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
    std::vector<double> ax(n, 0.0);
    std::vector<float> y(n, 0.0f);
    std::vector<float> r(n, 0.0f);
    std::vector<float> p(n, 0.0f);
    std::vector<float> q(n, 0.0f);
    double stop {tol * tol * dot<double>(b, b)};
    double high {0.0};
    float rr {0.0f};
    float ref {0.0f};
    int steps {0};
    int updates {-1};
    while (steps < 10000) {
        if (updates < 0 || rr < 0.01f * ref) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + static_cast<double>(y[i]);
                y[i] = 0.0f;
            }
            apply<double>(x, ax);
            high = 0.0;
            for (std::size_t i {0}; i < n; ++i) {
                double e {b[i] - ax[i]};
                high = high + e * e;
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
            rr = dot<float>(r, r);
            ref = rr;
            updates = updates + 1;
        }
        if (high <= stop || rr == 0.0f) {
            break;
        }
        apply<float>(p, q);
        float alpha {rr / dot<float>(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float next {dot<float>(r, r)};
        float beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        steps = steps + 1;
    }
    std::println("{} {}", steps, updates);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

template <typename T>
T dot(std::span<const T> a, std::span<const T> b)
{
    T s {0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
void apply(std::span<const T> x, std::span<T> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i + 1 < n ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
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
    std::vector<double> ax(n, 0.0);
    std::vector<float> y(n, 0.0f);
    std::vector<float> r(n, 0.0f);
    std::vector<float> p(n, 0.0f);
    std::vector<float> q(n, 0.0f);
    double stop {tol * tol * dot<double>(b, b)};
    double high {0.0};
    float rr {0.0f};
    float ref {0.0f};
    int steps {0};
    int updates {-1};
    while (steps < 10000) {
        if (updates < 0 || rr < 0.01f * ref) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = static_cast<float>(x[i]) + y[i];
                y[i] = 0.0f;
            }
            apply<double>(x, ax);
            high = 0.0;
            for (std::size_t i {0}; i < n; ++i) {
                double e {b[i] - ax[i]};
                high = high + e * e;
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
            rr = dot<float>(r, r);
            ref = rr;
            updates = updates + 1;
        }
        if (high <= stop || rr == 0.0f) {
            break;
        }
        apply<float>(p, q);
        float alpha {rr / dot<float>(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float next {dot<float>(r, r)};
        float beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        steps = steps + 1;
    }
    std::println("{} {}", steps, updates);
}
```
### Tests
```in
50 1e-3
```
```in
16 1e-12
```
```in
100 1e-12
```
```in
200 1e-12
```
```in
30 1e-4
```
### Witness
```in
8 1e-10
```

## Alone 2
Form: run
Write a program that reads n, N and m, takes N conjugate gradient steps in float on A x = b with a reliable update in double before every m-th step, and prints the size of the true residual at the end. A is the n by n matrix with 2 on the diagonal, −1 just above and just below it, and 0 elsewhere; bᵢ = 1/(i + 1) in double. Keep x in double, and y, r, p and q in float. Compute (Av)ᵢ as 2vᵢ − vᵢ₋₁ − vᵢ₊₁, left to right, with a missing neighbour taken as 0, in the type of v. Take every dot product as a sum from 0 in index order, in the type of its vectors. An update adds each yᵢ, widened to double, to xᵢ and sets y to 0; computes e = b − Ax in double; and sets each rᵢ to eᵢ rounded to float and p to r. A step sets ρ = r·r, q = Ap, α = ρ/(p·q), y to y + αp, r to r − αq, β = (r·r)/ρ, then p to r + βp. Start from x = 0 and y = 0. For s = 0, 1, …, N − 1: do an update if s is a multiple of m, then take a step, skipping it if ρ = 0. Then do one last update.
Input: one line, n, N and m.
Output: one line, √(e·e) for the last e, with e·e a sum from 0.0 in index order, as std::format prints a double with {:.1e}.
Limits: 1 ≤ n ≤ 200; 1 ≤ N ≤ 3000; 1 ≤ m ≤ 5000.
### Examples
```in
8 20 100
```
```out
6.3e-07
```
```in
8 20 4
```
```out
8.4e-03
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

template <typename T>
T dot(std::span<const T> a, std::span<const T> b)
{
    T s {0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
void apply(std::span<const T> x, std::span<T> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i + 1 < n ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
}

int main()
{
    std::size_t n {0};
    int total {0};
    int m {0};
    std::cin >> n >> total >> m;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> ax(n, 0.0);
    std::vector<float> y(n, 0.0f);
    std::vector<float> r(n, 0.0f);
    std::vector<float> p(n, 0.0f);
    std::vector<float> q(n, 0.0f);
    for (int s {0}; s <= total; ++s) {
        if (s % m == 0 || s == total) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + static_cast<double>(y[i]);
                y[i] = 0.0f;
            }
            apply<double>(x, ax);
            for (std::size_t i {0}; i < n; ++i) {
                r[i] = static_cast<float>(b[i] - ax[i]);
                p[i] = r[i];
            }
        }
        float rr {dot<float>(r, r)};
        if (s == total || rr == 0.0f) {
            continue;
        }
        apply<float>(p, q);
        float alpha {rr / dot<float>(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float beta {dot<float>(r, r) / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
    }
    double high {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        high = high + (b[i] - ax[i]) * (b[i] - ax[i]);
    }
    std::println("{:.1e}", std::sqrt(high));
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <span>
#include <vector>

template <typename T>
T dot(std::span<const T> a, std::span<const T> b)
{
    T s {0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        s = s + a[i] * b[i];
    }
    return s;
}

template <typename T>
void apply(std::span<const T> x, std::span<T> y)
{
    std::size_t n {x.size()};
    for (std::size_t i {0}; i < n; ++i) {
        T left {i > 0 ? x[i - 1] : T {0}};
        T right {i + 1 < n ? x[i + 1] : T {0}};
        y[i] = T {2} * x[i] - left - right;
    }
}

int main()
{
    std::size_t n {0};
    int total {0};
    int m {0};
    std::cin >> n >> total >> m;
    std::vector<double> b(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        b[i] = 1.0 / static_cast<double>(i + 1);
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> ax(n, 0.0);
    std::vector<float> y(n, 0.0f);
    std::vector<float> r(n, 0.0f);
    std::vector<float> p(n, 0.0f);
    std::vector<float> q(n, 0.0f);
    for (int s {0}; s <= total; ++s) {
        if (s % m == 0 || s == total) {
            for (std::size_t i {0}; i < n; ++i) {
                x[i] = x[i] + static_cast<double>(y[i]);
                y[i] = 0.0f;
            }
            apply<double>(x, ax);
            for (std::size_t i {0}; i < n; ++i) {
                r[i] = static_cast<float>(b[i]) - ax[i];
                p[i] = r[i];
            }
        }
        float rr {dot<float>(r, r)};
        if (s == total || rr == 0.0f) {
            continue;
        }
        apply<float>(p, q);
        float alpha {rr / dot<float>(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            y[i] = y[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        float beta {dot<float>(r, r) / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
    }
    double high {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        high = high + (b[i] - ax[i]) * (b[i] - ax[i]);
    }
    std::println("{:.1e}", std::sqrt(high));
}
```
### Tests
```in
1 1 1
```
```in
50 500 1000
```
```in
100 2000 100
```
```in
200 3000 200
```
```in
16 200 10
```
### Witness
```in
50 500 50
```
