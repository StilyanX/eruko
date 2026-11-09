# 8.02 The global index of a thread in a two-dimensional launch
Part: the global index of each thread in a two-dimensional launch
Clause: CUDA C++ Programming Guide §5.2
After: 8.01
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §5.2 Thread Hierarchy

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Find the column from x and the row from y, each on its own.
__global__ void place(cuda::std::span<unsigned> out, unsigned w,
                      unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    //: Keep the threads inside the grid, then store by rows.
    if (x < w && y < h) {
        out[y * w + x] = 10 * y + x;
    }
}

int main()
{
    //: Cover 5 columns and 3 rows with blocks of 4 by 2.
    unsigned w {5};
    unsigned h {3};
    dim3 block {4, 2};
    dim3 grid {(w + 3) / 4, (h + 1) / 2};
    unsigned* out {nullptr};
    cudaMalloc(&out, w * h * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, w * h};
    place<<<grid, block>>>(view, w, h);
    //: Copy the grid back and print it row by row.
    std::vector<unsigned> host(w * h);
    cudaMemcpy(host.data(), out, w * h * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned y {0}; y < h; ++y) {
        for (unsigned x {0}; x < w; ++x) {
            std::print("{} ", host[y * w + x]);
        }
        std::println();
    }
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>

__global__ void mark(unsigned* out, unsigned w, unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    if (x < w && y < h) {
        out[y * w + x] = x + y;
    }
}

int main()
{
    unsigned w {6};
    unsigned h {4};
    dim3 block {4, 4};
    dim3 grid {2, 1};
    unsigned* out {nullptr};
    cudaMalloc(&out, w * h * sizeof(unsigned));
    mark<<<grid, block>>>(out, w, h);
    std::vector<unsigned> host(w * h);
    cudaMemcpy(host.data(), out, w * h * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", host[w * h - 1]);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <print>

__global__ void mark(unsigned* out, unsigned w, unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    if (x < w && y < h) {
        out[x * w + y] = 1;
    }
}

int main()
{
    unsigned w {6};
    unsigned h {4};
    dim3 block {6, 4};
    unsigned* out {nullptr};
    cudaMalloc(&out, w * h * sizeof(unsigned));
    mark<<<1, block>>>(out, w, h);
    cudaDeviceSynchronize();
    cudaFree(out);
    std::println("{}", w * h);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads a grid of w columns and h rows and a block shape of bx by by threads.
Launch a kernel on ⌈w/bx⌉ by ⌈h/by⌉ blocks of that shape, one thread for each number of the grid.
Each thread doubles its own number. Print the grid.
Input: the first line holds w, h, bx and by; then h lines of w numbers each.
Output: h lines of w numbers each, separated by spaces.
Limits: 1 ≤ w ≤ 16; 1 ≤ h ≤ 16; 1 ≤ bx; 1 ≤ by; bx · by ≤ 1024; each number from 0 to 1000.
### Examples
```in
3 2 2 2
1 2 3
4 5 6
```
```out
2 4 6
8 10 12
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> a, unsigned w,
                      unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    if (x < w && y < h) {
        a[y * w + x] *= 2;
    }
}

int main()
{
    unsigned w {0};
    unsigned h {0};
    unsigned bx {0};
    unsigned by {0};
    std::cin >> w >> h >> bx >> by;
    std::vector<int> host(w * h);
    for (int& v : host) {
        std::cin >> v;
    }
    int* a {nullptr};
    cudaMalloc(&a, w * h * sizeof(int));
    cudaMemcpy(a, host.data(), w * h * sizeof(int),
               cudaMemcpyHostToDevice);
    dim3 block {bx, by};
    dim3 grid {(w + bx - 1) / bx, (h + by - 1) / by};
    cuda::std::span<int> view {a, w * h};
    twice<<<grid, block>>>(view, w, h);
    cudaMemcpy(host.data(), a, w * h * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(a);
    for (unsigned y {0}; y < h; ++y) {
        for (unsigned x {0}; x < w; ++x) {
            std::print("{} ", host[y * w + x]);
        }
        std::println();
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> a, unsigned w,
                      unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.x + threadIdx.y};
    if (x < w && y < h) {
        a[y * w + x] *= 2;
    }
}

int main()
{
    unsigned w {0};
    unsigned h {0};
    unsigned bx {0};
    unsigned by {0};
    std::cin >> w >> h >> bx >> by;
    std::vector<int> host(w * h);
    for (int& v : host) {
        std::cin >> v;
    }
    int* a {nullptr};
    cudaMalloc(&a, w * h * sizeof(int));
    cudaMemcpy(a, host.data(), w * h * sizeof(int),
               cudaMemcpyHostToDevice);
    dim3 block {bx, by};
    dim3 grid {(w + bx - 1) / bx, (h + by - 1) / by};
    cuda::std::span<int> view {a, w * h};
    twice<<<grid, block>>>(view, w, h);
    cudaMemcpy(host.data(), a, w * h * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(a);
    for (unsigned y {0}; y < h; ++y) {
        for (unsigned x {0}; x < w; ++x) {
            std::print("{} ", host[y * w + x]);
        }
        std::println();
    }
}
```
### Tests
```in
1 1 1 1
7
```
```in
5 3 8 2
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
```
```in
2 5 1 4
1 2
3 4
5 6
7 8
9 10
```
```in
16 16 32 32
0 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45
48 51 54 57 60 63 66 69 72 75 78 81 84 87 90 93
96 99 102 105 108 111 114 117 120 123 126 129 132 135 138 141
144 147 150 153 156 159 162 165 168 171 174 177 180 183 186 189
192 195 198 201 204 207 210 213 216 219 222 225 228 231 234 237
240 243 246 249 252 255 258 261 264 267 270 273 276 279 282 285
288 291 294 297 300 303 306 309 312 315 318 321 324 327 330 333
336 339 342 345 348 351 354 357 360 363 366 369 372 375 378 381
384 387 390 393 396 399 402 405 408 411 414 417 420 423 426 429
432 435 438 441 444 447 450 453 456 459 462 465 468 471 474 477
480 483 486 489 492 495 498 501 504 507 510 513 516 519 522 525
528 531 534 537 540 543 546 549 552 555 558 561 564 567 570 573
576 579 582 585 588 591 594 597 600 603 606 609 612 615 618 621
624 627 630 633 636 639 642 645 648 651 654 657 660 663 666 669
672 675 678 681 684 687 690 693 696 699 702 705 708 711 714 717
720 723 726 729 732 735 738 741 744 747 750 753 756 759 762 765
```
```in
4 4 2 2
0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 1000
```
### Witness
```in
4 4 4 1
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
```

## Alone 2
Form: run
Write a program that reads a grid of w columns and h rows and prints it turned on its side: row r of the output is column r of the grid.
Use a kernel launched on blocks of 16 by 16 threads, one thread for each number of the grid.
Input: the first line holds w and h; then h lines of w numbers each.
Output: w lines of h numbers each, separated by spaces.
Limits: 1 ≤ w ≤ 20; 1 ≤ h ≤ 20; each number from 0 to 1000.
### Examples
```in
3 2
1 2 3
4 5 6
```
```out
1 4
2 5
3 6
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void turn(cuda::std::span<const int> in,
                     cuda::std::span<int> out, unsigned w,
                     unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    if (x < w && y < h) {
        out[x * h + y] = in[y * w + x];
    }
}

int main()
{
    unsigned w {0};
    unsigned h {0};
    std::cin >> w >> h;
    std::vector<int> host(w * h);
    for (int& v : host) {
        std::cin >> v;
    }
    int* in {nullptr};
    int* out {nullptr};
    cudaMalloc(&in, w * h * sizeof(int));
    cudaMalloc(&out, w * h * sizeof(int));
    cudaMemset(out, 0, w * h * sizeof(int));
    cudaMemcpy(in, host.data(), w * h * sizeof(int),
               cudaMemcpyHostToDevice);
    dim3 block {16, 16};
    dim3 grid {(w + 15) / 16, (h + 15) / 16};
    cuda::std::span<const int> from {in, w * h};
    cuda::std::span<int> to {out, w * h};
    turn<<<grid, block>>>(from, to, w, h);
    cudaMemcpy(host.data(), out, w * h * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(in);
    cudaFree(out);
    for (unsigned r {0}; r < w; ++r) {
        for (unsigned c {0}; c < h; ++c) {
            std::print("{} ", host[r * h + c]);
        }
        std::println();
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void turn(cuda::std::span<const int> in,
                     cuda::std::span<int> out, unsigned w,
                     unsigned h)
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned y {blockIdx.y * blockDim.y + threadIdx.y};
    if (x < w && y < h) {
        out[x * h + y] = in[y * w + x];
    }
}

int main()
{
    unsigned w {0};
    unsigned h {0};
    std::cin >> w >> h;
    std::vector<int> host(w * h);
    for (int& v : host) {
        std::cin >> v;
    }
    int* in {nullptr};
    int* out {nullptr};
    cudaMalloc(&in, w * h * sizeof(int));
    cudaMalloc(&out, w * h * sizeof(int));
    cudaMemset(out, 0, w * h * sizeof(int));
    cudaMemcpy(in, host.data(), w * h * sizeof(int),
               cudaMemcpyHostToDevice);
    dim3 block {16, 16};
    dim3 grid {(h + 15) / 16, (w + 15) / 16};
    cuda::std::span<const int> from {in, w * h};
    cuda::std::span<int> to {out, w * h};
    turn<<<grid, block>>>(from, to, w, h);
    cudaMemcpy(host.data(), out, w * h * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(in);
    cudaFree(out);
    for (unsigned r {0}; r < w; ++r) {
        for (unsigned c {0}; c < h; ++c) {
            std::print("{} ", host[r * h + c]);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
5
```
```in
17 2
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34
```
```in
2 17
1 2
3 4
5 6
7 8
9 10
11 12
13 14
15 16
17 18
19 20
21 22
23 24
25 26
27 28
29 30
31 32
33 34
```
```in
20 20
0 7 14 21 28 35 42 49 56 63 70 77 84 91 98 105 112 119 126 133
140 147 154 161 168 175 182 189 196 203 210 217 224 231 238 245 252 259 266 273
280 287 294 301 308 315 322 329 336 343 350 357 364 371 378 385 392 399 406 413
420 427 434 441 448 455 462 469 476 483 490 497 504 511 518 525 532 539 546 553
560 567 574 581 588 595 602 609 616 623 630 637 644 651 658 665 672 679 686 693
700 707 714 721 728 735 742 749 756 763 770 777 784 791 798 805 812 819 826 833
840 847 854 861 868 875 882 889 896 903 910 917 924 931 938 945 952 959 966 973
980 987 994 0 7 14 21 28 35 42 49 56 63 70 77 84 91 98 105 112
119 126 133 140 147 154 161 168 175 182 189 196 203 210 217 224 231 238 245 252
259 266 273 280 287 294 301 308 315 322 329 336 343 350 357 364 371 378 385 392
399 406 413 420 427 434 441 448 455 462 469 476 483 490 497 504 511 518 525 532
539 546 553 560 567 574 581 588 595 602 609 616 623 630 637 644 651 658 665 672
679 686 693 700 707 714 721 728 735 742 749 756 763 770 777 784 791 798 805 812
819 826 833 840 847 854 861 868 875 882 889 896 903 910 917 924 931 938 945 952
959 966 973 980 987 994 0 7 14 21 28 35 42 49 56 63 70 77 84 91
98 105 112 119 126 133 140 147 154 161 168 175 182 189 196 203 210 217 224 231
238 245 252 259 266 273 280 287 294 301 308 315 322 329 336 343 350 357 364 371
378 385 392 399 406 413 420 427 434 441 448 455 462 469 476 483 490 497 504 511
518 525 532 539 546 553 560 567 574 581 588 595 602 609 616 623 630 637 644 651
658 665 672 679 686 693 700 707 714 721 728 735 742 749 756 763 770 777 784 791
```
```in
4 3
1 2 3 4
5 6 7 8
9 10 11 1000
```
### Witness
```in
18 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
```
