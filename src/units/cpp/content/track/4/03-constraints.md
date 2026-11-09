# 4.03 Constraints
Part: constraints
Clause: [temp.pre], [temp.constr.constr], [temp.constr.decl], [temp.constr.atomic], [over.match.viable], [dcl.fct]
After: none
Levels: c++20

## Example
```cpp
#include <print>
#include <type_traits>

//: Let the template take integer types only.
template <typename T>
    requires std::is_integral_v<T>
T half(T x)
{
    return x / 2;
}

//: Put the requirement after the parameters instead.
double scaled(auto x)
    requires std::is_floating_point_v<decltype(x)>
{
    return x * 10.0;
}

int main()
{
    //: Call each with a type that meets its requirement.
    std::println("{}", half(9));
    std::println("{}", half(9L));
    std::println("{}", scaled(0.25));
    std::println("{}", scaled(0.5f));
}
```

## Verdict 1
```cpp
#include <type_traits>

template <typename T>
    requires std::is_integral_v<T>
T half(T x)
{
    return x / 2;
}

int main()
{
    int a {half(9)};
    double b {half(9.0)};
    return a == 4 && b == 4.5 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 13

## Verdict 2
```cpp
#include <cstdio>
#include <type_traits>

template <typename T>
    requires std::is_integral_v<T>
int kind(T)
{
    return 1;
}

int kind(double)
{
    return 2;
}

int main()
{
    std::printf("%d %d %d\n", kind(1), kind('a'), kind(2.5f));
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: probes
Write a function template `twice` that returns its argument times 2, which the compiler can call at compile time, and which takes an argument of an integer type only.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(twice(3) == 6);
static_assert(twice(4L) == 8L);
static_assert(twice(short {7}) == 14);
constexpr double d {twice(1.5)};
constexpr float f {twice(2.0f)};
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <type_traits>

template <typename T>
    requires std::is_integral_v<T>
constexpr T twice(T x)
{
    return x * 2;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
    requires std::is_arithmetic_v<T>
constexpr T twice(T x)
{
    return x * 2;
}

int main()
{
}
```
### Witness
```cpp
constexpr double w {twice(0.5)};
```

## Alone 2
Form: probes
Write a class template `Box` holding one value `v` of its type parameter, made by `Box<int> {3}`, with a member function `negate()` that returns minus `v`, which the compiler can call at compile time. A `Box` of any arithmetic type can be made, but `negate()` exists only for a signed type.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(Box<int> {3}.negate() == -3);
static_assert(Box<double> {1.5}.negate() == -1.5);
constexpr Box<unsigned> u {3};
static_assert(u.v == 3);
constexpr unsigned n {Box<unsigned> {3}.negate()};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <type_traits>

template <typename T>
struct Box
{
    T v;
    constexpr T negate() const
        requires std::is_signed_v<T>
    {
        return -v;
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
    requires std::is_signed_v<T>
struct Box
{
    T v;
    constexpr T negate() const
    {
        return -v;
    }
};

int main()
{
}
```
### Witness
```cpp
constexpr Box<unsigned char> w {1};
```
