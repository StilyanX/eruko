# 4.09 A view does its work only when an element is read
Part: the laziness of a view
Clause: [range.adaptors], [range.transform.view], [range.filter.view], [range.take.view], [range.iota.view], [range.ref.view]
After: 4.08
Levels: c++20

## Example
```cpp
#include <print>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> v {1, 2, 3, 4};
    //: Make a view that squares; nothing is squared yet.
    auto squares {v | std::views::transform([](int x) {
        std::println("square {}", x);
        return x * x;
    })};
    //: Change the vector; the view reads it only later.
    v[0] = 5;
    //: Read one element; only now is it squared.
    std::println("{}", squares[0]);
    //: Read it again; it is squared again.
    std::println("{}", squares[0]);
    //: Take from an endless range; only what is read is made.
    for (int x : std::views::iota(1) | std::views::take(3)) {
        std::println("{}", x);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> v {4, 2, 0};
    auto parts {v | std::views::transform([](int x) {
        return 8 / x;
    })};
    for (int p : parts | std::views::take(2)) {
        std::printf("%d\n", p);
    }
}
```
Answer: c++20..c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> v {4, 6};
    int d {2};
    auto parts {v | std::views::transform([&d](int x) {
        return x / d;
    })};
    d = 0;
    for (int p : parts) {
        std::printf("%d\n", p);
    }
}
```
Answer: c++20..c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads n integers and prints their squares in the order read, then the integers sorted from smallest to largest.
Input: first line n, then a line of n integers.
Output: two lines: the n squares in the order read, then the n integers sorted, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
1 4 9
1 2 3
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    auto squares {v | std::views::transform([](int x) {
        return x * x;
    })};
    for (int s : squares) {
        std::print("{} ", s);
    }
    std::println();
    std::ranges::sort(v);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    auto squares {v | std::views::transform([](int x) {
        return x * x;
    })};
    std::ranges::sort(v);
    for (int s : squares) {
        std::print("{} ", s);
    }
    std::println();
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
4
3 -1 2 0
```
```in
5
-2 -2 1 1 0
```
```in
2
1000 999
```
### Witness
```in
2
2 1
```

## Alone 2
Form: run
Write a program that reads n and k and prints the n smallest positive integers that k does not divide.
Input: one line, n and k.
Output: one line, the n integers from smallest to largest, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 2 ≤ k ≤ 1000.
### Examples
```in
3 5
```
```out
1 2 3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <ranges>

int main()
{
    int n {0};
    int k {2};
    std::cin >> n >> k;
    auto kept {std::views::iota(1)
               | std::views::filter([k](int x) {
                     return x % k != 0;
                 })
               | std::views::take(n)};
    for (int x : kept) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <ranges>

int main()
{
    int n {0};
    int k {2};
    std::cin >> n >> k;
    auto kept {std::views::iota(1)
               | std::views::take(n)
               | std::views::filter([k](int x) {
                     return x % k != 0;
                 })};
    for (int x : kept) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1 2
```
```in
5 2
```
```in
1000 2
```
```in
4 3
```
```in
1000 1000
```
### Witness
```in
4 2
```
