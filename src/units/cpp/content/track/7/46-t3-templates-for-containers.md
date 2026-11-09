# 7.46 Give a container its element type as a template argument
Part: T.3 Use templates to express containers and ranges
Clause: C++ Core Guidelines T.3, [temp.class], [expr.static.cast], [conv.ptr], [expr.add]
After: none
Levels: c++11

## Scan
Rule: T.3
Pattern: /\bvoid\s*\*+\s*(?:const\s+)?[A-Za-z_]\w*\s*[;=,)\[{]/
### Bad
```cpp
class Container {
    // ...
    void* elem;   // points to size elements of some type
    int sz;
};

Container c(10, sizeof(double));
((double*) c.elem)[7] = 9.9;
```
### Good
```cpp
template<typename T>
    // requires Regular<T>
class Vector {
    // ...
    T* elem;   // points to sz Ts
    int sz;
};

Vector<double> v(10);
v[7] = 9.9;
```

## Example
```cpp
#include <cstdio>
#include <vector>

//: Make the element type a template parameter of the container.
template <typename T>
struct View {
    T* first;
    int count;
    T& at(int i)
    {
        return first[i];
    }
};

int main()
{
    //: Name the element type where you make the container.
    std::vector<double> store {1.5, 2.5, 3.5};
    View<double> v {store.data(), 3};
    //: Use the elements with no cast; the type system knows them.
    v.at(2) = 9.9;
    std::printf("%.1f %.1f\n", v.at(0), v.at(2));
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Container {
    void* elem;
    int sz;
};

int main()
{
    Container c {new int[4] {}, 4};
    static_cast<double*>(c.elem)[3] = 9.9;
    std::printf("%d\n", c.sz);
    delete[] static_cast<int*>(c.elem);
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>

struct Container {
    void* elem;
    int sz;
};

int main()
{
    int store[4] {1, 2, 3, 4};
    Container c {store, 4};
    int* back {static_cast<int*>(c.elem)};
    back[3] = 9;
    std::printf("%d %d\n", store[3], c.sz);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a class template `View` on an element type T that holds a pointer to a first element and a count, with a member function `at(int i)` that returns a reference to element i.
Then write a program that reads n numbers into a std::vector<int>, makes a View<int> of them, and prints them through `at`, from the last to the first.
Input: the first line holds n, the second line holds the n numbers.
Output: n lines, the numbers from the last to the first.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
4 -1 7
```
```out
7
-1
4
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
struct View {
    T* first;
    int count;
    T& at(int i)
    {
        return first[i];
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> numbers {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        numbers.push_back(x);
    }
    View<int> v {numbers.data(), n};
    for (int i {n - 1}; i >= 0; --i) {
        std::println("{}", v.at(i));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
struct View {
    void* first;
    int count;
    T& at(int i)
    {
        return static_cast<T*>(first)[i];
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> numbers {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        numbers.push_back(x);
    }
    View<int> v {numbers.data(), n};
    for (int i {n - 1}; i >= 0; --i) {
        std::println("{}", v.at(i));
    }
}
```
### Tests
```in
1
-1000
```
```in
20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 1000
```
```in
2
0 0
```
### Witness
```cpp
#include <vector>

template <typename T>
class Container {
public:
    T* elem;
    int sz;
};

int main()
{
    std::vector<double> store(10, 0.0);
    Container<double> c {store.data(), 10};
    c.elem[7] = 9.9;
}
```

## Alone 2
Form: run
Exempt: I.24
Write a function template `swap_through` that takes pointers to two objects of the same type and swaps the two objects.
Then write a program that reads n pairs of words and prints each pair swapped, using `swap_through`.
Input: the first line holds n, then n lines, each with two words.
Output: n lines, each pair with its two words swapped.
Limits: 1 ≤ n ≤ 10; every word has 1 to 10 letters, a to z.
### Examples
```in
2
up down
left right
```
```out
down up
right left
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

template <typename T>
void swap_through(T* a, T* b)
{
    T* p {a};
    T t {*p};
    *p = *b;
    *b = t;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string x {};
        std::string y {};
        std::cin >> x >> y;
        swap_through(&x, &y);
        std::println("{} {}", x, y);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

template <typename T>
void swap_through(void* a, T* b)
{
    T* p {static_cast<T*>(a)};
    T t {*p};
    *p = *b;
    *b = t;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string x {};
        std::string y {};
        std::cin >> x >> y;
        swap_through(&x, &y);
        std::println("{} {}", x, y);
    }
}
```
### Tests
```in
1
a b
```
```in
10
a b
c d
e f
g h
i j
k l
m n
o p
q r
abcdefghij zz
```
```in
1
same same
```
### Witness
```cpp
#include <vector>

template <typename T>
class Container {
public:
    std::vector<T> elem;
};

int main()
{
    Container<double> c {std::vector<double>(10, 0.0)};
    c.elem[7] = 9.9;
}
```
