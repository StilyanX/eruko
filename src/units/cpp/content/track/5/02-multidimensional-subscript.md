# 5.02 The multidimensional subscript operator
Part: the multidimensional subscript operator
Clause: [over.sub], [expr.sub], [diff.cpp20.expr]
After: none
Levels: c++20

## Example
```cpp
#include <print>

//: Keep a 2 by 3 table of int, all zero.
struct Grid {
    int cells[2][3] {};
    //: Give operator[] two parameters, the row and the column.
    int& operator[](int r, int c)
    {
        return cells[r][c];
    }
};

int main()
{
    //: Write one element with two indices between the brackets.
    Grid g {};
    g[1, 2] = 5;
    //: Read the element back the same way.
    std::println("{}", g[1, 2]);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Grid {
    int cells[2][3] {};
    int& operator[](int r, int c)
    {
        return cells[r][c];
    }
};

int main()
{
    Grid g {};
    g[1, 2] = 5;
    std::printf("%d\n", g.cells[1][2]);
}
```
Answer:
- c++20: ill-formed 5, 14
- c++23: defined

## Verdict 2
```cpp
#include <cstdio>

struct Row {
    int cells[4] {0, 1, 2, 3};
    int operator[](int i) const
    {
        return cells[i];
    }
};

int main()
{
    Row r {};
    std::printf("%d\n", r[1, 2]);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 14

## Alone 1
Form: flag
Write a program with a type `Grid` that holds a 3 by 4 table of int, all zero. Its `operator[]` takes a row and a column and returns that element by reference. `main` reads a row, a column and a value, sets that element to the value, and prints it. The program is accepted at c++23 and rejected at c++20.
Input: one line, the row, the column and the value.
Output: one line, the value.
Limits: 0 ≤ row ≤ 2; 0 ≤ column ≤ 3; the value is between -1000 and 1000.
Expect:
- c++20: reject
- c++23: accept
### Reference
```cpp
#include <iostream>

struct Grid {
    int cells[3][4] {};
    int& operator[](int r, int c)
    {
        return cells[r][c];
    }
};

int main()
{
    int r {0};
    int c {0};
    int v {0};
    std::cin >> r >> c >> v;
    Grid g {};
    g[r, c] = v;
    std::cout << g[r, c] << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Grid {
    int cells[3][4] {};
    int* operator[](int r)
    {
        return cells[r];
    }
};

int main()
{
    int r {0};
    int c {0};
    int v {0};
    std::cin >> r >> c >> v;
    Grid g {};
    g[r][c] = v;
    std::cout << g[r][c] << '\n';
}
```
### Witness
```cpp
int probe(Grid& g)
{
    return g[1, 2];
}
```

## Alone 2
Form: run
Write a program that reads a table of r rows and c columns, then q queries, and prints the element each query names. A query `1 i` names element i, counting row by row from 0. A query `2 a b` names the element in row a and column b, both counted from 0. A type `Table` holds the elements and has two `operator[]`: one takes i, the other takes a and b.
Input: one line, r and c; r lines of c integers; one line, q; q lines, one query each.
Output: q lines, one element each.
Limits: 1 ≤ r ≤ 10; 1 ≤ c ≤ 10; each integer is between -1000 and 1000; 1 ≤ q ≤ 100; every query names an element of the table.
### Examples
```in
2 3
1 2 3
4 5 6
2
1 4
2 0 2
```
```out
5
3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Table {
    int cols {0};
    std::vector<int> cells;
    int operator[](int i) const
    {
        return cells[i];
    }
    int operator[](int a, int b) const
    {
        return cells[a * cols + b];
    }
};

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    Table t {c, std::vector<int>(r * c, 0)};
    for (int& x : t.cells) {
        std::cin >> x;
    }
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        int kind {0};
        std::cin >> kind;
        if (kind == 1) {
            int i {0};
            std::cin >> i;
            std::println("{}", t[i]);
        } else {
            int a {0};
            int b {0};
            std::cin >> a >> b;
            std::println("{}", t[a, b]);
        }
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Table {
    int cols {0};
    std::vector<int> cells;
    int operator[](int i) const
    {
        return cells[i];
    }
    int operator[](int a, int b) const
    {
        return cells[a * cols + b];
    }
};

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    Table t {c, std::vector<int>(r * c, 0)};
    for (int& x : t.cells) {
        std::cin >> x;
    }
    int q {0};
    std::cin >> q;
    for (int k {0}; k < q; ++k) {
        int kind {0};
        std::cin >> kind;
        if (kind == 1) {
            int i {0};
            std::cin >> i;
            std::println("{}", t[i]);
        } else {
            int a {0};
            int b {0};
            std::cin >> a >> b;
            std::println("{}", t[(a, b)]);
        }
    }
}
```
### Tests
```in
1 1
7
2
1 0
2 0 0
```
```in
3 2
1 2
3 4
5 6
3
2 2 1
2 1 0
1 5
```
```in
10 10
0 1 2 3 4 5 6 7 8 9
10 11 12 13 14 15 16 17 18 19
20 21 22 23 24 25 26 27 28 29
30 31 32 33 34 35 36 37 38 39
40 41 42 43 44 45 46 47 48 49
50 51 52 53 54 55 56 57 58 59
60 61 62 63 64 65 66 67 68 69
70 71 72 73 74 75 76 77 78 79
80 81 82 83 84 85 86 87 88 89
90 91 92 93 94 95 96 97 98 99
3
2 9 9
1 99
2 4 7
```
### Witness
```in
2 2
1 2
3 4
1
2 1 0
```
