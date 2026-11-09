# 4.17 Powers of two and bit counts of an index
Part: the functions of `<bit>` on an index
Clause: [bit.pow.two], [bit.count], [expr.const]
After: none
Levels: c++20

## Example
```cpp
#include <bit>
#include <print>

int main()
{
    //: Keep the side of a lattice as an unsigned number.
    unsigned side {12};
    //: Test it for a power of two, and pad it up to one.
    bool exact {std::has_single_bit(side)};
    unsigned padded {std::bit_ceil(side)};
    //: Take the base-2 log of the padded side from its width.
    int log2 {std::bit_width(padded) - 1};
    std::println("{} {} {}", exact, padded, log2);
    //: Find the lowest set bit of an index and the parity of its bits.
    unsigned index {40};
    int low {std::countr_zero(index)};
    int parity {std::popcount(index) % 2};
    std::println("{} {}", low, parity);
}
```

## Verdict 1
```cpp
#include <bit>
#include <cstdint>

constexpr std::uint32_t sites {3000000000u};
constexpr std::uint32_t padded {std::bit_ceil(sites)};

int main()
{
}
```
Answer: c++20..c++23 undefined constant

## Verdict 2
```cpp
#include <bit>

int main()
{
    int n {8};
    int bits {std::bit_width(n)};
    return bits - 4;
}
```
Answer: c++20..c++23 ill-formed 6

## Alone 1
Form: run
Write a program that reads n, the number of sites of a lattice, and prints the smallest power of two that is at least n and its base-2 log.
Input: one line, n.
Output: one line, the power of two and its log, separated by a space.
Limits: 1 ≤ n ≤ 2147483648.
### Examples
```in
5
```
```out
8 3
```
```in
100
```
```out
128 7
```
### Reference
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    std::uint32_t n {0};
    std::cin >> n;
    std::uint32_t p {std::bit_ceil(n)};
    std::println("{} {}", p, std::countr_zero(p));
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    std::uint32_t n {0};
    std::cin >> n;
    std::uint32_t p {1u << std::bit_width(n)};
    std::println("{} {}", p, std::countr_zero(p));
}
```
### Tests
```in
1
```
```in
1024
```
```in
1025
```
```in
2147483648
```
### Witness
```in
8
```

## Alone 2
Form: run
Write a program that reads q indices and prints, for each index i, the largest power of two that divides i.
Input: line 1, q; line 2, q indices separated by spaces.
Output: q lines, one power of two each.
Limits: 1 ≤ q ≤ 1000, 1 ≤ i ≤ 1000000000.
### Examples
```in
4
1 2 4 8
```
```out
1
2
4
8
```
### Reference
```cpp
#include <bit>
#include <iostream>
#include <print>

int main()
{
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        unsigned i {0};
        std::cin >> i;
        std::println("{}", 1u << std::countr_zero(i));
    }
}
```
### Wrong
```cpp
#include <bit>
#include <iostream>
#include <print>

int main()
{
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        unsigned i {0};
        std::cin >> i;
        std::println("{}", std::bit_floor(i));
    }
}
```
### Tests
```in
3
6 12 7
```
```in
1
1000000000
```
```in
2
536870912 3
```
### Witness
```in
1
6
```
