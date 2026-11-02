# Kind 2: Read a line of input and print a result
After: 1
## Example
Write a program that reads a line of text and prints how many characters it holds, spaces included.

Input: one line of text, which may hold spaces.
Output: one line, the number, a space, then the word characters.
Limits: the text holds 0 to 100 characters.

```cpp
#include <iostream>
#include <print>
//@ Include `string`, the part of the library that holds text.
#include <string>

int main()
{
    //: Read the line.
    //@ Make a string variable that starts empty.
    std::string line {};
    //@ Read the whole line, spaces included, into the string with `std::getline`.
    std::getline(std::cin, line);
    //: Print the value.
    //@ Get the number of characters in the line with `line.size()`.
    //@ Write text around `{}` in the quotes, and give one value for each `{}`.
    std::println("{} characters", line.size());
}
```
## Trace
Columns: text
Input 1:
```
to be
```
Input 2:
```
or not
```
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string text {};
    std::getline(std::cin, text);
    std::println("[{}] {}", text, text.size() + 2);
}
```
