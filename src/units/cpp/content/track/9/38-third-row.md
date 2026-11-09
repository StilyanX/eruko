# 9.38 The third row of a unitary matrix rebuilt from the first two
Part: the third row of a 3 by 3 complex matrix, rebuilt from the first two when its three rows are orthonormal, against the bound
Clause: [complex.numbers], [complex.value.ops], [expr.add], [expr.mul]
After: 9.24
Levels: c++23
Source: QUDA include/gauge_field_order.h (Reconstruct<12>: the third row as the conjugate of the cross product of the first two); Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §3.1 (each term through k roundings: an error at most γₖ times the sum of the sizes)

## Example
```cpp
#include <array>
#include <complex>
#include <print>

using C = std::complex<float>;

int main()
{
    //: Take the first two rows of a matrix with orthonormal rows.
    std::array<C, 3> a {C {0.48f, 0.64f}, C {0.6f, 0.0f}, C {}};
    std::array<C, 3> b {C {-0.36f, 0.0f}, C {0.288f, -0.384f},
                        C {0.0f, 0.8f}};
    for (int k {0}; k < 3; ++k) {
        //: Cross them: use entries k + 1 and k + 2, mod 3.
        int i {(k + 1) % 3};
        int j {(k + 2) % 3};
        C cross {a[i] * b[j] - a[j] * b[i]};
        //: Conjugate the cross product to get entry k of row 3.
        C c {std::conj(cross)};
        std::println("{:a} {:a}", c.real(), c.imag());
    }
}
```

## Verdict 1
```cpp
#include <array>
#include <complex>

using C = std::complex<float>;
using Row = std::array<C, 3>;

constexpr Row third(const Row& a, const Row& b)
{
    Row c {};
    for (int k {0}; k < 3; ++k) {
        int i {(k + 1) % 3};
        int j {(k + 2) % 3};
        c[k] = std::conj(a[i] * b[j] - a[j] * b[i]);
    }
    return c;
}

constexpr C inner(const Row& a, const Row& b)
{
    C s {};
    for (int k {0}; k < 3; ++k) {
        s += a[k] * std::conj(b[k]);
    }
    return s;
}

int main()
{
    constexpr Row r1 {C {1.0f, 0.0f}, C {}, C {}};
    constexpr Row r2 {C {}, C {0.5f, 0.5f}, C {0.5f, -0.5f}};
    static_assert(inner(third(r1, r2), r2) == C {});
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <array>
#include <complex>

using C = std::complex<float>;
using Row = std::array<C, 3>;

constexpr Row third(const Row& a, const Row& b)
{
    Row c {};
    for (int k {0}; k < 3; ++k) {
        int i {(k + 1) % 3};
        int j {(k + 2) % 3};
        c[k] = a[i] * b[j] - a[j] * b[i];
    }
    return c;
}

constexpr C inner(const Row& a, const Row& b)
{
    C s {};
    for (int k {0}; k < 3; ++k) {
        s += a[k] * std::conj(b[k]);
    }
    return s;
}

int main()
{
    constexpr Row r1 {C {1.0f, 0.0f}, C {}, C {}};
    constexpr Row r2 {C {}, C {0.5f, 0.5f}, C {0.5f, -0.5f}};
    static_assert(inner(third(r1, r2), r2) == C {});
}
```
Answer: c++23 ill-formed 31

## Alone 1
Form: run
Write a program that reads the first two rows a and b of a 3 by 3 complex matrix whose rows are orthonormal, and rebuilds its third row c as the conjugate of the cross product of a and b. Number the entries 0, 1, 2. For each k from 0 to 2, let i = (k + 1) mod 3 and j = (k + 2) mod 3, p = aᵢ·bⱼ and q = aⱼ·bᵢ. Then cₖ has real part Re p − Re q and imaginary part Im q − Im p. Work in float, and take each product x·y as (Re x·Re y − Im x·Im y) + (Re x·Im y + Im x·Re y)i, from left to right. Then test each real and imaginary part of c against the bound: its error from the exact value of the same formula, computed in __float128, is at most γ₃ times the sum of the sizes of its four real products. Here γ₃ = 3u/(1 − 3u) with u = 2^−24 (Higham §3.1): each product passes through three roundings.
Input: two lines, the rows a and b, each as three complex numbers, each complex number as its real part then its imaginary part.
Output: one line: the real and imaginary parts of c₀, c₁ and c₂, each as std::format prints it with {:a}, then yes if every part is inside the bound or no if not, all separated by spaces.
Limits: each part is 0 or between 1e-6 and 1 in size.
### Examples
```in
1 0 0 0 0 0
0 0 1 0 0 0
```
```out
0p+0 0p+0 0p+0 0p+0 1p+0 0p+0 yes
```
```in
0.70710677 0 0 0.70710677 0 0
0 0.70710677 0.70710677 0 0 0
```
```out
0p+0 0p+0 0p+0 0p+0 1.fffffep-1 0p+0 yes
```
### Reference
```cpp
#include <array>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using F = __float128;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

F term(float x, float y)
{
    return static_cast<F>(x) * y;
}

F size(F x)
{
    return x < 0 ? -x : x;
}

int main()
{
    std::array<C, 6> r {};
    for (C& z : r) {
        float re {0.0f};
        float im {0.0f};
        std::cin >> re >> im;
        z = C {re, im};
    }
    F u {0x1p-24};
    F g {3 * u / (1 - 3 * u)};
    bool inside {true};
    for (int k {0}; k < 3; ++k) {
        C a {r[(k + 1) % 3]};
        C b {r[3 + (k + 2) % 3]};
        C c {r[(k + 2) % 3]};
        C d {r[3 + (k + 1) % 3]};
        C p {mul(a, b)};
        C q {mul(c, d)};
        float re {p.real() - q.real()};
        float im {q.imag() - p.imag()};
        std::print("{:a} {:a} ", re, im);
        std::array<F, 4> x {term(a.real(), b.real()),
                            -term(a.imag(), b.imag()),
                            -term(c.real(), d.real()),
                            term(c.imag(), d.imag())};
        std::array<F, 4> y {term(c.real(), d.imag()),
                            term(c.imag(), d.real()),
                            -term(a.real(), b.imag()),
                            -term(a.imag(), b.real())};
        F ex {x[0] + x[1] + x[2] + x[3]};
        F ey {y[0] + y[1] + y[2] + y[3]};
        F sx {size(x[0]) + size(x[1]) + size(x[2])
                + size(x[3])};
        F sy {size(y[0]) + size(y[1]) + size(y[2])
                + size(y[3])};
        inside = inside && size(re - ex) <= g * sx;
        inside = inside && size(im - ey) <= g * sy;
    }
    std::println("{}", inside ? "yes" : "no");
}
```
### Wrong
```cpp
#include <array>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;
using F = __float128;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

F term(float x, float y)
{
    return static_cast<F>(x) * y;
}

F size(F x)
{
    return x < 0 ? -x : x;
}

int main()
{
    std::array<C, 6> r {};
    for (C& z : r) {
        float re {0.0f};
        float im {0.0f};
        std::cin >> re >> im;
        z = C {re, im};
    }
    F u {0x1p-24};
    F g {3 * u / (1 - 3 * u)};
    bool inside {true};
    for (int k {0}; k < 3; ++k) {
        C a {r[(k + 1) % 3]};
        C b {r[3 + (k + 2) % 3]};
        C c {r[(k + 2) % 3]};
        C d {r[3 + (k + 1) % 3]};
        C p {mul(a, b)};
        C q {mul(c, d)};
        float re {p.real() - q.real()};
        float im {p.imag() - q.imag()};
        std::print("{:a} {:a} ", re, im);
        std::array<F, 4> x {term(a.real(), b.real()),
                            -term(a.imag(), b.imag()),
                            -term(c.real(), d.real()),
                            term(c.imag(), d.imag())};
        std::array<F, 4> y {term(c.real(), d.imag()),
                            term(c.imag(), d.real()),
                            -term(a.real(), b.imag()),
                            -term(a.imag(), b.real())};
        F ex {x[0] + x[1] + x[2] + x[3]};
        F ey {y[0] + y[1] + y[2] + y[3]};
        F sx {size(x[0]) + size(x[1]) + size(x[2])
                + size(x[3])};
        F sy {size(y[0]) + size(y[1]) + size(y[2])
                + size(y[3])};
        inside = inside && size(re - ex) <= g * sx;
        inside = inside && size(im - ey) <= g * sy;
    }
    std::println("{}", inside ? "yes" : "no");
}
```
### Tests
```in
1 0 0 0 0 0
0 0 0.5 0.5 0.5 -0.5
```
```in
0.48 0.64 0.6 0 0 0
-0.36 0 0.288 -0.384 0 0.8
```
```in
0 0 0 0 1 0
1 0 0 0 0 0
```
```in
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
```
### Witness
```in
1 0 0 0 0 0
0 0 0.5 0.5 0.5 -0.5
```

## Alone 2
Form: run
Write a program that reads the first two rows of a 3 by 3 complex matrix U whose rows are orthonormal, and a complex vector v of three entries. It rebuilds the third row of U from the first two, then prints w = U·v. Number the entries 0, 1, 2, and call the first two rows a and b. The third row c is the conjugate of the cross product of a and b: for each k from 0 to 2, let i = (k + 1) mod 3 and j = (k + 2) mod 3, p = aᵢ·bⱼ and q = aⱼ·bᵢ; then cₖ has real part Re p − Re q and imaginary part Im q − Im p. Each entry of w is the product of a row with v: the product of entries 0, plus that of entries 1, plus that of entries 2, from left to right. Work in float, and take each product x·y as (Re x·Re y − Im x·Im y) + (Re x·Im y + Im x·Re y)i, from left to right.
Input: three lines: the two rows of U, then v; each line holds three complex numbers, each as its real part then its imaginary part.
Output: one line: the real and imaginary parts of w₀, w₁ and w₂, each as std::format prints it with {:a}, separated by spaces.
Limits: each part of U is 0 or between 1e-6 and 1 in size; each part of v is 0 or between 1e-6 and 1000 in size.
### Examples
```in
1 0 0 0 0 0
0 0 1 0 0 0
2 0 -3 0 5 0
```
```out
1p+1 0p+0 -1.8p+1 0p+0 1.4p+2 0p+0
```
```in
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
1 0 1 0 1 0
```
```out
1.666668p+0 0p+0 -1.999998p-3 0p+0 1p+0 0p+0
```
### Reference
```cpp
#include <array>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

C get()
{
    float re {0.0f};
    float im {0.0f};
    std::cin >> re >> im;
    return C {re, im};
}

int main()
{
    std::array<C, 9> m {};
    for (int k {0}; k < 6; ++k) {
        m[k] = get();
    }
    std::array<C, 3> v {get(), get(), get()};
    for (int k {0}; k < 3; ++k) {
        C p {mul(m[(k + 1) % 3], m[3 + (k + 2) % 3])};
        C q {mul(m[(k + 2) % 3], m[3 + (k + 1) % 3])};
        m[6 + k] = C {p.real() - q.real(), q.imag() - p.imag()};
    }
    for (int i {0}; i < 3; ++i) {
        C w {mul(m[3 * i], v[0])};
        w += mul(m[3 * i + 1], v[1]);
        w += mul(m[3 * i + 2], v[2]);
        std::print("{:a} {:a} ", w.real(), w.imag());
    }
    std::println();
}
```
### Wrong
```cpp
#include <array>
#include <complex>
#include <iostream>
#include <print>

using C = std::complex<float>;

C mul(C a, C b)
{
    float re {a.real() * b.real() - a.imag() * b.imag()};
    float im {a.real() * b.imag() + a.imag() * b.real()};
    return C {re, im};
}

C get()
{
    float re {0.0f};
    float im {0.0f};
    std::cin >> re >> im;
    return C {re, im};
}

int main()
{
    std::array<C, 9> m {};
    for (int k {0}; k < 6; ++k) {
        m[k] = get();
    }
    std::array<C, 3> v {get(), get(), get()};
    for (int k {0}; k < 3; ++k) {
        C p {mul(m[(k + 1) % 3], m[3 + (k + 2) % 3])};
        C q {mul(m[(k + 2) % 3], m[3 + (k + 1) % 3])};
        m[6 + k] = C {p.real() - q.real(), p.imag() - q.imag()};
    }
    for (int i {0}; i < 3; ++i) {
        C w {mul(m[3 * i], v[0])};
        w += mul(m[3 * i + 1], v[1]);
        w += mul(m[3 * i + 2], v[2]);
        std::print("{:a} {:a} ", w.real(), w.imag());
    }
    std::println();
}
```
### Tests
```in
1 0 0 0 0 0
0 0 0.5 0.5 0.5 -0.5
0 0 0 0 1 0
```
```in
0.48 0.64 0.6 0 0 0
-0.36 0 0.288 -0.384 0 0.8
1 1 -1 2 0.5 -0.25
```
```in
0 1 0 0 0 0
0 0 1 0 0 0
0 0 0 0 0 0
```
```in
0.6 0 0.8 0 0 0
-0.8 0 0.6 0 0 0
-1 0 -1 0 -1 0
```
### Witness
```in
0.48 0.64 0.6 0 0 0
-0.36 0 0.288 -0.384 0 0.8
1 1 -1 2 0.5 -0.25
```
