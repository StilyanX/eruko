# 4.08 A view that dangles
Part: a view that dangles
Clause: [range.dangling], [range.range], [range.ref.view], [range.filter.view], [basic.life], [class.temporary], [vector.modifiers]
After: none
Levels: c++20

## Example
```cpp
#include <algorithm>
#include <print>
#include <ranges>
#include <vector>

std::vector<int> make()
{
    return {3, 1, 4, 1, 5};
}

int main()
{
    //: Keep the vector in a variable that outlives the view.
    std::vector<int> v {make()};
    auto first {v | std::views::take(3)};
    for (int x : first) {
        std::println("{}", x);
    }
    //: Search the named vector; the iterator points into it.
    auto it {std::ranges::find(v, 4)};
    std::println("{}", *it);
    //: Search a temporary; the result is dangling, not an iterator.
    auto gone {std::ranges::find(make(), 4)};
    static_assert(std::same_as<decltype(gone),
                               std::ranges::dangling>);
}
```

## Verdict 1
```cpp
#include <algorithm>
#include <vector>

std::vector<int> make()
{
    return {3, 1, 4};
}

int main()
{
    auto it {std::ranges::find(make(), 1)};
    return *it == 1 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 12

## Verdict 2
```cpp
#include <cstdio>
#include <ranges>
#include <vector>

auto first_two(const std::vector<int>& v)
{
    return v | std::views::take(2);
}

int main()
{
    auto t {first_two(std::vector<int> {7, 8, 9})};
    for (int x : t) {
        std::printf("%d\n", x);
    }
}
```
Answer: c++20..c++23 undefined sanitizer

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n integers, then reads m more integers and adds them after the first n, then prints the first n integers, then all n + m.
Input: first line n, then a line of n integers, then a line with m, then a line of m integers.
Output: two lines: the first n integers, then all n + m integers, in the order read, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 0 ≤ m ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
4
2 3 4 5
0

```
```out
2 3 4 5
2 3 4 5
```
```in
3
6 7 8
1
10
```
```out
6 7 8
6 7 8 10
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
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    auto first {v | std::views::take(n)};
    int m {0};
    std::cin >> m;
    for (int i {0}; i < m; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    for (int x : first) {
        std::print("{} ", x);
    }
    std::println();
    for (int x : v) {
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
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    auto first {std::views::counted(v.begin(), n)};
    int m {0};
    std::cin >> m;
    for (int i {0}; i < m; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    for (int x : first) {
        std::print("{} ", x);
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
4
3
1 2 3
```
```in
2
0 9
5
-2 -1 6 8 7
```
```in
5
2 2 2 2 2
4
2 2 2 2
```
```in
1
-1000
0

```
### Witness
```in
1
2
1
4
```

## Alone 2
Form: probes
Write a function template `find_max(r)` that returns an iterator to the largest element of a forward range `r`, the first such element where several are equal. Called on a temporary range that owns its elements, it returns `std::ranges::dangling` in place of the iterator.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
std::vector<int> v {3, 9, 2};
int a {*find_max(v)};
auto b {find_max(std::string_view {"abc"})};
char c {*b};
auto d {find_max(std::vector<int> {1, 2})};
int e {*d};
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
#include <algorithm>
#include <ranges>
#include <string_view>
#include <vector>

template <std::ranges::forward_range R>
std::ranges::borrowed_iterator_t<R> find_max(R&& r)
{
    return std::ranges::max_element(r);
}

int main()
{
}
```
### Wrong
```cpp
#include <algorithm>
#include <ranges>
#include <string_view>
#include <vector>

template <std::ranges::forward_range R>
std::ranges::iterator_t<R> find_max(R&& r)
{
    return std::ranges::max_element(r);
}

int main()
{
}
```
### Witness
```cpp
int w {*find_max(std::vector<int> {5})};
```
