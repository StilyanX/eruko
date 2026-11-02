# 1.42 Structured bindings
Part: structured bindings
Clause: [dcl.struct.bind], [dcl.init.ref], [class.temporary]
After: 1.40
Levels: c++23

## Example
```cpp
#include <map>
#include <print>
#include <string>

struct Point
{
    int x {0};
    int y {0};
};

int main()
{
    std::map<std::string, int> stock {{"pen", 3}, {"cup", 5}};
    //: Name the key and the value of each element of the map.
    for (const auto& [name, count] : stock) {
        std::println("{} {}", name, count);
    }
    Point p {1, 2};
    //: Bind by copy: the names refer to a copy of p.
    auto [cx, cy] = p;
    cx = 10;
    //: Bind by reference: the names refer to p's own members.
    auto& [rx, ry] = p;
    ry = 20;
    std::println("{} {} {}", p.x, p.y, cx + cy);
}
```

## Verdict 1
```cpp
#include <print>

struct Color
{
    int red {0};
    int green {0};
    int blue {0};
};

int main()
{
    Color c {10, 20, 30};
    auto [r, g] = c;
    std::println("{} {}", r, g);
}
```
Answer: c++23 ill-formed 13

## Verdict 2
```cpp
#include <print>
#include <string>

struct Range
{
    std::string name;
    int low {0};
    int high {0};
};

Range make()
{
    return Range {"digits", 0, 9};
}

int main()
{
    const auto& [name, low, high] = make();
    std::println("{} {} {}", name, low, high);
}
```
Answer: c++23 defined

## Count
Columns: copies
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Tally
{
    Tally() = default;

    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
};

int main()
{
    Tally two[2];
    Tally three[3];
    auto [a, b] = two;
    auto& [c, d] = two;
    const auto& [e, f, g] = three;
    auto [h, i, j] = three;
    auto&& [k, m] = two;
    std::println("done");
}
```

## Alone 1
Form: run
Write a program that reads n pairs of integers into a `std::vector<std::pair<int, int>>`, then, for each pair whose first number is larger than its second, swaps the two numbers inside the vector. Print every pair afterwards, in order.
Input: one line, n; then n lines, each two integers a and b.
Output: n lines, each pair's two numbers separated by a space.
Limits: 1 ≤ n ≤ 1000, -10^6 ≤ a, b ≤ 10^6.
### Examples
```in
2
1 2
5 5
```
```out
1 2
5 5
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::pair<int, int>> pairs(n);
    for (auto& [a, b] : pairs) {
        std::cin >> a >> b;
    }
    for (auto& [a, b] : pairs) {
        if (a > b) {
            std::swap(a, b);
        }
    }
    for (const auto& [a, b] : pairs) {
        std::println("{} {}", a, b);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::pair<int, int>> pairs(n);
    for (auto& [a, b] : pairs) {
        std::cin >> a >> b;
    }
    for (auto [a, b] : pairs) {
        if (a > b) {
            std::swap(a, b);
        }
    }
    for (const auto& [a, b] : pairs) {
        std::println("{} {}", a, b);
    }
}
```
### Tests
```in
3
3 1
2 2
-4 -9
```
```in
1
1000000 -1000000
```
```in
4
1 2
2 1
0 0
7 3
```
### Witness
```in
1
9 4
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n points into a `std::vector`, then reads k and appends k new points: the i-th new point, for i from 1 to k, is the first point moved i steps to the right, x + i with the same y. Print all n + k points in order.
Input: one line, n; then n lines, each two integers x and y; then one line, k.
Output: n + k lines, each a point's x and y separated by a space.
Limits: 1 ≤ n ≤ 100, 0 ≤ k ≤ 100, -1000 ≤ x, y ≤ 1000.
### Examples
```in
1
3 4
1
```
```out
3 4
4 4
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Point
{
    int x {0};
    int y {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Point> points;
    for (int i {0}; i < n; ++i) {
        Point p;
        std::cin >> p.x >> p.y;
        points.push_back(p);
    }
    int k {0};
    std::cin >> k;
    auto [x, y] = points[0];
    for (int i {1}; i <= k; ++i) {
        points.push_back(Point {x + i, y});
    }
    for (const auto& [px, py] : points) {
        std::println("{} {}", px, py);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Point
{
    int x {0};
    int y {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Point> points;
    for (int i {0}; i < n; ++i) {
        Point p;
        std::cin >> p.x >> p.y;
        points.push_back(p);
    }
    int k {0};
    std::cin >> k;
    auto& [x, y] = points[0];
    for (int i {1}; i <= k; ++i) {
        points.push_back(Point {x + i, y});
    }
    for (const auto& [px, py] : points) {
        std::println("{} {}", px, py);
    }
}
```
### Tests
```in
3
0 0
1 1
2 2
5
```
```in
1
-1000 1000
100
```
```in
2
5 6
7 8
3
```
### Witness
```in
1
3 4
2
```
