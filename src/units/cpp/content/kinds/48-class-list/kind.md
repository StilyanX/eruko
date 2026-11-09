# Kind 48: Keep a list in a class and give back facts about it
After: 15, 22, 25
## Example
Write a class `garden::harvest` made from a `std::vector<int>` of weights, in the order they were picked.
`weights()` returns all the weights, in the same order.
`first()` returns the weight picked first.
`heaviest()` returns the largest weight.
`top_two()` returns the 2 largest weights, largest first, or the one weight when there is only one; equal weights each count.
No member function changes the weights.
Limits: 1 ≤ number of weights ≤ 1000; 1 ≤ each weight ≤ 10 000.
```cpp
#pragma once

#include <algorithm>
#include <functional>
#include <vector>

namespace garden {

//: Write a class with a constructor that sets the data.
class harvest {
public:
    explicit harvest(std::vector<int> weights)
        : weights_ {weights}
    {
    }
    //: Write a member function that gives back the data.
    std::vector<int> weights() const
    {
        return weights_;
    }
    //: Write a member function that gives back a value worked out in one step.
    int first() const
    {
        //@ Get the first item of a list with `front()`.
        return weights_.front();
    }
    //: Write a member function that gives back a value worked out in one step.
    int heaviest() const
    {
        //@ Get the largest item of a list with `std::ranges::max`, from `algorithm`.
        return std::ranges::max(weights_);
    }
    //: Write a member function that gives back the largest values of a list, largest first.
    std::vector<int> top_two() const
    {
        //:: Copy the list, and sort it from largest to smallest.
        std::vector<int> sorted {weights_};
        //@ Include `functional`, the part of the library that holds `std::ranges::greater`.
        //@ Sort a list from largest to smallest with `std::ranges::sort` and `std::ranges::greater {}`.
        std::ranges::sort(sorted, std::ranges::greater {});
        //:: Keep at most the first 2.
        //@ Cut a list to its first items with `resize`, and take the smaller of 2 values with `std::min`.
        sorted.resize(std::min(sorted.size(), std::size_t {2}));
        //:: Give back the sorted list.
        return sorted;
    }
//: Keep the data in private members.
//@ Write the data after `private:`, where only the class's own functions reach it.
private:
    std::vector<int> weights_ {};
};

}  // namespace garden
```
## Trace
Columns: number, list
Input 1:
```
5 9 2
```
Input 2:
```
4 8 8 1
```
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    std::vector<int> list {};
    int number {0};
    while (std::cin >> number) {
        list.push_back(number);
    }
    std::ranges::sort(list, std::ranges::greater {});
    list.resize(std::min(list.size(), std::size_t {2}));
    std::println("{}", list);
}
```
