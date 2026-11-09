# Kind 56: Note what a text holds, then pick the answer
After: 4, 14, 16, 17, 20
## Example
Write a function `text_kind::describe(const std::string& text)` that returns one of four answers for the text.
When it holds a digit and a letter: `mixed`.
When it holds a digit and no letter: `digits`.
When it holds a letter and no digit: `letters`.
Else: `none`.
Limits: 0 ≤ length of text ≤ 1000.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace text_kind {

//: Write a function that keeps what it finds in each character of the text, then gives back the answer for it.
std::string describe(const std::string& text)
{
    //:: Start with no digit and no letter found.
    //@ Make a `bool` variable, which holds `true` or `false`, and start it at `false`.
    bool digit {false};
    bool letter {false};
    //:: Keep whether a digit or a letter comes.
    for (const char character : text) {
        //@ Test whether a character is a letter with `std::isalpha`.
        if (std::isalpha(character)) {
            letter = true;
        } else if (std::isdigit(character)) {
            digit = true;
        }
    }
    //:: Test each case in order, and give back the answer of the first that holds.
    if (digit && letter) {
        return "mixed";
    } else if (digit) {
        return "digits";
    } else if (letter) {
        return "letters";
    } else {
        return "none";
    }
}

}  // namespace text_kind
```
## Trace
Columns: line, character, last
Input 1:
```
ok?
```
Input 2:
```
why
```
```cpp
#include <iostream>
#include <print>
#include <string>

bool asks(const std::string& line)
{
    char last {' '};
    for (const char character : line) {
        last = character;
    }
    return last == '?';
}
int main()
{
    std::string line {};
    std::getline(std::cin, line);
    std::println("{}", asks(line));
}
```
