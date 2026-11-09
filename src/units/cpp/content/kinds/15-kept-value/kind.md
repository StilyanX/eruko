# Kind 15: Keep a value in a class and work out others from it
After: 12, 13
## Example
Write a class `temperature::temperature` whose constructor takes a temperature in degrees Celsius as a `double`.
`celsius()` returns that temperature.
`fahrenheit()` returns it in degrees Fahrenheit, 9 / 5 times the degrees Celsius plus 32.
`kelvin()` returns it in kelvins, the degrees Celsius plus 273.15.
Limits: -273.15 ≤ degrees Celsius ≤ 1000.
```cpp
#pragma once

namespace temperature {

//: Write a class that keeps its data in private members.
//@ Make a type of your own with `class`, its members between `{` and `};`.
class temperature {
    //@ Hold a number with a fraction in a `double`.
    //@ Write the data first, where it is private: only the class's own functions reach it.
    double celsius_ {0.0};
//@ Write the functions anyone may call after `public:`.
public:
    //: Write a constructor that sets the data.
    //@ Write a constructor, named as the class, which makes each new object.
    //@ Mark a constructor with one parameter `explicit`, so no value turns into an object by itself.
    explicit temperature(double celsius)
        //@ Set each member after `:`, before the constructor's body.
        : celsius_ {celsius}
    {
    }
    //: Write a member function that gives back the data.
    //@ Mark with `const` a member function that never changes the object.
    double celsius() const
    {
        return celsius_;
    }
    //: Write member functions that give back a value worked out in one step.
    double fahrenheit() const
    {
        return celsius_ * 9 / 5 + 32;
    }
    double kelvin() const
    {
        return celsius_ + 273.15;
    }
};

}  // namespace temperature
```
## Trace
Columns: item
Input 1:
```
250
```
Input 2:
```
1999
```
```cpp
#include <iostream>
#include <print>
struct price
{
    int cents {0};
};

int euros(const price& item)
{
    return item.cents / 100;
}

int main()
{
    price item {0};
    std::cin >> item.cents;
    std::println("{} {}", euros(item), item.cents % 100);
}
```
