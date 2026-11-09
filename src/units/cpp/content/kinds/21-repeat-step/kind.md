# Kind 21: Repeat a step in a function until a condition holds
After: 10, 12
## Example
Write a function `doubling::steps(int start, int goal)` that returns how many times start must be doubled to reach goal or more.
For a start already at goal or more it returns 0.
Limits: 1 ≤ start ≤ 1 000 000; 1 ≤ goal ≤ 1 000 000.
```cpp
#pragma once

namespace doubling {

//: Write a function that repeats a step until a condition holds and gives back the result.
int steps(int start, int goal)
{
    //:: Start the count at zero.
    int count {0};
    //:: While the test holds, change the number and add one to the count.
    while (start < goal) {
        //@ Multiply a variable and keep the result with `*=`.
        start *= 2;
        ++count;
    }
    //:: Give back the count.
    return count;
}

}  // namespace doubling
```
## Trace
Columns: number, count
Input 1:
```
6
```
Input 2:
```
37
```
```cpp
#include <iostream>
#include <print>
int halvings(int number)
{
    int count {0};
    while (number > 0) {
        number /= 2;
        ++count;
    }
    return count;
}

int main()
{
    int number {0};
    std::cin >> number;
    std::println("{}", halvings(number));
}
```
