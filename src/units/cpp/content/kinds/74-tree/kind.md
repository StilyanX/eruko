# Kind 74: Insert into a tree and read it in order
After: 15, 22, 25, 62
## Example
Write a class `ordered::tree<T>` whose objects are trees in which each node keeps a value of type T and owns a left and a right branch.
Its explicit constructor takes a `const T&` and makes a tree of one node that holds it.
`insert(const T& value)` adds a node for value: from the top node down, it goes to the left branch when value is above the node's value, else to the right, until it reaches an empty branch, where the new node goes.
`value()` returns the node's value; `left()` and `right()` return the branches as `const std::unique_ptr<tree<T>>&`, empty when there is no branch.
`begin()` and `end()` let a range `for` take every value of the tree, largest first.
Limits: 1 ≤ number of values ≤ 1000.
```cpp
#pragma once

//@ Include `memory`, the part of the library that holds `std::unique_ptr`.
#include <memory>
#include <vector>

namespace ordered {

//: Write a class that keeps its data in private members.
template <typename T>
class tree {
    T value_ {};
    //@ Hold a branch in a `std::unique_ptr`, which owns the object it points to and starts empty.
    std::unique_ptr<tree> left_ {};
    std::unique_ptr<tree> right_ {};
    std::vector<T> sorted_ {};
public:
    //: Write a constructor that sets the data.
    explicit tree(const T& value)
        : value_ {value}
    {
    }
    //: Write member functions that give back the data.
    const T& value() const
    {
        return value_;
    }
    const std::unique_ptr<tree>& left() const
    {
        return left_;
    }
    const std::unique_ptr<tree>& right() const
    {
        return right_;
    }
    //: Write a member function that solves its task by calling itself on a smaller part.
    void insert(const T& value)
    {
        //:: Pick the left branch for a value above the data, else the right.
        //@ Name a variable for another with `auto&`, and pick one of 2 values with `?` and `:`, the first when the test holds.
        auto& branch {value > value_ ? left_ : right_};
        //:: Put a new tree there when the branch is empty, else insert into the branch.
        //@ Test whether a pointer is empty with `== nullptr`.
        if (branch == nullptr) {
            //@ Make a new object that a `std::unique_ptr` owns with `std::make_unique`.
            branch = std::make_unique<tree>(value);
        } else {
            //@ Call a member function through a pointer with `->`.
            branch->insert(value);
        }
    }
    //: Write a member function that solves its task by calling itself on a smaller part.
    //@ Give the function a `std::vector<T>&` parameter, with no `const`, so it changes the caller's list.
    void collect(std::vector<T>& values) const
    {
        //:: Add the left branch's values, then the data, then the right branch's values.
        if (left_ != nullptr) {
            left_->collect(values);
        }
        values.push_back(value_);
        if (right_ != nullptr) {
            right_->collect(values);
        }
    }
    //: Write member functions that give back the start and the end of the values in order.
    //@ Write `auto` as the type of the answer, so the compiler works it out from the `return`.
    auto begin()
    {
        //:: Fill the list with the values in order, then give back its start.
        sorted_.clear();
        collect(sorted_);
        //@ Give back where a list starts and ends with `cbegin()` and `cend()`, so a range `for` can take each value.
        return sorted_.cbegin();
    }
    auto end() const
    {
        return sorted_.cend();
    }
};

}  // namespace ordered
```
## Trace
Columns: number
Input 1:
```
47
```
Input 2:
```
9035
```
```cpp
#include <iostream>
#include <print>

int digit_sum(int number)
{
    if (number < 10) {
        return number;
    }
    return number % 10 + digit_sum(number / 10);
}

int main()
{
    int number {0};
    std::cin >> number;
    std::println("{}", digit_sum(number));
}
```
