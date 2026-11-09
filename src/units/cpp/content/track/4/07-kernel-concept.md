# 4.07 A concept for a kernel functor, tested by probes
Part: a concept for a kernel functor, tested by probes
Clause: [temp.concept], [temp.constr.op], [concept.invocable], [meta.trans.other], [func.require]
After: 4.05
Levels: c++20

## Example
```cpp
#include <concepts>
#include <cstddef>
#include <print>
#include <type_traits>

//: Ask that f(i) works for an index i and gives a double.
template <typename F>
concept site_value = std::invocable<F&, std::size_t>
    && std::convertible_to<
        std::invoke_result_t<F&, std::size_t>, double>;

//: Add f(i) over the sites 0 to n - 1.
double sum_sites(std::size_t n, site_value auto f)
{
    double s {0.0};
    for (std::size_t i {0}; i < n; ++i) {
        s += f(i);
    }
    return s;
}

int main()
{
    //: Check callables against the concept while compiling.
    static_assert(site_value<double (*)(std::size_t)>);
    static_assert(!site_value<int>);
    //: Pass a lambda that meets it.
    std::println("{}", sum_sites(4, [](std::size_t i) {
        return 0.5 * i;
    }));
}
```

## Verdict 1
```cpp
#include <concepts>
#include <type_traits>

template <typename F>
concept kernel = std::invocable<F, int>
    && std::is_void_v<std::invoke_result_t<F, int>>;

auto a = [](int) {};
auto b = [](int i) { return i; };

static_assert(kernel<decltype(a)>);
static_assert(kernel<decltype(b)>);

int main()
{
}
```
Answer: c++20..c++23 ill-formed 12

## Verdict 2
```cpp
#include <concepts>
#include <type_traits>

template <typename F>
concept kernel = std::invocable<F, int>
    && std::is_void_v<std::invoke_result_t<F, int>>;

static_assert(!kernel<decltype([](int&) {})>);
static_assert(kernel<decltype([](double) {})>);
static_assert(kernel<decltype([](auto) {})>);
static_assert(!kernel<int>);

int main()
{
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: probes
Write a concept `kernel` for a callable that a loop calls once for each site: a type F satisfies it when a value f of type F can be called as f(i) with an index i of type std::size_t, and that call returns void.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(kernel<decltype([](std::size_t) {})>);
static_assert(kernel<decltype([](int) {})>);
static_assert(kernel<void (*)(std::size_t)>);
static_assert(kernel<decltype([](std::size_t i) { return i; })>);
static_assert(kernel<decltype([](std::string) {})>);
static_assert(kernel<decltype([] {})>);
```
Accept: 1, 2, 3
Reject: 4, 5, 6
### Reference
```cpp
#include <concepts>
#include <cstddef>
#include <string>
#include <type_traits>

template <typename F>
concept kernel = std::invocable<F&, std::size_t>
    && std::is_void_v<std::invoke_result_t<F&, std::size_t>>;

int main()
{
}
```
### Wrong
```cpp
#include <concepts>
#include <cstddef>
#include <string>
#include <type_traits>

template <typename F>
concept kernel = std::is_invocable_r_v<void, F&, std::size_t>;

int main()
{
}
```
### Witness
```cpp
static_assert(!kernel<decltype([](int i) { return i; })>);
```

## Alone 2
Form: probes
Write a function template `apply_sites(n, f)` that calls f(i) once for each index i from 0 to n - 1, where n is a std::size_t. It takes only a callable f that can be called as f(i) with i of type std::size_t and whose call returns void; for any other f, the call of `apply_sites` itself is rejected.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
void p1() { apply_sites(4, [](std::size_t) {}); }
void p2() { apply_sites(4, [](int) {}); }
void p3() { apply_sites(4, [](auto) {}); }
void p4() { apply_sites(4, [](std::size_t i) { return i; }); }
void p5() { apply_sites(4, [](std::string) {}); }
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <concepts>
#include <cstddef>
#include <string>
#include <type_traits>

template <typename F>
    requires std::invocable<F&, std::size_t>
        && std::is_void_v<std::invoke_result_t<F&, std::size_t>>
void apply_sites(std::size_t n, F f)
{
    for (std::size_t i {0}; i < n; ++i) {
        f(i);
    }
}

int main()
{
}
```
### Wrong
```cpp
#include <concepts>
#include <cstddef>
#include <string>
#include <type_traits>

template <typename F>
    requires std::invocable<F&, std::size_t>
void apply_sites(std::size_t n, F f)
{
    for (std::size_t i {0}; i < n; ++i) {
        f(i);
    }
}

int main()
{
}
```
### Witness
```cpp
void w() { apply_sites(2, [](double) { return 1.0; }); }
```
