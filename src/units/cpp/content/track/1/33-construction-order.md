# 1.33 The order of construction and destruction
Part: the order of construction and destruction
Clause: [class.base.init], [class.dtor], [stmt.dcl], [basic.life]
After: none
Levels: c++23

## Example
```cpp
#include <print>

//: Print when a part is made and when it ends.
struct Part {
    int id;
    Part(int n) : id {n}
    {
        std::println("make {}", id);
    }
    ~Part()
    {
        std::println("end {}", id);
    }
};

//: Make the base first, then the members in declaration order.
struct Machine : Part {
    Part motor;
    Part wheel;
    Machine() : Part {1}, wheel {3}, motor {2}
    {
        std::println("make machine");
    }
    ~Machine()
    {
        std::println("end machine");
    }
};

int main()
{
    //: Make the machine, its base and members, then its body.
    Machine machine;
    //: Make two more locals, which end before the machine ends.
    Part first {4};
    Part second {5};
}
```

## Verdict 1
```cpp
struct Range {
    int size;
    int first;
    int last;
    constexpr Range(int a, int b)
        : first {a}, last {b}, size {last - first + 1}
    {
    }
};

int counts[Range {3, 7}.size];

int main()
{
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <print>

struct Range {
    int first;
    int last;
    int size;
    Range(int a, int b)
        : size {last - first + 1}, first {a}, last {b}
    {
    }
};

int main()
{
    Range range {3, 7};
    std::println("{}", range.size);
}
```
Answer: c++23 defined

## Count
Columns: constructions, destructions
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Tracer {
    unsigned line;
    Tracer(Where at = Where::current()) : line {at.line()}
    {
        std::println("@{} constructions", line);
    }
    ~Tracer()
    {
        std::println("@{} destructions", line);
    }
};

int main()
{
    for (int i {0}; i < 4; ++i) {
        Tracer first;
        if (i % 2 == 0) {
            continue;
        }
        Tracer second;
    }
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n numbers into a `std::vector<int>` member of a struct, and prints their sum from the destructor of a second member of that struct, which keeps a reference to the vector.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the sum.
Limits: 0 ≤ n ≤ 1000; each number is between −10000 and 10000.
### Examples
```in
0
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Summer {
    const std::vector<int>& values;
    ~Summer()
    {
        int total {0};
        for (int v : values) {
            total += v;
        }
        std::println("{}", total);
    }
};

struct Record {
    std::vector<int> values;
    Summer summer {values};
};

int main()
{
    int n {0};
    std::cin >> n;
    Record record;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        record.values.push_back(v);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Summer {
    const std::vector<int>& values;
    ~Summer()
    {
        int total {0};
        for (int v : values) {
            total += v;
        }
        std::println("{}", total);
    }
};

struct Record {
    Summer summer {values};
    std::vector<int> values;
};

int main()
{
    int n {0};
    std::cin >> n;
    Record record;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        record.values.push_back(v);
    }
}
```
### Tests
```in
3
1 2 3
```
```in
1
-10000
```
```in
5
10000 10000 10000 10000 10000
```
### Witness
```in
2
4 5
```

## Alone 2
Form: run
Write a program that reads three words and prints them in the reverse order, one per line, each from the destructor of an object that holds that word.
Input: one line, three words separated by spaces.
Output: three lines, one word each.
Limits: each word has 1 to 20 lowercase letters.
### Examples
```in
pop top pop
```
```out
pop
top
pop
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

struct Holder {
    std::string word;
    ~Holder()
    {
        std::println("{}", word);
    }
};

int main()
{
    std::string a;
    std::string b;
    std::string c;
    std::cin >> a >> b >> c;
    Holder first {a};
    Holder second {b};
    Holder third {c};
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

struct Holder {
    std::string word;
    ~Holder()
    {
        std::println("{}", word);
    }
};

int main()
{
    std::string a;
    std::string b;
    std::string c;
    std::cin >> a >> b >> c;
    Holder first {c};
    Holder second {b};
    Holder third {a};
}
```
### Tests
```in
one two three
```
```in
a b c
```
```in
same same other
```
### Witness
```in
x y z
```
