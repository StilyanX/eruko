# 5.08 Walking ranges side by side with std::views::zip
Part: `std::views::zip`
Clause: [range.zip.overview], [range.zip.view], [range.zip.iterator], [view.interface], [alg.sort]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <ranges>
#include <string>
#include <vector>

int main()
{
    //: Keep two lists of different lengths.
    std::vector<std::string> names {"ann", "bob", "cy"};
    std::vector<int> ages {31, 27};
    //: Walk them side by side; zip stops at the shorter one.
    for (auto [name, age] : std::views::zip(names, ages)) {
        std::println("{} {}", name, age);
    }
    //: Write through the elements; they refer into the lists.
    for (auto [name, age] : std::views::zip(names, ages)) {
        age += 1;
    }
    std::println("{} {}", ages[0], ages[1]);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> a {1, 2, 3};
    std::vector<int> b {10, 20};
    int sum {0};
    for (auto [x, y] : std::views::zip(a, b)) {
        sum += x * y;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> a {1, 2, 3};
    std::vector<int> b {10, 20};
    auto z {std::views::zip(a, b)};
    auto [x, y] {z[2]};
    std::printf("%d\n", x * y);
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n integers a and m integers b, and prints the sum of a[i] times b[i] over every i that both lists have. Walk the two lists with `std::views::zip`.
Input: one line, n; one line, n integers; one line, m; one line, m integers.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 100; 1 ≤ m ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
2
1 2
3
10 20 30
```
```out
50
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

std::vector<int> read_list()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    return v;
}

int main()
{
    std::vector<int> a {read_list()};
    std::vector<int> b {read_list()};
    auto z {std::views::zip(a, b)};
    int sum {0};
    for (std::size_t i {0}; i < z.size(); ++i) {
        auto [x, y] {z[i]};
        sum += x * y;
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

std::vector<int> read_list()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    return v;
}

int main()
{
    std::vector<int> a {read_list()};
    std::vector<int> b {read_list()};
    auto z {std::views::zip(a, b)};
    int sum {0};
    for (std::size_t i {0}; i < a.size(); ++i) {
        auto [x, y] {z[i]};
        sum += x * y;
    }
    std::println("{}", sum);
}
```
### Tests
```in
1
-1000
1
1000
```
```in
3
1 2 3
1
5
```
```in
2
4 5
2
6 7
```
```in
4
1 1 1 1
2
-3 3
```
### Witness
```in
3
1 2 3
2
10 20
```

## Alone 2
Form: run
Write a program that reads n keys and n values, and prints the n pairs sorted by key, smaller first; pairs with equal keys are sorted by value, smaller first. Sort the two lists together with `std::ranges::sort` on `std::views::zip`.
Input: one line, n; one line, n keys; one line, n values.
Output: n lines, a key and its value.
Limits: 1 ≤ n ≤ 100; each key and each value is between -1000 and 1000.
### Examples
```in
3
3 1 2
30 10 20
```
```out
1 10
2 20
3 30
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
    std::vector<int> keys(n, 0);
    for (int& x : keys) {
        std::cin >> x;
    }
    std::vector<int> values(n, 0);
    for (int& x : values) {
        std::cin >> x;
    }
    std::ranges::sort(std::views::zip(keys, values));
    for (auto [k, v] : std::views::zip(keys, values)) {
        std::println("{} {}", k, v);
    }
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
    std::vector<int> keys(n, 0);
    for (int& x : keys) {
        std::cin >> x;
    }
    std::vector<int> values(n, 0);
    for (int& x : values) {
        std::cin >> x;
    }
    std::ranges::sort(std::views::zip(values, keys));
    for (auto [k, v] : std::views::zip(keys, values)) {
        std::println("{} {}", k, v);
    }
}
```
### Tests
```in
1
-1000
1000
```
```in
4
2 2 1 1
5 -5 7 3
```
```in
3
-1 -2 -3
1 2 3
```
### Witness
```in
2
1 2
9 5
```
