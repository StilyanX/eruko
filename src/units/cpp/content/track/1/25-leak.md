# 1.25 A leak
Part: a leak
Clause: [expr.new], [expr.delete], [basic.stc.dynamic], [basic.life]
After: 1.24
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Make an array on the free store.
    int* first {new int[3] {1, 2, 3}};
    //: Free it before the pointer takes another address.
    delete[] first;
    first = new int[2] {4, 5};
    std::println("{} {}", first[0], first[1]);
    //: Free the second array too, so nothing is left behind.
    delete[] first;
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int* values {new int[3] {1, 2, 3}};
    int* old {values};
    values = new int[2] {4, 5};
    delete[] old;
    std::println("{}", values[0] + values[1]);
    delete[] values;
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

int main()
{
    int* values {new int[3] {1, 2, 3}};
    std::println("{}", values[0] + values[2]);
    delete values;
}
```
Answer: c++23 undefined sanitizer

## Count
Columns: allocations, deallocations
```cpp
#include <print>

int* make(int size, int line)
{
    std::println("@{} allocations", line);
    return new int[size] {};
}

void drop(int* p, int line)
{
    std::println("@{} deallocations", line);
    delete[] p;
}

int main()
{
    int* row {make(4, __LINE__)};
    for (int i {1}; i < 4; ++i) {
        if (i % 2 == 0) {
            drop(row, __LINE__);
        }
        row = make(4, __LINE__);
    }
    drop(row, __LINE__);
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n rows of integers and prints the row with the largest sum.
Input: first line n, then n lines, each k followed by k integers.
Output: one line, the integers of the row with the largest sum, separated by spaces; on a tie, the first such row.
Limits: 1 ≤ n ≤ 100; 1 ≤ k ≤ 100; each integer is between -1000000 and 1000000.
### Examples
```in
3
2 5 5
1 3
3 1 1 1
```
```out
5 5
```
```in
1
4 -1 0 2 -3
```
```out
-1 0 2 -3
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int* best {nullptr};
    int kept {0};
    long long best_sum {0};
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        int* row {new int[k]};
        long long sum {0};
        for (int j {0}; j < k; ++j) {
            std::cin >> row[j];
            sum += row[j];
        }
        if (best == nullptr || sum > best_sum) {
            delete[] best;
            best = row;
            kept = k;
            best_sum = sum;
        } else {
            delete[] row;
        }
    }
    for (int j {0}; j < kept; ++j) {
        std::print("{}{}", best[j], j + 1 < kept ? " " : "\n");
    }
    delete[] best;
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
    int* best {nullptr};
    int kept {0};
    long long best_sum {0};
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        int* row {new int[k]};
        long long sum {0};
        for (int j {0}; j < k; ++j) {
            std::cin >> row[j];
            sum += row[j];
        }
        if (best == nullptr || sum > best_sum) {
            best = row;
            kept = k;
            best_sum = sum;
        } else {
            delete[] row;
        }
    }
    for (int j {0}; j < kept; ++j) {
        std::print("{}{}", best[j], j + 1 < kept ? " " : "\n");
    }
    delete[] best;
}
```
### Tests
```in
2
1 1
1 2
```
```in
3
1 -5
2 -1 -1
1 0
```
```in
2
2 4 4
1 8
```
```in
4
1 1
1 2
1 3
1 4
```
### Witness
```in
2
1 3
2 4 5
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n rows of integers and prints, for each row, how many of its integers are greater than the average of the row.
Input: first line n, then n lines, each k followed by k integers.
Output: n lines, the count for each row in order; a row with no integers has the count 0.
Limits: 1 ≤ n ≤ 100; 0 ≤ k ≤ 100; each integer is between -1000000 and 1000000.
### Examples
```in
2
3 1 2 6
2 4 4
```
```out
1
0
```
```in
1
5 1 2 3 4 5
```
```out
2
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        int* row {new int[k]};
        long long sum {0};
        for (int j {0}; j < k; ++j) {
            std::cin >> row[j];
            sum += row[j];
        }
        int count {0};
        for (int j {0}; j < k; ++j) {
            if (static_cast<long long>(row[j]) * k > sum) {
                ++count;
            }
        }
        std::println("{}", count);
        delete[] row;
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
    for (int i {0}; i < n; ++i) {
        int k {0};
        std::cin >> k;
        int* row {new int[k]};
        long long sum {0};
        for (int j {0}; j < k; ++j) {
            std::cin >> row[j];
            sum += row[j];
        }
        int count {0};
        for (int j {0}; j < k; ++j) {
            if (static_cast<long long>(row[j]) * k > sum) {
                ++count;
            }
        }
        std::println("{}", count);
        if (k > 0) {
            delete[] row;
        }
    }
}
```
### Tests
```in
1
0
```
```in
3
2 1 3
0
1 7
```
```in
2
4 -1 -1 -1 5
3 0 0 0
```
### Witness
```in
2
0
2 1 2
```
