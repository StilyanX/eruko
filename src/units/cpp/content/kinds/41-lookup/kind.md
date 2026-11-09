# Kind 41: Look up items by position and by cases
After: 14, 23, 24, 37
## Example
Write a function `traffic::light_at(std::string_view lights, std::string_view road)` that returns the light of a road as a value of `enum class traffic::Light { red, amber, green }`, which the header defines.
The roads, in order, are north, east, south and west; lights holds one letter for each road in that order: `R` red, `A` amber, `G` green.
Limits: lights holds 4 letters, each `R`, `A` or `G`; road is one of the 4 roads.
```cpp
#pragma once

#include <array>
#include <string_view>

namespace traffic {

//: Name each possible value in an `enum class`.
enum class Light { red, amber, green };

//: Write a function that tests each case in order and gives back the result of the first that holds.
Light light(char letter)
{
    //:: Give back red for `R`, amber for `A`, else green.
    if (letter == 'R') {
        return Light::red;
    } else if (letter == 'A') {
        return Light::amber;
    } else {
        return Light::green;
    }
}

//: Write a function that finds the first item that passes a test and gives back its position.
//@ Give the function a `std::string_view` parameter, which reads the caller's text without copying it.
int position(std::string_view road)
{
    //:: Make the list of roads, in order.
    const std::array<std::string_view, 4> roads {
        "north", "east", "south", "west"};
    //:: Give back the index of the first road in the list equal to the road, else -1.
    for (int index {0}; index < std::ssize(roads); ++index) {
        if (roads[index] == road) {
            return index;
        }
    }
    return -1;
}

//: Write a function that gives back a value worked out in one step.
Light light_at(std::string_view lights, std::string_view road)
{
    //:: Give back the light for the road's letter.
    return light(lights[position(road)]);
}

}  // namespace traffic
```
## Trace
Columns: litres
Input 1:
```
3
```
Input 2:
```
7
```
```cpp
#include <iostream>
#include <print>
enum class Size { small, medium, large };
Size size(int litres)
{
    if (litres < 2) {
        return Size::small;
    } else if (litres < 5) {
        return Size::medium;
    }
    return Size::large;
}
int main()
{
    int litres {0};
    std::cin >> litres;
    std::println("{}", static_cast<int>(size(litres)));
}
```
