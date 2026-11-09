# 9.16 One warp per row of a sparse matrix: the loads of each lane
Part: one warp per row in the same product: the loads of each lane, counted
Clause: PMPP 5th ed. §17.3 Grouping row non-zeros with the CSR format, PMPP 5th ed. §6.1 Global memory access coalescing, PMPP 5th ed. §10.7 Reducing synchronization overhead with warp-level primitives, CUDA C++ Programming Guide §7.22 Warp shuffle functions
After: 9.03, 9.15
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 17, §17.3, ch. 6, §6.1, and ch. 10, §10.7; the book gives one thread per row, and the warp per row is its remedy for the uncoalesced loads, built from §6.1 and §10.7

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Give each row one warp, a block of 32 threads.
__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<int> loads)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int start {rows[row]};
    int end {rows[row + 1]};
    int count {2};
    //: Let lane l take non-zeros l, l + 32, l + 64 of the row.
    int sum {0};
    for (int k {start + lane}; k < end; k += 32) {
        sum += vals[k] * x[cols[k]];
        count += 3;
    }
    //: Add the 32 partial sums into lane 0 by shuffles.
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[row] = sum;
    }
    loads[32 * row + lane] = count;
}

int main()
{
    //: Keep two rows of 40 and of 3 ones, and x all ones.
    int* a {nullptr};
    cudaMallocManaged(&a, 200 * sizeof(int));
    cuda::std::span<int> all {a, 200};
    all[0] = 0;
    all[1] = 40;
    all[2] = 43;
    for (int k {0}; k < 43; ++k) {
        all[3 + k] = k % 40;
        all[46 + k] = 1;
    }
    for (int j {0}; j < 40; ++j) {
        all[89 + j] = 1;
    }
    spmv<<<2, 32>>>(all.subspan(0, 3), all.subspan(3, 43),
                    all.subspan(46, 43), all.subspan(89, 40),
                    all.subspan(129, 2), all.subspan(131, 64));
    cudaDeviceSynchronize();
    //: Print y, then the loads of each lane of each row.
    std::println("{} {}", all[129], all[130]);
    for (int r {0}; r < 2; ++r) {
        for (int lane {0}; lane < 32; ++lane) {
            std::print("{} ", all[131 + 32 * r + lane]);
        }
        std::println();
    }
    cudaFree(a);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<int> y)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int end {rows[row + 1]};
    int sum {0};
    for (int k {rows[row] + lane}; k <= end; k += 32) {
        sum += cols[k];
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[row] = sum;
    }
}

int main()
{
    int nnz {40};
    std::size_t z {static_cast<std::size_t>(nnz)};
    int* rows {nullptr};
    int* cols {nullptr};
    int* y {nullptr};
    cudaMallocManaged(&rows, 2 * sizeof(int));
    cudaMallocManaged(&cols, z * sizeof(int));
    cudaMallocManaged(&y, sizeof(int));
    rows[0] = 0;
    rows[1] = nnz;
    for (int k {0}; k < nnz; ++k) {
        cols[k] = 1;
    }
    spmv<<<1, 32>>>({rows, 2}, {cols, z}, {y, 1});
    cudaDeviceSynchronize();
    std::println("{}", *y);
    cudaFree(y);
    cudaFree(cols);
    cudaFree(rows);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<int> y)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int end {rows[row + 1]};
    int sum {0};
    for (int k {rows[row] + lane}; k < end; k += 32) {
        sum += cols[k];
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[row] = sum;
    }
}

int main()
{
    int nnz {40};
    std::size_t z {static_cast<std::size_t>(nnz)};
    int* rows {nullptr};
    int* cols {nullptr};
    int* y {nullptr};
    cudaMallocManaged(&rows, 2 * sizeof(int));
    cudaMallocManaged(&cols, z * sizeof(int));
    cudaMallocManaged(&y, sizeof(int));
    rows[0] = 0;
    rows[1] = nnz;
    for (int k {0}; k < nnz; ++k) {
        cols[k] = 1;
    }
    spmv<<<1, 32>>>({rows, 2}, {cols, z}, {y, 1});
    cudaDeviceSynchronize();
    std::println("{}", *y);
    cudaFree(y);
    cudaFree(cols);
    cudaFree(rows);
}
```
Answer: c++23 defined

## Count
Columns: lane0, lane7, lane8, lane31
```cuda
#include <cuda/std/span>
#include <print>

__managed__ unsigned tally[64][32];

__device__ int load(cuda::std::span<const int> a, int i,
                    int line = __builtin_LINE())
{
    atomicAdd(&tally[line][threadIdx.x], 1u);
    return a[i];
}

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    int lane {static_cast<int>(threadIdx.x)};
    int start {load(rows, 0)};
    int end {load(rows, 1)};
    int sum {0};
    for (int k {start + lane}; k < end; k += 32) {
        int col {load(cols, k)};
        int v {load(vals, k)};
        sum += v * load(x, col);
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[0] = sum;
    }
}

int main()
{
    int* a {nullptr};
    cudaMallocManaged(&a, 123 * sizeof(int));
    cuda::std::span<int> all {a, 123};
    all[0] = 0;
    all[1] = 40;
    for (int k {0}; k < 40; ++k) {
        all[2 + k] = k;
        all[42 + k] = 1;
        all[82 + k] = k;
    }
    spmv<<<1, 32>>>(all.subspan(0, 2), all.subspan(2, 40),
                    all.subspan(42, 40), all.subspan(82, 40),
                    all.subspan(122, 1));
    cudaDeviceSynchronize();
    int shown[4] {0, 7, 8, 31};
    for (int line {0}; line < 64; ++line) {
        for (int lane : shown) {
            for (unsigned k {0}; k < tally[line][lane]; ++k) {
                std::println("@{} lane{}", line, lane);
            }
        }
    }
    cudaFree(a);
}
```

## Alone 1
Form: run
Write a program that reads a sparse matrix A with m rows and n columns, stored by rows, and a vector x, and computes y = A·x on the device.
The matrix is stored as three arrays: the row starts, m + 1 numbers, where row i holds the non-zeros start[i] to start[i + 1] − 1; then the column and the value of each non-zero.
Run one warp per row: block r, of 32 threads, takes row r, and thread l is its lane l. Lane l takes the row's non-zeros l, l + 32, l + 64 and so on, counted from the row's start, so that neighbouring lanes load neighbouring non-zeros.
Each lane loads from global memory its row's start and the next row's start, then, for each non-zero it takes, its column, its value and the entry of x in that column. The lanes then add their sums together by shuffles. Count the loads of each lane.
Input: one line, m, n and the number of non-zeros nnz; then one line of m + 1 row starts; one line of nnz columns; one line of nnz values; one line of n entries of x.
Output: one line, the m entries of y separated by spaces; then one line per row, in order, with the loads of its 32 lanes separated by spaces.
Limits: 1 ≤ m ≤ 100; 1 ≤ n ≤ 200; 0 ≤ nnz ≤ 2000; the starts begin at 0, never decrease and end at nnz; 0 ≤ each column < n; each value and entry of x is between -1000 and 1000.
### Examples
```in
2 4 6
0 2 6
0 1 0 1 2 3
1 7 5 3 9 6
1 2 3 4
```
```out
15 62
5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
```
```in
1 3 3
0 3
2 1 0
4 5 6
10 20 30
```
```out
280
5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<int> loads)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int start {rows[row]};
    int end {rows[row + 1]};
    int count {2};
    int sum {0};
    for (int k {start + lane}; k < end; k += 32) {
        sum += vals[k] * x[cols[k]];
        count += 3;
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[row] = sum;
    }
    loads[32 * row + lane] = count;
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n + 32 * m)};
    int* a {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    std::size_t from {r + 1 + 2 * z + c};
    cuda::std::span<int> y {all.subspan(from, r)};
    cuda::std::span<int> loads {all.subspan(from + r)};
    spmv<<<m, 32>>>(all.subspan(0, r + 1),
                    all.subspan(r + 1, z),
                    all.subspan(r + 1 + z, z),
                    all.subspan(r + 1 + 2 * z, c), y, loads);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (int row {0}; row < m; ++row) {
        for (int lane {0}; lane < 32; ++lane) {
            std::print("{} ", loads[32 * row + lane]);
        }
        std::println();
    }
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<int> loads)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int start {rows[row]};
    int end {rows[row + 1]};
    int count {2};
    int sum {0};
    int per {(end - start + 31) / 32};
    int stop {start + (lane + 1) * per};
    for (int k {start + lane * per}; k < end && k < stop; ++k) {
        sum += vals[k] * x[cols[k]];
        count += 3;
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    if (lane == 0) {
        y[row] = sum;
    }
    loads[32 * row + lane] = count;
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n + 32 * m)};
    int* a {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    std::size_t from {r + 1 + 2 * z + c};
    cuda::std::span<int> y {all.subspan(from, r)};
    cuda::std::span<int> loads {all.subspan(from + r)};
    spmv<<<m, 32>>>(all.subspan(0, r + 1),
                    all.subspan(r + 1, z),
                    all.subspan(r + 1 + z, z),
                    all.subspan(r + 1 + 2 * z, c), y, loads);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (int row {0}; row < m; ++row) {
        for (int lane {0}; lane < 32; ++lane) {
            std::print("{} ", loads[32 * row + lane]);
        }
        std::println();
    }
    cudaFree(a);
}
```
### Tests
```in
1 1 0
0 0

5
```
```in
1 1 32
0 32
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
-3
```
```in
3 2 70
0 33 33 70
0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70
1000 -1000
```
```in
2 3 100
0 100 100
0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0
-5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5
1 2 3
```
### Witness
```in
1 1 33
0 33
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1
```

## Alone 2
Form: run
Write a program that reads a sparse matrix A with m rows and n columns, stored by rows, and a vector x, and computes y = A·x on the device.
The matrix is stored as three arrays: the row starts, m + 1 numbers, where row i holds the non-zeros start[i] to start[i + 1] − 1; then the column and the value of each non-zero.
Run one warp per row: block r, of 32 threads, takes row r, and thread l is its lane l. Lane l takes the row's non-zeros l, l + 32, l + 64 and so on, counted from the row's start.
Each lane loads its row's start and the next row's start, then, for each non-zero it takes, its column, its value and the entry of x in that column. The lanes then add their 32 partial sums together by shuffles, so that lane 0 holds the row's sum.
For each row, find the most loads any one lane makes.
Input: one line, m, n and the number of non-zeros nnz; then one line of m + 1 row starts; one line of nnz columns; one line of nnz values; one line of n entries of x.
Output: one line, the m entries of y separated by spaces; then one line, the most loads of a lane in each row, separated by spaces.
Limits: 1 ≤ m ≤ 100; 1 ≤ n ≤ 200; 0 ≤ nnz ≤ 2000; the starts begin at 0, never decrease and end at nnz; 0 ≤ each column < n; each value and entry of x is between -1000 and 1000.
### Examples
```in
2 4 6
0 2 6
0 1 0 1 2 3
1 7 5 3 9 6
1 2 3 4
```
```out
15 62
5 5
```
```in
3 2 16
0 16 16 16
0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
3 -2
```
```out
48 0 0
5 2 2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<unsigned> most)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int start {rows[row]};
    int end {rows[row + 1]};
    unsigned count {2};
    int sum {0};
    for (int k {start + lane}; k < end; k += 32) {
        sum += vals[k] * x[cols[k]];
        count += 3;
    }
    for (int d {16}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    unsigned top {__reduce_max_sync(0xffffffffu, count)};
    if (lane == 0) {
        y[row] = sum;
        most[row] = top;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n)};
    std::size_t r {static_cast<std::size_t>(m)};
    int* a {nullptr};
    unsigned* t {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cudaMallocManaged(&t, r * sizeof(unsigned));
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    cuda::std::span<unsigned> most {t, r};
    spmv<<<m, 32>>>(all.subspan(0, r + 1),
                    all.subspan(r + 1, z),
                    all.subspan(r + 1 + z, z),
                    all.subspan(r + 1 + 2 * z, c), y, most);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (unsigned v : most) {
        std::print("{} ", v);
    }
    std::println();
    cudaFree(t);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<unsigned> most)
{
    int row {static_cast<int>(blockIdx.x)};
    int lane {static_cast<int>(threadIdx.x)};
    int start {rows[row]};
    int end {rows[row + 1]};
    unsigned count {2};
    int sum {0};
    for (int k {start + lane}; k < end; k += 32) {
        sum += vals[k] * x[cols[k]];
        count += 3;
    }
    for (int d {8}; d > 0; d /= 2) {
        sum += __shfl_down_sync(0xffffffffu, sum, d);
    }
    unsigned top {__reduce_max_sync(0xffffffffu, count)};
    if (lane == 0) {
        y[row] = sum;
        most[row] = top;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n)};
    std::size_t r {static_cast<std::size_t>(m)};
    int* a {nullptr};
    unsigned* t {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cudaMallocManaged(&t, r * sizeof(unsigned));
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    cuda::std::span<unsigned> most {t, r};
    spmv<<<m, 32>>>(all.subspan(0, r + 1),
                    all.subspan(r + 1, z),
                    all.subspan(r + 1 + z, z),
                    all.subspan(r + 1 + 2 * z, c), y, most);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (unsigned v : most) {
        std::print("{} ", v);
    }
    std::println();
    cudaFree(t);
    cudaFree(a);
}
```
### Tests
```in
1 1 0
0 0

5
```
```in
1 1 17
0 17
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1000
```
```in
3 2 70
0 33 33 70
0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70
1000 -1000
```
```in
2 3 100
0 100 100
0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0
-5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5
1 2 3
```
### Witness
```in
1 1 20
0 20
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1
```
