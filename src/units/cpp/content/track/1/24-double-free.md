# 1.24 Double free
Part: double free
Clause: [expr.delete], [basic.stc.dynamic.deallocation]
After: 1.23
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Make one int and point two pointers at it.
    int* score {new int {40}};
    int* alias {score};
    std::println("{} {}", *score, *alias);
    //: Free the int through one pointer only.
    delete score;
    //: Set both pointers to null, since the int is gone.
    score = nullptr;
    alias = nullptr;
    //: Delete a null pointer, which frees nothing.
    delete alias;
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int* score {new int {40}};
    int* alias {score};
    std::println("{}", *alias);
    delete score;
    delete alias;
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int* score {new int {40}};
    std::println("{}", *score);
    delete score;
    score = nullptr;
    delete score;
}
```
Answer: c++23 defined

## Count
Columns: allocations, deallocations
```cpp
#include <print>

int* make(int value, int line)
{
    std::println("@{} allocations", line);
    return new int {value};
}

void drop(int*& p, int line)
{
    if (p != nullptr) {
        std::println("@{} deallocations", line);
        delete p;
        p = nullptr;
    }
}

int main()
{
    int* first {make(1, __LINE__)};
    int* second {make(2, __LINE__)};
    for (int i {0}; i < 3; ++i) {
        drop(first, __LINE__);
    }
    int* keep {second};
    second = nullptr;
    drop(second, __LINE__);
    drop(keep, __LINE__);
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads two lists of integers and prints the longer list first and the other list second.
Input: first line n, then n integers; second line m, then m integers.
Output: two lines, the longer list, then the other, integers separated by spaces; when n equals m, the first list comes first.
Limits: 1 ≤ n, m ≤ 1000; each integer fits in an int.
### Examples
```in
3 1 2 3
2 8 9
```
```out
1 2 3
8 9
```
```in
2 5 6
2 7 8
```
```out
5 6
7 8
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int* a {new int[n]};
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    int m {0};
    std::cin >> m;
    int* b {new int[m]};
    for (int i {0}; i < m; ++i) {
        std::cin >> b[i];
    }
    if (m > n) {
        int* keep {a};
        a = b;
        b = keep;
        int size {n};
        n = m;
        m = size;
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", a[i], i + 1 < n ? " " : "\n");
    }
    for (int i {0}; i < m; ++i) {
        std::print("{}{}", b[i], i + 1 < m ? " " : "\n");
    }
    delete[] a;
    delete[] b;
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
    int* a {new int[n]};
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    int m {0};
    std::cin >> m;
    int* b {new int[m]};
    for (int i {0}; i < m; ++i) {
        std::cin >> b[i];
    }
    if (m > n) {
        int* keep {a};
        a = b;
        b = a;
        int size {n};
        n = m;
        m = size;
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", a[i], i + 1 < n ? " " : "\n");
    }
    for (int i {0}; i < m; ++i) {
        std::print("{}{}", b[i], i + 1 < m ? " " : "\n");
    }
    delete[] a;
    delete[] b;
}
```
### Tests
```in
1 4
3 1 2 3
```
```in
2 9 9
5 1 1 1 1 1
```
```in
4 1 2 3 4
4 5 6 7 8
```
```in
1 -3
2 -1 -2
```
### Witness
```in
1 7
2 8 9
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that keeps at most one stored integer and carries out commands: set x stores x in place of what was stored, clear forgets the stored integer, and print prints it.
Input: first line q, then q lines, each set x, clear or print.
Output: one line for each print, the stored integer, or none when nothing is stored.
Limits: 1 ≤ q ≤ 1000; x fits in an int.
### Examples
```in
4
set 4
print
set 9
print
```
```out
4
9
```
```in
2
print
set 1
```
```out
none
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    int q {0};
    std::cin >> q;
    int* stored {nullptr};
    for (int i {0}; i < q; ++i) {
        std::string command;
        std::cin >> command;
        if (command == "set") {
            int x {0};
            std::cin >> x;
            delete stored;
            stored = new int {x};
        } else if (command == "clear") {
            delete stored;
            stored = nullptr;
        } else if (stored == nullptr) {
            std::println("none");
        } else {
            std::println("{}", *stored);
        }
    }
    delete stored;
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    int q {0};
    std::cin >> q;
    int* stored {nullptr};
    for (int i {0}; i < q; ++i) {
        std::string command;
        std::cin >> command;
        if (command == "set") {
            int x {0};
            std::cin >> x;
            delete stored;
            stored = new int {x};
        } else if (command == "clear") {
            delete stored;
        } else if (stored == nullptr) {
            std::println("none");
        } else {
            std::println("{}", *stored);
        }
    }
    delete stored;
}
```
### Tests
```in
3
set 5
clear
set 6
```
```in
2
set 2
clear
```
```in
4
clear
set 3
print
clear
```
```in
5
set 1
clear
clear
print
set 7
```
### Witness
```in
2
set 8
clear
```
