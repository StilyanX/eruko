# Kind 68: Build verses from tables of parts
After: 19, 37, 42
## Example
Write a function `animal_song::verse(unsigned number)` that returns verse number 1 to 3 of a song as a `std::string`, each line ending in `\n`.
The 3 animals, in order, are cat, dog and cow, and their sounds are meow, woof and moo.
Verse n opens `Animal <n> is the <animal>.` for animal n.
Then, for each animal from animal n back to the first, comes `The <animal> says <sound>.`
Also write `animal_song::verses(unsigned first, unsigned last)`, which returns the verses from first to last, each followed by an empty line.
Also write `animal_song::sing()`, which returns `verses(1, 3)`.
Limits: 1 ≤ number ≤ 3; 1 ≤ first ≤ last ≤ 3.
```cpp
#pragma once

#include <array>
#include <string>

namespace animal_song {

//: Make a table of fixed values.
//@ Make a table outside every function, so each function below reads it.
const std::array<std::string, 3> animals {"cat", "dog", "cow"};

//: Make a table of fixed values.
const std::array<std::string, 3> sounds {"meow", "woof", "moo"};

//: Write a function that builds a new string one piece at a time and gives it back.
//@ Write `unsigned` for an integer that is never below 0.
std::string verse(unsigned number)
{
    //:: Start the verse with the line that names the animal.
    std::string result {"Animal " + std::to_string(number)};
    result += " is the " + animals[number - 1] + ".\n";
    //:: Add a line for each animal back to the first, with its sound.
    //@ Take one from a variable with `--`.
    for (unsigned step {number}; step > 0; --step) {
        result += "The " + animals[step - 1] + " says "
                  + sounds[step - 1] + ".\n";
    }
    //:: Give back the verse.
    return result;
}

//: Write a function that builds a new string one piece at a time and gives it back.
std::string verses(unsigned first, unsigned last)
{
    //:: Start the result as an empty string.
    std::string result {};
    //:: Add each verse, then an empty line.
    for (unsigned number {first}; number <= last; ++number) {
        result += verse(number) + "\n";
    }
    //:: Give back the result.
    return result;
}

//: Write a function that calls the functions above and gives back the answer.
std::string sing()
{
    //:: Give back the verses from the first to the last.
    return verses(1, 3);
}

}  // namespace animal_song
```
## Trace
Columns: number, step
Input 1:
```
2
```
Input 2:
```
3
```
```cpp
#include <array>
#include <iostream>
#include <print>
#include <string>
const std::array<std::string, 3> names {"one", "two", "three"};
void count_down(int number)
{
    for (int step {number}; step > 0; --step) {
        std::println("{} and", names[step - 1]);
    }
    std::println("go");
}
int main()
{
    int number {0};
    std::cin >> number;
    count_down(number);
}
```
