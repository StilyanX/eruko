# 9.21 The coarse operator against the three applied in turn
Part: the coarse operator as restriction times operator times prolongation, against the three applied in turn
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul]
After: 9.20
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §13.3 (intergrid operations) and §13.4.2 (the two-grid cycle and its coarse problem); the Galerkin coarse matrix Pᵀ A P, §13.6 (algebraic multigrid)

## Example
```cpp
#include <array>
#include <print>

using Fine = std::array<double, 8>;
using Coarse = std::array<double, 2>;

double a_at(std::size_t i, std::size_t j)
{
    if (i == j) {
        return 2.0;
    }
    return i + 1 == j || j + 1 == i ? -1.0 : 0.0;
}

double p_at(std::size_t i, std::size_t c)
{
    return i / 4 == c ? 0.5 : 0.0;
}

int main()
{
    //: Form the coarse matrix Ac = Pᵀ A P once, entry by entry.
    std::array<Coarse, 2> ac {};
    for (std::size_t r {0}; r < 2; ++r) {
        for (std::size_t c {0}; c < 2; ++c) {
            double s {0.0};
            for (std::size_t i {0}; i < 8; ++i) {
                for (std::size_t j {0}; j < 8; ++j) {
                    double t {p_at(i, r) * a_at(i, j)};
                    s = s + t * p_at(j, c);
                }
            }
            ac[r][c] = s;
        }
    }
    //: Apply Ac to a coarse y.
    Coarse y {3.0, -2.0};
    for (std::size_t r {0}; r < 2; ++r) {
        std::print("{} ", ac[r][0] * y[0] + ac[r][1] * y[1]);
    }
    std::println();
    //: Apply P, then A, then Pᵀ, in turn, to the same y.
    Fine x {};
    for (std::size_t i {0}; i < 8; ++i) {
        x[i] = p_at(i, 0) * y[0] + p_at(i, 1) * y[1];
    }
    Fine ax {};
    for (std::size_t i {0}; i < 8; ++i) {
        for (std::size_t j {0}; j < 8; ++j) {
            ax[i] = ax[i] + a_at(i, j) * x[j];
        }
    }
    for (std::size_t r {0}; r < 2; ++r) {
        double s {0.0};
        for (std::size_t i {0}; i < 8; ++i) {
            s = s + p_at(i, r) * ax[i];
        }
        std::print("{} ", s);
    }
    //: See the same two numbers: Ac is Pᵀ A P.
    std::println();
}
```

## Verdict 1
```cpp
#include <array>

using Fine = std::array<double, 8>;
using Coarse = std::array<double, 2>;
using Matrix = std::array<Coarse, 2>;

constexpr Fine apply(const Fine& x)
{
    Fine y {};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
    return y;
}

constexpr Coarse in_turn(const Coarse& y)
{
    Fine x {};
    for (int i {0}; i < 8; ++i) {
        x[i] = 0.5 * y[i / 4];
    }
    Fine ax {apply(x)};
    Coarse z {0.0, 0.0};
    for (int i {0}; i < 8; ++i) {
        z[i / 4] = z[i / 4] + 0.5 * ax[i];
    }
    return z;
}

constexpr Matrix ac {{{0.5, -0.25}, {-0.25, 0.5}}};

int main()
{
    constexpr Coarse y {3.0, -2.0};
    constexpr Coarse z {ac[0][0] * y[0] + ac[0][1] * y[1],
                        ac[1][0] * y[0] + ac[1][1] * y[1]};
    static_assert(in_turn(y) == z);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

using Fine = std::array<double, 8>;
using Coarse = std::array<double, 2>;
using Matrix = std::array<Coarse, 2>;

constexpr Fine apply(const Fine& x)
{
    Fine y {};
    for (int i {0}; i < 8; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i < 7 ? x[i + 1] : 0.0};
        y[i] = 2.0 * x[i] - left - right;
    }
    return y;
}

constexpr Coarse in_turn(const Coarse& y)
{
    Fine x {};
    for (int i {0}; i < 8; ++i) {
        x[i] = 0.5 * y[i / 4];
    }
    Fine ax {apply(x)};
    Coarse z {0.0, 0.0};
    for (int i {0}; i < 8; ++i) {
        z[i / 4] = z[i / 4] + 0.5 * ax[i];
    }
    return z;
}

constexpr Matrix ac {{{2.0, -1.0}, {-1.0, 2.0}}};

int main()
{
    constexpr Coarse y {3.0, -2.0};
    constexpr Coarse z {ac[0][0] * y[0] + ac[0][1] * y[1],
                        ac[1][0] * y[0] + ac[1][1] * y[1]};
    static_assert(in_turn(y) == z);
}
```
Answer: c++23 ill-formed 39

## Alone 1
Form: run
Write a program that reads an n by n matrix A and an aggregate size a, and prints the coarse matrix Ac = Pᵀ A P. The aggregates are the blocks of a neighbouring sites: sites 0 to a − 1, then a to 2a − 1, and so on. P has one column per aggregate, with 1/√a on the sites of that aggregate and 0 elsewhere. Work in double.
Input: n and a on the first line, then the n rows of A, one to a line.
Output: n/a lines, row I of Ac, each entry as std::format prints a double with {}, separated by spaces.
Limits: 1 ≤ n ≤ 32; a is 1, 4 or 16, and a divides n; every entry of A is a whole number from −9 to 9.
### Examples
```in
2 1
2 -1
-1 2
```
```out
2 -1
-1 2
```
```in
4 4
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
```
```out
1
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    std::size_t n {0};
    std::size_t a {0};
    std::cin >> n >> a;
    std::vector<double> m(n * n, 0.0);
    for (double& e : m) {
        std::cin >> e;
    }
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::size_t k {n / a};
    for (std::size_t r {0}; r < k; ++r) {
        for (std::size_t c {0}; c < k; ++c) {
            std::size_t top {r * a * n + c * a};
            double s {0.0};
            for (std::size_t i {0}; i < a; ++i) {
                for (std::size_t j {0}; j < a; ++j) {
                    s = s + w * m[top + i * n + j] * w;
                }
            }
            std::print("{} ", s);
        }
        std::println();
    }
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
    std::size_t n {0};
    std::size_t a {0};
    std::cin >> n >> a;
    std::vector<double> m(n * n, 0.0);
    for (double& e : m) {
        std::cin >> e;
    }
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::size_t k {n / a};
    for (std::size_t r {0}; r < k; ++r) {
        for (std::size_t c {0}; c < k; ++c) {
            std::size_t top {r * a * n + c * a};
            double s {m[top]};
            std::print("{} ", s);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
-9
```
```in
8 4
2 -1 0 0 0 0 0 0
-1 2 -1 0 0 0 0 0
0 -1 2 -1 0 0 0 0
0 0 -1 2 -1 0 0 0
0 0 0 -1 2 -1 0 0
0 0 0 0 -1 2 -1 0
0 0 0 0 0 -1 2 -1
0 0 0 0 0 0 -1 2
```
```in
16 4
4 -7 -5 -2 -4 3 -5 2 2 -8 1 -1 -7 6 -2 -6
-6 7 2 -5 -3 7 -9 -3 3 8 7 -2 -2 8 3 -7
4 -8 1 1 -1 3 -6 -4 3 -2 5 2 -8 0 8 6
-9 8 0 -7 -7 -5 -3 -7 8 -1 -3 5 5 1 -6 5
-2 -3 -9 9 -8 -5 -1 -8 4 8 1 3 -5 -7 0 -5
3 2 -3 8 3 -6 -5 -3 8 -5 4 2 3 0 -6 -9
0 -2 -8 9 7 8 -6 6 6 -4 7 -4 7 -1 1 9
2 1 5 -8 -1 -9 8 3 -9 -8 -5 -5 6 4 2 -4
-3 -4 5 3 -8 -9 1 -8 9 9 -3 -6 5 -4 -7 8
2 8 1 5 6 -3 9 6 8 6 -7 6 1 -1 -3 -9
6 -4 -5 2 -6 -7 -1 3 -3 0 7 1 -1 -1 5 8
0 0 8 -5 6 2 -6 -5 9 -6 9 0 3 6 8 7
-2 -3 -6 -7 5 -9 -1 1 2 -5 3 5 6 -4 -2 2
-1 5 -1 -8 -6 -1 -2 -1 2 5 4 -5 1 0 2 -7
8 -5 -9 3 -8 8 2 -3 9 4 -6 -8 -8 -3 -4 0
3 -3 5 -9 -4 3 -9 6 5 -5 -1 -3 9 7 2 -2
```
```in
16 16
4 -7 -5 -2 -4 3 -5 2 2 -8 1 -1 -7 6 -2 -6
-6 7 2 -5 -3 7 -9 -3 3 8 7 -2 -2 8 3 -7
4 -8 1 1 -1 3 -6 -4 3 -2 5 2 -8 0 8 6
-9 8 0 -7 -7 -5 -3 -7 8 -1 -3 5 5 1 -6 5
-2 -3 -9 9 -8 -5 -1 -8 4 8 1 3 -5 -7 0 -5
3 2 -3 8 3 -6 -5 -3 8 -5 4 2 3 0 -6 -9
0 -2 -8 9 7 8 -6 6 6 -4 7 -4 7 -1 1 9
2 1 5 -8 -1 -9 8 3 -9 -8 -5 -5 6 4 2 -4
-3 -4 5 3 -8 -9 1 -8 9 9 -3 -6 5 -4 -7 8
2 8 1 5 6 -3 9 6 8 6 -7 6 1 -1 -3 -9
6 -4 -5 2 -6 -7 -1 3 -3 0 7 1 -1 -1 5 8
0 0 8 -5 6 2 -6 -5 9 -6 9 0 3 6 8 7
-2 -3 -6 -7 5 -9 -1 1 2 -5 3 5 6 -4 -2 2
-1 5 -1 -8 -6 -1 -2 -1 2 5 4 -5 1 0 2 -7
8 -5 -9 3 -8 8 2 -3 9 4 -6 -8 -8 -3 -4 0
3 -3 5 -9 -4 3 -9 6 5 -5 -1 -3 9 7 2 -2
```
```in
32 4
4 -7 -5 -2 -4 3 -5 2 2 -8 1 -1 -7 6 -2 -6 -6 7 2 -5 -3 7 -9 -3 3 8 7 -2 -2 8 3 -7
4 -8 1 1 -1 3 -6 -4 3 -2 5 2 -8 0 8 6 -9 8 0 -7 -7 -5 -3 -7 8 -1 -3 5 5 1 -6 5
-2 -3 -9 9 -8 -5 -1 -8 4 8 1 3 -5 -7 0 -5 3 2 -3 8 3 -6 -5 -3 8 -5 4 2 3 0 -6 -9
0 -2 -8 9 7 8 -6 6 6 -4 7 -4 7 -1 1 9 2 1 5 -8 -1 -9 8 3 -9 -8 -5 -5 6 4 2 -4
-3 -4 5 3 -8 -9 1 -8 9 9 -3 -6 5 -4 -7 8 2 8 1 5 6 -3 9 6 8 6 -7 6 1 -1 -3 -9
6 -4 -5 2 -6 -7 -1 3 -3 0 7 1 -1 -1 5 8 0 0 8 -5 6 2 -6 -5 9 -6 9 0 3 6 8 7
-2 -3 -6 -7 5 -9 -1 1 2 -5 3 5 6 -4 -2 2 -1 5 -1 -8 -6 -1 -2 -1 2 5 4 -5 1 0 2 -7
8 -5 -9 3 -8 8 2 -3 9 4 -6 -8 -8 -3 -4 0 3 -3 5 -9 -4 3 -9 6 5 -5 -1 -3 9 7 2 -2
0 0 -5 1 -5 -7 -1 -3 5 9 5 0 4 8 -5 0 5 8 -4 8 9 7 9 -2 -3 8 5 -6 6 -1 -2 6
-5 -1 -1 -5 -7 -6 -8 -4 5 -7 -9 6 -8 -4 2 1 -4 -5 8 5 -1 1 6 1 9 -2 6 3 5 -3 2 -3
5 5 3 9 7 -2 -8 3 -7 -2 8 5 -6 0 8 7 3 0 7 -6 3 8 6 -9 -5 7 4 -6 -9 -9 -6 7
-5 -8 5 -4 9 6 -1 -2 -5 -1 5 -8 -9 4 -3 7 -7 -6 -7 4 8 8 8 -7 -6 2 0 9 -9 1 -4 -3
-8 2 -3 3 -4 4 -4 2 -5 3 1 2 8 -1 9 -4 -6 7 -9 -6 5 -2 3 -3 3 4 4 -5 -2 6 -6 8
-9 6 -3 -3 6 1 1 8 0 -6 3 -6 -9 3 3 -8 -3 2 9 -6 -4 3 -1 8 -9 7 9 -5 3 4 -9 5
-6 7 -2 9 -1 0 -1 7 9 5 0 8 9 0 -5 -8 7 -3 5 4 1 -8 -2 -2 -6 -1 5 5 -2 2 5 1
-6 2 8 8 5 -1 8 4 -4 -8 9 5 8 3 3 -7 -8 -6 -5 -4 -5 -9 -5 1 -7 4 -5 0 4 -2 2 2
1 -5 -5 7 -5 -3 -9 9 -6 -2 -6 -2 -2 2 0 6 -8 3 -3 1 -1 -6 9 -3 -9 6 -7 4 8 1 3 -6
-4 -3 -1 1 -9 0 -1 9 0 7 -1 -8 7 0 -3 8 9 -3 -4 0 -6 -2 -1 -2 5 -2 5 4 2 -2 -7 0
5 0 1 -3 1 9 6 -5 5 3 9 0 -3 -7 6 8 9 8 1 7 -5 5 -8 4 5 2 -8 6 -6 -8 -3 8
-6 -1 3 0 -5 5 9 4 2 6 -7 -6 -3 1 6 -7 5 3 7 0 6 6 5 4 -7 5 -3 0 2 -5 -6 -5
5 -2 5 7 -8 3 -7 0 3 -3 5 -4 6 -1 6 8 -8 -7 5 3 7 -3 9 1 -2 7 2 -3 -3 2 -4 -3
-3 -5 -8 -6 -1 8 -7 7 -3 1 3 -5 0 -7 -2 6 1 2 8 -1 -7 3 -6 -9 -4 -3 -3 -1 7 6 6 6
-8 5 -7 1 8 5 3 4 -5 0 0 0 0 -1 1 -3 -6 5 -2 7 0 -6 -6 -3 -5 -8 9 9 3 -9 3 -2
7 5 0 -6 9 -6 -1 -2 6 3 -3 9 -6 2 2 9 0 7 -8 0 1 -7 5 0 -4 2 2 -8 -6 9 3 8
6 5 -7 8 8 4 -6 9 -1 0 7 -4 9 -4 -9 3 -2 -3 9 -3 1 -3 -9 7 -9 2 6 3 2 9 -4 -6
-5 -6 2 -2 9 0 -4 7 -6 -9 2 8 6 -9 9 -8 -3 1 -7 0 9 -4 4 4 8 0 -1 -9 1 2 -3 3
-3 1 -6 7 9 -5 3 6 -7 9 8 -1 0 -3 5 3 -7 9 6 3 0 2 4 2 4 -8 3 7 -8 -6 0 -5
-3 1 0 -7 0 -9 -6 -3 2 7 -2 5 -4 7 5 6 -5 4 -9 1 6 -6 8 3 3 -6 7 -2 -8 0 0 -5
8 0 -4 -3 -1 7 -7 3 2 0 -3 7 6 -7 -1 2 -9 5 -8 -9 -2 1 0 4 -6 3 -8 4 4 4 7 0
-4 9 7 7 -1 -8 1 8 -1 -8 5 6 -1 8 -9 9 6 -6 -9 -8 0 7 6 0 5 1 -2 -9 -9 -6 6 -5
-1 0 -2 -7 -2 -8 2 7 -2 6 -6 -8 -5 8 -2 3 -9 0 1 5 -2 5 -1 8 1 0 3 -6 8 3 -8 1
4 -5 1 -3 8 6 0 0 -6 -1 4 1 -2 7 8 2 2 -6 4 -3 5 -6 9 5 -3 4 -7 7 -2 -8 2 -1
```
### Witness
```in
4 4
2 -1 0 0
-1 2 -1 0
0 -1 2 -1
0 0 -1 2
```

## Alone 2
Form: run
Write a program that reads a coarse vector y and applies the coarse operator Pᵀ A P to it as three steps in turn, never forming its matrix: first x = P y, then w = A x, then z = Pᵀ w. A acts on a line of n sites as (Ax)ᵢ = d·xᵢ − xᵢ₋₁ − xᵢ₊₁, with a missing neighbour taken as 0. The aggregates are the blocks of a neighbouring sites: sites 0 to a − 1, then a to 2a − 1, and so on. P has one column per aggregate, with 1/√a on the sites of that aggregate and 0 elsewhere. Work in double.
Input: n, a and d on the first line, then y₀ … y_{n/a−1} on one line.
Output: one line, z₀ … z_{n/a−1}, each as std::format prints a double with {}, separated by spaces.
Limits: 1 ≤ n ≤ 64; a is 1, 4 or 16, and a divides n; d is a whole number from 2 to 10; each yᵢ is a whole number from −100 to 100.
### Examples
```in
3 1 2
1 2 3
```
```out
0 0 4
```
```in
1 1 5
-3
```
```out
-15
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    std::size_t n {0};
    std::size_t a {0};
    double d {0.0};
    std::cin >> n >> a >> d;
    std::size_t k {n / a};
    std::vector<double> y(k, 0.0);
    for (double& e : y) {
        std::cin >> e;
    }
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::vector<double> x(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        x[i] = w * y[i / a];
    }
    std::vector<double> ax(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        ax[i] = d * x[i] - left - right;
    }
    std::vector<double> z(k, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        z[i / a] = z[i / a] + w * ax[i];
    }
    for (double e : z) {
        std::print("{} ", e);
    }
    std::println();
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
    std::size_t n {0};
    std::size_t a {0};
    double d {0.0};
    std::cin >> n >> a >> d;
    std::size_t k {n / a};
    std::vector<double> y(k, 0.0);
    for (double& e : y) {
        std::cin >> e;
    }
    double w {1.0 / std::sqrt(static_cast<double>(a))};
    std::vector<double> x(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        x[i] = w * y[i / a];
    }
    std::vector<double> ax(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        ax[i] = d * x[i] - left - right;
    }
    std::vector<double> z(k, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        z[i / a] = z[i / a] + ax[i] / static_cast<double>(a);
    }
    for (double e : z) {
        std::print("{} ", e);
    }
    std::println();
}
```
### Tests
```in
1 1 2
100
```
```in
8 4 2
3 -2
```
```in
16 16 3
5
```
```in
64 16 10
100 -100 37 -1
```
```in
64 4 2
-100 -63 -26 11 48 85 -79 -42 -5 32 69 -95 -58 -21 16 53
```
### Witness
```in
4 4 2
1
```
