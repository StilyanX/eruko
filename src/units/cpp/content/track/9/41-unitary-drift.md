# 9.41 The loss of orthonormality in a long product of unitary matrices
Part: the loss of orthonormality in a product of many 3 by 3 complex matrices, and its repair by Gram-Schmidt
Clause: [complex.numbers], [complex.value.ops], [expr.add], [expr.mul], [c.math.sqrt]
After: 9.24, 9.38
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §3.5 (matrix multiplication: each product adds rounding errors) and §19.8 (Gram-Schmidt orthogonalization)

## Example
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using M = std::array<std::array<C, 3>, 3>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

M times(const M& a, const M& b)
{
    M c {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C s {0.0f, 0.0f};
            for (int k {0}; k < 3; ++k) {
                s = s + mul(a[i][k], b[k][j]);
            }
            c[i][j] = s;
        }
    }
    return c;
}

C inner(const std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C s {0.0f, 0.0f};
    for (int k {0}; k < 3; ++k) {
        s = s + mul(u[k], std::conj(v[k]));
    }
    return s;
}

void unit(std::array<C, 3>& u)
{
    float len {std::sqrt(inner(u, u).real())};
    for (C& z : u) {
        z = C {z.real() / len, z.imag() / len};
    }
}

void minus(std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C h {inner(u, v)};
    for (int k {0}; k < 3; ++k) {
        u[k] = u[k] - mul(h, v[k]);
    }
}

double deviation(const M& w)
{
    double top {0.0};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            std::complex<double> s {i == j ? -1.0 : 0.0, 0.0};
            for (int k {0}; k < 3; ++k) {
                std::complex<double> a {w[i][k]};
                std::complex<double> b {std::conj(w[j][k])};
                s = s + a * b;
            }
            top = std::fmax(top, std::fabs(s.real()));
            top = std::fmax(top, std::fabs(s.imag()));
        }
    }
    return top;
}

int main()
{
    //: Take a unitary U whose entries round in float.
    M u {{{C {0.36f, 0.48f}, C {0.64f, -0.48f}, C {}},
          {C {-0.64f, -0.48f}, C {0.36f, -0.48f}, C {}},
          {C {}, C {}, C {0.6f, 0.8f}}}};
    M w {{{C {1.0f}, C {}, C {}}, {C {}, C {1.0f}, C {}},
          {C {}, C {}, C {1.0f}}}};
    //: Multiply on: the rows of W drift from orthonormal.
    for (int s {1}; s <= 100000; ++s) {
        w = times(w, u);
        if (s % 20000 == 0) {
            std::println("{}: {:.1e}", s, deviation(w));
        }
    }
    //: Repair by Gram-Schmidt: make row 0 a unit row.
    unit(w[0]);
    //: Take row 0 out of row 1, then make row 1 a unit row.
    minus(w[1], w[0]);
    unit(w[1]);
    //: Take rows 0 and 1 out of row 2; make it a unit row.
    minus(w[2], w[0]);
    minus(w[2], w[1]);
    unit(w[2]);
    //: See the drift gone, down to a few roundings.
    std::println("repaired: {:.1e}", deviation(w));
}
```

## Verdict 1
```cpp
#include <algorithm>
#include <array>
#include <complex>

using C = std::complex<float>;
using Row = std::array<C, 3>;
using M = std::array<Row, 3>;

constexpr M u {{{C {0.36f, 0.48f}, C {0.64f, -0.48f}, C {}},
                {C {-0.64f, -0.48f}, C {0.36f, -0.48f}, C {}},
                {C {}, C {}, C {0.6f, 0.8f}}}};

constexpr C inner(const Row& a, const Row& b)
{
    return a[0] * std::conj(b[0]) + a[1] * std::conj(b[1])
           + a[2] * std::conj(b[2]);
}

constexpr float root(float x)
{
    float r {1.0f};
    for (int i {0}; i < 20; ++i) {
        r = 0.5f * (r + x / r);
    }
    return r;
}

constexpr void unit(Row& a)
{
    float len {root(inner(a, a).real())};
    for (C& z : a) {
        z = z / len;
    }
}

constexpr void minus(Row& a, const Row& b)
{
    C h {inner(a, b)};
    for (int k {0}; k < 3; ++k) {
        a[k] = a[k] - h * b[k];
    }
}

constexpr float deviation(int steps, bool repair)
{
    M w {{{C {1.0f}, C {}, C {}}, {C {}, C {1.0f}, C {}},
          {C {}, C {}, C {1.0f}}}};
    for (int s {0}; s < steps; ++s) {
        M next {};
        for (int i {0}; i < 3; ++i) {
            for (int j {0}; j < 3; ++j) {
                C s {w[i][0] * u[0][j]};
                s = s + w[i][1] * u[1][j];
                next[i][j] = s + w[i][2] * u[2][j];
            }
        }
        w = next;
    }
    if (repair) {
        unit(w[0]);
        minus(w[1], w[0]);
        unit(w[1]);
        minus(w[2], w[0]);
        minus(w[2], w[1]);
        unit(w[2]);
    }
    float top {0.0f};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C e {inner(w[i], w[j]) - C {i == j ? 1.0f : 0.0f}};
            top = std::max({top, e.real(), -e.real(), e.imag(),
                            -e.imag()});
        }
    }
    return top;
}

int main()
{
    static_assert(deviation(2000, true) < 1e-6f);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <algorithm>
#include <array>
#include <complex>

using C = std::complex<float>;
using Row = std::array<C, 3>;
using M = std::array<Row, 3>;

constexpr M u {{{C {0.36f, 0.48f}, C {0.64f, -0.48f}, C {}},
                {C {-0.64f, -0.48f}, C {0.36f, -0.48f}, C {}},
                {C {}, C {}, C {0.6f, 0.8f}}}};

constexpr C inner(const Row& a, const Row& b)
{
    return a[0] * std::conj(b[0]) + a[1] * std::conj(b[1])
           + a[2] * std::conj(b[2]);
}

constexpr float root(float x)
{
    float r {1.0f};
    for (int i {0}; i < 20; ++i) {
        r = 0.5f * (r + x / r);
    }
    return r;
}

constexpr void unit(Row& a)
{
    float len {root(inner(a, a).real())};
    for (C& z : a) {
        z = z / len;
    }
}

constexpr void minus(Row& a, const Row& b)
{
    C h {inner(a, b)};
    for (int k {0}; k < 3; ++k) {
        a[k] = a[k] - h * b[k];
    }
}

constexpr float deviation(int steps, bool repair)
{
    M w {{{C {1.0f}, C {}, C {}}, {C {}, C {1.0f}, C {}},
          {C {}, C {}, C {1.0f}}}};
    for (int s {0}; s < steps; ++s) {
        M next {};
        for (int i {0}; i < 3; ++i) {
            for (int j {0}; j < 3; ++j) {
                C s {w[i][0] * u[0][j]};
                s = s + w[i][1] * u[1][j];
                next[i][j] = s + w[i][2] * u[2][j];
            }
        }
        w = next;
    }
    if (repair) {
        unit(w[0]);
        minus(w[1], w[0]);
        unit(w[1]);
        minus(w[2], w[0]);
        minus(w[2], w[1]);
        unit(w[2]);
    }
    float top {0.0f};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C e {inner(w[i], w[j]) - C {i == j ? 1.0f : 0.0f}};
            top = std::max({top, e.real(), -e.real(), e.imag(),
                            -e.imag()});
        }
    }
    return top;
}

int main()
{
    static_assert(deviation(2000, false) < 1e-6f);
}
```
Answer: c++23 ill-formed 80

## Alone 1
Form: run
Write a program that reads a 3 by 3 complex matrix U with orthonormal rows and a count N, forms W = U^N in float, and prints how far W is from having orthonormal rows, before and after a repair by Gram-Schmidt. Start from W = I and set W to W·U, N times; entry (i, j) of W·U sums W(i, k)·U(k, j) for k = 0, 1, 2, from 0. Take each complex product x·y as (Re x·Re y − Im x·Im y) + (Re x·Im y + Im x·Re y)i, from left to right. The inner product ⟨a, b⟩ of two rows sums aₖ·conj(bₖ) for k = 0, 1, 2, from 0. The repair: divide row 0 by its length √(Re⟨r₀, r₀⟩), each part on its own. Then set r₁ to r₁ − ⟨r₁, r₀⟩·r₀ and divide it by its length. Then set r₂ to r₂ − ⟨r₂, r₀⟩·r₀, then to r₂ − ⟨r₂, r₁⟩·r₁, and divide it by its length. The distance: for each i and j, compute e = Σₖ W(i, k)·conj(W(j, k)) − δᵢⱼ in double from the float entries, starting from −δᵢⱼ, k from 0 to 2. It is the largest |Re e| or |Im e| over all i and j.
Input: N on the first line, then the three rows of U, one to a line, each as three complex numbers, each as its real part then its imaginary part.
Output: one line: the distance before the repair, then after it, each as std::format prints a double with {:.1e}.
Limits: 1 ≤ N ≤ 1000000; each part of U has at most two digits after the point, and the rows of U are orthonormal in exact arithmetic.
### Examples
```in
1
1 0 0 0 0 0
0 0 1 0 0 0
0 0 0 0 1 0
```
```out
0.0e+00 0.0e+00
```
```in
10
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
0 0 0 0 1 0
```
```out
5.2e-07 4.4e-08
```
### Reference
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using M = std::array<std::array<C, 3>, 3>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

M times(const M& a, const M& b)
{
    M c {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C s {0.0f, 0.0f};
            for (int k {0}; k < 3; ++k) {
                s = s + mul(a[i][k], b[k][j]);
            }
            c[i][j] = s;
        }
    }
    return c;
}

C inner(const std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C s {0.0f, 0.0f};
    for (int k {0}; k < 3; ++k) {
        s = s + mul(u[k], std::conj(v[k]));
    }
    return s;
}

void unit(std::array<C, 3>& u)
{
    float len {std::sqrt(inner(u, u).real())};
    for (C& z : u) {
        z = C {z.real() / len, z.imag() / len};
    }
}

void minus(std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C h {inner(u, v)};
    for (int k {0}; k < 3; ++k) {
        u[k] = u[k] - mul(h, v[k]);
    }
}

double deviation(const M& w)
{
    double top {0.0};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            std::complex<double> s {i == j ? -1.0 : 0.0, 0.0};
            for (int k {0}; k < 3; ++k) {
                std::complex<double> a {w[i][k]};
                std::complex<double> b {std::conj(w[j][k])};
                s = s + a * b;
            }
            top = std::fmax(top, std::fabs(s.real()));
            top = std::fmax(top, std::fabs(s.imag()));
        }
    }
    return top;
}

int main()
{
    int n {0};
    std::cin >> n;
    M u {};
    for (auto& row : u) {
        for (C& z : row) {
            float re {0.0f};
            float im {0.0f};
            std::cin >> re >> im;
            z = C {re, im};
        }
    }
    M w {};
    for (int i {0}; i < 3; ++i) {
        w[i][i] = C {1.0f, 0.0f};
    }
    for (int s {0}; s < n; ++s) {
        w = times(w, u);
    }
    std::print("{:.1e} ", deviation(w));
    unit(w[0]);
    minus(w[1], w[0]);
    unit(w[1]);
    minus(w[2], w[0]);
    minus(w[2], w[1]);
    unit(w[2]);
    std::println("{:.1e}", deviation(w));
}
```
### Wrong
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using M = std::array<std::array<C, 3>, 3>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

M times(const M& a, const M& b)
{
    M c {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C s {0.0f, 0.0f};
            for (int k {0}; k < 3; ++k) {
                s = s + mul(a[i][k], b[k][j]);
            }
            c[i][j] = s;
        }
    }
    return c;
}

C inner(const std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C s {0.0f, 0.0f};
    for (int k {0}; k < 3; ++k) {
        s = s + mul(u[k], v[k]);
    }
    return s;
}

void unit(std::array<C, 3>& u)
{
    float len {std::sqrt(inner(u, u).real())};
    for (C& z : u) {
        z = C {z.real() / len, z.imag() / len};
    }
}

void minus(std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C h {inner(u, v)};
    for (int k {0}; k < 3; ++k) {
        u[k] = u[k] - mul(h, v[k]);
    }
}

double deviation(const M& w)
{
    double top {0.0};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            std::complex<double> s {i == j ? -1.0 : 0.0, 0.0};
            for (int k {0}; k < 3; ++k) {
                std::complex<double> a {w[i][k]};
                std::complex<double> b {std::conj(w[j][k])};
                s = s + a * b;
            }
            top = std::fmax(top, std::fabs(s.real()));
            top = std::fmax(top, std::fabs(s.imag()));
        }
    }
    return top;
}

int main()
{
    int n {0};
    std::cin >> n;
    M u {};
    for (auto& row : u) {
        for (C& z : row) {
            float re {0.0f};
            float im {0.0f};
            std::cin >> re >> im;
            z = C {re, im};
        }
    }
    M w {};
    for (int i {0}; i < 3; ++i) {
        w[i][i] = C {1.0f, 0.0f};
    }
    for (int s {0}; s < n; ++s) {
        w = times(w, u);
    }
    std::print("{:.1e} ", deviation(w));
    unit(w[0]);
    minus(w[1], w[0]);
    unit(w[1]);
    minus(w[2], w[0]);
    minus(w[2], w[1]);
    unit(w[2]);
    std::println("{:.1e}", deviation(w));
}
```
### Tests
```in
100000
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
0 0 0 0 1 0
```
```in
1
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
```in
1000000
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
```in
100
0 0 1 0 0 0
0 0 0 0 -1 0
0 1 0 0 0 0
```
### Witness
```in
1000
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```

## Alone 2
Form: run
Write a program that reads a 3 by 3 complex matrix U with orthonormal rows, a count N and a period m, forms W = U^N in float with a repair by Gram-Schmidt after every m-th product, and prints how far the final W is from having orthonormal rows. Start from W = I. For s = 1, 2, …, N, set W to W·U, then repair W if s is a multiple of m. Entry (i, j) of W·U sums W(i, k)·U(k, j) for k = 0, 1, 2, from 0. Take each complex product x·y as (Re x·Re y − Im x·Im y) + (Re x·Im y + Im x·Re y)i, from left to right. The inner product ⟨a, b⟩ of two rows sums aₖ·conj(bₖ) for k = 0, 1, 2, from 0. The repair: divide row 0 by its length √(Re⟨r₀, r₀⟩), each part on its own. Then set r₁ to r₁ − ⟨r₁, r₀⟩·r₀ and divide it by its length. Then set r₂ to r₂ − ⟨r₂, r₀⟩·r₀, then to r₂ − ⟨r₂, r₁⟩·r₁, and divide it by its length. The distance: for each i and j, compute e = Σₖ W(i, k)·conj(W(j, k)) − δᵢⱼ in double from the float entries, starting from −δᵢⱼ, k from 0 to 2. It is the largest |Re e| or |Im e| over all i and j.
Input: N and m on the first line, then the three rows of U, one to a line, each as three complex numbers, each as its real part then its imaginary part.
Output: one line, the distance, as std::format prints a double with {:.1e}.
Limits: 1 ≤ N ≤ 1000000; 1 ≤ m ≤ 1000001; each part of U has at most two digits after the point, and the rows of U are orthonormal in exact arithmetic.
### Examples
```in
100000 1
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
0 0 0 0 1 0
```
```out
5.6e-08
```
```in
100000 1000
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
0 0 0 0 1 0
```
```out
6.5e-08
```
### Reference
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using M = std::array<std::array<C, 3>, 3>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

M times(const M& a, const M& b)
{
    M c {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C s {0.0f, 0.0f};
            for (int k {0}; k < 3; ++k) {
                s = s + mul(a[i][k], b[k][j]);
            }
            c[i][j] = s;
        }
    }
    return c;
}

C inner(const std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C s {0.0f, 0.0f};
    for (int k {0}; k < 3; ++k) {
        s = s + mul(u[k], std::conj(v[k]));
    }
    return s;
}

void unit(std::array<C, 3>& u)
{
    float len {std::sqrt(inner(u, u).real())};
    for (C& z : u) {
        z = C {z.real() / len, z.imag() / len};
    }
}

void minus(std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C h {inner(u, v)};
    for (int k {0}; k < 3; ++k) {
        u[k] = u[k] - mul(h, v[k]);
    }
}

double deviation(const M& w)
{
    double top {0.0};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            std::complex<double> s {i == j ? -1.0 : 0.0, 0.0};
            for (int k {0}; k < 3; ++k) {
                std::complex<double> a {w[i][k]};
                std::complex<double> b {std::conj(w[j][k])};
                s = s + a * b;
            }
            top = std::fmax(top, std::fabs(s.real()));
            top = std::fmax(top, std::fabs(s.imag()));
        }
    }
    return top;
}

void repair(M& w)
{
    unit(w[0]);
    minus(w[1], w[0]);
    unit(w[1]);
    minus(w[2], w[0]);
    minus(w[2], w[1]);
    unit(w[2]);
}

int main()
{
    int n {0};
    int m {0};
    std::cin >> n >> m;
    M u {};
    for (auto& row : u) {
        for (C& z : row) {
            float re {0.0f};
            float im {0.0f};
            std::cin >> re >> im;
            z = C {re, im};
        }
    }
    M w {};
    for (int i {0}; i < 3; ++i) {
        w[i][i] = C {1.0f, 0.0f};
    }
    for (int s {1}; s <= n; ++s) {
        w = times(w, u);
        if (s % m == 0) {
            repair(w);
        }
    }
    std::println("{:.1e}", deviation(w));
}
```
### Wrong
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using M = std::array<std::array<C, 3>, 3>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

M times(const M& a, const M& b)
{
    M c {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            C s {0.0f, 0.0f};
            for (int k {0}; k < 3; ++k) {
                s = s + mul(a[i][k], b[k][j]);
            }
            c[i][j] = s;
        }
    }
    return c;
}

C inner(const std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C s {0.0f, 0.0f};
    for (int k {0}; k < 3; ++k) {
        s = s + mul(u[k], std::conj(v[k]));
    }
    return s;
}

void unit(std::array<C, 3>& u)
{
    float len {std::sqrt(inner(u, u).real())};
    for (C& z : u) {
        z = C {z.real() / len, z.imag() / len};
    }
}

void minus(std::array<C, 3>& u, const std::array<C, 3>& v)
{
    C h {inner(v, u)};
    for (int k {0}; k < 3; ++k) {
        u[k] = u[k] - mul(h, v[k]);
    }
}

double deviation(const M& w)
{
    double top {0.0};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            std::complex<double> s {i == j ? -1.0 : 0.0, 0.0};
            for (int k {0}; k < 3; ++k) {
                std::complex<double> a {w[i][k]};
                std::complex<double> b {std::conj(w[j][k])};
                s = s + a * b;
            }
            top = std::fmax(top, std::fabs(s.real()));
            top = std::fmax(top, std::fabs(s.imag()));
        }
    }
    return top;
}

void repair(M& w)
{
    unit(w[0]);
    minus(w[1], w[0]);
    unit(w[1]);
    minus(w[2], w[0]);
    minus(w[2], w[1]);
    unit(w[2]);
}

int main()
{
    int n {0};
    int m {0};
    std::cin >> n >> m;
    M u {};
    for (auto& row : u) {
        for (C& z : row) {
            float re {0.0f};
            float im {0.0f};
            std::cin >> re >> im;
            z = C {re, im};
        }
    }
    M w {};
    for (int i {0}; i < 3; ++i) {
        w[i][i] = C {1.0f, 0.0f};
    }
    for (int s {1}; s <= n; ++s) {
        w = times(w, u);
        if (s % m == 0) {
            repair(w);
        }
    }
    std::println("{:.1e}", deviation(w));
}
```
### Tests
```in
1000000 100000
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
```in
1000000 1
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
```in
100000 100001
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
```in
5 1
0 1 0 0 0 0
0 0 -1 0 0 0
0 0 0 0 1 0
```
### Witness
```in
1000 10
0.36 0.48 0.64 -0.48 0 0
-0.64 -0.48 0.36 -0.48 0 0
0 0 0 0 0.6 0.8
```
