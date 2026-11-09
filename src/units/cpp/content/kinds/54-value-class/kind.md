# Kind 54: Make a value class that works out new objects
After: 15, 48
## Example
Write a class `compass::heading` whose objects each hold a direction in whole degrees, from 0 to 359.
Its constructor takes a number of degrees as an `int`, and keeps it turned into the range 0 to 359: 360 is 0 and -90 is 270.
`heading::north()` returns the heading at 0 degrees.
`turned(int degrees)` returns the heading that many degrees further round; a negative number turns back.
`degrees()` returns the degrees the heading holds.
`==` and `!=` compare two headings by their degrees.
Limits: -100 000 ≤ degrees ≤ 100 000.
```cpp
#pragma once

namespace compass {

//: Write a class with a constructor that sets the data.
class heading {
public:
    explicit heading(int degrees)
        : degrees_ {(degrees % 360 + 360) % 360}
    {
    }
    //: Write a member function that gives back a value worked out in one step.
    //@ Mark a member function `static` when it needs no object, and call it as `heading::north()`.
    static heading north()
    {
        return heading {0};
    }
    //: Write a member function that gives back a value worked out in one step.
    heading turned(int degrees) const
    {
        //@ Make a new object of the class with its name and the value in `{ }`.
        return heading {degrees_ + degrees};
    }
    //: Write a member function that gives back a value worked out in one step.
    int degrees() const
    {
        return degrees_;
    }
    //: Compare 2 objects by their values with `==` and `!=`.
    //@ Write `operator==` as `= default`, which compares each member, and `!=` comes with it.
    bool operator==(const heading& other) const = default;
//: Keep the data in private members.
private:
    int degrees_ {0};
};

}  // namespace compass
```
## Trace
Columns: hour, more
Input 1:
```
7
```
Input 2:
```
30
```
```cpp
#include <iostream>
#include <print>

int later(int hour, int more)
{
    return (hour + more) % 24;
}

int main()
{
    int more {0};
    std::cin >> more;
    const int hour {later(20, more)};
    std::println("{}", hour);
}
```
