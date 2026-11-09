# 4.05 A concept for a field type, tested by probes
Part: a concept for a field type, tested by probes
Clause: [temp.concept], [expr.prim.req.general], [expr.prim.req.simple], [expr.prim.req.compound], [concepts.object], [concepts.equalitycomparable]
After: 4.04
Levels: c++20

## Example
```cpp
#include <concepts>
#include <print>

//: Ask that a value can be scaled by a double and stay a T.
template <typename T>
concept scalable = std::copyable<T> && requires(T a, double s) {
    { a * s } -> std::convertible_to<T>;
};

//: Scale any value whose type meets the concept.
template <scalable T>
T scale(T a, double s)
{
    return a * s;
}

int main()
{
    //: Check types against the concept while compiling.
    static_assert(scalable<double>);
    static_assert(scalable<float>);
    static_assert(!scalable<int*>);
    //: Use it with a type that meets it.
    std::println("{}", scale(2.5, 4.0));
}
```

## Verdict 1
```cpp
#include <concepts>

template <typename T>
concept field = requires(T a, T b) {
    { a * b } -> std::same_as<T>;
};

static_assert(field<double>);
static_assert(field<short>);

int main()
{
}
```
Answer: c++20..c++23 ill-formed 9

## Verdict 2
```cpp
#include <complex>
#include <string>
#include <valarray>

template <typename T>
concept field = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
};

static_assert(field<std::complex<double>>);
static_assert(!field<std::string>);
static_assert(field<bool>);
static_assert(!field<int*>);

int main()
{
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: probes
Write a concept `field` for the type of the values of a numerical field: a type T satisfies it when T can be copied and made with no value given, and for two values a and b of T, a + b, a - b and a * b each give a value that converts to T, and a == b and a != b each give a value that converts to bool. Types such as double, float and std::complex<double> satisfy it.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(field<double>);
static_assert(field<float>);
static_assert(field<std::complex<double>>);
static_assert(field<int>);
static_assert(field<std::string>);
static_assert(field<int*>);
static_assert(field<std::unique_ptr<double>>);
static_assert(field<std::valarray<double>>);
```
Accept: 1, 2, 3, 4
Reject: 5, 6, 7, 8
### Reference
```cpp
#include <complex>
#include <concepts>
#include <memory>
#include <string>
#include <valarray>

template <typename T>
concept field = std::copyable<T>
    && std::default_initializable<T>
    && std::equality_comparable<T>
    && requires(T a, T b) {
        { a + b } -> std::convertible_to<T>;
        { a - b } -> std::convertible_to<T>;
        { a * b } -> std::convertible_to<T>;
    };

int main()
{
}
```
### Wrong
```cpp
#include <complex>
#include <concepts>
#include <memory>
#include <string>
#include <valarray>

template <typename T>
concept field = std::copyable<T>
    && std::default_initializable<T>
    && requires(T a, T b) {
        { a + b } -> std::convertible_to<T>;
        { a - b } -> std::convertible_to<T>;
        { a * b } -> std::convertible_to<T>;
    };

int main()
{
}
```
### Witness
```cpp
static_assert(!field<std::valarray<double>>);
```

## Alone 2
Form: probes
Write a concept `closed_field`: a type T satisfies it when T can be copied and made with no value given, and for two values a and b of T, a + b, a - b and a * b each have the type T itself.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(closed_field<double>);
static_assert(closed_field<float>);
static_assert(closed_field<std::complex<double>>);
static_assert(closed_field<int>);
static_assert(closed_field<short>);
static_assert(closed_field<char>);
static_assert(closed_field<std::string>);
```
Accept: 1, 2, 3, 4
Reject: 5, 6, 7
### Reference
```cpp
#include <complex>
#include <concepts>
#include <string>

template <typename T>
concept closed_field = std::copyable<T>
    && std::default_initializable<T>
    && requires(T a, T b) {
        { a + b } -> std::same_as<T>;
        { a - b } -> std::same_as<T>;
        { a * b } -> std::same_as<T>;
    };

int main()
{
}
```
### Wrong
```cpp
#include <complex>
#include <concepts>
#include <string>

template <typename T>
concept closed_field = std::copyable<T>
    && std::default_initializable<T>
    && requires(T a, T b) {
        { a + b } -> std::convertible_to<T>;
        { a - b } -> std::convertible_to<T>;
        { a * b } -> std::convertible_to<T>;
    };

int main()
{
}
```
### Witness
```cpp
static_assert(!closed_field<short>);
```
