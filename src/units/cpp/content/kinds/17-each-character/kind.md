# Kind 17: Build a new string from each character of a text
After: 12, 13
## Example
Write a function `upper::shout(const std::string& text)` that returns the text with each small letter made a capital.
Every other character stays as it is.
Limits: 0 ≤ length of the text ≤ 1000; each character is ASCII.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace upper {

//: Write a function that builds a new string from each character of the text.
std::string shout(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each character, add it in capitals.
    for (const char character : text) {
        //@ Make a letter a capital with `std::toupper`, and turn its `int` answer back into a `char` with `static_cast<char>`.
        result += static_cast<char>(std::toupper(character));
    }
    //:: Give back the result.
    return result;
}

}  // namespace upper
```
## Trace
Columns: text, character, result
Input 1:
```
abc
```
Input 2:
```
no
```
```cpp
#include <iostream>
#include <print>
#include <string>
std::string doubled(const std::string& text) noexcept
{
    std::string result {""};
    for (const char character : text) {
        result = result + character + character;
    }
    return result;
}
int main()
{
    std::string line {""};
    std::getline(std::cin, line);
    std::println("{}", doubled(line));
}
```
