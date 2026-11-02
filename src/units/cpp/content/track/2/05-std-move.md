# 2.05 Casting to an rvalue with std::move
Part: `std::move`
Clause: [forward], [expr.static.cast], [dcl.init.ref], [class.copy.ctor]
After: 2.03
Levels: c++11

## Example
```cpp
#include <memory>
#include <print>
#include <utility>

int main()
{
    //: Make a pointer that cannot be copied.
    std::unique_ptr<int> first {new int {7}};
    //: Cast it to an rvalue with std::move, so it is moved.
    std::unique_ptr<int> second {std::move(first)};
    //: Bind a reference to std::move's result, which moves nothing.
    std::unique_ptr<int>&& alias {std::move(second)};
    std::println("{} {}", *second, *alias);
}
```

## Verdict 1
```cpp
#include <memory>
#include <utility>

int main()
{
    const std::unique_ptr<int> p {new int {1}};
    std::unique_ptr<int> q {std::move(p)};
}
```
Answer: c++11..c++23 ill-formed 7

## Verdict 2
```cpp
#include <cstdio>
#include <memory>
#include <utility>

int main()
{
    std::unique_ptr<int> p {new int {7}};
    std::unique_ptr<int>&& r {std::move(p)};
    std::printf("%d\n", *p + *r);
}
```
Answer: c++11..c++23 defined

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

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

int main()
{
    Tally a;
    const Tally c {};
    Tally b {std::move(a)};
    Tally d {std::move(c)};
    Tally&& r {std::move(b)};
    Tally e {r};
    Tally f {std::move(r)};
}
```

## Alone 1
Form: flag
Write a program that makes a std::unique_ptr<int> named `first` holding 5, hands what it holds to a second std::unique_ptr<int> named `second`, and prints the int through `second`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++11..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <memory>
#include <utility>

int main()
{
    std::unique_ptr<int> first {new int {5}};
    std::unique_ptr<int> second {std::move(first)};
    std::printf("%d\n", *second);
}
```
### Wrong
```cpp
#include <cstdio>
#include <memory>
#include <utility>

int main()
{
    const std::unique_ptr<int> first {new int {5}};
    std::unique_ptr<int> second {std::move(first)};
    std::printf("%d\n", *second);
}
```
### Witness
```cpp
void again(std::unique_ptr<int> p)
{
    std::unique_ptr<int> q {std::move(p)};
}
```

## Alone 2
Form: probes
Write a struct `Holder` with a std::unique_ptr<int> member `item` and a constructor that takes a std::unique_ptr<int> by value and keeps it in `item`.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
void p1() { Holder h {std::unique_ptr<int> {new int {1}}}; }
void p2(std::unique_ptr<int> p) { Holder h {std::move(p)}; }
void p3(std::unique_ptr<int> p) { Holder h {p}; }
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <memory>
#include <utility>

struct Holder {
    std::unique_ptr<int> item;
    Holder(std::unique_ptr<int> p) : item {std::move(p)}
    {
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <memory>
#include <utility>

struct Holder {
    std::unique_ptr<int> item;
    Holder(std::unique_ptr<int> p) : item {p}
    {
    }
};

int main()
{
}
```
### Witness
```cpp
void again() { Holder h {nullptr}; }
```
