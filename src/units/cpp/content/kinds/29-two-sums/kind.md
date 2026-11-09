# Kind 29: Add up two sequences and combine the totals
After: 13, 18
## Example
Write a function `parity::sum_of_evens(int n)` that returns the sum of the even integers from 1 to n.
Write a function `parity::sum_of_odds(int n)` that returns the sum of the odd integers from 1 to n.
Write a function `parity::gap(int n)` that returns the first of these minus the second.
Limits: 1 ≤ n ≤ 1000.
```cpp
#pragma once

namespace parity {

//: Write a function that adds up a sequence and gives back the total.
int sum_of_evens(int n)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add each even integer from 2 to n to the total.
    for (int number {2}; number <= n; number += 2) {
        total += number;
    }
    //:: Give back the total.
    return total;
}

//: Write a function that adds up a sequence and gives back the total.
int sum_of_odds(int n)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add each odd integer from 1 to n to the total.
    for (int number {1}; number <= n; number += 2) {
        total += number;
    }
    //:: Give back the total.
    return total;
}

//: Write a function that calls the functions above and gives back the answer.
int gap(int n)
{
    return sum_of_evens(n) - sum_of_odds(n);
}

}  // namespace parity
```
## Trace
Columns: first, second, n, total, number
Input 1:
```
0 2
```
Input 2:
```
3 1
```
```cpp
#include <iostream>
#include <print>
int sum_to(int n)
{
    int total {0};
    for (int number {1}; number <= n; ++number) {
        total += number;
    }
    return total;
}
int main()
{
    int first {0};
    int second {0};
    std::cin >> first >> second;
    std::println("{}", sum_to(first) + sum_to(second));
}
```
