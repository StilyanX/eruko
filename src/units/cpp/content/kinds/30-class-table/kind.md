# Kind 30: Test a value against a table in a class
After: 11, 12, 15, 22
## Example
Write a class `boxes::box` whose constructor takes the room in the box, in litres, as an `int`.
Each of these items has a size in litres: apple 1, melon 4, pumpkin 9.
`fits(const std::string& name) const` returns whether the item's size is at most the room.
`fitting() const` returns a `std::vector<std::string>` of every item that fits, in alphabetical order.
Limits: 0 ≤ room ≤ 100; each name given is one of the 3 above.
```cpp
#pragma once

#include <map>
#include <string>
#include <vector>

namespace boxes {

//: Make a table of fixed values.
//@ Fill the map with `{key, value}` pairs inside its outer `{ }`.
const std::map<std::string, int> sizes {
    {"apple", 1}, {"melon", 4}, {"pumpkin", 9}};

//: Write a class that keeps its data in private members.
class box {
    int room {0};
public:
    //: Write a constructor that sets the data.
    explicit box(int litres) : room {litres}
    {
    }
    //: Write a member function that gives back a value worked out in one step.
    bool fits(const std::string& name) const
    {
        //:: Give back whether the item's size is at most the room.
        //@ Read the value of a key with `.at`, which throws for a key the map lacks.
        return sizes.at(name) <= room;
    }
    //: Write a member function that gives back the items that pass a test.
    std::vector<std::string> fitting() const
    {
        //:: Start the result as an empty list.
        std::vector<std::string> result {};
        //:: Add each item whose size is at most the room.
        for (const auto& [name, size] : sizes) {
            if (size <= room) {
                result.push_back(name);
            }
        }
        //:: Give back the result.
        return result;
    }
};

}  // namespace boxes
```
## Trace
Columns: limit, size, price, count
Input 1:
```
6
```
Input 2:
```
1
```
```cpp
#include <iostream>
#include <map>
#include <print>

const std::map<int, int> prices {{1, 2}, {2, 5}, {3, 9}};

int main()
{
    int limit {0};
    std::cin >> limit;
    int count {0};
    for (const auto& [size, price] : prices) {
        if (price <= limit) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
