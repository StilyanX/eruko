# Kind 62: Keep a queue of fixed size
After: 15, 25, 48, 52
## Example
Write a class `bounded::queue<T>` whose objects hold at most as many items of type T as the `std::size_t` given to its constructor; T may be any type.
`take()` removes the item put in first and returns it; when there is none it throws `std::domain_error`.
`put(item)` adds the item last; when the queue is full it throws `std::domain_error`.
`force(item)` adds the item last; when the queue is full it first removes the item put in first.
`reset()` removes every item.
Limits: 1 ≤ size given to the constructor ≤ 100.
```cpp
#pragma once

#include <cstddef>
//@ Include `deque`, the part of the library that holds `std::deque`, a list that adds and takes items at both ends.
#include <deque>
#include <stdexcept>

namespace bounded {

//: Write a class that keeps its data in private members.
//@ Make the class a template with `template <typename T>`, so its items may be of any type `T`.
template <typename T>
class queue {
    std::deque<T> items_ {};
    std::size_t capacity_ {0};
public:
    //: Write a constructor that sets the data.
    explicit queue(std::size_t capacity)
        : capacity_ {capacity}
    {
    }
    //: Write a member function that gives back the oldest item and removes it, or throws when there is none.
    T take()
    {
        if (items_.empty()) {
            throw std::domain_error {"the queue is empty"};
        }
        const T item {items_.front()};
        //@ Take the first item off a `std::deque` with `pop_front()`.
        items_.pop_front();
        return item;
    }
    //: Write a member function that adds an item at the end, or throws when the buffer is full.
    void put(const T& item)
    {
        if (items_.size() == capacity_) {
            throw std::domain_error {"the queue is full"};
        }
        items_.push_back(item);
    }
    //: Write a member function that adds an item at the end, removing the oldest first when the buffer is full.
    void force(const T& item)
    {
        if (items_.size() == capacity_) {
            items_.pop_front();
        }
        items_.push_back(item);
    }
    //: Write a member function that removes every item.
    void reset()
    {
        //@ Remove every item of a list with `clear()`.
        items_.clear();
    }
};

}  // namespace bounded
```
## Trace
Columns: older, newer, number
Input 1:
```
5 8
```
Input 2:
```
4 7 1
```
```cpp
#include <iostream>
#include <print>

int second_last()
{
    int older {0};
    int newer {0};
    int number {0};
    while (std::cin >> number) {
        older = newer;
        newer = number;
    }
    return older;
}
int main()
{
    std::println("{}", second_last());
}
```
