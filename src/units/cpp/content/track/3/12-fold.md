# 3.12 Fold expressions
Part: fold expressions
Clause: [expr.prim.fold], [temp.variadic]
After: 3.11
Levels: c++17

## Example
```cpp
#include <print>

//: Fold a pack with + and a start value, so it may be empty.
template <typename... Ts>
constexpr int sum(Ts... v)
{
    return (0 + ... + v);
}

//: Group from the right with a pack on the left of the dots.
template <typename... Ts>
constexpr int right_minus(Ts... v)
{
    return (v - ...);
}

//: Group from the left with a pack on the right of the dots.
template <typename... Ts>
constexpr int left_minus(Ts... v)
{
    return (... - v);
}

int main()
{
    //: Print the sum of three numbers and of none.
    std::println("{} {}", sum(1, 2, 3), sum());
    //: Print 1 - (2 - 3), then (1 - 2) - 3.
    std::println("{}", right_minus(1, 2, 3));
    std::println("{}", left_minus(1, 2, 3));
}
```

## Verdict 1
```cpp
template <typename... Ts>
constexpr int sum(Ts... v)
{
    return (v + ... + 0);
}

static_assert(sum(1, 2, 3) == 6, "");

int main()
{
}
```
Levels: c++11
Answer:
- c++11..c++14: ill-formed 4
- c++17..c++23: defined

## Verdict 2
```cpp
template <typename... Ts>
constexpr int sum(Ts... v)
{
    return (v + ...);
}

int main()
{
    return sum();
}
```
Answer: c++17..c++23 ill-formed 4

## Alone 1
Form: probes
Write a function template `subtract` that takes one or more int arguments and returns the first minus each later argument in turn, from left to right, and that can be called in a constant expression.
Input: none.
Output: none.
Limits: at most 100 arguments.
### Probes
```cpp
static_assert(subtract(7) == 7);
static_assert(subtract(10, 3) == 7);
static_assert(subtract(10, 3, 2) == 5);
static_assert(subtract(1, 2, 3, 4) == -8);
static_assert(subtract(10, 3, 2) == 9);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename... Ts>
constexpr int subtract(Ts... v)
{
    return (... - v);
}

int main()
{
}
```
### Wrong
```cpp
template <typename... Ts>
constexpr int subtract(Ts... v)
{
    return (v - ...);
}

int main()
{
}
```
### Witness
```cpp
static_assert(subtract(20, 5, 1) == 14);
```

## Alone 2
Form: probes
Write a function template `product` that takes any number of int arguments, none included, and returns their product, or 1 when there are none, and that can be called in a constant expression.
Input: none.
Output: none.
Limits: the product fits in an int.
### Probes
```cpp
static_assert(product(6) == 6);
static_assert(product(2, 3, 4) == 24);
static_assert(product(5, 0) == 0);
static_assert(product() == 1);
static_assert(product() == 0);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename... Ts>
constexpr int product(Ts... v)
{
    return (1 * ... * v);
}

int main()
{
}
```
### Wrong
```cpp
template <typename... Ts>
constexpr int product(Ts... v)
{
    return (v * ...);
}

int main()
{
}
```
### Witness
```cpp
constexpr int w {product()};
```
