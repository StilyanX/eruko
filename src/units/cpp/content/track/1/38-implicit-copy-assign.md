# 1.38 When the copy assignment is declared implicitly
Part: when the copy assignment is declared implicitly
Clause: [class.copy.assign], [class.default], [dcl.fct.def.delete]
After: 1.34
Levels: c++23

## Example
```cpp
#include <print>
#include <string>

struct Note
{
    std::string text;
    int page {0};
};

struct Slot
{
    int id {0};

    Slot() = default;
    Slot(Slot&& other) = default;
    Slot& operator=(const Slot& other) = default;
};

int main()
{
    //: Declare no copy assignment, so the compiler declares one.
    Note a {"first", 3};
    Note b {"second", 7};
    //: Assign each member of a to the same member of b.
    b = a;
    a.text = "changed";
    std::println("{} {}", b.text, b.page);
    //: Ask for the copy assignment back after a move constructor.
    Slot s;
    Slot t;
    s.id = 4;
    t = s;
    std::println("{}", t.id);
}
```

## Verdict 1
```cpp
#include <print>

struct Slot
{
    int id {0};

    Slot() = default;
    Slot(Slot&& other) = default;
};

int main()
{
    Slot s;
    Slot t;
    s.id = 4;
    t = s;
    std::println("{}", t.id);
}
```
Answer: c++23 ill-formed 16

## Verdict 2
```cpp
#include <print>

struct Point
{
    int x {0};
    int y {0};

    Point() = default;

    Point(const Point& other) : x {other.x}, y {other.y}
    {
        std::println("copy");
    }
};

int main()
{
    Point p;
    Point q;
    p.x = 2;
    p.y = 5;
    q = p;
    std::println("{} {}", q.x, q.y);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a program that defines a struct `Cell` with one `int` member `value`, a constructor from an `int` and no default constructor, and a move constructor that sets the moved-from cell's value to 0, so that one cell can still be assigned to another by copy.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(std::is_copy_assignable_v<Cell>);
static_assert(std::is_move_constructible_v<Cell>);
static_assert(std::is_constructible_v<Cell, int>);
static_assert(std::is_default_constructible_v<Cell>);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <type_traits>

struct Cell
{
    int value {0};

    Cell(int v) : value {v}
    {
    }

    Cell(Cell&& other) : value {other.value}
    {
        other.value = 0;
    }

    Cell& operator=(const Cell& other) = default;
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

struct Cell
{
    int value {0};

    Cell(int v) : value {v}
    {
    }

    Cell(Cell&& other) : value {other.value}
    {
        other.value = 0;
    }
};

int main()
{
}
```
### Witness
```cpp
static_assert(std::is_copy_assignable_v<Cell>);
```

## Alone 2
Form: run
Write a program that reads n words and makes one `Tag` for each, in order; a `Tag` holds a word and a serial number, and every `Tag` made, by any constructor, copies included, takes the next serial from 1. It then reads m lines `i j` and assigns tag j to tag i: the word is copied, the serial number stays. It prints every tag at the end, one line each.
Input: one line, n; one line, n words; one line, m; then m lines, two integers i and j.
Output: n lines, each the tag's serial number and word, separated by a space.
Limits: 1 ≤ n ≤ 100, 0 ≤ m ≤ 100, 1 ≤ i, j ≤ n, a word has at most 20 letters.
### Examples
```in
3
red green blue
0
```
```out
1 red
2 green
3 blue
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

int next_serial {1};

struct Tag
{
    std::string word;
    int serial {0};

    Tag(const std::string& w)
        : word {w}, serial {next_serial++}
    {
    }

    Tag(const Tag& other)
        : word {other.word}, serial {next_serial++}
    {
    }

    Tag& operator=(const Tag& other)
    {
        word = other.word;
        return *this;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Tag> tags;
    tags.reserve(n);
    for (int k {0}; k < n; ++k) {
        std::string w;
        std::cin >> w;
        tags.emplace_back(w);
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        tags[i - 1] = tags[j - 1];
    }
    for (const Tag& t : tags) {
        std::println("{} {}", t.serial, t.word);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

int next_serial {1};

struct Tag
{
    std::string word;
    int serial {0};

    Tag(const std::string& w)
        : word {w}, serial {next_serial++}
    {
    }

    Tag(const Tag& other)
        : word {other.word}, serial {next_serial++}
    {
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Tag> tags;
    tags.reserve(n);
    for (int k {0}; k < n; ++k) {
        std::string w;
        std::cin >> w;
        tags.emplace_back(w);
    }
    int m {0};
    std::cin >> m;
    for (int k {0}; k < m; ++k) {
        int i {0};
        int j {0};
        std::cin >> i >> j;
        tags[i - 1] = tags[j - 1];
    }
    for (const Tag& t : tags) {
        std::println("{} {}", t.serial, t.word);
    }
}
```
### Tests
```in
3
red green blue
1
1 3
```
```in
2
up down
2
2 1
1 2
```
```in
4
a b c d
3
4 1
3 4
2 2
```
### Witness
```in
2
left right
1
2 1
```
