# 1.01 List initialisation
Part: list initialisation
Clause: [dcl.init.list], [over.match.list], [vector.cons], [sequence.reqmts]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <vector>

int main()
{
    //: Give each variable its first value in braces.
    int count {5};
    double price {2.5};
    //: List the elements of a vector in braces.
    std::vector<int> pair {3, 4};
    //: Use parentheses to ask for 3 copies of 4.
    std::vector<int> copies(3, 4);
    //: Print the values and the sizes of the two vectors.
    std::println("{} {}", count, price);
    std::println("{} {}", pair.size(), copies.size());
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int n {3, 4};
    std::println("{}", n);
}
```
Answer: c++23 ill-formed 5

## Verdict 2
```cpp
#include <print>
#include <vector>

int main()
{
    std::vector<int> values {3};
    std::println("{}", values[2]);
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads n and k and prints n copies of k.
Input: one line, two integers n and k.
Output: one line, n copies of k separated by spaces.
Limits: 1 ≤ n ≤ 100, 0 ≤ k ≤ 1000.
### Examples
```in
2 2
```
```out
2 2
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<int> row(n, k);
    for (int x : row) {
        std::print("{} ", x);
    }
    std::println();
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
    int k {0};
    std::cin >> n >> k;
    std::vector<int> row {n, k};
    for (int x : row) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
3 7
```
```in
1 0
```
```in
5 5
```
```in
100 1
```
### Witness
```in
3 7
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n numbers and prints them in reverse order.
Input: one line, n; one line, n integers.
Output: one line, the n integers from last to first, separated by spaces.
Limits: 1 ≤ n ≤ 1000, each integer between -1000 and 1000.
### Examples
```in
1
9
```
```out
9
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
        int x {0};
        std::cin >> x;
        values[i] = x;
    }
    for (int i {n - 1}; i >= 0; --i) {
        std::print("{} ", values[i]);
    }
    std::println();
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
    std::vector<int> values {n};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        values[i] = x;
    }
    for (int i {n - 1}; i >= 0; --i) {
        std::print("{} ", values[i]);
    }
    std::println();
}
```
### Tests
```in
3
1 2 3
```
```in
2
-5 5
```
```in
4
0 0 0 7
```
### Witness
```in
3
1 2 3
```
