# 1.04 Narrowing in braced initialisation
Part: narrowing in braced initialisation
Clause: [dcl.init.list], [expr.const]
After: 1.01, 1.03
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Keep a count as an int.
    int count {7};
    //: Cast it to double, since braces refuse int to double.
    double half {static_cast<double>(count) / 2};
    //: Use a constant whose value fits; braces accept it.
    const int limit {200};
    unsigned char small {limit};
    //: Print both values.
    std::println("{} {}", half, small);
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int count {7};
    double total {count};
    std::println("{}", total);
}
```
Answer: c++23 ill-formed 6

## Verdict 2
```cpp
#include <print>

int main()
{
    float rate {0.1};
    std::println("{}", rate);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a declaration of an int named limit with the value 200, so that `unsigned char c {limit};` compiles.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
const int limit {200};

int main()
{
}
```
### Wrong
```cpp
int limit {200};

int main()
{
}
```
### Probes
```cpp
unsigned char c {limit};
short s {limit};
signed char d {limit};
```
Accept: 1, 2
Reject: 3
### Witness
```cpp
unsigned char w {limit};
```

## Alone 2
Form: probes
Write a declaration of a variable named size that holds 3 and can be changed later, so that `double d {size};` compiles and `long long n {size};` does not.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
float size {3};

int main()
{
}
```
### Wrong
```cpp
int size {3};

int main()
{
}
```
### Probes
```cpp
double d {size};
long long n {size};
void grow() { size += 1; }
```
Accept: 1, 3
Reject: 2
### Witness
```cpp
double w {size};
```
