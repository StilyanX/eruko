export default {
  "number": 226,
  "title": "Sequences given by a recursion",
  "section": 23,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "544-551"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $a_6$, where $a_1 = 4$, $a_2 = 3$ and $a_{n+2} = a_{n+1}a_n - 3$ for every whole number $n$ from $1$ up.",
    "form": "Answer as an integer.",
    "answer": "5109",
    "solution": [
      "Find $a_6$, where $a_1 = 4$, $a_2 = 3$ and $a_{n+2} = a_{n+1}a_n - 3$ for every whole number $n$ from $1$ up.",
      "$a_3 = 3 \\cdot 4 - 3 = 9$",
      "$a_4 = 9 \\cdot 3 - 3 = 24$",
      "$a_5 = 24 \\cdot 9 - 3 = 213$",
      "$a_6 = 213 \\cdot 24 - 3 = 5109$"
    ]
  },
  "ideas": [
    {
      "name": "Recursion",
      "concrete": "Take $a_1 = 3$ and $a_{n+1} = 2a_n - 1$ for every whole number $n$ from $1$ up. Then $a_2 = 2 \\cdot 3 - 1 = 5$, $a_3 = 2 \\cdot 5 - 1 = 9$ and $a_4 = 2 \\cdot 9 - 1 = 17$: each term is worked out from the term before it.",
      "general": "A **recursion** gives the starting term or terms of a sequence and a rule that makes each later term from terms before it. The starting terms and the rule together fix every term, and the terms are worked out in order. The rule holds for the values of $n$ it is stated for, and for no others."
    },
    {
      "name": "Closed form",
      "concrete": "The sequence with $a_1 = 3$ and $a_{n+1} = 2a_n - 1$ has $a_n = 2^n + 1$ for every whole number $n$ from $1$ up: at $n = 4$ the formula gives $2^4 + 1 = 17$ with no earlier term worked out.",
      "general": "A **closed form** for a sequence is a formula that gives $a_n$ from $n$ alone, for every $n$ in a stated range, with no earlier term in it and no sum whose length grows with $n$. A closed form read off the first terms is a guess until it is proved. A closed form that comes from a relation holds only for the values of $n$ the relation holds for, so it is checked against the first terms."
    },
    {
      "name": "Periodic sequence",
      "concrete": "Take $a_1 = 1$ and $a_{n+1} = \\dfrac{a_n - 7}{3a_n - 5}$ for every whole number $n$ from $1$ up. Then $a_2 = 3$, $a_3 = -1$ and $a_4 = 1$, which is $a_1$ again. Each term fixes the next, so the three terms $1$, $3$ and $-1$ repeat in that order without end: $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
      "general": "A sequence $a_1, a_2, a_3, \\dots$ is a **periodic sequence** when there is a whole number $k$ from $1$ up with $a_{n+k} = a_n$ for every whole number $n$ from $1$ up. When the rule gives each term from the one before it, $a_{k+1} = a_1$ is enough for this. When the rule gives each term from the two before it, $a_{k+1} = a_1$ and $a_{k+2} = a_2$ together are enough."
    }
  ],
  "kinds": [
    {
      "id": "t226-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $a_6$, where $a_1 = -4$, $a_2 = 2$ and $a_{n+2} = a_{n+1}a_n - 2$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find $a_6$, where $a_1 = -4$, $a_2 = 2$ and $a_{n+2} = a_{n+1}a_n - 2$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
              },
              {
                "step": "$a_3 = 2 \\cdot (-4) - 2 = -10$",
                "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
              },
              {
                "step": "$a_4 = -10 \\cdot 2 - 2 = -22$",
                "reason": "Substituting a value: $n = 2$ in the rule, with $a_3$ from line 2."
              },
              {
                "step": "$a_5 = -22 \\cdot (-10) - 2 = 218$",
                "reason": "Substituting a value: $n = 3$ in the rule, with $a_4$ from line 3."
              },
              {
                "step": "$a_6 = 218 \\cdot (-22) - 2 = -4798$",
                "reason": "Substituting a value: $n = 4$ in the rule, with $a_5$ from line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_5$, where $a_1 = 6$ and $a_{n+1} = na_n + 5$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "349",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_1 = 6$ and $a_{n+1} = na_n + 5$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = 1 \\cdot 6 + 5 = 11$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = 2 \\cdot 11 + 5 = 27$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = 3 \\cdot 27 + 5 = 86$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "$a_5 = 4 \\cdot 86 + 5 = 349$",
                  "reason": "Substituting a value: $n = 4$ in the rule, with $a_4$ from line 4."
                }
              ]
            },
            {
              "prompt": "Find $a_6$, where $a_1 = 6$, $a_2 = 4$ and $a_{n+2} = a_{n+1}^2 - 3a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "4924",
              "lines": [
                {
                  "step": "Find $a_6$, where $a_1 = 6$, $a_2 = 4$ and $a_{n+2} = a_{n+1}^2 - 3a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
                },
                {
                  "step": "$a_3 = 4^2 - 3 \\cdot 6 = -2$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
                },
                {
                  "step": "$a_4 = (-2)^2 - 3 \\cdot 4 = -8$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_3$ from line 2."
                },
                {
                  "step": "$a_5 = (-8)^2 - 3 \\cdot (-2) = 70$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_4$ from line 3."
                },
                {
                  "step": "$a_6 = 70^2 - 3 \\cdot (-8) = 4924$",
                  "reason": "Substituting a value: $n = 4$ in the rule, with $a_5$ from line 4."
                }
              ]
            },
            {
              "prompt": "Find $a_5$, where $a_1 = 2$ and $a_{n+1} = a_n^2 - 5$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "116",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_1 = 2$ and $a_{n+1} = a_n^2 - 5$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = 2^2 - 5 = -1$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = (-1)^2 - 5 = -4$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = (-4)^2 - 5 = 11$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "$a_5 = 11^2 - 5 = 116$",
                  "reason": "Substituting a value: $n = 4$ in the rule, with $a_4$ from line 4."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a_7$, where $a_1 = -2$ and $a_{m+n} = a_m + a_n - 5$ for all whole numbers $m$ and $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find $a_7$, where $a_1 = -2$ and $a_{m+n} = a_m + a_n - 5$ for all whole numbers $m$ and $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation gives a term from two earlier terms."
              },
              {
                "step": "$a_2 = -2 + (-2) - 5 = -9$",
                "reason": "Substituting a value: $m = 1$ and $n = 1$ in the relation, with $a_1 = -2$."
              },
              {
                "step": "$a_4 = -9 + (-9) - 5 = -23$",
                "reason": "Substituting a value: $m = 2$ and $n = 2$ in the relation, with $a_2$ from line 2."
              },
              {
                "step": "$a_6 = -23 + (-9) - 5 = -37$",
                "reason": "Substituting a value: $m = 4$ and $n = 2$ in the relation, with $a_4$ from line 3 and $a_2$ from line 2."
              },
              {
                "step": "$a_7 = -37 + (-2) - 5 = -44$",
                "reason": "Substituting a value: $m = 6$ and $n = 1$ in the relation, with $a_6$ from line 4 and $a_1 = -2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_7$, where $a_1 = 4$ and $a_{m+n} = a_ma_n + a_m + a_n$ for all whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "78124",
              "lines": [
                {
                  "step": "Find $a_7$, where $a_1 = 4$ and $a_{m+n} = a_ma_n + a_m + a_n$ for all whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation gives a term from two earlier terms."
                },
                {
                  "step": "$a_2 = 4 \\cdot 4 + 4 + 4 = 24$",
                  "reason": "Substituting a value: $m = 1$ and $n = 1$ in the relation, with $a_1 = 4$."
                },
                {
                  "step": "$a_4 = 24 \\cdot 24 + 24 + 24 = 624$",
                  "reason": "Substituting a value: $m = 2$ and $n = 2$ in the relation, with $a_2$ from line 2."
                },
                {
                  "step": "$a_6 = 624 \\cdot 24 + 624 + 24 = 15{,}624$",
                  "reason": "Substituting a value: $m = 4$ and $n = 2$ in the relation, with $a_4$ from line 3 and $a_2$ from line 2."
                },
                {
                  "step": "$a_7 = 15{,}624 \\cdot 4 + 15{,}624 + 4 = 78{,}124$",
                  "reason": "Substituting a value: $m = 6$ and $n = 1$ in the relation, with $a_6$ from line 4 and $a_1 = 4$."
                }
              ]
            },
            {
              "prompt": "Find $a_{16}$, where $a_1 = -5$ and $a_{m+n} = a_m + a_n + 6mn$ for all whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "640",
              "lines": [
                {
                  "step": "Find $a_{16}$, where $a_1 = -5$ and $a_{m+n} = a_m + a_n + 6mn$ for all whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation gives a term from two earlier terms."
                },
                {
                  "step": "$a_2 = -5 + (-5) + 6 \\cdot 1 \\cdot 1 = -4$",
                  "reason": "Substituting a value: $m = 1$ and $n = 1$ in the relation, with $a_1 = -5$."
                },
                {
                  "step": "$a_4 = -4 + (-4) + 6 \\cdot 2 \\cdot 2 = 16$",
                  "reason": "Substituting a value: $m = 2$ and $n = 2$ in the relation, with $a_2$ from line 2."
                },
                {
                  "step": "$a_8 = 16 + 16 + 6 \\cdot 4 \\cdot 4 = 128$",
                  "reason": "Substituting a value: $m = 4$ and $n = 4$ in the relation, with $a_4$ from line 3."
                },
                {
                  "step": "$a_{16} = 128 + 128 + 6 \\cdot 8 \\cdot 8 = 640$",
                  "reason": "Substituting a value: $m = 8$ and $n = 8$ in the relation, with $a_8$ from line 4."
                }
              ]
            },
            {
              "prompt": "Find $a_{10}$, where $a_1 = 3$ and $a_{m+n} = a_m + a_n + 3mn(m + n)$ for all whole numbers $m$ and $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "1020",
              "lines": [
                {
                  "step": "Find $a_{10}$, where $a_1 = 3$ and $a_{m+n} = a_m + a_n + 3mn(m + n)$ for all whole numbers $m$ and $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation gives a term from two earlier terms."
                },
                {
                  "step": "$a_2 = 3 + 3 + 3 \\cdot 1 \\cdot 1 \\cdot 2 = 12$",
                  "reason": "Substituting a value: $m = 1$ and $n = 1$ in the relation, with $a_1 = 3$."
                },
                {
                  "step": "$a_4 = 12 + 12 + 3 \\cdot 2 \\cdot 2 \\cdot 4 = 72$",
                  "reason": "Substituting a value: $m = 2$ and $n = 2$ in the relation, with $a_2$ from line 2."
                },
                {
                  "step": "$a_8 = 72 + 72 + 3 \\cdot 4 \\cdot 4 \\cdot 8 = 528$",
                  "reason": "Substituting a value: $m = 4$ and $n = 4$ in the relation, with $a_4$ from line 3."
                },
                {
                  "step": "$a_{10} = 528 + 12 + 3 \\cdot 8 \\cdot 2 \\cdot 10 = 1020$",
                  "reason": "Substituting a value: $m = 8$ and $n = 2$ in the relation, with $a_8$ from line 4 and $a_2$ from line 2."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a_{29}$, where $a_1 = 34$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 6n(n + 1)$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find $a_{29}$, where $a_1 = 34$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 6n(n + 1)$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation ties each term to all the terms before it."
              },
              {
                "step": "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 6(n + 1)(n + 2)$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the relation."
              },
              {
                "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 6(n + 1)(n + 2) + 6n(n + 1)$",
                "reason": "Adding two equations: the relation at $n$, with every sign changed, is added to line 2, so the terms $a_1$ to $a_n$ go."
              },
              {
                "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 12(n + 1)$",
                "reason": "Common factor: $-6(n + 1)(n + 2) + 6n(n + 1) = -6(n + 1)(n + 2 - n) = -12(n + 1)$."
              },
              {
                "step": "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 12(n + 1)$",
                "reason": "Adding the same number to both sides: $na_{n+1}$ is added to both sides."
              },
              {
                "step": "$a_{n+1} = a_{n+2} - 12$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $n + 1$, which is not $0$."
              },
              {
                "step": "$a_1 = a_2 - 12$",
                "reason": "Substituting a value: $n = 1$ in the relation gives $a_1 = a_2 - 6 \\cdot 1 \\cdot 2$."
              },
              {
                "step": "The sequence is arithmetic with first term $34$ and common difference $12$.",
                "reason": "Arithmetic sequence: by line 7 for the second term and line 6 for every later one, each term after the first is $12$ more than the term before it."
              },
              {
                "step": "$a_{29} = 34 + (29 - 1) \\cdot 12$",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 34$, $d = 12$ and $n = 29$."
              },
              {
                "step": "$a_{29} = 34 + 336$",
                "reason": "Order of operations: the bracket first, $29 - 1 = 28$, then the product, $28 \\cdot 12 = 336$."
              },
              {
                "step": "$a_{29} = 370$",
                "reason": "Order of operations: the sum last, $34 + 336 = 370$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{36}$, where $a_1 = -5$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 3n(n + 1)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "205",
              "lines": [
                {
                  "step": "Find $a_{36}$, where $a_1 = -5$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 3n(n + 1)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation ties each term to all the terms before it."
                },
                {
                  "step": "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 3(n + 1)(n + 2)$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the relation."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 3(n + 1)(n + 2) + 3n(n + 1)$",
                  "reason": "Adding two equations: the relation at $n$, with every sign changed, is added to line 2, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 6(n + 1)$",
                  "reason": "Common factor: $-3(n + 1)(n + 2) + 3n(n + 1) = -3(n + 1)(n + 2 - n) = -6(n + 1)$."
                },
                {
                  "step": "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 6(n + 1)$",
                  "reason": "Adding the same number to both sides: $na_{n+1}$ is added to both sides."
                },
                {
                  "step": "$a_{n+1} = a_{n+2} - 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $n + 1$, which is not $0$."
                },
                {
                  "step": "$a_1 = a_2 - 6$",
                  "reason": "Substituting a value: $n = 1$ in the relation gives $a_1 = a_2 - 3 \\cdot 1 \\cdot 2$."
                },
                {
                  "step": "The sequence is arithmetic with first term $-5$ and common difference $6$.",
                  "reason": "Arithmetic sequence: by line 7 for the second term and line 6 for every later one, each term after the first is $6$ more than the term before it."
                },
                {
                  "step": "$a_{36} = -5 + (36 - 1) \\cdot 6$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = -5$, $d = 6$ and $n = 36$."
                },
                {
                  "step": "$a_{36} = -5 + 210$",
                  "reason": "Order of operations: the bracket first, $36 - 1 = 35$, then the product, $35 \\cdot 6 = 210$."
                },
                {
                  "step": "$a_{36} = 205$",
                  "reason": "Order of operations: the sum last, $-5 + 210 = 205$."
                }
              ]
            },
            {
              "prompt": "Find $a_{31}$, where $a_1 = 36$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 5n(n + 1)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "336",
              "lines": [
                {
                  "step": "Find $a_{31}$, where $a_1 = 36$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 5n(n + 1)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation ties each term to all the terms before it."
                },
                {
                  "step": "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 5(n + 1)(n + 2)$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the relation."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 5(n + 1)(n + 2) + 5n(n + 1)$",
                  "reason": "Adding two equations: the relation at $n$, with every sign changed, is added to line 2, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 10(n + 1)$",
                  "reason": "Common factor: $-5(n + 1)(n + 2) + 5n(n + 1) = -5(n + 1)(n + 2 - n) = -10(n + 1)$."
                },
                {
                  "step": "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 10(n + 1)$",
                  "reason": "Adding the same number to both sides: $na_{n+1}$ is added to both sides."
                },
                {
                  "step": "$a_{n+1} = a_{n+2} - 10$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $n + 1$, which is not $0$."
                },
                {
                  "step": "$a_1 = a_2 - 10$",
                  "reason": "Substituting a value: $n = 1$ in the relation gives $a_1 = a_2 - 5 \\cdot 1 \\cdot 2$."
                },
                {
                  "step": "The sequence is arithmetic with first term $36$ and common difference $10$.",
                  "reason": "Arithmetic sequence: by line 7 for the second term and line 6 for every later one, each term after the first is $10$ more than the term before it."
                },
                {
                  "step": "$a_{31} = 36 + (31 - 1) \\cdot 10$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 36$, $d = 10$ and $n = 31$."
                },
                {
                  "step": "$a_{31} = 36 + 300$",
                  "reason": "Order of operations: the bracket first, $31 - 1 = 30$, then the product, $30 \\cdot 10 = 300$."
                },
                {
                  "step": "$a_{31} = 336$",
                  "reason": "Order of operations: the sum last, $36 + 300 = 336$."
                }
              ]
            },
            {
              "prompt": "Find $a_{20}$, where $a_1 = 22$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 4n(n + 1)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "174",
              "lines": [
                {
                  "step": "Find $a_{20}$, where $a_1 = 22$ and $a_1 + a_2 + \\dots + a_n = na_{n+1} - 4n(n + 1)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the relation ties each term to all the terms before it."
                },
                {
                  "step": "$a_1 + a_2 + \\dots + a_n + a_{n+1} = (n + 1)a_{n+2} - 4(n + 1)(n + 2)$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the relation."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 4(n + 1)(n + 2) + 4n(n + 1)$",
                  "reason": "Adding two equations: the relation at $n$, with every sign changed, is added to line 2, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+1} = (n + 1)a_{n+2} - na_{n+1} - 8(n + 1)$",
                  "reason": "Common factor: $-4(n + 1)(n + 2) + 4n(n + 1) = -4(n + 1)(n + 2 - n) = -8(n + 1)$."
                },
                {
                  "step": "$(n + 1)a_{n+1} = (n + 1)a_{n+2} - 8(n + 1)$",
                  "reason": "Adding the same number to both sides: $na_{n+1}$ is added to both sides."
                },
                {
                  "step": "$a_{n+1} = a_{n+2} - 8$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $n + 1$, which is not $0$."
                },
                {
                  "step": "$a_1 = a_2 - 8$",
                  "reason": "Substituting a value: $n = 1$ in the relation gives $a_1 = a_2 - 4 \\cdot 1 \\cdot 2$."
                },
                {
                  "step": "The sequence is arithmetic with first term $22$ and common difference $8$.",
                  "reason": "Arithmetic sequence: by line 7 for the second term and line 6 for every later one, each term after the first is $8$ more than the term before it."
                },
                {
                  "step": "$a_{20} = 22 + (20 - 1) \\cdot 8$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 22$, $d = 8$ and $n = 20$."
                },
                {
                  "step": "$a_{20} = 22 + 152$",
                  "reason": "Order of operations: the bracket first, $20 - 1 = 19$, then the product, $19 \\cdot 8 = 152$."
                },
                {
                  "step": "$a_{20} = 174$",
                  "reason": "Order of operations: the sum last, $22 + 152 = 174$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t226-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$ and $a_{n+1} = \\dfrac{-4a_n - 8}{a_n}$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$ and $a_{n+1} = \\dfrac{-4a_n - 8}{a_n}$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
              },
              {
                "step": "$a_2 = \\dfrac{-4 \\cdot 4 - 8}{4} = -6$",
                "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
              },
              {
                "step": "$a_3 = \\dfrac{-4 \\cdot (-6) - 8}{-6} = -\\dfrac{8}{3}$",
                "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
              },
              {
                "step": "$a_4 = \\dfrac{-4 \\cdot \\left(-\\dfrac{8}{3}\\right) - 8}{-\\dfrac{8}{3}} = -1$",
                "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
              },
              {
                "step": "$a_5 = \\dfrac{-4 \\cdot (-1) - 8}{-1} = 4$",
                "reason": "Substituting a value: $n = 4$ in the rule, with $a_4$ from line 4."
              },
              {
                "step": "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
                "reason": "Periodic sequence: line 5 gives $a_5 = a_1$, and by the recursion each term fixes the next, so the terms repeat from there."
              },
              {
                "step": "The least such whole number is $4$.",
                "reason": "Periodic sequence: the terms from $a_2$ to $a_4$ all differ from $a_1 = 4$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 2$ and $a_{n+1} = \\dfrac{4a_n - 7}{4a_n + 2}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 2$ and $a_{n+1} = \\dfrac{4a_n - 7}{4a_n + 2}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = \\dfrac{4 \\cdot 2 - 7}{4 \\cdot 2 + 2} = \\dfrac{1}{10}$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = \\dfrac{4 \\cdot \\dfrac{1}{10} - 7}{4 \\cdot \\dfrac{1}{10} + 2} = -\\dfrac{11}{4}$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = \\dfrac{4 \\cdot \\left(-\\dfrac{11}{4}\\right) - 7}{4 \\cdot \\left(-\\dfrac{11}{4}\\right) + 2} = 2$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: line 4 gives $a_4 = a_1$, and by the recursion each term fixes the next, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $3$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_3$ all differ from $a_1 = 2$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $2$."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 5$ and $a_{n+1} = \\dfrac{-a_n - 7}{a_n + 4}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 5$ and $a_{n+1} = \\dfrac{-a_n - 7}{a_n + 4}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = \\dfrac{-5 - 7}{5 + 4} = -\\dfrac{4}{3}$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = \\dfrac{-\\left(-\\dfrac{4}{3}\\right) - 7}{-\\dfrac{4}{3} + 4} = -\\dfrac{17}{8}$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = \\dfrac{-\\left(-\\dfrac{17}{8}\\right) - 7}{-\\dfrac{17}{8} + 4} = -\\dfrac{13}{5}$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "$a_5 = \\dfrac{-\\left(-\\dfrac{13}{5}\\right) - 7}{-\\dfrac{13}{5} + 4} = -\\dfrac{22}{7}$",
                  "reason": "Substituting a value: $n = 4$ in the rule, with $a_4$ from line 4."
                },
                {
                  "step": "$a_6 = \\dfrac{-\\left(-\\dfrac{22}{7}\\right) - 7}{-\\dfrac{22}{7} + 4} = -\\dfrac{9}{2}$",
                  "reason": "Substituting a value: $n = 5$ in the rule, with $a_5$ from line 5."
                },
                {
                  "step": "$a_7 = \\dfrac{-\\left(-\\dfrac{9}{2}\\right) - 7}{-\\dfrac{9}{2} + 4} = 5$",
                  "reason": "Substituting a value: $n = 6$ in the rule, with $a_6$ from line 6."
                },
                {
                  "step": "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: line 7 gives $a_7 = a_1$, and by the recursion each term fixes the next, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $6$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_6$ all differ from $a_1 = 5$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $5$."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 6$ and $a_{n+1} = \\dfrac{-2a_n - 4}{3a_n - 2}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 6$ and $a_{n+1} = \\dfrac{-2a_n - 4}{3a_n - 2}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = \\dfrac{-2 \\cdot 6 - 4}{3 \\cdot 6 - 2} = -1$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = \\dfrac{-2 \\cdot (-1) - 4}{3 \\cdot (-1) - 2} = \\dfrac{2}{5}$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = \\dfrac{-2 \\cdot \\dfrac{2}{5} - 4}{3 \\cdot \\dfrac{2}{5} - 2} = 6$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: line 4 gives $a_4 = a_1$, and by the recursion each term fixes the next, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $3$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_3$ all differ from $a_1 = 6$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -4$, $a_2 = 5$ and $a_{n+2} = a_{n+1} - a_n - 3$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -4$, $a_2 = 5$ and $a_{n+2} = a_{n+1} - a_n - 3$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
              },
              {
                "step": "$a_3 = 5 - (-4) - 3 = 6$",
                "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
              },
              {
                "step": "$a_4 = 6 - 5 - 3 = -2$",
                "reason": "Substituting a value: $n = 2$ in the rule, with the terms found so far."
              },
              {
                "step": "$a_5 = -2 - 6 - 3 = -11$",
                "reason": "Substituting a value: $n = 3$ in the rule, with the terms found so far."
              },
              {
                "step": "$a_6 = -11 - (-2) - 3 = -12$",
                "reason": "Substituting a value: $n = 4$ in the rule, with the terms found so far."
              },
              {
                "step": "$a_7 = -12 - (-11) - 3 = -4$",
                "reason": "Substituting a value: $n = 5$ in the rule, with the terms found so far."
              },
              {
                "step": "$a_8 = -4 - (-12) - 3 = 5$",
                "reason": "Substituting a value: $n = 6$ in the rule, with the terms found so far."
              },
              {
                "step": "So $a_{n+6} = a_n$ for every whole number $n$ from $1$ up.",
                "reason": "Periodic sequence: lines 6 and 7 give $a_7 = a_1$ and $a_8 = a_2$, and by the recursion two neighbouring terms fix every later term, so the terms repeat from there."
              },
              {
                "step": "The least such whole number is $6$.",
                "reason": "Periodic sequence: the terms from $a_2$ to $a_6$ all differ from $a_1 = -4$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 1$, $a_2 = 8$ and $a_{n+2} = 12 - a_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 1$, $a_2 = 8$ and $a_{n+2} = 12 - a_{n+1} - a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
                },
                {
                  "step": "$a_3 = 12 - 8 - 1 = 3$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
                },
                {
                  "step": "$a_4 = 12 - 3 - 8 = 1$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with the terms found so far."
                },
                {
                  "step": "$a_5 = 12 - 1 - 3 = 8$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with the terms found so far."
                },
                {
                  "step": "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: lines 3 and 4 give $a_4 = a_1$ and $a_5 = a_2$, and by the recursion two neighbouring terms fix every later term, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $3$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_3$ all differ from $a_1 = 1$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $2$."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 8$ and $a_{n+2} = -2 - a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = 4$, $a_2 = 8$ and $a_{n+2} = -2 - a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
                },
                {
                  "step": "$a_3 = -2 - 4 = -6$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
                },
                {
                  "step": "$a_4 = -2 - 8 = -10$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with the terms found so far."
                },
                {
                  "step": "$a_5 = -2 - (-6) = 4$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with the terms found so far."
                },
                {
                  "step": "$a_6 = -2 - (-10) = 8$",
                  "reason": "Substituting a value: $n = 4$ in the rule, with the terms found so far."
                },
                {
                  "step": "So $a_{n+4} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: lines 4 and 5 give $a_5 = a_1$ and $a_6 = a_2$, and by the recursion two neighbouring terms fix every later term, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $4$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_4$ all differ from $a_1 = 4$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $3$."
                }
              ]
            },
            {
              "prompt": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -2$, $a_2 = 5$ and $a_{n+2} = \\dfrac{30}{a_{n+1}a_n}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least whole number $k$ from $1$ up for which $a_{n+k} = a_n$ holds for every $n$, where $a_1 = -2$, $a_2 = 5$ and $a_{n+2} = \\dfrac{30}{a_{n+1}a_n}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $a_2$ start the sequence and the rule gives each later term from the two before it."
                },
                {
                  "step": "$a_3 = \\dfrac{30}{5 \\cdot (-2)} = -3$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting terms."
                },
                {
                  "step": "$a_4 = \\dfrac{30}{-3 \\cdot 5} = -2$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with the terms found so far."
                },
                {
                  "step": "$a_5 = \\dfrac{30}{-2 \\cdot (-3)} = 5$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with the terms found so far."
                },
                {
                  "step": "So $a_{n+3} = a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Periodic sequence: lines 3 and 4 give $a_4 = a_1$ and $a_5 = a_2$, and by the recursion two neighbouring terms fix every later term, so the terms repeat from there."
                },
                {
                  "step": "The least such whole number is $3$.",
                  "reason": "Periodic sequence: the terms from $a_2$ to $a_3$ all differ from $a_1 = -2$, so $a_{1+j} = a_1$ fails for every whole number $j$ from $1$ to $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t226-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_1 = 16$ and $a_{n+1} = a_n - 9$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_1 = 16$ and $a_{n+1} = a_n - 9$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
              },
              {
                "step": "$a_{n+1} - a_n = -9$",
                "reason": "Adding the same number to both sides: $a_n$ is taken from both sides of the rule."
              },
              {
                "step": "The sequence is arithmetic with first term $16$ and common difference $-9$.",
                "reason": "Arithmetic sequence: by line 2 each term after the first minus the term before it is the same number, the common difference."
              },
              {
                "step": "$a_n = 16 + (n - 1) \\cdot (-9)$",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 16$ and $d = -9$."
              },
              {
                "step": "$a_n = 16 - 9n + 9$",
                "reason": "Multiplying out: the number $-9$ multiplies each term of the bracket $n - 1$."
              },
              {
                "step": "$a_n = -9n + 25$",
                "reason": "Collecting like terms and Closed form: $16 + 9 = 25$, and the formula gives $a_n$ from $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 17$ and $a_{n+1} = a_n + 5$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*n+12",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 17$ and $a_{n+1} = a_n + 5$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_{n+1} - a_n = 5$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides of the rule."
                },
                {
                  "step": "The sequence is arithmetic with first term $17$ and common difference $5$.",
                  "reason": "Arithmetic sequence: by line 2 each term after the first minus the term before it is the same number, the common difference."
                },
                {
                  "step": "$a_n = 17 + (n - 1) \\cdot 5$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 17$ and $d = 5$."
                },
                {
                  "step": "$a_n = 17 + 5n - 5$",
                  "reason": "Multiplying out: the number $5$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = 5n + 12$",
                  "reason": "Collecting like terms and Closed form: $17 - 5 = 12$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = -11$ and $a_{n+1} = a_n - 4$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-4*n-7",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = -11$ and $a_{n+1} = a_n - 4$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_{n+1} - a_n = -4$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides of the rule."
                },
                {
                  "step": "The sequence is arithmetic with first term $-11$ and common difference $-4$.",
                  "reason": "Arithmetic sequence: by line 2 each term after the first minus the term before it is the same number, the common difference."
                },
                {
                  "step": "$a_n = -11 + (n - 1) \\cdot (-4)$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = -11$ and $d = -4$."
                },
                {
                  "step": "$a_n = -11 - 4n + 4$",
                  "reason": "Multiplying out: the number $-4$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = -4n - 7$",
                  "reason": "Collecting like terms and Closed form: $-11 + 4 = -7$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = a_n + \\dfrac{5}{2}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*n/2+7/2",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = a_n + \\dfrac{5}{2}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_{n+1} - a_n = \\dfrac{5}{2}$",
                  "reason": "Adding the same number to both sides: $a_n$ is taken from both sides of the rule."
                },
                {
                  "step": "The sequence is arithmetic with first term $6$ and common difference $\\dfrac{5}{2}$.",
                  "reason": "Arithmetic sequence: by line 2 each term after the first minus the term before it is the same number, the common difference."
                },
                {
                  "step": "$a_n = 6 + (n - 1) \\cdot \\dfrac{5}{2}$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 6$ and $d = \\dfrac{5}{2}$."
                },
                {
                  "step": "$a_n = 6 + \\dfrac{5}{2}n - \\dfrac{5}{2}$",
                  "reason": "Multiplying out: the number $\\dfrac{5}{2}$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = \\dfrac{5}{2}n + \\dfrac{7}{2}$",
                  "reason": "Collecting like terms and Closed form: $6 - \\dfrac{5}{2} = \\dfrac{7}{2}$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = \\dfrac{2}{3}a_n$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = \\dfrac{2}{3}a_n$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
              },
              {
                "step": "The sequence is geometric with first term $10$ and common ratio $\\dfrac{2}{3}$.",
                "reason": "Geometric sequence: by the rule each term after the first is the term before it times $\\dfrac{2}{3}$."
              },
              {
                "step": "$a_n = 10 \\cdot \\left(\\dfrac{2}{3}\\right)^{n-1}$",
                "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = 10$ and $r = \\dfrac{2}{3}$, the formula gives $a_n$ from $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = -6$ and $a_{n+1} = 7a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-6*7^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = -6$ and $a_{n+1} = 7a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "The sequence is geometric with first term $-6$ and common ratio $7$.",
                  "reason": "Geometric sequence: by the rule each term after the first is the term before it times $7$."
                },
                {
                  "step": "$a_n = -6 \\cdot 7^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = -6$ and $r = 7$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 6a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "8*6^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 6a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "The sequence is geometric with first term $8$ and common ratio $6$.",
                  "reason": "Geometric sequence: by the rule each term after the first is the term before it times $6$."
                },
                {
                  "step": "$a_n = 8 \\cdot 6^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = 8$ and $r = 6$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = -7$ and $a_{n+1} = \\dfrac{3}{2}a_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-7*(3/2)^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = -7$ and $a_{n+1} = \\dfrac{3}{2}a_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "The sequence is geometric with first term $-7$ and common ratio $\\dfrac{3}{2}$.",
                  "reason": "Geometric sequence: by the rule each term after the first is the term before it times $\\dfrac{3}{2}$."
                },
                {
                  "step": "$a_n = -7 \\cdot \\left(\\dfrac{3}{2}\\right)^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = -7$ and $r = \\dfrac{3}{2}$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 2a_n - 5$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 2a_n - 5$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
              },
              {
                "step": "$a_2 = 2 \\cdot 11 - 5 = 17$",
                "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
              },
              {
                "step": "$a_3 = 2 \\cdot 17 - 5 = 29$",
                "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
              },
              {
                "step": "$a_4 = 2 \\cdot 29 - 5 = 53$",
                "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
              },
              {
                "step": "Taking $5$ from the terms $11$, $17$, $29$ and $53$ gives $6$, $12$, $24$ and $48$, each $2$ times the one before, so the guess is $a_n = 6 \\cdot 2^{n-1} + 5$.",
                "reason": "The $n$th term $ar^{n-1}$: the numbers $6$, $12$, $24$ and $48$ start a geometric sequence with first term $6$ and common ratio $2$; four terms show a pattern and prove nothing yet."
              },
              {
                "step": "At $n = 1$ the guess gives $6 \\cdot 2^0 + 5 = 11$, which is $a_1$.",
                "reason": "Base case: the guess holds at $n = 1$, since $2^0 = 1$."
              },
              {
                "step": "Assume that $a_k = 6 \\cdot 2^{k-1} + 5$ for a whole number $k$ from $1$ up.",
                "reason": "Inductive assumption: the guess at $n = k$."
              },
              {
                "step": "$a_{k+1} = 2(6 \\cdot 2^{k-1} + 5) - 5$",
                "reason": "Inductive step: the rule with $n = k$, with line 7 put in for $a_k$."
              },
              {
                "step": "$a_{k+1} = 6 \\cdot 2^k + 10 - 5$",
                "reason": "Multiplying out, with the product law: $2 \\cdot 2^{k-1} = 2^k$."
              },
              {
                "step": "$a_{k+1} = 6 \\cdot 2^k + 5$",
                "reason": "Collecting like terms: $10 - 5 = 5$; this is the guess at $n = k + 1$, where the exponent is $k$."
              },
              {
                "step": "So $a_n = 6 \\cdot 2^{n-1} + 5$ for every whole number $n$ from $1$ up.",
                "reason": "Induction and Closed form: line 6 is the base case and lines 7 to 10 the inductive step, and the formula gives $a_n$ from $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 2a_n + 3$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "5*2^(n-1)-3",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 2$ and $a_{n+1} = 2a_n + 3$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = 2 \\cdot 2 + 3 = 7$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = 2 \\cdot 7 + 3 = 17$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = 2 \\cdot 17 + 3 = 37$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "Adding $3$ to the terms $2$, $7$, $17$ and $37$ gives $5$, $10$, $20$ and $40$, each $2$ times the one before, so the guess is $a_n = 5 \\cdot 2^{n-1} - 3$.",
                  "reason": "The $n$th term $ar^{n-1}$: the numbers $5$, $10$, $20$ and $40$ start a geometric sequence with first term $5$ and common ratio $2$; four terms show a pattern and prove nothing yet."
                },
                {
                  "step": "At $n = 1$ the guess gives $5 \\cdot 2^0 - 3 = 2$, which is $a_1$.",
                  "reason": "Base case: the guess holds at $n = 1$, since $2^0 = 1$."
                },
                {
                  "step": "Assume that $a_k = 5 \\cdot 2^{k-1} - 3$ for a whole number $k$ from $1$ up.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1} = 2(5 \\cdot 2^{k-1} - 3) + 3$",
                  "reason": "Inductive step: the rule with $n = k$, with line 7 put in for $a_k$."
                },
                {
                  "step": "$a_{k+1} = 5 \\cdot 2^k - 6 + 3$",
                  "reason": "Multiplying out, with the product law: $2 \\cdot 2^{k-1} = 2^k$."
                },
                {
                  "step": "$a_{k+1} = 5 \\cdot 2^k - 3$",
                  "reason": "Collecting like terms: $-6 + 3 = -3$; this is the guess at $n = k + 1$, where the exponent is $k$."
                },
                {
                  "step": "So $a_n = 5 \\cdot 2^{n-1} - 3$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction and Closed form: line 6 is the base case and lines 7 to 10 the inductive step, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 5$ and $a_{n+1} = 5a_n - 4$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "4*5^(n-1)+1",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 5$ and $a_{n+1} = 5a_n - 4$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = 5 \\cdot 5 - 4 = 21$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = 5 \\cdot 21 - 4 = 101$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = 5 \\cdot 101 - 4 = 501$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "Taking $1$ from the terms $5$, $21$, $101$ and $501$ gives $4$, $20$, $100$ and $500$, each $5$ times the one before, so the guess is $a_n = 4 \\cdot 5^{n-1} + 1$.",
                  "reason": "The $n$th term $ar^{n-1}$: the numbers $4$, $20$, $100$ and $500$ start a geometric sequence with first term $4$ and common ratio $5$; four terms show a pattern and prove nothing yet."
                },
                {
                  "step": "At $n = 1$ the guess gives $4 \\cdot 5^0 + 1 = 5$, which is $a_1$.",
                  "reason": "Base case: the guess holds at $n = 1$, since $5^0 = 1$."
                },
                {
                  "step": "Assume that $a_k = 4 \\cdot 5^{k-1} + 1$ for a whole number $k$ from $1$ up.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1} = 5(4 \\cdot 5^{k-1} + 1) - 4$",
                  "reason": "Inductive step: the rule with $n = k$, with line 7 put in for $a_k$."
                },
                {
                  "step": "$a_{k+1} = 4 \\cdot 5^k + 5 - 4$",
                  "reason": "Multiplying out, with the product law: $5 \\cdot 5^{k-1} = 5^k$."
                },
                {
                  "step": "$a_{k+1} = 4 \\cdot 5^k + 1$",
                  "reason": "Collecting like terms: $5 - 4 = 1$; this is the guess at $n = k + 1$, where the exponent is $k$."
                },
                {
                  "step": "So $a_n = 4 \\cdot 5^{n-1} + 1$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction and Closed form: line 6 is the base case and lines 7 to 10 the inductive step, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 5a_n - 24$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "2*5^(n-1)+6",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = 5a_n - 24$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule gives each later term from the one before it."
                },
                {
                  "step": "$a_2 = 5 \\cdot 8 - 24 = 16$",
                  "reason": "Substituting a value: $n = 1$ in the rule, with the starting term."
                },
                {
                  "step": "$a_3 = 5 \\cdot 16 - 24 = 56$",
                  "reason": "Substituting a value: $n = 2$ in the rule, with $a_2$ from line 2."
                },
                {
                  "step": "$a_4 = 5 \\cdot 56 - 24 = 256$",
                  "reason": "Substituting a value: $n = 3$ in the rule, with $a_3$ from line 3."
                },
                {
                  "step": "Taking $6$ from the terms $8$, $16$, $56$ and $256$ gives $2$, $10$, $50$ and $250$, each $5$ times the one before, so the guess is $a_n = 2 \\cdot 5^{n-1} + 6$.",
                  "reason": "The $n$th term $ar^{n-1}$: the numbers $2$, $10$, $50$ and $250$ start a geometric sequence with first term $2$ and common ratio $5$; four terms show a pattern and prove nothing yet."
                },
                {
                  "step": "At $n = 1$ the guess gives $2 \\cdot 5^0 + 6 = 8$, which is $a_1$.",
                  "reason": "Base case: the guess holds at $n = 1$, since $5^0 = 1$."
                },
                {
                  "step": "Assume that $a_k = 2 \\cdot 5^{k-1} + 6$ for a whole number $k$ from $1$ up.",
                  "reason": "Inductive assumption: the guess at $n = k$."
                },
                {
                  "step": "$a_{k+1} = 5(2 \\cdot 5^{k-1} + 6) - 24$",
                  "reason": "Inductive step: the rule with $n = k$, with line 7 put in for $a_k$."
                },
                {
                  "step": "$a_{k+1} = 2 \\cdot 5^k + 30 - 24$",
                  "reason": "Multiplying out, with the product law: $5 \\cdot 5^{k-1} = 5^k$."
                },
                {
                  "step": "$a_{k+1} = 2 \\cdot 5^k + 6$",
                  "reason": "Collecting like terms: $30 - 24 = 6$; this is the guess at $n = k + 1$, where the exponent is $k$."
                },
                {
                  "step": "So $a_n = 2 \\cdot 5^{n-1} + 6$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction and Closed form: line 6 is the base case and lines 7 to 10 the inductive step, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -3$ and $a_{n+1} = 10(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -3$ and $a_{n+1} = 10(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule makes each later term from all the terms before it."
              },
              {
                "step": "$a_2 = 10 \\cdot (-3) = -30$",
                "reason": "Substituting a value: $n = 1$ in the rule, where the sum is $a_1$ alone."
              },
              {
                "step": "$a_{n+2} = 10(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the rule."
              },
              {
                "step": "$a_{n+2} - a_{n+1} = 10a_{n+1}$",
                "reason": "Adding two equations: the rule at $n$, with every sign changed, is added to line 3, so the terms $a_1$ to $a_n$ go."
              },
              {
                "step": "$a_{n+2} = 11a_{n+1}$",
                "reason": "Adding the same number to both sides: $a_{n+1}$ is added to both sides; the line holds for every whole number $n$ from $1$ up."
              },
              {
                "step": "The terms from $a_2$ on form a geometric sequence with first term $-30$ and common ratio $11$.",
                "reason": "Geometric sequence: line 5 makes each term from $a_3$ on $11$ times the term before it; it does not reach back to $a_1$, and $a_2 = 10a_1$ is not $11a_1$."
              },
              {
                "step": "$a_n = -30 \\cdot 11^{n-2}$",
                "reason": "The $n$th term $ar^{n-1}$ and Closed form: counted from $a_2$, the term $a_n$ stands in place $n - 1$, so the exponent is $n - 2$; at $n = 1$ the formula gives $-\\dfrac{30}{11}$, which is not $a_1 = -3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 9$ and $a_{n+1} = 9(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "81*10^(n-2)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 9$ and $a_{n+1} = 9(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule makes each later term from all the terms before it."
                },
                {
                  "step": "$a_2 = 9 \\cdot 9 = 81$",
                  "reason": "Substituting a value: $n = 1$ in the rule, where the sum is $a_1$ alone."
                },
                {
                  "step": "$a_{n+2} = 9(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the rule."
                },
                {
                  "step": "$a_{n+2} - a_{n+1} = 9a_{n+1}$",
                  "reason": "Adding two equations: the rule at $n$, with every sign changed, is added to line 3, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+2} = 10a_{n+1}$",
                  "reason": "Adding the same number to both sides: $a_{n+1}$ is added to both sides; the line holds for every whole number $n$ from $1$ up."
                },
                {
                  "step": "The terms from $a_2$ on form a geometric sequence with first term $81$ and common ratio $10$.",
                  "reason": "Geometric sequence: line 5 makes each term from $a_3$ on $10$ times the term before it; it does not reach back to $a_1$, and $a_2 = 9a_1$ is not $10a_1$."
                },
                {
                  "step": "$a_n = 81 \\cdot 10^{n-2}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: counted from $a_2$, the term $a_n$ stands in place $n - 1$, so the exponent is $n - 2$; at $n = 1$ the formula gives $\\dfrac{81}{10}$, which is not $a_1 = 9$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -7$ and $a_{n+1} = 4(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-28*5^(n-2)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = -7$ and $a_{n+1} = 4(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule makes each later term from all the terms before it."
                },
                {
                  "step": "$a_2 = 4 \\cdot (-7) = -28$",
                  "reason": "Substituting a value: $n = 1$ in the rule, where the sum is $a_1$ alone."
                },
                {
                  "step": "$a_{n+2} = 4(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the rule."
                },
                {
                  "step": "$a_{n+2} - a_{n+1} = 4a_{n+1}$",
                  "reason": "Adding two equations: the rule at $n$, with every sign changed, is added to line 3, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+2} = 5a_{n+1}$",
                  "reason": "Adding the same number to both sides: $a_{n+1}$ is added to both sides; the line holds for every whole number $n$ from $1$ up."
                },
                {
                  "step": "The terms from $a_2$ on form a geometric sequence with first term $-28$ and common ratio $5$.",
                  "reason": "Geometric sequence: line 5 makes each term from $a_3$ on $5$ times the term before it; it does not reach back to $a_1$, and $a_2 = 4a_1$ is not $5a_1$."
                },
                {
                  "step": "$a_n = -28 \\cdot 5^{n-2}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: counted from $a_2$, the term $a_n$ stands in place $n - 1$, so the exponent is $n - 2$; at $n = 1$ the formula gives $-\\dfrac{28}{5}$, which is not $a_1 = -7$."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 4$ and $a_{n+1} = 6(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "24*7^(n-2)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$ that holds for every whole number $n$ from $2$ up, where $a_1 = 4$ and $a_{n+1} = 6(a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and the rule makes each later term from all the terms before it."
                },
                {
                  "step": "$a_2 = 6 \\cdot 4 = 24$",
                  "reason": "Substituting a value: $n = 1$ in the rule, where the sum is $a_1$ alone."
                },
                {
                  "step": "$a_{n+2} = 6(a_1 + a_2 + \\dots + a_n + a_{n+1})$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in the rule."
                },
                {
                  "step": "$a_{n+2} - a_{n+1} = 6a_{n+1}$",
                  "reason": "Adding two equations: the rule at $n$, with every sign changed, is added to line 3, so the terms $a_1$ to $a_n$ go."
                },
                {
                  "step": "$a_{n+2} = 7a_{n+1}$",
                  "reason": "Adding the same number to both sides: $a_{n+1}$ is added to both sides; the line holds for every whole number $n$ from $1$ up."
                },
                {
                  "step": "The terms from $a_2$ on form a geometric sequence with first term $24$ and common ratio $7$.",
                  "reason": "Geometric sequence: line 5 makes each term from $a_3$ on $7$ times the term before it; it does not reach back to $a_1$, and $a_2 = 6a_1$ is not $7a_1$."
                },
                {
                  "step": "$a_n = 24 \\cdot 7^{n-2}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: counted from $a_2$, the term $a_n$ stands in place $n - 1$, so the exponent is $n - 2$; at $n = 1$ the formula gives $\\dfrac{24}{7}$, which is not $a_1 = 4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t226-k4",
      "forms": [
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 4$, $a_{n+1} = \\dfrac{a_n^2b_n}{8}$ and $b_{n+1} = \\dfrac{8}{a_n}$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_1 = 4$, $b_1 = 4$, $a_{n+1} = \\dfrac{a_n^2b_n}{8}$ and $b_{n+1} = \\dfrac{8}{a_n}$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
              },
              {
                "step": "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{8} \\cdot \\dfrac{8}{a_n}$",
                "reason": "Multiplying two equations: the left sides are multiplied together, and the right sides."
              },
              {
                "step": "$a_{n+1}b_{n+1} = a_nb_n$",
                "reason": "Cancelling a common factor: $8$ and one factor $a_n$ cancel."
              },
              {
                "step": "So $a_nb_n = 16$ for every whole number $n$ from $1$ up.",
                "reason": "Induction: $a_1b_1 = 4 \\cdot 4 = 16$, and by line 3 each product equals the one before it."
              },
              {
                "step": "$a_{n+1} = \\dfrac{16a_n}{8}$",
                "reason": "Substituting a value: the first rule is $a_{n+1} = \\dfrac{a_n \\cdot a_nb_n}{8}$, and line 4 gives $a_nb_n = 16$."
              },
              {
                "step": "$a_{n+1} = 2a_n$",
                "reason": "Cancelling a common factor: $\\dfrac{16}{8} = 2$."
              },
              {
                "step": "The numbers $a_n$ form a geometric sequence with first term $4$ and common ratio $2$.",
                "reason": "Geometric sequence: by line 6 each term after the first is the term before it times $2$."
              },
              {
                "step": "$a_n = 4 \\cdot 2^{n-1}$",
                "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = 4$ and $r = 2$, the formula gives $a_n$ from $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 3$, $b_1 = 5$, $a_{n+1} = \\dfrac{a_n^2b_n}{9}$ and $b_{n+1} = \\dfrac{9}{a_n}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "3*(5/3)^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 3$, $b_1 = 5$, $a_{n+1} = \\dfrac{a_n^2b_n}{9}$ and $b_{n+1} = \\dfrac{9}{a_n}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{9} \\cdot \\dfrac{9}{a_n}$",
                  "reason": "Multiplying two equations: the left sides are multiplied together, and the right sides."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = a_nb_n$",
                  "reason": "Cancelling a common factor: $9$ and one factor $a_n$ cancel."
                },
                {
                  "step": "So $a_nb_n = 15$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1b_1 = 3 \\cdot 5 = 15$, and by line 3 each product equals the one before it."
                },
                {
                  "step": "$a_{n+1} = \\dfrac{15a_n}{9}$",
                  "reason": "Substituting a value: the first rule is $a_{n+1} = \\dfrac{a_n \\cdot a_nb_n}{9}$, and line 4 gives $a_nb_n = 15$."
                },
                {
                  "step": "$a_{n+1} = \\dfrac{5}{3}a_n$",
                  "reason": "Cancelling a common factor: $\\dfrac{15}{9} = \\dfrac{5}{3}$."
                },
                {
                  "step": "The numbers $a_n$ form a geometric sequence with first term $3$ and common ratio $\\dfrac{5}{3}$.",
                  "reason": "Geometric sequence: by line 6 each term after the first is the term before it times $\\dfrac{5}{3}$."
                },
                {
                  "step": "$a_n = 3 \\cdot \\left(\\dfrac{5}{3}\\right)^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = 3$ and $r = \\dfrac{5}{3}$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -12$, $a_{n+1} = \\dfrac{a_n^2b_n}{4}$ and $b_{n+1} = \\dfrac{4}{a_n}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-2*6^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = -2$, $b_1 = -12$, $a_{n+1} = \\dfrac{a_n^2b_n}{4}$ and $b_{n+1} = \\dfrac{4}{a_n}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{4} \\cdot \\dfrac{4}{a_n}$",
                  "reason": "Multiplying two equations: the left sides are multiplied together, and the right sides."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = a_nb_n$",
                  "reason": "Cancelling a common factor: $4$ and one factor $a_n$ cancel."
                },
                {
                  "step": "So $a_nb_n = 24$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1b_1 = -2 \\cdot (-12) = 24$, and by line 3 each product equals the one before it."
                },
                {
                  "step": "$a_{n+1} = \\dfrac{24a_n}{4}$",
                  "reason": "Substituting a value: the first rule is $a_{n+1} = \\dfrac{a_n \\cdot a_nb_n}{4}$, and line 4 gives $a_nb_n = 24$."
                },
                {
                  "step": "$a_{n+1} = 6a_n$",
                  "reason": "Cancelling a common factor: $\\dfrac{24}{4} = 6$."
                },
                {
                  "step": "The numbers $a_n$ form a geometric sequence with first term $-2$ and common ratio $6$.",
                  "reason": "Geometric sequence: by line 6 each term after the first is the term before it times $6$."
                },
                {
                  "step": "$a_n = -2 \\cdot 6^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = -2$ and $r = 6$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 6$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{6}$ and $b_{n+1} = \\dfrac{6}{a_n}$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "6*3^(n-1)",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 6$, $b_1 = 3$, $a_{n+1} = \\dfrac{a_n^2b_n}{6}$ and $b_{n+1} = \\dfrac{6}{a_n}$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = \\dfrac{a_n^2b_n}{6} \\cdot \\dfrac{6}{a_n}$",
                  "reason": "Multiplying two equations: the left sides are multiplied together, and the right sides."
                },
                {
                  "step": "$a_{n+1}b_{n+1} = a_nb_n$",
                  "reason": "Cancelling a common factor: $6$ and one factor $a_n$ cancel."
                },
                {
                  "step": "So $a_nb_n = 18$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1b_1 = 6 \\cdot 3 = 18$, and by line 3 each product equals the one before it."
                },
                {
                  "step": "$a_{n+1} = \\dfrac{18a_n}{6}$",
                  "reason": "Substituting a value: the first rule is $a_{n+1} = \\dfrac{a_n \\cdot a_nb_n}{6}$, and line 4 gives $a_nb_n = 18$."
                },
                {
                  "step": "$a_{n+1} = 3a_n$",
                  "reason": "Cancelling a common factor: $\\dfrac{18}{6} = 3$."
                },
                {
                  "step": "The numbers $a_n$ form a geometric sequence with first term $6$ and common ratio $3$.",
                  "reason": "Geometric sequence: by line 6 each term after the first is the term before it times $3$."
                },
                {
                  "step": "$a_n = 6 \\cdot 3^{n-1}$",
                  "reason": "The $n$th term $ar^{n-1}$ and Closed form: with $a = 6$ and $r = 3$, the formula gives $a_n$ from $n$ alone."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a closed form for $a_n$, where $a_1 = 2$, $b_1 = -9$, $a_{n+1} = 7a_n + 6b_n$ and $b_{n+1} = -6a_n - 5b_n$ for every whole number $n$ from $1$ up.",
            "lines": [
              {
                "step": "Find a closed form for $a_n$, where $a_1 = 2$, $b_1 = -9$, $a_{n+1} = 7a_n + 6b_n$ and $b_{n+1} = -6a_n - 5b_n$ for every whole number $n$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
              },
              {
                "step": "$a_{n+1} + b_{n+1} = 7a_n + 6b_n - 6a_n - 5b_n$",
                "reason": "Adding two equations: the left sides are added, and the right sides."
              },
              {
                "step": "$a_{n+1} + b_{n+1} = a_n + b_n$",
                "reason": "Collecting like terms: $7a_n - 6a_n = a_n$ and $6b_n - 5b_n = b_n$."
              },
              {
                "step": "So $a_n + b_n = -7$ for every whole number $n$ from $1$ up.",
                "reason": "Induction: $a_1 + b_1 = 2 + (-9) = -7$, and by line 3 each sum equals the one before it."
              },
              {
                "step": "$a_{n+1} = a_n + 6(a_n + b_n)$",
                "reason": "Common factor: $7a_n + 6b_n = a_n + 6a_n + 6b_n$, and $6$ is taken out of the last two terms."
              },
              {
                "step": "$a_{n+1} = a_n - 42$",
                "reason": "Substituting a value: line 4 gives $a_n + b_n = -7$, and $6 \\cdot (-7) = -42$."
              },
              {
                "step": "The numbers $a_n$ form an arithmetic sequence with first term $2$ and common difference $-42$.",
                "reason": "Arithmetic sequence: by line 6 each term after the first minus the term before it is the same number."
              },
              {
                "step": "$a_n = 2 + (n - 1) \\cdot (-42)$",
                "reason": "The $n$th term $a + (n - 1)d$, with $a = 2$ and $d = -42$."
              },
              {
                "step": "$a_n = 2 - 42n + 42$",
                "reason": "Multiplying out: the number $-42$ multiplies each term of the bracket $n - 1$."
              },
              {
                "step": "$a_n = -42n + 44$",
                "reason": "Collecting like terms and Closed form: $2 + 42 = 44$, and the formula gives $a_n$ from $n$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 5$, $b_1 = -2$, $a_{n+1} = -2a_n - 3b_n$ and $b_{n+1} = 3a_n + 4b_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-9*n+14",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 5$, $b_1 = -2$, $a_{n+1} = -2a_n - 3b_n$ and $b_{n+1} = 3a_n + 4b_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = -2a_n - 3b_n + 3a_n + 4b_n$",
                  "reason": "Adding two equations: the left sides are added, and the right sides."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = a_n + b_n$",
                  "reason": "Collecting like terms: $-2a_n + 3a_n = a_n$ and $-3b_n + 4b_n = b_n$."
                },
                {
                  "step": "So $a_n + b_n = 3$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1 + b_1 = 5 + (-2) = 3$, and by line 3 each sum equals the one before it."
                },
                {
                  "step": "$a_{n+1} = a_n - 3(a_n + b_n)$",
                  "reason": "Common factor: $-2a_n - 3b_n = a_n - 3a_n - 3b_n$, and $-3$ is taken out of the last two terms."
                },
                {
                  "step": "$a_{n+1} = a_n - 9$",
                  "reason": "Substituting a value: line 4 gives $a_n + b_n = 3$, and $-3 \\cdot 3 = -9$."
                },
                {
                  "step": "The numbers $a_n$ form an arithmetic sequence with first term $5$ and common difference $-9$.",
                  "reason": "Arithmetic sequence: by line 6 each term after the first minus the term before it is the same number."
                },
                {
                  "step": "$a_n = 5 + (n - 1) \\cdot (-9)$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 5$ and $d = -9$."
                },
                {
                  "step": "$a_n = 5 - 9n + 9$",
                  "reason": "Multiplying out: the number $-9$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = -9n + 14$",
                  "reason": "Collecting like terms and Closed form: $5 + 9 = 14$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = 11$, $b_1 = -4$, $a_{n+1} = 8a_n + 7b_n$ and $b_{n+1} = -7a_n - 6b_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "49*n-38",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = 11$, $b_1 = -4$, $a_{n+1} = 8a_n + 7b_n$ and $b_{n+1} = -7a_n - 6b_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = 8a_n + 7b_n - 7a_n - 6b_n$",
                  "reason": "Adding two equations: the left sides are added, and the right sides."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = a_n + b_n$",
                  "reason": "Collecting like terms: $8a_n - 7a_n = a_n$ and $7b_n - 6b_n = b_n$."
                },
                {
                  "step": "So $a_n + b_n = 7$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1 + b_1 = 11 + (-4) = 7$, and by line 3 each sum equals the one before it."
                },
                {
                  "step": "$a_{n+1} = a_n + 7(a_n + b_n)$",
                  "reason": "Common factor: $8a_n + 7b_n = a_n + 7a_n + 7b_n$, and $7$ is taken out of the last two terms."
                },
                {
                  "step": "$a_{n+1} = a_n + 49$",
                  "reason": "Substituting a value: line 4 gives $a_n + b_n = 7$, and $7 \\cdot 7 = 49$."
                },
                {
                  "step": "The numbers $a_n$ form an arithmetic sequence with first term $11$ and common difference $49$.",
                  "reason": "Arithmetic sequence: by line 6 each term after the first minus the term before it is the same number."
                },
                {
                  "step": "$a_n = 11 + (n - 1) \\cdot 49$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = 11$ and $d = 49$."
                },
                {
                  "step": "$a_n = 11 + 49n - 49$",
                  "reason": "Multiplying out: the number $49$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = 49n - 38$",
                  "reason": "Collecting like terms and Closed form: $11 - 49 = -38$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            },
            {
              "prompt": "Find a closed form for $a_n$, where $a_1 = -5$, $b_1 = -4$, $a_{n+1} = 5a_n + 4b_n$ and $b_{n+1} = -4a_n - 3b_n$ for every whole number $n$ from $1$ up.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-36*n+31",
              "lines": [
                {
                  "step": "Find a closed form for $a_n$, where $a_1 = -5$, $b_1 = -4$, $a_{n+1} = 5a_n + 4b_n$ and $b_{n+1} = -4a_n - 3b_n$ for every whole number $n$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ and $b_1$ start the two sequences, and each rule uses terms of both."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = 5a_n + 4b_n - 4a_n - 3b_n$",
                  "reason": "Adding two equations: the left sides are added, and the right sides."
                },
                {
                  "step": "$a_{n+1} + b_{n+1} = a_n + b_n$",
                  "reason": "Collecting like terms: $5a_n - 4a_n = a_n$ and $4b_n - 3b_n = b_n$."
                },
                {
                  "step": "So $a_n + b_n = -9$ for every whole number $n$ from $1$ up.",
                  "reason": "Induction: $a_1 + b_1 = -5 + (-4) = -9$, and by line 3 each sum equals the one before it."
                },
                {
                  "step": "$a_{n+1} = a_n + 4(a_n + b_n)$",
                  "reason": "Common factor: $5a_n + 4b_n = a_n + 4a_n + 4b_n$, and $4$ is taken out of the last two terms."
                },
                {
                  "step": "$a_{n+1} = a_n - 36$",
                  "reason": "Substituting a value: line 4 gives $a_n + b_n = -9$, and $4 \\cdot (-9) = -36$."
                },
                {
                  "step": "The numbers $a_n$ form an arithmetic sequence with first term $-5$ and common difference $-36$.",
                  "reason": "Arithmetic sequence: by line 6 each term after the first minus the term before it is the same number."
                },
                {
                  "step": "$a_n = -5 + (n - 1) \\cdot (-36)$",
                  "reason": "The $n$th term $a + (n - 1)d$, with $a = -5$ and $d = -36$."
                },
                {
                  "step": "$a_n = -5 - 36n + 36$",
                  "reason": "Multiplying out: the number $-36$ multiplies each term of the bracket $n - 1$."
                },
                {
                  "step": "$a_n = -36n + 31$",
                  "reason": "Collecting like terms and Closed form: $-5 + 36 = 31$, and the formula gives $a_n$ from $n$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t226-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -6$ and $a_{n+1} = a_n - 13$ for every whole number $n$ from $1$ up, and write that line right.",
            "given": [
              "The sequence is arithmetic with first term $-6$.",
              "The common difference is $d = -13$.",
              "The $n$th term is $-6 + (n - 1) \\cdot (-13)$.",
              "$-6 + (n - 1) \\cdot (-13) = -6 - 13n + 13$",
              "$-6 - 13n + 13 = 13n + 7$",
              "A closed form is $a_n = 13n + 7$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = -6$ and $a_{n+1} = a_n - 13$ for every whole number $n$ from $1$ up, and write that line right.",
                "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
              },
              {
                "step": "Every line before line 5 is right.",
                "reason": "Arithmetic sequence: line 1 names the sequence from its rule, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
              },
              {
                "step": "Line 5 writes the term $-13n$ as $13n$.",
                "reason": "A sign lost: collecting like terms adds only the numbers, $-6 + 13 = 7$, and the term in $n$ keeps its minus sign."
              },
              {
                "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                "reason": "A sign lost: each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 5 written right is $-6 - 13n + 13 = -13n + 7$.",
                "reason": "Collecting like terms: worked with every sign kept, the line is true."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = a_n - 2$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The sequence is arithmetic with first term $8$.",
                "The common difference is $d = -2$.",
                "The $n$th term is $8 + (n - 1) \\cdot (-2)$.",
                "$8 + (n - 1) \\cdot (-2) = 8 - 2n - 2$",
                "$8 - 2n - 2 = -2n + 6$",
                "A closed form is $a_n = -2n + 6$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 8+(n-1)*(-2) = 8-2*n+2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 8$ and $a_{n+1} = a_n - 2$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Arithmetic sequence: line 1 names the sequence from its rule, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(n - 1) \\cdot (-2)$ as $-2n - 2$.",
                  "reason": "A sign lost: by the signs of products, $-1$ times $-2$ is $2$, so the bracket gives $-2n + 2$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "A sign lost: each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $8 + (n - 1) \\cdot (-2) = 8 - 2n + 2$.",
                  "reason": "Multiplying out: worked with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 18$ and $a_{n+1} = a_n - 6$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The sequence is arithmetic with first term $18$.",
                "The common difference is $d = -6$.",
                "The $n$th term is $18 + (n - 1) \\cdot (-6)$.",
                "$18 + (n - 1) \\cdot (-6) = 18 - 6n + 6$",
                "$18 - 6n + 6 = 6n + 24$",
                "A closed form is $a_n = 6n + 24$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 18-6*n+6 = -6*n+24",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 18$ and $a_{n+1} = a_n - 6$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 5 is right.",
                  "reason": "Arithmetic sequence: line 1 names the sequence from its rule, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 5 writes the term $-6n$ as $6n$.",
                  "reason": "A sign lost: collecting like terms adds only the numbers, $18 + 6 = 24$, and the term in $n$ keeps its minus sign."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "A sign lost: each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $18 - 6n + 6 = -6n + 24$.",
                  "reason": "Collecting like terms: worked with every sign kept, the line is true."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = a_n - 3$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The sequence is arithmetic with first term $10$.",
                "The common difference is $d = 3$.",
                "The $n$th term is $10 + (n - 1) \\cdot 3$.",
                "$10 + (n - 1) \\cdot 3 = 10 + 3n - 3$",
                "$10 + 3n - 3 = 3n + 7$",
                "A closed form is $a_n = 3n + 7$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: d = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 10$ and $a_{n+1} = a_n - 3$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Arithmetic sequence: line 1 names the sequence from its rule, and each line after it, up to the wrong one, follows from the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 gives the common difference as $3$.",
                  "reason": "A sign lost: the rule $a_{n+1} = a_n - 3$ takes $3$ away at each step, so each term minus the term before it is $-3$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "A sign lost: each later line follows from the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $d = -3$.",
                  "reason": "Common difference: worked with the sign kept, the line is true."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = 4a_n - 12$ for every whole number $n$ from $1$ up, and write that line right.",
            "given": [
              "The rule gives each term from the one before it, starting from $a_1 = 6$.",
              "The term $a_2$ is $4 \\cdot 6 = 24 - 12 = 12$.",
              "The term $a_3$ is $4 \\cdot 12 - 12 = 48 - 12 = 36$.",
              "The term $a_4$ is $4 \\cdot 36 - 12 = 144 - 12 = 132$.",
              "Taking $4$ from the terms $6$, $12$, $36$ and $132$ gives $2$, $8$, $32$ and $128$, so the guess is $a_n = 2 \\cdot 4^{n-1} + 4$.",
              "At $n = 1$ the guess gives $2 \\cdot 4^0 + 4 = 6$, which is $a_1$.",
              "With $a_k = 2 \\cdot 4^{k-1} + 4$, the rule gives $a_{k+1} = 4(2 \\cdot 4^{k-1} + 4) - 12 = 2 \\cdot 4^k + 16 - 12 = 2 \\cdot 4^k + 4$.",
              "So the guess holds at $k + 1$ whenever it holds at $k$.",
              "So $a_n = 2 \\cdot 4^{n-1} + 4$ for every whole number $n$ from $1$ up."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 6$ and $a_{n+1} = 4a_n - 12$ for every whole number $n$ from $1$ up, and write that line right.",
                "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
              },
              {
                "step": "Every line before line 2 is right.",
                "reason": "Recursion: line 1 states how the rule is used, and each line after it, up to the wrong one, is a chain whose every equals sign joins equal numbers."
              },
              {
                "step": "Line 2 writes $4 \\cdot 6 = 24 - 12$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and $4 \\cdot 6$ is $24$, not $12$; the $- 12$ of the rule is left off the first expression and brought in after the equals sign."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "The equals sign read as \"work out the answer\": each later line uses only the last number of the chain before it, and its own equals signs join equal numbers."
              },
              {
                "step": "Line 2 written right is $4 \\cdot 6 - 12 = 24 - 12 = 12$.",
                "reason": "Substituting a value: the whole right side of the rule stands before the first equals sign, so every equals sign joins equal numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 4a_n - 15$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The rule gives each term from the one before it, starting from $a_1 = 11$.",
                "The term $a_2$ is $4 \\cdot 11 - 15 = 44 - 15 = 29$.",
                "The term $a_3$ is $4 \\cdot 29 - 15 = 116 - 15 = 101$.",
                "The term $a_4$ is $4 \\cdot 101 = 404 - 15 = 389$.",
                "Taking $5$ from the terms $11$, $29$, $101$ and $389$ gives $6$, $24$, $96$ and $384$, so the guess is $a_n = 6 \\cdot 4^{n-1} + 5$.",
                "At $n = 1$ the guess gives $6 \\cdot 4^0 + 5 = 11$, which is $a_1$.",
                "With $a_k = 6 \\cdot 4^{k-1} + 5$, the rule gives $a_{k+1} = 4(6 \\cdot 4^{k-1} + 5) - 15 = 6 \\cdot 4^k + 20 - 15 = 6 \\cdot 4^k + 5$.",
                "So the guess holds at $k + 1$ whenever it holds at $k$.",
                "So $a_n = 6 \\cdot 4^{n-1} + 5$ for every whole number $n$ from $1$ up."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 4*101-15 = 404-15 = 389",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 11$ and $a_{n+1} = 4a_n - 15$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Recursion: line 1 states how the rule is used, and each line after it, up to the wrong one, is a chain whose every equals sign joins equal numbers."
                },
                {
                  "step": "Line 4 writes $4 \\cdot 101 = 404 - 15$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and $4 \\cdot 101$ is $404$, not $389$; the $- 15$ of the rule is left off the first expression and brought in after the equals sign."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "The equals sign read as \"work out the answer\": each later line uses only the last number of the chain before it, and its own equals signs join equal numbers."
                },
                {
                  "step": "Line 4 written right is $4 \\cdot 101 - 15 = 404 - 15 = 389$.",
                  "reason": "Substituting a value: the whole right side of the rule stands before the first equals sign, so every equals sign joins equal numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 13$ and $a_{n+1} = 5a_n - 16$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The rule gives each term from the one before it, starting from $a_1 = 13$.",
                "The term $a_2$ is $5 \\cdot 13 - 16 = 65 - 16 = 49$.",
                "The term $a_3$ is $5 \\cdot 49 - 16 = 245 - 16 = 229$.",
                "The term $a_4$ is $5 \\cdot 229 = 1145 - 16 = 1129$.",
                "Taking $4$ from the terms $13$, $49$, $229$ and $1129$ gives $9$, $45$, $225$ and $1125$, so the guess is $a_n = 9 \\cdot 5^{n-1} + 4$.",
                "At $n = 1$ the guess gives $9 \\cdot 5^0 + 4 = 13$, which is $a_1$.",
                "With $a_k = 9 \\cdot 5^{k-1} + 4$, the rule gives $a_{k+1} = 5(9 \\cdot 5^{k-1} + 4) - 16 = 9 \\cdot 5^k + 20 - 16 = 9 \\cdot 5^k + 4$.",
                "So the guess holds at $k + 1$ whenever it holds at $k$.",
                "So $a_n = 9 \\cdot 5^{n-1} + 4$ for every whole number $n$ from $1$ up."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 5*229-16 = 1145-16 = 1129",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 13$ and $a_{n+1} = 5a_n - 16$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 4 is right.",
                  "reason": "Recursion: line 1 states how the rule is used, and each line after it, up to the wrong one, is a chain whose every equals sign joins equal numbers."
                },
                {
                  "step": "Line 4 writes $5 \\cdot 229 = 1145 - 16$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and $5 \\cdot 229$ is $1145$, not $1129$; the $- 16$ of the rule is left off the first expression and brought in after the equals sign."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "The equals sign read as \"work out the answer\": each later line uses only the last number of the chain before it, and its own equals signs join equal numbers."
                },
                {
                  "step": "Line 4 written right is $5 \\cdot 229 - 16 = 1145 - 16 = 1129$.",
                  "reason": "Substituting a value: the whole right side of the rule stands before the first equals sign, so every equals sign joins equal numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 7$ and $a_{n+1} = 2a_n - 4$ for every whole number $n$ from $1$ up, and write that line right.",
              "given": [
                "The rule gives each term from the one before it, starting from $a_1 = 7$.",
                "The term $a_2$ is $2 \\cdot 7 = 14 - 4 = 10$.",
                "The term $a_3$ is $2 \\cdot 10 - 4 = 20 - 4 = 16$.",
                "The term $a_4$ is $2 \\cdot 16 - 4 = 32 - 4 = 28$.",
                "Taking $4$ from the terms $7$, $10$, $16$ and $28$ gives $3$, $6$, $12$ and $24$, so the guess is $a_n = 3 \\cdot 2^{n-1} + 4$.",
                "At $n = 1$ the guess gives $3 \\cdot 2^0 + 4 = 7$, which is $a_1$.",
                "With $a_k = 3 \\cdot 2^{k-1} + 4$, the rule gives $a_{k+1} = 2(3 \\cdot 2^{k-1} + 4) - 4 = 3 \\cdot 2^k + 8 - 4 = 3 \\cdot 2^k + 4$.",
                "So the guess holds at $k + 1$ whenever it holds at $k$.",
                "So $a_n = 3 \\cdot 2^{n-1} + 4$ for every whole number $n$ from $1$ up."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 2*7-4 = 14-4 = 10",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for a closed form for $a_n$, where $a_1 = 7$ and $a_{n+1} = 2a_n - 4$ for every whole number $n$ from $1$ up, and write that line right.",
                  "reason": "Closed form: this is the problem as given; the working is to end on a formula that gives $a_n$ from $n$ alone."
                },
                {
                  "step": "Every line before line 2 is right.",
                  "reason": "Recursion: line 1 states how the rule is used, and each line after it, up to the wrong one, is a chain whose every equals sign joins equal numbers."
                },
                {
                  "step": "Line 2 writes $2 \\cdot 7 = 14 - 4$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, and $2 \\cdot 7$ is $14$, not $10$; the $- 4$ of the rule is left off the first expression and brought in after the equals sign."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "The equals sign read as \"work out the answer\": each later line uses only the last number of the chain before it, and its own equals signs join equal numbers."
                },
                {
                  "step": "Line 2 written right is $2 \\cdot 7 - 4 = 14 - 4 = 10$.",
                  "reason": "Substituting a value: the whole right side of the rule stands before the first equals sign, so every equals sign joins equal numbers."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t226-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $4$ times the sum of the term before it and $2$.",
            "lines": [
              {
                "step": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $4$ times the sum of the term before it and $2$.",
                "reason": "Recursion: this is the problem as given; the sentence makes each term from the one before it, so $x$ is the term before and $y$ the term it gives."
              },
              {
                "step": "The sum of the term before and $2$ is $x + 2$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two, and the term before is $x$."
              },
              {
                "step": "That sum taken $4$ times is $4(x + 2)$.",
                "reason": "Writing a sentence as an equation: \"times the sum\" multiplies the whole sum, so the sum stands in a bracket."
              },
              {
                "step": "$y = 4(x + 2)$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is the term before it divided by $8$, with $4$ then added.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x/8+4",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is the term before it divided by $8$, with $4$ then added.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the one before it, so $x$ is the term before and $y$ the term it gives."
                },
                {
                  "step": "The term before divided by $8$ is $\\dfrac{x}{8}$.",
                  "reason": "Writing a sentence as an equation: \"divided by\" puts the term before, which is $x$, over the number."
                },
                {
                  "step": "With $4$ then added it is $\\dfrac{x}{8} + 4$.",
                  "reason": "Writing a sentence as an equation: \"then added\" adds the amount to the quotient."
                },
                {
                  "step": "$y = \\dfrac{x}{8} + 4$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $7$ less than the square of the term before it.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = x^2-7",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $7$ less than the square of the term before it.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the one before it, so $x$ is the term before and $y$ the term it gives."
                },
                {
                  "step": "The square of the term before is $x^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the term before, which is $x$, to the power $2$."
                },
                {
                  "step": "Taking $7$ from that gives $x^2 - 7$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows it."
                },
                {
                  "step": "$y = x^2 - 7$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $5$ more than $6$ times the term before it.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6*x+5",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $y$ alone on the left, where $x$ stands for a term of the sequence and $y$ for the term after it: Each term after the first is $5$ more than $6$ times the term before it.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the one before it, so $x$ is the term before and $y$ the term it gives."
                },
                {
                  "step": "The term before taken $6$ times is $6x$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies the term before, which is $x$."
                },
                {
                  "step": "Adding $5$ to that gives $6x + 5$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount."
                },
                {
                  "step": "$y = 6x + 5$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $y$ alone on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $4$ times the term before it plus $7$ times the term two places before it.",
            "lines": [
              {
                "step": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $4$ times the term before it plus $7$ times the term two places before it.",
                "reason": "Recursion: this is the problem as given; the sentence makes each term from the two before it, so $x$ and $y$ are those two and $z$ the term they give."
              },
              {
                "step": "The term before taken $4$ times is $4y$.",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, and the term before $z$ is $y$."
              },
              {
                "step": "The term two places before taken $7$ times is $7x$.",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, and the term two places before $z$ is $x$."
              },
              {
                "step": "$z = 4y + 7x$",
                "reason": "Writing a sentence as an equation: \"plus\" joins the two products, and the word \"is\" marks the place of the equals sign, with $z$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $5$ times the term before it minus $3$ times the term two places before it.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = 5*y-3*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is $5$ times the term before it minus $3$ times the term two places before it.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the two before it, so $x$ and $y$ are those two and $z$ the term they give."
                },
                {
                  "step": "The term before taken $5$ times is $5y$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and the term before $z$ is $y$."
                },
                {
                  "step": "The term two places before taken $3$ times is $3x$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and the term two places before $z$ is $x$."
                },
                {
                  "step": "$z = 5y - 3x$",
                  "reason": "Writing a sentence as an equation: \"minus\" joins the two products, and the word \"is\" marks the place of the equals sign, with $z$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the sum of the two terms before it, divided by $6$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = (x+y)/6",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the sum of the two terms before it, divided by $6$.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the two before it, so $x$ and $y$ are those two and $z$ the term they give."
                },
                {
                  "step": "The sum of the two terms before is $x + y$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two terms before $z$, which are $x$ and $y$."
                },
                {
                  "step": "Divided by $6$, it is $\\dfrac{x + y}{6}$.",
                  "reason": "Writing a sentence as an equation: \"divided by\" puts the whole sum over the number."
                },
                {
                  "step": "$z = \\dfrac{x + y}{6}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $z$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the product of the two terms before it, plus $11$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "z = x*y+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation with $z$ alone on the left, where $x$ and $y$ stand for two terms in a row of the sequence, $x$ first, and $z$ for the term after them: Each term from the third on is the product of the two terms before it, plus $11$.",
                  "reason": "Recursion: this is the problem as given; the sentence makes each term from the two before it, so $x$ and $y$ are those two and $z$ the term they give."
                },
                {
                  "step": "The product of the two terms before is $xy$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two terms before $z$, which are $x$ and $y$."
                },
                {
                  "step": "Plus $11$, it is $xy + 11$.",
                  "reason": "Writing a sentence as an equation: \"plus\" adds the amount to the product."
                },
                {
                  "step": "$z = xy + 11$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign, with $z$ alone on the left."
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
