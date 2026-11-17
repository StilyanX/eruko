export default [
  {
    "id": "t226-k1-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $a_{23}$, where $a_1 = -19$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} + 3n(n + 1)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "-151",
    "solution": [
      "Find $a_{23}$, where $a_1 = -19$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} + 3n(n + 1)$ for every whole number $n$ from $1$ up.",
      "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} + 3(n + 1)(n + 2)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} + 3(n + 1)(n + 2) - 3n(n + 1)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} + 6(n + 1)$",
      "$(n + 1)a_{n+1} = (n + 1)a_{n+2} + 6(n + 1)$",
      "$a_{n+1} = a_{n+2} + 6$",
      "$a_1 = a_2 + 6$",
      "The sequence is arithmetic with first term $-19$ and common difference $-6$.",
      "$a_{23} = -19 + (23 - 1) \\cdot (-6)$",
      "$a_{23} = -19 - 132$",
      "$a_{23} = -151$"
    ]
  },
  {
    "id": "t226-k1-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $a_6$, where $a_1 = 6$, $a_2 = 2$ and $a_{n+2} = a_{n+1}a_n - 4$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "1100",
    "solution": [
      "Find $a_6$, where $a_1 = 6$, $a_2 = 2$ and $a_{n+2} = a_{n+1}a_n - 4$ for every whole number $n$ from $1$ up.",
      "$a_3 = 2 \\cdot 6 - 4 = 8$",
      "$a_4 = 8 \\cdot 2 - 4 = 12$",
      "$a_5 = 12 \\cdot 8 - 4 = 92$",
      "$a_6 = 92 \\cdot 12 - 4 = 1100$"
    ]
  },
  {
    "id": "t226-k1-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a_9$, where $a_1 = 2$ and $a_{m+n} = a_ma_n + a_m + a_n$ for all whole numbers $m$ and $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "19682",
    "solution": [
      "Find $a_9$, where $a_1 = 2$ and $a_{m+n} = a_ma_n + a_m + a_n$ for all whole numbers $m$ and $n$ from $1$ up.",
      "$a_2 = 2 \\cdot 2 + 2 + 2 = 8$",
      "$a_4 = 8 \\cdot 8 + 8 + 8 = 80$",
      "$a_8 = 80 \\cdot 80 + 80 + 80 = 6560$",
      "$a_9 = 6560 \\cdot 2 + 6560 + 2 = 19{,}682$"
    ]
  },
  {
    "id": "t226-k1-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a_{10}$, where $a_1 = 6$ and $a_{m+n} = a_m + a_n + 5$ for all whole numbers $m$ and $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "105",
    "solution": [
      "Find $a_{10}$, where $a_1 = 6$ and $a_{m+n} = a_m + a_n + 5$ for all whole numbers $m$ and $n$ from $1$ up.",
      "$a_2 = 6 + 6 + 5 = 17$",
      "$a_4 = 17 + 17 + 5 = 39$",
      "$a_8 = 39 + 39 + 5 = 83$",
      "$a_{10} = 83 + 17 + 5 = 105$"
    ]
  },
  {
    "id": "t226-k1-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $a_{36}$, where $a_1 = 29$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} + 5n(n + 1)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "-321",
    "solution": [
      "Find $a_{36}$, where $a_1 = 29$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} + 5n(n + 1)$ for every whole number $n$ from $1$ up.",
      "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} + 5(n + 1)(n + 2)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} + 5(n + 1)(n + 2) - 5n(n + 1)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} + 10(n + 1)$",
      "$(n + 1)a_{n+1} = (n + 1)a_{n+2} + 10(n + 1)$",
      "$a_{n+1} = a_{n+2} + 10$",
      "$a_1 = a_2 + 10$",
      "The sequence is arithmetic with first term $29$ and common difference $-10$.",
      "$a_{36} = 29 + (36 - 1) \\cdot (-10)$",
      "$a_{36} = 29 - 350$",
      "$a_{36} = -321$"
    ]
  },
  {
    "id": "t226-k1-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a_9$, where $a_1 = 3$ and $a_{m+n} = a_m + a_n + 2mn$ for all whole numbers $m$ and $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "99",
    "solution": [
      "Find $a_9$, where $a_1 = 3$ and $a_{m+n} = a_m + a_n + 2mn$ for all whole numbers $m$ and $n$ from $1$ up.",
      "$a_2 = 3 + 3 + 2 \\cdot 1 \\cdot 1 = 8$",
      "$a_4 = 8 + 8 + 2 \\cdot 2 \\cdot 2 = 24$",
      "$a_8 = 24 + 24 + 2 \\cdot 4 \\cdot 4 = 80$",
      "$a_9 = 80 + 3 + 2 \\cdot 8 \\cdot 1 = 99$"
    ]
  },
  {
    "id": "t226-k1-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $a_6$, where $a_1 = 4$, $a_2 = -3$ and $a_{n+2} = na_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "-93",
    "solution": [
      "Find $a_6$, where $a_1 = 4$, $a_2 = -3$ and $a_{n+2} = na_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
      "$a_3 = 1 \\cdot (-3) - 4 = -7$",
      "$a_4 = 2 \\cdot (-7) - (-3) = -11$",
      "$a_5 = 3 \\cdot (-11) - (-7) = -26$",
      "$a_6 = 4 \\cdot (-26) - (-11) = -93$"
    ]
  },
  {
    "id": "t226-k1-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a_7$, where $a_1 = 3$ and $a_{m+n} = a_ma_n$ for all whole numbers $m$ and $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "2187",
    "solution": [
      "Find $a_7$, where $a_1 = 3$ and $a_{m+n} = a_ma_n$ for all whole numbers $m$ and $n$ from $1$ up.",
      "$a_2 = 3 \\cdot 3 = 9$",
      "$a_4 = 9 \\cdot 9 = 81$",
      "$a_6 = 81 \\cdot 9 = 729$",
      "$a_7 = 729 \\cdot 3 = 2187$"
    ]
  },
  {
    "id": "t226-k1-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $a_5$, where $a_1 = 2$ and $a_{n+1} = 3a_n - n^2$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "56",
    "solution": [
      "Find $a_5$, where $a_1 = 2$ and $a_{n+1} = 3a_n - n^2$ for every whole number $n$ from $1$ up.",
      "$a_2 = 3 \\cdot 2 - 1^2 = 5$",
      "$a_3 = 3 \\cdot 5 - 2^2 = 11$",
      "$a_4 = 3 \\cdot 11 - 3^2 = 24$",
      "$a_5 = 3 \\cdot 24 - 4^2 = 56$"
    ]
  },
  {
    "id": "t226-k1-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $a_6$, where $a_1 = 4$, $a_2 = -3$ and $a_{n+2} = a_{n+1}^2 - 2a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "2195",
    "solution": [
      "Find $a_6$, where $a_1 = 4$, $a_2 = -3$ and $a_{n+2} = a_{n+1}^2 - 2a_n$ for every whole number $n$ from $1$ up.",
      "$a_3 = (-3)^2 - 2 \\cdot 4 = 1$",
      "$a_4 = 1^2 - 2 \\cdot (-3) = 7$",
      "$a_5 = 7^2 - 2 \\cdot 1 = 47$",
      "$a_6 = 47^2 - 2 \\cdot 7 = 2195$"
    ]
  },
  {
    "id": "t226-k1-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $a_5$, where $a_1 = 3$ and $a_{n+1} = na_n + 9$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "441",
    "solution": [
      "Find $a_5$, where $a_1 = 3$ and $a_{n+1} = na_n + 9$ for every whole number $n$ from $1$ up.",
      "$a_2 = 1 \\cdot 3 + 9 = 12$",
      "$a_3 = 2 \\cdot 12 + 9 = 33$",
      "$a_4 = 3 \\cdot 33 + 9 = 108$",
      "$a_5 = 4 \\cdot 108 + 9 = 441$"
    ]
  },
  {
    "id": "t226-k1-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $a_{22}$, where $a_1 = 3$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 2n(n + 1)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "87",
    "solution": [
      "Find $a_{22}$, where $a_1 = 3$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 2n(n + 1)$ for every whole number $n$ from $1$ up.",
      "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 2(n + 1)(n + 2)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 2(n + 1)(n + 2) + 2n(n + 1)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 4(n + 1)$",
      "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 4(n + 1)$",
      "$a_{n+1} = a_{n+2} - 4$",
      "$a_1 = a_2 - 4$",
      "The sequence is arithmetic with first term $3$ and common difference $4$.",
      "$a_{22} = 3 + (22 - 1) \\cdot 4$",
      "$a_{22} = 3 + 84$",
      "$a_{22} = 87$"
    ]
  },
  {
    "id": "t226-k1-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find $a_7$, where $a_1 = 2$ and $a_{m+n} = 2a_ma_n$ for all whole numbers $m$ and $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "8192",
    "solution": [
      "Find $a_7$, where $a_1 = 2$ and $a_{m+n} = 2a_ma_n$ for all whole numbers $m$ and $n$ from $1$ up.",
      "$a_2 = 2 \\cdot 2 \\cdot 2 = 8$",
      "$a_4 = 2 \\cdot 8 \\cdot 8 = 128$",
      "$a_6 = 2 \\cdot 128 \\cdot 8 = 2048$",
      "$a_7 = 2 \\cdot 2048 \\cdot 2 = 8192$"
    ]
  },
  {
    "id": "t226-k1-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $a_{16}$, where $a_1 = -13$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 7n(n + 1)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "197",
    "solution": [
      "Find $a_{16}$, where $a_1 = -13$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 7n(n + 1)$ for every whole number $n$ from $1$ up.",
      "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 7(n + 1)(n + 2)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 7(n + 1)(n + 2) + 7n(n + 1)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 14(n + 1)$",
      "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 14(n + 1)$",
      "$a_{n+1} = a_{n+2} - 14$",
      "$a_1 = a_2 - 14$",
      "The sequence is arithmetic with first term $-13$ and common difference $14$.",
      "$a_{16} = -13 + (16 - 1) \\cdot 14$",
      "$a_{16} = -13 + 210$",
      "$a_{16} = 197$"
    ]
  },
  {
    "id": "t226-k1-p15",
    "topic": "recursive-sequences",
    "kind": "t226-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find $a_{14}$, where $a_1 = 12$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 8n(n + 1)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "220",
    "solution": [
      "Find $a_{14}$, where $a_1 = 12$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 8n(n + 1)$ for every whole number $n$ from $1$ up.",
      "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 8(n + 1)(n + 2)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 8(n + 1)(n + 2) + 8n(n + 1)$",
      "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 16(n + 1)$",
      "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 16(n + 1)$",
      "$a_{n+1} = a_{n+2} - 16$",
      "$a_1 = a_2 - 16$",
      "The sequence is arithmetic with first term $12$ and common difference $16$.",
      "$a_{14} = 12 + (14 - 1) \\cdot 16$",
      "$a_{14} = 12 + 208$",
      "$a_{14} = 220$"
    ]
  },
  {
    "id": "t226-k2-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-5a_n - 7}{a_n - 1}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-5a_n - 7}{a_n - 1}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{-5 \\cdot (-8) - 7}{-8 - 1} = -\\dfrac{11}{3}$",
      "$a_3 = \\dfrac{-5 \\cdot \\left(-\\dfrac{11}{3}\\right) - 7}{-\\dfrac{11}{3} - 1} = -\\dfrac{17}{7}$",
      "$a_4 = \\dfrac{-5 \\cdot \\left(-\\dfrac{17}{7}\\right) - 7}{-\\dfrac{17}{7} - 1} = -\\dfrac{3}{2}$",
      "$a_5 = \\dfrac{-5 \\cdot \\left(-\\dfrac{3}{2}\\right) - 7}{-\\dfrac{3}{2} - 1} = -\\dfrac{1}{5}$",
      "$a_6 = \\dfrac{-5 \\cdot \\left(-\\dfrac{1}{5}\\right) - 7}{-\\dfrac{1}{5} - 1} = 5$",
      "$a_7 = \\dfrac{-5 \\cdot 5 - 7}{5 - 1} = -8$",
      "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $6$."
    ]
  },
  {
    "id": "t226-k2-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 1$, $a_2 = 3$ and $a_{n+2} = -7 - a_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 1$, $a_2 = 3$ and $a_{n+2} = -7 - a_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
      "$a_3 = -7 - 3 - 1 = -11$",
      "$a_4 = -7 - (-11) - 3 = 1$",
      "$a_5 = -7 - 1 - (-11) = 3$",
      "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $3$."
    ]
  },
  {
    "id": "t226-k2-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 3$ and $a_{n+1} = \\dfrac{-a_n - 5}{a_n + 3}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 3$ and $a_{n+1} = \\dfrac{-a_n - 5}{a_n + 3}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{-3 - 5}{3 + 3} = -\\dfrac{4}{3}$",
      "$a_3 = \\dfrac{-\\left(-\\dfrac{4}{3}\\right) - 5}{-\\dfrac{4}{3} + 3} = -\\dfrac{11}{5}$",
      "$a_4 = \\dfrac{-\\left(-\\dfrac{11}{5}\\right) - 5}{-\\dfrac{11}{5} + 3} = -\\dfrac{7}{2}$",
      "$a_5 = \\dfrac{-\\left(-\\dfrac{7}{2}\\right) - 5}{-\\dfrac{7}{2} + 3} = 3$",
      "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $4$."
    ]
  },
  {
    "id": "t226-k2-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 7$ and $a_{n+1} = \\dfrac{2a_n - 3}{a_n - 1}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 7$ and $a_{n+1} = \\dfrac{2a_n - 3}{a_n - 1}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{2 \\cdot 7 - 3}{7 - 1} = \\dfrac{11}{6}$",
      "$a_3 = \\dfrac{2 \\cdot \\dfrac{11}{6} - 3}{\\dfrac{11}{6} - 1} = \\dfrac{4}{5}$",
      "$a_4 = \\dfrac{2 \\cdot \\dfrac{4}{5} - 3}{\\dfrac{4}{5} - 1} = 7$",
      "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $3$."
    ]
  },
  {
    "id": "t226-k2-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 6$, $a_2 = -6$ and $a_{n+2} = a_{n+1} - a_n - 9$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 6$, $a_2 = -6$ and $a_{n+2} = a_{n+1} - a_n - 9$ for every whole number $n$ from $1$ up.",
      "$a_3 = -6 - 6 - 9 = -21$",
      "$a_4 = -21 - (-6) - 9 = -24$",
      "$a_5 = -24 - (-21) - 9 = -12$",
      "$a_6 = -12 - (-24) - 9 = 3$",
      "$a_7 = 3 - (-12) - 9 = 6$",
      "$a_8 = 6 - 3 - 9 = -6$",
      "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $6$."
    ]
  },
  {
    "id": "t226-k2-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 6$ and $a_{n+2} = 3 - a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 6$ and $a_{n+2} = 3 - a_n$ for every whole number $n$ from $1$ up.",
      "$a_3 = 3 - 4 = -1$",
      "$a_4 = 3 - 6 = -3$",
      "$a_5 = 3 - (-1) = 4$",
      "$a_6 = 3 - (-3) = 6$",
      "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $4$."
    ]
  },
  {
    "id": "t226-k2-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -4$, $a_2 = 6$ and $a_{n+2} = \\dfrac{24}{a_{n+1}a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -4$, $a_2 = 6$ and $a_{n+2} = \\dfrac{24}{a_{n+1}a_n}$ for every whole number $n$ from $1$ up.",
      "$a_3 = \\dfrac{24}{6 \\cdot (-4)} = -1$",
      "$a_4 = \\dfrac{24}{-1 \\cdot 6} = -4$",
      "$a_5 = \\dfrac{24}{-4 \\cdot (-1)} = 6$",
      "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $3$."
    ]
  },
  {
    "id": "t226-k2-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -7$ and $a_{n+1} = \\dfrac{-2a_n - 5}{2a_n - 4}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -7$ and $a_{n+1} = \\dfrac{-2a_n - 5}{2a_n - 4}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{-2 \\cdot (-7) - 5}{2 \\cdot (-7) - 4} = -\\dfrac{1}{2}$",
      "$a_3 = \\dfrac{-2 \\cdot \\left(-\\dfrac{1}{2}\\right) - 5}{2 \\cdot \\left(-\\dfrac{1}{2}\\right) - 4} = \\dfrac{4}{5}$",
      "$a_4 = \\dfrac{-2 \\cdot \\dfrac{4}{5} - 5}{2 \\cdot \\dfrac{4}{5} - 4} = \\dfrac{11}{4}$",
      "$a_5 = \\dfrac{-2 \\cdot \\dfrac{11}{4} - 5}{2 \\cdot \\dfrac{11}{4} - 4} = -7$",
      "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $4$."
    ]
  },
  {
    "id": "t226-k2-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -5$, $a_2 = -6$ and $a_{n+2} = a_{n+1} - a_n + 8$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -5$, $a_2 = -6$ and $a_{n+2} = a_{n+1} - a_n + 8$ for every whole number $n$ from $1$ up.",
      "$a_3 = -6 - (-5) + 8 = 7$",
      "$a_4 = 7 - (-6) + 8 = 21$",
      "$a_5 = 21 - 7 + 8 = 22$",
      "$a_6 = 22 - 21 + 8 = 9$",
      "$a_7 = 9 - 22 + 8 = -5$",
      "$a_8 = -5 - 9 + 8 = -6$",
      "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $6$."
    ]
  },
  {
    "id": "t226-k2-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-3a_n - 9}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-3a_n - 9}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{-3 \\cdot (-8) - 9}{-8} = -\\dfrac{15}{8}$",
      "$a_3 = \\dfrac{-3 \\cdot \\left(-\\dfrac{15}{8}\\right) - 9}{-\\dfrac{15}{8}} = \\dfrac{9}{5}$",
      "$a_4 = \\dfrac{-3 \\cdot \\dfrac{9}{5} - 9}{\\dfrac{9}{5}} = -8$",
      "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $3$."
    ]
  },
  {
    "id": "t226-k2-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-3a_n - 3}{a_n - 3}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -8$ and $a_{n+1} = \\dfrac{-3a_n - 3}{a_n - 3}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{-3 \\cdot (-8) - 3}{-8 - 3} = -\\dfrac{21}{11}$",
      "$a_3 = \\dfrac{-3 \\cdot \\left(-\\dfrac{21}{11}\\right) - 3}{-\\dfrac{21}{11} - 3} = -\\dfrac{5}{9}$",
      "$a_4 = \\dfrac{-3 \\cdot \\left(-\\dfrac{5}{9}\\right) - 3}{-\\dfrac{5}{9} - 3} = \\dfrac{3}{8}$",
      "$a_5 = \\dfrac{-3 \\cdot \\dfrac{3}{8} - 3}{\\dfrac{3}{8} - 3} = \\dfrac{11}{7}$",
      "$a_6 = \\dfrac{-3 \\cdot \\dfrac{11}{7} - 3}{\\dfrac{11}{7} - 3} = \\dfrac{27}{5}$",
      "$a_7 = \\dfrac{-3 \\cdot \\dfrac{27}{5} - 3}{\\dfrac{27}{5} - 3} = -8$",
      "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $6$."
    ]
  },
  {
    "id": "t226-k2-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 3$ and $a_{n+2} = -7 - a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "4",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 3$ and $a_{n+2} = -7 - a_n$ for every whole number $n$ from $1$ up.",
      "$a_3 = -7 - 4 = -11$",
      "$a_4 = -7 - 3 = -10$",
      "$a_5 = -7 - (-11) = 4$",
      "$a_6 = -7 - (-10) = 3$",
      "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $4$."
    ]
  },
  {
    "id": "t226-k2-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 3$, $a_2 = -4$ and $a_{n+2} = a_{n+1} - a_n + 14$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 3$, $a_2 = -4$ and $a_{n+2} = a_{n+1} - a_n + 14$ for every whole number $n$ from $1$ up.",
      "$a_3 = -4 - 3 + 14 = 7$",
      "$a_4 = 7 - (-4) + 14 = 25$",
      "$a_5 = 25 - 7 + 14 = 32$",
      "$a_6 = 32 - 25 + 14 = 21$",
      "$a_7 = 21 - 32 + 14 = 3$",
      "$a_8 = 3 - 21 + 14 = -4$",
      "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $6$."
    ]
  },
  {
    "id": "t226-k2-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$ and $a_{n+1} = \\dfrac{5a_n - 13}{3a_n + 2}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$ and $a_{n+1} = \\dfrac{5a_n - 13}{3a_n + 2}$ for every whole number $n$ from $1$ up.",
      "$a_2 = \\dfrac{5 \\cdot 4 - 13}{3 \\cdot 4 + 2} = \\dfrac{1}{2}$",
      "$a_3 = \\dfrac{5 \\cdot \\dfrac{1}{2} - 13}{3 \\cdot \\dfrac{1}{2} + 2} = -3$",
      "$a_4 = \\dfrac{5 \\cdot (-3) - 13}{3 \\cdot (-3) + 2} = 4$",
      "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "The least such whole number is $3$."
    ]
  },
  {
    "id": "t226-k3-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 7$ and $a_{n+1} = a_n + \\dfrac{3}{2}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "3*n/2+11/2",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 7$ and $a_{n+1} = a_n + \\dfrac{3}{2}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} - a_n = \\dfrac{3}{2}$",
      "The sequence is arithmetic with first term $7$ and common difference $\\dfrac{3}{2}$.",
      "$a_n = 7 + (n - 1) \\cdot \\dfrac{3}{2}$",
      "$a_n = 7 + \\dfrac{3}{2}n - \\dfrac{3}{2}$",
      "$a_n = \\dfrac{3}{2}n + \\dfrac{11}{2}$"
    ]
  },
  {
    "id": "t226-k3-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 12$ and $a_{n+1} = 3a_n - 10$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "7*3^(n-1)+5",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 12$ and $a_{n+1} = 3a_n - 10$ for every whole number $n$ from $1$ up.",
      "$a_2 = 3 \\cdot 12 - 10 = 26$",
      "$a_3 = 3 \\cdot 26 - 10 = 68$",
      "$a_4 = 3 \\cdot 68 - 10 = 194$",
      "Taking $5$ from the terms $12$, $26$, $68$ and $194$ gives $7$, $21$, $63$ and $189$, each $3$ times the one before, so the guess is $a_n = 7 \\cdot 3^{n-1} + 5$.",
      "At $n = 1$ the guess gives $7 \\cdot 3^0 + 5 = 12$, which is $a_1$.",
      "Assume that $a_k = 7 \\cdot 3^{k-1} + 5$ for a whole number $k$ from $1$ up.",
      "$a_{k+1} = 3(7 \\cdot 3^{k-1} + 5) - 10$",
      "$a_{k+1} = 7 \\cdot 3^k + 15 - 10$",
      "$a_{k+1} = 7 \\cdot 3^k + 5$",
      "So $a_n = 7 \\cdot 3^{n-1} + 5$ for every whole number $n$ from $1$ up."
    ]
  },
  {
    "id": "t226-k3-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 15$ and $a_{n+1} = 3a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "15*3^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 15$ and $a_{n+1} = 3a_n$ for every whole number $n$ from $1$ up.",
      "The sequence is geometric with first term $15$ and common ratio $3$.",
      "$a_n = 15 \\cdot 3^{n-1}$"
    ]
  },
  {
    "id": "t226-k3-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 4$ and $a_{n+1} = 3a_n + 8$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "8*3^(n-1)-4",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 4$ and $a_{n+1} = 3a_n + 8$ for every whole number $n$ from $1$ up.",
      "$a_2 = 3 \\cdot 4 + 8 = 20$",
      "$a_3 = 3 \\cdot 20 + 8 = 68$",
      "$a_4 = 3 \\cdot 68 + 8 = 212$",
      "Adding $4$ to the terms $4$, $20$, $68$ and $212$ gives $8$, $24$, $72$ and $216$, each $3$ times the one before, so the guess is $a_n = 8 \\cdot 3^{n-1} - 4$.",
      "At $n = 1$ the guess gives $8 \\cdot 3^0 - 4 = 4$, which is $a_1$.",
      "Assume that $a_k = 8 \\cdot 3^{k-1} - 4$ for a whole number $k$ from $1$ up.",
      "$a_{k+1} = 3(8 \\cdot 3^{k-1} - 4) + 8$",
      "$a_{k+1} = 8 \\cdot 3^k - 12 + 8$",
      "$a_{k+1} = 8 \\cdot 3^k - 4$",
      "So $a_n = 8 \\cdot 3^{n-1} - 4$ for every whole number $n$ from $1$ up."
    ]
  },
  {
    "id": "t226-k3-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 14$ and $a_{n+1} = a_n + 11$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "11*n+3",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 14$ and $a_{n+1} = a_n + 11$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} - a_n = 11$",
      "The sequence is arithmetic with first term $14$ and common difference $11$.",
      "$a_n = 14 + (n - 1) \\cdot 11$",
      "$a_n = 14 + 11n - 11$",
      "$a_n = 11n + 3$"
    ]
  },
  {
    "id": "t226-k3-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -2$ and $a_{n+1} = 5a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-2*5^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -2$ and $a_{n+1} = 5a_n$ for every whole number $n$ from $1$ up.",
      "The sequence is geometric with first term $-2$ and common ratio $5$.",
      "$a_n = -2 \\cdot 5^{n-1}$"
    ]
  },
  {
    "id": "t226-k3-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = 4a_n - 9$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "3*4^(n-1)+3",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = 4a_n - 9$ for every whole number $n$ from $1$ up.",
      "$a_2 = 4 \\cdot 6 - 9 = 15$",
      "$a_3 = 4 \\cdot 15 - 9 = 51$",
      "$a_4 = 4 \\cdot 51 - 9 = 195$",
      "Taking $3$ from the terms $6$, $15$, $51$ and $195$ gives $3$, $12$, $48$ and $192$, each $4$ times the one before, so the guess is $a_n = 3 \\cdot 4^{n-1} + 3$.",
      "At $n = 1$ the guess gives $3 \\cdot 4^0 + 3 = 6$, which is $a_1$.",
      "Assume that $a_k = 3 \\cdot 4^{k-1} + 3$ for a whole number $k$ from $1$ up.",
      "$a_{k+1} = 4(3 \\cdot 4^{k-1} + 3) - 9$",
      "$a_{k+1} = 3 \\cdot 4^k + 12 - 9$",
      "$a_{k+1} = 3 \\cdot 4^k + 3$",
      "So $a_n = 3 \\cdot 4^{n-1} + 3$ for every whole number $n$ from $1$ up."
    ]
  },
  {
    "id": "t226-k3-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -6$ and $a_{n+1} = 11(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-66*12^(n-2)",
    "solution": [
      "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -6$ and $a_{n+1} = 11(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
      "$a_2 = 11 \\cdot (-6) = -66$",
      "$a_{n+2} = 11(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
      "$a_{n+2} - a_{n+1} = 11a_{n+1}$",
      "$a_{n+2} = 12a_{n+1}$",
      "The terms from $a_2$ on form a geometric sequence with first term $-66$ and common ratio $12$.",
      "$a_n = -66 \\cdot 12^{n-2}$"
    ]
  },
  {
    "id": "t226-k3-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 9$ and $a_{n+1} = 2a_n - 2$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "7*2^(n-1)+2",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 9$ and $a_{n+1} = 2a_n - 2$ for every whole number $n$ from $1$ up.",
      "$a_2 = 2 \\cdot 9 - 2 = 16$",
      "$a_3 = 2 \\cdot 16 - 2 = 30$",
      "$a_4 = 2 \\cdot 30 - 2 = 58$",
      "Taking $2$ from the terms $9$, $16$, $30$ and $58$ gives $7$, $14$, $28$ and $56$, each $2$ times the one before, so the guess is $a_n = 7 \\cdot 2^{n-1} + 2$.",
      "At $n = 1$ the guess gives $7 \\cdot 2^0 + 2 = 9$, which is $a_1$.",
      "Assume that $a_k = 7 \\cdot 2^{k-1} + 2$ for a whole number $k$ from $1$ up.",
      "$a_{k+1} = 2(7 \\cdot 2^{k-1} + 2) - 2$",
      "$a_{k+1} = 7 \\cdot 2^k + 4 - 2$",
      "$a_{k+1} = 7 \\cdot 2^k + 2$",
      "So $a_n = 7 \\cdot 2^{n-1} + 2$ for every whole number $n$ from $1$ up."
    ]
  },
  {
    "id": "t226-k3-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -2$ and $a_{n+1} = 7(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-14*8^(n-2)",
    "solution": [
      "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -2$ and $a_{n+1} = 7(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
      "$a_2 = 7 \\cdot (-2) = -14$",
      "$a_{n+2} = 7(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
      "$a_{n+2} - a_{n+1} = 7a_{n+1}$",
      "$a_{n+2} = 8a_{n+1}$",
      "The terms from $a_2$ on form a geometric sequence with first term $-14$ and common ratio $8$.",
      "$a_n = -14 \\cdot 8^{n-2}$"
    ]
  },
  {
    "id": "t226-k3-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -12$ and $a_{n+1} = a_n + 3$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "3*n-15",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -12$ and $a_{n+1} = a_n + 3$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} - a_n = 3$",
      "The sequence is arithmetic with first term $-12$ and common difference $3$.",
      "$a_n = -12 + (n - 1) \\cdot 3$",
      "$a_n = -12 + 3n - 3$",
      "$a_n = 3n - 15$"
    ]
  },
  {
    "id": "t226-k3-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 11$ and $a_{n+1} = 3(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "33*4^(n-2)",
    "solution": [
      "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 11$ and $a_{n+1} = 3(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
      "$a_2 = 3 \\cdot 11 = 33$",
      "$a_{n+2} = 3(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
      "$a_{n+2} - a_{n+1} = 3a_{n+1}$",
      "$a_{n+2} = 4a_{n+1}$",
      "The terms from $a_2$ on form a geometric sequence with first term $33$ and common ratio $4$.",
      "$a_n = 33 \\cdot 4^{n-2}$"
    ]
  },
  {
    "id": "t226-k3-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 15$ and $a_{n+1} = a_n - \\dfrac{5}{3}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-5*n/3+50/3",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 15$ and $a_{n+1} = a_n - \\dfrac{5}{3}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} - a_n = -\\dfrac{5}{3}$",
      "The sequence is arithmetic with first term $15$ and common difference $-\\dfrac{5}{3}$.",
      "$a_n = 15 + (n - 1) \\cdot \\left(-\\dfrac{5}{3}\\right)$",
      "$a_n = 15 - \\dfrac{5}{3}n + \\dfrac{5}{3}$",
      "$a_n = -\\dfrac{5}{3}n + \\dfrac{50}{3}$"
    ]
  },
  {
    "id": "t226-k3-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 9$ and $a_{n+1} = 2a_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "9*2^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 9$ and $a_{n+1} = 2a_n$ for every whole number $n$ from $1$ up.",
      "The sequence is geometric with first term $9$ and common ratio $2$.",
      "$a_n = 9 \\cdot 2^{n-1}$"
    ]
  },
  {
    "id": "t226-k3-p15",
    "topic": "recursive-sequences",
    "kind": "t226-k3",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 8$ and $a_{n+1} = 5(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "40*6^(n-2)",
    "solution": [
      "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 8$ and $a_{n+1} = 5(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
      "$a_2 = 5 \\cdot 8 = 40$",
      "$a_{n+2} = 5(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
      "$a_{n+2} - a_{n+1} = 5a_{n+1}$",
      "$a_{n+2} = 6a_{n+1}$",
      "The terms from $a_2$ on form a geometric sequence with first term $40$ and common ratio $6$.",
      "$a_n = 40 \\cdot 6^{n-2}$"
    ]
  },
  {
    "id": "t226-k4-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 8$, $b_1 = 4$, $a_{n+1} = 6a_n + 5b_n$ and $b_{n+1} = -5a_n - 4b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "60*n-52",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 8$, $b_1 = 4$, $a_{n+1} = 6a_n + 5b_n$ and $b_{n+1} = -5a_n - 4b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = 6a_n + 5b_n - 5a_n - 4b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 12$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n + 5(a_n + b_n)$",
      "$a_{n+1} = a_n + 60$",
      "The numbers $a_n$ form an arithmetic sequence with first term $8$ and common difference $60$.",
      "$a_n = 8 + (n - 1) \\cdot 60$",
      "$a_n = 8 + 60n - 60$",
      "$a_n = 60n - 52$"
    ]
  },
  {
    "id": "t226-k4-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -3$, $b_1 = -8$, $a_{n+1} = \\dfrac{a_n^2b_n}{3}$ and $b_{n+1} = \\dfrac{3}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-3*8^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -3$, $b_1 = -8$, $a_{n+1} = \\dfrac{a_n^2b_n}{3}$ and $b_{n+1} = \\dfrac{3}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{3} \\cdot \\dfrac{3}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 24$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{24a_n}{3}$",
      "$a_{n+1} = 8a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $-3$ and common ratio $8$.",
      "$a_n = -3 \\cdot 8^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -9$, $a_{n+1} = \\dfrac{a_n^2b_n}{12}$ and $b_{n+1} = \\dfrac{12}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-2*(3/2)^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -9$, $a_{n+1} = \\dfrac{a_n^2b_n}{12}$ and $b_{n+1} = \\dfrac{12}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{12} \\cdot \\dfrac{12}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 18$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{18a_n}{12}$",
      "$a_{n+1} = \\dfrac{3}{2}a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $-2$ and common ratio $\\dfrac{3}{2}$.",
      "$a_n = -2 \\cdot \\left(\\dfrac{3}{2}\\right)^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -8$, $a_{n+1} = \\dfrac{a_n^2b_n}{10}$ and $b_{n+1} = \\dfrac{10}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-2*(8/5)^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -8$, $a_{n+1} = \\dfrac{a_n^2b_n}{10}$ and $b_{n+1} = \\dfrac{10}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{10} \\cdot \\dfrac{10}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 16$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{16a_n}{10}$",
      "$a_{n+1} = \\dfrac{8}{5}a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $-2$ and common ratio $\\dfrac{8}{5}$.",
      "$a_n = -2 \\cdot \\left(\\dfrac{8}{5}\\right)^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 7$, $b_1 = -3$, $a_{n+1} = 4a_n + 3b_n$ and $b_{n+1} = -3a_n - 2b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "12*n-5",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 7$, $b_1 = -3$, $a_{n+1} = 4a_n + 3b_n$ and $b_{n+1} = -3a_n - 2b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = 4a_n + 3b_n - 3a_n - 2b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 4$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n + 3(a_n + b_n)$",
      "$a_{n+1} = a_n + 12$",
      "The numbers $a_n$ form an arithmetic sequence with first term $7$ and common difference $12$.",
      "$a_n = 7 + (n - 1) \\cdot 12$",
      "$a_n = 7 + 12n - 12$",
      "$a_n = 12n - 5$"
    ]
  },
  {
    "id": "t226-k4-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{2}$ and $b_{n+1} = \\dfrac{2}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "4*6^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{2}$ and $b_{n+1} = \\dfrac{2}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{2} \\cdot \\dfrac{2}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 12$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{12a_n}{2}$",
      "$a_{n+1} = 6a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $4$ and common ratio $6$.",
      "$a_n = 4 \\cdot 6^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 11$, $b_1 = -5$, $a_{n+1} = -3a_n - 4b_n$ and $b_{n+1} = 4a_n + 5b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-24*n+35",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 11$, $b_1 = -5$, $a_{n+1} = -3a_n - 4b_n$ and $b_{n+1} = 4a_n + 5b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = -3a_n - 4b_n + 4a_n + 5b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 6$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n - 4(a_n + b_n)$",
      "$a_{n+1} = a_n - 24$",
      "The numbers $a_n$ form an arithmetic sequence with first term $11$ and common difference $-24$.",
      "$a_n = 11 + (n - 1) \\cdot (-24)$",
      "$a_n = 11 - 24n + 24$",
      "$a_n = -24n + 35$"
    ]
  },
  {
    "id": "t226-k4-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 10$, $a_{n+1} = \\dfrac{a_n^2b_n}{5}$ and $b_{n+1} = \\dfrac{5}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "4*8^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 10$, $a_{n+1} = \\dfrac{a_n^2b_n}{5}$ and $b_{n+1} = \\dfrac{5}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{5} \\cdot \\dfrac{5}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 40$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{40a_n}{5}$",
      "$a_{n+1} = 8a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $4$ and common ratio $8$.",
      "$a_n = 4 \\cdot 8^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 8$, $b_1 = -3$, $a_{n+1} = -5a_n - 6b_n$ and $b_{n+1} = 6a_n + 7b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-30*n+38",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 8$, $b_1 = -3$, $a_{n+1} = -5a_n - 6b_n$ and $b_{n+1} = 6a_n + 7b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = -5a_n - 6b_n + 6a_n + 7b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 5$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n - 6(a_n + b_n)$",
      "$a_{n+1} = a_n - 30$",
      "The numbers $a_n$ form an arithmetic sequence with first term $8$ and common difference $-30$.",
      "$a_n = 8 + (n - 1) \\cdot (-30)$",
      "$a_n = 8 - 30n + 30$",
      "$a_n = -30n + 38$"
    ]
  },
  {
    "id": "t226-k4-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 7$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{15}$ and $b_{n+1} = \\dfrac{15}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "7*(7/5)^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 7$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{15}$ and $b_{n+1} = \\dfrac{15}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{15} \\cdot \\dfrac{15}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 21$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{21a_n}{15}$",
      "$a_{n+1} = \\dfrac{7}{5}a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $7$ and common ratio $\\dfrac{7}{5}$.",
      "$a_n = 7 \\cdot \\left(\\dfrac{7}{5}\\right)^{n-1}$"
    ]
  },
  {
    "id": "t226-k4-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -4$, $b_1 = 8$, $a_{n+1} = 9a_n + 8b_n$ and $b_{n+1} = -8a_n - 7b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "32*n-36",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -4$, $b_1 = 8$, $a_{n+1} = 9a_n + 8b_n$ and $b_{n+1} = -8a_n - 7b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = 9a_n + 8b_n - 8a_n - 7b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 4$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n + 8(a_n + b_n)$",
      "$a_{n+1} = a_n + 32$",
      "The numbers $a_n$ form an arithmetic sequence with first term $-4$ and common difference $32$.",
      "$a_n = -4 + (n - 1) \\cdot 32$",
      "$a_n = -4 + 32n - 32$",
      "$a_n = 32n - 36$"
    ]
  },
  {
    "id": "t226-k4-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = -4$, $b_1 = 10$, $a_{n+1} = -4a_n - 5b_n$ and $b_{n+1} = 5a_n + 6b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-30*n+26",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = -4$, $b_1 = 10$, $a_{n+1} = -4a_n - 5b_n$ and $b_{n+1} = 5a_n + 6b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = -4a_n - 5b_n + 5a_n + 6b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 6$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n - 5(a_n + b_n)$",
      "$a_{n+1} = a_n - 30$",
      "The numbers $a_n$ form an arithmetic sequence with first term $-4$ and common difference $-30$.",
      "$a_n = -4 + (n - 1) \\cdot (-30)$",
      "$a_n = -4 - 30n + 30$",
      "$a_n = -30n + 26$"
    ]
  },
  {
    "id": "t226-k4-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 9$, $b_1 = -6$, $a_{n+1} = -6a_n - 7b_n$ and $b_{n+1} = 7a_n + 8b_n$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "-21*n+30",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 9$, $b_1 = -6$, $a_{n+1} = -6a_n - 7b_n$ and $b_{n+1} = 7a_n + 8b_n$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} + b_{n+1} = -6a_n - 7b_n + 7a_n + 8b_n$",
      "$a_{n+1} + b_{n+1} = a_n + b_n$",
      "So $a_n + b_n = 3$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = a_n - 7(a_n + b_n)$",
      "$a_{n+1} = a_n - 21$",
      "The numbers $a_n$ form an arithmetic sequence with first term $9$ and common difference $-21$.",
      "$a_n = 9 + (n - 1) \\cdot (-21)$",
      "$a_n = 9 - 21n + 21$",
      "$a_n = -21n + 30$"
    ]
  },
  {
    "id": "t226-k4-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a closed form for $a_n$, where $a_1 = 6$, $b_1 = 6$, $a_{n+1} = \\dfrac{a_n^2b_n}{16}$ and $b_{n+1} = \\dfrac{16}{a_n}$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "6*(9/4)^(n-1)",
    "solution": [
      "Find a closed form for $a_n$, where $a_1 = 6$, $b_1 = 6$, $a_{n+1} = \\dfrac{a_n^2b_n}{16}$ and $b_{n+1} = \\dfrac{16}{a_n}$ for every whole number $n$ from $1$ up.",
      "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{16} \\cdot \\dfrac{16}{a_n}$",
      "$a_{n+1}b_{n+1} = a_nb_n$",
      "So $a_nb_n = 36$ for every whole number $n$ from $1$ up.",
      "$a_{n+1} = \\dfrac{36a_n}{16}$",
      "$a_{n+1} = \\dfrac{9}{4}a_n$",
      "The numbers $a_n$ form a geometric sequence with first term $6$ and common ratio $\\dfrac{9}{4}$.",
      "$a_n = 6 \\cdot \\left(\\dfrac{9}{4}\\right)^{n-1}$"
    ]
  },
  {
    "id": "t226-k5-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 3$ and $a_{n+1} = 5a_n + 12$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 3$.",
      "The term $a_2$ is $5 \\cdot 3 + 12 = 15 + 12 = 27$.",
      "The term $a_3$ is $5 \\cdot 27 = 135 + 12 = 147$.",
      "The term $a_4$ is $5 \\cdot 147 + 12 = 735 + 12 = 747$.",
      "Adding $3$ to the terms $3$, $27$, $147$ and $747$ gives $6$, $30$, $150$ and $750$, so the guess is $a_n = 6 \\cdot 5^{n-1} - 3$.",
      "At $n = 1$ the guess gives $6 \\cdot 5^0 - 3 = 3$, which is $a_1$.",
      "With $a_k = 6 \\cdot 5^{k-1} - 3$, the rule gives $a_{k+1} = 5(6 \\cdot 5^{k-1} - 3) + 12 = 6 \\cdot 5^k - 15 + 12 = 6 \\cdot 5^k - 3$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 6 \\cdot 5^{n-1} - 3$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 5*27+12 = 135+12 = 147",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 3$ and $a_{n+1} = 5a_n + 12$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 3 is right.",
      "Line 3 writes $5 \\cdot 27 = 135 + 12$.",
      "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $5 \\cdot 27 + 12 = 135 + 12 = 147$."
    ]
  },
  {
    "id": "t226-k5-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 25$ and $a_{n+1} = a_n - 9$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $25$.",
      "The common difference is $d = -9$.",
      "The $n$th term is $25 + (n - 1) \\cdot (-9)$.",
      "$25 + (n - 1) \\cdot (-9) = 25 - 9n - 9$",
      "$25 - 9n - 9 = -9n + 16$",
      "A closed form is $a_n = -9n + 16$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 25+(n-1)*(-9) = 25-9*n+9",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 25$ and $a_{n+1} = a_n - 9$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 4 is right.",
      "Line 4 writes $(n - 1) \\cdot (-9)$ as $-9n - 9$.",
      "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $25 + (n - 1) \\cdot (-9) = 25 - 9n + 9$."
    ]
  },
  {
    "id": "t226-k5-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 12$ and $a_{n+1} = 5a_n - 20$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 12$.",
      "The term $a_2$ is $5 \\cdot 12 - 20 = 60 - 20 = 40$.",
      "The term $a_3$ is $5 \\cdot 40 - 20 = 200 - 20 = 180$.",
      "The term $a_4$ is $5 \\cdot 180 - 20 = 900 - 20 = 880$.",
      "Taking $5$ from the terms $12$, $40$, $180$ and $880$ gives $7$, $35$, $175$ and $875$, so the guess is $a_n = 7 \\cdot 5^{n-1} + 5$.",
      "At $n = 1$ the guess gives $7 \\cdot 5^0 + 5 = 12$, which is $a_1$.",
      "With $a_k = 7 \\cdot 5^{k-1} + 5$, the rule gives $a_{k+1} = 5(7 \\cdot 5^{k-1} + 5) = 7 \\cdot 5^k + 25 - 20 = 7 \\cdot 5^k + 5$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 7 \\cdot 5^{n-1} + 5$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 7: 5*(7*5^(k-1)+5)-20 = 7*5^k+25-20 = 7*5^k+5",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 12$ and $a_{n+1} = 5a_n - 20$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 7 is right.",
      "Line 7 writes $5(7 \\cdot 5^{k-1} + 5) = 7 \\cdot 5^k + 25 - 20$.",
      "The later lines follow from line 7 as it is written, so line 7 is the first wrong line.",
      "Line 7 written right is $a_{k+1} = 5(7 \\cdot 5^{k-1} + 5) - 20 = 7 \\cdot 5^k + 25 - 20 = 7 \\cdot 5^k + 5$."
    ]
  },
  {
    "id": "t226-k5-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 5a_n + 4$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 2$.",
      "The term $a_2$ is $5 \\cdot 2 = 10 + 4 = 14$.",
      "The term $a_3$ is $5 \\cdot 14 + 4 = 70 + 4 = 74$.",
      "The term $a_4$ is $5 \\cdot 74 + 4 = 370 + 4 = 374$.",
      "Adding $1$ to the terms $2$, $14$, $74$ and $374$ gives $3$, $15$, $75$ and $375$, so the guess is $a_n = 3 \\cdot 5^{n-1} - 1$.",
      "At $n = 1$ the guess gives $3 \\cdot 5^0 - 1 = 2$, which is $a_1$.",
      "With $a_k = 3 \\cdot 5^{k-1} - 1$, the rule gives $a_{k+1} = 5(3 \\cdot 5^{k-1} - 1) + 4 = 3 \\cdot 5^k - 5 + 4 = 3 \\cdot 5^k - 1$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 3 \\cdot 5^{n-1} - 1$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 5*2+4 = 10+4 = 14",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 5a_n + 4$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 2 is right.",
      "Line 2 writes $5 \\cdot 2 = 10 + 4$.",
      "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $5 \\cdot 2 + 4 = 10 + 4 = 14$."
    ]
  },
  {
    "id": "t226-k5-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = a_n - 15$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $2$.",
      "The common difference is $d = -15$.",
      "The $n$th term is $2 + (n - 1) \\cdot (-15)$.",
      "$2 + (n - 1) \\cdot (-15) = 2 - 15n - 15$",
      "$2 - 15n - 15 = -15n - 13$",
      "A closed form is $a_n = -15n - 13$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 2+(n-1)*(-15) = 2-15*n+15",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = a_n - 15$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 4 is right.",
      "Line 4 writes $(n - 1) \\cdot (-15)$ as $-15n - 15$.",
      "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $2 + (n - 1) \\cdot (-15) = 2 - 15n + 15$."
    ]
  },
  {
    "id": "t226-k5-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 19$ and $a_{n+1} = a_n - 10$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $19$.",
      "The common difference is $d = -10$.",
      "The $n$th term is $19 + (n - 1) \\cdot (-10)$.",
      "$19 + (n - 1) \\cdot (-10) = 19 - 10n - 10$",
      "$19 - 10n - 10 = -10n + 9$",
      "A closed form is $a_n = -10n + 9$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 19+(n-1)*(-10) = 19-10*n+10",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 19$ and $a_{n+1} = a_n - 10$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 4 is right.",
      "Line 4 writes $(n - 1) \\cdot (-10)$ as $-10n - 10$.",
      "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $19 + (n - 1) \\cdot (-10) = 19 - 10n + 10$."
    ]
  },
  {
    "id": "t226-k5-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = 5a_n - 8$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 10$.",
      "The term $a_2$ is $5 \\cdot 10 - 8 = 50 - 8 = 42$.",
      "The term $a_3$ is $5 \\cdot 42 = 210 - 8 = 202$.",
      "The term $a_4$ is $5 \\cdot 202 - 8 = 1010 - 8 = 1002$.",
      "Taking $2$ from the terms $10$, $42$, $202$ and $1002$ gives $8$, $40$, $200$ and $1000$, so the guess is $a_n = 8 \\cdot 5^{n-1} + 2$.",
      "At $n = 1$ the guess gives $8 \\cdot 5^0 + 2 = 10$, which is $a_1$.",
      "With $a_k = 8 \\cdot 5^{k-1} + 2$, the rule gives $a_{k+1} = 5(8 \\cdot 5^{k-1} + 2) - 8 = 8 \\cdot 5^k + 10 - 8 = 8 \\cdot 5^k + 2$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 8 \\cdot 5^{n-1} + 2$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 5*42-8 = 210-8 = 202",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = 5a_n - 8$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 3 is right.",
      "Line 3 writes $5 \\cdot 42 = 210 - 8$.",
      "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $5 \\cdot 42 - 8 = 210 - 8 = 202$."
    ]
  },
  {
    "id": "t226-k5-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 3a_n - 2$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 8$.",
      "The term $a_2$ is $3 \\cdot 8 - 2 = 24 - 2 = 22$.",
      "The term $a_3$ is $3 \\cdot 22 = 66 - 2 = 64$.",
      "The term $a_4$ is $3 \\cdot 64 - 2 = 192 - 2 = 190$.",
      "Taking $1$ from the terms $8$, $22$, $64$ and $190$ gives $7$, $21$, $63$ and $189$, so the guess is $a_n = 7 \\cdot 3^{n-1} + 1$.",
      "At $n = 1$ the guess gives $7 \\cdot 3^0 + 1 = 8$, which is $a_1$.",
      "With $a_k = 7 \\cdot 3^{k-1} + 1$, the rule gives $a_{k+1} = 3(7 \\cdot 3^{k-1} + 1) - 2 = 7 \\cdot 3^k + 3 - 2 = 7 \\cdot 3^k + 1$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 7 \\cdot 3^{n-1} + 1$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 3*22-2 = 66-2 = 64",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 3a_n - 2$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 3 is right.",
      "Line 3 writes $3 \\cdot 22 = 66 - 2$.",
      "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $3 \\cdot 22 - 2 = 66 - 2 = 64$."
    ]
  },
  {
    "id": "t226-k5-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -3$ and $a_{n+1} = a_n - 4$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $-3$.",
      "The common difference is $d = -4$.",
      "The $n$th term is $-3 + (n - 1) \\cdot (-4)$.",
      "$-3 + (n - 1) \\cdot (-4) = -3 - 4n + 4$",
      "$-3 - 4n + 4 = 4n + 1$",
      "A closed form is $a_n = 4n + 1$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -3-4*n+4 = -4*n+1",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -3$ and $a_{n+1} = a_n - 4$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 5 is right.",
      "Line 5 writes the term $-4n$ as $4n$.",
      "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-3 - 4n + 4 = -4n + 1$."
    ]
  },
  {
    "id": "t226-k5-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 4$ and $a_{n+1} = a_n - 12$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $4$.",
      "The common difference is $d = 12$.",
      "The $n$th term is $4 + (n - 1) \\cdot 12$.",
      "$4 + (n - 1) \\cdot 12 = 4 + 12n - 12$",
      "$4 + 12n - 12 = 12n - 8$",
      "A closed form is $a_n = 12n - 8$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: d = -12",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 4$ and $a_{n+1} = a_n - 12$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 2 is right.",
      "Line 2 gives the common difference as $12$.",
      "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $d = -12$."
    ]
  },
  {
    "id": "t226-k5-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -9$ and $a_{n+1} = a_n - 14$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $-9$.",
      "The common difference is $d = 14$.",
      "The $n$th term is $-9 + (n - 1) \\cdot 14$.",
      "$-9 + (n - 1) \\cdot 14 = -9 + 14n - 14$",
      "$-9 + 14n - 14 = 14n - 23$",
      "A closed form is $a_n = 14n - 23$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: d = -14",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -9$ and $a_{n+1} = a_n - 14$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 2 is right.",
      "Line 2 gives the common difference as $14$.",
      "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $d = -14$."
    ]
  },
  {
    "id": "t226-k5-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 3a_n + 6$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 2$.",
      "The term $a_2$ is $3 \\cdot 2 + 6 = 6 + 6 = 12$.",
      "The term $a_3$ is $3 \\cdot 12 + 6 = 36 + 6 = 42$.",
      "The term $a_4$ is $3 \\cdot 42 + 6 = 126 + 6 = 132$.",
      "Adding $3$ to the terms $2$, $12$, $42$ and $132$ gives $5$, $15$, $45$ and $135$, so the guess is $a_n = 5 \\cdot 3^{n-1} - 3$.",
      "At $n = 1$ the guess gives $5 \\cdot 3^0 - 3 = 2$, which is $a_1$.",
      "With $a_k = 5 \\cdot 3^{k-1} - 3$, the rule gives $a_{k+1} = 3(5 \\cdot 3^{k-1} - 3) = 5 \\cdot 3^k - 9 + 6 = 5 \\cdot 3^k - 3$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 5 \\cdot 3^{n-1} - 3$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 7: 3*(5*3^(k-1)-3)+6 = 5*3^k-9+6 = 5*3^k-3",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 3a_n + 6$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 7 is right.",
      "Line 7 writes $3(5 \\cdot 3^{k-1} - 3) = 5 \\cdot 3^k - 9 + 6$.",
      "The later lines follow from line 7 as it is written, so line 7 is the first wrong line.",
      "Line 7 written right is $a_{k+1} = 3(5 \\cdot 3^{k-1} - 3) + 6 = 5 \\cdot 3^k - 9 + 6 = 5 \\cdot 3^k - 3$."
    ]
  },
  {
    "id": "t226-k5-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 2a_n - 6$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The rule gives each term from the one before it, starting from $a_1 = 11$.",
      "The term $a_2$ is $2 \\cdot 11 - 6 = 22 - 6 = 16$.",
      "The term $a_3$ is $2 \\cdot 16 - 6 = 32 - 6 = 26$.",
      "The term $a_4$ is $2 \\cdot 26 - 6 = 52 - 6 = 46$.",
      "Taking $6$ from the terms $11$, $16$, $26$ and $46$ gives $5$, $10$, $20$ and $40$, so the guess is $a_n = 5 \\cdot 2^{n-1} + 6$.",
      "At $n = 1$ the guess gives $5 \\cdot 2^0 + 6 = 11$, which is $a_1$.",
      "With $a_k = 5 \\cdot 2^{k-1} + 6$, the rule gives $a_{k+1} = 2(5 \\cdot 2^{k-1} + 6) = 5 \\cdot 2^k + 12 - 6 = 5 \\cdot 2^k + 6$.",
      "So the guess holds at $k + 1$ whenever it holds at $k$.",
      "So $a_n = 5 \\cdot 2^{n-1} + 6$ for every whole number $n$ from $1$ up."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 7: 2*(5*2^(k-1)+6)-6 = 5*2^k+12-6 = 5*2^k+6",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 2a_n - 6$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 7 is right.",
      "Line 7 writes $2(5 \\cdot 2^{k-1} + 6) = 5 \\cdot 2^k + 12 - 6$.",
      "The later lines follow from line 7 as it is written, so line 7 is the first wrong line.",
      "Line 7 written right is $a_{k+1} = 2(5 \\cdot 2^{k-1} + 6) - 6 = 5 \\cdot 2^k + 12 - 6 = 5 \\cdot 2^k + 6$."
    ]
  },
  {
    "id": "t226-k5-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -14$ and $a_{n+1} = a_n - 11$ for every whole number $n$ from $1$ up, and write that line right.",
    "given": [
      "The sequence is arithmetic with first term $-14$.",
      "The common difference is $d = 11$.",
      "The $n$th term is $-14 + (n - 1) \\cdot 11$.",
      "$-14 + (n - 1) \\cdot 11 = -14 + 11n - 11$",
      "$-14 + 11n - 11 = 11n - 25$",
      "A closed form is $a_n = 11n - 25$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: d = -11",
    "solution": [
      "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -14$ and $a_{n+1} = a_n - 11$ for every whole number $n$ from $1$ up, and write that line right.",
      "Every line before line 2 is right.",
      "Line 2 gives the common difference as $11$.",
      "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is $d = -11$."
    ]
  },
  {
    "id": "t226-k6-p01",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the square of the term before it minus $8$ times the term two places before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = y^2-8*x",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the square of the term before it minus $8$ times the term two places before it.",
      "The square of the term before is $y^2$.",
      "The term two places before taken $8$ times is $8x$.",
      "$z = y^2 - 8x$"
    ]
  },
  {
    "id": "t226-k6-p02",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the product of the two terms before it, plus $8$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x*y+8",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the product of the two terms before it, plus $8$.",
      "The product of the two terms before is $xy$.",
      "Plus $8$, it is $xy + 8$.",
      "$z = xy + 8$"
    ]
  },
  {
    "id": "t226-k6-p03",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $11$ more than $3$ times the term before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 3*x+11",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $11$ more than $3$ times the term before it.",
      "The term before taken $3$ times is $3x$.",
      "Adding $11$ to that gives $3x + 11$.",
      "$y = 3x + 11$"
    ]
  },
  {
    "id": "t226-k6-p04",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the sum of the two terms before it, divided by $7$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = (x+y)/7",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the sum of the two terms before it, divided by $7$.",
      "The sum of the two terms before is $x + y$.",
      "Divided by $7$, it is $\\dfrac{x + y}{7}$.",
      "$z = \\dfrac{x + y}{7}$"
    ]
  },
  {
    "id": "t226-k6-p05",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $6$ times the sum of the term before it and $5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 6*(x+5)",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $6$ times the sum of the term before it and $5$.",
      "The sum of the term before and $5$ is $x + 5$.",
      "That sum taken $6$ times is $6(x + 5)$.",
      "$y = 6(x + 5)$"
    ]
  },
  {
    "id": "t226-k6-p06",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $9$ less than the square of the term before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = x^2-9",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $9$ less than the square of the term before it.",
      "The square of the term before is $x^2$.",
      "Taking $9$ from that gives $x^2 - 9$.",
      "$y = x^2 - 9$"
    ]
  },
  {
    "id": "t226-k6-p07",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $9$ less than $7$ times the term before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 7*x-9",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $9$ less than $7$ times the term before it.",
      "The term before taken $7$ times is $7x$.",
      "Taking $9$ from that gives $7x - 9$.",
      "$y = 7x - 9$"
    ]
  },
  {
    "id": "t226-k6-p08",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the square of the term before it minus $6$ times the term two places before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = y^2-6*x",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the square of the term before it minus $6$ times the term two places before it.",
      "The square of the term before is $y^2$.",
      "The term two places before taken $6$ times is $6x$.",
      "$z = y^2 - 6x$"
    ]
  },
  {
    "id": "t226-k6-p09",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $3$ times the term before it minus $11$ times the term two places before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 3*y-11*x",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $3$ times the term before it minus $11$ times the term two places before it.",
      "The term before taken $3$ times is $3y$.",
      "The term two places before taken $11$ times is $11x$.",
      "$z = 3y - 11x$"
    ]
  },
  {
    "id": "t226-k6-p10",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is the term before it divided by $2$, with $5$ then added.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = x/2+5",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is the term before it divided by $2$, with $5$ then added.",
      "The term before divided by $2$ is $\\dfrac{x}{2}$.",
      "With $5$ then added it is $\\dfrac{x}{2} + 5$.",
      "$y = \\dfrac{x}{2} + 5$"
    ]
  },
  {
    "id": "t226-k6-p11",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $7$ less than $2$ times the term before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*x-7",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $7$ less than $2$ times the term before it.",
      "The term before taken $2$ times is $2x$.",
      "Taking $7$ from that gives $2x - 7$.",
      "$y = 2x - 7$"
    ]
  },
  {
    "id": "t226-k6-p12",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $7$ times the term before it plus $6$ times the term two places before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 7*y+6*x",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $7$ times the term before it plus $6$ times the term two places before it.",
      "The term before taken $7$ times is $7y$.",
      "The term two places before taken $6$ times is $6x$.",
      "$z = 7y + 6x$"
    ]
  },
  {
    "id": "t226-k6-p13",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $2$ times the sum of the term before it and $12$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*(x+12)",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $2$ times the sum of the term before it and $12$.",
      "The sum of the term before and $12$ is $x + 12$.",
      "That sum taken $2$ times is $2(x + 12)$.",
      "$y = 2(x + 12)$"
    ]
  },
  {
    "id": "t226-k6-p14",
    "topic": "recursive-sequences",
    "kind": "t226-k6",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $3$ times the term before it plus $9$ times the term two places before it.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 3*y+9*x",
    "solution": [
      "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $3$ times the term before it plus $9$ times the term two places before it.",
      "The term before taken $3$ times is $3y$.",
      "The term two places before taken $9$ times is $9x$.",
      "$z = 3y + 9x$"
    ]
  }
]
