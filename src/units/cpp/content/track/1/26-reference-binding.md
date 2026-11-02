# 1.26 Reference binding
Part: reference binding
Clause: [dcl.init.ref], [dcl.ref], [basic.lval], [class.temporary]
After: 1.17
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Bind a reference to a variable, so it names that variable.
    int count {4};
    int& alias {count};
    //: Change the variable through the reference.
    alias += 1;
    std::println("{}", count);
    //: Bind a const reference to a value with no name.
    const int& sum {count + 10};
    std::println("{}", sum);
}
```

## Verdict 1
```cpp
#include <print>

int twice(int x)
{
    return 2 * x;
}

int main()
{
    int n {4};
    int& alias {n};
    alias += 1;
    int& result {twice(n)};
    std::println("{} {}", n, result);
}
```
Answer: c++23 ill-formed 13

## Verdict 2
```cpp
#include <print>

int main()
{
    short count {7};
    const int& seen {count};
    count = 9;
    std::println("{} {}", count, seen);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a function `clamp_up(x, low)` that sets the int variable passed as x to low when x is below low.
Input: none.
Output: none.
Limits: x is an int variable; low is any int value, a variable or not.
### Probes
```cpp
int a {3};
void p1() { clamp_up(a, 5); }
void p2() { clamp_up(a, a + 1); }
void p3() { clamp_up(7, 5); }
short s {2};
void p4() { clamp_up(s, 5); }
```
Accept: 1, 2, 3, 5
Reject: 4, 6
### Reference
```cpp
void clamp_up(int& x, const int& low)
{
    if (x < low) {
        x = low;
    }
}

int main()
{
}
```
### Wrong
```cpp
void clamp_up(int& x, int& low)
{
    if (x < low) {
        x = low;
    }
}

int main()
{
}
```
### Witness
```cpp
int b {1};
void w() { clamp_up(b, 2 * b); }
```

## Alone 2
Form: probes
Write a function `larger(a, b)` that gives the larger of two int variables, the variable itself, so that a call can change it; on a tie it gives a.
Input: none.
Output: none.
Limits: a and b are int variables that are not const.
### Probes
```cpp
int a {1};
int b {2};
void p1() { larger(a, b) = 0; }
void p2() { int& r {larger(a, b)}; r += 1; }
void p3() { larger(a, 3); }
const int c {4};
void p4() { larger(a, c); }
```
Accept: 1, 2, 3, 4, 6
Reject: 5, 7
### Reference
```cpp
int& larger(int& a, int& b)
{
    return a < b ? b : a;
}

int main()
{
}
```
### Wrong
```cpp
int larger(int& a, int& b)
{
    return a < b ? b : a;
}

int main()
{
}
```
### Witness
```cpp
int x {1};
int y {2};
void w() { larger(x, y) += 1; }
```
