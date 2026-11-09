# Kind 73: Split a number into groups and name each group
After: 4, 10, 12, 13, 19
## Example
Write a function `spaced::write(int number)` that returns the number in digits as a `std::string`, with a space before each group of 3 digits counted from the right.
1234567 gives `1 234 567`, 1000 gives `1 000` and 999 gives `999`.
Limits: 0 ≤ number ≤ 2 000 000 000.
```cpp
#pragma once

#include <string>

namespace spaced {

//: Write a function that tests each case in order and gives back the result of the first that holds.
std::string padded(int group)
{
    //:: Give back the group with 2 zeros in front below 10, 1 zero below 100, else as it is.
    if (group < 10) {
        return "00" + std::to_string(group);
    } else if (group < 100) {
        return "0" + std::to_string(group);
    } else {
        return std::to_string(group);
    }
}

//: Write a function that tests each case in order and gives back the result of the first that holds.
std::string last_group(int number)
{
    //:: Give back the whole number below 1000, else its last 3 digits padded.
    if (number < 1000) {
        return std::to_string(number);
    } else {
        return padded(number % 1000);
    }
}

//: Write a function that repeats a step until a condition holds and gives back the result.
std::string write(int number)
{
    //:: Start the result with the last group.
    std::string result {last_group(number)};
    //:: While groups are left, drop the last group, then put the new last group and a space at the front.
    while (number >= 1000) {
        number /= 1000;
        result = last_group(number) + " " + result;
    }
    //:: Give back the result.
    return result;
}

}  // namespace spaced
```
## Trace
Columns: number, result
Input 1:
```
12345
```
Input 2:
```
7050
```
```cpp
#include <iostream>
#include <print>
#include <string>
std::string grouped(int number) noexcept
{
    std::string result {std::to_string(number % 100)};
    while (number >= 100) {
        number /= 100;
        result = std::to_string(number % 100) + " " + result;
    }
    return result;
}
int main()
{
    int number {0};
    std::cin >> number;
    std::println("{}", grouped(number));
}
```
