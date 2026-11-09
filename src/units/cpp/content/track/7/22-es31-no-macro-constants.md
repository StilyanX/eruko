# 7.22 ES.31: write a constant as constexpr and a "function" as a function
Part: ES.31 Don't use macros for constants or "functions"
Clause: C++ Core Guidelines ES.31, [cpp.replace], [dcl.constexpr], [temp.pre]
After: none
Levels: c++11

## Scan
Rule: ES.31
Pattern: /^[ \t]*#[ \t]*define[ \t]+\w+(?:\(|[ \t]+\S)/m
### Bad
```cpp
#define PI 3.14
#define SQUARE(a, b) (a * b)
```
### Good
```cpp
constexpr double pi = 3.14;
template<typename T> T square(T a, T b) { return a * b; }
```

## Example
```cpp
#include <print>

//: Write a constant as constexpr; it has a type and a scope.
constexpr double pi {3.14159};

//: Write a "function" as a function; its argument is one value.
template <typename T>
T square(T a)
{
    return a * a;
}

int main()
{
    std::println("{:.2f} {}", pi * square(2.0), square(1 + 2));
}
```

## Verdict 1
```cpp
#include <cstdio>

#define SQUARE(a, b) (a * b)

int main()
{
    std::printf("%d\n", SQUARE(1 + 2, 3));
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

namespace geo {
#define WIDTH 8
constexpr int width {2};
}

int main()
{
    std::printf("%d %d\n", WIDTH, geo::width);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and prints the numbers 1 to n, four to a line, separated by one space. Name the 4 once, as a constant.
Input: one line, n.
Output: the numbers, four on each line; the last line may hold fewer.
Limits: 1 ≤ n ≤ 100.
### Examples
```in
6
```
```out
1 2 3 4
5 6
```
### Reference
```cpp
#include <iostream>
#include <print>

constexpr int per_row {4};

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {1}; i <= n; ++i) {
        if (i % per_row == 0 || i == n) {
            std::println("{}", i);
        } else {
            std::print("{} ", i);
        }
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

#define per_row 4

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {1}; i <= n; ++i) {
        if (i % per_row == 0 || i == n) {
            std::println("{}", i);
        } else {
            std::print("{} ", i);
        }
    }
}
```
### Tests
```in
1
```
```in
100
```
```in
4
```
```in
5
```
### Witness
```cpp
constexpr double pi {3.14};

template <typename T>
T square(T a, T b)
{
    return a * b;
}
```

## Alone 2
Form: run
Write a program that reads pairs of whole numbers until the input ends and prints the larger number of each pair. Find it with one function that works for any type with `>`.
Input: one pair per line.
Output: one line per pair, the larger number.
Limits: 1 to 100 pairs; each number is from -1000 to 1000.
### Examples
```in
3 7
9 -2
```
```out
7
9
```
### Reference
```cpp
#include <iostream>
#include <print>

template <typename T>
T larger(T a, T b)
{
    return a > b ? a : b;
}

int main()
{
    int a {0};
    int b {0};
    while (std::cin >> a >> b) {
        std::println("{}", larger(a, b));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

#define larger(a, b) ((a) > (b) ? (a) : (b))

int main()
{
    int a {0};
    int b {0};
    while (std::cin >> a >> b) {
        std::println("{}", larger(a, b));
    }
}
```
### Tests
```in
-1000 -1000
```
```in
1000 -1000
```
```in
5 5
```
```in
-3 -4
0 1
```
### Witness
```cpp
template <typename T>
T square(T a)
{
    return a * a;
}

int nine()
{
    return square(1 + 2);
}
```
