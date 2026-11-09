# 3.15 The discarded branch of `if constexpr`
Part: the discarded branch of `if constexpr`
Clause: [stmt.if], [temp.inst], [temp.res.general], [dcl.spec.auto]
After: 3.03, 3.11
Levels: c++17

## Example
```cpp
#include <print>
#include <string>
#include <type_traits>

//: Pick a branch by a condition known while compiling.
template <typename T>
int size_of(const T& x)
{
    if constexpr (std::is_integral_v<T>) {
        return 1;
    } else {
        return static_cast<int>(x.size());
    }
}

int main()
{
    //: Call it with an int: x.size() is discarded, never made.
    std::println("{}", size_of(5));
    //: Call it with a string: now the other branch is discarded.
    std::println("{}", size_of(std::string {"four"}));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <type_traits>

template <typename T>
int size_of(const T& x)
{
    if constexpr (std::is_integral<T>::value) {
        return 1;
    } else {
        return static_cast<int>(x.size());
    }
}

int main()
{
    std::printf("%d\n", size_of(5));
}
```
Levels: c++14
Answer:
- c++14: ill-formed 7
- c++17..c++23: defined

## Verdict 2
```cpp
int main()
{
    int x {5};
    if constexpr (false) {
        return x.size();
    }
    return 0;
}
```
Answer: c++17..c++23 ill-formed 5

## Alone 1
Form: probes
Write a function template `value_of(x)` that takes an int or a pointer to an int and returns the int, read through the pointer when x is a pointer; it can be called in a constant expression.
Input: none.
Output: none.
Limits: the pointer is not null.
### Probes
```cpp
constexpr int k {7};
static_assert(value_of(3) == 3);
static_assert(value_of(&k) == 7);
int g {[](auto v) { if constexpr (false) { *v; } return v; }(1)};
int h {[](int v) { if constexpr (false) { *v; } return v; }(1)};
static_assert(value_of(&k) == 0);
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
#include <type_traits>

template <typename T>
constexpr int value_of(T x)
{
    if constexpr (std::is_pointer_v<T>) {
        return *x;
    } else {
        return x;
    }
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
constexpr int value_of(T x)
{
    if (std::is_pointer_v<T>) {
        return *x;
    } else {
        return x;
    }
}

int main()
{
}
```
### Witness
```cpp
static_assert(value_of(4) == 4);
```

## Alone 2
Form: probes
Write one function template `last` that takes one or more arguments, of any types, and returns its last argument; it can be called in a constant expression.
Input: none.
Output: none.
Limits: at most 100 arguments.
### Probes
```cpp
static_assert(last(4) == 4);
static_assert(last(1, 2, 3) == 3);
static_assert(last(1, 2.5) == 2.5);
static_assert(std::is_same_v<decltype(last(1, 'c')), char>);
constexpr auto p {&last<int>};
static_assert(last(1, 2) == 1);
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
#include <type_traits>

template <typename T, typename... Rest>
constexpr auto last(T x, Rest... rest)
{
    if constexpr (sizeof...(rest) == 0) {
        return x;
    } else {
        return last(rest...);
    }
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T, typename... Rest>
constexpr auto last(T x, Rest... rest)
{
    if (sizeof...(rest) == 0) {
        return x;
    } else {
        return last(rest...);
    }
}

int main()
{
}
```
### Witness
```cpp
static_assert(last(9) == 9);
```
