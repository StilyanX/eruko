# 1.23 Use after free
Part: use after free
Clause: [expr.delete], [basic.stc.dynamic.deallocation], [basic.life]
After: 1.17
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Make an int on the free store and keep its address.
    int* count {new int {5}};
    //: Use the int while it is still there.
    *count += 1;
    std::println("{}", *count);
    //: Free the int, then forget its address.
    delete count;
    count = nullptr;
    //: Test the pointer before you use it again.
    if (count != nullptr) {
        std::println("{}", *count);
    }
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int* count {new int {5}};
    int* same {count};
    delete count;
    std::println("{}", *same);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int* count {new int {5}};
    delete count;
    count = new int {7};
    std::println("{}", *count);
    delete count;
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Exempt: R.3, R.12, R.20, ES.24
Write a program that reads integers until the end of the input and prints them in reverse order. Keep them in an array you get with new[]; when it is full, copy them to one twice as large and free the old one with delete[].
Input: one line, up to 1000 integers separated by spaces.
Output: one line, the same integers in reverse order, separated by spaces.
Limits: 1 ≤ count ≤ 1000; each integer fits in an int.
### Examples
```in
1 2 3
```
```out
3 2 1
```
```in
7 -4 9 0
```
```out
0 9 -4 7
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int capacity {4};
    int size {0};
    int* data {new int[capacity]};
    int value {0};
    while (std::cin >> value) {
        if (size == capacity) {
            int* bigger {new int[2 * capacity]};
            for (int i {0}; i < size; ++i) {
                bigger[i] = data[i];
            }
            delete[] data;
            data = bigger;
            capacity *= 2;
        }
        data[size] = value;
        ++size;
    }
    for (int i {size - 1}; i >= 0; --i) {
        std::print("{}{}", data[i], i > 0 ? " " : "\n");
    }
    delete[] data;
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int capacity {4};
    int size {0};
    int* data {new int[capacity]};
    int value {0};
    while (std::cin >> value) {
        if (size == capacity) {
            int* bigger {new int[2 * capacity]};
            delete[] data;
            for (int i {0}; i < size; ++i) {
                bigger[i] = data[i];
            }
            data = bigger;
            capacity *= 2;
        }
        data[size] = value;
        ++size;
    }
    for (int i {size - 1}; i >= 0; --i) {
        std::print("{}{}", data[i], i > 0 ? " " : "\n");
    }
    delete[] data;
}
```
### Tests
```in
1 2 3 4 5
```
```in
5
```
```in
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
```
```in
-1 -2 -3 -4 -5 -6 -7 -8 -9
```
### Witness
```in
10 20 30 40 50
```

## Alone 2
Form: sanitizer
Sanitizer: address
Exempt: R.3, R.12, R.20, ES.24
Write a program that keeps a queue of integers and carries out commands: push x puts x at the back, and pop takes the front integer out and prints it. Make each element of the queue a node you get with new and free with delete.
Input: first line q, then q lines, each push x or pop.
Output: one line for each pop, the integer it took out.
Limits: 1 ≤ q ≤ 1000; a pop never comes when the queue is empty; x fits in an int.
### Examples
```in
4
push 3
push 8
pop
pop
```
```out
3
8
```
```in
5
push 1
push 2
pop
push 3
pop
```
```out
1
2
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

struct Node
{
    int value;
    Node* next;
};

int main()
{
    int q {0};
    std::cin >> q;
    Node* head {nullptr};
    Node* tail {nullptr};
    for (int i {0}; i < q; ++i) {
        std::string command;
        std::cin >> command;
        if (command == "push") {
            Node* node {new Node {0, nullptr}};
            std::cin >> node->value;
            if (tail) {
                tail->next = node;
            } else {
                head = node;
            }
            tail = node;
        } else {
            Node* front {head};
            std::println("{}", front->value);
            head = front->next;
            if (!head) {
                tail = nullptr;
            }
            delete front;
        }
    }
    while (head) {
        Node* next {head->next};
        delete head;
        head = next;
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

struct Node
{
    int value;
    Node* next;
};

int main()
{
    int q {0};
    std::cin >> q;
    Node* head {nullptr};
    Node* tail {nullptr};
    for (int i {0}; i < q; ++i) {
        std::string command;
        std::cin >> command;
        if (command == "push") {
            Node* node {new Node {0, nullptr}};
            std::cin >> node->value;
            if (tail) {
                tail->next = node;
            } else {
                head = node;
            }
            tail = node;
        } else {
            Node* front {head};
            std::println("{}", front->value);
            head = front->next;
            delete front;
        }
    }
    while (head) {
        Node* next {head->next};
        delete head;
        head = next;
    }
}
```
### Tests
```in
4
push 5
pop
push 6
pop
```
```in
6
push 1
push 2
pop
pop
push 3
pop
```
```in
3
push -7
pop
push 9
```
```in
1
push 4
```
### Witness
```in
4
push 1
pop
push 2
pop
```
