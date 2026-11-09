# 3.10 A run-time value turned into a template argument by a `switch`
Part: a run-time value turned into a template argument by a `switch`
Clause: [temp.arg.nontype], [expr.const], [stmt.switch]
After: 3.09
Levels: c++11

## Example
```cpp
#include <iostream>
#include <print>

//: Fix the size of the work while compiling.
template <int N>
int sum_squares()
{
    int total {0};
    for (int i {1}; i <= N; ++i) {
        total += i * i;
    }
    return total;
}

int main()
{
    //: Read the size while the program runs.
    int n {3};
    std::cin >> n;
    //: Give each size you allow its own case and instantiation.
    int result {0};
    switch (n) {
    case 2:
        result = sum_squares<2>();
        break;
    case 3:
        result = sum_squares<3>();
        break;
    case 4:
        result = sum_squares<4>();
        break;
    default:
        result = -1;
        break;
    }
    //: Print the result of the instantiation the case picked.
    std::println("{}", result);
}
```

## Verdict 1
```cpp
#include <cstdio>

template <int N>
int cube()
{
    return N * N * N;
}

int main()
{
    int n {0};
    if (std::scanf("%d", &n) != 1) {
        return 0;
    }
    switch (n) {
    case 2:
        std::printf("%d\n", cube<n>());
        break;
    }
}
```
Answer: c++11..c++23 ill-formed 17

## Verdict 2
```cpp
template <int N>
int cube()
{
    return N * N * N;
}

int main()
{
    const int n {2};
    return cube<n>() - 8;
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads a base b and a number x and prints x written in base b.
Input: one line, b and x.
Output: one line, the digits of x in base b, with the letters a to f for the digits 10 to 15.
Limits: b is 2, 8 or 16; 0 ≤ x ≤ 1000000000.
### Examples
```in
2 10
```
```out
1010
```
```in
16 255
```
```out
ff
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

template <int B>
std::string in_base(int x)
{
    std::string s {};
    do {
        s.insert(s.begin(), "0123456789abcdef"[x % B]);
        x /= B;
    } while (x > 0);
    return s;
}

int main()
{
    int b {0};
    int x {0};
    std::cin >> b >> x;
    std::string s {};
    switch (b) {
    case 2:
        s = in_base<2>(x);
        break;
    case 8:
        s = in_base<8>(x);
        break;
    case 16:
        s = in_base<16>(x);
        break;
    }
    std::println("{}", s);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

template <int B>
std::string in_base(int x)
{
    std::string s {};
    do {
        s.insert(s.begin(), "0123456789abcdef"[x % B]);
        x /= B;
    } while (x > 0);
    return s;
}

int main()
{
    int b {0};
    int x {0};
    std::cin >> b >> x;
    std::string s {};
    switch (b) {
    case 2:
        s = in_base<2>(x);
        break;
    case 8:
        s = in_base<8>(x);
    case 16:
        s = in_base<16>(x);
        break;
    }
    std::println("{}", s);
}
```
### Tests
```in
8 64
```
```in
8 8
```
```in
8 4095
```
```in
16 1000000000
```
```in
8 1000000000
```
### Witness
```in
8 9
```

## Alone 2
Form: run
Write a program that reads an operator and two numbers and prints the result of the operator on the two numbers.
Input: one line, a character + or - or *, then two integers a and b.
Output: one line, a + b, a − b or a · b.
Limits: −10000 ≤ a, b ≤ 10000.
### Examples
```in
+ 3 4
```
```out
7
```
```in
* -2 5
```
```out
-10
```
### Reference
```cpp
#include <iostream>
#include <print>

template <char Op>
int apply(int a, int b)
{
    if (Op == '+') {
        return a + b;
    }
    if (Op == '-') {
        return a - b;
    }
    return a * b;
}

int main()
{
    char op {'+'};
    int a {0};
    int b {0};
    std::cin >> op >> a >> b;
    int result {0};
    switch (op) {
    case '+':
        result = apply<'+'>(a, b);
        break;
    case '-':
        result = apply<'-'>(a, b);
        break;
    case '*':
        result = apply<'*'>(a, b);
        break;
    }
    std::println("{}", result);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

template <char Op>
int apply(int a, int b)
{
    if (Op == '+') {
        return a + b;
    }
    if (Op == '-') {
        return a - b;
    }
    return a * b;
}

int main()
{
    char op {'+'};
    int a {0};
    int b {0};
    std::cin >> op >> a >> b;
    int result {0};
    switch (op) {
    case '+':
        result = apply<'+'>(a, b);
        break;
    case '-':
        result = apply<'+'>(a, b);
        break;
    case '*':
        result = apply<'*'>(a, b);
        break;
    }
    std::println("{}", result);
}
```
### Tests
```in
- 3 4
```
```in
- -10000 10000
```
```in
* 10000 10000
```
```in
- 0 5
```
### Witness
```in
- 7 2
```
