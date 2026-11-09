# Kind 24: Name the results, then pick one by cases
After: 12, 14
## Example
Write a function `water::state(int celsius)` that returns the state of water at that temperature.
The header also defines the result type, `enum class water::phase { solid, liquid, gas }`.
It returns `solid` at 0 or below, `liquid` below 100, and `gas` at 100 or above.
Limits: -1000 ≤ celsius ≤ 1000.
```cpp
#pragma once

namespace water {

//: Name each possible value in an `enum class`.
//@ Write the values of an `enum class` between `{ }`, split by commas.
enum class phase { solid, liquid, gas };

//: Write a function that tests each case in order and gives back the result of the first that holds.
phase state(int celsius)
{
    //:: Give back solid at 0 or below, liquid below 100, else gas.
    if (celsius <= 0) {
        //@ Name one value of the `enum class` as `phase::solid`.
        return phase::solid;
    } else if (celsius < 100) {
        return phase::liquid;
    } else {
        return phase::gas;
    }
}

}  // namespace water
```
## Trace
Columns: number
Input 1:
```
7
```
Input 2:
```
42
```
```cpp
#include <iostream>
#include <print>

enum class band { low, high };
band band_of(int number)
{
    if (number < 10) {
        return band::low;
    }
    return band::high;
}

int main()
{
    int number {0};
    std::cin >> number;
    std::println("{}", band_of(number) == band::high);
}
```
