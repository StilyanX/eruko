# 5.01 Temporaries in the range-based for statement
Part: temporaries in the range-based `for` statement
Clause: [stmt.ranged], [class.temporary], [diff.cpp20.stmt]
After: none
Levels: c++20

## Example
```cpp
#include <print>
#include <string>
#include <vector>

struct Shelf {
    std::vector<std::string> books;
    const std::vector<std::string>& titles() const
    {
        return books;
    }
};

Shelf make_shelf()
{
    return Shelf {{"Emma", "Ulysses", "Dracula"}};
}

int main()
{
    //: Loop over a reference into a temporary; it lives until the loop ends.
    for (const std::string& t : make_shelf().titles()) {
        std::println("{}", t);
    }
    //: Copy the titles into a variable to keep them after the statement.
    std::vector<std::string> kept {make_shelf().titles()};
    std::println("{}", kept.size());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <vector>

struct Bag {
    std::vector<int> items;
    const std::vector<int>& all() const
    {
        return items;
    }
};

Bag make()
{
    return Bag {{4, 5, 6}};
}

int main()
{
    int sum {0};
    for (int x : make().all()) {
        sum += x;
    }
    std::printf("%d\n", sum);
}
```
Answer:
- c++20: undefined sanitizer
- c++23: defined

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

struct Bag {
    std::vector<int> items;
    std::vector<int> copy() const
    {
        return items;
    }
};

Bag make()
{
    return Bag {{4, 5, 6}};
}

int main()
{
    int sum {0};
    for (int x : make().copy()) {
        sum += x;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n integers and a number k, and prints the longer of two lists: the n integers, and a list of k zeros. Print the n integers when the two lists have the same length. Find the longer list with a function `longer(a, b)` that takes both lists as `const std::vector<int>&` and returns a `const std::vector<int>&`. Make the list of zeros as a temporary in the call of `longer`.
Input: one line, n; one line, n integers; one line, k.
Output: the numbers of the longer list, one per line.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000; 0 ≤ k ≤ 100.
### Examples
```in
3
7 8 9
2
```
```out
7
8
9
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

const std::vector<int>& longer(const std::vector<int>& a,
                               const std::vector<int>& b)
{
    if (b.size() > a.size()) {
        return b;
    }
    return a;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    int k {0};
    std::cin >> k;
    for (int x : longer(v, std::vector<int>(k, 0))) {
        std::println("{}", x);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

const std::vector<int>& longer(const std::vector<int>& a,
                               const std::vector<int>& b)
{
    if (b.size() > a.size()) {
        return b;
    }
    return a;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    int k {0};
    std::cin >> k;
    const std::vector<int>& best {
        longer(v, std::vector<int>(k, 0))};
    for (int x : best) {
        std::println("{}", x);
    }
}
```
### Tests
```in
1
5
0
```
```in
2
-1 4
2
```
```in
1
3
4
```
```in
4
1 2 3 4
100
```
### Witness
```in
1
6
3
```

## Alone 2
Form: run
Write a program that reads n words and prints each word on its own line, then `closed`. A type `Batch` keeps the words in a `std::vector<std::string>`, and its destructor prints `closed`. Its member function `words()` returns them as a `const std::vector<std::string>&`. `main` gets the batch from a call of a function `Batch read_batch()` that reads the input. `main` declares no variable of type `Batch` and prints the words in one range-based `for` statement.
Input: one line, n; one line, n words.
Output: n + 1 lines.
Limits: 0 ≤ n ≤ 100; a word has 1 to 20 letters.
### Examples
```in
0

```
```out
closed
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

struct Batch {
    std::vector<std::string> list;
    ~Batch()
    {
        std::println("closed");
    }
    const std::vector<std::string>& words() const
    {
        return list;
    }
};

Batch read_batch()
{
    int n {0};
    std::cin >> n;
    std::vector<std::string> list;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        list.push_back(w);
    }
    return Batch {list};
}

int main()
{
    for (const std::string& w : read_batch().words()) {
        std::println("{}", w);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

struct Batch {
    std::vector<std::string> list;
    ~Batch()
    {
        std::println("closed");
    }
    const std::vector<std::string>& words() const
    {
        return list;
    }
};

Batch read_batch()
{
    int n {0};
    std::cin >> n;
    std::vector<std::string> list;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        list.push_back(w);
    }
    return Batch {list};
}

int main()
{
    std::vector<std::string> kept {read_batch().words()};
    for (const std::string& w : kept) {
        std::println("{}", w);
    }
}
```
### Tests
```in
1
apple
```
```in
3
one two three
```
```in
2
a b
```
### Witness
```in
1
word
```
