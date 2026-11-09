# 3.16 The point of instantiation
Part: the point of instantiation
Clause: [temp.point], [temp.dep.candidate], [basic.lookup.argdep]
After: 3.01
Levels: c++11

## Example
```cpp
#include <print>

//: Call a dependent name that the template does not see yet.
template <typename T>
int area(T shape)
{
    return side(shape) * side(shape);
}

//: Declare a type and its side function after the template.
namespace geo {
struct Tile {
    int length;
};

int side(Tile tile)
{
    return tile.length;
}
}

//: Use the template; its point of instantiation follows main.
int main()
{
    std::println("{}", area(geo::Tile {3}));
}
```

## Verdict 1
```cpp
#include <cstdio>

namespace shapes {
struct Box {
};

int weigh(Box, long)
{
    return 1;
}
}

template <typename T>
int pick(T value)
{
    return weigh(value, 0);
}

int first()
{
    return pick(shapes::Box {});
}

namespace shapes {
int weigh(Box, int)
{
    return 2;
}
}

int main()
{
    std::printf("%d\n", first());
}
```
Answer: c++11 ndr
Derivation 1: [temp.point]/1 and /7 give pick<Box> a point of instantiation right after first() and another at the end of the file; at the first only weigh(Box, long) is visible, at the second argument-dependent lookup also finds weigh(Box, int), a better match for 0, so the two points give the specialization different meanings and the program is ill-formed, no diagnostic required.
Derivation 2: [temp.dep.candidate]/1: the dependent call weigh(value, 0) would find a better match, weigh(Box, int), had its lookup considered every declaration in namespace shapes rather than those visible where first() refers to pick, so the program is ill-formed and no diagnostic is required.

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
T twice(T value)
{
    return grow(value) + grow(value);
}

int grow(int value)
{
    return value + 1;
}

int main()
{
    std::printf("%d\n", twice(4));
}
```
Answer: c++11 ill-formed 6

## Alone 1
Form: probes
Write a function template `area(shape)` whose return type is `decltype(side(shape) * side(shape))` and which returns `side(shape) * side(shape)`, and a function `side(int)` that returns its argument, so that `area(3)` is 9, `area` works on a type declared later in its own namespace with its own `side`, and a call `area(x)` for which no `side(x)` can be found fails at the call.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
int side(int length)
{
    return length;
}

template <typename T>
auto area(T shape) -> decltype(side(shape) * side(shape))
{
    return side(shape) * side(shape);
}

int main()
{
}
```
### Wrong
```cpp
template <typename T>
auto area(T shape) -> decltype(side(shape) * side(shape))
{
    return side(shape) * side(shape);
}

int side(int length)
{
    return length;
}

int main()
{
}
```
### Probes
```cpp
int a {area(3)};
namespace geo {
struct Tile { int s; };
int side(Tile t) { return t.s; }
}
int b {area(geo::Tile {2})};
struct Plain { int s; };
int c {area(Plain {2})};
```
Accept: 1, 2, 3, 4, 5, 6, 7
Reject: 8
### Witness
```cpp
int w {area(5)};
```

## Alone 2
Form: probes
Write a function template `total(a, b)` that returns `value(a) + value(b)` as an int, and after it a namespace `money` holding a struct `Coin` with an int member `cents`, then a function `value` that takes a `Coin` and returns its cents, so that `total(money::Coin {5}, money::Coin {7})` is 12.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
template <typename T>
int total(T a, T b)
{
    return value(a) + value(b);
}

namespace money {
struct Coin {
    int cents;
};

int value(Coin coin)
{
    return coin.cents;
}
}

int main()
{
}
```
### Wrong
```cpp
template <typename T>
int total(T a, T b)
{
    return value(a) + value(b);
}

namespace money {
struct Coin {
    int cents;
};
}

int value(money::Coin coin)
{
    return coin.cents;
}

int main()
{
}
```
### Probes
```cpp
int t {total(money::Coin {5}, money::Coin {7})};
int u {total(money::Coin {5}, 7)};
```
Accept: 1
Reject: 2
### Witness
```cpp
int w {total(money::Coin {1}, money::Coin {2})};
```
