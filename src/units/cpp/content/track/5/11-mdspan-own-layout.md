# 5.11 A layout policy of your own for `std::mdspan`
Part: `std::mdspan` with a layout policy of your own
Clause: [mdspan.layout.policy.reqmts], [mdspan.layout.reqmts], [mdspan.mdspan.members], [expr.add]
After: 5.10
Levels: c++23
Source: the CuTe layout documentation of CUTLASS, media/docs/cpp/cute/01_layout.md (Layout; Index Mapping; Matrix examples), https://github.com/NVIDIA/cutlass/blob/main/media/docs/cpp/cute/01_layout.md

## Example
```cpp
#include <array>
#include <mdspan>
#include <print>

//: Name the layout policy; its mapping turns an index into a place.
struct layout_cute {
    template <class Extents>
    class mapping {
    public:
        //: Give the names that std::mdspan asks of a mapping.
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_cute;

        //: Keep the extents the mapping is made from.
        constexpr mapping(const Extents& e) : e_ {e}
        {
        }
        constexpr const Extents& extents() const
        {
            return e_;
        }
        //: Map (i, j) as CuTe's ((2,2),2):((4,1),2) for 4 rows of 2.
        constexpr index_type operator()(index_type i,
                                        index_type j) const
        {
            return i % 2 * 4 + i / 2 + j * 2;
        }
        //: Say how many places the view spans.
        constexpr index_type required_span_size() const
        {
            return 8;
        }
        //: Say that each index has its own place and none is left out.
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
        //: Let two mappings compare equal when their extents do.
        friend bool operator==(const mapping&,
                               const mapping&) = default;

    private:
        Extents e_ {};
    };
};

int main()
{
    //: View eight numbers as 4 rows of 2 through the new layout.
    std::array<int, 8> buf {0, 1, 2, 3, 4, 5, 6, 7};
    using Ext = std::extents<int, 4, 2>;
    std::mdspan<int, Ext, layout_cute> m {buf.data()};
    //: Print each row; row i lands at place i % 2 * 4 + i / 2.
    for (int i {0}; i < 4; ++i) {
        std::println("{} {}", m[i, 0], m[i, 1]);
    }
}
```

## Verdict 1
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_cute {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_cute;

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
            return i % 2 * 4 + i / 2 + j * 4;
        }
        constexpr index_type required_span_size() const
        {
            return 8;
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
    std::array<int, 8> buf {0, 1, 2, 3, 4, 5, 6, 7};
    using Ext = std::extents<int, 4, 2>;
    std::mdspan<int, Ext, layout_cute> m {buf.data()};
    std::println("{}", m[3, 1]);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <array>
#include <mdspan>
#include <print>

struct layout_broadcast {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_broadcast;

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
            return j;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(1);
        }
        static constexpr bool is_always_unique()
        {
            return false;
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
            return false;
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
    std::array<int, 2> buf {0, 0};
    using Ext = std::extents<int, 3, 2>;
    std::mdspan<int, Ext, layout_broadcast> m {buf.data()};
    m[0, 1] = 5;
    std::println("{} {}", m[2, 1], m[1, 0]);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n and an n by n matrix stored in 2 by 2 tiles, and prints the matrix row by row. The tiles come row by row, and the 4 numbers of each tile come row by row. Read the numbers through a std::mdspan whose layout policy `layout_tiled` you write.
Input: one line, n; then one line, the n · n numbers in the order of the tiles.
Output: n lines, each the n numbers of one row separated by spaces.
Limits: n is even; 2 ≤ n ≤ 20; each number is between -1000 and 1000.
### Examples
```in
2
1 2 3 4
```
```out
1 2
3 4
```
### Reference
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_tiled {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_tiled;

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
            index_type n {e_.extent(1)};
            index_type tile {i / 2 * 2 * n + j / 2 * 4};
            return tile + i % 2 * 2 + j % 2;
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
    int n {2};
    std::cin >> n;
    std::vector<int> v(n * n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, layout_tiled> m {v.data(), n, n};
    for (int i {0}; i < n; ++i) {
        for (int j {0}; j < n; ++j) {
            std::print("{}{}", j == 0 ? "" : " ", m[i, j]);
        }
        std::println();
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_tiled {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_tiled;

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
            index_type n {e_.extent(1)};
            index_type tile {i / 2 * 4 + j / 2 * 2 * n};
            return tile + i % 2 * 2 + j % 2;
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
    int n {2};
    std::cin >> n;
    std::vector<int> v(n * n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, layout_tiled> m {v.data(), n, n};
    for (int i {0}; i < n; ++i) {
        for (int j {0}; j < n; ++j) {
            std::print("{}{}", j == 0 ? "" : " ", m[i, j]);
        }
        std::println();
    }
}
```
### Tests
```in
4
1 2 5 6 3 4 7 8 9 10 13 14 11 12 15 16
```
```in
6
1 2 7 8 3 4 9 10 5 6 11 12 13 14 19 20 15 16 21 22 17 18 23 24 25 26 31 32 27 28 33 34 29 30 35 36
```
```in
2
-1000 0 1000 -5
```
```in
20
1 2 21 22 3 4 23 24 5 6 25 26 7 8 27 28 9 10 29 30 11 12 31 32 13 14 33 34 15 16 35 36 17 18 37 38 19 20 39 40 41 42 61 62 43 44 63 64 45 46 65 66 47 48 67 68 49 50 69 70 51 52 71 72 53 54 73 74 55 56 75 76 57 58 77 78 59 60 79 80 81 82 101 102 83 84 103 104 85 86 105 106 87 88 107 108 89 90 109 110 91 92 111 112 93 94 113 114 95 96 115 116 97 98 117 118 99 100 119 120 121 122 141 142 123 124 143 144 125 126 145 146 127 128 147 148 129 130 149 150 131 132 151 152 133 134 153 154 135 136 155 156 137 138 157 158 139 140 159 160 161 162 181 182 163 164 183 184 165 166 185 186 167 168 187 188 169 170 189 190 171 172 191 192 173 174 193 194 175 176 195 196 177 178 197 198 179 180 199 200 201 202 221 222 203 204 223 224 205 206 225 226 207 208 227 228 209 210 229 230 211 212 231 232 213 214 233 234 215 216 235 236 217 218 237 238 219 220 239 240 241 242 261 262 243 244 263 264 245 246 265 266 247 248 267 268 249 250 269 270 251 252 271 272 253 254 273 274 255 256 275 276 257 258 277 278 259 260 279 280 281 282 301 302 283 284 303 304 285 286 305 306 287 288 307 308 289 290 309 310 291 292 311 312 293 294 313 314 295 296 315 316 297 298 317 318 299 300 319 320 321 322 341 342 323 324 343 344 325 326 345 346 327 328 347 348 329 330 349 350 331 332 351 352 333 334 353 354 335 336 355 356 337 338 357 358 339 340 359 360 361 362 381 382 363 364 383 384 365 366 385 386 367 368 387 388 369 370 389 390 371 372 391 392 373 374 393 394 375 376 395 396 377 378 397 398 379 380 399 400 
```
### Witness
```in
4
1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4
```

## Alone 2
Form: run
Write a program that reads n and the lower half of an n by n symmetric matrix, and prints the whole matrix row by row. Row i of the half holds the i + 1 numbers from column 0 to the diagonal. Read the numbers through a std::mdspan whose layout policy `layout_packed` you write; the place of (i, j) is the place of (j, i).
Input: one line, n; then n lines, line i holding i + 1 numbers separated by spaces, with i counted from 0.
Output: n lines, each the n numbers of one row separated by spaces.
Limits: 1 ≤ n ≤ 20; each number is between -1000 and 1000.
### Examples
```in
2
1
2 3
```
```out
1 2
2 3
```
### Reference
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_packed {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_packed;

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
            if (i < j) {
                return j * (j + 1) / 2 + i;
            }
            return i * (i + 1) / 2 + j;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * (e_.extent(0) + 1) / 2;
        }
        static constexpr bool is_always_unique()
        {
            return false;
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
            return false;
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
    int n {1};
    std::cin >> n;
    std::vector<int> v(n * (n + 1) / 2, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, layout_packed> m {v.data(), n, n};
    for (int i {0}; i < n; ++i) {
        for (int j {0}; j < n; ++j) {
            std::print("{}{}", j == 0 ? "" : " ", m[i, j]);
        }
        std::println();
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

struct layout_packed {
    template <class Extents>
    class mapping {
    public:
        using extents_type = Extents;
        using index_type = Extents::index_type;
        using size_type = Extents::size_type;
        using rank_type = Extents::rank_type;
        using layout_type = layout_packed;

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
            if (i < j) {
                return i * (i + 1) / 2 + j;
            }
            return i * (i + 1) / 2 + j;
        }
        constexpr index_type required_span_size() const
        {
            return e_.extent(0) * (e_.extent(0) + 1) / 2;
        }
        static constexpr bool is_always_unique()
        {
            return false;
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
            return false;
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
    int n {1};
    std::cin >> n;
    std::vector<int> v(n * (n + 1) / 2, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, layout_packed> m {v.data(), n, n};
    for (int i {0}; i < n; ++i) {
        for (int j {0}; j < n; ++j) {
            std::print("{}{}", j == 0 ? "" : " ", m[i, j]);
        }
        std::println();
    }
}
```
### Tests
```in
1
7
```
```in
3
1
2 3
4 5 6
```
```in
4
-1
2 -3
4 5 -6
7 8 9 -10
```
```in
20
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31 32 33 34 35 36
37 38 39 40 41 42 43 44 45
46 47 48 49 50 51 52 53 54 55
56 57 58 59 60 61 62 63 64 65 66
67 68 69 70 71 72 73 74 75 76 77 78
79 80 81 82 83 84 85 86 87 88 89 90 91
92 93 94 95 96 97 98 99 100 101 102 103 104 105
106 107 108 109 110 111 112 113 114 115 116 117 118 119 120
121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136
137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153
154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171
172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190
191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210
```
### Witness
```in
3
9
8 7
6 5 4
```
