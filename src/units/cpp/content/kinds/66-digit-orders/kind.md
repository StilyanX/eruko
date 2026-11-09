# Kind 66: Try each order of digits until one fits
After: 10, 12, 25
## Example
Write a function `digit_orders::divisible(std::string digits, int divisor)` that returns, as a `std::optional<std::string>`, the smallest number written with the same digits in some order that divisor divides.
A number may start with 0, and it keeps every digit: the answer for `"10"` and 5 is `"10"`, for `"01"` and 2 is `"10"`.
When no order works it returns `std::nullopt`.
Limits: 1 ≤ length of digits ≤ 8; each character of digits is a digit; 1 ≤ divisor ≤ 1000.
```cpp
#pragma once

#include <algorithm>
#include <optional>
#include <string>

namespace digit_orders {

//: Write a function that tries each order until one passes every test.
//@ Include `optional`, and write `std::optional<std::string>` as the type of an answer that holds a string or nothing.
std::optional<std::string> divisible(std::string digits,
                                     int divisor)
{
    //:: Sort the digits, so the first order is the smallest.
    std::ranges::sort(digits);
    //:: Give back the first order whose number the divisor divides.
    //@ Run the lines in `{ }` after `do` once, then again while the test after `while` holds.
    do {
        //@ Turn a string of digits into its number with `std::stoll`.
        if (std::stoll(digits) % divisor == 0) {
            return digits;
        }
    //@ Change a list to its next order with `std::ranges::next_permutation`, whose `found` is false after the last.
    } while (std::ranges::next_permutation(digits).found);
    //:: Give back no answer when no order fits.
    //@ Give back no answer with `std::nullopt`.
    return std::nullopt;
}

}  // namespace digit_orders
```
## Trace
Columns: digits
Input 1:
```
302
```
Input 2:
```
1004
```
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string digits {""};
    std::cin >> digits;
    std::ranges::sort(digits);
    while (digits.front() == '0') {
        std::ranges::next_permutation(digits);
    }
    std::println("{}", digits);
}
```
