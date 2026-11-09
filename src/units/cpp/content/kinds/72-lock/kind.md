# Kind 72: Lock the data before each change
After: 15, 21
## Example
Write a class `vote::box` with the members `open()`, `cast()`, `close()` and `votes()`, safe to call from many threads at once.
A new box is closed and holds 0 votes.
`open()` opens it, `cast()` adds one vote, `close()` closes it, and `votes()` returns the number of votes.
Each throws `std::runtime_error`: `open()` when the box is open; `cast()` and `close()` when it is closed; and `votes()` when it is open.
Limits: none
```cpp
#pragma once

#include <mutex>
#include <stdexcept>

namespace vote {

//: Write a class that keeps its data in private members.
class box {
    int votes_ {0};
    bool open_ {false};
    //@ Hold a `std::mutex`, from `mutex`, which only one thread at a time can lock.
    std::mutex mutex_ {};
public:
    //: Write member functions that lock the data, stop with an error when a test fails, else change it.
    void open()
    {
        //:: Stop with an error when the box is open, else open it.
        //@ Lock the mutex with `std::lock_guard`, which unlocks it when the function ends.
        const std::lock_guard lock {mutex_};
        if (open_) {
            //@ Stop with a `std::runtime_error`, the error for a call that comes at the wrong time.
            throw std::runtime_error {"the box is open"};
        }
        open_ = true;
    }
    void cast()
    {
        //:: Stop with an error when the box is closed, else add one vote.
        const std::lock_guard lock {mutex_};
        if (!open_) {
            throw std::runtime_error {"the box is closed"};
        }
        ++votes_;
    }
    void close()
    {
        //:: Stop with an error when the box is closed, else close it.
        const std::lock_guard lock {mutex_};
        if (!open_) {
            throw std::runtime_error {"the box is closed"};
        }
        open_ = false;
    }
    //: Write a member function that locks the data, stops with an error when a test fails, else gives back the data.
    int votes()
    {
        const std::lock_guard lock {mutex_};
        if (open_) {
            throw std::runtime_error {"the box is open"};
        }
        return votes_;
    }
};

}  // namespace vote
```
## Trace
Columns: total, number
Input 1:
```
4 -1 5
```
Input 2:
```
3 3 3
```
```cpp
#include <iostream>
#include <mutex>
#include <print>

int main()
{
    std::mutex mutex {};
    int total {0};
    int number {0};
    while (std::cin >> number) {
        const std::lock_guard lock {mutex};
        if (number < 0) {
            break;
        }
        total += number;
    }
    std::println("{}", total);
}
```
