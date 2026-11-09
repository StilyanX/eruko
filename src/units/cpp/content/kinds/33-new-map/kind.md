# Kind 33: Build a new map from an old one
After: 11, 12, 27
## Example
Write a function `prices::doubled(const std::map<std::string, int>& prices)` that returns a `std::map<std::string, int>` from each name in prices to 2 times its price.
Limits: 0 ≤ entries of prices ≤ 100; 0 ≤ each price ≤ 1 000 000.
```cpp
#pragma once

#include <map>
#include <string>

namespace prices {

//: Write a function that builds a new map from each entry of the old one.
//@ Give the function a `const std::map<std::string, int>&` parameter, which reads the caller's map without copying it.
std::map<std::string, int> doubled(
    const std::map<std::string, int>& prices)
{
    //:: Start an empty map from each name to its price.
    std::map<std::string, int> result {};
    //:: Put each name in the result with 2 times its price.
    for (const auto& [name, price] : prices) {
        //@ Give a key its value with `result[name] =`, which adds the key when it is new.
        result[name] = 2 * price;
    }
    //:: Give back the result.
    return result;
}

}  // namespace prices
```
## Trace
Columns: old, result, key, value
Input 1:
```
14 9
```
Input 2:
```
25 30
```
```cpp
#include <iostream>
#include <map>
#include <print>

int main()
{
    std::map<int, int> old {};
    std::cin >> old[1] >> old[2];
    std::map<int, int> result {};
    for (const auto& [key, value] : old) {
        result[key] = value % 10;
    }
    std::println("{}", result);
}
```
