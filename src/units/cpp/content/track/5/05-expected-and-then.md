# 5.05 Chaining calls with std::expected::and_then
Part: `std::expected::and_then`
Clause: [expected.object.monadic], [expected.object.cons], [expr.mul]
After: 5.04
Levels: c++23

## Example
```cpp
#include <expected>
#include <print>
#include <string>

//: Write each step as a function that returns a value or an error.
std::expected<int, std::string> half(int x)
{
    if (x % 2 != 0) {
        return std::unexpected {std::string {"odd"}};
    }
    return x / 2;
}

std::expected<int, std::string> below_ten(int x)
{
    if (x >= 10) {
        return std::unexpected {std::string {"too big"}};
    }
    return x;
}

int main()
{
    for (int x : {12, 40, 6}) {
        //: Chain the steps with and_then; each runs only on a value.
        std::expected<int, std::string> r {
            half(x).and_then(half).and_then(below_ten)};
        //: Print the value, or the first error the chain met.
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

std::expected<int, std::string> share(int n)
{
    return 100 / n;
}

int main()
{
    std::unexpected<std::string> none {"none"};
    std::expected<int, std::string> r {none};
    std::expected<int, std::string> s {r.and_then(share)};
    std::printf("%d\n", s.value_or(-1));
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <expected>
#include <string>

std::expected<int, std::string> share(int n)
{
    return 100 / n;
}

int main()
{
    std::expected<int, std::string> r {200};
    std::expected<int, std::string> s {
        r.and_then(share).and_then(share)};
    std::printf("%d\n", s.value_or(-1));
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads n integers and, for each x, runs three checks in this order: x is positive (error `not positive`), x is even (error `odd`), and x is at most 100 (error `too big`). When all three pass, print x / 2. Otherwise print `error:` and the error of the first check that fails. Write each check as a function that returns `std::expected<int, std::string>`: x, or its error. Chain the three checks with `and_then`.
Input: one line, n; one line, n integers.
Output: n lines, x / 2 or the error for each integer.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
4
4 -3 7 200
```
```out
2
error: not positive
error: odd
error: too big
```
### Reference
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <string>

using Checked = std::expected<int, std::string>;

Checked positive(int x)
{
    if (x <= 0) {
        return std::unexpected {std::string {"not positive"}};
    }
    return x;
}

Checked even(int x)
{
    if (x % 2 != 0) {
        return std::unexpected {std::string {"odd"}};
    }
    return x;
}

Checked small(int x)
{
    if (x > 100) {
        return std::unexpected {std::string {"too big"}};
    }
    return x;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        Checked r {positive(x).and_then(even).and_then(small)};
        if (r) {
            std::println("{}", *r / 2);
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

using Checked = std::expected<int, std::string>;

Checked positive(int x)
{
    if (x <= 0) {
        return std::unexpected {std::string {"not positive"}};
    }
    return x;
}

Checked even(int x)
{
    if (x % 2 != 0) {
        return std::unexpected {std::string {"odd"}};
    }
    return x;
}

Checked small(int x)
{
    if (x > 100) {
        return std::unexpected {std::string {"too big"}};
    }
    return x;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        Checked r {positive(x).and_then(small).and_then(even)};
        if (r) {
            std::println("{}", *r / 2);
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
3
1000 999 100
```
```in
4
0 2 -7 101
```
```in
2
1 98
```
### Witness
```in
1
101
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads q pairs of integers a and b, and prints a / b when b divides a exactly. Print `error: zero` when b is 0, and `error: not exact` when b does not divide a. A function `nonzero(b)` returns `std::expected<int, std::string>`: b, or the error `zero`. A function `exact(a, d)` returns `std::expected<int, std::string>`: a / d, or the error `not exact`. Join the two with `and_then`.
Input: one line, q; q lines, a and b.
Output: q lines, a / b or the error for each pair.
Limits: 1 ≤ q ≤ 100; a and b are between -1000 and 1000.
### Examples
```in
3
12 4
7 2
-9 3
```
```out
3
error: not exact
-3
```
### Reference
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <string>

std::expected<int, std::string> nonzero(int b)
{
    if (b == 0) {
        return std::unexpected {std::string {"zero"}};
    }
    return b;
}

std::expected<int, std::string> exact(int a, int d)
{
    if (a % d != 0) {
        return std::unexpected {std::string {"not exact"}};
    }
    return a / d;
}

int main()
{
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        int a {0};
        int b {0};
        std::cin >> a >> b;
        std::expected<int, std::string> r {nonzero(b).and_then(
            [a](int d) { return exact(a, d); })};
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

std::expected<int, std::string> nonzero(int b)
{
    if (b == 0) {
        return std::unexpected {std::string {"zero"}};
    }
    return b;
}

std::expected<int, std::string> exact(int a, int d)
{
    if (a % d != 0) {
        return std::unexpected {std::string {"not exact"}};
    }
    return a / d;
}

int main()
{
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        int a {0};
        int b {0};
        std::cin >> a >> b;
        std::expected<int, std::string> r {
            exact(a, nonzero(b).value_or(0))};
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
0 1
```
```in
2
5 0
-1000 1000
```
```in
3
1000 -1
999 1000
0 0
```
### Witness
```in
1
4 0
```
