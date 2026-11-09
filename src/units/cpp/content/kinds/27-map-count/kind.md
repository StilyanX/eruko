# Kind 27: Count each item in a map and give the map back
After: 11, 12, 22
## Example
Write a function `number_count::count(const std::vector<int>& numbers)` that returns a `std::map<int, int>` from each number in the list to how many times it occurs.
A number that does not occur has no key.
Limits: 0 ≤ length of the list ≤ 1000; -1000 ≤ each number ≤ 1000.
```cpp
#pragma once

#include <map>
#include <vector>

namespace number_count {

//: Write a function that counts each item in a map from the item to its count.
//@ Write `std::map<int, int>`, a map from each `int` to an `int`, as the type of the answer.
//@ Give the function a `const std::vector<int>&` parameter, which reads the caller's list without copying it.
std::map<int, int> count(const std::vector<int>& numbers)
{
    //:: Start an empty map from each number to its count.
    std::map<int, int> counts {};
    //:: Add one to the count of each number.
    //@ Take each item of the list in turn with `for (const int number : numbers)`.
    for (const int number : numbers) {
        ++counts[number];
    }
    //:: Give back the counts.
    return counts;
}

}  // namespace number_count
```
## Trace
Columns: word, counts, letter
Input 1:
```
odd
```
Input 2:
```
banana
```
```cpp
#include <iostream>
#include <map>
#include <print>
#include <string>

int main()
{
    std::string word {};
    std::cin >> word;
    std::map<char, int> counts {};
    for (const char letter : word) {
        ++counts[letter];
    }
    std::println("{}", counts);
}
```
