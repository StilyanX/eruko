# 1.15 Shifts out of range
Part: shifts out of range
Clause: [expr.shift], [conv.prom]
After: none
Levels: c++23

## Example
```cpp
#include <cstdint>
#include <print>

int main()
{
    //: Shift a 64-bit one, since 1 << 40 shifts a 32-bit int.
    int k {40};
    std::uint64_t bit {std::uint64_t {1} << k};
    //: Keep a count of 64 out of the shift; it needs one below 64.
    int n {64};
    std::uint64_t mask {~std::uint64_t {0}};
    if (n < 64) {
        mask = (std::uint64_t {1} << n) - 1;
    }
    //: Print both values.
    std::println("{} {}", bit, mask);
}
```

## Verdict 1
```cpp
#include <cstdint>
#include <print>

int main()
{
    volatile int k {36};
    std::uint64_t flag = 1 << k;
    std::println("{}", flag);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdint>
#include <print>

int main()
{
    std::uint8_t b {1};
    int k {12};
    std::println("{} {}", b << k, -5 >> 1);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n counts k and prints 2 to the power k for each, using a shift.
Input: first line n; second line, n integers k separated by spaces.
Output: n lines, one for each k in order.
Limits: 1 ≤ n ≤ 100; 0 ≤ k ≤ 62.
### Examples
```in
3
0 3 10
```
```out
1
8
1024
```
### Reference
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        std::println("{}", std::int64_t {1} << k);
    }
}
```
### Wrong
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        std::println("{}", std::int64_t {1 << k});
    }
}
```
### Tests
```in
1
62
```
```in
2
31 32
```
```in
3
5 40 1
```
### Witness
```in
1
33
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads k and prints the unsigned 64-bit number whose lowest k bits are 1 and whose other bits are 0.
Input: one line, an integer k.
Output: one line, the number.
Limits: 0 ≤ k ≤ 64.
### Examples
```in
4
```
```out
15
```
### Reference
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    std::uint64_t mask {~std::uint64_t {0}};
    if (k < 64) {
        mask = (std::uint64_t {1} << k) - 1;
    }
    std::println("{}", mask);
}
```
### Wrong
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    std::uint64_t mask {~std::uint64_t {0}};
    if (k <= 64) {
        mask = (std::uint64_t {1} << k) - 1;
    }
    std::println("{}", mask);
}
```
### Tests
```in
64
```
```in
0
```
```in
63
```
### Witness
```in
64
```
