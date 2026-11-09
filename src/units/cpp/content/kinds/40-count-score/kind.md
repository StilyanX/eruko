# Kind 40: Count each item, then score the case asked for
After: 9, 14, 16
## Example
Write a function `dice::score(std::array<int, 3> dice, const std::string& category)` that returns the score of the 3 dice in the category.
`triple` scores 20 when all 3 dice show one face, `pair` scores 10 when at least 2 dice show one face, and dice that do not fit the category score 0.
Limits: each die is from 1 to 6; the category is `pair` or `triple`.
```cpp
#pragma once

//@ Include `array`, the part of the library that holds `std::array`, a list whose length is fixed.
#include <array>
#include <string>

namespace dice {

//: Write a function that counts each item, then gives back the answer for the case it is given.
//@ Write `std::array<int, 3>`, a list of 3 `int` values, as the type of a parameter.
int score(std::array<int, 3> dice, const std::string& category)
{
    //:: Count the dice that show each face.
    //@ Make a list of 7 zeros with `std::array<int, 7> counts {}`, a place for each face from 1 to 6.
    std::array<int, 7> counts {};
    for (const int die : dice) {
        //@ Reach the value at a place in the list with `counts[die]`.
        ++counts[die];
    }
    //:: Keep the largest count.
    int most {0};
    for (const int count : counts) {
        if (count > most) {
            most = count;
        }
    }
    //:: Give back 20 for `triple` when 3 dice show one face, 10 for `pair` when 2 do, else 0.
    if (category == "triple" && most == 3) {
        return 20;
    } else if (category == "pair" && most >= 2) {
        return 10;
    }
    return 0;
}

}  // namespace dice
```
## Trace
Columns: counts, n, index, number, asked
Input 1:
```
2
1 1
1
```
Input 2:
```
4
2 0 2 1
2
```
```cpp
#include <array>
#include <iostream>
#include <print>

int main()
{
    std::array<int, 3> counts {};
    int n {0};
    std::cin >> n;
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        ++counts[number];
    }
    int asked {0};
    std::cin >> asked;
    std::println("{}", asked * counts[asked]);
}
```
