# Kind 16: Add to a total, then answer from the total
After: 6, 13, 14
## Example
Write a function `digit_sum::is_even_sum(const std::string& digits)` that returns whether the sum of the digits in the text is even.
Limits: 1 ≤ length of the text ≤ 100; the text holds only digits.
```cpp
#pragma once

#include <string>

namespace digit_sum {

//: Write a function that adds to a total, then gives back an answer from the total.
//@ Give the function a `const std::string&` parameter, which reads the caller's string without copying it.
bool is_even_sum(const std::string& digits)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add the value of each digit to the total.
    for (const char digit : digits) {
        //@ Turn a digit character into its value with `digit - '0'`.
        total += digit - '0';
    }
    //:: Give back whether 2 divides the total.
    return total % 2 == 0;
}

}  // namespace digit_sum
```
## Trace
Columns: n, total, i
Input 1:
```
2
```
Input 2:
```
4
```
```cpp
#include <iostream>
#include <print>

bool even_total(int n)
{
    int total {0};
    for (int i {1}; i <= n; ++i) {
        total += i;
    }
    return total % 2 == 0;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", even_total(n));
}
```
