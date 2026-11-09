# Kind 64: Keep the best value for each size
After: 9, 22
## Example
Write a function `rod::best_price(int total, const std::vector<rod::Piece>& pieces)` that returns the largest sum of prices of pieces you can cut from a rod of length `total`, any number of each piece, whose lengths add up to at most `total`.
Write also the struct `rod::Piece`, with two `int` members, `length` then `price`.
With no pieces it returns 0.
Limits: 0 ≤ pieces ≤ 100; 1 ≤ total ≤ 1000; 1 ≤ each length ≤ 1000; 1 ≤ each price ≤ 1000.
```cpp
#pragma once

#include <algorithm>
#include <vector>

namespace rod {

//: Write a struct that holds several values together.
//@ Make a type that holds several values with `struct`, whose members anyone may reach.
struct Piece {
    int length {0};
    int price {0};
};

//: Write a function that keeps the best value for each weight, one item at a time.
int best_price(int total, const std::vector<Piece>& pieces)
{
    //:: Start the best price for each length from 0 to the total at 0.
    //@ Make a list of n + 1 zeros with `std::vector<int> best(n + 1, 0)`, the size first, then the value.
    std::vector<int> best(total + 1, 0);
    //:: For each piece, keep the larger of the best price without it and with it, shortest length first.
    //@ Take each item of a list in turn, without copying it, with `const Piece& piece`.
    for (const Piece& piece : pieces) {
        //@ Reach a member of a struct with `.`, as in `piece.length`.
        for (int size {piece.length}; size <= total; ++size) {
            const int with {best[size - piece.length]
                            + piece.price};
            best[size] = std::max(best[size], with);
        }
    }
    //:: Give back the best price for the total length.
    //@ Get the last item of a list with `back()`.
    return best.back();
}

}  // namespace rod
```
## Trace
Columns: most, top, size, w
Input 1:
```
3
2
```
Input 2:
```
6
4 3 2
```
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int most {0};
    std::cin >> most;
    std::vector<int> top(most + 1, 0);
    int size {0};
    while (std::cin >> size) {
        for (int w {most}; w >= size; --w) {
            top[w] = std::max(top[w], top[w - size] + size);
        }
    }
    std::println("{}", top.back());
}
```
