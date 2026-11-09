# Kind 13: Give back a value worked out in one step
After: 12
## Example
Write a function `tag::wrap(const std::string& text)` that returns the text with `<` before it and `>` after it, as a `std::string`.
Limits: 0 ≤ length of the text ≤ 100.
```cpp
//@ Start a header, a file that other files include, with `#pragma once`, so it is read only once.
#pragma once

#include <string>

//@ Put the function inside `namespace tag { }`, so the code that uses it calls it `tag::wrap`.
namespace tag {

//: Write a function that gives back a value worked out in one step.
//@ Give the function a `const std::string&` parameter, which reads the caller's string without copying it.
std::string wrap(const std::string& text)
{
    //:: Give back the text between `<` and `>`.
    //@ Join strings, or a string and fixed words in double quotes, with `+`.
    return "<" + text + ">";
}

}  // namespace tag
```
## Trace
Columns: width, height
Input 1:
```
3 5
```
Input 2:
```
10 2
```
```cpp
#include <iostream>
#include <print>

int perimeter(int width, int height)
{
    return 2 * (width + height);
}

int main()
{
    int width {0};
    int height {0};
    std::cin >> width >> height;
    std::println("{}", perimeter(width, height));
}
```
