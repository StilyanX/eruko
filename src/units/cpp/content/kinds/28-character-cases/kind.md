# Kind 28: Turn each character by cases
After: 14, 17
## Example
Write a function `brackets::flip(char character)` that returns `)` for `(`, `(` for `)`, else the character itself.
Write a second function `brackets::flip(const std::string& text)` that returns, as a `std::string`, the text with each character flipped this way.
Limits: 0 ≤ length of the text ≤ 100.
```cpp
#pragma once

#include <string>

namespace brackets {

//: Write a function that tests each case in order and gives back the result of the first that holds.
char flip(char character)
{
    //:: Give back `)` for `(`, `(` for `)`, else the character itself.
    if (character == '(') {
        return ')';
    } else if (character == ')') {
        return '(';
    } else {
        return character;
    }
}

//: Write a function that builds a new string from each character of the text.
//@ Give 2 functions the same name when their parameters differ, and each call runs the one whose parameters fit.
std::string flip(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each character of the text, in order, add it flipped to the result.
    for (const char character : text) {
        result += flip(character);
    }
    //:: Give back the result.
    return result;
}

}  // namespace brackets
```
## Trace
Columns: text, result, character
Input 1:
```
ab
```
Input 2:
```
banana
```
```cpp
#include <iostream>
#include <print>
#include <string>

char masked(char character)
{
    return character == 'a' ? '*' : character;
}
int main()
{
    std::string text {};
    std::cin >> text;
    std::string result {""};
    for (const char character : text) {
        result += masked(character);
    }
    std::println("{}", result);
}
```
