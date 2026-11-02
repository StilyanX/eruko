# 1.22 Out-of-bounds access
Part: out-of-bounds access
Clause: [expr.sub], [expr.add], [dcl.array], [sequence.reqmts], [array.overview]
After: 1.21
Levels: c++23

## Example
```cpp
#include <array>
#include <iterator>
#include <print>
#include <stdexcept>

int main()
{
    //: Run the index from 0 up to one less than the size.
    int heights[4] {80, 75, 90, 60};
    for (std::size_t i {0}; i < std::size(heights); ++i) {
        std::println("{}", heights[i]);
    }
    //: Ask at() for an element; it checks the index first.
    std::array<int, 4> widths {3, 1, 4, 1};
    try {
        std::println("{}", widths.at(4));
    } catch (const std::out_of_range&) {
        std::println("no element 4");
    }
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int scores[5] {3, 1, 4, 1, 5};
    int total {0};
    for (int i {0}; i <= 5; ++i) {
        total += scores[i];
    }
    std::println("{}", total);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int scores[5] {3, 1, 4, 1, 5};
    int total {0};
    for (int* p {scores}; p != scores + 5; ++p) {
        total += *p;
    }
    std::println("{}", total);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n integers and a target, and prints the position of the first integer equal to the target, counting from 0, or -1 if there is none.
Input: first line n, then one line of n integers separated by spaces, then one line, the target.
Output: one line, the position or -1.
Limits: 1 ≤ n ≤ 1000; every integer and the target are between -1000000 and 1000000.
### Examples
```in
4
5 8 2 8
8
```
```out
1
```
```in
1
3
3
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (int i {0}; i < n; ++i) {
        std::cin >> values[i];
    }
    int target {0};
    std::cin >> target;
    int position {-1};
    for (int i {0}; i < n; ++i) {
        if (values[i] == target) {
            position = i;
            break;
        }
    }
    std::println("{}", position);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (int i {0}; i < n; ++i) {
        std::cin >> values[i];
    }
    int target {0};
    std::cin >> target;
    int position {-1};
    for (int i {0}; i <= n; ++i) {
        if (values[i] == target) {
            position = i;
            break;
        }
    }
    std::println("{}", position);
}
```
### Tests
```in
3
1 2 3
4
```
```in
5
7 7 7 7 7
7
```
```in
2
-1 -2
-2
```
```in
1
0
5
```
### Witness
```in
3
4 5 6
9
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n integers and then q positions, and for each position prints the integer there, counting from 0, or none if there is no integer there.
Input: first line n, then one line of n integers separated by spaces, then a line with q, then one line of q positions separated by spaces.
Output: q lines, each the integer at that position or none.
Limits: 1 ≤ n ≤ 1000; 1 ≤ q ≤ 1000; 0 ≤ each position ≤ n; every integer is between -1000000 and 1000000.
### Examples
```in
3
10 20 30
2
2 0
```
```out
30
10
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <stdexcept>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (int i {0}; i < n; ++i) {
        std::cin >> values[i];
    }
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        std::size_t position {0};
        std::cin >> position;
        try {
            std::println("{}", values.at(position));
        } catch (const std::out_of_range&) {
            std::println("none");
        }
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <stdexcept>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (int i {0}; i < n; ++i) {
        std::cin >> values[i];
    }
    int q {0};
    std::cin >> q;
    for (int i {0}; i < q; ++i) {
        std::size_t position {0};
        std::cin >> position;
        try {
            std::println("{}", values[position]);
        } catch (const std::out_of_range&) {
            std::println("none");
        }
    }
}
```
### Tests
```in
2
5 6
3
2 1 0
```
```in
1
-4
2
1 1
```
```in
4
1 2 3 4
4
3 4 0 4
```
### Witness
```in
3
10 20 30
1
3
```
