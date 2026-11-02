# 1.07 Evaluation order
Part: evaluation order
Clause: [intro.execution], [expr.call], [expr.ass], [expr.post.incr], [dcl.init.list]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int calls {0};

int next()
{
    ++calls;
    return calls;
}

int main()
{
    //: Call next() in two statements when the order matters.
    int first {next()};
    int second {next()};
    //: Increase count in its own statement, then use it.
    int count {5};
    ++count;
    int total {count * 3 + count * 5};
    //: Assign to k from k++; the right side runs first.
    int k {3};
    k = k++ + 5;
    //: Print the results.
    std::println("{} {} {} {}", first, second, total, k);
}
```

## Verdict 1
```cpp
#include <print>

int calls {0};

int next()
{
    ++calls;
    return calls;
}

int main()
{
    std::println("{} {}", next(), next());
}
```
Answer: c++23 unspecified
```out
1 2
```
```out
2 1
```

## Verdict 2
```cpp
#include <print>

int main()
{
    int k {3};
    k = k++ * 2;
    std::println("{}", k);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads a and b and prints a to the power b.
Input: one line, two integers a and b.
Output: one line, a to the power b.
Limits: 1 ≤ a ≤ 9, 0 ≤ b ≤ 9.
### Examples
```in
2 4
```
```out
16
```
### Reference
```cpp
#include <iostream>
#include <print>

int next()
{
    int x {0};
    std::cin >> x;
    return x;
}

long long power(int base, int exponent)
{
    long long result {1};
    for (int i {0}; i < exponent; ++i) {
        result *= base;
    }
    return result;
}

int main()
{
    int base {next()};
    int exponent {next()};
    std::println("{}", power(base, exponent));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int next()
{
    int x {0};
    std::cin >> x;
    return x;
}

long long power(int base, int exponent)
{
    long long result {1};
    for (int i {0}; i < exponent; ++i) {
        result *= base;
    }
    return result;
}

int main()
{
    std::println("{}", power(next(), next()));
}
```
### Tests
```in
3 2
```
```in
5 0
```
```in
1 9
```
```in
9 9
```
### Witness
```in
2 3
```

## Alone 2
Form: run
Write a program that reads a and b and prints the integers from a to b.
Input: one line, two integers a and b.
Output: one line, the integers a, a + 1, …, b separated by spaces.
Limits: 1 ≤ a ≤ b ≤ 100.
### Examples
```in
3 3
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <utility>

int next()
{
    int x {0};
    std::cin >> x;
    return x;
}

int main()
{
    std::pair<int, int> range {next(), next()};
    for (int i {range.first}; i <= range.second; ++i) {
        std::print("{} ", i);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <utility>

int next()
{
    int x {0};
    std::cin >> x;
    return x;
}

int main()
{
    std::pair<int, int> range(next(), next());
    for (int i {range.first}; i <= range.second; ++i) {
        std::print("{} ", i);
    }
    std::println();
}
```
### Tests
```in
2 5
```
```in
1 100
```
```in
7 8
```
### Witness
```in
1 3
```
