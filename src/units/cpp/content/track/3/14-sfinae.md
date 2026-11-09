# 3.14 Substitution failure in the immediate context
Part: substitution failure in the immediate context
Clause: [temp.deduct.general], [temp.over], [temp.inst], [over.match.funcs]
After: 3.02, 3.04
Levels: c++11

## Example
```cpp
#include <array>
#include <cstddef>
#include <print>
#include <vector>

//: Name c.size() in the return type, so a type without it fails.
template <typename T>
auto size_of(const T& c) -> decltype(c.size())
{
    return c.size();
}

//: Give a second overload for a built-in array.
template <typename T, std::size_t N>
std::size_t size_of(const T (&)[N])
{
    return N;
}

int main()
{
    //: Call size_of on a vector, which only the first fits.
    std::vector<int> v {1, 2, 3};
    std::println("{}", size_of(v));
    //: Call it on an array: the first is dropped, not an error.
    int a[5] {};
    std::println("{}", size_of(a));
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T>
int pick(typename T::value_type*)
{
    return 1;
}

template <typename T>
int pick(...)
{
    return 2;
}

int main()
{
    std::printf("%d\n", pick<int>(nullptr));
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
template <typename T>
struct Inner
{
    using type = typename T::value_type;
};

template <typename T>
int pick(typename Inner<T>::type*)
{
    return 1;
}

template <typename T>
int pick(...)
{
    return 2;
}

int main()
{
    return pick<int>(nullptr) - 2;
}
```
Answer: c++11..c++23 ill-formed 4

## Alone 1
Form: probes
Write a function `half` that takes either an int or an object with a member function `size()`: for the object it returns `size() / 2`, for the int it returns 0; it can be called in a constant expression.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(half(std::array<int, 6> {}) == 3);
static_assert(half(std::array<char, 9> {}) == 4);
static_assert(half(5) == 0);
static_assert(half(std::array<int, 6> {}) == 0);
static_assert(half(5) == 2);
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <array>
#include <cstddef>

template <typename T>
constexpr auto half(const T& c) -> decltype(c.size() / 2)
{
    return c.size() / 2;
}

constexpr std::size_t half(long)
{
    return 0;
}

int main()
{
}
```
### Wrong
```cpp
#include <array>
#include <cstddef>

template <typename T>
constexpr auto half(const T& c)
{
    return c.size() / 2;
}

constexpr std::size_t half(long)
{
    return 0;
}

int main()
{
}
```
### Witness
```cpp
static_assert(half(8) == 0);
```

## Alone 2
Form: probes
Write a function template `twice` that takes an integer of any integer type and returns twice it in that type, and that a call with any other type of argument does not find; it can be called in a constant expression.
Input: none.
Output: none.
Limits: twice the argument fits in its type.
### Probes
```cpp
static_assert(twice(4) == 8);
static_assert(twice(short {-3}) == -6);
static_assert(std::is_same_v<decltype(twice(2L)), long>);
double d {twice(1.5)};
int* p {twice(nullptr)};
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <type_traits>

template <typename T>
constexpr auto twice(T x)
    -> std::enable_if_t<std::is_integral_v<T>, T>
{
    return x + x;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
constexpr auto twice(T x) -> T
{
    static_assert(std::is_integral_v<T>);
    return x + x;
}

int main()
{
}
```
### Witness
```cpp
constexpr int twice(long double)
{
    return 0;
}
int w {twice(2.5f)};
```
