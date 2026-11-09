# 9.23 The smoother of a two-level cycle
Part: the smoother of that cycle: the residual after each of a stated number of sweeps
Clause: [dcl.pre], [expr.const], [expr.add], [expr.mul], [c.math.abs]
After: 9.22
Levels: c++23
Source: Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §13.2 (the model problem and its modes), §13.4.1 (smoothers: damped Jacobi and its weight, red-black Gauss-Seidel) and §13.5 (two-grid analysis: the smoother damps the oscillatory part)

## Example
```cpp
#include <cmath>
#include <print>
#include <vector>

double sweep(const std::vector<double>& b,
             std::vector<double>& x)
{
    std::size_t n {x.size()};
    std::vector<double> next(n, 0.0);
    double top {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        double left {i > 0 ? x[i - 1] : 0.0};
        double right {i + 1 < n ? x[i + 1] : 0.0};
        double r {b[i] - (2.0 * x[i] - left - right)};
        top = std::fmax(top, std::fabs(r));
        next[i] = x[i] + r / 4.0;
    }
    x = next;
    return top;
}

int main()
{
    //: Take b that changes sign at every site, and b all ones.
    std::vector<double> rough {1, -1, 1, -1, 1, -1, 1, -1};
    std::vector<double> smooth(8, 1.0);
    std::vector<double> x(8, 0.0);
    std::vector<double> y(8, 0.0);
    //: Sweep: r = b − Ax at every site first, then x += r/4.
    sweep(rough, x);
    sweep(smooth, y);
    //: Print the largest |rᵢ| after each of 6 sweeps.
    for (int s {1}; s <= 6; ++s) {
        double a {sweep(rough, x)};
        double c {sweep(smooth, y)};
        std::println("{}: {} {}", s, a, c);
    }
    //: See the rough residual fall and the smooth one stay.
    std::println("the smooth part is left to the coarse level");
}
```

## Verdict 1
```cpp
#include <array>

using Ring = std::array<double, 8>;

constexpr double largest(double weight, int sweeps)
{
    Ring x {1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, -1.0};
    for (int s {0}; s < sweeps; ++s) {
        Ring next {};
        for (int i {0}; i < 8; ++i) {
            double near {x[(i + 7) % 8] + x[(i + 1) % 8]};
            double r {0.0 - (2.0 * x[i] - near)};
            next[i] = x[i] + weight * r / 2.0;
        }
        x = next;
    }
    double top {0.0};
    for (double e : x) {
        top = e > top ? e : top;
    }
    return top;
}

int main()
{
    static_assert(largest(0.5, 1) == 0.0);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>

using Ring = std::array<double, 8>;

constexpr double largest(double weight, int sweeps)
{
    Ring x {1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, -1.0};
    for (int s {0}; s < sweeps; ++s) {
        Ring next {};
        for (int i {0}; i < 8; ++i) {
            double near {x[(i + 7) % 8] + x[(i + 1) % 8]};
            double r {0.0 - (2.0 * x[i] - near)};
            next[i] = x[i] + weight * r / 2.0;
        }
        x = next;
    }
    double top {0.0};
    for (double e : x) {
        top = e > top ? e : top;
    }
    return top;
}

int main()
{
    static_assert(largest(1.0, 10) < 1.0);
}
```
Answer: c++23 ill-formed 26

## Alone 1
Form: run
Write a program that reads n, k and b, and does k damped Jacobi sweeps on A x = b from x = 0. A acts on a line of n sites as (Ax)ᵢ = 2xᵢ − xᵢ₋₁ − xᵢ₊₁, with a missing neighbour taken as 0. A sweep computes r = b − Ax at every site from the x before the sweep, then adds rᵢ/4 to each xᵢ. Work in double.
Input: n and k on the first line, then b₀ … bₙ₋₁ on one line.
Output: k lines: after each sweep, the largest |rᵢ| of the new residual r = b − Ax, as std::format prints a double with {}.
Limits: 1 ≤ n ≤ 64; 1 ≤ k ≤ 10; each bᵢ is a whole number from −100 to 100.
### Examples
```in
1 3
4
```
```out
2
1
0.5
```
```in
1 1
-7
```
```out
3.5
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
    int k {0};
    std::cin >> n >> k;
    std::vector<double> b(n, 0.0);
    for (double& e : b) {
        std::cin >> e;
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> next(n, 0.0);
    for (int s {0}; s <= k; ++s) {
        double top {0.0};
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? x[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            double r {b[i] - (2.0 * x[i] - left - right)};
            top = std::fmax(top, std::fabs(r));
            next[i] = x[i] + r / 4.0;
        }
        if (s > 0) {
            std::println("{}", top);
        }
        x = next;
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
    int k {0};
    std::cin >> n >> k;
    std::vector<double> b(n, 0.0);
    for (double& e : b) {
        std::cin >> e;
    }
    std::vector<double> x(n, 0.0);
    std::vector<double> next(n, 0.0);
    for (int s {0}; s <= k; ++s) {
        double top {0.0};
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? next[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            double r {b[i] - (2.0 * x[i] - left - right)};
            top = std::fmax(top, std::fabs(r));
            next[i] = x[i] + r / 4.0;
        }
        if (s > 0) {
            std::println("{}", top);
        }
        x = next;
    }
}
```
### Tests
```in
1 10
-100
```
```in
8 4
1 -1 1 -1 1 -1 1 -1
```
```in
8 4
1 1 1 1 1 1 1 1
```
```in
64 10
-100 -63 -26 11 48 85 -79 -42 -5 32 69 -95 -58 -21 16 53 90 -74 -37 0 37 74 -90 -53 -16 21 58 95 -69 -32 5 42 79 -85 -48 -11 26 63 100 -64 -27 10 47 84 -80 -43 -6 31 68 -96 -59 -22 15 52 89 -75 -38 -1 36 73 -91 -54 -17 20
```
### Witness
```in
2 2
1 1
```

## Alone 2
Form: run
Write a program that reads n, k and b, and does k red-black Gauss-Seidel sweeps on A x = b from x = 0. A acts on a line of n sites as (Ax)ᵢ = 2xᵢ − xᵢ₋₁ − xᵢ₊₁, with a missing neighbour taken as 0. A sweep visits the even sites 0, 2, 4, … first, then the odd sites 1, 3, 5, …, and at each site i sets xᵢ = (bᵢ + xᵢ₋₁ + xᵢ₊₁) / 2, using the newest values. Work in double.
Input: n and k on the first line, then b₀ … bₙ₋₁ on one line.
Output: k lines: after each sweep, the largest |rᵢ| of the residual r = b − Ax, as std::format prints a double with {}.
Limits: 1 ≤ n ≤ 64; 1 ≤ k ≤ 10; each bᵢ is a whole number from −100 to 100.
### Examples
```in
1 2
4
```
```out
0
0
```
```in
2 2
1 1
```
```out
0.75
0.1875
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
    int k {0};
    std::cin >> n >> k;
    std::vector<double> b(n, 0.0);
    for (double& e : b) {
        std::cin >> e;
    }
    std::size_t h {(n + 1) / 2};
    std::vector<double> x(n, 0.0);
    for (int s {0}; s < k; ++s) {
        for (std::size_t j {0}; j < n; ++j) {
            std::size_t i {j < h ? 2 * j : 2 * (j - h) + 1};
            double left {i > 0 ? x[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            x[i] = (b[i] + left + right) / 2.0;
        }
        double top {0.0};
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? x[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            double r {b[i] - (2.0 * x[i] - left - right)};
            top = std::fmax(top, std::fabs(r));
        }
        std::println("{}", top);
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
    int k {0};
    std::cin >> n >> k;
    std::vector<double> b(n, 0.0);
    for (double& e : b) {
        std::cin >> e;
    }
    std::size_t h {(n + 1) / 2};
    std::vector<double> x(n, 0.0);
    for (int s {0}; s < k; ++s) {
        for (std::size_t j {0}; j < n; ++j) {
            std::size_t i {j};
            double left {i > 0 ? x[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            x[i] = (b[i] + left + right) / 2.0;
        }
        double top {0.0};
        for (std::size_t i {0}; i < n; ++i) {
            double left {i > 0 ? x[i - 1] : 0.0};
            double right {i + 1 < n ? x[i + 1] : 0.0};
            double r {b[i] - (2.0 * x[i] - left - right)};
            top = std::fmax(top, std::fabs(r));
        }
        std::println("{}", top);
    }
}
```
### Tests
```in
1 1
-100
```
```in
8 4
1 -1 1 -1 1 -1 1 -1
```
```in
5 3
0 0 100 0 0
```
```in
64 10
-100 -63 -26 11 48 85 -79 -42 -5 32 69 -95 -58 -21 16 53 90 -74 -37 0 37 74 -90 -53 -16 21 58 95 -69 -32 5 42 79 -85 -48 -11 26 63 100 -64 -27 10 47 84 -80 -43 -6 31 68 -96 -59 -22 15 52 89 -75 -38 -1 36 73 -91 -54 -17 20
```
### Witness
```in
3 3
1 2 3
```
