export default {
  "number": 208,
  "title": "Sigma and product notation",
  "section": 18,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "313-331"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate the sum of the values of $2k^2 + 7$ at $k = 4$, $k = 5$, $k = 6$ and $k = 7$.",
    "form": "Answer as an integer.",
    "answer": "280",
    "solution": [
      "Evaluate the sum of the values of $2k^2 + 7$ at $k = 4$, $k = 5$, $k = 6$ and $k = 7$.",
      "The sum is $(2 \\cdot 4^2 + 7) + (2 \\cdot 5^2 + 7) + (2 \\cdot 6^2 + 7) + (2 \\cdot 7^2 + 7)$.",
      "$(2 \\cdot 4^2 + 7) + (2 \\cdot 5^2 + 7) + (2 \\cdot 6^2 + 7) + (2 \\cdot 7^2 + 7) = 39 + 57 + 79 + 105$",
      "$39 + 57 + 79 + 105 = 280$"
    ]
  },
  "ideas": [
    {
      "name": "Sigma notation",
      "concrete": "The sum $(3^2 + 1) + (4^2 + 1) + (5^2 + 1) + (6^2 + 1)$ has four terms of one pattern: each is $k^2 + 1$ for a whole number $k$, and $k$ takes the values $3$, $4$, $5$ and $6$. The sum is written $\\sum_{k=3}^{6} (k^2 + 1)$, and its value is $10 + 17 + 26 + 37 = 90$.",
      "general": "For integers $m$ and $n$ with $m \\le n$, and a number $a_k$ for each integer $k$ from $m$ to $n$, the sum $a_m + a_{m+1} + \\dots + a_n$ is written with the capital Greek letter sigma as $\\sum_{k=m}^{n} a_k$. This writing is **sigma notation**. The letter $k$ is the **index**, the number $m$ under the sign is the **lower limit**, the number $n$ over the sign is the **upper limit**, and $a_k$ is the term. The index takes each integer from $m$ to $n$, so the sum has $n - m + 1$ terms, and its value is the same whatever letter the index is. With the sign $\\infty$ as the upper limit, $\\sum_{k=m}^{\\infty} a_k$ stands for the infinite series $a_m + a_{m+1} + a_{m+2} + \\dots$, and for its sum where it has one."
    },
    {
      "name": "Product notation",
      "concrete": "The product $(3 \\cdot 2 - 1)(3 \\cdot 3 - 1)(3 \\cdot 4 - 1)$ has three factors of one pattern: each is $3k - 1$, and $k$ takes the values $2$, $3$ and $4$. The product is written $\\prod_{k=2}^{4} (3k - 1)$, and its value is $5 \\cdot 8 \\cdot 11 = 440$.",
      "general": "For integers $m$ and $n$ with $m \\le n$, and a number $a_k$ for each integer $k$ from $m$ to $n$, the product $a_m \\cdot a_{m+1} \\cdots a_n$ is written with the capital Greek letter pi as $\\prod_{k=m}^{n} a_k$. This writing is **product notation**. The index and the two limits are read as in sigma notation, and the product has $n - m + 1$ factors."
    },
    {
      "name": "Sums split and constants come out",
      "concrete": "Written out, $\\sum_{k=1}^{4} (3k + 5)$ is $(3 \\cdot 1 + 5) + (3 \\cdot 2 + 5) + (3 \\cdot 3 + 5) + (3 \\cdot 4 + 5)$. With the multiples of $3$ put together and the four terms $5$ put together, it is $3(1 + 2 + 3 + 4) + 5 \\cdot 4$, which is $3\\sum_{k=1}^{4} k + 5 \\cdot 4 = 30 + 20 = 50$.",
      "general": "For a whole number $n$ from $1$ up, numbers $a_k$ and $b_k$ for each whole number $k$ from $1$ to $n$, and a number $c$ with no $k$ in it: $\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$, $\\sum_{k=1}^{n} ca_k = c\\sum_{k=1}^{n} a_k$ and $\\sum_{k=1}^{n} c = cn$. This is **Sums split and constants come out**. Between limits $m$ and $n$ with $m \\le n$ the same holds, and the constant $c$ is then summed $n - m + 1$ times. The first two equations also hold for two infinite series that each have a sum, because a limit passes through sums, products and quotients."
    },
    {
      "name": "Shifting the index",
      "concrete": "The sums $\\sum_{k=6}^{9} (4k - 5)$ and $\\sum_{k=1}^{4} (4(k + 5) - 5)$ both stand for $19 + 23 + 27 + 31$: the two limits went down by $5$, and the term took $k + 5$ in place of $k$.",
      "general": "For integers $m$ and $n$ with $m \\le n$, an integer $c$, and a number $a_k$ for each integer $k$ from $m$ to $n$, $\\sum_{k=m}^{n} a_k = \\sum_{k=m+c}^{n+c} a_{k-c}$. This is **Shifting the index**: when both limits go up by $c$, the term takes $k - c$ in place of $k$, and when both go down by $c$ it takes $k + c$. The terms and their order stay as they were. In an infinite series only the lower limit moves. A product is shifted in the same way."
    },
    {
      "name": "Term from the sum",
      "concrete": "Suppose that the first $n$ terms of a sequence add up to $n^2 + 6n$ for every whole number $n$ from $1$ up. The first five terms add up to $55$ and the first four to $40$, so the fifth term is $55 - 40 = 15$.",
      "general": "For a sequence with terms $a_k$ and every whole number $n$ from $2$ up, $a_n = \\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n-1} a_k$, and $a_1 = \\sum_{k=1}^{1} a_k$. This is **Term from the sum**. So a formula for the sum of the first $n$ terms gives the $n$th term for $n$ from $2$ up. The case $n = 1$ is checked apart, because the second sum needs $n - 1$ to be $1$ or more."
    },
    {
      "name": "Double sum",
      "concrete": "In $\\sum_{j=1}^{2}\\sum_{k=1}^{3} (j + 2k)$ the sum over $k$ is worked out for each $j$ in turn. For $j = 1$ it is $3 + 5 + 7 = 15$, and for $j = 2$ it is $4 + 6 + 8 = 18$. The sum over $j$ adds the two results: $15 + 18 = 33$.",
      "general": "For whole numbers $m$ and $n$ from $1$ up, and a number $a_{jk}$ for each pair of whole numbers $j$ from $1$ to $m$ and $k$ from $1$ to $n$, the **double sum** $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_{jk}$ stands for $\\sum_{j=1}^{m}\\left(\\sum_{k=1}^{n} a_{jk}\\right)$. The sum over $k$ is the **inner sum** and $k$ the inner index; the sum over $j$ is the **outer sum** and $j$ the outer index. The inner sum is worked out first, with the outer index held fixed, and the outer sum adds its values. The limits of the inner sum may hold the outer index, as in $\\sum_{j=1}^{n}\\sum_{k=1}^{j} a_{jk}$; the limits of the outer sum never hold the inner index. With the sign $\\infty$ as an upper limit, the inner sum is an infinite series that has a sum for each value of the outer index, and the outer sum is the infinite series of those sums."
    },
    {
      "name": "Product of two sums",
      "concrete": "Written out, $\\sum_{j=2}^{3}\\sum_{k=1}^{2} jk^2$ is $(2 \\cdot 1^2 + 2 \\cdot 2^2) + (3 \\cdot 1^2 + 3 \\cdot 2^2)$, which is $2(1^2 + 2^2) + 3(1^2 + 2^2) = (2 + 3)(1^2 + 2^2)$. So the double sum is $\\left(\\sum_{j=2}^{3} j\\right)\\left(\\sum_{k=1}^{2} k^2\\right) = 5 \\cdot 5 = 25$.",
      "general": "For whole numbers $m$ and $n$ from $1$ up, numbers $a_j$ for each whole number $j$ from $1$ to $m$ and numbers $b_k$ for each whole number $k$ from $1$ to $n$, $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_jb_k = \\left(\\sum_{j=1}^{m} a_j\\right)\\left(\\sum_{k=1}^{n} b_k\\right)$. This is **Product of two sums**. It needs a term that is a factor with no $k$ in it times a factor with no $j$ in it, and limits of each sum with no index of the other in them. It also holds for two infinite series that each have a sum, because a fixed number comes out of an infinite series that has a sum (a limit passes through sums, products and quotients): first $a_j$ out of the inner series, then the inner sum out of the outer one."
    },
    {
      "name": "Swapping the order",
      "concrete": "The double sum $\\sum_{j=1}^{2}\\sum_{k=1}^{3} (j + 2k)$ adds the six numbers $3$, $5$, $7$, $4$, $6$ and $8$. Taken for each $k$ in turn they give $3 + 4 = 7$, $5 + 6 = 11$ and $7 + 8 = 15$, so $\\sum_{k=1}^{3}\\sum_{j=1}^{2} (j + 2k)$ is $7 + 11 + 15 = 33$, the value the first order gives.",
      "general": "For whole numbers $m$ and $n$ from $1$ up, and a number $a_{jk}$ for each pair of whole numbers $j$ from $1$ to $m$ and $k$ from $1$ to $n$, $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{m} a_{jk}$. This is **Swapping the order**. Where the inner limits hold the outer index, the limits change with the order: for numbers $a_{jk}$ with $1 \\le j \\le k \\le n$, $\\sum_{j=1}^{n}\\sum_{k=j}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{k} a_{jk}$, as both sides add $a_{jk}$ once for each such pair."
    }
  ],
  "kinds": [
    {
      "id": "t208-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=2}^{6} (k^2 + 6)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=2}^{6} (k^2 + 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=2}^{6} (k^2 + 6) = (2^2 + 6) + (3^2 + 6) + (4^2 + 6) + (5^2 + 6) + (6^2 + 6)$",
                "reason": "Sigma notation: the index $k$ takes each whole number from $2$ to $6$, and the term is written once for each, with that number in place of $k$."
              },
              {
                "step": "$(2^2 + 6) + (3^2 + 6) + (4^2 + 6) + (5^2 + 6) + (6^2 + 6) = 10 + 15 + 22 + 31 + 42$",
                "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
              },
              {
                "step": "$10 + 15 + 22 + 31 + 42 = 120$",
                "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{5} (3^k + 5k)$.",
              "form": "Answer as an integer.",
              "answer": "438",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{5} (3^k + 5k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{5} (3^k + 5k) = (3^1 + 5 \\cdot 1) + (3^2 + 5 \\cdot 2) + (3^3 + 5 \\cdot 3) + (3^4 + 5 \\cdot 4) + (3^5 + 5 \\cdot 5)$",
                  "reason": "Sigma notation: the index $k$ takes each whole number from $1$ to $5$, and the term is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(3^1 + 5 \\cdot 1) + (3^2 + 5 \\cdot 2) + (3^3 + 5 \\cdot 3) + (3^4 + 5 \\cdot 4) + (3^5 + 5 \\cdot 5) = 8 + 19 + 42 + 101 + 268$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$8 + 19 + 42 + 101 + 268 = 438$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=3}^{6} (k^3 - 5k)$.",
              "form": "Answer as an integer.",
              "answer": "342",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=3}^{6} (k^3 - 5k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=3}^{6} (k^3 - 5k) = (3^3 - 5 \\cdot 3) + (4^3 - 5 \\cdot 4) + (5^3 - 5 \\cdot 5) + (6^3 - 5 \\cdot 6)$",
                  "reason": "Sigma notation: the index $k$ takes each whole number from $3$ to $6$, and the term is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(3^3 - 5 \\cdot 3) + (4^3 - 5 \\cdot 4) + (5^3 - 5 \\cdot 5) + (6^3 - 5 \\cdot 6) = 12 + 44 + 100 + 186$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$12 + 44 + 100 + 186 = 342$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=2}^{5} (4k^2 + 6)$.",
              "form": "Answer as an integer.",
              "answer": "240",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=2}^{5} (4k^2 + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=2}^{5} (4k^2 + 6) = (4 \\cdot 2^2 + 6) + (4 \\cdot 3^2 + 6) + (4 \\cdot 4^2 + 6) + (4 \\cdot 5^2 + 6)$",
                  "reason": "Sigma notation: the index $k$ takes each whole number from $2$ to $5$, and the term is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(4 \\cdot 2^2 + 6) + (4 \\cdot 3^2 + 6) + (4 \\cdot 4^2 + 6) + (4 \\cdot 5^2 + 6) = 22 + 42 + 70 + 106$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$22 + 42 + 70 + 106 = 240$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\prod_{k=3}^{5} (4k + 4)$.",
            "lines": [
              {
                "step": "Evaluate $\\prod_{k=3}^{5} (4k + 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\prod_{k=3}^{5} (4k + 4) = (4 \\cdot 3 + 4)(4 \\cdot 4 + 4)(4 \\cdot 5 + 4)$",
                "reason": "Product notation: the index $k$ takes each whole number from $3$ to $5$, and the factor is written once for each, with that number in place of $k$."
              },
              {
                "step": "$(4 \\cdot 3 + 4)(4 \\cdot 4 + 4)(4 \\cdot 5 + 4) = 16 \\cdot 20 \\cdot 24$",
                "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
              },
              {
                "step": "$16 \\cdot 20 \\cdot 24 = 7680$",
                "reason": "Order of operations, from arithmetic: the products run from left to right, each with the sign of its factors."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\prod_{k=2}^{4} (k^2 + 8)$.",
              "form": "Answer as an integer.",
              "answer": "4896",
              "lines": [
                {
                  "step": "Evaluate $\\prod_{k=2}^{4} (k^2 + 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\prod_{k=2}^{4} (k^2 + 8) = (2^2 + 8)(3^2 + 8)(4^2 + 8)$",
                  "reason": "Product notation: the index $k$ takes each whole number from $2$ to $4$, and the factor is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(2^2 + 8)(3^2 + 8)(4^2 + 8) = 12 \\cdot 17 \\cdot 24$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$12 \\cdot 17 \\cdot 24 = 4896$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right, each with the sign of its factors."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\prod_{k=2}^{4} (3k + 5)$.",
              "form": "Answer as an integer.",
              "answer": "2618",
              "lines": [
                {
                  "step": "Evaluate $\\prod_{k=2}^{4} (3k + 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\prod_{k=2}^{4} (3k + 5) = (3 \\cdot 2 + 5)(3 \\cdot 3 + 5)(3 \\cdot 4 + 5)$",
                  "reason": "Product notation: the index $k$ takes each whole number from $2$ to $4$, and the factor is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(3 \\cdot 2 + 5)(3 \\cdot 3 + 5)(3 \\cdot 4 + 5) = 11 \\cdot 14 \\cdot 17$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$11 \\cdot 14 \\cdot 17 = 2618$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right, each with the sign of its factors."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\prod_{k=1}^{3} (4k + 2)$.",
              "form": "Answer as an integer.",
              "answer": "840",
              "lines": [
                {
                  "step": "Evaluate $\\prod_{k=1}^{3} (4k + 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\prod_{k=1}^{3} (4k + 2) = (4 \\cdot 1 + 2)(4 \\cdot 2 + 2)(4 \\cdot 3 + 2)$",
                  "reason": "Product notation: the index $k$ takes each whole number from $1$ to $3$, and the factor is written once for each, with that number in place of $k$."
                },
                {
                  "step": "$(4 \\cdot 1 + 2)(4 \\cdot 2 + 2)(4 \\cdot 3 + 2) = 6 \\cdot 10 \\cdot 14$",
                  "reason": "Order of operations, from arithmetic: each bracket is worked out alone, powers first, then products."
                },
                {
                  "step": "$6 \\cdot 10 \\cdot 14 = 840$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right, each with the sign of its factors."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the upper limit $n$ when the arithmetic series $-32 - 24 - 16 + \\dots + 192$ is written in sigma notation with the index $k$ starting at $1$.",
            "lines": [
              {
                "step": "Find the upper limit $n$ when the arithmetic series $-32 - 24 - 16 + \\dots + 192$ is written in sigma notation with the index $k$ starting at $1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms form an arithmetic sequence with first term $-32$ and common difference $8$.",
                "reason": "Common difference: each term is the term before it plus $8$, as $(-24) - (-32) = 8$."
              },
              {
                "step": "The $k$th term is $-32 + 8(k - 1) = 8k - 40$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The series is $\\sum_{k=1}^{n} (8k - 40)$, with $8n - 40 = 192$.",
                "reason": "Sigma notation: the last term of the series is the term at the upper limit."
              },
              {
                "step": "$8n = 232$",
                "reason": "Adding the same number to both sides: $40$ is added to both sides."
              },
              {
                "step": "$n = 29$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the upper limit $n$ when the arithmetic series $16 + 7 - 2 + \\dots - 353$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "42",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the arithmetic series $16 + 7 - 2 + \\dots - 353$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form an arithmetic sequence with first term $16$ and common difference $-9$.",
                  "reason": "Common difference: each term is the term before it plus $(-9)$, as $7 - 16 = -9$."
                },
                {
                  "step": "The $k$th term is $16 - 9(k - 1) = 25 - 9k$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} (25 - 9k)$, with $25 - 9n = -353$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$-9n = -378$",
                  "reason": "Adding the same number to both sides: $-25$ is added to both sides."
                },
                {
                  "step": "$n = 42$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-9$."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the arithmetic series $11 + 16 + 21 + \\dots + 146$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the arithmetic series $11 + 16 + 21 + \\dots + 146$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form an arithmetic sequence with first term $11$ and common difference $5$.",
                  "reason": "Common difference: each term is the term before it plus $5$, as $16 - 11 = 5$."
                },
                {
                  "step": "The $k$th term is $11 + 5(k - 1) = 5k + 6$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} (5k + 6)$, with $5n + 6 = 146$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$5n = 140$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                },
                {
                  "step": "$n = 28$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the arithmetic series $-12 - 8 - 4 + \\dots + 112$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the arithmetic series $-12 - 8 - 4 + \\dots + 112$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form an arithmetic sequence with first term $-12$ and common difference $4$.",
                  "reason": "Common difference: each term is the term before it plus $4$, as $(-8) - (-12) = 4$."
                },
                {
                  "step": "The $k$th term is $-12 + 4(k - 1) = 4k - 16$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} (4k - 16)$, with $4n - 16 = 112$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$4n = 128$",
                  "reason": "Adding the same number to both sides: $16$ is added to both sides."
                },
                {
                  "step": "$n = 32$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the upper limit $n$ when the geometric series $5 + 15 + 45 + \\dots + 405$ is written in sigma notation with the index $k$ starting at $1$.",
            "lines": [
              {
                "step": "Find the upper limit $n$ when the geometric series $5 + 15 + 45 + \\dots + 405$ is written in sigma notation with the index $k$ starting at $1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The terms form a geometric sequence with first term $5$ and common ratio $3$.",
                "reason": "Common ratio: each term is the term before it times $3$, as $\\dfrac{15}{5} = 3$."
              },
              {
                "step": "The $k$th term is $5 \\cdot 3^{k-1}$.",
                "reason": "The $n$th term $ar^{n-1}$, with $k$ in place of $n$."
              },
              {
                "step": "The series is $\\sum_{k=1}^{n} 5 \\cdot 3^{k-1}$, with $5 \\cdot 3^{n-1} = 405$.",
                "reason": "Sigma notation: the last term of the series is the term at the upper limit."
              },
              {
                "step": "$3^{n-1} = 81$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$3^{n-1} = 3^{4}$",
                "reason": "The definition of a power, from arithmetic: $3^{4} = 81$."
              },
              {
                "step": "$n - 1 = 4$",
                "reason": "Equal powers of one base have equal exponents: the base $3$ is above $0$ and is not $1$."
              },
              {
                "step": "$n = 5$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the upper limit $n$ when the geometric series $6 + 24 + 96 + \\dots + 6144$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the geometric series $6 + 24 + 96 + \\dots + 6144$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form a geometric sequence with first term $6$ and common ratio $4$.",
                  "reason": "Common ratio: each term is the term before it times $4$, as $\\dfrac{24}{6} = 4$."
                },
                {
                  "step": "The $k$th term is $6 \\cdot 4^{k-1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} 6 \\cdot 4^{k-1}$, with $6 \\cdot 4^{n-1} = 6144$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$4^{n-1} = 1024$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$4^{n-1} = 4^{5}$",
                  "reason": "The definition of a power, from arithmetic: $4^{5} = 1024$."
                },
                {
                  "step": "$n - 1 = 5$",
                  "reason": "Equal powers of one base have equal exponents: the base $4$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the geometric series $8 + 24 + 72 + \\dots + 17{,}496$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the geometric series $8 + 24 + 72 + \\dots + 17{,}496$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form a geometric sequence with first term $8$ and common ratio $3$.",
                  "reason": "Common ratio: each term is the term before it times $3$, as $\\dfrac{24}{8} = 3$."
                },
                {
                  "step": "The $k$th term is $8 \\cdot 3^{k-1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} 8 \\cdot 3^{k-1}$, with $8 \\cdot 3^{n-1} = 17{,}496$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$3^{n-1} = 2187$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "$3^{n-1} = 3^{7}$",
                  "reason": "The definition of a power, from arithmetic: $3^{7} = 2187$."
                },
                {
                  "step": "$n - 1 = 7$",
                  "reason": "Equal powers of one base have equal exponents: the base $3$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 8$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the geometric series $11 + 22 + 44 + \\dots + 352$ is written in sigma notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the geometric series $11 + 22 + 44 + \\dots + 352$ is written in sigma notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The terms form a geometric sequence with first term $11$ and common ratio $2$.",
                  "reason": "Common ratio: each term is the term before it times $2$, as $\\dfrac{22}{11} = 2$."
                },
                {
                  "step": "The $k$th term is $11 \\cdot 2^{k-1}$.",
                  "reason": "The $n$th term $ar^{n-1}$, with $k$ in place of $n$."
                },
                {
                  "step": "The series is $\\sum_{k=1}^{n} 11 \\cdot 2^{k-1}$, with $11 \\cdot 2^{n-1} = 352$.",
                  "reason": "Sigma notation: the last term of the series is the term at the upper limit."
                },
                {
                  "step": "$2^{n-1} = 32$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $11$."
                },
                {
                  "step": "$2^{n-1} = 2^{5}$",
                  "reason": "The definition of a power, from arithmetic: $2^{5} = 32$."
                },
                {
                  "step": "$n - 1 = 5$",
                  "reason": "Equal powers of one base have equal exponents: the base $2$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the upper limit $n$ when the product $\\dfrac{2}{9} \\cdot \\dfrac{8}{13} \\cdot \\dfrac{14}{17} \\cdots \\dfrac{50}{41}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
            "lines": [
              {
                "step": "Find the upper limit $n$ when the product $\\dfrac{2}{9} \\cdot \\dfrac{8}{13} \\cdot \\dfrac{14}{17} \\cdots \\dfrac{50}{41}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The $k$th top is $2 + 6(k - 1) = 6k - 4$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The $k$th bottom is $9 + 4(k - 1) = 4k + 5$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The product is $\\prod_{k=1}^{n} \\dfrac{6k - 4}{4k + 5}$, with $6n - 4 = 50$.",
                "reason": "Product notation: the last factor of the product is the factor at the upper limit, so its top is the top at $k = n$."
              },
              {
                "step": "$6n = 54$",
                "reason": "Adding the same number to both sides: $4$ is added to both sides."
              },
              {
                "step": "$n = 9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the upper limit $n$ when the product $\\dfrac{5}{2} \\cdot \\dfrac{9}{7} \\cdot \\dfrac{13}{12} \\cdots \\dfrac{61}{72}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the product $\\dfrac{5}{2} \\cdot \\dfrac{9}{7} \\cdot \\dfrac{13}{12} \\cdots \\dfrac{61}{72}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th top is $5 + 4(k - 1) = 4k + 1$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th bottom is $2 + 5(k - 1) = 5k - 3$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The product is $\\prod_{k=1}^{n} \\dfrac{4k + 1}{5k - 3}$, with $4n + 1 = 61$.",
                  "reason": "Product notation: the last factor of the product is the factor at the upper limit, so its top is the top at $k = n$."
                },
                {
                  "step": "$4n = 60$",
                  "reason": "Adding the same number to both sides: $-1$ is added to both sides."
                },
                {
                  "step": "$n = 15$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the product $\\dfrac{5}{11} \\cdot \\dfrac{11}{15} \\cdot \\dfrac{17}{19} \\cdots \\dfrac{173}{123}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the product $\\dfrac{5}{11} \\cdot \\dfrac{11}{15} \\cdot \\dfrac{17}{19} \\cdots \\dfrac{173}{123}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th top is $5 + 6(k - 1) = 6k - 1$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th bottom is $11 + 4(k - 1) = 4k + 7$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The product is $\\prod_{k=1}^{n} \\dfrac{6k - 1}{4k + 7}$, with $6n - 1 = 173$.",
                  "reason": "Product notation: the last factor of the product is the factor at the upper limit, so its top is the top at $k = n$."
                },
                {
                  "step": "$6n = 174$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "$n = 29$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                }
              ]
            },
            {
              "prompt": "Find the upper limit $n$ when the product $\\dfrac{10}{11} \\cdot \\dfrac{14}{17} \\cdot \\dfrac{18}{23} \\cdots \\dfrac{106}{155}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
              "form": "Answer as an integer.",
              "answer": "25",
              "lines": [
                {
                  "step": "Find the upper limit $n$ when the product $\\dfrac{10}{11} \\cdot \\dfrac{14}{17} \\cdot \\dfrac{18}{23} \\cdots \\dfrac{106}{155}$, whose tops and whose bottoms each form an arithmetic sequence, is written in product notation with the index $k$ starting at $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The $k$th top is $10 + 4(k - 1) = 4k + 6$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th bottom is $11 + 6(k - 1) = 6k + 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The product is $\\prod_{k=1}^{n} \\dfrac{4k + 6}{6k + 5}$, with $4n + 6 = 106$.",
                  "reason": "Product notation: the last factor of the product is the factor at the upper limit, so its top is the top at $k = n$."
                },
                {
                  "step": "$4n = 100$",
                  "reason": "Adding the same number to both sides: $-6$ is added to both sides."
                },
                {
                  "step": "$n = 25$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k3",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=1}^{20} (7a_k - 8b_k - 9)$, given that $\\sum_{k=1}^{20} a_k = -4$ and $\\sum_{k=1}^{20} b_k = 4$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=1}^{20} (7a_k - 8b_k - 9)$, given that $\\sum_{k=1}^{20} a_k = -4$ and $\\sum_{k=1}^{20} b_k = 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=1}^{20} (7a_k - 8b_k - 9) = 7\\sum_{k=1}^{20} a_k - 8\\sum_{k=1}^{20} b_k - 9 \\cdot 20$",
                "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant $-9$ is summed $20$ times."
              },
              {
                "step": "The sum is $7 \\cdot (-4) - 8 \\cdot 4 - 9 \\cdot 20$.",
                "reason": "Substituting a value: each given value goes in place of its sum."
              },
              {
                "step": "$7 \\cdot (-4) - 8 \\cdot 4 - 9 \\cdot 20 = -28 - 32 - 180$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$-28 - 32 - 180 = -240$",
                "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{12} (-5a_k + 3b_k + 2)$, given that $\\sum_{k=1}^{12} a_k = 7$ and $\\sum_{k=1}^{12} b_k = -3$.",
              "form": "Answer as an integer.",
              "answer": "-20",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{12} (-5a_k + 3b_k + 2)$, given that $\\sum_{k=1}^{12} a_k = 7$ and $\\sum_{k=1}^{12} b_k = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{12} (-5a_k + 3b_k + 2) = -5\\sum_{k=1}^{12} a_k + 3\\sum_{k=1}^{12} b_k + 2 \\cdot 12$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant $2$ is summed $12$ times."
                },
                {
                  "step": "The sum is $-5 \\cdot 7 + 3 \\cdot (-3) + 2 \\cdot 12$.",
                  "reason": "Substituting a value: each given value goes in place of its sum."
                },
                {
                  "step": "$-5 \\cdot 7 + 3 \\cdot (-3) + 2 \\cdot 12 = -35 - 9 + 24$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$-35 - 9 + 24 = -20$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{8} (2a_k + 6b_k - 5)$, given that $\\sum_{k=1}^{8} a_k = 15$ and $\\sum_{k=1}^{8} b_k = 9$.",
              "form": "Answer as an integer.",
              "answer": "44",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{8} (2a_k + 6b_k - 5)$, given that $\\sum_{k=1}^{8} a_k = 15$ and $\\sum_{k=1}^{8} b_k = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{8} (2a_k + 6b_k - 5) = 2\\sum_{k=1}^{8} a_k + 6\\sum_{k=1}^{8} b_k - 5 \\cdot 8$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant $-5$ is summed $8$ times."
                },
                {
                  "step": "The sum is $2 \\cdot 15 + 6 \\cdot 9 - 5 \\cdot 8$.",
                  "reason": "Substituting a value: each given value goes in place of its sum."
                },
                {
                  "step": "$2 \\cdot 15 + 6 \\cdot 9 - 5 \\cdot 8 = 30 + 54 - 40$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$30 + 54 - 40 = 44$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{16} (9a_k - 4b_k - 6)$, given that $\\sum_{k=1}^{16} a_k = 8$ and $\\sum_{k=1}^{16} b_k = -5$.",
              "form": "Answer as an integer.",
              "answer": "-4",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{16} (9a_k - 4b_k - 6)$, given that $\\sum_{k=1}^{16} a_k = 8$ and $\\sum_{k=1}^{16} b_k = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{16} (9a_k - 4b_k - 6) = 9\\sum_{k=1}^{16} a_k - 4\\sum_{k=1}^{16} b_k - 6 \\cdot 16$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant $-6$ is summed $16$ times."
                },
                {
                  "step": "The sum is $9 \\cdot 8 - 4 \\cdot (-5) - 6 \\cdot 16$.",
                  "reason": "Substituting a value: each given value goes in place of its sum."
                },
                {
                  "step": "$9 \\cdot 8 - 4 \\cdot (-5) - 6 \\cdot 16 = 72 + 20 - 96$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$72 + 20 - 96 = -4$",
                  "reason": "Order of operations, from arithmetic: the additions and subtractions run from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=1}^{13} (6k + 4)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=1}^{13} (6k + 4)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=1}^{13} (6k + 4) = 6\\sum_{k=1}^{13} k + 4 \\cdot 13$",
                "reason": "Sums split and constants come out: each term is summed alone, the coefficient $6$ comes out of its sum, and the constant $4$ is summed $13$ times, once for each value of $k$."
              },
              {
                "step": "$\\sum_{k=1}^{13} k = \\dfrac{13 \\cdot 14}{2} = 91$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 13$."
              },
              {
                "step": "The sum is $6 \\cdot 91 + 4 \\cdot 13$.",
                "reason": "Substituting a value: line 3 gives the sum that stands in line 2."
              },
              {
                "step": "$6 \\cdot 91 + 4 \\cdot 13 = 546 + 52$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$546 + 52 = 598$",
                "reason": "Order of operations, from arithmetic: the addition is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{20} (6k + 10)$.",
              "form": "Answer as an integer.",
              "answer": "1460",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{20} (6k + 10)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{20} (6k + 10) = 6\\sum_{k=1}^{20} k + 10 \\cdot 20$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $6$ comes out of its sum, and the constant $10$ is summed $20$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{20} k = \\dfrac{20 \\cdot 21}{2} = 210$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 20$."
                },
                {
                  "step": "The sum is $6 \\cdot 210 + 10 \\cdot 20$.",
                  "reason": "Substituting a value: line 3 gives the sum that stands in line 2."
                },
                {
                  "step": "$6 \\cdot 210 + 10 \\cdot 20 = 1260 + 200$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$1260 + 200 = 1460$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{40} (5k + 9)$.",
              "form": "Answer as an integer.",
              "answer": "4460",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{40} (5k + 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{40} (5k + 9) = 5\\sum_{k=1}^{40} k + 9 \\cdot 40$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $5$ comes out of its sum, and the constant $9$ is summed $40$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{40} k = \\dfrac{40 \\cdot 41}{2} = 820$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 40$."
                },
                {
                  "step": "The sum is $5 \\cdot 820 + 9 \\cdot 40$.",
                  "reason": "Substituting a value: line 3 gives the sum that stands in line 2."
                },
                {
                  "step": "$5 \\cdot 820 + 9 \\cdot 40 = 4100 + 360$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$4100 + 360 = 4460$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{17} (5k + 11)$.",
              "form": "Answer as an integer.",
              "answer": "952",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{17} (5k + 11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{17} (5k + 11) = 5\\sum_{k=1}^{17} k + 11 \\cdot 17$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $5$ comes out of its sum, and the constant $11$ is summed $17$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{17} k = \\dfrac{17 \\cdot 18}{2} = 153$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 17$."
                },
                {
                  "step": "The sum is $5 \\cdot 153 + 11 \\cdot 17$.",
                  "reason": "Substituting a value: line 3 gives the sum that stands in line 2."
                },
                {
                  "step": "$5 \\cdot 153 + 11 \\cdot 17 = 765 + 187$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$765 + 187 = 952$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sum_{k=1}^{n} (9k - 4)$ as a polynomial in $n$.",
            "lines": [
              {
                "step": "Write $\\sum_{k=1}^{n} (9k - 4)$ as a polynomial in $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=1}^{n} (9k - 4) = 9\\sum_{k=1}^{n} k - 4n$",
                "reason": "Sums split and constants come out: each term is summed alone, the coefficient $9$ comes out of its sum, and the constant $-4$ is summed $n$ times."
              },
              {
                "step": "The sum is $9 \\cdot \\dfrac{n(n + 1)}{2} - 4n$.",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the sum that is left."
              },
              {
                "step": "$9 \\cdot \\dfrac{n(n + 1)}{2} = \\dfrac{9}{2}n^2 + \\dfrac{9}{2}n$",
                "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
              },
              {
                "step": "The sum is $\\dfrac{9}{2}n^2 + \\dfrac{1}{2}n$.",
                "reason": "Collecting like terms: the two terms in $n$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sum_{k=1}^{n} (7k + 3)$ as a polynomial in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7/2*n^2+13/2*n",
              "lines": [
                {
                  "step": "Write $\\sum_{k=1}^{n} (7k + 3)$ as a polynomial in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (7k + 3) = 7\\sum_{k=1}^{n} k + 3n$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $7$ comes out of its sum, and the constant $3$ is summed $n$ times."
                },
                {
                  "step": "The sum is $7 \\cdot \\dfrac{n(n + 1)}{2} + 3n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the sum that is left."
                },
                {
                  "step": "$7 \\cdot \\dfrac{n(n + 1)}{2} = \\dfrac{7}{2}n^2 + \\dfrac{7}{2}n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $\\dfrac{7}{2}n^2 + \\dfrac{13}{2}n$.",
                  "reason": "Collecting like terms: the two terms in $n$ are added."
                }
              ]
            },
            {
              "prompt": "Write $\\sum_{k=1}^{n} (5k - 6)$ as a polynomial in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5/2*n^2-7/2*n",
              "lines": [
                {
                  "step": "Write $\\sum_{k=1}^{n} (5k - 6)$ as a polynomial in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (5k - 6) = 5\\sum_{k=1}^{n} k - 6n$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $5$ comes out of its sum, and the constant $-6$ is summed $n$ times."
                },
                {
                  "step": "The sum is $5 \\cdot \\dfrac{n(n + 1)}{2} - 6n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the sum that is left."
                },
                {
                  "step": "$5 \\cdot \\dfrac{n(n + 1)}{2} = \\dfrac{5}{2}n^2 + \\dfrac{5}{2}n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $\\dfrac{5}{2}n^2 - \\dfrac{7}{2}n$.",
                  "reason": "Collecting like terms: the two terms in $n$ are added."
                }
              ]
            },
            {
              "prompt": "Write $\\sum_{k=1}^{n} (4k - 7)$ as a polynomial in $n$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*n^2-5*n",
              "lines": [
                {
                  "step": "Write $\\sum_{k=1}^{n} (4k - 7)$ as a polynomial in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (4k - 7) = 4\\sum_{k=1}^{n} k - 7n$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $4$ comes out of its sum, and the constant $-7$ is summed $n$ times."
                },
                {
                  "step": "The sum is $4 \\cdot \\dfrac{n(n + 1)}{2} - 7n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the sum that is left."
                },
                {
                  "step": "$4 \\cdot \\dfrac{n(n + 1)}{2} = 2n^2 + 2n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $2n^2 - 5n$.",
                  "reason": "Collecting like terms: the two terms in $n$ are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{7^k + 9^k}{11^k}$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{7^k + 9^k}{11^k}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{7^k + 9^k}{11^k} = \\dfrac{7^k}{11^k} + \\dfrac{9^k}{11^k}$",
                "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: a sum over one bottom is split into its two fractions."
              },
              {
                "step": "$\\dfrac{7^k}{11^k} + \\dfrac{9^k}{11^k} = \\left(\\dfrac{7}{11}\\right)^k + \\left(\\dfrac{9}{11}\\right)^k$",
                "reason": "Power of a quotient: a quotient of two $k$th powers is the $k$th power of the quotient."
              },
              {
                "step": "$\\sum_{k=1}^{\\infty} \\left(\\left(\\dfrac{7}{11}\\right)^k + \\left(\\dfrac{9}{11}\\right)^k\\right) = \\sum_{k=1}^{\\infty} \\left(\\dfrac{7}{11}\\right)^k + \\sum_{k=1}^{\\infty} \\left(\\dfrac{9}{11}\\right)^k$",
                "reason": "Sums split and constants come out: each of the two is an infinite geometric series whose common ratio, $\\dfrac{7}{11}$ or $\\dfrac{9}{11}$, lies between $-1$ and $1$, so each has a sum."
              },
              {
                "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{7}{11}\\right)^k = \\dfrac{\\dfrac{7}{11}}{1 - \\dfrac{7}{11}} = \\dfrac{7}{4}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{7}{11}$ and $r = \\dfrac{7}{11}$."
              },
              {
                "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{9}{11}\\right)^k = \\dfrac{\\dfrac{9}{11}}{1 - \\dfrac{9}{11}} = \\dfrac{9}{2}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{9}{11}$ and $r = \\dfrac{9}{11}$."
              },
              {
                "step": "The sum is $\\dfrac{7}{4} + \\dfrac{9}{2}$.",
                "reason": "Substituting a value: lines 5 and 6 go into line 4, each value in place of its sum."
              },
              {
                "step": "$\\dfrac{7}{4} + \\dfrac{9}{2} = \\dfrac{25}{4}$",
                "reason": "The general addition formula, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{3^k + 4^k}{11^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "53/56",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{3^k + 4^k}{11^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3^k + 4^k}{11^k} = \\dfrac{3^k}{11^k} + \\dfrac{4^k}{11^k}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: a sum over one bottom is split into its two fractions."
                },
                {
                  "step": "$\\dfrac{3^k}{11^k} + \\dfrac{4^k}{11^k} = \\left(\\dfrac{3}{11}\\right)^k + \\left(\\dfrac{4}{11}\\right)^k$",
                  "reason": "Power of a quotient: a quotient of two $k$th powers is the $k$th power of the quotient."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\left(\\dfrac{3}{11}\\right)^k + \\left(\\dfrac{4}{11}\\right)^k\\right) = \\sum_{k=1}^{\\infty} \\left(\\dfrac{3}{11}\\right)^k + \\sum_{k=1}^{\\infty} \\left(\\dfrac{4}{11}\\right)^k$",
                  "reason": "Sums split and constants come out: each of the two is an infinite geometric series whose common ratio, $\\dfrac{3}{11}$ or $\\dfrac{4}{11}$, lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{3}{11}\\right)^k = \\dfrac{\\dfrac{3}{11}}{1 - \\dfrac{3}{11}} = \\dfrac{3}{8}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{3}{11}$ and $r = \\dfrac{3}{11}$."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{4}{11}\\right)^k = \\dfrac{\\dfrac{4}{11}}{1 - \\dfrac{4}{11}} = \\dfrac{4}{7}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{4}{11}$ and $r = \\dfrac{4}{11}$."
                },
                {
                  "step": "The sum is $\\dfrac{3}{8} + \\dfrac{4}{7}$.",
                  "reason": "Substituting a value: lines 5 and 6 go into line 4, each value in place of its sum."
                },
                {
                  "step": "$\\dfrac{3}{8} + \\dfrac{4}{7} = \\dfrac{53}{56}$",
                  "reason": "The general addition formula, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=0}^{\\infty} \\dfrac{2^k + 4^k}{7^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "56/15",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=0}^{\\infty} \\dfrac{2^k + 4^k}{7^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2^k + 4^k}{7^k} = \\dfrac{2^k}{7^k} + \\dfrac{4^k}{7^k}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: a sum over one bottom is split into its two fractions."
                },
                {
                  "step": "$\\dfrac{2^k}{7^k} + \\dfrac{4^k}{7^k} = \\left(\\dfrac{2}{7}\\right)^k + \\left(\\dfrac{4}{7}\\right)^k$",
                  "reason": "Power of a quotient: a quotient of two $k$th powers is the $k$th power of the quotient."
                },
                {
                  "step": "$\\sum_{k=0}^{\\infty} \\left(\\left(\\dfrac{2}{7}\\right)^k + \\left(\\dfrac{4}{7}\\right)^k\\right) = \\sum_{k=0}^{\\infty} \\left(\\dfrac{2}{7}\\right)^k + \\sum_{k=0}^{\\infty} \\left(\\dfrac{4}{7}\\right)^k$",
                  "reason": "Sums split and constants come out: each of the two is an infinite geometric series whose common ratio, $\\dfrac{2}{7}$ or $\\dfrac{4}{7}$, lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{k=0}^{\\infty} \\left(\\dfrac{2}{7}\\right)^k = \\dfrac{1}{1 - \\dfrac{2}{7}} = \\dfrac{7}{5}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $1$ and $r = \\dfrac{2}{7}$."
                },
                {
                  "step": "$\\sum_{k=0}^{\\infty} \\left(\\dfrac{4}{7}\\right)^k = \\dfrac{1}{1 - \\dfrac{4}{7}} = \\dfrac{7}{3}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $1$ and $r = \\dfrac{4}{7}$."
                },
                {
                  "step": "The sum is $\\dfrac{7}{5} + \\dfrac{7}{3}$.",
                  "reason": "Substituting a value: lines 5 and 6 go into line 4, each value in place of its sum."
                },
                {
                  "step": "$\\dfrac{7}{5} + \\dfrac{7}{3} = \\dfrac{56}{15}$",
                  "reason": "The general addition formula, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{1 + 3^k}{10^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "34/63",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{\\infty} \\dfrac{1 + 3^k}{10^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1 + 3^k}{10^k} = \\dfrac{1}{10^k} + \\dfrac{3^k}{10^k}$",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: a sum over one bottom is split into its two fractions."
                },
                {
                  "step": "$\\dfrac{1}{10^k} + \\dfrac{3^k}{10^k} = \\left(\\dfrac{1}{10}\\right)^k + \\left(\\dfrac{3}{10}\\right)^k$",
                  "reason": "Power of a quotient: a quotient of two $k$th powers is the $k$th power of the quotient, and $1 = 1^k$."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\left(\\dfrac{1}{10}\\right)^k + \\left(\\dfrac{3}{10}\\right)^k\\right) = \\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{10}\\right)^k + \\sum_{k=1}^{\\infty} \\left(\\dfrac{3}{10}\\right)^k$",
                  "reason": "Sums split and constants come out: each of the two is an infinite geometric series whose common ratio, $\\dfrac{1}{10}$ or $\\dfrac{3}{10}$, lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{10}\\right)^k = \\dfrac{\\dfrac{1}{10}}{1 - \\dfrac{1}{10}} = \\dfrac{1}{9}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{10}$ and $r = \\dfrac{1}{10}$."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{3}{10}\\right)^k = \\dfrac{\\dfrac{3}{10}}{1 - \\dfrac{3}{10}} = \\dfrac{3}{7}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{3}{10}$ and $r = \\dfrac{3}{10}$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{9} + \\dfrac{3}{7}$.",
                  "reason": "Substituting a value: lines 5 and 6 go into line 4, each value in place of its sum."
                },
                {
                  "step": "$\\dfrac{1}{9} + \\dfrac{3}{7} = \\dfrac{34}{63}$",
                  "reason": "The general addition formula, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=6}^{26} (-9k + 3)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=6}^{26} (-9k + 3)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=6}^{26} (-9k + 3) = \\sum_{k=1}^{21} (-9(k + 5) + 3)$",
                "reason": "Shifting the index: both limits go down by $5$, to $1$ and $26 - 5 = 21$, so the term takes $k + 5$ in place of $k$."
              },
              {
                "step": "$-9(k + 5) + 3 = -9k - 42$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$\\sum_{k=1}^{21} (-9k - 42) = -9\\sum_{k=1}^{21} k - 42 \\cdot 21$",
                "reason": "Sums split and constants come out: each term is summed alone, the coefficient $-9$ comes out of its sum, and the constant $-42$ is summed $21$ times."
              },
              {
                "step": "$\\sum_{k=1}^{21} k = \\dfrac{21 \\cdot 22}{2} = 231$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 21$."
              },
              {
                "step": "The sum is $-9 \\cdot 231 - 42 \\cdot 21$.",
                "reason": "Substituting a value: line 5 gives the sum that stands in line 4."
              },
              {
                "step": "$-9 \\cdot 231 - 42 \\cdot 21 = -2079 - 882$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$-2079 - 882 = -2961$",
                "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=15}^{46} (4k + 12)$.",
              "form": "Answer as an integer.",
              "answer": "4288",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=15}^{46} (4k + 12)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=15}^{46} (4k + 12) = \\sum_{k=1}^{32} (4(k + 14) + 12)$",
                  "reason": "Shifting the index: both limits go down by $14$, to $1$ and $46 - 14 = 32$, so the term takes $k + 14$ in place of $k$."
                },
                {
                  "step": "$4(k + 14) + 12 = 4k + 68$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$\\sum_{k=1}^{32} (4k + 68) = 4\\sum_{k=1}^{32} k + 68 \\cdot 32$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $4$ comes out of its sum, and the constant $68$ is summed $32$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{32} k = \\dfrac{32 \\cdot 33}{2} = 528$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 32$."
                },
                {
                  "step": "The sum is $4 \\cdot 528 + 68 \\cdot 32$.",
                  "reason": "Substituting a value: line 5 gives the sum that stands in line 4."
                },
                {
                  "step": "$4 \\cdot 528 + 68 \\cdot 32 = 2112 + 2176$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$2112 + 2176 = 4288$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=3}^{30} (9k - 3)$.",
              "form": "Answer as an integer.",
              "answer": "4074",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=3}^{30} (9k - 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=3}^{30} (9k - 3) = \\sum_{k=1}^{28} (9(k + 2) - 3)$",
                  "reason": "Shifting the index: both limits go down by $2$, to $1$ and $30 - 2 = 28$, so the term takes $k + 2$ in place of $k$."
                },
                {
                  "step": "$9(k + 2) - 3 = 9k + 15$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$\\sum_{k=1}^{28} (9k + 15) = 9\\sum_{k=1}^{28} k + 15 \\cdot 28$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $9$ comes out of its sum, and the constant $15$ is summed $28$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{28} k = \\dfrac{28 \\cdot 29}{2} = 406$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 28$."
                },
                {
                  "step": "The sum is $9 \\cdot 406 + 15 \\cdot 28$.",
                  "reason": "Substituting a value: line 5 gives the sum that stands in line 4."
                },
                {
                  "step": "$9 \\cdot 406 + 15 \\cdot 28 = 3654 + 420$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$3654 + 420 = 4074$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=14}^{37} (-3k - 6)$.",
              "form": "Answer as an integer.",
              "answer": "-1980",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=14}^{37} (-3k - 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=14}^{37} (-3k - 6) = \\sum_{k=1}^{24} (-3(k + 13) - 6)$",
                  "reason": "Shifting the index: both limits go down by $13$, to $1$ and $37 - 13 = 24$, so the term takes $k + 13$ in place of $k$."
                },
                {
                  "step": "$-3(k + 13) - 6 = -3k - 45$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$\\sum_{k=1}^{24} (-3k - 45) = -3\\sum_{k=1}^{24} k - 45 \\cdot 24$",
                  "reason": "Sums split and constants come out: each term is summed alone, the coefficient $-3$ comes out of its sum, and the constant $-45$ is summed $24$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{24} k = \\dfrac{24 \\cdot 25}{2} = 300$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 24$."
                },
                {
                  "step": "The sum is $-3 \\cdot 300 - 45 \\cdot 24$.",
                  "reason": "Substituting a value: line 5 gives the sum that stands in line 4."
                },
                {
                  "step": "$-3 \\cdot 300 - 45 \\cdot 24 = -900 - 1080$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$-900 - 1080 = -1980$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=1}^{6} (-6 \\cdot 4^k + 2k)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=1}^{6} (-6 \\cdot 4^k + 2k)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=1}^{6} (-6 \\cdot 4^k + 2k) = -6\\sum_{k=1}^{6} 4^k + 2\\sum_{k=1}^{6} k$",
                "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
              },
              {
                "step": "$\\sum_{k=1}^{6} 4^k = \\dfrac{4(4^{6} - 1)}{4 - 1} = 5460$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 4$, $r = 4$ and $6$ terms, as $r \\neq 1$."
              },
              {
                "step": "$\\sum_{k=1}^{6} k = \\dfrac{6 \\cdot 7}{2} = 21$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
              },
              {
                "step": "The sum is $-6 \\cdot 5460 + 2 \\cdot 21$.",
                "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
              },
              {
                "step": "$-6 \\cdot 5460 + 2 \\cdot 21 = -32{,}760 + 42$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$-32{,}760 + 42 = -32{,}718$",
                "reason": "Order of operations, from arithmetic: the addition is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{4} (6 \\cdot 4^k + 9k)$.",
              "form": "Answer as an integer.",
              "answer": "2130",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{4} (6 \\cdot 4^k + 9k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{4} (6 \\cdot 4^k + 9k) = 6\\sum_{k=1}^{4} 4^k + 9\\sum_{k=1}^{4} k$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{4} 4^k = \\dfrac{4(4^{4} - 1)}{4 - 1} = 340$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 4$, $r = 4$ and $4$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{4} k = \\dfrac{4 \\cdot 5}{2} = 10$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 4$."
                },
                {
                  "step": "The sum is $6 \\cdot 340 + 9 \\cdot 10$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$6 \\cdot 340 + 9 \\cdot 10 = 2040 + 90$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$2040 + 90 = 2130$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{5} (-6 \\cdot 4^k - 7k)$.",
              "form": "Answer as an integer.",
              "answer": "-8289",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{5} (-6 \\cdot 4^k - 7k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{5} (-6 \\cdot 4^k - 7k) = -6\\sum_{k=1}^{5} 4^k - 7\\sum_{k=1}^{5} k$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{5} 4^k = \\dfrac{4(4^{5} - 1)}{4 - 1} = 1364$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 4$, $r = 4$ and $5$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{5} k = \\dfrac{5 \\cdot 6}{2} = 15$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 5$."
                },
                {
                  "step": "The sum is $-6 \\cdot 1364 - 7 \\cdot 15$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$-6 \\cdot 1364 - 7 \\cdot 15 = -8184 - 105$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$-8184 - 105 = -8289$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{7} (-4 \\cdot 3^k + 6k)$.",
              "form": "Answer as an integer.",
              "answer": "-12948",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{7} (-4 \\cdot 3^k + 6k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{7} (-4 \\cdot 3^k + 6k) = -4\\sum_{k=1}^{7} 3^k + 6\\sum_{k=1}^{7} k$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{7} 3^k = \\dfrac{3(3^{7} - 1)}{3 - 1} = 3279$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 3$, $r = 3$ and $7$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{7} k = \\dfrac{7 \\cdot 8}{2} = 28$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 7$."
                },
                {
                  "step": "The sum is $-4 \\cdot 3279 + 6 \\cdot 28$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$-4 \\cdot 3279 + 6 \\cdot 28 = -13{,}116 + 168$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$-13{,}116 + 168 = -12{,}948$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the expression $y$ in $k$ for which $\\sum_{k=7}^{14} y$ has the same terms in the same order as $\\sum_{k=5}^{12} \\dfrac{7k + 4}{k + 4}$.",
            "lines": [
              {
                "step": "Find the expression $y$ in $k$ for which $\\sum_{k=7}^{14} y$ has the same terms in the same order as $\\sum_{k=5}^{12} \\dfrac{7k + 4}{k + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each limit goes up by $2$: $5 + 2 = 7$ and $12 + 2 = 14$.",
                "reason": "Shifting the index: the two limits move by the same whole number."
              },
              {
                "step": "$y = \\dfrac{7(k - 2) + 4}{(k - 2) + 4}$",
                "reason": "Shifting the index: as the limits go up by $2$, the term takes $k - 2$ in place of $k$, in brackets, and every term keeps its value."
              },
              {
                "step": "$y = \\dfrac{7k - 10}{k + 2}$",
                "reason": "Multiplying out and collecting like terms, in the top and in the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression $y$ in $k$ for which $\\sum_{k=11}^{23} y$ has the same terms in the same order as $\\sum_{k=7}^{19} (5k + 8)^2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(5*k-12)^2",
              "lines": [
                {
                  "step": "Find the expression $y$ in $k$ for which $\\sum_{k=11}^{23} y$ has the same terms in the same order as $\\sum_{k=7}^{19} (5k + 8)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each limit goes up by $4$: $7 + 4 = 11$ and $19 + 4 = 23$.",
                  "reason": "Shifting the index: the two limits move by the same whole number."
                },
                {
                  "step": "$y = (5(k - 4) + 8)^2$",
                  "reason": "Shifting the index: as the limits go up by $4$, the term takes $k - 4$ in place of $k$, in brackets, and every term keeps its value."
                },
                {
                  "step": "$y = (5k - 12)^2$",
                  "reason": "Multiplying out and collecting like terms, inside the bracket."
                }
              ]
            },
            {
              "prompt": "Find the expression $y$ in $k$ for which $\\sum_{k=3}^{10} y$ has the same terms in the same order as $\\sum_{k=1}^{8} (3k - 3)^2$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(3*k-9)^2",
              "lines": [
                {
                  "step": "Find the expression $y$ in $k$ for which $\\sum_{k=3}^{10} y$ has the same terms in the same order as $\\sum_{k=1}^{8} (3k - 3)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each limit goes up by $2$: $1 + 2 = 3$ and $8 + 2 = 10$.",
                  "reason": "Shifting the index: the two limits move by the same whole number."
                },
                {
                  "step": "$y = (3(k - 2) - 3)^2$",
                  "reason": "Shifting the index: as the limits go up by $2$, the term takes $k - 2$ in place of $k$, in brackets, and every term keeps its value."
                },
                {
                  "step": "$y = (3k - 9)^2$",
                  "reason": "Multiplying out and collecting like terms, inside the bracket."
                }
              ]
            },
            {
              "prompt": "Find the expression $y$ in $k$ for which $\\sum_{k=11}^{17} y$ has the same terms in the same order as $\\sum_{k=7}^{13} \\dfrac{4k - 8}{k + 1}$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "(4*k-24)/(k-3)",
              "lines": [
                {
                  "step": "Find the expression $y$ in $k$ for which $\\sum_{k=11}^{17} y$ has the same terms in the same order as $\\sum_{k=7}^{13} \\dfrac{4k - 8}{k + 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each limit goes up by $4$: $7 + 4 = 11$ and $13 + 4 = 17$.",
                  "reason": "Shifting the index: the two limits move by the same whole number."
                },
                {
                  "step": "$y = \\dfrac{4(k - 4) - 8}{(k - 4) + 1}$",
                  "reason": "Shifting the index: as the limits go up by $4$, the term takes $k - 4$ in place of $k$, in brackets, and every term keeps its value."
                },
                {
                  "step": "$y = \\dfrac{4k - 24}{k - 3}$",
                  "reason": "Multiplying out and collecting like terms, in the top and in the bottom."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the sums $\\sum_{k=-1}^{8} (-4k + 1)$ and $\\sum_{k=-4}^{5} (-4k - 11)$ have the same terms in the same order.",
            "lines": [
              {
                "step": "Decide whether the sums $\\sum_{k=-1}^{8} (-4k + 1)$ and $\\sum_{k=-4}^{5} (-4k - 11)$ have the same terms in the same order.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first sum has $8 - (-1) + 1 = 10$ terms, and the second has $5 - (-4) + 1 = 10$ terms.",
                "reason": "Sigma notation: a sum has one term for each integer from its lower limit to its upper limit, both ends counted."
              },
              {
                "step": "With $k + 3$ in place of $k$, the first sum is $\\sum_{k=-4}^{5} (-4(k + 3) + 1)$.",
                "reason": "Shifting the index: both limits go down by $3$, to $-4$ and $5$, so that the first sum starts where the second starts."
              },
              {
                "step": "$-4(k + 3) + 1 = -4k - 11$",
                "reason": "Collecting like terms, after multiplying out."
              },
              {
                "step": "The shifted first sum is $\\sum_{k=-4}^{5} (-4k - 11)$, which is the second sum as given, so the answer is Yes.",
                "reason": "Sigma notation: two sums with the same limits and the same term have the same terms in the same order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the sums $\\sum_{k=6}^{21} (-8k - 8)$ and $\\sum_{k=0}^{15} (-8k + 40)$ have the same terms in the same order.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the sums $\\sum_{k=6}^{21} (-8k - 8)$ and $\\sum_{k=0}^{15} (-8k + 40)$ have the same terms in the same order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sum has $21 - 6 + 1 = 16$ terms, and the second has $15 - 0 + 1 = 16$ terms.",
                  "reason": "Sigma notation: a sum has one term for each integer from its lower limit to its upper limit, both ends counted."
                },
                {
                  "step": "With $k + 6$ in place of $k$, the first sum is $\\sum_{k=0}^{15} (-8(k + 6) - 8)$.",
                  "reason": "Shifting the index: both limits go down by $6$, to $0$ and $15$, so that the first sum starts where the second starts."
                },
                {
                  "step": "$-8(k + 6) - 8 = -8k - 56$",
                  "reason": "Collecting like terms, after multiplying out."
                },
                {
                  "step": "At $k = 0$ the shifted first sum has the term $-56$ and the second sum has the term $40$, so the answer is No.",
                  "reason": "Sigma notation: the two sums start at the same value of $k$, and their first terms differ."
                }
              ]
            },
            {
              "prompt": "Decide whether the sums $\\sum_{k=-2}^{16} (-3k + 6)$ and $\\sum_{k=2}^{20} (-3k + 18)$ have the same terms in the same order.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the sums $\\sum_{k=-2}^{16} (-3k + 6)$ and $\\sum_{k=2}^{20} (-3k + 18)$ have the same terms in the same order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sum has $16 - (-2) + 1 = 19$ terms, and the second has $20 - 2 + 1 = 19$ terms.",
                  "reason": "Sigma notation: a sum has one term for each integer from its lower limit to its upper limit, both ends counted."
                },
                {
                  "step": "With $k - 4$ in place of $k$, the first sum is $\\sum_{k=2}^{20} (-3(k - 4) + 6)$.",
                  "reason": "Shifting the index: both limits go up by $4$, to $2$ and $20$, so that the first sum starts where the second starts."
                },
                {
                  "step": "$-3(k - 4) + 6 = -3k + 18$",
                  "reason": "Collecting like terms, after multiplying out."
                },
                {
                  "step": "The shifted first sum is $\\sum_{k=2}^{20} (-3k + 18)$, which is the second sum as given, so the answer is Yes.",
                  "reason": "Sigma notation: two sums with the same limits and the same term have the same terms in the same order."
                }
              ]
            },
            {
              "prompt": "Decide whether the sums $\\sum_{k=4}^{14} (-2k + 9)$ and $\\sum_{k=2}^{13} (-2k + 5)$ have the same terms in the same order.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the sums $\\sum_{k=4}^{14} (-2k + 9)$ and $\\sum_{k=2}^{13} (-2k + 5)$ have the same terms in the same order.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first sum has $14 - 4 + 1 = 11$ terms, and the second has $13 - 2 + 1 = 12$ terms.",
                  "reason": "Sigma notation: a sum has one term for each integer from its lower limit to its upper limit, both ends counted."
                },
                {
                  "step": "With $k + 2$ in place of $k$, the first sum is $\\sum_{k=2}^{12} (-2(k + 2) + 9)$.",
                  "reason": "Shifting the index: both limits go down by $2$, to $2$ and $12$, so that the first sum starts where the second starts."
                },
                {
                  "step": "$-2(k + 2) + 9 = -2k + 5$",
                  "reason": "Collecting like terms, after multiplying out."
                },
                {
                  "step": "The shifted first sum ends at $k = 12$ and the second sum ends at $k = 13$, so the answer is No.",
                  "reason": "Sigma notation: the two sums start at the same value of $k$ and have different numbers of terms, $11$ and $12$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -2n^2 + 9n$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -2n^2 + 9n$ for every whole number $n$ from $1$ up.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $n$ from $2$ up, $a_n = \\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n - 1} a_k$.",
                "reason": "Term from the sum: the sum of the first $n$ terms and the sum of the first $n - 1$ terms differ by the $n$th term alone."
              },
              {
                "step": "So $a_n = -2n^2 + 9n - \\left(-2(n - 1)^2 + 9(n - 1)\\right)$.",
                "reason": "Substituting a value: the formula gives the first sum, and with $n - 1$ in place of $n$, in brackets, it gives the second."
              },
              {
                "step": "$-2(n - 1)^2 + 9(n - 1) = -2n^2 + 13n - 11$",
                "reason": "Square of a binomial: $(n - 1)^2 = n^2 - 2n + 1$, and then the brackets are multiplied out and like terms are collected."
              },
              {
                "step": "So $a_n = -4n + 11$ for $n$ from $2$ up.",
                "reason": "Subtracting a bracket changes every sign in it: then like terms are collected, and the terms in $n^2$ leave nothing."
              },
              {
                "step": "The first term is $a_1 = -2 + 9 = 7$, and the formula of line 5 gives $-4 + 11 = 7$ at $n = 1$.",
                "reason": "Sigma notation: a sum whose lower and upper limits are both $1$ has the one term $a_1$, so $a_1$ is the given formula at $n = 1$."
              },
              {
                "step": "The $n$th term is $a_n = -4n + 11$ for every whole number $n$ from $1$ up.",
                "reason": "Answering the question asked: line 5 covers $n$ from $2$ up and line 6 covers $n = 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -8n^2 + 12n$ for every whole number $n$ from $1$ up.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-16*n+20",
              "lines": [
                {
                  "step": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -8n^2 + 12n$ for every whole number $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $n$ from $2$ up, $a_n = \\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n - 1} a_k$.",
                  "reason": "Term from the sum: the sum of the first $n$ terms and the sum of the first $n - 1$ terms differ by the $n$th term alone."
                },
                {
                  "step": "So $a_n = -8n^2 + 12n - \\left(-8(n - 1)^2 + 12(n - 1)\\right)$.",
                  "reason": "Substituting a value: the formula gives the first sum, and with $n - 1$ in place of $n$, in brackets, it gives the second."
                },
                {
                  "step": "$-8(n - 1)^2 + 12(n - 1) = -8n^2 + 28n - 20$",
                  "reason": "Square of a binomial: $(n - 1)^2 = n^2 - 2n + 1$, and then the brackets are multiplied out and like terms are collected."
                },
                {
                  "step": "So $a_n = -16n + 20$ for $n$ from $2$ up.",
                  "reason": "Subtracting a bracket changes every sign in it: then like terms are collected, and the terms in $n^2$ leave nothing."
                },
                {
                  "step": "The first term is $a_1 = -8 + 12 = 4$, and the formula of line 5 gives $-16 + 20 = 4$ at $n = 1$.",
                  "reason": "Sigma notation: a sum whose lower and upper limits are both $1$ has the one term $a_1$, so $a_1$ is the given formula at $n = 1$."
                },
                {
                  "step": "The $n$th term is $a_n = -16n + 20$ for every whole number $n$ from $1$ up.",
                  "reason": "Answering the question asked: line 5 covers $n$ from $2$ up and line 6 covers $n = 1$."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = 3n^2 - 5n$ for every whole number $n$ from $1$ up.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*n-8",
              "lines": [
                {
                  "step": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = 3n^2 - 5n$ for every whole number $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $n$ from $2$ up, $a_n = \\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n - 1} a_k$.",
                  "reason": "Term from the sum: the sum of the first $n$ terms and the sum of the first $n - 1$ terms differ by the $n$th term alone."
                },
                {
                  "step": "So $a_n = 3n^2 - 5n - \\left(3(n - 1)^2 - 5(n - 1)\\right)$.",
                  "reason": "Substituting a value: the formula gives the first sum, and with $n - 1$ in place of $n$, in brackets, it gives the second."
                },
                {
                  "step": "$3(n - 1)^2 - 5(n - 1) = 3n^2 - 11n + 8$",
                  "reason": "Square of a binomial: $(n - 1)^2 = n^2 - 2n + 1$, and then the brackets are multiplied out and like terms are collected."
                },
                {
                  "step": "So $a_n = 6n - 8$ for $n$ from $2$ up.",
                  "reason": "Subtracting a bracket changes every sign in it: then like terms are collected, and the terms in $n^2$ leave nothing."
                },
                {
                  "step": "The first term is $a_1 = 3 - 5 = -2$, and the formula of line 5 gives $6 - 8 = -2$ at $n = 1$.",
                  "reason": "Sigma notation: a sum whose lower and upper limits are both $1$ has the one term $a_1$, so $a_1$ is the given formula at $n = 1$."
                },
                {
                  "step": "The $n$th term is $a_n = 6n - 8$ for every whole number $n$ from $1$ up.",
                  "reason": "Answering the question asked: line 5 covers $n$ from $2$ up and line 6 covers $n = 1$."
                }
              ]
            },
            {
              "prompt": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -5n^2 + 12n$ for every whole number $n$ from $1$ up.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-10*n+17",
              "lines": [
                {
                  "step": "Find the $n$th term $a_n$ of a sequence for which $\\sum_{k=1}^{n} a_k = -5n^2 + 12n$ for every whole number $n$ from $1$ up.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $n$ from $2$ up, $a_n = \\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n - 1} a_k$.",
                  "reason": "Term from the sum: the sum of the first $n$ terms and the sum of the first $n - 1$ terms differ by the $n$th term alone."
                },
                {
                  "step": "So $a_n = -5n^2 + 12n - \\left(-5(n - 1)^2 + 12(n - 1)\\right)$.",
                  "reason": "Substituting a value: the formula gives the first sum, and with $n - 1$ in place of $n$, in brackets, it gives the second."
                },
                {
                  "step": "$-5(n - 1)^2 + 12(n - 1) = -5n^2 + 22n - 17$",
                  "reason": "Square of a binomial: $(n - 1)^2 = n^2 - 2n + 1$, and then the brackets are multiplied out and like terms are collected."
                },
                {
                  "step": "So $a_n = -10n + 17$ for $n$ from $2$ up.",
                  "reason": "Subtracting a bracket changes every sign in it: then like terms are collected, and the terms in $n^2$ leave nothing."
                },
                {
                  "step": "The first term is $a_1 = -5 + 12 = 7$, and the formula of line 5 gives $-10 + 17 = 7$ at $n = 1$.",
                  "reason": "Sigma notation: a sum whose lower and upper limits are both $1$ has the one term $a_1$, so $a_1$ is the given formula at $n = 1$."
                },
                {
                  "step": "The $n$th term is $a_n = -10n + 17$ for every whole number $n$ from $1$ up.",
                  "reason": "Answering the question asked: line 5 covers $n$ from $2$ up and line 6 covers $n = 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k7",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{9} (4j + 7k)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{9} (4j + 7k)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner sum is $\\sum_{k=1}^{9} (4j + 7k)$, with $j$ held fixed.",
                "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
              },
              {
                "step": "$\\sum_{k=1}^{9} (4j + 7k) = 4j \\cdot 9 + 7\\sum_{k=1}^{9} k$",
                "reason": "Sums split and constants come out: the term $4j$ has no $k$ in it, so it is a constant summed $9$ times, and the coefficient $7$ comes out of its sum."
              },
              {
                "step": "$\\sum_{k=1}^{9} k = \\dfrac{9 \\cdot 10}{2} = 45$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 9$."
              },
              {
                "step": "The inner sum is $4j \\cdot 9 + 7 \\cdot 45$.",
                "reason": "Substituting a value: line 4 gives the sum that stands in line 3."
              },
              {
                "step": "$4j \\cdot 9 + 7 \\cdot 45 = 36j + 315$",
                "reason": "Order of operations, from arithmetic: each product is worked out."
              },
              {
                "step": "The double sum is $\\sum_{j=1}^{4} (36j + 315)$.",
                "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
              },
              {
                "step": "$\\sum_{j=1}^{4} (36j + 315) = 36\\sum_{j=1}^{4} j + 315 \\cdot 4$",
                "reason": "Sums split and constants come out: the coefficient $36$ comes out of its sum, and the constant $315$ is summed $4$ times."
              },
              {
                "step": "$\\sum_{j=1}^{4} j = \\dfrac{4 \\cdot 5}{2} = 10$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 4$."
              },
              {
                "step": "The sum is $36 \\cdot 10 + 315 \\cdot 4$.",
                "reason": "Substituting a value: line 9 gives the sum that stands in line 8."
              },
              {
                "step": "$36 \\cdot 10 + 315 \\cdot 4 = 360 + 1260$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$360 + 1260 = 1620$",
                "reason": "Order of operations, from arithmetic: the addition is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{10}\\sum_{k=1}^{11} (6j + 3k)$.",
              "form": "Answer as an integer.",
              "answer": "5610",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{10}\\sum_{k=1}^{11} (6j + 3k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{11} (6j + 3k)$, with $j$ held fixed.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{11} (6j + 3k) = 6j \\cdot 11 + 3\\sum_{k=1}^{11} k$",
                  "reason": "Sums split and constants come out: the term $6j$ has no $k$ in it, so it is a constant summed $11$ times, and the coefficient $3$ comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{11} k = \\dfrac{11 \\cdot 12}{2} = 66$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 11$."
                },
                {
                  "step": "The inner sum is $6j \\cdot 11 + 3 \\cdot 66$.",
                  "reason": "Substituting a value: line 4 gives the sum that stands in line 3."
                },
                {
                  "step": "$6j \\cdot 11 + 3 \\cdot 66 = 66j + 198$",
                  "reason": "Order of operations, from arithmetic: each product is worked out."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{10} (66j + 198)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{10} (66j + 198) = 66\\sum_{j=1}^{10} j + 198 \\cdot 10$",
                  "reason": "Sums split and constants come out: the coefficient $66$ comes out of its sum, and the constant $198$ is summed $10$ times."
                },
                {
                  "step": "$\\sum_{j=1}^{10} j = \\dfrac{10 \\cdot 11}{2} = 55$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 10$."
                },
                {
                  "step": "The sum is $66 \\cdot 55 + 198 \\cdot 10$.",
                  "reason": "Substituting a value: line 9 gives the sum that stands in line 8."
                },
                {
                  "step": "$66 \\cdot 55 + 198 \\cdot 10 = 3630 + 1980$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$3630 + 1980 = 5610$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{9} (3j - 2k)$.",
              "form": "Answer as an integer.",
              "answer": "-45",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{9} (3j - 2k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{9} (3j - 2k)$, with $j$ held fixed.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{9} (3j - 2k) = 3j \\cdot 9 - 2\\sum_{k=1}^{9} k$",
                  "reason": "Sums split and constants come out: the term $3j$ has no $k$ in it, so it is a constant summed $9$ times, and the coefficient $-2$ comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{9} k = \\dfrac{9 \\cdot 10}{2} = 45$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 9$."
                },
                {
                  "step": "The inner sum is $3j \\cdot 9 - 2 \\cdot 45$.",
                  "reason": "Substituting a value: line 4 gives the sum that stands in line 3."
                },
                {
                  "step": "$3j \\cdot 9 - 2 \\cdot 45 = 27j - 90$",
                  "reason": "Order of operations, from arithmetic: each product is worked out."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{5} (27j - 90)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{5} (27j - 90) = 27\\sum_{j=1}^{5} j - 90 \\cdot 5$",
                  "reason": "Sums split and constants come out: the coefficient $27$ comes out of its sum, and the constant $-90$ is summed $5$ times."
                },
                {
                  "step": "$\\sum_{j=1}^{5} j = \\dfrac{5 \\cdot 6}{2} = 15$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 5$."
                },
                {
                  "step": "The sum is $27 \\cdot 15 - 90 \\cdot 5$.",
                  "reason": "Substituting a value: line 9 gives the sum that stands in line 8."
                },
                {
                  "step": "$27 \\cdot 15 - 90 \\cdot 5 = 405 - 450$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$405 - 450 = -45$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{12} (5j - 2k)$.",
              "form": "Answer as an integer.",
              "answer": "-24",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{12} (5j - 2k)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{12} (5j - 2k)$, with $j$ held fixed.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{12} (5j - 2k) = 5j \\cdot 12 - 2\\sum_{k=1}^{12} k$",
                  "reason": "Sums split and constants come out: the term $5j$ has no $k$ in it, so it is a constant summed $12$ times, and the coefficient $-2$ comes out of its sum."
                },
                {
                  "step": "$\\sum_{k=1}^{12} k = \\dfrac{12 \\cdot 13}{2} = 78$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 12$."
                },
                {
                  "step": "The inner sum is $5j \\cdot 12 - 2 \\cdot 78$.",
                  "reason": "Substituting a value: line 4 gives the sum that stands in line 3."
                },
                {
                  "step": "$5j \\cdot 12 - 2 \\cdot 78 = 60j - 156$",
                  "reason": "Order of operations, from arithmetic: each product is worked out."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{4} (60j - 156)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{4} (60j - 156) = 60\\sum_{j=1}^{4} j - 156 \\cdot 4$",
                  "reason": "Sums split and constants come out: the coefficient $60$ comes out of its sum, and the constant $-156$ is summed $4$ times."
                },
                {
                  "step": "$\\sum_{j=1}^{4} j = \\dfrac{4 \\cdot 5}{2} = 10$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 4$."
                },
                {
                  "step": "The sum is $60 \\cdot 10 - 156 \\cdot 4$.",
                  "reason": "Substituting a value: line 9 gives the sum that stands in line 8."
                },
                {
                  "step": "$60 \\cdot 10 - 156 \\cdot 4 = 600 - 624$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$600 - 624 = -24$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{13} 4jk$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{13} 4jk$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{j=1}^{6}\\sum_{k=1}^{13} 4jk = 4\\left(\\sum_{j=1}^{6} j\\right)\\left(\\sum_{k=1}^{13} k\\right)$",
                "reason": "Product of two sums: the term is the constant $4$ times a factor $j$ with no $k$ in it times a factor $k$ with no $j$ in it."
              },
              {
                "step": "$\\sum_{j=1}^{6} j = \\dfrac{6 \\cdot 7}{2} = 21$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
              },
              {
                "step": "$\\sum_{k=1}^{13} k = \\dfrac{13 \\cdot 14}{2} = 91$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 13$."
              },
              {
                "step": "The double sum is $4 \\cdot 21 \\cdot 91$.",
                "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
              },
              {
                "step": "$4 \\cdot 21 \\cdot 91 = 7644$",
                "reason": "Order of operations, from arithmetic: the products run from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{13}\\sum_{k=1}^{9} 2jk$.",
              "form": "Answer as an integer.",
              "answer": "8190",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{13}\\sum_{k=1}^{9} 2jk$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{13}\\sum_{k=1}^{9} 2jk = 2\\left(\\sum_{j=1}^{13} j\\right)\\left(\\sum_{k=1}^{9} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $2$ times a factor $j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{13} j = \\dfrac{13 \\cdot 14}{2} = 91$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 13$."
                },
                {
                  "step": "$\\sum_{k=1}^{9} k = \\dfrac{9 \\cdot 10}{2} = 45$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 9$."
                },
                {
                  "step": "The double sum is $2 \\cdot 91 \\cdot 45$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$2 \\cdot 91 \\cdot 45 = 8190$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{14} 6jk$.",
              "form": "Answer as an integer.",
              "answer": "9450",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{14} 6jk$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{5}\\sum_{k=1}^{14} 6jk = 6\\left(\\sum_{j=1}^{5} j\\right)\\left(\\sum_{k=1}^{14} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $6$ times a factor $j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{5} j = \\dfrac{5 \\cdot 6}{2} = 15$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 5$."
                },
                {
                  "step": "$\\sum_{k=1}^{14} k = \\dfrac{14 \\cdot 15}{2} = 105$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 14$."
                },
                {
                  "step": "The double sum is $6 \\cdot 15 \\cdot 105$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$6 \\cdot 15 \\cdot 105 = 9450$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{7} 3jk$.",
              "form": "Answer as an integer.",
              "answer": "1764",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{7} 3jk$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{6}\\sum_{k=1}^{7} 3jk = 3\\left(\\sum_{j=1}^{6} j\\right)\\left(\\sum_{k=1}^{7} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $3$ times a factor $j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{6} j = \\dfrac{6 \\cdot 7}{2} = 21$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
                },
                {
                  "step": "$\\sum_{k=1}^{7} k = \\dfrac{7 \\cdot 8}{2} = 28$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 7$."
                },
                {
                  "step": "The double sum is $3 \\cdot 21 \\cdot 28$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$3 \\cdot 21 \\cdot 28 = 1764$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{7}{3^j \\cdot 6^k}$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{7}{3^j \\cdot 6^k}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{7}{3^j \\cdot 6^k} = 7\\left(\\dfrac{1}{3}\\right)^j\\left(\\dfrac{1}{6}\\right)^k$",
                "reason": "Power of a quotient: $\\dfrac{1}{b^n} = \\left(\\dfrac{1}{b}\\right)^n$, used for each of the two powers."
              },
              {
                "step": "$\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} 7\\left(\\dfrac{1}{3}\\right)^j\\left(\\dfrac{1}{6}\\right)^k = 7\\left(\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{3}\\right)^j\\right)\\left(\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{6}\\right)^k\\right)$",
                "reason": "Product of two sums: the term is a constant times a factor with no $k$ in it times a factor with no $j$ in it, and each factor gives an infinite geometric series whose common ratio lies between $-1$ and $1$, so each has a sum."
              },
              {
                "step": "$\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{3}\\right)^j = \\dfrac{\\dfrac{1}{3}}{1 - \\dfrac{1}{3}} = \\dfrac{1}{2}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{3}$ and $r = \\dfrac{1}{3}$."
              },
              {
                "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{6}\\right)^k = \\dfrac{\\dfrac{1}{6}}{1 - \\dfrac{1}{6}} = \\dfrac{1}{5}$",
                "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{6}$ and $r = \\dfrac{1}{6}$."
              },
              {
                "step": "The double sum is $7 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{1}{5}$.",
                "reason": "Substituting a value: lines 4 and 5 go into line 3, each value in place of its sum."
              },
              {
                "step": "$7 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{1}{5} = \\dfrac{7}{10}$",
                "reason": "The product formula, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{10}{4^j \\cdot 3^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/3",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{10}{4^j \\cdot 3^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{4^j \\cdot 3^k} = 10\\left(\\dfrac{1}{4}\\right)^j\\left(\\dfrac{1}{3}\\right)^k$",
                  "reason": "Power of a quotient: $\\dfrac{1}{b^n} = \\left(\\dfrac{1}{b}\\right)^n$, used for each of the two powers."
                },
                {
                  "step": "$\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} 10\\left(\\dfrac{1}{4}\\right)^j\\left(\\dfrac{1}{3}\\right)^k = 10\\left(\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{4}\\right)^j\\right)\\left(\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{3}\\right)^k\\right)$",
                  "reason": "Product of two sums: the term is a constant times a factor with no $k$ in it times a factor with no $j$ in it, and each factor gives an infinite geometric series whose common ratio lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{4}\\right)^j = \\dfrac{\\dfrac{1}{4}}{1 - \\dfrac{1}{4}} = \\dfrac{1}{3}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{4}$ and $r = \\dfrac{1}{4}$."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{3}\\right)^k = \\dfrac{\\dfrac{1}{3}}{1 - \\dfrac{1}{3}} = \\dfrac{1}{2}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{3}$ and $r = \\dfrac{1}{3}$."
                },
                {
                  "step": "The double sum is $10 \\cdot \\dfrac{1}{3} \\cdot \\dfrac{1}{2}$.",
                  "reason": "Substituting a value: lines 4 and 5 go into line 3, each value in place of its sum."
                },
                {
                  "step": "$10 \\cdot \\dfrac{1}{3} \\cdot \\dfrac{1}{2} = \\dfrac{5}{3}$",
                  "reason": "The product formula, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{12}{7^j \\cdot 8^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/7",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} \\dfrac{12}{7^j \\cdot 8^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12}{7^j \\cdot 8^k} = 12\\left(\\dfrac{1}{7}\\right)^j\\left(\\dfrac{1}{8}\\right)^k$",
                  "reason": "Power of a quotient: $\\dfrac{1}{b^n} = \\left(\\dfrac{1}{b}\\right)^n$, used for each of the two powers."
                },
                {
                  "step": "$\\sum_{j=1}^{\\infty}\\sum_{k=1}^{\\infty} 12\\left(\\dfrac{1}{7}\\right)^j\\left(\\dfrac{1}{8}\\right)^k = 12\\left(\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{7}\\right)^j\\right)\\left(\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{8}\\right)^k\\right)$",
                  "reason": "Product of two sums: the term is a constant times a factor with no $k$ in it times a factor with no $j$ in it, and each factor gives an infinite geometric series whose common ratio lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{j=1}^{\\infty} \\left(\\dfrac{1}{7}\\right)^j = \\dfrac{\\dfrac{1}{7}}{1 - \\dfrac{1}{7}} = \\dfrac{1}{6}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{7}$ and $r = \\dfrac{1}{7}$."
                },
                {
                  "step": "$\\sum_{k=1}^{\\infty} \\left(\\dfrac{1}{8}\\right)^k = \\dfrac{\\dfrac{1}{8}}{1 - \\dfrac{1}{8}} = \\dfrac{1}{7}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $\\dfrac{1}{8}$ and $r = \\dfrac{1}{8}$."
                },
                {
                  "step": "The double sum is $12 \\cdot \\dfrac{1}{6} \\cdot \\dfrac{1}{7}$.",
                  "reason": "Substituting a value: lines 4 and 5 go into line 3, each value in place of its sum."
                },
                {
                  "step": "$12 \\cdot \\dfrac{1}{6} \\cdot \\dfrac{1}{7} = \\dfrac{2}{7}$",
                  "reason": "The product formula, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=0}^{\\infty}\\sum_{k=0}^{\\infty} \\dfrac{2}{4^j \\cdot 8^k}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "64/21",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=0}^{\\infty}\\sum_{k=0}^{\\infty} \\dfrac{2}{4^j \\cdot 8^k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2}{4^j \\cdot 8^k} = 2\\left(\\dfrac{1}{4}\\right)^j\\left(\\dfrac{1}{8}\\right)^k$",
                  "reason": "Power of a quotient: $\\dfrac{1}{b^n} = \\left(\\dfrac{1}{b}\\right)^n$, used for each of the two powers."
                },
                {
                  "step": "$\\sum_{j=0}^{\\infty}\\sum_{k=0}^{\\infty} 2\\left(\\dfrac{1}{4}\\right)^j\\left(\\dfrac{1}{8}\\right)^k = 2\\left(\\sum_{j=0}^{\\infty} \\left(\\dfrac{1}{4}\\right)^j\\right)\\left(\\sum_{k=0}^{\\infty} \\left(\\dfrac{1}{8}\\right)^k\\right)$",
                  "reason": "Product of two sums: the term is a constant times a factor with no $k$ in it times a factor with no $j$ in it, and each factor gives an infinite geometric series whose common ratio lies between $-1$ and $1$, so each has a sum."
                },
                {
                  "step": "$\\sum_{j=0}^{\\infty} \\left(\\dfrac{1}{4}\\right)^j = \\dfrac{1}{1 - \\dfrac{1}{4}} = \\dfrac{4}{3}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $1$ and $r = \\dfrac{1}{4}$."
                },
                {
                  "step": "$\\sum_{k=0}^{\\infty} \\left(\\dfrac{1}{8}\\right)^k = \\dfrac{1}{1 - \\dfrac{1}{8}} = \\dfrac{8}{7}$",
                  "reason": "Converges when $|r| < 1$, with sum $\\dfrac{a}{1-r}$, with first term $1$ and $r = \\dfrac{1}{8}$."
                },
                {
                  "step": "The double sum is $2 \\cdot \\dfrac{4}{3} \\cdot \\dfrac{8}{7}$.",
                  "reason": "Substituting a value: lines 4 and 5 go into line 3, each value in place of its sum."
                },
                {
                  "step": "$2 \\cdot \\dfrac{4}{3} \\cdot \\dfrac{8}{7} = \\dfrac{64}{21}$",
                  "reason": "The product formula, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{6} 4 \\cdot 3^j k$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{5}\\sum_{k=1}^{6} 4 \\cdot 3^j k$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{j=1}^{5}\\sum_{k=1}^{6} 4 \\cdot 3^j k = 4\\left(\\sum_{j=1}^{5} 3^j\\right)\\left(\\sum_{k=1}^{6} k\\right)$",
                "reason": "Product of two sums: the term is the constant $4$ times a factor $3^j$ with no $k$ in it times a factor $k$ with no $j$ in it."
              },
              {
                "step": "$\\sum_{j=1}^{5} 3^j = \\dfrac{3(3^{5} - 1)}{3 - 1} = 363$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 3$, $r = 3$ and $5$ terms, as $r \\neq 1$."
              },
              {
                "step": "$\\sum_{k=1}^{6} k = \\dfrac{6 \\cdot 7}{2} = 21$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
              },
              {
                "step": "The double sum is $4 \\cdot 363 \\cdot 21$.",
                "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
              },
              {
                "step": "$4 \\cdot 363 \\cdot 21 = 30{,}492$",
                "reason": "Order of operations, from arithmetic: the products run from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{5} 5 \\cdot 3^j k$.",
              "form": "Answer as an integer.",
              "answer": "9000",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{5} 5 \\cdot 3^j k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{4}\\sum_{k=1}^{5} 5 \\cdot 3^j k = 5\\left(\\sum_{j=1}^{4} 3^j\\right)\\left(\\sum_{k=1}^{5} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $5$ times a factor $3^j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{4} 3^j = \\dfrac{3(3^{4} - 1)}{3 - 1} = 120$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 3$, $r = 3$ and $4$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{5} k = \\dfrac{5 \\cdot 6}{2} = 15$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 5$."
                },
                {
                  "step": "The double sum is $5 \\cdot 120 \\cdot 15$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$5 \\cdot 120 \\cdot 15 = 9000$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{4} 6 \\cdot 5^j k$.",
              "form": "Answer as an integer.",
              "answer": "46800",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{4}\\sum_{k=1}^{4} 6 \\cdot 5^j k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{4}\\sum_{k=1}^{4} 6 \\cdot 5^j k = 6\\left(\\sum_{j=1}^{4} 5^j\\right)\\left(\\sum_{k=1}^{4} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $6$ times a factor $5^j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{4} 5^j = \\dfrac{5(5^{4} - 1)}{5 - 1} = 780$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 5$, $r = 5$ and $4$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{4} k = \\dfrac{4 \\cdot 5}{2} = 10$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 4$."
                },
                {
                  "step": "The double sum is $6 \\cdot 780 \\cdot 10$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$6 \\cdot 780 \\cdot 10 = 46{,}800$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{3}\\sum_{k=1}^{11} 6 \\cdot 3^j k$.",
              "form": "Answer as an integer.",
              "answer": "15444",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{3}\\sum_{k=1}^{11} 6 \\cdot 3^j k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{3}\\sum_{k=1}^{11} 6 \\cdot 3^j k = 6\\left(\\sum_{j=1}^{3} 3^j\\right)\\left(\\sum_{k=1}^{11} k\\right)$",
                  "reason": "Product of two sums: the term is the constant $6$ times a factor $3^j$ with no $k$ in it times a factor $k$ with no $j$ in it."
                },
                {
                  "step": "$\\sum_{j=1}^{3} 3^j = \\dfrac{3(3^{3} - 1)}{3 - 1} = 39$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 3$, $r = 3$ and $3$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\sum_{k=1}^{11} k = \\dfrac{11 \\cdot 12}{2} = 66$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 11$."
                },
                {
                  "step": "The double sum is $6 \\cdot 39 \\cdot 66$.",
                  "reason": "Substituting a value: lines 3 and 4 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$6 \\cdot 39 \\cdot 66 = 15{,}444$",
                  "reason": "Order of operations, from arithmetic: the products run from left to right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k8",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{13}\\sum_{k=1}^{j} (10k + 9)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{13}\\sum_{k=1}^{j} (10k + 9)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner sum is $\\sum_{k=1}^{j} (10k + 9)$, whose upper limit is the outer index $j$.",
                "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
              },
              {
                "step": "$\\sum_{k=1}^{j} (10k + 9) = 10\\sum_{k=1}^{j} k + 9j$",
                "reason": "Sums split and constants come out: the coefficient $10$ comes out of its sum, and the constant $9$ is summed $j$ times."
              },
              {
                "step": "$10\\sum_{k=1}^{j} k + 9j = 10 \\cdot \\dfrac{j(j + 1)}{2} + 9j$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $j$ in place of $n$."
              },
              {
                "step": "$10 \\cdot \\dfrac{j(j + 1)}{2} + 9j = 5j^2 + 14j$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "The double sum is $\\sum_{j=1}^{13} (5j^2 + 14j)$.",
                "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
              },
              {
                "step": "$\\sum_{j=1}^{13} (5j^2 + 14j) = 5\\sum_{j=1}^{13} j^2 + 14\\sum_{j=1}^{13} j$",
                "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
              },
              {
                "step": "$\\sum_{j=1}^{13} j^2 = \\dfrac{13 \\cdot 14 \\cdot 27}{6} = 819$",
                "reason": "Sum of squares: with $n = 13$."
              },
              {
                "step": "$\\sum_{j=1}^{13} j = \\dfrac{13 \\cdot 14}{2} = 91$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 13$."
              },
              {
                "step": "The double sum is $5 \\cdot 819 + 14 \\cdot 91$.",
                "reason": "Substituting a value: lines 8 and 9 go into line 7, each value in place of its sum."
              },
              {
                "step": "$5 \\cdot 819 + 14 \\cdot 91 = 4095 + 1274$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$4095 + 1274 = 5369$",
                "reason": "Order of operations, from arithmetic: the addition is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{9}\\sum_{k=1}^{j} (8k + 6)$.",
              "form": "Answer as an integer.",
              "answer": "1590",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{9}\\sum_{k=1}^{j} (8k + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{j} (8k + 6)$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{j} (8k + 6) = 8\\sum_{k=1}^{j} k + 6j$",
                  "reason": "Sums split and constants come out: the coefficient $8$ comes out of its sum, and the constant $6$ is summed $j$ times."
                },
                {
                  "step": "$8\\sum_{k=1}^{j} k + 6j = 8 \\cdot \\dfrac{j(j + 1)}{2} + 6j$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $j$ in place of $n$."
                },
                {
                  "step": "$8 \\cdot \\dfrac{j(j + 1)}{2} + 6j = 4j^2 + 10j$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{9} (4j^2 + 10j)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{9} (4j^2 + 10j) = 4\\sum_{j=1}^{9} j^2 + 10\\sum_{j=1}^{9} j$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{j=1}^{9} j^2 = \\dfrac{9 \\cdot 10 \\cdot 19}{6} = 285$",
                  "reason": "Sum of squares: with $n = 9$."
                },
                {
                  "step": "$\\sum_{j=1}^{9} j = \\dfrac{9 \\cdot 10}{2} = 45$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 9$."
                },
                {
                  "step": "The double sum is $4 \\cdot 285 + 10 \\cdot 45$.",
                  "reason": "Substituting a value: lines 8 and 9 go into line 7, each value in place of its sum."
                },
                {
                  "step": "$4 \\cdot 285 + 10 \\cdot 45 = 1140 + 450$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$1140 + 450 = 1590$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{7}\\sum_{k=1}^{j} (6k + 6)$.",
              "form": "Answer as an integer.",
              "answer": "672",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{7}\\sum_{k=1}^{j} (6k + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{j} (6k + 6)$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{j} (6k + 6) = 6\\sum_{k=1}^{j} k + 6j$",
                  "reason": "Sums split and constants come out: the coefficient $6$ comes out of its sum, and the constant $6$ is summed $j$ times."
                },
                {
                  "step": "$6\\sum_{k=1}^{j} k + 6j = 6 \\cdot \\dfrac{j(j + 1)}{2} + 6j$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $j$ in place of $n$."
                },
                {
                  "step": "$6 \\cdot \\dfrac{j(j + 1)}{2} + 6j = 3j^2 + 9j$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{7} (3j^2 + 9j)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{7} (3j^2 + 9j) = 3\\sum_{j=1}^{7} j^2 + 9\\sum_{j=1}^{7} j$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{j=1}^{7} j^2 = \\dfrac{7 \\cdot 8 \\cdot 15}{6} = 140$",
                  "reason": "Sum of squares: with $n = 7$."
                },
                {
                  "step": "$\\sum_{j=1}^{7} j = \\dfrac{7 \\cdot 8}{2} = 28$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 7$."
                },
                {
                  "step": "The double sum is $3 \\cdot 140 + 9 \\cdot 28$.",
                  "reason": "Substituting a value: lines 8 and 9 go into line 7, each value in place of its sum."
                },
                {
                  "step": "$3 \\cdot 140 + 9 \\cdot 28 = 420 + 252$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$420 + 252 = 672$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{j} (6k - 5)$.",
              "form": "Answer as an integer.",
              "answer": "231",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=1}^{j} (6k - 5)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=1}^{j} (6k - 5)$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=1}^{j} (6k - 5) = 6\\sum_{k=1}^{j} k - 5j$",
                  "reason": "Sums split and constants come out: the coefficient $6$ comes out of its sum, and the constant $-5$ is summed $j$ times."
                },
                {
                  "step": "$6\\sum_{k=1}^{j} k - 5j = 6 \\cdot \\dfrac{j(j + 1)}{2} - 5j$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $j$ in place of $n$."
                },
                {
                  "step": "$6 \\cdot \\dfrac{j(j + 1)}{2} - 5j = 3j^2 - 2j$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The double sum is $\\sum_{j=1}^{6} (3j^2 - 2j)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=1}^{6} (3j^2 - 2j) = 3\\sum_{j=1}^{6} j^2 - 2\\sum_{j=1}^{6} j$",
                  "reason": "Sums split and constants come out: each term is summed alone, and each coefficient comes out of its sum."
                },
                {
                  "step": "$\\sum_{j=1}^{6} j^2 = \\dfrac{6 \\cdot 7 \\cdot 13}{6} = 91$",
                  "reason": "Sum of squares: with $n = 6$."
                },
                {
                  "step": "$\\sum_{j=1}^{6} j = \\dfrac{6 \\cdot 7}{2} = 21$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
                },
                {
                  "step": "The double sum is $3 \\cdot 91 - 2 \\cdot 21$.",
                  "reason": "Substituting a value: lines 8 and 9 go into line 7, each value in place of its sum."
                },
                {
                  "step": "$3 \\cdot 91 - 2 \\cdot 21 = 273 - 42$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$273 - 42 = 231$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=0}^{5}\\sum_{k=0}^{j} 9 \\cdot 4^k$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=0}^{5}\\sum_{k=0}^{j} 9 \\cdot 4^k$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The inner sum is $\\sum_{k=0}^{j} 9 \\cdot 4^k$, whose upper limit is the outer index $j$.",
                "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
              },
              {
                "step": "$\\sum_{k=0}^{j} 9 \\cdot 4^k = \\dfrac{9(4^{j+1} - 1)}{4 - 1}$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 9$, $r = 4$ and $j + 1$ terms, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{9(4^{j+1} - 1)}{4 - 1} = 3 \\cdot 4^{j+1} - 3$",
                "reason": "Cancelling a common factor: $9 = 3 \\cdot 3$, and then the bracket is multiplied out."
              },
              {
                "step": "The double sum is $\\sum_{j=0}^{5} (3 \\cdot 4^{j+1} - 3)$.",
                "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
              },
              {
                "step": "$\\sum_{j=0}^{5} (3 \\cdot 4^{j+1} - 3) = 3\\sum_{j=0}^{5} 4^{j+1} - 3 \\cdot 6$",
                "reason": "Sums split and constants come out: the coefficient $3$ comes out of its sum, and the constant $3$ is taken away $6$ times, once for each whole number from $0$ to $5$."
              },
              {
                "step": "$\\sum_{j=0}^{5} 4^{j+1} = \\dfrac{4(4^{6} - 1)}{4 - 1} = 5460$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 4$, $r = 4$ and $6$ terms, as $r \\neq 1$."
              },
              {
                "step": "The double sum is $3 \\cdot 5460 - 3 \\cdot 6$.",
                "reason": "Substituting a value: line 7 goes into line 6, in place of its sum."
              },
              {
                "step": "$3 \\cdot 5460 - 3 \\cdot 6 = 16{,}380 - 18$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$16{,}380 - 18 = 16{,}362$",
                "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=0}^{4}\\sum_{k=0}^{j} 6 \\cdot 4^k$.",
              "form": "Answer as an integer.",
              "answer": "2718",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=0}^{4}\\sum_{k=0}^{j} 6 \\cdot 4^k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=0}^{j} 6 \\cdot 4^k$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=0}^{j} 6 \\cdot 4^k = \\dfrac{6(4^{j+1} - 1)}{4 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 6$, $r = 4$ and $j + 1$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{6(4^{j+1} - 1)}{4 - 1} = 2 \\cdot 4^{j+1} - 2$",
                  "reason": "Cancelling a common factor: $6 = 2 \\cdot 3$, and then the bracket is multiplied out."
                },
                {
                  "step": "The double sum is $\\sum_{j=0}^{4} (2 \\cdot 4^{j+1} - 2)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=0}^{4} (2 \\cdot 4^{j+1} - 2) = 2\\sum_{j=0}^{4} 4^{j+1} - 2 \\cdot 5$",
                  "reason": "Sums split and constants come out: the coefficient $2$ comes out of its sum, and the constant $2$ is taken away $5$ times, once for each whole number from $0$ to $4$."
                },
                {
                  "step": "$\\sum_{j=0}^{4} 4^{j+1} = \\dfrac{4(4^{5} - 1)}{4 - 1} = 1364$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 4$, $r = 4$ and $5$ terms, as $r \\neq 1$."
                },
                {
                  "step": "The double sum is $2 \\cdot 1364 - 2 \\cdot 5$.",
                  "reason": "Substituting a value: line 7 goes into line 6, in place of its sum."
                },
                {
                  "step": "$2 \\cdot 1364 - 2 \\cdot 5 = 2728 - 10$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$2728 - 10 = 2718$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=0}^{3}\\sum_{k=0}^{j} 20 \\cdot 6^k$.",
              "form": "Answer as an integer.",
              "answer": "6200",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=0}^{3}\\sum_{k=0}^{j} 20 \\cdot 6^k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=0}^{j} 20 \\cdot 6^k$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=0}^{j} 20 \\cdot 6^k = \\dfrac{20(6^{j+1} - 1)}{6 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 20$, $r = 6$ and $j + 1$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{20(6^{j+1} - 1)}{6 - 1} = 4 \\cdot 6^{j+1} - 4$",
                  "reason": "Cancelling a common factor: $20 = 4 \\cdot 5$, and then the bracket is multiplied out."
                },
                {
                  "step": "The double sum is $\\sum_{j=0}^{3} (4 \\cdot 6^{j+1} - 4)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=0}^{3} (4 \\cdot 6^{j+1} - 4) = 4\\sum_{j=0}^{3} 6^{j+1} - 4 \\cdot 4$",
                  "reason": "Sums split and constants come out: the coefficient $4$ comes out of its sum, and the constant $4$ is taken away $4$ times, once for each whole number from $0$ to $3$."
                },
                {
                  "step": "$\\sum_{j=0}^{3} 6^{j+1} = \\dfrac{6(6^{4} - 1)}{6 - 1} = 1554$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 6$, $r = 6$ and $4$ terms, as $r \\neq 1$."
                },
                {
                  "step": "The double sum is $4 \\cdot 1554 - 4 \\cdot 4$.",
                  "reason": "Substituting a value: line 7 goes into line 6, in place of its sum."
                },
                {
                  "step": "$4 \\cdot 1554 - 4 \\cdot 4 = 6216 - 16$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$6216 - 16 = 6200$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=0}^{2}\\sum_{k=0}^{j} 20 \\cdot 5^k$.",
              "form": "Answer as an integer.",
              "answer": "760",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=0}^{2}\\sum_{k=0}^{j} 20 \\cdot 5^k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The inner sum is $\\sum_{k=0}^{j} 20 \\cdot 5^k$, whose upper limit is the outer index $j$.",
                  "reason": "Double sum: the inner sum is worked out first, for one fixed value of the outer index $j$."
                },
                {
                  "step": "$\\sum_{k=0}^{j} 20 \\cdot 5^k = \\dfrac{20(5^{j+1} - 1)}{5 - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 20$, $r = 5$ and $j + 1$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{20(5^{j+1} - 1)}{5 - 1} = 5 \\cdot 5^{j+1} - 5$",
                  "reason": "Cancelling a common factor: $20 = 5 \\cdot 4$, and then the bracket is multiplied out."
                },
                {
                  "step": "The double sum is $\\sum_{j=0}^{2} (5 \\cdot 5^{j+1} - 5)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $j$."
                },
                {
                  "step": "$\\sum_{j=0}^{2} (5 \\cdot 5^{j+1} - 5) = 5\\sum_{j=0}^{2} 5^{j+1} - 5 \\cdot 3$",
                  "reason": "Sums split and constants come out: the coefficient $5$ comes out of its sum, and the constant $5$ is taken away $3$ times, once for each whole number from $0$ to $2$."
                },
                {
                  "step": "$\\sum_{j=0}^{2} 5^{j+1} = \\dfrac{5(5^{3} - 1)}{5 - 1} = 155$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 5$, $r = 5$ and $3$ terms, as $r \\neq 1$."
                },
                {
                  "step": "The double sum is $5 \\cdot 155 - 5 \\cdot 3$.",
                  "reason": "Substituting a value: line 7 goes into line 6, in place of its sum."
                },
                {
                  "step": "$5 \\cdot 155 - 5 \\cdot 3 = 775 - 15$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$775 - 15 = 760$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\sum_{j=1}^{20}\\sum_{k=j}^{20} \\dfrac{14j - 9}{k}$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{j=1}^{20}\\sum_{k=j}^{20} \\dfrac{14j - 9}{k}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{j=1}^{20}\\sum_{k=j}^{20} \\dfrac{14j - 9}{k} = \\sum_{k=1}^{20}\\sum_{j=1}^{k} \\dfrac{14j - 9}{k}$",
                "reason": "Swapping the order: both double sums add the term once for each pair of whole numbers $j$ and $k$ with $1 \\le j \\le k \\le 20$."
              },
              {
                "step": "$\\sum_{j=1}^{k} \\dfrac{14j - 9}{k} = \\dfrac{1}{k}\\sum_{j=1}^{k} (14j - 9)$",
                "reason": "Sums split and constants come out: the inner sum now runs over $j$, so $\\dfrac{1}{k}$ is a constant and comes out of it."
              },
              {
                "step": "$\\sum_{j=1}^{k} (14j - 9) = 14\\sum_{j=1}^{k} j - 9k$",
                "reason": "Sums split and constants come out: the coefficient $14$ comes out of its sum, and the constant $-9$ is summed $k$ times."
              },
              {
                "step": "$14\\sum_{j=1}^{k} j - 9k = 14 \\cdot \\dfrac{k(k + 1)}{2} - 9k$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $k$ in place of $n$."
              },
              {
                "step": "$14 \\cdot \\dfrac{k(k + 1)}{2} - 9k = 7k^2 - 2k$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "The inner sum is $\\dfrac{7k^2 - 2k}{k} = 7k - 2$.",
                "reason": "Cancelling a common factor: each term of the top is divided by $k$."
              },
              {
                "step": "The double sum is $\\sum_{k=1}^{20} (7k - 2)$.",
                "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $k$."
              },
              {
                "step": "$\\sum_{k=1}^{20} (7k - 2) = 7\\sum_{k=1}^{20} k - 2 \\cdot 20$",
                "reason": "Sums split and constants come out: the coefficient $7$ comes out of its sum, and the constant $-2$ is summed $20$ times."
              },
              {
                "step": "$\\sum_{k=1}^{20} k = \\dfrac{20 \\cdot 21}{2} = 210$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 20$."
              },
              {
                "step": "The sum is $7 \\cdot 210 - 2 \\cdot 20$.",
                "reason": "Substituting a value: line 10 gives the sum that stands in line 9."
              },
              {
                "step": "$7 \\cdot 210 - 2 \\cdot 20 = 1470 - 40$",
                "reason": "Order of operations, from arithmetic: the products are worked out first."
              },
              {
                "step": "$1470 - 40 = 1430$",
                "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{j=1}^{7}\\sum_{k=j}^{7} \\dfrac{8j + 6}{k}$.",
              "form": "Answer as an integer.",
              "answer": "182",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{7}\\sum_{k=j}^{7} \\dfrac{8j + 6}{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{7}\\sum_{k=j}^{7} \\dfrac{8j + 6}{k} = \\sum_{k=1}^{7}\\sum_{j=1}^{k} \\dfrac{8j + 6}{k}$",
                  "reason": "Swapping the order: both double sums add the term once for each pair of whole numbers $j$ and $k$ with $1 \\le j \\le k \\le 7$."
                },
                {
                  "step": "$\\sum_{j=1}^{k} \\dfrac{8j + 6}{k} = \\dfrac{1}{k}\\sum_{j=1}^{k} (8j + 6)$",
                  "reason": "Sums split and constants come out: the inner sum now runs over $j$, so $\\dfrac{1}{k}$ is a constant and comes out of it."
                },
                {
                  "step": "$\\sum_{j=1}^{k} (8j + 6) = 8\\sum_{j=1}^{k} j + 6k$",
                  "reason": "Sums split and constants come out: the coefficient $8$ comes out of its sum, and the constant $6$ is summed $k$ times."
                },
                {
                  "step": "$8\\sum_{j=1}^{k} j + 6k = 8 \\cdot \\dfrac{k(k + 1)}{2} + 6k$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $k$ in place of $n$."
                },
                {
                  "step": "$8 \\cdot \\dfrac{k(k + 1)}{2} + 6k = 4k^2 + 10k$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The inner sum is $\\dfrac{4k^2 + 10k}{k} = 4k + 10$.",
                  "reason": "Cancelling a common factor: each term of the top is divided by $k$."
                },
                {
                  "step": "The double sum is $\\sum_{k=1}^{7} (4k + 10)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{7} (4k + 10) = 4\\sum_{k=1}^{7} k + 10 \\cdot 7$",
                  "reason": "Sums split and constants come out: the coefficient $4$ comes out of its sum, and the constant $10$ is summed $7$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{7} k = \\dfrac{7 \\cdot 8}{2} = 28$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 7$."
                },
                {
                  "step": "The sum is $4 \\cdot 28 + 10 \\cdot 7$.",
                  "reason": "Substituting a value: line 10 gives the sum that stands in line 9."
                },
                {
                  "step": "$4 \\cdot 28 + 10 \\cdot 7 = 112 + 70$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$112 + 70 = 182$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{8}\\sum_{k=j}^{8} \\dfrac{8j + 10}{k}$.",
              "form": "Answer as an integer.",
              "answer": "256",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{8}\\sum_{k=j}^{8} \\dfrac{8j + 10}{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{8}\\sum_{k=j}^{8} \\dfrac{8j + 10}{k} = \\sum_{k=1}^{8}\\sum_{j=1}^{k} \\dfrac{8j + 10}{k}$",
                  "reason": "Swapping the order: both double sums add the term once for each pair of whole numbers $j$ and $k$ with $1 \\le j \\le k \\le 8$."
                },
                {
                  "step": "$\\sum_{j=1}^{k} \\dfrac{8j + 10}{k} = \\dfrac{1}{k}\\sum_{j=1}^{k} (8j + 10)$",
                  "reason": "Sums split and constants come out: the inner sum now runs over $j$, so $\\dfrac{1}{k}$ is a constant and comes out of it."
                },
                {
                  "step": "$\\sum_{j=1}^{k} (8j + 10) = 8\\sum_{j=1}^{k} j + 10k$",
                  "reason": "Sums split and constants come out: the coefficient $8$ comes out of its sum, and the constant $10$ is summed $k$ times."
                },
                {
                  "step": "$8\\sum_{j=1}^{k} j + 10k = 8 \\cdot \\dfrac{k(k + 1)}{2} + 10k$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $k$ in place of $n$."
                },
                {
                  "step": "$8 \\cdot \\dfrac{k(k + 1)}{2} + 10k = 4k^2 + 14k$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The inner sum is $\\dfrac{4k^2 + 14k}{k} = 4k + 14$.",
                  "reason": "Cancelling a common factor: each term of the top is divided by $k$."
                },
                {
                  "step": "The double sum is $\\sum_{k=1}^{8} (4k + 14)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{8} (4k + 14) = 4\\sum_{k=1}^{8} k + 14 \\cdot 8$",
                  "reason": "Sums split and constants come out: the coefficient $4$ comes out of its sum, and the constant $14$ is summed $8$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{8} k = \\dfrac{8 \\cdot 9}{2} = 36$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 8$."
                },
                {
                  "step": "The sum is $4 \\cdot 36 + 14 \\cdot 8$.",
                  "reason": "Substituting a value: line 10 gives the sum that stands in line 9."
                },
                {
                  "step": "$4 \\cdot 36 + 14 \\cdot 8 = 144 + 112$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$144 + 112 = 256$",
                  "reason": "Order of operations, from arithmetic: the addition is worked out last."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=j}^{6} \\dfrac{4j - 9}{k}$.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{j=1}^{6}\\sum_{k=j}^{6} \\dfrac{4j - 9}{k}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{j=1}^{6}\\sum_{k=j}^{6} \\dfrac{4j - 9}{k} = \\sum_{k=1}^{6}\\sum_{j=1}^{k} \\dfrac{4j - 9}{k}$",
                  "reason": "Swapping the order: both double sums add the term once for each pair of whole numbers $j$ and $k$ with $1 \\le j \\le k \\le 6$."
                },
                {
                  "step": "$\\sum_{j=1}^{k} \\dfrac{4j - 9}{k} = \\dfrac{1}{k}\\sum_{j=1}^{k} (4j - 9)$",
                  "reason": "Sums split and constants come out: the inner sum now runs over $j$, so $\\dfrac{1}{k}$ is a constant and comes out of it."
                },
                {
                  "step": "$\\sum_{j=1}^{k} (4j - 9) = 4\\sum_{j=1}^{k} j - 9k$",
                  "reason": "Sums split and constants come out: the coefficient $4$ comes out of its sum, and the constant $-9$ is summed $k$ times."
                },
                {
                  "step": "$4\\sum_{j=1}^{k} j - 9k = 4 \\cdot \\dfrac{k(k + 1)}{2} - 9k$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $k$ in place of $n$."
                },
                {
                  "step": "$4 \\cdot \\dfrac{k(k + 1)}{2} - 9k = 2k^2 - 7k$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "The inner sum is $\\dfrac{2k^2 - 7k}{k} = 2k - 7$.",
                  "reason": "Cancelling a common factor: each term of the top is divided by $k$."
                },
                {
                  "step": "The double sum is $\\sum_{k=1}^{6} (2k - 7)$.",
                  "reason": "Double sum: the outer sum adds the values of the inner sum, one for each $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{6} (2k - 7) = 2\\sum_{k=1}^{6} k - 7 \\cdot 6$",
                  "reason": "Sums split and constants come out: the coefficient $2$ comes out of its sum, and the constant $-7$ is summed $6$ times."
                },
                {
                  "step": "$\\sum_{k=1}^{6} k = \\dfrac{6 \\cdot 7}{2} = 21$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 6$."
                },
                {
                  "step": "The sum is $2 \\cdot 21 - 7 \\cdot 6$.",
                  "reason": "Substituting a value: line 10 gives the sum that stands in line 9."
                },
                {
                  "step": "$2 \\cdot 21 - 7 \\cdot 6 = 42 - 42$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first."
                },
                {
                  "step": "$42 - 42 = 0$",
                  "reason": "Order of operations, from arithmetic: the subtraction is worked out last."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k9",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum $\\sum_{k=9}^{20} (8k - 11)$, and write that line right.",
            "given": [
              "$\\sum_{k=9}^{20} (8k - 11) = \\sum_{k=1}^{12} (8(k + 8) - 11)$",
              "$8(k + 8) - 11 = 8k + 75$",
              "$\\sum_{k=1}^{12} (8k + 75) = 8\\sum_{k=1}^{12} k + 75 \\cdot 12$",
              "$\\sum_{k=1}^{12} k = \\dfrac{12 \\cdot 13}{2} = 78$",
              "$8 \\cdot 78 + 75 \\cdot 12 = 624 + 900$",
              "$624 + 900 = 1524$",
              "The sum is $1524$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum $\\sum_{k=9}^{20} (8k - 11)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 multiplies out to $8k + 64 - 11$ and then adds $11$ to $64$ where it is taken away, so it gives $75$ in place of $53$.",
                "reason": "A sign lost: the term $-11$ of the bracket keeps its minus sign when like terms are collected."
              },
              {
                "step": "Every line other than line 2 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 2 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
              },
              {
                "step": "Line 2 written right is \"$8(k + 8) - 11 = 8k + 53$\".",
                "reason": "Worked by the same rule with every sign kept, the line is true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=13}^{47} (-2k + 4)$, and write that line right.",
              "given": [
                "$\\sum_{k=13}^{47} (-2k + 4) = \\sum_{k=1}^{35} (-2(k + 12) + 4)$",
                "$-2(k + 12) + 4 = -2k - 20$",
                "$\\sum_{k=1}^{35} (-2k - 20) = -2\\sum_{k=1}^{35} k - 20 \\cdot 35$",
                "$\\sum_{k=1}^{35} k = \\dfrac{35 \\cdot 36}{2} = 630$",
                "$-2 \\cdot 630 - 20 \\cdot 35 = -1260 + 700$",
                "$-1260 + 700 = -560$",
                "The sum is $-560$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -2*630-20*35 = -1260-700",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=13}^{47} (-2k + 4)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes away $20 \\cdot 35$ on its left and adds $700$ on its right.",
                  "reason": "A sign lost: a product that is taken away on the left is taken away on the right too."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 5 written right is \"$-2 \\cdot 630 - 20 \\cdot 35 = -1260 - 700$\".",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=3}^{38} (2k - 6)$, and write that line right.",
              "given": [
                "$\\sum_{k=3}^{38} (2k - 6) = \\sum_{k=1}^{36} (2(k + 2) - 6)$",
                "$2(k + 2) - 6 = 2k - 2$",
                "$\\sum_{k=1}^{36} (2k - 2) = 2\\sum_{k=1}^{36} k - 2 \\cdot 36$",
                "$\\sum_{k=1}^{36} k = \\dfrac{36 \\cdot 37}{2} = 666$",
                "$2 \\cdot 666 - 2 \\cdot 36 = 1332 - 72$",
                "$1332 - 72 = 1404$",
                "The sum is $1404$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 1332-72 = 1260",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=3}^{38} (2k - 6)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 adds $1332$ and $72$, but on its left one of the two carries a minus sign, so the value is $1260$, not $1404$.",
                  "reason": "A sign lost: each number keeps the sign it carries on the left side."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 6 written right is \"$1332 - 72 = 1260$\".",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=14}^{42} (-8k - 10)$, and write that line right.",
              "given": [
                "$\\sum_{k=14}^{42} (-8k - 10) = \\sum_{k=1}^{29} (-8(k + 13) - 10)$",
                "$-8(k + 13) - 10 = -8k - 94$",
                "$\\sum_{k=1}^{29} (-8k - 94) = -8\\sum_{k=1}^{29} k - 94 \\cdot 29$",
                "$\\sum_{k=1}^{29} k = \\dfrac{29 \\cdot 30}{2} = 435$",
                "$-8 \\cdot 435 - 94 \\cdot 29 = -3480 - 2726$",
                "$-3480 - 2726 = -6206$",
                "The sum is $-6206$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -8*(k+13)-10 = -8*k-114",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=14}^{42} (-8k - 10)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies out to $-8k - 104 - 10$ and then adds $10$ to $-104$ where it is taken away, so it gives $-94$ in place of $-114$.",
                  "reason": "A sign lost: the term $-10$ of the bracket keeps its minus sign when like terms are collected."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 2 written right is \"$-8(k + 13) - 10 = -8k - 114$\".",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{8}\\sum_{k=1}^{j} (12k + 7)$, and write that line right.",
            "given": [
              "$\\sum_{k=1}^{j} (12k + 7) = 12 \\cdot \\dfrac{j(j + 1)}{2} + 7j$",
              "$12 \\cdot \\dfrac{j(j + 1)}{2} + 7j = 6j^2 + 13j$",
              "$\\sum_{j=1}^{8} (6j^2 + 13j) = 6\\sum_{j=1}^{8} j^2 + 13\\sum_{j=1}^{8} j$",
              "$\\sum_{j=1}^{8} j^2 = \\left(\\dfrac{8 \\cdot 9}{2}\\right)^2 = 1296$",
              "$\\sum_{j=1}^{8} j = \\dfrac{8 \\cdot 9}{2} = 36$",
              "$6 \\cdot 1296 + 13 \\cdot 36 = 7776 + 468$",
              "$7776 + 468 = 8244$",
              "The double sum is $8244$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{8}\\sum_{k=1}^{j} (12k + 7)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 takes the sum of the squares $1^2 + 2^2 + \\dots + 8^2$ for the square of the sum $(1 + 2 + \\dots + 8)^2$.",
                "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2$ is $a^2 + 2ab + b^2$, which is not $a^2 + b^2$, so the square of a sum is not the sum of the squares."
              },
              {
                "step": "Every line other than line 4 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 4 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
              },
              {
                "step": "Line 4 written right is \"$\\sum_{j=1}^{8} j^2 = \\dfrac{8 \\cdot 9 \\cdot 17}{6} = 204$\".",
                "reason": "Sum of squares: with $n = 8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{12}\\sum_{k=1}^{j} (6k - 1)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{j} (6k - 1) = 6 \\cdot \\dfrac{j(j + 1)}{2} - j$",
                "$6 \\cdot \\dfrac{j(j + 1)}{2} - j = 3j^2 + 2j$",
                "$\\sum_{j=1}^{12} (3j^2 + 2j) = 3\\sum_{j=1}^{12} j^2 + 2\\sum_{j=1}^{12} j$",
                "$\\sum_{j=1}^{12} j = \\dfrac{12 \\cdot 13}{2} = 78$",
                "$\\sum_{j=1}^{12} j^2 = \\left(\\dfrac{12 \\cdot 13}{2}\\right)^2 = 6084$",
                "$3 \\cdot 6084 + 2 \\cdot 78 = 18{,}252 + 156$",
                "$18{,}252 + 156 = 18{,}408$",
                "The double sum is $18{,}408$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 12*13*25/6 = 650",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{12}\\sum_{k=1}^{j} (6k - 1)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes the sum of the squares $1^2 + 2^2 + \\dots + 12^2$ for the square of the sum $(1 + 2 + \\dots + 12)^2$.",
                  "reason": "A power taken term by term over a sum: by the square of a binomial, $(a + b)^2$ is $a^2 + 2ab + b^2$, which is not $a^2 + b^2$, so the square of a sum is not the sum of the squares."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 5 written right is \"$\\sum_{j=1}^{12} j^2 = \\dfrac{12 \\cdot 13 \\cdot 25}{6} = 650$\".",
                  "reason": "Sum of squares: with $n = 12$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{7}\\sum_{k=1}^{j} (8k - 9)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{j} (8k - 9) = 8 \\cdot \\dfrac{j(j + 1)}{2} - 9j$",
                "$8 \\cdot \\dfrac{j(j + 1)}{2} - 9j = 4j^2 + 13j$",
                "$\\sum_{j=1}^{7} (4j^2 + 13j) = 4\\sum_{j=1}^{7} j^2 + 13\\sum_{j=1}^{7} j$",
                "$\\sum_{j=1}^{7} j^2 = \\dfrac{7 \\cdot 8 \\cdot 15}{6} = 140$",
                "$\\sum_{j=1}^{7} j = \\dfrac{7 \\cdot 8}{2} = 28$",
                "$4 \\cdot 140 + 13 \\cdot 28 = 560 + 364$",
                "$560 + 364 = 924$",
                "The double sum is $924$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 8*j*(j+1)/2-9*j = 4*j^2-5*j",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{7}\\sum_{k=1}^{j} (8k - 9)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies out to $4j^2 + 4j - 9j$ and then adds $9$ to $4$ where it is taken away, so it gives $13j$ in place of $-5j$.",
                  "reason": "A sign lost: the term $-9j$ keeps its minus sign when like terms are collected."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 2 written right is \"$8 \\cdot \\dfrac{j(j + 1)}{2} - 9j = 4j^2 - 5j$\".",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{9}\\sum_{k=1}^{j} (6k - 11)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{j} (6k - 11) = 6 \\cdot \\dfrac{j(j + 1)}{2} - 11j$",
                "$6 \\cdot \\dfrac{j(j + 1)}{2} - 11j = 3j^2 - 8j$",
                "$\\sum_{j=1}^{9} (3j^2 - 8j) = 3\\sum_{j=1}^{9} j^2 - 8\\sum_{j=1}^{9} j$",
                "$\\sum_{j=1}^{9} j^2 = \\dfrac{9 \\cdot 10 \\cdot 19}{6} = 285$",
                "$\\sum_{j=1}^{9} j = \\dfrac{9 \\cdot 10}{2} = 45$",
                "$3 \\cdot 285 - 8 \\cdot 45 = 855 + 360$",
                "$855 + 360 = 1215$",
                "The double sum is $1215$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 3*285-8*45 = 855-360",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the double sum $\\sum_{j=1}^{9}\\sum_{k=1}^{j} (6k - 11)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 takes away $8 \\cdot 45$ on its left and adds $360$ on its right.",
                  "reason": "A sign lost: a product that is taken away on the left is taken away on the right too."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the sum as given or from the lines above it as they are written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the sum as given for line 1, and for every later line the lines above it as they are written."
                },
                {
                  "step": "Line 6 written right is \"$3 \\cdot 285 - 8 \\cdot 45 = 855 - 360$\".",
                  "reason": "Worked by the same rule with every sign kept, the line is true."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t208-k10",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{3}{7} + \\dfrac{7}{13} + \\dfrac{11}{19} + \\dots + \\dfrac{111}{169}$ equals, term by term, $\\sum_{k=1}^{28} y$, with $y$ an expression in $k$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{3}{7} + \\dfrac{7}{13} + \\dfrac{11}{19} + \\dots + \\dfrac{111}{169}$ equals, term by term, $\\sum_{k=1}^{28} y$, with $y$ an expression in $k$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The tops $3$, $7$, $11$ form an arithmetic sequence with first term $3$ and common difference $4$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $4$."
              },
              {
                "step": "The $k$th top is $3 + 4(k - 1) = 4k - 1$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The bottoms $7$, $13$, $19$ form an arithmetic sequence with first term $7$ and common difference $6$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
              },
              {
                "step": "The $k$th bottom is $7 + 6(k - 1) = 6k + 1$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The $k$th term is $\\dfrac{4k - 1}{6k + 1}$, and at $k = 28$ it is $\\dfrac{111}{169}$, the last term.",
                "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 28$."
              },
              {
                "step": "$y = \\dfrac{4k - 1}{6k + 1}$",
                "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Written in sigma notation, the sum $\\dfrac{5}{2} + \\dfrac{11}{5} + \\dfrac{17}{8} + \\dots + \\dfrac{149}{74}$ is $\\sum_{k=1}^{25} y$, where $y$ is its $k$th term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*k-1)/(3*k-1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Written in sigma notation, the sum $\\dfrac{5}{2} + \\dfrac{11}{5} + \\dfrac{17}{8} + \\dots + \\dfrac{149}{74}$ is $\\sum_{k=1}^{25} y$, where $y$ is its $k$th term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The tops $5$, $11$, $17$ form an arithmetic sequence with first term $5$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th top is $5 + 6(k - 1) = 6k - 1$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The bottoms $2$, $5$, $8$ form an arithmetic sequence with first term $2$ and common difference $3$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $3$."
                },
                {
                  "step": "The $k$th bottom is $2 + 3(k - 1) = 3k - 1$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{6k - 1}{3k - 1}$, and at $k = 25$ it is $\\dfrac{149}{74}$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 25$."
                },
                {
                  "step": "$y = \\dfrac{6k - 1}{3k - 1}$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{8} + \\dfrac{7}{10} + \\dfrac{13}{12} + \\dots + \\dfrac{85}{36}$, which has $15$ terms counted from $k = 1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*k-5)/(2*k+6)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{8} + \\dfrac{7}{10} + \\dfrac{13}{12} + \\dots + \\dfrac{85}{36}$, which has $15$ terms counted from $k = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The tops $1$, $7$, $13$ form an arithmetic sequence with first term $1$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th top is $1 + 6(k - 1) = 6k - 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The bottoms $8$, $10$, $12$ form an arithmetic sequence with first term $8$ and common difference $2$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $2$."
                },
                {
                  "step": "The $k$th bottom is $8 + 2(k - 1) = 2k + 6$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{6k - 5}{2k + 6}$, and at $k = 15$ it is $\\dfrac{85}{36}$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 15$."
                },
                {
                  "step": "$y = \\dfrac{6k - 5}{2k + 6}$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{11}{9} + \\dfrac{17}{15} + \\dfrac{23}{21} + \\dots + \\dfrac{95}{93}$ equals, term by term, $\\sum_{k=1}^{15} y$, with $y$ an expression in $k$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*k+5)/(6*k+3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{11}{9} + \\dfrac{17}{15} + \\dfrac{23}{21} + \\dots + \\dfrac{95}{93}$ equals, term by term, $\\sum_{k=1}^{15} y$, with $y$ an expression in $k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The tops $11$, $17$, $23$ form an arithmetic sequence with first term $11$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th top is $11 + 6(k - 1) = 6k + 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The bottoms $9$, $15$, $21$ form an arithmetic sequence with first term $9$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th bottom is $9 + 6(k - 1) = 6k + 3$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{6k + 5}{6k + 3}$, and at $k = 15$ it is $\\dfrac{95}{93}$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 15$."
                },
                {
                  "step": "$y = \\dfrac{6k + 5}{6k + 3}$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum $\\sum_{k=5}^{9} k(2k - 2)$, written out term by term with each value of $k$ put in and nothing worked out.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum $\\sum_{k=5}^{9} k(2k - 2)$, written out term by term with each value of $k$ put in and nothing worked out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The index $k$ takes the values $5$, $6$, $7$, $8$ and $9$.",
                "reason": "Sigma notation: the index takes each whole number from the lower limit $5$ to the upper limit $9$."
              },
              {
                "step": "The terms are $5(2 \\cdot 5 - 2)$, $6(2 \\cdot 6 - 2)$, $7(2 \\cdot 7 - 2)$, $8(2 \\cdot 8 - 2)$ and $9(2 \\cdot 9 - 2)$.",
                "reason": "Substituting a value: each value of $k$ goes in place of $k$ in the term."
              },
              {
                "step": "$y = 5(2 \\cdot 5 - 2) + 6(2 \\cdot 6 - 2) + 7(2 \\cdot 7 - 2) + 8(2 \\cdot 8 - 2) + 9(2 \\cdot 9 - 2)$",
                "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and sigma notation adds the terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Written out term by term, with each value of $k$ put in and nothing worked out, the sum $\\sum_{k=2}^{5} k(2k + 3)$ is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*(2*2+3)+3*(2*3+3)+4*(2*4+3)+5*(2*5+3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Written out term by term, with each value of $k$ put in and nothing worked out, the sum $\\sum_{k=2}^{5} k(2k + 3)$ is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The index $k$ takes the values $2$, $3$, $4$ and $5$.",
                  "reason": "Sigma notation: the index takes each whole number from the lower limit $2$ to the upper limit $5$."
                },
                {
                  "step": "The terms are $2(2 \\cdot 2 + 3)$, $3(2 \\cdot 3 + 3)$, $4(2 \\cdot 4 + 3)$ and $5(2 \\cdot 5 + 3)$.",
                  "reason": "Substituting a value: each value of $k$ goes in place of $k$ in the term."
                },
                {
                  "step": "$y = 2(2 \\cdot 2 + 3) + 3(2 \\cdot 3 + 3) + 4(2 \\cdot 4 + 3) + 5(2 \\cdot 5 + 3)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and sigma notation adds the terms."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals the sum $\\sum_{k=5}^{8} k(4k + 5)$, with one term written for each value of $k$ and nothing worked out.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5*(4*5+5)+6*(4*6+5)+7*(4*7+5)+8*(4*8+5)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals the sum $\\sum_{k=5}^{8} k(4k + 5)$, with one term written for each value of $k$ and nothing worked out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The index $k$ takes the values $5$, $6$, $7$ and $8$.",
                  "reason": "Sigma notation: the index takes each whole number from the lower limit $5$ to the upper limit $8$."
                },
                {
                  "step": "The terms are $5(4 \\cdot 5 + 5)$, $6(4 \\cdot 6 + 5)$, $7(4 \\cdot 7 + 5)$ and $8(4 \\cdot 8 + 5)$.",
                  "reason": "Substituting a value: each value of $k$ goes in place of $k$ in the term."
                },
                {
                  "step": "$y = 5(4 \\cdot 5 + 5) + 6(4 \\cdot 6 + 5) + 7(4 \\cdot 7 + 5) + 8(4 \\cdot 8 + 5)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and sigma notation adds the terms."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum $\\sum_{k=3}^{7} k(3k - 1)$, written out term by term with each value of $k$ put in and nothing worked out.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*(3*3-1)+4*(3*4-1)+5*(3*5-1)+6*(3*6-1)+7*(3*7-1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum $\\sum_{k=3}^{7} k(3k - 1)$, written out term by term with each value of $k$ put in and nothing worked out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The index $k$ takes the values $3$, $4$, $5$, $6$ and $7$.",
                  "reason": "Sigma notation: the index takes each whole number from the lower limit $3$ to the upper limit $7$."
                },
                {
                  "step": "The terms are $3(3 \\cdot 3 - 1)$, $4(3 \\cdot 4 - 1)$, $5(3 \\cdot 5 - 1)$, $6(3 \\cdot 6 - 1)$ and $7(3 \\cdot 7 - 1)$.",
                  "reason": "Substituting a value: each value of $k$ goes in place of $k$ in the term."
                },
                {
                  "step": "$y = 3(3 \\cdot 3 - 1) + 4(3 \\cdot 4 - 1) + 5(3 \\cdot 5 - 1) + 6(3 \\cdot 6 - 1) + 7(3 \\cdot 7 - 1)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and sigma notation adds the terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the double sum $\\sum_{j=3}^{4}\\sum_{k=3}^{5} (7j + 5k)$, written out as one bracket for each value of $j$, with nothing worked out.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the double sum $\\sum_{j=3}^{4}\\sum_{k=3}^{5} (7j + 5k)$, written out as one bracket for each value of $j$, with nothing worked out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The outer index $j$ takes the values $3$ and $4$, and for each of them the inner index $k$ takes the values $3$, $4$ and $5$.",
                "reason": "Double sum: the inner sum is written out once for each value of the outer index."
              },
              {
                "step": "For $j = 3$ the inner sum is $(7 \\cdot 3 + 5 \\cdot 3) + (7 \\cdot 3 + 5 \\cdot 4) + (7 \\cdot 3 + 5 \\cdot 5)$.",
                "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
              },
              {
                "step": "For $j = 4$ the inner sum is $(7 \\cdot 4 + 5 \\cdot 3) + (7 \\cdot 4 + 5 \\cdot 4) + (7 \\cdot 4 + 5 \\cdot 5)$.",
                "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
              },
              {
                "step": "$y = \\left((7 \\cdot 3 + 5 \\cdot 3) + (7 \\cdot 3 + 5 \\cdot 4) + (7 \\cdot 3 + 5 \\cdot 5)\\right) + \\left((7 \\cdot 4 + 5 \\cdot 3) + (7 \\cdot 4 + 5 \\cdot 4) + (7 \\cdot 4 + 5 \\cdot 5)\\right)$",
                "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and the outer sum adds the two inner sums."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Written out as one bracket for each value of $j$, with nothing worked out, the double sum $\\sum_{j=2}^{3}\\sum_{k=1}^{3} (3j + 7k)$ is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = ((3*2+7*1)+(3*2+7*2)+(3*2+7*3))+((3*3+7*1)+(3*3+7*2)+(3*3+7*3))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Written out as one bracket for each value of $j$, with nothing worked out, the double sum $\\sum_{j=2}^{3}\\sum_{k=1}^{3} (3j + 7k)$ is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer index $j$ takes the values $2$ and $3$, and for each of them the inner index $k$ takes the values $1$, $2$ and $3$.",
                  "reason": "Double sum: the inner sum is written out once for each value of the outer index."
                },
                {
                  "step": "For $j = 2$ the inner sum is $(3 \\cdot 2 + 7 \\cdot 1) + (3 \\cdot 2 + 7 \\cdot 2) + (3 \\cdot 2 + 7 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "For $j = 3$ the inner sum is $(3 \\cdot 3 + 7 \\cdot 1) + (3 \\cdot 3 + 7 \\cdot 2) + (3 \\cdot 3 + 7 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "$y = \\left((3 \\cdot 2 + 7 \\cdot 1) + (3 \\cdot 2 + 7 \\cdot 2) + (3 \\cdot 2 + 7 \\cdot 3)\\right) + \\left((3 \\cdot 3 + 7 \\cdot 1) + (3 \\cdot 3 + 7 \\cdot 2) + (3 \\cdot 3 + 7 \\cdot 3)\\right)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and the outer sum adds the two inner sums."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals the double sum $\\sum_{j=1}^{2}\\sum_{k=2}^{3} (2j + 7k)$, each inner sum written out in a bracket of its own and nothing worked out.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = ((2*1+7*2)+(2*1+7*3))+((2*2+7*2)+(2*2+7*3))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals the double sum $\\sum_{j=1}^{2}\\sum_{k=2}^{3} (2j + 7k)$, each inner sum written out in a bracket of its own and nothing worked out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer index $j$ takes the values $1$ and $2$, and for each of them the inner index $k$ takes the values $2$ and $3$.",
                  "reason": "Double sum: the inner sum is written out once for each value of the outer index."
                },
                {
                  "step": "For $j = 1$ the inner sum is $(2 \\cdot 1 + 7 \\cdot 2) + (2 \\cdot 1 + 7 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "For $j = 2$ the inner sum is $(2 \\cdot 2 + 7 \\cdot 2) + (2 \\cdot 2 + 7 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "$y = \\left((2 \\cdot 1 + 7 \\cdot 2) + (2 \\cdot 1 + 7 \\cdot 3)\\right) + \\left((2 \\cdot 2 + 7 \\cdot 2) + (2 \\cdot 2 + 7 \\cdot 3)\\right)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and the outer sum adds the two inner sums."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the double sum $\\sum_{j=3}^{4}\\sum_{k=2}^{3} (2j + 6k)$, written out as one bracket for each value of $j$, with nothing worked out.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = ((2*3+6*2)+(2*3+6*3))+((2*4+6*2)+(2*4+6*3))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the double sum $\\sum_{j=3}^{4}\\sum_{k=2}^{3} (2j + 6k)$, written out as one bracket for each value of $j$, with nothing worked out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer index $j$ takes the values $3$ and $4$, and for each of them the inner index $k$ takes the values $2$ and $3$.",
                  "reason": "Double sum: the inner sum is written out once for each value of the outer index."
                },
                {
                  "step": "For $j = 3$ the inner sum is $(2 \\cdot 3 + 6 \\cdot 2) + (2 \\cdot 3 + 6 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "For $j = 4$ the inner sum is $(2 \\cdot 4 + 6 \\cdot 2) + (2 \\cdot 4 + 6 \\cdot 3)$.",
                  "reason": "Sigma notation, with substituting a value: each value of $k$ goes into the term, with $j$ held fixed."
                },
                {
                  "step": "$y = \\left((2 \\cdot 3 + 6 \\cdot 2) + (2 \\cdot 3 + 6 \\cdot 3)\\right) + \\left((2 \\cdot 4 + 6 \\cdot 2) + (2 \\cdot 4 + 6 \\cdot 3)\\right)$",
                  "reason": "Writing a sentence as an equation: the word for \"is\" gives the equals sign, and the outer sum adds the two inner sums."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t208-p1",
      "method": "direct proof",
      "statement": "For every whole number $n$ from $1$ up, all numbers $a_1$ to $a_n$ and $b_1$ to $b_n$, and every number $c$, $\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$ and $\\sum_{k=1}^{n} ca_k = c\\sum_{k=1}^{n} a_k$.",
      "idea": "Write each sum out term by term. A sum of numbers is the same in every order and grouping, so the terms $a_k$ and the terms $b_k$ are collected apart. A factor $c$ that stands in every term comes out by the distributive law.",
      "lines": [
        {
          "line": "$\\sum_{k=1}^{n} (a_k + b_k) = (a_1 + b_1) + (a_2 + b_2) + \\dots + (a_n + b_n)$",
          "reason": "Sigma notation: the term is written once for each whole number $k$ from $1$ to $n$."
        },
        {
          "line": "$(a_1 + b_1) + (a_2 + b_2) + \\dots + (a_n + b_n) = (a_1 + a_2 + \\dots + a_n) + (b_1 + b_2 + \\dots + b_n)$",
          "reason": "The associative and commutative laws of addition, from arithmetic: the same numbers are added in another order and grouping."
        },
        {
          "line": "$(a_1 + a_2 + \\dots + a_n) + (b_1 + b_2 + \\dots + b_n) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$",
          "reason": "Sigma notation, read from right to left for each bracket."
        },
        {
          "line": "So $\\sum_{k=1}^{n} (a_k + b_k) = \\sum_{k=1}^{n} a_k + \\sum_{k=1}^{n} b_k$.",
          "reason": "Transitive property: lines 1, 2 and 3."
        },
        {
          "line": "$\\sum_{k=1}^{n} ca_k = ca_1 + ca_2 + \\dots + ca_n$",
          "reason": "Sigma notation: the term is written once for each whole number $k$ from $1$ to $n$."
        },
        {
          "line": "$ca_1 + ca_2 + \\dots + ca_n = c(a_1 + a_2 + \\dots + a_n)$",
          "reason": "The distributive law, read from right to left: the factor $c$ stands in every term."
        },
        {
          "line": "$c(a_1 + a_2 + \\dots + a_n) = c\\sum_{k=1}^{n} a_k$",
          "reason": "Sigma notation, read from right to left for the bracket."
        },
        {
          "line": "Therefore $\\sum_{k=1}^{n} ca_k = c\\sum_{k=1}^{n} a_k$.",
          "reason": "Transitive property: lines 5, 6 and 7."
        }
      ]
    },
    {
      "id": "t208-p2",
      "method": "direct proof",
      "statement": "For all whole numbers $m$ and $n$ from $1$ up and all numbers $a_1$ to $a_m$ and $b_1$ to $b_n$, $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_jb_k = \\left(\\sum_{j=1}^{m} a_j\\right)\\left(\\sum_{k=1}^{n} b_k\\right)$.",
      "idea": "In the inner sum the factor $a_j$ has no $k$ in it, so it comes out. What stays inside, the sum of the numbers $b_k$, is the same number for every $j$, so it comes out of the outer sum in its turn.",
      "lines": [
        {
          "line": "For each whole number $j$ from $1$ to $m$, $\\sum_{k=1}^{n} a_jb_k = a_j\\sum_{k=1}^{n} b_k$.",
          "reason": "Sums split and constants come out: the number $a_j$ has no $k$ in it, so it is a constant in the sum over $k$."
        },
        {
          "line": "So $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_jb_k = \\sum_{j=1}^{m} \\left(a_j\\sum_{k=1}^{n} b_k\\right)$.",
          "reason": "Double sum: the outer sum adds the values of the inner sum, and line 1 gives each of them."
        },
        {
          "line": "The number $\\sum_{k=1}^{n} b_k$ has no $j$ in it.",
          "reason": "Sigma notation: it stands for $b_1 + b_2 + \\dots + b_n$, and none of these numbers changes with $j$."
        },
        {
          "line": "For each whole number $j$ from $1$ to $m$, $a_j\\sum_{k=1}^{n} b_k = \\left(\\sum_{k=1}^{n} b_k\\right)a_j$.",
          "reason": "The commutative law of multiplication, from arithmetic."
        },
        {
          "line": "So $\\sum_{j=1}^{m} \\left(a_j\\sum_{k=1}^{n} b_k\\right) = \\sum_{j=1}^{m} \\left(\\sum_{k=1}^{n} b_k\\right)a_j$.",
          "reason": "Substituting a value: line 4 gives each term of the sum on the left."
        },
        {
          "line": "$\\sum_{j=1}^{m} \\left(\\sum_{k=1}^{n} b_k\\right)a_j = \\left(\\sum_{k=1}^{n} b_k\\right)\\sum_{j=1}^{m} a_j$",
          "reason": "Sums split and constants come out: by line 3 the sum over $k$ is a constant in the sum over $j$."
        },
        {
          "line": "$\\left(\\sum_{k=1}^{n} b_k\\right)\\sum_{j=1}^{m} a_j = \\left(\\sum_{j=1}^{m} a_j\\right)\\left(\\sum_{k=1}^{n} b_k\\right)$",
          "reason": "The commutative law of multiplication, from arithmetic."
        },
        {
          "line": "Therefore $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_jb_k = \\left(\\sum_{j=1}^{m} a_j\\right)\\left(\\sum_{k=1}^{n} b_k\\right)$.",
          "reason": "Transitive property: lines 2, 5, 6 and 7."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t208-s1",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $m$ and $n$ with $1 \\le m \\le n$ and every number $c$, $\\sum_{k=m}^{n} c = c(n - m + 1)$. Facts it may use: Sigma notation, Shifting the index, multiplication as repeated addition (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "$\\sum_{k=m}^{n} c = \\sum_{k=1}^{n-m+1} c$",
            "reason": "Shifting the index: both limits go down by $m - 1$, and the term $c$ has no $k$ in it, so it stays as it is."
          },
          {
            "line": "The sum $\\sum_{k=1}^{n-m+1} c$ is $c + c + \\dots + c$, with $n - m + 1$ terms.",
            "reason": "Sigma notation: the term is written once for each whole number from $1$ to $n - m + 1$."
          },
          {
            "line": "The sum of $n - m + 1$ terms, each equal to $c$, is $c(n - m + 1)$.",
            "reason": "Multiplication as repeated addition, from arithmetic."
          },
          {
            "line": "Therefore $\\sum_{k=m}^{n} c = c(n - m + 1)$.",
            "reason": "Transitive property: lines 1, 2 and 3."
          }
        ]
      }
    },
    {
      "id": "t208-s2",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n$ from $1$ up and all numbers $a_1$ to $a_n$ and $b_1$ to $b_n$, $\\prod_{k=1}^{n} a_kb_k = \\left(\\prod_{k=1}^{n} a_k\\right)\\left(\\prod_{k=1}^{n} b_k\\right)$. Facts it may use: Product notation, the commutative and associative laws of multiplication (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "$\\prod_{k=1}^{n} a_kb_k = (a_1b_1)(a_2b_2) \\cdots (a_nb_n)$",
            "reason": "Product notation: the factor is written once for each whole number $k$ from $1$ to $n$."
          },
          {
            "line": "$(a_1b_1)(a_2b_2) \\cdots (a_nb_n) = (a_1a_2 \\cdots a_n)(b_1b_2 \\cdots b_n)$",
            "reason": "The commutative and associative laws of multiplication, from arithmetic: the same numbers are multiplied in another order and grouping."
          },
          {
            "line": "$(a_1a_2 \\cdots a_n)(b_1b_2 \\cdots b_n) = \\left(\\prod_{k=1}^{n} a_k\\right)\\left(\\prod_{k=1}^{n} b_k\\right)$",
            "reason": "Product notation, read from right to left for each bracket."
          },
          {
            "line": "Therefore $\\prod_{k=1}^{n} a_kb_k = \\left(\\prod_{k=1}^{n} a_k\\right)\\left(\\prod_{k=1}^{n} b_k\\right)$.",
            "reason": "Transitive property: lines 1, 2 and 3."
          }
        ]
      }
    },
    {
      "id": "t208-s3",
      "method": "direct proof",
      "statement": "Prove that for all integers $m$ and $n$ with $m \\le n$, every integer $c$ and all numbers $a_m$ to $a_n$, $\\sum_{k=m+c}^{n+c} a_{k-c} = \\sum_{k=m}^{n} a_k$. Facts it may use: Sigma notation, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "$\\sum_{k=m+c}^{n+c} a_{k-c} = a_{(m+c)-c} + a_{(m+c+1)-c} + \\dots + a_{(n+c)-c}$",
            "reason": "Sigma notation: the term is written once for each integer $k$ from $m + c$ to $n + c$."
          },
          {
            "line": "The numbers $(m + c) - c$, $(m + c + 1) - c$ and so on up to $(n + c) - c$ are $m$, $m + 1$ and so on up to $n$.",
            "reason": "Collecting like terms: in each of them $c$ is added once and taken away once."
          },
          {
            "line": "So $\\sum_{k=m+c}^{n+c} a_{k-c} = a_m + a_{m+1} + \\dots + a_n$.",
            "reason": "Substituting a value: line 2 gives each number that stands under an $a$ in line 1."
          },
          {
            "line": "$a_m + a_{m+1} + \\dots + a_n = \\sum_{k=m}^{n} a_k$",
            "reason": "Sigma notation, read from right to left."
          },
          {
            "line": "Therefore $\\sum_{k=m+c}^{n+c} a_{k-c} = \\sum_{k=m}^{n} a_k$.",
            "reason": "Transitive property: lines 3 and 4."
          }
        ]
      }
    },
    {
      "id": "t208-s4",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n$ from $2$ up and all numbers $a_1$ to $a_n$, $\\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n-1} a_k = a_n$. Facts it may use: Sigma notation, the associative law of addition (from arithmetic), adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "$\\sum_{k=1}^{n} a_k = a_1 + a_2 + \\dots + a_{n-1} + a_n$",
            "reason": "Sigma notation: the term is written once for each whole number $k$ from $1$ to $n$."
          },
          {
            "line": "$a_1 + a_2 + \\dots + a_{n-1} + a_n = (a_1 + a_2 + \\dots + a_{n-1}) + a_n$",
            "reason": "The associative law of addition, from arithmetic."
          },
          {
            "line": "The bracket $a_1 + a_2 + \\dots + a_{n-1}$ is $\\sum_{k=1}^{n-1} a_k$.",
            "reason": "Sigma notation, read from right to left: the upper limit $n - 1$ is $1$ or more, as $n$ is $2$ or more."
          },
          {
            "line": "So $\\sum_{k=1}^{n} a_k = \\sum_{k=1}^{n-1} a_k + a_n$.",
            "reason": "Transitive property: lines 1, 2 and 3."
          },
          {
            "line": "Therefore $\\sum_{k=1}^{n} a_k - \\sum_{k=1}^{n-1} a_k = a_n$.",
            "reason": "Adding the same number to both sides: the opposite of $\\sum_{k=1}^{n-1} a_k$ is added to both sides of line 4."
          }
        ]
      }
    },
    {
      "id": "t208-s5",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $m$ and $n$ from $1$ up and all numbers $a_{jk}$, one for each pair of whole numbers $j$ from $1$ to $m$ and $k$ from $1$ to $n$, $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{m} a_{jk}$. Facts it may use: Double sum, Sigma notation, Sums split and constants come out.",
      "check": {
        "proof": [
          {
            "line": "$\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_{jk} = \\sum_{j=1}^{m} (a_{j1} + a_{j2} + \\dots + a_{jn})$",
            "reason": "Double sum, with Sigma notation: the inner sum is written out for each $j$."
          },
          {
            "line": "$\\sum_{j=1}^{m} (a_{j1} + a_{j2} + \\dots + a_{jn}) = \\sum_{j=1}^{m} a_{j1} + \\sum_{j=1}^{m} a_{j2} + \\dots + \\sum_{j=1}^{m} a_{jn}$",
            "reason": "Sums split and constants come out: a sum of $n$ terms is split one term at a time, so each of the $n$ terms is summed alone."
          },
          {
            "line": "$\\sum_{j=1}^{m} a_{j1} + \\sum_{j=1}^{m} a_{j2} + \\dots + \\sum_{j=1}^{m} a_{jn} = \\sum_{k=1}^{n} \\left(\\sum_{j=1}^{m} a_{jk}\\right)$",
            "reason": "Sigma notation, read from right to left: the $k$th term of the sum on the left is $\\sum_{j=1}^{m} a_{jk}$."
          },
          {
            "line": "Therefore $\\sum_{j=1}^{m}\\sum_{k=1}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{m} a_{jk}$.",
            "reason": "Transitive property: lines 1, 2 and 3, where the right side of line 3 is the double sum with the sum over $k$ outside."
          }
        ]
      }
    },
    {
      "id": "t208-s6",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n$ from $1$ up and all numbers $a_{jk}$, one for each pair of whole numbers $j$ and $k$ with $1 \\le j \\le k \\le n$, $\\sum_{j=1}^{n}\\sum_{k=j}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{k} a_{jk}$. Facts it may use: Double sum, Sigma notation, Swapping the order for limits that hold no index, adding $0$ changes nothing (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "For whole numbers $j$ and $k$ from $1$ to $n$, let $b_{jk} = a_{jk}$ where $j \\le k$ and $b_{jk} = 0$ where $j > k$.",
            "reason": "A definition: each pair now has a number, so both orders of summing run over the same square of pairs."
          },
          {
            "line": "For each $j$, $\\sum_{k=1}^{n} b_{jk} = \\sum_{k=j}^{n} a_{jk}$.",
            "reason": "Sigma notation: the terms with $k$ below $j$ are $0$, adding $0$ changes nothing, and the other terms are the numbers $a_{jk}$ with $k$ from $j$ to $n$."
          },
          {
            "line": "For each $k$, $\\sum_{j=1}^{n} b_{jk} = \\sum_{j=1}^{k} a_{jk}$.",
            "reason": "Sigma notation: the terms with $j$ above $k$ are $0$, adding $0$ changes nothing, and the other terms are the numbers $a_{jk}$ with $j$ from $1$ to $k$."
          },
          {
            "line": "$\\sum_{j=1}^{n}\\sum_{k=1}^{n} b_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{n} b_{jk}$",
            "reason": "Swapping the order: the limits $1$ and $n$ of each sum hold no index."
          },
          {
            "line": "Therefore $\\sum_{j=1}^{n}\\sum_{k=j}^{n} a_{jk} = \\sum_{k=1}^{n}\\sum_{j=1}^{k} a_{jk}$.",
            "reason": "Substituting a value: line 2 gives each inner sum on the left side of line 4, and line 3 gives each inner sum on its right side."
          }
        ]
      }
    },
    {
      "id": "t208-s7",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $m$ and $n$ from $1$ up and all numbers $b$ and $c$ other than $1$, $\\sum_{j=1}^{m}\\sum_{k=1}^{n} b^jc^k = \\dfrac{b(b^m - 1)}{b - 1} \\cdot \\dfrac{c(c^n - 1)}{c - 1}$. Facts it may use: Product of two sums, the sum of $n$ terms of a geometric series.",
      "check": {
        "proof": [
          {
            "line": "$\\sum_{j=1}^{m}\\sum_{k=1}^{n} b^jc^k = \\left(\\sum_{j=1}^{m} b^j\\right)\\left(\\sum_{k=1}^{n} c^k\\right)$",
            "reason": "Product of two sums: the term is the factor $b^j$, with no $k$ in it, times the factor $c^k$, with no $j$ in it, and the limits hold no index."
          },
          {
            "line": "$\\sum_{j=1}^{m} b^j = \\dfrac{b(b^m - 1)}{b - 1}$",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$: the sum is a geometric series with first term $b$, common ratio $b$ and $m$ terms, and $b \\ne 1$."
          },
          {
            "line": "$\\sum_{k=1}^{n} c^k = \\dfrac{c(c^n - 1)}{c - 1}$",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$: the sum is a geometric series with first term $c$, common ratio $c$ and $n$ terms, and $c \\ne 1$."
          },
          {
            "line": "Therefore $\\sum_{j=1}^{m}\\sum_{k=1}^{n} b^jc^k = \\dfrac{b(b^m - 1)}{b - 1} \\cdot \\dfrac{c(c^n - 1)}{c - 1}$.",
            "reason": "Substituting a value: lines 2 and 3 go into line 1, each value in place of its sum."
          }
        ]
      }
    }
  ]
}
