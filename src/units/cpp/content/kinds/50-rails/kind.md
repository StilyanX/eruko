# Kind 50: Write a text along rails and read it back
After: 14, 16, 19, 38, 46
## Example
Write a function `two_rails::encode(const std::string& text)` that returns the text's characters at the indexes that 3 divides, in order, then the others, in order.
Write a function `two_rails::decode(const std::string& text)` that returns the text that `encode` turns into the given text.
Empty text gives empty text.
Limits: 0 ≤ length of text ≤ 1000.
```cpp
#pragma once

#include <string>

namespace two_rails {

//: Write a function that tests each case in order and gives back the result of the first that holds.
int rail_of(int index)
{
    //:: Give back rail 0 for an index that 3 divides, else rail 1.
    if (index % 3 == 0) {
        return 0;
    }
    return 1;
}

//: Write a function that builds a new string one piece at a time and gives it back.
std::string encode(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each rail, add each character on it, in order.
    //@ Put a `for` inside another, so the inner one runs in full for each step of the outer.
    for (int rail {0}; rail < 2; ++rail) {
        for (int index {0}; index < std::ssize(text); ++index) {
            if (rail_of(index) == rail) {
                result += text[index];
            }
        }
    }
    //:: Give back the result.
    return result;
}

//: Write a function that puts each character of the text in its place on the rails, rail by rail.
std::string decode(const std::string& text)
{
    //:: Start the result as a copy of the text.
    std::string result {text};
    //:: Start the position in the text at zero.
    int next {0};
    //:: For each rail, put the next character of the text at each index on it.
    for (int rail {0}; rail < 2; ++rail) {
        for (int index {0}; index < std::ssize(text); ++index) {
            if (rail_of(index) == rail) {
                //@ Change the character at an index with `result[index] =`.
                result[index] = text[next];
                ++next;
            }
        }
    }
    //:: Give back the result.
    return result;
}

}  // namespace two_rails
```
## Trace
Columns: word, rail, i
Input 1:
```
abc
```
Input 2:
```
hello
```
```cpp
#include <iostream>
#include <print>
#include <string>
void print_rails(const std::string& word)
{
    for (int rail {0}; rail < 2; ++rail) {
        for (int i {rail}; i < std::ssize(word); i += 2) {
            std::print("{}", word[i]);
        }
    }
    std::println();
}
int main()
{
    std::string word {};
    std::cin >> word;
    print_rails(word);
}
```
