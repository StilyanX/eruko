# Kind 20: Check that every item passes a test
After: 5, 8, 14, 16, 17
## Example
Write a function `digits::all_digits(const std::string& text)` that returns `true` when each character of the text is a digit from `0` to `9`, else `false`.
An empty text gives `true`.
Limits: 0 ≤ length of the text ≤ 100.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace digits {

//: Write a function that gives back false at the first item that fails a test, else true.
bool all_digits(const std::string& text)
{
    //:: For each character, give back false when it is not a digit.
    for (const char character : text) {
        //@ Test whether a character is a digit with `std::isdigit`, and turn a test around with `!`.
        if (!std::isdigit(character)) {
            return false;
        }
    }
    //:: Give back true.
    return true;
}

}  // namespace digits
```
## Trace
Columns: line, character
Input 1:
```
cat
```
Input 2:
```
a b
```
```cpp
#include <iostream>
#include <print>
#include <string>
bool no_spaces(const std::string& line)
{
    for (const char character : line) {
        if (character == ' ') {
            return false;
        }
    }
    return true;
}
int main()
{
    std::string line {};
    std::getline(std::cin, line);
    std::println("{}", no_spaces(line));
}
```
