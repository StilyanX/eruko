# Kind 49: Find a split point, then rebuild each word
After: 8, 12, 13, 19, 38
## Example
Write a function `sides::swap(const std::string& text)` that returns, as a `std::string`, the part of the text after its `=`, then `=`, then the part before it.
Limits: 1 ≤ length of the text ≤ 100; the text holds exactly one `=`.
```cpp
#pragma once

#include <cstddef>
#include <string>

namespace sides {

//: Write a function that finds the first item that passes a test and gives back its position.
std::size_t split_point(const std::string& text)
{
    //:: Give back the index of the first `=`.
    for (std::size_t index {0}; index < text.size(); ++index) {
        if (text[index] == '=') {
            return index;
        }
    }
    return text.size();
}

//: Write a function that builds a new string one piece at a time and gives it back.
std::string swap(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add the part after the split point, then `=`, then the part before it.
    const std::size_t split {split_point(text)};
    //@ Take the part of a string that starts at an index with `substr`, and give a length to stop early.
    result += text.substr(split + 1);
    result += '=';
    result += text.substr(0, split);
    //:: Give back the result.
    return result;
}

}  // namespace sides
```
## Trace
Columns: word, split
Input 1:
```
abc123
```
Input 2:
```
x7
```
```cpp
#include <iostream>
#include <print>
#include <string>
std::size_t split_point(const std::string& word)
{
    return word.find_first_of("0123456789");
}
std::string rotate(const std::string& word) noexcept
{
    const std::size_t split {split_point(word)};
    return word.substr(split) + word.substr(0, split);
}
int main()
{
    std::string word {};
    std::cin >> word;
    std::println("{}", rotate(word));
}
```
