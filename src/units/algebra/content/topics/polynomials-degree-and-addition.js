export default {
  "number": 166,
  "title": "Polynomials: degree, adding and subtracting",
  "section": 11,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "512-516, 522-524"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = 4x^3 - 5x^2 + 2x + 9$ and $g(x) = 6x^3 + 3x^2 - 8$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "-2/3",
    "solution": [
      "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = 4x^3 - 5x^2 + 2x + 9$ and $g(x) = 6x^3 + 3x^2 - 8$.",
      "$f(x) + cg(x) = (4x^3 - 5x^2 + 2x + 9) + c(6x^3 + 3x^2 - 8)$",
      "$f(x) + cg(x) = 4x^3 - 5x^2 + 2x + 9 + 6cx^3 + 3cx^2 - 8c$",
      "$f(x) + cg(x) = (4 + 6c)x^3 + (-5 + 3c)x^2 + 2x + (9 - 8c)$",
      "$4 + 6c = 0$",
      "$6c = -4$",
      "$c = -\\dfrac{2}{3}$",
      "So $c = -\\dfrac{2}{3}$: the coefficient of $x^2$ is then $-7$, not 0, so the degree is $2$."
    ]
  },
  "ideas": [
    {
      "name": "Polynomial",
      "concrete": "The expression $4x^3 + 7x - 5$ is a sum of three terms: $4$ times $x^3$, $7$ times $x^1$ and $-5$ times $x^0$, each a number times a whole-number power of $x$, so it is a polynomial in $x$. The expression $3x^2 + \\dfrac{8}{x}$ is not one: its term $\\dfrac{8}{x}$ is $8x^{-1}$, and $-1$ is not a whole number.",
      "general": "A **polynomial** in $x$ is a sum of terms, each a number times $x^k$ for a whole number $k$ at least 0. A letter under a root, in a denominator or in a negative or fractional power is never a term of a polynomial. Two polynomials are added or subtracted by collecting like terms."
    },
    {
      "name": "Degree",
      "concrete": "In $f(x) = -6x^5 + 2x^3 - 9$ the highest power of $x$ with a nonzero coefficient is $x^5$, so $f$ has degree 5. Its **leading term** is $-6x^5$ and its **leading coefficient** is $-6$. The polynomial $x^4 - 3x^2 + 2$ has leading coefficient $1$, so it is **monic**.",
      "general": "The **degree** of a polynomial is the highest power of $x$ with a nonzero coefficient. The term with that power is the **leading term**, and its coefficient is the **leading coefficient**. A polynomial whose leading coefficient is $1$ is **monic**. A nonzero number alone is a polynomial of degree 0."
    },
    {
      "name": "Constant term",
      "concrete": "The **constant term** of $f(x) = -6x^5 + 2x^3 - 9$ is $-9$, the term with no power of $x$, and $f(0) = -6 \\cdot 0^5 + 2 \\cdot 0^3 - 9 = -9$. At $x = 1$ every power of $x$ is 1, so $f(1) = -6 + 2 - 9 = -13$, the sum of the coefficients.",
      "general": "The **constant term** of a polynomial $f(x)$ is its term in $x^0$, and it equals $f(0)$. The sum of the coefficients of $f(x)$ equals $f(1)$."
    },
    {
      "name": "General form",
      "concrete": "The polynomial $-6x^5 + 2x^3 - 9$ of degree 5 is $a_5x^5 + a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0$ with $a_5 = -6$, $a_4 = 0$, $a_3 = 2$, $a_2 = 0$, $a_1 = 0$ and $a_0 = -9$. The number under each $a$ is the power of $x$ it multiplies.",
      "general": "A polynomial of degree $n$ in **general form** is $a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$, with one coefficient for each power of $x$ from $x^n$ down to $x^0$, and $a_n \\ne 0$. A missing power has coefficient 0."
    },
    {
      "name": "The degree of the zero polynomial is not defined",
      "concrete": "Taking $3x^4 - 8x^2 + 2$ from itself leaves $0x^4 + 0x^2 + 0$, the number 0. Every coefficient is 0, so no power of $x$ has a nonzero coefficient.",
      "general": "The **zero polynomial** is the number 0, with every coefficient 0. It has no term with a nonzero coefficient, so the degree of the zero polynomial is not defined."
    }
  ],
  "kinds": [
    {
      "id": "t166-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = -2x^3 + 6x^2 + 9$ and $g(x) = -4x^3 - 6x^2 - 11$.",
            "lines": [
              {
                "step": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = -2x^3 + 6x^2 + 9$ and $g(x) = -4x^3 - 6x^2 - 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) + cg(x) = (-2x^3 + 6x^2 + 9) + c(-4x^3 - 6x^2 - 11)$",
                "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
              },
              {
                "step": "$f(x) + cg(x) = -2x^3 + 6x^2 + 9 - 4cx^3 - 6cx^2 - 11c$",
                "reason": "Multiplying out: $c$ multiplies each term of $g(x)$."
              },
              {
                "step": "$f(x) + cg(x) = (-2 - 4c)x^3 + (6 - 6c)x^2 + (9 - 11c)$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
              },
              {
                "step": "$-2 - 4c = 0$",
                "reason": "Degree: degree $2$ needs no $x^3$ term, so the coefficient of $x^3$ is 0."
              },
              {
                "step": "$-4c = 2$",
                "reason": "Adding the same number to both sides: $2$ is added to both sides."
              },
              {
                "step": "$c = -\\dfrac{1}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              },
              {
                "step": "So $c = -\\dfrac{1}{2}$: the coefficient of $x^2$ is then $9$, not 0, so the degree is $2$.",
                "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = 8x^3 + 7x^2 + 6x$ and $g(x) = -6x^3 + 9x^2 - 7x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4/3",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = 8x^3 + 7x^2 + 6x$ and $g(x) = -6x^3 + 9x^2 - 7x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + cg(x) = (8x^3 + 7x^2 + 6x) + c(-6x^3 + 9x^2 - 7x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + cg(x) = 8x^3 + 7x^2 + 6x - 6cx^3 + 9cx^2 - 7cx$",
                  "reason": "Multiplying out: $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$f(x) + cg(x) = (8 - 6c)x^3 + (7 + 9c)x^2 + (6 - 7c)x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$8 - 6c = 0$",
                  "reason": "Degree: degree $2$ needs no $x^3$ term, so the coefficient of $x^3$ is 0."
                },
                {
                  "step": "$-6c = -8$",
                  "reason": "Adding the same number to both sides: $-8$ is added to both sides."
                },
                {
                  "step": "$c = \\dfrac{4}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                },
                {
                  "step": "So $c = \\dfrac{4}{3}$: the coefficient of $x^2$ is then $19$, not 0, so the degree is $2$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $3$, where $f(x) = -3x^4 - 9x^3 - 3x^2 - 4x + 8$ and $g(x) = 2x^4 + 4x^3 - 9x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/2",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $3$, where $f(x) = -3x^4 - 9x^3 - 3x^2 - 4x + 8$ and $g(x) = 2x^4 + 4x^3 - 9x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + cg(x) = (-3x^4 - 9x^3 - 3x^2 - 4x + 8) + c(2x^4 + 4x^3 - 9x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + cg(x) = -3x^4 - 9x^3 - 3x^2 - 4x + 8 + 2cx^4 + 4cx^3 - 9cx$",
                  "reason": "Multiplying out: $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$f(x) + cg(x) = (-3 + 2c)x^4 + (-9 + 4c)x^3 - 3x^2 + (-4 - 9c)x + 8$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$-3 + 2c = 0$",
                  "reason": "Degree: degree $3$ needs no $x^4$ term, so the coefficient of $x^4$ is 0."
                },
                {
                  "step": "$2c = 3$",
                  "reason": "Adding the same number to both sides: $3$ is added to both sides."
                },
                {
                  "step": "$c = \\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So $c = \\dfrac{3}{2}$: the coefficient of $x^3$ is then $-3$, not 0, so the degree is $3$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = -5x^3 + 8x^2 - 5x - 12$ and $g(x) = -2x^3 + 9x^2 - 2x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-5/2",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $f(x) + cg(x)$ has degree $2$, where $f(x) = -5x^3 + 8x^2 - 5x - 12$ and $g(x) = -2x^3 + 9x^2 - 2x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + cg(x) = (-5x^3 + 8x^2 - 5x - 12) + c(-2x^3 + 9x^2 - 2x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + cg(x) = -5x^3 + 8x^2 - 5x - 12 - 2cx^3 + 9cx^2 - 2cx$",
                  "reason": "Multiplying out: $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$f(x) + cg(x) = (-5 - 2c)x^3 + (8 + 9c)x^2 + (-5 - 2c)x - 12$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$-5 - 2c = 0$",
                  "reason": "Degree: degree $2$ needs no $x^3$ term, so the coefficient of $x^3$ is 0."
                },
                {
                  "step": "$-2c = 5$",
                  "reason": "Adding the same number to both sides: $5$ is added to both sides."
                },
                {
                  "step": "$c = -\\dfrac{5}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "So $c = -\\dfrac{5}{2}$: the coefficient of $x^2$ is then $-\\dfrac{29}{2}$, not 0, so the degree is $2$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $3$, where $f(x) = -6x^3 - 2x - 4$ and $g(x) = 2x^4 - 4x^3 - 10$.",
            "lines": [
              {
                "step": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $3$, where $f(x) = -6x^3 - 2x - 4$ and $g(x) = 2x^4 - 4x^3 - 10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$xf(x) + cg(x) = x(-6x^3 - 2x - 4) + c(2x^4 - 4x^3 - 10)$",
                "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
              },
              {
                "step": "$xf(x) + cg(x) = -6x^4 - 2x^2 - 4x + 2cx^4 - 4cx^3 - 10c$",
                "reason": "Multiplying out: $x$ multiplies each term of $f(x)$, and $c$ multiplies each term of $g(x)$."
              },
              {
                "step": "$xf(x) + cg(x) = (-6 + 2c)x^4 - 4cx^3 - 2x^2 - 4x - 10c$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
              },
              {
                "step": "$-6 + 2c = 0$",
                "reason": "Degree: degree $3$ needs no $x^4$ term, so the coefficient of $x^4$ is 0."
              },
              {
                "step": "$2c = 6$",
                "reason": "Adding the same number to both sides: $6$ is added to both sides."
              },
              {
                "step": "$c = 3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "So $c = 3$: the coefficient of $x^3$ is then $-12$, not 0, so the degree is $3$.",
                "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $2$, where $f(x) = -7x^2 - 6x + 7$ and $g(x) = -8x^3 + 3x^2 + 5x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-7/8",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $2$, where $f(x) = -7x^2 - 6x + 7$ and $g(x) = -8x^3 + 3x^2 + 5x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xf(x) + cg(x) = x(-7x^2 - 6x + 7) + c(-8x^3 + 3x^2 + 5x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$xf(x) + cg(x) = -7x^3 - 6x^2 + 7x - 8cx^3 + 3cx^2 + 5cx$",
                  "reason": "Multiplying out: $x$ multiplies each term of $f(x)$, and $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$xf(x) + cg(x) = (-7 - 8c)x^3 + (-6 + 3c)x^2 + (7 + 5c)x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$-7 - 8c = 0$",
                  "reason": "Degree: degree $2$ needs no $x^3$ term, so the coefficient of $x^3$ is 0."
                },
                {
                  "step": "$-8c = 7$",
                  "reason": "Adding the same number to both sides: $7$ is added to both sides."
                },
                {
                  "step": "$c = -\\dfrac{7}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-8$."
                },
                {
                  "step": "So $c = -\\dfrac{7}{8}$: the coefficient of $x^2$ is then $-\\dfrac{69}{8}$, not 0, so the degree is $2$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $3$, where $f(x) = 3x^3 - 3x^2 - 3$ and $g(x) = 2x^4 - 9x^3 - 4x^2 + 7x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3/2",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $3$, where $f(x) = 3x^3 - 3x^2 - 3$ and $g(x) = 2x^4 - 9x^3 - 4x^2 + 7x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xf(x) + cg(x) = x(3x^3 - 3x^2 - 3) + c(2x^4 - 9x^3 - 4x^2 + 7x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$xf(x) + cg(x) = 3x^4 - 3x^3 - 3x + 2cx^4 - 9cx^3 - 4cx^2 + 7cx$",
                  "reason": "Multiplying out: $x$ multiplies each term of $f(x)$, and $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$xf(x) + cg(x) = (3 + 2c)x^4 + (-3 - 9c)x^3 - 4cx^2 + (-3 + 7c)x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$3 + 2c = 0$",
                  "reason": "Degree: degree $3$ needs no $x^4$ term, so the coefficient of $x^4$ is 0."
                },
                {
                  "step": "$2c = -3$",
                  "reason": "Adding the same number to both sides: $-3$ is added to both sides."
                },
                {
                  "step": "$c = -\\dfrac{3}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So $c = -\\dfrac{3}{2}$: the coefficient of $x^3$ is then $\\dfrac{21}{2}$, not 0, so the degree is $3$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $2$, where $f(x) = -8x^2 - 7x + 12$ and $g(x) = -6x^3 + 5x^2 - 5x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-4/3",
              "lines": [
                {
                  "step": "Find the constant $c$ for which $xf(x) + cg(x)$ has degree $2$, where $f(x) = -8x^2 - 7x + 12$ and $g(x) = -6x^3 + 5x^2 - 5x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$xf(x) + cg(x) = x(-8x^2 - 7x + 12) + c(-6x^3 + 5x^2 - 5x)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$xf(x) + cg(x) = -8x^3 - 7x^2 + 12x - 6cx^3 + 5cx^2 - 5cx$",
                  "reason": "Multiplying out: $x$ multiplies each term of $f(x)$, and $c$ multiplies each term of $g(x)$."
                },
                {
                  "step": "$xf(x) + cg(x) = (-8 - 6c)x^3 + (-7 + 5c)x^2 + (12 - 5c)x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                },
                {
                  "step": "$-8 - 6c = 0$",
                  "reason": "Degree: degree $2$ needs no $x^3$ term, so the coefficient of $x^3$ is 0."
                },
                {
                  "step": "$-6c = 8$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$c = -\\dfrac{4}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-6$."
                },
                {
                  "step": "So $c = -\\dfrac{4}{3}$: the coefficient of $x^2$ is then $-\\dfrac{41}{3}$, not 0, so the degree is $2$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the degree of the polynomial $4x^9 + 8x^4 + 2x^{10} - 2x^4 + 5x^8 + 2x^5 - 8x^6 - 2x^{10}$.",
            "lines": [
              {
                "step": "Find the degree of the polynomial $4x^9 + 8x^4 + 2x^{10} - 2x^4 + 5x^8 + 2x^5 - 8x^6 - 2x^{10}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x^9 + 8x^4 + 2x^{10} - 2x^4 + 5x^8 + 2x^5 - 8x^6 - 2x^{10} = 4x^9 + 5x^8 - 8x^6 + 2x^5 + 6x^4$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
              },
              {
                "step": "The highest power of $x$ with a nonzero coefficient is $x^{9}$, so the degree is $9$.",
                "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the degree of the polynomial $4x^4 - 3 - 3x^5 - 6x^5$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the degree of the polynomial $4x^4 - 3 - 3x^5 - 6x^5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^4 - 3 - 3x^5 - 6x^5 = -9x^5 + 4x^4 - 3$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The highest power of $x$ with a nonzero coefficient is $x^{5}$, so the degree is $5$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the degree of the polynomial $-8x^6 - 2x^{16} + 2x^{12} - 4x^{12} - 9x^{13} + 2x^{16}$.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the degree of the polynomial $-8x^6 - 2x^{16} + 2x^{12} - 4x^{12} - 9x^{13} + 2x^{16}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8x^6 - 2x^{16} + 2x^{12} - 4x^{12} - 9x^{13} + 2x^{16} = -9x^{13} - 2x^{12} - 8x^6$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The highest power of $x$ with a nonzero coefficient is $x^{13}$, so the degree is $13$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            },
            {
              "prompt": "Find the degree of the polynomial $-2x^{10} + 2x^{13} - 3x^{11} - 2x^{13} + 8x^7 - 4x^5 + 10x^{11} - 4x$.",
              "form": "Answer as an integer.",
              "answer": "11",
              "lines": [
                {
                  "step": "Find the degree of the polynomial $-2x^{10} + 2x^{13} - 3x^{11} - 2x^{13} + 8x^7 - 4x^5 + 10x^{11} - 4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x^{10} + 2x^{13} - 3x^{11} - 2x^{13} + 8x^7 - 4x^5 + 10x^{11} - 4x = 7x^{11} - 2x^{10} + 8x^7 - 4x^5 - 4x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The highest power of $x$ with a nonzero coefficient is $x^{11}$, so the degree is $11$.",
                  "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the leading coefficient of the polynomial $-9x^9 - 7x^8 + 3x^{12} + 9x^7 - 3x^{12} + 9x^8$.",
            "lines": [
              {
                "step": "Find the leading coefficient of the polynomial $-9x^9 - 7x^8 + 3x^{12} + 9x^7 - 3x^{12} + 9x^8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-9x^9 - 7x^8 + 3x^{12} + 9x^7 - 3x^{12} + 9x^8 = -9x^9 + 2x^8 + 9x^7$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
              },
              {
                "step": "The leading term is $-9x^9$, so the leading coefficient is $-9$.",
                "reason": "Leading coefficient: the coefficient of the leading term, the term with the highest power of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the leading coefficient of the polynomial $4x^9 + 5x - 9x^{10} - 6x^9 + 9x^{10} - 3x^7$.",
              "form": "Answer as an integer.",
              "answer": "-2",
              "lines": [
                {
                  "step": "Find the leading coefficient of the polynomial $4x^9 + 5x - 9x^{10} - 6x^9 + 9x^{10} - 3x^7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^9 + 5x - 9x^{10} - 6x^9 + 9x^{10} - 3x^7 = -2x^9 - 3x^7 + 5x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The leading term is $-2x^9$, so the leading coefficient is $-2$.",
                  "reason": "Leading coefficient: the coefficient of the leading term, the term with the highest power of $x$."
                }
              ]
            },
            {
              "prompt": "Find the leading coefficient of the polynomial $-4x^4 + 7x^{11} + 5x^5 - 4x^{10} + 3x^8 - 2x^{10}$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the leading coefficient of the polynomial $-4x^4 + 7x^{11} + 5x^5 - 4x^{10} + 3x^8 - 2x^{10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x^4 + 7x^{11} + 5x^5 - 4x^{10} + 3x^8 - 2x^{10} = 7x^{11} - 6x^{10} + 3x^8 + 5x^5 - 4x^4$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The leading term is $7x^{11}$, so the leading coefficient is $7$.",
                  "reason": "Leading coefficient: the coefficient of the leading term, the term with the highest power of $x$."
                }
              ]
            },
            {
              "prompt": "Find the leading coefficient of the polynomial $5x^7 - 8x^2 + 3x^{12} + 6x^5 + 4x^2 - 3x^{12} + 8 + 4x^9 - 6x + 2x^3$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the leading coefficient of the polynomial $5x^7 - 8x^2 + 3x^{12} + 6x^5 + 4x^2 - 3x^{12} + 8 + 4x^9 - 6x + 2x^3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x^7 - 8x^2 + 3x^{12} + 6x^5 + 4x^2 - 3x^{12} + 8 + 4x^9 - 6x + 2x^3 = 4x^9 + 5x^7 + 6x^5 + 2x^3 - 4x^2 - 6x + 8$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added, and the terms are written in descending order of powers."
                },
                {
                  "step": "The leading term is $4x^9$, so the leading coefficient is $4$.",
                  "reason": "Leading coefficient: the coefficient of the leading term, the term with the highest power of $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $f(x) + g(x)$, where $f(x) = -2x^4 - 6x^3 - 7x^2 + 5x - 10$ and $g(x) = 5x^4 - 2x^3 - 2x - 5$.",
            "lines": [
              {
                "step": "Find $f(x) + g(x)$, where $f(x) = -2x^4 - 6x^3 - 7x^2 + 5x - 10$ and $g(x) = 5x^4 - 2x^3 - 2x - 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) + g(x) = (-2x^4 - 6x^3 - 7x^2 + 5x - 10) + (5x^4 - 2x^3 - 2x - 5)$",
                "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
              },
              {
                "step": "$f(x) + g(x) = (-2x^4 + 5x^4) + (-6x^3 - 2x^3) - 7x^2 + (5x - 2x) + (-10 - 5)$",
                "reason": "Collecting like terms: the terms with the same power of $x$ are placed side by side, each with its own sign."
              },
              {
                "step": "$f(x) + g(x) = 3x^4 - 8x^3 - 7x^2 + 3x - 15$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x) + g(x)$, where $f(x) = 2x^4 + 6x^3 + 2x^2 - 4x + 7$ and $g(x) = -5x^4 + 6x^3 - 12$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^4+12*x^3+2*x^2-4*x-5",
              "lines": [
                {
                  "step": "Find $f(x) + g(x)$, where $f(x) = 2x^4 + 6x^3 + 2x^2 - 4x + 7$ and $g(x) = -5x^4 + 6x^3 - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + g(x) = (2x^4 + 6x^3 + 2x^2 - 4x + 7) + (-5x^4 + 6x^3 - 12)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + g(x) = (2x^4 - 5x^4) + (6x^3 + 6x^3) + 2x^2 - 4x + (7 - 12)$",
                  "reason": "Collecting like terms: the terms with the same power of $x$ are placed side by side, each with its own sign."
                },
                {
                  "step": "$f(x) + g(x) = -3x^4 + 12x^3 + 2x^2 - 4x - 5$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find $f(x) + g(x)$, where $f(x) = -8x^3 + 5x + 10$ and $g(x) = 8x^4 - 9x^3 + 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "8*x^4-17*x^3+5*x+12",
              "lines": [
                {
                  "step": "Find $f(x) + g(x)$, where $f(x) = -8x^3 + 5x + 10$ and $g(x) = 8x^4 - 9x^3 + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + g(x) = (-8x^3 + 5x + 10) + (8x^4 - 9x^3 + 2)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + g(x) = 8x^4 + (-8x^3 - 9x^3) + 5x + (10 + 2)$",
                  "reason": "Collecting like terms: the terms with the same power of $x$ are placed side by side, each with its own sign."
                },
                {
                  "step": "$f(x) + g(x) = 8x^4 - 17x^3 + 5x + 12$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find $f(x) + g(x)$, where $f(x) = -8x^4 + 2x^2 - 9x$ and $g(x) = 8x^4 + 9x^2 + 7x - 10$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "11*x^2-2*x-10",
              "lines": [
                {
                  "step": "Find $f(x) + g(x)$, where $f(x) = -8x^4 + 2x^2 - 9x$ and $g(x) = 8x^4 + 9x^2 + 7x - 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) + g(x) = (-8x^4 + 2x^2 - 9x) + (8x^4 + 9x^2 + 7x - 10)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) + g(x) = (-8x^4 + 8x^4) + (2x^2 + 9x^2) + (-9x + 7x) - 10$",
                  "reason": "Collecting like terms: the terms with the same power of $x$ are placed side by side, each with its own sign."
                },
                {
                  "step": "$f(x) + g(x) = 11x^2 - 2x - 10$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x) - g(x)$, where $f(x) = 4x^4 + 9x^3 - 5x^2 + 7x$ and $g(x) = -5x^5 - 6x^3 - 8x^2 - 4$.",
            "lines": [
              {
                "step": "Find $f(x) - g(x)$, where $f(x) = 4x^4 + 9x^3 - 5x^2 + 7x$ and $g(x) = -5x^5 - 6x^3 - 8x^2 - 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(x) - g(x) = (4x^4 + 9x^3 - 5x^2 + 7x) - (-5x^5 - 6x^3 - 8x^2 - 4)$",
                "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
              },
              {
                "step": "$f(x) - g(x) = 4x^4 + 9x^3 - 5x^2 + 7x + 5x^5 + 6x^3 + 8x^2 + 4$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$f(x) - g(x) = 5x^5 + 4x^4 + 15x^3 + 3x^2 + 7x + 4$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x) - g(x)$, where $f(x) = 3x^3 - 6x^2 + 8x + 8$ and $g(x) = 9x^3 - 8x - 11$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x^3-6*x^2+16*x+19",
              "lines": [
                {
                  "step": "Find $f(x) - g(x)$, where $f(x) = 3x^3 - 6x^2 + 8x + 8$ and $g(x) = 9x^3 - 8x - 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) - g(x) = (3x^3 - 6x^2 + 8x + 8) - (9x^3 - 8x - 11)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) - g(x) = 3x^3 - 6x^2 + 8x + 8 - 9x^3 + 8x + 11$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(x) - g(x) = -6x^3 - 6x^2 + 16x + 19$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find $f(x) - g(x)$, where $f(x) = 6x^3 - 3x^2 + 2x$ and $g(x) = -8x^3 - 7x^2 + 6x - 4$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "14*x^3+4*x^2-4*x+4",
              "lines": [
                {
                  "step": "Find $f(x) - g(x)$, where $f(x) = 6x^3 - 3x^2 + 2x$ and $g(x) = -8x^3 - 7x^2 + 6x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) - g(x) = (6x^3 - 3x^2 + 2x) - (-8x^3 - 7x^2 + 6x - 4)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) - g(x) = 6x^3 - 3x^2 + 2x + 8x^3 + 7x^2 - 6x + 4$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(x) - g(x) = 14x^3 + 4x^2 - 4x + 4$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find $f(x) - g(x)$, where $f(x) = -8x^3 - 6x^2 - 4x - 2$ and $g(x) = -5x^3 + 6x^2 + 3x - 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*x^3-12*x^2-7*x",
              "lines": [
                {
                  "step": "Find $f(x) - g(x)$, where $f(x) = -8x^3 - 6x^2 - 4x - 2$ and $g(x) = -5x^3 + 6x^2 + 3x - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(x) - g(x) = (-8x^3 - 6x^2 - 4x - 2) - (-5x^3 + 6x^2 + 3x - 2)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$f(x) - g(x) = -8x^3 - 6x^2 - 4x - 2 + 5x^3 - 6x^2 - 3x + 2$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$f(x) - g(x) = -3x^3 - 12x^2 - 7x$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -4x^3 - 3x^2 - 5x + 12$ and $g(x) = 2x^3 - 6x^2 + 9x$.",
            "lines": [
              {
                "step": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -4x^3 - 3x^2 - 5x + 12$ and $g(x) = 2x^3 - 6x^2 + 9x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$h(x) = g(x) - f(x)$",
                "reason": "Adding the same number to both sides: $f(x)$ is taken from both sides."
              },
              {
                "step": "$h(x) = (2x^3 - 6x^2 + 9x) - (-4x^3 - 3x^2 - 5x + 12)$",
                "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
              },
              {
                "step": "$h(x) = 2x^3 - 6x^2 + 9x + 4x^3 + 3x^2 + 5x - 12$",
                "reason": "Subtracting a bracket changes every sign in it."
              },
              {
                "step": "$h(x) = 6x^3 - 3x^2 + 14x - 12$",
                "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -8x^4 + 2x^3 + 12$ and $g(x) = -4x^5 - 7x^3 + 8x^2 + 5x - 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^5+8*x^4-9*x^3+8*x^2+5*x-15",
              "lines": [
                {
                  "step": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -8x^4 + 2x^3 + 12$ and $g(x) = -4x^5 - 7x^3 + 8x^2 + 5x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(x) = g(x) - f(x)$",
                  "reason": "Adding the same number to both sides: $f(x)$ is taken from both sides."
                },
                {
                  "step": "$h(x) = (-4x^5 - 7x^3 + 8x^2 + 5x - 3) - (-8x^4 + 2x^3 + 12)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$h(x) = -4x^5 - 7x^3 + 8x^2 + 5x - 3 + 8x^4 - 2x^3 - 12$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$h(x) = -4x^5 + 8x^4 - 9x^3 + 8x^2 + 5x - 15$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -5x^3 - 2x^2 - 2x + 6$ and $g(x) = 2x^4 - 3x^3 + 7x$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^4+2*x^3+2*x^2+9*x-6",
              "lines": [
                {
                  "step": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = -5x^3 - 2x^2 - 2x + 6$ and $g(x) = 2x^4 - 3x^3 + 7x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(x) = g(x) - f(x)$",
                  "reason": "Adding the same number to both sides: $f(x)$ is taken from both sides."
                },
                {
                  "step": "$h(x) = (2x^4 - 3x^3 + 7x) - (-5x^3 - 2x^2 - 2x + 6)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$h(x) = 2x^4 - 3x^3 + 7x + 5x^3 + 2x^2 + 2x - 6$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$h(x) = 2x^4 + 2x^3 + 2x^2 + 9x - 6$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            },
            {
              "prompt": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = 2x^3 + 3x^2 + 4x + 11$ and $g(x) = -4x^4 - 9x^3 + 3x^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-4*x^4-11*x^3-4*x-11",
              "lines": [
                {
                  "step": "Find a polynomial $h(x)$ with $f(x) + h(x) = g(x)$, where $f(x) = 2x^3 + 3x^2 + 4x + 11$ and $g(x) = -4x^4 - 9x^3 + 3x^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$h(x) = g(x) - f(x)$",
                  "reason": "Adding the same number to both sides: $f(x)$ is taken from both sides."
                },
                {
                  "step": "$h(x) = (-4x^4 - 9x^3 + 3x^2) - (2x^3 + 3x^2 + 4x + 11)$",
                  "reason": "Function notation: $f(x)$ and $g(x)$ are replaced by their rules."
                },
                {
                  "step": "$h(x) = -4x^4 - 9x^3 + 3x^2 - 2x^3 - 3x^2 - 4x - 11$",
                  "reason": "Subtracting a bracket changes every sign in it."
                },
                {
                  "step": "$h(x) = -4x^4 - 11x^3 - 4x - 11$",
                  "reason": "Collecting like terms: the coefficients of each power of $x$ are added."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the constant term of $f(x) = -5(6x^4 - 4x^3 - 9x - 8) + 2(-6x^3 + 5x^2 + 2x + 7)$.",
            "lines": [
              {
                "step": "Find the constant term of $f(x) = -5(6x^4 - 4x^3 - 9x - 8) + 2(-6x^3 + 5x^2 + 2x + 7)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The constant term of $f(x)$ is $f(0)$.",
                "reason": "Constant term: each term with a power of $x$ is 0 at $x = 0$, so $f(0)$ is the constant term."
              },
              {
                "step": "$f(0) = -5 \\cdot (-8) + 2 \\cdot 7$",
                "reason": "Substituting a value: $0$ goes in place of $x$, and each term with a power of $x$ becomes 0, which leaves the constant in each bracket."
              },
              {
                "step": "$f(0) = 54$",
                "reason": "Order of operations: the products come before the sum or difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant term of $f(x) = 5(-2x^3 + 4x^2 - 3) + 4(-9x^4 + 4x^3 + 3x + 11)$.",
              "form": "Answer as an integer.",
              "answer": "29",
              "lines": [
                {
                  "step": "Find the constant term of $f(x) = 5(-2x^3 + 4x^2 - 3) + 4(-9x^4 + 4x^3 + 3x + 11)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant term of $f(x)$ is $f(0)$.",
                  "reason": "Constant term: each term with a power of $x$ is 0 at $x = 0$, so $f(0)$ is the constant term."
                },
                {
                  "step": "$f(0) = 5 \\cdot (-3) + 4 \\cdot 11$",
                  "reason": "Substituting a value: $0$ goes in place of $x$, and each term with a power of $x$ becomes 0, which leaves the constant in each bracket."
                },
                {
                  "step": "$f(0) = 29$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            },
            {
              "prompt": "Find the constant term of $f(x) = 4(2x^3 - 3x^2 + 3) + 2(5x^4 - 6x^3 - 2x^2 - 9)$.",
              "form": "Answer as an integer.",
              "answer": "-6",
              "lines": [
                {
                  "step": "Find the constant term of $f(x) = 4(2x^3 - 3x^2 + 3) + 2(5x^4 - 6x^3 - 2x^2 - 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant term of $f(x)$ is $f(0)$.",
                  "reason": "Constant term: each term with a power of $x$ is 0 at $x = 0$, so $f(0)$ is the constant term."
                },
                {
                  "step": "$f(0) = 4 \\cdot 3 + 2 \\cdot (-9)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$, and each term with a power of $x$ becomes 0, which leaves the constant in each bracket."
                },
                {
                  "step": "$f(0) = -6$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            },
            {
              "prompt": "Find the constant term of $f(x) = 5(-3x^3 - 9x^2 - 7x - 3) - 3(-2x^4 - 6x^2 + 8x - 9)$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the constant term of $f(x) = 5(-3x^3 - 9x^2 - 7x - 3) - 3(-2x^4 - 6x^2 + 8x - 9)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The constant term of $f(x)$ is $f(0)$.",
                  "reason": "Constant term: each term with a power of $x$ is 0 at $x = 0$, so $f(0)$ is the constant term."
                },
                {
                  "step": "$f(0) = 5 \\cdot (-3) - 3 \\cdot (-9)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$, and each term with a power of $x$ becomes 0, which leaves the constant in each bracket."
                },
                {
                  "step": "$f(0) = 12$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the coefficients of $f(x) = 3(7x^4 + 2x^3 - 8x^2 + 8) + 5(9x^3 - 2x - 5)$.",
            "lines": [
              {
                "step": "Find the sum of the coefficients of $f(x) = 3(7x^4 + 2x^3 - 8x^2 + 8) + 5(9x^3 - 2x - 5)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1) = a_n + \\dots + a_1 + a_0$, the sum of the coefficients."
              },
              {
                "step": "$f(1) = 3 \\cdot 9 + 5 \\cdot 2$",
                "reason": "Substituting a value: $1$ goes in place of $x$, and each power of $1$ is $1$, which leaves the sum of the numbers in each bracket."
              },
              {
                "step": "$f(1) = 37$",
                "reason": "Order of operations: the products come before the sum or difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the coefficients of $f(x) = -4(6x^2 - 3x - 4) - 2(-5x^4 + 3x^3 + 6x^2 + 2x + 8)$.",
              "form": "Answer as an integer.",
              "answer": "-24",
              "lines": [
                {
                  "step": "Find the sum of the coefficients of $f(x) = -4(6x^2 - 3x - 4) - 2(-5x^4 + 3x^3 + 6x^2 + 2x + 8)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1) = a_n + \\dots + a_1 + a_0$, the sum of the coefficients."
                },
                {
                  "step": "$f(1) = -4 \\cdot (-1) - 2 \\cdot 14$",
                  "reason": "Substituting a value: $1$ goes in place of $x$, and each power of $1$ is $1$, which leaves the sum of the numbers in each bracket."
                },
                {
                  "step": "$f(1) = -24$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            },
            {
              "prompt": "Find the sum of the coefficients of $f(x) = 5(9x^3 - 4x^2 - 2x + 12) + 6(3x^4 + 6x^3 + 6x^2 + 4x - 7)$.",
              "form": "Answer as an integer.",
              "answer": "147",
              "lines": [
                {
                  "step": "Find the sum of the coefficients of $f(x) = 5(9x^3 - 4x^2 - 2x + 12) + 6(3x^4 + 6x^3 + 6x^2 + 4x - 7)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1) = a_n + \\dots + a_1 + a_0$, the sum of the coefficients."
                },
                {
                  "step": "$f(1) = 5 \\cdot 15 + 6 \\cdot 12$",
                  "reason": "Substituting a value: $1$ goes in place of $x$, and each power of $1$ is $1$, which leaves the sum of the numbers in each bracket."
                },
                {
                  "step": "$f(1) = 147$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            },
            {
              "prompt": "Find the sum of the coefficients of $f(x) = -2(9x^2 - 4x - 3) + 6(-9x^3 - 4x^2 - 6x + 6)$.",
              "form": "Answer as an integer.",
              "answer": "-82",
              "lines": [
                {
                  "step": "Find the sum of the coefficients of $f(x) = -2(9x^2 - 4x - 3) + 6(-9x^3 - 4x^2 - 6x + 6)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1) = a_n + \\dots + a_1 + a_0$, the sum of the coefficients."
                },
                {
                  "step": "$f(1) = -2 \\cdot 2 + 6 \\cdot (-13)$",
                  "reason": "Substituting a value: $1$ goes in place of $x$, and each power of $1$ is $1$, which leaves the sum of the numbers in each bracket."
                },
                {
                  "step": "$f(1) = -82$",
                  "reason": "Order of operations: the products come before the sum or difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the constant $a$ for which the sum of the coefficients of $f(x) = -5x^4 + 2ax^3 - 7x^2 - 8$ is $-2$.",
            "lines": [
              {
                "step": "Find the constant $a$ for which the sum of the coefficients of $f(x) = -5x^4 + 2ax^3 - 7x^2 - 8$ is $-2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1)$ is the sum of the coefficients."
              },
              {
                "step": "$f(1) = -5 \\cdot 1^4 + 2a \\cdot 1^3 - 7 \\cdot 1^2 - 8$",
                "reason": "Substituting a value: $1$ goes in place of $x$."
              },
              {
                "step": "$f(1) = 2a - 20$",
                "reason": "Order of operations: each power of $1$ is $1$, the products come next, and the numbers are collected."
              },
              {
                "step": "$2a - 20 = -2$",
                "reason": "The sum of the coefficients is given as $-2$, so $f(1) = -2$."
              },
              {
                "step": "$2a = 18$",
                "reason": "Adding the same number to both sides: $20$ is added to both sides."
              },
              {
                "step": "$a = 9$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the constant $a$ for which the sum of the coefficients of $f(x) = 6x^4 + 3x^2 - 5ax + 7$ is $8$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/5",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the sum of the coefficients of $f(x) = 6x^4 + 3x^2 - 5ax + 7$ is $8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1)$ is the sum of the coefficients."
                },
                {
                  "step": "$f(1) = 6 \\cdot 1^4 + 3 \\cdot 1^2 - 5a \\cdot 1 + 7$",
                  "reason": "Substituting a value: $1$ goes in place of $x$."
                },
                {
                  "step": "$f(1) = -5a + 16$",
                  "reason": "Order of operations: each power of $1$ is $1$, the products come next, and the numbers are collected."
                },
                {
                  "step": "$-5a + 16 = 8$",
                  "reason": "The sum of the coefficients is given as $8$, so $f(1) = 8$."
                },
                {
                  "step": "$-5a = -8$",
                  "reason": "Adding the same number to both sides: $-16$ is added to both sides."
                },
                {
                  "step": "$a = \\dfrac{8}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                }
              ]
            },
            {
              "prompt": "Find the constant $a$ for which the sum of the coefficients of $f(x) = 6x^3 + 9x^2 - 5ax - 10$ is $7$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2/5",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the sum of the coefficients of $f(x) = 6x^3 + 9x^2 - 5ax - 10$ is $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1)$ is the sum of the coefficients."
                },
                {
                  "step": "$f(1) = 6 \\cdot 1^3 + 9 \\cdot 1^2 - 5a \\cdot 1 - 10$",
                  "reason": "Substituting a value: $1$ goes in place of $x$."
                },
                {
                  "step": "$f(1) = -5a + 5$",
                  "reason": "Order of operations: each power of $1$ is $1$, the products come next, and the numbers are collected."
                },
                {
                  "step": "$-5a + 5 = 7$",
                  "reason": "The sum of the coefficients is given as $7$, so $f(1) = 7$."
                },
                {
                  "step": "$-5a = 2$",
                  "reason": "Adding the same number to both sides: $-5$ is added to both sides."
                },
                {
                  "step": "$a = -\\dfrac{2}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                }
              ]
            },
            {
              "prompt": "Find the constant $a$ for which the sum of the coefficients of $f(x) = -5x^4 + 3ax^2 + 9x + 7$ is $29$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the constant $a$ for which the sum of the coefficients of $f(x) = -5x^4 + 3ax^2 + 9x + 7$ is $29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the coefficients of $f(x)$ is $f(1)$.",
                  "reason": "General form: at $x = 1$ each power of $x$ is 1, so $f(1)$ is the sum of the coefficients."
                },
                {
                  "step": "$f(1) = -5 \\cdot 1^4 + 3a \\cdot 1^2 + 9 \\cdot 1 + 7$",
                  "reason": "Substituting a value: $1$ goes in place of $x$."
                },
                {
                  "step": "$f(1) = 3a + 11$",
                  "reason": "Order of operations: each power of $1$ is $1$, the products come next, and the numbers are collected."
                },
                {
                  "step": "$3a + 11 = 29$",
                  "reason": "The sum of the coefficients is given as $29$, so $f(1) = 29$."
                },
                {
                  "step": "$3a = 18$",
                  "reason": "Adding the same number to both sides: $-11$ is added to both sides."
                },
                {
                  "step": "$a = 6$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $9^{1/2}x^5 - 8$ is a polynomial in $x$.",
            "lines": [
              {
                "step": "Decide whether $9^{1/2}x^5 - 8$ is a polynomial in $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The term $9^{1/2}x^5$ is $3x^5$, since $9^{1/2} = 3$.",
                "reason": "The definition of $x^{1/n}$ for even $n$: the nonnegative number whose square is $9$."
              },
              {
                "step": "So it is a polynomial.",
                "reason": "Polynomial: a sum of terms, each a number times a whole-number power of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\dfrac{x^2 + 4}{2x}$ is a polynomial in $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $\\dfrac{x^2 + 4}{2x}$ is a polynomial in $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The expression is $\\dfrac{x^2}{2x} + \\dfrac{4}{2x} = \\dfrac{x}{2} + \\dfrac{2}{x}$.",
                  "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left, then Cancelling a common factor in each fraction."
                },
                {
                  "step": "The term $\\dfrac{2}{x}$ is $2x^{-1}$, and $-1$ is not a whole number.",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$, with $n = 1$."
                },
                {
                  "step": "So it is not a polynomial.",
                  "reason": "Polynomial: a sum of terms, each a number times a whole-number power of $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt{7}\\,x^2 + 3x - 2$ is a polynomial in $x$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $\\sqrt{7}\\,x^2 + 3x - 2$ is a polynomial in $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The term $\\sqrt{7}\\,x^2$ is the number $\\sqrt{7}$ times $x^2$.",
                  "reason": "Positive square root: $\\sqrt{7}$ is a number, the positive number whose square is $7$."
                },
                {
                  "step": "So it is a polynomial.",
                  "reason": "Polynomial: a sum of terms, each a number times a whole-number power of $x$."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\dfrac{6}{x^3} - 4x + 9$ is a polynomial in $x$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $\\dfrac{6}{x^3} - 4x + 9$ is a polynomial in $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The term $\\dfrac{6}{x^3}$ is $6x^{-3}$, and $-3$ is not a whole number.",
                  "reason": "Negative exponent: $a^{-n} = \\dfrac{1}{a^n}$."
                },
                {
                  "step": "So it is not a polynomial.",
                  "reason": "Polynomial: a sum of terms, each a number times a whole-number power of $x$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k6",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = 8x^4 - 7x^3 + 8x^2 + 3x - 8$ and $g(x) = -8x^4 + 2x^3 - 8x$, and write that line right.",
            "given": [
              "$(8x^4 - 7x^3 + 8x^2 + 3x - 8) - (-8x^4 + 2x^3 - 8x)$",
              "$8x^4 - 7x^3 + 8x^2 + 3x - 8 + 8x^4 - 2x^3 - 8x$",
              "$(8x^4 + 8x^4) + (-7x^3 - 2x^3) + 8x^2 + (3x - 8x) - 8$",
              "$16x^4 - 9x^3 + 8x^2 - 5x - 8$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = 8x^4 - 7x^3 + 8x^2 + 3x - 8$ and $g(x) = -8x^4 + 2x^3 - 8x$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 keeps the term $-8x$ of $g(x)$ with its sign, after the minus sign in front of the bracket.",
                "reason": "Subtracting a bracket changes every sign in it: the term $-8x$ of $g(x)$ becomes $8x$ and keeps that sign in each later line."
              },
              {
                "step": "Line 2 written right is $8x^4 - 7x^3 + 8x^2 + 3x - 8 + 8x^4 - 2x^3 + 8x$.",
                "reason": "Subtracting a bracket changes every sign in it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = -3x^4 - 4x^3 + 3x^2 - 5x + 11$ and $g(x) = 9x^3 - 4x^2 - 7x - 5$, and write that line right.",
              "given": [
                "$(-3x^4 - 4x^3 + 3x^2 - 5x + 11) - (9x^3 - 4x^2 - 7x - 5)$",
                "$-3x^4 - 4x^3 + 3x^2 - 5x + 11 - 9x^3 + 4x^2 + 7x + 5$",
                "$-3x^4 + (-4x^3 - 9x^3) + (3x^2 + 4x^2) + (-5x - 7x) + (11 + 5)$",
                "$-3x^4 - 13x^3 + 7x^2 - 12x + 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: -3*x^4+(-4*x^3-9*x^3)+(3*x^2+4*x^2)+(-5*x+7*x)+(11+5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = -3x^4 - 4x^3 + 3x^2 - 5x + 11$ and $g(x) = 9x^3 - 4x^2 - 7x - 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the term $-7x$, while line 2 has $7x$ there: the sign changed when the term moved.",
                  "reason": "Subtracting a bracket changes every sign in it: the term $-7x$ of $g(x)$ becomes $7x$ and keeps that sign in each later line."
                },
                {
                  "step": "Line 3 written right is $-3x^4 + (-4x^3 - 9x^3) + (3x^2 + 4x^2) + (-5x + 7x) + (11 + 5)$.",
                  "reason": "Subtracting a bracket changes every sign in it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = -2x^3 - 7x + 2$ and $g(x) = 4x^3 + 8x^2 + 5$, and write that line right.",
              "given": [
                "$(-2x^3 - 7x + 2) - (4x^3 + 8x^2 + 5)$",
                "$-2x^3 - 7x + 2 - 4x^3 - 8x^2 + 5$",
                "$(-2x^3 - 4x^3) - 8x^2 - 7x + (2 + 5)$",
                "$-6x^3 - 8x^2 - 7x + 7$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -2*x^3-7*x+2-4*x^3-8*x^2-5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = -2x^3 - 7x + 2$ and $g(x) = 4x^3 + 8x^2 + 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 keeps the term $5$ of $g(x)$ with its sign, after the minus sign in front of the bracket.",
                  "reason": "Subtracting a bracket changes every sign in it: the term $5$ of $g(x)$ becomes $-5$ and keeps that sign in each later line."
                },
                {
                  "step": "Line 2 written right is $-2x^3 - 7x + 2 - 4x^3 - 8x^2 - 5$.",
                  "reason": "Subtracting a bracket changes every sign in it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = 8x^4 - 7x^3 - 9x^2 + 7x + 10$ and $g(x) = -3x^4 - 5x^3 - 9x + 2$, and write that line right.",
              "given": [
                "$(8x^4 - 7x^3 - 9x^2 + 7x + 10) - (-3x^4 - 5x^3 - 9x + 2)$",
                "$8x^4 - 7x^3 - 9x^2 + 7x + 10 + 3x^4 + 5x^3 + 9x - 2$",
                "$(8x^4 + 3x^4) + (-7x^3 + 5x^3) - 9x^2 + (7x + 9x) + (10 + 2)$",
                "$11x^4 - 2x^3 - 9x^2 + 16x + 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (8*x^4+3*x^4)+(-7*x^3+5*x^3)-9*x^2+(7*x+9*x)+(10-2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(x) - g(x)$, where $f(x) = 8x^4 - 7x^3 - 9x^2 + 7x + 10$ and $g(x) = -3x^4 - 5x^3 - 9x + 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the term $2$, while line 2 has $-2$ there: the sign changed when the term moved.",
                  "reason": "Subtracting a bracket changes every sign in it: the term $2$ of $g(x)$ becomes $-2$ and keeps that sign in each later line."
                },
                {
                  "step": "Line 3 written right is $(8x^4 + 3x^4) + (-7x^3 + 5x^3) - 9x^2 + (7x + 9x) + (10 - 2)$.",
                  "reason": "Subtracting a bracket changes every sign in it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t166-k7",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 3 in $x$ with leading term $7x^3$ and constant term $-2$. Use the form $y = ax^3 + bx^2 + cx + d$ with the known coefficients put in.",
            "lines": [
              {
                "step": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 3 in $x$ with leading term $7x^3$ and constant term $-2$. Use the form $y = ax^3 + bx^2 + cx + d$ with the known coefficients put in.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Of degree $3$, the polynomial is $y = ax^3 + bx^2 + cx + d$ with $a \\ne 0$.",
                "reason": "General form: a polynomial of degree $n$ has one coefficient for each power of $x$ from $x^n$ down to the constant term, and the coefficient of $x^n$ is not 0."
              },
              {
                "step": "The sentence gives $a = 7$ and $d = -2$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes an equation for one coefficient."
              },
              {
                "step": "$y = 7x^3 + bx^2 + cx - 2$",
                "reason": "Substituting a value: each known coefficient goes in place of its letter."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 4 in $x$ with leading coefficient $6$, no $x^3$ term, constant term $-5$ and coefficient of $x$ equal to its coefficient of $x^2$. Use the form $y = ax^4 + bx^3 + cx^2 + dx + e$ with the known coefficients put in, keeping $c$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6*x^4+c*x^2+c*x-5",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 4 in $x$ with leading coefficient $6$, no $x^3$ term, constant term $-5$ and coefficient of $x$ equal to its coefficient of $x^2$. Use the form $y = ax^4 + bx^3 + cx^2 + dx + e$ with the known coefficients put in, keeping $c$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Of degree $4$, the polynomial is $y = ax^4 + bx^3 + cx^2 + dx + e$ with $a \\ne 0$.",
                  "reason": "General form: a polynomial of degree $n$ has one coefficient for each power of $x$ from $x^n$ down to the constant term, and the coefficient of $x^n$ is not 0."
                },
                {
                  "step": "The sentence gives $a = 6$, $b = 0$, $d = c$ and $e = -5$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes an equation for one coefficient."
                },
                {
                  "step": "$y = 6x^4 + cx^2 + cx - 5$",
                  "reason": "Substituting a value: each known coefficient goes in place of its letter."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 3 in $x$ whose coefficient of $x^2$ is $5$ more than its leading coefficient and which has constant term $6$. Use the form $y = ax^3 + bx^2 + cx + d$ with the known coefficients put in, keeping $a$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = a*x^3+(a+5)*x^2+c*x+6",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 3 in $x$ whose coefficient of $x^2$ is $5$ more than its leading coefficient and which has constant term $6$. Use the form $y = ax^3 + bx^2 + cx + d$ with the known coefficients put in, keeping $a$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Of degree $3$, the polynomial is $y = ax^3 + bx^2 + cx + d$ with $a \\ne 0$.",
                  "reason": "General form: a polynomial of degree $n$ has one coefficient for each power of $x$ from $x^n$ down to the constant term, and the coefficient of $x^n$ is not 0."
                },
                {
                  "step": "The sentence gives $b = a + 5$ and $d = 6$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes an equation for one coefficient."
                },
                {
                  "step": "$y = ax^3 + (a + 5)x^2 + cx + 6$",
                  "reason": "Substituting a value: each known coefficient goes in place of its letter."
                }
              ]
            },
            {
              "prompt": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 4 in $x$ with leading coefficient $-3$, no $x^3$ term and no $x^2$ term. Use the form $y = ax^4 + bx^3 + cx^2 + dx + e$ with the known coefficients put in.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -3*x^4+d*x+e",
              "lines": [
                {
                  "step": "Write an equation for $y$, with $y$ alone on the left, where $y$ is a polynomial of degree 4 in $x$ with leading coefficient $-3$, no $x^3$ term and no $x^2$ term. Use the form $y = ax^4 + bx^3 + cx^2 + dx + e$ with the known coefficients put in.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Of degree $4$, the polynomial is $y = ax^4 + bx^3 + cx^2 + dx + e$ with $a \\ne 0$.",
                  "reason": "General form: a polynomial of degree $n$ has one coefficient for each power of $x$ from $x^n$ down to the constant term, and the coefficient of $x^n$ is not 0."
                },
                {
                  "step": "The sentence gives $a = -3$, $b = 0$ and $c = 0$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes an equation for one coefficient."
                },
                {
                  "step": "$y = -3x^4 + dx + e$",
                  "reason": "Substituting a value: each known coefficient goes in place of its letter."
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
      "id": "t166-p1",
      "method": "direct proof",
      "statement": "For nonzero polynomials $f$ and $g$ whose sum is not the zero polynomial, the degree of $f + g$ is at most the larger of the degrees of $f$ and $g$.",
      "idea": "Adding two polynomials only collects like terms, so no power of $x$ appears in the sum that was not in $f$ or in $g$.",
      "lines": [
        {
          "line": "Let $n$ be the larger of the degrees of $f$ and $g$.",
          "reason": "This is the hypothesis: $f$ and $g$ are polynomials, each with a degree."
        },
        {
          "line": "Every term of $f(x)$ has a power of $x$ at most $n$.",
          "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
        },
        {
          "line": "Every term of $g(x)$ has a power of $x$ at most $n$.",
          "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
        },
        {
          "line": "Each term of $f(x) + g(x)$ is a term of $f(x)$, a term of $g(x)$, or two like terms from them collected into one.",
          "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power."
        },
        {
          "line": "So every term of $f(x) + g(x)$ has a power of $x$ at most $n$.",
          "reason": "Lines 2, 3 and 4: collecting keeps each power, and none is above $n$."
        },
        {
          "line": "Therefore the degree of $f + g$ is at most $n$.",
          "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient. The sum is not the zero polynomial, so it has a degree."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t166-s1",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are nonzero polynomials and the degree of $g$ is less than the degree of $f$, then $f + g$ has the same degree as $f$. Facts it may use: degree, leading term, leading coefficient, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be the degree of $f$, and let $a_nx^n$ be its leading term, with $a_n \\ne 0$.",
            "reason": "Leading term: the term of $f(x)$ with the highest power of $x$, its coefficient not 0."
          },
          {
            "line": "Every term of $g(x)$ has a power of $x$ below $n$.",
            "reason": "This is the hypothesis: the degree of $g$ is less than $n$."
          },
          {
            "line": "So $g(x)$ holds no term in $x^n$.",
            "reason": "Line 2: $x^n$ is not below $n$."
          },
          {
            "line": "The term in $x^n$ of $f(x) + g(x)$ is $a_nx^n$.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power. By line 3 nothing from $g(x)$ joins $a_nx^n$."
          },
          {
            "line": "No term of $f(x)$ or of $g(x)$ has a power of $x$ above $n$, so no term of $f(x) + g(x)$ does.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power."
          },
          {
            "line": "So the highest power of $x$ with a nonzero coefficient in $f(x) + g(x)$ is $x^n$.",
            "reason": "Lines 4 and 5, with $a_n \\ne 0$ from line 1."
          },
          {
            "line": "Therefore $f + g$ has degree $n$, the degree of $f$.",
            "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
          }
        ]
      }
    },
    {
      "id": "t166-s2",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a monic polynomial and $g$ is a nonzero polynomial of lower degree than $f$, then $f + g$ is monic. Facts it may use: monic, degree, leading term, collecting like terms.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be the degree of $f$; the leading term of $f(x)$ is $x^n$.",
            "reason": "Monic: the leading coefficient of $f$ is 1."
          },
          {
            "line": "Every term of $g(x)$ has a power of $x$ below $n$.",
            "reason": "This is the hypothesis: the degree of $g$ is less than $n$."
          },
          {
            "line": "The polynomial $g(x)$ holds no term like $x^n$.",
            "reason": "Line 2: $x^n$ is not below $n$."
          },
          {
            "line": "The term in $x^n$ of $f(x) + g(x)$ is $x^n$.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power. By line 3 nothing from $g(x)$ joins $x^n$."
          },
          {
            "line": "No term of $f(x) + g(x)$ has a power of $x$ above $n$.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power. No term of $f(x)$ or of $g(x)$ has a power above $n$."
          },
          {
            "line": "So the leading term of $f(x) + g(x)$ is $x^n$.",
            "reason": "Leading term: the term with the highest power of $x$, by lines 4 and 5."
          },
          {
            "line": "Therefore $f + g$ is monic.",
            "reason": "Monic: the leading coefficient of $x^n$ is 1."
          }
        ]
      }
    },
    {
      "id": "t166-s3",
      "method": "proof of the contrapositive",
      "statement": "Prove that if $f$, $g$ and $f + g$ are nonzero polynomials and the degree of $f + g$ is less than both the degree of $f$ and the degree of $g$, then $f$ and $g$ have the same degree. Facts it may use: degree, leading term, collecting like terms, the commutative law of addition.",
      "check": {
        "proof": [
          {
            "line": "Suppose $f$ and $g$ have different degrees.",
            "reason": "Proof of the contrapositive: the conclusion is taken to be false."
          },
          {
            "line": "The sum $f + g$ is the same as $g + f$, so the names may be chosen with the degree $n$ of $f$ above the degree of $g$.",
            "reason": "The commutative law of addition, from arithmetic."
          },
          {
            "line": "The leading term of $f(x)$ is $a_nx^n$ with $a_n \\ne 0$.",
            "reason": "Leading term: the term with the highest power of $x$, its coefficient not 0."
          },
          {
            "line": "The polynomial $g(x)$ holds no term in $x^n$.",
            "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient. The degree of $g$ is below $n$."
          },
          {
            "line": "So the term in $x^n$ of $f(x) + g(x)$ is $a_nx^n$, with a nonzero coefficient.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power."
          },
          {
            "line": "So the degree of $f + g$ is at least $n$, the degree of $f$.",
            "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
          },
          {
            "line": "Therefore the degree of $f + g$ is not less than both degrees, which proves the statement.",
            "reason": "Proof of the contrapositive: the false conclusion makes the hypothesis false."
          }
        ]
      }
    },
    {
      "id": "t166-s4",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a nonzero polynomial and $c$ is a nonzero number, then $cf(x)$ is a polynomial with the same degree as $f$. Facts it may use: general form, degree, multiplying out, zero-product property.",
      "check": {
        "proof": [
          {
            "line": "Write $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ with $a_n \\ne 0$, where $n$ is the degree of $f$.",
            "reason": "General form: one coefficient for each power of $x$ from $x^n$ down, and $a_n \\ne 0$."
          },
          {
            "line": "Then $cf(x) = ca_nx^n + ca_{n-1}x^{n-1} + \\dots + ca_1x + ca_0$.",
            "reason": "Multiplying out: the number $c$ multiplies each term inside the bracket."
          },
          {
            "line": "Each term of $cf(x)$ is a number times a whole-number power of $x$, so $cf(x)$ is a polynomial.",
            "reason": "Polynomial: a sum of terms, each a number times a whole-number power of $x$."
          },
          {
            "line": "The product $ca_n$ is not 0.",
            "reason": "Zero-product property: a product is 0 only when a factor is 0, and $c \\ne 0$, $a_n \\ne 0$."
          },
          {
            "line": "No term of $cf(x)$ has a power of $x$ above $n$.",
            "reason": "Line 2 holds the powers $x^n$ down to $x^0$ only."
          },
          {
            "line": "Therefore $cf(x)$ has degree $n$, the degree of $f$.",
            "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
          }
        ]
      }
    },
    {
      "id": "t166-s5",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are monic polynomials of the same degree $n$, then $f(x) - g(x)$ is the zero polynomial or has degree less than $n$. Facts it may use: monic, degree, collecting like terms, subtracting a bracket, the degree of the zero polynomial is not defined.",
      "check": {
        "proof": [
          {
            "line": "The leading terms of $f(x)$ and of $g(x)$ are both $x^n$.",
            "reason": "Monic: each leading coefficient is 1, and each degree is $n$."
          },
          {
            "line": "Before collecting, the terms in $x^n$ of $f(x) - g(x)$ are $x^n$ from $f(x)$ and $-x^n$ from $-g(x)$.",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "Collected, the term in $x^n$ of $f(x) - g(x)$ is $x^n - x^n = 0$.",
            "reason": "Collecting like terms: the coefficients $1$ and $-1$ are added."
          },
          {
            "line": "No term of $f(x) - g(x)$ has a power of $x$ above $n$.",
            "reason": "Collecting like terms: only terms with the same power of $x$ combine, and collecting keeps that power. No term of $f(x)$ or of $g(x)$ has a power above $n$."
          },
          {
            "line": "So every term of $f(x) - g(x)$ with a nonzero coefficient has a power of $x$ below $n$.",
            "reason": "Lines 3 and 4."
          },
          {
            "line": "If every coefficient of $f(x) - g(x)$ is 0, it is the zero polynomial.",
            "reason": "The degree of the zero polynomial is not defined: the zero polynomial is the one with every coefficient 0."
          },
          {
            "line": "Otherwise the degree of $f - g$ is less than $n$.",
            "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient. By line 5 that power is below $n$."
          }
        ]
      }
    },
    {
      "id": "t166-s6",
      "method": "direct proof",
      "statement": "Prove that the constant term of $f(x) + g(x)$ is the sum of the constant terms of the polynomials $f(x)$ and $g(x)$. Facts it may use: constant term, sum of functions, substituting a value.",
      "check": {
        "proof": [
          {
            "line": "Let $h(x) = f(x) + g(x)$.",
            "reason": "Sum, difference, product and quotient of functions: $(f + g)(x)$ is $f(x) + g(x)$."
          },
          {
            "line": "The constant term of $h(x)$ is $h(0)$.",
            "reason": "Constant term: each term with a power of $x$ is 0 at $x = 0$."
          },
          {
            "line": "And $h(0) = f(0) + g(0)$.",
            "reason": "Substituting a value: $0$ goes in place of $x$ on both sides of line 1."
          },
          {
            "line": "The numbers $f(0)$ and $g(0)$ are the constant terms of $f(x)$ and of $g(x)$.",
            "reason": "Constant term: the value at 0 is the constant term."
          },
          {
            "line": "Therefore the constant term of $f(x) + g(x)$ is the sum of the two constant terms.",
            "reason": "Substituting a value: by line 4 the constant terms go in place of $f(0)$ and $g(0)$ in line 3."
          }
        ]
      }
    }
  ]
}
