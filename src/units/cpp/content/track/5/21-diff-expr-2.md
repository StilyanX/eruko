# 5.21 A comma inside a subscript no longer makes a comma expression
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.expr] ¶2
Clause: [diff.cpp20.expr], [expr.sub], [over.sub], [expr.comma]
After: 5.02
Levels: c++20

## Example
```cpp
#include <print>

struct Grid {
    int cells[2][3] {{1, 2, 3}, {4, 5, 6}};
    int operator[](int row, int col) const
    {
        return cells[row][col];
    }
};

int main()
{
    Grid grid;
    //: Pass two indices to the class's operator[] with a comma.
    std::println("{}", grid[1, 2]);
    //: Put a comma expression in parentheses to index by its value.
    int line[3] {7, 8, 9};
    int i {0};
    std::println("{}", line[(i++, 2)]);
    std::println("{}", i);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int a[3] {10, 20, 30};
    int i {0};
    int j {2};
    std::printf("%d\n", a[i, j]);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 8

## Verdict 2
```cpp
#include <cstdio>

struct Row {
    int v[3] {4, 5, 6};
    int operator[](int i) const
    {
        return v[i];
    }
};

int main()
{
    Row row;
    int k {0};
    std::printf("%d\n", row[k, 1]);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 15

## Alone 1
Form: flag
Write a program that has an int array `a` of 4 elements and two ints `i` and `j`, and reads the element of `a` at the value of the comma expression `i, j`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors accepts the program at c++20 and at c++23.
Expect:
- c++20: accept
- c++23: accept
### Reference
```cpp
#include <cstdio>

int main()
{
    int a[4] {1, 2, 3, 4};
    int i {0};
    int j {3};
    std::printf("%d\n", a[(i, j)]);
}
```
### Wrong
```cpp
#include <cstdio>

int main()
{
    int a[4] {1, 2, 3, 4};
    int i {0};
    int j {3};
    std::printf("%d\n", a[i, j]);
}
```
### Witness
```cpp
int probe(const int (&b)[4], int i, int j)
{
    return b[(i, j)];
}
```

## Alone 2
Form: probes
Write a struct `Cells` that holds 6 ints, all 0, as a grid of 2 rows and 3 columns. `c[r, k]` reads the int at row r and column k. `c[i]` reads the int at place i of the 6, row by row.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
int p1 {Cells {}[1, 2]};
int p2 {Cells {}[4]};
int p3 {Cells {}[(1, 2)]};
int p4 {Cells {}[0, 1, 2]};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
struct Cells {
    int v[6] {};
    int operator[](int r, int k) const
    {
        return v[r * 3 + k];
    }
    int operator[](int i) const
    {
        return v[i];
    }
};

int main()
{
}
```
### Wrong
```cpp
struct Cells {
    int v[6] {};
    int operator[](int i) const
    {
        return v[i];
    }
};

int main()
{
}
```
### Witness
```cpp
int w {Cells {}[0, 0]};
```
