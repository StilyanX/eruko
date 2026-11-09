# 4.33 The implicit move of a parameter in return and throw
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.class] ¶3
Clause: [diff.cpp17.class], [class.copy.elision], [except.throw], [stmt.return]
After: none
Levels: c++17

## Example
```cpp
#include <print>
#include <string>
#include <utility>

std::string shout(std::string&& text)
{
    //: Add a mark, then move the parameter out by hand.
    text += "!";
    return std::move(text);
}

void fail(std::string reason)
{
    //: Move a by-value parameter into the exception by hand too.
    throw std::move(reason);
}

int main()
{
    //: Print what comes back; every level moves both times.
    std::println("{}", shout("hello"));
    try {
        fail("stop");
    } catch (const std::string& caught) {
        std::println("{}", caught);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Box
{
    Box() = default;
    Box(const Box&) = default;
    Box(Box&&) = delete;
};

void send(Box box)
{
    throw box;
}

int main()
{
    try {
        send(Box {});
    } catch (const Box&) {
        std::printf("caught\n");
    }
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 12

## Verdict 2
```cpp
#include <cstdio>

struct Box
{
    Box() = default;
    Box(const Box&) = delete;
    Box(Box&&) = default;
};

Box pass(Box&& box)
{
    return box;
}

int main()
{
    Box box {pass(Box {})};
    std::printf("passed\n");
}
```
Answer:
- c++17: ill-formed 12
- c++20..c++23: defined

## Alone 1
Form: flag
Write a program with a type Ticket that holds an int and can be moved but not copied, a function pass that takes a Ticket by rvalue reference and returns it by value, and a main that reads an int, passes a Ticket holding it through pass and prints the int. The program is accepted at c++17, c++20 and c++23.
Input: one line, one integer.
Output: one line, the integer.
Limits: the integer is between -1000 and 1000.
Expect:
- c++20..c++23: accept
- c++17..c++17: accept
### Reference
```cpp
#include <iostream>
#include <utility>

struct Ticket
{
    explicit Ticket(int n) : number {n}
    {
    }
    Ticket(const Ticket&) = delete;
    Ticket(Ticket&&) = default;
    int number;
};

Ticket pass(Ticket&& ticket)
{
    return std::move(ticket);
}

int main()
{
    int n {0};
    std::cin >> n;
    Ticket ticket {pass(Ticket {n})};
    std::cout << ticket.number << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <utility>

struct Ticket
{
    explicit Ticket(int n) : number {n}
    {
    }
    Ticket(const Ticket&) = delete;
    Ticket(Ticket&&) = default;
    int number;
};

Ticket pass(Ticket&& ticket)
{
    return ticket;
}

int main()
{
    int n {0};
    std::cin >> n;
    Ticket ticket {pass(Ticket {n})};
    std::cout << ticket.number << '\n';
}
```
### Witness
```cpp
Ticket probe {pass(Ticket {1})};
```

## Alone 2
Form: flag
Write a program with a type Ticket that holds an int, can be copied and has its move constructor deleted, a function raise that takes a Ticket and throws it, and a main that reads an int, calls raise with a Ticket holding it, catches the Ticket and prints the int. The program is accepted at c++17 and rejected at c++20 and c++23.
Input: one line, one integer.
Output: one line, the integer.
Limits: the integer is between -1000 and 1000.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

struct Ticket
{
    explicit Ticket(int n) : number {n}
    {
    }
    Ticket(const Ticket&) = default;
    Ticket(Ticket&&) = delete;
    int number;
};

void raise(Ticket ticket)
{
    throw ticket;
}

int main()
{
    int n {0};
    std::cin >> n;
    try {
        raise(Ticket {n});
    } catch (const Ticket& caught) {
        std::cout << caught.number << '\n';
    }
}
```
### Wrong
```cpp
#include <iostream>

struct Ticket
{
    explicit Ticket(int n) : number {n}
    {
    }
    Ticket(const Ticket&) = default;
    Ticket(Ticket&&) = delete;
    int number;
};

void raise(const Ticket& ticket)
{
    throw ticket;
}

int main()
{
    int n {0};
    std::cin >> n;
    try {
        raise(Ticket {n});
    } catch (const Ticket& caught) {
        std::cout << caught.number << '\n';
    }
}
```
### Witness
```cpp
int probe {0};
```
