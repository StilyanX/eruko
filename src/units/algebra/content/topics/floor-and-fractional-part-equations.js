export default {
  "number": 225,
  "title": "Equations with floor, ceiling and fractional part",
  "section": 16,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "529-539"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find how many of the integers from $1$ to $66$ are values of $\\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "60",
    "solution": [
      "Find how many of the integers from $1$ to $66$ are values of $\\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{1}{4}$, $\\dfrac{2}{7}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{5}{7}$, $\\dfrac{3}{4}$, $\\dfrac{6}{7}$ and $1$: $10$ points",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor + 11$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $10$ of the $11$ integers from $11n + 1$ to $11n + 11$",
      "Since $66 = 6 \\cdot 11$, the integers from $1$ to $66$ are the $6$ runs with $n$ from $0$ to $5$",
      "$6 \\cdot 10 = 60$"
    ]
  },
  "ideas": [
    {
      "name": "Where a sum of floors steps up",
      "concrete": "The sum $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor$ changes only where $2x$ or $3x$ is a whole number. For $0 < x \\le 1$ that is at $\\dfrac{1}{3}$, $\\dfrac{1}{2}$, $\\dfrac{2}{3}$ and $1$, which are $4$ points, so there the sum takes $4$ of the $5$ integers from $1$ to $5$: it goes $1$, $2$, $3$, $5$ and never takes $4$, since both terms step up at $1$. Adding $1$ to $x$ adds $5$ to the sum, so for each integer $n$ the sum takes $4$ of the $5$ integers from $5n + 1$ to $5n + 5$.",
      "general": "For whole numbers $a$ and $b$ above $0$ and a real number $x$, the sum $\\lfloor ax\\rfloor + \\lfloor bx\\rfloor$ changes only where $ax$ or $bx$ is a whole number. If for $0 < x \\le 1$ that is at $k$ different points, then there the sum takes $k$ of the $a + b$ integers from $1$ to $a + b$. Adding $1$ to $x$ adds $a + b$ to the sum, so for each integer $n$ the sum takes $k$ of the $a + b$ integers from $(a + b)n + 1$ to $(a + b)n + (a + b)$. A sum of three or more such terms behaves in the same way."
    }
  ],
  "kinds": [
    {
      "id": "t225-k1",
      "forms": [
        {
          "example": {
            "problem": "Find how many of the integers from $1$ to $52$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor$, where $x$ is a real number.",
            "lines": [
              {
                "step": "Find how many of the integers from $1$ to $52$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor$, where $x$ is a real number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 3x\\rfloor$ at each multiple of $\\dfrac{1}{3}$ and the term $\\lfloor 8x\\rfloor$ at each multiple of $\\dfrac{1}{8}$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $ax$ is $n$ from $ax = n$ until $ax$ reaches $n + 1$, so the term steps up exactly where $ax$ is a whole number."
              },
              {
                "step": "In order, the different points are $\\dfrac{1}{8}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{3}{8}$, $\\dfrac{1}{2}$, $\\dfrac{5}{8}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{8}$ and $1$: $10$ points",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: each point is written in lowest terms, so a point where two terms step up together is counted once."
              },
              {
                "step": "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 3(x + 1)\\rfloor + \\lfloor 8(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor + 13$",
                "reason": "Floor of a number plus an integer: $\\lfloor 2x + 2\\rfloor = \\lfloor 2x\\rfloor + 2$, $\\lfloor 3x + 3\\rfloor = \\lfloor 3x\\rfloor + 3$ and $\\lfloor 8x + 8\\rfloor = \\lfloor 8x\\rfloor + 8$, and $2 + 3 + 8 = 13$."
              },
              {
                "step": "For each integer $n$, for $n < x \\le n + 1$ the sum takes $10$ of the $13$ integers from $13n + 1$ to $13n + 13$",
                "reason": "Floor: the sum is $0$ at $x = 0$, so by line 4 it is $13n$ at $x = n$; it changes only where a term steps up, which between $n$ and $n + 1$ happens $10$ times, the last at $x = n + 1$."
              },
              {
                "step": "Since $52 = 4 \\cdot 13$, the integers from $1$ to $52$ are the $4$ runs with $n$ from $0$ to $3$",
                "reason": "The definition of divides, from arithmetic: $13$ divides $52$, and the run with $n = 3$ ends at $13 \\cdot 3 + 13 = 52$."
              },
              {
                "step": "$4 \\cdot 10 = 40$",
                "reason": "Multiplication as repeated addition, from arithmetic: each of the $4$ runs holds $10$ values of the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many of the integers from $1$ to $40$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor$, where $x$ is a real number.",
              "form": "Answer as an integer.",
              "answer": "35",
              "lines": [
                {
                  "step": "Find how many of the integers from $1$ to $40$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor$, where $x$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $ax$ is $n$ from $ax = n$ until $ax$ reaches $n + 1$, so the term steps up exactly where $ax$ is a whole number."
                },
                {
                  "step": "In order, the different points are $\\dfrac{1}{5}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{4}{5}$ and $1$: $7$ points",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: each point is written in lowest terms, so a point where two terms step up together is counted once."
                },
                {
                  "step": "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + 8$",
                  "reason": "Floor of a number plus an integer: $\\lfloor 3x + 3\\rfloor = \\lfloor 3x\\rfloor + 3$ and $\\lfloor 5x + 5\\rfloor = \\lfloor 5x\\rfloor + 5$, and $3 + 5 = 8$."
                },
                {
                  "step": "For each integer $n$, for $n < x \\le n + 1$ the sum takes $7$ of the $8$ integers from $8n + 1$ to $8n + 8$",
                  "reason": "Floor: the sum is $0$ at $x = 0$, so by line 4 it is $8n$ at $x = n$; it changes only where a term steps up, which between $n$ and $n + 1$ happens $7$ times, the last at $x = n + 1$."
                },
                {
                  "step": "Since $40 = 5 \\cdot 8$, the integers from $1$ to $40$ are the $5$ runs with $n$ from $0$ to $4$",
                  "reason": "The definition of divides, from arithmetic: $8$ divides $40$, and the run with $n = 4$ ends at $8 \\cdot 4 + 8 = 40$."
                },
                {
                  "step": "$5 \\cdot 7 = 35$",
                  "reason": "Multiplication as repeated addition, from arithmetic: each of the $5$ runs holds $7$ values of the sum."
                }
              ]
            },
            {
              "prompt": "Find how many of the integers from $1$ to $135$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, where $x$ is a real number.",
              "form": "Answer as an integer.",
              "answer": "108",
              "lines": [
                {
                  "step": "Find how many of the integers from $1$ to $135$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, where $x$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $ax$ is $n$ from $ax = n$ until $ax$ reaches $n + 1$, so the term steps up exactly where $ax$ is a whole number."
                },
                {
                  "step": "In order, the different points are $\\dfrac{1}{6}$, $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$, $\\dfrac{5}{6}$ and $1$: $12$ points",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: each point is written in lowest terms, so a point where two terms step up together is counted once."
                },
                {
                  "step": "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor = \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor + 15$",
                  "reason": "Floor of a number plus an integer: $\\lfloor 4x + 4\\rfloor = \\lfloor 4x\\rfloor + 4$, $\\lfloor 5x + 5\\rfloor = \\lfloor 5x\\rfloor + 5$ and $\\lfloor 6x + 6\\rfloor = \\lfloor 6x\\rfloor + 6$, and $4 + 5 + 6 = 15$."
                },
                {
                  "step": "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $15$ integers from $15n + 1$ to $15n + 15$",
                  "reason": "Floor: the sum is $0$ at $x = 0$, so by line 4 it is $15n$ at $x = n$; it changes only where a term steps up, which between $n$ and $n + 1$ happens $12$ times, the last at $x = n + 1$."
                },
                {
                  "step": "Since $135 = 9 \\cdot 15$, the integers from $1$ to $135$ are the $9$ runs with $n$ from $0$ to $8$",
                  "reason": "The definition of divides, from arithmetic: $15$ divides $135$, and the run with $n = 8$ ends at $15 \\cdot 8 + 15 = 135$."
                },
                {
                  "step": "$9 \\cdot 12 = 108$",
                  "reason": "Multiplication as repeated addition, from arithmetic: each of the $9$ runs holds $12$ values of the sum."
                }
              ]
            },
            {
              "prompt": "Find how many of the integers from $1$ to $77$ are values of $\\lfloor 2x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
              "form": "Answer as an integer.",
              "answer": "70",
              "lines": [
                {
                  "step": "Find how many of the integers from $1$ to $77$ are values of $\\lfloor 2x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $ax$ is $n$ from $ax = n$ until $ax$ reaches $n + 1$, so the term steps up exactly where $ax$ is a whole number."
                },
                {
                  "step": "In order, the different points are $\\dfrac{1}{9}$, $\\dfrac{2}{9}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{7}{9}$, $\\dfrac{8}{9}$ and $1$: $10$ points",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: each point is written in lowest terms, so a point where two terms step up together is counted once."
                },
                {
                  "step": "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 9x\\rfloor + 11$",
                  "reason": "Floor of a number plus an integer: $\\lfloor 2x + 2\\rfloor = \\lfloor 2x\\rfloor + 2$ and $\\lfloor 9x + 9\\rfloor = \\lfloor 9x\\rfloor + 9$, and $2 + 9 = 11$."
                },
                {
                  "step": "For each integer $n$, for $n < x \\le n + 1$ the sum takes $10$ of the $11$ integers from $11n + 1$ to $11n + 11$",
                  "reason": "Floor: the sum is $0$ at $x = 0$, so by line 4 it is $11n$ at $x = n$; it changes only where a term steps up, which between $n$ and $n + 1$ happens $10$ times, the last at $x = n + 1$."
                },
                {
                  "step": "Since $77 = 7 \\cdot 11$, the integers from $1$ to $77$ are the $7$ runs with $n$ from $0$ to $6$",
                  "reason": "The definition of divides, from arithmetic: $11$ divides $77$, and the run with $n = 6$ ends at $11 \\cdot 6 + 11 = 77$."
                },
                {
                  "step": "$7 \\cdot 10 = 70$",
                  "reason": "Multiplication as repeated addition, from arithmetic: each of the $7$ runs holds $10$ values of the sum."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t225-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for how many of the integers from $1$ to $54$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
            "given": [
              "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 10x\\rfloor$ at each multiple of $\\dfrac{1}{10}$.",
              "The different points are $\\dfrac{1}{10}$, $\\dfrac{1}{5}$, $\\dfrac{3}{10}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{7}{10}$, $\\dfrac{4}{5}$, $\\dfrac{9}{10}$ and $1$: $12$ points.",
              "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 10(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 5x\\rfloor + 5 + \\lfloor 10x\\rfloor + 10 = \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor + 18$",
              "For $n < x \\le n + 1$ the sum takes $12$ of the $18$ integers from $18n + 1$ to $18n + 18$.",
              "The run with $n = 2$ ends at $18 \\cdot 2 + 18 = 36 + 18 = 54$.",
              "$\\dfrac{54}{18} = 3 \\cdot 12 = 36$",
              "The sum takes $36$ of the integers from $1$ to $54$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for how many of the integers from $1$ to $54$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 6 writes $\\dfrac{54}{18}$, then times $12$, in one run of equals signs, so it states $\\dfrac{54}{18} = 36$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{54}{18}$ is $3$."
              },
              {
                "step": "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the lines above it for every later line."
              },
              {
                "step": "Line 6 written right is \"$\\dfrac{54}{18} \\cdot 12 = 3 \\cdot 12 = 36$\".",
                "reason": "An equals sign stands only between two things that are equal, so each part of the line is the same number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $88$ are values of $\\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor$, and write that line right.",
              "given": [
                "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, and the term $\\lfloor 8x\\rfloor$ at each multiple of $\\dfrac{1}{8}$.",
                "The different points are $\\dfrac{1}{8}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{3}{8}$, $\\dfrac{1}{2}$, $\\dfrac{5}{8}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{8}$ and $1$: $10$ points.",
                "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 8(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 8x\\rfloor + 8 = \\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor + 11$",
                "For $n < x \\le n + 1$ the sum takes $10$ of the $11$ integers from $11n + 1$ to $11n + 11$.",
                "The run with $n = 7$ ends at $11 \\cdot 7 = 77 + 11 = 88$.",
                "$\\dfrac{88}{11} \\cdot 10 = 8 \\cdot 10 = 80$",
                "The sum takes $80$ of the integers from $1$ to $88$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 11*7+11 = 77+11 = 88",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for how many of the integers from $1$ to $88$ are values of $\\lfloor 3x\\rfloor + \\lfloor 8x\\rfloor$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $11 \\cdot 7$, then adds $11$, in one run of equals signs, so it states $11 \\cdot 7 = 88$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $11 \\cdot 7$ is $77$."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the lines above it for every later line."
                },
                {
                  "step": "Line 5 written right is \"$11 \\cdot 7 + 11 = 77 + 11 = 88$\".",
                  "reason": "An equals sign stands only between two things that are equal, so each part of the line is the same number."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $126$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
              "given": [
                "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$.",
                "The different points are $\\dfrac{1}{7}$, $\\dfrac{1}{5}$, $\\dfrac{2}{7}$, $\\dfrac{2}{5}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{3}{5}$, $\\dfrac{5}{7}$, $\\dfrac{4}{5}$, $\\dfrac{6}{7}$ and $1$: $12$ points.",
                "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 5x\\rfloor + 5 + \\lfloor 7x\\rfloor + 7 = \\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor + 14$",
                "For $n < x \\le n + 1$ the sum takes $12$ of the $14$ integers from $14n + 1$ to $14n + 14$.",
                "The run with $n = 8$ ends at $14 \\cdot 8 = 112 + 14 = 126$.",
                "$\\dfrac{126}{14} \\cdot 12 = 9 \\cdot 12 = 108$",
                "The sum takes $108$ of the integers from $1$ to $126$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 14*8+14 = 112+14 = 126",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for how many of the integers from $1$ to $126$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $14 \\cdot 8$, then adds $14$, in one run of equals signs, so it states $14 \\cdot 8 = 126$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $14 \\cdot 8$ is $112$."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the lines above it for every later line."
                },
                {
                  "step": "Line 5 written right is \"$14 \\cdot 8 + 14 = 112 + 14 = 126$\".",
                  "reason": "An equals sign stands only between two things that are equal, so each part of the line is the same number."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $99$ are values of $\\lfloor 2x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
              "given": [
                "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$.",
                "The different points are $\\dfrac{1}{7}$, $\\dfrac{2}{7}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{5}{7}$, $\\dfrac{6}{7}$ and $1$: $8$ points.",
                "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 7x\\rfloor + 7 = \\lfloor 2x\\rfloor + \\lfloor 7x\\rfloor + 9$",
                "For $n < x \\le n + 1$ the sum takes $8$ of the $9$ integers from $9n + 1$ to $9n + 9$.",
                "The run with $n = 10$ ends at $9 \\cdot 10 + 9 = 90 + 9 = 99$.",
                "$\\dfrac{99}{9} = 11 \\cdot 8 = 88$",
                "The sum takes $88$ of the integers from $1$ to $99$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 99/9*8 = 11*8 = 88",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for how many of the integers from $1$ to $99$ are values of $\\lfloor 2x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 writes $\\dfrac{99}{9}$, then times $8$, in one run of equals signs, so it states $\\dfrac{99}{9} = 88$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{99}{9}$ is $11$."
                },
                {
                  "step": "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the lines above it for every later line."
                },
                {
                  "step": "Line 6 written right is \"$\\dfrac{99}{9} \\cdot 8 = 11 \\cdot 8 = 88$\".",
                  "reason": "An equals sign stands only between two things that are equal, so each part of the line is the same number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t225-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + 3\\lfloor \\dfrac{x}{4} \\rfloor + 2$ for $-3 \\le x < 8$.",
            "lines": [
              {
                "step": "Sketch the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + 3\\lfloor \\dfrac{x}{4} \\rfloor + 2$ for $-3 \\le x < 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Inside $-3 \\le x < 8$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $0$, $3$ or $6$, and the term $\\lfloor \\dfrac{x}{4} \\rfloor$ where $x$ is $0$ or $4$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $\\dfrac{x}{a}$ goes up by $1$ each time $\\dfrac{x}{a}$ reaches a whole number, which is where $x$ is a multiple of $a$."
              },
              {
                "step": "For $-3 \\le x < 0$: $\\lfloor \\dfrac{x}{3} \\rfloor = -1$ and $\\lfloor \\dfrac{x}{4} \\rfloor = -1$, so $y = -2$",
                "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $-1 \\le \\dfrac{x}{3} < 0$ and $-1 \\le \\dfrac{x}{4} < 0$."
              },
              {
                "step": "At a step point of the first term $y$ goes up $1$, at one of the second term up $3$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-2$, $2$, $3$, $6$ and $7$",
                "reason": "Floor: each floor goes up by $1$ at its step points, and a number in front of a floor multiplies its step."
              },
              {
                "step": "Each step starts with a filled dot and ends with an open circle where the next step starts",
                "reason": "Floor: a whole number is its own floor, so at a step point the term already has its new value."
              },
              {
                "step": "The graph meets the $y$-axis at $(0, 2)$",
                "reason": "Definition of the $y$-intercept: at $x = 0$ both floors are $0$, so $y = 2$."
              },
              {
                "step": "The graph does not meet the $x$-axis",
                "reason": "Definition of the $x$-intercept: none of the steps has the height $0$.",
                "figure": {
                  "file": "floor-and-fractional-part-equations-1.svg",
                  "alt": "Steps: y = −2 from x = −3 to 0; y = 2 from x = 0 to 3; y = 3 from x = 3 to 4; y = 6 from x = 4 to 6; y = 7 from x = 6 to 8; filled dot at the left end of each step, open circle at the right end."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor - 3$ that has $-6 \\le x < 6$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, -3)$"
                ],
                "turning": [
                  "Step $y = -6$: filled dot at $(-6, -6)$, open circle at $(-3, -6)$",
                  "Step $y = -5$: filled dot at $(-3, -5)$, open circle at $(0, -5)$",
                  "Step $y = -3$: filled dot at $(0, -3)$, open circle at $(3, -3)$",
                  "Step $y = -2$: filled dot at $(3, -2)$, open circle at $(6, -2)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor - 3$ that has $-6 \\le x < 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Inside $-6 \\le x < 6$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $-3$, $0$ or $3$, and the term $\\lfloor \\dfrac{x}{6} \\rfloor$ where $x$ is $0$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $\\dfrac{x}{a}$ goes up by $1$ each time $\\dfrac{x}{a}$ reaches a whole number, which is where $x$ is a multiple of $a$."
                },
                {
                  "step": "For $-6 \\le x < -3$: $\\lfloor \\dfrac{x}{3} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{6} \\rfloor = -1$, so $y = -6$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $-2 \\le \\dfrac{x}{3} < -1$ and $-1 \\le \\dfrac{x}{6} < 0$."
                },
                {
                  "step": "At a step point of the first term $y$ goes up $1$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $2$: the steps have the heights $-6$, $-5$, $-3$ and $-2$",
                  "reason": "Floor: each floor goes up by $1$ at its step points, and a number in front of a floor multiplies its step."
                },
                {
                  "step": "Each step starts with a filled dot and ends with an open circle where the next step starts",
                  "reason": "Floor: a whole number is its own floor, so at a step point the term already has its new value."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, -3)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ both floors are $0$, so $y = -3$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: none of the steps has the height $0$.",
                  "figure": {
                    "file": "floor-and-fractional-part-equations-2.svg",
                    "alt": "Steps: y = −6 from x = −6 to −3; y = −5 from x = −3 to 0; y = −3 from x = 0 to 3; y = −2 from x = 3 to 6; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 5$ for $-5 \\le x < 2$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 5)$"
                ],
                "turning": [
                  "Step $y = 1$: filled dot at $(-5, 1)$, open circle at $(-4, 1)$",
                  "Step $y = 2$: filled dot at $(-4, 2)$, open circle at $(-2, 2)$",
                  "Step $y = 3$: filled dot at $(-2, 3)$, open circle at $(0, 3)$",
                  "Step $y = 5$: filled dot at $(0, 5)$, open circle at $(2, 5)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 5$ for $-5 \\le x < 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Inside $-5 \\le x < 2$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-4$, $-2$ or $0$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $\\dfrac{x}{a}$ goes up by $1$ each time $\\dfrac{x}{a}$ reaches a whole number, which is where $x$ is a multiple of $a$."
                },
                {
                  "step": "For $-5 \\le x < -4$: $\\lfloor \\dfrac{x}{2} \\rfloor = -3$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = 1$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $-3 \\le \\dfrac{x}{2} < -2$ and $-1 \\le \\dfrac{x}{5} < 0$."
                },
                {
                  "step": "At a step point of the first term $y$ goes up $1$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $2$: the steps have the heights $1$, $2$, $3$ and $5$",
                  "reason": "Floor: each floor goes up by $1$ at its step points, and a number in front of a floor multiplies its step."
                },
                {
                  "step": "Each step starts with a filled dot and ends with an open circle where the next step starts",
                  "reason": "Floor: a whole number is its own floor, so at a step point the term already has its new value."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 5)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ both floors are $0$, so $y = 5$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: none of the steps has the height $0$.",
                  "figure": {
                    "file": "floor-and-fractional-part-equations-3.svg",
                    "alt": "Steps: y = 1 from x = −5 to −4; y = 2 from x = −4 to −2; y = 3 from x = −2 to 0; y = 5 from x = 0 to 2; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{5} \\rfloor + 2$ that has $-5 \\le x < 5$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(0, 2)$"
                ],
                "turning": [
                  "Step $y = -3$: filled dot at $(-5, -3)$, open circle at $(-4, -3)$",
                  "Step $y = -2$: filled dot at $(-4, -2)$, open circle at $(-2, -2)$",
                  "Step $y = -1$: filled dot at $(-2, -1)$, open circle at $(0, -1)$",
                  "Step $y = 2$: filled dot at $(0, 2)$, open circle at $(2, 2)$",
                  "Step $y = 3$: filled dot at $(2, 3)$, open circle at $(4, 3)$",
                  "Step $y = 4$: filled dot at $(4, 4)$, open circle at $(5, 4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{5} \\rfloor + 2$ that has $-5 \\le x < 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Inside $-5 \\le x < 5$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-4$, $-2$, $0$, $2$ or $4$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: the floor of $\\dfrac{x}{a}$ goes up by $1$ each time $\\dfrac{x}{a}$ reaches a whole number, which is where $x$ is a multiple of $a$."
                },
                {
                  "step": "For $-5 \\le x < -4$: $\\lfloor \\dfrac{x}{2} \\rfloor = -3$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = -3$",
                  "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: here $-3 \\le \\dfrac{x}{2} < -2$ and $-1 \\le \\dfrac{x}{5} < 0$."
                },
                {
                  "step": "At a step point of the first term $y$ goes up $1$, at one of the second term up $2$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $-3$, $-2$, $-1$, $2$, $3$ and $4$",
                  "reason": "Floor: each floor goes up by $1$ at its step points, and a number in front of a floor multiplies its step."
                },
                {
                  "step": "Each step starts with a filled dot and ends with an open circle where the next step starts",
                  "reason": "Floor: a whole number is its own floor, so at a step point the term already has its new value."
                },
                {
                  "step": "The graph meets the $y$-axis at $(0, 2)$",
                  "reason": "Definition of the $y$-intercept: at $x = 0$ both floors are $0$, so $y = 2$."
                },
                {
                  "step": "The graph does not meet the $x$-axis",
                  "reason": "Definition of the $x$-intercept: none of the steps has the height $0$.",
                  "figure": {
                    "file": "floor-and-fractional-part-equations-4.svg",
                    "alt": "Steps: y = −3 from x = −5 to −4; y = −2 from x = −4 to −2; y = −1 from x = −2 to 0; y = 2 from x = 0 to 2; y = 3 from x = 2 to 4; y = 4 from x = 4 to 5; filled dot at the left end of each step, open circle at the right end."
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t225-s1",
      "method": "direct proof",
      "statement": "Prove that $\\lfloor x\\rfloor + \\lfloor y\\rfloor \\le \\lfloor x + y\\rfloor$ for all real numbers $x$ and $y$. Facts it may use: the floor is the greatest integer that is not above the number; adding two inequalities; the sum of two integers is an integer.",
      "check": {
        "proof": [
          {
            "line": "First, $\\lfloor x\\rfloor \\le x$.",
            "reason": "Floor: the floor of $x$ is not above $x$."
          },
          {
            "line": "Also $\\lfloor y\\rfloor \\le y$.",
            "reason": "Floor: the floor of $y$ is not above $y$."
          },
          {
            "line": "So $\\lfloor x\\rfloor + \\lfloor y\\rfloor \\le x + y$.",
            "reason": "Adding two inequalities, from arithmetic: lines 1 and 2."
          },
          {
            "line": "And $\\lfloor x\\rfloor + \\lfloor y\\rfloor$ is an integer.",
            "reason": "The addition of integers, from arithmetic."
          },
          {
            "line": "So $\\lfloor x\\rfloor + \\lfloor y\\rfloor$ is an integer that is not above $x + y$.",
            "reason": "Lines 3 and 4."
          },
          {
            "line": "Therefore $\\lfloor x\\rfloor + \\lfloor y\\rfloor \\le \\lfloor x + y\\rfloor$.",
            "reason": "Floor: $\\lfloor x + y\\rfloor$ is the greatest integer that is not above $x + y$."
          }
        ]
      }
    },
    {
      "id": "t225-s2",
      "method": "direct proof",
      "statement": "Prove that $\\lfloor x + y\\rfloor \\le \\lfloor x\\rfloor + \\lfloor y\\rfloor + 1$ for all real numbers $x$ and $y$. Facts it may use: the floor is the greatest integer that is not above the number; $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$; adding two inequalities; transitivity; the sum of two integers is an integer.",
      "check": {
        "proof": [
          {
            "line": "First, $x < \\lfloor x\\rfloor + 1$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: with $n = \\lfloor x\\rfloor$."
          },
          {
            "line": "Also $y < \\lfloor y\\rfloor + 1$.",
            "reason": "The rule $\\lfloor x\\rfloor = n$ exactly when $n \\le x < n + 1$: with $y$ in place of $x$ and $n = \\lfloor y\\rfloor$."
          },
          {
            "line": "So $x + y < \\lfloor x\\rfloor + \\lfloor y\\rfloor + 2$.",
            "reason": "Adding two inequalities, from arithmetic: lines 1 and 2."
          },
          {
            "line": "And $\\lfloor x + y\\rfloor \\le x + y$.",
            "reason": "Floor: the floor of $x + y$ is not above $x + y$."
          },
          {
            "line": "So $\\lfloor x + y\\rfloor < \\lfloor x\\rfloor + \\lfloor y\\rfloor + 2$.",
            "reason": "Transitivity, from arithmetic: lines 4 and 3."
          },
          {
            "line": "Both sides of line 5 are integers.",
            "reason": "The addition of integers, from arithmetic."
          },
          {
            "line": "Therefore $\\lfloor x + y\\rfloor \\le \\lfloor x\\rfloor + \\lfloor y\\rfloor + 1$.",
            "reason": "Floor: the greatest integer below the integer $\\lfloor x\\rfloor + \\lfloor y\\rfloor + 2$ is $\\lfloor x\\rfloor + \\lfloor y\\rfloor + 1$."
          }
        ]
      }
    }
  ]
}
