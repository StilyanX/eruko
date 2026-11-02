# Kind 3: Choose between two results
After: 1
## Example
Write a program that reads an integer and prints Yes when it is even and No when it is odd.

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
    //: Print the first result if the test holds, else the second.
    //@ Compare 2 values with `==` (equal), `!=` (not equal), `<`, `<=`, `>` or `>=`.
    //@ Run the lines in the first `{ }` when the test in brackets holds, else the lines after `else`.
    if (number % 2 == 0) {
        //@ Print fixed words by writing them alone between the quotes.
        std::println("Yes");
    } else {
        std::println("No");
    }
}
```
## Trace
Columns: first, second
Input 1:
```
4 9
```
Input 2:
```
8 3
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int first {0};
    int second {0};
    std::cin >> first >> second;
    if (first > second) {
        std::println("{}", first - second);
    } else {
        std::println("{}", second - first);
    }
}
```
