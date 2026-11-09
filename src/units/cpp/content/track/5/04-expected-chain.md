# 5.04 Carrying an error through a chain of calls with std::expected
Part: `std::expected` carrying the error of a call through a chain of calls
Clause: [expected.expected], [expected.object.cons], [expected.object.obs], [expected.unexpected]
After: none
Levels: c++23

## Example
```cpp
#include <expected>
#include <print>
#include <string>

//: Return the value, or the error wrapped in std::unexpected.
std::expected<int, std::string> half(int x)
{
    if (x % 2 != 0) {
        return std::unexpected {std::string {"odd"}};
    }
    return x / 2;
}

//: Pass an error from a call up unchanged; go on only with a value.
std::expected<int, std::string> quarter(int x)
{
    std::expected<int, std::string> h {half(x)};
    if (!h) {
        return std::unexpected {h.error()};
    }
    return half(*h);
}

int main()
{
    //: Test the result at the top, then print the value or the error.
    for (int x : {12, 6, 5}) {
        std::expected<int, std::string> q {quarter(x)};
        if (q) {
            std::println("{}", *q);
        } else {
            std::println("error: {}", q.error());
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
        return std::string {"odd"};
    }
    return x / 2;
}

int main()
{
    std::expected<int, std::string> r {half(6)};
    std::printf("%d\n", r.value_or(-1));
}
```
Answer: c++23 ill-formed 8

## Verdict 2
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

std::expected<long, std::string> quarter(int x)
{
    std::expected<int, std::string> h {half(x)};
    if (!h) {
        return h;
    }
    return half(*h);
}

int main()
{
    std::expected<long, std::string> q {quarter(6)};
    std::printf("%s\n", q ? "value" : q.error().c_str());
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n words and, for each word, prints the integer square root of the number it spells: the largest r with r times r at most the number. A word that is not a whole integer gives `error: not a number`, and a negative number gives `error: negative`. A function `parse(word)` returns `std::expected<int, std::string>`: the number, or the error `not a number`. A function `root(word)` calls `parse` and returns `std::expected<int, std::string>`: the root, or the error.
Input: one line, n; one line, n words.
Output: n lines, the root or the error for each word.
Limits: 1 ≤ n ≤ 100; a word has 1 to 10 characters; a number is between -1000000 and 1000000.
### Examples
```in
3
16 -4 10
```
```out
4
error: negative
3
```
### Reference
```cpp
#include <charconv>
#include <expected>
#include <iostream>
#include <print>
#include <string>

std::expected<int, std::string> parse(const std::string& w)
{
    int v {0};
    const char* end {w.data() + w.size()};
    auto [at, ec] {std::from_chars(w.data(), end, v)};
    if (ec != std::errc {} || at != end) {
        return std::unexpected {std::string {"not a number"}};
    }
    return v;
}

std::expected<int, std::string> root(const std::string& w)
{
    std::expected<int, std::string> v {parse(w)};
    if (!v) {
        return std::unexpected {v.error()};
    }
    if (*v < 0) {
        return std::unexpected {std::string {"negative"}};
    }
    int r {0};
    while ((r + 1) * (r + 1) <= *v) {
        ++r;
    }
    return r;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        std::expected<int, std::string> r {root(w)};
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
#include <charconv>
#include <expected>
#include <iostream>
#include <print>
#include <string>

std::expected<int, std::string> parse(const std::string& w)
{
    int v {0};
    const char* end {w.data() + w.size()};
    auto [at, ec] {std::from_chars(w.data(), end, v)};
    if (ec != std::errc {} || at != end) {
        return std::unexpected {std::string {"not a number"}};
    }
    return v;
}

std::expected<int, std::string> root(const std::string& w)
{
    std::expected<int, std::string> v {parse(w)};
    if (!v) {
        return 0;
    }
    if (*v < 0) {
        return std::unexpected {std::string {"negative"}};
    }
    int r {0};
    while ((r + 1) * (r + 1) <= *v) {
        ++r;
    }
    return r;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        std::expected<int, std::string> r {root(w)};
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
0
```
```in
4
1000000 -1000000 abc 12x
```
```in
3
1 2 99
```
```in
2
-1 0x
```
### Witness
```in
1
seven
```

## Alone 2
Form: run
Write a program that reads n integers v, then q indices, and for each index i prints v[v[i]]. When an index the program uses is not between 0 and n − 1, print `missing` and that index instead; i is used first, then v[i]. A function `step(v, i)` returns `std::expected<int, int>`: v[i], or the index i as the error. A function `twice(v, i)` calls `step` twice and returns `std::expected<int, int>` the same way.
Input: one line, n; one line, n integers; one line, q; one line, q indices.
Output: q lines, each a number or `missing` and an index.
Limits: 1 ≤ n ≤ 100; each integer and each index is between -1000 and 1000; 1 ≤ q ≤ 100.
### Examples
```in
3
2 0 5
2
0 2
```
```out
5
missing 5
```
### Reference
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <vector>

std::expected<int, int> step(const std::vector<int>& v, int i)
{
    if (i < 0 || i >= static_cast<int>(v.size())) {
        return std::unexpected {i};
    }
    return v[i];
}

std::expected<int, int> twice(const std::vector<int>& v, int i)
{
    std::expected<int, int> first {step(v, i)};
    if (!first) {
        return std::unexpected {first.error()};
    }
    return step(v, *first);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        int i {0};
        std::cin >> i;
        std::expected<int, int> r {twice(v, i)};
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("missing {}", r.error());
        }
    }
}
```
### Wrong
```cpp
#include <expected>
#include <iostream>
#include <print>
#include <vector>

std::expected<int, int> step(const std::vector<int>& v, int i)
{
    if (i < 0 || i >= static_cast<int>(v.size())) {
        return std::unexpected {i};
    }
    return v[i];
}

std::expected<int, int> twice(const std::vector<int>& v, int i)
{
    std::expected<int, int> first {step(v, i)};
    if (!first) {
        return first.error();
    }
    return step(v, *first);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        int i {0};
        std::cin >> i;
        std::expected<int, int> r {twice(v, i)};
        if (r) {
            std::println("{}", *r);
        } else {
            std::println("missing {}", r.error());
        }
    }
}
```
### Tests
```in
1
0
1
0
```
```in
2
1 -3
3
1 0 -1
```
```in
4
3 2 1 0
4
0 1 2 4
```
```in
1
1000
2
1000 -1000
```
### Witness
```in
2
1 0
1
7
```
