export default {
  "number": 197,
  "title": "Integer roots",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "198-206"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $f(x) = x^3 + 3x^2 - 126x + 392$ completely.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(x-4)*(x-7)*(x+14)",
    "solution": [
      "Factor $f(x) = x^3 + 3x^2 - 126x + 392$ completely.",
      "Every nonzero integer root of $f(x)$ divides $392$.",
      "$\\begin{array}{r|rrrr} 4 & 1 & 3 & -126 & 392 \\\\ & & 4 & 28 & -392 \\\\ \\hline & 1 & 7 & -98 & 0 \\end{array}$",
      "$f(x) = (x - 4)(x^2 + 7x - 98)$",
      "$x^2 + 7x - 98 = (x - 7)(x + 14)$",
      "$f(x) = (x - 4)(x - 7)(x + 14)$"
    ]
  },
  "ideas": [
    {
      "name": "Integer Root Theorem",
      "concrete": "The polynomial $f(x) = x^3 - 6x^2 - 4x + 24$ has integer coefficients, and $f(6) = 6^3 - 6 \\cdot 6^2 - 4 \\cdot 6 + 24 = 216 - 216 - 24 + 24 = 0$, so $6$ is a root. The root $6$ divides the constant term $24$: $24 = 6 \\cdot 4$.",
      "general": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial whose coefficients are integers. Then every nonzero integer root of $f(x)$ divides the constant term $a_0$. This is the **Integer Root Theorem**. So the integer roots are found among the divisors of $a_0$ and their negatives."
    },
    {
      "name": "Sign change",
      "concrete": "For $f(x) = -3x^3 + 5x^2 + 7x + 6$, the value $f(2) = 16$ is positive and $f(3) = -9$ is negative, and the graph of $f$ crosses the $x$-axis between $x = 2$ and $x = 3$.",
      "general": "Let $f(x)$ be a polynomial with real coefficients and $a$ and $b$ real numbers. If $f(a)$ and $f(b)$ have different signs, then $f(x)$ has a root between $a$ and $b$. This is **Sign change**. The course states this fact with no proof. Values of the same sign tell nothing: there may be roots between $a$ and $b$ or none."
    },
    {
      "name": "Zero constant term",
      "concrete": "The polynomial $x^3 - 11x^2 + 28x$ has no constant term, and $x^3 - 11x^2 + 28x = x(x^2 - 11x + 28)$, so $0$ is a root.",
      "general": "If a polynomial has no constant term, then $0$ is a root of it and $x$ is a factor of it. This is **Zero constant term**."
    }
  ],
  "kinds": [
    {
      "id": "t197-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $f(x) = x^3 - 7x^2 - 86x - 168$ completely.",
            "lines": [
              {
                "step": "Factor $f(x) = x^3 - 7x^2 - 86x - 168$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every nonzero integer root of $f(x)$ divides $-168$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-168$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -3 & 1 & -7 & -86 & -168 \\\\ & & -3 & 30 & 168 \\\\ \\hline & 1 & -10 & -56 & 0 \\end{array}$",
                "reason": "Synthetic division: $-3$ divides $-168$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = (x + 3)(x^2 - 10x - 56)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 3$ is a factor, and the bottom numbers before it, $1$, $-10$ and $-56$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 - 10x - 56 = (x + 4)(x - 14)$",
                "reason": "Factoring a quadratic: two numbers with sum $-10$ and product $-56$ are $4$ and $-14$."
              },
              {
                "step": "$f(x) = (x + 3)(x + 4)(x - 14)$",
                "reason": "Factored form: lines 4 and 5 give $f(x)$ as a product of brackets $x - r$, one for each root $r$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = x^3 - 14x^2 - 17x + 390$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x+5)*(x-6)*(x-13)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^3 - 14x^2 - 17x + 390$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $390$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $390$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -5 & 1 & -14 & -17 & 390 \\\\ & & -5 & 95 & -390 \\\\ \\hline & 1 & -19 & 78 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-5$ divides $390$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 5)(x^2 - 19x + 78)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 5$ is a factor, and the bottom numbers before it, $1$, $-19$ and $78$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 19x + 78 = (x - 6)(x - 13)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-19$ and product $78$ are $-6$ and $-13$."
                },
                {
                  "step": "$f(x) = (x + 5)(x - 6)(x - 13)$",
                  "reason": "Factored form: lines 4 and 5 give $f(x)$ as a product of brackets $x - r$, one for each root $r$."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^3 + 9x^2 - 64x - 576$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-8)*(x+8)*(x+9)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^3 + 9x^2 - 64x - 576$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $-576$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-576$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 8 & 1 & 9 & -64 & -576 \\\\ & & 8 & 136 & 576 \\\\ \\hline & 1 & 17 & 72 & 0 \\end{array}$",
                  "reason": "Synthetic division: $8$ divides $-576$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 8)(x^2 + 17x + 72)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 8$ is a factor, and the bottom numbers before it, $1$, $17$ and $72$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 17x + 72 = (x + 8)(x + 9)$",
                  "reason": "Factoring a quadratic: two numbers with sum $17$ and product $72$ are $8$ and $9$."
                },
                {
                  "step": "$f(x) = (x - 8)(x + 8)(x + 9)$",
                  "reason": "Factored form: lines 4 and 5 give $f(x)$ as a product of brackets $x - r$, one for each root $r$."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^3 + 24x^2 + 149x + 210$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x+2)*(x+7)*(x+15)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^3 + 24x^2 + 149x + 210$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $210$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $210$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 1 & 24 & 149 & 210 \\\\ & & -2 & -44 & -210 \\\\ \\hline & 1 & 22 & 105 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-2$ divides $210$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 2)(x^2 + 22x + 105)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $22$ and $105$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 22x + 105 = (x + 7)(x + 15)$",
                  "reason": "Factoring a quadratic: two numbers with sum $22$ and product $105$ are $7$ and $15$."
                },
                {
                  "step": "$f(x) = (x + 2)(x + 7)(x + 15)$",
                  "reason": "Factored form: lines 4 and 5 give $f(x)$ as a product of brackets $x - r$, one for each root $r$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $f(x) = x^4 - 28x^3 + 231x^2 - 468x$ completely.",
            "lines": [
              {
                "step": "Factor $f(x) = x^4 - 28x^3 + 231x^2 - 468x$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) = x(x^3 - 28x^2 + 231x - 468)$",
                "reason": "Zero constant term: $f(x)$ has no constant term, so $0$ is a root and $x$ is a factor of every term; taking it out leaves a cubic."
              },
              {
                "step": "Every nonzero integer root of $x^3 - 28x^2 + 231x - 468$ divides $-468$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-468$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 3 & 1 & -28 & 231 & -468 \\\\ & & 3 & -75 & 468 \\\\ \\hline & 1 & -25 & 156 & 0 \\end{array}$",
                "reason": "Synthetic division: $3$ divides $-468$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$x^3 - 28x^2 + 231x - 468 = (x - 3)(x^2 - 25x + 156)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $-25$ and $156$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 - 25x + 156 = (x - 12)(x - 13)$",
                "reason": "Factoring a quadratic: two numbers with sum $-25$ and product $156$ are $-12$ and $-13$."
              },
              {
                "step": "$f(x) = x(x - 3)(x - 12)(x - 13)$",
                "reason": "Factored form: lines 2, 5 and 6 give $f(x)$ as a product of brackets $x - r$, one for each root $r$, with $x$ for the root $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = x^4 + 23x^3 + 104x^2 - 308x$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "x*(x-2)*(x+11)*(x+14)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 + 23x^3 + 104x^2 - 308x$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x(x^3 + 23x^2 + 104x - 308)$",
                  "reason": "Zero constant term: $f(x)$ has no constant term, so $0$ is a root and $x$ is a factor of every term; taking it out leaves a cubic."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 23x^2 + 104x - 308$ divides $-308$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-308$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & 1 & 23 & 104 & -308 \\\\ & & 2 & 50 & 308 \\\\ \\hline & 1 & 25 & 154 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ divides $-308$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 23x^2 + 104x - 308 = (x - 2)(x^2 + 25x + 154)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $1$, $25$ and $154$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 25x + 154 = (x + 11)(x + 14)$",
                  "reason": "Factoring a quadratic: two numbers with sum $25$ and product $154$ are $11$ and $14$."
                },
                {
                  "step": "$f(x) = x(x - 2)(x + 11)(x + 14)$",
                  "reason": "Factored form: lines 2, 5 and 6 give $f(x)$ as a product of brackets $x - r$, one for each root $r$, with $x$ for the root $0$."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^4 + 25x^3 + 188x^2 + 416x$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "x*(x+4)*(x+8)*(x+13)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 + 25x^3 + 188x^2 + 416x$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x(x^3 + 25x^2 + 188x + 416)$",
                  "reason": "Zero constant term: $f(x)$ has no constant term, so $0$ is a root and $x$ is a factor of every term; taking it out leaves a cubic."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 25x^2 + 188x + 416$ divides $416$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $416$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -4 & 1 & 25 & 188 & 416 \\\\ & & -4 & -84 & -416 \\\\ \\hline & 1 & 21 & 104 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-4$ divides $416$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 25x^2 + 188x + 416 = (x + 4)(x^2 + 21x + 104)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $1$, $21$ and $104$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 21x + 104 = (x + 8)(x + 13)$",
                  "reason": "Factoring a quadratic: two numbers with sum $21$ and product $104$ are $8$ and $13$."
                },
                {
                  "step": "$f(x) = x(x + 4)(x + 8)(x + 13)$",
                  "reason": "Factored form: lines 2, 5 and 6 give $f(x)$ as a product of brackets $x - r$, one for each root $r$, with $x$ for the root $0$."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^4 + 9x^3 - 40x^2 - 300x$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "x*(x+5)*(x-6)*(x+10)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 + 9x^3 - 40x^2 - 300x$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) = x(x^3 + 9x^2 - 40x - 300)$",
                  "reason": "Zero constant term: $f(x)$ has no constant term, so $0$ is a root and $x$ is a factor of every term; taking it out leaves a cubic."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 9x^2 - 40x - 300$ divides $-300$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-300$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -5 & 1 & 9 & -40 & -300 \\\\ & & -5 & -20 & 300 \\\\ \\hline & 1 & 4 & -60 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-5$ divides $-300$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 9x^2 - 40x - 300 = (x + 5)(x^2 + 4x - 60)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 5$ is a factor, and the bottom numbers before it, $1$, $4$ and $-60$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 4x - 60 = (x - 6)(x + 10)$",
                  "reason": "Factoring a quadratic: two numbers with sum $4$ and product $-60$ are $-6$ and $10$."
                },
                {
                  "step": "$f(x) = x(x + 5)(x - 6)(x + 10)$",
                  "reason": "Factored form: lines 2, 5 and 6 give $f(x)$ as a product of brackets $x - r$, one for each root $r$, with $x$ for the root $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $f(x) = x^4 + 11x^3 - 52x^2 - 368x + 1344$ completely.",
            "lines": [
              {
                "step": "Factor $f(x) = x^4 + 11x^3 - 52x^2 - 368x + 1344$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every nonzero integer root of $f(x)$ divides $1344$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $1344$."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 4 & 1 & 11 & -52 & -368 & 1344 \\\\ & & 4 & 60 & 32 & -1344 \\\\ \\hline & 1 & 15 & 8 & -336 & 0 \\end{array}$",
                "reason": "Synthetic division: $4$ divides $1344$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = (x - 4)(x^3 + 15x^2 + 8x - 336)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 4$ is a factor, and the bottom numbers before it, $1$, $15$, $8$ and $-336$, are the coefficients of the quotient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 4 & 1 & 15 & 8 & -336 \\\\ & & 4 & 76 & 336 \\\\ \\hline & 1 & 19 & 84 & 0 \\end{array}$",
                "reason": "Multiplicity: a root may repeat, so $4$ is tried again on the quotient; the bottom row is worked out as in line 3."
              },
              {
                "step": "$x^3 + 15x^2 + 8x - 336 = (x - 4)(x^2 + 19x + 84)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 4$ is a factor, and the bottom numbers before it, $1$, $19$ and $84$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 + 19x + 84 = (x + 7)(x + 12)$",
                "reason": "Factoring a quadratic: two numbers with sum $19$ and product $84$ are $7$ and $12$."
              },
              {
                "step": "$f(x) = (x - 4)(x - 4)(x + 7)(x + 12)$",
                "reason": "Substitution: line 7 takes the place of the quotient in line 6, and line 6 the place of the quotient in line 4."
              },
              {
                "step": "$f(x) = (x - 4)^2(x + 7)(x + 12)$",
                "reason": "Product law: the bracket $x - 4$, there twice, is written as its power."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = x^4 + 12x^3 + 3x^2 - 296x - 720$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x+4)^2*(x-5)*(x+9)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 + 12x^3 + 3x^2 - 296x - 720$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $-720$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-720$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} -4 & 1 & 12 & 3 & -296 & -720 \\\\ & & -4 & -32 & 116 & 720 \\\\ \\hline & 1 & 8 & -29 & -180 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-4$ divides $-720$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 4)(x^3 + 8x^2 - 29x - 180)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $1$, $8$, $-29$ and $-180$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -4 & 1 & 8 & -29 & -180 \\\\ & & -4 & -16 & 180 \\\\ \\hline & 1 & 4 & -45 & 0 \\end{array}$",
                  "reason": "Multiplicity: a root may repeat, so $-4$ is tried again on the quotient; the bottom row is worked out as in line 3."
                },
                {
                  "step": "$x^3 + 8x^2 - 29x - 180 = (x + 4)(x^2 + 4x - 45)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $1$, $4$ and $-45$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 4x - 45 = (x - 5)(x + 9)$",
                  "reason": "Factoring a quadratic: two numbers with sum $4$ and product $-45$ are $-5$ and $9$."
                },
                {
                  "step": "$f(x) = (x + 4)(x + 4)(x - 5)(x + 9)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6, and line 6 the place of the quotient in line 4."
                },
                {
                  "step": "$f(x) = (x + 4)^2(x - 5)(x + 9)$",
                  "reason": "Product law: the bracket $x + 4$, there twice, is written as its power."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^4 - 22x^3 + 144x^2 - 378x + 351$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-3)^3*(x-13)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 - 22x^3 + 144x^2 - 378x + 351$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $351$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $351$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 3 & 1 & -22 & 144 & -378 & 351 \\\\ & & 3 & -57 & 261 & -351 \\\\ \\hline & 1 & -19 & 87 & -117 & 0 \\end{array}$",
                  "reason": "Synthetic division: $3$ divides $351$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 3)(x^3 - 19x^2 + 87x - 117)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $-19$, $87$ and $-117$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 3 & 1 & -19 & 87 & -117 \\\\ & & 3 & -48 & 117 \\\\ \\hline & 1 & -16 & 39 & 0 \\end{array}$",
                  "reason": "Multiplicity: a root may repeat, so $3$ is tried again on the quotient; the bottom row is worked out as in line 3."
                },
                {
                  "step": "$x^3 - 19x^2 + 87x - 117 = (x - 3)(x^2 - 16x + 39)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $-16$ and $39$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 16x + 39 = (x - 3)(x - 13)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-16$ and product $39$ are $-3$ and $-13$."
                },
                {
                  "step": "$f(x) = (x - 3)(x - 3)(x - 3)(x - 13)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6, and line 6 the place of the quotient in line 4."
                },
                {
                  "step": "$f(x) = (x - 3)^3(x - 13)$",
                  "reason": "Product law: the bracket $x - 3$, there three times, is written as its power."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = x^4 + 29x^3 + 254x^2 + 700x + 600$ completely.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x+2)^2*(x+10)*(x+15)",
              "lines": [
                {
                  "step": "Factor $f(x) = x^4 + 29x^3 + 254x^2 + 700x + 600$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $f(x)$ divides $600$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $600$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} -2 & 1 & 29 & 254 & 700 & 600 \\\\ & & -2 & -54 & -400 & -600 \\\\ \\hline & 1 & 27 & 200 & 300 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-2$ divides $600$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 2)(x^3 + 27x^2 + 200x + 300)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $27$, $200$ and $300$, are the coefficients of the quotient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 1 & 27 & 200 & 300 \\\\ & & -2 & -50 & -300 \\\\ \\hline & 1 & 25 & 150 & 0 \\end{array}$",
                  "reason": "Multiplicity: a root may repeat, so $-2$ is tried again on the quotient; the bottom row is worked out as in line 3."
                },
                {
                  "step": "$x^3 + 27x^2 + 200x + 300 = (x + 2)(x^2 + 25x + 150)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $25$ and $150$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 25x + 150 = (x + 10)(x + 15)$",
                  "reason": "Factoring a quadratic: two numbers with sum $25$ and product $150$ are $10$ and $15$."
                },
                {
                  "step": "$f(x) = (x + 2)(x + 2)(x + 10)(x + 15)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6, and line 6 the place of the quotient in line 4."
                },
                {
                  "step": "$f(x) = (x + 2)^2(x + 10)(x + 15)$",
                  "reason": "Product law: the bracket $x + 2$, there twice, is written as its power."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t197-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -196)$. Read A and B from the numbers on the $x$-axis.",
            "figure": {
              "file": "integer-roots-1.svg",
              "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at B, touches it at A, and meets the y-axis at C (0, −196)."
            },
            "lines": [
              {
                "step": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -196)$. Read A and B from the numbers on the $x$-axis.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The points are A $(-7, 0)$ and B $(-2, 0)$.",
                "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
              },
              {
                "step": "The roots are $-7$ and $-2$.",
                "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, so the $x$-coordinates of these points are the roots."
              },
              {
                "step": "The graph crosses the $x$-axis at B and touches it at A, so the root $-2$ has multiplicity $1$ and the root $-7$ has multiplicity $2$.",
                "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the axis at a root of odd multiplicity and touches it at a root of even multiplicity; the degree $3$ leaves no more."
              },
              {
                "step": "$y = a(x + 2)(x + 7)^2$",
                "reason": "Multiplicity: the product $(x + 2)(x + 7)^2$ is a factor of the polynomial, since each of its roots has there a multiplicity at least its multiplicity in the product; both have degree $3$, so the other factor is a number $a$."
              },
              {
                "step": "$-196 = a(0 + 2)(0 + 7)^2$",
                "reason": "Substituting a value: C $(0, -196)$ lies on the graph, so $0$ goes in place of $x$ and $-196$ in place of $y$."
              },
              {
                "step": "$-196 = 98a$",
                "reason": "Order of operations: each bracket is worked out, then each power, then the product."
              },
              {
                "step": "$a = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $98$."
              },
              {
                "step": "$y = -2(x + 2)(x + 7)^2$",
                "reason": "Substituting a value: $-2$ goes in place of $a$ in line 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 108)$. Read A and B from the numbers on the $x$-axis.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*(x+6)^2*(x+1)^2",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, 108)$. Read A and B from the numbers on the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A $(-6, 0)$ and B $(-1, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots are $-6$ and $-1$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, so the $x$-coordinates of these points are the roots."
                },
                {
                  "step": "The graph touches the $x$-axis at A and B, so the roots $-6$ and $-1$ have multiplicity $2$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the axis at a root of odd multiplicity and touches it at a root of even multiplicity; the degree $4$ leaves no more."
                },
                {
                  "step": "$y = a(x + 6)^2(x + 1)^2$",
                  "reason": "Multiplicity: the product $(x + 6)^2(x + 1)^2$ is a factor of the polynomial, since each of its roots has there a multiplicity at least its multiplicity in the product; both have degree $4$, so the other factor is a number $a$."
                },
                {
                  "step": "$108 = a(0 + 6)^2(0 + 1)^2$",
                  "reason": "Substituting a value: C $(0, 108)$ lies on the graph, so $0$ goes in place of $x$ and $108$ in place of $y$."
                },
                {
                  "step": "$108 = 36a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $36$."
                },
                {
                  "step": "$y = 3(x + 6)^2(x + 1)^2$",
                  "reason": "Substituting a value: $3$ goes in place of $a$ in line 5."
                }
              ],
              "figure": {
                "file": "integer-roots-2.svg",
                "alt": "The graph of a polynomial of degree 4, with numbered axes; it touches the x-axis at A and B, and meets the y-axis at C (0, 108)."
              }
            },
            {
              "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -50)$. Read A and B from the numbers on the $x$-axis.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*(x-1)*(x+5)^2",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 3; it meets the $x$-axis at A and B, and the $y$-axis at C $(0, -50)$. Read A and B from the numbers on the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A $(-5, 0)$ and B $(1, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots are $-5$ and $1$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, so the $x$-coordinates of these points are the roots."
                },
                {
                  "step": "The graph crosses the $x$-axis at B and touches it at A, so the root $1$ has multiplicity $1$ and the root $-5$ has multiplicity $2$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the axis at a root of odd multiplicity and touches it at a root of even multiplicity; the degree $3$ leaves no more."
                },
                {
                  "step": "$y = a(x - 1)(x + 5)^2$",
                  "reason": "Multiplicity: the product $(x - 1)(x + 5)^2$ is a factor of the polynomial, since each of its roots has there a multiplicity at least its multiplicity in the product; both have degree $3$, so the other factor is a number $a$."
                },
                {
                  "step": "$-50 = a(0 - 1)(0 + 5)^2$",
                  "reason": "Substituting a value: C $(0, -50)$ lies on the graph, so $0$ goes in place of $x$ and $-50$ in place of $y$."
                },
                {
                  "step": "$-50 = -25a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-25$."
                },
                {
                  "step": "$y = 2(x - 1)(x + 5)^2$",
                  "reason": "Substituting a value: $2$ goes in place of $a$ in line 5."
                }
              ],
              "figure": {
                "file": "integer-roots-3.svg",
                "alt": "The graph of a polynomial of degree 3, with numbered axes; it crosses the x-axis at B, touches it at A, and meets the y-axis at C (0, −50)."
              }
            },
            {
              "prompt": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -256)$. Read A, B and C from the numbers on the $x$-axis.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -2*(x-2)*(x-4)*(x+4)^2",
              "lines": [
                {
                  "step": "Write an equation of the graph in the figure, in factored form with $y$ alone on the left. The graph is of a polynomial of degree 4; it meets the $x$-axis at A, B and C, and the $y$-axis at D $(0, -256)$. Read A, B and C from the numbers on the $x$-axis.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The points are A $(-4, 0)$, B $(2, 0)$ and C $(4, 0)$.",
                  "reason": "Coordinates: each point on the $x$-axis is read from the numbers along the axis."
                },
                {
                  "step": "The roots are $-4$, $2$ and $4$.",
                  "reason": "Definition of the $x$-intercept: the graph meets the $x$-axis where $y = 0$, so the $x$-coordinates of these points are the roots."
                },
                {
                  "step": "The graph crosses the $x$-axis at B and C and touches it at A, so the roots $2$ and $4$ have multiplicity $1$ and the root $-4$ has multiplicity $2$.",
                  "reason": "Sign table: a bracket to an odd power changes sign at its zero and one to an even power does not, so the graph crosses the axis at a root of odd multiplicity and touches it at a root of even multiplicity; the degree $4$ leaves no more."
                },
                {
                  "step": "$y = a(x - 2)(x - 4)(x + 4)^2$",
                  "reason": "Multiplicity: the product $(x - 2)(x - 4)(x + 4)^2$ is a factor of the polynomial, since each of its roots has there a multiplicity at least its multiplicity in the product; both have degree $4$, so the other factor is a number $a$."
                },
                {
                  "step": "$-256 = a(0 - 2)(0 - 4)(0 + 4)^2$",
                  "reason": "Substituting a value: D $(0, -256)$ lies on the graph, so $0$ goes in place of $x$ and $-256$ in place of $y$."
                },
                {
                  "step": "$-256 = 128a$",
                  "reason": "Order of operations: each bracket is worked out, then each power, then the product."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $128$."
                },
                {
                  "step": "$y = -2(x - 2)(x - 4)(x + 4)^2$",
                  "reason": "Substituting a value: $-2$ goes in place of $a$ in line 5."
                }
              ],
              "figure": {
                "file": "integer-roots-4.svg",
                "alt": "The graph of a polynomial of degree 4, with numbered axes; it crosses the x-axis at B and C, touches it at A, and meets the y-axis at D (0, −256)."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "t197-k3",
      "forms": [
        {
          "example": {
            "problem": "Solve $x^3 - 23x^2 + 140x - 196 < 0$.",
            "lines": [
              {
                "step": "Solve $x^3 - 23x^2 + 140x - 196 < 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every nonzero integer root of $x^3 - 23x^2 + 140x - 196$ divides $-196$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-196$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 2 & 1 & -23 & 140 & -196 \\\\ & & 2 & -42 & 196 \\\\ \\hline & 1 & -21 & 98 & 0 \\end{array}$",
                "reason": "Synthetic division: $2$ divides $-196$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$x^3 - 23x^2 + 140x - 196 = (x - 2)(x^2 - 21x + 98)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $1$, $-21$ and $98$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 - 21x + 98 = (x - 7)(x - 14)$",
                "reason": "Factoring a quadratic: two numbers with sum $-21$ and product $98$ are $-7$ and $-14$."
              },
              {
                "step": "$(x - 2)(x - 7)(x - 14) < 0$",
                "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
              },
              {
                "step": "On $x < 2$, $2 < x < 7$, $7 < x < 14$ and $x > 14$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $2$, $7$ and $14$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $x < 2$ or $7 < x < 14$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^3 + 17x^2 + 80x + 100 > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-10 < x < -5 or x > -2",
              "lines": [
                {
                  "step": "Solve $x^3 + 17x^2 + 80x + 100 > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 17x^2 + 80x + 100$ divides $100$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $100$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 1 & 17 & 80 & 100 \\\\ & & -2 & -30 & -100 \\\\ \\hline & 1 & 15 & 50 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-2$ divides $100$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 17x^2 + 80x + 100 = (x + 2)(x^2 + 15x + 50)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $15$ and $50$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 15x + 50 = (x + 5)(x + 10)$",
                  "reason": "Factoring a quadratic: two numbers with sum $15$ and product $50$ are $5$ and $10$."
                },
                {
                  "step": "$(x + 2)(x + 5)(x + 10) > 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -10$, $-10 < x < -5$, $-5 < x < -2$ and $x > -2$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-10$, $-5$ and $-2$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-10 < x < -5$ or $x > -2$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 + 14x^2 - 36x - 504 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -14 or -6 < x < 6",
              "lines": [
                {
                  "step": "Solve $x^3 + 14x^2 - 36x - 504 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 14x^2 - 36x - 504$ divides $-504$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-504$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 6 & 1 & 14 & -36 & -504 \\\\ & & 6 & 120 & 504 \\\\ \\hline & 1 & 20 & 84 & 0 \\end{array}$",
                  "reason": "Synthetic division: $6$ divides $-504$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 14x^2 - 36x - 504 = (x - 6)(x^2 + 20x + 84)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 6$ is a factor, and the bottom numbers before it, $1$, $20$ and $84$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 20x + 84 = (x + 6)(x + 14)$",
                  "reason": "Factoring a quadratic: two numbers with sum $20$ and product $84$ are $6$ and $14$."
                },
                {
                  "step": "$(x - 6)(x + 6)(x + 14) < 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -14$, $-14 < x < -6$, $-6 < x < 6$ and $x > 6$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-14$, $-6$ and $6$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -14$ or $-6 < x < 6$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 - 20x^2 + 103x - 156 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 3 or 4 < x < 13",
              "lines": [
                {
                  "step": "Solve $x^3 - 20x^2 + 103x - 156 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 20x^2 + 103x - 156$ divides $-156$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-156$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 3 & 1 & -20 & 103 & -156 \\\\ & & 3 & -51 & 156 \\\\ \\hline & 1 & -17 & 52 & 0 \\end{array}$",
                  "reason": "Synthetic division: $3$ divides $-156$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 20x^2 + 103x - 156 = (x - 3)(x^2 - 17x + 52)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $-17$ and $52$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 17x + 52 = (x - 4)(x - 13)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-17$ and product $52$ are $-4$ and $-13$."
                },
                {
                  "step": "$(x - 3)(x - 4)(x - 13) < 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < 3$, $3 < x < 4$, $4 < x < 13$ and $x > 13$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $3$, $4$ and $13$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < 3$ or $4 < x < 13$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^3 - 8x^2 < 89x - 312$.",
            "lines": [
              {
                "step": "Solve $x^3 - 8x^2 < 89x - 312$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^3 - 8x^2 - 89x + 312 < 0$",
                "reason": "Adding the same number, from arithmetic: taking $89x - 312$ from both sides leaves $0$ on the right."
              },
              {
                "step": "Every nonzero integer root of $x^3 - 8x^2 - 89x + 312$ divides $312$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $312$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 3 & 1 & -8 & -89 & 312 \\\\ & & 3 & -15 & -312 \\\\ \\hline & 1 & -5 & -104 & 0 \\end{array}$",
                "reason": "Synthetic division: $3$ divides $312$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$x^3 - 8x^2 - 89x + 312 = (x - 3)(x^2 - 5x - 104)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $-5$ and $-104$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 - 5x - 104 = (x + 8)(x - 13)$",
                "reason": "Factoring a quadratic: two numbers with sum $-5$ and product $-104$ are $8$ and $-13$."
              },
              {
                "step": "$(x - 3)(x + 8)(x - 13) < 0$",
                "reason": "Substitution: by lines 5 and 6 the brackets take the place of the left side."
              },
              {
                "step": "On $x < -8$, $-8 < x < 3$, $3 < x < 13$ and $x > 13$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-8$, $3$ and $13$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $x < -8$ or $3 < x < 13$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^3 - 18x < 13x^2 - 360$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -5 or 6 < x < 12",
              "lines": [
                {
                  "step": "Solve $x^3 - 18x < 13x^2 - 360$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 13x^2 - 18x + 360 < 0$",
                  "reason": "Adding the same number, from arithmetic: taking $13x^2 - 360$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 13x^2 - 18x + 360$ divides $360$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $360$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -5 & 1 & -13 & -18 & 360 \\\\ & & -5 & 90 & -360 \\\\ \\hline & 1 & -18 & 72 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-5$ divides $360$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 13x^2 - 18x + 360 = (x + 5)(x^2 - 18x + 72)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 5$ is a factor, and the bottom numbers before it, $1$, $-18$ and $72$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 18x + 72 = (x - 6)(x - 12)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-18$ and product $72$ are $-6$ and $-12$."
                },
                {
                  "step": "$(x + 5)(x - 6)(x - 12) < 0$",
                  "reason": "Substitution: by lines 5 and 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -5$, $-5 < x < 6$, $6 < x < 12$ and $x > 12$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-5$, $6$ and $12$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -5$ or $6 < x < 12$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 - 2x^2 > 173x + 330$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-11 < x < -2 or x > 15",
              "lines": [
                {
                  "step": "Solve $x^3 - 2x^2 > 173x + 330$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 - 2x^2 - 173x - 330 > 0$",
                  "reason": "Adding the same number, from arithmetic: taking $173x + 330$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 2x^2 - 173x - 330$ divides $-330$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-330$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 1 & -2 & -173 & -330 \\\\ & & -2 & 8 & 330 \\\\ \\hline & 1 & -4 & -165 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-2$ divides $-330$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 2x^2 - 173x - 330 = (x + 2)(x^2 - 4x - 165)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $-4$ and $-165$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 4x - 165 = (x + 11)(x - 15)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-4$ and product $-165$ are $11$ and $-15$."
                },
                {
                  "step": "$(x + 2)(x + 11)(x - 15) > 0$",
                  "reason": "Substitution: by lines 5 and 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -11$, $-11 < x < -2$, $-2 < x < 15$ and $x > 15$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-11$, $-2$ and $15$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-11 < x < -2$ or $x > 15$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 + 4x^2 \\ge 147x - 270$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-15 <= x <= 2 or x >= 9",
              "lines": [
                {
                  "step": "Solve $x^3 + 4x^2 \\ge 147x - 270$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^3 + 4x^2 - 147x + 270 \\ge 0$",
                  "reason": "Adding the same number, from arithmetic: taking $147x - 270$ from both sides leaves $0$ on the right."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 4x^2 - 147x + 270$ divides $270$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $270$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & 1 & 4 & -147 & 270 \\\\ & & 2 & 12 & -270 \\\\ \\hline & 1 & 6 & -135 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ divides $270$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 4x^2 - 147x + 270 = (x - 2)(x^2 + 6x - 135)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $1$, $6$ and $-135$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 6x - 135 = (x - 9)(x + 15)$",
                  "reason": "Factoring a quadratic: two numbers with sum $6$ and product $-135$ are $-9$ and $15$."
                },
                {
                  "step": "$(x - 2)(x - 9)(x + 15) \\ge 0$",
                  "reason": "Substitution: by lines 5 and 6 the brackets take the place of the left side."
                },
                {
                  "step": "On $x < -15$, $-15 < x < 2$, $2 < x < 9$ and $x > 9$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $x - r$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-15$, $2$ and $9$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $-15 \\le x \\le 2$ or $x \\ge 9$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^3 + 25x^2 + 200x + 500 \\ge 0$.",
            "lines": [
              {
                "step": "Solve $x^3 + 25x^2 + 200x + 500 \\ge 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every nonzero integer root of $x^3 + 25x^2 + 200x + 500$ divides $500$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $500$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -5 & 1 & 25 & 200 & 500 \\\\ & & -5 & -100 & -500 \\\\ \\hline & 1 & 20 & 100 & 0 \\end{array}$",
                "reason": "Synthetic division: $-5$ divides $500$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$x^3 + 25x^2 + 200x + 500 = (x + 5)(x^2 + 20x + 100)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 5$ is a factor, and the bottom numbers before it, $1$, $20$ and $100$, are the coefficients of the quotient."
              },
              {
                "step": "$x^2 + 20x + 100 = (x + 10)(x + 10)$",
                "reason": "Factoring a quadratic: two numbers with sum $20$ and product $100$ are $10$ and $10$."
              },
              {
                "step": "$(x + 5)(x + 10)(x + 10) \\ge 0$",
                "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
              },
              {
                "step": "$(x + 10)^2(x + 5) \\ge 0$",
                "reason": "Product law: the bracket $x + 10$, there twice, is written as its square."
              },
              {
                "step": "The square $(x + 10)^2$ is at least $0$, and is $0$ only at $x = -10$.",
                "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
              },
              {
                "step": "For $x \\ne -10$ the product has the sign of $x + 5$: negative for $x < -5$ and positive for $x > -5$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero."
              },
              {
                "step": "The product is $0$ at $-10$ and $-5$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
              },
              {
                "step": "The solutions are the numbers with $x = -10$ or $x \\ge -5$.",
                "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^3 + 16x^2 + 45x - 162 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -9 or -9 < x < 2",
              "lines": [
                {
                  "step": "Solve $x^3 + 16x^2 + 45x - 162 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 16x^2 + 45x - 162$ divides $-162$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-162$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & 1 & 16 & 45 & -162 \\\\ & & 2 & 36 & 162 \\\\ \\hline & 1 & 18 & 81 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ divides $-162$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 16x^2 + 45x - 162 = (x - 2)(x^2 + 18x + 81)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $1$, $18$ and $81$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 18x + 81 = (x + 9)(x + 9)$",
                  "reason": "Factoring a quadratic: two numbers with sum $18$ and product $81$ are $9$ and $9$."
                },
                {
                  "step": "$(x - 2)(x + 9)(x + 9) < 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "$(x + 9)^2(x - 2) < 0$",
                  "reason": "Product law: the bracket $x + 9$, there twice, is written as its square."
                },
                {
                  "step": "The square $(x + 9)^2$ is at least $0$, and is $0$ only at $x = -9$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne -9$ the product has the sign of $x - 2$: negative for $x < 2$ and positive for $x > 2$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero."
                },
                {
                  "step": "The product is $0$ at $-9$ and $2$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -9$ or $-9 < x < 2$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 + 6x^2 - 63x + 108 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -12 or x = 3",
              "lines": [
                {
                  "step": "Solve $x^3 + 6x^2 - 63x + 108 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 6x^2 - 63x + 108$ divides $108$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $108$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 3 & 1 & 6 & -63 & 108 \\\\ & & 3 & 27 & -108 \\\\ \\hline & 1 & 9 & -36 & 0 \\end{array}$",
                  "reason": "Synthetic division: $3$ divides $108$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 6x^2 - 63x + 108 = (x - 3)(x^2 + 9x - 36)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 3$ is a factor, and the bottom numbers before it, $1$, $9$ and $-36$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 + 9x - 36 = (x - 3)(x + 12)$",
                  "reason": "Factoring a quadratic: two numbers with sum $9$ and product $-36$ are $-3$ and $12$."
                },
                {
                  "step": "$(x - 3)(x - 3)(x + 12) \\le 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "$(x - 3)^2(x + 12) \\le 0$",
                  "reason": "Product law: the bracket $x - 3$, there twice, is written as its square."
                },
                {
                  "step": "The square $(x - 3)^2$ is at least $0$, and is $0$ only at $x = 3$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne 3$ the product has the sign of $x + 12$: negative for $x < -12$ and positive for $x > -12$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero."
                },
                {
                  "step": "The product is $0$ at $-12$ and $3$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x \\le -12$ or $x = 3$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 - 9x^2 - 81x - 135 \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x = -3 or x >= 15",
              "lines": [
                {
                  "step": "Solve $x^3 - 9x^2 - 81x - 135 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 9x^2 - 81x - 135$ divides $-135$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-135$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -3 & 1 & -9 & -81 & -135 \\\\ & & -3 & 36 & 135 \\\\ \\hline & 1 & -12 & -45 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-3$ divides $-135$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 9x^2 - 81x - 135 = (x + 3)(x^2 - 12x - 45)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 3$ is a factor, and the bottom numbers before it, $1$, $-12$ and $-45$, are the coefficients of the quotient."
                },
                {
                  "step": "$x^2 - 12x - 45 = (x + 3)(x - 15)$",
                  "reason": "Factoring a quadratic: two numbers with sum $-12$ and product $-45$ are $3$ and $-15$."
                },
                {
                  "step": "$(x + 3)(x + 3)(x - 15) \\ge 0$",
                  "reason": "Substitution: by lines 4 and 5 the brackets take the place of the left side."
                },
                {
                  "step": "$(x + 3)^2(x - 15) \\ge 0$",
                  "reason": "Product law: the bracket $x + 3$, there twice, is written as its square."
                },
                {
                  "step": "The square $(x + 3)^2$ is at least $0$, and is $0$ only at $x = -3$.",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$."
                },
                {
                  "step": "For $x \\ne -3$ the product has the sign of $x - 15$: negative for $x < 15$ and positive for $x > 15$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the square is positive away from its zero."
                },
                {
                  "step": "The product is $0$ at $-3$ and $15$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x = -3$ or $x \\ge 15$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product has the sign asked for, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^3 + 3x^2 - 58x + 330 < 0$.",
            "lines": [
              {
                "step": "Solve $x^3 + 3x^2 - 58x + 330 < 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Every nonzero integer root of $x^3 + 3x^2 - 58x + 330$ divides $330$.",
                "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $330$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -11 & 1 & 3 & -58 & 330 \\\\ & & -11 & 88 & -330 \\\\ \\hline & 1 & -8 & 30 & 0 \\end{array}$",
                "reason": "Synthetic division: $-11$ divides $330$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$x^3 + 3x^2 - 58x + 330 = (x + 11)(x^2 - 8x + 30)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 11$ is a factor, and the bottom numbers before it, $1$, $-8$ and $30$, are the coefficients of the quotient."
              },
              {
                "step": "The discriminant of $x^2 - 8x + 30$ is $(-8)^2 - 4 \\cdot 30 = -56$.",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
              },
              {
                "step": "The quadratic $x^2 - 8x + 30$ is positive for every real number $x$.",
                "reason": "A quadratic with no real root keeps one sign: its value at $x = 0$ is $30$, which is positive."
              },
              {
                "step": "$(x + 11)(x^2 - 8x + 30) < 0$",
                "reason": "Substitution: by line 4 the brackets take the place of the left side."
              },
              {
                "step": "$x + 11 < 0$",
                "reason": "Multiplying by a positive number: dividing both sides by the positive quadratic keeps the sign as it is."
              },
              {
                "step": "The solutions are the numbers with $x < -11$.",
                "reason": "Adding the same number, from arithmetic: taking $11$ from both sides leaves $x$ alone."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^3 + 7x^2 + 36x + 72 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -3",
              "lines": [
                {
                  "step": "Solve $x^3 + 7x^2 + 36x + 72 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 + 7x^2 + 36x + 72$ divides $72$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $72$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -3 & 1 & 7 & 36 & 72 \\\\ & & -3 & -12 & -72 \\\\ \\hline & 1 & 4 & 24 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-3$ divides $72$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 + 7x^2 + 36x + 72 = (x + 3)(x^2 + 4x + 24)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 3$ is a factor, and the bottom numbers before it, $1$, $4$ and $24$, are the coefficients of the quotient."
                },
                {
                  "step": "The discriminant of $x^2 + 4x + 24$ is $4^2 - 4 \\cdot 24 = -80$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "The quadratic $x^2 + 4x + 24$ is positive for every real number $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at $x = 0$ is $24$, which is positive."
                },
                {
                  "step": "$(x + 3)(x^2 + 4x + 24) < 0$",
                  "reason": "Substitution: by line 4 the brackets take the place of the left side."
                },
                {
                  "step": "$x + 3 < 0$",
                  "reason": "Multiplying by a positive number: dividing both sides by the positive quadratic keeps the sign as it is."
                },
                {
                  "step": "The solutions are the numbers with $x < -3$.",
                  "reason": "Adding the same number, from arithmetic: taking $3$ from both sides leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 - 3x^2 + 19x + 58 \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= -2",
              "lines": [
                {
                  "step": "Solve $x^3 - 3x^2 + 19x + 58 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 3x^2 + 19x + 58$ divides $58$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $58$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 1 & -3 & 19 & 58 \\\\ & & -2 & 10 & -58 \\\\ \\hline & 1 & -5 & 29 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-2$ divides $58$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 3x^2 + 19x + 58 = (x + 2)(x^2 - 5x + 29)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $1$, $-5$ and $29$, are the coefficients of the quotient."
                },
                {
                  "step": "The discriminant of $x^2 - 5x + 29$ is $(-5)^2 - 4 \\cdot 29 = -91$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "The quadratic $x^2 - 5x + 29$ is positive for every real number $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at $x = 0$ is $29$, which is positive."
                },
                {
                  "step": "$(x + 2)(x^2 - 5x + 29) \\ge 0$",
                  "reason": "Substitution: by line 4 the brackets take the place of the left side."
                },
                {
                  "step": "$x + 2 \\ge 0$",
                  "reason": "Multiplying by a positive number: dividing both sides by the positive quadratic keeps the sign as it is."
                },
                {
                  "step": "The solutions are the numbers with $x \\ge -2$.",
                  "reason": "Adding the same number, from arithmetic: taking $2$ from both sides leaves $x$ alone."
                }
              ]
            },
            {
              "prompt": "Solve $x^3 - 5x^2 - 68x - 192 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 12",
              "lines": [
                {
                  "step": "Solve $x^3 - 5x^2 - 68x - 192 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Every nonzero integer root of $x^3 - 5x^2 - 68x - 192$ divides $-192$.",
                  "reason": "Integer Root Theorem: a nonzero integer root of a polynomial with integer coefficients divides its constant term, here $-192$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 12 & 1 & -5 & -68 & -192 \\\\ & & 12 & 84 & 192 \\\\ \\hline & 1 & 7 & 16 & 0 \\end{array}$",
                  "reason": "Synthetic division: $12$ divides $-192$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$x^3 - 5x^2 - 68x - 192 = (x - 12)(x^2 + 7x + 16)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 12$ is a factor, and the bottom numbers before it, $1$, $7$ and $16$, are the coefficients of the quotient."
                },
                {
                  "step": "The discriminant of $x^2 + 7x + 16$ is $7^2 - 4 \\cdot 16 = -15$.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "The quadratic $x^2 + 7x + 16$ is positive for every real number $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at $x = 0$ is $16$, which is positive."
                },
                {
                  "step": "$(x - 12)(x^2 + 7x + 16) \\le 0$",
                  "reason": "Substitution: by line 4 the brackets take the place of the left side."
                },
                {
                  "step": "$x - 12 \\le 0$",
                  "reason": "Multiplying by a positive number: dividing both sides by the positive quadratic keeps the sign as it is."
                },
                {
                  "step": "The solutions are the numbers with $x \\le 12$.",
                  "reason": "Adding the same number, from arithmetic: adding $12$ to both sides leaves $x$ alone."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t197-k4",
      "forms": [
        {
          "example": {
            "problem": "Find an integer $n$ such that $f(x) = -2x^3 + 6x^2 - 4x + 4$ has a root between $n$ and $n + 1$.",
            "lines": [
              {
                "step": "Find an integer $n$ such that $f(x) = -2x^3 + 6x^2 - 4x + 4$ has a root between $n$ and $n + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(2) = -2 \\cdot 2^3 + 6 \\cdot 2^2 - 4 \\cdot 2 + 4$",
                "reason": "Function notation: $2$ goes where $x$ stands."
              },
              {
                "step": "$f(2) = -16 + 24 - 8 + 4$",
                "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
              },
              {
                "step": "$f(2) = 4$",
                "reason": "Order of operations: the sums and differences are worked out from left to right."
              },
              {
                "step": "$f(3) = -2 \\cdot 3^3 + 6 \\cdot 3^2 - 4 \\cdot 3 + 4$",
                "reason": "Function notation: $3$ goes where $x$ stands."
              },
              {
                "step": "$f(3) = -54 + 54 - 12 + 4$",
                "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
              },
              {
                "step": "$f(3) = -8$",
                "reason": "Order of operations: the sums and differences are worked out from left to right."
              },
              {
                "step": "So $f(x)$ has a root between $2$ and $3$.",
                "reason": "Sign change: $f(2) = 4$ is positive and $f(3) = -8$ is negative, so the polynomial has a root between $2$ and $3$."
              },
              {
                "step": "$n = 2$",
                "reason": "Answering the question asked: the root lies between $n$ and $n + 1$ for $n = 2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $n$ such that $f(x) = -2x^3 - 9x^2 + 3x - 7$ has a root between $n$ and $n + 1$.",
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Find an integer $n$ such that $f(x) = -2x^3 - 9x^2 + 3x - 7$ has a root between $n$ and $n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-5) = -2(-5)^3 - 9(-5)^2 + 3(-5) - 7$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-5) = 250 - 225 - 15 - 7$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(-5) = 3$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "$f(-4) = -2(-4)^3 - 9(-4)^2 + 3(-4) - 7$",
                  "reason": "Function notation: $-4$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-4) = 128 - 144 - 12 - 7$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(-4) = -35$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $-5$ and $-4$.",
                  "reason": "Sign change: $f(-5) = 3$ is positive and $f(-4) = -35$ is negative, so the polynomial has a root between $-5$ and $-4$."
                },
                {
                  "step": "$n = -5$",
                  "reason": "Answering the question asked: the root lies between $n$ and $n + 1$ for $n = -5$."
                }
              ]
            },
            {
              "prompt": "Find an integer $n$ such that $f(x) = -3x^3 + 3x + 2$ has a root between $n$ and $n + 1$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find an integer $n$ such that $f(x) = -3x^3 + 3x + 2$ has a root between $n$ and $n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(1) = -3 \\cdot 1^3 + 3 \\cdot 1 + 2$",
                  "reason": "Function notation: $1$ goes where $x$ stands."
                },
                {
                  "step": "$f(1) = -3 + 3 + 2$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(1) = 2$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "$f(2) = -3 \\cdot 2^3 + 3 \\cdot 2 + 2$",
                  "reason": "Function notation: $2$ goes where $x$ stands."
                },
                {
                  "step": "$f(2) = -24 + 6 + 2$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(2) = -16$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $1$ and $2$.",
                  "reason": "Sign change: $f(1) = 2$ is positive and $f(2) = -16$ is negative, so the polynomial has a root between $1$ and $2$."
                },
                {
                  "step": "$n = 1$",
                  "reason": "Answering the question asked: the root lies between $n$ and $n + 1$ for $n = 1$."
                }
              ]
            },
            {
              "prompt": "Find an integer $n$ such that $f(x) = -3x^3 - 3x^2 + 6x - 3$ has a root between $n$ and $n + 1$.",
              "form": "Answer as an integer.",
              "answer": "-3",
              "lines": [
                {
                  "step": "Find an integer $n$ such that $f(x) = -3x^3 - 3x^2 + 6x - 3$ has a root between $n$ and $n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(-3) = -3(-3)^3 - 3(-3)^2 + 6(-3) - 3$",
                  "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-3) = 81 - 27 - 18 - 3$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(-3) = 33$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "$f(-2) = -3(-2)^3 - 3(-2)^2 + 6(-2) - 3$",
                  "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$f(-2) = 24 - 12 - 12 - 3$",
                  "reason": "Order of operations: each power is worked out before its product, with the sign rules for powers and products."
                },
                {
                  "step": "$f(-2) = -3$",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                },
                {
                  "step": "So $f(x)$ has a root between $-3$ and $-2$.",
                  "reason": "Sign change: $f(-3) = 33$ is positive and $f(-2) = -3$ is negative, so the polynomial has a root between $-3$ and $-2$."
                },
                {
                  "step": "$n = -3$",
                  "reason": "Answering the question asked: the root lies between $n$ and $n + 1$ for $n = -3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t197-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 3x^2 - 2$ has a root between $n$ and $n + 1$, and write that line right.",
            "given": [
              "$f(3) = 3^3 - 3 \\cdot 3^2 - 2 = 27 - 27 - 2$",
              "$27 - 27 - 2 = -2$",
              "$f(4) = 4^3 - 3 \\cdot 4^2 - 2 = 64 + 48 - 2$",
              "$64 + 48 - 2 = 110$",
              "The values $f(3) = -2$ and $f(4) = 110$ have different signs, so $f(x)$ has a root between $3$ and $4$.",
              "$n = 3$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for an integer $n$ such that $f(x) = x^3 - 3x^2 - 2$ has a root between $n$ and $n + 1$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 gives the term $-3 \\cdot 4^2$ the value $48$, but its value is $-48$.",
                "reason": "A sign lost: a power of a positive number is positive, and the sign of a product follows the signs of its factors."
              },
              {
                "step": "The lines above line 3 are right, and each later line is right or follows from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 3."
              },
              {
                "step": "Line 3 written right is $f(4) = 4^3 - 3 \\cdot 4^2 - 2 = 64 - 48 - 2$.",
                "reason": "Signs of products: each term keeps the sign the signs of its factors give it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 9x^2 - 8$ has a root between $n$ and $n + 1$, and write that line right.",
              "given": [
                "$f(-4) = -3(-4)^3 - 9(-4)^2 - 8 = 192 - 144 - 8$",
                "$192 - 144 - 8 = 56$",
                "$f(-3) = -3(-3)^3 - 9(-3)^2 - 8 = 81 - 81 - 8$",
                "$81 - 81 - 8 = -8$",
                "The values $f(-4) = 56$ and $f(-3) = -8$ have different signs, so $f(x)$ has a root between $-4$ and $-3$.",
                "$n = -4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 192-144-8 = 40",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -3x^3 - 9x^2 - 8$ has a root between $n$ and $n + 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds the terms of $f(-4)$ with the sign of $-8$ lost: $192 - 144 - 8$ is $40$, not $56$.",
                  "reason": "A sign lost: each term keeps its own sign when the terms are added from left to right, and $-8$ is negative."
                },
                {
                  "step": "The lines above line 2 are right, and each later line is right or follows from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 2."
                },
                {
                  "step": "Line 2 written right is $192 - 144 - 8 = 40$.",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 + 2x^2 - 3x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
              "given": [
                "$f(1) = 3 \\cdot 1^3 + 2 \\cdot 1^2 - 3 \\cdot 1 - 5 = 3 + 2 - 3 - 5$",
                "$3 + 2 - 3 - 5 = -3$",
                "$f(2) = 3 \\cdot 2^3 + 2 \\cdot 2^2 - 3 \\cdot 2 - 5 = 24 + 8 - 6 - 5$",
                "$24 + 8 - 6 - 5 = 33$",
                "The values $f(1) = -3$ and $f(2) = 33$ have different signs, so $f(x)$ has a root between $1$ and $2$.",
                "$n = 1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 24+8-6-5 = 21",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for an integer $n$ such that $f(x) = 3x^3 + 2x^2 - 3x - 5$ has a root between $n$ and $n + 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 adds the terms of $f(2)$ with the sign of $-6$ lost: $24 + 8 - 6 - 5$ is $21$, not $33$.",
                  "reason": "A sign lost: each term keeps its own sign when the terms are added from left to right, and $-6$ is negative."
                },
                {
                  "step": "The lines above line 4 are right, and each later line is right or follows from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 4."
                },
                {
                  "step": "Line 4 written right is $24 + 8 - 6 - 5 = 21$.",
                  "reason": "Order of operations: the sums and differences are worked out from left to right."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 + 6x^2 + 7x + 7$ has a root between $n$ and $n + 1$, and write that line right.",
              "given": [
                "$f(4) = -2 \\cdot 4^3 + 6 \\cdot 4^2 + 7 \\cdot 4 + 7 = 128 + 96 + 28 + 7$",
                "$128 + 96 + 28 + 7 = 259$",
                "$f(5) = -2 \\cdot 5^3 + 6 \\cdot 5^2 + 7 \\cdot 5 + 7 = -250 + 150 + 35 + 7$",
                "$-250 + 150 + 35 + 7 = -58$",
                "The values $f(4) = 259$ and $f(5) = -58$ have different signs, so $f(x)$ has a root between $4$ and $5$.",
                "$n = 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(4) = -2*4^3+6*4^2+7*4+7 = -128+96+28+7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for an integer $n$ such that $f(x) = -2x^3 + 6x^2 + 7x + 7$ has a root between $n$ and $n + 1$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 gives the term $-2 \\cdot 4^3$ the value $128$, but its value is $-128$.",
                  "reason": "A sign lost: a power of a positive number is positive, and the sign of a product follows the signs of its factors."
                },
                {
                  "step": "Line 1 is the first line, and each later line is right or follows from line 1 as it is written, so line 1 is the first wrong line.",
                  "reason": "Transitive property: the later lines take their values from the lines before them, and so carry the fault of line 1."
                },
                {
                  "step": "Line 1 written right is $f(4) = -2 \\cdot 4^3 + 6 \\cdot 4^2 + 7 \\cdot 4 + 7 = -128 + 96 + 28 + 7$.",
                  "reason": "Signs of products: each term keeps the sign the signs of its factors give it."
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
      "id": "t197-p1",
      "method": "direct proof",
      "statement": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial whose coefficients are integers, and let $k$ be a nonzero integer with $f(k) = 0$. Then $k$ divides $a_0$.",
      "idea": "Put $x = k$ in $f(x) = 0$, move every term but $a_0$ to the other side, and take out the factor $k$ that each of those terms holds.",
      "lines": [
        {
          "line": "$a_nk^n + a_{n-1}k^{n-1} + \\dots + a_1k + a_0 = 0$",
          "reason": "Function notation: $f(k)$ is $f(x)$ with $k$ where $x$ stands, and $f(k) = 0$ by the hypothesis."
        },
        {
          "line": "$a_0 = -a_nk^n - a_{n-1}k^{n-1} - \\dots - a_1k$",
          "reason": "Adding the same number to both sides: every term but $a_0$ is taken from both sides."
        },
        {
          "line": "$a_0 = k(-a_nk^{n-1} - a_{n-1}k^{n-2} - \\dots - a_1)$",
          "reason": "Taking out a common factor: each term on the right holds the factor $k$."
        },
        {
          "line": "The number $-a_nk^{n-1} - a_{n-1}k^{n-2} - \\dots - a_1$ is an integer.",
          "reason": "The multiplication and addition of integers, from arithmetic: the coefficients and $k$ are integers, and sums and products of integers are integers."
        },
        {
          "line": "So $k$ divides $a_0$.",
          "reason": "The definition of divides, from arithmetic: $k$ is a nonzero integer, and by lines 3 and 4 the number $a_0$ is $k$ times an integer."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t197-s1",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = a_nx^n + \\dots + a_1x + a_0$ has integer coefficients, $k$ is an integer with $f(k) = 0$, and $d$ is a nonzero integer that divides each term $a_jk^j$ but one, the term $a_ik^i$, then $d$ divides $a_ik^i$ as well. Facts it may use: function notation, the laws of addition, the definition of divides and the divisibility of a sum, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "$a_nk^n + \\dots + a_1k + a_0 = 0$",
            "reason": "Function notation: $f(k)$ is $f(x)$ with $k$ where $x$ stands, and $f(k) = 0$ by the hypothesis."
          },
          {
            "line": "The term $a_ik^i$ plus the sum of the other terms $a_jk^j$ is $0$.",
            "reason": "The associative and commutative laws of addition, from arithmetic: the terms of line 1 may be added in every order."
          },
          {
            "line": "The number $d$ divides the sum of the other terms.",
            "reason": "The divisibility of a sum, from arithmetic: by the hypothesis $d$ divides each of the other terms, so it divides their sum, one term at a time."
          },
          {
            "line": "The number $d$ divides $0$.",
            "reason": "The definition of divides, from arithmetic: $0 = 0 \\cdot d$."
          },
          {
            "line": "So $d$ divides $a_ik^i$.",
            "reason": "The divisibility of a sum, from arithmetic: in line 2 the number $d$ divides the total $0$ and the sum of the other terms, so it divides the third number, $a_ik^i$."
          }
        ]
      }
    },
    {
      "id": "t197-s2",
      "method": "direct proof",
      "statement": "Prove that if $f(x)$ is a polynomial with integer coefficients and constant term $a_0$, $k$ is a nonzero integer root of $f(x)$, and $k$ is also a root of the quotient $g(x)$ when $f(x)$ is divided by $x - k$, then $k^2$ divides $a_0$. Facts it may use: Factor Theorem, synthetic division, substituting a value, constant term, substitution, Integer Root Theorem, the commutative and associative laws of multiplication and the definition of divides, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "$f(x) = (x - k)g(x)$",
            "reason": "Factor Theorem: $f(k) = 0$, so dividing $f(x)$ by $x - k$ leaves the remainder $0$, and $f(x)$ is $x - k$ times the quotient $g(x)$."
          },
          {
            "line": "The coefficients of $g(x)$ are integers.",
            "reason": "Synthetic division: each bottom number is a top number plus $k$ times the bottom number before it, so with integer coefficients and an integer $k$ each bottom number is an integer."
          },
          {
            "line": "$f(0) = (0 - k)g(0)$",
            "reason": "Substituting a value: $0$ goes in place of $x$ in line 1."
          },
          {
            "line": "$f(0) = a_0$",
            "reason": "Constant term: each term with a power of $x$ is $0$ at $x = 0$, so $f(0)$ is the constant term."
          },
          {
            "line": "$a_0 = -kg(0)$",
            "reason": "Substitution: line 4 takes the place of $f(0)$ in line 3, and $0 - k$ is $-k$."
          },
          {
            "line": "The number $k$ divides $g(0)$.",
            "reason": "Integer Root Theorem: $k$ is a nonzero integer root of $g(x)$, whose coefficients are integers by line 2 and whose constant term is $g(0)$."
          },
          {
            "line": "There is an integer $m$ with $g(0) = km$.",
            "reason": "The definition of divides, from arithmetic: line 6."
          },
          {
            "line": "$a_0 = -k(km)$",
            "reason": "Substitution: line 7 takes the place of $g(0)$ in line 5."
          },
          {
            "line": "$a_0 = k^2(-m)$",
            "reason": "The commutative and associative laws of multiplication, from arithmetic: the two factors $k$ are put together."
          },
          {
            "line": "So $k^2$ divides $a_0$.",
            "reason": "The definition of divides, from arithmetic: $k^2$ is a nonzero integer and $-m$ is an integer."
          }
        ]
      }
    },
    {
      "id": "t197-s3",
      "method": "direct proof",
      "statement": "Prove that for a whole number $m$ with $1 \\le m \\le n$, the power $x^m$ is a factor of $f(x) = a_nx^n + \\dots + a_1x + a_0$ exactly when $a_0, a_1, \\dots, a_{m-1}$ are all $0$. Facts it may use: factoring, each term of a product comes from one term of each factor, product law, collecting like terms, equal for all $x$ means equal coefficients, the assumptions on addition, taking out a common factor.",
      "check": {
        "proof": [
          {
            "line": "Suppose first that $f(x) = x^mg(x)$ for a polynomial $g(x) = b_kx^k + \\dots + b_1x + b_0$.",
            "reason": "Factoring: $x^m$ is a factor of $f(x)$ when $f(x)$ is $x^m$ times a polynomial, and this direction supposes that it is."
          },
          {
            "line": "Each term of $x^mg(x)$ is $x^m$ times a term $b_jx^j$ of $g(x)$.",
            "reason": "Each term of a product comes from one term of each factor: $x^m$ is the one term of the first factor."
          },
          {
            "line": "The product $x^m \\cdot b_jx^j$ is $b_jx^{m + j}$, a power of $x$ no lower than $x^m$.",
            "reason": "Product law: $x^mx^j = x^{m + j}$, and $m + j \\ge m$ since $j \\ge 0$."
          },
          {
            "line": "So $x^mg(x)$ has no term in $x^0, x^1, \\dots, x^{m-1}$.",
            "reason": "Collecting like terms: by line 3 every term of the product has the power $x^m$ or a higher one."
          },
          {
            "line": "So $a_0 = a_1 = \\dots = a_{m-1} = 0$.",
            "reason": "Equal for all $x$ means equal coefficients: $f(x)$ and $x^mg(x)$ are equal for all $x$, and by line 4 the second has the coefficient $0$ at each power below $x^m$."
          },
          {
            "line": "Suppose next that $a_0 = a_1 = \\dots = a_{m-1} = 0$, so that $f(x) = a_nx^n + \\dots + a_mx^m$.",
            "reason": "Assumptions on addition, from arithmetic: adding the terms $0$ leaves the sum as it is."
          },
          {
            "line": "$f(x) = x^m(a_nx^{n-m} + \\dots + a_{m+1}x + a_m)$",
            "reason": "Taking out a common factor: each term of line 6 holds the factor $x^m$, since $x^m \\cdot x^{k-m} = x^k$ by the product law for $k \\ge m$."
          },
          {
            "line": "So $x^m$ is a factor of $f(x)$.",
            "reason": "Factoring: line 7 writes $f(x)$ as $x^m$ times a polynomial."
          }
        ]
      }
    },
    {
      "id": "t197-s4",
      "method": "direct proof",
      "statement": "Prove that if $f(x)$ is a polynomial with real coefficients, $a < b < c$ are real numbers, and $f(b)$ has the sign opposite to the sign of $f(a)$ and to the sign of $f(c)$, then $f(x)$ has at least two different roots between $a$ and $c$. Facts it may use: Sign change, transitivity, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "There is a root $r$ of $f(x)$ with $a < r < b$.",
            "reason": "Sign change: $f(a)$ and $f(b)$ have different signs by the hypothesis."
          },
          {
            "line": "There is a root $s$ of $f(x)$ with $b < s < c$.",
            "reason": "Sign change: $f(b)$ and $f(c)$ have different signs by the hypothesis."
          },
          {
            "line": "$r < s$",
            "reason": "Transitivity, from arithmetic: $r < b$ by line 1 and $b < s$ by line 2."
          },
          {
            "line": "$r < c$",
            "reason": "Transitivity, from arithmetic: $r < b$ by line 1 and $b < c$ by the hypothesis."
          },
          {
            "line": "$a < s$",
            "reason": "Transitivity, from arithmetic: $a < b$ by the hypothesis and $b < s$ by line 2."
          },
          {
            "line": "So $r$ and $s$ are two different roots, each between $a$ and $c$.",
            "reason": "Transitivity, from arithmetic: lines 1 to 5 give $a < r < c$, $a < s < c$, and $r \\ne s$ since $r < s$."
          }
        ]
      }
    },
    {
      "id": "t197-s5",
      "method": "direct proof",
      "statement": "Prove that if $f(x)$ is a polynomial with integer coefficients and $a$ and $b$ are different integers, then $a - b$ divides $f(a) - f(b)$. Facts it may use: function notation, Factor Theorem, synthetic division, substituting a value, the multiplication and addition of integers and the definition of divides, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Let $g(x) = f(x) - f(b)$.",
            "reason": "Function notation: $g$ is named by its rule."
          },
          {
            "line": "The coefficients of $g(x)$ are integers.",
            "reason": "The multiplication and addition of integers, from arithmetic: $f(b)$ is a sum of products of integers, and $g(x)$ is $f(x)$ with its constant term less $f(b)$."
          },
          {
            "line": "$g(b) = 0$",
            "reason": "Function notation: $g(b) = f(b) - f(b)$."
          },
          {
            "line": "The quotient $q(x)$ when $g(x)$ is divided by $x - b$ gives $g(x) = (x - b)q(x)$.",
            "reason": "Factor Theorem: $g(b) = 0$, so $x - b$ is a factor of $g(x)$, and the remainder is $0$."
          },
          {
            "line": "The coefficients of $q(x)$ are integers.",
            "reason": "Synthetic division: each bottom number is a top number plus $b$ times the bottom number before it, so with integer coefficients and an integer $b$ each bottom number is an integer."
          },
          {
            "line": "$g(a) = (a - b)q(a)$",
            "reason": "Substituting a value: $a$ goes in place of $x$ in line 4."
          },
          {
            "line": "$f(a) - f(b) = (a - b)q(a)$",
            "reason": "Function notation: $g(a) = f(a) - f(b)$ by line 1."
          },
          {
            "line": "The number $q(a)$ is an integer.",
            "reason": "The multiplication and addition of integers, from arithmetic: $a$ and the coefficients of $q(x)$ are integers."
          },
          {
            "line": "So $a - b$ divides $f(a) - f(b)$.",
            "reason": "The definition of divides, from arithmetic: $a - b$ is a nonzero integer, since $a$ and $b$ are different, and by lines 7 and 8 the number $f(a) - f(b)$ is $a - b$ times an integer."
          }
        ]
      }
    }
  ]
}
