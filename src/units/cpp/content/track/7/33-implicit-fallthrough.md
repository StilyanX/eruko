# 7.33 ES.78: end every non-empty case with break
Part: ES.78 Don't rely on implicit fallthrough in switch statements
Clause: C++ Core Guidelines ES.78, [stmt.switch], [dcl.attr.fallthrough]
After: none
Levels: c++17

## Scan
Rule: ES.78
Warning: -Wimplicit-fallthrough
### Bad
```cpp
enum Event { Information, Warning, Error };

void update_status_bar();
void write_event_log();
void display_error_window();

void handle(Event eventType)
{
    switch (eventType) {
    case Information:
        update_status_bar();
        break;
    case Warning:
        write_event_log();
    case Error:
        display_error_window();
        break;
    }
}
```
### Good
```cpp
enum Event { Information, Warning, Error };

void update_status_bar();
void write_event_log();
void display_error_window();

void handle(Event eventType)
{
    switch (eventType) {
    case Information:
        update_status_bar();
        break;
    case Warning:
        write_event_log();
        [[fallthrough]];
    case Error:
        display_error_window();
        break;
    }
}
```

## Example
```cpp
#include <print>

void handle(char kind)
{
    switch (kind) {
    //: Let several labels share one group of statements.
    case 'a':
    case 'b':
        std::println("{}: a or b", kind);
        break;
    //: Say a deliberate fallthrough out loud.
    case 'w':
        std::println("{}: log it", kind);
        [[fallthrough]];
    //: End every other non-empty case with break.
    case 'e':
        std::println("{}: show it", kind);
        break;
    default:
        break;
    }
}

int main()
{
    handle('b');
    handle('w');
    handle('e');
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int total {0};
    int code {1};
    switch (code) {
    case 1:
        total += 10;
    case 2:
        total += 20;
        break;
    case 3:
        total += 30;
        break;
    }
    std::printf("%d\n", total);
}
```
Answer: c++17..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int total {0};
    int code {2};
    switch (code) {
    case 1:
        total += 10;
        [[fallthrough]];
    case 2:
        total += 20;
        [[fallthrough]];
    }
    std::printf("%d\n", total);
}
```
Answer: c++17..c++23 ill-formed 13

## Alone 1
Form: run
Write a program that reads n and counts down from n to one in words.
Input: one line, n.
Output: the English words for n, n - 1, …, 1 in lower case, one word a line.
Limits: 1 ≤ n ≤ 5.
### Examples
```in
3
```
```out
three
two
one
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    switch (n) {
    case 5:
        std::println("five");
        [[fallthrough]];
    case 4:
        std::println("four");
        [[fallthrough]];
    case 3:
        std::println("three");
        [[fallthrough]];
    case 2:
        std::println("two");
        [[fallthrough]];
    case 1:
        std::println("one");
        break;
    default:
        break;
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    switch (n) {
    case 5:
        std::println("five");
        [[fallthrough]];
    case 4:
        std::println("four");
        [[fallthrough]];
    case 3:
        std::println("three");
    case 2:
        std::println("two");
        [[fallthrough]];
    case 1:
        std::println("one");
        break;
    default:
        break;
    }
}
```
### Tests
```in
1
```
```in
5
```
```in
2
```
```in
4
```
### Witness
```cpp
enum Event { Information, Warning, Error };

void update_status_bar();
void write_event_log();
void display_error_window();

void handle(Event eventType)
{
    switch (eventType) {
    case Information:
        update_status_bar();
        break;
    case Warning:
        write_event_log();
        display_error_window();
        break;
    case Error:
        display_error_window();
        break;
    }
}
```

## Alone 2
Form: run
Write a program that reads an amount of time and its unit and prints it in seconds.
Input: one line, a whole number a and one letter: d for days, h for hours, m for minutes, s for seconds.
Output: one line, the number of seconds in a of that unit.
Limits: 0 ≤ a ≤ 1000.
### Examples
```in
2 h
```
```out
7200
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    long long seconds {0};
    char unit {'s'};
    std::cin >> seconds >> unit;
    switch (unit) {
    case 'd':
        seconds *= 24;
        [[fallthrough]];
    case 'h':
        seconds *= 60;
        [[fallthrough]];
    case 'm':
        seconds *= 60;
        break;
    default:
        break;
    }
    std::println("{}", seconds);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    long long seconds {0};
    char unit {'s'};
    std::cin >> seconds >> unit;
    switch (unit) {
    case 'd':
        seconds *= 24;
    case 'h':
        seconds *= 60;
        [[fallthrough]];
    case 'm':
        seconds *= 60;
        break;
    default:
        break;
    }
    std::println("{}", seconds);
}
```
### Tests
```in
0 d
```
```in
1000 d
```
```in
45 m
```
```in
7 s
```
```in
3 h
```
### Witness
```cpp
#include <cstdio>

int main()
{
    int total {0};
    int code {1};
    switch (code) {
    case 1:
        total += 10;
        [[fallthrough]];
    case 2:
        total += 20;
        break;
    default:
        break;
    }
    std::printf("%d\n", total);
}
```
