# 7.10 Let a raw pointer only point; let a unique_ptr own
Part: R.3 A raw pointer (a T*) is non-owning
Clause: C++ Core Guidelines R.3, [expr.new], [expr.delete], [unique.ptr]
After: 1.23, 1.24, 1.25
Levels: c++14

## Scan
Rule: R.3
Pattern: /\bauto\s+\w+\s*(?:=|\(|\{)\s*new\b|\b(\w+)\s*(?:=(?!=)|\(|\{)\s*new\b(?:(?<=(?:\b(?!(?:return|co_return|throw|delete)\b)\w+|>)\s*\*\s*(?:const\s+)?\1\s*[;,)=({\[][\s\S]*)|(?=[\s\S]*(?:\b(?!(?:return|co_return|throw|delete)\b)\w+|>)\s*\*\s*(?:const\s+)?\1\s*[;,)=({\[]))/
### Bad
```cpp
#include <memory>

using std::make_unique;

void f()
{
    int* p1 = new int{7};
    auto p2 = make_unique<int>(7);
}

struct Gadget {
    int n;
};

Gadget* make_gadget(int n)
{
    auto p = new Gadget{n};
    return p;
}
```
### Good
```cpp
#include <memory>

using std::make_unique;
template<class T> using owner = T;

void f()
{
    auto p2 = make_unique<int>(7);
}

template<typename T>
class X2 {
public:
    owner<T*> p;
    T* q;
};

struct Gadget {
    int n;
};

Gadget make_gadget(int n)
{
    Gadget g{n};
    return g;
}
```

## Example
```cpp
#include <memory>
#include <print>

int main()
{
    //: Give the new int to a unique_ptr, which deletes it.
    std::unique_ptr<int> owner {std::make_unique<int>(7)};
    //: Take a raw pointer that only points, never deletes.
    int* seen {owner.get()};
    *seen += 1;
    std::println("{}", *owner);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int* p {new int {7}};
    int* q {p};
    std::printf("%d\n", *q);
    delete p;
    delete q;
}
```
Answer: c++14..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::unique_ptr<int> p {std::make_unique<int>(7)};
    int* q {p.get()};
    std::printf("%d\n", *q);
}
```
Answer: c++14..c++23 defined

## Alone 1
Form: run
Write a program that reads the width and the height of a rectangle and prints its area and its perimeter.
Input: one line, the width w and the height h.
Output: one line, the area and the perimeter separated by a space.
Limits: 1 ≤ w, h ≤ 1000.
### Examples
```in
3 4
```
```out
12 14
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Box {
    int w;
    int h;
};

Box make_box(int w, int h)
{
    Box b {w, h};
    return b;
}

int main()
{
    int w {0};
    int h {0};
    std::cin >> w >> h;
    Box b {make_box(w, h)};
    std::println("{} {}", b.w * b.h, 2 * (b.w + b.h));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Box {
    int w;
    int h;
};

Box* make_box(int w, int h)
{
    auto p = new Box {w, h};
    return p;
}

int main()
{
    int w {0};
    int h {0};
    std::cin >> w >> h;
    Box* b {make_box(w, h)};
    std::println("{} {}", b->w * b->h, 2 * (b->w + b->h));
    delete b;
}
```
### Tests
```in
1 1
```
```in
1000 1000
```
```in
1 1000
```
```in
7 2
```
### Witness
```cpp
#include <memory>
#include <print>

struct Gadget {
    int n;
};

Gadget make_gadget(int n)
{
    Gadget g {n};
    return g;
}

int main()
{
    std::unique_ptr<int> p2 {std::make_unique<int>(7)};
    std::println("{} {}", make_gadget(3).n, *p2);
}
```

## Alone 2
Form: run
Write a program that reads n integers and prints those at positions 1, 3, 5 and so on, then those at positions 2, 4, 6 and so on.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the n integers in that order, separated by spaces.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
5
1 2 3 4 5
```
```out
1 3 5 2 4
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(static_cast<std::size_t>(n));
    for (int& x : values) {
        std::cin >> x;
    }
    std::vector<int> order;
    for (int start {0}; start < 2; ++start) {
        for (int i {start}; i < n; i += 2) {
            std::size_t k {static_cast<std::size_t>(i)};
            order.push_back(values[k]);
        }
    }
    for (std::size_t i {0}; i < order.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", order[i]);
    }
    std::println("");
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    int* values {new int[static_cast<std::size_t>(n)]};
    for (int i {0}; i < n; ++i) {
        std::cin >> values[i];
    }
    std::vector<int> order;
    for (int start {0}; start < 2; ++start) {
        for (int i {start}; i < n; i += 2) {
            order.push_back(values[i]);
        }
    }
    delete[] values;
    for (std::size_t i {0}; i < order.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", order[i]);
    }
    std::println("");
}
```
### Tests
```in
1
-1000
```
```in
2
1000 -1000
```
```in
6
1 2 3 4 5 6
```
### Witness
```cpp
#include <memory>
#include <print>

int main()
{
    std::unique_ptr<int[]> a {std::make_unique<int[]>(3)};
    a[2] = 7;
    std::println("{}", a[2]);
}
```
