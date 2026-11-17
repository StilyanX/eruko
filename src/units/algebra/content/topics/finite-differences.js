export default {
  "number": 229,
  "title": "Finite differences",
  "section": 19,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "571-576"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $\\Delta^2 a_{2}$ for the sequence $a_n = -2n^3 + 6n - 7$, where $n = 0, 1, 2, \\dots$.",
    "form": "Answer as an integer.",
    "answer": "-36",
    "solution": [
      "Find $\\Delta^2 a_{2}$ for the sequence $a_n = -2n^3 + 6n - 7$, where $n = 0, 1, 2, \\dots$.",
      "$a_{2} = -11,\\ a_{3} = -43,\\ a_{4} = -111$",
      "$\\Delta a_{2} = -43 - (-11) = -32,\\ \\Delta a_{3} = -111 - (-43) = -68$",
      "$\\Delta^2 a_{2} = \\Delta a_{3} - \\Delta a_{2} = -68 - (-32)$",
      "$\\Delta^2 a_{2} = -36$"
    ]
  },
  "ideas": [
    {
      "name": "Difference table",
      "concrete": "For $a_n = 3n^2 - 7n + 11$ the terms from $a_0$ are $11, 7, 9, 17, 31$. The next term minus this one gives $-4, 2, 8, 14$, and the same again on that row gives $6, 6, 6$.",
      "general": "For a sequence $a_0, a_1, a_2, \\dots$ the **first difference** is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one; the letter $\\Delta$ is read delta. The **difference table** writes the sequence as row 0 and under each row the first differences of that row, so row 2 holds $\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$, and for every whole number $k$ row $k + 1$ holds $\\Delta^{k+1} a_n = \\Delta^k a_{n+1} - \\Delta^k a_n$. For a polynomial $f(x)$ the table starts from the values $f(0), f(1), f(2), \\dots$."
    },
    {
      "name": "Constant mth difference",
      "concrete": "For $a_n = 2n^3 - 4n + 1$, a polynomial of degree $3$, the terms from $a_0$ are $1, -1, 9, 43, 113$; row 1 is $-2, 10, 34, 70$, row 2 is $12, 24, 36$, and row 3 is $12, 12$, the same number each time.",
      "general": "For a whole number $m$ from $1$ up and a polynomial $f(x)$ of degree $m$, row $m$ of the difference table of $f(0), f(1), f(2), \\dots$ is a nonzero constant and row $m - 1$ is not constant: the **constant mth difference**. Every row after row $m$ is $0$, since the first differences of a constant are $0$."
    }
  ],
  "kinds": [
    {
      "id": "t229-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $\\Delta^2 a_{3}$ for the sequence $a_n = 2n^3 + 3n^2 - 3n - 8$, where $n = 0, 1, 2, \\dots$.",
            "lines": [
              {
                "step": "Find $\\Delta^2 a_{3}$ for the sequence $a_n = 2n^3 + 3n^2 - 3n - 8$, where $n = 0, 1, 2, \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a_{3} = 64,\\ a_{4} = 156,\\ a_{5} = 302$",
                "reason": "Substituting a value: $n = 3$, $n = 4$ and $n = 5$ go in place of $n$ in turn."
              },
              {
                "step": "$\\Delta a_{3} = 156 - 64 = 92,\\ \\Delta a_{4} = 302 - 156 = 146$",
                "reason": "First difference: each entry of row 1 is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
              },
              {
                "step": "$\\Delta^2 a_{3} = \\Delta a_{4} - \\Delta a_{3} = 146 - 92$",
                "reason": "Difference table: row 2 holds the first differences of row 1, $\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$."
              },
              {
                "step": "$\\Delta^2 a_{3} = 54$",
                "reason": "Subtraction as addition, from arithmetic: taking away a number adds its negative."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\Delta^2 a_{2}$ for the sequence $a_n = 2n^3 + 6n^2 + 5n + 9$, where $n = 0, 1, 2, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "48",
              "lines": [
                {
                  "step": "Find $\\Delta^2 a_{2}$ for the sequence $a_n = 2n^3 + 6n^2 + 5n + 9$, where $n = 0, 1, 2, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{2} = 59,\\ a_{3} = 132,\\ a_{4} = 253$",
                  "reason": "Substituting a value: $n = 2$, $n = 3$ and $n = 4$ go in place of $n$ in turn."
                },
                {
                  "step": "$\\Delta a_{2} = 132 - 59 = 73,\\ \\Delta a_{3} = 253 - 132 = 121$",
                  "reason": "First difference: each entry of row 1 is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "$\\Delta^2 a_{2} = \\Delta a_{3} - \\Delta a_{2} = 121 - 73$",
                  "reason": "Difference table: row 2 holds the first differences of row 1, $\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$."
                },
                {
                  "step": "$\\Delta^2 a_{2} = 48$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a number adds its negative."
                }
              ]
            },
            {
              "prompt": "Find $\\Delta^2 a_{2}$ for the sequence $a_n = 3n^3 + 3n^2 - 3n - 1$, where $n = 0, 1, 2, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find $\\Delta^2 a_{2}$ for the sequence $a_n = 3n^3 + 3n^2 - 3n - 1$, where $n = 0, 1, 2, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{2} = 29,\\ a_{3} = 98,\\ a_{4} = 227$",
                  "reason": "Substituting a value: $n = 2$, $n = 3$ and $n = 4$ go in place of $n$ in turn."
                },
                {
                  "step": "$\\Delta a_{2} = 98 - 29 = 69,\\ \\Delta a_{3} = 227 - 98 = 129$",
                  "reason": "First difference: each entry of row 1 is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "$\\Delta^2 a_{2} = \\Delta a_{3} - \\Delta a_{2} = 129 - 69$",
                  "reason": "Difference table: row 2 holds the first differences of row 1, $\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$."
                },
                {
                  "step": "$\\Delta^2 a_{2} = 60$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a number adds its negative."
                }
              ]
            },
            {
              "prompt": "Find $\\Delta^2 a_{4}$ for the sequence $a_n = -2n^3 - 2n^2 + 7n - 6$, where $n = 0, 1, 2, \\dots$.",
              "form": "Answer as an integer.",
              "answer": "-64",
              "lines": [
                {
                  "step": "Find $\\Delta^2 a_{4}$ for the sequence $a_n = -2n^3 - 2n^2 + 7n - 6$, where $n = 0, 1, 2, \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a_{4} = -138,\\ a_{5} = -271,\\ a_{6} = -468$",
                  "reason": "Substituting a value: $n = 4$, $n = 5$ and $n = 6$ go in place of $n$ in turn."
                },
                {
                  "step": "$\\Delta a_{4} = -271 - (-138) = -133,\\ \\Delta a_{5} = -468 - (-271) = -197$",
                  "reason": "First difference: each entry of row 1 is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "$\\Delta^2 a_{4} = \\Delta a_{5} - \\Delta a_{4} = -197 - (-133)$",
                  "reason": "Difference table: row 2 holds the first differences of row 1, $\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$."
                },
                {
                  "step": "$\\Delta^2 a_{4} = -64$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a number adds its negative."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the difference table of the sequence $0, 8, 12, -6, \\dots$, which starts at $a_0$, and write that line right.",
            "given": [
              "$\\Delta a_{0} = 8 - 0 = 8$",
              "$\\Delta a_{1} = 12 - 8 = 4$",
              "$\\Delta a_{2} = 12 - (-6) = 18$",
              "$\\Delta^2 a_{0} = 4 - 8 = -4$",
              "$\\Delta^2 a_{1} = 18 - 4 = 14$",
              "$\\Delta^3 a_0 = 14 - (-4) = 18$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the difference table of the sequence $0, 8, 12, -6, \\dots$, which starts at $a_0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes $a_{2} - a_{3}$, this term minus the next one.",
                "reason": "A sign lost: a difference is the next entry minus this one, and the other order gives the negative."
              },
              {
                "step": "Every line other than line 3 follows by a rule that holds, from the data or from the lines before it as they are written, so line 3 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for the first entries, the lines before it for every later line."
              },
              {
                "step": "Line 3 written right is $\\Delta a_{2} = -6 - 12 = -18$.",
                "reason": "Difference table: each entry is the next entry of the row above minus this one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the difference table of the sequence $-3, -12, -5, 42, \\dots$, which starts at $a_0$, and write that line right.",
              "given": [
                "$\\Delta a_{0} = -12 - (-3) = -9$",
                "$\\Delta a_{1} = -12 - (-5) = -7$",
                "$\\Delta a_{2} = 42 - (-5) = 47$",
                "$\\Delta^2 a_{0} = -7 - (-9) = 2$",
                "$\\Delta^2 a_{1} = 47 - (-7) = 54$",
                "$\\Delta^3 a_0 = 54 - 2 = 52$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -5-(-12) = 7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the difference table of the sequence $-3, -12, -5, 42, \\dots$, which starts at $a_0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $a_{1} - a_{2}$, this term minus the next one.",
                  "reason": "A sign lost: a difference is the next entry minus this one, and the other order gives the negative."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the data or from the lines before it as they are written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for the first entries, the lines before it for every later line."
                },
                {
                  "step": "Line 2 written right is $\\Delta a_{1} = -5 - (-12) = 7$.",
                  "reason": "Difference table: each entry is the next entry of the row above minus this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the difference table of the sequence $0, 5, -8, -57, \\dots$, which starts at $a_0$, and write that line right.",
              "given": [
                "$\\Delta a_{0} = 5 - 0 = 5$",
                "$\\Delta a_{1} = -8 - 5 = -13$",
                "$\\Delta a_{2} = -57 - (-8) = -49$",
                "$\\Delta^2 a_{0} = -13 - 5 = -18$",
                "$\\Delta^2 a_{1} = -13 - (-49) = 36$",
                "$\\Delta^3 a_0 = 36 - (-18) = 54$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -49-(-13) = -36",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the difference table of the sequence $0, 5, -8, -57, \\dots$, which starts at $a_0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes $\\Delta a_{1} - \\Delta a_{2}$, this entry minus the next one.",
                  "reason": "A sign lost: a difference is the next entry minus this one, and the other order gives the negative."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the lines before it as they are written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for the first entries, the lines before it for every later line."
                },
                {
                  "step": "Line 5 written right is $\\Delta^2 a_{1} = -49 - (-13) = -36$.",
                  "reason": "Difference table: each entry is the next entry of the row above minus this one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the difference table of the sequence $-2, -3, -28, -89, \\dots$, which starts at $a_0$, and write that line right.",
              "given": [
                "$\\Delta a_{0} = -3 - (-2) = -1$",
                "$\\Delta a_{1} = -28 - (-3) = -25$",
                "$\\Delta a_{2} = -89 - (-28) = -61$",
                "$\\Delta^2 a_{0} = -1 - (-25) = 24$",
                "$\\Delta^2 a_{1} = -61 - (-25) = -36$",
                "$\\Delta^3 a_0 = -36 - 24 = -60$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -25-(-1) = -24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the difference table of the sequence $-2, -3, -28, -89, \\dots$, which starts at $a_0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes $\\Delta a_{0} - \\Delta a_{1}$, this entry minus the next one.",
                  "reason": "A sign lost: a difference is the next entry minus this one, and the other order gives the negative."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the lines before it as they are written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for the first entries, the lines before it for every later line."
                },
                {
                  "step": "Line 4 written right is $\\Delta^2 a_{0} = -25 - (-1) = -24$.",
                  "reason": "Difference table: each entry is the next entry of the row above minus this one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $-7, -7, -7, \\dots$, its term $a_{0}$ is $12$, and the number $y$ is its term $a_n$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $-7, -7, -7, \\dots$, its term $a_{0}$ is $12$, and the number $y$ is its term $a_n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term of the sequence is the term before it plus $-7$.",
                "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-7$."
              },
              {
                "step": "$a_n = a_0 + nd$",
                "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
              },
              {
                "step": "$a_n = 12 + n \\cdot (-7)$",
                "reason": "Substituting a value: $a_0 = 12$ and $d = -7$ go in."
              },
              {
                "step": "$y = -7n + 12$",
                "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-8$, its term $a_{0}$ is $11$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -8*n+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-8$, its term $a_{0}$ is $11$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $-8$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-8$."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = 11 + n \\cdot (-8)$",
                  "reason": "Substituting a value: $a_0 = 11$ and $d = -8$ go in."
                },
                {
                  "step": "$y = -8n + 11$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Each term of a sequence is the term before it plus $4$, its term $a_{0}$ is $-6$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4*n-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Each term of a sequence is the term before it plus $4$, its term $a_{0}$ is $-6$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $4$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $4$."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = -6 + n \\cdot 4$",
                  "reason": "Substituting a value: $a_0 = -6$ and $d = 4$ go in."
                },
                {
                  "step": "$y = 4n - 6$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $3, 3, 3, \\dots$, its term $a_{0}$ is $18$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*n+18",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $3, 3, 3, \\dots$, its term $a_{0}$ is $18$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $3$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $3$."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = 18 + n \\cdot 3$",
                  "reason": "Substituting a value: $a_0 = 18$ and $d = 3$ go in."
                },
                {
                  "step": "$y = 3n + 18$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-2$, its term $a_{5}$ is $-23$, and the number $y$ is its term $a_n$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-2$, its term $a_{5}$ is $-23$, and the number $y$ is its term $a_n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term of the sequence is the term before it plus $-2$.",
                "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-2$."
              },
              {
                "step": "$a_0 = -23 - 5 \\cdot (-2) = -13$",
                "reason": "Difference table: $a_{5}$ is $5$ steps along row 0 after $a_0$, and each step adds the entry $-2$ of row 1."
              },
              {
                "step": "$a_n = a_0 + nd$",
                "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
              },
              {
                "step": "$a_n = -13 + n \\cdot (-2)$",
                "reason": "Substituting a value: $a_0 = -13$ and $d = -2$ go in."
              },
              {
                "step": "$y = -2n - 13$",
                "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Each term of a sequence is the term before it minus $6$, its term $a_{6}$ is $-35$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -6*n+1",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Each term of a sequence is the term before it minus $6$, its term $a_{6}$ is $-35$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $-6$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-6$."
                },
                {
                  "step": "$a_0 = -35 - 6 \\cdot (-6) = 1$",
                  "reason": "Difference table: $a_{6}$ is $6$ steps along row 0 after $a_0$, and each step adds the entry $-6$ of row 1."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = 1 + n \\cdot (-6)$",
                  "reason": "Substituting a value: $a_0 = 1$ and $d = -6$ go in."
                },
                {
                  "step": "$y = -6n + 1$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $-12, -12, -12, \\dots$, its term $a_{5}$ is $-56$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -12*n+4",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Row 1 of the difference table of a sequence is $-12, -12, -12, \\dots$, its term $a_{5}$ is $-56$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $-12$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-12$."
                },
                {
                  "step": "$a_0 = -56 - 5 \\cdot (-12) = 4$",
                  "reason": "Difference table: $a_{5}$ is $5$ steps along row 0 after $a_0$, and each step adds the entry $-12$ of row 1."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = 4 + n \\cdot (-12)$",
                  "reason": "Substituting a value: $a_0 = 4$ and $d = -12$ go in."
                },
                {
                  "step": "$y = -12n + 4$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-13$, its term $a_{3}$ is $-25$, and the number $y$ is its term $a_n$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -13*n+14",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Every first difference of a sequence is $-13$, its term $a_{3}$ is $-25$, and the number $y$ is its term $a_n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term of the sequence is the term before it plus $-13$.",
                  "reason": "Difference table: row 1 holds the first differences $\\Delta a_n = a_{n+1} - a_n$, and each of them is $-13$."
                },
                {
                  "step": "$a_0 = -25 - 3 \\cdot (-13) = 14$",
                  "reason": "Difference table: $a_{3}$ is $3$ steps along row 0 after $a_0$, and each step adds the entry $-13$ of row 1."
                },
                {
                  "step": "$a_n = a_0 + nd$",
                  "reason": "Arithmetic sequence: the term $a_n$ is $n$ steps of the common difference $d$ after $a_0$."
                },
                {
                  "step": "$a_n = 14 + n \\cdot (-13)$",
                  "reason": "Substituting a value: $a_0 = 14$ and $d = -13$ go in."
                },
                {
                  "step": "$y = -13n + 14$",
                  "reason": "Writing a sentence as an equation: the words \"the number $y$ is\" put $y$ alone on the left of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 22$, $f(1) = 13$, $f(2) = -6$, $f(3) = -35$ and $f(4) = -74$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 22$, $f(1) = 13$, $f(2) = -6$, $f(3) = -35$ and $f(4) = -74$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first differences are $-9, -19, -29, -39$.",
                "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
              },
              {
                "step": "The second differences are $-10, -10, -10$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "The third differences are $0, 0$.",
                "reason": "Difference table: row 3 holds the first differences of row 2."
              },
              {
                "step": "The polynomial $f(x)$ has degree $2$.",
                "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-10$."
              },
              {
                "step": "$f(x) = ax^2 + bx + c$",
                "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
              },
              {
                "step": "$c = 22$",
                "reason": "Substituting a value: $x = 0$ gives $f(0) = c$, and $f(0) = 22$."
              },
              {
                "step": "$a + b + 22 = 13$",
                "reason": "Substituting a value: $x = 1$ and $c$ go into the general form."
              },
              {
                "step": "$4a + 2b + 22 = -6$",
                "reason": "Substituting a value: $x = 2$ and $c$ go into the general form."
              },
              {
                "step": "$a + b = -9$",
                "reason": "Adding the same number to both sides: $-22$ is added to both sides of line 8."
              },
              {
                "step": "$4a + 2b = -28$",
                "reason": "Adding the same number to both sides: $-22$ is added to both sides of line 9."
              },
              {
                "step": "$2a = -10$",
                "reason": "Elimination: twice line 10 is taken from line 11, and $b$ drops out."
              },
              {
                "step": "$a = -5$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
              },
              {
                "step": "$b = -4$",
                "reason": "Back-substitution: $a = -5$ goes into line 10."
              },
              {
                "step": "$f(x) = -5x^2 - 4x + 22$",
                "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 29$, $f(1) = 20$, $f(2) = 3$, $f(3) = -22$ and $f(4) = -55$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^2-5*x+29",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 29$, $f(1) = 20$, $f(2) = 3$, $f(3) = -22$ and $f(4) = -55$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $-9, -17, -25, -33$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-8, -8, -8$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-8$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$c = 29$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$, and $f(0) = 29$."
                },
                {
                  "step": "$a + b + 29 = 20$",
                  "reason": "Substituting a value: $x = 1$ and $c$ go into the general form."
                },
                {
                  "step": "$4a + 2b + 29 = 3$",
                  "reason": "Substituting a value: $x = 2$ and $c$ go into the general form."
                },
                {
                  "step": "$a + b = -9$",
                  "reason": "Adding the same number to both sides: $-29$ is added to both sides of line 8."
                },
                {
                  "step": "$4a + 2b = -26$",
                  "reason": "Adding the same number to both sides: $-29$ is added to both sides of line 9."
                },
                {
                  "step": "$2a = -8$",
                  "reason": "Elimination: twice line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = -5$",
                  "reason": "Back-substitution: $a = -4$ goes into line 10."
                },
                {
                  "step": "$f(x) = -4x^2 - 5x + 29$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = -26$, $f(1) = -9$, $f(2) = 16$, $f(3) = 49$ and $f(4) = 90$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4*x^2+13*x-26",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = -26$, $f(1) = -9$, $f(2) = 16$, $f(3) = 49$ and $f(4) = 90$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $17, 25, 33, 41$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $8, 8, 8$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $8$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$c = -26$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$, and $f(0) = -26$."
                },
                {
                  "step": "$a + b - 26 = -9$",
                  "reason": "Substituting a value: $x = 1$ and $c$ go into the general form."
                },
                {
                  "step": "$4a + 2b - 26 = 16$",
                  "reason": "Substituting a value: $x = 2$ and $c$ go into the general form."
                },
                {
                  "step": "$a + b = 17$",
                  "reason": "Adding the same number to both sides: $26$ is added to both sides of line 8."
                },
                {
                  "step": "$4a + 2b = 42$",
                  "reason": "Adding the same number to both sides: $26$ is added to both sides of line 9."
                },
                {
                  "step": "$2a = 8$",
                  "reason": "Elimination: twice line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = 13$",
                  "reason": "Back-substitution: $a = 4$ goes into line 10."
                },
                {
                  "step": "$f(x) = 4x^2 + 13x - 26$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 17$, $f(1) = 21$, $f(2) = 19$, $f(3) = 11$ and $f(4) = -3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^2+7*x+17",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 17$, $f(1) = 21$, $f(2) = 19$, $f(3) = 11$ and $f(4) = -3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $4, -2, -8, -14$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-6, -6, -6$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-6$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$c = 17$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$, and $f(0) = 17$."
                },
                {
                  "step": "$a + b + 17 = 21$",
                  "reason": "Substituting a value: $x = 1$ and $c$ go into the general form."
                },
                {
                  "step": "$4a + 2b + 17 = 19$",
                  "reason": "Substituting a value: $x = 2$ and $c$ go into the general form."
                },
                {
                  "step": "$a + b = 4$",
                  "reason": "Adding the same number to both sides: $-17$ is added to both sides of line 8."
                },
                {
                  "step": "$4a + 2b = 2$",
                  "reason": "Adding the same number to both sides: $-17$ is added to both sides of line 9."
                },
                {
                  "step": "$2a = -6$",
                  "reason": "Elimination: twice line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = 7$",
                  "reason": "Back-substitution: $a = -3$ goes into line 10."
                },
                {
                  "step": "$f(x) = -3x^2 + 7x + 17$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = -34$, $f(2) = -61$, $f(3) = -98$, $f(4) = -145$ and $f(5) = -202$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = -34$, $f(2) = -61$, $f(3) = -98$, $f(4) = -145$ and $f(5) = -202$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first differences are $-27, -37, -47, -57$.",
                "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
              },
              {
                "step": "The second differences are $-10, -10, -10$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "The third differences are $0, 0$.",
                "reason": "Difference table: row 3 holds the first differences of row 2."
              },
              {
                "step": "The polynomial $f(x)$ has degree $2$.",
                "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-10$."
              },
              {
                "step": "$f(x) = ax^2 + bx + c$",
                "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
              },
              {
                "step": "$a + b + c = -34$",
                "reason": "Substituting a value: $x = 1$ goes into the general form."
              },
              {
                "step": "$4a + 2b + c = -61$",
                "reason": "Substituting a value: $x = 2$ goes into the general form."
              },
              {
                "step": "$9a + 3b + c = -98$",
                "reason": "Substituting a value: $x = 3$ goes into the general form."
              },
              {
                "step": "$3a + b = -27$",
                "reason": "Elimination: line 7 is taken from line 8, and $c$ drops out."
              },
              {
                "step": "$5a + b = -37$",
                "reason": "Elimination: line 8 is taken from line 9, and $c$ drops out."
              },
              {
                "step": "$2a = -10$",
                "reason": "Elimination: line 10 is taken from line 11, and $b$ drops out."
              },
              {
                "step": "$a = -5$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
              },
              {
                "step": "$b = -12$",
                "reason": "Back-substitution: $a = -5$ goes into line 10."
              },
              {
                "step": "$c = -17$",
                "reason": "Back-substitution: $a = -5$ and $b = -12$ go into line 7."
              },
              {
                "step": "$f(x) = -5x^2 - 12x - 17$",
                "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = -43$, $f(2) = -64$, $f(3) = -93$, $f(4) = -130$ and $f(5) = -175$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^2-9*x-30",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = -43$, $f(2) = -64$, $f(3) = -93$, $f(4) = -130$ and $f(5) = -175$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $-21, -29, -37, -45$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-8, -8, -8$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-8$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$a + b + c = -43$",
                  "reason": "Substituting a value: $x = 1$ goes into the general form."
                },
                {
                  "step": "$4a + 2b + c = -64$",
                  "reason": "Substituting a value: $x = 2$ goes into the general form."
                },
                {
                  "step": "$9a + 3b + c = -93$",
                  "reason": "Substituting a value: $x = 3$ goes into the general form."
                },
                {
                  "step": "$3a + b = -21$",
                  "reason": "Elimination: line 7 is taken from line 8, and $c$ drops out."
                },
                {
                  "step": "$5a + b = -29$",
                  "reason": "Elimination: line 8 is taken from line 9, and $c$ drops out."
                },
                {
                  "step": "$2a = -8$",
                  "reason": "Elimination: line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = -9$",
                  "reason": "Back-substitution: $a = -4$ goes into line 10."
                },
                {
                  "step": "$c = -30$",
                  "reason": "Back-substitution: $a = -4$ and $b = -9$ go into line 7."
                },
                {
                  "step": "$f(x) = -4x^2 - 9x - 30$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = 4$, $f(2) = -14$, $f(3) = -38$, $f(4) = -68$ and $f(5) = -104$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^2-9*x+16",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = 4$, $f(2) = -14$, $f(3) = -38$, $f(4) = -68$ and $f(5) = -104$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $-18, -24, -30, -36$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-6, -6, -6$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-6$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$a + b + c = 4$",
                  "reason": "Substituting a value: $x = 1$ goes into the general form."
                },
                {
                  "step": "$4a + 2b + c = -14$",
                  "reason": "Substituting a value: $x = 2$ goes into the general form."
                },
                {
                  "step": "$9a + 3b + c = -38$",
                  "reason": "Substituting a value: $x = 3$ goes into the general form."
                },
                {
                  "step": "$3a + b = -18$",
                  "reason": "Elimination: line 7 is taken from line 8, and $c$ drops out."
                },
                {
                  "step": "$5a + b = -24$",
                  "reason": "Elimination: line 8 is taken from line 9, and $c$ drops out."
                },
                {
                  "step": "$2a = -6$",
                  "reason": "Elimination: line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = -9$",
                  "reason": "Back-substitution: $a = -3$ goes into line 10."
                },
                {
                  "step": "$c = 16$",
                  "reason": "Back-substitution: $a = -3$ and $b = -9$ go into line 7."
                },
                {
                  "step": "$f(x) = -3x^2 - 9x + 16$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = 39$, $f(2) = 48$, $f(3) = 53$, $f(4) = 54$ and $f(5) = 51$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x^2+15*x+26",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(1) = 39$, $f(2) = 48$, $f(3) = 53$, $f(4) = 54$ and $f(5) = 51$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $9, 5, 1, -3$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-4, -4, -4$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $0, 0$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: a polynomial of degree $3$ has nonzero constant third differences, and one of degree $1$ or $0$ has second differences $0$; here the third differences are $0$ and the second differences are $-4$."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$a + b + c = 39$",
                  "reason": "Substituting a value: $x = 1$ goes into the general form."
                },
                {
                  "step": "$4a + 2b + c = 48$",
                  "reason": "Substituting a value: $x = 2$ goes into the general form."
                },
                {
                  "step": "$9a + 3b + c = 53$",
                  "reason": "Substituting a value: $x = 3$ goes into the general form."
                },
                {
                  "step": "$3a + b = 9$",
                  "reason": "Elimination: line 7 is taken from line 8, and $c$ drops out."
                },
                {
                  "step": "$5a + b = 5$",
                  "reason": "Elimination: line 8 is taken from line 9, and $c$ drops out."
                },
                {
                  "step": "$2a = -4$",
                  "reason": "Elimination: line 10 is taken from line 11, and $b$ drops out."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
                },
                {
                  "step": "$b = 15$",
                  "reason": "Back-substitution: $a = -2$ goes into line 10."
                },
                {
                  "step": "$c = 26$",
                  "reason": "Back-substitution: $a = -2$ and $b = 15$ go into line 7."
                },
                {
                  "step": "$f(x) = -2x^2 + 15x + 26$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 19$, $f(1) = 25$, $f(2) = 43$, $f(3) = 91$ and $f(4) = 187$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 19$, $f(1) = 25$, $f(2) = 43$, $f(3) = 91$ and $f(4) = 187$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first differences are $6, 18, 48, 96$.",
                "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
              },
              {
                "step": "The second differences are $12, 30, 48$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "The third differences are $18, 18$.",
                "reason": "Difference table: row 3 holds the first differences of row 2."
              },
              {
                "step": "The polynomial $f(x)$ has degree $3$.",
                "reason": "Constant mth difference: a polynomial of degree $2$ or less has third differences $0$; here the third differences are $18$, and $f(x)$ has degree at most $3$."
              },
              {
                "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
              },
              {
                "step": "$d = 19$",
                "reason": "Substituting a value: $x = 0$ gives $f(0) = d$, and $f(0) = 19$."
              },
              {
                "step": "$a + b + c + 19 = 25$",
                "reason": "Substituting a value: $x = 1$ and $d$ go into the general form."
              },
              {
                "step": "$8a + 4b + 2c + 19 = 43$",
                "reason": "Substituting a value: $x = 2$ and $d$ go into the general form."
              },
              {
                "step": "$27a + 9b + 3c + 19 = 91$",
                "reason": "Substituting a value: $x = 3$ and $d$ go into the general form."
              },
              {
                "step": "$a + b + c = 6$",
                "reason": "Adding the same number to both sides: $-19$ is added to both sides of line 8."
              },
              {
                "step": "$8a + 4b + 2c = 24$",
                "reason": "Adding the same number to both sides: $-19$ is added to both sides of line 9."
              },
              {
                "step": "$27a + 9b + 3c = 72$",
                "reason": "Adding the same number to both sides: $-19$ is added to both sides of line 10."
              },
              {
                "step": "$6a + 2b = 12$",
                "reason": "Elimination: twice line 11 is taken from line 12, and $c$ drops out."
              },
              {
                "step": "$24a + 6b = 54$",
                "reason": "Elimination: three times line 11 is taken from line 13, and $c$ drops out."
              },
              {
                "step": "$6a = 18$",
                "reason": "Elimination: three times line 14 is taken from line 15, and $b$ drops out."
              },
              {
                "step": "$a = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 16 are divided by $6$."
              },
              {
                "step": "$b = -3$",
                "reason": "Back-substitution: $a = 3$ goes into line 14."
              },
              {
                "step": "$c = 6$",
                "reason": "Back-substitution: $a = 3$ and $b = -3$ go into line 11."
              },
              {
                "step": "$f(x) = 3x^3 - 3x^2 + 6x + 19$",
                "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 15$, $f(1) = 22$, $f(2) = 13$, $f(3) = -24$ and $f(4) = -101$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x^3-2*x^2+11*x+15",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 15$, $f(1) = 22$, $f(2) = 13$, $f(3) = -24$ and $f(4) = -101$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $7, -9, -37, -77$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-16, -28, -40$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $-12, -12$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: a polynomial of degree $2$ or less has third differences $0$; here the third differences are $-12$, and $f(x)$ has degree at most $3$."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$d = 15$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$, and $f(0) = 15$."
                },
                {
                  "step": "$a + b + c + 15 = 22$",
                  "reason": "Substituting a value: $x = 1$ and $d$ go into the general form."
                },
                {
                  "step": "$8a + 4b + 2c + 15 = 13$",
                  "reason": "Substituting a value: $x = 2$ and $d$ go into the general form."
                },
                {
                  "step": "$27a + 9b + 3c + 15 = -24$",
                  "reason": "Substituting a value: $x = 3$ and $d$ go into the general form."
                },
                {
                  "step": "$a + b + c = 7$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides of line 8."
                },
                {
                  "step": "$8a + 4b + 2c = -2$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides of line 9."
                },
                {
                  "step": "$27a + 9b + 3c = -39$",
                  "reason": "Adding the same number to both sides: $-15$ is added to both sides of line 10."
                },
                {
                  "step": "$6a + 2b = -16$",
                  "reason": "Elimination: twice line 11 is taken from line 12, and $c$ drops out."
                },
                {
                  "step": "$24a + 6b = -60$",
                  "reason": "Elimination: three times line 11 is taken from line 13, and $c$ drops out."
                },
                {
                  "step": "$6a = -12$",
                  "reason": "Elimination: three times line 14 is taken from line 15, and $b$ drops out."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 16 are divided by $6$."
                },
                {
                  "step": "$b = -2$",
                  "reason": "Back-substitution: $a = -2$ goes into line 14."
                },
                {
                  "step": "$c = 11$",
                  "reason": "Back-substitution: $a = -2$ and $b = -2$ go into line 11."
                },
                {
                  "step": "$f(x) = -2x^3 - 2x^2 + 11x + 15$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 7$, $f(1) = 19$, $f(2) = 61$, $f(3) = 151$ and $f(4) = 307$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^3+6*x^2+3*x+7",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 7$, $f(1) = 19$, $f(2) = 61$, $f(3) = 151$ and $f(4) = 307$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $12, 42, 90, 156$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $30, 48, 66$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $18, 18$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: a polynomial of degree $2$ or less has third differences $0$; here the third differences are $18$, and $f(x)$ has degree at most $3$."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$d = 7$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$, and $f(0) = 7$."
                },
                {
                  "step": "$a + b + c + 7 = 19$",
                  "reason": "Substituting a value: $x = 1$ and $d$ go into the general form."
                },
                {
                  "step": "$8a + 4b + 2c + 7 = 61$",
                  "reason": "Substituting a value: $x = 2$ and $d$ go into the general form."
                },
                {
                  "step": "$27a + 9b + 3c + 7 = 151$",
                  "reason": "Substituting a value: $x = 3$ and $d$ go into the general form."
                },
                {
                  "step": "$a + b + c = 12$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides of line 8."
                },
                {
                  "step": "$8a + 4b + 2c = 54$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides of line 9."
                },
                {
                  "step": "$27a + 9b + 3c = 144$",
                  "reason": "Adding the same number to both sides: $-7$ is added to both sides of line 10."
                },
                {
                  "step": "$6a + 2b = 30$",
                  "reason": "Elimination: twice line 11 is taken from line 12, and $c$ drops out."
                },
                {
                  "step": "$24a + 6b = 108$",
                  "reason": "Elimination: three times line 11 is taken from line 13, and $c$ drops out."
                },
                {
                  "step": "$6a = 18$",
                  "reason": "Elimination: three times line 14 is taken from line 15, and $b$ drops out."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 16 are divided by $6$."
                },
                {
                  "step": "$b = 6$",
                  "reason": "Back-substitution: $a = 3$ goes into line 14."
                },
                {
                  "step": "$c = 3$",
                  "reason": "Back-substitution: $a = 3$ and $b = 6$ go into line 11."
                },
                {
                  "step": "$f(x) = 3x^3 + 6x^2 + 3x + 7$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 4$, $f(1) = 3$, $f(2) = -6$, $f(3) = -41$ and $f(4) = -120$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^3+5*x^2-3*x+4",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree at most 3 with $f(0) = 4$, $f(1) = 3$, $f(2) = -6$, $f(3) = -41$ and $f(4) = -120$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first differences are $-1, -9, -35, -79$.",
                  "reason": "First difference: each is the next value minus this one, $\\Delta f(x) = f(x + 1) - f(x)$."
                },
                {
                  "step": "The second differences are $-8, -26, -44$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "The third differences are $-18, -18$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: a polynomial of degree $2$ or less has third differences $0$; here the third differences are $-18$, and $f(x)$ has degree at most $3$."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$d = 4$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$, and $f(0) = 4$."
                },
                {
                  "step": "$a + b + c + 4 = 3$",
                  "reason": "Substituting a value: $x = 1$ and $d$ go into the general form."
                },
                {
                  "step": "$8a + 4b + 2c + 4 = -6$",
                  "reason": "Substituting a value: $x = 2$ and $d$ go into the general form."
                },
                {
                  "step": "$27a + 9b + 3c + 4 = -41$",
                  "reason": "Substituting a value: $x = 3$ and $d$ go into the general form."
                },
                {
                  "step": "$a + b + c = -1$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides of line 8."
                },
                {
                  "step": "$8a + 4b + 2c = -10$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides of line 9."
                },
                {
                  "step": "$27a + 9b + 3c = -45$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides of line 10."
                },
                {
                  "step": "$6a + 2b = -8$",
                  "reason": "Elimination: twice line 11 is taken from line 12, and $c$ drops out."
                },
                {
                  "step": "$24a + 6b = -42$",
                  "reason": "Elimination: three times line 11 is taken from line 13, and $c$ drops out."
                },
                {
                  "step": "$6a = -18$",
                  "reason": "Elimination: three times line 14 is taken from line 15, and $b$ drops out."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 16 are divided by $6$."
                },
                {
                  "step": "$b = 5$",
                  "reason": "Back-substitution: $a = -3$ goes into line 14."
                },
                {
                  "step": "$c = -3$",
                  "reason": "Back-substitution: $a = -3$ and $b = 5$ go into line 11."
                },
                {
                  "step": "$f(x) = -3x^3 + 5x^2 - 3x + 4$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k5",
      "forms": [
        {
          "example": {
            "problem": "Find $a_{6}$ for the sequence $-3, -18, -61, -150, -303, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
            "lines": [
              {
                "step": "Find $a_{6}$ for the sequence $-3, -18, -61, -150, -303, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Row 1 is $-15, -43, -89, -153$.",
                "reason": "First difference: each entry is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
              },
              {
                "step": "Row 2 is $-28, -46, -64$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "Row 3 is $-18, -18$.",
                "reason": "Difference table: row 3 holds the first differences of row 2."
              },
              {
                "step": "Row 3 is $-18$ all along.",
                "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is a constant."
              },
              {
                "step": "Row 2 goes on $-82, -100$.",
                "reason": "Difference table: each new entry of row 2 is the entry before it plus the entry $-18$ of row 3 below them."
              },
              {
                "step": "Row 1 goes on $-235, -335$.",
                "reason": "Difference table: each new entry of row 1 is the entry before it plus the entry of row 2 below them."
              },
              {
                "step": "$a_{6} = -873$",
                "reason": "First difference: each new term is the term before it plus the entry of row 1 below them, so the terms go on $-538, -873$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{6}$ for the sequence $-4, -8, -4, 20, 76, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
              "form": "Answer as an integer.",
              "answer": "332",
              "lines": [
                {
                  "step": "Find $a_{6}$ for the sequence $-4, -8, -4, 20, 76, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $-4, 4, 24, 56$.",
                  "reason": "First difference: each entry is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "Row 2 is $8, 20, 32$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $12, 12$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 is $12$ all along.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is a constant."
                },
                {
                  "step": "Row 2 goes on $44, 56$.",
                  "reason": "Difference table: each new entry of row 2 is the entry before it plus the entry $12$ of row 3 below them."
                },
                {
                  "step": "Row 1 goes on $100, 156$.",
                  "reason": "Difference table: each new entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "$a_{6} = 332$",
                  "reason": "First difference: each new term is the term before it plus the entry of row 1 below them, so the terms go on $176, 332$."
                }
              ]
            },
            {
              "prompt": "Find $a_{6}$ for the sequence $-3, 0, -15, -60, -147, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
              "form": "Answer as an integer.",
              "answer": "-495",
              "lines": [
                {
                  "step": "Find $a_{6}$ for the sequence $-3, 0, -15, -60, -147, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $3, -15, -45, -87$.",
                  "reason": "First difference: each entry is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "Row 2 is $-18, -30, -42$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $-12, -12$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 is $-12$ all along.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is a constant."
                },
                {
                  "step": "Row 2 goes on $-54, -66$.",
                  "reason": "Difference table: each new entry of row 2 is the entry before it plus the entry $-12$ of row 3 below them."
                },
                {
                  "step": "Row 1 goes on $-141, -207$.",
                  "reason": "Difference table: each new entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "$a_{6} = -495$",
                  "reason": "First difference: each new term is the term before it plus the entry of row 1 below them, so the terms go on $-288, -495$."
                }
              ]
            },
            {
              "prompt": "Find $a_{5}$ for the sequence $9, 16, 31, 72, 157, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
              "form": "Answer as an integer.",
              "answer": "304",
              "lines": [
                {
                  "step": "Find $a_{5}$ for the sequence $9, 16, 31, 72, 157, \\dots$, which starts at $a_0$ and whose terms are the values of a polynomial in $n$ of degree $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $7, 15, 41, 85$.",
                  "reason": "First difference: each entry is $\\Delta a_n = a_{n+1} - a_n$, the next term minus this one."
                },
                {
                  "step": "Row 2 is $8, 26, 44$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $18, 18$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 is $18$ all along.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is a constant."
                },
                {
                  "step": "Row 2 goes on $62$.",
                  "reason": "Difference table: each new entry of row 2 is the entry before it plus the entry $18$ of row 3 below them."
                },
                {
                  "step": "Row 1 goes on $147$.",
                  "reason": "Difference table: each new entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "$a_{5} = 304$",
                  "reason": "First difference: each new term is the term before it plus the entry of row 1 below them, so the terms go on $304$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a_{3}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = 8$, $\\Delta a_0 = 5$, $\\Delta^2 a_0 = 8$ and $\\Delta^3 a_0 = 5$.",
            "lines": [
              {
                "step": "Find $a_{3}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = 8$, $\\Delta a_0 = 5$, $\\Delta^2 a_0 = 8$ and $\\Delta^3 a_0 = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Row 3 is $5$.",
                "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is the constant $\\Delta^3 a_0 = 5$."
              },
              {
                "step": "Row 2 is $8, 13$.",
                "reason": "Difference table: from $\\Delta^2 a_0$, each entry of row 2 is the entry before it plus the entry of row 3 below them."
              },
              {
                "step": "Row 1 is $5, 13, 26$.",
                "reason": "Difference table: from $\\Delta a_0$, each entry of row 1 is the entry before it plus the entry of row 2 below them."
              },
              {
                "step": "Row 0 is $8, 13, 26, 52$.",
                "reason": "First difference: from $a_0$, each term is the term before it plus the entry of row 1 below them."
              },
              {
                "step": "$a_{3} = 52$",
                "reason": "Difference table: $a_{3}$ is the last entry of row 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -2$, $\\Delta a_0 = -3$, $\\Delta^2 a_0 = 4$ and $\\Delta^3 a_0 = 4$.",
              "form": "Answer as an integer.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -2$, $\\Delta a_0 = -3$, $\\Delta^2 a_0 = 4$ and $\\Delta^3 a_0 = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 3 is $4, 4$.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is the constant $\\Delta^3 a_0 = 4$."
                },
                {
                  "step": "Row 2 is $4, 8, 12$.",
                  "reason": "Difference table: from $\\Delta^2 a_0$, each entry of row 2 is the entry before it plus the entry of row 3 below them."
                },
                {
                  "step": "Row 1 is $-3, 1, 9, 21$.",
                  "reason": "Difference table: from $\\Delta a_0$, each entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "Row 0 is $-2, -5, -4, 5, 26$.",
                  "reason": "First difference: from $a_0$, each term is the term before it plus the entry of row 1 below them."
                },
                {
                  "step": "$a_{4} = 26$",
                  "reason": "Difference table: $a_{4}$ is the last entry of row 0."
                }
              ]
            },
            {
              "prompt": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -6$, $\\Delta a_0 = 4$, $\\Delta^2 a_0 = 5$ and $\\Delta^3 a_0 = 5$.",
              "form": "Answer as an integer.",
              "answer": "60",
              "lines": [
                {
                  "step": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -6$, $\\Delta a_0 = 4$, $\\Delta^2 a_0 = 5$ and $\\Delta^3 a_0 = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 3 is $5, 5$.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is the constant $\\Delta^3 a_0 = 5$."
                },
                {
                  "step": "Row 2 is $5, 10, 15$.",
                  "reason": "Difference table: from $\\Delta^2 a_0$, each entry of row 2 is the entry before it plus the entry of row 3 below them."
                },
                {
                  "step": "Row 1 is $4, 9, 19, 34$.",
                  "reason": "Difference table: from $\\Delta a_0$, each entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "Row 0 is $-6, -2, 7, 26, 60$.",
                  "reason": "First difference: from $a_0$, each term is the term before it plus the entry of row 1 below them."
                },
                {
                  "step": "$a_{4} = 60$",
                  "reason": "Difference table: $a_{4}$ is the last entry of row 0."
                }
              ]
            },
            {
              "prompt": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -4$, $\\Delta a_0 = -6$, $\\Delta^2 a_0 = -5$ and $\\Delta^3 a_0 = 4$.",
              "form": "Answer as an integer.",
              "answer": "-42",
              "lines": [
                {
                  "step": "Find $a_{4}$ for a sequence whose terms are the values of a polynomial in $n$ of degree $3$, where $a_0 = -4$, $\\Delta a_0 = -6$, $\\Delta^2 a_0 = -5$ and $\\Delta^3 a_0 = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 3 is $4, 4$.",
                  "reason": "Constant mth difference: the terms are the values of a polynomial of degree $3$, so row 3 is the constant $\\Delta^3 a_0 = 4$."
                },
                {
                  "step": "Row 2 is $-5, -1, 3$.",
                  "reason": "Difference table: from $\\Delta^2 a_0$, each entry of row 2 is the entry before it plus the entry of row 3 below them."
                },
                {
                  "step": "Row 1 is $-6, -11, -12, -9$.",
                  "reason": "Difference table: from $\\Delta a_0$, each entry of row 1 is the entry before it plus the entry of row 2 below them."
                },
                {
                  "step": "Row 0 is $-4, -10, -21, -33, -42$.",
                  "reason": "First difference: from $a_0$, each term is the term before it plus the entry of row 1 below them."
                },
                {
                  "step": "$a_{4} = -42$",
                  "reason": "Difference table: $a_{4}$ is the last entry of row 0."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 24x + 19$ for every $x$ and $f(0) = 19$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 24x + 19$ for every $x$ and $f(0) = 19$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\Delta^2 f(x) = \\left(24(x + 1) + 19\\right) - (24x + 19)$",
                "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = 24x + 19$."
              },
              {
                "step": "$\\Delta^2 f(x) = 24$",
                "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
              },
              {
                "step": "The polynomial $f(x)$ has degree $2$.",
                "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 2 is the constant $24$ and row 1 is not constant."
              },
              {
                "step": "$f(x) = ax^2 + bx + c$",
                "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
              },
              {
                "step": "$f(x + 1) - f(x) = 2ax + a + b$",
                "reason": "Multiplying out and collecting like terms: $a(x + 1)^2 + b(x + 1) + c - (ax^2 + bx + c)$."
              },
              {
                "step": "$2a = 24$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 6 and of the given difference."
              },
              {
                "step": "$a + b = 19$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms of line 6 and of the given difference."
              },
              {
                "step": "$a = 12$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 7 are divided by $2$."
              },
              {
                "step": "$b = 7$",
                "reason": "Back-substitution: $a = 12$ goes into line 8."
              },
              {
                "step": "$c = 19$",
                "reason": "Substituting a value: $x = 0$ gives $f(0) = c$."
              },
              {
                "step": "$f(x) = 12x^2 + 7x + 19$",
                "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 32x + 21$ for every $x$ and $f(0) = 11$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "16*x^2+5*x+11",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 32x + 21$ for every $x$ and $f(0) = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(32(x + 1) + 21\\right) - (32x + 21)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = 32x + 21$."
                },
                {
                  "step": "$\\Delta^2 f(x) = 32$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 2 is the constant $32$ and row 1 is not constant."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 2ax + a + b$",
                  "reason": "Multiplying out and collecting like terms: $a(x + 1)^2 + b(x + 1) + c - (ax^2 + bx + c)$."
                },
                {
                  "step": "$2a = 32$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 6 and of the given difference."
                },
                {
                  "step": "$a + b = 21$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of line 6 and of the given difference."
                },
                {
                  "step": "$a = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 7 are divided by $2$."
                },
                {
                  "step": "$b = 5$",
                  "reason": "Back-substitution: $a = 16$ goes into line 8."
                },
                {
                  "step": "$c = 11$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$."
                },
                {
                  "step": "$f(x) = 16x^2 + 5x + 11$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -30x - 26$ for every $x$ and $f(0) = -23$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-15*x^2-11*x-23",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -30x - 26$ for every $x$ and $f(0) = -23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(-30(x + 1) - 26\\right) - (-30x - 26)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = -30x - 26$."
                },
                {
                  "step": "$\\Delta^2 f(x) = -30$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 2 is the constant $-30$ and row 1 is not constant."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 2ax + a + b$",
                  "reason": "Multiplying out and collecting like terms: $a(x + 1)^2 + b(x + 1) + c - (ax^2 + bx + c)$."
                },
                {
                  "step": "$2a = -30$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 6 and of the given difference."
                },
                {
                  "step": "$a + b = -26$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of line 6 and of the given difference."
                },
                {
                  "step": "$a = -15$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 7 are divided by $2$."
                },
                {
                  "step": "$b = -11$",
                  "reason": "Back-substitution: $a = -15$ goes into line 8."
                },
                {
                  "step": "$c = -23$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$."
                },
                {
                  "step": "$f(x) = -15x^2 - 11x - 23$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -28x - 29$ for every $x$ and $f(0) = -7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-14*x^2-15*x-7",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -28x - 29$ for every $x$ and $f(0) = -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(-28(x + 1) - 29\\right) - (-28x - 29)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = -28x - 29$."
                },
                {
                  "step": "$\\Delta^2 f(x) = -28$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $2$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 2 is the constant $-28$ and row 1 is not constant."
                },
                {
                  "step": "$f(x) = ax^2 + bx + c$",
                  "reason": "General form: a polynomial of degree $2$ is $ax^2 + bx + c$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 2ax + a + b$",
                  "reason": "Multiplying out and collecting like terms: $a(x + 1)^2 + b(x + 1) + c - (ax^2 + bx + c)$."
                },
                {
                  "step": "$2a = -28$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$ of line 6 and of the given difference."
                },
                {
                  "step": "$a + b = -29$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms of line 6 and of the given difference."
                },
                {
                  "step": "$a = -14$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 7 are divided by $2$."
                },
                {
                  "step": "$b = -15$",
                  "reason": "Back-substitution: $a = -14$ goes into line 8."
                },
                {
                  "step": "$c = -7$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = c$."
                },
                {
                  "step": "$f(x) = -14x^2 - 15x - 7$",
                  "reason": "Substituting a value: $a$, $b$ and $c$ go into the general form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 9x^2 + 21x + 14$ for every $x$ and $f(0) = -10$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = 9x^2 + 21x + 14$ for every $x$ and $f(0) = -10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\Delta^2 f(x) = \\left(9(x + 1)^2 + 21(x + 1) + 14\\right) - (9x^2 + 21x + 14)$",
                "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = 9x^2 + 21x + 14$."
              },
              {
                "step": "$\\Delta^2 f(x) = 18x + 30$",
                "reason": "Multiplying out and collecting like terms: the terms in $x^2$ cancel."
              },
              {
                "step": "$\\Delta^3 f(x) = \\left(18(x + 1) + 30\\right) - (18x + 30)$",
                "reason": "Difference table: the third difference is the first difference of $\\Delta^2 f(x)$."
              },
              {
                "step": "$\\Delta^3 f(x) = 18$",
                "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
              },
              {
                "step": "The polynomial $f(x)$ has degree $3$.",
                "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 3 is the constant $18$ and row 2 is not constant."
              },
              {
                "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
              },
              {
                "step": "$f(x + 1) - f(x) = 3ax^2 + (3a + 2b)x + a + b + c$",
                "reason": "Binomial Theorem: $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$ and $(x + 1)^2 = x^2 + 2x + 1$, then collecting like terms."
              },
              {
                "step": "$3a = 9$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 8 and of the given difference."
              },
              {
                "step": "$3a + 2b = 21$",
                "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
              },
              {
                "step": "$a + b + c = 14$",
                "reason": "Equal for all $x$ means equal coefficients: the constant terms."
              },
              {
                "step": "$a = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 9 are divided by $3$."
              },
              {
                "step": "$b = 6$",
                "reason": "Back-substitution: $a = 3$ goes into line 10."
              },
              {
                "step": "$c = 5$",
                "reason": "Back-substitution: $a = 3$ and $b = 6$ go into line 11."
              },
              {
                "step": "$d = -10$",
                "reason": "Substituting a value: $x = 0$ gives $f(0) = d$."
              },
              {
                "step": "$f(x) = 3x^3 + 6x^2 + 5x - 10$",
                "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -9x^2 - 3x + 7$ for every $x$ and $f(0) = 9$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^3+3*x^2+7*x+9",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -9x^2 - 3x + 7$ for every $x$ and $f(0) = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(-9(x + 1)^2 - 3(x + 1) + 7\\right) - (-9x^2 - 3x + 7)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = -9x^2 - 3x + 7$."
                },
                {
                  "step": "$\\Delta^2 f(x) = -18x - 12$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x^2$ cancel."
                },
                {
                  "step": "$\\Delta^3 f(x) = \\left(-18(x + 1) - 12\\right) - (-18x - 12)$",
                  "reason": "Difference table: the third difference is the first difference of $\\Delta^2 f(x)$."
                },
                {
                  "step": "$\\Delta^3 f(x) = -18$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 3 is the constant $-18$ and row 2 is not constant."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 3ax^2 + (3a + 2b)x + a + b + c$",
                  "reason": "Binomial Theorem: $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$ and $(x + 1)^2 = x^2 + 2x + 1$, then collecting like terms."
                },
                {
                  "step": "$3a = -9$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 8 and of the given difference."
                },
                {
                  "step": "$3a + 2b = -3$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "$a + b + c = 7$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 9 are divided by $3$."
                },
                {
                  "step": "$b = 3$",
                  "reason": "Back-substitution: $a = -3$ goes into line 10."
                },
                {
                  "step": "$c = 7$",
                  "reason": "Back-substitution: $a = -3$ and $b = 3$ go into line 11."
                },
                {
                  "step": "$d = 9$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$."
                },
                {
                  "step": "$f(x) = -3x^3 + 3x^2 + 7x + 9$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -9x^2 - 17x - 10$ for every $x$ and $f(0) = -7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^3-4*x^2-3*x-7",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -9x^2 - 17x - 10$ for every $x$ and $f(0) = -7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(-9(x + 1)^2 - 17(x + 1) - 10\\right) - (-9x^2 - 17x - 10)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = -9x^2 - 17x - 10$."
                },
                {
                  "step": "$\\Delta^2 f(x) = -18x - 26$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x^2$ cancel."
                },
                {
                  "step": "$\\Delta^3 f(x) = \\left(-18(x + 1) - 26\\right) - (-18x - 26)$",
                  "reason": "Difference table: the third difference is the first difference of $\\Delta^2 f(x)$."
                },
                {
                  "step": "$\\Delta^3 f(x) = -18$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 3 is the constant $-18$ and row 2 is not constant."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 3ax^2 + (3a + 2b)x + a + b + c$",
                  "reason": "Binomial Theorem: $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$ and $(x + 1)^2 = x^2 + 2x + 1$, then collecting like terms."
                },
                {
                  "step": "$3a = -9$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 8 and of the given difference."
                },
                {
                  "step": "$3a + 2b = -17$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "$a + b + c = -10$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$a = -3$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 9 are divided by $3$."
                },
                {
                  "step": "$b = -4$",
                  "reason": "Back-substitution: $a = -3$ goes into line 10."
                },
                {
                  "step": "$c = -3$",
                  "reason": "Back-substitution: $a = -3$ and $b = -4$ go into line 11."
                },
                {
                  "step": "$d = -7$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$."
                },
                {
                  "step": "$f(x) = -3x^3 - 4x^2 - 3x - 7$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -6x^2 - 10x + 3$ for every $x$ and $f(0) = 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x^3-2*x^2+7*x+7",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ with $f(x + 1) - f(x) = -6x^2 - 10x + 3$ for every $x$ and $f(0) = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\Delta^2 f(x) = \\left(-6(x + 1)^2 - 10(x + 1) + 3\\right) - (-6x^2 - 10x + 3)$",
                  "reason": "Difference table: the second difference is the first difference of $\\Delta f(x) = -6x^2 - 10x + 3$."
                },
                {
                  "step": "$\\Delta^2 f(x) = -12x - 16$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x^2$ cancel."
                },
                {
                  "step": "$\\Delta^3 f(x) = \\left(-12(x + 1) - 16\\right) - (-12x - 16)$",
                  "reason": "Difference table: the third difference is the first difference of $\\Delta^2 f(x)$."
                },
                {
                  "step": "$\\Delta^3 f(x) = -12$",
                  "reason": "Multiplying out and collecting like terms: the terms in $x$ cancel."
                },
                {
                  "step": "The polynomial $f(x)$ has degree $3$.",
                  "reason": "Constant mth difference: for a polynomial of degree $m$, row $m$ is the first constant row and it is not $0$; here row 3 is the constant $-12$ and row 2 is not constant."
                },
                {
                  "step": "$f(x) = ax^3 + bx^2 + cx + d$",
                  "reason": "General form: a polynomial of degree $3$ is $ax^3 + bx^2 + cx + d$ with $a$ not $0$."
                },
                {
                  "step": "$f(x + 1) - f(x) = 3ax^2 + (3a + 2b)x + a + b + c$",
                  "reason": "Binomial Theorem: $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$ and $(x + 1)^2 = x^2 + 2x + 1$, then collecting like terms."
                },
                {
                  "step": "$3a = -6$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x^2$ of line 8 and of the given difference."
                },
                {
                  "step": "$3a + 2b = -10$",
                  "reason": "Equal for all $x$ means equal coefficients: the terms in $x$."
                },
                {
                  "step": "$a + b + c = 3$",
                  "reason": "Equal for all $x$ means equal coefficients: the constant terms."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 9 are divided by $3$."
                },
                {
                  "step": "$b = -2$",
                  "reason": "Back-substitution: $a = -2$ goes into line 10."
                },
                {
                  "step": "$c = 7$",
                  "reason": "Back-substitution: $a = -2$ and $b = -2$ go into line 11."
                },
                {
                  "step": "$d = 7$",
                  "reason": "Substituting a value: $x = 0$ gives $f(0) = d$."
                },
                {
                  "step": "$f(x) = -2x^3 - 2x^2 + 7x + 7$",
                  "reason": "Substituting a value: $a$, $b$, $c$ and $d$ go into the general form."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t229-k7",
      "forms": [
        {
          "example": {
            "problem": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $27, 20, 19, 27, 35, 52, 75$.",
            "lines": [
              {
                "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $27, 20, 19, 27, 35, 52, 75$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Row 1 is $-7, -1, 8, 8, 17, 23$.",
                "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
              },
              {
                "step": "Row 2 is $6, 9, 0, 9, 6$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "Row 2 should be one constant.",
                "reason": "Constant mth difference: $f(x)$ has degree $2$, so row 2 is a nonzero constant."
              },
              {
                "step": "Row 2 is $6$ but for the 3 entries $9$, $0$, $9$ side by side.",
                "reason": "Difference table: these are the entries of row 2 in line 3 that differ from the rest."
              },
              {
                "step": "The value $f(3)$ is the one value that all of them use, so it is wrong.",
                "reason": "Difference table: each value of row 0 enters 3 entries of row 2 side by side, and the entries that hold $6$ use only right values."
              },
              {
                "step": "$\\Delta f(2) = \\Delta f(1) + 6 = -1 + 6 = 5$",
                "reason": "Difference table: with row 2 all $6$, each entry of row 1 is the entry before it plus $6$, and $\\Delta f(1) = f(2) - f(1)$ uses right values."
              },
              {
                "step": "$f(3) = f(2) + \\Delta f(2) = 19 + 5 = 24$",
                "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $-26, -17, -8, -11, -14, -21, -32$.",
              "form": "Answer as an integer.",
              "answer": "-12",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $-26, -17, -8, -11, -14, -21, -32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $9, 9, -3, -3, -7, -11$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $0, -12, 0, -4, -4$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 2 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $2$, so row 2 is a nonzero constant."
                },
                {
                  "step": "Row 2 is $-4$ but for the 3 entries $0$, $-12$, $0$ side by side.",
                  "reason": "Difference table: these are the entries of row 2 in line 3 that differ from the rest."
                },
                {
                  "step": "The value $f(2)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 3 entries of row 2 side by side, and the entries that hold $-4$ use only right values."
                },
                {
                  "step": "$\\Delta f(1) = \\Delta f(0) + (-4) = 9 + (-4) = 5$",
                  "reason": "Difference table: with row 2 all $-4$, each entry of row 1 is the entry before it plus $-4$, and $\\Delta f(0) = f(1) - f(0)$ uses right values."
                },
                {
                  "step": "$f(2) = f(1) + \\Delta f(1) = -17 + 5 = -12$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
                }
              ]
            },
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $-17, -32, -55, -86, -131, -172, -227$.",
              "form": "Answer as an integer.",
              "answer": "-125",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $-17, -32, -55, -86, -131, -172, -227$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $-15, -23, -31, -45, -41, -55$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $-8, -8, -14, 4, -14$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 2 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $2$, so row 2 is a nonzero constant."
                },
                {
                  "step": "Row 2 is $-8$ but for the 3 entries $-14$, $4$, $-14$ side by side.",
                  "reason": "Difference table: these are the entries of row 2 in line 3 that differ from the rest."
                },
                {
                  "step": "The value $f(4)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 3 entries of row 2 side by side, and the entries that hold $-8$ use only right values."
                },
                {
                  "step": "$\\Delta f(3) = \\Delta f(2) + (-8) = -31 + (-8) = -39$",
                  "reason": "Difference table: with row 2 all $-8$, each entry of row 1 is the entry before it plus $-8$, and $\\Delta f(2) = f(3) - f(2)$ uses right values."
                },
                {
                  "step": "$f(4) = f(3) + \\Delta f(3) = -86 + (-39) = -125$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
                }
              ]
            },
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $19, 31, 45, 73, 103, 139, 181$.",
              "form": "Answer as an integer.",
              "answer": "49",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(6)$ for a polynomial $f(x)$ of degree $2$: $19, 31, 45, 73, 103, 139, 181$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $12, 14, 28, 30, 36, 42$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $2, 14, 2, 6, 6$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 2 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $2$, so row 2 is a nonzero constant."
                },
                {
                  "step": "Row 2 is $6$ but for the 3 entries $2$, $14$, $2$ side by side.",
                  "reason": "Difference table: these are the entries of row 2 in line 3 that differ from the rest."
                },
                {
                  "step": "The value $f(2)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 3 entries of row 2 side by side, and the entries that hold $6$ use only right values."
                },
                {
                  "step": "$\\Delta f(1) = \\Delta f(0) + 6 = 12 + 6 = 18$",
                  "reason": "Difference table: with row 2 all $6$, each entry of row 1 is the entry before it plus $6$, and $\\Delta f(0) = f(1) - f(0)$ uses right values."
                },
                {
                  "step": "$f(2) = f(1) + \\Delta f(1) = 31 + 18 = 49$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $3, 12, 33, 78, 157, 288, 477, 738, 1083$.",
            "lines": [
              {
                "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $3, 12, 33, 78, 157, 288, 477, 738, 1083$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Row 1 is $9, 21, 45, 79, 131, 189, 261, 345$.",
                "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
              },
              {
                "step": "Row 2 is $12, 24, 34, 52, 58, 72, 84$.",
                "reason": "Difference table: row 2 holds the first differences of row 1."
              },
              {
                "step": "Row 3 is $12, 10, 18, 6, 14, 12$.",
                "reason": "Difference table: row 3 holds the first differences of row 2."
              },
              {
                "step": "Row 3 should be one constant.",
                "reason": "Constant mth difference: $f(x)$ has degree $3$, so row 3 is a nonzero constant."
              },
              {
                "step": "Row 3 is $12$ but for the 4 entries $10$, $18$, $6$, $14$ side by side.",
                "reason": "Difference table: these are the entries of row 3 in line 4 that differ from the rest."
              },
              {
                "step": "The value $f(4)$ is the one value that all of them use, so it is wrong.",
                "reason": "Difference table: each value of row 0 enters 4 entries of row 3 side by side, and the entries that hold $12$ use only right values."
              },
              {
                "step": "$\\Delta^2 f(2) = \\Delta^2 f(1) + 12 = 24 + 12 = 36$",
                "reason": "Difference table: with row 3 all $12$, each entry of row 2 is the entry before it plus $12$, and $\\Delta^2 f(1)$ uses only right values."
              },
              {
                "step": "$\\Delta f(3) = \\Delta f(2) + \\Delta^2 f(2) = 45 + 36 = 81$",
                "reason": "Difference table: each entry of row 1 is the entry before it plus the entry of row 2 between them, and $\\Delta f(2)$ uses right values."
              },
              {
                "step": "$f(4) = f(3) + \\Delta f(3) = 78 + 81 = 159$",
                "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $-8, -18, -46, -108, -228, -418, -698, -1086, -1600$.",
              "form": "Answer as an integer.",
              "answer": "-110",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $-8, -18, -46, -108, -228, -418, -698, -1086, -1600$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $-10, -28, -62, -120, -190, -280, -388, -514$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $-18, -34, -58, -70, -90, -108, -126$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $-16, -24, -12, -20, -18, -18$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $3$, so row 3 is a nonzero constant."
                },
                {
                  "step": "Row 3 is $-18$ but for the 4 entries $-16$, $-24$, $-12$, $-20$ side by side.",
                  "reason": "Difference table: these are the entries of row 3 in line 4 that differ from the rest."
                },
                {
                  "step": "The value $f(3)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 4 entries of row 3 side by side, and the entries that hold $-18$ use only right values."
                },
                {
                  "step": "$\\Delta^2 f(1) = \\Delta^2 f(0) + (-18) = -18 + (-18) = -36$",
                  "reason": "Difference table: with row 3 all $-18$, each entry of row 2 is the entry before it plus $-18$, and $\\Delta^2 f(0)$ uses only right values."
                },
                {
                  "step": "$\\Delta f(2) = \\Delta f(1) + \\Delta^2 f(1) = -28 + (-36) = -64$",
                  "reason": "Difference table: each entry of row 1 is the entry before it plus the entry of row 2 between them, and $\\Delta f(1)$ uses right values."
                },
                {
                  "step": "$f(3) = f(2) + \\Delta f(2) = -46 + (-64) = -110$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
                }
              ]
            },
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $5, 10, 23, 56, 121, 236, 395, 628, 941$.",
              "form": "Answer as an integer.",
              "answer": "230",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $5, 10, 23, 56, 121, 236, 395, 628, 941$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $5, 13, 33, 65, 115, 159, 233, 313$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $8, 20, 32, 50, 44, 74, 80$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $12, 12, 18, -6, 30, 6$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $3$, so row 3 is a nonzero constant."
                },
                {
                  "step": "Row 3 is $12$ but for the 4 entries $18$, $-6$, $30$, $6$ side by side.",
                  "reason": "Difference table: these are the entries of row 3 in line 4 that differ from the rest."
                },
                {
                  "step": "The value $f(5)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 4 entries of row 3 side by side, and the entries that hold $12$ use only right values."
                },
                {
                  "step": "$\\Delta^2 f(3) = \\Delta^2 f(2) + 12 = 32 + 12 = 44$",
                  "reason": "Difference table: with row 3 all $12$, each entry of row 2 is the entry before it plus $12$, and $\\Delta^2 f(2)$ uses only right values."
                },
                {
                  "step": "$\\Delta f(4) = \\Delta f(3) + \\Delta^2 f(3) = 65 + 44 = 109$",
                  "reason": "Difference table: each entry of row 1 is the entry before it plus the entry of row 2 between them, and $\\Delta f(3)$ uses right values."
                },
                {
                  "step": "$f(5) = f(4) + \\Delta f(4) = 121 + 109 = 230$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
                }
              ]
            },
            {
              "prompt": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $7, 14, 33, 76, 155, 267, 469, 728, 1071$.",
              "form": "Answer as an integer.",
              "answer": "282",
              "lines": [
                {
                  "step": "Find the right value in place of the one wrong value in this list of $f(0), f(1), \\dots, f(8)$ for a polynomial $f(x)$ of degree $3$: $7, 14, 33, 76, 155, 267, 469, 728, 1071$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Row 1 is $7, 19, 43, 79, 112, 202, 259, 343$.",
                  "reason": "First difference: each entry is $\\Delta f(n) = f(n + 1) - f(n)$, the next value minus this one."
                },
                {
                  "step": "Row 2 is $12, 24, 36, 33, 90, 57, 84$.",
                  "reason": "Difference table: row 2 holds the first differences of row 1."
                },
                {
                  "step": "Row 3 is $12, 12, -3, 57, -33, 27$.",
                  "reason": "Difference table: row 3 holds the first differences of row 2."
                },
                {
                  "step": "Row 3 should be one constant.",
                  "reason": "Constant mth difference: $f(x)$ has degree $3$, so row 3 is a nonzero constant."
                },
                {
                  "step": "Row 3 is $12$ but for the 4 entries $-3$, $57$, $-33$, $27$ side by side.",
                  "reason": "Difference table: these are the entries of row 3 in line 4 that differ from the rest."
                },
                {
                  "step": "The value $f(5)$ is the one value that all of them use, so it is wrong.",
                  "reason": "Difference table: each value of row 0 enters 4 entries of row 3 side by side, and the entries that hold $12$ use only right values."
                },
                {
                  "step": "$\\Delta^2 f(3) = \\Delta^2 f(2) + 12 = 36 + 12 = 48$",
                  "reason": "Difference table: with row 3 all $12$, each entry of row 2 is the entry before it plus $12$, and $\\Delta^2 f(2)$ uses only right values."
                },
                {
                  "step": "$\\Delta f(4) = \\Delta f(3) + \\Delta^2 f(3) = 79 + 48 = 127$",
                  "reason": "Difference table: each entry of row 1 is the entry before it plus the entry of row 2 between them, and $\\Delta f(3)$ uses right values."
                },
                {
                  "step": "$f(5) = f(4) + \\Delta f(4) = 155 + 127 = 282$",
                  "reason": "First difference: each value is the value before it plus the entry of row 1 between them."
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
      "id": "t229-p1",
      "method": "induction",
      "statement": "For every whole number $m$ from $1$ up and every polynomial $f(x)$ of degree $m$, the $m$th difference $\\Delta^m f(x)$ is a nonzero constant and $\\Delta^{m-1} f(x)$ is not constant.",
      "idea": "A first difference lowers the degree of a polynomial by exactly one, and induction on the degree carries this down to row $m$.",
      "lines": [
        {
          "line": "Let $f(x) = c_mx^m + c_{m-1}x^{m-1} + \\dots + c_1x + c_0$ with $c_m \\ne 0$.",
          "reason": "General form: a polynomial of degree $m$ has a nonzero leading coefficient $c_m$."
        },
        {
          "line": "$\\Delta f(x) = c_m\\left((x + 1)^m - x^m\\right) + c_{m-1}\\left((x + 1)^{m-1} - x^{m-1}\\right) + \\dots + c_1\\left((x + 1) - x\\right)$",
          "reason": "First difference: $\\Delta f(x) = f(x + 1) - f(x)$, with the terms of each power taken together and the constant terms giving $c_0 - c_0 = 0$."
        },
        {
          "line": "The bracket $(x + 1)^m - x^m$ is $mx^{m-1}$ plus terms of degree below $m - 1$.",
          "reason": "Binomial Theorem: $(x + 1)^m = x^m + \\binom{m}{1}x^{m-1} + \\dots + 1$, and $\\binom{m}{1} = m$."
        },
        {
          "line": "For each whole number $k$ below $m$, the bracket $(x + 1)^k - x^k$ is a number or has degree below $m - 1$.",
          "reason": "Binomial Theorem: the terms $x^k$ cancel, so the bracket has degree at most $k - 1$, which is below $m - 1$."
        },
        {
          "line": "So $\\Delta f(x)$ is $mc_mx^{m-1}$ plus terms of degree below $m - 1$.",
          "reason": "Collecting like terms: lines 3 and 4 in line 2."
        },
        {
          "line": "So for $m$ from $2$ up, $\\Delta f(x)$ is a polynomial of degree $m - 1$.",
          "reason": "Degree: $m$ and $c_m$ are not $0$, so the leading coefficient $mc_m$ is not $0$."
        },
        {
          "line": "For $m = 1$, line 5 reads $\\Delta f(x) = c_1$, a nonzero constant, and $\\Delta^0 f(x) = f(x) = c_1x + c_0$ is not constant.",
          "reason": "Base case: the claim holds for $m = 1$, since $c_1 \\ne 0$."
        },
        {
          "line": "Assume that for some whole number $m$ from $1$ up, every polynomial of degree $m$ has $\\Delta^m$ a nonzero constant and $\\Delta^{m-1}$ not constant.",
          "reason": "Inductive assumption: the claim for $m$."
        },
        {
          "line": "Let $g(x)$ be a polynomial of degree $m + 1$; then $\\Delta g(x)$ has degree $m$.",
          "reason": "Inductive step: line 6 with $m + 1$ in place of $m$, which is $2$ or more."
        },
        {
          "line": "So $\\Delta^m\\left(\\Delta g(x)\\right)$ is a nonzero constant and $\\Delta^{m-1}\\left(\\Delta g(x)\\right)$ is not constant.",
          "reason": "Inductive assumption: line 8 for the polynomial $\\Delta g(x)$ of degree $m$."
        },
        {
          "line": "So $\\Delta^{m+1} g(x)$ is a nonzero constant and $\\Delta^m g(x)$ is not constant.",
          "reason": "Difference table: row $k$ of the table of $\\Delta g(x)$ is row $k + 1$ of the table of $g(x)$."
        },
        {
          "line": "So for every whole number $m$ from $1$ up, $\\Delta^m f(x)$ is a nonzero constant and $\\Delta^{m-1} f(x)$ is not constant.",
          "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t229-s1",
      "method": "induction",
      "statement": "Prove that for every whole number $m$ from $1$ up, row $m$ of the difference table of $a_n = n^m$ is the constant $m!$, that is, $\\Delta^m n^m = m!$. Facts it may use: first difference, difference table, constant mth difference, Binomial Theorem, factorial, the distributive law, induction.",
      "check": {
        "proof": [
          {
            "line": "For $m = 1$, $\\Delta n = (n + 1) - n = 1 = 1!$.",
            "reason": "Base case: first difference, $\\Delta a_n = a_{n+1} - a_n$ with $a_n = n$."
          },
          {
            "line": "Assume that $\\Delta^m n^m = m!$ for some whole number $m$ from $1$ up.",
            "reason": "Inductive assumption: the claim for $m$."
          },
          {
            "line": "$\\Delta n^{m+1} = (n + 1)^{m+1} - n^{m+1}$",
            "reason": "First difference: the next term minus this one."
          },
          {
            "line": "The right side of line 3 is $(m + 1)n^m + g(n)$, where $g(n)$ is a number or a polynomial of degree below $m$.",
            "reason": "Binomial Theorem: $(n + 1)^{m+1} = n^{m+1} + \\binom{m+1}{1}n^m + \\dots + 1$, and $\\binom{m+1}{1} = m + 1$."
          },
          {
            "line": "$\\Delta^{m+1} n^{m+1} = \\Delta^m\\left((m + 1)n^m + g(n)\\right)$",
            "reason": "Difference table: row $m + 1$ of the table of $n^{m+1}$ is row $m$ of the table of its first differences."
          },
          {
            "line": "For every two sequences $f(n)$ and $h(n)$, $\\Delta\\left(f(n) + h(n)\\right) = \\Delta f(n) + \\Delta h(n)$.",
            "reason": "First difference, then collecting like terms: $\\left(f(n + 1) + h(n + 1)\\right) - \\left(f(n) + h(n)\\right) = \\left(f(n + 1) - f(n)\\right) + \\left(h(n + 1) - h(n)\\right)$."
          },
          {
            "line": "For every number $c$ and every sequence $f(n)$, $\\Delta\\left(c \\cdot f(n)\\right) = c \\cdot \\Delta f(n)$.",
            "reason": "The distributive law, from arithmetic: $c \\cdot f(n + 1) - c \\cdot f(n) = c\\left(f(n + 1) - f(n)\\right)$."
          },
          {
            "line": "$\\Delta^m\\left((m + 1)n^m + g(n)\\right) = (m + 1)\\Delta^m n^m + \\Delta^m g(n)$",
            "reason": "Lines 6 and 7 with $f(n)$ and $h(n)$ taken as $n^m$ and $g(n)$, applied in each of the $m$ rows."
          },
          {
            "line": "$\\Delta^m g(n) = 0$",
            "reason": "Constant mth difference: a polynomial $g(n)$ of degree $k$ below $m$ has row $k$ constant, and the first differences of a constant are $0$, so row $m$ is $0$; a number $g(n)$ has row 1 already $0$."
          },
          {
            "line": "$\\Delta^{m+1} n^{m+1} = (m + 1)\\Delta^m n^m$",
            "reason": "Lines 5, 8 and 9: line 9 puts $0$ in place of $\\Delta^m g(n)$ in line 8, and line 5 joins it to $\\Delta^{m+1} n^{m+1}$."
          },
          {
            "line": "$\\Delta^{m+1} n^{m+1} = (m + 1) \\cdot m!$",
            "reason": "Inductive assumption: $\\Delta^m n^m = m!$ goes into line 10."
          },
          {
            "line": "$(m + 1) \\cdot {m!} = (m + 1)!$",
            "reason": "Factorial: $(m + 1)!$ is $m!$ times $m + 1$."
          },
          {
            "line": "So $\\Delta^m n^m = m!$ for every whole number $m$ from $1$ up.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 12."
          }
        ]
      }
    },
    {
      "id": "t229-s2",
      "method": "direct proof",
      "statement": "Prove that for every sequence $a_0, a_1, a_2, \\dots$ and every whole number $n$, $\\Delta^3 a_n = a_{n+3} - 3a_{n+2} + 3a_{n+1} - a_n$. Facts it may use: first difference, difference table, substituting a value, subtracting a bracket changes every sign in it, multiplying out, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "$\\Delta^3 a_n = \\Delta^2 a_{n+1} - \\Delta^2 a_n$",
            "reason": "Difference table: row 3 holds the first differences of row 2."
          },
          {
            "line": "$\\Delta^2 a_{n+1} = \\Delta a_{n+2} - \\Delta a_{n+1}$",
            "reason": "Difference table: row 2 holds the first differences of row 1."
          },
          {
            "line": "$\\Delta^2 a_n = \\Delta a_{n+1} - \\Delta a_n$",
            "reason": "Difference table: row 2 holds the first differences of row 1."
          },
          {
            "line": "$\\Delta^3 a_n = (\\Delta a_{n+2} - \\Delta a_{n+1}) - (\\Delta a_{n+1} - \\Delta a_n)$",
            "reason": "Substituting a value: lines 2 and 3 go into line 1."
          },
          {
            "line": "$\\Delta^3 a_n = \\Delta a_{n+2} - \\Delta a_{n+1} - \\Delta a_{n+1} + \\Delta a_n$",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "$\\Delta^3 a_n = \\Delta a_{n+2} - 2\\Delta a_{n+1} + \\Delta a_n$",
            "reason": "Collecting like terms: the two terms $-\\Delta a_{n+1}$."
          },
          {
            "line": "$\\Delta^3 a_n = (a_{n+3} - a_{n+2}) - 2(a_{n+2} - a_{n+1}) + (a_{n+1} - a_n)$",
            "reason": "First difference: each $\\Delta a_k$ is $a_{k+1} - a_k$, put in by substituting a value."
          },
          {
            "line": "$\\Delta^3 a_n = a_{n+3} - a_{n+2} - 2a_{n+2} + 2a_{n+1} + a_{n+1} - a_n$",
            "reason": "Multiplying out: the factor $-2$ multiplies each term of its bracket."
          },
          {
            "line": "$\\Delta^3 a_n = a_{n+3} - 3a_{n+2} + 3a_{n+1} - a_n$",
            "reason": "Collecting like terms: the terms in $a_{n+2}$ and the terms in $a_{n+1}$."
          }
        ]
      }
    },
    {
      "id": "t229-s3",
      "method": "direct proof",
      "statement": "Prove that for every sequence $a_0, a_1, a_2, \\dots$, $a_2 = a_0 + 2\\Delta a_0 + \\Delta^2 a_0$. Facts it may use: first difference, difference table, substituting a value, subtracting a bracket changes every sign in it, multiplying out, collecting like terms, symmetric property.",
      "check": {
        "proof": [
          {
            "line": "$\\Delta a_0 = a_1 - a_0$",
            "reason": "First difference: the next term minus this one, at $n = 0$."
          },
          {
            "line": "$\\Delta a_1 = a_2 - a_1$",
            "reason": "First difference: the next term minus this one, at $n = 1$."
          },
          {
            "line": "$\\Delta^2 a_0 = \\Delta a_1 - \\Delta a_0$",
            "reason": "Difference table: row 2 holds the first differences of row 1."
          },
          {
            "line": "$\\Delta^2 a_0 = (a_2 - a_1) - (a_1 - a_0)$",
            "reason": "Substituting a value: lines 1 and 2 go into line 3."
          },
          {
            "line": "$\\Delta^2 a_0 = a_2 - a_1 - a_1 + a_0$",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "$\\Delta^2 a_0 = a_2 - 2a_1 + a_0$",
            "reason": "Collecting like terms: the two terms $-a_1$."
          },
          {
            "line": "$a_0 + 2\\Delta a_0 + \\Delta^2 a_0 = a_0 + 2(a_1 - a_0) + (a_2 - 2a_1 + a_0)$",
            "reason": "Substituting a value: lines 1 and 6 go in."
          },
          {
            "line": "$a_0 + 2\\Delta a_0 + \\Delta^2 a_0 = a_0 + 2a_1 - 2a_0 + a_2 - 2a_1 + a_0$",
            "reason": "Multiplying out: the factor $2$ multiplies each term of its bracket."
          },
          {
            "line": "$a_0 + 2\\Delta a_0 + \\Delta^2 a_0 = a_2$",
            "reason": "Collecting like terms: the terms in $a_0$ give $0$, and so do the terms in $a_1$."
          },
          {
            "line": "$a_2 = a_0 + 2\\Delta a_0 + \\Delta^2 a_0$",
            "reason": "Symmetric property: the two sides of an equation may change places."
          }
        ]
      }
    }
  ]
}
