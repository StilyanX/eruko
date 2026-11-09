# Kind 39: Find positions, then combine them
After: 8, 12, 13, 22
## Example
Write a function `planets::apart(const std::string& from, const std::string& to)` that returns how many places after the planet from the planet to stands, counting out from the sun.
The planets in order are `mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus` and `neptune`.
When to stands before from, the answer is below 0.
Limits: from and to are each one of the 8 names above.
```cpp
#pragma once

#include <string>
#include <vector>

namespace planets {

//: Write a function that finds the first item that passes a test and gives back its position.
int position(const std::string& planet)
{
    //:: Make the list of planets, in order.
    const std::vector<std::string> planets {
        "mercury", "venus", "earth", "mars",
        "jupiter", "saturn", "uranus", "neptune"};
    //:: Give back the index of the first planet in the list equal to the planet, else -1.
    for (int index {0}; index < std::ssize(planets); ++index) {
        if (planets[index] == planet) {
            return index;
        }
    }
    return -1;
}

//: Write a function that gives back a value worked out in one step.
int apart(const std::string& from, const std::string& to)
{
    //:: Give back the position of the second planet less the position of the first.
    return position(to) - position(from);
}

}  // namespace planets
```
## Trace
Columns: pair, letter, index
Input 1:
```
ca
```
Input 2:
```
be
```
```cpp
#include <iostream>
#include <print>
#include <string>
int place(char letter)
{
    const std::string letters {"abcde"};
    int index {0};
    while (letters[index] != letter) {
        ++index;
    }
    return index;
}
int main()
{
    std::string pair {};
    std::cin >> pair;
    std::println("{}", place(pair[0]) + place(pair[1]));
}
```
