# 7.02 Give a source and a target different types, so they cannot swap
Part: I.24 Avoid adjacent parameters that can be invoked by the same arguments in either order with different meaning
Clause: C++ Core Guidelines I.24, [views.span], [conv.qual], [over.match.viable]
After: 4.10
Levels: c++20

## Scan
Rule: I.24
Pattern: /[(,]\s*(?!const\b)([A-Za-z_][\w:]*(?:<[^<>()]*>)?)\*\s+\w+\s*,\s*\1\*\s+\w+\s*[,)=]/
### Bad
```cpp
template<typename T>
void copy_n(T* p, T* q, int n)
{
    for (int i = 0; i < n; ++i)
        q[i] = p[i];
}
```
### Good
```cpp
#include <span>

using std::span;

template<typename T>
void copy_n(span<const T> p, span<T> q)
{
    for (std::size_t i = 0; i < p.size(); ++i)
        q[i] = p[i];
}
```

## Example
```cpp
#include <print>
#include <span>

//: Read from a span of const ints and write to a span of ints.
void copy_n(std::span<const int> from, std::span<int> to)
{
    for (std::size_t i {0}; i < from.size(); ++i) {
        to[i] = from[i];
    }
}

int main()
{
    //: Keep the source const, so it can only be the source.
    const int source[3] {1, 2, 3};
    int target[3] {};
    copy_n(source, target);
    std::println("{} {} {}", target[0], target[1], target[2]);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <span>

void copy_n(std::span<const int> from, std::span<int> to)
{
    for (std::size_t i {0}; i < from.size(); ++i) {
        to[i] = from[i];
    }
}

int main()
{
    const int source[3] {1, 2, 3};
    int target[3] {};
    copy_n(target, source);
    std::printf("%d\n", target[0]);
}
```
Answer: c++20..c++23 ill-formed 15

## Verdict 2
```cpp
#include <cstdio>

void copy_n(int* from, int* to, int n)
{
    for (int i {0}; i < n; ++i) {
        to[i] = from[i];
    }
}

int main()
{
    int source[3] {1, 2, 3};
    int target[3] {};
    copy_n(target, source, 3);
    std::printf("%d %d\n", source[0], target[0]);
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and prints their running sums: the first, the first two added, and so on.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the n running sums separated by spaces.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
4
1 2 3 4
```
```out
1 3 6 10
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

void running(std::span<const int> in, std::span<int> out)
{
    int total {0};
    for (std::size_t i {0}; i < in.size(); ++i) {
        total += in[i];
        out[i] = total;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> in(static_cast<std::size_t>(n));
    for (int& x : in) {
        std::cin >> x;
    }
    std::vector<int> out(in.size());
    running(in, out);
    for (std::size_t i {0}; i < out.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", out[i]);
    }
    std::println("");
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

void running(int* in, int* out, int n)
{
    int total {0};
    for (int i {0}; i < n; ++i) {
        total += in[i];
        out[i] = total;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> in(static_cast<std::size_t>(n));
    for (int& x : in) {
        std::cin >> x;
    }
    std::vector<int> out(in.size());
    running(in.data(), out.data(), n);
    for (std::size_t i {0}; i < out.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", out[i]);
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
5
1000 1000 1000 1000 1000
```
```in
6
3 -3 3 -3 3 -3
```
### Witness
```cpp
#include <print>
#include <span>

void copy_n(std::span<const int> p, std::span<int> q)
{
    for (std::size_t i {0}; i < p.size(); ++i) {
        q[i] = p[i];
    }
}

int main()
{
    const int a[2] {4, 5};
    int b[2] {};
    copy_n(a, b);
    std::println("{} {}", b[0], b[1]);
}
```

## Alone 2
Form: run
Write a program that reads two integers a and b and prints the quotient and the remainder of a divided by b, as C++ division gives them.
Input: one line, a and b.
Output: one line, the quotient and the remainder separated by a space.
Limits: -10000 ≤ a ≤ 10000; 1 ≤ b ≤ 100.
### Examples
```in
17 5
```
```out
3 2
```
```in
-17 5
```
```out
-3 -2
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Division {
    int quotient;
    int remainder;
};

Division divide(int a, int b)
{
    return Division {a / b, a % b};
}

int main()
{
    int a {0};
    int b {1};
    std::cin >> a >> b;
    Division d {divide(a, b)};
    std::println("{} {}", d.quotient, d.remainder);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

void divide(int a, int b, int* quotient, int* remainder)
{
    *quotient = a / b;
    *remainder = a % b;
}

int main()
{
    int a {0};
    int b {1};
    std::cin >> a >> b;
    int q {0};
    int r {0};
    divide(a, b, &q, &r);
    std::println("{} {}", q, r);
}
```
### Tests
```in
0 1
```
```in
10000 1
```
```in
-10000 100
```
```in
99 100
```
```in
-1 7
```
### Witness
```cpp
#include <print>
#include <span>

template <typename T>
void copy_n(std::span<const T> p, std::span<T> q)
{
    for (std::size_t i {0}; i < p.size(); ++i) {
        q[i] = p[i];
    }
}

int main()
{
    const double a[2] {1.5, 2.5};
    double b[2] {};
    copy_n<double>(a, b);
    std::println("{} {}", b[0], b[1]);
}
```
