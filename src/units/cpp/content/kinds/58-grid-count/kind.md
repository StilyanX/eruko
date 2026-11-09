# Kind 58: Count around each square of a grid
After: 7, 13, 22
## Example
Write a function `walls::count_walls(const std::vector<std::string>& grid)` that returns a grid of the same size whose each square holds, as a digit, the number of `#` squares in the 3 rows and 3 columns around it, itself included.
The grid is a rectangle of rows of the same length; each square is `#` or `.`.
Limits: 0 ≤ rows ≤ 100; 0 ≤ length of each row ≤ 100.
```cpp
#pragma once

#include <string>
#include <vector>

namespace walls {

//: Write a function that gives back a value worked out in one step.
//@ Pass a grid as `const std::vector<std::string>&`, a list of strings, one string for each row.
bool is_wall(const std::vector<std::string>& grid, int r, int c)
{
    //:: Give back whether the square is in the grid and holds a `#`.
    //@ Get the character in row r and column c with `grid[r][c]`.
    return r >= 0 && r < std::ssize(grid) && c >= 0
           && c < std::ssize(grid[r]) && grid[r][c] == '#';
}

//: Write a function that counts the items that pass a test and gives back the count.
int walls_around(const std::vector<std::string>& grid, int row,
                 int column)
{
    //:: Start the count at zero.
    int count {0};
    //:: Add one for each wall in the 3 rows and 3 columns around it.
    //@ Put a `for` inside a `for`, so the inner one runs in full at each step of the outer one.
    for (int r {row - 1}; r <= row + 1; ++r) {
        for (int c {column - 1}; c <= column + 1; ++c) {
            if (is_wall(grid, r, c)) {
                ++count;
            }
        }
    }
    //:: Give back the count.
    return count;
}

//: Write a function that builds a new grid from the answer for each square of the old one.
std::vector<std::string> count_walls(
    const std::vector<std::string>& grid)
{
    //:: Start the result as a copy of the grid.
    std::vector<std::string> result {grid};
    //:: Put the count of walls around each square in its place.
    for (int r {0}; r < std::ssize(grid); ++r) {
        for (int c {0}; c < std::ssize(grid[r]); ++c) {
            //@ Turn a number from 0 to 9 into its digit with `'0' +`.
            result[r][c] = '0' + walls_around(grid, r, c);
        }
    }
    //:: Give back the result.
    return result;
}

}  // namespace walls
```
## Trace
Columns: row, column, count, c
Input 1:
```
#.# 1
```
Input 2:
```
##.# 3
```
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string row {};
    int column {0};
    std::cin >> row >> column;
    int count {0};
    for (int c {column - 1}; c <= column + 1; ++c) {
        if (c >= 0 && c < std::ssize(row) && row[c] == '#') {
            ++count;
        }
    }
    std::println("{}", count);
}
```
