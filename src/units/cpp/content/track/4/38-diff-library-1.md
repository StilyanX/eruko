# 4.38 The headers new in C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.library] ¶1
Clause: [diff.cpp17.library], [headers], [bit.count], [numbers]
After: none
Levels: c++17

## Example
```cpp
#include <bit>
#include <print>

int ones(unsigned n)
{
    int count {0};
    while (n != 0) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

int main()
{
    unsigned n {13};
    //: Count the set bits with <bit>, a header C++20 adds.
    std::println("{}", std::popcount(n));
    //: Count them by hand where the code must build at c++17 too.
    std::println("{}", ones(n));
}
```

## Verdict 1
```cpp
#include <bit>
#include <cstdio>

int main()
{
    unsigned n {13};
    std::printf("%d\n", std::popcount(n));
}
```
Answer:
- c++17: ill-formed 7
- c++20..c++23: defined

## Verdict 2
```cpp
#include <cstdio>
#include <numbers>

int main()
{
    double pi {std::numbers::pi};
    std::printf("%.5f\n", pi);
}
```
Answer:
- c++17: ill-formed 6
- c++20..c++23: defined

## Alone 1
Form: flag
Write a program that reads an unsigned integer and prints how many of its bits are 1. The program is accepted at c++17, c++20 and c++23.
Input: one line, one unsigned integer n.
Output: one line, the number of bits of n that are 1.
Limits: 0 ≤ n ≤ 4000000000.
Expect:
- c++20..c++23: accept
- c++17..c++17: accept
### Reference
```cpp
#include <iostream>

int main()
{
    unsigned n {0};
    std::cin >> n;
    int count {0};
    while (n != 0) {
        count += n & 1;
        n >>= 1;
    }
    std::cout << count << '\n';
}
```
### Wrong
```cpp
#include <bit>
#include <iostream>

int main()
{
    unsigned n {0};
    std::cin >> n;
    int count {std::popcount(n)};
    std::cout << count << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that reads an unsigned integer n and prints the smallest power of two that is at least n, using the standard library's function for it. The program is rejected at c++17 and accepted at c++20 and c++23.
Input: one line, one unsigned integer n.
Output: one line, the power of two.
Limits: 1 ≤ n ≤ 1000000000.
Expect:
- c++20..c++23: accept
- c++17..c++17: reject
### Reference
```cpp
#include <bit>
#include <iostream>

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::cout << std::bit_ceil(n) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

int main()
{
    unsigned n {0};
    std::cin >> n;
    unsigned power {1};
    while (power < n) {
        power *= 2;
    }
    std::cout << power << '\n';
}
```
### Witness
```cpp
int probe {0};
```
