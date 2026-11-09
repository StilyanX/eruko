# 7.48 Give a type the whole set of operators, not an odd part of it
Part: T.21 Require a complete set of operations for a concept
Clause: C++ Core Guidelines T.21, [over.oper], [over.match.oper], [class.compare.default], [diff.cpp17.over]
After: 4.01, 4.02
Levels: c++11

## Scan
Rule: T.21
Pattern: /(?<!\boperator\s*<=>[\s\S]*)(?![\s\S]*\boperator\s*<=>)(?:(?<!\boperator\s*<(?![<=])\s*\([\s\S]*)(?![\s\S]*\boperator\s*<(?![<=])\s*\()|(?<!\boperator\s*>(?![>=])\s*\([\s\S]*)(?![\s\S]*\boperator\s*>(?![>=])\s*\()|(?<!\boperator\s*<=(?!>)\s*\([\s\S]*)(?![\s\S]*\boperator\s*<=(?!>)\s*\()|(?<!\boperator\s*>=\s*\([\s\S]*)(?![\s\S]*\boperator\s*>=\s*\())\boperator\s*(?:<(?![<=])|>(?![>=])|<=(?!>)|>=)\s*\(|(?:(?<!\boperator\s*\+=[\s\S]*)(?![\s\S]*\boperator\s*\+=)|(?<!\boperator\s*-(?![-=>])\s*\([\s\S]*)(?![\s\S]*\boperator\s*-(?![-=>])\s*\())\boperator\s*\+(?![+=])\s*\(/
### Bad
```cpp
class Minimal {
    // ...
};

bool operator==(const Minimal&, const Minimal&);
bool operator<(const Minimal&, const Minimal&);

Minimal operator+(const Minimal&, const Minimal&);
// no other operators

void f(Minimal x, Minimal y)
{
    if (!(x == y)) { /* ... */ }              // OK
    if (x != y) { /* ... */ }                 // surprise! error

    while (!(x < y)) { /* ... */ }           // OK
    while (x >= y) { /* ... */ }             // surprise! error

    x = x + y;               // OK
    x += y;                  // surprise! error
}
```
### Good
```cpp
class Convenient {
    // ...
};

bool operator==(const Convenient&, const Convenient&);
bool operator<(const Convenient&, const Convenient&);
bool operator!=(const Convenient&, const Convenient&);
bool operator>(const Convenient&, const Convenient&);
bool operator<=(const Convenient&, const Convenient&);
bool operator>=(const Convenient&, const Convenient&);

Convenient operator+(const Convenient&, const Convenient&);
Convenient operator-(const Convenient&, const Convenient&);
Convenient operator*(const Convenient&, const Convenient&);
Convenient operator/(const Convenient&, const Convenient&);
Convenient& operator+=(Convenient&, const Convenient&);
Convenient& operator-=(Convenient&, const Convenient&);
Convenient& operator*=(Convenient&, const Convenient&);
Convenient& operator/=(Convenient&, const Convenient&);

void f(const Convenient& x, const Convenient& y)
{
    if (!(x == y)) { /* ... */ }    // OK
    if (x != y) { /* ... */ }       // OK

    while (!(x < y)) { /* ... */ }           // OK
    while (x >= y) { /* ... */ }             // OK

    x = x + y;         // OK
    x += y;            // OK
}
```

## Example
```cpp
#include <compare>
#include <print>

//: Default the three-way comparison to get all four orderings.
struct Version {
    int release {0};
    int patch {0};
    auto operator<=>(const Version&) const = default;
};

int main()
{
    Version a {1, 2};
    Version b {1, 3};
    //: Use every comparison; none is missing.
    std::println("{} {} {} {}", a < b, a > b, a <= b, a >= b);
    std::println("{} {}", a == b, a != b);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Minimal {
    int v;
};

bool operator==(const Minimal& a, const Minimal& b)
{
    return a.v == b.v;
}

int main()
{
    Minimal x {1};
    Minimal y {2};
    if (x != y) {
        std::printf("differ\n");
    }
}
```
Answer:
- c++11..c++17: ill-formed 16
- c++20..c++23: defined

## Verdict 2
```cpp
#include <cstdio>

struct Minimal {
    int v;
};

bool operator<(const Minimal& a, const Minimal& b)
{
    return a.v < b.v;
}

int main()
{
    Minimal x {1};
    Minimal y {2};
    if (x >= y) {
        std::printf("not less\n");
    }
}
```
Answer: c++11..c++23 ill-formed 16

## Alone 1
Form: run
Write a struct `Version` with int members `release` and `patch` that supports every comparison: ==, !=, <, >, <= and >=.
Then write a program that reads n versions and prints them from the oldest to the newest; a smaller release is older, and with equal releases a smaller patch is older.
Input: the first line holds n, then n lines, each with a release and a patch.
Output: n lines, each version as release, a dot, then patch.
Limits: 1 ≤ n ≤ 10; every number is between 0 and 99.
### Examples
```in
3
2 0
1 5
1 2
```
```out
1.2
1.5
2.0
```
### Reference
```cpp
#include <algorithm>
#include <compare>
#include <iostream>
#include <print>
#include <vector>

struct Version {
    int release {0};
    int patch {0};
    auto operator<=>(const Version&) const = default;
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Version> all {};
    for (int i {0}; i < n; ++i) {
        Version v {};
        std::cin >> v.release >> v.patch;
        all.push_back(v);
    }
    std::sort(all.begin(), all.end());
    for (const Version& v : all) {
        std::println("{}.{}", v.release, v.patch);
    }
}
```
### Wrong
```cpp
#include <algorithm>
#include <compare>
#include <iostream>
#include <print>
#include <vector>

struct Version {
    int release {0};
    int patch {0};
    bool operator<(const Version& o) const
    {
        return release < o.release
               || (release == o.release && patch < o.patch);
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Version> all {};
    for (int i {0}; i < n; ++i) {
        Version v {};
        std::cin >> v.release >> v.patch;
        all.push_back(v);
    }
    std::sort(all.begin(), all.end());
    for (const Version& v : all) {
        std::println("{}.{}", v.release, v.patch);
    }
}
```
### Tests
```in
1
0 0
```
```in
10
99 99
0 0
5 5
5 4
4 5
99 0
0 99
50 50
1 1
1 0
```
```in
2
3 7
3 7
```
### Witness
```cpp
#include <compare>

class Minimal {
public:
    int v {0};
    auto operator<=>(const Minimal&) const = default;
};

bool f(Minimal x, Minimal y)
{
    return x != y && x >= y;
}
```

## Alone 2
Form: run
Write a struct `Cents` holding an int member `value`, with the arithmetic a money amount needs: +, -, += and -=.
Then write a program that reads n amounts in cents and prints their total, then the first amount minus the last.
Input: the first line holds n, the second line holds the n amounts.
Output: two lines, the total, then the first amount minus the last.
Limits: 1 ≤ n ≤ 20; every amount is between -1000 and 1000.
### Examples
```in
3
250 -40 100
```
```out
310
150
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Cents {
    int value {0};
    Cents& operator+=(Cents o)
    {
        value += o.value;
        return *this;
    }
    Cents& operator-=(Cents o)
    {
        value -= o.value;
        return *this;
    }
};

Cents operator+(Cents a, Cents b)
{
    return a += b;
}

Cents operator-(Cents a, Cents b)
{
    return a -= b;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Cents> all {};
    for (int i {0}; i < n; ++i) {
        Cents c {};
        std::cin >> c.value;
        all.push_back(c);
    }
    Cents total {};
    for (Cents c : all) {
        total = total + c;
    }
    std::println("{}", total.value);
    std::println("{}", (all.front() - all.back()).value);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Cents {
    int value {0};
};

Cents operator+(Cents a, Cents b)
{
    return Cents {a.value + b.value};
}

Cents operator-(Cents a, Cents b)
{
    return Cents {a.value - b.value};
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Cents> all {};
    for (int i {0}; i < n; ++i) {
        Cents c {};
        std::cin >> c.value;
        all.push_back(c);
    }
    Cents total {};
    for (Cents c : all) {
        total = total + c;
    }
    std::println("{}", total.value);
    std::println("{}", (all.front() - all.back()).value);
}
```
### Tests
```in
1
-1000
```
```in
20
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 -1000
```
```in
2
0 0
```
### Witness
```cpp
class Minimal {
public:
    int v {0};
    Minimal& operator+=(const Minimal& o)
    {
        v += o.v;
        return *this;
    }
    Minimal& operator-=(const Minimal& o)
    {
        v -= o.v;
        return *this;
    }
};

Minimal operator+(Minimal a, const Minimal& b)
{
    return a += b;
}

Minimal operator-(Minimal a, const Minimal& b)
{
    return a -= b;
}

void f(Minimal x, Minimal y)
{
    x = x + y;
    x += y;
}
```
