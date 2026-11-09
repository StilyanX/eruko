# Kind 25: Keep data in a class, add to it and read it back
After: 12, 13, 15, 22
## Example
Write a class `scores::board` that keeps a list of scores, with these member functions.
`add(int score)` puts the score at the end of the list.
`all() const` returns the list as a `std::vector<int>`, in the order added.
`last() const` returns the last score added, or 0 when there is none.
A new board holds no scores.
Limits: 0 ≤ each score ≤ 1000; 0 ≤ scores added ≤ 100.
```cpp
#pragma once

#include <vector>

namespace scores {

//: Write a class that keeps its data in private members.
class board {
    std::vector<int> scores_ {};
public:
    //: Write a member function that adds an item to the data.
    //@ Write `void` as the type of a function that gives back nothing.
    void add(int score)
    {
        scores_.push_back(score);
    }
    //: Write a member function that gives back the data.
    std::vector<int> all() const
    {
        return scores_;
    }
    //: Write a member function that gives back part of the data.
    int last() const
    {
        //:: Give back 0 when the list is empty.
        //@ Test whether a list is empty with `empty()`, and get its last item with `back()`.
        if (scores_.empty()) {
            return 0;
        }
        //:: Give back the last item of the list.
        return scores_.back();
    }
};

}  // namespace scores
```
## Trace
Columns: amount, run
Input 1:
```
50 40
```
Input 2:
```
100 30 45
```
```cpp
#include <iostream>
#include <print>
struct timer
{
    int seconds {0};
};
void add(timer& run, int amount)
{
    run.seconds += amount;
}
int main()
{
    timer run {};
    for (int amount {0}; std::cin >> amount;) {
        add(run, amount);
    }
    std::println("{} {}", run.seconds / 60, run.seconds % 60);
}
```
