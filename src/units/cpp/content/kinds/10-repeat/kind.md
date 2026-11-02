# Kind 10: Repeat until a condition holds
After: 1, 3, 7, 8
## Example
Write a program that reads an integer and prints how many digits it has.

Input: one line, one integer.
Output: one line, one integer.
Limits: 1 ≤ the integer ≤ 1 000 000 000.

```cpp
#include <iostream>
#include <print>

int main()
{
    //: Read the input.
    int number {0};
    std::cin >> number;
    //: Start the count at zero.
    int count {0};
    //: While the test holds, change the number and add one to the count.
    //@ Repeat the lines in `{ }` with `while`, as long as the test in brackets holds.
    while (number > 0) {
        //:: Drop the last digit.
        //@ Divide a variable and keep the result with `/=`.
        number /= 10;
        //:: Add one to the count.
        ++count;
    }
    //: Print the count.
    std::println("{}", count);
}
```
## Trace
Columns: number, count
Input 1:
```
12
```
Input 2:
```
40
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int number {0};
    std::cin >> number;
    int count {0};
    while (number % 2 == 0) {
        number /= 2;
        ++count;
    }
    std::println("{}", count);
}
```
