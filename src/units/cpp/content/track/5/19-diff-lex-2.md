# 5.19 String literals with different prefixes cannot be joined
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.lex] ¶2
Clause: [diff.cpp20.lex], [lex.string], [intro.compliance.general]
After: none
Levels: c++20

## Example
```cpp
#include <print>

int main()
{
    //: Join a piece with no prefix to a u8 piece: the result is u8.
    const char8_t joined[] {u8"ab" "cd"};
    //: Give both pieces the same prefix where you write two.
    const char32_t wide[] {U"ab" U"cd"};
    std::size_t count {sizeof wide / sizeof wide[0]};
    std::println("{} {}", sizeof joined, count);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    auto c {L"a" U"b"};
    std::printf("%d\n", c[0] == L'a');
}
```
Answer:
- c++20: implementation
- c++23: ill-formed 5
Derivation 1: At c++20 [lex.string] makes joining an L piece to a U piece conditionally-supported with implementation-defined behaviour, so the implementation decides (g++ does not support it and says so); at c++23 [lex.string] lets only pieces with the same prefix or none be joined, so line 5 is ill-formed.
Derivation 2: [diff.cpp20.lex] ¶2 gives this very join, L"a" U"b", as conditionally-supported in C++20 and ill-formed now; a conditionally-supported construct is the implementation's to support or to diagnose ([intro.compliance.general]), and an ill-formed one needs a diagnostic at its line.

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    const char16_t* text {u"a" "b" U"c"};
    std::printf("%d\n", text[1] == u'b');
}
```
Answer:
- c++20: implementation
- c++23: ill-formed 5
Derivation 1: At c++20 the plain piece "b" takes the prefix of the other pieces, but u and U still differ, and [lex.string] makes that join conditionally-supported with implementation-defined behaviour; at c++23 [lex.string] allows a join only when every prefix is the same or absent, so line 5 is ill-formed.
Derivation 2: [diff.cpp20.lex] ¶2 says string literals with conflicting encoding prefixes were conditionally-supported in C++20 and are ill-formed now; u"a" and U"c" conflict whatever stands between them, so the implementation decides at c++20 and a diagnostic is required at line 5 at c++23.

## Alone 1
Form: flag
Write a program that makes a `char32_t` array named `text` holding `hello` by joining the two string literals `hel` and `lo`, and prints how many `char32_t` it holds.
Input: none.
Output: one line, 6.
Limits: g++ 16 with -pedantic-errors accepts the program at c++20 and at c++23.
Expect:
- c++20: accept
- c++23: accept
### Reference
```cpp
#include <cstdio>

int main()
{
    const char32_t text[] {U"hel" "lo"};
    std::printf("%zu\n", sizeof text / sizeof text[0]);
}
```
### Wrong
```cpp
#include <cstdio>

int main()
{
    const char32_t text[] {U"hel" u"lo"};
    std::printf("%zu\n", sizeof text / sizeof text[0]);
}
```
### Witness
```cpp
const char32_t probe[] {U"a" "b"};
```

## Alone 2
Form: flag
Write a program that makes a `char16_t` array named `text` by joining two string literals, each with its own encoding prefix, so that g++ rejects the join at c++20 and at c++23.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors rejects the program at c++20 and at c++23.
Expect:
- c++20: reject
- c++23: reject
### Reference
```cpp
int main()
{
    const char16_t text[] {u"ab" U"cd"};
    return text[0] == u'a' ? 0 : 1;
}
```
### Wrong
```cpp
int main()
{
    const char16_t text[] {u"ab" u"cd"};
    return text[0] == u'a' ? 0 : 1;
}
```
### Witness
```cpp
int probe {0};
```
