# 7.09 Return early instead of nesting conditions
Part: F.56 Avoid unnecessary condition nesting
Clause: C++ Core Guidelines F.56, [stmt.if], [stmt.return]
After: none
Levels: c++11

## Scan
Rule: F.56
Pattern: /\bif\s*\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)\s*\{\s*(?:[^{}]*?;\s*)?return\b[^;{}]*;\s*\}\s*else\b|\bif\s*\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)\s*\{\s*if\s*\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)\s*\{[^{}]*\}\s*\}(?!\s*else)/
### Bad
```cpp
void computeImportantThings(int)
{
}

void foo(int x) {
    if (!x) {
        return;
    }
    else {
        computeImportantThings(x);
    }
}

void foo(int x, int y) {
    if (x) {
        if (y) {
            computeImportantThings(x);
        }
    }
}
```
### Good
```cpp
void computeImportantThings(int)
{
}

void foo(int x) {
    if (!x)
        return;

    computeImportantThings(x);
}

void foo(int x, int y) {
    if (!(x && y))
        return;

    computeImportantThings(x);
}
```

## Example
```cpp
#include <print>

void show_ratio(int a, int b)
{
    //: Leave at once on the case you cannot handle.
    if (b < 1) {
        std::println("none");
        return;
    }
    //: Join two tests with && instead of nesting one in the other.
    if (a > 0 && a < b) {
        std::println("part");
    }
    //: Keep the main work at the outer level, after the guards.
    std::println("{}", a / b);
}

int main()
{
    show_ratio(3, 4);
    show_ratio(5, 0);
}
```

## Verdict 1
```cpp
#include <cstdio>

int sign(int x)
{
    if (x < 0) {
        return -1;
    } else if (x > 0) {
        return 1;
    }
}

int main()
{
    std::printf("%d\n", sign(0));
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>

int sign(int x)
{
    if (x < 0) {
        return -1;
    }
    if (x > 0) {
        return 1;
    }
    return 0;
}

int main()
{
    std::printf("%d\n", sign(0));
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and prints, for each, negative, zero or positive on its own line.
Input: one line, n, then one line, n integers separated by spaces.
Output: n lines, each negative, zero or positive.
Limits: 1 ≤ n ≤ 50; each integer is between -1000 and 1000.
### Examples
```in
3
-2 0 7
```
```out
negative
zero
positive
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

std::string sign_word(int x)
{
    if (x < 0) {
        return "negative";
    }
    if (x > 0) {
        return "positive";
    }
    return "zero";
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::println("{}", sign_word(x));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

std::string sign_word(int x)
{
    if (x < 0) {
        return "negative";
    } else if (x > 0) {
        return "positive";
    } else {
        return "zero";
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::println("{}", sign_word(x));
    }
}
```
### Tests
```in
1
0
```
```in
1
-1000
```
```in
4
1000 -1 1 0
```
### Witness
```cpp
#include <print>

void computeImportantThings(int x)
{
    std::println("{}", x);
}

void foo(int x)
{
    if (!x) {
        return;
    }
    computeImportantThings(x);
}

int main()
{
    foo(0);
    foo(5);
}
```

## Alone 2
Form: run
Write a program that reads a and b, then n integers, and prints each integer that is greater than a and less than b, one per line, in the order read.
Input: one line, a, b and n, then one line, n integers separated by spaces.
Output: the integers between a and b, one per line; nothing if there are none.
Limits: -1000 ≤ a ≤ b ≤ 1000; 1 ≤ n ≤ 50; each integer is between -1000 and 1000.
### Examples
```in
0 10 4
5 -3 10 9
```
```out
5
9
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (x > a && x < b) {
            std::println("{}", x);
        }
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (x > a) {
            if (x < b) {
                std::println("{}", x);
            }
        }
    }
}
```
### Tests
```in
5 5 3
4 5 6
```
```in
-1000 1000 3
-1000 0 1000
```
```in
1 3 1
2
```
```in
0 100 5
1 99 100 0 50
```
### Witness
```cpp
#include <print>

void computeImportantThings(int x)
{
    std::println("{}", x);
}

void foo(int x, int y)
{
    if (!(x && y)) {
        return;
    }
    computeImportantThings(x);
}

int main()
{
    foo(1, 0);
    foo(2, 3);
}
```
