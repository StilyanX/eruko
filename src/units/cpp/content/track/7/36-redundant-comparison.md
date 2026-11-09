# 7.36 ES.87: test a pointer or a bool as it is
Part: ES.87 Don't add redundant == or != to conditions
Clause: C++ Core Guidelines ES.87, [stmt.pre], [conv.bool], [expr.eq]
After: none
Levels: c++11

## Scan
Rule: ES.87
Pattern: /\b(?:if|while)\s*\([^;{}]*?(?:[!=]=\s*(?:nullptr|true|false)\b|\b(?:nullptr|true|false)\s*[!=]=)|\bfor\s*\([^;{}]*;[^;{}]*?(?:[!=]=\s*(?:nullptr|true|false)\b|\b(?:nullptr|true|false)\s*[!=]=)/
### Bad
```cpp
void use(int* p);

void f(int* p)
{
    if (p != nullptr) { use(p); }
}
```
### Good
```cpp
void use(int* p);

void f(int* p)
{
    if (p) { use(p); }
}
```

## Example
```cpp
#include <print>

int main()
{
    int x {4};
    int* p {&x};
    int* q {nullptr};
    //: Test a pointer by itself to ask if it points somewhere.
    if (p) {
        std::println("p points to {}", *p);
    }
    //: Negate it to ask if it is null.
    if (!q) {
        std::println("q is null");
    }
    //: Test a bool by itself too.
    bool even {x % 2 == 0};
    if (even) {
        std::println("{} is even", x);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <cstring>

int main()
{
    const char* a {"cat"};
    const char* b {"cap"};
    if (std::strcmp(a, b)) {
        std::printf("same\n");
    } else {
        std::printf("different\n");
    }
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int x {3};
    int* p {&x};
    if (p == true) {
        std::printf("%d\n", *p);
    }
}
```
Answer: c++11..c++23 ill-formed 7

## Alone 1
Form: run
Write a program that reads a limit and n whole numbers and prints the first number above the limit.
Input: one line, n and the limit, then a line of n whole numbers.
Output: one line, the first number greater than the limit, or none if there is no such number.
Limits: 1 ≤ n ≤ 100; the limit and each number from -1000 to 1000.
### Examples
```in
4 5
2 9 7 1
```
```out
9
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

const int* first_above(const std::vector<int>& v, int limit)
{
    for (const int& x : v) {
        if (x > limit) {
            return &x;
        }
    }
    return nullptr;
}

int main()
{
    int n {0};
    int limit {0};
    std::cin >> n >> limit;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    const int* hit {first_above(v, limit)};
    if (hit) {
        std::println("{}", *hit);
    } else {
        std::println("none");
    }
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

const int* first_above(const std::vector<int>& v, int limit)
{
    for (const int& x : v) {
        if (x > limit) {
            return &x;
        }
    }
    return nullptr;
}

int main()
{
    int n {0};
    int limit {0};
    std::cin >> n >> limit;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    const int* hit {first_above(v, limit)};
    if (hit != nullptr) {
        std::println("{}", *hit);
    } else {
        std::println("none");
    }
}
```
### Tests
```in
1 0
0
```
```in
1 -1000
1000
```
```in
3 1000
1000 -5 999
```
```in
5 -3
-9 -4 -3 -2 8
```
### Witness
```cpp
void use(int* p);

void f(int* p)
{
    if (p) {
        use(p);
    }
}
```

## Alone 2
Form: run
Write a program that reads n whole numbers and says whether they are in order from small to large.
Input: one line, n, then a line of n whole numbers.
Output: one line, sorted if no number is less than the one before it, and not sorted if one is.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
4
1 3 3 8
```
```out
sorted
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int last {0};
    bool sorted {true};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (i > 0 && x < last) {
            sorted = false;
        }
        last = x;
    }
    if (sorted) {
        std::println("sorted");
    } else {
        std::println("not sorted");
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int last {0};
    bool sorted {true};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (i > 0 && x < last) {
            sorted = false;
        }
        last = x;
    }
    if (sorted == true) {
        std::println("sorted");
    } else {
        std::println("not sorted");
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
5 4
```
```in
5
-3 -3 0 7 1000
```
```in
6
1 2 3 4 5 0
```
### Witness
```cpp
#include <cstdio>

int main()
{
    int x {3};
    int* p {&x};
    if (p) {
        std::printf("%d\n", *p);
    }
}
```
