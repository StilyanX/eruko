# Kind 36: Name the results, then pick one from a total
After: 12, 16, 24
## Example
Write a function `scores::outcome(const std::vector<int>& points)` that returns the outcome of a game from the points won and lost in it.
The header also defines the result type, `enum class scores::result { loss, draw, win }`.
It returns `loss` when the sum of the points is below 0, `draw` when it is 0, and `win` when it is above 0.
Limits: 0 ≤ number of points ≤ 100; -100 ≤ each point ≤ 100.
```cpp
#pragma once

#include <vector>

namespace scores {

//: Name each possible value in an `enum class`.
enum class result { loss, draw, win };

//: Write a function that adds to a total, then gives back an answer from the total.
result outcome(const std::vector<int>& points)
{
    //:: Start the total at zero.
    int total {0};
    //:: Add each number of the list to the total.
    for (const int point : points) {
        total += point;
    }
    //:: Give back loss for a total below 0, draw for 0, else win.
    if (total < 0) {
        return result::loss;
    } else if (total == 0) {
        return result::draw;
    } else {
        return result::win;
    }
}

}  // namespace scores
```
## Trace
Columns: n, total, number
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

enum class size { small, large };
size size_of(int n)
{
    int total {0};
    for (int number {1}; number <= n; ++number) {
        total += number;
    }
    return total < 10 ? size::small : size::large;
}
int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", size_of(n) == size::large);
}
```
