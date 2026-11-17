export default {
  "number": 227,
  "title": "Sums of powers and of polynomial terms",
  "section": 19,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "561-566"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\sum_{k=1}^{40} (7k^3 + 9k^2 + 3k - 9)$.",
    "form": "Answer as an integer.",
    "answer": "4908160",
    "solution": [
      "Evaluate $\\sum_{k=1}^{40} (7k^3 + 9k^2 + 3k - 9)$.",
      "$\\sum_{k=1}^{40} (7k^3 + 9k^2 + 3k - 9) = 7\\sum_{k=1}^{40} k^3 + 9\\sum_{k=1}^{40} k^2 + 3\\sum_{k=1}^{40} k - 9 \\cdot 40$",
      "$\\sum_{k=1}^{40} k^3 = \\left(\\dfrac{40 \\cdot 41}{2}\\right)^2 = 672{,}400$",
      "$\\sum_{k=1}^{40} k^2 = \\dfrac{40 \\cdot 41 \\cdot 81}{6} = 22{,}140$",
      "$\\sum_{k=1}^{40} k = \\dfrac{40 \\cdot 41}{2} = 820$",
      "The sum is $7 \\cdot 672{,}400 + 9 \\cdot 22{,}140 + 3 \\cdot 820 - 9 \\cdot 40$.",
      "$7 \\cdot 672{,}400 + 9 \\cdot 22{,}140 + 3 \\cdot 820 - 9 \\cdot 40 = 4{,}706{,}800 + 199{,}260 + 2460 - 360$",
      "$4{,}706{,}800 + 199{,}260 + 2460 - 360 = 4{,}908{,}160$"
    ]
  },
  "ideas": [
    {
      "name": "A sum of polynomial terms splits into power sums",
      "concrete": "The sum $\\sum_{k=1}^{6} (2k^2 + 17)$ is $2\\sum_{k=1}^{6} k^2 + 17 \\cdot 6$: the constant $17$ is added once for each of the $6$ values of $k$, so it is $2 \\cdot 91 + 102 = 284$.",
      "general": "For a whole number $n$ from $1$ up and numbers $a$, $b$, $c$ and $d$, the sum $\\sum_{k=1}^{n} (ak^3 + bk^2 + ck + d)$ is $a\\left(\\dfrac{n(n + 1)}{2}\\right)^2 + b \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + c \\cdot \\dfrac{n(n + 1)}{2} + dn$: each power of $k$ is replaced by its power sum, and the constant $d$ is counted $n$ times."
    }
  ],
  "kinds": [
    {
      "id": "t227-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\sum_{k=1}^{17} (2k^3 + 4k^2 - 7k - 9)$.",
            "lines": [
              {
                "step": "Evaluate $\\sum_{k=1}^{17} (2k^3 + 4k^2 - 7k - 9)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sum_{k=1}^{17} (2k^3 + 4k^2 - 7k - 9) = 2\\sum_{k=1}^{17} k^3 + 4\\sum_{k=1}^{17} k^2 - 7\\sum_{k=1}^{17} k - 9 \\cdot 17$",
                "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant term $-9$ is summed $17$ times, once for each value of $k$."
              },
              {
                "step": "$\\sum_{k=1}^{17} k^3 = \\left(\\dfrac{17 \\cdot 18}{2}\\right)^2 = 23{,}409$",
                "reason": "Sum of cubes: with $n = 17$."
              },
              {
                "step": "$\\sum_{k=1}^{17} k^2 = \\dfrac{17 \\cdot 18 \\cdot 35}{6} = 1785$",
                "reason": "Sum of squares: with $n = 17$."
              },
              {
                "step": "$\\sum_{k=1}^{17} k = \\dfrac{17 \\cdot 18}{2} = 153$",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 17$."
              },
              {
                "step": "The sum is $2 \\cdot 23{,}409 + 4 \\cdot 1785 - 7 \\cdot 153 - 9 \\cdot 17$.",
                "reason": "Substituting a value: lines 3, 4 and 5 go into line 2, each value in place of its sum."
              },
              {
                "step": "$2 \\cdot 23{,}409 + 4 \\cdot 1785 - 7 \\cdot 153 - 9 \\cdot 17 = 46{,}818 + 7140 - 1071 - 153$",
                "reason": "Order of operations: the products are worked out first."
              },
              {
                "step": "$46{,}818 + 7140 - 1071 - 153 = 52{,}734$",
                "reason": "Order of operations: the additions and subtractions run from left to right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\sum_{k=1}^{44} (7k^3 + 3k^2 + 5k - 8)$.",
              "form": "Answer as an integer.",
              "answer": "6953408",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{44} (7k^3 + 3k^2 + 5k - 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{44} (7k^3 + 3k^2 + 5k - 8) = 7\\sum_{k=1}^{44} k^3 + 3\\sum_{k=1}^{44} k^2 + 5\\sum_{k=1}^{44} k - 8 \\cdot 44$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant term $-8$ is summed $44$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{44} k^3 = \\left(\\dfrac{44 \\cdot 45}{2}\\right)^2 = 980{,}100$",
                  "reason": "Sum of cubes: with $n = 44$."
                },
                {
                  "step": "$\\sum_{k=1}^{44} k^2 = \\dfrac{44 \\cdot 45 \\cdot 89}{6} = 29{,}370$",
                  "reason": "Sum of squares: with $n = 44$."
                },
                {
                  "step": "$\\sum_{k=1}^{44} k = \\dfrac{44 \\cdot 45}{2} = 990$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 44$."
                },
                {
                  "step": "The sum is $7 \\cdot 980{,}100 + 3 \\cdot 29{,}370 + 5 \\cdot 990 - 8 \\cdot 44$.",
                  "reason": "Substituting a value: lines 3, 4 and 5 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$7 \\cdot 980{,}100 + 3 \\cdot 29{,}370 + 5 \\cdot 990 - 8 \\cdot 44 = 6{,}860{,}700 + 88{,}110 + 4950 - 352$",
                  "reason": "Order of operations: the products are worked out first."
                },
                {
                  "step": "$6{,}860{,}700 + 88{,}110 + 4950 - 352 = 6{,}953{,}408$",
                  "reason": "Order of operations: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{41} (3k^3 - 7k^2 - 2k - 8)$.",
              "form": "Answer as an integer.",
              "answer": "2055166",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{41} (3k^3 - 7k^2 - 2k - 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{41} (3k^3 - 7k^2 - 2k - 8) = 3\\sum_{k=1}^{41} k^3 - 7\\sum_{k=1}^{41} k^2 - 2\\sum_{k=1}^{41} k - 8 \\cdot 41$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant term $-8$ is summed $41$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{41} k^3 = \\left(\\dfrac{41 \\cdot 42}{2}\\right)^2 = 741{,}321$",
                  "reason": "Sum of cubes: with $n = 41$."
                },
                {
                  "step": "$\\sum_{k=1}^{41} k^2 = \\dfrac{41 \\cdot 42 \\cdot 83}{6} = 23{,}821$",
                  "reason": "Sum of squares: with $n = 41$."
                },
                {
                  "step": "$\\sum_{k=1}^{41} k = \\dfrac{41 \\cdot 42}{2} = 861$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 41$."
                },
                {
                  "step": "The sum is $3 \\cdot 741{,}321 - 7 \\cdot 23{,}821 - 2 \\cdot 861 - 8 \\cdot 41$.",
                  "reason": "Substituting a value: lines 3, 4 and 5 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$3 \\cdot 741{,}321 - 7 \\cdot 23{,}821 - 2 \\cdot 861 - 8 \\cdot 41 = 2{,}223{,}963 - 166{,}747 - 1722 - 328$",
                  "reason": "Order of operations: the products are worked out first."
                },
                {
                  "step": "$2{,}223{,}963 - 166{,}747 - 1722 - 328 = 2{,}055{,}166$",
                  "reason": "Order of operations: the additions and subtractions run from left to right."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\sum_{k=1}^{48} (5k^3 - 9k^2 + 5k - 4)$.",
              "form": "Answer as an integer.",
              "answer": "6578352",
              "lines": [
                {
                  "step": "Evaluate $\\sum_{k=1}^{48} (5k^3 - 9k^2 + 5k - 4)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sum_{k=1}^{48} (5k^3 - 9k^2 + 5k - 4) = 5\\sum_{k=1}^{48} k^3 - 9\\sum_{k=1}^{48} k^2 + 5\\sum_{k=1}^{48} k - 4 \\cdot 48$",
                  "reason": "Sums split and constants come out: each term is summed alone, each coefficient comes out of its sum, and the constant term $-4$ is summed $48$ times, once for each value of $k$."
                },
                {
                  "step": "$\\sum_{k=1}^{48} k^3 = \\left(\\dfrac{48 \\cdot 49}{2}\\right)^2 = 1{,}382{,}976$",
                  "reason": "Sum of cubes: with $n = 48$."
                },
                {
                  "step": "$\\sum_{k=1}^{48} k^2 = \\dfrac{48 \\cdot 49 \\cdot 97}{6} = 38{,}024$",
                  "reason": "Sum of squares: with $n = 48$."
                },
                {
                  "step": "$\\sum_{k=1}^{48} k = \\dfrac{48 \\cdot 49}{2} = 1176$",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: with $n = 48$."
                },
                {
                  "step": "The sum is $5 \\cdot 1{,}382{,}976 - 9 \\cdot 38{,}024 + 5 \\cdot 1176 - 4 \\cdot 48$.",
                  "reason": "Substituting a value: lines 3, 4 and 5 go into line 2, each value in place of its sum."
                },
                {
                  "step": "$5 \\cdot 1{,}382{,}976 - 9 \\cdot 38{,}024 + 5 \\cdot 1176 - 4 \\cdot 48 = 6{,}914{,}880 - 342{,}216 + 5880 - 192$",
                  "reason": "Order of operations: the products are worked out first."
                },
                {
                  "step": "$6{,}914{,}880 - 342{,}216 + 5880 - 192 = 6{,}578{,}352$",
                  "reason": "Order of operations: the additions and subtractions run from left to right."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t227-k2",
      "forms": [
        {
          "example": {
            "problem": "Find a closed form in $n$ for the sum $13 \\cdot 12 + 20 \\cdot 18 + 27 \\cdot 24 + \\dots + (7n + 6)(6n + 6)$.",
            "lines": [
              {
                "step": "Find a closed form in $n$ for the sum $13 \\cdot 12 + 20 \\cdot 18 + 27 \\cdot 24 + \\dots + (7n + 6)(6n + 6)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum is $\\sum_{k=1}^{n} (7k + 6)(6k + 6)$.",
                "reason": "Sigma notation: the first factors $13, 20, 27$ go up by $7$ and the second factors $12, 18, 24$ go up by $6$, so the $k$th term is $(7k + 6)(6k + 6)$, and the last term is the $n$th."
              },
              {
                "step": "$(7k + 6)(6k + 6) = 42k^2 + 78k + 36$",
                "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
              },
              {
                "step": "$\\sum_{k=1}^{n} (42k^2 + 78k + 36) = 42\\sum_{k=1}^{n} k^2 + 78\\sum_{k=1}^{n} k + 36n$",
                "reason": "Sums split and constants come out: the constant term $36$ is summed $n$ times."
              },
              {
                "step": "The sum is $42 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 78\\sum_{k=1}^{n} k + 36n$.",
                "reason": "Sum of squares: it goes in place of the first sum."
              },
              {
                "step": "The sum is $42 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 78 \\cdot \\dfrac{n(n + 1)}{2} + 36n$.",
                "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the second sum."
              },
              {
                "step": "$42 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} = 14n^3 + 21n^2 + 7n$",
                "reason": "Multiplying out: $n(n + 1)(2n + 1) = 2n^3 + 3n^2 + n$, and each term is multiplied by the number in front."
              },
              {
                "step": "$78 \\cdot \\dfrac{n(n + 1)}{2} = 39n^2 + 39n$",
                "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
              },
              {
                "step": "The sum is $14n^3 + 60n^2 + 82n$.",
                "reason": "Collecting like terms: the terms in $n^3$, $n^2$ and $n$ are each added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form in $n$ for the sum $10 \\cdot 7 + 16 \\cdot 11 + 22 \\cdot 15 + \\dots + (6n + 4)(4n + 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*n^3+29*n^2+33*n",
              "lines": [
                {
                  "step": "Find a closed form in $n$ for the sum $10 \\cdot 7 + 16 \\cdot 11 + 22 \\cdot 15 + \\dots + (6n + 4)(4n + 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $\\sum_{k=1}^{n} (6k + 4)(4k + 3)$.",
                  "reason": "Sigma notation: the first factors $10, 16, 22$ go up by $6$ and the second factors $7, 11, 15$ go up by $4$, so the $k$th term is $(6k + 4)(4k + 3)$, and the last term is the $n$th."
                },
                {
                  "step": "$(6k + 4)(4k + 3) = 24k^2 + 34k + 12$",
                  "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (24k^2 + 34k + 12) = 24\\sum_{k=1}^{n} k^2 + 34\\sum_{k=1}^{n} k + 12n$",
                  "reason": "Sums split and constants come out: the constant term $12$ is summed $n$ times."
                },
                {
                  "step": "The sum is $24 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 34\\sum_{k=1}^{n} k + 12n$.",
                  "reason": "Sum of squares: it goes in place of the first sum."
                },
                {
                  "step": "The sum is $24 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 34 \\cdot \\dfrac{n(n + 1)}{2} + 12n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the second sum."
                },
                {
                  "step": "$24 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} = 8n^3 + 12n^2 + 4n$",
                  "reason": "Multiplying out: $n(n + 1)(2n + 1) = 2n^3 + 3n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "$34 \\cdot \\dfrac{n(n + 1)}{2} = 17n^2 + 17n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $8n^3 + 29n^2 + 33n$.",
                  "reason": "Collecting like terms: the terms in $n^3$, $n^2$ and $n$ are each added."
                }
              ]
            },
            {
              "prompt": "Find a closed form in $n$ for the sum $4 \\cdot 3 + 9 \\cdot 8 + 14 \\cdot 13 + \\dots + (5n - 1)(5n - 2)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "25/3*n^3+5*n^2-4/3*n",
              "lines": [
                {
                  "step": "Find a closed form in $n$ for the sum $4 \\cdot 3 + 9 \\cdot 8 + 14 \\cdot 13 + \\dots + (5n - 1)(5n - 2)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $\\sum_{k=1}^{n} (5k - 1)(5k - 2)$.",
                  "reason": "Sigma notation: the first factors $4, 9, 14$ go up by $5$ and the second factors $3, 8, 13$ go up by $5$, so the $k$th term is $(5k - 1)(5k - 2)$, and the last term is the $n$th."
                },
                {
                  "step": "$(5k - 1)(5k - 2) = 25k^2 - 15k + 2$",
                  "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (25k^2 - 15k + 2) = 25\\sum_{k=1}^{n} k^2 - 15\\sum_{k=1}^{n} k + 2n$",
                  "reason": "Sums split and constants come out: the constant term $2$ is summed $n$ times."
                },
                {
                  "step": "The sum is $25 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} - 15\\sum_{k=1}^{n} k + 2n$.",
                  "reason": "Sum of squares: it goes in place of the first sum."
                },
                {
                  "step": "The sum is $25 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} - 15 \\cdot \\dfrac{n(n + 1)}{2} + 2n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the second sum."
                },
                {
                  "step": "$25 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} = \\dfrac{25}{3}n^3 + \\dfrac{25}{2}n^2 + \\dfrac{25}{6}n$",
                  "reason": "Multiplying out: $n(n + 1)(2n + 1) = 2n^3 + 3n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "$-15 \\cdot \\dfrac{n(n + 1)}{2} = -\\dfrac{15}{2}n^2 - \\dfrac{15}{2}n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $\\dfrac{25}{3}n^3 + 5n^2 - \\dfrac{4}{3}n$.",
                  "reason": "Collecting like terms: the terms in $n^3$, $n^2$ and $n$ are each added."
                }
              ]
            },
            {
              "prompt": "Find a closed form in $n$ for the sum $8 \\cdot 7 + 15 \\cdot 11 + 22 \\cdot 15 + \\dots + (7n + 1)(4n + 3)$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "28/3*n^3+53/2*n^2+121/6*n",
              "lines": [
                {
                  "step": "Find a closed form in $n$ for the sum $8 \\cdot 7 + 15 \\cdot 11 + 22 \\cdot 15 + \\dots + (7n + 1)(4n + 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum is $\\sum_{k=1}^{n} (7k + 1)(4k + 3)$.",
                  "reason": "Sigma notation: the first factors $8, 15, 22$ go up by $7$ and the second factors $7, 11, 15$ go up by $4$, so the $k$th term is $(7k + 1)(4k + 3)$, and the last term is the $n$th."
                },
                {
                  "step": "$(7k + 1)(4k + 3) = 28k^2 + 25k + 3$",
                  "reason": "Multiplying out: each term of the first bracket multiplies each term of the second."
                },
                {
                  "step": "$\\sum_{k=1}^{n} (28k^2 + 25k + 3) = 28\\sum_{k=1}^{n} k^2 + 25\\sum_{k=1}^{n} k + 3n$",
                  "reason": "Sums split and constants come out: the constant term $3$ is summed $n$ times."
                },
                {
                  "step": "The sum is $28 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 25\\sum_{k=1}^{n} k + 3n$.",
                  "reason": "Sum of squares: it goes in place of the first sum."
                },
                {
                  "step": "The sum is $28 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} + 25 \\cdot \\dfrac{n(n + 1)}{2} + 3n$.",
                  "reason": "The sum $1 + 2 + \\dots + n = \\dfrac{n(n + 1)}{2}$: it goes in place of the second sum."
                },
                {
                  "step": "$28 \\cdot \\dfrac{n(n + 1)(2n + 1)}{6} = \\dfrac{28}{3}n^3 + 14n^2 + \\dfrac{14}{3}n$",
                  "reason": "Multiplying out: $n(n + 1)(2n + 1) = 2n^3 + 3n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "$25 \\cdot \\dfrac{n(n + 1)}{2} = \\dfrac{25}{2}n^2 + \\dfrac{25}{2}n$",
                  "reason": "Multiplying out: $n(n + 1) = n^2 + n$, and each term is multiplied by the number in front."
                },
                {
                  "step": "The sum is $\\dfrac{28}{3}n^3 + \\dfrac{53}{2}n^2 + \\dfrac{121}{6}n$.",
                  "reason": "Collecting like terms: the terms in $n^3$, $n^2$ and $n$ are each added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t227-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{21} (2k^3 + 8k^2 + 6k - 4)$, and write that line right.",
            "given": [
              "$\\sum_{k=1}^{21} (2k^3 + 8k^2 + 6k - 4) = 2\\sum_{k=1}^{21} k^3 + 8\\sum_{k=1}^{21} k^2 + 6\\sum_{k=1}^{21} k - 4 \\cdot 21$",
              "$\\sum_{k=1}^{21} k^3 = \\left(\\dfrac{21 \\cdot 22}{2}\\right)^2 = 53{,}361$",
              "$\\sum_{k=1}^{21} k^2 = \\dfrac{21 \\cdot 22 \\cdot 43}{6} = 3311$",
              "$\\sum_{k=1}^{21} k = \\dfrac{21 \\cdot 22}{2} = 231$",
              "The sum is $2 \\cdot 53{,}361 + 8 \\cdot 3311 + 6 \\cdot 231 - 4 \\cdot 21$.",
              "$2 \\cdot 53{,}361 + 8 \\cdot 3311 + 6 \\cdot 231 - 4 \\cdot 21 = 106{,}722 + 26{,}488 + 1386 - 84$",
              "$106{,}722 + 26{,}488 + 1386 - 84 = 134{,}680$",
              "The sum is $134{,}680$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{21} (2k^3 + 8k^2 + 6k - 4)$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 7 adds $84$ where line 6 takes it away.",
                "reason": "A sign lost: each number keeps the sign it carries in line 6."
              },
              {
                "step": "Every line other than line 7 follows by a rule that holds, from the data or from the line before it as it is written, so line 7 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 7 written right is \"$106{,}722 + 26{,}488 + 1386 - 84 = 134{,}512$\".",
                "reason": "Each number keeps its own sign through the working, and the signs of products give each result its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{22} (3k^3 + 5k^2 - 3k + 9)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{22} (3k^3 + 5k^2 - 3k + 9) = 3\\sum_{k=1}^{22} k^3 + 5\\sum_{k=1}^{22} k^2 - 3\\sum_{k=1}^{22} k + 9 \\cdot 22$",
                "$\\sum_{k=1}^{22} k^3 = \\left(\\dfrac{22 \\cdot 23}{2}\\right)^2 = 64{,}009$",
                "$\\sum_{k=1}^{22} k^2 = \\dfrac{22 \\cdot 23 \\cdot 45}{6} = 3795$",
                "$\\sum_{k=1}^{22} k = \\dfrac{22 \\cdot 23}{2} = 253$",
                "The sum is $3 \\cdot 64{,}009 + 5 \\cdot 3795 - 3 \\cdot 253 + 9 \\cdot 22$.",
                "$3 \\cdot 64{,}009 + 5 \\cdot 3795 - 3 \\cdot 253 + 9 \\cdot 22 = 192{,}027 + 18{,}975 - 759 - 198$",
                "$192{,}027 + 18{,}975 - 759 - 198 = 210{,}045$",
                "The sum is $210{,}045$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 3*64009+5*3795-3*253+9*22 = 192027+18975-759+198",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{22} (3k^3 + 5k^2 - 3k + 9)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 gives the product with coefficient $9$ as $-198$.",
                  "reason": "A sign lost: the product of two positive numbers is positive."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the data or from the line before it as it is written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 6 written right is \"$3 \\cdot 64{,}009 + 5 \\cdot 3795 - 3 \\cdot 253 + 9 \\cdot 22 = 192{,}027 + 18{,}975 - 759 + 198$\".",
                  "reason": "Each number keeps its own sign through the working, and the signs of products give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{18} (3k^3 - 7k^2 - 4k + 4)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{18} (3k^3 - 7k^2 - 4k + 4) = 3\\sum_{k=1}^{18} k^3 - 7\\sum_{k=1}^{18} k^2 - 4\\sum_{k=1}^{18} k + 4 \\cdot 18$",
                "$\\sum_{k=1}^{18} k^3 = \\left(\\dfrac{18 \\cdot 19}{2}\\right)^2 = 29{,}241$",
                "$\\sum_{k=1}^{18} k^2 = \\dfrac{18 \\cdot 19 \\cdot 37}{6} = 2109$",
                "$\\sum_{k=1}^{18} k = \\dfrac{18 \\cdot 19}{2} = 171$",
                "The sum is $3 \\cdot 29{,}241 - 7 \\cdot 2109 - 4 \\cdot 171 - 4 \\cdot 18$.",
                "$3 \\cdot 29{,}241 - 7 \\cdot 2109 - 4 \\cdot 171 - 4 \\cdot 18 = 87{,}723 - 14{,}763 - 684 - 72$",
                "$87{,}723 - 14{,}763 - 684 - 72 = 72{,}204$",
                "The sum is $72{,}204$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 3*29241-7*2109-4*171+4*18",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{18} (3k^3 - 7k^2 - 4k + 4)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 gives the term $4 \\cdot 18$ a minus sign, but line 1 gives its coefficient $4$.",
                  "reason": "A sign lost: each coefficient keeps its own sign when the value of its sum is put in."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is \"The sum is $3 \\cdot 29{,}241 - 7 \\cdot 2109 - 4 \\cdot 171 + 4 \\cdot 18$\".",
                  "reason": "Each number keeps its own sign through the working, and the signs of products give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{26} (7k^3 - 6k^2 + 9k - 8)$, and write that line right.",
              "given": [
                "$\\sum_{k=1}^{26} (7k^3 - 6k^2 + 9k - 8) = 7\\sum_{k=1}^{26} k^3 - 6\\sum_{k=1}^{26} k^2 + 9\\sum_{k=1}^{26} k - 8 \\cdot 26$",
                "$\\sum_{k=1}^{26} k^3 = \\left(\\dfrac{26 \\cdot 27}{2}\\right)^2 = 123{,}201$",
                "$\\sum_{k=1}^{26} k^2 = \\dfrac{26 \\cdot 27 \\cdot 53}{6} = 6201$",
                "$\\sum_{k=1}^{26} k = \\dfrac{26 \\cdot 27}{2} = 351$",
                "The sum is $7 \\cdot 123{,}201 - 6 \\cdot 6201 + 9 \\cdot 351 - 8 \\cdot 26$.",
                "$7 \\cdot 123{,}201 - 6 \\cdot 6201 + 9 \\cdot 351 - 8 \\cdot 26 = 862{,}407 - 37{,}206 + 3159 - 208$",
                "$862{,}407 - 37{,}206 + 3159 - 208 = 828{,}568$",
                "The sum is $828{,}568$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: 862407-37206+3159-208 = 828152",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\sum_{k=1}^{26} (7k^3 - 6k^2 + 9k - 8)$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 adds $208$ where line 6 takes it away.",
                  "reason": "A sign lost: each number keeps the sign it carries in line 6."
                },
                {
                  "step": "Every line other than line 7 follows by a rule that holds, from the data or from the line before it as it is written, so line 7 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 7 written right is \"$862{,}407 - 37{,}206 + 3159 - 208 = 828{,}152$\".",
                  "reason": "Each number keeps its own sign through the working, and the signs of products give each result its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t227-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The sum $10 \\cdot 8 + 13 \\cdot 10 + 16 \\cdot 12 + \\dots + 31 \\cdot 22$ equals $\\sum_{k=1}^{8} y$, with $y$ an expression in $k$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The sum $10 \\cdot 8 + 13 \\cdot 10 + 16 \\cdot 12 + \\dots + 31 \\cdot 22$ equals $\\sum_{k=1}^{8} y$, with $y$ an expression in $k$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first factors $10, 13, 16, \\dots$ form an arithmetic sequence with first term $10$ and common difference $3$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $3$."
              },
              {
                "step": "The $k$th first factor is $10 + 3(k - 1) = 3k + 7$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The second factors $8, 10, 12, \\dots$ form an arithmetic sequence with first term $8$ and common difference $2$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $2$."
              },
              {
                "step": "The $k$th second factor is $8 + 2(k - 1) = 2k + 6$.",
                "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
              },
              {
                "step": "The $k$th term is $(3k + 7)(2k + 6)$, and at $k = 8$ it is $31 \\cdot 22$, the last term.",
                "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 8$."
              },
              {
                "step": "$y = (3k + 7)(2k + 6)$",
                "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Written in sigma notation, the sum $8 \\cdot 9 + 11 \\cdot 14 + 14 \\cdot 19 + \\dots + 92 \\cdot 149$ is $\\sum_{k=1}^{29} y$, where $y$ is its $k$th term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (3*k+5)*(5*k+4)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Written in sigma notation, the sum $8 \\cdot 9 + 11 \\cdot 14 + 14 \\cdot 19 + \\dots + 92 \\cdot 149$ is $\\sum_{k=1}^{29} y$, where $y$ is its $k$th term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors $8, 11, 14, \\dots$ form an arithmetic sequence with first term $8$ and common difference $3$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $3$."
                },
                {
                  "step": "The $k$th first factor is $8 + 3(k - 1) = 3k + 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The second factors $9, 14, 19, \\dots$ form an arithmetic sequence with first term $9$ and common difference $5$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $5$."
                },
                {
                  "step": "The $k$th second factor is $9 + 5(k - 1) = 5k + 4$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $(3k + 5)(5k + 4)$, and at $k = 29$ it is $92 \\cdot 149$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 29$."
                },
                {
                  "step": "$y = (3k + 5)(5k + 4)$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The sum $2 \\cdot 13 + 9 \\cdot 19 + 16 \\cdot 25 + \\dots + 107 \\cdot 103$ equals $\\sum_{k=1}^{16} y$, with $y$ an expression in $k$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (7*k-5)*(6*k+7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The sum $2 \\cdot 13 + 9 \\cdot 19 + 16 \\cdot 25 + \\dots + 107 \\cdot 103$ equals $\\sum_{k=1}^{16} y$, with $y$ an expression in $k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors $2, 9, 16, \\dots$ form an arithmetic sequence with first term $2$ and common difference $7$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $7$."
                },
                {
                  "step": "The $k$th first factor is $2 + 7(k - 1) = 7k - 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The second factors $13, 19, 25, \\dots$ form an arithmetic sequence with first term $13$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th second factor is $13 + 6(k - 1) = 6k + 7$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $(7k - 5)(6k + 7)$, and at $k = 16$ it is $107 \\cdot 103$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 16$."
                },
                {
                  "step": "$y = (7k - 5)(6k + 7)$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The sum $12 \\cdot 14 + 19 \\cdot 21 + 26 \\cdot 28 + \\dots + 68 \\cdot 70$ equals $\\sum_{k=1}^{9} y$, with $y$ an expression in $k$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (7*k+5)*(7*k+7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The sum $12 \\cdot 14 + 19 \\cdot 21 + 26 \\cdot 28 + \\dots + 68 \\cdot 70$ equals $\\sum_{k=1}^{9} y$, with $y$ an expression in $k$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first factors $12, 19, 26, \\dots$ form an arithmetic sequence with first term $12$ and common difference $7$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $7$."
                },
                {
                  "step": "The $k$th first factor is $12 + 7(k - 1) = 7k + 5$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The second factors $14, 21, 28, \\dots$ form an arithmetic sequence with first term $14$ and common difference $7$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $7$."
                },
                {
                  "step": "The $k$th second factor is $14 + 7(k - 1) = 7k + 7$.",
                  "reason": "The $n$th term $a + (n - 1)d$, with $k$ in place of $n$."
                },
                {
                  "step": "The $k$th term is $(7k + 5)(7k + 7)$, and at $k = 9$ it is $68 \\cdot 70$, the last term.",
                  "reason": "Sigma notation: the sum runs over its terms from $k = 1$ to $k = 9$."
                },
                {
                  "step": "$y = (7k + 5)(7k + 7)$",
                  "reason": "Writing a sentence as an equation: the letter $y$ stands for the $k$th term, so it equals the term of line 6."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
