# Kind 61: Fill a grid by walking and turning
After: 12, 13, 22, 35, 50
## Example
Write a function `times::table(int size)` that returns a square grid of `size` rows of `size` numbers each, as a `std::vector` of rows, each a `std::vector<int>`.
The cell in row r and column c, both counted from 1, holds r × c.
Size 0 gives the empty grid.
Limits: 0 ≤ size ≤ 100.
```cpp
#pragma once

#include <vector>

namespace times {

//: Give a type a short name.
//@ Give a type a short name with `using`, here `grid` for a list of rows.
using grid = std::vector<std::vector<int>>;

//: Write a function that gives back a value worked out in one step.
int cell(int row, int column)
{
    //:: Give back the product of the row's and the column's numbers, counted from 1.
    return (row + 1) * (column + 1);
}

//: Write a function that fills a grid and gives it back.
grid table(int size)
{
    //:: Start the grid with size rows of size zeros.
    //@ Make a list of a given length, each item the same, with round brackets: `(size, 0)`.
    grid result(size, std::vector<int>(size, 0));
    //:: Fill each cell of each row with its value.
    for (int row {0}; row < size; ++row) {
        for (int column {0}; column < size; ++column) {
            result[row][column] = cell(row, column);
        }
    }
    //:: Give back the grid.
    return result;
}

}  // namespace times
```
## Trace
Columns: size, index, result
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
using row = std::vector<int>;
row squares(int size) noexcept
{
    row result(size, 0);
    for (int index {0}; index < size; ++index) {
        result[index] = index * index;
    }
    return result;
}
int main()
{
    int size {0};
    std::cin >> size;
    std::println("{}", squares(size));
}
```
