# 7.24 ES.41: put parentheses around a bitwise operation mixed with others
Part: ES.41 If in doubt about operator precedence, parenthesize
Clause: C++ Core Guidelines ES.41, [expr.bit.and], [expr.xor], [expr.eq], [expr.add]
After: none
Levels: c++11

## Scan
Rule: ES.41
Pattern: /[\w)\]]\s*(?<![&|])[&|^](?![&|=])\s*(?:\((?:[^()]|\([^()]*\))*\)|(?!operator\b)[\w.]+(?:\([^()]*\))?)\s*(?:[!=]=|<=?(?![<=])|>=?(?![>=])|[-+](?![-+=>])|[*\/%](?!=))|[!=]=\s*(?:\((?:[^()]|\([^()]*\))*\)|[\w.]+(?:\([^()]*\))?)\s*(?<![&|])[&|^](?![&|=])\s*[\w(]|[\w\])]\s*(?:[-+*\/%&|^]|<<|>>)?=(?!=)\s*[*&]?[\w.]+(?:\[[^\]]*\]|->\w+|::\w+)*\s*(?:[-+*\/%&|^]|<<|>>)?=(?!=)|(?:(?<![\w\])>]\s*)|(?<=\b(?:return|co_return|co_yield|throw|case)\s*))\(\s*[*&]?[\w.]+(?:\[[^\]]*\]|->\w+|::\w+)*\s*(?:[-+*\/%&|^]|<<|>>)?=(?!=)(?:[^();]|\((?:[^()]|\([^()]*\))*\))*\)\s*(?:[!=<>]=|&&|\|\||[<>](?![<>=])|<<|>>|[-+*\/%&|^](?![=&|])|\?)|(?:[-+*\/%&|^!<>=?:]|\b(?:return|co_return|co_yield|throw))\s*\(\s*[*&]?[\w.]+(?:\[[^\]]*\]|->\w+|::\w+)*\s*(?:[-+*\/%&|^]|<<|>>)?=(?!=)/
### Bad
```cpp
void f()
{
    const unsigned int flag = 2;
    unsigned int a = flag;

    if (a & flag != 0) {
    }
}
```
### Good
```cpp
void f()
{
    const unsigned int flag = 2;
    unsigned int a = flag;

    if ((a & flag) != 0) {
    }
}

void g(int a, int max)
{
    if (a < 0 || a <= max) {
    }
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Keep a set of flags in the bits of one number.
    unsigned int flags {6};
    unsigned int mask {2};
    //: Put parentheses around the & before you compare its result.
    bool set {(flags & mask) == mask};
    std::println("{}", set);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    unsigned int flag {2};
    unsigned int a {flag};
    if (a & flag != 0) {
        std::puts("set");
    } else {
        std::puts("clear");
    }
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int r {6 ^ 2 + 1};
    std::printf("%d\n", r);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n, k and n numbers, and prints how many of the numbers have bit k set. Bit 0 is the lowest bit.
Input: the first line holds n and k; the second line holds n numbers separated by spaces.
Output: one line, one integer.
Limits: 1 ≤ n ≤ 100, 0 ≤ k ≤ 30, every number is from 0 to 2 147 483 647.
### Examples
```in
3 1
1 2 3
```
```out
2
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int count {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (((x >> k) & 1) == 1) {
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
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int count {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if ((x >> k) & 1 == 1) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Tests
```in
1 0
0
```
```in
1 30
2147483647
```
```in
5 0
7 8 9 10 11
```
```in
4 30
1073741824 1073741823 0 2147483647
```
### Witness
```cpp
bool test()
{
    const unsigned int flag = 2;
    unsigned int a = flag;
    return (a & flag) != 0;
}
```

## Alone 2
Form: run
Write a program that reads n and k and prints the number that the lowest k bits of n make.
Input: one line, n and k.
Output: one line, one integer.
Limits: 0 ≤ n ≤ 1 000 000 000, 0 ≤ k ≤ 30.
### Examples
```in
13 2
```
```out
1
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::println("{}", n & ((1 << k) - 1));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::println("{}", n & (1 << k) - 1);
}
```
### Tests
```in
0 0
```
```in
1000000000 30
```
```in
1000000000 0
```
```in
255 4
```
### Witness
```cpp
unsigned int low(unsigned int a, int k)
{
    return a & ((1u << k) - 1);
}
```
