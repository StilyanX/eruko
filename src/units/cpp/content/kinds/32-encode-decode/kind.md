# Kind 32: Encode and decode a text one character at a time
After: 14, 16, 17, 20
## Example
Write a function `mirror::encode(const std::string& text)` that returns the text with each digit d turned into 9 - d and each space turned into `_`.
Every other character stays as it is.
Write a function `mirror::decode(const std::string& text)` that returns the text that `encode` turns into the given text.
Empty text gives empty text.
Limits: 0 ≤ length of text ≤ 1000; text holds no `_`.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace mirror {

//: Write a function that tests each case in order and gives back the result of the first that holds.
char swap(char character)
{
    //:: Give back 9 less the value of a digit.
    if (std::isdigit(character)) {
        return static_cast<char>('9' - (character - '0'));
    }
    //:: Give back any other character as it is.
    return character;
}

//: Write a function that builds a new string from each character of the text.
std::string encode(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add `_` for a space, else the character swapped.
    for (const char character : text) {
        if (character == ' ') {
            result += '_';
        } else {
            result += swap(character);
        }
    }
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new string from each character of the text.
std::string decode(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add a space for `_`, else the character swapped.
    for (const char character : text) {
        if (character == '_') {
            result += ' ';
        } else {
            result += swap(character);
        }
    }
    //:: Give back the result.
    return result;
}

}  // namespace mirror
```
## Trace
Columns: number, result, digit
Input 1:
```
123
```
Input 2:
```
9055
```
```cpp
#include <iostream>
#include <print>
#include <string>
char mirror(char digit)
{
    return static_cast<char>('0' + '9' - digit);
}

int main()
{
    std::string number {};
    std::cin >> number;
    std::string result {""};
    for (const char digit : number) {
        result += mirror(digit);
    }
    std::println("{}", result);
}
```
