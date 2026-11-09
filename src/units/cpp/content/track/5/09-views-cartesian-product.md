# 5.09 Every pair of elements with std::views::cartesian_product
Part: `std::views::cartesian_product`
Clause: [range.cartesian.overview], [range.cartesian.view], [range.cartesian.iterator], [view.interface]
After: 5.08
Levels: c++23

## Example
```cpp
#include <print>
#include <ranges>
#include <string>
#include <vector>

int main()
{
    //: Keep two lists to pair up.
    std::vector<std::string> sizes {"S", "L"};
    std::vector<std::string> colours {"red", "blue", "green"};
    //: Make every pair; the last range changes fastest.
    auto pairs {std::views::cartesian_product(sizes, colours)};
    for (auto [s, c] : pairs) {
        std::println("{} {}", s, c);
    }
    //: Count the pairs: the product of the two lengths.
    std::println("{}", pairs.size());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <iostream>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> a {1, 2};
    auto in {std::views::istream<int>(std::cin)};
    int sum {0};
    for (auto [x, y] : std::views::cartesian_product(a, in)) {
        sum += x * y;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++23 ill-formed 11

## Verdict 2
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

int main()
{
    std::vector<int> a {1, 2, 3};
    std::vector<int> b {10, 20};
    auto p {std::views::cartesian_product(a, b)};
    auto [x, y] {p[6]};
    std::printf("%d\n", x * y);
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads n integers a and m integers b, and prints every pair of an element of a and an element of b. Print the pairs with a's element changing slowest: every pair with a[0] first, in the order of b, then every pair with a[1], and so on. Make the pairs with `std::views::cartesian_product`.
Input: one line, n; one line, n integers; one line, m; one line, m integers.
Output: n times m lines, each pair as the element of a, then the element of b.
Limits: 1 ≤ n ≤ 10; 1 ≤ m ≤ 10; each integer is between -1000 and 1000.
### Examples
```in
1
5
2
1 2
```
```out
5 1
5 2
```
### Reference
```cpp
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
    for (auto [x, y] : std::views::cartesian_product(a, b)) {
        std::println("{} {}", x, y);
    }
}
```
### Wrong
```cpp
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
    for (auto [y, x] : std::views::cartesian_product(b, a)) {
        std::println("{} {}", x, y);
    }
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
0
```
```in
2
7 8
3
1 2 3
```
### Witness
```in
2
1 2
2
3 4
```

## Alone 2
Form: run
Write a program that reads n integers a and a target t, and prints how many ordered pairs (i, j) have a[i] + a[j] equal to t. Both i and j go from 0 to n − 1, and i may equal j. Make the pairs with `std::views::cartesian_product`.
Input: one line, n; one line, n integers; one line, t.
Output: one line, the number of pairs.
Limits: 1 ≤ n ≤ 100; each integer and t are between -1000 and 1000.
### Examples
```in
1
4
8
```
```out
1
```
```in
2
0 5
3
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> a(n, 0);
    for (int& x : a) {
        std::cin >> x;
    }
    int t {0};
    std::cin >> t;
    int count {0};
    for (auto [x, y] : std::views::cartesian_product(a, a)) {
        if (x + y == t) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <ranges>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> a(n, 0);
    for (int& x : a) {
        std::cin >> x;
    }
    int t {0};
    std::cin >> t;
    int count {0};
    for (auto [x, y] : std::views::zip(a, a)) {
        if (x + y == t) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Tests
```in
1
-1000
1000
```
```in
3
1 2 3
4
```
```in
4
0 0 0 0
0
```
```in
2
500 500
1000
```
### Witness
```in
2
1 3
4
```
