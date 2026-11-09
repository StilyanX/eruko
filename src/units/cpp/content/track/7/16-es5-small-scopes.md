# 7.16 ES.5: declare a loop's counter in the loop
Part: ES.5 Keep scopes small
Clause: C++ Core Guidelines ES.5, [stmt.for], [basic.scope.block]
After: 1.18
Levels: c++11

## Scan
Rule: ES.5
Pattern: /\bfor\s*\(\s*(\w+)\s*=(?!=)[^;]*;[^;]*;(?:[^()]|\([^()]*\))*\)\s*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|[^;{}]*;)(?:(?!\b\1\b|^\})[\s\S])*(?:^\}|(?![\s\S])|\b(?:int|long|short|char|bool|unsigned|float|double|auto|std::size_t)\s*[*&]*\s*\1\b)/m
### Bad
```cpp
struct Shape {
    virtual ~Shape() = default;
};

struct Circle : Shape {
};

void use(Shape* ps)
{
    int i;
    for (i = 0; i < 20; ++i) {
    }
    for (int i = 0; i < 20; ++i) {
    }

    if (auto pc = dynamic_cast<Circle*>(ps)) {
    }
    else {
    }
}
```
### Good
```cpp
struct Shape {
    virtual ~Shape() = default;
};

struct Circle : Shape {
};

void use(Shape* ps)
{
    for (int i = 0; i < 20; ++i) {
    }

    if (auto pc = dynamic_cast<Circle*>(ps)) {
    }
    else {
    }
}
```

## Example
```cpp
#include <print>

int main()
{
    int total {0};
    //: Declare the counter in the for statement itself.
    for (int i {1}; i <= 4; ++i) {
        total += i;
    }
    //: Keep outside only what is used after the loop.
    std::println("{}", total);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int total {0};
    for (int i {0}; i < 3; ++i) {
        total += i;
    }
    std::printf("%d %d\n", total, i);
}
```
Answer: c++11..c++23 ill-formed 9

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int i {5};
    for (int i {0}; i < 3; ++i) {
        std::printf("%d ", i);
    }
    std::printf("%d\n", i);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and prints the sum of the squares of 1 to n, adding the squares one by one in a for loop.
Input: one line, n.
Output: one line, 1 + 4 + … + n².
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
3
```
```out
14
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    long long sum {0};
    for (int i {1}; i <= n; ++i) {
        sum += 1LL * i * i;
    }
    std::println("{}", sum);
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
    long long sum {0};
    int i {0};
    for (i = 1; i <= n; ++i) {
        sum += 1LL * i * i;
    }
    std::println("{}", sum);
}
```
### Tests
```in
1
```
```in
1000
```
```in
2
```
### Witness
```cpp
struct Shape {
    virtual ~Shape() = default;
};

struct Circle : Shape {
};

int use(Shape* ps)
{
    int sum {0};
    for (int i {0}; i < 20; ++i) {
        sum += i;
    }
    if (auto pc = dynamic_cast<Circle*>(ps)) {
        return sum;
    }
    return 0;
}
```

## Alone 2
Form: run
Write a program that reads n and prints a triangle of n rows: row k holds k stars and nothing else.
Input: one line, n.
Output: n lines; line k holds k letters `*`.
Limits: 1 ≤ n ≤ 50.
### Examples
```in
3
```
```out
*
**
***
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int r {1}; r <= n; ++r) {
        for (int c {0}; c < r; ++c) {
            std::print("*");
        }
        std::println();
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
    int c {0};
    for (int r {1}; r <= n; ++r) {
        for (c = 0; c < r; ++c) {
            std::print("*");
        }
        std::println();
    }
}
```
### Tests
```in
1
```
```in
50
```
```in
2
```
### Witness
```cpp
int count(int n)
{
    int steps {0};
    for (int i {0}; i < n; ++i) {
        ++steps;
    }
    return steps;
}
```
