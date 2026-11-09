# 4.06 Subsumption of constraints
Part: subsumption of constraints
Clause: [temp.constr.order], [temp.constr.normal], [temp.constr.atomic], [temp.func.order], [temp.spec.partial.order], [over.match.best]
After: 4.04
Levels: c++20

## Example
```cpp
#include <concepts>
#include <print>

//: Build one concept on another, so it asks for more.
template <typename T>
concept Integer = std::integral<T>;

template <typename T>
concept SignedInteger = Integer<T> && std::is_signed_v<T>;

//: Give one overload for each concept.
void show(Integer auto x)
{
    std::println("integer {}", x);
}

void show(SignedInteger auto x)
{
    std::println("signed integer {}", x);
}

int main()
{
    //: Pass an unsigned value; only the first one fits.
    show(7u);
    //: Pass a signed value; both fit, and the one asking more wins.
    show(-7);
}
```

## Verdict 1
```cpp
#include <type_traits>

template <typename T>
    requires std::is_integral_v<T>
int pick(T)
{
    return 1;
}

template <typename T>
    requires std::is_integral_v<T> && std::is_signed_v<T>
int pick(T)
{
    return 2;
}

int main()
{
    return pick(5) == 2 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 19

## Verdict 2
```cpp
#include <cstdio>
#include <type_traits>

template <typename T>
concept Integral = std::is_integral_v<T>;

template <typename T>
concept Signed = Integral<T> && std::is_signed_v<T>;

int pick(Integral auto)
{
    return 1;
}

int pick(Signed auto)
{
    return 2;
}

int main()
{
    std::printf("%d %d\n", pick(5), pick(5u));
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: probes
Write a function `rank(x)`, which the compiler can call at compile time, that returns 2 for an argument of a signed integral type, 1 for an argument of any other integral type, bool too, and takes no argument of any other type.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(rank(5u) == 1);
static_assert(rank(5) == 2);
static_assert(rank(5L) == 2);
static_assert(rank(true) == 1);
constexpr int r {rank(1.5)};
constexpr int s {rank(1.5f)};
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
#include <concepts>

template <std::integral T>
constexpr int rank(T)
{
    return 1;
}

template <std::signed_integral T>
constexpr int rank(T)
{
    return 2;
}

int main()
{
}
```
### Wrong
```cpp
#include <concepts>

template <std::integral T>
constexpr int rank(T)
{
    return 1;
}

template <typename T>
    requires std::is_signed_v<T>
constexpr int rank(T)
{
    return 2;
}

int main()
{
}
```
### Witness
```cpp
static_assert(rank(-3) == 2);
```

## Alone 2
Form: probes
Write a class template `Kind` with a static int constant `value`, which is 2 for a floating-point type of at least 8 bytes, 1 for any other floating-point type, and 0 for every other type.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors; float has 4 bytes, double 8.
### Probes
```cpp
static_assert(Kind<int>::value == 0);
static_assert(Kind<float>::value == 1);
static_assert(Kind<double>::value == 2);
static_assert(Kind<long double>::value == 2);
static_assert(Kind<long>::value == 0);
static_assert(Kind<float>::value == 2);
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
#include <concepts>

template <typename T>
struct Kind
{
    static constexpr int value {0};
};

template <std::floating_point T>
struct Kind<T>
{
    static constexpr int value {1};
};

template <typename T>
    requires std::floating_point<T> && (sizeof(T) >= 8)
struct Kind<T>
{
    static constexpr int value {2};
};

int main()
{
}
```
### Wrong
```cpp
#include <concepts>

template <typename T>
struct Kind
{
    static constexpr int value {0};
};

template <std::floating_point T>
struct Kind<T>
{
    static constexpr int value {1};
};

template <typename T>
    requires (sizeof(T) >= 8)
struct Kind<T>
{
    static constexpr int value {2};
};

int main()
{
}
```
### Witness
```cpp
static_assert(Kind<long long>::value == 0);
```
