# 5.16 A call operator with no object: `static operator()`
Part: the static call operator
Clause: [over.call], [class.static.mfct], [expr.prim.lambda.general], [expr.prim.lambda.closure]
After: 1.41
Levels: c++23

## Example
```cpp
#include <iostream>
#include <print>

//: Make the call operator static, since it uses no member.
struct Square {
    static int operator()(int x)
    {
        return x * x;
    }
};

int main()
{
    int x {3};
    std::cin >> x;
    //: Call it through an object, as any call operator.
    Square sq {};
    int a {sq(x)};
    //: Call it with no object, by its name.
    int b {Square::operator()(x)};
    //: Take its address as a plain pointer to a function.
    int (*f)(int) {&Square::operator()};
    //: Make a lambda's call operator static; it captures nothing.
    auto cube {[](int y) static { return y * y * y; }};
    std::println("{} {} {} {}", a, b, f(x), cube(x));
}
```

## Verdict 1
```cpp
#include <print>

struct Counter {
    static inline int calls {0};
    static int operator()(int x)
    {
        ++calls;
        return x + calls;
    }
};

int main()
{
    Counter c {};
    int first {c(10)};
    int second {Counter::operator()(10)};
    std::println("{} {}", first, second);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

int main()
{
    int k {2};
    auto times {[k](int a) static { return k * a; }};
    std::println("{}", times(5));
}
```
Answer: c++23 ill-formed 6

## Alone 1
Form: probes
Write a struct `Square` whose call operator takes an int and returns its square, can run while compiling, and can be called with no object: `Square::operator()(3)`.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(Square {}(4) == 16);
static_assert(Square::operator()(5) == 25);
int (*f)(int) {&Square::operator()};
int (Square::*m)(int) const {&Square::operator()};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
struct Square {
    static constexpr int operator()(int x)
    {
        return x * x;
    }
};

int main()
{
}
```
### Wrong
```cpp
struct Square {
    constexpr int operator()(int x) const
    {
        return x * x;
    }
};

int main()
{
}
```
### Witness
```cpp
int (*g)(int) {&Square::operator()};
```

## Alone 2
Form: probes
Write a constexpr variable `cube` that holds a lambda. The lambda takes an int, returns its cube, and its type's call operator can be called with no object.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
using Cube = decltype(cube);
static_assert(cube(2) == 8);
static_assert(Cube::operator()(3) == 27);
int (*p)(int) {&Cube::operator()};
int (Cube::*m)(int) const {&Cube::operator()};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
constexpr auto cube {[](int x) static { return x * x * x; }};

int main()
{
}
```
### Wrong
```cpp
constexpr auto cube {[](int x) { return x * x * x; }};

int main()
{
}
```
### Witness
```cpp
static_assert(decltype(cube)::operator()(-2) == -8);
```
