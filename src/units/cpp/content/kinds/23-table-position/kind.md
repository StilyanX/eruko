# Kind 23: Find an item's position in a fixed table
After: 8, 13, 22
## Example
Write a function `week::days()` that returns the 7 days of the week, from monday to sunday, in lower case, as a `std::vector<std::string>`.
Write a function `week::day_index(const std::string& day)` that returns the index of the day in that list, counting from 0, or -1 when the day is not in it.
Limits: 0 ≤ length of the day ≤ 20.
```cpp
#pragma once

#include <string>
#include <vector>

namespace week {

//: Make a table of fixed values.
//@ Make a list of strings with `std::vector<std::string>`, its items in order between `{ }`.
const std::vector<std::string> names {
    "monday", "tuesday", "wednesday", "thursday",
    "friday", "saturday", "sunday"};

//: Write a function that gives back a value worked out in one step.
//@ Leave the brackets after a function's name empty when it takes nothing.
std::vector<std::string> days()
{
    //:: Give back the table of days.
    return names;
}

//: Write a function that finds the first item that passes a test and gives back its position.
int day_index(const std::string& day)
{
    //:: Give back the index of the first entry equal to the day.
    //@ Get the number of items in a list, as an `int`, with `std::ssize`.
    for (int index {0}; index < std::ssize(names); ++index) {
        //@ Read the item at an index with `names[index]`, where the first index is 0.
        if (names[index] == day) {
            return index;
        }
    }
    //:: Give back -1 when no entry is equal to it.
    return -1;
}

}  // namespace week
```
## Trace
Columns: coin, index
Input 1:
```
5
```
Input 2:
```
20
```
```cpp
#include <iostream>
#include <print>
#include <vector>
const std::vector<int> coins {1, 2, 5, 10, 20, 50};
int coin_index(int coin)
{
    int index {0};
    while (coins[index] != coin) {
        ++index;
    }
    return index;
}
int main()
{
    int coin {0};
    std::cin >> coin;
    std::println("{}", coin_index(coin));
}
```
