# Kind 37: Add up values from a fixed table
After: 6, 12, 13, 16, 31
## Example
Write a function `segments::count(const std::string& digits)` that returns how many segments a seven-segment display lights to show the digits.
The digits 0 to 9 light 6, 2, 5, 5, 4, 5, 6, 3, 7 and 6 segments.
The empty text gives 0.
Limits: 0 ≤ length of the text ≤ 100; the text holds only digits.
```cpp
#pragma once

//@ Include `array`, the part of the library that holds `std::array`, a list whose length is fixed.
#include <array>
#include <string>

namespace segments {

//: Make a table of fixed values.
//@ Make a list of fixed values with `std::array<int, 10>`, the type of each item, then how many there are.
const std::array<int, 10> lit {6, 2, 5, 5, 4, 5, 6, 3, 7, 6};

//: Write a function that adds up a sequence and gives back the total.
int count(const std::string& digits)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add the number of segments of each digit from the table.
    for (const char digit : digits) {
        //@ Read the item at an index with `.at`, which throws for an index outside the list.
        total += lit.at(digit - '0');
    }
    //:: Give back the total.
    return total;
}

}  // namespace segments
```
## Trace
Columns: n, total, index
Input 1:
```
3
```
Input 2:
```
4
```
```cpp
#include <array>
#include <iostream>
#include <print>
const std::array<int, 4> prices {2, 5, 3, 8};
int cost(int n)
{
    int total {0};
    for (int index {0}; index < n; ++index) {
        total += prices.at(index);
    }
    return total;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", cost(n));
}
```
