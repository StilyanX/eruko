# Kind 57: Keep the items that pass a test, in a class
After: 15, 17, 22, 48, 55
## Example
Write a class `alphabet::finder` whose constructor takes a length as an `int`.
Its member `ordered(const std::vector<std::string>& words)` returns a `std::vector<std::string>` of the words, in the order given, that have at least that many letters and whose letters, in lower case, are in alphabetical order.
A letter may come twice in a row, as in `all`.
Each word is returned as given.
Limits: 1 ≤ length ≤ 10; 0 ≤ number of words ≤ 20; each word 1 to 10 letters `A` to `Z` or `a` to `z`.
```cpp
#pragma once

#include <algorithm>
#include <cctype>
#include <string>
#include <vector>

namespace alphabet {

//: Write a function that gives back a copy of the text with each letter in lower case.
//@ Give the function a `std::string` parameter, a copy of the caller's string that it may change.
std::string lower(std::string text)
{
    //@ Take each character by reference with `char& character`, so a change to it changes the text.
    for (char& character : text) {
        character = static_cast<char>(std::tolower(character));
    }
    return text;
}

//: Write a function that gives back a copy of the text with its characters in order.
std::string sorted(std::string text)
{
    //@ Put the characters of a string in order with `std::ranges::sort`, smallest first.
    std::ranges::sort(text);
    return text;
}

//: Write a class that keeps its data in private members.
class finder {
    int length_ {0};
public:
    //: Write a constructor that sets the data.
    explicit finder(int length)
        : length_ {length}
    {
    }
    //: Write a member function that gives back the items that pass a test.
    //@ Give the function a `const std::vector<std::string>&` parameter, which reads the caller's list without copying it.
    std::vector<std::string> ordered(
        const std::vector<std::string>& words) const
    {
        //:: Start the result as an empty list.
        std::vector<std::string> result {};
        //:: Add each word of at least the length whose letters are in alphabetical order.
        //@ Take each string of a list in turn, without copying it, with `const std::string& word`.
        for (const std::string& word : words) {
            const std::string text {lower(word)};
            if (std::ssize(text) >= length_
                && sorted(text) == text) {
                result.push_back(word);
            }
        }
        //:: Give back the result.
        return result;
    }
};

}  // namespace alphabet
```
## Trace
Columns: word, text
Input 1:
```
ant cab
```
Input 2:
```
dog ant cow bee
```
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <string>
std::string sorted(std::string text)
{
    std::ranges::sort(text);
    return text;
}
int main()
{
    std::string word {};
    while (std::cin >> word) {
        if (sorted(word)[0] == word[0]) {
            std::println("{}", word);
        }
    }
}
```
