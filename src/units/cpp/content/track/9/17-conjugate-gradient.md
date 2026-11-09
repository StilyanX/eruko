# 9.17 The conjugate gradient recurrence
Part: the conjugate gradient recurrence: the iterations to a tolerance on a given matrix
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul]
After: none
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Algorithm 6.18 (conjugate gradient) and §6.11.3 (the steps are at most the number of distinct eigenvalues)

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
        y[i] = 2.0 * x[i] - left - right;
    }
}

int main()
{
    //: Take the 8 by 8 matrix with 2, -1 and -1, and b all ones.
    std::size_t n {8};
    std::vector<double> b(n, 1.0);
    //: Start from x = 0, so the residual r and direction p are b.
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    //: Step while r·r is above 1e-20 times b·b.
    while (rr > stop) {
        //: Move x along p by the step that makes r new.
        apply(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        //: Turn p into the next direction with beta.
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i] + beta * p[i];
        }
        rr = next;
        k = k + 1;
        std::println("step {}: r·r = {:.3e}", k, rr);
    }
    //: See 4 steps: b has parts along 4 distinct eigenvalues.
    std::println("{} steps, x[0] = {:.6f}", k, x[0]);
}
```

## Verdict 1
```cpp
#include <array>

constexpr int steps(std::array<double, 4> d)
{
    std::array<double, 4> r {1.0, 1.0, 1.0, 1.0};
    std::array<double, 4> p {r};
    std::array<double, 4> q {};
    double rr {4.0};
    int k {0};
    while (rr > 1e-20 * 4.0) {
        double pq {0.0};
        for (int i {0}; i < 4; ++i) {
            q[i] = d[i] * p[i];
            pq = pq + p[i] * q[i];
        }
        double alpha {rr / pq};
        double next {0.0};
        for (int i {0}; i < 4; ++i) {
            r[i] = r[i] - alpha * q[i];
            next = next + r[i] * r[i];
        }
        for (int i {0}; i < 4; ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    static_assert(steps({1.0, 1.0, 4.0, 4.0}) == 2);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

constexpr int steps(std::array<double, 4> d)
{
    std::array<double, 4> r {1.0, 1.0, 1.0, 1.0};
    std::array<double, 4> p {r};
    std::array<double, 4> q {};
    double rr {4.0};
    int k {0};
    while (rr > 1e-20 * 4.0) {
        double pq {0.0};
        for (int i {0}; i < 4; ++i) {
            q[i] = d[i] * p[i];
            pq = pq + p[i] * q[i];
        }
        double alpha {rr / pq};
        double next {0.0};
        for (int i {0}; i < 4; ++i) {
            r[i] = r[i] - alpha * q[i];
            next = next + r[i] * r[i];
        }
        for (int i {0}; i < 4; ++i) {
            p[i] = r[i] + next / rr * p[i];
        }
        rr = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    static_assert(steps({1.0, 2.0, 3.0, 4.0}) <= 3);
}
```
Answer: c++23 ill-formed 33

## Alone 1
Form: run
Write a program that reads n and solves A x = b by the conjugate gradient method (Saad, Algorithm 6.18). A is the n by n matrix with 2 on the diagonal, −1 just above and just below it, and 0 elsewhere. b is all ones. Start from x = 0 and work in double. Compute (Ap)ᵢ as 2pᵢ − pᵢ₋₁ − pᵢ₊₁, left to right, with a missing neighbour taken as 0. Take every dot product as a sum from 0.0 in index order. Before each step, stop if r·r ≤ 1e-20 × (b·b), or if 10000 steps are done.
Input: one line, n.
Output: one line, the number of steps done.
Limits: 1 ≤ n ≤ 200.
### Examples
```in
1
```
```out
1
```
```in
2
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
    std::cin >> n;
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 10000) {
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

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::vector<double> b(n, 1.0);
    std::vector<double> x(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> p {r};
    std::vector<double> q(n, 0.0);
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 10000) {
        apply(p, q);
        double alpha {rr / dot(p, q)};
        for (std::size_t i {0}; i < n; ++i) {
            x[i] = x[i] + alpha * p[i];
            r[i] = r[i] - alpha * q[i];
        }
        double next {dot(r, r)};
        double beta {next / rr};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = r[i];
        }
        rr = next;
        k = k + 1;
    }
    std::println("{}", k);
}
```
### Tests
```in
1
```
```in
5
```
```in
8
```
```in
50
```
```in
200
```
### Witness
```in
3
```

## Alone 2
Form: run
Write a program that reads a matrix A, a vector b and a start x₀, and solves A x = b by the conjugate gradient method (Saad, Algorithm 6.18) from x₀. Work in double. Compute (Av)ᵢ as the dot product of row i of A with v. Take every dot product as a sum from 0.0 in index order. Before each step, stop if r·r ≤ 1e-20 × (b·b), or if 1000 steps are done.
Input: n on the first line, then the n rows of A, one to a line, then b on one line, then x₀ on one line.
Output: one line, the number of steps done.
Limits: 1 ≤ n ≤ 10; every entry is a whole number from −100 to 100; A is symmetric positive definite.
### Examples
```in
1
4
2
0
```
```out
1
```
```in
3
4 1 0
1 4 1
0 1 4
1 2 3
0 0 0
```
```out
3
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
    std::vector<double> x(n, 0.0);
    for (double& v : a) {
        std::cin >> v;
    }
    for (double& v : b) {
        std::cin >> v;
    }
    for (double& v : x) {
        std::cin >> v;
    }
    std::vector<double> q(n, 0.0);
    apply(a, x, q);
    std::vector<double> r(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        r[i] = b[i] - q[i];
    }
    std::vector<double> p {r};
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        apply(a, p, q);
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
    std::vector<double> x(n, 0.0);
    for (double& v : a) {
        std::cin >> v;
    }
    for (double& v : b) {
        std::cin >> v;
    }
    for (double& v : x) {
        std::cin >> v;
    }
    std::vector<double> q(n, 0.0);
    apply(a, x, q);
    std::vector<double> r(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        r[i] = b[i];
    }
    std::vector<double> p {r};
    double rr {dot(r, r)};
    double stop {1e-20 * dot(b, b)};
    int k {0};
    while (rr > stop && k < 1000) {
        apply(a, p, q);
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
1
4
8
2
```
```in
2
2 1
1 2
3 3
5 -5
```
```in
4
2 0 0 0
0 2 0 0
0 0 3 0
0 0 0 3
1 1 1 1
1 0 0 0
```
```in
10
4 1 0 0 0 0 0 0 0 0
1 4 1 0 0 0 0 0 0 0
0 1 4 1 0 0 0 0 0 0
0 0 1 4 1 0 0 0 0 0
0 0 0 1 4 1 0 0 0 0
0 0 0 0 1 4 1 0 0 0
0 0 0 0 0 1 4 1 0 0
0 0 0 0 0 0 1 4 1 0
0 0 0 0 0 0 0 1 4 1
0 0 0 0 0 0 0 0 1 4
1 2 3 4 5 6 7 8 9 10
1 0 1 0 1 0 1 0 1 0
```
### Witness
```in
3
4 1 0
1 4 1
0 1 4
6 12 14
1 2 3
```
