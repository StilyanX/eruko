# 0.05 A conjugate gradient solve in mixed precision with reliable updates
Task: a conjugate gradient solve in mixed precision with reliable updates, on the operator of task 2
Shape: QUDA lib/inv_cg_quda.cpp (the CG loop and its reliable updates), include/reliable_updates.h (the update rule), include/kernels/reduce_core.cuh and include/kernels/blas_core.cuh (the fused vector steps)
Write a program that solves A x = b by the conjugate gradient method. The steps run in float, and every few steps a true update recomputes the residual in double. A is a nearest-neighbour operator on a small periodic four-dimensional lattice, split by parity: its normal form on the even sites, shifted so that it is positive definite.

## Bound
Tag: 8.12
Count: the bytes the vector steps of one iteration load per site in single precision, for vectors of 3 complex numbers per site (the operator's own loads apart)
Answer: 168
Source: QUDA lib/inv_cg_quda.cpp: one iteration without a reliable update runs reDotProduct(p, Ap), axpyCGNorm(-alpha, Ap, r) and axpyZpbx(alpha, p, x, r, beta); their read flags in include/kernels/reduce_core.cuh (Dot memory_access<1,1>, axpyCGNorm2 memory_access<1,1>) and include/kernels/blas_core.cuh (axpyZpbx_ memory_access<1,1,1>) give 2 + 2 + 3 fields read; a field of 3 complex numbers per site in single precision holds 24 bytes per site
Derivation 1: by step: the dot reads p and Ap, the residual step reads Ap and r, the fused update reads p, x and r: 7 fields of 24 bytes, 7 × 24 = 168.
Derivation 2: by vector: p is read twice, Ap twice, r twice, x once, 7 reads of 6 floats of 4 bytes, 7 × 6 × 4 = 168.

## Verdict 1
Tag: 9.24
```cpp
int main()
{
    constexpr float x0 {1.0f / 3.0f};
    constexpr double r0 {1.0 - 3.0 * x0};
    constexpr float e {static_cast<float>(r0) / 3.0f};
    constexpr double y {x0 + static_cast<double>(e)};
    constexpr double r {1.0 - 3.0 * y};
    static_assert(r * r <= 1e-24);
}
```
Answer: c++23 defined

## Verdict 2
Tag: 9.24
```cpp
int main()
{
    constexpr float x0 {1.0f / 3.0f};
    constexpr float r0 {1.0f - 3.0f * x0};
    constexpr float e {r0 / 3.0f};
    constexpr double y {x0 + static_cast<double>(e)};
    constexpr double r {1.0 - 3.0 * y};
    static_assert(r * r <= 1e-24);
}
```
Answer: c++23 ill-formed 8

## Count
Tag: 8.12
Columns: loads, stores
```cpp
#include <print>
#include <source_location>
#include <vector>

using Where = std::source_location;

struct Field {
    std::vector<float> v {};

    float load(std::size_t i, Where w = Where::current()) const
    {
        std::println("@{} loads", w.line());
        return v[i];
    }

    void store(std::size_t i, float x,
               Where w = Where::current())
    {
        std::println("@{} stores", w.line());
        v[i] = x;
    }
};

int main()
{
    std::size_t n {6};
    Field p {std::vector<float>(n, 1.0f)};
    Field q {std::vector<float>(n, 2.0f)};
    Field r {std::vector<float>(n, 1.0f)};
    Field x {std::vector<float>(n, 0.0f)};
    double pq {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        pq = pq + static_cast<double>(p.load(i)) * q.load(i);
    }
    float a {static_cast<float>(6.0 / pq)};
    double rr {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        float ri {r.load(i) - a * q.load(i)};
        r.store(i, ri);
        rr = rr + static_cast<double>(ri) * ri;
    }
    float b {static_cast<float>(rr / 6.0)};
    for (std::size_t i {0}; i < n; ++i) {
        float pi {p.load(i)};
        x.store(i, x.load(i) + a * pi);
        p.store(i, r.load(i) + b * pi);
    }
    std::println("{}", rr);
}
```

## Alone 1
Tag: 9.17
Newer: 166
Form: run
Write a program that solves A x = b by the conjugate gradient method in mixed precision with reliable updates, and prints the number of steps and of true updates.
The lattice has L0·L1·L2·L3 sites. Site (x0, x1, x2, x3) has index x0 + L0·(x1 + L1·(x2 + L2·x3)), and it is even when x0 + x1 + x2 + x3 is even. A vector holds 3 complex numbers at each site.
Each site s and direction μ = 0, 1, 2, 3 has a link Uμ(s), a 3 by 3 complex matrix. Make the link numbers in the order site, direction, row, column, real part then imaginary part. Start from z = seed. For each number, set z to (1103515245·z + 12345) mod 2³¹; the number is ((⌊z / 65536⌋ mod 5) − 2) / 4.
The hop D gives (D v)(s) = Σ over μ of Uμ(s)·v(s + μ) − Uμ(s − μ)ᴴ·v(s − μ). Here s ± μ is the next site along direction μ, wrapping round at the edges, and ᴴ is the conjugate transpose. Start each site from 0. For μ = 0 to 3, add the first product, then subtract the second. In a product M·w, for row i and then column j = 0, 1, 2, form re = mr·wr − mi·wi and im = mr·wi + mi·wr from the parts of Mij and wj, then add re and im to (or subtract them from) entry i.
A acts on vectors that are 0 on the odd sites: A v = m2·v − D(D v). The inner D fills the odd sites from the even ones, the outer D the even sites from the odd ones, and each entry is m2·v − w. This shifted normal form is Hermitian positive definite, so the method applies.
The vector b is 1 in the real part of colour 0 at each even site and 0 elsewhere. A dot product u·w adds, from 0.0 in double, the products of matching real numbers of u and w, each taken in double, in the order site, colour, real part then imaginary part.
Keep y, r and b in double, and x̂, r̂, p and q in float. Start with y = 0, r = b, r̂ = r, x̂ = 0, p = r̂, ρ = r·r, stop = ε·ρ and M = ρ. While ρ > stop and fewer than 10000 steps are done, repeat: (1) q = A p in float. (2) α = ρ / (p·q), rounded to float. (3) Entry by entry in float, r̂ = r̂ − α·q and x̂ = x̂ + α·p. (4) σ = r̂·r̂; count a step; M = max(M, σ). (5) If σ < δ·δ·M or σ ≤ stop, make a true update: y = y + x̂, x̂ = 0, r = b − A y in double, r̂ = r rounded to float, σ = r·r and M = σ; count an update. (6) β = σ / ρ, rounded to float; p = r̂ + β·p in float; ρ = σ.
Input: one line: L0, L1, L2, L3, m2, seed, ε and δ.
Output: one line: the number of steps, then the number of true updates.
Limits: each Lμ is 2 or 4; m2 is one of 0.0625, 0.125, 0.25, 0.5 and 1; 0 ≤ seed < 2³¹; 1e-24 ≤ ε ≤ 1e-8; 0.0001 ≤ δ ≤ 0.5.
### Examples
```in
2 2 2 2 1 1 1e-8 1e-4
```
```out
18 1
```
```in
4 4 4 4 0.25 7 1e-8 1e-4
```
```out
46 1
```
### Reference
```cpp
#include <algorithm>
#include <array>
#include <cstdint>
#include <iostream>
#include <print>
#include <span>
#include <vector>

using Dims = std::array<int, 4>;

int volume(const Dims& l)
{
    return l[0] * l[1] * l[2] * l[3];
}

int parity(const Dims& l, int s)
{
    int sum {0};
    for (int d {0}; d < 4; ++d) {
        sum = sum + s % l[d];
        s = s / l[d];
    }
    return sum % 2;
}

int step(const Dims& l, int s, int mu, int by)
{
    Dims x {};
    for (int d {0}; d < 4; ++d) {
        x[d] = s % l[d];
        s = s / l[d];
    }
    x[mu] = (x[mu] + by + l[mu]) % l[mu];
    return x[0] + l[0] * (x[1] + l[1] * (x[2] + l[2] * x[3]));
}

template <typename T>
void term(std::span<const T> u, std::span<const T> v,
          std::span<T> w, bool back)
{
    T sign {back ? T {-1} : T {1}};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            int at {back ? 6 * j + 2 * i : 6 * i + 2 * j};
            T ar {u[at]};
            T ai {sign * u[at + 1]};
            T vr {v[2 * j]};
            T vi {v[2 * j + 1]};
            T re {ar * vr - ai * vi};
            T im {ar * vi + ai * vr};
            w[2 * i] = w[2 * i] + sign * re;
            w[2 * i + 1] = w[2 * i + 1] + sign * im;
        }
    }
}

template <typename T>
void hop(const Dims& l, std::span<const T> u,
         std::span<const T> v, std::span<T> w, int target)
{
    for (int s {0}; s < volume(l); ++s) {
        if (parity(l, s) != target) {
            continue;
        }
        std::span<T> out {w.subspan(6 * s, 6)};
        std::fill(out.begin(), out.end(), T {0});
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(l, s, mu, 1)};
            int b {step(l, s, mu, -1)};
            std::span<const T> uf {u.subspan(72 * s + 18 * mu)};
            std::span<const T> ub {u.subspan(72 * b + 18 * mu)};
            term(uf, v.subspan(6 * f, 6), out, false);
            term(ub, v.subspan(6 * b, 6), out, true);
        }
    }
}

template <typename T>
void apply(const Dims& l, std::span<const T> u, T m2,
           std::span<const T> v, std::span<T> t, std::span<T> w)
{
    hop<T>(l, u, v, t, 1);
    hop<T>(l, u, t, w, 0);
    for (std::size_t k {0}; k < w.size(); ++k) {
        w[k] = m2 * v[k] - w[k];
    }
}

template <typename T>
double dot(std::span<const T> a, std::span<const T> b)
{
    double s {0.0};
    for (std::size_t k {0}; k < a.size(); ++k) {
        double ak {static_cast<double>(a[k])};
        s = s + ak * static_cast<double>(b[k]);
    }
    return s;
}

int main()
{
    Dims l {};
    float m2 {0.0f};
    std::uint32_t seed {0};
    double eps {0.0};
    double delta {0.0};
    std::cin >> l[0] >> l[1] >> l[2] >> l[3];
    std::cin >> m2 >> seed >> eps >> delta;
    std::size_t n {6 * static_cast<std::size_t>(volume(l))};
    std::vector<float> uf(12 * n, 0.0f);
    std::uint32_t s {seed};
    for (float& e : uf) {
        s = (1103515245u * s + 12345u) % 2147483648u;
        int k {static_cast<int>(s / 65536u % 5u) - 2};
        e = static_cast<float>(k) / 4.0f;
    }
    std::vector<double> ud(uf.begin(), uf.end());
    std::vector<double> b(n, 0.0);
    for (int x {0}; x < volume(l); ++x) {
        b[6 * x] = parity(l, x) == 0 ? 1.0 : 0.0;
    }
    std::vector<double> y(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> td(n, 0.0);
    std::vector<double> ad(n, 0.0);
    std::vector<float> xs(n, 0.0f);
    std::vector<float> rs(r.begin(), r.end());
    std::vector<float> p {rs};
    std::vector<float> q(n, 0.0f);
    std::vector<float> tf(n, 0.0f);
    double r2 {dot<double>(r, r)};
    double stop {eps * r2};
    double big {r2};
    int k {0};
    int u {0};
    while (r2 > stop && k < 10000) {
        apply<float>(l, uf, m2, p, tf, q);
        float a {static_cast<float>(r2 / dot<float>(p, q))};
        for (std::size_t i {0}; i < n; ++i) {
            rs[i] = rs[i] - a * q[i];
            xs[i] = xs[i] + a * p[i];
        }
        double next {dot<float>(rs, rs)};
        k = k + 1;
        big = std::max(big, next);
        if (next < delta * delta * big || next <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                y[i] = y[i] + xs[i];
                xs[i] = 0.0f;
            }
            apply<double>(l, ud, m2, y, td, ad);
            for (std::size_t i {0}; i < n; ++i) {
                r[i] = b[i] - ad[i];
                rs[i] = static_cast<float>(r[i]);
            }
            next = dot<double>(r, r);
            big = next;
            u = u + 1;
        }
        float beta {static_cast<float>(next / r2)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = rs[i] + beta * p[i];
        }
        r2 = next;
    }
    std::println("{} {}", k, u);
}
```
### Wrong
```cpp
#include <algorithm>
#include <array>
#include <cstdint>
#include <iostream>
#include <print>
#include <span>
#include <vector>

using Dims = std::array<int, 4>;

int volume(const Dims& l)
{
    return l[0] * l[1] * l[2] * l[3];
}

int parity(const Dims& l, int s)
{
    int sum {0};
    for (int d {0}; d < 4; ++d) {
        sum = sum + s % l[d];
        s = s / l[d];
    }
    return sum % 2;
}

int step(const Dims& l, int s, int mu, int by)
{
    Dims x {};
    for (int d {0}; d < 4; ++d) {
        x[d] = s % l[d];
        s = s / l[d];
    }
    x[mu] = (x[mu] + by + l[mu]) % l[mu];
    return x[0] + l[0] * (x[1] + l[1] * (x[2] + l[2] * x[3]));
}

template <typename T>
void term(std::span<const T> u, std::span<const T> v,
          std::span<T> w, bool back)
{
    T sign {back ? T {-1} : T {1}};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            int at {back ? 6 * j + 2 * i : 6 * i + 2 * j};
            T ar {u[at]};
            T ai {sign * u[at + 1]};
            T vr {v[2 * j]};
            T vi {v[2 * j + 1]};
            T re {ar * vr - ai * vi};
            T im {ar * vi + ai * vr};
            w[2 * i] = w[2 * i] + sign * re;
            w[2 * i + 1] = w[2 * i + 1] + sign * im;
        }
    }
}

template <typename T>
void hop(const Dims& l, std::span<const T> u,
         std::span<const T> v, std::span<T> w, int target)
{
    for (int s {0}; s < volume(l); ++s) {
        if (parity(l, s) != target) {
            continue;
        }
        std::span<T> out {w.subspan(6 * s, 6)};
        std::fill(out.begin(), out.end(), T {0});
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(l, s, mu, 1)};
            int b {step(l, s, mu, -1)};
            std::span<const T> uf {u.subspan(72 * s + 18 * mu)};
            std::span<const T> ub {u.subspan(72 * b + 18 * mu)};
            term(uf, v.subspan(6 * f, 6), out, false);
            term(ub, v.subspan(6 * b, 6), out, true);
        }
    }
}

template <typename T>
void apply(const Dims& l, std::span<const T> u, T m2,
           std::span<const T> v, std::span<T> t, std::span<T> w)
{
    hop<T>(l, u, v, t, 1);
    hop<T>(l, u, t, w, 0);
    for (std::size_t k {0}; k < w.size(); ++k) {
        w[k] = m2 * v[k] - w[k];
    }
}

template <typename T>
double dot(std::span<const T> a, std::span<const T> b)
{
    double s {0.0};
    for (std::size_t k {0}; k < a.size(); ++k) {
        double ak {static_cast<double>(a[k])};
        s = s + ak * static_cast<double>(b[k]);
    }
    return s;
}

int main()
{
    Dims l {};
    float m2 {0.0f};
    std::uint32_t seed {0};
    double eps {0.0};
    double delta {0.0};
    std::cin >> l[0] >> l[1] >> l[2] >> l[3];
    std::cin >> m2 >> seed >> eps >> delta;
    std::size_t n {6 * static_cast<std::size_t>(volume(l))};
    std::vector<float> uf(12 * n, 0.0f);
    std::uint32_t s {seed};
    for (float& e : uf) {
        s = (1103515245u * s + 12345u) % 2147483648u;
        int k {static_cast<int>(s / 65536u % 5u) - 2};
        e = static_cast<float>(k) / 4.0f;
    }
    std::vector<double> ud(uf.begin(), uf.end());
    std::vector<double> b(n, 0.0);
    for (int x {0}; x < volume(l); ++x) {
        b[6 * x] = parity(l, x) == 0 ? 1.0 : 0.0;
    }
    std::vector<double> y(n, 0.0);
    std::vector<double> r {b};
    std::vector<double> td(n, 0.0);
    std::vector<double> ad(n, 0.0);
    std::vector<float> xs(n, 0.0f);
    std::vector<float> rs(r.begin(), r.end());
    std::vector<float> p {rs};
    std::vector<float> q(n, 0.0f);
    std::vector<float> tf(n, 0.0f);
    double r2 {dot<double>(r, r)};
    double stop {eps * r2};
    double big {r2};
    int k {0};
    int u {0};
    while (r2 > stop && k < 10000) {
        apply<float>(l, uf, m2, p, tf, q);
        float a {static_cast<float>(r2 / dot<float>(p, q))};
        for (std::size_t i {0}; i < n; ++i) {
            rs[i] = rs[i] - a * q[i];
            xs[i] = xs[i] + a * p[i];
        }
        double next {dot<float>(rs, rs)};
        k = k + 1;
        big = std::max(big, next);
        if (next <= stop) {
            for (std::size_t i {0}; i < n; ++i) {
                y[i] = y[i] + xs[i];
                xs[i] = 0.0f;
            }
            apply<double>(l, ud, m2, y, td, ad);
            for (std::size_t i {0}; i < n; ++i) {
                r[i] = b[i] - ad[i];
                rs[i] = static_cast<float>(r[i]);
            }
            next = dot<double>(r, r);
            big = next;
            u = u + 1;
        }
        float beta {static_cast<float>(next / r2)};
        for (std::size_t i {0}; i < n; ++i) {
            p[i] = rs[i] + beta * p[i];
        }
        r2 = next;
    }
    std::println("{} {}", k, u);
}
```
### Tests
```in
2 2 2 2 1 1 1e-24 0.1
```
```in
4 4 4 4 0.0625 3 1e-24 0.1
```
```in
4 4 4 4 0.0625 3 1e-24 0.5
```
```in
2 2 2 4 0.5 5 1e-20 0.01
```
```in
4 4 2 2 0.125 9 1e-24 1e-4
```
### Witness
```in
4 4 4 4 0.25 7 1e-24 0.1
```
