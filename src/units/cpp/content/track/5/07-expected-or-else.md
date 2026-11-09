# 5.07 Handling the error of a std::expected with or_else
Part: `std::expected::or_else`
Clause: [expected.object.monadic], [expected.object.cons], [expr.mul]
After: 5.04
Levels: c++23

## Example
```cpp
#include <expected>
#include <map>
#include <print>
#include <string>

using Table = std::map<std::string, int>;

std::expected<int, std::string> find(const Table& t,
                                     const std::string& name)
{
    auto it {t.find(name)};
    if (it == t.end()) {
        return std::unexpected {name};
    }
    return it->second;
}

int main()
{
    Table first {{"a", 1}};
    Table second {{"a", 9}, {"b", 2}};
    for (std::string name : {"a", "b", "c"}) {
        //: Write a function of the error that tries the second table.
        auto other = [&](const std::string& n) {
            return find(second, n);
        };
        //: Call or_else with it; it runs only on an error.
        std::expected<int, std::string> r {
            find(first, name).or_else(other)};
        //: Print the value, or the error the last call left.
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("unknown {}", r.error());
        }
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <expected>

std::expected<int, int> retry(int code)
{
    return 100 / code;
}

int main()
{
    std::expected<int, int> r {std::unexpected {0}};
    std::expected<int, int> s {r.or_else(retry)};
    std::printf("%d\n", s.value_or(-1));
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <expected>

std::expected<int, int> retry(int code)
{
    return 100 / code;
}

int main()
{
    std::expected<int, int> r {0};
    std::expected<int, int> s {r.or_else(retry)};
    std::printf("%d\n", s.value_or(-1));
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads two tables of names with numbers, then q names, and prints the number of each name. Take it from the first table when the name is there, else from the second table; when the name is in neither, print `unknown` and the name. A function `find(table, name)` returns `std::expected<int, std::string>`: the number, or the name as the error. Try the second table with `or_else`.
Input: one line, k; k lines, a name and a number; one line, m; m lines, a name and a number; one line, q; q lines, a name.
Output: q lines, a number or `unknown` and the name.
Limits: 0 ≤ k ≤ 100; 0 ≤ m ≤ 100; 1 ≤ q ≤ 100; a name has 1 to 10 letters and appears at most once in a table; each number is between -1000 and 1000.
### Examples
```in
1
ann 5
1
bob 7
3
ann
bob
cy
```
```out
5
7
unknown cy
```
### Reference
```cpp
#include <expected>
#include <iostream>
#include <map>
#include <print>
#include <string>

using Table = std::map<std::string, int>;

Table read_table()
{
    int k {0};
    std::cin >> k;
    Table t;
    for (int i {0}; i < k; ++i) {
        std::string name;
        int number {0};
        std::cin >> name >> number;
        t[name] = number;
    }
    return t;
}

std::expected<int, std::string> find(const Table& t,
                                     const std::string& name)
{
    auto it {t.find(name)};
    if (it == t.end()) {
        return std::unexpected {name};
    }
    return it->second;
}

int main()
{
    Table first {read_table()};
    Table second {read_table()};
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        std::string name;
        std::cin >> name;
        auto other = [&](const std::string& n) {
            return find(second, n);
        };
        std::expected<int, std::string> r {
            find(first, name).or_else(other)};
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("unknown {}", r.error());
        }
    }
}
```
### Wrong
```cpp
#include <expected>
#include <iostream>
#include <map>
#include <print>
#include <string>

using Table = std::map<std::string, int>;

Table read_table()
{
    int k {0};
    std::cin >> k;
    Table t;
    for (int i {0}; i < k; ++i) {
        std::string name;
        int number {0};
        std::cin >> name >> number;
        t[name] = number;
    }
    return t;
}

std::expected<int, std::string> find(const Table& t,
                                     const std::string& name)
{
    auto it {t.find(name)};
    if (it == t.end()) {
        return std::unexpected {name};
    }
    return it->second;
}

int main()
{
    Table first {read_table()};
    Table second {read_table()};
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        std::string name;
        std::cin >> name;
        auto other = [&](const std::string& n) {
            return find(first, n);
        };
        std::expected<int, std::string> r {
            find(second, name).or_else(other)};
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("unknown {}", r.error());
        }
    }
}
```
### Tests
```in
0
0
1
x
```
```in
2
a 1
b 2
2
b 20
c 30
4
a
b
c
d
```
```in
1
z -1000
1
z 1000
1
z
```
### Witness
```in
1
ann 1
1
ann 2
1
ann
```

## Alone 2
Form: probes
Write a `constexpr` function `settle(r)` that takes a `const std::expected<int, std::string>&` and returns, from one call of `or_else`, a `std::expected<int, std::size_t>`. It holds the value unchanged; 0 as the value when the error is the empty string; and the length of the error as the error otherwise.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
using Bad = std::unexpected<std::string>;
static_assert(settle(5).value() == 5);
static_assert(settle(Bad {""}).value() == 0);
static_assert(settle(Bad {"ab"}).error() == 2);
std::expected<int, std::string> x {settle(1)};
int y {settle(1)};
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
#include <cstddef>
#include <expected>
#include <string>

constexpr std::expected<int, std::size_t>
settle(const std::expected<int, std::string>& r)
{
    return r.or_else([](const std::string& e)
                         -> std::expected<int, std::size_t> {
        if (e.empty()) {
            return 0;
        }
        return std::unexpected {e.size()};
    });
}

int main()
{
}
```
### Wrong
```cpp
#include <cstddef>
#include <expected>
#include <string>

constexpr std::expected<int, std::size_t>
settle(const std::expected<int, std::string>& r)
{
    return r.transform_error([](const std::string& e) {
        return e.size();
    });
}

int main()
{
}
```
### Witness
```cpp
using Gone = std::unexpected<std::string>;
static_assert(settle(Gone {""}).has_value());
```
