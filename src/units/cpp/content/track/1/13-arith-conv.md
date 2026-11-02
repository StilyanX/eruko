# 1.13 The usual arithmetic conversions
Part: the usual arithmetic conversions
Clause: [expr.arith.conv], [conv.prom], [conv.integral], [expr.mul]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Keep a sum and a count as int.
    int sum {7};
    int count {2};
    //: Divide two ints: the result is an int, cut toward zero.
    std::println("{}", sum / count);
    //: Make one operand double, so the other turns double too.
    std::println("{}", static_cast<double>(sum) / count);
    //: Mix int and unsigned: the int turns unsigned first.
    int below {-1};
    unsigned one {1};
    std::println("{}", below + one == 0);
    std::println("{}", below < one);
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int balance {-5};
    unsigned limit {3};
    if (balance < limit) {
        std::println("below");
    } else {
        std::println("not below");
    }
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

int main()
{
    unsigned char a {200};
    unsigned char b {100};
    std::println("{} {}", a + b, 7 / 2 * 2.0);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads two integers a and b and prints a divided by b as a decimal number.
Input: one line, two integers a and b.
Output: one line, a / b without cutting off the fraction.
Limits: 1 ≤ |a|, |b| ≤ 1000000.
### Examples
```in
6 3
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
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", static_cast<double>(a) / b);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", static_cast<double>(a / b));
}
```
### Tests
```in
1 4
```
```in
-7 2
```
```in
999999 1000000
```
### Witness
```in
7 2
```

## Alone 2
Form: run
Write a program that reads n and then n integers and prints their mean, cut toward zero to an integer.
Input: first line n; second line, n integers separated by spaces.
Output: one line, the mean cut toward zero.
Limits: 1 ≤ n ≤ 1000; |x| ≤ 1000000.
### Examples
```in
3
1 2 6
```
```out
3
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
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int sum {0};
    for (int x : v) {
        sum += x;
    }
    std::println("{}", sum / static_cast<int>(v.size()));
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
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int sum {0};
    for (int x : v) {
        sum += x;
    }
    std::println("{}", sum / v.size());
}
```
### Tests
```in
2
-4 -6
```
```in
4
-1 -1 -1 1
```
```in
3
5 -20 1
```
### Witness
```in
3
-3 -3 -3
```
