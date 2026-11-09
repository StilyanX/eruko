# 4.04 Concepts
Part: concepts
Clause: [temp.concept], [temp.param], [dcl.spec.auto.general], [dcl.type.auto.deduct], [concepts.syn], [concepts.arithmetic]
After: 4.03
Levels: c++20

## Example
```cpp
#include <concepts>
#include <print>

//: Name a requirement once, from two of the standard's.
template <typename T>
concept Number = std::integral<T> || std::floating_point<T>;

//: Use the name in place of typename.
template <Number T>
T square(T x)
{
    return x * x;
}

//: Or write it before auto in a parameter.
void show(Number auto x)
{
    std::println("{}", x);
}

int main()
{
    //: Ask the concept a yes or no question while compiling.
    static_assert(Number<long>);
    static_assert(!Number<int*>);
    //: Call each function with a type the concept takes.
    show(square(7));
    show(square(1.5));
}
```

## Verdict 1
```cpp
#include <concepts>

template <typename T>
concept Scalar = std::integral<T> || std::floating_point<T>;

static_assert(Scalar<bool>);
static_assert(Scalar<char>);
static_assert(Scalar<int*>);

int main()
{
}
```
Answer: c++20..c++23 ill-formed 8

## Verdict 2
```cpp
#include <concepts>

int main()
{
    std::integral auto a {3u};
    std::same_as<int> auto b {2L};
    std::convertible_to<double> auto c {4};
    return a + b + c == 9 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 6

## Alone 1
Form: probes
Write a concept `Index` that every integer type satisfies except `bool`, and no other type.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(Index<int>);
static_assert(Index<std::size_t>);
static_assert(Index<char>);
static_assert(!Index<int*>);
static_assert(Index<bool>);
static_assert(Index<double>);
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
#include <concepts>
#include <cstddef>

template <typename T>
concept Index = std::integral<T> && !std::same_as<T, bool>;

int main()
{
}
```
### Wrong
```cpp
#include <concepts>
#include <cstddef>

template <typename T>
concept Index = std::integral<T>;

int main()
{
}
```
### Witness
```cpp
static_assert(!Index<bool>);
```

## Alone 2
Form: probes
Write a function template `mean(a, b)` that returns the mean of two values of the same floating-point type, which the compiler can call at compile time, and which takes two arguments of one floating-point type only.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(mean(1.0, 2.0) == 1.5);
static_assert(mean(1.0f, 2.0f) == 1.5f);
constexpr auto m {mean(1, 2)};
constexpr auto n {mean(1.0, 2.0f)};
```
Accept: 1, 2
Reject: 3, 4
### Reference
```cpp
#include <concepts>

template <std::floating_point T>
constexpr T mean(T a, T b)
{
    return (a + b) / 2;
}

int main()
{
}
```
### Wrong
```cpp
#include <concepts>

constexpr auto mean(std::floating_point auto a,
                    std::floating_point auto b)
{
    return (a + b) / 2;
}

int main()
{
}
```
### Witness
```cpp
constexpr auto w {mean(1.0f, 3.0)};
```
