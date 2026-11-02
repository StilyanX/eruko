# 1.32 Argument-dependent lookup
Part: argument-dependent lookup
Clause: [basic.lookup.argdep], [basic.lookup.unqual], [over.match]
After: 1.18
Levels: c++23

## Example
```cpp
#include <print>

//: Put a type and a function for it in one namespace.
namespace shapes {
struct Square {
    int side;
};

int area(Square s)
{
    return s.side * s.side;
}
}

int main()
{
    //: Make a Square from outside the namespace.
    shapes::Square s {3};
    //: Call area without shapes::, since its argument is a shapes type.
    std::println("{}", area(s));
    //: Name the namespace anyway when you want to say it.
    std::println("{}", shapes::area(s));
}
```

## Verdict 1
```cpp
#include <print>

namespace shapes {
struct Square {
    int side;
};

int area(Square s)
{
    return s.side * s.side;
}
}

int area(shapes::Square s)
{
    return 4 * s.side;
}

int main()
{
    shapes::Square s {3};
    std::println("{}", area(s));
}
```
Answer: c++23 ill-formed 22

## Verdict 2
```cpp
namespace tools {
struct Box {
    int n;
};

int twice(int n)
{
    return 2 * n;
}
}

int main()
{
    tools::Box b {4};
    return twice(b.n) - 8;
}
```
Answer: c++23 ill-formed 15

## Alone 1
Form: probes
Write a namespace `geometry` holding a struct `Point` with int members x and y, and a function `norm2` that returns x · x + y · y for a point, so that code outside the namespace can call `norm2(p)` on a point p without `geometry::`, while the program compiles.
Input: none.
Output: none.
Limits: −1000 ≤ x, y ≤ 1000.
### Probes
```cpp
static_assert(norm2(geometry::Point {3, 4}) == 25);
constexpr geometry::Point p {1, 2};
static_assert(norm2(p) == 5);
static_assert(norm2(5) == 25);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
namespace geometry {
struct Point {
    int x;
    int y;
};

constexpr int norm2(Point p)
{
    return p.x * p.x + p.y * p.y;
}
}

int main()
{
}
```
### Wrong
```cpp
namespace geometry {
struct Point {
    int x;
    int y;
};

namespace detail {
constexpr int norm2(Point p)
{
    return p.x * p.x + p.y * p.y;
}
}
}

int main()
{
}
```
### Witness
```cpp
static_assert(norm2(geometry::Point {0, 2}) == 4);
```

## Alone 2
Form: flag
Write a program with a namespace `shapes` holding a struct `Square` with an int side and a function `area` of a Square, and a second function `area` of a `shapes::Square` outside the namespace, in which the call `area(s)` in `main` on a `shapes::Square s` is rejected as ambiguous.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
Expect:
- c++23: reject
### Reference
```cpp
namespace shapes {
struct Square {
    int side;
};

int area(Square s)
{
    return s.side * s.side;
}
}

int area(shapes::Square s)
{
    return s.side * s.side;
}

int main()
{
    shapes::Square s {2};
    return area(s) - 4;
}
```
### Wrong
```cpp
namespace shapes {
struct Square {
    int side;
};

namespace detail {
int area(Square s)
{
    return s.side * s.side;
}
}
}

int area(shapes::Square s)
{
    return s.side * s.side;
}

int main()
{
    shapes::Square s {2};
    return area(s) - 4;
}
```
### Witness
```cpp
int unused {0};
```
