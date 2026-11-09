# Kind 1: Return whether a test holds
After: none
## Example
Write a function `even::is_even(int n)` that returns true when n is even.
Limits: none.
```cpp
#pragma once

namespace even {

//: Write a function that returns whether the test holds.
bool is_even(int n)
{
    return n % 2 == 0;
}

}  // namespace even
```
## Trace
Columns: n, even
Input 1:
```
4
```
Input 2:
```
7
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    bool even {n % 2 == 0};
    std::println("{}", even);
}
```
## Start
Columns: n, odd
Input:
```
5
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    bool odd {n % 2 != 0};
    std::println("{}", odd);
}
```
