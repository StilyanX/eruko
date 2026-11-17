export default {
  "number": 141,
  "title": "Factoring xy + ax + by by adding a constant",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "348-356"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find every positive whole number $m$ for which $mn + 7m + 12n = 258$ for some positive whole number $n$.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{6, 7, 26}",
    "solution": [
      "Find every positive whole number $m$ for which $mn + 7m + 12n = 258$ for some positive whole number $n$.",
      "Adding $7 \\cdot 12 = 84$ to both sides gives $mn + 7m + 12n + 84 = 258 + 84 = 342$.",
      "$(m + 12)(n + 7) = 342$",
      "The numbers $m + 12$ and $n + 7$ are whole numbers above $12$ and $7$ with product $342$.",
      "The factor pairs of $342$ with first factor above $12$ and second factor above $7$ are $18 \\cdot 19$, $19 \\cdot 18$, $38 \\cdot 9$.",
      "Taking $12$ from the first factor and $7$ from the second gives the pairs $(m, n)$: $(6, 12)$, $(7, 11)$ and $(26, 2)$.",
      "The values of $m$ are $6$, $7$ and $26$."
    ]
  },
  "ideas": [
    {
      "name": "Factoring by adding a constant",
      "concrete": "Multiplying out $(x + 4)(y + 7)$ gives $xy + 7x + 4y + 28$. So the sum $xy + 7x + 4y$ is not a product as it stands, but adding $28 = 7 \\cdot 4$ to it makes it the product $(x + 4)(y + 7)$.",
      "general": "For all numbers $x$, $y$, $a$ and $b$, $xy + ax + by + ab = (x + b)(y + a)$. A sum $xy + ax + by$ becomes a product of two brackets once the product $ab$ of the two coefficients is added, and in an equation $ab$ is added to both sides. This is **Factoring by adding a constant**. Where $xy$ has a coefficient, a common factor is first taken out of the term in $xy$ and the term in $x$, and the number added is the one that leaves the same bracket in the other two terms."
    }
  ],
  "kinds": [
    {
      "id": "t141-k1",
      "forms": [
        {
          "example": {
            "problem": "Find every positive whole number $m$ for which $mn + 14m + 4n = 295$ for some positive whole number $n$.",
            "lines": [
              {
                "step": "Find every positive whole number $m$ for which $mn + 14m + 4n = 295$ for some positive whole number $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Adding $14 \\cdot 4 = 56$ to both sides gives $mn + 14m + 4n + 56 = 295 + 56 = 351$.",
                "reason": "Adding the same number to both sides: $56$ is the coefficient $14$ of $m$ times the coefficient $4$ of $n$, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(m + 4)(n + 14) = 351$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 14$ and $b = 4$."
              },
              {
                "step": "The numbers $m + 4$ and $n + 14$ are whole numbers above $4$ and $14$ with product $351$.",
                "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 4$ is above $4$ and $n + 14$ is above $14$."
              },
              {
                "step": "The factor pairs of $351$ with first factor above $4$ and second factor above $14$ are $9 \\cdot 39$, $13 \\cdot 27$.",
                "reason": "Factor pairs of the constant: each divisor of $351$ above $4$ is taken in turn, and kept when $351$ divided by it is above $14$."
              },
              {
                "step": "Taking $4$ from the first factor and $14$ from the second gives the pairs $(m, n)$: $(5, 25)$ and $(9, 13)$.",
                "reason": "Adding the same number to both sides: $-4$ is added to both sides of $m + 4 = d$, and $-14$ to both sides of $n + 14 = \\dfrac{351}{d}$."
              },
              {
                "step": "The values of $m$ are $5$ and $9$.",
                "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every positive whole number $m$ for which $mn + 5m + 12n = 140$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{8, 13}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $mn + 5m + 12n = 140$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $5 \\cdot 12 = 60$ to both sides gives $mn + 5m + 12n + 60 = 140 + 60 = 200$.",
                  "reason": "Adding the same number to both sides: $60$ is the coefficient $5$ of $m$ times the coefficient $12$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 12)(n + 5) = 200$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 5$ and $b = 12$."
                },
                {
                  "step": "The numbers $m + 12$ and $n + 5$ are whole numbers above $12$ and $5$ with product $200$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 12$ is above $12$ and $n + 5$ is above $5$."
                },
                {
                  "step": "The factor pairs of $200$ with first factor above $12$ and second factor above $5$ are $20 \\cdot 10$, $25 \\cdot 8$.",
                  "reason": "Factor pairs of the constant: each divisor of $200$ above $12$ is taken in turn, and kept when $200$ divided by it is above $5$."
                },
                {
                  "step": "Taking $12$ from the first factor and $5$ from the second gives the pairs $(m, n)$: $(8, 5)$ and $(13, 3)$.",
                  "reason": "Adding the same number to both sides: $-12$ is added to both sides of $m + 12 = d$, and $-5$ to both sides of $n + 5 = \\dfrac{200}{d}$."
                },
                {
                  "step": "The values of $m$ are $8$ and $13$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $mn + 6m + 13n = 279$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, 8, 38}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $mn + 6m + 13n = 279$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $6 \\cdot 13 = 78$ to both sides gives $mn + 6m + 13n + 78 = 279 + 78 = 357$.",
                  "reason": "Adding the same number to both sides: $78$ is the coefficient $6$ of $m$ times the coefficient $13$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 13)(n + 6) = 357$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 6$ and $b = 13$."
                },
                {
                  "step": "The numbers $m + 13$ and $n + 6$ are whole numbers above $13$ and $6$ with product $357$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 13$ is above $13$ and $n + 6$ is above $6$."
                },
                {
                  "step": "The factor pairs of $357$ with first factor above $13$ and second factor above $6$ are $17 \\cdot 21$, $21 \\cdot 17$, $51 \\cdot 7$.",
                  "reason": "Factor pairs of the constant: each divisor of $357$ above $13$ is taken in turn, and kept when $357$ divided by it is above $6$."
                },
                {
                  "step": "Taking $13$ from the first factor and $6$ from the second gives the pairs $(m, n)$: $(4, 15)$, $(8, 11)$ and $(38, 1)$.",
                  "reason": "Adding the same number to both sides: $-13$ is added to both sides of $m + 13 = d$, and $-6$ to both sides of $n + 6 = \\dfrac{357}{d}$."
                },
                {
                  "step": "The values of $m$ are $4$, $8$ and $38$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $mn + 12m + 10n = 202$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, 13}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $mn + 12m + 10n = 202$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $12 \\cdot 10 = 120$ to both sides gives $mn + 12m + 10n + 120 = 202 + 120 = 322$.",
                  "reason": "Adding the same number to both sides: $120$ is the coefficient $12$ of $m$ times the coefficient $10$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 10)(n + 12) = 322$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 12$ and $b = 10$."
                },
                {
                  "step": "The numbers $m + 10$ and $n + 12$ are whole numbers above $10$ and $12$ with product $322$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 10$ is above $10$ and $n + 12$ is above $12$."
                },
                {
                  "step": "The factor pairs of $322$ with first factor above $10$ and second factor above $12$ are $14 \\cdot 23$, $23 \\cdot 14$.",
                  "reason": "Factor pairs of the constant: each divisor of $322$ above $10$ is taken in turn, and kept when $322$ divided by it is above $12$."
                },
                {
                  "step": "Taking $10$ from the first factor and $12$ from the second gives the pairs $(m, n)$: $(4, 11)$ and $(13, 2)$.",
                  "reason": "Adding the same number to both sides: $-10$ is added to both sides of $m + 10 = d$, and $-12$ to both sides of $n + 12 = \\dfrac{322}{d}$."
                },
                {
                  "step": "The values of $m$ are $4$ and $13$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every integer $x$ for which $xy + 7x - 15y = 46$ for some integer $y$.",
            "lines": [
              {
                "step": "Find every integer $x$ for which $xy + 7x - 15y = 46$ for some integer $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Adding $(-15) \\cdot 7 = -105$ to both sides gives $xy + 7x - 15y - 105 = 46 - 105 = -59$.",
                "reason": "Adding the same number to both sides: $-105$ is the coefficient $7$ of $x$ times the coefficient $-15$ of $y$, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(x - 15)(y + 7) = -59$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = 7$ and $b = -15$."
              },
              {
                "step": "The value of $x - 15$ is a divisor of $-59$: one of $1$, $59$, $-1$ and $-59$.",
                "reason": "Diophantine equation and factor pairs of the constant: $x - 15$ and $y + 7$ are integers whose product is $-59$, and a factor pair may hold one negative number."
              },
              {
                "step": "For each divisor $d$, $x = d + 15$ and $y = \\dfrac{-59}{d} - 7$, which gives the pairs $(x, y)$: $(16, -66)$, $(74, -8)$, $(14, 52)$ and $(-44, -6)$.",
                "reason": "Adding the same number to both sides: $15$ is added to both sides of $x - 15 = d$, and $-7$ to both sides of $y + 7 = \\dfrac{-59}{d}$."
              },
              {
                "step": "The values of $x$ are $-44$, $14$, $16$ and $74$.",
                "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every integer $x$ for which $xy - 12x + 2y = 93$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-71, -25, -5, -3, -1, 1, 21, 67}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $xy - 12x + 2y = 93$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $2 \\cdot (-12) = -24$ to both sides gives $xy - 12x + 2y - 24 = 93 - 24 = 69$.",
                  "reason": "Adding the same number to both sides: $-24$ is the coefficient $-12$ of $x$ times the coefficient $2$ of $y$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x + 2)(y - 12) = 69$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -12$ and $b = 2$."
                },
                {
                  "step": "The value of $x + 2$ is a divisor of $69$: one of $1$, $3$, $23$, $69$, $-1$, $-3$, $-23$ and $-69$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x + 2$ and $y - 12$ are integers whose product is $69$, and a factor pair may hold two negative numbers."
                },
                {
                  "step": "For each divisor $d$, $x = d - 2$ and $y = \\dfrac{69}{d} + 12$, which gives the pairs $(x, y)$: $(-1, 81)$, $(1, 35)$, $(21, 15)$, $(67, 13)$, $(-3, -57)$, $(-5, -11)$, $(-25, 9)$ and $(-71, 11)$.",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides of $x + 2 = d$, and $12$ to both sides of $y - 12 = \\dfrac{69}{d}$."
                },
                {
                  "step": "The values of $x$ are $-71$, $-25$, $-5$, $-3$, $-1$, $1$, $21$ and $67$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $xy - 11x + 8y = 27$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-69, -9, -7, 53}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $xy - 11x + 8y = 27$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $8 \\cdot (-11) = -88$ to both sides gives $xy - 11x + 8y - 88 = 27 - 88 = -61$.",
                  "reason": "Adding the same number to both sides: $-88$ is the coefficient $-11$ of $x$ times the coefficient $8$ of $y$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x + 8)(y - 11) = -61$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -11$ and $b = 8$."
                },
                {
                  "step": "The value of $x + 8$ is a divisor of $-61$: one of $1$, $61$, $-1$ and $-61$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x + 8$ and $y - 11$ are integers whose product is $-61$, and a factor pair may hold one negative number."
                },
                {
                  "step": "For each divisor $d$, $x = d - 8$ and $y = \\dfrac{-61}{d} + 11$, which gives the pairs $(x, y)$: $(-7, -50)$, $(53, 10)$, $(-9, 72)$ and $(-69, 12)$.",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides of $x + 8 = d$, and $11$ to both sides of $y - 11 = \\dfrac{-61}{d}$."
                },
                {
                  "step": "The values of $x$ are $-69$, $-9$, $-7$ and $53$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $xy - 11x + 3y = -94$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-130, -4, -2, 124}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $xy - 11x + 3y = -94$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $3 \\cdot (-11) = -33$ to both sides gives $xy - 11x + 3y - 33 = -94 - 33 = -127$.",
                  "reason": "Adding the same number to both sides: $-33$ is the coefficient $-11$ of $x$ times the coefficient $3$ of $y$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x + 3)(y - 11) = -127$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -11$ and $b = 3$."
                },
                {
                  "step": "The value of $x + 3$ is a divisor of $-127$: one of $1$, $127$, $-1$ and $-127$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x + 3$ and $y - 11$ are integers whose product is $-127$, and a factor pair may hold one negative number."
                },
                {
                  "step": "For each divisor $d$, $x = d - 3$ and $y = \\dfrac{-127}{d} + 11$, which gives the pairs $(x, y)$: $(-2, -116)$, $(124, 10)$, $(-4, 138)$ and $(-130, 12)$.",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides of $x + 3 = d$, and $11$ to both sides of $y - 11 = \\dfrac{-127}{d}$."
                },
                {
                  "step": "The values of $x$ are $-130$, $-4$, $-2$ and $124$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every positive whole number $m$ for which $\\dfrac{6}{m} + \\dfrac{7}{n} = 1$ for some positive whole number $n$.",
            "lines": [
              {
                "step": "Find every positive whole number $m$ for which $\\dfrac{6}{m} + \\dfrac{7}{n} = 1$ for some positive whole number $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Multiplying both sides by $mn$ gives $6n + 7m = mn$.",
                "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $mn$ keeps them equal."
              },
              {
                "step": "$mn - 7m - 6n = 0$",
                "reason": "Adding the same number to both sides: $-7m - 6n$ is added to both sides."
              },
              {
                "step": "$mn - 7m - 6n + 42 = 42$",
                "reason": "Adding the same number to both sides: $42 = (-7) \\cdot (-6)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(m - 6)(n - 7) = 42$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -7$ and $b = -6$."
              },
              {
                "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would be $m - 6$ between $-6$ and $0$ and $n - 7$ between $-7$ and $0$, with a product below $42$.",
                "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 6$ is above $-6$ and $n - 7$ is above $-7$."
              },
              {
                "step": "The factor pairs of $42$ are $1 \\cdot 42$, $2 \\cdot 21$, $3 \\cdot 14$, $6 \\cdot 7$, $7 \\cdot 6$, $14 \\cdot 3$, $21 \\cdot 2$, $42 \\cdot 1$.",
                "reason": "Factor pairs of the constant: $m - 6$ and $n - 7$ are positive whole numbers whose product is $42$."
              },
              {
                "step": "Adding $6$ to the first factor and $7$ to the second gives the pairs $(m, n)$: $(7, 49)$, $(8, 28)$, $(9, 21)$, $(12, 14)$, $(13, 13)$, $(20, 10)$, $(27, 9)$ and $(48, 8)$.",
                "reason": "Adding the same number to both sides: $6$ is added to both sides of $m - 6 = d$, and $7$ to both sides of $n - 7 = \\dfrac{42}{d}$."
              },
              {
                "step": "The values of $m$ are $7$, $8$, $9$, $12$, $13$, $20$, $27$ and $48$.",
                "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every positive whole number $m$ for which $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{13}$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{14, 26, 182}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{13}$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $13mn$ gives $13n + 13m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $13mn$ keeps them equal."
                },
                {
                  "step": "$mn - 13m - 13n = 0$",
                  "reason": "Adding the same number to both sides: $-13m - 13n$ is added to both sides."
                },
                {
                  "step": "$mn - 13m - 13n + 169 = 169$",
                  "reason": "Adding the same number to both sides: $169 = (-13) \\cdot (-13)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 13)(n - 13) = 169$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -13$ and $b = -13$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would be $m - 13$ between $-13$ and $0$ and $n - 13$ between $-13$ and $0$, with a product below $169$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 13$ is above $-13$ and $n - 13$ is above $-13$."
                },
                {
                  "step": "The factor pairs of $169$ are $1 \\cdot 169$, $13 \\cdot 13$, $169 \\cdot 1$.",
                  "reason": "Factor pairs of the constant: $m - 13$ and $n - 13$ are positive whole numbers whose product is $169$."
                },
                {
                  "step": "Adding $13$ to the first factor and $13$ to the second gives the pairs $(m, n)$: $(14, 182)$, $(26, 26)$ and $(182, 14)$.",
                  "reason": "Adding the same number to both sides: $13$ is added to both sides of $m - 13 = d$, and $13$ to both sides of $n - 13 = \\dfrac{169}{d}$."
                },
                {
                  "step": "The values of $m$ are $14$, $26$ and $182$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $\\dfrac{5}{m} + \\dfrac{8}{n} = 1$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{6, 7, 9, 10, 13, 15, 25, 45}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $\\dfrac{5}{m} + \\dfrac{8}{n} = 1$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $mn$ gives $5n + 8m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $mn$ keeps them equal."
                },
                {
                  "step": "$mn - 8m - 5n = 0$",
                  "reason": "Adding the same number to both sides: $-8m - 5n$ is added to both sides."
                },
                {
                  "step": "$mn - 8m - 5n + 40 = 40$",
                  "reason": "Adding the same number to both sides: $40 = (-8) \\cdot (-5)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 5)(n - 8) = 40$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -8$ and $b = -5$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would be $m - 5$ between $-5$ and $0$ and $n - 8$ between $-8$ and $0$, with a product below $40$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 5$ is above $-5$ and $n - 8$ is above $-8$."
                },
                {
                  "step": "The factor pairs of $40$ are $1 \\cdot 40$, $2 \\cdot 20$, $4 \\cdot 10$, $5 \\cdot 8$, $8 \\cdot 5$, $10 \\cdot 4$, $20 \\cdot 2$, $40 \\cdot 1$.",
                  "reason": "Factor pairs of the constant: $m - 5$ and $n - 8$ are positive whole numbers whose product is $40$."
                },
                {
                  "step": "Adding $5$ to the first factor and $8$ to the second gives the pairs $(m, n)$: $(6, 48)$, $(7, 28)$, $(9, 18)$, $(10, 16)$, $(13, 13)$, $(15, 12)$, $(25, 10)$ and $(45, 9)$.",
                  "reason": "Adding the same number to both sides: $5$ is added to both sides of $m - 5 = d$, and $8$ to both sides of $n - 8 = \\dfrac{40}{d}$."
                },
                {
                  "step": "The values of $m$ are $6$, $7$, $9$, $10$, $13$, $15$, $25$ and $45$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $\\dfrac{4}{m} + \\dfrac{7}{n} = 1$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{5, 6, 8, 11, 18, 32}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $\\dfrac{4}{m} + \\dfrac{7}{n} = 1$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $mn$ gives $4n + 7m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $mn$ keeps them equal."
                },
                {
                  "step": "$mn - 7m - 4n = 0$",
                  "reason": "Adding the same number to both sides: $-7m - 4n$ is added to both sides."
                },
                {
                  "step": "$mn - 7m - 4n + 28 = 28$",
                  "reason": "Adding the same number to both sides: $28 = (-7) \\cdot (-4)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 4)(n - 7) = 28$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -7$ and $b = -4$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would be $m - 4$ between $-4$ and $0$ and $n - 7$ between $-7$ and $0$, with a product below $28$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 4$ is above $-4$ and $n - 7$ is above $-7$."
                },
                {
                  "step": "The factor pairs of $28$ are $1 \\cdot 28$, $2 \\cdot 14$, $4 \\cdot 7$, $7 \\cdot 4$, $14 \\cdot 2$, $28 \\cdot 1$.",
                  "reason": "Factor pairs of the constant: $m - 4$ and $n - 7$ are positive whole numbers whose product is $28$."
                },
                {
                  "step": "Adding $4$ to the first factor and $7$ to the second gives the pairs $(m, n)$: $(5, 35)$, $(6, 21)$, $(8, 14)$, $(11, 11)$, $(18, 9)$ and $(32, 8)$.",
                  "reason": "Adding the same number to both sides: $4$ is added to both sides of $m - 4 = d$, and $7$ to both sides of $n - 7 = \\dfrac{28}{d}$."
                },
                {
                  "step": "The values of $m$ are $5$, $6$, $8$, $11$, $18$ and $32$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every integer $x$ for which $9xy + 15x - 21y = -18$ for some integer $y$.",
            "lines": [
              {
                "step": "Find every integer $x$ for which $9xy + 15x - 21y = -18$ for some integer $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x(3y + 5) - 21y = -18$",
                "reason": "Factoring: the common factor $3x$ is taken out of $9xy + 15x$."
              },
              {
                "step": "$3x(3y + 5) - 7(3y + 5) = -18 - 35 = -53$",
                "reason": "Adding the same number to both sides: $-21y = (-7) \\cdot 3y$, so adding $(-7) \\cdot 5 = -35$, the number that Factoring by adding a constant asks for, makes the last two terms $-7(3y + 5)$."
              },
              {
                "step": "$(3x - 7)(3y + 5) = -53$",
                "reason": "Factoring out a bracket: the bracket $(3y + 5)$ is taken out of both terms."
              },
              {
                "step": "The value of $3x - 7$ is a divisor of $-53$: one of $1$, $53$, $-1$ and $-53$.",
                "reason": "Diophantine equation and factor pairs of the constant: $3x - 7$ and $3y + 5$ are integers whose product is $-53$, and a factor pair may hold one negative number."
              },
              {
                "step": "Of these, only $53$ and $-1$ give an integer $x = \\dfrac{d + 7}{3}$.",
                "reason": "Dividing both sides by a nonzero number: $3x = d + 7$ gives $x = \\dfrac{d + 7}{3}$, an integer only when $3$ divides $d + 7$."
              },
              {
                "step": "For these, $y = \\dfrac{-53/d - 5}{3}$ is an integer for $53$ and $-1$, which gives the pairs $(x, y)$: $(20, -2)$ and $(2, 16)$.",
                "reason": "Dividing both sides by a nonzero number: $3y + 5 = \\dfrac{-53}{d}$ gives $y = \\dfrac{-53/d - 5}{3}$, an integer only when $3$ divides $\\dfrac{-53}{d} - 5$."
              },
              {
                "step": "The values of $x$ are $2$ and $20$.",
                "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every integer $x$ for which $15xy - 21x - 25y = 58$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2, 12}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $15xy - 21x - 25y = 58$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x(5y - 7) - 25y = 58$",
                  "reason": "Factoring: the common factor $3x$ is taken out of $15xy - 21x$."
                },
                {
                  "step": "$3x(5y - 7) - 5(5y - 7) = 58 + 35 = 93$",
                  "reason": "Adding the same number to both sides: $-25y = (-5) \\cdot 5y$, so adding $(-5) \\cdot (-7) = 35$, the number that Factoring by adding a constant asks for, makes the last two terms $-5(5y - 7)$."
                },
                {
                  "step": "$(3x - 5)(5y - 7) = 93$",
                  "reason": "Factoring out a bracket: the bracket $(5y - 7)$ is taken out of both terms."
                },
                {
                  "step": "The value of $3x - 5$ is a divisor of $93$: one of $1$, $3$, $31$, $93$, $-1$, $-3$, $-31$ and $-93$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $3x - 5$ and $5y - 7$ are integers whose product is $93$, and a factor pair may hold two negative numbers."
                },
                {
                  "step": "Of these, only $1$ and $31$ give an integer $x = \\dfrac{d + 5}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $3x = d + 5$ gives $x = \\dfrac{d + 5}{3}$, an integer only when $3$ divides $d + 5$."
                },
                {
                  "step": "For these, $y = \\dfrac{93/d + 7}{5}$ is an integer for $1$ and $31$, which gives the pairs $(x, y)$: $(2, 20)$ and $(12, 2)$.",
                  "reason": "Dividing both sides by a nonzero number: $5y - 7 = \\dfrac{93}{d}$ gives $y = \\dfrac{93/d + 7}{5}$, an integer only when $5$ divides $\\dfrac{93}{d} + 7$."
                },
                {
                  "step": "The values of $x$ are $2$ and $12$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $6xy - 9x + 14y = -45$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3, 5}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $6xy - 9x + 14y = -45$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x(2y - 3) + 14y = -45$",
                  "reason": "Factoring: the common factor $3x$ is taken out of $6xy - 9x$."
                },
                {
                  "step": "$3x(2y - 3) + 7(2y - 3) = -45 - 21 = -66$",
                  "reason": "Adding the same number to both sides: $14y = 7 \\cdot 2y$, so adding $7 \\cdot (-3) = -21$, the number that Factoring by adding a constant asks for, makes the last two terms $7(2y - 3)$."
                },
                {
                  "step": "$(3x + 7)(2y - 3) = -66$",
                  "reason": "Factoring out a bracket: the bracket $(2y - 3)$ is taken out of both terms."
                },
                {
                  "step": "The value of $3x + 7$ is a divisor of $-66$: one of $1$, $2$, $3$, $6$, $11$, $22$, $33$, $66$, $-1$, $-2$, $-3$, $-6$, $-11$, $-22$, $-33$ and $-66$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $3x + 7$ and $2y - 3$ are integers whose product is $-66$, and a factor pair may hold one negative number."
                },
                {
                  "step": "Of these, only $1$, $22$, $-2$ and $-11$ give an integer $x = \\dfrac{d - 7}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $3x = d - 7$ gives $x = \\dfrac{d - 7}{3}$, an integer only when $3$ divides $d - 7$."
                },
                {
                  "step": "For these, $y = \\dfrac{-66/d + 3}{2}$ is an integer for $22$ and $-2$, which gives the pairs $(x, y)$: $(5, 0)$ and $(-3, 18)$.",
                  "reason": "Dividing both sides by a nonzero number: $2y - 3 = \\dfrac{-66}{d}$ gives $y = \\dfrac{-66/d + 3}{2}$, an integer only when $2$ divides $\\dfrac{-66}{d} + 3$."
                },
                {
                  "step": "The values of $x$ are $-3$ and $5$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $6xy + 9x + 8y = -52$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, 12}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $6xy + 9x + 8y = -52$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x(2y + 3) + 8y = -52$",
                  "reason": "Factoring: the common factor $3x$ is taken out of $6xy + 9x$."
                },
                {
                  "step": "$3x(2y + 3) + 4(2y + 3) = -52 + 12 = -40$",
                  "reason": "Adding the same number to both sides: $8y = 4 \\cdot 2y$, so adding $4 \\cdot 3 = 12$, the number that Factoring by adding a constant asks for, makes the last two terms $4(2y + 3)$."
                },
                {
                  "step": "$(3x + 4)(2y + 3) = -40$",
                  "reason": "Factoring out a bracket: the bracket $(2y + 3)$ is taken out of both terms."
                },
                {
                  "step": "The value of $3x + 4$ is a divisor of $-40$: one of $1$, $2$, $4$, $5$, $8$, $10$, $20$, $40$, $-1$, $-2$, $-4$, $-5$, $-8$, $-10$, $-20$ and $-40$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $3x + 4$ and $2y + 3$ are integers whose product is $-40$, and a factor pair may hold one negative number."
                },
                {
                  "step": "Of these, only $1$, $4$, $10$, $40$, $-2$, $-5$, $-8$ and $-20$ give an integer $x = \\dfrac{d - 4}{3}$.",
                  "reason": "Dividing both sides by a nonzero number: $3x = d - 4$ gives $x = \\dfrac{d - 4}{3}$, an integer only when $3$ divides $d - 4$."
                },
                {
                  "step": "For these, $y = \\dfrac{-40/d - 3}{2}$ is an integer for $40$ and $-8$, which gives the pairs $(x, y)$: $(12, -2)$ and $(-4, 1)$.",
                  "reason": "Dividing both sides by a nonzero number: $2y + 3 = \\dfrac{-40}{d}$ gives $y = \\dfrac{-40/d - 3}{2}$, an integer only when $2$ divides $\\dfrac{-40}{d} - 3$."
                },
                {
                  "step": "The values of $x$ are $-4$ and $12$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every integer $x$ for which $\\dfrac{10}{x} + \\dfrac{13}{y} = 1$ for some integer $y$.",
            "lines": [
              {
                "step": "Find every integer $x$ for which $\\dfrac{10}{x} + \\dfrac{13}{y} = 1$ for some integer $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Multiplying both sides by $xy$ gives $10y + 13x = xy$.",
                "reason": "Clearing fractions: $x$ and $y$ are denominators, so not $0$, and multiplying both sides by $xy$ keeps them equal."
              },
              {
                "step": "$xy - 13x - 10y = 0$",
                "reason": "Adding the same number to both sides: $-13x - 10y$ is added to both sides."
              },
              {
                "step": "$xy - 13x - 10y + 130 = 130$",
                "reason": "Adding the same number to both sides: $130 = (-13) \\cdot (-10)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(x - 10)(y - 13) = 130$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -13$ and $b = -10$."
              },
              {
                "step": "The value of $x - 10$ is a divisor of $130$: one of $1$, $2$, $5$, $10$, $13$, $26$, $65$, $130$, $-1$, $-2$, $-5$, $-10$, $-13$, $-26$, $-65$ and $-130$.",
                "reason": "Diophantine equation and factor pairs of the constant: $x - 10$ and $y - 13$ are integers whose product is $130$, and a factor pair may hold two negative numbers."
              },
              {
                "step": "The pair $(-10) \\cdot (-13)$ gives $x = 0$ and $y = 0$, so it is left out.",
                "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
              },
              {
                "step": "For each other divisor $d$, $x = d + 10$ and $y = \\dfrac{130}{d} + 13$, which gives the pairs $(x, y)$: $(11, 143)$, $(12, 78)$, $(15, 39)$, $(20, 26)$, $(23, 23)$, $(36, 18)$, $(75, 15)$, $(140, 14)$, $(9, -117)$, $(8, -52)$, $(5, -13)$, $(-3, 3)$, $(-16, 8)$, $(-55, 11)$ and $(-120, 12)$.",
                "reason": "Adding the same number to both sides: $10$ is added to both sides of $x - 10 = d$, and $13$ to both sides of $y - 13 = \\dfrac{130}{d}$."
              },
              {
                "step": "The values of $x$ are $-120$, $-55$, $-16$, $-3$, $5$, $8$, $9$, $11$, $12$, $15$, $20$, $23$, $36$, $75$ and $140$.",
                "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every integer $x$ for which $\\dfrac{15}{x} + \\dfrac{9}{y} = 1$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-120, -30, -12, 6, 10, 12, 14, 16, 18, 20, 24, 30, 42, 60, 150}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $\\dfrac{15}{x} + \\dfrac{9}{y} = 1$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $xy$ gives $15y + 9x = xy$.",
                  "reason": "Clearing fractions: $x$ and $y$ are denominators, so not $0$, and multiplying both sides by $xy$ keeps them equal."
                },
                {
                  "step": "$xy - 9x - 15y = 0$",
                  "reason": "Adding the same number to both sides: $-9x - 15y$ is added to both sides."
                },
                {
                  "step": "$xy - 9x - 15y + 135 = 135$",
                  "reason": "Adding the same number to both sides: $135 = (-9) \\cdot (-15)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x - 15)(y - 9) = 135$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -9$ and $b = -15$."
                },
                {
                  "step": "The value of $x - 15$ is a divisor of $135$: one of $1$, $3$, $5$, $9$, $15$, $27$, $45$, $135$, $-1$, $-3$, $-5$, $-9$, $-15$, $-27$, $-45$ and $-135$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 15$ and $y - 9$ are integers whose product is $135$, and a factor pair may hold two negative numbers."
                },
                {
                  "step": "The pair $(-15) \\cdot (-9)$ gives $x = 0$ and $y = 0$, so it is left out.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "For each other divisor $d$, $x = d + 15$ and $y = \\dfrac{135}{d} + 9$, which gives the pairs $(x, y)$: $(16, 144)$, $(18, 54)$, $(20, 36)$, $(24, 24)$, $(30, 18)$, $(42, 14)$, $(60, 12)$, $(150, 10)$, $(14, -126)$, $(12, -36)$, $(10, -18)$, $(6, -6)$, $(-12, 4)$, $(-30, 6)$ and $(-120, 8)$.",
                  "reason": "Adding the same number to both sides: $15$ is added to both sides of $x - 15 = d$, and $9$ to both sides of $y - 9 = \\dfrac{135}{d}$."
                },
                {
                  "step": "The values of $x$ are $-120$, $-30$, $-12$, $6$, $10$, $12$, $14$, $16$, $18$, $20$, $24$, $30$, $42$, $60$ and $150$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $\\dfrac{10}{x} + \\dfrac{11}{y} = 1$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-100, -45, -12, -1, 5, 8, 9, 11, 12, 15, 20, 21, 32, 65, 120}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $\\dfrac{10}{x} + \\dfrac{11}{y} = 1$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $xy$ gives $10y + 11x = xy$.",
                  "reason": "Clearing fractions: $x$ and $y$ are denominators, so not $0$, and multiplying both sides by $xy$ keeps them equal."
                },
                {
                  "step": "$xy - 11x - 10y = 0$",
                  "reason": "Adding the same number to both sides: $-11x - 10y$ is added to both sides."
                },
                {
                  "step": "$xy - 11x - 10y + 110 = 110$",
                  "reason": "Adding the same number to both sides: $110 = (-11) \\cdot (-10)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x - 10)(y - 11) = 110$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -11$ and $b = -10$."
                },
                {
                  "step": "The value of $x - 10$ is a divisor of $110$: one of $1$, $2$, $5$, $10$, $11$, $22$, $55$, $110$, $-1$, $-2$, $-5$, $-10$, $-11$, $-22$, $-55$ and $-110$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 10$ and $y - 11$ are integers whose product is $110$, and a factor pair may hold two negative numbers."
                },
                {
                  "step": "The pair $(-10) \\cdot (-11)$ gives $x = 0$ and $y = 0$, so it is left out.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "For each other divisor $d$, $x = d + 10$ and $y = \\dfrac{110}{d} + 11$, which gives the pairs $(x, y)$: $(11, 121)$, $(12, 66)$, $(15, 33)$, $(20, 22)$, $(21, 21)$, $(32, 16)$, $(65, 13)$, $(120, 12)$, $(9, -99)$, $(8, -44)$, $(5, -11)$, $(-1, 1)$, $(-12, 6)$, $(-45, 9)$ and $(-100, 10)$.",
                  "reason": "Adding the same number to both sides: $10$ is added to both sides of $x - 10 = d$, and $11$ to both sides of $y - 11 = \\dfrac{110}{d}$."
                },
                {
                  "step": "The values of $x$ are $-100$, $-45$, $-12$, $-1$, $5$, $8$, $9$, $11$, $12$, $15$, $20$, $21$, $32$, $65$ and $120$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            },
            {
              "prompt": "Find every integer $x$ for which $\\dfrac{17}{x} + \\dfrac{11}{y} = 1$ for some integer $y$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-170, 6, 16, 18, 28, 34, 204}",
              "lines": [
                {
                  "step": "Find every integer $x$ for which $\\dfrac{17}{x} + \\dfrac{11}{y} = 1$ for some integer $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $xy$ gives $17y + 11x = xy$.",
                  "reason": "Clearing fractions: $x$ and $y$ are denominators, so not $0$, and multiplying both sides by $xy$ keeps them equal."
                },
                {
                  "step": "$xy - 11x - 17y = 0$",
                  "reason": "Adding the same number to both sides: $-11x - 17y$ is added to both sides."
                },
                {
                  "step": "$xy - 11x - 17y + 187 = 187$",
                  "reason": "Adding the same number to both sides: $187 = (-11) \\cdot (-17)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(x - 17)(y - 11) = 187$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -11$ and $b = -17$."
                },
                {
                  "step": "The value of $x - 17$ is a divisor of $187$: one of $1$, $11$, $17$, $187$, $-1$, $-11$, $-17$ and $-187$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 17$ and $y - 11$ are integers whose product is $187$, and a factor pair may hold two negative numbers."
                },
                {
                  "step": "The pair $(-17) \\cdot (-11)$ gives $x = 0$ and $y = 0$, so it is left out.",
                  "reason": "Excluded value: $x = 0$ or $y = 0$ makes a denominator $0$, so neither is a solution."
                },
                {
                  "step": "For each other divisor $d$, $x = d + 17$ and $y = \\dfrac{187}{d} + 11$, which gives the pairs $(x, y)$: $(18, 198)$, $(28, 28)$, $(34, 22)$, $(204, 12)$, $(16, -176)$, $(6, -6)$ and $(-170, 10)$.",
                  "reason": "Adding the same number to both sides: $17$ is added to both sides of $x - 17 = d$, and $11$ to both sides of $y - 11 = \\dfrac{187}{d}$."
                },
                {
                  "step": "The values of $x$ are $-170$, $6$, $16$, $18$, $28$, $34$ and $204$.",
                  "reason": "Answering the question asked: each value of $x$ comes with an integer $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t141-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 15m + 3n = 163$.",
            "lines": [
              {
                "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 15m + 3n = 163$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Adding $15 \\cdot 3 = 45$ to both sides gives $mn + 15m + 3n + 45 = 163 + 45 = 208$.",
                "reason": "Adding the same number to both sides: $45$ is the coefficient $15$ of $m$ times the coefficient $3$ of $n$, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(m + 3)(n + 15) = 208$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 15$ and $b = 3$."
              },
              {
                "step": "The numbers $m + 3$ and $n + 15$ are whole numbers above $3$ and $15$ with product $208$.",
                "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 3$ is above $3$ and $n + 15$ is above $15$."
              },
              {
                "step": "The factor pairs of $208$ with first factor above $3$ and second factor above $15$ are $4 \\cdot 52$, $8 \\cdot 26$, $13 \\cdot 16$.",
                "reason": "Factor pairs of the constant: each divisor of $208$ above $3$ is taken in turn, and kept when $208$ divided by it is above $15$."
              },
              {
                "step": "So there are $3$ pairs $(m, n)$.",
                "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 13m + 9n = 263$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 13m + 9n = 263$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $13 \\cdot 9 = 117$ to both sides gives $mn + 13m + 9n + 117 = 263 + 117 = 380$.",
                  "reason": "Adding the same number to both sides: $117$ is the coefficient $13$ of $m$ times the coefficient $9$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 9)(n + 13) = 380$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 13$ and $b = 9$."
                },
                {
                  "step": "The numbers $m + 9$ and $n + 13$ are whole numbers above $9$ and $13$ with product $380$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 9$ is above $9$ and $n + 13$ is above $13$."
                },
                {
                  "step": "The factor pairs of $380$ with first factor above $9$ and second factor above $13$ are $10 \\cdot 38$, $19 \\cdot 20$, $20 \\cdot 19$.",
                  "reason": "Factor pairs of the constant: each divisor of $380$ above $9$ is taken in turn, and kept when $380$ divided by it is above $13$."
                },
                {
                  "step": "So there are $3$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 15m + 6n = 267$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 15m + 6n = 267$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $15 \\cdot 6 = 90$ to both sides gives $mn + 15m + 6n + 90 = 267 + 90 = 357$.",
                  "reason": "Adding the same number to both sides: $90$ is the coefficient $15$ of $m$ times the coefficient $6$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 6)(n + 15) = 357$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 15$ and $b = 6$."
                },
                {
                  "step": "The numbers $m + 6$ and $n + 15$ are whole numbers above $6$ and $15$ with product $357$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 6$ is above $6$ and $n + 15$ is above $15$."
                },
                {
                  "step": "The factor pairs of $357$ with first factor above $6$ and second factor above $15$ are $7 \\cdot 51$, $17 \\cdot 21$, $21 \\cdot 17$.",
                  "reason": "Factor pairs of the constant: each divisor of $357$ above $6$ is taken in turn, and kept when $357$ divided by it is above $15$."
                },
                {
                  "step": "So there are $3$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 2m + 15n = 270$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $mn + 2m + 15n = 270$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $2 \\cdot 15 = 30$ to both sides gives $mn + 2m + 15n + 30 = 270 + 30 = 300$.",
                  "reason": "Adding the same number to both sides: $30$ is the coefficient $2$ of $m$ times the coefficient $15$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 15)(n + 2) = 300$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 2$ and $b = 15$."
                },
                {
                  "step": "The numbers $m + 15$ and $n + 2$ are whole numbers above $15$ and $2$ with product $300$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 15$ is above $15$ and $n + 2$ is above $2$."
                },
                {
                  "step": "The factor pairs of $300$ with first factor above $15$ and second factor above $2$ are $20 \\cdot 15$, $25 \\cdot 12$, $30 \\cdot 10$, $50 \\cdot 6$, $60 \\cdot 5$, $75 \\cdot 4$, $100 \\cdot 3$.",
                  "reason": "Factor pairs of the constant: each divisor of $300$ above $15$ is taken in turn, and kept when $300$ divided by it is above $2$."
                },
                {
                  "step": "So there are $7$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 14m + 14n = 444$.",
            "lines": [
              {
                "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 14m + 14n = 444$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Adding $14 \\cdot 14 = 196$ to both sides gives $mn + 14m + 14n + 196 = 444 + 196 = 640$.",
                "reason": "Adding the same number to both sides: $196$ is the coefficient $14$ of $m$ times the coefficient $14$ of $n$, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(m + 14)(n + 14) = 640$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 14$ and $b = 14$."
              },
              {
                "step": "The numbers $m + 14$ and $n + 14$ are whole numbers above $14$ with product $640$.",
                "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 14$ and $n + 14$ are above $14$."
              },
              {
                "step": "With $m < n$, the factor $m + 14$ is the smaller of the two, and a pair of equal factors is left out.",
                "reason": "Adding the same number, from arithmetic: adding $14$ to both sides of $m < n$ gives $m + 14 < n + 14$."
              },
              {
                "step": "The factor pairs of $640$ with the smaller factor first and above $14$ are $16 \\cdot 40$, $20 \\cdot 32$.",
                "reason": "Factor pairs of the constant: each divisor of $640$ above $14$ is taken in turn, and kept when $640$ divided by it is larger."
              },
              {
                "step": "So there are $2$ pairs $(m, n)$.",
                "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 8m + 8n = 116$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 8m + 8n = 116$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $8 \\cdot 8 = 64$ to both sides gives $mn + 8m + 8n + 64 = 116 + 64 = 180$.",
                  "reason": "Adding the same number to both sides: $64$ is the coefficient $8$ of $m$ times the coefficient $8$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 8)(n + 8) = 180$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 8$ and $b = 8$."
                },
                {
                  "step": "The numbers $m + 8$ and $n + 8$ are whole numbers above $8$ with product $180$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 8$ and $n + 8$ are above $8$."
                },
                {
                  "step": "With $m < n$, the factor $m + 8$ is the smaller of the two, and a pair of equal factors is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $8$ to both sides of $m < n$ gives $m + 8 < n + 8$."
                },
                {
                  "step": "The factor pairs of $180$ with the smaller factor first and above $8$ are $9 \\cdot 20$, $10 \\cdot 18$, $12 \\cdot 15$.",
                  "reason": "Factor pairs of the constant: each divisor of $180$ above $8$ is taken in turn, and kept when $180$ divided by it is larger."
                },
                {
                  "step": "So there are $3$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 11m + 11n = 119$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 11m + 11n = 119$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $11 \\cdot 11 = 121$ to both sides gives $mn + 11m + 11n + 121 = 119 + 121 = 240$.",
                  "reason": "Adding the same number to both sides: $121$ is the coefficient $11$ of $m$ times the coefficient $11$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 11)(n + 11) = 240$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 11$ and $b = 11$."
                },
                {
                  "step": "The numbers $m + 11$ and $n + 11$ are whole numbers above $11$ with product $240$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 11$ and $n + 11$ are above $11$."
                },
                {
                  "step": "With $m < n$, the factor $m + 11$ is the smaller of the two, and a pair of equal factors is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $11$ to both sides of $m < n$ gives $m + 11 < n + 11$."
                },
                {
                  "step": "The factor pairs of $240$ with the smaller factor first and above $11$ are $12 \\cdot 20$, $15 \\cdot 16$.",
                  "reason": "Factor pairs of the constant: each divisor of $240$ above $11$ is taken in turn, and kept when $240$ divided by it is larger."
                },
                {
                  "step": "So there are $2$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 9m + 9n = 469$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $mn + 9m + 9n = 469$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Adding $9 \\cdot 9 = 81$ to both sides gives $mn + 9m + 9n + 81 = 469 + 81 = 550$.",
                  "reason": "Adding the same number to both sides: $81$ is the coefficient $9$ of $m$ times the coefficient $9$ of $n$, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m + 9)(n + 9) = 550$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = 9$ and $b = 9$."
                },
                {
                  "step": "The numbers $m + 9$ and $n + 9$ are whole numbers above $9$ with product $550$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m + 9$ and $n + 9$ are above $9$."
                },
                {
                  "step": "With $m < n$, the factor $m + 9$ is the smaller of the two, and a pair of equal factors is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $9$ to both sides of $m < n$ gives $m + 9 < n + 9$."
                },
                {
                  "step": "The factor pairs of $550$ with the smaller factor first and above $9$ are $10 \\cdot 55$, $11 \\cdot 50$, $22 \\cdot 25$.",
                  "reason": "Factor pairs of the constant: each divisor of $550$ above $9$ is taken in turn, and kept when $550$ divided by it is larger."
                },
                {
                  "step": "So there are $3$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each kept factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{39}$.",
            "lines": [
              {
                "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{39}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Multiplying both sides by $39mn$ gives $39n + 39m = mn$.",
                "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $39mn$ keeps them equal."
              },
              {
                "step": "$mn - 39m - 39n = 0$",
                "reason": "Adding the same number to both sides: $-39m - 39n$ is added to both sides."
              },
              {
                "step": "$mn - 39m - 39n + 1521 = 1521$",
                "reason": "Adding the same number to both sides: $1521 = (-39) \\cdot (-39)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
              },
              {
                "step": "$(m - 39)(n - 39) = 1521$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -39$ and $b = -39$."
              },
              {
                "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would each be between $-39$ and $0$, with a product below $1521$.",
                "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 39$ and $n - 39$ are above $-39$."
              },
              {
                "step": "With $m < n$, the factor $m - 39$ is the smaller of the two, and the pair of equal factors $39 \\cdot 39$ is left out.",
                "reason": "Adding the same number, from arithmetic: adding $-39$ to both sides of $m < n$ gives $m - 39 < n - 39$."
              },
              {
                "step": "The factor pairs of $1521$ with the smaller factor first are $1 \\cdot 1521$, $3 \\cdot 507$, $9 \\cdot 169$, $13 \\cdot 117$.",
                "reason": "Factor pairs of the constant: $m - 39$ and $n - 39$ are positive whole numbers whose product is $1521$."
              },
              {
                "step": "So there are $4$ pairs $(m, n)$.",
                "reason": "Answering the question asked: each factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{28}$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{28}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $28mn$ gives $28n + 28m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $28mn$ keeps them equal."
                },
                {
                  "step": "$mn - 28m - 28n = 0$",
                  "reason": "Adding the same number to both sides: $-28m - 28n$ is added to both sides."
                },
                {
                  "step": "$mn - 28m - 28n + 784 = 784$",
                  "reason": "Adding the same number to both sides: $784 = (-28) \\cdot (-28)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 28)(n - 28) = 784$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -28$ and $b = -28$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would each be between $-28$ and $0$, with a product below $784$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 28$ and $n - 28$ are above $-28$."
                },
                {
                  "step": "With $m < n$, the factor $m - 28$ is the smaller of the two, and the pair of equal factors $28 \\cdot 28$ is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $-28$ to both sides of $m < n$ gives $m - 28 < n - 28$."
                },
                {
                  "step": "The factor pairs of $784$ with the smaller factor first are $1 \\cdot 784$, $2 \\cdot 392$, $4 \\cdot 196$, $7 \\cdot 112$, $8 \\cdot 98$, $14 \\cdot 56$, $16 \\cdot 49$.",
                  "reason": "Factor pairs of the constant: $m - 28$ and $n - 28$ are positive whole numbers whose product is $784$."
                },
                {
                  "step": "So there are $7$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{34}$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{34}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $34mn$ gives $34n + 34m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $34mn$ keeps them equal."
                },
                {
                  "step": "$mn - 34m - 34n = 0$",
                  "reason": "Adding the same number to both sides: $-34m - 34n$ is added to both sides."
                },
                {
                  "step": "$mn - 34m - 34n + 1156 = 1156$",
                  "reason": "Adding the same number to both sides: $1156 = (-34) \\cdot (-34)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 34)(n - 34) = 1156$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -34$ and $b = -34$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would each be between $-34$ and $0$, with a product below $1156$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 34$ and $n - 34$ are above $-34$."
                },
                {
                  "step": "With $m < n$, the factor $m - 34$ is the smaller of the two, and the pair of equal factors $34 \\cdot 34$ is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $-34$ to both sides of $m < n$ gives $m - 34 < n - 34$."
                },
                {
                  "step": "The factor pairs of $1156$ with the smaller factor first are $1 \\cdot 1156$, $2 \\cdot 578$, $4 \\cdot 289$, $17 \\cdot 68$.",
                  "reason": "Factor pairs of the constant: $m - 34$ and $n - 34$ are positive whole numbers whose product is $1156$."
                },
                {
                  "step": "So there are $4$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            },
            {
              "prompt": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{38}$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the number of pairs $(m, n)$ of positive whole numbers with $m < n$ and $\\dfrac{1}{m} + \\dfrac{1}{n} = \\dfrac{1}{38}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Multiplying both sides by $38mn$ gives $38n + 38m = mn$.",
                  "reason": "Clearing fractions: $m$ and $n$ are positive, so not $0$, and multiplying both sides by $38mn$ keeps them equal."
                },
                {
                  "step": "$mn - 38m - 38n = 0$",
                  "reason": "Adding the same number to both sides: $-38m - 38n$ is added to both sides."
                },
                {
                  "step": "$mn - 38m - 38n + 1444 = 1444$",
                  "reason": "Adding the same number to both sides: $1444 = (-38) \\cdot (-38)$ is the product of the two coefficients, the number that Factoring by adding a constant asks for."
                },
                {
                  "step": "$(m - 38)(n - 38) = 1444$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $x = m$, $y = n$, $a = -38$ and $b = -38$."
                },
                {
                  "step": "The product is positive, so the factors have the same sign; both factors are positive: two negative factors would each be between $-38$ and $0$, with a product below $1444$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $m$ and $n$ are positive whole numbers, so $m - 38$ and $n - 38$ are above $-38$."
                },
                {
                  "step": "With $m < n$, the factor $m - 38$ is the smaller of the two, and the pair of equal factors $38 \\cdot 38$ is left out.",
                  "reason": "Adding the same number, from arithmetic: adding $-38$ to both sides of $m < n$ gives $m - 38 < n - 38$."
                },
                {
                  "step": "The factor pairs of $1444$ with the smaller factor first are $1 \\cdot 1444$, $2 \\cdot 722$, $4 \\cdot 361$, $19 \\cdot 76$.",
                  "reason": "Factor pairs of the constant: $m - 38$ and $n - 38$ are positive whole numbers whose product is $1444$."
                },
                {
                  "step": "So there are $4$ pairs $(m, n)$.",
                  "reason": "Answering the question asked: each factor pair gives one pair $(m, n)$, and different factor pairs give different values of $m$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t141-k3",
      "forms": [
        {
          "example": {
            "problem": "Find an integer $c$ for which $xy + 15x - 13y + c$ is a product of two brackets with integer coefficients.",
            "lines": [
              {
                "step": "Find an integer $c$ for which $xy + 15x - 13y + c$ is a product of two brackets with integer coefficients.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xy + 15x - 13y - 195 = (x - 13)(y + 15)$",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = 15$ and $b = -13$."
              },
              {
                "step": "$c = 15 \\cdot (-13) = -195$",
                "reason": "Answering the question asked: with $c = ab$ the sum is the product of two brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $c$ for which $xy - 12x + 3y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "-36",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $xy - 12x + 3y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy - 12x + 3y - 36 = (x + 3)(y - 12)$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -12$ and $b = 3$."
                },
                {
                  "step": "$c = (-12) \\cdot 3 = -36$",
                  "reason": "Answering the question asked: with $c = ab$ the sum is the product of two brackets."
                }
              ]
            },
            {
              "prompt": "Find an integer $c$ for which $xy - 12x + 11y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "-132",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $xy - 12x + 11y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy - 12x + 11y - 132 = (x + 11)(y - 12)$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -12$ and $b = 11$."
                },
                {
                  "step": "$c = (-12) \\cdot 11 = -132$",
                  "reason": "Answering the question asked: with $c = ab$ the sum is the product of two brackets."
                }
              ]
            },
            {
              "prompt": "Find an integer $c$ for which $xy + 12x - 15y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "-180",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $xy + 12x - 15y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xy + 12x - 15y - 180 = (x - 15)(y + 12)$",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = 12$ and $b = -15$."
                },
                {
                  "step": "$c = 12 \\cdot (-15) = -180$",
                  "reason": "Answering the question asked: with $c = ab$ the sum is the product of two brackets."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find an integer $c$ for which $8xy - 36x - 6y + c$ is a product of two brackets with integer coefficients.",
            "lines": [
              {
                "step": "Find an integer $c$ for which $8xy - 36x - 6y + c$ is a product of two brackets with integer coefficients.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$8xy - 36x = 4x(2y - 9)$",
                "reason": "Factoring: the common factor $4x$ is taken out."
              },
              {
                "step": "$-6y + 27 = -3(2y - 9)$",
                "reason": "Factoring: $-6y = (-3) \\cdot 2y$, so the term $27 = (-3) \\cdot (-9)$ lets the common factor $-3$ come out with the same bracket."
              },
              {
                "step": "$8xy - 36x - 6y + 27 = (4x - 3)(2y - 9)$",
                "reason": "Factoring out a bracket: the bracket $(2y - 9)$ is taken out of both terms."
              },
              {
                "step": "$c = (-3) \\cdot (-9) = 27$",
                "reason": "Answering the question asked: with this $c$ the sum is the product of two brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find an integer $c$ for which $15xy + 24x + 25y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "40",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $15xy + 24x + 25y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15xy + 24x = 3x(5y + 8)$",
                  "reason": "Factoring: the common factor $3x$ is taken out."
                },
                {
                  "step": "$25y + 40 = 5(5y + 8)$",
                  "reason": "Factoring: $25y = 5 \\cdot 5y$, so the term $40 = 5 \\cdot 8$ lets the common factor $5$ come out with the same bracket."
                },
                {
                  "step": "$15xy + 24x + 25y + 40 = (3x + 5)(5y + 8)$",
                  "reason": "Factoring out a bracket: the bracket $(5y + 8)$ is taken out of both terms."
                },
                {
                  "step": "$c = 5 \\cdot 8 = 40$",
                  "reason": "Answering the question asked: with this $c$ the sum is the product of two brackets."
                }
              ]
            },
            {
              "prompt": "Find an integer $c$ for which $15xy - 12x + 10y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $15xy - 12x + 10y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15xy - 12x = 3x(5y - 4)$",
                  "reason": "Factoring: the common factor $3x$ is taken out."
                },
                {
                  "step": "$10y - 8 = 2(5y - 4)$",
                  "reason": "Factoring: $10y = 2 \\cdot 5y$, so the term $-8 = 2 \\cdot (-4)$ lets the common factor $2$ come out with the same bracket."
                },
                {
                  "step": "$15xy - 12x + 10y - 8 = (3x + 2)(5y - 4)$",
                  "reason": "Factoring out a bracket: the bracket $(5y - 4)$ is taken out of both terms."
                },
                {
                  "step": "$c = 2 \\cdot (-4) = -8$",
                  "reason": "Answering the question asked: with this $c$ the sum is the product of two brackets."
                }
              ]
            },
            {
              "prompt": "Find an integer $c$ for which $20xy + 32x + 35y + c$ is a product of two brackets with integer coefficients.",
              "form": "Answer as an integer.",
              "answer": "56",
              "lines": [
                {
                  "step": "Find an integer $c$ for which $20xy + 32x + 35y + c$ is a product of two brackets with integer coefficients.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$20xy + 32x = 4x(5y + 8)$",
                  "reason": "Factoring: the common factor $4x$ is taken out."
                },
                {
                  "step": "$35y + 56 = 7(5y + 8)$",
                  "reason": "Factoring: $35y = 7 \\cdot 5y$, so the term $56 = 7 \\cdot 8$ lets the common factor $7$ come out with the same bracket."
                },
                {
                  "step": "$20xy + 32x + 35y + 56 = (4x + 7)(5y + 8)$",
                  "reason": "Factoring out a bracket: the bracket $(5y + 8)$ is taken out of both terms."
                },
                {
                  "step": "$c = 7 \\cdot 8 = 56$",
                  "reason": "Answering the question asked: with this $c$ the sum is the product of two brackets."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t141-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $xy - 5x - 14y = 43$ for integers $x$ and $y$, and write that line right.",
            "given": [
              "$xy - 5x - 14y = 43$",
              "$xy - 5x - 14y + 70 = 43 + 70 = 113$",
              "$(x + 14)(y + 5) = 113$",
              "$x + 14 = 1$ or $x + 14 = 113$ or $x + 14 = -1$ or $x + 14 = -113$",
              "$x = -13$ or $x = 99$ or $x = -15$ or $x = -127$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $xy - 5x - 14y = 43$ for integers $x$ and $y$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes the left side as $(x + 14)(y + 5)$, whose product is $xy + 5x + 14y + 70$.",
                "reason": "A sign lost: Factoring by adding a constant puts the coefficient of $y$ in the bracket with $x$, $xy + ax + by + ab = (x + b)(y + a)$, and here $a = -5$ and $b = -14$."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $(x - 14)(y - 5) = 113$.",
                "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -5$ and $b = -14$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $xy - 12x - 4y = -29$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy - 12x - 4y = -29$",
                "$xy - 12x - 4y + (-4) \\cdot (-12) = -29 + (-4) \\cdot (-12) = 19$",
                "$(x + 4)(y + 12) = 19$",
                "$x + 4 = 1$ or $x + 4 = 19$ or $x + 4 = -1$ or $x + 4 = -19$",
                "$x = -3$ or $x = 15$ or $x = -5$ or $x = -23$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x-4)*(y-12) = 19",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy - 12x - 4y = -29$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the left side as $(x + 4)(y + 12)$, whose product is $xy + 12x + 4y + 48$.",
                  "reason": "A sign lost: Factoring by adding a constant puts the coefficient of $y$ in the bracket with $x$, $xy + ax + by + ab = (x + b)(y + a)$, and here $a = -12$ and $b = -4$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $(x - 4)(y - 12) = 19$.",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -12$ and $b = -4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $xy - 11x - 2y = 45$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy - 11x - 2y = 45$",
                "$x(y - 11) - 2y = 45$",
                "$x(y - 11) - 2y + (-2) \\cdot (-11) = 45 + (-2) \\cdot (-11) = 67$",
                "$(x + 2)(y + 11) = 67$",
                "$x + 2 = 1$ or $x + 2 = 67$ or $x + 2 = -1$ or $x + 2 = -67$",
                "$x = -1$ or $x = 65$ or $x = -3$ or $x = -69$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x-2)*(y-11) = 67",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy - 11x - 2y = 45$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the left side as $(x + 2)(y + 11)$, whose product is $xy + 11x + 2y + 22$.",
                  "reason": "A sign lost: Factoring by adding a constant puts the coefficient of $y$ in the bracket with $x$, $xy + ax + by + ab = (x + b)(y + a)$, and here $a = -11$ and $b = -2$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(x - 2)(y - 11) = 67$.",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -11$ and $b = -2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $xy - 6x - 10y = 47$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy - 6x - 10y = 47$",
                "$x(y - 6) - 10y = 47$",
                "$x(y - 6) - 10y + 60 = 47 + 60 = 107$",
                "$(x + 10)(y + 6) = 107$",
                "$x + 10 = 1$ or $x + 10 = 107$ or $x + 10 = -1$ or $x + 10 = -107$",
                "$x = -9$ or $x = 97$ or $x = -11$ or $x = -117$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x-10)*(y-6) = 107",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy - 6x - 10y = 47$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the left side as $(x + 10)(y + 6)$, whose product is $xy + 6x + 10y + 60$.",
                  "reason": "A sign lost: Factoring by adding a constant puts the coefficient of $y$ in the bracket with $x$, $xy + ax + by + ab = (x + b)(y + a)$, and here $a = -6$ and $b = -10$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(x - 10)(y - 6) = 107$.",
                  "reason": "Factoring by adding a constant: $xy + ax + by + ab = (x + b)(y + a)$, with $a = -6$ and $b = -10$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $xy - 8x + 9y = 115$ for integers $x$ and $y$, and write that line right.",
            "given": [
              "$xy - 8x + 9y = 115$",
              "$xy - 8x + 9y + 9 \\cdot (-8) = 115 + 9 \\cdot (-8) = 43$",
              "$(x + 9)(y - 8) = 43$",
              "$x + 9 = 1$ or $x + 9 = 43$",
              "$x = -8$ or $x = 34$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $xy - 8x + 9y = 115$ for integers $x$ and $y$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 3 are right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 4 keeps only the positive divisors of $43$ as values of $x + 9$.",
                "reason": "A sign lost: the problem asks for every integer, and two negative integers also have a positive product, as in $(-1) \\cdot (-43) = 43$."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 4 written right is $x + 9 = 1$, $x + 9 = 43$, $x + 9 = -1$ or $x + 9 = -43$.",
                "reason": "Diophantine equation and factor pairs of the constant: $x + 9$ and $y - 8$ are integers whose product is $43$, and a factor pair may hold two negative numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $xy - 11x - 15y = -64$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy - 11x - 15y = -64$",
                "$xy - 11x - 15y + (-15) \\cdot (-11) = -64 + (-15) \\cdot (-11) = 101$",
                "$(x - 15)(y - 11) = 101$",
                "$x - 15 = 1$ or $x - 15 = 101$",
                "$x = 16$ or $x = 116$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x-15 = 1 or x-15 = 101 or x-15 = -1 or x-15 = -101",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy - 11x - 15y = -64$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 keeps only the positive divisors of $101$ as values of $x - 15$.",
                  "reason": "A sign lost: the problem asks for every integer, and two negative integers also have a positive product, as in $(-1) \\cdot (-101) = 101$."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $x - 15 = 1$, $x - 15 = 101$, $x - 15 = -1$ or $x - 15 = -101$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 15$ and $y - 11$ are integers whose product is $101$, and a factor pair may hold two negative numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $xy + 15x - 4y = 91$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy + 15x - 4y = 91$",
                "$x(y + 15) - 4y = 91$",
                "$x(y + 15) - 4y + (-4) \\cdot 15 = 91 + (-4) \\cdot 15 = 31$",
                "$(x - 4)(y + 15) = 31$",
                "$x - 4 = 1$ or $x - 4 = 31$",
                "$x = 5$ or $x = 35$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x-4 = 1 or x-4 = 31 or x-4 = -1 or x-4 = -31",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy + 15x - 4y = 91$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 5 keeps only the positive divisors of $31$ as values of $x - 4$.",
                  "reason": "A sign lost: the problem asks for every integer, and two negative integers also have a positive product, as in $(-1) \\cdot (-31) = 31$."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $x - 4 = 1$, $x - 4 = 31$, $x - 4 = -1$ or $x - 4 = -31$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 4$ and $y + 15$ are integers whose product is $31$, and a factor pair may hold two negative numbers."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $xy - 8x - 12y = 67$ for integers $x$ and $y$, and write that line right.",
              "given": [
                "$xy - 8x - 12y = 67$",
                "$x(y - 8) - 12y = 67$",
                "$x(y - 8) - 12y + 96 = 67 + 96 = 163$",
                "$(x - 12)(y - 8) = 163$",
                "$x - 12 = 1$ or $x - 12 = 163$",
                "$x = 13$ or $x = 175$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x-12 = 1 or x-12 = 163 or x-12 = -1 or x-12 = -163",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $xy - 8x - 12y = 67$ for integers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 5 keeps only the positive divisors of $163$ as values of $x - 12$.",
                  "reason": "A sign lost: the problem asks for every integer, and two negative integers also have a positive product, as in $(-1) \\cdot (-163) = 163$."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $x - 12 = 1$, $x - 12 = 163$, $x - 12 = -1$ or $x - 12 = -163$.",
                  "reason": "Diophantine equation and factor pairs of the constant: $x - 12$ and $y - 8$ are integers whose product is $163$, and a factor pair may hold two negative numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $mn + 6m + 20n = 132$ for positive whole numbers $m$ and $n$, and write that line right.",
            "given": [
              "$mn + 6m + 20n = 132$",
              "$mn + 6m + 20n = 132 + 20 \\cdot 6 = 252$",
              "$(m + 20)(n + 6) = 372$",
              "$m + 20 = 31$",
              "$m = 11$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $mn + 6m + 20n = 132$ for positive whole numbers $m$ and $n$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 adds $120$ to the right side alone and runs on with a second equals sign, so it states $mn + 6m + 20n = 252$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $132$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $mn + 6m + 20n + 120 = 252$.",
                "reason": "Adding the same number to both sides: $120$ is added to the left side too, so the two sides stay equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $mn + 19m + 9n = 186$ for positive whole numbers $m$ and $n$, and write that line right.",
              "given": [
                "$mn + 19m + 9n = 186$",
                "$m(n + 19) + 9n = 186$",
                "$m(n + 19) + 9n = 186 + 171 = 357$",
                "$(m + 9)(n + 19) = 528$",
                "$m + 9 = 11$ or $m + 9 = 12$ or $m + 9 = 16$ or $m + 9 = 22$ or $m + 9 = 24$",
                "$m = 2$ or $m = 3$ or $m = 7$ or $m = 13$ or $m = 15$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: m*(n+19)+9*n+171 = 357",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $mn + 19m + 9n = 186$ for positive whole numbers $m$ and $n$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 adds $171$ to the right side alone and runs on with a second equals sign, so it states $m(n + 19) + 9n = 357$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $186$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $m(n + 19) + 9n + 171 = 357$.",
                  "reason": "Adding the same number to both sides: $171$ is added to the left side too, so the two sides stay equal."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $mn + 5m + 16n = 243$ for positive whole numbers $m$ and $n$, and write that line right.",
              "given": [
                "$mn + 5m + 16n = 243$",
                "$mn + 5m + 16n = 243 + 80 = 323$",
                "$(m + 16)(n + 5) = 403$",
                "$m + 16 = 31$",
                "$m = 15$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: m*n+5*m+16*n+80 = 323",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $mn + 5m + 16n = 243$ for positive whole numbers $m$ and $n$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 adds $80$ to the right side alone and runs on with a second equals sign, so it states $mn + 5m + 16n = 323$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 1 the left side is $243$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $mn + 5m + 16n + 80 = 323$.",
                  "reason": "Adding the same number to both sides: $80$ is added to the left side too, so the two sides stay equal."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $mn + 4m + 20n = 100$ for positive whole numbers $m$ and $n$, and write that line right.",
              "given": [
                "$mn + 4m + 20n = 100$",
                "$m(n + 4) + 20n = 100$",
                "$m(n + 4) + 20n = 100 + 80 = 180$",
                "$(m + 20)(n + 4) = 260$",
                "$m + 20 = 26$ or $m + 20 = 52$",
                "$m = 6$ or $m = 32$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: m*(n+4)+20*n+80 = 180",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $mn + 4m + 20n = 100$ for positive whole numbers $m$ and $n$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 adds $80$ to the right side alone and runs on with a second equals sign, so it states $m(n + 4) + 20n = 180$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and by line 2 the left side is $100$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $m(n + 4) + 20n + 80 = 180$.",
                  "reason": "Adding the same number to both sides: $80$ is added to the left side too, so the two sides stay equal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t141-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 13 more than their sum.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 13 more than their sum.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The product of $x$ and $y$ is $xy$.",
                "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers."
              },
              {
                "step": "Their sum is $x + y$, and 13 more than it is $x + y + 13$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "$xy = x + y + 13$",
                "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign, with the product on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 8 less than the sum of 3 times $x$ and 5 times $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*y = 3*x+5*y-8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 8 less than the sum of 3 times $x$ and 5 times $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers."
                },
                {
                  "step": "The sum of 3 times $x$ and 5 times $y$ is $3x + 5y$, and 8 less than it is $3x + 5y - 8$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount from what follows the words."
                },
                {
                  "step": "$xy = 3x + 5y - 8$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign, with the product on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ exceeds the sum of 5 times $x$ and 2 times $y$ by 16.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*y = 5*x+2*y+16",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ exceeds the sum of 5 times $x$ and 2 times $y$ by 16.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers."
                },
                {
                  "step": "The sum of 5 times $x$ and 2 times $y$ is $5x + 2y$, and exceeding it by 16 gives $5x + 2y + 16$.",
                  "reason": "Writing a sentence as an equation: \"exceeds by\" adds the amount to what is exceeded."
                },
                {
                  "step": "$xy = 5x + 2y + 16$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign, with the product on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 4 times their sum.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x*y = 4*(x+y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the product of $x$ and $y$ on the left: The product of $x$ and $y$ is 4 times their sum.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x$ and $y$ is $xy$.",
                  "reason": "Writing a sentence as an equation: \"the product of\" multiplies the two numbers."
                },
                {
                  "step": "Their sum is $x + y$, and 4 times it is $4(x + y)$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies the sum, which stays in a bracket."
                },
                {
                  "step": "$xy = 4(x + y)$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign, with the product on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with the sum of the reciprocals on the left: The sum of the reciprocals of $x$ and $y$ is the reciprocal of 9.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with the sum of the reciprocals on the left: The sum of the reciprocals of $x$ and $y$ is the reciprocal of 9.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The reciprocal of $x$ is $\\dfrac{1}{x}$, and the reciprocal of $y$ is $\\dfrac{1}{y}$.",
                "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the number."
              },
              {
                "step": "Their sum is $\\dfrac{1}{x} + \\dfrac{1}{y}$, and the reciprocal of 9 is $\\dfrac{1}{9}$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two reciprocals."
              },
              {
                "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{9}$",
                "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the difference on the left: The reciprocal of $x$ minus the reciprocal of $y$ is the reciprocal of 8.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x-1/y = 1/8",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the difference on the left: The reciprocal of $x$ minus the reciprocal of $y$ is the reciprocal of 8.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocal of $x$ is $\\dfrac{1}{x}$, and the reciprocal of $y$ is $\\dfrac{1}{y}$.",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the number."
                },
                {
                  "step": "Their difference is $\\dfrac{1}{x} - \\dfrac{1}{y}$, and the reciprocal of 8 is $\\dfrac{1}{8}$.",
                  "reason": "Writing a sentence as an equation: \"minus\" takes the second number from the first."
                },
                {
                  "step": "$\\dfrac{1}{x} - \\dfrac{1}{y} = \\dfrac{1}{8}$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the sum on the left: The sum of 3 times the reciprocal of $x$ and 5 times the reciprocal of $y$ is 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3/x+5/y = 2",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the sum on the left: The sum of 3 times the reciprocal of $x$ and 5 times the reciprocal of $y$ is 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocal of $x$ is $\\dfrac{1}{x}$, and the reciprocal of $y$ is $\\dfrac{1}{y}$.",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the number."
                },
                {
                  "step": "3 times the first is $\\dfrac{3}{x}$, 5 times the second is $\\dfrac{5}{y}$, and their sum is $\\dfrac{3}{x} + \\dfrac{5}{y}$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies each reciprocal, and \"the sum of\" adds the two."
                },
                {
                  "step": "$\\dfrac{3}{x} + \\dfrac{5}{y} = 2$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the sum of the reciprocals on the left: The sum of the reciprocals of $x$ and $y$ is the reciprocal of 16.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "1/x+1/y = 1/16",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the sum of the reciprocals on the left: The sum of the reciprocals of $x$ and $y$ is the reciprocal of 16.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The reciprocal of $x$ is $\\dfrac{1}{x}$, and the reciprocal of $y$ is $\\dfrac{1}{y}$.",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the number."
                },
                {
                  "step": "Their sum is $\\dfrac{1}{x} + \\dfrac{1}{y}$, and the reciprocal of 16 is $\\dfrac{1}{16}$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two reciprocals."
                },
                {
                  "step": "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{16}$",
                  "reason": "Writing a sentence as an equation: the verb of the sentence marks the place of the equals sign."
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
