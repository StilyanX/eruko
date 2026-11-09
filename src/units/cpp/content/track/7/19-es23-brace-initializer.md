# 7.19 ES.23: initialize with braces, so no declaration hides in parentheses
Part: ES.23 Prefer the {}-initializer syntax
Clause: C++ Core Guidelines ES.23, [dcl.ambig.res], [dcl.init.list], [vector.cons]
After: 1.01, 1.04
Levels: c++11

## Scan
Rule: ES.23
Warning: -Wvexing-parse
### Bad
```cpp
template<typename T>
void f()
{
    T x1(1);
    T x0();

    T y1 {1};
    T y0 {};
}
```
### Good
```cpp
template<typename T>
void f()
{
    T y1 {1};
    T y0 {};
}
```

## Example
```cpp
#include <print>
#include <vector>

struct Point {
    int x {0};
    int y {0};
};

int main()
{
    //: Write empty braces to make an object with its default value.
    Point origin {};
    //: Write the values in braces; a narrowing one is an error.
    Point p {3, 4};
    //: Keep parentheses for a container's size, braces for elements.
    std::vector<int> ten(10);
    std::vector<int> one {10};
    std::println("{} {} {} {}", origin.x, p.y, ten.size(),
                 one.size());
}
```

## Verdict 1
```cpp
#include <cstdio>

struct T {
    int v {4};
};

int main()
{
    T x0();
    std::printf("%d\n", x0.v);
}
```
Answer: c++11..c++23 ill-formed 10

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

int main()
{
    std::vector<int> v1(10);
    std::vector<int> v2 {10};
    std::vector<int> v3(1, 2);
    std::vector<int> v4 {1, 2};
    std::printf("%zu %zu %zu %zu\n", v1.size(), v2.size(),
                v3.size(), v4.size());
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and then n whole numbers and prints their sum.
Input: one line, n, then one line of n numbers.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 100; each number is from -1000 to 1000.
### Examples
```in
3
1 2 3
```
```out
6
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> seen {};
    int sum {};
    for (int i {0}; i < n; ++i) {
        int x {};
        std::cin >> x;
        sum += x;
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> seen();
    int sum {};
    for (int i {0}; i < n; ++i) {
        int x {};
        std::cin >> x;
        sum += x;
    }
    std::println("{}", sum);
}
```
### Tests
```in
1
-1000
```
```in
5
1000 1000 1000 1000 1000
```
```in
4
-3 3 -2 2
```
### Witness
```cpp
template<typename T>
T f()
{
    T x1 {1};
    T x0 {};
    return x0;
}
```

## Alone 2
Form: run
Write a program that reads a word and prints it twice, separated by one space. Copy the word into a second std::string before you print.
Input: one line, one word.
Output: one line, the word, a space, the word again.
Limits: the word has 1 to 20 letters.
### Examples
```in
go
```
```out
go go
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string word {};
    std::cin >> word;
    std::string copy {std::string(word)};
    std::string spare {std::string()};
    std::println("{} {}", word, copy);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string word {};
    std::cin >> word;
    std::string copy {std::string(word)};
    std::string spare(std::string());
    std::println("{} {}", word, copy);
}
```
### Tests
```in
a
```
```in
abcdefghijklmnopqrst
```
```in
same
```
### Witness
```cpp
#include <string>

std::string again(const std::string& u)
{
    std::string v2 {u};
    return v2;
}
```
