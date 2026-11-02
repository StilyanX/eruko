# 1.39 Virtual dispatch
Part: virtual dispatch
Clause: [class.virtual], [class.cdtor], [expr.call], [expr.delete]
After: none
Levels: c++23

## Example
```cpp
#include <print>

struct Shape
{
    virtual ~Shape() = default;

    virtual int area() const
    {
        return 0;
    }
};

struct Square : Shape
{
    int side {0};

    int area() const override
    {
        return side * side;
    }
};

void show(const Shape& s)
{
    std::println("{}", s.area());
}

int main()
{
    Square sq;
    sq.side = 3;
    //: Call through a reference to the base: the square's own runs.
    show(sq);
    //: Name the base's version to call it without dispatch.
    std::println("{}", sq.Shape::area());
}
```

## Verdict 1
```cpp
#include <print>

struct Base
{
    Base()
    {
        std::println("{}", name());
    }

    virtual ~Base() = default;

    virtual const char* name() const
    {
        return "base";
    }
};

struct Derived : Base
{
    const char* name() const override
    {
        return "derived";
    }
};

int main()
{
    Derived d;
    std::println("{}", d.name());
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

struct Shape
{
    virtual ~Shape() = default;

    virtual int area() const
    {
        return 0;
    }
};

struct Square : Shape
{
    int side {2};

    int area() override
    {
        return side * side;
    }
};

int main()
{
    Square sq;
    const Shape& s {sq};
    std::println("{}", s.area());
}
```
Answer: c++23 ill-formed 17

## Alone 1
Form: run
Write a program that reads n items and prints their total price. A plain item is a `Item` with a price p; a sale item is a `Sale`, derived from `Item`, whose price is p minus d percent of p, rounded down. Keep every item as a `std::unique_ptr<Item>` in one `std::vector`, and add up the prices through a member function `price()` of `Item`.
Input: one line, n; then n lines, each `plain p` or `sale p d`.
Output: one line, the total price.
Limits: 1 ≤ n ≤ 1000, 1 ≤ p ≤ 10000, 0 ≤ d ≤ 100.
### Examples
```in
3
plain 100
sale 40 0
plain 7
```
```out
147
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <vector>

struct Item
{
    int base {0};

    explicit Item(int p) : base {p}
    {
    }

    virtual ~Item() = default;

    virtual int price() const
    {
        return base;
    }
};

struct Sale : Item
{
    int off {0};

    Sale(int p, int d) : Item {p}, off {d}
    {
    }

    int price() const
    {
        return base - base * off / 100;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<Item>> items;
    for (int i {0}; i < n; ++i) {
        std::string kind;
        int p {0};
        std::cin >> kind >> p;
        if (kind == "sale") {
            int d {0};
            std::cin >> d;
            items.push_back(std::make_unique<Sale>(p, d));
        } else {
            items.push_back(std::make_unique<Item>(p));
        }
    }
    int total {0};
    for (const auto& it : items) {
        total += it->price();
    }
    std::println("{}", total);
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <vector>

struct Item
{
    int base {0};

    explicit Item(int p) : base {p}
    {
    }

    virtual ~Item() = default;

    virtual int price() const
    {
        return base;
    }
};

struct Sale : Item
{
    int off {0};

    Sale(int p, int d) : Item {p}, off {d}
    {
    }

    int price()
    {
        return base - base * off / 100;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<Item>> items;
    for (int i {0}; i < n; ++i) {
        std::string kind;
        int p {0};
        std::cin >> kind >> p;
        if (kind == "sale") {
            int d {0};
            std::cin >> d;
            items.push_back(std::make_unique<Sale>(p, d));
        } else {
            items.push_back(std::make_unique<Item>(p));
        }
    }
    int total {0};
    for (const auto& it : items) {
        total += it->price();
    }
    std::println("{}", total);
}
```
### Tests
```in
2
sale 100 25
plain 10
```
```in
1
sale 99 50
```
```in
4
sale 1000 100
sale 10 10
plain 5
sale 7 0
```
### Witness
```in
1
sale 200 10
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n words and keeps each as a `std::unique_ptr<Token>` in one `std::vector`. `Token` holds the word. A word of digits only is a `Number`, derived from `Token`, which adds nothing; any other word is a `Word`, derived from `Token`, which also keeps the number of vowels (a, e, i, o, u) it counts when it is made. Print every token in order through a member function `show()` of `Token`.
Input: one line, n; one line, n words.
Output: n lines: `number w` for a number, `word w v` for any other word, v its vowels.
Limits: 1 ≤ n ≤ 100, a word has 1 to 20 lowercase letters or digits.
### Examples
```in
2
42 7
```
```out
number 42
number 7
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <vector>

struct Token
{
    std::string text;

    explicit Token(const std::string& t) : text {t}
    {
    }

    virtual ~Token() = default;

    virtual void show() const = 0;
};

struct Number : Token
{
    using Token::Token;

    void show() const override
    {
        std::println("number {}", text);
    }
};

struct Word : Token
{
    int vowels {0};

    explicit Word(const std::string& t) : Token {t}
    {
        for (char c : text) {
            if (std::string {"aeiou"}.contains(c)) {
                ++vowels;
            }
        }
    }

    void show() const override
    {
        std::println("word {} {}", text, vowels);
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<Token>> tokens;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        bool digits {true};
        for (char c : w) {
            if (c < '0' || c > '9') {
                digits = false;
            }
        }
        if (digits) {
            tokens.push_back(std::make_unique<Number>(w));
        } else {
            tokens.push_back(std::make_unique<Word>(w));
        }
    }
    for (const auto& t : tokens) {
        t->show();
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <vector>

struct Token
{
    std::string text;

    explicit Token(const std::string& t) : text {t}
    {
    }

    ~Token() = default;

    virtual void show() const = 0;
};

struct Number : Token
{
    using Token::Token;

    void show() const override
    {
        std::println("number {}", text);
    }
};

struct Word : Token
{
    int vowels {0};

    explicit Word(const std::string& t) : Token {t}
    {
        for (char c : text) {
            if (std::string {"aeiou"}.contains(c)) {
                ++vowels;
            }
        }
    }

    void show() const override
    {
        std::println("word {} {}", text, vowels);
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::unique_ptr<Token>> tokens;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        bool digits {true};
        for (char c : w) {
            if (c < '0' || c > '9') {
                digits = false;
            }
        }
        if (digits) {
            tokens.push_back(std::make_unique<Number>(w));
        } else {
            tokens.push_back(std::make_unique<Word>(w));
        }
    }
    for (const auto& t : tokens) {
        t->show();
    }
}
```
### Tests
```in
3
cat 12 tree
```
```in
1
queue
```
```in
4
1 2 3 x
```
### Witness
```in
2
7 sky
```
