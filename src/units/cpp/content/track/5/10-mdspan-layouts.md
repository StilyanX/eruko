# 5.10 Reading one array as a matrix with `std::mdspan` and its standard layouts
Part: `std::mdspan` with the standard layouts
Clause: [mdspan.layout.right], [mdspan.layout.left], [mdspan.layout.stride], [mdspan.mdspan.members], [expr.add]
After: 5.02
Levels: c++23

## Example
```cpp
#include <array>
#include <mdspan>
#include <print>

int main()
{
    //: Keep six numbers in one array.
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    //: View them as 2 rows of 3, each row in one run: layout_right.
    std::mdspan rows {buf.data(), 2, 3};
    //: View them as 2 rows of 3, each column in one run: layout_left.
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, std::layout_left> cols {
        buf.data(), 2, 3};
    //: Give each index its own stride: 3 for a row, 2 for a column.
    std::layout_stride::mapping<Ext> map {
        Ext {2, 2}, std::array {3, 2}};
    std::mdspan<int, Ext, std::layout_stride> ends {
        buf.data(), map};
    //: Read the same two places through each view.
    std::println("{} {}", rows[0, 1], rows[1, 0]);
    std::println("{} {}", cols[0, 1], cols[1, 0]);
    std::println("{} {}", ends[0, 1], ends[1, 0]);
}
```

## Verdict 1
```cpp
#include <array>
#include <mdspan>
#include <print>

int main()
{
    using Ext = std::dextents<int, 2>;
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    std::layout_stride::mapping<Ext> map {
        Ext {2, 3}, std::array {4, 1}};
    std::mdspan<int, Ext, std::layout_stride> m {
        buf.data(), map};
    std::println("{}", m[1, 2]);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <array>
#include <mdspan>
#include <print>

int main()
{
    using Ext = std::dextents<int, 2>;
    std::array<int, 6> buf {0, 1, 2, 3, 4, 5};
    std::layout_stride::mapping<Ext> map {
        Ext {2, 3}, std::array {1, 2}};
    std::mdspan<int, Ext, std::layout_stride> m {
        buf.data(), map};
    std::println("{}", m[1, 2]);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads r, c and an r by c matrix stored column by column, and prints the matrix row by row. Read the numbers through a std::mdspan over them as they were read.
Input: one line, r and c; then one line, the r · c numbers, the first column first.
Output: r lines, each the c numbers of one row separated by spaces.
Limits: 1 ≤ r ≤ 20; 1 ≤ c ≤ 20; each number is between -1000 and 1000.
### Examples
```in
2 2
1 2 2 3
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

int main()
{
    int r {1};
    int c {1};
    std::cin >> r >> c;
    std::vector<int> v(r * c, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, std::layout_left> m {v.data(), r, c};
    for (int i {0}; i < r; ++i) {
        for (int j {0}; j < c; ++j) {
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

int main()
{
    int r {1};
    int c {1};
    std::cin >> r >> c;
    std::vector<int> v(r * c, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 2>;
    std::mdspan<int, Ext, std::layout_right> m {v.data(), r, c};
    for (int i {0}; i < r; ++i) {
        for (int j {0}; j < c; ++j) {
            std::print("{}{}", j == 0 ? "" : " ", m[i, j]);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
7
```
```in
3 2
1 2 3 4 5 6
```
```in
1 4
-1 2 -3 4
```
```in
4 1
9 8 7 6
```
```in
20 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380 381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400
```
### Witness
```in
2 3
1 2 3 4 5 6
```

## Alone 2
Form: run
Write a program that reads n and an n by n matrix row by row, and prints its main diagonal. Read the diagonal through a one-dimensional std::mdspan with layout_stride over the numbers as they were read.
Input: one line, n; then n lines, each one row of n numbers separated by spaces.
Output: one line, the n numbers of the diagonal from the top left, separated by spaces.
Limits: 1 ≤ n ≤ 20; each number is between -1000 and 1000.
### Examples
```in
2
1 0
1 1
```
```out
1 1
```
### Reference
```cpp
#include <array>
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

int main()
{
    int n {1};
    std::cin >> n;
    std::vector<int> v(n * n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 1>;
    std::layout_stride::mapping<Ext> map {
        Ext {n}, std::array {n + 1}};
    std::mdspan<int, Ext, std::layout_stride> d {v.data(), map};
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", d[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <array>
#include <iostream>
#include <mdspan>
#include <print>
#include <vector>

int main()
{
    int n {1};
    std::cin >> n;
    std::vector<int> v(n * n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    using Ext = std::dextents<int, 1>;
    std::layout_stride::mapping<Ext> map {
        Ext {n}, std::array {n}};
    std::mdspan<int, Ext, std::layout_stride> d {v.data(), map};
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", d[i]);
    }
    std::println();
}
```
### Tests
```in
1
5
```
```in
3
1 2 3
4 5 6
7 8 9
```
```in
2
-5 6
7 -8
```
```in
20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120
121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140
141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160
161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180
181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200
201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220
221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240
241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260
261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280
281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300
301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320
321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340
341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360
361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380
381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400
```
### Witness
```in
2
1 2
3 4
```
