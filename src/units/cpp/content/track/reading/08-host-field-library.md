# 0.08 The host side of a field library
Task: the host side of a library: a field over `std::mdspan` with a layout policy of your own, kernels constrained by concepts, and a run-time precision turned into template arguments
Shape: QUDA include/instantiate.h (instantiate: the precision and the reconstruct of a field, read at run time, chosen by if and if constexpr and passed as template arguments to Apply), include/gauge_field_order.h (FloatNOrder: the reals of a site kept in groups of N, one plane after another; Reconstruct<18, Float, QUDA_RECONSTRUCT_12>)
Write the host side of a small field library in C++23. A field keeps 12 reals at each site, in float or in double.
The field is a std::mdspan whose layout policy you write: it keeps the reals in groups of four, one plane after another.
Kernels are constrained by concepts, and a precision read at run time picks the type a kernel is built for.

## Bound
Tag: 9.39
Count: the reals the library stores per 3 by 3 complex matrix when its default reconstruct keeps two rows
Answer: 12
Source: QUDA include/instantiate.h: ReconstructNo12, the default Recon of instantiate, holds QUDA_RECONSTRUCT_NO and QUDA_RECONSTRUCT_12; include/gauge_field_order.h: Reconstruct<18, Float, QUDA_RECONSTRUCT_12> stores the first two rows of the matrix and rebuilds the third
Derivation 1: a row holds three complex numbers, two reals each, so two rows hold 2 · 3 · 2 = 12 reals.
Derivation 2: the whole matrix holds 9 complex numbers, 18 reals; leaving out the third row drops 3 complex numbers, 6 reals: 18 − 6 = 12.

## Verdict 1
Tag: 4.07
```cpp
#include <concepts>
#include <mdspan>
#include <type_traits>
#include <vector>

template <typename T>
using view = std::mdspan<T, std::dextents<int, 2>>;

template <typename K, typename T>
concept kernel = std::invocable<K&, view<T>, int>
    && std::is_void_v<std::invoke_result_t<K&, view<T>, int>>;

template <typename T, kernel<T> K>
void launch(view<T> v, K k)
{
    for (int s {0}; s < v.extent(0); ++s) {
        k(v, s);
    }
}

int main()
{
    std::vector<double> data(24, 0.0);
    view<double> v {data.data(), 2, 12};
    launch(v, [](view<float> w, int s) { w[s, 0] = 1.0f; });
}
```
Answer: c++23 ill-formed 25

## Alone 1
Tag: 4.07
Newer: 66, 73, 77, 95
Form: probes
Write a program that holds the host side of a field library, 12 reals at each site, under these names.
`layout_planes`: a layout policy for std::mdspan over extents (sites, 12). Real k of site s sits at place k / 4 · 4 · sites + s · 4 + k % 4, and the field takes sites · 12 places.
`view<T>`: std::mdspan<T, std::dextents<int, 2>, layout_planes>.
`real<T>`: a concept true for float and double only, the two precisions the library builds.
`kernel<K, T>`: a concept true when T is real and a K value k can be called as k(v, s) with a view<T> v and an int s, the call returning void.
`launch(v, k)`: calls k(v, s) for each site s in order; its template parameters are constrained by real and kernel.
`precision`: an enum class with f32 and f64. `dispatch(p, f)`: a constexpr function that calls f(float {}) when p is f32 and f(double {}) when p is f64, and returns what f returns.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
using f = decltype([](view<float>, int) {});
using g = decltype([](auto, int) {});
using h = decltype([](auto, int) { return 0; });
using ext = std::dextents<int, 2>;
constexpr layout_planes::mapping<ext> m {ext {8, 12}};
constexpr auto bytes = [](auto x) { return sizeof(x); };
static_assert(m(1, 5) == 37);
static_assert(m.required_span_size() == 96);
static_assert(dispatch(precision::f32, bytes) == 4);
static_assert(dispatch(precision::f64, bytes) == 8);
static_assert(kernel<f, float>);
static_assert(kernel<g, double>);
static_assert(kernel<f, double>);
static_assert(kernel<g, long double>);
static_assert(kernel<h, float>);
```
Accept: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
Reject: 13, 14, 15
### Reference
```cpp
#include <concepts>
#include <mdspan>
#include <type_traits>
#include <utility>

struct layout_planes {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_planes;

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type s,
                                        index_type k) const
        {
            return k / 4 * 4 * e_.extent(0) + s * 4 + k % 4;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

template <typename T>
using view =
    std::mdspan<T, std::dextents<int, 2>, layout_planes>;

template <typename T>
concept real = std::same_as<T, float>
    || std::same_as<T, double>;

template <typename K, typename T>
concept kernel = real<T> && std::invocable<K&, view<T>, int>
    && std::is_void_v<std::invoke_result_t<K&, view<T>, int>>;

template <real T, kernel<T> K>
void launch(view<T> v, K k)
{
    for (int s {0}; s < v.extent(0); ++s) {
        k(v, s);
    }
}

enum class precision { f32, f64 };

template <typename F>
constexpr auto dispatch(precision p, F f)
{
    switch (p) {
    case precision::f32:
        return f(float {});
    case precision::f64:
        return f(double {});
    }
    std::unreachable();
}

int main()
{
}
```
### Wrong
```cpp
#include <concepts>
#include <mdspan>
#include <type_traits>
#include <utility>

struct layout_planes {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_planes;

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type s,
                                        index_type k) const
        {
            return k / 4 * 4 * e_.extent(0) + s * 4 + k % 4;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

template <typename T>
using view =
    std::mdspan<T, std::dextents<int, 2>, layout_planes>;

template <typename T>
concept real = std::floating_point<T>;

template <typename K, typename T>
concept kernel = real<T> && std::invocable<K&, view<T>, int>
    && std::is_void_v<std::invoke_result_t<K&, view<T>, int>>;

template <real T, kernel<T> K>
void launch(view<T> v, K k)
{
    for (int s {0}; s < v.extent(0); ++s) {
        k(v, s);
    }
}

enum class precision { f32, f64 };

template <typename F>
constexpr auto dispatch(precision p, F f)
{
    switch (p) {
    case precision::f32:
        return f(float {});
    case precision::f64:
        return f(double {});
    }
    std::unreachable();
}

int main()
{
}
```
### Witness
```cpp
using w = decltype([](auto, int) {});
static_assert(!kernel<w, long double>);
```
