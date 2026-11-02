# Kind 1: Compute and print a value
After: none
## Example
Write a program that reads 2 integers and prints their sum.

Input: one line, 2 integers separated by a space.
Output: one line, one integer.
Limits: -1000 ≤ each integer ≤ 1000.

```cpp
//@ Include `iostream`, the part of the library that reads input.
#include <iostream>
//@ Include `print`, the part of the library that prints output.
#include <print>

//@ Write the steps inside `main`, where the program starts.
int main()
{
    //: Read the input.
    //@ Make an `int` variable, which holds an integer, and start it at zero with `{0}`.
    int first {0};
    int second {0};
    //@ Read the numbers from the input with `std::cin` and `>>`.
    std::cin >> first >> second;
    //: Print the value.
    //@ Print with `std::println`, which puts the value in place of `{}` and ends the line.
    //@ Work out the value with `+`, `-`, `*`, `/` and `%`, where `/` drops the remainder and `%` gives it.
    std::println("{}", first + second);
}
```
## Trace
Columns: width, height, area
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
    int width {0};
    int height {0};
    std::cin >> width >> height;
    int area {width * height};
    std::println("{}", area);
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
