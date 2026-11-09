# Kind 47: Add and take items at the front of a chain
After: 15, 25, 45
## Example
Write a class `word_chain::Chain` that holds words, where each element holds one word and owns the next element, with these member functions.
`size() const` returns the number of words as an `int`.
`push(const std::string& word)` puts the word first.
`pop()` takes the first word off and returns it.
`peek() const` returns the first word and leaves it on.
`reverse()` turns the order of the words around.
A new chain is empty.
Limits: 0 ≤ words held ≤ 1000; `pop()` and `peek()` are called only when the chain holds a word.
```cpp
#pragma once

//@ Include `memory`, the part of the library that holds `std::unique_ptr`.
#include <memory>
#include <string>
#include <utility>

namespace word_chain {

//: Write a class that keeps its data in private members.
class Chain {
    //@ Make a type that holds several values with `struct`, whose members anyone may reach.
    struct Element {
        std::string word {""};
        //@ Let each element own the next with `std::unique_ptr<Element>`, which deletes what it owns when it goes.
        std::unique_ptr<Element> next {};
    };
    std::unique_ptr<Element> head {};
    int count {0};
public:
    //: Write a member function that gives back the data.
    int size() const
    {
        return count;
    }
    //: Write a member function that puts a new element first.
    void push(const std::string& word)
    {
        //:: Make the new element hold the value and the old first one.
        //@ Make a new object that a `std::unique_ptr` owns with `std::make_unique`.
        //@ Hand over what a `std::unique_ptr` owns with `std::move`, which leaves it empty.
        head = std::make_unique<Element>(word, std::move(head));
        //:: Add one to the size.
        ++count;
    }
    //: Write a member function that takes off the first element and gives back its value.
    std::string pop()
    {
        //:: Keep the value of the first element.
        //@ Reach a member of the object a pointer owns with `->`.
        const std::string word {head->word};
        //:: Make the next element the first, and take one from the size.
        head = std::move(head->next);
        --count;
        //:: Give back the value.
        return word;
    }
    //: Write a member function that gives back the value of the first element.
    std::string peek() const
    {
        return head->word;
    }
    //: Write a member function that turns the order of the elements around.
    void reverse()
    {
        //:: Start the turned list empty.
        std::unique_ptr<Element> done {};
        //:: Move each first element to the front of the turned list.
        //@ Test whether a pointer owns an object by writing it alone as the test.
        while (head) {
            //@ Let `auto` give the variable the type of the value it starts with.
            auto rest {std::move(head->next)};
            head->next = std::move(done);
            done = std::move(head);
            head = std::move(rest);
        }
        //:: Make the turned list the list.
        head = std::move(done);
    }
};

}  // namespace word_chain
```
## Trace
Columns: chain, value
Input 1:
```
4 7
```
Input 2:
```
1 2 3
```
```cpp
#include <forward_list>
#include <iostream>
#include <print>
int main()
{
    std::forward_list<int> chain {};
    int value {0};
    while (std::cin >> value) {
        chain.push_front(value);
    }
    while (!chain.empty()) {
        std::println("{}", chain.front());
        chain.pop_front();
    }
}
```
