# 7.15 R.22: make a shared_ptr with make_shared
Part: R.22 Use make_shared() to make shared_ptrs
Clause: C++ Core Guidelines R.22, [util.smartptr.shared.const], [util.smartptr.shared.create]
After: 1.24
Levels: c++11

## Scan
Rule: R.22
Pattern: /\bshared_ptr\s*<[^;={}]*?>\s*(?:\w+\s*)?[({]\s*new\b/
### Bad
```cpp
#include <memory>

using std::shared_ptr;

struct X {
    int v {0};
};

void f()
{
    shared_ptr<X> p1 { new X{2} };
}
```
### Good
```cpp
#include <memory>

using std::make_shared;

struct X {
    int v {0};
};

void f()
{
    auto p = make_shared<X>(2);
}
```

## Example
```cpp
#include <memory>
#include <print>

struct Pair {
    int a {0};
    int b {0};
};

int main()
{
    //: Name the type once and let make_shared make the object.
    auto p {std::make_shared<Pair>(1, 2)};
    //: Copy the owner; the object and its count stay shared.
    auto q {p};
    std::println("{} {}", q->a + q->b, p.use_count());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::shared_ptr<int> p {new int {2}};
    std::shared_ptr<int> q {p.get()};
    std::printf("%d\n", *p + *q);
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <memory>

struct X {
    int v {2};
};

int main()
{
    std::shared_ptr<X> p = new X;
    std::printf("%d\n", p->v);
}
```
Answer: c++11..c++23 ill-formed 10

## Count
Columns: allocations
```cpp
#include <cstdio>
#include <cstdlib>
#include <memory>
#include <source_location>

using Where = std::source_location;

int news {0};

void* operator new(std::size_t n)
{
    ++news;
    return std::malloc(n);
}

void operator delete(void* p) noexcept
{
    std::free(p);
}

template <typename T>
T counted(T v, Where at = Where::current())
{
    for (; news > 0; --news) {
        std::printf("@%u allocations\n", at.line());
    }
    return v;
}

int main()
{
    auto a {counted(std::make_shared<int>(2))};
    auto b {counted(std::shared_ptr<int> {new int {2}})};
    auto d {counted(std::make_shared<long>(3))};
}
```

## Alone 1
Form: run
Write a program that reads n and then n whole numbers and prints them in the other order on one line, separated by one space. Keep each number in a std::shared_ptr<int> stored in a std::vector.
Input: one line, n, then one line of n numbers.
Output: one line, the numbers from last to first.
Limits: 1 ≤ n ≤ 100; each number is from -1000 to 1000.
### Examples
```in
3
1 2 3
```
```out
3 2 1
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::shared_ptr<int>> v {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(std::make_shared<int>(x));
    }
    std::print("{}", *v.back());
    for (int i {n - 2}; i >= 0; --i) {
        std::print(" {}", *v[static_cast<std::size_t>(i)]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::shared_ptr<int>> v {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(std::shared_ptr<int>(new int {x}));
    }
    std::print("{}", *v.back());
    for (int i {n - 2}; i >= 0; --i) {
        std::print(" {}", *v[static_cast<std::size_t>(i)]);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
4
1000 -1000 0 7
```
```in
2
5 5
```
### Witness
```cpp
#include <memory>

struct X {
    int v {0};
};

void f()
{
    std::shared_ptr<X> p1 {std::make_shared<X>(2)};
}
```

## Alone 2
Form: run
Write a program that reads a point x y and a step d. Make the point on the heap as a struct with two int members, shared by two std::shared_ptr owners. Add d to both coordinates through the first owner, then print the point through the second.
Input: one line, x, y and d.
Output: one line, x + d and y + d, separated by one space.
Limits: -1000 ≤ x, y, d ≤ 1000.
### Examples
```in
1 2 3
```
```out
4 5
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>

struct Point {
    int x {0};
    int y {0};
};

int main()
{
    int x {0};
    int y {0};
    int d {0};
    std::cin >> x >> y >> d;
    auto first {std::make_shared<Point>(x, y)};
    std::shared_ptr<Point> second {first};
    first->x += d;
    first->y += d;
    std::println("{} {}", second->x, second->y);
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>

struct Point {
    int x {0};
    int y {0};
};

int main()
{
    int x {0};
    int y {0};
    int d {0};
    std::cin >> x >> y >> d;
    std::shared_ptr<Point> first {new Point {x, y}};
    std::shared_ptr<Point> second {first};
    first->x += d;
    first->y += d;
    std::println("{} {}", second->x, second->y);
}
```
### Tests
```in
-1000 -1000 -1000
```
```in
1000 1000 1000
```
```in
0 0 0
```
```in
-5 7 2
```
### Witness
```cpp
#include <memory>

struct X {
    int v {0};
};

auto f()
{
    return std::make_shared<X>(X {2});
}
```
