# 8.51 A __host__ __device__ function and __CUDA_ARCH__
Part: a `__host__ __device__` function and `__CUDA_ARCH__`
Clause: CUDA C++ Programming Guide: Function Execution Space Specifiers (__host__ __device__), CUDA C++ Programming Guide: __CUDA_ARCH__, CUDA C++ Programming Guide: Integer Intrinsics (__popc), [bit.count]
After: 8.50
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Execution Space Specifiers and __CUDA_ARCH__

## Example
```cuda
#include <bit>
#include <print>
#include <cuda/std/span>

//: Compile one function twice, once for the host, once for the device.
__host__ __device__ int ones(unsigned x)
{
    //: Use the device's own instruction where __CUDA_ARCH__ is defined.
#ifdef __CUDA_ARCH__
    return __popc(x);
#else
    return std::popcount(x);
#endif
}

__global__ void run(cuda::std::span<int> out)
{
    out[0] = ones(7u);
}

int main()
{
    //: Call it on the device and on the host.
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h, ones(255u));
}
```

## Verdict 1
```cuda
#include <print>
#include <cuda/std/span>

__host__ __device__ int ones(unsigned x)
{
    return __popc(x);
}

__global__ void run(cuda::std::span<int> out)
{
    out[0] = ones(7u);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h, ones(255u));
}
```
Answer: c++23 ill-formed 6

## Verdict 2
```cuda
#include <print>
#include <cuda/std/span>

__host__ __device__ int arch()
{
#ifdef __CUDA_ARCH__
    return __CUDA_ARCH__;
#else
    return 0;
#endif
}

__global__ void run(cuda::std::span<int> out)
{
    out[0] = arch();
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h, arch());
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and uses one `__host__ __device__` function `tag(x)`.
On the device, tag returns x with its lowest bit set to 1; on the host, it returns x unchanged.
Thread i of ⌈n/256⌉ blocks of 256 threads applies tag to integer i; the host applies tag to each integer too.
Input: the first line holds n; the second line holds the n integers.
Output: two lines: the device's n results, then the host's n results, each separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -10⁶ and 10⁶.
### Examples
```in
3
1 7 -5
```
```out
1 7 -5
1 7 -5
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__host__ __device__ int tag(int x)
{
#ifdef __CUDA_ARCH__
    return x | 1;
#else
    return x;
#endif
}

__global__ void mark(cuda::std::span<int> v)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = tag(v[i]);
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    std::vector<int> back(n);
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    mark<<<(n + 255) / 256, 256>>>({d, n});
    cudaMemcpy(back.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : back) {
        std::print("{} ", x);
    }
    std::println();
    for (int x : h) {
        std::print("{} ", tag(x));
    }
    std::println();
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__host__ __device__ int tag(int x)
{
#ifndef __CUDA_ARCH__
    return x | 1;
#else
    return x;
#endif
}

__global__ void mark(cuda::std::span<int> v)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = tag(v[i]);
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    std::vector<int> back(n);
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    mark<<<(n + 255) / 256, 256>>>({d, n});
    cudaMemcpy(back.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : back) {
        std::print("{} ", x);
    }
    std::println();
    for (int x : h) {
        std::print("{} ", tag(x));
    }
    std::println();
}
```
### Tests
```in
1
0
```
```in
4
-4 -3 1000000 -1000000
```
```in
5
2 4 6 8 9
```
```in
300
-1000 916 831 746 661 576 491 406 321 236 151 66 -19 -104 -189 -274 -359 -444 -529 -614 -699 -784 -869 -954 962 877 792 707 622 537 452 367 282 197 112 27 -58 -143 -228 -313 -398 -483 -568 -653 -738 -823 -908 -993 923 838 753 668 583 498 413 328 243 158 73 -12 -97 -182 -267 -352 -437 -522 -607 -692 -777 -862 -947 969 884 799 714 629 544 459 374 289 204 119 34 -51 -136 -221 -306 -391 -476 -561 -646 -731 -816 -901 -986 930 845 760 675 590 505 420 335 250 165 80 -5 -90 -175 -260 -345 -430 -515 -600 -685 -770 -855 -940 976 891 806 721 636 551 466 381 296 211 126 41 -44 -129 -214 -299 -384 -469 -554 -639 -724 -809 -894 -979 937 852 767 682 597 512 427 342 257 172 87 2 -83 -168 -253 -338 -423 -508 -593 -678 -763 -848 -933 983 898 813 728 643 558 473 388 303 218 133 48 -37 -122 -207 -292 -377 -462 -547 -632 -717 -802 -887 -972 944 859 774 689 604 519 434 349 264 179 94 9 -76 -161 -246 -331 -416 -501 -586 -671 -756 -841 -926 990 905 820 735 650 565 480 395 310 225 140 55 -30 -115 -200 -285 -370 -455 -540 -625 -710 -795 -880 -965 951 866 781 696 611 526 441 356 271 186 101 16 -69 -154 -239 -324 -409 -494 -579 -664 -749 -834 -919 997 912 827 742 657 572 487 402 317 232 147 62 -23 -108 -193 -278 -363 -448 -533 -618 -703 -788 -873 -958 958 873 788 703 618 533 448 363 278 193 108 23 -62 -147 -232 -317 -402
```
### Witness
```in
2
4 5
```

## Alone 2
Form: run
Write a program that reads n integers and uses one `__host__ __device__` function `scaled(x)`.
On the device, scaled returns x times the major version of the compute capability the device code is compiled for, read from __CUDA_ARCH__; on the host, it returns x.
Thread i of one block of n threads writes scaled of integer i, and the program prints what the threads wrote.
Input: the first line holds n; the second line holds the n integers.
Output: one line, the n results separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -10⁶ and 10⁶; the device code is compiled for compute capability 8.9.
### Examples
```in
2
0 0
```
```out
0 0
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__host__ __device__ int scaled(int x)
{
#ifdef __CUDA_ARCH__
    return x * (__CUDA_ARCH__ / 100);
#else
    return x;
#endif
}

__global__ void scale(cuda::std::span<int> v)
{
    v[threadIdx.x] = scaled(v[threadIdx.x]);
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    scale<<<1, n>>>({d, n});
    cudaMemcpy(h.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__host__ __device__ int scaled(int x)
{
#ifdef __CUDA_ARCH__
    return x * (__CUDA_ARCH__ / 10);
#else
    return x;
#endif
}

__global__ void scale(cuda::std::span<int> v)
{
    v[threadIdx.x] = scaled(v[threadIdx.x]);
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    scale<<<1, n>>>({d, n});
    cudaMemcpy(h.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000000
```
```in
3
1 -2 3
```
```in
1000
-1000 916 831 746 661 576 491 406 321 236 151 66 -19 -104 -189 -274 -359 -444 -529 -614 -699 -784 -869 -954 962 877 792 707 622 537 452 367 282 197 112 27 -58 -143 -228 -313 -398 -483 -568 -653 -738 -823 -908 -993 923 838 753 668 583 498 413 328 243 158 73 -12 -97 -182 -267 -352 -437 -522 -607 -692 -777 -862 -947 969 884 799 714 629 544 459 374 289 204 119 34 -51 -136 -221 -306 -391 -476 -561 -646 -731 -816 -901 -986 930 845 760 675 590 505 420 335 250 165 80 -5 -90 -175 -260 -345 -430 -515 -600 -685 -770 -855 -940 976 891 806 721 636 551 466 381 296 211 126 41 -44 -129 -214 -299 -384 -469 -554 -639 -724 -809 -894 -979 937 852 767 682 597 512 427 342 257 172 87 2 -83 -168 -253 -338 -423 -508 -593 -678 -763 -848 -933 983 898 813 728 643 558 473 388 303 218 133 48 -37 -122 -207 -292 -377 -462 -547 -632 -717 -802 -887 -972 944 859 774 689 604 519 434 349 264 179 94 9 -76 -161 -246 -331 -416 -501 -586 -671 -756 -841 -926 990 905 820 735 650 565 480 395 310 225 140 55 -30 -115 -200 -285 -370 -455 -540 -625 -710 -795 -880 -965 951 866 781 696 611 526 441 356 271 186 101 16 -69 -154 -239 -324 -409 -494 -579 -664 -749 -834 -919 997 912 827 742 657 572 487 402 317 232 147 62 -23 -108 -193 -278 -363 -448 -533 -618 -703 -788 -873 -958 958 873 788 703 618 533 448 363 278 193 108 23 -62 -147 -232 -317 -402 -487 -572 -657 -742 -827 -912 -997 919 834 749 664 579 494 409 324 239 154 69 -16 -101 -186 -271 -356 -441 -526 -611 -696 -781 -866 -951 965 880 795 710 625 540 455 370 285 200 115 30 -55 -140 -225 -310 -395 -480 -565 -650 -735 -820 -905 -990 926 841 756 671 586 501 416 331 246 161 76 -9 -94 -179 -264 -349 -434 -519 -604 -689 -774 -859 -944 972 887 802 717 632 547 462 377 292 207 122 37 -48 -133 -218 -303 -388 -473 -558 -643 -728 -813 -898 -983 933 848 763 678 593 508 423 338 253 168 83 -2 -87 -172 -257 -342 -427 -512 -597 -682 -767 -852 -937 979 894 809 724 639 554 469 384 299 214 129 44 -41 -126 -211 -296 -381 -466 -551 -636 -721 -806 -891 -976 940 855 770 685 600 515 430 345 260 175 90 5 -80 -165 -250 -335 -420 -505 -590 -675 -760 -845 -930 986 901 816 731 646 561 476 391 306 221 136 51 -34 -119 -204 -289 -374 -459 -544 -629 -714 -799 -884 -969 947 862 777 692 607 522 437 352 267 182 97 12 -73 -158 -243 -328 -413 -498 -583 -668 -753 -838 -923 993 908 823 738 653 568 483 398 313 228 143 58 -27 -112 -197 -282 -367 -452 -537 -622 -707 -792 -877 -962 954 869 784 699 614 529 444 359 274 189 104 19 -66 -151 -236 -321 -406 -491 -576 -661 -746 -831 -916 1000 915 830 745 660 575 490 405 320 235 150 65 -20 -105 -190 -275 -360 -445 -530 -615 -700 -785 -870 -955 961 876 791 706 621 536 451 366 281 196 111 26 -59 -144 -229 -314 -399 -484 -569 -654 -739 -824 -909 -994 922 837 752 667 582 497 412 327 242 157 72 -13 -98 -183 -268 -353 -438 -523 -608 -693 -778 -863 -948 968 883 798 713 628 543 458 373 288 203 118 33 -52 -137 -222 -307 -392 -477 -562 -647 -732 -817 -902 -987 929 844 759 674 589 504 419 334 249 164 79 -6 -91 -176 -261 -346 -431 -516 -601 -686 -771 -856 -941 975 890 805 720 635 550 465 380 295 210 125 40 -45 -130 -215 -300 -385 -470 -555 -640 -725 -810 -895 -980 936 851 766 681 596 511 426 341 256 171 86 1 -84 -169 -254 -339 -424 -509 -594 -679 -764 -849 -934 982 897 812 727 642 557 472 387 302 217 132 47 -38 -123 -208 -293 -378 -463 -548 -633 -718 -803 -888 -973 943 858 773 688 603 518 433 348 263 178 93 8 -77 -162 -247 -332 -417 -502 -587 -672 -757 -842 -927 989 904 819 734 649 564 479 394 309 224 139 54 -31 -116 -201 -286 -371 -456 -541 -626 -711 -796 -881 -966 950 865 780 695 610 525 440 355 270 185 100 15 -70 -155 -240 -325 -410 -495 -580 -665 -750 -835 -920 996 911 826 741 656 571 486 401 316 231 146 61 -24 -109 -194 -279 -364 -449 -534 -619 -704 -789 -874 -959 957 872 787 702 617 532 447 362 277 192 107 22 -63 -148 -233 -318 -403 -488 -573 -658 -743 -828 -913 -998 918 833 748 663 578 493 408 323 238 153 68 -17 -102 -187 -272 -357 -442 -527 -612 -697 -782 -867 -952 964 879 794 709 624 539 454 369 284 199 114 29 -56 -141 -226 -311 -396 -481 -566 -651 -736 -821 -906 -991 925 840 755 670 585 500 415 330 245 160 75 -10 -95 -180 -265 -350 -435 -520 -605 -690 -775 -860 -945 971 886 801 716 631 546 461 376 291 206 121 36 -49 -134 -219 -304 -389 -474 -559 -644 -729 -814 -899 -984 932 847 762 677 592 507 422 337 252 167 82 -3 -88 -173 -258 -343 -428 -513 -598 -683 -768 -853 -938 978 893 808 723 638 553 468 383 298 213 128
```
```in
4
1000000 0 -7 12
```
### Witness
```in
1
1
```
