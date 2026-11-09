# 5.20 A returned name that may be moved is an xvalue
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.expr] ¶1
Clause: [diff.cpp20.expr], [expr.prim.id.unqual], [stmt.return], [dcl.type.decltype], [dcl.init.ref]
After: 2.04
Levels: c++20

## Example
```cpp
#include <print>
#include <type_traits>
#include <utility>

decltype(auto) pass(int&& x)
{
    //: Return the int&& parameter by name: in a return it is an xvalue.
    return (x);
}

int& bind(int&& x)
{
    //: Name it through an lvalue reference to return an int&.
    int& r {x};
    return r;
}

int main()
{
    int n {4};
    //: Check that pass returns int&&, as c++23 reads its return.
    using T = decltype(pass(std::move(n)));
    static_assert(std::is_same_v<T, int&&>);
    //: Write through the int& that bind returns.
    bind(std::move(n)) = 7;
    std::println("{}", n);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <utility>

int& pick(int&& x)
{
    return x;
}

int main()
{
    int n {3};
    int& r {pick(std::move(n))};
    r = 5;
    std::printf("%d\n", n);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 6

## Verdict 2
```cpp
#include <cstdio>
#include <utility>

decltype(auto) pass(int&& x)
{
    return (x);
}

int main()
{
    int n {3};
    int& r {pass(std::move(n))};
    r = 8;
    std::printf("%d\n", n);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 12

## Alone 1
Form: flag
Write a function `first` that takes an `int&&` parameter and returns an `int&` to the same int.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors accepts the program at c++20 and at c++23.
Expect:
- c++20: accept
- c++23: accept
### Reference
```cpp
#include <utility>

int& first(int&& x)
{
    int& r {x};
    return r;
}

int main()
{
    int n {1};
    first(std::move(n)) = 2;
    return n - 2;
}
```
### Wrong
```cpp
#include <utility>

int& first(int&& x)
{
    return x;
}

int main()
{
    int n {1};
    first(std::move(n)) = 2;
    return n - 2;
}
```
### Witness
```cpp
void probe(int n)
{
    int& r {first(std::move(n))};
    r = 0;
}
```

## Alone 2
Form: probes
Write a function template `same` that takes one argument by forwarding reference and returns a reference to it: an `int&` for an lvalue int, an `int&&` for an rvalue int.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(std::is_same_v<decltype(same(1)), int&&>);
int n2 {0};
static_assert(std::is_same_v<decltype(same(n2)), int&>);
int& p4 {same(4)};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <type_traits>

decltype(auto) same(auto&& x)
{
    return (x);
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

auto& same(auto&& x)
{
    return x;
}

int main()
{
}
```
### Witness
```cpp
int&& w {same(5)};
```
