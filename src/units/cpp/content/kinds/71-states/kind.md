# Kind 71: Try states in order of moves until one reaches the goal
After: 22, 24, 25, 48, 62, 64
## Example
Write a function `reach::fewest(int start, int goal)` that returns the fewest moves that turn start into goal, where each move adds 1 to the number or doubles it.
Write in namespace `reach` the type `enum class Outcome { reached, unreachable }` and the type `struct result { Outcome outcome; int moves; }`, which the function returns: `reached` and the fewest moves, or `unreachable` and 0 when no moves reach the goal.
Limits: 1 ≤ start ≤ 1000; 1 ≤ goal ≤ 1000.
```cpp
#pragma once

#include <deque>
#include <set>
#include <vector>

namespace reach {

//: Name each possible value in an `enum class`.
enum class Outcome { reached, unreachable };

//: Write a struct that holds several values together.
struct result {
    Outcome outcome {Outcome::unreachable};
    int moves {0};
};

//: Write a struct that holds several values together.
struct state {
    int value {0};
    int moves {0};
};

//: Write a function that gives back the next states from a state.
std::vector<state> next_states(const state& now)
{
    //:: Give back the states after adding 1 or doubling, one move later.
    return {{now.value + 1, now.moves + 1},
            {now.value * 2, now.moves + 1}};
}

//: Write a function that tries each state in order of moves, and gives back the first that reaches the goal.
result fewest(int start, int goal)
{
    //:: Start the states to try and the values seen with the start.
    std::deque<state> to_try {{start, 0}};
    //@ Keep the values seen in a `std::set`, where `contains` tests for a value and `insert` adds one.
    std::set<int> seen {start};
    //:: While states are left, take the first, give back the answer when it holds the goal, else add each next state not yet seen.
    while (!to_try.empty()) {
        const state now {to_try.front()};
        to_try.pop_front();
        if (now.value == goal) {
            return {Outcome::reached, now.moves};
        }
        for (const state next : next_states(now)) {
            const bool fits {next.value <= goal};
            if (fits && !seen.contains(next.value)) {
                seen.insert(next.value);
                to_try.push_back(next);
            }
        }
    }
    //:: Give back unreachable when no state reaches the goal.
    return {Outcome::unreachable, 0};
}

}  // namespace reach
```
## Trace
Columns: value, limit, next
Input 1:
```
3 10
```
Input 2:
```
6 10
```
```cpp
#include <iostream>
#include <print>
#include <vector>
std::vector<int> next_states(int value, int limit) noexcept
{
    std::vector<int> next(1, value + 1);
    if (value * 2 <= limit) {
        next.push_back(value * 2);
    }
    return next;
}
int main()
{
    int value {0};
    int limit {0};
    std::cin >> value >> limit;
    std::println("{}", next_states(value, limit));
}
```
