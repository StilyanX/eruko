# Kind 55: Clean and check data in a constructor
After: 12, 13, 15, 43
## Example
Write a class `clean::word` whose constructor takes a `const std::string& text` and keeps the letters of text, in order and made small, dropping every other character.
It throws `std::invalid_argument` when no letter is left.
`letters()` returns the letters kept as a `std::string`.
Limits: 0 ≤ length of the text ≤ 100.
```cpp
#pragma once

#include <cctype>
#include <stdexcept>
#include <string>

namespace clean {

//: Write a class that keeps its data in private members.
class word {
    std::string kept_ {};
public:
    //: Write a constructor that sets the data, and stops with an error when it is bad.
    explicit word(const std::string& text)
    {
        //:: Keep each letter of the text, made small.
        for (const char character : text) {
            if (std::isalpha(character)) {
                //@ Make a letter small with `std::tolower`, and turn its `int` answer back into a `char` with `static_cast<char>`.
                kept_ += static_cast<char>(
                    std::tolower(character));
            }
        }
        //:: Stop with an error when no letter is left.
        if (kept_.empty()) {
            //@ Throw from a constructor, so no object is ever made from bad data.
            throw std::invalid_argument {"no letters"};
        }
    }
    //: Write a member function that gives back the data.
    std::string letters() const
    {
        return kept_;
    }
};

}  // namespace clean
```
## Trace
Columns: months, years
Input 1:
```
30
```
Input 2:
```
100
```
```cpp
#include <iostream>
#include <print>
#include <stdexcept>
struct age { int years {0}; };
age from_months(int months)
{
    const int years {months / 12};
    if (years < 0) {
        throw std::domain_error {"below 0"};
    }
    return age {years};
}
int main()
{
    int months {0};
    std::cin >> months;
    std::println("{}", from_months(months).years);
}
```
