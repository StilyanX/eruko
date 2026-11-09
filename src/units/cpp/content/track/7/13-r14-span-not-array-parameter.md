# 7.13 R.14: take a span, never a [] parameter
Part: R.14 Avoid [] parameters, prefer span
Clause: C++ Core Guidelines R.14, [dcl.fct], [conv.array], [views.span]
After: 1.22, 4.10
Levels: c++20

## Scan
Rule: R.14
Pattern: /\w\s*\[\s*\]\s*[,)]|\b(?!(?:sizeof|alignof|return|throw|delete|new|else|case|and|or|not|xor|co_return|co_yield|co_await)\b)\w+\s+\w+\s*\[[^\]\n]*\]\s*[,)]/
### Bad
```cpp
void f(int[]);
```
### Good
```cpp
#include <span>

void f(std::span<int>);
```

## Example
```cpp
#include <print>
#include <span>

//: Take the numbers as a span, so their count comes with them.
int total(std::span<const int> v)
{
    int sum {0};
    for (int x : v) {
        sum += x;
    }
    return sum;
}

int main()
{
    //: Pass the array; the span keeps its size, 4.
    int values[] {1, 2, 3, 4};
    std::println("{} of {}", total(values), std::size(values));
}
```

## Verdict 1
```cpp
#include <cstdio>

int last(int a[3])
{
    return a[2];
}

int main()
{
    int v[2] {1, 2};
    std::printf("%d\n", last(v));
}
```
Answer: c++20..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <span>

int last(std::span<const int, 3> a)
{
    return a[2];
}

int main()
{
    int v[2] {1, 2};
    std::printf("%d\n", last(v));
}
```
Answer: c++20..c++23 ill-formed 12

## Alone 1
Form: run
Write a program that reads n and then n whole numbers and prints the largest. Find it in a function that takes all the numbers as one argument.
Input: one line, n, then one line of n numbers.
Output: one line, the largest number.
Limits: 1 ≤ n ≤ 100; each number is from -1000 to 1000.
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

int largest(std::span<const int> v)
{
    int best {v.front()};
    for (int x : v) {
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
    std::vector<int> v {};
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

int largest(const int v[], int n)
{
    int best {v[0]};
    for (int i {0}; i < n; ++i) {
        if (v[i] > best) {
            best = v[i];
        }
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v {};
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
-1000
```
```in
5
-3 -1 -7 -1 -9
```
```in
4
1000 2 3 999
```
```in
6
5 4 3 2 1 6
```
### Witness
```cpp
#include <span>

int f(std::span<int> v)
{
    return static_cast<int>(v.size());
}
```

## Alone 2
Form: run
Write a program that reads the 9 numbers of a 3 by 3 grid, row by row, and prints the grid turned over its main diagonal: row i of the output is column i of the input. Turn the grid in a function that takes the 9 numbers as one argument and changes them in place.
Input: three lines of three whole numbers.
Output: three lines of three numbers, separated by one space.
Limits: each number is from -99 to 99.
### Examples
```in
1 2 3
4 5 6
7 8 9
```
```out
1 4 7
2 5 8
3 6 9
```
### Reference
```cpp
#include <array>
#include <iostream>
#include <print>
#include <span>
#include <utility>

void turn(std::span<int, 9> g)
{
    for (std::size_t r {0}; r < 3; ++r) {
        for (std::size_t c {r + 1}; c < 3; ++c) {
            std::swap(g[r * 3 + c], g[c * 3 + r]);
        }
    }
}

int main()
{
    std::array<int, 9> g {};
    for (int& x : g) {
        std::cin >> x;
    }
    turn(g);
    for (std::size_t r {0}; r < 3; ++r) {
        std::println("{} {} {}", g[r * 3], g[r * 3 + 1],
                     g[r * 3 + 2]);
    }
}
```
### Wrong
```cpp
#include <array>
#include <iostream>
#include <print>
#include <span>
#include <utility>

void turn(int g[9])
{
    for (std::size_t r {0}; r < 3; ++r) {
        for (std::size_t c {r + 1}; c < 3; ++c) {
            std::swap(g[r * 3 + c], g[c * 3 + r]);
        }
    }
}

int main()
{
    std::array<int, 9> g {};
    for (int& x : g) {
        std::cin >> x;
    }
    turn(g.data());
    for (std::size_t r {0}; r < 3; ++r) {
        std::println("{} {} {}", g[r * 3], g[r * 3 + 1],
                     g[r * 3 + 2]);
    }
}
```
### Tests
```in
0 0 0
0 0 0
0 0 0
```
```in
-99 99 -99
99 -99 99
-99 99 -99
```
```in
1 2 3
1 2 3
1 2 3
```
```in
5 -1 0
7 8 -9
2 3 4
```
### Witness
```cpp
#include <span>

void f(std::span<int, 9> grid)
{
    grid[0] = grid[8];
}
```
