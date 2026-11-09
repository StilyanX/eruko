# Kind 19: Build a string one piece at a time
After: 5, 12, 13
## Example
Write a function `plural::text(int number, const std::string& word)` that returns the number in digits, a space and the word, with `s` added when the number is not 1, as a `std::string`.
Limits: 0 ≤ number ≤ 1000; the word is 1 to 20 small letters.
```cpp
#pragma once

#include <string>

namespace plural {

//: Write a function that builds a new string one piece at a time and gives it back.
std::string text(int number, const std::string& word)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add the number, a space and the word.
    //@ Turn a number into a string of its digits with `std::to_string`.
    result += std::to_string(number) + " " + word;
    //:: Add `s` when the number is not 1.
    if (number != 1) {
        result += "s";
    }
    //:: Give back the result.
    return result;
}

}  // namespace plural
```
## Trace
Columns: minutes, result
Input 1:
```
135
```
Input 2:
```
62
```
```cpp
#include <iostream>
#include <print>
#include <string>

std::string clock_text(int minutes) noexcept
{
    std::string result {""};
    result += std::to_string(minutes / 60);
    result += ":" + std::to_string(minutes % 60);
    return result;
}

int main()
{
    int minutes {0};
    std::cin >> minutes;
    std::println("{}", clock_text(minutes));
}
```
