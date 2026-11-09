# Kind 70: Try each order of each list until all tests pass
After: 23, 24, 64
## Example
Write a function `pets::solve()` that returns a `pets::Answer`, a struct with 2 `std::string` members: `cat_color`, the color of the house with the cat, and `dog_color`, the color of the house with the dog.
There are 3 houses in a row, numbered 0 to 2 from the left. Each has one of 3 colors (`red`, `green`, `blue`) and one of 3 pets (cat, dog, fish), and no two houses share either.
These 3 facts hold:
- The green house is just right of the red house.
- The fish lives in the green house.
- The dog lives next to the blue house.
Exactly one way of filling the houses fits every fact.
Limits: none.
```cpp
#pragma once

#include <algorithm>
#include <array>
#include <cstdlib>
#include <string>

namespace pets {

//: Write a struct that holds several values together.
struct Answer {
    std::string cat_color {};
    std::string dog_color {};
};

//: Name the place of each value in its list.
//@ Name the numbers 0, 1 and 2 with `enum { red, green, blue }`, so `green` stands for 1.
enum { red, green, blue };
enum { cat, dog, fish };

//: Make a table of fixed values.
//@ Make a table outside every function, marked `const`, so each function can read it.
const std::array<std::string, 3> names {"red", "green", "blue"};

//: Write a function that gives back a value worked out in one step.
std::string name_at(const std::array<int, 3>& color, int house)
{
    //:: Give back the name of the color of the house.
    //@ Find a value in a list with `std::ranges::find`, and let `auto` give the variable the type of what it gives back.
    const auto place {std::ranges::find(color, house)};
    //@ Turn the place found into an index by taking away `color.begin()`, the list's start.
    return names[place - color.begin()];
}

//: Write a function that gives back a value worked out in one step.
bool near(int first, int second)
{
    //:: Give back whether the 2 houses are side by side.
    //@ Get a number without its minus sign with `std::abs`, from `cstdlib`.
    return std::abs(first - second) == 1;
}

//: Write a function that gives back a value worked out in one step.
//@ Give the function a `std::array<int, 3>&` parameter, with no `const`, so it changes the caller's list.
bool next_order(std::array<int, 3>& order)
{
    //:: Change the list to its next order, and give back false after the last.
    //@ Change a list to its next order with `std::ranges::next_permutation`, whose `found` is false after the last order.
    return std::ranges::next_permutation(order).found;
}

//: Write a function that tries each order until one passes every test.
Answer solve()
{
    std::array<int, 3> color {0, 1, 2};
    std::array<int, 3> pet {0, 1, 2};
    //:: Try each order of the colors with green just right of red.
    //@ Run the lines in `do { } while (test);` once, then again as long as the test holds.
    do {
        if (color[green] != color[red] + 1) {
            //@ Go on to the next turn with `continue`, which skips the rest of the lines in `{ }`.
            continue;
        }
        //:: Give back the answer for the first order of pets that fits.
        do {
            if (pet[fish] == color[green]
                && near(pet[dog], color[blue])) {
                return Answer {name_at(color, pet[cat]),
                               name_at(color, pet[dog])};
            }
        } while (next_order(pet));
    } while (next_order(color));
    return {};
}

}  // namespace pets
```
## Trace
Columns: least, order, number
Input 1:
```
200
```
Input 2:
```
300
```
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <print>

int main()
{
    int least {0};
    std::cin >> least;
    std::array<int, 3> order {1, 2, 3};
    int number {123};
    while (number <= least) {
        std::ranges::next_permutation(order);
        number = 100 * order[0] + 10 * order[1] + order[2];
    }
    std::println("{}", number);
}
```
