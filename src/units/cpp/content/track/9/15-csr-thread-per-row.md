# 9.15 One thread per row of a sparse matrix: the loads of each lane
Part: one thread per row in a sparse matrix-vector product: the loads of each lane, counted
Clause: PMPP 5th ed. §17.1 Background, PMPP 5th ed. §17.3 Grouping row non-zeros with the CSR format (one thread per row; the accesses are not coalesced and the loop lengths diverge), PMPP 5th ed. §4.5 Control divergence
After: 9.02
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 17, §17.3, and ch. 4, §4.5

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Give each row one thread, which walks the row's non-zeros.
__global__ void spmv(cuda::std::span<const int> rows,
                     cuda::std::span<const int> cols,
                     cuda::std::span<const int> vals,
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y,
                     cuda::std::span<int> loads)
{
    int row {static_cast<int>(blockIdx.x * 32 + threadIdx.x)};
    if (row < static_cast<int>(y.size())) {
        //: Load where this row and the next row start.
        int start {rows[row]};
        int end {rows[row + 1]};
        int count {2};
        //: Load a column, a value and an x entry per non-zero.
        int sum {0};
        for (int k {start}; k < end; ++k) {
            sum += vals[k] * x[cols[k]];
            count += 3;
        }
        y[row] = sum;
        loads[row] = count;
    }
}

int main()
{
    //: Keep a 4 by 4 matrix whose rows hold 2, 3, 0 and 1.
    int rows[5] {0, 2, 5, 5, 6};
    int cols[6] {0, 1, 0, 2, 3, 3};
    int vals[6] {1, 7, 5, 3, 9, 6};
    int* a {nullptr};
    cudaMallocManaged(&a, 29 * sizeof(int));
    for (int i {0}; i < 5; ++i) {
        a[i] = rows[i];
    }
    for (int k {0}; k < 6; ++k) {
        a[5 + k] = cols[k];
        a[11 + k] = vals[k];
    }
    for (int j {0}; j < 4; ++j) {
        a[17 + j] = j + 1;
    }
    cuda::std::span<int> all {a, 29};
    spmv<<<1, 32>>>(all.subspan(0, 5), all.subspan(5, 6),
                    all.subspan(11, 6), all.subspan(17, 4),
                    all.subspan(21, 4), all.subspan(25, 4));
    cudaDeviceSynchronize();
    //: Print y, then each lane's loads: 8, 11, 2 and 5.
    for (int i {0}; i < 4; ++i) {
        std::print("{} ", a[21 + i]);
    }
    std::println();
    for (int i {0}; i < 4; ++i) {
        std::print("{} ", a[25 + i]);
    }
    std::println();
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
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    int row {static_cast<int>(threadIdx.x)};
    int sum {0};
    for (int k {rows[row]}; k < rows[row + 1]; ++k) {
        sum += x[cols[k]];
    }
    y[row] = sum;
}

int main()
{
    int m {6};
    std::size_t size {static_cast<std::size_t>(m)};
    int* rows {nullptr};
    int* cols {nullptr};
    int* x {nullptr};
    int* y {nullptr};
    cudaMallocManaged(&rows, (size + 1) * sizeof(int));
    cudaMallocManaged(&cols, size * sizeof(int));
    cudaMallocManaged(&x, size * sizeof(int));
    cudaMallocManaged(&y, size * sizeof(int));
    for (int i {0}; i < m; ++i) {
        rows[i] = i;
        cols[i] = m - 1 - i;
        x[i] = i;
    }
    rows[m] = m;
    spmv<<<1, 32>>>({rows, size + 1}, {cols, size}, {x, size},
                    {y, size});
    cudaDeviceSynchronize();
    std::println("{}", y[0]);
    cudaFree(y);
    cudaFree(x);
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
                     cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    int row {static_cast<int>(threadIdx.x)};
    if (row < static_cast<int>(y.size())) {
        int sum {0};
        for (int k {rows[row]}; k < rows[row + 1]; ++k) {
            sum += x[cols[k]];
        }
        y[row] = sum;
    }
}

int main()
{
    int m {6};
    std::size_t size {static_cast<std::size_t>(m)};
    int* rows {nullptr};
    int* cols {nullptr};
    int* x {nullptr};
    int* y {nullptr};
    cudaMallocManaged(&rows, (size + 1) * sizeof(int));
    cudaMallocManaged(&cols, size * sizeof(int));
    cudaMallocManaged(&x, size * sizeof(int));
    cudaMallocManaged(&y, size * sizeof(int));
    for (int i {0}; i < m; ++i) {
        rows[i] = i < 3 ? 0 : 2 * (i - 3);
        cols[i] = m - 1 - i;
        x[i] = i;
    }
    rows[m] = m;
    spmv<<<1, 32>>>({rows, size + 1}, {cols, size}, {x, size},
                    {y, size});
    cudaDeviceSynchronize();
    std::println("{}", y[5]);
    cudaFree(y);
    cudaFree(x);
    cudaFree(cols);
    cudaFree(rows);
}
```
Answer: c++23 defined

## Count
Columns: lane0, lane1, lane2, lane3
```cuda
#include <cuda/std/span>
#include <print>

__managed__ unsigned tally[64][4];

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
    int row {static_cast<int>(threadIdx.x)};
    int start {load(rows, row)};
    int end {load(rows, row + 1)};
    int sum {0};
    for (int k {start}; k < end; ++k) {
        int col {load(cols, k)};
        int v {load(vals, k)};
        sum += v * load(x, col);
    }
    y[row] = sum;
}

int main()
{
    int init[21] {0, 2, 5, 5, 6, 0, 1, 0, 2, 3, 3,
                  1, 7, 5, 3, 9, 6, 1, 2, 3, 4};
    int* a {nullptr};
    cudaMallocManaged(&a, 25 * sizeof(int));
    for (int i {0}; i < 21; ++i) {
        a[i] = init[i];
    }
    cuda::std::span<int> all {a, 25};
    spmv<<<1, 4>>>(all.subspan(0, 5), all.subspan(5, 6),
                   all.subspan(11, 6), all.subspan(17, 4),
                   all.subspan(21, 4));
    cudaDeviceSynchronize();
    for (int line {0}; line < 64; ++line) {
        for (int lane {0}; lane < 4; ++lane) {
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
Run blocks of 32 threads, one thread per row: thread t of block b takes row 32·b + t. Each block is one warp, and thread t is its lane t.
Each thread loads from global memory its row's start and the next row's start, then, for each non-zero, its column, its value and the entry of x in that column. Count the loads of each lane.
Input: one line, m, n and the number of non-zeros nnz; then one line of m + 1 row starts; one line of nnz columns; one line of nnz values; one line of n entries of x.
Output: one line, the m entries of y separated by spaces; then one line per warp, in order, with the loads of its 32 lanes separated by spaces, 0 for a lane that has no row.
Limits: 1 ≤ m ≤ 200; 1 ≤ n ≤ 200; 0 ≤ nnz ≤ 2000; the starts begin at 0, never decrease and end at nnz; 0 ≤ each column < n; each value and entry of x is between -1000 and 1000.
### Examples
```in
4 4 6
0 2 5 5 6
0 1 0 2 3 3
1 7 5 3 9 6
1 2 3 4
```
```out
15 50 0 24
8 11 2 5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```
```in
3 5 7
0 3 3 7
4 0 2 1 2 3 4
1 1 1 2 2 2 2
10 20 30 40 50
```
```out
90 0 280
11 2 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
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
    int row {static_cast<int>(blockIdx.x * 32 + threadIdx.x)};
    if (row < static_cast<int>(y.size())) {
        int start {rows[row]};
        int end {rows[row + 1]};
        int count {2};
        int sum {0};
        for (int k {start}; k < end; ++k) {
            sum += vals[k] * x[cols[k]];
            count += 3;
        }
        y[row] = sum;
        loads[row] = count;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    int warps {(m + 31) / 32};
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n + 32 * warps)};
    int* a {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cuda::std::span<int> all {a, total};
    for (int& v : all) {
        v = 0;
    }
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    std::size_t from {2 * r + 1 + 2 * z + c};
    cuda::std::span<int> loads {all.subspan(from)};
    spmv<<<warps, 32>>>(all.subspan(0, r + 1),
                        all.subspan(r + 1, z),
                        all.subspan(r + 1 + z, z),
                        all.subspan(r + 1 + 2 * z, c), y,
                        loads);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (int w {0}; w < warps; ++w) {
        for (int lane {0}; lane < 32; ++lane) {
            std::print("{} ", loads[32 * w + lane]);
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
    int row {static_cast<int>(threadIdx.x)};
    if (row < static_cast<int>(y.size())) {
        int start {rows[row]};
        int end {rows[row + 1]};
        int count {2};
        int sum {0};
        for (int k {start}; k < end; ++k) {
            sum += vals[k] * x[cols[k]];
            count += 3;
        }
        y[row] = sum;
        loads[row] = count;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    int warps {(m + 31) / 32};
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n + 32 * warps)};
    int* a {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cuda::std::span<int> all {a, total};
    for (int& v : all) {
        v = 0;
    }
    for (int i {0}; i < m + 1 + 2 * nnz + n; ++i) {
        std::cin >> a[i];
    }
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    std::size_t from {2 * r + 1 + 2 * z + c};
    cuda::std::span<int> loads {all.subspan(from)};
    spmv<<<warps, 32>>>(all.subspan(0, r + 1),
                        all.subspan(r + 1, z),
                        all.subspan(r + 1 + z, z),
                        all.subspan(r + 1 + 2 * z, c), y,
                        loads);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (int w {0}; w < warps; ++w) {
        for (int lane {0}; lane < 32; ++lane) {
            std::print("{} ", loads[32 * w + lane]);
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
1 3 3
0 3
0 1 2
1000 -1000 1000
1000 1000 1000
```
```in
33 2 33
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
1 -1
```
```in
70 4 40
0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 10 11 11 12 12 13 13 14 14 15 15 16 16 17 17 18 18 19 19 20 20 21 21 22 22 23 23 24 24 25 25 26 26 27 27 28 28 29 29 30 30 31 31 32 32 33 33 34 34 40
0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5
1 2 3 4
```
### Witness
```in
33 1 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0

7
```

## Alone 2
Form: run
Write a program that reads a sparse matrix A with m rows and n columns, stored by rows, and a vector x, and computes y = A·x on the device.
The matrix is stored as three arrays: the row starts, m + 1 numbers, where row i holds the non-zeros start[i] to start[i + 1] − 1; then the column and the value of each non-zero.
Run blocks of 32 threads, one thread per row: thread t of block b takes row 32·b + t. Each block is one warp.
Each thread loads its row's start and the next row's start, then, for each non-zero, its column, its value and the entry of x in that column. A thread with no row loads nothing.
A warp makes its loads in steps: in each step, every lane that still has a load to make makes one. So a warp takes as many steps as its busiest lane makes loads.
Input: one line, m, n and the number of non-zeros nnz; then one line of m + 1 row starts; one line of nnz columns; one line of nnz values; one line of n entries of x.
Output: one line, the m entries of y separated by spaces; then one line, the steps of each warp, in order, separated by spaces.
Limits: 1 ≤ m ≤ 200; 1 ≤ n ≤ 200; 0 ≤ nnz ≤ 2000; the starts begin at 0, never decrease and end at nnz; 0 ≤ each column < n; each value and entry of x is between -1000 and 1000.
### Examples
```in
4 4 6
0 3 5 5 6
0 1 2 0 3 3
1 7 5 3 9 6
1 2 3 4
```
```out
30 39 0 24
11
```
```in
34 2 4
0 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4
0 1 1 0
3 4 5 6
10 100
```
```out
430 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 560 0
8 8
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
                     cuda::std::span<unsigned> steps)
{
    int row {static_cast<int>(blockIdx.x * 32 + threadIdx.x)};
    unsigned count {0};
    if (row < static_cast<int>(y.size())) {
        int start {rows[row]};
        int end {rows[row + 1]};
        count = 2;
        int sum {0};
        for (int k {start}; k < end; ++k) {
            sum += vals[k] * x[cols[k]];
            count += 3;
        }
        y[row] = sum;
    }
    unsigned most {__reduce_max_sync(0xffffffffu, count)};
    if (threadIdx.x == 0) {
        steps[blockIdx.x] = most;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    int warps {(m + 31) / 32};
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n)};
    std::size_t w {static_cast<std::size_t>(warps)};
    int* a {nullptr};
    unsigned* s {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cudaMallocManaged(&s, w * sizeof(unsigned));
    for (std::size_t i {0}; i < total - m; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    cuda::std::span<unsigned> steps {s, w};
    spmv<<<warps, 32>>>(all.subspan(0, r + 1),
                        all.subspan(r + 1, z),
                        all.subspan(r + 1 + z, z),
                        all.subspan(r + 1 + 2 * z, c), y,
                        steps);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (unsigned v : steps) {
        std::print("{} ", v);
    }
    std::println();
    cudaFree(s);
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
                     cuda::std::span<unsigned> steps)
{
    int row {static_cast<int>(blockIdx.x * 32 + threadIdx.x)};
    unsigned count {0};
    if (row < static_cast<int>(y.size())) {
        int start {rows[row]};
        int end {rows[row + 1]};
        count = 2;
        int sum {0};
        for (int k {start}; k < end; ++k) {
            sum += vals[k] * x[cols[k]];
            count += 3;
        }
        y[row] = sum;
    }
    unsigned most {__shfl_sync(0xffffffffu, count, 0)};
    if (threadIdx.x == 0) {
        steps[blockIdx.x] = most;
    }
}

int main()
{
    int m {0};
    int n {0};
    int nnz {0};
    std::cin >> m >> n >> nnz;
    int warps {(m + 31) / 32};
    std::size_t total {static_cast<std::size_t>(
        2 * m + 1 + 2 * nnz + n)};
    std::size_t w {static_cast<std::size_t>(warps)};
    int* a {nullptr};
    unsigned* s {nullptr};
    cudaMallocManaged(&a, total * sizeof(int));
    cudaMallocManaged(&s, w * sizeof(unsigned));
    for (std::size_t i {0}; i < total - m; ++i) {
        std::cin >> a[i];
    }
    cuda::std::span<int> all {a, total};
    std::size_t r {static_cast<std::size_t>(m)};
    std::size_t z {static_cast<std::size_t>(nnz)};
    std::size_t c {static_cast<std::size_t>(n)};
    cuda::std::span<int> y {all.subspan(r + 1 + 2 * z + c, r)};
    cuda::std::span<unsigned> steps {s, w};
    spmv<<<warps, 32>>>(all.subspan(0, r + 1),
                        all.subspan(r + 1, z),
                        all.subspan(r + 1 + z, z),
                        all.subspan(r + 1 + 2 * z, c), y,
                        steps);
    cudaDeviceSynchronize();
    for (int v : y) {
        std::print("{} ", v);
    }
    std::println();
    for (unsigned v : steps) {
        std::print("{} ", v);
    }
    std::println();
    cudaFree(s);
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
1 3 3
0 3
0 1 2
1000 -1000 1000
1000 1000 1000
```
```in
32 2 5
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 5
0 1 0 1 0
1 2 3 4 5
7 -7
```
```in
70 4 40
0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9 10 10 11 11 12 12 13 13 14 14 15 15 16 16 17 17 18 18 19 19 20 20 21 21 22 22 23 23 24 24 25 25 26 26 27 27 28 28 29 29 30 30 31 31 32 32 33 33 34 34 40
0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5 5 -5
1 2 3 4
```
### Witness
```in
2 2 3
0 1 3
0 0 1
1 2 3
4 5
```
