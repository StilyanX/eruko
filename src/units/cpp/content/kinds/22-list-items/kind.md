# Kind 22: Build a new list one item at a time
After: 13, 16
## Example
Write a function `evens::evens_up_to(int n)` that returns a `std::vector<int>` of the even numbers from 2 to n, smallest first.
Limits: 0 ≤ n ≤ 1000.
```cpp
#pragma once

//@ Include `vector`, the part of the library that holds `std::vector`, a list of values.
#include <vector>

namespace evens {

//: Write a function that builds a new list one item at a time and gives it back.
//@ Write `std::vector<int>`, a list of `int` values, as the type of the answer.
std::vector<int> evens_up_to(int n)
{
    //:: Start the result as an empty list.
    //@ Make a list that starts empty with `{}`.
    std::vector<int> result {};
    //:: Add each even number from 2 to n.
    for (int number {2}; number <= n; number += 2) {
        //@ Add a value at the end of the list with `push_back`.
        result.push_back(number);
    }
    //:: Give back the result.
    return result;
}

}  // namespace evens
```
## Trace
Columns: n, result, i
Input 1:
```
3
```
Input 2:
```
4
```
```cpp
#include <iostream>
#include <print>
#include <vector>
std::vector<int> squares(int n)
{
    std::vector<int> result(n);
    for (int i {0}; i < n; ++i) {
        result[i] = (i + 1) * (i + 1);
    }
    return result;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", squares(n));
}
```
