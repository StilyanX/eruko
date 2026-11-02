# Kind 11: Count by key with a lookup table the language provides
After: 1, 2, 3, 4, 5, 6, 7
## Example
Write a program that reads n words and prints each different word with how many times it appears.

Input: line 1, n; line 2, n words separated by spaces.
Output: one line per different word, in alphabetical order: the word, a space, then how many times it appears.
Limits: 1 ≤ n ≤ 100, each word 1 to 10 lowercase letters.

```cpp
#include <iostream>
//@ Include `map`, the part of the library that holds `std::map`, a table from each key to its value.
#include <map>
#include <print>
#include <string>

int main()
{
    //: Read how many words follow.
    int n {0};
    std::cin >> n;
    //: Start an empty map from each word to its count.
    //@ Make the map with `std::map<std::string, int>`, the key type first, then the value type.
    std::map<std::string, int> counts {};
    //: For each index from 0 to n - 1, read a word and add one to its count.
    for (int index {0}; index < n; ++index) {
        std::string word {};
        //@ Read a word with `std::cin` and `>>`, which stops at a space.
        std::cin >> word;
        //:: Add one to the word's count.
        //@ Add one with `++counts[word]`, which starts a new word at 0.
        ++counts[word];
    }
    //: Go through each word and its count in the map, in alphabetical order.
    //@ Take each entry of the map as `const auto& [word, count]`, its key and its value.
    for (const auto& [word, count] : counts) {
        //:: Print the word and its count.
        std::println("{} {}", word, count);
    }
}
```
## Trace
Columns: n, counts, index, word, count
Input 1:
```
2
red red
```
Input 2:
```
4
b a b c
```
```cpp
#include <iostream>
#include <map>
#include <print>
#include <string>
int main()
{
    int n {0};
    std::cin >> n;
    std::map<std::string, int> counts {};
    for (int index {0}; index < n; ++index) {
        std::string word {};
        std::cin >> word;
        ++counts[word];
    }
    for (const auto& [word, count] : counts) {
        std::println("{} {}", word, count);
    }
}
```
