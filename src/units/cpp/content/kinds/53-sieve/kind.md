# Kind 53: Mark the multiples and keep what is left
After: 14, 22, 37, 50
## Example
Write a function `square_free::numbers(int n)` that returns a `std::vector<int>` of every number from 1 to n that no square above 1 divides, smallest first.
Find them by marking the multiples of each square 4, 9, 16 and so on up to n.
Limits: 1 ≤ n ≤ 1 000 000.
```cpp
#pragma once

#include <vector>

namespace square_free {

//: Write a function that marks the multiples of each number, and gives back the numbers left unmarked.
std::vector<int> numbers(int n)
{
    //:: Start with no number from 0 to n marked.
    //@ Make a list of a given length, each item the same, with round brackets: `(size, 0)`.
    std::vector<bool> marked(n + 1, false);
    //:: Mark the multiples of each square from 4 to n.
    for (int root {2}; root * root <= n; ++root) {
        const int square {root * root};
        for (int m {square}; m <= n; m += square) {
            marked.at(m) = true;
        }
    }
    //:: Start the result as an empty list.
    std::vector<int> result {};
    //:: Keep each unmarked number from 1 to n.
    for (int number {1}; number <= n; ++number) {
        if (!marked.at(number)) {
            result.push_back(number);
        }
    }
    //:: Give back the result.
    return result;
}

}  // namespace square_free
```
## Trace
Columns: n, step, m, marked
Input 1:
```
7 3
```
Input 2:
```
10 4
```
```cpp
#include <iostream>
#include <print>
#include <vector>
std::vector<int> marks(int n, int step) noexcept
{
    std::vector<int> marked(n + 1, 0);
    for (int m {step}; m <= n; m += step) {
        marked[m] = 1;
    }
    return marked;
}
int main()
{
    int n {0};
    int step {0};
    std::cin >> n >> step;
    std::println("{}", marks(n, step));
}
```
