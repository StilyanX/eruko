# 2.06 The moved-from state of a library type
Part: the moved-from state of a library type
Clause: [lib.types.movedfrom], [unique.ptr.single.ctor], [unique.ptr.single.asgn], [string.cons], [optional.ctor], [optional.assign]
After: 2.05
Levels: c++11

## Example
```cpp
#include <memory>
#include <print>
#include <string>
#include <utility>

int main()
{
    //: Move a unique_ptr, which leaves the source empty.
    std::unique_ptr<int> p {new int {3}};
    std::unique_ptr<int> q {std::move(p)};
    std::println("{}", p == nullptr);
    //: Move a string, then give the source a new value to read.
    std::string s {"hello"};
    std::string t {std::move(s)};
    s = "again";
    std::println("{} {}", t, s);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>
#include <utility>

int main()
{
    std::unique_ptr<int> p {new int {3}};
    std::unique_ptr<int> q;
    q = std::move(p);
    std::printf("%d\n", p == nullptr ? 1 : 0);
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <string>
#include <utility>

int main()
{
    std::string s {"hello"};
    std::string t {std::move(s)};
    std::printf("%d\n", s.empty() ? 1 : 0);
}
```
Answer: c++11..c++23 unspecified
```out
0
```
```out
1
```

## Alone 1
Form: run
Write a program that reads n places, each holding an integer or empty, keeps each place in a std::optional<int>, then makes m moves; a move `i j` puts what place i holds into place j and leaves place i empty. Print how many places hold an integer after all moves.
Input: line 1, n; line 2, n items, each an integer or `-` for an empty place; line 3, m; then m lines, each two place numbers i and j, counting from 0.
Output: one line, the number of places that hold an integer.
Limits: 1 ≤ n ≤ 100, 0 ≤ m ≤ 100, 0 ≤ i, j < n, i ≠ j, each integer between -1000 and 1000.
### Examples
```in
3
5 - 7
1
1 0
```
```out
1
```
### Reference
```cpp
#include <iostream>
#include <optional>
#include <print>
#include <string>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::optional<int>> places(n);
    for (auto& place : places) {
        std::string item;
        std::cin >> item;
        if (item != "-") {
            place = std::stoi(item);
        }
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        places[j] = std::move(places[i]);
        places[i].reset();
    }
    int held {0};
    for (const auto& place : places) {
        if (place.has_value()) {
            ++held;
        }
    }
    std::println("{}", held);
}
```
### Wrong
```cpp
#include <iostream>
#include <optional>
#include <print>
#include <string>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::optional<int>> places(n);
    for (auto& place : places) {
        std::string item;
        std::cin >> item;
        if (item != "-") {
            place = std::stoi(item);
        }
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        places[j] = std::move(places[i]);
    }
    int held {0};
    for (const auto& place : places) {
        if (place.has_value()) {
            ++held;
        }
    }
    std::println("{}", held);
}
```
### Tests
```in
3
1 2 3
2
0 1
1 2
```
```in
4
1 - - 4
3
0 1
1 2
2 3
```
```in
2
- 6
1
1 0
```
### Witness
```in
2
4 9
1
0 1
```

## Alone 2
Form: run
Write a program that reads n places, each holding an integer or empty, keeps each place in a std::unique_ptr<int>, then makes m moves; a move `i j` hands what place i holds to place j, which drops what it held, and leaves place i empty. Print every place after all moves.
Input: line 1, n; line 2, n items, each an integer or `-` for an empty place; line 3, m; then m lines, each two place numbers i and j, counting from 0.
Output: one line, the n places separated by spaces, each its integer or `-`.
Limits: 1 ≤ n ≤ 100, 0 ≤ m ≤ 100, 0 ≤ i, j < n, i ≠ j, each integer between -1000 and 1000.
### Examples
```in
3
4 - 6
1
0 1
```
```out
- 4 6
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<int>> places(n);
    for (auto& place : places) {
        std::string item;
        std::cin >> item;
        if (item != "-") {
            place.reset(new int {std::stoi(item)});
        }
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        places[j] = std::move(places[i]);
    }
    std::string line;
    for (const auto& place : places) {
        line += place ? std::to_string(*place) : "-";
        line += " ";
    }
    std::println("{}", line);
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<int>> places(n);
    for (auto& place : places) {
        std::string item;
        std::cin >> item;
        if (item != "-") {
            place.reset(new int {std::stoi(item)});
        }
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        std::swap(places[j], places[i]);
    }
    std::string line;
    for (const auto& place : places) {
        line += place ? std::to_string(*place) : "-";
        line += " ";
    }
    std::println("{}", line);
}
```
### Tests
```in
3
1 2 3
1
0 2
```
```in
4
1 2 3 4
3
0 1
2 3
1 0
```
```in
2
- 6
1
0 1
```
### Witness
```in
2
4 9
1
0 1
```
