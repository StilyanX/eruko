# Kind 34: Keep a stack of what is still needed
After: 17, 22
## Example
Write a function `pairs::reduce(const std::string& text)` that returns the text left after removing, again and again, 2 equal characters side by side.
Limits: 0 ≤ length of the text ≤ 1000.
```cpp
#pragma once

#include <string>

namespace pairs {

//: Write a function that keeps a stack of characters, adding to and taking from its end, and gives back the answer.
std::string reduce(const std::string& text)
{
    //:: Start the kept characters as an empty string.
    std::string kept {""};
    //:: For each character, take off the last kept one when they are equal, else add it.
    for (const char character : text) {
        //@ Turn a test around with `!`, which holds when the test fails.
        //@ Test whether a string is empty with `empty()`, and get its last character with `back()`.
        if (!kept.empty() && kept.back() == character) {
            //@ Take the last character off a string with `pop_back()`.
            kept.pop_back();
        } else {
            kept += character;
        }
    }
    //:: Give back the kept characters.
    return kept;
}

}  // namespace pairs
```
## Trace
Columns: keys, kept, key
Input 1:
```
ab-
```
Input 2:
```
xy--z-w
```
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string keys {};
    std::cin >> keys;
    std::string kept {""};
    for (const char key : keys) {
        if (key == '-') {
            kept.pop_back();
        } else {
            kept += key;
        }
    }
    std::println("{}", kept);
}
```
