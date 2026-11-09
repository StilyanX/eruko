# Kind 18: Work out each value, then add them up
After: 6, 12, 13
## Example
Write a function `cubes::cube(int number)` that returns number times itself times itself.
Write a function `cubes::total(int n)` that returns the sum of `cube(number)` for each number from 1 to n.
Limits: 1 ≤ number ≤ 100; 0 ≤ n ≤ 100.
```cpp
#pragma once

namespace cubes {

//: Write a function that gives back a value worked out in one step.
int cube(int number)
{
    //:: Give back the cube of the number.
    return number * number * number;
}

//: Write a function that adds up a sequence and gives back the total.
int total(int n)
{
    //:: Start the total at zero.
    int sum {0};
    //:: Add the cube of each integer from 1 to n to the total.
    for (int number {1}; number <= n; ++number) {
        sum += cube(number);
    }
    //:: Give back the total.
    return sum;
}

}  // namespace cubes
```
## Trace
Columns: n, total, number
Input 1:
```
3
```
Input 2:
```
5
```
```cpp
#include <iostream>
#include <print>

int value(int number)
{
    return 2 * number + 1;
}

int main()
{
    int n {0};
    std::cin >> n;
    int total {0};
    for (int number {1}; number <= n; ++number) {
        total += value(number);
    }
    std::println("{}", total);
}
```
