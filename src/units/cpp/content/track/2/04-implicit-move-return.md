# 2.04 The implicit move in a return statement
Part: the implicit move in a `return` statement
Clause: [expr.prim.id.unqual], [stmt.return], [class.copy.elision], [diff.cpp17.class], [diff.cpp20.expr]
After: 2.03
Levels: c++11

## Example
```cpp
#include <memory>
#include <print>

//: Return a local by name, so it is moved where it is not elided.
std::unique_ptr<int> make(int n)
{
    std::unique_ptr<int> p {new int {n}};
    return p;
}

//: Return a parameter by name, so it is moved, not copied.
std::unique_ptr<int> pass(std::unique_ptr<int> p)
{
    return p;
}

int main()
{
    //: Hand a pointer that cannot be copied in and get it back.
    std::unique_ptr<int> a {pass(make(7))};
    std::println("{}", *a);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>

std::unique_ptr<int> pass(std::unique_ptr<int>&& p)
{
    return p;
}

int main()
{
    std::unique_ptr<int> p {new int {3}};
    std::unique_ptr<int> q {pass(static_cast<
        std::unique_ptr<int>&&>(p))};
    std::printf("%d\n", *q);
}
```
Answer:
- c++11..c++17: ill-formed 6
- c++20..c++23: defined

## Verdict 2
```cpp
#include <cstdio>

int& keep(int&& x)
{
    return x;
}

int main()
{
    int n {4};
    int& r {keep(static_cast<int&&>(n))};
    r += 1;
    std::printf("%d\n", n);
}
```
Answer:
- c++11..c++20: defined
- c++23: ill-formed 5

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Tally {
    Tally() = default;
    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
    Tally(Tally&&, Where at = Where::current())
    {
        std::println("@{} moves", at.line());
    }
};

Tally pass(Tally t)
{
    return t;
}

Tally keep(const Tally& t)
{
    return t;
}

Tally pick(Tally&& t)
{
    return t;
}

int main()
{
    Tally a;
    Tally b {pass(a)};
    Tally c {keep(a)};
    Tally d {pick(Tally {})};
}
```

## Alone 1
Form: flag
Write a program with a function `pass(p)` that takes a std::unique_ptr<int> and returns it by value with `return p;`, and a `main` that calls `pass` with a std::unique_ptr<int> made in the call.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++20..c++23: accept
- c++11..c++17: accept
### Reference
```cpp
#include <memory>

std::unique_ptr<int> pass(std::unique_ptr<int> p)
{
    return p;
}

int main()
{
    std::unique_ptr<int> q {pass(std::unique_ptr<int> {})};
}
```
### Wrong
```cpp
#include <memory>

std::unique_ptr<int> pass(std::unique_ptr<int>&& p)
{
    return p;
}

int main()
{
    std::unique_ptr<int> q {pass(std::unique_ptr<int> {})};
}
```
### Witness
```cpp
std::unique_ptr<int> again()
{
    return pass(std::unique_ptr<int> {new int {1}});
}
```

## Alone 2
Form: flag
Write a function `same(a)` that takes an int rvalue reference and returns an int& to the int that a names, and a `main` that calls it.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++11..c++23: accept
### Reference
```cpp
int& same(int&& a)
{
    return static_cast<int&>(a);
}

int main()
{
    int n {1};
    same(static_cast<int&&>(n)) = 2;
    return n == 2 ? 0 : 1;
}
```
### Wrong
```cpp
int& same(int&& a)
{
    return a;
}

int main()
{
    int n {1};
    same(static_cast<int&&>(n)) = 2;
    return n == 2 ? 0 : 1;
}
```
### Witness
```cpp
int& twice(int&& a)
{
    return same(static_cast<int&&>(a));
}
```
