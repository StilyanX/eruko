# Kind 59: Name the results, then test for a part inside a list
After: 14, 20, 24, 27
## Example
Write a function `pair_check::found(const std::vector<int>& list, int first, int second)` that returns how many of the 2 values the list holds, as a value of `enum class pair_check::Found { both, one, neither }`, which the header defines.
Return `both` when the list holds both values, `one` when it holds just one of them, else `neither`.
Limits: 0 ≤ length of the list ≤ 1000.
```cpp
#pragma once

#include <vector>

namespace pair_check {

//: Name each possible value in an `enum class`.
enum class Found { both, one, neither };

//: Write a function that gives back true at the first item that passes a test, else false.
bool holds(const std::vector<int>& list, int value)
{
    //:: Give back true at the first item equal to the value.
    for (const int item : list) {
        if (item == value) {
            return true;
        }
    }
    //:: Give back false, since no item matched.
    return false;
}

//: Write a function that tests each case in order and gives back the result of the first that holds.
Found found(const std::vector<int>& list, int first, int second)
{
    //:: Give back both when the list holds both values, one when it holds one, else neither.
    const bool has_first {holds(list, first)};
    const bool has_second {holds(list, second)};
    if (has_first && has_second) {
        return Found::both;
    //@ Join 2 tests with `||`, which holds when either one holds.
    } else if (has_first || has_second) {
        return Found::one;
    } else {
        return Found::neither;
    }
}

}  // namespace pair_check
```
## Trace
Columns: list, item
Input 1:
```
3 -1 4
```
Input 2:
```
5 6 7
```
```cpp
#include <iostream>
#include <print>
#include <vector>
bool has_negative(const std::vector<int>& list)
{
    for (const int item : list) {
        if (item < 0) {
            return true;
        }
    }
    return false;
}
int main()
{
    std::vector<int> list(3, 0);
    std::cin >> list[0] >> list[1] >> list[2];
    std::println("{}", has_negative(list));
}
```
