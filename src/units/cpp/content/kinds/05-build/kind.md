# Kind 5: Build a new string from an old one
After: 1, 2, 3, 4
## Example
Write a program that reads a line of text and prints it with a dash after each character.

Input: one line of text, which may hold spaces.
Output: one line of text.
Limits: the text holds 0 to 100 characters.

```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    //: Read the line.
    std::string line {};
    std::getline(std::cin, line);
    //: Start the result as an empty string.
    std::string result {""};
    //: For each character of the line, in order, add to the result.
    //@ Take each character of the line in turn with `for (const char character : line)`.
    //@ Hold one character in a `char`, and mark with `const` a value that never changes.
    for (const char character : line) {
        //:: Add the character, then a dash.
        //@ Add a `char`, or fixed words in double quotes, to the end of a string with `+=`.
        result += character;
        //@ Write one `char` between single quotes.
        result += '-';
    }
    //: Print the result.
    std::println("{}", result);
}
```
## Trace
Columns: text, result, character
Input 1:
```
tea
```
Input 2:
```
banana
```
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string text {};
    std::getline(std::cin, text);
    std::string result {""};
    for (const char character : text) {
        if (character != 'a') {
            result += character;
        }
    }
    std::println("{}", result);
}
```
