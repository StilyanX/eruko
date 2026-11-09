# 5.12 A layout checked while compiling by `static_assert` in its mapping
Part: a layout checked at compile time by `static_assert` in the mapping of an `std::mdspan`
Clause: [dcl.pre], [temp.inst], [mdspan.extents.obs], [span.syn], [mdspan.layout.reqmts]
After: 5.11
Levels: c++23

## Example
```cpp
#include <array>
#include <mdspan>
#include <print>

//: Name a layout that keeps the columns in pairs, two at a time.
struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        //: Give the names that std::mdspan asks of a mapping.
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;
        //: Check while compiling that the last extent is static and even.
        static_assert(Extents::static_extent(1)
                      != std::dynamic_extent);
        static_assert(Extents::static_extent(1) % 2 == 0);

        //: Keep the extents; the number of rows may come at run time.
        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        //: Place each pair of columns after the pairs to its left.
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        //: Say how many places the view spans, and how it fills them.
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    //: View twelve numbers as 3 rows of 4; only the 4 is checked.
    std::array<int, 12> buf {0, 1, 2, 3, 4, 5,
                            6, 7, 8, 9, 10, 11};
    using Ext = std::extents<int, std::dynamic_extent, 4>;
    std::mdspan<int, Ext, layout_pairs> m {buf.data(), 3};
    for (int i {0}; i < 3; ++i) {
        std::println("{} {} {} {}", m[i, 0], m[i, 1], m[i, 2],
                     m[i, 3]);
    }
}
```

## Verdict 1
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;
        static_assert(Extents::static_extent(1)
                      != std::dynamic_extent);
        static_assert(Extents::static_extent(1) % 2 == 0);

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    using Ext = std::extents<int, 2, 3>;
    std::mdspan<int, Ext, layout_pairs> m {buf.data()};
    std::println("{}", m[1, 2]);
}
```
Answer: c++23 ill-formed 16

## Verdict 2
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            static_assert(Extents::static_extent(1) % 2 == 0);
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    using Ext = std::extents<int, 2, 3>;
    std::mdspan<int, Ext, layout_pairs> m {buf.data()};
    std::println("{} {}", m.extent(0), m.extent(1));
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Write a program with a layout policy `layout_pairs` for two-dimensional views that places (i, j) at j / 2 · 2 · r + 2 · i + j % 2, where r is the number of rows. Its mapping rejects, while compiling, a last extent that is dynamic or odd, even when no element is read. In main, view a std::array<int, 6> through `std::mdspan<int, std::extents<int, 2, 3>, layout_pairs>` and read nothing.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
Expect:
- c++23: reject
### Reference
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;
        static_assert(Extents::static_extent(1)
                      != std::dynamic_extent);
        static_assert(Extents::static_extent(1) % 2 == 0);

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    using Ext = std::extents<int, 2, 3>;
    std::mdspan<int, Ext, layout_pairs> m {buf.data()};
}
```
### Wrong
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            static_assert(Extents::static_extent(1)
                          != std::dynamic_extent);
            static_assert(Extents::static_extent(1) % 2 == 0);
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    using Ext = std::extents<int, 2, 3>;
    std::mdspan<int, Ext, layout_pairs> m {buf.data()};
}
```
### Witness
```cpp
using Odd = std::extents<int, 4, 5>;
std::mdspan<int, Odd, layout_pairs> odd {nullptr};
```

## Alone 2
Form: flag
Write a program with a layout policy `layout_pairs` for two-dimensional views that places (i, j) at j / 2 · 2 · r + 2 · i + j % 2, where r is the number of rows. Its mapping rejects, while compiling, a last extent that is dynamic or odd; the number of rows may be dynamic. The program reads r and an r by 4 matrix stored in that order, views it through `std::mdspan<int, std::extents<int, std::dynamic_extent, 4>, layout_pairs>`, and prints it row by row.
Input: one line, r; then one line, the r · 4 numbers in the order of the layout.
Output: r lines, each the 4 numbers of one row separated by spaces.
Limits: g++ 16 at c++23 with -pedantic-errors; 1 ≤ r ≤ 20.
Expect:
- c++23: accept
### Reference
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;
        static_assert(Extents::static_extent(1)
                      != std::dynamic_extent);
        static_assert(Extents::static_extent(1) % 2 == 0);

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    int r {1};
    std::cin >> r;
    std::vector<int> v(r * 4, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::extents<int, std::dynamic_extent, 4>;
    std::mdspan<int, Ext, layout_pairs> m {v.data(), r};
    for (int i {0}; i < r; ++i) {
        std::println("{} {} {} {}", m[i, 0], m[i, 1], m[i, 2],
                     m[i, 3]);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_pairs {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_pairs;
        static_assert(Extents::rank_dynamic() == 0);
        static_assert(Extents::static_extent(1) % 2 == 0);

        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            index_type r {e_.extent(0)};
            return j / 2 * 2 * r + i * 2 + j % 2;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return true;
        }
        static constexpr bool is_always_exhaustive()
        {
            return true;
        }
        static constexpr bool is_always_strided()
        {
            return false;
        }
        static constexpr bool is_unique()
        {
            return true;
        }
        static constexpr bool is_exhaustive()
        {
            return true;
        }
        static constexpr bool is_strided()
        {
            return false;
        }
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    int r {1};
    std::cin >> r;
    std::vector<int> v(r * 4, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::extents<int, std::dynamic_extent, 4>;
    std::mdspan<int, Ext, layout_pairs> m {v.data(), r};
    for (int i {0}; i < r; ++i) {
        std::println("{} {} {} {}", m[i, 0], m[i, 1], m[i, 2],
                     m[i, 3]);
    }
}
```
### Witness
```cpp
using Small = std::extents<int, 3, 2>;
std::mdspan<int, Small, layout_pairs> small {nullptr};
```
