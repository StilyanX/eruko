export default {
  "number": 239,
  "title": "Periodic sequences and functions",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "222"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the least period of the sequence where $a_0 = 33$ and $a_{n+1}$ is the remainder of $a_n + 20$ on division by $34$ for every whole number $n$.",
    "form": "Answer as an integer.",
    "answer": "17",
    "solution": [
      "Find the least period of the sequence where $a_0 = 33$ and $a_{n+1}$ is the remainder of $a_n + 20$ on division by $34$ for every whole number $n$.",
      "Each term $a_{n+1}$ leaves the same remainder on division by $34$ as $a_n + 20$.",
      "Each term $a_n$ is the remainder of $33 + 20n$ on division by $34$, for every whole number $n$.",
      "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $34$ divides $20p$.",
      "$\\dfrac{20p}{34} = \\dfrac{10p}{17}$",
      "The number $34$ divides $20p$ exactly when $17$ divides $p$.",
      "The least period is $17$."
    ]
  },
  "ideas": [
    {
      "name": "Period",
      "concrete": "Take $a_0 = 3$ and let $a_{n+1}$ be the remainder of $a_n + 10$ on division by $12$: the terms run $3, 1, 11, 9, 7, 5, 3, 1, \\dots$, and $a_6 = a_0$. Each term fixes the next, so $a_{n+6} = a_n$ for every whole number $n$, and no $p$ from $1$ to $5$ brings $3$ back, so $6$ is the least period. For $a_{n+2}$ the remainder of $a_{n+1} + 2a_n$ on division by $3$, each pair $(a_n, a_{n+1})$ is one of $3 \\cdot 3 = 9$ pairs, and the step runs backwards too: $a_n$ is the remainder of $2a_{n+2} + a_{n+1}$ on division by $3$. So the pairs return to $(a_0, a_1)$ within $9$ steps.",
      "general": "For a whole number $p$ from $1$ up, a sequence has **period** $p$ when $a_{n+p} = a_n$ for every whole number $n$, and a function $f$ has period $p$ when $f(x + p) = f(x)$ for every $x$ in its domain; the least such $p$ is the **least period**. When each term, or each pair of neighbouring terms, fixes the next, a return to the starting terms after $p$ steps gives period $p$. **Pigeonhole on states**: when every state of a sequence (a term, or a pair of neighbouring terms) lies in a set of $s$ states, each state fixes the next, and each state follows from exactly one state, the states repeat from the start with a period from $1$ to $s$."
    }
  ],
  "kinds": [
    {
      "id": "t239-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the least period of the sequence where $a_0 = 48$ and $a_{n+1}$ is the remainder of $a_n + 44$ on division by $78$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the least period of the sequence where $a_0 = 48$ and $a_{n+1}$ is the remainder of $a_n + 44$ on division by $78$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
              },
              {
                "step": "Each term $a_{n+1}$ leaves the same remainder on division by $78$ as $a_n + 44$.",
                "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $78$ differ by a multiple of $78$."
              },
              {
                "step": "Each term $a_n$ is the remainder of $48 + 44n$ on division by $78$, for every whole number $n$.",
                "reason": "Induction: true at $n = 0$, and by line 2 each step adds $44$ and keeps the remainder."
              },
              {
                "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $78$ divides $44p$.",
                "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $78$ exactly when $78$ divides their difference, and $(48 + 44(n + p)) - (48 + 44n) = 44p$."
              },
              {
                "step": "$\\dfrac{44p}{78} = \\dfrac{22p}{39}$",
                "reason": "Cancelling a common factor: $44$ and $78$ share the factor $2$."
              },
              {
                "step": "The number $78$ divides $44p$ exactly when $39$ divides $p$.",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{22}{39}$ is in lowest terms, so $\\dfrac{22p}{39}$ is a whole number exactly when $39$ divides $p$."
              },
              {
                "step": "The least period is $39$.",
                "reason": "Period: the least whole number $p$ from $1$ up that $39$ divides is $39$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least period of the sequence where $a_0 = 40$ and $a_{n+1}$ is the remainder of $a_n + 46$ on division by $52$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find the least period of the sequence where $a_0 = 40$ and $a_{n+1}$ is the remainder of $a_n + 46$ on division by $52$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
                },
                {
                  "step": "Each term $a_{n+1}$ leaves the same remainder on division by $52$ as $a_n + 46$.",
                  "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $52$ differ by a multiple of $52$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $40 + 46n$ on division by $52$, for every whole number $n$.",
                  "reason": "Induction: true at $n = 0$, and by line 2 each step adds $46$ and keeps the remainder."
                },
                {
                  "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $52$ divides $46p$.",
                  "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $52$ exactly when $52$ divides their difference, and $(40 + 46(n + p)) - (40 + 46n) = 46p$."
                },
                {
                  "step": "$\\dfrac{46p}{52} = \\dfrac{23p}{26}$",
                  "reason": "Cancelling a common factor: $46$ and $52$ share the factor $2$."
                },
                {
                  "step": "The number $52$ divides $46p$ exactly when $26$ divides $p$.",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{23}{26}$ is in lowest terms, so $\\dfrac{23p}{26}$ is a whole number exactly when $26$ divides $p$."
                },
                {
                  "step": "The least period is $26$.",
                  "reason": "Period: the least whole number $p$ from $1$ up that $26$ divides is $26$."
                }
              ]
            },
            {
              "prompt": "Find the least period of the sequence where $a_0 = 83$ and $a_{n+1}$ is the remainder of $a_n + 42$ on division by $87$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find the least period of the sequence where $a_0 = 83$ and $a_{n+1}$ is the remainder of $a_n + 42$ on division by $87$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
                },
                {
                  "step": "Each term $a_{n+1}$ leaves the same remainder on division by $87$ as $a_n + 42$.",
                  "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $87$ differ by a multiple of $87$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $83 + 42n$ on division by $87$, for every whole number $n$.",
                  "reason": "Induction: true at $n = 0$, and by line 2 each step adds $42$ and keeps the remainder."
                },
                {
                  "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $87$ divides $42p$.",
                  "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $87$ exactly when $87$ divides their difference, and $(83 + 42(n + p)) - (83 + 42n) = 42p$."
                },
                {
                  "step": "$\\dfrac{42p}{87} = \\dfrac{14p}{29}$",
                  "reason": "Cancelling a common factor: $42$ and $87$ share the factor $3$."
                },
                {
                  "step": "The number $87$ divides $42p$ exactly when $29$ divides $p$.",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{14}{29}$ is in lowest terms, so $\\dfrac{14p}{29}$ is a whole number exactly when $29$ divides $p$."
                },
                {
                  "step": "The least period is $29$.",
                  "reason": "Period: the least whole number $p$ from $1$ up that $29$ divides is $29$."
                }
              ]
            },
            {
              "prompt": "Find the least period of the sequence where $a_0 = 63$ and $a_{n+1}$ is the remainder of $a_n + 15$ on division by $69$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the least period of the sequence where $a_0 = 63$ and $a_{n+1}$ is the remainder of $a_n + 15$ on division by $69$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
                },
                {
                  "step": "Each term $a_{n+1}$ leaves the same remainder on division by $69$ as $a_n + 15$.",
                  "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $69$ differ by a multiple of $69$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $63 + 15n$ on division by $69$, for every whole number $n$.",
                  "reason": "Induction: true at $n = 0$, and by line 2 each step adds $15$ and keeps the remainder."
                },
                {
                  "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $69$ divides $15p$.",
                  "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $69$ exactly when $69$ divides their difference, and $(63 + 15(n + p)) - (63 + 15n) = 15p$."
                },
                {
                  "step": "$\\dfrac{15p}{69} = \\dfrac{5p}{23}$",
                  "reason": "Cancelling a common factor: $15$ and $69$ share the factor $3$."
                },
                {
                  "step": "The number $69$ divides $15p$ exactly when $23$ divides $p$.",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{5}{23}$ is in lowest terms, so $\\dfrac{5p}{23}$ is a whole number exactly when $23$ divides $p$."
                },
                {
                  "step": "The least period is $23$.",
                  "reason": "Period: the least whole number $p$ from $1$ up that $23$ divides is $23$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number $u$ from $1$ to $26$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $27$ for every whole number $n$, with $v$ a whole number, where $a_0 = 21$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $3a_{n+1} + 17a_n$ on division by $27$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the whole number $u$ from $1$ to $26$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $27$ for every whole number $n$, with $v$ a whole number, where $a_0 = 21$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $3a_{n+1} + 17a_n$ on division by $27$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
              },
              {
                "step": "Each term is one of the $27$ remainders $0, 1, \\dots, 26$.",
                "reason": "Divisibility of integers, from arithmetic: a remainder on division by $27$ is a whole number below $27$."
              },
              {
                "step": "The pair $(a_n, a_{n+1})$ is one of $729$ pairs.",
                "reason": "Multiplication as repeated addition, from arithmetic: $27$ choices for $a_n$, each with $27$ choices for $a_{n+1}$, make $27$ times $27$ pairs."
              },
              {
                "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
                "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
              },
              {
                "step": "$17 \\cdot 8 = 5 \\cdot 27 + 1$",
                "reason": "Divisibility of integers, from arithmetic: $17 \\cdot 8$ leaves the remainder $1$ on division by $27$."
              },
              {
                "step": "The number $8a_{n+2}$ leaves the same remainder on division by $27$ as $24a_{n+1} + 136a_n$.",
                "reason": "Multiplying both sides by the same number: the rule is multiplied by $8$."
              },
              {
                "step": "The number $8a_{n+2}$ leaves the same remainder on division by $27$ as $24a_{n+1} + a_n$.",
                "reason": "Divisibility of integers, from arithmetic: by line 5, $136a_n$ and $a_n$ differ by a multiple of $27$."
              },
              {
                "step": "Each term $a_n$ is the remainder of $8a_{n+2} + 3a_{n+1}$ on division by $27$.",
                "reason": "Adding the same number to both sides: $24a_{n+1}$ is taken from both sides, and $-24$ leaves the remainder $3$ on division by $27$."
              },
              {
                "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
                "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
              },
              {
                "step": "The sequence has a period from $1$ to $729$.",
                "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
              },
              {
                "step": "So $u = 8$.",
                "reason": "Transitive property: line 8 is the asked form with $u = 8$, from $1$ to $26$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $u$ from $1$ to $28$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $29$ for every whole number $n$, with $v$ a whole number, where $a_0 = 5$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $27a_{n+1} + 15a_n$ on division by $29$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the whole number $u$ from $1$ to $28$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $29$ for every whole number $n$, with $v$ a whole number, where $a_0 = 5$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $27a_{n+1} + 15a_n$ on division by $29$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
                },
                {
                  "step": "Each term is one of the $29$ remainders $0, 1, \\dots, 28$.",
                  "reason": "Divisibility of integers, from arithmetic: a remainder on division by $29$ is a whole number below $29$."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ is one of $841$ pairs.",
                  "reason": "Multiplication as repeated addition, from arithmetic: $29$ choices for $a_n$, each with $29$ choices for $a_{n+1}$, make $29$ times $29$ pairs."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
                  "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
                },
                {
                  "step": "$15 \\cdot 2 = 29 + 1$",
                  "reason": "Divisibility of integers, from arithmetic: $15 \\cdot 2$ leaves the remainder $1$ on division by $29$."
                },
                {
                  "step": "The number $2a_{n+2}$ leaves the same remainder on division by $29$ as $54a_{n+1} + 30a_n$.",
                  "reason": "Multiplying both sides by the same number: the rule is multiplied by $2$."
                },
                {
                  "step": "The number $2a_{n+2}$ leaves the same remainder on division by $29$ as $54a_{n+1} + a_n$.",
                  "reason": "Divisibility of integers, from arithmetic: by line 5, $30a_n$ and $a_n$ differ by a multiple of $29$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $2a_{n+2} + 4a_{n+1}$ on division by $29$.",
                  "reason": "Adding the same number to both sides: $54a_{n+1}$ is taken from both sides, and $-54$ leaves the remainder $4$ on division by $29$."
                },
                {
                  "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
                  "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
                },
                {
                  "step": "The sequence has a period from $1$ to $841$.",
                  "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
                },
                {
                  "step": "So $u = 2$.",
                  "reason": "Transitive property: line 8 is the asked form with $u = 2$, from $1$ to $28$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $u$ from $1$ to $20$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $21$ for every whole number $n$, with $v$ a whole number, where $a_0 = 11$, $a_1 = 6$ and $a_{n+2}$ is the remainder of $16a_{n+1} + 13a_n$ on division by $21$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the whole number $u$ from $1$ to $20$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $21$ for every whole number $n$, with $v$ a whole number, where $a_0 = 11$, $a_1 = 6$ and $a_{n+2}$ is the remainder of $16a_{n+1} + 13a_n$ on division by $21$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
                },
                {
                  "step": "Each term is one of the $21$ remainders $0, 1, \\dots, 20$.",
                  "reason": "Divisibility of integers, from arithmetic: a remainder on division by $21$ is a whole number below $21$."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ is one of $441$ pairs.",
                  "reason": "Multiplication as repeated addition, from arithmetic: $21$ choices for $a_n$, each with $21$ choices for $a_{n+1}$, make $21$ times $21$ pairs."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
                  "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
                },
                {
                  "step": "$13 \\cdot 13 = 8 \\cdot 21 + 1$",
                  "reason": "Divisibility of integers, from arithmetic: $13 \\cdot 13$ leaves the remainder $1$ on division by $21$."
                },
                {
                  "step": "The number $13a_{n+2}$ leaves the same remainder on division by $21$ as $208a_{n+1} + 169a_n$.",
                  "reason": "Multiplying both sides by the same number: the rule is multiplied by $13$."
                },
                {
                  "step": "The number $13a_{n+2}$ leaves the same remainder on division by $21$ as $208a_{n+1} + a_n$.",
                  "reason": "Divisibility of integers, from arithmetic: by line 5, $169a_n$ and $a_n$ differ by a multiple of $21$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $13a_{n+2} + 2a_{n+1}$ on division by $21$.",
                  "reason": "Adding the same number to both sides: $208a_{n+1}$ is taken from both sides, and $-208$ leaves the remainder $2$ on division by $21$."
                },
                {
                  "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
                  "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
                },
                {
                  "step": "The sequence has a period from $1$ to $441$.",
                  "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
                },
                {
                  "step": "So $u = 13$.",
                  "reason": "Transitive property: line 8 is the asked form with $u = 13$, from $1$ to $20$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $u$ from $1$ to $22$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $23$ for every whole number $n$, with $v$ a whole number, where $a_0 = 6$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $20a_{n+1} + 17a_n$ on division by $23$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find the whole number $u$ from $1$ to $22$ for which $a_n$ is the remainder of $ua_{n+2} + va_{n+1}$ on division by $23$ for every whole number $n$, with $v$ a whole number, where $a_0 = 6$, $a_1 = 22$ and $a_{n+2}$ is the remainder of $20a_{n+1} + 17a_n$ on division by $23$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
                },
                {
                  "step": "Each term is one of the $23$ remainders $0, 1, \\dots, 22$.",
                  "reason": "Divisibility of integers, from arithmetic: a remainder on division by $23$ is a whole number below $23$."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ is one of $529$ pairs.",
                  "reason": "Multiplication as repeated addition, from arithmetic: $23$ choices for $a_n$, each with $23$ choices for $a_{n+1}$, make $23$ times $23$ pairs."
                },
                {
                  "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
                  "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
                },
                {
                  "step": "$17 \\cdot 19 = 14 \\cdot 23 + 1$",
                  "reason": "Divisibility of integers, from arithmetic: $17 \\cdot 19$ leaves the remainder $1$ on division by $23$."
                },
                {
                  "step": "The number $19a_{n+2}$ leaves the same remainder on division by $23$ as $380a_{n+1} + 323a_n$.",
                  "reason": "Multiplying both sides by the same number: the rule is multiplied by $19$."
                },
                {
                  "step": "The number $19a_{n+2}$ leaves the same remainder on division by $23$ as $380a_{n+1} + a_n$.",
                  "reason": "Divisibility of integers, from arithmetic: by line 5, $323a_n$ and $a_n$ differ by a multiple of $23$."
                },
                {
                  "step": "Each term $a_n$ is the remainder of $19a_{n+2} + 11a_{n+1}$ on division by $23$.",
                  "reason": "Adding the same number to both sides: $380a_{n+1}$ is taken from both sides, and $-380$ leaves the remainder $11$ on division by $23$."
                },
                {
                  "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
                  "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
                },
                {
                  "step": "The sequence has a period from $1$ to $529$.",
                  "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
                },
                {
                  "step": "So $u = 19$.",
                  "reason": "Transitive property: line 8 is the asked form with $u = 19$, from $1$ to $22$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t239-k2",
      "forms": [
        {
          "example": {
            "problem": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{297}}{31}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{297}}{31}$ for every whole number $n$.",
                "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{297}}{31}$."
              },
              {
                "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{297}}{31}$ is an integer.",
                "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{297}}{31} - \\dfrac{n\\sqrt{297}}{31} = \\dfrac{p\\sqrt{297}}{31}$."
              },
              {
                "step": "If $\\dfrac{p\\sqrt{297}}{31} = N$ for an integer $N$, then $\\sqrt{297} = \\dfrac{31N}{p}$, a rational number.",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{31}{p}$."
              },
              {
                "step": "If $\\sqrt{297} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 31t$ gives $\\dfrac{p\\sqrt{297}}{31} = s$, an integer.",
                "reason": "Substituting a value: $p = 31t$ and $\\sqrt{297} = \\dfrac{s}{t}$."
              },
              {
                "step": "So the sequence has a period exactly when $\\sqrt{297}$ is rational.",
                "reason": "Period: lines 2 to 4."
              },
              {
                "step": "The root $\\sqrt{297}$ is rational exactly when $297$ is a perfect square.",
                "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
              },
              {
                "step": "$17^2 < 297 < 18^2$",
                "reason": "Perfect square, from arithmetic: $297$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
              },
              {
                "step": "No: the sequence is not periodic.",
                "reason": "Period: lines 5 to 7."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{134}}{12}$ for every whole number $n$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{134}}{12}$ for every whole number $n$.",
                  "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{134}}{12}$."
                },
                {
                  "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{134}}{12}$ is an integer.",
                  "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{134}}{12} - \\dfrac{n\\sqrt{134}}{12} = \\dfrac{p\\sqrt{134}}{12}$."
                },
                {
                  "step": "If $\\dfrac{p\\sqrt{134}}{12} = N$ for an integer $N$, then $\\sqrt{134} = \\dfrac{12N}{p}$, a rational number.",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{12}{p}$."
                },
                {
                  "step": "If $\\sqrt{134} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 12t$ gives $\\dfrac{p\\sqrt{134}}{12} = s$, an integer.",
                  "reason": "Substituting a value: $p = 12t$ and $\\sqrt{134} = \\dfrac{s}{t}$."
                },
                {
                  "step": "So the sequence has a period exactly when $\\sqrt{134}$ is rational.",
                  "reason": "Period: lines 2 to 4."
                },
                {
                  "step": "The root $\\sqrt{134}$ is rational exactly when $134$ is a perfect square.",
                  "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
                },
                {
                  "step": "$11^2 < 134 < 12^2$",
                  "reason": "Perfect square, from arithmetic: $134$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
                },
                {
                  "step": "No: the sequence is not periodic.",
                  "reason": "Period: lines 5 to 7."
                }
              ]
            },
            {
              "prompt": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1296}}{7}$ for every whole number $n$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1296}}{7}$ for every whole number $n$.",
                  "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{1296}}{7}$."
                },
                {
                  "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{1296}}{7}$ is an integer.",
                  "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{1296}}{7} - \\dfrac{n\\sqrt{1296}}{7} = \\dfrac{p\\sqrt{1296}}{7}$."
                },
                {
                  "step": "If $\\dfrac{p\\sqrt{1296}}{7} = N$ for an integer $N$, then $\\sqrt{1296} = \\dfrac{7N}{p}$, a rational number.",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{7}{p}$."
                },
                {
                  "step": "If $\\sqrt{1296} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 7t$ gives $\\dfrac{p\\sqrt{1296}}{7} = s$, an integer.",
                  "reason": "Substituting a value: $p = 7t$ and $\\sqrt{1296} = \\dfrac{s}{t}$."
                },
                {
                  "step": "So the sequence has a period exactly when $\\sqrt{1296}$ is rational.",
                  "reason": "Period: lines 2 to 4."
                },
                {
                  "step": "The root $\\sqrt{1296}$ is rational exactly when $1296$ is a perfect square.",
                  "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
                },
                {
                  "step": "$1296 = 36^2$",
                  "reason": "Perfect square, from arithmetic: $1296$ is the square of the whole number $36$."
                },
                {
                  "step": "Yes: the sequence is periodic.",
                  "reason": "Period: lines 5 to 7."
                }
              ]
            },
            {
              "prompt": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{251}}{23}$ for every whole number $n$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{251}}{23}$ for every whole number $n$.",
                  "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{251}}{23}$."
                },
                {
                  "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{251}}{23}$ is an integer.",
                  "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{251}}{23} - \\dfrac{n\\sqrt{251}}{23} = \\dfrac{p\\sqrt{251}}{23}$."
                },
                {
                  "step": "If $\\dfrac{p\\sqrt{251}}{23} = N$ for an integer $N$, then $\\sqrt{251} = \\dfrac{23N}{p}$, a rational number.",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{23}{p}$."
                },
                {
                  "step": "If $\\sqrt{251} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 23t$ gives $\\dfrac{p\\sqrt{251}}{23} = s$, an integer.",
                  "reason": "Substituting a value: $p = 23t$ and $\\sqrt{251} = \\dfrac{s}{t}$."
                },
                {
                  "step": "So the sequence has a period exactly when $\\sqrt{251}$ is rational.",
                  "reason": "Period: lines 2 to 4."
                },
                {
                  "step": "The root $\\sqrt{251}$ is rational exactly when $251$ is a perfect square.",
                  "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
                },
                {
                  "step": "$15^2 < 251 < 16^2$",
                  "reason": "Perfect square, from arithmetic: $251$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
                },
                {
                  "step": "No: the sequence is not periodic.",
                  "reason": "Period: lines 5 to 7."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t239-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $a_{683}$, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = \\dfrac{22a_{n+1}}{a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find $a_{683}$, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = \\dfrac{22a_{n+1}}{a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
              },
              {
                "step": "$a_2 = \\dfrac{22 \\cdot 5}{2} = 55$",
                "reason": "Substituting a value: $n = 0$ in the rule."
              },
              {
                "step": "$a_3 = \\dfrac{22 \\cdot 55}{5} = 242$",
                "reason": "Substituting a value: $n = 1$ in the rule."
              },
              {
                "step": "$a_4 = \\dfrac{22 \\cdot 242}{55} = \\dfrac{484}{5}$",
                "reason": "Substituting a value: $n = 2$ in the rule."
              },
              {
                "step": "$a_5 = \\dfrac{22 \\cdot \\dfrac{484}{5}}{242} = \\dfrac{44}{5}$",
                "reason": "Substituting a value: $n = 3$ in the rule."
              },
              {
                "step": "$a_6 = \\dfrac{22 \\cdot \\dfrac{44}{5}}{\\dfrac{484}{5}} = 2$",
                "reason": "Substituting a value: $n = 4$ in the rule."
              },
              {
                "step": "$a_7 = \\dfrac{22 \\cdot 2}{\\dfrac{44}{5}} = 5$",
                "reason": "Substituting a value: $n = 5$ in the rule."
              },
              {
                "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
                "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
              },
              {
                "step": "$683 = 6 \\cdot 113 + 5$",
                "reason": "Divisibility of integers, from arithmetic: $683$ leaves the remainder $5$ on division by $6$."
              },
              {
                "step": "$a_{683} = a_5$",
                "reason": "Period: $113$ steps of $6$ lead from $a_5$ to $a_{683}$."
              },
              {
                "step": "$a_{683} = \\dfrac{44}{5}$",
                "reason": "Transitive property: line 5 gives $a_5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{962}$, where $a_0 = -7$, $a_1 = 6$ and $a_{n+2} = \\dfrac{2a_{n+1}}{a_n}$ for every whole number $n$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-12/7",
              "lines": [
                {
                  "step": "Find $a_{962}$, where $a_0 = -7$, $a_1 = 6$ and $a_{n+2} = \\dfrac{2a_{n+1}}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
                },
                {
                  "step": "$a_2 = \\dfrac{2 \\cdot 6}{(-7)} = -\\dfrac{12}{7}$",
                  "reason": "Substituting a value: $n = 0$ in the rule."
                },
                {
                  "step": "$a_3 = \\dfrac{2 \\cdot \\left(-\\dfrac{12}{7}\\right)}{6} = -\\dfrac{4}{7}$",
                  "reason": "Substituting a value: $n = 1$ in the rule."
                },
                {
                  "step": "$a_4 = \\dfrac{2 \\cdot \\left(-\\dfrac{4}{7}\\right)}{\\left(-\\dfrac{12}{7}\\right)} = \\dfrac{2}{3}$",
                  "reason": "Substituting a value: $n = 2$ in the rule."
                },
                {
                  "step": "$a_5 = \\dfrac{2 \\cdot \\dfrac{2}{3}}{\\left(-\\dfrac{4}{7}\\right)} = -\\dfrac{7}{3}$",
                  "reason": "Substituting a value: $n = 3$ in the rule."
                },
                {
                  "step": "$a_6 = \\dfrac{2 \\cdot \\left(-\\dfrac{7}{3}\\right)}{\\dfrac{2}{3}} = -7$",
                  "reason": "Substituting a value: $n = 4$ in the rule."
                },
                {
                  "step": "$a_7 = \\dfrac{2 \\cdot (-7)}{\\left(-\\dfrac{7}{3}\\right)} = 6$",
                  "reason": "Substituting a value: $n = 5$ in the rule."
                },
                {
                  "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
                  "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
                },
                {
                  "step": "$962 = 6 \\cdot 160 + 2$",
                  "reason": "Divisibility of integers, from arithmetic: $962$ leaves the remainder $2$ on division by $6$."
                },
                {
                  "step": "$a_{962} = a_2$",
                  "reason": "Period: $160$ steps of $6$ lead from $a_2$ to $a_{962}$."
                },
                {
                  "step": "$a_{962} = -\\dfrac{12}{7}$",
                  "reason": "Transitive property: line 2 gives $a_2$."
                }
              ]
            },
            {
              "prompt": "Find $a_{266}$, where $a_0 = -12$, $a_1 = -14$ and $a_{n+2} = \\dfrac{9a_{n+1}}{a_n}$ for every whole number $n$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "21/2",
              "lines": [
                {
                  "step": "Find $a_{266}$, where $a_0 = -12$, $a_1 = -14$ and $a_{n+2} = \\dfrac{9a_{n+1}}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
                },
                {
                  "step": "$a_2 = \\dfrac{9 \\cdot (-14)}{(-12)} = \\dfrac{21}{2}$",
                  "reason": "Substituting a value: $n = 0$ in the rule."
                },
                {
                  "step": "$a_3 = \\dfrac{9 \\cdot \\dfrac{21}{2}}{(-14)} = -\\dfrac{27}{4}$",
                  "reason": "Substituting a value: $n = 1$ in the rule."
                },
                {
                  "step": "$a_4 = \\dfrac{9 \\cdot \\left(-\\dfrac{27}{4}\\right)}{\\dfrac{21}{2}} = -\\dfrac{81}{14}$",
                  "reason": "Substituting a value: $n = 2$ in the rule."
                },
                {
                  "step": "$a_5 = \\dfrac{9 \\cdot \\left(-\\dfrac{81}{14}\\right)}{\\left(-\\dfrac{27}{4}\\right)} = \\dfrac{54}{7}$",
                  "reason": "Substituting a value: $n = 3$ in the rule."
                },
                {
                  "step": "$a_6 = \\dfrac{9 \\cdot \\dfrac{54}{7}}{\\left(-\\dfrac{81}{14}\\right)} = -12$",
                  "reason": "Substituting a value: $n = 4$ in the rule."
                },
                {
                  "step": "$a_7 = \\dfrac{9 \\cdot (-12)}{\\dfrac{54}{7}} = -14$",
                  "reason": "Substituting a value: $n = 5$ in the rule."
                },
                {
                  "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
                  "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
                },
                {
                  "step": "$266 = 6 \\cdot 44 + 2$",
                  "reason": "Divisibility of integers, from arithmetic: $266$ leaves the remainder $2$ on division by $6$."
                },
                {
                  "step": "$a_{266} = a_2$",
                  "reason": "Period: $44$ steps of $6$ lead from $a_2$ to $a_{266}$."
                },
                {
                  "step": "$a_{266} = \\dfrac{21}{2}$",
                  "reason": "Transitive property: line 2 gives $a_2$."
                }
              ]
            },
            {
              "prompt": "Find $a_{273}$, where $a_0 = 11$, $a_1 = -8$ and $a_{n+2} = \\dfrac{4a_{n+1}}{a_n}$ for every whole number $n$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "16/11",
              "lines": [
                {
                  "step": "Find $a_{273}$, where $a_0 = 11$, $a_1 = -8$ and $a_{n+2} = \\dfrac{4a_{n+1}}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
                },
                {
                  "step": "$a_2 = \\dfrac{4 \\cdot (-8)}{11} = -\\dfrac{32}{11}$",
                  "reason": "Substituting a value: $n = 0$ in the rule."
                },
                {
                  "step": "$a_3 = \\dfrac{4 \\cdot \\left(-\\dfrac{32}{11}\\right)}{(-8)} = \\dfrac{16}{11}$",
                  "reason": "Substituting a value: $n = 1$ in the rule."
                },
                {
                  "step": "$a_4 = \\dfrac{4 \\cdot \\dfrac{16}{11}}{\\left(-\\dfrac{32}{11}\\right)} = -2$",
                  "reason": "Substituting a value: $n = 2$ in the rule."
                },
                {
                  "step": "$a_5 = \\dfrac{4 \\cdot (-2)}{\\dfrac{16}{11}} = -\\dfrac{11}{2}$",
                  "reason": "Substituting a value: $n = 3$ in the rule."
                },
                {
                  "step": "$a_6 = \\dfrac{4 \\cdot \\left(-\\dfrac{11}{2}\\right)}{(-2)} = 11$",
                  "reason": "Substituting a value: $n = 4$ in the rule."
                },
                {
                  "step": "$a_7 = \\dfrac{4 \\cdot 11}{\\left(-\\dfrac{11}{2}\\right)} = -8$",
                  "reason": "Substituting a value: $n = 5$ in the rule."
                },
                {
                  "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
                  "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
                },
                {
                  "step": "$273 = 6 \\cdot 45 + 3$",
                  "reason": "Divisibility of integers, from arithmetic: $273$ leaves the remainder $3$ on division by $6$."
                },
                {
                  "step": "$a_{273} = a_3$",
                  "reason": "Period: $45$ steps of $6$ lead from $a_3$ to $a_{273}$."
                },
                {
                  "step": "$a_{273} = \\dfrac{16}{11}$",
                  "reason": "Transitive property: line 3 gives $a_3$."
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
      "id": "t239-p1",
      "method": "direct proof",
      "statement": "Every function $f$ with $f(x + 1) + f(x - 1) = \\sqrt{2}f(x)$ for every real number $x$ has $f(x + 8) = f(x)$ for every real number $x$: $8$ is a period of $f$.",
      "idea": "Write each value from the two before it until a value comes back with its sign changed; doing that twice brings the value itself back.",
      "lines": [
        {
          "line": "$f(x + 1) = \\sqrt{2}f(x) - f(x - 1)$",
          "reason": "Adding the same number to both sides: $f(x - 1)$ is taken from both sides of the given relation."
        },
        {
          "line": "$f(x + 2) = \\sqrt{2}f(x + 1) - f(x)$",
          "reason": "Substituting a value: $x + 1$ goes in place of $x$ in line 1."
        },
        {
          "line": "$f(x + 2) = \\sqrt{2}\\left(\\sqrt{2}f(x) - f(x - 1)\\right) - f(x)$",
          "reason": "Substituting a value: line 1 goes into line 2."
        },
        {
          "line": "$f(x + 2) = 2f(x) - \\sqrt{2}f(x - 1) - f(x)$",
          "reason": "Multiplying out: $\\sqrt{2} \\cdot \\sqrt{2} = 2$."
        },
        {
          "line": "$f(x + 2) = f(x) - \\sqrt{2}f(x - 1)$",
          "reason": "Collecting like terms: $2f(x) - f(x) = f(x)$."
        },
        {
          "line": "$f(x + 3) = \\sqrt{2}f(x + 2) - f(x + 1)$",
          "reason": "Substituting a value: $x + 2$ goes in place of $x$ in line 1."
        },
        {
          "line": "$f(x + 3) = \\sqrt{2}\\left(f(x) - \\sqrt{2}f(x - 1)\\right) - \\left(\\sqrt{2}f(x) - f(x - 1)\\right)$",
          "reason": "Substituting a value: lines 5 and 1 go into line 6."
        },
        {
          "line": "$f(x + 3) = \\sqrt{2}f(x) - 2f(x - 1) - \\sqrt{2}f(x) + f(x - 1)$",
          "reason": "Multiplying out: subtracting a bracket changes every sign in it."
        },
        {
          "line": "$f(x + 3) = -f(x - 1)$",
          "reason": "Collecting like terms: the terms in $f(x)$ cancel, and $-2f(x - 1) + f(x - 1) = -f(x - 1)$."
        },
        {
          "line": "$f(x + 4) = -f(x)$",
          "reason": "Substituting a value: $x + 1$ goes in place of $x$ in line 9."
        },
        {
          "line": "$f(x + 8) = -f(x + 4)$",
          "reason": "Substituting a value: $x + 4$ goes in place of $x$ in line 10."
        },
        {
          "line": "$f(x + 8) = -(-f(x))$",
          "reason": "Substituting a value: line 10 goes into line 11."
        },
        {
          "line": "$f(x + 8) = f(x)$",
          "reason": "Signs of products, from arithmetic."
        },
        {
          "line": "So $8$ is a period of $f$.",
          "reason": "Period: line 13 holds for every real number $x$."
        }
      ]
    },
    {
      "id": "t239-p2",
      "method": "direct proof",
      "statement": "For numbers $b$ and $c$ with $c \\ne 0$ whose characteristic equation $x^2 = bx + c$ has two different roots $r_1$ and $r_2$, and a whole number $k$ from $1$ up with $r_1^k = 1$ and $r_2^k = 1$, every sequence with $a_{n+2} = ba_{n+1} + ca_n$ for every whole number $n$ has period $k$.",
      "idea": "The general solution writes every term through $r_1^n$ and $r_2^n$; moving $k$ places on multiplies each power by $1$.",
      "lines": [
        {
          "line": "There are two numbers $y$ and $z$ with $a_n = yr_1^n + zr_2^n$ for every whole number $n$.",
          "reason": "General solution (distinct roots): $c \\ne 0$ and the two roots are different."
        },
        {
          "line": "$a_{n+k} = yr_1^{n+k} + zr_2^{n+k}$",
          "reason": "Substituting a value: $n + k$ goes in place of $n$ in line 1."
        },
        {
          "line": "$a_{n+k} = yr_1^n \\cdot r_1^k + zr_2^n \\cdot r_2^k$",
          "reason": "Product law: $r_1^{n+k} = r_1^n \\cdot r_1^k$, and the same for $r_2$."
        },
        {
          "line": "$a_{n+k} = yr_1^n + zr_2^n$",
          "reason": "Substituting a value: $r_1^k = 1$ and $r_2^k = 1$."
        },
        {
          "line": "$a_{n+k} = a_n$",
          "reason": "Transitive property: line 1."
        },
        {
          "line": "So the sequence has period $k$.",
          "reason": "Period: line 5 holds for every whole number $n$."
        }
      ]
    },
    {
      "id": "t239-p3",
      "method": "the pigeonhole principle",
      "statement": "Let the states $X_0, X_1, X_2, \\dots$ of a sequence lie in a set of $s$ states, with $X_{n+1} = F(X_n)$ for a rule $F$ under which each state follows from exactly one state. Then there is a whole number $p$ from $1$ to $s$ with $X_{n+p} = X_n$ for every whole number $n$: pigeonhole on states.",
      "idea": "Among $s + 1$ states two agree; running the rule backwards from that pair reaches the start, and running it forwards repeats everything.",
      "lines": [
        {
          "line": "Two of the $s + 1$ states $X_0, X_1, \\dots, X_s$ agree: $X_i = X_j$ with $0 \\le i < j \\le s$.",
          "reason": "Finding a repeating block via the pigeonhole principle on remainders, from arithmetic: $s + 1$ states lie among $s$ values, and the same count holds for $s$ values of every sort."
        },
        {
          "line": "Write $p = j - i$, a whole number from $1$ to $s$.",
          "reason": "Substituting a value: $0 \\le i < j \\le s$ by line 1."
        },
        {
          "line": "If $i \\ge 1$, then $F(X_{i-1}) = F(X_{j-1})$.",
          "reason": "Transitive property: $F(X_{i-1}) = X_i = X_j = F(X_{j-1})$."
        },
        {
          "line": "If $i \\ge 1$, then $X_{i-1} = X_{j-1}$.",
          "reason": "The rule $F$: each state follows from exactly one state."
        },
        {
          "line": "$X_0 = X_p$",
          "reason": "Induction: on $i$, lines 3 and 4 are the step, each lowering both places by $1$ and keeping their difference $p$."
        },
        {
          "line": "So $X_{n+p} = X_n$ for every whole number $n$.",
          "reason": "Induction: line 5 is the case $n = 0$, and $X_{n+p} = X_n$ gives $X_{n+1+p} = F(X_{n+p}) = F(X_n) = X_{n+1}$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t239-s1",
      "method": "direct proof",
      "statement": "Prove that for a number $c$, every function $f$ with $f(x + c) = -f(x)$ for every real number $x$ has $f(x + 2c) = f(x)$ for every real number $x$, so $2c$ is a period of $f$ when $2c$ is a whole number from $1$ up. Facts it may use: period, substituting a value, transitive property, the associative law of addition and the signs of products from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "$f(x + 2c) = f((x + c) + c)$",
            "reason": "The associative law of addition, from arithmetic: $x + 2c = (x + c) + c$."
          },
          {
            "line": "$f((x + c) + c) = -f(x + c)$",
            "reason": "Substituting a value: $x + c$ goes in place of $x$ in the given relation."
          },
          {
            "line": "$-f(x + c) = -(-f(x))$",
            "reason": "Substituting a value: the given relation at $x$."
          },
          {
            "line": "$-(-f(x)) = f(x)$",
            "reason": "Signs of products, from arithmetic."
          },
          {
            "line": "$f(x + 2c) = f(x)$",
            "reason": "Transitive property: lines 1 to 4."
          },
          {
            "line": "So $2c$ is a period of $f$ when $2c$ is a whole number from $1$ up.",
            "reason": "Period: line 5 holds for every real number $x$."
          }
        ]
      }
    },
    {
      "id": "t239-s2",
      "method": "direct proof",
      "statement": "Prove that $t_{2020} = \\dfrac{101}{525}$, where $t_1 = 20$, $t_2 = 21$ and $t_n = \\dfrac{5t_{n-1} + 1}{25t_{n-2}}$ for every whole number $n$ from $3$ up. Facts it may use: recursion, period, substituting a value, transitive property, divisibility of integers from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "$t_3 = \\dfrac{5 \\cdot 21 + 1}{25 \\cdot 20} = \\dfrac{53}{250}$",
            "reason": "Substituting a value: $n = 3$ in the rule."
          },
          {
            "line": "$t_4 = \\dfrac{5 \\cdot \\dfrac{53}{250} + 1}{25 \\cdot 21} = \\dfrac{103}{26{,}250}$",
            "reason": "Substituting a value: $n = 4$ in the rule."
          },
          {
            "line": "$t_5 = \\dfrac{5 \\cdot \\dfrac{103}{26{,}250} + 1}{25 \\cdot \\dfrac{53}{250}} = \\dfrac{101}{525}$",
            "reason": "Substituting a value: $n = 5$ in the rule."
          },
          {
            "line": "$t_6 = \\dfrac{5 \\cdot \\dfrac{101}{525} + 1}{25 \\cdot \\dfrac{103}{26{,}250}} = 20$",
            "reason": "Substituting a value: $n = 6$ in the rule."
          },
          {
            "line": "$t_7 = \\dfrac{5 \\cdot 20 + 1}{25 \\cdot \\dfrac{101}{525}} = 21$",
            "reason": "Substituting a value: $n = 7$ in the rule."
          },
          {
            "line": "So $t_{n+5} = t_n$ for every whole number $n$ from $1$ up.",
            "reason": "Period: $t_6 = t_1$ and $t_7 = t_2$, and two neighbouring terms fix every later term."
          },
          {
            "line": "$2020 = 5 \\cdot 403 + 5$",
            "reason": "Divisibility of integers, from arithmetic: $5$ divides $2020$."
          },
          {
            "line": "$t_{2020} = t_5$",
            "reason": "Period: $403$ steps of $5$ lead from $t_5$ to $t_{2020}$."
          },
          {
            "line": "$t_{2020} = \\dfrac{101}{525}$",
            "reason": "Transitive property: line 3 gives $t_5$."
          }
        ]
      }
    },
    {
      "id": "t239-s3",
      "method": "direct proof",
      "statement": "Prove that $a_{100}$ leaves the remainder $3$ on division by $4$, where $a_1 = 1$, $a_2 = 1$ and $a_{n+2} = a_{n+1} + a_n$ for every whole number $n$ from $1$ up. Facts it may use: recursion, period, divisibility of integers from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "The remainder of $a_{n+2}$ on division by $4$ is the remainder of the sum of the remainders of $a_{n+1}$ and $a_n$.",
            "reason": "Divisibility of integers, from arithmetic: numbers that differ by a multiple of $4$ have sums that differ by a multiple of $4$."
          },
          {
            "line": "The remainders of $a_1, a_2, \\dots, a_8$ on division by $4$ are $1, 1, 2, 3, 1, 0, 1, 1$.",
            "reason": "Recursion: line 1 from $a_1 = 1$ and $a_2 = 1$, one term at a time."
          },
          {
            "line": "The remainders of $a_7$ and $a_8$ are those of $a_1$ and $a_2$.",
            "reason": "Recursion: line 2."
          },
          {
            "line": "So the remainders have period $6$: $a_{n+6}$ and $a_n$ leave the same remainder for every whole number $n$ from $1$ up.",
            "reason": "Period: by line 1 two neighbouring remainders fix every later remainder."
          },
          {
            "line": "$100 = 6 \\cdot 16 + 4$",
            "reason": "Divisibility of integers, from arithmetic: $100$ leaves the remainder $4$ on division by $6$."
          },
          {
            "line": "The term $a_{100}$ leaves the remainder of $a_4$, which is $3$.",
            "reason": "Period: $16$ steps of $6$ lead from $a_4$ to $a_{100}$, and line 2 gives the remainder of $a_4$."
          }
        ]
      }
    },
    {
      "id": "t239-s4",
      "method": "the pigeonhole principle",
      "statement": "Prove that for every whole number $m$ from $2$ up, the Fibonacci numbers $F_0 = 0$, $F_1 = 1$ and $F_{n+2} = F_{n+1} + F_n$ for every whole number $n$ have a number $F_p$ with $p$ from $1$ up that $m$ divides. Facts it may use: pigeonhole on states, period, substituting a value, adding the same number to both sides, divisibility of integers and multiplication as repeated addition from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Let $X_n$ be the pair of remainders of $F_n$ and $F_{n+1}$ on division by $m$.",
            "reason": "Pigeonhole on states: the pair is the state."
          },
          {
            "line": "Each pair $X_n$ is one of $m \\cdot m$ pairs.",
            "reason": "Multiplication as repeated addition, from arithmetic: each place holds one of the $m$ remainders $0, 1, \\dots, m - 1$."
          },
          {
            "line": "The pair $X_n$ fixes the pair $X_{n+1}$.",
            "reason": "Divisibility of integers, from arithmetic: the remainder of $F_{n+2}$ is the remainder of the sum of the two remainders in $X_n$."
          },
          {
            "line": "$F_n = F_{n+2} - F_{n+1}$",
            "reason": "Adding the same number to both sides: $F_{n+1}$ is taken from both sides of the rule."
          },
          {
            "line": "So each pair $X_{n+1}$ follows from exactly one pair $X_n$.",
            "reason": "Divisibility of integers, from arithmetic: by line 4 the remainder of $F_n$ is fixed by the two remainders in $X_{n+1}$."
          },
          {
            "line": "There is a whole number $p$ from $1$ to $m^2$ with $X_{n+p} = X_n$ for every whole number $n$.",
            "reason": "Pigeonhole on states: lines 2, 3 and 5."
          },
          {
            "line": "So $X_p = X_0$, and $F_p$ leaves the same remainder as $F_0 = 0$.",
            "reason": "Substituting a value: $n = 0$ in line 6."
          },
          {
            "line": "So $m$ divides $F_p$, with $p$ from $1$ up.",
            "reason": "Divisibility of integers, from arithmetic: the remainder of $F_p$ on division by $m$ is $0$."
          }
        ]
      }
    }
  ]
}
