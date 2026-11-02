# 2.10 A noexcept move in a container's growth
Part: a `noexcept` move in a container's growth
Clause: [vector.modifiers], [vector.capacity], [forward], [except.spec], [meta.unary.prop]
After: 2.08
Levels: c++11

## Example
```cpp
#include <print>
#include <string>
#include <utility>
#include <vector>

//: Mark the move noexcept, so a growing vector moves each Word.
struct Word {
    std::string text;
    Word(std::string t) : text {std::move(t)}
    {
    }
    Word(const Word& other) : text {other.text}
    {
        std::println("copy {}", text);
    }
    Word(Word&& other) noexcept : text {std::move(other.text)}
    {
    }
};

int main()
{
    //: Make room for one Word and add two, so the vector grows.
    std::vector<Word> words;
    words.reserve(1);
    words.push_back(Word {"one"});
    words.push_back(Word {"two"});
    //: Print the words; no copy was printed.
    for (const Word& w : words) {
        std::println("{}", w.text);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>
#include <vector>

struct Job {
    std::unique_ptr<int> id;
    Job(int i) : id {new int {i}}
    {
    }
    Job(const Job& other) = delete;
    Job(Job&& other) : id {std::move(other.id)}
    {
    }
};

int main()
{
    std::vector<Job> jobs;
    for (int i {0}; i < 5; ++i) {
        jobs.push_back(Job {i});
    }
    std::printf("%d\n", *jobs[4].id);
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <string>
#include <type_traits>
#include <utility>

struct Word {
    std::string text;
    Word(const Word& other) = default;
    Word(Word&& other) : text {std::move(other.text)}
    {
    }
};

static_assert(std::is_nothrow_move_constructible<Word>::value,
              "a growing vector moves Words");

int main()
{
}
```
Answer: c++11..c++23 ill-formed 13

## Count
Columns: copies, moves
```cpp
#include <print>
#include <vector>

int at {0};

struct Slow {
    Slow() = default;
    Slow(const Slow& other)
    {
        std::println("@{} copies", at);
    }
    Slow(Slow&& other)
    {
        std::println("@{} moves", at);
    }
};

struct Fast {
    Fast() = default;
    Fast(const Fast& other)
    {
        std::println("@{} copies", at);
    }
    Fast(Fast&& other) noexcept
    {
        std::println("@{} moves", at);
    }
};

int main()
{
    std::vector<Slow> s;
    std::vector<Fast> f;
    s.reserve(1);
    f.reserve(1);
    s.emplace_back();
    f.emplace_back();
    at = __LINE__ + 1;
    s.emplace_back();
    at = __LINE__ + 1;
    f.emplace_back();
}
```

## Alone 1
Form: run
Write a program that reads n words, keeps each in a struct `Word` that holds a `std::string` and prints `copy` each time a Word is copied, adds each Word to the end of one `std::vector<Word>`, and then prints the words in order.
Input: one line, n, then one line of n words separated by spaces.
Output: n lines, one word each, in the order read.
Limits: 1 ≤ n ≤ 1000; each word has 1 to 20 letters.
### Examples
```in
1
apple
```
```out
apple
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>
#include <vector>

struct Word {
    std::string text;
    Word(std::string t) : text {std::move(t)}
    {
    }
    Word(const Word& other) : text {other.text}
    {
        std::println("copy");
    }
    Word(Word&& other) noexcept : text {std::move(other.text)}
    {
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Word> words;
    for (int i {0}; i < n; ++i) {
        std::string t;
        std::cin >> t;
        words.push_back(Word {t});
    }
    for (const Word& w : words) {
        std::println("{}", w.text);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>
#include <vector>

struct Word {
    std::string text;
    Word(std::string t) : text {std::move(t)}
    {
    }
    Word(const Word& other) : text {other.text}
    {
        std::println("copy");
    }
    Word(Word&& other) : text {std::move(other.text)}
    {
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Word> words;
    for (int i {0}; i < n; ++i) {
        std::string t;
        std::cin >> t;
        words.push_back(Word {t});
    }
    for (const Word& w : words) {
        std::println("{}", w.text);
    }
}
```
### Tests
```in
2
red green
```
```in
5
a b c d e
```
```in
9
one two three four five six seven eight nine
```
### Witness
```in
3
x y z
```

## Alone 2
Form: probes
Write a struct `Frame`, made from an int n, that holds n zeros in a `std::vector<int>`, cannot be copied, and has a move constructor that a growing `std::vector<Frame>` can count on not to throw.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Frame a {3};
Frame b {std::move(a)};
static_assert(std::is_nothrow_move_constructible_v<Frame>);
Frame c {b};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <type_traits>
#include <utility>
#include <vector>

struct Frame {
    std::vector<int> cells;
    Frame(int n) : cells(n)
    {
    }
    Frame(Frame&& other) noexcept
        : cells {std::move(other.cells)}
    {
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>
#include <utility>
#include <vector>

struct Frame {
    std::vector<int> cells;
    Frame(int n) : cells(n)
    {
    }
    Frame(Frame&& other)
        : cells {std::move(other.cells)}
    {
    }
};

int main()
{
}
```
### Witness
```cpp
static_assert(std::is_nothrow_move_constructible_v<Frame>);
```
