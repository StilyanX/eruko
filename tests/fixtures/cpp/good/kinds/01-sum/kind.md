# Kind 1: Compute and print a value
After: none
## Example
Write a program that reads two integers and prints their sum.

Input: one line, two integers separated by a space.
Output: one line, their sum.
Limits: -1000 ≤ each integer ≤ 1000.

```cpp
#include <iostream>
#include <print>

//@ Write the steps inside main, where the program starts.
int main()
{
    //: Read the two numbers.
    int first {0};
    int second {0};
    std::cin >> first >> second;
    //: Print the value.
    std::println("{}", first + second);
}
```
## Trace
Columns: first, total
Input 1:
```
3 4
```
Input 2:
```
5 6
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int first {0};
    int second {0};
    std::cin >> first >> second;
    int total {first + second};
    std::println("{}", total);
}
```
## Start
Columns: price, count, total
Input:
```
7 3
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int price {0};
    int count {0};
    std::cin >> price >> count;
    int total {price * count};
    std::println("{}", total);
}
```
