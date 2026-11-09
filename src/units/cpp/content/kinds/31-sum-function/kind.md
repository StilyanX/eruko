# Kind 31: Add up a sequence in a function
After: 6, 12, 13, 22
## Example
Write a function `even_sum::sum_of_evens(const std::vector<int>& numbers)` that returns the sum of the even numbers in the list.
An empty list, or one with no even number, gives 0.
Limits: 0 ≤ length of the list ≤ 100; -1000 ≤ each number ≤ 1000.
```cpp
#pragma once

#include <vector>

namespace even_sum {

//: Write a function that adds up a sequence and gives back the total.
//@ Give the function a `const std::vector<int>&` parameter, which reads the caller's list without copying it.
int sum_of_evens(const std::vector<int>& numbers)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add each even number of the list.
    //@ Take each item of the list in turn with `for (const int number : numbers)`.
    for (const int number : numbers) {
        if (number % 2 == 0) {
            total += number;
        }
    }
    //:: Give back the total.
    return total;
}

}  // namespace even_sum
```
## Trace
Columns: n, total, number
Input 1:
```
6
```
Input 2:
```
9
```
```cpp
#include <iostream>
#include <print>

int odd_sum(int n)
{
    int total {0};
    for (int number {1}; number < n; number += 2) {
        total += number;
    }
    return total;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", odd_sum(n));
}
```
