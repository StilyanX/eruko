# 7.20 ES.24: hold what new or malloc returns in a unique_ptr
Part: ES.24 Use a unique_ptr<T> to hold pointers
Clause: C++ Core Guidelines ES.24, [unique.ptr], [basic.stc.dynamic], [except.handle]
After: 1.23, 1.25
Levels: c++14

## Scan
Rule: ES.24
Pattern: /(?:\*\s*\w+\s*[({]|\bauto\s+\w+\s*[({]|[^=!<>]=)\s*(?:new\b|(?:\(\s*[\w:]+\s*\*+\s*\)\s*|static_cast\s*<[^;>]*\*\s*>\s*\(\s*)?(?:std::)?(?:malloc|calloc|realloc)\s*\()/
### Bad
```cpp
#include <memory>
#include <vector>

using std::make_unique;
using std::vector;

void use(bool leak)
{
    auto p1 = make_unique<int>(7);
    int* p2 = new int{7};
    if (leak) return;
    vector<int> v(7);
    v.at(7) = 0;
    delete p2;
}
```
### Good
```cpp
#include <memory>

using std::make_unique;

void use(bool leak)
{
    auto p1 = make_unique<int>(7);
}
```

## Example
```cpp
#include <memory>
#include <print>

int twice(int x)
{
    //: Hold the new int in a unique_ptr from the start.
    auto p {std::make_unique<int>(x)};
    //: Leave early; the unique_ptr still frees the int.
    if (*p < 0) {
        return 0;
    }
    return *p * 2;
}

int main()
{
    std::println("{} {}", twice(4), twice(-1));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <stdexcept>

struct T {
    ~T()
    {
        std::printf("free\n");
    }
};

void use()
{
    T* p2 = new T {};
    throw std::runtime_error {"stop"};
    delete p2;
}

int main()
{
    try {
        use();
    } catch (const std::runtime_error&) {
        std::printf("caught\n");
    }
}
```
Answer: c++14..c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <memory>

int main()
{
    auto p1 = std::make_unique<int>(7);
    int* raw {p1.get()};
    p1.reset();
    std::printf("%d\n", *raw);
}
```
Answer: c++14..c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads whole numbers until the input ends. For each, print twice the number, or -1 when the number is negative. Check each number in a function that first keeps it in an int made on the heap.
Input: numbers separated by spaces or line breaks.
Output: one line per number.
Limits: 1 to 100 numbers, each from -1000 to 1000.
### Examples
```in
3 -2
```
```out
6
-1
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>

int checked(int x)
{
    auto p {std::make_unique<int>(x)};
    if (*p < 0) {
        return -1;
    }
    return *p * 2;
}

int main()
{
    for (int x {0}; std::cin >> x;) {
        std::println("{}", checked(x));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>

int checked(int x)
{
    int* p {new int {x}};
    if (*p < 0) {
        return -1;
    }
    return *p * 2;
}

int main()
{
    for (int x {0}; std::cin >> x;) {
        std::println("{}", checked(x));
    }
}
```
### Tests
```in
-1000
```
```in
1000
```
```in
0 -1 1
```
```in
5
-5
7
```
### Witness
```cpp
#include <memory>
#include <vector>

void use(bool leak)
{
    auto p1 {std::make_unique<int>(7)};
    auto p2 {std::make_unique<int>(7)};
    if (leak) {
        return;
    }
    std::vector<int> v(7);
    v.at(7) = 0;
}
```

## Alone 2
Form: run
Write a program that reads n and then n whole numbers and prints them in the other order on one line, separated by one space. First store them in a buffer of n ints made on the heap.
Input: one line, n, then one line of n numbers.
Output: one line, the numbers from last to first.
Limits: 1 ≤ n ≤ 1000; each number is from -1000 to 1000.
### Examples
```in
3
7 8 9
```
```out
9 8 7
```
### Reference
```cpp
#include <cstdlib>
#include <iostream>
#include <memory>
#include <print>

int main()
{
    std::size_t n {0};
    std::cin >> n;
    auto buf {std::make_unique<int[]>(n)};
    for (std::size_t i {0}; i < n; ++i) {
        std::cin >> buf[i];
    }
    std::print("{}", buf[n - 1]);
    for (std::size_t i {n - 1}; i > 0; --i) {
        std::print(" {}", buf[i - 1]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <cstdlib>
#include <iostream>
#include <memory>
#include <print>

int main()
{
    std::size_t n {0};
    std::cin >> n;
    auto buf {static_cast<int*>(std::malloc(n * sizeof(int)))};
    for (std::size_t i {0}; i < n; ++i) {
        std::cin >> buf[i];
    }
    std::print("{}", buf[n - 1]);
    for (std::size_t i {n - 1}; i > 0; --i) {
        std::print(" {}", buf[i - 1]);
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
1000 -1000 0 3
```
```in
2
5 6
```
### Witness
```cpp
#include <cstddef>
#include <memory>

int first(std::size_t n)
{
    auto buf {std::make_unique<int[]>(n)};
    buf[0] = 1;
    return buf[0];
}
```
