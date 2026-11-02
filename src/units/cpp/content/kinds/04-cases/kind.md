# Kind 4: Choose among several cases
After: 1, 2, 3
## Example
Write a program that reads an integer and prints whether it is negative, zero or positive.

Input: one line, one integer.
Output: one line.
Limits: -1000 ≤ the integer ≤ 1000.

```cpp
#include <iostream>
#include <print>

int main()
{
    //: Read the input.
    int number {0};
    std::cin >> number;
    //: Test each case in order, and print the result of the first that holds.
    if (number < 0) {
        std::println("negative");
    //@ Test the next case with `else if` when every case before it fails.
    } else if (number == 0) {
        std::println("zero");
    } else {
        std::println("positive");
    }
}
```
## Trace
Columns: first, second
Input 1:
```
95 70
```
Input 2:
```
76 70
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int first {0};
    int second {0};
    std::cin >> first >> second;
    if (first <= second) {
        std::println("0");
    } else if (first <= second + 20) {
        std::println("{}", (first - second) * 10);
    } else {
        std::println("400");
    }
}
```
