# Kind 35: Build each row from the row before it
After: 22, 25
## Example
Write a function `doubling::rows(std::size_t n)` that returns n rows as a `std::vector<std::vector<int>>`.
Row 1 is `{1}`. Each row after it is the row before with one more value at its end: twice the last value of the row before.
For n = 0 it returns an empty list.
Limits: 0 ≤ n ≤ 20.
```cpp
#pragma once

#include <cstddef>
#include <vector>

namespace doubling {

//: Write a function that builds each row from the row before it.
//@ Hold a size or an index with `std::size_t`, which is never below 0.
std::vector<std::vector<int>> rows(std::size_t n)
{
    //:: Start the result as an empty list.
    //@ Make a list of lists with `std::vector<std::vector<int>>`, each item a row.
    std::vector<std::vector<int>> result {};
    //:: Start the row as `{1}`.
    std::vector<int> row {1};
    //:: Add each row, then make the next by adding the last value doubled.
    for (std::size_t index {0}; index < n; ++index) {
        result.push_back(row);
        row.push_back(2 * row.back());
    }
    //:: Give back the result.
    return result;
}

}  // namespace doubling
```
## Trace
Columns: n, number, all
Input 1:
```
3
```
Input 2:
```
5
```
```cpp
#include <iostream>
#include <print>
#include <vector>
std::vector<std::vector<int>> rows(int n) noexcept
{
    std::vector<std::vector<int>> all(1, std::vector<int> {1});
    for (int number {2}; number <= n; ++number) {
        all.push_back(all.back());
        all.back().push_back(number);
    }
    return all;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", rows(n));
}
```
