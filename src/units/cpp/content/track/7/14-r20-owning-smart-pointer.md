# 7.14 R.20: let a unique_ptr or a shared_ptr own what new makes
Part: R.20 Use unique_ptr or shared_ptr to represent ownership
Clause: C++ Core Guidelines R.20, [unique.ptr], [util.smartptr.shared], [basic.stc.dynamic]
After: 1.25
Levels: c++14

## Scan
Rule: R.20
Pattern: /(?:\*\s*\w+\s*[({]|\bauto\s+\w+\s*[({]|[^=!<>]=)\s*new\b/
### Bad
```cpp
struct X {
    int v {0};
};

void f()
{
    X* p1 { new X };
}
```
### Good
```cpp
#include <memory>

using std::make_shared;
using std::make_unique;

struct X {
    int v {0};
};

void f()
{
    auto p2 = make_unique<X>();
    auto p3 = make_shared<X>();
}
```

## Example
```cpp
#include <memory>
#include <print>

struct Box {
    int v {0};
};

int main()
{
    //: Give the object one owner; it is freed when the owner goes.
    auto only {std::make_unique<Box>(Box {3})};
    //: Share an object; it is freed when its last owner goes.
    auto shared {std::make_shared<Box>(Box {4})};
    auto also {shared};
    std::println("{} {} {}", only->v, also->v,
                 shared.use_count());
}
```

## Verdict 1
```cpp
#include <cstdio>

struct X {
    ~X()
    {
        std::printf("free\n");
    }
};

void f()
{
    X* p1 {new X};
    std::printf("made\n");
}

int main()
{
    f();
    std::printf("end\n");
}
```
Answer: c++14..c++23 defined

## Verdict 2
```cpp
#include <memory>

struct X {
    int v {0};
};

int main()
{
    auto p2 = std::make_unique<X>();
    auto p3 = p2;
}
```
Answer: c++14..c++23 ill-formed 10

## Alone 1
Form: run
Write a program that reads n and prints the squares of 1 to n on one line, separated by one space. First store all n squares in an int array made on the heap, then print them from there.
Input: one line, n.
Output: one line, the n squares.
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
4
```
```out
1 4 9 16
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    auto sq {std::make_unique<int[]>(n)};
    for (int i {0}; i < n; ++i) {
        sq[i] = (i + 1) * (i + 1);
    }
    std::print("{}", sq[0]);
    for (int i {1}; i < n; ++i) {
        std::print(" {}", sq[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int* sq {new int[n] {}};
    for (int i {0}; i < n; ++i) {
        sq[i] = (i + 1) * (i + 1);
    }
    std::print("{}", sq[0]);
    for (int i {1}; i < n; ++i) {
        std::print(" {}", sq[i]);
    }
    std::println();
}
```
### Tests
```in
1
```
```in
1000
```
```in
2
```
### Witness
```cpp
#include <memory>

struct X {
    int v {0};
};

void f()
{
    auto p1 {std::make_unique<X>()};
}
```

## Alone 2
Form: run
Write a program that reads two whole numbers x and d. Make one int with the value x on the heap, owned together by two owners. Add d to it through the first owner and print it through the second.
Input: one line, x and d.
Output: one line, x + d.
Limits: -1000 ≤ x, d ≤ 1000.
### Examples
```in
5 2
```
```out
7
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>

int main()
{
    int x {0};
    int d {0};
    std::cin >> x >> d;
    auto first {std::make_shared<int>(x)};
    auto second {first};
    *first += d;
    std::println("{}", *second);
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>

int main()
{
    int x {0};
    int d {0};
    std::cin >> x >> d;
    auto first {new int {x}};
    auto second {first};
    *first += d;
    std::println("{}", *second);
}
```
### Tests
```in
-1000 -1000
```
```in
1000 1000
```
```in
0 0
```
```in
3 -3
```
### Witness
```cpp
#include <memory>

struct X {
    int v {0};
};

void f()
{
    std::shared_ptr<X> p1 {std::make_shared<X>()};
    std::shared_ptr<X> p2 {p1};
}
```
