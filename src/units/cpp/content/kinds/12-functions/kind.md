# Kind 12: Split a task into functions
After: 1, 2, 3, 4, 5, 6, 7, 8, 10
## Example
Write a program that reads n scores and prints the grade of each.
A score of 90 or more is A, 70 to 89 is B, and 69 or less is C.

Input: line 1, n; line 2, n integers separated by spaces.
Output: n lines, one per score in the order read.
Limits: 1 ≤ n ≤ 100, 0 ≤ each integer ≤ 100.

```cpp
#include <iostream>
#include <print>
#include <string>

//: Write a function above main that takes one number and gives back the answer for it.
//@ Write the type of the answer, here `std::string`, before the function's name.
//@ Give the function an `int` parameter, a copy of the number it is called with.
std::string grade(int score)
{
    //:: Give back the grade for the score.
    if (score >= 90) {
        //@ Give back a value with `return`, which ends the function.
        return "A";
    } else if (score >= 70) {
        return "B";
    } else {
        return "C";
    }
}

int main()
{
    //: Read how many numbers follow.
    int n {0};
    std::cin >> n;
    //: For each index from 0 to n - 1, read a number and print the function's answer.
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        //@ Call the function with the number in brackets, and print what it returns.
        std::println("{}", grade(number));
    }
}
```
## Trace
Columns: number, n, index
Input 1:
```
2
1 4
```
Input 2:
```
3
0 2 5
```
```cpp
#include <iostream>
#include <print>

int value(int number)
{
    return 5 + 3 * number;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        std::println("{}", value(number));
    }
}
```
