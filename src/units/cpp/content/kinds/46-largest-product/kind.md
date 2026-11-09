# Kind 46: Keep the largest of the products
After: 9, 22
## Example
Write a function `window::largest_product(const std::vector<int>& numbers, int length)` that returns the largest product of `length` numbers side by side in the list.
Limits: 1 ≤ length ≤ size of the list ≤ 100; 0 ≤ each number ≤ 9.
```cpp
#pragma once

#include <algorithm>
#include <vector>

namespace window {

//: Write a function that multiplies a sequence and gives back the product.
//@ Give the function a `const std::vector<int>&` parameter, which reads the caller's list without copying it.
int product(const std::vector<int>& numbers, int start,
            int length)
{
    //:: Start the product at 1.
    int result {1};
    //:: Times the product by each number of the length from start.
    for (int index {start}; index < start + length; ++index) {
        //@ Multiply a variable and keep the result with `*=`.
        result *= numbers[index];
    }
    //:: Give back the product.
    return result;
}

//: Write a function that keeps the largest value and gives it back.
int largest_product(const std::vector<int>& numbers, int length)
{
    //:: Start the largest at zero.
    int largest {0};
    //:: For each start, keep the product of the length from it when it is larger.
    //@ Get the number of items in a list, as an `int`, with `std::ssize`.
    for (int start {0}; start + length <= std::ssize(numbers);
         ++start) {
        //@ Get the larger of 2 values with `std::max`, from `algorithm`.
        largest = std::max(largest,
                           product(numbers, start, length));
    }
    //:: Give back the largest.
    return largest;
}

}  // namespace window
```
## Trace
Columns: n, previous, largest, index, number
Input 1:
```
2
4 5
```
Input 2:
```
4
1 3 2 5
```
```cpp
#include <algorithm>
#include <iostream>
#include <print>
int main()
{
    int n {0};
    std::cin >> n;
    int previous {0};
    std::cin >> previous;
    int largest {0};
    for (int index {1}; index < n; ++index) {
        int number {0};
        std::cin >> number;
        largest = std::max(largest, previous * number);
        previous = number;
    }
    std::println("{}", largest);
}
```
