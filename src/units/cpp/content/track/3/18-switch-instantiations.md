# 3.18 The instantiations in an object file after a `switch`, counted by symbol
Part: the instantiations in an object file after such a `switch`, counted by symbol
Clause: [temp.inst], [temp.point], [temp.explicit], [stmt.switch]
After: 3.10, 3.16, 3.17
Levels: c++11

## Example
```cpp
#include <iostream>
#include <print>

//: Write the work as a function template on a width.
template <int W>
int scale(int x)
{
    return W * x;
}

//: Give each width its case; each case names one instantiation.
int run(int w, int x)
{
    switch (w) {
    case 1:
        return scale<1>(x);
    case 2:
        return scale<2>(x);
    case 4:
        return scale<4>(x);
    default:
        return 0;
    }
}

//: Read the width while the program runs and print the result.
int main()
{
    int w {1};
    int x {0};
    std::cin >> w >> x;
    std::println("{}", run(w, x));
}
```

## Verdict 1
```cpp
#include <cstdio>

template <int W>
int lanes()
{
    static_assert(W > 0, "a width is positive");
    return 32 / W;
}

int pick(int w)
{
    switch (w) {
    case 1:
        return lanes<1>();
    case 2:
        return lanes<2>();
    default:
        return lanes<0>();
    }
}

int main()
{
    std::printf("%d\n", pick(2));
}
```
Answer: c++11 ill-formed 6

## Verdict 2
```cpp
#include <cstdio>

template <int W>
int lanes()
{
    return 32 / W;
}

int pick(int w)
{
    switch (w) {
    case 1:
        return lanes<1>();
    case 2:
        return lanes<2>();
    default:
        return lanes<1>();
    }
}

int main()
{
    std::printf("%d\n", pick(2));
}
```
Answer: c++11 defined

## Alone 1
Form: run
Flags: -c -O0
Result: nm ^int scale<
Write a program that reads a width w and a number x and prints w times x, computed by a function template `scale<W>(int x)` whose template argument is the width, picked by a `switch`, so that the object file holds one instantiation of `scale` for each width the input can take and no other.
Input: one line, w and x.
Output: one line, w times x.
Limits: w is 1, 2, 4 or 8; 0 ≤ x ≤ 1000.
### Examples
```in
2 5
```
### Reference
```cpp
#include <iostream>
#include <print>

template <int W>
int scale(int x)
{
    return W * x;
}

int main()
{
    int w {1};
    int x {0};
    std::cin >> w >> x;
    int result {0};
    switch (w) {
    case 1:
        result = scale<1>(x);
        break;
    case 2:
        result = scale<2>(x);
        break;
    case 4:
        result = scale<4>(x);
        break;
    case 8:
        result = scale<8>(x);
        break;
    }
    std::println("{}", result);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

template <int W>
int scale(int x)
{
    return W * x;
}

int main()
{
    int w {1};
    int x {0};
    std::cin >> w >> x;
    int result {0};
    switch (w) {
    case 1:
        result = scale<1>(x);
        break;
    case 2:
        result = scale<2>(x);
        break;
    case 4:
        result = scale<4>(x);
        break;
    case 8:
        result = scale<8>(x);
        break;
    case 16:
        result = scale<16>(x);
        break;
    }
    std::println("{}", result);
}
```
### Tests
```in
8 3
```
### Witness
```in
1 1
```

## Alone 2
Form: run
Flags: -c -O0
Result: nm ^int scale<
Write a program that reads a width w and a number x and prints w times x, computed by a function template `scale<W>(int x)` picked by a `switch`, so that the object file holds the instantiations of `scale` for the widths 1, 2 and 4 and also the one for width 8, which no case calls but another file will.
Input: one line, w and x.
Output: one line, w times x.
Limits: w is 1, 2 or 4; 0 ≤ x ≤ 1000.
### Examples
```in
4 3
```
### Reference
```cpp
#include <iostream>
#include <print>

template <int W>
int scale(int x)
{
    return W * x;
}

template int scale<8>(int);

int main()
{
    int w {1};
    int x {0};
    std::cin >> w >> x;
    int result {0};
    switch (w) {
    case 1:
        result = scale<1>(x);
        break;
    case 2:
        result = scale<2>(x);
        break;
    case 4:
        result = scale<4>(x);
        break;
    }
    std::println("{}", result);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

template <int W>
int scale(int x)
{
    return W * x;
}

extern template int scale<8>(int);

int main()
{
    int w {1};
    int x {0};
    std::cin >> w >> x;
    int result {0};
    switch (w) {
    case 1:
        result = scale<1>(x);
        break;
    case 2:
        result = scale<2>(x);
        break;
    case 4:
        result = scale<4>(x);
        break;
    }
    std::println("{}", result);
}
```
### Tests
```in
1 7
```
### Witness
```in
2 2
```
