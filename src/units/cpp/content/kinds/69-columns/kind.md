# Kind 69: Clean a text in a class, then read it by columns
After: 15, 19, 50, 55
## Example
Write a class `columns::grid` whose constructor takes a `const std::string& text` and a width as an `int`, and whose member `by_columns()` returns a `std::string`.
The object keeps only the letters and digits of text, in order, the letters made lowercase.
Written row by row in rows of width characters, the last row maybe shorter, the kept characters are read column by column, left to right, each column from top to bottom.
`by_columns()` returns the characters in that order, with no spaces.
Limits: 1 ≤ width ≤ 20; 0 ≤ length of text ≤ 200; each character is ASCII.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace columns {

//: Write a class that keeps its data in private members.
class grid {
    std::string text_ {};
    int width_ {1};
public:
    //: Write a constructor that sets the data.
    grid(const std::string& text, int width)
        : width_ {width}
    {
        //:: Keep each letter, made lowercase, and each digit of the text, in order.
        //@ Read each character as an `unsigned char`, the form the `cctype` tests take.
        for (const unsigned char sign : text) {
            //@ Test whether a character is a letter or a digit with `std::isalnum`.
            if (std::isalnum(sign)) {
                text_ += static_cast<char>(std::tolower(sign));
            }
        }
    }
    //: Write a member function that builds a new string one piece at a time and gives it back.
    std::string by_columns() const
    {
        //:: Start the result as an empty string.
        std::string result {""};
        //:: For each column, add its character in each row that reaches it.
        for (int column {0}; column < width_; ++column) {
            for (int index {column}; index < std::ssize(text_);
                 index += width_) {
                result += text_[index];
            }
        }
        //:: Give back the result.
        return result;
    }
};

}  // namespace columns
```
## Trace
Columns: text, width, column, line, index
Input 1:
```
ab 1
```
Input 2:
```
abcdefg 3
```
```cpp
#include <iostream>
#include <print>
#include <string>
int main()
{
    std::string text {};
    int width {0};
    std::cin >> text >> width;
    for (int column {0}; column < width; ++column) {
        std::string line {};
        for (int index {column}; index < std::ssize(text);
             index += width) {
            line += text[index];
        }
        std::println("{}", line);
    }
}
```
