# Kind 63: Link items both ways and unlink them
After: 15, 25, 47
## Example
Write a class `chain::Chain` whose objects are lists of `int` values in which each node links to the node before it and the node after it.
`push_back(value)` adds value at the end, and `push_front(value)` adds it at the start.
`pop_back()` removes the last value and returns it; `pop_front()` removes the first value and returns it.
`remove(value)` removes the first node that holds value and returns true, or returns false when no node holds it.
`size()` returns how many values the chain holds, as a `std::size_t`.
Limits: `pop_back()` and `pop_front()` are never called on an empty chain.
```cpp
#pragma once

#include <cstddef>
#include <memory>

namespace chain {

//: Write a class that keeps its data in private members.
class Chain {
    //@ Write a `struct`, a class whose members anyone may reach, inside the class that uses it.
    struct Node {
        int value {0};
        //@ Own the next node with `std::unique_ptr<Node>`, which deletes it when the owner goes.
        std::unique_ptr<Node> next {};
        //@ Point at a node without owning it with `Node*`, and start it at `nullptr`, which points at nothing.
        Node* previous {nullptr};
    };
    std::unique_ptr<Node> head_ {};
    Node* tail_ {nullptr};
    std::size_t size_ {0};
    //: Write a member function that unlinks a node and gives back its value.
    int unlink(Node* node)
    {
        //:: Keep the node's value.
        //@ Reach a member of the node a pointer points at with `->`.
        const int value {node->value};
        //:: Point the next node back at the node before, or the tail when there is no next node.
        if (node->next != nullptr) {
            node->next->previous = node->previous;
        } else {
            tail_ = node->previous;
        }
        //:: Point the node before at the next node, or the head when there is no node before.
        if (node->previous != nullptr) {
            //@ Hand what a `std::unique_ptr` owns to another with `std::move`, which leaves the first empty.
            node->previous->next = std::move(node->next);
        } else {
            head_ = std::move(node->next);
        }
        //:: Take one from the size and give back the value.
        --size_;
        return value;
    }
public:
    //: Write member functions that add a node at one end.
    void push_back(int value)
    {
        //:: Make the node after the tail, or the head when the list is empty.
        //@ Name a variable as another name for an existing one with `auto&`.
        //@ Pick one of 2 values with `?` and `:`, the first when the test before `?` holds.
        auto& place {tail_ != nullptr ? tail_->next : head_};
        //@ Make a new node, owned by a `std::unique_ptr`, with `std::make_unique<Node>` and its members' values.
        place = std::make_unique<Node>(value, nullptr, tail_);
        //@ Get a pointer to what a `std::unique_ptr` owns with `get()`.
        tail_ = place.get();
        ++size_;
    }
    void push_front(int value)
    {
        //:: Make the node before the head, and the tail when the list is empty.
        head_ = std::make_unique<Node>(
            value, std::move(head_), nullptr);
        if (head_->next != nullptr) {
            head_->next->previous = head_.get();
        } else {
            tail_ = head_.get();
        }
        ++size_;
    }
    //: Write member functions that take a node off one end and give back its value.
    int pop_back()
    {
        return unlink(tail_);
    }
    int pop_front()
    {
        return unlink(head_.get());
    }
    //: Write a member function that finds the first item that passes a test and gives back whether it found one.
    bool remove(int value)
    {
        //:: Start at the head and move on until the node holds the value or the list ends.
        Node* node {head_.get()};
        while (node != nullptr && node->value != value) {
            node = node->next.get();
        }
        //:: Give back false when no node holds it, else unlink the node and give back true.
        if (node == nullptr) {
            return false;
        }
        unlink(node);
        return true;
    }
    //: Write a member function that gives back the data.
    std::size_t size() const
    {
        return size_;
    }
};

}  // namespace chain
```
## Trace
Columns: node, before, after, next, previous, at
Input 1:
```
2
```
Input 2:
```
1
```
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    std::vector<int> next {1, 2, 3, 4, -1};
    std::vector<int> previous {-1, 0, 1, 2, 3};
    int node {0};
    std::cin >> node;
    const int before {previous[node]};
    const int after {next[node]};
    next[before] = after;
    previous[after] = before;
    for (int at {next[0]}; at != 4; at = next[at]) {
        std::println("{}", at);
    }
}
```
