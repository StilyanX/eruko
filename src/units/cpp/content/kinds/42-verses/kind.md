# Kind 42: Build each verse, then join the verses
After: 12, 19
## Example
Write a function `claps::recite(int last)` that returns, as a `std::string`, the verses for the numbers from 1 to last, with an empty line between 2 verses.
The verse for number n is one line: `Number `, n in digits, `:`, then ` clap` n times, then a full stop and a newline.
Limits: 1 ≤ last ≤ 9.
```cpp
#pragma once

#include <string>

namespace claps {

//: Write a function that builds a new string one piece at a time and gives it back.
std::string verse(int number)
{
    //:: Start the result with the opening words for the number.
    std::string result {"Number "};
    result += std::to_string(number) + ":";
    //:: Add ` clap` once for each integer from 1 to the number.
    for (int clap {1}; clap <= number; ++clap) {
        result += " clap";
    }
    //:: Add a full stop and a newline.
    //@ Write a newline inside quotes as `\n`.
    result += ".\n";
    //:: Give back the result.
    return result;
}

//: Write a function that builds a new string one piece at a time and gives it back.
std::string recite(int last)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each number from 1 to last, add an empty line before all but the first, then its verse.
    for (int number {1}; number <= last; ++number) {
        if (number > 1) {
            result += "\n";
        }
        result += verse(number);
    }
    //:: Give back the result.
    return result;
}

}  // namespace claps
```
## Trace
Columns: n, number, song
Input 1:
```
3
```
Input 2:
```
4
```
```cpp
#include <iostream>
#include <print>
#include <string>

std::string verse(int number)
{
    return std::to_string(number) + " hop\n";
}
int main()
{
    int n {0};
    std::cin >> n;
    std::string song {""};
    for (int number {1}; number <= n; ++number) {
        song += verse(number);
    }
    std::print("{}", song);
}
```
