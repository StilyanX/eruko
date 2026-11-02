# 1.40 The lifetime extension of a temporary bound to a reference
Part: the lifetime extension of a temporary bound to a reference
Clause: [class.temporary], [dcl.init.ref], [stmt.ranged], [diff.cpp20.stmt]
After: 1.28
Levels: c++23

## Example
```cpp
#include <print>
#include <string>

std::string make()
{
    return "made";
}

const std::string& same(const std::string& s)
{
    return s;
}

int main()
{
    //: Bind the returned temporary to a const reference to keep it.
    const std::string& kept {make()};
    //: Bind it to an rvalue reference: that keeps it too.
    std::string&& also {make()};
    also += "!";
    //: Copy what a reference-returning call gives back.
    std::string copy {same(make())};
    std::println("{} {} {}", kept, also, copy);
}
```

## Verdict 1
```cpp
#include <print>
#include <string>

const std::string& same(const std::string& s)
{
    return s;
}

int main()
{
    const std::string& r {same(std::string {"temporary"})};
    std::println("{}", r);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

struct Box
{
    std::vector<int> items;

    const std::vector<int>& get() const
    {
        return items;
    }
};

Box make()
{
    return Box {{1, 2, 3}};
}

int main()
{
    int sum {0};
    for (int x : make().get()) {
        sum += x;
    }
    std::printf("%d\n", sum);
}
```
Levels: c++20
Answer:
- c++20: undefined sanitizer
- c++23: defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads a word and a number k, and prints the longer of two strings: the word, and a string of k stars. Print the word when the two have the same length. Find the longer one with a function `longer(a, b)` that takes both strings as `const std::string&` and returns a `const std::string&`.
Input: one line, a word and an integer k.
Output: one line, the longer string.
Limits: the word has 1 to 30 letters, 0 ≤ k ≤ 100.
### Examples
```in
apple 3
```
```out
apple
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

const std::string& longer(const std::string& a,
                          const std::string& b)
{
    if (b.size() > a.size()) {
        return b;
    }
    return a;
}

int main()
{
    std::string word;
    int k {0};
    std::cin >> word >> k;
    std::string best {longer(word, std::string(k, '*'))};
    std::println("{}", best);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

const std::string& longer(const std::string& a,
                          const std::string& b)
{
    if (b.size() > a.size()) {
        return b;
    }
    return a;
}

int main()
{
    std::string word;
    int k {0};
    std::cin >> word >> k;
    const std::string& best {longer(word, std::string(k, '*'))};
    std::println("{}", best);
}
```
### Tests
```in
cat 5
```
```in
sun 3
```
```in
a 40
```
### Witness
```in
dog 6
```

## Alone 2
Form: run
Write a program that reads n words and prints `begin`, then each word on its own line, then `end`. The constructor of a type `Frame` prints `begin` and its destructor prints `end`. `main` gets its one `Frame` from a call of a function `Frame open()` and declares no variable of type `Frame`.
Input: one line, n; one line, n words.
Output: n + 2 lines.
Limits: 0 ≤ n ≤ 100, a word has 1 to 20 letters.
### Examples
```in
0

```
```out
begin
end
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

struct Frame
{
    Frame()
    {
        std::println("begin");
    }

    ~Frame()
    {
        std::println("end");
    }
};

Frame open()
{
    return Frame {};
}

int main()
{
    const Frame& frame {open()};
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        std::println("{}", w);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

struct Frame
{
    Frame()
    {
        std::println("begin");
    }

    ~Frame()
    {
        std::println("end");
    }
};

Frame open()
{
    return Frame {};
}

int main()
{
    open();
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        std::println("{}", w);
    }
}
```
### Tests
```in
2
one two
```
```in
1
x
```
```in
3
a b c
```
### Witness
```in
1
word
```
