# Kind 44: Turn digits into a number and back
After: 6, 10, 12, 22, 31
## Example
Write a function `plus_one::plus_one(const std::vector<int>& digits)` that returns the digits of the number one larger than the number the digits make.
The digits come first digit first, each from 0 to 9; return the new digits first digit first too, with no leading zeros.
Leading zeros in the input count for nothing, and an empty list makes the number 0.
Limits: 0 ≤ number of digits ≤ 9.
```cpp
#pragma once

#include <vector>

namespace plus_one {

//: Write a function that adds up a sequence and gives back the total.
int to_number(const std::vector<int>& digits)
{
    //:: Start the total at zero.
    int total {0};
    //:: For each digit, times the total by 10 and add the digit.
    for (const int digit : digits) {
        total = total * 10 + digit;
    }
    //:: Give back the total.
    return total;
}

//: Write a function that repeats a step until a condition holds and gives back the result.
std::vector<int> to_digits(int number)
{
    //:: Start the result as an empty list.
    std::vector<int> result {};
    //:: While the number is above 0, put its last digit at the front of the result, then drop it.
    while (number > 0) {
        //@ Put a value at the front of a list with `insert` and `result.begin()`, the list's start.
        result.insert(result.begin(), number % 10);
        number /= 10;
    }
    //:: Give back the result.
    return result;
}

//: Write a function that calls the functions above and gives back the answer.
std::vector<int> plus_one(const std::vector<int>& digits)
{
    //:: Give back the digits of the number plus one.
    return to_digits(to_number(digits) + 1);
}

}  // namespace plus_one
```
## Trace
Columns: n, total, index, digit
Input 1:
```
2
1 1
```
Input 2:
```
4
1 0 1 1
```
```cpp
#include <iostream>
#include <print>
int read_binary(int n)
{
    int total {0};
    for (int index {0}; index < n; ++index) {
        int digit {0};
        std::cin >> digit;
        total = total * 2 + digit;
    }
    return total;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", read_binary(n));
}
```
