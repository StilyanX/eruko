# Kind 60: Write the basic list functions
After: 12, 22, 31
## Example
Write a function `text_ops::append(std::string& left, const std::string& right)` that adds the characters of right, in order, to the end of left, and returns nothing.
Write these functions in the same namespace too, each over a `std::string` taken as a list of characters, without the algorithms of the standard library:
`concat(const std::vector<std::string>& texts)` returns one string of the characters of all the texts, in order.
`keep(const std::string& text, test)` returns the characters for which `test(character)` is true, in order.
`length(const std::string& text)` returns how many characters text holds, as a `std::size_t`.
`map(const std::string& text, function)` returns the string of `function(character)` for each character, in order.
`foldl(const std::string& text, T start, function)` starts a result at start and, for each character from first to last, makes the result `function(result, character)`; it returns the result.
`foldr` takes the same arguments and does the same, but takes the characters from last to first.
`reverse(const std::string& text)` returns the characters in the reverse order.
Limits: none
```cpp
#pragma once

#include <cstddef>
#include <string>
#include <vector>

namespace text_ops {

//: Write a function that adds each item of one list to the end of another.
//@ Give the function a `std::string&` parameter, with no `const`, which changes the caller's own string.
void append(std::string& left, const std::string& right)
{
    //:: Add each character of the right text, in order, to the end of the left.
    for (const char character : right) {
        left += character;
    }
}

//: Write a function that builds a new list one item at a time and gives it back.
std::string concat(const std::vector<std::string>& texts)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add the characters of each text, in order, to the end of the result.
    for (const std::string& text : texts) {
        append(result, text);
    }
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new list one item at a time and gives it back.
//@ Write `template <typename Test>` above a function to let `Test` stand for any type, here any function the caller passes.
template <typename Test>
std::string keep(const std::string& text, Test test)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add each character, in order, when it passes the test.
    for (const char character : text) {
        //@ Call the function the parameter holds with the value in brackets, as `test(character)`.
        if (test(character)) {
            result += character;
        }
    }
    //:: Give back the result.
    return result;
}

//: Write a function that adds one for each item and gives back the count.
std::size_t length(const std::string& text)
{
    //:: Start the count at zero.
    std::size_t count {0};
    //:: Add one for each item.
    //@ Walk from `text.begin()`, the first character, to `text.end()`, just past the last.
    for (auto next {text.begin()}; next != text.end(); ++next) {
        ++count;
    }
    //:: Give back the count.
    return count;
}

//: Write a function that builds a new list one item at a time and gives it back.
template <typename Function>
std::string map(const std::string& text, Function function)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add the function's answer for each item, in order.
    for (const char character : text) {
        result += function(character);
    }
    //:: Give back the result.
    return result;
}

//: Write a function that combines each item in turn into one result and gives it back.
//@ Name 2 types in one template, split by a comma.
template <typename T, typename Function>
T foldl(const std::string& text, T start, Function function)
{
    //:: Start the result at the start value.
    T result {start};
    //:: Combine the result with each item, from first to last.
    for (const char character : text) {
        result = function(result, character);
    }
    //:: Give back the result.
    return result;
}

//: Write a function that combines each item in turn into one result and gives it back.
template <typename T, typename Function>
T foldr(const std::string& text, T start, Function function)
{
    //:: Start the result at the start value.
    T result {start};
    //:: Combine the result with each item, from last to first.
    for (std::size_t index {text.size()}; index > 0; --index) {
        result = function(result, text[index - 1]);
    }
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new list one item at a time and gives it back.
std::string reverse(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: Add each item, from last to first.
    for (std::size_t index {text.size()}; index > 0; --index) {
        result += text[index - 1];
    }
    //:: Give back the result.
    return result;
}

}  // namespace text_ops
```
## Trace
Columns: word, count
Input 1:
```
cat
```
Input 2:
```
stone
```
```cpp
#include <iostream>
#include <print>
#include <string>

std::size_t length(const std::string& text)
{
    std::size_t count {0};
    for (auto next {text.begin()}; next != text.end(); ++next) {
        ++count;
    }
    return count;
}
int main()
{
    std::string word {""};
    std::cin >> word;
    std::println("{}", length(word));
}
```
