# Kind 38: Build a string from runs, and read it back
After: 10, 16, 17, 19, 32
## Example
Write a function `runs::encode(const std::string& text)` that returns the text with each run of the same character written as the character, then the run's length.
Write a function `runs::decode(const std::string& text)` that returns the text that `encode` turns into the given text.
Empty text gives empty text.
Limits: 0 ≤ length of text ≤ 1000; the text to encode holds letters only, in runs of at most 9.
```cpp
#pragma once

#include <cctype>
#include <cstddef>
#include <string>

namespace runs {

//: Write a function that builds a new string one piece at a time and gives it back.
std::string encode(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each run, add its character, then its length.
    //@ Hold a size or an index with `std::size_t`, which is never below 0.
    std::size_t start {0};
    while (start < text.size()) {
        std::size_t end {start + 1};
        //@ Get the character at an index with `text[end]`, where the first index is 0.
        while (end < text.size() && text[end] == text[start]) {
            ++end;
        }
        result += text[start];
        result += std::to_string(end - start);
        start = end;
    }
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new string from each character of the text.
std::string decode(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Start the last letter as a space.
    char letter {' '};
    //:: For each character, keep a letter, or add the kept letter as many times as a digit says.
    for (const char character : text) {
        if (std::isdigit(character)) {
            //@ Add a character several times to the end of a string with `append`, the count first.
            result.append(character - '0', letter);
        } else {
            letter = character;
        }
    }
    //:: Give back the result.
    return result;
}

}  // namespace runs
```
## Trace
Columns: letter, length, result
Input 1:
```
a3b1
```
Input 2:
```
x2y4z1
```
```cpp
#include <iostream>
#include <print>
#include <string>
std::string run(char letter, int length)
{
    return std::string(length, letter);
}

int main()
{
    char letter {' '};
    int length {0};
    std::string result {""};
    while (std::cin >> letter >> length) {
        result += run(letter, length);
    }
    std::println("{}", result);
}
```
