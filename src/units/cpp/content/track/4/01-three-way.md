# 4.01 The three-way comparison
Part: the three-way comparison
Clause: [expr.spaceship], [cmp.categories], [class.spaceship], [class.compare.default], [lex.operators], [diff.cpp17.lex]
After: none
Levels: c++20

## Example
```cpp
#include <compare>
#include <print>

//: Ask for a <=> that compares release, then patch.
struct Version
{
    int release;
    int patch;
    auto operator<=>(const Version&) const = default;
};

int main()
{
    //: Make two versions that differ in patch only.
    Version a {1, 4};
    Version b {1, 7};
    //: Compare once with <=> and test the result against 0.
    std::strong_ordering c {a <=> b};
    std::println("{}", c < 0);
    //: Use <, which the defaulted <=> also gives.
    std::println("{}", a < b);
    //: Compare doubles, whose <=> gives a partial ordering.
    std::partial_ordering d {1.5 <=> 2.5};
    std::println("{}", d == std::partial_ordering::less);
}
```

## Verdict 1
```cpp
#include <compare>

int main()
{
    int i {3};
    double d {2.5};
    std::weak_ordering a {i <=> 4};
    std::strong_ordering b {d <=> 1.0};
    return a < 0 && b > 0 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 8

## Verdict 2
```cpp
struct X
{
};

bool operator<=(X, X)
{
    return true;
}

template <bool (*)(X, X)>
struct Y
{
};

Y<&operator<=> y;

int main()
{
}
```
Levels: c++17
Answer:
- c++17: defined
- c++20..c++23: ill-formed 15

## Alone 1
Form: run
Write a program that reads n grid sites, each a row and a column, and prints them sorted by row, and by column where the rows are equal.
Input: first line n, then n lines, each two integers: row and column.
Output: n lines, each a row and a column separated by a space.
Limits: 1 ≤ n ≤ 1000; 0 ≤ row, column ≤ 1000.
### Examples
```in
3
2 2
0 0
1 1
```
```out
0 0
1 1
2 2
```
### Reference
```cpp
#include <algorithm>
#include <compare>
#include <iostream>
#include <print>
#include <vector>

struct Site
{
    int row;
    int column;
    auto operator<=>(const Site&) const = default;
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Site> sites(n);
    for (Site& s : sites) {
        std::cin >> s.row >> s.column;
    }
    std::ranges::sort(sites);
    for (const Site& s : sites) {
        std::println("{} {}", s.row, s.column);
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

struct Site
{
    int column;
    int row;
    auto operator<=>(const Site&) const = default;
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Site> sites(n);
    for (Site& s : sites) {
        std::cin >> s.row >> s.column;
    }
    std::ranges::sort(sites);
    for (const Site& s : sites) {
        std::println("{} {}", s.row, s.column);
    }
}
```
### Tests
```in
2
1 0
0 5
```
```in
4
3 1
3 0
0 9
2 4
```
```in
3
5 5
5 2
1 7
```
### Witness
```in
2
0 1
1 0
```

## Alone 2
Form: run
Write a program that reads two fractions and prints less, equal or greater: how the value of the first stands to the value of the second.
Input: one line, four integers: the top and bottom of the first fraction, then of the second.
Output: one line, less, equal or greater.
Limits: 1 ≤ each integer ≤ 1000.
### Examples
```in
1 2 2 3
```
```out
less
```
### Reference
```cpp
#include <compare>
#include <iostream>
#include <print>

struct Fraction
{
    int top;
    int bottom;
    auto operator<=>(const Fraction& o) const
    {
        return top * o.bottom <=> o.top * bottom;
    }
};

int main()
{
    Fraction a {0, 1};
    Fraction b {0, 1};
    std::cin >> a.top >> a.bottom >> b.top >> b.bottom;
    std::strong_ordering c {a <=> b};
    if (c < 0) {
        std::println("less");
    } else if (c == 0) {
        std::println("equal");
    } else {
        std::println("greater");
    }
}
```
### Wrong
```cpp
#include <compare>
#include <iostream>
#include <print>

struct Fraction
{
    int top;
    int bottom;
    auto operator<=>(const Fraction&) const = default;
};

int main()
{
    Fraction a {0, 1};
    Fraction b {0, 1};
    std::cin >> a.top >> a.bottom >> b.top >> b.bottom;
    std::strong_ordering c {a <=> b};
    if (c < 0) {
        std::println("less");
    } else if (c == 0) {
        std::println("equal");
    } else {
        std::println("greater");
    }
}
```
### Tests
```in
1 2 2 4
```
```in
1 3 2 7
```
```in
3 6 1 2
```
```in
5 5 1 1
```
### Witness
```in
2 4 1 2
```
