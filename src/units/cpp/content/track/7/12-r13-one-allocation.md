# 7.12 R.13: make at most one explicit allocation in one statement
Part: R.13 Perform at most one explicit resource allocation in a single expression statement
Clause: C++ Core Guidelines R.13, [expr.call], [dcl.init.list], [expr.new], [except.ctor]
After: 1.07, 1.25
Levels: c++17

## Scan
Rule: R.13
Pattern: /(?<!operator\s*)\b(?:new\b|(?:malloc|calloc|fopen)\s*\()(?:[^;{}]|\{[^;{}]*\})*?(?<!operator\s*)\b(?:new\b|(?:malloc|calloc|fopen)\s*\()/
### Bad
```cpp
#include <memory>

using std::shared_ptr;

struct Widget {
    Widget(int, int)
    {
    }
};

void fun(shared_ptr<Widget> sp1, shared_ptr<Widget> sp2);

void call(int a, int b, int c, int d)
{
    fun(shared_ptr<Widget>(new Widget(a, b)),
        shared_ptr<Widget>(new Widget(c, d)));
}
```
### Good
```cpp
#include <memory>

using std::make_shared;
using std::shared_ptr;

struct Widget {
    Widget(int, int)
    {
    }
};

void fun(shared_ptr<Widget> sp1, shared_ptr<Widget> sp2);

void call(int a, int b, int c, int d)
{
    fun(make_shared<Widget>(a, b), make_shared<Widget>(c, d));
}
```

## Example
```cpp
#include <memory>
#include <print>
#include <utility>

struct Cell {
    int v {0};
};

using Owner = std::unique_ptr<Cell>;

int main()
{
    //: Let a factory make each object, so no new stands bare.
    std::pair<Owner, Owner> both {std::make_unique<Cell>(2),
                                  std::make_unique<Cell>(3)};
    //: Or make one object per statement and hand it on at once.
    Owner first {std::make_unique<Cell>(4)};
    Owner second {std::make_unique<Cell>(5)};
    std::pair<Owner, Owner> more {std::move(first),
                                  std::move(second)};
    std::println("{} {}", both.first->v + both.second->v,
                 more.first->v + more.second->v);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>

struct W {
    int v {0};
    explicit W(int x) : v {x}
    {
        if (x < 0) {
            throw x;
        }
    }
    ~W()
    {
        std::printf("free %d\n", v);
    }
};

void fun(std::unique_ptr<W> a, std::unique_ptr<W> b)
{
    std::printf("%d\n", a->v + b->v);
}

int main()
{
    try {
        fun(std::unique_ptr<W>(new W(1)),
            std::unique_ptr<W>(new W(-1)));
    } catch (int) {
        std::printf("caught\n");
    }
}
```
Answer: c++17..c++23 unspecified
```out
free 1
caught
```
```out
caught
```

## Verdict 2
```cpp
#include <cstdio>
#include <memory>
#include <utility>

struct W {
    int v {0};
    explicit W(int x) : v {x}
    {
        if (x < 0) {
            throw x;
        }
    }
    ~W()
    {
        std::printf("free %d\n", v);
    }
};

using P = std::unique_ptr<W>;

int main()
{
    try {
        std::pair<P, P> both {new W {1}, new W {-1}};
    } catch (int) {
        std::printf("caught\n");
    }
}
```
Answer: c++17..c++23 defined

## Count
Columns: built, destroyed
```cpp
#include <cstdio>
#include <memory>
#include <source_location>
#include <utility>

using Where = std::source_location;

struct W {
    unsigned at {0};
    explicit W(int x, Where w = Where::current())
        : at {w.line()}
    {
        if (x < 0) {
            throw x;
        }
        std::printf("@%u built\n", at);
    }
    ~W()
    {
        std::printf("@%u destroyed\n", at);
    }
};

using P = std::unique_ptr<W>;

int main()
{
    try {
        std::pair<P, P> both {new W {2}, new W {-1}};
    } catch (int) {
    }
    try {
        P first {new W {3}};
        P second {new W {-2}};
    } catch (int) {
    }
}
```

## Alone 1
Form: run
Write a program that reads two whole numbers a and b, keeps them as a std::pair of two std::unique_ptr<int>, and prints a + b through the pair.
Input: one line, a and b.
Output: one line, a + b.
Limits: -1000 ≤ a, b ≤ 1000.
### Examples
```in
2 3
```
```out
5
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <utility>

using P = std::unique_ptr<int>;

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::pair<P, P> p {std::make_unique<int>(a),
                       std::make_unique<int>(b)};
    std::println("{}", *p.first + *p.second);
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <utility>

using P = std::unique_ptr<int>;

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::pair<P, P> p {new int {a},
                       new int {b}};
    std::println("{}", *p.first + *p.second);
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
-7 4
```
### Witness
```cpp
#include <memory>

using std::make_shared;
using std::shared_ptr;

struct Widget {
    Widget(int, int)
    {
    }
};

void fun(shared_ptr<Widget> sp1, shared_ptr<Widget> sp2);

void call(int a, int b, int c, int d)
{
    shared_ptr<Widget> sp1 {make_shared<Widget>(a, b)};
    fun(sp1, make_shared<Widget>(c, d));
}
```

## Alone 2
Form: run
Write a program that reads two words and prints them in the other order, joined by one space. Keep each word in a std::shared_ptr<std::string>, and pass both to one function `show` that prints them.
Input: one line, two words.
Output: one line, the second word, a space, the first word.
Limits: each word has 1 to 20 letters.
### Examples
```in
red fox
```
```out
fox red
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>

using Text = std::shared_ptr<std::string>;

void show(Text first, Text second)
{
    std::println("{} {}", *second, *first);
}

int main()
{
    std::string a {};
    std::string b {};
    std::cin >> a >> b;
    show(std::make_shared<std::string>(a),
         std::make_shared<std::string>(b));
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>

using Text = std::shared_ptr<std::string>;

void show(Text first, Text second)
{
    std::println("{} {}", *second, *first);
}

int main()
{
    std::string a {};
    std::string b {};
    std::cin >> a >> b;
    show(Text(new std::string {a}),
         Text(new std::string {b}));
}
```
### Tests
```in
a b
```
```in
abcdefghijklmnopqrst tsrqponmlkjihgfedcba
```
```in
same same
```
### Witness
```cpp
#include <memory>

struct Widget {
    int v {0};
};

void fun(std::shared_ptr<Widget> a, std::shared_ptr<Widget> b);

void call(int x, int y)
{
    auto first {std::make_shared<Widget>(x)};
    auto second {std::make_shared<Widget>(y)};
    fun(first, second);
}
```
