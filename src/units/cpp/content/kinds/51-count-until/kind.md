# Kind 51: Count the numbers that pass a test until enough are found
After: 12, 14, 20, 21
## Example
Write a function `even_digits::nth(int n)` that returns the nth whole number above 0 whose digits are all even, counting 2 as the first.
Limits: 1 ≤ n ≤ 1000.
```cpp
#pragma once

namespace even_digits {

//: Write a function that gives back false at the first item that fails a test, else true.
bool all_even(int number)
{
    //:: Give back false at the first odd digit.
    while (number > 0) {
        if (number % 2 != 0) {
            return false;
        }
        number /= 10;
    }
    //:: Give back true.
    return true;
}

//: Write a function that repeats a step until a condition holds and gives back the result.
int nth(int n)
{
    //:: Start the number at 1 and the count at zero.
    int number {1};
    int count {0};
    //:: Add one to the number, and one to the count when its digits are all even, until the count is n.
    while (count < n) {
        ++number;
        if (all_even(number)) {
            ++count;
        }
    }
    //:: Give back the number.
    return number;
}

}  // namespace even_digits
```
## Trace
Columns: n, number, count
Input 1:
```
2
```
Input 2:
```
5
```
```cpp
#include <iostream>
#include <print>
bool passes(int number)
{
    return number % 3 != 0;
}
int main()
{
    int n {0};
    std::cin >> n;
    int number {0};
    int count {0};
    while (count < n) {
        ++number;
        count += passes(number) ? 1 : 0;
    }
    std::println("{}", number);
}
```
