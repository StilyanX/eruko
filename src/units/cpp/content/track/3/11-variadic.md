# 3.11 Variadic templates
Part: variadic templates
Clause: [temp.variadic], [temp.param], [expr.sizeof], [temp.deduct.call]
After: 3.02, 3.04
Levels: c++11

## Example
```cpp
#include <print>

//: End the recursion with an overload for one argument.
template <typename T>
T total(T last)
{
    return last;
}

//: Split the first argument from the pack of the rest.
template <typename T, typename... Rest>
T total(T first, Rest... rest)
{
    return first + total(rest...);
}

//: Count the arguments in a pack.
template <typename... Ts>
constexpr int count(Ts...)
{
    return sizeof...(Ts);
}

int main()
{
    //: Call the same templates with three and five arguments.
    std::println("{}", total(1, 2, 3));
    std::println("{}", total(1, 2, 3, 4, 5));
    std::println("{}", count('a', 2.0, 3));
    //: Call count with an empty pack.
    std::println("{}", count());
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T, typename... Rest>
T total(T first, Rest... rest)
{
    return first + total(rest...);
}

int main()
{
    std::printf("%d\n", total(1, 2, 3));
}
```
Answer: c++11..c++23 ill-formed 6

## Verdict 2
```cpp
#include <cstdio>

template <int... A>
struct Row
{
    template <int... B>
    static int dot()
    {
        int terms[] {A * B...};
        int total {0};
        for (int t : terms) {
            total += t;
        }
        return total;
    }
};

int main()
{
    std::printf("%d\n", Row<1, 2>::dot<3, 4, 5>());
}
```
Answer: c++11..c++23 ill-formed 9

## Alone 1
Form: probes
Write a function template `largest` that takes one or more arguments of one type and returns the largest of them, and that can be called in a constant expression.
Input: none.
Output: none.
Limits: the type has the operator >.
### Probes
```cpp
static_assert(largest(4) == 4);
static_assert(largest(3, 9, 2) == 9);
static_assert(largest(-1, -5) == -1);
static_assert(largest(-8, -2, -6, -4) == -2);
static_assert(largest(3, 9, 2) == 3);
int none {largest()};
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
template <typename T>
constexpr T largest(T x)
{
    return x;
}

template <typename T, typename... Rest>
constexpr T largest(T x, Rest... rest)
{
    T m {largest(rest...)};
    return x > m ? x : m;
}

int main()
{
}
```
### Wrong
```cpp
constexpr int largest()
{
    return 0;
}

template <typename T, typename... Rest>
constexpr T largest(T x, Rest... rest)
{
    T m {largest(rest...)};
    return x > m ? x : m;
}

int main()
{
}
```
### Witness
```cpp
static_assert(largest(-3, -7) == -3);
```

## Alone 2
Form: probes
Write a class template `Arity` that takes any number of types, none included, and has a static member `value`, a constant equal to the number of types.
Input: none.
Output: none.
Limits: at most 100 types.
### Probes
```cpp
static_assert(Arity<int>::value == 1);
static_assert(Arity<int, char, double>::value == 3);
static_assert(Arity<>::value == 0);
static_assert(Arity<int, int>::value == 1);
using A = Arity<int, 4>;
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
template <typename... Ts>
struct Arity
{
    static constexpr int value {sizeof...(Ts)};
};

int main()
{
}
```
### Wrong
```cpp
template <typename T, typename... Ts>
struct Arity
{
    static constexpr int value {sizeof...(Ts) + 1};
};

int main()
{
}
```
### Witness
```cpp
int w {Arity<>::value};
```
