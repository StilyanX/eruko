# Kind 7: Count the items that pass a test
After: 1, 3, 6
## Example
Write a program that reads n integers and prints how many of them are negative.

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
    //: Start the count at zero.
    int count {0};
    //: For each index from 0 to n - 1, read a number and test it.
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        //:: Add one when the number is negative.
        if (number < 0) {
            ++count;
        }
    }
    //: Print the count.
    std::println("{}", count);
}
```
## Trace
Columns: n, count, index, number
Input 1:
```
2
12 5
```
Input 2:
```
4
10 11 -20 99
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int count {0};
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        if (number > 10) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
