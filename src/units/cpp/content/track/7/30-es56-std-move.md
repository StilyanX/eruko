# 7.30 ES.56: write std::move only to hand an object to another scope
Part: ES.56 Write std::move() only when you need to explicitly move an object to another scope
Clause: C++ Core Guidelines ES.56, [forward], [class.copy.elision], [stmt.return], [unique.ptr.single.ctor]
After: 2.04, 2.05, 2.11
Levels: c++14

## Scan
Rule: ES.56
Warning: -Wpessimizing-move, -Wredundant-move
### Bad
```cpp
#include <utility>
#include <vector>

using std::vector;

vector<int> make_vector()
{
    vector<int> result;
    return std::move(result);
}

vector<int> v = std::move(make_vector());
```
### Good
```cpp
#include <memory>
#include <utility>

using std::make_unique;
using std::unique_ptr;

struct widget {
};

void sink(unique_ptr<widget> p);

void f()
{
    auto w = make_unique<widget>();
    sink(std::move(w));
}
```

## Example
```cpp
#include <print>
#include <string>
#include <utility>
#include <vector>

//: Take the word by value, so the function owns its copy.
std::vector<std::string> pair_of(std::string a)
{
    std::vector<std::string> out;
    //: Hand the word to the vector with std::move: it changes owner.
    out.push_back(std::move(a));
    out.push_back("end");
    //: Return the local by its name; the language moves it.
    return out;
}

int main()
{
    //: Take the returned value as it is, with no std::move.
    std::vector<std::string> v {pair_of("start")};
    std::println("{} {}", v[0], v[1]);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>
#include <utility>

int main()
{
    const std::string s {"abc"};
    std::string t {std::move(s)};
    std::printf("%s %s\n", s.c_str(), t.c_str());
}
```
Answer: c++14..c++23 defined

## Verdict 2
```cpp
#include <cstdio>
#include <memory>
#include <utility>

void sink(std::unique_ptr<int> p)
{
    std::printf("%d\n", *p);
}

int main()
{
    auto w = std::make_unique<int>(5);
    sink(std::move(w));
    std::printf("%d\n", w == nullptr);
}
```
Answer: c++14..c++23 defined

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

using Where = std::source_location;

struct Tally {
    Tally() = default;
    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
    Tally(Tally&&, Where at = Where::current())
    {
        std::println("@{} moves", at.line());
    }
};

Tally make()
{
    return Tally {};
}

Tally keep()
{
    Tally t;
    return std::move(t);
}

int main()
{
    Tally a;
    const Tally c {};
    Tally b {std::move(a)};
    Tally d {std::move(c)};
    Tally e {make()};
    Tally f {std::move(make())};
    Tally g {keep()};
}
```

## Alone 1
Form: run
Write a program that reads n words and prints them in the opposite order, one per line. Read the words in a function that returns them in a std::vector<std::string>.
Input: the first line holds n; the second line holds n words.
Output: n lines, each one word.
Limits: 1 ≤ n ≤ 50, each word has 1 to 20 lowercase letters.
### Examples
```in
3
red green blue
```
```out
blue
green
red
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <ranges>
#include <string>
#include <vector>

std::vector<std::string> read_words(int n)
{
    std::vector<std::string> words;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        words.push_back(w);
    }
    return words;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::string> words = read_words(n);
    for (const std::string& w : words | std::views::reverse) {
        std::println("{}", w);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <ranges>
#include <string>
#include <utility>
#include <vector>

std::vector<std::string> read_words(int n)
{
    std::vector<std::string> words;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        words.push_back(w);
    }
    return words;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::string> words = std::move(read_words(n));
    for (const std::string& w : words | std::views::reverse) {
        std::println("{}", w);
    }
}
```
### Tests
```in
1
a
```
```in
2
abcdefghijklmnopqrst b
```
```in
4
x x y y
```
### Witness
```cpp
#include <vector>

std::vector<int> make_vector()
{
    std::vector<int> result;
    return result;
}

std::vector<int> v = make_vector();
```

## Alone 2
Form: run
Write a program that reads two words and prints them joined by a hyphen. Join them in a function that takes both words by value and returns the joined word.
Input: one line, two words.
Output: one line, the first word, a hyphen, then the second word.
Limits: each word has 1 to 20 lowercase letters.
### Examples
```in
well known
```
```out
well-known
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

std::string join(std::string a, std::string b)
{
    a += '-';
    a += b;
    return a;
}

int main()
{
    std::string x;
    std::string y;
    std::cin >> x >> y;
    std::println("{}", join(x, y));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>

std::string join(std::string a, std::string b)
{
    a += '-';
    a += b;
    return std::move(a);
}

int main()
{
    std::string x;
    std::string y;
    std::cin >> x >> y;
    std::println("{}", join(x, y));
}
```
### Tests
```in
a b
```
```in
abcdefghijklmnopqrst abcdefghijklmnopqrst
```
```in
same same
```
### Witness
```cpp
#include <string>

std::string keep(std::string s)
{
    s += '!';
    return s;
}
```
