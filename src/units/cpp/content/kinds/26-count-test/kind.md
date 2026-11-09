# Kind 26: Count with a test and give back the count
After: 7, 16, 17, 20
## Example
Write a function `capitals::count_capitals(const std::string& text)` that returns how many characters of the text are capital letters from `A` to `Z`.
An empty text gives 0.
Limits: 0 ≤ length of the text ≤ 1000.
```cpp
#pragma once

#include <cctype>
#include <string>

namespace capitals {

//: Write a function that counts the items that pass a test and gives back the count.
int count_capitals(const std::string& text)
{
    //:: Start the count at zero.
    int count {0};
    //:: Add one for each capital letter.
    for (const char character : text) {
        //@ Test whether a character is a capital letter with `std::isupper`.
        if (std::isupper(character)) {
            ++count;
        }
    }
    //:: Give back the count.
    return count;
}

}  // namespace capitals
```
## Trace
Columns: n, count, number
Input 1:
```
3
```
Input 2:
```
7
```
```cpp
#include <iostream>
#include <print>
int count_threes(int n)
{
    int count {0};
    for (int number {1}; number <= n; ++number) {
        if (number % 3 == 0) {
            ++count;
        }
    }
    return count;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", count_threes(n));
}
```
