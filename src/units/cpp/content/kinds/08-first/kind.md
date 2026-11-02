# Kind 8: Find the first item that passes a test, or report none
After: 1, 3, 6, 7
## Example
Write a program that reads n integers and prints the position of the first negative one.
Positions count from 1.

Input: line 1, n; line 2, n integers separated by spaces.
Output: one line, one integer, or -1 when no integer is negative.
Limits: 1 ≤ n ≤ 100, -1000 ≤ each integer ≤ 1000.

```cpp
#include <iostream>
#include <print>

int main()
{
    //: Read how many numbers follow.
    int n {0};
    std::cin >> n;
    //: Start the position at -1, the mark for none found.
    int position {-1};
    //: For each index from 0 to n - 1, read a number and test it.
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        //:: Keep the position of the first negative number.
        //@ Join 2 tests with `&&`, which holds only when both hold.
        if (position == -1 && number < 0) {
            //@ Give a variable a new value with `=`, which is not the test `==`.
            //@ Turn the index into a position counting from 1 with `index + 1`.
            position = index + 1;
        }
    }
    //: Print the position.
    std::println("{}", position);
}
```
## Trace
Columns: n, position, index, number
Input 1:
```
2
2 8
```
Input 2:
```
3
5 4 3
```
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int position {-1};
    for (int index {0}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        if (position == -1 && number > 5) {
            position = index + 1;
        }
    }
    std::println("{}", position);
}
```
