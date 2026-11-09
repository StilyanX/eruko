# 5.13 Promising a fact to the compiler with `[[assume]]`
Part: `[[assume]]`
Clause: [dcl.attr.assume]
After: none
Levels: c++23

## Example
```cpp
#include <iostream>
#include <print>

int main()
{
    //: Read a count that the input never makes negative.
    int n {0};
    std::cin >> n;
    //: Promise the compiler that the count is not negative.
    [[assume(n >= 0)]];
    //: Add one inside a promise; it is never run, so n keeps its value.
    [[assume(++n > 0)]];
    //: Divide the count, and let the compiler drop the steps for a negative one.
    std::println("{} {}", n / 8, n);
}
```

## Verdict 1
```cpp
#include <print>

int half(int x)
{
    [[assume(x >= 0)]];
    return x / 2;
}

int main()
{
    volatile int v {-6};
    std::println("{}", half(v));
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int n {5};
    [[assume(++n == 6)]];
    [[assume(n == 5)]];
    std::println("{}", n);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n and then n numbers and prints their sum. A function `add(int sum, int x)` returns sum + x; it first states in assumptions the range that the limits give x.
Input: one line, n; then one line, n numbers separated by spaces.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 100; each number is between 0 and 100.
### Examples
```in
3
4 5 6
```
```out
15
```
### Reference
```cpp
#include <iostream>
#include <print>

int add(int sum, int x)
{
    [[assume(x >= 0)]];
    [[assume(x <= 100)]];
    return sum + x;
}

int main()
{
    int n {0};
    std::cin >> n;
    int sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum = add(sum, x);
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int add(int sum, int x)
{
    [[assume(x > 0)]];
    [[assume(x <= 100)]];
    return sum + x;
}

int main()
{
    int n {0};
    std::cin >> n;
    int sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum = add(sum, x);
    }
    std::println("{}", sum);
}
```
### Tests
```in
1
0
```
```in
1
100
```
```in
3
100 0 100
```
```in
5
1 2 3 4 5
```
### Witness
```in
2
0 7
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n and prints what a function `rest(int n)` returns: it takes 10 away from n while n is at least 10. Where `rest` returns, it states in an assumption that the value is below 10.
Input: one line, n.
Output: one line, what is left of n.
Limits: 0 ≤ n ≤ 1000000.
### Examples
```in
7
```
```out
7
```
### Reference
```cpp
#include <iostream>
#include <print>

int rest(int n)
{
    while (n >= 10) {
        n -= 10;
    }
    [[assume(n < 10)]];
    return n;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", rest(n));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int rest(int n)
{
    [[assume(n < 10)]];
    while (n >= 10) {
        n -= 10;
    }
    return n;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", rest(n));
}
```
### Tests
```in
0
```
```in
9
```
```in
10
```
```in
1000000
```
```in
123
```
### Witness
```in
25
```
