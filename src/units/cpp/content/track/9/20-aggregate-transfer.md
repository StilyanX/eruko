# 9.20 Restriction and prolongation by aggregates
Part: restriction and prolongation by aggregates: the transpose of the prolongator times the prolongator is the identity
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul], [c.math.sqrt]
After: none
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §13.3 (intergrid operations: prolongation and restriction, the restriction as the transpose of the prolongation) and §13.6 (algebraic multigrid: the coarse space from the matrix, not a grid)

## Example
```cpp
#include <array>
#include <cmath>
#include <print>

int main()
{
    //: Group 8 sites into 2 aggregates of 4 neighbours each.
    std::array<std::size_t, 8> agg {0, 0, 0, 0, 1, 1, 1, 1};
    std::array<double, 8> v {1, 2, 2, 4, 3, 4, 0, 0};
    //: Scale v to length 1 on each aggregate: that is P.
    std::array<double, 2> len {0.0, 0.0};
    for (std::size_t i {0}; i < 8; ++i) {
        len[agg[i]] = len[agg[i]] + v[i] * v[i];
    }
    std::array<double, 8> p {};
    for (std::size_t i {0}; i < 8; ++i) {
        p[i] = v[i] / std::sqrt(len[agg[i]]);
    }
    //: Prolong a coarse y: site i takes p[i] times its y.
    std::array<double, 2> y {3.0, -2.0};
    std::array<double, 8> x {};
    for (std::size_t i {0}; i < 8; ++i) {
        x[i] = p[i] * y[agg[i]];
    }
    //: Restrict by Pᵀ: aggregate I sums p[i] x[i] on its sites.
    std::array<double, 2> z {0.0, 0.0};
    for (std::size_t i {0}; i < 8; ++i) {
        z[agg[i]] = z[agg[i]] + p[i] * x[i];
    }
    //: See y again: PᵀP is the identity, so Pᵀ undoes P.
    std::println("{:.6f} {:.6f}", z[0], z[1]);
}
```

## Verdict 1
```cpp
#include <array>

using Coarse = std::array<double, 2>;

constexpr std::array<int, 8> agg {0, 0, 0, 0, 1, 1, 1, 1};

constexpr Coarse there_and_back(Coarse y)
{
    std::array<double, 8> x {};
    for (int i {0}; i < 8; ++i) {
        x[i] = 0.5 * y[agg[i]];
    }
    Coarse z {0.0, 0.0};
    for (int i {0}; i < 8; ++i) {
        z[agg[i]] = z[agg[i]] + 0.5 * x[i];
    }
    return z;
}

int main()
{
    constexpr Coarse y {3.0, -2.0};
    static_assert(there_and_back(y) == y);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

using Coarse = std::array<double, 2>;

constexpr std::array<int, 8> agg {0, 0, 1, 1, 1, 1, 1, 1};

constexpr Coarse there_and_back(Coarse y)
{
    std::array<double, 8> x {};
    for (int i {0}; i < 8; ++i) {
        x[i] = 0.5 * y[agg[i]];
    }
    Coarse z {0.0, 0.0};
    for (int i {0}; i < 8; ++i) {
        z[agg[i]] = z[agg[i]] + 0.5 * x[i];
    }
    return z;
}

int main()
{
    constexpr Coarse y {3.0, -2.0};
    static_assert(there_and_back(y) == y);
}
```
Answer: c++23 ill-formed 23

## Alone 1
Form: run
Write a program that reads n sites, the aggregate of each site and a test vector v, and builds the prolongator P by aggregates. P has one column for each aggregate. Column I holds v on the sites of aggregate I, scaled to length 1, and 0 on every other site. Then print PᵀP: entry (I, J) is the sum over all sites i of P(i, I) × P(i, J). Work in double.
Input: n and m on the first line, then the aggregate of each of the n sites, each from 0 to m − 1, then v₀ … vₙ₋₁.
Output: m lines, row I of PᵀP, each entry with 6 digits after the point, separated by spaces.
Limits: 1 ≤ m ≤ n ≤ 64, m ≤ 8; every aggregate has a site; each vᵢ is a whole number from 0 to 9, and v is not all 0 on any aggregate.
### Examples
```in
3 3
0 1 2
1 1 1
```
```out
1.000000 0.000000 0.000000
0.000000 1.000000 0.000000
0.000000 0.000000 1.000000
```
```in
4 2
0 0 1 1
1 0 0 1
```
```out
1.000000 0.000000
0.000000 1.000000
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
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<std::size_t> agg(n, 0);
    for (std::size_t& g : agg) {
        std::cin >> g;
    }
    std::vector<double> v(n, 0.0);
    for (double& e : v) {
        std::cin >> e;
    }
    std::vector<double> len(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        len[agg[i]] = len[agg[i]] + v[i] * v[i];
    }
    std::vector<double> p(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        p[i] = v[i] / std::sqrt(len[agg[i]]);
    }
    for (std::size_t r {0}; r < m; ++r) {
        for (std::size_t c {0}; c < m; ++c) {
            double s {0.0};
            for (std::size_t i {0}; i < n; ++i) {
                double pr {agg[i] == r ? p[i] : 0.0};
                double pc {agg[i] == c ? p[i] : 0.0};
                s = s + pr * pc;
            }
            std::print("{:.6f} ", s);
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
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<std::size_t> agg(n, 0);
    for (std::size_t& g : agg) {
        std::cin >> g;
    }
    std::vector<double> v(n, 0.0);
    for (double& e : v) {
        std::cin >> e;
    }
    std::vector<double> len(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        len[agg[i]] = len[agg[i]] + v[i] * v[i];
    }
    std::vector<double> p(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        p[i] = v[i] / len[agg[i]];
    }
    for (std::size_t r {0}; r < m; ++r) {
        for (std::size_t c {0}; c < m; ++c) {
            double s {0.0};
            for (std::size_t i {0}; i < n; ++i) {
                double pr {agg[i] == r ? p[i] : 0.0};
                double pc {agg[i] == c ? p[i] : 0.0};
                s = s + pr * pc;
            }
            std::print("{:.6f} ", s);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
0
7
```
```in
8 2
0 0 0 0 1 1 1 1
1 2 2 4 3 4 0 0
```
```in
6 3
2 0 1 0 2 1
3 4 1 0 1 1
```
```in
64 8
0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
```
### Witness
```in
2 1
0 0
1 1
```

## Alone 2
Form: run
Write a program that reads n sites, the aggregate of each site, a test vector v and a coarse vector y, and builds the prolongator P by aggregates. Column I of P holds v on the sites of aggregate I, scaled to length 1, and 0 elsewhere. Prolong y to the sites, x = P y, then restrict x back, z = Pᵀ x, where zᵢ sums P(i, I) × xᵢ over the sites i of aggregate I. Work in double.
Input: n and m on the first line, then the aggregate of each of the n sites, each from 0 to m − 1, then v₀ … vₙ₋₁, then y₀ … yₘ₋₁.
Output: two lines: x₀ … xₙ₋₁, then z₀ … zₘ₋₁, each with 6 digits after the point, separated by spaces.
Limits: 1 ≤ m ≤ n ≤ 64; every aggregate has a site; each vᵢ is a whole number from 0 to 9, and v is not all 0 on any aggregate; each yᵢ is a whole number from 1 to 100.
### Examples
```in
3 3
0 1 2
1 1 1
5 7 9
```
```out
5.000000 7.000000 9.000000
5.000000 7.000000 9.000000
```
```in
4 2
0 0 1 1
1 0 0 1
5 2
```
```out
5.000000 0.000000 0.000000 2.000000
5.000000 2.000000
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
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<std::size_t> agg(n, 0);
    for (std::size_t& g : agg) {
        std::cin >> g;
    }
    std::vector<double> v(n, 0.0);
    for (double& e : v) {
        std::cin >> e;
    }
    std::vector<double> y(m, 0.0);
    for (double& e : y) {
        std::cin >> e;
    }
    std::vector<double> len(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        len[agg[i]] = len[agg[i]] + v[i] * v[i];
    }
    std::vector<double> x(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        x[i] = v[i] / std::sqrt(len[agg[i]]) * y[agg[i]];
        std::print("{:.6f} ", x[i]);
    }
    std::println();
    std::vector<double> z(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        double p {v[i] / std::sqrt(len[agg[i]])};
        z[agg[i]] = z[agg[i]] + p * x[i];
    }
    for (double e : z) {
        std::print("{:.6f} ", e);
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
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<std::size_t> agg(n, 0);
    for (std::size_t& g : agg) {
        std::cin >> g;
    }
    std::vector<double> v(n, 0.0);
    for (double& e : v) {
        std::cin >> e;
    }
    std::vector<double> y(m, 0.0);
    for (double& e : y) {
        std::cin >> e;
    }
    std::vector<double> len(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        len[agg[i]] = len[agg[i]] + v[i] * v[i];
    }
    std::vector<double> x(n, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        x[i] = v[i] / std::sqrt(len[agg[i]]) * y[agg[i]];
        std::print("{:.6f} ", x[i]);
    }
    std::println();
    std::vector<double> z(m, 0.0);
    for (std::size_t i {0}; i < n; ++i) {
        double p {1.0};
        z[agg[i]] = z[agg[i]] + p * x[i];
    }
    for (double e : z) {
        std::print("{:.6f} ", e);
    }
    std::println();
}
```
### Tests
```in
1 1
0
9
1
```
```in
4 2
0 1 1 0
1 2 2 4
5 2
```
```in
6 3
2 0 1 0 2 1
3 4 1 0 1 1
10 20 30
```
```in
64 4
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
100 1 37 64
```
### Witness
```in
2 1
0 0
1 1
3
```
