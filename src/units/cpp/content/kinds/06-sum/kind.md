# Kind 6: Add up a sequence
After: 1, 3, 4
## Example
Write a program that reads n integers and prints their sum.

Input: line 1, n; line 2, n integers separated by spaces.
Output: one line, one integer.
Limits: 1 ≤ n ≤ 100, -1000 ≤ each integer ≤ 1000.

```cpp
#include <iostream>
#include <print>

int main()
{
    //: Read how many numbers follow.
    int n {0};
    std::cin >> n;
    //: Start the total at zero.
    int total {0};
    //: For each index from 0 to n - 1, read a number and add to the total.
    //@ Repeat the lines in `{ }` with `for`, once for each index from 0 to n - 1.
    //@ Add one to a variable with `++`.
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        //:: Add the number to the total.
        //@ Add to a variable with `+=`.
        total += number;
    }
    //: Print the total.
    std::println("{}", total);
}
```
## Trace
Columns: n, total, index, number
Input 1:
```
2
4 -1
```
Input 2:
```
2
10 -3
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int total {0};
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        total += 2 * number;
    }
    std::println("{}", total);
}
```
