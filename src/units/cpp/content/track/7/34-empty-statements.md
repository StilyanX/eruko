# 7.34 ES.85: write an empty loop body as a block
Part: ES.85 Make empty statements visible
Clause: C++ Core Guidelines ES.85, [stmt.expr], [stmt.block], [stmt.iter]
After: none
Levels: c++11

## Scan
Rule: ES.85
Pattern: /\b(?:for|if|(?<!\}\s*)while)\s*\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)\s*;|\belse\s*;/
### Bad
```cpp
#include <vector>

int f(int x);

void g(std::vector<int>& v, int max)
{
    int i {0};
    for (i = 0; i < max; ++i);
    v[i] = f(v[i]);
}
```
### Good
```cpp
#include <vector>

int f(int x);

void g(std::vector<int>& v, int i)
{
    for (auto x : v) {
    }
    v[i] = f(v[i]);
}
```

## Example
```cpp
#include <cstddef>
#include <print>
#include <vector>

int main()
{
    //: Keep a list of numbers to search.
    std::vector<int> v {3, 8, 5, 9};
    //: Step to the first number above 6 with an empty block.
    std::size_t i {0};
    for (; i < v.size() && v[i] <= 6; ++i) {
    }
    //: Use the place the loop stopped at.
    std::println("{} at {}", v[i], i);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int sum {0};
    for (int i {0}; i < 4; ++i);
    {
        sum += i;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++11..c++23 ill-formed 8

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int n {2};
    if (n > 5);
    {
        std::printf("big\n");
    }
    std::printf("%d\n", n);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n whole numbers and prints the position of the first negative one.
Input: one line, n, then a line of n whole numbers.
Output: one line, the position of the first negative number, counting from 0, or n if none is negative.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
4
3 0 -2 -5
```
```out
2
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t i {0};
    for (; i < v.size() && v[i] >= 0; ++i) {
    }
    std::println("{}", i);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t i {0};
    for (; i < v.size() && v[i] >= 0; ++i);
    std::println("{}", i);
}
```
### Tests
```in
1
-1
```
```in
1
5
```
```in
3
1 2 3
```
```in
5
0 0 0 0 -1000
```
### Witness
```cpp
#include <vector>

int f(int x);

void g(std::vector<int>& v, int max)
{
    int i {0};
    for (i = 0; i < max; ++i) {
    }
    v[i] = f(v[i]);
}
```

## Alone 2
Form: run
Write a program that reads n and prints how many binary digits n has.
Input: one line, n.
Output: one line, the number of digits of n written in base 2.
Limits: 1 ≤ n ≤ 1000000000.
### Examples
```in
5
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int bits {0};
    for (int m {n}; m > 0; m /= 2, ++bits) {
    }
    std::println("{}", bits);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int bits {0};
    for (int m {n}; m > 0; m /= 2, ++bits);
    std::println("{}", bits);
}
```
### Tests
```in
1
```
```in
1000000000
```
```in
1024
```
```in
1023
```
### Witness
```cpp
#include <cstdio>

int main()
{
    int n {2};
    if (n > 5) {
        std::printf("big\n");
    }
    std::printf("%d\n", n);
}
```
