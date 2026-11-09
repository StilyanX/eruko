# 0.06 A two-level cycle against one level
Task: a two-level cycle on the operator of task 2: aggregates, a coarse operator, a smoother, and the iterations against one level
Shape: QUDA lib/multigrid.cpp (the cycle: pre-smooth, restrict, coarse solve, prolong, post-smooth), lib/transfer.cpp (aggregates, block orthonormal near-null vectors), include/kernels/restrictor.cuh and include/kernels/prolongator.cuh, lib/coarse_op.in.cpp and lib/dirac_coarse.cpp (the coarse operator)
Write a program that builds a coarse level for a nearest-neighbour operator on a small periodic four-dimensional lattice, split by parity, and counts the iterations of the conjugate gradient method with and without the two-level cycle. The operator is the shifted normal form on the even sites, so it is positive definite. The aggregates are blocks of 2 by 2 by 2 by 2 sites, the coarse operator is the restriction times the operator times the prolongation, and the smoother is a few damped steps.

## Bound
Tag: 9.21
Count: the real numbers the routine stores per coarse link matrix in staggered multigrid on 2 by 2 by 2 by 2 blocks
Answer: 4608
Source: QUDA lib/transfer.cpp: staggered blocking on 2 × 2 × 2 × 2 blocks requires Nvec = 24 near-null vectors; lib/dirac_coarse.cpp createY: the coarse field's nColor is Nvec times the coarse spin, and the coarse spin is 2 when spin_bs is 0 (staggered), stored with QUDA_RECONSTRUCT_NO, so each matrix holds nColor² complex numbers
Derivation 1: nColor = 24 × 2 = 48; a 48 × 48 complex matrix holds 2304 complex numbers, 2 reals each: 4608.
Derivation 2: the matrix splits into 2 × 2 spin blocks, each 24 × 24 = 576 complex numbers; 4 × 576 × 2 = 4608.

## Verdict 1
Tag: 9.20
```cpp
#include <array>
#include <complex>

using C = std::complex<double>;

constexpr C transposed(const std::array<C, 4>& v)
{
    C s {0.0};
    for (const C& e : v) {
        s = s + e * e;
    }
    return s;
}

int main()
{
    constexpr std::array<C, 4> v {C {0.5, 0.0}, C {0.0, 0.5},
                                  C {-0.5, 0.0}, C {0.0, -0.5}};
    static_assert(transposed(v) == C {1.0, 0.0});
}
```
Answer: c++23 ill-formed 19

## Verdict 2
Tag: 9.21
```cpp
#include <array>
#include <complex>

using C = std::complex<double>;

constexpr C coarse(const std::array<C, 4>& v)
{
    C s {0.0};
    for (int i {0}; i < 4; ++i) {
        C av {static_cast<double>(i + 1) * v[i]};
        s = s + std::conj(v[i]) * av;
    }
    return s;
}

int main()
{
    constexpr std::array<C, 4> v {C {0.5, 0.0}, C {0.0, 0.5},
                                  C {-0.5, 0.0}, C {0.0, -0.5}};
    static_assert(coarse(v) == C {2.5, 0.0});
}
```
Answer: c++23 defined

## Count
Tag: 9.21
Columns: fine, coarse
```cpp
#include <print>
#include <source_location>
#include <vector>

using Where = std::source_location;
using Vec = std::vector<double>;

Vec fine(const Vec& v, Where w = Where::current())
{
    std::println("@{} fine", w.line());
    Vec out(v.size());
    for (std::size_t i {0}; i < v.size(); ++i) {
        out[i] = 3.0 * v[i];
    }
    return out;
}

Vec coarse(const Vec& m, const Vec& r,
           Where w = Where::current())
{
    std::println("@{} coarse", w.line());
    return {r[0] / m[0], r[1] / m[3]};
}

int main()
{
    int nu {2};
    Vec m(4, 0.0);
    for (std::size_t g {0}; g < 2; ++g) {
        Vec e(8, 0.0);
        for (std::size_t i {4 * g}; i < 4 * g + 4; ++i) {
            e[i] = 0.5;
        }
        Vec ae {fine(e)};
        double sum {0.0};
        for (std::size_t i {4 * g}; i < 4 * g + 4; ++i) {
            sum = sum + 0.5 * ae[i];
        }
        m[3 * g] = sum;
    }
    Vec r(8, 1.0);
    Vec x(8, 0.0);
    for (int it {0}; it < 2 * nu + 1; ++it) {
        Vec ax {fine(x)};
        if (it == nu) {
            Vec rc {0.0, 0.0};
            for (std::size_t i {0}; i < 8; ++i) {
                rc[i / 4] += 0.5 * (r[i] - ax[i]);
            }
            Vec ec {coarse(m, rc)};
            for (std::size_t i {0}; i < 8; ++i) {
                x[i] += 0.5 * ec[i / 4];
            }
        } else {
            for (std::size_t i {0}; i < 8; ++i) {
                x[i] += 0.25 * (r[i] - ax[i]);
            }
        }
    }
    std::println("{}", x[0]);
}
```

## Alone 1
Tag: 9.20
Newer: 304
Form: run
Write a program that builds a coarse level for an operator A on a lattice, and prints how many conjugate gradient steps solve A x = b with one level and with the two-level cycle. Work in double, with complex numbers.
The lattice has L0·L1·L2·L3 sites. Site (x0, x1, x2, x3) has index x0 + L0·(x1 + L1·(x2 + L2·x3)), and it is even when x0 + x1 + x2 + x3 is even. A vector holds 3 complex numbers at each site, in site order.
Each site s and direction μ = 0, 1, 2, 3 has a link Uμ(s), a 3 by 3 complex matrix. When seed is 0, every link is the identity matrix. Otherwise, make the link numbers in the order site, direction, row, column, real part then imaginary part. Start from z = seed. For each number, set z to (1103515245·z + 12345) mod 2³¹; the number is ((⌊z / 65536⌋ mod 5) − 2) / 4.
The hop D gives (D v)(s) = Σ over μ of Uμ(s)·v(s + μ) − Uμ(s − μ)ᴴ·v(s − μ). Here s ± μ is the next site along direction μ, wrapping round at the edges, and ᴴ is the conjugate transpose. For μ = 0 to 3, add the first product, then subtract the second.
A acts on vectors that are 0 on the odd sites: A v = m2·v − D(D v). The inner D fills the odd sites from the even ones, and the outer D the even sites from the odd ones. This shifted normal form is Hermitian positive definite. The vector b is 1 in colour 0 of site 0 and 0 elsewhere. The dot product u·w is the real part of the sum of conj(uₖ)·wₖ over every entry k.
The aggregates are blocks of 2 by 2 by 2 by 2 sites. Site (x0, x1, x2, x3) is in block (⌊x0/2⌋, ⌊x1/2⌋, ⌊x2/2⌋, ⌊x3/2⌋), numbered like a site on a lattice of L0/2·L1/2·L2/2·L3/2 sites. Let ω = 0.025.
Make three near-null vectors. Vector c starts as 1 in colour c at every even site and 0 elsewhere. Then it takes s steps v = v − ω·A v. Next, in each block on its own, make them orthonormal by Gram-Schmidt: for c = 0, 1, 2, subtract from vector c its projection onto each earlier vector, in order, then divide it by its length. A projection uses the inner product over the block's sites, conjugating the earlier vector.
The prolongation P takes a coarse vector, 3 numbers per block, to the vector whose entry at site s is Σ over c of vector c at s times coarse entry c of the block of s. The restriction is Pᴴ: coarse entry c of a block is the sum, over the block's sites, of conj(vector c)·r. The coarse operator is Pᴴ A P, built column by column. Solve the coarse system by Gaussian elimination without row swaps.
The cycle turns r into z. Start from z = 0, and do 2ν + 1 steps. In each step, let d = r − A z. In step ν (counting from 0), add P times the coarse solution for Pᴴ d; in every other step, add ω·d.
Run the preconditioned conjugate gradient method twice from x = 0, once with z = r and once with z = the cycle of r. Start with r = b, p = z and ρ = r·z. While r·r > ε·(b·b) and fewer than 1000 steps are done: q = A p, α = ρ / (p·q), x = x + α·p, r = r − α·q, take the new z, σ = r·z, p = z + (σ / ρ)·p, ρ = σ, and count a step.
Input: one line: L0, L1, L2, L3, m2, seed, ν, s and ε.
Output: one line: the steps with one level, then the steps with the two-level cycle.
Limits: each Lμ is 2 or 4; m2 is one of 0.0625, 0.125, 0.25, 0.5 and 1; 0 ≤ seed < 2³¹; 1 ≤ ν ≤ 3; 0 ≤ s ≤ 16; 1e-20 ≤ ε ≤ 1e-8.
### Examples
```in
2 2 2 2 0.5 0 2 8 1e-20
```
```out
2 3
```
```in
4 4 2 2 0.0625 0 2 8 1e-20
```
```out
6 12
```
### Reference
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <cstdint>
#include <iostream>
#include <print>
#include <span>
#include <vector>

using C = std::complex<double>;
using Dims = std::array<int, 4>;
using Vec = std::vector<C>;

int volume(const Dims& l)
{
    return l[0] * l[1] * l[2] * l[3];
}

Dims coords(const Dims& l, int s)
{
    Dims x {};
    for (int d {0}; d < 4; ++d) {
        x[d] = s % l[d];
        s = s / l[d];
    }
    return x;
}

int index(const Dims& l, const Dims& x)
{
    return x[0] + l[0] * (x[1] + l[1] * (x[2] + l[2] * x[3]));
}

int parity(const Dims& l, int s)
{
    Dims x {coords(l, s)};
    return (x[0] + x[1] + x[2] + x[3]) % 2;
}

int step(const Dims& l, int s, int mu, int by)
{
    Dims x {coords(l, s)};
    x[mu] = (x[mu] + by + l[mu]) % l[mu];
    return index(l, x);
}

int block(const Dims& l, int s)
{
    Dims x {coords(l, s)};
    Dims h {l[0] / 2, l[1] / 2, l[2] / 2, l[3] / 2};
    return index(h, {x[0] / 2, x[1] / 2, x[2] / 2, x[3] / 2});
}

struct Op {
    Dims l {};
    double m2 {0.0};
    Vec u {};
};

void hop(const Op& a, std::span<const C> v, std::span<C> w,
         int target)
{
    for (int s {0}; s < volume(a.l); ++s) {
        if (parity(a.l, s) != target) {
            continue;
        }
        std::array<C, 3> sum {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(a.l, s, mu, 1)};
            int b {step(a.l, s, mu, -1)};
            for (int i {0}; i < 3; ++i) {
                for (int j {0}; j < 3; ++j) {
                    C uf {a.u[36 * s + 9 * mu + 3 * i + j]};
                    sum[i] = sum[i] + uf * v[3 * f + j];
                }
            }
            for (int i {0}; i < 3; ++i) {
                for (int j {0}; j < 3; ++j) {
                    C ub {a.u[36 * b + 9 * mu + 3 * j + i]};
                    C h {std::conj(ub) * v[3 * b + j]};
                    sum[i] = sum[i] - h;
                }
            }
        }
        for (int i {0}; i < 3; ++i) {
            w[3 * s + i] = sum[i];
        }
    }
}

Vec apply_op(const Op& a, std::span<const C> v)
{
    Vec t(v.size());
    Vec w(v.size());
    hop(a, v, t, 1);
    hop(a, t, w, 0);
    for (std::size_t k {0}; k < w.size(); ++k) {
        w[k] = a.m2 * v[k] - w[k];
    }
    return w;
}

double dot(std::span<const C> a, std::span<const C> b)
{
    double s {0.0};
    for (std::size_t k {0}; k < a.size(); ++k) {
        s = s + std::real(std::conj(a[k]) * b[k]);
    }
    return s;
}

void axpy(C a, std::span<const C> x, std::span<C> y)
{
    for (std::size_t k {0}; k < y.size(); ++k) {
        y[k] = y[k] + a * x[k];
    }
}

struct Coarse {
    std::vector<Vec> p {};
    int n {0};
    Vec m {};
};

Vec restriction(const Op& a, const Coarse& c,
                std::span<const C> r)
{
    Vec rc(c.n);
    for (int s {0}; s < volume(a.l); ++s) {
        for (int k {0}; k < 3; ++k) {
            for (int i {0}; i < 3; ++i) {
                C pk {std::conj(c.p[k][3 * s + i])};
                rc[3 * block(a.l, s) + k] += pk * r[3 * s + i];
            }
        }
    }
    return rc;
}

Vec prolongation(const Op& a, const Coarse& c,
                 std::span<const C> e)
{
    Vec x(3 * volume(a.l));
    for (int s {0}; s < volume(a.l); ++s) {
        for (int k {0}; k < 3; ++k) {
            for (int i {0}; i < 3; ++i) {
                C ek {e[3 * block(a.l, s) + k]};
                x[3 * s + i] += c.p[k][3 * s + i] * ek;
            }
        }
    }
    return x;
}

void orthonormalize(const Op& a, Coarse& c)
{
    int v {volume(a.l)};
    for (int k {0}; k < 3; ++k) {
        for (int j {0}; j <= k; ++j) {
            Vec h(c.n / 3);
            for (int s {0}; s < v; ++s) {
                for (int i {0}; i < 3; ++i) {
                    C pj {std::conj(c.p[j][3 * s + i])};
                    h[block(a.l, s)] += pj * c.p[k][3 * s + i];
                }
            }
            for (int s {0}; s < v; ++s) {
                C hb {h[block(a.l, s)]};
                for (int i {0}; i < 3; ++i) {
                    C& e {c.p[k][3 * s + i]};
                    e = j < k ? e - hb * c.p[j][3 * s + i]
                              : e / std::sqrt(hb.real());
                }
            }
        }
    }
}

Coarse build(const Op& a, int smooth, double omega)
{
    int v {volume(a.l)};
    Coarse c {};
    for (int k {0}; k < 3; ++k) {
        Vec x(3 * v);
        for (int s {0}; s < v; ++s) {
            x[3 * s + k] = parity(a.l, s) == 0 ? 1.0 : 0.0;
        }
        for (int it {0}; it < smooth; ++it) {
            axpy(-omega, apply_op(a, x), x);
        }
        c.p.push_back(x);
    }
    c.n = 3 * v / 16;
    orthonormalize(a, c);
    c.m.assign(c.n * c.n, C {});
    for (int col {0}; col < c.n; ++col) {
        Vec e(c.n);
        e[col] = 1.0;
        Vec ae {apply_op(a, prolongation(a, c, e))};
        Vec rc {restriction(a, c, ae)};
        for (int row {0}; row < c.n; ++row) {
            c.m[row * c.n + col] = rc[row];
        }
    }
    return c;
}

Vec solve(const Coarse& c, Vec b)
{
    int n {c.n};
    Vec m {c.m};
    for (int k {0}; k < n; ++k) {
        for (int i {k + 1}; i < n; ++i) {
            C f {m[i * n + k] / m[k * n + k]};
            for (int j {k}; j < n; ++j) {
                m[i * n + j] -= f * m[k * n + j];
            }
            b[i] -= f * b[k];
        }
    }
    for (int k {n - 1}; k >= 0; --k) {
        for (int j {k + 1}; j < n; ++j) {
            b[k] -= m[k * n + j] * b[j];
        }
        b[k] /= m[k * n + k];
    }
    return b;
}

struct Cycle {
    Coarse c {};
    int nu {0};
    double omega {0.0};
};

Vec precondition(const Op& a, const Cycle& g,
                 std::span<const C> r)
{
    Vec x(r.size());
    for (int it {0}; it < 2 * g.nu + 1; ++it) {
        Vec d(r.begin(), r.end());
        axpy(-1.0, apply_op(a, x), d);
        if (it == g.nu) {
            Vec ec {solve(g.c, restriction(a, g.c, d))};
            axpy(1.0, prolongation(a, g.c, ec), x);
        } else {
            axpy(g.omega, d, x);
        }
    }
    return x;
}

int cg(const Op& a, const Cycle& g, std::span<const C> b,
       double eps, bool two)
{
    Vec x(b.size());
    Vec r(b.begin(), b.end());
    Vec z {two ? precondition(a, g, r) : r};
    Vec p {z};
    double rz {dot(r, z)};
    double stop {eps * dot(b, b)};
    int k {0};
    while (dot(r, r) > stop && k < 1000) {
        Vec q {apply_op(a, p)};
        double alpha {rz / dot(p, q)};
        axpy(alpha, p, x);
        axpy(-alpha, q, r);
        z = two ? precondition(a, g, r) : r;
        double next {dot(r, z)};
        for (std::size_t i {0}; i < p.size(); ++i) {
            p[i] = z[i] + next / rz * p[i];
        }
        rz = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    Op a {};
    std::uint32_t seed {0};
    Cycle g {};
    int smooth {0};
    double eps {0.0};
    std::cin >> a.l[0] >> a.l[1] >> a.l[2] >> a.l[3] >> a.m2;
    std::cin >> seed >> g.nu >> smooth >> eps;
    int v {volume(a.l)};
    std::uint32_t z {seed};
    for (int k {0}; k < 36 * v; ++k) {
        std::array<double, 2> part {};
        for (double& e : part) {
            z = (1103515245u * z + 12345u) % 2147483648u;
            e = (static_cast<int>(z / 65536u % 5u) - 2) / 4.0;
        }
        C one {k % 4 == 0 ? 1.0 : 0.0};
        a.u.push_back(seed == 0 ? one : C {part[0], part[1]});
    }
    Vec b(3 * v);
    b[0] = 1.0;
    g.omega = 0.025;
    g.c = build(a, smooth, g.omega);
    int one {cg(a, g, b, eps, false)};
    std::println("{} {}", one, cg(a, g, b, eps, true));
}
```
### Wrong
```cpp
#include <array>
#include <cmath>
#include <complex>
#include <cstdint>
#include <iostream>
#include <print>
#include <span>
#include <vector>

using C = std::complex<double>;
using Dims = std::array<int, 4>;
using Vec = std::vector<C>;

int volume(const Dims& l)
{
    return l[0] * l[1] * l[2] * l[3];
}

Dims coords(const Dims& l, int s)
{
    Dims x {};
    for (int d {0}; d < 4; ++d) {
        x[d] = s % l[d];
        s = s / l[d];
    }
    return x;
}

int index(const Dims& l, const Dims& x)
{
    return x[0] + l[0] * (x[1] + l[1] * (x[2] + l[2] * x[3]));
}

int parity(const Dims& l, int s)
{
    Dims x {coords(l, s)};
    return (x[0] + x[1] + x[2] + x[3]) % 2;
}

int step(const Dims& l, int s, int mu, int by)
{
    Dims x {coords(l, s)};
    x[mu] = (x[mu] + by + l[mu]) % l[mu];
    return index(l, x);
}

int block(const Dims& l, int s)
{
    Dims x {coords(l, s)};
    Dims h {l[0] / 2, l[1] / 2, l[2] / 2, l[3] / 2};
    return index(h, {x[0] / 2, x[1] / 2, x[2] / 2, x[3] / 2});
}

struct Op {
    Dims l {};
    double m2 {0.0};
    Vec u {};
};

void hop(const Op& a, std::span<const C> v, std::span<C> w,
         int target)
{
    for (int s {0}; s < volume(a.l); ++s) {
        if (parity(a.l, s) != target) {
            continue;
        }
        std::array<C, 3> sum {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(a.l, s, mu, 1)};
            int b {step(a.l, s, mu, -1)};
            for (int i {0}; i < 3; ++i) {
                for (int j {0}; j < 3; ++j) {
                    C uf {a.u[36 * s + 9 * mu + 3 * i + j]};
                    sum[i] = sum[i] + uf * v[3 * f + j];
                }
            }
            for (int i {0}; i < 3; ++i) {
                for (int j {0}; j < 3; ++j) {
                    C ub {a.u[36 * b + 9 * mu + 3 * j + i]};
                    C h {std::conj(ub) * v[3 * b + j]};
                    sum[i] = sum[i] - h;
                }
            }
        }
        for (int i {0}; i < 3; ++i) {
            w[3 * s + i] = sum[i];
        }
    }
}

Vec apply_op(const Op& a, std::span<const C> v)
{
    Vec t(v.size());
    Vec w(v.size());
    hop(a, v, t, 1);
    hop(a, t, w, 0);
    for (std::size_t k {0}; k < w.size(); ++k) {
        w[k] = a.m2 * v[k] - w[k];
    }
    return w;
}

double dot(std::span<const C> a, std::span<const C> b)
{
    double s {0.0};
    for (std::size_t k {0}; k < a.size(); ++k) {
        s = s + std::real(std::conj(a[k]) * b[k]);
    }
    return s;
}

void axpy(C a, std::span<const C> x, std::span<C> y)
{
    for (std::size_t k {0}; k < y.size(); ++k) {
        y[k] = y[k] + a * x[k];
    }
}

struct Coarse {
    std::vector<Vec> p {};
    int n {0};
    Vec m {};
};

Vec restriction(const Op& a, const Coarse& c,
                std::span<const C> r)
{
    Vec rc(c.n);
    for (int s {0}; s < volume(a.l); ++s) {
        for (int k {0}; k < 3; ++k) {
            for (int i {0}; i < 3; ++i) {
                C pk {c.p[k][3 * s + i]};
                rc[3 * block(a.l, s) + k] += pk * r[3 * s + i];
            }
        }
    }
    return rc;
}

Vec prolongation(const Op& a, const Coarse& c,
                 std::span<const C> e)
{
    Vec x(3 * volume(a.l));
    for (int s {0}; s < volume(a.l); ++s) {
        for (int k {0}; k < 3; ++k) {
            for (int i {0}; i < 3; ++i) {
                C ek {e[3 * block(a.l, s) + k]};
                x[3 * s + i] += c.p[k][3 * s + i] * ek;
            }
        }
    }
    return x;
}

void orthonormalize(const Op& a, Coarse& c)
{
    int v {volume(a.l)};
    for (int k {0}; k < 3; ++k) {
        for (int j {0}; j <= k; ++j) {
            Vec h(c.n / 3);
            for (int s {0}; s < v; ++s) {
                for (int i {0}; i < 3; ++i) {
                    C pj {std::conj(c.p[j][3 * s + i])};
                    h[block(a.l, s)] += pj * c.p[k][3 * s + i];
                }
            }
            for (int s {0}; s < v; ++s) {
                C hb {h[block(a.l, s)]};
                for (int i {0}; i < 3; ++i) {
                    C& e {c.p[k][3 * s + i]};
                    e = j < k ? e - hb * c.p[j][3 * s + i]
                              : e / std::sqrt(hb.real());
                }
            }
        }
    }
}

Coarse build(const Op& a, int smooth, double omega)
{
    int v {volume(a.l)};
    Coarse c {};
    for (int k {0}; k < 3; ++k) {
        Vec x(3 * v);
        for (int s {0}; s < v; ++s) {
            x[3 * s + k] = parity(a.l, s) == 0 ? 1.0 : 0.0;
        }
        for (int it {0}; it < smooth; ++it) {
            axpy(-omega, apply_op(a, x), x);
        }
        c.p.push_back(x);
    }
    c.n = 3 * v / 16;
    orthonormalize(a, c);
    c.m.assign(c.n * c.n, C {});
    for (int col {0}; col < c.n; ++col) {
        Vec e(c.n);
        e[col] = 1.0;
        Vec ae {apply_op(a, prolongation(a, c, e))};
        Vec rc {restriction(a, c, ae)};
        for (int row {0}; row < c.n; ++row) {
            c.m[row * c.n + col] = rc[row];
        }
    }
    return c;
}

Vec solve(const Coarse& c, Vec b)
{
    int n {c.n};
    Vec m {c.m};
    for (int k {0}; k < n; ++k) {
        for (int i {k + 1}; i < n; ++i) {
            C f {m[i * n + k] / m[k * n + k]};
            for (int j {k}; j < n; ++j) {
                m[i * n + j] -= f * m[k * n + j];
            }
            b[i] -= f * b[k];
        }
    }
    for (int k {n - 1}; k >= 0; --k) {
        for (int j {k + 1}; j < n; ++j) {
            b[k] -= m[k * n + j] * b[j];
        }
        b[k] /= m[k * n + k];
    }
    return b;
}

struct Cycle {
    Coarse c {};
    int nu {0};
    double omega {0.0};
};

Vec precondition(const Op& a, const Cycle& g,
                 std::span<const C> r)
{
    Vec x(r.size());
    for (int it {0}; it < 2 * g.nu + 1; ++it) {
        Vec d(r.begin(), r.end());
        axpy(-1.0, apply_op(a, x), d);
        if (it == g.nu) {
            Vec ec {solve(g.c, restriction(a, g.c, d))};
            axpy(1.0, prolongation(a, g.c, ec), x);
        } else {
            axpy(g.omega, d, x);
        }
    }
    return x;
}

int cg(const Op& a, const Cycle& g, std::span<const C> b,
       double eps, bool two)
{
    Vec x(b.size());
    Vec r(b.begin(), b.end());
    Vec z {two ? precondition(a, g, r) : r};
    Vec p {z};
    double rz {dot(r, z)};
    double stop {eps * dot(b, b)};
    int k {0};
    while (dot(r, r) > stop && k < 1000) {
        Vec q {apply_op(a, p)};
        double alpha {rz / dot(p, q)};
        axpy(alpha, p, x);
        axpy(-alpha, q, r);
        z = two ? precondition(a, g, r) : r;
        double next {dot(r, z)};
        for (std::size_t i {0}; i < p.size(); ++i) {
            p[i] = z[i] + next / rz * p[i];
        }
        rz = next;
        k = k + 1;
    }
    return k;
}

int main()
{
    Op a {};
    std::uint32_t seed {0};
    Cycle g {};
    int smooth {0};
    double eps {0.0};
    std::cin >> a.l[0] >> a.l[1] >> a.l[2] >> a.l[3] >> a.m2;
    std::cin >> seed >> g.nu >> smooth >> eps;
    int v {volume(a.l)};
    std::uint32_t z {seed};
    for (int k {0}; k < 36 * v; ++k) {
        std::array<double, 2> part {};
        for (double& e : part) {
            z = (1103515245u * z + 12345u) % 2147483648u;
            e = (static_cast<int>(z / 65536u % 5u) - 2) / 4.0;
        }
        C one {k % 4 == 0 ? 1.0 : 0.0};
        a.u.push_back(seed == 0 ? one : C {part[0], part[1]});
    }
    Vec b(3 * v);
    b[0] = 1.0;
    g.omega = 0.025;
    g.c = build(a, smooth, g.omega);
    int one {cg(a, g, b, eps, false)};
    std::println("{} {}", one, cg(a, g, b, eps, true));
}
```
### Tests
```in
2 2 2 2 1 1 2 8 1e-20
```
```in
4 4 4 4 0.0625 3 2 8 1e-20
```
```in
4 4 4 4 1 0 1 4 1e-20
```
```in
2 2 2 4 0.5 5 3 4 1e-16
```
```in
4 4 2 2 0.125 9 1 16 1e-20
```
```in
4 4 4 4 0.0625 3 2 0 1e-8
```
### Witness
```in
4 4 4 4 0.25 7 2 8 1e-20
```
