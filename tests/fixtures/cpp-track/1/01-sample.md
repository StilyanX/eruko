# 1.01 Signed overflow in an index product
Part: signed overflow in an index product
Clause: [expr.pre], [expr.mul], [basic.fundamental]
After: none
Levels: c++11

## Example
```cpp
#include <cstdint>
#include <print>

int main()
{
    //: Keep the sizes of a large 2-D field as int.
    int rows {50000};
    int columns {50000};
    //: Widen one factor first, so the product is 64-bit.
    std::int64_t cells {std::int64_t {rows} * columns};
    //: Print the number of cells.
    std::println("{}", cells);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    volatile int rows {50000};
    int columns {50000};
    long long cells = rows * columns;
    std::printf("%lld\n", cells);
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
```cpp
constexpr int cells(int rows, int columns)
{
    return rows * columns;
}

constexpr int n {cells(50000, 50000)};

int main()
{
}
```
Answer: c++14..c++23 undefined constant
Levels: c++14

## Count
Columns: multiplications
```cpp
#include <print>

int product(int a, int b)
{
    std::println("@{} multiplications", __LINE__);
    return a * b;
}

int main()
{
    int a {product(3, 4)};
    int b {product(a, 2)};
    std::println("{}", b);
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads rows and columns and prints rows times columns.
Input: one line, two integers rows and columns.
Output: one line, their product.
Limits: 1 ≤ rows, columns ≤ 100000.
### Examples
```in
3 4
```
```out
12
```
### Reference
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int rows {0};
    int columns {0};
    std::cin >> rows >> columns;
    std::println("{}", std::int64_t {rows} * columns);
}
```
### Wrong
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int rows {0};
    int columns {0};
    std::cin >> rows >> columns;
    std::println("{}", std::int64_t {rows * columns});
}
```
### Tests
```in
100000 100000
```
### Witness
```in
65536 65536
```
