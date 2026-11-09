# Kind 14: Give back the result of the first case that holds
After: 3, 4, 13
## Example
Write a function `ticket::is_free(int age)` that returns `true` when a ticket is free at that age, else `false`.
A ticket is free below age 5 and from age 65 up.
Limits: 0 ≤ age ≤ 120.
```cpp
#pragma once

namespace ticket {

//: Write a function that tests each case in order and gives back the result of the first that holds.
//@ Write `bool` as the type of an answer that is `true` or `false`.
bool is_free(int age)
{
    //:: Give back true for an age below 5.
    if (age < 5) {
        return true;
    }
    //:: Give back whether the age is 65 or more.
    //@ Give back the result of a test, `true` when it holds, else `false`.
    return age >= 65;
}

}  // namespace ticket
```
## Trace
Columns: number
Input 1:
```
42
```
Input 2:
```
7
```
```cpp
#include <iostream>
#include <print>

int digit_count(int number)
{
    if (number < 10) {
        return 1;
    }
    return 2;
}

int main()
{
    int number {0};
    std::cin >> number;
    std::println("{}", digit_count(number));
}
```
