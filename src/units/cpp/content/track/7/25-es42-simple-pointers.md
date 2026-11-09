# 7.25 ES.42: pass a span, not a pointer you step and index
Part: ES.42 Keep use of pointers simple and straightforward
Clause: C++ Core Guidelines ES.42, [expr.add], [expr.sub], [views.span]
After: 1.22, 4.10
Levels: c++20

## Scan
Rule: ES.42
Pattern: /^([ \t]*)(?=\S)[^\n]*?(?<!\b(?:if|while|switch|for|return|catch)\s*)\(\s*(?:[^()]*,)?\s*(?:const\s+)?\w+(?:::\w+)*\s*\*\s*(?:(?:const|__restrict__)\s+)*(\w+)\s*(?:,[^()]*)?\)\s*(?:const\s*)?(?:noexcept\s*)?\{(?:(?!^\1\}).)*?(?:\b\2\s*(?:\+(?![+=])|-\s*\d|\+\+|--|[-+]=|\[)|(?:\+\+|--)\s*\2\b)/ms
### Bad
```cpp
#include <cstddef>

using std::ptrdiff_t;

void use(int* p, int n);

void f(int* p, int count)
{
    if (count < 2) return;

    int* q = p + 1;

    ptrdiff_t d;
    int n;
    d = (p - &n);
    d = (q - p);

    int n = *p++;

    if (count < 6) return;

    p[4] = 1;

    p[count - 1] = 2;

    use(&p[0], 3);
}
```
### Good
```cpp
#include <span>

using std::span;

void use(int* p, int n);

void f(span<int> a)
{
    if (a.size() < 2) return;

    int n = a[0];

    span<int> q = a.subspan(1);

    if (a.size() < 6) return;

    a[4] = 1;

    a[a.size() - 1] = 2;

    use(a.data(), 3);
}
```

## Example
```cpp
#include <array>
#include <print>
#include <span>

//: Take the numbers as a span, which knows how many it holds.
int largest(std::span<const int> a)
{
    //: Visit each number by a range-for, with no pointer arithmetic.
    int best {a[0]};
    for (int x : a) {
        if (x > best) {
            best = x;
        }
    }
    return best;
}

int main()
{
    //: Pass the array; it becomes a span with its size.
    std::array<int, 3> values {4, 9, 2};
    std::println("{}", largest(values));
}
```

## Verdict 1
```cpp
#include <cstdio>

int sum(const int* p, int count)
{
    int s {0};
    for (int i {0}; i <= count; ++i) {
        s += p[i];
    }
    return s;
}

int main()
{
    int a[3] {1, 2, 3};
    std::printf("%d\n", sum(a, 3));
}
```
Answer: c++20..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstddef>

constexpr std::ptrdiff_t gap()
{
    int a[3] {};
    int n {0};
    int* p {a};
    return p - &n;
}

int main()
{
    constexpr std::ptrdiff_t d {gap()};
    return static_cast<int>(d);
}
```
Answer: c++20..c++23 undefined constant

## Alone 1
Form: run
Write a program that reads n and n integers and prints the largest of them. Find it in a function that you pass the numbers to.
Input: the first line holds n; the second line holds n integers separated by spaces.
Output: one line, one integer.
Limits: 1 ≤ n ≤ 100, every integer is from −1 000 000 000 to 1 000 000 000.
### Examples
```in
3
4 9 2
```
```out
9
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

int largest(std::span<const int> a)
{
    int best {a[0]};
    for (int x : a) {
        if (x > best) {
            best = x;
        }
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    std::println("{}", largest(v));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

int largest(const int* p, int n)
{
    int best {p[0]};
    for (int i {1}; i < n; ++i) {
        if (p[i] > best) {
            best = p[i];
        }
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    std::println("{}", largest(v.data(), n));
}
```
### Tests
```in
1
-1000000000
```
```in
5
1000000000 -3 7 999999999 0
```
```in
4
-5 -2 -9 -2
```
### Witness
```cpp
#include <span>

void f(std::span<int> a)
{
    if (a.size() < 2) {
        return;
    }
    std::span<int> q {a.subspan(1)};
    a[a.size() - 1] = q[0];
}
```

## Alone 2
Form: run
Write a program that reads n and n integers, turns their order around in place in a function that you pass them to, and prints them.
Input: the first line holds n; the second line holds n integers separated by spaces.
Output: one line, the n integers in the turned order, separated by spaces.
Limits: 1 ≤ n ≤ 100, every integer is from −1 000 000 000 to 1 000 000 000.
### Examples
```in
4
1 2 3 4
```
```out
4 3 2 1
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <utility>
#include <vector>

void reverse(std::span<int> a)
{
    std::size_t i {0};
    std::size_t j {a.size()};
    while (j > i + 1) {
        --j;
        std::swap(a[i], a[j]);
        ++i;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    reverse(v);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <span>
#include <utility>
#include <vector>

void reverse(int* first, int* last)
{
    while (last - first > 1) {
        --last;
        std::swap(*first, *last);
        ++first;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    reverse(v.data(), v.data() + v.size());
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000000000
```
```in
3
5 6 7
```
```in
2
1000000000 -1000000000
```
```in
5
1 1 2 2 3
```
### Witness
```cpp
#include <span>

int first(std::span<const int> a)
{
    return a.front();
}
```
