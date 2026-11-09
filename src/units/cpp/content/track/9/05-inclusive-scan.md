# 9.05 An inclusive scan
Part: an inclusive scan
Clause: PMPP 5th ed. §11.1 Background, PMPP 5th ed. §11.2 Parallel scan with the Kogge-Stone algorithm, PMPP 5th ed. §11.9 Consolidating block segments for a global scan
After: 9.01
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 11, §11.1, §11.2 and §11.9

## Example
```cuda
#include <print>

__global__ void scan(int* a)
{
    unsigned t {threadIdx.x};
    //: Add the value s places back, for s = 1, 2, 4, and so on.
    for (unsigned s {1}; s < blockDim.x; s *= 2) {
        //: Read the value before any thread of the step writes.
        int add {t >= s ? a[t - s] : 0};
        __syncthreads();
        //: Then write, and wait before the next step reads.
        a[t] += add;
        __syncthreads();
    }
}

int main()
{
    //: Fill eight integers, 1 to 8.
    int* a {nullptr};
    cudaMallocManaged(&a, 8 * sizeof(int));
    for (int i {0}; i < 8; ++i) {
        a[i] = i + 1;
    }
    //: Scan them in one block; element i ends as a[0] + … + a[i].
    scan<<<1, 8>>>(a);
    cudaDeviceSynchronize();
    for (int i {0}; i < 8; ++i) {
        std::print("{} ", a[i]);
    }
    std::println();
    cudaFree(a);
}
```

## Verdict 1
Sanitizer: racecheck
```cuda
#include <print>

__global__ void scan(int* a)
{
    __shared__ int s[256];
    unsigned t {threadIdx.x};
    s[t] = a[t];
    __syncthreads();
    for (unsigned d {1}; d < 256; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        s[t] += add;
        __syncthreads();
    }
    a[t] = s[t];
}

int main()
{
    int* a {nullptr};
    cudaMallocManaged(&a, 256 * sizeof(int));
    for (int i {0}; i < 256; ++i) {
        a[i] = 1;
    }
    scan<<<1, 256>>>(a);
    cudaDeviceSynchronize();
    std::println("{}", a[255]);
    cudaFree(a);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: racecheck
```cuda
#include <print>

__global__ void scan(int* a)
{
    __shared__ int s[256];
    unsigned t {threadIdx.x};
    s[t] = a[t];
    __syncthreads();
    for (unsigned d {1}; d < 256; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    a[t] = s[t];
}

int main()
{
    int* a {nullptr};
    cudaMallocManaged(&a, 256 * sizeof(int));
    for (int i {0}; i < 256; ++i) {
        a[i] = 1;
    }
    scan<<<1, 256>>>(a);
    cudaDeviceSynchronize();
    std::println("{}", a[255]);
    cudaFree(a);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and prints their inclusive scan: output i is the sum of integers 0 to i. Scan them on the device in one block of n threads.
Input: one line, n, then one line of n integers.
Output: one line, the n sums separated by spaces.
Limits: 1 ≤ n ≤ 1024; each integer is between -1000 and 1000.
### Examples
```in
4
1 2 3 4
```
```out
1 3 6 10
```
```in
8
5 -2 0 7 1 1 -3 4
```
```out
5 3 3 10 11 12 9 13
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a)
{
    unsigned t {threadIdx.x};
    for (unsigned s {1}; s < blockDim.x; s *= 2) {
        int add {t >= s ? a[t - s] : 0};
        __syncthreads();
        a[t] += add;
        __syncthreads();
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* a {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    scan<<<1, n>>>({a, static_cast<std::size_t>(n)});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a)
{
    unsigned t {threadIdx.x};
    for (unsigned s {1}; s <= blockDim.x / 2; s *= 2) {
        int add {t >= s ? a[t - s] : 0};
        __syncthreads();
        a[t] += add;
        __syncthreads();
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* a {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    scan<<<1, n>>>({a, static_cast<std::size_t>(n)});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
}
```
### Tests
```in
1
-9
```
```in
3
1 1 1
```
```in
6
1 2 3 4 5 6
```
```in
1024
-1000 -963 -926 -889 -852 -815 -778 -741 -704 -667 -630 -593 -556 -519 -482 -445 -408 -371 -334 -297 -260 -223 -186 -149 -112 -75 -38 -1 36 73 110 147 184 221 258 295 332 369 406 443 480 517 554 591 628 665 702 739 776 813 850 887 924 961 998 -966 -929 -892 -855 -818 -781 -744 -707 -670 -633 -596 -559 -522 -485 -448 -411 -374 -337 -300 -263 -226 -189 -152 -115 -78 -41 -4 33 70 107 144 181 218 255 292 329 366 403 440 477 514 551 588 625 662 699 736 773 810 847 884 921 958 995 -969 -932 -895 -858 -821 -784 -747 -710 -673 -636 -599 -562 -525 -488 -451 -414 -377 -340 -303 -266 -229 -192 -155 -118 -81 -44 -7 30 67 104 141 178 215 252 289 326 363 400 437 474 511 548 585 622 659 696 733 770 807 844 881 918 955 992 -972 -935 -898 -861 -824 -787 -750 -713 -676 -639 -602 -565 -528 -491 -454 -417 -380 -343 -306 -269 -232 -195 -158 -121 -84 -47 -10 27 64 101 138 175 212 249 286 323 360 397 434 471 508 545 582 619 656 693 730 767 804 841 878 915 952 989 -975 -938 -901 -864 -827 -790 -753 -716 -679 -642 -605 -568 -531 -494 -457 -420 -383 -346 -309 -272 -235 -198 -161 -124 -87 -50 -13 24 61 98 135 172 209 246 283 320 357 394 431 468 505 542 579 616 653 690 727 764 801 838 875 912 949 986 -978 -941 -904 -867 -830 -793 -756 -719 -682 -645 -608 -571 -534 -497 -460 -423 -386 -349 -312 -275 -238 -201 -164 -127 -90 -53 -16 21 58 95 132 169 206 243 280 317 354 391 428 465 502 539 576 613 650 687 724 761 798 835 872 909 946 983 -981 -944 -907 -870 -833 -796 -759 -722 -685 -648 -611 -574 -537 -500 -463 -426 -389 -352 -315 -278 -241 -204 -167 -130 -93 -56 -19 18 55 92 129 166 203 240 277 314 351 388 425 462 499 536 573 610 647 684 721 758 795 832 869 906 943 980 -984 -947 -910 -873 -836 -799 -762 -725 -688 -651 -614 -577 -540 -503 -466 -429 -392 -355 -318 -281 -244 -207 -170 -133 -96 -59 -22 15 52 89 126 163 200 237 274 311 348 385 422 459 496 533 570 607 644 681 718 755 792 829 866 903 940 977 -987 -950 -913 -876 -839 -802 -765 -728 -691 -654 -617 -580 -543 -506 -469 -432 -395 -358 -321 -284 -247 -210 -173 -136 -99 -62 -25 12 49 86 123 160 197 234 271 308 345 382 419 456 493 530 567 604 641 678 715 752 789 826 863 900 937 974 -990 -953 -916 -879 -842 -805 -768 -731 -694 -657 -620 -583 -546 -509 -472 -435 -398 -361 -324 -287 -250 -213 -176 -139 -102 -65 -28 9 46 83 120 157 194 231 268 305 342 379 416 453 490 527 564 601 638 675 712 749 786 823 860 897 934 971 -993 -956 -919 -882 -845 -808 -771 -734 -697 -660 -623 -586 -549 -512 -475 -438 -401 -364 -327 -290 -253 -216 -179 -142 -105 -68 -31 6 43 80 117 154 191 228 265 302 339 376 413 450 487 524 561 598 635 672 709 746 783 820 857 894 931 968 -996 -959 -922 -885 -848 -811 -774 -737 -700 -663 -626 -589 -552 -515 -478 -441 -404 -367 -330 -293 -256 -219 -182 -145 -108 -71 -34 3 40 77 114 151 188 225 262 299 336 373 410 447 484 521 558 595 632 669 706 743 780 817 854 891 928 965 -999 -962 -925 -888 -851 -814 -777 -740 -703 -666 -629 -592 -555 -518 -481 -444 -407 -370 -333 -296 -259 -222 -185 -148 -111 -74 -37 0 37 74 111 148 185 222 259 296 333 370 407 444 481 518 555 592 629 666 703 740 777 814 851 888 925 962 999 -965 -928 -891 -854 -817 -780 -743 -706 -669 -632 -595 -558 -521 -484 -447 -410 -373 -336 -299 -262 -225 -188 -151 -114 -77 -40 -3 34 71 108 145 182 219 256 293 330 367 404 441 478 515 552 589 626 663 700 737 774 811 848 885 922 959 996 -968 -931 -894 -857 -820 -783 -746 -709 -672 -635 -598 -561 -524 -487 -450 -413 -376 -339 -302 -265 -228 -191 -154 -117 -80 -43 -6 31 68 105 142 179 216 253 290 327 364 401 438 475 512 549 586 623 660 697 734 771 808 845 882 919 956 993 -971 -934 -897 -860 -823 -786 -749 -712 -675 -638 -601 -564 -527 -490 -453 -416 -379 -342 -305 -268 -231 -194 -157 -120 -83 -46 -9 28 65 102 139 176 213 250 287 324 361 398 435 472 509 546 583 620 657 694 731 768 805 842 879 916 953 990 -974 -937 -900 -863 -826 -789 -752 -715 -678 -641 -604 -567 -530 -493 -456 -419 -382 -345 -308 -271 -234 -197 -160 -123 -86 -49 -12 25 62 99 136 173 210 247 284 321 358 395 432 469 506 543 580 617 654 691 728 765 802 839 876 913 950 987 -977 -940 -903 -866 -829 -792 -755 -718 -681 -644 -607 -570 -533 -496 -459 -422 -385 -348 -311 -274 -237 -200 -163 -126 -89 -52 -15 22 59 96 133 170 207 244 281 318 355 392 429 466 503 540 577 614 651 688 725 762 799 836 873 910 947 984 -980 -943 -906 -869 -832 -795 -758 -721 -684 -647 -610 -573 -536 -499 -462 -425 -388 -351 -314 -277 -240 -203 -166 -129 -92 -55 -18 19 56 93 130 167 204 241 278 315 352 389 426 463 500 537 574 611 648 685 722 759 796 833
```
```in
1000
-1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1
```
### Witness
```in
5
1 1 1 1 1
```

## Alone 2
Form: run
Write a program that reads n integers and prints their inclusive scan: output i is the sum of integers 0 to i. Scan them on the device in blocks of 8 threads, one integer for each thread; block j holds integers 8j to 8j + 7.
Input: one line, n, then one line of n integers.
Output: one line, the n sums separated by spaces.
Limits: 1 ≤ n ≤ 64; each integer is between -1000 and 1000.
### Examples
```in
5
1 2 3 4 5
```
```out
1 3 6 10 15
```
```in
8
2 -1 2 -1 2 -1 2 -1
```
```out
2 1 3 2 4 3 5 4
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a, int n,
                     cuda::std::span<int> sums)
{
    __shared__ int s[8];
    unsigned t {threadIdx.x};
    int i {static_cast<int>(blockIdx.x * 8 + t)};
    s[t] = i < n ? a[i] : 0;
    __syncthreads();
    for (unsigned d {1}; d < 8; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    if (i < n) {
        a[i] = s[t];
    }
    if (t == 7) {
        sums[blockIdx.x] = s[7];
    }
}

__global__ void carry(cuda::std::span<int> a, int n,
                      cuda::std::span<const int> sums)
{
    int i {static_cast<int>(blockIdx.x * 8 + threadIdx.x)};
    if (blockIdx.x > 0 && i < n) {
        a[i] += sums[blockIdx.x - 1];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int g {(n + 7) / 8};
    int* a {nullptr};
    int* sums {nullptr};
    int* top {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    cudaMallocManaged(&sums, g * sizeof(int));
    cudaMallocManaged(&top, sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    std::size_t na {static_cast<std::size_t>(n)};
    std::size_t ng {static_cast<std::size_t>(g)};
    scan<<<g, 8>>>({a, na}, n, {sums, ng});
    scan<<<1, 8>>>({sums, ng}, g, {top, 1});
    carry<<<g, 8>>>({a, na}, n, {sums, ng});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
    cudaFree(sums);
    cudaFree(top);
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a, int n,
                     cuda::std::span<int> sums)
{
    __shared__ int s[8];
    unsigned t {threadIdx.x};
    int i {static_cast<int>(blockIdx.x * 8 + t)};
    s[t] = i < n ? a[i] : 0;
    __syncthreads();
    for (unsigned d {1}; d < 8; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    if (i < n) {
        a[i] = s[t];
    }
    if (t == 7) {
        sums[blockIdx.x] = s[7];
    }
}

__global__ void carry(cuda::std::span<int> a, int n,
                      cuda::std::span<const int> sums)
{
    int i {static_cast<int>(blockIdx.x * 8 + threadIdx.x)};
    if (blockIdx.x > 0 && i < n) {
        a[i] += sums[blockIdx.x - 1];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int g {(n + 7) / 8};
    int* a {nullptr};
    int* sums {nullptr};
    int* top {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    cudaMallocManaged(&sums, g * sizeof(int));
    cudaMallocManaged(&top, sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    std::size_t na {static_cast<std::size_t>(n)};
    std::size_t ng {static_cast<std::size_t>(g)};
    scan<<<g, 8>>>({a, na}, n, {sums, ng});
    scan<<<1, 8>>>({sums, ng}, g, {top, 1});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
    cudaFree(sums);
    cudaFree(top);
}
```
### Tests
```in
1
4
```
```in
9
1 1 1 1 1 1 1 1 1
```
```in
17
-8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8
```
```in
64
-1000 -963 -926 -889 -852 -815 -778 -741 -704 -667 -630 -593 -556 -519 -482 -445 -408 -371 -334 -297 -260 -223 -186 -149 -112 -75 -38 -1 36 73 110 147 184 221 258 295 332 369 406 443 480 517 554 591 628 665 702 739 776 813 850 887 924 961 998 -966 -929 -892 -855 -818 -781 -744 -707 -670
```
### Witness
```in
10
1 2 3 4 5 6 7 8 9 10
```
