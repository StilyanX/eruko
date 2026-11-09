# Kind 43: Halve the range until the value is found
After: 10, 12, 13
## Example
Write a function `root::square_root(int n)` that returns the whole number whose square is n.
When no whole number has n as its square, it throws `std::domain_error`.
Limits: 0 ≤ n ≤ 10 000.
```cpp
#pragma once

//@ Include `stdexcept`, the part of the library that holds the standard errors.
#include <stdexcept>

namespace root {

//: Write a function that halves the range that can hold the value until it finds it.
int square_root(int n)
{
    //:: Start the range as every number from 0 to n.
    int low {0};
    int high {n};
    //:: Give back the middle number when its square is n, else keep the half that can hold the root.
    while (low <= high) {
        const int middle {low + (high - low) / 2};
        if (middle * middle == n) {
            return middle;
        } else if (middle * middle < n) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    //:: Throw `std::domain_error` when the range is empty.
    //@ Stop with an error with `throw`, here a `std::domain_error` that holds a message.
    throw std::domain_error {"n is not a square"};
}

}  // namespace root
```
## Trace
Columns: n, low, step
Input 1:
```
27
```
Input 2:
```
343
```
```cpp
#include <iostream>
#include <print>
int cube_root(int n)
{
    int low {0};
    for (int step {4}; step > 0; step /= 2) {
        if ((low + step) * (low + step) * (low + step) <= n) {
            low += step;
        }
    }
    return low;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", cube_root(n));
}
```
