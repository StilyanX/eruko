# Kind 52: Check data in a constructor, then work out an answer
After: 15, 21
## Example
Write a class `shapes::rectangle` whose constructor takes a width and a height, each an `int`, and throws `std::domain_error` when either is below 1.
`width()` and `height()` return them, and `area()` returns the width times the height.
Limits: -1000 ≤ width, height ≤ 1000.
```cpp
#pragma once

//@ Include `stdexcept`, the part of the library that holds the standard errors.
#include <stdexcept>

namespace shapes {

//: Write a class that keeps its data in private members.
class rectangle {
    int width_ {0};
    int height_ {0};
public:
    //: Write a constructor that sets the data, and stops with an error when it is bad.
    rectangle(int width, int height)
        : width_ {width}, height_ {height}
    {
        //:: Stop with an error when a side is below 1.
        if (width < 1 || height < 1) {
            //@ Stop with an error with `throw`, here a `std::domain_error` that holds a message.
            throw std::domain_error {"a side is below 1"};
        }
    }
    //: Write member functions that give back the data.
    int width() const
    {
        return width_;
    }
    int height() const
    {
        return height_;
    }
    //: Write a member function that gives back a value worked out in one step.
    int area() const
    {
        return width_ * height_;
    }
};

}  // namespace shapes
```
## Trace
Columns: width, height
Input 1:
```
3 4
```
Input 2:
```
5 2
```
```cpp
#include <iostream>
#include <print>
#include <stdexcept>
int area(int width, int height)
{
    if (width < 1 || height < 1) {
        throw std::domain_error {"a side is below 1"};
    }
    return width * height;
}

int main()
{
    int width {0};
    int height {0};
    std::cin >> width >> height;
    std::println("{}", area(width, height));
}
```
