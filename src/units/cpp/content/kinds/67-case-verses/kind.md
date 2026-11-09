# Kind 67: Pick each verse by cases, then join the verses
After: 4, 12, 13, 19, 42
## Example
Write a function `countdown::line(int seconds)` that returns the line for that number of seconds as a `std::string` ending in a newline.
For 2 or more, the line is `n seconds left.`; for 1, `1 second left.`; for 0, `Lift off!`.
Write a function `countdown::lines(int start)` that returns the lines from start down to 0, one after the other.
Limits: 0 ≤ start ≤ 99.
```cpp
#pragma once

#include <string>

namespace countdown {

//: Write a function that tests each case in order and gives back the result of the first that holds.
std::string line(int seconds)
{
    //:: Give back the line for 0, for 1, else for any other number.
    if (seconds == 0) {
        return "Lift off!\n";
    } else if (seconds == 1) {
        return "1 second left.\n";
    } else {
        return std::to_string(seconds) + " seconds left.\n";
    }
}

//: Write a function that builds a new string one piece at a time and gives it back.
std::string lines(int start)
{
    //:: Start the result as an empty string.
    std::string result {""};
    //:: For each number from start down to 0, add its line.
    for (int seconds {start}; seconds >= 0; --seconds) {
        result += line(seconds);
    }
    //:: Give back the result.
    return result;
}

}  // namespace countdown
```
## Trace
Columns: n, result
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
#include <string>
std::string sound(int n)
{
    return n % 3 == 0 ? "fizz" : std::to_string(n);
}
std::string two_sounds(int n) noexcept
{
    std::string result {sound(n)};
    return result + " " + sound(n + 1);
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", two_sounds(n));
}
```
