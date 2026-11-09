# 7.51 Define an alias with using, not with typedef
Part: T.43 Prefer using over typedef for defining aliases
Clause: C++ Core Guidelines T.43, [dcl.typedef], [temp.alias], [temp.pre]
After: 3.07
Levels: c++11

## Scan
Rule: T.43
Pattern: /\btypedef\b/
### Bad
```cpp
typedef int (*PFI)(int);         // OK, but convoluted

template<typename T>
typedef int (*PFT)(T);             // error
```
### Good
```cpp
using PFI2 = int (*)(int);          // OK, preferred

template<typename T>
using PFT2 = int (*)(T);         // OK
```

## Example
```cpp
#include <cstdio>

//: Put the new name first and the type after the equals sign.
using PFI2 = int (*)(int);

//: Give the alias a template parameter where you need one.
template <typename T>
using PFT2 = int (*)(T);

int twice(int x)
{
    return x + x;
}

int main()
{
    //: Use both aliases to hold the same function.
    PFI2 f {twice};
    PFT2<int> g {twice};
    std::printf("%d %d\n", f(3), g(4));
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T>
typedef int (*PFT)(T);

int twice(int x)
{
    return x + x;
}

int main()
{
    std::printf("%d\n", twice(4));
}
```
Answer: c++11..c++23 ill-formed 4

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
using PFT2 = int (*)(T);

int twice(int x)
{
    return x + x;
}

int main()
{
    PFT2<int> f {twice};
    std::printf("%d\n", f(4));
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads the word add or the word mul and two ints, and prints their sum or their product.
Write the two operations as functions `add` and `mul`, name the pointer-to-function type with an alias `Op`, and call the chosen function through a variable of type `Op`.
Input: one line, the word and the two ints.
Output: one line, the result.
Limits: every int is between -1000 and 1000.
### Examples
```in
mul 6 7
```
```out
42
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

using Op = int (*)(int, int);

int add(int a, int b)
{
    return a + b;
}

int mul(int a, int b)
{
    return a * b;
}

int main()
{
    std::string name {};
    int a {0};
    int b {0};
    std::cin >> name >> a >> b;
    Op f {name == "add" ? add : mul};
    std::println("{}", f(a, b));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

typedef int (*Op)(int, int);

int add(int a, int b)
{
    return a + b;
}

int mul(int a, int b)
{
    return a * b;
}

int main()
{
    std::string name {};
    int a {0};
    int b {0};
    std::cin >> name >> a >> b;
    Op f {name == "add" ? add : mul};
    std::println("{}", f(a, b));
}
```
### Tests
```in
add 0 0
```
```in
mul -1000 1000
```
```in
add -1000 -1000
```
```in
mul 1 -1
```
### Witness
```cpp
using PFI = int (*)(int);

template <typename T>
using PFT = int (*)(T);

int twice(int x)
{
    return x + x;
}

int main()
{
    PFI f {twice};
    PFT<int> g {twice};
    return f(1) - g(1);
}
```

## Alone 2
Form: run
Write an alias template `Table<T>` for a std::vector of std::vector of T.
Then write a program that reads a table of ints into a Table<int> and prints it turned so that its rows become columns.
Input: the first line holds r and c, then r lines of c ints each.
Output: c lines of r ints each, separated by single spaces: line j holds column j of the table, from top to bottom.
Limits: 1 ≤ r ≤ 5; 1 ≤ c ≤ 5; every int is between -1000 and 1000.
### Examples
```in
2 3
1 2 3
4 5 6
```
```out
1 4
2 5
3 6
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
using Table = std::vector<std::vector<T>>;

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    Table<int> t {};
    for (int i {0}; i < r; ++i) {
        std::vector<int> row {};
        for (int j {0}; j < c; ++j) {
            int x {0};
            std::cin >> x;
            row.push_back(x);
        }
        t.push_back(row);
    }
    for (int j {0}; j < c; ++j) {
        for (int i {0}; i < r; ++i) {
            std::print("{}{}", i > 0 ? " " : "", t.at(i).at(j));
        }
        std::println("");
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
struct Table {
    typedef std::vector<std::vector<T>> type;
};

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    Table<int>::type t {};
    for (int i {0}; i < r; ++i) {
        std::vector<int> row {};
        for (int j {0}; j < c; ++j) {
            int x {0};
            std::cin >> x;
            row.push_back(x);
        }
        t.push_back(row);
    }
    for (int j {0}; j < c; ++j) {
        for (int i {0}; i < r; ++i) {
            std::print("{}{}", i > 0 ? " " : "", t.at(i).at(j));
        }
        std::println("");
    }
}
```
### Tests
```in
1 1
-1000
```
```in
5 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 1000
```
```in
3 1
7
8
9
```
### Witness
```cpp
#include <vector>

template <typename T>
using Table = std::vector<std::vector<T>>;

int main()
{
    Table<char> t {{'a', 'b'}, {'c', 'd'}};
    return t.at(1).at(0) - 'c';
}
```
