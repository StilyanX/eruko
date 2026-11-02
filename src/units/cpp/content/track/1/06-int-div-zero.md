# 1.06 Integer division by zero
Part: integer division by zero
Clause: [expr.mul]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Keep a total and a count that may be zero.
    int total {17};
    int count {0};
    //: Divide only when the count is not zero.
    if (count != 0) {
        std::println("{}", total / count);
    } else {
        std::println("none");
    }
    //: Put the zero on the left; that division is fine.
    std::println("{}", count / total);
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int total {17};
    int count {0};
    std::println("{}", total % count);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int total {17};
    int count {0};
    std::println("{}", count / total);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads pairs a b and prints a divided by b, rounded toward zero, or none where b is 0.
Input: one line, n; then n lines, each two integers a and b.
Output: n lines, one result each.
Limits: 1 ≤ n ≤ 100, -1000000000 ≤ a, b ≤ 1000000000.
### Examples
```in
2
17 5
-9 2
```
```out
3
-4
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int a {0};
        int b {0};
        std::cin >> a >> b;
        if (b != 0) {
            std::println("{}", a / b);
        } else {
            std::println("none");
        }
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
    for (int i {0}; i < n; ++i) {
        int a {0};
        int b {0};
        std::cin >> a >> b;
        if (a != 0) {
            std::println("{}", a / b);
        } else {
            std::println("none");
        }
    }
}
```
### Tests
```in
1
5 0
```
```in
3
0 7
4 0
-8 -3
```
```in
2
1000000000 1
-1000000000 0
```
### Witness
```in
1
5 0
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads k and n numbers and prints how many of the numbers equal k times some integer.
Input: one line, k and n; one line, n integers.
Output: one line, the count.
Limits: 0 ≤ k ≤ 1000, 1 ≤ n ≤ 1000, each integer between -1000000 and 1000000.
### Examples
```in
3 5
9 4 -6 0 7
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int k {0};
    int n {0};
    std::cin >> k >> n;
    int count {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (k == 0 ? x == 0 : x % k == 0) {
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

int main()
{
    int k {0};
    int n {0};
    std::cin >> k >> n;
    int count {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (x % k == 0) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Tests
```in
0 4
0 5 0 -2
```
```in
0 1
7
```
```in
1 3
-1 0 1000000
```
### Witness
```in
0 3
0 1 0
```
