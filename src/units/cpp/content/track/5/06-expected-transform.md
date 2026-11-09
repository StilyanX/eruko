# 5.06 Changing the value inside a std::expected with transform
Part: `std::expected::transform`
Clause: [expected.object.monadic], [expected.object.obs], [expr.mul]
After: 5.04
Levels: c++23

## Example
```cpp
#include <expected>
#include <print>
#include <string>

std::expected<int, std::string> check(int x)
{
    if (x < 0) {
        return std::unexpected {std::string {"negative"}};
    }
    return x;
}

int main()
{
    for (int x : {3, -2}) {
        //: Apply a plain function to the value with transform.
        std::expected<int, std::string> r {
            check(x).transform([](int v) { return v * v; })};
        //: Keep the new expected; an error passes through unchanged.
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("error: {}", r.error());
        }
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <expected>
#include <string>

std::expected<int, std::string> half(int x)
{
    if (x % 2 != 0) {
        return std::unexpected {std::string {"odd"}};
    }
    return x / 2;
}

int main()
{
    std::expected<int, std::string> r {8};
    auto q {r.transform(half)};
    std::printf("%d\n", *q + 1);
}
```
Answer: c++23 ill-formed 17

## Verdict 2
```cpp
#include <cstdio>
#include <expected>
#include <string>

int main()
{
    std::expected<int, std::string> r {0};
    auto q {r.transform([](int n) { return 100 / n; })};
    std::printf("%d\n", q.value_or(-1));
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads n integers and prints the square of each, or `error: negative` for a negative one. A function `check(x)` returns `std::expected<int, std::string>`: x, or the error `negative`. Square the value inside the result with `transform`.
Input: one line, n; one line, n integers.
Output: n lines, the square or the error for each integer.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
3
0 1 -5
```
```out
0
1
error: negative
```
### Reference
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <string>

std::expected<int, std::string> check(int x)
{
    if (x < 0) {
        return std::unexpected {std::string {"negative"}};
    }
    return x;
}

int square(int v)
{
    return v * v;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::expected<int, std::string> r {check(x)};
        r = r.transform(square);
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("error: {}", r.error());
        }
    }
}
```
### Wrong
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <string>

std::expected<int, std::string> check(int x)
{
    if (x < 0) {
        return std::unexpected {std::string {"negative"}};
    }
    return x;
}

int square(int v)
{
    return v * v;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::expected<int, std::string> r {check(x)};
        r.transform(square);
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("error: {}", r.error());
        }
    }
}
```
### Tests
```in
1
-1000
```
```in
2
1000 2
```
```in
4
0 -1 7 1
```
### Witness
```in
1
3
```

## Alone 2
Form: probes
Write a `constexpr` function `length_of(r)` that takes a `const std::expected<std::string, int>&`. It returns, from one call of `transform`, a `std::expected<std::size_t, int>`: the length of the string, or the same error.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
using L = decltype(length_of(std::string {"abc"}));
static_assert(std::is_same_v<L, std::expected<std::size_t, int>>);
static_assert(length_of(std::string {"abc"}).value() == 3);
static_assert(length_of(std::unexpected {4}).error() == 4);
std::size_t c {length_of(std::string {"ab"})};
std::expected<std::string, int> d {length_of(std::string {})};
```
Accept: 1, 2, 3, 4
Reject: 5, 6
### Reference
```cpp
#include <cstddef>
#include <expected>
#include <string>
#include <type_traits>

constexpr auto
length_of(const std::expected<std::string, int>& r)
{
    return r.transform([](const std::string& s) {
        return s.size();
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
#include <type_traits>

constexpr auto
length_of(const std::expected<std::string, int>& r)
{
    return r.transform([](const std::string& s) {
        return std::expected<std::size_t, int> {s.size()};
    });
}

int main()
{
}
```
### Witness
```cpp
std::expected<std::size_t, int> w {length_of(std::string {})};
```
