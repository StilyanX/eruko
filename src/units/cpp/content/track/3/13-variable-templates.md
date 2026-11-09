# 3.13 Variable templates
Part: variable templates
Clause: [temp.pre], [temp.inst], [temp.expl.spec], [dcl.init.list], [expr.const]
After: 3.05
Levels: c++14

## Example
```cpp
#include <print>

//: Declare one constant for every type T.
template <typename T>
constexpr T pi {static_cast<T>(3.14159265358979323846L)};

//: Give a variable template a value parameter too.
template <int N>
constexpr int squared {N * N};

//: Keep one counter for every type, each its own variable.
template <typename T>
int made {0};

int main()
{
    //: Name the constant for float and for double.
    std::println("{}", pi<float>);
    std::println("{}", pi<double>);
    //: Use a value computed while compiling.
    static_assert(squared<12> == 144);
    std::println("{}", squared<12>);
    //: Change the counter for int and leave the one for long.
    made<int> += 2;
    std::println("{} {}", made<int>, made<long>);
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T>
constexpr T pi {3.14159};

int main()
{
    std::printf("%f\n", pi<double>);
    std::printf("%d\n", pi<int>);
}
```
Answer: c++14..c++23 ill-formed 4

## Verdict 2
```cpp
template <int N>
constexpr int factorial {N * factorial<N - 1>};

template <>
constexpr int factorial<0> {1};

static_assert(factorial<13> > 0, "");

int main()
{
}
```
Answer: c++14..c++23 undefined constant

## Alone 1
Form: probes
Write a variable template `max_of` that gives, for an integer type T, the largest value of T as a constant of type T.
Input: none.
Output: none.
Limits: T is one of the standard integer types.
### Probes
```cpp
static_assert(max_of<short> == 32767);
static_assert(max_of<unsigned char> == 255);
using C = decltype(max_of<char>);
static_assert(std::is_same_v<C, const char>);
int a[max_of<signed char>];
max_of<int> = 0;
static_assert(max_of<signed char> == 255);
```
Accept: 1, 2, 3, 4, 5
Reject: 6, 7
### Reference
```cpp
#include <limits>
#include <type_traits>

template <typename T>
constexpr T max_of {std::numeric_limits<T>::max()};

int main()
{
}
```
### Wrong
```cpp
#include <limits>
#include <type_traits>

template <typename T>
constexpr long long max_of {std::numeric_limits<T>::max()};

int main()
{
}
```
### Witness
```cpp
using I = decltype(max_of<int>);
static_assert(std::is_same_v<I, const int>);
```

## Alone 2
Form: probes
Write a variable template `bits_of` that gives, for a type T, the number of bits in T as an int constant, except that it gives 1 for bool.
Input: none.
Output: none.
Limits: T is char, short, int, long long or bool.
### Probes
```cpp
static_assert(bits_of<char> == 8);
static_assert(bits_of<int> == 32);
static_assert(bits_of<long long> == 64);
static_assert(bits_of<bool> == 1);
static_assert(bits_of<bool> == 8);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <climits>

template <typename T>
constexpr int bits_of {sizeof(T) * CHAR_BIT};

template <>
constexpr int bits_of<bool> {1};

int main()
{
}
```
### Wrong
```cpp
#include <climits>

template <typename T>
constexpr int bits_of {sizeof(T) * CHAR_BIT};

int main()
{
}
```
### Witness
```cpp
static_assert(bits_of<bool> == 1);
```
