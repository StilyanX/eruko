# 7.07 Name this in a member's lambda instead of writing [=]
Part: F.54 When writing a lambda that captures this or any class data member, don't use [=] default capture
Clause: C++ Core Guidelines F.54, [expr.prim.lambda.capture], [depr.capture.this], [basic.life]
After: 1.41
Levels: c++11

## Scan
Rule: F.54
Pattern: /\[\s*=\s*,\s*(?:[^\]]*,\s*)?this\s*[,\]]/
Warning: -Wdeprecated
### Bad
```cpp
void use(int, int)
{
}

class My_class {
    int x = 0;

    void f()
    {
        int i = 0;

        auto lambda = [=] { use(i, x); };

        x = 42;
        lambda();
        x = 43;
        lambda();
    }
};
```
### Good
```cpp
void use(int, int)
{
}

class My_class {
    int x = 0;

    void f()
    {
        int i = 0;

        auto lambda2 = [i, this] { use(i, x); };

        x = 42;
        lambda2();
    }
};
```

## Example
```cpp
#include <print>

struct Meter {
    int x {0};
    void f()
    {
        int i {1};
        //: Name this, so the lambda plainly reads the member live.
        auto show = [i, this] { std::println("{} {}", i, x); };
        //: Change the member; the lambda sees each new value.
        x = 42;
        show();
        x = 43;
        show();
    }
};

int main()
{
    Meter m;
    m.f();
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <functional>

struct Counter {
    int x {7};
    std::function<int()> getter()
    {
        return [=] { return x; };
    }
};

int main()
{
    std::function<int()> f;
    {
        Counter c;
        f = c.getter();
    }
    std::printf("%d\n", f());
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
Levels: c++17
```cpp
#include <cstdio>
#include <functional>

struct Counter {
    int x {7};
    std::function<int()> getter()
    {
        return [*this] { return x; };
    }
};

int main()
{
    std::function<int()> f;
    {
        Counter c;
        f = c.getter();
        c.x = 9;
    }
    std::printf("%d\n", f());
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: run
Write a program that reads a limit t, then n integers, and prints how many of them are greater than t.
Input: one line, t and n, then one line, n integers separated by spaces.
Output: one line, the count.
Limits: -1000 ≤ t ≤ 1000; 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
2 4
1 5 3 2
```
```out
2
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

class Filter {
public:
    explicit Filter(int t) : limit {t}
    {
    }
    long above(const std::vector<int>& v) const
    {
        return std::ranges::count_if(
            v, [this](int x) { return x > limit; });
    }

private:
    int limit;
};

int main()
{
    int t {0};
    int n {0};
    std::cin >> t >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::println("{}", Filter {t}.above(v));
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

class Filter {
public:
    explicit Filter(int t) : limit {t}
    {
    }
    long above(const std::vector<int>& v) const
    {
        return std::ranges::count_if(
            v, [=](int x) { return x > limit; });
    }

private:
    int limit;
};

int main()
{
    int t {0};
    int n {0};
    std::cin >> t >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::println("{}", Filter {t}.above(v));
}
```
### Tests
```in
1000 1
1000
```
```in
-1000 3
-1000 -999 1000
```
```in
0 5
-1 0 1 2 -2
```
### Witness
```cpp
#include <print>

void use(int i, int x)
{
    std::println("{} {}", i, x);
}

class My_class {
public:
    void f()
    {
        int i {0};
        auto lambda = [i, this] { use(i, x); };
        x = 42;
        lambda();
        x = 43;
        lambda();
    }

private:
    int x {0};
};

int main()
{
    My_class m;
    m.f();
}
```

## Alone 2
Form: run
Write a program that reads a step d and a count n and prints the first n multiples of d: d, 2d, and so on, one per line.
Input: one line, d and n.
Output: n lines, the multiples in order.
Limits: -100 ≤ d ≤ 100; 1 ≤ n ≤ 20.
### Examples
```in
3 3
```
```out
3
6
9
```
### Reference
```cpp
#include <iostream>
#include <print>

class Table {
public:
    explicit Table(int d) : step {d}
    {
    }
    void print(int n) const
    {
        auto row = [this](int i) { return i * step; };
        for (int i {1}; i <= n; ++i) {
            std::println("{}", row(i));
        }
    }

private:
    int step;
};

int main()
{
    int d {0};
    int n {0};
    std::cin >> d >> n;
    Table {d}.print(n);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

class Table {
public:
    explicit Table(int d) : step {d}
    {
    }
    void print(int n) const
    {
        auto row = [=](int i) { return i * step; };
        for (int i {1}; i <= n; ++i) {
            std::println("{}", row(i));
        }
    }

private:
    int step;
};

int main()
{
    int d {0};
    int n {0};
    std::cin >> d >> n;
    Table {d}.print(n);
}
```
### Tests
```in
0 1
```
```in
-100 20
```
```in
100 20
```
```in
7 2
```
### Witness
```cpp
#include <print>

struct Box {
    int x {5};
    int copy_read()
    {
        auto get = [*this] { return x; };
        x = 6;
        return get();
    }
};

int main()
{
    Box b;
    std::println("{}", b.copy_read());
}
```
