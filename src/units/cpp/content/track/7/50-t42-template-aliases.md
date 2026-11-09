# 7.50 Name a dependent type once, with a template alias
Part: T.42 Use template aliases to simplify notation and hide implementation details
Clause: C++ Core Guidelines T.42, [temp.alias], [temp.res.general], [dcl.typedef]
After: 3.01, 3.07
Levels: c++11

## Scan
Rule: T.42
Pattern: /(?<!\busing\s+\w+\s*=[^;{}]*)\btypename\s+(?:::)?(?:\w+\s*(?:<[^;{}]*?>)?\s*::\s*)+(?:template\s+)?\w+\b(?!\s*(?:;|::))/
### Bad
```cpp
template<typename T>
void user(T& c)
{
    // ...
    typename container_traits<T>::value_type x; // bad,
                                                // verbose
    // ...
}
```
### Good
```cpp
template<typename T, size_t N>
class Matrix {
    // ...
    using Iterator = typename std::vector<T>::iterator;
    // ...
};

template<typename T>
using Value_type = typename container_traits<T>::value_type;

template<typename T>
void user2(T& c)
{
    // ...
    Value_type<T> x;
    // ...
}
```

## Example
```cpp
#include <cstdio>
#include <vector>

//: Wrap the dependent name in an alias template, once.
template <typename T>
using Value_type = typename T::value_type;

//: Use the alias wherever the type is needed; no typename.
template <typename T>
Value_type<T> first_plus_last(const T& c)
{
    Value_type<T> sum {c.front()};
    sum += c.back();
    return sum;
}

int main()
{
    std::vector<int> v {4, 5, 6};
    std::printf("%d\n", first_plus_last(v));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <vector>

template <typename T>
int count_zero(const T& c)
{
    T::value_type zero {};
    int n {0};
    for (const auto& x : c) {
        n += x == zero;
    }
    return n;
}

int main()
{
    std::vector<int> v {0, 5, 0};
    std::printf("%d\n", count_zero(v));
}
```
Answer: c++11..c++23 ill-formed 7, 10

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

template <typename T>
T::value_type first(const T& c)
{
    return c.front();
}

int main()
{
    std::vector<int> v {4, 5};
    std::printf("%d\n", first(v));
}
```
Answer:
- c++11..c++17: ill-formed 5, 13
- c++20..c++23: defined

## Alone 1
Form: run
Write a function template `total(c)` that returns the sum of the elements of a container c, as a value of the container's value_type that starts value-initialized and adds each element with +=.
Then write a program that reads n numbers and m words and prints the total of each.
Input: the first line holds n, the second the n numbers, the third m, the fourth the m words.
Output: two lines, the sum of the numbers, then the words joined with nothing between them.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000; 1 ≤ m ≤ 10; every word has 1 to 10 letters, a to z.
### Examples
```in
3
4 -1 7
2
ab cd
```
```out
10
abcd
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

template <typename T>
using Value_type = typename T::value_type;

template <typename T>
Value_type<T> total(const T& c)
{
    Value_type<T> sum {};
    for (const auto& x : c) {
        sum += x;
    }
    return sum;
}

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
    int m {0};
    std::cin >> m;
    std::vector<std::string> words {};
    for (int i {0}; i < m; ++i) {
        std::string w {};
        std::cin >> w;
        words.push_back(w);
    }
    std::println("{}", total(numbers));
    std::println("{}", total(words));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

template <typename T>
using Value_type = typename T::value_type;

template <typename T>
Value_type<T> total(const T& c)
{
    typename T::value_type sum {};
    for (const auto& x : c) {
        sum += x;
    }
    return sum;
}

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
    int m {0};
    std::cin >> m;
    std::vector<std::string> words {};
    for (int i {0}; i < m; ++i) {
        std::string w {};
        std::cin >> w;
        words.push_back(w);
    }
    std::println("{}", total(numbers));
    std::println("{}", total(words));
}
```
### Tests
```in
1
0
1
a
```
```in
20
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
10
abcdefghij b c d e f g h i j
```
```in
2
-5 5
3
x y x
```
### Witness
```cpp
#include <vector>

template <typename T>
struct container_traits {
    using value_type = typename T::value_type;
};

template <typename T>
using Value_type = typename container_traits<T>::value_type;

template <typename T>
void user2(T& c)
{
    Value_type<T> x {};
    c.push_back(x);
}

int main()
{
    std::vector<int> v {};
    user2(v);
}
```

## Alone 2
Form: run
Write a class template `Bag<T>` that keeps its elements in a std::vector<T>, with a member function `add(T x)` and members `begin()` and `end()` that return the vector's iterators.
Then write a program that reads n numbers, adds each to a Bag<int>, doubles every element through a range-for over the bag, and prints the elements.
Input: the first line holds n, the second line holds the n numbers.
Output: n lines, each number doubled, in the order read.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
4 -1 7
```
```out
8
-2
14
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
class Bag {
public:
    using Iterator = typename std::vector<T>::iterator;
    void add(T x)
    {
        items.push_back(x);
    }
    Iterator begin()
    {
        return items.begin();
    }
    Iterator end()
    {
        return items.end();
    }

private:
    std::vector<T> items {};
};

int main()
{
    int n {0};
    std::cin >> n;
    Bag<int> bag {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        bag.add(x);
    }
    for (int& x : bag) {
        x = x + x;
    }
    for (int x : bag) {
        std::println("{}", x);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

template <typename T>
class Bag {
public:
    void add(T x)
    {
        items.push_back(x);
    }
    typename std::vector<T>::iterator begin()
    {
        return items.begin();
    }
    typename std::vector<T>::iterator end()
    {
        return items.end();
    }

private:
    std::vector<T> items {};
};

int main()
{
    int n {0};
    std::cin >> n;
    Bag<int> bag {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        bag.add(x);
    }
    for (int& x : bag) {
        x = x + x;
    }
    for (int x : bag) {
        std::println("{}", x);
    }
}
```
### Tests
```in
1
0
```
```in
20
1000 -1000 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
```
```in
2
-7 7
```
### Witness
```cpp
#include <cstddef>
#include <vector>

template <typename T, std::size_t N>
class Matrix {
public:
    using Iterator = typename std::vector<T>::iterator;
    Iterator start()
    {
        return cells.begin();
    }

private:
    std::vector<T> cells {std::vector<T>(N)};
};

int main()
{
    Matrix<int, 4> m {};
    *m.start() = 1;
}
```
