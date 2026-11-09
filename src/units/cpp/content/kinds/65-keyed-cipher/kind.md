# Kind 65: Check the key, then encode and decode each character
After: 17, 21, 29, 43, 59
## Example
Write a function `digit_cipher::encode(const std::string& text, int key)` that returns the digits of the text encoded with the key, a space between each 2.
Write a function `digit_cipher::decode(const std::string& text, int key)` that returns the digits of the text decoded with the same key, with no spaces.
Encoding turns digit d into the last digit of key × d. Decoding turns digit y into the last digit of x × y, where x is the number from 1 to 9 for which key × x ends in 1.
Both leave out every character that is not a digit.
Throw `std::invalid_argument` when 2 or 5 divides the key.
Limits: 1 ≤ key ≤ 99; 0 ≤ length of the text ≤ 1000.
```cpp
#pragma once

#include <cctype>
#include <stdexcept>
#include <string>

namespace digit_cipher {

//: Write a function that throws an error when its input is not allowed.
void check_key(int key)
{
    if (key % 2 == 0 || key % 5 == 0) {
        throw std::invalid_argument {"the key has no inverse"};
    }
}

//: Write a function that repeats a step until a condition holds and gives back the result.
int inverse(int key)
{
    //:: Start the inverse at 1.
    int inverse {1};
    //:: Add one to the inverse until the key times it leaves 1 after dividing by 10.
    while (key * inverse % 10 != 1) {
        ++inverse;
    }
    //:: Give back the inverse.
    return inverse;
}

//: Write a function that builds a new string from each character of the text.
std::string apply_key(const std::string& text, int key)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each digit, add the last digit of the digit times the key.
    for (const char character : text) {
        if (std::isdigit(character)) {
            const int digit {(character - '0') * key % 10};
            result += static_cast<char>('0' + digit);
        }
    }
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new string from each character of the text.
std::string spaced(const std::string& text)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each character, add a space before all but the first, then the character.
    for (std::size_t index {0}; index < text.size(); ++index) {
        if (index > 0) {
            result += ' ';
        }
        result += text[index];
    }
    //:: Give back the result.
    return result;
}

//: Write a function that calls the functions above and gives back the answer.
std::string encode(const std::string& text, int key)
{
    check_key(key);
    return spaced(apply_key(text, key));
}

//: Write a function that calls the functions above and gives back the answer.
std::string decode(const std::string& text, int key)
{
    check_key(key);
    return apply_key(text, inverse(key));
}

}  // namespace digit_cipher
```
## Trace
Columns: key, inverse
Input 1:
```
3
```
Input 2:
```
5
```
```cpp
#include <iostream>
#include <print>
int inverse(int key)
{
    int inverse {1};
    while (key * inverse % 7 != 1) {
        ++inverse;
    }
    return inverse;
}
int main()
{
    int key {0};
    std::cin >> key;
    std::println("{}", inverse(key));
}
```
