# 7.21 ES.27: keep an array on the stack in a std::array
Part: ES.27 Use std::array or stack_array for arrays on the stack
Clause: C++ Core Guidelines ES.27, [dcl.array], [array.overview], [conv.array]
After: 1.21, 1.22
Levels: c++11

## Scan
Rule: ES.27
Pattern: /^(?:(?:static|inline|const|constexpr|extern)\s+)*[\w:]+(?:\s+(?:const|constexpr))?\s+(\w+)\s*[={;][\s\S]*?^[ \t]+(?!(?:return|co_return|co_yield|throw|delete|case|else|goto|static)\b)(?:(?:const|unsigned|signed|long|short)\s+)*[\w:]+(?:<[^;\n]*>)?\s+\w+\s*\[\s*\1\s*\]/m
### Bad
```cpp
const int n = 7;
int m = 9;

void f()
{
    int a1[n];
    int a2[m];
}
```
### Good
```cpp
#include <array>
#include <vector>

using std::array;

template <typename T>
struct stack_array {
    explicit stack_array(int size) : data(size)
    {
    }
    std::vector<T> data;
};

const int n = 7;
int m = 9;

void f()
{
    array<int, n> a1;
    stack_array<int> a2(m);
}
```

## Example
```cpp
#include <array>
#include <print>

constexpr std::size_t count {4};

int main()
{
    //: Keep the array in a std::array; it knows its size.
    std::array<int, count> a {1, 2, 3, 4};
    //: Copy it whole, which a built-in array cannot do.
    std::array<int, count> b {a};
    b[0] = 9;
    std::println("{} {} {}", a[0], b[0], b.size());
}
```

## Verdict 1
```cpp
#include <cstdio>

int m = 9;

int main()
{
    int a2[m];
    a2[0] = 1;
    std::printf("%d\n", a2[0]);
}
```
Answer: c++11..c++23 ill-formed 7

## Verdict 2
```cpp
#include <array>
#include <cstdio>

int main()
{
    std::array<int, 3> a {1, 2, 3};
    std::array<int, 3> b {};
    b = a;
    b[0] = 9;
    std::printf("%d %d\n", a[0], b[0]);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and then n whole numbers and prints them in the other order on one line, separated by one space. Keep the numbers in an array on the stack that holds up to 10.
Input: one line, n, then one line of n numbers.
Output: one line, the numbers from last to first.
Limits: 1 ≤ n ≤ 10; each number is from -1000 to 1000.
### Examples
```in
3
4 5 6
```
```out
6 5 4
```
### Reference
```cpp
#include <array>
#include <iostream>
#include <print>

constexpr std::size_t most {10};

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::array<int, most> a {};
    for (std::size_t i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    std::print("{}", a[n - 1]);
    for (std::size_t i {n - 1}; i > 0; --i) {
        std::print(" {}", a[i - 1]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <array>
#include <iostream>
#include <print>

constexpr std::size_t most {10};

int main()
{
    std::size_t n {0};
    std::cin >> n;
    int a[most] {};
    for (std::size_t i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    std::print("{}", a[n - 1]);
    for (std::size_t i {n - 1}; i > 0; --i) {
        std::print(" {}", a[i - 1]);
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
10
1 2 3 4 5 6 7 8 9 1000
```
```in
2
-1 1
```
### Witness
```cpp
#include <array>

constexpr int n {7};

int f()
{
    std::array<int, n> a1 {};
    return a1[0];
}
```

## Alone 2
Form: run
Write a program that reads a line of digits and prints how many times each digit 0 to 9 appears, as 10 counts on one line separated by one space. Keep the counts in an array on the stack.
Input: one line of digits, with no spaces.
Output: one line, the count of 0, of 1, and so on to 9.
Limits: the line has 1 to 100 digits.
### Examples
```in
1121
```
```out
0 3 1 0 0 0 0 0 0 0
```
### Reference
```cpp
#include <array>
#include <iostream>
#include <print>
#include <string>

constexpr std::size_t digits {10};

int main()
{
    std::string line {};
    std::cin >> line;
    std::array<int, digits> seen {};
    for (char c : line) {
        ++seen[static_cast<std::size_t>(c - '0')];
    }
    std::print("{}", seen[0]);
    for (std::size_t d {1}; d < digits; ++d) {
        std::print(" {}", seen[d]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <array>
#include <iostream>
#include <print>
#include <string>

constexpr std::size_t digits {10};

int main()
{
    std::string line {};
    std::cin >> line;
    int seen[digits] {};
    for (char c : line) {
        ++seen[static_cast<std::size_t>(c - '0')];
    }
    std::print("{}", seen[0]);
    for (std::size_t d {1}; d < digits; ++d) {
        std::print(" {}", seen[d]);
    }
    std::println();
}
```
### Tests
```in
0
```
```in
0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
```
```in
99
```
### Witness
```cpp
#include <array>
#include <cstddef>

constexpr std::size_t m {9};

std::size_t f()
{
    std::array<int, m> a2 {};
    return a2.size();
}
```
