# Kind 9: Keep the largest or the smallest
After: 1, 3, 4, 6, 7, 8
## Example
Write a program that reads n integers and prints the largest of them.

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
    //: Read the first number and keep it.
    int largest {0};
    std::cin >> largest;
    //: For each index from 1 to n - 1, read a number and compare it with the kept one.
    for (int index {1}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        //:: Keep the number when it is larger.
        if (number > largest) {
            largest = number;
        }
    }
    //: Print the value.
    std::println("{}", largest);
}
```
## Trace
Columns: n, smallest, index, number
Input 1:
```
2
7 4
```
Input 2:
```
4
6 -2 3 -5
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int smallest {0};
    std::cin >> smallest;
    for (int index {1}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        if (number < smallest) {
            smallest = number;
        }
    }
    std::println("{}", smallest);
}
```
