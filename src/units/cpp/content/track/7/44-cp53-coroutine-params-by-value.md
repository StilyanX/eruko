# 7.44 Pass a coroutine's parameters by value
Part: CP.53 Parameters to coroutines should not be passed by reference
Clause: C++ Core Guidelines CP.53, [dcl.fct.def.coroutine], [class.temporary], [basic.life], [coro.generator]
After: 1.17, 1.40
Levels: c++23

## Scan
Rule: CP.53
Pattern: /(?:\]|\boperator\s*\(\s*\)|\b(?!(?:if|for|while|switch|catch|requires|noexcept|decltype|sizeof|alignof|static_assert|return)\b)[A-Za-z_]\w*)\s*\([^()]*&[^()]*\)[^;{}()]*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)*\bco_(?:await|yield|return)\b/
### Bad
```cpp
std::future<int> Class::do_something(const
std::shared_ptr<int>& input)
{
    co_await something();

    // DANGER: the reference to input may no longer be valid
    // and may be freed memory
    co_return *input + 1;
}
```
### Good
```cpp
std::future<int> Class::do_something(std::shared_ptr<int>
input)
{
    co_await something();
    co_return *input + 1; // input is a copy that is still
                          // valid here
}
```

## Example
```cpp
#include <generator>
#include <print>
#include <string>

//: Take the word by value, so the coroutine keeps its own copy.
std::generator<char> letters(std::string word)
{
    //: Read the copy after the first suspension; it is still there.
    for (char c : word) {
        co_yield c;
    }
}

int main()
{
    //: Pass a temporary; it dies at the semicolon, the copy lives on.
    std::generator<char> g {letters(std::string {"abc"})};
    for (char c : g) {
        std::println("{}", c);
    }
}
```

## Verdict 1
```cpp
#include <generator>
#include <print>
#include <string>

std::generator<char> letters(const std::string& word)
{
    for (char c : word) {
        co_yield c;
    }
}

int main()
{
    std::generator<char> g {letters(std::string {"abc"})};
    for (char c : g) {
        std::println("{}", c);
    }
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <generator>
#include <print>
#include <string>

std::generator<char> letters(const std::string& word)
{
    for (char c : word) {
        co_yield c;
    }
}

int main()
{
    std::string kept {"abc"};
    std::generator<char> g {letters(kept)};
    for (char c : g) {
        std::println("{}", c);
    }
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads a word and prints its letters one per line, from the last letter to the first.
A function `backwards` takes the word and returns a std::generator<char> that yields the letters in that order.
Input: one line, the word.
Output: one line for each letter of the word, last letter first.
Limits: the word has 1 to 30 letters, a to z.
### Examples
```in
cat
```
```out
t
a
c
```
### Reference
```cpp
#include <generator>
#include <iostream>
#include <print>
#include <string>

std::generator<char> backwards(std::string word)
{
    for (auto c {word.rbegin()}; c != word.rend(); ++c) {
        co_yield *c;
    }
}

int main()
{
    std::string word {};
    std::cin >> word;
    for (char c : backwards(word)) {
        std::println("{}", c);
    }
}
```
### Wrong
```cpp
#include <generator>
#include <iostream>
#include <print>
#include <string>

std::generator<char> backwards(const std::string& word)
{
    for (auto c {word.rbegin()}; c != word.rend(); ++c) {
        co_yield *c;
    }
}

int main()
{
    std::string word {};
    std::cin >> word;
    for (char c : backwards(word)) {
        std::println("{}", c);
    }
}
```
### Tests
```in
a
```
```in
abcdefghijklmnopqrstuvwxyzabcd
```
```in
noon
```
### Witness
```cpp
#include <generator>
#include <memory>

std::generator<int> do_something(std::shared_ptr<int> input)
{
    co_yield 0;
    co_yield *input + 1;
}

int main()
{
    int sum {0};
    for (int x : do_something(std::make_shared<int>(0))) {
        sum += x;
    }
}
```

## Alone 2
Form: run
Write a program that reads n words and a letter, and prints the words that start with that letter.
A lambda named `matching` takes the words and the letter and returns a std::generator<std::string> that yields those words.
Input: the first line holds n and the letter, the second line holds the n words.
Output: the words that start with the letter, one per line, in the order read; the line none if no word does.
Limits: 1 ≤ n ≤ 20; every word has 1 to 10 letters, a to z; the letter is a to z.
### Examples
```in
4 b
bee ant bat cow
```
```out
bee
bat
```
### Reference
```cpp
#include <generator>
#include <iostream>
#include <print>
#include <string>
#include <vector>

int main()
{
    auto matching {
        [](std::vector<std::string> words, char first)
            -> std::generator<std::string> {
            for (const std::string& w : words) {
                if (w.front() == first) {
                    co_yield w;
                }
            }
        }};
    int n {0};
    char first {'a'};
    std::cin >> n >> first;
    std::vector<std::string> words {};
    for (int i {0}; i < n; ++i) {
        std::string w {};
        std::cin >> w;
        words.push_back(w);
    }
    bool any {false};
    for (const std::string& w : matching(words, first)) {
        std::println("{}", w);
        any = true;
    }
    if (!any) {
        std::println("none");
    }
}
```
### Wrong
```cpp
#include <generator>
#include <iostream>
#include <print>
#include <string>
#include <vector>

int main()
{
    auto matching {
        [](const std::vector<std::string>& words, char first)
            -> std::generator<std::string> {
            for (const std::string& w : words) {
                if (w.front() == first) {
                    co_yield w;
                }
            }
        }};
    int n {0};
    char first {'a'};
    std::cin >> n >> first;
    std::vector<std::string> words {};
    for (int i {0}; i < n; ++i) {
        std::string w {};
        std::cin >> w;
        words.push_back(w);
    }
    bool any {false};
    for (const std::string& w : matching(words, first)) {
        std::println("{}", w);
        any = true;
    }
    if (!any) {
        std::println("none");
    }
}
```
### Tests
```in
1 z
z
```
```in
3 q
ant bee cow
```
```in
20 a
a ab abc b ba bab abcdefghij c ca cab aa b c d e f g h i aaaaaaaaaa
```
```in
2 m
moon mouse
```
### Witness
```cpp
#include <generator>
#include <memory>

int main()
{
    auto do_something {[](std::shared_ptr<int> input)
                            -> std::generator<int> {
        co_yield *input + 1;
    }};
    int sum {0};
    for (int x : do_something(std::make_shared<int>(0))) {
        sum += x;
    }
}
```
