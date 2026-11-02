# 1.20 `enum class` and its conversions
Part: `enum class` and its conversions
Clause: [dcl.enum], [expr.static.cast], [conv.prom], [dcl.init.list]
After: none
Levels: c++23

## Example
```cpp
#include <print>

enum class Colour { red, green, blue };
enum Size { small, large };

int main()
{
    //: Name an enumerator of an enum class through its type.
    Colour paint {Colour::blue};
    //: Turn it into an int with a cast; it does not turn by itself.
    int code {static_cast<int>(paint)};
    std::println("{}", code);
    //: Turn an int back into a Colour with a cast too.
    Colour next {static_cast<Colour>(1)};
    std::println("{}", next == Colour::green);
    //: See that an old-style enumerator turns into an int at once.
    int width {large};
    std::println("{}", width);
}
```

## Verdict 1
```cpp
#include <print>

enum class Colour { red, green, blue };

int main()
{
    Colour paint {Colour::green};
    int code {paint};
    std::println("{}", code);
}
```
Answer: c++23 ill-formed 8

## Verdict 2
```cpp
#include <print>

enum class Shade : unsigned char { light, dark };

int main()
{
    int big {300};
    Shade shade {static_cast<Shade>(big)};
    std::println("{}", static_cast<int>(shade));
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Write a program that defines an enum class Suit with the enumerators clubs, diamonds, hearts and spades in that order, and prints the number that hearts stands for.
Input: none.
Output: one line, 2.
Limits: none.
Expect:
- c++23: accept
### Reference
```cpp
#include <print>

enum class Suit { clubs, diamonds, hearts, spades };

int main()
{
    int code {static_cast<int>(Suit::hearts)};
    std::println("{}", code);
}
```
### Wrong
```cpp
#include <print>

enum class Suit { clubs, diamonds, hearts, spades };

int main()
{
    int code {Suit::hearts};
    std::println("{}", code);
}
```
### Witness
```cpp
int probe {static_cast<int>(Suit::spades)};
```

## Alone 2
Form: probes
Write a program that defines an enumeration Level with the enumerators low, medium and high, whose values do not turn into an int, or come from one, without a cast.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
enum class Level { low, medium, high };

int main()
{
}
```
### Wrong
```cpp
enum Level { low, medium, high };

int main()
{
}
```
### Probes
```cpp
Level a {Level::low};
int b {static_cast<int>(Level::high)};
Level c {static_cast<Level>(1)};
int d {Level::medium};
Level e = 2;
bool f {Level::low == 0};
```
Accept: 1, 2, 3
Reject: 4, 5, 6
### Witness
```cpp
int w {Level::high};
```
