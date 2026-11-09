# 6.07 Acquire and release
Part: acquire and release
Clause: [atomics.order], [intro.races]
After: 6.06
Levels: c++11

## Example
```cpp
#include <array>
#include <atomic>
#include <print>
#include <thread>

int main()
{
    //: Keep the numbers plain and the flag atomic.
    std::array<int, 3> part {0, 0, 0};
    std::atomic<bool> ready {false};
    //: Fill the numbers, then raise the flag with release.
    std::thread maker {[&] {
        part = {4, 5, 6};
        ready.store(true, std::memory_order_release);
    }};
    //: Wait for the flag with acquire; the numbers are then seen.
    while (!ready.load(std::memory_order_acquire)) {
    }
    std::println("{}", part[0] + part[1] + part[2]);
    maker.join();
}
```

## Verdict 1
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    std::atomic<int> x {0};
    std::atomic<int> y {0};
    int r1 {0};
    int r2 {0};
    std::thread a {[&] {
        x.store(1, std::memory_order_release);
        r1 = y.load(std::memory_order_acquire);
    }};
    std::thread b {[&] {
        y.store(1, std::memory_order_release);
        r2 = x.load(std::memory_order_acquire);
    }};
    a.join();
    b.join();
    std::cout << r1 << ' ' << r2 << '\n';
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
0 0
```
```out
0 1
```
```out
1 0
```
```out
1 1
```

## Verdict 2
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    int data {0};
    std::atomic<bool> first {false};
    std::atomic<bool> second {false};
    std::thread a {[&] {
        data = 42;
        first.store(true, std::memory_order_release);
    }};
    std::thread b {[&] {
        while (!first.load(std::memory_order_acquire)) {
        }
        second.store(true, std::memory_order_release);
    }};
    while (!second.load(std::memory_order_acquire)) {
    }
    std::cout << data << '\n';
    a.join();
    b.join();
}
```
Answer: c++11..c++23 defined
Flags: -pthread
Sanitizer: thread

## Alone 1
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store release
- 2: load acquire
- 3: store release
- 4: load acquire
Write a program that reads a and b. A first thread stores a and raises a first flag. A second thread waits for the first flag, stores b, and raises a second flag. Main waits for the second flag and prints a + b.
Input: one line, a and b.
Output: one line, a + b.
Limits: −1000 ≤ a ≤ 1000; −1000 ≤ b ≤ 1000.
### Examples
```in
3 4
```
```out
7
```
### Reference
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    int got_a {0};
    int got_b {0};
    std::atomic<bool> first {false};
    std::atomic<bool> second {false};
    std::thread one {[&] {
        got_a = a;
        first.store(true, ORDER_1);
    }};
    std::thread two {[&] {
        while (!first.load(ORDER_2)) {
        }
        got_b = b;
        second.store(true, ORDER_3);
    }};
    while (!second.load(ORDER_4)) {
    }
    std::cout << got_a + got_b << '\n';
    one.join();
    two.join();
}
```
### Wrong
Orders:
- 1: store release
- 2: load relaxed
- 3: store release
- 4: load acquire
### Tests
```in
0 0
```
```in
-1000 -1000
```
```in
1000 -1
```
### Witness
```in
5 6
```

## Alone 2
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: rmw acquire
- 2: store release
Write a program that reads n and then n numbers and prints their sum. Two threads add into one shared sum: one adds the first n / 2 numbers, the other the rest. A lock made of one atomic bool keeps their adds apart.
Input: one line, n, then n numbers.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 1000; −1000 ≤ each number ≤ 1000.
### Examples
```in
2 1 2
```
```out
3
```
### Reference
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void add(std::atomic<bool>& locked, long long& sum,
         const std::vector<int>& v, int from, int to)
{
    for (int i {from}; i < to; ++i) {
        while (locked.exchange(true, ORDER_1)) {
        }
        sum += v[i];
        locked.store(false, ORDER_2);
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    std::atomic<bool> locked {false};
    long long sum {0};
    std::thread a {add, std::ref(locked), std::ref(sum),
                   std::cref(v), 0, n / 2};
    std::thread b {add, std::ref(locked), std::ref(sum),
                   std::cref(v), n / 2, n};
    a.join();
    b.join();
    std::cout << sum << '\n';
}
```
### Wrong
Orders:
- 1: rmw acquire
- 2: store relaxed
### Tests
```in
1 -1000
```
```in
3 1000 1000 1000
```
```in
1000 -963 -926 -889 -852 -815 -778 -741 -704 -667 -630 -593 -556 -519 -482 -445 -408 -371 -334 -297 -260 -223 -186 -149 -112 -75 -38 -1 36 73 110 147 184 221 258 295 332 369 406 443 480 517 554 591 628 665 702 739 776 813 850 887 924 961 998 -966 -929 -892 -855 -818 -781 -744 -707 -670 -633 -596 -559 -522 -485 -448 -411 -374 -337 -300 -263 -226 -189 -152 -115 -78 -41 -4 33 70 107 144 181 218 255 292 329 366 403 440 477 514 551 588 625 662 699 736 773 810 847 884 921 958 995 -969 -932 -895 -858 -821 -784 -747 -710 -673 -636 -599 -562 -525 -488 -451 -414 -377 -340 -303 -266 -229 -192 -155 -118 -81 -44 -7 30 67 104 141 178 215 252 289 326 363 400 437 474 511 548 585 622 659 696 733 770 807 844 881 918 955 992 -972 -935 -898 -861 -824 -787 -750 -713 -676 -639 -602 -565 -528 -491 -454 -417 -380 -343 -306 -269 -232 -195 -158 -121 -84 -47 -10 27 64 101 138 175 212 249 286 323 360 397 434 471 508 545 582 619 656 693 730 767 804 841 878 915 952 989 -975 -938 -901 -864 -827 -790 -753 -716 -679 -642 -605 -568 -531 -494 -457 -420 -383 -346 -309 -272 -235 -198 -161 -124 -87 -50 -13 24 61 98 135 172 209 246 283 320 357 394 431 468 505 542 579 616 653 690 727 764 801 838 875 912 949 986 -978 -941 -904 -867 -830 -793 -756 -719 -682 -645 -608 -571 -534 -497 -460 -423 -386 -349 -312 -275 -238 -201 -164 -127 -90 -53 -16 21 58 95 132 169 206 243 280 317 354 391 428 465 502 539 576 613 650 687 724 761 798 835 872 909 946 983 -981 -944 -907 -870 -833 -796 -759 -722 -685 -648 -611 -574 -537 -500 -463 -426 -389 -352 -315 -278 -241 -204 -167 -130 -93 -56 -19 18 55 92 129 166 203 240 277 314 351 388 425 462 499 536 573 610 647 684 721 758 795 832 869 906 943 980 -984 -947 -910 -873 -836 -799 -762 -725 -688 -651 -614 -577 -540 -503 -466 -429 -392 -355 -318 -281 -244 -207 -170 -133 -96 -59 -22 15 52 89 126 163 200 237 274 311 348 385 422 459 496 533 570 607 644 681 718 755 792 829 866 903 940 977 -987 -950 -913 -876 -839 -802 -765 -728 -691 -654 -617 -580 -543 -506 -469 -432 -395 -358 -321 -284 -247 -210 -173 -136 -99 -62 -25 12 49 86 123 160 197 234 271 308 345 382 419 456 493 530 567 604 641 678 715 752 789 826 863 900 937 974 -990 -953 -916 -879 -842 -805 -768 -731 -694 -657 -620 -583 -546 -509 -472 -435 -398 -361 -324 -287 -250 -213 -176 -139 -102 -65 -28 9 46 83 120 157 194 231 268 305 342 379 416 453 490 527 564 601 638 675 712 749 786 823 860 897 934 971 -993 -956 -919 -882 -845 -808 -771 -734 -697 -660 -623 -586 -549 -512 -475 -438 -401 -364 -327 -290 -253 -216 -179 -142 -105 -68 -31 6 43 80 117 154 191 228 265 302 339 376 413 450 487 524 561 598 635 672 709 746 783 820 857 894 931 968 -996 -959 -922 -885 -848 -811 -774 -737 -700 -663 -626 -589 -552 -515 -478 -441 -404 -367 -330 -293 -256 -219 -182 -145 -108 -71 -34 3 40 77 114 151 188 225 262 299 336 373 410 447 484 521 558 595 632 669 706 743 780 817 854 891 928 965 -999 -962 -925 -888 -851 -814 -777 -740 -703 -666 -629 -592 -555 -518 -481 -444 -407 -370 -333 -296 -259 -222 -185 -148 -111 -74 -37 0 37 74 111 148 185 222 259 296 333 370 407 444 481 518 555 592 629 666 703 740 777 814 851 888 925 962 999 -965 -928 -891 -854 -817 -780 -743 -706 -669 -632 -595 -558 -521 -484 -447 -410 -373 -336 -299 -262 -225 -188 -151 -114 -77 -40 -3 34 71 108 145 182 219 256 293 330 367 404 441 478 515 552 589 626 663 700 737 774 811 848 885 922 959 996 -968 -931 -894 -857 -820 -783 -746 -709 -672 -635 -598 -561 -524 -487 -450 -413 -376 -339 -302 -265 -228 -191 -154 -117 -80 -43 -6 31 68 105 142 179 216 253 290 327 364 401 438 475 512 549 586 623 660 697 734 771 808 845 882 919 956 993 -971 -934 -897 -860 -823 -786 -749 -712 -675 -638 -601 -564 -527 -490 -453 -416 -379 -342 -305 -268 -231 -194 -157 -120 -83 -46 -9 28 65 102 139 176 213 250 287 324 361 398 435 472 509 546 583 620 657 694 731 768 805 842 879 916 953 990 -974 -937 -900 -863 -826 -789 -752 -715 -678 -641 -604 -567 -530 -493 -456 -419 -382 -345 -308 -271 -234 -197 -160 -123 -86 -49 -12 25 62 99 136 173 210 247 284 321 358 395 432 469 506 543 580 617 654 691 728 765 802 839 876 913 950 987 -977 -940 -903 -866 -829 -792 -755 -718 -681 -644 -607 -570 -533 -496 -459 -422 -385 -348 -311 -274 -237 -200 -163 -126 -89 -52 -15 22 59 96 133 170 207 244 281 318 355 392 429 466 503 540 577 614 651 688 725 762 799 836 873 910 947 984 -980 -943 -906 -869 -832 -795 -758 -721 -684 -647 -610 -573 -536 -499 -462 -425 -388 -351 -314 -277 -240 -203 -166 -129 -92 -55 -18
```
### Witness
```in
6 1 2 3 4 5 6
```
