# Kind 45: Move an object by its kept direction
After: 15, 24, 25
## Example
Write a class `turtle::Turtle` whose objects stand on a grid of whole-number points (x, y), each facing one of the values of an enum class `turtle::Heading`: `UP`, `RIGHT`, `DOWN` and `LEFT`.
x grows to the right and y grows downward.
`Turtle(int x, int y, Heading heading)` stands at (x, y) with the heading.
`x()`, `y()` and `heading()` return where it stands and the way it faces.
`right()` and `left()` turn it a quarter turn to the right or the left, in place.
`forward()` moves it 1 point the way it faces.
`run(const std::string& orders)` runs each letter of the text in order: `R` turns right, `L` turns left and `F` moves forward.
Limits: -10 ≤ x, y ≤ 10 at the start; 0 ≤ length of the orders ≤ 12, each `R`, `L` or `F`.
```cpp
#pragma once

#include <string>

namespace turtle {

//: Name each possible value in an `enum class`.
enum class Heading { UP, RIGHT, DOWN, LEFT };

//: Write a class that keeps its data in private members.
class Turtle {
    int x_ {0};
    int y_ {0};
    Heading heading_ {Heading::UP};
public:
    //: Write a constructor that sets the data.
    Turtle(int x, int y, Heading heading)
        : x_ {x}, y_ {y}, heading_ {heading}
    {
    }
    //: Write member functions that give back the data.
    int x() const
    {
        return x_;
    }
    int y() const
    {
        return y_;
    }
    Heading heading() const
    {
        return heading_;
    }
    //: Write member functions that turn it a quarter turn to the right or to the left.
    void right()
    {
        //@ Turn an `enum class` value into its place, from 0, with `static_cast<int>`, and a place back into a value with `static_cast<Heading>`.
        const int next {(static_cast<int>(heading_) + 1) % 4};
        heading_ = static_cast<Heading>(next);
    }
    void left()
    {
        const int next {(static_cast<int>(heading_) + 3) % 4};
        heading_ = static_cast<Heading>(next);
    }
    //: Write a member function that moves it one point in the direction it faces.
    void forward()
    {
        if (heading_ == Heading::UP) {
            //@ Take one from a variable with `--`.
            --y_;
        } else if (heading_ == Heading::RIGHT) {
            ++x_;
        } else if (heading_ == Heading::DOWN) {
            ++y_;
        } else {
            --x_;
        }
    }
    //: Write a member function that runs each instruction of the text in turn.
    void run(const std::string& orders)
    {
        for (const char order : orders) {
            if (order == 'R') {
                //@ Call another member function of the same object by its name alone.
                right();
            } else if (order == 'L') {
                left();
            } else {
                forward();
            }
        }
    }
};

}  // namespace turtle
```
## Trace
Columns: orders, x, facing, order
Input 1:
```
FTF
```
Input 2:
```
FFTFFFTF
```
```cpp
#include <iostream>
#include <print>
#include <string>
int main()
{
    std::string orders {};
    std::cin >> orders;
    int x {0};
    int facing {1};
    for (const char order : orders) {
        if (order == 'T') {
            facing = -facing;
        } else {
            x += facing;
        }
    }
    std::println("{}", x);
}
```
